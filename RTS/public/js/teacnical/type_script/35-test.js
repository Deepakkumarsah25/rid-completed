const questions = [
    // Biology (1-15)
    {
        "num": 1,
        "question_en": "Which vitamin is synthesized by the human body when exposed to sunlight?",
        "question_hi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर द्वारा कौन सा विटामिन संश्लेषित किया जाता है?",
        "options_en": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन ए", "विटामिन बी12", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the functional unit of the kidney called?",
        "question_hi": "गुर्दे की कार्यात्मक इकाई को क्या कहा जाता है?",
        "options_en": ["Neuron", "Nephron", "Alveoli", "Nucleus"],
        "options_hi": ["न्यूरॉन", "नेफ्रॉन", "एल्वियोली", "केंद्रक"],
        "answer_en": "Nephron",
        "answer_hi": "नेफ्रॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which part of the cell contains genetic material?",
        "question_hi": "कोशिका का कौन सा भाग आनुवंशिक सामग्री रखता है?",
        "options_en": ["Cytoplasm", "Mitochondria", "Nucleus", "Ribosome"],
        "options_hi": ["कोशिका द्रव्य", "माइटोकॉन्ड्रिया", "केंद्रक", "राइबोसोम"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the process of cell division that results in four daughter cells?",
        "question_hi": "कोशिका विभाजन की वह प्रक्रिया क्या है जिसके परिणामस्वरूप चार संतति कोशिकाएँ बनती हैं?",
        "options_en": ["Mitosis", "Meiosis", "Binary Fission", "Budding"],
        "options_hi": ["समसूत्री विभाजन", "अर्धसूत्री विभाजन", "द्विखंडन", "मुकुलन"],
        "answer_en": "Meiosis",
        "answer_hi": "अर्धसूत्री विभाजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which hormone regulates blood sugar levels in humans?",
        "question_hi": "मनुष्यों में रक्त शर्करा के स्तर को कौन सा हार्मोन नियंत्रित करता है?",
        "options_en": ["Insulin", "Adrenaline", "Thyroxine", "Estrogen"],
        "options_hi": ["इंसुलिन", "एड्रेनालाईन", "थायरॉक्सिन", "एस्ट्रोजन"],
        "answer_en": "Insulin",
        "answer_hi": "इंसुलिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the scientific study of birds called?",
        "question_hi": "पक्षियों के वैज्ञानिक अध्ययन को क्या कहा जाता है?",
        "options_en": ["Ornithology", "Entomology", "Herpetology", "Ichthyology"],
        "options_hi": ["पक्षी विज्ञान", "कीट विज्ञान", "सरीसृप विज्ञान", "मत्स्य विज्ञान"],
        "answer_en": "Ornithology",
        "answer_hi": "पक्षी विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which plant tissue is responsible for transporting water and minerals?",
        "question_hi": "कौन सा पादप ऊतक जल और खनिजों के परिवहन के लिए जिम्मेदार है?",
        "options_en": ["Phloem", "Xylem", "Epidermis", "Cambium"],
        "options_hi": ["फ्लोएम", "जाइलम", "एपिडर्मिस", "कैम्बियम"],
        "answer_en": "Xylem",
        "answer_hi": "जाइलम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the largest organ in the human body?",
        "question_hi": "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
        "options_en": ["Liver", "Skin", "Heart", "Lungs"],
        "options_hi": ["यकृत", "त्वचा", "हृदय", "फेफड़े"],
        "answer_en": "Skin",
        "answer_hi": "त्वचा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which blood group is known as the universal donor?",
        "question_hi": "किस रक्त समूह को सार्वभौमिक दाता के रूप में जाना जाता है?",
        "options_en": ["A+", "B+", "AB+", "O-"],
        "options_hi": ["ए+", "बी+", "एबी+", "ओ-"],
        "answer_en": "O-",
        "answer_hi": "ओ-",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the process of conversion of nitrogen gas into ammonia called?",
        "question_hi": "नाइट्रोजन गैस के अमोनिया में परिवर्तन की प्रक्रिया को क्या कहा जाता है?",
        "options_en": ["Nitrogen Fixation", "Ammonification", "Denitrification", "Nitrification"],
        "options_hi": ["नाइट्रोजन स्थिरीकरण", "अमोनीकरण", "विनाइट्रीकरण", "नाइट्रीकरण"],
        "answer_en": "Nitrogen Fixation",
        "answer_hi": "नाइट्रोजन स्थिरीकरण",
        "attempted": false,
        "selected": ""
    },

    // Mathematics (11-25)
    {
        "num": 11,
        "question_en": "What is the value of tan(45°)?",
        "question_hi": "tan(45°) का मान क्या है?",
        "options_en": ["0", "1", "√3", "1/√3"],
        "options_hi": ["0", "1", "√3", "1/√3"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the formula for the volume of a sphere?",
        "question_hi": "गोले के आयतन का सूत्र क्या है?",
        "options_en": ["4/3 πr³", "4πr²", "πr²h", "2πr"],
        "options_hi": ["4/3 πr³", "4πr²", "πr²h", "2πr"],
        "answer_en": "4/3 πr³",
        "answer_hi": "4/3 πr³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the value of (a - b)²?",
        "question_hi": "(a - b)² का मान क्या है?",
        "options_en": ["a² - b²", "a² + 2ab + b²", "a² - 2ab + b²", "a² + b²"],
        "options_hi": ["a² - b²", "a² + 2ab + b²", "a² - 2ab + b²", "a² + b²"],
        "answer_en": "a² - 2ab + b²",
        "answer_hi": "a² - 2ab + b²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the sum of the first n natural numbers?",
        "question_hi": "प्रथम n प्राकृतिक संख्याओं का योग क्या है?",
        "options_en": ["n(n+1)/2", "n(n-1)/2", "n²", "2n"],
        "options_hi": ["n(n+1)/2", "n(n-1)/2", "n²", "2n"],
        "answer_en": "n(n+1)/2",
        "answer_hi": "n(n+1)/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the value of log₂(8)?",
        "question_hi": "log₂(8) का मान क्या है?",
        "options_en": ["2", "3", "4", "1"],
        "options_hi": ["2", "3", "4", "1"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the formula for compound interest?",
        "question_hi": "चक्रवृद्धि ब्याज का सूत्र क्या है?",
        "options_en": ["P(1 + R/100)^T", "PRT/100", "P + I", "P - I"],
        "options_hi": ["P(1 + R/100)^T", "PRT/100", "P + I", "P - I"],
        "answer_en": "P(1 + R/100)^T",
        "answer_hi": "P(1 + R/100)^T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the value of sin(90°)?",
        "question_hi": "sin(90°) का मान क्या है?",
        "options_en": ["0", "1", "0.5", "√3/2"],
        "options_hi": ["0", "1", "0.5", "√3/2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the area of a trapezium?",
        "question_hi": "एक समलम्ब चतुर्भुज का क्षेत्रफल क्या है?",
        "options_en": ["½(a+b)h", "a × b", "a²", "πr²"],
        "options_hi": ["½(a+b)h", "a × b", "a²", "πr²"],
        "answer_en": "½(a+b)h",
        "answer_hi": "½(a+b)h",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the value of 10²?",
        "question_hi": "10² का मान क्या है?",
        "options_en": ["20", "100", "1000", "10"],
        "options_hi": ["20", "100", "1000", "10"],
        "answer_en": "100",
        "answer_hi": "100",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the formula for the diagonal of a square?",
        "question_hi": "वर्ग के विकर्ण का सूत्र क्या है?",
        "options_en": ["a√2", "2a", "a²", "a/2"],
        "options_hi": ["a√2", "2a", "a²", "a/2"],
        "answer_en": "a√2",
        "answer_hi": "a√2",
        "attempted": false,
        "selected": ""
    },

    // Physics (26-40)
    {
        "num": 21,
        "question_en": "What is the SI unit of pressure?",
        "question_hi": "दबाव की SI इकाई क्या है?",
        "options_en": ["Newton", "Pascal", "Joule", "Watt"],
        "options_hi": ["न्यूटन", "पास्कल", "जूल", "वाट"],
        "answer_en": "Pascal",
        "answer_hi": "पास्कल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which law states that volume is directly proportional to temperature at constant pressure?",
        "question_hi": "कौन सा नियम कहता है कि नियत दबाव पर आयतन तापमान के समानुपाती होता है?",
        "options_en": ["Boyle's Law", "Charles' Law", "Gay-Lussac's Law", "Avogadro's Law"],
        "options_hi": ["बॉयल का नियम", "चार्ल्स का नियम", "गे-लुसाक का नियम", "अवोगाद्रो का नियम"],
        "answer_en": "Charles' Law",
        "answer_hi": "चार्ल्स का नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the unit of electric potential?",
        "question_hi": "विद्युत विभव की इकाई क्या है?",
        "options_en": ["Ampere", "Volt", "Ohm", "Watt"],
        "options_hi": ["एम्पियर", "वोल्ट", "ओम", "वाट"],
        "answer_en": "Volt",
        "answer_hi": "वोल्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What type of lens is used in magnifying glasses?",
        "question_hi": "आवर्धक कांच में किस प्रकार के लेंस का उपयोग किया जाता है?",
        "options_en": ["Concave Lens", "Convex Lens", "Plano-concave Lens", "Cylindrical Lens"],
        "options_hi": ["अवतल लेंस", "उत्तल लेंस", "समतल-अवतल लेंस", "बेलनाकार लेंस"],
        "answer_en": "Convex Lens",
        "answer_hi": "उत्तल लेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the speed of sound in air at room temperature?",
        "question_hi": "कमरे के तापमान पर हवा में ध्वनि की गति क्या है?",
        "options_en": ["332 m/s", "343 m/s", "300 m/s", "400 m/s"],
        "options_hi": ["332 मी/से", "343 मी/से", "300 मी/से", "400 मी/से"],
        "answer_en": "343 m/s",
        "answer_hi": "343 मी/से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the principle behind working of a submarine?",
        "question_hi": "पनडुब्बी के काम करने का सिद्धांत क्या है?",
        "options_en": ["Bernoulli's Principle", "Archimedes' Principle", "Pascal's Law", "Newton's Law"],
        "options_hi": ["बर्नौली का सिद्धांत", "आर्किमिडीज का सिद्धांत", "पास्कल का नियम", "न्यूटन का नियम"],
        "answer_en": "Archimedes' Principle",
        "answer_hi": "आर्किमिडीज का सिद्धांत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the SI unit of energy?",
        "question_hi": "ऊर्जा की SI इकाई क्या है?",
        "options_en": ["Watt", "Joule", "Newton", "Pascal"],
        "options_hi": ["वाट", "जूल", "न्यूटन", "पास्कल"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which color of light has the minimum wavelength?",
        "question_hi": "किस रंग के प्रकाश की तरंगदैर्ध्य न्यूनतम होती है?",
        "options_en": ["Red", "Green", "Blue", "Violet"],
        "options_hi": ["लाल", "हरा", "नीला", "बैंगनी"],
        "answer_en": "Violet",
        "answer_hi": "बैंगनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the formula for kinetic energy?",
        "question_hi": "गतिज ऊर्जा का सूत्र क्या है?",
        "options_en": ["½mv²", "mgh", "F × d", "P × t"],
        "options_hi": ["½mv²", "mgh", "F × d", "P × t"],
        "answer_en": "½mv²",
        "answer_hi": "½mv²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the unit of capacitance?",
        "question_hi": "धारिता की इकाई क्या है?",
        "options_en": ["Farad", "Henry", "Ohm", "Siemens"],
        "options_hi": ["फैराड", "हेनरी", "ओम", "सीमेंस"],
        "answer_en": "Farad",
        "answer_hi": "फैराड",
        "attempted": false,
        "selected": ""
    },

    // Chemistry (41-55)
    {
        "num": 31,
        "question_en": "What is the pH value of acidic solution?",
        "question_hi": "अम्लीय विलयन का pH मान क्या होता है?",
        "options_en": ["Greater than 7", "Equal to 7", "Less than 7", "Equal to 14"],
        "options_hi": ["7 से अधिक", "7 के बराबर", "7 से कम", "14 के बराबर"],
        "answer_en": "Less than 7",
        "answer_hi": "7 से कम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which gas turns lime water milky?",
        "question_hi": "कौन सी गैस चूने के पानी को दूधिया बना देती है?",
        "options_en": ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"],
        "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the chemical formula of table salt?",
        "question_hi": "साधारण नमक का रासायनिक सूत्र क्या है?",
        "options_en": ["NaCl", "KCl", "CaCO₃", "NaOH"],
        "options_hi": ["NaCl", "KCl", "CaCO₃", "NaOH"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which element has the chemical symbol 'Fe'?",
        "question_hi": "किस तत्व का रासायनिक प्रतीक 'Fe' है?",
        "options_en": ["Fluorine", "Iron", "Francium", "Fermium"],
        "options_hi": ["फ्लोरीन", "लोहा", "फ्रांसियम", "फर्मियम"],
        "answer_en": "Iron",
        "answer_hi": "लोहा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the common name of calcium carbonate?",
        "question_hi": "कैल्शियम कार्बोनेट का सामान्य नाम क्या है?",
        "options_en": ["Marble", "Gypsum", "Limestone", "Chalk"],
        "options_hi": ["संगमरमर", "जिप्सम", "चूना पत्थर", "चाक"],
        "answer_en": "Limestone",
        "answer_hi": "चूना पत्थर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
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
        "num": 37,
        "question_en": "What is the valency of chlorine?",
        "question_hi": "क्लोरीन की संयोजकता क्या है?",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which acid is present in our stomach?",
        "question_hi": "हमारे पेट में कौन सा अम्ल होता है?",
        "options_en": ["Hydrochloric Acid", "Sulfuric Acid", "Nitric Acid", "Acetic Acid"],
        "options_hi": ["हाइड्रोक्लोरिक एसिड", "सल्फ्यूरिक एसिड", "नाइट्रिक एसिड", "एसिटिक एसिड"],
        "answer_en": "Hydrochloric Acid",
        "answer_hi": "हाइड्रोक्लोरिक एसिड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the atomic number of oxygen?",
        "question_hi": "ऑक्सीजन की परमाणु संख्या क्या है?",
        "options_en": ["6", "8", "10", "12"],
        "options_hi": ["6", "8", "10", "12"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which gas is used in the preparation of ammonia?",
        "question_hi": "अमोनिया के निर्माण में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"],
        "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },

    // English Language (56-65)
    {
        "num": 41,
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
        "num": 42,
        "question_en": "Which of these is a conjunction?",
        "question_hi": "इनमें से कौन सा संयोजक है?",
        "options_en": ["Run", "And", "Beautiful", "Quickly"],
        "options_hi": ["दौड़ना", "और", "सुंदर", "तेजी से"],
        "answer_en": "And",
        "answer_hi": "और",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the past participle of 'Eat'?",
        "question_hi": "'Eat' का भूतकालिक कृदंत क्या है?",
        "options_en": ["Ate", "Eaten", "Eating", "Eats"],
        "options_hi": ["एट", "ईटन", "ईटिंग", "ईट्स"],
        "answer_en": "Eaten",
        "answer_hi": "ईटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which word is an adverb?",
        "question_hi": "कौन सा शब्द क्रिया विशेषण है?",
        "options_en": ["Happiness", "Beautiful", "Run", "Quickly"],
        "options_hi": ["खुशी", "सुंदर", "दौड़ना", "तेजी से"],
        "answer_en": "Quickly",
        "answer_hi": "तेजी से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the plural of 'Mouse'?",
        "question_hi": "'Mouse' का बहुवचन क्या है?",
        "options_en": ["Mouses", "Mice", "Mouse", "Mices"],
        "options_hi": ["माउसेस", "माइस", "माउस", "माइसेस"],
        "answer_en": "Mice",
        "answer_hi": "माइस",
        "attempted": false,
        "selected": ""
    },

    // Hindi Language (66-75)
    {
        "num": 46,
        "question_en": "What is the meaning of 'Pustak' in English?",
        "question_hi": "'पुस्तक' का अंग्रेजी में क्या अर्थ है?",
        "options_en": ["Teacher", "Student", "Book", "School"],
        "options_hi": ["शिक्षक", "छात्र", "किताब", "स्कूल"],
        "answer_en": "Book",
        "answer_hi": "किताब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which of these is a 'Kriya Visheshan' (Adverb) in Hindi?",
        "question_hi": "इनमें से कौन सा हिंदी में 'क्रिया विशेषण' है?",
        "options_en": ["Khelna", "Sundar", "Jaldi", "Kitab"],
        "options_hi": ["खेलना", "सुंदर", "जल्दी", "किताब"],
        "answer_en": "Jaldi",
        "answer_hi": "जल्दी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the masculine gender of 'Gai' in Hindi?",
        "question_hi": "हिंदी में 'गाय' का पुल्लिंग क्या है?",
        "options_en": ["Gai", "Bail", "Bachda", "Gaye"],
        "options_hi": ["गाय", "बैल", "बछड़ा", "गायें"],
        "answer_en": "Bail",
        "answer_hi": "बैल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which of these is a 'Sangya' (Noun) in Hindi?",
        "question_hi": "इनमें से कौन सा हिंदी में 'संज्ञा' है?",
        "options_en": ["Khelna", "Lamba", "School", "Sundar"],
        "options_hi": ["खेलना", "लंबा", "स्कूल", "सुंदर"],
        "answer_en": "School",
        "answer_hi": "स्कूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the plural of 'Aurat' in Hindi?",
        "question_hi": "हिंदी में 'औरत' का बहुवचन क्या है?",
        "options_en": ["Auraten", "Aurat", "Aurate", "Auraton"],
        "options_hi": ["औरतें", "औरत", "औरते", "औरतों"],
        "answer_en": "Auraten",
        "answer_hi": "औरतें",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge (76-100)
    {
        "num": 51,
        "question_en": "Which country is known as the Land of the Midnight Sun?",
        "question_hi": "किस देश को मध्यरात्रि सूर्य की भूमि के रूप में जाना जाता है?",
        "options_en": ["Sweden", "Norway", "Finland", "Iceland"],
        "options_hi": ["स्वीडन", "नॉर्वे", "फिनलैंड", "आइसलैंड"],
        "answer_en": "Norway",
        "answer_hi": "नॉर्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Who wrote 'War and Peace'?",
        "question_hi": "'वॉर एंड पीस' किसने लिखा?",
        "options_en": ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Alexander Pushkin"],
        "options_hi": ["फ्योडोर दोस्तोव्स्की", "लियो टॉल्स्टॉय", "एंटोन चेखव", "अलेक्जेंडर पुश्किन"],
        "answer_en": "Leo Tolstoy",
        "answer_hi": "लियो टॉल्स्टॉय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which is the smallest ocean in the world?",
        "question_hi": "दुनिया का सबसे छोटा महासागर कौन सा है?",
        "options_en": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Southern Ocean"],
        "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर", "दक्षिणी महासागर"],
        "answer_en": "Arctic Ocean",
        "answer_hi": "आर्कटिक महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Who painted 'The Last Supper'?",
        "question_hi": "'द लास्ट सपर' की पेंटिंग किसने बनाई?",
        "options_en": ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"],
        "options_hi": ["माइकलएंजेलो", "राफेल", "लियोनार्डो दा विंची", "डोनाटेलो"],
        "answer_en": "Leonardo da Vinci",
        "answer_hi": "लियोनार्डो दा विंची",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
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
        "num": 56,
        "question_en": "What is the currency of China?",
        "question_hi": "चीन की मुद्रा क्या है?",
        "options_en": ["Yuan", "Yen", "Won", "Ringgit"],
        "options_hi": ["युआन", "येन", "वॉन", "रिंगित"],
        "answer_en": "Yuan",
        "answer_hi": "युआन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which planet is known as the Evening Star?",
        "question_hi": "किस ग्रह को शाम का तारा के रूप में जाना जाता है?",
        "options_en": ["Mars", "Venus", "Jupiter", "Mercury"],
        "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "बुध"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Who invented the Printing Press?",
        "question_hi": "प्रिंटिंग प्रेस का आविष्कार किसने किया?",
        "options_en": ["Johannes Gutenberg", "Thomas Edison", "Alexander Graham Bell", "James Watt"],
        "options_hi": ["जोहान्स गुटेनबर्ग", "थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "जेम्स वाट"],
        "answer_en": "Johannes Gutenberg",
        "answer_hi": "जोहान्स गुटेनबर्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which is the most populous country in the world?",
        "question_hi": "दुनिया का सबसे अधिक आबादी वाला देश कौन सा है?",
        "options_en": ["India", "United States", "China", "Russia"],
        "options_hi": ["भारत", "संयुक्त राज्य अमेरिका", "चीन", "रूस"],
        "answer_en": "China",
        "answer_hi": "चीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
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
        "num": 61,
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
        "num": 62,
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
        "num": 63,
        "question_en": "What is the value of 15 × 4 ÷ 2?",
        "question_hi": "15 × 4 ÷ 2 का मान क्या है?",
        "options_en": ["30", "60", "15", "120"],
        "options_hi": ["30", "60", "15", "120"],
        "answer_en": "30",
        "answer_hi": "30",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
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
        "num": 65,
        "question_en": "What is the capital of Brazil?",
        "question_hi": "ब्राजील की राजधानी क्या है?",
        "options_en": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        "options_hi": ["रियो डी जनेरियो", "साओ पाउलो", "ब्रासीलिया", "साल्वाडोर"],
        "answer_en": "Brasília",
        "answer_hi": "ब्रासीलिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which element is essential for bone formation?",
        "question_hi": "हड्डी निर्माण के लिए कौन सा तत्व आवश्यक है?",
        "options_en": ["Iron", "Calcium", "Sodium", "Potassium"],
        "options_hi": ["आयरन", "कैल्शियम", "सोडियम", "पोटैशियम"],
        "answer_en": "Calcium",
        "answer_hi": "कैल्शियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
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
        "num": 68,
        "question_en": "Who discovered X-rays?",
        "question_hi": "एक्स-रे की खोज किसने की?",
        "options_en": ["Marie Curie", "Wilhelm Röntgen", "Albert Einstein", "Niels Bohr"],
        "options_hi": ["मैरी क्यूरी", "विल्हेम रॉन्टजेन", "अल्बर्ट आइंस्टीन", "नील्स बोहर"],
        "answer_en": "Wilhelm Röntgen",
        "answer_hi": "विल्हेम रॉन्टजेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the cube of 4?",
        "question_hi": "4 का घन क्या है?",
        "options_en": ["16", "64", "8", "12"],
        "options_hi": ["16", "64", "8", "12"],
        "answer_en": "64",
        "answer_hi": "64",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which instrument is used to measure temperature?",
        "question_hi": "तापमान मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
        "options_hi": ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
        "answer_en": "Thermometer",
        "answer_hi": "थर्मामीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
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
        "num": 72,
        "question_en": "Which mountain range is the longest in the world?",
        "question_hi": "दुनिया की सबसे लंबी पर्वत श्रृंखला कौन सी है?",
        "options_en": ["Himalayas", "Andes", "Rockies", "Alps"],
        "options_hi": ["हिमालय", "एंडीज", "रॉकीज", "आल्प्स"],
        "answer_en": "Andes",
        "answer_hi": "एंडीज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the value of 25% of 80?",
        "question_hi": "80 का 25% क्या है?",
        "options_en": ["20", "25", "30", "40"],
        "options_hi": ["20", "25", "30", "40"],
        "answer_en": "20",
        "answer_hi": "20",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which vitamin deficiency causes Beriberi?",
        "question_hi": "किस विटामिन की कमी से बेरीबेरी होता है?",
        "options_en": ["Vitamin A", "Vitamin B1", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन ए", "विटामिन बी1", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन बी1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
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
        "num": 76,
        "question_en": "Which is the fastest land animal?",
        "question_hi": "सबसे तेज भूमि जानवर कौन सा है?",
        "options_en": ["Cheetah", "Lion", "Deer", "Horse"],
        "options_hi": ["चीता", "शेर", "हिरण", "घोड़ा"],
        "answer_en": "Cheetah",
        "answer_hi": "चीता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the value of 9² + 12²?",
        "question_hi": "9² + 12² का मान क्या है?",
        "options_en": ["225", "144", "169", "196"],
        "options_hi": ["225", "144", "169", "196"],
        "answer_en": "225",
        "answer_hi": "225",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
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
        "num": 79,
        "question_en": "What is the chemical formula of Methane?",
        "question_hi": "मीथेन का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "answer_en": "CH₄",
        "answer_hi": "CH₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
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
        "num": 81,
        "question_en": "What is the value of 7! ÷ 5!?",
        "question_hi": "7! ÷ 5! का मान क्या है?",
        "options_en": ["42", "35", "49", "56"],
        "options_hi": ["42", "35", "49", "56"],
        "answer_en": "42",
        "answer_hi": "42",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which part of the plant absorbs sunlight?",
        "question_hi": "पौधे का कौन सा भाग सूर्य के प्रकाश को अवशोषित करता है?",
        "options_en": ["Roots", "Stem", "Leaves", "Flowers"],
        "options_hi": ["जड़ें", "तना", "पत्तियां", "फूल"],
        "answer_en": "Leaves",
        "answer_hi": "पत्तियां",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
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
        "num": 84,
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
        "question_en": "Which gas is used in balloons to make them float?",
        "question_hi": "गुब्बारों को तैरने के लिए किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
        "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "हीलियम", "नाइट्रोजन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
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
        "num": 88,
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
        "num": 89,
        "question_en": "What is the value of √169?",
        "question_hi": "√169 का मान क्या है?",
        "options_en": ["12", "13", "14", "15"],
        "options_hi": ["12", "13", "14", "15"],
        "answer_en": "13",
        "answer_hi": "13",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which part of the cell is called the power house?",
        "question_hi": "कोशिका के किस भाग को पावर हाउस कहा जाता है?",
        "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the value of 3⁴?",
        "question_hi": "3⁴ का मान क्या है?",
        "options_en": ["12", "27", "81", "64"],
        "options_hi": ["12", "27", "81", "64"],
        "answer_en": "81",
        "answer_hi": "81",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which gas is responsible for the greenhouse effect?",
        "question_hi": "ग्रीनहाउस प्रभाव के लिए कौन सी गैस जिम्मेदार है?",
        "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon Dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the chemical symbol for Mercury?",
        "question_hi": "पारा का रासायनिक प्रतीक क्या है?",
        "options_en": ["Me", "Mr", "Hg", "My"],
        "options_hi": ["Me", "Mr", "Hg", "My"],
        "answer_en": "Hg",
        "answer_hi": "Hg",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which is the national animal of India?",
        "question_hi": "भारत का राष्ट्रीय पशु कौन सा है?",
        "options_en": ["Lion", "Elephant", "Tiger", "Peacock"],
        "options_hi": ["शेर", "हाथी", "बाघ", "मोर"],
        "answer_en": "Tiger",
        "answer_hi": "बाघ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the value of 100 - 45 + 15?",
        "question_hi": "100 - 45 + 15 का मान क्या है?",
        "options_en": ["60", "70", "80", "90"],
        "options_hi": ["60", "70", "80", "90"],
        "answer_en": "70",
        "answer_hi": "70",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which gas is used in refrigerators?",
        "question_hi": "रेफ्रिजरेटर में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Ammonia", "Methane", "Propane", "Freon"],
        "options_hi": ["अमोनिया", "मीथेन", "प्रोपेन", "फ्रेऑन"],
        "answer_en": "Freon",
        "answer_hi": "फ्रेऑन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
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
        "num": 98,
        "question_en": "Which is the brightest planet in the night sky?",
        "question_hi": "रात के आकाश में सबसे चमकीला ग्रह कौन सा है?",
        "options_en": ["Mars", "Venus", "Jupiter", "Saturn"],
        "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the value of 8 × 7 - 6?",
        "question_hi": "8 × 7 - 6 का मान क्या है?",
        "options_en": ["50", "48", "46", "44"],
        "options_hi": ["50", "48", "46", "44"],
        "answer_en": "50",
        "answer_hi": "50",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which instrument is used to measure wind speed?",
        "question_hi": "हवा की गति मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Barometer", "Thermometer", "Anemometer", "Hygrometer"],
        "options_hi": ["बैरोमीटर", "थर्मामीटर", "एनीमोमीटर", "हाइग्रोमीटर"],
        "answer_en": "Anemometer",
        "answer_hi": "एनीमोमीटर",
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