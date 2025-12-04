const questions = [
    // Biology (1-15)
    {
        "num": 1,
        "question_en": "Which organelle is known as the suicide bag of the cell?",
        "question_hi": "कोशिका के आत्मघाती थैले के रूप में किस कोशिकांग को जाना जाता है?",
        "options_en": ["Mitochondria", "Lysosome", "Ribosome", "Golgi apparatus"],
        "options_hi": ["माइटोकॉन्ड्रिया", "लाइसोसोम", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Lysosome",
        "answer_hi": "लाइसोसोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the process of conversion of glucose into energy in cells called?",
        "question_hi": "कोशिकाओं में ग्लूकोज के ऊर्जा में परिवर्तन की प्रक्रिया को क्या कहा जाता है?",
        "options_en": ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"],
        "options_hi": ["प्रकाश संश्लेषण", "श्वसन", "वाष्पोत्सर्जन", "किण्वन"],
        "answer_en": "Respiration",
        "answer_hi": "श्वसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which part of the brain controls voluntary actions?",
        "question_hi": "मस्तिष्क का कौन सा भाग ऐच्छिक क्रियाओं को नियंत्रित करता है?",
        "options_en": ["Cerebellum", "Cerebrum", "Medulla", "Hypothalamus"],
        "options_hi": ["सेरेबेलम", "सेरेब्रम", "मेडुला", "हाइपोथैलेमस"],
        "answer_en": "Cerebrum",
        "answer_hi": "सेरेब्रम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the name of the pigment that gives plants their green color?",
        "question_hi": "उस वर्णक का क्या नाम है जो पौधों को उनका हरा रंग देता है?",
        "options_en": ["Chlorophyll", "Carotene", "Xanthophyll", "Anthocyanin"],
        "options_hi": ["क्लोरोफिल", "कैरोटीन", "जैन्थोफिल", "एंथोसायनिन"],
        "answer_en": "Chlorophyll",
        "answer_hi": "क्लोरोफिल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which type of blood vessels have valves to prevent backflow of blood?",
        "question_hi": "किस प्रकार की रक्त वाहिकाओं में रक्त के बैकफ्लो को रोकने के लिए वाल्व होते हैं?",
        "options_en": ["Arteries", "Veins", "Capillaries", "All of the above"],
        "options_hi": ["धमनियाँ", "शिराएँ", "केशिकाएँ", "उपरोक्त सभी"],
        "answer_en": "Veins",
        "answer_hi": "शिराएँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the study of the structure of organisms called?",
        "question_hi": "जीवों की संरचना के अध्ययन को क्या कहा जाता है?",
        "options_en": ["Physiology", "Anatomy", "Ecology", "Genetics"],
        "options_hi": ["शरीर क्रिया विज्ञान", "शारीरिकी", "पारिस्थितिकी", "आनुवंशिकी"],
        "answer_en": "Anatomy",
        "answer_hi": "शारीरिकी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which plant hormone is responsible for fruit ripening?",
        "question_hi": "कौन सा पादप हार्मोन फल पकने के लिए जिम्मेदार है?",
        "options_en": ["Auxin", "Gibberellin", "Ethylene", "Cytokinin"],
        "options_hi": ["ऑक्सिन", "जिबरेलिन", "एथिलीन", "साइटोकाइनिन"],
        "answer_en": "Ethylene",
        "answer_hi": "एथिलीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the name of the process by which plants release water vapor?",
        "question_hi": "उस प्रक्रिया का क्या नाम है जिसके द्वारा पौधे जल वाष्प छोड़ते हैं?",
        "options_en": ["Evaporation", "Transpiration", "Condensation", "Precipitation"],
        "options_hi": ["वाष्पीकरण", "वाष्पोत्सर्जन", "संघनन", "वर्षा"],
        "answer_en": "Transpiration",
        "answer_hi": "वाष्पोत्सर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which part of the human eye controls the amount of light entering?",
        "question_hi": "मानव आंख का कौन सा भाग प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है?",
        "options_en": ["Cornea", "Retina", "Iris", "Lens"],
        "options_hi": ["कॉर्निया", "रेटिना", "आइरिस", "लेंस"],
        "answer_en": "Iris",
        "answer_hi": "आइरिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the name of the process by which plants make their own food?",
        "question_hi": "उस प्रक्रिया का क्या नाम है जिसके द्वारा पौधे अपना भोजन स्वयं बनाते हैं?",
        "options_en": ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
        "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "पाचन", "वाष्पोत्सर्जन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
    },

    // Mathematics (11-25)
    {
        "num": 11,
        "question_en": "What is the value of sin(30°)?",
        "question_hi": "sin(30°) का मान क्या है?",
        "options_en": ["1/2", "√3/2", "1", "0"],
        "options_hi": ["1/2", "√3/2", "1", "0"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the formula for the perimeter of a rectangle?",
        "question_hi": "आयत के परिमाप का सूत्र क्या है?",
        "options_en": ["2(l + b)", "l × b", "l² + b²", "4l"],
        "options_hi": ["2(l + b)", "l × b", "l² + b²", "4l"],
        "answer_en": "2(l + b)",
        "answer_hi": "2(l + b)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the value of (x + y)² - (x - y)²?",
        "question_hi": "(x + y)² - (x - y)² का मान क्या है?",
        "options_en": ["2xy", "4xy", "x² + y²", "x² - y²"],
        "options_hi": ["2xy", "4xy", "x² + y²", "x² - y²"],
        "answer_en": "4xy",
        "answer_hi": "4xy",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the probability of drawing a king from a deck of 52 cards?",
        "question_hi": "52 पत्तों की एक गड्डी से एक राजा निकालने की प्रायिकता क्या है?",
        "options_en": ["1/13", "1/52", "4/52", "1/4"],
        "options_hi": ["1/13", "1/52", "4/52", "1/4"],
        "answer_en": "1/13",
        "answer_hi": "1/13",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the value of 2⁵?",
        "question_hi": "2⁵ का मान क्या है?",
        "options_en": ["10", "16", "32", "64"],
        "options_hi": ["10", "16", "32", "64"],
        "answer_en": "32",
        "answer_hi": "32",
        "attempted": false,
        "selected": ""
    },

    // Physics (26-40)
    {
        "num": 16,
        "question_en": "What is the SI unit of work?",
        "question_hi": "कार्य की SI इकाई क्या है?",
        "options_en": ["Newton", "Joule", "Watt", "Pascal"],
        "options_hi": ["न्यूटन", "जूल", "वाट", "पास्कल"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which law states that the pressure of a gas is inversely proportional to its volume at constant temperature?",
        "question_hi": "कौन सा नियम कहता है कि नियत तापमान पर गैस का दबाव उसके आयतन के व्युत्क्रमानुपाती होता है?",
        "options_en": ["Charles' Law", "Boyle's Law", "Gay-Lussac's Law", "Avogadro's Law"],
        "options_hi": ["चार्ल्स का नियम", "बॉयल का नियम", "गे-लुसाक का नियम", "अवोगाद्रो का नियम"],
        "answer_en": "Boyle's Law",
        "answer_hi": "बॉयल का नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the unit of electric power?",
        "question_hi": "विद्युत शक्ति की इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Watt", "Ohm"],
        "options_hi": ["वोल्ट", "एम्पियर", "वाट", "ओम"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What type of lens is used to correct hypermetropia?",
        "question_hi": "हाइपरमेट्रोपिया को सही करने के लिए किस प्रकार के लेंस का उपयोग किया जाता है?",
        "options_en": ["Concave Lens", "Convex Lens", "Cylindrical Lens", "Bifocal Lens"],
        "options_hi": ["अवतल लेंस", "उत्तल लेंस", "बेलनाकार लेंस", "द्विफोकस लेंस"],
        "answer_en": "Convex Lens",
        "answer_hi": "उत्तल लेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the speed of sound in water?",
        "question_hi": "पानी में ध्वनि की गति क्या है?",
        "options_en": ["332 m/s", "343 m/s", "1480 m/s", "5000 m/s"],
        "options_hi": ["332 मी/से", "343 मी/से", "1480 मी/से", "5000 मी/से"],
        "answer_en": "1480 m/s",
        "answer_hi": "1480 मी/से",
        "attempted": false,
        "selected": ""
    },

    // Chemistry (41-55)
    {
        "num": 21,
        "question_en": "What is the pH value of a basic solution?",
        "question_hi": "एक क्षारीय विलयन का pH मान क्या होता है?",
        "options_en": ["Less than 7", "Equal to 7", "Greater than 7", "Equal to 0"],
        "options_hi": ["7 से कम", "7 के बराबर", "7 से अधिक", "0 के बराबर"],
        "answer_en": "Greater than 7",
        "answer_hi": "7 से अधिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which element has the chemical symbol 'Na'?",
        "question_hi": "किस तत्व का रासायनिक प्रतीक 'Na' है?",
        "options_en": ["Nitrogen", "Sodium", "Nickel", "Neon"],
        "options_hi": ["नाइट्रोजन", "सोडियम", "निकेल", "नियॉन"],
        "answer_en": "Sodium",
        "answer_hi": "सोडियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the chemical formula of propane?",
        "question_hi": "प्रोपेन का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "answer_en": "C₃H₈",
        "answer_hi": "C₃H₈",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which gas is used in the preparation of fertilizers?",
        "question_hi": "उर्वरकों के निर्माण में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"],
        "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the common name of calcium oxide?",
        "question_hi": "कैल्शियम ऑक्साइड का सामान्य नाम क्या है?",
        "options_en": ["Quicklime", "Slaked lime", "Limestone", "Gypsum"],
        "options_hi": ["बिना बुझा चूना", "बुझा चूना", "चूना पत्थर", "जिप्सम"],
        "answer_en": "Quicklime",
        "answer_hi": "बिना बुझा चूना",
        "attempted": false,
        "selected": ""
    },

    // English Language (56-65)
    {
        "num": 26,
        "question_en": "What is the antonym of 'Brave'?",
        "question_hi": "'Brave' का विलोम शब्द क्या है?",
        "options_en": ["Courageous", "Fearless", "Cowardly", "Bold"],
        "options_hi": ["साहसी", "निडर", "कायर", "बहादुर"],
        "answer_en": "Cowardly",
        "answer_hi": "कायर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which of these is an adjective?",
        "question_hi": "इनमें से कौन सा विशेषण है?",
        "options_en": ["Run", "Beautiful", "Quickly", "Happiness"],
        "options_hi": ["दौड़ना", "सुंदर", "तेजी से", "खुशी"],
        "answer_en": "Beautiful",
        "answer_hi": "सुंदर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the past tense of 'Write'?",
        "question_hi": "'Write' का भूतकाल क्या है?",
        "options_en": ["Writed", "Wrote", "Written", "Writing"],
        "options_hi": ["राइटेड", "रोट", "रिटन", "राइटिंग"],
        "answer_en": "Wrote",
        "answer_hi": "रोट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which word is an adverb?",
        "question_hi": "कौन सा शब्द क्रिया विशेषण है?",
        "options_en": ["Happiness", "Beautiful", "Run", "Slowly"],
        "options_hi": ["खुशी", "सुंदर", "दौड़ना", "धीरे-धीरे"],
        "answer_en": "Slowly",
        "answer_hi": "धीरे-धीरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the plural of 'Tooth'?",
        "question_hi": "'Tooth' का बहुवचन क्या है?",
        "options_en": ["Tooths", "Teeth", "Tooth", "Teeths"],
        "options_hi": ["टूथ्स", "टीथ", "टूथ", "टीथ्स"],
        "answer_en": "Teeth",
        "answer_hi": "टीथ",
        "attempted": false,
        "selected": ""
    },

    // Hindi Language (66-75)
    {
        "num": 31,
        "question_en": "What is the meaning of 'Teacher' in Hindi?",
        "question_hi": "'Teacher' का हिंदी में क्या अर्थ है?",
        "options_en": ["विद्यालय", "शिक्षक", "छात्र", "किताब"],
        "options_hi": ["विद्यालय", "शिक्षक", "छात्र", "किताब"],
        "answer_en": "शिक्षक",
        "answer_hi": "शिक्षक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which of these is a 'Sarvanaam' (Pronoun) in Hindi?",
        "question_hi": "इनमें से कौन सा हिंदी में 'सर्वनाम' है?",
        "options_en": ["चलना", "सुंदर", "वह", "तेज़"],
        "options_hi": ["चलना", "सुंदर", "वह", "तेज़"],
        "answer_en": "वह",
        "answer_hi": "वह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the masculine gender of 'Maa' in Hindi?",
        "question_hi": "हिंदी में 'माँ' का पुल्लिंग क्या है?",
        "options_en": ["पिता", "माँ", "बेटा", "बेटी"],
        "options_hi": ["पिता", "माँ", "बेटा", "बेटी"],
        "answer_en": "पिता",
        "answer_hi": "पिता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which of these is a 'Visheshan' (Adjective) in Hindi?",
        "question_hi": "इनमें से कौन सा हिंदी में 'विशेषण' है?",
        "options_en": ["किताब", "लंबा", "पढ़ना", "स्कूल"],
        "options_hi": ["किताब", "लंबा", "पढ़ना", "स्कूल"],
        "answer_en": "लंबा",
        "answer_hi": "लंबा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the plural of 'Gaay' in Hindi?",
        "question_hi": "हिंदी में 'गाय' का बहुवचन क्या है?",
        "options_en": ["गायें", "गाय", "बैल", "गायों"],
        "options_hi": ["गायें", "गाय", "बैल", "गायों"],
        "answer_en": "गायें",
        "answer_hi": "गायें",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge (76-100)
    {
        "num": 36,
        "question_en": "Which country is known as the Land of the White Elephant?",
        "question_hi": "किस देश को सफेद हाथी की भूमि के रूप में जाना जाता है?",
        "options_en": ["India", "Thailand", "China", "Myanmar"],
        "options_hi": ["भारत", "थाईलैंड", "चीन", "म्यांमार"],
        "answer_en": "Thailand",
        "answer_hi": "थाईलैंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Who wrote 'Pride and Prejudice'?",
        "question_hi": "'प्राइड एंड प्रेजुडिस' किसने लिखा?",
        "options_en": ["Charlotte Bronte", "Jane Austen", "Emily Bronte", "Charles Dickens"],
        "options_hi": ["चार्लोट ब्रोंटे", "जेन ऑस्टेन", "एमिली ब्रोंटे", "चार्ल्स डिकेंस"],
        "answer_en": "Jane Austen",
        "answer_hi": "जेन ऑस्टेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which is the saltiest ocean in the world?",
        "question_hi": "दुनिया का सबसे नमकीन महासागर कौन सा है?",
        "options_en": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
        "answer_en": "Atlantic Ocean",
        "answer_hi": "अटलांटिक महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Who painted 'The Starry Night'?",
        "question_hi": "'द स्टाररी नाइट' की पेंटिंग किसने बनाई?",
        "options_en": ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dali"],
        "options_hi": ["पाब्लो पिकासो", "विंसेंट वैन गॉग", "क्लॉड मोनेट", "साल्वाडोर डाली"],
        "answer_en": "Vincent van Gogh",
        "answer_hi": "विंसेंट वैन गॉग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which is the second longest river in the world?",
        "question_hi": "दुनिया की दूसरी सबसे लंबी नदी कौन सी है?",
        "options_en": ["Amazon", "Nile", "Yangtze", "Mississippi"],
        "options_hi": ["अमेज़न", "नील", "यांग्त्ज़ी", "मिसिसिपी"],
        "answer_en": "Amazon",
        "answer_hi": "अमेज़न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the currency of Russia?",
        "question_hi": "रूस की मुद्रा क्या है?",
        "options_en": ["Ruble", "Euro", "Dollar", "Yen"],
        "options_hi": ["रूबल", "यूरो", "डॉलर", "येन"],
        "answer_en": "Ruble",
        "answer_hi": "रूबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which planet is known as the Morning Star?",
        "question_hi": "किस ग्रह को सुबह का तारा के रूप में जाना जाता है?",
        "options_en": ["Mars", "Venus", "Jupiter", "Mercury"],
        "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "बुध"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Who invented the Radio?",
        "question_hi": "रेडियो का आविष्कार किसने किया?",
        "options_en": ["Thomas Edison", "Guglielmo Marconi", "Alexander Graham Bell", "Nikola Tesla"],
        "options_hi": ["थॉमस एडिसन", "गुग्लिल्मो मार्कोनी", "अलेक्जेंडर ग्राहम बेल", "निकोला टेस्ला"],
        "answer_en": "Guglielmo Marconi",
        "answer_hi": "गुग्लिल्मो मार्कोनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which is the most populated country in the world?",
        "question_hi": "दुनिया का सबसे अधिक आबादी वाला देश कौन सा है?",
        "options_en": ["India", "United States", "China", "Russia"],
        "options_hi": ["भारत", "संयुक्त राज्य अमेरिका", "चीन", "रूस"],
        "answer_en": "China",
        "answer_hi": "चीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Who is known as the Father of the Indian Nation?",
        "question_hi": "भारत राष्ट्र के पिता के रूप में किसे जाना जाता है?",
        "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "B.R. Ambedkar", "Subhash Chandra Bose"],
        "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "बी.आर. अंबेडकर", "सुभाष चंद्र बोस"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the chemical symbol for Lead?",
        "question_hi": "लेड का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ld", "Pb", "Le", "Pl"],
        "options_hi": ["Ld", "Pb", "Le", "Pl"],
        "answer_en": "Pb",
        "answer_hi": "Pb",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which is the smallest bone in human body?",
        "question_hi": "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
        "options_en": ["Stapes", "Femur", "Tibia", "Radius"],
        "options_hi": ["स्टेप्स", "फीमर", "टिबिया", "रेडियस"],
        "answer_en": "Stapes",
        "answer_hi": "स्टेप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the value of 15 + 8 × 2?",
        "question_hi": "15 + 8 × 2 का मान क्या है?",
        "options_en": ["46", "31", "38", "23"],
        "options_hi": ["46", "31", "38", "23"],
        "answer_en": "31",
        "answer_hi": "31",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which gas is absorbed by plants during photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण के दौरान पौधों द्वारा कौन सी गैस अवशोषित की जाती है?",
        "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon Dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the capital of Canada?",
        "question_hi": "कनाडा की राजधानी क्या है?",
        "options_en": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        "options_hi": ["टोरंटो", "वैंकूवर", "ओटावा", "मॉन्ट्रियल"],
        "answer_en": "Ottawa",
        "answer_hi": "ओटावा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which element is essential for the formation of hemoglobin?",
        "question_hi": "हीमोग्लोबिन के निर्माण के लिए कौन सा तत्व आवश्यक है?",
        "options_en": ["Calcium", "Iron", "Sodium", "Potassium"],
        "options_hi": ["कैल्शियम", "आयरन", "सोडियम", "पोटैशियम"],
        "answer_en": "Iron",
        "answer_hi": "आयरन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the formula for acceleration?",
        "question_hi": "त्वरण का सूत्र क्या है?",
        "options_en": ["Velocity/Time", "Distance/Time", "Force/Mass", "Work/Time"],
        "options_hi": ["वेग/समय", "दूरी/समय", "बल/द्रव्यमान", "कार्य/समय"],
        "answer_en": "Velocity/Time",
        "answer_hi": "वेग/समय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Who discovered Gravity?",
        "question_hi": "गुरुत्वाकर्षण की खोज किसने की?",
        "options_en": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Archimedes"],
        "options_hi": ["अल्बर्ट आइंस्टीन", "आइजैक न्यूटन", "गैलीलियो गैलीली", "आर्किमिडीज"],
        "answer_en": "Isaac Newton",
        "answer_hi": "आइजैक न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the cube of 3?",
        "question_hi": "3 का घन क्या है?",
        "options_en": ["9", "27", "81", "6"],
        "options_hi": ["9", "27", "81", "6"],
        "answer_en": "27",
        "answer_hi": "27",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which instrument is used to measure voltage?",
        "question_hi": "वोल्टेज मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Ammeter", "Voltmeter", "Ohmmeter", "Galvanometer"],
        "options_hi": ["एमीटर", "वोल्टमीटर", "ओममीटर", "गैल्वेनोमीटर"],
        "answer_en": "Voltmeter",
        "answer_hi": "वोल्टमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the chemical formula of Sulfuric Acid?",
        "question_hi": "सल्फ्यूरिक एसिड का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂SO₄", "H₂SO₃", "H₂S", "SO₂"],
        "options_hi": ["H₂SO₄", "H₂SO₃", "H₂S", "SO₂"],
        "answer_en": "H₂SO₄",
        "answer_hi": "H₂SO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which mountain range separates Europe from Asia?",
        "question_hi": "कौन सी पर्वत श्रृंखला यूरोप को एशिया से अलग करती है?",
        "options_en": ["Alps", "Ural", "Andes", "Rockies"],
        "options_hi": ["आल्प्स", "यूराल", "एंडीज", "रॉकीज"],
        "answer_en": "Ural",
        "answer_hi": "यूराल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the value of 20% of 150?",
        "question_hi": "150 का 20% क्या है?",
        "options_en": ["20", "30", "40", "50"],
        "options_hi": ["20", "30", "40", "50"],
        "answer_en": "30",
        "answer_hi": "30",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which vitamin deficiency causes Scurvy?",
        "question_hi": "किस विटामिन की कमी से स्कर्वी होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the chemical symbol for Copper?",
        "question_hi": "तांबे का रासायनिक प्रतीक क्या है?",
        "options_en": ["Co", "Cu", "Cp", "Cr"],
        "options_hi": ["Co", "Cu", "Cp", "Cr"],
        "answer_en": "Cu",
        "answer_hi": "Cu",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which is the fastest bird in the world?",
        "question_hi": "दुनिया का सबसे तेज उड़ने वाला पक्षी कौन सा है?",
        "options_en": ["Eagle", "Peregrine Falcon", "Ostrich", "Hummingbird"],
        "options_hi": ["ईगल", "पेरेग्रिन फाल्कन", "शुतुरमुर्ग", "हमिंगबर्ड"],
        "answer_en": "Peregrine Falcon",
        "answer_hi": "पेरेग्रिन फाल्कन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the value of 9 × 7 - 8?",
        "question_hi": "9 × 7 - 8 का मान क्या है?",
        "options_en": ["55", "63", "47", "65"],
        "options_hi": ["55", "63", "47", "65"],
        "answer_en": "55",
        "answer_hi": "55",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which gas is used in fire extinguishers?",
        "question_hi": "आग बुझाने के यंत्रों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon Dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the chemical formula of Ethanol?",
        "question_hi": "एथनॉल का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₃OH", "C₂H₅OH", "CH₃COOH", "C₆H₁₂O₆"],
        "options_hi": ["CH₃OH", "C₂H₅OH", "CH₃COOH", "C₆H₁₂O₆"],
        "answer_en": "C₂H₅OH",
        "answer_hi": "C₂H₅OH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which instrument is used to measure humidity?",
        "question_hi": "आर्द्रता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
        "options_hi": ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
        "answer_en": "Hygrometer",
        "answer_hi": "हाइग्रोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the value of √225?",
        "question_hi": "√225 का मान क्या है?",
        "options_en": ["12", "15", "18", "20"],
        "options_hi": ["12", "15", "18", "20"],
        "answer_en": "15",
        "answer_hi": "15",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which part of the cell is called the control center?",
        "question_hi": "कोशिका के किस भाग को नियंत्रण केंद्र कहा जाता है?",
        "options_en": ["Mitochondria", "Nucleus", "Ribosome", "Golgi apparatus"],
        "options_hi": ["माइटोकॉन्ड्रिया", "केंद्रक", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the chemical symbol for Magnesium?",
        "question_hi": "मैग्नीशियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ma", "Mg", "Mn", "Ms"],
        "options_hi": ["Ma", "Mg", "Mn", "Ms"],
        "answer_en": "Mg",
        "answer_hi": "Mg",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which is the largest island in the world?",
        "question_hi": "दुनिया का सबसे बड़ा द्वीप कौन सा है?",
        "options_en": ["Greenland", "Australia", "Borneo", "Madagascar"],
        "options_hi": ["ग्रीनलैंड", "ऑस्ट्रेलिया", "बोर्नियो", "मेडागास्कर"],
        "answer_en": "Greenland",
        "answer_hi": "ग्रीनलैंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the value of 3/4 of 80?",
        "question_hi": "80 का 3/4 क्या है?",
        "options_en": ["20", "40", "60", "80"],
        "options_hi": ["20", "40", "60", "80"],
        "answer_en": "60",
        "answer_hi": "60",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which gas is used in welding?",
        "question_hi": "वेल्डिंग में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Acetylene", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "एसिटिलीन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Acetylene",
        "answer_hi": "एसिटिलीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the chemical formula of Nitric Acid?",
        "question_hi": "नाइट्रिक एसिड का रासायनिक सूत्र क्या है?",
        "options_en": ["HNO₃", "HNO₂", "H₂SO₄", "HCl"],
        "options_hi": ["HNO₃", "HNO₂", "H₂SO₄", "HCl"],
        "answer_en": "HNO₃",
        "answer_hi": "HNO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which instrument is used to measure wind speed?",
        "question_hi": "हवा की गति मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Barometer", "Thermometer", "Anemometer", "Hygrometer"],
        "options_hi": ["बैरोमीटर", "थर्मामीटर", "एनीमोमीटर", "हाइग्रोमीटर"],
        "answer_en": "Anemometer",
        "answer_hi": "एनीमोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the value of 4³?",
        "question_hi": "4³ का मान क्या है?",
        "options_en": ["12", "16", "64", "256"],
        "options_hi": ["12", "16", "64", "256"],
        "answer_en": "64",
        "answer_hi": "64",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which vitamin is also known as Retinol?",
        "question_hi": "किस विटामिन को रेटिनॉल के रूप में भी जाना जाता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the chemical formula of Carbon Monoxide?",
        "question_hi": "कार्बन मोनोऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CO", "CO₂", "C₂O", "C₂O₂"],
        "options_hi": ["CO", "CO₂", "C₂O", "C₂O₂"],
        "answer_en": "CO",
        "answer_hi": "CO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which is the smallest planet in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे छोटा ग्रह कौन सा है?",
        "options_en": ["Mars", "Venus", "Mercury", "Pluto"],
        "options_hi": ["मंगल", "शुक्र", "बुध", "प्लूटो"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the value of 6!?",
        "question_hi": "6! का मान क्या है?",
        "options_en": ["120", "720", "360", "240"],
        "options_hi": ["120", "720", "360", "240"],
        "answer_en": "720",
        "answer_hi": "720",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which gas is used in light bulbs?",
        "question_hi": "लाइट बल्ब में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Nitrogen", "Argon", "Helium"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "हीलियम"],
        "answer_en": "Argon",
        "answer_hi": "आर्गन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the chemical formula of Hydrogen Peroxide?",
        "question_hi": "हाइड्रोजन पेरोक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂O", "H₂O₂", "HO₂", "H₃O"],
        "options_hi": ["H₂O", "H₂O₂", "HO₂", "H₃O"],
        "answer_en": "H₂O₂",
        "answer_hi": "H₂O₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the value of 5² + 12²?",
        "question_hi": "5² + 12² का मान क्या है?",
        "options_en": ["169", "144", "25", "289"],
        "options_hi": ["169", "144", "25", "289"],
        "answer_en": "169",
        "answer_hi": "169",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which part of the plant absorbs water and minerals?",
        "question_hi": "पौधे का कौन सा भाग पानी और खनिजों को अवशोषित करता है?",
        "options_en": ["Leaves", "Stem", "Roots", "Flowers"],
        "options_hi": ["पत्तियां", "तना", "जड़ें", "फूल"],
        "answer_en": "Roots",
        "answer_hi": "जड़ें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the chemical symbol for Zinc?",
        "question_hi": "जिंक का रासायनिक प्रतीक क्या है?",
        "options_en": ["Zi", "Zn", "Zc", "Z"],
        "options_hi": ["Zi", "Zn", "Zc", "Z"],
        "answer_en": "Zn",
        "answer_hi": "Zn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which is the largest freshwater lake in the world?",
        "question_hi": "दुनिया की सबसे बड़ी मीठे पानी की झील कौन सी है?",
        "options_en": ["Lake Superior", "Lake Victoria", "Caspian Sea", "Lake Baikal"],
        "options_hi": ["लेक सुपीरियर", "लेक विक्टोरिया", "कैस्पियन सागर", "लेक बाइकल"],
        "answer_en": "Lake Superior",
        "answer_hi": "लेक सुपीरियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the value of 2/3 of 90?",
        "question_hi": "90 का 2/3 क्या है?",
        "options_en": ["30", "45", "60", "75"],
        "options_hi": ["30", "45", "60", "75"],
        "answer_en": "60",
        "answer_hi": "60",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which gas is used in anesthesia?",
        "question_hi": "एनेस्थीसिया में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Nitrous Oxide", "Carbon Dioxide", "Helium"],
        "options_hi": ["ऑक्सीजन", "नाइट्रस ऑक्साइड", "कार्बन डाइऑक्साइड", "हीलियम"],
        "answer_en": "Nitrous Oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the chemical formula of Benzene?",
        "question_hi": "बेंजीन का रासायनिक सूत्र क्या है?",
        "options_en": ["C₆H₆", "C₆H₁₂", "C₆H₅OH", "C₆H₅COOH"],
        "options_hi": ["C₆H₆", "C₆H₁₂", "C₆H₅OH", "C₆H₅COOH"],
        "answer_en": "C₆H₆",
        "answer_hi": "C₆H₆",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which instrument is used to measure earthquake intensity?",
        "question_hi": "भूकंप की तीव्रता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Seismograph", "Barometer", "Thermometer", "Hygrometer"],
        "options_hi": ["सिस्मोग्राफ", "बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर"],
        "answer_en": "Seismograph",
        "answer_hi": "सिस्मोग्राफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the value of √400?",
        "question_hi": "√400 का मान क्या है?",
        "options_en": ["18", "20", "22", "24"],
        "options_hi": ["18", "20", "22", "24"],
        "answer_en": "20",
        "answer_hi": "20",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which vitamin deficiency causes Pellagra?",
        "question_hi": "किस विटामिन की कमी से पेलाग्रा होता है?",
        "options_en": ["Vitamin B3", "Vitamin B12", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन B3", "विटामिन B12", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin B3",
        "answer_hi": "विटामिन B3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
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
        "num": 92,
        "question_en": "Which is the national animal of Australia?",
        "question_hi": "ऑस्ट्रेलिया का राष्ट्रीय पशु कौन सा है?",
        "options_en": ["Kangaroo", "Koala", "Emu", "Platypus"],
        "options_hi": ["कंगारू", "कोआला", "एमू", "प्लैटिपस"],
        "answer_en": "Kangaroo",
        "answer_hi": "कंगारू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the value of 8 × 9 ÷ 6?",
        "question_hi": "8 × 9 ÷ 6 का मान क्या है?",
        "options_en": ["12", "14", "16", "18"],
        "options_hi": ["12", "14", "16", "18"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which gas is used in making soft drinks?",
        "question_hi": "सॉफ्ट ड्रिंक्स बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon Dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the chemical formula of Acetic Acid?",
        "question_hi": "एसिटिक एसिड का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₃COOH", "HCOOH", "C₂H₅OH", "CH₃OH"],
        "options_hi": ["CH₃COOH", "HCOOH", "C₂H₅OH", "CH₃OH"],
        "answer_en": "CH₃COOH",
        "answer_hi": "CH₃COOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which instrument is used to measure the depth of oceans?",
        "question_hi": "समुद्र की गहराई मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Sonar", "Radar", "Barometer", "Thermometer"],
        "options_hi": ["सोनार", "रडार", "बैरोमीटर", "थर्मामीटर"],
        "answer_en": "Sonar",
        "answer_hi": "सोनार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the value of 7² - 5²?",
        "question_hi": "7² - 5² का मान क्या है?",
        "options_en": ["24", "14", "34", "44"],
        "options_hi": ["24", "14", "34", "44"],
        "answer_en": "24",
        "answer_hi": "24",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which part of the cell is responsible for cellular respiration?",
        "question_hi": "कोशिका का कौन सा भाग कोशिकीय श्वसन के लिए जिम्मेदार है?",
        "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the chemical symbol for Platinum?",
        "question_hi": "प्लैटिनम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Pl", "Pt", "Pm", "Pn"],
        "options_hi": ["Pl", "Pt", "Pm", "Pn"],
        "answer_en": "Pt",
        "answer_hi": "Pt",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which is the largest delta in the world?",
        "question_hi": "दुनिया का सबसे बड़ा डेल्टा कौन सा है?",
        "options_en": ["Nile Delta", "Ganges-Brahmaputra Delta", "Mississippi Delta", "Amazon Delta"],
        "options_hi": ["नील डेल्टा", "गंगा-ब्रह्मपुत्र डेल्टा", "मिसिसिपी डेल्टा", "अमेज़न डेल्टा"],
        "answer_en": "Ganges-Brahmaputra Delta",
        "answer_hi": "गंगा-ब्रह्मपुत्र डेल्टा",
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