const questions = [
   {
    "num": 1,
    "question_en": "What is the speaker's moon-watching habit?",
    "options_en": ["Daily ritual", "Never looks", "Occasional", "With others"],
    "answer_en": "Daily ritual",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What happens to the stars?",
    "options_en": ["Bright and cheerful", "Dim and sad", "Falling", "Singing"],
    "answer_en": "Dim and sad",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the speaker's movement?",
    "options_en": ["Energetic", "Slow and lethargic", "Dance-like", "Restless"],
    "answer_en": "Slow and lethargic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What happens to memory of touch?",
    "options_en": ["Fades quickly", "Burns painfully", "Comforts", "Changes"],
    "answer_en": "Burns painfully",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the night's perceived length?",
    "options_en": ["Short", "Endless", "Comfortable", "Dark but short"],
    "answer_en": "Endless",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What happens to desire for company?",
    "options_en": ["Intense", "Nonexistent", "Selective", "Variable"],
    "answer_en": "Nonexistent",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the beloved's voice in memory?",
    "options_en": ["Fading", "Echoing constantly", "Gone", "Comforting"],
    "answer_en": "Echoing constantly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What happens to appreciation of nature's beauty?",
    "options_en": ["Enhanced", "Unnoticed", "Mocked", "Enjoyed more"],
    "answer_en": "Unnoticed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the speaker's future outlook?",
    "options_en": ["Bright", "Bleak", "Uncertain", "Promising"],
    "answer_en": "Bleak",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "How does the speaker describe nights without the beloved?",
    "options_en": ["Short and peaceful", "Endless and tormenting", "Full of dreams", "Like day"],
    "answer_en": "Endless and tormenting",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What happens to the speaker's sleep?",
    "options_en": ["It is deep and restful", "It flees from their eyes", "It is filled with nightmares", "It comes easily"],
    "answer_en": "It flees from their eyes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the beloved compared to in the poem?",
    "options_en": ["A cruel person", "The moon itself", "A distant star", "A flowing river"],
    "answer_en": "The moon itself",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What literary device is predominantly used?",
    "options_en": ["Hyperbole", "Simile", "Metaphor", "Personification"],
    "answer_en": "Simile",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What happens to the speaker's tears?",
    "options_en": ["They dry up", "They flow constantly", "They turn to joy", "They stop at night"],
    "answer_en": "They flow constantly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What century did Vidyapati live in?",
    "options_en": ["8th-9th century", "12th-13th century", "14th-15th century", "17th-18th century"],
    "answer_en": "14th-15th century",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What region is Vidyapati associated with?",
    "options_en": ["Kashmir", "Mithila", "Bengal", "Gujarat"],
    "answer_en": "Mithila",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the gender of the speaker in this poem?",
    "options_en": ["Male", "Female", "Unclear", "Both male and female"],
    "answer_en": "Female",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What happens to the speaker's appetite?",
    "options_en": ["It increases", "It disappears", "It remains normal", "It changes daily"],
    "answer_en": "It disappears",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What aspect of the moon is emphasized?",
    "options_en": ["Its brightness", "Its thinness", "Its roundness", "Its color"],
    "answer_en": "Its thinness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the poem's overall tone?",
    "options_en": ["Joyful and celebratory", "Melancholic and pained", "Angry and resentful", "Humorous and light"],
    "answer_en": "Melancholic and pained",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What happens to the speaker's beauty?",
    "options_en": ["It enhances", "It fades away", "It remains unchanged", "It becomes radiant"],
    "answer_en": "It fades away",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does the speaker long for?",
    "options_en": ["Wealth and riches", "The beloved's return", "Death and release", "Forgetfulness"],
    "answer_en": "The beloved's return",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the beloved's effect on the speaker?",
    "options_en": ["Makes them strong", "Causes them to waste away", "Brings them peace", "Makes them angry"],
    "answer_en": "Causes them to waste away",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What happens to the speaker's daily activities?",
    "options_en": ["They continue normally", "They are neglected", "They become joyful", "They increase"],
    "answer_en": "They are neglected",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the moon's phase in the comparison?",
    "options_en": ["Full moon", "New moon", "Crescent moon", "Half moon"],
    "answer_en": "Crescent moon",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What happens to the speaker's laughter?",
    "options_en": ["It becomes louder", "It disappears", "It turns to crying", "It remains occasional"],
    "answer_en": "It disappears",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the speaker's physical condition?",
    "options_en": ["Healthy and robust", "Wasting to a shadow", "Energetic and active", "Plump and well-fed"],
    "answer_en": "Wasting to a shadow",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What does the crescent moon represent emotionally?",
    "options_en": ["Hope for reunion", "The diminishing self", "New love", "Eternal beauty"],
    "answer_en": "The diminishing self",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What happens to time for the speaker?",
    "options_en": ["It flies quickly", "It drags slowly", "It stops completely", "It reverses"],
    "answer_en": "It drags slowly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the speaker's relationship to the beloved?",
    "options_en": ["Stranger", "Lover", "Parent", "Sibling"],
    "answer_en": "Lover",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What happens to the speaker's strength?",
    "options_en": ["It increases", "It ebbs away", "It remains constant", "It becomes superhuman"],
    "answer_en": "It ebbs away",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the poem's primary imagery?",
    "options_en": ["Agricultural imagery", "Celestial imagery", "Oceanic imagery", "Floral imagery"],
    "answer_en": "Celestial imagery",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What happens to the speaker's memories?",
    "options_en": ["They fade", "They torment constantly", "They bring comfort", "They disappear"],
    "answer_en": "They torment constantly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the speaker's mental state?",
    "options_en": ["Clear and focused", "Distraught and pained", "Happy and content", "Angry and vengeful"],
    "answer_en": "Distraught and pained",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What happens to the speaker's voice?",
    "options_en": ["It becomes loud", "It becomes silent", "It remains sweet", "It becomes harsh"],
    "answer_en": "It becomes silent",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the beloved's location?",
    "options_en": ["Nearby but unavailable", "Far away", "In heaven", "Unknown"],
    "answer_en": "Far away",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What happens to the speaker's bed?",
    "options_en": ["It is comfortable", "It feels like thorns", "It is shared", "It is unused"],
    "answer_en": "It feels like thorns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the speaker's wish regarding the moon?",
    "options_en": ["To become the moon", "To destroy the moon", "To bring the moon closer", "The moon should witness their pain"],
    "answer_en": "The moon should witness their pain",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What happens to the speaker's dreams?",
    "options_en": ["They are pleasant", "They are absent", "They are nightmares", "They are prophetic"],
    "answer_en": "They are absent",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the speaker's complexion like?",
    "options_en": ["Rosy and healthy", "Pale and wan", "Dark and glowing", "Golden and bright"],
    "answer_en": "Pale and wan",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What happens to the speaker's jewelry?",
    "options_en": ["Worn proudly", "Discarded", "Increased", "Traded"],
    "answer_en": "Discarded",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the moon's role in the poem?",
    "options_en": ["Comforter", "Silent witness", "Active participant", "Judge"],
    "answer_en": "Silent witness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What happens to the speaker's food?",
    "options_en": ["Tastes delicious", "Tastes like ash", "Abundant", "Spicy"],
    "answer_en": "Tastes like ash",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the speaker's posture?",
    "options_en": ["Erect and proud", "Bent with sorrow", "Lying down", "Dancing"],
    "answer_en": "Bent with sorrow",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What happens to the speaker's mirror?",
    "options_en": ["Looked at frequently", "Avoided", "Broken", "Covered"],
    "answer_en": "Avoided",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the time duration of suffering?",
    "options_en": ["A few days", "Weeks", "Months", "Years"],
    "answer_en": "Months",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What happens to the speaker's clothing?",
    "options_en": ["Fashionable and new", "Neglected and old", "Colorful", "Tight-fitting"],
    "answer_en": "Neglected and old",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the beloved's condition?",
    "options_en": ["Happy elsewhere", "Also suffering", "Indifferent", "Unaware"],
    "answer_en": "Also suffering",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What happens to the speaker's friends?",
    "options_en": ["They comfort her", "She avoids them", "They mock her", "They help her"],
    "answer_en": "She avoids them",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the moon's consistency?",
    "options_en": ["Constant companion", "Changing witness", "Unreliable", "Always full"],
    "answer_en": "Changing witness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What happens to the speaker's songs?",
    "options_en": ["Sung loudly", "Unsung", "Happy tunes", "Many new ones"],
    "answer_en": "Unsung",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is the bed's temperature?",
    "options_en": ["Warm and inviting", "Cold and lonely", "Comfortable", "Too hot"],
    "answer_en": "Cold and lonely",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What happens to daylight for the speaker?",
    "options_en": ["Welcomed joyfully", "Same as night", "Brighter than night", "Shorter than night"],
    "answer_en": "Same as night",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is the speaker's shadow like?",
    "options_en": ["Dark and strong", "Thin and faint", "Non-existent", "Double"],
    "answer_en": "Thin and faint",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What happens to seasons?",
    "options_en": ["They change normally", "All seem the same", "Spring is eternal", "Winter never comes"],
    "answer_en": "All seem the same",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is the speaker's hope level?",
    "options_en": ["Strong and constant", "Fading daily", "Completely gone", "Renewed each morning"],
    "answer_en": "Fading daily",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What happens to the moon's phase?",
    "options_en": ["It waxes to full", "It wanes to crescent", "It stays crescent", "It disappears"],
    "answer_en": "It wanes to crescent",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is the speaker's breathing like?",
    "options_en": ["Easy and regular", "Labored and sighing", "Fragrant", "Harsh"],
    "answer_en": "Labored and sighing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is the speaker's gaze like?",
    "options_en": ["Bright and lively", "Dull and vacant", "Piercing", "Laughing"],
    "answer_en": "Dull and vacant",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What happens to the speaker's sense of time?",
    "options_en": ["Accurate", "Distorted", "Nonexistent", "Precise"],
    "answer_en": "Distorted",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Who composed the original poem 'Thinner Than a Crescent'?",
    "options_en": ["Kabir", "Vidyapati", "Mirabai", "Tulsidas"],
    "answer_en": "Vidyapati",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Who translated this poem into English?",
    "options_en": ["A.K. Ramanujan", "Rachel Fell McDermott", "William Jones", "John Brough"],
    "answer_en": "Rachel Fell McDermott",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is the main subject of comparison in the poem?",
    "options_en": ["The beloved's beauty to the moon", "The lover's thinness to a crescent", "Love to a shining star", "Pain to a sharp thorn"],
    "answer_en": "The lover's thinness to a crescent",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is the primary emotion expressed in the poem?",
    "options_en": ["Joy of union", "Pain of separation", "Anger at betrayal", "Contentment in solitude"],
    "answer_en": "Pain of separation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What celestial body is used as a metaphor?",
    "options_en": ["Sun", "Moon", "Stars", "Planets"],
    "answer_en": "Moon",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What happens to the speaker's body due to separation?",
    "options_en": ["It becomes stronger", "It wastes away", "It becomes radiant", "It remains unchanged"],
    "answer_en": "It wastes away",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is the original language of the poem?",
    "options_en": ["Sanskrit", "Maithili", "Hindi", "Bengali"],
    "answer_en": "Maithili",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What poetic tradition does Vidyapati belong to?",
    "options_en": ["Bhakti poetry", "Sufi poetry", "Court poetry", "Nature poetry"],
    "answer_en": "Bhakti poetry",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What does the crescent moon symbolize?",
    "options_en": ["Fullness and completion", "Diminishment and frailty", "New beginnings", "Eternal love"],
    "answer_en": "Diminishment and frailty",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What happens to prayer or worship?",
    "options_en": ["Increased", "Nonexistent", "Ritualistic", "Angry"],
    "answer_en": "Nonexistent",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is the moon's emotional role?",
    "options_en": ["Comforter", "Mocking witness", "Participant", "Savior"],
    "answer_en": "Mocking witness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What happens to household responsibilities?",
    "options_en": ["Well performed", "Totally neglected", "Delegated", "Enjoyed"],
    "answer_en": "Totally neglected",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is the speaker's perceived age?",
    "options_en": ["Young", "Aging rapidly", "Ageless", "Old"],
    "answer_en": "Aging rapidly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What happens to appreciation of moon's beauty?",
    "options_en": ["Admired", "Hated", "Unnoticed", "Copied"],
    "answer_en": "Hated",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is the beloved's remembered scent?",
    "options_en": ["Fading", "Overpoweringly present", "Gone", "New scents replace"],
    "answer_en": "Overpoweringly present",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What happens to daily routine?",
    "options_en": ["Maintained strictly", "Completely destroyed", "Improved", "Flexible"],
    "answer_en": "Completely destroyed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is the speaker's heartbeat like?",
    "options_en": ["Strong and steady", "Faint and irregular", "Racing", "Normal"],
    "answer_en": "Faint and irregular",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What happens to dreams of reunion?",
    "options_en": ["Vivid and frequent", "Nonexistent", "Pleasant", "Prophetic"],
    "answer_en": "Nonexistent",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is the moon's reliability as symbol?",
    "options_en": ["Dependable", "Deceitful", "Constant", "Bright"],
    "answer_en": "Deceitful",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What happens to artistic expression?",
    "options_en": ["Flourishes", "Completely stops", "Changes form", "Continues normally"],
    "answer_en": "Completely stops",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is the speaker's body temperature?",
    "options_en": ["Warm", "Cold", "Feverish", "Normal"],
    "answer_en": "Cold",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What happens to sense of self?",
    "options_en": ["Strong and clear", "Lost and merged", "Changing", "Enhanced"],
    "answer_en": "Lost and merged",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is the moon's silent message?",
    "options_en": ["Hope", "Despair", "Love endures", "Time heals"],
    "answer_en": "Despair",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What happens to laughter lines on face?",
    "options_en": ["Increase", "Disappear", "Deepen", "Remain"],
    "answer_en": "Disappear",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is the speaker's reflection like?",
    "options_en": ["Clear and recognizable", "Faint and unfamiliar", "Gone", "Distorted"],
    "answer_en": "Faint and unfamiliar",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What happens to will to live?",
    "options_en": ["Strong", "Weakening", "Gone", "Renewed daily"],
    "answer_en": "Weakening",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is the moon's final poetic state?",
    "options_en": ["Full", "New", "Crescent", "Eclipsed"],
    "answer_en": "Crescent",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What happens to the speaker's identity?",
    "options_en": ["Strong and independent", "Merged with beloved's", "Lost completely", "Transformed"],
    "answer_en": "Merged with beloved's",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is the poem's view on love's nature?",
    "options_en": ["Joyful union", "Painful separation", "Temporary passion", "Divine union"],
    "answer_en": "Painful separation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What happens to the speaker's voice in company?",
    "options_en": ["Chatty", "Silent", "Angry", "Singing"],
    "answer_en": "Silent",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is the moon's changing nature compared to?",
    "options_en": ["The beloved's love", "The speaker's condition", "Time's passage", "All of these"],
    "answer_en": "The speaker's condition",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What happens to the speaker's interest in gossip?",
    "options_en": ["Increased", "None", "Selective", "Temporary"],
    "answer_en": "None",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is the speaker's bed made of metaphorically?",
    "options_en": ["Feathers", "Thorns", "Clouds", "Flowers"],
    "answer_en": "Thorns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What happens to the speaker's cooking?",
    "options_en": ["Excellent", "Neglected", "Innovative", "Shared"],
    "answer_en": "Neglected",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is the beloved's memory like?",
    "options_en": ["Fading photograph", "Burning brand", "Comforting thought", "Distant echo"],
    "answer_en": "Burning brand",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What happens to the speaker's walking pace?",
    "options_en": ["Brisk", "Slow and dragging", "Running", "Dancing"],
    "answer_en": "Slow and dragging",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is the moon's light described as?",
    "options_en": ["Comforting", "Mocking", "Healing", "Bright"],
    "answer_en": "Mocking",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What happens to the speaker's ability to concentrate?",
    "options_en": ["Improved", "Destroyed", "Selective", "Unchanged"],
    "answer_en": "Destroyed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is the crescent's thinness compared to?",
    "options_en": ["The speaker's body", "The beloved's waist", "A thread", "A hair"],
    "answer_en": "The speaker's body",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the ultimate theme of 'Thinner Than a Crescent'?",
    "options_en": ["The physical effects of love's separation", "The joy of romantic union", "Critique of societal norms", "Praise of divine love"],
    "answer_en": "The physical effects of love's separation",
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