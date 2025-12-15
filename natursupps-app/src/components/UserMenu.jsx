import React, { useState, useRef, useEffect } from 'react';
import { LogOut, ChevronDown, Cloud, CloudOff, Key } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

/**
 * User-Menü mit Avatar und Dropdown
 */
const UserMenu = ({ onChangePassword }) => {
  const { user, logout, isAuthenticated, isConfigured } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Klick außerhalb schließt das Menü
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!isAuthenticated) {
    return null;
  }

  // Initialen aus Name oder E-Mail generieren
  const getInitials = () => {
    if (user?.displayName) {
      const parts = user.displayName.split(' ');
      if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
      }
      return user.displayName.substring(0, 2).toUpperCase();
    }
    if (user?.email) {
      return user.email.substring(0, 2).toUpperCase();
    }
    return 'U';
  };

  const handleLogout = async () => {
    setIsOpen(false);
    await logout();
  };

  const handleChangePassword = () => {
    setIsOpen(false);
    if (onChangePassword) {
      onChangePassword();
    }
  };

  // Prüfen ob User mit Passwort angemeldet ist (nicht Google)
  const isPasswordUser = user?.providerData?.some(p => p.providerId === 'password');

  return (
    <div className="relative" ref={menuRef}>
      {/* Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
      >
        {/* Avatar */}
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="Avatar"
            className="w-9 h-9 rounded-full border-2 border-green-500"
          />
        ) : (
          <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-medium">
            {getInitials()}
          </div>
        )}
        <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50">
          {/* User Info */}
          <div className="p-4 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center gap-3">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-medium">
                  {getInitials()}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 truncate">
                  {user?.displayName || 'Benutzer'}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>

          {/* Sync Status */}
          <div className="px-4 py-3 border-b border-gray-200">
            <div className="flex items-center gap-2 text-sm">
              {isConfigured ? (
                <>
                  <Cloud className="h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Daten werden synchronisiert</span>
                </>
              ) : (
                <>
                  <CloudOff className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-500">Nur lokal gespeichert</span>
                </>
              )}
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-2 space-y-1">
            {/* Passwort ändern - nur für E-Mail/Passwort User */}
            {isPasswordUser && (
              <button
                onClick={handleChangePassword}
                className="w-full flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Key className="h-4 w-4" />
                <span>Passwort ändern</span>
              </button>
            )}

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Abmelden</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
