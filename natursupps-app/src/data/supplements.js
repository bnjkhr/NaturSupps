// Supplement-Datenbank mit natürlichen Alternativen
export const supplementDatabase = {
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
  'vitamin b12': {
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
  'vitamin k1': {
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
  },
  // Neue Supplemente
  'kreatin': {
    name: 'Kreatin',
    naturalSources: [
      { food: 'Rindfleisch', amount: '4-5g pro kg', note: 'Höchste natürliche Konzentration' },
      { food: 'Lachs', amount: '4.5g pro kg', note: 'Fettreicher Fisch' },
      { food: 'Thunfisch', amount: '4g pro kg', note: 'Magerer Fisch' },
      { food: 'Hering', amount: '6.5g pro kg', note: 'Sehr gute Quelle' },
      { food: 'Schweinefleisch', amount: '5g pro kg', note: 'Muskelgewebe' },
      { food: 'Hühnerbrust', amount: '3.4g pro kg', note: 'Mageres Fleisch' }
    ],
    dailyNeed: '3-5g (für Sportler)',
    tips: 'Kreatin kommt fast nur in tierischen Produkten vor. Für 5g müsste man ca. 1kg Fleisch essen - Supplementierung ist hier oft sinnvoll.'
  },
  'kollagen': {
    name: 'Kollagen',
    naturalSources: [
      { food: 'Knochenbrühe', amount: 'Reich an Kollagen', note: 'Aus Rinder- oder Hühnerknochen' },
      { food: 'Hühnerhaut', amount: 'Hoher Gehalt', note: 'Natürliche Kollagenquelle' },
      { food: 'Schweineschwarte', amount: 'Sehr reich', note: 'Traditionelle Quelle' },
      { food: 'Fischgräten/-haut', amount: 'Mariner Kollagen', note: 'Besonders gut resorbierbar' },
      { food: 'Gelatine', amount: 'Konzentriert', note: 'Aus Knochen gewonnen' },
      { food: 'Eier (Membranen)', amount: 'In der Schale', note: 'Enthält Kollagen Typ I' }
    ],
    dailyNeed: '2.5-15g',
    tips: 'Vitamin C ist essentiell für die körpereigene Kollagenproduktion. Kombiniere kollagenreiche Lebensmittel mit Vitamin C.'
  },
  'probiotika': {
    name: 'Probiotika',
    naturalSources: [
      { food: 'Sauerkraut (roh)', amount: '1 Mrd+ KBE pro 100g', note: 'Unpasteurisiert kaufen!' },
      { food: 'Kimchi', amount: '1 Mrd+ KBE pro 100g', note: 'Koreanisches fermentiertes Gemüse' },
      { food: 'Kefir', amount: '10 Mrd+ KBE pro 100ml', note: 'Fermentierte Milch' },
      { food: 'Joghurt (mit Kulturen)', amount: '100 Mio+ KBE pro 100g', note: 'Lebende Kulturen prüfen' },
      { food: 'Kombucha', amount: 'Variiert', note: 'Fermentierter Tee' },
      { food: 'Miso', amount: 'Reich an Kulturen', note: 'Japanische Sojapaste' }
    ],
    dailyNeed: '1-10 Mrd KBE',
    tips: 'Fermentierte Lebensmittel sollten roh/unpasteurisiert sein, da Hitze die Bakterien abtötet.'
  },
  'l glutamin': {
    name: 'L-Glutamin',
    naturalSources: [
      { food: 'Rindfleisch', amount: '1.2g pro 100g', note: 'Hoher Proteingehalt' },
      { food: 'Eier', amount: '0.6g pro 100g', note: 'Vollständiges Protein' },
      { food: 'Tofu', amount: '0.6g pro 100g', note: 'Pflanzliche Quelle' },
      { food: 'Mais', amount: '0.4g pro 100g', note: 'Getreide' },
      { food: 'Milch', amount: '0.3g pro 100g', note: 'Molkenprotein' },
      { food: 'Weißkohl', amount: '0.2g pro 100g', note: 'Gemüse-Option' }
    ],
    dailyNeed: '5-10g (für Sportler)',
    tips: 'Glutamin ist die häufigste Aminosäure im Körper. Bei proteinreicher Ernährung meist ausreichend vorhanden.'
  },
  'ashwagandha': {
    name: 'Ashwagandha',
    naturalSources: [
      { food: 'Ashwagandha-Wurzel', amount: 'Als Pulver/Tee', note: 'Traditionelle ayurvedische Verwendung' },
      { food: 'Ashwagandha-Tee', amount: '1-2 Tassen täglich', note: 'Aus getrockneter Wurzel' }
    ],
    dailyNeed: '300-600mg Extrakt',
    tips: 'Ashwagandha ist ein Adaptogen ohne natürliche Lebensmittel-Alternativen. Die Wurzel selbst ist die einzige Quelle.'
  },
  'melatonin': {
    name: 'Melatonin',
    naturalSources: [
      { food: 'Sauerkirschen', amount: '13.5ng pro g', note: 'Höchste natürliche Quelle' },
      { food: 'Pistazien', amount: '23μg pro 100g', note: 'Nüsse mit Melatonin' },
      { food: 'Cranberries', amount: 'Gute Quelle', note: 'Beeren' },
      { food: 'Goji-Beeren', amount: 'Reich an Melatonin', note: 'Superfood' },
      { food: 'Walnüsse', amount: '3.5ng pro g', note: 'Abends essen' },
      { food: 'Tomaten', amount: 'Geringe Mengen', note: 'Gemüse-Option' }
    ],
    dailyNeed: '0.5-5mg',
    tips: 'Natürliche Melatonin-Quellen enthalten geringe Mengen. Sauerkirschsaft am Abend kann den Schlaf unterstützen.'
  },
  'kupfer': {
    name: 'Kupfer',
    naturalSources: [
      { food: 'Rinderleber', amount: '14.3mg pro 100g', note: 'Sehr hohe Konzentration' },
      { food: 'Austern', amount: '5.7mg pro 100g', note: 'Meeresfrüchte' },
      { food: 'Kakao/Dunkle Schokolade', amount: '3.8mg pro 100g', note: 'In Maßen' },
      { food: 'Cashewnüsse', amount: '2.2mg pro 100g', note: 'Nüsse' },
      { food: 'Sonnenblumenkerne', amount: '1.8mg pro 100g', note: 'Samen' },
      { food: 'Linsen', amount: '0.5mg pro 100g', note: 'Hülsenfrüchte' }
    ],
    dailyNeed: '0.9-1.3mg',
    tips: 'Kupfer und Zink konkurrieren um Aufnahme. Bei hoher Zink-Supplementierung auf Kupfer achten.'
  },
  'mangan': {
    name: 'Mangan',
    naturalSources: [
      { food: 'Muscheln', amount: '6.8mg pro 100g', note: 'Meeresfrüchte' },
      { food: 'Haselnüsse', amount: '6.2mg pro 100g', note: 'Nüsse' },
      { food: 'Haferflocken', amount: '4.9mg pro 100g', note: 'Vollkorn' },
      { food: 'Reis (Vollkorn)', amount: '3.7mg pro 100g', note: 'Getreide' },
      { food: 'Spinat', amount: '0.9mg pro 100g', note: 'Grünes Blattgemüse' },
      { food: 'Ananas', amount: '0.9mg pro 100g', note: 'Frucht' }
    ],
    dailyNeed: '2-3mg',
    tips: 'Mangan ist wichtig für Knochen und Stoffwechsel. Vollkornprodukte sind gute Quellen.'
  },
  'vitamin b6': {
    name: 'Vitamin B6',
    naturalSources: [
      { food: 'Hühnerbrust', amount: '0.9mg pro 100g', note: 'Mageres Fleisch' },
      { food: 'Lachs', amount: '0.8mg pro 100g', note: 'Fettreicher Fisch' },
      { food: 'Kartoffeln', amount: '0.4mg pro 100g', note: 'Mit Schale' },
      { food: 'Bananen', amount: '0.4mg pro 100g', note: 'Frucht' },
      { food: 'Kichererbsen', amount: '0.5mg pro 100g', note: 'Hülsenfrüchte' },
      { food: 'Avocado', amount: '0.3mg pro 100g', note: 'Frucht' }
    ],
    dailyNeed: '1.2-1.5mg',
    tips: 'B6 ist wichtig für Proteinstoffwechsel und Nervenfunktion. Bei abwechslungsreicher Ernährung meist ausreichend.'
  },
  'vitamin b1': {
    name: 'Vitamin B1 (Thiamin)',
    naturalSources: [
      { food: 'Schweinefleisch', amount: '0.9mg pro 100g', note: 'Beste tierische Quelle' },
      { food: 'Sonnenblumenkerne', amount: '1.5mg pro 100g', note: 'Samen' },
      { food: 'Haferflocken', amount: '0.8mg pro 100g', note: 'Vollkorn' },
      { food: 'Linsen', amount: '0.5mg pro 100g', note: 'Hülsenfrüchte' },
      { food: 'Erbsen', amount: '0.3mg pro 100g', note: 'Hülsenfrüchte' },
      { food: 'Paranüsse', amount: '0.6mg pro 100g', note: 'Nüsse' }
    ],
    dailyNeed: '1.0-1.2mg',
    tips: 'B1 ist wasserlöslich und hitzeempfindlich. Schonende Zubereitung bevorzugen.'
  },
  'vitamin b2': {
    name: 'Vitamin B2 (Riboflavin)',
    naturalSources: [
      { food: 'Rinderleber', amount: '3.4mg pro 100g', note: 'Höchste Konzentration' },
      { food: 'Mandeln', amount: '1.0mg pro 100g', note: 'Nüsse' },
      { food: 'Champignons', amount: '0.4mg pro 100g', note: 'Pilze' },
      { food: 'Eier', amount: '0.5mg pro 100g', note: 'Tierische Quelle' },
      { food: 'Spinat', amount: '0.2mg pro 100g', note: 'Blattgemüse' },
      { food: 'Milch', amount: '0.2mg pro 100g', note: 'Milchprodukte' }
    ],
    dailyNeed: '1.1-1.4mg',
    tips: 'B2 ist lichtempfindlich. Milch und Lebensmittel dunkel lagern.'
  }
};

// Liste aller verfügbaren Supplement-Keys
export const getSupplementKeys = () => Object.keys(supplementDatabase);

// Supplement nach Key abrufen (mit Normalisierung)
export const getSupplement = (key) => {
  const normalizedKey = key.toLowerCase().trim().replace(/-/g, ' ');
  return supplementDatabase[normalizedKey] || null;
};

// Anzeigename für einen Key
export const getDisplayName = (key) => {
  const supplement = supplementDatabase[key];
  return supplement ? supplement.name : key.charAt(0).toUpperCase() + key.slice(1);
};

export default supplementDatabase;
