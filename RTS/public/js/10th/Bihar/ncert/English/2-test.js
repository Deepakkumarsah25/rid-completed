const questions = [
  {
    "num": 1,
    "question_en": "What is the main theme of a story about modern life's pace?",
    "options_en": ["Time pressure", "Romantic love", "Historical events", "Scientific discovery"],
    "answer_en": "Time pressure",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which character type often appears in stories about urban life?",
    "options_en": ["The weary office worker", "The heroic knight", "The wise wizard", "The pirate captain"],
    "answer_en": "The weary office worker",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What setting is common in stories criticizing modern pace?",
    "options_en": ["Busy city", "Tropical island", "Medieval castle", "Space station"],
    "answer_en": "Busy city",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What symbolizes time pressure in such stories?",
    "options_en": ["Clocks and watches", "Mountains", "Oceans", "Stars"],
    "answer_en": "Clocks and watches",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What emotion do characters typically feel in fast-paced life stories?",
    "options_en": ["Anxiety", "Joy", "Excitement", "Pride"],
    "answer_en": "Anxiety",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is often contrasted with urban rush?",
    "options_en": ["Rural simplicity", "Space travel", "Underwater world", "Fantasy realm"],
    "answer_en": "Rural simplicity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which literary device emphasizes life's speed?",
    "options_en": ["Short, rapid sentences", "Long descriptions", "Rhyming couplets", "Latin phrases"],
    "answer_en": "Short, rapid sentences",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What do characters often sacrifice for speed?",
    "options_en": ["Personal relationships", "Money", "Fame", "Education"],
    "answer_en": "Personal relationships",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What represents escape from modern pace?",
    "options_en": ["Nature retreats", "Shopping malls", "Office buildings", "Highways"],
    "answer_en": "Nature retreats",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which character might offer wisdom about slowing down?",
    "options_en": ["Elderly person", "Child", "Boss", "Celebrity"],
    "answer_en": "Elderly person",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What symbolizes mechanical modern life?",
    "options_en": ["Factory machines", "Farm animals", "Hand tools", "Paint brushes"],
    "answer_en": "Factory machines",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What time period do such stories often criticize?",
    "options_en": ["Industrial age onward", "Stone age", "Renaissance", "Future"],
    "answer_en": "Industrial age onward",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What do characters lose in fast-paced narratives?",
    "options_en": ["Self-awareness", "Wealth", "Popularity", "Intelligence"],
    "answer_en": "Self-awareness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What weather often mirrors urban stress?",
    "options_en": ["Gray skies", "Sunny days", "Gentle rain", "Light snow"],
    "answer_en": "Gray skies",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What represents natural rhythm?",
    "options_en": ["Seasons changing", "Traffic lights", "Stock market", "News cycles"],
    "answer_en": "Seasons changing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which sound symbolizes urban chaos?",
    "options_en": ["Car horns", "Bird songs", "Waterfalls", "Wind chimes"],
    "answer_en": "Car horns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What do characters often forget to appreciate?",
    "options_en": ["Small moments", "Large achievements", "Future plans", "Past successes"],
    "answer_en": "Small moments",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What represents human connection loss?",
    "options_en": ["Empty conversations", "Long letters", "Deep talks", "Shared meals"],
    "answer_en": "Empty conversations",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which color dominates urban descriptions?",
    "options_en": ["Gray", "Green", "Blue", "Yellow"],
    "answer_en": "Gray",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What symbolizes artificial light?",
    "options_en": ["Neon signs", "Sunlight", "Moonlight", "Firelight"],
    "answer_en": "Neon signs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What represents time's passage?",
    "options_en": ["Setting sun", "Rising moon", "Static clock", "Frozen river"],
    "answer_en": "Setting sun",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which animal symbolizes freedom?",
    "options_en": ["Bird flying", "Caged pet", "Zoo animal", "Farm animal"],
    "answer_en": "Bird flying",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What represents modern communication problems?",
    "options_en": ["Quick texts", "Long letters", "Face-to-face talks", "Telegrams"],
    "answer_en": "Quick texts",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which activity symbolizes slowing down?",
    "options_en": ["Walking slowly", "Running fast", "Driving quickly", "Typing rapidly"],
    "answer_en": "Walking slowly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What represents childhood memory?",
    "options_en": ["Old toy", "New phone", "Latest car", "Modern appliance"],
    "answer_en": "Old toy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which meal is often rushed?",
    "options_en": ["Lunch at desk", "Family dinner", "Sunday brunch", "Picnic"],
    "answer_en": "Lunch at desk",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What symbolizes work pressure?",
    "options_en": ["Pile of files", "Empty desk", "Clean office", "Open window"],
    "answer_en": "Pile of files",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which represents escape route?",
    "options_en": ["Country road", "Highway", "Subway", "Elevator"],
    "answer_en": "Country road",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What symbolizes mechanical routine?",
    "options_en": ["Daily commute", "Weekend trip", "Vacation", "Unexpected event"],
    "answer_en": "Daily commute",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which represents natural sound?",
    "options_en": ["Bird chirping", "Phone ringing", "Siren wailing", "Keyboard clicking"],
    "answer_en": "Bird chirping",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What symbolizes time wasted?",
    "options_en": ["Staring at clock", "Enjoying sunset", "Talking to friend", "Reading book"],
    "answer_en": "Staring at clock",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which represents simple pleasure?",
    "options_en": ["Fresh bread smell", "Perfume scent", "Car exhaust", "Cleaning spray"],
    "answer_en": "Fresh bread smell",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What symbolizes urban confinement?",
    "options_en": ["Small apartment", "Open field", "Large garden", "Wide beach"],
    "answer_en": "Small apartment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which represents technological intrusion?",
    "options_en": ["Constant notifications", "Quiet room", "Silent library", "Empty park"],
    "answer_en": "Constant notifications",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What symbolizes life's cycle?",
    "options_en": ["Growing plant", "Broken machine", "New building", "Fast car"],
    "answer_en": "Growing plant",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which represents human pace?",
    "options_en": ["Heartbeat", "Computer speed", "Internet rate", "Car velocity"],
    "answer_en": "Heartbeat",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What symbolizes lost connection?",
    "options_en": ["Unanswered letter", "Quick email", "Instant message", "Social media post"],
    "answer_en": "Unanswered letter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which represents natural time?",
    "options_en": ["Sun's position", "Digital clock", "Meeting schedule", "Flight time"],
    "answer_en": "Sun's position",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What symbolizes modern distraction?",
    "options_en": ["Multiple screens", "Blank wall", "Empty table", "Quiet room"],
    "answer_en": "Multiple screens",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which represents true wealth?",
    "options_en": ["Time freedom", "Money amount", "Job title", "Car model"],
    "answer_en": "Time freedom",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What symbolizes life's brevity?",
    "options_en": ["Fading flower", "New building", "Latest gadget", "Fast train"],
    "answer_en": "Fading flower",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which represents artificial environment?",
    "options_en": ["Air-conditioned office", "Open meadow", "Forest path", "River bank"],
    "answer_en": "Air-conditioned office",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What symbolizes memory trigger?",
    "options_en": ["Old photograph", "New smartphone", "Current bill", "Future plan"],
    "answer_en": "Old photograph",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which represents forced pace?",
    "options_en": ["Morning alarm", "Natural waking", "Bird's song", "Sunrise"],
    "answer_en": "Morning alarm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What symbolizes human scale?",
    "options_en": ["Walking pace", "Car speed", "Plane velocity", "Internet rate"],
    "answer_en": "Walking pace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which represents modern isolation?",
    "options_en": ["Crowded loneliness", "Empty wilderness", "Quiet home", "Busy family"],
    "answer_en": "Crowded loneliness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What symbolizes nature's patience?",
    "options_en": ["Growing tree", "Fast car", "Quick meal", "Rushed meeting"],
    "answer_en": "Growing tree",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which represents time perception?",
    "options_en": ["Childhood summer", "Busy week", "Rushed hour", "Quick minute"],
    "answer_en": "Childhood summer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What symbolizes modern efficiency?",
    "options_en": ["Instant coffee", "Brewed tea", "Home cooking", "Garden growing"],
    "answer_en": "Instant coffee",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which represents life's meaning?",
    "options_en": ["Quality moments", "Quantity tasks", "Money earned", "Promotions gained"],
    "answer_en": "Quality moments",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What symbolizes urban growth?",
    "options_en": ["Construction cranes", "Growing trees", "Flowering plants", "Natural forests"],
    "answer_en": "Construction cranes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which represents simple life?",
    "options_en": ["Handmade bread", "Fast food", "Processed meal", "Frozen dinner"],
    "answer_en": "Handmade bread",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What symbolizes time's value?",
    "options_en": ["Child's growth", "Bank balance", "Car value", "House price"],
    "answer_en": "Child's growth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which represents modern noise?",
    "options_en": ["Traffic roar", "Silent night", "Quiet dawn", "Peaceful evening"],
    "answer_en": "Traffic roar",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What symbolizes life's rhythm?",
    "options_en": ["Breathing pattern", "Computer beep", "Phone ring", "Alarm sound"],
    "answer_en": "Breathing pattern",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Which represents true progress?",
    "options_en": ["Personal growth", "Technological advance", "Economic growth", "Urban expansion"],
    "answer_en": "Personal growth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What symbolizes modern rush?",
    "options_en": ["Fast fashion", "Handmade clothes", "Traditional wear", "Simple attire"],
    "answer_en": "Fast fashion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which represents natural beauty?",
    "options_en": ["Unexpected sunset", "Neon sign", "LED screen", "Billboard ad"],
    "answer_en": "Unexpected sunset",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What symbolizes time management?",
    "options_en": ["Calendar filled", "Blank diary", "Empty schedule", "Free time"],
    "answer_en": "Calendar filled",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which represents human need?",
    "options_en": ["Rest periods", "Work hours", "Meeting times", "Commute duration"],
    "answer_en": "Rest periods",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What symbolizes modern measurement?",
    "options_en": ["Productivity metrics", "Happiness level", "Contentment degree", "Peace amount"],
    "answer_en": "Productivity metrics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which represents artificial time?",
    "options_en": ["Time zones", "Sun position", "Season change", "Moon phase"],
    "answer_en": "Time zones",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What symbolizes life's pace?",
    "options_en": ["Heart rate", "Clock speed", "Internet rate", "Car acceleration"],
    "answer_en": "Heart rate",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which represents modern convenience?",
    "options_en": ["Instant delivery", "Patient waiting", "Slow process", "Natural timing"],
    "answer_en": "Instant delivery",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What symbolizes true speed?",
    "options_en": ["Thought process", "Internet connection", "Car velocity", "Plane speed"],
    "answer_en": "Thought process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Which represents urban design?",
    "options_en": ["Grid streets", "Winding paths", "Natural trails", "Random walks"],
    "answer_en": "Grid streets",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What symbolizes time pressure?",
    "options_en": ["Deadline approach", "Vacation start", "Weekend arrival", "Holiday beginning"],
    "answer_en": "Deadline approach",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which represents natural order?",
    "options_en": ["Seed to plant", "Instant result", "Quick fix", "Fast solution"],
    "answer_en": "Seed to plant",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What symbolizes modern expectation?",
    "options_en": ["Immediate response", "Patient reply", "Thoughtful answer", "Considered response"],
    "answer_en": "Immediate response",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which represents life's quality?",
    "options_en": ["Depth of experience", "Number of experiences", "Speed of living", "Quantity of actions"],
    "answer_en": "Depth of experience",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What symbolizes urban economy?",
    "options_en": ["Time is money", "Time is life", "Time is art", "Time is nature"],
    "answer_en": "Time is money",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which represents natural economy?",
    "options_en": ["Seasonal cycles", "24/7 operation", "Constant production", "Nonstop growth"],
    "answer_en": "Seasonal cycles",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What symbolizes modern education?",
    "options_en": ["Quick degrees", "Lifelong learning", "Slow mastery", "Deep study"],
    "answer_en": "Quick degrees",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which represents true learning?",
    "options_en": ["Understanding depth", "Information quantity", "Fact speed", "Data amount"],
    "answer_en": "Understanding depth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What symbolizes modern health?",
    "options_en": ["Quick fixes", "Preventive care", "Holistic approach", "Natural healing"],
    "answer_en": "Quick fixes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Which represents true health?",
    "options_en": ["Body rhythm", "Medication speed", "Surgery quickness", "Treatment rate"],
    "answer_en": "Body rhythm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What symbolizes modern food?",
    "options_en": ["Fast food", "Slow cooking", "Homegrown produce", "Farm fresh"],
    "answer_en": "Fast food",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which represents true nourishment?",
    "options_en": ["Mindful eating", "Quick snack", "On-the-go meal", "Desk lunch"],
    "answer_en": "Mindful eating",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What symbolizes modern travel?",
    "options_en": ["Fastest route", "Scenic path", "Interesting detour", "Discovery road"],
    "answer_en": "Fastest route",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which represents true journey?",
    "options_en": ["Experience gained", "Distance covered", "Speed achieved", "Time saved"],
    "answer_en": "Experience gained",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What symbolizes modern communication?",
    "options_en": ["Instant messaging", "Thoughtful letter", "Deep conversation", "Face-to-face talk"],
    "answer_en": "Instant messaging",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which represents true connection?",
    "options_en": ["Undivided attention", "Multitasking talk", "Quick chat", "Brief meeting"],
    "answer_en": "Undivided attention",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What symbolizes modern entertainment?",
    "options_en": ["Quick content", "Deep story", "Complex plot", "Developed characters"],
    "answer_en": "Quick content",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which represents true enjoyment?",
    "options_en": ["Engaged absorption", "Quick distraction", "Fast entertainment", "Brief amusement"],
    "answer_en": "Engaged absorption",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What symbolizes modern work?",
    "options_en": ["Productivity metrics", "Creative fulfillment", "Personal growth", "Skill development"],
    "answer_en": "Productivity metrics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Which represents true work?",
    "options_en": ["Meaningful contribution", "Task completion", "Deadline meeting", "Target achieving"],
    "answer_en": "Meaningful contribution",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What symbolizes modern success?",
    "options_en": ["Rapid promotion", "Gradual mastery", "Slow improvement", "Steady growth"],
    "answer_en": "Rapid promotion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which represents true success?",
    "options_en": ["Personal fulfillment", "External recognition", "Public fame", "Wealth amount"],
    "answer_en": "Personal fulfillment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What symbolizes modern relationship?",
    "options_en": ["Speed dating", "Slow courtship", "Patient building", "Gradual knowing"],
    "answer_en": "Speed dating",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which represents true relationship?",
    "options_en": ["Time invested", "Quick commitment", "Fast decision", "Rapid agreement"],
    "answer_en": "Time invested",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What symbolizes modern knowledge?",
    "options_en": ["Information access", "Understanding depth", "Wisdom growth", "Insight development"],
    "answer_en": "Information access",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which represents true knowledge?",
    "options_en": ["Applied wisdom", "Data collection", "Fact gathering", "Information storage"],
    "answer_en": "Applied wisdom",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What symbolizes modern art?",
    "options_en": ["Quick production", "Patient creation", "Slow refinement", "Gradual development"],
    "answer_en": "Quick production",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which represents true art?",
    "options_en": ["Creative process", "Finished product", "Sale price", "Popularity level"],
    "answer_en": "Creative process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What symbolizes modern science?",
    "options_en": ["Quick results", "Patient research", "Careful study", "Thorough testing"],
    "answer_en": "Quick results",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Which represents true science?",
    "options_en": ["Methodical inquiry", "Fast discovery", "Rapid breakthrough", "Quick solution"],
    "answer_en": "Methodical inquiry",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What symbolizes modern spirituality?",
    "options_en": ["Quick fixes", "Deep practice", "Patient growth", "Gradual understanding"],
    "answer_en": "Quick fixes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which represents true spirituality?",
    "options_en": ["Inner peace", "External ritual", "Quick prayer", "Brief meditation"],
    "answer_en": "Inner peace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What symbolizes modern life overall?",
    "options_en": ["Constant acceleration", "Natural rhythm", "Seasonal pace", "Cyclical movement"],
    "answer_en": "Constant acceleration",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the ultimate message about life's pace?",
    "options_en": ["Slow down to live fully", "Speed up to achieve more", "Maintain constant pace", "Ignore time completely"],
    "answer_en": "Slow down to live fully",
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