const questions = [
    {
        "num": 1,
        "question_en": "What is the value of (a + b)² - (a - b)²?",
        "question_hi": "(a + b)² - (a - b)² का मान क्या है?",
        "options_en": ["2ab", "4ab", "a² + b²", "2(a² + b²)"],
        "options_hi": ["2ab", "4ab", "a² + b²", "2(a² + b²)"],
        "answer_en": "4ab",
        "answer_hi": "4ab",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which of the following is a prime number?",
        "question_hi": "निम्नलिखित में से कौन सी अभाज्य संख्या है?",
        "options_en": ["1", "9", "17", "21"],
        "options_hi": ["1", "9", "17", "21"],
        "answer_en": "17",
        "answer_hi": "17",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
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
        "num": 4,
        "question_en": "Who wrote 'Godan'?",
        "question_hi": "'गोदान' किसने लिखा?",
        "options_en": ["Premchand", "Jaishankar Prasad", "Mahadevi Verma", "Suryakant Tripathi"],
        "options_hi": ["प्रेमचंद", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
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
        "num": 6,
        "question_en": "Which organ produces insulin in human body?",
        "question_hi": "मानव शरीर में इंसुलिन कौन सा अंग उत्पन्न करता है?",
        "options_en": ["Liver", "Pancreas", "Kidney", "Stomach"],
        "options_hi": ["यकृत", "अग्न्याशय", "वृक्क", "आमाशय"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
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
        "num": 8,
        "question_en": "Who was the first Governor General of independent India?",
        "question_hi": "स्वतंत्र भारत के प्रथम गवर्नर जनरल कौन थे?",
        "options_en": ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Rajendra Prasad"],
        "options_hi": ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "जवाहरलाल नेहरू", "राजेंद्र प्रसाद"],
        "answer_en": "Lord Mountbatten",
        "answer_hi": "लॉर्ड माउंटबेटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Solve: 3x - 7 = 8",
        "question_hi": "हल करें: 3x - 7 = 8",
        "options_en": ["x = 3", "x = 5", "x = 7", "x = 9"],
        "options_hi": ["x = 3", "x = 5", "x = 7", "x = 9"],
        "answer_en": "x = 5",
        "answer_hi": "x = 5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which gas is used in photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण में किस गैस का उपयोग होता है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the formula for force according to Newton's second law?",
        "question_hi": "न्यूटन के दूसरे नियम के अनुसार बल का सूत्र क्या है?",
        "options_en": ["F = ma", "F = mv", "F = mgh", "F = G(m1m2)/r²"],
        "options_hi": ["F = ma", "F = mv", "F = mgh", "F = G(m1m2)/r²"],
        "answer_en": "F = ma",
        "answer_hi": "F = ma",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which of these is a connecting tissue?",
        "question_hi": "निम्नलिखित में से कौन सा संयोजी ऊतक है?",
        "options_en": ["Blood", "Neuron", "Muscle", "Epithelial"],
        "options_hi": ["रक्त", "न्यूरॉन", "मांसपेशी", "उपकला"],
        "answer_en": "Blood",
        "answer_hi": "रक्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the antonym of 'Ancient'?",
        "question_hi": "'Ancient' का विलोम शब्द क्या है?",
        "options_en": ["Old", "Modern", "Historic", "Traditional"],
        "options_hi": ["पुराना", "आधुनिक", "ऐतिहासिक", "पारंपरिक"],
        "answer_en": "Modern",
        "answer_hi": "आधुनिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Who built the Taj Mahal?",
        "question_hi": "ताजमहल किसने बनवाया?",
        "options_en": ["Akbar", "Shah Jahan", "Jahangir", "Aurangzeb"],
        "options_hi": ["अकबर", "शाहजहाँ", "जहाँगीर", "औरंगजेब"],
        "answer_en": "Shah Jahan",
        "answer_hi": "शाहजहाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the value of log₁₀1000?",
        "question_hi": "log₁₀1000 का मान क्या है?",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which element has the atomic number 8?",
        "question_hi": "किस तत्व की परमाणु संख्या 8 है?",
        "options_en": ["Nitrogen", "Oxygen", "Fluorine", "Carbon"],
        "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "फ्लोरीन", "कार्बन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
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
        "num": 18,
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
        "num": 19,
        "question_en": "What is the plural of 'Child'?",
        "question_hi": "'Child' का बहुवचन क्या है?",
        "options_en": ["Childs", "Children", "Childes", "Childern"],
        "options_hi": ["चाइल्ड्स", "चिल्ड्रेन", "चाइल्डेस", "चाइल्डर्न"],
        "answer_en": "Children",
        "answer_hi": "चिल्ड्रेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Where is the Victoria Memorial located?",
        "question_hi": "विक्टोरिया मेमोरियल कहाँ स्थित है?",
        "options_en": ["Delhi", "Mumbai", "Kolkata", "Chennai"],
        "options_hi": ["दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
        "answer_en": "Kolkata",
        "answer_hi": "कोलकाता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the area of a square with side 5 cm?",
        "question_hi": "5 सेमी भुजा वाले वर्ग का क्षेत्रफल क्या है?",
        "options_en": ["20 cm²", "25 cm²", "30 cm²", "35 cm²"],
        "options_hi": ["20 सेमी²", "25 सेमी²", "30 सेमी²", "35 सेमी²"],
        "answer_en": "25 cm²",
        "answer_hi": "25 सेमी²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which gas is known as 'Marsh Gas'?",
        "question_hi": "किस गैस को 'मार्श गैस' कहा जाता है?",
        "options_en": ["Methane", "Ethane", "Propane", "Butane"],
        "options_hi": ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the speed of light in vacuum?",
        "question_hi": "निर्वात में प्रकाश की गति क्या है?",
        "options_en": ["3×10⁶ m/s", "3×10⁸ m/s", "3×10¹⁰ m/s", "3×10¹² m/s"],
        "options_hi": ["3×10⁶ मी/से", "3×10⁸ मी/से", "3×10¹⁰ मी/से", "3×10¹² मी/से"],
        "answer_en": "3×10⁸ m/s",
        "answer_hi": "3×10⁸ मी/से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which cell organelle is called 'Powerhouse of the cell'?",
        "question_hi": "किस कोशिका अंग को 'कोशिका का पावरहाउस' कहा जाता है?",
        "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the meaning of 'अनुपस्थित'?",
        "question_hi": "'अनुपस्थित' का अर्थ क्या है?",
        "options_en": ["Present", "Absent", "Happy", "Sad"],
        "options_hi": ["उपस्थित", "अनुपस्थित", "खुश", "दुखी"],
        "answer_en": "Absent",
        "answer_hi": "अनुपस्थित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Who was the first Indian woman in space?",
        "question_hi": "अंतरिक्ष में जाने वाली पहली भारतीय महिला कौन थीं?",
        "options_en": ["Kalpana Chawla", "Sunita Williams", "Rakesh Sharma", "Ravish Malhotra"],
        "options_hi": ["कल्पना चावला", "सुनीता विलियम्स", "राकेश शर्मा", "रविश मल्होत्रा"],
        "answer_en": "Kalpana Chawla",
        "answer_hi": "कल्पना चावला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the value of sin²θ + cos²θ?",
        "question_hi": "sin²θ + cos²θ का मान क्या है?",
        "options_en": ["0", "1", "2", "sin2θ"],
        "options_hi": ["0", "1", "2", "sin2θ"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which acid is present in vinegar?",
        "question_hi": "सिरका में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Acetic acid", "Citric acid", "Formic acid", "Lactic acid"],
        "options_hi": ["एसिटिक अम्ल", "सिट्रिक अम्ल", "फॉर्मिक अम्ल", "लैक्टिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the principle behind working of a rocket?",
        "question_hi": "रॉकेट के कार्य करने का सिद्धांत क्या है?",
        "options_en": ["Newton's first law", "Newton's second law", "Newton's third law", "Archimedes principle"],
        "options_hi": ["न्यूटन का पहला नियम", "न्यूटन का दूसरा नियम", "न्यूटन का तीसरा नियम", "आर्किमिडीज सिद्धांत"],
        "answer_en": "Newton's third law",
        "answer_hi": "न्यूटन का तीसरा नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which blood group is called universal donor?",
        "question_hi": "किस रक्त समूह को सार्वत्रिक दाता कहा जाता है?",
        "options_en": ["A", "B", "AB", "O"],
        "options_hi": ["A", "B", "AB", "O"],
        "answer_en": "O",
        "answer_hi": "O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the past participle of 'go'?",
        "question_hi": "'go' का past participle क्या है?",
        "options_en": ["goed", "went", "gone", "going"],
        "options_hi": ["गोएड", "वेंट", "गॉन", "गोइंग"],
        "answer_en": "gone",
        "answer_hi": "गॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Who founded the Mauryan Empire?",
        "question_hi": "मौर्य साम्राज्य की स्थापना किसने की?",
        "options_en": ["Chandragupta Maurya", "Ashoka", "Bindusara", "Samudragupta"],
        "options_hi": ["चंद्रगुप्त मौर्य", "अशोक", "बिन्दुसार", "समुद्रगुप्त"],
        "answer_en": "Chandragupta Maurya",
        "answer_hi": "चंद्रगुप्त मौर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the HCF of 12 and 18?",
        "question_hi": "12 और 18 का म.स.प. क्या है?",
        "options_en": ["2", "3", "6", "9"],
        "options_hi": ["2", "3", "6", "9"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which metal is liquid at room temperature?",
        "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
        "options_en": ["Iron", "Mercury", "Copper", "Aluminum"],
        "options_hi": ["लोहा", "पारा", "तांबा", "एल्युमिनियम"],
        "answer_en": "Mercury",
        "answer_hi": "पारा",
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
        "question_en": "Which part of plant performs photosynthesis?",
        "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
        "answer_en": "Leaf",
        "answer_hi": "पत्ती",
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
        "question_en": "Where is the Ajanta Caves located?",
        "question_hi": "अजंता की गुफाएं कहाँ स्थित हैं?",
        "options_en": ["Madhya Pradesh", "Maharashtra", "Rajasthan", "Gujarat"],
        "options_hi": ["मध्य प्रदेश", "महाराष्ट्र", "राजस्थान", "गुजरात"],
        "answer_en": "Maharashtra",
        "answer_hi": "महाराष्ट्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the value of 7! (7 factorial)?",
        "question_hi": "7! (7 फैक्टोरियल) का मान क्या है?",
        "options_en": ["5040", "720", "40320", "362880"],
        "options_hi": ["5040", "720", "40320", "362880"],
        "answer_en": "5040",
        "answer_hi": "5040",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which gas is used in fire extinguishers?",
        "question_hi": "आग बुझाने के यंत्रों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the formula for kinetic energy?",
        "question_hi": "गतिज ऊर्जा का सूत्र क्या है?",
        "options_en": ["½mv²", "mgh", "Fd", "P/t"],
        "options_hi": ["½mv²", "mgh", "Fd", "P/t"],
        "answer_en": "½mv²",
        "answer_hi": "½mv²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which vitamin is produced by human body when exposed to sunlight?",
        "question_hi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर कौन सा विटामिन उत्पन्न करता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the antonym of 'Victory'?",
        "question_hi": "'Victory' का विलोम शब्द क्या है?",
        "options_en": ["Success", "Defeat", "Win", "Triumph"],
        "options_hi": ["सफलता", "हार", "जीत", "विजय"],
        "answer_en": "Defeat",
        "answer_hi": "हार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Who was the first Indian to win Nobel Prize?",
        "question_hi": "नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
        "options_en": ["C.V. Raman", "Rabindranath Tagore", "Mother Teresa", "Hargobind Khorana"],
        "options_hi": ["सी.वी. रमन", "रबींद्रनाथ टैगोर", "मदर टेरेसा", "हरगोबिंद खुराना"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the value of (3 + 4)²?",
        "question_hi": "(3 + 4)² का मान क्या है?",
        "options_en": ["25", "49", "9", "16"],
        "options_hi": ["25", "49", "9", "16"],
        "answer_en": "49",
        "answer_hi": "49",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which element has the chemical symbol 'Ag'?",
        "question_hi": "किस तत्व का रासायनिक प्रतीक 'Ag' है?",
        "options_en": ["Silver", "Gold", "Aluminum", "Argon"],
        "options_hi": ["चांदी", "सोना", "एल्युमिनियम", "आर्गन"],
        "answer_en": "Silver",
        "answer_hi": "चांदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the SI unit of work?",
        "question_hi": "कार्य की SI इकाई क्या है?",
        "options_en": ["Joule", "Newton", "Watt", "Pascal"],
        "options_hi": ["जूल", "न्यूटन", "वाट", "पास्कल"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which gland is called 'Master Gland'?",
        "question_hi": "किस ग्रंथि को 'मास्टर ग्रंथि' कहा जाता है?",
        "options_en": ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
        "options_hi": ["थायरॉइड", "पिट्यूटरी", "एड्रेनल", "अग्न्याशय"],
        "answer_en": "Pituitary",
        "answer_hi": "पिट्यूटरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the meaning of 'सज्जन'?",
        "question_hi": "'सज्जन' का अर्थ क्या है?",
        "options_en": ["Wicked", "Gentleman", "Foolish", "Clever"],
        "options_hi": ["दुष्ट", "सज्जन", "मूर्ख", "चतुर"],
        "answer_en": "Gentleman",
        "answer_hi": "सज्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Who designed the Indian National Flag?",
        "question_hi": "भारतीय राष्ट्रीय ध्वज को किसने डिजाइन किया?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Pingali Venkayya", "Bal Gangadhar Tilak"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "पिंगली वेंकय्या", "बाल गंगाधर तिलक"],
        "answer_en": "Pingali Venkayya",
        "answer_hi": "पिंगली वेंकय्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the area of a triangle with base 10 cm and height 8 cm?",
        "question_hi": "10 सेमी आधार और 8 सेमी ऊंचाई वाले त्रिभुज का क्षेत्रफल क्या है?",
        "options_en": ["40 cm²", "80 cm²", "20 cm²", "60 cm²"],
        "options_hi": ["40 सेमी²", "80 सेमी²", "20 सेमी²", "60 सेमी²"],
        "answer_en": "40 cm²",
        "answer_hi": "40 सेमी²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which gas is known as 'Laughing Gas'?",
        "question_hi": "किस गैस को 'हंसाने वाली गैस' कहा जाता है?",
        "options_en": ["Oxygen", "Nitrous oxide", "Carbon dioxide", "Helium"],
        "options_hi": ["ऑक्सीजन", "नाइट्रस ऑक्साइड", "कार्बन डाइऑक्साइड", "हीलियम"],
        "answer_en": "Nitrous oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the speed of sound in air at 20°C?",
        "question_hi": "20°C पर हवा में ध्वनि की गति क्या है?",
        "options_en": ["330 m/s", "343 m/s", "300 m/s", "360 m/s"],
        "options_hi": ["330 मी/से", "343 मी/से", "300 मी/से", "360 मी/से"],
        "answer_en": "343 m/s",
        "answer_hi": "343 मी/से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which cell organelle contains chlorophyll?",
        "question_hi": "किस कोशिका अंग में क्लोरोफिल पाया जाता है?",
        "options_en": ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"],
        "options_hi": ["माइटोकॉन्ड्रिया", "क्लोरोप्लास्ट", "केंद्रक", "राइबोसोम"],
        "answer_en": "Chloroplast",
        "answer_hi": "क्लोरोप्लास्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the plural of 'Mouse'?",
        "question_hi": "'Mouse' का बहुवचन क्या है?",
        "options_en": ["Mouses", "Mice", "Mousees", "Mices"],
        "options_hi": ["माउसेस", "माइस", "माउसीज़", "माइसेस"],
        "answer_en": "Mice",
        "answer_hi": "माइस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Where is the Red Fort located?",
        "question_hi": "लाल किला कहाँ स्थित है?",
        "options_en": ["Agra", "Delhi", "Jaipur", "Mumbai"],
        "options_hi": ["आगरा", "दिल्ली", "जयपुर", "मुंबई"],
        "answer_en": "Delhi",
        "answer_hi": "दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the value of 2³ + 3²?",
        "question_hi": "2³ + 3² का मान क्या है?",
        "options_en": ["13", "17", "25", "11"],
        "options_hi": ["13", "17", "25", "11"],
        "answer_en": "17",
        "answer_hi": "17",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which acid is present in lemon?",
        "question_hi": "नींबू में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Citric acid", "Acetic acid", "Formic acid", "Lactic acid"],
        "options_hi": ["सिट्रिक अम्ल", "एसिटिक अम्ल", "फॉर्मिक अम्ल", "लैक्टिक अम्ल"],
        "answer_en": "Citric acid",
        "answer_hi": "सिट्रिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the principle of conservation of energy?",
        "question_hi": "ऊर्जा संरक्षण का सिद्धांत क्या है?",
        "options_en": ["Energy can be created", "Energy can be destroyed", "Energy can be converted", "Energy cannot be created or destroyed"],
        "options_hi": ["ऊर्जा बनाई जा सकती है", "ऊर्जा नष्ट की जा सकती है", "ऊर्जा परिवर्तित की जा सकती है", "ऊर्जा न तो बनाई जा सकती है और न ही नष्ट"],
        "answer_en": "Energy cannot be created or destroyed",
        "answer_hi": "ऊर्जा न तो बनाई जा सकती है और न ही नष्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
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
        "num": 61,
        "question_en": "What is the past tense of 'eat'?",
        "question_hi": "'eat' का past tense क्या है?",
        "options_en": ["eated", "ate", "eaten", "eating"],
        "options_hi": ["ईटेड", "एट", "ईटेन", "ईटिंग"],
        "answer_en": "ate",
        "answer_hi": "एट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Who was the first Mughal Emperor of India?",
        "question_hi": "भारत का प्रथम मुगल सम्राट कौन था?",
        "options_en": ["Akbar", "Babur", "Humayun", "Jahangir"],
        "options_hi": ["अकबर", "बाबर", "हुमायूँ", "जहाँगीर"],
        "answer_en": "Babur",
        "answer_hi": "बाबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the LCM of 6 and 8?",
        "question_hi": "6 और 8 का ल.स.प. क्या है?",
        "options_en": ["12", "24", "36", "48"],
        "options_hi": ["12", "24", "36", "48"],
        "answer_en": "24",
        "answer_hi": "24",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
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
        "num": 65,
        "question_en": "What is the unit of electric charge?",
        "question_hi": "विद्युत आवेश की इकाई क्या है?",
        "options_en": ["Coulomb", "Ampere", "Volt", "Ohm"],
        "options_hi": ["कूलॉम", "एम्पियर", "वोल्ट", "ओम"],
        "answer_en": "Coulomb",
        "answer_hi": "कूलॉम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
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
        "question_en": "Where is the Gateway of India located?",
        "question_hi": "गेटवे ऑफ इंडिया कहाँ स्थित है?",
        "options_en": ["Delhi", "Mumbai", "Kolkata", "Chennai"],
        "options_hi": ["दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
        "answer_en": "Mumbai",
        "answer_hi": "मुंबई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the value of 5² × 2³?",
        "question_hi": "5² × 2³ का मान क्या है?",
        "options_en": ["100", "200", "50", "25"],
        "options_hi": ["100", "200", "50", "25"],
        "answer_en": "200",
        "answer_hi": "200",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which gas is used in refrigerators?",
        "question_hi": "रेफ्रिजरेटर में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Ammonia", "Freon", "Both A and B", "Carbon dioxide"],
        "options_hi": ["अमोनिया", "फ्रेऑन", "A और B दोनों", "कार्बन डाइऑक्साइड"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the formula for potential energy?",
        "question_hi": "स्थितिज ऊर्जा का सूत्र क्या है?",
        "options_en": ["½mv²", "mgh", "Fd", "P/t"],
        "options_hi": ["½mv²", "mgh", "Fd", "P/t"],
        "answer_en": "mgh",
        "answer_hi": "mgh",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which vitamin deficiency causes scurvy?",
        "question_hi": "किस विटामिन की कमी से स्कर्वी रोग होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन C",
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
        "question_en": "Who was the first Indian to go to space?",
        "question_hi": "अंतरिक्ष में जाने वाले पहले भारतीय कौन थे?",
        "options_en": ["Kalpana Chawla", "Rakesh Sharma", "Sunita Williams", "Ravish Malhotra"],
        "options_hi": ["कल्पना चावला", "राकेश शर्मा", "सुनीता विलियम्स", "रविश मल्होत्रा"],
        "answer_en": "Rakesh Sharma",
        "answer_hi": "राकेश शर्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the value of √64?",
        "question_hi": "√64 का मान क्या है?",
        "options_en": ["6", "7", "8", "9"],
        "options_hi": ["6", "7", "8", "9"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which element has the chemical symbol 'Fe'?",
        "question_hi": "किस तत्व का रासायनिक प्रतीक 'Fe' है?",
        "options_en": ["Iron", "Fluorine", "Francium", "Fermium"],
        "options_hi": ["लोहा", "फ्लोरीन", "फ्रांसियम", "फर्मियम"],
        "answer_en": "Iron",
        "answer_hi": "लोहा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the SI unit of temperature?",
        "question_hi": "तापमान की SI इकाई क्या है?",
        "options_en": ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
        "options_hi": ["सेल्सियस", "फारेनहाइट", "केल्विन", "रैंकिन"],
        "answer_en": "Kelvin",
        "answer_hi": "केल्विन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which gland produces insulin?",
        "question_hi": "कौन सी ग्रंथि इंसुलिन उत्पन्न करती है?",
        "options_en": ["Thyroid", "Pancreas", "Pituitary", "Adrenal"],
        "options_hi": ["थायरॉइड", "अग्न्याशय", "पिट्यूटरी", "एड्रेनल"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the meaning of 'विद्वान'?",
        "question_hi": "'विद्वान' का अर्थ क्या है?",
        "options_en": ["Foolish", "Scholar", "Lazy", "Angry"],
        "options_hi": ["मूर्ख", "विद्वान", "आलसी", "गुस्सा"],
        "answer_en": "Scholar",
        "answer_hi": "विद्वान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Who wrote the Indian Constitution?",
        "question_hi": "भारतीय संविधान किसने लिखा?",
        "options_en": ["Jawaharlal Nehru", "B.R. Ambedkar", "Mahatma Gandhi", "Sardar Patel"],
        "options_hi": ["जवाहरलाल नेहरू", "बी.आर. अंबेडकर", "महात्मा गांधी", "सरदार पटेल"],
        "answer_en": "B.R. Ambedkar",
        "answer_hi": "बी.आर. अंबेडकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the perimeter of a square with side 6 cm?",
        "question_hi": "6 सेमी भुजा वाले वर्ग का परिमाप क्या है?",
        "options_en": ["12 cm", "18 cm", "24 cm", "36 cm"],
        "options_hi": ["12 सेमी", "18 सेमी", "24 सेमी", "36 सेमी"],
        "answer_en": "24 cm",
        "answer_hi": "24 सेमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which gas is used in balloons for flying?",
        "question_hi": "उड़ने वाले गुब्बारों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
        "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "हीलियम", "नाइट्रोजन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the acceleration due to gravity on Earth?",
        "question_hi": "पृथ्वी पर गुरुत्वाकर्षण के कारण त्वरण क्या है?",
        "options_en": ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "11 m/s²"],
        "options_hi": ["9.8 मी/से²", "10 मी/से²", "8.9 मी/से²", "11 मी/से²"],
        "answer_en": "9.8 m/s²",
        "answer_hi": "9.8 मी/से²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which cell organelle is called 'Suicide Bag'?",
        "question_hi": "किस कोशिका अंग को 'आत्मघाती थैली' कहा जाता है?",
        "options_en": ["Lysosome", "Mitochondria", "Nucleus", "Ribosome"],
        "options_hi": ["लाइसोसोम", "माइटोकॉन्ड्रिया", "केंद्रक", "राइबोसोम"],
        "answer_en": "Lysosome",
        "answer_hi": "लाइसोसोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the comparative degree of 'Good'?",
        "question_hi": "'Good' की comparative degree क्या है?",
        "options_en": ["Good", "Better", "Best", "Well"],
        "options_hi": ["गुड", "बेटर", "बेस्ट", "वेल"],
        "answer_en": "Better",
        "answer_hi": "बेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Where is the Charminar located?",
        "question_hi": "चारमीनार कहाँ स्थित है?",
        "options_en": ["Delhi", "Hyderabad", "Bangalore", "Chennai"],
        "options_hi": ["दिल्ली", "हैदराबाद", "बैंगलोर", "चेन्नई"],
        "answer_en": "Hyderabad",
        "answer_hi": "हैदराबाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the value of 4! ÷ 2!?",
        "question_hi": "4! ÷ 2! का मान क्या है?",
        "options_en": ["6", "12", "24", "48"],
        "options_hi": ["6", "12", "24", "48"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which acid is present in gastric juice?",
        "question_hi": "गैस्ट्रिक जूस में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Acetic acid"],
        "options_hi": ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"],
        "answer_en": "Hydrochloric acid",
        "answer_hi": "हाइड्रोक्लोरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is Ohm's law?",
        "question_hi": "ओम का नियम क्या है?",
        "options_en": ["V = IR", "I = V/R", "R = V/I", "All of these"],
        "options_hi": ["V = IR", "I = V/R", "R = V/I", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which blood group is called universal recipient?",
        "question_hi": "किस रक्त समूह को सार्वत्रिक प्राप्तकर्ता कहा जाता है?",
        "options_en": ["A", "B", "AB", "O"],
        "options_hi": ["A", "B", "AB", "O"],
        "answer_en": "AB",
        "answer_hi": "AB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the past participle of 'write'?",
        "question_hi": "'write' का past participle क्या है?",
        "options_en": ["writed", "wrote", "written", "writing"],
        "options_hi": ["राइटेड", "रोट", "रिटन", "राइटिंग"],
        "answer_en": "written",
        "answer_hi": "रिटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Who was the last Viceroy of India?",
        "question_hi": "भारत के अंतिम वायसराय कौन थे?",
        "options_en": ["Lord Mountbatten", "Lord Curzon", "Lord Dalhousie", "Lord Canning"],
        "options_hi": ["लॉर्ड माउंटबेटन", "लॉर्ड कर्जन", "लॉर्ड डलहौजी", "लॉर्ड कैनिंग"],
        "answer_en": "Lord Mountbatten",
        "answer_hi": "लॉर्ड माउंटबेटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the HCF of 24 and 36?",
        "question_hi": "24 और 36 का म.स.प. क्या है?",
        "options_en": ["6", "8", "12", "18"],
        "options_hi": ["6", "8", "12", "18"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which is the hardest natural substance?",
        "question_hi": "सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
        "options_en": ["Iron", "Diamond", "Gold", "Platinum"],
        "options_hi": ["लोहा", "हीरा", "सोना", "प्लैटिनम"],
        "answer_en": "Diamond",
        "answer_hi": "हीरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the unit of power?",
        "question_hi": "शक्ति की इकाई क्या है?",
        "options_en": ["Joule", "Newton", "Watt", "Pascal"],
        "options_hi": ["जूल", "न्यूटन", "वाट", "पास्कल"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which part of plant absorbs water?",
        "question_hi": "पौधे का कौन सा भाग पानी अवशोषित करता है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
        "answer_en": "Root",
        "answer_hi": "जड़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the synonym of 'Happy'?",
        "question_hi": "'Happy' का समानार्थी शब्द क्या है?",
        "options_en": ["Sad", "Joyful", "Angry", "Tired"],
        "options_hi": ["दुखी", "खुश", "गुस्सा", "थका हुआ"],
        "answer_en": "Joyful",
        "answer_hi": "खुश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Where is the Konark Sun Temple located?",
        "question_hi": "कोणार्क सूर्य मंदिर कहाँ स्थित है?",
        "options_en": ["Odisha", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
        "options_hi": ["ओडिशा", "तमिलनाडु", "कर्नाटक", "आंध्र प्रदेश"],
        "answer_en": "Odisha",
        "answer_hi": "ओडिशा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the value of 10² - 8²?",
        "question_hi": "10² - 8² का मान क्या है?",
        "options_en": ["4", "36", "64", "100"],
        "options_hi": ["4", "36", "64", "100"],
        "answer_en": "36",
        "answer_hi": "36",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which gas is used in advertising signs?",
        "question_hi": "विज्ञापन साइनों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Nitrogen", "Neon", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "नियॉन", "हाइड्रोजन"],
        "answer_en": "Neon",
        "answer_hi": "नियॉन",
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















////////////////////////////////////////////////////////////////////////////////////////////all file and folder me code add karna hai 


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