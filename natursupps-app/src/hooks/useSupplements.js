import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { supplementDatabase, getSupplement, getDisplayName } from '../data/supplements';
import { getCostData } from '../data/costs';
import { getDefaultFilters, filterNaturalSources } from '../data/filters';
import { normalizeKey, generateId, uniqueBy } from '../utils/helpers';
import { saveSupplements, saveFilters, subscribeToUserData } from '../firebase/firestore';
import { isConfigured } from '../firebase/config';

/**
 * Custom Hook für die gesamte Supplement-Logik
 * Verwaltet State, Analyse, Filter und Berechnungen
 * Synchronisiert mit Firestore wenn User eingeloggt ist
 */
export const useSupplements = (user = null) => {
  // Persistierte Daten (localStorage als Fallback)
  const [savedSupplements, setSavedSupplements] = useLocalStorage('natursupps-supplements', []);
  const [savedFilters, setSavedFilters] = useLocalStorage('natursupps-filters', getDefaultFilters());

  // Supplement-State
  const [supplements, setSupplements] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  // Filter-State
  const [filters, setFilters] = useState(getDefaultFilters());

  // Eingabe-State
  const [currentSupplement, setCurrentSupplement] = useState('');
  const [currentDosage, setCurrentDosage] = useState('');

  // Ergebnis-State
  const [results, setResults] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [costComparison, setCostComparison] = useState([]);
  const [showShoppingList, setShowShoppingList] = useState(false);

  // Ref um Doppel-Speicherung zu verhindern
  const isLoadingFromFirestore = useRef(false);
  const unsubscribeRef = useRef(null);

  // Firestore-Subscription aufsetzen wenn User eingeloggt
  useEffect(() => {
    // Cleanup vorherige Subscription
    if (unsubscribeRef.current) {
      unsubscribeRef.current();
      unsubscribeRef.current = null;
    }

    if (user && isConfigured) {
      // Echtzeit-Updates von Firestore abonnieren
      unsubscribeRef.current = subscribeToUserData(user.uid, (data) => {
        if (data) {
          isLoadingFromFirestore.current = true;

          if (data.supplements) {
            setSupplements(data.supplements);
          }
          if (data.filters) {
            setFilters(data.filters);
          }

          setIsInitialized(true);
          isLoadingFromFirestore.current = false;
        }
      });
    } else {
      // Nicht eingeloggt: localStorage verwenden
      if (!isInitialized) {
        if (savedSupplements.length > 0) {
          setSupplements(savedSupplements);
        }
        if (savedFilters) {
          setFilters(savedFilters);
        }
        setIsInitialized(true);
      }
    }

    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, [user, savedSupplements, savedFilters, isInitialized]);

  // Supplements speichern (Firestore oder localStorage)
  const persistSupplements = useCallback(async (newSupplements) => {
    if (isLoadingFromFirestore.current) return;

    if (user && isConfigured) {
      setIsSyncing(true);
      await saveSupplements(user.uid, newSupplements);
      setIsSyncing(false);
    } else {
      setSavedSupplements(newSupplements);
    }
  }, [user, setSavedSupplements]);

  // Filter speichern (Firestore oder localStorage)
  const persistFilters = useCallback(async (newFilters) => {
    if (isLoadingFromFirestore.current) return;

    if (user && isConfigured) {
      setIsSyncing(true);
      await saveFilters(user.uid, newFilters);
      setIsSyncing(false);
    } else {
      setSavedFilters(newFilters);
    }
  }, [user, setSavedFilters]);

  // Supplements automatisch speichern wenn sie sich ändern
  useEffect(() => {
    if (isInitialized && !isLoadingFromFirestore.current) {
      persistSupplements(supplements);
    }
  }, [supplements, isInitialized, persistSupplements]);

  // Filter automatisch speichern
  useEffect(() => {
    if (isInitialized && !isLoadingFromFirestore.current) {
      persistFilters(filters);
    }
  }, [filters, isInitialized, persistFilters]);

  // Anzahl aktiver Filter
  const activeFilterCount = useMemo(() => {
    return Object.values(filters).filter(Boolean).length;
  }, [filters]);

  // Filter ändern
  const updateFilters = useCallback((newFilters) => {
    setFilters(newFilters);
    // Ergebnisse zurücksetzen damit sie mit neuen Filtern neu berechnet werden
    if (results.length > 0) {
      setResults([]);
      setShowShoppingList(false);
      setShoppingList([]);
      setCostComparison([]);
    }
  }, [results.length]);

  // Filter zurücksetzen
  const clearFilters = useCallback(() => {
    setFilters(getDefaultFilters());
  }, []);

  // Supplement hinzufügen
  const addSupplement = useCallback(() => {
    if (!currentSupplement.trim()) return;

    const newSupplement = {
      id: generateId(),
      name: currentSupplement.trim(),
      dosage: currentDosage.trim()
    };

    setSupplements(prev => [...prev, newSupplement]);
    setCurrentSupplement('');
    setCurrentDosage('');

    // Reset Ergebnisse
    setResults([]);
    setShowShoppingList(false);
    setShoppingList([]);
    setCostComparison([]);
  }, [currentSupplement, currentDosage]);

  // Supplement entfernen
  const removeSupplement = useCallback((id) => {
    setSupplements(prev => prev.filter(sup => sup.id !== id));
    setResults([]);
    setShowShoppingList(false);
    setShoppingList([]);
    setCostComparison([]);
  }, []);

  // Alle Supplements löschen
  const clearSupplements = useCallback(() => {
    setSupplements([]);
    setResults([]);
    setShowShoppingList(false);
    setShoppingList([]);
    setCostComparison([]);
  }, []);

  // Supplements analysieren (mit Filter)
  const analyzeSupplements = useCallback(() => {
    const analysis = supplements.map(supplement => {
      const key = normalizeKey(supplement.name);
      const match = getSupplement(key);

      // Filter auf natürliche Quellen anwenden
      let filteredData = null;
      if (match) {
        const filteredSources = filterNaturalSources(match.naturalSources, filters);
        filteredData = {
          ...match,
          naturalSources: filteredSources,
          originalSourceCount: match.naturalSources.length,
          filteredSourceCount: filteredSources.length
        };
      }

      return {
        supplement: supplement.name,
        dosage: supplement.dosage,
        found: !!match,
        data: filteredData
      };
    });

    setResults(analysis);
    setShowShoppingList(false);
    setShoppingList([]);
    setCostComparison([]);
  }, [supplements, filters]);

  // Einkaufsliste und Kostenvergleich generieren (mit Filter)
  const generateShoppingList = useCallback(() => {
    const list = [];
    const costs = [];

    results.forEach(result => {
      if (result.found && result.data?.naturalSources) {
        // Top 3 natürliche Quellen für Einkaufsliste (bereits gefiltert)
        const topSources = result.data.naturalSources.slice(0, 3);
        topSources.forEach(source => {
          if (!list.find(item => item.food === source.food)) {
            list.push({
              food: source.food,
              supplement: result.data.name,
              amount: source.amount,
              note: source.note
            });
          }
        });

        // Kostendaten abrufen und filtern
        const key = normalizeKey(result.data.name);
        const costData = getCostData(key);

        if (costData) {
          const supplementCostPerDay = costData.supplement.price / costData.supplement.duration;

          // Nur Kosten für Lebensmittel zeigen, die auch in den gefilterten Quellen sind
          const filteredFoodNames = result.data.naturalSources.map(s => s.food);
          const filteredNaturalCosts = costData.natural.filter(option =>
            filteredFoodNames.includes(option.food)
          );

          const naturalOptions = filteredNaturalCosts.map(option => ({
            ...option,
            supplement: result.data.name,
            savingsPerMonth: (supplementCostPerDay - option.dailyCost) * 30
          }));

          if (naturalOptions.length > 0) {
            costs.push({
              supplement: result.data.name,
              supplementCost: {
                daily: supplementCostPerDay,
                monthly: supplementCostPerDay * 30,
                unit: costData.supplement.unit
              },
              naturalOptions
            });
          }
        }
      }
    });

    setShoppingList(uniqueBy(list, 'food'));
    setCostComparison(costs);
    setShowShoppingList(true);
  }, [results]);

  // Gesamte monatliche Ersparnis berechnen
  const totalMonthlySavings = useMemo(() => {
    if (costComparison.length === 0) return 0;

    return costComparison.reduce((total, item) => {
      if (!item.naturalOptions?.length) return total;

      const bestOption = item.naturalOptions.reduce((best, current) =>
        current.savingsPerMonth > best.savingsPerMonth ? current : best,
        { savingsPerMonth: -Infinity }
      );

      return total + Math.max(0, bestOption.savingsPerMonth);
    }, 0);
  }, [costComparison]);

  // Alle verfügbaren Supplement-Keys
  const availableSupplements = useMemo(() => {
    return Object.keys(supplementDatabase);
  }, []);

  // Prüfen ob gespeicherte Supplements vorhanden sind
  const hasSavedSupplements = savedSupplements.length > 0 || supplements.length > 0;

  return {
    // State
    supplements,
    currentSupplement,
    currentDosage,
    results,
    shoppingList,
    costComparison,
    showShoppingList,
    availableSupplements,
    totalMonthlySavings,
    isInitialized,
    hasSavedSupplements,
    isSyncing,

    // Filter State
    filters,
    activeFilterCount,

    // Setter
    setCurrentSupplement,
    setCurrentDosage,
    setShowShoppingList,

    // Filter Actions
    updateFilters,
    clearFilters,

    // Supplement Actions
    addSupplement,
    removeSupplement,
    clearSupplements,
    analyzeSupplements,
    generateShoppingList,

    // Helpers
    getDisplayName
  };
};

export default useSupplements;
