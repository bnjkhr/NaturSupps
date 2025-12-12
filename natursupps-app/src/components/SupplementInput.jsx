import React from 'react';
import { Plus, Minus, Search, ShoppingCart } from 'lucide-react';
import { Card, Button, Input } from './ui';

const SupplementInput = ({
  supplements,
  currentSupplement,
  currentDosage,
  results,
  onSupplementChange,
  onDosageChange,
  onAddSupplement,
  onRemoveSupplement,
  onAnalyze,
  onGenerateShoppingList
}) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onAddSupplement();
    }
  };

  return (
    <Card className="mb-8">
      <Card.Header>
        <Card.Title>Deine aktuellen Supplements</Card.Title>
      </Card.Header>

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <Input
          placeholder="Supplement-Name (z.B. Omega-3)"
          value={currentSupplement}
          onChange={(e) => onSupplementChange(e.target.value)}
          onKeyPress={handleKeyPress}
          fullWidth
          className="flex-1"
        />
        <Input
          placeholder="Dosierung (optional)"
          value={currentDosage}
          onChange={(e) => onDosageChange(e.target.value)}
          onKeyPress={handleKeyPress}
          className="sm:w-48"
        />
        <Button
          onClick={onAddSupplement}
          title="Supplement hinzufügen"
          icon={<Plus className="h-5 w-5" />}
        >
          <span className="sm:hidden ml-2">Hinzufügen</span>
        </Button>
      </div>

      {supplements.length > 0 && (
        <div className="space-y-3 mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            Eingetragene Supplements:
          </h3>
          {supplements.map((supplement) => (
            <div
              key={supplement.id}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200"
            >
              <div>
                <span className="font-medium text-gray-800">
                  {supplement.name}
                </span>
                {supplement.dosage && (
                  <span className="text-gray-600 ml-2 text-sm">
                    ({supplement.dosage})
                  </span>
                )}
              </div>
              <button
                onClick={() => onRemoveSupplement(supplement.id)}
                title="Supplement entfernen"
                className="text-red-500 hover:text-red-700 transition-colors p-1 rounded-full hover:bg-red-100"
              >
                <Minus className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {supplements.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={onAnalyze}
            variant="secondary"
            fullWidth
            icon={<Search className="h-5 w-5" />}
          >
            Natürliche Alternativen finden
          </Button>
          {results.length > 0 && (
            <Button
              onClick={onGenerateShoppingList}
              variant="success"
              fullWidth
              icon={<ShoppingCart className="h-5 w-5" />}
            >
              Einkaufsliste & Kosten
            </Button>
          )}
        </div>
      )}
    </Card>
  );
};

export default SupplementInput;
