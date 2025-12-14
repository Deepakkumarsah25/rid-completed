const questions = [
    {
        "num": 1,
        "question_en": "Which device is used to measure the purity of milk?",
        "question_hi": "दूध की शुद्धता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Lactometer", "Hydrometer", "Barometer", "Thermometer"],
        "options_hi": ["लैक्टोमीटर", "हाइड्रोमीटर", "बैरोमीटर", "थर्मामीटर"],
        "answer_en": "Lactometer",
        "answer_hi": "लैक्टोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the chemical formula of phosgene gas?",
        "question_hi": "फॉस्जीन गैस का रासायनिक सूत्र क्या है?",
        "options_en": ["COCl₂", "CO₂Cl", "CCl₄", "CO₂"],
        "options_hi": ["COCl₂", "CO₂Cl", "CCl₄", "CO₂"],
        "answer_en": "COCl₂",
        "answer_hi": "COCl₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Who discovered the neutron?",
        "question_hi": "न्यूट्रॉन की खोज किसने की?",
        "options_en": ["James Chadwick", "Ernest Rutherford", "J.J. Thomson", "Niels Bohr"],
        "options_hi": ["जेम्स चैडविक", "अर्नेस्ट रदरफोर्ड", "जे.जे. थॉमसन", "नील्स बोहर"],
        "answer_en": "James Chadwick",
        "answer_hi": "जेम्स चैडविक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the main component of producer gas?",
        "question_hi": "प्रोड्यूसर गैस का मुख्य घटक क्या है?",
        "options_en": ["Carbon monoxide", "Hydrogen", "Nitrogen", "All of these"],
        "options_hi": ["कार्बन मोनोऑक्साइड", "हाइड्रोजन", "नाइट्रोजन", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which organ produces melatonin?",
        "question_hi": "मेलाटोनिन कौन सा अंग उत्पन्न करता है?",
        "options_en": ["Pineal gland", "Pituitary gland", "Thyroid gland", "Adrenal gland"],
        "options_hi": ["पीनियल ग्रंथि", "पिट्यूटरी ग्रंथि", "थायरॉयड ग्रंथि", "अधिवृक्क ग्रंथि"],
        "answer_en": "Pineal gland",
        "answer_hi": "पीनियल ग्रंथि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the chemical name of aqua regia?",
        "question_hi": "अक्वा रेजिया का रासायनिक नाम क्या है?",
        "options_en": ["Nitric acid + Hydrochloric acid", "Sulfuric acid + Nitric acid", "Hydrochloric acid + Sulfuric acid", "Nitric acid + Phosphoric acid"],
        "options_hi": ["नाइट्रिक अम्ल + हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल + नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल + सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल + फॉस्फोरिक अम्ल"],
        "answer_en": "Nitric acid + Hydrochloric acid",
        "answer_hi": "नाइट्रिक अम्ल + हाइड्रोक्लोरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which vitamin is also known as menadione?",
        "question_hi": "किस विटामिन को मेनाडिओन भी कहा जाता है?",
        "options_en": ["Vitamin K3", "Vitamin K1", "Vitamin K2", "Vitamin K4"],
        "options_hi": ["विटामिन K3", "विटामिन K1", "विटामिन K2", "विटामिन K4"],
        "answer_en": "Vitamin K3",
        "answer_hi": "विटामिन K3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the SI unit of catalytic activity?",
        "question_hi": "उत्प्रेरक गतिविधि की SI इकाई क्या है?",
        "options_en": ["Katal", "Mole/second", "Both", "Enzyme unit"],
        "options_hi": ["कैटल", "मोल/सेकंड", "दोनों", "एंजाइम इकाई"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which metal is used in making bulletproof jackets?",
        "question_hi": "बुलेटप्रूफ जैकेट बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Kevlar (not metal)", "Steel", "Titanium", "All of these"],
        "options_hi": ["केवलार (धातु नहीं)", "स्टील", "टाइटेनियम", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the chemical formula of chlorine dioxide?",
        "question_hi": "क्लोरीन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["ClO₂", "Cl₂O", "ClO", "Cl₂O₃"],
        "options_hi": ["ClO₂", "Cl₂O", "ClO", "Cl₂O₃"],
        "answer_en": "ClO₂",
        "answer_hi": "ClO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which part of the plant is modified into a pineapple fruit?",
        "question_hi": "पौधे का कौन सा भाग अनानास फल में परिवर्तित होता है?",
        "options_en": ["Multiple flowers", "Single flower", "Stem", "Root"],
        "options_hi": ["कई फूल", "एकल फूल", "तना", "जड़"],
        "answer_en": "Multiple flowers",
        "answer_hi": "कई फूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the most abundant element in seawater?",
        "question_hi": "समुद्री जल में सबसे प्रचुर तत्व कौन सा है?",
        "options_en": ["Oxygen", "Hydrogen", "Chlorine", "Sodium"],
        "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "क्लोरीन", "सोडियम"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which gas is used in weather balloons?",
        "question_hi": "मौसम गुब्बारों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Helium", "Hydrogen", "Both", "Neon"],
        "options_hi": ["हीलियम", "हाइड्रोजन", "दोनों", "नियॉन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the boiling point of liquid nitrogen?",
        "question_hi": "तरल नाइट्रोजन का क्वथनांक क्या है?",
        "options_en": ["-196°C", "-183°C", "-210°C", "-78°C"],
        "options_hi": ["-196°C", "-183°C", "-210°C", "-78°C"],
        "answer_en": "-196°C",
        "answer_hi": "-196°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which planet is known as the Windy Planet?",
        "question_hi": "किस ग्रह को हवादार ग्रह कहा जाता है?",
        "options_en": ["Neptune", "Jupiter", "Saturn", "Uranus"],
        "options_hi": ["नेपच्यून", "बृहस्पति", "शनि", "युरेनस"],
        "answer_en": "Neptune",
        "answer_hi": "नेपच्यून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the chemical symbol for holmium?",
        "question_hi": "होलमियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ho", "Hm", "Hl", "Hy"],
        "options_hi": ["Ho", "Hm", "Hl", "Hy"],
        "answer_en": "Ho",
        "answer_hi": "Ho",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which vitamin deficiency causes hemolytic anemia?",
        "question_hi": "किस विटामिन की कमी से हेमोलिटिक एनीमिया होता है?",
        "options_en": ["Vitamin E", "Vitamin K", "Vitamin C", "Vitamin B12"],
        "options_hi": ["विटामिन ई", "विटामिन K", "विटामिन सी", "विटामिन बी12"],
        "answer_en": "Vitamin E",
        "answer_hi": "विटामिन ई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the unit of illuminance?",
        "question_hi": "प्रकाशिता की इकाई क्या है?",
        "options_en": ["Lux", "Lumen", "Candela", "Watt"],
        "options_hi": ["लक्स", "ल्यूमेन", "कैंडेला", "वाट"],
        "answer_en": "Lux",
        "answer_hi": "लक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which acid is used in the production of synthetic rubber?",
        "question_hi": "सिंथेटिक रबर उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Styrene acid", "Acetic acid", "Formic acid", "Tartaric acid"],
        "options_hi": ["स्टाइरीन अम्ल", "एसिटिक अम्ल", "फॉर्मिक अम्ल", "टार्टरिक अम्ल"],
        "answer_en": "Styrene acid",
        "answer_hi": "स्टाइरीन अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the chemical formula of sodium hypochlorite?",
        "question_hi": "सोडियम हाइपोक्लोराइट का रासायनिक सूत्र क्या है?",
        "options_en": ["NaOCl", "NaClO₂", "NaClO₃", "NaClO₄"],
        "options_hi": ["NaOCl", "NaClO₂", "NaClO₃", "NaClO₄"],
        "answer_en": "NaOCl",
        "answer_hi": "NaOCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which is the only moon with a retrograde orbit?",
        "question_hi": "कौन सा एकमात्र चंद्रमा है जिसकी प्रतिगामी कक्षा है?",
        "options_en": ["Triton", "Titan", "Ganymede", "Callisto"],
        "options_hi": ["ट्राइटन", "टाइटन", "गेनीमेड", "कैलिस्टो"],
        "answer_en": "Triton",
        "answer_hi": "ट्राइटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the chemical symbol for erbium?",
        "question_hi": "अर्बियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Er", "Eb", "Em", "Ey"],
        "options_hi": ["Er", "Eb", "Em", "Ey"],
        "answer_en": "Er",
        "answer_hi": "Er",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which vitamin is essential for fatty acid synthesis?",
        "question_hi": "वसा अम्ल संश्लेषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Biotin", "Pantothenic acid", "Both", "Vitamin B12"],
        "options_hi": ["बायोटिन", "पैंटोथेनिक अम्ल", "दोनों", "विटामिन बी12"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the unit of magnetic field intensity?",
        "question_hi": "चुंबकीय क्षेत्र तीव्रता की इकाई क्या है?",
        "options_en": ["Ampere/meter", "Tesla", "Weber", "Henry"],
        "options_hi": ["एम्पीयर/मीटर", "टेस्ला", "वेबर", "हेनरी"],
        "answer_en": "Ampere/meter",
        "answer_hi": "एम्पीयर/मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which acid is present in rhubarb?",
        "question_hi": "रुबर्ब में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Oxalic acid", "Malic acid", "Citric acid", "Tartaric acid"],
        "options_hi": ["ऑक्सालिक अम्ल", "मैलिक अम्ल", "साइट्रिक अम्ल", "टार्टरिक अम्ल"],
        "answer_en": "Oxalic acid",
        "answer_hi": "ऑक्सालिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the chemical formula of phosphorus trichloride?",
        "question_hi": "फॉस्फोरस ट्राइक्लोराइड का रासायनिक सूत्र क्या है?",
        "options_en": ["PCl₃", "PCl₅", "P₂Cl₃", "P₃Cl"],
        "options_hi": ["PCl₃", "PCl₅", "P₂Cl₃", "P₃Cl"],
        "answer_en": "PCl₃",
        "answer_hi": "PCl₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which planet has the longest orbital period?",
        "question_hi": "किस ग्रह की कक्षीय अवधि सबसे लंबी है?",
        "options_en": ["Neptune", "Uranus", "Saturn", "Jupiter"],
        "options_hi": ["नेपच्यून", "युरेनस", "शनि", "बृहस्पति"],
        "answer_en": "Neptune",
        "answer_hi": "नेपच्यून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the chemical symbol for thulium?",
        "question_hi": "थुलियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Tm", "Th", "Tl", "Tu"],
        "options_hi": ["Tm", "Th", "Tl", "Tu"],
        "answer_en": "Tm",
        "answer_hi": "Tm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which vitamin deficiency causes optic neuropathy?",
        "question_hi": "किस विटामिन की कमी से ऑप्टिक न्यूरोपैथी होती है?",
        "options_en": ["Vitamin B12", "Vitamin B1", "Both", "Vitamin B6"],
        "options_hi": ["विटामिन बी12", "विटामिन बी1", "दोनों", "विटामिन बी6"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the unit of electric flux?",
        "question_hi": "विद्युत फ्लक्स की इकाई क्या है?",
        "options_en": ["Volt-meter", "Newton-meter²/Coulomb", "Both", "Joule/Coulomb"],
        "options_hi": ["वोल्ट-मीटर", "न्यूटन-मीटर²/कूलॉम", "दोनों", "जूल/कूलॉम"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which acid is used in the production of polyurethane foam?",
        "question_hi": "पॉलीयुरेथेन फोम उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Toluene diisocyanate", "Acetic acid", "Formic acid", "Citric acid"],
        "options_hi": ["टोल्यूइन डाइआइसोसाइनेट", "एसिटिक अम्ल", "फॉर्मिक अम्ल", "साइट्रिक अम्ल"],
        "answer_en": "Toluene diisocyanate",
        "answer_hi": "टोल्यूइन डाइआइसोसाइनेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the chemical formula of sodium nitrite?",
        "question_hi": "सोडियम नाइट्राइट का रासायनिक सूत्र क्या है?",
        "options_en": ["NaNO₂", "NaNO₃", "Na₂NO₂", "Na₂NO₃"],
        "options_hi": ["NaNO₂", "NaNO₃", "Na₂NO₂", "Na₂NO₃"],
        "answer_en": "NaNO₂",
        "answer_hi": "NaNO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which moon has cryovolcanoes?",
        "question_hi": "किस चंद्रमा पर क्रायोवोल्केनो हैं?",
        "options_en": ["Enceladus", "Triton", "Both", "Europa"],
        "options_hi": ["एन्सेलेडस", "ट्राइटन", "दोनों", "यूरोपा"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the chemical symbol for dysprosium?",
        "question_hi": "डिस्प्रोसियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Dy", "Dp", "Ds", "Dr"],
        "options_hi": ["Dy", "Dp", "Ds", "Dr"],
        "answer_en": "Dy",
        "answer_hi": "Dy",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which vitamin is also known as cyanocobalamin?",
        "question_hi": "किस विटामिन को सायनोकोबालामिन भी कहा जाता है?",
        "options_en": ["Vitamin B12", "Vitamin B6", "Vitamin B1", "Vitamin B2"],
        "options_hi": ["विटामिन बी12", "विटामिन बी6", "विटामिन बी1", "विटामिन बी2"],
        "answer_en": "Vitamin B12",
        "answer_hi": "विटामिन बी12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the unit of thermal diffusivity?",
        "question_hi": "तापीय विसरणशीलता की इकाई क्या है?",
        "options_en": ["m²/s", "cm²/s", "Both", "W/m·K"],
        "options_hi": ["मीटर²/सेकंड", "सेंटीमीटर²/सेकंड", "दोनों", "वाट/मीटर·केल्विन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which acid is used in the production of photographic film?",
        "question_hi": "फोटोग्राफिक फिल्म उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetic acid", "Nitric acid", "Sulfuric acid", "Hydrochloric acid"],
        "options_hi": ["एसिटिक अम्ल", "नाइट्रिक अम्ल", "सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
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
        "num": 39,
        "question_en": "Which moon has the most active cryovolcanism?",
        "question_hi": "किस चंद्रमा पर सबसे अधिक सक्रिय क्रायोवोल्केनिज्म है?",
        "options_en": ["Enceladus", "Triton", "Europa", "Ganymede"],
        "options_hi": ["एन्सेलेडस", "ट्राइटन", "यूरोपा", "गेनीमेड"],
        "answer_en": "Enceladus",
        "answer_hi": "एन्सेलेडस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the chemical symbol for terbium?",
        "question_hi": "टर्बियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Tb", "Ty", "Tr", "Tm"],
        "options_hi": ["Tb", "Ty", "Tr", "Tm"],
        "answer_en": "Tb",
        "answer_hi": "Tb",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which vitamin deficiency causes metabolic acidosis?",
        "question_hi": "किस विटामिन की कमी से मेटाबोलिक एसिडोसिस होता है?",
        "options_en": ["Vitamin D", "Biotin", "Thiamine", "All of these"],
        "options_hi": ["विटामिन डी", "बायोटिन", "थायमिन", "ये सभी"],
        "answer_en": "Biotin",
        "answer_hi": "बायोटिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the unit of electric conductivity?",
        "question_hi": "विद्युत चालकता की इकाई क्या है?",
        "options_en": ["Siemens/meter", "Mho/meter", "Both", "Ohm/meter"],
        "options_hi": ["सीमेंस/मीटर", "म्हो/मीटर", "दोनों", "ओम/मीटर"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which acid is used in the production of synthetic leather?",
        "question_hi": "सिंथेटिक चमड़ा उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Polyurethane acids", "Acetic acid", "Formic acid", "Citric acid"],
        "options_hi": ["पॉलीयुरेथेन अम्ल", "एसिटिक अम्ल", "फॉर्मिक अम्ल", "साइट्रिक अम्ल"],
        "answer_en": "Polyurethane acids",
        "answer_hi": "पॉलीयुरेथेन अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the chemical formula of potassium chlorate?",
        "question_hi": "पोटेशियम क्लोरेट का रासायनिक सूत्र क्या है?",
        "options_en": ["KClO₃", "KClO₄", "KClO₂", "KClO"],
        "options_hi": ["KClO₃", "KClO₄", "KClO₂", "KClO"],
        "answer_en": "KClO₃",
        "answer_hi": "KClO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
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
        "num": 46,
        "question_en": "What is the chemical symbol for gadolinium?",
        "question_hi": "गैडोलिनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Gd", "Ga", "Gl", "Gn"],
        "options_hi": ["Gd", "Ga", "Gl", "Gn"],
        "answer_en": "Gd",
        "answer_hi": "Gd",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which vitamin deficiency causes burning feet syndrome?",
        "question_hi": "किस विटामिन की कमी से बर्निंग फीट सिंड्रोम होता है?",
        "options_en": ["Vitamin B5", "Vitamin B6", "Vitamin B12", "Vitamin B1"],
        "options_hi": ["विटामिन बी5", "विटामिन बी6", "विटामिन बी12", "विटामिन बी1"],
        "answer_en": "Vitamin B5",
        "answer_hi": "विटामिन बी5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the unit of molar conductivity?",
        "question_hi": "मोलर चालकता की इकाई क्या है?",
        "options_en": ["S·m²/mol", "S·cm²/mol", "Both", "Ω⁻¹·m²/mol"],
        "options_hi": ["S·m²/mol", "S·cm²/mol", "दोनों", "Ω⁻¹·m²/mol"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which acid is used in the production of fire retardants?",
        "question_hi": "अग्निरोधक उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Boric acid", "Phosphoric acid", "Both", "Sulfuric acid"],
        "options_hi": ["बोरिक अम्ल", "फॉस्फोरिक अम्ल", "दोनों", "सल्फ्यूरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the chemical formula of sodium metasilicate?",
        "question_hi": "सोडियम मेटासिलिकेट का रासायनिक सूत्र क्या है?",
        "options_en": ["Na₂SiO₃", "NaSiO₃", "Na₂Si₂O₅", "Na₂Si₃O₇"],
        "options_hi": ["Na₂SiO₃", "NaSiO₃", "Na₂Si₂O₅", "Na₂Si₃O₇"],
        "answer_en": "Na₂SiO₃",
        "answer_hi": "Na₂SiO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
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
        "num": 52,
        "question_en": "What is the chemical symbol for europium?",
        "question_hi": "यूरोपियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Eu", "Ep", "Em", "Er"],
        "options_hi": ["Eu", "Ep", "Em", "Er"],
        "answer_en": "Eu",
        "answer_hi": "Eu",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which vitamin is essential for myelin sheath formation?",
        "question_hi": "मायलिन शीथ निर्माण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B12", "Vitamin B1", "Vitamin B6", "Vitamin B2"],
        "options_hi": ["विटामिन बी12", "विटामिन बी1", "विटामिन बी6", "विटामिन बी2"],
        "answer_en": "Vitamin B12",
        "answer_hi": "विटामिन बी12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the unit of luminous intensity?",
        "question_hi": "दीप्त तीव्रता की इकाई क्या है?",
        "options_en": ["Candela", "Lumen", "Lux", "Watt"],
        "options_hi": ["कैंडेला", "ल्यूमेन", "लक्स", "वाट"],
        "answer_en": "Candela",
        "answer_hi": "कैंडेला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which acid is used in the production of rayon?",
        "question_hi": "रेयॉन उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Nitric acid", "Hydrochloric acid", "Acetic acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "एसिटिक अम्ल"],
        "answer_en": "Sulfuric acid",
        "answer_hi": "सल्फ्यूरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the chemical formula of ammonium sulfate?",
        "question_hi": "अमोनियम सल्फेट का रासायनिक सूत्र क्या है?",
        "options_en": ["(NH₄)₂SO₄", "NH₄SO₄", "NH₄SO₃", "(NH₄)₂SO₃"],
        "options_hi": ["(NH₄)₂SO₄", "NH₄SO₄", "NH₄SO₃", "(NH₄)₂SO₃"],
        "answer_en": "(NH₄)₂SO₄",
        "answer_hi": "(NH₄)₂SO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which planet has the least axial tilt?",
        "question_hi": "किस ग्रह का अक्षीय झुकाव सबसे कम है?",
        "options_en": ["Mercury", "Venus", "Jupiter", "Earth"],
        "options_hi": ["बुध", "शुक्र", "बृहस्पति", "पृथ्वी"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the chemical symbol for samarium?",
        "question_hi": "समेरियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Sm", "Sa", "Sr", "Sg"],
        "options_hi": ["Sm", "Sa", "Sr", "Sg"],
        "answer_en": "Sm",
        "answer_hi": "Sm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which vitamin deficiency causes angular cheilitis?",
        "question_hi": "किस विटामिन की कमी से एंगुलर चीलाइटिस होता है?",
        "options_en": ["Vitamin B2", "Vitamin B6", "Vitamin B12", "Vitamin C"],
        "options_hi": ["विटामिन बी2", "विटामिन बी6", "विटामिन बी12", "विटामिन सी"],
        "answer_en": "Vitamin B2",
        "answer_hi": "विटामिन बी2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the unit of radioactivity?",
        "question_hi": "रेडियोधर्मिता की इकाई क्या है?",
        "options_en": ["Becquerel", "Curie", "Both", "Gray"],
        "options_hi": ["बेकरेल", "क्यूरी", "दोनों", "ग्रे"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which acid is used in the production of boric acid ointment?",
        "question_hi": "बोरिक अम्ल मलहम उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Boric acid", "Salicylic acid", "Both", "Benzoic acid"],
        "options_hi": ["बोरिक अम्ल", "सैलिसिलिक अम्ल", "दोनों", "बेंज़ोइक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the chemical formula of calcium phosphate?",
        "question_hi": "कैल्शियम फॉस्फेट का रासायनिक सूत्र क्या है?",
        "options_en": ["Ca₃(PO₄)₂", "CaHPO₄", "Ca(H₂PO₄)₂", "All of these"],
        "options_hi": ["Ca₃(PO₄)₂", "CaHPO₄", "Ca(H₂PO₄)₂", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which moon has the thickest atmosphere?",
        "question_hi": "किस चंद्रमा का वातावरण सबसे घना है?",
        "options_en": ["Titan", "Triton", "Europa", "Ganymede"],
        "options_hi": ["टाइटन", "ट्राइटन", "यूरोपा", "गेनीमेड"],
        "answer_en": "Titan",
        "answer_hi": "टाइटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the chemical symbol for neodymium?",
        "question_hi": "नियोडिमियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Nd", "Nm", "No", "Ne"],
        "options_hi": ["Nd", "Nm", "No", "Ne"],
        "answer_en": "Nd",
        "answer_hi": "Nd",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which vitamin deficiency causes xerophthalmia?",
        "question_hi": "किस विटामिन की कमी से ज़ेरोफथैल्मिया होता है?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin E", "Vitamin K"],
        "options_hi": ["विटामिन ए", "विटामिन सी", "विटामिन ई", "विटामिन K"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन ए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the unit of absorbed radiation dose?",
        "question_hi": "अवशोषित विकिरण खुराक की इकाई क्या है?",
        "options_en": ["Gray", "Sievert", "Rad", "Both Gray and Rad"],
        "options_hi": ["ग्रे", "सिवर्ट", "रैड", "ग्रे और रैड दोनों"],
        "answer_en": "Both Gray and Rad",
        "answer_hi": "ग्रे और रैड दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which acid is used in the production of nylon?",
        "question_hi": "नायलॉन उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Adipic acid", "Terephthalic acid", "Both", "Acetic acid"],
        "options_hi": ["एडिपिक अम्ल", "टेरेफ्थैलिक अम्ल", "दोनों", "एसिटिक अम्ल"],
        "answer_en": "Adipic acid",
        "answer_hi": "एडिपिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the chemical formula of potassium permanganate?",
        "question_hi": "पोटेशियम परमैंगनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["KMnO₄", "K₂MnO₄", "KMnO₃", "K₂MnO₃"],
        "options_hi": ["KMnO₄", "K₂MnO₄", "KMnO₃", "K₂MnO₃"],
        "answer_en": "KMnO₄",
        "answer_hi": "KMnO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which planet has the shortest day?",
        "question_hi": "किस ग्रह का दिन सबसे छोटा है?",
        "options_en": ["Jupiter", "Saturn", "Neptune", "Uranus"],
        "options_hi": ["बृहस्पति", "शनि", "नेपच्यून", "युरेनस"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the chemical symbol for praseodymium?",
        "question_hi": "प्रेसियोडिमियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Pr", "Pa", "Pd", "Ps"],
        "options_hi": ["Pr", "Pa", "Pd", "Ps"],
        "answer_en": "Pr",
        "answer_hi": "Pr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which vitamin deficiency causes Wernicke-Korsakoff syndrome?",
        "question_hi": "किस विटामिन की कमी से वर्निके-कोर्साकॉफ सिंड्रोम होता है?",
        "options_en": ["Vitamin B1", "Vitamin B6", "Vitamin B12", "Vitamin B2"],
        "options_hi": ["विटामिन बी1", "विटामिन बी6", "विटामिन बी12", "विटामिन बी2"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन बी1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the unit of equivalent dose of radiation?",
        "question_hi": "विकिरण की समतुल्य खुराक की इकाई क्या है?",
        "options_en": ["Sievert", "Rem", "Both", "Gray"],
        "options_hi": ["सिवर्ट", "रेम", "दोनों", "ग्रे"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which acid is used in the production of polyester?",
        "question_hi": "पॉलिएस्टर उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Terephthalic acid", "Adipic acid", "Both", "Acrylic acid"],
        "options_hi": ["टेरेफ्थैलिक अम्ल", "एडिपिक अम्ल", "दोनों", "एक्रिलिक अम्ल"],
        "answer_en": "Terephthalic acid",
        "answer_hi": "टेरेफ्थैलिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the chemical formula of magnesium sulfate?",
        "question_hi": "मैग्नीशियम सल्फेट का रासायनिक सूत्र क्या है?",
        "options_en": ["MgSO₄", "MgSO₃", "Mg₂SO₄", "MgS"],
        "options_hi": ["MgSO₄", "MgSO₃", "Mg₂SO₄", "MgS"],
        "answer_en": "MgSO₄",
        "answer_hi": "MgSO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which moon has the largest canyon system?",
        "question_hi": "किस चंद्रमा पर सबसे बड़ी घाटी प्रणाली है?",
        "options_en": ["Miranda", "Tethys", "Io", "Ganymede"],
        "options_hi": ["मिरांडा", "टेथिस", "आईओ", "गेनीमेड"],
        "answer_en": "Miranda",
        "answer_hi": "मिरांडा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the chemical symbol for cerium?",
        "question_hi": "सेरियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ce", "Cr", "Cm", "Ca"],
        "options_hi": ["Ce", "Cr", "Cm", "Ca"],
        "answer_en": "Ce",
        "answer_hi": "Ce",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which vitamin deficiency causes scurvy?",
        "question_hi": "किस विटामिन की कमी से स्कर्वी होता है?",
        "options_en": ["Vitamin C", "Vitamin K", "Vitamin D", "Vitamin B12"],
        "options_hi": ["विटामिन सी", "विटामिन K", "विटामिन डी", "विटामिन बी12"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन सी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the unit of magnetic flux?",
        "question_hi": "चुंबकीय फ्लक्स की इकाई क्या है?",
        "options_en": ["Weber", "Maxwell", "Both", "Tesla"],
        "options_hi": ["वेबर", "मैक्सवेल", "दोनों", "टेस्ला"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which acid is used in the production of aspirin?",
        "question_hi": "एस्पिरिन उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Salicylic acid", "Acetic anhydride", "Both", "Sulfuric acid"],
        "options_hi": ["सैलिसिलिक अम्ल", "एसिटिक एनहाइड्राइड", "दोनों", "सल्फ्यूरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the chemical formula of sodium bicarbonate?",
        "question_hi": "सोडियम बाइकार्बोनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["NaHCO₃", "Na₂CO₃", "Na₂HCO₃", "NaCO₃"],
        "options_hi": ["NaHCO₃", "Na₂CO₃", "Na₂HCO₃", "NaCO₃"],
        "answer_en": "NaHCO₃",
        "answer_hi": "NaHCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which planet has the highest surface temperature?",
        "question_hi": "किस ग्रह का सतह तापमान सबसे अधिक है?",
        "options_en": ["Venus", "Mercury", "Mars", "Jupiter"],
        "options_hi": ["शुक्र", "बुध", "मंगल", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the chemical symbol for lanthanum?",
        "question_hi": "लैन्थनम का रासायनिक प्रतीक क्या है?",
        "options_en": ["La", "Ln", "Lt", "Lh"],
        "options_hi": ["La", "Ln", "Lt", "Lh"],
        "answer_en": "La",
        "answer_hi": "La",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which vitamin deficiency causes beriberi?",
        "question_hi": "किस विटामिन की कमी से बेरीबेरी होता है?",
        "options_en": ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12"],
        "options_hi": ["विटामिन बी1", "विटामिन बी2", "विटामिन बी6", "विटामिन बी12"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन बी1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the unit of inductance?",
        "question_hi": "प्रेरकत्व की इकाई क्या है?",
        "options_en": ["Henry", "Farad", "Ohm", "Weber"],
        "options_hi": ["हेनरी", "फैरड", "ओम", "वेबर"],
        "answer_en": "Henry",
        "answer_hi": "हेनरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which acid is used in the production of vinegar?",
        "question_hi": "सिरका उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetic acid", "Citric acid", "Tartaric acid", "Malic acid"],
        "options_hi": ["एसिटिक अम्ल", "साइट्रिक अम्ल", "टार्टरिक अम्ल", "मैलिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the chemical formula of calcium oxide?",
        "question_hi": "कैल्शियम ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CaO", "CaO₂", "Ca₂O", "Ca(OH)₂"],
        "options_hi": ["CaO", "CaO₂", "Ca₂O", "Ca(OH)₂"],
        "answer_en": "CaO",
        "answer_hi": "CaO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which moon is most geologically active?",
        "question_hi": "कौन सा चंद्रमा सबसे अधिक भूवैज्ञानिक रूप से सक्रिय है?",
        "options_en": ["Io", "Europa", "Titan", "Enceladus"],
        "options_hi": ["आईओ", "यूरोपा", "टाइटन", "एन्सेलेडस"],
        "answer_en": "Io",
        "answer_hi": "आईओ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the chemical symbol for yttrium?",
        "question_hi": "इट्रियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Y", "Yt", "Ym", "Yr"],
        "options_hi": ["Y", "Yt", "Ym", "Yr"],
        "answer_en": "Y",
        "answer_hi": "Y",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which vitamin deficiency causes pellagra?",
        "question_hi": "किस विटामिन की कमी से पेलाग्रा होता है?",
        "options_en": ["Vitamin B3", "Vitamin B6", "Vitamin B12", "Vitamin B2"],
        "options_hi": ["विटामिन बी3", "विटामिन बी6", "विटामिन बी12", "विटामिन बी2"],
        "answer_en": "Vitamin B3",
        "answer_hi": "विटामिन बी3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the unit of capacitance?",
        "question_hi": "धारिता की इकाई क्या है?",
        "options_en": ["Farad", "Coulomb/Volt", "Both", "Henry"],
        "options_hi": ["फैरड", "कूलॉम/वोल्ट", "दोनों", "हेनरी"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which acid is used in the production of battery acid?",
        "question_hi": "बैटरी अम्ल उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Hydrochloric acid", "Nitric acid", "Phosphoric acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल", "फॉस्फोरिक अम्ल"],
        "answer_en": "Sulfuric acid",
        "answer_hi": "सल्फ्यूरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the chemical formula of aluminum oxide?",
        "question_hi": "एल्युमिनियम ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["Al₂O₃", "AlO", "AlO₂", "Al₂O"],
        "options_hi": ["Al₂O₃", "AlO", "AlO₂", "Al₂O"],
        "answer_en": "Al₂O₃",
        "answer_hi": "Al₂O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
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
        "num": 94,
        "question_en": "What is the chemical symbol for scandium?",
        "question_hi": "स्कैंडियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Sc", "Sd", "Sn", "Sm"],
        "options_hi": ["Sc", "Sd", "Sn", "Sm"],
        "answer_en": "Sc",
        "answer_hi": "Sc",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which vitamin deficiency causes rickets?",
        "question_hi": "किस विटामिन की कमी से रिकेट्स होता है?",
        "options_en": ["Vitamin D", "Vitamin C", "Vitamin K", "Vitamin E"],
        "options_hi": ["विटामिन डी", "विटामिन सी", "विटामिन K", "विटामिन ई"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the unit of electric charge?",
        "question_hi": "विद्युत आवेश की इकाई क्या है?",
        "options_en": ["Coulomb", "Ampere-second", "Both", "Farad"],
        "options_hi": ["कूलॉम", "एम्पीयर-सेकंड", "दोनों", "फैरड"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which acid is used in the production of etching glass?",
        "question_hi": "कांच उकेरने के उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Hydrofluoric acid", "Sulfuric acid", "Nitric acid", "Hydrochloric acid"],
        "options_hi": ["हाइड्रोफ्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
        "answer_en": "Hydrofluoric acid",
        "answer_hi": "हाइड्रोफ्लोरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the chemical formula of sulfur dioxide?",
        "question_hi": "सल्फर डाइऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["SO₂", "SO₃", "SO", "S₂O"],
        "options_hi": ["SO₂", "SO₃", "SO", "S₂O"],
        "answer_en": "SO₂",
        "answer_hi": "SO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which planet has the Great Red Spot?",
        "question_hi": "किस ग्रह पर ग्रेट रेड स्पॉट है?",
        "options_en": ["Jupiter", "Saturn", "Neptune", "Mars"],
        "options_hi": ["बृहस्पति", "शनि", "नेपच्यून", "मंगल"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the chemical symbol for vanadium?",
        "question_hi": "वनेडियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["V", "Va", "Vm", "Vn"],
        "options_hi": ["V", "Va", "Vm", "Vn"],
        "answer_en": "V",
        "answer_hi": "V",
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