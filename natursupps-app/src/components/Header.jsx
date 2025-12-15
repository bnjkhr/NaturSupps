import React, { useState } from 'react';
import { Leaf, LogIn, Cloud } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';
import UserMenu from './UserMenu';

const Header = () => {
  const { isAuthenticated, loading, isSyncing } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <header className="mb-8 pt-6">
        {/* Top Bar mit Login */}
        <div className="flex justify-end mb-4">
          {loading ? (
            <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
          ) : isAuthenticated ? (
            <div className="flex items-center gap-2">
              {isSyncing && (
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Cloud className="h-3 w-3 animate-pulse" />
                  <span>Speichern...</span>
                </div>
              )}
              <UserMenu />
            </div>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
            >
              <LogIn className="h-4 w-4" />
              <span>Anmelden</span>
            </button>
          )}
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
    </>
  );
};

export default Header;
