import React, { useState } from 'react';
import { ChefHat, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from './ui';
import { findRecipesForNutrients, filterRecipes } from '../data/recipes';

const RecipeCard = ({ recipe }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const difficultyColors = {
    einfach: 'bg-green-100 text-green-800',
    mittel: 'bg-yellow-100 text-yellow-800',
    schwer: 'bg-red-100 text-red-800'
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-gray-800">{recipe.name}</h4>
        <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors[recipe.difficulty]}`}>
          {recipe.difficulty}
        </span>
      </div>

      <div className="flex items-center text-sm text-gray-600 mb-3">
        <Clock className="h-4 w-4 mr-1" />
        {recipe.prepTime}
      </div>

      <div className="flex flex-wrap gap-1 mb-3">
        {recipe.matchingNutrients?.map((nutrient, idx) => (
          <span key={idx} className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
            {nutrient}
          </span>
        ))}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
      >
        {isExpanded ? (
          <>Weniger anzeigen <ChevronUp className="h-4 w-4 ml-1" /></>
        ) : (
          <>Rezept anzeigen <ChevronDown className="h-4 w-4 ml-1" /></>
        )}
      </button>

      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="mb-4">
            <h5 className="font-medium text-gray-700 mb-2">Zutaten:</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2">•</span>
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-medium text-gray-700 mb-2">Zubereitung:</h5>
            <ol className="text-sm text-gray-600 space-y-2">
              {recipe.instructions.map((step, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="font-medium text-green-600 mr-2">{idx + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-3 flex flex-wrap gap-1">
            {recipe.tags.map((tag, idx) => (
              <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const RecipeSection = ({ results, filters }) => {
  // Sammle alle gefundenen Nährstoffe aus den Ergebnissen
  const foundNutrients = results
    .filter(r => r.found)
    .map(r => r.data.name.toLowerCase());

  if (foundNutrients.length === 0) return null;

  // Finde passende Rezepte
  let matchingRecipes = findRecipesForNutrients(foundNutrients);

  // Wende Filter an
  if (filters) {
    matchingRecipes = filterRecipes(matchingRecipes, filters);
  }

  if (matchingRecipes.length === 0) return null;

  return (
    <Card className="mb-8">
      <Card.Header>
        <Card.Title icon={<ChefHat className="h-7 w-7 text-orange-500" />}>
          Passende Rezepte
        </Card.Title>
        <p className="text-sm text-gray-600 mt-1">
          Rezepte, die mehrere deiner gesuchten Nährstoffe kombinieren
        </p>
      </Card.Header>

      <div className="grid md:grid-cols-2 gap-4">
        {matchingRecipes.slice(0, 4).map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {matchingRecipes.length > 4 && (
        <p className="text-sm text-gray-500 mt-4 text-center">
          +{matchingRecipes.length - 4} weitere Rezepte verfügbar
        </p>
      )}
    </Card>
  );
};

export default RecipeSection;
