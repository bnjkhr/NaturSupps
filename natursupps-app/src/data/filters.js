// Filter-Definitionen für Ernährungseinschränkungen

export const FILTER_TYPES = {
  VEGAN: 'vegan',
  VEGETARISCH: 'vegetarisch',
  LAKTOSEFREI: 'laktosefrei',
  GLUTENFREI: 'glutenfrei',
  NUSSFREI: 'nussfrei',
  FISCHFREI: 'fischfrei'
};

export const FILTER_LABELS = {
  [FILTER_TYPES.VEGAN]: 'Vegan',
  [FILTER_TYPES.VEGETARISCH]: 'Vegetarisch',
  [FILTER_TYPES.LAKTOSEFREI]: 'Laktosefrei',
  [FILTER_TYPES.GLUTENFREI]: 'Glutenfrei',
  [FILTER_TYPES.NUSSFREI]: 'Nussfrei',
  [FILTER_TYPES.FISCHFREI]: 'Ohne Fisch'
};

// Tags für jedes Lebensmittel
// Ein Lebensmittel ist für einen Filter geeignet, wenn es den entsprechenden Tag hat
export const foodTags = {
  // Fisch & Meeresfrüchte
  'Lachs': ['glutenfrei', 'laktosefrei', 'nussfrei'],
  'Lachs (wild)': ['glutenfrei', 'laktosefrei', 'nussfrei'],
  'Makrele': ['glutenfrei', 'laktosefrei', 'nussfrei'],
  'Sardinen': ['glutenfrei', 'laktosefrei', 'nussfrei'],
  'Sardinen (mit Knochen)': ['glutenfrei', 'laktosefrei', 'nussfrei'],
  'Thunfisch': ['glutenfrei', 'laktosefrei', 'nussfrei'],
  'Kabeljau': ['glutenfrei', 'laktosefrei', 'nussfrei'],
  'Garnelen': ['glutenfrei', 'laktosefrei', 'nussfrei'],
  'Austern': ['glutenfrei', 'laktosefrei', 'nussfrei'],

  // Fleisch & Innereien
  'Rinderleber': ['glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Rindfleisch': ['glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Gänseleberpastete': ['glutenfrei', 'nussfrei', 'fischfrei'],
  'Fleisch': ['glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],

  // Eier
  'Eigelb': ['vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Eigelb (Freilandhühner)': ['vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Eier': ['vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Eier (Freiland)': ['vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],

  // Milchprodukte
  'Milchprodukte': ['vegetarisch', 'glutenfrei', 'nussfrei', 'fischfrei'],
  'Käse (Camembert)': ['vegetarisch', 'glutenfrei', 'nussfrei', 'fischfrei'],
  'Hartkäse (Gouda)': ['vegetarisch', 'glutenfrei', 'nussfrei', 'fischfrei'],
  'Kefir': ['vegetarisch', 'glutenfrei', 'nussfrei', 'fischfrei'],

  // Nüsse & Samen
  'Mandeln': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'fischfrei'],
  'Walnüsse': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'fischfrei'],
  'Paranüsse': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'fischfrei'],
  'Haselnüsse': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'fischfrei'],
  'Erdnüsse': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'fischfrei'],
  'Kürbiskerne': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Sonnenblumenkerne': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Sesam': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Chiasamen': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Leinsamen': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],

  // Gemüse
  'Spinat': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Brokkoli': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Grünkohl': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Mangold': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Rosenkohl': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Paprika (rot)': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Karotten': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Süßkartoffeln': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Kürbis': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Spargel': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Avocado': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Petersilie': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],

  // Obst
  'Acerola-Kirsche': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Hagebutten': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Kiwi': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Zitrusfrüchte': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Trauben': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],

  // Hülsenfrüchte
  'Linsen': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],

  // Getreide & Pseudogetreide
  'Quinoa': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Vollkornprodukte': ['vegan', 'vegetarisch', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Vollkornbrot': ['vegan', 'vegetarisch', 'laktosefrei', 'nussfrei', 'fischfrei'],

  // Fermentierte Produkte
  'Natto (fermentierte Sojabohnen)': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Sauerkraut': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Bierhefe': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],

  // Pilze
  'Champignons': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Champignons (UV-behandelt)': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],

  // Öle
  'Weizenkeimöl': ['vegan', 'vegetarisch', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Olivenöl': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Algenöl': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],

  // Algen
  'Meeresalgen (Kelp)': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Nori-Algen': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],

  // Sonstiges
  'Dunkle Schokolade (70%+)': ['vegan', 'vegetarisch', 'glutenfrei', 'nussfrei', 'fischfrei'],
  'Dunkle Schokolade': ['vegan', 'vegetarisch', 'glutenfrei', 'nussfrei', 'fischfrei'],
  'Jodsalz': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Sonnenlicht': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],

  // Neue Lebensmittel für erweiterte Supplemente
  // Fleisch & Geflügel
  'Schweinefleisch': ['glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Hühnerbrust': ['glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Hühnerhaut': ['glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Schweineschwarte': ['glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],

  // Fisch
  'Hering': ['glutenfrei', 'laktosefrei', 'nussfrei'],
  'Fischgräten/-haut': ['glutenfrei', 'laktosefrei', 'nussfrei'],
  'Muscheln': ['glutenfrei', 'laktosefrei', 'nussfrei'],

  // Kollagen & Fermentiertes
  'Knochenbrühe': ['glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Gelatine': ['glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Eier (Membranen)': ['vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Sauerkraut (roh)': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Kimchi': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Joghurt (mit Kulturen)': ['vegetarisch', 'glutenfrei', 'nussfrei', 'fischfrei'],
  'Kombucha': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Miso': ['vegan', 'vegetarisch', 'laktosefrei', 'nussfrei', 'fischfrei'],

  // Adaptogene & Spezielle
  'Ashwagandha-Wurzel': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Ashwagandha-Tee': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],

  // Beeren & Früchte
  'Sauerkirschen': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Pistazien': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'fischfrei'],
  'Cranberries': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Goji-Beeren': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Tomaten': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Bananen': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Ananas': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],

  // Nüsse & Samen
  'Cashewnüsse': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'fischfrei'],
  'Kakao/Dunkle Schokolade': ['vegan', 'vegetarisch', 'glutenfrei', 'nussfrei', 'fischfrei'],

  // Getreide & Hülsenfrüchte
  'Haferflocken': ['vegan', 'vegetarisch', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Reis (Vollkorn)': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Kartoffeln': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Kichererbsen': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Erbsen': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Mais': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Weißkohl': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],

  // Milch & Tofu
  'Tofu': ['vegan', 'vegetarisch', 'glutenfrei', 'laktosefrei', 'nussfrei', 'fischfrei'],
  'Milch': ['vegetarisch', 'glutenfrei', 'nussfrei', 'fischfrei']
};

/**
 * Prüft ob ein Lebensmittel für die aktiven Filter geeignet ist
 * @param {string} foodName - Name des Lebensmittels
 * @param {Object} activeFilters - Objekt mit aktiven Filtern { vegan: true, ... }
 * @returns {boolean} - True wenn das Lebensmittel allen aktiven Filtern entspricht
 */
export const isFoodAllowed = (foodName, activeFilters) => {
  // Wenn keine Filter aktiv, alle erlauben
  const activeFilterKeys = Object.keys(activeFilters).filter(key => activeFilters[key]);
  if (activeFilterKeys.length === 0) return true;

  // Tags für dieses Lebensmittel holen
  const tags = foodTags[foodName] || [];

  // Prüfen ob alle aktiven Filter erfüllt sind
  return activeFilterKeys.every(filter => tags.includes(filter));
};

/**
 * Filtert eine Liste von natürlichen Quellen nach aktiven Filtern
 * @param {Array} sources - Array von natürlichen Quellen
 * @param {Object} activeFilters - Objekt mit aktiven Filtern
 * @returns {Array} - Gefilterte Quellen
 */
export const filterNaturalSources = (sources, activeFilters) => {
  if (!sources) return [];
  return sources.filter(source => isFoodAllowed(source.food, activeFilters));
};

/**
 * Gibt die Standard-Filter zurück (alle deaktiviert)
 */
export const getDefaultFilters = () => ({
  [FILTER_TYPES.VEGAN]: false,
  [FILTER_TYPES.VEGETARISCH]: false,
  [FILTER_TYPES.LAKTOSEFREI]: false,
  [FILTER_TYPES.GLUTENFREI]: false,
  [FILTER_TYPES.NUSSFREI]: false,
  [FILTER_TYPES.FISCHFREI]: false
});

const filterUtils = {
  FILTER_TYPES,
  FILTER_LABELS,
  foodTags,
  isFoodAllowed,
  filterNaturalSources,
  getDefaultFilters
};

export default filterUtils;
