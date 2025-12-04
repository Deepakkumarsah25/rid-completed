const questions = [
    {
        "num": 1,
        "question_en": "What is the value of (a + b)³?",
        "question_hi": "(a + b)³ का मान क्या है?",
        "options_en": ["a³ + b³", "a³ + 3a²b + 3ab² + b³", "a³ + b³ + 3ab", "a³ + b³ + ab"],
        "options_hi": ["a³ + b³", "a³ + 3a²b + 3ab² + b³", "a³ + b³ + 3ab", "a³ + b³ + ab"],
        "answer_en": "a³ + 3a²b + 3ab² + b³",
        "answer_hi": "a³ + 3a²b + 3ab² + b³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which of the following is a composite number?",
        "question_hi": "निम्नलिखित में से कौन सी भाज्य संख्या है?",
        "options_en": ["2", "3", "11", "15"],
        "options_hi": ["2", "3", "11", "15"],
        "answer_en": "15",
        "answer_hi": "15",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the chemical formula of Plaster of Paris?",
        "question_hi": "प्लास्टर ऑफ पेरिस का रासायनिक सूत्र क्या है?",
        "options_en": ["CaSO₄.2H₂O", "CaSO₄.½H₂O", "CaCO₃", "Ca(OH)₂"],
        "options_hi": ["CaSO₄.2H₂O", "CaSO₄.½H₂O", "CaCO₃", "Ca(OH)₂"],
        "answer_en": "CaSO₄.½H₂O",
        "answer_hi": "CaSO₄.½H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Who wrote 'Madhushala'?",
        "question_hi": "'मधुशाला' किसने लिखी?",
        "options_en": ["Harivansh Rai Bachchan", "Mahadevi Verma", "Suryakant Tripathi", "Sumitranandan Pant"],
        "options_hi": ["हरिवंश राय बच्चन", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी", "सुमित्रानंदन पंत"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the SI unit of luminous intensity?",
        "question_hi": "ज्योति तीव्रता की SI इकाई क्या है?",
        "options_en": ["Lumen", "Lux", "Candela", "Watt"],
        "options_hi": ["लुमेन", "लक्स", "कैंडेला", "वाट"],
        "answer_en": "Candela",
        "answer_hi": "कैंडेला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which organ produces bile juice in human body?",
        "question_hi": "मानव शरीर में पित्त रस कौन सा अंग उत्पन्न करता है?",
        "options_en": ["Liver", "Pancreas", "Gallbladder", "Stomach"],
        "options_hi": ["यकृत", "अग्न्याशय", "पित्ताशय", "आमाशय"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the antonym of 'Generous'?",
        "question_hi": "'Generous' का विलोम शब्द क्या है?",
        "options_en": ["Kind", "Stingy", "Helpful", "Charitable"],
        "options_hi": ["दयालु", "कंजूस", "सहायक", "दानशील"],
        "answer_en": "Stingy",
        "answer_hi": "कंजूस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
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
        "num": 9,
        "question_en": "Solve: 2x² - 8 = 0",
        "question_hi": "हल करें: 2x² - 8 = 0",
        "options_en": ["x = ±1", "x = ±2", "x = ±3", "x = ±4"],
        "options_hi": ["x = ±1", "x = ±2", "x = ±3", "x = ±4"],
        "answer_en": "x = ±2",
        "answer_hi": "x = ±2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which gas is produced during anaerobic respiration?",
        "question_hi": "अवायवीय श्वसन के दौरान कौन सी गैस उत्पन्न होती है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Lactic acid", "Ethanol"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "लैक्टिक अम्ल", "एथनॉल"],
        "answer_en": "Ethanol",
        "answer_hi": "एथनॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the formula for gravitational force?",
        "question_hi": "गुरुत्वाकर्षण बल का सूत्र क्या है?",
        "options_en": ["F = G(m1m2)/r²", "F = ma", "F = mg", "F = kx"],
        "options_hi": ["F = G(m1m2)/r²", "F = ma", "F = mg", "F = kx"],
        "answer_en": "F = G(m1m2)/r²",
        "answer_hi": "F = G(m1m2)/r²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which of these is a vestigial organ in humans?",
        "question_hi": "निम्नलिखित में से कौन सा मानव में अवशेषी अंग है?",
        "options_en": ["Heart", "Appendix", "Lungs", "Kidney"],
        "options_hi": ["हृदय", "अपेंडिक्स", "फेफड़े", "वृक्क"],
        "answer_en": "Appendix",
        "answer_hi": "अपेंडिक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the synonym of 'Meticulous'?",
        "question_hi": "'Meticulous' का समानार्थी शब्द क्या है?",
        "options_en": ["Careless", "Detailed", "Rough", "Sloppy"],
        "options_hi": ["लापरवाह", "विस्तृत", "कच्चा", "असावधान"],
        "answer_en": "Detailed",
        "answer_hi": "विस्तृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Who founded the city of Jaipur?",
        "question_hi": "जयपुर शहर की स्थापना किसने की?",
        "options_en": ["Maharana Pratap", "Raja Man Singh", "Sawai Jai Singh II", "Prithviraj Chauhan"],
        "options_hi": ["महाराणा प्रताप", "राजा मान सिंह", "सवाई जय सिंह II", "पृथ्वीराज चौहान"],
        "answer_en": "Sawai Jai Singh II",
        "answer_hi": "सवाई जय सिंह II",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
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
        "num": 16,
        "question_en": "Which element has the highest atomic number?",
        "question_hi": "किस तत्व की परमाणु संख्या सबसे अधिक है?",
        "options_en": ["Uranium", "Plutonium", "Oganesson", "Radium"],
        "options_hi": ["यूरेनियम", "प्लूटोनियम", "ओगनेसन", "रेडियम"],
        "answer_en": "Oganesson",
        "answer_hi": "ओगनेसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the unit of electric potential difference?",
        "question_hi": "विद्युत विभवांतर की इकाई क्या है?",
        "options_en": ["Ampere", "Volt", "Ohm", "Watt"],
        "options_hi": ["एम्पियर", "वोल्ट", "ओम", "वाट"],
        "answer_en": "Volt",
        "answer_hi": "वोल्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
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
        "num": 19,
        "question_en": "What is the plural of 'Ox'?",
        "question_hi": "'Ox' का बहुवचन क्या है?",
        "options_en": ["Oxes", "Oxen", "Oxs", "Oxies"],
        "options_hi": ["ऑक्सेस", "ऑक्सेन", "ऑक्स्स", "ऑक्सीज़"],
        "answer_en": "Oxen",
        "answer_hi": "ऑक्सेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Where is the Hawa Mahal located?",
        "question_hi": "हवा महल कहाँ स्थित है?",
        "options_en": ["Delhi", "Jaipur", "Udaipur", "Jodhpur"],
        "options_hi": ["दिल्ली", "जयपुर", "उदयपुर", "जोधपुर"],
        "answer_en": "Jaipur",
        "answer_hi": "जयपुर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the volume of a cube with side 3 cm?",
        "question_hi": "3 सेमी भुजा वाले घन का आयतन क्या है?",
        "options_en": ["9 cm³", "18 cm³", "27 cm³", "36 cm³"],
        "options_hi": ["9 सेमी³", "18 सेमी³", "27 सेमी³", "36 सेमी³"],
        "answer_en": "27 cm³",
        "answer_hi": "27 सेमी³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which gas is used in fluorescent tubes?",
        "question_hi": "फ्लोरोसेंट ट्यूबों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Nitrogen", "Mercury vapor", "Argon"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "पारा वाष्प", "आर्गन"],
        "answer_en": "Mercury vapor",
        "answer_hi": "पारा वाष्प",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the speed of light in water?",
        "question_hi": "पानी में प्रकाश की गति क्या है?",
        "options_en": ["3×10⁸ m/s", "2.25×10⁸ m/s", "3×10⁶ m/s", "2.25×10⁶ m/s"],
        "options_hi": ["3×10⁸ मी/से", "2.25×10⁸ मी/से", "3×10⁶ मी/से", "2.25×10⁶ मी/से"],
        "answer_en": "2.25×10⁸ m/s",
        "answer_hi": "2.25×10⁸ मी/से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which cell organelle contains digestive enzymes?",
        "question_hi": "किस कोशिका अंग में पाचक एंजाइम पाए जाते हैं?",
        "options_en": ["Mitochondria", "Lysosome", "Nucleus", "Ribosome"],
        "options_hi": ["माइटोकॉन्ड्रिया", "लाइसोसोम", "केंद्रक", "राइबोसोम"],
        "answer_en": "Lysosome",
        "answer_hi": "लाइसोसोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the meaning of 'उत्साह'?",
        "question_hi": "'उत्साह' का अर्थ क्या है?",
        "options_en": ["Sadness", "Enthusiasm", "Anger", "Fear"],
        "options_hi": ["दुख", "उत्साह", "गुस्सा", "डर"],
        "answer_en": "Enthusiasm",
        "answer_hi": "उत्साह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Who was the first Indian to win an Oscar?",
        "question_hi": "ऑस्कर जीतने वाले पहले भारतीय कौन थे?",
        "options_en": ["A.R. Rahman", "Satyajit Ray", "Bhanu Athaiya", "Gulzar"],
        "options_hi": ["ए.आर. रहमान", "सत्यजित रे", "भानु अथैया", "गुलज़ार"],
        "answer_en": "Bhanu Athaiya",
        "answer_hi": "भानु अथैया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
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
        "num": 28,
        "question_en": "Which acid is known as 'King of Chemicals'?",
        "question_hi": "किस अम्ल को 'रसायनों का राजा' कहा जाता है?",
        "options_en": ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Acetic acid"],
        "options_hi": ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"],
        "answer_en": "Sulfuric acid",
        "answer_hi": "सल्फ्यूरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is Archimedes' principle?",
        "question_hi": "आर्किमिडीज का सिद्धांत क्या है?",
        "options_en": ["F = ma", "P = F/A", "Buoyant force equals weight of displaced fluid", "V = IR"],
        "options_hi": ["F = ma", "P = F/A", "उत्प्लावन बल विस्थापित द्रव के भार के बराबर होता है", "V = IR"],
        "answer_en": "Buoyant force equals weight of displaced fluid",
        "answer_hi": "उत्प्लावन बल विस्थापित द्रव के भार के बराबर होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
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
        "num": 31,
        "question_en": "What is the future tense of 'go'?",
        "question_hi": "'go' का future tense क्या है?",
        "options_en": ["goed", "went", "will go", "gone"],
        "options_hi": ["गोएड", "वेंट", "विल गो", "गॉन"],
        "answer_en": "will go",
        "answer_hi": "विल गो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Who built the Qutub Minar?",
        "question_hi": "कुतुब मीनार किसने बनवाया?",
        "options_en": ["Qutub-ud-din Aibak", "Iltutmish", "Alauddin Khilji", "Firoz Shah Tughlaq"],
        "options_hi": ["कुतुब-उद-दीन ऐबक", "इल्तुतमिश", "अलाउद्दीन खिलजी", "फिरोज शाह तुगलक"],
        "answer_en": "Qutub-ud-din Aibak",
        "answer_hi": "कुतुब-उद-दीन ऐबक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the value of 2⁵?",
        "question_hi": "2⁵ का मान क्या है?",
        "options_en": ["16", "32", "64", "128"],
        "options_hi": ["16", "32", "64", "128"],
        "answer_en": "32",
        "answer_hi": "32",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which metal is used in making aircrafts?",
        "question_hi": "वायुयान बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Iron", "Aluminum", "Copper", "Lead"],
        "options_hi": ["लोहा", "एल्युमिनियम", "तांबा", "सीसा"],
        "answer_en": "Aluminum",
        "answer_hi": "एल्युमिनियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the unit of magnetic field strength?",
        "question_hi": "चुंबकीय क्षेत्र शक्ति की इकाई क्या है?",
        "options_en": ["Tesla", "Weber", "Henry", "Gauss"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which part of human eye controls the amount of light entering?",
        "question_hi": "मानव आंख का कौन सा भाग प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है?",
        "options_en": ["Cornea", "Iris", "Retina", "Lens"],
        "options_hi": ["कॉर्निया", "आईरिस", "रेटिना", "लेंस"],
        "answer_en": "Iris",
        "answer_hi": "आईरिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the synonym of 'Abundant'?",
        "question_hi": "'Abundant' का समानार्थी शब्द क्या है?",
        "options_en": ["Scarce", "Plentiful", "Rare", "Limited"],
        "options_hi": ["दुर्लभ", "प्रचुर", "विरल", "सीमित"],
        "answer_en": "Plentiful",
        "answer_hi": "प्रचुर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Where is the Golden Temple located?",
        "question_hi": "गोल्डन टेम्पल कहाँ स्थित है?",
        "options_en": ["Delhi", "Amritsar", "Chandigarh", "Jaipur"],
        "options_hi": ["दिल्ली", "अमृतसर", "चंडीगढ़", "जयपुर"],
        "answer_en": "Amritsar",
        "answer_hi": "अमृतसर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the value of 100 ÷ (2 + 3)²?",
        "question_hi": "100 ÷ (2 + 3)² का मान क्या है?",
        "options_en": ["4", "5", "20", "25"],
        "options_hi": ["4", "5", "20", "25"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which gas is used in cigarette lighters?",
        "question_hi": "सिगरेट लाइटर में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Butane", "Propane", "Methane"],
        "options_hi": ["ऑक्सीजन", "ब्यूटेन", "प्रोपेन", "मीथेन"],
        "answer_en": "Butane",
        "answer_hi": "ब्यूटेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
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
        "num": 42,
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
        "num": 43,
        "question_en": "What is the antonym of 'Expand'?",
        "question_hi": "'Expand' का विलोम शब्द क्या है?",
        "options_en": ["Grow", "Contract", "Increase", "Extend"],
        "options_hi": ["बढ़ना", "सिकुड़ना", "बढ़ाना", "फैलाना"],
        "answer_en": "Contract",
        "answer_hi": "सिकुड़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Who was the first Indian to climb Mount Everest?",
        "question_hi": "माउंट एवरेस्ट पर चढ़ने वाले पहले भारतीय कौन थे?",
        "options_en": ["Tenzing Norgay", "Bachendri Pal", "Avtar Singh Cheema", "Mohan Singh"],
        "options_hi": ["तेंजिंग नोर्गे", "बचेंद्री पाल", "अवतार सिंह चीमा", "मोहन सिंह"],
        "answer_en": "Avtar Singh Cheema",
        "answer_hi": "अवतार सिंह चीमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the value of log₂8?",
        "question_hi": "log₂8 का मान क्या है?",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which element has the chemical symbol 'Pb'?",
        "question_hi": "किस तत्व का रासायनिक प्रतीक 'Pb' है?",
        "options_en": ["Platinum", "Lead", "Potassium", "Phosphorus"],
        "options_hi": ["प्लैटिनम", "सीसा", "पोटैशियम", "फॉस्फोरस"],
        "answer_en": "Lead",
        "answer_hi": "सीसा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the SI unit of capacitance?",
        "question_hi": "धारिता की SI इकाई क्या है?",
        "options_en": ["Farad", "Henry", "Ohm", "Siemens"],
        "options_hi": ["फैरड", "हेनरी", "ओम", "सीमेंस"],
        "answer_en": "Farad",
        "answer_hi": "फैरड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which gland controls metabolism in human body?",
        "question_hi": "मानव शरीर में चयापचय कौन सी ग्रंथि नियंत्रित करती है?",
        "options_en": ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
        "options_hi": ["थायरॉइड", "पिट्यूटरी", "एड्रेनल", "अग्न्याशय"],
        "answer_en": "Thyroid",
        "answer_hi": "थायरॉइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the meaning of 'साहस'?",
        "question_hi": "'साहस' का अर्थ क्या है?",
        "options_en": ["Fear", "Courage", "Weakness", "Doubt"],
        "options_hi": ["डर", "साहस", "कमजोरी", "संदेह"],
        "answer_en": "Courage",
        "answer_hi": "साहस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Who composed the Indian National Song 'Vande Mataram'?",
        "question_hi": "भारतीय राष्ट्रीय गीत 'वंदे मातरम्' की रचना किसने की?",
        "options_en": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Mahatma Gandhi"],
        "options_hi": ["रबींद्रनाथ टैगोर", "बंकिम चंद्र चटर्जी", "सरोजिनी नायडू", "महात्मा गांधी"],
        "answer_en": "Bankim Chandra Chatterjee",
        "answer_hi": "बंकिम चंद्र चटर्जी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the surface area of a sphere with radius 7 cm?",
        "question_hi": "7 सेमी त्रिज्या वाले गोले का पृष्ठीय क्षेत्रफल क्या है?",
        "options_en": ["154π cm²", "196π cm²", "616 cm²", "308π cm²"],
        "options_hi": ["154π सेमी²", "196π सेमी²", "616 सेमी²", "308π सेमी²"],
        "answer_en": "196π cm²",
        "answer_hi": "196π सेमी²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
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
        "num": 53,
        "question_en": "What is the refractive index of diamond?",
        "question_hi": "हीरे का अपवर्तनांक क्या है?",
        "options_en": ["1.33", "1.52", "2.42", "1.65"],
        "options_hi": ["1.33", "1.52", "2.42", "1.65"],
        "answer_en": "2.42",
        "answer_hi": "2.42",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which cell organelle is called 'Protein Factory'?",
        "question_hi": "किस कोशिका अंग को 'प्रोटीन फैक्ट्री' कहा जाता है?",
        "options_en": ["Mitochondria", "Ribosome", "Nucleus", "Golgi apparatus"],
        "options_hi": ["माइटोकॉन्ड्रिया", "राइबोसोम", "केंद्रक", "गॉल्जी उपकरण"],
        "answer_en": "Ribosome",
        "answer_hi": "राइबोसोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the superlative degree of 'Good'?",
        "question_hi": "'Good' की superlative degree क्या है?",
        "options_en": ["Good", "Better", "Best", "Well"],
        "options_hi": ["गुड", "बेटर", "बेस्ट", "वेल"],
        "answer_en": "Best",
        "answer_hi": "बेस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Where is the Sanchi Stupa located?",
        "question_hi": "सांची स्तूप कहाँ स्थित है?",
        "options_en": ["Madhya Pradesh", "Uttar Pradesh", "Bihar", "Maharashtra"],
        "options_hi": ["मध्य प्रदेश", "उत्तर प्रदेश", "बिहार", "महाराष्ट्र"],
        "answer_en": "Madhya Pradesh",
        "answer_hi": "मध्य प्रदेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the value of 3³ + 4³?",
        "question_hi": "3³ + 4³ का मान क्या है?",
        "options_en": ["27", "64", "91", "125"],
        "options_hi": ["27", "64", "91", "125"],
        "answer_en": "91",
        "answer_hi": "91",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which acid is present in ant sting?",
        "question_hi": "चींटी के डंक में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Formic acid", "Acetic acid", "Citric acid", "Lactic acid"],
        "options_hi": ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "सिट्रिक अम्ल", "लैक्टिक अम्ल"],
        "answer_en": "Formic acid",
        "answer_hi": "फॉर्मिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is Pascal's law?",
        "question_hi": "पास्कल का नियम क्या है?",
        "options_en": ["P = F/A", "Pressure applied to confined fluid is transmitted equally", "F = ma", "V = IR"],
        "options_hi": ["P = F/A", "सीमित द्रव पर लगाया गया दाब समान रूप से संचरित होता है", "F = ma", "V = IR"],
        "answer_en": "Pressure applied to confined fluid is transmitted equally",
        "answer_hi": "सीमित द्रव पर लगाया गया दाब समान रूप से संचरित होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which blood cells transport oxygen?",
        "question_hi": "कौन सी रक्त कोशिकाएं ऑक्सीजन का परिवहन करती हैं?",
        "options_en": ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
        "options_hi": ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
        "answer_en": "Red blood cells",
        "answer_hi": "लाल रक्त कोशिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the present continuous tense of 'run'?",
        "question_hi": "'run' का present continuous tense क्या है?",
        "options_en": ["run", "ran", "running", "will run"],
        "options_hi": ["रन", "रैन", "रनिंग", "विल रन"],
        "answer_en": "running",
        "answer_hi": "रनिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Who was the first Indian to receive Bharat Ratna?",
        "question_hi": "भारत रत्न प्राप्त करने वाले पहले भारतीय कौन थे?",
        "options_en": ["Jawaharlal Nehru", "C. Rajagopalachari", "S. Radhakrishnan", "B.R. Ambedkar"],
        "options_hi": ["जवाहरलाल नेहरू", "सी. राजगोपालाचारी", "एस. राधाकृष्णन", "बी.आर. अंबेडकर"],
        "answer_en": "C. Rajagopalachari",
        "answer_hi": "सी. राजगोपालाचारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the value of 12²?",
        "question_hi": "12² का मान क्या है?",
        "options_en": ["121", "144", "169", "196"],
        "options_hi": ["121", "144", "169", "196"],
        "answer_en": "144",
        "answer_hi": "144",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which metal is used in making mirrors?",
        "question_hi": "दर्पण बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Silver", "Aluminum", "Both A and B", "Copper"],
        "options_hi": ["चांदी", "एल्युमिनियम", "A और B दोनों", "तांबा"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the unit of inductance?",
        "question_hi": "प्रेरकत्व की इकाई क्या है?",
        "options_en": ["Henry", "Farad", "Ohm", "Siemens"],
        "options_hi": ["हेनरी", "फैरड", "ओम", "सीमेंस"],
        "answer_en": "Henry",
        "answer_hi": "हेनरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which part of human ear maintains balance?",
        "question_hi": "मानव कान का कौन सा भाग संतुलन बनाए रखता है?",
        "options_en": ["Cochlea", "Eardrum", "Semicircular canals", "Pinna"],
        "options_hi": ["कोक्लीया", "ईयरड्रम", "अर्धवृत्ताकार नलिकाएं", "पिन्ना"],
        "answer_en": "Semicircular canals",
        "answer_hi": "अर्धवृत्ताकार नलिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the synonym of 'Rapid'?",
        "question_hi": "'Rapid' का समानार्थी शब्द क्या है?",
        "options_en": ["Slow", "Fast", "Gradual", "Leisurely"],
        "options_hi": ["धीमा", "तेज", "क्रमिक", "आराम से"],
        "answer_en": "Fast",
        "answer_hi": "तेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Where is the Khajuraho Temple located?",
        "question_hi": "खजुराहो मंदिर कहाँ स्थित है?",
        "options_en": ["Madhya Pradesh", "Rajasthan", "Uttar Pradesh", "Gujarat"],
        "options_hi": ["मध्य प्रदेश", "राजस्थान", "उत्तर प्रदेश", "गुजरात"],
        "answer_en": "Madhya Pradesh",
        "answer_hi": "मध्य प्रदेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the value of (8 × 9) ÷ (4 + 2)?",
        "question_hi": "(8 × 9) ÷ (4 + 2) का मान क्या है?",
        "options_en": ["12", "18", "24", "36"],
        "options_hi": ["12", "18", "24", "36"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which gas is used in weather balloons?",
        "question_hi": "मौसम गुब्बारों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
        "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "हीलियम", "नाइट्रोजन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the formula for pressure?",
        "question_hi": "दाब का सूत्र क्या है?",
        "options_en": ["F/A", "Fd", "ma", "mv"],
        "options_hi": ["F/A", "Fd", "ma", "mv"],
        "answer_en": "F/A",
        "answer_hi": "F/A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which vitamin deficiency causes Beri-Beri?",
        "question_hi": "किस विटामिन की कमी से बेरी-बेरी रोग होता है?",
        "options_en": ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12"],
        "options_hi": ["विटामिन B1", "विटामिन B2", "विटामिन B6", "विटामिन B12"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन B1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the antonym of 'Ancient'?",
        "question_hi": "'Ancient' का विलोम शब्द क्या है?",
        "options_en": ["Old", "Modern", "Historic", "Traditional"],
        "options_hi": ["पुराना", "आधुनिक", "ऐतिहासिक", "पारंपरिक"],
        "answer_en": "Modern",
        "answer_hi": "आधुनिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
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
        "num": 75,
        "question_en": "What is the value of √121?",
        "question_hi": "√121 का मान क्या है?",
        "options_en": ["10", "11", "12", "13"],
        "options_hi": ["10", "11", "12", "13"],
        "answer_en": "11",
        "answer_hi": "11",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which element has the chemical symbol 'Hg'?",
        "question_hi": "किस तत्व का रासायनिक प्रतीक 'Hg' है?",
        "options_en": ["Mercury", "Hydrogen", "Helium", "Germanium"],
        "options_hi": ["पारा", "हाइड्रोजन", "हीलियम", "जर्मेनियम"],
        "answer_en": "Mercury",
        "answer_hi": "पारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the SI unit of magnetic flux?",
        "question_hi": "चुंबकीय फ्लक्स की SI इकाई क्या है?",
        "options_en": ["Tesla", "Weber", "Henry", "Gauss"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
        "answer_en": "Weber",
        "answer_hi": "वेबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which gland produces adrenaline?",
        "question_hi": "कौन सी ग्रंथि एड्रेनालाईन उत्पन्न करती है?",
        "options_en": ["Thyroid", "Adrenal", "Pituitary", "Pancreas"],
        "options_hi": ["थायरॉइड", "एड्रेनल", "पिट्यूटरी", "अग्न्याशय"],
        "answer_en": "Adrenal",
        "answer_hi": "एड्रेनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the meaning of 'समृद्ध'?",
        "question_hi": "'समृद्ध' का अर्थ क्या है?",
        "options_en": ["Poor", "Rich", "Happy", "Sad"],
        "options_hi": ["गरीब", "समृद्ध", "खुश", "दुखी"],
        "answer_en": "Rich",
        "answer_hi": "समृद्ध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Who discovered the sea route to India?",
        "question_hi": "भारत के समुद्री मार्ग की खोज किसने की?",
        "options_en": ["Christopher Columbus", "Vasco da Gama", "Marco Polo", "Ferdinand Magellan"],
        "options_hi": ["क्रिस्टोफर कोलंबस", "वास्को डी गामा", "मार्को पोलो", "फर्डिनेंड मैगलन"],
        "answer_en": "Vasco da Gama",
        "answer_hi": "वास्को डी गामा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the circumference of a circle with diameter 14 cm?",
        "question_hi": "14 सेमी व्यास वाले वृत्त की परिधि क्या है?",
        "options_en": ["22 cm", "44 cm", "66 cm", "88 cm"],
        "options_hi": ["22 सेमी", "44 सेमी", "66 सेमी", "88 सेमी"],
        "answer_en": "44 cm",
        "answer_hi": "44 सेमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which gas is used in making ammonia?",
        "question_hi": "अमोनिया बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Nitrogen", "Hydrogen", "Both B and C"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन", "B और C दोनों"],
        "answer_en": "Both B and C",
        "answer_hi": "B और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the focal length of a convex lens with power +2D?",
        "question_hi": "+2D क्षमता वाले उत्तल लेंस की फोकस दूरी क्या है?",
        "options_en": ["0.5 m", "1 m", "2 m", "4 m"],
        "options_hi": ["0.5 मी", "1 मी", "2 मी", "4 मी"],
        "answer_en": "0.5 m",
        "answer_hi": "0.5 मी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which cell organelle contains DNA?",
        "question_hi": "किस कोशिका अंग में DNA पाया जाता है?",
        "options_en": ["Mitochondria", "Nucleus", "Both A and B", "Ribosome"],
        "options_hi": ["माइटोकॉन्ड्रिया", "केंद्रक", "A और B दोनों", "राइबोसोम"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the passive voice of 'He writes a letter'?",
        "question_hi": "'He writes a letter' का passive voice क्या है?",
        "options_en": ["A letter is written by him", "A letter was written by him", "He is writing a letter", "A letter writes him"],
        "options_hi": ["ए लेटर इज रिटन बाय हिम", "ए लेटर वाज रिटन बाय हिम", "ही इज राइटिंग ए लेटर", "ए लेटर राइट्स हिम"],
        "answer_en": "A letter is written by him",
        "answer_hi": "ए लेटर इज रिटन बाय हिम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Where is the Meenakshi Temple located?",
        "question_hi": "मीनाक्षी मंदिर कहाँ स्थित है?",
        "options_en": ["Madurai", "Chennai", "Bangalore", "Hyderabad"],
        "options_hi": ["मदुरै", "चेन्नई", "बैंगलोर", "हैदराबाद"],
        "answer_en": "Madurai",
        "answer_hi": "मदुरै",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the value of 7! ÷ 5!?",
        "question_hi": "7! ÷ 5! का मान क्या है?",
        "options_en": ["42", "210", "5040", "2520"],
        "options_hi": ["42", "210", "5040", "2520"],
        "answer_en": "42",
        "answer_hi": "42",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which acid is present in tamarind?",
        "question_hi": "इमली में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Tartaric acid", "Citric acid", "Malic acid", "Oxalic acid"],
        "options_hi": ["टार्टरिक अम्ल", "सिट्रिक अम्ल", "मैलिक अम्ल", "ऑक्सैलिक अम्ल"],
        "answer_en": "Tartaric acid",
        "answer_hi": "टार्टरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is Hooke's law?",
        "question_hi": "हुक का नियम क्या है?",
        "options_en": ["F = ma", "F = kx", "P = F/A", "V = IR"],
        "options_hi": ["F = ma", "F = kx", "P = F/A", "V = IR"],
        "answer_en": "F = kx",
        "answer_hi": "F = kx",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which blood cells produce antibodies?",
        "question_hi": "कौन सी रक्त कोशिकाएं एंटीबॉडी उत्पन्न करती हैं?",
        "options_en": ["Red blood cells", "White blood cells", "Platelets", "Plasma cells"],
        "options_hi": ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा कोशिकाएं"],
        "answer_en": "Plasma cells",
        "answer_hi": "प्लाज्मा कोशिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the past perfect tense of 'eat'?",
        "question_hi": "'eat' का past perfect tense क्या है?",
        "options_en": ["ate", "eaten", "had eaten", "will have eaten"],
        "options_hi": ["एट", "ईटेन", "हैड ईटेन", "विल हैव ईटेन"],
        "answer_en": "had eaten",
        "answer_hi": "हैड ईटेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Who was the first Indian woman President?",
        "question_hi": "भारत की पहली महिला राष्ट्रपति कौन थीं?",
        "options_en": ["Indira Gandhi", "Pratibha Patil", "Sarojini Naidu", "Sonia Gandhi"],
        "options_hi": ["इंदिरा गांधी", "प्रतिभा पाटिल", "सरोजिनी नायडू", "सोनिया गांधी"],
        "answer_en": "Pratibha Patil",
        "answer_hi": "प्रतिभा पाटिल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the value of 15² - 10²?",
        "question_hi": "15² - 10² का मान क्या है?",
        "options_en": ["25", "125", "225", "325"],
        "options_hi": ["25", "125", "225", "325"],
        "answer_en": "125",
        "answer_hi": "125",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which metal is used in making electric fuses?",
        "question_hi": "विद्युत फ्यूज बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Copper", "Aluminum", "Lead-tin alloy", "Silver"],
        "options_hi": ["तांबा", "एल्युमिनियम", "सीसा-टिन मिश्र धातु", "चांदी"],
        "answer_en": "Lead-tin alloy",
        "answer_hi": "सीसा-टिन मिश्र धातु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the unit of radioactivity?",
        "question_hi": "रेडियोधर्मिता की इकाई क्या है?",
        "options_en": ["Becquerel", "Curie", "Both A and B", "Roentgen"],
        "options_hi": ["बेकरेल", "क्यूरी", "A और B दोनों", "रेंटजन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which part of plant conducts water?",
        "question_hi": "पौधे का कौन सा भाग पानी का संवहन करता है?",
        "options_en": ["Xylem", "Phloem", "Root", "Leaf"],
        "options_hi": ["जाइलम", "फ्लोएम", "जड़", "पत्ती"],
        "answer_en": "Xylem",
        "answer_hi": "जाइलम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the synonym of 'Diligent'?",
        "question_hi": "'Diligent' का समानार्थी शब्द क्या है?",
        "options_en": ["Lazy", "Hardworking", "Careless", "Slow"],
        "options_hi": ["आलसी", "मेहनती", "लापरवाह", "धीमा"],
        "answer_en": "Hardworking",
        "answer_hi": "मेहनती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Where is the Brihadeeswarar Temple located?",
        "question_hi": "बृहदीश्वर मंदिर कहाँ स्थित है?",
        "options_en": ["Tamil Nadu", "Karnataka", "Andhra Pradesh", "Kerala"],
        "options_hi": ["तमिलनाडु", "कर्नाटक", "आंध्र प्रदेश", "केरल"],
        "answer_en": "Tamil Nadu",
        "answer_hi": "तमिलनाडु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the value of 2⁶?",
        "question_hi": "2⁶ का मान क्या है?",
        "options_en": ["32", "64", "128", "256"],
        "options_hi": ["32", "64", "128", "256"],
        "answer_en": "64",
        "answer_hi": "64",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which gas is used in making polystyrene?",
        "question_hi": "पॉलीस्टाइरीन बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हीलियम"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
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