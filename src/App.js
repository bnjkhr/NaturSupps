import React, { useState } from 'react';
import { Plus, Minus, Leaf, AlertCircle, ShoppingCart, DollarSign, ListChecks, Search } from 'lucide-react';

const SupplementTool = () => {
  const [supplements, setSupplements] = useState([]);
  const [currentSupplement, setCurrentSupplement] = useState('');
  const [currentDosage, setCurrentDosage] = useState('');
  const [results, setResults] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [showShoppingList, setShowShoppingList] = useState(false);
  const [costComparison, setCostComparison] = useState([]);

  // Erweiterte Datenbank mit natürlichen Alternativen
  const supplementDatabase = {
    'vitamin d': {
      name: 'Vitamin D',
      naturalSources: [
        { food: 'Lachs', amount: '360-685 IU pro 100g', note: 'Fettreicher Fisch ist die beste Quelle' },
        { food: 'Makrele', amount: '388 IU pro 100g', note: 'Reich an Omega-3 und Vitamin D' },
        { food: 'Sardinen', amount: '272 IU pro 100g', note: 'Auch mit Knochen für extra Calcium' },
        { food: 'Eigelb', amount: '20-40 IU pro Eigelb', note: 'Von freilaufenden Hühnern bevorzugen' },
        { food: 'Champignons (UV-behandelt)', amount: '400 IU pro 100g', note: 'Einzige pflanzliche Quelle' },
        { food: 'Sonnenlicht', amount: '10-30 Min täglich', note: 'Körpereigene Produktion' }
      ],
      dailyNeed: '800-1000 IU',
      tips: 'Vitamin D wird am besten mit Fett aufgenommen. Kombiniere mit Vitamin K2.'
    },
    'vitamin c': {
      name: 'Vitamin C',
      naturalSources: [
        { food: 'Acerola-Kirsche', amount: '1700mg pro 100g', note: 'Höchste natürliche Konzentration' },
        { food: 'Hagebutten', amount: '200-1500mg pro 100g', note: 'Als Tee oder Pulver' },
        { food: 'Paprika (rot)', amount: '190mg pro 100g', note: 'Mehr als Orangen' },
        { food: 'Brokkoli', amount: '89mg pro 100g', note: 'Roh oder schonend gegart' },
        { food: 'Kiwi', amount: '93mg pro 100g', note: 'Gut für das Immunsystem' },
        { food: 'Zitrusfrüchte', amount: '50-60mg pro 100g', note: 'Klassische Quelle' }
      ],
      dailyNeed: '100mg',
      tips: 'Vitamin C ist hitzeempfindlich. Rohkost oder schonende Zubereitung bevorzugen.'
    },
    'magnesium': {
      name: 'Magnesium',
      naturalSources: [
        { food: 'Kürbiskerne', amount: '535mg pro 100g', note: 'Höchste Konzentration' },
        { food: 'Mandeln', amount: '268mg pro 100g', note: 'Auch reich an Vitamin E' },
        { food: 'Spinat', amount: '79mg pro 100g', note: 'Besonders grünes Blattgemüse' },
        { food: 'Quinoa', amount: '197mg pro 100g', note: 'Vollkorn-Alternative' },
        { food: 'Dunkle Schokolade (70%+)', amount: '228mg pro 100g', note: 'In Maßen genießen' },
        { food: 'Avocado', amount: '29mg pro 100g', note: 'Gute Kombination mit gesunden Fetten' }
      ],
      dailyNeed: '300-400mg',
      tips: 'Magnesium wird am besten abends eingenommen und unterstützt den Schlaf.'
    },
    'omega 3': {
      name: 'Omega-3',
      naturalSources: [
        { food: 'Lachs (wild)', amount: '2.3g pro 100g', note: 'EPA und DHA' },
        { food: 'Walnüsse', amount: '9g pro 100g', note: 'ALA (pflanzliches Omega-3)' },
        { food: 'Chiasamen', amount: '17g pro 100g', note: 'Hoher ALA-Gehalt' },
        { food: 'Leinsamen', amount: '23g pro 100g', note: 'Geschrotet besser verfügbar' },
        { food: 'Makrele', amount: '2.7g pro 100g', note: 'Günstiger als Lachs' },
        { food: 'Algenöl', amount: 'Variiert', note: 'Vegane EPA/DHA-Quelle' }
      ],
      dailyNeed: '1-2g EPA/DHA',
      tips: 'Pflanzliches ALA wird nur zu 5-10% in EPA/DHA umgewandelt.'
    },
    'zink': {
      name: 'Zink',
      naturalSources: [
        { food: 'Austern', amount: '78mg pro 100g', note: 'Höchste Bioverfügbarkeit' },
        { food: 'Rindfleisch', amount: '4.8mg pro 100g', note: 'Gut resorbierbar' },
        { food: 'Kürbiskerne', amount: '7.8mg pro 100g', note: 'Pflanzliche Quelle' },
        { food: 'Sesam', amount: '7.8mg pro 100g', note: 'Als Tahini oder Samen' },
        { food: 'Linsen', amount: '3.3mg pro 100g', note: 'Einweichen verbessert Aufnahme' },
        { food: 'Eier', amount: '1.3mg pro 100g', note: 'Besonders das Eigelb' }
      ],
      dailyNeed: '8-11mg',
      tips: 'Zink aus tierischen Quellen wird besser aufgenommen als aus pflanzlichen.'
    },
    'eisen': {
      name: 'Eisen',
      naturalSources: [
        { food: 'Rinderleber', amount: '18mg pro 100g', note: 'Häm-Eisen, sehr gut verfügbar' },
        { food: 'Spinat', amount: '3.6mg pro 100g', note: 'Mit Vitamin C kombinieren' },
        { food: 'Linsen', amount: '3.3mg pro 100g', note: 'Einweichen und mit Vitamin C' },
        { food: 'Quinoa', amount: '4.6mg pro 100g', note: 'Vollkorn-Pseudogetreide' },
        { food: 'Kürbiskerne', amount: '8.8mg pro 100g', note: 'Hoher Eisengehalt' },
        { food: 'Dunkle Schokolade', amount: '7.7mg pro 100g', note: 'In Maßen genießen' }
      ],
      dailyNeed: '10-15mg',
      tips: 'Eisenaufnahme wird durch Vitamin C verbessert, durch Kaffee/Tee gehemmt.'
    },
    'b12': {
      name: 'Vitamin B12',
      naturalSources: [
        { food: 'Rinderleber', amount: '59μg pro 100g', note: 'Höchste natürliche Konzentration' },
        { food: 'Lachs', amount: '4.9μg pro 100g', note: 'Fettreicher Fisch' },
        { food: 'Sardinen', amount: '8.9μg pro 100g', note: 'Kleine Fische, große Wirkung' },
        { food: 'Eier', amount: '0.9μg pro 100g', note: 'Besonders das Eigelb' },
        { food: 'Käse (Camembert)', amount: '3.1μg pro 100g', note: 'Fermentierte Milchprodukte' },
        { food: 'Nori-Algen', amount: '77μg pro 100g', note: 'Unsichere Quelle, oft inaktiv' }
      ],
      dailyNeed: '2.4μg',
      tips: 'B12 kommt fast nur in tierischen Produkten vor. Veganer sollten supplementieren.'
    },
    'calcium': {
      name: 'Calcium',
      naturalSources: [
        { food: 'Sesam', amount: '975mg pro 100g', note: 'Höchste pflanzliche Quelle' },
        { food: 'Sardinen (mit Knochen)', amount: '382mg pro 100g', note: 'Kleine Knochen mitessen' },
        { food: 'Brokkoli', amount: '47mg pro 100g', note: 'Gut bioverfügbar' },
        { food: 'Mandeln', amount: '269mg pro 100g', note: 'Auch Magnesium enthalten' },
        { food: 'Grünkohl', amount: '150mg pro 100g', note: 'Grünes Blattgemüse' },
        { food: 'Milchprodukte', amount: '100-1200mg pro 100g', note: 'Klassische Quelle' }
      ],
      dailyNeed: '1000mg',
      tips: 'Calcium braucht Vitamin D für optimale Aufnahme. Magnesium ist wichtig für die Balance.'
    },
    'vitamin k2': {
      name: 'Vitamin K2',
      naturalSources: [
        { food: 'Natto (fermentierte Sojabohnen)', amount: '1000μg pro 100g', note: 'Höchste natürliche Quelle' },
        { food: 'Gänseleberpastete', amount: '369μg pro 100g', note: 'Tierische Quelle' },
        { food: 'Hartkäse (Gouda)', amount: '75μg pro 100g', note: 'Fermentierte Milchprodukte' },
        { food: 'Eigelb (Freilandhühner)', amount: '32μg pro 100g', note: 'Weidehaltung wichtig' },
        { food: 'Sauerkraut', amount: '5μg pro 100g', note: 'Fermentiertes Gemüse' },
        { food: 'Kefir', amount: '4μg pro 100g', note: 'Fermentierte Milch' }
      ],
      dailyNeed: '100-200μg',
      tips: 'K2 ist wichtig für Calcium-Transport zu den Knochen. Arbeitet synergistisch mit Vitamin D.'
    },
    'folsäure': {
      name: 'Folsäure/Folat',
      naturalSources: [
        { food: 'Rinderleber', amount: '590μg pro 100g', note: 'Höchste Konzentration' },
        { food: 'Linsen', amount: '181μg pro 100g', note: 'Beste pflanzliche Quelle' },
        { food: 'Spinat', amount: '194μg pro 100g', note: 'Grünes Blattgemüse' },
        { food: 'Spargel', amount: '149μg pro 100g', note: 'Frühlingsgemüse' },
        { food: 'Avocado', amount: '81μg pro 100g', note: 'Auch gesunde Fette' },
        { food: 'Brokkoli', amount: '63μg pro 100g', note: 'Schonend garen' }
      ],
      dailyNeed: '400μg',
      tips: 'Folat aus natürlichen Quellen ist besser als synthetische Folsäure. Wichtig in der Schwangerschaft.'
    },
    'coenzym q10': {
      name: 'Coenzym Q10',
      naturalSources: [
        { food: 'Rinderleber', amount: '39mg pro 100g', note: 'Höchste natürliche Quelle' },
        { food: 'Sardinen', amount: '6.4mg pro 100g', note: 'Fettreicher Fisch' },
        { food: 'Rindfleisch', amount: '3.1mg pro 100g', note: 'Muskelgewebe' },
        { food: 'Erdnüsse', amount: '2.7mg pro 100g', note: 'Pflanzliche Quelle' },
        { food: 'Brokkoli', amount: '0.7mg pro 100g', note: 'Gemüse-Option' },
        { food: 'Sesam', amount: '1.7mg pro 100g', note: 'Samen und Nüsse' }
      ],
      dailyNeed: '30-100mg',
      tips: 'Q10-Produktion nimmt mit dem Alter ab. Fettlöslich - mit Fett einnehmen.'
    },
    'vitamin k': { // Assuming K1, K2 is separate
      name: 'Vitamin K1',
      naturalSources: [
        { food: 'Grünkohl', amount: '705μg pro 100g', note: 'Höchste Konzentration' },
        { food: 'Spinat', amount: '483μg pro 100g', note: 'Grünes Blattgemüse' },
        { food: 'Mangold', amount: '830μg pro 100g', note: 'Dunkles Blattgemüse' },
        { food: 'Petersilie', amount: '1640μg pro 100g', note: 'Frische Kräuter' },
        { food: 'Brokkoli', amount: '102μg pro 100g', note: 'Kohlgemüse' },
        { food: 'Rosenkohl', amount: '177μg pro 100g', note: 'Wintergemüse' }
      ],
      dailyNeed: '70-80μg',
      tips: 'K1 für Blutgerinnung, K2 für Knochen. Fettlöslich - mit Öl kombinieren.'
    },
    'biotin': {
      name: 'Biotin (Vitamin B7)',
      naturalSources: [
        { food: 'Rinderleber', amount: '103μg pro 100g', note: 'Höchste Konzentration' },
        { food: 'Eigelb', amount: '50μg pro 100g', note: 'Nicht mit Eiweiß - hemmt Aufnahme' },
        { food: 'Erdnüsse', amount: '34μg pro 100g', note: 'Nüsse und Samen' },
        { food: 'Mandeln', amount: '49μg pro 100g', note: 'Gute pflanzliche Quelle' },
        { food: 'Süßkartoffeln', amount: '2.4μg pro 100g', note: 'Wurzelgemüse' },
        { food: 'Champignons', amount: '16μg pro 100g', note: 'Pilze' }
      ],
      dailyNeed: '30-60μg',
      tips: 'Wichtig für Haare, Haut und Nägel. Rohes Eiweiß hemmt die Biotin-Aufnahme.'
    },
    'selen': {
      name: 'Selen',
      naturalSources: [
        { food: 'Paranüsse', amount: '1917μg pro 100g', note: '1-2 Nüsse täglich reichen!' },
        { food: 'Thunfisch', amount: '108μg pro 100g', note: 'Meeresfische' },
        { food: 'Sonnenblumenkerne', amount: '53μg pro 100g', note: 'Samen und Kerne' },
        { food: 'Rindfleisch', amount: '26μg pro 100g', note: 'Fleisch aus selenreichen Böden' },
        { food: 'Eier', amount: '31μg pro 100g', note: 'Besonders das Eigelb' },
        { food: 'Linsen', amount: '8.2μg pro 100g', note: 'Hülsenfrüchte' }
      ],
      dailyNeed: '55-70μg',
      tips: 'Paranüsse sind so reich an Selen, dass 1-2 täglich den Bedarf decken. Nicht überdosieren!'
    },
    'jod': {
      name: 'Jod',
      naturalSources: [
        { food: 'Meeresalgen (Kelp)', amount: '1500-2500μg pro 100g', note: 'Vorsicht - sehr hoch dosiert!' },
        { food: 'Kabeljau', amount: '170μg pro 100g', note: 'Meeresfische' },
        { food: 'Garnelen', amount: '35μg pro 100g', note: 'Meeresfrüchte' },
        { food: 'Eier', amount: '12μg pro 100g', note: 'Besonders von Freilandhennen' },
        { food: 'Jodsalz', amount: '15-25μg pro g', note: 'Angereicherte Produkte' },
        { food: 'Milchprodukte', amount: '10-50μg pro 100g', note: 'Je nach Fütterung' }
      ],
      dailyNeed: '150-200μg',
      tips: 'Jodmangel ist in Deutschland verbreitet. Meeresalgen können sehr hoch dosiert sein.'
    },
    'chrom': {
      name: 'Chrom',
      naturalSources: [
        { food: 'Bierhefe', amount: '112μg pro 100g', note: 'Höchste Konzentration' },
        { food: 'Paranüsse', amount: '100μg pro 100g', note: 'Nüsse' },
        { food: 'Vollkornprodukte', amount: '10-40μg pro 100g', note: 'Unverarbeitete Getreide' },
        { food: 'Brokkoli', amount: '16μg pro 100g', note: 'Grünes Gemüse' },
        { food: 'Trauben', amount: '4μg pro 100g', note: 'Obst' },
        { food: 'Fleisch', amount: '2-10μg pro 100g', note: 'Tierische Produkte' }
      ],
      dailyNeed: '50-200μg',
      tips: 'Chrom unterstützt den Blutzuckerstoffwechsel. Verarbeitung reduziert Chromgehalt.'
    },
    'vitamin a': {
      name: 'Vitamin A',
      naturalSources: [
        { food: 'Rinderleber', amount: '16898μg pro 100g', note: 'Höchste Konzentration - sparsam!' },
        { food: 'Karotten', amount: '835μg pro 100g', note: 'Beta-Carotin, mit Fett essen' },
        { food: 'Süßkartoffeln', amount: '709μg pro 100g', note: 'Orange Wurzelgemüse' },
        { food: 'Spinat', amount: '469μg pro 100g', note: 'Grünes Blattgemüse' },
        { food: 'Kürbis', amount: '426μg pro 100g', note: 'Orange Gemüse' },
        { food: 'Eigelb', amount: '381μg pro 100g', note: 'Tierisches Vitamin A' }
      ],
      dailyNeed: '700-900μg',
      tips: 'Fettlöslich - mit Öl kombinieren. Leber sparsam verwenden wegen hoher Konzentration.'
    },
    'vitamin e': {
      name: 'Vitamin E',
      naturalSources: [
        { food: 'Weizenkeimöl', amount: '215mg pro 100g', note: 'Höchste Konzentration' },
        { food: 'Sonnenblumenkerne', amount: '35mg pro 100g', note: 'Samen und Kerne' },
        { food: 'Mandeln', amount: '26mg pro 100g', note: 'Nüsse' },
        { food: 'Haselnüsse', amount: '15mg pro 100g', note: 'Weitere Nussquelle' },
        { food: 'Avocado', amount: '2mg pro 100g', note: 'Frucht mit gesunden Fetten' },
        { food: 'Olivenöl', amount: '14mg pro 100g', note: 'Pflanzliche Öle' }
      ],
      dailyNeed: '12-15mg',
      tips: 'Antioxidans, schützt Zellmembranen. Fettlöslich, am besten zu fettreichen Mahlzeiten.'
    }
  };

  // Kosten-Datenbank (Durchschnittspreise in EUR)
  // Using more general keys for broader matching
  const costDatabase = {
    'vitamin d': {
      supplement: { price: 15, duration: 30, unit: '1000 IU Tabletten' },
      natural: [
        { food: 'Lachs', price: 25, amount: '500g', dailyCost: 2.50 },
        { food: 'Sardinen', price: 8, amount: '400g Dose', dailyCost: 1.20 },
        { food: 'Eier (Freiland)', price: 4, amount: '12 Stück', dailyCost: 0.67 }
      ]
    },
    'vitamin c': {
      supplement: { price: 12, duration: 60, unit: '1000mg Tabletten' },
      natural: [
        { food: 'Paprika', price: 6, amount: '1kg', dailyCost: 0.60 },
        { food: 'Brokkoli', price: 3, amount: '500g', dailyCost: 0.60 },
        { food: 'Kiwi', price: 4, amount: '6 Stück', dailyCost: 0.67 }
      ]
    },
    'magnesium': {
      supplement: { price: 18, duration: 60, unit: '400mg Kapseln' },
      natural: [
        { food: 'Kürbiskerne', price: 8, amount: '500g', dailyCost: 0.48 },
        { food: 'Mandeln', price: 12, amount: '1kg', dailyCost: 0.36 },
        { food: 'Spinat', price: 2, amount: '300g', dailyCost: 0.67 }
      ]
    },
    'omega 3': { // Key matches supplementDatabase
      supplement: { price: 25, duration: 30, unit: 'Fischöl Kapseln' },
      natural: [
        { food: 'Lachs', price: 25, amount: '500g', dailyCost: 2.50 }, // Ensure food names match for other logic if needed
        { food: 'Walnüsse', price: 8, amount: '500g', dailyCost: 0.48 },
        { food: 'Chiasamen', price: 6, amount: '500g', dailyCost: 0.36 }
      ]
    },
     // Add more cost data as needed, mirroring supplementDatabase keys
    'zink': {
      supplement: { price: 10, duration: 90, unit: '25mg Tabletten' },
      natural: [
        { food: 'Austern', price: 15, amount: '6 Stück', dailyCost: 2.50 },
        { food: 'Rindfleisch', price: 12, amount: '500g', dailyCost: 1.20 },
        { food: 'Kürbiskerne', price: 8, amount: '500g', dailyCost: 0.48 }
      ]
    },
    'eisen': {
      supplement: { price: 14, duration: 60, unit: '20mg Kapseln' },
      natural: [
        { food: 'Rinderleber', price: 7, amount: '250g', dailyCost: 0.70 },
        { food: 'Linsen', price: 3, amount: '1kg', dailyCost: 0.15 },
        { food: 'Spinat', price: 2, amount: '300g', dailyCost: 0.67 }
      ]
    }
  };


  const addSupplement = () => {
    if (currentSupplement.trim()) {
      setSupplements([...supplements, {
        id: Date.now(),
        name: currentSupplement.trim(), // Trimmed here
        dosage: currentDosage.trim()   // Trimmed here
      }]);
      setCurrentSupplement('');
      setCurrentDosage('');
      // Reset results when a new supplement is added or list changes
      setResults([]);
      setShowShoppingList(false);
      setShoppingList([]);
      setCostComparison([]);
    }
  };

  const removeSupplement = (id) => {
    setSupplements(supplements.filter(sup => sup.id !== id));
     // Reset results when a supplement is removed
    setResults([]);
    setShowShoppingList(false);
    setShoppingList([]);
    setCostComparison([]);
  };

  const analyzeSupplements = () => {
    const analysis = supplements.map(supplement => {
      const key = supplement.name.toLowerCase().trim(); // Trimmed and lowercased
      const match = supplementDatabase[key];
      return {
        supplement: supplement.name, // Keep original name for display
        dosage: supplement.dosage,
        found: !!match,
        data: match
      };
    });
    setResults(analysis);
    setShowShoppingList(false); // Hide shopping list when re-analyzing
    setShoppingList([]);
    setCostComparison([]);
  };

  const generateShoppingList = () => {
    const list = [];
    const costs = [];

    results.forEach(result => {
      if (result.found && result.data.naturalSources) {
        // Top 3 Quellen für Einkaufsliste
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

        // Kosten-Vergleich
        const key = result.data.name.toLowerCase().replace(/\s+/g, ' ').trim(); // Use normalized name from database for consistency
        const costData = costDatabase[key];

        if (costData) {
          const supplementCostPerDay = costData.supplement.price / costData.supplement.duration;
          const naturalOptions = costData.natural.map(option => ({
            ...option,
            supplement: result.data.name,
            savingsPerMonth: (supplementCostPerDay - option.dailyCost) * 30
          }));

          costs.push({
            supplement: result.data.name,
            supplementCost: {
              daily: supplementCostPerDay,
              monthly: supplementCostPerDay * 30,
              unit: costData.supplement.unit
            },
            naturalOptions: naturalOptions
          });
        }
      }
    });

    setShoppingList(list);
    setCostComparison(costs);
    setShowShoppingList(true);
  };

  const getTotalMonthlySavings = () => {
    if (costComparison.length === 0) return 0;
    return costComparison.reduce((total, item) => {
      if (!item.naturalOptions || item.naturalOptions.length === 0) return total;
      const bestOption = item.naturalOptions.reduce((best, current) =>
        current.savingsPerMonth > best.savingsPerMonth ? current : best
      , {savingsPerMonth: -Infinity}); // Ensure a proper initial best
      return total + Math.max(0, bestOption.savingsPerMonth);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8 pt-6">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="h-10 w-10 text-green-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">NaturSupps</h1>
          </div>
          <p className="text-gray-600 text-lg">Entdecke natürliche Alternativen zu deinen Supplements</p>
        </header>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 mb-8 shadow">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
            <div className="text-sm text-yellow-800">
              <strong className="font-semibold">Wichtiger Hinweis:</strong> Diese Informationen dienen nur der allgemeinen Aufklärung und ersetzen nicht die Beratung durch einen Arzt oder Ernährungsberater. Konsultiere medizinische Fachkräfte vor Änderungen an deiner Supplementierung oder Ernährung.
            </div>
          </div>
        </div>

        {/* Input Section */}
        <section className="bg-white rounded-xl shadow-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">Deine aktuellen Supplements</h2>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="text"
              placeholder="Supplement-Name (z.B. Vitamin D)"
              value={currentSupplement}
              onChange={(e) => setCurrentSupplement(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow hover:shadow-sm"
              onKeyPress={(e) => e.key === 'Enter' && addSupplement()}
            />
            <input
              type="text"
              placeholder="Dosierung (optional)"
              value={currentDosage}
              onChange={(e) => setCurrentDosage(e.target.value)}
              className="sm:w-48 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow hover:shadow-sm"
              onKeyPress={(e) => e.key === 'Enter' && addSupplement()}
            />
            <button
              onClick={addSupplement}
              title="Supplement hinzufügen"
              className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center shadow hover:shadow-md"
            >
              <Plus className="h-5 w-5" />
              <span className="ml-2 sm:hidden">Hinzufügen</span>
            </button>
          </div>

          {/* Supplement List */}
          {supplements.length > 0 && (
            <div className="space-y-3 mb-6">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Eingetragene Supplements:</h3>
              {supplements.map(supplement => (
                <div key={supplement.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <div>
                    <span className="font-medium text-gray-800">{supplement.name}</span>
                    {supplement.dosage && <span className="text-gray-600 ml-2 text-sm">({supplement.dosage})</span>}
                  </div>
                  <button
                    onClick={() => removeSupplement(supplement.id)}
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
              <button
                onClick={analyzeSupplements}
                className="flex-1 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium shadow hover:shadow-md flex items-center justify-center"
              >
                <Search className="h-5 w-5 mr-2" />
                Natürliche Alternativen finden
              </button>
              {results.length > 0 && (
                <button
                  onClick={generateShoppingList}
                  className="flex-1 bg-teal-500 text-white py-3 px-4 rounded-lg hover:bg-teal-600 transition-colors font-medium shadow hover:shadow-md flex items-center justify-center"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Einkaufsliste & Kosten
                </button>
              )}
            </div>
          )}
        </section>

        {/* Results Section */}
        {results.length > 0 && !showShoppingList && (
          <section className="space-y-6 mb-8">
             <h2 className="text-2xl font-semibold text-gray-800 border-b pb-3 mb-6">Analyseergebnisse</h2>
            {results.map((result, index) => (
              <div key={index} className="bg-white rounded-xl shadow-xl p-6">
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
                    <h4 className="font-semibold mb-3 text-gray-700 text-lg">Natürliche Quellen:</h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {result.data.naturalSources.map((source, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow bg-white">
                          <h5 className="font-semibold text-gray-800 mb-1 text-md">{source.food}</h5>
                          <p className="text-sm text-blue-600 font-medium mb-2">{source.amount}</p>
                          <p className="text-xs text-gray-600">{source.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-lg p-4">
                    <p className="text-orange-800">
                      Für <strong>{result.supplement}</strong> haben wir aktuell keine Daten in unserer Datenbank.
                      Das Tool wird kontinuierlich erweitert. Versuche es mit anderen Schreibweisen oder gängigen Namen.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Shopping List & Cost Comparison */}
        {showShoppingList && (
          <section className="space-y-8 mb-8">
            {/* Cost Comparison */}
            {costComparison.length > 0 && (
              <div className="bg-white rounded-xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-6 border-b pb-3">
                    <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                    <DollarSign className="h-7 w-7 text-green-600 mr-3" /> Kosten-Nutzen-Vergleich
                    </h3>
                    <span className="text-md bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                        Ersparnis: {getTotalMonthlySavings().toFixed(2)}€ / Monat
                    </span>
                </div>
                <div className="space-y-6">
                  {costComparison.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-5 bg-gray-50">
                      <h4 className="font-semibold text-xl text-gray-800 mb-4">{item.supplement}</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                          <h5 className="font-medium text-red-800 mb-2 text-lg">💊 Supplement</h5>
                          <p className="text-md text-red-700">
                            {item.supplementCost.daily.toFixed(2)}€/Tag • {item.supplementCost.monthly.toFixed(2)}€/Monat
                          </p>
                          <p className="text-xs text-red-600 mt-1">{item.supplementCost.unit}</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h5 className="font-medium text-green-800 mb-2 text-lg">🥬 Beste natürliche Alternative</h5>
                          {(() => {
                            if (!item.naturalOptions || item.naturalOptions.length === 0) return <p className="text-sm text-gray-600">Keine Kostendaten für natürliche Alternativen.</p>;
                            const best = item.naturalOptions.reduce((b, c) => c.savingsPerMonth > b.savingsPerMonth ? c : b, {savingsPerMonth: -Infinity, food: 'N/A', dailyCost: 0});
                            return (
                              best.food !== 'N/A' ? (
                                <div>
                                  <p className="text-md text-green-700">
                                    <strong>{best.food}:</strong> {best.dailyCost.toFixed(2)}€/Tag
                                  </p>
                                  <p className="text-sm text-green-600 mt-1">
                                    Ersparnis: {best.savingsPerMonth.toFixed(2)}€/Monat
                                  </p>
                                </div>
                              ) : <p className="text-sm text-gray-600">Kosten nicht optimal.</p>
                            );
                          })()}
                        </div>
                      </div>
                      {item.naturalOptions && item.naturalOptions.length > 0 && (
                        <div className="mt-5">
                          <h5 className="font-medium text-gray-700 mb-2">Alle natürlichen Optionen:</h5>
                          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {item.naturalOptions.map((option, idx) => (
                              <div key={idx} className="text-sm bg-white p-3 rounded-md border border-gray-200">
                                <div className="font-medium text-gray-800">{option.food}</div>
                                <div className="text-gray-600">{option.dailyCost.toFixed(2)}€/Tag</div>
                                <div className={`text-xs font-semibold ${option.savingsPerMonth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                  {option.savingsPerMonth > 0 ? '+' : ''}{option.savingsPerMonth.toFixed(2)}€/Monat
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Shopping List */}
            <div className="bg-white rounded-xl shadow-xl p-6">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center border-b pb-3">
                <ListChecks className="h-7 w-7 text-blue-600 mr-3" /> Deine Einkaufsliste
              </h3>
              {shoppingList.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-5">
                  {shoppingList.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-gray-50">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-800 text-lg">{item.food}</h4>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                          Für {item.supplement}
                        </span>
                      </div>
                      <p className="text-sm text-blue-700 font-medium mb-1">{item.amount}</p>
                      <p className="text-sm text-gray-600">{item.note}</p>
                    </div>
                  ))}
                </div>
              ) : (
                 <p className="text-gray-600">Deine Einkaufsliste ist leer. Füge Supplements hinzu und analysiere sie, um Artikel zu generieren.</p>
              )}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2 text-lg">💡 Einkaufstipps:</h4>
                <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
                  <li>Bio-Qualität bevorzugen für potenziell höhere Nährstoffdichte.</li>
                  <li>Fettlösliche Vitamine (A, D, E, K) mit einer Fettquelle (z.B. Öl, Nüsse) kombinieren, um die Aufnahme zu verbessern.</li>
                  <li>Frische, saisonale und regionale Lebensmittel wählen – oft nährstoffreicher und umweltfreundlicher.</li>
                  <li>Auf schonende Zubereitung achten, um Nährstoffverluste zu minimieren (z.B. Dämpfen statt Kochen).</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Info Section: Supported Supplements */}
        <footer className="mt-12 bg-gray-100 rounded-lg p-6 text-center border-t">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Unterstützte Supplements</h3>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-600">
            {Object.keys(supplementDatabase).map(key => (
              <span key={key} className="capitalize bg-gray-200 px-3 py-1 rounded-full">{supplementDatabase[key].name}</span>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6">&copy; {new Date().getFullYear()} NaturSupps Tool. Alle Rechte vorbehalten.</p>
        </footer>
      </div>
    </div>
  );
};

export default SupplementTool;
