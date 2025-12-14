const questions = [
    {
        "num": 1,
        "question_en": "Which gas is used in fluorescent tubes?",
        "question_hi": "फ्लोरोसेंट ट्यूबों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Neon", "Argon", "Xenon", "Mercury vapor"],
        "options_hi": ["नियॉन", "आर्गन", "जेनॉन", "पारा वाष्प"],
        "answer_en": "Mercury vapor",
        "answer_hi": "पारा वाष्प",
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
        "question_en": "Which scientist discovered penicillin?",
        "question_hi": "किस वैज्ञानिक ने पेनिसिलिन की खोज की?",
        "options_en": ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister"],
        "options_hi": ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "रॉबर्ट कोच", "जोसेफ लिस्टर"],
        "answer_en": "Alexander Fleming",
        "answer_hi": "अलेक्जेंडर फ्लेमिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the main component of LPG?",
        "question_hi": "एलपीजी का मुख्य घटक क्या है?",
        "options_en": ["Methane", "Propane", "Butane", "Ethane"],
        "options_hi": ["मीथेन", "प्रोपेन", "ब्यूटेन", "ईथेन"],
        "answer_en": "Butane",
        "answer_hi": "ब्यूटेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which gland controls body temperature?",
        "question_hi": "कौन सी ग्रंथि शरीर के तापमान को नियंत्रित करती है?",
        "options_en": ["Thyroid", "Hypothalamus", "Pituitary", "Adrenal"],
        "options_hi": ["थायरॉयड", "हाइपोथैलेमस", "पिट्यूटरी", "अधिवृक्क"],
        "answer_en": "Hypothalamus",
        "answer_hi": "हाइपोथैलेमस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the chemical name of dry ice?",
        "question_hi": "ड्राई आइस का रासायनिक नाम क्या है?",
        "options_en": ["Solid carbon dioxide", "Solid oxygen", "Solid nitrogen", "Solid methane"],
        "options_hi": ["ठोस कार्बन डाइऑक्साइड", "ठोस ऑक्सीजन", "ठोस नाइट्रोजन", "ठोस मीथेन"],
        "answer_en": "Solid carbon dioxide",
        "answer_hi": "ठोस कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which vitamin is also called phylloquinone?",
        "question_hi": "किस विटामिन को फाइलोक्विनोन भी कहा जाता है?",
        "options_en": ["Vitamin K1", "Vitamin K2", "Vitamin E", "Vitamin A"],
        "options_hi": ["विटामिन K1", "विटामिन K2", "विटामिन ई", "विटामिन ए"],
        "answer_en": "Vitamin K1",
        "answer_hi": "विटामिन K1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the SI unit of luminous flux?",
        "question_hi": "ज्योति फ्लक्स की SI इकाई क्या है?",
        "options_en": ["Lumen", "Candela", "Lux", "Watt"],
        "options_hi": ["ल्यूमेन", "कैंडेला", "लक्स", "वाट"],
        "answer_en": "Lumen",
        "answer_hi": "ल्यूमेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which metal is used in galvanization?",
        "question_hi": "गैल्वनीकरण में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Zinc", "Tin", "Copper", "Nickel"],
        "options_hi": ["जिंक", "टिन", "तांबा", "निकल"],
        "answer_en": "Zinc",
        "answer_hi": "जिंक",
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
        "question_en": "What is the most abundant element in Earth's crust?",
        "question_hi": "पृथ्वी की पपड़ी में सबसे प्रचुर तत्व कौन सा है?",
        "options_en": ["Oxygen", "Silicon", "Aluminum", "Iron"],
        "options_hi": ["ऑक्सीजन", "सिलिकॉन", "एल्युमीनियम", "लोहा"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which gas is used in refrigeration?",
        "question_hi": "प्रशीतन में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Ammonia", "Freon", "Both", "Carbon dioxide"],
        "options_hi": ["अमोनिया", "फ्रीऑन", "दोनों", "कार्बन डाइऑक्साइड"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the triple point of water?",
        "question_hi": "पानी का त्रिक बिंदु क्या है?",
        "options_en": ["0.01°C", "0°C", "100°C", "273.16 K"],
        "options_hi": ["0.01°C", "0°C", "100°C", "273.16 K"],
        "answer_en": "0.01°C",
        "answer_hi": "0.01°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which planet is known for its Great Dark Spot?",
        "question_hi": "किस ग्रह को उसके महान अंधेरे धब्बे के लिए जाना जाता है?",
        "options_en": ["Neptune", "Uranus", "Saturn", "Jupiter"],
        "options_hi": ["नेपच्यून", "युरेनस", "शनि", "बृहस्पति"],
        "answer_en": "Neptune",
        "answer_hi": "नेपच्यून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the chemical symbol for bismuth?",
        "question_hi": "बिस्मथ का रासायनिक प्रतीक क्या है?",
        "options_en": ["Bi", "Bs", "Bm", "Bh"],
        "options_hi": ["Bi", "Bs", "Bm", "Bh"],
        "answer_en": "Bi",
        "answer_hi": "Bi",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which vitamin deficiency causes osteomalacia?",
        "question_hi": "किस विटामिन की कमी से ऑस्टियोमलेशिया होता है?",
        "options_en": ["Vitamin D", "Vitamin C", "Vitamin K", "Vitamin A"],
        "options_hi": ["विटामिन डी", "विटामिन सी", "विटामिन K", "विटामिन ए"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the unit of angular acceleration?",
        "question_hi": "कोणीय त्वरण की इकाई क्या है?",
        "options_en": ["rad/s²", "degree/s²", "revolution/s²", "All of these"],
        "options_hi": ["रेडियन/सेकंड²", "डिग्री/सेकंड²", "चक्र/सेकंड²", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
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
        "question_en": "Which is the hottest planet in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे गर्म ग्रह कौन सा है?",
        "options_en": ["Mercury", "Venus", "Earth", "Mars"],
        "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
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
        "num": 23,
        "question_en": "Which vitamin is essential for wound healing?",
        "question_hi": "घाव भरने के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin C", "Vitamin A", "Vitamin K", "All of these"],
        "options_hi": ["विटामिन सी", "विटामिन ए", "विटामिन K", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the unit of dynamic viscosity?",
        "question_hi": "गतिक श्यानता की इकाई क्या है?",
        "options_en": ["Poise", "Pascal-second", "Both", "Stokes"],
        "options_hi": ["पॉइज़", "पास्कल-सेकंड", "दोनों", "स्टोक्स"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which acid is used in the production of plastics?",
        "question_hi": "प्लास्टिक उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Phthalic acid", "Acetic acid", "Citric acid", "Formic acid"],
        "options_hi": ["थैलिक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "फॉर्मिक अम्ल"],
        "answer_en": "Phthalic acid",
        "answer_hi": "थैलिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the chemical formula of potassium carbonate?",
        "question_hi": "पोटेशियम कार्बोनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["K₂CO₃", "KCO₃", "K₃CO₃", "K₂C₂O₄"],
        "options_hi": ["K₂CO₃", "KCO₃", "K₃CO₃", "K₂C₂O₄"],
        "answer_en": "K₂CO₃",
        "answer_hi": "K₂CO₃",
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
        "question_en": "What is the chemical symbol for indium?",
        "question_hi": "इंडियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["In", "Id", "Im", "Ii"],
        "options_hi": ["In", "Id", "Im", "Ii"],
        "answer_en": "In",
        "answer_hi": "In",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which vitamin deficiency causes dermatitis?",
        "question_hi": "किस विटामिन की कमी से डर्मेटाइटिस होता है?",
        "options_en": ["Vitamin B7", "Vitamin B3", "Vitamin B6", "All of these"],
        "options_hi": ["विटामिन बी7", "विटामिन बी3", "विटामिन बी6", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the unit of kinematic viscosity?",
        "question_hi": "गतिकीय श्यानता की इकाई क्या है?",
        "options_en": ["Stokes", "Poise", "Pascal-second", "m²/s"],
        "options_hi": ["स्टोक्स", "पॉइज़", "पास्कल-सेकंड", "मीटर²/सेकंड"],
        "answer_en": "Stokes",
        "answer_hi": "स्टोक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which acid is used in the production of synthetic fibers?",
        "question_hi": "सिंथेटिक फाइबर उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Terephthalic acid", "Adipic acid", "Both", "Formic acid"],
        "options_hi": ["टेरेफ्थैलिक अम्ल", "एडिपिक अम्ल", "दोनों", "फॉर्मिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the chemical formula of calcium hydroxide?",
        "question_hi": "कैल्शियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["Ca(OH)₂", "CaO", "CaCO₃", "CaSO₄"],
        "options_hi": ["Ca(OH)₂", "CaO", "CaCO₃", "CaSO₄"],
        "answer_en": "Ca(OH)₂",
        "answer_hi": "Ca(OH)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
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
        "num": 34,
        "question_en": "What is the chemical symbol for thallium?",
        "question_hi": "थैलियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Tl", "Th", "Ta", "Ti"],
        "options_hi": ["Tl", "Th", "Ta", "Ti"],
        "answer_en": "Tl",
        "answer_hi": "Tl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which vitamin is essential for nerve conduction?",
        "question_hi": "तंत्रिका चालन के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B1", "Vitamin B12", "Both", "Vitamin B6"],
        "options_hi": ["विटामिन बी1", "विटामिन बी12", "दोनों", "विटामिन बी6"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
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
        "num": 38,
        "question_en": "What is the chemical formula of ammonium sulfate?",
        "question_hi": "अमोनियम सल्फेट का रासायनिक सूत्र क्या है?",
        "options_en": ["(NH₄)₂SO₄", "NH₄SO₄", "NH₄HSO₄", "N₂H₈SO₄"],
        "options_hi": ["(NH₄)₂SO₄", "NH₄SO₄", "NH₄HSO₄", "N₂H₈SO₄"],
        "answer_en": "(NH₄)₂SO₄",
        "answer_hi": "(NH₄)₂SO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which planet has the most volcanic moons?",
        "question_hi": "किस ग्रह के सबसे अधिक ज्वालामुखी चंद्रमा हैं?",
        "options_en": ["Jupiter", "Saturn", "Neptune", "Uranus"],
        "options_hi": ["बृहस्पति", "शनि", "नेपच्यून", "युरेनस"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
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
        "num": 41,
        "question_en": "Which vitamin deficiency causes hair loss?",
        "question_hi": "किस विटामिन की कमी से बाल झड़ते हैं?",
        "options_en": ["Vitamin B7", "Vitamin D", "Iron (not vitamin)", "All of these"],
        "options_hi": ["विटामिन बी7", "विटामिन डी", "आयरन (विटामिन नहीं)", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the unit of refractive index?",
        "question_hi": "अपवर्तनांक की इकाई क्या है?",
        "options_en": ["Dimensionless", "meter⁻¹", "diopter", "radian"],
        "options_hi": ["आयामहीन", "मीटर⁻¹", "डायोप्टर", "रेडियन"],
        "answer_en": "Dimensionless",
        "answer_hi": "आयामहीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
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
        "num": 44,
        "question_en": "What is the chemical formula of sodium chloride?",
        "question_hi": "सोडियम क्लोराइड का रासायनिक सूत्र क्या है?",
        "options_en": ["NaCl", "Na₂Cl", "NaCl₂", "Na₂Cl₂"],
        "options_hi": ["NaCl", "Na₂Cl", "NaCl₂", "Na₂Cl₂"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
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
        "num": 46,
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
        "num": 47,
        "question_en": "Which vitamin deficiency causes memory loss?",
        "question_hi": "किस विटामिन की कमी से स्मृति हानि होती है?",
        "options_en": ["Vitamin B12", "Vitamin B1", "Both", "Vitamin B6"],
        "options_hi": ["विटामिन बी12", "विटामिन बी1", "दोनों", "विटामिन बी6"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the unit of thermal expansion coefficient?",
        "question_hi": "तापीय विस्तार गुणांक की इकाई क्या है?",
        "options_en": ["K⁻¹", "°C⁻¹", "Both", "m/K"],
        "options_hi": ["K⁻¹", "°C⁻¹", "दोनों", "मीटर/K"],
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
        "question_en": "What is the chemical formula of potassium hydroxide?",
        "question_hi": "पोटेशियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["KOH", "K₂O", "K₂CO₃", "KNO₃"],
        "options_hi": ["KOH", "K₂O", "K₂CO₃", "KNO₃"],
        "answer_en": "KOH",
        "answer_hi": "KOH",
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
        "num": 53,
        "question_en": "Which vitamin is essential for eye health?",
        "question_hi": "आंखों के स्वास्थ्य के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin E", "All of these"],
        "options_hi": ["विटामिन ए", "विटामिन सी", "विटामिन ई", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the unit of Young's modulus?",
        "question_hi": "यंग मॉड्यूलस की इकाई क्या है?",
        "options_en": ["Pascal", "N/m²", "Both", "kg/m·s²"],
        "options_hi": ["पास्कल", "N/m²", "दोनों", "किलोग्राम/मीटर·सेकंड²"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
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
        "question_en": "What is the chemical formula of magnesium oxide?",
        "question_hi": "मैग्नीशियम ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["MgO", "Mg(OH)₂", "MgCO₃", "MgSO₄"],
        "options_hi": ["MgO", "Mg(OH)₂", "MgCO₃", "MgSO₄"],
        "answer_en": "MgO",
        "answer_hi": "MgO",
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
        "question_en": "What is the chemical symbol for platinum?",
        "question_hi": "प्लेटिनम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Pt", "Pl", "Pa", "Pn"],
        "options_hi": ["Pt", "Pl", "Pa", "Pn"],
        "answer_en": "Pt",
        "answer_hi": "Pt",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which vitamin deficiency causes muscle cramps?",
        "question_hi": "किस विटामिन की कमी से मांसपेशियों में ऐंठन होती है?",
        "options_en": ["Vitamin D", "Calcium (not vitamin)", "Magnesium (not vitamin)", "All of these"],
        "options_hi": ["विटामिन डी", "कैल्शियम (विटामिन नहीं)", "मैग्नीशियम (विटामिन नहीं)", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the unit of shear modulus?",
        "question_hi": "कर्तन मापांक की इकाई क्या है?",
        "options_en": ["Pascal", "N/m²", "Both", "kg/m·s²"],
        "options_hi": ["पास्कल", "N/m²", "दोनों", "किलोग्राम/मीटर·सेकंड²"],
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
        "question_en": "What is the chemical formula of aluminum hydroxide?",
        "question_hi": "एल्युमीनियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["Al(OH)₃", "Al₂O₃", "AlO(OH)", "All of these"],
        "options_hi": ["Al(OH)₃", "Al₂O₃", "AlO(OH)", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
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
        "question_en": "What is the chemical symbol for gold?",
        "question_hi": "सोने का रासायनिक प्रतीक क्या है?",
        "options_en": ["Au", "Ag", "Gd", "Go"],
        "options_hi": ["Au", "Ag", "Gd", "Go"],
        "answer_en": "Au",
        "answer_hi": "Au",
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
        "question_en": "What is the unit of bulk modulus?",
        "question_hi": "आयतन मापांक की इकाई क्या है?",
        "options_en": ["Pascal", "N/m²", "Both", "kg/m·s²"],
        "options_hi": ["पास्कल", "N/m²", "दोनों", "किलोग्राम/मीटर·सेकंड²"],
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
        "question_en": "What is the chemical formula of iron(II) sulfate?",
        "question_hi": "आयरन(II) सल्फेट का रासायनिक सूत्र क्या है?",
        "options_en": ["FeSO₄", "Fe₂(SO₄)₃", "FeS", "Fe₂O₃"],
        "options_hi": ["FeSO₄", "Fe₂(SO₄)₃", "FeS", "Fe₂O₃"],
        "answer_en": "FeSO₄",
        "answer_hi": "FeSO₄",
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
        "question_en": "What is the chemical symbol for silver?",
        "question_hi": "चांदी का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ag", "Au", "Sr", "Si"],
        "options_hi": ["Ag", "Au", "Sr", "Si"],
        "answer_en": "Ag",
        "answer_hi": "Ag",
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
        "question_en": "What is the chemical formula of zinc oxide?",
        "question_hi": "जिंक ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["ZnO", "Zn(OH)₂", "ZnCO₃", "ZnSO₄"],
        "options_hi": ["ZnO", "Zn(OH)₂", "ZnCO₃", "ZnSO₄"],
        "answer_en": "ZnO",
        "answer_hi": "ZnO",
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
        "question_en": "What is the chemical formula of copper(II) sulfate?",
        "question_hi": "कॉपर(II) सल्फेट का रासायनिक सूत्र क्या है?",
        "options_en": ["CuSO₄", "Cu₂SO₄", "CuS", "Cu₂S"],
        "options_hi": ["CuSO₄", "Cu₂SO₄", "CuS", "Cu₂S"],
        "answer_en": "CuSO₄",
        "answer_hi": "CuSO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which planet has the most volcanic activity?",
        "question_hi": "किस ग्रह पर सबसे अधिक ज्वालामुखी गतिविधि है?",
        "options_en": ["Io (moon)", "Venus", "Mars", "Earth"],
        "options_hi": ["आईओ (चंद्रमा)", "शुक्र", "मंगल", "पृथ्वी"],
        "answer_en": "Io (moon)",
        "answer_hi": "आईओ (चंद्रमा)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the chemical symbol for tin?",
        "question_hi": "टिन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Sn", "Ti", "Tn", "Si"],
        "options_hi": ["Sn", "Ti", "Tn", "Si"],
        "answer_en": "Sn",
        "answer_hi": "Sn",
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
        "question_en": "What is the chemical formula of lead(II) oxide?",
        "question_hi": "लेड(II) ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["PbO", "PbO₂", "Pb₂O₃", "Pb₃O₄"],
        "options_hi": ["PbO", "PbO₂", "Pb₂O₃", "Pb₃O₄"],
        "answer_en": "PbO",
        "answer_hi": "PbO",
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
        "question_en": "What is the chemical symbol for lead?",
        "question_hi": "सीसे का रासायनिक प्रतीक क्या है?",
        "options_en": ["Pb", "Ld", "Le", "Pl"],
        "options_hi": ["Pb", "Ld", "Le", "Pl"],
        "answer_en": "Pb",
        "answer_hi": "Pb",
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
        "question_en": "What is the unit of modulus of rigidity?",
        "question_hi": "दृढ़ता मापांक की इकाई क्या है?",
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
        "question_en": "What is the chemical formula of manganese dioxide?",
        "question_hi": "मैंगनीज डाइऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["MnO₂", "MnO", "Mn₂O₃", "Mn₃O₄"],
        "options_hi": ["MnO₂", "MnO", "Mn₂O₃", "Mn₃O₄"],
        "answer_en": "MnO₂",
        "answer_hi": "MnO₂",
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
        "question_en": "What is the chemical formula of nickel(II) oxide?",
        "question_hi": "निकल(II) ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["NiO", "Ni₂O₃", "NiO₂", "Ni₃O₄"],
        "options_hi": ["NiO", "Ni₂O₃", "NiO₂", "Ni₃O₄"],
        "answer_en": "NiO",
        "answer_hi": "NiO",
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