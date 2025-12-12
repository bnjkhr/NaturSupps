import React from 'react';
import { Sun, Leaf } from 'lucide-react';
import { getFoodsInPeakSeason, getCurrentMonth, MONTH_NAMES } from '../data/seasonality';

/**
 * Zeigt an, welche Lebensmittel gerade Hauptsaison haben
 */
const SeasonHighlight = () => {
  const currentMonth = getCurrentMonth();
  const peakFoods = getFoodsInPeakSeason();

  if (peakFoods.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl p-4 mb-6 border border-green-200">
      <div className="flex items-center mb-3">
        <Sun className="h-5 w-5 text-yellow-500 mr-2" />
        <h3 className="font-semibold text-gray-800">
          Saisonale Highlights im {MONTH_NAMES[currentMonth]}
        </h3>
      </div>

      <p className="text-sm text-gray-600 mb-3">
        Diese Lebensmittel sind jetzt besonders frisch, nährstoffreich und günstig:
      </p>

      <div className="flex flex-wrap gap-2">
        {peakFoods.map(food => (
          <span
            key={food}
            className="inline-flex items-center text-sm bg-white text-green-800 px-3 py-1 rounded-full border border-green-200 shadow-sm"
          >
            <Leaf className="h-3 w-3 mr-1 text-green-600" />
            {food}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SeasonHighlight;
