import React from 'react';
import { ListChecks } from 'lucide-react';
import { Card } from './ui';
import ExportPanel from './ExportPanel';

const ShoppingList = ({ shoppingList, costComparison = [] }) => {
  return (
    <Card>
      <Card.Header>
        <Card.Title icon={<ListChecks className="h-7 w-7 text-blue-600" />}>
          Deine Einkaufsliste
        </Card.Title>
      </Card.Header>

      {shoppingList.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-5">
          {shoppingList.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-gray-50"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-gray-800 text-lg">
                  {item.food}
                </h4>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                  Für {item.supplement}
                </span>
              </div>
              <p className="text-sm text-blue-700 font-medium mb-1">
                {item.amount}
              </p>
              <p className="text-sm text-gray-600">{item.note}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">
          Deine Einkaufsliste ist leer. Füge Supplements hinzu und analysiere
          sie, um Artikel zu generieren.
        </p>
      )}

      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-2 text-lg">
          Einkaufstipps:
        </h4>
        <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
          <li>
            Bio-Qualität bevorzugen für potenziell höhere Nährstoffdichte.
          </li>
          <li>
            Fettlösliche Vitamine (A, D, E, K) mit einer Fettquelle (z.B. Öl,
            Nüsse) kombinieren, um die Aufnahme zu verbessern.
          </li>
          <li>
            Frische, saisonale und regionale Lebensmittel wählen - oft
            nährstoffreicher und umweltfreundlicher.
          </li>
          <li>
            Auf schonende Zubereitung achten, um Nährstoffverluste zu minimieren
            (z.B. Dämpfen statt Kochen).
          </li>
        </ul>
      </div>

      {/* Export-Optionen */}
      {shoppingList.length > 0 && (
        <div className="mt-6">
          <ExportPanel shoppingList={shoppingList} costComparison={costComparison} />
        </div>
      )}
    </Card>
  );
};

export default ShoppingList;
