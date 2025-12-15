import React, { useState } from 'react';
import { Leaf, LogIn } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';
import UserMenu from './UserMenu';
import PasswordChangeModal from './PasswordChangeModal';

const Header = () => {
  const { isAuthenticated, loading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const navLinks = [
    { label: 'Meine Apps', href: 'https://benkohler.de/#apps' },
    { label: 'Datenschutz', href: 'https://benkohler.de/datenschutz.html' },
    { label: 'Impressum', href: 'https://benkohler.de/impressum.html' }
  ];

  return (
    <>
      <header className="mb-8 pt-4">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          {/* Nav Links */}
          <nav className="flex items-center gap-1 sm:gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-gray-600 hover:text-green-600 transition-colors px-2 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Login / User Menu */}
          <div>
            {loading ? (
              <div className="w-9 h-9 rounded-full bg-gray-200 animate-pulse" />
            ) : isAuthenticated ? (
              <UserMenu onChangePassword={() => setShowPasswordModal(true)} />
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                <LogIn className="h-4 w-4" />
                <span className="hidden sm:inline">Anmelden</span>
              </button>
            )}
          </div>
        </div>

        {/* Logo und Tagline */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="h-10 w-10 text-green-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">NaturSupps</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Entdecke natürliche Alternativen zu deinen Supplements
          </p>
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />

      {/* Password Change Modal */}
      <PasswordChangeModal
        isOpen={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
      />
    </>
  );
};

export default Header;
