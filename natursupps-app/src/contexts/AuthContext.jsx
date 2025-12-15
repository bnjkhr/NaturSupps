import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { auth, isConfigured } from '../firebase/config';
import { createUserProfile, loadUserData, saveUserData } from '../firebase/firestore';

// Context erstellen
const AuthContext = createContext(null);

// Deutsche Fehlermeldungen für Firebase Auth Errors
const getErrorMessage = (errorCode) => {
  const errorMessages = {
    'auth/email-already-in-use': 'Diese E-Mail-Adresse wird bereits verwendet.',
    'auth/invalid-email': 'Ungültige E-Mail-Adresse.',
    'auth/operation-not-allowed': 'Diese Anmeldemethode ist nicht aktiviert.',
    'auth/weak-password': 'Das Passwort ist zu schwach (mindestens 6 Zeichen).',
    'auth/user-disabled': 'Dieses Konto wurde deaktiviert.',
    'auth/user-not-found': 'Kein Konto mit dieser E-Mail-Adresse gefunden.',
    'auth/wrong-password': 'Falsches Passwort.',
    'auth/invalid-credential': 'Ungültige Anmeldedaten.',
    'auth/too-many-requests': 'Zu viele Anmeldeversuche. Bitte versuche es später erneut.',
    'auth/popup-closed-by-user': 'Anmeldung abgebrochen.',
    'auth/network-request-failed': 'Netzwerkfehler. Bitte überprüfe deine Internetverbindung.'
  };

  return errorMessages[errorCode] || 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.';
};

// Provider Komponente
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Auth State Listener
  useEffect(() => {
    if (!isConfigured || !auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);

      if (firebaseUser) {
        // Benutzerdaten aus Firestore laden
        const data = await loadUserData(firebaseUser.uid);
        setUserData(data);
      } else {
        setUserData(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Fehler zurücksetzen
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Registrierung mit E-Mail/Passwort
  const register = useCallback(async (email, password, displayName) => {
    if (!isConfigured || !auth) {
      setError('Firebase ist nicht konfiguriert.');
      return { success: false, error: 'Firebase ist nicht konfiguriert.' };
    }

    try {
      setError(null);
      const result = await createUserWithEmailAndPassword(auth, email, password);

      // Display Name setzen
      if (displayName) {
        await updateProfile(result.user, { displayName });
      }

      // Benutzerprofil in Firestore erstellen
      await createUserProfile(result.user.uid, {
        displayName: displayName || '',
        email
      });

      // localStorage-Daten migrieren
      await migrateLocalStorageData(result.user.uid);

      return { success: true, user: result.user };
    } catch (err) {
      const message = getErrorMessage(err.code);
      setError(message);
      return { success: false, error: message };
    }
  }, []);

  // Anmeldung mit E-Mail/Passwort
  const login = useCallback(async (email, password) => {
    if (!isConfigured || !auth) {
      setError('Firebase ist nicht konfiguriert.');
      return { success: false, error: 'Firebase ist nicht konfiguriert.' };
    }

    try {
      setError(null);
      const result = await signInWithEmailAndPassword(auth, email, password);

      // localStorage-Daten migrieren (beim ersten Login)
      await migrateLocalStorageData(result.user.uid);

      return { success: true, user: result.user };
    } catch (err) {
      const message = getErrorMessage(err.code);
      setError(message);
      return { success: false, error: message };
    }
  }, []);

  // Anmeldung mit Google
  const loginWithGoogle = useCallback(async () => {
    if (!isConfigured || !auth) {
      setError('Firebase ist nicht konfiguriert.');
      return { success: false, error: 'Firebase ist nicht konfiguriert.' };
    }

    try {
      setError(null);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // Prüfen ob neuer Benutzer
      const existingData = await loadUserData(result.user.uid);
      if (!existingData) {
        // Neues Profil erstellen
        await createUserProfile(result.user.uid, {
          displayName: result.user.displayName || '',
          email: result.user.email || ''
        });
      }

      // localStorage-Daten migrieren
      await migrateLocalStorageData(result.user.uid);

      return { success: true, user: result.user };
    } catch (err) {
      const message = getErrorMessage(err.code);
      setError(message);
      return { success: false, error: message };
    }
  }, []);

  // Abmeldung
  const logout = useCallback(async () => {
    if (!isConfigured || !auth) {
      return { success: false, error: 'Firebase ist nicht konfiguriert.' };
    }

    try {
      await signOut(auth);
      setUserData(null);
      return { success: true };
    } catch (err) {
      const message = getErrorMessage(err.code);
      setError(message);
      return { success: false, error: message };
    }
  }, []);

  // localStorage-Daten nach Firestore migrieren
  const migrateLocalStorageData = async (userId) => {
    try {
      // Bestehende Daten aus Firestore laden
      const existingData = await loadUserData(userId);

      // Nur migrieren wenn noch keine Supplements vorhanden
      if (existingData?.supplements?.length > 0) {
        return; // User hat bereits Daten in Firestore
      }

      // localStorage-Daten holen
      const localSupplements = localStorage.getItem('natursupps-supplements');
      const localFilters = localStorage.getItem('natursupps-filters');

      const updates = {};

      if (localSupplements) {
        const supplements = JSON.parse(localSupplements);
        if (supplements.length > 0) {
          updates.supplements = supplements;
        }
      }

      if (localFilters) {
        const filters = JSON.parse(localFilters);
        updates.filters = filters;
      }

      // Nur speichern wenn es etwas zu migrieren gibt
      if (Object.keys(updates).length > 0) {
        await saveUserData(userId, updates);
        console.log('localStorage-Daten erfolgreich migriert');
      }
    } catch (error) {
      console.error('Fehler bei der Datenmigration:', error);
    }
  };

  // Benutzerdaten aktualisieren (für useSupplements)
  const refreshUserData = useCallback(async () => {
    if (user) {
      const data = await loadUserData(user.uid);
      setUserData(data);
    }
  }, [user]);

  const value = {
    // User State
    user,
    userData,
    loading,
    error,
    isAuthenticated: !!user,
    isConfigured,

    // Auth Actions
    register,
    login,
    loginWithGoogle,
    logout,
    clearError,
    refreshUserData
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook für AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth muss innerhalb eines AuthProviders verwendet werden');
  }
  return context;
};

export default AuthContext;
