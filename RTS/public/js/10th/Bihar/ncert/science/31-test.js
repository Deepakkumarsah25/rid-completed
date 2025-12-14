const questions = [
    {
        "num": 1,
        "question_en": "Which instrument is used to measure rainfall?",
        "question_hi": "वर्षा मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Rain gauge", "Hygrometer", "Barometer", "Anemometer"],
        "options_hi": ["वर्षामापी", "आर्द्रतामापी", "बैरोमीटर", "पवनवेगमापी"],
        "answer_en": "Rain gauge",
        "answer_hi": "वर्षामापी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the chemical formula of potassium nitrate?",
        "question_hi": "पोटेशियम नाइट्रेट का रासायनिक सूत्र क्या है?",
        "options_en": ["KNO₃", "KNO₂", "K₂NO₃", "K₃NO₄"],
        "options_hi": ["KNO₃", "KNO₂", "K₂NO₃", "K₃NO₄"],
        "answer_en": "KNO₃",
        "answer_hi": "KNO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Who discovered the radioactive elements polonium and radium?",
        "question_hi": "रेडियोधर्मी तत्व पोलोनियम और रेडियम की खोज किसने की?",
        "options_en": ["Marie Curie", "Pierre Curie", "Both", "Henri Becquerel"],
        "options_hi": ["मैरी क्यूरी", "पियरे क्यूरी", "दोनों", "हेनरी बेकरेल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the main component of gobar gas?",
        "question_hi": "गोबर गैस का मुख्य घटक क्या है?",
        "options_en": ["Methane", "Carbon dioxide", "Hydrogen", "Ammonia"],
        "options_hi": ["मीथेन", "कार्बन डाइऑक्साइड", "हाइड्रोजन", "अमोनिया"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which gland produces growth hormone?",
        "question_hi": "वृद्धि हार्मोन कौन सी ग्रंथि उत्पन्न करती है?",
        "options_en": ["Pituitary gland", "Thyroid gland", "Adrenal gland", "Pancreas"],
        "options_hi": ["पिट्यूटरी ग्रंथि", "थायरॉयड ग्रंथि", "अधिवृक्क ग्रंथि", "अग्न्याशय"],
        "answer_en": "Pituitary gland",
        "answer_hi": "पिट्यूटरी ग्रंथि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the chemical name of caustic potash?",
        "question_hi": "कास्टिक पोटाश का रासायनिक नाम क्या है?",
        "options_en": ["Potassium hydroxide", "Potassium carbonate", "Potassium chloride", "Potassium sulfate"],
        "options_hi": ["पोटेशियम हाइड्रॉक्साइड", "पोटेशियम कार्बोनेट", "पोटेशियम क्लोराइड", "पोटेशियम सल्फेट"],
        "answer_en": "Potassium hydroxide",
        "answer_hi": "पोटेशियम हाइड्रॉक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which vitamin is also known as pyridoxine?",
        "question_hi": "किस विटामिन को पाइरिडोक्सिन भी कहा जाता है?",
        "options_en": ["Vitamin B6", "Vitamin B12", "Vitamin B1", "Vitamin B2"],
        "options_hi": ["विटामिन बी6", "विटामिन बी12", "विटामिन बी1", "विटामिन बी2"],
        "answer_en": "Vitamin B6",
        "answer_hi": "विटामिन बी6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the SI unit of electric current?",
        "question_hi": "विद्युत धारा की SI इकाई क्या है?",
        "options_en": ["Ampere", "Volt", "Ohm", "Watt"],
        "options_hi": ["एम्पीयर", "वोल्ट", "ओम", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पीयर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which metal is used in making surgical instruments?",
        "question_hi": "सर्जिकल उपकरण बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Stainless steel", "Titanium", "Both", "Silver"],
        "options_hi": ["स्टेनलेस स्टील", "टाइटेनियम", "दोनों", "चांदी"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the chemical formula of sodium carbonate?",
        "question_hi": "सोडियम कार्बोनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["Na₂CO₃", "NaHCO₃", "NaOH", "Na₂SO₄"],
        "options_hi": ["Na₂CO₃", "NaHCO₃", "NaOH", "Na₂SO₄"],
        "answer_en": "Na₂CO₃",
        "answer_hi": "Na₂CO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which part of the plant is modified into sweet potato?",
        "question_hi": "पौधे का कौन सा भाग शकरकंद में परिवर्तित होता है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
        "answer_en": "Root",
        "answer_hi": "जड़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the most abundant element in the human body?",
        "question_hi": "मानव शरीर में सबसे प्रचुर तत्व कौन सा है?",
        "options_en": ["Oxygen", "Carbon", "Hydrogen", "Nitrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन", "हाइड्रोजन", "नाइट्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which gas is used in light bulbs?",
        "question_hi": "लाइट बल्ब में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Argon", "Nitrogen", "Both", "Neon"],
        "options_hi": ["आर्गन", "नाइट्रोजन", "दोनों", "नियॉन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the melting point of tungsten?",
        "question_hi": "टंगस्टन का गलनांक क्या है?",
        "options_en": ["3422°C", "3370°C", "3500°C", "3300°C"],
        "options_hi": ["3422°C", "3370°C", "3500°C", "3300°C"],
        "answer_en": "3422°C",
        "answer_hi": "3422°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which planet is known as the Ice Giant?",
        "question_hi": "किस ग्रह को बर्फ दानव कहा जाता है?",
        "options_en": ["Uranus", "Neptune", "Both", "Saturn"],
        "options_hi": ["युरेनस", "नेपच्यून", "दोनों", "शनि"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the chemical symbol for arsenic?",
        "question_hi": "आर्सेनिक का रासायनिक प्रतीक क्या है?",
        "options_en": ["As", "Ar", "Ac", "An"],
        "options_hi": ["As", "Ar", "Ac", "An"],
        "answer_en": "As",
        "answer_hi": "As",
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
        "question_en": "Which acid is present in sour milk?",
        "question_hi": "खट्टे दूध में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Lactic acid", "Acetic acid", "Citric acid", "Tartaric acid"],
        "options_hi": ["लैक्टिक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "टार्टरिक अम्ल"],
        "answer_en": "Lactic acid",
        "answer_hi": "लैक्टिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
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
        "num": 21,
        "question_en": "Which moon has the highest volcanic activity?",
        "question_hi": "किस चंद्रमा पर सबसे अधिक ज्वालामुखी गतिविधि है?",
        "options_en": ["Io", "Europa", "Titan", "Enceladus"],
        "options_hi": ["आईओ", "यूरोपा", "टाइटन", "एन्सेलेडस"],
        "answer_en": "Io",
        "answer_hi": "आईओ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the chemical symbol for bromine?",
        "question_hi": "ब्रोमीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Br", "Bm", "Bn", "Be"],
        "options_hi": ["Br", "Bm", "Bn", "Be"],
        "answer_en": "Br",
        "answer_hi": "Br",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which vitamin is essential for collagen synthesis?",
        "question_hi": "कोलेजन संश्लेषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin C", "Vitamin K", "Vitamin D", "Vitamin B12"],
        "options_hi": ["विटामिन सी", "विटामिन K", "विटामिन डी", "विटामिन बी12"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन सी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
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
        "num": 25,
        "question_en": "Which acid is used in the production of fertilizers?",
        "question_hi": "उर्वरक उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Phosphoric acid", "Nitric acid", "Sulfuric acid", "All of these"],
        "options_hi": ["फॉस्फोरिक अम्ल", "नाइट्रिक अम्ल", "सल्फ्यूरिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the chemical formula of calcium sulfate?",
        "question_hi": "कैल्शियम सल्फेट का रासायनिक सूत्र क्या है?",
        "options_en": ["CaSO₄", "CaSO₃", "CaS", "Ca(SO₄)₂"],
        "options_hi": ["CaSO₄", "CaSO₃", "CaS", "Ca(SO₄)₂"],
        "answer_en": "CaSO₄",
        "answer_hi": "CaSO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which planet has the most extreme axial tilt?",
        "question_hi": "किस ग्रह का अक्षीय झुकाव सबसे चरम है?",
        "options_en": ["Uranus", "Venus", "Earth", "Mars"],
        "options_hi": ["युरेनस", "शुक्र", "पृथ्वी", "मंगल"],
        "answer_en": "Uranus",
        "answer_hi": "युरेनस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the chemical symbol for chlorine?",
        "question_hi": "क्लोरीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Cl", "Ch", "Cr", "Cn"],
        "options_hi": ["Cl", "Ch", "Cr", "Cn"],
        "answer_en": "Cl",
        "answer_hi": "Cl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
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
        "num": 30,
        "question_en": "What is the unit of angular momentum?",
        "question_hi": "कोणीय संवेग की इकाई क्या है?",
        "options_en": ["kg·m²/s", "Joule-second", "Both", "Newton-meter-second"],
        "options_hi": ["किग्रा·मीटर²/सेकंड", "जूल-सेकंड", "दोनों", "न्यूटन-मीटर-सेकंड"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which acid is used in the production of detergents?",
        "question_hi": "डिटर्जेंट उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfonic acid", "Phosphoric acid", "Both", "Hydrochloric acid"],
        "options_hi": ["सल्फोनिक अम्ल", "फॉस्फोरिक अम्ल", "दोनों", "हाइड्रोक्लोरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the chemical formula of ammonium chloride?",
        "question_hi": "अमोनियम क्लोराइड का रासायनिक सूत्र क्या है?",
        "options_en": ["NH₄Cl", "NH₃Cl", "NH₂Cl", "N₂H₄Cl"],
        "options_hi": ["NH₄Cl", "NH₃Cl", "NH₂Cl", "N₂H₄Cl"],
        "answer_en": "NH₄Cl",
        "answer_hi": "NH₄Cl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which moon has the most elliptical orbit?",
        "question_hi": "किस चंद्रमा की कक्षा सबसे दीर्घवृत्ताकार है?",
        "options_en": ["Nereid", "Triton", "Titan", "Ganymede"],
        "options_hi": ["नेरीड", "ट्राइटन", "टाइटन", "गेनीमेड"],
        "answer_en": "Nereid",
        "answer_hi": "नेरीड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the chemical symbol for fluorine?",
        "question_hi": "फ्लोरीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["F", "Fl", "Fo", "Fe"],
        "options_hi": ["F", "Fl", "Fo", "Fe"],
        "answer_en": "F",
        "answer_hi": "F",
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
        "question_en": "What is the unit of thermal conductivity?",
        "question_hi": "तापीय चालकता की इकाई क्या है?",
        "options_en": ["Watt/meter·K", "Calorie/cm·s·°C", "Both", "Joule/m·s·K"],
        "options_hi": ["वाट/मीटर·केल्विन", "कैलोरी/सेमी·सेकंड·°C", "दोनों", "जूल/मीटर·सेकंड·केल्विन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which acid is used in the production of paper?",
        "question_hi": "कागज उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Hydrochloric acid", "Both", "Nitric acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "दोनों", "नाइट्रिक अम्ल"],
        "answer_en": "Sulfuric acid",
        "answer_hi": "सल्फ्यूरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the chemical formula of magnesium hydroxide?",
        "question_hi": "मैग्नीशियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["Mg(OH)₂", "MgO", "MgCO₃", "MgSO₄"],
        "options_hi": ["Mg(OH)₂", "MgO", "MgCO₃", "MgSO₄"],
        "answer_en": "Mg(OH)₂",
        "answer_hi": "Mg(OH)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which planet has the fastest orbital velocity?",
        "question_hi": "किस ग्रह की कक्षीय गति सबसे तेज है?",
        "options_en": ["Mercury", "Venus", "Earth", "Mars"],
        "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the chemical symbol for helium?",
        "question_hi": "हीलियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["He", "Hl", "Hm", "Hy"],
        "options_hi": ["He", "Hl", "Hm", "Hy"],
        "answer_en": "He",
        "answer_hi": "He",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
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
        "num": 42,
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
        "num": 43,
        "question_en": "Which acid is used in the production of rayon?",
        "question_hi": "रेयॉन उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetic acid", "Sulfuric acid", "Both", "Nitric acid"],
        "options_hi": ["एसिटिक अम्ल", "सल्फ्यूरिक अम्ल", "दोनों", "नाइट्रिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the chemical formula of sodium thiosulfate?",
        "question_hi": "सोडियम थायोसल्फेट का रासायनिक सूत्र क्या है?",
        "options_en": ["Na₂S₂O₃", "Na₂SO₄", "Na₂SO₃", "Na₂S"],
        "options_hi": ["Na₂S₂O₃", "Na₂SO₄", "Na₂SO₃", "Na₂S"],
        "answer_en": "Na₂S₂O₃",
        "answer_hi": "Na₂S₂O₃",
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
        "num": 47,
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
        "num": 48,
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
        "num": 49,
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
        "num": 50,
        "question_en": "What is the chemical formula of potassium chloride?",
        "question_hi": "पोटेशियम क्लोराइड का रासायनिक सूत्र क्या है?",
        "options_en": ["KCl", "KClO₃", "KClO₄", "K₂Cl"],
        "options_hi": ["KCl", "KClO₃", "KClO₄", "K₂Cl"],
        "answer_en": "KCl",
        "answer_hi": "KCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which planet has the most intense radiation belts?",
        "question_hi": "किस ग्रह पर सबसे तीव्र विकिरण बेल्ट हैं?",
        "options_en": ["Jupiter", "Saturn", "Earth", "Mercury"],
        "options_hi": ["बृहस्पति", "शनि", "पृथ्वी", "बुध"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the chemical symbol for krypton?",
        "question_hi": "क्रिप्टन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Kr", "Kp", "Kn", "Ky"],
        "options_hi": ["Kr", "Kp", "Kn", "Ky"],
        "answer_en": "Kr",
        "answer_hi": "Kr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
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
        "num": 54,
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
        "num": 55,
        "question_en": "Which acid is used in the production of pharmaceuticals?",
        "question_hi": "फार्मास्यूटिकल उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetylsalicylic acid", "Ascorbic acid", "Both", "Citric acid"],
        "options_hi": ["एसिटाइलसैलिसिलिक अम्ल", "एस्कॉर्बिक अम्ल", "दोनों", "साइट्रिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
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
        "num": 57,
        "question_en": "Which planet has the most tilted rotation axis?",
        "question_hi": "किस ग्रह का घूर्णन अक्ष सबसे अधिक झुका हुआ है?",
        "options_en": ["Uranus", "Venus", "Earth", "Mars"],
        "options_hi": ["युरेनस", "शुक्र", "पृथ्वी", "मंगल"],
        "answer_en": "Uranus",
        "answer_hi": "युरेनस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
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
        "num": 59,
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
        "num": 62,
        "question_en": "What is the chemical formula of sodium acetate?",
        "question_hi": "सोडियम एसीटेट का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₃COONa", "Na₂CO₃", "NaHCO₃", "NaOH"],
        "options_hi": ["CH₃COONa", "Na₂CO₃", "NaHCO₃", "NaOH"],
        "answer_en": "CH₃COONa",
        "answer_hi": "CH₃COONa",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which moon has the most circular orbit around its planet?",
        "question_hi": "कौन सा चंद्रमा अपने ग्रह के चारों ओर सबसे वृत्ताकार कक्षा में है?",
        "options_en": ["Moon (Earth's)", "Titan", "Ganymede", "Callisto"],
        "options_hi": ["चंद्रमा (पृथ्वी का)", "टाइटन", "गेनीमेड", "कैलिस्टो"],
        "answer_en": "Moon (Earth's)",
        "answer_hi": "चंद्रमा (पृथ्वी का)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the chemical symbol for xenon?",
        "question_hi": "जीनॉन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Xe", "Xn", "X", "Xo"],
        "options_hi": ["Xe", "Xn", "X", "Xo"],
        "answer_en": "Xe",
        "answer_hi": "Xe",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
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
        "num": 66,
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
        "num": 67,
        "question_en": "Which acid is used in the production of synthetic rubber?",
        "question_hi": "सिंथेटिक रबर उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Styrene acid", "Acrylic acid", "Both", "Formic acid"],
        "options_hi": ["स्टाइरीन अम्ल", "एक्रिलिक अम्ल", "दोनों", "फॉर्मिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the chemical formula of ammonium nitrate?",
        "question_hi": "अमोनियम नाइट्रेट का रासायनिक सूत्र क्या है?",
        "options_en": ["NH₄NO₃", "NH₄NO₂", "N₂H₄NO₃", "NH₃NO₃"],
        "options_hi": ["NH₄NO₃", "NH₄NO₂", "N₂H₄NO₃", "NH₃NO₃"],
        "answer_en": "NH₄NO₃",
        "answer_hi": "NH₄NO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which planet has the most powerful magnetic field?",
        "question_hi": "किस ग्रह का चुंबकीय क्षेत्र सबसे शक्तिशाली है?",
        "options_en": ["Jupiter", "Saturn", "Earth", "Mercury"],
        "options_hi": ["बृहस्पति", "शनि", "पृथ्वी", "बुध"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
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
        "num": 71,
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
        "num": 72,
        "question_en": "What is the unit of thermal expansion coefficient?",
        "question_hi": "तापीय प्रसार गुणांक की इकाई क्या है?",
        "options_en": ["/K", "/°C", "Both", "m/K"],
        "options_hi": ["/केल्विन", "/°C", "दोनों", "मीटर/केल्विन"],
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
        "question_en": "What is the chemical formula of potassium bromide?",
        "question_hi": "पोटेशियम ब्रोमाइड का रासायनिक सूत्र क्या है?",
        "options_en": ["KBr", "KBrO₃", "KBrO₄", "K₂Br"],
        "options_hi": ["KBr", "KBrO₃", "KBrO₄", "K₂Br"],
        "answer_en": "KBr",
        "answer_hi": "KBr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
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
        "num": 76,
        "question_en": "What is the chemical symbol for cesium?",
        "question_hi": "सीज़ियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Cs", "Ce", "Cm", "Ci"],
        "options_hi": ["Cs", "Ce", "Cm", "Ci"],
        "answer_en": "Cs",
        "answer_hi": "Cs",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
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
        "num": 78,
        "question_en": "What is the unit of electric dipole moment?",
        "question_hi": "विद्युत द्विध्रुव आघूर्ण की इकाई क्या है?",
        "options_en": ["Coulomb-meter", "Debye", "Both", "Ampere-meter²"],
        "options_hi": ["कूलॉम-मीटर", "डेबाई", "दोनों", "एम्पीयर-मीटर²"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which acid is used in the production of food preservatives?",
        "question_hi": "खाद्य संरक्षक उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Benzoic acid", "Sorbic acid", "Both", "Acetic acid"],
        "options_hi": ["बेंज़ोइक अम्ल", "सोर्बिक अम्ल", "दोनों", "एसिटिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the chemical formula of sodium phosphate?",
        "question_hi": "सोडियम फॉस्फेट का रासायनिक सूत्र क्या है?",
        "options_en": ["Na₃PO₄", "Na₂HPO₄", "NaH₂PO₄", "All of these"],
        "options_hi": ["Na₃PO₄", "Na₂HPO₄", "NaH₂PO₄", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which planet has the most intense auroras?",
        "question_hi": "किस ग्रह पर सबसे तीव्र ऑरोरा हैं?",
        "options_en": ["Jupiter", "Saturn", "Both", "Earth"],
        "options_hi": ["बृहस्पति", "शनि", "दोनों", "पृथ्वी"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
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
        "num": 83,
        "question_en": "Which vitamin deficiency causes metabolic acidosis?",
        "question_hi": "किस विटामिन की कमी से मेटाबोलिक एसिडोसिस होता है?",
        "options_en": ["Biotin", "Vitamin D", "Thiamine", "All of these"],
        "options_hi": ["बायोटिन", "विटामिन डी", "थायमिन", "ये सभी"],
        "answer_en": "Biotin",
        "answer_hi": "बायोटिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the unit of compressibility?",
        "question_hi": "संपीड्यता की इकाई क्या है?",
        "options_en": ["/Pascal", "1/Atmosphere", "Both", "m²/N"],
        "options_hi": ["/पास्कल", "1/वायुमंडल", "दोनों", "मीटर²/न्यूटन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
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
        "num": 86,
        "question_en": "What is the chemical formula of magnesium chloride?",
        "question_hi": "मैग्नीशियम क्लोराइड का रासायनिक सूत्र क्या है?",
        "options_en": ["MgCl₂", "MgCl", "Mg₂Cl", "MgCl₃"],
        "options_hi": ["MgCl₂", "MgCl", "Mg₂Cl", "MgCl₃"],
        "answer_en": "MgCl₂",
        "answer_hi": "MgCl₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which moon has the most irregular shape?",
        "question_hi": "किस चंद्रमा का आकार सबसे अनियमित है?",
        "options_en": ["Hyperion", "Phobos", "Deimos", "All of these"],
        "options_hi": ["हाइपेरियन", "फोबोस", "डीमोस", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
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
        "num": 89,
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
        "num": 90,
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
        "num": 91,
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
        "num": 92,
        "question_en": "What is the chemical formula of potassium iodide?",
        "question_hi": "पोटेशियम आयोडाइड का रासायनिक सूत्र क्या है?",
        "options_en": ["KI", "KIO₃", "KIO₄", "K₂I"],
        "options_hi": ["KI", "KIO₃", "KIO₄", "K₂I"],
        "answer_en": "KI",
        "answer_hi": "KI",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which planet has the most ring systems?",
        "question_hi": "किस ग्रह के सबसे अधिक वलय प्रणाली हैं?",
        "options_en": ["Saturn", "Jupiter", "Uranus", "Neptune"],
        "options_hi": ["शनि", "बृहस्पति", "युरेनस", "नेपच्यून"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
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
        "num": 95,
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
        "num": 96,
        "question_en": "What is the unit of specific volume?",
        "question_hi": "विशिष्ट आयतन की इकाई क्या है?",
        "options_en": ["m³/kg", "cm³/g", "Both", "L/kg"],
        "options_hi": ["मीटर³/किग्रा", "सेमी³/ग्राम", "दोनों", "लीटर/किग्रा"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
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
        "num": 98,
        "question_en": "What is the chemical formula of calcium carbonate?",
        "question_hi": "कैल्शियम कार्बोनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["CaCO₃", "CaO", "Ca(OH)₂", "CaSO₄"],
        "options_hi": ["CaCO₃", "CaO", "Ca(OH)₂", "CaSO₄"],
        "answer_en": "CaCO₃",
        "answer_hi": "CaCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which moon has the most extensive canyon system?",
        "question_hi": "किस चंद्रमा पर सबसे व्यापक घाटी प्रणाली है?",
        "options_en": ["Miranda", "Tethys", "Io", "Ganymede"],
        "options_hi": ["मिरांडा", "टेथिस", "आईओ", "गेनीमेड"],
        "answer_en": "Miranda",
        "answer_hi": "मिरांडा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the chemical symbol for lithium?",
        "question_hi": "लिथियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Li", "Lt", "Lm", "Lh"],
        "options_hi": ["Li", "Lt", "Lm", "Lh"],
        "answer_en": "Li",
        "answer_hi": "Li",
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