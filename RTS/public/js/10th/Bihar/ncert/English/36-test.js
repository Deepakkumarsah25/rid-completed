const questions = [
  {
    "num": 1,
    "question_en": "Which Nepali poet wrote 'The Sleeping Porter'?",
    "options_en": ["Laxmi Prasad Devkota", "Bhanubhakta Acharya", "Lekhnath Paudyal", "Mohan Koirala"],
    "answer_en": "Laxmi Prasad Devkota",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the central character's occupation?",
    "options_en": ["Porter", "Merchant", "Farmer", "Soldier"],
    "answer_en": "Porter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the porter doing when observed?",
    "options_en": ["Sleeping exhausted", "Working hard", "Eating food", "Walking"],
    "answer_en": "Sleeping exhausted",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Where does the porter sleep?",
    "options_en": ["On roadside ground", "In comfortable bed", "Under tree", "In shelter"],
    "answer_en": "On roadside ground",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What time is depicted in the poem?",
    "options_en": ["Afternoon rest", "Morning work", "Evening meal", "Night sleep"],
    "answer_en": "Afternoon rest",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is beside the sleeping porter?",
    "options_en": ["His heavy load", "Food basket", "Money bag", "Nothing"],
    "answer_en": "His heavy load",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What does the load symbolize?",
    "options_en": ["Burden of poverty", "Wealth", "Knowledge", "Freedom"],
    "answer_en": "Burden of poverty",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What season is implied?",
    "options_en": ["Hot summer", "Cold winter", "Rainy monsoon", "Spring"],
    "answer_en": "Hot summer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the porter's economic status?",
    "options_en": ["Extremely poor", "Middle class", "Wealthy", "Aristocratic"],
    "answer_en": "Extremely poor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What does sleep provide temporarily?",
    "options_en": ["Escape from suffering", "Wealth", "Food", "Power"],
    "answer_en": "Escape from suffering",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the poem's primary theme?",
    "options_en": ["Social injustice", "Nature's beauty", "Love", "Religious faith"],
    "answer_en": "Social injustice",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "How does society treat the porter?",
    "options_en": ["Ignores his humanity", "Respects him", "Fears him", "Admires him"],
    "answer_en": "Ignores his humanity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What literary style is used?",
    "options_en": ["Realistic description", "Fantasy", "Mythology", "Romanticism"],
    "answer_en": "Realistic description",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What physical signs show his labor?",
    "options_en": ["Calloused hands", "Fine clothes", "Clean appearance", "No signs"],
    "answer_en": "Calloused hands",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does the road represent?",
    "options_en": ["Life's struggle", "Easy path", "Journey home", "Adventure"],
    "answer_en": "Life's struggle",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the porter's sleep depth?",
    "options_en": ["Deep exhaustion", "Light nap", "Restless", "Insomniac"],
    "answer_en": "Deep exhaustion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What will happen after sleep?",
    "options_en": ["Return to labor", "Find riches", "Go home", "Die"],
    "answer_en": "Return to labor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What social class is critiqued?",
    "options_en": ["Exploiting class", "Working class", "All classes", "No class"],
    "answer_en": "Exploiting class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the porter's clothing like?",
    "options_en": ["Tattered and worn", "Fine silk", "Uniform", "Modern fashion"],
    "answer_en": "Tattered and worn",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What natural element is present?",
    "options_en": ["Hot sun", "Cool breeze", "Rain", "Snow"],
    "answer_en": "Hot sun",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What emotion does the poem evoke?",
    "options_en": ["Sympathy", "Joy", "Anger", "Indifference"],
    "answer_en": "Sympathy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the porter's dream about?",
    "options_en": ["Better life", "Work", "Food", "Not specified"],
    "answer_en": "Better life",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What does sleep temporarily equalize?",
    "options_en": ["Social differences", "Physical strength", "Wealth", "Intelligence"],
    "answer_en": "Social differences",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the poet's message?",
    "options_en": ["Recognize human dignity", "Work harder", "Sleep more", "Get rich"],
    "answer_en": "Recognize human dignity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the porter's facial expression?",
    "options_en": ["Peaceful in sleep", "Painful", "Angry", "Smiling"],
    "answer_en": "Peaceful in sleep",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does the load contain?",
    "options_en": ["Others' goods", "His belongings", "Food", "Tools"],
    "answer_en": "Others' goods",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the setting type?",
    "options_en": ["Urban roadside", "Rural field", "Mountain path", "Forest"],
    "answer_en": "Urban roadside",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What social system is exposed?",
    "options_en": ["Economic exploitation", "Education system", "Religious system", "Political system"],
    "answer_en": "Economic exploitation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the sleep's duration?",
    "options_en": ["Brief respite", "Long rest", "Eternal sleep", "Short nap"],
    "answer_en": "Brief respite",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does the poem's title emphasize?",
    "options_en": ["Humanity in rest", "Laziness", "Wealth", "Nature"],
    "answer_en": "Humanity in rest",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the porter's age?",
    "options_en": ["Not specified", "Young", "Old", "Middle-aged"],
    "answer_en": "Not specified",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What sounds surround him?",
    "options_en": ["Market noises", "Silence", "Birds", "Traffic"],
    "answer_en": "Market noises",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is his sleeping posture?",
    "options_en": ["Curled fetal position", "Stretched out", "Sitting", "On side"],
    "answer_en": "Curled fetal position",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What social contrast shown?",
    "options_en": ["Laborer vs privileged", "Urban vs rural", "Young vs old", "All contrasts"],
    "answer_en": "Laborer vs privileged",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What does sleep temporarily remove?",
    "options_en": ["Class consciousness", "Hunger", "Thirst", "Pain"],
    "answer_en": "Class consciousness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is his breathing like?",
    "options_en": ["Deep and regular", "Labored", "Shallow", "Irregular"],
    "answer_en": "Deep and regular",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What does society gain from him?",
    "options_en": ["Cheap labor", "Nothing", "Entertainment", "Inspiration"],
    "answer_en": "Cheap labor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the poem's tone?",
    "options_en": ["Sympathetic", "Angry", "Joyful", "Indifferent"],
    "answer_en": "Sympathetic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What literary device dominates?",
    "options_en": ["Vivid imagery", "Rhyme", "Metaphor", "Alliteration"],
    "answer_en": "Vivid imagery",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What does the sun symbolize?",
    "options_en": ["Harsh reality", "Hope", "Life", "Death"],
    "answer_en": "Harsh reality",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is his relationship with time?",
    "options_en": ["Slave to work hours", "Master of time", "No relationship", "Flexible"],
    "answer_en": "Slave to work hours",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does sleep temporarily grant?",
    "options_en": ["Dignity of rest", "Wealth", "Power", "Fame"],
    "answer_en": "Dignity of rest",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the load's metaphorical weight?",
    "options_en": ["Social injustice", "Physical weight", "Emotional burden", "All"],
    "answer_en": "Social injustice",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does the poem advocate?",
    "options_en": ["Social awareness", "Individual success", "Acceptance", "Escape"],
    "answer_en": "Social awareness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is his sleep quality?",
    "options_en": ["Restorative but short", "Poor quality", "Luxurious", "Interrupted"],
    "answer_en": "Restorative but short",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What does society owe him?",
    "options_en": ["Respect and fairness", "Nothing", "More work", "Less pay"],
    "answer_en": "Respect and fairness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What physical marks indicate work?",
    "options_en": ["Weathered skin", "Clean skin", "Soft hands", "No marks"],
    "answer_en": "Weathered skin",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is sleep's temporary gift?",
    "options_en": ["Forgetfulness of pain", "Wealth", "Knowledge", "Power"],
    "answer_en": "Forgetfulness of pain",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What social blindness depicted?",
    "options_en": ["To workers' humanity", "To beauty", "To danger", "To wealth"],
    "answer_en": "To workers' humanity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does sleep equalize temporarily?",
    "options_en": ["All humans", "Rich only", "Poor only", "No one"],
    "answer_en": "All humans",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is his waking reality?",
    "options_en": ["Continued labor", "Changed life", "Rest continues", "Death"],
    "answer_en": "Continued labor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What does the load's presence signify?",
    "options_en": ["Work awaits", "Wealth stored", "Burden shared", "No significance"],
    "answer_en": "Work awaits",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What social commentary presented?",
    "options_en": ["On labor exploitation", "On nature", "On religion", "On education"],
    "answer_en": "On labor exploitation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is sleep's temporary justice?",
    "options_en": ["Equal rest", "Wealth distribution", "Power sharing", "No justice"],
    "answer_en": "Equal rest",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What does his stillness indicate?",
    "options_en": ["Complete exhaustion", "Laziness", "Meditation", "Death"],
    "answer_en": "Complete exhaustion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What social hierarchy shown?",
    "options_en": ["Worker at bottom", "Equal society", "No hierarchy", "Worker on top"],
    "answer_en": "Worker at bottom",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What temporarily abolished in sleep?",
    "options_en": ["Social distinctions", "Physical needs", "Mental stress", "All"],
    "answer_en": "Social distinctions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is his sleep's innocence?",
    "options_en": ["Childlike peace", "Guilty rest", "Sinful", "No innocence"],
    "answer_en": "Childlike peace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What social contract violated?",
    "options_en": ["Fair treatment", "No contract", "All contracts", "Specific"],
    "answer_en": "Fair treatment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is sleep's universal aspect?",
    "options_en": ["Basic human need", "Luxury", "Wealth", "Power"],
    "answer_en": "Basic human need",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What does his sleep reveal?",
    "options_en": ["Common humanity", "Unique identity", "Wealth", "Power"],
    "answer_en": "Common humanity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What social veil removed in sleep?",
    "options_en": ["Class divisions", "All veils", "No veil", "Personal veil"],
    "answer_en": "Class divisions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is sleep's temporary realm?",
    "options_en": ["Dream world", "Real world", "No realm", "Earthly"],
    "answer_en": "Dream world",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What testimony does his body give?",
    "options_en": ["Of hard labor", "Of leisure", "Of wealth", "Of education"],
    "answer_en": "Of hard labor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What social mirror presented?",
    "options_en": ["Of inequality", "Of beauty", "Of progress", "Of nature"],
    "answer_en": "Of inequality",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What temporary revolution occurs?",
    "options_en": ["Against social order", "No revolution", "Political", "All"],
    "answer_en": "Against social order",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is sleep's democracy?",
    "options_en": ["Equal need", "Equal wealth", "Equal power", "Equal education"],
    "answer_en": "Equal need",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What social sleep criticized?",
    "options_en": ["Society's indifference", "Individual sleep", "All sleep", "No sleep"],
    "answer_en": "Society's indifference",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is sleep's natural justice?",
    "options_en": ["Equal gift to all", "Unequal distribution", "No justice", "Man-made"],
    "answer_en": "Equal gift to all",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What language does his body speak?",
    "options_en": ["Of exhaustion", "Of leisure", "Of wealth", "Of power"],
    "answer_en": "Of exhaustion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What social dream questioned?",
    "options_en": ["Progress without justice", "All dreams", "No dream", "Individual"],
    "answer_en": "Progress without justice",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What temporary truth revealed?",
    "options_en": ["Human equality", "Social inequality", "Wealth's value", "Power's need"],
    "answer_en": "Human equality",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What social awakening needed?",
    "options_en": ["To workers' dignity", "To nature", "To wealth", "To power"],
    "answer_en": "To workers' dignity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What temporary victory achieved?",
    "options_en": ["Over social divisions", "Over nature", "Over wealth", "Over all"],
    "answer_en": "Over social divisions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is the poem's core message?",
    "options_en": ["Acknowledge laborers' humanity", "Sleep is vital", "Work is essential", "Society works"],
    "answer_en": "Acknowledge laborers' humanity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What does the porter represent?",
    "options_en": ["All exploited workers", "Individual only", "Wealthy class", "Middle class"],
    "answer_en": "All exploited workers",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is sleep's temporary power?",
    "options_en": ["To equalize humans", "To create wealth", "To give knowledge", "To grant power"],
    "answer_en": "To equalize humans",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What social silence broken?",
    "options_en": ["About workers' plight", "All silence", "No silence", "Nature's silence"],
    "answer_en": "About workers' plight",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is sleep's temporary freedom?",
    "options_en": ["From social chains", "Physical freedom", "Financial freedom", "All freedom"],
    "answer_en": "From social chains",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What does his body evidence?",
    "options_en": ["Labor's physical toll", "Leisure's benefits", "Wealth's effects", "Education's value"],
    "answer_en": "Labor's physical toll",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What social paradox shown?",
    "options_en": ["Progress built on exploitation", "All paradoxes", "No paradox", "Nature's paradox"],
    "answer_en": "Progress built on exploitation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is sleep's temporary kingdom?",
    "options_en": ["Where all are equal", "Of wealth", "Of power", "No kingdom"],
    "answer_en": "Where all are equal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What social vision offered?",
    "options_en": ["Of human equality", "Of wealth", "Of power", "No vision"],
    "answer_en": "Of human equality",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What temporary transformation?",
    "options_en": ["Human to human only", "Poor to rich", "Weak to powerful", "No transformation"],
    "answer_en": "Human to human only",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What does sleep temporarily suspend?",
    "options_en": ["Social judgments", "Physical laws", "Mental processes", "All"],
    "answer_en": "Social judgments",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What social lesson taught?",
    "options_en": ["Humanity transcends class", "Wealth matters", "Power rules", "No lesson"],
    "answer_en": "Humanity transcends class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What temporary unity achieved?",
    "options_en": ["Of human condition", "Of wealth", "Of power", "No unity"],
    "answer_en": "Of human condition",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What social reality exposed?",
    "options_en": ["Exploitation's face", "Wealth's source", "Power's base", "All reality"],
    "answer_en": "Exploitation's face",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What temporary liberation?",
    "options_en": ["From social labels", "Physical freedom", "Financial freedom", "All liberation"],
    "answer_en": "From social labels",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What does his sleep demonstrate?",
    "options_en": ["Universal human need", "Individual weakness", "Social strength", "Nothing"],
    "answer_en": "Universal human need",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What social question raised?",
    "options_en": ["Cost of progress", "All questions", "No question", "Nature's question"],
    "answer_en": "Cost of progress",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What temporary equality gained?",
    "options_en": ["In human dignity", "In wealth", "In power", "No equality"],
    "answer_en": "In human dignity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What social blindness addressed?",
    "options_en": ["To labor's humanity", "To beauty", "To danger", "To wealth"],
    "answer_en": "To labor's humanity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What temporary sanctuary?",
    "options_en": ["Sleep's peace", "Wealth's security", "Power's protection", "No sanctuary"],
    "answer_en": "Sleep's peace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What social truth revealed?",
    "options_en": ["Workers' hidden humanity", "All truth", "No truth", "Nature's truth"],
    "answer_en": "Workers' hidden humanity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What temporary reprieve?",
    "options_en": ["From social oppression", "Physical rest", "Mental break", "All reprieve"],
    "answer_en": "From social oppression",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What social bond shown?",
    "options_en": ["Common humanity", "Wealth bond", "Power bond", "No bond"],
    "answer_en": "Common humanity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What temporary vision offered?",
    "options_en": ["Of human equality", "Of wealth", "Of power", "No vision"],
    "answer_en": "Of human equality",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What social awakening called for?",
    "options_en": ["To see human dignity", "To seek wealth", "To gain power", "No awakening"],
    "answer_en": "To see human dignity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the poem's lasting impact?",
    "options_en": ["Social consciousness raising", "Entertainment", "Wealth pursuit", "Power seeking"],
    "answer_en": "Social consciousness raising",
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