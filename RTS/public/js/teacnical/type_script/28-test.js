const questions = [
    {
        "num": 1,
        "question_en": "Which of the following is a primary lymphoid organ?",
        "question_hi": "निम्नलिखित में से कौन सा प्राथमिक लसीका अंग है?",
        "options_en": ["Spleen", "Thymus", "Lymph nodes", "Tonsils"],
        "options_hi": ["तिल्ली", "थाइमस", "लसीका पर्व", "टॉन्सिल"],
        "answer_en": "Thymus",
        "answer_hi": "थाइमस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the derivative of sin(x) with respect to x?",
        "question_hi": "x के संबंध में sin(x) का अवकलज क्या है?",
        "options_en": ["cos(x)", "-cos(x)", "-sin(x)", "tan(x)"],
        "options_hi": ["cos(x)", "-cos(x)", "-sin(x)", "tan(x)"],
        "answer_en": "cos(x)",
        "answer_hi": "cos(x)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which law states that the pressure of a gas is inversely proportional to its volume at constant temperature?",
        "question_hi": "कौन सा नियम कहता है कि स्थिर तापमान पर गैस का दबाव उसके आयतन के व्युत्क्रमानुपाती होता है?",
        "options_en": ["Charles' Law", "Boyle's Law", "Gay-Lussac's Law", "Avogadro's Law"],
        "options_hi": ["चार्ल्स का नियम", "बॉयल का नियम", "गे-लुसाक का नियम", "अवोगाद्रो का नियम"],
        "answer_en": "Boyle's Law",
        "answer_hi": "बॉयल का नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Who wrote the poem 'The Road Not Taken'?",
        "question_hi": "'द रोड नॉट टेकन' कविता किसने लिखी?",
        "options_en": ["Robert Frost", "William Wordsworth", "John Keats", "P.B. Shelley"],
        "options_hi": ["रॉबर्ट फ्रॉस्ट", "विलियम वर्ड्सवर्थ", "जॉन कीट्स", "पी.बी. शेली"],
        "answer_en": "Robert Frost",
        "answer_hi": "रॉबर्ट फ्रॉस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the chemical formula of Benzaldehyde?",
        "question_hi": "बेंजाल्डिहाइड का रासायनिक सूत्र क्या है?",
        "options_en": ["C₆H₅CHO", "C₆H₅COOH", "C₆H₅OH", "C₆H₆"],
        "options_hi": ["C₆H₅CHO", "C₆H₅COOH", "C₆H₅OH", "C₆H₆"],
        "answer_en": "C₆H₅CHO",
        "answer_hi": "C₆H₅CHO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which of the following is NOT a function of the liver?",
        "question_hi": "निम्नलिखित में से कौन सा यकृत का कार्य नहीं है?",
        "options_en": ["Bile production", "Glycogen storage", "Urea formation", "Oxygen transport"],
        "options_hi": ["पित्त उत्पादन", "ग्लाइकोजन भंडारण", "यूरिया निर्माण", "ऑक्सीजन परिवहन"],
        "answer_en": "Oxygen transport",
        "answer_hi": "ऑक्सीजन परिवहन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the value of ∫(2x dx) from 0 to 3?",
        "question_hi": "0 से 3 तक ∫(2x dx) का मान क्या है?",
        "options_en": ["6", "9", "12", "18"],
        "options_hi": ["6", "9", "12", "18"],
        "answer_en": "9",
        "answer_hi": "9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which of the following is a strong electrolyte?",
        "question_hi": "निम्नलिखित में से कौन सा प्रबल विद्युत-अपघट्य है?",
        "options_en": ["Acetic acid", "Ammonia", "Sodium chloride", "Carbonic acid"],
        "options_hi": ["एसिटिक अम्ल", "अमोनिया", "सोडियम क्लोराइड", "कार्बोनिक अम्ल"],
        "answer_en": "Sodium chloride",
        "answer_hi": "सोडियम क्लोराइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
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
        "num": 10,
        "question_en": "Who wrote the novel 'The Guide'?",
        "question_hi": "'द गाइड' उपन्यास किसने लिखा?",
        "options_en": ["R.K. Narayan", "Mulk Raj Anand", "Raja Rao", "Anita Desai"],
        "options_hi": ["आर.के. नारायण", "मुल्क राज आनंद", "राजा राव", "अनिता देसाई"],
        "answer_en": "R.K. Narayan",
        "answer_hi": "आर.के. नारायण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which process involves the conversion of glucose to pyruvate?",
        "question_hi": "कौन सी प्रक्रिया ग्लूकोज को पाइरुवेट में परिवर्तित करने से संबंधित है?",
        "options_en": ["Krebs cycle", "Glycolysis", "Electron transport chain", "Fermentation"],
        "options_hi": ["क्रेब्स चक्र", "ग्लाइकोलाइसिस", "इलेक्ट्रॉन परिवहन श्रृंखला", "किण्वन"],
        "answer_en": "Glycolysis",
        "answer_hi": "ग्लाइकोलाइसिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the value of lim(x→0) (sinx/x)?",
        "question_hi": "lim(x→0) (sinx/x) का मान क्या है?",
        "options_en": ["0", "1", "∞", "Undefined"],
        "options_hi": ["0", "1", "∞", "अपरिभाषित"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which of the following is a lanthanide element?",
        "question_hi": "निम्नलिखित में से कौन सा लैन्थेनाइड तत्व है?",
        "options_en": ["Uranium", "Cerium", "Actinium", "Thorium"],
        "options_hi": ["यूरेनियम", "सीरियम", "एक्टिनियम", "थोरियम"],
        "answer_en": "Cerium",
        "answer_hi": "सीरियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the focal length of a convex lens with power +2D?",
        "question_hi": "+2D क्षमता वाले उत्तल लेंस की फोकस दूरी क्या है?",
        "options_en": ["0.5 m", "1.0 m", "2.0 m", "0.25 m"],
        "options_hi": ["0.5 मी", "1.0 मी", "2.0 मी", "0.25 मी"],
        "answer_en": "0.5 m",
        "answer_hi": "0.5 मी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Who is the author of 'Gaban'?",
        "question_hi": "'गबन' के लेखक कौन हैं?",
        "options_en": ["Premchand", "Jaishankar Prasad", "Mahadevi Verma", "Suryakant Tripathi"],
        "options_hi": ["प्रेमचंद", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which hormone regulates calcium metabolism in the body?",
        "question_hi": "कौन सा हार्मोन शरीर में कैल्शियम चयापचय को नियंत्रित करता है?",
        "options_en": ["Insulin", "Thyroxine", "Parathyroid hormone", "Adrenaline"],
        "options_hi": ["इंसुलिन", "थायरोक्सिन", "पैराथाइरॉइड हार्मोन", "एड्रेनालाईन"],
        "answer_en": "Parathyroid hormone",
        "answer_hi": "पैराथाइरॉइड हार्मोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the value of ∫eˣ dx?",
        "question_hi": "∫eˣ dx का मान क्या है?",
        "options_en": ["eˣ + C", "xeˣ + C", "eˣ/x + C", "ln(x) + C"],
        "options_hi": ["eˣ + C", "xeˣ + C", "eˣ/x + C", "ln(x) + C"],
        "answer_en": "eˣ + C",
        "answer_hi": "eˣ + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which of the following is a buffer solution?",
        "question_hi": "निम्नलिखित में से कौन सा बफर विलयन है?",
        "options_en": ["NaCl + HCl", "CH₃COOH + CH₃COONa", "NaOH + HCl", "KNO₃ + HNO₃"],
        "options_hi": ["NaCl + HCl", "CH₃COOH + CH₃COONa", "NaOH + HCl", "KNO₃ + HNO₃"],
        "answer_en": "CH₃COOH + CH₃COONa",
        "answer_hi": "CH₃COOH + CH₃COONa",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the unit of electric conductance?",
        "question_hi": "विद्युत चालकता की इकाई क्या है?",
        "options_en": ["Ohm", "Siemens", "Farad", "Henry"],
        "options_hi": ["ओम", "सीमेंस", "फैरड", "हेनरी"],
        "answer_en": "Siemens",
        "answer_hi": "सीमेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Who wrote the poem 'Madhushala'?",
        "question_hi": "'मधुशाला' कविता किसने लिखी?",
        "options_en": ["Harivansh Rai Bachchan", "Mahadevi Verma", "Suryakant Tripathi", "Sumitranandan Pant"],
        "options_hi": ["हरिवंश राय बच्चन", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी", "सुमित्रानंदन पंत"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which part of the brain is responsible for balance and coordination?",
        "question_hi": "मस्तिष्क का कौन सा भाग संतुलन और समन्वय के लिए जिम्मेदार है?",
        "options_en": ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
        "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला ओब्लोंगाटा", "हाइपोथैलेमस"],
        "answer_en": "Cerebellum",
        "answer_hi": "सेरेबेलम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the derivative of ln(x)?",
        "question_hi": "ln(x) का अवकलज क्या है?",
        "options_en": ["1/x", "x", "eˣ", "1"],
        "options_hi": ["1/x", "x", "eˣ", "1"],
        "answer_en": "1/x",
        "answer_hi": "1/x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which of the following is an aromatic compound?",
        "question_hi": "निम्नलिखित में से कौन सा सुगंधित यौगिक है?",
        "options_en": ["Cyclohexane", "Benzene", "Ethene", "Acetylene"],
        "options_hi": ["साइक्लोहेक्सेन", "बेंजीन", "ईथीन", "एसिटिलीन"],
        "answer_en": "Benzene",
        "answer_hi": "बेंजीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the principle behind working of a transformer?",
        "question_hi": "ट्रांसफॉर्मर के कार्य करने का सिद्धांत क्या है?",
        "options_en": ["Ohm's law", "Faraday's law", "Mutual induction", "Self induction"],
        "options_hi": ["ओम का नियम", "फैराडे का नियम", "पारस्परिक प्रेरण", "स्व-प्रेरण"],
        "answer_en": "Mutual induction",
        "answer_hi": "पारस्परिक प्रेरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Who wrote the play 'Andha Yug'?",
        "question_hi": "'अंधा युग' नाटक किसने लिखा?",
        "options_en": ["Dharamvir Bharati", "Mohan Rakesh", "Vijay Tendulkar", "Badal Sircar"],
        "options_hi": ["धर्मवीर भारती", "मोहन राकेश", "विजय तेंदुलकर", "बादल सरकार"],
        "answer_en": "Dharamvir Bharati",
        "answer_hi": "धर्मवीर भारती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which enzyme digests proteins in the stomach?",
        "question_hi": "पेट में प्रोटीन को पचाने वाला एंजाइम कौन सा है?",
        "options_en": ["Amylase", "Pepsin", "Lipase", "Trypsin"],
        "options_hi": ["एमाइलेज", "पेप्सिन", "लाइपेज", "ट्रिप्सिन"],
        "answer_en": "Pepsin",
        "answer_hi": "पेप्सिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the value of ∫(1/x dx)?",
        "question_hi": "∫(1/x dx) का मान क्या है?",
        "options_en": ["ln|x| + C", "x + C", "1/x² + C", "x²/2 + C"],
        "options_hi": ["ln|x| + C", "x + C", "1/x² + C", "x²/2 + C"],
        "answer_en": "ln|x| + C",
        "answer_hi": "ln|x| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which of the following is a nucleophile?",
        "question_hi": "निम्नलिखित में से कौन सा न्यूक्लियोफाइल है?",
        "options_en": ["NO₂⁺", "CN⁻", "AlCl₃", "BF₃"],
        "options_hi": ["NO₂⁺", "CN⁻", "AlCl₃", "BF₃"],
        "answer_en": "CN⁻",
        "answer_hi": "CN⁻",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the unit of capacitance?",
        "question_hi": "धारिता की इकाई क्या है?",
        "options_en": ["Ohm", "Farad", "Henry", "Tesla"],
        "options_hi": ["ओम", "फैरड", "हेनरी", "टेस्ला"],
        "answer_en": "Farad",
        "answer_hi": "फैरड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Who wrote the novel 'A Suitable Boy'?",
        "question_hi": "'ए सूटेबल बॉय' उपन्यास किसने लिखा?",
        "options_en": ["Vikram Seth", "Arundhati Roy", "Salman Rushdie", "Amitav Ghosh"],
        "options_hi": ["विक्रम सेठ", "अरुंधति रॉय", "सलमान रश्दी", "अमिताव घोष"],
        "answer_en": "Vikram Seth",
        "answer_hi": "विक्रम सेठ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which blood vessels carry blood away from the heart?",
        "question_hi": "कौन सी रक्त वाहिकाएं हृदय से रक्त ले जाती हैं?",
        "options_en": ["Veins", "Arteries", "Capillaries", "Venules"],
        "options_hi": ["शिराएं", "धमनियां", "केशिकाएं", "शिरिकाएं"],
        "answer_en": "Arteries",
        "answer_hi": "धमनियां",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the value of d/dx(tan x)?",
        "question_hi": "d/dx(tan x) का मान क्या है?",
        "options_en": ["sec²x", "cosec²x", "-cosec²x", "sec x tan x"],
        "options_hi": ["sec²x", "cosec²x", "-cosec²x", "sec x tan x"],
        "answer_en": "sec²x",
        "answer_hi": "sec²x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which of the following is used as an anti-knocking agent in petrol?",
        "question_hi": "निम्नलिखित में से किसका उपयोग पेट्रोल में एंटी-नॉकिंग एजेंट के रूप में किया जाता है?",
        "options_en": ["TEL", "Chloroform", "Benzene", "Ether"],
        "options_hi": ["TEL", "क्लोरोफॉर्म", "बेंजीन", "ईथर"],
        "answer_en": "TEL",
        "answer_hi": "TEL",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the SI unit of luminous intensity?",
        "question_hi": "ज्योति तीव्रता की SI इकाई क्या है?",
        "options_en": ["Lumen", "Candela", "Lux", "Watt"],
        "options_hi": ["लुमेन", "कैंडेला", "लक्स", "वाट"],
        "answer_en": "Candela",
        "answer_hi": "कैंडेला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Who wrote the poem 'Agneepath'?",
        "question_hi": "'अग्निपथ' कविता किसने लिखी?",
        "options_en": ["Harivansh Rai Bachchan", "Ramdhari Singh Dinkar", "Suryakant Tripathi", "Mahadevi Verma"],
        "options_hi": ["हरिवंश राय बच्चन", "रामधारी सिंह दिनकर", "सूर्यकांत त्रिपाठी", "महादेवी वर्मा"],
        "answer_en": "Harivansh Rai Bachchan",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which gland is known as the 'master gland'?",
        "question_hi": "किस ग्रंथि को 'मास्टर ग्रंथि' के रूप में जाना जाता है?",
        "options_en": ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
        "options_hi": ["थायरॉइड", "पिट्यूटरी", "अधिवृक्क", "अग्न्याशय"],
        "answer_en": "Pituitary",
        "answer_hi": "पिट्यूटरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the value of ∫cos x dx?",
        "question_hi": "∫cos x dx का मान क्या है?",
        "options_en": ["sin x + C", "-sin x + C", "cos x + C", "-cos x + C"],
        "options_hi": ["sin x + C", "-sin x + C", "cos x + C", "-cos x + C"],
        "answer_en": "sin x + C",
        "answer_hi": "sin x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which of the following is a reducing sugar?",
        "question_hi": "निम्नलिखित में से कौन सी एक अपचायक शर्करा है?",
        "options_en": ["Sucrose", "Maltose", "Starch", "Cellulose"],
        "options_hi": ["सुक्रोज", "माल्टोज", "स्टार्च", "सेलूलोज"],
        "answer_en": "Maltose",
        "answer_hi": "माल्टोज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the unit of electric potential difference?",
        "question_hi": "विद्युत विभवांतर की इकाई क्या है?",
        "options_en": ["Joule", "Watt", "Volt", "Ampere"],
        "options_hi": ["जूल", "वाट", "वोल्ट", "एम्पियर"],
        "answer_en": "Volt",
        "answer_hi": "वोल्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Who wrote the novel 'The White Tiger'?",
        "question_hi": "'द व्हाइट टाइगर' उपन्यास किसने लिखा?",
        "options_en": ["Aravind Adiga", "Chetan Bhagat", "Jhumpa Lahiri", "Anita Desai"],
        "options_hi": ["अरविंद अडिगा", "चेतन भगत", "झुम्पा लाहिड़ी", "अनिता देसाई"],
        "answer_en": "Aravind Adiga",
        "answer_hi": "अरविंद अडिगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which part of the human eye contains photoreceptor cells?",
        "question_hi": "मानव आंख का कौन सा भाग फोटोरिसेप्टर कोशिकाओं को धारण करता है?",
        "options_en": ["Cornea", "Retina", "Iris", "Lens"],
        "options_hi": ["कॉर्निया", "रेटिना", "आइरिस", "लेंस"],
        "answer_en": "Retina",
        "answer_hi": "रेटिना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the value of d/dx(eˣ)?",
        "question_hi": "d/dx(eˣ) का मान क्या है?",
        "options_en": ["eˣ", "xeˣ", "eˣ/x", "ln x"],
        "options_hi": ["eˣ", "xeˣ", "eˣ/x", "ln x"],
        "answer_en": "eˣ",
        "answer_hi": "eˣ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which of the following is used as a catalyst in Haber's process?",
        "question_hi": "हैबर प्रक्रिया में निम्नलिखित में से किसका उपयोग उत्प्रेरक के रूप में किया जाता है?",
        "options_en": ["Platinum", "Iron", "Nickel", "Vanadium pentoxide"],
        "options_hi": ["प्लैटिनम", "आयरन", "निकेल", "वैनेडियम पेंटॉक्साइड"],
        "answer_en": "Iron",
        "answer_hi": "आयरन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
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
        "num": 45,
        "question_en": "Who wrote the play 'Tughlaq'?",
        "question_hi": "'तुगलक' नाटक किसने लिखा?",
        "options_en": ["Girish Karnad", "Vijay Tendulkar", "Mohan Rakesh", "Badal Sircar"],
        "options_hi": ["गिरीश कार्नाड", "विजय तेंदुलकर", "मोहन राकेश", "बादल सरकार"],
        "answer_en": "Girish Karnad",
        "answer_hi": "गिरीश कार्नाड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which vitamin is synthesized by the skin when exposed to sunlight?",
        "question_hi": "सूर्य के प्रकाश के संपर्क में आने पर त्वचा द्वारा कौन सा विटामिन संश्लेषित किया जाता है?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the value of ∫sec²x dx?",
        "question_hi": "∫sec²x dx का मान क्या है?",
        "options_en": ["tan x + C", "sec x + C", "cot x + C", "cosec x + C"],
        "options_hi": ["tan x + C", "sec x + C", "cot x + C", "cosec x + C"],
        "answer_en": "tan x + C",
        "answer_hi": "tan x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which of the following is an example of a condensation polymer?",
        "question_hi": "निम्नलिखित में से कौन संघनन बहुलक का एक उदाहरण है?",
        "options_en": ["Polyethylene", "Nylon-6,6", "Polyvinyl chloride", "Teflon"],
        "options_hi": ["पॉलीइथाइलीन", "नायलॉन-6,6", "पॉलीविनाइल क्लोराइड", "टेफ्लॉन"],
        "answer_en": "Nylon-6,6",
        "answer_hi": "नायलॉन-6,6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the unit of magnetic field strength?",
        "question_hi": "चुंबकीय क्षेत्र शक्ति की इकाई क्या है?",
        "options_en": ["Tesla", "Weber", "Gauss", "Ampere/meter"],
        "options_hi": ["टेस्ला", "वेबर", "गॉस", "एम्पियर/मीटर"],
        "answer_en": "Ampere/meter",
        "answer_hi": "एम्पियर/मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Who wrote the novel 'The Inheritance of Loss'?",
        "question_hi": "'द इनहेरिटेंस ऑफ लॉस' उपन्यास किसने लिखा?",
        "options_en": ["Kiran Desai", "Arundhati Roy", "Jhumpa Lahiri", "Anita Desai"],
        "options_hi": ["किरण देसाई", "अरुंधति रॉय", "झुम्पा लाहिड़ी", "अनिता देसाई"],
        "answer_en": "Kiran Desai",
        "answer_hi": "किरण देसाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which of the following is responsible for the transmission of nerve impulses?",
        "question_hi": "निम्नलिखित में से कौन तंत्रिका आवेगों के संचरण के लिए जिम्मेदार है?",
        "options_en": ["Dendrites", "Axons", "Synapses", "Myelin sheath"],
        "options_hi": ["डेंड्राइट्स", "एक्सोन्स", "सिनैप्स", "माइलिन शीथ"],
        "answer_en": "Axons",
        "answer_hi": "एक्सोन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the value of ∫(3x² + 2x + 1) dx?",
        "question_hi": "∫(3x² + 2x + 1) dx का मान क्या है?",
        "options_en": ["x³ + x² + x + C", "x³ + 2x² + x + C", "3x³ + x² + x + C", "x³ + x² + 2x + C"],
        "options_hi": ["x³ + x² + x + C", "x³ + 2x² + x + C", "3x³ + x² + x + C", "x³ + x² + 2x + C"],
        "answer_en": "x³ + x² + x + C",
        "answer_hi": "x³ + x² + x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which law states that the rate of cooling is proportional to the temperature difference?",
        "question_hi": "कौन सा नियम कहता है कि ठंडा होने की दर तापमान अंतर के समानुपाती होती है?",
        "options_en": ["Stefan's Law", "Newton's Law of Cooling", "Wien's Law", "Kirchhoff's Law"],
        "options_hi": ["स्टीफन का नियम", "न्यूटन का शीतलन नियम", "वीन का नियम", "किरचॉफ का नियम"],
        "answer_en": "Newton's Law of Cooling",
        "answer_hi": "न्यूटन का शीतलन नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which reagent is used for the detection of unsaturation in organic compounds?",
        "question_hi": "कार्बनिक यौगिकों में असंतृप्तता की जांच के लिए किस अभिकर्मक का उपयोग किया जाता है?",
        "options_en": ["Benedict's reagent", "Tollen's reagent", "Baeyer's reagent", "Fehling's solution"],
        "options_hi": ["बेनेडिक्ट अभिकर्मक", "टोलेन अभिकर्मक", "बेयर अभिकर्मक", "फेहलिंग विलयन"],
        "answer_en": "Baeyer's reagent",
        "answer_hi": "बेयर अभिकर्मक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Who wrote the poem 'The Lake Isle of Innisfree'?",
        "question_hi": "'द लेक आइल ऑफ इनिसफ्री' कविता किसने लिखी?",
        "options_en": ["W.B. Yeats", "T.S. Eliot", "William Blake", "John Keats"],
        "options_hi": ["डब्ल्यू.बी. येट्स", "टी.एस. एलियट", "विलियम ब्लेक", "जॉन कीट्स"],
        "answer_en": "W.B. Yeats",
        "answer_hi": "डब्ल्यू.बी. येट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the chemical formula of Potassium permanganate?",
        "question_hi": "पोटेशियम परमैंगनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["KMnO₄", "K₂MnO₄", "K₂Cr₂O₇", "K₂CrO₄"],
        "options_hi": ["KMnO₄", "K₂MnO₄", "K₂Cr₂O₇", "K₂CrO₄"],
        "answer_en": "KMnO₄",
        "answer_hi": "KMnO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which part of the human ear is responsible for maintaining balance?",
        "question_hi": "मानव कान का कौन सा भाग संतुलन बनाए रखने के लिए जिम्मेदार है?",
        "options_en": ["Cochlea", "Eustachian tube", "Vestibular system", "Tympanic membrane"],
        "options_hi": ["कोक्लिया", "यूस्टेशियन ट्यूब", "वेस्टिबुलर प्रणाली", "टिम्पेनिक झिल्ली"],
        "answer_en": "Vestibular system",
        "answer_hi": "वेस्टिबुलर प्रणाली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the value of lim(x→∞) (1 + 1/x)ˣ?",
        "question_hi": "lim(x→∞) (1 + 1/x)ˣ का मान क्या है?",
        "options_en": ["0", "1", "e", "∞"],
        "options_hi": ["0", "1", "e", "∞"],
        "answer_en": "e",
        "answer_hi": "e",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which phenomenon is responsible for the blue color of the sky?",
        "question_hi": "आकाश के नीले रंग के लिए कौन सी घटना जिम्मेदार है?",
        "options_en": ["Reflection", "Refraction", "Scattering", "Dispersion"],
        "options_hi": ["परावर्तन", "अपवर्तन", "प्रकीर्णन", "विक्षेपण"],
        "answer_en": "Scattering",
        "answer_hi": "प्रकीर्णन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which of the following is a common oxidizing agent in organic chemistry?",
        "question_hi": "निम्नलिखित में से कौन कार्बनिक रसायन विज्ञान में एक सामान्य ऑक्सीकरण अभिकर्मक है?",
        "options_en": ["NaBH₄", "LiAlH₄", "KMnO₄", "Sn/HCl"],
        "options_hi": ["NaBH₄", "LiAlH₄", "KMnO₄", "Sn/HCl"],
        "answer_en": "KMnO₄",
        "answer_hi": "KMnO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Who is known as the father of English poetry?",
        "question_hi": "अंग्रेजी कविता के जनक के रूप में किसे जाना जाता है?",
        "options_en": ["Geoffrey Chaucer", "William Shakespeare", "John Milton", "William Wordsworth"],
        "options_hi": ["जेफ्री चौसर", "विलियम शेक्सपियर", "जॉन मिल्टन", "विलियम वर्ड्सवर्थ"],
        "answer_en": "Geoffrey Chaucer",
        "answer_hi": "जेफ्री चौसर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which hormone is responsible for the fight or flight response?",
        "question_hi": "लड़ाई या उड़ान प्रतिक्रिया के लिए कौन सा हार्मोन जिम्मेदार है?",
        "options_en": ["Insulin", "Adrenaline", "Thyroxine", "Estrogen"],
        "options_hi": ["इंसुलिन", "एड्रेनालाईन", "थायरोक्सिन", "एस्ट्रोजन"],
        "answer_en": "Adrenaline",
        "answer_hi": "एड्रेनालाईन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the derivative of sec x?",
        "question_hi": "sec x का अवकलज क्या है?",
        "options_en": ["sec x tan x", "-cosec x cot x", "cosec²x", "-sec²x"],
        "options_hi": ["sec x tan x", "-cosec x cot x", "cosec²x", "-sec²x"],
        "answer_en": "sec x tan x",
        "answer_hi": "sec x tan x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the principle behind the working of a nuclear reactor?",
        "question_hi": "परमाणु रिएक्टर के कार्य करने का सिद्धांत क्या है?",
        "options_en": ["Nuclear fusion", "Nuclear fission", "Radioactive decay", "Chain reaction"],
        "options_hi": ["नाभिकीय संलयन", "नाभिकीय विखंडन", "रेडियोधर्मी क्षय", "श्रृंखला अभिक्रिया"],
        "answer_en": "Nuclear fission",
        "answer_hi": "नाभिकीय विखंडन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which test is used to distinguish between aldehydes and ketones?",
        "question_hi": "एल्डिहाइड और कीटोन के बीच अंतर करने के लिए किस परीक्षण का उपयोग किया जाता है?",
        "options_en": ["Bromine test", "Tollen's test", "Baeyer's test", "Lucas test"],
        "options_hi": ["ब्रोमीन परीक्षण", "टोलेन परीक्षण", "बेयर परीक्षण", "लुकास परीक्षण"],
        "answer_en": "Tollen's test",
        "answer_hi": "टोलेन परीक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Who wrote the novel 'The God of Small Things'?",
        "question_hi": "'द गॉड ऑफ स्मॉल थिंग्स' उपन्यास किसने लिखा?",
        "options_en": ["Arundhati Roy", "Kiran Desai", "Jhumpa Lahiri", "Anita Desai"],
        "options_hi": ["अरुंधति रॉय", "किरण देसाई", "झुम्पा लाहिड़ी", "अनिता देसाई"],
        "answer_en": "Arundhati Roy",
        "answer_hi": "अरुंधति रॉय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the function of the nephron in the kidney?",
        "question_hi": "वृक्क में नेफ्रॉन का कार्य क्या है?",
        "options_en": ["Blood filtration", "Hormone production", "Acid-base balance", "All of the above"],
        "options_hi": ["रक्त निस्पंदन", "हार्मोन उत्पादन", "अम्ल-क्षार संतुलन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the value of ∫(1/√(1-x²)) dx?",
        "question_hi": "∫(1/√(1-x²)) dx का मान क्या है?",
        "options_en": ["sin⁻¹x + C", "cos⁻¹x + C", "tan⁻¹x + C", "sec⁻¹x + C"],
        "options_hi": ["sin⁻¹x + C", "cos⁻¹x + C", "tan⁻¹x + C", "sec⁻¹x + C"],
        "answer_en": "sin⁻¹x + C",
        "answer_hi": "sin⁻¹x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which law explains the working of a rocket?",
        "question_hi": "कौन सा नियम रॉकेट के कार्य करने की व्याख्या करता है?",
        "options_en": ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
        "options_hi": ["न्यूटन का पहला नियम", "न्यूटन का दूसरा नियम", "न्यूटन का तीसरा नियम", "गुरुत्वाकर्षण का नियम"],
        "answer_en": "Newton's Third Law",
        "answer_hi": "न्यूटन का तीसरा नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which of the following is used as an antacid?",
        "question_hi": "निम्नलिखित में से किसका उपयोग एंटासिड के रूप में किया जाता है?",
        "options_en": ["NaOH", "NaHCO₃", "KOH", "H₂SO₄"],
        "options_hi": ["NaOH", "NaHCO₃", "KOH", "H₂SO₄"],
        "answer_en": "NaHCO₃",
        "answer_hi": "NaHCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Who wrote the play 'Mrichchhakatika'?",
        "question_hi": "'मृच्छकटिका' नाटक किसने लिखा?",
        "options_en": ["Kalidasa", "Sudraka", "Bhasa", "Bhavabhuti"],
        "options_hi": ["कालिदास", "शूद्रक", "भास", "भवभूति"],
        "answer_en": "Sudraka",
        "answer_hi": "शूद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which cells in the human body are responsible for producing antibodies?",
        "question_hi": "मानव शरीर में कौन सी कोशिकाएं एंटीबॉडी उत्पन्न करने के लिए जिम्मेदार हैं?",
        "options_en": ["Red blood cells", "Platelets", "B-lymphocytes", "T-lymphocytes"],
        "options_hi": ["लाल रक्त कोशिकाएं", "प्लेटलेट्स", "बी-लिम्फोसाइट्स", "टी-लिम्फोसाइट्स"],
        "answer_en": "B-lymphocytes",
        "answer_hi": "बी-लिम्फोसाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the value of d/dx(cot x)?",
        "question_hi": "d/dx(cot x) का मान क्या है?",
        "options_en": ["-cosec²x", "cosec²x", "-sec²x", "sec²x"],
        "options_hi": ["-cosec²x", "cosec²x", "-sec²x", "sec²x"],
        "answer_en": "-cosec²x",
        "answer_hi": "-cosec²x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the unit of electric charge?",
        "question_hi": "विद्युत आवेश की इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Coulomb", "Ohm"],
        "options_hi": ["वोल्ट", "एम्पियर", "कूलम्ब", "ओम"],
        "answer_en": "Coulomb",
        "answer_hi": "कूलम्ब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which of the following is a greenhouse gas?",
        "question_hi": "निम्नलिखित में से कौन सी एक ग्रीनहाउस गैस है?",
        "options_en": ["Oxygen", "Nitrogen", "Methane", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "मीथेन", "हाइड्रोजन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Who wrote the epic 'Ramcharitmanas'?",
        "question_hi": "'रामचरितमानस' महाकाव्य किसने लिखा?",
        "options_en": ["Tulsidas", "Surdas", "Kabir", "Mirabai"],
        "options_hi": ["तुलसीदास", "सूरदास", "कबीर", "मीराबाई"],
        "answer_en": "Tulsidas",
        "answer_hi": "तुलसीदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the process of conversion of glucose to glycogen called?",
        "question_hi": "ग्लूकोज को ग्लाइकोजन में परिवर्तित करने की प्रक्रिया को क्या कहा जाता है?",
        "options_en": ["Glycolysis", "Gluconeogenesis", "Glycogenesis", "Glycogenolysis"],
        "options_hi": ["ग्लाइकोलाइसिस", "ग्लूकोनियोजेनेसिस", "ग्लाइकोजेनेसिस", "ग्लाइकोजेनोलाइसिस"],
        "answer_en": "Glycogenesis",
        "answer_hi": "ग्लाइकोजेनेसिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the value of ∫(aˣ dx)?",
        "question_hi": "∫(aˣ dx) का मान क्या है?",
        "options_en": ["aˣ/ln a + C", "aˣ ln a + C", "xaˣ + C", "aˣ/x + C"],
        "options_hi": ["aˣ/ln a + C", "aˣ ln a + C", "xaˣ + C", "aˣ/x + C"],
        "answer_en": "aˣ/ln a + C",
        "answer_hi": "aˣ/ln a + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which principle is used in the working of a hydraulic lift?",
        "question_hi": "हाइड्रोलिक लिफ्ट के कार्य में किस सिद्धांत का उपयोग किया जाता है?",
        "options_en": ["Bernoulli's principle", "Pascal's law", "Archimedes' principle", "Newton's law"],
        "options_hi": ["बर्नौली का सिद्धांत", "पास्कल का नियम", "आर्किमिडीज का सिद्धांत", "न्यूटन का नियम"],
        "answer_en": "Pascal's law",
        "answer_hi": "पास्कल का नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which of the following is an example of a synthetic polymer?",
        "question_hi": "निम्नलिखित में से कौन सिंथेटिक बहुलक का एक उदाहरण है?",
        "options_en": ["Starch", "Cellulose", "Protein", "Nylon"],
        "options_hi": ["स्टार्च", "सेलूलोज", "प्रोटीन", "नायलॉन"],
        "answer_en": "Nylon",
        "answer_hi": "नायलॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Who wrote the poem 'Where the Mind is Without Fear'?",
        "question_hi": "'व्हेयर द माइंड इज विदाउट फियर' कविता किसने लिखी?",
        "options_en": ["Rabindranath Tagore", "Sarojini Naidu", "Sri Aurobindo", "Harivansh Rai Bachchan"],
        "options_hi": ["रबींद्रनाथ टैगोर", "सरोजिनी नायडू", "श्री अरविंद", "हरिवंश राय बच्चन"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which part of the human brain controls voluntary actions?",
        "question_hi": "मानव मस्तिष्क का कौन सा भाग ऐच्छिक क्रियाओं को नियंत्रित करता है?",
        "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
        "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला", "हाइपोथैलेमस"],
        "answer_en": "Cerebrum",
        "answer_hi": "सेरेब्रम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the value of ∫(1/(1+x²)) dx?",
        "question_hi": "∫(1/(1+x²)) dx का मान क्या है?",
        "options_en": ["tan⁻¹x + C", "cot⁻¹x + C", "sin⁻¹x + C", "cos⁻¹x + C"],
        "options_hi": ["tan⁻¹x + C", "cot⁻¹x + C", "sin⁻¹x + C", "cos⁻¹x + C"],
        "answer_en": "tan⁻¹x + C",
        "answer_hi": "tan⁻¹x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the phenomenon of splitting of white light into its constituent colors called?",
        "question_hi": "सफेद प्रकाश के उसके घटक रंगों में विभाजन की घटना को क्या कहा जाता है?",
        "options_en": ["Reflection", "Refraction", "Dispersion", "Scattering"],
        "options_hi": ["परावर्तन", "अपवर्तन", "विक्षेपण", "प्रकीर्णन"],
        "answer_en": "Dispersion",
        "answer_hi": "विक्षेपण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which of the following is used as a catalyst in the contact process?",
        "question_hi": "संपर्क प्रक्रिया में निम्नलिखित में से किसका उपयोग उत्प्रेरक के रूप में किया जाता है?",
        "options_en": ["Iron", "Vanadium pentoxide", "Platinum", "Nickel"],
        "options_hi": ["आयरन", "वैनेडियम पेंटॉक्साइड", "प्लैटिनम", "निकेल"],
        "answer_en": "Vanadium pentoxide",
        "answer_hi": "वैनेडियम पेंटॉक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Who wrote the novel 'The Namesake'?",
        "question_hi": "'द नेमसेक' उपन्यास किसने लिखा?",
        "options_en": ["Jhumpa Lahiri", "Chitra Banerjee", "Bharati Mukherjee", "Anita Desai"],
        "options_hi": ["झुम्पा लाहिड़ी", "चित्रा बनर्जी", "भारती मुखर्जी", "अनिता देसाई"],
        "answer_en": "Jhumpa Lahiri",
        "answer_hi": "झुम्पा लाहिड़ी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which vitamin deficiency causes Beri-Beri disease?",
        "question_hi": "किस विटामिन की कमी से बेरी-बेरी रोग होता है?",
        "options_en": ["Vitamin A", "Vitamin B1", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B1", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन B1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the value of d/dx(sin⁻¹x)?",
        "question_hi": "d/dx(sin⁻¹x) का मान क्या है?",
        "options_en": ["1/√(1-x²)", "-1/√(1-x²)", "1/(1+x²)", "-1/(1+x²)"],
        "options_hi": ["1/√(1-x²)", "-1/√(1-x²)", "1/(1+x²)", "-1/(1+x²)"],
        "answer_en": "1/√(1-x²)",
        "answer_hi": "1/√(1-x²)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
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
        "num": 90,
        "question_en": "Which of the following is a natural polymer?",
        "question_hi": "निम्नलिखित में से कौन प्राकृतिक बहुलक है?",
        "options_en": ["Polythene", "PVC", "Rubber", "Nylon"],
        "options_hi": ["पॉलीथीन", "PVC", "रबर", "नायलॉन"],
        "answer_en": "Rubber",
        "answer_hi": "रबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Who wrote the play 'Hayavadana'?",
        "question_hi": "'हयवदन' नाटक किसने लिखा?",
        "options_en": ["Girish Karnad", "Vijay Tendulkar", "Badal Sircar", "Mohan Rakesh"],
        "options_hi": ["गिरीश कार्नाड", "विजय तेंदुलकर", "बादल सरकार", "मोहन राकेश"],
        "answer_en": "Girish Karnad",
        "answer_hi": "गिरीश कार्नाड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which organ in the human body produces insulin?",
        "question_hi": "मानव शरीर में कौन सा अंग इंसुलिन उत्पन्न करता है?",
        "options_en": ["Liver", "Pancreas", "Kidney", "Spleen"],
        "options_hi": ["यकृत", "अग्न्याशय", "गुर्दा", "तिल्ली"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the value of ∫(eˣ + e⁻ˣ) dx?",
        "question_hi": "∫(eˣ + e⁻ˣ) dx का मान क्या है?",
        "options_en": ["eˣ - e⁻ˣ + C", "eˣ + e⁻ˣ + C", "eˣ + C", "e⁻ˣ + C"],
        "options_hi": ["eˣ - e⁻ˣ + C", "eˣ + e⁻ˣ + C", "eˣ + C", "e⁻ˣ + C"],
        "answer_en": "eˣ - e⁻ˣ + C",
        "answer_hi": "eˣ - e⁻ˣ + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which law explains the bending of light when it passes from one medium to another?",
        "question_hi": "कौन सा नियम प्रकाश के एक माध्यम से दूसरे माध्यम में जाने पर मुड़ने की व्याख्या करता है?",
        "options_en": ["Law of reflection", "Snell's law", "Law of dispersion", "Law of scattering"],
        "options_hi": ["परावर्तन का नियम", "स्नेल का नियम", "विक्षेपण का नियम", "प्रकीर्णन का नियम"],
        "answer_en": "Snell's law",
        "answer_hi": "स्नेल का नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which of the following is used in the preparation of bakelite?",
        "question_hi": "बेकेलाइट की तैयारी में निम्नलिखित में से किसका उपयोग किया जाता है?",
        "options_en": ["Formaldehyde and phenol", "Urea and formaldehyde", "Vinyl chloride", "Styrene"],
        "options_hi": ["फॉर्मेल्डिहाइड और फिनॉल", "यूरिया और फॉर्मेल्डिहाइड", "विनाइल क्लोराइड", "स्टाइरीन"],
        "answer_en": "Formaldehyde and phenol",
        "answer_hi": "फॉर्मेल्डिहाइड और फिनॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Who wrote the poem 'Stopping by Woods on a Snowy Evening'?",
        "question_hi": "'स्टॉपिंग बाई वुड्स ऑन ए स्नोई इवनिंग' कविता किसने लिखी?",
        "options_en": ["Robert Frost", "William Wordsworth", "John Keats", "P.B. Shelley"],
        "options_hi": ["रॉबर्ट फ्रॉस्ट", "विलियम वर्ड्सवर्थ", "जॉन कीट्स", "पी.बी. शेली"],
        "answer_en": "Robert Frost",
        "answer_hi": "रॉबर्ट फ्रॉस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the function of the mitochondria in a cell?",
        "question_hi": "कोशिका में माइटोकॉन्ड्रिया का कार्य क्या है?",
        "options_en": ["Protein synthesis", "Energy production", "Lipid synthesis", "Waste elimination"],
        "options_hi": ["प्रोटीन संश्लेषण", "ऊर्जा उत्पादन", "लिपिड संश्लेषण", "अपशिष्ट उन्मूलन"],
        "answer_en": "Energy production",
        "answer_hi": "ऊर्जा उत्पादन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the value of ∫(1/x) dx?",
        "question_hi": "∫(1/x) dx का मान क्या है?",
        "options_en": ["ln|x| + C", "x + C", "1/x² + C", "x²/2 + C"],
        "options_hi": ["ln|x| + C", "x + C", "1/x² + C", "x²/2 + C"],
        "answer_en": "ln|x| + C",
        "answer_hi": "ln|x| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the principle behind the working of a refrigerator?",
        "question_hi": "रेफ्रिजरेटर के कार्य करने का सिद्धांत क्या है?",
        "options_en": ["Joule-Thomson effect", "Thermoelectric effect", "Vapor compression", "Magnetic cooling"],
        "options_hi": ["जूल-थॉमसन प्रभाव", "थर्मोइलेक्ट्रिक प्रभाव", "वाष्प संपीड़न", "चुंबकीय शीतलन"],
        "answer_en": "Vapor compression",
        "answer_hi": "वाष्प संपीड़न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which of the following is used as an analgesic?",
        "question_hi": "निम्नलिखित में से किसका उपयोग पीड़ाहारी के रूप में किया जाता है?",
        "options_en": ["Aspirin", "Penicillin", "Streptomycin", "Chloramphenicol"],
        "options_hi": ["एस्पिरिन", "पेनिसिलिन", "स्ट्रेप्टोमाइसिन", "क्लोरैम्फेनिकॉल"],
        "answer_en": "Aspirin",
        "answer_hi": "एस्पिरिन",
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