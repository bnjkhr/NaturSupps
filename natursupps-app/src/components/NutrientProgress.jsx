import React from 'react';
import { TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';
import { Card } from './ui';

/**
 * Zeigt Fortschrittsbalken für gefundene Nährstoffe
 */
const NutrientProgress = ({ results }) => {
  // Nur gefundene Ergebnisse mit natürlichen Quellen
  const foundResults = results.filter(r => r.found && r.data?.naturalSources?.length > 0);

  if (foundResults.length === 0) return null;

  // Berechne "Deckungsgrad" basierend auf Anzahl der Quellen
  const getProgress = (sourceCount, originalCount) => {
    if (originalCount === 0) return 0;
    // Max 100% wenn mindestens 3 Quellen verfügbar
    return Math.min(100, (sourceCount / Math.min(3, originalCount)) * 100);
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  const getStatusIcon = (progress) => {
    if (progress >= 80) return <CheckCircle className="h-4 w-4 text-green-500" />;
    if (progress >= 50) return <TrendingUp className="h-4 w-4 text-yellow-500" />;
    return <AlertCircle className="h-4 w-4 text-orange-500" />;
  };

  return (
    <Card className="mb-6">
      <Card.Header>
        <Card.Title icon={<TrendingUp className="h-6 w-6 text-blue-500" />}>
          Nährstoff-Übersicht
        </Card.Title>
        <p className="text-sm text-gray-500 mt-1">
          Verfügbare natürliche Quellen für deine Supplements
        </p>
      </Card.Header>

      <div className="space-y-4">
        {foundResults.map((result, index) => {
          const sourceCount = result.data.naturalSources.length;
          const originalCount = result.data.originalSourceCount || sourceCount;
          const progress = getProgress(sourceCount, originalCount);

          return (
            <div key={index} className="space-y-1">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {getStatusIcon(progress)}
                  <span className="font-medium text-gray-800">
                    {result.data.name}
                  </span>
                  {result.dosage && (
                    <span className="text-xs text-gray-500">({result.dosage})</span>
                  )}
                </div>
                <span className="text-sm text-gray-600">
                  {sourceCount} Quellen
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full transition-all duration-500 ${getProgressColor(progress)}`}
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Top 3 Quellen */}
              <div className="flex flex-wrap gap-1 mt-1">
                {result.data.naturalSources.slice(0, 3).map((source, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                  >
                    {source.food}
                  </span>
                ))}
                {sourceCount > 3 && (
                  <span className="text-xs text-gray-400">
                    +{sourceCount - 3} weitere
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legende */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex flex-wrap gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span>Sehr gut (3+ Quellen)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <span>Gut (2 Quellen)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <span>Begrenzt (1 Quelle)</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NutrientProgress;
