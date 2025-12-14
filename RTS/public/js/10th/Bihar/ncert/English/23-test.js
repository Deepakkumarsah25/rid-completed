const questions = [
  {
    "num": 1,
    "question_en": "Who wrote 'Ode on Solitude'?",
    "options_en": ["William Wordsworth", "Alexander Pope", "John Keats", "Percy Shelley"],
    "answer_en": "Alexander Pope",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does the poet desire in the first stanza?",
    "options_en": ["Wealth and fame", "A few paternal acres", "A palace", "Foreign lands"],
    "answer_en": "A few paternal acres",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Where does the poet wish to live?",
    "options_en": ["In a bustling city", "In his native air", "Abroad", "In mountains"],
    "answer_en": "In his native air",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What should the acres provide?",
    "options_en": ["Luxury goods", "Wholesome food", "Export crops", "Medicinal herbs"],
    "answer_en": "Wholesome food",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Where should milk come from?",
    "options_en": ["Supermarkets", "The herd", "Factories", "Imports"],
    "answer_en": "The herd",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What should fields provide?",
    "options_en": ["Bread and attire", "Cash for luxuries", "Building materials", "Medicines"],
    "answer_en": "Bread and attire",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What type of sleep is desired?",
    "options_en": ["Short naps", "Sound sleep", "Medicated sleep", "Dreamless sleep"],
    "answer_en": "Sound sleep",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "How should time be spent?",
    "options_en": ["In business", "In study and ease", "In hard labor", "In travel"],
    "answer_en": "In study and ease",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "How should hours pass?",
    "options_en": ["Slowly", "Swiftly", "Painfully", "Unnoticed"],
    "answer_en": "Swiftly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What does 'innocence' refer to?",
    "options_en": ["Childhood", "Freedom from sin", "Simple purity", "Ignorance"],
    "answer_en": "Simple purity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What should the body enjoy?",
    "options_en": ["Luxury", "Health", "Beauty", "Strength"],
    "answer_en": "Health",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What should the mind enjoy?",
    "options_en": ["Peace", "Excitement", "Knowledge", "Power"],
    "answer_en": "Peace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "How should the poet live?",
    "options_en": ["Unseen, unknown", "Famous, celebrated", "Wealthy, powerful", "Social, popular"],
    "answer_en": "Unseen, unknown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "How should the poet die?",
    "options_en": ["Lamented by all", "Unlamented", "Heroically", "Suddenly"],
    "answer_en": "Unlamented",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What should not mark the grave?",
    "options_en": ["A stone", "Flowers", "A cross", "An epitaph"],
    "answer_en": "A stone",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the poem's main theme?",
    "options_en": ["Urban life", "Contentment in solitude", "Political power", "Romantic love"],
    "answer_en": "Contentment in solitude",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What does 'paternal' mean?",
    "options_en": ["Motherly", "Fatherly", "Governmental", "Community"],
    "answer_en": "Fatherly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does 'native air' symbolize?",
    "options_en": ["Homeland", "Clean air", "Mountain air", "Sea breeze"],
    "answer_en": "Homeland",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What does 'wholesome' mean?",
    "options_en": ["Health-giving", "Tasty", "Plentiful", "Organic"],
    "answer_en": "Health-giving",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does 'attire' refer to?",
    "options_en": ["Clothing", "Jewelry", "Footwear", "Accessories"],
    "answer_en": "Clothing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 'study' in this context?",
    "options_en": ["Academic learning", "Self-reflection", "Book reading", "Observation"],
    "answer_en": "Self-reflection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does 'ease' mean?",
    "options_en": ["Laziness", "Leisure", "Comfort", "Wealth"],
    "answer_en": "Leisure",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "How are days described?",
    "options_en": ["Long and boring", "Swift and easy", "Busy and rushed", "Monotonous"],
    "answer_en": "Swift and easy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is 'innocence' contrasted with?",
    "options_en": ["Guilt", "Worldly corruption", "Knowledge", "Experience"],
    "answer_en": "Worldly corruption",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What does 'meditation' involve?",
    "options_en": ["Religious prayer", "Deep thought", "Daydreaming", "Resting"],
    "answer_en": "Deep thought",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does 'retreat' mean?",
    "options_en": ["Secluded place", "Military withdrawal", "Vacation", "Escape"],
    "answer_en": "Secluded place",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What does 'steal' mean here?",
    "options_en": ["Take secretly", "Live privately", "Rob", "Escape"],
    "answer_en": "Live privately",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What does 'unlamented' imply?",
    "options_en": ["Unloved", "Unmourned", "Forgotten", "Unimportant"],
    "answer_en": "Unmourned",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the poet's attitude toward fame?",
    "options_en": ["Seeks it", "Despises it", "Ignores it", "Fears it"],
    "answer_en": "Ignores it",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the poet's view of wealth?",
    "options_en": ["Essential", "Unimportant", "Dangerous", "Temporary"],
    "answer_en": "Unimportant",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What does 'blest' mean?",
    "options_en": ["Cursed", "Blessed/happy", "Wealthy", "Famous"],
    "answer_en": "Blessed/happy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Who is truly happy according to the poem?",
    "options_en": ["The wealthy", "The solitary", "The powerful", "The social"],
    "answer_en": "The solitary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'solitude' in this context?",
    "options_en": ["Loneliness", "Peaceful aloneness", "Isolation", "Exile"],
    "answer_en": "Peaceful aloneness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does the poet wish to avoid?",
    "options_en": ["Hard work", "Society's notice", "Family", "Nature"],
    "answer_en": "Society's notice",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the poet's 'book'?",
    "options_en": ["His mind", "A physical book", "Nature", "The Bible"],
    "answer_en": "His mind",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What does 'sound sleep' indicate?",
    "options_en": ["Noisy sleep", "Healthy sleep", "Short sleep", "Dream-filled sleep"],
    "answer_en": "Healthy sleep",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What does 'hours' refer to?",
    "options_en": ["Time periods", "Clock time", "Work hours", "Prayer times"],
    "answer_en": "Time periods",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'content'?",
    "options_en": ["Satisfied", "Angry", "Wealthy", "Famous"],
    "answer_en": "Satisfied",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What does 'breath' represent?",
    "options_en": ["Life", "Air", "Speech", "Spirit"],
    "answer_en": "Life",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "How should death come?",
    "options_en": ["Suddenly", "Painfully", "Peacefully", "Heroically"],
    "answer_en": "Peacefully",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the poet's 'own'?",
    "options_en": ["His land", "His thoughts", "His life", "All of these"],
    "answer_en": "All of these",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does the poet not want after death?",
    "options_en": ["Peace", "Remembrance", "Forgiveness", "Quiet"],
    "answer_en": "Remembrance",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the tone of the poem?",
    "options_en": ["Angry", "Peaceful", "Sad", "Excited"],
    "answer_en": "Peaceful",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the poet's 'world'?",
    "options_en": ["The globe", "His small estate", "Society", "The universe"],
    "answer_en": "His small estate",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What does 'steal from the world' mean?",
    "options_en": ["Rob society", "Live unnoticed", "Take resources", "Escape duties"],
    "answer_en": "Live unnoticed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'labor' here?",
    "options_en": ["Hard work", "Simple farming", "Office work", "Artistic work"],
    "answer_en": "Simple farming",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What does the poet value most?",
    "options_en": ["Independence", "Wealth", "Fame", "Power"],
    "answer_en": "Independence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 'quiet by day'?",
    "options_en": ["Silent days", "Peaceful days", "Empty days", "Boring days"],
    "answer_en": "Peaceful days",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What does 'night' provide?",
    "options_en": ["Fear", "Rest", "Work time", "Social time"],
    "answer_en": "Rest",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the poet's 'wealth'?",
    "options_en": ["Gold", "Contentment", "Land", "Herds"],
    "answer_en": "Contentment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "How does the poet view society?",
    "options_en": ["As essential", "As optional", "As harmful", "As enjoyable"],
    "answer_en": "As optional",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What does 'meditate' mean?",
    "options_en": ["Pray", "Think deeply", "Rest", "Study books"],
    "answer_en": "Think deeply",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is 'health of body' from?",
    "options_en": ["Medicine", "Wholesome food", "Exercise", "Doctors"],
    "answer_en": "Wholesome food",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is 'peace of mind' from?",
    "options_en": ["Wealth", "Solitude", "Religion", "Friends"],
    "answer_en": "Solitude",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What does 'live unseen' mean?",
    "options_en": ["Be invisible", "Live privately", "Hide", "Disappear"],
    "answer_en": "Live privately",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What does the poet reject?",
    "options_en": ["Nature", "Materialism", "Family", "Health"],
    "answer_en": "Materialism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "How should time be measured?",
    "options_en": ["By clock", "By seasons", "By contentment", "By achievements"],
    "answer_en": "By contentment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What does 'sound' in 'sound sleep' mean?",
    "options_en": ["Noisy", "Deep", "Healthy", "Light"],
    "answer_en": "Deep",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is the poet's greatest fear?",
    "options_en": ["Poverty", "Being forgotten", "Losing solitude", "Fame"],
    "answer_en": "Fame",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What does 'innocence' protect from?",
    "options_en": ["Crime", "World's corruption", "Disease", "Poverty"],
    "answer_en": "World's corruption",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "How should days be?",
    "options_en": ["Long", "Short", "Full", "Empty"],
    "answer_en": "Short",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What does 'study' contrast with?",
    "options_en": ["Work", "Sleep", "Business", "Play"],
    "answer_en": "Business",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What does 'ease' contrast with?",
    "options_en": ["Difficulty", "Labor", "Poverty", "Sickness"],
    "answer_en": "Labor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is the poet's 'legacy'?",
    "options_en": ["His land", "His poem", "Nothing", "His philosophy"],
    "answer_en": "Nothing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "How does the poet view old age?",
    "options_en": ["With fear", "With acceptance", "With regret", "Not mentioned"],
    "answer_en": "With acceptance",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What does 'blest' contrast with?",
    "options_en": ["Cursed", "Wealthy", "Famous", "Powerful"],
    "answer_en": "Famous",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'solitude' not?",
    "options_en": ["Loneliness", "Peace", "Contentment", "Freedom"],
    "answer_en": "Loneliness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What does the poet mean by 'my own'?",
    "options_en": ["Selfishness", "Self-sufficiency", "Loneliness", "Wealth"],
    "answer_en": "Self-sufficiency",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "How should death be recorded?",
    "options_en": ["In history", "Nowhere", "In poetry", "In family records"],
    "answer_en": "Nowhere",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is the poet's religion?",
    "options_en": ["Christianity", "Nature worship", "Self-knowledge", "Not specified"],
    "answer_en": "Not specified",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What does 'steal away' mean?",
    "options_en": ["Rob", "Die quietly", "Leave secretly", "Live privately"],
    "answer_en": "Live privately",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is 'peace' in the poem?",
    "options_en": ["Absence of war", "Inner calm", "Silence", "Sleep"],
    "answer_en": "Inner calm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "How should life be lived?",
    "options_en": ["Publicly", "Privately", "Wealthily", "Adventurously"],
    "answer_en": "Privately",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What does 'unlamented' imply?",
    "options_en": ["No friends", "No mourning", "Unloved", "Isolated"],
    "answer_en": "No mourning",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What does 'paternal acres' symbolize?",
    "options_en": ["Tradition", "Wealth", "Freedom", "Roots"],
    "answer_en": "Roots",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'health' in the poem?",
    "options_en": ["Physical", "Mental", "Both", "Spiritual"],
    "answer_en": "Both",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "How should life end?",
    "options_en": ["Dramatically", "Quietly", "Tragically", "Suddenly"],
    "answer_en": "Quietly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What does the poet not seek?",
    "options_en": ["Knowledge", "Immortality", "Comfort", "Peace"],
    "answer_en": "Immortality",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is the poet's 'book' made of?",
    "options_en": ["Paper", "Experiences", "Thoughts", "Memories"],
    "answer_en": "Thoughts",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What does 'meditate' involve?",
    "options_en": ["Sitting still", "Thinking", "Praying", "Reading"],
    "answer_en": "Thinking",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "How does the poet view time?",
    "options_en": ["As enemy", "As friend", "As money", "As meaningless"],
    "answer_en": "As friend",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What does the poet reject about cities?",
    "options_en": ["Noise", "Crowds", "Fashion", "All"],
    "answer_en": "All",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is the ultimate goal?",
    "options_en": ["Heaven", "Contentment", "Fame", "Knowledge"],
    "answer_en": "Contentment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What modern value is challenged?",
    "options_en": ["Fame", "Hard work", "Education", "Technology"],
    "answer_en": "Fame",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What does 'whistle' represent?",
    "options_en": ["Happiness", "Boredom", "Calling", "Music"],
    "answer_en": "Happiness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "How many wishes does the poet have?",
    "options_en": ["One", "Three", "Many", "Few"],
    "answer_en": "Few",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What should mark the grave?",
    "options_en": ["Grand monument", "Nothing", "Simple cross", "Epitaph"],
    "answer_en": "Nothing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is the poet's source of joy?",
    "options_en": ["External", "Internal", "Social", "Material"],
    "answer_en": "Internal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What does 'breath' mean here?",
    "options_en": ["Life span", "Air", "Speech", "Spirit"],
    "answer_en": "Life span",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "How should death be?",
    "options_en": ["Soon", "Late", "Timely", "Unexpected"],
    "answer_en": "Timely",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is 'labor' contrasted with?",
    "options_en": ["Rest", "Study", "Ease", "Sleep"],
    "answer_en": "Ease",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What does 'study' involve?",
    "options_en": ["Learning", "Self-knowledge", "Books", "Nature"],
    "answer_en": "Self-knowledge",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'ease'?",
    "options_en": ["Laziness", "Leisurely comfort", "Wealth", "Rest"],
    "answer_en": "Leisurely comfort",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What does 'innocence' mean?",
    "options_en": ["Purity", "Ignorance", "Simplicity", "Virtue"],
    "answer_en": "Simplicity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 'meditation'?",
    "options_en": ["Prayer", "Contemplation", "Rest", "Study"],
    "answer_en": "Contemplation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What does 'retreat' imply?",
    "options_en": ["Escape", "Seclusion", "Vacation", "Hideaway"],
    "answer_en": "Seclusion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What does 'steal' imply?",
    "options_en": ["Secrecy", "Privacy", "Theft", "Escape"],
    "answer_en": "Privacy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What does 'unlamented' mean?",
    "options_en": ["Unmourned", "Unloved", "Forgotten", "Ignored"],
    "answer_en": "Unmourned",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is the poem's message?",
    "options_en": ["Seek fame", "Find contentment in simplicity", "Acquire wealth", "Gain power"],
    "answer_en": "Find contentment in simplicity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What does the poem celebrate?",
    "options_en": ["Urban life", "Simple rural life", "Wealth", "Social status"],
    "answer_en": "Simple rural life",
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