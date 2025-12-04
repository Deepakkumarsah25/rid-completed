const questions = [
    {
        "num": 1,
        "question_en": "What is the value of π (pi) approximately?",
        "question_hi": "π (पाई) का मान लगभग कितना होता है?",
        "options_en": ["3.14", "3.41", "2.71", "1.61"],
        "options_hi": ["3.14", "3.41", "2.71", "1.61"],
        "answer_en": "3.14",
        "answer_hi": "3.14",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Who wrote 'Romeo and Juliet'?",
        "question_hi": "'रोमियो और जूलियट' किसने लिखा?",
        "options_en": ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        "options_hi": ["चार्ल्स डिकेंस", "विलियम शेक्सपियर", "जेन ऑस्टेन", "मार्क ट्वेन"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
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
        "num": 4,
        "question_en": "Solve: 2x + 5 = 15",
        "question_hi": "हल करें: 2x + 5 = 15",
        "options_en": ["x = 5", "x = 10", "x = 7.5", "x = 2.5"],
        "options_hi": ["x = 5", "x = 10", "x = 7.5", "x = 2.5"],
        "answer_en": "x = 5",
        "answer_hi": "x = 5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which gas is known as 'Marsh Gas'?",
        "question_hi": "किस गैस को 'मार्श गैस' के नाम से जाना जाता है?",
        "options_en": ["Methane", "Ethane", "Propane", "Butane"],
        "options_hi": ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
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
        "num": 7,
        "question_en": "Who discovered penicillin?",
        "question_hi": "पेनिसिलिन की खोज किसने की?",
        "options_en": ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Robert Koch"],
        "options_hi": ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "मैरी क्यूरी", "रॉबर्ट कोच"],
        "answer_en": "Alexander Fleming",
        "answer_hi": "अलेक्जेंडर फ्लेमिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the chemical symbol for potassium?",
        "question_hi": "पोटैशियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["P", "Pt", "K", "Po"],
        "options_hi": ["P", "Pt", "K", "Po"],
        "answer_en": "K",
        "answer_hi": "K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
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
        "num": 10,
        "question_en": "What is the formula for area of a circle?",
        "question_hi": "वृत्त के क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["πr²", "2πr", "πd", "2πr²"],
        "options_hi": ["πr²", "2πr", "πd", "2πr²"],
        "answer_en": "πr²",
        "answer_hi": "πr²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which planet is known as the 'Giant Planet'?",
        "question_hi": "किस ग्रह को 'विशाल ग्रह' के नाम से जाना जाता है?",
        "options_en": ["Saturn", "Jupiter", "Uranus", "Neptune"],
        "options_hi": ["शनि", "बृहस्पति", "अरुण", "वरुण"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the past tense of 'go'?",
        "question_hi": "'go' का past tense क्या है?",
        "options_en": ["goed", "went", "gone", "going"],
        "options_hi": ["goed", "went", "gone", "going"],
        "answer_en": "went",
        "answer_hi": "went",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Who was the first President of India?",
        "question_hi": "भारत के प्रथम राष्ट्रपति कौन थे?",
        "options_en": ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "S. Radhakrishnan", "Zakir Hussain"],
        "options_hi": ["डॉ. राजेंद्र प्रसाद", "जवाहरलाल नेहरू", "एस. राधाकृष्णन", "जाकिर हुसैन"],
        "answer_en": "Dr. Rajendra Prasad",
        "answer_hi": "डॉ. राजेंद्र प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the value of sin 90°?",
        "question_hi": "sin 90° का मान क्या है?",
        "options_en": ["0", "1", "0.5", "√2/2"],
        "options_hi": ["0", "1", "0.5", "√2/2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which element has the highest electronegativity?",
        "question_hi": "किस तत्व की विद्युत ऋणात्मकता सबसे अधिक है?",
        "options_en": ["Fluorine", "Chlorine", "Oxygen", "Nitrogen"],
        "options_hi": ["फ्लोरीन", "क्लोरीन", "ऑक्सीजन", "नाइट्रोजन"],
        "answer_en": "Fluorine",
        "answer_hi": "फ्लोरीन",
        "attempted": false,
        "selected": ""
    },
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
        "num": 18,
        "question_en": "Solve: (a + b)² = ?",
        "question_hi": "हल करें: (a + b)² = ?",
        "options_en": ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "a² + b² + ab"],
        "options_hi": ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "a² + b² + ab"],
        "answer_en": "a² + 2ab + b²",
        "answer_hi": "a² + 2ab + b²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the pH value of pure water?",
        "question_hi": "शुद्ध जल का pH मान क्या होता है?",
        "options_en": ["5", "6", "7", "8"],
        "options_hi": ["5", "6", "7", "8"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Who painted the Mona Lisa?",
        "question_hi": "मोना लिसा की पेंटिंग किसने बनाई?",
        "options_en": ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        "options_hi": ["विंसेंट वैन गॉग", "लियोनार्डो दा विंची", "पाब्लो पिकासो", "माइकलएंजेलो"],
        "answer_en": "Leonardo da Vinci",
        "answer_hi": "लियोनार्डो दा विंची",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the chemical formula of ozone?",
        "question_hi": "ओजोन का रासायनिक सूत्र क्या है?",
        "options_en": ["O₂", "O₃", "O₄", "HO₃"],
        "options_hi": ["O₂", "O₃", "O₄", "HO₃"],
        "answer_en": "O₃",
        "answer_hi": "O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
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
        "num": 23,
        "question_en": "What is the value of 5! (5 factorial)?",
        "question_hi": "5! (5 फैक्टोरियल) का मान क्या है?",
        "options_en": ["60", "120", "24", "720"],
        "options_hi": ["60", "120", "24", "720"],
        "answer_en": "120",
        "answer_hi": "120",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which gas is produced during respiration?",
        "question_hi": "श्वसन के दौरान कौन सी गैस उत्पन्न होती है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the capital of Japan?",
        "question_hi": "जापान की राजधानी क्या है?",
        "options_en": ["Seoul", "Beijing", "Tokyo", "Osaka"],
        "options_hi": ["सियोल", "बीजिंग", "टोक्यो", "ओसाका"],
        "answer_en": "Tokyo",
        "answer_hi": "टोक्यो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Who developed the theory of relativity?",
        "question_hi": "सापेक्षता का सिद्धांत किसने विकसित किया?",
        "options_en": ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
        "options_hi": ["आइजैक न्यूटन", "अल्बर्ट आइंस्टीन", "स्टीफन हॉकिंग", "गैलीलियो गैलीली"],
        "answer_en": "Albert Einstein",
        "answer_hi": "अल्बर्ट आइंस्टीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the chemical symbol for silver?",
        "question_hi": "चांदी का रासायनिक प्रतीक क्या है?",
        "options_en": ["Si", "Ag", "Au", "Sv"],
        "options_hi": ["Si", "Ag", "Au", "Sv"],
        "answer_en": "Ag",
        "answer_hi": "Ag",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which is the longest bone in human body?",
        "question_hi": "मानव शरीर की सबसे लंबी हड्डी कौन सी है?",
        "options_en": ["Femur", "Tibia", "Fibula", "Humerus"],
        "options_hi": ["फीमर", "टिबिया", "फिबुला", "ह्यूमरस"],
        "answer_en": "Femur",
        "answer_hi": "फीमर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the value of log₁₀100?",
        "question_hi": "log₁₀100 का मान क्या है?",
        "options_en": ["1", "2", "10", "100"],
        "options_hi": ["1", "2", "10", "100"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
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
        "num": 31,
        "question_en": "What is the formula for Newton's second law of motion?",
        "question_hi": "न्यूटन के गति के दूसरे नियम का सूत्र क्या है?",
        "options_en": ["F = ma", "F = mv", "F = m/a", "F = m + a"],
        "options_hi": ["F = ma", "F = mv", "F = m/a", "F = m + a"],
        "answer_en": "F = ma",
        "answer_hi": "F = ma",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Who wrote the Indian National Anthem?",
        "question_hi": "भारत का राष्ट्रगान किसने लिखा?",
        "options_en": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Mahatma Gandhi"],
        "options_hi": ["रबींद्रनाथ टैगोर", "बंकिम चंद्र चटर्जी", "सरोजिनी नायडू", "महात्मा गांधी"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
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
        "num": 34,
        "question_en": "Which is the largest ocean?",
        "question_hi": "सबसे बड़ा महासागर कौन सा है?",
        "options_en": ["Atlantic", "Indian", "Pacific", "Arctic"],
        "options_hi": ["अटलांटिक", "हिंद", "प्रशांत", "आर्कटिक"],
        "answer_en": "Pacific",
        "answer_hi": "प्रशांत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the value of cos 60°?",
        "question_hi": "cos 60° का मान क्या है?",
        "options_en": ["1", "0.5", "√3/2", "0"],
        "options_hi": ["1", "0.5", "√3/2", "0"],
        "answer_en": "0.5",
        "answer_hi": "0.5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
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
        "num": 37,
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
        "num": 38,
        "question_en": "Who discovered gravity?",
        "question_hi": "गुरुत्वाकर्षण की खोज किसने की?",
        "options_en": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"],
        "options_hi": ["अल्बर्ट आइंस्टीन", "आइजैक न्यूटन", "गैलीलियो गैलीली", "स्टीफन हॉकिंग"],
        "answer_en": "Isaac Newton",
        "answer_hi": "आइजैक न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the chemical formula of water?",
        "question_hi": "पानी का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂O", "HO₂", "H₂O₂", "HO"],
        "options_hi": ["H₂O", "HO₂", "H₂O₂", "HO"],
        "answer_en": "H₂O",
        "answer_hi": "H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which is the fastest land animal?",
        "question_hi": "सबसे तेज भूमि जानवर कौन सा है?",
        "options_en": ["Cheetah", "Lion", "Tiger", "Horse"],
        "options_hi": ["चीता", "शेर", "बाघ", "घोड़ा"],
        "answer_en": "Cheetah",
        "answer_hi": "चीता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the value of 2³ × 3²?",
        "question_hi": "2³ × 3² का मान क्या है?",
        "options_en": ["36", "72", "54", "48"],
        "options_hi": ["36", "72", "54", "48"],
        "answer_en": "72",
        "answer_hi": "72",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Who was the first woman Prime Minister of India?",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
        "options_en": ["Sarojini Naidu", "Indira Gandhi", "Pratibha Patil", "Sonia Gandhi"],
        "options_hi": ["सरोजिनी नायडू", "इंदिरा गांधी", "प्रतिभा पाटिल", "सोनिया गांधी"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
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
        "num": 44,
        "question_en": "Which planet is known as the 'Red Planet'?",
        "question_hi": "किस ग्रह को 'लाल ग्रह' के नाम से जाना जाता है?",
        "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
        "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the formula for volume of a sphere?",
        "question_hi": "गोले के आयतन का सूत्र क्या है?",
        "options_en": ["4/3πr³", "πr²h", "2πr", "4πr²"],
        "options_hi": ["4/3πr³", "πr²h", "2πr", "4πr²"],
        "answer_en": "4/3πr³",
        "answer_hi": "4/3πr³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which gas is most abundant in Earth's atmosphere?",
        "question_hi": "पृथ्वी के वायुमंडल में कौन सी गैस सबसे अधिक मात्रा में है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "आर्गन"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the value of tan 45°?",
        "question_hi": "tan 45° का मान क्या है?",
        "options_en": ["0", "1", "√3", "1/√3"],
        "options_hi": ["0", "1", "√3", "1/√3"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Who wrote 'Geetanjali'?",
        "question_hi": "'गीतांजलि' किसने लिखी?",
        "options_en": ["Mahadevi Verma", "Rabindranath Tagore", "Premchand", "Harivansh Rai Bachchan"],
        "options_hi": ["महादेवी वर्मा", "रबींद्रनाथ टैगोर", "प्रेमचंद", "हरिवंश राय बच्चन"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the chemical symbol for gold?",
        "question_hi": "सोने का रासायनिक प्रतीक क्या है?",
        "options_en": ["Go", "Gd", "Au", "Ag"],
        "options_hi": ["Go", "Gd", "Au", "Ag"],
        "answer_en": "Au",
        "answer_hi": "Au",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which is the national bird of India?",
        "question_hi": "भारत का राष्ट्रीय पक्षी कौन सा है?",
        "options_en": ["Peacock", "Parrot", "Sparrow", "Eagle"],
        "options_hi": ["मोर", "तोता", "गौरैया", "गरुड़"],
        "answer_en": "Peacock",
        "answer_hi": "मोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the formula for acceleration?",
        "question_hi": "त्वरण का सूत्र क्या है?",
        "options_en": ["v/t", "d/t", "m×a", "F/m"],
        "options_hi": ["v/t", "d/t", "m×a", "F/m"],
        "answer_en": "v/t",
        "answer_hi": "v/t",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Who invented the telephone?",
        "question_hi": "टेलीफोन का आविष्कार किसने किया?",
        "options_en": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
        "options_hi": ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "निकोला टेस्ला", "गुग्लिल्मो मार्कोनी"],
        "answer_en": "Alexander Graham Bell",
        "answer_hi": "अलेक्जेंडर ग्राहम बेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
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
        "num": 54,
        "question_en": "Which is the largest desert in the world?",
        "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options_en": ["Sahara", "Arabian", "Gobi", "Kalahari"],
        "options_hi": ["सहारा", "अरब", "गोबी", "कालाहारी"],
        "answer_en": "Sahara",
        "answer_hi": "सहारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the value of 7 × 8 + 4 ÷ 2?",
        "question_hi": "7 × 8 + 4 ÷ 2 का मान क्या है?",
        "options_en": ["58", "60", "56", "54"],
        "options_hi": ["58", "60", "56", "54"],
        "answer_en": "58",
        "answer_hi": "58",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
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
        "num": 57,
        "question_en": "What is the capital of France?",
        "question_hi": "फ्रांस की राजधानी क्या है?",
        "options_en": ["London", "Berlin", "Paris", "Rome"],
        "options_hi": ["लंदन", "बर्लिन", "पेरिस", "रोम"],
        "answer_en": "Paris",
        "answer_hi": "पेरिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Who discovered X-rays?",
        "question_hi": "एक्स-रे की खोज किसने की?",
        "options_en": ["Marie Curie", "Wilhelm Roentgen", "Thomas Edison", "Alexander Fleming"],
        "options_hi": ["मैरी क्यूरी", "विल्हेम रोएंटजेन", "थॉमस एडिसन", "अलेक्जेंडर फ्लेमिंग"],
        "answer_en": "Wilhelm Roentgen",
        "answer_hi": "विल्हेम रोएंटजेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the chemical formula of carbon dioxide?",
        "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CO", "CO₂", "C₂O", "CO₃"],
        "options_hi": ["CO", "CO₂", "C₂O", "CO₃"],
        "answer_en": "CO₂",
        "answer_hi": "CO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which is the tallest mountain in the world?",
        "question_hi": "दुनिया की सबसे ऊंची पर्वत चोटी कौन सी है?",
        "options_en": ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
        "options_hi": ["K2", "माउंट एवरेस्ट", "कंचनजंगा", "मकालू"],
        "answer_en": "Mount Everest",
        "answer_hi": "माउंट एवरेस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the value of 15% of 200?",
        "question_hi": "200 का 15% कितना होता है?",
        "options_en": ["15", "30", "45", "60"],
        "options_hi": ["15", "30", "45", "60"],
        "answer_en": "30",
        "answer_hi": "30",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Who was the first Prime Minister of India?",
        "question_hi": "भारत के प्रथम प्रधानमंत्री कौन थे?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Dr. Rajendra Prasad"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल", "डॉ. राजेंद्र प्रसाद"],
        "answer_en": "Jawaharlal Nehru",
        "answer_hi": "जवाहरलाल नेहरू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the SI unit of power?",
        "question_hi": "शक्ति की SI इकाई क्या है?",
        "options_en": ["Joule", "Newton", "Watt", "Pascal"],
        "options_hi": ["जूल", "न्यूटन", "वाट", "पास्कल"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which planet is known as the 'Blue Planet'?",
        "question_hi": "किस ग्रह को 'नीला ग्रह' कहा जाता है?",
        "options_en": ["Earth", "Neptune", "Uranus", "Mars"],
        "options_hi": ["पृथ्वी", "वरुण", "अरुण", "मंगल"],
        "answer_en": "Earth",
        "answer_hi": "पृथ्वी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the formula for area of a triangle?",
        "question_hi": "त्रिभुज के क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["½ × base × height", "base × height", "½ × base + height", "base + height"],
        "options_hi": ["½ × आधार × ऊंचाई", "आधार × ऊंचाई", "½ × आधार + ऊंचाई", "आधार + ऊंचाई"],
        "answer_en": "½ × base × height",
        "answer_hi": "½ × आधार × ऊंचाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which gas is used in balloons to make them float?",
        "question_hi": "गुब्बारों को उड़ाने के लिए किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
        "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "हीलियम", "नाइट्रोजन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the value of sin 30°?",
        "question_hi": "sin 30° का मान क्या है?",
        "options_en": ["0", "0.5", "1", "√3/2"],
        "options_hi": ["0", "0.5", "1", "√3/2"],
        "answer_en": "0.5",
        "answer_hi": "0.5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Who wrote 'Mahabharata'?",
        "question_hi": "'महाभारत' किसने लिखी?",
        "options_en": ["Valmiki", "Ved Vyas", "Tulsidas", "Kalidas"],
        "options_hi": ["वाल्मीकि", "वेद व्यास", "तुलसीदास", "कालिदास"],
        "answer_en": "Ved Vyas",
        "answer_hi": "वेद व्यास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the chemical symbol for iron?",
        "question_hi": "लोहे का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ir", "Fe", "In", "Io"],
        "options_hi": ["Ir", "Fe", "In", "Io"],
        "answer_en": "Fe",
        "answer_hi": "Fe",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which is the national tree of India?",
        "question_hi": "भारत का राष्ट्रीय वृक्ष कौन सा है?",
        "options_en": ["Banyan", "Neem", "Peepal", "Mango"],
        "options_hi": ["बरगद", "नीम", "पीपल", "आम"],
        "answer_en": "Banyan",
        "answer_hi": "बरगद",
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
        "question_en": "Who invented the computer?",
        "question_hi": "कंप्यूटर का आविष्कार किसने किया?",
        "options_en": ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        "options_hi": ["चार्ल्स बैबेज", "एलन ट्यूरिंग", "बिल गेट्स", "स्टीव जॉब्स"],
        "answer_en": "Charles Babbage",
        "answer_hi": "चार्ल्स बैबेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
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
        "num": 74,
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
        "num": 75,
        "question_en": "What is the value of 3² + 4²?",
        "question_hi": "3² + 4² का मान क्या है?",
        "options_en": ["7", "12", "25", "49"],
        "options_hi": ["7", "12", "25", "49"],
        "answer_en": "25",
        "answer_hi": "25",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
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
        "num": 77,
        "question_en": "What is the capital of China?",
        "question_hi": "चीन की राजधानी क्या है?",
        "options_en": ["Shanghai", "Beijing", "Hong Kong", "Guangzhou"],
        "options_hi": ["शंघाई", "बीजिंग", "हांगकांग", "ग्वांगझोउ"],
        "answer_en": "Beijing",
        "answer_hi": "बीजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Who discovered America?",
        "question_hi": "अमेरिका की खोज किसने की?",
        "options_en": ["Christopher Columbus", "Vasco da Gama", "Marco Polo", "Ferdinand Magellan"],
        "options_hi": ["क्रिस्टोफर कोलंबस", "वास्को डी गामा", "मार्को पोलो", "फर्डिनेंड मैगलन"],
        "answer_en": "Christopher Columbus",
        "answer_hi": "क्रिस्टोफर कोलंबस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the chemical formula of ammonia?",
        "question_hi": "अमोनिया का रासायनिक सूत्र क्या है?",
        "options_en": ["NH₃", "NH₄", "N₂H₄", "HNO₃"],
        "options_hi": ["NH₃", "NH₄", "N₂H₄", "HNO₃"],
        "answer_en": "NH₃",
        "answer_hi": "NH₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which is the largest mammal?",
        "question_hi": "सबसे बड़ा स्तनपायी कौन सा है?",
        "options_en": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        "options_hi": ["हाथी", "ब्लू व्हेल", "जिराफ", "दरियाई घोड़ा"],
        "answer_en": "Blue Whale",
        "answer_hi": "ब्लू व्हेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the value of √144?",
        "question_hi": "√144 का मान क्या है?",
        "options_en": ["12", "14", "16", "18"],
        "options_hi": ["12", "14", "16", "18"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Who was the first woman to win Nobel Prize?",
        "question_hi": "नोबेल पुरस्कार जीतने वाली पहली महिला कौन थीं?",
        "options_en": ["Marie Curie", "Mother Teresa", "Rosalind Franklin", "Dorothy Hodgkin"],
        "options_hi": ["मैरी क्यूरी", "मदर टेरेसा", "रोजालिंड फ्रैंकलिन", "डोरोथी हॉजकिन"],
        "answer_en": "Marie Curie",
        "answer_hi": "मैरी क्यूरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
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
        "num": 84,
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
        "num": 85,
        "question_en": "What is the formula for perimeter of a rectangle?",
        "question_hi": "आयत के परिमाप का सूत्र क्या है?",
        "options_en": ["2(l + b)", "l × b", "l + b", "4 × side"],
        "options_hi": ["2(l + b)", "l × b", "l + b", "4 × भुजा"],
        "answer_en": "2(l + b)",
        "answer_hi": "2(l + b)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
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
        "num": 87,
        "question_en": "What is the value of cos 90°?",
        "question_hi": "cos 90° का मान क्या है?",
        "options_en": ["0", "1", "0.5", "√3/2"],
        "options_hi": ["0", "1", "0.5", "√3/2"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Who wrote 'Ramcharitmanas'?",
        "question_hi": "'रामचरितमानस' किसने लिखी?",
        "options_en": ["Tulsidas", "Surdas", "Kabir", "Mirabai"],
        "options_hi": ["तुलसीदास", "सूरदास", "कबीर", "मीराबाई"],
        "answer_en": "Tulsidas",
        "answer_hi": "तुलसीदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the chemical symbol for sodium?",
        "question_hi": "सोडियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["So", "Sd", "Na", "Nm"],
        "options_hi": ["So", "Sd", "Na", "Nm"],
        "answer_en": "Na",
        "answer_hi": "Na",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which is the national aquatic animal of India?",
        "question_hi": "भारत का राष्ट्रीय जलीय जानवर कौन सा है?",
        "options_en": ["Dolphin", "River Dolphin", "Whale", "Shark"],
        "options_hi": ["डॉल्फिन", "रिवर डॉल्फिन", "व्हेल", "शार्क"],
        "answer_en": "River Dolphin",
        "answer_hi": "रिवर डॉल्फिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the formula for speed?",
        "question_hi": "गति का सूत्र क्या है?",
        "options_en": ["distance/time", "time/distance", "distance × time", "distance + time"],
        "options_hi": ["दूरी/समय", "समय/दूरी", "दूरी × समय", "दूरी + समय"],
        "answer_en": "distance/time",
        "answer_hi": "दूरी/समय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Who invented the light bulb?",
        "question_hi": "बल्ब का आविष्कार किसने किया?",
        "options_en": ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Benjamin Franklin"],
        "options_hi": ["थॉमस एडिसन", "निकोला टेस्ला", "अलेक्जेंडर ग्राहम बेल", "बेंजामिन फ्रैंकलिन"],
        "answer_en": "Thomas Edison",
        "answer_hi": "थॉमस एडिसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the chemical formula of baking soda?",
        "question_hi": "बेकिंग सोडा का रासायनिक सूत्र क्या है?",
        "options_en": ["Na₂CO₃", "NaHCO₃", "NaOH", "NaCl"],
        "options_hi": ["Na₂CO₃", "NaHCO₃", "NaOH", "NaCl"],
        "answer_en": "NaHCO₃",
        "answer_hi": "NaHCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
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
        "num": 95,
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
        "num": 96,
        "question_en": "Which gas is used in welding?",
        "question_hi": "वेल्डिंग में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Acetylene", "Both A and B", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "एसिटिलीन", "A और B दोनों", "हाइड्रोजन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the capital of Russia?",
        "question_hi": "रूस की राजधानी क्या है?",
        "options_en": ["St. Petersburg", "Moscow", "Kiev", "Warsaw"],
        "options_hi": ["सेंट पीटर्सबर्ग", "मॉस्को", "कीव", "वारसॉ"],
        "answer_en": "Moscow",
        "answer_hi": "मॉस्को",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Who discovered the circulation of blood?",
        "question_hi": "रक्त संचार की खोज किसने की?",
        "options_en": ["William Harvey", "Louis Pasteur", "Robert Koch", "Alexander Fleming"],
        "options_hi": ["विलियम हार्वे", "लुई पाश्चर", "रॉबर्ट कोच", "अलेक्जेंडर फ्लेमिंग"],
        "answer_en": "William Harvey",
        "answer_hi": "विलियम हार्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the chemical formula of vinegar?",
        "question_hi": "सिरका का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₃COOH", "H₂SO₄", "HCl", "HNO₃"],
        "options_hi": ["CH₃COOH", "H₂SO₄", "HCl", "HNO₃"],
        "answer_en": "CH₃COOH",
        "answer_hi": "CH₃COOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which is the fastest bird?",
        "question_hi": "सबसे तेज उड़ने वाला पक्षी कौन सा है?",
        "options_en": ["Eagle", "Peregrine Falcon", "Ostrich", "Hummingbird"],
        "options_hi": ["गरुड़", "पेरेग्रिन फाल्कन", "शुतुरमुर्ग", "हमिंगबर्ड"],
        "answer_en": "Peregrine Falcon",
        "answer_hi": "पेरेग्रिन फाल्कन",
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