const questions = [
  {
    "num": 1,
    "question_en": "Which poet wrote 'God Made The Country'?",
    "options_en": ["William Blake", "William Cowper", "William Wordsworth", "William Shakespeare"],
    "answer_en": "William Cowper",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "According to the poem, who created the countryside?",
    "options_en": ["Human architects", "God", "Farmers", "Kings"],
    "answer_en": "God",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Who created towns according to Cowper?",
    "options_en": ["God", "Human beings", "Nature", "Angels"],
    "answer_en": "Human beings",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What does the countryside provide that towns lack?",
    "options_en": ["Noise pollution", "Health and peace", "Crowded markets", "Tall buildings"],
    "answer_en": "Health and peace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What fills the air in the rural setting?",
    "options_en": ["Factory smoke", "Perfume of flowers", "Car exhaust", "Dust"],
    "answer_en": "Perfume of flowers",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What sounds dominate the country scene?",
    "options_en": ["Traffic horns", "Birds singing", "Machinery noise", "Crowd chatter"],
    "answer_en": "Birds singing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What aspect of town life is criticized?",
    "options_en": ["Its naturalness", "Its artificiality", "Its quietness", "Its simplicity"],
    "answer_en": "Its artificiality",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which feature represents divine creation?",
    "options_en": ["Skyscrapers", "Green fields", "Concrete roads", "Brick houses"],
    "answer_en": "Green fields",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the prevailing mood in the countryside?",
    "options_en": ["Chaotic", "Tranquil", "Gloomy", "Angry"],
    "answer_en": "Tranquil",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "How does man's creation compare to God's?",
    "options_en": ["Superior", "Equal", "Inferior", "Identical"],
    "answer_en": "Inferior",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What industrial element is absent from the ideal country scene?",
    "options_en": ["Fresh streams", "Tall chimneys", "Woodland paths", "Clear skies"],
    "answer_en": "Tall chimneys",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What comfort does the country offer the soul?",
    "options_en": ["Corruption", "Solace", "Temptation", "Stress"],
    "answer_en": "Solace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the primary contrast in the poem?",
    "options_en": ["Rich vs Poor", "Country vs City", "Past vs Future", "Science vs Art"],
    "answer_en": "Country vs City",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What flows naturally through rural landscapes?",
    "options_en": ["Highways", "People", "Brooks", "Trains"],
    "answer_en": "Brooks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does Cowper value more?",
    "options_en": ["Urban sophistication", "Rustic simplicity", "Industrial progress", "Technological advance"],
    "answer_en": "Rustic simplicity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Where does genuine beauty reside?",
    "options_en": ["In architecture", "In nature", "In machinery", "In commerce"],
    "answer_en": "In nature",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "How is the urban atmosphere described?",
    "options_en": ["Pure and fresh", "Smoky and noisy", "Silent and empty", "Fragrant and calm"],
    "answer_en": "Smoky and noisy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What grows without human intervention?",
    "options_en": ["Concrete structures", "Flowers and trees", "Steel bridges", "Road networks"],
    "answer_en": "Flowers and trees",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What adjective describes divine creation?",
    "options_en": ["Artificial", "Pure", "Polluted", "Complex"],
    "answer_en": "Pure",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is abundant in rural areas?",
    "options_en": ["Crowds", "Silence and space", "Shops", "Theaters"],
    "answer_en": "Silence and space",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What moral quality does the countryside nurture?",
    "options_en": ["Greed", "Virtue", "Deceit", "Ambition"],
    "answer_en": "Virtue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What fills urban centers according to the poet?",
    "options_en": ["Harmony", "Strife", "Peace", "Serenity"],
    "answer_en": "Strife",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Where does true happiness reside?",
    "options_en": ["In crowded streets", "In quiet lanes", "In markets", "In factories"],
    "answer_en": "In quiet lanes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What symbolizes human interference?",
    "options_en": ["The countryside", "The town", "The forest", "The river"],
    "answer_en": "The town",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What illuminates country nights?",
    "options_en": ["Street lamps", "Bright stars", "Neon signs", "Car lights"],
    "answer_en": "Bright stars",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What negative trait is absent in the country?",
    "options_en": ["Innocence", "Deceit", "Beauty", "Health"],
    "answer_en": "Deceit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What specific aspect of urban life is condemned?",
    "options_en": ["Its naturalness", "Its artificiality", "Its quietness", "Its simplicity"],
    "answer_en": "Its artificiality",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What bird's morning song is mentioned?",
    "options_en": ["Crow's caw", "Lark's song", "Horn blasts", "Sirens"],
    "answer_en": "Lark's song",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What does the town represent?",
    "options_en": ["Divine plan", "Human ambition", "Natural order", "Eternal truth"],
    "answer_en": "Human ambition",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What emotion does rural life evoke?",
    "options_en": ["Anxiety", "Contentment", "Envy", "Restlessness"],
    "answer_en": "Contentment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the central message?",
    "options_en": ["Praise industry", "Rural superiority", "Progress is vital", "Cities are beautiful"],
    "answer_en": "Rural superiority",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "How are God's works characterized?",
    "options_en": ["Imperfect", "Flawed", "Perfect", "Temporary"],
    "answer_en": "Perfect",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is sweeter in rural areas?",
    "options_en": ["The air", "The noise", "The wealth", "The fame"],
    "answer_en": "The air",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What virtue does nature teach?",
    "options_en": ["Deception", "Humility", "Pride", "Competition"],
    "answer_en": "Humility",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the town's essence?",
    "options_en": ["Natural", "Unreal", "Sacred", "Wild"],
    "answer_en": "Unreal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Where is God's presence felt?",
    "options_en": ["In banks", "In fields", "In offices", "In shops"],
    "answer_en": "In fields",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What characterizes rural nights?",
    "options_en": ["Bright lights", "Peaceful darkness", "Nightclubs", "Noise"],
    "answer_en": "Peaceful darkness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What ironic gift do cities give?",
    "options_en": ["True happiness", "Wealth without joy", "Eternal peace", "Spiritual growth"],
    "answer_en": "Wealth without joy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What runs through rural landscapes?",
    "options_en": ["Railways", "Natural streams", "Sewers", "Highways"],
    "answer_en": "Natural streams",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is missing in urban life?",
    "options_en": ["Genuine emotion", "Fashion", "Business", "Politics"],
    "answer_en": "Genuine emotion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "When is the countryside beautiful?",
    "options_en": ["Only in spring", "All seasons", "Never", "Only in autumn"],
    "answer_en": "All seasons",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What materials form towns?",
    "options_en": ["Stone and brick", "Grass and soil", "Trees and flowers", "Water and air"],
    "answer_en": "Stone and brick",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What does rural life encourage?",
    "options_en": ["Honest thinking", "Cunning plans", "Urban trends", "Political schemes"],
    "answer_en": "Honest thinking",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What contaminates urban air?",
    "options_en": ["Oxygen", "Foul smells", "Flower scents", "Sea breeze"],
    "answer_en": "Foul smells",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What appears on the rural horizon?",
    "options_en": ["Factory smoke", "Open sky", "Billboards", "Skyscrapers"],
    "answer_en": "Open sky",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "How are country folk described?",
    "options_en": ["Cunning", "Simple and true", "Greedy", "Lazy"],
    "answer_en": "Simple and true",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What do towns obscure?",
    "options_en": ["Sun and stars", "Money", "Fame", "Power"],
    "answer_en": "Sun and stars",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is plentiful in rural areas?",
    "options_en": ["Crowds", "Silence", "Noise", "Machines"],
    "answer_en": "Silence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What feeling do cities create?",
    "options_en": ["Calm", "Weariness", "Joy", "Spiritual uplift"],
    "answer_en": "Weariness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is inherently natural in the country?",
    "options_en": ["Everything", "Nothing", "Only animals", "Only plants"],
    "answer_en": "Everything",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What does the poet escape from?",
    "options_en": ["Nature", "Urban turmoil", "Rural solitude", "Simple life"],
    "answer_en": "Urban turmoil",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What shines brightest at night in the country?",
    "options_en": ["Streetlights", "The moon", "Neon signs", "Car headlights"],
    "answer_en": "The moon",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What dictates urban rhythms?",
    "options_en": ["Natural cycles", "Mechanical pace", "Seasons", "Tides"],
    "answer_en": "Mechanical pace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "How does the rural heart feel?",
    "options_en": ["Lightened", "Heavy", "Envious", "Ambitious"],
    "answer_en": "Lightened",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is built in cities?",
    "options_en": ["Character", "Wealth", "Both", "Neither"],
    "answer_en": "Wealth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What feels liberated in the country?",
    "options_en": ["The spirit", "Entertainment", "Luxuries", "Fashion"],
    "answer_en": "The spirit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What do towns imprison?",
    "options_en": ["The soul", "Animals", "Rivers", "Sunlight"],
    "answer_en": "The soul",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What delights the eye in the country?",
    "options_en": ["Varied scenery", "Uniform buildings", "Straight streets", "Identical houses"],
    "answer_en": "Varied scenery",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is the town's main product?",
    "options_en": ["Happiness", "Anxiety", "Health", "Wisdom"],
    "answer_en": "Anxiety",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Where can the mind wander freely?",
    "options_en": ["In narrow alleys", "In open fields", "In crowded rooms", "In offices"],
    "answer_en": "In open fields",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What essential connection do towns lack?",
    "options_en": ["To money", "To nature", "To people", "To buildings"],
    "answer_en": "To nature",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What provides natural music?",
    "options_en": ["Birds and breezes", "Orchestras", "Traffic", "Machinery"],
    "answer_en": "Birds and breezes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What kind of glory do towns have?",
    "options_en": ["Superficial", "Deep", "Natural", "Eternal"],
    "answer_en": "Superficial",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What has healing power in the country?",
    "options_en": ["The quiet", "The noise", "The crowd", "The competition"],
    "answer_en": "The quiet",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What do towns worship?",
    "options_en": ["Gold", "Trees", "Streams", "Mountains"],
    "answer_en": "Gold",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is abundant in rural life?",
    "options_en": ["Time for thought", "Rush", "Distraction", "Stimulation"],
    "answer_en": "Time for thought",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What binds urban dwellers?",
    "options_en": ["Custom and fashion", "Fresh air", "Open spaces", "Natural beauty"],
    "answer_en": "Custom and fashion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What scents characterize the country?",
    "options_en": ["Earth and rain", "Exhaust fumes", "Perfume", "Garbage"],
    "answer_en": "Earth and rain",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is the urban dream?",
    "options_en": ["Material success", "Spiritual peace", "Natural harmony", "Simple living"],
    "answer_en": "Material success",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Where is truth easiest to find?",
    "options_en": ["In nature", "In libraries", "In newspapers", "In gossip"],
    "answer_en": "In nature",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What do towns magnify?",
    "options_en": ["Human flaws", "Human virtues", "Natural sounds", "Seasonal changes"],
    "answer_en": "Human flaws",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What constitutes rural wealth?",
    "options_en": ["Scenery and peace", "Gold mines", "Stock markets", "Shopping centers"],
    "answer_en": "Scenery and peace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What do towns eliminate?",
    "options_en": ["Darkness", "Solitude", "Noise", "Pollution"],
    "answer_en": "Solitude",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What whispers in country groves?",
    "options_en": ["Leaves", "Advertisements", "Radios", "Conversations"],
    "answer_en": "Leaves",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What color dominates towns?",
    "options_en": ["Grey", "Green", "Blue", "Yellow"],
    "answer_en": "Grey",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What does the country preserve?",
    "options_en": ["Innocence", "Sophistication", "Cunning", "Complexity"],
    "answer_en": "Innocence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What do cities manufacture?",
    "options_en": ["Desires", "Contentment", "Peace", "Health"],
    "answer_en": "Desires",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Where can thoughts be heard clearly?",
    "options_en": ["In the country", "In stock exchange", "In a parade", "In a concert"],
    "answer_en": "In the country",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is the town's main prayer?",
    "options_en": ["For more profit", "For rain", "For harvest", "For quiet"],
    "answer_en": "For more profit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What flows naturally in the country?",
    "options_en": ["Time", "Traffic", "Rumors", "Fashion"],
    "answer_en": "Time",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What do towns fear?",
    "options_en": ["Stillness", "Activity", "Growth", "Profit"],
    "answer_en": "Stillness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What covers rural ground?",
    "options_en": ["Grass", "Concrete", "Asphalt", "Carpet"],
    "answer_en": "Grass",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What do towns sell?",
    "options_en": ["False happiness", "Genuine joy", "Real peace", "True friendship"],
    "answer_en": "False happiness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What reflects the sky in the country?",
    "options_en": ["Ponds", "Windows", "Metal roofs", "TV screens"],
    "answer_en": "Ponds",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What drives the town?",
    "options_en": ["Greed", "Contentment", "Generosity", "Simplicity"],
    "answer_en": "Greed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What does the country accept gracefully?",
    "options_en": ["Seasonal changes", "Only summer", "Constant growth", "Perfection"],
    "answer_en": "Seasonal changes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What do towns reject?",
    "options_en": ["Imperfection", "Money", "Technology", "Progress"],
    "answer_en": "Imperfection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What serves as the country's church?",
    "options_en": ["The outdoors", "A stone building", "A mall", "A skyscraper"],
    "answer_en": "The outdoors",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is the town's deity?",
    "options_en": ["Usefulness", "Beauty", "Nature", "Silence"],
    "answer_en": "Usefulness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What does the country demand?",
    "options_en": ["Nothing", "Everything", "Sacrifice", "Worship"],
    "answer_en": "Nothing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What does the town require?",
    "options_en": ["Constant sacrifice", "Your relaxation", "Your peace", "Your nature connection"],
    "answer_en": "Constant sacrifice",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is the country's artwork?",
    "options_en": ["Natural landscape", "Graffiti", "Sculptures", "Architecture"],
    "answer_en": "Natural landscape",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is the town's greatest achievement?",
    "options_en": ["Sewer system", "Natural harmony", "Changing seasons", "Sunset views"],
    "answer_en": "Sewer system",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What does the country give freely?",
    "options_en": ["Beauty and peace", "Money and fame", "Stress and worry", "Competition"],
    "answer_en": "Beauty and peace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What do towns exchange?",
    "options_en": ["Peace for noise", "Health for wealth", "Time for money", "All of these"],
    "answer_en": "All of these",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Where is the poet's allegiance?",
    "options_en": ["With the country", "With the town", "With the future", "With the past"],
    "answer_en": "With the country",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is the town's constant companion?",
    "options_en": ["Pollution", "Light", "Growth", "Prosperity"],
    "answer_en": "Pollution",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What does the countryside symbolize?",
    "options_en": ["Purity and origin", "Progress and future", "Chaos", "Wealth and power"],
    "answer_en": "Purity and origin",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is the town's ultimate fate?",
    "options_en": ["To decay", "To last forever", "To become natural", "To merge with country"],
    "answer_en": "To decay",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What environmental lesson does the poem teach?",
    "options_en": ["Value and preserve nature", "Build more cities", "Ignore nature", "Prefer man-made things"],
    "answer_en": "Value and preserve nature",
    "attempted": false,
    "selected": ""
  }
];

// All the JavaScript functions remain exactly the same as previous
// Just replace the questions array with this new one
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