const questions = [
    {
        "num": 1,
        "question_en": "Which device is used to measure blood pressure?",
        "question_hi": "रक्तचाप मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Stethoscope", "Sphygmomanometer", "Thermometer", "Barometer"],
        "options_hi": ["स्टेथोस्कोप", "स्फिग्मोमैनोमीटर", "थर्मामीटर", "बैरोमीटर"],
        "answer_en": "Sphygmomanometer",
        "answer_hi": "स्फिग्मोमैनोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
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
        "num": 3,
        "question_en": "Who discovered the process of pasteurization?",
        "question_hi": "पास्चुरीकरण की प्रक्रिया की खोज किसने की?",
        "options_en": ["Louis Pasteur", "Alexander Fleming", "Robert Koch", "Joseph Lister"],
        "options_hi": ["लुई पाश्चर", "अलेक्जेंडर फ्लेमिंग", "रॉबर्ट कोच", "जोसेफ लिस्टर"],
        "answer_en": "Louis Pasteur",
        "answer_hi": "लुई पाश्चर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the main component of coal gas?",
        "question_hi": "कोयला गैस का मुख्य घटक क्या है?",
        "options_en": ["Methane", "Hydrogen", "Carbon monoxide", "All of these"],
        "options_hi": ["मीथेन", "हाइड्रोजन", "कार्बन मोनोऑक्साइड", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which organ produces testosterone?",
        "question_hi": "टेस्टोस्टेरोन कौन सा अंग उत्पन्न करता है?",
        "options_en": ["Testes", "Ovaries", "Adrenal glands", "All of these"],
        "options_hi": ["वृषण", "अंडाशय", "अधिवृक्क ग्रंथियां", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the chemical name of caustic potash?",
        "question_hi": "कास्टिक पोटाश का रासायनिक नाम क्या है?",
        "options_en": ["Potassium hydroxide", "Potassium carbonate", "Potassium nitrate", "Potassium chloride"],
        "options_hi": ["पोटेशियम हाइड्रॉक्साइड", "पोटेशियम कार्बोनेट", "पोटेशियम नाइट्रेट", "पोटेशियम क्लोराइड"],
        "answer_en": "Potassium hydroxide",
        "answer_hi": "पोटेशियम हाइड्रॉक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which vitamin is also known as cholecalciferol?",
        "question_hi": "किस विटामिन को कोलेकैल्सीफेरोल भी कहा जाता है?",
        "options_en": ["Vitamin D3", "Vitamin D2", "Vitamin K", "Vitamin E"],
        "options_hi": ["विटामिन D3", "विटामिन D2", "विटामिन K", "विटामिन ई"],
        "answer_en": "Vitamin D3",
        "answer_hi": "विटामिन D3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the SI unit of luminous intensity?",
        "question_hi": "ज्योति तीव्रता की SI इकाई क्या है?",
        "options_en": ["Candela", "Lumen", "Lux", "Watt"],
        "options_hi": ["कैंडेला", "ल्यूमेन", "लक्स", "वाट"],
        "answer_en": "Candela",
        "answer_hi": "कैंडेला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which metal is used in making fireworks?",
        "question_hi": "आतिशबाजी बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Magnesium", "Aluminum", "Both", "Iron"],
        "options_hi": ["मैग्नीशियम", "एल्युमीनियम", "दोनों", "लोहा"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the chemical formula of hydrogen peroxide?",
        "question_hi": "हाइड्रोजन पेरोक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂O₂", "H₂O", "HO₂", "H₃O"],
        "options_hi": ["H₂O₂", "H₂O", "HO₂", "H₃O"],
        "answer_en": "H₂O₂",
        "answer_hi": "H₂O₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which part of the plant is modified into a cactus spine?",
        "question_hi": "पौधे का कौन सा भाग कैक्टस की कांटे में परिवर्तित होता है?",
        "options_en": ["Leaf", "Stem", "Root", "Flower"],
        "options_hi": ["पत्ती", "तना", "जड़", "फूल"],
        "answer_en": "Leaf",
        "answer_hi": "पत्ती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the lightest element?",
        "question_hi": "सबसे हल्का तत्व कौन सा है?",
        "options_en": ["Hydrogen", "Helium", "Lithium", "Beryllium"],
        "options_hi": ["हाइड्रोजन", "हीलियम", "लिथियम", "बेरिलियम"],
        "answer_en": "Hydrogen",
        "answer_hi": "हाइड्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which gas is used in advertising signs?",
        "question_hi": "विज्ञापन साइन में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Neon", "Argon", "Xenon", "All of these"],
        "options_hi": ["नियॉन", "आर्गन", "जेनॉन", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the freezing point of mercury?",
        "question_hi": "पारा का हिमांक क्या है?",
        "options_en": ["-38.83°C", "0°C", "-39°C", "-40°C"],
        "options_hi": ["-38.83°C", "0°C", "-39°C", "-40°C"],
        "answer_en": "-38.83°C",
        "answer_hi": "-38.83°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which planet is known as the Jewel of the Solar System?",
        "question_hi": "किस ग्रह को सौर मंडल का रत्न कहा जाता है?",
        "options_en": ["Saturn", "Jupiter", "Venus", "Earth"],
        "options_hi": ["शनि", "बृहस्पति", "शुक्र", "पृथ्वी"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the chemical symbol for tungsten?",
        "question_hi": "टंगस्टन का रासायनिक प्रतीक क्या है?",
        "options_en": ["W", "Tg", "Tu", "Tn"],
        "options_hi": ["W", "Tg", "Tu", "Tn"],
        "answer_en": "W",
        "answer_hi": "W",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which vitamin deficiency causes Keshan disease?",
        "question_hi": "किस विटामिन की कमी से केशान रोग होता है?",
        "options_en": ["Selenium (not vitamin)", "Vitamin E", "Vitamin C", "Vitamin B"],
        "options_hi": ["सेलेनियम (विटामिन नहीं)", "विटामिन ई", "विटामिन सी", "विटामिन बी"],
        "answer_en": "Selenium (not vitamin)",
        "answer_hi": "सेलेनियम (विटामिन नहीं)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the unit of sound intensity?",
        "question_hi": "ध्वनि तीव्रता की इकाई क्या है?",
        "options_en": ["Decibel", "Bel", "Both", "Hertz"],
        "options_hi": ["डेसिबल", "बेल", "दोनों", "हर्ट्ज"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which acid is used in the production of rayon?",
        "question_hi": "रेयॉन उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Hydrochloric acid", "Nitric acid", "Acetic acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"],
        "answer_en": "Sulfuric acid",
        "answer_hi": "सल्फ्यूरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the chemical formula of sodium hydroxide?",
        "question_hi": "सोडियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["NaOH", "Na₂CO₃", "NaHCO₃", "Na₂O"],
        "options_hi": ["NaOH", "Na₂CO₃", "NaHCO₃", "Na₂O"],
        "answer_en": "NaOH",
        "answer_hi": "NaOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which is the only moon with a substantial atmosphere?",
        "question_hi": "कौन सा एकमात्र चंद्रमा है जिसका एक महत्वपूर्ण वातावरण है?",
        "options_en": ["Titan", "Europa", "Ganymede", "Callisto"],
        "options_hi": ["टाइटन", "यूरोपा", "गेनीमेड", "कैलिस्टो"],
        "answer_en": "Titan",
        "answer_hi": "टाइटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the chemical symbol for vanadium?",
        "question_hi": "वैनेडियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["V", "Va", "Vn", "Vm"],
        "options_hi": ["V", "Va", "Vn", "Vm"],
        "answer_en": "V",
        "answer_hi": "V",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which vitamin is essential for calcium absorption?",
        "question_hi": "कैल्शियम अवशोषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin D", "Vitamin C", "Vitamin K", "Vitamin A"],
        "options_hi": ["विटामिन डी", "विटामिन सी", "विटामिन K", "विटामिन ए"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the unit of magnetic flux?",
        "question_hi": "चुंबकीय फ्लक्स की इकाई क्या है?",
        "options_en": ["Weber", "Tesla", "Henry", "Farad"],
        "options_hi": ["वेबर", "टेस्ला", "हेनरी", "फैरड"],
        "answer_en": "Weber",
        "answer_hi": "वेबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which acid is present in honey bee sting?",
        "question_hi": "मधुमक्खी के डंक में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Formic acid", "Acetic acid", "Citric acid", "Lactic acid"],
        "options_hi": ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल"],
        "answer_en": "Formic acid",
        "answer_hi": "फॉर्मिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the chemical formula of carbon tetrachloride?",
        "question_hi": "कार्बन टेट्राक्लोराइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CCl₄", "CHCl₃", "C₂Cl₆", "CCl₂"],
        "options_hi": ["CCl₄", "CHCl₃", "C₂Cl₆", "CCl₂"],
        "answer_en": "CCl₄",
        "answer_hi": "CCl₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which planet has the shortest year?",
        "question_hi": "किस ग्रह का वर्ष सबसे छोटा होता है?",
        "options_en": ["Mercury", "Venus", "Earth", "Mars"],
        "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the chemical symbol for cadmium?",
        "question_hi": "कैडमियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Cd", "Cm", "Ca", "Cb"],
        "options_hi": ["Cd", "Cm", "Ca", "Cb"],
        "answer_en": "Cd",
        "answer_hi": "Cd",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which vitamin deficiency causes Wernicke-Korsakoff syndrome?",
        "question_hi": "किस विटामिन की कमी से वर्निक-कोर्साकॉफ सिंड्रोम होता है?",
        "options_en": ["Vitamin B1", "Vitamin B12", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन बी1", "विटामिन बी12", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन बी1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the unit of radioactivity?",
        "question_hi": "रेडियोधर्मिता की इकाई क्या है?",
        "options_en": ["Becquerel", "Curie", "Both", "Roentgen"],
        "options_hi": ["बेकरेल", "क्यूरी", "दोनों", "रॉन्टजेन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which acid is used in the production of nylon?",
        "question_hi": "नायलॉन उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Adipic acid", "Acetic acid", "Citric acid", "Tartaric acid"],
        "options_hi": ["एडिपिक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "टार्टरिक अम्ल"],
        "answer_en": "Adipic acid",
        "answer_hi": "एडिपिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the chemical formula of potassium permanganate?",
        "question_hi": "पोटेशियम परमैंगनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["KMnO₄", "K₂MnO₄", "KMnO₃", "K₂Cr₂O₇"],
        "options_hi": ["KMnO₄", "K₂MnO₄", "KMnO₃", "K₂Cr₂O₇"],
        "answer_en": "KMnO₄",
        "answer_hi": "KMnO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which planet has the most extreme temperature difference?",
        "question_hi": "किस ग्रह पर सबसे अधिक तापमान अंतर है?",
        "options_en": ["Mercury", "Venus", "Mars", "Earth"],
        "options_hi": ["बुध", "शुक्र", "मंगल", "पृथ्वी"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the chemical symbol for selenium?",
        "question_hi": "सेलेनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Se", "Sl", "Sn", "Sm"],
        "options_hi": ["Se", "Sl", "Sn", "Sm"],
        "answer_en": "Se",
        "answer_hi": "Se",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which vitamin is also known as menaquinone?",
        "question_hi": "किस विटामिन को मेनाक्विनोन भी कहा जाता है?",
        "options_en": ["Vitamin K2", "Vitamin K1", "Vitamin E", "Vitamin A"],
        "options_hi": ["विटामिन K2", "विटामिन K1", "विटामिन ई", "विटामिन ए"],
        "answer_en": "Vitamin K2",
        "answer_hi": "विटामिन K2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the unit of specific gravity?",
        "question_hi": "विशिष्ट गुरुत्व की इकाई क्या है?",
        "options_en": ["Dimensionless", "kg/m³", "N/m³", "g/cm³"],
        "options_hi": ["आयामहीन", "किलोग्राम/मीटर³", "न्यूटन/मीटर³", "ग्राम/सेंटीमीटर³"],
        "answer_en": "Dimensionless",
        "answer_hi": "आयामहीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which acid is used in the production of explosives?",
        "question_hi": "विस्फोटक उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Nitric acid", "Sulfuric acid", "Both", "Hydrochloric acid"],
        "options_hi": ["नाइट्रिक अम्ल", "सल्फ्यूरिक अम्ल", "दोनों", "हाइड्रोक्लोरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the chemical formula of ammonium nitrate?",
        "question_hi": "अमोनियम नाइट्रेट का रासायनिक सूत्र क्या है?",
        "options_en": ["NH₄NO₃", "NH₃NO₃", "N₂H₄O₃", "NH₄NO₂"],
        "options_hi": ["NH₄NO₃", "NH₃NO₃", "N₂H₄O₃", "NH₄NO₂"],
        "answer_en": "NH₄NO₃",
        "answer_hi": "NH₄NO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which moon has subsurface oceans?",
        "question_hi": "किस चंद्रमा में भूमिगत महासागर हैं?",
        "options_en": ["Europa", "Ganymede", "Callisto", "All of these"],
        "options_hi": ["यूरोपा", "गेनीमेड", "कैलिस्टो", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the chemical symbol for yttrium?",
        "question_hi": "यट्रियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Y", "Yt", "Ym", "Yu"],
        "options_hi": ["Y", "Yt", "Ym", "Yu"],
        "answer_en": "Y",
        "answer_hi": "Y",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which vitamin deficiency causes Kashin-Beck disease?",
        "question_hi": "किस विटामिन की कमी से काशिन-बेक रोग होता है?",
        "options_en": ["Selenium (not vitamin)", "Vitamin D", "Vitamin C", "Vitamin B"],
        "options_hi": ["सेलेनियम (विटामिन नहीं)", "विटामिन डी", "विटामिन सी", "विटामिन बी"],
        "answer_en": "Selenium (not vitamin)",
        "answer_hi": "सेलेनियम (विटामिन नहीं)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the unit of electric dipole moment?",
        "question_hi": "विद्युत द्विध्रुव आघूर्ण की इकाई क्या है?",
        "options_en": ["C·m", "A·m", "V·m", "N/C"],
        "options_hi": ["C·m", "A·m", "V·m", "N/C"],
        "answer_en": "C·m",
        "answer_hi": "C·m",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which acid is used in the production of food preservatives?",
        "question_hi": "खाद्य परिरक्षक उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Benzoic acid", "Sorbic acid", "Both", "Formic acid"],
        "options_hi": ["बेंजोइक अम्ल", "सोर्बिक अम्ल", "दोनों", "फॉर्मिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the chemical formula of calcium carbide?",
        "question_hi": "कैल्शियम कार्बाइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CaC₂", "CaCO₃", "CaO", "Ca(OH)₂"],
        "options_hi": ["CaC₂", "CaCO₃", "CaO", "Ca(OH)₂"],
        "answer_en": "CaC₂",
        "answer_hi": "CaC₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which planet has the longest day?",
        "question_hi": "किस ग्रह का दिन सबसे लंबा होता है?",
        "options_en": ["Venus", "Mercury", "Earth", "Mars"],
        "options_hi": ["शुक्र", "बुध", "पृथ्वी", "मंगल"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the chemical symbol for zirconium?",
        "question_hi": "जिरकोनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Zr", "Zi", "Zc", "Zm"],
        "options_hi": ["Zr", "Zi", "Zc", "Zm"],
        "answer_en": "Zr",
        "answer_hi": "Zr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which vitamin deficiency causes glossitis?",
        "question_hi": "किस विटामिन की कमी से ग्लोसाइटिस होता है?",
        "options_en": ["Vitamin B2", "Vitamin B12", "Vitamin B6", "Vitamin B3"],
        "options_hi": ["विटामिन बी2", "विटामिन बी12", "विटामिन बी6", "विटामिन बी3"],
        "answer_en": "Vitamin B2",
        "answer_hi": "विटामिन बी2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the unit of thermal conductivity?",
        "question_hi": "तापीय चालकता की इकाई क्या है?",
        "options_en": ["W/m·K", "cal/cm·s·°C", "Both", "J/m·s·K"],
        "options_hi": ["W/m·K", "cal/cm·s·°C", "दोनों", "J/m·s·K"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which acid is used in the production of pharmaceuticals?",
        "question_hi": "फार्मास्यूटिकल उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Citric acid", "Acetic acid", "Hydrochloric acid", "All of these"],
        "options_hi": ["साइट्रिक अम्ल", "एसिटिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the chemical formula of sodium silicate?",
        "question_hi": "सोडियम सिलिकेट का रासायनिक सूत्र क्या है?",
        "options_en": ["Na₂SiO₃", "NaSiO₃", "Na₂Si₂O₅", "Na₂Si₃O₇"],
        "options_hi": ["Na₂SiO₃", "NaSiO₃", "Na₂Si₂O₅", "Na₂Si₃O₇"],
        "answer_en": "Na₂SiO₃",
        "answer_hi": "Na₂SiO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which planet has the fastest winds?",
        "question_hi": "किस ग्रह पर सबसे तेज हवाएं चलती हैं?",
        "options_en": ["Neptune", "Jupiter", "Saturn", "Uranus"],
        "options_hi": ["नेपच्यून", "बृहस्पति", "शनि", "युरेनस"],
        "answer_en": "Neptune",
        "answer_hi": "नेपच्यून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the chemical symbol for niobium?",
        "question_hi": "नायोबियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Nb", "Ni", "No", "Nm"],
        "options_hi": ["Nb", "Ni", "No", "Nm"],
        "answer_en": "Nb",
        "answer_hi": "Nb",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which vitamin is essential for amino acid metabolism?",
        "question_hi": "अमीनो अम्ल चयापचय के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B6", "Vitamin B12", "Vitamin B2", "Vitamin B1"],
        "options_hi": ["विटामिन बी6", "विटामिन बी12", "विटामिन बी2", "विटामिन बी1"],
        "answer_en": "Vitamin B6",
        "answer_hi": "विटामिन बी6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the unit of surface tension?",
        "question_hi": "पृष्ठ तनाव की इकाई क्या है?",
        "options_en": ["N/m", "J/m²", "Both", "kg/m·s²"],
        "options_hi": ["N/m", "J/m²", "दोनों", "kg/m·s²"],
        "answer_en": "N/m",
        "answer_hi": "N/m",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which acid is used in the production of rubber?",
        "question_hi": "रबर उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Formic acid", "Acetic acid", "Both", "Tartaric acid"],
        "options_hi": ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "दोनों", "टार्टरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the chemical formula of magnesium sulfate?",
        "question_hi": "मैग्नीशियम सल्फेट का रासायनिक सूत्र क्या है?",
        "options_en": ["MgSO₄", "MgS", "MgSO₃", "Mg₂SO₄"],
        "options_hi": ["MgSO₄", "MgS", "MgSO₃", "Mg₂SO₄"],
        "answer_en": "MgSO₄",
        "answer_hi": "MgSO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which planet has the most tilted axis?",
        "question_hi": "किस ग्रह का अक्ष सबसे अधिक झुका हुआ है?",
        "options_en": ["Uranus", "Neptune", "Saturn", "Jupiter"],
        "options_hi": ["युरेनस", "नेपच्यून", "शनि", "बृहस्पति"],
        "answer_en": "Uranus",
        "answer_hi": "युरेनस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the chemical symbol for rhodium?",
        "question_hi": "रोडियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Rh", "Rd", "Rm", "Ro"],
        "options_hi": ["Rh", "Rd", "Rm", "Ro"],
        "answer_en": "Rh",
        "answer_hi": "Rh",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which vitamin deficiency causes muscle weakness?",
        "question_hi": "किस विटामिन की कमी से मांसपेशियों में कमजोरी होती है?",
        "options_en": ["Vitamin D", "Calcium (not vitamin)", "Magnesium (not vitamin)", "All of these"],
        "options_hi": ["विटामिन डी", "कैल्शियम (विटामिन नहीं)", "मैग्नीशियम (विटामिन नहीं)", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the unit of viscosity?",
        "question_hi": "श्यानता की इकाई क्या है?",
        "options_en": ["Poise", "Pascal-second", "Both", "Stokes"],
        "options_hi": ["पॉइज़", "पास्कल-सेकंड", "दोनों", "स्टोक्स"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which acid is used in the production of detergents?",
        "question_hi": "डिटर्जेंट उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfonic acid", "Sulfuric acid", "Phosphoric acid", "Hydrochloric acid"],
        "options_hi": ["सल्फोनिक अम्ल", "सल्फ्यूरिक अम्ल", "फॉस्फोरिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
        "answer_en": "Sulfonic acid",
        "answer_hi": "सल्फोनिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the chemical formula of aluminum chloride?",
        "question_hi": "एल्युमीनियम क्लोराइड का रासायनिक सूत्र क्या है?",
        "options_en": ["AlCl₃", "Al₂Cl₃", "AlCl", "Al₃Cl₂"],
        "options_hi": ["AlCl₃", "Al₂Cl₃", "AlCl", "Al₃Cl₂"],
        "answer_en": "AlCl₃",
        "answer_hi": "AlCl₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which planet has the most circular orbit?",
        "question_hi": "किस ग्रह की कक्षा सबसे गोलाकार है?",
        "options_en": ["Venus", "Earth", "Neptune", "Mars"],
        "options_hi": ["शुक्र", "पृथ्वी", "नेपच्यून", "मंगल"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the chemical symbol for palladium?",
        "question_hi": "पैलेडियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Pd", "Pl", "Pa", "Pm"],
        "options_hi": ["Pd", "Pl", "Pa", "Pm"],
        "answer_en": "Pd",
        "answer_hi": "Pd",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which vitamin deficiency causes depression?",
        "question_hi": "किस विटामिन की कमी से अवसाद होता है?",
        "options_en": ["Vitamin D", "Vitamin B12", "Vitamin B6", "All of these"],
        "options_hi": ["विटामिन डी", "विटामिन बी12", "विटामिन बी6", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the unit of compressibility?",
        "question_hi": "संपीड्यता की इकाई क्या है?",
        "options_en": ["Pa⁻¹", "m²/N", "Both", "N/m²"],
        "options_hi": ["Pa⁻¹", "मीटर²/N", "दोनों", "N/मीटर²"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which acid is used in the production of paper?",
        "question_hi": "कागज उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfurous acid", "Sulfuric acid", "Both", "Hydrochloric acid"],
        "options_hi": ["सल्फ्यूरस अम्ल", "सल्फ्यूरिक अम्ल", "दोनों", "हाइड्रोक्लोरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the chemical formula of iron(III) chloride?",
        "question_hi": "आयरन(III) क्लोराइड का रासायनिक सूत्र क्या है?",
        "options_en": ["FeCl₃", "FeCl₂", "Fe₂Cl₃", "Fe₃Cl₂"],
        "options_hi": ["FeCl₃", "FeCl₂", "Fe₂Cl₃", "Fe₃Cl₂"],
        "answer_en": "FeCl₃",
        "answer_hi": "FeCl₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which planet has the strongest magnetic field?",
        "question_hi": "किस ग्रह का चुंबकीय क्षेत्र सबसे शक्तिशाली है?",
        "options_en": ["Jupiter", "Saturn", "Earth", "Neptune"],
        "options_hi": ["बृहस्पति", "शनि", "पृथ्वी", "नेपच्यून"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the chemical symbol for osmium?",
        "question_hi": "ओस्मियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Os", "Om", "Oi", "Oa"],
        "options_hi": ["Os", "Om", "Oi", "Oa"],
        "answer_en": "Os",
        "answer_hi": "Os",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which vitamin is essential for immune function?",
        "question_hi": "प्रतिरक्षा कार्य के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin C", "Vitamin D", "Vitamin A", "All of these"],
        "options_hi": ["विटामिन सी", "विटामिन डी", "विटामिन ए", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the unit of strain?",
        "question_hi": "विकृति की इकाई क्या है?",
        "options_en": ["Dimensionless", "meter", "N/m²", "Pascal"],
        "options_hi": ["आयामहीन", "मीटर", "N/मीटर²", "पास्कल"],
        "answer_en": "Dimensionless",
        "answer_hi": "आयामहीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which acid is used in the production of cosmetics?",
        "question_hi": "कॉस्मेटिक उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Hyaluronic acid", "Salicylic acid", "Both", "Formic acid"],
        "options_hi": ["हयालूरोनिक अम्ल", "सैलिसिलिक अम्ल", "दोनों", "फॉर्मिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the chemical formula of zinc sulfide?",
        "question_hi": "जिंक सल्फाइड का रासायनिक सूत्र क्या है?",
        "options_en": ["ZnS", "ZnSO₄", "Zn₂S", "ZnS₂"],
        "options_hi": ["ZnS", "ZnSO₄", "Zn₂S", "ZnS₂"],
        "answer_en": "ZnS",
        "answer_hi": "ZnS",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which planet has the most visible rings?",
        "question_hi": "किस ग्रह के सबसे अधिक दिखाई देने वाले छल्ले हैं?",
        "options_en": ["Saturn", "Jupiter", "Uranus", "Neptune"],
        "options_hi": ["शनि", "बृहस्पति", "युरेनस", "नेपच्यून"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the chemical symbol for iridium?",
        "question_hi": "इरिडियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ir", "Id", "Im", "Ii"],
        "options_hi": ["Ir", "Id", "Im", "Ii"],
        "answer_en": "Ir",
        "answer_hi": "Ir",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which vitamin deficiency causes fatigue?",
        "question_hi": "किस विटामिन की कमी से थकान होती है?",
        "options_en": ["Vitamin B12", "Vitamin D", "Iron (not vitamin)", "All of these"],
        "options_hi": ["विटामिन बी12", "विटामिन डी", "आयरन (विटामिन नहीं)", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the unit of stress?",
        "question_hi": "प्रतिबल की इकाई क्या है?",
        "options_en": ["Pascal", "N/m²", "Both", "kg/m·s²"],
        "options_hi": ["पास्कल", "N/मीटर²", "दोनों", "किलोग्राम/मीटर·सेकंड²"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which acid is used in the production of textiles?",
        "question_hi": "टेक्सटाइल उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetic acid", "Formic acid", "Both", "Tartaric acid"],
        "options_hi": ["एसिटिक अम्ल", "फॉर्मिक अम्ल", "दोनों", "टार्टरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the chemical formula of copper(I) oxide?",
        "question_hi": "कॉपर(I) ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["Cu₂O", "CuO", "CuO₂", "Cu₂O₃"],
        "options_hi": ["Cu₂O", "CuO", "CuO₂", "Cu₂O₃"],
        "answer_en": "Cu₂O",
        "answer_hi": "Cu₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which moon has the most volcanic activity?",
        "question_hi": "किस चंद्रमा पर सबसे अधिक ज्वालामुखी गतिविधि है?",
        "options_en": ["Io", "Europa", "Ganymede", "Callisto"],
        "options_hi": ["आईओ", "यूरोपा", "गेनीमेड", "कैलिस्टो"],
        "answer_en": "Io",
        "answer_hi": "आईओ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the chemical symbol for ruthenium?",
        "question_hi": "रुथेनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ru", "Rt", "Rn", "Rh"],
        "options_hi": ["Ru", "Rt", "Rn", "Rh"],
        "answer_en": "Ru",
        "answer_hi": "Ru",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which vitamin is essential for red blood cell production?",
        "question_hi": "लाल रक्त कोशिका उत्पादन के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B12", "Vitamin B9", "Iron (not vitamin)", "All of these"],
        "options_hi": ["विटामिन बी12", "विटामिन बी9", "आयरन (विटामिन नहीं)", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the unit of Young's modulus?",
        "question_hi": "यंग मापांक की इकाई क्या है?",
        "options_en": ["Pascal", "N/m²", "Both", "kg/m·s²"],
        "options_hi": ["पास्कल", "N/मीटर²", "दोनों", "किलोग्राम/मीटर·सेकंड²"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which acid is used in the production of food additives?",
        "question_hi": "खाद्य योजक उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Citric acid", "Acetic acid", "Lactic acid", "All of these"],
        "options_hi": ["साइट्रिक अम्ल", "एसिटिक अम्ल", "लैक्टिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the chemical formula of lead(IV) oxide?",
        "question_hi": "लेड(IV) ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["PbO₂", "PbO", "Pb₂O₃", "Pb₃O₄"],
        "options_hi": ["PbO₂", "PbO", "Pb₂O₃", "Pb₃O₄"],
        "answer_en": "PbO₂",
        "answer_hi": "PbO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which planet has the most dense atmosphere?",
        "question_hi": "किस ग्रह का वातावरण सबसे सघन है?",
        "options_en": ["Venus", "Earth", "Mars", "Jupiter"],
        "options_hi": ["शुक्र", "पृथ्वी", "मंगल", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the chemical symbol for tellurium?",
        "question_hi": "टेल्यूरियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Te", "Tl", "Tr", "Tu"],
        "options_hi": ["Te", "Tl", "Tr", "Tu"],
        "answer_en": "Te",
        "answer_hi": "Te",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which vitamin deficiency causes bleeding disorders?",
        "question_hi": "किस विटामिन की कमी से रक्तस्राव विकार होते हैं?",
        "options_en": ["Vitamin K", "Vitamin C", "Both", "Vitamin A"],
        "options_hi": ["विटामिन K", "विटामिन सी", "दोनों", "विटामिन ए"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the unit of shear modulus?",
        "question_hi": "कर्तन मापांक की इकाई क्या है?",
        "options_en": ["Pascal", "N/m²", "Both", "kg/m·s²"],
        "options_hi": ["पास्कल", "N/मीटर²", "दोनों", "किलोग्राम/मीटर·सेकंड²"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which acid is used in the production of cleaning agents?",
        "question_hi": "सफाई एजेंटों के उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Hydrochloric acid", "Sulfuric acid", "Phosphoric acid", "All of these"],
        "options_hi": ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "फॉस्फोरिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the chemical formula of manganese(II) oxide?",
        "question_hi": "मैंगनीज(II) ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["MnO", "MnO₂", "Mn₂O₃", "Mn₃O₄"],
        "options_hi": ["MnO", "MnO₂", "Mn₂O₃", "Mn₃O₄"],
        "answer_en": "MnO",
        "answer_hi": "MnO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which planet has the most retrograde rotation?",
        "question_hi": "किस ग्रह का घूर्णन सबसे अधिक प्रतिगामी है?",
        "options_en": ["Venus", "Uranus", "Both", "Neptune"],
        "options_hi": ["शुक्र", "युरेनस", "दोनों", "नेपच्यून"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the chemical symbol for antimony?",
        "question_hi": "एंटीमनी का रासायनिक प्रतीक क्या है?",
        "options_en": ["Sb", "At", "An", "Am"],
        "options_hi": ["Sb", "At", "An", "Am"],
        "answer_en": "Sb",
        "answer_hi": "Sb",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which vitamin deficiency causes neurological problems?",
        "question_hi": "किस विटामिन की कमी से न्यूरोलॉजिकल समस्याएं होती हैं?",
        "options_en": ["Vitamin B12", "Vitamin B1", "Vitamin B6", "All of these"],
        "options_hi": ["विटामिन बी12", "विटामिन बी1", "विटामिन बी6", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the unit of Poisson's ratio?",
        "question_hi": "पॉइसन अनुपात की इकाई क्या है?",
        "options_en": ["Dimensionless", "meter", "N/m²", "Pascal"],
        "options_hi": ["आयामहीन", "मीटर", "N/मीटर²", "पास्कल"],
        "answer_en": "Dimensionless",
        "answer_hi": "आयामहीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which acid is used in the production of batteries?",
        "question_hi": "बैटरियों के उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Hydrochloric acid", "Both", "Nitric acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "दोनों", "नाइट्रिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the chemical formula of nickel(II) sulfate?",
        "question_hi": "निकल(II) सल्फेट का रासायनिक सूत्र क्या है?",
        "options_en": ["NiSO₄", "NiS", "NiSO₃", "Ni₂SO₄"],
        "options_hi": ["NiSO₄", "NiS", "NiSO₃", "Ni₂SO₄"],
        "answer_en": "NiSO₄",
        "answer_hi": "NiSO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which planet has the most elliptical orbit?",
        "question_hi": "किस ग्रह की कक्षा सबसे अधिक दीर्घवृत्ताकार है?",
        "options_en": ["Mercury", "Venus", "Earth", "Mars"],
        "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the chemical symbol for uranium?",
        "question_hi": "यूरेनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["U", "Ur", "Um", "Ua"],
        "options_hi": ["U", "Ur", "Um", "Ua"],
        "answer_en": "U",
        "answer_hi": "U",
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