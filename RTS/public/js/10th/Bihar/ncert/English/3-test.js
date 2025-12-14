const questions =[
  {
    "num": 1,
    "question_en": "What is the main topic of 'Me and The Ecology Bit'?",
    "options_en": ["Environmental awareness", "Space exploration", "Historical events", "Mathematics"],
    "answer_en": "Environmental awareness",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does ecology study?",
    "options_en": ["Relationships between living things and environment", "Chemical reactions", "Planetary motion", "Ancient civilizations"],
    "answer_en": "Relationships between living things and environment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is a simple definition of an ecosystem?",
    "options_en": ["Community of living and non-living things", "Only plants in an area", "Animals in a zoo", "Water in a pond"],
    "answer_en": "Community of living and non-living things",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which of these is a renewable resource?",
    "options_en": ["Solar energy", "Coal", "Natural gas", "Plastic"],
    "answer_en": "Solar energy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the process called when plants make their own food?",
    "options_en": ["Photosynthesis", "Respiration", "Digestion", "Evaporation"],
    "answer_en": "Photosynthesis",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What do we call animals that eat only plants?",
    "options_en": ["Herbivores", "Carnivores", "Omnivores", "Decomposers"],
    "answer_en": "Herbivores",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the role of decomposers in an ecosystem?",
    "options_en": ["Break down dead matter", "Make food from sunlight", "Hunt other animals", "Produce oxygen"],
    "answer_en": "Break down dead matter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which of these is a non-renewable resource?",
    "options_en": ["Petroleum", "Wind", "Sunlight", "Water"],
    "answer_en": "Petroleum",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the greenhouse effect?",
    "options_en": ["Trapping of heat in atmosphere", "Cooling of Earth's surface", "Plant growth process", "Water cycle"],
    "answer_en": "Trapping of heat in atmosphere",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What does recycling help to conserve?",
    "options_en": ["Natural resources", "Money only", "Time only", "Space only"],
    "answer_en": "Natural resources",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is biodiversity?",
    "options_en": ["Variety of life in an area", "Number of people in city", "Amount of water in ocean", "Height of trees"],
    "answer_en": "Variety of life in an area",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which of these is a fossil fuel?",
    "options_en": ["Coal", "Sunlight", "Wind", "Geothermal"],
    "answer_en": "Coal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is habitat destruction?",
    "options_en": ["Loss of living space for organisms", "Building new houses", "Cleaning a room", "Planting trees"],
    "answer_en": "Loss of living space for organisms",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What do plants release during photosynthesis?",
    "options_en": ["Oxygen", "Carbon dioxide", "Methane", "Nitrogen"],
    "answer_en": "Oxygen",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is conservation?",
    "options_en": ["Protection of natural resources", "Spending money", "Building cities", "Cutting trees"],
    "answer_en": "Protection of natural resources",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is pollution?",
    "options_en": ["Harmful substances in environment", "Clean water", "Fresh air", "Healthy soil"],
    "answer_en": "Harmful substances in environment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What are the three R's of waste management?",
    "options_en": ["Reduce, Reuse, Recycle", "Read, Write, Arithmetic", "Run, Rest, Relax", "Rain, River, Ocean"],
    "answer_en": "Reduce, Reuse, Recycle",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is a food chain?",
    "options_en": ["Sequence of who eats whom", "Grocery store line", "Restaurant menu", "Cooking recipe"],
    "answer_en": "Sequence of who eats whom",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which gas do plants absorb from air?",
    "options_en": ["Carbon dioxide", "Oxygen", "Hydrogen", "Helium"],
    "answer_en": "Carbon dioxide",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is climate change?",
    "options_en": ["Long-term change in weather patterns", "Daily weather", "Seasonal change", "Time zone difference"],
    "answer_en": "Long-term change in weather patterns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is a predator?",
    "options_en": ["Animal that hunts other animals", "Animal that eats plants", "Plant that eats insects", "Fungus that decomposes"],
    "answer_en": "Animal that hunts other animals",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is prey?",
    "options_en": ["Animal that is hunted", "Animal that hunts", "Plant that grows", "Rock that erodes"],
    "answer_en": "Animal that is hunted",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is composting?",
    "options_en": ["Turning organic waste into fertilizer", "Burning trash", "Throwing away food", "Buying new soil"],
    "answer_en": "Turning organic waste into fertilizer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is erosion?",
    "options_en": ["Wearing away of soil and rock", "Building up of land", "Planting of trees", "Falling of rain"],
    "answer_en": "Wearing away of soil and rock",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What are native species?",
    "options_en": ["Plants/animals naturally from an area", "Plants/animals from other countries", "Newly created species", "Extinct species"],
    "answer_en": "Plants/animals naturally from an area",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is an invasive species?",
    "options_en": ["Non-native species that harms ecosystem", "Native species that helps ecosystem", "Extinct species", "Domestic pet"],
    "answer_en": "Non-native species that harms ecosystem",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the ozone layer?",
    "options_en": ["Protective layer in atmosphere", "Layer of soil", "Ocean current", "Forest canopy"],
    "answer_en": "Protective layer in atmosphere",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What does the water cycle do?",
    "options_en": ["Moves water around Earth", "Creates new water", "Destroys old water", "Stores water underground"],
    "answer_en": "Moves water around Earth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is deforestation?",
    "options_en": ["Clearing of forests", "Planting trees", "Watering plants", "Studying trees"],
    "answer_en": "Clearing of forests",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is a wetland?",
    "options_en": ["Land saturated with water", "Dry desert", "Mountain peak", "Sandy beach"],
    "answer_en": "Land saturated with water",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What are fossil fuels formed from?",
    "options_en": ["Ancient plants and animals", "Rocks and minerals", "Modern waste", "Volcanic ash"],
    "answer_en": "Ancient plants and animals",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is organic waste?",
    "options_en": ["Waste from living things", "Plastic waste", "Metal waste", "Glass waste"],
    "answer_en": "Waste from living things",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is sustainable living?",
    "options_en": ["Living within Earth's limits", "Living without technology", "Living in cities only", "Living alone"],
    "answer_en": "Living within Earth's limits",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is a carbon footprint?",
    "options_en": ["Amount of greenhouse gases produced", "Size of shoe", "Pattern in soil", "Shape of leaf"],
    "answer_en": "Amount of greenhouse gases produced",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is a producer in food chain?",
    "options_en": ["Organism that makes its own food", "Organism that eats others", "Organism that decomposes", "Organism that hunts"],
    "answer_en": "Organism that makes its own food",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is a consumer in food chain?",
    "options_en": ["Organism that eats other organisms", "Organism that makes food", "Organism that decomposes", "Organism that photosynthesizes"],
    "answer_en": "Organism that eats other organisms",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the atmosphere?",
    "options_en": ["Layer of gases around Earth", "Layer of water", "Layer of soil", "Layer of rock"],
    "answer_en": "Layer of gases around Earth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the biosphere?",
    "options_en": ["Part of Earth where life exists", "Part with only water", "Part with only air", "Part with only rock"],
    "answer_en": "Part of Earth where life exists",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is a natural resource?",
    "options_en": ["Material from nature useful to humans", "Man-made material", "Artificial substance", "Synthetic product"],
    "answer_en": "Material from nature useful to humans",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is energy conservation?",
    "options_en": ["Reducing energy use", "Creating new energy", "Storing old energy", "Measuring energy"],
    "answer_en": "Reducing energy use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is air pollution?",
    "options_en": ["Harmful substances in air", "Clean air", "Fresh breeze", "Pure oxygen"],
    "answer_en": "Harmful substances in air",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is water pollution?",
    "options_en": ["Harmful substances in water", "Clean water", "Pure H2O", "Mineral water"],
    "answer_en": "Harmful substances in water",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is soil pollution?",
    "options_en": ["Harmful substances in soil", "Fertile soil", "Rich earth", "Healthy dirt"],
    "answer_en": "Harmful substances in soil",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is noise pollution?",
    "options_en": ["Harmful or annoying noise", "Pleasant music", "Quiet peace", "Silent room"],
    "answer_en": "Harmful or annoying noise",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is light pollution?",
    "options_en": ["Excessive artificial light", "Natural sunlight", "Moonlight", "Starlight"],
    "answer_en": "Excessive artificial light",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is a watershed?",
    "options_en": ["Area that drains to a water body", "Water storage tank", "Drinking glass", "Swimming pool"],
    "answer_en": "Area that drains to a water body",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is an aquifer?",
    "options_en": ["Underground layer of water-bearing rock", "Above-ground lake", "River stream", "Ocean current"],
    "answer_en": "Underground layer of water-bearing rock",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is a landfill?",
    "options_en": ["Site for waste disposal", "Recycling center", "Compost pile", "Garden plot"],
    "answer_en": "Site for waste disposal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is biodegradable?",
    "options_en": ["Able to decompose naturally", "Lasts forever", "Made of plastic", "Non-decomposable"],
    "answer_en": "Able to decompose naturally",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is non-biodegradable?",
    "options_en": ["Does not decompose naturally", "Decomposes quickly", "Made of food", "Organic material"],
    "answer_en": "Does not decompose naturally",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is a food web?",
    "options_en": ["Interconnected food chains", "Single food chain", "Grocery store", "Restaurant"],
    "answer_en": "Interconnected food chains",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is the energy pyramid?",
    "options_en": ["Shows energy flow in ecosystem", "Ancient Egyptian structure", "Food storage", "Water tower"],
    "answer_en": "Shows energy flow in ecosystem",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is a keystone species?",
    "options_en": ["Species crucial to ecosystem function", "Common species", "Rare species", "Extinct species"],
    "answer_en": "Species crucial to ecosystem function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is habitat?",
    "options_en": ["Natural home of an organism", "Human house", "Zoo enclosure", "Farm field"],
    "answer_en": "Natural home of an organism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is niche?",
    "options_en": ["Role of organism in ecosystem", "Small space", "Large area", "Empty spot"],
    "answer_en": "Role of organism in ecosystem",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is symbiosis?",
    "options_en": ["Close relationship between species", "Distant relationship", "No relationship", "Competition only"],
    "answer_en": "Close relationship between species",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is mutualism?",
    "options_en": ["Both species benefit", "One benefits, one harmed", "One benefits, one unaffected", "Both harmed"],
    "answer_en": "Both species benefit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is commensalism?",
    "options_en": ["One benefits, one unaffected", "Both benefit", "One benefits, one harmed", "Both harmed"],
    "answer_en": "One benefits, one unaffected",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is parasitism?",
    "options_en": ["One benefits, one harmed", "Both benefit", "One benefits, one unaffected", "Both unaffected"],
    "answer_en": "One benefits, one harmed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is competition?",
    "options_en": ["Struggle for resources", "Working together", "Ignoring each other", "Helping each other"],
    "answer_en": "Struggle for resources",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is carrying capacity?",
    "options_en": ["Maximum population environment can support", "Minimum population", "Average population", "Current population"],
    "answer_en": "Maximum population environment can support",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is renewable energy?",
    "options_en": ["Energy from sources that replenish", "Energy from finite sources", "Energy from fossils", "Energy from waste"],
    "answer_en": "Energy from sources that replenish",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What are solar panels used for?",
    "options_en": ["Convert sunlight to electricity", "Store rainwater", "Measure wind speed", "Filter air"],
    "answer_en": "Convert sunlight to electricity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What are wind turbines used for?",
    "options_en": ["Convert wind to electricity", "Measure temperature", "Store water", "Create shade"],
    "answer_en": "Convert wind to electricity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is hydroelectric power?",
    "options_en": ["Electricity from flowing water", "Electricity from sun", "Electricity from wind", "Electricity from heat"],
    "answer_en": "Electricity from flowing water",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is geothermal energy?",
    "options_en": ["Heat from Earth's interior", "Heat from sun", "Heat from wind", "Heat from water"],
    "answer_en": "Heat from Earth's interior",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is biomass energy?",
    "options_en": ["Energy from organic matter", "Energy from rocks", "Energy from metals", "Energy from plastics"],
    "answer_en": "Energy from organic matter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is an endangered species?",
    "options_en": ["At risk of extinction", "Very common", "Recently discovered", "Domesticated"],
    "answer_en": "At risk of extinction",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is an extinct species?",
    "options_en": ["No longer exists anywhere", "Exists only in zoos", "Very rare", "Common"],
    "answer_en": "No longer exists anywhere",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is a threatened species?",
    "options_en": ["Likely to become endangered", "Completely safe", "Extinct", "Domestic animal"],
    "answer_en": "Likely to become endangered",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is conservation biology?",
    "options_en": ["Study of protecting biodiversity", "Study of chemistry", "Study of physics", "Study of mathematics"],
    "answer_en": "Study of protecting biodiversity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is a national park?",
    "options_en": ["Protected natural area", "City playground", "Shopping mall", "Industrial area"],
    "answer_en": "Protected natural area",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is a wildlife sanctuary?",
    "options_en": ["Protected area for animals", "Hunting ground", "Farm field", "City zoo"],
    "answer_en": "Protected area for animals",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is organic farming?",
    "options_en": ["Farming without synthetic chemicals", "Farming with all chemicals", "Indoor farming", "Hydroponic farming"],
    "answer_en": "Farming without synthetic chemicals",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is pesticide?",
    "options_en": ["Chemical to kill pests", "Chemical to help growth", "Natural fertilizer", "Water additive"],
    "answer_en": "Chemical to kill pests",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is fertilizer?",
    "options_en": ["Substance that enriches soil", "Substance that kills weeds", "Substance that repels insects", "Substance that dries soil"],
    "answer_en": "Substance that enriches soil",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is irrigation?",
    "options_en": ["Artificial watering of crops", "Natural rainfall", "Dew collection", "Flood prevention"],
    "answer_en": "Artificial watering of crops",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is drought?",
    "options_en": ["Long period without rain", "Heavy rainfall", "Normal weather", "Cold spell"],
    "answer_en": "Long period without rain",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is a flood?",
    "options_en": ["Overflow of water onto land", "Lack of water", "Normal water level", "Drought condition"],
    "answer_en": "Overflow of water onto land",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is global warming?",
    "options_en": ["Increase in Earth's temperature", "Decrease in temperature", "No temperature change", "Seasonal change"],
    "answer_en": "Increase in Earth's temperature",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What are greenhouse gases?",
    "options_en": ["Gases that trap heat", "Gases that cool Earth", "Gases in balloons", "Gases in drinks"],
    "answer_en": "Gases that trap heat",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is carbon dioxide?",
    "options_en": ["Major greenhouse gas", "Type of water", "Kind of soil", "Form of rock"],
    "answer_en": "Major greenhouse gas",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is methane?",
    "options_en": ["Greenhouse gas from waste", "Type of metal", "Form of water", "Kind of soil"],
    "answer_en": "Greenhouse gas from waste",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is the main cause of ocean acidification?",
    "options_en": ["Excess carbon dioxide", "Too little salt", "Too much oxygen", "Lack of fish"],
    "answer_en": "Excess carbon dioxide",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is coral bleaching?",
    "options_en": ["Coral losing color due to stress", "Coral growing new color", "Coral dying naturally", "Coral reproducing"],
    "answer_en": "Coral losing color due to stress",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is a carbon sink?",
    "options_en": ["Natural reservoir storing carbon", "Place to wash carbon", "Machine to make carbon", "Container for carbon"],
    "answer_en": "Natural reservoir storing carbon",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What are forests important for?",
    "options_en": ["Producing oxygen and storing carbon", "Making plastic", "Creating cities", "Building roads"],
    "answer_en": "Producing oxygen and storing carbon",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is urban sprawl?",
    "options_en": ["Unplanned city expansion", "City shrinking", "City staying same", "City planning"],
    "answer_en": "Unplanned city expansion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is public transportation good for?",
    "options_en": ["Reducing traffic and pollution", "Increasing pollution", "Wasting energy", "Using more cars"],
    "answer_en": "Reducing traffic and pollution",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is carpooling?",
    "options_en": ["Sharing car rides", "Buying new cars", "Driving alone", "Walking instead"],
    "answer_en": "Sharing car rides",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is walking or cycling good for?",
    "options_en": ["Exercise and zero pollution", "Causing pollution", "Wasting time", "Using fuel"],
    "answer_en": "Exercise and zero pollution",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is environmental justice?",
    "options_en": ["Fair treatment regarding environment", "Unfair pollution distribution", "Ignoring environment", "Only rich protection"],
    "answer_en": "Fair treatment regarding environment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is an ecological footprint?",
    "options_en": ["Impact of human on environment", "Size of shoe", "Pattern in nature", "Animal track"],
    "answer_en": "Impact of human on environment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is reduce in waste management?",
    "options_en": ["Using less in first place", "Using again", "Processing waste", "Throwing away"],
    "answer_en": "Using less in first place",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is reuse in waste management?",
    "options_en": ["Using items again", "Using less", "Processing waste", "Throwing away"],
    "answer_en": "Using items again",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is recycle in waste management?",
    "options_en": ["Processing waste into new products", "Using less", "Using again", "Throwing away"],
    "answer_en": "Processing waste into new products",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is upcycling?",
    "options_en": ["Creating higher value from waste", "Throwing away", "Burning waste", "Burying waste"],
    "answer_en": "Creating higher value from waste",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is environmental education?",
    "options_en": ["Teaching about environment", "Ignoring environment", "Only science facts", "Only math skills"],
    "answer_en": "Teaching about environment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is citizen science?",
    "options_en": ["Public participation in research", "Only expert science", "Government research", "Corporate research"],
    "answer_en": "Public participation in research",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the main message of ecology books?",
    "options_en": ["We're all connected to nature", "Ignore the environment", "Only scientists matter", "Nature is separate"],
    "answer_en": "We're all connected to nature",
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