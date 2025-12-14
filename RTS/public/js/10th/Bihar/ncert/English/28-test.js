const questions = [
  {
    "num": 1,
    "question_en": "What environmental problem is caused by polythene bags?",
    "options_en": ["They decompose quickly", "They pollute for centuries", "They improve soil quality", "They clean water"],
    "answer_en": "They pollute for centuries",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "How long does a plastic bag persist in the environment?",
    "options_en": ["1 month", "1 year", "100 years", "1000+ years"],
    "answer_en": "1000+ years",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which marine animal often dies from eating plastic bags?",
    "options_en": ["Whales", "Sea turtles", "Sharks", "Octopus"],
    "answer_en": "Sea turtles",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the most sustainable bag alternative?",
    "options_en": ["Reusable cloth bags", "Thicker plastic bags", "Single-use paper bags", "Biodegradable plastic"],
    "answer_en": "Reusable cloth bags",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What harmful substance is released when burning plastic bags?",
    "options_en": ["Oxygen", "Carbon monoxide", "Dioxins", "Water vapor"],
    "answer_en": "Dioxins",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "How do plastic bags affect agricultural soil?",
    "options_en": ["Improve fertility", "Prevent water absorption", "Add nutrients", "Help plant growth"],
    "answer_en": "Prevent water absorption",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What percentage of plastic bags are actually recycled?",
    "options_en": ["1-3%", "20-25%", "50-55%", "75-80%"],
    "answer_en": "1-3%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What animal in India commonly suffers from plastic ingestion?",
    "options_en": ["Monkeys", "Cows", "Dogs", "Birds"],
    "answer_en": "Cows",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What urban flooding issue is caused by plastic bags?",
    "options_en": ["They improve drainage", "They block drainage systems", "They absorb water", "They create channels"],
    "answer_en": "They block drainage systems",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the main raw material for plastic bags?",
    "options_en": ["Wood pulp", "Cotton fibers", "Petroleum", "Natural rubber"],
    "answer_en": "Petroleum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Approximately how many plastic bags are consumed worldwide annually?",
    "options_en": ["100 million", "1 billion", "500 billion", "5 trillion"],
    "answer_en": "5 trillion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the average usage time of a plastic bag before disposal?",
    "options_en": ["12 minutes", "1 hour", "1 day", "1 week"],
    "answer_en": "12 minutes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Where is the largest garbage patch in the ocean?",
    "options_en": ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
    "answer_en": "Pacific Ocean",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What do plastic bags break down into over time?",
    "options_en": ["Microplastics", "Soil nutrients", "Water", "Natural fibers"],
    "answer_en": "Microplastics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which country implemented the first plastic bag ban?",
    "options_en": ["United States", "Bangladesh", "China", "United Kingdom"],
    "answer_en": "Bangladesh",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "In what year did Bangladesh ban plastic bags?",
    "options_en": ["1995", "2002", "2010", "2015"],
    "answer_en": "2002",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which is most effective: Reduce, Reuse, or Recycle?",
    "options_en": ["Reduce", "Reuse", "Recycle", "All equal"],
    "answer_en": "Reduce",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What natural process breaks plastic in sunlight?",
    "options_en": ["Biodegradation", "Photodegradation", "Hydrolysis", "Oxidation"],
    "answer_en": "Photodegradation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What ocean creature mistakes plastic for jellyfish?",
    "options_en": ["Dolphins", "Sea turtles", "Whales", "Seals"],
    "answer_en": "Sea turtles",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does 'compostable bag' mean?",
    "options_en": ["Breaks down in compost", "Lasts forever", "Made of plastic", "Can be recycled"],
    "answer_en": "Breaks down in compost",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What happens to plastic bags in landfills?",
    "options_en": ["Decompose quickly", "Remain for centuries", "Turn to soil", "Produce biogas"],
    "answer_en": "Remain for centuries",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which country has the highest plastic bag usage per capita?",
    "options_en": ["India", "China", "United States", "Germany"],
    "answer_en": "United States",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Why are paper bags not the perfect solution?",
    "options_en": ["High production energy", "Too expensive", "Not strong", "Too heavy"],
    "answer_en": "High production energy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "How do microplastics from bags enter the food chain?",
    "options_en": ["Through seafood", "Through air", "Through drinking water", "All of these"],
    "answer_en": "All of these",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What traditional material makes eco-friendly bags?",
    "options_en": ["Jute", "Nylon", "Polyester", "Plastic"],
    "answer_en": "Jute",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What percentage of litter consists of plastic items?",
    "options_en": ["10-20%", "40-50%", "60-80%", "90-95%"],
    "answer_en": "60-80%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 'greenwashing' regarding plastic?",
    "options_en": ["False environmental claims", "Using green bags", "Actual recycling", "Proper disposal"],
    "answer_en": "False environmental claims",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What monsoon problem worsens due to plastic bags?",
    "options_en": ["Waterlogging", "Drought", "Clean streets", "Less flooding"],
    "answer_en": "Waterlogging",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the scientific name for plastic bags?",
    "options_en": ["Polyethylene", "Polypropylene", "Polystyrene", "PVC"],
    "answer_en": "Polyethylene",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What defines 'single-use plastic'?",
    "options_en": ["Used once then discarded", "Reusable multiple times", "Biodegradable", "Compostable"],
    "answer_en": "Used once then discarded",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What does BYOB stand for in environmental context?",
    "options_en": ["Bring Your Own Bag", "Buy Your Own Bottle", "Bring Your Own Box", "Buy Your Own Bag"],
    "answer_en": "Bring Your Own Bag",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which animals are affected by plastic bag pollution?",
    "options_en": ["Only marine animals", "Only land animals", "Both land and marine", "No animals"],
    "answer_en": "Both land and marine",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is Extended Producer Responsibility?",
    "options_en": ["Manufacturers manage waste", "Consumers pay taxes", "Government cleans up", "No responsibility"],
    "answer_en": "Manufacturers manage waste",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which bag material decomposes fastest?",
    "options_en": ["Cotton", "Jute", "Paper", "All similar"],
    "answer_en": "Paper",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the purpose of plastic bag taxes?",
    "options_en": ["Increase government revenue", "Discourage bag use", "Promote plastic industry", "Subsidize bags"],
    "answer_en": "Discourage bag use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "How do plastic bags affect soil's ability to hold water?",
    "options_en": ["Improve water retention", "Prevent water penetration", "No effect", "Create reservoirs"],
    "answer_en": "Prevent water penetration",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is a circular economy approach?",
    "options_en": ["Linear production", "Reuse and recycle loop", "Use and discard", "Single-use model"],
    "answer_en": "Reuse and recycle loop",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What kind of pollution do plastic bags create visually?",
    "options_en": ["Visual pollution", "No pollution", "Beautiful scenery", "Natural look"],
    "answer_en": "Visual pollution",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What does 'plastic footprint' measure?",
    "options_en": ["Individual plastic consumption", "Factory size", "Bag thickness", "Recycling rate"],
    "answer_en": "Individual plastic consumption",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What natural forces break bags into microplastics?",
    "options_en": ["Sunlight and waves", "Animal digestion", "Plant roots", "Soil bacteria"],
    "answer_en": "Sunlight and waves",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the zero waste philosophy?",
    "options_en": ["No waste to landfill", "More landfills", "Burn all waste", "Export waste"],
    "answer_en": "No waste to landfill",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "How do plastic bags contaminate recycling?",
    "options_en": ["Tangle sorting machines", "Improve recycling", "Clean other items", "No effect"],
    "answer_en": "Tangle sorting machines",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What does 'upcycling' plastic bags mean?",
    "options_en": ["Creative reuse", "Throwing away", "Burning", "Landfilling"],
    "answer_en": "Creative reuse",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "How do plastic bags affect agricultural productivity?",
    "options_en": ["Increase yields", "Decrease yields", "No effect", "Improve soil"],
    "answer_en": "Decrease yields",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is Plastic Free July initiative?",
    "options_en": ["Month-long plastic reduction", "Plastic promotion", "Manufacturing month", "Sales campaign"],
    "answer_en": "Month-long plastic reduction",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What greenhouse gases come from plastic production?",
    "options_en": ["Carbon dioxide and methane", "Oxygen only", "Nitrogen", "Helium"],
    "answer_en": "Carbon dioxide and methane",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 'thaila' in English?",
    "options_en": ["Bag", "Bottle", "Box", "Basket"],
    "answer_en": "Bag",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "How many seabirds die annually from plastic?",
    "options_en": ["Thousands", "Hundreds of thousands", "Millions", "Billions"],
    "answer_en": "Millions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is plasticulture?",
    "options_en": ["Plastic use in agriculture", "Plastic art", "Plastic recycling", "Plastic manufacturing"],
    "answer_en": "Plastic use in agriculture",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What landfill space issue do bags create?",
    "options_en": ["Waste valuable space", "Create more space", "Compact well", "No issue"],
    "answer_en": "Waste valuable space",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is marine debris mostly made of?",
    "options_en": ["Plastic", "Wood", "Metal", "Glass"],
    "answer_en": "Plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What urban drainage problem do bags cause?",
    "options_en": ["Improved flow", "Blockages causing floods", "Cleaner water", "Better filtration"],
    "answer_en": "Blockages causing floods",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What does 'plastic neutral' certification mean?",
    "options_en": ["Offset plastic footprint", "Use no plastic", "Produce plastic", "Ignore plastic"],
    "answer_en": "Offset plastic footprint",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "How do bags affect dissolved oxygen in water?",
    "options_en": ["Increase oxygen", "Decrease oxygen", "No effect", "Create oxygen"],
    "answer_en": "Decrease oxygen",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is the Plastic Bank concept?",
    "options_en": ["Exchange plastic for value", "Bank storing plastic", "Plastic manufacturing", "Plastic sales"],
    "answer_en": "Exchange plastic for value",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "How do plastic bags impact river ecosystems?",
    "options_en": ["Enhance biodiversity", "Harm aquatic life", "Clean rivers", "Increase fish"],
    "answer_en": "Harm aquatic life",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is a plastic audit?",
    "options_en": ["Track plastic consumption", "Check plastic quality", "Count plastic items", "Measure plastic"],
    "answer_en": "Track plastic consumption",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What climate change contribution from bags?",
    "options_en": ["Greenhouse gas emissions", "Cooling effect", "No impact", "Positive effect"],
    "answer_en": "Greenhouse gas emissions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'precycling'?",
    "options_en": ["Avoid plastic purchase", "Recycle after use", "Burn plastic", "Bury plastic"],
    "answer_en": "Avoid plastic purchase",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "How do bags affect forest animals?",
    "options_en": ["Provide shelter", "Cause entanglement", "No effect", "Feed animals"],
    "answer_en": "Cause entanglement",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is a plastic diet?",
    "options_en": ["Reduce plastic consumption", "Eat plastic", "Make plastic", "Sell plastic"],
    "answer_en": "Reduce plastic consumption",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "How do bags affect plant seed germination?",
    "options_en": ["Promote germination", "Inhibit germination", "No effect", "Speed growth"],
    "answer_en": "Inhibit germination",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is plastic offsetting?",
    "options_en": ["Remove equivalent plastic", "Add more plastic", "Ignore plastic", "Celebrate plastic"],
    "answer_en": "Remove equivalent plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Why do animals die after eating plastic?",
    "options_en": ["Digestive blockage", "Provides nutrition", "No effect", "Gives energy"],
    "answer_en": "Digestive blockage",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is a Plastic Smart Cities program?",
    "options_en": ["Cities reducing plastic waste", "Cities using more plastic", "Cities ignoring plastic", "Cities making plastic"],
    "answer_en": "Cities reducing plastic waste",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What chemicals leach from bags into water?",
    "options_en": ["Toxic additives", "Nutrients", "Oxygen", "Clean water"],
    "answer_en": "Toxic additives",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is a plastic pledge?",
    "options_en": ["Commitment to reduce plastic", "Promise to use plastic", "Agreement to make plastic", "Contract for plastic"],
    "answer_en": "Commitment to reduce plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "How do bags affect ecosystem biodiversity?",
    "options_en": ["Increase diversity", "Reduce diversity", "No effect", "Create species"],
    "answer_en": "Reduce diversity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is a plastic-free community?",
    "options_en": ["Area minimizing plastic", "Area using maximum plastic", "Area ignoring plastic", "Area producing plastic"],
    "answer_en": "Area minimizing plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "How do plastic bags impact beach tourism?",
    "options_en": ["Attract tourists", "Deter tourists", "No effect", "Clean beaches"],
    "answer_en": "Deter tourists",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is plastic literacy education?",
    "options_en": ["Understanding plastic impact", "Making plastic", "Using plastic", "Ignoring plastic"],
    "answer_en": "Understanding plastic impact",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Why are plastic bags problematic in recycling plants?",
    "options_en": ["Clog machinery", "Improve efficiency", "Clean equipment", "No problem"],
    "answer_en": "Clog machinery",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is a plastic-free school?",
    "options_en": ["School reducing plastic use", "School using plastic", "School making plastic", "School ignoring plastic"],
    "answer_en": "School reducing plastic use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "How do bags contaminate compost?",
    "options_en": ["Add microplastics", "Improve quality", "No effect", "Speed process"],
    "answer_en": "Add microplastics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is a plastic-free wedding trend?",
    "options_en": ["Celebration avoiding plastic", "Wedding with plastic", "Plastic-themed wedding", "Normal wedding"],
    "answer_en": "Celebration avoiding plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "How do bags affect groundwater quality?",
    "options_en": ["Improve quality", "Contaminate with chemicals", "No effect", "Purify water"],
    "answer_en": "Contaminate with chemicals",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is a plastic-free picnic?",
    "options_en": ["Outdoor meal without plastic", "Picnic with plastic", "Indoor picnic", "Restaurant meal"],
    "answer_en": "Outdoor meal without plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What sewage system problems do bags cause?",
    "options_en": ["Improve flow", "Cause blockages", "Clean systems", "No problems"],
    "answer_en": "Cause blockages",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is a plastic-free office initiative?",
    "options_en": ["Workplace reducing plastic", "Office using plastic", "Office making plastic", "Office ignoring plastic"],
    "answer_en": "Workplace reducing plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "How do bags affect the fishing industry?",
    "options_en": ["Increase catch", "Damage equipment and reduce catch", "No effect", "Attract fish"],
    "answer_en": "Damage equipment and reduce catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is a plastic-free festival?",
    "options_en": ["Event minimizing plastic", "Festival with plastic", "Plastic manufacturing event", "Indoor event"],
    "answer_en": "Event minimizing plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "How do bags impact recycling costs?",
    "options_en": ["Reduce costs", "Increase processing costs", "No effect", "Eliminate costs"],
    "answer_en": "Increase processing costs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is a plastic-free challenge?",
    "options_en": ["Try living without plastic", "Use more plastic", "Make plastic", "Sell plastic"],
    "answer_en": "Try living without plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "How do bags affect farm productivity?",
    "options_en": ["Increase productivity", "Decrease productivity", "No effect", "Improve soil"],
    "answer_en": "Decrease productivity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is a plastic-free home?",
    "options_en": ["Household minimizing plastic", "Home full of plastic", "Home making plastic", "Home ignoring plastic"],
    "answer_en": "Household minimizing plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "How do bags affect waste management systems?",
    "options_en": ["Improve efficiency", "Reduce efficiency", "No effect", "Create systems"],
    "answer_en": "Reduce efficiency",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is the plastic-free future vision?",
    "options_en": ["World with minimal plastic", "World with more plastic", "World ignoring plastic", "World producing plastic"],
    "answer_en": "World with minimal plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is India's Swachh Bharat view on plastic?",
    "options_en": ["Discourages single-use plastic", "Encourages plastic use", "Ignores plastic", "Promotes plastic"],
    "answer_en": "Discourages single-use plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Which Indian state pioneered plastic bag bans?",
    "options_en": ["Himachal Pradesh", "Maharashtra", "Kerala", "Tamil Nadu"],
    "answer_en": "Himachal Pradesh",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "When did India ban certain single-use plastics?",
    "options_en": ["2019", "2020", "2022", "2023"],
    "answer_en": "2022",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is bagasse packaging?",
    "options_en": ["Sugarcane waste product", "Plastic packaging", "Paper packaging", "Cloth packaging"],
    "answer_en": "Sugarcane waste product",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What minimum thickness is allowed for plastic bags in India?",
    "options_en": ["50 microns", "75 microns", "100 microns", "120 microns"],
    "answer_en": "75 microns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What percentage of ocean plastic comes from land?",
    "options_en": ["60%", "70%", "80%", "90%"],
    "answer_en": "80%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is the annual economic cost of plastic pollution?",
    "options_en": ["$1-5 billion", "$8-13 billion", "$20-25 billion", "$50-100 billion"],
    "answer_en": "$8-13 billion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What international agreement addresses plastic pollution?",
    "options_en": ["Paris Agreement", "Basel Convention", "Global Plastic Treaty", "Kyoto Protocol"],
    "answer_en": "Global Plastic Treaty",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is the most effective individual action?",
    "options_en": ["Refuse plastic bags", "Recycle bags", "Burn bags", "Throw in bin"],
    "answer_en": "Refuse plastic bags",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "How many times must a cloth bag be reused to be better than plastic?",
    "options_en": ["5-10 times", "20-50 times", "100+ times", "1 time"],
    "answer_en": "100+ times",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is the main economic barrier to bag recycling?",
    "options_en": ["Low market value", "High value", "Easy processing", "High demand"],
    "answer_en": "Low market value",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What technology helps biodegradable plastics?",
    "options_en": ["Additives for faster breakdown", "Stronger plastic", "More colorful", "Thicker material"],
    "answer_en": "Additives for faster breakdown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the comprehensive solution to plastic bag pollution?",
    "options_en": ["System change in production/consumption", "Better recycling", "More landfills", "Waste export"],
    "answer_en": "System change in production/consumption",
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