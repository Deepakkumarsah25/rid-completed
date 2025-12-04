const questions = [
    {
        "num": 1,
        "question_en": "What is the process of cell division that results in two identical daughter cells?",
        "question_hi": "कोशिका विभाजन की वह प्रक्रिया क्या है जिससे दो समान संतति कोशिकाएं बनती हैं?",
        "options_en": ["Mitosis", "Meiosis", "Binary fission", "Budding"],
        "options_hi": ["समसूत्री विभाजन", "अर्धसूत्री विभाजन", "द्विखंडन", "मुकुलन"],
        "answer_en": "Mitosis",
        "answer_hi": "समसूत्री विभाजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
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
        "num": 3,
        "question_en": "Who proposed the Theory of Relativity?",
        "question_hi": "सापेक्षता के सिद्धांत को किसने प्रस्तावित किया?",
        "options_en": ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Stephen Hawking"],
        "options_hi": ["आइजैक न्यूटन", "अल्बर्ट आइंस्टीन", "नील्स बोहर", "स्टीफन हॉकिंग"],
        "answer_en": "Albert Einstein",
        "answer_hi": "अल्बर्ट आइंस्टीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the derivative of sin(x) with respect to x?",
        "question_hi": "sin(x) का x के सापेक्ष अवकलज क्या है?",
        "options_en": ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
        "options_hi": ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
        "answer_en": "cos(x)",
        "answer_hi": "cos(x)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which of these is a poetic device used in Hindi literature?",
        "question_hi": "हिंदी साहित्य में प्रयुक्त होने वाला यह कौन सा काव्य शिल्प है?",
        "options_en": ["Metaphor", "Simile", "Yamak", "Alliteration"],
        "options_hi": ["रूपक", "उपमा", "यमक", "अनुप्रास"],
        "answer_en": "Yamak",
        "answer_hi": "यमक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the SI unit of electric potential?",
        "question_hi": "विद्युत विभव की SI इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Volt",
        "answer_hi": "वोल्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which gas is produced during anaerobic respiration in muscles?",
        "question_hi": "मांसपेशियों में अवायवीय श्वसन के दौरान कौन सी गैस उत्पन्न होती है?",
        "options_en": ["Lactic acid", "Ethanol", "Carbon dioxide", "Oxygen"],
        "options_hi": ["लैक्टिक अम्ल", "एथनॉल", "कार्बन डाइऑक्साइड", "ऑक्सीजन"],
        "answer_en": "Lactic acid",
        "answer_hi": "लैक्टिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the IUPAC name of CH₃COOH?",
        "question_hi": "CH₃COOH का IUPAC नाम क्या है?",
        "options_en": ["Acetic acid", "Ethanoic acid", "Methanoic acid", "Propanoic acid"],
        "options_hi": ["एसिटिक अम्ल", "एथेनोइक अम्ल", "मेथेनोइक अम्ल", "प्रोपेनोइक अम्ल"],
        "answer_en": "Ethanoic acid",
        "answer_hi": "एथेनोइक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Who wrote the novel 'War and Peace'?",
        "question_hi": "'वॉर एंड पीस' उपन्यास किसने लिखा?",
        "options_en": ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Victor Hugo"],
        "options_hi": ["फ्योडोर दोस्तोवस्की", "लियो टॉल्स्टॉय", "एंटोन चेखव", "विक्टर ह्यूगो"],
        "answer_en": "Leo Tolstoy",
        "answer_hi": "लियो टॉल्स्टॉय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the value of ∫(2x dx) from 0 to 2?",
        "question_hi": "0 से 2 तक ∫(2x dx) का मान क्या है?",
        "options_en": ["2", "4", "6", "8"],
        "options_hi": ["2", "4", "6", "8"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which part of the human brain is responsible for balance and coordination?",
        "question_hi": "मानव मस्तिष्क का कौन सा भाग संतुलन और समन्वय के लिए जिम्मेदार है?",
        "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
        "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला", "हाइपोथैलेमस"],
        "answer_en": "Cerebellum",
        "answer_hi": "सेरेबेलम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the coordination number in a face-centered cubic structure?",
        "question_hi": "फलक-केंद्रित घनीय संरचना में उपसहसंयोजन संख्या क्या है?",
        "options_en": ["6", "8", "12", "4"],
        "options_hi": ["6", "8", "12", "4"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which electromagnetic wave has the shortest wavelength?",
        "question_hi": "किस विद्युत चुम्बकीय तरंग की तरंगदैर्ध्य सबसे कम होती है?",
        "options_en": ["Radio waves", "Microwaves", "X-rays", "Gamma rays"],
        "options_hi": ["रेडियो तरंगें", "माइक्रोवेव", "एक्स-रे", "गामा किरणें"],
        "answer_en": "Gamma rays",
        "answer_hi": "गामा किरणें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the value of lim(x→0) sin(x)/x?",
        "question_hi": "lim(x→0) sin(x)/x का मान क्या है?",
        "options_en": ["0", "1", "∞", "Undefined"],
        "options_hi": ["0", "1", "∞", "अपरिभाषित"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Who is known as the 'Father of Hindi Poetry'?",
        "question_hi": "'हिंदी कविता के जनक' के रूप में किसे जाना जाता है?",
        "options_en": ["Tulsidas", "Kabir", "Bhartrihari", "Chand Bardai"],
        "options_hi": ["तुलसीदास", "कबीर", "भर्तृहरि", "चंद बरदाई"],
        "answer_en": "Chand Bardai",
        "answer_hi": "चंद बरदाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the process of converting ammonia to nitrates called?",
        "question_hi": "अमोनिया को नाइट्रेट में परिवर्तित करने की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
        "options_hi": ["नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण"],
        "answer_en": "Nitrification",
        "answer_hi": "नाइट्रीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which of the following is a strong electrolyte?",
        "question_hi": "निम्नलिखित में से कौन सा प्रबल विद्युत अपघट्य है?",
        "options_en": ["Acetic acid", "Ammonia", "Sodium chloride", "Carbonic acid"],
        "options_hi": ["एसिटिक अम्ल", "अमोनिया", "सोडियम क्लोराइड", "कार्बोनिक अम्ल"],
        "answer_en": "Sodium chloride",
        "answer_hi": "सोडियम क्लोराइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the principle behind the working of a transformer?",
        "question_hi": "ट्रांसफॉर्मर के कार्य करने का सिद्धांत क्या है?",
        "options_en": ["Ohm's law", "Faraday's law", "Coulomb's law", "Ampere's law"],
        "options_hi": ["ओम का नियम", "फैराडे का नियम", "कूलॉम का नियम", "एम्पियर का नियम"],
        "answer_en": "Faraday's law",
        "answer_hi": "फैराडे का नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the probability of getting a prime number when a die is thrown?",
        "question_hi": "पासा फेंकने पर अभाज्य संख्या आने की प्रायिकता क्या है?",
        "options_en": ["1/2", "1/3", "1/4", "2/3"],
        "options_hi": ["1/2", "1/3", "1/4", "2/3"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Who wrote the play 'Andha Yug'?",
        "question_hi": "'अंधा युग' नाटक किसने लिखा?",
        "options_en": ["Mohan Rakesh", "Dharamvir Bharati", "Bhisham Sahni", "Vijay Tendulkar"],
        "options_hi": ["मोहन राकेश", "धर्मवीर भारती", "भीष्म साहनी", "विजय तेंदुलकर"],
        "answer_en": "Dharamvir Bharati",
        "answer_hi": "धर्मवीर भारती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which hormone regulates blood calcium levels?",
        "question_hi": "कौन सा हार्मोन रक्त कैल्शियम स्तर को नियंत्रित करता है?",
        "options_en": ["Insulin", "Thyroxine", "Parathyroid hormone", "Adrenaline"],
        "options_hi": ["इंसुलिन", "थायरॉक्सिन", "पैराथाइरॉइड हार्मोन", "एड्रेनालिन"],
        "answer_en": "Parathyroid hormone",
        "answer_hi": "पैराथाइरॉइड हार्मोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the hybridization of carbon in ethyne?",
        "question_hi": "एथाइन में कार्बन का संकरण क्या है?",
        "options_en": ["sp", "sp²", "sp³", "sp³d"],
        "options_hi": ["sp", "sp²", "sp³", "sp³d"],
        "answer_en": "sp",
        "answer_hi": "sp",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the dimensional formula of power?",
        "question_hi": "शक्ति का विमीय सूत्र क्या है?",
        "options_en": ["[ML²T⁻³]", "[MLT⁻²]", "[ML²T⁻²]", "[MLT⁻¹]"],
        "options_hi": ["[ML²T⁻³]", "[MLT⁻²]", "[ML²T⁻²]", "[MLT⁻¹]"],
        "answer_en": "[ML²T⁻³]",
        "answer_hi": "[ML²T⁻³]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the value of i³ (where i is iota)?",
        "question_hi": "i³ का मान क्या है (जहाँ i आयोटा है)?",
        "options_en": ["1", "-1", "i", "-i"],
        "options_hi": ["1", "-1", "i", "-i"],
        "answer_en": "-i",
        "answer_hi": "-i",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which literary work is written by Jaishankar Prasad?",
        "question_hi": "जयशंकर प्रसाद द्वारा रचित साहित्यिक कृति कौन सी है?",
        "options_en": ["Godan", "Kamayani", "Gaban", "Nirmala"],
        "options_hi": ["गोदान", "कामायनी", "गबन", "निर्मला"],
        "answer_en": "Kamayani",
        "answer_hi": "कामायनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the site of photosynthesis in plant cells?",
        "question_hi": "पादप कोशिकाओं में प्रकाश संश्लेषण का स्थल क्या है?",
        "options_en": ["Mitochondria", "Chloroplast", "Ribosome", "Nucleus"],
        "options_hi": ["माइटोकॉन्ड्रिया", "हरितलवक", "राइबोसोम", "केंद्रक"],
        "answer_en": "Chloroplast",
        "answer_hi": "हरितलवक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which of the following is a Lewis acid?",
        "question_hi": "निम्नलिखित में से कौन सा लुईस अम्ल है?",
        "options_en": ["NH₃", "H₂O", "BF₃", "CH₄"],
        "options_hi": ["NH₃", "H₂O", "BF₃", "CH₄"],
        "answer_en": "BF₃",
        "answer_hi": "BF₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the unit of magnetic flux?",
        "question_hi": "चुंबकीय फ्लक्स की इकाई क्या है?",
        "options_en": ["Tesla", "Weber", "Henry", "Gauss"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
        "answer_en": "Weber",
        "answer_hi": "वेबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the solution of the differential equation dy/dx = y?",
        "question_hi": "अवकल समीकरण dy/dx = y का हल क्या है?",
        "options_en": ["y = e^x", "y = e^x + C", "y = Ce^x", "y = ln x"],
        "options_hi": ["y = e^x", "y = e^x + C", "y = Ce^x", "y = ln x"],
        "answer_en": "y = Ce^x",
        "answer_hi": "y = Ce^x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Who wrote 'Rashmirathi'?",
        "question_hi": "'रश्मिरथी' किसने लिखी?",
        "options_en": ["Ramdhari Singh Dinkar", "Harivansh Rai Bachchan", "Suryakant Tripathi", "Mahadevi Verma"],
        "options_hi": ["रामधारी सिंह दिनकर", "हरिवंश राय बच्चन", "सूर्यकांत त्रिपाठी", "महादेवी वर्मा"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the function of the enzyme pepsin?",
        "question_hi": "एंजाइम पेप्सिन का कार्य क्या है?",
        "options_en": ["Breakdown of proteins", "Breakdown of fats", "Breakdown of carbohydrates", "Breakdown of nucleic acids"],
        "options_hi": ["प्रोटीन का विघटन", "वसा का विघटन", "कार्बोहाइड्रेट का विघटन", "न्यूक्लिक अम्ल का विघटन"],
        "answer_en": "Breakdown of proteins",
        "answer_hi": "प्रोटीन का विघटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the oxidation state of chromium in K₂Cr₂O₇?",
        "question_hi": "K₂Cr₂O₇ में क्रोमियम की ऑक्सीकरण अवस्था क्या है?",
        "options_en": ["+3", "+5", "+6", "+7"],
        "options_hi": ["+3", "+5", "+6", "+7"],
        "answer_en": "+6",
        "answer_hi": "+6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the principle of conservation of energy?",
        "question_hi": "ऊर्जा संरक्षण का सिद्धांत क्या है?",
        "options_en": ["Energy can be created", "Energy can be destroyed", "Energy remains constant", "Energy decreases with time"],
        "options_hi": ["ऊर्जा बनाई जा सकती है", "ऊर्जा नष्ट की जा सकती है", "ऊर्जा स्थिर रहती है", "ऊर्जा समय के साथ घटती है"],
        "answer_en": "Energy remains constant",
        "answer_hi": "ऊर्जा स्थिर रहती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the value of tan(π/4)?",
        "question_hi": "tan(π/4) का मान क्या है?",
        "options_en": ["0", "1", "√3", "1/√3"],
        "options_hi": ["0", "1", "√3", "1/√3"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Who is the author of 'Gunahon Ka Devta'?",
        "question_hi": "'गुनाहों का देवता' के लेखक कौन हैं?",
        "options_en": ["Dharamvir Bharati", "Mohan Rakesh", "Bhisham Sahni", "Agyeya"],
        "options_hi": ["धर्मवीर भारती", "मोहन राकेश", "भीष्म साहनी", "अज्ञेय"],
        "answer_en": "Dharamvir Bharati",
        "answer_hi": "धर्मवीर भारती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the genetic material in HIV?",
        "question_hi": "HIV में आनुवंशिक पदार्थ क्या है?",
        "options_en": ["DNA", "RNA", "Protein", "Lipid"],
        "options_hi": ["DNA", "RNA", "प्रोटीन", "लिपिड"],
        "answer_en": "RNA",
        "answer_hi": "RNA",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the common name of sodium carbonate?",
        "question_hi": "सोडियम कार्बोनेट का सामान्य नाम क्या है?",
        "options_en": ["Baking soda", "Washing soda", "Caustic soda", "Baking powder"],
        "options_hi": ["बेकिंग सोडा", "धोने का सोडा", "कास्टिक सोडा", "बेकिंग पाउडर"],
        "answer_en": "Washing soda",
        "answer_hi": "धोने का सोडा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
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
        "num": 39,
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
        "num": 40,
        "question_en": "Who wrote 'Kitne Pakistan'?",
        "question_hi": "'कितने पाकिस्तान' किसने लिखा?",
        "options_en": ["Kamleshwar", "Rahi Masoom Raza", "Krishna Sobti", "Nirmal Verma"],
        "options_hi": ["कमलेश्वर", "राही मासूम रज़ा", "कृष्णा सोबती", "निर्मल वर्मा"],
        "answer_en": "Kamleshwar",
        "answer_hi": "कमलेश्वर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the function of the ribosomes in a cell?",
        "question_hi": "कोशिका में राइबोसोम का कार्य क्या है?",
        "options_en": ["Protein synthesis", "Lipid synthesis", "DNA replication", "Energy production"],
        "options_hi": ["प्रोटीन संश्लेषण", "लिपिड संश्लेषण", "DNA प्रतिकृति", "ऊर्जा उत्पादन"],
        "answer_en": "Protein synthesis",
        "answer_hi": "प्रोटीन संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the pH of a neutral solution?",
        "question_hi": "उदासीन विलयन का pH क्या होता है?",
        "options_en": ["0", "7", "14", "1"],
        "options_hi": ["0", "7", "14", "1"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the law of conservation of momentum?",
        "question_hi": "संवेग संरक्षण का नियम क्या है?",
        "options_en": ["Momentum can be created", "Momentum can be destroyed", "Total momentum remains constant", "Momentum increases with time"],
        "options_hi": ["संवेग बनाया जा सकता है", "संवेग नष्ट किया जा सकता है", "कुल संवेग स्थिर रहता है", "संवेग समय के साथ बढ़ता है"],
        "answer_en": "Total momentum remains constant",
        "answer_hi": "कुल संवेग स्थिर रहता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the value of sin²θ + cos²θ?",
        "question_hi": "sin²θ + cos²θ का मान क्या है?",
        "options_en": ["0", "1", "2", "sin2θ"],
        "options_hi": ["0", "1", "2", "sin2θ"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
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
        "num": 46,
        "question_en": "What is the process of DNA replication called?",
        "question_hi": "DNA प्रतिकृति की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Transcription", "Translation", "Semi-conservative replication", "Conservative replication"],
        "options_hi": ["ट्रांसक्रिप्शन", "ट्रांसलेशन", "अर्ध-संरक्षी प्रतिकृति", "संरक्षी प्रतिकृति"],
        "answer_en": "Semi-conservative replication",
        "answer_hi": "अर्ध-संरक्षी प्रतिकृति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the formula of benzene?",
        "question_hi": "बेंजीन का सूत्र क्या है?",
        "options_en": ["C₆H₆", "C₆H₁₂", "C₆H₅OH", "C₆H₅COOH"],
        "options_hi": ["C₆H₆", "C₆H₁₂", "C₆H₅OH", "C₆H₅COOH"],
        "answer_en": "C₆H₆",
        "answer_hi": "C₆H₆",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
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
        "num": 49,
        "question_en": "What is the value of d/dx(e^x)?",
        "question_hi": "d/dx(e^x) का मान क्या है?",
        "options_en": ["e^x", "xe^x", "e^x/x", "ln x"],
        "options_hi": ["e^x", "xe^x", "e^x/x", "ln x"],
        "answer_en": "e^x",
        "answer_hi": "e^x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Who wrote 'Raag Darbari'?",
        "question_hi": "'राग दरबारी' किसने लिखा?",
        "options_en": ["Shrilal Shukla", "Rahi Masoom Raza", "Kamleshwar", "Nirmal Verma"],
        "options_hi": ["श्रीलाल शुक्ल", "राही मासूम रज़ा", "कमलेश्वर", "निर्मल वर्मा"],
        "answer_en": "Shrilal Shukla",
        "answer_hi": "श्रीलाल शुक्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the function of mitochondria?",
        "question_hi": "माइटोकॉन्ड्रिया का कार्य क्या है?",
        "options_en": ["Protein synthesis", "Energy production", "Lipid synthesis", "Waste elimination"],
        "options_hi": ["प्रोटीन संश्लेषण", "ऊर्जा उत्पादन", "लिपिड संश्लेषण", "अपशिष्ट निष्कासन"],
        "answer_en": "Energy production",
        "answer_hi": "ऊर्जा उत्पादन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the atomic number of carbon?",
        "question_hi": "कार्बन की परमाणु संख्या क्या है?",
        "options_en": ["6", "12", "14", "8"],
        "options_hi": ["6", "12", "14", "8"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is Newton's first law of motion?",
        "question_hi": "न्यूटन की गति का पहला नियम क्या है?",
        "options_en": ["F = ma", "Action and reaction", "Inertia", "Conservation of energy"],
        "options_hi": ["F = ma", "क्रिया और प्रतिक्रिया", "जड़त्व", "ऊर्जा संरक्षण"],
        "answer_en": "Inertia",
        "answer_hi": "जड़त्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the value of ∫dx?",
        "question_hi": "∫dx का मान क्या है?",
        "options_en": ["x", "x + C", "1", "0"],
        "options_hi": ["x", "x + C", "1", "0"],
        "answer_en": "x + C",
        "answer_hi": "x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Who wrote 'Tamas'?",
        "question_hi": "'तमस' किसने लिखा?",
        "options_en": ["Bhisham Sahni", "Mohan Rakesh", "Dharamvir Bharati", "Kamleshwar"],
        "options_hi": ["भीष्म साहनी", "मोहन राकेश", "धर्मवीर भारती", "कमलेश्वर"],
        "answer_en": "Bhisham Sahni",
        "answer_hi": "भीष्म साहनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the site of cellular respiration?",
        "question_hi": "कोशिकीय श्वसन का स्थल क्या है?",
        "options_en": ["Mitochondria", "Chloroplast", "Ribosome", "Nucleus"],
        "options_hi": ["माइटोकॉन्ड्रिया", "हरितलवक", "राइबोसोम", "केंद्रक"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the formula of sulfuric acid?",
        "question_hi": "सल्फ्यूरिक अम्ल का सूत्र क्या है?",
        "options_en": ["H₂SO₄", "HCl", "HNO₃", "H₃PO₄"],
        "options_hi": ["H₂SO₄", "HCl", "HNO₃", "H₃PO₄"],
        "answer_en": "H₂SO₄",
        "answer_hi": "H₂SO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the unit of electric current?",
        "question_hi": "विद्युत धारा की इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the value of cos(π/2)?",
        "question_hi": "cos(π/2) का मान क्या है?",
        "options_en": ["0", "1", "-1", "1/2"],
        "options_hi": ["0", "1", "-1", "1/2"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Who wrote 'Ashadh Ka Ek Din'?",
        "question_hi": "'आषाढ़ का एक दिन' किसने लिखा?",
        "options_en": ["Mohan Rakesh", "Dharamvir Bharati", "Bhisham Sahni", "Vijay Tendulkar"],
        "options_hi": ["मोहन राकेश", "धर्मवीर भारती", "भीष्म साहनी", "विजय तेंदुलकर"],
        "answer_en": "Mohan Rakesh",
        "answer_hi": "मोहन राकेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the function of the nucleus in a cell?",
        "question_hi": "कोशिका में केंद्रक का कार्य क्या है?",
        "options_en": ["Energy production", "Protein synthesis", "Genetic control", "Waste elimination"],
        "options_hi": ["ऊर्जा उत्पादन", "प्रोटीन संश्लेषण", "आनुवंशिक नियंत्रण", "अपशिष्ट निष्कासन"],
        "answer_en": "Genetic control",
        "answer_hi": "आनुवंशिक नियंत्रण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the pH of pure water?",
        "question_hi": "शुद्ध जल का pH क्या होता है?",
        "options_en": ["0", "7", "14", "1"],
        "options_hi": ["0", "7", "14", "1"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the law of gravitation?",
        "question_hi": "गुरुत्वाकर्षण का नियम क्या है?",
        "options_en": ["F = G(m₁m₂/r²)", "F = ma", "E = mc²", "PV = nRT"],
        "options_hi": ["F = G(m₁m₂/r²)", "F = ma", "E = mc²", "PV = nRT"],
        "answer_en": "F = G(m₁m₂/r²)",
        "answer_hi": "F = G(m₁m₂/r²)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the value of sin(π)?",
        "question_hi": "sin(π) का मान क्या है?",
        "options_en": ["0", "1", "-1", "1/2"],
        "options_hi": ["0", "1", "-1", "1/2"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Who wrote 'Kafan'?",
        "question_hi": "'कफन' किसने लिखा?",
        "options_en": ["Premchand", "Jaishankar Prasad", "Mahadevi Verma", "Suryakant Tripathi"],
        "options_hi": ["प्रेमचंद", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the process of water movement in plants called?",
        "question_hi": "पौधों में जल के संचलन की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Transpiration", "Photosynthesis", "Respiration", "Osmosis"],
        "options_hi": ["वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "श्वसन", "परासरण"],
        "answer_en": "Transpiration",
        "answer_hi": "वाष्पोत्सर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the formula of methane?",
        "question_hi": "मीथेन का सूत्र क्या है?",
        "options_en": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "answer_en": "CH₄",
        "answer_hi": "CH₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the unit of force?",
        "question_hi": "बल की इकाई क्या है?",
        "options_en": ["Newton", "Joule", "Watt", "Pascal"],
        "options_hi": ["न्यूटन", "जूल", "वाट", "पास्कल"],
        "answer_en": "Newton",
        "answer_hi": "न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the value of tan(π)?",
        "question_hi": "tan(π) का मान क्या है?",
        "options_en": ["0", "1", "-1", "∞"],
        "options_hi": ["0", "1", "-1", "∞"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
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
        "num": 71,
        "question_en": "What is the function of chlorophyll in plants?",
        "question_hi": "पौधों में क्लोरोफिल का कार्य क्या है?",
        "options_en": ["Water absorption", "Photosynthesis", "Respiration", "Protein synthesis"],
        "options_hi": ["जल अवशोषण", "प्रकाश संश्लेषण", "श्वसन", "प्रोटीन संश्लेषण"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the atomic mass of oxygen?",
        "question_hi": "ऑक्सीजन का परमाणु द्रव्यमान क्या है?",
        "options_en": ["16", "32", "8", "64"],
        "options_hi": ["16", "32", "8", "64"],
        "answer_en": "16",
        "answer_hi": "16",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
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
        "num": 74,
        "question_en": "What is the value of log₁₀1000?",
        "question_hi": "log₁₀1000 का मान क्या है?",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Who wrote 'Saket'?",
        "question_hi": "'साकेत' किसने लिखा?",
        "options_en": ["Maithili Sharan Gupt", "Jaishankar Prasad", "Mahadevi Verma", "Suryakant Tripathi"],
        "options_hi": ["मैथिलीशरण गुप्त", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "answer_en": "Maithili Sharan Gupt",
        "answer_hi": "मैथिलीशरण गुप्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the process of cell division in reproductive cells?",
        "question_hi": "प्रजनन कोशिकाओं में कोशिका विभाजन की प्रक्रिया क्या है?",
        "options_en": ["Mitosis", "Meiosis", "Binary fission", "Budding"],
        "options_hi": ["समसूत्री विभाजन", "अर्धसूत्री विभाजन", "द्विखंडन", "मुकुलन"],
        "answer_en": "Meiosis",
        "answer_hi": "अर्धसूत्री विभाजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the formula of carbon dioxide?",
        "question_hi": "कार्बन डाइऑक्साइड का सूत्र क्या है?",
        "options_en": ["CO", "CO₂", "C₂O", "C₃O₂"],
        "options_hi": ["CO", "CO₂", "C₂O", "C₃O₂"],
        "answer_en": "CO₂",
        "answer_hi": "CO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the unit of energy?",
        "question_hi": "ऊर्जा की इकाई क्या है?",
        "options_en": ["Joule", "Newton", "Watt", "Pascal"],
        "options_hi": ["जूल", "न्यूटन", "वाट", "पास्कल"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the value of cos(0)?",
        "question_hi": "cos(0) का मान क्या है?",
        "options_en": ["0", "1", "-1", "1/2"],
        "options_hi": ["0", "1", "-1", "1/2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
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
        "num": 81,
        "question_en": "What is the function of the cell membrane?",
        "question_hi": "कोशिका झिल्ली का कार्य क्या है?",
        "options_en": ["Protein synthesis", "Selective permeability", "Energy production", "DNA replication"],
        "options_hi": ["प्रोटीन संश्लेषण", "वरणात्मक पारगम्यता", "ऊर्जा उत्पादन", "DNA प्रतिकृति"],
        "answer_en": "Selective permeability",
        "answer_hi": "वरणात्मक पारगम्यता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the formula of water?",
        "question_hi": "जल का सूत्र क्या है?",
        "options_en": ["H₂O", "H₂O₂", "HO", "H₃O"],
        "options_hi": ["H₂O", "H₂O₂", "HO", "H₃O"],
        "answer_en": "H₂O",
        "answer_hi": "H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the unit of power?",
        "question_hi": "शक्ति की इकाई क्या है?",
        "options_en": ["Watt", "Joule", "Newton", "Pascal"],
        "options_hi": ["वाट", "जूल", "न्यूटन", "पास्कल"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the value of sin(π/2)?",
        "question_hi": "sin(π/2) का मान क्या है?",
        "options_en": ["0", "1", "-1", "1/2"],
        "options_hi": ["0", "1", "-1", "1/2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
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
        "num": 86,
        "question_en": "What is the process of protein synthesis called?",
        "question_hi": "प्रोटीन संश्लेषण की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Transcription", "Translation", "Replication", "Transformation"],
        "options_hi": ["ट्रांसक्रिप्शन", "ट्रांसलेशन", "प्रतिकृति", "रूपांतरण"],
        "answer_en": "Translation",
        "answer_hi": "ट्रांसलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the formula of ammonia?",
        "question_hi": "अमोनिया का सूत्र क्या है?",
        "options_en": ["NH₃", "NH₄", "N₂H₄", "NH₂"],
        "options_hi": ["NH₃", "NH₄", "N₂H₄", "NH₂"],
        "answer_en": "NH₃",
        "answer_hi": "NH₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
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
        "num": 89,
        "question_en": "What is the value of e⁰?",
        "question_hi": "e⁰ का मान क्या है?",
        "options_en": ["0", "1", "e", "∞"],
        "options_hi": ["0", "1", "e", "∞"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
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
        "num": 91,
        "question_en": "What is the function of the endoplasmic reticulum?",
        "question_hi": "अंतर्द्रव्यी जालिका का कार्य क्या है?",
        "options_en": ["Protein synthesis and transport", "Energy production", "DNA replication", "Waste elimination"],
        "options_hi": ["प्रोटीन संश्लेषण और परिवहन", "ऊर्जा उत्पादन", "DNA प्रतिकृति", "अपशिष्ट निष्कासन"],
        "answer_en": "Protein synthesis and transport",
        "answer_hi": "प्रोटीन संश्लेषण और परिवहन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the atomic number of hydrogen?",
        "question_hi": "हाइड्रोजन की परमाणु संख्या क्या है?",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is Newton's third law of motion?",
        "question_hi": "न्यूटन की गति का तीसरा नियम क्या है?",
        "options_en": ["F = ma", "Action and reaction", "Inertia", "Conservation of energy"],
        "options_hi": ["F = ma", "क्रिया और प्रतिक्रिया", "जड़त्व", "ऊर्जा संरक्षण"],
        "answer_en": "Action and reaction",
        "answer_hi": "क्रिया और प्रतिक्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the value of ∫x dx?",
        "question_hi": "∫x dx का मान क्या है?",
        "options_en": ["x²", "x²/2", "x²/2 + C", "2x"],
        "options_hi": ["x²", "x²/2", "x²/2 + C", "2x"],
        "answer_en": "x²/2 + C",
        "answer_hi": "x²/2 + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Who wrote 'Kamlaya'?",
        "question_hi": "'कमलाया' किसने लिखा?",
        "options_en": ["Suryakant Tripathi", "Mahadevi Verma", "Jaishankar Prasad", "Harivansh Rai Bachchan"],
        "options_hi": ["सूर्यकांत त्रिपाठी", "महादेवी वर्मा", "जयशंकर प्रसाद", "हरिवंश राय बच्चन"],
        "answer_en": "Suryakant Tripathi",
        "answer_hi": "सूर्यकांत त्रिपाठी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the process of DNA to RNA called?",
        "question_hi": "DNA से RNA बनने की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Transcription", "Translation", "Replication", "Transformation"],
        "options_hi": ["ट्रांसक्रिप्शन", "ट्रांसलेशन", "प्रतिकृति", "रूपांतरण"],
        "answer_en": "Transcription",
        "answer_hi": "ट्रांसक्रिप्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the formula of sodium chloride?",
        "question_hi": "सोडियम क्लोराइड का सूत्र क्या है?",
        "options_en": ["NaCl", "Na₂Cl", "NaCl₂", "Na₂Cl₂"],
        "options_hi": ["NaCl", "Na₂Cl", "NaCl₂", "Na₂Cl₂"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the unit of pressure?",
        "question_hi": "दबाव की इकाई क्या है?",
        "options_en": ["Pascal", "Newton", "Joule", "Watt"],
        "options_hi": ["पास्कल", "न्यूटन", "जूल", "वाट"],
        "answer_en": "Pascal",
        "answer_hi": "पास्कल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the value of sec(0)?",
        "question_hi": "sec(0) का मान क्या है?",
        "options_en": ["0", "1", "-1", "∞"],
        "options_hi": ["0", "1", "-1", "∞"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Who wrote 'Chitralekha'?",
        "question_hi": "'चित्रलेखा' किसने लिखा?",
        "options_en": ["Bhagwati Charan Verma", "Premchand", "Jaishankar Prasad", "Mahadevi Verma"],
        "options_hi": ["भगवती चरण वर्मा", "प्रेमचंद", "जयशंकर प्रसाद", "महादेवी वर्मा"],
        "answer_en": "Bhagwati Charan Verma",
        "answer_hi": "भगवती चरण वर्मा",
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