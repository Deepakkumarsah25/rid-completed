const questions=[
    {
        "num": 1,
        "question_en": "What is the scientific name of humans?",
        "question_hi": "मनुष्य का वैज्ञानिक नाम क्या है?",
        "options_en": ["Homo erectus", "Homo habilis", "Homo sapiens", "Homo neanderthalensis"],
        "options_hi": ["होमो इरेक्टस", "होमो हैबिलिस", "होमो सेपियन्स", "होमो निएंडरथेलेंसिस"],
        "answer_en": "Homo sapiens",
        "answer_hi": "होमो सेपियन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which organ filters blood in the human body?",
        "question_hi": "मानव शरीर में कौन सा अंग रक्त को फिल्टर करता है?",
        "options_en": ["Heart", "Liver", "Kidneys", "Lungs"],
        "options_hi": ["हृदय", "यकृत", "गुर्दे", "फेफड़े"],
        "answer_en": "Kidneys",
        "answer_hi": "गुर्दे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the study of earthquakes called?",
        "question_hi": "भूकंपों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Volcanology", "Seismology", "Meteorology", "Geology"],
        "options_hi": ["ज्वालामुखी विज्ञान", "सीस्मोलॉजी", "मौसम विज्ञान", "भूविज्ञान"],
        "answer_en": "Seismology",
        "answer_hi": "सीस्मोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which gas is used in fluorescent tubes?",
        "question_hi": "फ्लोरोसेंट ट्यूबों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Neon", "Argon", "Mercury vapor", "All of these"],
        "options_hi": ["नियॉन", "आर्गन", "पारा वाष्प", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the normal human body temperature?",
        "question_hi": "सामान्य मानव शरीर का तापमान कितना होता है?",
        "options_en": ["36.5°C", "37°C", "37.5°C", "38°C"],
        "options_hi": ["36.5°C", "37°C", "37.5°C", "38°C"],
        "answer_en": "37°C",
        "answer_hi": "37°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which part of the plant absorbs water and minerals?",
        "question_hi": "पौधे का कौन सा भाग पानी और खनिज अवशोषित करता है?",
        "options_en": ["Roots", "Stem", "Leaves", "Flowers"],
        "options_hi": ["जड़ें", "तना", "पत्तियाँ", "फूल"],
        "answer_en": "Roots",
        "answer_hi": "जड़ें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the SI unit of electric potential difference?",
        "question_hi": "विद्युत विभवांतर की SI इकाई क्या है?",
        "options_en": ["Ampere", "Volt", "Ohm", "Watt"],
        "options_hi": ["एम्पीयर", "वोल्ट", "ओम", "वाट"],
        "answer_en": "Volt",
        "answer_hi": "वोल्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which vitamin is also known as 'Sunshine Vitamin'?",
        "question_hi": "किस विटामिन को 'सनशाइन विटामिन' के नाम से जाना जाता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the chemical formula of hydrogen peroxide?",
        "question_hi": "हाइड्रोजन पेरोक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂O", "H₂O₂", "HO₂", "H₃O"],
        "options_hi": ["H₂O", "H₂O₂", "HO₂", "H₃O"],
        "answer_en": "H₂O₂",
        "answer_hi": "H₂O₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which planet has the most elliptical orbit?",
        "question_hi": "किस ग्रह की कक्षा सबसे अधिक अण्डाकार है?",
        "options_en": ["Mercury", "Pluto", "Mars", "Venus"],
        "options_hi": ["बुध", "प्लूटो", "मंगल", "शुक्र"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the study of fungi called?",
        "question_hi": "कवकों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Mycology", "Entomology", "Ichthyology", "Ornithology"],
        "options_hi": ["माइकोलॉजी", "कीटविज्ञान", "मत्स्य विज्ञान", "पक्षी विज्ञान"],
        "answer_en": "Mycology",
        "answer_hi": "माइकोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which metal is the best conductor of electricity?",
        "question_hi": "कौन सी धातु विद्युत की सबसे अच्छी सुचालक है?",
        "options_en": ["Copper", "Silver", "Gold", "Aluminum"],
        "options_hi": ["ताँबा", "चाँदी", "सोना", "एल्यूमीनियम"],
        "answer_en": "Silver",
        "answer_hi": "चाँदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the chemical symbol for boron?",
        "question_hi": "बोरॉन का रासायनिक प्रतीक क्या है?",
        "options_en": ["B", "Bo", "Br", "Ba"],
        "options_hi": ["B", "Bo", "Br", "Ba"],
        "answer_en": "B",
        "answer_hi": "B",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which planet is known for its hexagonal storm?",
        "question_hi": "किस ग्रह को उसके षट्कोणीय तूफान के लिए जाना जाता है?",
        "options_en": ["Saturn", "Jupiter", "Neptune", "Uranus"],
        "options_hi": ["शनि", "बृहस्पति", "नेपच्यून", "युरेनस"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the unit of radioactivity?",
        "question_hi": "रेडियोधर्मिता की इकाई क्या है?",
        "options_en": ["Becquerel", "Curie", "Rutherford", "Roentgen"],
        "options_hi": ["बेकरेल", "क्यूरी", "रदरफोर्ड", "रेंटजन"],
        "answer_en": "Becquerel",
        "answer_hi": "बेकरेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which vitamin deficiency causes dermatitis?",
        "question_hi": "किस विटामिन की कमी से डर्मेटाइटिस होता है?",
        "options_en": ["Vitamin B3", "Vitamin B6", "Vitamin B7", "Vitamin C"],
        "options_hi": ["विटामिन B3", "विटामिन B6", "विटामिन B7", "विटामिन सी"],
        "answer_en": "Vitamin B7",
        "answer_hi": "विटामिन B7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the chemical formula of quicklime?",
        "question_hi": "बिना बुझे चूने का रासायनिक सूत्र क्या है?",
        "options_en": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "options_hi": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "answer_en": "CaO",
        "answer_hi": "CaO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which instrument measures atmospheric pressure?",
        "question_hi": "वायुमंडलीय दबाव मापने वाला उपकरण कौन सा है?",
        "options_en": ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
        "options_hi": ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
        "answer_en": "Barometer",
        "answer_hi": "बैरोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the chemical symbol for beryllium?",
        "question_hi": "बेरिलियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Be", "B", "Br", "Bl"],
        "options_hi": ["Be", "B", "Br", "Bl"],
        "answer_en": "Be",
        "answer_hi": "Be",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which planet has the most extreme seasons?",
        "question_hi": "किस ग्रह पर सबसे चरम ऋतुएँ होती हैं?",
        "options_en": ["Uranus", "Mars", "Earth", "Venus"],
        "options_hi": ["युरेनस", "मंगल", "पृथ्वी", "शुक्र"],
        "answer_en": "Uranus",
        "answer_hi": "युरेनस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
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
        "num": 22,
        "question_en": "Which vitamin deficiency causes glossitis?",
        "question_hi": "किस विटामिन की कमी से ग्लोसाइटिस होता है?",
        "options_en": ["Vitamin B2", "Vitamin B12", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन B2", "विटामिन B12", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin B2",
        "answer_hi": "विटामिन B2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
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
        "num": 24,
        "question_en": "Which instrument measures humidity?",
        "question_hi": "आर्द्रता मापने वाला उपकरण कौन सा है?",
        "options_en": ["Hygrometer", "Barometer", "Thermometer", "Anemometer"],
        "options_hi": ["हाइग्रोमीटर", "बैरोमीटर", "थर्मामीटर", "एनीमोमीटर"],
        "answer_en": "Hygrometer",
        "answer_hi": "हाइग्रोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the chemical symbol for lithium?",
        "question_hi": "लिथियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Li", "Lt", "Lm", "La"],
        "options_hi": ["Li", "Lt", "Lm", "La"],
        "answer_en": "Li",
        "answer_hi": "Li",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which planet has the most dramatic auroras?",
        "question_hi": "किस ग्रह पर सबसे नाटकीय अरोरा होते हैं?",
        "options_en": ["Jupiter", "Saturn", "Earth", "Mars"],
        "options_hi": ["बृहस्पति", "शनि", "पृथ्वी", "मंगल"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
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
        "num": 28,
        "question_en": "Which vitamin deficiency causes cheilosis?",
        "question_hi": "किस विटामिन की कमी से चीलोसिस होता है?",
        "options_en": ["Vitamin B2", "Vitamin B6", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन B2", "विटामिन B6", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin B2",
        "answer_hi": "विटामिन B2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
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
        "num": 30,
        "question_en": "Which instrument measures wind speed?",
        "question_hi": "हवा की गति मापने वाला उपकरण कौन सा है?",
        "options_en": ["Anemometer", "Barometer", "Hygrometer", "Thermometer"],
        "options_hi": ["एनीमोमीटर", "बैरोमीटर", "हाइग्रोमीटर", "थर्मामीटर"],
        "answer_en": "Anemometer",
        "answer_hi": "एनीमोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the chemical symbol for fluorine?",
        "question_hi": "फ्लोरीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["F", "Fl", "Fr", "Fe"],
        "options_hi": ["F", "Fl", "Fr", "Fe"],
        "answer_en": "F",
        "answer_hi": "F",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which planet has the most lightning storms?",
        "question_hi": "किस ग्रह पर सबसे अधिक बिजली के तूफान होते हैं?",
        "options_en": ["Jupiter", "Saturn", "Earth", "Venus"],
        "options_hi": ["बृहस्पति", "शनि", "पृथ्वी", "शुक्र"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the unit of electric charge?",
        "question_hi": "विद्युत आवेश की इकाई क्या है?",
        "options_en": ["Coulomb", "Ampere", "Volt", "Watt"],
        "options_hi": ["कूलॉम", "एम्पीयर", "वोल्ट", "वाट"],
        "answer_en": "Coulomb",
        "answer_hi": "कूलॉम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which vitamin deficiency causes stomatitis?",
        "question_hi": "किस विटामिन की कमी से स्टोमाटाइटिस होता है?",
        "options_en": ["Vitamin B2", "Vitamin B3", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन B2", "विटामिन B3", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin B2",
        "answer_hi": "विटामिन B2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the chemical formula of marble?",
        "question_hi": "संगमरमर का रासायनिक सूत्र क्या है?",
        "options_en": ["CaCO₃", "CaO", "Ca(OH)₂", "CaSO₄"],
        "options_hi": ["CaCO₃", "CaO", "Ca(OH)₂", "CaSO₄"],
        "answer_en": "CaCO₃",
        "answer_hi": "CaCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which instrument measures earthquake intensity?",
        "question_hi": "भूकंप की तीव्रता मापने वाला उपकरण कौन सा है?",
        "options_en": ["Seismograph", "Barometer", "Thermometer", "Hygrometer"],
        "options_hi": ["सीस्मोग्राफ", "बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर"],
        "answer_en": "Seismograph",
        "answer_hi": "सीस्मोग्राफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the chemical symbol for bromine?",
        "question_hi": "ब्रोमीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Br", "B", "Bo", "Be"],
        "options_hi": ["Br", "B", "Bo", "Be"],
        "answer_en": "Br",
        "answer_hi": "Br",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which planet has the most dramatic polar caps?",
        "question_hi": "किस ग्रह पर सबसे नाटकीय ध्रुवीय टोपियाँ हैं?",
        "options_en": ["Mars", "Earth", "Jupiter", "Saturn"],
        "options_hi": ["मंगल", "पृथ्वी", "बृहस्पति", "शनि"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
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
        "num": 40,
        "question_en": "Which vitamin deficiency causes angular stomatitis?",
        "question_hi": "किस विटामिन की कमी से एंगुलर स्टोमाटाइटिस होता है?",
        "options_en": ["Vitamin B2", "Vitamin B3", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन B2", "विटामिन B3", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin B2",
        "answer_hi": "विटामिन B2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the chemical formula of chalk?",
        "question_hi": "चॉक का रासायनिक सूत्र क्या है?",
        "options_en": ["CaCO₃", "CaSO₄", "CaO", "Ca(OH)₂"],
        "options_hi": ["CaCO₃", "CaSO₄", "CaO", "Ca(OH)₂"],
        "answer_en": "CaCO₃",
        "answer_hi": "CaCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which instrument measures electric current?",
        "question_hi": "विद्युत धारा मापने वाला उपकरण कौन सा है?",
        "options_en": ["Ammeter", "Voltmeter", "Ohmmeter", "Wattmeter"],
        "options_hi": ["अमीटर", "वोल्टमीटर", "ओममीटर", "वाटमीटर"],
        "answer_en": "Ammeter",
        "answer_hi": "अमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the chemical symbol for astatine?",
        "question_hi": "एस्टाटीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["At", "As", "An", "Ai"],
        "options_hi": ["At", "As", "An", "Ai"],
        "answer_en": "At",
        "answer_hi": "At",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which planet has the most prominent volcanic activity?",
        "question_hi": "किस ग्रह पर सबसे प्रमुख ज्वालामुखी गतिविधि है?",
        "options_en": ["Io (moon of Jupiter)", "Venus", "Mars", "Earth"],
        "options_hi": ["आईओ (बृहस्पति का चंद्रमा)", "शुक्र", "मंगल", "पृथ्वी"],
        "answer_en": "Io (moon of Jupiter)",
        "answer_hi": "आईओ (बृहस्पति का चंद्रमा)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the unit of inductance?",
        "question_hi": "प्रेरकत्व की इकाई क्या है?",
        "options_en": ["Henry", "Farad", "Ohm", "Tesla"],
        "options_hi": ["हेनरी", "फैरड", "ओम", "टेस्ला"],
        "answer_en": "Henry",
        "answer_hi": "हेनरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which vitamin deficiency causes Wernicke-Korsakoff syndrome?",
        "question_hi": "किस विटामिन की कमी से वर्निके-कोर्साकॉफ सिंड्रोम होता है?",
        "options_en": ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12"],
        "options_hi": ["विटामिन B1", "विटामिन B2", "विटामिन B6", "विटामिन B12"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन B1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the chemical formula of dolomite?",
        "question_hi": "डोलोमाइट का रासायनिक सूत्र क्या है?",
        "options_en": ["CaMg(CO₃)₂", "CaCO₃", "MgCO₃", "CaSO₄"],
        "options_hi": ["CaMg(CO₃)₂", "CaCO₃", "MgCO₃", "CaSO₄"],
        "answer_en": "CaMg(CO₃)₂",
        "answer_hi": "CaMg(CO₃)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which instrument measures voltage?",
        "question_hi": "वोल्टेज मापने वाला उपकरण कौन सा है?",
        "options_en": ["Voltmeter", "Ammeter", "Ohmmeter", "Wattmeter"],
        "options_hi": ["वोल्टमीटर", "अमीटर", "ओममीटर", "वाटमीटर"],
        "answer_en": "Voltmeter",
        "answer_hi": "वोल्टमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
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
        "num": 50,
        "question_en": "Which planet has the most dramatic dust storms?",
        "question_hi": "किस ग्रह पर सबसे नाटकीय धूल भरी आँधियाँ आती हैं?",
        "options_en": ["Mars", "Venus", "Jupiter", "Saturn"],
        "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
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
        "num": 52,
        "question_en": "Which vitamin deficiency causes macrocytic anemia?",
        "question_hi": "किस विटामिन की कमी से मैक्रोसाइटिक एनीमिया होता है?",
        "options_en": ["Vitamin B12", "Vitamin B6", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन B12", "विटामिन B6", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin B12",
        "answer_hi": "विटामिन B12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the chemical formula of calcite?",
        "question_hi": "कैल्साइट का रासायनिक सूत्र क्या है?",
        "options_en": ["CaCO₃", "CaO", "Ca(OH)₂", "CaSO₄"],
        "options_hi": ["CaCO₃", "CaO", "Ca(OH)₂", "CaSO₄"],
        "answer_en": "CaCO₃",
        "answer_hi": "CaCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which instrument measures resistance?",
        "question_hi": "प्रतिरोध मापने वाला उपकरण कौन सा है?",
        "options_en": ["Ohmmeter", "Voltmeter", "Ammeter", "Wattmeter"],
        "options_hi": ["ओममीटर", "वोल्टमीटर", "अमीटर", "वाटमीटर"],
        "answer_en": "Ohmmeter",
        "answer_hi": "ओममीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
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
        "num": 56,
        "question_en": "Which planet has the fastest winds in the solar system?",
        "question_hi": "सौर मंडल में किस ग्रह पर सबसे तेज़ हवाएँ चलती हैं?",
        "options_en": ["Neptune", "Jupiter", "Saturn", "Mars"],
        "options_hi": ["नेपच्यून", "बृहस्पति", "शनि", "मंगल"],
        "answer_en": "Neptune",
        "answer_hi": "नेपच्यून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the unit of magnetic field strength?",
        "question_hi": "चुंबकीय क्षेत्र की ताकत की इकाई क्या है?",
        "options_en": ["Tesla", "Weber", "Henry", "Gauss"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which vitamin deficiency causes microcytic anemia?",
        "question_hi": "किस विटामिन की कमी से माइक्रोसाइटिक एनीमिया होता है?",
        "options_en": ["Vitamin B6", "Vitamin B12", "Iron (not vitamin)", "Vitamin C"],
        "options_hi": ["विटामिन B6", "विटामिन B12", "आयरन (विटामिन नहीं)", "विटामिन सी"],
        "answer_en": "Iron (not vitamin)",
        "answer_hi": "आयरन (विटामिन नहीं)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
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
        "num": 60,
        "question_en": "Which instrument measures power consumption?",
        "question_hi": "बिजली की खपत मापने वाला उपकरण कौन सा है?",
        "options_en": ["Wattmeter", "Voltmeter", "Ammeter", "Ohmmeter"],
        "options_hi": ["वाटमीटर", "वोल्टमीटर", "अमीटर", "ओममीटर"],
        "answer_en": "Wattmeter",
        "answer_hi": "वाटमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the chemical symbol for plutonium?",
        "question_hi": "प्लूटोनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Pu", "Pt", "Pl", "Pn"],
        "options_hi": ["Pu", "Pt", "Pl", "Pn"],
        "answer_en": "Pu",
        "answer_hi": "Pu",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which planet is tilted on its side (extreme axial tilt)?",
        "question_hi": "कौन सा ग्रह अपनी तरफ झुका हुआ है (अत्यधिक अक्षीय झुकाव)?",
        "options_en": ["Uranus", "Venus", "Jupiter", "Saturn"],
        "options_hi": ["युरेनस", "शुक्र", "बृहस्पति", "शनि"],
        "answer_en": "Uranus",
        "answer_hi": "युरेनस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
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
        "num": 64,
        "question_en": "Which vitamin deficiency causes hemorrhagic disease of the newborn?",
        "question_hi": "किस विटामिन की कमी से नवजात शिशु में रक्तस्रावी रोग होता है?",
        "options_en": ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin B12"],
        "options_hi": ["विटामिन K", "विटामिन सी", "विटामिन डी", "विटामिन B12"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
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
        "num": 66,
        "question_en": "Which instrument measures sound intensity?",
        "question_hi": "ध्वनि की तीव्रता मापने वाला उपकरण कौन सा है?",
        "options_en": ["Sound level meter", "Oscilloscope", "Spectrometer", "Hygrometer"],
        "options_hi": ["साउंड लेवल मीटर", "ऑसिलोस्कोप", "स्पेक्ट्रोमीटर", "हाइग्रोमीटर"],
        "answer_en": "Sound level meter",
        "answer_hi": "साउंड लेवल मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the chemical symbol for mercury?",
        "question_hi": "पारा का रासायनिक प्रतीक क्या है?",
        "options_en": ["Hg", "Me", "Mr", "My"],
        "options_hi": ["Hg", "Me", "Mr", "My"],
        "answer_en": "Hg",
        "answer_hi": "Hg",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
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
        "num": 69,
        "question_en": "What is the unit of electric conductance?",
        "question_hi": "विद्युत चालकता की इकाई क्या है?",
        "options_en": ["Siemens", "Mho", "Ohm", "Both Siemens and Mho"],
        "options_hi": ["सीमेंस", "महो", "ओम", "सीमेंस और महो दोनों"],
        "answer_en": "Both Siemens and Mho",
        "answer_hi": "सीमेंस और महो दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which vitamin deficiency causes beriberi?",
        "question_hi": "किस विटामिन की कमी से बेरीबेरी रोग होता है?",
        "options_en": ["Vitamin B1", "Vitamin B2", "Vitamin B3", "Vitamin B6"],
        "options_hi": ["विटामिन B1", "विटामिन B2", "विटामिन B3", "विटामिन B6"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन B1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the chemical formula of washing soda?",
        "question_hi": "धावन सोडा का रासायनिक सूत्र क्या है?",
        "options_en": ["Na₂CO₃·10H₂O", "NaHCO₃", "NaOH", "Na₂CO₃"],
        "options_hi": ["Na₂CO₃·10H₂O", "NaHCO₃", "NaOH", "Na₂CO₃"],
        "answer_en": "Na₂CO₃·10H₂O",
        "answer_hi": "Na₂CO₃·10H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which instrument measures blood pressure?",
        "question_hi": "रक्तचाप मापने वाला उपकरण कौन सा है?",
        "options_en": ["Sphygmomanometer", "Stethoscope", "Thermometer", "Electrocardiograph"],
        "options_hi": ["स्फिग्मोमैनोमीटर", "स्टेथोस्कोप", "थर्मामीटर", "इलेक्ट्रोकार्डियोग्राफ"],
        "answer_en": "Sphygmomanometer",
        "answer_hi": "स्फिग्मोमैनोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the chemical symbol for lead?",
        "question_hi": "सीसा का रासायनिक प्रतीक क्या है?",
        "options_en": ["Pb", "Ld", "Le", "Pl"],
        "options_hi": ["Pb", "Ld", "Le", "Pl"],
        "answer_en": "Pb",
        "answer_hi": "Pb",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        "question_hi": "किस ग्रह को 'सुबह का तारा' या 'शाम का तारा' कहा जाता है?",
        "options_en": ["Venus", "Mercury", "Mars", "Jupiter"],
        "options_hi": ["शुक्र", "बुध", "मंगल", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the unit of radioactivity dose?",
        "question_hi": "रेडियोधर्मिता खुराक की इकाई क्या है?",
        "options_en": ["Gray", "Sievert", "Becquerel", "Curie"],
        "options_hi": ["ग्रे", "सिवर्ट", "बेकरेल", "क्यूरी"],
        "answer_en": "Sievert",
        "answer_hi": "सिवर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
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
        "num": 77,
        "question_en": "What is the chemical formula of borax?",
        "question_hi": "बोरेक्स का रासायनिक सूत्र क्या है?",
        "options_en": ["Na₂B₄O₇·10H₂O", "Na₂CO₃", "NaHCO₃", "NaOH"],
        "options_hi": ["Na₂B₄O₇·10H₂O", "Na₂CO₃", "NaHCO₃", "NaOH"],
        "answer_en": "Na₂B₄O₇·10H₂O",
        "answer_hi": "Na₂B₄O₇·10H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which instrument measures the pH of a solution?",
        "question_hi": "किसी विलयन का pH मापने वाला उपकरण कौन सा है?",
        "options_en": ["pH meter", "Spectrophotometer", "Chromatograph", "Conductivity meter"],
        "options_hi": ["pH मीटर", "स्पेक्ट्रोफोटोमीटर", "क्रोमैटोग्राफ", "चालकता मीटर"],
        "answer_en": "pH meter",
        "answer_hi": "pH मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the chemical symbol for tin?",
        "question_hi": "टिन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Sn", "Ti", "Tn", "Ts"],
        "options_hi": ["Sn", "Ti", "Tn", "Ts"],
        "answer_en": "Sn",
        "answer_hi": "Sn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which planet is the brightest in the night sky?",
        "question_hi": "रात के आकाश में कौन सा ग्रह सबसे चमकीला है?",
        "options_en": ["Venus", "Jupiter", "Mars", "Saturn"],
        "options_hi": ["शुक्र", "बृहस्पति", "मंगल", "शनि"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the unit of radioactivity exposure?",
        "question_hi": "रेडियोधर्मिता एक्सपोज़र की इकाई क्या है?",
        "options_en": ["Coulomb per kilogram", "Roentgen", "Gray", "Sievert"],
        "options_hi": ["कूलॉम प्रति किलोग्राम", "रेंटजन", "ग्रे", "सिवर्ट"],
        "answer_en": "Coulomb per kilogram",
        "answer_hi": "कूलॉम प्रति किलोग्राम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which vitamin deficiency causes pellagra?",
        "question_hi": "किस विटामिन की कमी से पेलाग्रा रोग होता है?",
        "options_en": ["Vitamin B3", "Vitamin B1", "Vitamin B2", "Vitamin B6"],
        "options_hi": ["विटामिन B3", "विटामिन B1", "विटामिन B2", "विटामिन B6"],
        "answer_en": "Vitamin B3",
        "answer_hi": "विटामिन B3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the chemical formula of caustic soda?",
        "question_hi": "कास्टिक सोडा का रासायनिक सूत्र क्या है?",
        "options_en": ["NaOH", "Na₂CO₃", "NaHCO₃", "KOH"],
        "options_hi": ["NaOH", "Na₂CO₃", "NaHCO₃", "KOH"],
        "answer_en": "NaOH",
        "answer_hi": "NaOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which instrument measures the intensity of light?",
        "question_hi": "प्रकाश की तीव्रता मापने वाला उपकरण कौन सा है?",
        "options_en": ["Photometer", "Spectrometer", "Radiometer", "Lux meter"],
        "options_hi": ["फोटोमीटर", "स्पेक्ट्रोमीटर", "रेडियोमीटर", "लक्स मीटर"],
        "answer_en": "Photometer",
        "answer_hi": "फोटोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
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
        "num": 86,
        "question_en": "Which planet is known for its Great Red Spot?",
        "question_hi": "कौन सा ग्रह अपने ग्रेट रेड स्पॉट के लिए प्रसिद्ध है?",
        "options_en": ["Jupiter", "Mars", "Saturn", "Neptune"],
        "options_hi": ["बृहस्पति", "मंगल", "शनि", "नेपच्यून"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the unit of energy?",
        "question_hi": "ऊर्जा की इकाई क्या है?",
        "options_en": ["Joule", "Watt", "Newton", "Pascal"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
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
        "num": 89,
        "question_en": "What is the chemical formula of caustic potash?",
        "question_hi": "कास्टिक पोटाश का रासायनिक सूत्र क्या है?",
        "options_en": ["KOH", "NaOH", "K₂CO₃", "KHCO₃"],
        "options_hi": ["KOH", "NaOH", "K₂CO₃", "KHCO₃"],
        "answer_en": "KOH",
        "answer_hi": "KOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which instrument measures the distance traveled by a vehicle?",
        "question_hi": "वाहन द्वारा तय की गई दूरी मापने वाला उपकरण कौन सा है?",
        "options_en": ["Odometer", "Speedometer", "Tachometer", "Hygrometer"],
        "options_hi": ["ओडोमीटर", "स्पीडोमीटर", "टैकोमीटर", "हाइग्रोमीटर"],
        "answer_en": "Odometer",
        "answer_hi": "ओडोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the chemical symbol for tungsten?",
        "question_hi": "टंगस्टन का रासायनिक प्रतीक क्या है?",
        "options_en": ["W", "Tu", "Tg", "Ts"],
        "options_hi": ["W", "Tu", "Tg", "Ts"],
        "answer_en": "W",
        "answer_hi": "W",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
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
        "num": 93,
        "question_en": "What is the unit of force?",
        "question_hi": "बल की इकाई क्या है?",
        "options_en": ["Newton", "Joule", "Watt", "Pascal"],
        "options_hi": ["न्यूटन", "जूल", "वाट", "पास्कल"],
        "answer_en": "Newton",
        "answer_hi": "न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which vitamin deficiency causes pernicious anemia?",
        "question_hi": "किस विटामिन की कमी से घातक एनीमिया होता है?",
        "options_en": ["Vitamin B12", "Vitamin B6", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन B12", "विटामिन B6", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin B12",
        "answer_hi": "विटामिन B12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the chemical formula of baking soda?",
        "question_hi": "बेकिंग सोडा का रासायनिक सूत्र क्या है?",
        "options_en": ["NaHCO₃", "Na₂CO₃", "NaOH", "KOH"],
        "options_hi": ["NaHCO₃", "Na₂CO₃", "NaOH", "KOH"],
        "answer_en": "NaHCO₃",
        "answer_hi": "NaHCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which instrument measures the speed of a vehicle?",
        "question_hi": "वाहन की गति मापने वाला उपकरण कौन सा है?",
        "options_en": ["Speedometer", "Odometer", "Tachometer", "Anemometer"],
        "options_hi": ["स्पीडोमीटर", "ओडोमीटर", "टैकोमीटर", "एनीमोमीटर"],
        "answer_en": "Speedometer",
        "answer_hi": "स्पीडोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the chemical symbol for silver?",
        "question_hi": "चाँदी का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ag", "Au", "Si", "Sr"],
        "options_hi": ["Ag", "Au", "Si", "Sr"],
        "answer_en": "Ag",
        "answer_hi": "Ag",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which planet is the hottest in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे गर्म ग्रह कौन सा है?",
        "options_en": ["Venus", "Mercury", "Mars", "Jupiter"],
        "options_hi": ["शुक्र", "बुध", "मंगल", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
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
        "num": 100,
        "question_en": "Which vitamin deficiency causes xerophthalmia?",
        "question_hi": "किस विटामिन की कमी से ज़ीरोप्थैल्मिया होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन ए",
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