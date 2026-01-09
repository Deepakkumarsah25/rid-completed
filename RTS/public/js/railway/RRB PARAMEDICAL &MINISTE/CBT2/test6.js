const questions = [
  {
    "num": 1,
    "question_en": "What is the SI unit of electric current?",
    "question_hi": "विद्युत धारा की SI इकाई क्या है?",
    "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
    "options_hi": ["वोल्ट", "एम्पीयर", "ओम", "वाट"],
    "answer_en": "Ampere",
    "answer_hi": "एम्पीयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which device converts mechanical energy into electrical energy?",
    "question_hi": "कौन सा उपकरण यांत्रिक ऊर्जा को विद्युत ऊर्जा में परिवर्तित करता है?",
    "options_en": ["Motor", "Generator", "Transformer", "Rectifier"],
    "options_hi": ["मोटर", "जनरेटर", "ट्रांसफार्मर", "रेक्टिफायर"],
    "answer_en": "Generator",
    "answer_hi": "जनरेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the value of 1 horsepower in watts?",
    "question_hi": "1 हॉर्सपावर का मान वाट में कितना होता है?",
    "options_en": ["746 W", "550 W", "1000 W", "735.5 W"],
    "options_hi": ["746 W", "550 W", "1000 W", "735.5 W"],
    "answer_en": "746 W",
    "answer_hi": "746 W",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which law states that 'pressure applied to a confined fluid is transmitted equally in all directions'?",
    "question_hi": "कौन सा नियम कहता है कि 'एक सीमित द्रव पर लगाया गया दाब सभी दिशाओं में समान रूप से संचरित होता है'?",
    "options_en": ["Bernoulli's Theorem", "Pascal's Law", "Archimedes Principle", "Boyle's Law"],
    "options_hi": ["बर्नौली का प्रमेय", "पास्कल का नियम", "आर्किमिडीज का सिद्धांत", "बॉयल का नियम"],
    "answer_en": "Pascal's Law",
    "answer_hi": "पास्कल का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "In welding, which gas is commonly used as a shielding gas for MIG welding?",
    "question_hi": "वेल्डिंग में, MIG वेल्डिंग के लिए आमतौर पर किस गैस का उपयोग शील्डिंग गैस के रूप में किया जाता है?",
    "options_en": ["Oxygen", "Nitrogen", "Argon", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "हाइड्रोजन"],
    "answer_en": "Argon",
    "answer_hi": "आर्गन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the unit of frequency?",
    "question_hi": "आवृत्ति की इकाई क्या है?",
    "options_en": ["Hertz", "Decibel", "Newton", "Joule"],
    "options_hi": ["हर्ट्ज", "डेसीबल", "न्यूटन", "जूल"],
    "answer_en": "Hertz",
    "answer_hi": "हर्ट्ज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which material is used as a moderator in nuclear reactors?",
    "question_hi": "नाभिकीय रिएक्टरों में मंदक के रूप में किस पदार्थ का उपयोग किया जाता है?",
    "options_en": ["Graphite", "Uranium", "Plutonium", "Boron"],
    "options_hi": ["ग्रेफाइट", "यूरेनियम", "प्लूटोनियम", "बोरॉन"],
    "answer_en": "Graphite",
    "answer_hi": "ग्रेफाइट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "The property of a material to resist indentation or scratching is called:",
    "question_hi": "किसी पदार्थ का दबाव या खरोंच का विरोध करने का गुण कहलाता है:",
    "options_en": ["Ductility", "Hardness", "Malleability", "Brittleness"],
    "options_hi": ["आघातवर्धनीयता", "कठोरता", "आर्द्रता", "भंगुरता"],
    "answer_en": "Hardness",
    "answer_hi": "कठोरता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "In a DC motor, which component reverses the direction of current in the armature?",
    "question_hi": "DC मोटर में, कौन सा घटक आर्मेचर में धारा की दिशा उलट देता है?",
    "options_en": ["Commutator", "Brushes", "Field winding", "Armature core"],
    "options_hi": ["कम्यूटेटर", "ब्रश", "फील्ड वाइंडिंग", "आर्मेचर कोर"],
    "answer_en": "Commutator",
    "answer_hi": "कम्यूटेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which instrument is used to measure pressure?",
    "question_hi": "दबाव मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Barometer", "Thermometer", "Hygrometer", "Ammeter"],
    "options_hi": ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एमीटर"],
    "answer_en": "Barometer",
    "answer_hi": "बैरोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "The ratio of stress to strain within elastic limit is called:",
    "question_hi": "प्रत्यास्थ सीमा के भीतर प्रतिबल और विकृति का अनुपात कहलाता है:",
    "options_en": ["Modulus of elasticity", "Bulk modulus", "Shear modulus", "Poisson's ratio"],
    "options_hi": ["प्रत्यास्थता मापांक", "आयतन मापांक", "कर्तन मापांक", "पॉइसन अनुपात"],
    "answer_en": "Modulus of elasticity",
    "answer_hi": "प्रत्यास्थता मापांक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which type of bearing is used for heavy radial loads?",
    "question_hi": "भारी रेडियल लोड के लिए किस प्रकार के बेयरिंग का उपयोग किया जाता है?",
    "options_en": ["Ball bearing", "Roller bearing", "Thrust bearing", "Needle bearing"],
    "options_hi": ["बॉल बेयरिंग", "रोलर बेयरिंग", "थ्रस्ट बेयरिंग", "नीडल बेयरिंग"],
    "answer_en": "Roller bearing",
    "answer_hi": "रोलर बेयरिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "In a refrigeration cycle, the refrigerant absorbs heat in which component?",
    "question_hi": "प्रशीतन चक्र में, रेफ्रिजरेंट किस घटक में ऊष्मा अवशोषित करता है?",
    "options_en": ["Compressor", "Condenser", "Expansion valve", "Evaporator"],
    "options_hi": ["कंप्रेसर", "कंडेनसर", "विस्तार वाल्व", "इवैपोरेटर"],
    "answer_en": "Evaporator",
    "answer_hi": "इवैपोरेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "The process of heating steel above critical temperature and then cooling slowly is called:",
    "question_hi": "स्टील को क्रांतिक तापमान से ऊपर गर्म करने और फिर धीरे-धीरे ठंडा करने की प्रक्रिया कहलाती है:",
    "options_en": ["Annealing", "Normalizing", "Tempering", "Hardening"],
    "options_hi": ["एनीलिंग", "नॉर्मलाइजिंग", "टेम्परिंग", "हार्डनिंग"],
    "answer_en": "Annealing",
    "answer_hi": "एनीलिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which material is commonly used for making gears?",
    "question_hi": "गियर बनाने के लिए आमतौर पर किस पदार्थ का उपयोग किया जाता है?",
    "options_en": ["Aluminum", "Cast iron", "Brass", "All of these"],
    "options_hi": ["एल्युमीनियम", "कास्ट आयरन", "पीतल", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What does BIS stand for in Indian standards?",
    "question_hi": "भारतीय मानकों में BIS का क्या अर्थ है?",
    "options_en": ["Bureau of Indian Standards", "Board of Indian Standards", "Bureau of Industrial Standards", "Board of Industrial Safety"],
    "options_hi": ["भारतीय मानक ब्यूरो", "भारतीय मानक बोर्ड", "औद्योगिक मानक ब्यूरो", "औद्योगिक सुरक्षा बोर्ड"],
    "answer_en": "Bureau of Indian Standards",
    "answer_hi": "भारतीय मानक ब्यूरो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which type of thread is used for power transmission?",
    "question_hi": "पावर ट्रांसमिशन के लिए किस प्रकार के थ्रेड का उपयोग किया जाता है?",
    "options_en": ["V-thread", "Square thread", "Buttress thread", "Acme thread"],
    "options_hi": ["V-थ्रेड", "स्क्वायर थ्रेड", "बट्रेस थ्रेड", "एक्मे थ्रेड"],
    "answer_en": "Square thread",
    "answer_hi": "स्क्वायर थ्रेड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "In a car, the differential is used to:",
    "question_hi": "कार में, डिफरेंशियल का उपयोग किया जाता है:",
    "options_en": ["Allow wheels to rotate at different speeds", "Increase speed", "Reduce speed", "Change direction"],
    "options_hi": ["पहियों को अलग-अलग गति से घूमने देना", "गति बढ़ाना", "गति कम करना", "दिशा बदलना"],
    "answer_en": "Allow wheels to rotate at different speeds",
    "answer_hi": "पहियों को अलग-अलग गति से घूमने देना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "The first law of thermodynamics is also known as:",
    "question_hi": "ऊष्मागतिकी का पहला नियम इस रूप में भी जाना जाता है:",
    "options_en": ["Law of conservation of energy", "Law of entropy", "Zeroth law", "Charles' law"],
    "options_hi": ["ऊर्जा संरक्षण का नियम", "एन्ट्रॉपी का नियम", "शून्यवाँ नियम", "चार्ल्स का नियम"],
    "answer_en": "Law of conservation of energy",
    "answer_hi": "ऊर्जा संरक्षण का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which instrument is used to measure very small distances or thicknesses?",
    "question_hi": "बहुत छोटी दूरियों या मोटाई को मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Vernier caliper", "Micrometer", "Feeler gauge", "Screw gauge"],
    "options_hi": ["वर्नियर कैलिपर", "माइक्रोमीटर", "फीलर गेज", "स्क्रू गेज"],
    "answer_en": "Micrometer",
    "answer_hi": "माइक्रोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "In a four-stroke engine, the four strokes in order are:",
    "question_hi": "चार-स्ट्रोक इंजन में, चार स्ट्रोक क्रम में हैं:",
    "options_en": ["Intake, Compression, Power, Exhaust", "Intake, Power, Compression, Exhaust", "Compression, Intake, Power, Exhaust", "Exhaust, Intake, Compression, Power"],
    "options_hi": ["इंटेक, कम्प्रेशन, पावर, एग्जॉस्ट", "इंटेक, पावर, कम्प्रेशन, एग्जॉस्ट", "कम्प्रेशन, इंटेक, पावर, एग्जॉस्ट", "एग्जॉस्ट, इंटेक, कम्प्रेशन, पावर"],
    "answer_en": "Intake, Compression, Power, Exhaust",
    "answer_hi": "इंटेक, कम्प्रेशन, पावर, एग्जॉस्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which welding process uses a consumable electrode coated with flux?",
    "question_hi": "कौन सी वेल्डिंग प्रक्रिया फ्लक्स से लेपित एक उपभोज्य इलेक्ट्रोड का उपयोग करती है?",
    "options_en": ["TIG welding", "MIG welding", "Arc welding", "Gas welding"],
    "options_hi": ["TIG वेल्डिंग", "MIG वेल्डिंग", "आर्क वेल्डिंग", "गैस वेल्डिंग"],
    "answer_en": "Arc welding",
    "answer_hi": "आर्क वेल्डिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "The ability of a material to absorb energy before fracture is called:",
    "question_hi": "फ्रैक्चर से पहले ऊर्जा अवशोषित करने की किसी पदार्थ की क्षमता कहलाती है:",
    "options_en": ["Ductility", "Toughness", "Hardness", "Stiffness"],
    "options_hi": ["आघातवर्धनीयता", "कर्कशता", "कठोरता", "कठोरता"],
    "answer_en": "Toughness",
    "answer_hi": "कर्कशता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which law states that the rate of heat transfer is proportional to the temperature difference?",
    "question_hi": "कौन सा नियम कहता है कि ऊष्मा स्थानांतरण की दर तापमान अंतर के समानुपाती होती है?",
    "options_en": ["Fourier's law", "Newton's law of cooling", "Stefan-Boltzmann law", "Planck's law"],
    "options_hi": ["फूरियर का नियम", "न्यूटन का शीतलन नियम", "स्टीफन-बोल्ट्जमान नियम", "प्लैंक का नियम"],
    "answer_en": "Newton's law of cooling",
    "answer_hi": "न्यूटन का शीतलन नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the function of a carburetor in an engine?",
    "question_hi": "इंजन में कार्बोरेटर का कार्य क्या है?",
    "options_en": ["Mix air and fuel", "Ignite fuel", "Compress air", "Cool engine"],
    "options_hi": ["वायु और ईंधन मिलाना", "ईंधन प्रज्वलित करना", "वायु संपीड़ित करना", "इंजन ठंडा करना"],
    "answer_en": "Mix air and fuel",
    "answer_hi": "वायु और ईंधन मिलाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which material has the highest electrical conductivity?",
    "question_hi": "किस पदार्थ की विद्युत चालकता सबसे अधिक है?",
    "options_en": ["Copper", "Silver", "Gold", "Aluminum"],
    "options_hi": ["ताँबा", "चाँदी", "सोना", "एल्युमीनियम"],
    "answer_en": "Silver",
    "answer_hi": "चाँदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "The process of removing air from a refrigeration system is called:",
    "question_hi": "प्रशीतन प्रणाली से वायु निकालने की प्रक्रिया कहलाती है:",
    "options_en": ["Degassing", "Evacuation", "Dehydration", "Condensation"],
    "options_hi": ["डीगैसिंग", "निर्वातन", "निर्जलीकरण", "संघनन"],
    "answer_en": "Evacuation",
    "answer_hi": "निर्वातन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which bearing can handle both radial and axial loads?",
    "question_hi": "कौन सा बेयरिंग रेडियल और अक्षीय दोनों भार संभाल सकता है?",
    "options_en": ["Ball bearing", "Tapered roller bearing", "Both A and B", "None of these"],
    "options_hi": ["बॉल बेयरिंग", "टेपर्ड रोलर बेयरिंग", "A और B दोनों", "इनमें से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the purpose of a flywheel in an engine?",
    "question_hi": "इंजन में फ्लाईव्हील का उद्देश्य क्या है?",
    "options_en": ["Store energy", "Cool engine", "Increase speed", "Reduce noise"],
    "options_hi": ["ऊर्जा संग्रहित करना", "इंजन ठंडा करना", "गति बढ़ाना", "शोर कम करना"],
    "answer_en": "Store energy",
    "answer_hi": "ऊर्जा संग्रहित करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which type of fit has clearance between shaft and hole?",
    "question_hi": "किस प्रकार के फिट में शाफ्ट और होल के बीच क्लीयरेंस होता है?",
    "options_en": ["Clearance fit", "Interference fit", "Transition fit", "Press fit"],
    "options_hi": ["क्लीयरेंस फिट", "इंटरफेरेंस फिट", "ट्रांजिशन फिट", "प्रेस फिट"],
    "answer_en": "Clearance fit",
    "answer_hi": "क्लीयरेंस फिट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "In a transformer, which loss is also called iron loss?",
    "question_hi": "ट्रांसफार्मर में, किस हानि को आयरन लॉस भी कहा जाता है?",
    "options_en": ["Copper loss", "Eddy current loss", "Hysteresis loss", "Both B and C"],
    "options_hi": ["कॉपर लॉस", "एडी करंट लॉस", "हिस्टेरिसीस लॉस", "B और C दोनों"],
    "answer_en": "Both B and C",
    "answer_hi": "B और C दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which gear train has only one gear on each shaft?",
    "question_hi": "किस गियर ट्रेन में प्रत्येक शाफ्ट पर केवल एक गियर होता है?",
    "options_en": ["Simple gear train", "Compound gear train", "Epicyclic gear train", "Planetary gear train"],
    "options_hi": ["सरल गियर ट्रेन", "यौगिक गियर ट्रेन", "अधिचक्रीय गियर ट्रेन", "ग्रहीय गियर ट्रेन"],
    "answer_en": "Simple gear train",
    "answer_hi": "सरल गियर ट्रेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "The process of case hardening of steel involves:",
    "question_hi": "स्टील के केस हार्डनिंग की प्रक्रिया में शामिल है:",
    "options_en": ["Heating and quenching", "Adding carbon to surface", "Annealing", "Normalizing"],
    "options_hi": ["गर्म करना और डुबोना", "सतह पर कार्बन जोड़ना", "एनीलिंग", "नॉर्मलाइजिंग"],
    "answer_en": "Adding carbon to surface",
    "answer_hi": "सतह पर कार्बन जोड़ना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which instrument measures the rotational speed of a shaft?",
    "question_hi": "कौन सा उपकरण शाफ्ट की घूर्णन गति मापता है?",
    "options_en": ["Tachometer", "Speedometer", "Odometer", "Barometer"],
    "options_hi": ["टैकोमीटर", "स्पीडोमीटर", "ओडोमीटर", "बैरोमीटर"],
    "answer_en": "Tachometer",
    "answer_hi": "टैकोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "In a steam turbine, which type of blade is used in the first stage?",
    "question_hi": "स्टीम टर्बाइन में, पहले चरण में किस प्रकार के ब्लेड का उपयोग किया जाता है?",
    "options_en": ["Impulse blades", "Reaction blades", "Both equally", "Depends on design"],
    "options_hi": ["इम्पल्स ब्लेड", "रिएक्शन ब्लेड", "दोनों समान रूप से", "डिजाइन पर निर्भर करता है"],
    "answer_en": "Impulse blades",
    "answer_hi": "इम्पल्स ब्लेड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the unit of luminous intensity?",
    "question_hi": "ज्योति तीव्रता की इकाई क्या है?",
    "options_en": ["Lumen", "Candela", "Lux", "Watt"],
    "options_hi": ["लुमेन", "कैंडेला", "लक्स", "वाट"],
    "answer_en": "Candela",
    "answer_hi": "कैंडेला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which welding defect appears as a cavity in the weld metal?",
    "question_hi": "कौन सा वेल्डिंग दोष वेल्ड धातु में गुहा के रूप में दिखाई देता है?",
    "options_en": ["Porosity", "Undercut", "Slag inclusion", "Crack"],
    "options_hi": ["छिद्रता", "अंडरकट", "स्लैग समावेशन", "दरार"],
    "answer_en": "Porosity",
    "answer_hi": "छिद्रता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "The ratio of actual mechanical advantage to ideal mechanical advantage is called:",
    "question_hi": "वास्तविक यांत्रिक लाभ और आदर्श यांत्रिक लाभ के अनुपात को कहा जाता है:",
    "options_en": ["Efficiency", "Velocity ratio", "Mechanical advantage", "Load factor"],
    "options_hi": ["दक्षता", "वेग अनुपात", "यांत्रिक लाभ", "लोड फैक्टर"],
    "answer_en": "Efficiency",
    "answer_hi": "दक्षता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What was the fourth word in the list you memorized? (List: Bolt, Nut, Washer, Rivet, Screw)",
    "question_hi": "आपके द्वारा याद की गई सूची में चौथा शब्द क्या था? (सूची: बोल्ट, नट, वाशर, रिवेट, स्क्रू)",
    "options_en": ["Washer", "Rivet", "Nut", "Screw"],
    "options_hi": ["वाशर", "रिवेट", "नट", "स्क्रू"],
    "answer_en": "Rivet",
    "answer_hi": "रिवेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "In a belt drive, the phenomenon where the belt does not move on the pulley is called:",
    "question_hi": "बेल्ट ड्राइव में, वह घटना जहां बेल्ट पुली पर नहीं चलती है, कहलाती है:",
    "options_en": ["Creep", "Slip", "Tension", "Sag"],
    "options_hi": ["क्रीप", "स्लिप", "तनाव", "झोल"],
    "answer_en": "Slip",
    "answer_hi": "स्लिप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which type of fire extinguisher is used for electrical fires?",
    "question_hi": "विद्युत आग के लिए किस प्रकार के अग्निशामक का उपयोग किया जाता है?",
    "options_en": ["Water type", "Foam type", "CO2 type", "Dry powder type"],
    "options_hi": ["पानी प्रकार", "फोम प्रकार", "CO2 प्रकार", "ड्राई पाउडर प्रकार"],
    "answer_en": "CO2 type",
    "answer_hi": "CO2 प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "The temperature at which a substance changes from solid to liquid is called:",
    "question_hi": "वह तापमान जिस पर कोई पदार्थ ठोस से तरल में बदल जाता है, कहलाता है:",
    "options_en": ["Melting point", "Boiling point", "Freezing point", "Sublimation point"],
    "options_hi": ["गलनांक", "क्वथनांक", "हिमांक", "उर्ध्वपातन बिंदु"],
    "answer_en": "Melting point",
    "answer_hi": "गलनांक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which circuit breaker is commonly used in high voltage applications?",
    "question_hi": "उच्च वोल्टेज अनुप्रयोगों में आमतौर पर किस सर्किट ब्रेकर का उपयोग किया जाता है?",
    "options_en": ["Air circuit breaker", "Oil circuit breaker", "SF6 circuit breaker", "Vacuum circuit breaker"],
    "options_hi": ["एयर सर्किट ब्रेकर", "ऑयल सर्किट ब्रेकर", "SF6 सर्किट ब्रेकर", "वैक्यूम सर्किट ब्रेकर"],
    "answer_en": "SF6 circuit breaker",
    "answer_hi": "SF6 सर्किट ब्रेकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the function of a thermostat in an engine cooling system?",
    "question_hi": "इंजन कूलिंग सिस्टम में थर्मोस्टेट का कार्य क्या है?",
    "options_en": ["Regulate temperature", "Increase pressure", "Filter coolant", "Pump coolant"],
    "options_hi": ["तापमान नियंत्रित करना", "दबाव बढ़ाना", "कूलेंट फिल्टर करना", "कूलेंट पंप करना"],
    "answer_en": "Regulate temperature",
    "answer_hi": "तापमान नियंत्रित करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which material is used for making cutting tools?",
    "question_hi": "कटिंग टूल बनाने के लिए किस पदार्थ का उपयोग किया जाता है?",
    "options_en": ["High speed steel", "Carbon steel", "Cast iron", "Aluminum"],
    "options_hi": ["हाई स्पीड स्टील", "कार्बन स्टील", "कास्ट आयरन", "एल्युमीनियम"],
    "answer_en": "High speed steel",
    "answer_hi": "हाई स्पीड स्टील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "In a cam and follower mechanism, the follower moves:",
    "question_hi": "कैम और फॉलोवर तंत्र में, फॉलोवर चलता है:",
    "options_en": ["Perpendicular to cam", "Parallel to cam", "In contact with cam", "Independent of cam"],
    "options_hi": ["कैम के लंबवत", "कैम के समानांतर", "कैम के संपर्क में", "कैम से स्वतंत्र"],
    "answer_en": "In contact with cam",
    "answer_hi": "कैम के संपर्क में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which type of pump is used for high pressure applications?",
    "question_hi": "उच्च दबाव अनुप्रयोगों के लिए किस प्रकार के पंप का उपयोग किया जाता है?",
    "options_en": ["Centrifugal pump", "Reciprocating pump", "Gear pump", "Vane pump"],
    "options_hi": ["केन्द्रापसारक पंप", "प्रत्यागामी पंप", "गियर पंप", "वेन पंप"],
    "answer_en": "Reciprocating pump",
    "answer_hi": "प्रत्यागामी पंप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "The ability of a material to be drawn into wires is called:",
    "question_hi": "किसी पदार्थ की तारों में खींचे जाने की क्षमता कहलाती है:",
    "options_en": ["Malleability", "Ductility", "Elasticity", "Plasticity"],
    "options_hi": ["आर्द्रता", "आघातवर्धनीयता", "प्रत्यास्थता", "प्लास्टिसिटी"],
    "answer_en": "Ductility",
    "answer_hi": "आघातवर्धनीयता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which type of turbine is used for high head and low discharge?",
    "question_hi": "उच्च हेड और कम डिस्चार्ज के लिए किस प्रकार के टर्बाइन का उपयोग किया जाता है?",
    "options_en": ["Pelton wheel", "Francis turbine", "Kaplan turbine", "Propeller turbine"],
    "options_hi": ["पेल्टन व्हील", "फ्रांसिस टर्बाइन", "कपलान टर्बाइन", "प्रोपेलर टर्बाइन"],
    "answer_en": "Pelton wheel",
    "answer_hi": "पेल्टन व्हील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "The process of joining metals using a filler metal with melting point above 450°C is called:",
    "question_hi": "450°C से ऊपर गलनांक वाली फिलर धातु का उपयोग करके धातुओं को जोड़ने की प्रक्रिया कहलाती है:",
    "options_en": ["Soldering", "Brazing", "Welding", "Riveting"],
    "options_hi": ["सोल्डरिंग", "ब्रेज़िंग", "वेल्डिंग", "रिवेटिंग"],
    "answer_en": "Brazing",
    "answer_hi": "ब्रेज़िंग",
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