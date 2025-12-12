import React from 'react';
import { Leaf, Calendar } from 'lucide-react';
import { getSeasonInfo } from '../data/seasonality';

/**
 * Zeigt Saisoninfo für ein Lebensmittel an
 */
const SeasonBadge = ({ foodName, showDetails = false }) => {
  const seasonInfo = getSeasonInfo(foodName);

  if (seasonInfo.isYearRound && !showDetails) {
    return null; // Keine Anzeige für ganzjährig verfügbare Produkte
  }

  if (seasonInfo.isPeak) {
    return (
      <div className="inline-flex items-center">
        <span className="inline-flex items-center text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
          <Leaf className="h-3 w-3 mr-1" />
          Saison
        </span>
        {showDetails && (
          <span className="ml-2 text-xs text-green-600">
            {seasonInfo.info}
          </span>
        )}
      </div>
    );
  }

  if (!seasonInfo.isAvailable && showDetails) {
    return (
      <div className="inline-flex items-center">
        <span className="inline-flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
          <Calendar className="h-3 w-3 mr-1" />
          Nicht regional
        </span>
        <span className="ml-2 text-xs text-gray-500">
          {seasonInfo.info}
        </span>
      </div>
    );
  }

  return null;
};

export default SeasonBadge;
