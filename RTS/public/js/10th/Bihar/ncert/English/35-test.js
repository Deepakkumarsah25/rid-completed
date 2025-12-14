const questions = [
  {
    "num": 1,
    "question_en": "Who is the poet of 'The Sleeping Porter'?",
    "options_en": ["Laxmi Prasad Devkota", "Bhanubhakta Acharya", "Lekhnath Paudyal", "Mohan Koirala"],
    "answer_en": "Laxmi Prasad Devkota",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the original language of the poem?",
    "options_en": ["Nepali", "Hindi", "Sanskrit", "Maithili"],
    "answer_en": "Nepali",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Who is the main character in the poem?",
    "options_en": ["A sleeping porter", "A rich merchant", "A king", "A farmer"],
    "answer_en": "A sleeping porter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the porter carrying?",
    "options_en": ["Heavy load", "Nothing", "Food basket", "Water pot"],
    "answer_en": "Heavy load",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Where is the porter sleeping?",
    "options_en": ["On the roadside", "In a hotel", "At home", "In a palace"],
    "answer_en": "On the roadside",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the porter's economic condition?",
    "options_en": ["Poor and exploited", "Middle class", "Rich", "Aristocratic"],
    "answer_en": "Poor and exploited",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What time of day is it?",
    "options_en": ["Noontime", "Morning", "Evening", "Night"],
    "answer_en": "Noontime",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Why is the porter sleeping?",
    "options_en": ["Exhaustion from work", "Laziness", "Sickness", "Nighttime"],
    "answer_en": "Exhaustion from work",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What does the porter dream about?",
    "options_en": ["Better life", "His load", "Food", "Nothing"],
    "answer_en": "Better life",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What literary movement is Devkota associated with?",
    "options_en": ["Romanticism", "Modern Nepali literature", "Classicism", "Postmodernism"],
    "answer_en": "Modern Nepali literature",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the poem's primary theme?",
    "options_en": ["Social injustice", "Nature's beauty", "Love", "Religious devotion"],
    "answer_en": "Social injustice",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "How does society view the porter?",
    "options_en": ["As invisible labor", "As important person", "As criminal", "As leader"],
    "answer_en": "As invisible labor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What does the load symbolize?",
    "options_en": ["Burden of poverty", "Wealth", "Knowledge", "Freedom"],
    "answer_en": "Burden of poverty",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the porter's sleep like?",
    "options_en": ["Deep but temporary", "Restless", "Luxurious", "Non-existent"],
    "answer_en": "Deep but temporary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What will happen when he wakes?",
    "options_en": ["Return to hard labor", "Find riches", "Go home", "Rest more"],
    "answer_en": "Return to hard labor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the weather condition?",
    "options_en": ["Hot sun", "Rainy", "Cold", "Pleasant"],
    "answer_en": "Hot sun",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the porter's bedding?",
    "options_en": ["Hard ground", "Soft mattress", "Straw mat", "Nothing"],
    "answer_en": "Hard ground",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does sleep provide him?",
    "options_en": ["Temporary escape", "Permanent rest", "Wealth", "Power"],
    "answer_en": "Temporary escape",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is his facial expression?",
    "options_en": ["Peaceful in sleep", "Angry", "Smiling", "Crying"],
    "answer_en": "Peaceful in sleep",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What body part shows his labor?",
    "options_en": ["Weary hands", "Strong legs", "Bright eyes", "Healthy skin"],
    "answer_en": "Weary hands",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What does the poem criticize?",
    "options_en": ["Class inequality", "Nature", "Modern technology", "Education system"],
    "answer_en": "Class inequality",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the porter's age?",
    "options_en": ["Not specified", "Young", "Old", "Middle-aged"],
    "answer_en": "Not specified",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What sound surrounds him?",
    "options_en": ["Market noises", "Silence", "Birds singing", "Traffic"],
    "answer_en": "Market noises",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does he wear?",
    "options_en": ["Tattered clothes", "Fine garments", "Uniform", "Nothing special"],
    "answer_en": "Tattered clothes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is near his sleeping place?",
    "options_en": ["His load", "Money bag", "Food basket", "Water jug"],
    "answer_en": "His load",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What emotion does the poem evoke?",
    "options_en": ["Sympathy", "Joy", "Anger", "Indifference"],
    "answer_en": "Sympathy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What time period is referenced?",
    "options_en": ["Contemporary to poet", "Ancient times", "Future", "Mythical past"],
    "answer_en": "Contemporary to poet",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the porter's social status?",
    "options_en": ["Lowest class", "Middle class", "High class", "No class"],
    "answer_en": "Lowest class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What does sleep temporarily erase?",
    "options_en": ["Social divisions", "Hunger", "Thirst", "All problems"],
    "answer_en": "Social divisions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is his sleep compared to?",
    "options_en": ["Brief respite", "Eternal rest", "Lazy habit", "Sickness"],
    "answer_en": "Brief respite",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What passes by unnoticed?",
    "options_en": ["Wealthy people", "Animals", "Vehicles", "Everything"],
    "answer_en": "Wealthy people",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is his payment for work?",
    "options_en": ["Meager wages", "No payment", "Good salary", "Food only"],
    "answer_en": "Meager wages",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What part of society ignores him?",
    "options_en": ["The privileged", "Other workers", "Children", "Animals"],
    "answer_en": "The privileged",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is his sleeping position?",
    "options_en": ["Curled up", "Stretched out", "Sitting", "Not described"],
    "answer_en": "Curled up",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What does the load contain?",
    "options_en": ["Others' possessions", "His belongings", "Food supplies", "Not specified"],
    "answer_en": "Others' possessions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What season is it?",
    "options_en": ["Summer", "Winter", "Spring", "Autumn"],
    "answer_en": "Summer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is his breathing like?",
    "options_en": ["Deep and regular", "Labored", "Shallow", "Not mentioned"],
    "answer_en": "Deep and regular",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does society gain from him?",
    "options_en": ["Cheap labor", "Nothing", "Entertainment", "Wisdom"],
    "answer_en": "Cheap labor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What does he lose in sleep?",
    "options_en": ["Consciousness of pain", "His load", "His identity", "Nothing"],
    "answer_en": "Consciousness of pain",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the poem's tone?",
    "options_en": ["Sympathetic realism", "Joyful celebration", "Angry protest", "Humorous"],
    "answer_en": "Sympathetic realism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What literary device is prominent?",
    "options_en": ["Imagery", "Rhyme", "Alliteration", "Hyperbole"],
    "answer_en": "Imagery",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does the road symbolize?",
    "options_en": ["Life's journey", "Progress", "Danger", "Freedom"],
    "answer_en": "Life's journey",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is his temporary freedom?",
    "options_en": ["Freedom in dreams", "Physical freedom", "Financial freedom", "No freedom"],
    "answer_en": "Freedom in dreams",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does the sun represent?",
    "options_en": ["Harsh reality", "Hope", "Life", "Death"],
    "answer_en": "Harsh reality",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is his relationship with time?",
    "options_en": ["Slave to work hours", "Master of time", "Indifferent", "No relationship"],
    "answer_en": "Slave to work hours",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What does sleep temporarily give?",
    "options_en": ["Dignity of rest", "Wealth", "Power", "Fame"],
    "answer_en": "Dignity of rest",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the load's weight?",
    "options_en": ["Heavier than justice", "Light", "Manageable", "Not measured"],
    "answer_en": "Heavier than justice",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What does the poem advocate?",
    "options_en": ["Social awareness", "Revolution", "Acceptance", "Escape"],
    "answer_en": "Social awareness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is his sleep's quality?",
    "options_en": ["Restorative but brief", "Poor quality", "Luxurious", "Interrupted"],
    "answer_en": "Restorative but brief",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does society owe him?",
    "options_en": ["Respect and fair treatment", "Nothing", "More work", "Less pay"],
    "answer_en": "Respect and fair treatment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is his dream content?",
    "options_en": ["Escape from poverty", "Work", "Food", "Not detailed"],
    "answer_en": "Escape from poverty",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What physical marks show labor?",
    "options_en": ["Calloused hands", "Tanned skin", "Bent back", "All of these"],
    "answer_en": "All of these",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is the setting's social context?",
    "options_en": ["Urban poverty", "Rural life", "Royal court", "Wilderness"],
    "answer_en": "Urban poverty",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What does sleep equalize?",
    "options_en": ["Rich and poor temporarily", "All humans permanently", "Animals and humans", "Nothing"],
    "answer_en": "Rich and poor temporarily",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is his waking reality?",
    "options_en": ["Hard labor continues", "Change occurs", "Rest continues", "Death comes"],
    "answer_en": "Hard labor continues",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What does the poem's title emphasize?",
    "options_en": ["Humanity in sleep", "Laziness", "Wealth", "Nature"],
    "answer_en": "Humanity in sleep",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What social system is critiqued?",
    "options_en": ["Economic exploitation", "Education", "Religion", "Government"],
    "answer_en": "Economic exploitation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is his sleep's duration?",
    "options_en": ["Brief respite", "Long sleep", "Eternal", "Not specified"],
    "answer_en": "Brief respite",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What does the load represent socially?",
    "options_en": ["Others' comfort", "His wealth", "National progress", "Personal growth"],
    "answer_en": "Others' comfort",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is his sleep's innocence?",
    "options_en": ["Childlike peace", "Guilty rest", "Sinful", "No innocence"],
    "answer_en": "Childlike peace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What wakes him eventually?",
    "options_en": ["Necessity of work", "Noise", "Hunger", "Sunset"],
    "answer_en": "Necessity of work",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What does society deny him?",
    "options_en": ["Basic dignity", "Work", "Existence", "Sleep"],
    "answer_en": "Basic dignity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is his economic cycle?",
    "options_en": ["Work-sleep-work", "Work-rest-play", "Sleep-eat-work", "No cycle"],
    "answer_en": "Work-sleep-work",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What does sleep temporarily suspend?",
    "options_en": ["Class consciousness", "Hunger", "Thirst", "All sensations"],
    "answer_en": "Class consciousness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is his sleeping face like?",
    "options_en": ["Peaceful mask", "Painful grimace", "Smiling", "Frowning"],
    "answer_en": "Peaceful mask",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What does the poem question?",
    "options_en": ["Social fairness", "Nature's ways", "Human existence", "Divine justice"],
    "answer_en": "Social fairness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is his temporary equality?",
    "options_en": ["In sleep with all", "In wealth", "In power", "No equality"],
    "answer_en": "In sleep with all",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What does his body tell?",
    "options_en": ["Story of labor", "Of leisure", "Of wealth", "Of education"],
    "answer_en": "Story of labor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is sleep's gift?",
    "options_en": ["Temporary forgetfulness", "Wealth", "Knowledge", "Power"],
    "answer_en": "Temporary forgetfulness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What social contrast shown?",
    "options_en": ["Labor vs luxury", "Urban vs rural", "Young vs old", "All contrasts"],
    "answer_en": "Labor vs luxury",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is his sleeping vulnerability?",
    "options_en": ["Exposed to elements", "Safe", "Protected", "Hidden"],
    "answer_en": "Exposed to elements",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What does the road contain?",
    "options_en": ["His resting place", "Wealth", "Danger", "Beauty"],
    "answer_en": "His resting place",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is sleep's democracy?",
    "options_en": ["Available to all", "Only for rich", "Unequal", "No democracy"],
    "answer_en": "Available to all",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What does his posture show?",
    "options_en": ["Physical exhaustion", "Comfort", "Strength", "Flexibility"],
    "answer_en": "Physical exhaustion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What social blindness shown?",
    "options_en": ["To workers' humanity", "To beauty", "To danger", "To wealth"],
    "answer_en": "To workers' humanity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is sleep's transformation?",
    "options_en": ["Makes human equal", "Makes rich", "Makes powerful", "No transformation"],
    "answer_en": "Makes human equal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What does the load's presence mean?",
    "options_en": ["Work awaits", "Wealth stored", "Burden shared", "No meaning"],
    "answer_en": "Work awaits",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What social commentary made?",
    "options_en": ["On exploited labor", "On nature", "On religion", "On education"],
    "answer_en": "On exploited labor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is sleep's temporary justice?",
    "options_en": ["Equal rest for all", "Wealth distribution", "Power sharing", "No justice"],
    "answer_en": "Equal rest for all",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What does his stillness show?",
    "options_en": ["Complete exhaustion", "Laziness", "Meditation", "Death-like state"],
    "answer_en": "Complete exhaustion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What social hierarchy shown?",
    "options_en": ["Laborer at bottom", "Equal society", "No hierarchy", "Reversed hierarchy"],
    "answer_en": "Laborer at bottom",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What sleep's temporary abolition?",
    "options_en": ["Social distinctions", "Physical needs", "Mental stress", "All problems"],
    "answer_en": "Social distinctions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is his sleep's purity?",
    "options_en": ["Untouched by greed", "Impure", "Sinful", "No purity"],
    "answer_en": "Untouched by greed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What social contract broken?",
    "options_en": ["Fair treatment", "No contract", "All contracts", "Specific contract"],
    "answer_en": "Fair treatment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What sleep's universal language?",
    "options_en": ["Human need", "Wealth", "Power", "Education"],
    "answer_en": "Human need",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What his sleep reveals?",
    "options_en": ["Common humanity", "Unique identity", "Wealth", "Power"],
    "answer_en": "Common humanity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What social veil lifted in sleep?",
    "options_en": ["Class distinctions", "All veils", "No veil", "Personal veil"],
    "answer_en": "Class distinctions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What sleep's temporary kingdom?",
    "options_en": ["Dream world", "Real world", "No kingdom", "Earthly kingdom"],
    "answer_en": "Dream world",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What his body's testimony?",
    "options_en": ["Labor's toll", "Leisure's benefits", "Wealth's effects", "Education's value"],
    "answer_en": "Labor's toll",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What social mirror shown?",
    "options_en": ["Of inequality", "Of beauty", "Of progress", "Of nature"],
    "answer_en": "Of inequality",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What sleep's temporary revolution?",
    "options_en": ["Against social order", "No revolution", "Political revolution", "All revolutions"],
    "answer_en": "Against social order",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What his sleep's democracy?",
    "options_en": ["Equal need", "Equal wealth", "Equal power", "Equal education"],
    "answer_en": "Equal need",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What social sleep criticized?",
    "options_en": ["Society's indifference", "Individual sleep", "All sleep", "No sleep"],
    "answer_en": "Society's indifference",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What sleep's temporary justice?",
    "options_en": ["Nature's equal gift", "Man-made justice", "Divine justice", "No justice"],
    "answer_en": "Nature's equal gift",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What his body's language?",
    "options_en": ["Of exhausted labor", "Of leisure", "Of wealth", "Of power"],
    "answer_en": "Of exhausted labor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What social dream questioned?",
    "options_en": ["Of progress without justice", "All dreams", "No dream", "Individual dream"],
    "answer_en": "Of progress without justice",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What sleep's temporary truth?",
    "options_en": ["Human equality", "Social inequality", "Wealth's importance", "Power's necessity"],
    "answer_en": "Human equality",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What social awakening needed?",
    "options_en": ["To workers' humanity", "To nature", "To wealth", "To power"],
    "answer_en": "To workers' humanity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What sleep's temporary victory?",
    "options_en": ["Over social divisions", "Over nature", "Over wealth", "Over all"],
    "answer_en": "Over social divisions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the poem's ultimate message?",
    "options_en": ["Recognize laborers' humanity", "Sleep is important", "Work is essential", "Society is perfect"],
    "answer_en": "Recognize laborers' humanity",
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