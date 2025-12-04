const questions = [
    {
        "num": 1,
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
        "num": 2,
        "question_en": "What is the value of 2 + 2 × 2?",
        "question_hi": "2 + 2 × 2 का मान क्या है?",
        "options_en": ["6", "8", "4", "10"],
        "options_hi": ["6", "8", "4", "10"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which organ pumps blood in human body?",
        "question_hi": "मानव शरीर में कौन सा अंग रक्त पंप करता है?",
        "options_en": ["Lungs", "Heart", "Liver", "Kidneys"],
        "options_hi": ["फेफड़े", "हृदय", "यकृत", "गुर्दे"],
        "answer_en": "Heart",
        "answer_hi": "हृदय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the SI unit of length?",
        "question_hi": "लंबाई की SI इकाई क्या है?",
        "options_en": ["Meter", "Centimeter", "Kilometer", "Millimeter"],
        "options_hi": ["मीटर", "सेंटीमीटर", "किलोमीटर", "मिलीमीटर"],
        "answer_en": "Meter",
        "answer_hi": "मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Who wrote 'Ramcharitmanas'?",
        "question_hi": "'रामचरितमानस' किसने लिखा?",
        "options_en": ["Tulsidas", "Surdas", "Kabir", "Mirabai"],
        "options_hi": ["तुलसीदास", "सूरदास", "कबीर", "मीराबाई"],
        "answer_en": "Tulsidas",
        "answer_hi": "तुलसीदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which is the largest ocean on Earth?",
        "question_hi": "पृथ्वी पर सबसे बड़ा महासागर कौन सा है?",
        "options_en": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
        "answer_en": "Pacific Ocean",
        "answer_hi": "प्रशांत महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the process of plants making food called?",
        "question_hi": "पौधों द्वारा भोजन बनाने की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
        "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "पाचन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is 15% of 200?",
        "question_hi": "200 का 15% क्या है?",
        "options_en": ["15", "20", "30", "25"],
        "options_hi": ["15", "20", "30", "25"],
        "answer_en": "30",
        "answer_hi": "30",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
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
        "num": 10,
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
        "num": 11,
        "question_en": "Who wrote 'Mahabharata'?",
        "question_hi": "'महाभारत' किसने लिखा?",
        "options_en": ["Valmiki", "Ved Vyas", "Tulsidas", "Kalidas"],
        "options_hi": ["वाल्मीकि", "वेद व्यास", "तुलसीदास", "कालिदास"],
        "answer_en": "Ved Vyas",
        "answer_hi": "वेद व्यास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which planet is known as Red Planet?",
        "question_hi": "कौन सा ग्रह लाल ग्रह के नाम से जाना जाता है?",
        "options_en": ["Mars", "Venus", "Jupiter", "Mercury"],
        "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "बुध"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which vitamin is obtained from sunlight?",
        "question_hi": "सूर्य के प्रकाश से कौन सा विटामिन प्राप्त होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the area of a square with side 5 cm?",
        "question_hi": "5 सेमी भुजा वाले वर्ग का क्षेत्रफल क्या है?",
        "options_en": ["20 cm²", "25 cm²", "30 cm²", "15 cm²"],
        "options_hi": ["20 सेमी²", "25 सेमी²", "30 सेमी²", "15 सेमी²"],
        "answer_en": "25 cm²",
        "answer_hi": "25 सेमी²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
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
        "num": 16,
        "question_en": "What is the chemical formula of Sugar?",
        "question_hi": "चीनी का रासायनिक सूत्र क्या है?",
        "options_en": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
        "options_hi": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
        "answer_en": "C₁₂H₂₂O₁₁",
        "answer_hi": "C₁₂H₂₂O₁₁",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Who wrote 'Geetanjali'?",
        "question_hi": "'गीतांजलि' किसने लिखी?",
        "options_en": ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Sarojini Naidu", "Mahadevi Verma"],
        "options_hi": ["रबींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "सरोजिनी नायडू", "महादेवी वर्मा"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
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
        "num": 19,
        "question_en": "What is the main function of roots in plants?",
        "question_hi": "पौधों में जड़ों का मुख्य कार्य क्या है?",
        "options_en": ["Photosynthesis", "Absorption of water", "Reproduction", "Support"],
        "options_hi": ["प्रकाश संश्लेषण", "जल का अवशोषण", "प्रजनन", "सहायता"],
        "answer_en": "Absorption of water",
        "answer_hi": "जल का अवशोषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is 3² + 4²?",
        "question_hi": "3² + 4² का मान क्या है?",
        "options_en": ["7", "12", "25", "5"],
        "options_hi": ["7", "12", "25", "5"],
        "answer_en": "25",
        "answer_hi": "25",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the unit of force?",
        "question_hi": "बल की इकाई क्या है?",
        "options_en": ["Joule", "Watt", "Newton", "Pascal"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Newton",
        "answer_hi": "न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
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
        "num": 23,
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
        "num": 24,
        "question_en": "Which is the longest river in India?",
        "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
        "options_hi": ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
        "answer_en": "Ganga",
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which gas do plants release during photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण के दौरान पौधे कौन सी गैस छोड़ते हैं?",
        "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the value of 7 × 8?",
        "question_hi": "7 × 8 का मान क्या है?",
        "options_en": ["54", "56", "58", "60"],
        "options_hi": ["54", "56", "58", "60"],
        "answer_en": "56",
        "answer_hi": "56",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
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
        "num": 28,
        "question_en": "What is the chemical formula of Common Salt?",
        "question_hi": "साधारण नमक का रासायनिक सूत्र क्या है?",
        "options_en": ["NaCl", "KCl", "CaCO₃", "NaOH"],
        "options_hi": ["NaCl", "KCl", "CaCO₃", "NaOH"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Who wrote 'Meghdoot'?",
        "question_hi": "'मेघदूत' किसने लिखा?",
        "options_en": ["Kalidasa", "Bhavabhuti", "Bhasa", "Sudraka"],
        "options_hi": ["कालिदास", "भवभूति", "भास", "शूद्रक"],
        "answer_en": "Kalidasa",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
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
        "num": 31,
        "question_en": "What is the process of water turning into vapor called?",
        "question_hi": "पानी के वाष्प में बदलने की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Condensation", "Evaporation", "Sublimation", "Precipitation"],
        "options_hi": ["संघनन", "वाष्पीकरण", "उर्ध्वपातन", "वर्षण"],
        "answer_en": "Evaporation",
        "answer_hi": "वाष्पीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is 144 ÷ 12?",
        "question_hi": "144 ÷ 12 का मान क्या है?",
        "options_en": ["10", "11", "12", "13"],
        "options_hi": ["10", "11", "12", "13"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
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
        "num": 34,
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
        "num": 35,
        "question_en": "Who wrote 'Shakuntalam'?",
        "question_hi": "'शकुंतलम' किसने लिखा?",
        "options_en": ["Kalidasa", "Bhavabhuti", "Bhasa", "Sudraka"],
        "options_hi": ["कालिदास", "भवभूति", "भास", "शूद्रक"],
        "answer_en": "Kalidasa",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which is the largest state in India by area?",
        "question_hi": "क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य कौन सा है?",
        "options_en": ["Uttar Pradesh", "Maharashtra", "Rajasthan", "Madhya Pradesh"],
        "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान", "मध्य प्रदेश"],
        "answer_en": "Rajasthan",
        "answer_hi": "राजस्थान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
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
        "num": 38,
        "question_en": "What is 25% of 80?",
        "question_hi": "80 का 25% क्या है?",
        "options_en": ["15", "20", "25", "30"],
        "options_hi": ["15", "20", "25", "30"],
        "answer_en": "20",
        "answer_hi": "20",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the unit of electric charge?",
        "question_hi": "विद्युत आवेश की इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Coulomb", "Ohm"],
        "options_hi": ["वोल्ट", "एम्पियर", "कूलम्ब", "ओम"],
        "answer_en": "Coulomb",
        "answer_hi": "कूलम्ब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the chemical formula of Carbon Monoxide?",
        "question_hi": "कार्बन मोनोऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CO", "CO₂", "C₂O", "CO₃"],
        "options_hi": ["CO", "CO₂", "C₂O", "CO₃"],
        "answer_en": "CO",
        "answer_hi": "CO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Who wrote 'Raghuvansham'?",
        "question_hi": "'रघुवंशम' किसने लिखा?",
        "options_en": ["Kalidasa", "Bhavabhuti", "Bhasa", "Sudraka"],
        "options_hi": ["कालिदास", "भवभूति", "भास", "शूद्रक"],
        "answer_en": "Kalidasa",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which is the smallest ocean?",
        "question_hi": "सबसे छोटा महासागर कौन सा है?",
        "options_en": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Southern Ocean"],
        "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर", "दक्षिणी महासागर"],
        "answer_en": "Arctic Ocean",
        "answer_hi": "आर्कटिक महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the function of chlorophyll in plants?",
        "question_hi": "पौधों में क्लोरोफिल का कार्य क्या है?",
        "options_en": ["Water absorption", "Photosynthesis", "Support", "Reproduction"],
        "options_hi": ["जल अवशोषण", "प्रकाश संश्लेषण", "सहायता", "प्रजनन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the perimeter of a rectangle with length 5 cm and width 3 cm?",
        "question_hi": "5 सेमी लंबाई और 3 सेमी चौड़ाई वाले आयत का परिमाप क्या है?",
        "options_en": ["15 cm", "16 cm", "20 cm", "25 cm"],
        "options_hi": ["15 सेमी", "16 सेमी", "20 सेमी", "25 सेमी"],
        "answer_en": "16 cm",
        "answer_hi": "16 सेमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the unit of resistance?",
        "question_hi": "प्रतिरोध की इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Ohm",
        "answer_hi": "ओम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the chemical symbol for Potassium?",
        "question_hi": "पोटैशियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Po", "Pt", "K", "Ka"],
        "options_hi": ["Po", "Pt", "K", "Ka"],
        "answer_en": "K",
        "answer_hi": "K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Who wrote 'Mudra Rakshas'?",
        "question_hi": "'मुद्राराक्षस' किसने लिखा?",
        "options_en": ["Vishakhadatta", "Kalidasa", "Bhavabhuti", "Bhasa"],
        "options_hi": ["विशाखदत्त", "कालिदास", "भवभूति", "भास"],
        "answer_en": "Vishakhadatta",
        "answer_hi": "विशाखदत्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which is the national bird of India?",
        "question_hi": "भारत का राष्ट्रीय पक्षी कौन सा है?",
        "options_en": ["Peacock", "Parrot", "Sparrow", "Crow"],
        "options_hi": ["मोर", "तोता", "गौरैया", "कौआ"],
        "answer_en": "Peacock",
        "answer_hi": "मोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the process of seed growing into a plant called?",
        "question_hi": "बीज के पौधे में उगने की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Germination", "Pollination", "Fertilization", "Photosynthesis"],
        "options_hi": ["अंकुरण", "परागण", "निषेचन", "प्रकाश संश्लेषण"],
        "answer_en": "Germination",
        "answer_hi": "अंकुरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is 9 × 7?",
        "question_hi": "9 × 7 का मान क्या है?",
        "options_en": ["56", "63", "72", "81"],
        "options_hi": ["56", "63", "72", "81"],
        "answer_en": "63",
        "answer_hi": "63",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the unit of pressure?",
        "question_hi": "दबाव की इकाई क्या है?",
        "options_en": ["Newton", "Pascal", "Joule", "Watt"],
        "options_hi": ["न्यूटन", "पास्कल", "जूल", "वाट"],
        "answer_en": "Pascal",
        "answer_hi": "पास्कल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
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
        "num": 53,
        "question_en": "Who wrote 'Kumarasambhava'?",
        "question_hi": "'कुमारसंभव' किसने लिखा?",
        "options_en": ["Kalidasa", "Bhavabhuti", "Bhasa", "Sudraka"],
        "options_hi": ["कालिदास", "भवभूति", "भास", "शूद्रक"],
        "answer_en": "Kalidasa",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which is the highest mountain peak in the world?",
        "question_hi": "दुनिया की सबसे ऊंची पर्वत चोटी कौन सी है?",
        "options_en": ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
        "options_hi": ["K2", "माउंट एवरेस्ट", "कंचनजंगा", "मकालू"],
        "answer_en": "Mount Everest",
        "answer_hi": "माउंट एवरेस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which gas is essential for respiration?",
        "question_hi": "श्वसन के लिए कौन सी गैस आवश्यक है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is 15 × 4?",
        "question_hi": "15 × 4 का मान क्या है?",
        "options_en": ["50", "55", "60", "65"],
        "options_hi": ["50", "55", "60", "65"],
        "answer_en": "60",
        "answer_hi": "60",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
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
        "num": 58,
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
        "num": 59,
        "question_en": "Who wrote 'Malavikagnimitram'?",
        "question_hi": "'मालविकाग्निमित्रम' किसने लिखा?",
        "options_en": ["Kalidasa", "Bhavabhuti", "Bhasa", "Sudraka"],
        "options_hi": ["कालिदास", "भवभूति", "भास", "शूद्रक"],
        "answer_en": "Kalidasa",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which is the national flower of India?",
        "question_hi": "भारत का राष्ट्रीय फूल कौन सा है?",
        "options_en": ["Rose", "Lotus", "Sunflower", "Marigold"],
        "options_hi": ["गुलाब", "कमल", "सूरजमुखी", "गेंदा"],
        "answer_en": "Lotus",
        "answer_hi": "कमल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the process of water vapor turning into liquid called?",
        "question_hi": "जल वाष्प के तरल में बदलने की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Evaporation", "Condensation", "Sublimation", "Precipitation"],
        "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "वर्षण"],
        "answer_en": "Condensation",
        "answer_hi": "संघनन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is 8²?",
        "question_hi": "8² का मान क्या है?",
        "options_en": ["16", "64", "32", "48"],
        "options_hi": ["16", "64", "32", "48"],
        "answer_en": "64",
        "answer_hi": "64",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the unit of work?",
        "question_hi": "कार्य की इकाई क्या है?",
        "options_en": ["Joule", "Watt", "Newton", "Pascal"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the chemical formula of Ammonia?",
        "question_hi": "अमोनिया का रासायनिक सूत्र क्या है?",
        "options_en": ["NH₃", "NH₄", "NO₂", "N₂O"],
        "options_hi": ["NH₃", "NH₄", "NO₂", "N₂O"],
        "answer_en": "NH₃",
        "answer_hi": "NH₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Who wrote 'Swapnavasavadatta'?",
        "question_hi": "'स्वप्नवासवदत्ता' किसने लिखा?",
        "options_en": ["Bhasa", "Kalidasa", "Bhavabhuti", "Sudraka"],
        "options_hi": ["भास", "कालिदास", "भवभूति", "शूद्रक"],
        "answer_en": "Bhasa",
        "answer_hi": "भास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which is the largest desert in the world?",
        "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options_en": ["Sahara", "Gobi", "Kalahari", "Thar"],
        "options_hi": ["सहारा", "गोबी", "कालाहारी", "थार"],
        "answer_en": "Sahara",
        "answer_hi": "सहारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the function of stomata in plants?",
        "question_hi": "पौधों में स्टोमेटा का कार्य क्या है?",
        "options_en": ["Water absorption", "Gas exchange", "Support", "Reproduction"],
        "options_hi": ["जल अवशोषण", "गैस विनिमय", "सहायता", "प्रजनन"],
        "answer_en": "Gas exchange",
        "answer_hi": "गैस विनिमय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is 125 ÷ 5?",
        "question_hi": "125 ÷ 5 का मान क्या है?",
        "options_en": ["20", "25", "30", "35"],
        "options_hi": ["20", "25", "30", "35"],
        "answer_en": "25",
        "answer_hi": "25",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the unit of temperature?",
        "question_hi": "तापमान की इकाई क्या है?",
        "options_en": ["Kelvin", "Celsius", "Fahrenheit", "All of the above"],
        "options_hi": ["केल्विन", "सेल्सियस", "फारेनहाइट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
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
        "num": 71,
        "question_en": "Who wrote 'Uttar Ramcharit'?",
        "question_hi": "'उत्तर रामचरित' किसने लिखा?",
        "options_en": ["Bhavabhuti", "Kalidasa", "Valmiki", "Tulsidas"],
        "options_hi": ["भवभूति", "कालिदास", "वाल्मीकि", "तुलसीदास"],
        "answer_en": "Bhavabhuti",
        "answer_hi": "भवभूति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which is the national tree of India?",
        "question_hi": "भारत का राष्ट्रीय वृक्ष कौन सा है?",
        "options_en": ["Banyan", "Neem", "Mango", "Peepal"],
        "options_hi": ["बरगद", "नीम", "आम", "पीपल"],
        "answer_en": "Banyan",
        "answer_hi": "बरगद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the process of transfer of pollen called?",
        "question_hi": "पराग के स्थानांतरण की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Germination", "Pollination", "Fertilization", "Photosynthesis"],
        "options_hi": ["अंकुरण", "परागण", "निषेचन", "प्रकाश संश्लेषण"],
        "answer_en": "Pollination",
        "answer_hi": "परागण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is 11 × 12?",
        "question_hi": "11 × 12 का मान क्या है?",
        "options_en": ["121", "132", "144", "156"],
        "options_hi": ["121", "132", "144", "156"],
        "answer_en": "132",
        "answer_hi": "132",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the unit of electric potential?",
        "question_hi": "विद्युत विभव की इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Volt",
        "answer_hi": "वोल्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the chemical formula of Nitric Acid?",
        "question_hi": "नाइट्रिक एसिड का रासायनिक सूत्र क्या है?",
        "options_en": ["HNO₃", "HNO₂", "H₂NO₃", "H₃NO₄"],
        "options_hi": ["HNO₃", "HNO₂", "H₂NO₃", "H₃NO₄"],
        "answer_en": "HNO₃",
        "answer_hi": "HNO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Who wrote 'Kadambari'?",
        "question_hi": "'कादम्बरी' किसने लिखी?",
        "options_en": ["Banabhatta", "Kalidasa", "Bhavabhuti", "Bhasa"],
        "options_hi": ["बाणभट्ट", "कालिदास", "भवभूति", "भास"],
        "answer_en": "Banabhatta",
        "answer_hi": "बाणभट्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which is the national river of India?",
        "question_hi": "भारत की राष्ट्रीय नदी कौन सी है?",
        "options_en": ["Yamuna", "Ganga", "Brahmaputra", "Godavari"],
        "options_hi": ["यमुना", "गंगा", "ब्रह्मपुत्र", "गोदावरी"],
        "answer_en": "Ganga",
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the process of plants releasing water vapor called?",
        "question_hi": "पौधों द्वारा जल वाष्प छोड़ने की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Photosynthesis", "Transpiration", "Respiration", "Evaporation"],
        "options_hi": ["प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "श्वसन", "वाष्पीकरण"],
        "answer_en": "Transpiration",
        "answer_hi": "वाष्पोत्सर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is 13 × 5?",
        "question_hi": "13 × 5 का मान क्या है?",
        "options_en": ["55", "60", "65", "70"],
        "options_hi": ["55", "60", "65", "70"],
        "answer_en": "65",
        "answer_hi": "65",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the unit of magnetic field?",
        "question_hi": "चुंबकीय क्षेत्र की इकाई क्या है?",
        "options_en": ["Tesla", "Weber", "Henry", "Gauss"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
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
        "num": 83,
        "question_en": "Who wrote 'Ritusamhara'?",
        "question_hi": "'ऋतुसंहार' किसने लिखा?",
        "options_en": ["Kalidasa", "Bharavi", "Magha", "Bhavabhuti"],
        "options_hi": ["कालिदास", "भारवि", "माघ", "भवभूति"],
        "answer_en": "Kalidasa",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which is the national aquatic animal of India?",
        "question_hi": "भारत का राष्ट्रीय जलीय जीव कौन सा है?",
        "options_en": ["Dolphin", "Crocodile", "River Dolphin", "Turtle"],
        "options_hi": ["डॉल्फिन", "मगरमच्छ", "रिवर डॉल्फिन", "कछुआ"],
        "answer_en": "River Dolphin",
        "answer_hi": "रिवर डॉल्फिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the process of breaking down food called?",
        "question_hi": "भोजन को तोड़ने की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Digestion", "Respiration", "Photosynthesis", "Transpiration"],
        "options_hi": ["पाचन", "श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन"],
        "answer_en": "Digestion",
        "answer_hi": "पाचन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is 17 × 3?",
        "question_hi": "17 × 3 का मान क्या है?",
        "options_en": ["41", "51", "61", "71"],
        "options_hi": ["41", "51", "61", "71"],
        "answer_en": "51",
        "answer_hi": "51",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the unit of capacitance?",
        "question_hi": "धारिता की इकाई क्या है?",
        "options_en": ["Farad", "Henry", "Weber", "Tesla"],
        "options_hi": ["फैरड", "हेनरी", "वेबर", "टेस्ला"],
        "answer_en": "Farad",
        "answer_hi": "फैरड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
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
        "num": 89,
        "question_en": "Who wrote 'Panchatantra'?",
        "question_hi": "'पंचतंत्र' किसने लिखा?",
        "options_en": ["Vishnu Sharma", "Kalidasa", "Bhavabhuti", "Bhasa"],
        "options_hi": ["विष्णु शर्मा", "कालिदास", "भवभूति", "भास"],
        "answer_en": "Vishnu Sharma",
        "answer_hi": "विष्णु शर्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which is the national fruit of India?",
        "question_hi": "भारत का राष्ट्रीय फल कौन सा है?",
        "options_en": ["Apple", "Mango", "Banana", "Orange"],
        "options_hi": ["सेब", "आम", "केला", "संतरा"],
        "answer_en": "Mango",
        "answer_hi": "आम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the process of seed dispersal by wind called?",
        "question_hi": "हवा द्वारा बीज प्रसार की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Anemochory", "Hydrochory", "Zoochory", "Autochory"],
        "options_hi": ["एनीमोकोरी", "हाइड्रोकोरी", "जूकोरी", "ऑटोकोरी"],
        "answer_en": "Anemochory",
        "answer_hi": "एनीमोकोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is 19 × 4?",
        "question_hi": "19 × 4 का मान क्या है?",
        "options_en": ["66", "76", "86", "96"],
        "options_hi": ["66", "76", "86", "96"],
        "answer_en": "76",
        "answer_hi": "76",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the unit of inductance?",
        "question_hi": "प्रेरकत्व की इकाई क्या है?",
        "options_en": ["Henry", "Farad", "Weber", "Tesla"],
        "options_hi": ["हेनरी", "फैरड", "वेबर", "टेस्ला"],
        "answer_en": "Henry",
        "answer_hi": "हेनरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
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
        "num": 95,
        "question_en": "Who wrote 'Arthashastra'?",
        "question_hi": "'अर्थशास्त्र' किसने लिखा?",
        "options_en": ["Chanakya", "Panini", "Aryabhatta", "Varahamihira"],
        "options_hi": ["चाणक्य", "पाणिनि", "आर्यभट्ट", "वराहमिहिर"],
        "answer_en": "Chanakya",
        "answer_hi": "चाणक्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which is the national song of India?",
        "question_hi": "भारत का राष्ट्रीय गीत कौन सा है?",
        "options_en": ["Jana Gana Mana", "Vande Mataram", "Sare Jahan Se Achha", "Maa Tujhe Salaam"],
        "options_hi": ["जन गण मन", "वंदे मातरम", "सारे जहां से अच्छा", "माँ तुझे सलाम"],
        "answer_en": "Vande Mataram",
        "answer_hi": "वंदे मातरम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the process of cell division called?",
        "question_hi": "कोशिका विभाजन की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Mitosis", "Meiosis", "Both A and B", "None of the above"],
        "options_hi": ["माइटोसिस", "मियोसिस", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is 25 × 4?",
        "question_hi": "25 × 4 का मान क्या है?",
        "options_en": ["90", "95", "100", "105"],
        "options_hi": ["90", "95", "100", "105"],
        "answer_en": "100",
        "answer_hi": "100",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the unit of luminous intensity?",
        "question_hi": "ज्योति तीव्रता की इकाई क्या है?",
        "options_en": ["Candela", "Lumen", "Lux", "Watt"],
        "options_hi": ["कैंडेला", "लुमेन", "लक्स", "वाट"],
        "answer_en": "Candela",
        "answer_hi": "कैंडेला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the chemical formula of Hydrogen Peroxide?",
        "question_hi": "हाइड्रोजन पेरोक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂O", "H₂O₂", "HO₂", "H₃O"],
        "options_hi": ["H₂O", "H₂O₂", "HO₂", "H₃O"],
        "answer_en": "H₂O₂",
        "answer_hi": "H₂O₂",
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