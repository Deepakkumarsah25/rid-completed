const questions = [
    {
        "num": 1,
        "question_en": "What is the chemical formula of Sulfuric Acid?",
        "question_hi": "सल्फ्यूरिक एसिड का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂SO₃", "H₂SO₄", "H₃SO₄", "HSO₄"],
        "options_hi": ["H₂SO₃", "H₂SO₄", "H₃SO₄", "HSO₄"],
        "answer_en": "H₂SO₄",
        "answer_hi": "H₂SO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Who wrote the famous play 'Romeo and Juliet'?",
        "question_hi": "प्रसिद्ध नाटक 'रोमियो और जूलियट' किसने लिखा?",
        "options_en": ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        "options_hi": ["चार्ल्स डिकेंस", "विलियम शेक्सपियर", "जेन ऑस्टेन", "मार्क ट्वेन"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the value of π (pi) up to two decimal places?",
        "question_hi": "π (पाई) का मान दो दशमलव स्थानों तक क्या है?",
        "options_en": ["3.14", "3.41", "3.16", "3.12"],
        "options_hi": ["3.14", "3.41", "3.16", "3.12"],
        "answer_en": "3.14",
        "answer_hi": "3.14",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which organ in human body produces insulin?",
        "question_hi": "मानव शरीर में कौन सा अंग इंसुलिन उत्पन्न करता है?",
        "options_en": ["Liver", "Pancreas", "Kidney", "Stomach"],
        "options_hi": ["यकृत", "अग्न्याशय", "गुर्दा", "पेट"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
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
        "num": 6,
        "question_en": "Who is the author of the book 'Godan'?",
        "question_hi": "पुस्तक 'गोदान' के लेखक कौन हैं?",
        "options_en": ["Premchand", "Rabindranath Tagore", "Harivansh Rai Bachchan", "Mahadevi Verma"],
        "options_hi": ["प्रेमचंद", "रबींद्रनाथ टैगोर", "हरिवंश राय बच्चन", "महादेवी वर्मा"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
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
        "num": 8,
        "question_en": "Solve: 2x + 5 = 15",
        "question_hi": "हल करें: 2x + 5 = 15",
        "options_en": ["x = 5", "x = 10", "x = 7.5", "x = 8"],
        "options_hi": ["x = 5", "x = 10", "x = 7.5", "x = 8"],
        "answer_en": "x = 5",
        "answer_hi": "x = 5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
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
        "question_en": "Who discovered Penicillin?",
        "question_hi": "पेनिसिलिन की खोज किसने की?",
        "options_en": ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Robert Koch"],
        "options_hi": ["मैरी क्यूरी", "अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "रॉबर्ट कोच"],
        "answer_en": "Alexander Fleming",
        "answer_hi": "अलेक्जेंडर फ्लेमिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
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
        "num": 13,
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
        "num": 14,
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
        "num": 15,
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
        "num": 16,
        "question_en": "What is the chemical name of baking soda?",
        "question_hi": "बेकिंग सोडा का रासायनिक नाम क्या है?",
        "options_en": ["Sodium Carbonate", "Sodium Bicarbonate", "Sodium Hydroxide", "Sodium Chloride"],
        "options_hi": ["सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट", "सोडियम हाइड्रॉक्साइड", "सोडियम क्लोराइड"],
        "answer_en": "Sodium Bicarbonate",
        "answer_hi": "सोडियम बाइकार्बोनेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
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
        "num": 18,
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
        "num": 19,
        "question_en": "Which blood cells are responsible for fighting infections?",
        "question_hi": "कौन सी रक्त कोशिकाएं संक्रमण से लड़ने के लिए जिम्मेदार हैं?",
        "options_en": ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"],
        "options_hi": ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
        "answer_en": "White Blood Cells",
        "answer_hi": "श्वेत रक्त कोशिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
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
        "num": 21,
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
        "num": 22,
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
        "num": 23,
        "question_en": "Who wrote the Indian National Anthem?",
        "question_hi": "भारत के राष्ट्रगान के लेखक कौन हैं?",
        "options_en": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Mahatma Gandhi"],
        "options_hi": ["रबींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "सरोजिनी नायडू", "महात्मा गांधी"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the formula for Newton's Second Law of Motion?",
        "question_hi": "न्यूटन के गति के द्वितीय नियम का सूत्र क्या है?",
        "options_en": ["F = ma", "F = mv", "F = mgh", "F = p/t"],
        "options_hi": ["F = ma", "F = mv", "F = mgh", "F = p/t"],
        "answer_en": "F = ma",
        "answer_hi": "F = ma",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which gas is used by plants during photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण के दौरान पौधे कौन सी गैस का उपयोग करते हैं?",
        "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon Dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the value of (a + b)²?",
        "question_hi": "(a + b)² का मान क्या है?",
        "options_en": ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "a² + ab + b²"],
        "options_hi": ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "a² + ab + b²"],
        "answer_en": "a² + 2ab + b²",
        "answer_hi": "a² + 2ab + b²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
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
        "num": 28,
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
        "num": 29,
        "question_en": "Who is known as the Father of Geometry?",
        "question_hi": "ज्यामिति के पिता के रूप में किसे जाना जाता है?",
        "options_en": ["Pythagoras", "Euclid", "Archimedes", "Aristotle"],
        "options_hi": ["पाइथागोरस", "यूक्लिड", "आर्किमिडीज", "अरस्तू"],
        "answer_en": "Euclid",
        "answer_hi": "यूक्लिड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
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
        "num": 31,
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
        "num": 32,
        "question_en": "Which is the hardest natural substance on Earth?",
        "question_hi": "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ क्या है?",
        "options_en": ["Gold", "Iron", "Diamond", "Platinum"],
        "options_hi": ["सोना", "लोहा", "हीरा", "प्लैटिनम"],
        "answer_en": "Diamond",
        "answer_hi": "हीरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the chemical formula of Water?",
        "question_hi": "पानी का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂O", "CO₂", "NaCl", "O₂"],
        "options_hi": ["H₂O", "CO₂", "NaCl", "O₂"],
        "answer_en": "H₂O",
        "answer_hi": "H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
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
        "num": 35,
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
        "num": 36,
        "question_en": "Which gas is responsible for global warming?",
        "question_hi": "ग्लोबल वार्मिंग के लिए कौन सी गैस जिम्मेदार है?",
        "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हीलियम"],
        "answer_en": "Carbon Dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
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
        "num": 38,
        "question_en": "Who wrote 'Meghdoot' in Sanskrit?",
        "question_hi": "संस्कृत में 'मेघदूत' किसने लिखा?",
        "options_en": ["Kalidasa", "Ved Vyas", "Valmiki", "Tulsidas"],
        "options_hi": ["कालिदास", "वेद व्यास", "वाल्मीकि", "तुलसीदास"],
        "answer_en": "Kalidasa",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the formula for kinetic energy?",
        "question_hi": "गतिज ऊर्जा का सूत्र क्या है?",
        "options_en": ["½mv²", "mgh", "Fd", "PV"],
        "options_hi": ["½mv²", "mgh", "Fd", "PV"],
        "answer_en": "½mv²",
        "answer_hi": "½mv²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
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
        "num": 41,
        "question_en": "What is the capital of Japan?",
        "question_hi": "जापान की राजधानी क्या है?",
        "options_en": ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        "options_hi": ["बीजिंग", "सियोल", "टोक्यो", "बैंकॉक"],
        "answer_en": "Tokyo",
        "answer_hi": "टोक्यो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
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
        "num": 43,
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
        "num": 44,
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
        "num": 45,
        "question_en": "Which is the largest planet in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
        "options_en": ["Earth", "Jupiter", "Saturn", "Neptune"],
        "options_hi": ["पृथ्वी", "बृहस्पति", "शनि", "वरुण"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the chemical name of common salt?",
        "question_hi": "साधारण नमक का रासायनिक नाम क्या है?",
        "options_en": ["Sodium Carbonate", "Sodium Bicarbonate", "Sodium Chloride", "Sodium Hydroxide"],
        "options_hi": ["सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट", "सोडियम क्लोराइड", "सोडियम हाइड्रॉक्साइड"],
        "answer_en": "Sodium Chloride",
        "answer_hi": "सोडियम क्लोराइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
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
        "num": 48,
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
        "num": 49,
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
        "num": 50,
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
        "num": 51,
        "question_en": "Which is the smallest continent by area?",
        "question_hi": "क्षेत्रफल की दृष्टि से सबसे छोटा महाद्वीप कौन सा है?",
        "options_en": ["Europe", "Australia", "Antarctica", "South America"],
        "options_hi": ["यूरोप", "ऑस्ट्रेलिया", "अंटार्कटिका", "दक्षिण अमेरिका"],
        "answer_en": "Australia",
        "answer_hi": "ऑस्ट्रेलिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the chemical formula of Ammonia?",
        "question_hi": "अमोनिया का रासायनिक सूत्र क्या है?",
        "options_en": ["NH₃", "NH₄", "NO₂", "NO₃"],
        "options_hi": ["NH₃", "NH₄", "NO₂", "NO₃"],
        "answer_en": "NH₃",
        "answer_hi": "NH₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Who wrote the epic 'Ramayana'?",
        "question_hi": "महाकाव्य 'रामायण' किसने लिखा?",
        "options_en": ["Ved Vyas", "Valmiki", "Tulsidas", "Kalidasa"],
        "options_hi": ["वेद व्यास", "वाल्मीकि", "तुलसीदास", "कालिदास"],
        "answer_en": "Valmiki",
        "answer_hi": "वाल्मीकि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the formula for work done?",
        "question_hi": "किए गए कार्य का सूत्र क्या है?",
        "options_en": ["F × d", "m × a", "½mv²", "m × g × h"],
        "options_hi": ["F × d", "m × a", "½mv²", "m × g × h"],
        "answer_en": "F × d",
        "answer_hi": "F × d",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which vitamin deficiency causes Night Blindness?",
        "question_hi": "किस विटामिन की कमी से रतौंधी होती है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
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
        "num": 57,
        "question_en": "Who is known as the Father of the Nation in India?",
        "question_hi": "भारत में राष्ट्रपिता के रूप में किसे जाना जाता है?",
        "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhash Chandra Bose", "Bhagat Singh"],
        "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
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
        "num": 59,
        "question_en": "Which gas is used in photosynthesis by plants?",
        "question_hi": "पौधों द्वारा प्रकाश संश्लेषण में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon Dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
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
        "num": 61,
        "question_en": "Which is the longest bone in human body?",
        "question_hi": "मानव शरीर की सबसे लंबी हड्डी कौन सी है?",
        "options_en": ["Femur", "Tibia", "Humerus", "Fibula"],
        "options_hi": ["फीमर", "टिबिया", "ह्यूमरस", "फिबुला"],
        "answer_en": "Femur",
        "answer_hi": "फीमर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
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
        "num": 63,
        "question_en": "Who wrote 'War and Peace'?",
        "question_hi": "'युद्ध और शांति' किसने लिखी?",
        "options_en": ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Victor Hugo"],
        "options_hi": ["फ्योडोर दोस्तोव्स्की", "लियो टॉल्स्टॉय", "एंटोन चेखव", "विक्टर ह्यूगो"],
        "answer_en": "Leo Tolstoy",
        "answer_hi": "लियो टॉल्स्टॉय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the formula for area of a triangle?",
        "question_hi": "त्रिभुज के क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["½ × base × height", "base × height", "½ × side²", "π × base × height"],
        "options_hi": ["½ × आधार × ऊंचाई", "आधार × ऊंचाई", "½ × भुजा²", "π × आधार × ऊंचाई"],
        "answer_en": "½ × base × height",
        "answer_hi": "½ × आधार × ऊंचाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
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
        "num": 66,
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
        "num": 67,
        "question_en": "Who was the first woman Prime Minister of India?",
        "question_hi": "भारत की प्रथम महिला प्रधानमंत्री कौन थीं?",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sonia Gandhi"],
        "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "प्रतिभा पाटिल", "सोनिया गांधी"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
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
        "num": 69,
        "question_en": "Which gas is produced during photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण के दौरान कौन सी गैस उत्पन्न होती है?",
        "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the unit of pressure?",
        "question_hi": "दाब की इकाई क्या है?",
        "options_en": ["Newton", "Pascal", "Joule", "Watt"],
        "options_hi": ["न्यूटन", "पास्कल", "जूल", "वाट"],
        "answer_en": "Pascal",
        "answer_hi": "पास्कल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which is the largest gland in human body?",
        "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?",
        "options_en": ["Pancreas", "Liver", "Thyroid", "Pituitary"],
        "options_hi": ["अग्न्याशय", "यकृत", "थायरॉइड", "पिट्यूटरी"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the chemical formula of Table Salt?",
        "question_hi": "टेबल साल्ट का रासायनिक सूत्र क्या है?",
        "options_en": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "options_hi": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Who wrote 'The Canterbury Tales'?",
        "question_hi": "'द कैंटरबरी टेल्स' किसने लिखी?",
        "options_en": ["William Shakespeare", "Geoffrey Chaucer", "John Milton", "Charles Dickens"],
        "options_hi": ["विलियम शेक्सपियर", "जेफ्री चौसर", "जॉन मिल्टन", "चार्ल्स डिकेंस"],
        "answer_en": "Geoffrey Chaucer",
        "answer_hi": "जेफ्री चौसर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the formula for potential energy?",
        "question_hi": "स्थितिज ऊर्जा का सूत्र क्या है?",
        "options_en": ["½mv²", "mgh", "Fd", "PV"],
        "options_hi": ["½mv²", "mgh", "Fd", "PV"],
        "answer_en": "mgh",
        "answer_hi": "mgh",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which vitamin deficiency causes Beriberi?",
        "question_hi": "किस विटामिन की कमी से बेरीबेरी होता है?",
        "options_en": ["Vitamin B1", "Vitamin B2", "Vitamin B12", "Vitamin C"],
        "options_hi": ["विटामिन B1", "विटामिन B2", "विटामिन B12", "विटामिन C"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन B1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
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
        "num": 77,
        "question_en": "Who is known as the Nightingale of India?",
        "question_hi": "भारत की कोकिला के रूप में किसे जाना जाता है?",
        "options_en": ["Lata Mangeshkar", "Sarojini Naidu", "Indira Gandhi", "Mother Teresa"],
        "options_hi": ["लता मंगेशकर", "सरोजिनी नायडू", "इंदिरा गांधी", "मदर टेरेसा"],
        "answer_en": "Sarojini Naidu",
        "answer_hi": "सरोजिनी नायडू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
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
        "num": 79,
        "question_en": "Which gas is known as Laughing Gas?",
        "question_hi": "कौन सी गैस हंसाने वाली गैस के नाम से जानी जाती है?",
        "options_en": ["Nitrous Oxide", "Carbon Dioxide", "Oxygen", "Hydrogen"],
        "options_hi": ["नाइट्रस ऑक्साइड", "कार्बन डाइऑक्साइड", "ऑक्सीजन", "हाइड्रोजन"],
        "answer_en": "Nitrous Oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
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
        "num": 81,
        "question_en": "Which is the smallest bone in human body?",
        "question_hi": "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
        "options_en": ["Femur", "Stapes", "Radius", "Ulna"],
        "options_hi": ["फीमर", "स्टेप्स", "रेडियस", "अल्ना"],
        "answer_en": "Stapes",
        "answer_hi": "स्टेप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the chemical formula of Vinegar?",
        "question_hi": "सिरका का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₃COOH", "H₂SO₄", "HCl", "HNO₃"],
        "options_hi": ["CH₃COOH", "H₂SO₄", "HCl", "HNO₃"],
        "answer_en": "CH₃COOH",
        "answer_hi": "CH₃COOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Who wrote 'Pride and Prejudice'?",
        "question_hi": "'प्राइड एंड प्रेजुडिस' किसने लिखी?",
        "options_en": ["Charlotte Bronte", "Jane Austen", "Emily Bronte", "Virginia Woolf"],
        "options_hi": ["चार्लोट ब्रोंटे", "जेन ऑस्टेन", "एमिली ब्रोंटे", "वर्जीनिया वूल्फ"],
        "answer_en": "Jane Austen",
        "answer_hi": "जेन ऑस्टेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the formula for circumference of a circle?",
        "question_hi": "वृत्त की परिधि का सूत्र क्या है?",
        "options_en": ["πr²", "2πr", "πd", "Both 2πr and πd"],
        "options_hi": ["πr²", "2πr", "πd", "2πr और πd दोनों"],
        "answer_en": "Both 2πr and πd",
        "answer_hi": "2πr और πd दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
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
        "num": 86,
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
        "num": 87,
        "question_en": "Who was the first President of India?",
        "question_hi": "भारत के प्रथम राष्ट्रपति कौन थे?",
        "options_en": ["Rajendra Prasad", "S. Radhakrishnan", "Zakir Hussain", "V.V. Giri"],
        "options_hi": ["राजेंद्र प्रसाद", "एस. राधाकृष्णन", "जाकिर हुसैन", "वी.वी. गिरी"],
        "answer_en": "Rajendra Prasad",
        "answer_hi": "राजेंद्र प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the value of tan 90°?",
        "question_hi": "tan 90° का मान क्या है?",
        "options_en": ["0", "1", "Undefined", "∞"],
        "options_hi": ["0", "1", "अपरिभाषित", "∞"],
        "answer_en": "Undefined",
        "answer_hi": "अपरिभाषित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which gas is used in fire extinguishers?",
        "question_hi": "आग बुझाने वाले उपकरणों में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon Dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
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
        "num": 91,
        "question_en": "Which is the largest organ in human body?",
        "question_hi": "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
        "options_en": ["Liver", "Skin", "Heart", "Lungs"],
        "options_hi": ["यकृत", "त्वचा", "हृदय", "फेफड़े"],
        "answer_en": "Skin",
        "answer_hi": "त्वचा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the chemical formula of Alcohol?",
        "question_hi": "अल्कोहल का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₃OH", "C₂H₅OH", "C₃H₇OH", "C₄H₉OH"],
        "options_hi": ["CH₃OH", "C₂H₅OH", "C₃H₇OH", "C₄H₉OH"],
        "answer_en": "C₂H₅OH",
        "answer_hi": "C₂H₅OH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Who wrote 'The Divine Comedy'?",
        "question_hi": "'द डिवाइन कॉमेडी' किसने लिखी?",
        "options_en": ["Dante Alighieri", "Homer", "Virgil", "Plato"],
        "options_hi": ["दांते अलिघिएरी", "होमर", "वर्जिल", "प्लेटो"],
        "answer_en": "Dante Alighieri",
        "answer_hi": "दांते अलिघिएरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the formula for density?",
        "question_hi": "घनत्व का सूत्र क्या है?",
        "options_en": ["mass/volume", "volume/mass", "mass × volume", "mass/area"],
        "options_hi": ["द्रव्यमान/आयतन", "आयतन/द्रव्यमान", "द्रव्यमान × आयतन", "द्रव्यमान/क्षेत्रफल"],
        "answer_en": "mass/volume",
        "answer_hi": "द्रव्यमान/आयतन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which vitamin is also known as Ascorbic Acid?",
        "question_hi": "किस विटामिन को एस्कॉर्बिक एसिड के नाम से भी जाना जाता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
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
        "num": 97,
        "question_en": "Who is known as the Father of English Poetry?",
        "question_hi": "अंग्रेजी कविता के पिता के रूप में किसे जाना जाता है?",
        "options_en": ["William Shakespeare", "Geoffrey Chaucer", "John Milton", "William Wordsworth"],
        "options_hi": ["विलियम शेक्सपियर", "जेफ्री चौसर", "जॉन मिल्टन", "विलियम वर्ड्सवर्थ"],
        "answer_en": "Geoffrey Chaucer",
        "answer_hi": "जेफ्री चौसर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the value of sin 0°?",
        "question_hi": "sin 0° का मान क्या है?",
        "options_en": ["0", "1", "0.5", "√2/2"],
        "options_hi": ["0", "1", "0.5", "√2/2"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
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
        "num": 100,
        "question_en": "What is the unit of electric charge?",
        "question_hi": "विद्युत आवेश की इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Coulomb", "Ohm"],
        "options_hi": ["वोल्ट", "एम्पियर", "कूलम्ब", "ओम"],
        "answer_en": "Coulomb",
        "answer_hi": "कूलम्ब",
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