const questions =[
    {
        "num": 1,
        "question_en": "Which of the following is a reversible change?",
        "question_hi": "निम्नलिखित में से कौन प्रतिवर्ती परिवर्तन है?",
        "options_en": ["Burning of wood", "Melting of wax", "Rusting of iron", "Cooking of food"],
        "options_hi": ["लकड़ी का जलना", "मोम का पिघलना", "लोहे में जंग लगना", "भोजन का पकना"],
        "answer_en": "Melting of wax",
        "answer_hi": "मोम का पिघलना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The unit of electric charge is:",
        "question_hi": "विद्युत आवेश की इकाई है:",
        "options_en": ["Volt", "Ampere", "Coulomb", "Ohm"],
        "options_hi": ["वोल्ट", "एम्पियर", "कूलॉम", "ओम"],
        "answer_en": "Coulomb",
        "answer_hi": "कूलॉम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The green pigment in plants is called:",
        "question_hi": "पौधों में हरा वर्णक कहलाता है:",
        "options_en": ["Hemoglobin", "Chlorophyll", "Carotene", "Xanthophyll"],
        "options_hi": ["हीमोग्लोबिन", "क्लोरोफिल", "कैरोटीन", "जैन्थोफिल"],
        "answer_en": "Chlorophyll",
        "answer_hi": "क्लोरोफिल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which metal is used in thermite welding?",
        "question_hi": "थर्माइट वेल्डिंग में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Iron", "Aluminum", "Copper", "Zinc"],
        "options_hi": ["लोहा", "एल्यूमीनियम", "ताँबा", "जस्ता"],
        "answer_en": "Aluminum",
        "answer_hi": "एल्यूमीनियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The focal length of a convex mirror is:",
        "question_hi": "उत्तल दर्पण की फोकस दूरी होती है:",
        "options_en": ["Positive", "Negative", "Zero", "Infinite"],
        "options_hi": ["धनात्मक", "ऋणात्मक", "शून्य", "अनंत"],
        "answer_en": "Positive",
        "answer_hi": "धनात्मक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which process releases energy in cells?",
        "question_hi": "कोशिकाओं में कौन सी प्रक्रिया ऊर्जा मुक्त करती है?",
        "options_en": ["Photosynthesis", "Respiration", "Transpiration", "Digestion"],
        "options_hi": ["प्रकाश संश्लेषण", "श्वसन", "वाष्पोत्सर्जन", "पाचन"],
        "answer_en": "Respiration",
        "answer_hi": "श्वसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The chemical name of baking powder is:",
        "question_hi": "बेकिंग पाउडर का रासायनिक नाम है:",
        "options_en": ["Sodium bicarbonate", "Sodium carbonate", "Sodium hydroxide", "Sodium chloride"],
        "options_hi": ["सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "सोडियम हाइड्रॉक्साइड", "सोडियम क्लोराइड"],
        "answer_en": "Sodium bicarbonate",
        "answer_hi": "सोडियम बाइकार्बोनेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which part of eye contains light-sensitive cells?",
        "question_hi": "आँख का कौन सा भाग प्रकाश-संवेदी कोशिकाएं रखता है?",
        "options_en": ["Cornea", "Iris", "Retina", "Lens"],
        "options_hi": ["कॉर्निया", "परितारिका", "रेटिना", "लेंस"],
        "answer_en": "Retina",
        "answer_hi": "रेटिना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The phenomenon of light bending around obstacles is called:",
        "question_hi": "प्रकाश का बाधाओं के चारों ओर मुड़ने की घटना कहलाती है:",
        "options_en": ["Reflection", "Refraction", "Diffraction", "Scattering"],
        "options_hi": ["परावर्तन", "अपवर्तन", "विवर्तन", "प्रकीर्णन"],
        "answer_en": "Diffraction",
        "answer_hi": "विवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which acid is present in ant sting?",
        "question_hi": "चींटी के डंक में कौन सा अम्ल उपस्थित होता है?",
        "options_en": ["Formic acid", "Acetic acid", "Citric acid", "Lactic acid"],
        "options_hi": ["फॉर्मिक अम्ल", "ऐसीटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल"],
        "answer_en": "Formic acid",
        "answer_hi": "फॉर्मिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "The process of conversion of milk into yogurt involves:",
        "question_hi": "दूध का दही में परिवर्तन शामिल करता है:",
        "options_en": ["Lactic acid bacteria", "Yeast", "Alcohol", "Enzymes"],
        "options_hi": ["लैक्टिक अम्ल जीवाणु", "यीस्ट", "अल्कोहल", "एंजाइम"],
        "answer_en": "Lactic acid bacteria",
        "answer_hi": "लैक्टिक अम्ल जीवाणु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which device measures electric current?",
        "question_hi": "कौन सा यंत्र विद्युत धारा मापता है?",
        "options_en": ["Voltmeter", "Ammeter", "Ohmmeter", "Galvanometer"],
        "options_hi": ["वोल्टमीटर", "अमीटर", "ओममीटर", "गैल्वेनोमीटर"],
        "answer_en": "Ammeter",
        "answer_hi": "अमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The main component of CNG is:",
        "question_hi": "CNG का मुख्य घटक है:",
        "options_en": ["Methane", "Ethane", "Propane", "Butane"],
        "options_hi": ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which of the following is a semiconductor?",
        "question_hi": "निम्नलिखित में से कौन अर्धचालक है?",
        "options_en": ["Copper", "Silicon", "Glass", "Rubber"],
        "options_hi": ["ताँबा", "सिलिकॉन", "काँच", "रबड़"],
        "answer_en": "Silicon",
        "answer_hi": "सिलिकॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The process of water movement in plants is called:",
        "question_hi": "पौधों में जल के संचलन की प्रक्रिया को कहते हैं:",
        "options_en": ["Transpiration", "Photosynthesis", "Ascent of sap", "Respiration"],
        "options_hi": ["वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "रसारोहण", "श्वसन"],
        "answer_en": "Ascent of sap",
        "answer_hi": "रसारोहण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which gas protects us from harmful UV rays?",
        "question_hi": "कौन सी गैस हमें हानिकारक UV किरणों से बचाती है?",
        "options_en": ["Oxygen", "Nitrogen", "Ozone", "Carbon dioxide"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "ओजोन", "कार्बन डाइऑक्साइड"],
        "answer_en": "Ozone",
        "answer_hi": "ओजोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The unit of work in SI system is:",
        "question_hi": "SI प्रणाली में कार्य की इकाई है:",
        "options_en": ["Newton", "Joule", "Watt", "Pascal"],
        "options_hi": ["न्यूटन", "जूल", "वाट", "पास्कल"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Deficiency of which vitamin causes rickets?",
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
        "question_en": "The pH of basic solution is:",
        "question_hi": "क्षारीय विलयन का pH होता है:",
        "options_en": ["7", "Greater than 7", "Less than 7", "0"],
        "options_hi": ["7", "7 से अधिक", "7 से कम", "0"],
        "answer_en": "Greater than 7",
        "answer_hi": "7 से अधिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The bouncing back of light from a surface is called:",
        "question_hi": "सतह से प्रकाश का वापस लौटना कहलाता है:",
        "options_en": ["Reflection", "Refraction", "Diffraction", "Scattering"],
        "options_hi": ["परावर्तन", "अपवर्तन", "विवर्तन", "प्रकीर्णन"],
        "answer_en": "Reflection",
        "answer_hi": "परावर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which organ produces bile in human body?",
        "question_hi": "मानव शरीर में कौन सा अंग पित्त उत्पन्न करता है?",
        "options_en": ["Pancreas", "Liver", "Gall bladder", "Stomach"],
        "options_hi": ["अग्न्याशय", "यकृत", "पित्ताशय", "आमाशय"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The chemical formula of green vitriol is:",
        "question_hi": "हरे थोथे का रासायनिक सूत्र है:",
        "options_en": ["FeSO₄·7H₂O", "CuSO₄·5H₂O", "ZnSO₄·7H₂O", "MgSO₄·7H₂O"],
        "options_hi": ["FeSO₄·7H₂O", "CuSO₄·5H₂O", "ZnSO₄·7H₂O", "MgSO₄·7H₂O"],
        "answer_en": "FeSO₄·7H₂O",
        "answer_hi": "FeSO₄·7H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "A convex lens always forms a virtual image when object is placed:",
        "question_hi": "उत्तल लेंस सदैव आभासी प्रतिबिंब बनाता है जब वस्तु रखी जाती है:",
        "options_en": ["At focus", "Between focus and optical center", "At infinity", "Beyond 2F"],
        "options_hi": ["फोकस पर", "फोकस और प्रकाशीय केंद्र के बीच", "अनंत पर", "2F से परे"],
        "answer_en": "Between focus and optical center",
        "answer_hi": "फोकस और प्रकाशीय केंद्र के बीच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which gland secretes growth hormone?",
        "question_hi": "कौन सी ग्रंथि वृद्धि हार्मोन स्रावित करती है?",
        "options_en": ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
        "options_hi": ["थाइरॉइड", "पीयूष", "अधिवृक्क", "अग्न्याशय"],
        "answer_en": "Pituitary",
        "answer_hi": "पीयूष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The process of coating iron with zinc is called:",
        "question_hi": "लोहे पर जिंक का लेप चढ़ाने की प्रक्रिया को कहते हैं:",
        "options_en": ["Electroplating", "Galvanization", "Anodizing", "Tinning"],
        "options_hi": ["विद्युत लेपन", "जस्तीकरण", "एनोडीकरण", "कलई करना"],
        "answer_en": "Galvanization",
        "answer_hi": "जस्तीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which part of the plant stores food in ginger?",
        "question_hi": "पौधे का कौन सा भाग अदरक में भोजन संग्रह करता है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
        "answer_en": "Stem",
        "answer_hi": "तना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The chemical formula of caustic potash is:",
        "question_hi": "कास्टिक पोटाश का रासायनिक सूत्र है:",
        "options_en": ["KOH", "NaOH", "K₂CO₃", "Na₂CO₃"],
        "options_hi": ["KOH", "NaOH", "K₂CO₃", "Na₂CO₃"],
        "answer_en": "KOH",
        "answer_hi": "KOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which of the following is a conventional energy source?",
        "question_hi": "निम्नलिखित में से कौन पारंपरिक ऊर्जा स्रोत है?",
        "options_en": ["Solar energy", "Wind energy", "Coal", "Tidal energy"],
        "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "ज्वारीय ऊर्जा"],
        "answer_en": "Coal",
        "answer_hi": "कोयला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The process of conversion of fats into fatty acids is called:",
        "question_hi": "वसाओं का वसा अम्लों में परिवर्तन की प्रक्रिया को कहते हैं:",
        "options_en": ["Emulsification", "Hydrolysis", "Saponification", "Fermentation"],
        "options_hi": ["पायसीकरण", "जल-अपघटन", "साबुनीकरण", "किण्वन"],
        "answer_en": "Hydrolysis",
        "answer_hi": "जल-अपघटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which gas is used in balloons?",
        "question_hi": "गुब्बारों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
        "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "हीलियम", "नाइट्रोजन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "The SI unit of pressure is:",
        "question_hi": "दाब की SI इकाई है:",
        "options_en": ["Newton", "Joule", "Watt", "Pascal"],
        "options_hi": ["न्यूटन", "जूल", "वाट", "पास्कल"],
        "answer_en": "Pascal",
        "answer_hi": "पास्कल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which part of the flower contains ovules?",
        "question_hi": "फूल का कौन सा भाग बीजांड रखता है?",
        "options_en": ["Ovary", "Stigma", "Anther", "Style"],
        "options_hi": ["अंडाशय", "वर्तिकाग्र", "परागकोष", "वर्तिका"],
        "answer_en": "Ovary",
        "answer_hi": "अंडाशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The chemical formula of sulfur dioxide is:",
        "question_hi": "सल्फर डाइऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["SO₂", "SO₃", "S", "H₂S"],
        "options_hi": ["SO₂", "SO₃", "S", "H₂S"],
        "answer_en": "SO₂",
        "answer_hi": "SO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which blood cells help in clotting?",
        "question_hi": "कौन सी रक्त कोशिकाएं थक्का जमाने में मदद करती हैं?",
        "options_en": ["RBCs", "WBCs", "Platelets", "Plasma"],
        "options_hi": ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
        "answer_en": "Platelets",
        "answer_hi": "प्लेटलेट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The device used to measure earthquake intensity is:",
        "question_hi": "भूकंप की तीव्रता मापने के लिए प्रयुक्त यंत्र है:",
        "options_en": ["Barometer", "Seismograph", "Thermometer", "Hygrometer"],
        "options_hi": ["बैरोमीटर", "सिस्मोग्राफ", "थर्मामीटर", "आर्द्रतामापी"],
        "answer_en": "Seismograph",
        "answer_hi": "सिस्मोग्राफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
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
        "num": 37,
        "question_en": "The process of conversion of liquid into solid is called:",
        "question_hi": "द्रव का ठोस में परिवर्तन की प्रक्रिया को कहते हैं:",
        "options_en": ["Evaporation", "Condensation", "Freezing", "Sublimation"],
        "options_hi": ["वाष्पीकरण", "संघनन", "जमना", "उर्ध्वपातन"],
        "answer_en": "Freezing",
        "answer_hi": "जमना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which organelle is called control center of cell?",
        "question_hi": "कोशिका के किस अंगक को नियंत्रण केंद्र कहा जाता है?",
        "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The chemical formula of Epsom salt is:",
        "question_hi": "एप्सम साल्ट का रासायनिक सूत्र है:",
        "options_en": ["MgSO₄·7H₂O", "CaSO₄·2H₂O", "Na₂SO₄·10H₂O", "CuSO₄·5H₂O"],
        "options_hi": ["MgSO₄·7H₂O", "CaSO₄·2H₂O", "Na₂SO₄·10H₂O", "CuSO₄·5H₂O"],
        "answer_en": "MgSO₄·7H₂O",
        "answer_hi": "MgSO₄·7H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which mirror is used in shaving mirrors?",
        "question_hi": "शेविंग दर्पण में किस दर्पण का उपयोग किया जाता है?",
        "options_en": ["Plane mirror", "Concave mirror", "Convex mirror", "Spherical mirror"],
        "options_hi": ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "गोलाकार दर्पण"],
        "answer_en": "Concave mirror",
        "answer_hi": "अवतल दर्पण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "The process of chewing food is called:",
        "question_hi": "भोजन चबाने की प्रक्रिया को कहते हैं:",
        "options_en": ["Digestion", "Ingestion", "Mastication", "Absorption"],
        "options_hi": ["पाचन", "अंतर्ग्रहण", "चर्वण", "अवशोषण"],
        "answer_en": "Mastication",
        "answer_hi": "चर्वण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which gas is absorbed by plants during daytime?",
        "question_hi": "दिन के समय पौधों द्वारा कौन सी गैस अवशोषित की जाती है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The instrument used to measure resistance is:",
        "question_hi": "प्रतिरोध मापने के लिए प्रयुक्त यंत्र है:",
        "options_en": ["Ammeter", "Voltmeter", "Ohmmeter", "Galvanometer"],
        "options_hi": ["अमीटर", "वोल्टमीटर", "ओममीटर", "गैल्वेनोमीटर"],
        "answer_en": "Ohmmeter",
        "answer_hi": "ओममीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which acid is present in grapes?",
        "question_hi": "अंगूर में कौन सा अम्ल उपस्थित होता है?",
        "options_en": ["Tartaric acid", "Citric acid", "Malic acid", "Oxalic acid"],
        "options_hi": ["टार्टरिक अम्ल", "साइट्रिक अम्ल", "मैलिक अम्ल", "ऑक्सैलिक अम्ल"],
        "answer_en": "Tartaric acid",
        "answer_hi": "टार्टरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The image formed in a simple microscope is:",
        "question_hi": "सरल सूक्ष्मदर्शी में बना प्रतिबिंब होता है:",
        "options_en": ["Real and inverted", "Virtual and erect", "Real and erect", "Virtual and inverted"],
        "options_hi": ["वास्तविक और उल्टा", "आभासी और सीधा", "वास्तविक और सीधा", "आभासी और उल्टा"],
        "answer_en": "Virtual and erect",
        "answer_hi": "आभासी और सीधा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which metal is used in making aeroplanes?",
        "question_hi": "विमान बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Iron", "Aluminum", "Copper", "Gold"],
        "options_hi": ["लोहा", "एल्यूमीनियम", "ताँबा", "सोना"],
        "answer_en": "Aluminum",
        "answer_hi": "एल्यूमीनियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "The process of food making in plants occurs in:",
        "question_hi": "पौधों में भोजन बनाने की प्रक्रिया होती है:",
        "options_en": ["Roots", "Stems", "Leaves", "Flowers"],
        "options_hi": ["जड़ों में", "तनों में", "पत्तियों में", "फूलों में"],
        "answer_en": "Leaves",
        "answer_hi": "पत्तियों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which of the following is a noble gas?",
        "question_hi": "निम्नलिखित में से कौन उत्कृष्ट गैस है?",
        "options_en": ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The phenomenon due to which advanced sunrise occurs is:",
        "question_hi": "वह घटना जिसके कारण उन्नत सूर्योदय होता है:",
        "options_en": ["Reflection", "Refraction", "Scattering", "Dispersion"],
        "options_hi": ["परावर्तन", "अपवर्तन", "प्रकीर्णन", "विक्षेपण"],
        "answer_en": "Refraction",
        "answer_hi": "अपवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which part of brain controls hunger and thirst?",
        "question_hi": "मस्तिष्क का कौन सा भाग भूख और प्यास को नियंत्रित करता है?",
        "options_en": ["Cerebrum", "Cerebellum", "Hypothalamus", "Medulla"],
        "options_hi": ["सेरिब्रम", "सेरिबेलम", "हाइपोथैलेमस", "मेडुला"],
        "answer_en": "Hypothalamus",
        "answer_hi": "हाइपोथैलेमस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "The chemical formula of soda ash is:",
        "question_hi": "सोडा ऐश का रासायनिक सूत्र है:",
        "options_en": ["Na₂CO₃", "NaHCO₃", "NaOH", "NaCl"],
        "options_hi": ["Na₂CO₃", "NaHCO₃", "NaOH", "NaCl"],
        "answer_en": "Na₂CO₃",
        "answer_hi": "Na₂CO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which blood cells carry oxygen?",
        "question_hi": "कौन सी रक्त कोशिकाएं ऑक्सीजन ले जाती हैं?",
        "options_en": ["RBCs", "WBCs", "Platelets", "All of these"],
        "options_hi": ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "ये सभी"],
        "answer_en": "RBCs",
        "answer_hi": "लाल रक्त कोशिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "The speed of light in water is approximately:",
        "question_hi": "पानी में प्रकाश की गति लगभग है:",
        "options_en": ["3 × 10⁸ m/s", "2.25 × 10⁸ m/s", "2 × 10⁸ m/s", "1.5 × 10⁸ m/s"],
        "options_hi": ["3 × 10⁸ मीटर/सेकंड", "2.25 × 10⁸ मीटर/सेकंड", "2 × 10⁸ मीटर/सेकंड", "1.5 × 10⁸ मीटर/सेकंड"],
        "answer_en": "2.25 × 10⁸ m/s",
        "answer_hi": "2.25 × 10⁸ मीटर/सेकंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which organ helps in smelling?",
        "question_hi": "कौन सा अंग सूंघने में मदद करता है?",
        "options_en": ["Eyes", "Ears", "Nose", "Tongue"],
        "options_hi": ["आँखें", "कान", "नाक", "जीभ"],
        "answer_en": "Nose",
        "answer_hi": "नाक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "The process of conversion of ice into water is called:",
        "question_hi": "बर्फ का पानी में परिवर्तन की प्रक्रिया को कहते हैं:",
        "options_en": ["Evaporation", "Condensation", "Melting", "Sublimation"],
        "options_hi": ["वाष्पीकरण", "संघनन", "गलन", "उर्ध्वपातन"],
        "answer_en": "Melting",
        "answer_hi": "गलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which of the following is the poorest conductor of electricity?",
        "question_hi": "निम्नलिखित में से कौन विद्युत का सबसे खराब सुचालक है?",
        "options_en": ["Copper", "Silver", "Glass", "Aluminum"],
        "options_hi": ["ताँबा", "चाँदी", "काँच", "एल्यूमीनियम"],
        "answer_en": "Glass",
        "answer_hi": "काँच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "The process of breakdown of glucose without oxygen is called:",
        "question_hi": "ऑक्सीजन के बिना ग्लूकोज के टूटने की प्रक्रिया को कहते हैं:",
        "options_en": ["Aerobic respiration", "Anaerobic respiration", "Fermentation", "Photosynthesis"],
        "options_hi": ["वायवीय श्वसन", "अवायवीय श्वसन", "किण्वन", "प्रकाश संश्लेषण"],
        "answer_en": "Anaerobic respiration",
        "answer_hi": "अवायवीय श्वसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which mirror is used in street light reflectors?",
        "question_hi": "स्ट्रीट लाइट रिफ्लेक्टर में किस दर्पण का उपयोग किया जाता है?",
        "options_en": ["Plane mirror", "Concave mirror", "Convex mirror", "Spherical mirror"],
        "options_hi": ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "गोलाकार दर्पण"],
        "answer_en": "Convex mirror",
        "answer_hi": "उत्तल दर्पण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "The chemical formula of bleaching powder is:",
        "question_hi": "ब्लीचिंग पाउडर का रासायनिक सूत्र है:",
        "options_en": ["CaOCl₂", "Ca(OH)₂", "CaCO₃", "CaCl₂"],
        "options_hi": ["CaOCl₂", "Ca(OH)₂", "CaCO₃", "CaCl₂"],
        "answer_en": "CaOCl₂",
        "answer_hi": "CaOCl₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Deficiency of which vitamin causes pellagra?",
        "question_hi": "किस विटामिन की कमी से पेलाग्रा रोग होता है?",
        "options_en": ["Vitamin B3", "Vitamin B1", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन B3", "विटामिन B1", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin B3",
        "answer_hi": "विटामिन B3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "The device that converts DC to AC is:",
        "question_hi": "वह युक्ति जो DC को AC में बदलती है:",
        "options_en": ["Transformer", "Rectifier", "Inverter", "Generator"],
        "options_hi": ["ट्रांसफॉर्मर", "दिष्टकारी", "इन्वर्टर", "जनरेटर"],
        "answer_en": "Inverter",
        "answer_hi": "इन्वर्टर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which part of the plant is modified in cactus?",
        "question_hi": "पौधे का कौन सा भाग कैक्टस में संशोधित होता है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
        "answer_en": "Leaf",
        "answer_hi": "पत्ती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The chemical formula of ammonia is:",
        "question_hi": "अमोनिया का रासायनिक सूत्र है:",
        "options_en": ["NH₃", "NH₄OH", "NH₄Cl", "NH₄NO₃"],
        "options_hi": ["NH₃", "NH₄OH", "NH₄Cl", "NH₄NO₃"],
        "answer_en": "NH₃",
        "answer_hi": "NH₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which of the following is a muscular tissue?",
        "question_hi": "निम्नलिखित में से कौन पेशी ऊतक है?",
        "options_en": ["Bone", "Cartilage", "Cardiac muscle", "Blood"],
        "options_hi": ["हड्डी", "उपास्थि", "हृदय पेशी", "रक्त"],
        "answer_en": "Cardiac muscle",
        "answer_hi": "हृदय पेशी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The device used to measure wind speed is:",
        "question_hi": "पवन की गति मापने के लिए प्रयुक्त यंत्र है:",
        "options_en": ["Barometer", "Thermometer", "Anemometer", "Hygrometer"],
        "options_hi": ["बैरोमीटर", "थर्मामीटर", "पवनवेगमापी", "आर्द्रतामापी"],
        "answer_en": "Anemometer",
        "answer_hi": "पवनवेगमापी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which gas is used in welding?",
        "question_hi": "वेल्डिंग में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Acetylene", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "एसिटिलीन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Acetylene",
        "answer_hi": "एसिटिलीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The device that converts electrical energy to sound energy is:",
        "question_hi": "वह युक्ति जो विद्युत ऊर्जा को ध्वनि ऊर्जा में बदलती है:",
        "options_en": ["Motor", "Generator", "Speaker", "Battery"],
        "options_hi": ["मोटर", "जनरेटर", "स्पीकर", "बैटरी"],
        "answer_en": "Speaker",
        "answer_hi": "स्पीकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which part of the cell contains chlorophyll?",
        "question_hi": "कोशिका का कौन सा भाग क्लोरोफिल रखता है?",
        "options_en": ["Chloroplast", "Nucleus", "Mitochondria", "Ribosome"],
        "options_hi": ["हरितलवक", "केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम"],
        "answer_en": "Chloroplast",
        "answer_hi": "हरितलवक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "The chemical formula of calcium chloride is:",
        "question_hi": "कैल्शियम क्लोराइड का रासायनिक सूत्र है:",
        "options_en": ["CaCl₂", "CaCO₃", "CaO", "Ca(OH)₂"],
        "options_hi": ["CaCl₂", "CaCO₃", "CaO", "Ca(OH)₂"],
        "answer_en": "CaCl₂",
        "answer_hi": "CaCl₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which mirror always forms an erect image?",
        "question_hi": "कौन सा दर्पण सदैव सीधा प्रतिबिंब बनाता है?",
        "options_en": ["Plane mirror", "Concave mirror", "Convex mirror", "All of these"],
        "options_hi": ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "The process of conversion of proteins to amino acids is called:",
        "question_hi": "प्रोटीन का अमीनो अम्लों में परिवर्तन की प्रक्रिया को कहते हैं:",
        "options_en": ["Digestion", "Hydrolysis", "Fermentation", "Photosynthesis"],
        "options_hi": ["पाचन", "जल-अपघटन", "किण्वन", "प्रकाश संश्लेषण"],
        "answer_en": "Hydrolysis",
        "answer_hi": "जल-अपघटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which of the following is a non-renewable resource?",
        "question_hi": "निम्नलिखित में से कौन अनवीकरणीय संसाधन है?",
        "options_en": ["Solar energy", "Wind energy", "Natural gas", "Biomass"],
        "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "प्राकृतिक गैस", "बायोमास"],
        "answer_en": "Natural gas",
        "answer_hi": "प्राकृतिक गैस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The chemical formula of propane is:",
        "question_hi": "प्रोपेन का रासायनिक सूत्र है:",
        "options_en": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "answer_en": "C₃H₈",
        "answer_hi": "C₃H₈",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which tissue provides support to plants?",
        "question_hi": "कौन सा ऊतक पौधों को सहारा प्रदान करता है?",
        "options_en": ["Xylem", "Phloem", "Sclerenchyma", "Epidermis"],
        "options_hi": ["जाइलम", "फ्लोएम", "दृढ़ोतक", "बाह्यत्वचा"],
        "answer_en": "Sclerenchyma",
        "answer_hi": "दृढ़ोतक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The device that stores electrical energy is:",
        "question_hi": "वह युक्ति जो विद्युत ऊर्जा संग्रहित करती है:",
        "options_en": ["Transformer", "Battery", "Generator", "Motor"],
        "options_hi": ["ट्रांसफॉर्मर", "बैटरी", "जनरेटर", "मोटर"],
        "answer_en": "Battery",
        "answer_hi": "बैटरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which acid is present in apples?",
        "question_hi": "सेब में कौन सा अम्ल उपस्थित होता है?",
        "options_en": ["Malic acid", "Citric acid", "Tartaric acid", "Oxalic acid"],
        "options_hi": ["मैलिक अम्ल", "साइट्रिक अम्ल", "टार्टरिक अम्ल", "ऑक्सैलिक अम्ल"],
        "answer_en": "Malic acid",
        "answer_hi": "मैलिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The process of conversion of dead organic matter to ammonia is:",
        "question_hi": "मृत कार्बनिक पदार्थ का अमोनिया में परिवर्तन की प्रक्रिया है:",
        "options_en": ["Nitrogen fixation", "Denitrification", "Nitrification", "Ammonification"],
        "options_hi": ["नाइट्रोजन स्थिरीकरण", "विनाइट्रीकरण", "नाइट्रीकरण", "अमोनीकरण"],
        "answer_en": "Ammonification",
        "answer_hi": "अमोनीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which of the following is non-biodegradable?",
        "question_hi": "निम्नलिखित में से कौन गैर-जैव निम्नीकरणीय है?",
        "options_en": ["Cotton", "Paper", "Plastic", "Wood"],
        "options_hi": ["सूती", "कागज", "प्लास्टिक", "लकड़ी"],
        "answer_en": "Plastic",
        "answer_hi": "प्लास्टिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The chemical formula of butane is:",
        "question_hi": "ब्यूटेन का रासायनिक सूत्र है:",
        "options_en": ["C₄H₁₀", "C₃H₈", "C₂H₆", "CH₄"],
        "options_hi": ["C₄H₁₀", "C₃H₈", "C₂H₆", "CH₄"],
        "answer_en": "C₄H₁₀",
        "answer_hi": "C₄H₁₀",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which tissue transports water in plants?",
        "question_hi": "कौन सा ऊतक पौधों में पानी का परिवहन करता है?",
        "options_en": ["Phloem", "Xylem", "Epidermis", "Cortex"],
        "options_hi": ["फ्लोएम", "जाइलम", "बाह्यत्वचा", "वल्कुट"],
        "answer_en": "Xylem",
        "answer_hi": "जाइलम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
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
        "num": 82,
        "question_en": "Which gas is released during respiration in plants at night?",
        "question_hi": "रात के समय पौधों में श्वसन के दौरान कौन सी गैस मुक्त होती है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "The chemical formula of lactic acid is:",
        "question_hi": "लैक्टिक अम्ल का रासायनिक सूत्र है:",
        "options_en": ["C₃H₆O₃", "C₂H₅OH", "CH₃COOH", "C₆H₁₂O₆"],
        "options_hi": ["C₃H₆O₃", "C₂H₅OH", "CH₃COOH", "C₆H₁₂O₆"],
        "answer_en": "C₃H₆O₃",
        "answer_hi": "C₃H₆O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which organ pumps blood in human body?",
        "question_hi": "मानव शरीर में कौन सा अंग रक्त पंप करता है?",
        "options_en": ["Heart", "Liver", "Kidney", "Lungs"],
        "options_hi": ["हृदय", "यकृत", "वृक्क", "फेफड़े"],
        "answer_en": "Heart",
        "answer_hi": "हृदय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The phenomenon of delayed sunset is due to:",
        "question_hi": "विलंबित सूर्यास्त की घटना होती है:",
        "options_en": ["Earth's rotation", "Atmospheric refraction", "Scattering", "Dispersion"],
        "options_hi": ["पृथ्वी का घूर्णन", "वायुमंडलीय अपवर्तन", "प्रकीर्णन", "विक्षेपण"],
        "answer_en": "Atmospheric refraction",
        "answer_hi": "वायुमंडलीय अपवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which of the following is biodegradable?",
        "question_hi": "निम्नलिखित में से कौन जैव निम्नीकरणीय है?",
        "options_en": ["Plastic", "Glass", "Metal", "Food waste"],
        "options_hi": ["प्लास्टिक", "काँच", "धातु", "खाद्य अपशिष्ट"],
        "answer_en": "Food waste",
        "answer_hi": "खाद्य अपशिष्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The chemical formula of calcium hydroxide is:",
        "question_hi": "कैल्शियम हाइड्रॉक्साइड का रासायनिक सूत्र है:",
        "options_en": ["Ca(OH)₂", "CaO", "CaCO₃", "CaCl₂"],
        "options_hi": ["Ca(OH)₂", "CaO", "CaCO₃", "CaCl₂"],
        "answer_en": "Ca(OH)₂",
        "answer_hi": "Ca(OH)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which gland secretes adrenaline hormone?",
        "question_hi": "कौन सी ग्रंथि एड्रेनालाईन हार्मोन स्रावित करती है?",
        "options_en": ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
        "options_hi": ["थाइरॉइड", "पीयूष", "अधिवृक्क", "अग्न्याशय"],
        "answer_en": "Adrenal",
        "answer_hi": "अधिवृक्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The phenomenon due to which diamond sparkles is:",
        "question_hi": "वह घटना जिसके कारण हीरा चमकता है:",
        "options_en": ["Reflection", "Total internal reflection", "Refraction", "Scattering"],
        "options_hi": ["परावर्तन", "पूर्ण आंतरिक परावर्तन", "अपवर्तन", "प्रकीर्णन"],
        "answer_en": "Total internal reflection",
        "answer_hi": "पूर्ण आंतरिक परावर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which of the following is a micronutrient for plants?",
        "question_hi": "निम्नलिखित में से कौन पौधों के लिए सूक्ष्म पोषक तत्व है?",
        "options_en": ["Nitrogen", "Phosphorus", "Manganese", "Potassium"],
        "options_hi": ["नाइट्रोजन", "फॉस्फोरस", "मैंगनीज", "पोटैशियम"],
        "answer_en": "Manganese",
        "answer_hi": "मैंगनीज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The chemical formula of formic acid is:",
        "question_hi": "फॉर्मिक अम्ल का रासायनिक सूत्र है:",
        "options_en": ["HCOOH", "CH₃COOH", "C₆H₈O₇", "C₄H₆O₆"],
        "options_hi": ["HCOOH", "CH₃COOH", "C₆H₈O₇", "C₄H₆O₆"],
        "answer_en": "HCOOH",
        "answer_hi": "HCOOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which organelle is called packaging center of cell?",
        "question_hi": "कोशिका के किस अंगक को पैकेजिंग केंद्र कहा जाता है?",
        "options_en": ["Lysosome", "Mitochondria", "Golgi apparatus", "Ribosome"],
        "options_hi": ["लाइसोसोम", "माइटोकॉन्ड्रिया", "गॉल्जी उपकरण", "राइबोसोम"],
        "answer_en": "Golgi apparatus",
        "answer_hi": "गॉल्जी उपकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The instrument used to measure temperature is:",
        "question_hi": "तापमान मापने के लिए प्रयुक्त यंत्र है:",
        "options_en": ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
        "options_hi": ["बैरोमीटर", "थर्मामीटर", "आर्द्रतामापी", "पवनवेगमापी"],
        "answer_en": "Thermometer",
        "answer_hi": "थर्मामीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which gas is absorbed by plants during night?",
        "question_hi": "रात के समय पौधों द्वारा कौन सी गैस अवशोषित की जाती है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The chemical formula of nitrogen gas is:",
        "question_hi": "नाइट्रोजन गैस का रासायनिक सूत्र है:",
        "options_en": ["N", "N₂", "NO", "NO₂"],
        "options_hi": ["N", "N₂", "NO", "NO₂"],
        "answer_en": "N₂",
        "answer_hi": "N₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which part of the brain controls voluntary actions?",
        "question_hi": "मस्तिष्क का कौन सा भाग ऐच्छिक क्रियाओं को नियंत्रित करता है?",
        "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
        "options_hi": ["सेरिब्रम", "सेरिबेलम", "मेडुला", "हाइपोथैलेमस"],
        "answer_en": "Cerebrum",
        "answer_hi": "सेरिब्रम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The formation of image in camera involves:",
        "question_hi": "कैमरा में प्रतिबिंब का निर्माण शामिल करता है:",
        "options_en": ["Concave lens", "Convex lens", "Plane mirror", "Convex mirror"],
        "options_hi": ["अवतल लेंस", "उत्तल लेंस", "समतल दर्पण", "उत्तल दर्पण"],
        "answer_en": "Convex lens",
        "answer_hi": "उत्तल लेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which of the following is a communicable disease?",
        "question_hi": "निम्नलिखित में से कौन संचारी रोग है?",
        "options_en": ["Diabetes", "Cancer", "Tuberculosis", "Heart disease"],
        "options_hi": ["मधुमेह", "कैंसर", "तपेदिक", "हृदय रोग"],
        "answer_en": "Tuberculosis",
        "answer_hi": "तपेदिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The chemical formula of potassium permanganate is:",
        "question_hi": "पोटेशियम परमैंगनेट का रासायनिक सूत्र है:",
        "options_en": ["KMnO₄", "K₂MnO₄", "KCl", "KOH"],
        "options_hi": ["KMnO₄", "K₂MnO₄", "KCl", "KOH"],
        "answer_en": "KMnO₄",
        "answer_hi": "KMnO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which part of the flower produces seeds?",
        "question_hi": "फूल का कौन सा भाग बीज उत्पन्न करता है?",
        "options_en": ["Ovary", "Stigma", "Anther", "Style"],
        "options_hi": ["अंडाशय", "वर्तिकाग्र", "परागकोष", "वर्तिका"],
        "answer_en": "Ovary",
        "answer_hi": "अंडाशय",
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