const questions = [
    {
        "num": 1,
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
        "num": 2,
        "question_en": "What is the chemical formula of Quicklime?",
        "question_hi": "बिना बुझा चूना का रासायनिक सूत्र क्या है?",
        "options_en": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "options_hi": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "answer_en": "CaO",
        "answer_hi": "CaO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Who invented the Steam Engine?",
        "question_hi": "स्टीम इंजन का आविष्कार किसने किया?",
        "options_en": ["James Watt", "Thomas Edison", "Alexander Graham Bell", "Michael Faraday"],
        "options_hi": ["जेम्स वाट", "थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "माइकल फैराडे"],
        "answer_en": "James Watt",
        "answer_hi": "जेम्स वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the value of (a + b)²?",
        "question_hi": "(a + b)² का मान क्या है?",
        "options_en": ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "a² + b² - 2ab"],
        "options_hi": ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "a² + b² - 2ab"],
        "answer_en": "a² + 2ab + b²",
        "answer_hi": "a² + 2ab + b²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which is the national bird of India?",
        "question_hi": "भारत का राष्ट्रीय पक्षी कौन सा है?",
        "options_en": ["Peacock", "Sparrow", "Parrot", "Crow"],
        "options_hi": ["मोर", "गौरैया", "तोता", "कौआ"],
        "answer_en": "Peacock",
        "answer_hi": "मोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the SI unit of pressure?",
        "question_hi": "दबाव की SI इकाई क्या है?",
        "options_en": ["Pascal", "Newton", "Joule", "Watt"],
        "options_hi": ["पास्कल", "न्यूटन", "जूल", "वाट"],
        "answer_en": "Pascal",
        "answer_hi": "पास्कल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which gas is known as Marsh Gas?",
        "question_hi": "किस गैस को मार्श गैस के नाम से जाना जाता है?",
        "options_en": ["Methane", "Ethane", "Propane", "Butane"],
        "options_hi": ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the chemical symbol for Neon?",
        "question_hi": "नियॉन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ne", "No", "N", "Na"],
        "options_hi": ["Ne", "No", "N", "Na"],
        "answer_en": "Ne",
        "answer_hi": "Ne",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Who wrote 'Madhushala'?",
        "question_hi": "'मधुशाला' किसने लिखी?",
        "options_en": ["Harivansh Rai Bachchan", "Mahadevi Verma", "Suryakant Tripathi", "Jaishankar Prasad"],
        "options_hi": ["हरिवंश राय बच्चन", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी", "जयशंकर प्रसाद"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which is the largest country by area?",
        "question_hi": "क्षेत्रफल के हिसाब से सबसे बड़ा देश कौन सा है?",
        "options_en": ["China", "USA", "Russia", "Canada"],
        "options_hi": ["चीन", "अमेरिका", "रूस", "कनाडा"],
        "answer_en": "Russia",
        "answer_hi": "रूस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the atomic mass of Hydrogen?",
        "question_hi": "हाइड्रोजन का परमाणु द्रव्यमान क्या है?",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
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
        "num": 13,
        "question_en": "Which blood cells help in clotting?",
        "question_hi": "कौन सी रक्त कोशिकाएं थक्का जमाने में मदद करती हैं?",
        "options_en": ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
        "options_hi": ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
        "answer_en": "Platelets",
        "answer_hi": "प्लेटलेट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the cube of 4?",
        "question_hi": "4 का घन क्या है?",
        "options_en": ["16", "64", "32", "128"],
        "options_hi": ["16", "64", "32", "128"],
        "answer_en": "64",
        "answer_hi": "64",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which gas is used by plants in respiration?",
        "question_hi": "पौधे श्वसन में किस गैस का उपयोग करते हैं?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Who was the first Prime Minister of India?",
        "question_hi": "भारत के पहले प्रधानमंत्री कौन थे?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Rajendra Prasad"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल", "राजेंद्र प्रसाद"],
        "answer_en": "Jawaharlal Nehru",
        "answer_hi": "जवाहरलाल नेहरू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the chemical formula of Bleaching Powder?",
        "question_hi": "विरंजक चूर्ण का रासायनिक सूत्र क्या है?",
        "options_en": ["CaOCl₂", "NaCl", "CaCO₃", "NaOH"],
        "options_hi": ["CaOCl₂", "NaCl", "CaCO₃", "NaOH"],
        "answer_en": "CaOCl₂",
        "answer_hi": "CaOCl₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which is the smallest ocean?",
        "question_hi": "सबसे छोटा महासागर कौन सा है?",
        "options_en": ["Arctic Ocean", "Indian Ocean", "Southern Ocean", "Atlantic Ocean"],
        "options_hi": ["आर्कटिक महासागर", "हिंद महासागर", "दक्षिणी महासागर", "अटलांटिक महासागर"],
        "answer_en": "Arctic Ocean",
        "answer_hi": "आर्कटिक महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the unit of electric charge?",
        "question_hi": "विद्युत आवेश की इकाई क्या है?",
        "options_en": ["Coulomb", "Ampere", "Volt", "Ohm"],
        "options_hi": ["कूलॉम", "एम्पियर", "वोल्ट", "ओम"],
        "answer_en": "Coulomb",
        "answer_hi": "कूलॉम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which metal is used in thermometers?",
        "question_hi": "थर्मामीटर में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Mercury", "Iron", "Copper", "Aluminum"],
        "options_hi": ["पारा", "लोहा", "तांबा", "एल्युमिनियम"],
        "answer_en": "Mercury",
        "answer_hi": "पारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the value of sin 45°?",
        "question_hi": "sin 45° का मान क्या है?",
        "options_en": ["1/√2", "1", "√3/2", "0"],
        "options_hi": ["1/√2", "1", "√3/2", "0"],
        "answer_en": "1/√2",
        "answer_hi": "1/√2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which vitamin is known as Sunshine Vitamin?",
        "question_hi": "किस विटामिन को सनशाइन विटामिन के नाम से जाना जाता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the chemical formula of Plaster of Paris?",
        "question_hi": "प्लास्टर ऑफ पेरिस का रासायनिक सूत्र क्या है?",
        "options_en": ["CaSO₄.½H₂O", "CaSO₄.2H₂O", "CaCO₃", "CaO"],
        "options_hi": ["CaSO₄.½H₂O", "CaSO₄.2H₂O", "CaCO₃", "CaO"],
        "answer_en": "CaSO₄.½H₂O",
        "answer_hi": "CaSO₄.½H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Who invented the Telephone?",
        "question_hi": "टेलीफोन का आविष्कार किसने किया?",
        "options_en": ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
        "options_hi": ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "निकोला टेस्ला", "गुग्लिल्मो मार्कोनी"],
        "answer_en": "Alexander Graham Bell",
        "answer_hi": "अलेक्जेंडर ग्राहम बेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which planet is known as the Morning Star?",
        "question_hi": "किस ग्रह को मॉर्निंग स्टार के नाम से जाना जाता है?",
        "options_en": ["Mars", "Venus", "Jupiter", "Mercury"],
        "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "बुध"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which gas is produced during fermentation?",
        "question_hi": "किण्वन के दौरान कौन सी गैस उत्पन्न होती है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the chemical symbol for Argon?",
        "question_hi": "आर्गन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ar", "Ag", "A", "An"],
        "options_hi": ["Ar", "Ag", "A", "An"],
        "answer_en": "Ar",
        "answer_hi": "Ar",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
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
        "num": 29,
        "question_en": "What is the formula for the area of a trapezium?",
        "question_hi": "समलंब चतुर्भुज के क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["½(a+b)h", "a×b", "a+b", "a²+b²"],
        "options_hi": ["½(a+b)h", "a×b", "a+b", "a²+b²"],
        "answer_en": "½(a+b)h",
        "answer_hi": "½(a+b)h",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which organ produces red blood cells?",
        "question_hi": "कौन सा अंग लाल रक्त कोशिकाएं उत्पन्न करता है?",
        "options_en": ["Liver", "Spleen", "Bone marrow", "Kidneys"],
        "options_hi": ["यकृत", "तिल्ली", "बोन मैरो", "गुर्दे"],
        "answer_en": "Bone marrow",
        "answer_hi": "बोन मैरो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the boiling point of mercury?",
        "question_hi": "पारे का क्वथनांक क्या है?",
        "options_en": ["357°C", "100°C", "78°C", "200°C"],
        "options_hi": ["357°C", "100°C", "78°C", "200°C"],
        "answer_en": "357°C",
        "answer_hi": "357°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which is the fastest bird?",
        "question_hi": "सबसे तेज उड़ने वाला पक्षी कौन सा है?",
        "options_en": ["Eagle", "Peregrine Falcon", "Ostrich", "Hummingbird"],
        "options_hi": ["ईगल", "पेरेग्रिन फाल्कन", "शुतुरमुर्ग", "हमिंगबर्ड"],
        "answer_en": "Peregrine Falcon",
        "answer_hi": "पेरेग्रिन फाल्कन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
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
        "num": 34,
        "question_en": "Who was the first Indian to win an Oscar?",
        "question_hi": "ऑस्कर जीतने वाले पहले भारतीय कौन थे?",
        "options_en": ["A.R. Rahman", "Bhanu Athaiya", "Satyajit Ray", "Gulzar"],
        "options_hi": ["ए.आर. रहमान", "भानु अथैया", "सत्यजित रे", "गुलज़ार"],
        "answer_en": "Bhanu Athaiya",
        "answer_hi": "भानु अथैया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the formula for work done?",
        "question_hi": "किए गए कार्य का सूत्र क्या है?",
        "options_en": ["Force × Distance", "Mass × Acceleration", "Pressure × Volume", "Power × Time"],
        "options_hi": ["बल × दूरी", "द्रव्यमान × त्वरण", "दबाव × आयतन", "शक्ति × समय"],
        "answer_en": "Force × Distance",
        "answer_hi": "बल × दूरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which gas is used in neon signs?",
        "question_hi": "नियॉन साइन में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Neon", "Argon", "Helium", "Xenon"],
        "options_hi": ["नियॉन", "आर्गन", "हीलियम", "जेनॉन"],
        "answer_en": "Neon",
        "answer_hi": "नियॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
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
        "num": 38,
        "question_en": "Who painted 'The Last Supper'?",
        "question_hi": "'द लास्ट सपर' की पेंटिंग किसने बनाई?",
        "options_en": ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        "options_hi": ["माइकलएंजेलो", "लियोनार्डो दा विंची", "राफेल", "डोनाटेलो"],
        "answer_en": "Leonardo da Vinci",
        "answer_hi": "लियोनार्डो दा विंची",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
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
        "num": 40,
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
        "num": 41,
        "question_en": "What is the chemical formula of Carbon Monoxide?",
        "question_hi": "कार्बन मोनोऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CO", "CO₂", "C₂O", "C₃O₂"],
        "options_hi": ["CO", "CO₂", "C₂O", "C₃O₂"],
        "answer_en": "CO",
        "answer_hi": "CO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Who discovered the Sea Route to India?",
        "question_hi": "भारत के समुद्री मार्ग की खोज किसने की?",
        "options_en": ["Vasco da Gama", "Christopher Columbus", "Marco Polo", "James Cook"],
        "options_hi": ["वास्को डी गामा", "क्रिस्टोफर कोलंबस", "मार्को पोलो", "जेम्स कुक"],
        "answer_en": "Vasco da Gama",
        "answer_hi": "वास्को डी गामा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the highest mountain in the world?",
        "question_hi": "दुनिया की सबसे ऊंची पर्वत चोटी कौन सी है?",
        "options_en": ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
        "options_hi": ["K2", "माउंट एवरेस्ट", "कंचनजंगा", "मकालु"],
        "answer_en": "Mount Everest",
        "answer_hi": "माउंट एवरेस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which gas is used in making semiconductors?",
        "question_hi": "सेमीकंडक्टर बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Silane", "Methane", "Ethane", "Propane"],
        "options_hi": ["सिलेन", "मीथेन", "ईथेन", "प्रोपेन"],
        "answer_en": "Silane",
        "answer_hi": "सिलेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
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
        "num": 46,
        "question_en": "Who wrote 'Nirmala'?",
        "question_hi": "'निर्मला' किसने लिखा?",
        "options_en": ["Premchand", "Jaishankar Prasad", "Mahadevi Verma", "Suryakant Tripathi"],
        "options_hi": ["प्रेमचंद", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the formula for the volume of a cone?",
        "question_hi": "शंकु के आयतन का सूत्र क्या है?",
        "options_en": ["⅓πr²h", "πr²h", "⅓πrh", "πrh"],
        "options_hi": ["⅓πr²h", "πr²h", "⅓πrh", "πrh"],
        "answer_en": "⅓πr²h",
        "answer_hi": "⅓πr²h",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which organ stores fat in the human body?",
        "question_hi": "मानव शरीर में कौन सा अंग वसा संग्रहीत करता है?",
        "options_en": ["Liver", "Adipose tissue", "Muscles", "Skin"],
        "options_hi": ["यकृत", "वसा ऊतक", "मांसपेशियां", "त्वचा"],
        "answer_en": "Adipose tissue",
        "answer_hi": "वसा ऊतक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the freezing point of alcohol?",
        "question_hi": "अल्कोहल का हिमांक क्या है?",
        "options_en": ["-114°C", "0°C", "-78°C", "-100°C"],
        "options_hi": ["-114°C", "0°C", "-78°C", "-100°C"],
        "answer_en": "-114°C",
        "answer_hi": "-114°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which is the largest gland in human body?",
        "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?",
        "options_en": ["Liver", "Pancreas", "Thyroid", "Pituitary"],
        "options_hi": ["यकृत", "अग्न्याशय", "थायरॉइड", "पिट्यूटरी"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
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
        "num": 52,
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
        "num": 53,
        "question_en": "What is the formula for density?",
        "question_hi": "घनत्व का सूत्र क्या है?",
        "options_en": ["Mass/Volume", "Volume/Mass", "Mass × Volume", "Mass + Volume"],
        "options_hi": ["द्रव्यमान/आयतन", "आयतन/द्रव्यमान", "द्रव्यमान × आयतन", "द्रव्यमान + आयतन"],
        "answer_en": "Mass/Volume",
        "answer_hi": "द्रव्यमान/आयतन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which gas is used in making soda water?",
        "question_hi": "सोडा वाटर बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the chemical symbol for Nickel?",
        "question_hi": "निकल का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ni", "N", "Nk", "Ne"],
        "options_hi": ["Ni", "N", "Nk", "Ne"],
        "answer_en": "Ni",
        "answer_hi": "Ni",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Who wrote 'Ashadh Ka Ek Din'?",
        "question_hi": "'आषाढ़ का एक दिन' किसने लिखा?",
        "options_en": ["Mohan Rakesh", "Jaishankar Prasad", "Bhisham Sahni", "Dharamvir Bharati"],
        "options_hi": ["मोहन राकेश", "जयशंकर प्रसाद", "भीष्म साहनी", "धर्मवीर भारती"],
        "answer_en": "Mohan Rakesh",
        "answer_hi": "मोहन राकेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the value of tan 45°?",
        "question_hi": "tan 45° का मान क्या है?",
        "options_en": ["1", "0", "√3", "1/√3"],
        "options_hi": ["1", "0", "√3", "1/√3"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which vitamin deficiency causes Pellagra?",
        "question_hi": "किस विटामिन की कमी से पेलाग्रा रोग होता है?",
        "options_en": ["Vitamin B3", "Vitamin B1", "Vitamin B2", "Vitamin B12"],
        "options_hi": ["विटामिन B3", "विटामिन B1", "विटामिन B2", "विटामिन B12"],
        "answer_en": "Vitamin B3",
        "answer_hi": "विटामिन B3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the chemical formula of Propane?",
        "question_hi": "प्रोपेन का रासायनिक सूत्र क्या है?",
        "options_en": ["C₃H₈", "CH₄", "C₂H₆", "C₄H₁₀"],
        "options_hi": ["C₃H₈", "CH₄", "C₂H₆", "C₄H₁₀"],
        "answer_en": "C₃H₈",
        "answer_hi": "C₃H₈",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Who discovered the Cell?",
        "question_hi": "कोशिका की खोज किसने की?",
        "options_en": ["Robert Hooke", "Anton van Leeuwenhoek", "Louis Pasteur", "Robert Koch"],
        "options_hi": ["रॉबर्ट हुक", "एंटोन वैन ल्यूवेनहॉक", "लुई पाश्चर", "रॉबर्ट कोच"],
        "answer_en": "Robert Hooke",
        "answer_hi": "रॉबर्ट हुक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the formula for compound interest?",
        "question_hi": "चक्रवृद्धि ब्याज का सूत्र क्या है?",
        "options_en": ["P(1+R/100)ᵀ", "PRT/100", "P + I", "P(1+RT)"],
        "options_hi": ["P(1+R/100)ᵀ", "PRT/100", "P + I", "P(1+RT)"],
        "answer_en": "P(1+R/100)ᵀ",
        "answer_hi": "P(1+R/100)ᵀ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which gas is used in making PVC?",
        "question_hi": "PVC बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Vinyl chloride", "Ethylene", "Propylene", "Acetylene"],
        "options_hi": ["विनाइल क्लोराइड", "एथिलीन", "प्रोपिलीन", "एसिटिलीन"],
        "answer_en": "Vinyl chloride",
        "answer_hi": "विनाइल क्लोराइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the chemical symbol for Platinum?",
        "question_hi": "प्लैटिनम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Pl", "Pt", "Pn", "Pm"],
        "options_hi": ["Pl", "Pt", "Pn", "Pm"],
        "answer_en": "Pt",
        "answer_hi": "Pt",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Who wrote 'Rashmirathi'?",
        "question_hi": "'रश्मिरथी' किसने लिखा?",
        "options_en": ["Ramdhari Singh Dinkar", "Harivansh Rai Bachchan", "Suryakant Tripathi", "Mahadevi Verma"],
        "options_hi": ["रामधारी सिंह दिनकर", "हरिवंश राय बच्चन", "सूर्यकांत त्रिपाठी", "महादेवी वर्मा"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the formula for the perimeter of a square?",
        "question_hi": "वर्ग की परिधि का सूत्र क्या है?",
        "options_en": ["4a", "a²", "2(a+b)", "a+b+c"],
        "options_hi": ["4a", "a²", "2(a+b)", "a+b+c"],
        "answer_en": "4a",
        "answer_hi": "4a",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which organ produces white blood cells?",
        "question_hi": "कौन सा अंग श्वेत रक्त कोशिकाएं उत्पन्न करता है?",
        "options_en": ["Liver", "Spleen", "Bone marrow", "Thymus"],
        "options_hi": ["यकृत", "तिल्ली", "बोन मैरो", "थाइमस"],
        "answer_en": "Bone marrow",
        "answer_hi": "बोन मैरो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the chemical formula of Formic Acid?",
        "question_hi": "फॉर्मिक एसिड का रासायनिक सूत्र क्या है?",
        "options_en": ["HCOOH", "CH₃COOH", "C₂H₅COOH", "H₂CO₃"],
        "options_hi": ["HCOOH", "CH₃COOH", "C₂H₅COOH", "H₂CO₃"],
        "answer_en": "HCOOH",
        "answer_hi": "HCOOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Who was the first Indian to win a Grand Slam?",
        "question_hi": "ग्रैंड स्लैम जीतने वाले पहले भारतीय कौन थे?",
        "options_en": ["Leander Paes", "Mahesh Bhupathi", "Sania Mirza", "Ramanathan Krishnan"],
        "options_hi": ["लिएंडर पेस", "महेश भूपति", "सानिया मिर्जा", "रमणाथन कृष्णन"],
        "answer_en": "Mahesh Bhupathi",
        "answer_hi": "महेश भूपति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the formula for acceleration?",
        "question_hi": "त्वरण का सूत्र क्या है?",
        "options_en": ["(v-u)/t", "v×t", "u+at", "v²-u²"],
        "options_hi": ["(v-u)/t", "v×t", "u+at", "v²-u²"],
        "answer_en": "(v-u)/t",
        "answer_hi": "(v-u)/t",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which gas is used in making polystyrene?",
        "question_hi": "पॉलीस्टाइरीन बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Styrene", "Ethylene", "Propylene", "Butylene"],
        "options_hi": ["स्टाइरीन", "एथिलीन", "प्रोपिलीन", "ब्यूटिलीन"],
        "answer_en": "Styrene",
        "answer_hi": "स्टाइरीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the chemical symbol for Radium?",
        "question_hi": "रेडियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ra", "Rd", "Rm", "Rn"],
        "options_hi": ["Ra", "Rd", "Rm", "Rn"],
        "answer_en": "Ra",
        "answer_hi": "Ra",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Who wrote 'Chandrakanta'?",
        "question_hi": "'चंद्रकांता' किसने लिखा?",
        "options_en": ["Devaki Nandan Khatri", "Premchand", "Jaishankar Prasad", "Mahadevi Verma"],
        "options_hi": ["देवकी नंदन खत्री", "प्रेमचंद", "जयशंकर प्रसाद", "महादेवी वर्मा"],
        "answer_en": "Devaki Nandan Khatri",
        "answer_hi": "देवकी नंदन खत्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the value of sec 45°?",
        "question_hi": "sec 45° का मान क्या है?",
        "options_en": ["√2", "1", "2", "1/√2"],
        "options_hi": ["√2", "1", "2", "1/√2"],
        "answer_en": "√2",
        "answer_hi": "√2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which vitamin deficiency causes Rickets?",
        "question_hi": "किस विटामिन की कमी से रिकेट्स रोग होता है?",
        "options_en": ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"],
        "options_hi": ["विटामिन D", "विटामिन C", "विटामिन A", "विटामिन K"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the chemical formula of Ethylene?",
        "question_hi": "एथिलीन का रासायनिक सूत्र क्या है?",
        "options_en": ["C₂H₄", "C₂H₆", "CH₄", "C₃H₆"],
        "options_hi": ["C₂H₄", "C₂H₆", "CH₄", "C₃H₆"],
        "answer_en": "C₂H₄",
        "answer_hi": "C₂H₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Who discovered the Laws of Inheritance?",
        "question_hi": "आनुवंशिकता के नियमों की खोज किसने की?",
        "options_en": ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Robert Koch"],
        "options_hi": ["ग्रेगर मेंडल", "चार्ल्स डार्विन", "लुई पाश्चर", "रॉबर्ट कोच"],
        "answer_en": "Gregor Mendel",
        "answer_hi": "ग्रेगर मेंडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the formula for the area of a rhombus?",
        "question_hi": "समचतुर्भुज के क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["½ × d₁ × d₂", "a²", "a × b", "½ × a × h"],
        "options_hi": ["½ × d₁ × d₂", "a²", "a × b", "½ × a × h"],
        "answer_en": "½ × d₁ × d₂",
        "answer_hi": "½ × d₁ × d₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
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
        "num": 79,
        "question_en": "What is the chemical symbol for Uranium?",
        "question_hi": "यूरेनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ur", "U", "Un", "Um"],
        "options_hi": ["Ur", "U", "Un", "Um"],
        "answer_en": "U",
        "answer_hi": "U",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Who wrote 'Maila Anchal'?",
        "question_hi": "'मैला आंचल' किसने लिखा?",
        "options_en": ["Phanishwar Nath Renu", "Premchand", "Jaishankar Prasad", "Mahadevi Verma"],
        "options_hi": ["फणीश्वर नाथ रेणु", "प्रेमचंद", "जयशंकर प्रसाद", "महादेवी वर्मा"],
        "answer_en": "Phanishwar Nath Renu",
        "answer_hi": "फणीश्वर नाथ रेणु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the value of cosec 45°?",
        "question_hi": "cosec 45° का मान क्या है?",
        "options_en": ["√2", "1", "2", "1/√2"],
        "options_hi": ["√2", "1", "2", "1/√2"],
        "answer_en": "√2",
        "answer_hi": "√2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which vitamin is known as Retinol?",
        "question_hi": "किस विटामिन को रेटिनॉल के नाम से जाना जाता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the chemical formula of Butane?",
        "question_hi": "ब्यूटेन का रासायनिक सूत्र क्या है?",
        "options_en": ["C₄H₁₀", "C₃H₈", "C₂H₆", "CH₄"],
        "options_hi": ["C₄H₁₀", "C₃H₈", "C₂H₆", "CH₄"],
        "answer_en": "C₄H₁₀",
        "answer_hi": "C₄H₁₀",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Who discovered the Radioactivity?",
        "question_hi": "रेडियोधर्मिता की खोज किसने की?",
        "options_en": ["Marie Curie", "Pierre Curie", "Henri Becquerel", "Ernest Rutherford"],
        "options_hi": ["मैरी क्यूरी", "पियरे क्यूरी", "हेनरी बेकरेल", "अर्नेस्ट रदरफोर्ड"],
        "answer_en": "Henri Becquerel",
        "answer_hi": "हेनरी बेकरेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the formula for the surface area of a sphere?",
        "question_hi": "गोले के पृष्ठीय क्षेत्रफल का सूत्र क्या है?",
        "options_en": ["4πr²", "πr²", "2πr²", "3πr²"],
        "options_hi": ["4πr²", "πr²", "2πr²", "3πr²"],
        "answer_en": "4πr²",
        "answer_hi": "4πr²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which organ produces digestive enzymes?",
        "question_hi": "कौन सा अंग पाचक एंजाइम उत्पन्न करता है?",
        "options_en": ["Pancreas", "Liver", "Stomach", "Small intestine"],
        "options_hi": ["अग्न्याशय", "यकृत", "आमाशय", "छोटी आंत"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the chemical formula of Citric Acid?",
        "question_hi": "सिट्रिक एसिड का रासायनिक सूत्र क्या है?",
        "options_en": ["C₆H₈O₇", "CH₃COOH", "HCOOH", "C₃H₆O₃"],
        "options_hi": ["C₆H₈O₇", "CH₃COOH", "HCOOH", "C₃H₆O₃"],
        "answer_en": "C₆H₈O₇",
        "answer_hi": "C₆H₈O₇",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Who was the first Indian woman to win an Olympic medal?",
        "question_hi": "ओलंपिक पदक जीतने वाली पहली भारतीय महिला कौन थीं?",
        "options_en": ["Karnam Malleswari", "P.T. Usha", "Mary Kom", "Saina Nehwal"],
        "options_hi": ["कर्णम मल्लेश्वरी", "पी.टी. उषा", "मैरी कॉम", "साइना नेहवाल"],
        "answer_en": "Karnam Malleswari",
        "answer_hi": "कर्णम मल्लेश्वरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the formula for potential energy?",
        "question_hi": "स्थितिज ऊर्जा का सूत्र क्या है?",
        "options_en": ["mgh", "½mv²", "Fd", "ma"],
        "options_hi": ["mgh", "½mv²", "Fd", "ma"],
        "answer_en": "mgh",
        "answer_hi": "mgh",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which gas is used in making synthetic rubber?",
        "question_hi": "सिंथेटिक रबर बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Butadiene", "Ethylene", "Propylene", "Acetylene"],
        "options_hi": ["ब्यूटाडाइन", "एथिलीन", "प्रोपिलीन", "एसिटिलीन"],
        "answer_en": "Butadiene",
        "answer_hi": "ब्यूटाडाइन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the chemical symbol for Krypton?",
        "question_hi": "क्रिप्टन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Kp", "Kr", "K", "Ky"],
        "options_hi": ["Kp", "Kr", "K", "Ky"],
        "answer_en": "Kr",
        "answer_hi": "Kr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Who wrote 'Gaban'?",
        "question_hi": "'गबन' किसने लिखा?",
        "options_en": ["Premchand", "Jaishankar Prasad", "Mahadevi Verma", "Suryakant Tripathi"],
        "options_hi": ["प्रेमचंद", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the value of cot 60°?",
        "question_hi": "cot 60° का मान क्या है?",
        "options_en": ["1/√3", "√3", "1", "0"],
        "options_hi": ["1/√3", "√3", "1", "0"],
        "answer_en": "1/√3",
        "answer_hi": "1/√3",
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
        "question_en": "What is the chemical formula of TNT?",
        "question_hi": "TNT का रासायनिक सूत्र क्या है?",
        "options_en": ["C₇H₅N₃O₆", "C₆H₆", "C₆H₁₂O₆", "CH₄"],
        "options_hi": ["C₇H₅N₃O₆", "C₆H₆", "C₆H₁₂O₆", "CH₄"],
        "answer_en": "C₇H₅N₃O₆",
        "answer_hi": "C₇H₅N₃O₆",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Who discovered the Vaccination?",
        "question_hi": "टीकाकरण की खोज किसने की?",
        "options_en": ["Edward Jenner", "Louis Pasteur", "Alexander Fleming", "Robert Koch"],
        "options_hi": ["एडवर्ड जेनर", "लुई पाश्चर", "अलेक्जेंडर फ्लेमिंग", "रॉबर्ट कोच"],
        "answer_en": "Edward Jenner",
        "answer_hi": "एडवर्ड जेनर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the formula for the volume of a pyramid?",
        "question_hi": "पिरामिड के आयतन का सूत्र क्या है?",
        "options_en": ["⅓ × base area × height", "base area × height", "½ × base area × height", "⅔ × base area × height"],
        "options_hi": ["⅓ × आधार क्षेत्रफल × ऊंचाई", "आधार क्षेत्रफल × ऊंचाई", "½ × आधार क्षेत्रफल × ऊंचाई", "⅔ × आधार क्षेत्रफल × ऊंचाई"],
        "answer_en": "⅓ × base area × height",
        "answer_hi": "⅓ × आधार क्षेत्रफल × ऊंचाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which gas is used in making glass?",
        "question_hi": "कांच बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Argon"],
        "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "आर्गन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the chemical symbol for Xenon?",
        "question_hi": "जेनॉन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Xe", "Xn", "X", "Xo"],
        "options_hi": ["Xe", "Xn", "X", "Xo"],
        "answer_en": "Xe",
        "answer_hi": "Xe",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Who wrote 'Saket'?",
        "question_hi": "'साकेत' किसने लिखा?",
        "options_en": ["Maithili Sharan Gupt", "Jaishankar Prasad", "Mahadevi Verma", "Suryakant Tripathi"],
        "options_hi": ["मैथिलीशरण गुप्त", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "answer_en": "Maithili Sharan Gupt",
        "answer_hi": "मैथिलीशरण गुप्त",
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