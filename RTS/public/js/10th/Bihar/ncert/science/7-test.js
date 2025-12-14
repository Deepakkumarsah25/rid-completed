const questions = [
    {
        "num": 1,
        "question_en": "Which of the following is a physical change?",
        "question_hi": "निम्नलिखित में से कौन एक भौतिक परिवर्तन है?",
        "options_en": ["Burning of paper", "Melting of ice", "Rusting of iron", "Digestion of food"],
        "options_hi": ["कागज का जलना", "बर्फ का पिघलना", "लोहे में जंग लगना", "भोजन का पाचन"],
        "answer_en": "Melting of ice",
        "answer_hi": "बर्फ का पिघलना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The unit of electric power is:",
        "question_hi": "विद्युत शक्ति की इकाई है:",
        "options_en": ["Joule", "Watt", "Volt", "Ampere"],
        "options_hi": ["जूल", "वाट", "वोल्ट", "एम्पियर"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Chlorophyll is present in which part of the plant cell?",
        "question_hi": "पौधे की कोशिका के किस भाग में क्लोरोफिल उपस्थित होता है?",
        "options_en": ["Nucleus", "Mitochondria", "Chloroplast", "Vacuole"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "हरितलवक", "रसधानी"],
        "answer_en": "Chloroplast",
        "answer_hi": "हरितलवक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which metal reacts vigorously with water?",
        "question_hi": "कौन सी धातु पानी के साथ तीव्रता से अभिक्रिया करती है?",
        "options_en": ["Gold", "Silver", "Sodium", "Copper"],
        "options_hi": ["सोना", "चाँदी", "सोडियम", "ताँबा"],
        "answer_en": "Sodium",
        "answer_hi": "सोडियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The focal length of a plane mirror is:",
        "question_hi": "समतल दर्पण की फोकस दूरी होती है:",
        "options_en": ["Zero", "Infinite", "Equal to radius", "Half of radius"],
        "options_hi": ["शून्य", "अनंत", "त्रिज्या के बराबर", "त्रिज्या की आधी"],
        "answer_en": "Infinite",
        "answer_hi": "अनंत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which gas is produced during anaerobic respiration?",
        "question_hi": "अवायवीय श्वसन के दौरान कौन सी गैस उत्पन्न होती है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Lactic acid", "Ethanol"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "लैक्टिक अम्ल", "एथेनॉल"],
        "answer_en": "Ethanol",
        "answer_hi": "एथेनॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The chemical formula of Plaster of Paris is:",
        "question_hi": "प्लास्टर ऑफ पेरिस का रासायनिक सूत्र है:",
        "options_en": ["CaSO₄·2H₂O", "CaSO₄·½H₂O", "CaCO₃", "Ca(OH)₂"],
        "options_hi": ["CaSO₄·2H₂O", "CaSO₄·½H₂O", "CaCO₃", "Ca(OH)₂"],
        "answer_en": "CaSO₄·½H₂O",
        "answer_hi": "CaSO₄·½H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which part of the eye regulates the size of pupil?",
        "question_hi": "आँख का कौन सा भाग पुतली के आकार को नियंत्रित करता है?",
        "options_en": ["Cornea", "Iris", "Retina", "Lens"],
        "options_hi": ["कॉर्निया", "परितारिका", "रेटिना", "लेंस"],
        "answer_en": "Iris",
        "answer_hi": "परितारिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The splitting of white light into seven colors is called:",
        "question_hi": "सफेद प्रकाश का सात रंगों में विभाजन कहलाता है:",
        "options_en": ["Reflection", "Refraction", "Dispersion", "Scattering"],
        "options_hi": ["परावर्तन", "अपवर्तन", "विक्षेपण", "प्रकीर्णन"],
        "answer_en": "Dispersion",
        "answer_hi": "विक्षेपण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which acid is present in tomato?",
        "question_hi": "टमाटर में कौन सा अम्ल उपस्थित होता है?",
        "options_en": ["Oxalic acid", "Acetic acid", "Citric acid", "Tartaric acid"],
        "options_hi": ["ऑक्सैलिक अम्ल", "ऐसीटिक अम्ल", "साइट्रिक अम्ल", "टार्टरिक अम्ल"],
        "answer_en": "Oxalic acid",
        "answer_hi": "ऑक्सैलिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "The process of conversion of sugar into alcohol by yeast is called:",
        "question_hi": "यीस्ट द्वारा शर्करा का अल्कोहल में परिवर्तन कहलाता है:",
        "options_en": ["Fermentation", "Photosynthesis", "Respiration", "Combustion"],
        "options_hi": ["किण्वन", "प्रकाश संश्लेषण", "श्वसन", "दहन"],
        "answer_en": "Fermentation",
        "answer_hi": "किण्वन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which device measures electric resistance?",
        "question_hi": "कौन सा यंत्र विद्युत प्रतिरोध मापता है?",
        "options_en": ["Ammeter", "Voltmeter", "Ohmmeter", "Galvanometer"],
        "options_hi": ["अमीटर", "वोल्टमीटर", "ओममीटर", "गैल्वेनोमीटर"],
        "answer_en": "Ohmmeter",
        "answer_hi": "ओममीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The main component of LPG is:",
        "question_hi": "एलपीजी का मुख्य घटक है:",
        "options_en": ["Methane", "Propane", "Butane", "Ethane"],
        "options_hi": ["मीथेन", "प्रोपेन", "ब्यूटेन", "ईथेन"],
        "answer_en": "Butane",
        "answer_hi": "ब्यूटेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which of the following is an insulator?",
        "question_hi": "निम्नलिखित में से कौन कुचालक है?",
        "options_en": ["Copper", "Aluminum", "Wood", "Silver"],
        "options_hi": ["ताँबा", "एल्यूमीनियम", "लकड़ी", "चाँदी"],
        "answer_en": "Wood",
        "answer_hi": "लकड़ी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The process of exchange of gases in leaves occurs through:",
        "question_hi": "पत्तियों में गैसों का आदान-प्रदान होता है:",
        "options_en": ["Stomata", "Root hairs", "Xylem", "Phloem"],
        "options_hi": ["रंध्र", "मूल रोम", "जाइलम", "फ्लोएम"],
        "answer_en": "Stomata",
        "answer_hi": "रंध्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which gas causes global warming?",
        "question_hi": "कौन सी गैस ग्लोबल वार्मिंग का कारण बनती है?",
        "options_en": ["Oxygen", "Nitrogen", "Methane", "Helium"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "मीथेन", "हीलियम"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The unit of pressure in SI system is:",
        "question_hi": "SI प्रणाली में दाब की इकाई है:",
        "options_en": ["Newton", "Pascal", "Joule", "Watt"],
        "options_hi": ["न्यूटन", "पास्कल", "जूल", "वाट"],
        "answer_en": "Pascal",
        "answer_hi": "पास्कल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Deficiency of which vitamin causes scurvy?",
        "question_hi": "किस विटामिन की कमी से स्कर्वी रोग होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The pH of acidic solution is:",
        "question_hi": "अम्लीय विलयन का pH होता है:",
        "options_en": ["7", "Greater than 7", "Less than 7", "14"],
        "options_hi": ["7", "7 से अधिक", "7 से कम", "14"],
        "answer_en": "Less than 7",
        "answer_hi": "7 से कम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The bending of light when it passes from air to glass is due to:",
        "question_hi": "प्रकाश का मुड़ना जब वह वायु से काँच में जाता है, होता है:",
        "options_en": ["Reflection", "Refraction", "Diffraction", "Interference"],
        "options_hi": ["परावर्तन", "अपवर्तन", "विवर्तन", "व्यतिकरण"],
        "answer_en": "Refraction",
        "answer_hi": "अपवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which organ produces insulin in human body?",
        "question_hi": "मानव शरीर में कौन सा अंग इंसुलिन उत्पन्न करता है?",
        "options_en": ["Liver", "Pancreas", "Kidney", "Stomach"],
        "options_hi": ["यकृत", "अग्न्याशय", "वृक्क", "आमाशय"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The chemical formula of blue vitriol is:",
        "question_hi": "नीले थोथे का रासायनिक सूत्र है:",
        "options_en": ["CuSO₄·5H₂O", "FeSO₄·7H₂O", "ZnSO₄·7H₂O", "MgSO₄·7H₂O"],
        "options_hi": ["CuSO₄·5H₂O", "FeSO₄·7H₂O", "ZnSO₄·7H₂O", "MgSO₄·7H₂O"],
        "answer_en": "CuSO₄·5H₂O",
        "answer_hi": "CuSO₄·5H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "A concave mirror always forms a virtual image when object is placed:",
        "question_hi": "अवतल दर्पण सदैव आभासी प्रतिबिंब बनाता है जब वस्तु रखी जाती है:",
        "options_en": ["At focus", "Between pole and focus", "At center of curvature", "Beyond center of curvature"],
        "options_hi": ["फोकस पर", "ध्रुव और फोकस के बीच", "वक्रता केंद्र पर", "वक्रता केंद्र से परे"],
        "answer_en": "Between pole and focus",
        "answer_hi": "ध्रुव और फोकस के बीच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which gland is known as emergency gland?",
        "question_hi": "किस ग्रंथि को आपातकालीन ग्रंथि कहा जाता है?",
        "options_en": ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
        "options_hi": ["थाइरॉइड", "पीयूष", "अधिवृक्क", "अग्न्याशय"],
        "answer_en": "Adrenal",
        "answer_hi": "अधिवृक्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The process of depositing copper on iron is called:",
        "question_hi": "लोहे पर ताँबा जमाने की प्रक्रिया को कहते हैं:",
        "options_en": ["Galvanization", "Electroplating", "Anodizing", "Tinning"],
        "options_hi": ["जस्तीकरण", "विद्युत लेपन", "एनोडीकरण", "कलई करना"],
        "answer_en": "Electroplating",
        "answer_hi": "विद्युत लेपन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which part of the plant stores food in carrot?",
        "question_hi": "पौधे का कौन सा भाग गाजर में भोजन संग्रह करता है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
        "answer_en": "Root",
        "answer_hi": "जड़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The chemical formula of caustic soda is:",
        "question_hi": "कास्टिक सोडा का रासायनिक सूत्र है:",
        "options_en": ["NaOH", "Na₂CO₃", "NaHCO₃", "NaCl"],
        "options_hi": ["NaOH", "Na₂CO₃", "NaHCO₃", "NaCl"],
        "answer_en": "NaOH",
        "answer_hi": "NaOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which of the following is a non-conventional energy source?",
        "question_hi": "निम्नलिखित में से कौन गैर-पारंपरिक ऊर्जा स्रोत है?",
        "options_en": ["Coal", "Natural gas", "Solar energy", "Petroleum"],
        "options_hi": ["कोयला", "प्राकृतिक गैस", "सौर ऊर्जा", "पेट्रोलियम"],
        "answer_en": "Solar energy",
        "answer_hi": "सौर ऊर्जा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The process of conversion of starch into sugar is called:",
        "question_hi": "स्टार्च का शर्करा में परिवर्तन की प्रक्रिया को कहते हैं:",
        "options_en": ["Fermentation", "Digestion", "Hydrolysis", "Photosynthesis"],
        "options_hi": ["किण्वन", "पाचन", "जल-अपघटन", "प्रकाश संश्लेषण"],
        "answer_en": "Hydrolysis",
        "answer_hi": "जल-अपघटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which gas is used in refrigeration?",
        "question_hi": "प्रशीतन में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Nitrogen", "Chlorofluorocarbon", "Carbon dioxide"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "क्लोरोफ्लोरोकार्बन", "कार्बन डाइऑक्साइड"],
        "answer_en": "Chlorofluorocarbon",
        "answer_hi": "क्लोरोफ्लोरोकार्बन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "The SI unit of energy is:",
        "question_hi": "ऊर्जा की SI इकाई है:",
        "options_en": ["Newton", "Joule", "Watt", "Pascal"],
        "options_hi": ["न्यूटन", "जूल", "वाट", "पास्कल"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which part of the flower produces pollen grains?",
        "question_hi": "फूल का कौन सा भाग पराग कण उत्पन्न करता है?",
        "options_en": ["Anther", "Stigma", "Ovary", "Style"],
        "options_hi": ["परागकोष", "वर्तिकाग्र", "अंडाशय", "वर्तिका"],
        "answer_en": "Anther",
        "answer_hi": "परागकोष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The chemical formula of carbon monoxide is:",
        "question_hi": "कार्बन मोनोऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["CO", "CO₂", "C", "CH₄"],
        "options_hi": ["CO", "CO₂", "C", "CH₄"],
        "answer_en": "CO",
        "answer_hi": "CO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which blood group is called universal recipient?",
        "question_hi": "किस रक्त समूह को सर्वग्राही कहा जाता है?",
        "options_en": ["A", "B", "AB", "O"],
        "options_hi": ["A", "B", "AB", "O"],
        "answer_en": "AB",
        "answer_hi": "AB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The device used to measure rainfall is:",
        "question_hi": "वर्षा मापने के लिए प्रयुक्त यंत्र है:",
        "options_en": ["Barometer", "Rain gauge", "Hygrometer", "Anemometer"],
        "options_hi": ["बैरोमीटर", "वर्षामापी", "आर्द्रतामापी", "पवनवेगमापी"],
        "answer_en": "Rain gauge",
        "answer_hi": "वर्षामापी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which gas is absorbed by plants during photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण के दौरान पौधों द्वारा कौन सी गैस अवशोषित की जाती है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The process of conversion of gas directly into solid is called:",
        "question_hi": "गैस का सीधे ठोस में परिवर्तन की प्रक्रिया को कहते हैं:",
        "options_en": ["Sublimation", "Deposition", "Condensation", "Freezing"],
        "options_hi": ["उर्ध्वपातन", "निक्षेपण", "संघनन", "जमना"],
        "answer_en": "Deposition",
        "answer_hi": "निक्षेपण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which organelle is called suicide bag of cell?",
        "question_hi": "कोशिका के किस अंगक को आत्मघाती थैली कहा जाता है?",
        "options_en": ["Lysosome", "Mitochondria", "Ribosome", "Golgi apparatus"],
        "options_hi": ["लाइसोसोम", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Lysosome",
        "answer_hi": "लाइसोसोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The chemical formula of gypsum is:",
        "question_hi": "जिप्सम का रासायनिक सूत्र है:",
        "options_en": ["CaSO₄·2H₂O", "CaSO₄·½H₂O", "CaCO₃", "Ca(OH)₂"],
        "options_hi": ["CaSO₄·2H₂O", "CaSO₄·½H₂O", "CaCO₃", "Ca(OH)₂"],
        "answer_en": "CaSO₄·2H₂O",
        "answer_hi": "CaSO₄·2H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which mirror is used in headlights of vehicles?",
        "question_hi": "वाहनों के हेडलाइट में किस दर्पण का उपयोग किया जाता है?",
        "options_en": ["Plane mirror", "Concave mirror", "Convex mirror", "Spherical mirror"],
        "options_hi": ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "गोलाकार दर्पण"],
        "answer_en": "Concave mirror",
        "answer_hi": "अवतल दर्पण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "The process of breaking down of food in mouth is called:",
        "question_hi": "मुँह में भोजन के टूटने की प्रक्रिया को कहते हैं:",
        "options_en": ["Digestion", "Ingestion", "Mastication", "Absorption"],
        "options_hi": ["पाचन", "अंतर्ग्रहण", "चर्वण", "अवशोषण"],
        "answer_en": "Mastication",
        "answer_hi": "चर्वण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which gas is released during aerobic respiration?",
        "question_hi": "वायवीय श्वसन के दौरान कौन सी गैस मुक्त होती है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The instrument used to measure potential difference is:",
        "question_hi": "विभवांतर मापने के लिए प्रयुक्त यंत्र है:",
        "options_en": ["Ammeter", "Voltmeter", "Galvanometer", "Ohmmeter"],
        "options_hi": ["अमीटर", "वोल्टमीटर", "गैल्वेनोमीटर", "ओममीटर"],
        "answer_en": "Voltmeter",
        "answer_hi": "वोल्टमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which acid is present in tamarind?",
        "question_hi": "इमली में कौन सा अम्ल उपस्थित होता है?",
        "options_en": ["Tartaric acid", "Citric acid", "Malic acid", "Oxalic acid"],
        "options_hi": ["टार्टरिक अम्ल", "साइट्रिक अम्ल", "मैलिक अम्ल", "ऑक्सैलिक अम्ल"],
        "answer_en": "Tartaric acid",
        "answer_hi": "टार्टरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The image formed by human eye lens on retina is:",
        "question_hi": "मानव आँख के लेंस द्वारा रेटिना पर बना प्रतिबिंब होता है:",
        "options_en": ["Real and erect", "Virtual and erect", "Real and inverted", "Virtual and inverted"],
        "options_hi": ["वास्तविक और सीधा", "आभासी और सीधा", "वास्तविक और उल्टा", "आभासी और उल्टा"],
        "answer_en": "Real and inverted",
        "answer_hi": "वास्तविक और उल्टा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which metal is used in making electric wires?",
        "question_hi": "विद्युत तार बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Iron", "Copper", "Mercury", "Aluminum"],
        "options_hi": ["लोहा", "ताँबा", "पारा", "एल्यूमीनियम"],
        "answer_en": "Copper",
        "answer_hi": "ताँबा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "The process of conversion of light energy into chemical energy occurs in:",
        "question_hi": "प्रकाश ऊर्जा का रासायनिक ऊर्जा में परिवर्तन होता है:",
        "options_en": ["Chloroplast", "Mitochondria", "Nucleus", "Ribosome"],
        "options_hi": ["हरितलवक", "माइटोकॉन्ड्रिया", "केंद्रक", "राइबोसोम"],
        "answer_en": "Chloroplast",
        "answer_hi": "हरितलवक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which of the following is a metalloid?",
        "question_hi": "निम्नलिखित में से कौन उपधातु है?",
        "options_en": ["Iron", "Silicon", "Copper", "Silver"],
        "options_hi": ["लोहा", "सिलिकॉन", "ताँबा", "चाँदी"],
        "answer_en": "Silicon",
        "answer_hi": "सिलिकॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The phenomenon due to which sun appears red during sunrise is:",
        "question_hi": "वह घटना जिसके कारण सूर्योदय के समय सूर्य लाल दिखाई देता है:",
        "options_en": ["Reflection", "Refraction", "Scattering", "Dispersion"],
        "options_hi": ["परावर्तन", "अपवर्तन", "प्रकीर्णन", "विक्षेपण"],
        "answer_en": "Scattering",
        "answer_hi": "प्रकीर्णन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which part of the brain controls involuntary actions?",
        "question_hi": "मस्तिष्क का कौन सा भाग अनैच्छिक क्रियाओं को नियंत्रित करता है?",
        "options_en": ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
        "options_hi": ["सेरिब्रम", "सेरिबेलम", "मेडुला ऑब्लोंगेटा", "हाइपोथैलेमस"],
        "answer_en": "Medulla oblongata",
        "answer_hi": "मेडुला ऑब्लोंगेटा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "The chemical formula of lime stone is:",
        "question_hi": "चूना पत्थर का रासायनिक सूत्र है:",
        "options_en": ["CaO", "Ca(OH)₂", "CaCO₃", "CaCl₂"],
        "options_hi": ["CaO", "Ca(OH)₂", "CaCO₃", "CaCl₂"],
        "answer_en": "CaCO₃",
        "answer_hi": "CaCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which blood vessels have valves to prevent backflow?",
        "question_hi": "कौन सी रक्त वाहिकाओं में वाल्व होते हैं जो प्रतिवाह को रोकते हैं?",
        "options_en": ["Arteries", "Veins", "Capillaries", "All of these"],
        "options_hi": ["धमनियां", "शिराएं", "केशिकाएं", "ये सभी"],
        "answer_en": "Veins",
        "answer_hi": "शिराएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "The speed of sound in air at 0°C is:",
        "question_hi": "0°C पर वायु में ध्वनि की गति है:",
        "options_en": ["330 m/s", "332 m/s", "340 m/s", "350 m/s"],
        "options_hi": ["330 मीटर/सेकंड", "332 मीटर/सेकंड", "340 मीटर/सेकंड", "350 मीटर/सेकंड"],
        "answer_en": "332 m/s",
        "answer_hi": "332 मीटर/सेकंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which organ helps in maintaining body balance?",
        "question_hi": "कौन सा अंग शरीर के संतुलन को बनाए रखने में मदद करता है?",
        "options_en": ["Eyes", "Ears", "Nose", "Tongue"],
        "options_hi": ["आँखें", "कान", "नाक", "जीभ"],
        "answer_en": "Ears",
        "answer_hi": "कान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "The process of conversion of water into vapor is called:",
        "question_hi": "पानी का वाष्प में परिवर्तन की प्रक्रिया को कहते हैं:",
        "options_en": ["Evaporation", "Condensation", "Sublimation", "Freezing"],
        "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "जमना"],
        "answer_en": "Evaporation",
        "answer_hi": "वाष्पीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which of the following is the best conductor of electricity?",
        "question_hi": "निम्नलिखित में से कौन विद्युत का सर्वोत्तम सुचालक है?",
        "options_en": ["Copper", "Silver", "Aluminum", "Gold"],
        "options_hi": ["ताँबा", "चाँदी", "एल्यूमीनियम", "सोना"],
        "answer_en": "Silver",
        "answer_hi": "चाँदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "The process of breakdown of glucose in presence of oxygen is called:",
        "question_hi": "ऑक्सीजन की उपस्थिति में ग्लूकोज के टूटने की प्रक्रिया को कहते हैं:",
        "options_en": ["Anaerobic respiration", "Aerobic respiration", "Fermentation", "Photosynthesis"],
        "options_hi": ["अवायवीय श्वसन", "वायवीय श्वसन", "किण्वन", "प्रकाश संश्लेषण"],
        "answer_en": "Aerobic respiration",
        "answer_hi": "वायवीय श्वसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which mirror is used in solar cookers?",
        "question_hi": "सौर कुकर में किस दर्पण का उपयोग किया जाता है?",
        "options_en": ["Plane mirror", "Concave mirror", "Convex mirror", "Spherical mirror"],
        "options_hi": ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "गोलाकार दर्पण"],
        "answer_en": "Concave mirror",
        "answer_hi": "अवतल दर्पण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "The chemical formula of slaked lime is:",
        "question_hi": "बुझे हुए चूने का रासायनिक सूत्र है:",
        "options_en": ["CaO", "Ca(OH)₂", "CaCO₃", "CaCl₂"],
        "options_hi": ["CaO", "Ca(OH)₂", "CaCO₃", "CaCl₂"],
        "answer_en": "Ca(OH)₂",
        "answer_hi": "Ca(OH)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Deficiency of which vitamin causes beriberi?",
        "question_hi": "किस विटामिन की कमी से बेरीबेरी रोग होता है?",
        "options_en": ["Vitamin A", "Vitamin B1", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B1", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन B1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "The device that converts AC to DC is:",
        "question_hi": "वह युक्ति जो AC को DC में बदलती है:",
        "options_en": ["Transformer", "Rectifier", "Generator", "Motor"],
        "options_hi": ["ट्रांसफॉर्मर", "दिष्टकारी", "जनरेटर", "मोटर"],
        "answer_en": "Rectifier",
        "answer_hi": "दिष्टकारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which part of the plant is modified in onion?",
        "question_hi": "पौधे का कौन सा भाग प्याज में संशोधित होता है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
        "answer_en": "Leaf",
        "answer_hi": "पत्ती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The chemical formula of nitric acid is:",
        "question_hi": "नाइट्रिक अम्ल का रासायनिक सूत्र है:",
        "options_en": ["HNO₃", "HCl", "H₂SO₄", "CH₃COOH"],
        "options_hi": ["HNO₃", "HCl", "H₂SO₄", "CH₃COOH"],
        "answer_en": "HNO₃",
        "answer_hi": "HNO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which of the following is a nervous tissue?",
        "question_hi": "निम्नलिखित में से कौन तंत्रिका ऊतक है?",
        "options_en": ["Muscle", "Bone", "Neuron", "Blood"],
        "options_hi": ["पेशी", "हड्डी", "न्यूरॉन", "रक्त"],
        "answer_en": "Neuron",
        "answer_hi": "न्यूरॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The device used to measure atmospheric pressure is:",
        "question_hi": "वायुमंडलीय दाब मापने के लिए प्रयुक्त यंत्र है:",
        "options_en": ["Thermometer", "Barometer", "Hygrometer", "Manometer"],
        "options_hi": ["थर्मामीटर", "बैरोमीटर", "आर्द्रतामापी", "दाबमापी"],
        "answer_en": "Barometer",
        "answer_hi": "बैरोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which gas is used in advertising signs?",
        "question_hi": "विज्ञापन साइनों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Neon", "Nitrogen", "Oxygen", "Hydrogen"],
        "options_hi": ["नियॉन", "नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन"],
        "answer_en": "Neon",
        "answer_hi": "नियॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The device that converts mechanical energy to electrical energy is:",
        "question_hi": "वह युक्ति जो यांत्रिक ऊर्जा को विद्युत ऊर्जा में बदलती है:",
        "options_en": ["Motor", "Generator", "Transformer", "Battery"],
        "options_hi": ["मोटर", "जनरेटर", "ट्रांसफॉर्मर", "बैटरी"],
        "answer_en": "Generator",
        "answer_hi": "जनरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which part of the cell contains genetic material?",
        "question_hi": "कोशिका का कौन सा भाग आनुवंशिक पदार्थ रखता है?",
        "options_en": ["Nucleus", "Cytoplasm", "Cell membrane", "Mitochondria"],
        "options_hi": ["केंद्रक", "कोशिकाद्रव्य", "कोशिका झिल्ली", "माइटोकॉन्ड्रिया"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "The chemical formula of sulfuric acid is:",
        "question_hi": "सल्फ्यूरिक अम्ल का रासायनिक सूत्र है:",
        "options_en": ["H₂SO₄", "HCl", "HNO₃", "CH₃COOH"],
        "options_hi": ["H₂SO₄", "HCl", "HNO₃", "CH₃COOH"],
        "answer_en": "H₂SO₄",
        "answer_hi": "H₂SO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which mirror always forms a diminished image?",
        "question_hi": "कौन सा दर्पण सदैव छोटा प्रतिबिंब बनाता है?",
        "options_en": ["Plane mirror", "Concave mirror", "Convex mirror", "All of these"],
        "options_hi": ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "ये सभी"],
        "answer_en": "Convex mirror",
        "answer_hi": "उत्तल दर्पण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "The process of conversion of ammonia to nitrates in soil is called:",
        "question_hi": "मिट्टी में अमोनिया का नाइट्रेट में परिवर्तन की प्रक्रिया को कहते हैं:",
        "options_en": ["Nitrogen fixation", "Denitrification", "Nitrification", "Ammonification"],
        "options_hi": ["नाइट्रोजन स्थिरीकरण", "विनाइट्रीकरण", "नाइट्रीकरण", "अमोनीकरण"],
        "answer_en": "Nitrification",
        "answer_hi": "नाइट्रीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which of the following is a renewable resource?",
        "question_hi": "निम्नलिखित में से कौन नवीकरणीय संसाधन है?",
        "options_en": ["Coal", "Petroleum", "Natural gas", "Wind energy"],
        "options_hi": ["कोयला", "पेट्रोलियम", "प्राकृतिक गैस", "पवन ऊर्जा"],
        "answer_en": "Wind energy",
        "answer_hi": "पवन ऊर्जा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The chemical formula of ethane is:",
        "question_hi": "ईथेन का रासायनिक सूत्र है:",
        "options_en": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "answer_en": "C₂H₆",
        "answer_hi": "C₂H₆",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which tissue conducts water in plants?",
        "question_hi": "पौधों में कौन सा ऊतक पानी का संवहन करता है?",
        "options_en": ["Xylem", "Phloem", "Epidermis", "Cortex"],
        "options_hi": ["जाइलम", "फ्लोएम", "बाह्यत्वचा", "वल्कुट"],
        "answer_en": "Xylem",
        "answer_hi": "जाइलम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The device that increases or decreases AC voltage is:",
        "question_hi": "वह युक्ति जो AC वोल्टेज बढ़ाती या घटाती है:",
        "options_en": ["Rectifier", "Transformer", "Generator", "Motor"],
        "options_hi": ["दिष्टकारी", "ट्रांसफॉर्मर", "जनरेटर", "मोटर"],
        "answer_en": "Transformer",
        "answer_hi": "ट्रांसफॉर्मर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which acid is present in oranges?",
        "question_hi": "संतरे में कौन सा अम्ल उपस्थित होता है?",
        "options_en": ["Citric acid", "Acetic acid", "Lactic acid", "Tartaric acid"],
        "options_hi": ["साइट्रिक अम्ल", "ऐसीटिक अम्ल", "लैक्टिक अम्ल", "टार्टरिक अम्ल"],
        "answer_en": "Citric acid",
        "answer_hi": "साइट्रिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The process of conversion of atmospheric nitrogen to ammonia is:",
        "question_hi": "वायुमंडलीय नाइट्रोजन का अमोनिया में परिवर्तन की प्रक्रिया है:",
        "options_en": ["Nitrogen fixation", "Denitrification", "Nitrification", "Ammonification"],
        "options_hi": ["नाइट्रोजन स्थिरीकरण", "विनाइट्रीकरण", "नाइट्रीकरण", "अमोनीकरण"],
        "answer_en": "Nitrogen fixation",
        "answer_hi": "नाइट्रोजन स्थिरीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which of the following is biodegradable?",
        "question_hi": "निम्नलिखित में से कौन जैव निम्नीकरणीय है?",
        "options_en": ["Plastic bag", "Aluminum can", "Vegetable peel", "Glass bottle"],
        "options_hi": ["प्लास्टिक बैग", "एल्यूमीनियम कैन", "सब्जी का छिलका", "काँच की बोतल"],
        "answer_en": "Vegetable peel",
        "answer_hi": "सब्जी का छिलका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The chemical formula of methane is:",
        "question_hi": "मीथेन का रासायनिक सूत्र है:",
        "options_en": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "answer_en": "CH₄",
        "answer_hi": "CH₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which tissue conducts food in plants?",
        "question_hi": "पौधों में कौन सा ऊतक भोजन का संवहन करता है?",
        "options_en": ["Xylem", "Phloem", "Epidermis", "Cortex"],
        "options_hi": ["जाइलम", "फ्लोएम", "बाह्यत्वचा", "वल्कुट"],
        "answer_en": "Phloem",
        "answer_hi": "फ्लोएम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The instrument used to measure wind speed is:",
        "question_hi": "पवन की गति मापने के लिए प्रयुक्त यंत्र है:",
        "options_en": ["Barometer", "Thermometer", "Anemometer", "Hygrometer"],
        "options_hi": ["बैरोमीटर", "थर्मामीटर", "पवनवेगमापी", "आर्द्रतामापी"],
        "answer_en": "Anemometer",
        "answer_hi": "पवनवेगमापी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which gas is released during photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण के दौरान कौन सी गैस मुक्त होती है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "The chemical formula of acetic acid is:",
        "question_hi": "ऐसीटिक अम्ल का रासायनिक सूत्र है:",
        "options_en": ["CH₃COOH", "HCOOH", "C₆H₈O₇", "C₄H₆O₆"],
        "options_hi": ["CH₃COOH", "HCOOH", "C₆H₈O₇", "C₄H₆O₆"],
        "answer_en": "CH₃COOH",
        "answer_hi": "CH₃COOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which organ filters blood in human body?",
        "question_hi": "मानव शरीर में कौन सा अंग रक्त को छानता है?",
        "options_en": ["Heart", "Liver", "Kidney", "Lungs"],
        "options_hi": ["हृदय", "यकृत", "वृक्क", "फेफड़े"],
        "answer_en": "Kidney",
        "answer_hi": "वृक्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The phenomenon of apparent movement of sun is due to:",
        "question_hi": "सूर्य की आभासी गति की घटना होती है:",
        "options_en": ["Earth's rotation", "Earth's revolution", "Sun's rotation", "Sun's revolution"],
        "options_hi": ["पृथ्वी का घूर्णन", "पृथ्वी का परिक्रमण", "सूर्य का घूर्णन", "सूर्य का परिक्रमण"],
        "answer_en": "Earth's rotation",
        "answer_hi": "पृथ्वी का घूर्णन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which of the following is non-biodegradable?",
        "question_hi": "निम्नलिखित में से कौन गैर-जैव निम्नीकरणीय है?",
        "options_en": ["Paper", "Cotton cloth", "Wood", "Plastic"],
        "options_hi": ["कागज", "सूती कपड़ा", "लकड़ी", "प्लास्टिक"],
        "answer_en": "Plastic",
        "answer_hi": "प्लास्टिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The chemical formula of calcium carbonate is:",
        "question_hi": "कैल्शियम कार्बोनेट का रासायनिक सूत्र है:",
        "options_en": ["CaCO₃", "CaO", "Ca(OH)₂", "CaCl₂"],
        "options_hi": ["CaCO₃", "CaO", "Ca(OH)₂", "CaCl₂"],
        "answer_en": "CaCO₃",
        "answer_hi": "CaCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which gland secretes thyroxine hormone?",
        "question_hi": "कौन सी ग्रंथि थाइरॉक्सिन हार्मोन स्रावित करती है?",
        "options_en": ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
        "options_hi": ["थाइरॉइड", "पीयूष", "अधिवृक्क", "अग्न्याशय"],
        "answer_en": "Thyroid",
        "answer_hi": "थाइरॉइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The phenomenon due to which mirage occurs is:",
        "question_hi": "वह घटना जिसके कारण मृगतृष्णा होती है:",
        "options_en": ["Reflection", "Total internal reflection", "Refraction", "Scattering"],
        "options_hi": ["परावर्तन", "पूर्ण आंतरिक परावर्तन", "अपवर्तन", "प्रकीर्णन"],
        "answer_en": "Total internal reflection",
        "answer_hi": "पूर्ण आंतरिक परावर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which of the following is a macronutrient for plants?",
        "question_hi": "निम्नलिखित में से कौन पौधों के लिए स्थूल पोषक तत्व है?",
        "options_en": ["Iron", "Manganese", "Nitrogen", "Zinc"],
        "options_hi": ["आयरन", "मैंगनीज", "नाइट्रोजन", "जिंक"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The chemical formula of hydrochloric acid is:",
        "question_hi": "हाइड्रोक्लोरिक अम्ल का रासायनिक सूत्र है:",
        "options_en": ["HCl", "HNO₃", "H₂SO₄", "CH₃COOH"],
        "options_hi": ["HCl", "HNO₃", "H₂SO₄", "CH₃COOH"],
        "answer_en": "HCl",
        "answer_hi": "HCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which organelle is called digestive bag of cell?",
        "question_hi": "कोशिका के किस अंगक को पाचन थैली कहा जाता है?",
        "options_en": ["Lysosome", "Mitochondria", "Ribosome", "Golgi apparatus"],
        "options_hi": ["लाइसोसोम", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Lysosome",
        "answer_hi": "लाइसोसोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The instrument used to measure humidity is:",
        "question_hi": "आर्द्रता मापने के लिए प्रयुक्त यंत्र है:",
        "options_en": ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
        "options_hi": ["बैरोमीटर", "थर्मामीटर", "आर्द्रतामापी", "पवनवेगमापी"],
        "answer_en": "Hygrometer",
        "answer_hi": "आर्द्रतामापी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which gas is used by plants during respiration?",
        "question_hi": "पौधों द्वारा श्वसन के दौरान किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The chemical formula of carbon dioxide is:",
        "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["CO", "CO₂", "C", "CH₄"],
        "options_hi": ["CO", "CO₂", "C", "CH₄"],
        "answer_en": "CO₂",
        "answer_hi": "CO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which part of the brain controls body temperature?",
        "question_hi": "मस्तिष्क का कौन सा भाग शरीर के तापमान को नियंत्रित करता है?",
        "options_en": ["Cerebrum", "Cerebellum", "Hypothalamus", "Medulla"],
        "options_hi": ["सेरिब्रम", "सेरिबेलम", "हाइपोथैलेमस", "मेडुला"],
        "answer_en": "Hypothalamus",
        "answer_hi": "हाइपोथैलेमस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The formation of rainbow involves:",
        "question_hi": "इंद्रधनुष के निर्माण में शामिल है:",
        "options_en": ["Reflection only", "Refraction and dispersion", "Scattering only", "Diffraction only"],
        "options_hi": ["केवल परावर्तन", "अपवर्तन और विक्षेपण", "केवल प्रकीर्णन", "केवल विवर्तन"],
        "answer_en": "Refraction and dispersion",
        "answer_hi": "अपवर्तन और विक्षेपण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which of the following is a non-communicable disease?",
        "question_hi": "निम्नलिखित में से कौन असंचारी रोग है?",
        "options_en": ["Tuberculosis", "Malaria", "Diabetes", "Cholera"],
        "options_hi": ["तपेदिक", "मलेरिया", "मधुमेह", "हैजा"],
        "answer_en": "Diabetes",
        "answer_hi": "मधुमेह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The chemical formula of quick lime is:",
        "question_hi": "बिना बुझा चूने का रासायनिक सूत्र है:",
        "options_en": ["CaO", "Ca(OH)₂", "CaCO₃", "CaCl₂"],
        "options_hi": ["CaO", "Ca(OH)₂", "CaCO₃", "CaCl₂"],
        "answer_en": "CaO",
        "answer_hi": "CaO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which part of the flower receives pollen grains?",
        "question_hi": "फूल का कौन सा भाग पराग कण प्राप्त करता है?",
        "options_en": ["Stigma", "Anther", "Ovary", "Style"],
        "options_hi": ["वर्तिकाग्र", "परागकोष", "अंडाशय", "वर्तिका"],
        "answer_en": "Stigma",
        "answer_hi": "वर्तिकाग्र",
        "attempted": false,
        "selected": ""
    }
];

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