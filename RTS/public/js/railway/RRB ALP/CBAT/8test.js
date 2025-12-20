const questions = [
    {
        num: 1,
        question_en: "If a quantity increases by 20% and then decreases by 25%, what is the net percentage change?",
        question_hi: "यदि एक राशि 20% बढ़ती है और फिर 25% घटती है, तो शुद्ध प्रतिशत परिवर्तन क्या है?",
        options_en: ["5% decrease", "10% decrease", "5% increase", "No change"],
        options_hi: ["5% की कमी", "10% की कमी", "5% की वृद्धि", "कोई परिवर्तन नहीं"],
        answer_en: "10% decrease",
        answer_hi: "10% की कमी",
        attempted: false,
        selected: ""
    },
    {
        num: 2,
        question_en: "The ratio of the ages of A and B is 5:8. After 8 years, the ratio becomes 2:3. What is the present age of B?",
        question_hi: "A और B की आयु का अनुपात 5:8 है। 8 वर्ष बाद, यह अनुपात 2:3 हो जाता है। B की वर्तमान आयु क्या है?",
        options_en: ["24 years", "32 years", "40 years", "48 years"],
        options_hi: ["24 वर्ष", "32 वर्ष", "40 वर्ष", "48 वर्ष"],
        answer_en: "32 years",
        answer_hi: "32 वर्ष",
        attempted: false,
        selected: ""
    },
    {
        num: 3,
        question_en: "The average of 50 numbers is 38. If two numbers, 45 and 55, are discarded, what is the average of the remaining numbers?",
        question_hi: "50 संख्याओं का औसत 38 है। यदि दो संख्याएँ, 45 और 55, हटा दी जाती हैं, तो शेष संख्याओं का औसत क्या है?",
        options_en: ["37.5", "37.9", "38.0", "38.5"],
        options_hi: ["37.5", "37.9", "38.0", "38.5"],
        answer_en: "37.5",
        answer_hi: "37.5",
        attempted: false,
        selected: ""
    },
    {
        num: 4,
        question_en: "Find the missing number: 2, 5, 10, 17, 26, ?",
        question_hi: "लुप्त संख्या ज्ञात कीजिए: 2, 5, 10, 17, 26, ?",
        options_en: ["35", "37", "39", "41"],
        options_hi: ["35", "37", "39", "41"],
        answer_en: "37",
        answer_hi: "37",
        attempted: false,
        selected: ""
    },
    {
        num: 5,
        question_en: "Coding-Decoding: If 'MOUSE' is coded as 'NPTVF', then how is 'KEYBOARD' coded?",
        question_hi: "कोडिंग-डिकोडिंग: यदि 'MOUSE' को 'NPTVF' के रूप में कोडित किया जाता है, तो 'KEYBOARD' को कैसे कोडित किया जाएगा?",
        options_en: ["LFZCPBSE", "LFZCPBQE", "LFZCPBTE", "LFZCPBSF"],
        options_hi: ["LFZCPBSE", "LFZCPBQE", "LFZCPBTE", "LFZCPBSF"],
        answer_en: "LFZCPBSE",
        answer_hi: "LFZCPBSE",
        attempted: false,
        selected: ""
    },
    {
        num: 6,
        question_en: "Analogy: Impulse : N s :: Force : ?",
        question_hi: "सादृश्यता: आवेग : N s :: बल : ?",
        options_en: ["N m", "kg m/s²", "Joule", "kg m/s"],
        options_hi: ["N m", "kg m/s²", "जूल", "kg m/s"],
        answer_en: "kg m/s²",
        answer_hi: "kg m/s²",
        attempted: false,
        selected: ""
    },
    {
        num: 7,
        question_en: "What is the time period of a geostationary satellite?",
        question_hi: "एक भू-स्थिर उपग्रह की समयावधि क्या है?",
        options_en: ["6 hours", "12 hours", "24 hours", "48 hours"],
        options_hi: ["6 घंटे", "12 घंटे", "24 घंटे", "48 घंटे"],
        answer_en: "24 hours",
        answer_hi: "24 घंटे",
        attempted: false,
        selected: ""
    },
    {
        num: 8,
        question_en: "Which of the following has the highest specific heat capacity?",
        question_hi: "निम्नलिखित में से किसकी विशिष्ट ऊष्मा क्षमता सबसे अधिक है?",
        options_en: ["Iron", "Water", "Copper", "Mercury"],
        options_hi: ["लोहा", "पानी", "तांबा", "पारा"],
        answer_en: "Water",
        answer_hi: "पानी",
        attempted: false,
        selected: ""
    },
    {
        num: 9,
        question_en: "In a photoelectric experiment, the stopping potential depends on:",
        question_hi: "प्रकाशवैधुत प्रयोग में, रोधक विभव किस पर निर्भर करता है:",
        options_en: ["Intensity of light", "Work function of metal", "Frequency of incident light", "Both B and C"],
        options_hi: ["प्रकाश की तीव्रता", "धातु का कार्य फलन", "आपतित प्रकाश की आवृत्ति", "B और C दोनों"],
        answer_en: "Both B and C",
        answer_hi: "B और C दोनों",
        attempted: false,
        selected: ""
    },
    {
        num: 10,
        question_en: "Which quantum number defines the shape of an atomic orbital?",
        question_hi: "कौन सा क्वांटम संख्या एक परमाणु कक्षक के आकार को परिभाषित करती है?",
        options_en: ["Principal (n)", "Azimuthal (l)", "Magnetic (m)", "Spin (s)"],
        options_hi: ["मुख्य (n)", "द्विगंशी (l)", "चुंबकीय (m)", "चक्रण (s)"],
        answer_en: "Azimuthal (l)",
        answer_hi: "द्विगंशी (l)",
        attempted: false,
        selected: ""
    },
    {
        num: 11,
        question_en: "In the reaction, 2N₂O₅ → 4NO₂ + O₂, the rate expression is -d[N₂O₅]/dt = k[N₂O₅]. What is the order of the reaction?",
        question_hi: "अभिक्रिया 2N₂O₅ → 4NO₂ + O₂ में, दर व्यंजक -d[N₂O₅]/dt = k[N₂O₅] है। अभिक्रिया की कोटि क्या है?",
        options_en: ["Zero", "First", "Second", "Fractional"],
        options_hi: ["शून्य", "प्रथम", "द्वितीय", "भिन्नात्मक"],
        answer_en: "First",
        answer_hi: "प्रथम",
        attempted: false,
        selected: ""
    },
    {
        num: 12,
        question_en: "Which of the following is NOT a greenhouse gas?",
        question_hi: "निम्नलिखित में से कौन सी एक ग्रीनहाउस गैस नहीं है?",
        options_en: ["Methane (CH₄)", "Nitrous Oxide (N₂O)", "Ozone (O₃)", "Argon (Ar)"],
        options_hi: ["मीथेन (CH₄)", "नाइट्रस ऑक्साइड (N₂O)", "ओज़ोन (O₃)", "आर्गन (Ar)"],
        answer_en: "Argon (Ar)",
        answer_hi: "आर्गन (Ar)",
        attempted: false,
        selected: ""
    },
    {
        num: 13,
        question_en: "The site of protein synthesis in a eukaryotic cell is:",
        question_hi: "एक यूकेरियोटिक कोशिका में प्रोटीन संश्लेषण का स्थल है:",
        options_en: ["Mitochondria", "Nucleus", "Ribosome", "Golgi apparatus"],
        options_hi: ["माइटोकॉन्ड्रिया", "केंद्रक", "राइबोसोम", "गॉल्जी उपकरण"],
        answer_en: "Ribosome",
        answer_hi: "राइबोसोम",
        attempted: false,
        selected: ""
    },
    {
        num: 14,
        question_en: "Which of the following is a chromosomal disorder?",
        question_hi: "निम्नलिखित में से कौन सा एक गुणसूत्र विकार है?",
        options_en: ["Haemophilia", "Turner's Syndrome", "Sickle Cell Anaemia", "Cystic Fibrosis"],
        options_hi: ["हीमोफिलिया", "टर्नर सिंड्रोम", "सिकल सेल एनीमिया", "सिस्टिक फाइब्रोसिस"],
        answer_en: "Turner's Syndrome",
        answer_hi: "टर्नर सिंड्रोम",
        attempted: false,
        selected: ""
    },
    {
        num: 15,
        question_en: "The 'Haversian system' is a characteristic feature of the:",
        question_hi: "'हेवर्सियन प्रणाली' निम्न की एक विशेषता है:",
        options_en: ["Cartilage", "Mammalian bone", "Insect trachea", "Plant xylem"],
        options_hi: ["उपास्थि", "स्तनधारी अस्थि", "कीट श्वासनली", "पादप जाइलम"],
        answer_en: "Mammalian bone",
        answer_hi: "स्तनधारी अस्थि",
        attempted: false,
        selected: ""
    },
    {
        num: 16,
        question_en: "The 'Asiatic Society' in Kolkata was founded by:",
        question_hi: "कोलकाता में 'एशियाटिक सोसाइटी' की स्थापना किसके द्वारा की गई थी?",
        options_en: ["Warren Hastings", "William Jones", "Lord Cornwallis", "Raja Ram Mohan Roy"],
        options_hi: ["वॉरेन हेस्टिंग्स", "विलियम जोन्स", "लॉर्ड कॉर्नवालिस", "राजा राम मोहन राय"],
        answer_en: "William Jones",
        answer_hi: "विलियम जोन्स",
        attempted: false,
        selected: ""
    },
    {
        num: 17,
        question_en: "The 'Pradhan Mantri MUDRA Yojana' is primarily related to:",
        question_hi: "'प्रधानमंत्री मुद्रा योजना' मुख्य रूप से किससे संबंधित है?",
        options_en: ["Housing for all", "Micro-unit development and refinance", "Crop insurance", "Health insurance"],
        options_hi: ["सबके लिए आवास", "सूक्ष्म-इकाई विकास और पुनर्वित्त", "फसल बीमा", "स्वास्थ्य बीमा"],
        answer_en: "Micro-unit development and refinance",
        answer_hi: "सूक्ष्म-इकाई विकास और पुनर्वित्त",
        attempted: false,
        selected: ""
    },
    {
        num: 18,
        question_en: "Who among the following was NOT a recipient of the Nobel Prize in Physics?",
        question_hi: "निम्नलिखित में से कौन भौतिकी में नोबेल पुरस्कार प्राप्तकर्ता नहीं थे?",
        options_en: ["C.V. Raman", "S. Chandrasekhar", "Homi J. Bhabha", "Subrahmanyan Chandrasekhar"],
        options_hi: ["सी.वी. रमन", "एस. चंद्रशेखर", "होमी जे. भाभा", "सुब्रमण्यन चंद्रशेखर"],
        answer_en: "Homi J. Bhabha",
        answer_hi: "होमी जे. भाभा",
        attempted: false,
        selected: ""
    },
    {
        num: 19,
        question_en: "The 'Knesset' is the parliament of which country?",
        question_hi: "'नेसेट' किस देश की संसद है?",
        options_en: ["Turkey", "Israel", "Iran", "Saudi Arabia"],
        options_hi: ["तुर्की", "इज़राइल", "ईरान", "सऊदी अरब"],
        answer_en: "Israel",
        answer_hi: "इज़राइल",
        attempted: false,
        selected: ""
    },
    {
        num: 20,
        question_en: "Which of the following is NOT a keyboard shortcut in MS Word?",
        question_hi: "निम्नलिखित में से कौन सा एमएस वर्ड में कीबोर्ड शॉर्टकट नहीं है?",
        options_en: ["Ctrl + S : Save", "Ctrl + B : Bold", "Ctrl + K : Insert Hyperlink", "Ctrl + R : Redo"],
        options_hi: ["Ctrl + S : सेव करें", "Ctrl + B : बोल्ड", "Ctrl + K : हाइपरलिंक डालें", "Ctrl + R : रीडू"],
        answer_en: "Ctrl + R : Redo",
        answer_hi: "Ctrl + R : रीडू",
        attempted: false,
        selected: ""
    },
    {
        num: 21,
        question_en: "A number is first increased by 30% and then decreased by 30%. This process is repeated once more. What is the net percentage change from the original number?",
        question_hi: "एक संख्या पहले 30% बढ़ाई जाती है और फिर 30% घटाई जाती है। यह प्रक्रिया एक बार और दोहराई जाती है। मूल संख्या से शुद्ध प्रतिशत परिवर्तन क्या है?",
        options_en: ["0%", "9% decrease", "10.89% decrease", "13% decrease"],
        options_hi: ["0%", "9% की कमी", "10.89% की कमी", "13% की कमी"],
        answer_en: "10.89% decrease",
        answer_hi: "10.89% की कमी",
        attempted: false,
        selected: ""
    },
    {
        num: 22,
        question_en: "The ratio of copper to zinc in an alloy is 5:3. If 20 kg of copper is added, the ratio becomes 5:2. What was the original quantity of the alloy?",
        question_hi: "एक मिश्र धातु में तांबे और जस्ता का अनुपात 5:3 है। यदि 20 किग्रा तांबा मिलाया जाता है, तो अनुपात 5:2 हो जाता है। मिश्र धातु की मूल मात्रा क्या थी?",
        options_en: ["64 kg", "80 kg", "96 kg", "120 kg"],
        options_hi: ["64 किग्रा", "80 किग्रा", "96 किग्रा", "120 किग्रा"],
        answer_en: "64 kg",
        answer_hi: "64 किग्रा",
        attempted: false,
        selected: ""
    },
    {
        num: 23,
        question_en: "The average weight of 12 men increases by 2.5 kg when a new man replaces one of them weighing 65 kg. What is the weight of the new man?",
        question_hi: "12 पुरुषों का औसत वजन 2.5 किग्रा बढ़ जाता है जब एक नया व्यक्ति उनमें से 65 किग्रा वजन वाले व्यक्ति की जगह लेता है। नए व्यक्ति का वजन क्या है?",
        options_en: ["85 kg", "90 kg", "92.5 kg", "95 kg"],
        options_hi: ["85 किग्रा", "90 किग्रा", "92.5 किग्रा", "95 किग्रा"],
        answer_en: "95 kg",
        answer_hi: "95 किग्रा",
        attempted: false,
        selected: ""
    },
    {
        num: 24,
        question_en: "Find the next term: 1, 1, 4, 8, 9, 27, 16, ?",
        question_hi: "अगला पद ज्ञात करें: 1, 1, 4, 8, 9, 27, 16, ?",
        options_en: ["32", "64", "81", "36"],
        options_hi: ["32", "64", "81", "36"],
        answer_en: "64",
        answer_hi: "64",
        attempted: false,
        selected: ""
    },
    {
        num: 25,
        question_en: "If in a certain code, 'ORGANISATION' is written as 'CBDWLQJWYQCL' and 'OPERATION' is written as 'CXFBWYQCL', how is 'SEPARATION' coded?",
        question_hi: "यदि एक निश्चित कोड में, 'ORGANISATION' को 'CBDWLQJWYQCL' और 'OPERATION' को 'CXFBWYQCL' लिखा जाता है, तो 'SEPARATION' को कैसे कोडित किया जाएगा?",
        options_en: ["EJXEBYQCL", "JFXEBYQCL", "JFXEBYQCM", "EJXEBYQCM"],
        options_hi: ["EJXEBYQCL", "JFXEBYQCL", "JFXEBYQCM", "EJXEBYQCM"],
        answer_en: "JFXEBYQCL",
        answer_hi: "JFXEBYQCL",
        attempted: false,
        selected: ""
    },
    {
        num: 26,
        question_en: "Analogy: Glucometer : Blood Sugar :: Sphygmomanometer : ?",
        question_hi: "सादृश्यता: ग्लूकोमीटर : रक्त शर्करा :: रक्तचापमापी : ?",
        options_en: ["Body Temperature", "Heart Rate", "Blood Pressure", "Cholesterol"],
        options_hi: ["शरीर का तापमान", "हृदय गति", "रक्तचाप", "कोलेस्ट्रॉल"],
        answer_en: "Blood Pressure",
        answer_hi: "रक्तचाप",
        attempted: false,
        selected: ""
    },
    {
        num: 27,
        question_en: "A particle is moving in a uniform circular motion. Which of the following quantities remains constant?",
        question_hi: "एक कण एक समान वृत्तीय गति में गतिमान है। निम्नलिखित में से कौन सी राशि स्थिर रहती है?",
        options_en: ["Velocity", "Speed", "Momentum", "Acceleration"],
        options_hi: ["वेग", "चाल", "संवेग", "त्वरण"],
        answer_en: "Speed",
        answer_hi: "चाल",
        attempted: false,
        selected: ""
    },
    {
        num: 28,
        question_en: "Which phenomenon is responsible for the reddish appearance of the sun at sunrise and sunset?",
        question_hi: "सूर्योदय और सूर्यास्त के समय सूर्य के लाल रंग के दिखने के लिए कौन सी घटना जिम्मेदार है?",
        options_en: ["Refraction", "Scattering of Light", "Dispersion", "Total Internal Reflection"],
        options_hi: ["अपवर्तन", "प्रकाश का प्रकीर्णन", "विक्षेपण", "पूर्ण आंतरिक परावर्तन"],
        answer_en: "Scattering of Light",
        answer_hi: "प्रकाश का प्रकीर्णन",
        attempted: false,
        selected: ""
    },
    {
        num: 29,
        question_en: "The absolute zero temperature (0 K) is equivalent to:",
        question_hi: "परम शून्य तापमान (0 K) किसके बराबर है:",
        options_en: ["0°C", "-100°C", "-273.15°C", "-459.67°C"],
        options_hi: ["0°C", "-100°C", "-273.15°C", "-459.67°C"],
        answer_en: "-273.15°C",
        answer_hi: "-273.15°C",
        attempted: false,
        selected: ""
    },
    {
        num: 30,
        question_en: "The IUPAC name of the compound with the formula (CH₃)₂CHCH₂CHO is:",
        question_hi: "सूत्र (CH₃)₂CHCH₂CHO वाले यौगिक का आईयूपीएसी नाम है:",
        options_en: ["2-Methylbutanal", "3-Methylbutanal", "Isovaleraldehyde", "2-Ethylpropanal"],
        options_hi: ["2-मेथिलब्यूटेनल", "3-मेथिलब्यूटेनल", "आइसोवेलेराल्डिहाइड", "2-एथिलप्रोपेनल"],
        answer_en: "3-Methylbutanal",
        answer_hi: "3-मेथिलब्यूटेनल",
        attempted: false,
        selected: ""
    },
    {
        num: 31,
        question_en: "Which of the following statements about enzymes is INCORRECT?",
        question_hi: "एंजाइमों के बारे में निम्नलिखित में से कौन सा कथन गलत है?",
        options_en: ["They are biocatalysts.", "They are specific in their action.", "They get consumed in the reaction.", "They are usually proteins."],
        options_hi: ["वे जैव-उत्प्रेरक हैं।", "वे अपनी क्रिया में विशिष्ट होते हैं।", "वे अभिक्रिया में खपत हो जाते हैं।", "वे आमतौर पर प्रोटीन होते हैं।"],
        answer_en: "They get consumed in the reaction.",
        answer_hi: "वे अभिक्रिया में खपत हो जाते हैं।",
        attempted: false,
        selected: ""
    },
    {
        num: 32,
        question_en: "The 'Lock and Key' model of enzyme action was proposed by:",
        question_hi: "एंजाइम क्रिया का 'ताला और चाबी' मॉडल किसके द्वारा प्रस्तावित किया गया था?",
        options_en: ["Emil Fischer", "Linus Pauling", "Koshland", "Pasteur"],
        options_hi: ["एमिल फिशर", "लाइनस पॉलिंग", "कोशलैंड", "पाश्चर"],
        answer_en: "Emil Fischer",
        answer_hi: "एमिल फिशर",
        attempted: false,
        selected: ""
    },
    {
        num: 33,
        question_en: "The 'Chola' empire was primarily located in which part of present-day India?",
        question_hi: "'चोल' साम्राज्य मुख्य रूप से आज के भारत के किस भाग में स्थित था?",
        options_en: ["Deccan Plateau", "Western Ghats", "Gangetic Plains", "Tamil Nadu and parts of South India"],
        options_hi: ["दक्कन का पठार", "पश्चिमी घाट", "गंगा के मैदान", "तमिल नाडु और दक्षिण भारत के कुछ हिस्से"],
        answer_en: "Tamil Nadu and parts of South India",
        answer_hi: "तमिल नाडु और दक्षिण भारत के कुछ हिस्से",
        attempted: false,
        selected: ""
    },
    {
        num: 34,
        question_en: "The 'Global Gender Gap Report' is published annually by:",
        question_hi: "'वैश्विक लैंगिक अंतराल रिपोर्ट' किसके द्वारा वार्षिक रूप से प्रकाशित की जाती है?",
        options_en: ["UN Women", "World Bank", "World Economic Forum", "UNDP"],
        options_hi: ["यूएन वीमेन", "विश्व बैंक", "विश्व आर्थिक मंच", "यूएनडीपी"],
        answer_en: "World Economic Forum",
        answer_hi: "विश्व आर्थिक मंच",
        attempted: false,
        selected: ""
    },
    {
        num: 35,
        question_en: "The 'Bishkek Declaration' is associated with which organisation?",
        question_hi: "'बिश्केक घोषणा' किस संगठन से संबंधित है?",
        options_en: ["ASEAN", "BRICS", "SCO (Shanghai Cooperation Organisation)", "OPEC"],
        options_hi: ["आसियान", "ब्रिक्स", "शंघाई सहयोग संगठन", "ओपेक"],
        answer_en: "SCO (Shanghai Cooperation Organisation)",
        answer_hi: "शंघाई सहयोग संगठन",
        attempted: false,
        selected: ""
    },
    {
        num: 36,
        question_en: "What does 'BIOS' stand for in computing?",
        question_hi: "कंप्यूटिंग में 'BIOS' का क्या अर्थ है?",
        options_en: ["Binary Input Output System", "Basic Integrated Operating Software", "Basic Input Output System", "Boot Information Operating Setup"],
        options_hi: ["बाइनरी इनपुट आउटपुट सिस्टम", "बेसिक इंटीग्रेटेड ऑपरेटिंग सॉफ्टवेयर", "बेसिक इनपुट आउटपुट सिस्टम", "बूट इनफार्मेशन ऑपरेटिंग सेटअप"],
        answer_en: "Basic Input Output System",
        answer_hi: "बेसिक इनपुट आउटपुट सिस्टम",
        attempted: false,
        selected: ""
    },
    {
        num: 37,
        question_en: "In an election between two candidates, the candidate who gets 60% of the votes wins by 400 votes. What is the total number of votes polled?",
        question_hi: "दो उम्मीदवारों के बीच एक चुनाव में, जो उम्मीदवार 60% वोट प्राप्त करता है वह 400 वोटों से जीतता है। डाले गए वोटों की कुल संख्या क्या है?",
        options_en: ["1000", "1500", "2000", "2500"],
        options_hi: ["1000", "1500", "2000", "2500"],
        answer_en: "2000",
        answer_hi: "2000",
        attempted: false,
        selected: ""
    },
    {
        num: 38,
        question_en: "If A:B = 2:3, B:C = 4:5, and C:D = 6:7, then what is A:D?",
        question_hi: "यदि A:B = 2:3, B:C = 4:5, और C:D = 6:7, तो A:D क्या है?",
        options_en: ["8:15", "16:35", "12:35", "16:21"],
        options_hi: ["8:15", "16:35", "12:35", "16:21"],
        answer_en: "16:35",
        answer_hi: "16:35",
        attempted: false,
        selected: ""
    },
    {
        num: 39,
        question_en: "The average of 11 results is 50. If the average of the first 6 results is 49 and that of the last 6 is 52, what is the 6th result?",
        question_hi: "11 परिणामों का औसत 50 है। यदि पहले 6 परिणामों का औसत 49 है और अंतिम 6 का 52 है, तो छठा परिणाम क्या है?",
        options_en: ["48", "50", "52", "56"],
        options_hi: ["48", "50", "52", "56"],
        answer_en: "56",
        answer_hi: "56",
        attempted: false,
        selected: ""
    },
    {
        num: 40,
        question_en: "Find the missing number: 3, 12, 27, 48, 75, 108, ?",
        question_hi: "लुप्त संख्या ज्ञात कीजिए: 3, 12, 27, 48, 75, 108, ?",
        options_en: ["147", "144", "141", "150"],
        options_hi: ["147", "144", "141", "150"],
        answer_en: "147",
        answer_hi: "147",
        attempted: false,
        selected: ""
    },
    {
        num: 41,
        question_en: "In a certain code, 'TIGER' is written as 'QDFHS'. How is 'HORSE' written in that code?",
        question_hi: "एक निश्चित कोड में, 'TIGER' को 'QDFHS' लिखा जाता है। उस कोड में 'HORSE' को कैसे लिखा जाएगा?",
        options_en: ["ELMPS", "ELNPS", "EKMPS", "EKNPS"],
        options_hi: ["ELMPS", "ELNPS", "EKMPS", "EKNPS"],
        answer_en: "ELMPS",
        answer_hi: "ELMPS",
        attempted: false,
        selected: ""
    },
    {
        num: 42,
        question_en: "Analogy: Cathode Ray Tube : Television :: Flywheel : ?",
        question_hi: "सादृश्यता: कैथोड रे ट्यूब : टेलीविजन :: फ्लाईव्हील : ?",
        options_en: ["Engine", "Clock", "Generator", "Bicycle"],
        options_hi: ["इंजन", "घड़ी", "जनरेटर", "साइकिल"],
        answer_en: "Engine",
        answer_hi: "इंजन",
        attempted: false,
        selected: ""
    },
    {
        num: 43,
        question_en: "A carnot engine operates between temperatures of 400 K and 300 K. What is its efficiency?",
        question_hi: "एक कार्नोट इंजन 400 K और 300 K के तापमान के बीच संचालित होता है। इसकी दक्षता क्या है?",
        options_en: ["20%", "25%", "30%", "75%"],
        options_hi: ["20%", "25%", "30%", "75%"],
        answer_en: "25%",
        answer_hi: "25%",
        attempted: false,
        selected: ""
    },
    {
        num: 44,
        question_en: "Which of the following statements about superconductors is TRUE?",
        question_hi: "अतिचालकों के बारे में निम्नलिखित में से कौन सा कथन सत्य है?",
        options_en: ["They have zero resistance below critical temperature.", "They are perfect diamagnets.", "Both A and B", "They work at room temperature."],
        options_hi: ["उनका क्रांतिक तापमान के नीचे प्रतिरोध शून्य होता है।", "वे पूर्ण प्रतिचुम्बकीय होते हैं।", "A और B दोनों", "वे कमरे के तापमान पर काम करते हैं।"],
        answer_en: "Both A and B",
        answer_hi: "A और B दोनों",
        attempted: false,
        selected: ""
    },
    {
        num: 45,
        question_en: "The number of nodal planes in a dxy orbital is:",
        question_hi: "एक dxy कक्षक में नोडल तलों की संख्या है:",
        options_en: ["0", "1", "2", "3"],
        options_hi: ["0", "1", "2", "3"],
        answer_en: "2",
        answer_hi: "2",
        attempted: false,
        selected: ""
    },
    {
        num: 46,
        question_en: "Which of the following is NOT a colligative property?",
        question_hi: "निम्नलिखित में से कौन सा अणुसंख्य गुणधर्म नहीं है?",
        options_en: ["Osmotic pressure", "Elevation in boiling point", "Depression in freezing point", "Viscosity"],
        options_hi: ["परासरण दाब", "क्वथनांक में उन्नयन", "हिमांक में अवनमन", "श्यानता"],
        answer_en: "Viscosity",
        answer_hi: "श्यानता",
        attempted: false,
        selected: ""
    },
    {
        num: 47,
        question_en: "Which of the following hormones is NOT produced by the pituitary gland?",
        question_hi: "निम्नलिखित में से कौन सा हार्मोन पिट्यूटरी ग्रंथि द्वारा उत्पादित नहीं होता है?",
        options_en: ["Growth Hormone (GH)", "Thyroid Stimulating Hormone (TSH)", "Insulin", "Adrenocorticotropic Hormone (ACTH)"],
        options_hi: ["वृद्धि हार्मोन (GH)", "थायरॉयड उत्तेजक हार्मोन (TSH)", "इंसुलिन", "एड्रिनोकोर्टिकोट्रोपिक हार्मोन (ACTH)"],
        answer_en: "Insulin",
        answer_hi: "इंसुलिन",
        attempted: false,
        selected: ""
    },
    {
        num: 48,
        question_en: "The 'Calvin Cycle' in photosynthesis occurs in the:",
        question_hi: "प्रकाश संश्लेषण में 'केल्विन चक्र' कहाँ होता है?",
        options_en: ["Grana of chloroplast", "Stroma of chloroplast", "Mitochondrial matrix", "Cytoplasm"],
        options_hi: ["हरितलवक के ग्रैना", "हरितलवक के स्ट्रोमा", "माइटोकॉन्ड्रियल मैट्रिक्स", "कोशिका द्रव्य"],
        answer_en: "Stroma of chloroplast",
        answer_hi: "हरितलवक के स्ट्रोमा",
        attempted: false,
        selected: ""
    },
    {
        num: 49,
        question_en: "Which of the following is a Kharif crop?",
        question_hi: "निम्नलिखित में से कौन सी खरीफ फसल है?",
        options_en: ["Wheat", "Mustard", "Rice", "Barley"],
        options_hi: ["गेहूं", "सरसों", "चावल", "जौ"],
        answer_en: "Rice",
        answer_hi: "चावल",
        attempted: false,
        selected: ""
    },
    {
        num: 50,
        question_en: "The ancient university of 'Nalanda' was located in which present-day state?",
        question_hi: "प्राचीन विश्वविद्यालय 'नालंदा' किस वर्तमान राज्य में स्थित था?",
        options_en: ["Bihar", "Uttar Pradesh", "Odisha", "Madhya Pradesh"],
        options_hi: ["बिहार", "उत्तर प्रदेश", "ओडिशा", "मध्य प्रदेश"],
        answer_en: "Bihar",
        answer_hi: "बिहार",
        attempted: false,
        selected: ""
    }];


// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

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
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
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

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
            return;
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // Calculate time spent
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // Save to localStorage
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }
        } else {
            notAttempted++;
        }

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    // Save result data
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // Stop camera stream if active
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }

    // Redirect
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.background = color;
        circle.textContent = i + 1;
        circle.onclick = () => jumpToQuestion(i);
        nav.appendChild(circle);
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA ----------------------
let videoStream;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};