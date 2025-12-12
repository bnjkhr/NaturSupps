import React from 'react';
import { Leaf, AlertTriangle } from 'lucide-react';
import { Card } from './ui';
import SeasonBadge from './SeasonBadge';

const NutrientCard = ({ source }) => (
  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow bg-white">
    <div className="flex justify-between items-start mb-1">
      <h5 className="font-semibold text-gray-800 text-md">{source.food}</h5>
      <SeasonBadge foodName={source.food} />
    </div>
    <p className="text-sm text-blue-600 font-medium mb-2">{source.amount}</p>
    <p className="text-xs text-gray-600">{source.note}</p>
  </div>
);

const AnalysisResults = ({ results, activeFilterCount = 0 }) => {
  if (results.length === 0) return null;

  return (
    <section className="space-y-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 border-b pb-3 mb-6">
        Analyseergebnisse
        {activeFilterCount > 0 && (
          <span className="ml-2 text-sm font-normal text-gray-500">
            (gefiltert)
          </span>
        )}
      </h2>

      {results.map((result, index) => (
        <Card key={index}>
          <div className="flex items-center mb-4">
            <Leaf className="h-7 w-7 text-green-600 mr-3" />
            <h3 className="text-2xl font-semibold text-gray-800">
              {result.found ? result.data.name : result.supplement}
            </h3>
            {result.dosage && (
              <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                {result.dosage}
              </span>
            )}
          </div>

          {result.found ? (
            <div>
              <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-green-800">
                  <strong>Täglicher Bedarf:</strong> {result.data.dailyNeed}
                </p>
                <p className="text-sm text-green-800 mt-2">
                  <strong>Tipp:</strong> {result.data.tips}
                </p>
              </div>

              {/* Filter-Hinweis wenn Quellen gefiltert wurden */}
              {result.data.filteredSourceCount < result.data.originalSourceCount && (
                <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200 flex items-start">
                  <AlertTriangle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-800">
                    {result.data.filteredSourceCount} von {result.data.originalSourceCount} Quellen
                    entsprechen deinen Filtern.
                    {result.data.filteredSourceCount === 0 && (
                      <span className="block mt-1 font-medium">
                        Deaktiviere Filter um alle Optionen zu sehen.
                      </span>
                    )}
                  </p>
                </div>
              )}

              {result.data.naturalSources.length > 0 ? (
                <>
                  <h4 className="font-semibold mb-3 text-gray-700 text-lg">
                    Natürliche Quellen:
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {result.data.naturalSources.map((source, idx) => (
                      <NutrientCard key={idx} source={source} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4">
                  <p className="text-yellow-800">
                    Keine Lebensmittel gefunden, die deinen Filtern entsprechen.
                    Versuche weniger restriktive Filter.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-lg p-4">
              <p className="text-orange-800">
                Für <strong>{result.supplement}</strong> haben wir aktuell keine
                Daten in unserer Datenbank. Das Tool wird kontinuierlich
                erweitert. Versuche es mit anderen Schreibweisen oder gängigen
                Namen.
              </p>
            </div>
          )}
        </Card>
      ))}
    </section>
  );
};

export default AnalysisResults;
