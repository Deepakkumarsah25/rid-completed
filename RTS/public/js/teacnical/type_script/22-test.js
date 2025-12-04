const questions = [
    {
        "num": 1,
        "question_en": "What is the chemical formula of Phosphoric Acid?",
        "question_hi": "फॉस्फोरिक एसिड का रासायनिक सूत्र क्या है?",
        "options_en": ["H₃PO₄", "H₂PO₄", "HPO₄", "H₄PO₄"],
        "options_hi": ["H₃PO₄", "H₂PO₄", "HPO₄", "H₄PO₄"],
        "answer_en": "H₃PO₄",
        "answer_hi": "H₃PO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Who wrote 'Othello'?",
        "question_hi": "'ओथेलो' किसने लिखा?",
        "options_en": ["Christopher Marlowe", "William Shakespeare", "Ben Jonson", "John Webster"],
        "options_hi": ["क्रिस्टोफर मार्लो", "विलियम शेक्सपियर", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the value of 25²?",
        "question_hi": "25² का मान क्या है?",
        "options_en": ["525", "625", "725", "825"],
        "options_hi": ["525", "625", "725", "825"],
        "answer_en": "625",
        "answer_hi": "625",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which part of the human ear is responsible for balance?",
        "question_hi": "मानव कान का कौन सा भाग संतुलन के लिए जिम्मेदार है?",
        "options_en": ["Cochlea", "Eardrum", "Semicircular Canals", "Hammer"],
        "options_hi": ["कोक्लीया", "ईयरड्रम", "सेमिसर्कुलर कैनाल", "हथौड़ा"],
        "answer_en": "Semicircular Canals",
        "answer_hi": "सेमिसर्कुलर कैनाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the SI unit of luminous flux?",
        "question_hi": "ज्योति फ्लक्स की SI इकाई क्या है?",
        "options_en": ["Lumen", "Lux", "Candela", "Watt"],
        "options_hi": ["लुमेन", "लक्स", "कैंडेला", "वाट"],
        "answer_en": "Lumen",
        "answer_hi": "लुमेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Who wrote 'Rashmirathi'?",
        "question_hi": "'रश्मिरथी' किसने लिखी?",
        "options_en": ["Ramdhari Singh Dinkar", "Harivansh Rai Bachchan", "Suryakant Tripathi Nirala", "Maithili Sharan Gupt"],
        "options_hi": ["रामधारी सिंह दिनकर", "हरिवंश राय बच्चन", "सूर्यकांत त्रिपाठी निराला", "मैथिलीशरण गुप्त"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which country is known as the 'Land of the White Elephant'?",
        "question_hi": "किस देश को 'व्हाइट एलीफेंट की भूमि' के रूप में जाना जाता है?",
        "options_en": ["Thailand", "India", "Sri Lanka", "Myanmar"],
        "options_hi": ["थाईलैंड", "भारत", "श्रीलंका", "म्यांमार"],
        "answer_en": "Thailand",
        "answer_hi": "थाईलैंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the solution of 4x - 7 = 5?",
        "question_hi": "4x - 7 = 5 का हल क्या है?",
        "options_en": ["x = 3", "x = 4", "x = 5", "x = 6"],
        "options_hi": ["x = 3", "x = 4", "x = 5", "x = 6"],
        "answer_en": "x = 3",
        "answer_hi": "x = 3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which gas is used in fluorescent lamps?",
        "question_hi": "फ्लोरोसेंट लैंप में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Neon", "Argon", "Mercury Vapor", "Xenon"],
        "options_hi": ["नियॉन", "आर्गन", "पारा वाष्प", "जेनॉन"],
        "answer_en": "Mercury Vapor",
        "answer_hi": "पारा वाष्प",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
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
        "num": 11,
        "question_en": "Who discovered the electron?",
        "question_hi": "इलेक्ट्रॉन की खोज किसने की?",
        "options_en": ["J.J. Thomson", "Ernest Rutherford", "James Chadwick", "Niels Bohr"],
        "options_hi": ["जे.जे. थॉमसन", "अर्नेस्ट रदरफोर्ड", "जेम्स चैडविक", "नील्स बोहर"],
        "answer_en": "J.J. Thomson",
        "answer_hi": "जे.जे. थॉमसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the value of ³√64?",
        "question_hi": "³√64 का मान क्या है?",
        "options_en": ["2", "4", "6", "8"],
        "options_hi": ["2", "4", "6", "8"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which planet has the shortest day?",
        "question_hi": "किस ग्रह का दिन सबसे छोटा है?",
        "options_en": ["Jupiter", "Saturn", "Venus", "Mercury"],
        "options_hi": ["बृहस्पति", "शनि", "शुक्र", "बुध"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the formula for area of a rhombus?",
        "question_hi": "समचतुर्भुज के क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["½ × d₁ × d₂", "side²", "base × height", "πr²"],
        "options_hi": ["½ × d₁ × d₂", "भुजा²", "आधार × ऊंचाई", "πr²"],
        "answer_en": "½ × d₁ × d₂",
        "answer_hi": "½ × d₁ × d₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which vitamin is essential for collagen synthesis?",
        "question_hi": "कोलेजन संश्लेषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the chemical name of Green Vitriol?",
        "question_hi": "ग्रीन विट्रियल का रासायनिक नाम क्या है?",
        "options_en": ["Ferrous Sulfate", "Copper Sulfate", "Zinc Sulfate", "Magnesium Sulfate"],
        "options_hi": ["फेरस सल्फेट", "कॉपर सल्फेट", "जिंक सल्फेट", "मैग्नीशियम सल्फेट"],
        "answer_en": "Ferrous Sulfate",
        "answer_hi": "फेरस सल्फेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Who was the first Indian woman to climb Mount Everest?",
        "question_hi": "माउंट एवरेस्ट पर चढ़ने वाली पहली भारतीय महिला कौन थीं?",
        "options_en": ["Bachendri Pal", "Santosh Yadav", "Arunima Sinha", "Premlata Agarwal"],
        "options_hi": ["बछेंद्री पाल", "संतोष यादव", "अरुणिमा सिन्हा", "प्रेमलता अग्रवाल"],
        "answer_en": "Bachendri Pal",
        "answer_hi": "बछेंद्री पाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the value of cos 45°?",
        "question_hi": "cos 45° का मान क्या है?",
        "options_en": ["1/√2", "√3/2", "1/2", "1"],
        "options_hi": ["1/√2", "√3/2", "1/2", "1"],
        "answer_en": "1/√2",
        "answer_hi": "1/√2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which part of the cell contains chromosomes?",
        "question_hi": "कोशिका का कौन सा भाग गुणसूत्र रखता है?",
        "options_en": ["Cytoplasm", "Nucleus", "Mitochondria", "Ribosome"],
        "options_hi": ["कोशिका द्रव्य", "केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
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
        "question_en": "Which is the largest delta in the world?",
        "question_hi": "दुनिया का सबसे बड़ा डेल्टा कौन सा है?",
        "options_en": ["Ganges-Brahmaputra", "Nile Delta", "Mississippi Delta", "Mekong Delta"],
        "options_hi": ["गंगा-ब्रह्मपुत्र", "नील डेल्टा", "मिसिसिपी डेल्टा", "मेकांग डेल्टा"],
        "answer_en": "Ganges-Brahmaputra",
        "answer_hi": "गंगा-ब्रह्मपुत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
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
        "num": 23,
        "question_en": "Who wrote 'King Lear'?",
        "question_hi": "'किंग लियर' किसने लिखा?",
        "options_en": ["Christopher Marlowe", "William Shakespeare", "Ben Jonson", "John Webster"],
        "options_hi": ["क्रिस्टोफर मार्लो", "विलियम शेक्सपियर", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the formula for refractive index?",
        "question_hi": "अपवर्तनांक का सूत्र क्या है?",
        "options_en": ["sin i/sin r", "sin r/sin i", "1/sin i", "1/sin r"],
        "options_hi": ["sin i/sin r", "sin r/sin i", "1/sin i", "1/sin r"],
        "answer_en": "sin i/sin r",
        "answer_hi": "sin i/sin r",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
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
        "num": 26,
        "question_en": "What is the value of (a + b)³?",
        "question_hi": "(a + b)³ का मान क्या है?",
        "options_en": ["a³ + b³", "a³ + 3a²b + 3ab² + b³", "a³ - 3a²b + 3ab² - b³", "a³ + b³ + 3ab"],
        "options_hi": ["a³ + b³", "a³ + 3a²b + 3ab² + b³", "a³ - 3a²b + 3ab² - b³", "a³ + b³ + 3ab"],
        "answer_en": "a³ + 3a²b + 3ab² + b³",
        "answer_hi": "a³ + 3a²b + 3ab² + b³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which is the largest saltwater lake in India?",
        "question_hi": "भारत की सबसे बड़ी खारे पानी की झील कौन सी है?",
        "options_en": ["Chilika Lake", "Sambhar Lake", "Pulicat Lake", "Loktak Lake"],
        "options_hi": ["चिल्का झील", "सांभर झील", "पुलिकट झील", "लोकटक झील"],
        "answer_en": "Chilika Lake",
        "answer_hi": "चिल्का झील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the chemical symbol for Bismuth?",
        "question_hi": "बिस्मथ का रासायनिक प्रतीक क्या है?",
        "options_en": ["Bi", "Bs", "Bt", "Bm"],
        "options_hi": ["Bi", "Bs", "Bt", "Bm"],
        "answer_en": "Bi",
        "answer_hi": "Bi",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Who is known as the Father of Genetics?",
        "question_hi": "आनुवंशिकी के पिता के रूप में किसे जाना जाता है?",
        "options_en": ["Gregor Mendel", "Charles Darwin", "James Watson", "Francis Crick"],
        "options_hi": ["ग्रेगर मेंडल", "चार्ल्स डार्विन", "जेम्स वाटसन", "फ्रांसिस क्रिक"],
        "answer_en": "Gregor Mendel",
        "answer_hi": "ग्रेगर मेंडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which part of the plant is modified into a potato?",
        "question_hi": "पौधे का कौन सा भाग आलू में रूपांतरित होता है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
        "answer_en": "Stem",
        "answer_hi": "तना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the unit of magnetic induction?",
        "question_hi": "चुंबकीय प्रेरण की इकाई क्या है?",
        "options_en": ["Tesla", "Weber", "Henry", "Farad"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "फैरड"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which is the most abundant element in the universe?",
        "question_hi": "ब्रह्मांड में सबसे प्रचुर तत्व कौन सा है?",
        "options_en": ["Oxygen", "Hydrogen", "Helium", "Carbon"],
        "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "हीलियम", "कार्बन"],
        "answer_en": "Hydrogen",
        "answer_hi": "हाइड्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the chemical formula of Calcium Phosphate?",
        "question_hi": "कैल्शियम फॉस्फेट का रासायनिक सूत्र क्या है?",
        "options_en": ["Ca₃(PO₄)₂", "CaPO₄", "Ca₂PO₄", "Ca(PO₄)₂"],
        "options_hi": ["Ca₃(PO₄)₂", "CaPO₄", "Ca₂PO₄", "Ca(PO₄)₂"],
        "answer_en": "Ca₃(PO₄)₂",
        "answer_hi": "Ca₃(PO₄)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Who invented the Steam Engine?",
        "question_hi": "स्टीम इंजन का आविष्कार किसने किया?",
        "options_en": ["James Watt", "Thomas Newcomen", "George Stephenson", "Richard Trevithick"],
        "options_hi": ["जेम्स वाट", "थॉमस न्यूकमेन", "जॉर्ज स्टीफेंसन", "रिचर्ड ट्रेविथिक"],
        "answer_en": "James Watt",
        "answer_hi": "जेम्स वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the value of 17 × 18?",
        "question_hi": "17 × 18 का मान क्या है?",
        "options_en": ["296", "306", "316", "326"],
        "options_hi": ["296", "306", "316", "326"],
        "answer_en": "306",
        "answer_hi": "306",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which gas is used in neon signs?",
        "question_hi": "नियॉन साइनों में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Helium", "Neon", "Argon", "Xenon"],
        "options_hi": ["हीलियम", "नियॉन", "आर्गन", "जेनॉन"],
        "answer_en": "Neon",
        "answer_hi": "नियॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the chemical symbol for Iodine?",
        "question_hi": "आयोडीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Io", "Id", "I", "In"],
        "options_hi": ["Io", "Id", "I", "In"],
        "answer_en": "I",
        "answer_hi": "I",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Who wrote 'Mrichchhakatika'?",
        "question_hi": "'मृच्छकटिका' किसने लिखा?",
        "options_en": ["Sudraka", "Kalidasa", "Bhavabhuti", "Bhasa"],
        "options_hi": ["शूद्रक", "कालिदास", "भवभूति", "भास"],
        "answer_en": "Sudraka",
        "answer_hi": "शूद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the formula for centripetal force?",
        "question_hi": "अभिकेंद्रीय बल का सूत्र क्या है?",
        "options_en": ["mv²/r", "ma", "mg", "kx"],
        "options_hi": ["mv²/r", "ma", "mg", "kx"],
        "answer_en": "mv²/r",
        "answer_hi": "mv²/r",
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
        "question_en": "What is the capital of Argentina?",
        "question_hi": "अर्जेंटीना की राजधानी क्या है?",
        "options_en": ["Buenos Aires", "Santiago", "Lima", "Brasilia"],
        "options_hi": ["ब्यूनस आयर्स", "सैंटियागो", "लिमा", "ब्रासीलिया"],
        "answer_en": "Buenos Aires",
        "answer_hi": "ब्यूनस आयर्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the chemical formula of Butane?",
        "question_hi": "ब्यूटेन का रासायनिक सूत्र क्या है?",
        "options_en": ["C₃H₈", "C₄H₁₀", "C₅H₁₂", "C₆H₁₄"],
        "options_hi": ["C₃H₈", "C₄H₁₀", "C₅H₁₂", "C₆H₁₄"],
        "answer_en": "C₄H₁₀",
        "answer_hi": "C₄H₁₀",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Who discovered the neutron?",
        "question_hi": "न्यूट्रॉन की खोज किसने की?",
        "options_en": ["James Chadwick", "Ernest Rutherford", "J.J. Thomson", "Niels Bohr"],
        "options_hi": ["जेम्स चैडविक", "अर्नेस्ट रदरफोर्ड", "जे.जे. थॉमसन", "नील्स बोहर"],
        "answer_en": "James Chadwick",
        "answer_hi": "जेम्स चैडविक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the value of tan 0°?",
        "question_hi": "tan 0° का मान क्या है?",
        "options_en": ["0", "1", "∞", "Undefined"],
        "options_hi": ["0", "1", "∞", "अपरिभाषित"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which is the brightest planet in the night sky?",
        "question_hi": "रात के आकाश में सबसे चमकीला ग्रह कौन सा है?",
        "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
        "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the chemical name of Epsom Salt?",
        "question_hi": "एप्सम साल्ट का रासायनिक नाम क्या है?",
        "options_en": ["Magnesium Sulfate", "Calcium Sulfate", "Sodium Sulfate", "Potassium Sulfate"],
        "options_hi": ["मैग्नीशियम सल्फेट", "कैल्शियम सल्फेट", "सोडियम सल्फेट", "पोटेशियम सल्फेट"],
        "answer_en": "Magnesium Sulfate",
        "answer_hi": "मैग्नीशियम सल्फेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Who wrote 'The Catcher in the Rye'?",
        "question_hi": "'द कैचर इन द राई' किसने लिखा?",
        "options_en": ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck"],
        "options_hi": ["जे.डी. सेलिंजर", "एफ. स्कॉट फिट्जगेराल्ड", "अर्नेस्ट हेमिंग्वे", "जॉन स्टीनबेक"],
        "answer_en": "J.D. Salinger",
        "answer_hi": "जे.डी. सेलिंजर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the formula for surface area of a cylinder?",
        "question_hi": "बेलन के पृष्ठीय क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["2πr(h + r)", "2πrh", "πr²h", "2πr²"],
        "options_hi": ["2πr(h + r)", "2πrh", "πr²h", "2πr²"],
        "answer_en": "2πr(h + r)",
        "answer_hi": "2πr(h + r)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which blood cells produce antibodies?",
        "question_hi": "कौन सी रक्त कोशिकाएं एंटीबॉडी उत्पन्न करती हैं?",
        "options_en": ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma Cells"],
        "options_hi": ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा कोशिकाएं"],
        "answer_en": "Plasma Cells",
        "answer_hi": "प्लाज्मा कोशिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the unit of electric conductivity?",
        "question_hi": "विद्युत चालकता की इकाई क्या है?",
        "options_en": ["Siemens", "Ohm", "Mho", "Both Siemens and Mho"],
        "options_hi": ["सीमेंस", "ओम", "म्हो", "सीमेंस और म्हो दोनों"],
        "answer_en": "Both Siemens and Mho",
        "answer_hi": "सीमेंस और म्हो दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which is the largest peninsula in the world?",
        "question_hi": "दुनिया का सबसे बड़ा प्रायद्वीप कौन सा है?",
        "options_en": ["Arabian Peninsula", "Indian Peninsula", "Scandinavian Peninsula", "Iberian Peninsula"],
        "options_hi": ["अरब प्रायद्वीप", "भारतीय प्रायद्वीप", "स्कैंडिनेवियाई प्रायद्वीप", "इबेरियन प्रायद्वीप"],
        "answer_en": "Arabian Peninsula",
        "answer_hi": "अरब प्रायद्वीप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the chemical formula of Hydrogen Sulfide?",
        "question_hi": "हाइड्रोजन सल्फाइड का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂S", "HS", "H₂SO₄", "HSO₄"],
        "options_hi": ["H₂S", "HS", "H₂SO₄", "HSO₄"],
        "answer_en": "H₂S",
        "answer_hi": "H₂S",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Who wrote 'Kadambari'?",
        "question_hi": "'कादंबरी' किसने लिखी?",
        "options_en": ["Banabhatta", "Kalidasa", "Bhavabhuti", "Dandin"],
        "options_hi": ["बाणभट्ट", "कालिदास", "भवभूति", "दंडी"],
        "answer_en": "Banabhatta",
        "answer_hi": "बाणभट्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the formula for impulse?",
        "question_hi": "आवेग का सूत्र क्या है?",
        "options_en": ["Force × Time", "Mass × Velocity", "Force × Distance", "Mass × Acceleration"],
        "options_hi": ["बल × समय", "द्रव्यमान × वेग", "बल × दूरी", "द्रव्यमान × त्वरण"],
        "answer_en": "Force × Time",
        "answer_hi": "बल × समय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which vitamin deficiency causes Hemorrhagic disease?",
        "question_hi": "किस विटामिन की कमी से हेमोरेजिक रोग होता है?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the chemical symbol for Barium?",
        "question_hi": "बेरियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ba", "Br", "Bi", "Bm"],
        "options_hi": ["Ba", "Br", "Bi", "Bm"],
        "answer_en": "Ba",
        "answer_hi": "Ba",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Who is known as the Father of the Indian Space Program?",
        "question_hi": "भारतीय अंतरिक्ष कार्यक्रम के पिता के रूप में किसे जाना जाता है?",
        "options_en": ["Vikram Sarabhai", "Homi Bhabha", "A.P.J. Abdul Kalam", "Satish Dhawan"],
        "options_hi": ["विक्रम साराभाई", "होमी भाभा", "ए.पी.जे. अब्दुल कलाम", "सतीश धवन"],
        "answer_en": "Vikram Sarabhai",
        "answer_hi": "विक्रम साराभाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the value of cosec 45°?",
        "question_hi": "cosec 45° का मान क्या है?",
        "options_en": ["1", "√2", "2", "1/√2"],
        "options_hi": ["1", "√2", "2", "1/√2"],
        "answer_en": "√2",
        "answer_hi": "√2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which gas is used in chemical warfare?",
        "question_hi": "रासायनिक युद्ध में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Mustard Gas", "Oxygen", "Nitrogen", "Helium"],
        "options_hi": ["सरसों गैस", "ऑक्सीजन", "नाइट्रोजन", "हीलियम"],
        "answer_en": "Mustard Gas",
        "answer_hi": "सरसों गैस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the unit of angular velocity?",
        "question_hi": "कोणीय वेग की इकाई क्या है?",
        "options_en": ["rad/s", "m/s", "Hz", "rpm"],
        "options_hi": ["rad/s", "m/s", "Hz", "rpm"],
        "answer_en": "rad/s",
        "answer_hi": "rad/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which is the national river of India?",
        "question_hi": "भारत की राष्ट्रीय नदी कौन सी है?",
        "options_en": ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
        "options_hi": ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
        "answer_en": "Ganga",
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the chemical formula of Potassium Hydroxide?",
        "question_hi": "पोटेशियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["KOH", "K₂OH", "K(OH)₂", "KHO"],
        "options_hi": ["KOH", "K₂OH", "K(OH)₂", "KHO"],
        "answer_en": "KOH",
        "answer_hi": "KOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Who wrote 'Brave New World'?",
        "question_hi": "'ब्रेव न्यू वर्ल्ड' किसने लिखा?",
        "options_en": ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
        "options_hi": ["एल्डस हक्सले", "जॉर्ज ऑरवेल", "रे ब्रैडबरी", "एच.जी. वेल्स"],
        "answer_en": "Aldous Huxley",
        "answer_hi": "एल्डस हक्सले",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the formula for strain?",
        "question_hi": "विकृति का सूत्र क्या है?",
        "options_en": ["ΔL/L", "F/A", "Stress/Strain", "F × ΔL"],
        "options_hi": ["ΔL/L", "F/A", "प्रतिबल/विकृति", "F × ΔL"],
        "answer_en": "ΔL/L",
        "answer_hi": "ΔL/L",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which vitamin is essential for nerve function?",
        "question_hi": "तंत्रिका कार्य के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B1", "Vitamin B12", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन B1", "विटामिन B12", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin B12",
        "answer_hi": "विटामिन B12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the chemical symbol for Strontium?",
        "question_hi": "स्ट्रोंटियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["St", "Sr", "Sm", "Sn"],
        "options_hi": ["St", "Sr", "Sm", "Sn"],
        "answer_en": "Sr",
        "answer_hi": "Sr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Who was the first Indian woman to win a Grand Slam title?",
        "question_hi": "ग्रैंड स्लैम खिताब जीतने वाली पहली भारतीय महिला कौन थीं?",
        "options_en": ["Sania Mirza", "Mahesh Bhupathi", "Leander Paes", "None of these"],
        "options_hi": ["सानिया मिर्जा", "महेश भूपति", "लिएंडर पेस", "इनमें से कोई नहीं"],
        "answer_en": "Sania Mirza",
        "answer_hi": "सानिया मिर्जा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the value of sec 0°?",
        "question_hi": "sec 0° का मान क्या है?",
        "options_en": ["0", "1", "∞", "Undefined"],
        "options_hi": ["0", "1", "∞", "अपरिभाषित"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which gas is used in plasma displays?",
        "question_hi": "प्लाज्मा डिस्प्ले में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Neon", "Xenon", "Argon", "Helium"],
        "options_hi": ["नियॉन", "जेनॉन", "आर्गन", "हीलियम"],
        "answer_en": "Xenon",
        "answer_hi": "जेनॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the unit of thermal conductivity?",
        "question_hi": "ऊष्मीय चालकता की इकाई क्या है?",
        "options_en": ["W/mK", "J/s", "cal/g°C", "BTU/h"],
        "options_hi": ["W/mK", "J/s", "cal/g°C", "BTU/h"],
        "answer_en": "W/mK",
        "answer_hi": "W/mK",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which is the national aquatic animal of India?",
        "question_hi": "भारत का राष्ट्रीय जलीय जीव कौन सा है?",
        "options_en": ["Ganges River Dolphin", "Crocodile", "Turtle", "Fish"],
        "options_hi": ["गंगा नदी डॉल्फिन", "मगरमच्छ", "कछुआ", "मछली"],
        "answer_en": "Ganges River Dolphin",
        "answer_hi": "गंगा नदी डॉल्फिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the chemical formula of Sodium Bicarbonate?",
        "question_hi": "सोडियम बाइकार्बोनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["NaHCO₃", "Na₂CO₃", "NaOH", "NaCl"],
        "options_hi": ["NaHCO₃", "Na₂CO₃", "NaOH", "NaCl"],
        "answer_en": "NaHCO₃",
        "answer_hi": "NaHCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Who wrote 'The Picture of Dorian Gray'?",
        "question_hi": "'द पिक्चर ऑफ डोरियन ग्रे' किसने लिखा?",
        "options_en": ["Oscar Wilde", "Charles Dickens", "Jane Austen", "Emily Bronte"],
        "options_hi": ["ऑस्कर वाइल्ड", "चार्ल्स डिकेंस", "जेन ऑस्टेन", "एमिली ब्रोंटे"],
        "answer_en": "Oscar Wilde",
        "answer_hi": "ऑस्कर वाइल्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the formula for torque?",
        "question_hi": "टॉर्क का सूत्र क्या है?",
        "options_en": ["Force × Distance", "Mass × Acceleration", "Work/Time", "Pressure × Area"],
        "options_hi": ["बल × दूरी", "द्रव्यमान × त्वरण", "कार्य/समय", "दाब × क्षेत्रफल"],
        "answer_en": "Force × Distance",
        "answer_hi": "बल × दूरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which vitamin is essential for antioxidant activity?",
        "question_hi": "एंटीऑक्सीडेंट गतिविधि के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin C", "Vitamin E", "Both", "None"],
        "options_hi": ["विटामिन C", "विटामिन E", "दोनों", "कोई नहीं"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
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
        "num": 77,
        "question_en": "Who is known as the Father of Indian Cinema?",
        "question_hi": "भारतीय सिनेमा के पिता के रूप में किसे जाना जाता है?",
        "options_en": ["Dadasaheb Phalke", "Satyajit Ray", "Raj Kapoor", "Guru Dutt"],
        "options_hi": ["दादासाहेब फाल्के", "सत्यजित रे", "राज कपूर", "गुरु दत्त"],
        "answer_en": "Dadasaheb Phalke",
        "answer_hi": "दादासाहेब फाल्के",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
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
        "num": 79,
        "question_en": "Which gas is used in fire suppression systems?",
        "question_hi": "आग दमन प्रणालियों में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
        "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हीलियम"],
        "answer_en": "Carbon Dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the unit of viscosity?",
        "question_hi": "श्यानता की इकाई क्या है?",
        "options_en": ["Poise", "Pascal", "Newton", "Joule"],
        "options_hi": ["पॉइज", "पास्कल", "न्यूटन", "जूल"],
        "answer_en": "Poise",
        "answer_hi": "पॉइज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which is the national fruit of India?",
        "question_hi": "भारत का राष्ट्रीय फल कौन सा है?",
        "options_en": ["Mango", "Apple", "Banana", "Orange"],
        "options_hi": ["आम", "सेब", "केला", "संतरा"],
        "answer_en": "Mango",
        "answer_hi": "आम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the chemical formula of Aluminum Chloride?",
        "question_hi": "एल्युमिनियम क्लोराइड का रासायनिक सूत्र क्या है?",
        "options_en": ["AlCl₃", "AlCl", "Al₂Cl₃", "AlCl₂"],
        "options_hi": ["AlCl₃", "AlCl", "Al₂Cl₃", "AlCl₂"],
        "answer_en": "AlCl₃",
        "answer_hi": "AlCl₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Who wrote 'The Kite Runner'?",
        "question_hi": "'द काइट रनर' किसने लिखा?",
        "options_en": ["Khaled Hosseini", "Paulo Coelho", "Jhumpa Lahiri", "Arundhati Roy"],
        "options_hi": ["खालिद हुसैनी", "पाउलो कोएल्हो", "झुम्पा लाहिड़ी", "अरुंधति रॉय"],
        "answer_en": "Khaled Hosseini",
        "answer_hi": "खालिद हुसैनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the formula for Hubble's constant?",
        "question_hi": "हबल स्थिरांक का सूत्र क्या है?",
        "options_en": ["v = H₀d", "E = mc²", "F = ma", "PV = nRT"],
        "options_hi": ["v = H₀d", "E = mc²", "F = ma", "PV = nRT"],
        "answer_en": "v = H₀d",
        "answer_hi": "v = H₀d",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which vitamin is essential for red blood cell formation?",
        "question_hi": "लाल रक्त कोशिका निर्माण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B12", "Vitamin C", "Vitamin D", "Vitamin E"],
        "options_hi": ["विटामिन B12", "विटामिन C", "विटामिन D", "विटामिन E"],
        "answer_en": "Vitamin B12",
        "answer_hi": "विटामिन B12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the chemical symbol for Selenium?",
        "question_hi": "सेलेनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Se", "Sl", "Sn", "Sm"],
        "options_hi": ["Se", "Sl", "Sn", "Sm"],
        "answer_en": "Se",
        "answer_hi": "Se",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Who was the first Indian woman to win an Asian Games gold?",
        "question_hi": "एशियाई खेलों में स्वर्ण पदक जीतने वाली पहली भारतीय महिला कौन थीं?",
        "options_en": ["Kamaljit Sandhu", "P.T. Usha", "Milkha Singh", "None of these"],
        "options_hi": ["कमलजीत संधू", "पी.टी. उषा", "मिल्खा सिंह", "इनमें से कोई नहीं"],
        "answer_en": "Kamaljit Sandhu",
        "answer_hi": "कमलजीत संधू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the value of sin 270°?",
        "question_hi": "sin 270° का मान क्या है?",
        "options_en": ["0", "1", "-1", "0.5"],
        "options_hi": ["0", "1", "-1", "0.5"],
        "answer_en": "-1",
        "answer_hi": "-1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which gas is used in meteorology for weather balloons?",
        "question_hi": "मौसम विज्ञान में मौसम गुब्बारों के लिए कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
        "options_hi": ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the unit of radioactivity?",
        "question_hi": "रेडियोधर्मिता की इकाई क्या है?",
        "options_en": ["Becquerel", "Curie", "Both", "None"],
        "options_hi": ["बेकरेल", "क्यूरी", "दोनों", "कोई नहीं"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which is the national calendar of India?",
        "question_hi": "भारत का राष्ट्रीय कैलेंडर कौन सा है?",
        "options_en": ["Saka Calendar", "Vikram Samvat", "Hijri Calendar", "Gregorian Calendar"],
        "options_hi": ["शक कैलेंडर", "विक्रम संवत", "हिजरी कैलेंडर", "ग्रेगोरियन कैलेंडर"],
        "answer_en": "Saka Calendar",
        "answer_hi": "शक कैलेंडर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the chemical formula of Ferric Oxide?",
        "question_hi": "फेरिक ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["FeO", "Fe₂O₃", "Fe₃O₄", "Fe(OH)₃"],
        "options_hi": ["FeO", "Fe₂O₃", "Fe₃O₄", "Fe(OH)₃"],
        "answer_en": "Fe₂O₃",
        "answer_hi": "Fe₂O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Who wrote 'The God of Small Things'?",
        "question_hi": "'द गॉड ऑफ स्मॉल थिंग्स' किसने लिखा?",
        "options_en": ["Arundhati Roy", "Jhumpa Lahiri", "Anita Desai", "Shashi Tharoor"],
        "options_hi": ["अरुंधति रॉय", "झुम्पा लाहिड़ी", "अनिता देसाई", "शशि थरूर"],
        "answer_en": "Arundhati Roy",
        "answer_hi": "अरुंधति रॉय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the formula for Planck's constant?",
        "question_hi": "प्लैंक स्थिरांक का सूत्र क्या है?",
        "options_en": ["h", "E", "c", "λ"],
        "options_hi": ["h", "E", "c", "λ"],
        "answer_en": "h",
        "answer_hi": "h",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which vitamin is essential for protein metabolism?",
        "question_hi": "प्रोटीन चयापचय के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B6", "Vitamin C", "Vitamin D", "Vitamin E"],
        "options_hi": ["विटामिन B6", "विटामिन C", "विटामिन D", "विटामिन E"],
        "answer_en": "Vitamin B6",
        "answer_hi": "विटामिन B6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the chemical symbol for Tellurium?",
        "question_hi": "टेल्यूरियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Te", "Tl", "Tr", "Tu"],
        "options_hi": ["Te", "Tl", "Tr", "Tu"],
        "answer_en": "Te",
        "answer_hi": "Te",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Who is known as the Flying Sikh of India?",
        "question_hi": "भारत के फ्लाइंग सिख के रूप में किसे जाना जाता है?",
        "options_en": ["Milkha Singh", "P.T. Usha", "Bhaag Milkha Bhaag", "None of these"],
        "options_hi": ["मिल्खा सिंह", "पी.टी. उषा", "भाग मिल्खा भाग", "इनमें से कोई नहीं"],
        "answer_en": "Milkha Singh",
        "answer_hi": "मिल्खा सिंह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the value of cos 270°?",
        "question_hi": "cos 270° का मान क्या है?",
        "options_en": ["0", "1", "-1", "0.5"],
        "options_hi": ["0", "1", "-1", "0.5"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which gas is used in scuba diving tanks?",
        "question_hi": "स्कूबा डाइविंग टैंकों में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Compressed Air", "Oxygen", "Helium", "Nitrogen"],
        "options_hi": ["संपीड़ित हवा", "ऑक्सीजन", "हीलियम", "नाइट्रोजन"],
        "answer_en": "Compressed Air",
        "answer_hi": "संपीड़ित हवा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the unit of electric field intensity?",
        "question_hi": "विद्युत क्षेत्र तीव्रता की इकाई क्या है?",
        "options_en": ["Newton/Coulomb", "Volt/Meter", "Both", "None"],
        "options_hi": ["न्यूटन/कूलम्ब", "वोल्ट/मीटर", "दोनों", "कोई नहीं"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
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