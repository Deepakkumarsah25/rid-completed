const questions = [
  {
    "num": 1,
    "question_en": "What is the SI unit of electric current?",
    "question_hi": "विद्युत धारा की SI इकाई क्या है?",
    "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
    "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
    "answer_en": "Ampere",
    "answer_hi": "एम्पियर"
  },
  {
    "num": 2,
    "question_en": "Which of these is a greenhouse gas?",
    "question_hi": "निम्न में से कौन एक ग्रीनहाउस गैस है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Carbon dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड"
  },
  {
    "num": 3,
    "question_en": "Which is the longest river in India?",
    "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
    "options_hi": ["गंगा", "यमुना", "गोदावरी", "ब्रह्मपुत्र"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा"
  },
  {
    "num": 4,
    "question_en": "What is the chemical symbol for gold?",
    "question_hi": "सोने का रासायनिक प्रतीक क्या है?",
    "options_en": ["Ag", "Au", "Pb", "Fe"],
    "options_hi": ["Ag", "Au", "Pb", "Fe"],
    "answer_en": "Au",
    "answer_hi": "Au"
  },
  {
    "num": 5,
    "question_en": "Which metal is used in making electric wires?",
    "question_hi": "बिजली के तार बनाने में किस धातु का उपयोग किया जाता है?",
    "options_en": ["Iron", "Copper", "Aluminium", "Silver"],
    "options_hi": ["लोहा", "ताँबा", "अल्यूमीनियम", "चाँदी"],
    "answer_en": "Copper",
    "answer_hi": "ताँबा"
  },
  {
    "num": 6,
    "question_en": "Who invented the telephone?",
    "question_hi": "टेलीफोन का आविष्कार किसने किया?",
    "options_en": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "James Watt"],
    "options_hi": ["थॉमस एडिसन", "अलेक्ज़ेंडर ग्राहम बेल", "निकोला टेस्ला", "जेम्स वाट"],
    "answer_en": "Alexander Graham Bell",
    "answer_hi": "अलेक्ज़ेंडर ग्राहम बेल"
  },
  {
    "num": 7,
    "question_en": "The unit of force is:",
    "question_hi": "बल की इकाई है:",
    "options_en": ["Joule", "Newton", "Pascal", "Watt"],
    "options_hi": ["जूल", "न्यूटन", "पास्कल", "वाट"],
    "answer_en": "Newton",
    "answer_hi": "न्यूटन"
  },
  {
    "num": 8,
    "question_en": "Which of the following is not a primary color of light?",
    "question_hi": "निम्नलिखित में से कौन प्रकाश का प्राथमिक रंग नहीं है?",
    "options_en": ["Red", "Green", "Blue", "Yellow"],
    "options_hi": ["लाल", "हरा", "नीला", "पीला"],
    "answer_en": "Yellow",
    "answer_hi": "पीला"
  },
  {
    "num": 9,
    "question_en": "Which is the hardest substance on Earth?",
    "question_hi": "पृथ्वी पर सबसे कठोर पदार्थ कौन सा है?",
    "options_en": ["Iron", "Gold", "Diamond", "Platinum"],
    "options_hi": ["लोहा", "सोना", "हीरा", "प्लैटिनम"],
    "answer_en": "Diamond",
    "answer_hi": "हीरा"
  },
  {
    "num": 10,
    "question_en": "What is the pH value of pure water?",
    "question_hi": "शुद्ध पानी का pH मान कितना होता है?",
    "options_en": ["5", "7", "8", "6"],
    "options_hi": ["5", "7", "8", "6"],
    "answer_en": "7",
    "answer_hi": "7"
  },
  {
    "num": 11,
    "question_en": "Which planet is known as the Red Planet?",
    "question_hi": "कौन सा ग्रह लाल ग्रह के रूप में जाना जाता है?",
    "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
    "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
    "answer_en": "Mars",
    "answer_hi": "मंगल"
  },
  {
    "num": 12,
    "question_en": "The filament of an electric bulb is made of:",
    "question_hi": "बिजली के बल्ब का फिलामेंट किससे बना होता है?",
    "options_en": ["Copper", "Aluminium", "Tungsten", "Iron"],
    "options_hi": ["ताँबा", "अल्यूमीनियम", "टंगस्टन", "लोहा"],
    "answer_en": "Tungsten",
    "answer_hi": "टंगस्टन"
  },
  {
    "num": 13,
    "question_en": "Which gas is filled in electric bulbs?",
    "question_hi": "बिजली के बल्बों में कौन सी गैस भरी जाती है?",
    "options_en": ["Oxygen", "Hydrogen", "Argon", "Nitrogen"],
    "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "आर्गन", "नाइट्रोजन"],
    "answer_en": "Argon",
    "answer_hi": "आर्गन"
  },
  {
    "num": 14,
    "question_en": "What is the capital of Australia?",
    "question_hi": "ऑस्ट्रेलिया की राजधानी क्या है?",
    "options_en": ["Sydney", "Melbourne", "Canberra", "Perth"],
    "options_hi": ["सिडनी", "मेलबोर्न", "कैनबरा", "पर्थ"],
    "answer_en": "Canberra",
    "answer_hi": "कैनबरा"
  },
  {
    "num": 15,
    "question_en": "The first Indian satellite was:",
    "question_hi": "भारत का पहला उपग्रह था:",
    "options_en": ["Bhaskara", "Aryabhata", "Rohini", "INSAT"],
    "options_hi": ["भास्कर", "आर्यभट्ट", "रोहिणी", "इनसैट"],
    "answer_en": "Aryabhata",
    "answer_hi": "आर्यभट्ट"
  },
  {
    "num": 16,
    "question_en": "Who discovered penicillin?",
    "question_hi": "पेनिसिलिन की खोज किसने की?",
    "options_en": ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Marie Curie"],
    "options_hi": ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "रॉबर्ट कोच", "मैरी क्यूरी"],
    "answer_en": "Alexander Fleming",
    "answer_hi": "अलेक्जेंडर फ्लेमिंग"
  },
  {
    "num": 17,
    "question_en": "Which device converts AC to DC?",
    "question_hi": "कौन सा उपकरण AC को DC में बदलता है?",
    "options_en": ["Transformer", "Rectifier", "Amplifier", "Motor"],
    "options_hi": ["ट्रांसफार्मर", "रेक्टिफायर", "एम्पलीफायर", "मोटर"],
    "answer_en": "Rectifier",
    "answer_hi": "रेक्टिफायर"
  },
  {
    "num": 18,
    "question_en": "The speed of light in vacuum is:",
    "question_hi": "निर्वात में प्रकाश की गति है:",
    "options_en": ["3×10^5 m/s", "3×10^8 m/s", "3×10^3 m/s", "3×10^6 m/s"],
    "options_hi": ["3×10^5 m/s", "3×10^8 m/s", "3×10^3 m/s", "3×10^6 m/s"],
    "answer_en": "3×10^8 m/s",
    "answer_hi": "3×10^8 m/s"
  },
  {
    "num": 19,
    "question_en": "What is the chemical formula of water?",
    "question_hi": "पानी का रासायनिक सूत्र क्या है?",
    "options_en": ["H2O", "CO2", "NaCl", "O2"],
    "options_hi": ["H2O", "CO2", "NaCl", "O2"],
    "answer_en": "H2O",
    "answer_hi": "H2O"
  },
  {
    "num": 20,
    "question_en": "Which of these is a vector quantity?",
    "question_hi": "निम्न में से कौन सदिश राशि है?",
    "options_en": ["Mass", "Time", "Speed", "Velocity"],
    "options_hi": ["द्रव्यमान", "समय", "चाल", "वेग"],
    "answer_en": "Velocity",
    "answer_hi": "वेग"
  },
  {
    "num": 21,
    "question_en": "The first nuclear reactor in India is:",
    "question_hi": "भारत में पहला परमाणु रिएक्टर है:",
    "options_en": ["Apsara", "Cirus", "Dhruva", "Kamini"],
    "options_hi": ["अप्सरा", "साइरस", "ध्रुव", "कामिनी"],
    "answer_en": "Apsara",
    "answer_hi": "अप्सरा"
  },
  {
    "num": 22,
    "question_en": "Which vitamin is also known as ascorbic acid?",
    "question_hi": "किस विटामिन को एस्कॉर्बिक अम्ल भी कहा जाता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C"
  },
  {
    "num": 23,
    "question_en": "What is the unit of frequency?",
    "question_hi": "आवृत्ति की इकाई क्या है?",
    "options_en": ["Hertz", "Decibel", "Ohm", "Farad"],
    "options_hi": ["हर्ट्ज़", "डेसीबल", "ओम", "फैराड"],
    "answer_en": "Hertz",
    "answer_hi": "हर्ट्ज़"
  },
  {
    "num": 24,
    "question_en": "Which mirror is used in vehicle headlights?",
    "question_hi": "वाहन की हेडलाइट्स में कौन सा दर्पण प्रयोग किया जाता है?",
    "options_en": ["Plane mirror", "Concave mirror", "Convex mirror", "Spherical mirror"],
    "options_hi": ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "गोलीय दर्पण"],
    "answer_en": "Concave mirror",
    "answer_hi": "अवतल दर्पण"
  },
  {
    "num": 25,
    "question_en": "Which instrument is used to measure electric current?",
    "question_hi": "विद्युत धारा मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Voltmeter", "Ammeter", "Galvanometer", "Ohmmeter"],
    "options_hi": ["वोल्टमीटर", "एमीटर", "गैल्वेनोमीटर", "ओममीटर"],
    "answer_en": "Ammeter",
    "answer_hi": "एमीटर"
  },
  {
    "num": 26,
    "question_en": "Which gas is used in fire extinguishers?",
    "question_hi": "आग बुझाने के यंत्र में कौन सी गैस प्रयोग की जाती है?",
    "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड"
  },
  {
    "num": 27,
    "question_en": "What is the value of g (acceleration due to gravity)?",
    "question_hi": "g (गुरुत्वीय त्वरण) का मान कितना है?",
    "options_en": ["9.8 m/s²", "8.9 m/s²", "10 m/s²", "7.8 m/s²"],
    "options_hi": ["9.8 m/s²", "8.9 m/s²", "10 m/s²", "7.8 m/s²"],
    "answer_en": "9.8 m/s²",
    "answer_hi": "9.8 m/s²"
  },
  {
    "num": 28,
    "question_en": "Which metal is liquid at room temperature?",
    "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
    "options_en": ["Iron", "Copper", "Mercury", "Silver"],
    "options_hi": ["लोहा", "ताँबा", "पारा", "चाँदी"],
    "answer_en": "Mercury",
    "answer_hi": "पारा"
  },
  {
    "num": 29,
    "question_en": "Which lens is used in a magnifying glass?",
    "question_hi": "आवर्धक कांच में कौन सा लेंस प्रयोग किया जाता है?",
    "options_en": ["Concave lens", "Convex lens", "Plano-concave", "Cylindrical lens"],
    "options_hi": ["अवतल लेंस", "उत्तल लेंस", "प्लेनो-कॉन्केव", "बेलनाकार लेंस"],
    "answer_en": "Convex lens",
    "answer_hi": "उत्तल लेंस"
  },
  {
    "num": 30,
    "question_en": "Which acid is present in vinegar?",
    "question_hi": "सिरका में कौन सा अम्ल उपस्थित होता है?",
    "options_en": ["Citric acid", "Acetic acid", "Sulfuric acid", "Hydrochloric acid"],
    "options_hi": ["सिट्रिक अम्ल", "एसिटिक अम्ल", "सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
    "answer_en": "Acetic acid",
    "answer_hi": "एसिटिक अम्ल"
  },
  {
    "num": 31,
    "question_en": "The unit of pressure is:",
    "question_hi": "दाब की इकाई है:",
    "options_en": ["Newton", "Pascal", "Joule", "Watt"],
    "options_hi": ["न्यूटन", "पास्कल", "जूल", "वाट"],
    "answer_en": "Pascal",
    "answer_hi": "पास्कल"
  },
  {
    "num": 32,
    "question_en": "Which of the following is a non-metal?",
    "question_hi": "निम्नलिखित में से कौन एक अधातु है?",
    "options_en": ["Iron", "Copper", "Sulfur", "Aluminium"],
    "options_hi": ["लोहा", "ताँबा", "सल्फर", "अल्यूमीनियम"],
    "answer_en": "Sulfur",
    "answer_hi": "सल्फर"
  },
  {
    "num": 33,
    "question_en": "Who is known as the Father of Computers?",
    "question_hi": "किसे कंप्यूटर के जनक के रूप में जाना जाता है?",
    "options_en": ["Charles Babbage", "Alan Turing", "John von Neumann", "Bill Gates"],
    "options_hi": ["चार्ल्स बैबेज", "एलन ट्यूरिंग", "जॉन वॉन न्यूमैन", "बिल गेट्स"],
    "answer_en": "Charles Babbage",
    "answer_hi": "चार्ल्स बैबेज"
  },
  {
    "num": 34,
    "question_en": "Which gas is most abundant in Earth's atmosphere?",
    "question_hi": "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "आर्गन"],
    "answer_en": "Nitrogen",
    "answer_hi": "नाइट्रोजन"
  },
  {
    "num": 35,
    "question_en": "Which of these is a good conductor of heat?",
    "question_hi": "निम्न में से कौन ऊष्मा का सुचालक है?",
    "options_en": ["Wood", "Plastic", "Copper", "Rubber"],
    "options_hi": ["लकड़ी", "प्लास्टिक", "ताँबा", "रबर"],
    "answer_en": "Copper",
    "answer_hi": "ताँबा"
  },
  {
    "num": 36,
    "question_en": "Which mirror forms virtual and erect images?",
    "question_hi": "कौन सा दर्पण आभासी और सीधा प्रतिबिंब बनाता है?",
    "options_en": ["Concave mirror", "Plane mirror", "Convex mirror", "Both b and c"],
    "options_hi": ["अवतल दर्पण", "समतल दर्पण", "उत्तल दर्पण", "b और c दोनों"],
    "answer_en": "Both b and c",
    "answer_hi": "b और c दोनों"
  },
  {
    "num": 37,
    "question_en": "What is the unit of work?",
    "question_hi": "कार्य की इकाई क्या है?",
    "options_en": ["Joule", "Newton", "Watt", "Pascal"],
    "options_hi": ["जूल", "न्यूटन", "वाट", "पास्कल"],
    "answer_en": "Joule",
    "answer_hi": "जूल"
  },
  {
    "num": 38,
    "question_en": "Which device is used to measure voltage?",
    "question_hi": "वोल्टेज मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Ammeter", "Voltmeter", "Galvanometer", "Ohmmeter"],
    "options_hi": ["एमीटर", "वोल्टमीटर", "गैल्वेनोमीटर", "ओममीटर"],
    "answer_en": "Voltmeter",
    "answer_hi": "वोल्टमीटर"
  },
  {
    "num": 39,
    "question_en": "Which of these is a renewable source of energy?",
    "question_hi": "निम्न में से कौन ऊर्जा का नवीकरणीय स्रोत है?",
    "options_en": ["Coal", "Petroleum", "Solar energy", "Natural gas"],
    "options_hi": ["कोयला", "पेट्रोलियम", "सौर ऊर्जा", "प्राकृतिक गैस"],
    "answer_en": "Solar energy",
    "answer_hi": "सौर ऊर्जा"
  },
  {
    "num": 40,
    "question_en": "The density of water is:",
    "question_hi": "पानी का घनत्व है:",
    "options_en": ["1000 kg/m³", "900 kg/m³", "1100 kg/m³", "800 kg/m³"],
    "options_hi": ["1000 kg/m³", "900 kg/m³", "1100 kg/m³", "800 kg/m³"],
    "answer_en": "1000 kg/m³",
    "answer_hi": "1000 kg/m³"
  },
  {
    "num": 41,
    "question_en": "Which of the following is a semiconductor?",
    "question_hi": "निम्नलिखित में से कौन एक अर्धचालक है?",
    "options_en": ["Copper", "Silicon", "Silver", "Gold"],
    "options_hi": ["ताँबा", "सिलिकॉन", "चाँदी", "सोना"],
    "answer_en": "Silicon",
    "answer_hi": "सिलिकॉन"
  },
  {
    "num": 42,
    "question_en": "Which gas is used in balloons to make them float?",
    "question_hi": "गुब्बारों को उड़ाने के लिए किस गैस का प्रयोग किया जाता है?",
    "options_en": ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
    "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "हीलियम", "नाइट्रोजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम"
  },
  {
    "num": 43,
    "question_en": "Which is the smallest planet in our solar system?",
    "question_hi": "हमारे सौर मंडल का सबसे छोटा ग्रह कौन सा है?",
    "options_en": ["Mercury", "Mars", "Venus", "Pluto"],
    "options_hi": ["बुध", "मंगल", "शुक्र", "प्लूटो"],
    "answer_en": "Mercury",
    "answer_hi": "बुध"
  },
  {
    "num": 44,
    "question_en": "Which instrument is used to measure atmospheric pressure?",
    "question_hi": "वायुमंडलीय दबाव मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
    "options_hi": ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
    "answer_en": "Barometer",
    "answer_hi": "बैरोमीटर"
  },
  {
    "num": 45,
    "question_en": "The chemical formula of table salt is:",
    "question_hi": "साधारण नमक का रासायनिक सूत्र है:",
    "options_en": ["NaCl", "NaOH", "HCl", "KCl"],
    "options_hi": ["NaCl", "NaOH", "HCl", "KCl"],
    "answer_en": "NaCl",
    "answer_hi": "NaCl"
  },
  {
    "num": 46,
    "question_en": "Which of these is an insulator?",
    "question_hi": "निम्न में से कौन कुचालक है?",
    "options_en": ["Copper", "Aluminium", "Rubber", "Silver"],
    "options_hi": ["ताँबा", "अल्यूमीनियम", "रबर", "चाँदी"],
    "answer_en": "Rubber",
    "answer_hi": "रबर"
  },
  {
    "num": 47,
    "question_en": "Who discovered the law of gravitation?",
    "question_hi": "गुरुत्वाकर्षण के नियम की खोज किसने की?",
    "options_en": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Archimedes"],
    "options_hi": ["अल्बर्ट आइंस्टीन", "आइजैक न्यूटन", "गैलीलियो गैलीली", "आर्किमिडीज"],
    "answer_en": "Isaac Newton",
    "answer_hi": "आइजैक न्यूटन"
  },
  {
    "num": 48,
    "question_en": "What is the SI unit of power?",
    "question_hi": "शक्ति की SI इकाई क्या है?",
    "options_en": ["Joule", "Newton", "Watt", "Volt"],
    "options_hi": ["जूल", "न्यूटन", "वाट", "वोल्ट"],
    "answer_en": "Watt",
    "answer_hi": "वाट"
  },
  {
    "num": 49,
    "question_en": "Which device converts mechanical energy into electrical energy?",
    "question_hi": "कौन सा उपकरण यांत्रिक ऊर्जा को विद्युत ऊर्जा में बदलता है?",
    "options_en": ["Motor", "Generator", "Transformer", "Rectifier"],
    "options_hi": ["मोटर", "जनरेटर", "ट्रांसफार्मर", "रेक्टिफायर"],
    "answer_en": "Generator",
    "answer_hi": "जनरेटर"
  },
  {
    "num": 50,
    "question_en": "The longest railway platform in India is at:",
    "question_hi": "भारत में सबसे लंबा रेलवे प्लेटफॉर्म कहाँ है?",
    "options_en": ["Howrah", "Gorakhpur", "Kharagpur", "New Delhi"],
    "options_hi": ["हावड़ा", "गोरखपुर", "खड़गपुर", "नई दिल्ली"],
    "answer_en": "Gorakhpur",
    "answer_hi": "गोरखपुर"
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