const questions = [
    {
        "num": 1,
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
        "num": 2,
        "question_en": "Which scientist formulated the theory of relativity?",
        "question_hi": "किस वैज्ञानिक ने सापेक्षता का सिद्धांत प्रतिपादित किया?",
        "options_en": ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Niels Bohr"],
        "options_hi": ["आइजैक न्यूटन", "अल्बर्ट आइंस्टीन", "स्टीफन हॉकिंग", "नील्स बोहर"],
        "answer_en": "Albert Einstein",
        "answer_hi": "अल्बर्ट आइंस्टीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the chemical formula of urea?",
        "question_hi": "यूरिया का रासायनिक सूत्र क्या है?",
        "options_en": ["CO(NH₂)₂", "NH₃", "NH₄NO₃", "CH₄N₂O"],
        "options_hi": ["CO(NH₂)₂", "NH₃", "NH₄NO₃", "CH₄N₂O"],
        "answer_en": "CO(NH₂)₂",
        "answer_hi": "CO(NH₂)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which instrument is used to measure earthquake intensity?",
        "question_hi": "भूकंप की तीव्रता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Seismograph", "Barometer", "Thermometer", "Hygrometer"],
        "options_hi": ["सीस्मोग्राफ", "बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर"],
        "answer_en": "Seismograph",
        "answer_hi": "सीस्मोग्राफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which blood cells are responsible for immune response?",
        "question_hi": "कौन सी रक्त कोशिकाएं प्रतिरक्षा प्रतिक्रिया के लिए जिम्मेदार हैं?",
        "options_en": ["Red blood cells", "White blood cells", "Platelets", "Plasma cells"],
        "options_hi": ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा कोशिकाएं"],
        "answer_en": "White blood cells",
        "answer_hi": "श्वेत रक्त कोशिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the chemical name of TNT?",
        "question_hi": "टीएनटी का रासायनिक नाम क्या है?",
        "options_en": ["Trinitrotoluene", "Trinitrobenzene", "Tetranitrotoluene", "Dinitrotoluene"],
        "options_hi": ["ट्राईनाइट्रोटॉलूईन", "ट्राईनाइट्रोबेंजीन", "टेट्रानाइट्रोटॉलूईन", "डाईनाइट्रोटॉलूईन"],
        "answer_en": "Trinitrotoluene",
        "answer_hi": "ट्राईनाइट्रोटॉलूईन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which vitamin is also known as biotin?",
        "question_hi": "किस विटामिन को बायोटिन भी कहा जाता है?",
        "options_en": ["Vitamin B7", "Vitamin B12", "Vitamin B6", "Vitamin B9"],
        "options_hi": ["विटामिन बी7", "विटामिन बी12", "विटामिन बी6", "विटामिन बी9"],
        "answer_en": "Vitamin B7",
        "answer_hi": "विटामिन बी7",
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
        "question_en": "Which metal is used in thermometers?",
        "question_hi": "थर्मामीटर में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Mercury", "Gallium", "Sodium", "Potassium"],
        "options_hi": ["पारा", "गैलियम", "सोडियम", "पोटेशियम"],
        "answer_en": "Mercury",
        "answer_hi": "पारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
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
        "num": 11,
        "question_en": "Which part of the plant conducts photosynthesis?",
        "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
        "options_en": ["Roots", "Stem", "Leaves", "Flowers"],
        "options_hi": ["जड़ें", "तना", "पत्तियाँ", "फूल"],
        "answer_en": "Leaves",
        "answer_hi": "पत्तियाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the lightest metal?",
        "question_hi": "सबसे हल्की धातु कौन सी है?",
        "options_en": ["Lithium", "Aluminum", "Magnesium", "Beryllium"],
        "options_hi": ["लिथियम", "एल्युमीनियम", "मैग्नीशियम", "बेरिलियम"],
        "answer_en": "Lithium",
        "answer_hi": "लिथियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which gas is used in anesthesia?",
        "question_hi": "एनेस्थीसिया में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Nitrous oxide", "Carbon dioxide", "Helium"],
        "options_hi": ["ऑक्सीजन", "नाइट्रस ऑक्साइड", "कार्बन डाइऑक्साइड", "हीलियम"],
        "answer_en": "Nitrous oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the melting point of ice in Celsius?",
        "question_hi": "बर्फ का गलनांक सेल्सियस में क्या है?",
        "options_en": ["0°C", "-10°C", "10°C", "100°C"],
        "options_hi": ["0°C", "-10°C", "10°C", "100°C"],
        "answer_en": "0°C",
        "answer_hi": "0°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which planet is known as Earth's twin?",
        "question_hi": "किस ग्रह को पृथ्वी का जुड़वां कहा जाता है?",
        "options_en": ["Mars", "Venus", "Mercury", "Jupiter"],
        "options_hi": ["मंगल", "शुक्र", "बुध", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
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
        "question_en": "Which vitamin deficiency causes pernicious anemia?",
        "question_hi": "किस विटामिन की कमी से घातक रक्ताल्पता होती है?",
        "options_en": ["Vitamin B12", "Vitamin B9", "Vitamin B6", "Vitamin B1"],
        "options_hi": ["विटामिन बी12", "विटामिन बी9", "विटामिन बी6", "विटामिन बी1"],
        "answer_en": "Vitamin B12",
        "answer_hi": "विटामिन बी12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the unit of torque?",
        "question_hi": "टॉर्क की इकाई क्या है?",
        "options_en": ["Newton-meter", "Joule", "Watt", "Pascal"],
        "options_hi": ["न्यूटन-मीटर", "जूल", "वाट", "पास्कल"],
        "answer_en": "Newton-meter",
        "answer_hi": "न्यूटन-मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which acid is used in lead-acid batteries?",
        "question_hi": "लेड-एसिड बैटरियों में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Hydrochloric acid", "Nitric acid", "Phosphoric acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल", "फॉस्फोरिक अम्ल"],
        "answer_en": "Sulfuric acid",
        "answer_hi": "सल्फ्यूरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the chemical formula of hydrogen sulfide?",
        "question_hi": "हाइड्रोजन सल्फाइड का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂S", "HS", "H₂SO₄", "H₂SO₃"],
        "options_hi": ["H₂S", "HS", "H₂SO₄", "H₂SO₃"],
        "answer_en": "H₂S",
        "answer_hi": "H₂S",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which is the fastest spinning planet?",
        "question_hi": "सबसे तेज घूमने वाला ग्रह कौन सा है?",
        "options_en": ["Jupiter", "Saturn", "Neptune", "Uranus"],
        "options_hi": ["बृहस्पति", "शनि", "नेपच्यून", "युरेनस"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
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
        "num": 23,
        "question_en": "Which vitamin is essential for bone health?",
        "question_hi": "हड्डियों के स्वास्थ्य के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"],
        "options_hi": ["विटामिन डी", "विटामिन सी", "विटामिन ए", "विटामिन के"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the unit of magnetic moment?",
        "question_hi": "चुंबकीय आघूर्ण की इकाई क्या है?",
        "options_en": ["Ampere-meter²", "Tesla", "Weber", "Henry"],
        "options_hi": ["एम्पीयर-मीटर²", "टेस्ला", "वेबर", "हेनरी"],
        "answer_en": "Ampere-meter²",
        "answer_hi": "एम्पीयर-मीटर²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
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
        "num": 26,
        "question_en": "What is the chemical formula of phosphorus pentoxide?",
        "question_hi": "फॉस्फोरस पेंटॉक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["P₄O₁₀", "P₂O₅", "PO₄", "P₂O₃"],
        "options_hi": ["P₄O₁₀", "P₂O₅", "PO₄", "P₂O₃"],
        "answer_en": "P₄O₁₀",
        "answer_hi": "P₄O₁₀",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
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
        "num": 28,
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
        "num": 29,
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
        "num": 30,
        "question_en": "What is the unit of electric field strength?",
        "question_hi": "विद्युत क्षेत्र शक्ति की इकाई क्या है?",
        "options_en": ["Volt/meter", "Newton/Coulomb", "Both", "Ampere/meter"],
        "options_hi": ["वोल्ट/मीटर", "न्यूटन/कूलॉम", "दोनों", "एम्पीयर/मीटर"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which acid is present in gastric juice?",
        "question_hi": "गैस्ट्रिक जूस में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Phosphoric acid"],
        "options_hi": ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "फॉस्फोरिक अम्ल"],
        "answer_en": "Hydrochloric acid",
        "answer_hi": "हाइड्रोक्लोरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the chemical formula of carbon disulfide?",
        "question_hi": "कार्बन डाइसल्फाइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CS₂", "C₂S", "CS", "C₂S₂"],
        "options_hi": ["CS₂", "C₂S", "CS", "C₂S₂"],
        "answer_en": "CS₂",
        "answer_hi": "CS₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which planet has the most extreme seasons?",
        "question_hi": "किस ग्रह पर सबसे अधिक चरम ऋतुएँ होती हैं?",
        "options_en": ["Uranus", "Neptune", "Saturn", "Jupiter"],
        "options_hi": ["युरेनस", "नेपच्यून", "शनि", "बृहस्पति"],
        "answer_en": "Uranus",
        "answer_hi": "युरेनस",
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
        "question_en": "Which vitamin is essential for blood clotting?",
        "question_hi": "रक्त के थक्के बनने के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin E"],
        "options_hi": ["विटामिन के", "विटामिन सी", "विटामिन डी", "विटामिन ई"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the unit of specific volume?",
        "question_hi": "विशिष्ट आयतन की इकाई क्या है?",
        "options_en": ["m³/kg", "kg/m³", "L/kg", "All of these"],
        "options_hi": ["m³/kg", "kg/m³", "L/kg", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
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
        "num": 38,
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
        "num": 39,
        "question_en": "Which planet has the most volcanic activity?",
        "question_hi": "किस ग्रह पर सबसे अधिक ज्वालामुखी गतिविधि है?",
        "options_en": ["Venus", "Mars", "Io (moon)", "Earth"],
        "options_hi": ["शुक्र", "मंगल", "आईओ (चंद्रमा)", "पृथ्वी"],
        "answer_en": "Io (moon)",
        "answer_hi": "आईओ (चंद्रमा)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
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
        "num": 41,
        "question_en": "Which vitamin deficiency causes paresthesia?",
        "question_hi": "किस विटामिन की कमी से पेरेस्थेसिया होता है?",
        "options_en": ["Vitamin B12", "Vitamin B6", "Vitamin B1", "All of these"],
        "options_hi": ["विटामिन बी12", "विटामिन बी6", "विटामिन बी1", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the unit of electric displacement?",
        "question_hi": "विद्युत विस्थापन की इकाई क्या है?",
        "options_en": ["Coulomb/meter²", "Ampere/meter", "Volt/meter", "Tesla"],
        "options_hi": ["कूलॉम/मीटर²", "एम्पीयर/मीटर", "वोल्ट/मीटर", "टेस्ला"],
        "answer_en": "Coulomb/meter²",
        "answer_hi": "कूलॉम/मीटर²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which acid is used in the production of synthetic fibers?",
        "question_hi": "सिंथेटिक फाइबर उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Terephthalic acid", "Acetic acid", "Citric acid", "Formic acid"],
        "options_hi": ["टेरेफ्थैलिक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "फॉर्मिक अम्ल"],
        "answer_en": "Terephthalic acid",
        "answer_hi": "टेरेफ्थैलिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the chemical formula of potassium dichromate?",
        "question_hi": "पोटेशियम डाइक्रोमेट का रासायनिक सूत्र क्या है?",
        "options_en": ["K₂Cr₂O₇", "KCrO₄", "K₂CrO₄", "KMnO₄"],
        "options_hi": ["K₂Cr₂O₇", "KCrO₄", "K₂CrO₄", "KMnO₄"],
        "answer_en": "K₂Cr₂O₇",
        "answer_hi": "K₂Cr₂O₇",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
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
        "num": 46,
        "question_en": "What is the chemical symbol for bromine?",
        "question_hi": "ब्रोमीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Br", "Bm", "Bn", "Bo"],
        "options_hi": ["Br", "Bm", "Bn", "Bo"],
        "answer_en": "Br",
        "answer_hi": "Br",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which vitamin deficiency causes angular cheilitis?",
        "question_hi": "किस विटामिन की कमी से एंगुलर चीलाइटिस होता है?",
        "options_en": ["Vitamin B2", "Vitamin B12", "Vitamin B6", "Vitamin B3"],
        "options_hi": ["विटामिन बी2", "विटामिन बी12", "विटामिन बी6", "विटामिन बी3"],
        "answer_en": "Vitamin B2",
        "answer_hi": "विटामिन बी2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the unit of electric polarization?",
        "question_hi": "विद्युत ध्रुवीकरण की इकाई क्या है?",
        "options_en": ["Coulomb/meter²", "Ampere/meter", "Volt/meter", "Newton/Coulomb"],
        "options_hi": ["कूलॉम/मीटर²", "एम्पीयर/मीटर", "वोल्ट/मीटर", "न्यूटन/कूलॉम"],
        "answer_en": "Coulomb/meter²",
        "answer_hi": "कूलॉम/मीटर²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which acid is used in the production of aspirin?",
        "question_hi": "एस्पिरिन उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Salicylic acid", "Acetic anhydride", "Both", "Formic acid"],
        "options_hi": ["सैलिसिलिक अम्ल", "एसिटिक एनहाइड्राइड", "दोनों", "फॉर्मिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the chemical formula of sodium thiosulfate?",
        "question_hi": "सोडियम थायोसल्फेट का रासायनिक सूत्र क्या है?",
        "options_en": ["Na₂S₂O₃", "Na₂SO₄", "Na₂SO₃", "Na₂S₂O₈"],
        "options_hi": ["Na₂S₂O₃", "Na₂SO₄", "Na₂SO₃", "Na₂S₂O₈"],
        "answer_en": "Na₂S₂O₃",
        "answer_hi": "Na₂S₂O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which planet has the strongest winds?",
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
        "num": 53,
        "question_en": "Which vitamin is essential for collagen synthesis?",
        "question_hi": "कोलेजन संश्लेषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin E"],
        "options_hi": ["विटामिन सी", "विटामिन ए", "विटामिन डी", "विटामिन ई"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन सी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the unit of gravitational constant?",
        "question_hi": "गुरुत्वाकर्षण स्थिरांक की इकाई क्या है?",
        "options_en": ["N·m²/kg²", "m³/kg·s²", "Both", "kg·m/s²"],
        "options_hi": ["N·m²/kg²", "m³/kg·s²", "दोनों", "kg·m/s²"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which acid is used in the production of vinegar?",
        "question_hi": "सिरका उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetic acid", "Citric acid", "Lactic acid", "Tartaric acid"],
        "options_hi": ["एसिटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल", "टार्टरिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
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
        "question_en": "Which planet has the most extreme axial tilt?",
        "question_hi": "किस ग्रह का अक्षीय झुकाव सबसे अधिक चरम है?",
        "options_en": ["Uranus", "Neptune", "Saturn", "Jupiter"],
        "options_hi": ["युरेनस", "नेपच्यून", "शनि", "बृहस्पति"],
        "answer_en": "Uranus",
        "answer_hi": "युरेनस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the chemical symbol for germanium?",
        "question_hi": "जर्मेनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ge", "Gm", "Gr", "Ga"],
        "options_hi": ["Ge", "Gm", "Gr", "Ga"],
        "answer_en": "Ge",
        "answer_hi": "Ge",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which vitamin deficiency causes photophobia?",
        "question_hi": "किस विटामिन की कमी से फोटोफोबिया होता है?",
        "options_en": ["Vitamin B2", "Vitamin A", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन बी2", "विटामिन ए", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin B2",
        "answer_hi": "विटामिन बी2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the unit of permeability?",
        "question_hi": "पारगम्यता की इकाई क्या है?",
        "options_en": ["Henry/meter", "Tesla/Ampere", "Both", "Weber/Ampere"],
        "options_hi": ["हेनरी/मीटर", "टेस्ला/एम्पीयर", "दोनों", "वेबर/एम्पीयर"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which acid is used in the production of paints?",
        "question_hi": "पेंट उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Phthalic acid", "Acetic acid", "Citric acid", "Formic acid"],
        "options_hi": ["थैलिक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "फॉर्मिक अम्ल"],
        "answer_en": "Phthalic acid",
        "answer_hi": "थैलिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
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
        "num": 65,
        "question_en": "Which vitamin deficiency causes neural tube defects?",
        "question_hi": "किस विटामिन की कमी से न्यूरल ट्यूब दोष होते हैं?",
        "options_en": ["Vitamin B9", "Vitamin B12", "Vitamin B6", "Vitamin B1"],
        "options_hi": ["विटामिन बी9", "विटामिन बी12", "विटामिन बी6", "विटामिन बी1"],
        "answer_en": "Vitamin B9",
        "answer_hi": "विटामिन बी9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the unit of electric mobility?",
        "question_hi": "विद्युत गतिशीलता की इकाई क्या है?",
        "options_en": ["m²/V·s", "cm²/V·s", "Both", "A·m²/V"],
        "options_hi": ["m²/V·s", "cm²/V·s", "दोनों", "A·m²/V"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
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
        "num": 68,
        "question_en": "What is the chemical formula of sodium bicarbonate?",
        "question_hi": "सोडियम बाइकार्बोनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["NaHCO₃", "Na₂CO₃", "NaOH", "Na₂SO₄"],
        "options_hi": ["NaHCO₃", "Na₂CO₃", "NaOH", "Na₂SO₄"],
        "answer_en": "NaHCO₃",
        "answer_hi": "NaHCO₃",
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
        "question_en": "What is the chemical symbol for hafnium?",
        "question_hi": "हाफ्नियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Hf", "Ha", "Hn", "Hm"],
        "options_hi": ["Hf", "Ha", "Hn", "Hm"],
        "answer_en": "Hf",
        "answer_hi": "Hf",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which vitamin is essential for antioxidant defense?",
        "question_hi": "एंटीऑक्सीडेंट रक्षा के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin E", "Vitamin C", "Both", "Vitamin A"],
        "options_hi": ["विटामिन ई", "विटामिन सी", "दोनों", "विटामिन ए"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the unit of electric susceptibility?",
        "question_hi": "विद्युत संवेदनशीलता की इकाई क्या है?",
        "options_en": ["Dimensionless", "Coulomb/m²", "Volt/m", "Ampere/m"],
        "options_hi": ["आयामहीन", "कूलॉम/म²", "वोल्ट/मीटर", "एम्पीयर/मीटर"],
        "answer_en": "Dimensionless",
        "answer_hi": "आयामहीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
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
        "num": 74,
        "question_en": "What is the chemical formula of calcium oxide?",
        "question_hi": "कैल्शियम ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CaO", "CaCO₃", "Ca(OH)₂", "CaSO₄"],
        "options_hi": ["CaO", "CaCO₃", "Ca(OH)₂", "CaSO₄"],
        "answer_en": "CaO",
        "answer_hi": "CaO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
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
        "num": 76,
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
        "num": 77,
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
        "num": 78,
        "question_en": "What is the unit of electric permittivity?",
        "question_hi": "विद्युत पारगम्यता की इकाई क्या है?",
        "options_en": ["Farad/meter", "Coulomb²/N·m²", "Both", "Henry/meter"],
        "options_hi": ["फैरड/मीटर", "कूलॉम²/N·m²", "दोनों", "हेनरी/मीटर"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
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
        "num": 80,
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
        "num": 81,
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
        "num": 82,
        "question_en": "What is the chemical symbol for molybdenum?",
        "question_hi": "मोलिब्डेनम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Mo", "Mb", "Ml", "Mn"],
        "options_hi": ["Mo", "Mb", "Ml", "Mn"],
        "answer_en": "Mo",
        "answer_hi": "Mo",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which vitamin deficiency causes fatigue and weakness?",
        "question_hi": "किस विटामिन की कमी से थकान और कमजोरी होती है?",
        "options_en": ["Vitamin B12", "Vitamin D", "Iron (not vitamin)", "All of these"],
        "options_hi": ["विटामिन बी12", "विटामिन डी", "आयरन (विटामिन नहीं)", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the unit of magnetic susceptibility?",
        "question_hi": "चुंबकीय संवेदनशीलता की इकाई क्या है?",
        "options_en": ["Dimensionless", "Tesla", "Weber", "Henry"],
        "options_hi": ["आयामहीन", "टेस्ला", "वेबर", "हेनरी"],
        "answer_en": "Dimensionless",
        "answer_hi": "आयामहीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
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
        "num": 86,
        "question_en": "What is the chemical formula of aluminum oxide?",
        "question_hi": "एल्युमीनियम ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["Al₂O₃", "AlO", "Al₃O₂", "AlO₂"],
        "options_hi": ["Al₂O₃", "AlO", "Al₃O₂", "AlO₂"],
        "answer_en": "Al₂O₃",
        "answer_hi": "Al₂O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
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
        "num": 88,
        "question_en": "What is the chemical symbol for technetium?",
        "question_hi": "टेक्नेटियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Tc", "Tn", "Te", "Tm"],
        "options_hi": ["Tc", "Tn", "Te", "Tm"],
        "answer_en": "Tc",
        "answer_hi": "Tc",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which vitamin is essential for DNA synthesis?",
        "question_hi": "DNA संश्लेषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B9", "Vitamin B12", "Both", "Vitamin B6"],
        "options_hi": ["विटामिन बी9", "विटामिन बी12", "दोनों", "विटामिन बी6"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the unit of Planck's constant?",
        "question_hi": "प्लैंक स्थिरांक की इकाई क्या है?",
        "options_en": ["Joule-second", "eV-second", "Both", "Watt-second"],
        "options_hi": ["जूल-सेकंड", "eV-सेकंड", "दोनों", "वाट-सेकंड"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
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
        "num": 92,
        "question_en": "What is the chemical formula of silicon dioxide?",
        "question_hi": "सिलिकॉन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["SiO₂", "SiO", "Si₂O₃", "Si₃O₄"],
        "options_hi": ["SiO₂", "SiO", "Si₂O₃", "Si₃O₄"],
        "answer_en": "SiO₂",
        "answer_hi": "SiO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
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
        "num": 94,
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
        "num": 95,
        "question_en": "Which vitamin deficiency causes bleeding gums?",
        "question_hi": "किस विटामिन की कमी से मसूड़ों से खून आता है?",
        "options_en": ["Vitamin C", "Vitamin K", "Both", "Vitamin A"],
        "options_hi": ["विटामिन सी", "विटामिन के", "दोनों", "विटामिन ए"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the unit of Boltzmann constant?",
        "question_hi": "बोल्ट्जमैन स्थिरांक की इकाई क्या है?",
        "options_en": ["Joule/Kelvin", "eV/Kelvin", "Both", "Watt/Kelvin"],
        "options_hi": ["जूल/केल्विन", "eV/केल्विन", "दोनों", "वाट/केल्विन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which acid is used in the production of cosmetics?",
        "question_hi": "कॉस्मेटिक उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Salicylic acid", "Hyaluronic acid", "Both", "Formic acid"],
        "options_hi": ["सैलिसिलिक अम्ल", "हयालूरोनिक अम्ल", "दोनों", "फॉर्मिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the chemical formula of iron(III) oxide?",
        "question_hi": "आयरन(III) ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["Fe₂O₃", "FeO", "Fe₃O₄", "Fe(OH)₃"],
        "options_hi": ["Fe₂O₃", "FeO", "Fe₃O₄", "Fe(OH)₃"],
        "answer_en": "Fe₂O₃",
        "answer_hi": "Fe₂O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
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
        "num": 100,
        "question_en": "What is the chemical symbol for palladium?",
        "question_hi": "पैलेडियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Pd", "Pl", "Pa", "Pm"],
        "options_hi": ["Pd", "Pl", "Pa", "Pm"],
        "answer_en": "Pd",
        "answer_hi": "Pd",
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