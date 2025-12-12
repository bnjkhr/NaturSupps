// Kosten-Datenbank (Durchschnittspreise in EUR, deutsche Supermärkte)
export const costDatabase = {
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
  'omega 3': {
    supplement: { price: 25, duration: 30, unit: 'Fischöl Kapseln' },
    natural: [
      { food: 'Lachs', price: 25, amount: '500g', dailyCost: 2.50 },
      { food: 'Walnüsse', price: 8, amount: '500g', dailyCost: 0.48 },
      { food: 'Chiasamen', price: 6, amount: '500g', dailyCost: 0.36 }
    ]
  },
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
  },
  // Neue Kostendaten für die fehlenden Supplemente
  'vitamin b12': {
    supplement: { price: 15, duration: 90, unit: '1000μg Tabletten' },
    natural: [
      { food: 'Rinderleber', price: 7, amount: '250g', dailyCost: 0.56 },
      { food: 'Sardinen', price: 8, amount: '400g Dose', dailyCost: 0.80 },
      { food: 'Eier (Freiland)', price: 4, amount: '12 Stück', dailyCost: 0.67 }
    ]
  },
  'calcium': {
    supplement: { price: 12, duration: 60, unit: '500mg Tabletten' },
    natural: [
      { food: 'Sesam', price: 5, amount: '500g', dailyCost: 0.30 },
      { food: 'Sardinen (mit Knochen)', price: 8, amount: '400g', dailyCost: 0.80 },
      { food: 'Mandeln', price: 12, amount: '1kg', dailyCost: 0.48 }
    ]
  },
  'vitamin k2': {
    supplement: { price: 20, duration: 60, unit: '200μg Kapseln' },
    natural: [
      { food: 'Natto', price: 6, amount: '200g', dailyCost: 0.90 },
      { food: 'Hartkäse (Gouda)', price: 8, amount: '400g', dailyCost: 0.60 },
      { food: 'Eigelb (Freiland)', price: 4, amount: '12 Stück', dailyCost: 0.67 }
    ]
  },
  'folsäure': {
    supplement: { price: 10, duration: 90, unit: '400μg Tabletten' },
    natural: [
      { food: 'Linsen', price: 3, amount: '1kg', dailyCost: 0.18 },
      { food: 'Spinat', price: 2, amount: '300g', dailyCost: 0.50 },
      { food: 'Avocado', price: 2, amount: '1 Stück', dailyCost: 1.00 }
    ]
  },
  'coenzym q10': {
    supplement: { price: 25, duration: 30, unit: '100mg Kapseln' },
    natural: [
      { food: 'Rinderleber', price: 7, amount: '250g', dailyCost: 0.84 },
      { food: 'Sardinen', price: 8, amount: '400g', dailyCost: 1.20 },
      { food: 'Rindfleisch', price: 12, amount: '500g', dailyCost: 1.44 }
    ]
  },
  'vitamin k1': {
    supplement: { price: 12, duration: 90, unit: '100μg Tabletten' },
    natural: [
      { food: 'Grünkohl', price: 2.50, amount: '500g', dailyCost: 0.25 },
      { food: 'Spinat', price: 2, amount: '300g', dailyCost: 0.33 },
      { food: 'Brokkoli', price: 3, amount: '500g', dailyCost: 0.45 }
    ]
  },
  'biotin': {
    supplement: { price: 15, duration: 90, unit: '10000μg Tabletten' },
    natural: [
      { food: 'Eigelb', price: 4, amount: '12 Stück', dailyCost: 0.50 },
      { food: 'Mandeln', price: 12, amount: '1kg', dailyCost: 0.36 },
      { food: 'Erdnüsse', price: 4, amount: '500g', dailyCost: 0.24 }
    ]
  },
  'selen': {
    supplement: { price: 12, duration: 90, unit: '200μg Tabletten' },
    natural: [
      { food: 'Paranüsse', price: 8, amount: '200g', dailyCost: 0.08 },
      { food: 'Thunfisch', price: 3, amount: '185g Dose', dailyCost: 0.81 },
      { food: 'Eier', price: 4, amount: '12 Stück', dailyCost: 0.67 }
    ]
  },
  'jod': {
    supplement: { price: 8, duration: 90, unit: '200μg Tabletten' },
    natural: [
      { food: 'Kabeljau', price: 15, amount: '500g', dailyCost: 0.90 },
      { food: 'Garnelen', price: 12, amount: '400g', dailyCost: 1.20 },
      { food: 'Eier (Freiland)', price: 4, amount: '12 Stück', dailyCost: 0.67 }
    ]
  },
  'chrom': {
    supplement: { price: 10, duration: 90, unit: '200μg Tabletten' },
    natural: [
      { food: 'Bierhefe', price: 8, amount: '250g', dailyCost: 0.16 },
      { food: 'Vollkornbrot', price: 3, amount: '500g', dailyCost: 0.30 },
      { food: 'Brokkoli', price: 3, amount: '500g', dailyCost: 0.45 }
    ]
  },
  'vitamin a': {
    supplement: { price: 12, duration: 90, unit: '10000 IU Kapseln' },
    natural: [
      { food: 'Rinderleber', price: 7, amount: '250g', dailyCost: 0.28 },
      { food: 'Karotten', price: 1.50, amount: '1kg', dailyCost: 0.15 },
      { food: 'Süßkartoffeln', price: 3, amount: '1kg', dailyCost: 0.30 }
    ]
  },
  'vitamin e': {
    supplement: { price: 15, duration: 60, unit: '400 IU Kapseln' },
    natural: [
      { food: 'Sonnenblumenkerne', price: 4, amount: '500g', dailyCost: 0.24 },
      { food: 'Mandeln', price: 12, amount: '1kg', dailyCost: 0.36 },
      { food: 'Olivenöl', price: 8, amount: '500ml', dailyCost: 0.32 }
    ]
  },
  // Neue Supplemente
  'kreatin': {
    supplement: { price: 20, duration: 60, unit: '5g Pulver täglich' },
    natural: [
      { food: 'Rindfleisch', price: 12, amount: '500g', dailyCost: 2.40 },
      { food: 'Lachs', price: 25, amount: '500g', dailyCost: 5.00 },
      { food: 'Hering', price: 8, amount: '400g', dailyCost: 1.60 }
    ]
  },
  'kollagen': {
    supplement: { price: 25, duration: 30, unit: '10g Pulver täglich' },
    natural: [
      { food: 'Knochenbrühe', price: 5, amount: '1L', dailyCost: 1.00 },
      { food: 'Gelatine', price: 4, amount: '200g', dailyCost: 0.40 },
      { food: 'Hühnerhaut', price: 3, amount: '500g', dailyCost: 0.30 }
    ]
  },
  'probiotika': {
    supplement: { price: 30, duration: 30, unit: '10 Mrd KBE Kapseln' },
    natural: [
      { food: 'Sauerkraut (roh)', price: 4, amount: '500g', dailyCost: 0.40 },
      { food: 'Kefir', price: 2.50, amount: '500ml', dailyCost: 0.50 },
      { food: 'Kimchi', price: 6, amount: '400g', dailyCost: 0.75 }
    ]
  },
  'l glutamin': {
    supplement: { price: 18, duration: 30, unit: '5g Pulver täglich' },
    natural: [
      { food: 'Rindfleisch', price: 12, amount: '500g', dailyCost: 1.20 },
      { food: 'Eier', price: 4, amount: '12 Stück', dailyCost: 0.67 },
      { food: 'Tofu', price: 3, amount: '400g', dailyCost: 0.60 }
    ]
  },
  'melatonin': {
    supplement: { price: 15, duration: 90, unit: '1mg Tabletten' },
    natural: [
      { food: 'Sauerkirschen', price: 8, amount: '500g', dailyCost: 1.60 },
      { food: 'Pistazien', price: 10, amount: '300g', dailyCost: 1.00 },
      { food: 'Walnüsse', price: 8, amount: '500g', dailyCost: 0.48 }
    ]
  },
  'kupfer': {
    supplement: { price: 10, duration: 90, unit: '2mg Tabletten' },
    natural: [
      { food: 'Rinderleber', price: 7, amount: '250g', dailyCost: 0.14 },
      { food: 'Cashewnüsse', price: 10, amount: '500g', dailyCost: 0.40 },
      { food: 'Kakao/Dunkle Schokolade', price: 4, amount: '200g', dailyCost: 0.40 }
    ]
  },
  'mangan': {
    supplement: { price: 12, duration: 90, unit: '5mg Tabletten' },
    natural: [
      { food: 'Haferflocken', price: 2, amount: '500g', dailyCost: 0.20 },
      { food: 'Haselnüsse', price: 8, amount: '500g', dailyCost: 0.32 },
      { food: 'Reis (Vollkorn)', price: 3, amount: '1kg', dailyCost: 0.15 }
    ]
  },
  'vitamin b6': {
    supplement: { price: 10, duration: 90, unit: '10mg Tabletten' },
    natural: [
      { food: 'Hühnerbrust', price: 10, amount: '500g', dailyCost: 1.00 },
      { food: 'Bananen', price: 2, amount: '1kg', dailyCost: 0.20 },
      { food: 'Kichererbsen', price: 3, amount: '500g', dailyCost: 0.30 }
    ]
  },
  'vitamin b1': {
    supplement: { price: 10, duration: 90, unit: '100mg Tabletten' },
    natural: [
      { food: 'Sonnenblumenkerne', price: 4, amount: '500g', dailyCost: 0.24 },
      { food: 'Haferflocken', price: 2, amount: '500g', dailyCost: 0.20 },
      { food: 'Schweinefleisch', price: 10, amount: '500g', dailyCost: 1.00 }
    ]
  },
  'vitamin b2': {
    supplement: { price: 10, duration: 90, unit: '100mg Tabletten' },
    natural: [
      { food: 'Rinderleber', price: 7, amount: '250g', dailyCost: 0.28 },
      { food: 'Mandeln', price: 12, amount: '1kg', dailyCost: 0.36 },
      { food: 'Eier', price: 4, amount: '12 Stück', dailyCost: 0.67 }
    ]
  }
};

// Kostendaten für ein Supplement abrufen
export const getCostData = (key) => {
  const normalizedKey = key.toLowerCase().trim().replace(/-/g, ' ');
  return costDatabase[normalizedKey] || null;
};

// Berechne tägliche Supplement-Kosten
export const getSupplementDailyCost = (key) => {
  const data = getCostData(key);
  if (!data) return null;
  return data.supplement.price / data.supplement.duration;
};

// Berechne monatliche Ersparnis für eine natürliche Alternative
export const calculateMonthlySavings = (supplementKey, naturalOption) => {
  const supplementDailyCost = getSupplementDailyCost(supplementKey);
  if (!supplementDailyCost) return 0;
  return (supplementDailyCost - naturalOption.dailyCost) * 30;
};

// Finde die beste natürliche Alternative (höchste Ersparnis)
export const findBestNaturalOption = (key) => {
  const data = getCostData(key);
  if (!data || !data.natural.length) return null;

  const supplementDailyCost = data.supplement.price / data.supplement.duration;

  return data.natural.reduce((best, current) => {
    const currentSavings = (supplementDailyCost - current.dailyCost) * 30;
    const bestSavings = best ? (supplementDailyCost - best.dailyCost) * 30 : -Infinity;
    return currentSavings > bestSavings ? current : best;
  }, null);
};

export default costDatabase;
