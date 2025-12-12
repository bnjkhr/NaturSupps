import React from 'react';
import { AlertCircle } from 'lucide-react';

const DisclaimerBanner = () => {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 mb-8 shadow">
      <div className="flex items-start">
        <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
        <div className="text-sm text-yellow-800">
          <strong className="font-semibold">Wichtiger Hinweis:</strong> Diese
          Informationen dienen nur der allgemeinen Aufklärung und ersetzen nicht
          die Beratung durch einen Arzt oder Ernährungsberater. Konsultiere
          medizinische Fachkräfte vor Änderungen an deiner Supplementierung oder
          Ernährung.
        </div>
      </div>
    </div>
  );
};

export default DisclaimerBanner;
