const questions = [
  {
    "num": 1,
    "question_en": "What is the main environmental concern with polythene bags?",
    "options_en": ["They are expensive", "They are non-biodegradable", "They are colorful", "They are reusable"],
    "answer_en": "They are non-biodegradable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "How long does a polythene bag take to decompose?",
    "options_en": ["1 week", "1 month", "1 year", "Hundreds of years"],
    "answer_en": "Hundreds of years",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is a major threat to marine life from polythene bags?",
    "options_en": ["They provide shelter", "Animals mistake them for food", "They clean the water", "They attract fish"],
    "answer_en": "Animals mistake them for food",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the best alternative to polythene bags?",
    "options_en": ["Paper bags", "Cloth bags", "More polythene", "No bags"],
    "answer_en": "Cloth bags",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What happens when polythene bags are burned?",
    "options_en": ["They turn to water", "They release toxic fumes", "They become fertilizer", "They disappear completely"],
    "answer_en": "They release toxic fumes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "How do polythene bags affect soil?",
    "options_en": ["Improve fertility", "Reduce soil fertility", "Make soil colorful", "Have no effect"],
    "answer_en": "Reduce soil fertility",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'Reduce, Reuse, Recycle' called?",
    "options_en": ["The 3 R's", "The 3 B's", "The 3 P's", "The 3 S's"],
    "answer_en": "The 3 R's",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What animal often dies from eating polythene bags?",
    "options_en": ["Cows", "Dogs", "Cats", "Birds"],
    "answer_en": "Cows",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What do polythene bags block in drainage systems?",
    "options_en": ["Water flow", "Air flow", "Light", "Sound"],
    "answer_en": "Water flow",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is polythene made from?",
    "options_en": ["Wood", "Petroleum", "Cotton", "Metal"],
    "answer_en": "Petroleum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What percentage of polythene bags are recycled?",
    "options_en": ["1-3%", "50%", "75%", "100%"],
    "answer_en": "1-3%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "How many polythene bags are used worldwide each year?",
    "options_en": ["Thousands", "Millions", "Billions", "Trillions"],
    "answer_en": "Trillions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the average use time of a polythene bag?",
    "options_en": ["12 minutes", "1 hour", "1 day", "1 week"],
    "answer_en": "12 minutes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What ocean has a 'Great Pacific Garbage Patch'?",
    "options_en": ["Atlantic", "Pacific", "Indian", "Arctic"],
    "answer_en": "Pacific",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What do polythene bags break down into?",
    "options_en": ["Microplastics", "Water", "Oxygen", "Fertilizer"],
    "answer_en": "Microplastics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is a jute bag alternative?",
    "options_en": ["Biodegradable bag", "Plastic bag", "Metal bag", "Glass bag"],
    "answer_en": "Biodegradable bag",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What government action helps reduce plastic bags?",
    "options_en": ["Ban or tax", "Free distribution", "More production", "No action"],
    "answer_en": "Ban or tax",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is photodegradation?",
    "options_en": ["Breaking by light", "Breaking by water", "Breaking by air", "Breaking by heat"],
    "answer_en": "Breaking by light",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What do turtles mistake for jellyfish?",
    "options_en": ["Polythene bags", "Seaweed", "Rocks", "Fish"],
    "answer_en": "Polythene bags",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does 'biodegradable' mean?",
    "options_en": ["Breaks naturally", "Lasts forever", "Made of plastic", "Very strong"],
    "answer_en": "Breaks naturally",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What happens in landfills with polythene?",
    "options_en": ["Decomposes quickly", "Stays for centuries", "Turns to soil", "Produces oxygen"],
    "answer_en": "Stays for centuries",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What country first banned plastic bags?",
    "options_en": ["Bangladesh", "USA", "China", "India"],
    "answer_en": "Bangladesh",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What year did Bangladesh ban plastic bags?",
    "options_en": ["1990", "2002", "2010", "2015"],
    "answer_en": "2002",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is better than recycling?",
    "options_en": ["Reducing use", "Making more", "Burning", "Throwing away"],
    "answer_en": "Reducing use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What do microplastics enter?",
    "options_en": ["Food chain", "Air only", "Space", "Computers"],
    "answer_en": "Food chain",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is a carry bag made of natural materials?",
    "options_en": ["Cotton bag", "Plastic bag", "Nylon bag", "Polyester bag"],
    "answer_en": "Cotton bag",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What percentage of plastic waste is bags?",
    "options_en": ["10%", "25%", "50%", "75%"],
    "answer_en": "10%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is litter?",
    "options_en": ["Waste in wrong place", "Recycled material", "Useful item", "Natural resource"],
    "answer_en": "Waste in wrong place",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What do companies call 'greenwashing'?",
    "options_en": ["False eco-claims", "Real recycling", "Proper disposal", "Good manufacturing"],
    "answer_en": "False eco-claims",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is an eco-friendly bag?",
    "options_en": ["Reusable cloth bag", "Single-use plastic", "Thin plastic", "Colorful plastic"],
    "answer_en": "Reusable cloth bag",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What do bags cause during floods?",
    "options_en": ["Block drainage", "Clean water", "Reduce water", "Add color"],
    "answer_en": "Block drainage",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is polyethylene?",
    "options_en": ["Plastic type", "Paper type", "Metal type", "Glass type"],
    "answer_en": "Plastic type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What does 'single-use' mean?",
    "options_en": ["Used once", "Used many times", "Never used", "Reused often"],
    "answer_en": "Used once",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is better than throwing away?",
    "options_en": ["Reusing", "Burning", "Burying", "Ignoring"],
    "answer_en": "Reusing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What do birds use for nests sometimes?",
    "options_en": ["Plastic bags", "Only twigs", "Only leaves", "Only mud"],
    "answer_en": "Plastic bags",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is a waste hierarchy?",
    "options_en": ["Reduce, Reuse, Recycle", "Buy, Use, Throw", "Make, Take, Waste", "Produce, Consume, Discard"],
    "answer_en": "Reduce, Reuse, Recycle",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What do bags release when degrading?",
    "options_en": ["Harmful chemicals", "Fresh air", "Clean water", "Nutrients"],
    "answer_en": "Harmful chemicals",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'plastic soup'?",
    "options_en": ["Ocean plastic pollution", "Clean ocean", "Ocean without plastic", "Ocean with fish only"],
    "answer_en": "Ocean plastic pollution",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What country uses most plastic bags?",
    "options_en": ["China", "USA", "India", "All equally"],
    "answer_en": "China",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'bring your own bag'?",
    "options_en": ["BYOB movement", "Buy new bags", "Use store bags", "No bag policy"],
    "answer_en": "BYOB movement",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What do bags kill in oceans?",
    "options_en": ["Marine mammals", "Only fish", "Only plants", "Nothing"],
    "answer_en": "Marine mammals",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is compostable?",
    "options_en": ["Breaks into compost", "Lasts forever", "Made of plastic", "Very strong"],
    "answer_en": "Breaks into compost",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What do bags trap on land?",
    "options_en": ["Animals", "Only insects", "Only plants", "Nothing"],
    "answer_en": "Animals",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'extended producer responsibility'?",
    "options_en": ["Maker manages waste", "Consumer manages", "Government manages", "No one manages"],
    "answer_en": "Maker manages waste",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What do bags look like to sea animals?",
    "options_en": ["Food", "Predators", "Shelter", "Nothing"],
    "answer_en": "Food",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is better: paper or plastic?",
    "options_en": ["Neither, use cloth", "Paper always", "Plastic always", "Both equal"],
    "answer_en": "Neither, use cloth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is plastic bag 'levy'?",
    "options_en": ["Extra charge", "Discount", "Free gift", "Reward"],
    "answer_en": "Extra charge",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What do bags reduce in soil?",
    "options_en": ["Water absorption", "Air only", "Color only", "Nothing"],
    "answer_en": "Water absorption",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'circular economy'?",
    "options_en": ["Reuse everything", "Use once only", "Make more waste", "Buy new always"],
    "answer_en": "Reuse everything",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What do bags cause in cities?",
    "options_en": ["Visual pollution", "Beauty", "Cleanliness", "Order"],
    "answer_en": "Visual pollution",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 'plastic footprint'?",
    "options_en": ["Personal plastic use", "Shoe size", "Height measure", "Water use"],
    "answer_en": "Personal plastic use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What breaks bags into pieces?",
    "options_en": ["Sunlight and waves", "Fish eating", "Plant growth", "Clean water"],
    "answer_en": "Sunlight and waves",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is 'zero waste' goal?",
    "options_en": ["No trash to landfill", "More landfills", "Burn all waste", "Ignore waste"],
    "answer_en": "No trash to landfill",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What do bags contaminate?",
    "options_en": ["Recycling streams", "Only water", "Only air", "Nothing"],
    "answer_en": "Recycling streams",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 'upcycling'?",
    "options_en": ["Creative reuse", "Throwing away", "Burning", "Burying"],
    "answer_en": "Creative reuse",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What do bags affect in agriculture?",
    "options_en": ["Crop growth", "Only soil color", "Only air", "Nothing"],
    "answer_en": "Crop growth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is 'plastic free July'?",
    "options_en": ["Month without plastic", "Month with more", "Plastic celebration", "Plastic production"],
    "answer_en": "Month without plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What do bags release when making?",
    "options_en": ["Greenhouse gases", "Clean air", "Fresh water", "Oxygen"],
    "answer_en": "Greenhouse gases",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'carry bag' in Hindi?",
    "options_en": ["Thaila", "Kapda", "Kagaz", "Lakdi"],
    "answer_en": "Thaila",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What do bags kill yearly?",
    "options_en": ["100,000+ animals", "No animals", "Only fish", "Only birds"],
    "answer_en": "100,000+ animals",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'plasticulture'?",
    "options_en": ["Plastic in farming", "Plastic art", "Plastic music", "Plastic food"],
    "answer_en": "Plastic in farming",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What do bags reduce in landfills?",
    "options_en": ["Space for real waste", "Air pollution", "Water pollution", "Nothing"],
    "answer_en": "Space for real waste",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 'marine debris'?",
    "options_en": ["Ocean litter", "Clean ocean", "Ocean fish", "Ocean plants"],
    "answer_en": "Ocean litter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What do bags cause during monsoon?",
    "options_en": ["Waterlogging", "Clean streets", "Less rain", "More rain"],
    "answer_en": "Waterlogging",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is 'plastic neutral'?",
    "options_en": ["Offset plastic use", "Use more plastic", "Ignore plastic", "Celebrate plastic"],
    "answer_en": "Offset plastic use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What do bags impact in water bodies?",
    "options_en": ["Oxygen levels", "Only color", "Only taste", "Nothing"],
    "answer_en": "Oxygen levels",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'plastic bank'?",
    "options_en": ["Exchange plastic for money", "Store plastic", "Make plastic", "Sell plastic"],
    "answer_en": "Exchange plastic for money",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What do bags affect in rivers?",
    "options_en": ["Aquatic life", "River color only", "River sound", "Nothing"],
    "answer_en": "Aquatic life",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is 'plastic audit'?",
    "options_en": ["Track plastic use", "Make plastic", "Sell plastic", "Ignore plastic"],
    "answer_en": "Track plastic use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What do bags contribute to climate change?",
    "options_en": ["Carbon emissions", "Cooling effect", "No effect", "Positive effect"],
    "answer_en": "Carbon emissions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is 'precycling'?",
    "options_en": ["Avoid buying plastic", "Recycle after use", "Burn plastic", "Bury plastic"],
    "answer_en": "Avoid buying plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What do bags harm in forests?",
    "options_en": ["Wild animals", "Only trees", "Only air", "Nothing"],
    "answer_en": "Wild animals",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 'plastic diet'?",
    "options_en": ["Reduce plastic use", "Eat plastic", "Make plastic", "Store plastic"],
    "answer_en": "Reduce plastic use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What do bags prevent in soil?",
    "options_en": ["Seed germination", "Only water flow", "Only air flow", "Nothing"],
    "answer_en": "Seed germination",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is 'plastic offset'?",
    "options_en": ["Remove equal plastic", "Add more plastic", "Ignore plastic", "Celebrate plastic"],
    "answer_en": "Remove equal plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What do bags cause in stomachs of animals?",
    "options_en": ["Starvation", "Better digestion", "More energy", "Health"],
    "answer_en": "Starvation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 'plastic smart city'?",
    "options_en": ["City reducing plastic", "City using more", "City ignoring", "City producing"],
    "answer_en": "City reducing plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What do bags release in water?",
    "options_en": ["Toxic additives", "Nutrients", "Oxygen", "Clean water"],
    "answer_en": "Toxic additives",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'plastic pledge'?",
    "options_en": ["Promise to reduce plastic", "Promise to use more", "Ignore plastic", "Make plastic"],
    "answer_en": "Promise to reduce plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What do bags reduce in ecosystems?",
    "options_en": ["Biodiversity", "Only plant number", "Only animal size", "Nothing"],
    "answer_en": "Biodiversity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 'plastic free community'?",
    "options_en": ["Area reducing plastic", "Area using more", "Area ignoring", "Area producing"],
    "answer_en": "Area reducing plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What do bags affect in beaches?",
    "options_en": ["Tourism", "Only sand color", "Only water taste", "Nothing"],
    "answer_en": "Tourism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'plastic literacy'?",
    "options_en": ["Understanding plastic impact", "Making plastic", "Using plastic", "Ignoring plastic"],
    "answer_en": "Understanding plastic impact",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What do bags cause in recycling machines?",
    "options_en": ["Jamming", "Better working", "Cleaning", "Speed increase"],
    "answer_en": "Jamming",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 'plastic free school'?",
    "options_en": ["School reducing plastic", "School using more", "School ignoring", "School producing"],
    "answer_en": "School reducing plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What do bags reduce in composting?",
    "options_en": ["Quality of compost", "Only smell", "Only color", "Nothing"],
    "answer_en": "Quality of compost",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is 'plastic free wedding'?",
    "options_en": ["Wedding without plastic", "Wedding with more", "Wedding ignoring", "Wedding producing"],
    "answer_en": "Wedding without plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What do bags affect in groundwater?",
    "options_en": ["Quality", "Only level", "Only temperature", "Nothing"],
    "answer_en": "Quality",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'plastic free picnic'?",
    "options_en": ["Picnic without plastic", "Picnic with more", "Picnic ignoring", "Picnic producing"],
    "answer_en": "Picnic without plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What do bags cause in sewer systems?",
    "options_en": ["Blockages", "Cleaning", "Better flow", "No effect"],
    "answer_en": "Blockages",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is 'plastic free office'?",
    "options_en": ["Office reducing plastic", "Office using more", "Office ignoring", "Office producing"],
    "answer_en": "Office reducing plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What do bags reduce in fishing?",
    "options_en": ["Fish catch", "Only net strength", "Only boat speed", "Nothing"],
    "answer_en": "Fish catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'plastic free festival'?",
    "options_en": ["Festival without plastic", "Festival with more", "Festival ignoring", "Festival producing"],
    "answer_en": "Festival without plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What do bags affect in recycling economy?",
    "options_en": ["Efficiency", "Only color", "Only smell", "Nothing"],
    "answer_en": "Efficiency",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 'plastic free challenge'?",
    "options_en": ["Try living without plastic", "Use more plastic", "Ignore plastic", "Make plastic"],
    "answer_en": "Try living without plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What do bags cause in agricultural fields?",
    "options_en": ["Reduced yield", "Increased yield", "No effect", "Better growth"],
    "answer_en": "Reduced yield",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 'plastic free home'?",
    "options_en": ["Home reducing plastic", "Home using more", "Home ignoring", "Home producing"],
    "answer_en": "Home reducing plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What do bags reduce in waste management?",
    "options_en": ["Effectiveness", "Only cost", "Only time", "Nothing"],
    "answer_en": "Effectiveness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 'plastic free future'?",
    "options_en": ["World with less plastic", "World with more", "World ignoring", "World producing"],
    "answer_en": "World with less plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is everyone's responsibility regarding polythene bags?",
    "options_en": ["Reduce, reuse, recycle", "Use more bags", "Throw anywhere", "Ignore problem"],
    "answer_en": "Reduce, reuse, recycle",
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