const questions = [
    {
        "num": 1,
        "question_en": "What is the process by which plants make their own food?",
        "question_hi": "पौधों द्वारा अपना भोजन बनाने की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
        "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "पाचन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
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
        "num": 3,
        "question_en": "Who invented the Electric Bulb?",
        "question_hi": "विद्युत बल्ब का आविष्कार किसने किया?",
        "options_en": ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Michael Faraday"],
        "options_hi": ["थॉमस एडिसन", "निकोला टेस्ला", "अलेक्जेंडर ग्राहम बेल", "माइकल फैराडे"],
        "answer_en": "Thomas Edison",
        "answer_hi": "थॉमस एडिसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the value of 2³ + 3²?",
        "question_hi": "2³ + 3² का मान क्या है?",
        "options_en": ["13", "17", "15", "12"],
        "options_hi": ["13", "17", "15", "12"],
        "answer_en": "17",
        "answer_hi": "17",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
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
        "num": 6,
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
        "num": 7,
        "question_en": "Which gas is filled in electric bulbs?",
        "question_hi": "विद्युत बल्बों में कौन सी गैस भरी जाती है?",
        "options_en": ["Oxygen", "Nitrogen", "Argon", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "हाइड्रोजन"],
        "answer_en": "Argon",
        "answer_hi": "आर्गन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the chemical symbol for Oxygen?",
        "question_hi": "ऑक्सीजन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ox", "Og", "O", "Oy"],
        "options_hi": ["Ox", "Og", "O", "Oy"],
        "answer_en": "O",
        "answer_hi": "O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
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
        "num": 10,
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
        "num": 11,
        "question_en": "What is the atomic number of Carbon?",
        "question_hi": "कार्बन की परमाणु संख्या क्या है?",
        "options_en": ["6", "12", "14", "8"],
        "options_hi": ["6", "12", "14", "8"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
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
        "num": 13,
        "question_en": "Which blood group is known as universal recipient?",
        "question_hi": "किस रक्त समूह को सार्वभौमिक प्राप्तकर्ता के रूप में जाना जाता है?",
        "options_en": ["A+", "B+", "AB+", "O-"],
        "options_hi": ["A+", "B+", "AB+", "O-"],
        "answer_en": "AB+",
        "answer_hi": "AB+",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the square of 15?",
        "question_hi": "15 का वर्ग क्या है?",
        "options_en": ["225", "250", "275", "200"],
        "options_hi": ["225", "250", "275", "200"],
        "answer_en": "225",
        "answer_hi": "225",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which gas is responsible for global warming?",
        "question_hi": "ग्लोबल वार्मिंग के लिए कौन सी गैस जिम्मेदार है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Who is known as the Father of the Nation in India?",
        "question_hi": "भारत में राष्ट्रपिता के रूप में किसे जाना जाता है?",
        "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "B.R. Ambedkar", "Subhash Chandra Bose"],
        "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "बी.आर. अंबेडकर", "सुभाष चंद्र बोस"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the chemical formula of Baking Soda?",
        "question_hi": "बेकिंग सोडा का रासायनिक सूत्र क्या है?",
        "options_en": ["NaHCO₃", "NaOH", "Na₂CO₃", "NaCl"],
        "options_hi": ["NaHCO₃", "NaOH", "Na₂CO₃", "NaCl"],
        "answer_en": "NaHCO₃",
        "answer_hi": "NaHCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
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
        "num": 19,
        "question_en": "What is the speed of sound in air?",
        "question_hi": "हवा में ध्वनि की गति क्या है?",
        "options_en": ["332 m/s", "343 m/s", "300 m/s", "400 m/s"],
        "options_hi": ["332 मी/से", "343 मी/से", "300 मी/से", "400 मी/से"],
        "answer_en": "343 m/s",
        "answer_hi": "343 मी/से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
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
        "num": 21,
        "question_en": "What is the value of tan 60°?",
        "question_hi": "tan 60° का मान क्या है?",
        "options_en": ["1", "√3", "1/√3", "0"],
        "options_hi": ["1", "√3", "1/√3", "0"],
        "answer_en": "√3",
        "answer_hi": "√3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
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
        "num": 23,
        "question_en": "What is the chemical formula of Washing Soda?",
        "question_hi": "धोने का सोडा का रासायनिक सूत्र क्या है?",
        "options_en": ["Na₂CO₃", "NaHCO₃", "NaOH", "NaCl"],
        "options_hi": ["Na₂CO₃", "NaHCO₃", "NaOH", "NaCl"],
        "answer_en": "Na₂CO₃",
        "answer_hi": "Na₂CO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Who invented the Computer?",
        "question_hi": "कंप्यूटर का आविष्कार किसने किया?",
        "options_en": ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        "options_hi": ["चार्ल्स बैबेज", "एलन ट्यूरिंग", "बिल गेट्स", "स्टीव जॉब्स"],
        "answer_en": "Charles Babbage",
        "answer_hi": "चार्ल्स बैबेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
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
        "num": 26,
        "question_en": "Which gas is used in photosynthesis by plants?",
        "question_hi": "पौधों द्वारा प्रकाश संश्लेषण में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the chemical symbol for Hydrogen?",
        "question_hi": "हाइड्रोजन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Hy", "H", "Hg", "He"],
        "options_hi": ["Hy", "H", "Hg", "He"],
        "answer_en": "H",
        "answer_hi": "H",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
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
        "num": 29,
        "question_en": "What is the formula for the circumference of a circle?",
        "question_hi": "वृत्त की परिधि का सूत्र क्या है?",
        "options_en": ["2πr", "πr²", "πd", "Both A and C"],
        "options_hi": ["2πr", "πr²", "πd", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which organ pumps blood in the human body?",
        "question_hi": "मानव शरीर में कौन सा अंग रक्त पंप करता है?",
        "options_en": ["Lungs", "Heart", "Liver", "Kidneys"],
        "options_hi": ["फेफड़े", "हृदय", "यकृत", "गुर्दे"],
        "answer_en": "Heart",
        "answer_hi": "हृदय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the melting point of ice in Celsius?",
        "question_hi": "बर्फ का गलनांक सेल्सियस में क्या है?",
        "options_en": ["0°C", "100°C", "-100°C", "50°C"],
        "options_hi": ["0°C", "100°C", "-100°C", "50°C"],
        "answer_en": "0°C",
        "answer_hi": "0°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which is the longest bone in human arm?",
        "question_hi": "मानव भुजा की सबसे लंबी हड्डी कौन सी है?",
        "options_en": ["Radius", "Ulna", "Humerus", "Femur"],
        "options_hi": ["रेडियस", "अल्ना", "ह्यूमरस", "फीमर"],
        "answer_en": "Humerus",
        "answer_hi": "ह्यूमरस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
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
        "num": 34,
        "question_en": "Who was the first Indian woman in space?",
        "question_hi": "अंतरिक्ष में जाने वाली पहली भारतीय महिला कौन थीं?",
        "options_en": ["Kalpana Chawla", "Sunita Williams", "Rakesh Sharma", "Madhur Bhandarkar"],
        "options_hi": ["कल्पना चावला", "सुनीता विलियम्स", "राकेश शर्मा", "मधुर भंडारकर"],
        "answer_en": "Kalpana Chawla",
        "answer_hi": "कल्पना चावला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the formula for gravitational force?",
        "question_hi": "गुरुत्वाकर्षण बल का सूत्र क्या है?",
        "options_en": ["F = G(m₁m₂/r²)", "F = ma", "F = -kx", "F = mv²/r"],
        "options_hi": ["F = G(m₁m₂/r²)", "F = ma", "F = -kx", "F = mv²/r"],
        "answer_en": "F = G(m₁m₂/r²)",
        "answer_hi": "F = G(m₁m₂/r²)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which gas is used in fluorescent tubes?",
        "question_hi": "फ्लोरोसेंट ट्यूबों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Neon", "Mercury vapor", "Argon", "Xenon"],
        "options_hi": ["नियॉन", "पारा वाष्प", "आर्गन", "जेनॉन"],
        "answer_en": "Mercury vapor",
        "answer_hi": "पारा वाष्प",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
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
        "num": 38,
        "question_en": "Who painted 'Starry Night'?",
        "question_hi": "'स्टारी नाइट' की पेंटिंग किसने बनाई?",
        "options_en": ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
        "options_hi": ["पाब्लो पिकासो", "विंसेंट वैन गॉग", "लियोनार्डो दा विंची", "माइकलएंजेलो"],
        "answer_en": "Vincent van Gogh",
        "answer_hi": "विंसेंट वैन गॉग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the value of sin 0°?",
        "question_hi": "sin 0° का मान क्या है?",
        "options_en": ["0", "1", "0.5", "√3/2"],
        "options_hi": ["0", "1", "0.5", "√3/2"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which vitamin deficiency causes Osteoporosis?",
        "question_hi": "किस विटामिन की कमी से ऑस्टियोपोरोसिस होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
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
        "num": 42,
        "question_en": "Who discovered America?",
        "question_hi": "अमेरिका की खोज किसने की?",
        "options_en": ["Christopher Columbus", "Vasco da Gama", "Marco Polo", "James Cook"],
        "options_hi": ["क्रिस्टोफर कोलंबस", "वास्को डी गामा", "मार्को पोलो", "जेम्स कुक"],
        "answer_en": "Christopher Columbus",
        "answer_hi": "क्रिस्टोफर कोलंबस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the deepest ocean in the world?",
        "question_hi": "दुनिया का सबसे गहरा महासागर कौन सा है?",
        "options_en": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
        "answer_en": "Pacific Ocean",
        "answer_hi": "प्रशांत महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which gas is used in cigarette lighters?",
        "question_hi": "सिगरेट लाइटर में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Butane", "Propane", "Methane", "Ethane"],
        "options_hi": ["ब्यूटेन", "प्रोपेन", "मीथेन", "ईथेन"],
        "answer_en": "Butane",
        "answer_hi": "ब्यूटेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the chemical symbol for Aluminum?",
        "question_hi": "एल्युमिनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Al", "Am", "Au", "Ag"],
        "options_hi": ["Al", "Am", "Au", "Ag"],
        "answer_en": "Al",
        "answer_hi": "Al",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Who wrote 'Shakuntala'?",
        "question_hi": "'शकुंतला' किसने लिखा?",
        "options_en": ["Kalidasa", "Bhavabhuti", "Bhasa", "Sudraka"],
        "options_hi": ["कालिदास", "भवभूति", "भास", "शूद्रक"],
        "answer_en": "Kalidasa",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the formula for the volume of a cube?",
        "question_hi": "घन के आयतन का सूत्र क्या है?",
        "options_en": ["a³", "a²", "2a", "3a"],
        "options_hi": ["a³", "a²", "2a", "3a"],
        "answer_en": "a³",
        "answer_hi": "a³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which organ produces urine in the human body?",
        "question_hi": "मानव शरीर में कौन सा अंग मूत्र उत्पन्न करता है?",
        "options_en": ["Liver", "Kidneys", "Bladder", "Pancreas"],
        "options_hi": ["यकृत", "गुर्दे", "मूत्राशय", "अग्न्याशय"],
        "answer_en": "Kidneys",
        "answer_hi": "गुर्दे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the boiling point of alcohol in Celsius?",
        "question_hi": "अल्कोहल का क्वथनांक सेल्सियस में क्या है?",
        "options_en": ["78°C", "100°C", "50°C", "120°C"],
        "options_hi": ["78°C", "100°C", "50°C", "120°C"],
        "answer_en": "78°C",
        "answer_hi": "78°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which is the strongest muscle in human body?",
        "question_hi": "मानव शरीर की सबसे मजबूत मांसपेशी कौन सी है?",
        "options_en": ["Heart", "Jaw", "Thigh", "Tongue"],
        "options_hi": ["हृदय", "जबड़ा", "जांघ", "जीभ"],
        "answer_en": "Jaw",
        "answer_hi": "जबड़ा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the chemical formula of Phosphoric Acid?",
        "question_hi": "फॉस्फोरिक एसिड का रासायनिक सूत्र क्या है?",
        "options_en": ["H₃PO₄", "H₂SO₄", "HNO₃", "HCl"],
        "options_hi": ["H₃PO₄", "H₂SO₄", "HNO₃", "HCl"],
        "answer_en": "H₃PO₄",
        "answer_hi": "H₃PO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Who was the first Indian to win Nobel Prize?",
        "question_hi": "नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
        "options_en": ["Rabindranath Tagore", "C.V. Raman", "Mother Teresa", "Har Gobind Khorana"],
        "options_hi": ["रबींद्रनाथ टैगोर", "सी.वी. रमन", "मदर टेरेसा", "हर गोबिंद खुराना"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the formula for power?",
        "question_hi": "शक्ति का सूत्र क्या है?",
        "options_en": ["Work/Time", "Force × Distance", "Mass × Acceleration", "Voltage × Current"],
        "options_hi": ["कार्य/समय", "बल × दूरी", "द्रव्यमान × त्वरण", "वोल्टेज × धारा"],
        "answer_en": "Work/Time",
        "answer_hi": "कार्य/समय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which gas is used in air conditioners?",
        "question_hi": "एयर कंडीशनर में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Freon", "Ammonia", "Carbon dioxide", "Nitrogen"],
        "options_hi": ["फ्रेऑन", "अमोनिया", "कार्बन डाइऑक्साइड", "नाइट्रोजन"],
        "answer_en": "Freon",
        "answer_hi": "फ्रेऑन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
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
        "num": 56,
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
        "num": 57,
        "question_en": "What is the value of cos 30°?",
        "question_hi": "cos 30° का मान क्या है?",
        "options_en": ["√3/2", "1/2", "1", "0"],
        "options_hi": ["√3/2", "1/2", "1", "0"],
        "answer_en": "√3/2",
        "answer_hi": "√3/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which vitamin deficiency causes Xerophthalmia?",
        "question_hi": "किस विटामिन की कमी से जीरोफथालमिया होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the chemical formula of Ozone?",
        "question_hi": "ओजोन का रासायनिक सूत्र क्या है?",
        "options_en": ["O₂", "O₃", "O₄", "HO"],
        "options_hi": ["O₂", "O₃", "O₄", "HO"],
        "answer_en": "O₃",
        "answer_hi": "O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Who discovered the Electron?",
        "question_hi": "इलेक्ट्रॉन की खोज किसने की?",
        "options_en": ["J.J. Thomson", "Ernest Rutherford", "James Chadwick", "Niels Bohr"],
        "options_hi": ["जे.जे. थॉमसन", "अर्नेस्ट रदरफोर्ड", "जेम्स चैडविक", "नील्स बोहर"],
        "answer_en": "J.J. Thomson",
        "answer_hi": "जे.जे. थॉमसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the formula for simple interest?",
        "question_hi": "साधारण ब्याज का सूत्र क्या है?",
        "options_en": ["PRT/100", "P(1+R/100)ᵀ", "P + PRT", "P(1+R)ᵀ"],
        "options_hi": ["PRT/100", "P(1+R/100)ᵀ", "P + PRT", "P(1+R)ᵀ"],
        "answer_en": "PRT/100",
        "answer_hi": "PRT/100",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which gas is used in making soda water?",
        "question_hi": "सोडा वाटर बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the chemical symbol for Silicon?",
        "question_hi": "सिलिकॉन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Si", "Sl", "Sn", "Sc"],
        "options_hi": ["Si", "Sl", "Sn", "Sc"],
        "answer_en": "Si",
        "answer_hi": "Si",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Who wrote 'Kumarasambhava'?",
        "question_hi": "'कुमारसंभव' किसने लिखा?",
        "options_en": ["Kalidasa", "Bhavabhuti", "Bharavi", "Magha"],
        "options_hi": ["कालिदास", "भवभूति", "भारवि", "माघ"],
        "answer_en": "Kalidasa",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the formula for the area of a rectangle?",
        "question_hi": "आयत के क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["length × width", "2(length + width)", "length × height", "½ × base × height"],
        "options_hi": ["लंबाई × चौड़ाई", "2(लंबाई + चौड़ाई)", "लंबाई × ऊंचाई", "½ × आधार × ऊंचाई"],
        "answer_en": "length × width",
        "answer_hi": "लंबाई × चौड़ाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which organ stores bile in the human body?",
        "question_hi": "मानव शरीर में कौन सा अंग पित्त संग्रहीत करता है?",
        "options_en": ["Liver", "Gallbladder", "Pancreas", "Stomach"],
        "options_hi": ["यकृत", "पित्ताशय", "अग्न्याशय", "पेट"],
        "answer_en": "Gallbladder",
        "answer_hi": "पित्ताशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the chemical formula of Hydrochloric Acid?",
        "question_hi": "हाइड्रोक्लोरिक एसिड का रासायनिक सूत्र क्या है?",
        "options_en": ["HCl", "H₂SO₄", "HNO₃", "H₃PO₄"],
        "options_hi": ["HCl", "H₂SO₄", "HNO₃", "H₃PO₄"],
        "answer_en": "HCl",
        "answer_hi": "HCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Who was the first Indian to win an individual Olympic gold?",
        "question_hi": "व्यक्तिगत ओलंपिक स्वर्ण जीतने वाले पहले भारतीय कौन थे?",
        "options_en": ["Abhinav Bindra", "Neeraj Chopra", "P.V. Sindhu", "Sushil Kumar"],
        "options_hi": ["अभिनव बिंद्रा", "नीरज चोपड़ा", "पी.वी. सिंधु", "सुशील कुमार"],
        "answer_en": "Abhinav Bindra",
        "answer_hi": "अभिनव बिंद्रा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the formula for momentum?",
        "question_hi": "संवेग का सूत्र क्या है?",
        "options_en": ["mass × velocity", "force × time", "work/time", "mass × acceleration"],
        "options_hi": ["द्रव्यमान × वेग", "बल × समय", "कार्य/समय", "द्रव्यमान × त्वरण"],
        "answer_en": "mass × velocity",
        "answer_hi": "द्रव्यमान × वेग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which gas is used in weather balloons?",
        "question_hi": "मौसम के गुब्बारों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Helium", "Hydrogen", "Nitrogen", "Oxygen"],
        "options_hi": ["हीलियम", "हाइड्रोजन", "नाइट्रोजन", "ऑक्सीजन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the chemical symbol for Chlorine?",
        "question_hi": "क्लोरीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ch", "Cl", "Cr", "Cn"],
        "options_hi": ["Ch", "Cl", "Cr", "Cn"],
        "answer_en": "Cl",
        "answer_hi": "Cl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
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
        "num": 73,
        "question_en": "What is the value of sec 60°?",
        "question_hi": "sec 60° का मान क्या है?",
        "options_en": ["2", "1", "√2", "0"],
        "options_hi": ["2", "1", "√2", "0"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which vitamin deficiency causes Pernicious Anemia?",
        "question_hi": "किस विटामिन की कमी से पर्निशियस एनीमिया होता है?",
        "options_en": ["Vitamin B12", "Vitamin B6", "Vitamin C", "Vitamin K"],
        "options_hi": ["विटामिन B12", "विटामिन B6", "विटामिन C", "विटामिन K"],
        "answer_en": "Vitamin B12",
        "answer_hi": "विटामिन B12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the chemical formula of Calcium Carbonate?",
        "question_hi": "कैल्शियम कार्बोनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["CaCO₃", "Ca(OH)₂", "CaO", "CaSO₄"],
        "options_hi": ["CaCO₃", "Ca(OH)₂", "CaO", "CaSO₄"],
        "answer_en": "CaCO₃",
        "answer_hi": "CaCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Who discovered the Neutron?",
        "question_hi": "न्यूट्रॉन की खोज किसने की?",
        "options_en": ["James Chadwick", "Ernest Rutherford", "J.J. Thomson", "Niels Bohr"],
        "options_hi": ["जेम्स चैडविक", "अर्नेस्ट रदरफोर्ड", "जे.जे. थॉमसन", "नील्स बोहर"],
        "answer_en": "James Chadwick",
        "answer_hi": "जेम्स चैडविक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the formula for compound interest?",
        "question_hi": "चक्रवृद्धि ब्याज का सूत्र क्या है?",
        "options_en": ["P(1+R/100)ᵀ", "PRT/100", "P + PRT", "P(1+R)ᵀ"],
        "options_hi": ["P(1+R/100)ᵀ", "PRT/100", "P + PRT", "P(1+R)ᵀ"],
        "answer_en": "P(1+R/100)ᵀ",
        "answer_hi": "P(1+R/100)ᵀ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which gas is used in making ammonia?",
        "question_hi": "अमोनिया बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Nitrogen and Hydrogen", "Oxygen and Hydrogen", "Carbon and Hydrogen", "Nitrogen and Oxygen"],
        "options_hi": ["नाइट्रोजन और हाइड्रोजन", "ऑक्सीजन और हाइड्रोजन", "कार्बन और हाइड्रोजन", "नाइट्रोजन और ऑक्सीजन"],
        "answer_en": "Nitrogen and Hydrogen",
        "answer_hi": "नाइट्रोजन और हाइड्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the chemical symbol for Phosphorus?",
        "question_hi": "फॉस्फोरस का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ph", "P", "Ps", "Po"],
        "options_hi": ["Ph", "P", "Ps", "Po"],
        "answer_en": "P",
        "answer_hi": "P",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
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
        "num": 81,
        "question_en": "What is the value of cosec 30°?",
        "question_hi": "cosec 30° का मान क्या है?",
        "options_en": ["2", "1", "√2", "0"],
        "options_hi": ["2", "1", "√2", "0"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
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
        "num": 83,
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
        "num": 84,
        "question_en": "Who discovered the Proton?",
        "question_hi": "प्रोटॉन की खोज किसने की?",
        "options_en": ["Ernest Rutherford", "J.J. Thomson", "James Chadwick", "Niels Bohr"],
        "options_hi": ["अर्नेस्ट रदरफोर्ड", "जे.जे. थॉमसन", "जेम्स चैडविक", "नील्स बोहर"],
        "answer_en": "Ernest Rutherford",
        "answer_hi": "अर्नेस्ट रदरफोर्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the formula for the area of a parallelogram?",
        "question_hi": "समांतर चतुर्भुज के क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["base × height", "½ × base × height", "length × width", "side²"],
        "options_hi": ["आधार × ऊंचाई", "½ × आधार × ऊंचाई", "लंबाई × चौड़ाई", "भुजा²"],
        "answer_en": "base × height",
        "answer_hi": "आधार × ऊंचाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which organ produces insulin in the human body?",
        "question_hi": "मानव शरीर में कौन सा अंग इंसुलिन उत्पन्न करता है?",
        "options_en": ["Pancreas", "Liver", "Kidneys", "Stomach"],
        "options_hi": ["अग्न्याशय", "यकृत", "गुर्दे", "पेट"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
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
        "num": 88,
        "question_en": "Who was the first Indian woman to climb Mount Everest?",
        "question_hi": "माउंट एवरेस्ट पर चढ़ने वाली पहली भारतीय महिला कौन थीं?",
        "options_en": ["Bachendri Pal", "Santosh Yadav", "Arunima Sinha", "Premlata Agarwal"],
        "options_hi": ["बछेंद्री पाल", "संतोष यादव", "अरुनिमा सिन्हा", "प्रेमलता अग्रवाल"],
        "answer_en": "Bachendri Pal",
        "answer_hi": "बछेंद्री पाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the formula for force?",
        "question_hi": "बल का सूत्र क्या है?",
        "options_en": ["mass × acceleration", "work/distance", "pressure × area", "momentum/time"],
        "options_hi": ["द्रव्यमान × त्वरण", "कार्य/दूरी", "दबाव × क्षेत्रफल", "संवेग/समय"],
        "answer_en": "mass × acceleration",
        "answer_hi": "द्रव्यमान × त्वरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which gas is used in making plastic?",
        "question_hi": "प्लास्टिक बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Ethene", "Ethane", "Methane", "Propane"],
        "options_hi": ["ईथीन", "ईथेन", "मीथेन", "प्रोपेन"],
        "answer_en": "Ethene",
        "answer_hi": "ईथीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the chemical symbol for Iodine?",
        "question_hi": "आयोडीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Io", "I", "In", "Id"],
        "options_hi": ["Io", "I", "In", "Id"],
        "answer_en": "I",
        "answer_hi": "I",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
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
        "num": 93,
        "question_en": "What is the value of cot 30°?",
        "question_hi": "cot 30° का मान क्या है?",
        "options_en": ["√3", "1", "1/√3", "0"],
        "options_hi": ["√3", "1", "1/√3", "0"],
        "answer_en": "√3",
        "answer_hi": "√3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which vitamin deficiency causes Scurvy?",
        "question_hi": "किस विटामिन की कमी से स्कर्वी रोग होता है?",
        "options_en": ["Vitamin C", "Vitamin B", "Vitamin A", "Vitamin D"],
        "options_hi": ["विटामिन C", "विटामिन B", "विटामिन A", "विटामिन D"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
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
        "num": 96,
        "question_en": "Who discovered the Law of Gravity?",
        "question_hi": "गुरुत्वाकर्षण के नियम की खोज किसने की?",
        "options_en": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Archimedes"],
        "options_hi": ["आइजैक न्यूटन", "अल्बर्ट आइंस्टीन", "गैलीलियो गैलीली", "आर्किमिडीज"],
        "answer_en": "Isaac Newton",
        "answer_hi": "आइजैक न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the formula for the volume of a cylinder?",
        "question_hi": "बेलन के आयतन का सूत्र क्या है?",
        "options_en": ["πr²h", "2πrh", "πr²", "2πr²"],
        "options_hi": ["πr²h", "2πrh", "πr²", "2πr²"],
        "answer_en": "πr²h",
        "answer_hi": "πr²h",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which gas is used in making fertilizers?",
        "question_hi": "उर्वरक बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Ammonia", "Methane", "Carbon dioxide", "Oxygen"],
        "options_hi": ["अमोनिया", "मीथेन", "कार्बन डाइऑक्साइड", "ऑक्सीजन"],
        "answer_en": "Ammonia",
        "answer_hi": "अमोनिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the chemical symbol for Bromine?",
        "question_hi": "ब्रोमीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Br", "B", "Bm", "Be"],
        "options_hi": ["Br", "B", "Bm", "Be"],
        "answer_en": "Br",
        "answer_hi": "Br",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Who wrote 'Ritusamhara'?",
        "question_hi": "'ऋतुसंहार' किसने लिखा?",
        "options_en": ["Kalidasa", "Bharavi", "Magha", "Bhavabhuti"],
        "options_hi": ["कालिदास", "भारवि", "माघ", "भवभूति"],
        "answer_en": "Kalidasa",
        "answer_hi": "कालिदास",
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