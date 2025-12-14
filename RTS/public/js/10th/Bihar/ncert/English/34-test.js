const questions = [
  {
    "num": 1,
    "question_en": "Which bird is celebrated in the poem 'Koel'?",
    "options_en": ["Peacock", "Asian koel", "Sparrow", "Parrot"],
    "answer_en": "Asian koel",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the koel known for in literature?",
    "options_en": ["Its colorful feathers", "Its melancholic call", "Its nest-building", "Its migratory patterns"],
    "answer_en": "Its melancholic call",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "During which season does the koel's call become prominent?",
    "options_en": ["Winter", "Spring", "Autumn", "All seasons"],
    "answer_en": "Spring",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What emotion does the koel's call often evoke?",
    "options_en": ["Happiness", "Longing and separation", "Anger", "Indifference"],
    "answer_en": "Longing and separation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is unique about the koel's reproductive strategy?",
    "options_en": ["Builds elaborate nests", "Brood parasite", "Lays eggs in water", "No reproduction"],
    "answer_en": "Brood parasite",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which bird commonly raises koel chicks?",
    "options_en": ["Crows", "Eagles", "Owls", "Koels themselves"],
    "answer_en": "Crows",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the male koel's plumage color?",
    "options_en": ["Glossy black", "Brown and white", "Green and red", "Blue and yellow"],
    "answer_en": "Glossy black",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "How does the female koel differ in appearance?",
    "options_en": ["Brown with white spots", "Same as male", "All white", "Rainbow colored"],
    "answer_en": "Brown with white spots",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What does the koel symbolize in Indian culture?",
    "options_en": ["Arrival of spring", "Bad omen", "Wealth", "War"],
    "answer_en": "Arrival of spring",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the typical time for koel's morning call?",
    "options_en": ["Early morning", "Noon", "Evening", "Midnight"],
    "answer_en": "Early morning",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What family does the koel belong to?",
    "options_en": ["Cuculidae (cuckoos)", "Corvidae (crows)", "Passeridae (sparrows)", "Psittacidae (parrots)"],
    "answer_en": "Cuculidae (cuckoos)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the koel's call often described as?",
    "options_en": ["Ku-oo, ku-oo", "Chirp-chirp", "Caw-caw", "Tweet-tweet"],
    "answer_en": "Ku-oo, ku-oo",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What type of habitat does the koel prefer?",
    "options_en": ["Forests and gardens", "Deserts", "High mountains", "Urban areas only"],
    "answer_en": "Forests and gardens",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the koel's primary diet?",
    "options_en": ["Fruits and insects", "Small birds", "Fish", "Grains"],
    "answer_en": "Fruits and insects",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What literary device often describes the koel's call?",
    "options_en": ["Onomatopoeia", "Metaphor", "Hyperbole", "Irony"],
    "answer_en": "Onomatopoeia",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the koel's significance in poetry?",
    "options_en": ["Symbol of pining lovers", "Symbol of bravery", "Symbol of wisdom", "Symbol of cruelty"],
    "answer_en": "Symbol of pining lovers",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which tree is commonly associated with koel's perch?",
    "options_en": ["Mango tree", "Oak tree", "Pine tree", "Cactus"],
    "answer_en": "Mango tree",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the female koel's call like?",
    "options_en": ["Shrill 'kik-kik-kik'", "Melodious song", "Same as male", "Silent"],
    "answer_en": "Shrill 'kik-kik-kik'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the breeding season for koel?",
    "options_en": ["Spring to monsoon", "Winter", "All year", "Autumn only"],
    "answer_en": "Spring to monsoon",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "How does the koel benefit farmers?",
    "options_en": ["Eats crop pests", "Pollinates flowers", "Scares other birds", "No benefit"],
    "answer_en": "Eats crop pests",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the Hindi word for this bird?",
    "options_en": ["Koel", "Bulbul", "Kabutar", "Mor"],
    "answer_en": "Koel",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the scientific name?",
    "options_en": ["Eudynamys scolopaceus", "Corvus splendens", "Passer domesticus", "Pavo cristatus"],
    "answer_en": "Eudynamys scolopaceus",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is unique about koel eggs?",
    "options_en": ["Match host's eggs", "Bright blue", "Very large", "Square shaped"],
    "answer_en": "Match host's eggs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What happens to host birds' eggs?",
    "options_en": ["Sometimes removed by koel chick", "Always kept", "Hatched together", "Destroyed immediately"],
    "answer_en": "Sometimes removed by koel chick",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the koel's eye color?",
    "options_en": ["Red", "Brown", "Blue", "Green"],
    "answer_en": "Red",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the body length approximately?",
    "options_en": ["40-46 cm", "20 cm", "60 cm", "15 cm"],
    "answer_en": "40-46 cm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the wingspan range?",
    "options_en": ["40-46 cm", "20 cm", "100 cm", "150 cm"],
    "answer_en": "40-46 cm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the average weight?",
    "options_en": ["190-327 grams", "50 grams", "500 grams", "1 kg"],
    "answer_en": "190-327 grams",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the incubation period?",
    "options_en": ["12-14 days", "30 days", "5 days", "60 days"],
    "answer_en": "12-14 days",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the fledging period?",
    "options_en": ["20-28 days", "5 days", "40 days", "60 days"],
    "answer_en": "20-28 days",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the conservation status?",
    "options_en": ["Least Concern", "Endangered", "Vulnerable", "Critically Endangered"],
    "answer_en": "Least Concern",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the geographical range?",
    "options_en": ["Indian subcontinent to Australia", "Europe only", "Africa only", "Americas only"],
    "answer_en": "Indian subcontinent to Australia",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the Bengali name?",
    "options_en": ["Kokil", "Pakhi", "Chiri", "Pakhir"],
    "answer_en": "Kokil",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What time indicates spring's arrival?",
    "options_en": ["First koel call", "First rainfall", "Flower blooming", "Temperature rise"],
    "answer_en": "First koel call",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the beak color?",
    "options_en": ["Pale greenish", "Black", "Red", "Yellow"],
    "answer_en": "Pale greenish",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What are leg/foot colors?",
    "options_en": ["Grey", "Red", "Yellow", "Black"],
    "answer_en": "Grey",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the clutch size?",
    "options_en": ["2-3 eggs", "1 egg", "5-6 eggs", "10 eggs"],
    "answer_en": "2-3 eggs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What are egg dimensions?",
    "options_en": ["34 x 24 mm", "50 x 35 mm", "20 x 15 mm", "10 x 10 mm"],
    "answer_en": "34 x 24 mm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is egg coloration?",
    "options_en": ["Greenish blue", "Pure white", "Brown spotted", "Pink"],
    "answer_en": "Greenish blue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is juvenile plumage like?",
    "options_en": ["Barred appearance", "Same as adult", "All white", "Bright colors"],
    "answer_en": "Barred appearance",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the average lifespan?",
    "options_en": ["4-6 years", "1 year", "20 years", "50 years"],
    "answer_en": "4-6 years",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What are main predators?",
    "options_en": ["Birds of prey", "Snakes", "Humans", "All of these"],
    "answer_en": "Birds of prey",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the primary threat?",
    "options_en": ["Habitat destruction", "Hunting", "Pollution", "Climate change"],
    "answer_en": "Habitat destruction",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is legal protection?",
    "options_en": ["Protected in India", "No protection", "Game bird", "Endangered species act"],
    "answer_en": "Protected in India",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is daily activity?",
    "options_en": ["Diurnal", "Nocturnal", "Crepuscular", "All times"],
    "answer_en": "Diurnal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is foraging style?",
    "options_en": ["Gleans from trees", "Ground forager", "Aerial catcher", "Water diver"],
    "answer_en": "Gleans from trees",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is roosting behavior?",
    "options_en": ["Solitary", "In flocks", "With crows", "With sparrows"],
    "answer_en": "Solitary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is migration pattern?",
    "options_en": ["Summer visitor", "Resident", "Winter visitor", "Nomadic"],
    "answer_en": "Summer visitor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is altitude range?",
    "options_en": ["Up to 1800m", "Only plains", "High mountains", "Sea level only"],
    "answer_en": "Up to 1800m",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What climate preferred?",
    "options_en": ["Tropical/subtropical", "Temperate", "Arctic", "Desert"],
    "answer_en": "Tropical/subtropical",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is population trend?",
    "options_en": ["Stable", "Decreasing", "Increasing", "Unknown"],
    "answer_en": "Stable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is breeding frequency?",
    "options_en": ["Once yearly", "Multiple broods", "Continuous", "Irregular"],
    "answer_en": "Once yearly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is mate system?",
    "options_en": ["Seasonal pairs", "Lifelong mates", "Polygamous", "Promiscuous"],
    "answer_en": "Seasonal pairs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is courtship method?",
    "options_en": ["Vocal calling", "Aerial displays", "Ground dancing", "Gift giving"],
    "answer_en": "Vocal calling",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is territory size?",
    "options_en": ["Large", "Small", "None", "Variable"],
    "answer_en": "Large",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is molting period?",
    "options_en": ["After breeding", "Before breeding", "Winter", "Continuous"],
    "answer_en": "After breeding",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is water requirement?",
    "options_en": ["Regular drinker", "Gets from food", "No need", "Rainwater only"],
    "answer_en": "Regular drinker",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is social structure?",
    "options_en": ["Mostly solitary", "Flocks", "Pairs", "Colonies"],
    "answer_en": "Mostly solitary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is communication?",
    "options_en": ["Primarily vocal", "Visual signals", "Both", "Neither"],
    "answer_en": "Primarily vocal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is nesting success rate?",
    "options_en": ["Moderate", "High", "Low", "Unknown"],
    "answer_en": "Moderate",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is host detection ability?",
    "options_en": ["Sometimes detects", "Always detects", "Never detects", "Ignores"],
    "answer_en": "Sometimes detects",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is chick survival strategy?",
    "options_en": ["Ejects host eggs", "Coexists", "Kills host chicks", "No strategy"],
    "answer_en": "Ejects host eggs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is growth rate compared to host?",
    "options_en": ["Faster", "Slower", "Same", "Variable"],
    "answer_en": "Faster",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is fledgling care?",
    "options_en": ["By host parents", "Self-sufficient", "Koel parents", "No care"],
    "answer_en": "By host parents",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is independence age?",
    "options_en": ["3-4 weeks post-fledge", "Immediate", "6 months", "1 year"],
    "answer_en": "3-4 weeks post-fledge",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is sexual maturity?",
    "options_en": ["1 year", "2-3 years", "6 months", "5 years"],
    "answer_en": "1 year",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is competition with?",
    "options_en": ["Other cuckoos", "All birds", "Mammals", "No competition"],
    "answer_en": "Other cuckoos",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is human relationship?",
    "options_en": ["Generally tolerated", "Hunted", "Feared", "Worshipped"],
    "answer_en": "Generally tolerated",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is research importance?",
    "options_en": ["Brood parasitism studies", "Migration patterns", "Vocalization research", "All of these"],
    "answer_en": "All of these",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is cultural representation?",
    "options_en": ["Love and longing", "War and peace", "Wealth", "Death"],
    "answer_en": "Love and longing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is literary appearance?",
    "options_en": ["Ancient to modern poetry", "Only scientific", "Only folk tales", "No appearance"],
    "answer_en": "Ancient to modern poetry",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is mythological role?",
    "options_en": ["Spring herald", "Death messenger", "Rain bringer", "Harvest indicator"],
    "answer_en": "Spring herald",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is folk belief?",
    "options_en": ["First call brings spring", "Causes sickness", "Brings luck", "Predicts weather"],
    "answer_en": "First call brings spring",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is artistic representation?",
    "options_en": ["Miniature paintings", "Modern art", "Sculpture", "All of these"],
    "answer_en": "All of these",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is musical reference?",
    "options_en": ["Classical compositions", "Folk songs", "Both", "Neither"],
    "answer_en": "Both",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is poetic meter named after it?",
    "options_en": ["Kokil meter", "Koel verse", "Cuckoo rhythm", "No specific meter"],
    "answer_en": "Kokil meter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What festival association?",
    "options_en": ["Spring festivals", "Harvest festivals", "Winter festivals", "No association"],
    "answer_en": "Spring festivals",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What regional name variations?",
    "options_en": ["Koyal, Kokila, Koel", "Same everywhere", "No variations", "Only one name"],
    "answer_en": "Koyal, Kokila, Koel",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What migration type?",
    "options_en": ["Altitudinal", "Long-distance", "Resident", "Nomadic"],
    "answer_en": "Altitudinal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is tail characteristic?",
    "options_en": ["Long and graduated", "Short", "Forked", "No tail"],
    "answer_en": "Long and graduated",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is flight pattern?",
    "options_en": ["Direct and strong", "Erratic", "Hovering", "Gliding"],
    "answer_en": "Direct and strong",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What favorite fruits?",
    "options_en": ["Berries and figs", "Apples", "Citrus", "None"],
    "answer_en": "Berries and figs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What insects eaten?",
    "options_en": ["Caterpillars, beetles", "Mosquitoes only", "No insects", "All insects"],
    "answer_en": "Caterpillars, beetles",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What ecosystem role?",
    "options_en": ["Pest control", "Pollination", "Seed dispersal", "All of these"],
    "answer_en": "Pest control",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What time most vocal?",
    "options_en": ["Dawn and dusk", "Midday", "Night", "All day"],
    "answer_en": "Dawn and dusk",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What call volume?",
    "options_en": ["Loud and far-carrying", "Soft", "Medium", "Variable"],
    "answer_en": "Loud and far-carrying",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What cultural significance?",
    "options_en": ["Poetry and music", "Hunting", "Agriculture", "Religion"],
    "answer_en": "Poetry and music",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What literary theme?",
    "options_en": ["Separation in love", "Nature's beauty", "War", "Philosophy"],
    "answer_en": "Separation in love",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What seasonal indicator?",
    "options_en": ["Spring arrival", "Monsoon start", "Winter end", "All seasons"],
    "answer_en": "Spring arrival",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What emotional trigger?",
    "options_en": ["Nostalgia and longing", "Happiness", "Anger", "Fear"],
    "answer_en": "Nostalgia and longing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What poetic comparison?",
    "options_en": ["Lover's voice", "Musical instrument", "Crying child", "All of these"],
    "answer_en": "All of these",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is the poem's tone about koel?",
    "options_en": ["Melancholic", "Joyful", "Angry", "Humorous"],
    "answer_en": "Melancholic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What natural behavior highlighted?",
    "options_en": ["Brood parasitism", "Migration", "Nesting", "Feeding"],
    "answer_en": "Brood parasitism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What physical trait emphasized?",
    "options_en": ["Black plumage", "Red eyes", "Long tail", "All of these"],
    "answer_en": "Black plumage",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What auditory feature focused?",
    "options_en": ["Repetitive call", "Volume", "Time of calling", "All of these"],
    "answer_en": "Repetitive call",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What symbolic meaning?",
    "options_en": ["Unrequited love", "Freedom", "Wisdom", "Death"],
    "answer_en": "Unrequited love",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What literary tradition?",
    "options_en": ["Indian poetic tradition", "Western tradition", "Chinese tradition", "African tradition"],
    "answer_en": "Indian poetic tradition",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What time reference?",
    "options_en": ["Seasonal change", "Daily cycle", "Both", "Neither"],
    "answer_en": "Both",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What emotional response sought?",
    "options_en": ["Empathy with separation", "Joy of spring", "Awe of nature", "All of these"],
    "answer_en": "Empathy with separation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the poem's main subject?",
    "options_en": ["Koel's call and symbolism", "Koel's physical description", "Koel's habitat", "Koel's feeding habits"],
    "answer_en": "Koel's call and symbolism",
    "attempted": false,
    "selected": ""
  }
];
// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");

        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
            return;
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // Calculate time spent
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // Save to localStorage
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }
        } else {
            notAttempted++;
        }

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    // Save result data
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // Stop camera stream if active
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }

    // Redirect
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.background = color;
        circle.textContent = i + 1;
        circle.onclick = () => jumpToQuestion(i);
        nav.appendChild(circle);
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA ----------------------
let videoStream;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};