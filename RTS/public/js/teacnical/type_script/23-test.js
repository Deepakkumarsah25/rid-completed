const questions = [
    {
        "num": 1,
        "question_en": "Which cell organelle is known as the 'powerhouse of the cell'?",
        "question_hi": "किस कोशिका अंग को 'कोशिका का पावरहाउस' कहा जाता है?",
        "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the chemical formula of Water?",
        "question_hi": "पानी का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂O", "CO₂", "NaCl", "CH₄"],
        "options_hi": ["H₂O", "CO₂", "NaCl", "CH₄"],
        "answer_en": "H₂O",
        "answer_hi": "H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
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
        "num": 4,
        "question_en": "What is the value of π (pi) approximately?",
        "question_hi": "π (पाई) का अनुमानित मान क्या है?",
        "options_en": ["3.14", "2.71", "1.61", "4.13"],
        "options_hi": ["3.14", "2.71", "1.61", "4.13"],
        "answer_en": "3.14",
        "answer_hi": "3.14",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which planet is known as the Red Planet?",
        "question_hi": "किस ग्रह को लाल ग्रह के नाम से जाना जाता है?",
        "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
        "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
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
        "num": 7,
        "question_en": "Which gas is most abundant in Earth's atmosphere?",
        "question_hi": "पृथ्वी के वायुमंडल में कौन सी गैस सबसे अधिक मात्रा में होती है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
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
        "num": 9,
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
        "num": 10,
        "question_en": "What is the largest mammal in the world?",
        "question_hi": "दुनिया का सबसे बड़ा स्तनपायी कौन सा है?",
        "options_en": ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        "options_hi": ["हाथी", "ब्लू व्हेल", "जिराफ", "ध्रुवीय भालू"],
        "answer_en": "Blue Whale",
        "answer_hi": "ब्लू व्हेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
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
        "num": 12,
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
        "num": 13,
        "question_en": "Which blood group is known as the universal donor?",
        "question_hi": "किस रक्त समूह को सार्वभौमिक दाता के रूप में जाना जाता है?",
        "options_en": ["A+", "B+", "AB+", "O-"],
        "options_hi": ["A+", "B+", "AB+", "O-"],
        "answer_en": "O-",
        "answer_hi": "O-",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the square root of 64?",
        "question_hi": "64 का वर्गमूल क्या है?",
        "options_en": ["6", "7", "8", "9"],
        "options_hi": ["6", "7", "8", "9"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which gas do plants release during photosynthesis?",
        "question_hi": "पौधे प्रकाश संश्लेषण के दौरान कौन सी गैस छोड़ते हैं?",
        "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Who is known as the Father of the Indian Constitution?",
        "question_hi": "भारतीय संविधान के जनक के रूप में किसे जाना जाता है?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "बी.आर. अंबेडकर", "सरदार पटेल"],
        "answer_en": "B.R. Ambedkar",
        "answer_hi": "बी.आर. अंबेडकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the chemical formula of Table Salt?",
        "question_hi": "नमक का रासायनिक सूत्र क्या है?",
        "options_en": ["NaCl", "KCl", "CaCO₃", "H₂SO₄"],
        "options_hi": ["NaCl", "KCl", "CaCO₃", "H₂SO₄"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
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
        "num": 19,
        "question_en": "What is the speed of light in vacuum?",
        "question_hi": "निर्वात में प्रकाश की गति क्या है?",
        "options_en": ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁵ m/s", "3×10¹⁰ m/s"],
        "options_hi": ["3×10⁸ मी/से", "3×10⁶ मी/से", "3×10⁵ मी/से", "3×10¹⁰ मी/से"],
        "answer_en": "3×10⁸ m/s",
        "answer_hi": "3×10⁸ मी/से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
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
        "num": 21,
        "question_en": "What is the value of sin 90°?",
        "question_hi": "sin 90° का मान क्या है?",
        "options_en": ["0", "0.5", "1", "√3/2"],
        "options_hi": ["0", "0.5", "1", "√3/2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which vitamin is produced by the human body when exposed to sunlight?",
        "question_hi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर कौन सा विटामिन उत्पन्न करता है?",
        "options_en": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B12", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
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
        "num": 24,
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
        "num": 25,
        "question_en": "What is the largest planet in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
        "options_en": ["Earth", "Saturn", "Jupiter", "Neptune"],
        "options_hi": ["पृथ्वी", "शनि", "बृहस्पति", "नेपच्यून"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which gas is responsible for the greenhouse effect?",
        "question_hi": "ग्रीनहाउस प्रभाव के लिए कौन सी गैस जिम्मेदार है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
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
        "num": 28,
        "question_en": "Who wrote the Indian National Anthem?",
        "question_hi": "भारतीय राष्ट्रगान किसने लिखा?",
        "options_en": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Mahatma Gandhi"],
        "options_hi": ["रबींद्रनाथ टैगोर", "बंकिम चंद्र चटर्जी", "सरोजिनी नायडू", "महात्मा गांधी"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the formula for the area of a circle?",
        "question_hi": "वृत्त के क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["2πr", "πr²", "πd", "2πr²"],
        "options_hi": ["2πr", "πr²", "πd", "2πr²"],
        "answer_en": "πr²",
        "answer_hi": "πr²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which organ in the human body produces insulin?",
        "question_hi": "मानव शरीर में कौन सा अंग इंसुलिन उत्पन्न करता है?",
        "options_en": ["Liver", "Pancreas", "Kidney", "Stomach"],
        "options_hi": ["यकृत", "अग्न्याशय", "गुर्दा", "पेट"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the boiling point of water in Celsius?",
        "question_hi": "पानी का क्वथनांक सेल्सियस में क्या है?",
        "options_en": ["0°C", "50°C", "100°C", "150°C"],
        "options_hi": ["0°C", "50°C", "100°C", "150°C"],
        "answer_en": "100°C",
        "answer_hi": "100°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which is the smallest bone in the human body?",
        "question_hi": "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
        "options_en": ["Femur", "Stapes", "Tibia", "Radius"],
        "options_hi": ["फीमर", "स्टेप्स", "टिबिया", "रेडियस"],
        "answer_en": "Stapes",
        "answer_hi": "स्टेप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the chemical formula of Sulfuric Acid?",
        "question_hi": "सल्फ्यूरिक एसिड का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂SO₄", "HCl", "HNO₃", "H₃PO₄"],
        "options_hi": ["H₂SO₄", "HCl", "HNO₃", "H₃PO₄"],
        "answer_en": "H₂SO₄",
        "answer_hi": "H₂SO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Who was the first woman Prime Minister of India?",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sonia Gandhi"],
        "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "प्रतिभा पाटिल", "सोनिया गांधी"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the formula for Newton's Second Law of Motion?",
        "question_hi": "न्यूटन के दूसरे नियम का सूत्र क्या है?",
        "options_en": ["F = ma", "F = G(m₁m₂/r²)", "F = -kx", "F = mv²/r"],
        "options_hi": ["F = ma", "F = G(m₁m₂/r²)", "F = -kx", "F = mv²/r"],
        "answer_en": "F = ma",
        "answer_hi": "F = ma",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
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
        "num": 39,
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
        "num": 40,
        "question_en": "Which vitamin deficiency causes Scurvy?",
        "question_hi": "किस विटामिन की कमी से स्कर्वी रोग होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the chemical formula of Carbon Dioxide?",
        "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CO", "CO₂", "C₂O", "C₃O₂"],
        "options_hi": ["CO", "CO₂", "C₂O", "C₃O₂"],
        "answer_en": "CO₂",
        "answer_hi": "CO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Who discovered Gravity?",
        "question_hi": "गुरुत्वाकर्षण की खोज किसने की?",
        "options_en": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        "options_hi": ["अल्बर्ट आइंस्टीन", "आइजैक न्यूटन", "गैलीलियो गैलीली", "निकोला टेस्ला"],
        "answer_en": "Isaac Newton",
        "answer_hi": "आइजैक न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the largest ocean on Earth?",
        "question_hi": "पृथ्वी पर सबसे बड़ा महासागर कौन सा है?",
        "options_en": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
        "answer_en": "Pacific Ocean",
        "answer_hi": "प्रशांत महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which gas is used in refrigerators?",
        "question_hi": "रेफ्रिजरेटर में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Chlorofluorocarbon", "Nitrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "क्लोरोफ्लोरोकार्बन", "नाइट्रोजन"],
        "answer_en": "Chlorofluorocarbon",
        "answer_hi": "क्लोरोफ्लोरोकार्बन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the chemical symbol for Potassium?",
        "question_hi": "पोटेशियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["P", "Pt", "K", "Ko"],
        "options_hi": ["P", "Pt", "K", "Ko"],
        "answer_en": "K",
        "answer_hi": "K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Who wrote 'Geetanjali'?",
        "question_hi": "'गीतांजलि' किसने लिखी?",
        "options_en": ["Mahadevi Verma", "Rabindranath Tagore", "Harivansh Rai Bachchan", "Suryakant Tripathi"],
        "options_hi": ["महादेवी वर्मा", "रबींद्रनाथ टैगोर", "हरिवंश राय बच्चन", "सूर्यकांत त्रिपाठी"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the formula for the volume of a sphere?",
        "question_hi": "गोले के आयतन का सूत्र क्या है?",
        "options_en": ["4/3πr³", "πr²h", "2πrh", "πr³"],
        "options_hi": ["4/3πr³", "πr²h", "2πrh", "πr³"],
        "answer_en": "4/3πr³",
        "answer_hi": "4/3πr³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which organ purifies blood in the human body?",
        "question_hi": "मानव शरीर में कौन सा अंग रक्त को शुद्ध करता है?",
        "options_en": ["Heart", "Liver", "Kidneys", "Lungs"],
        "options_hi": ["हृदय", "यकृत", "गुर्दे", "फेफड़े"],
        "answer_en": "Kidneys",
        "answer_hi": "गुर्दे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the freezing point of water in Celsius?",
        "question_hi": "पानी का हिमांक सेल्सियस में क्या है?",
        "options_en": ["0°C", "100°C", "-100°C", "50°C"],
        "options_hi": ["0°C", "100°C", "-100°C", "50°C"],
        "answer_en": "0°C",
        "answer_hi": "0°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which is the longest bone in the human body?",
        "question_hi": "मानव शरीर की सबसे लंबी हड्डी कौन सी है?",
        "options_en": ["Tibia", "Fibula", "Femur", "Humerus"],
        "options_hi": ["टिबिया", "फिबुला", "फीमर", "ह्यूमरस"],
        "answer_en": "Femur",
        "answer_hi": "फीमर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the chemical formula of Ammonia?",
        "question_hi": "अमोनिया का रासायनिक सूत्र क्या है?",
        "options_en": ["NH₃", "NH₄", "N₂H₄", "NH₂"],
        "options_hi": ["NH₃", "NH₄", "N₂H₄", "NH₂"],
        "answer_en": "NH₃",
        "answer_hi": "NH₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Who was the first President of India?",
        "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
        "options_en": ["Rajendra Prasad", "Jawaharlal Nehru", "S. Radhakrishnan", "Zakir Hussain"],
        "options_hi": ["राजेंद्र प्रसाद", "जवाहरलाल नेहरू", "एस. राधाकृष्णन", "जाकिर हुसैन"],
        "answer_en": "Rajendra Prasad",
        "answer_hi": "राजेंद्र प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the formula for Ohm's Law?",
        "question_hi": "ओम के नियम का सूत्र क्या है?",
        "options_en": ["V = IR", "I = V/R", "R = V/I", "All of the above"],
        "options_hi": ["V = IR", "I = V/R", "R = V/I", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which gas is used in fire extinguishers?",
        "question_hi": "आग बुझाने वाले उपकरणों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
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
        "num": 56,
        "question_en": "Who composed the epic 'Ramayana'?",
        "question_hi": "महाकाव्य 'रामायण' की रचना किसने की?",
        "options_en": ["Ved Vyas", "Valmiki", "Tulsidas", "Kalidas"],
        "options_hi": ["वेद व्यास", "वाल्मीकि", "तुलसीदास", "कालिदास"],
        "answer_en": "Valmiki",
        "answer_hi": "वाल्मीकि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the value of cos 60°?",
        "question_hi": "cos 60° का मान क्या है?",
        "options_en": ["0", "0.5", "1", "√3/2"],
        "options_hi": ["0", "0.5", "1", "√3/2"],
        "answer_en": "0.5",
        "answer_hi": "0.5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which vitamin deficiency causes Rickets?",
        "question_hi": "किस विटामिन की कमी से रिकेट्स रोग होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
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
        "num": 60,
        "question_en": "Who discovered X-rays?",
        "question_hi": "एक्स-रे की खोज किसने की?",
        "options_en": ["Marie Curie", "Wilhelm Roentgen", "Max Planck", "Albert Einstein"],
        "options_hi": ["मैरी क्यूरी", "विल्हेम रॉन्टजेन", "मैक्स प्लैंक", "अल्बर्ट आइंस्टीन"],
        "answer_en": "Wilhelm Roentgen",
        "answer_hi": "विल्हेम रॉन्टजेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the smallest planet in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे छोटा ग्रह कौन सा है?",
        "options_en": ["Mars", "Venus", "Mercury", "Pluto"],
        "options_hi": ["मंगल", "शुक्र", "बुध", "प्लूटो"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which gas is used in welding?",
        "question_hi": "वेल्डिंग में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Acetylene", "Nitrogen", "Helium"],
        "options_hi": ["ऑक्सीजन", "एसिटिलीन", "नाइट्रोजन", "हीलियम"],
        "answer_en": "Acetylene",
        "answer_hi": "एसिटिलीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the chemical symbol for Calcium?",
        "question_hi": "कैल्शियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Cm", "Cl", "Ca", "C"],
        "options_hi": ["Cm", "Cl", "Ca", "C"],
        "answer_en": "Ca",
        "answer_hi": "Ca",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Who wrote 'Mudra Rakshas'?",
        "question_hi": "'मुद्राराक्षस' किसने लिखा?",
        "options_en": ["Kalidas", "Vishakhadatta", "Banabhatta", "Bhas"],
        "options_hi": ["कालिदास", "विशाखदत्त", "बाणभट्ट", "भास"],
        "answer_en": "Vishakhadatta",
        "answer_hi": "विशाखदत्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the formula for the area of a triangle?",
        "question_hi": "त्रिभुज के क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["½ × base × height", "base × height", "πr²", "length × width"],
        "options_hi": ["½ × आधार × ऊंचाई", "आधार × ऊंचाई", "πr²", "लंबाई × चौड़ाई"],
        "answer_en": "½ × base × height",
        "answer_hi": "½ × आधार × ऊंचाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which organ produces bile in the human body?",
        "question_hi": "मानव शरीर में कौन सा अंग पित्त उत्पन्न करता है?",
        "options_en": ["Pancreas", "Liver", "Gallbladder", "Stomach"],
        "options_hi": ["अग्न्याशय", "यकृत", "पित्ताशय", "पेट"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the normal human body temperature in Celsius?",
        "question_hi": "सामान्य मानव शरीर का तापमान सेल्सियस में क्या है?",
        "options_en": ["37°C", "98.6°C", "100°C", "36.5°C"],
        "options_hi": ["37°C", "98.6°C", "100°C", "36.5°C"],
        "answer_en": "37°C",
        "answer_hi": "37°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which is the strongest bone in the human body?",
        "question_hi": "मानव शरीर की सबसे मजबूत हड्डी कौन सी है?",
        "options_en": ["Femur", "Tibia", "Skull", "Spine"],
        "options_hi": ["फीमर", "टिबिया", "खोपड़ी", "रीढ़"],
        "answer_en": "Femur",
        "answer_hi": "फीमर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the chemical formula of Nitric Acid?",
        "question_hi": "नाइट्रिक एसिड का रासायनिक सूत्र क्या है?",
        "options_en": ["HNO₃", "H₂SO₄", "HCl", "H₃PO₄"],
        "options_hi": ["HNO₃", "H₂SO₄", "HCl", "H₃PO₄"],
        "answer_en": "HNO₃",
        "answer_hi": "HNO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
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
        "num": 71,
        "question_en": "What is the formula for kinetic energy?",
        "question_hi": "गतिज ऊर्जा का सूत्र क्या है?",
        "options_en": ["½mv²", "mgh", "Fd", "ma"],
        "options_hi": ["½mv²", "mgh", "Fd", "ma"],
        "answer_en": "½mv²",
        "answer_hi": "½mv²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which gas is used in advertising signs?",
        "question_hi": "विज्ञापन साइनों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Neon", "Argon", "Helium", "Xenon"],
        "options_hi": ["नियॉन", "आर्गन", "हीलियम", "जेनॉन"],
        "answer_en": "Neon",
        "answer_hi": "नियॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
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
        "num": 74,
        "question_en": "Who wrote 'Meghdoot'?",
        "question_hi": "'मेघदूत' किसने लिखा?",
        "options_en": ["Kalidas", "Bhavabhuti", "Bharavi", "Magha"],
        "options_hi": ["कालिदास", "भवभूति", "भारवि", "माघ"],
        "answer_en": "Kalidas",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
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
        "num": 76,
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
        "num": 77,
        "question_en": "What is the chemical formula of Ethanol?",
        "question_hi": "एथनॉल का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₃OH", "C₂H₅OH", "C₃H₇OH", "C₄H₉OH"],
        "options_hi": ["CH₃OH", "C₂H₅OH", "C₃H₇OH", "C₄H₉OH"],
        "answer_en": "C₂H₅OH",
        "answer_hi": "C₂H₅OH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Who discovered the circulation of blood?",
        "question_hi": "रक्त संचार की खोज किसने की?",
        "options_en": ["William Harvey", "Louis Pasteur", "Robert Hooke", "Anton van Leeuwenhoek"],
        "options_hi": ["विलियम हार्वे", "लुई पाश्चर", "रॉबर्ट हुक", "एंटोन वैन ल्यूवेनहॉक"],
        "answer_en": "William Harvey",
        "answer_hi": "विलियम हार्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the hottest planet in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे गर्म ग्रह कौन सा है?",
        "options_en": ["Mercury", "Venus", "Mars", "Jupiter"],
        "options_hi": ["बुध", "शुक्र", "मंगल", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
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
        "num": 81,
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
        "num": 82,
        "question_en": "Who wrote 'Panchtantra'?",
        "question_hi": "'पंचतंत्र' किसने लिखा?",
        "options_en": ["Vishnu Sharma", "Chanakya", "Valmiki", "Ved Vyas"],
        "options_hi": ["विष्णु शर्मा", "चाणक्य", "वाल्मीकि", "वेद व्यास"],
        "answer_en": "Vishnu Sharma",
        "answer_hi": "विष्णु शर्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the formula for potential energy?",
        "question_hi": "स्थितिज ऊर्जा का सूत्र क्या है?",
        "options_en": ["½mv²", "mgh", "Fd", "ma"],
        "options_hi": ["½mv²", "mgh", "Fd", "ma"],
        "answer_en": "mgh",
        "answer_hi": "mgh",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which organ filters blood in the human body?",
        "question_hi": "मानव शरीर में कौन सा अंग रक्त को फिल्टर करता है?",
        "options_en": ["Heart", "Liver", "Kidneys", "Lungs"],
        "options_hi": ["हृदय", "यकृत", "गुर्दे", "फेफड़े"],
        "answer_en": "Kidneys",
        "answer_hi": "गुर्दे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
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
        "num": 86,
        "question_en": "Who was the first Indian woman to win an Olympic medal?",
        "question_hi": "ओलंपिक पदक जीतने वाली पहली भारतीय महिला कौन थीं?",
        "options_en": ["P.T. Usha", "Karnam Malleswari", "Mary Kom", "Saina Nehwal"],
        "options_hi": ["पी.टी. उषा", "कर्णम मल्लेश्वरी", "मैरी कॉम", "साइना नेहवाल"],
        "answer_en": "Karnam Malleswari",
        "answer_hi": "कर्णम मल्लेश्वरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the formula for acceleration?",
        "question_hi": "त्वरण का सूत्र क्या है?",
        "options_en": ["v/t", "d/t", "m/v", "F/m"],
        "options_hi": ["v/t", "d/t", "m/v", "F/m"],
        "answer_en": "v/t",
        "answer_hi": "v/t",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which gas is used in photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the chemical symbol for Carbon?",
        "question_hi": "कार्बन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ca", "C", "Co", "Cb"],
        "options_hi": ["Ca", "C", "Co", "Cb"],
        "answer_en": "C",
        "answer_hi": "C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Who wrote 'Abhijnana Shakuntalam'?",
        "question_hi": "'अभिज्ञान शाकुंतलम' किसने लिखा?",
        "options_en": ["Bhasa", "Kalidasa", "Sudraka", "Bhavabhuti"],
        "options_hi": ["भास", "कालिदास", "शूद्रक", "भवभूति"],
        "answer_en": "Kalidasa",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the value of tan 90°?",
        "question_hi": "tan 90° का मान क्या है?",
        "options_en": ["0", "1", "∞", "Undefined"],
        "options_hi": ["0", "1", "∞", "अपरिभाषित"],
        "answer_en": "Undefined",
        "answer_hi": "अपरिभाषित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which vitamin deficiency causes Beriberi?",
        "question_hi": "किस विटामिन की कमी से बेरीबेरी रोग होता है?",
        "options_en": ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12"],
        "options_hi": ["विटामिन B1", "विटामिन B2", "विटामिन B6", "विटामिन B12"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन B1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the chemical formula of Laughing Gas?",
        "question_hi": "हंसाने वाली गैस का रासायनिक सूत्र क्या है?",
        "options_en": ["N₂O", "NO₂", "N₂", "NO"],
        "options_hi": ["N₂O", "NO₂", "N₂", "NO"],
        "answer_en": "N₂O",
        "answer_hi": "N₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Who discovered Radioactivity?",
        "question_hi": "रेडियोधर्मिता की खोज किसने की?",
        "options_en": ["Marie Curie", "Pierre Curie", "Henri Becquerel", "Ernest Rutherford"],
        "options_hi": ["मैरी क्यूरी", "पियरे क्यूरी", "हेनरी बेकरेल", "अर्नेस्ट रदरफोर्ड"],
        "answer_en": "Henri Becquerel",
        "answer_hi": "हेनरी बेकरेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the formula for pressure?",
        "question_hi": "दबाव का सूत्र क्या है?",
        "options_en": ["F/A", "F×A", "F×d", "m×a"],
        "options_hi": ["F/A", "F×A", "F×d", "m×a"],
        "answer_en": "F/A",
        "answer_hi": "F/A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which gas is used in anesthesia?",
        "question_hi": "एनेस्थेसिया में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Nitrous oxide", "Carbon dioxide", "Helium"],
        "options_hi": ["ऑक्सीजन", "नाइट्रस ऑक्साइड", "कार्बन डाइऑक्साइड", "हीलियम"],
        "answer_en": "Nitrous oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the chemical symbol for Nitrogen?",
        "question_hi": "नाइट्रोजन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ni", "N", "No", "Ng"],
        "options_hi": ["Ni", "N", "No", "Ng"],
        "answer_en": "N",
        "answer_hi": "N",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Who wrote 'Raghuvamsa'?",
        "question_hi": "'रघुवंश' किसने लिखा?",
        "options_en": ["Kalidasa", "Bhavabhuti", "Bharavi", "Magha"],
        "options_hi": ["कालिदास", "भवभूति", "भारवि", "माघ"],
        "answer_en": "Kalidasa",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the value of cot 45°?",
        "question_hi": "cot 45° का मान क्या है?",
        "options_en": ["0", "1", "∞", "Undefined"],
        "options_hi": ["0", "1", "∞", "अपरिभाषित"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which vitamin deficiency causes Anemia?",
        "question_hi": "किस विटामिन की कमी से एनीमिया होता है?",
        "options_en": ["Vitamin B12", "Vitamin C", "Vitamin D", "Vitamin K"],
        "options_hi": ["विटामिन B12", "विटामिन C", "विटामिन D", "विटामिन K"],
        "answer_en": "Vitamin B12",
        "answer_hi": "विटामिन B12",
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