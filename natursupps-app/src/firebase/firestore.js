// Firestore Datenbank-Funktionen
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  onSnapshot,
  serverTimestamp
} from 'firebase/firestore';
import { db, isConfigured } from './config';

/**
 * Erstellt oder aktualisiert Benutzerdaten in Firestore
 * @param {string} userId - Firebase User ID
 * @param {Object} data - Die zu speichernden Daten
 * @param {boolean} merge - Ob Daten gemergt werden sollen (default: true)
 */
export const saveUserData = async (userId, data, merge = true) => {
  if (!isConfigured || !db) {
    console.warn('Firebase nicht konfiguriert');
    return false;
  }

  try {
    const userRef = doc(db, 'users', userId);
    await setDoc(userRef, {
      ...data,
      updatedAt: serverTimestamp()
    }, { merge });
    return true;
  } catch (error) {
    console.error('Fehler beim Speichern der Benutzerdaten:', error);
    return false;
  }
};

/**
 * Lädt Benutzerdaten aus Firestore
 * @param {string} userId - Firebase User ID
 * @returns {Object|null} - Benutzerdaten oder null
 */
export const loadUserData = async (userId) => {
  if (!isConfigured || !db) {
    console.warn('Firebase nicht konfiguriert');
    return null;
  }

  try {
    const userRef = doc(db, 'users', userId);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  } catch (error) {
    console.error('Fehler beim Laden der Benutzerdaten:', error);
    return null;
  }
};

/**
 * Erstellt ein neues Benutzerprofil bei der Registrierung
 * @param {string} userId - Firebase User ID
 * @param {Object} profile - Profilinformationen (displayName, email)
 */
export const createUserProfile = async (userId, profile) => {
  if (!isConfigured || !db) {
    console.warn('Firebase nicht konfiguriert');
    return false;
  }

  try {
    const userRef = doc(db, 'users', userId);
    await setDoc(userRef, {
      profile: {
        displayName: profile.displayName || '',
        email: profile.email || '',
        createdAt: serverTimestamp()
      },
      supplements: [],
      filters: {
        vegan: false,
        vegetarisch: false,
        laktosefrei: false,
        glutenfrei: false,
        nussfrei: false,
        regional: false
      },
      favorites: [],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return true;
  } catch (error) {
    console.error('Fehler beim Erstellen des Benutzerprofils:', error);
    return false;
  }
};

/**
 * Aktualisiert spezifische Felder in den Benutzerdaten
 * @param {string} userId - Firebase User ID
 * @param {Object} updates - Zu aktualisierende Felder
 */
export const updateUserData = async (userId, updates) => {
  if (!isConfigured || !db) {
    console.warn('Firebase nicht konfiguriert');
    return false;
  }

  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      ...updates,
      updatedAt: serverTimestamp()
    });
    return true;
  } catch (error) {
    console.error('Fehler beim Aktualisieren der Benutzerdaten:', error);
    return false;
  }
};

/**
 * Abonniert Echtzeit-Updates für Benutzerdaten
 * @param {string} userId - Firebase User ID
 * @param {Function} callback - Callback bei Datenänderung
 * @returns {Function} - Unsubscribe-Funktion
 */
export const subscribeToUserData = (userId, callback) => {
  if (!isConfigured || !db) {
    console.warn('Firebase nicht konfiguriert');
    return () => {};
  }

  try {
    const userRef = doc(db, 'users', userId);
    return onSnapshot(userRef, (doc) => {
      if (doc.exists()) {
        callback(doc.data());
      } else {
        callback(null);
      }
    }, (error) => {
      console.error('Fehler beim Abonnieren der Benutzerdaten:', error);
    });
  } catch (error) {
    console.error('Fehler beim Einrichten des Abonnements:', error);
    return () => {};
  }
};

/**
 * Speichert Supplements eines Users
 * @param {string} userId - Firebase User ID
 * @param {Array} supplements - Array von Supplements
 */
export const saveSupplements = async (userId, supplements) => {
  return updateUserData(userId, { supplements });
};

/**
 * Speichert Filter-Einstellungen eines Users
 * @param {string} userId - Firebase User ID
 * @param {Object} filters - Filter-Objekt
 */
export const saveFilters = async (userId, filters) => {
  return updateUserData(userId, { filters });
};

const firestoreHelpers = {
  saveUserData,
  loadUserData,
  createUserProfile,
  updateUserData,
  subscribeToUserData,
  saveSupplements,
  saveFilters
};

export default firestoreHelpers;
