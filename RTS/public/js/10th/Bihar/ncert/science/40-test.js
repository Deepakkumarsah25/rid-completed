const questions = [
    {
        "num": 1,
        "question_en": "Which device is used to measure the humidity of air?",
        "question_hi": "वायु की आर्द्रता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Hygrometer", "Barometer", "Thermometer", "Anemometer"],
        "options_hi": ["हाइग्रोमीटर", "बैरोमीटर", "थर्मामीटर", "एनीमोमीटर"],
        "answer_en": "Hygrometer",
        "answer_hi": "हाइग्रोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the chemical formula of carbonic acid?",
        "question_hi": "कार्बोनिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂CO₃", "HCO₃", "H₂C₂O₄", "HCOOH"],
        "options_hi": ["H₂CO₃", "HCO₃", "H₂C₂O₄", "HCOOH"],
        "answer_en": "H₂CO₃",
        "answer_hi": "H₂CO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Who discovered X-rays?",
        "question_hi": "एक्स-रे की खोज किसने की?",
        "options_en": ["Wilhelm Röntgen", "Marie Curie", "J.J. Thomson", "Ernest Rutherford"],
        "options_hi": ["विल्हेम रॉन्टजेन", "मैरी क्यूरी", "जे.जे. थॉमसन", "अर्नेस्ट रदरफोर्ड"],
        "answer_en": "Wilhelm Röntgen",
        "answer_hi": "विल्हेम रॉन्टजेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the main component of laughing gas?",
        "question_hi": "हंसाने वाली गैस का मुख्य घटक क्या है?",
        "options_en": ["Nitrous oxide", "Nitrogen dioxide", "Nitric oxide", "Ammonia"],
        "options_hi": ["नाइट्रस ऑक्साइड", "नाइट्रोजन डाइऑक्साइड", "नाइट्रिक ऑक्साइड", "अमोनिया"],
        "answer_en": "Nitrous oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which organ produces bile?",
        "question_hi": "पित्त कौन सा अंग उत्पन्न करता है?",
        "options_en": ["Liver", "Gallbladder", "Pancreas", "Stomach"],
        "options_hi": ["यकृत", "पित्ताशय", "अग्न्याशय", "आमाशय"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the chemical name of baking powder?",
        "question_hi": "बेकिंग पाउडर का रासायनिक नाम क्या है?",
        "options_en": ["Sodium bicarbonate + acid", "Sodium carbonate", "Sodium hydroxide", "Sodium chloride"],
        "options_hi": ["सोडियम बाइकार्बोनेट + अम्ल", "सोडियम कार्बोनेट", "सोडियम हाइड्रॉक्साइड", "सोडियम क्लोराइड"],
        "answer_en": "Sodium bicarbonate + acid",
        "answer_hi": "सोडियम बाइकार्बोनेट + अम्ल",
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
        "question_en": "What is the SI unit of amount of substance?",
        "question_hi": "पदार्थ की मात्रा की SI इकाई क्या है?",
        "options_en": ["Mole", "Gram", "Kilogram", "Liter"],
        "options_hi": ["मोल", "ग्राम", "किलोग्राम", "लीटर"],
        "answer_en": "Mole",
        "answer_hi": "मोल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which metal is used in galvanization?",
        "question_hi": "गैल्वनीकरण में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Zinc", "Iron", "Copper", "Aluminum"],
        "options_hi": ["जिंक", "आयरन", "कॉपर", "एल्यूमिनियम"],
        "answer_en": "Zinc",
        "answer_hi": "जिंक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the chemical formula of sodium hydroxide?",
        "question_hi": "सोडियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["NaOH", "Na₂O", "NaH", "Na₂CO₃"],
        "options_hi": ["NaOH", "Na₂O", "NaH", "Na₂CO₃"],
        "answer_en": "NaOH",
        "answer_hi": "NaOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which moon is the largest in our solar system?",
        "question_hi": "हमारे सौर मंडल में सबसे बड़ा चंद्रमा कौन सा है?",
        "options_en": ["Ganymede", "Titan", "Callisto", "Io"],
        "options_hi": ["गेनीमेड", "टाइटन", "कैलिस्टो", "आईओ"],
        "answer_en": "Ganymede",
        "answer_hi": "गेनीमेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the chemical symbol for magnesium?",
        "question_hi": "मैग्नीशियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Mg", "Mn", "Ma", "Mh"],
        "options_hi": ["Mg", "Mn", "Ma", "Mh"],
        "answer_en": "Mg",
        "answer_hi": "Mg",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which vitamin deficiency causes cheilosis?",
        "question_hi": "किस विटामिन की कमी से चीलोसिस होता है?",
        "options_en": ["Vitamin B2", "Vitamin C", "Vitamin A", "Vitamin D"],
        "options_hi": ["विटामिन बी2", "विटामिन सी", "विटामिन ए", "विटामिन डी"],
        "answer_en": "Vitamin B2",
        "answer_hi": "विटामिन बी2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the unit of luminous efficacy?",
        "question_hi": "दीप्त प्रभावकारिता की इकाई क्या है?",
        "options_en": ["Lumen per watt", "Lux", "Candela", "Watt"],
        "options_hi": ["ल्यूमेन प्रति वाट", "लक्स", "कैंडेला", "वाट"],
        "answer_en": "Lumen per watt",
        "answer_hi": "ल्यूमेन प्रति वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which acid is present in ant sting?",
        "question_hi": "चींटी के डंक में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Formic acid", "Acetic acid", "Citric acid", "Lactic acid"],
        "options_hi": ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल"],
        "answer_en": "Formic acid",
        "answer_hi": "फॉर्मिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the chemical formula of potassium hydroxide?",
        "question_hi": "पोटेशियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["KOH", "K₂O", "KH", "K₂CO₃"],
        "options_hi": ["KOH", "K₂O", "KH", "K₂CO₃"],
        "answer_en": "KOH",
        "answer_hi": "KOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which planet has the shortest year?",
        "question_hi": "किस ग्रह का वर्ष सबसे छोटा है?",
        "options_en": ["Mercury", "Venus", "Mars", "Jupiter"],
        "options_hi": ["बुध", "शुक्र", "मंगल", "बृहस्पति"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the chemical symbol for iodine?",
        "question_hi": "आयोडीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["I", "Io", "In", "Id"],
        "options_hi": ["I", "Io", "In", "Id"],
        "answer_en": "I",
        "answer_hi": "I",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which vitamin is essential for carbohydrate metabolism?",
        "question_hi": "कार्बोहाइड्रेट चयापचय के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B1", "Vitamin B6", "Vitamin B12", "Vitamin C"],
        "options_hi": ["विटामिन बी1", "विटामिन बी6", "विटामिन बी12", "विटामिन सी"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन बी1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the unit of thermodynamic temperature?",
        "question_hi": "ऊष्मागतिकी तापमान की इकाई क्या है?",
        "options_en": ["Kelvin", "Celsius", "Fahrenheit", "Rankine"],
        "options_hi": ["केल्विन", "सेल्सियस", "फारेनहाइट", "रैंकिन"],
        "answer_en": "Kelvin",
        "answer_hi": "केल्विन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which acid is used in soft drinks?",
        "question_hi": "शीतल पेय पदार्थों में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Phosphoric acid", "Citric acid", "Both", "Carbonic acid"],
        "options_hi": ["फॉस्फोरिक अम्ल", "साइट्रिक अम्ल", "दोनों", "कार्बोनिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the chemical formula of calcium carbonate?",
        "question_hi": "कैल्शियम कार्बोनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["CaCO₃", "CaC₂", "CaO", "Ca(OH)₂"],
        "options_hi": ["CaCO₃", "CaC₂", "CaO", "Ca(OH)₂"],
        "answer_en": "CaCO₃",
        "answer_hi": "CaCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which moon has subsurface ocean?",
        "question_hi": "किस चंद्रमा में भूमिगत महासागर है?",
        "options_en": ["Europa", "Enceladus", "Titan", "All of these"],
        "options_hi": ["यूरोपा", "एन्सेलेडस", "टाइटन", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
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
        "num": 25,
        "question_en": "Which vitamin deficiency causes glossitis?",
        "question_hi": "किस विटामिन की कमी से ग्लोसाइटिस होता है?",
        "options_en": ["Vitamin B12", "Vitamin B2", "Vitamin B6", "All of these"],
        "options_hi": ["विटामिन बी12", "विटामिन बी2", "विटामिन बी6", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the unit of plane angle?",
        "question_hi": "समतल कोण की इकाई क्या है?",
        "options_en": ["Radian", "Degree", "Both", "Steradian"],
        "options_hi": ["रेडियन", "डिग्री", "दोनों", "स्टेरेडियन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which acid is used in pickling?",
        "question_hi": "अचार बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetic acid", "Citric acid", "Lactic acid", "All of these"],
        "options_hi": ["एसिटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
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
        "num": 29,
        "question_en": "Which planet has the most intense magnetic field?",
        "question_hi": "किस ग्रह का सबसे तीव्र चुंबकीय क्षेत्र है?",
        "options_en": ["Jupiter", "Saturn", "Earth", "Mercury"],
        "options_hi": ["बृहस्पति", "शनि", "पृथ्वी", "बुध"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the chemical symbol for chlorine?",
        "question_hi": "क्लोरीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Cl", "Ch", "Cn", "Cr"],
        "options_hi": ["Cl", "Ch", "Cn", "Cr"],
        "answer_en": "Cl",
        "answer_hi": "Cl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which vitamin is essential for protein metabolism?",
        "question_hi": "प्रोटीन चयापचय के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B6", "Vitamin B12", "Both", "Vitamin C"],
        "options_hi": ["विटामिन बी6", "विटामिन बी12", "दोनों", "विटामिन सी"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the unit of solid angle?",
        "question_hi": "ठोस कोण की इकाई क्या है?",
        "options_en": ["Steradian", "Radian", "Degree", "Gradian"],
        "options_hi": ["स्टेरेडियन", "रेडियन", "डिग्री", "ग्रेडियन"],
        "answer_en": "Steradian",
        "answer_hi": "स्टेरेडियन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which acid is used in battery manufacturing?",
        "question_hi": "बैटरी निर्माण में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Hydrochloric acid", "Nitric acid", "Phosphoric acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल", "फॉस्फोरिक अम्ल"],
        "answer_en": "Sulfuric acid",
        "answer_hi": "सल्फ्यूरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the chemical formula of ammonium chloride?",
        "question_hi": "अमोनियम क्लोराइड का रासायनिक सूत्र क्या है?",
        "options_en": ["NH₄Cl", "NH₄Cl₂", "N₂H₄Cl", "NH₃Cl"],
        "options_hi": ["NH₄Cl", "NH₄Cl₂", "N₂H₄Cl", "NH₃Cl"],
        "answer_en": "NH₄Cl",
        "answer_hi": "NH₄Cl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
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
        "num": 36,
        "question_en": "What is the chemical symbol for bromine?",
        "question_hi": "ब्रोमीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Br", "Bo", "Bm", "Be"],
        "options_hi": ["Br", "Bo", "Bm", "Be"],
        "answer_en": "Br",
        "answer_hi": "Br",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which vitamin deficiency causes microcytic anemia?",
        "question_hi": "किस विटामिन की कमी से माइक्रोसाइटिक एनीमिया होता है?",
        "options_en": ["Iron (not vitamin)", "Vitamin B12", "Folic acid", "Vitamin B6"],
        "options_hi": ["आयरन (विटामिन नहीं)", "विटामिन बी12", "फोलिक अम्ल", "विटामिन बी6"],
        "answer_en": "Iron (not vitamin)",
        "answer_hi": "आयरन (विटामिन नहीं)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the unit of electric field strength?",
        "question_hi": "विद्युत क्षेत्र शक्ति की इकाई क्या है?",
        "options_en": ["Volt per meter", "Newton per coulomb", "Both", "Tesla"],
        "options_hi": ["वोल्ट प्रति मीटर", "न्यूटन प्रति कूलॉम", "दोनों", "टेस्ला"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which acid is used in fertilizer production?",
        "question_hi": "उर्वरक उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Phosphoric acid", "Nitric acid", "Sulfuric acid", "All of these"],
        "options_hi": ["फॉस्फोरिक अम्ल", "नाइट्रिक अम्ल", "सल्फ्यूरिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
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
        "num": 41,
        "question_en": "Which planet has the most satellites?",
        "question_hi": "किस ग्रह के सबसे अधिक उपग्रह हैं?",
        "options_en": ["Saturn", "Jupiter", "Uranus", "Neptune"],
        "options_hi": ["शनि", "बृहस्पति", "युरेनस", "नेपच्यून"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
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
        "num": 43,
        "question_en": "Which vitamin deficiency causes convulsions?",
        "question_hi": "किस विटामिन की कमी से ऐंठन होती है?",
        "options_en": ["Vitamin B6", "Vitamin D", "Vitamin C", "Vitamin E"],
        "options_hi": ["विटामिन बी6", "विटामिन डी", "विटामिन सी", "विटामिन ई"],
        "answer_en": "Vitamin B6",
        "answer_hi": "विटामिन बी6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the unit of dynamic viscosity?",
        "question_hi": "गतिशील श्यानता की इकाई क्या है?",
        "options_en": ["Pascal-second", "Poise", "Both", "Stokes"],
        "options_hi": ["पास्कल-सेकंड", "प्वाइज", "दोनों", "स्टोक्स"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which acid is used in textile industry?",
        "question_hi": "कपड़ा उद्योग में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetic acid", "Formic acid", "Sulfuric acid", "All of these"],
        "options_hi": ["एसिटिक अम्ल", "फॉर्मिक अम्ल", "सल्फ्यूरिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the chemical formula of aluminum sulfate?",
        "question_hi": "एल्युमिनियम सल्फेट का रासायनिक सूत्र क्या है?",
        "options_en": ["Al₂(SO₄)₃", "AlSO₄", "Al₂SO₄", "Al(SO₄)₂"],
        "options_hi": ["Al₂(SO₄)₃", "AlSO₄", "Al₂SO₄", "Al(SO₄)₂"],
        "answer_en": "Al₂(SO₄)₃",
        "answer_hi": "Al₂(SO₄)₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which moon has geysers?",
        "question_hi": "किस चंद्रमा पर गीज़र हैं?",
        "options_en": ["Enceladus", "Triton", "Europa", "All of these"],
        "options_hi": ["एन्सेलेडस", "ट्राइटन", "यूरोपा", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
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
        "num": 49,
        "question_en": "Which vitamin deficiency causes stomatitis?",
        "question_hi": "किस विटामिन की कमी से स्टोमाटाइटिस होता है?",
        "options_en": ["Vitamin B2", "Vitamin B3", "Vitamin B12", "All of these"],
        "options_hi": ["विटामिन बी2", "विटामिन बी3", "विटामिन बी12", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the unit of kinematic viscosity?",
        "question_hi": "गतिकीय श्यानता की इकाई क्या है?",
        "options_en": ["Stokes", "Poise", "Pascal-second", "Square meter per second"],
        "options_hi": ["स्टोक्स", "प्वाइज", "पास्कल-सेकंड", "वर्ग मीटर प्रति सेकंड"],
        "answer_en": "Stokes",
        "answer_hi": "स्टोक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which acid is used in food preservation?",
        "question_hi": "खाद्य संरक्षण में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Benzoic acid", "Sorbic acid", "Acetic acid", "All of these"],
        "options_hi": ["बेंज़ोइक अम्ल", "सोर्बिक अम्ल", "एसिटिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the chemical formula of sodium sulfate?",
        "question_hi": "सोडियम सल्फेट का रासायनिक सूत्र क्या है?",
        "options_en": ["Na₂SO₄", "NaSO₄", "Na₂SO₃", "NaSO₃"],
        "options_hi": ["Na₂SO₄", "NaSO₄", "Na₂SO₃", "NaSO₃"],
        "answer_en": "Na₂SO₄",
        "answer_hi": "Na₂SO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which planet has the most dense atmosphere?",
        "question_hi": "किस ग्रह का वातावरण सबसे घना है?",
        "options_en": ["Venus", "Earth", "Mars", "Jupiter"],
        "options_hi": ["शुक्र", "पृथ्वी", "मंगल", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the chemical symbol for krypton?",
        "question_hi": "क्रिप्टन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Kr", "Ky", "Kp", "Kn"],
        "options_hi": ["Kr", "Ky", "Kp", "Kn"],
        "answer_en": "Kr",
        "answer_hi": "Kr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which vitamin deficiency causes neuropathy?",
        "question_hi": "किस विटामिन की कमी से न्यूरोपैथी होती है?",
        "options_en": ["Vitamin B12", "Vitamin B1", "Vitamin B6", "All of these"],
        "options_hi": ["विटामिन बी12", "विटामिन बी1", "विटामिन बी6", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the unit of surface tension?",
        "question_hi": "पृष्ठ तनाव की इकाई क्या है?",
        "options_en": ["Newton per meter", "Joule per square meter", "Both", "Pascal"],
        "options_hi": ["न्यूटन प्रति मीटर", "जूल प्रति वर्ग मीटर", "दोनों", "पास्कल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which acid is used in pharmaceutical industry?",
        "question_hi": "फार्मास्यूटिकल उद्योग में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetylsalicylic acid", "Ascorbic acid", "Citric acid", "All of these"],
        "options_hi": ["एसिटिलसैलिसिलिक अम्ल", "एस्कॉर्बिक अम्ल", "साइट्रिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the chemical formula of potassium sulfate?",
        "question_hi": "पोटेशियम सल्फेट का रासायनिक सूत्र क्या है?",
        "options_en": ["K₂SO₄", "KSO₄", "K₂SO₃", "KSO₃"],
        "options_hi": ["K₂SO₄", "KSO₄", "K₂SO₃", "KSO₃"],
        "answer_en": "K₂SO₄",
        "answer_hi": "K₂SO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which moon has liquid methane lakes?",
        "question_hi": "किस चंद्रमा पर तरल मीथेन झीलें हैं?",
        "options_en": ["Titan", "Triton", "Europa", "Ganymede"],
        "options_hi": ["टाइटन", "ट्राइटन", "यूरोपा", "गेनीमेड"],
        "answer_en": "Titan",
        "answer_hi": "टाइटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the chemical symbol for xenon?",
        "question_hi": "ज़ेनॉन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Xe", "Xo", "Xn", "Xa"],
        "options_hi": ["Xe", "Xo", "Xn", "Xa"],
        "answer_en": "Xe",
        "answer_hi": "Xe",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
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
        "num": 62,
        "question_en": "What is the unit of heat capacity?",
        "question_hi": "ऊष्मा धारिता की इकाई क्या है?",
        "options_en": ["Joule per kelvin", "Calorie per degree", "Both", "Watt per kelvin"],
        "options_hi": ["जूल प्रति केल्विन", "कैलोरी प्रति डिग्री", "दोनों", "वाट प्रति केल्विन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which acid is used in leather tanning?",
        "question_hi": "चमड़ा टैनिंग में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Tannic acid", "Formic acid", "Acetic acid", "All of these"],
        "options_hi": ["टैनिक अम्ल", "फॉर्मिक अम्ल", "एसिटिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the chemical formula of calcium sulfate?",
        "question_hi": "कैल्शियम सल्फेट का रासायनिक सूत्र क्या है?",
        "options_en": ["CaSO₄", "CaSO₃", "Ca₂SO₄", "CaS"],
        "options_hi": ["CaSO₄", "CaSO₃", "Ca₂SO₄", "CaS"],
        "answer_en": "CaSO₄",
        "answer_hi": "CaSO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which planet has the longest rotation period?",
        "question_hi": "किस ग्रह का घूर्णन काल सबसे लंबा है?",
        "options_en": ["Venus", "Mercury", "Mars", "Jupiter"],
        "options_hi": ["शुक्र", "बुध", "मंगल", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
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
        "num": 67,
        "question_en": "Which vitamin deficiency causes dementia?",
        "question_hi": "किस विटामिन की कमी से डिमेंशिया होता है?",
        "options_en": ["Vitamin B12", "Vitamin B1", "Vitamin B3", "All of these"],
        "options_hi": ["विटामिन बी12", "विटामिन बी1", "विटामिन बी3", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the unit of specific heat capacity?",
        "question_hi": "विशिष्ट ऊष्मा धारिता की इकाई क्या है?",
        "options_en": ["Joule per kilogram per kelvin", "Calorie per gram per degree", "Both", "Watt per kilogram"],
        "options_hi": ["जूल प्रति किलोग्राम प्रति केल्विन", "कैलोरी प्रति ग्राम प्रति डिग्री", "दोनों", "वाट प्रति किलोग्राम"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which acid is used in dye industry?",
        "question_hi": "रंग उद्योग में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Nitric acid", "Hydrochloric acid", "All of these"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the chemical formula of sodium carbonate?",
        "question_hi": "सोडियम कार्बोनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["Na₂CO₃", "NaCO₃", "Na₂CO₂", "NaHCO₃"],
        "options_hi": ["Na₂CO₃", "NaCO₃", "Na₂CO₂", "NaHCO₃"],
        "answer_en": "Na₂CO₃",
        "answer_hi": "Na₂CO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which moon has water vapor plumes?",
        "question_hi": "किस चंद्रमा पर जल वाष्प प्लम हैं?",
        "options_en": ["Enceladus", "Europa", "Titan", "Ganymede"],
        "options_hi": ["एन्सेलेडस", "यूरोपा", "टाइटन", "गेनीमेड"],
        "answer_en": "Enceladus",
        "answer_hi": "एन्सेलेडस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
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
        "num": 73,
        "question_en": "Which vitamin deficiency causes ataxia?",
        "question_hi": "किस विटामिन की कमी से अटैक्सिया होता है?",
        "options_en": ["Vitamin E", "Vitamin B12", "Vitamin B1", "All of these"],
        "options_hi": ["विटामिन ई", "विटामिन बी12", "विटामिन बी1", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the unit of thermal conductivity?",
        "question_hi": "तापीय चालकता की इकाई क्या है?",
        "options_en": ["Watt per meter per kelvin", "Calorie per second per cm per degree", "Both", "Joule per second"],
        "options_hi": ["वाट प्रति मीटर प्रति केल्विन", "कैलोरी प्रति सेकंड प्रति सेमी प्रति डिग्री", "दोनों", "जूल प्रति सेकंड"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which acid is used in soap making?",
        "question_hi": "साबुन बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Fatty acids", "Stearic acid", "Oleic acid", "All of these"],
        "options_hi": ["वसा अम्ल", "स्टीयरिक अम्ल", "ओलिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the chemical formula of potassium carbonate?",
        "question_hi": "पोटेशियम कार्बोनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["K₂CO₃", "KCO₃", "K₂CO₂", "KHCO₃"],
        "options_hi": ["K₂CO₃", "KCO₃", "K₂CO₂", "KHCO₃"],
        "answer_en": "K₂CO₃",
        "answer_hi": "K₂CO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which planet has the thinnest atmosphere?",
        "question_hi": "किस ग्रह का वातावरण सबसे पतला है?",
        "options_en": ["Mercury", "Mars", "Pluto", "Moon"],
        "options_hi": ["बुध", "मंगल", "प्लूटो", "चंद्रमा"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
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
        "num": 79,
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
        "num": 80,
        "question_en": "What is the unit of electric permittivity?",
        "question_hi": "विद्युत परावैद्युतांक की इकाई क्या है?",
        "options_en": ["Farad per meter", "Coulomb squared per newton per meter squared", "Both", "Siemens per meter"],
        "options_hi": ["फैरड प्रति मीटर", "कूलॉम वर्ग प्रति न्यूटन प्रति मीटर वर्ग", "दोनों", "सीमेंस प्रति मीटर"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which acid is used in wine making?",
        "question_hi": "शराब बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Tartaric acid", "Malic acid", "Citric acid", "All of these"],
        "options_hi": ["टार्टरिक अम्ल", "मैलिक अम्ल", "साइट्रिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
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
        "num": 83,
        "question_en": "Which moon has the most geologically active surface?",
        "question_hi": "किस चंद्रमा की सतह सबसे अधिक भूवैज्ञानिक रूप से सक्रिय है?",
        "options_en": ["Io", "Enceladus", "Triton", "Europa"],
        "options_hi": ["आईओ", "एन्सेलेडस", "ट्राइटन", "यूरोपा"],
        "answer_en": "Io",
        "answer_hi": "आईओ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the chemical symbol for strontium?",
        "question_hi": "स्ट्रोंटियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Sr", "St", "Sm", "Si"],
        "options_hi": ["Sr", "St", "Sm", "Si"],
        "answer_en": "Sr",
        "answer_hi": "Sr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which vitamin deficiency causes diarrhea?",
        "question_hi": "किस विटामिन की कमी से दस्त होते हैं?",
        "options_en": ["Vitamin B3", "Vitamin B1", "Vitamin B2", "All of these"],
        "options_hi": ["विटामिन बी3", "विटामिन बी1", "विटामिन बी2", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the unit of magnetic permeability?",
        "question_hi": "चुंबकीय पारगम्यता की इकाई क्या है?",
        "options_en": ["Henry per meter", "Newton per ampere squared", "Both", "Tesla meter per ampere"],
        "options_hi": ["हेनरी प्रति मीटर", "न्यूटन प्रति एम्पीयर वर्ग", "दोनों", "टेस्ला मीटर प्रति एम्पीयर"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which acid is used in cheese making?",
        "question_hi": "पनीर बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Lactic acid", "Acetic acid", "Citric acid", "All of these"],
        "options_hi": ["लैक्टिक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the chemical formula of magnesium carbonate?",
        "question_hi": "मैग्नीशियम कार्बोनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["MgCO₃", "Mg₂CO₃", "Mg(CO₃)₂", "MgHCO₃"],
        "options_hi": ["MgCO₃", "Mg₂CO₃", "Mg(CO₃)₂", "MgHCO₃"],
        "answer_en": "MgCO₃",
        "answer_hi": "MgCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
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
        "num": 90,
        "question_en": "What is the chemical symbol for rubidium?",
        "question_hi": "रूबिडियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Rb", "Ru", "Rd", "Rm"],
        "options_hi": ["Rb", "Ru", "Rd", "Rm"],
        "answer_en": "Rb",
        "answer_hi": "Rb",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which vitamin deficiency causes anemia in pregnancy?",
        "question_hi": "किस विटामिन की कमी से गर्भावस्था में एनीमिया होता है?",
        "options_en": ["Folic acid", "Iron", "Both", "Vitamin B12"],
        "options_hi": ["फोलिक अम्ल", "आयरन", "दोनों", "विटामिन बी12"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the unit of electric dipole moment?",
        "question_hi": "विद्युत द्विध्रुव आघूर्ण की इकाई क्या है?",
        "options_en": ["Coulomb-meter", "Debye", "Both", "Ampere-meter"],
        "options_hi": ["कूलॉम-मीटर", "डेबाई", "दोनों", "एम्पीयर-मीटर"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which acid is used in paper industry?",
        "question_hi": "कागज उद्योग में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Hydrochloric acid", "Both", "Nitric acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "दोनों", "नाइट्रिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
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
        "num": 95,
        "question_en": "Which moon has the most ancient surface?",
        "question_hi": "किस चंद्रमा की सतह सबसे प्राचीन है?",
        "options_en": ["Callisto", "Ganymede", "Europa", "Io"],
        "options_hi": ["कैलिस्टो", "गेनीमेड", "यूरोपा", "आईओ"],
        "answer_en": "Callisto",
        "answer_hi": "कैलिस्टो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the chemical symbol for lithium?",
        "question_hi": "लिथियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Li", "Lt", "Lh", "Lm"],
        "options_hi": ["Li", "Lt", "Lh", "Lm"],
        "answer_en": "Li",
        "answer_hi": "Li",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which vitamin deficiency causes bleeding gums?",
        "question_hi": "किस विटामिन की कमी से मसूड़ों से खून आता है?",
        "options_en": ["Vitamin C", "Vitamin K", "Both", "Vitamin A"],
        "options_hi": ["विटामिन सी", "विटामिन K", "दोनों", "विटामिन ए"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the unit of angular momentum?",
        "question_hi": "कोणीय संवेग की इकाई क्या है?",
        "options_en": ["Kilogram meter squared per second", "Joule-second", "Both", "Newton-meter second"],
        "options_hi": ["किलोग्राम मीटर वर्ग प्रति सेकंड", "जूल-सेकंड", "दोनों", "न्यूटन-मीटर सेकंड"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which acid is used in photography?",
        "question_hi": "फोटोग्राफी में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetic acid", "Hydrochloric acid", "Sulfuric acid", "All of these"],
        "options_hi": ["एसिटिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the chemical formula of sodium acetate?",
        "question_hi": "सोडियम एसीटेट का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₃COONa", "NaC₂H₃O₂", "Both", "Na₂C₂H₃O₂"],
        "options_hi": ["CH₃COONa", "NaC₂H₃O₂", "दोनों", "Na₂C₂H₃O₂"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
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