const questions = [
    {
        "num": 1,
        "question_en": "What is the chemical formula of Hydrochloric Acid?",
        "question_hi": "हाइड्रोक्लोरिक एसिड का रासायनिक सूत्र क्या है?",
        "options_en": ["HCl", "H₂Cl", "HCl₂", "H₃Cl"],
        "options_hi": ["HCl", "H₂Cl", "HCl₂", "H₃Cl"],
        "answer_en": "HCl",
        "answer_hi": "HCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Who wrote 'Macbeth'?",
        "question_hi": "'मैकबेथ' किसने लिखा?",
        "options_en": ["Christopher Marlowe", "William Shakespeare", "Ben Jonson", "John Webster"],
        "options_hi": ["क्रिस्टोफर मार्लो", "विलियम शेक्सपियर", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the value of 15² - 5²?",
        "question_hi": "15² - 5² का मान क्या है?",
        "options_en": ["200", "225", "175", "150"],
        "options_hi": ["200", "225", "175", "150"],
        "answer_en": "200",
        "answer_hi": "200",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which part of the human eye controls the amount of light entering?",
        "question_hi": "मानव आंख का कौन सा भाग प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है?",
        "options_en": ["Retina", "Cornea", "Iris", "Lens"],
        "options_hi": ["रेटिना", "कॉर्निया", "आईरिस", "लेंस"],
        "answer_en": "Iris",
        "answer_hi": "आईरिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the SI unit of electric potential?",
        "question_hi": "विद्युत विभव की SI इकाई क्या है?",
        "options_en": ["Ampere", "Volt", "Ohm", "Watt"],
        "options_hi": ["एम्पियर", "वोल्ट", "ओम", "वाट"],
        "answer_en": "Volt",
        "answer_hi": "वोल्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Who wrote 'Kamayani'?",
        "question_hi": "'कामायनी' किसने लिखी?",
        "options_en": ["Jaishankar Prasad", "Mahadevi Verma", "Suryakant Tripathi Nirala", "Sumitranandan Pant"],
        "options_hi": ["जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी निराला", "सुमित्रानंदन पंत"],
        "answer_en": "Jaishankar Prasad",
        "answer_hi": "जयशंकर प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which country is known as the 'Land of the Midnight Sun'?",
        "question_hi": "किस देश को 'मध्यरात्रि सूर्य की भूमि' के रूप में जाना जाता है?",
        "options_en": ["Sweden", "Norway", "Finland", "Iceland"],
        "options_hi": ["स्वीडन", "नॉर्वे", "फिनलैंड", "आइसलैंड"],
        "answer_en": "Norway",
        "answer_hi": "नॉर्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the solution of 3x + 7 = 22?",
        "question_hi": "3x + 7 = 22 का हल क्या है?",
        "options_en": ["x = 5", "x = 6", "x = 7", "x = 8"],
        "options_hi": ["x = 5", "x = 6", "x = 7", "x = 8"],
        "answer_en": "x = 5",
        "answer_hi": "x = 5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which gas is used in advertising signs?",
        "question_hi": "विज्ञापन साइनों में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Helium", "Neon", "Argon", "Xenon"],
        "options_hi": ["हीलियम", "नियॉन", "आर्गन", "जेनॉन"],
        "answer_en": "Neon",
        "answer_hi": "नियॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the chemical symbol for Tungsten?",
        "question_hi": "टंगस्टन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Tu", "Tg", "W", "Ts"],
        "options_hi": ["Tu", "Tg", "W", "Ts"],
        "answer_en": "W",
        "answer_hi": "W",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Who discovered the circulation of blood?",
        "question_hi": "रक्त परिसंचरण की खोज किसने की?",
        "options_en": ["William Harvey", "Louis Pasteur", "Robert Koch", "Alexander Fleming"],
        "options_hi": ["विलियम हार्वे", "लुई पाश्चर", "रॉबर्ट कोच", "अलेक्जेंडर फ्लेमिंग"],
        "answer_en": "William Harvey",
        "answer_hi": "विलियम हार्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
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
        "num": 13,
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
        "num": 14,
        "question_en": "What is the formula for area of a parallelogram?",
        "question_hi": "समांतर चतुर्भुज के क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["base × height", "½ × base × height", "side²", "length × width"],
        "options_hi": ["आधार × ऊंचाई", "½ × आधार × ऊंचाई", "भुजा²", "लंबाई × चौड़ाई"],
        "answer_en": "base × height",
        "answer_hi": "आधार × ऊंचाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which vitamin is essential for blood clotting?",
        "question_hi": "रक्त के थक्के जमने के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the chemical name of Blue Vitriol?",
        "question_hi": "ब्लू विट्रियल का रासायनिक नाम क्या है?",
        "options_en": ["Copper Sulfate", "Copper Oxide", "Copper Carbonate", "Copper Nitrate"],
        "options_hi": ["कॉपर सल्फेट", "कॉपर ऑक्साइड", "कॉपर कार्बोनेट", "कॉपर नाइट्रेट"],
        "answer_en": "Copper Sulfate",
        "answer_hi": "कॉपर सल्फेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Who was the first Indian to go to space?",
        "question_hi": "अंतरिक्ष में जाने वाले पहले भारतीय कौन थे?",
        "options_en": ["Rakesh Sharma", "Kalpana Chawla", "Sunita Williams", "Ravish Malhotra"],
        "options_hi": ["राकेश शर्मा", "कल्पना चावला", "सुनीता विलियम्स", "रवीश मल्होत्रा"],
        "answer_en": "Rakesh Sharma",
        "answer_hi": "राकेश शर्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the value of sin 60°?",
        "question_hi": "sin 60° का मान क्या है?",
        "options_en": ["1/2", "√3/2", "1/√2", "√2/2"],
        "options_hi": ["1/2", "√3/2", "1/√2", "√2/2"],
        "answer_en": "√3/2",
        "answer_hi": "√3/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which part of the cell is called the 'powerhouse'?",
        "question_hi": "कोशिका के किस भाग को 'पावरहाउस' कहा जाता है?",
        "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the speed of light in glass?",
        "question_hi": "कांच में प्रकाश की गति क्या है?",
        "options_en": ["3×10⁸ m/s", "2×10⁸ m/s", "1.5×10⁸ m/s", "2.5×10⁸ m/s"],
        "options_hi": ["3×10⁸ m/s", "2×10⁸ m/s", "1.5×10⁸ m/s", "2.5×10⁸ m/s"],
        "answer_en": "2×10⁸ m/s",
        "answer_hi": "2×10⁸ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which is the largest freshwater lake in the world?",
        "question_hi": "दुनिया की सबसे बड़ी मीठे पानी की झील कौन सी है?",
        "options_en": ["Lake Superior", "Lake Victoria", "Lake Baikal", "Lake Michigan"],
        "options_hi": ["लेक सुपीरियर", "लेक विक्टोरिया", "लेक बैकाल", "लेक मिशिगन"],
        "answer_en": "Lake Superior",
        "answer_hi": "लेक सुपीरियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the chemical formula of Acetic Acid?",
        "question_hi": "एसिटिक एसिड का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₃COOH", "H₂SO₄", "HCl", "HNO₃"],
        "options_hi": ["CH₃COOH", "H₂SO₄", "HCl", "HNO₃"],
        "answer_en": "CH₃COOH",
        "answer_hi": "CH₃COOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Who wrote 'The Tempest'?",
        "question_hi": "'द टेम्पेस्ट' किसने लिखा?",
        "options_en": ["Christopher Marlowe", "William Shakespeare", "Ben Jonson", "John Webster"],
        "options_hi": ["क्रिस्टोफर मार्लो", "विलियम शेक्सपियर", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the formula for specific heat capacity?",
        "question_hi": "विशिष्ट ऊष्मा धारिता का सूत्र क्या है?",
        "options_en": ["Q/mΔT", "mQ/ΔT", "ΔT/mQ", "QΔT/m"],
        "options_hi": ["Q/mΔT", "mQ/ΔT", "ΔT/mQ", "QΔT/m"],
        "answer_en": "Q/mΔT",
        "answer_hi": "Q/mΔT",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which gas is used by plants during respiration?",
        "question_hi": "पौधे श्वसन के दौरान कौन सी गैस का उपयोग करते हैं?",
        "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the value of (a + b)(a - b)?",
        "question_hi": "(a + b)(a - b) का मान क्या है?",
        "options_en": ["a² - b²", "a² + b²", "a² - 2ab + b²", "a² + 2ab + b²"],
        "options_hi": ["a² - b²", "a² + b²", "a² - 2ab + b²", "a² + 2ab + b²"],
        "answer_en": "a² - b²",
        "answer_hi": "a² - b²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which is the largest coral reef system in the world?",
        "question_hi": "दुनिया की सबसे बड़ी कोरल रीफ प्रणाली कौन सी है?",
        "options_en": ["Great Barrier Reef", "Mesoamerican Reef", "New Caledonia Barrier Reef", "Florida Reef"],
        "options_hi": ["ग्रेट बैरियर रीफ", "मेसोअमेरिकन रीफ", "न्यू कैलेडोनिया बैरियर रीफ", "फ्लोरिडा रीफ"],
        "answer_en": "Great Barrier Reef",
        "answer_hi": "ग्रेट बैरियर रीफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the chemical symbol for Platinum?",
        "question_hi": "प्लैटिनम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Pl", "Pt", "Pn", "Pa"],
        "options_hi": ["Pl", "Pt", "Pn", "Pa"],
        "answer_en": "Pt",
        "answer_hi": "Pt",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Who is known as the Father of Modern Physics?",
        "question_hi": "आधुनिक भौतिकी के पिता के रूप में किसे जाना जाता है?",
        "options_en": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"],
        "options_hi": ["अल्बर्ट आइंस्टीन", "आइजैक न्यूटन", "गैलीलियो गैलीली", "नील्स बोहर"],
        "answer_en": "Albert Einstein",
        "answer_hi": "अल्बर्ट आइंस्टीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which part of the plant absorbs water and minerals?",
        "question_hi": "पौधे का कौन सा भाग पानी और खनिजों को अवशोषित करता है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
        "answer_en": "Root",
        "answer_hi": "जड़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
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
        "num": 32,
        "question_en": "Which is the lightest metal?",
        "question_hi": "सबसे हल्की धातु कौन सी है?",
        "options_en": ["Aluminum", "Lithium", "Magnesium", "Sodium"],
        "options_hi": ["एल्युमिनियम", "लिथियम", "मैग्नीशियम", "सोडियम"],
        "answer_en": "Lithium",
        "answer_hi": "लिथियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the chemical formula of Calcium Oxide?",
        "question_hi": "कैल्शियम ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "options_hi": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "answer_en": "CaO",
        "answer_hi": "CaO",
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
        "question_en": "What is the value of 12 × 13?",
        "question_hi": "12 × 13 का मान क्या है?",
        "options_en": ["156", "144", "168", "132"],
        "options_hi": ["156", "144", "168", "132"],
        "answer_en": "156",
        "answer_hi": "156",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which gas is used in electric bulbs?",
        "question_hi": "विद्युत बल्बों में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Nitrogen", "Argon", "Helium"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "हीलियम"],
        "answer_en": "Argon",
        "answer_hi": "आर्गन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the chemical symbol for Manganese?",
        "question_hi": "मैंगनीज का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ma", "Mg", "Mn", "Ms"],
        "options_hi": ["Ma", "Mg", "Mn", "Ms"],
        "answer_en": "Mn",
        "answer_hi": "Mn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Who wrote 'Shakuntala'?",
        "question_hi": "'शकुंतला' किसने लिखा?",
        "options_en": ["Bhasa", "Kalidasa", "Bhavabhuti", "Sudraka"],
        "options_hi": ["भास", "कालिदास", "भवभूति", "शूद्रक"],
        "answer_en": "Kalidasa",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
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
        "num": 40,
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
        "num": 41,
        "question_en": "What is the capital of Egypt?",
        "question_hi": "मिस्र की राजधानी क्या है?",
        "options_en": ["Cairo", "Alexandria", "Giza", "Luxor"],
        "options_hi": ["काहिरा", "अलेक्जेंड्रिया", "गीज़ा", "लक्सर"],
        "answer_en": "Cairo",
        "answer_hi": "काहिरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the chemical formula of Propane?",
        "question_hi": "प्रोपेन का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "answer_en": "C₃H₈",
        "answer_hi": "C₃H₈",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Who discovered Radioactivity?",
        "question_hi": "रेडियोधर्मिता की खोज किसने की?",
        "options_en": ["Marie Curie", "Henri Becquerel", "Ernest Rutherford", "Pierre Curie"],
        "options_hi": ["मैरी क्यूरी", "हेनरी बेकरेल", "अर्नेस्ट रदरफोर्ड", "पियरे क्यूरी"],
        "answer_en": "Henri Becquerel",
        "answer_hi": "हेनरी बेकरेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the value of cos 0°?",
        "question_hi": "cos 0° का मान क्या है?",
        "options_en": ["0", "1", "0.5", "√3/2"],
        "options_hi": ["0", "1", "0.5", "√3/2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which is the smallest planet in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे छोटा ग्रह कौन सा है?",
        "options_en": ["Mars", "Mercury", "Venus", "Pluto"],
        "options_hi": ["मंगल", "बुध", "शुक्र", "प्लूटो"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the chemical name of Caustic Soda?",
        "question_hi": "कास्टिक सोडा का रासायनिक नाम क्या है?",
        "options_en": ["Sodium Carbonate", "Sodium Bicarbonate", "Sodium Hydroxide", "Sodium Chloride"],
        "options_hi": ["सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट", "सोडियम हाइड्रॉक्साइड", "सोडियम क्लोराइड"],
        "answer_en": "Sodium Hydroxide",
        "answer_hi": "सोडियम हाइड्रॉक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Who wrote 'The Adventures of Tom Sawyer'?",
        "question_hi": "'द एडवेंचर्स ऑफ टॉम सॉयर' किसने लिखी?",
        "options_en": ["Mark Twain", "Charles Dickens", "Robert Louis Stevenson", "Jack London"],
        "options_hi": ["मार्क ट्वेन", "चार्ल्स डिकेंस", "रॉबर्ट लुई स्टीवेंसन", "जैक लंदन"],
        "answer_en": "Mark Twain",
        "answer_hi": "मार्क ट्वेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the formula for volume of a cone?",
        "question_hi": "शंकु के आयतन का सूत्र क्या है?",
        "options_en": ["⅓πr²h", "πr²h", "⅔πr²h", "πr²h/2"],
        "options_hi": ["⅓πr²h", "πr²h", "⅔πr²h", "πr²h/2"],
        "answer_en": "⅓πr²h",
        "answer_hi": "⅓πr²h",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which blood cells are responsible for clotting?",
        "question_hi": "कौन सी रक्त कोशिकाएं थक्का जमाने के लिए जिम्मेदार हैं?",
        "options_en": ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"],
        "options_hi": ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
        "answer_en": "Platelets",
        "answer_hi": "प्लेटलेट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
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
        "num": 51,
        "question_en": "Which is the largest bay in the world?",
        "question_hi": "दुनिया की सबसे बड़ी खाड़ी कौन सी है?",
        "options_en": ["Bay of Bengal", "Hudson Bay", "Chesapeake Bay", "San Francisco Bay"],
        "options_hi": ["बंगाल की खाड़ी", "हडसन बे", "चेसापीक बे", "सैन फ्रांसिस्को बे"],
        "answer_en": "Bay of Bengal",
        "answer_hi": "बंगाल की खाड़ी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the chemical formula of Nitrous Oxide?",
        "question_hi": "नाइट्रस ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["NO", "NO₂", "N₂O", "N₂O₃"],
        "options_hi": ["NO", "NO₂", "N₂O", "N₂O₃"],
        "answer_en": "N₂O",
        "answer_hi": "N₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
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
        "num": 54,
        "question_en": "What is the formula for force?",
        "question_hi": "बल का सूत्र क्या है?",
        "options_en": ["mass × acceleration", "mass × velocity", "work/distance", "pressure × area"],
        "options_hi": ["द्रव्यमान × त्वरण", "द्रव्यमान × वेग", "कार्य/दूरी", "दाब × क्षेत्रफल"],
        "answer_en": "mass × acceleration",
        "answer_hi": "द्रव्यमान × त्वरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
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
        "num": 56,
        "question_en": "What is the chemical symbol for Chromium?",
        "question_hi": "क्रोमियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ch", "Cr", "Cm", "Co"],
        "options_hi": ["Ch", "Cr", "Cm", "Co"],
        "answer_en": "Cr",
        "answer_hi": "Cr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Who is known as the Frontier Gandhi?",
        "question_hi": "फ्रंटियर गांधी के रूप में किसे जाना जाता है?",
        "options_en": ["Khan Abdul Ghaffar Khan", "Mahatma Gandhi", "Bal Gangadhar Tilak", "Lala Lajpat Rai"],
        "options_hi": ["खान अब्दुल गफ्फार खान", "महात्मा गांधी", "बाल गंगाधर तिलक", "लाला लाजपत राय"],
        "answer_en": "Khan Abdul Ghaffar Khan",
        "answer_hi": "खान अब्दुल गफ्फार खान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the value of tan 30°?",
        "question_hi": "tan 30° का मान क्या है?",
        "options_en": ["1/√3", "√3", "1", "0"],
        "options_hi": ["1/√3", "√3", "1", "0"],
        "answer_en": "1/√3",
        "answer_hi": "1/√3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which gas is used in food packaging?",
        "question_hi": "खाद्य पैकेजिंग में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हीलियम"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the unit of charge?",
        "question_hi": "आवेश की इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Coulomb", "Ohm"],
        "options_hi": ["वोल्ट", "एम्पियर", "कूलम्ब", "ओम"],
        "answer_en": "Coulomb",
        "answer_hi": "कूलम्ब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which is the highest mountain peak in India?",
        "question_hi": "भारत की सबसे ऊंची पर्वत चोटी कौन सी है?",
        "options_en": ["Mount Everest", "Kanchenjunga", "Nanda Devi", "Kamet"],
        "options_hi": ["माउंट एवरेस्ट", "कंचनजंगा", "नंदा देवी", "कामेत"],
        "answer_en": "Kanchenjunga",
        "answer_hi": "कंचनजंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the chemical formula of Sulfur Trioxide?",
        "question_hi": "सल्फर ट्राइऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["SO", "SO₂", "SO₃", "S₂O"],
        "options_hi": ["SO", "SO₂", "SO₃", "S₂O"],
        "answer_en": "SO₃",
        "answer_hi": "SO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Who wrote 'The Lord of the Rings'?",
        "question_hi": "'द लॉर्ड ऑफ द रिंग्स' किसने लिखा?",
        "options_en": ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "George R.R. Martin"],
        "options_hi": ["जे.आर.आर. टॉल्किन", "सी.एस. लुईस", "जे.के. रोलिंग", "जॉर्ज आर.आर. मार्टिन"],
        "answer_en": "J.R.R. Tolkien",
        "answer_hi": "जे.आर.आर. टॉल्किन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
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
        "num": 65,
        "question_en": "Which vitamin is essential for bone health?",
        "question_hi": "हड्डियों के स्वास्थ्य के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the chemical symbol for Aluminum?",
        "question_hi": "एल्युमिनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Al", "Am", "An", "Au"],
        "options_hi": ["Al", "Am", "An", "Au"],
        "answer_en": "Al",
        "answer_hi": "Al",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
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
        "num": 68,
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
        "num": 69,
        "question_en": "Which gas is used in semiconductor industry?",
        "question_hi": "सेमीकंडक्टर उद्योग में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Nitrogen", "Argon", "Silane"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "सिलेन"],
        "answer_en": "Silane",
        "answer_hi": "सिलेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the unit of work?",
        "question_hi": "कार्य की इकाई क्या है?",
        "options_en": ["Watt", "Joule", "Newton", "Pascal"],
        "options_hi": ["वाट", "जूल", "न्यूटन", "पास्कल"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which is the national bird of India?",
        "question_hi": "भारत का राष्ट्रीय पक्षी कौन सा है?",
        "options_en": ["Peacock", "Parrot", "Sparrow", "Eagle"],
        "options_hi": ["मोर", "तोता", "गौरैया", "ईगल"],
        "answer_en": "Peacock",
        "answer_hi": "मोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the chemical formula of Calcium Hydroxide?",
        "question_hi": "कैल्शियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "options_hi": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "answer_en": "Ca(OH)₂",
        "answer_hi": "Ca(OH)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Who wrote 'Animal Farm'?",
        "question_hi": "'एनिमल फार्म' किसने लिखा?",
        "options_en": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "H.G. Wells"],
        "options_hi": ["जॉर्ज ऑरवेल", "एल्डस हक्सले", "रे ब्रैडबरी", "एच.जी. वेल्स"],
        "answer_en": "George Orwell",
        "answer_hi": "जॉर्ज ऑरवेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the formula for velocity?",
        "question_hi": "वेग का सूत्र क्या है?",
        "options_en": ["distance/time", "displacement/time", "acceleration × time", "force/mass"],
        "options_hi": ["दूरी/समय", "विस्थापन/समय", "त्वरण × समय", "बल/द्रव्यमान"],
        "answer_en": "displacement/time",
        "answer_hi": "विस्थापन/समय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which vitamin deficiency causes Anemia?",
        "question_hi": "किस विटामिन की कमी से एनीमिया होता है?",
        "options_en": ["Vitamin B12", "Vitamin C", "Vitamin D", "Vitamin E"],
        "options_hi": ["विटामिन B12", "विटामिन C", "विटामिन D", "विटामिन E"],
        "answer_en": "Vitamin B12",
        "answer_hi": "विटामिन B12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the chemical symbol for Cobalt?",
        "question_hi": "कोबाल्ट का रासायनिक प्रतीक क्या है?",
        "options_en": ["Cb", "Co", "Ct", "Ca"],
        "options_hi": ["Cb", "Co", "Ct", "Ca"],
        "answer_en": "Co",
        "answer_hi": "Co",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Who is known as the Grand Old Man of India?",
        "question_hi": "भारत के ग्रैंड ओल्ड मैन के रूप में किसे जाना जाता है?",
        "options_en": ["Dadabhai Naoroji", "Gopal Krishna Gokhale", "Bal Gangadhar Tilak", "Lala Lajpat Rai"],
        "options_hi": ["दादाभाई नौरोजी", "गोपाल कृष्ण गोखले", "बाल गंगाधर तिलक", "लाला लाजपत राय"],
        "answer_en": "Dadabhai Naoroji",
        "answer_hi": "दादाभाई नौरोजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the value of cos 180°?",
        "question_hi": "cos 180° का मान क्या है?",
        "options_en": ["0", "1", "-1", "0.5"],
        "options_hi": ["0", "1", "-1", "0.5"],
        "answer_en": "-1",
        "answer_hi": "-1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which gas is used in medical imaging?",
        "question_hi": "चिकित्सा इमेजिंग में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Xenon", "Helium", "Nitrogen"],
        "options_hi": ["ऑक्सीजन", "जेनॉन", "हीलियम", "नाइट्रोजन"],
        "answer_en": "Xenon",
        "answer_hi": "जेनॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
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
        "num": 81,
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
        "num": 82,
        "question_en": "What is the chemical formula of Potassium Permanganate?",
        "question_hi": "पोटेशियम परमैंगनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["KMnO₄", "K₂MnO₄", "KMnO₃", "K₂MnO₃"],
        "options_hi": ["KMnO₄", "K₂MnO₄", "KMnO₃", "K₂MnO₃"],
        "answer_en": "KMnO₄",
        "answer_hi": "KMnO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Who wrote 'The Alchemist'?",
        "question_hi": "'द अलकेमिस्ट' किसने लिखा?",
        "options_en": ["Paulo Coelho", "Gabriel Garcia Marquez", "Isabel Allende", "Jorge Amado"],
        "options_hi": ["पाउलो कोएल्हो", "गेब्रियल गार्सिया मार्केज़", "इसाबेल अलेंदे", "जोर्ज अमाडो"],
        "answer_en": "Paulo Coelho",
        "answer_hi": "पाउलो कोएल्हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
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
        "num": 85,
        "question_en": "Which vitamin is essential for vision?",
        "question_hi": "दृष्टि के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the chemical symbol for Arsenic?",
        "question_hi": "आर्सेनिक का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ar", "As", "An", "Ac"],
        "options_hi": ["Ar", "As", "An", "Ac"],
        "answer_en": "As",
        "answer_hi": "As",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Who was the first Indian to win Nobel Prize?",
        "question_hi": "नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
        "options_en": ["Rabindranath Tagore", "C.V. Raman", "Mother Teresa", "Hargobind Khorana"],
        "options_hi": ["रबींद्रनाथ टैगोर", "सी.वी. रमन", "मदर टेरेसा", "हरगोबिंद खुराना"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
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
        "question_en": "Which gas is used in laser technology?",
        "question_hi": "लेजर प्रौद्योगिकी में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Helium", "Neon", "Carbon Dioxide", "Argon"],
        "options_hi": ["हीलियम", "नियॉन", "कार्बन डाइऑक्साइड", "आर्गन"],
        "answer_en": "Carbon Dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
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
        "num": 91,
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
        "num": 92,
        "question_en": "What is the chemical formula of Sodium Carbonate?",
        "question_hi": "सोडियम कार्बोनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["NaHCO₃", "Na₂CO₃", "NaOH", "NaCl"],
        "options_hi": ["NaHCO₃", "Na₂CO₃", "NaOH", "NaCl"],
        "answer_en": "Na₂CO₃",
        "answer_hi": "Na₂CO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Who wrote 'The Diary of a Young Girl'?",
        "question_hi": "'द डायरी ऑफ अ यंग गर्ल' किसने लिखी?",
        "options_en": ["Anne Frank", "Helen Keller", "Malala Yousafzai", "Eva Schloss"],
        "options_hi": ["ऐन फ्रैंक", "हेलेन केलर", "मलाला यूसुफजई", "ईवा श्लॉस"],
        "answer_en": "Anne Frank",
        "answer_hi": "ऐन फ्रैंक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the formula for acceleration due to gravity?",
        "question_hi": "गुरुत्वाकर्षण के कारण त्वरण का सूत्र क्या है?",
        "options_en": ["g", "G", "mg", "Gm/r²"],
        "options_hi": ["g", "G", "mg", "Gm/r²"],
        "answer_en": "g",
        "answer_hi": "g",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which vitamin is essential for DNA synthesis?",
        "question_hi": "DNA संश्लेषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B9", "Vitamin B12", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन B9", "विटामिन B12", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin B9",
        "answer_hi": "विटामिन B9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the chemical symbol for Radium?",
        "question_hi": "रेडियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Rd", "Ra", "Rm", "Rn"],
        "options_hi": ["Rd", "Ra", "Rm", "Rn"],
        "answer_en": "Ra",
        "answer_hi": "Ra",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Who is known as the Water Man of India?",
        "question_hi": "भारत के वाटर मैन के रूप में किसे जाना जाता है?",
        "options_en": ["Rajendra Singh", "Sunderlal Bahuguna", "Medha Patkar", "Anna Hazare"],
        "options_hi": ["राजेंद्र सिंह", "सुंदरलाल बहुगुणा", "मेधा पाटकर", "अण्णा हजारे"],
        "answer_en": "Rajendra Singh",
        "answer_hi": "राजेंद्र सिंह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the value of sin 180°?",
        "question_hi": "sin 180° का मान क्या है?",
        "options_en": ["0", "1", "-1", "0.5"],
        "options_hi": ["0", "1", "-1", "0.5"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which gas is used in air conditioning?",
        "question_hi": "एयर कंडीशनिंग में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Freon", "Nitrogen", "Helium"],
        "options_hi": ["ऑक्सीजन", "फ्रेऑन", "नाइट्रोजन", "हीलियम"],
        "answer_en": "Freon",
        "answer_hi": "फ्रेऑन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the unit of magnetic flux?",
        "question_hi": "चुंबकीय फ्लक्स की इकाई क्या है?",
        "options_en": ["Tesla", "Weber", "Henry", "Farad"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "फैरड"],
        "answer_en": "Weber",
        "answer_hi": "वेबर",
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