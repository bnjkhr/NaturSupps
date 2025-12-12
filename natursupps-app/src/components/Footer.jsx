import React from 'react';
import { getSupplementKeys, getDisplayName } from '../data/supplements';

const Footer = () => {
  const supplementKeys = getSupplementKeys();

  return (
    <footer className="mt-12 bg-gray-100 rounded-lg p-6 text-center border-t">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">
        Unterstützte Supplements
      </h3>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-600">
        {supplementKeys.map((key) => (
          <span
            key={key}
            className="capitalize bg-gray-200 px-3 py-1 rounded-full"
          >
            {getDisplayName(key)}
          </span>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} NaturSupps Tool. Alle Rechte
        vorbehalten.
      </p>
    </footer>
  );
};

export default Footer;
