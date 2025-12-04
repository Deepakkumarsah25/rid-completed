const questions = [
    {
        "num": 1,
        "question_en": "Which of the following is NOT a function of the skeletal system?",
        "question_hi": "निम्नलिखित में से कौन कंकाल प्रणाली का कार्य नहीं है?",
        "options_en": ["Blood cell production", "Mineral storage", "Hormone production", "Support and protection"],
        "options_hi": ["रक्त कोशिका उत्पादन", "खनिज भंडारण", "हार्मोन उत्पादन", "सहायता और सुरक्षा"],
        "answer_en": "Hormone production",
        "answer_hi": "हार्मोन उत्पादन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the value of ∫(sin x + cos x) dx?",
        "question_hi": "∫(sin x + cos x) dx का मान क्या है?",
        "options_en": ["-cos x + sin x + C", "cos x + sin x + C", "-cos x - sin x + C", "cos x - sin x + C"],
        "options_hi": ["-cos x + sin x + C", "cos x + sin x + C", "-cos x - sin x + C", "cos x - sin x + C"],
        "answer_en": "-cos x + sin x + C",
        "answer_hi": "-cos x + sin x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which phenomenon explains the photoelectric effect?",
        "question_hi": "कौन सी घटना प्रकाशवैद्युत प्रभाव की व्याख्या करती है?",
        "options_en": ["Wave theory of light", "Particle theory of light", "Quantum theory", "Electromagnetic theory"],
        "options_hi": ["प्रकाश की तरंग सिद्धांत", "प्रकाश का कण सिद्धांत", "क्वांटम सिद्धांत", "विद्युत चुम्बकीय सिद्धांत"],
        "answer_en": "Quantum theory",
        "answer_hi": "क्वांटम सिद्धांत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the IUPAC name of CH₃-CH₂-CHO?",
        "question_hi": "CH₃-CH₂-CHO का IUPAC नाम क्या है?",
        "options_en": ["Propanal", "Ethanal", "Butanal", "Methanal"],
        "options_hi": ["प्रोपेनल", "इथेनल", "ब्यूटेनल", "मेथेनल"],
        "answer_en": "Propanal",
        "answer_hi": "प्रोपेनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Who wrote the novel 'The Great Gatsby'?",
        "question_hi": "'द ग्रेट गैट्सबी' उपन्यास किसने लिखा?",
        "options_en": ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "John Steinbeck"],
        "options_hi": ["एफ. स्कॉट फिट्जेराल्ड", "अर्नेस्ट हेमिंग्वे", "मार्क ट्वेन", "जॉन स्टीनबेक"],
        "answer_en": "F. Scott Fitzgerald",
        "answer_hi": "एफ. स्कॉट फिट्जेराल्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which of the following is the capital of Australia?",
        "question_hi": "निम्नलिखित में से कौन ऑस्ट्रेलिया की राजधानी है?",
        "options_en": ["Sydney", "Melbourne", "Canberra", "Perth"],
        "options_hi": ["सिडनी", "मेलबोर्न", "कैनबरा", "पर्थ"],
        "answer_en": "Canberra",
        "answer_hi": "कैनबरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the function of ribosomes in a cell?",
        "question_hi": "कोशिका में राइबोसोम का कार्य क्या है?",
        "options_en": ["Energy production", "Protein synthesis", "Lipid synthesis", "Cellular respiration"],
        "options_hi": ["ऊर्जा उत्पादन", "प्रोटीन संश्लेषण", "लिपिड संश्लेषण", "कोशिकीय श्वसन"],
        "answer_en": "Protein synthesis",
        "answer_hi": "प्रोटीन संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the value of d²/dx²(sin x)?",
        "question_hi": "d²/dx²(sin x) का मान क्या है?",
        "options_en": ["cos x", "-sin x", "sin x", "-cos x"],
        "options_hi": ["cos x", "-sin x", "sin x", "-cos x"],
        "answer_en": "-sin x",
        "answer_hi": "-sin x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which law states that the pressure exerted by a gas is inversely proportional to its volume?",
        "question_hi": "कौन सा नियम कहता है कि गैस द्वारा डाला गया दबाव उसके आयतन के व्युत्क्रमानुपाती होता है?",
        "options_en": ["Charles' Law", "Boyle's Law", "Gay-Lussac's Law", "Avogadro's Law"],
        "options_hi": ["चार्ल्स का नियम", "बॉयल का नियम", "गे-लुसाक का नियम", "अवोगाद्रो का नियम"],
        "answer_en": "Boyle's Law",
        "answer_hi": "बॉयल का नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Who wrote the epic poem 'Paradise Lost'?",
        "question_hi": "'पैराडाइज लॉस्ट' महाकाव्य किसने लिखा?",
        "options_en": ["John Milton", "William Shakespeare", "Geoffrey Chaucer", "William Wordsworth"],
        "options_hi": ["जॉन मिल्टन", "विलियम शेक्सपियर", "जेफ्री चौसर", "विलियम वर्ड्सवर्थ"],
        "answer_en": "John Milton",
        "answer_hi": "जॉन मिल्टन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which vitamin is essential for the absorption of calcium?",
        "question_hi": "कैल्शियम के अवशोषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the value of ∫(x³ + 2x) dx?",
        "question_hi": "∫(x³ + 2x) dx का मान क्या है?",
        "options_en": ["x⁴/4 + x² + C", "x⁴/4 + 2x² + C", "x⁴/4 + x²/2 + C", "3x² + 2 + C"],
        "options_hi": ["x⁴/4 + x² + C", "x⁴/4 + 2x² + C", "x⁴/4 + x²/2 + C", "3x² + 2 + C"],
        "answer_en": "x⁴/4 + x² + C",
        "answer_hi": "x⁴/4 + x² + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the unit of electric power?",
        "question_hi": "विद्युत शक्ति की इकाई क्या है?",
        "options_en": ["Joule", "Watt", "Volt", "Ampere"],
        "options_hi": ["जूल", "वाट", "वोल्ट", "एम्पियर"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which of the following is a strong acid?",
        "question_hi": "निम्नलिखित में से कौन प्रबल अम्ल है?",
        "options_en": ["Acetic acid", "Carbonic acid", "Hydrochloric acid", "Boric acid"],
        "options_hi": ["एसिटिक अम्ल", "कार्बोनिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "बोरिक अम्ल"],
        "answer_en": "Hydrochloric acid",
        "answer_hi": "हाइड्रोक्लोरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Who is known as the 'Nightingale of India'?",
        "question_hi": "'भारत की कोकिला' के रूप में किसे जाना जाता है?",
        "options_en": ["Sarojini Naidu", "Indira Gandhi", "Mother Teresa", "Lata Mangeshkar"],
        "options_hi": ["सरोजिनी नायडू", "इंदिरा गांधी", "मदर टेरेसा", "लता मंगेशकर"],
        "answer_en": "Sarojini Naidu",
        "answer_hi": "सरोजिनी नायडू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
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
        "num": 17,
        "question_en": "What is the value of lim(x→0) (tan x)/x?",
        "question_hi": "lim(x→0) (tan x)/x का मान क्या है?",
        "options_en": ["0", "1", "∞", "Undefined"],
        "options_hi": ["0", "1", "∞", "अपरिभाषित"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which particle has a positive charge?",
        "question_hi": "किस कण में धनात्मक आवेश होता है?",
        "options_en": ["Electron", "Proton", "Neutron", "Photon"],
        "options_hi": ["इलेक्ट्रॉन", "प्रोटॉन", "न्यूट्रॉन", "फोटॉन"],
        "answer_en": "Proton",
        "answer_hi": "प्रोटॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
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
        "num": 20,
        "question_en": "Who wrote the play 'Romeo and Juliet'?",
        "question_hi": "'रोमियो और जूलियट' नाटक किसने लिखा?",
        "options_en": ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"],
        "options_hi": ["विलियम शेक्सपियर", "क्रिस्टोफर मार्लो", "बेन जॉनसन", "जॉन वेबस्टर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which blood cells are responsible for immune response?",
        "question_hi": "कौन सी रक्त कोशिकाएं प्रतिरक्षा प्रतिक्रिया के लिए जिम्मेदार हैं?",
        "options_en": ["Red blood cells", "White blood cells", "Platelets", "Hemoglobin"],
        "options_hi": ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "हीमोग्लोबिन"],
        "answer_en": "White blood cells",
        "answer_hi": "श्वेत रक्त कोशिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the derivative of cos x?",
        "question_hi": "cos x का अवकलज क्या है?",
        "options_en": ["sin x", "-sin x", "cos x", "-cos x"],
        "options_hi": ["sin x", "-sin x", "cos x", "-cos x"],
        "answer_en": "-sin x",
        "answer_hi": "-sin x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
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
        "num": 24,
        "question_en": "Which of the following is a noble gas?",
        "question_hi": "निम्नलिखित में से कौन एक उत्कृष्ट गैस है?",
        "options_en": ["Oxygen", "Nitrogen", "Helium", "Chlorine"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "क्लोरीन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Who wrote the novel 'War and Peace'?",
        "question_hi": "'वार एंड पीस' उपन्यास किसने लिखा?",
        "options_en": ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Alexander Pushkin"],
        "options_hi": ["लियो टॉल्स्टॉय", "फ्योडोर दोस्तोव्स्की", "एंटन चेखव", "अलेक्जेंडर पुश्किन"],
        "answer_en": "Leo Tolstoy",
        "answer_hi": "लियो टॉल्स्टॉय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which part of the plant is responsible for photosynthesis?",
        "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण के लिए जिम्मेदार है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
        "answer_en": "Leaf",
        "answer_hi": "पत्ती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the value of ∫(1/(x ln x)) dx?",
        "question_hi": "∫(1/(x ln x)) dx का मान क्या है?",
        "options_en": ["ln|ln x| + C", "ln|x| + C", "1/(ln x) + C", "x ln x + C"],
        "options_hi": ["ln|ln x| + C", "ln|x| + C", "1/(ln x) + C", "x ln x + C"],
        "answer_en": "ln|ln x| + C",
        "answer_hi": "ln|ln x| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the speed of light in vacuum?",
        "question_hi": "निर्वात में प्रकाश की गति क्या है?",
        "options_en": ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁵ m/s", "3 × 10¹⁰ m/s"],
        "options_hi": ["3 × 10⁸ मी/से", "3 × 10⁶ मी/से", "3 × 10⁵ मी/से", "3 × 10¹⁰ मी/से"],
        "answer_en": "3 × 10⁸ m/s",
        "answer_hi": "3 × 10⁸ मी/से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
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
        "num": 30,
        "question_en": "Who is the author of 'Meghdoot'?",
        "question_hi": "'मेघदूत' के लेखक कौन हैं?",
        "options_en": ["Kalidasa", "Bhavabhuti", "Bhasa", "Sudraka"],
        "options_hi": ["कालिदास", "भवभूति", "भास", "शूद्रक"],
        "answer_en": "Kalidasa",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which hormone regulates blood sugar levels?",
        "question_hi": "कौन सा हार्मोन रक्त शर्करा के स्तर को नियंत्रित करता है?",
        "options_en": ["Insulin", "Adrenaline", "Thyroxine", "Estrogen"],
        "options_hi": ["इंसुलिन", "एड्रेनालाईन", "थायरोक्सिन", "एस्ट्रोजन"],
        "answer_en": "Insulin",
        "answer_hi": "इंसुलिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the value of ∫(sec x tan x) dx?",
        "question_hi": "∫(sec x tan x) dx का मान क्या है?",
        "options_en": ["sec x + C", "tan x + C", "cosec x + C", "cot x + C"],
        "options_hi": ["sec x + C", "tan x + C", "cosec x + C", "cot x + C"],
        "answer_en": "sec x + C",
        "answer_hi": "sec x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
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
        "num": 34,
        "question_en": "Which of the following is a halogen?",
        "question_hi": "निम्नलिखित में से कौन एक हैलोजन है?",
        "options_en": ["Sodium", "Chlorine", "Argon", "Potassium"],
        "options_hi": ["सोडियम", "क्लोरीन", "आर्गन", "पोटैशियम"],
        "answer_en": "Chlorine",
        "answer_hi": "क्लोरीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Who wrote 'Gitanjali'?",
        "question_hi": "'गीतांजलि' किसने लिखी?",
        "options_en": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Mahadevi Verma"],
        "options_hi": ["रबींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "सरोजिनी नायडू", "महादेवी वर्मा"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which organ is responsible for pumping blood throughout the body?",
        "question_hi": "कौन सा अंग पूरे शरीर में रक्त पंप करने के लिए जिम्मेदार है?",
        "options_en": ["Lungs", "Heart", "Liver", "Kidneys"],
        "options_hi": ["फेफड़े", "हृदय", "यकृत", "गुर्दे"],
        "answer_en": "Heart",
        "answer_hi": "हृदय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the value of d/dx(e^(2x))?",
        "question_hi": "d/dx(e^(2x)) का मान क्या है?",
        "options_en": ["2e^(2x)", "e^(2x)", "2e^x", "e^x"],
        "options_hi": ["2e^(2x)", "e^(2x)", "2e^x", "e^x"],
        "answer_en": "2e^(2x)",
        "answer_hi": "2e^(2x)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the principle behind a DC motor?",
        "question_hi": "DC मोटर के पीछे क्या सिद्धांत है?",
        "options_en": ["Electromagnetic induction", "Magnetic effect of current", "Heating effect of current", "Chemical effect of current"],
        "options_hi": ["विद्युत चुम्बकीय प्रेरण", "धारा का चुंबकीय प्रभाव", "धारा का तापीय प्रभाव", "धारा का रासायनिक प्रभाव"],
        "answer_en": "Magnetic effect of current",
        "answer_hi": "धारा का चुंबकीय प्रभाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
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
        "num": 40,
        "question_en": "Who wrote 'Pride and Prejudice'?",
        "question_hi": "'प्राइड एंड प्रेजुडिस' किसने लिखा?",
        "options_en": ["Jane Austen", "Charlotte Bronte", "Emily Bronte", "Charles Dickens"],
        "options_hi": ["जेन ऑस्टेन", "शार्लोट ब्रोंटे", "एमिली ब्रोंटे", "चार्ल्स डिकेंस"],
        "answer_en": "Jane Austen",
        "answer_hi": "जेन ऑस्टेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which of the following is NOT a type of RNA?",
        "question_hi": "निम्नलिखित में से कौन RNA का प्रकार नहीं है?",
        "options_en": ["mRNA", "tRNA", "rRNA", "dRNA"],
        "options_hi": ["mRNA", "tRNA", "rRNA", "dRNA"],
        "answer_en": "dRNA",
        "answer_hi": "dRNA",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the value of ∫(1/√(a² - x²)) dx?",
        "question_hi": "∫(1/√(a² - x²)) dx का मान क्या है?",
        "options_en": ["sin⁻¹(x/a) + C", "cos⁻¹(x/a) + C", "tan⁻¹(x/a) + C", "sec⁻¹(x/a) + C"],
        "options_hi": ["sin⁻¹(x/a) + C", "cos⁻¹(x/a) + C", "tan⁻¹(x/a) + C", "sec⁻¹(x/a) + C"],
        "answer_en": "sin⁻¹(x/a) + C",
        "answer_hi": "sin⁻¹(x/a) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the unit of work?",
        "question_hi": "कार्य की इकाई क्या है?",
        "options_en": ["Joule", "Newton", "Watt", "Pascal"],
        "options_hi": ["जूल", "न्यूटन", "वाट", "पास्कल"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which of the following is a transition metal?",
        "question_hi": "निम्नलिखित में से कौन एक संक्रमण धातु है?",
        "options_en": ["Sodium", "Calcium", "Iron", "Aluminum"],
        "options_hi": ["सोडियम", "कैल्शियम", "आयरन", "एल्युमिनियम"],
        "answer_en": "Iron",
        "answer_hi": "आयरन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Who wrote 'The Canterbury Tales'?",
        "question_hi": "'द कैंटरबरी टेल्स' किसने लिखा?",
        "options_en": ["Geoffrey Chaucer", "William Shakespeare", "John Milton", "Christopher Marlowe"],
        "options_hi": ["जेफ्री चौसर", "विलियम शेक्सपियर", "जॉन मिल्टन", "क्रिस्टोफर मार्लो"],
        "answer_en": "Geoffrey Chaucer",
        "answer_hi": "जेफ्री चौसर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which part of the cell contains genetic material?",
        "question_hi": "कोशिका का कौन सा भाग आनुवंशिक सामग्री रखता है?",
        "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic reticulum"],
        "options_hi": ["नाभिक", "माइटोकॉन्ड्रिया", "राइबोसोम", "अंतर्द्रव्यी जालिका"],
        "answer_en": "Nucleus",
        "answer_hi": "नाभिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the value of ∫(cosec x cot x) dx?",
        "question_hi": "∫(cosec x cot x) dx का मान क्या है?",
        "options_en": ["-cosec x + C", "cosec x + C", "-cot x + C", "cot x + C"],
        "options_hi": ["-cosec x + C", "cosec x + C", "-cot x + C", "cot x + C"],
        "answer_en": "-cosec x + C",
        "answer_hi": "-cosec x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the unit of pressure?",
        "question_hi": "दबाव की इकाई क्या है?",
        "options_en": ["Newton", "Pascal", "Joule", "Watt"],
        "options_hi": ["न्यूटन", "पास्कल", "जूल", "वाट"],
        "answer_en": "Pascal",
        "answer_hi": "पास्कल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which of the following is an alkaline earth metal?",
        "question_hi": "निम्नलिखित में से कौन एक क्षारीय मृदा धातु है?",
        "options_en": ["Sodium", "Potassium", "Calcium", "Aluminum"],
        "options_hi": ["सोडियम", "पोटैशियम", "कैल्शियम", "एल्युमिनियम"],
        "answer_en": "Calcium",
        "answer_hi": "कैल्शियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Who wrote 'The Divine Comedy'?",
        "question_hi": "'द डिवाइन कॉमेडी' किसने लिखी?",
        "options_en": ["Dante Alighieri", "Giovanni Boccaccio", "Francesco Petrarch", "Miguel de Cervantes"],
        "options_hi": ["दांते अलिगिएरी", "जियोवानी बोकाचियो", "फ्रांसेस्को पेट्रार्क", "मिगुएल डे सर्वेंट्स"],
        "answer_en": "Dante Alighieri",
        "answer_hi": "दांते अलिगिएरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which enzyme is responsible for the digestion of starch in the mouth?",
        "question_hi": "मुंह में स्टार्च के पाचन के लिए कौन सा एंजाइम जिम्मेदार है?",
        "options_en": ["Pepsin", "Amylase", "Lipase", "Trypsin"],
        "options_hi": ["पेप्सिन", "एमाइलेज", "लाइपेज", "ट्रिप्सिन"],
        "answer_en": "Amylase",
        "answer_hi": "एमाइलेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the value of ∫(2x + 3) dx from 0 to 2?",
        "question_hi": "0 से 2 तक ∫(2x + 3) dx का मान क्या है?",
        "options_en": ["8", "10", "12", "14"],
        "options_hi": ["8", "10", "12", "14"],
        "answer_en": "10",
        "answer_hi": "10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which law states that the angle of incidence is equal to the angle of reflection?",
        "question_hi": "कौन सा नियम कहता है कि आपतन कोण परावर्तन कोण के बराबर होता है?",
        "options_en": ["Snell's Law", "Law of Reflection", "Law of Refraction", "Brewster's Law"],
        "options_hi": ["स्नेल का नियम", "परावर्तन का नियम", "अपवर्तन का नियम", "ब्रूस्टर का नियम"],
        "answer_en": "Law of Reflection",
        "answer_hi": "परावर्तन का नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the IUPAC name of CH₃COOH?",
        "question_hi": "CH₃COOH का IUPAC नाम क्या है?",
        "options_en": ["Methanoic acid", "Ethanoic acid", "Propanoic acid", "Butanoic acid"],
        "options_hi": ["मेथेनोइक अम्ल", "एथेनोइक अम्ल", "प्रोपेनोइक अम्ल", "ब्यूटेनोइक अम्ल"],
        "answer_en": "Ethanoic acid",
        "answer_hi": "एथेनोइक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Who wrote the novel 'To Kill a Mockingbird'?",
        "question_hi": "'टू किल अ मॉकिंगबर्ड' उपन्यास किसने लिखा?",
        "options_en": ["Harper Lee", "Mark Twain", "John Steinbeck", "Ernest Hemingway"],
        "options_hi": ["हार्पर ली", "मार्क ट्वेन", "जॉन स्टीनबेक", "अर्नेस्ट हेमिंग्वे"],
        "answer_en": "Harper Lee",
        "answer_hi": "हार्पर ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
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
        "num": 57,
        "question_en": "What is the process of cell division that results in four daughter cells?",
        "question_hi": "कोशिका विभाजन की वह प्रक्रिया क्या है जिसके परिणामस्वरूप चार संतति कोशिकाएं बनती हैं?",
        "options_en": ["Mitosis", "Meiosis", "Binary fission", "Budding"],
        "options_hi": ["माइटोसिस", "मियोसिस", "द्विखंडन", "कलिकायन"],
        "answer_en": "Meiosis",
        "answer_hi": "मियोसिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the value of d/dx(ln x)?",
        "question_hi": "d/dx(ln x) का मान क्या है?",
        "options_en": ["1/x", "x", "eˣ", "1"],
        "options_hi": ["1/x", "x", "eˣ", "1"],
        "answer_en": "1/x",
        "answer_hi": "1/x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
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
        "num": 60,
        "question_en": "Which gas is produced during photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण के दौरान कौन सी गैस उत्पन्न होती है?",
        "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Who wrote the poem 'The Raven'?",
        "question_hi": "'द रेवेन' कविता किसने लिखी?",
        "options_en": ["Edgar Allan Poe", "Walt Whitman", "Emily Dickinson", "Robert Frost"],
        "options_hi": ["एडगर एलन पो", "वाल्ट व्हिटमैन", "एमिली डिकिंसन", "रॉबर्ट फ्रॉस्ट"],
        "answer_en": "Edgar Allan Poe",
        "answer_hi": "एडगर एलन पो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which vitamin deficiency causes Rickets?",
        "question_hi": "किस विटामिन की कमी से रिकेट्स होता है?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the value of ∫(cos 2x) dx?",
        "question_hi": "∫(cos 2x) dx का मान क्या है?",
        "options_en": ["(sin 2x)/2 + C", "2 sin 2x + C", "(cos 2x)/2 + C", "2 cos 2x + C"],
        "options_hi": ["(sin 2x)/2 + C", "2 sin 2x + C", "(cos 2x)/2 + C", "2 cos 2x + C"],
        "answer_en": "(sin 2x)/2 + C",
        "answer_hi": "(sin 2x)/2 + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the principle behind the working of a generator?",
        "question_hi": "जनरेटर के कार्य करने का सिद्धांत क्या है?",
        "options_en": ["Electromagnetic induction", "Magnetic effect", "Heating effect", "Chemical effect"],
        "options_hi": ["विद्युत चुम्बकीय प्रेरण", "चुंबकीय प्रभाव", "तापीय प्रभाव", "रासायनिक प्रभाव"],
        "answer_en": "Electromagnetic induction",
        "answer_hi": "विद्युत चुम्बकीय प्रेरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the chemical formula of Ammonia?",
        "question_hi": "अमोनिया का रासायनिक सूत्र क्या है?",
        "options_en": ["NH₃", "NH₄", "NO₂", "N₂O"],
        "options_hi": ["NH₃", "NH₄", "NO₂", "N₂O"],
        "answer_en": "NH₃",
        "answer_hi": "NH₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Who wrote the play 'Death of a Salesman'?",
        "question_hi": "'डेथ ऑफ अ सेल्समैन' नाटक किसने लिखा?",
        "options_en": ["Arthur Miller", "Tennessee Williams", "Eugene O'Neill", "Samuel Beckett"],
        "options_hi": ["आर्थर मिलर", "टेनेसी विलियम्स", "यूजीन ओ'नील", "सैमुअल बेकेट"],
        "answer_en": "Arthur Miller",
        "answer_hi": "आर्थर मिलर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which part of the human brain controls breathing?",
        "question_hi": "मानव मस्तिष्क का कौन सा भाग श्वसन को नियंत्रित करता है?",
        "options_en": ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
        "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला ओब्लोंगाटा", "हाइपोथैलेमस"],
        "answer_en": "Medulla oblongata",
        "answer_hi": "मेडुला ओब्लोंगाटा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the value of lim(x→0) (eˣ - 1)/x?",
        "question_hi": "lim(x→0) (eˣ - 1)/x का मान क्या है?",
        "options_en": ["0", "1", "e", "∞"],
        "options_hi": ["0", "1", "e", "∞"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the unit of frequency?",
        "question_hi": "आवृत्ति की इकाई क्या है?",
        "options_en": ["Hertz", "Watt", "Joule", "Newton"],
        "options_hi": ["हर्ट्ज", "वाट", "जूल", "न्यूटन"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which metal is liquid at room temperature?",
        "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
        "options_en": ["Iron", "Copper", "Mercury", "Aluminum"],
        "options_hi": ["आयरन", "कॉपर", "मर्करी", "एल्युमिनियम"],
        "answer_en": "Mercury",
        "answer_hi": "मर्करी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
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
        "num": 72,
        "question_en": "Which blood cells are responsible for carrying oxygen?",
        "question_hi": "कौन सी रक्त कोशिकाएं ऑक्सीजन ले जाने के लिए जिम्मेदार हैं?",
        "options_en": ["White blood cells", "Red blood cells", "Platelets", "Plasma"],
        "options_hi": ["श्वेत रक्त कोशिकाएं", "लाल रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
        "answer_en": "Red blood cells",
        "answer_hi": "लाल रक्त कोशिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the value of d/dx(sin 3x)?",
        "question_hi": "d/dx(sin 3x) का मान क्या है?",
        "options_en": ["3 cos 3x", "cos 3x", "3 sin 3x", "sin 3x"],
        "options_hi": ["3 cos 3x", "cos 3x", "3 sin 3x", "sin 3x"],
        "answer_en": "3 cos 3x",
        "answer_hi": "3 cos 3x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
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
        "num": 75,
        "question_en": "Which gas is known as laughing gas?",
        "question_hi": "किस गैस को हंसाने वाली गैस के रूप में जाना जाता है?",
        "options_en": ["Nitrous oxide", "Carbon dioxide", "Oxygen", "Nitrogen"],
        "options_hi": ["नाइट्रस ऑक्साइड", "कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन"],
        "answer_en": "Nitrous oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Who wrote 'Raghuvamsa'?",
        "question_hi": "'रघुवंश' किसने लिखा?",
        "options_en": ["Kalidasa", "Bhavabhuti", "Bhasa", "Sudraka"],
        "options_hi": ["कालिदास", "भवभूति", "भास", "शूद्रक"],
        "answer_en": "Kalidasa",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the process of conversion of light energy to chemical energy called?",
        "question_hi": "प्रकाश ऊर्जा को रासायनिक ऊर्जा में परिवर्तित करने की प्रक्रिया को क्या कहा जाता है?",
        "options_en": ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
        "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "पाचन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the value of ∫(x² + 1) dx from 1 to 3?",
        "question_hi": "1 से 3 तक ∫(x² + 1) dx का मान क्या है?",
        "options_en": ["28/3", "32/3", "10", "12"],
        "options_hi": ["28/3", "32/3", "10", "12"],
        "answer_en": "32/3",
        "answer_hi": "32/3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the principle behind the working of a microscope?",
        "question_hi": "माइक्रोस्कोप के कार्य करने का सिद्धांत क्या है?",
        "options_en": ["Reflection", "Refraction", "Dispersion", "Scattering"],
        "options_hi": ["परावर्तन", "अपवर्तन", "विक्षेपण", "प्रकीर्णन"],
        "answer_en": "Refraction",
        "answer_hi": "अपवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the chemical formula of Sulfur dioxide?",
        "question_hi": "सल्फर डाइऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["SO₂", "SO₃", "H₂SO₄", "SO₄"],
        "options_hi": ["SO₂", "SO₃", "H₂SO₄", "SO₄"],
        "answer_en": "SO₂",
        "answer_hi": "SO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Who wrote the novel '1984'?",
        "question_hi": "'1984' उपन्यास किसने लिखा?",
        "options_en": ["George Orwell", "Aldous Huxley", "H.G. Wells", "Jules Verne"],
        "options_hi": ["जॉर्ज ऑरवेल", "एल्डस हक्सले", "एच.जी. वेल्स", "जूल्स वर्न"],
        "answer_en": "George Orwell",
        "answer_hi": "जॉर्ज ऑरवेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which gland is known as the emergency gland?",
        "question_hi": "किस ग्रंथि को आपातकालीन ग्रंथि के रूप में जाना जाता है?",
        "options_en": ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
        "options_hi": ["थायरॉइड", "पिट्यूटरी", "अधिवृक्क", "अग्न्याशय"],
        "answer_en": "Adrenal",
        "answer_hi": "अधिवृक्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the value of d/dx(tan 2x)?",
        "question_hi": "d/dx(tan 2x) का मान क्या है?",
        "options_en": ["2 sec²2x", "sec²2x", "2 tan 2x", "tan 2x"],
        "options_hi": ["2 sec²2x", "sec²2x", "2 tan 2x", "tan 2x"],
        "answer_en": "2 sec²2x",
        "answer_hi": "2 sec²2x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the unit of magnetic field?",
        "question_hi": "चुंबकीय क्षेत्र की इकाई क्या है?",
        "options_en": ["Tesla", "Weber", "Henry", "Gauss"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which acid is present in vinegar?",
        "question_hi": "सिरका में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Acetic acid", "Citric acid", "Lactic acid", "Formic acid"],
        "options_hi": ["एसिटिक अम्ल", "सिट्रिक अम्ल", "लैक्टिक अम्ल", "फॉर्मिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Who wrote 'Kadambari'?",
        "question_hi": "'कादम्बरी' किसने लिखी?",
        "options_en": ["Banabhatta", "Kalidasa", "Bhavabhuti", "Bhasa"],
        "options_hi": ["बाणभट्ट", "कालिदास", "भवभूति", "भास"],
        "answer_en": "Banabhatta",
        "answer_hi": "बाणभट्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which part of the cell is known as the power house?",
        "question_hi": "कोशिका के किस भाग को पावर हाउस के रूप में जाना जाता है?",
        "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        "options_hi": ["नाभिक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the value of ∫(1/(x² + 1)) dx?",
        "question_hi": "∫(1/(x² + 1)) dx का मान क्या है?",
        "options_en": ["tan⁻¹x + C", "cot⁻¹x + C", "sin⁻¹x + C", "cos⁻¹x + C"],
        "options_hi": ["tan⁻¹x + C", "cot⁻¹x + C", "sin⁻¹x + C", "cos⁻¹x + C"],
        "answer_en": "tan⁻¹x + C",
        "answer_hi": "tan⁻¹x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
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
        "num": 90,
        "question_en": "Which gas is used in refrigerators?",
        "question_hi": "रेफ्रिजरेटर में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Ammonia", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["अमोनिया", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Ammonia",
        "answer_hi": "अमोनिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Who wrote 'Panchtantra'?",
        "question_hi": "'पंचतंत्र' किसने लिखा?",
        "options_en": ["Vishnu Sharma", "Kalidasa", "Bhavabhuti", "Bhasa"],
        "options_hi": ["विष्णु शर्मा", "कालिदास", "भवभूति", "भास"],
        "answer_en": "Vishnu Sharma",
        "answer_hi": "विष्णु शर्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
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
        "num": 93,
        "question_en": "What is the value of ∫(e^(3x)) dx?",
        "question_hi": "∫(e^(3x)) dx का मान क्या है?",
        "options_en": ["(e^(3x))/3 + C", "3e^(3x) + C", "e^(3x) + C", "(e^(3x))/2 + C"],
        "options_hi": ["(e^(3x))/3 + C", "3e^(3x) + C", "e^(3x) + C", "(e^(3x))/2 + C"],
        "answer_en": "(e^(3x))/3 + C",
        "answer_hi": "(e^(3x))/3 + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the principle behind the working of a transformer?",
        "question_hi": "ट्रांसफॉर्मर के कार्य करने का सिद्धांत क्या है?",
        "options_en": ["Self induction", "Mutual induction", "Electromagnetic induction", "Magnetic effect"],
        "options_hi": ["स्व-प्रेरण", "पारस्परिक प्रेरण", "विद्युत चुम्बकीय प्रेरण", "चुंबकीय प्रभाव"],
        "answer_en": "Mutual induction",
        "answer_hi": "पारस्परिक प्रेरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the chemical formula of Calcium hydroxide?",
        "question_hi": "कैल्शियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["Ca(OH)₂", "CaO", "CaCO₃", "CaSO₄"],
        "options_hi": ["Ca(OH)₂", "CaO", "CaCO₃", "CaSO₄"],
        "answer_en": "Ca(OH)₂",
        "answer_hi": "Ca(OH)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Who wrote 'Animal Farm'?",
        "question_hi": "'एनिमल फार्म' किसने लिखा?",
        "options_en": ["George Orwell", "Aldous Huxley", "H.G. Wells", "Jules Verne"],
        "options_hi": ["जॉर्ज ऑरवेल", "एल्डस हक्सले", "एच.जी. वेल्स", "जूल्स वर्न"],
        "answer_en": "George Orwell",
        "answer_hi": "जॉर्ज ऑरवेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
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
        "num": 98,
        "question_en": "What is the value of ∫(sin 2x) dx?",
        "question_hi": "∫(sin 2x) dx का मान क्या है?",
        "options_en": ["-(cos 2x)/2 + C", "(cos 2x)/2 + C", "-2 cos 2x + C", "2 cos 2x + C"],
        "options_hi": ["-(cos 2x)/2 + C", "(cos 2x)/2 + C", "-2 cos 2x + C", "2 cos 2x + C"],
        "answer_en": "-(cos 2x)/2 + C",
        "answer_hi": "-(cos 2x)/2 + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
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
        "num": 100,
        "question_en": "Which gas is used in balloons?",
        "question_hi": "गुब्बारों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
        "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "हीलियम", "नाइट्रोजन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
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