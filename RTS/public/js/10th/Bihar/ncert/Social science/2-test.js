const questions = [
  {
    "num": 1,
    "question_en": "What is the study of human societies called?",
    "question_hi": "मानव समाजों के अध्ययन को क्या कहा जाता है?",
    "options_en": ["Biology", "Sociology", "Psychology", "Economics"],
    "options_hi": ["जीव विज्ञान", "समाजशास्त्र", "मनोविज्ञान", "अर्थशास्त्र"],
    "answer_en": "Sociology",
    "answer_hi": "समाजशास्त्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Who wrote 'The Communist Manifesto'?",
    "question_hi": "'कम्युनिस्ट मैनिफेस्टो' किसने लिखा?",
    "options_en": ["Adam Smith", "Karl Marx", "John Keynes", "Max Weber"],
    "options_hi": ["एडम स्मिथ", "कार्ल मार्क्स", "जॉन कीन्स", "मैक्स वेबर"],
    "answer_en": "Karl Marx",
    "answer_hi": "कार्ल मार्क्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the capital of India?",
    "question_hi": "भारत की राजधानी क्या है?",
    "options_en": ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    "options_hi": ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
    "answer_en": "Delhi",
    "answer_hi": "दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which river is considered holy in Hinduism?",
    "question_hi": "किस नदी को हिंदू धर्म में पवित्र माना जाता है?",
    "options_en": ["Nile", "Amazon", "Ganges", "Yangtze"],
    "options_hi": ["नील", "अमेज़न", "गंगा", "यांग्त्ज़ी"],
    "answer_en": "Ganges",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is democracy?",
    "question_hi": "लोकतंत्र क्या है?",
    "options_en": ["Rule by king", "Rule by people", "Rule by military", "Rule by few"],
    "options_hi": ["राजा द्वारा शासन", "लोगों द्वारा शासन", "सेना द्वारा शासन", "कुछ लोगों द्वारा शासन"],
    "answer_en": "Rule by people",
    "answer_hi": "लोगों द्वारा शासन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Who was the first President of India?",
    "question_hi": "भारत के प्रथम राष्ट्रपति कौन थे?",
    "options_en": ["Rajendra Prasad", "Jawaharlal Nehru", "Sardar Patel", "B.R. Ambedkar"],
    "options_hi": ["राजेंद्र प्रसाद", "जवाहरलाल नेहरू", "सरदार पटेल", "बी.आर. अंबेडकर"],
    "answer_en": "Rajendra Prasad",
    "answer_hi": "राजेंद्र प्रसाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is inflation?",
    "question_hi": "मुद्रास्फीति क्या है?",
    "options_en": ["Decrease in prices", "Increase in prices", "Stable prices", "No prices"],
    "options_hi": ["कीमतों में कमी", "कीमतों में वृद्धि", "स्थिर कीमतें", "कोई कीमत नहीं"],
    "answer_en": "Increase in prices",
    "answer_hi": "कीमतों में वृद्धि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which planet is known as Red Planet?",
    "question_hi": "किस ग्रह को लाल ग्रह कहा जाता है?",
    "options_en": ["Earth", "Mars", "Jupiter", "Venus"],
    "options_hi": ["पृथ्वी", "मंगल", "बृहस्पति", "शुक्र"],
    "answer_en": "Mars",
    "answer_hi": "मंगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the study of past events called?",
    "question_hi": "अतीत की घटनाओं के अध्ययन को क्या कहा जाता है?",
    "options_en": ["Geography", "History", "Civics", "Economics"],
    "options_hi": ["भूगोल", "इतिहास", "नागरिक शास्त्र", "अर्थशास्त्र"],
    "answer_en": "History",
    "answer_hi": "इतिहास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Who discovered America?",
    "question_hi": "अमेरिका की खोज किसने की?",
    "options_en": ["Vasco da Gama", "Christopher Columbus", "Marco Polo", "James Cook"],
    "options_hi": ["वास्को डी गामा", "क्रिस्टोफर कोलंबस", "मार्को पोलो", "जेम्स कुक"],
    "answer_en": "Christopher Columbus",
    "answer_hi": "क्रिस्टोफर कोलंबस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is GDP?",
    "question_hi": "जीडीपी क्या है?",
    "options_en": ["Gross Domestic Product", "General Development Plan", "Government Debt Plan", "Gross Development Percentage"],
    "options_hi": ["सकल घरेलू उत्पाद", "सामान्य विकास योजना", "सरकारी ऋण योजना", "सकल विकास प्रतिशत"],
    "answer_en": "Gross Domestic Product",
    "answer_hi": "सकल घरेलू उत्पाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which is the largest ocean?",
    "question_hi": "सबसे बड़ा महासागर कौन सा है?",
    "options_en": ["Atlantic", "Indian", "Pacific", "Arctic"],
    "options_hi": ["अटलांटिक", "हिंद महासागर", "प्रशांत महासागर", "आर्कटिक"],
    "answer_en": "Pacific",
    "answer_hi": "प्रशांत महासागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is secularism?",
    "question_hi": "धर्मनिरपेक्षता क्या है?",
    "options_en": ["Only one religion", "No religion", "Equal respect for all religions", "State religion"],
    "options_hi": ["केवल एक धर्म", "कोई धर्म नहीं", "सभी धर्मों का समान सम्मान", "राज्य धर्म"],
    "answer_en": "Equal respect for all religions",
    "answer_hi": "सभी धर्मों का समान सम्मान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Who wrote Indian Constitution?",
    "question_hi": "भारतीय संविधान किसने लिखा?",
    "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"],
    "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "बी.आर. अंबेडकर", "सरदार पटेल"],
    "answer_en": "B.R. Ambedkar",
    "answer_hi": "बी.आर. अंबेडकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is barter system?",
    "question_hi": "वस्तु विनिमय प्रणाली क्या है?",
    "options_en": ["Money exchange", "Goods for goods", "Bank system", "Digital payment"],
    "options_hi": ["मुद्रा विनिमय", "वस्तु के बदले वस्तु", "बैंक प्रणाली", "डिजिटल भुगतान"],
    "answer_en": "Goods for goods",
    "answer_hi": "वस्तु के बदले वस्तु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which is the longest river in India?",
    "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Yamuna", "Ganges", "Brahmaputra", "Godavari"],
    "options_hi": ["यमुना", "गंगा", "ब्रह्मपुत्र", "गोदावरी"],
    "answer_en": "Ganges",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is poverty line?",
    "question_hi": "गरीबी रेखा क्या है?",
    "options_en": ["Rich people limit", "Minimum income level", "Maximum income level", "Middle class limit"],
    "options_hi": ["अमीर लोगों की सीमा", "न्यूनतम आय स्तर", "अधिकतम आय स्तर", "मध्यम वर्ग की सीमा"],
    "answer_en": "Minimum income level",
    "answer_hi": "न्यूनतम आय स्तर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Who was the first Prime Minister of India?",
    "question_hi": "भारत के प्रथम प्रधानमंत्री कौन थे?",
    "options_en": ["Rajendra Prasad", "Jawaharlal Nehru", "Indira Gandhi", "Lal Bahadur Shastri"],
    "options_hi": ["राजेंद्र प्रसाद", "जवाहरलाल नेहरू", "इंदिरा गांधी", "लाल बहादुर शास्त्री"],
    "answer_en": "Jawaharlal Nehru",
    "answer_hi": "जवाहरलाल नेहरू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is globalization?",
    "question_hi": "वैश्वीकरण क्या है?",
    "options_en": ["Local trade", "Worldwide integration", "National isolation", "Regional development"],
    "options_hi": ["स्थानीय व्यापार", "विश्वव्यापी एकीकरण", "राष्ट्रीय अलगाव", "क्षेत्रीय विकास"],
    "answer_en": "Worldwide integration",
    "answer_hi": "विश्वव्यापी एकीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which is the smallest continent?",
    "question_hi": "सबसे छोटा महाद्वीप कौन सा है?",
    "options_en": ["Asia", "Africa", "Australia", "Europe"],
    "options_hi": ["एशिया", "अफ्रीका", "ऑस्ट्रेलिया", "यूरोप"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is fundamental rights?",
    "question_hi": "मौलिक अधिकार क्या हैं?",
    "options_en": ["Government rights", "Citizen rights", "Animal rights", "Corporate rights"],
    "options_hi": ["सरकारी अधिकार", "नागरिक अधिकार", "पशु अधिकार", "कॉर्पोरेट अधिकार"],
    "answer_en": "Citizen rights",
    "answer_hi": "नागरिक अधिकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Who started Quit India Movement?",
    "question_hi": "भारत छोड़ो आंदोलन किसने शुरू किया?",
    "options_en": ["Subhash Chandra Bose", "Mahatma Gandhi", "Bhagat Singh", "Bal Gangadhar Tilak"],
    "options_hi": ["सुभाष चंद्र बोस", "महात्मा गांधी", "भगत सिंह", "बाल गंगाधर तिलक"],
    "answer_en": "Mahatma Gandhi",
    "answer_hi": "महात्मा गांधी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is sustainable development?",
    "question_hi": "सतत विकास क्या है?",
    "options_en": ["Development for present", "Development for future", "No development", "Fast development"],
    "options_hi": ["वर्तमान के लिए विकास", "भविष्य के लिए विकास", "कोई विकास नहीं", "तेज विकास"],
    "answer_en": "Development for future",
    "answer_hi": "भविष्य के लिए विकास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which is the largest desert?",
    "question_hi": "सबसे बड़ा रेगिस्तान कौन सा है?",
    "options_en": ["Thar", "Sahara", "Gobi", "Arabian"],
    "options_hi": ["थार", "सहारा", "गोबी", "अरब"],
    "answer_en": "Sahara",
    "answer_hi": "सहारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is parliament?",
    "question_hi": "संसद क्या है?",
    "options_en": ["Military office", "Judicial court", "Legislative body", "Executive office"],
    "options_hi": ["सैन्य कार्यालय", "न्यायिक न्यायालय", "विधायी निकाय", "कार्यकारी कार्यालय"],
    "answer_en": "Legislative body",
    "answer_hi": "विधायी निकाय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Who built Taj Mahal?",
    "question_hi": "ताजमहल किसने बनवाया?",
    "options_en": ["Akbar", "Shah Jahan", "Aurangzeb", "Jahangir"],
    "options_hi": ["अकबर", "शाहजहाँ", "औरंगजेब", "जहाँगीर"],
    "answer_en": "Shah Jahan",
    "answer_hi": "शाहजहाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is unemployment?",
    "question_hi": "बेरोजगारी क्या है?",
    "options_en": ["Having multiple jobs", "No work available", "Working too much", "Retired life"],
    "options_hi": ["एकाधिक नौकरियाँ होना", "कोई काम उपलब्ध नहीं", "बहुत अधिक काम करना", "सेवानिवृत्त जीवन"],
    "answer_en": "No work available",
    "answer_hi": "कोई काम उपलब्ध नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which is the highest mountain peak?",
    "question_hi": "सबसे ऊँची पर्वत चोटी कौन सी है?",
    "options_en": ["K2", "Kanchenjunga", "Mount Everest", "Nanda Devi"],
    "options_hi": ["के2", "कंचनजंगा", "माउंट एवरेस्ट", "नंदा देवी"],
    "answer_en": "Mount Everest",
    "answer_hi": "माउंट एवरेस्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is census?",
    "question_hi": "जनगणना क्या है?",
    "options_en": ["Population count", "Land measurement", "Economic survey", "Health checkup"],
    "options_hi": ["जनसंख्या गणना", "भूमि माप", "आर्थिक सर्वेक्षण", "स्वास्थ्य जांच"],
    "answer_en": "Population count",
    "answer_hi": "जनसंख्या गणना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Who was known as Iron Man of India?",
    "question_hi": "भारत के लौह पुरुष के रूप में किसे जाना जाता था?",
    "options_en": ["Jawaharlal Nehru", "Sardar Patel", "B.R. Ambedkar", "Subhash Chandra Bose"],
    "options_hi": ["जवाहरलाल नेहरू", "सरदार पटेल", "बी.आर. अंबेडकर", "सुभाष चंद्र बोस"],
    "answer_en": "Sardar Patel",
    "answer_hi": "सरदार पटेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is climate change?",
    "question_hi": "जलवायु परिवर्तन क्या है?",
    "options_en": ["Weather today", "Long-term weather patterns", "Season change", "Day-night cycle"],
    "options_hi": ["आज का मौसम", "दीर्घकालिक मौसम पैटर्न", "मौसम बदलना", "दिन-रात चक्र"],
    "answer_en": "Long-term weather patterns",
    "answer_hi": "दीर्घकालिक मौसम पैटर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which is the national animal of India?",
    "question_hi": "भारत का राष्ट्रीय पशु कौन सा है?",
    "options_en": ["Lion", "Elephant", "Tiger", "Peacock"],
    "options_hi": ["शेर", "हाथी", "बाघ", "मोर"],
    "answer_en": "Tiger",
    "answer_hi": "बाघ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is federalism?",
    "question_hi": "संघवाद क्या है?",
    "options_en": ["Single government", "Two levels of government", "No government", "International government"],
    "options_hi": ["एकल सरकार", "सरकार के दो स्तर", "कोई सरकार नहीं", "अंतर्राष्ट्रीय सरकार"],
    "answer_en": "Two levels of government",
    "answer_hi": "सरकार के दो स्तर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Who wrote Arthashastra?",
    "question_hi": "अर्थशास्त्र किसने लिखा?",
    "options_en": ["Chanakya", "Kalidas", "Ved Vyas", "Panini"],
    "options_hi": ["चाणक्य", "कालिदास", "वेद व्यास", "पाणिनि"],
    "answer_en": "Chanakya",
    "answer_hi": "चाणक्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is urbanization?",
    "question_hi": "शहरीकरण क्या है?",
    "options_en": ["Growth of cities", "Growth of villages", "Decrease in population", "Agricultural development"],
    "options_hi": ["शहरों का विकास", "गाँवों का विकास", "जनसंख्या में कमी", "कृषि विकास"],
    "answer_en": "Growth of cities",
    "answer_hi": "शहरों का विकास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which is the national flower of India?",
    "question_hi": "भारत का राष्ट्रीय फूल कौन सा है?",
    "options_en": ["Rose", "Lotus", "Marigold", "Sunflower"],
    "options_hi": ["गुलाब", "कमल", "गेंदा", "सूरजमुखी"],
    "answer_en": "Lotus",
    "answer_hi": "कमल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is discrimination?",
    "question_hi": "भेदभाव क्या है?",
    "options_en": ["Equal treatment", "Different treatment", "No treatment", "Special treatment"],
    "options_hi": ["समान व्यवहार", "भिन्न व्यवहार", "कोई व्यवहार नहीं", "विशेष व्यवहार"],
    "answer_en": "Different treatment",
    "answer_hi": "भिन्न व्यवहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Who was the first woman Prime Minister of India?",
    "question_hi": "भारत की प्रथम महिला प्रधानमंत्री कौन थीं?",
    "options_en": ["Indira Gandhi", "Sarojini Naidu", "Mother Teresa", "Pratibha Patil"],
    "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "मदर टेरेसा", "प्रतिभा पाटिल"],
    "answer_en": "Indira Gandhi",
    "answer_hi": "इंदिरा गांधी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is agriculture?",
    "question_hi": "कृषि क्या है?",
    "options_en": ["Factory work", "Farming", "Office work", "Teaching"],
    "options_hi": ["फैक्ट्री काम", "खेती", "ऑफिस काम", "शिक्षण"],
    "answer_en": "Farming",
    "answer_hi": "खेती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which is the national bird of India?",
    "question_hi": "भारत का राष्ट्रीय पक्षी कौन सा है?",
    "options_en": ["Sparrow", "Peacock", "Parrot", "Crow"],
    "options_hi": ["गौरैया", "मोर", "तोता", "कौआ"],
    "answer_en": "Peacock",
    "answer_hi": "मोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is constitution?",
    "question_hi": "संविधान क्या है?",
    "options_en": ["Story book", "Rule book of country", "Novel", "Poetry book"],
    "options_hi": ["कहानी की किताब", "देश की नियम पुस्तक", "उपन्यास", "कविता पुस्तक"],
    "answer_en": "Rule book of country",
    "answer_hi": "देश की नियम पुस्तक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Who founded Mughal Empire in India?",
    "question_hi": "भारत में मुगल साम्राज्य की स्थापना किसने की?",
    "options_en": ["Akbar", "Babur", "Humayun", "Aurangzeb"],
    "options_hi": ["अकबर", "बाबर", "हुमायूं", "औरंगजेब"],
    "answer_en": "Babur",
    "answer_hi": "बाबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is monsoon?",
    "question_hi": "मानसून क्या है?",
    "options_en": ["Winter season", "Summer season", "Rainy season", "Autumn season"],
    "options_hi": ["सर्दी का मौसम", "गर्मी का मौसम", "बरसात का मौसम", "पतझड़ का मौसम"],
    "answer_en": "Rainy season",
    "answer_hi": "बरसात का मौसम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which is the national anthem of India?",
    "question_hi": "भारत का राष्ट्रीय गान क्या है?",
    "options_en": ["Vande Mataram", "Jana Gana Mana", "Sare Jahan Se Achha", "Maa Tujhe Salaam"],
    "options_hi": ["वंदे मातरम्", "जन गण मन", "सारे जहाँ से अच्छा", "माँ तुझे सलाम"],
    "answer_en": "Jana Gana Mana",
    "answer_hi": "जन गण मन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is literacy rate?",
    "question_hi": "साक्षरता दर क्या है?",
    "options_en": ["Percentage of readers", "Percentage of educated", "Percentage of workers", "Percentage of farmers"],
    "options_hi": ["पाठकों का प्रतिशत", "शिक्षितों का प्रतिशत", "श्रमिकों का प्रतिशत", "किसानों का प्रतिशत"],
    "answer_en": "Percentage of educated",
    "answer_hi": "शिक्षितों का प्रतिशत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Who was Ashoka?",
    "question_hi": "अशोक कौन थे?",
    "options_en": ["Mughal Emperor", "Mauryan Emperor", "British King", "French Ruler"],
    "options_hi": ["मुगल सम्राट", "मौर्य सम्राट", "ब्रिटिश राजा", "फ्रांसीसी शासक"],
    "answer_en": "Mauryan Emperor",
    "answer_hi": "मौर्य सम्राट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is judiciary?",
    "question_hi": "न्यायपालिका क्या है?",
    "options_en": ["Law making body", "Law enforcing body", "Law interpreting body", "Military body"],
    "options_hi": ["कानून बनाने वाली संस्था", "कानून लागू करने वाली संस्था", "कानून की व्याख्या करने वाली संस्था", "सैन्य संस्था"],
    "answer_en": "Law interpreting body",
    "answer_hi": "कानून की व्याख्या करने वाली संस्था",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which is the national song of India?",
    "question_hi": "भारत का राष्ट्रीय गीत क्या है?",
    "options_en": ["Jana Gana Mana", "Vande Mataram", "Saare Jahan Se Achha", "Maa Tujhe Salaam"],
    "options_hi": ["जन गण मन", "वंदे मातरम्", "सारे जहाँ से अच्छा", "माँ तुझे सलाम"],
    "answer_en": "Vande Mataram",
    "answer_hi": "वंदे मातरम्",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is diversity?",
    "question_hi": "विविधता क्या है?",
    "options_en": ["Same things", "Different things", "No things", "Similar things"],
    "options_hi": ["समान चीजें", "अलग-अलग चीजें", "कोई चीज नहीं", "समान चीजें"],
    "answer_en": "Different things",
    "answer_hi": "अलग-अलग चीजें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Who was known as Frontier Gandhi?",
    "question_hi": "सीमांत गांधी के नाम से किसे जाना जाता था?",
    "options_en": ["Mahatma Gandhi", "Khan Abdul Ghaffar Khan", "Jawaharlal Nehru", "Subhash Chandra Bose"],
    "options_hi": ["महात्मा गांधी", "खान अब्दुल गफ्फार खान", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस"],
    "answer_en": "Khan Abdul Ghaffar Khan",
    "answer_hi": "खान अब्दुल गफ्फार खान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is renewable resource?",
    "question_hi": "नवीकरणीय संसाधन क्या है?",
    "options_en": ["Coal", "Petroleum", "Solar energy", "Natural gas"],
    "options_hi": ["कोयला", "पेट्रोलियम", "सौर ऊर्जा", "प्राकृतिक गैस"],
    "answer_en": "Solar energy",
    "answer_hi": "सौर ऊर्जा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which city is known as Pink City?",
    "question_hi": "गुलाबी शहर के नाम से कौन सा शहर जाना जाता है?",
    "options_en": ["Jaipur", "Jodhpur", "Udaipur", "Bikaner"],
    "options_hi": ["जयपुर", "जोधपुर", "उदयपुर", "बीकानेर"],
    "answer_en": "Jaipur",
    "answer_hi": "जयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is social justice?",
    "question_hi": "सामाजिक न्याय क्या है?",
    "options_en": ["Equal rights", "Special rights", "No rights", "Different rights"],
    "options_hi": ["समान अधिकार", "विशेष अधिकार", "कोई अधिकार नहीं", "अलग-अलग अधिकार"],
    "answer_en": "Equal rights",
    "answer_hi": "समान अधिकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Who built Red Fort?",
    "question_hi": "लाल किला किसने बनवाया?",
    "options_en": ["Akbar", "Shah Jahan", "Aurangzeb", "Jahangir"],
    "options_hi": ["अकबर", "शाहजहाँ", "औरंगजेब", "जहाँगीर"],
    "answer_en": "Shah Jahan",
    "answer_hi": "शाहजहाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is migration?",
    "question_hi": "प्रवास क्या है?",
    "options_en": ["Staying in place", "Moving to new place", "Visiting place", "Working from home"],
    "options_hi": ["एक जगह रहना", "नई जगह जाना", "जगह घूमना", "घर से काम करना"],
    "answer_en": "Moving to new place",
    "answer_hi": "नई जगह जाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Which is the largest state in India by area?",
    "question_hi": "क्षेत्रफल के हिसाब से भारत का सबसे बड़ा राज्य कौन सा है?",
    "options_en": ["Uttar Pradesh", "Maharashtra", "Rajasthan", "Madhya Pradesh"],
    "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान", "मध्य प्रदेश"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is consumer rights?",
    "question_hi": "उपभोक्ता अधिकार क्या हैं?",
    "options_en": ["Seller rights", "Buyer rights", "Government rights", "Company rights"],
    "options_hi": ["विक्रेता अधिकार", "खरीदार अधिकार", "सरकारी अधिकार", "कंपनी अधिकार"],
    "answer_en": "Buyer rights",
    "answer_hi": "खरीदार अधिकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Who was Chandragupta Maurya?",
    "question_hi": "चंद्रगुप्त मौर्य कौन थे?",
    "options_en": ["First Mauryan Emperor", "Last Mauryan Emperor", "Mughal Emperor", "British Governor"],
    "options_hi": ["प्रथम मौर्य सम्राट", "अंतिम मौर्य सम्राट", "मुगल सम्राट", "ब्रिटिश गवर्नर"],
    "answer_en": "First Mauryan Emperor",
    "answer_hi": "प्रथम मौर्य सम्राट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is ecosystem?",
    "question_hi": "पारिस्थितिकी तंत्र क्या है?",
    "options_en": ["Only plants", "Only animals", "Living and non-living interaction", "Only humans"],
    "options_hi": ["केवल पौधे", "केवल जानवर", "जीवित और निर्जीव का संबंध", "केवल मनुष्य"],
    "answer_en": "Living and non-living interaction",
    "answer_hi": "जीवित और निर्जीव का संबंध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which is the most populated state in India?",
    "question_hi": "भारत का सबसे अधिक जनसंख्या वाला राज्य कौन सा है?",
    "options_en": ["Maharashtra", "Uttar Pradesh", "Bihar", "West Bengal"],
    "options_hi": ["महाराष्ट्र", "उत्तर प्रदेश", "बिहार", "पश्चिम बंगाल"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is budget?",
    "question_hi": "बजट क्या है?",
    "options_en": ["Income plan", "Expense plan", "Income-expense plan", "Savings plan"],
    "options_hi": ["आय योजना", "व्यय योजना", "आय-व्यय योजना", "बचत योजना"],
    "answer_en": "Income-expense plan",
    "answer_hi": "आय-व्यय योजना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Who wrote Discovery of India?",
    "question_hi": "डिस्कवरी ऑफ इंडिया किसने लिखा?",
    "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Rabindranath Tagore", "B.R. Ambedkar"],
    "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "रबीन्द्रनाथ टैगोर", "बी.आर. अंबेडकर"],
    "answer_en": "Jawaharlal Nehru",
    "answer_hi": "जवाहरलाल नेहरू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is pollution?",
    "question_hi": "प्रदूषण क्या है?",
    "options_en": ["Clean environment", "Harmful environment", "Natural environment", "Beautiful environment"],
    "options_hi": ["स्वच्छ पर्यावरण", "हानिकारक पर्यावरण", "प्राकृतिक पर्यावरण", "सुंदर पर्यावरण"],
    "answer_en": "Harmful environment",
    "answer_hi": "हानिकारक पर्यावरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which city is known as Silicon Valley of India?",
    "question_hi": "भारत की सिलिकॉन वैली के नाम से कौन सा शहर जाना जाता है?",
    "options_en": ["Mumbai", "Delhi", "Bangalore", "Hyderabad"],
    "options_hi": ["मुंबई", "दिल्ली", "बैंगलोर", "हैदराबाद"],
    "answer_en": "Bangalore",
    "answer_hi": "बैंगलोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is gender equality?",
    "question_hi": "लैंगिक समानता क्या है?",
    "options_en": ["Only male rights", "Only female rights", "Equal rights for all genders", "No rights"],
    "options_hi": ["केवल पुरुष अधिकार", "केवल महिला अधिकार", "सभी लिंगों के लिए समान अधिकार", "कोई अधिकार नहीं"],
    "answer_en": "Equal rights for all genders",
    "answer_hi": "सभी लिंगों के लिए समान अधिकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Who was the last Mughal Emperor?",
    "question_hi": "अंतिम मुगल सम्राट कौन थे?",
    "options_en": ["Akbar", "Aurangzeb", "Bahadur Shah Zafar", "Shah Jahan"],
    "options_hi": ["अकबर", "औरंगजेब", "बहादुर शाह ज़फर", "शाहजहाँ"],
    "answer_en": "Bahadur Shah Zafar",
    "answer_hi": "बहादुर शाह ज़फर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is import?",
    "question_hi": "आयात क्या है?",
    "options_en": ["Selling to other countries", "Buying from other countries", "Local trade", "No trade"],
    "options_hi": ["अन्य देशों को बेचना", "अन्य देशों से खरीदना", "स्थानीय व्यापार", "कोई व्यापार नहीं"],
    "answer_en": "Buying from other countries",
    "answer_hi": "अन्य देशों से खरीदना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which is the largest lake in India?",
    "question_hi": "भारत की सबसे बड़ी झील कौन सी है?",
    "options_en": ["Dal Lake", "Chilika Lake", "Wular Lake", "Loktak Lake"],
    "options_hi": ["डल झील", "चिल्का झील", "वुलर झील", "लोकटक झील"],
    "answer_en": "Wular Lake",
    "answer_hi": "वुलर झील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is child labor?",
    "question_hi": "बाल श्रम क्या है?",
    "options_en": ["Child education", "Child work", "Child play", "Child rest"],
    "options_hi": ["बाल शिक्षा", "बच्चों का काम", "बच्चों का खेल", "बच्चों का आराम"],
    "answer_en": "Child work",
    "answer_hi": "बच्चों का काम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Who wrote Geetanjali?",
    "question_hi": "गीतांजलि किसने लिखा?",
    "options_en": ["Mahatma Gandhi", "Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu"],
    "options_hi": ["महात्मा गांधी", "रबीन्द्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "सरोजिनी नायडू"],
    "answer_en": "Rabindranath Tagore",
    "answer_hi": "रबीन्द्रनाथ टैगोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is export?",
    "question_hi": "निर्यात क्या है?",
    "options_en": ["Selling to other countries", "Buying from other countries", "Local selling", "No selling"],
    "options_hi": ["अन्य देशों को बेचना", "अन्य देशों से खरीदना", "स्थानीय बिक्री", "कोई बिक्री नहीं"],
    "answer_en": "Selling to other countries",
    "answer_hi": "अन्य देशों को बेचना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which is the longest coastline state in India?",
    "question_hi": "भारत का सबसे लंबी तटरेखा वाला राज्य कौन सा है?",
    "options_en": ["Gujarat", "Maharashtra", "Tamil Nadu", "Kerala"],
    "options_hi": ["गुजरात", "महाराष्ट्र", "तमिलनाडु", "केरल"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is human rights?",
    "question_hi": "मानव अधिकार क्या हैं?",
    "options_en": ["Animal rights", "Basic rights for humans", "Government rights", "Corporate rights"],
    "options_hi": ["पशु अधिकार", "मनुष्यों के मूल अधिकार", "सरकारी अधिकार", "कॉर्पोरेट अधिकार"],
    "answer_en": "Basic rights for humans",
    "answer_hi": "मनुष्यों के मूल अधिकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Who was the first Governor General of India?",
    "question_hi": "भारत के प्रथम गवर्नर जनरल कौन थे?",
    "options_en": ["Lord Mountbatten", "Lord Dalhousie", "Lord Canning", "Warren Hastings"],
    "options_hi": ["लॉर्ड माउंटबेटन", "लॉर्ड डलहौजी", "लॉर्ड कैनिंग", "वारेन हेस्टिंग्स"],
    "answer_en": "Warren Hastings",
    "answer_hi": "वारेन हेस्टिंग्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is traditional knowledge?",
    "question_hi": "पारंपरिक ज्ञान क्या है?",
    "options_en": ["Modern knowledge", "Ancient knowledge", "Scientific knowledge", "Digital knowledge"],
    "options_hi": ["आधुनिक ज्ञान", "प्राचीन ज्ञान", "वैज्ञानिक ज्ञान", "डिजिटल ज्ञान"],
    "answer_en": "Ancient knowledge",
    "answer_hi": "प्राचीन ज्ञान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Which is the smallest state in India by area?",
    "question_hi": "क्षेत्रफल के हिसाब से भारत का सबसे छोटा राज्य कौन सा है?",
    "options_en": ["Goa", "Sikkim", "Tripura", "Nagaland"],
    "options_hi": ["गोवा", "सिक्किम", "त्रिपुरा", "नागालैंड"],
    "answer_en": "Goa",
    "answer_hi": "गोवा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is water conservation?",
    "question_hi": "जल संरक्षण क्या है?",
    "options_en": ["Wasting water", "Saving water", "Polluting water", "Ignoring water"],
    "options_hi": ["पानी बर्बाद करना", "पानी बचाना", "पानी प्रदूषित करना", "पानी को नज़रअंदाज़ करना"],
    "answer_en": "Saving water",
    "answer_hi": "पानी बचाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Who was Rani Lakshmibai?",
    "question_hi": "रानी लक्ष्मीबाई कौन थीं?",
    "options_en": ["Queen of Jhansi", "Queen of Gwalior", "Queen of Mysore", "Queen of Kashmir"],
    "options_hi": ["झाँसी की रानी", "ग्वालियर की रानी", "मैसूर की रानी", "कश्मीर की रानी"],
    "answer_en": "Queen of Jhansi",
    "answer_hi": "झाँसी की रानी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is digital divide?",
    "question_hi": "डिजिटल विभाजन क्या है?",
    "options_en": ["Equal digital access", "Unequal digital access", "No digital access", "Full digital access"],
    "options_hi": ["समान डिजिटल पहुंच", "असमान डिजिटल पहुंच", "कोई डिजिटल पहुंच नहीं", "पूर्ण डिजिटल पहुंच"],
    "answer_en": "Unequal digital access",
    "answer_hi": "असमान डिजिटल पहुंच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which city is known as City of Joy?",
    "question_hi": "खुशियों के शहर के नाम से कौन सा शहर जाना जाता है?",
    "options_en": ["Mumbai", "Kolkata", "Delhi", "Chennai"],
    "options_hi": ["मुंबई", "कोलकाता", "दिल्ली", "चेन्नई"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is reservation?",
    "question_hi": "आरक्षण क्या है?",
    "options_en": ["Special opportunity", "Equal opportunity", "No opportunity", "Random opportunity"],
    "options_hi": ["विशेष अवसर", "समान अवसर", "कोई अवसर नहीं", "यादृच्छिक अवसर"],
    "answer_en": "Special opportunity",
    "answer_hi": "विशेष अवसर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Who built Qutub Minar?",
    "question_hi": "कुतुब मीनार किसने बनवाया?",
    "options_en": ["Qutub-ud-din Aibak", "Akbar", "Shah Jahan", "Aurangzeb"],
    "options_hi": ["कुतुब-उद-दीन ऐबक", "अकबर", "शाहजहाँ", "औरंगजेब"],
    "answer_en": "Qutub-ud-din Aibak",
    "answer_hi": "कुतुब-उद-दीन ऐबक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is wildlife conservation?",
    "question_hi": "वन्यजीव संरक्षण क्या है?",
    "options_en": ["Protecting animals", "Hunting animals", "Ignoring animals", "Killing animals"],
    "options_hi": ["जानवरों की सुरक्षा", "जानवरों का शिकार", "जानवरों को नज़रअंदाज़ करना", "जानवरों को मारना"],
    "answer_en": "Protecting animals",
    "answer_hi": "जानवरों की सुरक्षा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which city is known as Pearl City?",
    "question_hi": "मोती शहर के नाम से कौन सा शहर जाना जाता है?",
    "options_en": ["Hyderabad", "Surat", "Mumbai", "Kolkata"],
    "options_hi": ["हैदराबाद", "सूरत", "मुंबई", "कोलकाता"],
    "answer_en": "Hyderabad",
    "answer_hi": "हैदराबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is public health?",
    "question_hi": "सार्वजनिक स्वास्थ्य क्या है?",
    "options_en": ["Individual health", "Community health", "Animal health", "Plant health"],
    "options_hi": ["व्यक्तिगत स्वास्थ्य", "सामुदायिक स्वास्थ्य", "पशु स्वास्थ्य", "पौधों का स्वास्थ्य"],
    "answer_en": "Community health",
    "answer_hi": "सामुदायिक स्वास्थ्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Who was known as Nightingale of India?",
    "question_hi": "भारत की कोकिला के नाम से किसे जाना जाता था?",
    "options_en": ["Indira Gandhi", "Sarojini Naidu", "Mother Teresa", "Lata Mangeshkar"],
    "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "मदर टेरेसा", "लता मंगेशकर"],
    "answer_en": "Sarojini Naidu",
    "answer_hi": "सरोजिनी नायडू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is disaster management?",
    "question_hi": "आपदा प्रबंधन क्या है?",
    "options_en": ["Creating disasters", "Preventing disasters", "Ignoring disasters", "Enjoying disasters"],
    "options_hi": ["आपदाएँ पैदा करना", "आपदाओं को रोकना", "आपदाओं को नज़रअंदाज़ करना", "आपदाओं का आनंद लेना"],
    "answer_en": "Preventing disasters",
    "answer_hi": "आपदाओं को रोकना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which city is known as Steel City?",
    "question_hi": "स्टील सिटी के नाम से कौन सा शहर जाना जाता है?",
    "options_en": ["Jamshedpur", "Bhilai", "Bokaro", "Rourkela"],
    "options_hi": ["जमशेदपुर", "भिलाई", "बोकारो", "राउरकेला"],
    "answer_en": "Jamshedpur",
    "answer_hi": "जमशेदपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is adult franchise?",
    "question_hi": "वयस्क मताधिकार क्या है?",
    "options_en": ["Children voting", "Adults voting", "No voting", "Selective voting"],
    "options_hi": ["बच्चों का मतदान", "वयस्कों का मतदान", "कोई मतदान नहीं", "चयनात्मक मतदान"],
    "answer_en": "Adults voting",
    "answer_hi": "वयस्कों का मतदान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Who was Bhagat Singh?",
    "question_hi": "भगत सिंह कौन थे?",
    "options_en": ["Freedom fighter", "King", "Businessman", "Teacher"],
    "options_hi": ["स्वतंत्रता सेनानी", "राजा", "व्यवसायी", "शिक्षक"],
    "answer_en": "Freedom fighter",
    "answer_hi": "स्वतंत्रता सेनानी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is rural development?",
    "question_hi": "ग्रामीण विकास क्या है?",
    "options_en": ["City development", "Village development", "No development", "Industrial development"],
    "options_hi": ["शहर का विकास", "गाँव का विकास", "कोई विकास नहीं", "औद्योगिक विकास"],
    "answer_en": "Village development",
    "answer_hi": "गाँव का विकास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which city is known as Temple City?",
    "question_hi": "मंदिरों का शहर के नाम से कौन सा शहर जाना जाता है?",
    "options_en": ["Varanasi", "Madurai", "Puri", "Haridwar"],
    "options_hi": ["वाराणसी", "मदुरै", "पुरी", "हरिद्वार"],
    "answer_en": "Bhubaneswar",
    "answer_hi": "भुवनेश्वर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is social media?",
    "question_hi": "सोशल मीडिया क्या है?",
    "options_en": ["Newspaper", "Television", "Online platforms", "Radio"],
    "options_hi": ["अखबार", "टेलीविजन", "ऑनलाइन प्लेटफॉर्म", "रेडियो"],
    "answer_en": "Online platforms",
    "answer_hi": "ऑनलाइन प्लेटफॉर्म",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Who was Subhash Chandra Bose?",
    "question_hi": "सुभाष चंद्र बोस कौन थे?",
    "options_en": ["British officer", "Freedom fighter", "King", "Businessman"],
    "options_hi": ["ब्रिटिश अधिकारी", "स्वतंत्रता सेनानी", "राजा", "व्यवसायी"],
    "answer_en": "Freedom fighter",
    "answer_hi": "स्वतंत्रता सेनानी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is cultural heritage?",
    "question_hi": "सांस्कृतिक विरासत क्या है?",
    "options_en": ["Modern culture", "Traditional culture", "Foreign culture", "No culture"],
    "options_hi": ["आधुनिक संस्कृति", "पारंपरिक संस्कृति", "विदेशी संस्कृति", "कोई संस्कृति नहीं"],
    "answer_en": "Traditional culture",
    "answer_hi": "पारंपरिक संस्कृति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Which city is known as Garden City?",
    "question_hi": "गार्डन सिटी के नाम से कौन सा शहर जाना जाता है?",
    "options_en": ["Bangalore", "Chandigarh", "Bhopal", "Gandhinagar"],
    "options_hi": ["बैंगलोर", "चंडीगढ़", "भोपाल", "गांधीनगर"],
    "answer_en": "Bangalore",
    "answer_hi": "बैंगलोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is gram panchayat?",
    "question_hi": "ग्राम पंचायत क्या है?",
    "options_en": ["City council", "Village council", "State government", "Central government"],
    "options_hi": ["नगर परिषद", "गाँव परिषद", "राज्य सरकार", "केंद्र सरकार"],
    "answer_en": "Village council",
    "answer_hi": "गाँव परिषद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Who was Mother Teresa?",
    "question_hi": "मदर टेरेसा कौन थीं?",
    "options_en": ["Politician", "Social worker", "Businesswoman", "Actress"],
    "options_hi": ["राजनीतिज्ञ", "सामाजिक कार्यकर्ता", "व्यवसायी महिला", "अभिनेत्री"],
    "answer_en": "Social worker",
    "answer_hi": "सामाजिक कार्यकर्ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is cooperative society?",
    "question_hi": "सहकारी समिति क्या है?",
    "options_en": ["Individual business", "Group business", "Government business", "Foreign business"],
    "options_hi": ["व्यक्तिगत व्यवसाय", "समूह व्यवसाय", "सरकारी व्यवसाय", "विदेशी व्यवसाय"],
    "answer_en": "Group business",
    "answer_hi": "समूह व्यवसाय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which city is known as Blue City?",
    "question_hi": "नीला शहर के नाम से कौन सा शहर जाना जाता है?",
    "options_en": ["Jodhpur", "Udaipur", "Jaipur", "Jaisalmer"],
    "options_hi": ["जोधपुर", "उदयपुर", "जयपुर", "जैसलमेर"],
    "answer_en": "Jodhpur",
    "answer_hi": "जोधपुर",
    "attempted": false,
    "selected": ""
  }
];
// --------------------------- GLOBAL VARS -----------------------------
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