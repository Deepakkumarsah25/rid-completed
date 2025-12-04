const questions = [
    {
        "num": 1,
        "question_en": "What is the process by which plants lose water vapor through stomata?",
        "question_hi": "पौधों द्वारा रंध्रों के माध्यम से जल वाष्प खोने की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Transpiration", "Photosynthesis", "Respiration", "Osmosis"],
        "options_hi": ["वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "श्वसन", "परासरण"],
        "answer_en": "Transpiration",
        "answer_hi": "वाष्पोत्सर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the chemical formula of Potassium Permanganate?",
        "question_hi": "पोटेशियम परमैंगनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["KMnO₄", "K₂MnO₄", "KMnO₂", "K₂MnO₃"],
        "options_hi": ["KMnO₄", "K₂MnO₄", "KMnO₂", "K₂MnO₃"],
        "answer_en": "KMnO₄",
        "answer_hi": "KMnO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Who discovered the phenomenon of electromagnetic induction?",
        "question_hi": "विद्युत चुम्बकीय प्रेरण की घटना की खोज किसने की?",
        "options_en": ["Michael Faraday", "James Clerk Maxwell", "Thomas Edison", "Nikola Tesla"],
        "options_hi": ["माइकल फैराडे", "जेम्स क्लर्क मैक्सवेल", "थॉमस एडिसन", "निकोला टेस्ला"],
        "answer_en": "Michael Faraday",
        "answer_hi": "माइकल फैराडे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the value of the determinant |2 3; 1 4|?",
        "question_hi": "सारणिक |2 3; 1 4| का मान क्या है?",
        "options_en": ["5", "8", "11", "14"],
        "options_hi": ["5", "8", "11", "14"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
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
        "num": 6,
        "question_en": "Which gland in the human body is known as the 'master gland'?",
        "question_hi": "मानव शरीर में किस ग्रंथि को 'मास्टर ग्रंथि' कहा जाता है?",
        "options_en": ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
        "options_hi": ["थायरॉइड", "पिट्यूटरी", "एड्रेनल", "अग्न्याशय"],
        "answer_en": "Pituitary",
        "answer_hi": "पिट्यूटरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the common name of CaOCl₂?",
        "question_hi": "CaOCl₂ का सामान्य नाम क्या है?",
        "options_en": ["Bleaching powder", "Washing soda", "Baking soda", "Plaster of Paris"],
        "options_hi": ["विरंजक चूर्ण", "धोने का सोडा", "बेकिंग सोडा", "प्लास्टर ऑफ पेरिस"],
        "answer_en": "Bleaching powder",
        "answer_hi": "विरंजक चूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the SI unit of magnetic field strength?",
        "question_hi": "चुंबकीय क्षेत्र सामर्थ्य की SI इकाई क्या है?",
        "options_en": ["Tesla", "Weber", "Henry", "Gauss"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the value of ∫(3x² dx)?",
        "question_hi": "∫(3x² dx) का मान क्या है?",
        "options_en": ["x³ + C", "3x³ + C", "x³/3 + C", "3x³/3 + C"],
        "options_hi": ["x³ + C", "3x³ + C", "x³/3 + C", "3x³/3 + C"],
        "answer_en": "x³ + C",
        "answer_hi": "x³ + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Who is the author of the novel 'The God of Small Things'?",
        "question_hi": "'द गॉड ऑफ स्मॉल थिंग्स' उपन्यास की लेखिका कौन हैं?",
        "options_en": ["Arundhati Roy", "Kiran Desai", "Jhumpa Lahiri", "Anita Desai"],
        "options_hi": ["अरुंधति रॉय", "किरण देसाई", "झुम्पा लाहिड़ी", "अनिता देसाई"],
        "answer_en": "Arundhati Roy",
        "answer_hi": "अरुंधति रॉय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the function of hemoglobin in blood?",
        "question_hi": "रक्त में हीमोग्लोबिन का कार्य क्या है?",
        "options_en": ["Fight infection", "Carry oxygen", "Clot blood", "Produce antibodies"],
        "options_hi": ["संक्रमण से लड़ना", "ऑक्सीजन ले जाना", "रक्त का थक्का जमाना", "प्रतिरक्षी उत्पन्न करना"],
        "answer_en": "Carry oxygen",
        "answer_hi": "ऑक्सीजन ले जाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the oxidation state of oxygen in H₂O₂?",
        "question_hi": "H₂O₂ में ऑक्सीजन की ऑक्सीकरण अवस्था क्या है?",
        "options_en": ["-2", "-1", "+1", "+2"],
        "options_hi": ["-2", "-1", "+1", "+2"],
        "answer_en": "-1",
        "answer_hi": "-1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the principle behind the working of a rocket?",
        "question_hi": "रॉकेट के कार्य करने का सिद्धांत क्या है?",
        "options_en": ["Newton's first law", "Newton's second law", "Newton's third law", "Law of gravitation"],
        "options_hi": ["न्यूटन का पहला नियम", "न्यूटन का दूसरा नियम", "न्यूटन का तीसरा नियम", "गुरुत्वाकर्षण का नियम"],
        "answer_en": "Newton's third law",
        "answer_hi": "न्यूटन का तीसरा नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the value of sin(2θ)?",
        "question_hi": "sin(2θ) का मान क्या है?",
        "options_en": ["2sinθcosθ", "sin²θ - cos²θ", "2sinθ", "sinθ + cosθ"],
        "options_hi": ["2sinθcosθ", "sin²θ - cos²θ", "2sinθ", "sinθ + cosθ"],
        "answer_en": "2sinθcosθ",
        "answer_hi": "2sinθcosθ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Who wrote the play 'Pygmalion'?",
        "question_hi": "'पिगमेलियन' नाटक किसने लिखा?",
        "options_en": ["George Bernard Shaw", "William Shakespeare", "Oscar Wilde", "Samuel Beckett"],
        "options_hi": ["जॉर्ज बर्नार्ड शॉ", "विलियम शेक्सपियर", "ऑस्कर वाइल्ड", "सैमुअल बेकेट"],
        "answer_en": "George Bernard Shaw",
        "answer_hi": "जॉर्ज बर्नार्ड शॉ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the process of conversion of glucose to pyruvate called?",
        "question_hi": "ग्लूकोज के पाइरुवेट में परिवर्तन की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Glycolysis", "Krebs cycle", "Electron transport chain", "Fermentation"],
        "options_hi": ["ग्लाइकोलाइसिस", "क्रेब्स चक्र", "इलेक्ट्रॉन परिवहन श्रृंखला", "किण्वन"],
        "answer_en": "Glycolysis",
        "answer_hi": "ग्लाइकोलाइसिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the IUPAC name of CH₃-CH₂-OH?",
        "question_hi": "CH₃-CH₂-OH का IUPAC नाम क्या है?",
        "options_en": ["Ethanol", "Methanol", "Propanol", "Butanol"],
        "options_hi": ["एथनॉल", "मेथनॉल", "प्रोपेनॉल", "ब्यूटेनॉल"],
        "answer_en": "Ethanol",
        "answer_hi": "एथनॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the phenomenon of splitting of white light into its constituent colors called?",
        "question_hi": "सफेद प्रकाश के उसके घटक रंगों में विभक्त होने की घटना को क्या कहते हैं?",
        "options_en": ["Dispersion", "Refraction", "Reflection", "Diffraction"],
        "options_hi": ["विक्षेपण", "अपवर्तन", "परावर्तन", "विवर्तन"],
        "answer_en": "Dispersion",
        "answer_hi": "विक्षेपण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the probability of getting a head when a coin is tossed?",
        "question_hi": "सिक्का उछालने पर हेड आने की प्रायिकता क्या है?",
        "options_en": ["1/2", "1/4", "3/4", "1"],
        "options_hi": ["1/2", "1/4", "3/4", "1"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Who wrote the novel 'The White Tiger'?",
        "question_hi": "'द व्हाइट टाइगर' उपन्यास किसने लिखा?",
        "options_en": ["Aravind Adiga", "Vikram Seth", "Salman Rushdie", "Amitav Ghosh"],
        "options_hi": ["अरविंद अडिगा", "विक्रम सेठ", "सलमान रुश्दी", "अमिताव घोष"],
        "answer_en": "Aravind Adiga",
        "answer_hi": "अरविंद अडिगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the function of the enzyme amylase?",
        "question_hi": "एंजाइम एमाइलेज का कार्य क्या है?",
        "options_en": ["Breakdown of proteins", "Breakdown of fats", "Breakdown of starch", "Breakdown of cellulose"],
        "options_hi": ["प्रोटीन का विघटन", "वसा का विघटन", "स्टार्च का विघटन", "सेल्यूलोज का विघटन"],
        "answer_en": "Breakdown of starch",
        "answer_hi": "स्टार्च का विघटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the coordination number in a body-centered cubic structure?",
        "question_hi": "काय-केंद्रित घनीय संरचना में उपसहसंयोजन संख्या क्या है?",
        "options_en": ["6", "8", "12", "4"],
        "options_hi": ["6", "8", "12", "4"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the unit of capacitance?",
        "question_hi": "धारिता की इकाई क्या है?",
        "options_en": ["Farad", "Henry", "Ohm", "Siemens"],
        "options_hi": ["फैरड", "हेनरी", "ओम", "सीमेंस"],
        "answer_en": "Farad",
        "answer_hi": "फैरड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the value of d/dx(ln x)?",
        "question_hi": "d/dx(ln x) का मान क्या है?",
        "options_en": ["1/x", "x", "e^x", "1"],
        "options_hi": ["1/x", "x", "e^x", "1"],
        "answer_en": "1/x",
        "answer_hi": "1/x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Who wrote the poem 'Where the Mind is Without Fear'?",
        "question_hi": "'व्हेयर द माइंड इज़ विदाउट फियर' कविता किसने लिखी?",
        "options_en": ["Rabindranath Tagore", "Sarojini Naidu", "Harivansh Rai Bachchan", "Mahadevi Verma"],
        "options_hi": ["रबींद्रनाथ टैगोर", "सरोजिनी नायडू", "हरिवंश राय बच्चन", "महादेवी वर्मा"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the site of protein synthesis in a cell?",
        "question_hi": "कोशिका में प्रोटीन संश्लेषण का स्थल क्या है?",
        "options_en": ["Mitochondria", "Ribosome", "Nucleus", "Golgi apparatus"],
        "options_hi": ["माइटोकॉन्ड्रिया", "राइबोसोम", "केंद्रक", "गॉल्जी उपकरण"],
        "answer_en": "Ribosome",
        "answer_hi": "राइबोसोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the formula of ozone?",
        "question_hi": "ओजोन का सूत्र क्या है?",
        "options_en": ["O₂", "O₃", "O₄", "HO"],
        "options_hi": ["O₂", "O₃", "O₄", "HO"],
        "answer_en": "O₃",
        "answer_hi": "O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the principle of conservation of charge?",
        "question_hi": "आवेश संरक्षण का सिद्धांत क्या है?",
        "options_en": ["Charge can be created", "Charge can be destroyed", "Total charge remains constant", "Charge decreases with time"],
        "options_hi": ["आवेश बनाया जा सकता है", "आवेश नष्ट किया जा सकता है", "कुल आवेश स्थिर रहता है", "आवेश समय के साथ घटता है"],
        "answer_en": "Total charge remains constant",
        "answer_hi": "कुल आवेश स्थिर रहता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the value of cos(2θ)?",
        "question_hi": "cos(2θ) का मान क्या है?",
        "options_en": ["cos²θ - sin²θ", "2cosθsinθ", "cos²θ + sin²θ", "2cosθ"],
        "options_hi": ["cos²θ - sin²θ", "2cosθsinθ", "cos²θ + sin²θ", "2cosθ"],
        "answer_en": "cos²θ - sin²θ",
        "answer_hi": "cos²θ - sin²θ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
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
        "num": 31,
        "question_en": "What is the function of the xylem in plants?",
        "question_hi": "पौधों में जाइलम का कार्य क्या है?",
        "options_en": ["Transport of food", "Transport of water", "Photosynthesis", "Storage of food"],
        "options_hi": ["भोजन का परिवहन", "जल का परिवहन", "प्रकाश संश्लेषण", "भोजन का भंडारण"],
        "answer_en": "Transport of water",
        "answer_hi": "जल का परिवहन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the common name of Na₂CO₃.10H₂O?",
        "question_hi": "Na₂CO₃.10H₂O का सामान्य नाम क्या है?",
        "options_en": ["Washing soda", "Baking soda", "Caustic soda", "Baking powder"],
        "options_hi": ["धोने का सोडा", "बेकिंग सोडा", "कास्टिक सोडा", "बेकिंग पाउडर"],
        "answer_en": "Washing soda",
        "answer_hi": "धोने का सोडा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the unit of inductance?",
        "question_hi": "प्रेरकत्व की इकाई क्या है?",
        "options_en": ["Henry", "Farad", "Ohm", "Weber"],
        "options_hi": ["हेनरी", "फैरड", "ओम", "वेबर"],
        "answer_en": "Henry",
        "answer_hi": "हेनरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the value of ∫e^x dx?",
        "question_hi": "∫e^x dx का मान क्या है?",
        "options_en": ["e^x + C", "xe^x + C", "e^x/x + C", "ln x + C"],
        "options_hi": ["e^x + C", "xe^x + C", "e^x/x + C", "ln x + C"],
        "answer_en": "e^x + C",
        "answer_hi": "e^x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Who wrote the play 'Death of a Salesman'?",
        "question_hi": "'डेथ ऑफ ए सेल्समैन' नाटक किसने लिखा?",
        "options_en": ["Arthur Miller", "Tennessee Williams", "Eugene O'Neill", "Samuel Beckett"],
        "options_hi": ["आर्थर मिलर", "टेनेसी विलियम्स", "यूजीन ओ'नील", "सैमुअल बेकेट"],
        "answer_en": "Arthur Miller",
        "answer_hi": "आर्थर मिलर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the genetic disorder caused by an extra chromosome 21?",
        "question_hi": "गुणसूत्र 21 की अतिरिक्त प्रति के कारण होने वाला आनुवंशिक विकार कौन सा है?",
        "options_en": ["Down syndrome", "Turner syndrome", "Klinefelter syndrome", "Hemophilia"],
        "options_hi": ["डाउन सिंड्रोम", "टर्नर सिंड्रोम", "क्लाइनफेल्टर सिंड्रोम", "हीमोफिलिया"],
        "answer_en": "Down syndrome",
        "answer_hi": "डाउन सिंड्रोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the IUPAC name of CH₃CHO?",
        "question_hi": "CH₃CHO का IUPAC नाम क्या है?",
        "options_en": ["Ethanal", "Methanal", "Propanal", "Butanal"],
        "options_hi": ["एथेनल", "मेथेनल", "प्रोपेनल", "ब्यूटेनल"],
        "answer_en": "Ethanal",
        "answer_hi": "एथेनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the phenomenon of light bending around obstacles called?",
        "question_hi": "प्रकाश का अवरोधों के चारों ओर मुड़ने की घटना को क्या कहते हैं?",
        "options_en": ["Diffraction", "Refraction", "Reflection", "Dispersion"],
        "options_hi": ["विवर्तन", "अपवर्तन", "परावर्तन", "विक्षेपण"],
        "answer_en": "Diffraction",
        "answer_hi": "विवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the value of lim(x→∞) (1 + 1/x)^x?",
        "question_hi": "lim(x→∞) (1 + 1/x)^x का मान क्या है?",
        "options_en": ["0", "1", "e", "∞"],
        "options_hi": ["0", "1", "e", "∞"],
        "answer_en": "e",
        "answer_hi": "e",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Who wrote the novel 'The Great Gatsby'?",
        "question_hi": "'द ग्रेट गैट्सबी' उपन्यास किसने लिखा?",
        "options_en": ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"],
        "options_hi": ["एफ. स्कॉट फिट्ज़गेराल्ड", "अर्नेस्ट हेमिंग्वे", "जॉन स्टीनबेक", "विलियम फॉकनर"],
        "answer_en": "F. Scott Fitzgerald",
        "answer_hi": "एफ. स्कॉट फिट्ज़गेराल्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the function of the phloem in plants?",
        "question_hi": "पौधों में फ्लोएम का कार्य क्या है?",
        "options_en": ["Transport of water", "Transport of food", "Photosynthesis", "Storage of water"],
        "options_hi": ["जल का परिवहन", "भोजन का परिवहन", "प्रकाश संश्लेषण", "जल का भंडारण"],
        "answer_en": "Transport of food",
        "answer_hi": "भोजन का परिवहन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the oxidation state of manganese in KMnO₄?",
        "question_hi": "KMnO₄ में मैंगनीज की ऑक्सीकरण अवस्था क्या है?",
        "options_en": ["+2", "+4", "+6", "+7"],
        "options_hi": ["+2", "+4", "+6", "+7"],
        "answer_en": "+7",
        "answer_hi": "+7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the unit of electric conductivity?",
        "question_hi": "विद्युत चालकता की इकाई क्या है?",
        "options_en": ["Siemens", "Ohm", "Farad", "Henry"],
        "options_hi": ["सीमेंस", "ओम", "फैरड", "हेनरी"],
        "answer_en": "Siemens",
        "answer_hi": "सीमेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the value of d/dx(sin x)?",
        "question_hi": "d/dx(sin x) का मान क्या है?",
        "options_en": ["cos x", "-cos x", "sin x", "-sin x"],
        "options_hi": ["cos x", "-cos x", "sin x", "-sin x"],
        "answer_en": "cos x",
        "answer_hi": "cos x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Who wrote the poem 'Ode to a Nightingale'?",
        "question_hi": "'ओड टू ए नाइटिंगेल' कविता किसने लिखी?",
        "options_en": ["John Keats", "William Wordsworth", "P.B. Shelley", "Lord Byron"],
        "options_hi": ["जॉन कीट्स", "विलियम वर्ड्सवर्थ", "पी.बी. शेली", "लॉर्ड बायरन"],
        "answer_en": "John Keats",
        "answer_hi": "जॉन कीट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the process of formation of urine in kidneys called?",
        "question_hi": "गुर्दों में मूत्र के निर्माण की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Filtration", "Reabsorption", "Secretion", "All of the above"],
        "options_hi": ["छनन", "पुनःअवशोषण", "स्राव", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the formula of quicklime?",
        "question_hi": "बिना बुझा चूना का सूत्र क्या है?",
        "options_en": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "options_hi": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "answer_en": "CaO",
        "answer_hi": "CaO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the principle of superposition of waves?",
        "question_hi": "तरंगों के अध्यारोपण का सिद्धांत क्या है?",
        "options_en": ["Waves cancel each other", "Waves add algebraically", "Waves multiply", "Waves divide"],
        "options_hi": ["तरंगें एक दूसरे को रद्द करती हैं", "तरंगें बीजगणितीय रूप से जुड़ती हैं", "तरंगें गुणा होती हैं", "तरंगें विभाजित होती हैं"],
        "answer_en": "Waves add algebraically",
        "answer_hi": "तरंगें बीजगणितीय रूप से जुड़ती हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the value of ∫(1/x dx)?",
        "question_hi": "∫(1/x dx) का मान क्या है?",
        "options_en": ["ln x + C", "x + C", "1/x² + C", "x²/2 + C"],
        "options_hi": ["ln x + C", "x + C", "1/x² + C", "x²/2 + C"],
        "answer_en": "ln x + C",
        "answer_hi": "ln x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Who wrote the novel 'The Catcher in the Rye'?",
        "question_hi": "'द कैचर इन द राई' उपन्यास किसने लिखा?",
        "options_en": ["J.D. Salinger", "Mark Twain", "Charles Dickens", "Jane Austen"],
        "options_hi": ["जे.डी. सेलिंजर", "मार्क ट्वेन", "चार्ल्स डिकेंस", "जेन ऑस्टेन"],
        "answer_en": "J.D. Salinger",
        "answer_hi": "जे.डी. सेलिंजर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the function of the stomata in plants?",
        "question_hi": "पौधों में रंध्रों का कार्य क्या है?",
        "options_en": ["Photosynthesis", "Gas exchange", "Water absorption", "Food storage"],
        "options_hi": ["प्रकाश संश्लेषण", "गैस विनिमय", "जल अवशोषण", "भोजन भंडारण"],
        "answer_en": "Gas exchange",
        "answer_hi": "गैस विनिमय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the common name of CaSO₄.½H₂O?",
        "question_hi": "CaSO₄.½H₂O का सामान्य नाम क्या है?",
        "options_en": ["Plaster of Paris", "Gypsum", "Bleaching powder", "Washing soda"],
        "options_hi": ["प्लास्टर ऑफ पेरिस", "जिप्सम", "विरंजक चूर्ण", "धोने का सोडा"],
        "answer_en": "Plaster of Paris",
        "answer_hi": "प्लास्टर ऑफ पेरिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the unit of frequency of AC current?",
        "question_hi": "AC धारा की आवृत्ति की इकाई क्या है?",
        "options_en": ["Hertz", "Watt", "Volt", "Ampere"],
        "options_hi": ["हर्ट्ज", "वाट", "वोल्ट", "एम्पियर"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the value of d/dx(cos x)?",
        "question_hi": "d/dx(cos x) का मान क्या है?",
        "options_en": ["-sin x", "sin x", "-cos x", "cos x"],
        "options_hi": ["-sin x", "sin x", "-cos x", "cos x"],
        "answer_en": "-sin x",
        "answer_hi": "-sin x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Who wrote the play 'The Glass Menagerie'?",
        "question_hi": "'द ग्लास मेनाजेरी' नाटक किसने लिखा?",
        "options_en": ["Tennessee Williams", "Arthur Miller", "Eugene O'Neill", "Samuel Beckett"],
        "options_hi": ["टेनेसी विलियम्स", "आर्थर मिलर", "यूजीन ओ'नील", "सैमुअल बेकेट"],
        "answer_en": "Tennessee Williams",
        "answer_hi": "टेनेसी विलियम्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the hormone responsible for regulating blood sugar levels?",
        "question_hi": "रक्त शर्करा स्तर को नियंत्रित करने वाला हार्मोन कौन सा है?",
        "options_en": ["Insulin", "Thyroxine", "Adrenaline", "Testosterone"],
        "options_hi": ["इंसुलिन", "थायरॉक्सिन", "एड्रेनालिन", "टेस्टोस्टेरोन"],
        "answer_en": "Insulin",
        "answer_hi": "इंसुलिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the IUPAC name of HCOOH?",
        "question_hi": "HCOOH का IUPAC नाम क्या है?",
        "options_en": ["Methanoic acid", "Ethanoic acid", "Propanoic acid", "Butanoic acid"],
        "options_hi": ["मेथेनोइक अम्ल", "एथेनोइक अम्ल", "प्रोपेनोइक अम्ल", "ब्यूटेनोइक अम्ल"],
        "answer_en": "Methanoic acid",
        "answer_hi": "मेथेनोइक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the phenomenon of light changing direction when passing through different media?",
        "question_hi": "विभिन्न माध्यमों से गुजरते समय प्रकाश की दिशा बदलने की घटना को क्या कहते हैं?",
        "options_en": ["Refraction", "Reflection", "Diffraction", "Dispersion"],
        "options_hi": ["अपवर्तन", "परावर्तन", "विवर्तन", "विक्षेपण"],
        "answer_en": "Refraction",
        "answer_hi": "अपवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the value of ∫(sec²x dx)?",
        "question_hi": "∫(sec²x dx) का मान क्या है?",
        "options_en": ["tan x + C", "sec x + C", "cot x + C", "cosec x + C"],
        "options_hi": ["tan x + C", "sec x + C", "cot x + C", "cosec x + C"],
        "answer_en": "tan x + C",
        "answer_hi": "tan x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Who wrote the novel 'The Old Man and the Sea'?",
        "question_hi": "'द ओल्ड मैन एंड द सी' उपन्यास किसने लिखा?",
        "options_en": ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner"],
        "options_hi": ["अर्नेस्ट हेमिंग्वे", "एफ. स्कॉट फिट्ज़गेराल्ड", "जॉन स्टीनबेक", "विलियम फॉकनर"],
        "answer_en": "Ernest Hemingway",
        "answer_hi": "अर्नेस्ट हेमिंग्वे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the function of the chloroplast in plant cells?",
        "question_hi": "पादप कोशिकाओं में हरितलवक का कार्य क्या है?",
        "options_en": ["Cellular respiration", "Photosynthesis", "Protein synthesis", "DNA replication"],
        "options_hi": ["कोशिकीय श्वसन", "प्रकाश संश्लेषण", "प्रोटीन संश्लेषण", "DNA प्रतिकृति"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the formula of slaked lime?",
        "question_hi": "बुझा चूना का सूत्र क्या है?",
        "options_en": ["Ca(OH)₂", "CaO", "CaCO₃", "CaSO₄"],
        "options_hi": ["Ca(OH)₂", "CaO", "CaCO₃", "CaSO₄"],
        "answer_en": "Ca(OH)₂",
        "answer_hi": "Ca(OH)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the unit of electric power?",
        "question_hi": "विद्युत शक्ति की इकाई क्या है?",
        "options_en": ["Watt", "Joule", "Volt", "Ampere"],
        "options_hi": ["वाट", "जूल", "वोल्ट", "एम्पियर"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the value of d/dx(tan x)?",
        "question_hi": "d/dx(tan x) का मान क्या है?",
        "options_en": ["sec²x", "cosec²x", "sec x tan x", "-cosec x cot x"],
        "options_hi": ["sec²x", "cosec²x", "sec x tan x", "-cosec x cot x"],
        "answer_en": "sec²x",
        "answer_hi": "sec²x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Who wrote the poem 'The Waste Land'?",
        "question_hi": "'द वेस्ट लैंड' कविता किसने लिखी?",
        "options_en": ["T.S. Eliot", "W.B. Yeats", "Ezra Pound", "Robert Frost"],
        "options_hi": ["टी.एस. एलियट", "डब्ल्यू.बी. येट्स", "एजरा पाउंड", "रॉबर्ट फ्रॉस्ट"],
        "answer_en": "T.S. Eliot",
        "answer_hi": "टी.एस. एलियट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the process of conversion of light energy to chemical energy in plants?",
        "question_hi": "पौधों में प्रकाश ऊर्जा के रासायनिक ऊर्जा में परिवर्तन की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"],
        "options_hi": ["प्रकाश संश्लेषण", "श्वसन", "वाष्पोत्सर्जन", "किण्वन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the formula of baking soda?",
        "question_hi": "बेकिंग सोडा का सूत्र क्या है?",
        "options_en": ["NaHCO₃", "Na₂CO₃", "NaOH", "NaCl"],
        "options_hi": ["NaHCO₃", "Na₂CO₃", "NaOH", "NaCl"],
        "answer_en": "NaHCO₃",
        "answer_hi": "NaHCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the unit of electric resistance?",
        "question_hi": "विद्युत प्रतिरोध की इकाई क्या है?",
        "options_en": ["Ohm", "Volt", "Ampere", "Watt"],
        "options_hi": ["ओम", "वोल्ट", "एम्पियर", "वाट"],
        "answer_en": "Ohm",
        "answer_hi": "ओम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the value of ∫(cosec²x dx)?",
        "question_hi": "∫(cosec²x dx) का मान क्या है?",
        "options_en": ["-cot x + C", "cot x + C", "-tan x + C", "tan x + C"],
        "options_hi": ["-cot x + C", "cot x + C", "-tan x + C", "tan x + C"],
        "answer_en": "-cot x + C",
        "answer_hi": "-cot x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Who wrote the novel 'The Picture of Dorian Gray'?",
        "question_hi": "'द पिक्चर ऑफ डोरियन ग्रे' उपन्यास किसने लिखा?",
        "options_en": ["Oscar Wilde", "Charles Dickens", "Jane Austen", "George Eliot"],
        "options_hi": ["ऑस्कर वाइल्ड", "चार्ल्स डिकेंस", "जेन ऑस्टेन", "जॉर्ज एलियट"],
        "answer_en": "Oscar Wilde",
        "answer_hi": "ऑस्कर वाइल्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the function of the mitochondria in cells?",
        "question_hi": "कोशिकाओं में माइटोकॉन्ड्रिया का कार्य क्या है?",
        "options_en": ["Protein synthesis", "Energy production", "Lipid synthesis", "Waste elimination"],
        "options_hi": ["प्रोटीन संश्लेषण", "ऊर्जा उत्पादन", "लिपिड संश्लेषण", "अपशिष्ट निष्कासन"],
        "answer_en": "Energy production",
        "answer_hi": "ऊर्जा उत्पादन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the formula of common salt?",
        "question_hi": "साधारण नमक का सूत्र क्या है?",
        "options_en": ["NaCl", "KCl", "CaCO₃", "Na₂CO₃"],
        "options_hi": ["NaCl", "KCl", "CaCO₃", "Na₂CO₃"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the unit of magnetic flux?",
        "question_hi": "चुंबकीय फ्लक्स की इकाई क्या है?",
        "options_en": ["Weber", "Tesla", "Henry", "Gauss"],
        "options_hi": ["वेबर", "टेस्ला", "हेनरी", "गॉस"],
        "answer_en": "Weber",
        "answer_hi": "वेबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
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
        "num": 75,
        "question_en": "Who wrote the play 'A Streetcar Named Desire'?",
        "question_hi": "'अ स्ट्रीटकार नेम्ड डिज़ायर' नाटक किसने लिखा?",
        "options_en": ["Tennessee Williams", "Arthur Miller", "Eugene O'Neill", "Samuel Beckett"],
        "options_hi": ["टेनेसी विलियम्स", "आर्थर मिलर", "यूजीन ओ'नील", "सैमुअल बेकेट"],
        "answer_en": "Tennessee Williams",
        "answer_hi": "टेनेसी विलियम्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the process of cell division in somatic cells?",
        "question_hi": "दैहिक कोशिकाओं में कोशिका विभाजन की प्रक्रिया क्या है?",
        "options_en": ["Mitosis", "Meiosis", "Binary fission", "Budding"],
        "options_hi": ["समसूत्री विभाजन", "अर्धसूत्री विभाजन", "द्विखंडन", "मुकुलन"],
        "answer_en": "Mitosis",
        "answer_hi": "समसूत्री विभाजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the formula of carbon monoxide?",
        "question_hi": "कार्बन मोनोऑक्साइड का सूत्र क्या है?",
        "options_en": ["CO", "CO₂", "C₂O", "C₃O₂"],
        "options_hi": ["CO", "CO₂", "C₂O", "C₃O₂"],
        "answer_en": "CO",
        "answer_hi": "CO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the unit of luminous flux?",
        "question_hi": "ज्योति फ्लक्स की इकाई क्या है?",
        "options_en": ["Lumen", "Lux", "Candela", "Watt"],
        "options_hi": ["लुमेन", "लक्स", "कैंडेला", "वाट"],
        "answer_en": "Lumen",
        "answer_hi": "लुमेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the value of ∫(sec x tan x dx)?",
        "question_hi": "∫(sec x tan x dx) का मान क्या है?",
        "options_en": ["sec x + C", "tan x + C", "cosec x + C", "cot x + C"],
        "options_hi": ["sec x + C", "tan x + C", "cosec x + C", "cot x + C"],
        "answer_en": "sec x + C",
        "answer_hi": "sec x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Who wrote the novel 'The Lord of the Rings'?",
        "question_hi": "'द लॉर्ड ऑफ द रिंग्स' उपन्यास किसने लिखा?",
        "options_en": ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "George R.R. Martin"],
        "options_hi": ["जे.आर.आर. टॉल्किन", "सी.एस. लुईस", "जे.के. रोलिंग", "जॉर्ज आर.आर. मार्टिन"],
        "answer_en": "J.R.R. Tolkien",
        "answer_hi": "जे.आर.आर. टॉल्किन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the function of the ribosomes in cells?",
        "question_hi": "कोशिकाओं में राइबोसोम का कार्य क्या है?",
        "options_en": ["Energy production", "Protein synthesis", "Lipid synthesis", "DNA replication"],
        "options_hi": ["ऊर्जा उत्पादन", "प्रोटीन संश्लेषण", "लिपिड संश्लेषण", "DNA प्रतिकृति"],
        "answer_en": "Protein synthesis",
        "answer_hi": "प्रोटीन संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
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
        "num": 83,
        "question_en": "What is the unit of electric potential?",
        "question_hi": "विद्युत विभव की इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Volt",
        "answer_hi": "वोल्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the value of d/dx(sec x)?",
        "question_hi": "d/dx(sec x) का मान क्या है?",
        "options_en": ["sec x tan x", "-sec x tan x", "cosec x cot x", "-cosec x cot x"],
        "options_hi": ["sec x tan x", "-sec x tan x", "cosec x cot x", "-cosec x cot x"],
        "answer_en": "sec x tan x",
        "answer_hi": "sec x tan x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Who wrote the poem 'The Raven'?",
        "question_hi": "'द रेवेन' कविता किसने लिखी?",
        "options_en": ["Edgar Allan Poe", "Walt Whitman", "Emily Dickinson", "Robert Frost"],
        "options_hi": ["एडगर एलन पो", "वॉल्ट व्हिटमैन", "एमिली डिकिंसन", "रॉबर्ट फ्रॉस्ट"],
        "answer_en": "Edgar Allan Poe",
        "answer_hi": "एडगर एलन पो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the process of conversion of RNA to protein called?",
        "question_hi": "RNA के प्रोटीन में परिवर्तन की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Transcription", "Translation", "Replication", "Transformation"],
        "options_hi": ["ट्रांसक्रिप्शन", "ट्रांसलेशन", "प्रतिकृति", "रूपांतरण"],
        "answer_en": "Translation",
        "answer_hi": "ट्रांसलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the formula of nitric acid?",
        "question_hi": "नाइट्रिक अम्ल का सूत्र क्या है?",
        "options_en": ["HNO₃", "H₂SO₄", "HCl", "H₃PO₄"],
        "options_hi": ["HNO₃", "H₂SO₄", "HCl", "H₃PO₄"],
        "answer_en": "HNO₃",
        "answer_hi": "HNO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the unit of electric current?",
        "question_hi": "विद्युत धारा की इकाई क्या है?",
        "options_en": ["Ampere", "Volt", "Ohm", "Watt"],
        "options_hi": ["एम्पियर", "वोल्ट", "ओम", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the value of ∫(cosec x cot x dx)?",
        "question_hi": "∫(cosec x cot x dx) का मान क्या है?",
        "options_en": ["-cosec x + C", "cosec x + C", "-sec x + C", "sec x + C"],
        "options_hi": ["-cosec x + C", "cosec x + C", "-sec x + C", "sec x + C"],
        "answer_en": "-cosec x + C",
        "answer_hi": "-cosec x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Who wrote the novel 'The Alchemist'?",
        "question_hi": "'द अलकेमिस्ट' उपन्यास किसने लिखा?",
        "options_en": ["Paulo Coelho", "Gabriel Garcia Marquez", "Isabel Allende", "Jorge Luis Borges"],
        "options_hi": ["पाउलो कोएल्हो", "गेब्रियल गार्सिया मार्केज़", "इसाबेल अलेंदे", "होर्हे लुइस बोर्हेस"],
        "answer_en": "Paulo Coelho",
        "answer_hi": "पाउलो कोएल्हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the function of the Golgi apparatus in cells?",
        "question_hi": "कोशिकाओं में गॉल्जी उपकरण का कार्य क्या है?",
        "options_en": ["Protein synthesis", "Modification and packaging of proteins", "Energy production", "DNA replication"],
        "options_hi": ["प्रोटीन संश्लेषण", "प्रोटीनों का संशोधन और पैकेजिंग", "ऊर्जा उत्पादन", "DNA प्रतिकृति"],
        "answer_en": "Modification and packaging of proteins",
        "answer_hi": "प्रोटीनों का संशोधन और पैकेजिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the formula of hydrochloric acid?",
        "question_hi": "हाइड्रोक्लोरिक अम्ल का सूत्र क्या है?",
        "options_en": ["HCl", "H₂SO₄", "HNO₃", "H₃PO₄"],
        "options_hi": ["HCl", "H₂SO₄", "HNO₃", "H₃PO₄"],
        "answer_en": "HCl",
        "answer_hi": "HCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
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
        "num": 94,
        "question_en": "What is the value of d/dx(cosec x)?",
        "question_hi": "d/dx(cosec x) का मान क्या है?",
        "options_en": ["-cosec x cot x", "cosec x cot x", "-sec x tan x", "sec x tan x"],
        "options_hi": ["-cosec x cot x", "cosec x cot x", "-sec x tan x", "sec x tan x"],
        "answer_en": "-cosec x cot x",
        "answer_hi": "-cosec x cot x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Who wrote the play 'Waiting for Godot'?",
        "question_hi": "'वेटिंग फॉर गोडोट' नाटक किसने लिखा?",
        "options_en": ["Samuel Beckett", "Arthur Miller", "Tennessee Williams", "Eugene O'Neill"],
        "options_hi": ["सैमुअल बेकेट", "आर्थर मिलर", "टेनेसी विलियम्स", "यूजीन ओ'नील"],
        "answer_en": "Samuel Beckett",
        "answer_hi": "सैमुअल बेकेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the process of conversion of DNA to RNA called?",
        "question_hi": "DNA के RNA में परिवर्तन की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Transcription", "Translation", "Replication", "Transformation"],
        "options_hi": ["ट्रांसक्रिप्शन", "ट्रांसलेशन", "प्रतिकृति", "रूपांतरण"],
        "answer_en": "Transcription",
        "answer_hi": "ट्रांसक्रिप्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the formula of phosphoric acid?",
        "question_hi": "फॉस्फोरिक अम्ल का सूत्र क्या है?",
        "options_en": ["H₃PO₄", "H₂SO₄", "HCl", "HNO₃"],
        "options_hi": ["H₃PO₄", "H₂SO₄", "HCl", "HNO₃"],
        "answer_en": "H₃PO₄",
        "answer_hi": "H₃PO₄",
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
        "question_en": "What is the value of ∫(1/√(1-x²) dx)?",
        "question_hi": "∫(1/√(1-x²) dx) का मान क्या है?",
        "options_en": ["sin⁻¹x + C", "cos⁻¹x + C", "tan⁻¹x + C", "cot⁻¹x + C"],
        "options_hi": ["sin⁻¹x + C", "cos⁻¹x + C", "tan⁻¹x + C", "cot⁻¹x + C"],
        "answer_en": "sin⁻¹x + C",
        "answer_hi": "sin⁻¹x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Who wrote the novel 'The Kite Runner'?",
        "question_hi": "'द काइट रनर' उपन्यास किसने लिखा?",
        "options_en": ["Khaled Hosseini", "Orhan Pamuk", "Naguib Mahfouz", "Jhumpa Lahiri"],
        "options_hi": ["खालिद होसैनी", "ओरहान पामुक", "नगीब महफूज़", "झुम्पा लाहिड़ी"],
        "answer_en": "Khaled Hosseini",
        "answer_hi": "खालिद होसैनी",
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