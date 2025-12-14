const questions = [
    {
        "num": 1,
        "question_en": "Which vitamin is also known as thiamine?",
        "question_hi": "किस विटामिन को थायमिन के नाम से भी जाना जाता है?",
        "options_en": ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12"],
        "options_hi": ["विटामिन बी1", "विटामिन बी2", "विटामिन बी6", "विटामिन बी12"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन बी1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the unit of electrical capacitance?",
        "question_hi": "विद्युत धारिता की इकाई क्या है?",
        "options_en": ["Farad", "Henry", "Ohm", "Siemens"],
        "options_hi": ["फैरड", "हेनरी", "ओम", "सीमेंस"],
        "answer_en": "Farad",
        "answer_hi": "फैरड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which acid is found in ant stings?",
        "question_hi": "चींटी के डंक में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Formic acid", "Acetic acid", "Citric acid", "Oxalic acid"],
        "options_hi": ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "ऑक्सालिक अम्ल"],
        "answer_en": "Formic acid",
        "answer_hi": "फॉर्मिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
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
        "num": 5,
        "question_en": "Which planet has the most circular orbit?",
        "question_hi": "किस ग्रह की कक्षा सबसे अधिक वृत्ताकार है?",
        "options_en": ["Venus", "Earth", "Neptune", "Mercury"],
        "options_hi": ["शुक्र", "पृथ्वी", "नेपच्यून", "बुध"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the chemical symbol for argon?",
        "question_hi": "आर्गन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ar", "Ag", "An", "A"],
        "options_hi": ["Ar", "Ag", "An", "A"],
        "answer_en": "Ar",
        "answer_hi": "Ar",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which vitamin deficiency causes bleeding gums?",
        "question_hi": "किस विटामिन की कमी से मसूड़ों से खून आता है?",
        "options_en": ["Vitamin C", "Vitamin K", "Vitamin D", "Vitamin B12"],
        "options_hi": ["विटामिन सी", "विटामिन K", "विटामिन डी", "विटामिन बी12"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन सी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the unit of force in the CGS system?",
        "question_hi": "CGS प्रणाली में बल की इकाई क्या है?",
        "options_en": ["Dyne", "Newton", "Pound", "Joule"],
        "options_hi": ["डाइन", "न्यूटन", "पाउंड", "जूल"],
        "answer_en": "Dyne",
        "answer_hi": "डाइन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which acid is used in the production of soaps?",
        "question_hi": "साबुन उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Stearic acid", "Sulfuric acid", "Nitric acid", "Acetic acid"],
        "options_hi": ["स्टीयरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"],
        "answer_en": "Stearic acid",
        "answer_hi": "स्टीयरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the chemical formula of methane gas?",
        "question_hi": "मीथेन गैस का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "answer_en": "CH₄",
        "answer_hi": "CH₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which planet has the most prominent rings?",
        "question_hi": "किस ग्रह की वलय सबसे प्रमुख हैं?",
        "options_en": ["Saturn", "Jupiter", "Uranus", "Neptune"],
        "options_hi": ["शनि", "बृहस्पति", "युरेनस", "नेपच्यून"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the chemical symbol for helium?",
        "question_hi": "हीलियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["He", "H", "Ha", "Hl"],
        "options_hi": ["He", "H", "Ha", "Hl"],
        "answer_en": "He",
        "answer_hi": "He",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which vitamin is necessary for calcium absorption?",
        "question_hi": "कैल्शियम अवशोषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin D", "Vitamin C", "Vitamin K", "Vitamin B12"],
        "options_hi": ["विटामिन डी", "विटामिन सी", "विटामिन K", "विटामिन बी12"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the unit of work in the MKS system?",
        "question_hi": "MKS प्रणाली में कार्य की इकाई क्या है?",
        "options_en": ["Joule", "Erg", "Watt", "Newton"],
        "options_hi": ["जूल", "अर्ग", "वाट", "न्यूटन"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which acid is used in the production of baking powder?",
        "question_hi": "बेकिंग पाउडर उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Tartaric acid", "Citric acid", "Acetic acid", "Sulfuric acid"],
        "options_hi": ["टार्टरिक अम्ल", "साइट्रिक अम्ल", "एसिटिक अम्ल", "सल्फ्यूरिक अम्ल"],
        "answer_en": "Tartaric acid",
        "answer_hi": "टार्टरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the chemical formula of ethanol?",
        "question_hi": "एथेनॉल का रासायनिक सूत्र क्या है?",
        "options_en": ["C₂H₅OH", "CH₃OH", "C₃H₇OH", "C₄H₉OH"],
        "options_hi": ["C₂H₅OH", "CH₃OH", "C₃H₇OH", "C₄H₉OH"],
        "answer_en": "C₂H₅OH",
        "answer_hi": "C₂H₅OH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which moon is known for its geysers of water vapor?",
        "question_hi": "कौन सा चंद्रमा जल वाष्प के गीजर के लिए जाना जाता है?",
        "options_en": ["Enceladus", "Titan", "Europa", "Io"],
        "options_hi": ["एन्सेलेडस", "टाइटन", "यूरोपा", "आईओ"],
        "answer_en": "Enceladus",
        "answer_hi": "एन्सेलेडस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the chemical symbol for chlorine?",
        "question_hi": "क्लोरीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Cl", "Ch", "C", "Cr"],
        "options_hi": ["Cl", "Ch", "C", "Cr"],
        "answer_en": "Cl",
        "answer_hi": "Cl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which vitamin deficiency causes convulsions in infants?",
        "question_hi": "किस विटामिन की कमी से शिशुओं में ऐंठन होती है?",
        "options_en": ["Vitamin B6", "Vitamin B12", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन बी6", "विटामिन बी12", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin B6",
        "answer_hi": "विटामिन बी6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the unit of luminous intensity in the SI system?",
        "question_hi": "SI प्रणाली में दीप्त तीव्रता की इकाई क्या है?",
        "options_en": ["Candela", "Lumen", "Lux", "Watt"],
        "options_hi": ["कैंडेला", "ल्यूमेन", "लक्स", "वाट"],
        "answer_en": "Candela",
        "answer_hi": "कैंडेला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which acid is used in the production of white paper?",
        "question_hi": "सफेद कागज उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfurous acid", "Hydrochloric acid", "Nitric acid", "Acetic acid"],
        "options_hi": ["सल्फ्यूरस अम्ल", "हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"],
        "answer_en": "Sulfurous acid",
        "answer_hi": "सल्फ्यूरस अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the chemical formula of propane?",
        "question_hi": "प्रोपेन का रासायनिक सूत्र क्या है?",
        "options_en": ["C₃H₈", "CH₄", "C₂H₆", "C₄H₁₀"],
        "options_hi": ["C₃H₈", "CH₄", "C₂H₆", "C₄H₁₀"],
        "answer_en": "C₃H₈",
        "answer_hi": "C₃H₈",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which planet has the most tilted axis?",
        "question_hi": "किस ग्रह का अक्ष सबसे अधिक झुका हुआ है?",
        "options_en": ["Uranus", "Saturn", "Neptune", "Mars"],
        "options_hi": ["युरेनस", "शनि", "नेपच्यून", "मंगल"],
        "answer_en": "Uranus",
        "answer_hi": "युरेनस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the chemical symbol for phosphorus?",
        "question_hi": "फॉस्फोरस का रासायनिक प्रतीक क्या है?",
        "options_en": ["P", "Ph", "Ps", "Po"],
        "options_hi": ["P", "Ph", "Ps", "Po"],
        "answer_en": "P",
        "answer_hi": "P",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which vitamin is known as the 'sunshine vitamin'?",
        "question_hi": "किस विटामिन को 'सनशाइन विटामिन' के नाम से जाना जाता है?",
        "options_en": ["Vitamin D", "Vitamin C", "Vitamin E", "Vitamin K"],
        "options_hi": ["विटामिन डी", "विटामिन सी", "विटामिन ई", "विटामिन K"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the unit of thermodynamic temperature?",
        "question_hi": "ऊष्मागतिक तापमान की इकाई क्या है?",
        "options_en": ["Kelvin", "Celsius", "Fahrenheit", "Rankine"],
        "options_hi": ["केल्विन", "सेल्सियस", "फारेनहाइट", "रैंकिन"],
        "answer_en": "Kelvin",
        "answer_hi": "केल्विन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which acid is used in the production of lead-acid batteries?",
        "question_hi": "लेड-एसिड बैटरियों के उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Nitric acid", "Hydrochloric acid", "Phosphoric acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "फॉस्फोरिक अम्ल"],
        "answer_en": "Sulfuric acid",
        "answer_hi": "सल्फ्यूरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the chemical formula of butane?",
        "question_hi": "ब्यूटेन का रासायनिक सूत्र क्या है?",
        "options_en": ["C₄H₁₀", "C₃H₈", "C₂H₆", "C₅H₁₂"],
        "options_hi": ["C₄H₁₀", "C₃H₈", "C₂H₆", "C₅H₁₂"],
        "answer_en": "C₄H₁₀",
        "answer_hi": "C₄H₁₀",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which moon is the largest in the solar system?",
        "question_hi": "सौरमंडल का सबसे बड़ा चंद्रमा कौन सा है?",
        "options_en": ["Ganymede", "Titan", "Callisto", "Io"],
        "options_hi": ["गेनीमेड", "टाइटन", "कैलिस्टो", "आईओ"],
        "answer_en": "Ganymede",
        "answer_hi": "गेनीमेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the chemical symbol for fluorine?",
        "question_hi": "फ्लोरीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["F", "Fl", "Fo", "Fu"],
        "options_hi": ["F", "Fl", "Fo", "Fu"],
        "answer_en": "F",
        "answer_hi": "F",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which vitamin deficiency causes keratomalacia?",
        "question_hi": "किस विटामिन की कमी से केराटोमलेशिया होता है?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        "options_hi": ["विटामिन ए", "विटामिन सी", "विटामिन डी", "विटामिन K"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन ए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the unit of angular velocity?",
        "question_hi": "कोणीय वेग की इकाई क्या है?",
        "options_en": ["Radian per second", "Degree per second", "Both", "Revolutions per minute"],
        "options_hi": ["रेडियन प्रति सेकंड", "डिग्री प्रति सेकंड", "दोनों", "चक्कर प्रति मिनट"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which acid is used in the production of synthetic rubber?",
        "question_hi": "सिंथेटिक रबर उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acrylic acid", "Stearic acid", "Formic acid", "Acetic acid"],
        "options_hi": ["एक्रिलिक अम्ल", "स्टीयरिक अम्ल", "फॉर्मिक अम्ल", "एसिटिक अम्ल"],
        "answer_en": "Acrylic acid",
        "answer_hi": "एक्रिलिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the chemical formula of acetic acid?",
        "question_hi": "एसिटिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₃COOH", "HCOOH", "C₆H₈O₇", "H₂SO₄"],
        "options_hi": ["CH₃COOH", "HCOOH", "C₆H₈O₇", "H₂SO₄"],
        "answer_en": "CH₃COOH",
        "answer_hi": "CH₃COOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which planet has the strongest magnetic field?",
        "question_hi": "किस ग्रह का चुंबकीय क्षेत्र सबसे मजबूत है?",
        "options_en": ["Jupiter", "Saturn", "Earth", "Neptune"],
        "options_hi": ["बृहस्पति", "शनि", "पृथ्वी", "नेपच्यून"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
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
        "num": 37,
        "question_en": "Which vitamin deficiency causes muscle weakness?",
        "question_hi": "किस विटामिन की कमी से मांसपेशियों में कमजोरी आती है?",
        "options_en": ["Vitamin E", "Vitamin D", "Vitamin C", "Vitamin B1"],
        "options_hi": ["विटामिन ई", "विटामिन डी", "विटामिन सी", "विटामिन बी1"],
        "answer_en": "Vitamin E",
        "answer_hi": "विटामिन ई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the unit of solid angle?",
        "question_hi": "घन कोण की इकाई क्या है?",
        "options_en": ["Steradian", "Radian", "Degree", "Gradian"],
        "options_hi": ["स्टेरेडियन", "रेडियन", "डिग्री", "ग्रेडियन"],
        "answer_en": "Steradian",
        "answer_hi": "स्टेरेडियन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which acid is used in the production of fire extinguishers?",
        "question_hi": "अग्निशामक यंत्रों के उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Boric acid", "Sulfuric acid", "Hydrochloric acid", "Acetic acid"],
        "options_hi": ["बोरिक अम्ल", "सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "एसिटिक अम्ल"],
        "answer_en": "Boric acid",
        "answer_hi": "बोरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the chemical formula of citric acid?",
        "question_hi": "साइट्रिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["C₆H₈O₇", "C₃H₆O₃", "C₂H₄O₂", "C₇H₆O₂"],
        "options_hi": ["C₆H₈O₇", "C₃H₆O₃", "C₂H₄O₂", "C₇H₆O₂"],
        "answer_en": "C₆H₈O₇",
        "answer_hi": "C₆H₈O₇",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which planet has the most moons?",
        "question_hi": "किस ग्रह के सबसे अधिक चंद्रमा हैं?",
        "options_en": ["Saturn", "Jupiter", "Uranus", "Neptune"],
        "options_hi": ["शनि", "बृहस्पति", "युरेनस", "नेपच्यून"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the chemical symbol for iodine?",
        "question_hi": "आयोडीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["I", "Io", "Id", "In"],
        "options_hi": ["I", "Io", "Id", "In"],
        "answer_en": "I",
        "answer_hi": "I",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which vitamin deficiency causes peripheral neuropathy?",
        "question_hi": "किस विटामिन की कमी से परिधीय न्यूरोपैथी होती है?",
        "options_en": ["Vitamin B6", "Vitamin B12", "Both", "Vitamin B1"],
        "options_hi": ["विटामिन बी6", "विटामिन बी12", "दोनों", "विटामिन बी1"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the unit of acceleration?",
        "question_hi": "त्वरण की इकाई क्या है?",
        "options_en": ["m/s²", "cm/s²", "Both", "km/h²"],
        "options_hi": ["मी/से²", "सेमी/से²", "दोनों", "किमी/घंटा²"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which acid is used in the production of textile dyes?",
        "question_hi": "टेक्सटाइल डाई उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Acetic acid", "Both", "Nitric acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "एसिटिक अम्ल", "दोनों", "नाइट्रिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the chemical formula of lactic acid?",
        "question_hi": "लैक्टिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["C₃H₆O₃", "C₂H₄O₂", "C₆H₁₂O₆", "C₄H₆O₆"],
        "options_hi": ["C₃H₆O₃", "C₂H₄O₂", "C₆H₁₂O₆", "C₄H₆O₆"],
        "answer_en": "C₃H₆O₃",
        "answer_hi": "C₃H₆O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which moon has the most water ice on its surface?",
        "question_hi": "किस चंद्रमा की सतह पर सबसे अधिक जल बर्फ है?",
        "options_en": ["Europa", "Enceladus", "Ganymede", "Callisto"],
        "options_hi": ["यूरोपा", "एन्सेलेडस", "गेनीमेड", "कैलिस्टो"],
        "answer_en": "Europa",
        "answer_hi": "यूरोपा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the chemical symbol for bromine?",
        "question_hi": "ब्रोमीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Br", "Bm", "Bo", "Bn"],
        "options_hi": ["Br", "Bm", "Bo", "Bn"],
        "answer_en": "Br",
        "answer_hi": "Br",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which vitamin deficiency causes hemolytic anemia in newborns?",
        "question_hi": "किस विटामिन की कमी से नवजात शिशुओं में हेमोलिटिक एनीमिया होता है?",
        "options_en": ["Vitamin E", "Vitamin K", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन ई", "विटामिन K", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin E",
        "answer_hi": "विटामिन ई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the unit of dynamic viscosity?",
        "question_hi": "डायनेमिक श्यानता की इकाई क्या है?",
        "options_en": ["Pascal-second", "Poise", "Both", "Stokes"],
        "options_hi": ["पास्कल-सेकंड", "पॉइज़", "दोनों", "स्टोक्स"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which acid is used in the production of leather?",
        "question_hi": "चमड़ा उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Tannic acid", "Sulfuric acid", "Hydrochloric acid", "Nitric acid"],
        "options_hi": ["टैनिक अम्ल", "सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल"],
        "answer_en": "Tannic acid",
        "answer_hi": "टैनिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the chemical formula of oxalic acid?",
        "question_hi": "ऑक्सालिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["C₂H₂O₄", "C₃H₄O₄", "C₄H₆O₄", "C₆H₁₀O₈"],
        "options_hi": ["C₂H₂O₄", "C₃H₄O₄", "C₄H₆O₄", "C₆H₁₀O₈"],
        "answer_en": "C₂H₂O₄",
        "answer_hi": "C₂H₂O₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which planet has the most volcanic activity?",
        "question_hi": "किस ग्रह पर सबसे अधिक ज्वालामुखी गतिविधि है?",
        "options_en": ["Venus", "Earth", "Mars", "Io (moon)"],
        "options_hi": ["शुक्र", "पृथ्वी", "मंगल", "आईओ (चंद्रमा)"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the chemical symbol for carbon?",
        "question_hi": "कार्बन का रासायनिक प्रतीक क्या है?",
        "options_en": ["C", "Ca", "Co", "Cr"],
        "options_hi": ["C", "Ca", "Co", "Cr"],
        "answer_en": "C",
        "answer_hi": "C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which vitamin deficiency causes megaloblastic anemia?",
        "question_hi": "किस विटामिन की कमी से मेगालोब्लास्टिक एनीमिया होता है?",
        "options_en": ["Folate (Vitamin B9)", "Vitamin B12", "Both", "Vitamin B6"],
        "options_hi": ["फोलेट (विटामिन बी9)", "विटामिन बी12", "दोनों", "विटामिन बी6"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the unit of kinematic viscosity?",
        "question_hi": "काइनेमेटिक श्यानता की इकाई क्या है?",
        "options_en": ["Stokes", "Poise", "m²/s", "Both Stokes and m²/s"],
        "options_hi": ["स्टोक्स", "पॉइज़", "मी²/से", "स्टोक्स और मी²/से दोनों"],
        "answer_en": "Both Stokes and m²/s",
        "answer_hi": "स्टोक्स और मी²/से दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which acid is used in the production of photographic film?",
        "question_hi": "फोटोग्राफिक फिल्म उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetic acid", "Sulfuric acid", "Nitric acid", "Hydrochloric acid"],
        "options_hi": ["एसिटिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the chemical formula of urea?",
        "question_hi": "यूरिया का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₄N₂O", "C₂H₅NO₂", "C₃H₆N₆", "C₆H₁₂O₆"],
        "options_hi": ["CH₄N₂O", "C₂H₅NO₂", "C₃H₆N₆", "C₆H₁₂O₆"],
        "answer_en": "CH₄N₂O",
        "answer_hi": "CH₄N₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which moon is tidally locked to its planet?",
        "question_hi": "कौन सा चंद्रमा अपने ग्रह से ज्वारीय रूप से बंद है?",
        "options_en": ["Moon (Earth)", "Io", "Titan", "All major moons"],
        "options_hi": ["चंद्रमा (पृथ्वी)", "आईओ", "टाइटन", "सभी प्रमुख चंद्रमा"],
        "answer_en": "All major moons",
        "answer_hi": "सभी प्रमुख चंद्रमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the chemical symbol for nitrogen?",
        "question_hi": "नाइट्रोजन का रासायनिक प्रतीक क्या है?",
        "options_en": ["N", "Ni", "Ng", "Nt"],
        "options_hi": ["N", "Ni", "Ng", "Nt"],
        "answer_en": "N",
        "answer_hi": "N",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which vitamin deficiency causes hyperkeratosis?",
        "question_hi": "किस विटामिन की कमी से हाइपरकेराटोसिस होता है?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
        "options_hi": ["विटामिन ए", "विटामिन सी", "विटामिन डी", "विटामिन ई"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन ए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the unit of specific heat capacity?",
        "question_hi": "विशिष्ट ऊष्मा धारिता की इकाई क्या है?",
        "options_en": ["J/(kg·K)", "cal/(g·°C)", "Both", "W/(m·K)"],
        "options_hi": ["जे/(किग्रा·के)", "कैल/(ग्रा·°से)", "दोनों", "वाट/(मी·के)"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which acid is used in the production of artificial silk?",
        "question_hi": "कृत्रिम रेशम उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetic acid", "Sulfuric acid", "Nitric acid", "Hydrochloric acid"],
        "options_hi": ["एसिटिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the chemical formula of glycerol?",
        "question_hi": "ग्लिसरॉल का रासायनिक सूत्र क्या है?",
        "options_en": ["C₃H₈O₃", "C₂H₆O₂", "C₄H₁₀O₄", "C₅H₁₂O₅"],
        "options_hi": ["C₃H₈O₃", "C₂H₆O₂", "C₄H₁₀O₄", "C₅H₁₂O₅"],
        "answer_en": "C₃H₈O₃",
        "answer_hi": "C₃H₈O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which planet has the shortest year?",
        "question_hi": "किस ग्रह का वर्ष सबसे छोटा है?",
        "options_en": ["Mercury", "Venus", "Earth", "Mars"],
        "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
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
        "num": 67,
        "question_en": "Which vitamin deficiency causes coagulation disorders?",
        "question_hi": "किस विटामिन की कमी से जमावट विकार होते हैं?",
        "options_en": ["Vitamin K", "Vitamin C", "Vitamin E", "Vitamin B12"],
        "options_hi": ["विटामिन K", "विटामिन सी", "विटामिन ई", "विटामिन बी12"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the unit of surface tension?",
        "question_hi": "पृष्ठ तनाव की इकाई क्या है?",
        "options_en": ["N/m", "dyne/cm", "Both", "J/m²"],
        "options_hi": ["न्यूटन/मी", "डाइन/सेमी", "दोनों", "जूल/मी²"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which acid is used in the production of electroplating?",
        "question_hi": "इलेक्ट्रोप्लेटिंग उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Hydrochloric acid", "Both", "Nitric acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "दोनों", "नाइट्रिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the chemical formula of formaldehyde?",
        "question_hi": "फॉर्मेल्डिहाइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₂O", "C₂H₄O", "C₃H₆O", "CH₄O"],
        "options_hi": ["CH₂O", "C₂H₄O", "C₃H₆O", "CH₄O"],
        "answer_en": "CH₂O",
        "answer_hi": "CH₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which moon has the most Earth-like atmosphere?",
        "question_hi": "किस चंद्रमा का वातावरण सबसे अधिक पृथ्वी जैसा है?",
        "options_en": ["Titan", "Europa", "Ganymede", "Callisto"],
        "options_hi": ["टाइटन", "यूरोपा", "गेनीमेड", "कैलिस्टो"],
        "answer_en": "Titan",
        "answer_hi": "टाइटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the chemical symbol for hydrogen?",
        "question_hi": "हाइड्रोजन का रासायनिक प्रतीक क्या है?",
        "options_en": ["H", "Hy", "Hd", "Hg"],
        "options_hi": ["H", "Hy", "Hd", "Hg"],
        "answer_en": "H",
        "answer_hi": "H",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which vitamin deficiency causes Bitot's spots?",
        "question_hi": "किस विटामिन की कमी से बिटोट स्पॉट्स होते हैं?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
        "options_hi": ["विटामिन ए", "विटामिन सी", "विटामिन डी", "विटामिन ई"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन ए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the unit of thermal conductivity?",
        "question_hi": "ऊष्मीय चालकता की इकाई क्या है?",
        "options_en": ["W/(m·K)", "cal/(cm·s·°C)", "Both", "J/(kg·K)"],
        "options_hi": ["वाट/(मी·के)", "कैल/(सेमी·से·°से)", "दोनों", "जूल/(किग्रा·के)"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which acid is used in the production of insecticides?",
        "question_hi": "कीटनाशकों के उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Phosphoric acid", "Acetic acid", "Citric acid", "Sulfuric acid"],
        "options_hi": ["फॉस्फोरिक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "सल्फ्यूरिक अम्ल"],
        "answer_en": "Phosphoric acid",
        "answer_hi": "फॉस्फोरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the chemical formula of acetone?",
        "question_hi": "एसीटोन का रासायनिक सूत्र क्या है?",
        "options_en": ["C₃H₆O", "C₂H₄O", "C₄H₈O", "C₅H₁₀O"],
        "options_hi": ["C₃H₆O", "C₂H₄O", "C₄H₈O", "C₅H₁₀O"],
        "answer_en": "C₃H₆O",
        "answer_hi": "C₃H₆O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which planet has the most extreme temperature variations?",
        "question_hi": "किस ग्रह पर सबसे अधिक चरम तापमान भिन्नताएं हैं?",
        "options_en": ["Mercury", "Mars", "Venus", "Earth"],
        "options_hi": ["बुध", "मंगल", "शुक्र", "पृथ्वी"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the chemical symbol for neon?",
        "question_hi": "नियॉन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ne", "No", "Nn", "Na"],
        "options_hi": ["Ne", "No", "Nn", "Na"],
        "answer_en": "Ne",
        "answer_hi": "Ne",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which vitamin deficiency causes spinal cord degeneration?",
        "question_hi": "किस विटामिन की कमी से स्पाइनल कॉर्ड का अध:पतन होता है?",
        "options_en": ["Vitamin B12", "Vitamin B6", "Vitamin E", "Vitamin D"],
        "options_hi": ["विटामिन बी12", "विटामिन बी6", "विटामिन ई", "विटामिन डी"],
        "answer_en": "Vitamin B12",
        "answer_hi": "विटामिन बी12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the unit of electric field strength?",
        "question_hi": "विद्युत क्षेत्र शक्ति की इकाई क्या है?",
        "options_en": ["V/m", "N/C", "Both", "T"],
        "options_hi": ["वोल्ट/मी", "न्यूटन/कूलॉम", "दोनों", "टेस्ला"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which acid is used in the production of food additives?",
        "question_hi": "खाद्य योजकों के उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Citric acid", "Acetic acid", "Both", "Sulfuric acid"],
        "options_hi": ["साइट्रिक अम्ल", "एसिटिक अम्ल", "दोनों", "सल्फ्यूरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the chemical formula of benzene?",
        "question_hi": "बेंजीन का रासायनिक सूत्र क्या है?",
        "options_en": ["C₆H₆", "C₆H₁₂", "C₇H₈", "C₈H₁₀"],
        "options_hi": ["C₆H₆", "C₆H₁₂", "C₇H₈", "C₈H₁₀"],
        "answer_en": "C₆H₆",
        "answer_hi": "C₆H₆",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which moon has the most active geology?",
        "question_hi": "किस चंद्रमा की भूविज्ञान सबसे अधिक सक्रिय है?",
        "options_en": ["Io", "Europa", "Enceladus", "Titan"],
        "options_hi": ["आईओ", "यूरोपा", "एन्सेलेडस", "टाइटन"],
        "answer_en": "Io",
        "answer_hi": "आईओ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the chemical symbol for radon?",
        "question_hi": "रेडॉन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Rn", "Ra", "Rd", "Ro"],
        "options_hi": ["Rn", "Ra", "Rd", "Ro"],
        "answer_en": "Rn",
        "answer_hi": "Rn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which vitamin deficiency causes weakness and fatigue?",
        "question_hi": "किस विटामिन की कमी से कमजोरी और थकान होती है?",
        "options_en": ["Vitamin B12", "Vitamin C", "Vitamin D", "All of these"],
        "options_hi": ["विटामिन बी12", "विटामिन सी", "विटामिन डी", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the unit of magnetic moment?",
        "question_hi": "चुंबकीय आघूर्ण की इकाई क्या है?",
        "options_en": ["Ampere-meter²", "Joule/Tesla", "Both", "Weber"],
        "options_hi": ["एम्पीयर-मीटर²", "जूल/टेस्ला", "दोनों", "वेबर"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which acid is used in the production of cleaning agents?",
        "question_hi": "सफाई एजेंटों के उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Hydrochloric acid", "Sulfuric acid", "Both", "Acetic acid"],
        "options_hi": ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "दोनों", "एसिटिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the chemical formula of naphthalene?",
        "question_hi": "नेफ़थलीन का रासायनिक सूत्र क्या है?",
        "options_en": ["C₁₀H₈", "C₆H₆", "C₈H₁₀", "C₁₂H₁₀"],
        "options_hi": ["C₁₀H₈", "C₆H₆", "C₈H₁₀", "C₁₂H₁₀"],
        "answer_en": "C₁₀H₈",
        "answer_hi": "C₁₀H₈",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which planet has the most complex ring system?",
        "question_hi": "किस ग्रह की वलय प्रणाली सबसे जटिल है?",
        "options_en": ["Saturn", "Jupiter", "Uranus", "Neptune"],
        "options_hi": ["शनि", "बृहस्पति", "युरेनस", "नेपच्यून"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the chemical symbol for krypton?",
        "question_hi": "क्रिप्टन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Kr", "Kp", "Ky", "Kn"],
        "options_hi": ["Kr", "Kp", "Ky", "Kn"],
        "answer_en": "Kr",
        "answer_hi": "Kr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which vitamin deficiency causes depression?",
        "question_hi": "किस विटामिन की कमी से अवसाद होता है?",
        "options_en": ["Vitamin D", "Vitamin B12", "Both", "Vitamin C"],
        "options_hi": ["विटामिन डी", "विटामिन बी12", "दोनों", "विटामिन सी"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the unit of activity of a radioactive substance?",
        "question_hi": "रेडियोधर्मी पदार्थ की गतिविधि की इकाई क्या है?",
        "options_en": ["Becquerel", "Curie", "Both", "Gray"],
        "options_hi": ["बेकरेल", "क्यूरी", "दोनों", "ग्रे"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which acid is used in the production of perfumes?",
        "question_hi": "इत्र उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Benzoic acid", "Acetic acid", "Citric acid", "Tartaric acid"],
        "options_hi": ["बेंज़ोइक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "टार्टरिक अम्ल"],
        "answer_en": "Benzoic acid",
        "answer_hi": "बेंज़ोइक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the chemical formula of phenol?",
        "question_hi": "फीनॉल का रासायनिक सूत्र क्या है?",
        "options_en": ["C₆H₅OH", "C₆H₆", "C₇H₈O", "C₈H₁₀O"],
        "options_hi": ["C₆H₅OH", "C₆H₆", "C₇H₈O", "C₈H₁₀O"],
        "answer_en": "C₆H₅OH",
        "answer_hi": "C₆H₅OH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which moon has methane lakes?",
        "question_hi": "किस चंद्रमा पर मीथेन झीलें हैं?",
        "options_en": ["Titan", "Europa", "Ganymede", "Callisto"],
        "options_hi": ["टाइटन", "यूरोपा", "गेनीमेड", "कैलिस्टो"],
        "answer_en": "Titan",
        "answer_hi": "टाइटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the chemical symbol for xenon?",
        "question_hi": "जीनॉन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Xe", "Xn", "Xo", "X"],
        "options_hi": ["Xe", "Xn", "Xo", "X"],
        "answer_en": "Xe",
        "answer_hi": "Xe",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which vitamin deficiency causes bone pain?",
        "question_hi": "किस विटामिन की कमी से हड्डी में दर्द होता है?",
        "options_en": ["Vitamin D", "Vitamin C", "Vitamin K", "Vitamin B12"],
        "options_hi": ["विटामिन डी", "विटामिन सी", "विटामिन K", "विटामिन बी12"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the unit of plane angle?",
        "question_hi": "समतल कोण की इकाई क्या है?",
        "options_en": ["Radian", "Degree", "Both", "Gradian"],
        "options_hi": ["रेडियन", "डिग्री", "दोनों", "ग्रेडियन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which acid is used in the production of wine?",
        "question_hi": "शराब उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Tartaric acid", "Malic acid", "Both", "Acetic acid"],
        "options_hi": ["टार्टरिक अम्ल", "मैलिक अम्ल", "दोनों", "एसिटिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the chemical formula of sucrose?",
        "question_hi": "सुक्रोज का रासायनिक सूत्र क्या है?",
        "options_en": ["C₁₂H₂₂O₁₁", "C₆H₁₂O₆", "C₂H₅OH", "CH₄"],
        "options_hi": ["C₁₂H₂₂O₁₁", "C₆H₁₂O₆", "C₂H₅OH", "CH₄"],
        "answer_en": "C₁₂H₂₂O₁₁",
        "answer_hi": "C₁₂H₂₂O₁१",
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