const questions = [
    {
        "num": 1,
        "question_en": "Which cell organelle is responsible for protein synthesis?",
        "question_hi": "प्रोटीन संश्लेषण के लिए कौन सा कोशिका अंग जिम्मेदार है?",
        "options_en": ["Mitochondria", "Ribosome", "Golgi apparatus", "Nucleus"],
        "options_hi": ["माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण", "केंद्रक"],
        "answer_en": "Ribosome",
        "answer_hi": "राइबोसोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the chemical formula of Slaked Lime?",
        "question_hi": "बुझा चूना का रासायनिक सूत्र क्या है?",
        "options_en": ["Ca(OH)₂", "CaO", "CaCO₃", "CaSO₄"],
        "options_hi": ["Ca(OH)₂", "CaO", "CaCO₃", "CaSO₄"],
        "answer_en": "Ca(OH)₂",
        "answer_hi": "Ca(OH)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Who invented the Radio?",
        "question_hi": "रेडियो का आविष्कार किसने किया?",
        "options_en": ["Guglielmo Marconi", "Thomas Edison", "Alexander Graham Bell", "Nikola Tesla"],
        "options_hi": ["गुग्लिल्मो मार्कोनी", "थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "निकोला टेस्ला"],
        "answer_en": "Guglielmo Marconi",
        "answer_hi": "गुग्लिल्मो मार्कोनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the value of (a + b)(a - b)?",
        "question_hi": "(a + b)(a - b) का मान क्या है?",
        "options_en": ["a² + b²", "a² - b²", "a² + 2ab + b²", "a² - 2ab + b²"],
        "options_hi": ["a² + b²", "a² - b²", "a² + 2ab + b²", "a² - 2ab + b²"],
        "answer_en": "a² - b²",
        "answer_hi": "a² - b²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which is the national flower of India?",
        "question_hi": "भारत का राष्ट्रीय फूल कौन सा है?",
        "options_en": ["Rose", "Lotus", "Marigold", "Sunflower"],
        "options_hi": ["गुलाब", "कमल", "गेंदा", "सूरजमुखी"],
        "answer_en": "Lotus",
        "answer_hi": "कमल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the SI unit of energy?",
        "question_hi": "ऊर्जा की SI इकाई क्या है?",
        "options_en": ["Joule", "Watt", "Newton", "Pascal"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which gas is known as Laughing Gas?",
        "question_hi": "किस गैस को लाफिंग गैस के नाम से जाना जाता है?",
        "options_en": ["Nitrous Oxide", "Carbon Dioxide", "Oxygen", "Hydrogen"],
        "options_hi": ["नाइट्रस ऑक्साइड", "कार्बन डाइऑक्साइड", "ऑक्सीजन", "हाइड्रोजन"],
        "answer_en": "Nitrous Oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the chemical symbol for Barium?",
        "question_hi": "बेरियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ba", "Br", "B", "Bi"],
        "options_hi": ["Ba", "Br", "B", "Bi"],
        "answer_en": "Ba",
        "answer_hi": "Ba",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Who wrote 'Gitanjali'?",
        "question_hi": "'गीतांजलि' किसने लिखी?",
        "options_en": ["Rabindranath Tagore", "Harivansh Rai Bachchan", "Mahadevi Verma", "Suryakant Tripathi"],
        "options_hi": ["रबींद्रनाथ टैगोर", "हरिवंश राय बच्चन", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
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
        "num": 11,
        "question_en": "What is the atomic number of Oxygen?",
        "question_hi": "ऑक्सीजन की परमाणु संख्या क्या है?",
        "options_en": ["6", "7", "8", "9"],
        "options_hi": ["6", "7", "8", "9"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
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
        "num": 13,
        "question_en": "Which blood cells fight infection?",
        "question_hi": "कौन सी रक्त कोशिकाएं संक्रमण से लड़ती हैं?",
        "options_en": ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
        "options_hi": ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
        "answer_en": "White blood cells",
        "answer_hi": "श्वेत रक्त कोशिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the square root of 256?",
        "question_hi": "256 का वर्गमूल क्या है?",
        "options_en": ["14", "16", "18", "20"],
        "options_hi": ["14", "16", "18", "20"],
        "answer_en": "16",
        "answer_hi": "16",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
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
        "num": 16,
        "question_en": "Who was the first Governor General of independent India?",
        "question_hi": "स्वतंत्र भारत के पहले गवर्नर जनरल कौन थे?",
        "options_en": ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Rajendra Prasad"],
        "options_hi": ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "जवाहरलाल नेहरू", "राजेंद्र प्रसाद"],
        "answer_en": "Lord Mountbatten",
        "answer_hi": "लॉर्ड माउंटबेटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the chemical formula of Caustic Soda?",
        "question_hi": "कास्टिक सोडा का रासायनिक सूत्र क्या है?",
        "options_en": ["NaOH", "Na₂CO₃", "NaHCO₃", "NaCl"],
        "options_hi": ["NaOH", "Na₂CO₃", "NaHCO₃", "NaCl"],
        "answer_en": "NaOH",
        "answer_hi": "NaOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
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
        "num": 19,
        "question_en": "What is the unit of electrical resistance?",
        "question_hi": "विद्युत प्रतिरोध की इकाई क्या है?",
        "options_en": ["Ohm", "Volt", "Ampere", "Watt"],
        "options_hi": ["ओम", "वोल्ट", "एम्पियर", "वाट"],
        "answer_en": "Ohm",
        "answer_hi": "ओम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which metal is used in making aircraft?",
        "question_hi": "विमान बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Aluminum", "Iron", "Copper", "Silver"],
        "options_hi": ["एल्युमिनियम", "लोहा", "तांबा", "चांदी"],
        "answer_en": "Aluminum",
        "answer_hi": "एल्युमिनियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
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
        "num": 22,
        "question_en": "Which vitamin is essential for calcium absorption?",
        "question_hi": "कैल्शियम अवशोषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the chemical formula of Epsom Salt?",
        "question_hi": "एप्सम साल्ट का रासायनिक सूत्र क्या है?",
        "options_en": ["MgSO₄", "NaCl", "CaSO₄", "KCl"],
        "options_hi": ["MgSO₄", "NaCl", "CaSO₄", "KCl"],
        "answer_en": "MgSO₄",
        "answer_hi": "MgSO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
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
        "num": 25,
        "question_en": "Which planet has the Great Red Spot?",
        "question_hi": "किस ग्रह पर ग्रेट रेड स्पॉट है?",
        "options_en": ["Jupiter", "Mars", "Saturn", "Venus"],
        "options_hi": ["बृहस्पति", "मंगल", "शनि", "शुक्र"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
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
        "num": 27,
        "question_en": "What is the chemical symbol for Cesium?",
        "question_hi": "सीज़ियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ce", "Cs", "Cm", "Cr"],
        "options_hi": ["Ce", "Cs", "Cm", "Cr"],
        "answer_en": "Cs",
        "answer_hi": "Cs",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Who wrote 'Aranyak'?",
        "question_hi": "'अरण्यक' किसने लिखा?",
        "options_en": ["Bibhutibhushan Bandopadhyay", "Rabindranath Tagore", "Sarat Chandra Chattopadhyay", "Bankim Chandra Chatterjee"],
        "options_hi": ["बिभूतिभूषण बंदोपाध्याय", "रबींद्रनाथ टैगोर", "शरत चंद्र चट्टोपाध्याय", "बंकिम चंद्र चटर्जी"],
        "answer_en": "Bibhutibhushan Bandopadhyay",
        "answer_hi": "बिभूतिभूषण बंदोपाध्याय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the formula for the area of a sector?",
        "question_hi": "वृत्तखंड के क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["(θ/360) × πr²", "πr²", "2πr", "πr²/2"],
        "options_hi": ["(θ/360) × πr²", "πr²", "2πr", "πr²/2"],
        "answer_en": "(θ/360) × πr²",
        "answer_hi": "(θ/360) × πr²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which organ produces testosterone?",
        "question_hi": "कौन सा अंग टेस्टोस्टेरोन उत्पन्न करता है?",
        "options_en": ["Testes", "Ovary", "Pancreas", "Thyroid"],
        "options_hi": ["वृषण", "अंडाशय", "अग्न्याशय", "थायरॉइड"],
        "answer_en": "Testes",
        "answer_hi": "वृषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the melting point of iron?",
        "question_hi": "लोहे का गलनांक क्या है?",
        "options_en": ["1538°C", "1000°C", "2000°C", "500°C"],
        "options_hi": ["1538°C", "1000°C", "2000°C", "500°C"],
        "answer_en": "1538°C",
        "answer_hi": "1538°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
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
        "num": 33,
        "question_en": "What is the chemical formula of Acetone?",
        "question_hi": "एसीटोन का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₃COCH₃", "CH₃COOH", "C₂H₅OH", "CH₃OH"],
        "options_hi": ["CH₃COCH₃", "CH₃COOH", "C₂H₅OH", "CH₃OH"],
        "answer_en": "CH₃COCH₃",
        "answer_hi": "CH₃COCH₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Who was the first Indian woman to win a medal in World Athletics Championships?",
        "question_hi": "वर्ल्ड एथलेटिक्स चैंपियनशिप में पदक जीतने वाली पहली भारतीय महिला कौन थीं?",
        "options_en": ["Anju Bobby George", "P.T. Usha", "Hima Das", "Dutee Chand"],
        "options_hi": ["अंजू बॉबी जॉर्ज", "पी.टी. उषा", "हिमा दास", "दुती चंद"],
        "answer_en": "Anju Bobby George",
        "answer_hi": "अंजू बॉबी जॉर्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the formula for specific heat capacity?",
        "question_hi": "विशिष्ट ऊष्मा धारिता का सूत्र क्या है?",
        "options_en": ["Q/mΔT", "mΔT/Q", "QΔT/m", "mQ/ΔT"],
        "options_hi": ["Q/mΔT", "mΔT/Q", "QΔT/m", "mQ/ΔT"],
        "answer_en": "Q/mΔT",
        "answer_hi": "Q/mΔT",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which gas is used in making light bulbs?",
        "question_hi": "लाइट बल्ब बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Argon", "Oxygen", "Nitrogen", "Helium"],
        "options_hi": ["आर्गन", "ऑक्सीजन", "नाइट्रोजन", "हीलियम"],
        "answer_en": "Argon",
        "answer_hi": "आर्गन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the chemical symbol for Strontium?",
        "question_hi": "स्ट्रोंशियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Sr", "St", "Sm", "Sn"],
        "options_hi": ["Sr", "St", "Sm", "Sn"],
        "answer_en": "Sr",
        "answer_hi": "Sr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Who painted 'The Scream'?",
        "question_hi": "'द स्क्रीम' की पेंटिंग किसने बनाई?",
        "options_en": ["Edvard Munch", "Vincent van Gogh", "Pablo Picasso", "Salvador Dali"],
        "options_hi": ["एडवर्ड मंच", "विंसेंट वैन गॉग", "पाब्लो पिकासो", "साल्वाडोर डाली"],
        "answer_en": "Edvard Munch",
        "answer_hi": "एडवर्ड मंच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
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
        "num": 40,
        "question_en": "Which vitamin deficiency causes Hemorrhage?",
        "question_hi": "किस विटामिन की कमी से रक्तस्राव होता है?",
        "options_en": ["Vitamin K", "Vitamin C", "Vitamin A", "Vitamin D"],
        "options_hi": ["विटामिन K", "विटामिन C", "विटामिन A", "विटामिन D"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the chemical formula of Urea?",
        "question_hi": "यूरिया का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₄N₂O", "NH₃", "CO(NH₂)₂", "Both A and C"],
        "options_hi": ["CH₄N₂O", "NH₃", "CO(NH₂)₂", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Who discovered the Pacific Ocean?",
        "question_hi": "प्रशांत महासागर की खोज किसने की?",
        "options_en": ["Vasco Núñez de Balboa", "Christopher Columbus", "Ferdinand Magellan", "James Cook"],
        "options_hi": ["वास्को नून्येज़ डी बाल्बोआ", "क्रिस्टोफर कोलंबस", "फर्डिनेंड मैगलन", "जेम्स कुक"],
        "answer_en": "Vasco Núñez de Balboa",
        "answer_hi": "वास्को नून्येज़ डी बाल्बोआ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the deepest lake in the world?",
        "question_hi": "दुनिया की सबसे गहरी झील कौन सी है?",
        "options_en": ["Lake Baikal", "Lake Superior", "Lake Victoria", "Caspian Sea"],
        "options_hi": ["बैकाल झील", "सुपीरियर झील", "विक्टोरिया झील", "कैस्पियन सागर"],
        "answer_en": "Lake Baikal",
        "answer_hi": "बैकाल झील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which gas is used in making dry ice?",
        "question_hi": "ड्राई आइस बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Helium"],
        "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हीलियम"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the chemical symbol for Manganese?",
        "question_hi": "मैंगनीज का रासायनिक प्रतीक क्या है?",
        "options_en": ["Mg", "Mn", "Ma", "Ms"],
        "options_hi": ["Mg", "Mn", "Ma", "Ms"],
        "answer_en": "Mn",
        "answer_hi": "Mn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Who wrote 'Chokher Bali'?",
        "question_hi": "'चोखेर बाली' किसने लिखा?",
        "options_en": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarat Chandra Chattopadhyay", "Bibhutibhushan Bandopadhyay"],
        "options_hi": ["रबींद्रनाथ टैगोर", "बंकिम चंद्र चटर्जी", "शरत चंद्र चट्टोपाध्याय", "बिभूतिभूषण बंदोपाध्याय"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the formula for the volume of a hemisphere?",
        "question_hi": "अर्धगोले के आयतन का सूत्र क्या है?",
        "options_en": ["⅔πr³", "½πr³", "πr³", "¾πr³"],
        "options_hi": ["⅔πr³", "½πr³", "πr³", "¾πr³"],
        "answer_en": "⅔πr³",
        "answer_hi": "⅔πr³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which organ produces estrogen?",
        "question_hi": "कौन सा अंग एस्ट्रोजन उत्पन्न करता है?",
        "options_en": ["Ovary", "Testes", "Pancreas", "Thyroid"],
        "options_hi": ["अंडाशय", "वृषण", "अग्न्याशय", "थायरॉइड"],
        "answer_en": "Ovary",
        "answer_hi": "अंडाशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the boiling point of nitrogen?",
        "question_hi": "नाइट्रोजन का क्वथनांक क्या है?",
        "options_en": ["-196°C", "-100°C", "0°C", "100°C"],
        "options_hi": ["-196°C", "-100°C", "0°C", "100°C"],
        "answer_en": "-196°C",
        "answer_hi": "-196°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which is the largest artery in human body?",
        "question_hi": "मानव शरीर की सबसे बड़ी धमनी कौन सी है?",
        "options_en": ["Aorta", "Pulmonary artery", "Carotid artery", "Femoral artery"],
        "options_hi": ["महाधमनी", "फुफ्फुसीय धमनी", "कैरोटिड धमनी", "फीमोरल धमनी"],
        "answer_en": "Aorta",
        "answer_hi": "महाधमनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the chemical formula of Glycerol?",
        "question_hi": "ग्लिसरॉल का रासायनिक सूत्र क्या है?",
        "options_en": ["C₃H₈O₃", "C₂H₆O₂", "CH₄O", "C₄H₁₀O"],
        "options_hi": ["C₃H₈O₃", "C₂H₆O₂", "CH₄O", "C₄H₁₀O"],
        "answer_en": "C₃H₈O₃",
        "answer_hi": "C₃H₈O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Who was the first Indian to win a medal in badminton at Olympics?",
        "question_hi": "ओलंपिक में बैडमिंटन में पदक जीतने वाले पहले भारतीय कौन थे?",
        "options_en": ["P.V. Sindhu", "Saina Nehwal", "Prakash Padukone", "Srikanth Kidambi"],
        "options_hi": ["पी.वी. सिंधु", "साइना नेहवाल", "प्रकाश पादुकोण", "श्रीकांत किदांबी"],
        "answer_en": "Saina Nehwal",
        "answer_hi": "साइना नेहवाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the formula for refractive index?",
        "question_hi": "अपवर्तनांक का सूत्र क्या है?",
        "options_en": ["sin i/sin r", "sin r/sin i", "cos i/cos r", "tan i/tan r"],
        "options_hi": ["sin i/sin r", "sin r/sin i", "cos i/cos r", "tan i/tan r"],
        "answer_en": "sin i/sin r",
        "answer_hi": "sin i/sin r",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which gas is used in making hydrochloric acid?",
        "question_hi": "हाइड्रोक्लोरिक एसिड बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Hydrogen and Chlorine", "Oxygen and Hydrogen", "Nitrogen and Hydrogen", "Carbon and Oxygen"],
        "options_hi": ["हाइड्रोजन और क्लोरीन", "ऑक्सीजन और हाइड्रोजन", "नाइट्रोजन और हाइड्रोजन", "कार्बन और ऑक्सीजन"],
        "answer_en": "Hydrogen and Chlorine",
        "answer_hi": "हाइड्रोजन और क्लोरीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the chemical symbol for Cadmium?",
        "question_hi": "कैडमियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Cd", "Cm", "Ca", "Cr"],
        "options_hi": ["Cd", "Cm", "Ca", "Cr"],
        "answer_en": "Cd",
        "answer_hi": "Cd",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Who wrote 'Parineeta'?",
        "question_hi": "'परिणीता' किसने लिखा?",
        "options_en": ["Sarat Chandra Chattopadhyay", "Rabindranath Tagore", "Bankim Chandra Chatterjee", "Bibhutibhushan Bandopadhyay"],
        "options_hi": ["शरत चंद्र चट्टोपाध्याय", "रबींद्रनाथ टैगोर", "बंकिम चंद्र चटर्जी", "बिभूतिभूषण बंदोपाध्याय"],
        "answer_en": "Sarat Chandra Chattopadhyay",
        "answer_hi": "शरत चंद्र चट्टोपाध्याय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
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
        "num": 58,
        "question_en": "Which vitamin deficiency causes Neural Tube Defects?",
        "question_hi": "किस विटामिन की कमी से न्यूरल ट्यूब डिफेक्ट होता है?",
        "options_en": ["Folic Acid", "Vitamin B12", "Vitamin C", "Vitamin D"],
        "options_hi": ["फोलिक एसिड", "विटामिन B12", "विटामिन C", "विटामिन D"],
        "answer_en": "Folic Acid",
        "answer_hi": "फोलिक एसिड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the chemical formula of Methanol?",
        "question_hi": "मेथनॉल का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₃OH", "C₂H₅OH", "CH₃COOH", "HCOOH"],
        "options_hi": ["CH₃OH", "C₂H₅OH", "CH₃COOH", "HCOOH"],
        "answer_en": "CH₃OH",
        "answer_hi": "CH₃OH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Who discovered the DNA structure?",
        "question_hi": "DNA संरचना की खोज किसने की?",
        "options_en": ["James Watson and Francis Crick", "Rosalind Franklin", "Gregor Mendel", "Louis Pasteur"],
        "options_hi": ["जेम्स वाटसन और फ्रांसिस क्रिक", "रोजालिंड फ्रैंकलिन", "ग्रेगर मेंडल", "लुई पाश्चर"],
        "answer_en": "James Watson and Francis Crick",
        "answer_hi": "जेम्स वाटसन और फ्रांसिस क्रिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the formula for profit percentage?",
        "question_hi": "लाभ प्रतिशत का सूत्र क्या है?",
        "options_en": ["(Profit/CP)×100", "(SP/CP)×100", "(Profit/SP)×100", "(CP/SP)×100"],
        "options_hi": ["(लाभ/क्रय मूल्य)×100", "(विक्रय मूल्य/क्रय मूल्य)×100", "(लाभ/विक्रय मूल्य)×100", "(क्रय मूल्य/विक्रय मूल्य)×100"],
        "answer_en": "(Profit/CP)×100",
        "answer_hi": "(लाभ/क्रय मूल्य)×100",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which gas is used in making polyethene?",
        "question_hi": "पॉलीथीन बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Ethene", "Ethane", "Methane", "Propene"],
        "options_hi": ["ईथीन", "ईथेन", "मीथेन", "प्रोपीन"],
        "answer_en": "Ethene",
        "answer_hi": "ईथीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the chemical symbol for Bismuth?",
        "question_hi": "बिस्मथ का रासायनिक प्रतीक क्या है?",
        "options_en": ["Bi", "Bs", "Bm", "Bt"],
        "options_hi": ["Bi", "Bs", "Bm", "Bt"],
        "answer_en": "Bi",
        "answer_hi": "Bi",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Who wrote 'Devdas'?",
        "question_hi": "'देवदास' किसने लिखा?",
        "options_en": ["Sarat Chandra Chattopadhyay", "Rabindranath Tagore", "Bankim Chandra Chatterjee", "Bibhutibhushan Bandopadhyay"],
        "options_hi": ["शरत चंद्र चट्टोपाध्याय", "रबींद्रनाथ टैगोर", "बंकिम चंद्र चटर्जी", "बिभूतिभूषण बंदोपाध्याय"],
        "answer_en": "Sarat Chandra Chattopadhyay",
        "answer_hi": "शरत चंद्र चट्टोपाध्याय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the formula for the diagonal of a cube?",
        "question_hi": "घन के विकर्ण का सूत्र क्या है?",
        "options_en": ["a√3", "a√2", "2a", "3a"],
        "options_hi": ["a√3", "a√2", "2a", "3a"],
        "answer_en": "a√3",
        "answer_hi": "a√3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which organ produces progesterone?",
        "question_hi": "कौन सा अंग प्रोजेस्टेरोन उत्पन्न करता है?",
        "options_en": ["Ovary", "Testes", "Pancreas", "Thyroid"],
        "options_hi": ["अंडाशय", "वृषण", "अग्न्याशय", "थायरॉइड"],
        "answer_en": "Ovary",
        "answer_hi": "अंडाशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the chemical formula of Aspirin?",
        "question_hi": "एस्पिरिन का रासायनिक सूत्र क्या है?",
        "options_en": ["C₉H₈O₄", "C₆H₈O₇", "C₇H₆O₃", "C₈H₁₀N₄O₂"],
        "options_hi": ["C₉H₈O₄", "C₆H₈O₇", "C₇H₆O₃", "C₈H₁₀N₄O₂"],
        "answer_en": "C₉H₈O₄",
        "answer_hi": "C₉H₈O₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Who was the first Indian to win a medal in wrestling at Olympics?",
        "question_hi": "ओलंपिक में कुश्ती में पदक जीतने वाले पहले भारतीय कौन थे?",
        "options_en": ["Khashaba Dadasaheb Jadhav", "Sushil Kumar", "Yogeshwar Dutt", "Bajrang Punia"],
        "options_hi": ["खाशाबा दादासाहेब जाधव", "सुशील कुमार", "योगेश्वर दत्त", "बजरंग पूनिया"],
        "answer_en": "Khashaba Dadasaheb Jadhav",
        "answer_hi": "खाशाबा दादासाहेब जाधव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the formula for angular momentum?",
        "question_hi": "कोणीय संवेग का सूत्र क्या है?",
        "options_en": ["mvr", "½mv²", "mgh", "Fd"],
        "options_hi": ["mvr", "½mv²", "mgh", "Fd"],
        "answer_en": "mvr",
        "answer_hi": "mvr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which gas is used in making polypropylene?",
        "question_hi": "पॉलीप्रोपाइलीन बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Propylene", "Ethylene", "Butylene", "Acetylene"],
        "options_hi": ["प्रोपिलीन", "एथिलीन", "ब्यूटिलीन", "एसिटिलीन"],
        "answer_en": "Propylene",
        "answer_hi": "प्रोपिलीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the chemical symbol for Antimony?",
        "question_hi": "एंटीमनी का रासायनिक प्रतीक क्या है?",
        "options_en": ["At", "An", "Sb", "Am"],
        "options_hi": ["At", "An", "Sb", "Am"],
        "answer_en": "Sb",
        "answer_hi": "Sb",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Who wrote 'Shesher Kabita'?",
        "question_hi": "'शेषेर कबिता' किसने लिखा?",
        "options_en": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarat Chandra Chattopadhyay", "Bibhutibhushan Bandopadhyay"],
        "options_hi": ["रबींद्रनाथ टैगोर", "बंकिम चंद्र चटर्जी", "शरत चंद्र चट्टोपाध्याय", "बिभूतिभूषण बंदोपाध्याय"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the value of sec 90°?",
        "question_hi": "sec 90° का मान क्या है?",
        "options_en": ["0", "1", "∞", "Undefined"],
        "options_hi": ["0", "1", "∞", "अपरिभाषित"],
        "answer_en": "Undefined",
        "answer_hi": "अपरिभाषित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which vitamin deficiency causes Megaloblastic Anemia?",
        "question_hi": "किस विटामिन की कमी से मेगालोब्लास्टिक एनीमिया होता है?",
        "options_en": ["Vitamin B12", "Vitamin B6", "Vitamin C", "Vitamin K"],
        "options_hi": ["विटामिन B12", "विटामिन B6", "विटामिन C", "विटामिन K"],
        "answer_en": "Vitamin B12",
        "answer_hi": "विटामिन B12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the chemical formula of Toluene?",
        "question_hi": "टोल्यूनि का रासायनिक सूत्र क्या है?",
        "options_en": ["C₆H₅CH₃", "C₆H₆", "C₆H₁₂", "C₇H₈"],
        "options_hi": ["C₆H₅CH₃", "C₆H₆", "C₆H₁₂", "C₇H₈"],
        "answer_en": "C₆H₅CH₃",
        "answer_hi": "C₆H₅CH₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Who discovered the Blood Groups?",
        "question_hi": "रक्त समूहों की खोज किसने की?",
        "options_en": ["Karl Landsteiner", "Louis Pasteur", "Robert Koch", "Alexander Fleming"],
        "options_hi": ["कार्ल लैंडस्टीनर", "लुई पाश्चर", "रॉबर्ट कोच", "अलेक्जेंडर फ्लेमिंग"],
        "answer_en": "Karl Landsteiner",
        "answer_hi": "कार्ल लैंडस्टीनर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the formula for the area of an equilateral triangle?",
        "question_hi": "समबाहु त्रिभुज के क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["(√3/4)a²", "½bh", "a²", "πr²"],
        "options_hi": ["(√3/4)a²", "½bh", "a²", "πr²"],
        "answer_en": "(√3/4)a²",
        "answer_hi": "(√3/4)a²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which gas is used in making sulfuric acid?",
        "question_hi": "सल्फ्यूरिक एसिड बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Sulfur dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["सल्फर डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Sulfur dioxide",
        "answer_hi": "सल्फर डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the chemical symbol for Tellurium?",
        "question_hi": "टेल्युरियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Te", "Tl", "Tm", "Tr"],
        "options_hi": ["Te", "Tl", "Tm", "Tr"],
        "answer_en": "Te",
        "answer_hi": "Te",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Who wrote 'Gora'?",
        "question_hi": "'गोरा' किसने लिखा?",
        "options_en": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarat Chandra Chattopadhyay", "Bibhutibhushan Bandopadhyay"],
        "options_hi": ["रबींद्रनाथ टैगोर", "बंकिम चंद्र चटर्जी", "शरत चंद्र चट्टोपाध्याय", "बिभूतिभूषण बंदोपाध्याय"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the value of cosec 90°?",
        "question_hi": "cosec 90° का मान क्या है?",
        "options_en": ["1", "0", "∞", "Undefined"],
        "options_hi": ["1", "0", "∞", "अपरिभाषित"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which vitamin is known as Tocopherol?",
        "question_hi": "किस विटामिन को टोकोफेरॉल के नाम से जाना जाता है?",
        "options_en": ["Vitamin E", "Vitamin K", "Vitamin D", "Vitamin A"],
        "options_hi": ["विटामिन E", "विटामिन K", "विटामिन D", "विटामिन A"],
        "answer_en": "Vitamin E",
        "answer_hi": "विटामिन E",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the chemical formula of Naphthalene?",
        "question_hi": "नैफ़थलीन का रासायनिक सूत्र क्या है?",
        "options_en": ["C₁₀H₈", "C₆H₆", "C₈H₁₀", "C₁₂H₁₀"],
        "options_hi": ["C₁₀H₈", "C₆H₆", "C₈H₁₀", "C₁₂H₁₀"],
        "answer_en": "C₁₀H₈",
        "answer_hi": "C₁₀H₈",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Who discovered the Insulin?",
        "question_hi": "इंसुलिन की खोज किसने की?",
        "options_en": ["Frederick Banting and Charles Best", "Alexander Fleming", "Louis Pasteur", "Robert Koch"],
        "options_hi": ["फ्रेडरिक बैंटिंग और चार्ल्स बेस्ट", "अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "रॉबर्ट कोच"],
        "answer_en": "Frederick Banting and Charles Best",
        "answer_hi": "फ्रेडरिक बैंटिंग और चार्ल्स बेस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the formula for the curved surface area of a cylinder?",
        "question_hi": "बेलन के वक्र पृष्ठीय क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["2πrh", "πr²", "2πr²", "πr²h"],
        "options_hi": ["2πrh", "πr²", "2πr²", "πr²h"],
        "answer_en": "2πrh",
        "answer_hi": "2πrh",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which organ produces growth hormone?",
        "question_hi": "कौन सा अंग वृद्धि हार्मोन उत्पन्न करता है?",
        "options_en": ["Pituitary gland", "Thyroid", "Pancreas", "Adrenal gland"],
        "options_hi": ["पिट्यूटरी ग्रंथि", "थायरॉइड", "अग्न्याशय", "एड्रेनल ग्रंथि"],
        "answer_en": "Pituitary gland",
        "answer_hi": "पिट्यूटरी ग्रंथि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the chemical formula of Sucrose?",
        "question_hi": "सुक्रोज का रासायनिक सूत्र क्या है?",
        "options_en": ["C₁₂H₂₂O₁₁", "C₆H₁₂O₆", "C₂H₅OH", "CH₃COOH"],
        "options_hi": ["C₁₂H₂₂O₁₁", "C₆H₁₂O₆", "C₂H₅OH", "CH₃COOH"],
        "answer_en": "C₁₂H₂₂O₁₁",
        "answer_hi": "C₁₂H₂₂O₁₁",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Who was the first Indian woman to win a silver medal in Olympics?",
        "question_hi": "ओलंपिक में रजत पदक जीतने वाली पहली भारतीय महिला कौन थीं?",
        "options_en": ["P.V. Sindhu", "Saina Nehwal", "Karnam Malleswari", "Mary Kom"],
        "options_hi": ["पी.वी. सिंधु", "साइना नेहवाल", "कर्णम मल्लेश्वरी", "मैरी कॉम"],
        "answer_en": "P.V. Sindhu",
        "answer_hi": "पी.वी. सिंधु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the formula for escape velocity?",
        "question_hi": "पलायन वेग का सूत्र क्या है?",
        "options_en": ["√(2GM/R)", "√(GM/R)", "2√(GM/R)", "√(GM/2R)"],
        "options_hi": ["√(2GM/R)", "√(GM/R)", "2√(GM/R)", "√(GM/2R)"],
        "answer_en": "√(2GM/R)",
        "answer_hi": "√(2GM/R)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which gas is used in making polyurethane?",
        "question_hi": "पॉलीयूरेथेन बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Isocyanate", "Ethylene", "Propylene", "Butadiene"],
        "options_hi": ["आइसोसाइनेट", "एथिलीन", "प्रोपिलीन", "ब्यूटाडाइन"],
        "answer_en": "Isocyanate",
        "answer_hi": "आइसोसाइनेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the chemical symbol for Iridium?",
        "question_hi": "इरिडियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ir", "Id", "Im", "In"],
        "options_hi": ["Ir", "Id", "Im", "In"],
        "answer_en": "Ir",
        "answer_hi": "Ir",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Who wrote 'Rajmohan's Wife'?",
        "question_hi": "'राजमोहन्स वाइफ' किसने लिखा?",
        "options_en": ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarat Chandra Chattopadhyay", "Bibhutibhushan Bandopadhyay"],
        "options_hi": ["बंकिम चंद्र चटर्जी", "रबींद्रनाथ टैगोर", "शरत चंद्र चट्टोपाध्याय", "बिभूतिभूषण बंदोपाध्याय"],
        "answer_en": "Bankim Chandra Chatterjee",
        "answer_hi": "बंकिम चंद्र चटर्जी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the value of cot 90°?",
        "question_hi": "cot 90° का मान क्या है?",
        "options_en": ["0", "1", "∞", "Undefined"],
        "options_hi": ["0", "1", "∞", "अपरिभाषित"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which vitamin deficiency causes Wernicke-Korsakoff syndrome?",
        "question_hi": "किस विटामिन की कमी से वर्निक-कोर्साकॉफ सिंड्रोम होता है?",
        "options_en": ["Vitamin B1", "Vitamin B12", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन B1", "विटामिन B12", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन B1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the chemical formula of Aniline?",
        "question_hi": "एनिलीन का रासायनिक सूत्र क्या है?",
        "options_en": ["C₆H₅NH₂", "C₆H₆", "C₆H₅OH", "C₆H₅COOH"],
        "options_hi": ["C₆H₅NH₂", "C₆H₆", "C₆H₅OH", "C₆H₅COOH"],
        "answer_en": "C₆H₅NH₂",
        "answer_hi": "C₆H₅NH₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Who discovered the Photoelectric Effect?",
        "question_hi": "प्रकाश विद्युत प्रभाव की खोज किसने की?",
        "options_en": ["Albert Einstein", "Max Planck", "Niels Bohr", "Werner Heisenberg"],
        "options_hi": ["अल्बर्ट आइंस्टीन", "मैक्स प्लैंक", "नील्स बोहर", "वर्नर हाइजेनबर्ग"],
        "answer_en": "Albert Einstein",
        "answer_hi": "अल्बर्ट आइंस्टीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the formula for the total surface area of a cone?",
        "question_hi": "शंकु के कुल पृष्ठीय क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["πr(l + r)", "πrl", "πr²", "2πr"],
        "options_hi": ["πr(l + r)", "πrl", "πr²", "2πr"],
        "answer_en": "πr(l + r)",
        "answer_hi": "πr(l + r)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which gas is used in making nitric acid?",
        "question_hi": "नाइट्रिक एसिड बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Ammonia", "Nitrogen", "Oxygen", "Hydrogen"],
        "options_hi": ["अमोनिया", "नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन"],
        "answer_en": "Ammonia",
        "answer_hi": "अमोनिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the chemical symbol for Osmium?",
        "question_hi": "ऑस्मियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Os", "Om", "Oi", "On"],
        "options_hi": ["Os", "Om", "Oi", "On"],
        "answer_en": "Os",
        "answer_hi": "Os",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Who wrote 'Anandamath'?",
        "question_hi": "'आनंदमठ' किसने लिखा?",
        "options_en": ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarat Chandra Chattopadhyay", "Bibhutibhushan Bandopadhyay"],
        "options_hi": ["बंकिम चंद्र चटर्जी", "रबींद्रनाथ टैगोर", "शरत चंद्र चट्टोपाध्याय", "बिभूतिभूषण बंदोपाध्याय"],
        "answer_en": "Bankim Chandra Chatterjee",
        "answer_hi": "बंकिम चंद्र चटर्जी",
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