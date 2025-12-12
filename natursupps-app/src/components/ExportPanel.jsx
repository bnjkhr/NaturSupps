import React, { useState } from 'react';
import { Share2, Copy, Printer, Mail, MessageCircle, Check } from 'lucide-react';
import {
  formatShoppingListAsText,
  copyToClipboard,
  shareContent,
  canShare,
  printPage,
  getWhatsAppShareUrl,
  getEmailShareUrl
} from '../utils/export';

const ExportPanel = ({ shoppingList, costComparison }) => {
  const [copied, setCopied] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const formattedText = formatShoppingListAsText(shoppingList, costComparison);

  const handleCopy = async () => {
    const success = await copyToClipboard(formattedText);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    const shared = await shareContent({
      title: 'Meine NaturSupps Einkaufsliste',
      text: formattedText
    });

    if (!shared) {
      // Fallback: Zeige manuelle Optionen
      setShowOptions(true);
    }
  };

  const handleWhatsApp = () => {
    window.open(getWhatsAppShareUrl(formattedText), '_blank');
  };

  const handleEmail = () => {
    window.location.href = getEmailShareUrl(
      'Meine NaturSupps Einkaufsliste',
      formattedText
    );
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <h4 className="font-medium text-gray-800 mb-3 flex items-center">
        <Share2 className="h-5 w-5 mr-2 text-gray-600" />
        Liste exportieren
      </h4>

      <div className="flex flex-wrap gap-2">
        {/* Kopieren */}
        <button
          onClick={handleCopy}
          className={`
            flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all
            ${copied
              ? 'bg-green-100 text-green-800'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }
          `}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-2" />
              Kopiert!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 mr-2" />
              Kopieren
            </>
          )}
        </button>

        {/* Native Share (wenn verfügbar) */}
        {canShare() && (
          <button
            onClick={handleShare}
            className="flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            <Share2 className="h-4 w-4 mr-2" />
            Teilen
          </button>
        )}

        {/* WhatsApp */}
        <button
          onClick={handleWhatsApp}
          className="flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-green-500 text-white hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          WhatsApp
        </button>

        {/* E-Mail */}
        <button
          onClick={handleEmail}
          className="flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-gray-600 text-white hover:bg-gray-700 transition-colors"
        >
          <Mail className="h-4 w-4 mr-2" />
          E-Mail
        </button>

        {/* Drucken */}
        <button
          onClick={printPage}
          className="flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 transition-colors"
        >
          <Printer className="h-4 w-4 mr-2" />
          Drucken
        </button>
      </div>

      {showOptions && !canShare() && (
        <p className="mt-3 text-xs text-gray-500">
          Tipp: Kopiere die Liste und füge sie in deine Notizen-App ein.
        </p>
      )}
    </div>
  );
};

export default ExportPanel;
