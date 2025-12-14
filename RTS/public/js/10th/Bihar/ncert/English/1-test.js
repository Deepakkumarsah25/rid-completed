const questions = [
  {
    "num": 1,
    "question_en": "Who is the main protagonist in 'The Pace for Living'?",
    "options_en": ["John", "Mr. Smith", "The narrator", "Robert"],
    "answer_en": "The narrator",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the primary theme of 'The Pace for Living'?",
    "options_en": ["Love", "Modern life's speed", "War", "Education"],
    "answer_en": "Modern life's speed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Where does the story mainly take place?",
    "options_en": ["A village", "London", "New York", "Paris"],
    "answer_en": "London",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What does the protagonist compare modern life to?",
    "options_en": ["A race", "A machine", "A storm", "A river"],
    "answer_en": "A machine",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What triggers the protagonist's reflection on life's pace?",
    "options_en": ["A traffic jam", "A letter", "A clock", "A meeting"],
    "answer_en": "A traffic jam",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "How does the protagonist initially feel about city life?",
    "options_en": ["Excited", "Exhausted", "Indifferent", "Angry"],
    "answer_en": "Exhausted",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What memory from childhood does the protagonist recall?",
    "options_en": ["Fishing", "School days", "Grandfather's farm", "Summer holidays"],
    "answer_en": "Grandfather's farm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What does the protagonist notice about people in the city?",
    "options_en": ["They smile often", "They rush everywhere", "They are helpful", "They are lonely"],
    "answer_en": "They rush everywhere",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What season is it when the story begins?",
    "options_en": ["Spring", "Summer", "Autumn", "Winter"],
    "answer_en": "Autumn",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What literary device is used to describe the city's noise?",
    "options_en": ["Simile", "Metaphor", "Personification", "Alliteration"],
    "answer_en": "Personification",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What does the protagonist decide to do at the story's climax?",
    "options_en": ["Quit his job", "Move away", "Slow down", "Write a book"],
    "answer_en": "Slow down",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Who does the protagonist meet in the park?",
    "options_en": ["An old friend", "A child", "An elderly man", "His wife"],
    "answer_en": "An elderly man",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What advice does the elderly man give?",
    "options_en": ["Work harder", "Save money", "Enjoy moments", "Travel more"],
    "answer_en": "Enjoy moments",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does the protagonist observe about nature?",
    "options_en": ["It's disappearing", "It's unchanged", "It's also rushing", "It's healing"],
    "answer_en": "It's unchanged",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What time of day is significant in the story?",
    "options_en": ["Dawn", "Noon", "Sunset", "Midnight"],
    "answer_en": "Sunset",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "How does the story end?",
    "options_en": ["Tragically", "Hopefully", "Mysteriously", "Sadly"],
    "answer_en": "Hopefully",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What does the clock symbolize in the story?",
    "options_en": ["Time pressure", "Wealth", "Tradition", "Death"],
    "answer_en": "Time pressure",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What contrast is presented in the story?",
    "options_en": ["Urban vs rural", "Rich vs poor", "Young vs old", "Past vs future"],
    "answer_en": "Urban vs rural",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the protagonist's profession?",
    "options_en": ["Banker", "Writer", "Teacher", "Businessman"],
    "answer_en": "Businessman",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does the protagonist notice about children in the story?",
    "options_en": ["They are happy", "They are also rushing", "They are absent", "They are playing"],
    "answer_en": "They are also rushing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What weather condition reflects the protagonist's mood?",
    "options_en": ["Rain", "Sunshine", "Fog", "Storm"],
    "answer_en": "Fog",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does the protagonist feel he has lost?",
    "options_en": ["Money", "Time", "Peace", "Friends"],
    "answer_en": "Peace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What literary period does this story belong to?",
    "options_en": ["Romantic", "Modernist", "Victorian", "Post-modern"],
    "answer_en": "Modernist",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does the traffic symbolize?",
    "options_en": ["Progress", "Chaos", "Society", "Movement"],
    "answer_en": "Chaos",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "How does the protagonist change by the end?",
    "options_en": ["Becomes richer", "Gains perspective", "Gives up", "Moves away"],
    "answer_en": "Gains perspective",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does the park represent?",
    "options_en": ["Escape", "Danger", "Memory", "Future"],
    "answer_en": "Escape",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What narrative perspective is used?",
    "options_en": ["First person", "Third person", "Omniscient", "Second person"],
    "answer_en": "First person",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What does the protagonist hear that makes him reflective?",
    "options_en": ["Church bells", "Train whistle", "Clock chime", "Bird song"],
    "answer_en": "Clock chime",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What color dominates the descriptions?",
    "options_en": ["Gray", "Green", "Blue", "Red"],
    "answer_en": "Gray",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does the protagonist realize about happiness?",
    "options_en": ["It's in wealth", "It's in slowing down", "It's impossible", "It's in success"],
    "answer_en": "It's in slowing down",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "How is technology portrayed?",
    "options_en": ["As helpful", "As oppressive", "As exciting", "As neutral"],
    "answer_en": "As oppressive",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What does the elderly man's walking pace symbolize?",
    "options_en": ["Wisdom", "Age", "Illness", "Contentment"],
    "answer_en": "Contentment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What does the protagonist notice about his own breathing?",
    "options_en": ["It's rapid", "It's shallow", "It's calm", "It's irregular"],
    "answer_en": "It's rapid",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What literary movement criticizes what this story addresses?",
    "options_en": ["Industrialization", "Romanticism", "Realism", "Modernism"],
    "answer_en": "Industrialization",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What does the office building represent?",
    "options_en": ["Success", "Prison", "Safety", "Community"],
    "answer_en": "Prison",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "How does the protagonist describe his thoughts?",
    "options_en": ["Clear", "Racing", "Peaceful", "Confused"],
    "answer_en": "Racing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What does the protagonist wish he could do?",
    "options_en": ["Retire early", "Go back in time", "Stop time", "Leave everything"],
    "answer_en": "Stop time",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What season does the protagonist remember most fondly?",
    "options_en": ["Spring", "Summer", "Autumn", "Winter"],
    "answer_en": "Summer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "How are the city sounds described?",
    "options_en": ["Musical", "Deafening", "Comforting", "Silent"],
    "answer_en": "Deafening",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What does the protagonist feel when he sees a tree?",
    "options_en": ["Indifference", "Joy", "Sadness", "Connection"],
    "answer_en": "Connection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What time does the protagonist usually wake up?",
    "options_en": ["5 AM", "6 AM", "7 AM", "8 AM"],
    "answer_en": "6 AM",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "How does the protagonist commute to work?",
    "options_en": ["Train", "Car", "Bus", "Walking"],
    "answer_en": "Train",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What does the protagonist notice about people's faces?",
    "options_en": ["They smile", "They are tense", "They are happy", "They are old"],
    "answer_en": "They are tense",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What childhood game does the protagonist remember?",
    "options_en": ["Football", "Hide and seek", "Tag", "Marbles"],
    "answer_en": "Marbles",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What does the protagonist think about modern communication?",
    "options_en": ["It connects people", "It isolates people", "It's efficient", "It's unnecessary"],
    "answer_en": "It isolates people",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "How does the story describe the river?",
    "options_en": ["Polluted", "Beautiful", "Rushing", "Calm"],
    "answer_en": "Calm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What does the protagonist forget to do?",
    "options_en": ["Eat lunch", "Call his mother", "Enjoy sunshine", "Pay bills"],
    "answer_en": "Enjoy sunshine",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "How are the buildings described?",
    "options_en": ["Warm", "Imposing", "Colorful", "Small"],
    "answer_en": "Imposing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What does the protagonist notice about seasons in the city?",
    "options_en": ["They're distinct", "They blur together", "Only winter exists", "They're beautiful"],
    "answer_en": "They blur together",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does the elderly man carry?",
    "options_en": ["A cane", "A book", "A newspaper", "A bag"],
    "answer_en": "A cane",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "How does the protagonist describe his dreams?",
    "options_en": ["Peaceful", "Anxious", "Colorful", "Nonexistent"],
    "answer_en": "Anxious",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What does the protagonist see in the puddle?",
    "options_en": ["His reflection", "The sky", "Leaves", "Coins"],
    "answer_en": "His reflection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "How does the story use irony?",
    "options_en": ["We have more time but feel rushed", "We're connected but lonely", "Both A and B", "Neither A nor B"],
    "answer_en": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What does the protagonist's watch represent?",
    "options_en": ["Status", "Time master", "Memory", "Gift"],
    "answer_en": "Time master",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "How does the story contrast youth and age?",
    "options_en": ["Youth rushes, age is calm", "Youth is wise, age is foolish", "Both are similar", "Age rushes more"],
    "answer_en": "Youth rushes, age is calm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What does the protagonist notice about birds?",
    "options_en": ["They're absent", "They're also rushing", "They're free", "They're caged"],
    "answer_en": "They're free",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "How are the streetlights described?",
    "options_en": ["Warm", "Harsh", "Dim", "Colorful"],
    "answer_en": "Harsh",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What does the protagonist feel when alone?",
    "options_en": ["Peace", "Anxiety", "Boredom", "Excitement"],
    "answer_en": "Anxiety",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "How does the story portray progress?",
    "options_en": ["As positive", "As negative", "As neutral", "As inevitable"],
    "answer_en": "As negative",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What does the moon represent?",
    "options_en": ["Change", "Constancy", "Mystery", "Beauty"],
    "answer_en": "Constancy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "How does the protagonist describe his heartbeat?",
    "options_en": ["Steady", "Racing", "Slow", "Irregular"],
    "answer_en": "Racing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What does the wind symbolize?",
    "options_en": ["Change", "Freedom", "Chaos", "Time"],
    "answer_en": "Freedom",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "How are memories portrayed?",
    "options_en": ["Painful", "Nostalgic", "False", "Unimportant"],
    "answer_en": "Nostalgic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What does the protagonist notice about laughter?",
    "options_en": ["It's frequent", "It's rare", "It's loud", "It's fake"],
    "answer_en": "It's rare",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "How does the story view tradition?",
    "options_en": ["As outdated", "As valuable", "As restrictive", "As irrelevant"],
    "answer_en": "As valuable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What does the broken clock represent?",
    "options_en": ["Failed technology", "Escaped time", "Memory", "The past"],
    "answer_en": "Escaped time",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "How does the protagonist view his past self?",
    "options_en": ["With regret", "With envy", "With pride", "With indifference"],
    "answer_en": "With envy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What does the fog clearing symbolize?",
    "options_en": ["Clarity", "Danger passing", "Morning", "Confusion ending"],
    "answer_en": "Clarity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "How are children's games different now?",
    "options_en": ["More digital", "More active", "Same as before", "Nonexistent"],
    "answer_en": "More digital",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What does the protagonist smell in the city?",
    "options_en": ["Flowers", "Exhaust", "Bread", "Rain"],
    "answer_en": "Exhaust",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "How does the story use repetition?",
    "options_en": ["To emphasize rush", "To show boredom", "For rhythm", "All of above"],
    "answer_en": "To emphasize rush",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What does the empty bench symbolize?",
    "options_en": ["Loneliness", "Opportunity", "Rest", "Abandonment"],
    "answer_en": "Opportunity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "How does the protagonist view nature now?",
    "options_en": ["As decoration", "As essential", "As obstacle", "As memory"],
    "answer_en": "As essential",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What does the ringing phone represent?",
    "options_en": ["Connection", "Demand", "Help", "News"],
    "answer_en": "Demand",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "How are the city's rhythms described?",
    "options_en": ["Musical", "Mechanical", "Natural", "Chaotic"],
    "answer_en": "Mechanical",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What does the protagonist notice about silence?",
    "options_en": ["It's golden", "It's scary", "It's rare", "It's boring"],
    "answer_en": "It's rare",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "How does the story view simplicity?",
    "options_en": ["As poverty", "As wisdom", "As boring", "As impossible"],
    "answer_en": "As wisdom",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What does the fading light symbolize?",
    "options_en": ["End of day", "Lost opportunities", "Approaching night", "Time passing"],
    "answer_en": "Time passing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "How does the protagonist feel about his routine?",
    "options_en": ["Comfortable", "Trapped", "Proud", "Indifferent"],
    "answer_en": "Trapped",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What does the single tree represent?",
    "options_en": ["Nature's resilience", "Loneliness", "Growth", "Past"],
    "answer_en": "Nature's resilience",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "How are shadows used symbolically?",
    "options_en": ["To show time", "To create mystery", "To represent past", "For darkness"],
    "answer_en": "To show time",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What does the protagonist realize about money?",
    "options_en": ["It's everything", "It's unimportant", "It brings happiness", "It's necessary evil"],
    "answer_en": "It's unimportant",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "How does the story describe morning?",
    "options_en": ["Fresh start", "Another rush", "Beautiful", "Quiet"],
    "answer_en": "Another rush",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What does the old photograph represent?",
    "options_en": ["Lost happiness", "Memory", "Past self", "All of above"],
    "answer_en": "All of above",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "How does the protagonist view technology's role?",
    "options_en": ["As helper", "As master", "As tool", "As friend"],
    "answer_en": "As master",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What does the setting sun represent?",
    "options_en": ["End", "Beauty", "Cycle", "Loss"],
    "answer_en": "Cycle",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "How are hands described?",
    "options_en": ["Always busy", "Resting", "Creative", "Old"],
    "answer_en": "Always busy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What does the protagonist learn from nature?",
    "options_en": ["Patience", "Beauty", "Ruthlessness", "Indifference"],
    "answer_en": "Patience",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "How does the story view community?",
    "options_en": ["As lost", "As strong", "As changing", "As unnecessary"],
    "answer_en": "As lost",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What does the winding path symbolize?",
    "options_en": ["Life's journey", "Confusion", "Nature", "Choice"],
    "answer_en": "Life's journey",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "How does the protagonist describe modern love?",
    "options_en": ["Deeper", "Rushed", "Same", "Non-existent"],
    "answer_en": "Rushed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What does the abandoned toy represent?",
    "options_en": ["Lost childhood", "Waste", "Memory", "Change"],
    "answer_en": "Lost childhood",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "How are eyes described in the crowd?",
    "options_en": ["Bright", "Downcast", "Searching", "Empty"],
    "answer_en": "Empty",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What does the first star represent?",
    "options_en": ["Hope", "Night", "Beauty", "Loneliness"],
    "answer_en": "Hope",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "How does the story view aging?",
    "options_en": ["As decline", "As wisdom", "As fear", "As natural"],
    "answer_en": "As wisdom",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What does the locked door symbolize?",
    "options_en": ["Security", "Isolation", "Privacy", "Fear"],
    "answer_en": "Isolation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "How does the protagonist view his achievements?",
    "options_en": ["With pride", "As empty", "As enough", "As beginning"],
    "answer_en": "As empty",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What does the changing weather reflect?",
    "options_en": ["Mood changes", "Nature's power", "Time passing", "Unpredictability"],
    "answer_en": "Mood changes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "How does the story end for the protagonist?",
    "options_en": ["He moves", "He quits", "He accepts", "He fights"],
    "answer_en": "He accepts",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the main message of 'The Pace for Living'?",
    "options_en": ["Slow down and live", "Money is important", "Technology is bad", "Cities are evil"],
    "answer_en": "Slow down and live",
    "attempted": false,
    "selected": ""
  }
];
// --------------------------- GLOBAL VARS -----------------------------
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