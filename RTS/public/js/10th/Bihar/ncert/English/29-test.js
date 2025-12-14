const questions = [
  {
    "num": 1,
    "question_en": "Who is the poet of 'Thinner Than a Crescent'?",
    "options_en": ["Rabindranath Tagore", "Vidyapati", "Mirabai", "Kabir"],
    "answer_en": "Vidyapati",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Who translated Vidyapati's poem to English?",
    "options_en": ["A.K. Ramanujan", "Rachel Fell McDermott", "William Jones", "E.M. Forster"],
    "answer_en": "Rachel Fell McDermott",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the lover compared to in the poem?",
    "options_en": ["A full moon", "A crescent moon", "A bright sun", "A shining star"],
    "answer_en": "A crescent moon",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the main theme of the poem?",
    "options_en": ["Nature's beauty", "Separation in love", "Religious devotion", "Political protest"],
    "answer_en": "Separation in love",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What becomes 'thinner than a crescent'?",
    "options_en": ["The poet's patience", "The lover's body", "The moon itself", "The night sky"],
    "answer_en": "The lover's body",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What emotion dominates the poem?",
    "options_en": ["Joy", "Anger", "Yearning", "Contentment"],
    "answer_en": "Yearning",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What time of day is often referenced?",
    "options_en": ["Morning", "Noon", "Evening", "Night"],
    "answer_en": "Night",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What celestial body is frequently mentioned?",
    "options_en": ["Sun", "Moon", "Stars", "Planets"],
    "answer_en": "Moon",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What happens to the speaker in separation?",
    "options_en": ["Grows stronger", "Wastes away", "Becomes happy", "Forgets love"],
    "answer_en": "Wastes away",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What language was the original poem in?",
    "options_en": ["Sanskrit", "Hindi", "Maithili", "Bengali"],
    "answer_en": "Maithili",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What type of poetry is this?",
    "options_en": ["Epic poetry", "Lyric poetry", "Narrative poetry", "Didactic poetry"],
    "answer_en": "Lyric poetry",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does the crescent moon symbolize?",
    "options_en": ["Fullness", "Diminishment", "Anger", "Wealth"],
    "answer_en": "Diminishment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What physical effect does love have?",
    "options_en": ["Makes one fat", "Makes one thin", "No effect", "Makes one strong"],
    "answer_en": "Makes one thin",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What season is implied in the poem?",
    "options_en": ["Spring", "Summer", "Autumn", "Not specified"],
    "answer_en": "Not specified",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the tone of the poem?",
    "options_en": ["Humorous", "Melancholic", "Angry", "Celebratory"],
    "answer_en": "Melancholic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What does the speaker long for?",
    "options_en": ["Wealth", "Fame", "The beloved's return", "Death"],
    "answer_en": "The beloved's return",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "How does the poem describe nights?",
    "options_en": ["Short", "Endless", "Bright", "Cold"],
    "answer_en": "Endless",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What happens to sleep?",
    "options_en": ["Comes easily", "Flees away", "Is deep", "Is dreamless"],
    "answer_en": "Flees away",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the lover's condition?",
    "options_en": ["Healthy", "Wasting", "Angry", "Forgetful"],
    "answer_en": "Wasting",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What literary device is 'thinner than a crescent'?",
    "options_en": ["Simile", "Metaphor", "Personification", "Alliteration"],
    "answer_en": "Simile",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What time period is Vidyapati from?",
    "options_en": ["10th century", "14th-15th century", "18th century", "20th century"],
    "answer_en": "14th-15th century",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What region is Vidyapati associated with?",
    "options_en": ["Punjab", "Bengal", "Mithila", "Gujarat"],
    "answer_en": "Mithila",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the gender of the speaker?",
    "options_en": ["Male", "Female", "Unclear", "Both"],
    "answer_en": "Female",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What happens to appetite?",
    "options_en": ["Increases", "Disappears", "Stays same", "Changes daily"],
    "answer_en": "Disappears",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What color is associated with the lover?",
    "options_en": ["Red", "Golden", "Pale", "Dark"],
    "answer_en": "Pale",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What musical instrument is mentioned?",
    "options_en": ["Veena", "Flute", "Drum", "None"],
    "answer_en": "None",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What happens to tears?",
    "options_en": ["Dry up", "Flow constantly", "Turn to joy", "Stop"],
    "answer_en": "Flow constantly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the beloved compared to?",
    "options_en": ["Moon", "Sun", "Both", "Neither"],
    "answer_en": "Moon",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What type of love is depicted?",
    "options_en": ["Platonic", "Romantic", "Divine", "Familial"],
    "answer_en": "Romantic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What happens to the body?",
    "options_en": ["Grows strong", "Wastes to a shadow", "Gets healthy", "No change"],
    "answer_en": "Wastes to a shadow",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the setting?",
    "options_en": ["Battlefield", "Garden", "Bedroom", "Unspecified"],
    "answer_en": "Unspecified",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the mood of nights?",
    "options_en": ["Joyful", "Tormenting", "Peaceful", "Exciting"],
    "answer_en": "Tormenting",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What does the speaker do at night?",
    "options_en": ["Sleeps well", "Sings songs", "Watches moon", "Weeps"],
    "answer_en": "Weeps",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the crescent's phase?",
    "options_en": ["Waxing", "Waning", "New", "Full"],
    "answer_en": "Waning",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What happens to laughter?",
    "options_en": ["Increases", "Disappears", "Loud", "Mocking"],
    "answer_en": "Disappears",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the central image?",
    "options_en": ["Fading moon", "Bright sun", "Flowing river", "Green fields"],
    "answer_en": "Fading moon",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What happens to days?",
    "options_en": ["Pass quickly", "Drag slowly", "Are joyful", "Are forgotten"],
    "answer_en": "Drag slowly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the beloved's location?",
    "options_en": ["Nearby", "Far away", "In heaven", "Unknown"],
    "answer_en": "Far away",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What happens to beauty?",
    "options_en": ["Increases", "Fades", "Stays same", "Changes"],
    "answer_en": "Fades",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the poem's rhythm?",
    "options_en": ["Fast", "Slow", "Erratic", "Musical"],
    "answer_en": "Musical",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What happens to memories?",
    "options_en": ["Fade", "Torment", "Bring joy", "Disappear"],
    "answer_en": "Torment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the weather like?",
    "options_en": ["Stormy", "Calm", "Hot", "Not described"],
    "answer_en": "Not described",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What happens to the heart?",
    "options_en": ["Becomes hard", "Breaks", "Heals", "Expands"],
    "answer_en": "Breaks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the speaker's wish?",
    "options_en": ["To forget", "To die", "To reunite", "To travel"],
    "answer_en": "To reunite",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What happens to voice?",
    "options_en": ["Grows loud", "Becomes silent", "Sweetens", "Coarsens"],
    "answer_en": "Becomes silent",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the bed like?",
    "options_en": ["Comforting", "A bed of thorns", "Soft", "Cold"],
    "answer_en": "A bed of thorns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What happens to dreams?",
    "options_en": ["Pleasant", "Nonexistent", "Nightmares", "Prophetic"],
    "answer_en": "Nonexistent",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the time frame?",
    "options_en": ["One day", "One week", "Months", "Unclear"],
    "answer_en": "Months",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What happens to jewelry?",
    "options_en": ["Worn daily", "Discarded", "Lost", "Gifted"],
    "answer_en": "Discarded",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the lover's state?",
    "options_en": ["Indifferent", "Also suffering", "Happy", "Angry"],
    "answer_en": "Also suffering",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What happens to mirror?",
    "options_en": ["Looked at often", "Avoided", "Broken", "Gifted"],
    "answer_en": "Avoided",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What season of love is it?",
    "options_en": ["Spring", "Winter", "Autumn", "Summer"],
    "answer_en": "Winter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What happens to food?",
    "options_en": ["Tastes good", "Tastes like ash", "Abundant", "Spiced"],
    "answer_en": "Tastes like ash",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is the predominant sense?",
    "options_en": ["Sight", "Touch", "Taste", "Hearing"],
    "answer_en": "Sight",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What happens to clothing?",
    "options_en": ["Fashionable", "Neglected", "Colorful", "Tight"],
    "answer_en": "Neglected",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is the moon's emotion?",
    "options_en": ["Joyful", "Sympathetic", "Mocking", "Indifferent"],
    "answer_en": "Mocking",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What happens to friends?",
    "options_en": ["Supportive", "Avoided", "Many", "Helpful"],
    "answer_en": "Avoided",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is the lover's weight?",
    "options_en": ["Increasing", "Decreasing", "Stable", "Heavy"],
    "answer_en": "Decreasing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What happens to songs?",
    "options_en": ["Sung often", "Unsung", "Happy", "Many"],
    "answer_en": "Unsung",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is the bed's temperature?",
    "options_en": ["Warm", "Cold", "Comfortable", "Hot"],
    "answer_en": "Cold",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What happens to daylight?",
    "options_en": ["Welcomed", "Hated", "Same as night", "Bright"],
    "answer_en": "Same as night",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is the lover's shadow?",
    "options_en": ["Dark", "Thin", "Gone", "Double"],
    "answer_en": "Thin",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What happens to seasons?",
    "options_en": ["Change normally", "All seem same", "Spring eternal", "Skip winter"],
    "answer_en": "All seem same",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is the lover's posture?",
    "options_en": ["Erect", "Bent", "Lying", "Dancing"],
    "answer_en": "Bent",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What happens to hope?",
    "options_en": ["Strong", "Fading", "Gone", "Renewed"],
    "answer_en": "Fading",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is the moon's phase change?",
    "options_en": ["Waxing to full", "Waning to crescent", "Full to new", "Static"],
    "answer_en": "Waning to crescent",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What happens to breath?",
    "options_en": ["Easy", "Labored", "Fragrant", "Cold"],
    "answer_en": "Labored",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is the lover's gaze?",
    "options_en": ["Bright", "Dull", "Piercing", "Laughing"],
    "answer_en": "Dull",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What happens to time?",
    "options_en": ["Flies", "Crawls", "Stops", "Reverses"],
    "answer_en": "Crawls",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is the lover's strength?",
    "options_en": ["Increasing", "Ebbing", "Superhuman", "Normal"],
    "answer_en": "Ebbing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What happens to moon watching?",
    "options_en": ["Daily ritual", "Avoided", "Joyful", "With friends"],
    "answer_en": "Daily ritual",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is the lover's complexion?",
    "options_en": ["Rosy", "Pale", "Dark", "Golden"],
    "answer_en": "Pale",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What happens to stars?",
    "options_en": ["Bright", "Dim", "Falling", "Singing"],
    "answer_en": "Dim",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is the lover's movement?",
    "options_en": ["Energetic", "Slow", "Dancing", "Running"],
    "answer_en": "Slow",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What happens to memory of touch?",
    "options_en": ["Fades", "Burns", "Comforts", "Hurts"],
    "answer_en": "Burns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is the night's length?",
    "options_en": ["Short", "Endless", "Comfortable", "Dark"],
    "answer_en": "Endless",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What happens to desire for company?",
    "options_en": ["High", "None", "Selective", "Changing"],
    "answer_en": "None",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is the lover's voice memory?",
    "options_en": ["Fading", "Echoing", "Gone", "Comforting"],
    "answer_en": "Echoing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What happens to seasons' beauty?",
    "options_en": ["Appreciated", "Unnoticed", "Enhanced", "Mocking"],
    "answer_en": "Unnoticed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is the lover's future?",
    "options_en": ["Bright", "Bleak", "Uncertain", "Promising"],
    "answer_en": "Bleak",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What happens to prayer?",
    "options_en": ["Constant", "None", "Ritualistic", "Angry"],
    "answer_en": "None",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is the moon's consistency?",
    "options_en": ["Changing", "Constant", "Bright", "Helpful"],
    "answer_en": "Changing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What happens to household duties?",
    "options_en": ["Performed well", "Neglected", "Delegated", "Enjoyed"],
    "answer_en": "Neglected",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is the lover's age perception?",
    "options_en": ["Young", "Aging quickly", "Ageless", "Old"],
    "answer_en": "Aging quickly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What happens to moon's beauty?",
    "options_en": ["Admired", "Hated", "Unnoticed", "Copied"],
    "answer_en": "Hated",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is the lover's scent memory?",
    "options_en": ["Fading", "Strong", "Gone", "New"],
    "answer_en": "Strong",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What happens to daily routine?",
    "options_en": ["Maintained", "Destroyed", "Improved", "Strict"],
    "answer_en": "Destroyed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is the lover's heartbeat?",
    "options_en": ["Strong", "Faint", "Racing", "Steady"],
    "answer_en": "Faint",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What happens to dreams of reunion?",
    "options_en": ["Vivid", "None", "Pleasant", "Frequent"],
    "answer_en": "None",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is the moon's reliability?",
    "options_en": ["Dependable", "Deceitful", "Changing", "Bright"],
    "answer_en": "Deceitful",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What happens to artistic expression?",
    "options_en": ["Flourishes", "Stops", "Changes", "Continues"],
    "answer_en": "Stops",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is the lover's temperature?",
    "options_en": ["Warm", "Cold", "Feverish", "Normal"],
    "answer_en": "Cold",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What happens to sense of self?",
    "options_en": ["Strong", "Lost", "Changing", "Clear"],
    "answer_en": "Lost",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is the moon's message?",
    "options_en": ["Hope", "Despair", "Love", "Indifference"],
    "answer_en": "Despair",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What happens to laughter lines?",
    "options_en": ["Increase", "Disappear", "Deepen", "Fade"],
    "answer_en": "Disappear",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is the lover's reflection?",
    "options_en": ["Clear", "Faint", "Gone", "Distorted"],
    "answer_en": "Faint",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What happens to will to live?",
    "options_en": ["Strong", "Weak", "Gone", "Renewed"],
    "answer_en": "Weak",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is the moon's final state?",
    "options_en": ["Full", "New", "Crescent", "Eclipse"],
    "answer_en": "Crescent",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What happens to the lover's identity?",
    "options_en": ["Strong", "Merged with beloved", "Lost", "Clear"],
    "answer_en": "Merged with beloved",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the poem's ultimate message about love?",
    "options_en": ["Love is joyful", "Love causes suffering", "Love is temporary", "Love is divine"],
    "answer_en": "Love causes suffering",
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