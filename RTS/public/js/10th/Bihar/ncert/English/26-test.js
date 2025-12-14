const questions = [
  {
    "num": 1,
    "question_en": "What is the primary environmental problem with polythene bags?",
    "options_en": ["They are biodegradable", "They are non-biodegradable", "They dissolve in water", "They evaporate quickly"],
    "answer_en": "They are non-biodegradable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "How many years can a polythene bag persist in the environment?",
    "options_en": ["1-5 years", "10-20 years", "50-100 years", "500-1000 years"],
    "answer_en": "500-1000 years",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What marine animal often mistakes floating polythene bags for jellyfish?",
    "options_en": ["Sharks", "Sea turtles", "Dolphins", "Whales"],
    "answer_en": "Sea turtles",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the most eco-friendly alternative to polythene bags?",
    "options_en": ["More plastic bags", "Reusable cloth bags", "Paper bags (once)", "Biodegradable plastic"],
    "answer_en": "Reusable cloth bags",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What toxic gases are released when polythene bags are burned?",
    "options_en": ["Oxygen and nitrogen", "Carbon dioxide and water", "Dioxins and furans", "Helium and argon"],
    "answer_en": "Dioxins and furans",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "How do polythene bags affect agricultural land?",
    "options_en": ["Increase soil fertility", "Reduce water percolation", "Add nutrients", "Improve soil structure"],
    "answer_en": "Reduce water percolation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What percentage of polythene bags get recycled globally?",
    "options_en": ["Less than 5%", "25-30%", "50-60%", "80-90%"],
    "answer_en": "Less than 5%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What domestic animal in India commonly dies from eating polythene bags?",
    "options_en": ["Chickens", "Goats", "Cows and buffaloes", "Dogs"],
    "answer_en": "Cows and buffaloes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What do polythene bags create in urban drainage systems?",
    "options_en": ["Better water flow", "Increased capacity", "Blockages and flooding", "Natural filters"],
    "answer_en": "Blockages and flooding",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "From what fossil fuel is polythene primarily derived?",
    "options_en": ["Coal", "Natural gas", "Petroleum", "All of these"],
    "answer_en": "Petroleum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Approximately how many polythene bags are used worldwide every minute?",
    "options_en": ["10,000", "100,000", "1 million", "10 million"],
    "answer_en": "1 million",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the average useful life of a polythene shopping bag?",
    "options_en": ["12 minutes", "1 hour", "1 day", "1 week"],
    "answer_en": "12 minutes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What percentage of the Great Pacific Garbage Patch consists of plastic items?",
    "options_en": ["10%", "46%", "75%", "90%"],
    "answer_en": "46%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What do polythene bags eventually break down into?",
    "options_en": ["Nutrients for soil", "Microplastics", "Natural fibers", "Harmless gases"],
    "answer_en": "Microplastics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which country was the first to implement a nationwide ban on thin polythene bags?",
    "options_en": ["United States", "Bangladesh", "China", "India"],
    "answer_en": "Bangladesh",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What year did Bangladesh ban polythene bags?",
    "options_en": ["1995", "2002", "2010", "2015"],
    "answer_en": "2002",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which is the most effective 'R' in waste management?",
    "options_en": ["Recycle", "Reduce", "Reuse", "All equal"],
    "answer_en": "Reduce",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is photodegradation of plastic?",
    "options_en": ["Breaking down by microorganisms", "Breaking down by sunlight", "Dissolving in water", "Melting in heat"],
    "answer_en": "Breaking down by sunlight",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "How many marine animals die each year from plastic pollution?",
    "options_en": ["1,000", "100,000", "1 million", "100 million"],
    "answer_en": "100 million",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does 'compostable' mean for bags?",
    "options_en": ["Will decompose in industrial compost", "Will last forever", "Can be recycled endlessly", "Is made of plastic"],
    "answer_en": "Will decompose in industrial compost",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What happens to polythene bags in landfills?",
    "options_en": ["Decompose in months", "Remain intact for centuries", "Turn to soil quickly", "Produce methane quickly"],
    "answer_en": "Remain intact for centuries",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What country consumes the most plastic bags per capita?",
    "options_en": ["United States", "China", "India", "European Union"],
    "answer_en": "United States",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the main reason paper bags aren't the best alternative?",
    "options_en": ["They use more energy to produce", "They are too expensive", "They are not strong", "They dissolve in rain"],
    "answer_en": "They use more energy to produce",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "How do microplastics from bags enter the human body?",
    "options_en": ["Through seafood consumption", "Through breathing only", "Through drinking water", "All of these"],
    "answer_en": "All of these",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What traditional Indian bag is a sustainable alternative?",
    "options_en": ["Jute bag", "Nylon bag", "Polyester bag", "Silk bag"],
    "answer_en": "Jute bag",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What percentage of litter collected worldwide is plastic?",
    "options_en": ["10-20%", "40-50%", "60-80%", "90-95%"],
    "answer_en": "60-80%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 'greenwashing' in the context of plastic bags?",
    "options_en": ["Using green colored bags", "False environmental claims", "Actual recycling programs", "Proper disposal methods"],
    "answer_en": "False environmental claims",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What do polythene bags cause during monsoon season in cities?",
    "options_en": ["Cleaner streets", "Improved drainage", "Severe waterlogging", "Better air quality"],
    "answer_en": "Severe waterlogging",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the chemical name for most polythene bags?",
    "options_en": ["Polyethylene", "Polypropylene", "Polystyrene", "Polyvinyl chloride"],
    "answer_en": "Polyethylene",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does 'single-use plastic' refer to?",
    "options_en": ["Plastic used once then discarded", "Plastic that can be reused", "Plastic that biodegrades", "Industrial plastic"],
    "answer_en": "Plastic used once then discarded",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the BYOB movement?",
    "options_en": ["Bring Your Own Bottle", "Bring Your Own Bag", "Buy Your Own Box", "Bring Your Own Basket"],
    "answer_en": "Bring Your Own Bag",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which sea creature is most affected by plastic bag ingestion?",
    "options_en": ["Whales", "Seals", "Sea turtles", "All marine life"],
    "answer_en": "All marine life",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is Extended Producer Responsibility (EPR) for plastic?",
    "options_en": ["Manufacturers responsible for waste", "Consumers pay extra", "Government cleans everything", "No responsibility"],
    "answer_en": "Manufacturers responsible for waste",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What natural material bags decompose fastest?",
    "options_en": ["Cotton bags", "Jute bags", "Paper bags", "All similar"],
    "answer_en": "Paper bags",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the plastic bag levy in many countries?",
    "options_en": ["A tax to discourage use", "A subsidy for producers", "A recycling reward", "A manufacturing bonus"],
    "answer_en": "A tax to discourage use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "How do polythene bags affect soil moisture?",
    "options_en": ["Increase moisture retention", "Prevent water absorption", "Have no effect", "Create natural irrigation"],
    "answer_en": "Prevent water absorption",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is a circular economy approach to bags?",
    "options_en": ["Use once and throw", "Reuse and recycle endlessly", "Make more landfills", "Export waste overseas"],
    "answer_en": "Reuse and recycle endlessly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What visual problem do polythene bags create in nature?",
    "options_en": ["Beautification", "Natural camouflage", "Visual pollution", "Ecosystem enhancement"],
    "answer_en": "Visual pollution",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is a 'plastic footprint'?",
    "options_en": ["Measure of personal plastic use", "Size of plastic factory", "Amount of plastic exported", "Plastic recycling rate"],
    "answer_en": "Measure of personal plastic use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What breaks polythene bags into microplastics?",
    "options_en": ["UV radiation and mechanical action", "Marine animals eating them", "Chemical reactions in water", "Microbial activity"],
    "answer_en": "UV radiation and mechanical action",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the goal of 'zero waste' regarding bags?",
    "options_en": ["No bags to landfill", "More biodegradable bags", "Better recycling", "Exporting waste"],
    "answer_en": "No bags to landfill",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "How do polythene bags contaminate recycling streams?",
    "options_en": ["By mixing with other recyclables", "By being too clean", "By being biodegradable", "By being colorful"],
    "answer_en": "By mixing with other recyclables",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'upcycling' plastic bags?",
    "options_en": ["Creative reuse into new products", "Throwing in landfill", "Burning for energy", "Exporting to poor countries"],
    "answer_en": "Creative reuse into new products",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "How do polythene bags affect crop yields?",
    "options_en": ["Increase yields significantly", "Reduce yields by blocking growth", "Have no effect", "Improve soil quality"],
    "answer_en": "Reduce yields by blocking growth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is Plastic Free July?",
    "options_en": ["Global movement to refuse plastic", "Plastic manufacturing month", "Plastic recycling drive", "Plastic exhibition"],
    "answer_en": "Global movement to refuse plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What greenhouse gas is emitted during polythene production?",
    "options_en": ["Oxygen", "Carbon dioxide", "Methane", "Both B and C"],
    "answer_en": "Both B and C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the Hindi word for reusable cloth bag?",
    "options_en": ["Thaila", "Bori", "Jhola", "All of these"],
    "answer_en": "All of these",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "How many seabirds die annually from plastic ingestion?",
    "options_en": ["1,000", "100,000", "1 million", "10 million"],
    "answer_en": "1 million",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'plasticulture'?",
    "options_en": ["Use of plastic in agriculture", "Plastic art movement", "Plastic education", "Plastic recycling"],
    "answer_en": "Use of plastic in agriculture",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What space problem do bags create in landfills?",
    "options_en": ["Take up valuable space", "Create more space", "Help compact waste", "Have no effect"],
    "answer_en": "Take up valuable space",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is marine debris mainly composed of?",
    "options_en": ["Natural materials", "Plastic items", "Metal objects", "Glass bottles"],
    "answer_en": "Plastic items",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What urban problem worsens during rains due to bags?",
    "options_en": ["Traffic jams", "Waterlogging", "Power outages", "Air pollution"],
    "answer_en": "Waterlogging",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What does 'plastic neutral' mean for companies?",
    "options_en": ["Offset plastic use by collection", "Use no plastic at all", "Use only recycled plastic", "Ignore plastic problem"],
    "answer_en": "Offset plastic use by collection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "How do bags affect oxygen in water bodies?",
    "options_en": ["Increase oxygen levels", "Reduce oxygen exchange", "Have no effect", "Create oxygen bubbles"],
    "answer_en": "Reduce oxygen exchange",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is a Plastic Bank?",
    "options_en": ["Exchange plastic for money/goods", "Bank that uses plastic money", "Plastic manufacturing unit", "Plastic storage facility"],
    "answer_en": "Exchange plastic for money/goods",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "How do polythene bags impact river ecosystems?",
    "options_en": ["Enhance biodiversity", "Harm aquatic life", "Clean the water", "Increase fish population"],
    "answer_en": "Harm aquatic life",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is a plastic audit?",
    "options_en": ["Tracking personal/organizational plastic use", "Checking plastic quality", "Counting plastic factories", "Measuring plastic exports"],
    "answer_en": "Tracking personal/organizational plastic use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What climate impact comes from plastic bag production?",
    "options_en": ["Carbon emissions", "Cooling effect", "Ozone creation", "Rain formation"],
    "answer_en": "Carbon emissions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'precycling'?",
    "options_en": ["Avoiding plastic purchase", "Recycling after use", "Burning plastic", "Landfilling plastic"],
    "answer_en": "Avoiding plastic purchase",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "How do bags affect forest wildlife?",
    "options_en": ["Provide shelter", "Cause entanglement and death", "Increase food sources", "Have no effect"],
    "answer_en": "Cause entanglement and death",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is a plastic diet challenge?",
    "options_en": ["Reducing personal plastic consumption", "Eating plastic for health", "Making plastic products", "Selling plastic items"],
    "answer_en": "Reducing personal plastic consumption",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "How do bags affect seed germination?",
    "options_en": ["Promote germination", "Prevent seedling emergence", "Have no effect", "Speed up growth"],
    "answer_en": "Prevent seedling emergence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What does plastic offsetting involve?",
    "options_en": ["Removing equivalent plastic from environment", "Producing more plastic", "Ignoring plastic problem", "Exporting plastic waste"],
    "answer_en": "Removing equivalent plastic from environment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Why do animals starve after eating polythene?",
    "options_en": ["It blocks digestive system", "It provides nutrition", "It increases appetite", "It has no effect"],
    "answer_en": "It blocks digestive system",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is a Plastic Smart City initiative?",
    "options_en": ["City reducing plastic pollution", "City producing more plastic", "City ignoring plastic", "City exporting plastic"],
    "answer_en": "City reducing plastic pollution",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What chemicals leach from bags into water?",
    "options_en": ["BPA and phthalates", "Pure water", "Nutrients", "Oxygen"],
    "answer_en": "BPA and phthalates",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is a plastic pledge?",
    "options_en": ["Commitment to reduce plastic use", "Promise to use more plastic", "Agreement to make plastic", "Contract to sell plastic"],
    "answer_en": "Commitment to reduce plastic use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "How do bags affect biodiversity?",
    "options_en": ["Increase species diversity", "Reduce biodiversity", "Have no effect", "Create new habitats"],
    "answer_en": "Reduce biodiversity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is a plastic-free community?",
    "options_en": ["Area minimizing plastic use", "Area using maximum plastic", "Area ignoring plastic", "Area producing plastic"],
    "answer_en": "Area minimizing plastic use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "How do bags impact beach tourism?",
    "options_en": ["Attract more tourists", "Detract tourists due to litter", "Have no effect", "Create employment"],
    "answer_en": "Detract tourists due to litter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is plastic literacy?",
    "options_en": ["Understanding plastic's environmental impact", "Reading plastic labels", "Making plastic products", "Selling plastic items"],
    "answer_en": "Understanding plastic's environmental impact",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Why do bags jam recycling machinery?",
    "options_en": ["They tangle in equipment", "They dissolve easily", "They are too small", "They are magnetic"],
    "answer_en": "They tangle in equipment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is a plastic-free school program?",
    "options_en": ["School reducing plastic usage", "School using more plastic", "School ignoring plastic", "School producing plastic"],
    "answer_en": "School reducing plastic usage",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "How do bags affect compost quality?",
    "options_en": ["Improve compost quality", "Contaminate compost with microplastics", "Have no effect", "Speed composting"],
    "answer_en": "Contaminate compost with microplastics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is a plastic-free wedding trend?",
    "options_en": ["Celebration avoiding plastic items", "Wedding with plastic decorations", "Plastic-themed wedding", "Wedding ignoring plastic"],
    "answer_en": "Celebration avoiding plastic items",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "How do bags affect groundwater quality?",
    "options_en": ["Improve water purity", "Leach chemicals into groundwater", "Have no effect", "Filter groundwater"],
    "answer_en": "Leach chemicals into groundwater",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is a plastic-free picnic?",
    "options_en": ["Outdoor meal without plastic items", "Picnic with plastic everything", "Plastic-themed picnic", "Indoor picnic"],
    "answer_en": "Outdoor meal without plastic items",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What sewer problems do bags cause?",
    "options_en": ["Improve flow", "Cause blockages and overflows", "Clean the pipes", "Have no effect"],
    "answer_en": "Cause blockages and overflows",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is a plastic-free office initiative?",
    "options_en": ["Workplace reducing plastic use", "Office using maximum plastic", "Office ignoring plastic", "Office producing plastic"],
    "answer_en": "Workplace reducing plastic use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "How do bags affect fishing industry?",
    "options_en": ["Increase fish catch", "Damage fishing gear and reduce catches", "Have no effect", "Attract more fish"],
    "answer_en": "Damage fishing gear and reduce catches",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is a plastic-free festival?",
    "options_en": ["Event minimizing plastic waste", "Festival with plastic everything", "Plastic manufacturing festival", "Indoor festival"],
    "answer_en": "Event minimizing plastic waste",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "How do bags affect recycling economics?",
    "options_en": ["Increase recycling profits", "Increase sorting costs and reduce efficiency", "Have no effect", "Create more jobs"],
    "answer_en": "Increase sorting costs and reduce efficiency",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is a plastic-free challenge?",
    "options_en": ["Personal trial to avoid plastic", "Competition to use most plastic", "Plastic making contest", "Plastic selling game"],
    "answer_en": "Personal trial to avoid plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "How do bags affect farm productivity?",
    "options_en": ["Increase crop yields", "Reduce agricultural productivity", "Have no effect", "Improve soil fertility"],
    "answer_en": "Reduce agricultural productivity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is a plastic-free home?",
    "options_en": ["Household minimizing plastic use", "Home filled with plastic", "Plastic manufacturing home", "Home ignoring plastic"],
    "answer_en": "Household minimizing plastic use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "How do bags affect waste management efficiency?",
    "options_en": ["Improve waste management", "Reduce system effectiveness", "Have no effect", "Create new technologies"],
    "answer_en": "Reduce system effectiveness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is a plastic-free future vision?",
    "options_en": ["World minimizing plastic pollution", "World using more plastic", "World ignoring plastic", "World producing plastic"],
    "answer_en": "World minimizing plastic pollution",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is Swachh Bharat's stance on polythene bags?",
    "options_en": ["Encourages their use", "Discourages single-use plastics", "Ignores the issue", "Promotes manufacturing"],
    "answer_en": "Discourages single-use plastics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What Indian state first banned plastic bags?",
    "options_en": ["Maharashtra", "Himachal Pradesh", "Kerala", "Delhi"],
    "answer_en": "Himachal Pradesh",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What year did India announce single-use plastic ban?",
    "options_en": ["2015", "2018", "2020", "2022"],
    "answer_en": "2022",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is bagasse packaging?",
    "options_en": ["Sugarcane waste alternative to plastic", "Plastic bag type", "Paper bag variant", "Cloth bag material"],
    "answer_en": "Sugarcane waste alternative to plastic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is the thickness limit for banned plastic bags in India?",
    "options_en": ["20 microns", "50 microns", "75 microns", "120 microns"],
    "answer_en": "75 microns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What percentage of plastic in oceans comes from land sources?",
    "options_en": ["20%", "50%", "80%", "100%"],
    "answer_en": "80%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is the economic cost of plastic pollution annually?",
    "options_en": ["$1 billion", "$13 billion", "$50 billion", "$100 billion"],
    "answer_en": "$13 billion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What UN agreement addresses plastic pollution?",
    "options_en": ["Paris Agreement", "Basel Convention", "Global Plastic Treaty", "Kyoto Protocol"],
    "answer_en": "Global Plastic Treaty",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is the most effective individual action against bag pollution?",
    "options_en": ["Use reusable bags consistently", "Recycle all bags", "Burn bags safely", "Throw in proper bins"],
    "answer_en": "Use reusable bags consistently",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is the lifecycle assessment of cloth vs plastic bags?",
    "options_en": ["Cloth better if reused many times", "Plastic always better", "Both equal", "Depends on color"],
    "answer_en": "Cloth better if reused many times",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is the main barrier to bag recycling?",
    "options_en": ["Low economic value", "Too valuable", "Easy to process", "High demand"],
    "answer_en": "Low economic value",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What innovation helps biodegradable bags?",
    "options_en": ["Additives to speed breakdown", "Making them thicker", "Adding colors", "Making them waterproof"],
    "answer_en": "Additives to speed breakdown",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the ultimate solution to polythene bag pollution?",
    "options_en": ["Systemic change in production and consumption", "Better recycling only", "More landfills", "Exporting waste"],
    "answer_en": "Systemic change in production and consumption",
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