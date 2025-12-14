const questions = [
    {
        "num": 1,
        "question_en": "Which instrument is used to measure earthquake intensity?",
        "question_hi": "भूकंप की तीव्रता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Seismograph", "Richter scale", "Both", "Barometer"],
        "options_hi": ["सीस्मोग्राफ", "रिक्टर स्केल", "दोनों", "बैरोमीटर"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
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
        "question_en": "Who discovered the law of gravity?",
        "question_hi": "गुरुत्वाकर्षण के नियम की खोज किसने की?",
        "options_en": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Johannes Kepler"],
        "options_hi": ["आइज़ैक न्यूटन", "अल्बर्ट आइंस्टीन", "गैलीलियो गैलीली", "जोहान्स केप्लर"],
        "answer_en": "Isaac Newton",
        "answer_hi": "आइज़ैक न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the main component of biogas?",
        "question_hi": "बायोगैस का मुख्य घटक क्या है?",
        "options_en": ["Methane", "Carbon dioxide", "Hydrogen", "Nitrogen"],
        "options_hi": ["मीथेन", "कार्बन डाइऑक्साइड", "हाइड्रोजन", "नाइट्रोजन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which gland controls body metabolism?",
        "question_hi": "कौन सी ग्रंथि शरीर के चयापचय को नियंत्रित करती है?",
        "options_en": ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
        "options_hi": ["थायरॉयड", "पिट्यूटरी", "अधिवृक्क", "अग्न्याशय"],
        "answer_en": "Thyroid",
        "answer_hi": "थायरॉयड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the chemical name of bleaching powder?",
        "question_hi": "ब्लीचिंग पाउडर का रासायनिक नाम क्या है?",
        "options_en": ["Calcium hypochlorite", "Calcium chloride", "Calcium carbonate", "Calcium oxide"],
        "options_hi": ["कैल्शियम हाइपोक्लोराइट", "कैल्शियम क्लोराइड", "कैल्शियम कार्बोनेट", "कैल्शियम ऑक्साइड"],
        "answer_en": "Calcium hypochlorite",
        "answer_hi": "कैल्शियम हाइपोक्लोराइट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which vitamin is also known as tocopherol?",
        "question_hi": "किस विटामिन को टोकोफेरॉल भी कहा जाता है?",
        "options_en": ["Vitamin E", "Vitamin K", "Vitamin D", "Vitamin A"],
        "options_hi": ["विटामिन ई", "विटामिन K", "विटामिन डी", "विटामिन ए"],
        "answer_en": "Vitamin E",
        "answer_hi": "विटामिन ई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the SI unit of electric charge?",
        "question_hi": "विद्युत आवेश की SI इकाई क्या है?",
        "options_en": ["Coulomb", "Ampere", "Volt", "Ohm"],
        "options_hi": ["कूलॉम", "एम्पीयर", "वोल्ट", "ओम"],
        "answer_en": "Coulomb",
        "answer_hi": "कूलॉम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which metal is used in making aircraft bodies?",
        "question_hi": "विमान निर्माण में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Aluminum", "Steel", "Titanium", "All of these"],
        "options_hi": ["एल्युमिनियम", "स्टील", "टाइटेनियम", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the chemical formula of quicklime?",
        "question_hi": "क्विकलाइम का रासायनिक सूत्र क्या है?",
        "options_en": ["CaO", "Ca(OH)₂", "CaCO₃", "CaCl₂"],
        "options_hi": ["CaO", "Ca(OH)₂", "CaCO₃", "CaCl₂"],
        "answer_en": "CaO",
        "answer_hi": "CaO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which part of the plant is modified into a carrot?",
        "question_hi": "पौधे का कौन सा भाग गाजर में परिवर्तित होता है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
        "answer_en": "Root",
        "answer_hi": "जड़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the most abundant metal in Earth's crust?",
        "question_hi": "पृथ्वी की पपड़ी में सबसे प्रचुर धातु कौन सी है?",
        "options_en": ["Aluminum", "Iron", "Calcium", "Sodium"],
        "options_hi": ["एल्युमिनियम", "लोहा", "कैल्शियम", "सोडियम"],
        "answer_en": "Aluminum",
        "answer_hi": "एल्युमिनियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which gas is used in fire extinguishers?",
        "question_hi": "अग्निशामक यंत्रों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Carbon dioxide", "Nitrogen", "Both", "Helium"],
        "options_hi": ["कार्बन डाइऑक्साइड", "नाइट्रोजन", "दोनों", "हीलियम"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the boiling point of water at sea level?",
        "question_hi": "समुद्र तल पर पानी का क्वथनांक क्या है?",
        "options_en": ["100°C", "90°C", "110°C", "95°C"],
        "options_hi": ["100°C", "90°C", "110°C", "95°C"],
        "answer_en": "100°C",
        "answer_hi": "100°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which planet is known as the Evening Star?",
        "question_hi": "किस ग्रह को इवनिंग स्टार कहा जाता है?",
        "options_en": ["Venus", "Mercury", "Mars", "Jupiter"],
        "options_hi": ["शुक्र", "बुध", "मंगल", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the chemical symbol for tungsten?",
        "question_hi": "टंगस्टन का रासायनिक प्रतीक क्या है?",
        "options_en": ["W", "Tu", "Tn", "Tg"],
        "options_hi": ["W", "Tu", "Tn", "Tg"],
        "answer_en": "W",
        "answer_hi": "W",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which vitamin deficiency causes beriberi?",
        "question_hi": "किस विटामिन की कमी से बेरीबेरी होता है?",
        "options_en": ["Vitamin B1", "Vitamin B12", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन बी1", "विटामिन बी12", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन बी1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
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
        "num": 19,
        "question_en": "Which acid is present in ant stings?",
        "question_hi": "चींटी के डंक में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Formic acid", "Acetic acid", "Citric acid", "Oxalic acid"],
        "options_hi": ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "ऑक्सालिक अम्ल"],
        "answer_en": "Formic acid",
        "answer_hi": "फॉर्मिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the chemical formula of washing soda?",
        "question_hi": "वाशिंग सोडा का रासायनिक सूत्र क्या है?",
        "options_en": ["Na₂CO₃·10H₂O", "NaHCO₃", "NaOH", "NaCl"],
        "options_hi": ["Na₂CO₃·10H₂O", "NaHCO₃", "NaOH", "NaCl"],
        "answer_en": "Na₂CO₃·10H₂O",
        "answer_hi": "Na₂CO₃·10H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
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
        "num": 22,
        "question_en": "What is the chemical symbol for platinum?",
        "question_hi": "प्लैटिनम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Pt", "Pl", "Pa", "Pn"],
        "options_hi": ["Pt", "Pl", "Pa", "Pn"],
        "answer_en": "Pt",
        "answer_hi": "Pt",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which vitamin is essential for collagen formation?",
        "question_hi": "कोलेजन निर्माण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin C", "Vitamin K", "Vitamin D", "Vitamin B12"],
        "options_hi": ["विटामिन सी", "विटामिन K", "विटामिन डी", "विटामिन बी12"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन सी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the unit of magnetic flux?",
        "question_hi": "चुंबकीय फ्लक्स की इकाई क्या है?",
        "options_en": ["Weber", "Tesla", "Gauss", "Henry"],
        "options_hi": ["वेबर", "टेस्ला", "गॉस", "हेनरी"],
        "answer_en": "Weber",
        "answer_hi": "वेबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which acid is used in lead-acid batteries?",
        "question_hi": "लेड-एसिड बैटरी में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Hydrochloric acid", "Nitric acid", "Phosphoric acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल", "फॉस्फोरिक अम्ल"],
        "answer_en": "Sulfuric acid",
        "answer_hi": "सल्फ्यूरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the chemical formula of gypsum?",
        "question_hi": "जिप्सम का रासायनिक सूत्र क्या है?",
        "options_en": ["CaSO₄·2H₂O", "CaSO₄", "CaCO₃", "CaCl₂"],
        "options_hi": ["CaSO₄·2H₂O", "CaSO₄", "CaCO₃", "CaCl₂"],
        "answer_en": "CaSO₄·2H₂O",
        "answer_hi": "CaSO₄·2H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which planet has the shortest year?",
        "question_hi": "किस ग्रह का वर्ष सबसे छोटा है?",
        "options_en": ["Mercury", "Venus", "Mars", "Earth"],
        "options_hi": ["बुध", "शुक्र", "मंगल", "पृथ्वी"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the chemical symbol for uranium?",
        "question_hi": "यूरेनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["U", "Ur", "Un", "Um"],
        "options_hi": ["U", "Ur", "Un", "Um"],
        "answer_en": "U",
        "answer_hi": "U",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which vitamin deficiency causes pellagra?",
        "question_hi": "किस विटामिन की कमी से पेलाग्रा होता है?",
        "options_en": ["Vitamin B3", "Vitamin B6", "Vitamin B12", "Vitamin C"],
        "options_hi": ["विटामिन बी3", "विटामिन बी6", "विटामिन बी12", "विटामिन सी"],
        "answer_en": "Vitamin B3",
        "answer_hi": "विटामिन बी3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the unit of frequency?",
        "question_hi": "आवृत्ति की इकाई क्या है?",
        "options_en": ["Hertz", "Watt", "Newton", "Pascal"],
        "options_hi": ["हर्ट्ज", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which acid is used in making explosives?",
        "question_hi": "विस्फोटक बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Nitric acid", "Sulfuric acid", "Both", "Hydrochloric acid"],
        "options_hi": ["नाइट्रिक अम्ल", "सल्फ्यूरिक अम्ल", "दोनों", "हाइड्रोक्लोरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
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
        "num": 33,
        "question_en": "Which moon has water geysers?",
        "question_hi": "किस चंद्रमा पर पानी के गीजर हैं?",
        "options_en": ["Enceladus", "Europa", "Triton", "All of these"],
        "options_hi": ["एन्सेलेडस", "यूरोपा", "ट्राइटन", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the chemical symbol for radium?",
        "question_hi": "रेडियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ra", "Rd", "Rm", "Rn"],
        "options_hi": ["Ra", "Rd", "Rm", "Rn"],
        "answer_en": "Ra",
        "answer_hi": "Ra",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which vitamin is essential for blood cell formation?",
        "question_hi": "रक्त कोशिका निर्माण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B12", "Folic acid", "Both", "Vitamin C"],
        "options_hi": ["विटामिन बी12", "फोलिक अम्ल", "दोनों", "विटामिन सी"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the unit of heat capacity?",
        "question_hi": "ऊष्मा धारिता की इकाई क्या है?",
        "options_en": ["Joule/Kelvin", "Calorie/°C", "Both", "Watt/Kelvin"],
        "options_hi": ["जूल/केल्विन", "कैलोरी/°C", "दोनों", "वाट/केल्विन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which acid is used in pickling of steel?",
        "question_hi": "स्टील की अचार बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Hydrochloric acid", "Sulfuric acid", "Both", "Nitric acid"],
        "options_hi": ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "दोनों", "नाइट्रिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the chemical formula of borax?",
        "question_hi": "बोरेक्स का रासायनिक सूत्र क्या है?",
        "options_en": ["Na₂B₄O₇·10H₂O", "NaBO₃", "Na₂B₂O₄", "Na₃BO₃"],
        "options_hi": ["Na₂B₄O₇·10H₂O", "NaBO₃", "Na₂B₂O₄", "Na₃BO₃"],
        "answer_en": "Na₂B₄O₇·10H₂O",
        "answer_hi": "Na₂B₄O₇·10H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which planet has the most extreme seasons?",
        "question_hi": "किस ग्रह पर सबसे अधिक चरम ऋतुएं होती हैं?",
        "options_en": ["Uranus", "Neptune", "Saturn", "Jupiter"],
        "options_hi": ["युरेनस", "नेपच्यून", "शनि", "बृहस्पति"],
        "answer_en": "Uranus",
        "answer_hi": "युरेनस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
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
        "num": 41,
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
        "question_en": "Which acid is used in making rayon?",
        "question_hi": "रेयॉन बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetic acid", "Sulfuric acid", "Both", "Nitric acid"],
        "options_hi": ["एसिटिक अम्ल", "सल्फ्यूरिक अम्ल", "दोनों", "नाइट्रिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the chemical formula of plaster of Paris?",
        "question_hi": "प्लास्टर ऑफ पेरिस का रासायनिक सूत्र क्या है?",
        "options_en": ["CaSO₄·½H₂O", "CaSO₄·2H₂O", "CaCO₃", "CaO"],
        "options_hi": ["CaSO₄·½H₂O", "CaSO₄·2H₂O", "CaCO₃", "CaO"],
        "answer_en": "CaSO₄·½H₂O",
        "answer_hi": "CaSO₄·½H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which planet has supersonic winds?",
        "question_hi": "किस ग्रह पर सुपरसोनिक हवाएं हैं?",
        "options_en": ["Neptune", "Saturn", "Jupiter", "Venus"],
        "options_hi": ["नेपच्यून", "शनि", "बृहस्पति", "शुक्र"],
        "answer_en": "Neptune",
        "answer_hi": "नेपच्यून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the chemical symbol for chromium?",
        "question_hi": "क्रोमियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Cr", "Ch", "Cm", "Co"],
        "options_hi": ["Cr", "Ch", "Cm", "Co"],
        "answer_en": "Cr",
        "answer_hi": "Cr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which vitamin deficiency causes rickets?",
        "question_hi": "किस विटामिन की कमी से रिकेट्स होता है?",
        "options_en": ["Vitamin D", "Calcium", "Both", "Vitamin C"],
        "options_hi": ["विटामिन डी", "कैल्शियम", "दोनों", "विटामिन सी"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the unit of angular velocity?",
        "question_hi": "कोणीय वेग की इकाई क्या है?",
        "options_en": ["Radian/second", "Degree/second", "Both", "Revolution/second"],
        "options_hi": ["रेडियन/सेकंड", "डिग्री/सेकंड", "दोनों", "चक्कर/सेकंड"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which acid is used in etching glass?",
        "question_hi": "कांच उकेरने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Hydrofluoric acid", "Nitric acid", "Sulfuric acid", "Hydrochloric acid"],
        "options_hi": ["हाइड्रोफ्लोरिक अम्ल", "नाइट्रिक अम्ल", "सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
        "answer_en": "Hydrofluoric acid",
        "answer_hi": "हाइड्रोफ्लोरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
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
        "num": 51,
        "question_en": "Which planet has diamond rain?",
        "question_hi": "किस ग्रह पर हीरों की बारिश होती है?",
        "options_en": ["Neptune", "Uranus", "Both", "Saturn"],
        "options_hi": ["नेपच्यून", "युरेनस", "दोनों", "शनि"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the chemical symbol for manganese?",
        "question_hi": "मैंगनीज का रासायनिक प्रतीक क्या है?",
        "options_en": ["Mn", "Mg", "Ma", "M"],
        "options_hi": ["Mn", "Mg", "Ma", "M"],
        "answer_en": "Mn",
        "answer_hi": "Mn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which vitamin is essential for calcium absorption?",
        "question_hi": "कैल्शियम अवशोषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin D", "Vitamin K", "Vitamin C", "Vitamin A"],
        "options_hi": ["विटामिन डी", "विटामिन K", "विटामिन सी", "विटामिन ए"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the unit of specific heat capacity?",
        "question_hi": "विशिष्ट ऊष्मा धारिता की इकाई क्या है?",
        "options_en": ["Joule/kg·K", "Calorie/g·°C", "Both", "Watt/kg·K"],
        "options_hi": ["जूल/किग्रा·केल्विन", "कैलोरी/ग्राम·°C", "दोनों", "वाट/किग्रा·केल्विन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which acid is used in making aspirin?",
        "question_hi": "एस्पिरिन बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Salicylic acid", "Acetic anhydride", "Both", "Sulfuric acid"],
        "options_hi": ["सैलिसिलिक अम्ल", "एसिटिक एनहाइड्राइड", "दोनों", "सल्फ्यूरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the chemical formula of blue vitriol?",
        "question_hi": "ब्लू विट्रियल का रासायनिक सूत्र क्या है?",
        "options_en": ["CuSO₄·5H₂O", "FeSO₄·7H₂O", "ZnSO₄·7H₂O", "MgSO₄·7H₂O"],
        "options_hi": ["CuSO₄·5H₂O", "FeSO₄·7H₂O", "ZnSO₄·7H₂O", "MgSO₄·7H₂O"],
        "answer_en": "CuSO₄·5H₂O",
        "answer_hi": "CuSO₄·5H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which planet has a hexagonal storm?",
        "question_hi": "किस ग्रह पर षट्भुजाकार तूफान है?",
        "options_en": ["Saturn", "Jupiter", "Neptune", "Uranus"],
        "options_hi": ["शनि", "बृहस्पति", "नेपच्यून", "युरेनस"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the chemical symbol for cobalt?",
        "question_hi": "कोबाल्ट का रासायनिक प्रतीक क्या है?",
        "options_en": ["Co", "Cb", "Ct", "Ca"],
        "options_hi": ["Co", "Cb", "Ct", "Ca"],
        "answer_en": "Co",
        "answer_hi": "Co",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which vitamin deficiency causes neural tube defects?",
        "question_hi": "किस विटामिन की कमी से न्यूरल ट्यूब दोष होते हैं?",
        "options_en": ["Folic acid", "Vitamin B12", "Both", "Vitamin C"],
        "options_hi": ["फोलिक अम्ल", "विटामिन बी12", "दोनों", "विटामिन सी"],
        "answer_en": "Folic acid",
        "answer_hi": "फोलिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the unit of viscosity?",
        "question_hi": "श्यानता की इकाई क्या है?",
        "options_en": ["Pascal-second", "Poise", "Both", "Newton-second/m²"],
        "options_hi": ["पास्कल-सेकंड", "प्वाइज", "दोनों", "न्यूटन-सेकंड/मीटर²"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which acid is used in making nylon?",
        "question_hi": "नायलॉन बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Adipic acid", "Terephthalic acid", "Both", "Acetic acid"],
        "options_hi": ["एडिपिक अम्ल", "टेरेफ्थैलिक अम्ल", "दोनों", "एसिटिक अम्ल"],
        "answer_en": "Adipic acid",
        "answer_hi": "एडिपिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the chemical formula of green vitriol?",
        "question_hi": "ग्रीन विट्रियल का रासायनिक सूत्र क्या है?",
        "options_en": ["FeSO₄·7H₂O", "CuSO₄·5H₂O", "ZnSO₄·7H₂O", "MgSO₄·7H₂O"],
        "options_hi": ["FeSO₄·7H₂O", "CuSO₄·5H₂O", "ZnSO₄·7H₂O", "MgSO₄·7H₂O"],
        "answer_en": "FeSO₄·7H₂O",
        "answer_hi": "FeSO₄·7H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which moon orbits in opposite direction to its planet's rotation?",
        "question_hi": "कौन सा चंद्रमा अपने ग्रह के घूर्णन की विपरीत दिशा में चक्कर लगाता है?",
        "options_en": ["Triton", "Titan", "Ganymede", "Callisto"],
        "options_hi": ["ट्राइटन", "टाइटन", "गेनीमेड", "कैलिस्टो"],
        "answer_en": "Triton",
        "answer_hi": "ट्राइटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the chemical symbol for barium?",
        "question_hi": "बेरियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ba", "Bm", "Br", "Bi"],
        "options_hi": ["Ba", "Bm", "Br", "Bi"],
        "answer_en": "Ba",
        "answer_hi": "Ba",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
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
        "num": 66,
        "question_en": "What is the unit of surface tension?",
        "question_hi": "पृष्ठ तनाव की इकाई क्या है?",
        "options_en": ["Newton/meter", "Dyne/cm", "Both", "Joule/m²"],
        "options_hi": ["न्यूटन/मीटर", "डाइन/सेमी", "दोनों", "जूल/मीटर²"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which acid is used in making synthetic rubber?",
        "question_hi": "सिंथेटिक रबर बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acrylic acid", "Styrene acid", "Both", "Formic acid"],
        "options_hi": ["एक्रिलिक अम्ल", "स्टाइरीन अम्ल", "दोनों", "फॉर्मिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the chemical formula of slaked lime?",
        "question_hi": "बुझे चूने का रासायनिक सूत्र क्या है?",
        "options_en": ["Ca(OH)₂", "CaO", "CaCO₃", "CaSO₄"],
        "options_hi": ["Ca(OH)₂", "CaO", "CaCO₃", "CaSO₄"],
        "answer_en": "Ca(OH)₂",
        "answer_hi": "Ca(OH)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which planet has the most tilted axis?",
        "question_hi": "किस ग्रह की धुरी सबसे अधिक झुकी हुई है?",
        "options_en": ["Uranus", "Venus", "Earth", "Mars"],
        "options_hi": ["युरेनस", "शुक्र", "पृथ्वी", "मंगल"],
        "answer_en": "Uranus",
        "answer_hi": "युरेनस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the chemical symbol for strontium?",
        "question_hi": "स्ट्रोंशियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Sr", "St", "Sm", "Sn"],
        "options_hi": ["Sr", "St", "Sm", "Sn"],
        "answer_en": "Sr",
        "answer_hi": "Sr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
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
        "num": 72,
        "question_en": "What is the unit of thermal conductivity?",
        "question_hi": "तापीय चालकता की इकाई क्या है?",
        "options_en": ["Watt/m·K", "Calorie/cm·s·°C", "Both", "Joule/m·s·K"],
        "options_hi": ["वाट/मीटर·केल्विन", "कैलोरी/सेमी·सेकंड·°C", "दोनों", "जूल/मीटर·सेकंड·केल्विन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which acid is used in making polyester?",
        "question_hi": "पॉलिएस्टर बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Terephthalic acid", "Adipic acid", "Both", "Acrylic acid"],
        "options_hi": ["टेरेफ्थैलिक अम्ल", "एडिपिक अम्ल", "दोनों", "एक्रिलिक अम्ल"],
        "answer_en": "Terephthalic acid",
        "answer_hi": "टेरेफ्थैलिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the chemical formula of white vitriol?",
        "question_hi": "व्हाइट विट्रियल का रासायनिक सूत्र क्या है?",
        "options_en": ["ZnSO₄·7H₂O", "FeSO₄·7H₂O", "CuSO₄·5H₂O", "MgSO₄·7H₂O"],
        "options_hi": ["ZnSO₄·7H₂O", "FeSO₄·7H₂O", "CuSO₄·5H₂O", "MgSO₄·7H₂O"],
        "answer_en": "ZnSO₄·7H₂O",
        "answer_hi": "ZnSO₄·7H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which moon has the most active volcanoes?",
        "question_hi": "किस चंद्रमा पर सबसे अधिक सक्रिय ज्वालामुखी हैं?",
        "options_en": ["Io", "Europa", "Titan", "Enceladus"],
        "options_hi": ["आईओ", "यूरोपा", "टाइटन", "एन्सेलेडस"],
        "answer_en": "Io",
        "answer_hi": "आईओ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
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
        "num": 77,
        "question_en": "Which vitamin deficiency causes megaloblastic anemia?",
        "question_hi": "किस विटामिन की कमी से मेगालोब्लास्टिक एनीमिया होता है?",
        "options_en": ["Vitamin B12", "Folic acid", "Both", "Vitamin C"],
        "options_hi": ["विटामिन बी12", "फोलिक अम्ल", "दोनों", "विटामिन सी"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the unit of electric field intensity?",
        "question_hi": "विद्युत क्षेत्र तीव्रता की इकाई क्या है?",
        "options_en": ["Volt/meter", "Newton/Coulomb", "Both", "Joule/Coulomb"],
        "options_hi": ["वोल्ट/मीटर", "न्यूटन/कूलॉम", "दोनों", "जूल/कूलॉम"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which acid is used in making detergents?",
        "question_hi": "डिटर्जेंट बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfonic acid", "Phosphoric acid", "Both", "Hydrochloric acid"],
        "options_hi": ["सल्फोनिक अम्ल", "फॉस्फोरिक अम्ल", "दोनों", "हाइड्रोक्लोरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the chemical formula of epsom salt?",
        "question_hi": "एप्सम सॉल्ट का रासायनिक सूत्र क्या है?",
        "options_en": ["MgSO₄·7H₂O", "CaSO₄·2H₂O", "Na₂SO₄·10H₂O", "K₂SO₄"],
        "options_hi": ["MgSO₄·7H₂O", "CaSO₄·2H₂O", "Na₂SO₄·10H₂O", "K₂SO₄"],
        "answer_en": "MgSO₄·7H₂O",
        "answer_hi": "MgSO₄·7H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which planet has the fastest winds?",
        "question_hi": "किस ग्रह पर सबसे तेज हवाएं हैं?",
        "options_en": ["Neptune", "Jupiter", "Saturn", "Uranus"],
        "options_hi": ["नेपच्यून", "बृहस्पति", "शनि", "युरेनस"],
        "answer_en": "Neptune",
        "answer_hi": "नेपच्यून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
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
        "num": 83,
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
        "num": 84,
        "question_en": "What is the unit of magnetic field strength?",
        "question_hi": "चुंबकीय क्षेत्र शक्ति की इकाई क्या है?",
        "options_en": ["Ampere/meter", "Tesla", "Gauss", "Weber"],
        "options_hi": ["एम्पीयर/मीटर", "टेस्ला", "गॉस", "वेबर"],
        "answer_en": "Ampere/meter",
        "answer_hi": "एम्पीयर/मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which acid is used in food preservation?",
        "question_hi": "भोजन संरक्षण में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Benzoic acid", "Sorbic acid", "Both", "Acetic acid"],
        "options_hi": ["बेंज़ोइक अम्ल", "सोर्बिक अम्ल", "दोनों", "एसिटिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
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
        "num": 87,
        "question_en": "Which moon has the thinnest atmosphere?",
        "question_hi": "किस चंद्रमा का वातावरण सबसे पतला है?",
        "options_en": ["Io", "Europa", "Ganymede", "Callisto"],
        "options_hi": ["आईओ", "यूरोपा", "गेनीमेड", "कैलिस्टो"],
        "answer_en": "Io",
        "answer_hi": "आईओ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the chemical symbol for antimony?",
        "question_hi": "एंटीमनी का रासायनिक प्रतीक क्या है?",
        "options_en": ["Sb", "At", "Am", "An"],
        "options_hi": ["Sb", "At", "Am", "An"],
        "answer_en": "Sb",
        "answer_hi": "Sb",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which vitamin deficiency causes osteomalacia?",
        "question_hi": "किस विटामिन की कमी से ऑस्टियोमलेशिया होता है?",
        "options_en": ["Vitamin D", "Calcium", "Both", "Vitamin C"],
        "options_hi": ["विटामिन डी", "कैल्शियम", "दोनों", "विटामिन सी"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the unit of angular acceleration?",
        "question_hi": "कोणीय त्वरण की इकाई क्या है?",
        "options_en": ["Radian/second²", "Degree/second²", "Both", "Revolution/second²"],
        "options_hi": ["रेडियन/सेकंड²", "डिग्री/सेकंड²", "दोनों", "चक्कर/सेकंड²"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which acid is used in making vinegar?",
        "question_hi": "सिरका बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetic acid", "Citric acid", "Tartaric acid", "Malic acid"],
        "options_hi": ["एसिटिक अम्ल", "साइट्रिक अम्ल", "टार्टरिक अम्ल", "मैलिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the chemical formula of chrome alum?",
        "question_hi": "क्रोम अलम का रासायनिक सूत्र क्या है?",
        "options_en": ["KCr(SO₄)₂·12H₂O", "KAl(SO₄)₂·12H₂O", "NaCr(SO₄)₂·12H₂O", "KFe(SO₄)₂·12H₂O"],
        "options_hi": ["KCr(SO₄)₂·12H₂O", "KAl(SO₄)₂·12H₂O", "NaCr(SO₄)₂·12H₂O", "KFe(SO₄)₂·12H₂O"],
        "answer_en": "KCr(SO₄)₂·12H₂O",
        "answer_hi": "KCr(SO₄)₂·12H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
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
        "num": 94,
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
        "num": 95,
        "question_en": "Which vitamin deficiency causes cheilosis?",
        "question_hi": "किस विटामिन की कमी से चीलोसिस होता है?",
        "options_en": ["Vitamin B2", "Vitamin B6", "Vitamin B12", "Vitamin C"],
        "options_hi": ["विटामिन बी2", "विटामिन बी6", "विटामिन बी12", "विटामिन सी"],
        "answer_en": "Vitamin B2",
        "answer_hi": "विटामिन बी2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the unit of moment of inertia?",
        "question_hi": "जड़त्व आघूर्ण की इकाई क्या है?",
        "options_en": ["kg·m²", "g·cm²", "Both", "Newton·m²"],
        "options_hi": ["किग्रा·मीटर²", "ग्राम·सेमी²", "दोनों", "न्यूटन·मीटर²"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which acid is used in making fertilizers?",
        "question_hi": "उर्वरक बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Phosphoric acid", "Nitric acid", "Sulfuric acid", "All of these"],
        "options_hi": ["फॉस्फोरिक अम्ल", "नाइट्रिक अम्ल", "सल्फ्यूरिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the chemical formula of potash alum?",
        "question_hi": "पोटाश अलम का रासायनिक सूत्र क्या है?",
        "options_en": ["KAl(SO₄)₂·12H₂O", "KCr(SO₄)₂·12H₂O", "KFe(SO₄)₂·12H₂O", "NaAl(SO₄)₂·12H₂O"],
        "options_hi": ["KAl(SO₄)₂·12H₂O", "KCr(SO₄)₂·12H₂O", "KFe(SO₄)₂·12H₂O", "NaAl(SO₄)₂·12H₂O"],
        "answer_en": "KAl(SO₄)₂·12H₂O",
        "answer_hi": "KAl(SO₄)₂·12H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which moon has the most water?",
        "question_hi": "किस चंद्रमा पर सबसे अधिक पानी है?",
        "options_en": ["Europa", "Ganymede", "Callisto", "All of these"],
        "options_hi": ["यूरोपा", "गेनीमेड", "कैलिस्टो", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the chemical symbol for xenon?",
        "question_hi": "जीनॉन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Xe", "Xn", "X", "Xo"],
        "options_hi": ["Xe", "Xn", "X", "Xo"],
        "answer_en": "Xe",
        "answer_hi": "Xe",
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