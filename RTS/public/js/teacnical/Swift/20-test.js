const questions = [
    {
        "num": 1,
        "question_en": "What is the value of (a - b)²?",
        "question_hi": "(a - b)² का मान क्या है?",
        "options_en": ["a² - b²", "a² - 2ab + b²", "a² + b² - 2ab", "Both B and C"],
        "options_hi": ["a² - b²", "a² - 2ab + b²", "a² + b² - 2ab", "B और C दोनों"],
        "answer_en": "Both B and C",
        "answer_hi": "B और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which of these numbers is a perfect square?",
        "question_hi": "निम्नलिखित में से कौन सी संख्या पूर्ण वर्ग है?",
        "options_en": ["24", "36", "50", "72"],
        "options_hi": ["24", "36", "50", "72"],
        "answer_en": "36",
        "answer_hi": "36",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the chemical formula of Gypsum?",
        "question_hi": "जिप्सम का रासायनिक सूत्र क्या है?",
        "options_en": ["CaSO₄.2H₂O", "CaSO₄.½H₂O", "CaCO₃", "Ca(OH)₂"],
        "options_hi": ["CaSO₄.2H₂O", "CaSO₄.½H₂O", "CaCO₃", "Ca(OH)₂"],
        "answer_en": "CaSO₄.2H₂O",
        "answer_hi": "CaSO₄.2H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Who wrote 'Kamayani'?",
        "question_hi": "'कामायनी' किसने लिखी?",
        "options_en": ["Jaishankar Prasad", "Mahadevi Verma", "Suryakant Tripathi", "Sumitranandan Pant"],
        "options_hi": ["जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी", "सुमित्रानंदन पंत"],
        "answer_en": "Jaishankar Prasad",
        "answer_hi": "जयशंकर प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the SI unit of electric field intensity?",
        "question_hi": "विद्युत क्षेत्र तीव्रता की SI इकाई क्या है?",
        "options_en": ["Newton/Coulomb", "Volt/meter", "Both A and B", "Joule/Coulomb"],
        "options_hi": ["न्यूटन/कूलॉम", "वोल्ट/मीटर", "A और B दोनों", "जूल/कूलॉम"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which organ stores glycogen in human body?",
        "question_hi": "मानव शरीर में ग्लाइकोजन कौन सा अंग संग्रहीत करता है?",
        "options_en": ["Liver", "Pancreas", "Stomach", "Kidneys"],
        "options_hi": ["यकृत", "अग्न्याशय", "आमाशय", "वृक्क"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the antonym of 'Transparent'?",
        "question_hi": "'Transparent' का विलोम शब्द क्या है?",
        "options_en": ["Clear", "Opaque", "Visible", "Bright"],
        "options_hi": ["स्पष्ट", "अपारदर्शी", "दृश्यमान", "चमकीला"],
        "answer_en": "Opaque",
        "answer_hi": "अपारदर्शी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Who was the first Indian to win Nobel Prize in Physics?",
        "question_hi": "भौतिकी में नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
        "options_en": ["C.V. Raman", "Hargobind Khorana", "S. Chandrasekhar", "Subrahmanyan Chandrasekhar"],
        "options_hi": ["सी.वी. रमन", "हरगोबिंद खुराना", "एस. चंद्रशेखर", "सुब्रह्मण्यन चंद्रशेखर"],
        "answer_en": "C.V. Raman",
        "answer_hi": "सी.वी. रमन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Solve: x² + 5x + 6 = 0",
        "question_hi": "हल करें: x² + 5x + 6 = 0",
        "options_en": ["x = 2,3", "x = -2,-3", "x = 1,6", "x = -1,-6"],
        "options_hi": ["x = 2,3", "x = -2,-3", "x = 1,6", "x = -1,-6"],
        "answer_en": "x = -2,-3",
        "answer_hi": "x = -2,-3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which gas is used by plants during photosynthesis?",
        "question_hi": "पौधे प्रकाश संश्लेषण के दौरान किस गैस का उपयोग करते हैं?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the formula for centripetal force?",
        "question_hi": "अभिकेंद्रीय बल का सूत्र क्या है?",
        "options_en": ["mv²/r", "mω²r", "Both A and B", "mgr"],
        "options_hi": ["mv²/r", "mω²r", "A और B दोनों", "mgr"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which of these is not a part of human digestive system?",
        "question_hi": "निम्नलिखित में से कौन मानव पाचन तंत्र का भाग नहीं है?",
        "options_en": ["Esophagus", "Trachea", "Stomach", "Small intestine"],
        "options_hi": ["ग्रासनली", "श्वासनली", "आमाशय", "छोटी आंत"],
        "answer_en": "Trachea",
        "answer_hi": "श्वासनली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the synonym of 'Benevolent'?",
        "question_hi": "'Benevolent' का समानार्थी शब्द क्या है?",
        "options_en": ["Cruel", "Kind", "Selfish", "Greedy"],
        "options_hi": ["क्रूर", "दयालु", "स्वार्थी", "लालची"],
        "answer_en": "Kind",
        "answer_hi": "दयालु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Who built the Iron Pillar in Delhi?",
        "question_hi": "दिल्ली में लौह स्तंभ किसने बनवाया?",
        "options_en": ["Chandragupta II", "Ashoka", "Samudragupta", "Harsha"],
        "options_hi": ["चंद्रगुप्त II", "अशोक", "समुद्रगुप्त", "हर्ष"],
        "answer_en": "Chandragupta II",
        "answer_hi": "चंद्रगुप्त II",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the value of cos 0°?",
        "question_hi": "cos 0° का मान क्या है?",
        "options_en": ["0", "1", "0.5", "√3/2"],
        "options_hi": ["0", "1", "0.5", "√3/2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which element is a liquid at room temperature?",
        "question_hi": "कौन सा तत्व कमरे के तापमान पर तरल होता है?",
        "options_en": ["Bromine", "Chlorine", "Iodine", "Fluorine"],
        "options_hi": ["ब्रोमीन", "क्लोरीन", "आयोडीन", "फ्लोरीन"],
        "answer_en": "Bromine",
        "answer_hi": "ब्रोमीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the unit of electric power?",
        "question_hi": "विद्युत शक्ति की इकाई क्या है?",
        "options_en": ["Watt", "Joule", "Volt", "Ampere"],
        "options_hi": ["वाट", "जूल", "वोल्ट", "एम्पियर"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which vitamin is essential for good eyesight?",
        "question_hi": "अच्छी दृष्टि के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the plural of 'Tooth'?",
        "question_hi": "'Tooth' का बहुवचन क्या है?",
        "options_en": ["Tooths", "Teeth", "Toothes", "Teeths"],
        "options_hi": ["टूथ्स", "टीथ", "टूथेस", "टीथ्स"],
        "answer_en": "Teeth",
        "answer_hi": "टीथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Where is the India Gate located?",
        "question_hi": "इंडिया गेट कहाँ स्थित है?",
        "options_en": ["Delhi", "Mumbai", "Kolkata", "Chennai"],
        "options_hi": ["दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
        "answer_en": "Delhi",
        "answer_hi": "दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the area of a rectangle with length 8 cm and breadth 5 cm?",
        "question_hi": "8 सेमी लंबाई और 5 सेमी चौड़ाई वाले आयत का क्षेत्रफल क्या है?",
        "options_en": ["13 cm²", "26 cm²", "40 cm²", "45 cm²"],
        "options_hi": ["13 सेमी²", "26 सेमी²", "40 सेमी²", "45 सेमी²"],
        "answer_en": "40 cm²",
        "answer_hi": "40 सेमी²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which gas is used in making PVC?",
        "question_hi": "PVC बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Ethene", "Propene", "Vinyl chloride", "Acetylene"],
        "options_hi": ["ईथीन", "प्रोपीन", "विनाइल क्लोराइड", "एसिटिलीन"],
        "answer_en": "Vinyl chloride",
        "answer_hi": "विनाइल क्लोराइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the speed of sound in steel?",
        "question_hi": "स्टील में ध्वनि की गति क्या है?",
        "options_en": ["343 m/s", "5000 m/s", "1500 m/s", "3000 m/s"],
        "options_hi": ["343 मी/से", "5000 मी/से", "1500 मी/से", "3000 मी/से"],
        "answer_en": "5000 m/s",
        "answer_hi": "5000 मी/से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which cell organelle is called 'Control Center' of the cell?",
        "question_hi": "किस कोशिका अंग को 'कोशिका का नियंत्रण केंद्र' कहा जाता है?",
        "options_en": ["Mitochondria", "Nucleus", "Ribosome", "Golgi apparatus"],
        "options_hi": ["माइटोकॉन्ड्रिया", "केंद्रक", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the meaning of 'विद्यालय'?",
        "question_hi": "'विद्यालय' का अर्थ क्या है?",
        "options_en": ["Hospital", "School", "Office", "Market"],
        "options_hi": ["अस्पताल", "विद्यालय", "कार्यालय", "बाजार"],
        "answer_en": "School",
        "answer_hi": "विद्यालय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Who was the first Indian woman to win Miss World?",
        "question_hi": "मिस वर्ल्ड जीतने वाली पहली भारतीय महिला कौन थीं?",
        "options_en": ["Aishwarya Rai", "Sushmita Sen", "Priyanka Chopra", "Reita Faria"],
        "options_hi": ["ऐश्वर्या राय", "सुष्मिता सेन", "प्रियंका चोपड़ा", "रीता फारिया"],
        "answer_en": "Reita Faria",
        "answer_hi": "रीता फारिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the value of sec 0°?",
        "question_hi": "sec 0° का मान क्या है?",
        "options_en": ["0", "1", "∞", "Undefined"],
        "options_hi": ["0", "1", "∞", "अपरिभाषित"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which acid is present in oranges?",
        "question_hi": "संतरे में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Citric acid", "Ascorbic acid", "Both A and B", "Tartaric acid"],
        "options_hi": ["सिट्रिक अम्ल", "एस्कॉर्बिक अम्ल", "A और B दोनों", "टार्टरिक अम्ल"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the principle of working of a transformer?",
        "question_hi": "ट्रांसफॉर्मर के कार्य करने का सिद्धांत क्या है?",
        "options_en": ["Ohm's law", "Faraday's law", "Mutual induction", "Both B and C"],
        "options_hi": ["ओम का नियम", "फैराडे का नियम", "पारस्परिक प्रेरण", "B और C दोनों"],
        "answer_en": "Both B and C",
        "answer_hi": "B और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which blood cells are largest in size?",
        "question_hi": "कौन सी रक्त कोशिकाएं आकार में सबसे बड़ी होती हैं?",
        "options_en": ["Red blood cells", "White blood cells", "Platelets", "Monocytes"],
        "options_hi": ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "मोनोसाइट्स"],
        "answer_en": "Monocytes",
        "answer_hi": "मोनोसाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the present perfect tense of 'see'?",
        "question_hi": "'see' का present perfect tense क्या है?",
        "options_en": ["see", "saw", "seen", "have seen"],
        "options_hi": ["सी", "सॉ", "सीन", "हैव सीन"],
        "answer_en": "have seen",
        "answer_hi": "हैव सीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Who founded the Sikh religion?",
        "question_hi": "सिख धर्म की स्थापना किसने की?",
        "options_en": ["Guru Nanak", "Guru Gobind Singh", "Guru Arjan Dev", "Guru Tegh Bahadur"],
        "options_hi": ["गुरु नानक", "गुरु गोबिंद सिंह", "गुरु अर्जन देव", "गुरु तेग बहादुर"],
        "answer_en": "Guru Nanak",
        "answer_hi": "गुरु नानक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the value of 3⁴?",
        "question_hi": "3⁴ का मान क्या है?",
        "options_en": ["12", "27", "81", "243"],
        "options_hi": ["12", "27", "81", "243"],
        "answer_en": "81",
        "answer_hi": "81",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which metal is used in making coins?",
        "question_hi": "सिक्के बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Copper", "Nickel", "Both A and B", "Silver"],
        "options_hi": ["तांबा", "निकल", "A और B दोनों", "चांदी"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
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
        "num": 36,
        "question_en": "Which part of human brain controls breathing?",
        "question_hi": "मानव मस्तिष्क का कौन सा भाग श्वसन नियंत्रित करता है?",
        "options_en": ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
        "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला ऑब्लोंगाटा", "हाइपोथैलेमस"],
        "answer_en": "Medulla oblongata",
        "answer_hi": "मेडुला ऑब्लोंगाटा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the synonym of 'Courageous'?",
        "question_hi": "'Courageous' का समानार्थी शब्द क्या है?",
        "options_en": ["Brave", "Coward", "Weak", "Timid"],
        "options_hi": ["बहादुर", "कायर", "कमजोर", "डरपोक"],
        "answer_en": "Brave",
        "answer_hi": "बहादुर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Where is the Sun Temple located?",
        "question_hi": "सूर्य मंदिर कहाँ स्थित है?",
        "options_en": ["Konark", "Khajuraho", "Madurai", "Varanasi"],
        "options_hi": ["कोणार्क", "खजुराहो", "मदुरै", "वाराणसी"],
        "answer_en": "Konark",
        "answer_hi": "कोणार्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the value of (10 + 5) × 2?",
        "question_hi": "(10 + 5) × 2 का मान क्या है?",
        "options_en": ["20", "25", "30", "35"],
        "options_hi": ["20", "25", "30", "35"],
        "answer_en": "30",
        "answer_hi": "30",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which gas is used in making ammonia?",
        "question_hi": "अमोनिया बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Nitrogen and Hydrogen", "Oxygen and Hydrogen", "Nitrogen and Oxygen", "Carbon and Hydrogen"],
        "options_hi": ["नाइट्रोजन और हाइड्रोजन", "ऑक्सीजन और हाइड्रोजन", "नाइट्रोजन और ऑक्सीजन", "कार्बन और हाइड्रोजन"],
        "answer_en": "Nitrogen and Hydrogen",
        "answer_hi": "नाइट्रोजन और हाइड्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the formula for work done?",
        "question_hi": "किए गए कार्य का सूत्र क्या है?",
        "options_en": ["F × d", "m × g × h", "Both A and B", "½ × m × v²"],
        "options_hi": ["F × d", "m × g × h", "A और B दोनों", "½ × m × v²"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which vitamin is produced by skin when exposed to sunlight?",
        "question_hi": "सूर्य के प्रकाश के संपर्क में आने पर त्वचा कौन सा विटामिन उत्पन्न करती है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the antonym of 'Success'?",
        "question_hi": "'Success' का विलोम शब्द क्या है?",
        "options_en": ["Victory", "Failure", "Win", "Achievement"],
        "options_hi": ["विजय", "असफलता", "जीत", "उपलब्धि"],
        "answer_en": "Failure",
        "answer_hi": "असफलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Who was the first Indian woman to win an Asian Games gold?",
        "question_hi": "एशियाई खेलों में स्वर्ण पदक जीतने वाली पहली भारतीय महिला कौन थीं?",
        "options_en": ["P.T. Usha", "Kamaljit Sandhu", "Milkha Singh", "Anju Bobby George"],
        "options_hi": ["पी.टी. उषा", "कमलजीत संधू", "मिल्खा सिंह", "अंजू बॉबी जॉर्ज"],
        "answer_en": "Kamaljit Sandhu",
        "answer_hi": "कमलजीत संधू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the value of √169?",
        "question_hi": "√169 का मान क्या है?",
        "options_en": ["11", "12", "13", "14"],
        "options_hi": ["11", "12", "13", "14"],
        "answer_en": "13",
        "answer_hi": "13",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which element has the chemical symbol 'Sn'?",
        "question_hi": "किस तत्व का रासायनिक प्रतीक 'Sn' है?",
        "options_en": ["Tin", "Antimony", "Strontium", "Selenium"],
        "options_hi": ["टिन", "एंटीमनी", "स्ट्रोंशियम", "सेलेनियम"],
        "answer_en": "Tin",
        "answer_hi": "टिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the SI unit of luminous flux?",
        "question_hi": "ज्योति फ्लक्स की SI इकाई क्या है?",
        "options_en": ["Lumen", "Lux", "Candela", "Watt"],
        "options_hi": ["लुमेन", "लक्स", "कैंडेला", "वाट"],
        "answer_en": "Lumen",
        "answer_hi": "लुमेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which gland produces thyroxine?",
        "question_hi": "कौन सी ग्रंथि थायरॉक्सिन उत्पन्न करती है?",
        "options_en": ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
        "options_hi": ["थायरॉइड", "पिट्यूटरी", "एड्रेनल", "अग्न्याशय"],
        "answer_en": "Thyroid",
        "answer_hi": "थायरॉइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the meaning of 'सफलता'?",
        "question_hi": "'सफलता' का अर्थ क्या है?",
        "options_en": ["Failure", "Success", "Attempt", "Effort"],
        "options_hi": ["असफलता", "सफलता", "प्रयास", "प्रयत्न"],
        "answer_en": "Success",
        "answer_hi": "सफलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Who designed the Indian Parliament House?",
        "question_hi": "भारतीय संसद भवन को किसने डिजाइन किया?",
        "options_en": ["Edwin Lutyens", "Herbert Baker", "Le Corbusier", "Charles Correa"],
        "options_hi": ["एडविन लुटियंस", "हर्बर्ट बेकर", "ले कॉर्बूज़ियर", "चार्ल्स कोरिया"],
        "answer_en": "Edwin Lutyens",
        "answer_hi": "एडविन लुटियंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the perimeter of a circle with radius 7 cm?",
        "question_hi": "7 सेमी त्रिज्या वाले वृत्त की परिधि क्या है?",
        "options_en": ["22 cm", "44 cm", "66 cm", "88 cm"],
        "options_hi": ["22 सेमी", "44 सेमी", "66 सेमी", "88 सेमी"],
        "answer_en": "44 cm",
        "answer_hi": "44 सेमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which gas is used in making soft drinks?",
        "question_hi": "सॉफ्ट ड्रिंक्स बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the wavelength of visible light?",
        "question_hi": "दृश्य प्रकाश की तरंगदैर्ध्य क्या है?",
        "options_en": ["100-200 nm", "200-400 nm", "400-700 nm", "700-1000 nm"],
        "options_hi": ["100-200 nm", "200-400 nm", "400-700 nm", "700-1000 nm"],
        "answer_en": "400-700 nm",
        "answer_hi": "400-700 nm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which cell organelle is called 'Packaging Center'?",
        "question_hi": "किस कोशिका अंग को 'पैकेजिंग केंद्र' कहा जाता है?",
        "options_en": ["Mitochondria", "Golgi apparatus", "Endoplasmic reticulum", "Lysosome"],
        "options_hi": ["माइटोकॉन्ड्रिया", "गॉल्जी उपकरण", "अंतर्द्रव्यी जालिका", "लाइसोसोम"],
        "answer_en": "Golgi apparatus",
        "answer_hi": "गॉल्जी उपकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the comparative degree of 'Bad'?",
        "question_hi": "'Bad' की comparative degree क्या है?",
        "options_en": ["Bad", "Worse", "Worst", "Badder"],
        "options_hi": ["बैड", "वर्स", "वर्स्ट", "बैडर"],
        "answer_en": "Worse",
        "answer_hi": "वर्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Where is the Lotus Temple located?",
        "question_hi": "लोटस टेम्पल कहाँ स्थित है?",
        "options_en": ["Delhi", "Mumbai", "Kolkata", "Chennai"],
        "options_hi": ["दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
        "answer_en": "Delhi",
        "answer_hi": "दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the value of 8² ÷ 4²?",
        "question_hi": "8² ÷ 4² का मान क्या है?",
        "options_en": ["2", "4", "8", "16"],
        "options_hi": ["2", "4", "8", "16"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which acid is present in grapes?",
        "question_hi": "अंगूर में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Tartaric acid", "Malic acid", "Both A and B", "Citric acid"],
        "options_hi": ["टार्टरिक अम्ल", "मैलिक अम्ल", "A और B दोनों", "सिट्रिक अम्ल"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is Snell's law?",
        "question_hi": "स्नेल का नियम क्या है?",
        "options_en": ["n₁sinθ₁ = n₂sinθ₂", "V = IR", "F = ma", "P = F/A"],
        "options_hi": ["n₁sinθ₁ = n₂sinθ₂", "V = IR", "F = ma", "P = F/A"],
        "answer_en": "n₁sinθ₁ = n₂sinθ₂",
        "answer_hi": "n₁sinθ₁ = n₂sinθ₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which blood cells are most numerous?",
        "question_hi": "कौन सी रक्त कोशिकाएं सबसे अधिक संख्या में होती हैं?",
        "options_en": ["Red blood cells", "White blood cells", "Platelets", "Lymphocytes"],
        "options_hi": ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "लिम्फोसाइट्स"],
        "answer_en": "Red blood cells",
        "answer_hi": "लाल रक्त कोशिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the future perfect tense of 'complete'?",
        "question_hi": "'complete' का future perfect tense क्या है?",
        "options_en": ["complete", "completed", "will complete", "will have completed"],
        "options_hi": ["कम्प्लीट", "कम्प्लीटेड", "विल कम्प्लीट", "विल हैव कम्प्लीटेड"],
        "answer_en": "will have completed",
        "answer_hi": "विल हैव कम्प्लीटेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Who was the first Indian to win Grammy Award?",
        "question_hi": "ग्रैमी अवार्ड जीतने वाले पहले भारतीय कौन थे?",
        "options_en": ["A.R. Rahman", "Pandit Ravi Shankar", "Zakir Hussain", "Lata Mangeshkar"],
        "options_hi": ["ए.आर. रहमान", "पंडित रवि शंकर", "जाकिर हुसैन", "लता मंगेशकर"],
        "answer_en": "Pandit Ravi Shankar",
        "answer_hi": "पंडित रवि शंकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the value of 5³?",
        "question_hi": "5³ का मान क्या है?",
        "options_en": ["15", "25", "125", "625"],
        "options_hi": ["15", "25", "125", "625"],
        "answer_en": "125",
        "answer_hi": "125",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which metal is used in making electric wires?",
        "question_hi": "विद्युत तार बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Copper", "Aluminum", "Both A and B", "Silver"],
        "options_hi": ["तांबा", "एल्युमिनियम", "A और B दोनों", "चांदी"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the unit of heat?",
        "question_hi": "ऊष्मा की इकाई क्या है?",
        "options_en": ["Joule", "Calorie", "Both A and B", "Watt"],
        "options_hi": ["जूल", "कैलोरी", "A और B दोनों", "वाट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which part of plant conducts food?",
        "question_hi": "पौधे का कौन सा भाग भोजन का संवहन करता है?",
        "options_en": ["Xylem", "Phloem", "Root", "Stem"],
        "options_hi": ["जाइलम", "फ्लोएम", "जड़", "तना"],
        "answer_en": "Phloem",
        "answer_hi": "फ्लोएम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the synonym of 'Beautiful'?",
        "question_hi": "'Beautiful' का समानार्थी शब्द क्या है?",
        "options_en": ["Ugly", "Pretty", "Horrible", "Terrible"],
        "options_hi": ["बदसूरत", "सुंदर", "भयानक", "भयंकर"],
        "answer_en": "Pretty",
        "answer_hi": "सुंदर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Where is the Mysore Palace located?",
        "question_hi": "मैसूर पैलेस कहाँ स्थित है?",
        "options_en": ["Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh"],
        "options_hi": ["कर्नाटक", "तमिलनाडु", "केरल", "आंध्र प्रदेश"],
        "answer_en": "Karnataka",
        "answer_hi": "कर्नाटक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the value of (12 × 3) ÷ 4?",
        "question_hi": "(12 × 3) ÷ 4 का मान क्या है?",
        "options_en": ["6", "9", "12", "15"],
        "options_hi": ["6", "9", "12", "15"],
        "answer_en": "9",
        "answer_hi": "9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which gas is used in making polystyrene foam?",
        "question_hi": "पॉलीस्टाइरीन फोम बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हीलियम"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the formula for density?",
        "question_hi": "घनत्व का सूत्र क्या है?",
        "options_en": ["mass/volume", "volume/mass", "mass × volume", "mass + volume"],
        "options_hi": ["द्रव्यमान/आयतन", "आयतन/द्रव्यमान", "द्रव्यमान × आयतन", "द्रव्यमान + आयतन"],
        "answer_en": "mass/volume",
        "answer_hi": "द्रव्यमान/आयतन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which vitamin deficiency causes Pellagra?",
        "question_hi": "किस विटामिन की कमी से पेलाग्रा रोग होता है?",
        "options_en": ["Vitamin B3", "Vitamin B1", "Vitamin B2", "Vitamin B12"],
        "options_hi": ["विटामिन B3", "विटामिन B1", "विटामिन B2", "विटामिन B12"],
        "answer_en": "Vitamin B3",
        "answer_hi": "विटामिन B3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the antonym of 'Brave'?",
        "question_hi": "'Brave' का विलोम शब्द क्या है?",
        "options_en": ["Courageous", "Coward", "Strong", "Heroic"],
        "options_hi": ["साहसी", "कायर", "मजबूत", "वीर"],
        "answer_en": "Coward",
        "answer_hi": "कायर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Who was the first Indian woman to win Booker Prize?",
        "question_hi": "बुकर पुरस्कार जीतने वाली पहली भारतीय महिला कौन थीं?",
        "options_en": ["Arundhati Roy", "Kiran Desai", "Salman Rushdie", "V.S. Naipaul"],
        "options_hi": ["अरुंधति रॉय", "किरण देसाई", "सलमान रुश्दी", "वी.एस. नायपॉल"],
        "answer_en": "Arundhati Roy",
        "answer_hi": "अरुंधति रॉय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the value of √196?",
        "question_hi": "√196 का मान क्या है?",
        "options_en": ["12", "13", "14", "15"],
        "options_hi": ["12", "13", "14", "15"],
        "answer_en": "14",
        "answer_hi": "14",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which element has the chemical symbol 'Zn'?",
        "question_hi": "किस तत्व का रासायनिक प्रतीक 'Zn' है?",
        "options_en": ["Zinc", "Zirconium", "Zircon", "Zincite"],
        "options_hi": ["जिंक", "जिरकोनियम", "जिरकॉन", "जिंकाइट"],
        "answer_en": "Zinc",
        "answer_hi": "जिंक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
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
        "num": 78,
        "question_en": "Which gland produces cortisol?",
        "question_hi": "कौन सी ग्रंथि कोर्टिसोल उत्पन्न करती है?",
        "options_en": ["Adrenal", "Thyroid", "Pituitary", "Pancreas"],
        "options_hi": ["एड्रेनल", "थायरॉइड", "पिट्यूटरी", "अग्न्याशय"],
        "answer_en": "Adrenal",
        "answer_hi": "एड्रेनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the meaning of 'साहसी'?",
        "question_hi": "'साहसी' का अर्थ क्या है?",
        "options_en": ["Coward", "Brave", "Weak", "Timid"],
        "options_hi": ["कायर", "साहसी", "कमजोर", "डरपोक"],
        "answer_en": "Brave",
        "answer_hi": "साहसी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Who discovered the electron?",
        "question_hi": "इलेक्ट्रॉन की खोज किसने की?",
        "options_en": ["J.J. Thomson", "Ernest Rutherford", "James Chadwick", "Niels Bohr"],
        "options_hi": ["जे.जे. थॉमसन", "अर्नेस्ट रदरफोर्ड", "जेम्स चैडविक", "नील्स बोहर"],
        "answer_en": "J.J. Thomson",
        "answer_hi": "जे.जे. थॉमसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the volume of a cylinder with radius 3 cm and height 7 cm?",
        "question_hi": "3 सेमी त्रिज्या और 7 सेमी ऊंचाई वाले बेलन का आयतन क्या है?",
        "options_en": ["21π cm³", "42π cm³", "63π cm³", "84π cm³"],
        "options_hi": ["21π सेमी³", "42π सेमी³", "63π सेमी³", "84π सेमी³"],
        "answer_en": "63π cm³",
        "answer_hi": "63π सेमी³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which gas is used in making urea?",
        "question_hi": "यूरिया बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Ammonia and Carbon dioxide", "Nitrogen and Hydrogen", "Oxygen and Hydrogen", "Methane and Oxygen"],
        "options_hi": ["अमोनिया और कार्बन डाइऑक्साइड", "नाइट्रोजन और हाइड्रोजन", "ऑक्सीजन और हाइड्रोजन", "मीथेन और ऑक्सीजन"],
        "answer_en": "Ammonia and Carbon dioxide",
        "answer_hi": "अमोनिया और कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the critical angle for glass?",
        "question_hi": "कांच के लिए क्रांतिक कोण क्या है?",
        "options_en": ["24°", "42°", "48°", "90°"],
        "options_hi": ["24°", "42°", "48°", "90°"],
        "answer_en": "42°",
        "answer_hi": "42°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which cell organelle contains RNA?",
        "question_hi": "किस कोशिका अंग में RNA पाया जाता है?",
        "options_en": ["Nucleus", "Ribosome", "Both A and B", "Mitochondria"],
        "options_hi": ["केंद्रक", "राइबोसोम", "A और B दोनों", "माइटोकॉन्ड्रिया"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the superlative degree of 'Bad'?",
        "question_hi": "'Bad' की superlative degree क्या है?",
        "options_en": ["Bad", "Worse", "Worst", "Baddest"],
        "options_hi": ["बैड", "वर्स", "वर्स्ट", "बैडेस्ट"],
        "answer_en": "Worst",
        "answer_hi": "वर्स्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Where is the Rameswaram Temple located?",
        "question_hi": "रामेश्वरम मंदिर कहाँ स्थित है?",
        "options_en": ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
        "options_hi": ["तमिलनाडु", "केरल", "कर्नाटक", "आंध्र प्रदेश"],
        "answer_en": "Tamil Nadu",
        "answer_hi": "तमिलनाडु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the value of 9² - 7²?",
        "question_hi": "9² - 7² का मान क्या है?",
        "options_en": ["4", "16", "32", "64"],
        "options_hi": ["4", "16", "32", "64"],
        "answer_en": "32",
        "answer_hi": "32",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which acid is present in spinach?",
        "question_hi": "पालक में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Oxalic acid", "Citric acid", "Malic acid", "Tartaric acid"],
        "options_hi": ["ऑक्सैलिक अम्ल", "सिट्रिक अम्ल", "मैलिक अम्ल", "टार्टरिक अम्ल"],
        "answer_en": "Oxalic acid",
        "answer_hi": "ऑक्सैलिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the law of conservation of momentum?",
        "question_hi": "संवेग संरक्षण का नियम क्या है?",
        "options_en": ["Total momentum remains constant", "Momentum can be created", "Momentum can be destroyed", "Momentum changes with time"],
        "options_hi": ["कुल संवेग स्थिर रहता है", "संवेग बनाया जा सकता है", "संवेग नष्ट किया जा सकता है", "संवेग समय के साथ बदलता है"],
        "answer_en": "Total momentum remains constant",
        "answer_hi": "कुल संवेग स्थिर रहता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which blood cells live the longest?",
        "question_hi": "कौन सी रक्त कोशिकाएं सबसे लंबे समय तक जीवित रहती हैं?",
        "options_en": ["Red blood cells", "White blood cells", "Platelets", "Lymphocytes"],
        "options_hi": ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "लिम्फोसाइट्स"],
        "answer_en": "Lymphocytes",
        "answer_hi": "लिम्फोसाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the past continuous tense of 'study'?",
        "question_hi": "'study' का past continuous tense क्या है?",
        "options_en": ["study", "studied", "studying", "was studying"],
        "options_hi": ["स्टडी", "स्टडीड", "स्टडीइंग", "वाज स्टडीइंग"],
        "answer_en": "was studying",
        "answer_hi": "वाज स्टडीइंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Who was the first Indian to win Miss Universe?",
        "question_hi": "मिस यूनिवर्स जीतने वाली पहली भारतीय कौन थीं?",
        "options_en": ["Sushmita Sen", "Aishwarya Rai", "Lara Dutta", "Priyanka Chopra"],
        "options_hi": ["सुष्मिता सेन", "ऐश्वर्या राय", "लारा दत्ता", "प्रियंका चोपड़ा"],
        "answer_en": "Sushmita Sen",
        "answer_hi": "सुष्मिता सेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the value of 11²?",
        "question_hi": "11² का मान क्या है?",
        "options_en": ["121", "144", "169", "196"],
        "options_hi": ["121", "144", "169", "196"],
        "answer_en": "121",
        "answer_hi": "121",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which metal is used in making stainless steel?",
        "question_hi": "स्टेनलेस स्टील बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Iron and Chromium", "Iron and Nickel", "Iron, Chromium and Nickel", "Iron and Carbon"],
        "options_hi": ["लोहा और क्रोमियम", "लोहा और निकल", "लोहा, क्रोमियम और निकल", "लोहा और कार्बन"],
        "answer_en": "Iron, Chromium and Nickel",
        "answer_hi": "लोहा, क्रोमियम और निकल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the unit of angular velocity?",
        "question_hi": "कोणीय वेग की इकाई क्या है?",
        "options_en": ["radian/second", "degree/second", "Both A and B", "meter/second"],
        "options_hi": ["रेडियन/सेकंड", "डिग्री/सेकंड", "A और B दोनों", "मीटर/सेकंड"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which part of human body produces voice?",
        "question_hi": "मानव शरीर का कौन सा भाग आवाज उत्पन्न करता है?",
        "options_en": ["Larynx", "Pharynx", "Trachea", "Bronchi"],
        "options_hi": ["कंठ", "ग्रसनी", "श्वासनली", "ब्रोंकाई"],
        "answer_en": "Larynx",
        "answer_hi": "कंठ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the synonym of 'Intelligent'?",
        "question_hi": "'Intelligent' का समानार्थी शब्द क्या है?",
        "options_en": ["Stupid", "Clever", "Foolish", "Dumb"],
        "options_hi": ["मूर्ख", "चतुर", "बेवकूफ", "गूंगा"],
        "answer_en": "Clever",
        "answer_hi": "चतुर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Where is the Vaishno Devi Temple located?",
        "question_hi": "वैष्णो देवी मंदिर कहाँ स्थित है?",
        "options_en": ["Jammu and Kashmir", "Himachal Pradesh", "Uttarakhand", "Punjab"],
        "options_hi": ["जम्मू और कश्मीर", "हिमाचल प्रदेश", "उत्तराखंड", "पंजाब"],
        "answer_en": "Jammu and Kashmir",
        "answer_hi": "जम्मू और कश्मीर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the value of 6³?",
        "question_hi": "6³ का मान क्या है?",
        "options_en": ["18", "36", "216", "1296"],
        "options_hi": ["18", "36", "216", "1296"],
        "answer_en": "216",
        "answer_hi": "216",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which gas is used in making nitric acid?",
        "question_hi": "नाइट्रिक अम्ल बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Nitrogen dioxide", "Ammonia", "Both A and B", "Nitrogen"],
        "options_hi": ["नाइट्रोजन डाइऑक्साइड", "अमोनिया", "A और B दोनों", "नाइट्रोजन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
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