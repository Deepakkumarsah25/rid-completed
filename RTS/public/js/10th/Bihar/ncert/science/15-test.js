const questions = [
    {
        "num": 1,
        "question_en": "What is the primary gas emitted by volcanoes?",
        "question_hi": "ज्वालामुखी से निकलने वाली प्राथमिक गैस कौन सी है?",
        "options_en": ["Carbon dioxide", "Sulfur dioxide", "Water vapor", "Nitrogen"],
        "options_hi": ["कार्बन डाइऑक्साइड", "सल्फर डाइऑक्साइड", "जल वाष्प", "नाइट्रोजन"],
        "answer_en": "Water vapor",
        "answer_hi": "जल वाष्प",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which metal is used in the filament of incandescent bulbs?",
        "question_hi": "गरमागरम बल्बों के फिलामेंट में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Copper", "Tungsten", "Aluminum", "Iron"],
        "options_hi": ["तांबा", "टंगस्टन", "एल्युमीनियम", "लोहा"],
        "answer_en": "Tungsten",
        "answer_hi": "टंगस्टन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
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
        "num": 4,
        "question_en": "Which scientist discovered X-rays?",
        "question_hi": "किस वैज्ञानिक ने एक्स-रे की खोज की?",
        "options_en": ["Wilhelm Roentgen", "Marie Curie", "Max Planck", "Albert Einstein"],
        "options_hi": ["विल्हेम रॉन्टजेन", "मैरी क्यूरी", "मैक्स प्लैंक", "अल्बर्ट आइंस्टीन"],
        "answer_en": "Wilhelm Roentgen",
        "answer_hi": "विल्हेम रॉन्टजेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
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
        "num": 6,
        "question_en": "Which organ produces bile in the human body?",
        "question_hi": "मानव शरीर में पित्त कौन सा अंग उत्पन्न करता है?",
        "options_en": ["Liver", "Pancreas", "Gallbladder", "Stomach"],
        "options_hi": ["यकृत", "अग्न्याशय", "पित्ताशय", "पेट"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the chemical name of baking powder?",
        "question_hi": "बेकिंग पाउडर का रासायनिक नाम क्या है?",
        "options_en": ["Sodium bicarbonate", "Sodium carbonate", "Calcium carbonate", "Ammonium bicarbonate"],
        "options_hi": ["सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "कैल्शियम कार्बोनेट", "अमोनियम बाइकार्बोनेट"],
        "answer_en": "Sodium bicarbonate",
        "answer_hi": "सोडियम बाइकार्बोनेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which vitamin is also known as ergocalciferol?",
        "question_hi": "किस विटामिन को एर्गोकैल्सीफेरोल भी कहा जाता है?",
        "options_en": ["Vitamin D2", "Vitamin D3", "Vitamin K", "Vitamin E"],
        "options_hi": ["विटामिन D2", "विटामिन D3", "विटामिन K", "विटामिन ई"],
        "answer_en": "Vitamin D2",
        "answer_hi": "विटामिन D2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the SI unit of electric conductance?",
        "question_hi": "विद्युत चालकता की SI इकाई क्या है?",
        "options_en": ["Siemens", "Ohm", "Mho", "Both A and C"],
        "options_hi": ["सीमेंस", "ओम", "म्हो", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which metal is liquid at room temperature?",
        "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
        "options_en": ["Mercury", "Gallium", "Cesium", "All of these"],
        "options_hi": ["पारा", "गैलियम", "सीज़ियम", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the chemical formula of ozone?",
        "question_hi": "ओजोन का रासायनिक सूत्र क्या है?",
        "options_en": ["O₃", "O₂", "O", "O₄"],
        "options_hi": ["O₃", "O₂", "O", "O₄"],
        "answer_en": "O₃",
        "answer_hi": "O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which part of the plant is modified into an onion?",
        "question_hi": "पौधे का कौन सा भाग प्याज में परिवर्तित होता है?",
        "options_en": ["Root", "Stem", "Leaf", "Bulb"],
        "options_hi": ["जड़", "तना", "पत्ती", "कंद"],
        "answer_en": "Bulb",
        "answer_hi": "कंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the hardest substance in nature?",
        "question_hi": "प्रकृति में सबसे कठोर पदार्थ क्या है?",
        "options_en": ["Diamond", "Graphite", "Quartz", "Corundum"],
        "options_hi": ["हीरा", "ग्रेफाइट", "क्वार्ट्ज", "कुरुंदम"],
        "answer_en": "Diamond",
        "answer_hi": "हीरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which gas is used in welding?",
        "question_hi": "वेल्डिंग में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Acetylene", "Oxygen", "Both", "Argon"],
        "options_hi": ["एसिटिलीन", "ऑक्सीजन", "दोनों", "आर्गन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the boiling point of alcohol in Celsius?",
        "question_hi": "अल्कोहल का क्वथनांक सेल्सियस में क्या है?",
        "options_en": ["78.3°C", "100°C", "65°C", "85°C"],
        "options_hi": ["78.3°C", "100°C", "65°C", "85°C"],
        "answer_en": "78.3°C",
        "answer_hi": "78.3°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which planet is known as the Morning Star?",
        "question_hi": "किस ग्रह को सुबह का तारा कहा जाता है?",
        "options_en": ["Venus", "Mercury", "Mars", "Jupiter"],
        "options_hi": ["शुक्र", "बुध", "मंगल", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
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
        "num": 18,
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
        "num": 19,
        "question_en": "What is the unit of angular velocity?",
        "question_hi": "कोणीय वेग की इकाई क्या है?",
        "options_en": ["rad/s", "degree/s", "revolution/s", "All of these"],
        "options_hi": ["रेडियन/सेकंड", "डिग्री/सेकंड", "चक्र/सेकंड", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
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
        "num": 21,
        "question_en": "What is the chemical formula of carbon monoxide?",
        "question_hi": "कार्बन मोनोऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CO", "CO₂", "C₂O", "CO₃"],
        "options_hi": ["CO", "CO₂", "C₂O", "CO₃"],
        "answer_en": "CO",
        "answer_hi": "CO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
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
        "num": 23,
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
        "num": 24,
        "question_en": "Which vitamin is also known as tocopherol?",
        "question_hi": "किस विटामिन को टोकोफेरॉल भी कहा जाता है?",
        "options_en": ["Vitamin E", "Vitamin D", "Vitamin K", "Vitamin A"],
        "options_hi": ["विटामिन ई", "विटामिन डी", "विटामिन K", "विटामिन ए"],
        "answer_en": "Vitamin E",
        "answer_hi": "विटामिन ई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
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
        "num": 26,
        "question_en": "Which acid is found in lemons?",
        "question_hi": "नींबू में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Citric acid", "Ascorbic acid", "Both", "Tartaric acid"],
        "options_hi": ["साइट्रिक अम्ल", "एस्कॉर्बिक अम्ल", "दोनों", "टार्टरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
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
        "num": 28,
        "question_en": "Which planet has the Great Red Spot?",
        "question_hi": "किस ग्रह पर महान लाल धब्बा है?",
        "options_en": ["Jupiter", "Saturn", "Mars", "Neptune"],
        "options_hi": ["बृहस्पति", "शनि", "मंगल", "नेपच्यून"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
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
        "num": 30,
        "question_en": "Which vitamin deficiency causes rickets?",
        "question_hi": "किस विटामिन की कमी से रिकेट्स होता है?",
        "options_en": ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"],
        "options_hi": ["विटामिन डी", "विटामिन सी", "विटामिन ए", "विटामिन K"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the unit of capacitance?",
        "question_hi": "धारिता की इकाई क्या है?",
        "options_en": ["Farad", "Henry", "Tesla", "Weber"],
        "options_hi": ["फैरड", "हेनरी", "टेस्ला", "वेबर"],
        "answer_en": "Farad",
        "answer_hi": "फैरड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
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
        "num": 33,
        "question_en": "What is the chemical formula of ammonia?",
        "question_hi": "अमोनिया का रासायनिक सूत्र क्या है?",
        "options_en": ["NH₃", "NH₄", "NO₂", "N₂O"],
        "options_hi": ["NH₃", "NH₄", "NO₂", "N₂O"],
        "answer_en": "NH₃",
        "answer_hi": "NH₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which planet is known as the Ice Giant?",
        "question_hi": "किस ग्रह को बर्फीला दानव कहा जाता है?",
        "options_en": ["Uranus", "Neptune", "Both", "Saturn"],
        "options_hi": ["युरेनस", "नेपच्यून", "दोनों", "शनि"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the chemical symbol for nickel?",
        "question_hi": "निकल का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ni", "Nk", "Nl", "Nc"],
        "options_hi": ["Ni", "Nk", "Nl", "Nc"],
        "answer_en": "Ni",
        "answer_hi": "Ni",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which vitamin is also known as retinol?",
        "question_hi": "किस विटामिन को रेटिनॉल भी कहा जाता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन ए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
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
        "num": 38,
        "question_en": "Which acid is found in apples?",
        "question_hi": "सेब में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Malic acid", "Citric acid", "Tartaric acid", "Acetic acid"],
        "options_hi": ["मैलिक अम्ल", "साइट्रिक अम्ल", "टार्टरिक अम्ल", "एसिटिक अम्ल"],
        "answer_en": "Malic acid",
        "answer_hi": "मैलिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the chemical formula of nitric acid?",
        "question_hi": "नाइट्रिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["HNO₃", "H₂SO₄", "HCl", "H₃PO₄"],
        "options_hi": ["HNO₃", "H₂SO₄", "HCl", "H₃PO₄"],
        "answer_en": "HNO₃",
        "answer_hi": "HNO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which planet has the shortest day?",
        "question_hi": "किस ग्रह का दिन सबसे छोटा होता है?",
        "options_en": ["Jupiter", "Saturn", "Neptune", "Uranus"],
        "options_hi": ["बृहस्पति", "शनि", "नेपच्यून", "युरेनस"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the chemical symbol for copper?",
        "question_hi": "तांबे का रासायनिक प्रतीक क्या है?",
        "options_en": ["Cu", "Co", "Cp", "Cr"],
        "options_hi": ["Cu", "Co", "Cp", "Cr"],
        "answer_en": "Cu",
        "answer_hi": "Cu",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which vitamin deficiency causes scurvy?",
        "question_hi": "किस विटामिन की कमी से स्कर्वी होता है?",
        "options_en": ["Vitamin C", "Vitamin B", "Vitamin A", "Vitamin D"],
        "options_hi": ["विटामिन सी", "विटामिन बी", "विटामिन ए", "विटामिन डी"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन सी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the unit of electric charge?",
        "question_hi": "विद्युत आवेश की इकाई क्या है?",
        "options_en": ["Coulomb", "Ampere", "Volt", "Ohm"],
        "options_hi": ["कूलॉम", "एम्पीयर", "वोल्ट", "ओम"],
        "answer_en": "Coulomb",
        "answer_hi": "कूलॉम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which acid is present in tamarind?",
        "question_hi": "इमली में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Tartaric acid", "Citric acid", "Malic acid", "Acetic acid"],
        "options_hi": ["टार्टरिक अम्ल", "साइट्रिक अम्ल", "मैलिक अम्ल", "एसिटिक अम्ल"],
        "answer_en": "Tartaric acid",
        "answer_hi": "टार्टरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
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
        "num": 46,
        "question_en": "Which planet is the smallest in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे छोटा ग्रह कौन सा है?",
        "options_en": ["Mercury", "Mars", "Venus", "Earth"],
        "options_hi": ["बुध", "मंगल", "शुक्र", "पृथ्वी"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the chemical symbol for zinc?",
        "question_hi": "जस्ता का रासायनिक प्रतीक क्या है?",
        "options_en": ["Zn", "Zi", "Zc", "Zr"],
        "options_hi": ["Zn", "Zi", "Zc", "Zr"],
        "answer_en": "Zn",
        "answer_hi": "Zn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which vitamin deficiency causes night blindness?",
        "question_hi": "किस विटामिन की कमी से रतौंधी होती है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन ए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
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
        "num": 50,
        "question_en": "Which acid is found in ants?",
        "question_hi": "चींटियों में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Formic acid", "Acetic acid", "Citric acid", "Lactic acid"],
        "options_hi": ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल"],
        "answer_en": "Formic acid",
        "answer_hi": "फॉर्मिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the chemical formula of ethanol?",
        "question_hi": "इथेनॉल का रासायनिक सूत्र क्या है?",
        "options_en": ["C₂H₅OH", "CH₃OH", "C₃H₇OH", "C₄H₉OH"],
        "options_hi": ["C₂H₅OH", "CH₃OH", "C₃H₇OH", "C₄H₉OH"],
        "answer_en": "C₂H₅OH",
        "answer_hi": "C₂H₅OH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which planet has rings that are visible from Earth?",
        "question_hi": "किस ग्रह के छल्ले पृथ्वी से दिखाई देते हैं?",
        "options_en": ["Saturn", "Jupiter", "Uranus", "All of these"],
        "options_hi": ["शनि", "बृहस्पति", "युरेनस", "ये सभी"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
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
        "num": 54,
        "question_en": "Which vitamin is also known as niacin?",
        "question_hi": "किस विटामिन को नियासिन भी कहा जाता है?",
        "options_en": ["Vitamin B3", "Vitamin B6", "Vitamin B12", "Vitamin C"],
        "options_hi": ["विटामिन बी3", "विटामिन बी6", "विटामिन बी12", "विटामिन सी"],
        "answer_en": "Vitamin B3",
        "answer_hi": "विटामिन बी3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the unit of frequency?",
        "question_hi": "आवृत्ति की इकाई क्या है?",
        "options_en": ["Hertz", "Watt", "Joule", "Newton"],
        "options_hi": ["हर्ट्ज", "वाट", "जूल", "न्यूटन"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which acid is used in car batteries?",
        "question_hi": "कार बैटरियों में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Hydrochloric acid", "Nitric acid", "Phosphoric acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल", "फॉस्फोरिक अम्ल"],
        "answer_en": "Sulfuric acid",
        "answer_hi": "सल्फ्यूरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the chemical formula of calcium carbonate?",
        "question_hi": "कैल्शियम कार्बोनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["CaCO₃", "CaO", "Ca(OH)₂", "CaCl₂"],
        "options_hi": ["CaCO₃", "CaO", "Ca(OH)₂", "CaCl₂"],
        "answer_en": "CaCO₃",
        "answer_hi": "CaCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which planet is the coldest?",
        "question_hi": "सबसे ठंडा ग्रह कौन सा है?",
        "options_en": ["Neptune", "Uranus", "Saturn", "Mars"],
        "options_hi": ["नेपच्यून", "युरेनस", "शनि", "मंगल"],
        "answer_en": "Neptune",
        "answer_hi": "नेपच्यून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the chemical symbol for chlorine?",
        "question_hi": "क्लोरीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Cl", "Ch", "Cr", "Co"],
        "options_hi": ["Cl", "Ch", "Cr", "Co"],
        "answer_en": "Cl",
        "answer_hi": "Cl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which vitamin deficiency causes anemia?",
        "question_hi": "किस विटामिन की कमी से एनीमिया होता है?",
        "options_en": ["Vitamin B12", "Vitamin C", "Vitamin D", "Vitamin K"],
        "options_hi": ["विटामिन बी12", "विटामिन सी", "विटामिन डी", "विटामिन K"],
        "answer_en": "Vitamin B12",
        "answer_hi": "विटामिन बी12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the unit of magnetic field strength?",
        "question_hi": "चुंबकीय क्षेत्र शक्ति की इकाई क्या है?",
        "options_en": ["Tesla", "Weber", "Henry", "Farad"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "फैरड"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which acid is present in grapes?",
        "question_hi": "अंगूर में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Tartaric acid", "Citric acid", "Malic acid", "All of these"],
        "options_hi": ["टार्टरिक अम्ल", "साइट्रिक अम्ल", "मैलिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
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
        "num": 64,
        "question_en": "Which planet is known as the Evening Star?",
        "question_hi": "किस ग्रह को शाम का तारा कहा जाता है?",
        "options_en": ["Venus", "Mercury", "Mars", "Jupiter"],
        "options_hi": ["शुक्र", "बुध", "मंगल", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
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
        "num": 66,
        "question_en": "Which vitamin is essential for blood clotting?",
        "question_hi": "रक्त के थक्के बनने के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin E"],
        "options_hi": ["विटामिन K", "विटामिन सी", "विटामिन डी", "विटामिन ई"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
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
        "num": 68,
        "question_en": "Which acid is present in tomatoes?",
        "question_hi": "टमाटर में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Oxalic acid", "Citric acid", "Malic acid", "All of these"],
        "options_hi": ["ऑक्सालिक अम्ल", "साइट्रिक अम्ल", "मैलिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the chemical formula of common sugar?",
        "question_hi": "साधारण चीनी का रासायनिक सूत्र क्या है?",
        "options_en": ["C₁₂H₂₂O₁₁", "C₆H₁₂O₆", "C₂H₄O₂", "C₆H₆O₆"],
        "options_hi": ["C₁₂H₂₂O₁१", "C₆H₁₂O₆", "C₂H₄O₂", "C₆H₆O₆"],
        "answer_en": "C₁₂H₂₂O₁₁",
        "answer_hi": "C₁₂H₂₂O₁१",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which planet has a day longer than its year?",
        "question_hi": "किस ग्रह का दिन उसके वर्ष से लंबा होता है?",
        "options_en": ["Venus", "Mercury", "Mars", "Jupiter"],
        "options_hi": ["शुक्र", "बुध", "मंगल", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
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
        "num": 72,
        "question_en": "Which vitamin is also called riboflavin?",
        "question_hi": "किस विटामिन को राइबोफ्लेविन भी कहा जाता है?",
        "options_en": ["Vitamin B2", "Vitamin B1", "Vitamin B6", "Vitamin B12"],
        "options_hi": ["विटामिन बी2", "विटामिन बी1", "विटामिन बी6", "विटामिन बी12"],
        "answer_en": "Vitamin B2",
        "answer_hi": "विटामिन बी2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the unit of luminous intensity?",
        "question_hi": "ज्योति तीव्रता की इकाई क्या है?",
        "options_en": ["Candela", "Lumen", "Lux", "Watt"],
        "options_hi": ["कैंडेला", "ल्यूमेन", "लक्स", "वाट"],
        "answer_en": "Candela",
        "answer_hi": "कैंडेला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which acid is used in aspirin?",
        "question_hi": "एस्पिरिन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetylsalicylic acid", "Salicylic acid", "Benzoic acid", "Formic acid"],
        "options_hi": ["एसिटाइलसैलिसिलिक अम्ल", "सैलिसिलिक अम्ल", "बेंजोइक अम्ल", "फॉर्मिक अम्ल"],
        "answer_en": "Acetylsalicylic acid",
        "answer_hi": "एसिटाइलसैलिसिलिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the chemical formula of common bleach?",
        "question_hi": "साधारण ब्लीच का रासायनिक सूत्र क्या है?",
        "options_en": ["NaOCl", "NaCl", "NaOH", "NaHCO₃"],
        "options_hi": ["NaOCl", "NaCl", "NaOH", "NaHCO₃"],
        "answer_en": "NaOCl",
        "answer_hi": "NaOCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which planet has the most elliptical orbit?",
        "question_hi": "किस ग्रह की कक्षा सबसे अधिक दीर्घवृत्ताकार है?",
        "options_en": ["Pluto (dwarf planet)", "Mercury", "Mars", "Venus"],
        "options_hi": ["प्लूटो (बौना ग्रह)", "बुध", "मंगल", "शुक्र"],
        "answer_en": "Pluto (dwarf planet)",
        "answer_hi": "प्लूटो (बौना ग्रह)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the chemical symbol for carbon?",
        "question_hi": "कार्बन का रासायनिक प्रतीक क्या है?",
        "options_en": ["C", "Ca", "Co", "Cn"],
        "options_hi": ["C", "Ca", "Co", "Cn"],
        "answer_en": "C",
        "answer_hi": "C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which vitamin is also called thiamine?",
        "question_hi": "किस विटामिन को थायमिन भी कहा जाता है?",
        "options_en": ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12"],
        "options_hi": ["विटामिन बी1", "विटामिन बी2", "विटामिन बी6", "विटामिन बी12"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन बी1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the SI unit of temperature?",
        "question_hi": "तापमान की SI इकाई क्या है?",
        "options_en": ["Kelvin", "Celsius", "Fahrenheit", "Rankine"],
        "options_hi": ["केल्विन", "सेल्सियस", "फारेनहाइट", "रैंकिन"],
        "answer_en": "Kelvin",
        "answer_hi": "केल्विन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which acid is found in honey bee sting?",
        "question_hi": "मधुमक्खी के डंक में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Formic acid", "Acetic acid", "Methanoic acid", "Both A and C"],
        "options_hi": ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "मेथैनोइक अम्ल", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the chemical formula of gypsum?",
        "question_hi": "जिप्सम का रासायनिक सूत्र क्या है?",
        "options_en": ["CaSO₄·2H₂O", "CaCO₃", "CaO", "Ca(OH)₂"],
        "options_hi": ["CaSO₄·2H₂O", "CaCO₃", "CaO", "Ca(OH)₂"],
        "answer_en": "CaSO₄·2H₂O",
        "answer_hi": "CaSO₄·2H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which planet has the fastest winds in the solar system?",
        "question_hi": "सौर मंडल में किस ग्रह पर सबसे तेज हवाएं चलती हैं?",
        "options_en": ["Neptune", "Jupiter", "Saturn", "Uranus"],
        "options_hi": ["नेपच्यून", "बृहस्पति", "शनि", "युरेनस"],
        "answer_en": "Neptune",
        "answer_hi": "नेपच्यून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
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
        "num": 84,
        "question_en": "Which vitamin is also called cobalamin?",
        "question_hi": "किस विटामिन को कोबालामिन भी कहा जाता है?",
        "options_en": ["Vitamin B12", "Vitamin B6", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन बी12", "विटामिन बी6", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin B12",
        "answer_hi": "विटामिन बी12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the unit of pressure?",
        "question_hi": "दबाव की इकाई क्या है?",
        "options_en": ["Pascal", "Newton", "Joule", "Watt"],
        "options_hi": ["पास्कल", "न्यूटन", "जूल", "वाट"],
        "answer_en": "Pascal",
        "answer_hi": "पास्कल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which acid is used in soft drinks?",
        "question_hi": "शीतल पेय में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Carbonic acid", "Citric acid", "Phosphoric acid", "All of these"],
        "options_hi": ["कार्बोनिक अम्ल", "साइट्रिक अम्ल", "फॉस्फोरिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
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
        "num": 88,
        "question_en": "Which planet has the Great Dark Spot?",
        "question_hi": "किस ग्रह पर महान अंधेरा धब्बा है?",
        "options_en": ["Neptune", "Uranus", "Saturn", "Jupiter"],
        "options_hi": ["नेपच्यून", "युरेनस", "शनि", "बृहस्पति"],
        "answer_en": "Neptune",
        "answer_hi": "नेपच्यून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
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
        "num": 90,
        "question_en": "Which vitamin is also called pantothenic acid?",
        "question_hi": "किस विटामिन को पैंटोथेनिक अम्ल भी कहा जाता है?",
        "options_en": ["Vitamin B5", "Vitamin B6", "Vitamin B12", "Vitamin C"],
        "options_hi": ["विटामिन बी5", "विटामिन बी6", "विटामिन बी12", "विटामिन सी"],
        "answer_en": "Vitamin B5",
        "answer_hi": "विटामिन बी5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the unit of energy?",
        "question_hi": "ऊर्जा की इकाई क्या है?",
        "options_en": ["Joule", "Newton", "Pascal", "Watt"],
        "options_hi": ["जूल", "न्यूटन", "पास्कल", "वाट"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which acid is used in pickling?",
        "question_hi": "अचार बनाने में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetic acid", "Citric acid", "Lactic acid", "Tartaric acid"],
        "options_hi": ["एसिटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल", "टार्टरिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
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
        "num": 94,
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
        "num": 95,
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
        "num": 96,
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
        "num": 97,
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
        "num": 98,
        "question_en": "Which acid is present in our stomach?",
        "question_hi": "हमारे पेट में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Phosphoric acid"],
        "options_hi": ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "फॉस्फोरिक अम्ल"],
        "answer_en": "Hydrochloric acid",
        "answer_hi": "हाइड्रोक्लोरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the chemical formula of washing soda?",
        "question_hi": "धोने का सोडा का रासायनिक सूत्र क्या है?",
        "options_en": ["Na₂CO₃·10H₂O", "NaHCO₃", "NaOH", "NaCl"],
        "options_hi": ["Na₂CO₃·10H₂O", "NaHCO₃", "NaOH", "NaCl"],
        "answer_en": "Na₂CO₃·10H₂O",
        "answer_hi": "Na₂CO₃·10H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which planet is closest to the Sun?",
        "question_hi": "सूर्य के सबसे निकट कौन सा ग्रह है?",
        "options_en": ["Mercury", "Venus", "Earth", "Mars"],
        "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
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