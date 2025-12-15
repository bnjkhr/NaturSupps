import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './contexts/AuthContext';
import {
  Header,
  DisclaimerBanner,
  SupplementInput,
  AnalysisResults,
  CostComparison,
  ShoppingList,
  FilterPanel,
  RecipeSection,
  SeasonHighlight,
  NutrientProgress,
  Footer
} from './components';
import { useSupplements } from './hooks/useSupplements';

// Innere App-Komponente (hat Zugriff auf AuthContext)
const AppContent = () => {
  const { user } = useAuth();

  const {
    // State
    supplements,
    currentSupplement,
    currentDosage,
    results,
    shoppingList,
    costComparison,
    showShoppingList,
    totalMonthlySavings,

    // Filter State
    filters,
    activeFilterCount,

    // Setter
    setCurrentSupplement,
    setCurrentDosage,

    // Filter Actions
    updateFilters,
    clearFilters,

    // Supplement Actions
    addSupplement,
    removeSupplement,
    analyzeSupplements,
    generateShoppingList
  } = useSupplements(user);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4 font-sans">
      <div className="max-w-4xl mx-auto">
        <Header />
        <DisclaimerBanner />

        {/* Saisonale Highlights */}
        <SeasonHighlight />

        {/* Filter-Panel */}
        <FilterPanel
          filters={filters}
          onFilterChange={updateFilters}
          onClearFilters={clearFilters}
        />

        <SupplementInput
          supplements={supplements}
          currentSupplement={currentSupplement}
          currentDosage={currentDosage}
          results={results}
          onSupplementChange={setCurrentSupplement}
          onDosageChange={setCurrentDosage}
          onAddSupplement={addSupplement}
          onRemoveSupplement={removeSupplement}
          onAnalyze={analyzeSupplements}
          onGenerateShoppingList={generateShoppingList}
        />

        {results.length > 0 && !showShoppingList && (
          <>
            {/* Nährstoff-Übersicht */}
            <NutrientProgress results={results} />

            <AnalysisResults
              results={results}
              activeFilterCount={activeFilterCount}
            />

            {/* Passende Rezepte */}
            <RecipeSection results={results} filters={filters} />
          </>
        )}

        {showShoppingList && (
          <section className="space-y-8 mb-8">
            <CostComparison
              costComparison={costComparison}
              totalMonthlySavings={totalMonthlySavings}
            />
            <ShoppingList shoppingList={shoppingList} costComparison={costComparison} />
          </section>
        )}

        <Footer />
      </div>
    </div>
  );
};

// Haupt-App-Komponente mit AuthProvider
const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
