const questions = [
    {
        "num": 1,
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
        "num": 2,
        "question_en": "What is the chemical formula of limestone?",
        "question_hi": "चूना पत्थर का रासायनिक सूत्र क्या है?",
        "options_en": ["CaCO₃", "CaO", "Ca(OH)₂", "CaSO₄"],
        "options_hi": ["CaCO₃", "CaO", "Ca(OH)₂", "CaSO₄"],
        "answer_en": "CaCO₃",
        "answer_hi": "CaCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which scientist discovered the law of gravity?",
        "question_hi": "किस वैज्ञानिक ने गुरुत्वाकर्षण के नियम की खोज की?",
        "options_en": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"],
        "options_hi": ["अल्बर्ट आइंस्टीन", "आइजैक न्यूटन", "गैलीलियो गैलीली", "स्टीफन हॉकिंग"],
        "answer_en": "Isaac Newton",
        "answer_hi": "आइजैक न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the main component of biogas?",
        "question_hi": "बायोगैस का मुख्य घटक क्या है?",
        "options_en": ["Methane", "Ethane", "Propane", "Butane"],
        "options_hi": ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which organ produces insulin in the human body?",
        "question_hi": "मानव शरीर में इंसुलिन कौन सा अंग उत्पन्न करता है?",
        "options_en": ["Liver", "Pancreas", "Kidney", "Stomach"],
        "options_hi": ["यकृत", "अग्न्याशय", "गुर्दा", "पेट"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the chemical name of laughing gas?",
        "question_hi": "हंसाने वाली गैस का रासायनिक नाम क्या है?",
        "options_en": ["Nitrous oxide", "Nitric oxide", "Nitrogen dioxide", "Ammonia"],
        "options_hi": ["नाइट्रस ऑक्साइड", "नाइट्रिक ऑक्साइड", "नाइट्रोजन डाइऑक्साइड", "अमोनिया"],
        "answer_en": "Nitrous oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which vitamin is also known as pyridoxine?",
        "question_hi": "किस विटामिन को पाइरिडॉक्सिन भी कहा जाता है?",
        "options_en": ["Vitamin B6", "Vitamin B12", "Vitamin B1", "Vitamin B2"],
        "options_hi": ["विटामिन बी6", "विटामिन बी12", "विटामिन बी1", "विटामिन बी2"],
        "answer_en": "Vitamin B6",
        "answer_hi": "विटामिन बी6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the SI unit of luminous intensity?",
        "question_hi": "ज्योति तीव्रता की SI इकाई क्या है?",
        "options_en": ["Lumen", "Candela", "Lux", "Watt"],
        "options_hi": ["ल्यूमेन", "कैंडेला", "लक्स", "वाट"],
        "answer_en": "Candela",
        "answer_hi": "कैंडेला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which metal is used in making aircraft bodies?",
        "question_hi": "विमान निर्माण में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Steel", "Aluminum", "Copper", "Titanium"],
        "options_hi": ["स्टील", "एल्युमीनियम", "तांबा", "टाइटेनियम"],
        "answer_en": "Aluminum",
        "answer_hi": "एल्युमीनियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the chemical formula of quicklime?",
        "question_hi": "बिना बुझा चूना का रासायनिक सूत्र क्या है?",
        "options_en": ["CaO", "CaCO₃", "Ca(OH)₂", "CaSO₄"],
        "options_hi": ["CaO", "CaCO₃", "Ca(OH)₂", "CaSO₄"],
        "answer_en": "CaO",
        "answer_hi": "CaO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which part of the plant is modified into a potato?",
        "question_hi": "पौधे का कौन सा भाग आलू में परिवर्तित होता है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
        "answer_en": "Stem",
        "answer_hi": "तना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the hardest metal?",
        "question_hi": "सबसे कठोर धातु कौन सी है?",
        "options_en": ["Iron", "Steel", "Tungsten", "Chromium"],
        "options_hi": ["लोहा", "स्टील", "टंगस्टन", "क्रोमियम"],
        "answer_en": "Tungsten",
        "answer_hi": "टंगस्टन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which gas is filled in electric bulbs?",
        "question_hi": "बिजली के बल्बों में कौन सी गैस भरी जाती है?",
        "options_en": ["Oxygen", "Nitrogen", "Argon", "Helium"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "हीलियम"],
        "answer_en": "Argon",
        "answer_hi": "आर्गन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the normal human body temperature in Celsius?",
        "question_hi": "सामान्य मानव शरीर का तापमान सेल्सियस में क्या है?",
        "options_en": ["36°C", "37°C", "38°C", "35°C"],
        "options_hi": ["36°C", "37°C", "38°C", "35°C"],
        "answer_en": "37°C",
        "answer_hi": "37°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which planet has the most extensive ring system?",
        "question_hi": "किस ग्रह का छल्ला प्रणाली सबसे व्यापक है?",
        "options_en": ["Jupiter", "Saturn", "Uranus", "Neptune"],
        "options_hi": ["बृहस्पति", "शनि", "युरेनस", "नेपच्यून"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the chemical symbol for helium?",
        "question_hi": "हीलियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["He", "H", "Hl", "Ho"],
        "options_hi": ["He", "H", "Hl", "Ho"],
        "answer_en": "He",
        "answer_hi": "He",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which vitamin deficiency causes pellagra?",
        "question_hi": "किस विटामिन की कमी से पेलाग्रा होता है?",
        "options_en": ["Vitamin B3", "Vitamin B12", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन बी3", "विटामिन बी12", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin B3",
        "answer_hi": "विटामिन बी3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the unit of heat?",
        "question_hi": "ऊष्मा की इकाई क्या है?",
        "options_en": ["Joule", "Calorie", "Both", "Watt"],
        "options_hi": ["जूल", "कैलोरी", "दोनों", "वाट"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which acid is present in spinach?",
        "question_hi": "पालक में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Oxalic acid", "Citric acid", "Malic acid", "Tartaric acid"],
        "options_hi": ["ऑक्सालिक अम्ल", "साइट्रिक अम्ल", "मैलिक अम्ल", "टार्टरिक अम्ल"],
        "answer_en": "Oxalic acid",
        "answer_hi": "ऑक्सालिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the chemical formula of slaked lime?",
        "question_hi": "बुझा चूना का रासायनिक सूत्र क्या है?",
        "options_en": ["Ca(OH)₂", "CaO", "CaCO₃", "CaSO₄"],
        "options_hi": ["Ca(OH)₂", "CaO", "CaCO₃", "CaSO₄"],
        "answer_en": "Ca(OH)₂",
        "answer_hi": "Ca(OH)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which is the brightest planet in the night sky?",
        "question_hi": "रात के आकाश में सबसे चमकीला ग्रह कौन सा है?",
        "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
        "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
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
        "num": 23,
        "question_en": "Which vitamin is also known as folic acid?",
        "question_hi": "किस विटामिन को फॉलिक अम्ल भी कहा जाता है?",
        "options_en": ["Vitamin B9", "Vitamin B12", "Vitamin B6", "Vitamin B1"],
        "options_hi": ["विटामिन बी9", "विटामिन बी12", "विटामिन बी6", "विटामिन बी1"],
        "answer_en": "Vitamin B9",
        "answer_hi": "विटामिन बी9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the unit of electric conductivity?",
        "question_hi": "विद्युत चालकता की इकाई क्या है?",
        "options_en": ["Siemens", "Mho", "Both", "Ohm"],
        "options_hi": ["सीमेंस", "म्हो", "दोनों", "ओम"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
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
        "num": 26,
        "question_en": "What is the chemical formula of rust?",
        "question_hi": "जंग का रासायनिक सूत्र क्या है?",
        "options_en": ["Fe₂O₃", "FeO", "Fe₃O₄", "Fe(OH)₃"],
        "options_hi": ["Fe₂O₃", "FeO", "Fe₃O₄", "Fe(OH)₃"],
        "answer_en": "Fe₂O₃",
        "answer_hi": "Fe₂O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which planet has the most eccentric orbit?",
        "question_hi": "किस ग्रह की कक्षा सबसे विलक्षण है?",
        "options_en": ["Mercury", "Venus", "Earth", "Mars"],
        "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the chemical symbol for argon?",
        "question_hi": "आर्गन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ar", "Ag", "An", "Ao"],
        "options_hi": ["Ar", "Ag", "An", "Ao"],
        "answer_en": "Ar",
        "answer_hi": "Ar",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which vitamin deficiency causes xerophthalmia?",
        "question_hi": "किस विटामिन की कमी से ज़ीरोफ्थाल्मिया होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन ए",
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
        "question_en": "Which acid is found in vinegar?",
        "question_hi": "सिरका में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Acetic acid", "Citric acid", "Lactic acid", "Tartaric acid"],
        "options_hi": ["एसिटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल", "टार्टरिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the chemical formula of washing soda?",
        "question_hi": "धोने का सोडा का रासायनिक सूत्र क्या है?",
        "options_en": ["Na₂CO₃", "NaHCO₃", "NaOH", "NaCl"],
        "options_hi": ["Na₂CO₃", "NaHCO₃", "NaOH", "NaCl"],
        "answer_en": "Na₂CO₃",
        "answer_hi": "Na₂CO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which planet is tilted on its axis by about 98 degrees?",
        "question_hi": "कौन सा ग्रह लगभग 98 डिग्री पर अपनी धुरी पर झुका हुआ है?",
        "options_en": ["Uranus", "Neptune", "Saturn", "Jupiter"],
        "options_hi": ["युरेनस", "नेपच्यून", "शनि", "बृहस्पति"],
        "answer_en": "Uranus",
        "answer_hi": "युरेनस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
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
        "num": 35,
        "question_en": "Which vitamin is essential for collagen formation?",
        "question_hi": "कोलेजन गठन के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin E"],
        "options_hi": ["विटामिन सी", "विटामिन ए", "विटामिन डी", "विटामिन ई"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन सी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the unit of angular velocity?",
        "question_hi": "कोणीय वेग की इकाई क्या है?",
        "options_en": ["Radian/second", "Degree/second", "Revolution/second", "All of these"],
        "options_hi": ["रेडियन/सेकंड", "डिग्री/सेकंड", "चक्र/सेकंड", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which acid is used in the production of fertilizers?",
        "question_hi": "उर्वरक उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Nitric acid", "Phosphoric acid", "All of these"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "फॉस्फोरिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the chemical formula of gypsum?",
        "question_hi": "जिप्सम का रासायनिक सूत्र क्या है?",
        "options_en": ["CaSO₄.2H₂O", "CaCO₃", "CaO", "Ca(OH)₂"],
        "options_hi": ["CaSO₄.2H₂O", "CaCO₃", "CaO", "Ca(OH)₂"],
        "answer_en": "CaSO₄.2H₂O",
        "answer_hi": "CaSO₄.2H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which planet has the most prominent volcanic activity?",
        "question_hi": "किस ग्रह पर सबसे प्रमुख ज्वालामुखी गतिविधि है?",
        "options_en": ["Venus", "Mars", "Io (moon)", "Earth"],
        "options_hi": ["शुक्र", "मंगल", "आईओ (चंद्रमा)", "पृथ्वी"],
        "answer_en": "Io (moon)",
        "answer_hi": "आईओ (चंद्रमा)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the chemical symbol for xenon?",
        "question_hi": "जेनॉन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Xe", "Xn", "Xo", "X"],
        "options_hi": ["Xe", "Xn", "Xo", "X"],
        "answer_en": "Xe",
        "answer_hi": "Xe",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which vitamin is also known as pantothenic acid?",
        "question_hi": "किस विटामिन को पैंटोथेनिक अम्ल भी कहा जाता है?",
        "options_en": ["Vitamin B5", "Vitamin B6", "Vitamin B12", "Vitamin B3"],
        "options_hi": ["विटामिन बी5", "विटामिन बी6", "विटामिन बी12", "विटामिन बी3"],
        "answer_en": "Vitamin B5",
        "answer_hi": "विटामिन बी5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the unit of electric field intensity?",
        "question_hi": "विद्युत क्षेत्र तीव्रता की इकाई क्या है?",
        "options_en": ["Newton/Coulomb", "Volt/meter", "Both", "Joule/Coulomb"],
        "options_hi": ["न्यूटन/कूलॉम", "वोल्ट/मीटर", "दोनों", "जूल/कूलॉम"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which acid is used in food preservation?",
        "question_hi": "खाद्य संरक्षण में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Benzoic acid", "Citric acid", "Sorbic acid", "All of these"],
        "options_hi": ["बेंजोइक अम्ल", "साइट्रिक अम्ल", "सोर्बिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the chemical formula of baking powder?",
        "question_hi": "बेकिंग पाउडर का रासायनिक सूत्र क्या है?",
        "options_en": ["NaHCO₃ + Ca(H₂PO₄)₂", "Na₂CO₃", "NaOH", "NaCl"],
        "options_hi": ["NaHCO₃ + Ca(H₂PO₄)₂", "Na₂CO₃", "NaOH", "NaCl"],
        "answer_en": "NaHCO₃ + Ca(H₂PO₄)₂",
        "answer_hi": "NaHCO₃ + Ca(H₂PO₄)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which planet has the longest revolution period?",
        "question_hi": "किस ग्रह की परिक्रमा अवधि सबसे लंबी है?",
        "options_en": ["Neptune", "Uranus", "Saturn", "Jupiter"],
        "options_hi": ["नेपच्यून", "युरेनस", "शनि", "बृहस्पति"],
        "answer_en": "Neptune",
        "answer_hi": "नेपच्यून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
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
        "num": 47,
        "question_en": "Which vitamin deficiency causes megaloblastic anemia?",
        "question_hi": "किस विटामिन की कमी से मेगालोब्लास्टिक एनीमिया होता है?",
        "options_en": ["Vitamin B12", "Vitamin B9", "Both", "Vitamin B6"],
        "options_hi": ["विटामिन बी12", "विटामिन बी9", "दोनों", "विटामिन बी6"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the unit of magnetic flux density?",
        "question_hi": "चुंबकीय फ्लक्स घनत्व की इकाई क्या है?",
        "options_en": ["Tesla", "Weber", "Henry", "Gauss"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which acid is used in the manufacture of rayon?",
        "question_hi": "रेयॉन निर्माण में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Hydrochloric acid", "Nitric acid", "Acetic acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"],
        "answer_en": "Sulfuric acid",
        "answer_hi": "सल्फ्यूरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the chemical formula of plaster of Paris?",
        "question_hi": "प्लास्टर ऑफ पेरिस का रासायनिक सूत्र क्या है?",
        "options_en": ["CaSO₄.½H₂O", "CaSO₄.2H₂O", "CaCO₃", "CaO"],
        "options_hi": ["CaSO₄.½H₂O", "CaSO₄.2H₂O", "CaCO₃", "CaO"],
        "answer_en": "CaSO₄.½H₂O",
        "answer_hi": "CaSO₄.½H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which planet has the most violent storms?",
        "question_hi": "किस ग्रह पर सबसे हिंसक तूफान होते हैं?",
        "options_en": ["Jupiter", "Saturn", "Neptune", "Mars"],
        "options_hi": ["बृहस्पति", "शनि", "नेपच्यून", "मंगल"],
        "answer_en": "Neptune",
        "answer_hi": "नेपच्यून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the chemical symbol for barium?",
        "question_hi": "बेरियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ba", "Br", "Bm", "Bi"],
        "options_hi": ["Ba", "Br", "Bm", "Bi"],
        "answer_en": "Ba",
        "answer_hi": "Ba",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which vitamin is essential for calcium absorption?",
        "question_hi": "कैल्शियम अवशोषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin D", "Vitamin C", "Vitamin K", "Vitamin A"],
        "options_hi": ["विटामिन डी", "विटामिन सी", "विटामिन के", "विटामिन ए"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the unit of specific heat capacity?",
        "question_hi": "विशिष्ट ऊष्मा धारिता की इकाई क्या है?",
        "options_en": ["J/kg·K", "cal/g·°C", "Both", "W/m·K"],
        "options_hi": ["J/kg·K", "cal/g·°C", "दोनों", "W/m·K"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
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
        "num": 56,
        "question_en": "What is the chemical formula of blue vitriol?",
        "question_hi": "नीले थोथे का रासायनिक सूत्र क्या है?",
        "options_en": ["CuSO₄.5H₂O", "FeSO₄.7H₂O", "ZnSO₄.7H₂O", "MgSO₄.7H₂O"],
        "options_hi": ["CuSO₄.5H₂O", "FeSO₄.7H₂O", "ZnSO₄.7H₂O", "MgSO₄.7H₂O"],
        "answer_en": "CuSO₄.5H₂O",
        "answer_hi": "CuSO₄.5H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which planet has the most extreme temperature variations?",
        "question_hi": "किस ग्रह पर सबसे अधिक तापमान भिन्नता होती है?",
        "options_en": ["Mercury", "Venus", "Mars", "Earth"],
        "options_hi": ["बुध", "शुक्र", "मंगल", "पृथ्वी"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the chemical symbol for strontium?",
        "question_hi": "स्ट्रोंटियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Sr", "St", "Sm", "Sn"],
        "options_hi": ["Sr", "St", "Sm", "Sn"],
        "answer_en": "Sr",
        "answer_hi": "Sr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which vitamin is essential for nerve function?",
        "question_hi": "तंत्रिका कार्य के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B12", "Vitamin B1", "Vitamin B6", "All of these"],
        "options_hi": ["विटामिन बी12", "विटामिन बी1", "विटामिन बी6", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the unit of impulse?",
        "question_hi": "आवेग की इकाई क्या है?",
        "options_en": ["Newton-second", "Kg-m/s", "Both", "Joule-second"],
        "options_hi": ["न्यूटन-सेकंड", "किलोग्राम-मीटर/सेकंड", "दोनों", "जूल-सेकंड"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which acid is used in photography?",
        "question_hi": "फोटोग्राफी में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetic acid", "Boric acid", "Oxalic acid", "Tartaric acid"],
        "options_hi": ["एसिटिक अम्ल", "बोरिक अम्ल", "ऑक्सालिक अम्ल", "टार्टरिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the chemical formula of green vitriol?",
        "question_hi": "हरे थोथे का रासायनिक सूत्र क्या है?",
        "options_en": ["FeSO₄.7H₂O", "CuSO₄.5H₂O", "ZnSO₄.7H₂O", "MgSO₄.7H₂O"],
        "options_hi": ["FeSO₄.7H₂O", "CuSO₄.5H₂O", "ZnSO₄.7H₂O", "MgSO₄.7H₂O"],
        "answer_en": "FeSO₄.7H₂O",
        "answer_hi": "FeSO₄.7H₂O",
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
        "question_en": "What is the chemical symbol for cesium?",
        "question_hi": "सीज़ियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Cs", "Ce", "Ci", "Cm"],
        "options_hi": ["Cs", "Ce", "Ci", "Cm"],
        "answer_en": "Cs",
        "answer_hi": "Cs",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which vitamin deficiency causes cheilosis?",
        "question_hi": "किस विटामिन की कमी से चीलोसिस होता है?",
        "options_en": ["Vitamin B2", "Vitamin B12", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन बी2", "विटामिन बी12", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin B2",
        "answer_hi": "विटामिन बी2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the unit of moment of inertia?",
        "question_hi": "जड़त्व आघूर्ण की इकाई क्या है?",
        "options_en": ["Kg-m²", "Kg-m/s²", "Newton-meter", "Joule-second"],
        "options_hi": ["किलोग्राम-मीटर²", "किलोग्राम-मीटर/सेकंड²", "न्यूटन-मीटर", "जूल-सेकंड"],
        "answer_en": "Kg-m²",
        "answer_hi": "किलोग्राम-मीटर²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
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
        "num": 68,
        "question_en": "What is the chemical formula of white vitriol?",
        "question_hi": "सफेद थोथे का रासायनिक सूत्र क्या है?",
        "options_en": ["ZnSO₄.7H₂O", "CuSO₄.5H₂O", "FeSO₄.7H₂O", "MgSO₄.7H₂O"],
        "options_hi": ["ZnSO₄.7H₂O", "CuSO₄.5H₂O", "FeSO₄.7H₂O", "MgSO₄.7H₂O"],
        "answer_en": "ZnSO₄.7H₂O",
        "answer_hi": "ZnSO₄.7H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which planet has the most powerful magnetic field?",
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
        "question_en": "What is the chemical symbol for francium?",
        "question_hi": "फ्रेंशियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Fr", "Fa", "Fc", "Fm"],
        "options_hi": ["Fr", "Fa", "Fc", "Fm"],
        "answer_en": "Fr",
        "answer_hi": "Fr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which vitamin is essential for red blood cell formation?",
        "question_hi": "लाल रक्त कोशिका निर्माण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B12", "Vitamin B9", "Vitamin B6", "All of these"],
        "options_hi": ["विटामिन बी12", "विटामिन बी9", "विटामिन बी6", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the unit of angular momentum?",
        "question_hi": "कोणीय संवेग की इकाई क्या है?",
        "options_en": ["Kg-m²/s", "Joule-second", "Both", "Newton-meter-second"],
        "options_hi": ["किलोग्राम-मीटर²/सेकंड", "जूल-सेकंड", "दोनों", "न्यूटन-मीटर-सेकंड"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which acid is used in the production of dyes?",
        "question_hi": "रंगों के उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Nitric acid", "Hydrochloric acid", "All of these"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the chemical formula of Epsom salt?",
        "question_hi": "एप्सम सॉल्ट का रासायनिक सूत्र क्या है?",
        "options_en": ["MgSO₄.7H₂O", "CaSO₄.2H₂O", "Na₂SO₄.10H₂O", "K₂SO₄"],
        "options_hi": ["MgSO₄.7H₂O", "CaSO₄.2H₂O", "Na₂SO₄.10H₂O", "K₂SO₄"],
        "answer_en": "MgSO₄.7H₂O",
        "answer_hi": "MgSO₄.7H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
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
        "num": 76,
        "question_en": "What is the chemical symbol for rubidium?",
        "question_hi": "रुबिडियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Rb", "Ru", "Rd", "Rm"],
        "options_hi": ["Rb", "Ru", "Rd", "Rm"],
        "answer_en": "Rb",
        "answer_hi": "Rb",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
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
        "num": 78,
        "question_en": "What is the unit of surface tension?",
        "question_hi": "पृष्ठ तनाव की इकाई क्या है?",
        "options_en": ["Newton/meter", "Joule/meter²", "Both", "Kg/m·s²"],
        "options_hi": ["न्यूटन/मीटर", "जूल/मीटर²", "दोनों", "किलोग्राम/मीटर·सेकंड²"],
        "answer_en": "Newton/meter",
        "answer_hi": "न्यूटन/मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which acid is used in the production of plastics?",
        "question_hi": "प्लास्टिक उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetic acid", "Phthalic acid", "Both", "Tartaric acid"],
        "options_hi": ["एसिटिक अम्ल", "थैलिक अम्ल", "दोनों", "टार्टरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the chemical formula of saltpeter?",
        "question_hi": "साल्टपीटर का रासायनिक सूत्र क्या है?",
        "options_en": ["KNO₃", "NaNO₃", "Ca(NO₃)₂", "NH₄NO₃"],
        "options_hi": ["KNO₃", "NaNO₃", "Ca(NO₃)₂", "NH₄NO₃"],
        "answer_en": "KNO₃",
        "answer_hi": "KNO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which planet has the fastest rotation?",
        "question_hi": "किस ग्रह का घूर्णन सबसे तेज है?",
        "options_en": ["Jupiter", "Saturn", "Neptune", "Uranus"],
        "options_hi": ["बृहस्पति", "शनि", "नेपच्यून", "युरेनस"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the chemical symbol for beryllium?",
        "question_hi": "बेरिलियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Be", "By", "Br", "Bl"],
        "options_hi": ["Be", "By", "Br", "Bl"],
        "answer_en": "Be",
        "answer_hi": "Be",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which vitamin is essential for energy production?",
        "question_hi": "ऊर्जा उत्पादन के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B complex", "Vitamin C", "Vitamin D", "Vitamin E"],
        "options_hi": ["विटामिन बी कॉम्प्लेक्स", "विटामिन सी", "विटामिन डी", "विटामिन ई"],
        "answer_en": "Vitamin B complex",
        "answer_hi": "विटामिन बी कॉम्प्लेक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the unit of viscosity?",
        "question_hi": "श्यानता की इकाई क्या है?",
        "options_en": ["Poise", "Pascal-second", "Both", "Newton-second/meter²"],
        "options_hi": ["पॉइज़", "पास्कल-सेकंड", "दोनों", "न्यूटन-सेकंड/मीटर²"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
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
        "num": 86,
        "question_en": "What is the chemical formula of borax?",
        "question_hi": "बोरेक्स का रासायनिक सूत्र क्या है?",
        "options_en": ["Na₂B₄O₇.10H₂O", "Na₂CO₃", "NaHCO₃", "NaOH"],
        "options_hi": ["Na₂B₄O₇.10H₂O", "Na₂CO₃", "NaHCO₃", "NaOH"],
        "answer_en": "Na₂B₄O₇.10H₂O",
        "answer_hi": "Na₂B₄O₇.10H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which planet has the most prominent auroras?",
        "question_hi": "किस ग्रह पर सबसे प्रमुख अरोरा होते हैं?",
        "options_en": ["Jupiter", "Saturn", "Earth", "All of these"],
        "options_hi": ["बृहस्पति", "शनि", "पृथ्वी", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the chemical symbol for lithium?",
        "question_hi": "लिथियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Li", "Lt", "Lm", "Lh"],
        "options_hi": ["Li", "Lt", "Lm", "Lh"],
        "answer_en": "Li",
        "answer_hi": "Li",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which vitamin is essential for antioxidant protection?",
        "question_hi": "एंटीऑक्सीडेंट सुरक्षा के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin E", "Vitamin C", "Both", "Vitamin A"],
        "options_hi": ["विटामिन ई", "विटामिन सी", "दोनों", "विटामिन ए"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
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
        "num": 91,
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
        "num": 92,
        "question_en": "What is the chemical formula of Chile saltpeter?",
        "question_hi": "चिली साल्टपीटर का रासायनिक सूत्र क्या है?",
        "options_en": ["NaNO₃", "KNO₃", "Ca(NO₃)₂", "NH₄NO₃"],
        "options_hi": ["NaNO₃", "KNO₃", "Ca(NO₃)₂", "NH₄NO₃"],
        "answer_en": "NaNO₃",
        "answer_hi": "NaNO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which planet has the most extensive canyon system?",
        "question_hi": "किस ग्रह पर सबसे व्यापक घाटी प्रणाली है?",
        "options_en": ["Mars", "Earth", "Venus", "Mercury"],
        "options_hi": ["मंगल", "पृथ्वी", "शुक्र", "बुध"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the chemical symbol for titanium?",
        "question_hi": "टाइटेनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ti", "Tm", "Tn", "Tt"],
        "options_hi": ["Ti", "Tm", "Tn", "Tt"],
        "answer_en": "Ti",
        "answer_hi": "Ti",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
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
        "num": 96,
        "question_en": "What is the unit of luminous flux?",
        "question_hi": "ज्योति फ्लक्स की इकाई क्या है?",
        "options_en": ["Lumen", "Candela", "Lux", "Watt"],
        "options_hi": ["ल्यूमेन", "कैंडेला", "लक्स", "वाट"],
        "answer_en": "Lumen",
        "answer_hi": "ल्यूमेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which acid is used in the production of glass?",
        "question_hi": "कांच उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Hydrofluoric acid", "Hydrochloric acid", "Nitric acid", "Sulfuric acid"],
        "options_hi": ["हाइड्रोफ्लोरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल", "सल्फ्यूरिक अम्ल"],
        "answer_en": "Hydrofluoric acid",
        "answer_hi": "हाइड्रोफ्लोरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the chemical formula of caustic soda?",
        "question_hi": "कास्टिक सोडा का रासायनिक सूत्र क्या है?",
        "options_en": ["NaOH", "Na₂CO₃", "NaHCO₃", "NaCl"],
        "options_hi": ["NaOH", "Na₂CO₃", "NaHCO₃", "NaCl"],
        "answer_en": "NaOH",
        "answer_hi": "NaOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which planet has the most moons with atmospheres?",
        "question_hi": "किस ग्रह के सबसे अधिक चंद्रमाओं में वातावरण है?",
        "options_en": ["Saturn", "Jupiter", "Uranus", "Neptune"],
        "options_hi": ["शनि", "बृहस्पति", "युरेनस", "नेपच्यून"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the chemical symbol for molybdenum?",
        "question_hi": "मोलिब्डेनम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Mo", "Mb", "Ml", "Mn"],
        "options_hi": ["Mo", "Mb", "Ml", "Mn"],
        "answer_en": "Mo",
        "answer_hi": "Mo",
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