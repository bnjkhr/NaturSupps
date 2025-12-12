// Rezept-Datenbank für nährstoffreiche Mahlzeiten

export const recipes = [
  // Omega-3 & Vitamin D Rezepte
  {
    id: 'lachs-spinat',
    name: 'Gebratener Lachs mit Spinat',
    nutrients: ['omega 3', 'vitamin d', 'eisen', 'magnesium'],
    ingredients: [
      '200g Lachs-Filet',
      '200g frischer Spinat',
      '2 EL Olivenöl',
      '2 Knoblauchzehen',
      'Salz, Pfeffer, Zitrone'
    ],
    instructions: [
      'Lachs salzen und pfeffern',
      'In Olivenöl bei mittlerer Hitze 4 Min. pro Seite braten',
      'Knoblauch anbraten, Spinat dazugeben und zusammenfallen lassen',
      'Mit Zitrone servieren'
    ],
    prepTime: '20 Min',
    difficulty: 'einfach',
    tags: ['glutenfrei', 'laktosefrei', 'nussfrei']
  },
  {
    id: 'makrelen-salat',
    name: 'Makrelen-Avocado-Salat',
    nutrients: ['omega 3', 'vitamin d', 'vitamin e', 'magnesium'],
    ingredients: [
      '1 geräucherte Makrele',
      '1 reife Avocado',
      '100g Rucola',
      '1/2 rote Zwiebel',
      '2 EL Olivenöl',
      'Zitronensaft'
    ],
    instructions: [
      'Makrele zerpflücken',
      'Avocado würfeln',
      'Mit Rucola und Zwiebel mischen',
      'Mit Olivenöl und Zitrone anmachen'
    ],
    prepTime: '10 Min',
    difficulty: 'einfach',
    tags: ['glutenfrei', 'laktosefrei', 'nussfrei']
  },
  // Vitamin C & Eisen Rezepte
  {
    id: 'linsen-paprika',
    name: 'Linsen-Paprika-Eintopf',
    nutrients: ['eisen', 'vitamin c', 'folsäure', 'magnesium'],
    ingredients: [
      '200g rote Linsen',
      '2 rote Paprika',
      '1 Dose Tomaten',
      '1 Zwiebel',
      '2 Knoblauchzehen',
      'Kreuzkümmel, Kurkuma'
    ],
    instructions: [
      'Zwiebel und Knoblauch anbraten',
      'Gewürze kurz mitrösten',
      'Linsen, Paprika und Tomaten zugeben',
      '20 Min. köcheln bis Linsen weich'
    ],
    prepTime: '30 Min',
    difficulty: 'einfach',
    tags: ['vegan', 'glutenfrei', 'nussfrei']
  },
  // Magnesium & B-Vitamine
  {
    id: 'kuerbiskern-porridge',
    name: 'Kürbiskern-Bananen-Porridge',
    nutrients: ['magnesium', 'vitamin b6', 'zink', 'vitamin b1'],
    ingredients: [
      '50g Haferflocken',
      '200ml Pflanzenmilch',
      '1 Banane',
      '2 EL Kürbiskerne',
      '1 TL Honig/Ahornsirup',
      'Zimt'
    ],
    instructions: [
      'Haferflocken mit Milch aufkochen',
      '5 Min. unter Rühren köcheln',
      'Banane in Scheiben schneiden',
      'Mit Kürbiskernen und Zimt toppen'
    ],
    prepTime: '10 Min',
    difficulty: 'einfach',
    tags: ['vegetarisch', 'nussfrei']
  },
  // Calcium & Vitamin K
  {
    id: 'gruenkohl-sesam',
    name: 'Gebratener Grünkohl mit Sesam',
    nutrients: ['calcium', 'vitamin k1', 'vitamin c', 'eisen'],
    ingredients: [
      '300g Grünkohl',
      '3 EL Sesamöl',
      '2 EL Sesamsamen',
      '2 Knoblauchzehen',
      '1 EL Sojasauce',
      'Chili nach Geschmack'
    ],
    instructions: [
      'Grünkohl waschen, Stiele entfernen',
      'Knoblauch in Sesamöl anbraten',
      'Grünkohl zugeben, 5 Min. braten',
      'Mit Sojasauce und Sesam servieren'
    ],
    prepTime: '15 Min',
    difficulty: 'einfach',
    tags: ['vegan', 'glutenfrei', 'laktosefrei', 'nussfrei']
  },
  // Probiotika
  {
    id: 'kimchi-bowl',
    name: 'Fermentierte Kimchi-Bowl',
    nutrients: ['probiotika', 'vitamin c', 'vitamin k1'],
    ingredients: [
      '150g Reis',
      '100g Kimchi',
      '1 Ei (optional)',
      '100g Edamame',
      '1 Karotte',
      'Sesamöl, Sesam'
    ],
    instructions: [
      'Reis kochen',
      'Karotte raspeln',
      'Ei als Spiegelei braten (optional)',
      'Alles in einer Bowl anrichten',
      'Mit Kimchi und Sesamöl toppen'
    ],
    prepTime: '25 Min',
    difficulty: 'einfach',
    tags: ['glutenfrei', 'laktosefrei', 'nussfrei']
  },
  // Kollagen-unterstützend
  {
    id: 'knochenbruehe',
    name: 'Hausgemachte Knochenbrühe',
    nutrients: ['kollagen', 'calcium', 'magnesium'],
    ingredients: [
      '1kg Rinderknochen',
      '2 Karotten',
      '2 Selleriestangen',
      '1 Zwiebel',
      '2 EL Apfelessig',
      'Lorbeer, Pfefferkörner'
    ],
    instructions: [
      'Knochen im Ofen 30 Min. rösten',
      'Mit kaltem Wasser und Essig aufsetzen',
      'Gemüse und Gewürze zugeben',
      '12-24 Stunden auf niedriger Stufe köcheln',
      'Abseihen und portionsweise einfrieren'
    ],
    prepTime: '12-24 Std',
    difficulty: 'mittel',
    tags: ['glutenfrei', 'laktosefrei', 'nussfrei']
  },
  // B12 & Eisen
  {
    id: 'leber-zwiebeln',
    name: 'Gebratene Leber mit Zwiebeln',
    nutrients: ['vitamin b12', 'eisen', 'vitamin a', 'folsäure', 'biotin'],
    ingredients: [
      '300g Rinderleber',
      '2 große Zwiebeln',
      '2 EL Butter',
      'Salz, Pfeffer',
      'Frische Petersilie'
    ],
    instructions: [
      'Zwiebeln in Ringe schneiden, in Butter goldbraun braten',
      'Leber dünn schneiden, salzen und pfeffern',
      'Bei hoher Hitze kurz anbraten (innen noch rosa)',
      'Mit Petersilie garnieren'
    ],
    prepTime: '20 Min',
    difficulty: 'mittel',
    tags: ['glutenfrei', 'nussfrei']
  },
  // Vitamin E & Selen
  {
    id: 'paranuss-smoothie',
    name: 'Selen-Power-Smoothie',
    nutrients: ['selen', 'vitamin e', 'magnesium', 'omega 3'],
    ingredients: [
      '2 Paranüsse',
      '1 Banane',
      '1 EL Leinsamen',
      '200ml Mandelmilch',
      '1 EL Mandelmus',
      '1 TL Honig'
    ],
    instructions: [
      'Alle Zutaten in einen Mixer geben',
      'Auf höchster Stufe 1 Min. mixen',
      'Bei Bedarf mehr Milch für dünnere Konsistenz'
    ],
    prepTime: '5 Min',
    difficulty: 'einfach',
    tags: ['vegetarisch', 'glutenfrei', 'laktosefrei']
  },
  // Zink & Protein
  {
    id: 'austern-zitrone',
    name: 'Frische Austern mit Zitrone',
    nutrients: ['zink', 'vitamin b12', 'kupfer', 'selen'],
    ingredients: [
      '12 frische Austern',
      '2 Zitronen',
      'Schalotten-Vinaigrette',
      'Tabasco (optional)',
      'Crushed Ice'
    ],
    instructions: [
      'Austern mit Austernmesser öffnen',
      'Auf Crushed Ice anrichten',
      'Mit Zitronenspalten und Vinaigrette servieren',
      'Roh genießen'
    ],
    prepTime: '15 Min',
    difficulty: 'mittel',
    tags: ['glutenfrei', 'laktosefrei', 'nussfrei']
  }
];

/**
 * Findet Rezepte für bestimmte Nährstoffe
 * @param {string[]} nutrientKeys - Array von Nährstoff-Keys
 * @returns {Array} - Passende Rezepte
 */
export const findRecipesForNutrients = (nutrientKeys) => {
  if (!nutrientKeys || nutrientKeys.length === 0) return [];

  const normalizedKeys = nutrientKeys.map(k => k.toLowerCase().trim().replace(/-/g, ' '));

  return recipes.filter(recipe =>
    recipe.nutrients.some(n => normalizedKeys.includes(n))
  ).map(recipe => ({
    ...recipe,
    matchingNutrients: recipe.nutrients.filter(n => normalizedKeys.includes(n))
  }));
};

/**
 * Filtert Rezepte nach Ernährungseinschränkungen
 * @param {Array} recipeList - Liste von Rezepten
 * @param {Object} filters - Aktive Filter
 * @returns {Array} - Gefilterte Rezepte
 */
export const filterRecipes = (recipeList, filters) => {
  const activeFilters = Object.keys(filters).filter(k => filters[k]);
  if (activeFilters.length === 0) return recipeList;

  return recipeList.filter(recipe =>
    activeFilters.every(filter => recipe.tags.includes(filter))
  );
};

/**
 * Holt ein Rezept nach ID
 * @param {string} id - Rezept-ID
 * @returns {Object|null} - Rezept oder null
 */
export const getRecipeById = (id) => {
  return recipes.find(r => r.id === id) || null;
};

export default recipes;
