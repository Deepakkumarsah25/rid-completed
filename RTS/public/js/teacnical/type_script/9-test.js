const questions = [
    {
        "num": 1,
        "question_en": "What is the chemical symbol for Gold?",
        "question_hi": "सोने का रासायनिक प्रतीक क्या है?",
        "options_en": ["Go", "Gd", "Au", "Ag"],
        "options_hi": ["Go", "Gd", "Au", "Ag"],
        "answer_en": "Au",
        "answer_hi": "Au",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which planet is known as the Red Planet?",
        "question_hi": "कौन सा ग्रह लाल ग्रह के नाम से जाना जाता है?",
        "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
        "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the SI unit of force?",
        "question_hi": "बल की SI इकाई क्या है?",
        "options_en": ["Joule", "Watt", "Newton", "Pascal"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Newton",
        "answer_hi": "न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which gas is most abundant in Earth's atmosphere?",
        "question_hi": "पृथ्वी के वायुमंडल में कौन सी गैस सबसे अधिक मात्रा में है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the pH value of pure water?",
        "question_hi": "शुद्ध जल का pH मान क्या है?",
        "options_en": ["5", "7", "8", "10"],
        "options_hi": ["5", "7", "8", "10"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which organ pumps blood throughout the body?",
        "question_hi": "कौन सा अंग पूरे शरीर में रक्त पंप करता है?",
        "options_en": ["Liver", "Lungs", "Heart", "Kidney"],
        "options_hi": ["यकृत", "फेफड़े", "हृदय", "गुर्दा"],
        "answer_en": "Heart",
        "answer_hi": "हृदय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the speed of light in vacuum?",
        "question_hi": "निर्वात में प्रकाश की गति क्या है?",
        "options_en": ["3×10⁶ m/s", "3×10⁸ m/s", "3×10¹⁰ m/s", "3×10¹² m/s"],
        "options_hi": ["3×10⁶ m/s", "3×10⁸ m/s", "3×10¹⁰ m/s", "3×10¹² m/s"],
        "answer_en": "3×10⁸ m/s",
        "answer_hi": "3×10⁸ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which element has the atomic number 1?",
        "question_hi": "किस तत्व की परमाणु संख्या 1 है?",
        "options_en": ["Helium", "Hydrogen", "Oxygen", "Carbon"],
        "options_hi": ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "कार्बन"],
        "answer_en": "Hydrogen",
        "answer_hi": "हाइड्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the main component of the Sun?",
        "question_hi": "सूर्य का मुख्य घटक क्या है?",
        "options_en": ["Helium", "Hydrogen", "Oxygen", "Carbon"],
        "options_hi": ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "कार्बन"],
        "answer_en": "Hydrogen",
        "answer_hi": "हाइड्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which scientist proposed the theory of relativity?",
        "question_hi": "किस वैज्ञानिक ने सापेक्षता का सिद्धांत प्रस्तावित किया?",
        "options_en": ["Newton", "Einstein", "Galileo", "Tesla"],
        "options_hi": ["न्यूटन", "आइंस्टीन", "गैलीलियो", "टेस्ला"],
        "answer_en": "Einstein",
        "answer_hi": "आइंस्टीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the chemical formula of water?",
        "question_hi": "पानी का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂O", "CO₂", "NaCl", "O₂"],
        "options_hi": ["H₂O", "CO₂", "NaCl", "O₂"],
        "answer_en": "H₂O",
        "answer_hi": "H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which part of the plant conducts photosynthesis?",
        "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
        "answer_en": "Leaf",
        "answer_hi": "पत्ती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the unit of electric resistance?",
        "question_hi": "विद्युत प्रतिरोध की इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Ohm",
        "answer_hi": "ओम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which gas do plants absorb during photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण के दौरान पौधे कौन सी गैस अवशोषित करते हैं?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the hardest natural substance on Earth?",
        "question_hi": "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ क्या है?",
        "options_en": ["Gold", "Iron", "Diamond", "Platinum"],
        "options_hi": ["सोना", "लोहा", "हीरा", "प्लैटिनम"],
        "answer_en": "Diamond",
        "answer_hi": "हीरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which blood group is known as universal donor?",
        "question_hi": "कौन सा रक्त समूह सार्वत्रिक दाता के रूप में जाना जाता है?",
        "options_en": ["A", "B", "AB", "O"],
        "options_hi": ["A", "B", "AB", "O"],
        "answer_en": "O",
        "answer_hi": "O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the chemical name of baking soda?",
        "question_hi": "बेकिंग सोडा का रासायनिक नाम क्या है?",
        "options_en": ["Sodium carbonate", "Sodium bicarbonate", "Sodium hydroxide", "Sodium chloride"],
        "options_hi": ["सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट", "सोडियम हाइड्रॉक्साइड", "सोडियम क्लोराइड"],
        "answer_en": "Sodium bicarbonate",
        "answer_hi": "सोडियम बाइकार्बोनेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which planet has the most moons?",
        "question_hi": "किस ग्रह के सबसे अधिक चंद्रमा हैं?",
        "options_en": ["Jupiter", "Saturn", "Uranus", "Neptune"],
        "options_hi": ["बृहस्पति", "शनि", "अरुण", "वरुण"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the study of fossils called?",
        "question_hi": "जीवाश्मों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Geology", "Paleontology", "Archaeology", "Anthropology"],
        "options_hi": ["भूविज्ञान", "पुराजीवविज्ञान", "पुरातत्व", "मानवविज्ञान"],
        "answer_en": "Paleontology",
        "answer_hi": "पुराजीवविज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which metal is liquid at room temperature?",
        "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
        "options_en": ["Iron", "Copper", "Mercury", "Silver"],
        "options_hi": ["लोहा", "तांबा", "पारा", "चांदी"],
        "answer_en": "Mercury",
        "answer_hi": "पारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the largest organ in human body?",
        "question_hi": "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
        "options_en": ["Liver", "Skin", "Heart", "Lungs"],
        "options_hi": ["यकृत", "त्वचा", "हृदय", "फेफड़े"],
        "answer_en": "Skin",
        "answer_hi": "त्वचा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which gas is responsible for ozone layer depletion?",
        "question_hi": "कौन सी गैस ओजोन परत के क्षय के लिए जिम्मेदार है?",
        "options_en": ["Oxygen", "Carbon dioxide", "CFCs", "Nitrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "CFC", "नाइट्रोजन"],
        "answer_en": "CFCs",
        "answer_hi": "CFC",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the SI unit of temperature?",
        "question_hi": "तापमान की SI इकाई क्या है?",
        "options_en": ["Fahrenheit", "Celsius", "Kelvin", "Rankine"],
        "options_hi": ["फारेनहाइट", "सेल्सियस", "केल्विन", "रैंकिन"],
        "answer_en": "Kelvin",
        "answer_hi": "केल्विन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which vitamin is produced by human skin in sunlight?",
        "question_hi": "सूर्य के प्रकाश में मानव त्वचा द्वारा कौन सा विटामिन उत्पन्न होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the chemical symbol for Silver?",
        "question_hi": "चांदी का रासायनिक प्रतीक क्या है?",
        "options_en": ["Si", "Sv", "Ag", "Au"],
        "options_hi": ["Si", "Sv", "Ag", "Au"],
        "answer_en": "Ag",
        "answer_hi": "Ag",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which instrument is used to measure atmospheric pressure?",
        "question_hi": "वायुमंडलीय दबाव मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
        "options_hi": ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
        "answer_en": "Barometer",
        "answer_hi": "बैरोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the main component of natural gas?",
        "question_hi": "प्राकृतिक गैस का मुख्य घटक क्या है?",
        "options_en": ["Propane", "Butane", "Methane", "Ethane"],
        "options_hi": ["प्रोपेन", "ब्यूटेन", "मीथेन", "ईथेन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which cell organelle is called powerhouse of the cell?",
        "question_hi": "किस कोशिका अंग को कोशिका का पावरहाउस कहा जाता है?",
        "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the unit of frequency?",
        "question_hi": "आवृत्ति की इकाई क्या है?",
        "options_en": ["Hertz", "Decibel", "Newton", "Joule"],
        "options_hi": ["हर्ट्ज", "डेसिबल", "न्यूटन", "जूल"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which acid is present in vinegar?",
        "question_hi": "सिरका में कौन सा अम्ल होता है?",
        "options_en": ["Citric acid", "Acetic acid", "Lactic acid", "Formic acid"],
        "options_hi": ["सिट्रिक अम्ल", "एसिटिक अम्ल", "लैक्टिक अम्ल", "फॉर्मिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the study of earthquakes called?",
        "question_hi": "भूकंपों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Volcanology", "Seismology", "Meteorology", "Geology"],
        "options_hi": ["ज्वालामुखी विज्ञान", "भूकंप विज्ञान", "मौसम विज्ञान", "भूविज्ञान"],
        "answer_en": "Seismology",
        "answer_hi": "भूकंप विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which gas is filled in electric bulbs?",
        "question_hi": "विद्युत बल्बों में कौन सी गैस भरी जाती है?",
        "options_en": ["Oxygen", "Hydrogen", "Nitrogen", "Argon"],
        "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन", "आर्गन"],
        "answer_en": "Argon",
        "answer_hi": "आर्गन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the chemical formula of table salt?",
        "question_hi": "टेबल साल्ट का रासायनिक सूत्र क्या है?",
        "options_en": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "options_hi": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which planet is closest to the Sun?",
        "question_hi": "सूर्य के सबसे निकट कौन सा ग्रह है?",
        "options_en": ["Venus", "Mercury", "Earth", "Mars"],
        "options_hi": ["शुक्र", "बुध", "पृथ्वी", "मंगल"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the SI unit of electric current?",
        "question_hi": "विद्युत धारा की SI इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which vitamin is essential for blood clotting?",
        "question_hi": "रक्त के थक्के जमने के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन K"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the chemical symbol for Iron?",
        "question_hi": "लोहे का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ir", "Fe", "In", "Io"],
        "options_hi": ["Ir", "Fe", "In", "Io"],
        "answer_en": "Fe",
        "answer_hi": "Fe",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which gas is known as laughing gas?",
        "question_hi": "कौन सी गैस हंसाने वाली गैस के नाम से जानी जाती है?",
        "options_en": ["Nitrous oxide", "Carbon dioxide", "Oxygen", "Hydrogen"],
        "options_hi": ["नाइट्रस ऑक्साइड", "कार्बन डाइऑक्साइड", "ऑक्सीजन", "हाइड्रोजन"],
        "answer_en": "Nitrous oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the largest planet in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
        "options_en": ["Earth", "Jupiter", "Saturn", "Neptune"],
        "options_hi": ["पृथ्वी", "बृहस्पति", "शनि", "वरुण"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which part of human brain controls balance?",
        "question_hi": "मानव मस्तिष्क का कौन सा भाग संतुलन नियंत्रित करता है?",
        "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
        "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला", "हाइपोथैलेमस"],
        "answer_en": "Cerebellum",
        "answer_hi": "सेरेबेलम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
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
        "num": 42,
        "question_en": "Which instrument is used to measure electric current?",
        "question_hi": "विद्युत धारा मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Voltmeter", "Ammeter", "Ohmmeter", "Galvanometer"],
        "options_hi": ["वोल्टमीटर", "एमीटर", "ओममीटर", "गैल्वेनोमीटर"],
        "answer_en": "Ammeter",
        "answer_hi": "एमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the main component of biogas?",
        "question_hi": "बायोगैस का मुख्य घटक क्या है?",
        "options_en": ["Propane", "Butane", "Methane", "Ethane"],
        "options_hi": ["प्रोपेन", "ब्यूटेन", "मीथेन", "ईथेन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which vitamin deficiency causes scurvy?",
        "question_hi": "किस विटामिन की कमी से स्कर्वी होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the chemical symbol for Potassium?",
        "question_hi": "पोटेशियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["P", "Pt", "K", "Ka"],
        "options_hi": ["P", "Pt", "K", "Ka"],
        "answer_en": "K",
        "answer_hi": "K",
        "attempted": false,
        "selected": ""
    },
        {
        "num": 46,
        "question_en": "Which gas is produced during photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण के दौरान कौन सी गैस उत्पन्न होती है?",
        "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the unit of power?",
        "question_hi": "शक्ति की इकाई क्या है?",
        "options_en": ["Joule", "Watt", "Newton", "Pascal"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which metal is the best conductor of electricity?",
        "question_hi": "कौन सी धातु विद्युत की सबसे अच्छी सुचालक है?",
        "options_en": ["Copper", "Silver", "Gold", "Aluminum"],
        "options_hi": ["तांबा", "चांदी", "सोना", "एल्युमिनियम"],
        "answer_en": "Silver",
        "answer_hi": "चांदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the chemical name of plaster of Paris?",
        "question_hi": "प्लास्टर ऑफ पेरिस का रासायनिक नाम क्या है?",
        "options_en": ["Calcium sulfate", "Calcium carbonate", "Calcium hydroxide", "Calcium oxide"],
        "options_hi": ["कैल्शियम सल्फेट", "कैल्शियम कार्बोनेट", "कैल्शियम हाइड्रॉक्साइड", "कैल्शियम ऑक्साइड"],
        "answer_en": "Calcium sulfate",
        "answer_hi": "कैल्शियम सल्फेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which planet has rings around it?",
        "question_hi": "किस ग्रह के चारों ओर वलय हैं?",
        "options_en": ["Jupiter", "Saturn", "Uranus", "All of these"],
        "options_hi": ["बृहस्पति", "शनि", "अरुण", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the SI unit of pressure?",
        "question_hi": "दाब की SI इकाई क्या है?",
        "options_en": ["Newton", "Pascal", "Joule", "Watt"],
        "options_hi": ["न्यूटन", "पास्कल", "जूल", "वाट"],
        "answer_en": "Pascal",
        "answer_hi": "पास्कल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which vitamin is also known as ascorbic acid?",
        "question_hi": "किस विटामिन को एस्कॉर्बिक अम्ल के नाम से भी जाना जाता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the chemical symbol for Sodium?",
        "question_hi": "सोडियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["So", "Sd", "Na", "Nm"],
        "options_hi": ["So", "Sd", "Na", "Nm"],
        "answer_en": "Na",
        "answer_hi": "Na",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which instrument is used to measure humidity?",
        "question_hi": "आर्द्रता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Barometer", "Hygrometer", "Thermometer", "Anemometer"],
        "options_hi": ["बैरोमीटर", "हाइग्रोमीटर", "थर्मामीटर", "एनीमोमीटर"],
        "answer_en": "Hygrometer",
        "answer_hi": "हाइग्रोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
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
        "num": 56,
        "question_en": "Which planet is known as the Morning Star?",
        "question_hi": "कौन सा ग्रह मॉर्निंग स्टार के नाम से जाना जाता है?",
        "options_en": ["Mars", "Venus", "Mercury", "Jupiter"],
        "options_hi": ["मंगल", "शुक्र", "बुध", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
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
        "num": 58,
        "question_en": "Which blood cells fight infection?",
        "question_hi": "कौन सी रक्त कोशिकाएं संक्रमण से लड़ती हैं?",
        "options_en": ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
        "options_hi": ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
        "answer_en": "White blood cells",
        "answer_hi": "श्वेत रक्त कोशिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the unit of energy?",
        "question_hi": "ऊर्जा की इकाई क्या है?",
        "options_en": ["Watt", "Joule", "Newton", "Pascal"],
        "options_hi": ["वाट", "जूल", "न्यूटन", "पास्कल"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which acid is present in our stomach?",
        "question_hi": "हमारे पेट में कौन सा अम्ल होता है?",
        "options_en": ["Acetic acid", "Hydrochloric acid", "Sulfuric acid", "Nitric acid"],
        "options_hi": ["एसिटिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल"],
        "answer_en": "Hydrochloric acid",
        "answer_hi": "हाइड्रोक्लोरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the chemical symbol for Copper?",
        "question_hi": "तांबे का रासायनिक प्रतीक क्या है?",
        "options_en": ["Co", "Cp", "Cu", "Cr"],
        "options_hi": ["Co", "Cp", "Cu", "Cr"],
        "answer_en": "Cu",
        "answer_hi": "Cu",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which instrument is used to measure wind speed?",
        "question_hi": "हवा की गति मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Barometer", "Hygrometer", "Anemometer", "Thermometer"],
        "options_hi": ["बैरोमीटर", "हाइग्रोमीटर", "एनीमोमीटर", "थर्मामीटर"],
        "answer_en": "Anemometer",
        "answer_hi": "एनीमोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the main component of coal?",
        "question_hi": "कोयले का मुख्य घटक क्या है?",
        "options_en": ["Carbon", "Oxygen", "Hydrogen", "Nitrogen"],
        "options_hi": ["कार्बन", "ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन"],
        "answer_en": "Carbon",
        "answer_hi": "कार्बन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which vitamin deficiency causes night blindness?",
        "question_hi": "किस विटामिन की कमी से रतौंधी होती है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the chemical symbol for Calcium?",
        "question_hi": "कैल्शियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Cl", "Cm", "Ca", "C"],
        "options_hi": ["Cl", "Cm", "Ca", "C"],
        "answer_en": "Ca",
        "answer_hi": "Ca",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which gas is used in refrigerator?",
        "question_hi": "रेफ्रिजरेटर में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Ammonia", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["अमोनिया", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Ammonia",
        "answer_hi": "अमोनिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the largest moon in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे बड़ा चंद्रमा कौन सा है?",
        "options_en": ["Moon", "Titan", "Ganymede", "Europa"],
        "options_hi": ["चंद्रमा", "टाइटन", "गेनीमेड", "यूरोपा"],
        "answer_en": "Ganymede",
        "answer_hi": "गेनीमेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which part of the cell contains genetic material?",
        "question_hi": "कोशिका का कौन सा भाग आनुवंशिक सामग्री रखता है?",
        "options_en": ["Cytoplasm", "Nucleus", "Mitochondria", "Ribosome"],
        "options_hi": ["कोशिका द्रव्य", "केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the chemical formula of ammonia?",
        "question_hi": "अमोनिया का रासायनिक सूत्र क्या है?",
        "options_en": ["NH₃", "NH₄", "NO₂", "NO₃"],
        "options_hi": ["NH₃", "NH₄", "NO₂", "NO₃"],
        "answer_en": "NH₃",
        "answer_hi": "NH₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which instrument is used to see distant objects?",
        "question_hi": "दूर की वस्तुओं को देखने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Microscope", "Telescope", "Periscope", "Kaleidoscope"],
        "options_hi": ["माइक्रोस्कोप", "टेलीस्कोप", "पेरिस्कोप", "कैलाइडोस्कोप"],
        "answer_en": "Telescope",
        "answer_hi": "टेलीस्कोप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the chemical symbol for Lead?",
        "question_hi": "सीसे का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ld", "Pb", "Le", "Pl"],
        "options_hi": ["Ld", "Pb", "Le", "Pl"],
        "answer_en": "Pb",
        "answer_hi": "Pb",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which gas is used in fire extinguishers?",
        "question_hi": "आग बुझाने वाले उपकरणों में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the study of birds called?",
        "question_hi": "पक्षियों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Ornithology", "Entomology", "Herpetology", "Ichthyology"],
        "options_hi": ["पक्षीविज्ञान", "कीटविज्ञान", "सरीसृपविज्ञान", "मत्स्यविज्ञान"],
        "answer_en": "Ornithology",
        "answer_hi": "पक्षीविज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which planet has the Great Red Spot?",
        "question_hi": "किस ग्रह पर ग्रेट रेड स्पॉट है?",
        "options_en": ["Mars", "Jupiter", "Saturn", "Venus"],
        "options_hi": ["मंगल", "बृहस्पति", "शनि", "शुक्र"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
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
        "num": 76,
        "question_en": "Which vitamin is essential for healthy bones?",
        "question_hi": "स्वस्थ हड्डियों के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the chemical symbol for Mercury?",
        "question_hi": "पारे का रासायनिक प्रतीक क्या है?",
        "options_en": ["Me", "Mr", "Hg", "My"],
        "options_hi": ["Me", "Mr", "Hg", "My"],
        "answer_en": "Hg",
        "answer_hi": "Hg",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which gas is used for artificial ripening of fruits?",
        "question_hi": "फलों के कृत्रिम पकाने के लिए कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Ethylene", "Nitrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "ईथिलीन", "नाइट्रोजन"],
        "answer_en": "Ethylene",
        "answer_hi": "ईथिलीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the study of insects called?",
        "question_hi": "कीटों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Ornithology", "Entomology", "Herpetology", "Ichthyology"],
        "options_hi": ["पक्षीविज्ञान", "कीटविज्ञान", "सरीसृपविज्ञान", "मत्स्यविज्ञान"],
        "answer_en": "Entomology",
        "answer_hi": "कीटविज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which planet is known as the Evening Star?",
        "question_hi": "कौन सा ग्रह इवनिंग स्टार के नाम से जाना जाता है?",
        "options_en": ["Mars", "Venus", "Mercury", "Jupiter"],
        "options_hi": ["मंगल", "शुक्र", "बुध", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the chemical formula of carbon dioxide?",
        "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CO", "CO₂", "C₂O", "C₂O₂"],
        "options_hi": ["CO", "CO₂", "C₂O", "C₂O₂"],
        "answer_en": "CO₂",
        "answer_hi": "CO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which vitamin is essential for vision?",
        "question_hi": "दृष्टि के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the chemical symbol for Tin?",
        "question_hi": "टिन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ti", "Tn", "Sn", "Si"],
        "options_hi": ["Ti", "Tn", "Sn", "Si"],
        "answer_en": "Sn",
        "answer_hi": "Sn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which gas is known as marsh gas?",
        "question_hi": "कौन सी गैस मार्श गैस के नाम से जानी जाती है?",
        "options_en": ["Methane", "Ethane", "Propane", "Butane"],
        "options_hi": ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the study of fungi called?",
        "question_hi": "कवक के अध्ययन को क्या कहते हैं?",
        "options_en": ["Mycology", "Bacteriology", "Virology", "Phycology"],
        "options_hi": ["कवक विज्ञान", "जीवाणु विज्ञान", "वायरोलॉजी", "शैवाल विज्ञान"],
        "answer_en": "Mycology",
        "answer_hi": "कवक विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which planet has the most circular orbit?",
        "question_hi": "किस ग्रह की कक्षा सबसे गोलाकार है?",
        "options_en": ["Earth", "Venus", "Mars", "Neptune"],
        "options_hi": ["पृथ्वी", "शुक्र", "मंगल", "वरुण"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the chemical formula of common salt?",
        "question_hi": "साधारण नमक का रासायनिक सूत्र क्या है?",
        "options_en": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "options_hi": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which vitamin deficiency causes beriberi?",
        "question_hi": "किस विटामिन की कमी से बेरीबेरी होता है?",
        "options_en": ["Vitamin A", "Vitamin B1", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B1", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन B1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the chemical symbol for Zinc?",
        "question_hi": "जस्ते का रासायनिक प्रतीक क्या है?",
        "options_en": ["Zi", "Zn", "Zc", "Z"],
        "options_hi": ["Zi", "Zn", "Zc", "Z"],
        "answer_en": "Zn",
        "answer_hi": "Zn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which gas is used in balloons for flying?",
        "question_hi": "उड़ने वाले गुब्बारों में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
        "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "हीलियम", "नाइट्रोजन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the study of algae called?",
        "question_hi": "शैवाल के अध्ययन को क्या कहते हैं?",
        "options_en": ["Mycology", "Bacteriology", "Phycology", "Virology"],
        "options_hi": ["कवक विज्ञान", "जीवाणु विज्ञान", "शैवाल विज्ञान", "वायरोलॉजी"],
        "answer_en": "Phycology",
        "answer_hi": "शैवाल विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which planet has the shortest day?",
        "question_hi": "किस ग्रह का दिन सबसे छोटा है?",
        "options_en": ["Jupiter", "Saturn", "Venus", "Mercury"],
        "options_hi": ["बृहस्पति", "शनि", "शुक्र", "बुध"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the chemical formula of washing soda?",
        "question_hi": "धोने का सोडा का रासायनिक सूत्र क्या है?",
        "options_en": ["NaHCO₃", "Na₂CO₃", "NaOH", "NaCl"],
        "options_hi": ["NaHCO₃", "Na₂CO₃", "NaOH", "NaCl"],
        "answer_en": "Na₂CO₃",
        "answer_hi": "Na₂CO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which vitamin deficiency causes rickets?",
        "question_hi": "किस विटामिन की कमी से रिकेट्स होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the chemical symbol for Nickel?",
        "question_hi": "निकेल का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ni", "Nk", "Nl", "Ne"],
        "options_hi": ["Ni", "Nk", "Nl", "Ne"],
        "answer_en": "Ni",
        "answer_hi": "Ni",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which gas is used in welding?",
        "question_hi": "वेल्डिंग में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Acetylene", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "एसिटिलीन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Acetylene",
        "answer_hi": "एसिटिलीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the study of viruses called?",
        "question_hi": "वायरस के अध्ययन को क्या कहते हैं?",
        "options_en": ["Bacteriology", "Virology", "Mycology", "Phycology"],
        "options_hi": ["जीवाणु विज्ञान", "वायरोलॉजी", "कवक विज्ञान", "शैवाल विज्ञान"],
        "answer_en": "Virology",
        "answer_hi": "वायरोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which planet has the longest day?",
        "question_hi": "किस ग्रह का दिन सबसे लंबा है?",
        "options_en": ["Venus", "Mercury", "Earth", "Mars"],
        "options_hi": ["शुक्र", "बुध", "पृथ्वी", "मंगल"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the chemical formula of quicklime?",
        "question_hi": "बिना बुझा चूना का रासायनिक सूत्र क्या है?",
        "options_en": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "options_hi": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "answer_en": "CaO",
        "answer_hi": "CaO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which vitamin is also known as tocopherol?",
        "question_hi": "किस विटामिन को टोकोफेरोल के नाम से भी जाना जाता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin E"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन E"],
        "answer_en": "Vitamin E",
        "answer_hi": "विटामिन E",
        "attempted": false,
        "selected": ""
    }    
// Add more questions here...
];


let currentQuestion = 0; 
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes
let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

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
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

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

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}

// submit 
function jumpToQuestion(index) {
            currentQuestion = index;
            loadQuestion(index);
        }

        function submitQuiz() {
            let confirmation = confirm("Are you sure you want to submit the test?");
            
            if (!confirmation) {
                return; // अगर यूज़र 'Cancel' करता है तो आगे नहीं बढ़ेंगे
            }

            let attempted = 0;
            let notAttempted = 0;
            let score = 0;
            const results = [];

            questions.forEach(q => {
                if (q.attempted) {
                    attempted++;
                    if (q.selected === q.answer) {
                        score++;
                    }
                } else {
                    notAttempted++;
                }
                results.push({ question: q.question, selected: q.selected || "Not Answered", correct: q.answer });
            });

            localStorage.setItem("attempted", attempted);
            localStorage.setItem("notAttempted", notAttempted);
            localStorage.setItem("score", score);
            localStorage.setItem("results", JSON.stringify(results));

            // रिजल्ट देखने से पहले एक और कन्फर्मेशन ले सकते हैं
            let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
            if (viewResult) {
                window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
            }
        }
        window.onload = () => {
            loadQuestion(currentQuestion);
        };


function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};


///////////////////////////////////////