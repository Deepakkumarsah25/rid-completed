const questions= [
    {
        "num": 1,
        "question_en": "Which of the following is a chemical change?",
        "question_hi": "निम्नलिखित में से कौन एक रासायनिक परिवर्तन है?",
        "options_en": ["Melting of ice", "Rusting of iron", "Breaking of glass", "Evaporation of water"],
        "options_hi": ["बर्फ का पिघलना", "लोहे में जंग लगना", "काँच का टूटना", "पानी का वाष्पीकरण"],
        "answer_en": "Rusting of iron",
        "answer_hi": "लोहे में जंग लगना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The process by which plants make their food is called:",
        "question_hi": "वह प्रक्रिया जिसके द्वारा पौधे अपना भोजन बनाते हैं, कहलाती है:",
        "options_en": ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
        "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "पाचन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The device used to measure electric current is:",
        "question_hi": "विद्युत धारा मापने के लिए प्रयुक्त यंत्र है:",
        "options_en": ["Voltmeter", "Ammeter", "Ohmmeter", "Galvanometer"],
        "options_hi": ["वोल्टमीटर", "अमीटर", "ओममीटर", "गैल्वेनोमीटर"],
        "answer_en": "Ammeter",
        "answer_hi": "अमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which gas is essential for burning?",
        "question_hi": "जलने के लिए कौन सी गैस आवश्यक है?",
        "options_en": ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
        "options_hi": ["कार्बन डाइऑक्साइड", "नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The smallest unit of an element is called:",
        "question_hi": "किसी तत्व की सबसे छोटी इकाई कहलाती है:",
        "options_en": ["Molecule", "Atom", "Cell", "Electron"],
        "options_hi": ["अणु", "परमाणु", "कोशिका", "इलेक्ट्रॉन"],
        "answer_en": "Atom",
        "answer_hi": "परमाणु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which organ in human body filters blood?",
        "question_hi": "मानव शरीर में कौन सा अंग रक्त को छानता है?",
        "options_en": ["Heart", "Liver", "Kidneys", "Lungs"],
        "options_hi": ["हृदय", "यकृत", "गुर्दे", "फेफड़े"],
        "answer_en": "Kidneys",
        "answer_hi": "गुर्दे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the chemical formula of common salt?",
        "question_hi": "साधारण नमक का रासायनिक सूत्र क्या है?",
        "options_en": ["NaCl", "NaOH", "NaHCO₃", "Na₂CO₃"],
        "options_hi": ["NaCl", "NaOH", "NaHCO₃", "Na₂CO₃"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The process of conversion of water vapor into water is called:",
        "question_hi": "जलवाष्प का जल में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Evaporation", "Condensation", "Sublimation", "Freezing"],
        "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "जमना"],
        "answer_en": "Condensation",
        "answer_hi": "संघनन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which mirror forms virtual and diminished image?",
        "question_hi": "कौन सा दर्पण आभासी और छोटा प्रतिबिंब बनाता है?",
        "options_en": ["Plane mirror", "Concave mirror", "Convex mirror", "Spherical mirror"],
        "options_hi": ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "गोलाकार दर्पण"],
        "answer_en": "Convex mirror",
        "answer_hi": "उत्तल दर्पण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which vitamin deficiency causes beriberi?",
        "question_hi": "किस विटामिन की कमी से बेरीबेरी रोग होता है?",
        "options_en": ["Vitamin A", "Vitamin B1", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन ए", "विटामिन बी1", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन बी1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "The SI unit of pressure is:",
        "question_hi": "दबाव की SI इकाई है:",
        "options_en": ["Newton", "Pascal", "Joule", "Watt"],
        "options_hi": ["न्यूटन", "पास्कल", "जूल", "वाट"],
        "answer_en": "Pascal",
        "answer_hi": "पास्कल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which gas is used in fire extinguishers?",
        "question_hi": "आग बुझाने के उपकरणों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हीलियम"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which part of the plant conducts photosynthesis?",
        "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
        "answer_en": "Leaf",
        "answer_hi": "पत्ती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the chemical symbol for potassium?",
        "question_hi": "पोटेशियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["P", "Po", "K", "Ka"],
        "options_hi": ["P", "Po", "K", "Ka"],
        "answer_en": "K",
        "answer_hi": "K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which planet is known as the Blue Planet?",
        "question_hi": "किस ग्रह को नीला ग्रह कहा जाता है?",
        "options_en": ["Earth", "Mars", "Neptune", "Uranus"],
        "options_hi": ["पृथ्वी", "मंगल", "नेपच्यून", "युरेनस"],
        "answer_en": "Earth",
        "answer_hi": "पृथ्वी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The process of converting sugar into alcohol is called:",
        "question_hi": "चीनी को अल्कोहल में परिवर्तित करने की प्रक्रिया कहलाती है:",
        "options_en": ["Fermentation", "Distillation", "Evaporation", "Condensation"],
        "options_hi": ["किण्वन", "आसवन", "वाष्पीकरण", "संघनन"],
        "answer_en": "Fermentation",
        "answer_hi": "किण्वन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which metal is used in making electric wires?",
        "question_hi": "विद्युत तार बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Iron", "Copper", "Aluminum", "Both B and C"],
        "options_hi": ["लोहा", "ताँबा", "एल्यूमीनियम", "B और C दोनों"],
        "answer_en": "Both B and C",
        "answer_hi": "B और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which gland is called the master gland?",
        "question_hi": "किस ग्रंथि को मास्टर ग्रंथि कहा जाता है?",
        "options_en": ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
        "options_hi": ["थाइरॉइड", "पीयूष", "अधिवृक्क", "अग्न्याशय"],
        "answer_en": "Pituitary",
        "answer_hi": "पीयूष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the chemical formula of water?",
        "question_hi": "पानी का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂O", "CO₂", "O₂", "NaCl"],
        "options_hi": ["H₂O", "CO₂", "O₂", "NaCl"],
        "answer_en": "H₂O",
        "answer_hi": "H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which gas is released during photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण के दौरान कौन सी गैस मुक्त होती है?",
        "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "The process of digestion starts in:",
        "question_hi": "पाचन की प्रक्रिया कहाँ शुरू होती है?",
        "options_en": ["Mouth", "Stomach", "Small intestine", "Large intestine"],
        "options_hi": ["मुँह", "आमाशय", "छोटी आँत", "बड़ी आँत"],
        "answer_en": "Mouth",
        "answer_hi": "मुँह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the chemical formula of carbon dioxide?",
        "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CO", "CO₂", "C₂O", "CO₃"],
        "options_hi": ["CO", "CO₂", "C₂O", "CO₃"],
        "answer_en": "CO₂",
        "answer_hi": "CO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which planet has rings around it?",
        "question_hi": "किस ग्रह के चारों ओर छल्ले हैं?",
        "options_en": ["Jupiter", "Saturn", "Uranus", "All of these"],
        "options_hi": ["बृहस्पति", "शनि", "युरेनस", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which vitamin is also known as ascorbic acid?",
        "question_hi": "किस विटामिन को एस्कॉर्बिक अम्ल के नाम से भी जाना जाता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन सी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the unit of electric power?",
        "question_hi": "विद्युत शक्ति की इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Watt", "Ohm"],
        "options_hi": ["वोल्ट", "एम्पीयर", "वाट", "ओम"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which acid is present in vinegar?",
        "question_hi": "सिरका में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Citric acid", "Acetic acid", "Lactic acid", "Tartaric acid"],
        "options_hi": ["साइट्रिक अम्ल", "एसिटिक अम्ल", "लैक्टिक अम्ल", "टार्टरिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which is the largest planet in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
        "options_en": ["Earth", "Saturn", "Jupiter", "Neptune"],
        "options_hi": ["पृथ्वी", "शनि", "बृहस्पति", "नेपच्यून"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the chemical symbol for sodium?",
        "question_hi": "सोडियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["So", "Sd", "Na", "No"],
        "options_hi": ["So", "Sd", "Na", "No"],
        "answer_en": "Na",
        "answer_hi": "Na",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which vitamin deficiency causes rickets?",
        "question_hi": "किस विटामिन की कमी से रिकेट्स रोग होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the unit of energy?",
        "question_hi": "ऊर्जा की इकाई क्या है?",
        "options_en": ["Newton", "Pascal", "Joule", "Watt"],
        "options_hi": ["न्यूटन", "पास्कल", "जूल", "वाट"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which acid is found in our stomach?",
        "question_hi": "हमारे पेट में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Sulfuric acid", "Hydrochloric acid", "Nitric acid", "Phosphoric acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल", "फॉस्फोरिक अम्ल"],
        "answer_en": "Hydrochloric acid",
        "answer_hi": "हाइड्रोक्लोरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the chemical formula of methane?",
        "question_hi": "मीथेन का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "answer_en": "CH₄",
        "answer_hi": "CH₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which planet is closest to the Sun?",
        "question_hi": "सूर्य के सबसे निकट कौन सा ग्रह है?",
        "options_en": ["Venus", "Mercury", "Earth", "Mars"],
        "options_hi": ["शुक्र", "बुध", "पृथ्वी", "मंगल"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the chemical symbol for iron?",
        "question_hi": "लोहे का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ir", "Fe", "In", "Io"],
        "options_hi": ["Ir", "Fe", "In", "Io"],
        "answer_en": "Fe",
        "answer_hi": "Fe",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which vitamin deficiency causes night blindness?",
        "question_hi": "किस विटामिन की कमी से रतौंधी होती है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन ए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the unit of frequency?",
        "question_hi": "आवृत्ति की इकाई क्या है?",
        "options_en": ["Hertz", "Watt", "Joule", "Newton"],
        "options_hi": ["हर्ट्ज", "वाट", "जूल", "न्यूटन"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which acid is present in lemons?",
        "question_hi": "नींबू में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Acetic acid", "Citric acid", "Lactic acid", "Hydrochloric acid"],
        "options_hi": ["एसिटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
        "answer_en": "Citric acid",
        "answer_hi": "साइट्रिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the chemical formula of sulfuric acid?",
        "question_hi": "सल्फ्यूरिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂SO₄", "HCl", "HNO₃", "H₃PO₄"],
        "options_hi": ["H₂SO₄", "HCl", "HNO₃", "H₃PO₄"],
        "answer_en": "H₂SO₄",
        "answer_hi": "H₂SO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which planet is known as the Red Planet?",
        "question_hi": "किस ग्रह को लाल ग्रह कहा जाता है?",
        "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
        "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the chemical symbol for calcium?",
        "question_hi": "कैल्शियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ca", "C", "Cl", "Cu"],
        "options_hi": ["Ca", "C", "Cl", "Cu"],
        "answer_en": "Ca",
        "answer_hi": "Ca",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which part of the cell is called the powerhouse?",
        "question_hi": "कोशिका के किस भाग को पावरहाउस कहा जाता है?",
        "options_en": ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
        "options_hi": ["केंद्रक", "राइबोसोम", "माइटोकॉन्ड्रिया", "गॉल्जी उपकरण"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the chemical formula of ammonia?",
        "question_hi": "अमोनिया का रासायनिक सूत्र क्या है?",
        "options_en": ["NH₃", "NH₄", "NO₂", "N₂O"],
        "options_hi": ["NH₃", "NH₄", "NO₂", "N₂O"],
        "answer_en": "NH₃",
        "answer_hi": "NH₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which gas is most abundant in Earth's atmosphere?",
        "question_hi": "पृथ्वी के वायुमंडल में कौन सी गैस सबसे अधिक है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the chemical symbol for oxygen?",
        "question_hi": "ऑक्सीजन का रासायनिक प्रतीक क्या है?",
        "options_en": ["O", "Ox", "Oy", "Og"],
        "options_hi": ["O", "Ox", "Oy", "Og"],
        "answer_en": "O",
        "answer_hi": "O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which vitamin deficiency causes scurvy?",
        "question_hi": "किस विटामिन की कमी से स्कर्वी रोग होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन सी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the unit of force?",
        "question_hi": "बल की इकाई क्या है?",
        "options_en": ["Joule", "Watt", "Newton", "Pascal"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Newton",
        "answer_hi": "न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which acid is found in ants?",
        "question_hi": "चींटियों में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Formic acid", "Acetic acid", "Citric acid", "Lactic acid"],
        "options_hi": ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल"],
        "answer_en": "Formic acid",
        "answer_hi": "फॉर्मिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the chemical formula of glucose?",
        "question_hi": "ग्लूकोज का रासायनिक सूत्र क्या है?",
        "options_en": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₄"],
        "options_hi": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₄"],
        "answer_en": "C₆H₁₂O₆",
        "answer_hi": "C₆H₁₂O₆",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which planet is known for its Great Red Spot?",
        "question_hi": "किस ग्रह को उसके महान लाल धब्बे के लिए जाना जाता है?",
        "options_en": ["Jupiter", "Saturn", "Mars", "Neptune"],
        "options_hi": ["बृहस्पति", "शनि", "मंगल", "नेपच्यून"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the chemical symbol for nitrogen?",
        "question_hi": "नाइट्रोजन का रासायनिक प्रतीक क्या है?",
        "options_en": ["N", "Ni", "No", "Na"],
        "options_hi": ["N", "Ni", "No", "Na"],
        "answer_en": "N",
        "answer_hi": "N",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which vitamin deficiency causes pellagra?",
        "question_hi": "किस विटामिन की कमी से पेलाग्रा रोग होता है?",
        "options_en": ["Vitamin B3", "Vitamin B12", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन बी3", "विटामिन बी12", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin B3",
        "answer_hi": "विटामिन बी3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the unit of electric charge?",
        "question_hi": "विद्युत आवेश की इकाई क्या है?",
        "options_en": ["Ampere", "Volt", "Coulomb", "Ohm"],
        "options_hi": ["एम्पीयर", "वोल्ट", "कूलॉम", "ओम"],
        "answer_en": "Coulomb",
        "answer_hi": "कूलॉम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which acid is present in tamarind?",
        "question_hi": "इमली में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Citric acid", "Tartaric acid", "Lactic acid", "Acetic acid"],
        "options_hi": ["साइट्रिक अम्ल", "टार्टरिक अम्ल", "लैक्टिक अम्ल", "एसिटिक अम्ल"],
        "answer_en": "Tartaric acid",
        "answer_hi": "टार्टरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the chemical formula of ethanol?",
        "question_hi": "इथेनॉल का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₃OH", "C₂H₅OH", "C₃H₇OH", "C₄H₉OH"],
        "options_hi": ["CH₃OH", "C₂H₅OH", "C₃H₇OH", "C₄H₉OH"],
        "answer_en": "C₂H₅OH",
        "answer_hi": "C₂H₅OH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which planet is the hottest in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे गर्म ग्रह कौन सा है?",
        "options_en": ["Mercury", "Venus", "Earth", "Mars"],
        "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the chemical symbol for chlorine?",
        "question_hi": "क्लोरीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Cl", "Ch", "Cr", "Co"],
        "options_hi": ["Cl", "Ch", "Cr", "Co"],
        "answer_en": "Cl",
        "answer_hi": "Cl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which vitamin deficiency causes anemia?",
        "question_hi": "किस विटामिन की कमी से एनीमिया होता है?",
        "options_en": ["Vitamin B12", "Vitamin C", "Vitamin D", "Vitamin K"],
        "options_hi": ["विटामिन बी12", "विटामिन सी", "विटामिन डी", "विटामिन के"],
        "answer_en": "Vitamin B12",
        "answer_hi": "विटामिन बी12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the unit of electric potential?",
        "question_hi": "विद्युत विभव की इकाई क्या है?",
        "options_en": ["Ampere", "Volt", "Ohm", "Watt"],
        "options_hi": ["एम्पीयर", "वोल्ट", "ओम", "वाट"],
        "answer_en": "Volt",
        "answer_hi": "वोल्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which acid is present in apples?",
        "question_hi": "सेब में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Malic acid", "Citric acid", "Tartaric acid", "Acetic acid"],
        "options_hi": ["मैलिक अम्ल", "साइट्रिक अम्ल", "टार्टरिक अम्ल", "एसिटिक अम्ल"],
        "answer_en": "Malic acid",
        "answer_hi": "मैलिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the chemical formula of carbon monoxide?",
        "question_hi": "कार्बन मोनोऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CO", "CO₂", "C₂O", "CO₃"],
        "options_hi": ["CO", "CO₂", "C₂O", "CO₃"],
        "answer_en": "CO",
        "answer_hi": "CO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which planet is known as the Evening Star?",
        "question_hi": "किस ग्रह को शाम का तारा कहा जाता है?",
        "options_en": ["Mercury", "Venus", "Mars", "Jupiter"],
        "options_hi": ["बुध", "शुक्र", "मंगल", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the chemical symbol for hydrogen?",
        "question_hi": "हाइड्रोजन का रासायनिक प्रतीक क्या है?",
        "options_en": ["H", "Hy", "Hg", "Ho"],
        "options_hi": ["H", "Hy", "Hg", "Ho"],
        "answer_en": "H",
        "answer_hi": "H",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which vitamin is essential for blood clotting?",
        "question_hi": "रक्त के थक्के बनने के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        "options_hi": ["विटामिन ए", "विटामिन सी", "विटामिन डी", "विटामिन के"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the unit of capacitance?",
        "question_hi": "धारिता की इकाई क्या है?",
        "options_en": ["Farad", "Henry", "Tesla", "Weber"],
        "options_hi": ["फैरड", "हेनरी", "टेस्ला", "वेबर"],
        "answer_en": "Farad",
        "answer_hi": "फैरड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which acid is present in grapes?",
        "question_hi": "अंगूर में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Tartaric acid", "Citric acid", "Malic acid", "All of these"],
        "options_hi": ["टार्टरिक अम्ल", "साइट्रिक अम्ल", "मैलिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the chemical formula of laughing gas?",
        "question_hi": "हंसाने वाली गैस का रासायनिक सूत्र क्या है?",
        "options_en": ["N₂O", "NO₂", "NO", "N₂O₃"],
        "options_hi": ["N₂O", "NO₂", "NO", "N₂O₃"],
        "answer_en": "N₂O",
        "answer_hi": "N₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which planet has a day longer than its year?",
        "question_hi": "किस ग्रह का दिन उसके वर्ष से लंबा होता है?",
        "options_en": ["Venus", "Mercury", "Mars", "Jupiter"],
        "options_hi": ["शुक्र", "बुध", "मंगल", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the chemical symbol for silver?",
        "question_hi": "चाँदी का रासायनिक प्रतीक क्या है?",
        "options_en": ["Si", "Ag", "Au", "Sr"],
        "options_hi": ["Si", "Ag", "Au", "Sr"],
        "answer_en": "Ag",
        "answer_hi": "Ag",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which vitamin is also called niacin?",
        "question_hi": "किस विटामिन को नियासिन भी कहा जाता है?",
        "options_en": ["Vitamin B3", "Vitamin B6", "Vitamin B12", "Vitamin C"],
        "options_hi": ["विटामिन बी3", "विटामिन बी6", "विटामिन बी12", "विटामिन सी"],
        "answer_en": "Vitamin B3",
        "answer_hi": "विटामिन बी3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the unit of inductance?",
        "question_hi": "प्रेरकत्व की इकाई क्या है?",
        "options_en": ["Henry", "Farad", "Tesla", "Weber"],
        "options_hi": ["हेनरी", "फैरड", "टेस्ला", "वेबर"],
        "answer_en": "Henry",
        "answer_hi": "हेनरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which acid is present in tomatoes?",
        "question_hi": "टमाटर में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Oxalic acid", "Citric acid", "Malic acid", "All of these"],
        "options_hi": ["ऑक्सालिक अम्ल", "साइट्रिक अम्ल", "मैलिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the chemical formula of ozone?",
        "question_hi": "ओजोन का रासायनिक सूत्र क्या है?",
        "options_en": ["O₂", "O₃", "O", "O₄"],
        "options_hi": ["O₂", "O₃", "O", "O₄"],
        "answer_en": "O₃",
        "answer_hi": "O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which planet has the most volcanoes?",
        "question_hi": "किस ग्रह पर सबसे अधिक ज्वालामुखी हैं?",
        "options_en": ["Earth", "Venus", "Mars", "Io (moon of Jupiter)"],
        "options_hi": ["पृथ्वी", "शुक्र", "मंगल", "आईओ (बृहस्पति का चंद्रमा)"],
        "answer_en": "Io (moon of Jupiter)",
        "answer_hi": "आईओ (बृहस्पति का चंद्रमा)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the chemical symbol for magnesium?",
        "question_hi": "मैग्नीशियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Mg", "Mn", "Ma", "M"],
        "options_hi": ["Mg", "Mn", "Ma", "M"],
        "answer_en": "Mg",
        "answer_hi": "Mg",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which vitamin is also called cobalamin?",
        "question_hi": "किस विटामिन को कोबालामिन भी कहा जाता है?",
        "options_en": ["Vitamin B6", "Vitamin B12", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन बी6", "विटामिन बी12", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin B12",
        "answer_hi": "विटामिन बी12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the unit of magnetic flux?",
        "question_hi": "चुंबकीय फ्लक्स की इकाई क्या है?",
        "options_en": ["Weber", "Henry", "Tesla", "Farad"],
        "options_hi": ["वेबर", "हेनरी", "टेस्ला", "फैरड"],
        "answer_en": "Weber",
        "answer_hi": "वेबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which acid is used in soft drinks?",
        "question_hi": "शीतल पेय में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Carbonic acid", "Citric acid", "Phosphoric acid", "All of these"],
        "options_hi": ["कार्बोनिक अम्ल", "साइट्रिक अम्ल", "फॉस्फोरिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the chemical formula of common sugar?",
        "question_hi": "साधारण चीनी का रासायनिक सूत्र क्या है?",
        "options_en": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₄O₂", "C₆H₆O₆"],
        "options_hi": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₄O₂", "C₆H₆O₆"],
        "answer_en": "C₁₂H₂₂O₁₁",
        "answer_hi": "C₁₂H₂₂O₁₁",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which planet has the Great Dark Spot?",
        "question_hi": "किस ग्रह पर महान अंधेरा धब्बा है?",
        "options_en": ["Neptune", "Uranus", "Saturn", "Jupiter"],
        "options_hi": ["नेपच्यून", "युरेनस", "शनि", "बृहस्पति"],
        "answer_en": "Neptune",
        "answer_hi": "नेपच्यून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the chemical symbol for sulfur?",
        "question_hi": "सल्फर का रासायनिक प्रतीक क्या है?",
        "options_en": ["S", "Su", "Sl", "Sr"],
        "options_hi": ["S", "Su", "Sl", "Sr"],
        "answer_en": "S",
        "answer_hi": "S",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which vitamin is also called riboflavin?",
        "question_hi": "किस विटामिन को राइबोफ्लेविन भी कहा जाता है?",
        "options_en": ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12"],
        "options_hi": ["विटामिन बी1", "विटामिन बी2", "विटामिन बी6", "विटामिन बी12"],
        "answer_en": "Vitamin B2",
        "answer_hi": "विटामिन बी2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the unit of magnetic field strength?",
        "question_hi": "चुंबकीय क्षेत्र की शक्ति की इकाई क्या है?",
        "options_en": ["Tesla", "Weber", "Henry", "Farad"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "फैरड"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which acid is used in aspirin?",
        "question_hi": "एस्पिरिन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetylsalicylic acid", "Salicylic acid", "Benzoic acid", "Formic acid"],
        "options_hi": ["एसिटाइलसैलिसिलिक अम्ल", "सैलिसिलिक अम्ल", "बेंजोइक अम्ल", "फॉर्मिक अम्ल"],
        "answer_en": "Acetylsalicylic acid",
        "answer_hi": "एसिटाइलसैलिसिलिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the chemical formula of hydrogen peroxide?",
        "question_hi": "हाइड्रोजन पेरोक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂O", "H₂O₂", "HO₂", "H₃O"],
        "options_hi": ["H₂O", "H₂O₂", "HO₂", "H₃O"],
        "answer_en": "H₂O₂",
        "answer_hi": "H₂O₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which planet has the most elliptical orbit?",
        "question_hi": "किस ग्रह की कक्षा सबसे अधिक दीर्घवृत्ताकार है?",
        "options_en": ["Mercury", "Pluto (dwarf planet)", "Mars", "Venus"],
        "options_hi": ["बुध", "प्लूटो (बौना ग्रह)", "मंगल", "शुक्र"],
        "answer_en": "Pluto (dwarf planet)",
        "answer_hi": "प्लूटो (बौना ग्रह)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the chemical symbol for carbon?",
        "question_hi": "कार्बन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ca", "C", "Co", "Cn"],
        "options_hi": ["Ca", "C", "Co", "Cn"],
        "answer_en": "C",
        "answer_hi": "C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which vitamin is also called thiamine?",
        "question_hi": "किस विटामिन को थायमिन भी कहा जाता है?",
        "options_en": ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12"],
        "options_hi": ["विटामिन बी1", "विटामिन बी2", "विटामिन बी6", "विटामिन बी12"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन बी1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the SI unit of temperature?",
        "question_hi": "तापमान की SI इकाई क्या है?",
        "options_en": ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
        "options_hi": ["सेल्सियस", "फारेनहाइट", "केल्विन", "रैंकिन"],
        "answer_en": "Kelvin",
        "answer_hi": "केल्विन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which acid is found in honey bee sting?",
        "question_hi": "मधुमक्खी के डंक में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Formic acid", "Acetic acid", "Methanoic acid", "Both A and C"],
        "options_hi": ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "मेथैनोइक अम्ल", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the chemical formula of common bleach?",
        "question_hi": "साधारण ब्लीच का रासायनिक सूत्र क्या है?",
        "options_en": ["NaCl", "NaOCl", "NaOH", "NaHCO₃"],
        "options_hi": ["NaCl", "NaOCl", "NaOH", "NaHCO₃"],
        "answer_en": "NaOCl",
        "answer_hi": "NaOCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which planet has the fastest winds in the solar system?",
        "question_hi": "सौर मंडल में किस ग्रह पर सबसे तेज हवाएं चलती हैं?",
        "options_en": ["Jupiter", "Saturn", "Neptune", "Uranus"],
        "options_hi": ["बृहस्पति", "शनि", "नेपच्यून", "युरेनस"],
        "answer_en": "Neptune",
        "answer_hi": "नेपच्यून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the chemical symbol for lead?",
        "question_hi": "सीसे का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ld", "Pb", "Le", "Pl"],
        "options_hi": ["Ld", "Pb", "Le", "Pl"],
        "answer_en": "Pb",
        "answer_hi": "Pb",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which vitamin is also called retinol?",
        "question_hi": "किस विटामिन को रेटिनॉल भी कहा जाता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन ए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the unit of electric resistance?",
        "question_hi": "विद्युत प्रतिरोध की इकाई क्या है?",
        "options_en": ["Ampere", "Volt", "Ohm", "Watt"],
        "options_hi": ["एम्पीयर", "वोल्ट", "ओम", "वाट"],
        "answer_en": "Ohm",
        "answer_hi": "ओम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which acid is used in batteries?",
        "question_hi": "बैटरियों में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Hydrochloric acid", "Nitric acid", "Phosphoric acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल", "फॉस्फोरिक अम्ल"],
        "answer_en": "Sulfuric acid",
        "answer_hi": "सल्फ्यूरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the chemical formula of calcium carbonate?",
        "question_hi": "कैल्शियम कार्बोनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["CaCO₃", "CaO", "Ca(OH)₂", "CaCl₂"],
        "options_hi": ["CaCO₃", "CaO", "Ca(OH)₂", "CaCl₂"],
        "answer_en": "CaCO₃",
        "answer_hi": "CaCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which planet is the smallest?",
        "question_hi": "सबसे छोटा ग्रह कौन सा है?",
        "options_en": ["Mercury", "Mars", "Venus", "Earth"],
        "options_hi": ["बुध", "मंगल", "शुक्र", "पृथ्वी"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the chemical symbol for phosphorus?",
        "question_hi": "फॉस्फोरस का रासायनिक प्रतीक क्या है?",
        "options_en": ["P", "Ph", "Po", "Pr"],
        "options_hi": ["P", "Ph", "Po", "Pr"],
        "answer_en": "P",
        "answer_hi": "P",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which vitamin is also called tocopherol?",
        "question_hi": "किस विटामिन को टोकोफेरॉल भी कहा जाता है?",
        "options_en": ["Vitamin D", "Vitamin E", "Vitamin K", "Vitamin B"],
        "options_hi": ["विटामिन डी", "विटामिन ई", "विटामिन के", "विटामिन बी"],
        "answer_en": "Vitamin E",
        "answer_hi": "विटामिन ई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the unit of work?",
        "question_hi": "कार्य की इकाई क्या है?",
        "options_en": ["Joule", "Watt", "Newton", "Pascal"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
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