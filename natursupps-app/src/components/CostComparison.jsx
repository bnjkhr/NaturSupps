import React from 'react';
import { DollarSign } from 'lucide-react';
import { Card } from './ui';

const CostComparison = ({ costComparison, totalMonthlySavings }) => {
  if (costComparison.length === 0) return null;

  const findBestOption = (naturalOptions) => {
    if (!naturalOptions?.length) return null;
    return naturalOptions.reduce(
      (best, current) =>
        current.savingsPerMonth > best.savingsPerMonth ? current : best,
      { savingsPerMonth: -Infinity, food: 'N/A', dailyCost: 0 }
    );
  };

  return (
    <Card className="mb-8">
      <div className="flex items-center justify-between mb-6 border-b pb-3">
        <Card.Title icon={<DollarSign className="h-7 w-7 text-green-600" />}>
          Kosten-Nutzen-Vergleich
        </Card.Title>
        <span className="text-md bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
          Ersparnis: {totalMonthlySavings.toFixed(2)}EUR / Monat
        </span>
      </div>

      <div className="space-y-6">
        {costComparison.map((item, index) => {
          const bestOption = findBestOption(item.naturalOptions);

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-5 bg-gray-50"
            >
              <h4 className="font-semibold text-xl text-gray-800 mb-4">
                {item.supplement}
              </h4>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Supplement-Kosten */}
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h5 className="font-medium text-red-800 mb-2 text-lg">
                    Supplement
                  </h5>
                  <p className="text-md text-red-700">
                    {item.supplementCost.daily.toFixed(2)}EUR/Tag |{' '}
                    {item.supplementCost.monthly.toFixed(2)}EUR/Monat
                  </p>
                  <p className="text-xs text-red-600 mt-1">
                    {item.supplementCost.unit}
                  </p>
                </div>

                {/* Beste natürliche Alternative */}
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h5 className="font-medium text-green-800 mb-2 text-lg">
                    Beste natürliche Alternative
                  </h5>
                  {bestOption && bestOption.food !== 'N/A' ? (
                    <div>
                      <p className="text-md text-green-700">
                        <strong>{bestOption.food}:</strong>{' '}
                        {bestOption.dailyCost.toFixed(2)}EUR/Tag
                      </p>
                      <p className="text-sm text-green-600 mt-1">
                        Ersparnis: {bestOption.savingsPerMonth.toFixed(2)}EUR/Monat
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-600">
                      Keine Kostendaten für natürliche Alternativen.
                    </p>
                  )}
                </div>
              </div>

              {/* Alle Optionen */}
              {item.naturalOptions?.length > 0 && (
                <div className="mt-5">
                  <h5 className="font-medium text-gray-700 mb-2">
                    Alle natürlichen Optionen:
                  </h5>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {item.naturalOptions.map((option, idx) => (
                      <div
                        key={idx}
                        className="text-sm bg-white p-3 rounded-md border border-gray-200"
                      >
                        <div className="font-medium text-gray-800">
                          {option.food}
                        </div>
                        <div className="text-gray-600">
                          {option.dailyCost.toFixed(2)}EUR/Tag
                        </div>
                        <div
                          className={`text-xs font-semibold ${
                            option.savingsPerMonth > 0
                              ? 'text-green-600'
                              : 'text-red-600'
                          }`}
                        >
                          {option.savingsPerMonth > 0 ? '+' : ''}
                          {option.savingsPerMonth.toFixed(2)}EUR/Monat
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default CostComparison;
