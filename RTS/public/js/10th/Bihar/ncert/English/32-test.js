const questions = [
  {
    "num": 1,
    "question_en": "Which Tamil poet wrote 'The Empty Heart'?",
    "options_en": ["Bharathidasan", "Periasamy Thooran", "Kannadasan", "Subramania Bharati"],
    "answer_en": "Periasamy Thooran",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the primary emotion explored in 'The Empty Heart'?",
    "options_en": ["Ecstatic joy", "Profound emptiness", "Righteous anger", "Peaceful contentment"],
    "answer_en": "Profound emptiness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does the empty heart metaphorically represent?",
    "options_en": ["A vessel awaiting filling", "A broken machine", "A locked treasure", "A burning fire"],
    "answer_en": "A vessel awaiting filling",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the original language of Thooran's poem?",
    "options_en": ["Telugu", "Tamil", "Malayalam", "Kannada"],
    "answer_en": "Tamil",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What century did Periasamy Thooran primarily write in?",
    "options_en": ["18th century", "19th century", "20th century", "21st century"],
    "answer_en": "20th century",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What sensation does the poem associate with an empty heart?",
    "options_en": ["Warm fullness", "Cold hollowness", "Tight pressure", "Light floating"],
    "answer_en": "Cold hollowness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What could potentially fill the empty heart?",
    "options_en": ["Material wealth", "Love and connection", "Fame and recognition", "Knowledge and wisdom"],
    "answer_en": "Love and connection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What poetic form does Thooran employ?",
    "options_en": ["Sonnet", "Free verse", "Traditional Tamil meter", "Haiku"],
    "answer_en": "Traditional Tamil meter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What does the empty heart echo with?",
    "options_en": ["Memories of past joy", "Silence of absence", "Promises broken", "Hope for future"],
    "answer_en": "Silence of absence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What natural element is the heart compared to?",
    "options_en": ["A dry riverbed", "A full ocean", "A burning sun", "A fertile field"],
    "answer_en": "A dry riverbed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What time of day represents the heart's emptiness?",
    "options_en": ["Bright noon", "Dusk transition", "Deep midnight", "Early dawn"],
    "answer_en": "Deep midnight",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What musical metaphor is used for the heart?",
    "options_en": ["A silent instrument", "A broken drum", "An untuned veena", "A muted flute"],
    "answer_en": "A silent instrument",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What architectural space represents the heart?",
    "options_en": ["An empty mansion", "A crowded market", "A small hut", "A temple shrine"],
    "answer_en": "An empty mansion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What season symbolizes the heart's condition?",
    "options_en": ["Spring's renewal", "Summer's warmth", "Autumn's change", "Winter's barrenness"],
    "answer_en": "Winter's barrenness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does the heart thirst for?",
    "options_en": ["Water", "Emotional fulfillment", "Knowledge", "Experience"],
    "answer_en": "Emotional fulfillment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What color represents the empty heart?",
    "options_en": ["Vibrant red", "Empty white", "Dark void", "Grey neutrality"],
    "answer_en": "Dark void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What does the empty heart dream of?",
    "options_en": ["Wealth accumulation", "Emotional connection", "Physical travel", "Spiritual enlightenment"],
    "answer_en": "Emotional connection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What type of vessel is the heart compared to?",
    "options_en": ["Overflowing cup", "Empty bowl", "Sealed jar", "Broken pot"],
    "answer_en": "Empty bowl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What weather condition mirrors the heart?",
    "options_en": ["Sunny clarity", "Rainy sadness", "Dry drought", "Foggy confusion"],
    "answer_en": "Dry drought",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does the heart hunger for?",
    "options_en": ["Physical food", "Emotional nourishment", "Intellectual stimulation", "Spiritual food"],
    "answer_en": "Emotional nourishment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What artistic metaphor describes the heart?",
    "options_en": ["Blank canvas", "Finished masterpiece", "Sculpture in progress", "Faded painting"],
    "answer_en": "Blank canvas",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does the heart's emptiness feel to touch?",
    "options_en": ["Warm surface", "Cold vacuum", "Rough texture", "Smooth nothingness"],
    "answer_en": "Cold vacuum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What natural phenomenon represents emptiness?",
    "options_en": ["Empty sky after rain", "Full blooming tree", "Rushing waterfall", "Calm ocean"],
    "answer_en": "Empty sky after rain",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does the heart miss hearing?",
    "options_en": ["Laughter and conversation", "Music only", "Nature sounds", "Complete silence"],
    "answer_en": "Laughter and conversation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What room metaphor is central to the poem?",
    "options_en": ["Empty chamber", "Furnished living room", "Crowded kitchen", "Silent library"],
    "answer_en": "Empty chamber",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What musical quality is absent?",
    "options_en": ["All melody", "Only rhythm", "Just harmony", "Specific notes"],
    "answer_en": "All melody",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What does the heart reflect when empty?",
    "options_en": ["Nothingness", "Past memories", "Future hopes", "Others' faces"],
    "answer_en": "Nothingness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What season never arrives for the heart?",
    "options_en": ["Spring of love", "Summer of joy", "Autumn of maturity", "All seasons"],
    "answer_en": "Spring of love",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What architectural feature represents longing?",
    "options_en": ["Empty doorway", "Closed window", "Broken stair", "Ornate ceiling"],
    "answer_en": "Empty doorway",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does emptiness taste like?",
    "options_en": ["Sweet anticipation", "Bitter regret", "Tasteless void", "Sour disappointment"],
    "answer_en": "Tasteless void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What natural emptiness is feared?",
    "options_en": ["Dry well", "Empty nest", "Barren field", "Silent forest"],
    "answer_en": "Dry well",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What does the heart resemble at dawn?",
    "options_en": ["Renewed hope", "Continued emptiness", "Mixed emotions", "Clear purpose"],
    "answer_en": "Continued emptiness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What musical instrument's silence is emphasized?",
    "options_en": ["Veena's strings", "Drum's beat", "Flute's song", "All instruments"],
    "answer_en": "Veena's strings",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does the heart lack that nature possesses?",
    "options_en": ["Cyclical renewal", "Beauty", "Purpose", "All of these"],
    "answer_en": "Cyclical renewal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What room's echo is most painful?",
    "options_en": ["Heart's empty space", "Large hall", "Small closet", "Outdoor valley"],
    "answer_en": "Heart's empty space",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What does the empty heart see in mirrors?",
    "options_en": ["Absence of self", "Beautiful reflection", "Distorted image", "Other people"],
    "answer_en": "Absence of self",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What time feels longest in emptiness?",
    "options_en": ["Present moment", "Past memories", "Future anticipation", "All time"],
    "answer_en": "Present moment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What season's cold is within?",
    "options_en": ["Winter's deepest chill", "Autumn's first cool", "Spring's lingering cold", "Summer's absent warmth"],
    "answer_en": "Winter's deepest chill",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What vessel cannot fulfill its purpose?",
    "options_en": ["Heart meant for love", "Cup for drinking", "Bowl for food", "All vessels"],
    "answer_en": "Heart meant for love",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What does emptiness smell like?",
    "options_en": ["Fresh air", "Nothing", "Dusty absence", "Faded perfume"],
    "answer_en": "Dusty absence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What architectural ruin represents the heart?",
    "options_en": ["Abandoned palace", "Ancient temple", "Deserted home", "Crumbling fort"],
    "answer_en": "Deserted home",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What musical note is missing?",
    "options_en": ["Heart's own song", "Universal melody", "Both", "Neither"],
    "answer_en": "Heart's own song",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What natural desert exists internally?",
    "options_en": ["Emotional wasteland", "Physical desert", "Both", "Neither"],
    "answer_en": "Emotional wasteland",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does the heart's emptiness weigh?",
    "options_en": ["Heavy nothingness", "Light air", "Variable weight", "No weight"],
    "answer_en": "Heavy nothingness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What time of day amplifies the void?",
    "options_en": ["All hours equally", "Night hours", "Morning hours", "Evening hours"],
    "answer_en": "All hours equally",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What season's metaphor is most persistent?",
    "options_en": ["Endless winter", "Missed spring", "Both", "Neither"],
    "answer_en": "Endless winter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What room needs invisible furniture?",
    "options_en": ["Heart needs emotions", "Room needs chairs", "Both", "Neither"],
    "answer_en": "Heart needs emotions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What music cannot begin?",
    "options_en": ["Heart's symphony", "External concert", "Both", "Neither"],
    "answer_en": "Heart's symphony",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What natural state is antithetical to heart?",
    "options_en": ["Emotional emptiness", "Physical fullness", "Both", "Neither"],
    "answer_en": "Emotional emptiness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What vessel's emptiness is tragic?",
    "options_en": ["Heart's designed fullness", "Cup's temporary empty", "Both", "Neither"],
    "answer_en": "Heart's designed fullness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What time stands still internally?",
    "options_en": ["Emotional present", "Clock time", "Both", "Neither"],
    "answer_en": "Emotional present",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What season's change is most desired?",
    "options_en": ["To emotional spring", "To physical summer", "Both", "Neither"],
    "answer_en": "To emotional spring",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What room's echo is loneliest?",
    "options_en": ["Heart's chamber echo", "Empty house echo", "Both", "Neither"],
    "answer_en": "Heart's chamber echo",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What instrument's silence is most profound?",
    "options_en": ["Heart's silent music", "Unplayed piano", "Both", "Neither"],
    "answer_en": "Heart's silent music",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What drought is most devastating?",
    "options_en": ["Emotional drought", "Physical drought", "Both", "Neither"],
    "answer_en": "Emotional drought",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What vessel contradicts its essence?",
    "options_en": ["Empty loving heart", "Empty drinking cup", "Both", "Neither"],
    "answer_en": "Empty loving heart",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What time's passage is meaningless?",
    "options_en": ["In emotional void", "In physical world", "Both", "Neither"],
    "answer_en": "In emotional void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What season's arrival is doubted?",
    "options_en": ["Heart's spring", "Calendar spring", "Both", "Neither"],
    "answer_en": "Heart's spring",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What room's purpose is unfulfilled?",
    "options_en": ["Heart's emotional space", "House's living space", "Both", "Neither"],
    "answer_en": "Heart's emotional space",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What melody remains unplayed?",
    "options_en": ["Heart's love song", "Any song", "Both", "Neither"],
    "answer_en": "Heart's love song",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What desert lacks life's water?",
    "options_en": ["Emotional desert", "Sahara desert", "Both", "Neither"],
    "answer_en": "Emotional desert",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What container's design is frustrated?",
    "options_en": ["Heart for containing love", "Vase for flowers", "Both", "Neither"],
    "answer_en": "Heart for containing love",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What moment repeats endlessly?",
    "options_en": ["Empty present", "Joyful past", "Both", "Neither"],
    "answer_en": "Empty present",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What cold season has no end?",
    "options_en": ["Heart's winter", "Nature's winter", "Both", "Neither"],
    "answer_en": "Heart's winter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What space feels unnecessarily large?",
    "options_en": ["Heart's emotional void", "Empty building", "Both", "Neither"],
    "answer_en": "Heart's emotional void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What silence is most audible?",
    "options_en": ["Heart's emotional silence", "Physical silence", "Both", "Neither"],
    "answer_en": "Heart's emotional silence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What dryness causes most pain?",
    "options_en": ["Emotional aridity", "Physical thirst", "Both", "Neither"],
    "answer_en": "Emotional aridity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What vessel's purpose is innate?",
    "options_en": ["Heart's love capacity", "Cup's liquid holding", "Both", "Neither"],
    "answer_en": "Heart's love capacity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What clock ticks without meaning?",
    "options_en": ["Heart's emotional clock", "Wall clock", "Both", "Neither"],
    "answer_en": "Heart's emotional clock",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What seasonal cycle is broken?",
    "options_en": ["Heart's emotional seasons", "Nature's seasons", "Both", "Neither"],
    "answer_en": "Heart's emotional seasons",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What architectural emptiness is personal?",
    "options_en": ["Heart's vacant space", "House's empty rooms", "Both", "Neither"],
    "answer_en": "Heart's vacant space",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What music's absence defines identity?",
    "options_en": ["Heart's missing melody", "World's music", "Both", "Neither"],
    "answer_en": "Heart's missing melody",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What ecosystem lacks essential element?",
    "options_en": ["Heart's emotional ecosystem", "Desert ecosystem", "Both", "Neither"],
    "answer_en": "Heart's emotional ecosystem",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What container's emptiness is paradoxical?",
    "options_en": ["Heart made for fullness", "Any empty container", "Both", "Neither"],
    "answer_en": "Heart made for fullness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What time feels frozen?",
    "options_en": ["Heart's emotional time", "Clock's time", "Both", "Neither"],
    "answer_en": "Heart's emotional time",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What season's metaphor dominates?",
    "options_en": ["Perpetual winter", "All seasons", "Both", "Neither"],
    "answer_en": "Perpetual winter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What space needs invisible occupants?",
    "options_en": ["Heart needs loved ones", "House needs people", "Both", "Neither"],
    "answer_en": "Heart needs loved ones",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What orchestra remains silent?",
    "options_en": ["Heart's emotional orchestra", "Concert orchestra", "Both", "Neither"],
    "answer_en": "Heart's emotional orchestra",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What landscape lacks essential water?",
    "options_en": ["Heart's emotional landscape", "Physical landscape", "Both", "Neither"],
    "answer_en": "Heart's emotional landscape",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What vessel's design implies fulfillment?",
    "options_en": ["Heart implies love", "Cup implies drink", "Both", "Neither"],
    "answer_en": "Heart implies love",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What clock's hands move without progress?",
    "options_en": ["Heart's emotional clock", "Broken clock", "Both", "Neither"],
    "answer_en": "Heart's emotional clock",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What season's calendar is internal?",
    "options_en": ["Heart's emotional season", "Meteorological season", "Both", "Neither"],
    "answer_en": "Heart's emotional season",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What mansion lacks essential residents?",
    "options_en": ["Heart lacks emotions", "House lacks people", "Both", "Neither"],
    "answer_en": "Heart lacks emotions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What symphony lacks instruments?",
    "options_en": ["Heart's emotional symphony", "Musical symphony", "Both", "Neither"],
    "answer_en": "Heart's emotional symphony",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What desert's oasis is memory?",
    "options_en": ["Heart's past love memories", "Desert's actual oasis", "Both", "Neither"],
    "answer_en": "Heart's past love memories",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What bowl's emptiness is unnatural?",
    "options_en": ["Heart's emotional bowl", "Physical bowl", "Both", "Neither"],
    "answer_en": "Heart's emotional bowl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What hour feels identical?",
    "options_en": ["Every hour in emptiness", "Specific hours", "Both", "Neither"],
    "answer_en": "Every hour in emptiness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What winter has no forecasted end?",
    "options_en": ["Heart's emotional winter", "Seasonal winter", "Both", "Neither"],
    "answer_en": "Heart's emotional winter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What chamber's size is overwhelming?",
    "options_en": ["Heart's emotional chamber", "Physical chamber", "Both", "Neither"],
    "answer_en": "Heart's emotional chamber",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What concert never begins?",
    "options_en": ["Heart's emotional concert", "Scheduled concert", "Both", "Neither"],
    "answer_en": "Heart's emotional concert",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What well's depth is frightening?",
    "options_en": ["Heart's emotional void", "Physical well", "Both", "Neither"],
    "answer_en": "Heart's emotional void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What cup's design suggests use?",
    "options_en": ["Heart for loving", "Cup for drinking", "Both", "Neither"],
    "answer_en": "Heart for loving",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What moment expands infinitely?",
    "options_en": ["Empty present moment", "Joyful moment", "Both", "Neither"],
    "answer_en": "Empty present moment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What coldness permeates everything?",
    "options_en": ["Emotional winter's cold", "Physical cold", "Both", "Neither"],
    "answer_en": "Emotional winter's cold",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What hall's emptiness echoes loudest?",
    "options_en": ["Heart's emotional hall", "Physical hall", "Both", "Neither"],
    "answer_en": "Heart's emotional hall",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What music's silence is defining?",
    "options_en": ["Heart's silent emotions", "Actual silence", "Both", "Neither"],
    "answer_en": "Heart's silent emotions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What drought affects core being?",
    "options_en": ["Emotional essence drought", "Physical drought", "Both", "Neither"],
    "answer_en": "Emotional essence drought",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What vessel's emptiness is central theme?",
    "options_en": ["Heart as emotional vessel", "Any vessel", "Both", "Neither"],
    "answer_en": "Heart as emotional vessel",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What temporal experience is emphasized?",
    "options_en": ["Timeless emptiness", "Clock time", "Both", "Neither"],
    "answer_en": "Timeless emptiness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the poem's core exploration?",
    "options_en": ["Nature of emotional emptiness", "Physical descriptions", "Both", "Neither"],
    "answer_en": "Nature of emotional emptiness",
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