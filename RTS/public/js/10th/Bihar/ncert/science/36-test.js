const questions = [
    {
        "num": 1,
        "question_en": "What is the study of fungi called?",
        "question_hi": "कवक के अध्ययन को क्या कहते हैं?",
        "options_en": ["Mycology", "Entomology", "Botany", "Zoology"],
        "options_hi": ["माइकोलॉजी", "एंटोमोलॉजी", "बॉटनी", "जूलॉजी"],
        "answer_en": "Mycology",
        "answer_hi": "माइकोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which instrument is used to measure atmospheric pressure?",
        "question_hi": "वायुमंडलीय दबाव मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Barometer", "Hygrometer", "Anemometer", "Thermometer"],
        "options_hi": ["बैरोमीटर", "हाइग्रोमीटर", "एनीमोमीटर", "थर्मामीटर"],
        "answer_en": "Barometer",
        "answer_hi": "बैरोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
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
        "num": 4,
        "question_en": "Which vitamin is produced by the human body when exposed to sunlight?",
        "question_hi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर द्वारा कौन सा विटामिन उत्पन्न होता है?",
        "options_en": ["Vitamin D", "Vitamin C", "Vitamin B12", "Vitamin K"],
        "options_hi": ["विटामिन डी", "विटामिन सी", "विटामिन बी12", "विटामिन K"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
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
        "num": 6,
        "question_en": "Which gas is most abundant in Earth's atmosphere?",
        "question_hi": "पृथ्वी के वायुमंडल में कौन सी गैस सबसे अधिक मात्रा में है?",
        "options_en": ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"],
        "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "आर्गन"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
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
        "num": 8,
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
        "num": 9,
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
        "num": 10,
        "question_en": "Which part of the human brain controls balance?",
        "question_hi": "मानव मस्तिष्क का कौन सा भाग संतुलन नियंत्रित करता है?",
        "options_en": ["Cerebellum", "Cerebrum", "Medulla", "Thalamus"],
        "options_hi": ["सेरेबेलम", "सेरेब्रम", "मेडुला", "थैलेमस"],
        "answer_en": "Cerebellum",
        "answer_hi": "सेरेबेलम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
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
        "num": 12,
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
        "num": 13,
        "question_en": "What is the unit of frequency?",
        "question_hi": "आवृत्ति की इकाई क्या है?",
        "options_en": ["Hertz", "Decibel", "Watt", "Joule"],
        "options_hi": ["हर्ट्ज", "डेसिबल", "वाट", "जूल"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which metal is liquid at room temperature?",
        "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
        "options_en": ["Mercury", "Gallium", "Both", "Bromine"],
        "options_hi": ["पारा", "गैलियम", "दोनों", "ब्रोमीन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the chemical formula of table salt?",
        "question_hi": "साधारण नमक का रासायनिक सूत्र क्या है?",
        "options_en": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "options_hi": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which planet has the most prominent rings?",
        "question_hi": "किस ग्रह के सबसे प्रमुख वलय हैं?",
        "options_en": ["Saturn", "Jupiter", "Uranus", "Neptune"],
        "options_hi": ["शनि", "बृहस्पति", "युरेनस", "नेपच्यून"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the study of earthquakes called?",
        "question_hi": "भूकंप के अध्ययन को क्या कहते हैं?",
        "options_en": ["Seismology", "Volcanology", "Geology", "Meteorology"],
        "options_hi": ["सिस्मोलॉजी", "वॉल्केनोलॉजी", "जियोलॉजी", "मौसम विज्ञान"],
        "answer_en": "Seismology",
        "answer_hi": "सिस्मोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which instrument is used to measure electric current?",
        "question_hi": "विद्युत धारा मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Ammeter", "Voltmeter", "Ohmmeter", "Galvanometer"],
        "options_hi": ["एमीटर", "वोल्टमीटर", "ओममीटर", "गैल्वेनोमीटर"],
        "answer_en": "Ammeter",
        "answer_hi": "एमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the chemical symbol for iron?",
        "question_hi": "लोहे का रासायनिक प्रतीक क्या है?",
        "options_en": ["Fe", "Ir", "In", "Fr"],
        "options_hi": ["Fe", "Ir", "In", "Fr"],
        "answer_en": "Fe",
        "answer_hi": "Fe",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which vitamin is also known as ascorbic acid?",
        "question_hi": "किस विटामिन को एस्कॉर्बिक अम्ल भी कहा जाता है?",
        "options_en": ["Vitamin C", "Vitamin B", "Vitamin A", "Vitamin D"],
        "options_hi": ["विटामिन सी", "विटामिन बी", "विटामिन ए", "विटामिन डी"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन सी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
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
        "num": 22,
        "question_en": "Which gas do plants absorb during photosynthesis?",
        "question_hi": "पौधे प्रकाश संश्लेषण के दौरान कौन सी गैस अवशोषित करते हैं?",
        "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the chemical formula of carbon dioxide?",
        "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CO₂", "CO", "C₂O", "CO₃"],
        "options_hi": ["CO₂", "CO", "C₂O", "CO₃"],
        "answer_en": "CO₂",
        "answer_hi": "CO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
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
        "num": 25,
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
        "num": 26,
        "question_en": "Which part of the eye controls the amount of light entering?",
        "question_hi": "आंख का कौन सा भाग प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है?",
        "options_en": ["Iris", "Pupil", "Lens", "Retina"],
        "options_hi": ["आइरिस", "पुतली", "लेंस", "रेटिना"],
        "answer_en": "Iris",
        "answer_hi": "आइरिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
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
        "num": 28,
        "question_en": "Which vitamin deficiency causes scurvy?",
        "question_hi": "किस विटामिन की कमी से स्कर्वी होता है?",
        "options_en": ["Vitamin C", "Vitamin D", "Vitamin B12", "Vitamin K"],
        "options_hi": ["विटामिन सी", "विटामिन डी", "विटामिन बी12", "विटामिन K"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन सी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
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
        "num": 30,
        "question_en": "Which metal is the best conductor of electricity?",
        "question_hi": "कौन सी धातु विद्युत की सर्वोत्तम चालक है?",
        "options_en": ["Silver", "Copper", "Gold", "Aluminum"],
        "options_hi": ["चांदी", "तांबा", "सोना", "एल्यूमिनियम"],
        "answer_en": "Silver",
        "answer_hi": "चांदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the chemical formula of sulfuric acid?",
        "question_hi": "सल्फ्यूरिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂SO₄", "H₂SO₃", "HSO₄", "H₃SO₄"],
        "options_hi": ["H₂SO₄", "H₂SO₃", "HSO₄", "H₃SO₄"],
        "answer_en": "H₂SO₄",
        "answer_hi": "H₂SO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
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
        "num": 33,
        "question_en": "What is the study of insects called?",
        "question_hi": "कीड़ों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Entomology", "Ornithology", "Herpetology", "Ichthyology"],
        "options_hi": ["एंटोमोलॉजी", "ऑर्निथोलॉजी", "हेर्पेटोलॉजी", "इचथ्योलॉजी"],
        "answer_en": "Entomology",
        "answer_hi": "एंटोमोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which instrument is used to measure humidity?",
        "question_hi": "आर्द्रता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Hygrometer", "Barometer", "Thermometer", "Anemometer"],
        "options_hi": ["हाइग्रोमीटर", "बैरोमीटर", "थर्मामीटर", "एनीमोमीटर"],
        "answer_en": "Hygrometer",
        "answer_hi": "हाइग्रोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
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
        "num": 36,
        "question_en": "Which vitamin is important for blood clotting?",
        "question_hi": "रक्त के थक्के बनाने के लिए कौन सा विटामिन महत्वपूर्ण है?",
        "options_en": ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin E"],
        "options_hi": ["विटामिन K", "विटामिन सी", "विटामिन डी", "विटामिन ई"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the SI unit of energy?",
        "question_hi": "ऊर्जा की SI इकाई क्या है?",
        "options_en": ["Joule", "Watt", "Newton", "Pascal"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which gas is known as laughing gas?",
        "question_hi": "किस गैस को हंसाने वाली गैस कहा जाता है?",
        "options_en": ["Nitrous oxide", "Carbon monoxide", "Methane", "Hydrogen"],
        "options_hi": ["नाइट्रस ऑक्साइड", "कार्बन मोनोऑक्साइड", "मीथेन", "हाइड्रोजन"],
        "answer_en": "Nitrous oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the chemical formula of ammonia?",
        "question_hi": "अमोनिया का रासायनिक सूत्र क्या है?",
        "options_en": ["NH₃", "NH₄", "N₂H₄", "NH₂"],
        "options_hi": ["NH₃", "NH₄", "N₂H₄", "NH₂"],
        "answer_en": "NH₃",
        "answer_hi": "NH₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which planet is the largest in our solar system?",
        "question_hi": "हमारे सौर मंडल में कौन सा ग्रह सबसे बड़ा है?",
        "options_en": ["Jupiter", "Saturn", "Neptune", "Uranus"],
        "options_hi": ["बृहस्पति", "शनि", "नेपच्यून", "युरेनस"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the main component of LPG?",
        "question_hi": "एलपीजी का मुख्य घटक क्या है?",
        "options_en": ["Propane", "Butane", "Methane", "Ethane"],
        "options_hi": ["प्रोपेन", "ब्यूटेन", "मीथेन", "ईथेन"],
        "answer_en": "Propane",
        "answer_hi": "प्रोपेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which part of the brain controls breathing?",
        "question_hi": "मस्तिष्क का कौन सा भाग श्वसन नियंत्रित करता है?",
        "options_en": ["Medulla oblongata", "Cerebellum", "Cerebrum", "Hypothalamus"],
        "options_hi": ["मेडुला ऑबलोंगाटा", "सेरेबेलम", "सेरेब्रम", "हाइपोथैलेमस"],
        "answer_en": "Medulla oblongata",
        "answer_hi": "मेडुला ऑबलोंगाटा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the chemical symbol for silver?",
        "question_hi": "चांदी का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ag", "Au", "Si", "Sv"],
        "options_hi": ["Ag", "Au", "Si", "Sv"],
        "answer_en": "Ag",
        "answer_hi": "Ag",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which vitamin deficiency causes rickets?",
        "question_hi": "किस विटामिन की कमी से रिकेट्स होता है?",
        "options_en": ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin B"],
        "options_hi": ["विटामिन डी", "विटामिन सी", "विटामिन ए", "विटामिन बी"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the unit of power?",
        "question_hi": "शक्ति की इकाई क्या है?",
        "options_en": ["Watt", "Joule", "Newton", "Volt"],
        "options_hi": ["वाट", "जूल", "न्यूटन", "वोल्ट"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which metal is used in making airplanes?",
        "question_hi": "विमान बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Aluminum", "Steel", "Titanium", "All of these"],
        "options_hi": ["एल्यूमिनियम", "स्टील", "टाइटेनियम", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
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
        "num": 48,
        "question_en": "Which planet has the Great Red Spot?",
        "question_hi": "किस ग्रह पर ग्रेट रेड स्पॉट है?",
        "options_en": ["Jupiter", "Saturn", "Mars", "Venus"],
        "options_hi": ["बृहस्पति", "शनि", "मंगल", "शुक्र"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the study of birds called?",
        "question_hi": "पक्षियों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Ornithology", "Entomology", "Herpetology", "Ichthyology"],
        "options_hi": ["ऑर्निथोलॉजी", "एंटोमोलॉजी", "हेर्पेटोलॉजी", "इचथ्योलॉजी"],
        "answer_en": "Ornithology",
        "answer_hi": "ऑर्निथोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which instrument is used to measure wind speed?",
        "question_hi": "हवा की गति मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Anemometer", "Barometer", "Hygrometer", "Thermometer"],
        "options_hi": ["एनीमोमीटर", "बैरोमीटर", "हाइग्रोमीटर", "थर्मामीटर"],
        "answer_en": "Anemometer",
        "answer_hi": "एनीमोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the chemical symbol for calcium?",
        "question_hi": "कैल्शियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ca", "Cl", "Cm", "Cu"],
        "options_hi": ["Ca", "Cl", "Cm", "Cu"],
        "answer_en": "Ca",
        "answer_hi": "Ca",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which vitamin is also known as thiamine?",
        "question_hi": "किस विटामिन को थायमिन भी कहा जाता है?",
        "options_en": ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12"],
        "options_hi": ["विटामिन बी1", "विटामिन बी2", "विटामिन बी6", "विटामिन बी12"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन बी1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the SI unit of pressure?",
        "question_hi": "दबाव की SI इकाई क्या है?",
        "options_en": ["Pascal", "Newton", "Joule", "Watt"],
        "options_hi": ["पास्कल", "न्यूटन", "जूल", "वाट"],
        "answer_en": "Pascal",
        "answer_hi": "पास्कल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which gas is responsible for the greenhouse effect?",
        "question_hi": "ग्रीनहाउस प्रभाव के लिए कौन सी गैस जिम्मेदार है?",
        "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
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
        "num": 56,
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
        "num": 57,
        "question_en": "What is the main component of coal gas?",
        "question_hi": "कोल गैस का मुख्य घटक क्या है?",
        "options_en": ["Hydrogen", "Methane", "Carbon monoxide", "All of these"],
        "options_hi": ["हाइड्रोजन", "मीथेन", "कार्बन मोनोऑक्साइड", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which part of the ear controls balance?",
        "question_hi": "कान का कौन सा भाग संतुलन नियंत्रित करता है?",
        "options_en": ["Vestibular system", "Cochlea", "Eardrum", "Auditory nerve"],
        "options_hi": ["वेस्टिबुलर सिस्टम", "कोक्लीया", "ईयरड्रम", "श्रवण तंत्रिका"],
        "answer_en": "Vestibular system",
        "answer_hi": "वेस्टिबुलर सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the chemical symbol for lead?",
        "question_hi": "सीसा का रासायनिक प्रतीक क्या है?",
        "options_en": ["Pb", "Ld", "Le", "Pd"],
        "options_hi": ["Pb", "Ld", "Le", "Pd"],
        "answer_en": "Pb",
        "answer_hi": "Pb",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which vitamin deficiency causes beriberi?",
        "question_hi": "किस विटामिन की कमी से बेरीबेरी होता है?",
        "options_en": ["Vitamin B1", "Vitamin C", "Vitamin D", "Vitamin A"],
        "options_hi": ["विटामिन बी1", "विटामिन सी", "विटामिन डी", "विटामिन ए"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन बी1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the unit of electric resistance?",
        "question_hi": "विद्युत प्रतिरोध की इकाई क्या है?",
        "options_en": ["Ohm", "Volt", "Ampere", "Watt"],
        "options_hi": ["ओम", "वोल्ट", "एम्पीयर", "वाट"],
        "answer_en": "Ohm",
        "answer_hi": "ओम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which metal is used in making batteries?",
        "question_hi": "बैटरी बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Lithium", "Lead", "Zinc", "All of these"],
        "options_hi": ["लिथियम", "सीसा", "जिंक", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
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
        "num": 64,
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
        "num": 65,
        "question_en": "What is the study of fish called?",
        "question_hi": "मछलियों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Ichthyology", "Ornithology", "Herpetology", "Entomology"],
        "options_hi": ["इचथ्योलॉजी", "ऑर्निथोलॉजी", "हेर्पेटोलॉजी", "एंटोमोलॉजी"],
        "answer_en": "Ichthyology",
        "answer_hi": "इचथ्योलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which instrument is used to measure electric voltage?",
        "question_hi": "विद्युत वोल्टेज मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Voltmeter", "Ammeter", "Ohmmeter", "Galvanometer"],
        "options_hi": ["वोल्टमीटर", "एमीटर", "ओममीटर", "गैल्वेनोमीटर"],
        "answer_en": "Voltmeter",
        "answer_hi": "वोल्टमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
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
        "num": 68,
        "question_en": "Which vitamin is also known as riboflavin?",
        "question_hi": "किस विटामिन को राइबोफ्लेविन भी कहा जाता है?",
        "options_en": ["Vitamin B2", "Vitamin B1", "Vitamin B6", "Vitamin B12"],
        "options_hi": ["विटामिन बी2", "विटामिन बी1", "विटामिन बी6", "विटामिन बी12"],
        "answer_en": "Vitamin B2",
        "answer_hi": "विटामिन बी2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the SI unit of work?",
        "question_hi": "कार्य की SI इकाई क्या है?",
        "options_en": ["Joule", "Watt", "Newton", "Pascal"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which gas is used in fluorescent tubes?",
        "question_hi": "फ्लोरोसेंट ट्यूबों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Mercury vapor", "Argon", "Neon", "All of these"],
        "options_hi": ["पारा वाष्प", "आर्गन", "नियॉन", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the chemical formula of glucose?",
        "question_hi": "ग्लूकोज का रासायनिक सूत्र क्या है?",
        "options_en": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
        "options_hi": ["C₆H₁₂O₆", "C₁₂H₂₂O₁१", "C₂H₅OH", "CH₃COOH"],
        "answer_en": "C₆H₁₂O₆",
        "answer_hi": "C₆H₁₂O₆",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which planet is known as the Blue Planet?",
        "question_hi": "किस ग्रह को नीला ग्रह कहा जाता है?",
        "options_en": ["Earth", "Neptune", "Uranus", "Mars"],
        "options_hi": ["पृथ्वी", "नेपच्यून", "युरेनस", "मंगल"],
        "answer_en": "Earth",
        "answer_hi": "पृथ्वी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the main component of water gas?",
        "question_hi": "वॉटर गैस का मुख्य घटक क्या है?",
        "options_en": ["Carbon monoxide + Hydrogen", "Methane + Hydrogen", "Carbon dioxide + Nitrogen", "Oxygen + Nitrogen"],
        "options_hi": ["कार्बन मोनोऑक्साइड + हाइड्रोजन", "मीथेन + हाइड्रोजन", "कार्बन डाइऑक्साइड + नाइट्रोजन", "ऑक्सीजन + नाइट्रोजन"],
        "answer_en": "Carbon monoxide + Hydrogen",
        "answer_hi": "कार्बन मोनोऑक्साइड + हाइड्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which part of the digestive system absorbs water?",
        "question_hi": "पाचन तंत्र का कौन सा भाग पानी अवशोषित करता है?",
        "options_en": ["Large intestine", "Small intestine", "Stomach", "Esophagus"],
        "options_hi": ["बड़ी आंत", "छोटी आंत", "आमाशय", "ग्रसिका"],
        "answer_en": "Large intestine",
        "answer_hi": "बड़ी आंत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the chemical symbol for zinc?",
        "question_hi": "जिंक का रासायनिक प्रतीक क्या है?",
        "options_en": ["Zn", "Zi", "Zc", "Zd"],
        "options_hi": ["Zn", "Zi", "Zc", "Zd"],
        "answer_en": "Zn",
        "answer_hi": "Zn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which vitamin deficiency causes pellagra?",
        "question_hi": "किस विटामिन की कमी से पेलाग्रा होता है?",
        "options_en": ["Vitamin B3", "Vitamin B1", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन बी3", "विटामिन बी1", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin B3",
        "answer_hi": "विटामिन बी3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
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
        "num": 78,
        "question_en": "Which metal is used in making surgical instruments?",
        "question_hi": "सर्जिकल उपकरण बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Stainless steel", "Silver", "Titanium", "All of these"],
        "options_hi": ["स्टेनलेस स्टील", "चांदी", "टाइटेनियम", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
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
        "num": 80,
        "question_en": "Which planet rotates on its side?",
        "question_hi": "कौन सा ग्रह अपनी ओर घूमता है?",
        "options_en": ["Uranus", "Venus", "Jupiter", "Saturn"],
        "options_hi": ["युरेनस", "शुक्र", "बृहस्पति", "शनि"],
        "answer_en": "Uranus",
        "answer_hi": "युरेनस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the study of reptiles called?",
        "question_hi": "सरीसृपों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Herpetology", "Ornithology", "Ichthyology", "Entomology"],
        "options_hi": ["हेर्पेटोलॉजी", "ऑर्निथोलॉजी", "इचथ्योलॉजी", "एंटोमोलॉजी"],
        "answer_en": "Herpetology",
        "answer_hi": "हेर्पेटोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which instrument is used to measure earthquakes?",
        "question_hi": "भूकंप मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Seismograph", "Barograph", "Hygrometer", "Thermometer"],
        "options_hi": ["सिस्मोग्राफ", "बैरोग्राफ", "हाइग्रोमीटर", "थर्मामीटर"],
        "answer_en": "Seismograph",
        "answer_hi": "सिस्मोग्राफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
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
        "num": 84,
        "question_en": "Which vitamin is also known as niacin?",
        "question_hi": "किस विटामिन को नियासिन भी कहा जाता है?",
        "options_en": ["Vitamin B3", "Vitamin B1", "Vitamin B6", "Vitamin B12"],
        "options_hi": ["विटामिन बी3", "विटामिन बी1", "विटामिन बी6", "विटामिन बी12"],
        "answer_en": "Vitamin B3",
        "answer_hi": "विटामिन बी3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the SI unit of luminous intensity?",
        "question_hi": "दीप्त तीव्रता की SI इकाई क्या है?",
        "options_en": ["Candela", "Lumen", "Lux", "Watt"],
        "options_hi": ["कैंडेला", "ल्यूमेन", "लक्स", "वाट"],
        "answer_en": "Candela",
        "answer_hi": "कैंडेला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which gas is used in refrigerator coolants?",
        "question_hi": "रेफ्रिजरेटर शीतलक में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Freon", "Ammonia", "Both", "Carbon dioxide"],
        "options_hi": ["फ्रेऑन", "अमोनिया", "दोनों", "कार्बन डाइऑक्साइड"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
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
        "num": 88,
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
        "num": 89,
        "question_en": "What is the main component of CNG?",
        "question_hi": "सीएनजी का मुख्य घटक क्या है?",
        "options_en": ["Methane", "Ethane", "Propane", "Butane"],
        "options_hi": ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which part of the human body produces insulin?",
        "question_hi": "मानव शरीर का कौन सा भाग इंसुलिन उत्पन्न करता है?",
        "options_en": ["Pancreas", "Liver", "Kidney", "Stomach"],
        "options_hi": ["अग्न्याशय", "यकृत", "गुर्दा", "आमाशय"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the chemical symbol for nickel?",
        "question_hi": "निकल का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ni", "Nk", "Ne", "Nl"],
        "options_hi": ["Ni", "Nk", "Ne", "Nl"],
        "answer_en": "Ni",
        "answer_hi": "Ni",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which vitamin deficiency causes pernicious anemia?",
        "question_hi": "किस विटामिन की कमी से परनीशियस एनीमिया होता है?",
        "options_en": ["Vitamin B12", "Vitamin B6", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन बी12", "विटामिन बी6", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin B12",
        "answer_hi": "विटामिन बी12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the unit of magnetic field strength?",
        "question_hi": "चुंबकीय क्षेत्र शक्ति की इकाई क्या है?",
        "options_en": ["Tesla", "Gauss", "Both", "Weber"],
        "options_hi": ["टेस्ला", "गॉस", "दोनों", "वेबर"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the unit of magnetic field strength?",
        "question_hi": "चुंबकीय क्षेत्र शक्ति की इकाई क्या है?",
        "options_en": ["Tesla", "Gauss", "Both", "Weber"],
        "options_hi": ["टेस्ला", "गॉस", "दोनों", "वेबर"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which metal is used in making coins?",
        "question_hi": "सिक्के बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Copper", "Nickel", "Aluminum", "All of these"],
        "options_hi": ["तांबा", "निकल", "एल्यूमिनियम", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the chemical formula of acetic acid?",
        "question_hi": "एसिटिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₃COOH", "HCOOH", "C₆H₈O₇", "H₂C₂O₄"],
        "options_hi": ["CH₃COOH", "HCOOH", "C₆H₈O₇", "H₂C₂O₄"],
        "answer_en": "CH₃COOH",
        "answer_hi": "CH₃COOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
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
        "num": 97,
        "question_en": "What is the study of animal behavior called?",
        "question_hi": "पशु व्यवहार के अध्ययन को क्या कहते हैं?",
        "options_en": ["Ethology", "Ecology", "Zoology", "Biology"],
        "options_hi": ["एथोलॉजी", "पारिस्थितिकी", "जूलॉजी", "जीव विज्ञान"],
        "answer_en": "Ethology",
        "answer_hi": "एथोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which instrument is used to measure sound intensity?",
        "question_hi": "ध्वनि तीव्रता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Decibel meter", "Audiometer", "Both", "Oscilloscope"],
        "options_hi": ["डेसिबल मीटर", "ऑडियोमीटर", "दोनों", "ऑसिलोस्कोप"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the chemical symbol for aluminum?",
        "question_hi": "एल्यूमिनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Al", "Am", "Au", "Ag"],
        "options_hi": ["Al", "Am", "Au", "Ag"],
        "answer_en": "Al",
        "answer_hi": "Al",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which vitamin is also known as folic acid?",
        "question_hi": "किस विटामिन को फोलिक अम्ल भी कहा जाता है?",
        "options_en": ["Vitamin B9", "Vitamin B12", "Vitamin B6", "Vitamin B1"],
        "options_hi": ["विटामिन बी9", "विटामिन बी12", "विटामिन बी6", "विटामिन बी1"],
        "answer_en": "Vitamin B9",
        "answer_hi": "विटामिन बी9",
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