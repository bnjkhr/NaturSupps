// Saisonkalender für Deutschland

export const MONTHS = [
  'Jan', 'Feb', 'Mrz', 'Apr', 'Mai', 'Jun',
  'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'
];

export const MONTH_NAMES = {
  'Jan': 'Januar', 'Feb': 'Februar', 'Mrz': 'März', 'Apr': 'April',
  'Mai': 'Mai', 'Jun': 'Juni', 'Jul': 'Juli', 'Aug': 'August',
  'Sep': 'September', 'Okt': 'Oktober', 'Nov': 'November', 'Dez': 'Dezember'
};

// Saisonalität: peak = Hauptsaison, available = verfügbar
// Lebensmittel ohne Eintrag sind ganzjährig verfügbar (Importe, haltbare Produkte)
export const seasonality = {
  // Gemüse
  'Spinat': {
    peak: ['Apr', 'Mai', 'Jun', 'Sep', 'Okt'],
    available: ['Mrz', 'Apr', 'Mai', 'Jun', 'Sep', 'Okt', 'Nov']
  },
  'Brokkoli': {
    peak: ['Jun', 'Jul', 'Aug', 'Sep', 'Okt'],
    available: ['Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov']
  },
  'Grünkohl': {
    peak: ['Nov', 'Dez', 'Jan', 'Feb'],
    available: ['Okt', 'Nov', 'Dez', 'Jan', 'Feb', 'Mrz']
  },
  'Mangold': {
    peak: ['Jun', 'Jul', 'Aug', 'Sep'],
    available: ['Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt']
  },
  'Rosenkohl': {
    peak: ['Nov', 'Dez', 'Jan'],
    available: ['Sep', 'Okt', 'Nov', 'Dez', 'Jan', 'Feb']
  },
  'Paprika (rot)': {
    peak: ['Aug', 'Sep', 'Okt'],
    available: ['Jul', 'Aug', 'Sep', 'Okt']
  },
  'Karotten': {
    peak: ['Jul', 'Aug', 'Sep', 'Okt'],
    available: ['Jan', 'Feb', 'Mrz', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
  },
  'Kürbis': {
    peak: ['Sep', 'Okt', 'Nov'],
    available: ['Aug', 'Sep', 'Okt', 'Nov', 'Dez']
  },
  'Spargel': {
    peak: ['Apr', 'Mai', 'Jun'],
    available: ['Apr', 'Mai', 'Jun']
  },
  'Petersilie': {
    peak: ['Mai', 'Jun', 'Jul', 'Aug', 'Sep'],
    available: ['Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt']
  },
  'Weißkohl': {
    peak: ['Sep', 'Okt', 'Nov'],
    available: ['Jan', 'Feb', 'Mrz', 'Sep', 'Okt', 'Nov', 'Dez']
  },

  // Obst
  'Kiwi': {
    peak: ['Nov', 'Dez', 'Jan', 'Feb'],
    available: ['Okt', 'Nov', 'Dez', 'Jan', 'Feb', 'Mrz', 'Apr']
  },
  'Sauerkirschen': {
    peak: ['Jun', 'Jul'],
    available: ['Jun', 'Jul', 'Aug']
  },
  'Trauben': {
    peak: ['Sep', 'Okt'],
    available: ['Aug', 'Sep', 'Okt', 'Nov']
  },

  // Pilze
  'Champignons': {
    peak: ['Sep', 'Okt', 'Nov'],
    available: ['Jan', 'Feb', 'Mrz', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
  },

  // Fisch (Fangsaison)
  'Lachs': {
    peak: ['Jun', 'Jul', 'Aug', 'Sep'],
    available: ['Jan', 'Feb', 'Mrz', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
  },
  'Makrele': {
    peak: ['Apr', 'Mai', 'Jun'],
    available: ['Jan', 'Feb', 'Mrz', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
  },
  'Hering': {
    peak: ['Mai', 'Jun', 'Jul'],
    available: ['Jan', 'Feb', 'Mrz', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
  }
};

/**
 * Gibt den aktuellen Monat zurück
 * @returns {string} - Monatskürzel (z.B. 'Jan')
 */
export const getCurrentMonth = () => {
  const monthIndex = new Date().getMonth();
  return MONTHS[monthIndex];
};

/**
 * Prüft ob ein Lebensmittel gerade Hauptsaison hat
 * @param {string} foodName - Name des Lebensmittels
 * @returns {boolean}
 */
export const isInPeakSeason = (foodName) => {
  const data = seasonality[foodName];
  if (!data) return false;
  return data.peak.includes(getCurrentMonth());
};

/**
 * Prüft ob ein Lebensmittel gerade verfügbar ist (regional)
 * @param {string} foodName - Name des Lebensmittels
 * @returns {boolean}
 */
export const isAvailable = (foodName) => {
  const data = seasonality[foodName];
  if (!data) return true; // Wenn nicht im Kalender, ganzjährig verfügbar
  return data.available.includes(getCurrentMonth());
};

/**
 * Gibt Saisoninfo für ein Lebensmittel zurück
 * @param {string} foodName - Name des Lebensmittels
 * @returns {Object} - { isPeak, isAvailable, peakMonths, info }
 */
export const getSeasonInfo = (foodName) => {
  const data = seasonality[foodName];
  const currentMonth = getCurrentMonth();

  if (!data) {
    return {
      isPeak: false,
      isAvailable: true,
      isYearRound: true,
      peakMonths: [],
      info: 'Ganzjährig verfügbar'
    };
  }

  const isPeak = data.peak.includes(currentMonth);
  const isAvail = data.available.includes(currentMonth);

  let info = '';
  if (isPeak) {
    info = 'Jetzt Hauptsaison - besonders frisch & günstig!';
  } else if (isAvail) {
    info = 'Regional verfügbar';
  } else {
    info = `Hauptsaison: ${data.peak.join(', ')}`;
  }

  return {
    isPeak,
    isAvailable: isAvail,
    isYearRound: false,
    peakMonths: data.peak,
    availableMonths: data.available,
    info
  };
};

/**
 * Gibt alle Lebensmittel zurück, die gerade Hauptsaison haben
 * @returns {string[]} - Array von Lebensmittel-Namen
 */
export const getFoodsInPeakSeason = () => {
  const currentMonth = getCurrentMonth();
  return Object.keys(seasonality).filter(food =>
    seasonality[food].peak.includes(currentMonth)
  );
};

const seasonUtils = {
  MONTHS,
  MONTH_NAMES,
  seasonality,
  getCurrentMonth,
  isInPeakSeason,
  isAvailable,
  getSeasonInfo,
  getFoodsInPeakSeason
};

export default seasonUtils;
