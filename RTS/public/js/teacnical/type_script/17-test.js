const questions = [
    {
        "num": 1,
        "question_en": "What is the chemical formula of Nitric Acid?",
        "question_hi": "नाइट्रिक एसिड का रासायनिक सूत्र क्या है?",
        "options_en": ["HNO₂", "HNO₃", "H₂NO₃", "H₃NO₃"],
        "options_hi": ["HNO₂", "HNO₃", "H₂NO₃", "H₃NO₃"],
        "answer_en": "HNO₃",
        "answer_hi": "HNO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Who wrote 'Hamlet'?",
        "question_hi": "'हैमलेट' किसने लिखा?",
        "options_en": ["Christopher Marlowe", "William Shakespeare", "Ben Jonson", "John Webster"],
        "options_hi": ["क्रिस्टोफर मार्लो", "विलियम शेक्सपियर", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the value of 7² + 3³?",
        "question_hi": "7² + 3³ का मान क्या है?",
        "options_en": ["58", "76", "49", "67"],
        "options_hi": ["58", "76", "49", "67"],
        "answer_en": "76",
        "answer_hi": "76",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which part of the brain controls balance and coordination?",
        "question_hi": "मस्तिष्क का कौन सा भाग संतुलन और समन्वय को नियंत्रित करता है?",
        "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
        "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला", "हाइपोथैलेमस"],
        "answer_en": "Cerebellum",
        "answer_hi": "सेरेबेलम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
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
        "num": 6,
        "question_en": "Who wrote 'Madhushala'?",
        "question_hi": "'मधुशाला' किसने लिखी?",
        "options_en": ["Mahadevi Verma", "Harivansh Rai Bachchan", "Suryakant Tripathi Nirala", "Sumitranandan Pant"],
        "options_hi": ["महादेवी वर्मा", "हरिवंश राय बच्चन", "सूर्यकांत त्रिपाठी निराला", "सुमित्रानंदन पंत"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which country is known as the 'Land of the Rising Sun'?",
        "question_hi": "किस देश को 'उगते सूरज की भूमि' के रूप में जाना जाता है?",
        "options_en": ["China", "Japan", "South Korea", "Thailand"],
        "options_hi": ["चीन", "जापान", "दक्षिण कोरिया", "थाईलैंड"],
        "answer_en": "Japan",
        "answer_hi": "जापान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the solution of x² - 5x + 6 = 0?",
        "question_hi": "x² - 5x + 6 = 0 का हल क्या है?",
        "options_en": ["x = 2,3", "x = 1,6", "x = -2,-3", "x = -1,-6"],
        "options_hi": ["x = 2,3", "x = 1,6", "x = -2,-3", "x = -1,-6"],
        "answer_en": "x = 2,3",
        "answer_hi": "x = 2,3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which gas is used in refrigerator?",
        "question_hi": "रेफ्रिजरेटर में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Ammonia", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["अमोनिया", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Ammonia",
        "answer_hi": "अमोनिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
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
        "num": 11,
        "question_en": "Who proposed the Theory of Evolution?",
        "question_hi": "विकासवाद के सिद्धांत को किसने प्रस्तावित किया?",
        "options_en": ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Alfred Wallace"],
        "options_hi": ["चार्ल्स डार्विन", "ग्रेगर मेंडल", "लुई पाश्चर", "अल्फ्रेड वालेस"],
        "answer_en": "Charles Darwin",
        "answer_hi": "चार्ल्स डार्विन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
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
        "num": 13,
        "question_en": "Which planet is known as the 'Evening Star'?",
        "question_hi": "कौन सा ग्रह 'शाम का तारा' के नाम से जाना जाता है?",
        "options_en": ["Mars", "Venus", "Mercury", "Jupiter"],
        "options_hi": ["मंगल", "शुक्र", "बुध", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the formula for volume of a cylinder?",
        "question_hi": "बेलन के आयतन का सूत्र क्या है?",
        "options_en": ["πr²h", "2πrh", "πr²", "2πr²h"],
        "options_hi": ["πr²h", "2πrh", "πr²", "2πr²h"],
        "answer_en": "πr²h",
        "answer_hi": "πr²h",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which vitamin is essential for calcium absorption?",
        "question_hi": "कैल्शियम अवशोषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the chemical name of Plaster of Paris?",
        "question_hi": "प्लास्टर ऑफ पेरिस का रासायनिक नाम क्या है?",
        "options_en": ["Calcium Sulfate", "Calcium Carbonate", "Calcium Hydroxide", "Calcium Oxide"],
        "options_hi": ["कैल्शियम सल्फेट", "कैल्शियम कार्बोनेट", "कैल्शियम हाइड्रॉक्साइड", "कैल्शियम ऑक्साइड"],
        "answer_en": "Calcium Sulfate",
        "answer_hi": "कैल्शियम सल्फेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
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
        "num": 18,
        "question_en": "What is the value of sec 45°?",
        "question_hi": "sec 45° का मान क्या है?",
        "options_en": ["1", "√2", "2", "1/√2"],
        "options_hi": ["1", "√2", "2", "1/√2"],
        "answer_en": "√2",
        "answer_hi": "√2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which blood cells carry oxygen?",
        "question_hi": "कौन सी रक्त कोशिकाएं ऑक्सीजन ले जाती हैं?",
        "options_en": ["White Blood Cells", "Red Blood Cells", "Platelets", "Plasma"],
        "options_hi": ["श्वेत रक्त कोशिकाएं", "लाल रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
        "answer_en": "Red Blood Cells",
        "answer_hi": "लाल रक्त कोशिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the speed of sound in water?",
        "question_hi": "पानी में ध्वनि की गति क्या है?",
        "options_en": ["340 m/s", "1500 m/s", "5000 m/s", "300000 m/s"],
        "options_hi": ["340 m/s", "1500 m/s", "5000 m/s", "300000 m/s"],
        "answer_en": "1500 m/s",
        "answer_hi": "1500 m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which is the largest desert in the world?",
        "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options_en": ["Sahara", "Gobi", "Arabian", "Kalahari"],
        "options_hi": ["सहारा", "गोबी", "अरब", "कालाहारी"],
        "answer_en": "Sahara",
        "answer_hi": "सहारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
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
        "num": 23,
        "question_en": "Who wrote 'Gitanjali'?",
        "question_hi": "'गीतांजलि' किसने लिखी?",
        "options_en": ["Sarojini Naidu", "Rabindranath Tagore", "Bankim Chandra Chatterjee", "Mahadevi Verma"],
        "options_hi": ["सरोजिनी नायडू", "रबींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "महादेवी वर्मा"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the formula for Ohm's Law?",
        "question_hi": "ओम के नियम का सूत्र क्या है?",
        "options_en": ["V = IR", "I = VR", "R = VI", "V = I/R"],
        "options_hi": ["V = IR", "I = VR", "R = VI", "V = I/R"],
        "answer_en": "V = IR",
        "answer_hi": "V = IR",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which gas is released during respiration?",
        "question_hi": "श्वसन के दौरान कौन सी गैस निकलती है?",
        "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon Dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the value of (a - b)²?",
        "question_hi": "(a - b)² का मान क्या है?",
        "options_en": ["a² - b²", "a² - 2ab + b²", "a² + 2ab + b²", "a² + b²"],
        "options_hi": ["a² - b²", "a² - 2ab + b²", "a² + 2ab + b²", "a² + b²"],
        "answer_en": "a² - 2ab + b²",
        "answer_hi": "a² - 2ab + b²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
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
        "num": 28,
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
        "num": 29,
        "question_en": "Who is known as the Father of Computer?",
        "question_hi": "कंप्यूटर के पिता के रूप में किसे जाना जाता है?",
        "options_en": ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
        "options_hi": ["एलन ट्यूरिंग", "चार्ल्स बैबेज", "बिल गेट्स", "स्टीव जॉब्स"],
        "answer_en": "Charles Babbage",
        "answer_hi": "चार्ल्स बैबेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which part of the cell contains DNA?",
        "question_hi": "कोशिका का कौन सा भाग DNA रखता है?",
        "options_en": ["Cytoplasm", "Nucleus", "Mitochondria", "Ribosome"],
        "options_hi": ["कोशिका द्रव्य", "केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
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
        "num": 32,
        "question_en": "Which is the most abundant metal in Earth's crust?",
        "question_hi": "पृथ्वी की पपड़ी में सबसे प्रचुर धातु कौन सी है?",
        "options_en": ["Iron", "Aluminum", "Copper", "Calcium"],
        "options_hi": ["लोहा", "एल्युमिनियम", "तांबा", "कैल्शियम"],
        "answer_en": "Aluminum",
        "answer_hi": "एल्युमिनियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the chemical formula of Ammonium Chloride?",
        "question_hi": "अमोनियम क्लोराइड का रासायनिक सूत्र क्या है?",
        "options_en": ["NH₄Cl", "NH₃Cl", "NH₂Cl", "N₂H₄Cl"],
        "options_hi": ["NH₄Cl", "NH₃Cl", "NH₂Cl", "N₂H₄Cl"],
        "answer_en": "NH₄Cl",
        "answer_hi": "NH₄Cl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Who invented the Light Bulb?",
        "question_hi": "लाइट बल्ब का आविष्कार किसने किया?",
        "options_en": ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Michael Faraday"],
        "options_hi": ["थॉमस एडिसन", "निकोला टेस्ला", "अलेक्जेंडर ग्राहम बेल", "माइकल फैराडे"],
        "answer_en": "Thomas Edison",
        "answer_hi": "थॉमस एडिसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the value of 8³?",
        "question_hi": "8³ का मान क्या है?",
        "options_en": ["512", "64", "256", "1024"],
        "options_hi": ["512", "64", "256", "1024"],
        "answer_en": "512",
        "answer_hi": "512",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which gas is used in fluorescent tubes?",
        "question_hi": "फ्लोरोसेंट ट्यूबों में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Neon", "Argon", "Mercury Vapor", "Xenon"],
        "options_hi": ["नियॉन", "आर्गन", "पारा वाष्प", "जेनॉन"],
        "answer_en": "Mercury Vapor",
        "answer_hi": "पारा वाष्प",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the chemical symbol for Zinc?",
        "question_hi": "जस्ते का रासायनिक प्रतीक क्या है?",
        "options_en": ["Zi", "Zn", "Zc", "Z"],
        "options_hi": ["Zi", "Zn", "Zc", "Z"],
        "answer_en": "Zn",
        "answer_hi": "Zn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Who wrote 'Abhijnanasakuntalam'?",
        "question_hi": "'अभिज्ञानशाकुंतलम' किसने लिखा?",
        "options_en": ["Bhasa", "Kalidasa", "Bhavabhuti", "Sudraka"],
        "options_hi": ["भास", "कालिदास", "भवभूति", "शूद्रक"],
        "answer_en": "Kalidasa",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the formula for gravitational force?",
        "question_hi": "गुरुत्वाकर्षण बल का सूत्र क्या है?",
        "options_en": ["F = G(m₁m₂)/r²", "F = ma", "F = mv²/r", "F = kx"],
        "options_hi": ["F = G(m₁m₂)/r²", "F = ma", "F = mv²/r", "F = kx"],
        "answer_en": "F = G(m₁m₂)/r²",
        "answer_hi": "F = G(m₁m₂)/r²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which vitamin deficiency causes Pellagra?",
        "question_hi": "किस विटामिन की कमी से पेलाग्रा होता है?",
        "options_en": ["Vitamin B1", "Vitamin B3", "Vitamin B12", "Vitamin C"],
        "options_hi": ["विटामिन B1", "विटामिन B3", "विटामिन B12", "विटामिन C"],
        "answer_en": "Vitamin B3",
        "answer_hi": "विटामिन B3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the capital of Brazil?",
        "question_hi": "ब्राजील की राजधानी क्या है?",
        "options_en": ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Buenos Aires"],
        "options_hi": ["रियो डी जनेरियो", "साओ पाउलो", "ब्रासीलिया", "ब्यूनस आयर्स"],
        "answer_en": "Brasilia",
        "answer_hi": "ब्रासीलिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
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
        "num": 43,
        "question_en": "Who discovered X-rays?",
        "question_hi": "एक्स-रे की खोज किसने की?",
        "options_en": ["Marie Curie", "Wilhelm Roentgen", "Henri Becquerel", "Max Planck"],
        "options_hi": ["मैरी क्यूरी", "विल्हेम रॉन्टजेन", "हेनरी बेकरेल", "मैक्स प्लैंक"],
        "answer_en": "Wilhelm Roentgen",
        "answer_hi": "विल्हेम रॉन्टजेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the value of cot 45°?",
        "question_hi": "cot 45° का मान क्या है?",
        "options_en": ["0", "1", "√3", "1/√3"],
        "options_hi": ["0", "1", "√3", "1/√3"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which is the hottest planet in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे गर्म ग्रह कौन सा है?",
        "options_en": ["Mercury", "Venus", "Mars", "Jupiter"],
        "options_hi": ["बुध", "शुक्र", "मंगल", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the chemical name of Washing Soda?",
        "question_hi": "धोने का सोडा का रासायनिक नाम क्या है?",
        "options_en": ["Sodium Bicarbonate", "Sodium Carbonate", "Sodium Hydroxide", "Sodium Chloride"],
        "options_hi": ["सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "सोडियम हाइड्रॉक्साइड", "सोडियम क्लोराइड"],
        "answer_en": "Sodium Carbonate",
        "answer_hi": "सोडियम कार्बोनेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Who wrote 'The Old Man and the Sea'?",
        "question_hi": "'द ओल्ड मैन एंड द सी' किसने लिखी?",
        "options_en": ["Ernest Hemingway", "Mark Twain", "John Steinbeck", "F. Scott Fitzgerald"],
        "options_hi": ["अर्नेस्ट हेमिंग्वे", "मार्क ट्वेन", "जॉन स्टीनबेक", "एफ. स्कॉट फिट्जगेराल्ड"],
        "answer_en": "Ernest Hemingway",
        "answer_hi": "अर्नेस्ट हेमिंग्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the formula for surface area of a sphere?",
        "question_hi": "गोले के पृष्ठीय क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["4πr²", "πr²", "2πr²", "4/3πr³"],
        "options_hi": ["4πr²", "πr²", "2πr²", "4/3πr³"],
        "answer_en": "4πr²",
        "answer_hi": "4πr²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which blood group is known as universal recipient?",
        "question_hi": "कौन सा रक्त समूह सार्वत्रिक प्राप्तकर्ता के रूप में जाना जाता है?",
        "options_en": ["A", "B", "AB", "O"],
        "options_hi": ["A", "B", "AB", "O"],
        "answer_en": "AB",
        "answer_hi": "AB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
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
        "num": 51,
        "question_en": "Which is the largest island in the world?",
        "question_hi": "दुनिया का सबसे बड़ा द्वीप कौन सा है?",
        "options_en": ["Greenland", "Australia", "New Guinea", "Borneo"],
        "options_hi": ["ग्रीनलैंड", "ऑस्ट्रेलिया", "न्यू गिनी", "बोर्नियो"],
        "answer_en": "Greenland",
        "answer_hi": "ग्रीनलैंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
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
        "num": 53,
        "question_en": "Who wrote 'Mahabharata'?",
        "question_hi": "'महाभारत' किसने लिखा?",
        "options_en": ["Valmiki", "Ved Vyas", "Tulsidas", "Kalidasa"],
        "options_hi": ["वाल्मीकि", "वेद व्यास", "तुलसीदास", "कालिदास"],
        "answer_en": "Ved Vyas",
        "answer_hi": "वेद व्यास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the formula for momentum?",
        "question_hi": "संवेग का सूत्र क्या है?",
        "options_en": ["mv", "ma", "Fd", "½mv²"],
        "options_hi": ["mv", "ma", "Fd", "½mv²"],
        "answer_en": "mv",
        "answer_hi": "mv",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
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
        "num": 56,
        "question_en": "What is the chemical symbol for Nickel?",
        "question_hi": "निकेल का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ni", "Nk", "Nl", "Ne"],
        "options_hi": ["Ni", "Nk", "Nl", "Ne"],
        "answer_en": "Ni",
        "answer_hi": "Ni",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Who is known as the Iron Man of India?",
        "question_hi": "भारत के लौह पुरुष के रूप में किसे जाना जाता है?",
        "options_en": ["Jawaharlal Nehru", "Sardar Patel", "Subhash Chandra Bose", "Bhagat Singh"],
        "options_hi": ["जवाहरलाल नेहरू", "सरदार पटेल", "सुभाष चंद्र बोस", "भगत सिंह"],
        "answer_en": "Sardar Patel",
        "answer_hi": "सरदार पटेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the value of cosec 30°?",
        "question_hi": "cosec 30° का मान क्या है?",
        "options_en": ["1", "2", "√2", "1/2"],
        "options_hi": ["1", "2", "√2", "1/2"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which gas is used in welding?",
        "question_hi": "वेल्डिंग में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Acetylene", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "एसिटिलीन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Acetylene",
        "answer_hi": "एसिटिलीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the unit of magnetic flux?",
        "question_hi": "चुंबकीय फ्लक्स की इकाई क्या है?",
        "options_en": ["Tesla", "Weber", "Henry", "Farad"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "फैरड"],
        "answer_en": "Weber",
        "answer_hi": "वेबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
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
        "num": 62,
        "question_en": "What is the chemical formula of Sulfur Dioxide?",
        "question_hi": "सल्फर डाइऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["SO", "SO₂", "SO₃", "S₂O"],
        "options_hi": ["SO", "SO₂", "SO₃", "S₂O"],
        "answer_en": "SO₂",
        "answer_hi": "SO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Who wrote 'To Kill a Mockingbird'?",
        "question_hi": "'टू किल अ मॉकिंगबर्ड' किसने लिखी?",
        "options_en": ["Harper Lee", "Mark Twain", "John Steinbeck", "F. Scott Fitzgerald"],
        "options_hi": ["हार्पर ली", "मार्क ट्वेन", "जॉन स्टीनबेक", "एफ. स्कॉट फिट्जगेराल्ड"],
        "answer_en": "Harper Lee",
        "answer_hi": "हार्पर ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the formula for area of a trapezium?",
        "question_hi": "समलंब चतुर्भुज के क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["½(a+b)h", "a×b", "½ab", "(a+b)h"],
        "options_hi": ["½(a+b)h", "a×b", "½ab", "(a+b)h"],
        "answer_en": "½(a+b)h",
        "answer_hi": "½(a+b)h",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which vitamin is essential for collagen formation?",
        "question_hi": "कोलेजन निर्माण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
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
        "num": 67,
        "question_en": "Who was the first Indian in space?",
        "question_hi": "अंतरिक्ष में जाने वाले पहले भारतीय कौन थे?",
        "options_en": ["Rakesh Sharma", "Kalpana Chawla", "Sunita Williams", "Ravish Malhotra"],
        "options_hi": ["राकेश शर्मा", "कल्पना चावला", "सुनीता विलियम्स", "रवीश मल्होत्रा"],
        "answer_en": "Rakesh Sharma",
        "answer_hi": "राकेश शर्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the value of sec 60°?",
        "question_hi": "sec 60° का मान क्या है?",
        "options_en": ["1", "2", "√2", "1/2"],
        "options_hi": ["1", "2", "√2", "1/2"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which gas is used in anesthesia?",
        "question_hi": "एनेस्थीसिया में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Nitrous Oxide", "Carbon Dioxide", "Helium"],
        "options_hi": ["ऑक्सीजन", "नाइट्रस ऑक्साइड", "कार्बन डाइऑक्साइड", "हीलियम"],
        "answer_en": "Nitrous Oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the unit of inductance?",
        "question_hi": "प्रेरकत्व की इकाई क्या है?",
        "options_en": ["Farad", "Henry", "Weber", "Tesla"],
        "options_hi": ["फैरड", "हेनरी", "वेबर", "टेस्ला"],
        "answer_en": "Henry",
        "answer_hi": "हेनरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which is the largest state in India by area?",
        "question_hi": "क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य कौन सा है?",
        "options_en": ["Maharashtra", "Madhya Pradesh", "Rajasthan", "Uttar Pradesh"],
        "options_hi": ["महाराष्ट्र", "मध्य प्रदेश", "राजस्थान", "उत्तर प्रदेश"],
        "answer_en": "Rajasthan",
        "answer_hi": "राजस्थान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the chemical formula of Calcium Carbonate?",
        "question_hi": "कैल्शियम कार्बोनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "options_hi": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "answer_en": "CaCO₃",
        "answer_hi": "CaCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Who wrote '1984'?",
        "question_hi": "'1984' किसने लिखी?",
        "options_en": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "H.G. Wells"],
        "options_hi": ["जॉर्ज ऑरवेल", "एल्डस हक्सले", "रे ब्रैडबरी", "एच.जी. वेल्स"],
        "answer_en": "George Orwell",
        "answer_hi": "जॉर्ज ऑरवेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the formula for pressure?",
        "question_hi": "दाब का सूत्र क्या है?",
        "options_en": ["Force/Area", "Mass/Volume", "Work/Time", "Distance/Time"],
        "options_hi": ["बल/क्षेत्रफल", "द्रव्यमान/आयतन", "कार्य/समय", "दूरी/समय"],
        "answer_en": "Force/Area",
        "answer_hi": "बल/क्षेत्रफल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
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
        "num": 76,
        "question_en": "What is the chemical symbol for Silicon?",
        "question_hi": "सिलिकॉन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Si", "Sl", "Sc", "Sn"],
        "options_hi": ["Si", "Sl", "Sc", "Sn"],
        "answer_en": "Si",
        "answer_hi": "Si",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Who is known as the Father of Indian Constitution?",
        "question_hi": "भारतीय संविधान के पिता के रूप में किसे जाना जाता है?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "बी.आर. अंबेडकर", "सरदार पटेल"],
        "answer_en": "B.R. Ambedkar",
        "answer_hi": "बी.आर. अंबेडकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the value of sin 45°?",
        "question_hi": "sin 45° का मान क्या है?",
        "options_en": ["0", "1", "1/√2", "√3/2"],
        "options_hi": ["0", "1", "1/√2", "√3/2"],
        "answer_en": "1/√2",
        "answer_hi": "1/√2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which gas is used in cigarette lighters?",
        "question_hi": "सिगरेट लाइटर में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Methane", "Propane", "Butane", "Ethane"],
        "options_hi": ["मीथेन", "प्रोपेन", "ब्यूटेन", "ईथेन"],
        "answer_en": "Butane",
        "answer_hi": "ब्यूटेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the unit of luminous intensity?",
        "question_hi": "ज्योति तीव्रता की इकाई क्या है?",
        "options_en": ["Lumen", "Lux", "Candela", "Watt"],
        "options_hi": ["लुमेन", "लक्स", "कैंडेला", "वाट"],
        "answer_en": "Candela",
        "answer_hi": "कैंडेला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which is the smallest state in India by area?",
        "question_hi": "क्षेत्रफल की दृष्टि से भारत का सबसे छोटा राज्य कौन सा है?",
        "options_en": ["Goa", "Sikkim", "Tripura", "Nagaland"],
        "options_hi": ["गोवा", "सिक्किम", "त्रिपुरा", "नागालैंड"],
        "answer_en": "Goa",
        "answer_hi": "गोवा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
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
        "num": 83,
        "question_en": "Who wrote 'The Great Gatsby'?",
        "question_hi": "'द ग्रेट गैट्सबी' किसने लिखी?",
        "options_en": ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"],
        "options_hi": ["एफ. स्कॉट फिट्जगेराल्ड", "अर्नेस्ट हेमिंग्वे", "जॉन स्टीनबेक", "विलियम फॉकनर"],
        "answer_en": "F. Scott Fitzgerald",
        "answer_hi": "एफ. स्कॉट फिट्जगेराल्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
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
        "num": 85,
        "question_en": "Which vitamin is also known as Riboflavin?",
        "question_hi": "किस विटामिन को राइबोफ्लेविन के नाम से भी जाना जाता है?",
        "options_en": ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12"],
        "options_hi": ["विटामिन B1", "विटामिन B2", "विटामिन B6", "विटामिन B12"],
        "answer_en": "Vitamin B2",
        "answer_hi": "विटामिन B2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the chemical symbol for Phosphorus?",
        "question_hi": "फॉस्फोरस का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ph", "Ps", "P", "Po"],
        "options_hi": ["Ph", "Ps", "P", "Po"],
        "answer_en": "P",
        "answer_hi": "P",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Who was the first Indian woman to win Miss World?",
        "question_hi": "मिस वर्ल्ड जीतने वाली पहली भारतीय महिला कौन थीं?",
        "options_en": ["Aishwarya Rai", "Sushmita Sen", "Priyanka Chopra", "Reita Faria"],
        "options_hi": ["ऐश्वर्या राय", "सुष्मिता सेन", "प्रियंका चोपड़ा", "रीता फारिया"],
        "answer_en": "Reita Faria",
        "answer_hi": "रीता फारिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the value of cos 30°?",
        "question_hi": "cos 30° का मान क्या है?",
        "options_en": ["1/2", "√3/2", "1/√2", "√2/2"],
        "options_hi": ["1/2", "√3/2", "1/√2", "√2/2"],
        "answer_en": "√3/2",
        "answer_hi": "√3/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which gas is used in deep sea diving?",
        "question_hi": "गहरे समुद्र में गोताखोरी के लिए कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Helium", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "हीलियम", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the unit of electric field?",
        "question_hi": "विद्युत क्षेत्र की इकाई क्या है?",
        "options_en": ["Newton/Coulomb", "Volt/Meter", "Both", "None"],
        "options_hi": ["न्यूटन/कूलम्ब", "वोल्ट/मीटर", "दोनों", "कोई नहीं"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which is the national animal of India?",
        "question_hi": "भारत का राष्ट्रीय पशु कौन सा है?",
        "options_en": ["Lion", "Tiger", "Elephant", "Peacock"],
        "options_hi": ["शेर", "बाघ", "हाथी", "मोर"],
        "answer_en": "Tiger",
        "answer_hi": "बाघ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the chemical formula of Quick Lime?",
        "question_hi": "बिना बुझा चूना का रासायनिक सूत्र क्या है?",
        "options_en": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "options_hi": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "answer_en": "CaO",
        "answer_hi": "CaO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Who wrote 'One Hundred Years of Solitude'?",
        "question_hi": "'वन हंड्रेड ईयर्स ऑफ सॉलिट्यूड' किसने लिखी?",
        "options_en": ["Gabriel Garcia Marquez", "Mario Vargas Llosa", "Pablo Neruda", "Jorge Luis Borges"],
        "options_hi": ["गेब्रियल गार्सिया मार्केज़", "मारियो वर्गास लियोसा", "पाब्लो नेरुदा", "जोर्ज लुइस बोर्हेस"],
        "answer_en": "Gabriel Garcia Marquez",
        "answer_hi": "गेब्रियल गार्सिया मार्केज़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the formula for efficiency?",
        "question_hi": "दक्षता का सूत्र क्या है?",
        "options_en": ["Output/Input", "Input/Output", "Work/Time", "Force/Area"],
        "options_hi": ["आउटपुट/इनपुट", "इनपुट/आउटपुट", "कार्य/समय", "बल/क्षेत्रफल"],
        "answer_en": "Output/Input",
        "answer_hi": "आउटपुट/इनपुट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which vitamin is essential for antioxidant protection?",
        "question_hi": "एंटीऑक्सीडेंट सुरक्षा के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin E", "All of these"],
        "options_hi": ["विटामिन A", "विटामिन C", "विटामिन E", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
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
        "num": 97,
        "question_en": "Who is known as the Missile Man of India?",
        "question_hi": "भारत के मिसाइल मैन के रूप में किसे जाना जाता है?",
        "options_en": ["Homi Bhabha", "Vikram Sarabhai", "A.P.J. Abdul Kalam", "C.V. Raman"],
        "options_hi": ["होमी भाभा", "विक्रम साराभाई", "ए.पी.जे. अब्दुल कलाम", "सी.वी. रमन"],
        "answer_en": "A.P.J. Abdul Kalam",
        "answer_hi": "ए.पी.जे. अब्दुल कलाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
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
        "num": 99,
        "question_en": "Which gas is used in weather balloons?",
        "question_hi": "मौसम गुब्बारों में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
        "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "हीलियम", "नाइट्रोजन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the unit of magnetic field?",
        "question_hi": "चुंबकीय क्षेत्र की इकाई क्या है?",
        "options_en": ["Tesla", "Weber", "Henry", "Farad"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "फैरड"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
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