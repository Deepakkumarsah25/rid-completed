const questions = [
  {
    "num": 1,
    "question_en": "Which gland in the human body is known as the 'master gland'?",
    "question_hi": "मानव शरीर में किस ग्रंथि को 'मास्टर ग्रंथि' कहा जाता है?",
    "options_en": ["Thyroid", "Pituitary", "Pancreas", "Adrenal"],
    "options_hi": ["थायरॉयड", "पिट्यूटरी", "अग्न्याशय", "एड्रेनल"],
    "answer_en": "Pituitary",
    "answer_hi": "पिट्यूटरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the chemical symbol of Gold?",
    "question_hi": "सोने का रासायनिक प्रतीक क्या है?",
    "options_en": ["Ag", "Au", "Pb", "Fe"],
    "options_hi": ["Ag", "Au", "Pb", "Fe"],
    "answer_en": "Au",
    "answer_hi": "Au",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Who invented the electric bulb?",
    "question_hi": "विद्युत बल्ब का आविष्कार किसने किया?",
    "options_en": ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Isaac Newton"],
    "options_hi": ["थॉमस एडिसन", "निकोला टेस्ला", "अलेक्जेंडर ग्राहम बेल", "आइज़ैक न्यूटन"],
    "answer_en": "Thomas Edison",
    "answer_hi": "थॉमस एडिसन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which planet is known as the 'Blue Planet'?",
    "question_hi": "किस ग्रह को 'नीला ग्रह' कहा जाता है?",
    "options_en": ["Earth", "Mars", "Neptune", "Uranus"],
    "options_hi": ["पृथ्वी", "मंगल", "वरुण", "अरुण"],
    "answer_en": "Earth",
    "answer_hi": "पृथ्वी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the SI unit of force?",
    "question_hi": "बल की SI इकाई क्या है?",
    "options_en": ["Pascal", "Newton", "Joule", "Watt"],
    "options_hi": ["पास्कल", "न्यूटन", "जूल", "वाट"],
    "answer_en": "Newton",
    "answer_hi": "न्यूटन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which gas is most abundant in the Earth's atmosphere?",
    "question_hi": "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"],
    "answer_en": "Nitrogen",
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the value of π (pi) up to two decimal places?",
    "question_hi": "π (पाई) का दो दशमलव स्थानों तक मान क्या है?",
    "options_en": ["3.14", "3.16", "3.12", "3.18"],
    "options_hi": ["3.14", "3.16", "3.12", "3.18"],
    "answer_en": "3.14",
    "answer_hi": "3.14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which vitamin is produced by the human body when exposed to sunlight?",
    "question_hi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर कौन सा विटामिन उत्पन्न करता है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    "options_hi": ["विटामिन ए", "विटामिन सी", "विटामिन डी", "विटामिन के"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन डी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Who is known as the Father of the Indian Constitution?",
    "question_hi": "भारतीय संविधान के पिता के रूप में किसे जाना जाता है?",
    "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "Sardar Patel"],
    "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "बी. आर. अंबेडकर", "सरदार पटेल"],
    "answer_en": "B. R. Ambedkar",
    "answer_hi": "बी. आर. अंबेडकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the capital of Australia?",
    "question_hi": "ऑस्ट्रेलिया की राजधानी क्या है?",
    "options_en": ["Sydney", "Melbourne", "Canberra", "Perth"],
    "options_hi": ["सिडनी", "मेलबोर्न", "कैनबरा", "पर्थ"],
    "answer_en": "Canberra",
    "answer_hi": "कैनबरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which is the longest river in the world?",
    "question_hi": "दुनिया की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Amazon", "Nile", "Yangtze", "Mississippi"],
    "options_hi": ["अमेज़न", "नील", "यांग्त्ज़ी", "मिसिसिपी"],
    "answer_en": "Nile",
    "answer_hi": "नील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the primary fuel used in a diesel engine?",
    "question_hi": "डीजल इंजन में प्राथमिक ईंधन क्या है?",
    "options_en": ["Petrol", "Diesel", "CNG", "LPG"],
    "options_hi": ["पेट्रोल", "डीजल", "सीएनजी", "एलपीजी"],
    "answer_en": "Diesel",
    "answer_hi": "डीजल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "In railway signalling, what does a 'Green' signal indicate?",
    "question_hi": "रेलवे सिग्नलिंग में, 'हरे' सिग्नल का क्या मतलब है?",
    "options_en": ["Stop", "Proceed with caution", "Proceed", "Reduce Speed"],
    "options_hi": ["रुकें", "सावधानी से आगे बढ़ें", "आगे बढ़ें", "गति कम करें"],
    "answer_en": "Proceed",
    "answer_hi": "आगे बढ़ें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which of the following is a scalar quantity?",
    "question_hi": "निम्नलिखित में से कौन सी एक अदिश राशि है?",
    "options_en": ["Force", "Velocity", "Speed", "Acceleration"],
    "options_hi": ["बल", "वेग", "चाल", "त्वरण"],
    "answer_en": "Speed",
    "answer_hi": "चाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the pH value of pure water?",
    "question_hi": "शुद्ध पानी का pH मान क्या है?",
    "options_en": ["5", "7", "8", "10"],
    "options_hi": ["5", "7", "8", "10"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which metal is used in the filament of an electric bulb?",
    "question_hi": "विद्युत बल्ब के फिलामेंट में किस धातु का उपयोग किया जाता है?",
    "options_en": ["Copper", "Aluminium", "Tungsten", "Silver"],
    "options_hi": ["तांबा", "एल्यूमीनियम", "टंगस्टन", "चांदी"],
    "answer_en": "Tungsten",
    "answer_hi": "टंगस्टन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the unit of electric current?",
    "question_hi": "विद्युत धारा की इकाई क्या है?",
    "options_en": ["Volt", "Watt", "Ampere", "Ohm"],
    "options_hi": ["वोल्ट", "वाट", "एम्पीयर", "ओम"],
    "answer_en": "Ampere",
    "answer_hi": "एम्पीयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Who was the first woman President of India?",
    "question_hi": "भारत की प्रथम महिला राष्ट्रपति कौन थीं?",
    "options_en": ["Indira Gandhi", "Pratibha Patil", "Sarojini Naidu", "Sonia Gandhi"],
    "options_hi": ["इंदिरा गांधी", "प्रतिभा पाटिल", "सरोजिनी नायडू", "सोनिया गांधी"],
    "answer_en": "Pratibha Patil",
    "answer_hi": "प्रतिभा पाटिल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which is the smallest continent by area?",
    "question_hi": "क्षेत्रफल के हिसाब से सबसे छोटा महाद्वीप कौन सा है?",
    "options_en": ["Africa", "Europe", "Australia", "Antarctica"],
    "options_hi": ["अफ्रीका", "यूरोप", "ऑस्ट्रेलिया", "अंटार्कटिका"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does CPU stand for in a computer?",
    "question_hi": "कंप्यूटर में CPU का पूरा नाम क्या है?",
    "options_en": ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Control Processing Unit"],
    "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंट्रोल प्रोसेसिंग यूनिट"],
    "answer_en": "Central Processing Unit",
    "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which element has the atomic number 1?",
    "question_hi": "किस तत्व की परमाणु संख्या 1 है?",
    "options_en": ["Helium", "Hydrogen", "Lithium", "Oxygen"],
    "options_hi": ["हीलियम", "हाइड्रोजन", "लिथियम", "ऑक्सीजन"],
    "answer_en": "Hydrogen",
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the chemical formula of common salt?",
    "question_hi": "साधारण नमक का रासायनिक सूत्र क्या है?",
    "options_en": ["NaCl", "KCl", "CaCO3", "H2O"],
    "options_hi": ["NaCl", "KCl", "CaCO3", "H2O"],
    "answer_en": "NaCl",
    "answer_hi": "NaCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "In which year did India gain independence?",
    "question_hi": "भारत को किस वर्ष स्वतंत्रता मिली?",
    "options_en": ["1945", "1947", "1950", "1935"],
    "options_hi": ["1945", "1947", "1950", "1935"],
    "answer_en": "1947",
    "answer_hi": "1947",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the full form of 'IRCTC'?",
    "question_hi": "'IRCTC' का पूरा रूप क्या है?",
    "options_en": ["Indian Railway Catering and Tourism Corporation", "Indian Rail Commerce and Tourism Council", "International Rail and Catering Tourism Corporation", "Indian Railway Corporation for Travel and Catering"],
    "options_hi": ["इंडियन रेलवे केटरिंग एंड टूरिज्म कॉरपोरेशन", "इंडियन रेल कॉमर्स एंड टूरिज्म काउंसिल", "इंटरनेशनल रेल एंड केटरिंग टूरिज्म कॉरपोरेशन", "इंडियन रेलवे कॉर्पोरेशन फॉर ट्रैवल एंड केटरिंग"],
    "answer_en": "Indian Railway Catering and Tourism Corporation",
    "answer_hi": "इंडियन रेलवे केटरिंग एंड टूरिज्म कॉरपोरेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which instrument is used to measure atmospheric pressure?",
    "question_hi": "वायुमंडलीय दबाव मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
    "options_hi": ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
    "answer_en": "Barometer",
    "answer_hi": "बैरोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Speed of light in vacuum is approximately:",
    "question_hi": "निर्वात में प्रकाश की गति लगभग है:",
    "options_en": ["3 x 10^8 m/s", "3 x 10^5 m/s", "3 x 10^3 m/s", "3 x 10^10 m/s"],
    "options_hi": ["3 x 10^8 मी/से", "3 x 10^5 मी/से", "3 x 10^3 मी/से", "3 x 10^10 मी/से"],
    "answer_en": "3 x 10^8 m/s",
    "answer_hi": "3 x 10^8 मी/से",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which of the following is a greenhouse gas?",
    "question_hi": "निम्नलिखित में से कौन सी एक ग्रीनहाउस गैस है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the value of 5! (5 factorial)?",
    "question_hi": "5! (5 फैक्टोरियल) का मान क्या है?",
    "options_en": ["100", "120", "60", "24"],
    "options_hi": ["100", "120", "60", "24"],
    "answer_en": "120",
    "answer_hi": "120",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which part of the plant is responsible for photosynthesis?",
    "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण के लिए जिम्मेदार है?",
    "options_en": ["Root", "Stem", "Leaf", "Flower"],
    "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
    "answer_en": "Leaf",
    "answer_hi": "पत्ती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Who wrote the Indian National Anthem?",
    "question_hi": "भारत के राष्ट्रगान के लेखक कौन हैं?",
    "options_en": ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Mahatma Gandhi"],
    "options_hi": ["बंकिम चंद्र चटर्जी", "रबीन्द्रनाथ टैगोर", "सरोजिनी नायडू", "महात्मा गांधी"],
    "answer_en": "Rabindranath Tagore",
    "answer_hi": "रबीन्द्रनाथ टैगोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the normal boiling point of water?",
    "question_hi": "पानी का सामान्य क्वथनांक क्या है?",
    "options_en": ["90°C", "100°C", "110°C", "120°C"],
    "options_hi": ["90°C", "100°C", "110°C", "120°C"],
    "answer_en": "100°C",
    "answer_hi": "100°C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which gas is filled in electric bulbs to prevent oxidation of filament?",
    "question_hi": "फिलामेंट के ऑक्सीकरण को रोकने के लिए विद्युत बल्बों में कौन सी गैस भरी जाती है?",
    "options_en": ["Hydrogen", "Oxygen", "Argon", "Chlorine"],
    "options_hi": ["हाइड्रोजन", "ऑक्सीजन", "आर्गन", "क्लोरीन"],
    "answer_en": "Argon",
    "answer_hi": "आर्गन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "The first railway line in India was opened in which year?",
    "question_hi": "भारत में पहली रेलवे लाइन किस वर्ष खोली गई थी?",
    "options_en": ["1850", "1853", "1857", "1861"],
    "options_hi": ["1850", "1853", "1857", "1861"],
    "answer_en": "1853",
    "answer_hi": "1853",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which of the following is not a primary colour of light?",
    "question_hi": "निम्नलिखित में से कौन सा प्रकाश का प्राथमिक रंग नहीं है?",
    "options_en": ["Red", "Green", "Blue", "Yellow"],
    "options_hi": ["लाल", "हरा", "नीला", "पीला"],
    "answer_en": "Yellow",
    "answer_hi": "पीला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the unit of resistance?",
    "question_hi": "प्रतिरोध की इकाई क्या है?",
    "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
    "options_hi": ["वोल्ट", "एम्पीयर", "ओम", "वाट"],
    "answer_en": "Ohm",
    "answer_hi": "ओम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which country hosted the 2020 Summer Olympics?",
    "question_hi": "2020 ग्रीष्मकालीन ओलंपिक की मेजबानी किस देश ने की?",
    "options_en": ["China", "Brazil", "Japan", "UK"],
    "options_hi": ["चीन", "ब्राजील", "जापान", "यूके"],
    "answer_en": "Japan",
    "answer_hi": "जापान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the square root of 144?",
    "question_hi": "144 का वर्गमूल क्या है?",
    "options_en": ["10", "11", "12", "13"],
    "options_hi": ["10", "11", "12", "13"],
    "answer_en": "12",
    "answer_hi": "12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which of these is a non-metal that is liquid at room temperature?",
    "question_hi": "यहाँ कौन सा अधातु कमरे के तापमान पर तरल है?",
    "options_en": ["Mercury", "Bromine", "Sodium", "Iron"],
    "options_hi": ["पारा", "ब्रोमीन", "सोडियम", "लोहा"],
    "answer_en": "Bromine",
    "answer_hi": "ब्रोमीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Who discovered the neutron?",
    "question_hi": "न्यूट्रॉन की खोज किसने की?",
    "options_en": ["J.J. Thomson", "James Chadwick", "Ernest Rutherford", "John Dalton"],
    "options_hi": ["जे.जे. थॉमसन", "जेम्स चैडविक", "अर्नेस्ट रदरफोर्ड", "जॉन डाल्टन"],
    "answer_en": "James Chadwick",
    "answer_hi": "जेम्स चैडविक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the full form of 'GPS'?",
    "question_hi": "'GPS' का पूरा रूप क्या है?",
    "options_en": ["Global Positioning System", "Geographic Positioning System", "General Positioning System", "Global Pointing System"],
    "options_hi": ["ग्लोबल पोजिशनिंग सिस्टम", "ज्योग्राफिक पोजिशनिंग सिस्टम", "जनरल पोजिशनिंग सिस्टम", "ग्लोबल पॉइंटिंग सिस्टम"],
    "answer_en": "Global Positioning System",
    "answer_hi": "ग्लोबल पोजिशनिंग सिस्टम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "In a railway track, the standard gauge width in India is:",
    "question_hi": "रेलवे ट्रैक में, भारत में मानक गेज की चौड़ाई है:",
    "options_en": ["1000 mm", "1435 mm", "1676 mm", "2000 mm"],
    "options_hi": ["1000 मिमी", "1435 मिमी", "1676 मिमी", "2000 मिमी"],
    "answer_en": "1676 mm",
    "answer_hi": "1676 मिमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which vitamin is also known as Ascorbic Acid?",
    "question_hi": "किस विटामिन को एस्कॉर्बिक अम्ल के नाम से भी जाना जाता है?",
    "options_en": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन ए", "विटामिन बी12", "विटामिन सी", "विटामिन डी"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन सी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the formula for the area of a circle?",
    "question_hi": "वृत्त के क्षेत्रफल का सूत्र क्या है?",
    "options_en": ["πd", "2πr", "πr²", "2πr²"],
    "options_hi": ["πd", "2πr", "πr²", "2πr²"],
    "answer_en": "πr²",
    "answer_hi": "πr²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which mountain range is known as the 'Backbone of South America'?",
    "question_hi": "किस पर्वत श्रृंखला को 'दक्षिण अमेरिका की रीढ़' कहा जाता है?",
    "options_en": ["Andes", "Rockies", "Alps", "Himalayas"],
    "options_hi": ["एंडीज", "रॉकीज़", "आल्प्स", "हिमालय"],
    "answer_en": "Andes",
    "answer_hi": "एंडीज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the function of a carburetor in an engine?",
    "question_hi": "इंजन में कार्बोरेटर का कार्य क्या है?",
    "options_en": ["To ignite fuel", "To mix air and fuel", "To compress air", "To cool the engine"],
    "options_hi": ["ईंधन को जलाना", "हवा और ईंधन को मिलाना", "हवा को संपीड़ित करना", "इंजन को ठंडा करना"],
    "answer_en": "To mix air and fuel",
    "answer_hi": "हवा और ईंधन को मिलाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which of the following is a renewable energy source?",
    "question_hi": "निम्नलिखित में से कौन सा एक नवीकरणीय ऊर्जा स्रोत है?",
    "options_en": ["Coal", "Natural Gas", "Solar Energy", "Petroleum"],
    "options_hi": ["कोयला", "प्राकृतिक गैस", "सौर ऊर्जा", "पेट्रोलियम"],
    "answer_en": "Solar Energy",
    "answer_hi": "सौर ऊर्जा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What does 'ALP' stand for in the railway recruitment context?",
    "question_hi": "रेलवे भर्ती के संदर्भ में 'ALP' का क्या अर्थ है?",
    "options_en": ["Assistant Loco Pilot", "Assistant Line Personnel", "Advanced Locomotive Professional", "Assistant Locomotive Power"],
    "options_hi": ["सहायक लोको पायलट", "सहायक लाइन कर्मी", "एडवांस्ड लोकोमोटिव पेशेवर", "सहायक लोकोमोटिव पावर"],
    "answer_en": "Assistant Loco Pilot",
    "answer_hi": "सहायक लोको पायलट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "The Red Fort is located in which Indian city?",
    "question_hi": "लाल किला किस भारतीय शहर में स्थित है?",
    "options_en": ["Mumbai", "Kolkata", "Delhi", "Jaipur"],
    "options_hi": ["मुंबई", "कोलकाता", "दिल्ली", "जयपुर"],
    "answer_en": "Delhi",
    "answer_hi": "दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "If a train covers 120 km in 2 hours, what is its speed?",
    "question_hi": "यदि एक ट्रेन 2 घंटे में 120 किमी की दूरी तय करती है, तो उसकी गति क्या है?",
    "options_en": ["40 km/h", "60 km/h", "80 km/h", "100 km/h"],
    "options_hi": ["40 किमी/घंटा", "60 किमी/घंटा", "80 किमी/घंटा", "100 किमी/घंटा"],
    "answer_en": "60 km/h",
    "answer_hi": "60 किमी/घंटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which is the largest gland in the human body?",
    "question_hi": "मानव शरीर में सबसे बड़ी ग्रंथि कौन सी है?",
    "options_en": ["Liver", "Pancreas", "Thyroid", "Kidney"],
    "options_hi": ["यकृत", "अग्न्याशय", "थायरॉयड", "गुर्दा"],
    "answer_en": "Liver",
    "answer_hi": "यकृत",
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