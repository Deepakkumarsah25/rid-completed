const questions = [
    {
        "num": 1,
        "question_en": "Which instrument measures wind speed?",
        "question_hi": "हवा की गति मापने वाला उपकरण कौन सा है?",
        "options_en": ["Anemometer", "Barometer", "Hygrometer", "Thermometer"],
        "options_hi": ["पवनवेगमापी", "बैरोमीटर", "आर्द्रतामापी", "थर्मामीटर"],
        "answer_en": "Anemometer",
        "answer_hi": "पवनवेगमापी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the chemical formula of mustard gas?",
        "question_hi": "सरसों गैस का रासायनिक सूत्र क्या है?",
        "options_en": ["C₄H₈Cl₂S", "C₂H₄Cl₂", "C₃H₆Cl₂", "C₅H₁₀Cl₂S"],
        "options_hi": ["C₄H₈Cl₂S", "C₂H₄Cl₂", "C₃H₆Cl₂", "C₅H₁₀Cl₂S"],
        "answer_en": "C₄H₈Cl₂S",
        "answer_hi": "C₄H₈Cl₂S",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Who discovered X-rays?",
        "question_hi": "एक्स-रे की खोज किसने की?",
        "options_en": ["Wilhelm Röntgen", "Marie Curie", "J.J. Thomson", "Ernest Rutherford"],
        "options_hi": ["विल्हेम रॉन्टजन", "मैरी क्यूरी", "जे.जे. थॉमसन", "अर्नेस्ट रदरफोर्ड"],
        "answer_en": "Wilhelm Röntgen",
        "answer_hi": "विल्हेम रॉन्टजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the main component of LPG?",
        "question_hi": "एलपीजी का मुख्य घटक क्या है?",
        "options_en": ["Propane", "Butane", "Both", "Methane"],
        "options_hi": ["प्रोपेन", "ब्यूटेन", "दोनों", "मीथेन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which gland produces adrenaline?",
        "question_hi": "एड्रेनालाईन कौन सी ग्रंथि उत्पन्न करती है?",
        "options_en": ["Adrenal gland", "Pituitary gland", "Thyroid gland", "Pancreas"],
        "options_hi": ["अधिवृक्क ग्रंथि", "पिट्यूटरी ग्रंथि", "थायरॉयड ग्रंथि", "अग्न्याशय"],
        "answer_en": "Adrenal gland",
        "answer_hi": "अधिवृक्क ग्रंथि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the chemical name of laughing gas?",
        "question_hi": "हंसाने वाली गैस का रासायनिक नाम क्या है?",
        "options_en": ["Nitrous oxide", "Nitric oxide", "Nitrogen dioxide", "Dinitrogen trioxide"],
        "options_hi": ["नाइट्रस ऑक्साइड", "नाइट्रिक ऑक्साइड", "नाइट्रोजन डाइऑक्साइड", "डाइनाइट्रोजन ट्राइऑक्साइड"],
        "answer_en": "Nitrous oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which vitamin is also known as retinol?",
        "question_hi": "किस विटामिन को रेटिनॉल भी कहा जाता है?",
        "options_en": ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K"],
        "options_hi": ["विटामिन ए", "विटामिन डी", "विटामिन ई", "विटामिन K"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन ए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the SI unit of luminous flux?",
        "question_hi": "दीप्त फ्लक्स की SI इकाई क्या है?",
        "options_en": ["Lumen", "Lux", "Candela", "Watt"],
        "options_hi": ["ल्यूमेन", "लक्स", "कैंडेला", "वाट"],
        "answer_en": "Lumen",
        "answer_hi": "ल्यूमेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which metal is used in making electric wires?",
        "question_hi": "विद्युत तार बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Copper", "Aluminum", "Both", "Silver"],
        "options_hi": ["तांबा", "एल्युमिनियम", "दोनों", "चांदी"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the chemical formula of rust?",
        "question_hi": "जंग का रासायनिक सूत्र क्या है?",
        "options_en": ["Fe₂O₃·xH₂O", "FeO", "Fe₃O₄", "Fe(OH)₃"],
        "options_hi": ["Fe₂O₃·xH₂O", "FeO", "Fe₃O₄", "Fe(OH)₃"],
        "answer_en": "Fe₂O₃·xH₂O",
        "answer_hi": "Fe₂O₃·xH₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which part of the plant is modified into ginger?",
        "question_hi": "पौधे का कौन सा भाग अदरक में परिवर्तित होता है?",
        "options_en": ["Stem", "Root", "Leaf", "Flower"],
        "options_hi": ["तना", "जड़", "पत्ती", "फूल"],
        "answer_en": "Stem",
        "answer_hi": "तना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the most abundant mineral in human body?",
        "question_hi": "मानव शरीर में सबसे प्रचुर खनिज कौन सा है?",
        "options_en": ["Calcium", "Phosphorus", "Potassium", "Sodium"],
        "options_hi": ["कैल्शियम", "फॉस्फोरस", "पोटेशियम", "सोडियम"],
        "answer_en": "Calcium",
        "answer_hi": "कैल्शियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which gas is used in fluorescent lamps?",
        "question_hi": "फ्लोरोसेंट लैंप में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Mercury vapor", "Argon", "Both", "Neon"],
        "options_hi": ["पारा वाष्प", "आर्गन", "दोनों", "नियॉन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the freezing point of mercury?",
        "question_hi": "पारे का हिमांक क्या है?",
        "options_en": ["-38.83°C", "-39.87°C", "-40.12°C", "-37.56°C"],
        "options_hi": ["-38.83°C", "-39.87°C", "-40.12°C", "-37.56°C"],
        "answer_en": "-38.83°C",
        "answer_hi": "-38.83°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which planet is known as the Giant Planet?",
        "question_hi": "किस ग्रह को विशाल ग्रह कहा जाता है?",
        "options_en": ["Jupiter", "Saturn", "Neptune", "Uranus"],
        "options_hi": ["बृहस्पति", "शनि", "नेपच्यून", "युरेनस"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the chemical symbol for bismuth?",
        "question_hi": "बिस्मथ का रासायनिक प्रतीक क्या है?",
        "options_en": ["Bi", "Bs", "Bm", "Bt"],
        "options_hi": ["Bi", "Bs", "Bm", "Bt"],
        "answer_en": "Bi",
        "answer_hi": "Bi",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which vitamin deficiency causes hemophilia?",
        "question_hi": "किस विटामिन की कमी से हीमोफिलिया होता है?",
        "options_en": ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin B12"],
        "options_hi": ["विटामिन K", "विटामिन सी", "विटामिन डी", "विटामिन बी12"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the unit of magnetic susceptibility?",
        "question_hi": "चुंबकीय संवेदनशीलता की इकाई क्या है?",
        "options_en": ["Dimensionless", "m³/kg", "Both", "Henry/m"],
        "options_hi": ["आयामहीन", "मीटर³/किग्रा", "दोनों", "हेनरी/मीटर"],
        "answer_en": "Dimensionless",
        "answer_hi": "आयामहीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which acid is present in bee stings?",
        "question_hi": "मधुमक्खी के डंक में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Formic acid", "Acetic acid", "Citric acid", "Lactic acid"],
        "options_hi": ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल"],
        "answer_en": "Formic acid",
        "answer_hi": "फॉर्मिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the chemical formula of caustic potash?",
        "question_hi": "कास्टिक पोटाश का रासायनिक सूत्र क्या है?",
        "options_en": ["KOH", "NaOH", "K₂CO₃", "KCl"],
        "options_hi": ["KOH", "NaOH", "K₂CO₃", "KCl"],
        "answer_en": "KOH",
        "answer_hi": "KOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which moon has the highest cliffs?",
        "question_hi": "किस चंद्रमा पर सबसे ऊंची चट्टानें हैं?",
        "options_en": ["Miranda", "Io", "Europa", "Titan"],
        "options_hi": ["मिरांडा", "आईओ", "यूरोपा", "टाइटन"],
        "answer_en": "Miranda",
        "answer_hi": "मिरांडा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the chemical symbol for molybdenum?",
        "question_hi": "मॉलिब्डेनम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Mo", "Mb", "Ml", "Mn"],
        "options_hi": ["Mo", "Mb", "Ml", "Mn"],
        "answer_en": "Mo",
        "answer_hi": "Mo",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which vitamin is essential for iron absorption?",
        "question_hi": "आयरन अवशोषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin C", "Vitamin D", "Vitamin K", "Vitamin B12"],
        "options_hi": ["विटामिन सी", "विटामिन डी", "विटामिन K", "विटामिन बी12"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन सी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the unit of radioactivity?",
        "question_hi": "रेडियोधर्मिता की इकाई क्या है?",
        "options_en": ["Becquerel", "Curie", "Both", "Roentgen"],
        "options_hi": ["बेकरेल", "क्यूरी", "दोनों", "रोएंटजन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which acid is used in making dyes?",
        "question_hi": "रंग बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Nitric acid", "Both", "Hydrochloric acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "दोनों", "हाइड्रोक्लोरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the chemical formula of galena?",
        "question_hi": "गैलेना का रासायनिक सूत्र क्या है?",
        "options_en": ["PbS", "PbO", "PbCO₃", "PbSO₄"],
        "options_hi": ["PbS", "PbO", "PbCO₃", "PbSO₄"],
        "answer_en": "PbS",
        "answer_hi": "PbS",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which planet has the most intense magnetic field?",
        "question_hi": "किस ग्रह का चुंबकीय क्षेत्र सबसे तीव्र है?",
        "options_en": ["Jupiter", "Saturn", "Earth", "Mercury"],
        "options_hi": ["बृहस्पति", "शनि", "पृथ्वी", "बुध"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the chemical symbol for technetium?",
        "question_hi": "टेक्नेटियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Tc", "Tn", "Tm", "Te"],
        "options_hi": ["Tc", "Tn", "Tm", "Te"],
        "answer_en": "Tc",
        "answer_hi": "Tc",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which vitamin deficiency causes glossitis?",
        "question_hi": "किस विटामिन की कमी से ग्लोसाइटिस होता है?",
        "options_en": ["Vitamin B2", "Vitamin B6", "Vitamin B12", "All of these"],
        "options_hi": ["विटामिन बी2", "विटामिन बी6", "विटामिन बी12", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the unit of Planck's constant?",
        "question_hi": "प्लैंक नियतांक की इकाई क्या है?",
        "options_en": ["Joule-second", "Electron-volt second", "Both", "Watt-second"],
        "options_hi": ["जूल-सेकंड", "इलेक्ट्रॉन-वोल्ट सेकंड", "दोनों", "वाट-सेकंड"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which acid is used in making plastics?",
        "question_hi": "प्लास्टिक बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acrylic acid", "Terephthalic acid", "Both", "Formic acid"],
        "options_hi": ["एक्रिलिक अम्ल", "टेरेफ्थैलिक अम्ल", "दोनों", "फॉर्मिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the chemical formula of calamine?",
        "question_hi": "केलामाइन का रासायनिक सूत्र क्या है?",
        "options_en": ["ZnCO₃", "ZnO", "ZnSiO₃", "ZnSO₄"],
        "options_hi": ["ZnCO₃", "ZnO", "ZnSiO₃", "ZnSO₄"],
        "answer_en": "ZnCO₃",
        "answer_hi": "ZnCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which moon has the most circular orbit?",
        "question_hi": "किस चंद्रमा की कक्षा सबसे वृत्ताकार है?",
        "options_en": ["Moon (Earth's)", "Titan", "Ganymede", "Callisto"],
        "options_hi": ["चंद्रमा (पृथ्वी का)", "टाइटन", "गेनीमेड", "कैलिस्टो"],
        "answer_en": "Moon (Earth's)",
        "answer_hi": "चंद्रमा (पृथ्वी का)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
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
        "num": 35,
        "question_en": "Which vitamin is essential for nerve function?",
        "question_hi": "तंत्रिका कार्य के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B12", "Vitamin B6", "Both", "Vitamin B1"],
        "options_hi": ["विटामिन बी12", "विटामिन बी6", "दोनों", "विटामिन बी1"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the unit of entropy?",
        "question_hi": "एन्ट्रॉपी की इकाई क्या है?",
        "options_en": ["Joule/Kelvin", "Calorie/Kelvin", "Both", "Watt/Kelvin"],
        "options_hi": ["जूल/केल्विन", "कैलोरी/केल्विन", "दोनों", "वाट/केल्विन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which acid is used in making pharmaceuticals?",
        "question_hi": "फार्मास्यूटिकल बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetylsalicylic acid", "Ascorbic acid", "Both", "Citric acid"],
        "options_hi": ["एसिटाइलसैलिसिलिक अम्ल", "एस्कॉर्बिक अम्ल", "दोनों", "साइट्रिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the chemical formula of bauxite?",
        "question_hi": "बॉक्साइट का रासायनिक सूत्र क्या है?",
        "options_en": ["Al₂O₃·2H₂O", "Al₂O₃", "Al(OH)₃", "AlO(OH)"],
        "options_hi": ["Al₂O₃·2H₂O", "Al₂O₃", "Al(OH)₃", "AlO(OH)"],
        "answer_en": "Al₂O₃·2H₂O",
        "answer_hi": "Al₂O₃·2H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which planet has the most violent storms?",
        "question_hi": "किस ग्रह पर सबसे हिंसक तूफान हैं?",
        "options_en": ["Jupiter", "Neptune", "Saturn", "Uranus"],
        "options_hi": ["बृहस्पति", "नेपच्यून", "शनि", "युरेनस"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the chemical symbol for rhodium?",
        "question_hi": "रोडियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Rh", "Rd", "Rm", "Rn"],
        "options_hi": ["Rh", "Rd", "Rm", "Rn"],
        "answer_en": "Rh",
        "answer_hi": "Rh",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which vitamin deficiency causes photophobia?",
        "question_hi": "किस विटामिन की कमी से फोटोफोबिया होता है?",
        "options_en": ["Vitamin B2", "Vitamin A", "Both", "Vitamin C"],
        "options_hi": ["विटामिन बी2", "विटामिन ए", "दोनों", "विटामिन सी"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the unit of Boltzmann constant?",
        "question_hi": "बोल्ट्जमैन नियतांक की इकाई क्या है?",
        "options_en": ["Joule/Kelvin", "Calorie/Kelvin", "Both", "Watt/Kelvin"],
        "options_hi": ["जूल/केल्विन", "कैलोरी/केल्विन", "दोनों", "वाट/केल्विन"],
        "answer_en": "Joule/Kelvin",
        "answer_hi": "जूल/केल्विन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which acid is used in making synthetic fibers?",
        "question_hi": "सिंथेटिक फाइबर बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Adipic acid", "Terephthalic acid", "Both", "Acrylic acid"],
        "options_hi": ["एडिपिक अम्ल", "टेरेफ्थैलिक अम्ल", "दोनों", "एक्रिलिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the chemical formula of hematite?",
        "question_hi": "हेमटाइट का रासायनिक सूत्र क्या है?",
        "options_en": ["Fe₂O₃", "Fe₃O₄", "FeO", "FeCO₃"],
        "options_hi": ["Fe₂O₃", "Fe₃O₄", "FeO", "FeCO₃"],
        "answer_en": "Fe₂O₃",
        "answer_hi": "Fe₂O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which planet has the most extreme temperature variations?",
        "question_hi": "किस ग्रह पर सबसे अधिक चरम तापमान परिवर्तन होते हैं?",
        "options_en": ["Mercury", "Venus", "Mars", "Earth"],
        "options_hi": ["बुध", "शुक्र", "मंगल", "पृथ्वी"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
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
        "num": 47,
        "question_en": "Which vitamin deficiency causes stomatitis?",
        "question_hi": "किस विटामिन की कमी से स्टोमाटाइटिस होता है?",
        "options_en": ["Vitamin B2", "Vitamin B3", "Vitamin B6", "All of these"],
        "options_hi": ["विटामिन बी2", "विटामिन बी3", "विटामिन बी6", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the unit of gravitational constant?",
        "question_hi": "गुरुत्वाकर्षण नियतांक की इकाई क्या है?",
        "options_en": ["N·m²/kg²", "m³/kg·s²", "Both", "kg·m/s²"],
        "options_hi": ["N·m²/kg²", "m³/kg·s²", "दोनों", "kg·m/s²"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which acid is used in making cosmetics?",
        "question_hi": "कॉस्मेटिक्स बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Salicylic acid", "Hyaluronic acid", "Both", "Citric acid"],
        "options_hi": ["सैलिसिलिक अम्ल", "हयालूरोनिक अम्ल", "दोनों", "साइट्रिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the chemical formula of pyrite?",
        "question_hi": "पाइराइट का रासायनिक सूत्र क्या है?",
        "options_en": ["FeS₂", "Fe₂O₃", "Fe₃O₄", "FeCO₃"],
        "options_hi": ["FeS₂", "Fe₂O₃", "Fe₃O₄", "FeCO₃"],
        "answer_en": "FeS₂",
        "answer_hi": "FeS₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which planet has the most circular orbit?",
        "question_hi": "किस ग्रह की कक्षा सबसे वृत्ताकार है?",
        "options_en": ["Venus", "Neptune", "Earth", "Mars"],
        "options_hi": ["शुक्र", "नेपच्यून", "पृथ्वी", "मंगल"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the chemical symbol for osmium?",
        "question_hi": "ऑस्मियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Os", "Om", "Oi", "Oe"],
        "options_hi": ["Os", "Om", "Oi", "Oe"],
        "answer_en": "Os",
        "answer_hi": "Os",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which vitamin is essential for DNA synthesis?",
        "question_hi": "डीएनए संश्लेषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Folic acid", "Vitamin B12", "Both", "Vitamin C"],
        "options_hi": ["फोलिक अम्ल", "विटामिन बी12", "दोनों", "विटामिन सी"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the unit of Stefan-Boltzmann constant?",
        "question_hi": "स्टीफन-बोल्ट्जमैन नियतांक की इकाई क्या है?",
        "options_en": ["W/m²·K⁴", "Cal/cm²·s·K⁴", "Both", "J/m²·s·K⁴"],
        "options_hi": ["वाट/मीटर²·केल्विन⁴", "कैलोरी/सेमी²·सेकंड·केल्विन⁴", "दोनों", "जूल/मीटर²·सेकंड·केल्विन⁴"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which acid is used in making perfumes?",
        "question_hi": "परफ्यूम बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Benzoic acid", "Cinnamic acid", "Both", "Acetic acid"],
        "options_hi": ["बेंज़ोइक अम्ल", "सिनेमिक अम्ल", "दोनों", "एसिटिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the chemical formula of magnetite?",
        "question_hi": "मैग्नेटाइट का रासायनिक सूत्र क्या है?",
        "options_en": ["Fe₃O₄", "Fe₂O₃", "FeO", "FeS₂"],
        "options_hi": ["Fe₃O₄", "Fe₂O₃", "FeO", "FeS₂"],
        "answer_en": "Fe₃O₄",
        "answer_hi": "Fe₃O₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which planet has the most geologically active surface?",
        "question_hi": "किस ग्रह की सतह सबसे अधिक भूवैज्ञानिक रूप से सक्रिय है?",
        "options_en": ["Earth", "Venus", "Mars", "Io"],
        "options_hi": ["पृथ्वी", "शुक्र", "मंगल", "आईओ"],
        "answer_en": "Earth",
        "answer_hi": "पृथ्वी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
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
        "num": 59,
        "question_en": "Which vitamin deficiency causes hyperkeratosis?",
        "question_hi": "किस विटामिन की कमी से हाइपरकेराटोसिस होता है?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin E", "Vitamin K"],
        "options_hi": ["विटामिन ए", "विटामिन सी", "विटामिन ई", "विटामिन K"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन ए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the unit of universal gas constant?",
        "question_hi": "सार्वत्रिक गैस नियतांक की इकाई क्या है?",
        "options_en": ["J/mol·K", "Cal/mol·K", "Both", "L·atm/mol·K"],
        "options_hi": ["जूल/मोल·केल्विन", "कैलोरी/मोल·केल्विन", "दोनों", "लीटर·वायुमंडल/मोल·केल्विन"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which acid is used in making insecticides?",
        "question_hi": "कीटनाशक बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Boric acid", "Phosphoric acid", "Both", "Citric acid"],
        "options_hi": ["बोरिक अम्ल", "फॉस्फोरिक अम्ल", "दोनों", "साइट्रिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the chemical formula of siderite?",
        "question_hi": "साइडराइट का रासायनिक सूत्र क्या है?",
        "options_en": ["FeCO₃", "Fe₂O₃", "Fe₃O₄", "FeS₂"],
        "options_hi": ["FeCO₃", "Fe₂O₃", "Fe₃O₄", "FeS₂"],
        "answer_en": "FeCO₃",
        "answer_hi": "FeCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which moon has the most elliptical orbit?",
        "question_hi": "किस चंद्रमा की कक्षा सबसे अधिक दीर्घवृत्ताकार है?",
        "options_en": ["Nereid", "Triton", "Titan", "Ganymede"],
        "options_hi": ["नेरीड", "ट्राइटन", "टाइटन", "गेनीमेड"],
        "answer_en": "Nereid",
        "answer_hi": "नेरीड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the chemical symbol for platinum group metals?",
        "question_hi": "प्लैटिनम समूह की धातुओं का रासायनिक प्रतीक क्या है?",
        "options_en": ["Pt, Pd, Rh, Ru, Ir, Os", "Au, Ag, Pt", "All noble metals", "Fe, Ni, Co"],
        "options_hi": ["Pt, Pd, Rh, Ru, Ir, Os", "Au, Ag, Pt", "सभी उत्कृष्ट धातुएं", "Fe, Ni, Co"],
        "answer_en": "Pt, Pd, Rh, Ru, Ir, Os",
        "answer_hi": "Pt, Pd, Rh, Ru, Ir, Os",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which vitamin is essential for energy metabolism?",
        "question_hi": "ऊर्जा चयापचय के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B complex", "Vitamin C", "Vitamin D", "Vitamin E"],
        "options_hi": ["विटामिन बी कॉम्प्लेक्स", "विटामिन सी", "विटामिन डी", "विटामिन ई"],
        "answer_en": "Vitamin B complex",
        "answer_hi": "विटामिन बी कॉम्प्लेक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the unit of molar gas constant?",
        "question_hi": "मोलर गैस नियतांक की इकाई क्या है?",
        "options_en": ["J/mol·K", "L·atm/mol·K", "Both", "Cal/mol·K"],
        "options_hi": ["जूल/मोल·केल्विन", "लीटर·वायुमंडल/मोल·केल्विन", "दोनों", "कैलोरी/मोल·केल्विन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which acid is used in making food additives?",
        "question_hi": "खाद्य योजक बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Citric acid", "Malic acid", "Tartaric acid", "All of these"],
        "options_hi": ["साइट्रिक अम्ल", "मैलिक अम्ल", "टार्टरिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the chemical formula of chalcopyrite?",
        "question_hi": "चाल्कोपाइराइट का रासायनिक सूत्र क्या है?",
        "options_en": ["CuFeS₂", "Cu₂S", "CuS", "CuCO₃"],
        "options_hi": ["CuFeS₂", "Cu₂S", "CuS", "CuCO₃"],
        "answer_en": "CuFeS₂",
        "answer_hi": "CuFeS₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which planet has the fastest orbital speed?",
        "question_hi": "किस ग्रह की कक्षीय गति सबसे तेज है?",
        "options_en": ["Mercury", "Venus", "Earth", "Mars"],
        "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the chemical symbol for actinium?",
        "question_hi": "एक्टिनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ac", "At", "Am", "An"],
        "options_hi": ["Ac", "At", "Am", "An"],
        "answer_en": "Ac",
        "answer_hi": "Ac",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which vitamin deficiency causes peripheral neuropathy?",
        "question_hi": "किस विटामिन की कमी से परिधीय न्यूरोपैथी होती है?",
        "options_en": ["Vitamin B1", "Vitamin B6", "Vitamin B12", "All of these"],
        "options_hi": ["विटामिन बी1", "विटामिन बी6", "विटामिन बी12", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the unit of Faraday constant?",
        "question_hi": "फैराडे नियतांक की इकाई क्या है?",
        "options_en": ["Coulomb/mol", "Ampere·second/mol", "Both", "Joule/volt·mol"],
        "options_hi": ["कूलॉम/मोल", "एम्पीयर·सेकंड/मोल", "दोनों", "जूल/वोल्ट·मोल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which acid is used in making paint removers?",
        "question_hi": "पेंट रिमूवर बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Methylene chloride", "Acetone", "Both", "Formic acid"],
        "options_hi": ["मेथिलीन क्लोराइड", "एसीटोन", "दोनों", "फॉर्मिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the chemical formula of malachite?",
        "question_hi": "मैलाकाइट का रासायनिक सूत्र क्या है?",
        "options_en": ["Cu₂CO₃(OH)₂", "CuCO₃", "CuO", "CuS"],
        "options_hi": ["Cu₂CO₃(OH)₂", "CuCO₃", "CuO", "CuS"],
        "answer_en": "Cu₂CO₃(OH)₂",
        "answer_hi": "Cu₂CO₃(OH)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which moon has the highest albedo?",
        "question_hi": "किस चंद्रमा का अल्बेडो सबसे अधिक है?",
        "options_en": ["Enceladus", "Europa", "Titan", "Ganymede"],
        "options_hi": ["एन्सेलेडस", "यूरोपा", "टाइटन", "गेनीमेड"],
        "answer_en": "Enceladus",
        "answer_hi": "एन्सेलेडस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the chemical symbol for thorium?",
        "question_hi": "थोरियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Th", "To", "Tr", "Tm"],
        "options_hi": ["Th", "To", "Tr", "Tm"],
        "answer_en": "Th",
        "answer_hi": "Th",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which vitamin deficiency causes ataxia?",
        "question_hi": "किस विटामिन की कमी से अटैक्सिया होता है?",
        "options_en": ["Vitamin E", "Vitamin B12", "Both", "Vitamin C"],
        "options_hi": ["विटामिन ई", "विटामिन बी12", "दोनों", "विटामिन सी"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the unit of Avogadro's number?",
        "question_hi": "अवोगाद्रो संख्या की इकाई क्या है?",
        "options_en": ["mol⁻¹", "Dimensionless", "Both", "Number of particles"],
        "options_hi": ["मोल⁻¹", "आयामहीन", "दोनों", "कणों की संख्या"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which acid is used in making adhesives?",
        "question_hi": "चिपकाने वाले पदार्थ बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acrylic acid", "Cyanoacrylate", "Both", "Formaldehyde"],
        "options_hi": ["एक्रिलिक अम्ल", "सायनोएक्रिलेट", "दोनों", "फॉर्मल्डिहाइड"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the chemical formula of azurite?",
        "question_hi": "अज़ूराइट का रासायनिक सूत्र क्या है?",
        "options_en": ["Cu₃(CO₃)₂(OH)₂", "CuCO₃", "Cu₂CO₃(OH)₂", "CuSO₄"],
        "options_hi": ["Cu₃(CO₃)₂(OH)₂", "CuCO₃", "Cu₂CO₃(OH)₂", "CuSO₄"],
        "answer_en": "Cu₃(CO₃)₂(OH)₂",
        "answer_hi": "Cu₃(CO₃)₂(OH)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which planet has the longest-lasting storms?",
        "question_hi": "किस ग्रह पर सबसे लंबे समय तक चलने वाले तूफान हैं?",
        "options_en": ["Jupiter", "Saturn", "Neptune", "Venus"],
        "options_hi": ["बृहस्पति", "शनि", "नेपच्यून", "शुक्र"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the chemical symbol for protactinium?",
        "question_hi": "प्रोटैक्टिनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Pa", "Pt", "Pm", "Po"],
        "options_hi": ["Pa", "Pt", "Pm", "Po"],
        "answer_en": "Pa",
        "answer_hi": "Pa",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which vitamin deficiency causes dementia?",
        "question_hi": "किस विटामिन की कमी से डिमेंशिया होता है?",
        "options_en": ["Vitamin B12", "Vitamin B1", "Both", "Vitamin C"],
        "options_hi": ["विटामिन बी12", "विटामिन बी1", "दोनों", "विटामिन सी"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the unit of Rydberg constant?",
        "question_hi": "रिडबर्ग नियतांक की इकाई क्या है?",
        "options_en": ["m⁻¹", "cm⁻¹", "Both", "Hz"],
        "options_hi": ["मीटर⁻¹", "सेमी⁻¹", "दोनों", "हर्ट्ज"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which acid is used in making refrigerants?",
        "question_hi": "प्रशीतक बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Hydrochlorofluorocarbons", "Hydrofluorocarbons", "Both", "Ammonia"],
        "options_hi": ["हाइड्रोक्लोरोफ्लोरोकार्बन", "हाइड्रोफ्लोरोकार्बन", "दोनों", "अमोनिया"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the chemical formula of cassiterite?",
        "question_hi": "कैसिटराइट का रासायनिक सूत्र क्या है?",
        "options_en": ["SnO₂", "SnS", "SnCO₃", "Sn"],
        "options_hi": ["SnO₂", "SnS", "SnCO₃", "Sn"],
        "answer_en": "SnO₂",
        "answer_hi": "SnO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which moon has the most tilted orbit?",
        "question_hi": "किस चंद्रमा की कक्षा सबसे अधिक झुकी हुई है?",
        "options_en": ["Triton", "Nereid", "Phoebe", "Iapetus"],
        "options_hi": ["ट्राइटन", "नेरीड", "फोएबे", "इयापेटस"],
        "answer_en": "Phoebe",
        "answer_hi": "फोएबे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the chemical symbol for radon?",
        "question_hi": "रेडॉन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Rn", "Rd", "Ro", "Ra"],
        "options_hi": ["Rn", "Rd", "Ro", "Ra"],
        "answer_en": "Rn",
        "answer_hi": "Rn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which vitamin deficiency causes bleeding disorders?",
        "question_hi": "किस विटामिन की कमी से रक्तस्राव विकार होते हैं?",
        "options_en": ["Vitamin K", "Vitamin C", "Both", "Vitamin E"],
        "options_hi": ["विटामिन K", "विटामिन सी", "दोनों", "विटामिन ई"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the unit of Wien's displacement constant?",
        "question_hi": "वीन विस्थापन नियतांक की इकाई क्या है?",
        "options_en": ["m·K", "cm·K", "Both", "Hz/K"],
        "options_hi": ["मीटर·केल्विन", "सेमी·केल्विन", "दोनों", "हर्ट्ज/केल्विन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which acid is used in making solvents?",
        "question_hi": "विलायक बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetic acid", "Formic acid", "Both", "Hydrochloric acid"],
        "options_hi": ["एसिटिक अम्ल", "फॉर्मिक अम्ल", "दोनों", "हाइड्रोक्लोरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the chemical formula of wolframite?",
        "question_hi": "वोल्फ्रामाइट का रासायनिक सूत्र क्या है?",
        "options_en": ["(Fe,Mn)WO₄", "WO₃", "W", "WS₂"],
        "options_hi": ["(Fe,Mn)WO₄", "WO₃", "W", "WS₂"],
        "answer_en": "(Fe,Mn)WO₄",
        "answer_hi": "(Fe,Mn)WO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which planet has the most auroras?",
        "question_hi": "किस ग्रह पर सबसे अधिक ऑरोरा हैं?",
        "options_en": ["Jupiter", "Saturn", "Both", "Earth"],
        "options_hi": ["बृहस्पति", "शनि", "दोनों", "पृथ्वी"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the chemical symbol for francium?",
        "question_hi": "फ्रैंशियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Fr", "Fa", "Fm", "Fc"],
        "options_hi": ["Fr", "Fa", "Fm", "Fc"],
        "answer_en": "Fr",
        "answer_hi": "Fr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which vitamin deficiency causes growth retardation?",
        "question_hi": "किस विटामिन की कमी से विकास मंदता होती है?",
        "options_en": ["Vitamin A", "Vitamin D", "Zinc", "All of these"],
        "options_hi": ["विटामिन ए", "विटामिन डी", "जिंक", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the unit of fine-structure constant?",
        "question_hi": "सूक्ष्म संरचना नियतांक की इकाई क्या है?",
        "options_en": ["Dimensionless", "m²/s", "Coulomb²/J·m", "No unit"],
        "options_hi": ["आयामहीन", "मीटर²/सेकंड", "कूलॉम²/जूल·मीटर", "कोई इकाई नहीं"],
        "answer_en": "Dimensionless",
        "answer_hi": "आयामहीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which acid is used in making fireworks?",
        "question_hi": "आतिशबाजी बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Nitric acid", "Sulfuric acid", "Both", "Hydrochloric acid"],
        "options_hi": ["नाइट्रिक अम्ल", "सल्फ्यूरिक अम्ल", "दोनों", "हाइड्रोक्लोरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the chemical formula of cinnabar?",
        "question_hi": "सिनाबार का रासायनिक सूत्र क्या है?",
        "options_en": ["HgS", "HgO", "HgCl₂", "Hg₂Cl₂"],
        "options_hi": ["HgS", "HgO", "HgCl₂", "Hg₂Cl₂"],
        "answer_en": "HgS",
        "answer_hi": "HgS",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which moon has the most irregular shape?",
        "question_hi": "किस चंद्रमा का आकार सबसे अनियमित है?",
        "options_en": ["Phobos", "Deimos", "Both", "Hyperion"],
        "options_hi": ["फोबोस", "डीमोस", "दोनों", "हाइपेरियन"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the chemical symbol for lawrencium?",
        "question_hi": "लॉरेंसियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Lr", "Lw", "Lm", "Ln"],
        "options_hi": ["Lr", "Lw", "Lm", "Ln"],
        "answer_en": "Lr",
        "answer_hi": "Lr",
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