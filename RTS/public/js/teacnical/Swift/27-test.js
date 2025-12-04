const questions = [
    // Biology (1-20)
    {
        "num": 1,
        "question_en": "Which cell organelle is called the powerhouse of the cell?",
        "question_hi": "कोशिका का कौन सा अंग कोशिका का पावरहाउस कहलाता है?",
        "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the study of fossils called?",
        "question_hi": "जीवाश्मों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Ecology", "Paleontology", "Archaeology", "Geology"],
        "options_hi": ["पारिस्थितिकी", "जीवाश्मिकी", "पुरातत्व", "भूविज्ञान"],
        "answer_en": "Paleontology",
        "answer_hi": "जीवाश्मिकी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which part of the brain controls balance and coordination?",
        "question_hi": "मस्तिष्क का कौन सा भाग संतुलन और समन्वय नियंत्रित करता है?",
        "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
        "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला", "हाइपोथैलेमस"],
        "answer_en": "Cerebellum",
        "answer_hi": "सेरेबेलम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the normal human body temperature in Celsius?",
        "question_hi": "सामान्य मानव शरीर का तापमान सेल्सियस में क्या है?",
        "options_en": ["36.5°C", "37°C", "37.5°C", "38°C"],
        "options_hi": ["36.5°C", "37°C", "37.5°C", "38°C"],
        "answer_en": "37°C",
        "answer_hi": "37°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which blood vessels carry blood away from the heart?",
        "question_hi": "कौन सी रक्त वाहिकाएं हृदय से रक्त ले जाती हैं?",
        "options_en": ["Veins", "Arteries", "Capillaries", "Venules"],
        "options_hi": ["शिराएं", "धमनियां", "केशिकाएं", "शिरिकाएं"],
        "answer_en": "Arteries",
        "answer_hi": "धमनियां",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the largest gland in the human body?",
        "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?",
        "options_en": ["Pancreas", "Liver", "Thyroid", "Pituitary"],
        "options_hi": ["अग्न्याशय", "यकृत", "थायरॉयड", "पिट्यूटरी"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which vitamin is produced by the human body when exposed to sunlight?",
        "question_hi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर कौन सा विटामिन उत्पन्न करता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the basic structural unit of the nervous system?",
        "question_hi": "तंत्रिका तंत्र की मूल संरचनात्मक इकाई क्या है?",
        "options_en": ["Nephron", "Neuron", "Alveoli", "Cell"],
        "options_hi": ["नेफ्रॉन", "न्यूरॉन", "एल्वियोली", "कोशिका"],
        "answer_en": "Neuron",
        "answer_hi": "न्यूरॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which part of the plant absorbs water and minerals from soil?",
        "question_hi": "पौधे का कौन सा भाग मिट्टी से पानी और खनिज अवशोषित करता है?",
        "options_en": ["Stem", "Leaves", "Roots", "Flowers"],
        "options_hi": ["तना", "पत्तियां", "जड़ें", "फूल"],
        "answer_en": "Roots",
        "answer_hi": "जड़ें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the process of cell division called?",
        "question_hi": "कोशिका विभाजन की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Metabolism", "Mitosis", "Respiration", "Photosynthesis"],
        "options_hi": ["चयापचय", "माइटोसिस", "श्वसन", "प्रकाश संश्लेषण"],
        "answer_en": "Mitosis",
        "answer_hi": "माइटोसिस",
        "attempted": false,
        "selected": ""
    },

    // Mathematics (21-40)
    {
        "num": 11,
        "question_en": "What is the value of π (pi) up to two decimal places?",
        "question_hi": "दो दशमलव स्थानों तक π (पाई) का मान क्या है?",
        "options_en": ["3.14", "3.16", "3.12", "3.18"],
        "options_hi": ["3.14", "3.16", "3.12", "3.18"],
        "answer_en": "3.14",
        "answer_hi": "3.14",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the sum of angles in a triangle?",
        "question_hi": "त्रिभुज में कोणों का योग क्या होता है?",
        "options_en": ["90°", "180°", "270°", "360°"],
        "options_hi": ["90°", "180°", "270°", "360°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the square root of 144?",
        "question_hi": "144 का वर्गमूल क्या है?",
        "options_en": ["12", "14", "16", "18"],
        "options_hi": ["12", "14", "16", "18"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the area of a circle with radius 7 cm?",
        "question_hi": "7 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या है?",
        "options_en": ["154 cm²", "44 cm²", "88 cm²", "22 cm²"],
        "options_hi": ["154 सेमी²", "44 सेमी²", "88 सेमी²", "22 सेमी²"],
        "answer_en": "154 cm²",
        "answer_hi": "154 सेमी²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the value of 5! (5 factorial)?",
        "question_hi": "5! (5 फैक्टोरियल) का मान क्या है?",
        "options_en": ["120", "60", "24", "720"],
        "options_hi": ["120", "60", "24", "720"],
        "answer_en": "120",
        "answer_hi": "120",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the next prime number after 7?",
        "question_hi": "7 के बाद अगली अभाज्य संख्या क्या है?",
        "options_en": ["8", "9", "10", "11"],
        "options_hi": ["8", "9", "10", "11"],
        "answer_en": "11",
        "answer_hi": "11",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the value of 3² + 4²?",
        "question_hi": "3² + 4² का मान क्या है?",
        "options_en": ["25", "7", "12", "5"],
        "options_hi": ["25", "7", "12", "5"],
        "answer_en": "25",
        "answer_hi": "25",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the mean of first five natural numbers?",
        "question_hi": "पहली पाँच प्राकृतिक संख्याओं का माध्य क्या है?",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the perimeter of a square with side 5 cm?",
        "question_hi": "5 सेमी भुजा वाले वर्ग का परिमाप क्या है?",
        "options_en": ["20 cm", "25 cm", "10 cm", "15 cm"],
        "options_hi": ["20 सेमी", "25 सेमी", "10 सेमी", "15 सेमी"],
        "answer_en": "20 cm",
        "answer_hi": "20 सेमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the value of log₁₀100?",
        "question_hi": "log₁₀100 का मान क्या है?",
        "options_en": ["1", "2", "10", "100"],
        "options_hi": ["1", "2", "10", "100"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },

    // Physics (41-60)
    {
        "num": 21,
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
        "num": 22,
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
        "num": 23,
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
        "num": 24,
        "question_en": "What type of lens is used to correct myopia?",
        "question_hi": "मायोपिया को सही करने के लिए किस प्रकार के लेंस का उपयोग किया जाता है?",
        "options_en": ["Convex Lens", "Concave Lens", "Bifocal Lens", "Cylindrical Lens"],
        "options_hi": ["उत्तल लेंस", "अवतल लेंस", "द्विफोकस लेंस", "बेलनाकार लेंस"],
        "answer_en": "Concave Lens",
        "answer_hi": "अवतल लेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the speed of light in vacuum?",
        "question_hi": "निर्वात में प्रकाश की गति क्या है?",
        "options_en": ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁵ m/s", "3 × 10¹⁰ m/s"],
        "options_hi": ["3 × 10⁸ मी/से", "3 × 10⁶ मी/से", "3 × 10⁵ मी/से", "3 × 10¹⁰ मी/से"],
        "answer_en": "3 × 10⁸ m/s",
        "answer_hi": "3 × 10⁸ मी/से",
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
        "num": 28,
        "question_en": "Which color of light has the longest wavelength?",
        "question_hi": "किस रंग के प्रकाश की तरंगदैर्ध्य सबसे लंबी होती है?",
        "options_en": ["Violet", "Blue", "Green", "Red"],
        "options_hi": ["बैंगनी", "नीला", "हरा", "लाल"],
        "answer_en": "Red",
        "answer_hi": "लाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the principle behind working of a rocket?",
        "question_hi": "रॉकेट के काम करने का सिद्धांत क्या है?",
        "options_en": ["Bernoulli's Principle", "Newton's Third Law", "Archimedes' Principle", "Pascal's Law"],
        "options_hi": ["बर्नौली का सिद्धांत", "न्यूटन का तीसरा नियम", "आर्किमिडीज का सिद्धांत", "पास्कल का नियम"],
        "answer_en": "Newton's Third Law",
        "answer_hi": "न्यूटन का तीसरा नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the unit of frequency?",
        "question_hi": "आवृत्ति की इकाई क्या है?",
        "options_en": ["Hertz", "Decibel", "Ohm", "Farad"],
        "options_hi": ["हर्ट्ज", "डेसिबल", "ओम", "फैराड"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },

    // Chemistry (61-80)
    {
        "num": 31,
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
        "num": 32,
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
        "num": 33,
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
        "num": 34,
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
        "num": 35,
        "question_en": "What is the common name of Sodium Bicarbonate?",
        "question_hi": "सोडियम बाइकार्बोनेट का सामान्य नाम क्या है?",
        "options_en": ["Baking Soda", "Washing Soda", "Baking Powder", "Caustic Soda"],
        "options_hi": ["बेकिंग सोडा", "धोने का सोडा", "बेकिंग पाउडर", "कास्टिक सोडा"],
        "answer_en": "Baking Soda",
        "answer_hi": "बेकिंग सोडा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
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
        "num": 37,
        "question_en": "What is the valency of Oxygen?",
        "question_hi": "ऑक्सीजन की संयोजकता क्या है?",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which acid is present in vinegar?",
        "question_hi": "सिरका में कौन सा अम्ल होता है?",
        "options_en": ["Hydrochloric Acid", "Sulfuric Acid", "Acetic Acid", "Citric Acid"],
        "options_hi": ["हाइड्रोक्लोरिक एसिड", "सल्फ्यूरिक एसिड", "एसिटिक एसिड", "सिट्रिक एसिड"],
        "answer_en": "Acetic Acid",
        "answer_hi": "एसिटिक एसिड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the atomic mass of Carbon?",
        "question_hi": "कार्बन का परमाणु द्रव्यमान क्या है?",
        "options_en": ["10", "12", "14", "16"],
        "options_hi": ["10", "12", "14", "16"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which gas is used in the Haber process?",
        "question_hi": "हैबर प्रक्रिया में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
        "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },

    // English Language (81-90)
    {
        "num": 41,
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
        "num": 42,
        "question_en": "Which of these is a preposition?",
        "question_hi": "इनमें से कौन सा पूर्वसर्ग है?",
        "options_en": ["Run", "Beautiful", "Under", "Quickly"],
        "options_hi": ["दौड़ना", "सुंदर", "नीचे", "तेजी से"],
        "answer_en": "Under",
        "answer_hi": "नीचे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the past tense of 'Go'?",
        "question_hi": "'Go' का भूतकाल क्या है?",
        "options_en": ["Goed", "Went", "Gone", "Going"],
        "options_hi": ["गोएड", "वेंट", "गॉन", "गोइंग"],
        "answer_en": "Went",
        "answer_hi": "वेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which word is an adjective?",
        "question_hi": "कौन सा शब्द विशेषण है?",
        "options_en": ["Happiness", "Beautiful", "Run", "Quickly"],
        "options_hi": ["खुशी", "सुंदर", "दौड़ना", "तेजी से"],
        "answer_en": "Beautiful",
        "answer_hi": "सुंदर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the plural of 'Child'?",
        "question_hi": "'Child' का बहुवचन क्या है?",
        "options_en": ["Childs", "Children", "Childes", "Childern"],
        "options_hi": ["चाइल्ड्स", "चिल्ड्रेन", "चाइल्डेस", "चाइल्डर्न"],
        "answer_en": "Children",
        "answer_hi": "चिल्ड्रेन",
        "attempted": false,
        "selected": ""
    },

    // Hindi Language (91-100)
    {
        "num": 46,
        "question_en": "What is the meaning of 'Vidyalaya' in English?",
        "question_hi": "'विद्यालय' का अंग्रेजी में क्या अर्थ है?",
        "options_en": ["Teacher", "Student", "School", "Book"],
        "options_hi": ["शिक्षक", "छात्र", "स्कूल", "किताब"],
        "answer_en": "School",
        "answer_hi": "स्कूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which of these is a 'Sarvanaam' (Pronoun) in Hindi?",
        "question_hi": "इनमें से कौन सा हिंदी में 'सर्वनाम' है?",
        "options_en": ["Khelna", "Sundar", "Yah", "Jaldi"],
        "options_hi": ["खेलना", "सुंदर", "यह", "जल्दी"],
        "answer_en": "Yah",
        "answer_hi": "यह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the feminine gender of 'Bakra' in Hindi?",
        "question_hi": "हिंदी में 'बकरा' का स्त्रीलिंग क्या है?",
        "options_en": ["Bakri", "Bakra", "Bakre", "Bakryan"],
        "options_hi": ["बकरी", "बकरा", "बकरे", "बकरियां"],
        "answer_en": "Bakri",
        "answer_hi": "बकरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which of these is a 'Kriya' (Verb) in Hindi?",
        "question_hi": "इनमें से कौन सा हिंदी में 'क्रिया' है?",
        "options_en": ["Kitab", "Lamba", "Padhna", "Sundar"],
        "options_hi": ["किताब", "लंबा", "पढ़ना", "सुंदर"],
        "answer_en": "Padhna",
        "answer_hi": "पढ़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the plural of 'Ladka' in Hindi?",
        "question_hi": "हिंदी में 'लड़का' का बहुवचन क्या है?",
        "options_en": ["Ladki", "Ladke", "Ladka", "Ladkian"],
        "options_hi": ["लड़की", "लड़के", "लड़का", "लड़कियां"],
        "answer_en": "Ladke",
        "answer_hi": "लड़के",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge (51-70)
    {
        "num": 51,
        "question_en": "Which country is known as the Land of Rising Sun?",
        "question_hi": "किस देश को उगते सूरज की भूमि के रूप में जाना जाता है?",
        "options_en": ["China", "Japan", "India", "Thailand"],
        "options_hi": ["चीन", "जापान", "भारत", "थाईलैंड"],
        "answer_en": "Japan",
        "answer_hi": "जापान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
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
        "num": 53,
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
        "num": 54,
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
        "num": 55,
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
        "num": 56,
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
        "num": 57,
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
        "num": 58,
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
        "num": 59,
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
        "num": 60,
        "question_en": "Who wrote the Indian National Anthem?",
        "question_hi": "भारत के राष्ट्रगान के लेखक कौन हैं?",
        "options_en": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Mahatma Gandhi"],
        "options_hi": ["रबींद्रनाथ टैगोर", "बंकिम चंद्र चटर्जी", "सरोजिनी नायडू", "महात्मा गांधी"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },

    // Mixed Subjects (71-100)
    {
        "num": 61,
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
        "num": 62,
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
        "num": 63,
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
        "num": 64,
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
        "num": 65,
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
        "num": 66,
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
        "num": 67,
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
        "num": 68,
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
        "num": 69,
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
        "num": 70,
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
        "num": 71,
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
        "num": 72,
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
        "num": 73,
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
        "num": 74,
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
        "num": 75,
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
        "num": 76,
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
        "num": 77,
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
        "num": 78,
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
        "num": 79,
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
        "num": 80,
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
        "num": 81,
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
        "num": 82,
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
        "num": 83,
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
        "num": 84,
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
        "num": 85,
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
        "num": 86,
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
        "num": 87,
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
        "num": 88,
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
        "num": 89,
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
        "num": 90,
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
        "num": 91,
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
        "num": 92,
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
        "num": 93,
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
        "num": 94,
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
        "num": 95,
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
        "num": 96,
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
        "num": 97,
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
        "num": 98,
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
        "num": 99,
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
        "num": 100,
        "question_en": "Which instrument is used to measure blood pressure?",
        "question_hi": "रक्तचाप मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Thermometer", "Stethoscope", "Sphygmomanometer", "Hygrometer"],
        "options_hi": ["थर्मामीटर", "स्टेथोस्कोप", "स्फिग्मोमैनोमीटर", "हाइग्रोमीटर"],
        "answer_en": "Sphygmomanometer",
        "answer_hi": "स्फिग्मोमैनोमीटर",
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