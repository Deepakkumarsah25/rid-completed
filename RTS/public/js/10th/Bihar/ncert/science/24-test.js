const questions = [
    {
        "num": 1,
        "question_en": "Which device measures atmospheric pressure?",
        "question_hi": "वायुमंडलीय दबाव मापने वाला उपकरण कौन सा है?",
        "options_en": ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
        "options_hi": ["बैरोमीटर", "थर्मामीटर", "आर्द्रतामापी", "पवनवेगमापी"],
        "answer_en": "Barometer",
        "answer_hi": "बैरोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the chemical formula of ammonia?",
        "question_hi": "अमोनिया का रासायनिक सूत्र क्या है?",
        "options_en": ["NH₃", "NH₄", "N₂H₄", "N₂H₆"],
        "options_hi": ["NH₃", "NH₄", "N₂H₄", "N₂H₆"],
        "answer_en": "NH₃",
        "answer_hi": "NH₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Who discovered penicillin?",
        "question_hi": "पेनिसिलिन की खोज किसने की?",
        "options_en": ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister"],
        "options_hi": ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "रॉबर्ट कोच", "जोसेफ लिस्टर"],
        "answer_en": "Alexander Fleming",
        "answer_hi": "अलेक्जेंडर फ्लेमिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the main component of natural gas?",
        "question_hi": "प्राकृतिक गैस का मुख्य घटक क्या है?",
        "options_en": ["Methane", "Ethane", "Propane", "Butane"],
        "options_hi": ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which gland produces insulin?",
        "question_hi": "इंसुलिन कौन सी ग्रंथि उत्पन्न करती है?",
        "options_en": ["Pancreas", "Liver", "Kidney", "Spleen"],
        "options_hi": ["अग्न्याशय", "यकृत", "गुर्दा", "तिल्ली"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the chemical name of baking soda?",
        "question_hi": "बेकिंग सोडा का रासायनिक नाम क्या है?",
        "options_en": ["Sodium bicarbonate", "Sodium carbonate", "Calcium carbonate", "Potassium bicarbonate"],
        "options_hi": ["सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "कैल्शियम कार्बोनेट", "पोटेशियम बाइकार्बोनेट"],
        "answer_en": "Sodium bicarbonate",
        "answer_hi": "सोडियम बाइकार्बोनेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which vitamin is also known as ascorbic acid?",
        "question_hi": "किस विटामिन को एस्कॉर्बिक अम्ल भी कहा जाता है?",
        "options_en": ["Vitamin C", "Vitamin B12", "Vitamin D", "Vitamin K"],
        "options_hi": ["विटामिन सी", "विटामिन बी12", "विटामिन डी", "विटामिन K"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन सी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the SI unit of force?",
        "question_hi": "बल की SI इकाई क्या है?",
        "options_en": ["Newton", "Joule", "Pascal", "Watt"],
        "options_hi": ["न्यूटन", "जूल", "पास्कल", "वाट"],
        "answer_en": "Newton",
        "answer_hi": "न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which metal is liquid at room temperature?",
        "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
        "options_en": ["Mercury", "Gallium", "Both", "Sodium"],
        "options_hi": ["पारा", "गैलियम", "दोनों", "सोडियम"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the chemical formula of carbon dioxide?",
        "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CO₂", "CO", "C₂O", "C₂O₃"],
        "options_hi": ["CO₂", "CO", "C₂O", "C₂O₃"],
        "answer_en": "CO₂",
        "answer_hi": "CO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which part of the plant is modified into a potato tuber?",
        "question_hi": "पौधे का कौन सा भाग आलू कंद में परिवर्तित होता है?",
        "options_en": ["Stem", "Root", "Leaf", "Flower"],
        "options_hi": ["तना", "जड़", "पत्ती", "फूल"],
        "answer_en": "Stem",
        "answer_hi": "तना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the most abundant gas in Earth's atmosphere?",
        "question_hi": "पृथ्वी के वातावरण में सबसे प्रचुर गैस कौन सी है?",
        "options_en": ["Nitrogen", "Oxygen", "Argon", "Carbon dioxide"],
        "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "आर्गन", "कार्बन डाइऑक्साइड"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which gas is used in neon signs?",
        "question_hi": "नियॉन साइन में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Neon", "Argon", "Xenon", "Krypton"],
        "options_hi": ["नियॉन", "आर्गन", "जीनॉन", "क्रिप्टन"],
        "answer_en": "Neon",
        "answer_hi": "नियॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the melting point of ice?",
        "question_hi": "बर्फ का गलनांक क्या है?",
        "options_en": ["0°C", "-1°C", "1°C", "4°C"],
        "options_hi": ["0°C", "-1°C", "1°C", "4°C"],
        "answer_en": "0°C",
        "answer_hi": "0°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which planet is known as the Red Planet?",
        "question_hi": "किस ग्रह को लाल ग्रह कहा जाता है?",
        "options_en": ["Mars", "Venus", "Jupiter", "Saturn"],
        "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the chemical symbol for gold?",
        "question_hi": "सोने का रासायनिक प्रतीक क्या है?",
        "options_en": ["Au", "Ag", "Pb", "Fe"],
        "options_hi": ["Au", "Ag", "Pb", "Fe"],
        "answer_en": "Au",
        "answer_hi": "Au",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which vitamin deficiency causes night blindness?",
        "question_hi": "किस विटामिन की कमी से रतौंधी होती है?",
        "options_en": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन ए", "विटामिन बी12", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन ए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the unit of electric current?",
        "question_hi": "विद्युत धारा की इकाई क्या है?",
        "options_en": ["Ampere", "Volt", "Ohm", "Watt"],
        "options_hi": ["एम्पीयर", "वोल्ट", "ओम", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पीयर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which acid is present in vinegar?",
        "question_hi": "सिरका में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Acetic acid", "Citric acid", "Lactic acid", "Tartaric acid"],
        "options_hi": ["एसिटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल", "टार्टरिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the chemical formula of table salt?",
        "question_hi": "टेबल सॉल्ट का रासायनिक सूत्र क्या है?",
        "options_en": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "options_hi": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which is the largest moon in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे बड़ा चंद्रमा कौन सा है?",
        "options_en": ["Ganymede", "Titan", "Callisto", "Io"],
        "options_hi": ["गेनीमेड", "टाइटन", "कैलिस्टो", "आईओ"],
        "answer_en": "Ganymede",
        "answer_hi": "गेनीमेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the chemical symbol for silver?",
        "question_hi": "चांदी का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ag", "Au", "Al", "Ar"],
        "options_hi": ["Ag", "Au", "Al", "Ar"],
        "answer_en": "Ag",
        "answer_hi": "Ag",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which vitamin is essential for blood clotting?",
        "question_hi": "रक्त के थक्के बनाने के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin B12"],
        "options_hi": ["विटामिन K", "विटामिन सी", "विटामिन डी", "विटामिन बी12"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the unit of power?",
        "question_hi": "शक्ति की इकाई क्या है?",
        "options_en": ["Watt", "Joule", "Newton", "Pascal"],
        "options_hi": ["वाट", "जूल", "न्यूटन", "पास्कल"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which acid is present in lemons?",
        "question_hi": "नींबू में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Citric acid", "Ascorbic acid", "Both", "Malic acid"],
        "options_hi": ["साइट्रिक अम्ल", "एस्कॉर्बिक अम्ल", "दोनों", "मैलिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the chemical formula of water?",
        "question_hi": "पानी का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂O", "H₂O₂", "HO", "H₃O"],
        "options_hi": ["H₂O", "H₂O₂", "HO", "H₃O"],
        "answer_en": "H₂O",
        "answer_hi": "H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which planet is closest to the Sun?",
        "question_hi": "सूर्य के सबसे निकट कौन सा ग्रह है?",
        "options_en": ["Mercury", "Venus", "Earth", "Mars"],
        "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the chemical symbol for copper?",
        "question_hi": "तांबे का रासायनिक प्रतीक क्या है?",
        "options_en": ["Cu", "Co", "Cr", "Cd"],
        "options_hi": ["Cu", "Co", "Cr", "Cd"],
        "answer_en": "Cu",
        "answer_hi": "Cu",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which vitamin deficiency causes anemia?",
        "question_hi": "किस विटामिन की कमी से एनीमिया होता है?",
        "options_en": ["Vitamin B12", "Iron", "Both", "Vitamin C"],
        "options_hi": ["विटामिन बी12", "आयरन", "दोनों", "विटामिन सी"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the unit of energy?",
        "question_hi": "ऊर्जा की इकाई क्या है?",
        "options_en": ["Joule", "Calorie", "Both", "Watt"],
        "options_hi": ["जूल", "कैलोरी", "दोनों", "वाट"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which acid is used in car batteries?",
        "question_hi": "कार बैटरी में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Hydrochloric acid", "Nitric acid", "Phosphoric acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल", "फॉस्फोरिक अम्ल"],
        "answer_en": "Sulfuric acid",
        "answer_hi": "सल्फ्यूरिक अम्ल",
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
        "question_en": "Which moon has volcanic activity?",
        "question_hi": "किस चंद्रमा पर ज्वालामुखी गतिविधि है?",
        "options_en": ["Io", "Europa", "Titan", "Callisto"],
        "options_hi": ["आईओ", "यूरोपा", "टाइटन", "कैलिस्टो"],
        "answer_en": "Io",
        "answer_hi": "आईओ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the chemical symbol for iron?",
        "question_hi": "लोहे का रासायनिक प्रतीक क्या है?",
        "options_en": ["Fe", "Ir", "In", "I"],
        "options_hi": ["Fe", "Ir", "In", "I"],
        "answer_en": "Fe",
        "answer_hi": "Fe",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which vitamin is produced by sunlight on skin?",
        "question_hi": "त्वचा पर सूर्य के प्रकाश से कौन सा विटामिन उत्पन्न होता है?",
        "options_en": ["Vitamin D", "Vitamin C", "Vitamin K", "Vitamin A"],
        "options_hi": ["विटामिन डी", "विटामिन सी", "विटामिन K", "विटामिन ए"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the unit of frequency?",
        "question_hi": "आवृत्ति की इकाई क्या है?",
        "options_en": ["Hertz", "Decibel", "Watt", "Newton"],
        "options_hi": ["हर्ट्ज", "डेसिबल", "वाट", "न्यूटन"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which acid is used in food preservation?",
        "question_hi": "भोजन संरक्षण में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Benzoic acid", "Acetic acid", "Citric acid", "All of these"],
        "options_hi": ["बेंज़ोइक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the chemical formula of glucose?",
        "question_hi": "ग्लूकोज का रासायनिक सूत्र क्या है?",
        "options_en": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
        "options_hi": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
        "answer_en": "C₆H₁₂O₆",
        "answer_hi": "C₆H₁₂O₆",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which planet has the most rings?",
        "question_hi": "किस ग्रह के सबसे अधिक छल्ले हैं?",
        "options_en": ["Saturn", "Jupiter", "Uranus", "Neptune"],
        "options_hi": ["शनि", "बृहस्पति", "युरेनस", "नेपच्यून"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the chemical symbol for lead?",
        "question_hi": "सीसा का रासायनिक प्रतीक क्या है?",
        "options_en": ["Pb", "Pd", "Pt", "Po"],
        "options_hi": ["Pb", "Pd", "Pt", "Po"],
        "answer_en": "Pb",
        "answer_hi": "Pb",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which vitamin deficiency causes osteoporosis?",
        "question_hi": "किस विटामिन की कमी से ऑस्टियोपोरोसिस होता है?",
        "options_en": ["Vitamin D", "Calcium", "Both", "Vitamin C"],
        "options_hi": ["विटामिन डी", "कैल्शियम", "दोनों", "विटामिन सी"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the unit of resistance?",
        "question_hi": "प्रतिरोध की इकाई क्या है?",
        "options_en": ["Ohm", "Volt", "Ampere", "Watt"],
        "options_hi": ["ओम", "वोल्ट", "एम्पीयर", "वाट"],
        "answer_en": "Ohm",
        "answer_hi": "ओम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which acid is used in soft drinks?",
        "question_hi": "सॉफ्ट ड्रिंक्स में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Phosphoric acid", "Carbonic acid", "Both", "Citric acid"],
        "options_hi": ["फॉस्फोरिक अम्ल", "कार्बोनिक अम्ल", "दोनों", "साइट्रिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
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
        "num": 45,
        "question_en": "Which planet is known as the Morning Star?",
        "question_hi": "किस ग्रह को मॉर्निंग स्टार कहा जाता है?",
        "options_en": ["Venus", "Mercury", "Mars", "Jupiter"],
        "options_hi": ["शुक्र", "बुध", "मंगल", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the chemical symbol for potassium?",
        "question_hi": "पोटेशियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["K", "P", "Po", "Pt"],
        "options_hi": ["K", "P", "Po", "Pt"],
        "answer_en": "K",
        "answer_hi": "K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which vitamin deficiency causes bleeding gums?",
        "question_hi": "किस विटामिन की कमी से मसूड़ों से खून आता है?",
        "options_en": ["Vitamin C", "Vitamin K", "Vitamin B12", "Vitamin D"],
        "options_hi": ["विटामिन सी", "विटामिन K", "विटामिन बी12", "विटामिन डी"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन सी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the unit of pressure?",
        "question_hi": "दबाव की इकाई क्या है?",
        "options_en": ["Pascal", "Bar", "Atmosphere", "All of these"],
        "options_hi": ["पास्कल", "बार", "वायुमंडल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which acid is used in dye manufacturing?",
        "question_hi": "डाई निर्माण में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Nitric acid", "Both", "Hydrochloric acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "दोनों", "हाइड्रोक्लोरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the chemical formula of ozone?",
        "question_hi": "ओज़ोन का रासायनिक सूत्र क्या है?",
        "options_en": ["O₃", "O₂", "O₄", "O₅"],
        "options_hi": ["O₃", "O₂", "O₄", "O₅"],
        "answer_en": "O₃",
        "answer_hi": "O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which planet has the largest volcano?",
        "question_hi": "किस ग्रह पर सबसे बड़ा ज्वालामुखी है?",
        "options_en": ["Mars", "Venus", "Earth", "Mercury"],
        "options_hi": ["मंगल", "शुक्र", "पृथ्वी", "बुध"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the chemical symbol for sodium?",
        "question_hi": "सोडियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Na", "So", "Sd", "Nm"],
        "options_hi": ["Na", "So", "Sd", "Nm"],
        "answer_en": "Na",
        "answer_hi": "Na",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which vitamin is essential for vision?",
        "question_hi": "दृष्टि के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        "options_hi": ["विटामिन ए", "विटामिन सी", "विटामिन डी", "विटामिन K"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन ए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the unit of temperature?",
        "question_hi": "तापमान की इकाई क्या है?",
        "options_en": ["Kelvin", "Celsius", "Fahrenheit", "All of these"],
        "options_hi": ["केल्विन", "सेल्सियस", "फारेनहाइट", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which acid is used in fertilizer production?",
        "question_hi": "उर्वरक उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Nitric acid", "Phosphoric acid", "Sulfuric acid", "All of these"],
        "options_hi": ["नाइट्रिक अम्ल", "फॉस्फोरिक अम्ल", "सल्फ्यूरिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
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
        "num": 57,
        "question_en": "Which planet has the longest day?",
        "question_hi": "किस ग्रह का दिन सबसे लंबा है?",
        "options_en": ["Venus", "Mercury", "Mars", "Jupiter"],
        "options_hi": ["शुक्र", "बुध", "मंगल", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the chemical symbol for calcium?",
        "question_hi": "कैल्शियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ca", "Cl", "C", "Cu"],
        "options_hi": ["Ca", "Cl", "C", "Cu"],
        "answer_en": "Ca",
        "answer_hi": "Ca",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which vitamin deficiency causes dermatitis?",
        "question_hi": "किस विटामिन की कमी से डर्मेटाइटिस होता है?",
        "options_en": ["Vitamin B7", "Vitamin C", "Vitamin D", "Vitamin K"],
        "options_hi": ["विटामिन बी7", "विटामिन सी", "विटामिन डी", "विटामिन K"],
        "answer_en": "Vitamin B7",
        "answer_hi": "विटामिन बी7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the unit of luminous flux?",
        "question_hi": "दीप्त फ्लक्स की इकाई क्या है?",
        "options_en": ["Lumen", "Lux", "Candela", "Watt"],
        "options_hi": ["ल्यूमेन", "लक्स", "कैंडेला", "वाट"],
        "answer_en": "Lumen",
        "answer_hi": "ल्यूमेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which acid is used in textile industry?",
        "question_hi": "टेक्सटाइल उद्योग में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetic acid", "Formic acid", "Both", "Sulfuric acid"],
        "options_hi": ["एसिटिक अम्ल", "फॉर्मिक अम्ल", "दोनों", "सल्फ्यूरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the chemical formula of nitric acid?",
        "question_hi": "नाइट्रिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["HNO₃", "HNO₂", "H₂NO₃", "H₃NO₄"],
        "options_hi": ["HNO₃", "HNO₂", "H₂NO₃", "H₃NO₄"],
        "answer_en": "HNO₃",
        "answer_hi": "HNO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which moon has subsurface ocean?",
        "question_hi": "किस चंद्रमा के नीचे समुद्र है?",
        "options_en": ["Europa", "Ganymede", "Callisto", "All of these"],
        "options_hi": ["यूरोपा", "गेनीमेड", "कैलिस्टो", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the chemical symbol for magnesium?",
        "question_hi": "मैग्नीशियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Mg", "Mn", "M", "Ma"],
        "options_hi": ["Mg", "Mn", "M", "Ma"],
        "answer_en": "Mg",
        "answer_hi": "Mg",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
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
        "num": 66,
        "question_en": "What is the unit of electric potential?",
        "question_hi": "विद्युत विभव की इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पीयर", "ओम", "वाट"],
        "answer_en": "Volt",
        "answer_hi": "वोल्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which acid is used in leather tanning?",
        "question_hi": "चमड़ा टैनिंग में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Tannic acid", "Formic acid", "Both", "Acetic acid"],
        "options_hi": ["टैनिक अम्ल", "फॉर्मिक अम्ल", "दोनों", "एसिटिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the chemical formula of hydrochloric acid?",
        "question_hi": "हाइड्रोक्लोरिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["HCl", "H₂Cl", "HClO", "HClO₃"],
        "options_hi": ["HCl", "H₂Cl", "HClO", "HClO₃"],
        "answer_en": "HCl",
        "answer_hi": "HCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which planet has the Great Dark Spot?",
        "question_hi": "किस ग्रह पर ग्रेट डार्क स्पॉट है?",
        "options_en": ["Neptune", "Uranus", "Saturn", "Jupiter"],
        "options_hi": ["नेपच्यून", "युरेनस", "शनि", "बृहस्पति"],
        "answer_en": "Neptune",
        "answer_hi": "नेपच्यून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the chemical symbol for zinc?",
        "question_hi": "जिंक का रासायनिक प्रतीक क्या है?",
        "options_en": ["Zn", "Zi", "Z", "Zr"],
        "options_hi": ["Zn", "Zi", "Z", "Zr"],
        "answer_en": "Zn",
        "answer_hi": "Zn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
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
        "num": 72,
        "question_en": "What is the unit of magnetic flux density?",
        "question_hi": "चुंबकीय फ्लक्स घनत्व की इकाई क्या है?",
        "options_en": ["Tesla", "Gauss", "Both", "Weber"],
        "options_hi": ["टेस्ला", "गॉस", "दोनों", "वेबर"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which acid is used in pharmaceutical industry?",
        "question_hi": "फार्मास्युटिकल उद्योग में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetylsalicylic acid", "Citric acid", "Both", "Tartaric acid"],
        "options_hi": ["एसिटाइलसैलिसिलिक अम्ल", "साइट्रिक अम्ल", "दोनों", "टार्टरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the chemical formula of phosphoric acid?",
        "question_hi": "फॉस्फोरिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["H₃PO₄", "H₃PO₃", "H₃PO₂", "HPO₃"],
        "options_hi": ["H₃PO₄", "H₃PO₃", "H₃PO₂", "HPO₃"],
        "answer_en": "H₃PO₄",
        "answer_hi": "H₃PO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which moon orbits Uranus backwards?",
        "question_hi": "कौन सा चंद्रमा युरेनस की विपरीत दिशा में चक्कर लगाता है?",
        "options_en": ["Triton", "Miranda", "Ariel", "Oberon"],
        "options_hi": ["ट्राइटन", "मिरांडा", "एरियल", "ओबेरॉन"],
        "answer_en": "Triton",
        "answer_hi": "ट्राइटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the chemical symbol for nickel?",
        "question_hi": "निकल का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ni", "N", "Nk", "Ne"],
        "options_hi": ["Ni", "N", "Nk", "Ne"],
        "answer_en": "Ni",
        "answer_hi": "Ni",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which vitamin deficiency causes pernicious anemia?",
        "question_hi": "किस विटामिन की कमी से पर्निशियस एनीमिया होता है?",
        "options_en": ["Vitamin B12", "Iron", "Folic acid", "Vitamin C"],
        "options_hi": ["विटामिन बी12", "आयरन", "फोलिक अम्ल", "विटामिन सी"],
        "answer_en": "Vitamin B12",
        "answer_hi": "विटामिन बी12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the unit of work?",
        "question_hi": "कार्य की इकाई क्या है?",
        "options_en": ["Joule", "Newton-meter", "Both", "Watt-second"],
        "options_hi": ["जूल", "न्यूटन-मीटर", "दोनों", "वाट-सेकंड"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which acid is used in photography?",
        "question_hi": "फोटोग्राफी में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetic acid", "Hydrochloric acid", "Sulfuric acid", "Nitric acid"],
        "options_hi": ["एसिटिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the chemical formula of acetic acid?",
        "question_hi": "एसिटिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₃COOH", "HCOOH", "C₆H₈O₇", "C₄H₆O₆"],
        "options_hi": ["CH₃COOH", "HCOOH", "C₆H₈O₇", "C₄H₆O₆"],
        "answer_en": "CH₃COOH",
        "answer_hi": "CH₃COOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which planet has water ice clouds?",
        "question_hi": "किस ग्रह पर पानी की बर्फ के बादल हैं?",
        "options_en": ["Mars", "Venus", "Jupiter", "Saturn"],
        "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the chemical symbol for tin?",
        "question_hi": "टिन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Sn", "Ti", "Tn", "T"],
        "options_hi": ["Sn", "Ti", "Tn", "T"],
        "answer_en": "Sn",
        "answer_hi": "Sn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which vitamin deficiency causes hair loss?",
        "question_hi": "किस विटामिन की कमी से बाल झड़ते हैं?",
        "options_en": ["Biotin", "Zinc", "Both", "Vitamin C"],
        "options_hi": ["बायोटिन", "जिंक", "दोनों", "विटामिन सी"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the unit of capacitance?",
        "question_hi": "धारिता की इकाई क्या है?",
        "options_en": ["Farad", "Henry", "Ohm", "Siemens"],
        "options_hi": ["फैरड", "हेनरी", "ओम", "सीमेंस"],
        "answer_en": "Farad",
        "answer_hi": "फैरड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which acid is used in cleaning metals?",
        "question_hi": "धातुओं की सफाई में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Hydrochloric acid", "Nitric acid", "Both", "Sulfuric acid"],
        "options_hi": ["हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल", "दोनों", "सल्फ्यूरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the chemical formula of carbon monoxide?",
        "question_hi": "कार्बन मोनोऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CO", "CO₂", "C₂O", "C₃O₂"],
        "options_hi": ["CO", "CO₂", "C₂O", "C₃O₂"],
        "answer_en": "CO",
        "answer_hi": "CO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which moon has nitrogen atmosphere?",
        "question_hi": "किस चंद्रमा पर नाइट्रोजन वातावरण है?",
        "options_en": ["Titan", "Triton", "Both", "Europa"],
        "options_hi": ["टाइटन", "ट्राइटन", "दोनों", "यूरोपा"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the chemical symbol for mercury?",
        "question_hi": "पारे का रासायनिक प्रतीक क्या है?",
        "options_en": ["Hg", "Me", "Mr", "My"],
        "options_hi": ["Hg", "Me", "Mr", "My"],
        "answer_en": "Hg",
        "answer_hi": "Hg",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which vitamin deficiency causes muscle weakness?",
        "question_hi": "किस विटामिन की कमी से मांसपेशियों की कमजोरी होती है?",
        "options_en": ["Vitamin D", "Vitamin E", "Both", "Vitamin C"],
        "options_hi": ["विटामिन डी", "विटामिन ई", "दोनों", "विटामिन सी"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
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
        "num": 91,
        "question_en": "Which acid is used in food flavoring?",
        "question_hi": "भोजन के स्वाद के लिए किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Citric acid", "Malic acid", "Tartaric acid", "All of these"],
        "options_hi": ["साइट्रिक अम्ल", "मैलिक अम्ल", "टार्टरिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the chemical formula of hydrogen peroxide?",
        "question_hi": "हाइड्रोजन पेरोक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂O₂", "H₂O", "HO₂", "H₃O₂"],
        "options_hi": ["H₂O₂", "H₂O", "HO₂", "H₃O₂"],
        "answer_en": "H₂O₂",
        "answer_hi": "H₂O₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which planet has diamond rain?",
        "question_hi": "किस ग्रह पर हीरों की बारिश होती है?",
        "options_en": ["Uranus", "Neptune", "Both", "Saturn"],
        "options_hi": ["युरेनस", "नेपच्यून", "दोनों", "शनि"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the chemical symbol for aluminum?",
        "question_hi": "एल्युमिनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Al", "Am", "Au", "Ag"],
        "options_hi": ["Al", "Am", "Au", "Ag"],
        "answer_en": "Al",
        "answer_hi": "Al",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which vitamin deficiency causes memory loss?",
        "question_hi": "किस विटामिन की कमी से स्मृति हानि होती है?",
        "options_en": ["Vitamin B12", "Vitamin B1", "Both", "Vitamin C"],
        "options_hi": ["विटामिन बी12", "विटामिन बी1", "दोनों", "विटामिन सी"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
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
        "num": 97,
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
        "num": 98,
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
        "num": 99,
        "question_en": "Which planet has hexagonal storm?",
        "question_hi": "किस ग्रह पर षट्भुजाकार तूफान है?",
        "options_en": ["Saturn", "Jupiter", "Neptune", "Uranus"],
        "options_hi": ["शनि", "बृहस्पति", "नेपच्यून", "युरेनस"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the chemical symbol for silicon?",
        "question_hi": "सिलिकॉन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Si", "Sl", "Sn", "Sc"],
        "options_hi": ["Si", "Sl", "Sn", "Sc"],
        "answer_en": "Si",
        "answer_hi": "Si",
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