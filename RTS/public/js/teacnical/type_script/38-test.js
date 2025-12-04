const questions = [
    // Biology (1-15)
    {
        "num": 1,
        "question_en": "Which part of the cell is responsible for protein synthesis?",
        "question_hi": "कोशिका का कौन सा भाग प्रोटीन संश्लेषण के लिए जिम्मेदार है?",
        "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Ribosome",
        "answer_hi": "राइबोसोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the process by which plants release water vapor called?",
        "question_hi": "पौधों द्वारा जल वाष्प छोड़ने की प्रक्रिया को क्या कहा जाता है?",
        "options_en": ["Photosynthesis", "Transpiration", "Respiration", "Evaporation"],
        "options_hi": ["प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "श्वसन", "वाष्पीकरण"],
        "answer_en": "Transpiration",
        "answer_hi": "वाष्पोत्सर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
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
        "num": 4,
        "question_en": "What is the scientific name of human beings?",
        "question_hi": "मनुष्यों का वैज्ञानिक नाम क्या है?",
        "options_en": ["Homo sapiens", "Homo erectus", "Homo habilis", "Homo neanderthalensis"],
        "options_hi": ["होमो सेपियन्स", "होमो इरेक्टस", "होमो हैबिलिस", "होमो निएंडरथलेंसिस"],
        "answer_en": "Homo sapiens",
        "answer_hi": "होमो सेपियन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which part of the flower produces pollen?",
        "question_hi": "फूल का कौन सा भाग पराग उत्पन्न करता है?",
        "options_en": ["Pistil", "Stamen", "Petals", "Sepals"],
        "options_hi": ["स्त्रीकेसर", "पुंकेसर", "पंखुड़ियाँ", "बाह्यदल"],
        "answer_en": "Stamen",
        "answer_hi": "पुंकेसर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the study of insects called?",
        "question_hi": "कीटों के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Entomology", "Ornithology", "Herpetology", "Ichthyology"],
        "options_hi": ["कीटविज्ञान", "पक्षीविज्ञान", "सरीसृपविज्ञान", "मत्स्यविज्ञान"],
        "answer_en": "Entomology",
        "answer_hi": "कीटविज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which organ in the human body produces bile?",
        "question_hi": "मानव शरीर में कौन सा अंग पित्त उत्पन्न करता है?",
        "options_en": ["Liver", "Pancreas", "Gallbladder", "Stomach"],
        "options_hi": ["यकृत", "अग्न्याशय", "पित्ताशय", "आमाशय"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the process of conversion of light energy to chemical energy in plants?",
        "question_hi": "पौधों में प्रकाश ऊर्जा के रासायनिक ऊर्जा में परिवर्तन की प्रक्रिया क्या है?",
        "options_en": ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
        "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "किण्वन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which blood cells are responsible for immune response?",
        "question_hi": "कौन सी रक्त कोशिकाएं प्रतिरक्षा प्रतिक्रिया के लिए जिम्मेदार हैं?",
        "options_en": ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"],
        "options_hi": ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
        "answer_en": "White Blood Cells",
        "answer_hi": "श्वेत रक्त कोशिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the largest gland in the human body?",
        "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?",
        "options_en": ["Pancreas", "Liver", "Thyroid", "Pituitary"],
        "options_hi": ["अग्न्याशय", "यकृत", "थायरॉयड", "पिट्यूटरी"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },

    // Mathematics (11-25)
    {
        "num": 11,
        "question_en": "What is the value of cos(60°)?",
        "question_hi": "cos(60°) का मान क्या है?",
        "options_en": ["1/2", "√3/2", "1", "0"],
        "options_hi": ["1/2", "√3/2", "1", "0"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the formula for the area of a circle?",
        "question_hi": "वृत्त के क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["πr²", "2πr", "πd", "2πr²"],
        "options_hi": ["πr²", "2πr", "πd", "2πr²"],
        "answer_en": "πr²",
        "answer_hi": "πr²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the value of (a + b)(a - b)?",
        "question_hi": "(a + b)(a - b) का मान क्या है?",
        "options_en": ["a² - b²", "a² + b²", "a² + 2ab + b²", "a² - 2ab + b²"],
        "options_hi": ["a² - b²", "a² + b²", "a² + 2ab + b²", "a² - 2ab + b²"],
        "answer_en": "a² - b²",
        "answer_hi": "a² - b²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the probability of getting a head when a coin is tossed?",
        "question_hi": "सिक्का उछालने पर हेड आने की प्रायिकता क्या है?",
        "options_en": ["1/4", "1/2", "3/4", "1"],
        "options_hi": ["1/4", "1/2", "3/4", "1"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the value of √256?",
        "question_hi": "√256 का मान क्या है?",
        "options_en": ["16", "18", "20", "24"],
        "options_hi": ["16", "18", "20", "24"],
        "answer_en": "16",
        "answer_hi": "16",
        "attempted": false,
        "selected": ""
    },

    // Physics (26-40)
    {
        "num": 16,
        "question_en": "What is the SI unit of force?",
        "question_hi": "बल की SI इकाई क्या है?",
        "options_en": ["Joule", "Newton", "Watt", "Pascal"],
        "options_hi": ["जूल", "न्यूटन", "वाट", "पास्कल"],
        "answer_en": "Newton",
        "answer_hi": "न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which law states that every action has an equal and opposite reaction?",
        "question_hi": "कौन सा नियम कहता है कि प्रत्येक क्रिया की समान और विपरीत प्रतिक्रिया होती है?",
        "options_en": ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
        "options_hi": ["न्यूटन का पहला नियम", "न्यूटन का दूसरा नियम", "न्यूटन का तीसरा नियम", "गुरुत्वाकर्षण का नियम"],
        "answer_en": "Newton's Third Law",
        "answer_hi": "न्यूटन का तीसरा नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the unit of electric current?",
        "question_hi": "विद्युत धारा की इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What type of mirror is used in vehicles as side mirrors?",
        "question_hi": "वाहनों में साइड मिरर के रूप में किस प्रकार के दर्पण का उपयोग किया जाता है?",
        "options_en": ["Plane Mirror", "Concave Mirror", "Convex Mirror", "Spherical Mirror"],
        "options_hi": ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "गोलीय दर्पण"],
        "answer_en": "Convex Mirror",
        "answer_hi": "उत्तल दर्पण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the speed of light in vacuum?",
        "question_hi": "निर्वात में प्रकाश की गति क्या है?",
        "options_en": ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁵ m/s", "3 × 10¹⁰ m/s"],
        "options_hi": ["3 × 10⁸ मी/से", "3 × 10⁶ मी/से", "3 × 10⁵ मी/से", "3 × 10¹⁰ मी/से"],
        "answer_en": "3 × 10⁸ m/s",
        "answer_hi": "3 × 10⁸ मी/से",
        "attempted": false,
        "selected": ""
    },

    // Chemistry (41-55)
    {
        "num": 21,
        "question_en": "What is the pH value of pure water?",
        "question_hi": "शुद्ध जल का pH मान क्या है?",
        "options_en": ["5", "6", "7", "8"],
        "options_hi": ["5", "6", "7", "8"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
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
        "num": 23,
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
        "num": 24,
        "question_en": "Which gas is known as laughing gas?",
        "question_hi": "किस गैस को हंसाने वाली गैस के रूप में जाना जाता है?",
        "options_en": ["Nitrogen", "Oxygen", "Nitrous Oxide", "Carbon Dioxide"],
        "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "नाइट्रस ऑक्साइड", "कार्बन डाइऑक्साइड"],
        "answer_en": "Nitrous Oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the common name of sodium bicarbonate?",
        "question_hi": "सोडियम बाइकार्बोनेट का सामान्य नाम क्या है?",
        "options_en": ["Baking Soda", "Washing Soda", "Baking Powder", "Caustic Soda"],
        "options_hi": ["बेकिंग सोडा", "धोने का सोडा", "बेकिंग पाउडर", "कास्टिक सोडा"],
        "answer_en": "Baking Soda",
        "answer_hi": "बेकिंग सोडा",
        "attempted": false,
        "selected": ""
    },

    // English Language (56-65)
    {
        "num": 26,
        "question_en": "What is the synonym of 'Happy'?",
        "question_hi": "'Happy' का समानार्थी शब्द क्या है?",
        "options_en": ["Sad", "Joyful", "Angry", "Tired"],
        "options_hi": ["दुखी", "आनंदित", "क्रोधित", "थका हुआ"],
        "answer_en": "Joyful",
        "answer_hi": "आनंदित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which of these is a verb?",
        "question_hi": "इनमें से कौन सा क्रिया है?",
        "options_en": ["Beautiful", "Run", "Quickly", "Happiness"],
        "options_hi": ["सुंदर", "दौड़ना", "तेजी से", "खुशी"],
        "answer_en": "Run",
        "answer_hi": "दौड़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the past tense of 'Eat'?",
        "question_hi": "'Eat' का भूतकाल क्या है?",
        "options_en": ["Eated", "Ate", "Eaten", "Eating"],
        "options_hi": ["ईटेड", "एट", "ईटन", "ईटिंग"],
        "answer_en": "Ate",
        "answer_hi": "एट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which word is a noun?",
        "question_hi": "कौन सा शब्द संज्ञा है?",
        "options_en": ["Run", "Beautiful", "School", "Quickly"],
        "options_hi": ["दौड़ना", "सुंदर", "स्कूल", "तेजी से"],
        "answer_en": "School",
        "answer_hi": "स्कूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the plural of 'Book'?",
        "question_hi": "'Book' का बहुवचन क्या है?",
        "options_en": ["Bookes", "Books", "Book", "Bookies"],
        "options_hi": ["बुक्स", "बुक्स", "बुक", "बुकीज़"],
        "answer_en": "Books",
        "answer_hi": "बुक्स",
        "attempted": false,
        "selected": ""
    },

    // Hindi Language (66-75)
    {
        "num": 31,
        "question_en": "What is the meaning of 'School' in Hindi?",
        "question_hi": "'School' का हिंदी में क्या अर्थ है?",
        "options_en": ["विद्यालय", "शिक्षक", "छात्र", "किताब"],
        "options_hi": ["विद्यालय", "शिक्षक", "छात्र", "किताब"],
        "answer_en": "विद्यालय",
        "answer_hi": "विद्यालय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which of these is a 'Sangya' (Noun) in Hindi?",
        "question_hi": "इनमें से कौन सा हिंदी में 'संज्ञा' है?",
        "options_en": ["चलना", "सुंदर", "लड़का", "तेज़"],
        "options_hi": ["चलना", "सुंदर", "लड़का", "तेज़"],
        "answer_en": "लड़का",
        "answer_hi": "लड़का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the feminine gender of 'Bhai' in Hindi?",
        "question_hi": "हिंदी में 'भाई' का स्त्रीलिंग क्या है?",
        "options_en": ["बहन", "भाई", "भैया", "भाभी"],
        "options_hi": ["बहन", "भाई", "भैया", "भाभी"],
        "answer_en": "बहन",
        "answer_hi": "बहन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which of these is a 'Kriya' (Verb) in Hindi?",
        "question_hi": "इनमें से कौन सा हिंदी में 'क्रिया' है?",
        "options_en": ["किताब", "लंबा", "पढ़ना", "सुंदर"],
        "options_hi": ["किताब", "लंबा", "पढ़ना", "सुंदर"],
        "answer_en": "पढ़ना",
        "answer_hi": "पढ़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the plural of 'Ladki' in Hindi?",
        "question_hi": "हिंदी में 'लड़की' का बहुवचन क्या है?",
        "options_en": ["लड़कियाँ", "लड़की", "लड़के", "लड़कों"],
        "options_hi": ["लड़कियाँ", "लड़की", "लड़के", "लड़कों"],
        "answer_en": "लड़कियाँ",
        "answer_hi": "लड़कियाँ",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge (76-100)
    {
        "num": 36,
        "question_en": "Which country is known as the Land of the Rising Sun?",
        "question_hi": "किस देश को उगते सूरज की भूमि के रूप में जाना जाता है?",
        "options_en": ["China", "Japan", "India", "Thailand"],
        "options_hi": ["चीन", "जापान", "भारत", "थाईलैंड"],
        "answer_en": "Japan",
        "answer_hi": "जापान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Who is the author of 'Harry Potter' series?",
        "question_hi": "'हैरी पॉटर' श्रृंखला के लेखक कौन हैं?",
        "options_en": ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Stephen King"],
        "options_hi": ["जे.आर.आर. टॉल्किन", "जे.के. रोलिंग", "जॉर्ज आर.आर. मार्टिन", "स्टीफन किंग"],
        "answer_en": "J.K. Rowling",
        "answer_hi": "जे.के. रोलिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which is the largest ocean in the world?",
        "question_hi": "दुनिया का सबसे बड़ा महासागर कौन सा है?",
        "options_en": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
        "answer_en": "Pacific Ocean",
        "answer_hi": "प्रशांत महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Who painted the Mona Lisa?",
        "question_hi": "मोना लिसा की पेंटिंग किसने बनाई?",
        "options_en": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        "options_hi": ["विंसेंट वैन गॉग", "पाब्लो पिकासो", "लियोनार्डो दा विंची", "माइकलएंजेलो"],
        "answer_en": "Leonardo da Vinci",
        "answer_hi": "लियोनार्डो दा विंची",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which is the longest river in the world?",
        "question_hi": "दुनिया की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Amazon", "Nile", "Yangtze", "Mississippi"],
        "options_hi": ["अमेज़न", "नील", "यांग्त्ज़ी", "मिसिसिपी"],
        "answer_en": "Nile",
        "answer_hi": "नील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the currency of Japan?",
        "question_hi": "जापान की मुद्रा क्या है?",
        "options_en": ["Yuan", "Won", "Yen", "Ringgit"],
        "options_hi": ["युआन", "वॉन", "येन", "रिंगित"],
        "answer_en": "Yen",
        "answer_hi": "येन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which planet is known as the Red Planet?",
        "question_hi": "किस ग्रह को लाल ग्रह के रूप में जाना जाता है?",
        "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
        "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Who invented the Telephone?",
        "question_hi": "टेलीफोन का आविष्कार किसने किया?",
        "options_en": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
        "options_hi": ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "निकोला टेस्ला", "गुग्लिल्मो मार्कोनी"],
        "answer_en": "Alexander Graham Bell",
        "answer_hi": "अलेक्जेंडर ग्राहम बेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which is the smallest country in the world?",
        "question_hi": "दुनिया का सबसे छोटा देश कौन सा है?",
        "options_en": ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        "options_hi": ["मोनाको", "वेटिकन सिटी", "सैन मैरिनो", "लिकटेंस्टीन"],
        "answer_en": "Vatican City",
        "answer_hi": "वेटिकन सिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Who wrote the Indian National Anthem?",
        "question_hi": "भारत के राष्ट्रगान के लेखक कौन हैं?",
        "options_en": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Mahatma Gandhi"],
        "options_hi": ["रबींद्रनाथ टैगोर", "बंकिम चंद्र चटर्जी", "सरोजिनी नायडू", "महात्मा गांधी"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
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
        "num": 47,
        "question_en": "Which is the longest bone in human body?",
        "question_hi": "मानव शरीर की सबसे लंबी हड्डी कौन सी है?",
        "options_en": ["Humerus", "Femur", "Tibia", "Radius"],
        "options_hi": ["ह्यूमरस", "फीमर", "टिबिया", "रेडियस"],
        "answer_en": "Femur",
        "answer_hi": "फीमर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the value of 7 × 8 + 4?",
        "question_hi": "7 × 8 + 4 का मान क्या है?",
        "options_en": ["60", "84", "56", "52"],
        "options_hi": ["60", "84", "56", "52"],
        "answer_en": "60",
        "answer_hi": "60",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which gas do plants release during photosynthesis?",
        "question_hi": "पौधे प्रकाश संश्लेषण के दौरान कौन सी गैस छोड़ते हैं?",
        "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the capital of Australia?",
        "question_hi": "ऑस्ट्रेलिया की राजधानी क्या है?",
        "options_en": ["Sydney", "Melbourne", "Canberra", "Perth"],
        "options_hi": ["सिडनी", "मेलबोर्न", "कैनबरा", "पर्थ"],
        "answer_en": "Canberra",
        "answer_hi": "कैनबरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which element is essential for thyroid function?",
        "question_hi": "थायरॉयड कार्य के लिए कौन सा तत्व आवश्यक है?",
        "options_en": ["Iron", "Iodine", "Calcium", "Potassium"],
        "options_hi": ["आयरन", "आयोडीन", "कैल्शियम", "पोटैशियम"],
        "answer_en": "Iodine",
        "answer_hi": "आयोडीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the formula for density?",
        "question_hi": "घनत्व का सूत्र क्या है?",
        "options_en": ["Mass/Volume", "Volume/Mass", "Mass × Volume", "Weight/Volume"],
        "options_hi": ["द्रव्यमान/आयतन", "आयतन/द्रव्यमान", "द्रव्यमान × आयतन", "वजन/आयतन"],
        "answer_en": "Mass/Volume",
        "answer_hi": "द्रव्यमान/आयतन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Who discovered Penicillin?",
        "question_hi": "पेनिसिलिन की खोज किसने की?",
        "options_en": ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Marie Curie"],
        "options_hi": ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "रॉबर्ट कोच", "मैरी क्यूरी"],
        "answer_en": "Alexander Fleming",
        "answer_hi": "अलेक्जेंडर फ्लेमिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the square of 25?",
        "question_hi": "25 का वर्ग क्या है?",
        "options_en": ["525", "625", "725", "825"],
        "options_hi": ["525", "625", "725", "825"],
        "answer_en": "625",
        "answer_hi": "625",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
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
        "num": 56,
        "question_en": "What is the chemical formula of Water?",
        "question_hi": "पानी का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂O", "HO₂", "H₂O₂", "OH"],
        "options_hi": ["H₂O", "HO₂", "H₂O₂", "OH"],
        "answer_en": "H₂O",
        "answer_hi": "H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
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
        "num": 58,
        "question_en": "What is the value of 15% of 200?",
        "question_hi": "200 का 15% क्या है?",
        "options_en": ["15", "30", "45", "60"],
        "options_hi": ["15", "30", "45", "60"],
        "answer_en": "30",
        "answer_hi": "30",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which blood cells help in fighting infections?",
        "question_hi": "कौन सी रक्त कोशिकाएं संक्रमण से लड़ने में मदद करती हैं?",
        "options_en": ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"],
        "options_hi": ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
        "answer_en": "White Blood Cells",
        "answer_hi": "श्वेत रक्त कोशिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
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
        "num": 61,
        "question_en": "Which gas is most abundant in Earth's atmosphere?",
        "question_hi": "पृथ्वी के वायुमंडल में कौन सी गैस सबसे अधिक मात्रा में है?",
        "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
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
        "num": 63,
        "question_en": "Which is the largest planet in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
        "options_en": ["Earth", "Saturn", "Jupiter", "Neptune"],
        "options_hi": ["पृथ्वी", "शनि", "बृहस्पति", "वरुण"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the value of 3³?",
        "question_hi": "3³ का मान क्या है?",
        "options_en": ["9", "27", "81", "6"],
        "options_hi": ["9", "27", "81", "6"],
        "answer_en": "27",
        "answer_hi": "27",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which part of the eye controls the amount of light entering?",
        "question_hi": "आंख का कौन सा भाग प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है?",
        "options_en": ["Cornea", "Retina", "Iris", "Lens"],
        "options_hi": ["कॉर्निया", "रेटिना", "आइरिस", "लेंस"],
        "answer_en": "Iris",
        "answer_hi": "आइरिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the chemical formula of Carbon Dioxide?",
        "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CO", "CO₂", "C₂O", "C₂O₂"],
        "options_hi": ["CO", "CO₂", "C₂O", "C₂O₂"],
        "answer_en": "CO₂",
        "answer_hi": "CO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which mountain is the highest in the world?",
        "question_hi": "दुनिया की सबसे ऊंची पर्वत चोटी कौन सी है?",
        "options_en": ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
        "options_hi": ["K2", "माउंट एवरेस्ट", "कंचनजंगा", "मकालु"],
        "answer_en": "Mount Everest",
        "answer_hi": "माउंट एवरेस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the value of 100 ÷ 4 × 2?",
        "question_hi": "100 ÷ 4 × 2 का मान क्या है?",
        "options_en": ["25", "50", "100", "200"],
        "options_hi": ["25", "50", "100", "200"],
        "answer_en": "50",
        "answer_hi": "50",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which vitamin deficiency causes Rickets?",
        "question_hi": "किस विटामिन की कमी से रिकेट्स होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
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
        "num": 71,
        "question_en": "Which is the national bird of India?",
        "question_hi": "भारत का राष्ट्रीय पक्षी कौन सा है?",
        "options_en": ["Sparrow", "Peacock", "Parrot", "Crow"],
        "options_hi": ["गौरैया", "मोर", "तोता", "कौआ"],
        "answer_en": "Peacock",
        "answer_hi": "मोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the value of 12 × 11?",
        "question_hi": "12 × 11 का मान क्या है?",
        "options_en": ["121", "132", "144", "156"],
        "options_hi": ["121", "132", "144", "156"],
        "answer_en": "132",
        "answer_hi": "132",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which gas is used by plants during respiration?",
        "question_hi": "पौधे श्वसन के दौरान किस गैस का उपयोग करते हैं?",
        "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the chemical formula of Glucose?",
        "question_hi": "ग्लूकोज का रासायनिक सूत्र क्या है?",
        "options_en": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
        "options_hi": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
        "answer_en": "C₆H₁₂O₆",
        "answer_hi": "C₆H₁₂O₆",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
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
        "num": 76,
        "question_en": "What is the value of 8² - 6²?",
        "question_hi": "8² - 6² का मान क्या है?",
        "options_en": ["4", "14", "28", "100"],
        "options_hi": ["4", "14", "28", "100"],
        "answer_en": "28",
        "answer_hi": "28",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which part of the plant conducts photosynthesis?",
        "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
        "options_en": ["Roots", "Stem", "Leaves", "Flowers"],
        "options_hi": ["जड़ें", "तना", "पत्तियां", "फूल"],
        "answer_en": "Leaves",
        "answer_hi": "पत्तियां",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the chemical symbol for Potassium?",
        "question_hi": "पोटैशियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["P", "Po", "Pt", "K"],
        "options_hi": ["P", "Po", "Pt", "K"],
        "answer_en": "K",
        "answer_hi": "K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which is the largest mammal in the world?",
        "question_hi": "दुनिया का सबसे बड़ा स्तनपायी कौन सा है?",
        "options_en": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        "options_hi": ["हाथी", "ब्लू व्हेल", "जिराफ", "दरियाई घोड़ा"],
        "answer_en": "Blue Whale",
        "answer_hi": "ब्लू व्हेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the value of ¾ of 100?",
        "question_hi": "100 का ¾ क्या है?",
        "options_en": ["25", "50", "75", "100"],
        "options_hi": ["25", "50", "75", "100"],
        "answer_en": "75",
        "answer_hi": "75",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which gas is produced during fermentation?",
        "question_hi": "किण्वन के दौरान कौन सी गैस उत्पन्न होती है?",
        "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon Dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the chemical formula of Ammonia?",
        "question_hi": "अमोनिया का रासायनिक सूत्र क्या है?",
        "options_en": ["NH₃", "NH₄", "N₂H", "HNO₃"],
        "options_hi": ["NH₃", "NH₄", "N₂H", "HNO₃"],
        "answer_en": "NH₃",
        "answer_hi": "NH₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which is the hardest natural substance on Earth?",
        "question_hi": "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
        "options_en": ["Gold", "Iron", "Diamond", "Platinum"],
        "options_hi": ["सोना", "लोहा", "हीरा", "प्लैटिनम"],
        "answer_en": "Diamond",
        "answer_hi": "हीरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
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
        "num": 85,
        "question_en": "Which instrument is used to measure blood pressure?",
        "question_hi": "रक्तचाप मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Thermometer", "Stethoscope", "Sphygmomanometer", "Hygrometer"],
        "options_hi": ["थर्मामीटर", "स्टेथोस्कोप", "स्फिग्मोमैनोमीटर", "हाइग्रोमीटर"],
        "answer_en": "Sphygmomanometer",
        "answer_hi": "स्फिग्मोमैनोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the value of 10² + 8²?",
        "question_hi": "10² + 8² का मान क्या है?",
        "options_en": ["164", "144", "100", "180"],
        "options_hi": ["164", "144", "100", "180"],
        "answer_en": "164",
        "answer_hi": "164",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which part of the cell contains chromosomes?",
        "question_hi": "कोशिका का कौन सा भाग गुणसूत्र रखता है?",
        "options_en": ["Cytoplasm", "Nucleus", "Mitochondria", "Ribosome"],
        "options_hi": ["कोशिका द्रव्य", "केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the chemical symbol for Calcium?",
        "question_hi": "कैल्शियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ca", "Cm", "Cl", "C"],
        "options_hi": ["Ca", "Cm", "Cl", "C"],
        "answer_en": "Ca",
        "answer_hi": "Ca",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which is the largest desert in the world?",
        "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options_en": ["Gobi Desert", "Sahara Desert", "Arabian Desert", "Kalahari Desert"],
        "options_hi": ["गोबी रेगिस्तान", "सहारा रेगिस्तान", "अरब रेगिस्तान", "कालाहारी रेगिस्तान"],
        "answer_en": "Sahara Desert",
        "answer_hi": "सहारा रेगिस्तान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the value of 2/5 of 50?",
        "question_hi": "50 का 2/5 क्या है?",
        "options_en": ["10", "20", "30", "40"],
        "options_hi": ["10", "20", "30", "40"],
        "answer_en": "20",
        "answer_hi": "20",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which gas is used in fluorescent tubes?",
        "question_hi": "फ्लोरोसेंट ट्यूबों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Neon", "Argon", "Helium", "Xenon"],
        "options_hi": ["नियॉन", "आर्गन", "हीलियम", "जेनॉन"],
        "answer_en": "Argon",
        "answer_hi": "आर्गन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the chemical formula of Sulfur Dioxide?",
        "question_hi": "सल्फर डाइऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["SO₂", "SO₃", "H₂SO₄", "SO₄"],
        "options_hi": ["SO₂", "SO₃", "H₂SO₄", "SO₄"],
        "answer_en": "SO₂",
        "answer_hi": "SO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
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
        "num": 94,
        "question_en": "What is the value of √196?",
        "question_hi": "√196 का मान क्या है?",
        "options_en": ["12", "14", "16", "18"],
        "options_hi": ["12", "14", "16", "18"],
        "answer_en": "14",
        "answer_hi": "14",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which vitamin is also known as Ascorbic Acid?",
        "question_hi": "किस विटामिन को एस्कॉर्बिक एसिड के रूप में भी जाना जाता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the chemical formula of Nitrous Oxide?",
        "question_hi": "नाइट्रस ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["N₂O", "NO₂", "NO", "N₂O₃"],
        "options_hi": ["N₂O", "NO₂", "NO", "N₂O₃"],
        "answer_en": "N₂O",
        "answer_hi": "N₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which is the smallest continent?",
        "question_hi": "सबसे छोटा महाद्वीप कौन सा है?",
        "options_en": ["Australia", "Europe", "Antarctica", "South America"],
        "options_hi": ["ऑस्ट्रेलिया", "यूरोप", "अंटार्कटिका", "दक्षिण अमेरिका"],
        "answer_en": "Australia",
        "answer_hi": "ऑस्ट्रेलिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the value of 7!?",
        "question_hi": "7! का मान क्या है?",
        "options_en": ["5040", "720", "120", "240"],
        "options_hi": ["5040", "720", "120", "240"],
        "answer_en": "5040",
        "answer_hi": "5040",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which gas is used in advertising signs?",
        "question_hi": "विज्ञापन साइनों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Neon", "Helium", "Argon", "Xenon"],
        "options_hi": ["नियॉन", "हीलियम", "आर्गन", "जेनॉन"],
        "answer_en": "Neon",
        "answer_hi": "नियॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the chemical formula of Ozone?",
        "question_hi": "ओजोन का रासायनिक सूत्र क्या है?",
        "options_en": ["O₂", "O₃", "O₄", "HO"],
        "options_hi": ["O₂", "O₃", "O₄", "HO"],
        "answer_en": "O₃",
        "answer_hi": "O₃",
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