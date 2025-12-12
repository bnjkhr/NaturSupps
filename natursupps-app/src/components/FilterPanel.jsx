import React from 'react';
import { Filter, X } from 'lucide-react';
import { FILTER_TYPES, FILTER_LABELS } from '../data/filters';

const FilterPanel = ({ filters, onFilterChange, onClearFilters }) => {
  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  const handleToggle = (filterKey) => {
    onFilterChange({
      ...filters,
      [filterKey]: !filters[filterKey]
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <Filter className="h-5 w-5 text-gray-600 mr-2" />
          <h3 className="font-semibold text-gray-800">Ernährungsfilter</h3>
          {activeFilterCount > 0 && (
            <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              {activeFilterCount} aktiv
            </span>
          )}
        </div>
        {activeFilterCount > 0 && (
          <button
            onClick={onClearFilters}
            className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
          >
            <X className="h-4 w-4 mr-1" />
            Zurücksetzen
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {Object.values(FILTER_TYPES).map((filterKey) => (
          <button
            key={filterKey}
            onClick={() => handleToggle(filterKey)}
            className={`
              px-3 py-1.5 rounded-full text-sm font-medium transition-all
              ${filters[filterKey]
                ? 'bg-green-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            {FILTER_LABELS[filterKey]}
          </button>
        ))}
      </div>

      {activeFilterCount > 0 && (
        <p className="mt-3 text-xs text-gray-500">
          Es werden nur Lebensmittel angezeigt, die zu deiner Auswahl passen.
        </p>
      )}
    </div>
  );
};

export default FilterPanel;
