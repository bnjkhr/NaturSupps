// Helper-Funktionen für NaturSupps

/**
 * Normalisiert einen Supplement-Key für konsistente Suche
 * @param {string} key - Der zu normalisierende Key
 * @returns {string} - Normalisierter Key
 */
export const normalizeKey = (key) => {
  if (!key) return '';
  return key.toLowerCase().trim().replace(/-/g, ' ');
};

/**
 * Formatiert einen Preis in Euro
 * @param {number} price - Der Preis
 * @param {number} decimals - Anzahl Dezimalstellen (default: 2)
 * @returns {string} - Formatierter Preis (z.B. "12,50€")
 */
export const formatPrice = (price, decimals = 2) => {
  if (typeof price !== 'number') return '0,00€';
  return price.toFixed(decimals).replace('.', ',') + '€';
};

/**
 * Formatiert einen Preis pro Tag/Monat
 * @param {number} price - Der Preis
 * @param {string} period - 'day' oder 'month'
 * @returns {string} - Formatierter Preis mit Zeiteinheit
 */
export const formatPricePerPeriod = (price, period = 'day') => {
  const suffix = period === 'month' ? '/Monat' : '/Tag';
  return formatPrice(price) + suffix;
};

/**
 * Berechnet die prozentuale Ersparnis
 * @param {number} original - Originalpreis
 * @param {number} alternative - Alternativpreis
 * @returns {number} - Ersparnis in Prozent
 */
export const calculateSavingsPercentage = (original, alternative) => {
  if (!original || original <= 0) return 0;
  return Math.round(((original - alternative) / original) * 100);
};

/**
 * Generiert eine eindeutige ID
 * @returns {string} - Eindeutige ID
 */
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

/**
 * Kapitalisiert den ersten Buchstaben eines Strings
 * @param {string} str - Der String
 * @returns {string} - String mit großem Anfangsbuchstaben
 */
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Gruppiert ein Array nach einem Key
 * @param {Array} array - Das Array
 * @param {string} key - Der Gruppierungs-Key
 * @returns {Object} - Gruppiertes Objekt
 */
export const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
};

/**
 * Entfernt Duplikate aus einem Array basierend auf einem Key
 * @param {Array} array - Das Array
 * @param {string} key - Der Key für Duplikat-Check
 * @returns {Array} - Array ohne Duplikate
 */
export const uniqueBy = (array, key) => {
  const seen = new Set();
  return array.filter(item => {
    const value = item[key];
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
};

/**
 * Sortiert ein Array nach einem numerischen Key (absteigend)
 * @param {Array} array - Das Array
 * @param {string} key - Der Sortier-Key
 * @param {boolean} ascending - Aufsteigend sortieren (default: false)
 * @returns {Array} - Sortiertes Array
 */
export const sortByNumber = (array, key, ascending = false) => {
  return [...array].sort((a, b) => {
    const diff = a[key] - b[key];
    return ascending ? diff : -diff;
  });
};

/**
 * Debounce-Funktion für Performance-Optimierung
 * @param {Function} func - Die zu debouncing Funktion
 * @param {number} wait - Wartezeit in ms
 * @returns {Function} - Debounced Funktion
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

/**
 * Prüft ob ein Wert leer ist (null, undefined, leerer String, leeres Array)
 * @param {*} value - Der zu prüfende Wert
 * @returns {boolean} - True wenn leer
 */
export const isEmpty = (value) => {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.trim() === '';
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
};
