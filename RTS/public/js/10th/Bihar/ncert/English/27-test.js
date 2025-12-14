const questions = [
  {
    "num": 1,
    "question_en": "What is the biggest environmental issue with polythene bags?",
    "options_en": ["They are expensive", "They never fully decompose", "They are too colorful", "They are too strong"],
    "answer_en": "They never fully decompose",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "How long can a plastic bag take to break down?",
    "options_en": ["1-5 years", "10-20 years", "100-500 years", "1000+ years"],
    "answer_en": "1000+ years",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What ocean creature mistakes plastic bags for food?",
    "options_en": ["Sharks", "Sea turtles", "Octopus", "Jellyfish"],
    "answer_en": "Sea turtles",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the best replacement for plastic shopping bags?",
    "options_en": ["Thicker plastic bags", "Reusable cloth bags", "Paper bags (single use)", "No bags at all"],
    "answer_en": "Reusable cloth bags",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What dangerous chemicals release when burning plastic bags?",
    "options_en": ["Oxygen and nitrogen", "Water vapor", "Toxic dioxins", "Carbon dioxide only"],
    "answer_en": "Toxic dioxins",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "How do plastic bags harm farmland?",
    "options_en": ["Improve soil quality", "Block water and air in soil", "Add nutrients", "Help plants grow"],
    "answer_en": "Block water and air in soil",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What percentage of plastic bags actually get recycled?",
    "options_en": ["Less than 10%", "About 25%", "About 50%", "Over 75%"],
    "answer_en": "Less than 10%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What common street animal in India eats plastic bags?",
    "options_en": ["Dogs", "Cows", "Cats", "Goats"],
    "answer_en": "Cows",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What problem do bags cause in city drains?",
    "options_en": ["Clean the water", "Cause flooding by blocking", "Improve flow", "Add oxygen"],
    "answer_en": "Cause flooding by blocking",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What raw material makes plastic bags?",
    "options_en": ["Wood pulp", "Cotton", "Petroleum oil", "Sand"],
    "answer_en": "Petroleum oil",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "How many plastic bags are used globally each year?",
    "options_en": ["Millions", "Billions", "Trillions", "Quadrillions"],
    "answer_en": "Trillions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the typical use time for a plastic bag?",
    "options_en": ["12 minutes", "1 hour", "1 day", "1 week"],
    "answer_en": "12 minutes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Where is the Great Pacific Garbage Patch located?",
    "options_en": ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
    "answer_en": "Pacific Ocean",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What do plastic bags break into over time?",
    "options_en": ["Tiny plastic pieces", "Natural fibers", "Water and air", "Soil nutrients"],
    "answer_en": "Tiny plastic pieces",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which country first banned thin plastic bags?",
    "options_en": ["USA", "Bangladesh", "China", "UK"],
    "answer_en": "Bangladesh",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "When did Bangladesh ban plastic bags?",
    "options_en": ["1990", "2002", "2010", "2018"],
    "answer_en": "2002",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which 'R' is most important: Reduce, Reuse, Recycle?",
    "options_en": ["Reduce", "Reuse", "Recycle", "All equal"],
    "answer_en": "Reduce",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What breaks plastic in sunlight?",
    "options_en": ["Photodegradation", "Biodegradation", "Water erosion", "Wind action"],
    "answer_en": "Photodegradation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What sea animal thinks bags are jellyfish?",
    "options_en": ["Whales", "Turtles", "Dolphins", "Seals"],
    "answer_en": "Turtles",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does 'compostable' mean?",
    "options_en": ["Breaks down in compost", "Lasts forever", "Made of plastic", "Very strong"],
    "answer_en": "Breaks down in compost",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What happens to bags in landfills?",
    "options_en": ["Disappear quickly", "Stay for centuries", "Help other waste", "Produce fertilizer"],
    "answer_en": "Stay for centuries",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which country uses most plastic bags per person?",
    "options_en": ["India", "China", "USA", "Germany"],
    "answer_en": "USA",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What's wrong with paper bag alternative?",
    "options_en": ["Uses more energy", "Too expensive", "Not strong enough", "Too heavy"],
    "answer_en": "Uses more energy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "How do microplastics enter humans?",
    "options_en": ["Through food and water", "Through air only", "Through skin only", "They don't"],
    "answer_en": "Through food and water",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What traditional Indian bag is eco-friendly?",
    "options_en": ["Jute bag", "Nylon bag", "Polyester bag", "Plastic bag"],
    "answer_en": "Jute bag",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What percent of litter is plastic?",
    "options_en": ["10%", "30%", "60%", "90%"],
    "answer_en": "60%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 'greenwashing'?",
    "options_en": ["False eco-claims", "Using green color", "Real recycling", "Planting trees"],
    "answer_en": "False eco-claims",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What monsoon problem do bags cause?",
    "options_en": ["Waterlogging", "Drought", "Clean streets", "Less rain"],
    "answer_en": "Waterlogging",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is plastic's chemical name?",
    "options_en": ["Polyethylene", "Polywood", "Polycotton", "Polysoil"],
    "answer_en": "Polyethylene",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is single-use plastic?",
    "options_en": ["Used once then thrown", "Reused many times", "Biodegradable", "Compostable"],
    "answer_en": "Used once then thrown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What does BYOB mean?",
    "options_en": ["Bring Your Own Bag", "Buy Your Own Bottle", "Bring Your Own Box", "Buy Your Own Bag"],
    "answer_en": "Bring Your Own Bag",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which animal is harmed by eating bags?",
    "options_en": ["Land animals only", "Sea animals only", "Both land and sea", "No animals"],
    "answer_en": "Both land and sea",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Who should manage plastic waste?",
    "options_en": ["Only government", "Only consumers", "Manufacturers too", "No one"],
    "answer_en": "Manufacturers too",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What natural bag decomposes fastest?",
    "options_en": ["Cotton", "Jute", "Paper", "All same"],
    "answer_en": "Paper",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is plastic bag tax?",
    "options_en": ["Extra charge to reduce use", "Discount for buying", "Free bag program", "Manufacturing tax"],
    "answer_en": "Extra charge to reduce use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "How do bags affect soil water?",
    "options_en": ["Improve absorption", "Block absorption", "Add water", "No effect"],
    "answer_en": "Block absorption",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is circular economy?",
    "options_en": ["Reuse everything", "Use and throw", "Make more waste", "Only new products"],
    "answer_en": "Reuse everything",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What pollution do bags cause?",
    "options_en": ["Visual pollution", "Beautiful scenery", "Clean environment", "No pollution"],
    "answer_en": "Visual pollution",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is plastic footprint?",
    "options_en": ["Personal plastic use", "Factory size", "Recycling rate", "Bag thickness"],
    "answer_en": "Personal plastic use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What breaks bags into microplastics?",
    "options_en": ["Sun and waves", "Fish eating them", "Plants growing", "Clean water"],
    "answer_en": "Sun and waves",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is zero waste goal?",
    "options_en": ["No trash to landfill", "More landfills", "Burn all waste", "Export waste"],
    "answer_en": "No trash to landfill",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "How do bags mess up recycling?",
    "options_en": ["Tangle in machines", "Make recycling easy", "Clean other waste", "No effect"],
    "answer_en": "Tangle in machines",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is upcycling bags?",
    "options_en": ["Make new useful things", "Throw away", "Burn them", "Bury them"],
    "answer_en": "Make new useful things",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "How do bags affect crops?",
    "options_en": ["Help growth", "Reduce yield", "No effect", "Add nutrients"],
    "answer_en": "Reduce yield",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is Plastic Free July?",
    "options_en": ["Month without plastic", "Plastic sale month", "Make plastic month", "Ignore plastic month"],
    "answer_en": "Month without plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What gas comes from making bags?",
    "options_en": ["Oxygen", "Carbon dioxide", "Clean air", "Water vapor"],
    "answer_en": "Carbon dioxide",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is cloth bag in Hindi?",
    "options_en": ["Kapda ka thaila", "Plastic ka thaila", "Kagaz ka thaila", "Lakdi ka thaila"],
    "answer_en": "Kapda ka thaila",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "How many birds die from plastic yearly?",
    "options_en": ["Thousands", "Millions", "Billions", "None"],
    "answer_en": "Millions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is plasticulture?",
    "options_en": ["Plastic in farming", "Plastic art", "Plastic music", "Plastic food"],
    "answer_en": "Plastic in farming",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What space do bags waste in landfills?",
    "options_en": ["No space", "Little space", "Much space", "All space"],
    "answer_en": "Much space",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is marine debris mainly?",
    "options_en": ["Plastic", "Wood", "Metal", "Glass"],
    "answer_en": "Plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What urban flooding cause?",
    "options_en": ["Bag blockages", "Too much rain only", "Less drainage", "No reason"],
    "answer_en": "Bag blockages",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What does plastic neutral mean?",
    "options_en": ["Collect equal plastic used", "Use no plastic", "Use only plastic", "Ignore plastic"],
    "answer_en": "Collect equal plastic used",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "How do bags affect water oxygen?",
    "options_en": ["Increase oxygen", "Reduce oxygen", "No effect", "Create oxygen"],
    "answer_en": "Reduce oxygen",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is Plastic Bank?",
    "options_en": ["Trade plastic for goods", "Bank with plastic money", "Plastic factory", "Plastic store"],
    "answer_en": "Trade plastic for goods",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "How do bags hurt rivers?",
    "options_en": ["Help fish", "Harm aquatic life", "Clean water", "No effect"],
    "answer_en": "Harm aquatic life",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is plastic audit?",
    "options_en": ["Track plastic use", "Make plastic", "Sell plastic", "Ignore plastic"],
    "answer_en": "Track plastic use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What climate impact from bags?",
    "options_en": ["Global warming", "Cooling", "No effect", "More rain"],
    "answer_en": "Global warming",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is precycling?",
    "options_en": ["Avoid buying plastic", "Recycle after use", "Burn plastic", "Bury plastic"],
    "answer_en": "Avoid buying plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "How do bags harm forests?",
    "options_en": ["Help animals", "Trap and kill animals", "No effect", "Feed animals"],
    "answer_en": "Trap and kill animals",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is plastic diet?",
    "options_en": ["Reduce plastic use", "Eat plastic", "Make plastic", "Sell plastic"],
    "answer_en": "Reduce plastic use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "How do bags affect seeds?",
    "options_en": ["Help germination", "Prevent growth", "No effect", "Speed growth"],
    "answer_en": "Prevent growth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is plastic offset?",
    "options_en": ["Remove equal plastic", "Add more plastic", "Ignore plastic", "Celebrate plastic"],
    "answer_en": "Remove equal plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Why do animals starve with bags?",
    "options_en": ["Block stomach", "Provide food", "No effect", "Give energy"],
    "answer_en": "Block stomach",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is Plastic Smart City?",
    "options_en": ["City reducing plastic", "City using more", "City ignoring", "City producing"],
    "answer_en": "City reducing plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What chemicals from bags in water?",
    "options_en": ["Toxic chemicals", "Nutrients", "Oxygen", "Clean water"],
    "answer_en": "Toxic chemicals",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is plastic pledge?",
    "options_en": ["Promise to reduce plastic", "Promise to use more", "Ignore plastic", "Make plastic"],
    "answer_en": "Promise to reduce plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "How do bags affect wildlife variety?",
    "options_en": ["Increase variety", "Reduce variety", "No effect", "Create new species"],
    "answer_en": "Reduce variety",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is plastic-free community?",
    "options_en": ["Area reducing plastic", "Area using more", "Area ignoring", "Area producing"],
    "answer_en": "Area reducing plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "How do bags affect beaches?",
    "options_en": ["Attract tourists", "Drive tourists away", "No effect", "Clean beaches"],
    "answer_en": "Drive tourists away",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is plastic literacy?",
    "options_en": ["Understand plastic impact", "Make plastic", "Use plastic", "Ignore plastic"],
    "answer_en": "Understand plastic impact",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Why bags jam machines?",
    "options_en": ["Tangle easily", "Dissolve", "Too small", "Magnetic"],
    "answer_en": "Tangle easily",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is plastic-free school?",
    "options_en": ["School reducing plastic", "School using more", "School ignoring", "School producing"],
    "answer_en": "School reducing plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "How do bags ruin compost?",
    "options_en": ["Add microplastics", "Improve compost", "No effect", "Speed process"],
    "answer_en": "Add microplastics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is plastic-free wedding?",
    "options_en": ["Wedding without plastic", "Wedding with plastic", "Plastic theme", "Ignore plastic"],
    "answer_en": "Wedding without plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "How do bags pollute groundwater?",
    "options_en": ["Leach chemicals", "Clean water", "No effect", "Add minerals"],
    "answer_en": "Leach chemicals",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is plastic-free picnic?",
    "options_en": ["Picnic without plastic", "Picnic with plastic", "Plastic food", "Ignore plastic"],
    "answer_en": "Picnic without plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What sewer problems?",
    "options_en": ["Blockages", "Better flow", "No effect", "Clean pipes"],
    "answer_en": "Blockages",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is plastic-free office?",
    "options_en": ["Office reducing plastic", "Office using more", "Office ignoring", "Office producing"],
    "answer_en": "Office reducing plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "How do bags hurt fishing?",
    "options_en": ["Damage nets", "Help fishing", "No effect", "Attract fish"],
    "answer_en": "Damage nets",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is plastic-free festival?",
    "options_en": ["Festival reducing plastic", "Festival using more", "Festival ignoring", "Festival producing"],
    "answer_en": "Festival reducing plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "How do bags affect recycling cost?",
    "options_en": ["Increase cost", "Reduce cost", "No effect", "Make free"],
    "answer_en": "Increase cost",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is plastic-free challenge?",
    "options_en": ["Try without plastic", "Use more plastic", "Make plastic", "Sell plastic"],
    "answer_en": "Try without plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "How do bags affect farms?",
    "options_en": ["Reduce production", "Increase production", "No effect", "Improve soil"],
    "answer_en": "Reduce production",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is plastic-free home?",
    "options_en": ["Home reducing plastic", "Home using more", "Home ignoring", "Home producing"],
    "answer_en": "Home reducing plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "How do bags affect waste management?",
    "options_en": ["Make it harder", "Make easier", "No effect", "Improve system"],
    "answer_en": "Make it harder",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is plastic-free future?",
    "options_en": ["World with less plastic", "World with more", "World ignoring", "World producing"],
    "answer_en": "World with less plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What does Swachh Bharat say about bags?",
    "options_en": ["Discourage use", "Encourage use", "Ignore", "Promote"],
    "answer_en": "Discourage use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which Indian state banned first?",
    "options_en": ["Himachal Pradesh", "Maharashtra", "Kerala", "Tamil Nadu"],
    "answer_en": "Himachal Pradesh",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "When India ban single-use plastic?",
    "options_en": ["2020", "2022", "2024", "Not yet"],
    "answer_en": "2022",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is bagasse?",
    "options_en": ["Sugarcane waste bag", "Plastic bag", "Paper bag", "Cloth bag"],
    "answer_en": "Sugarcane waste bag",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What thickness banned in India?",
    "options_en": ["Below 75 microns", "Below 50 microns", "Below 25 microns", "All thickness"],
    "answer_en": "Below 75 microns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What percent ocean plastic from land?",
    "options_en": ["80%", "50%", "30%", "10%"],
    "answer_en": "80%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What cost of plastic pollution yearly?",
    "options_en": ["$13 billion", "$1 billion", "$100 million", "$1 trillion"],
    "answer_en": "$13 billion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What UN deal on plastic?",
    "options_en": ["Global Plastic Treaty", "Paris Agreement", "Kyoto Protocol", "No deal"],
    "answer_en": "Global Plastic Treaty",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What best individual action?",
    "options_en": ["Use reusable bags", "Recycle bags", "Burn bags", "Proper bin"],
    "answer_en": "Use reusable bags",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "Cloth vs plastic bags?",
    "options_en": ["Cloth if reused often", "Plastic always better", "Both equal", "Depends"],
    "answer_en": "Cloth if reused often",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Main recycling problem?",
    "options_en": ["Low value", "High value", "Easy to do", "High demand"],
    "answer_en": "Low value",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What helps biodegradable bags?",
    "options_en": ["Special additives", "More thickness", "More color", "More strength"],
    "answer_en": "Special additives",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What ultimate solution?",
    "options_en": ["Change production and use", "Better recycling", "More landfills", "Export waste"],
    "answer_en": "Change production and use",
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