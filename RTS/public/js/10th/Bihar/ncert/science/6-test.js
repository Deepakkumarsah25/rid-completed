const questions =[
    {
        "num": 1,
        "question_en": "Which of the following is a periodic motion?",
        "question_hi": "निम्नलिखित में से कौन आवर्ती गति है?",
        "options_en": ["Motion of pendulum", "Motion of car on road", "Motion of falling stone", "Motion of rolling ball"],
        "options_hi": ["लोलक की गति", "सड़क पर कार की गति", "गिरते पत्थर की गति", "लुढ़कती गेंद की गति"],
        "answer_en": "Motion of pendulum",
        "answer_hi": "लोलक की गति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The SI unit of inductance is:",
        "question_hi": "प्रेरकत्व की SI इकाई है:",
        "options_en": ["Henry", "Farad", "Ohm", "Tesla"],
        "options_hi": ["हेनरी", "फैरड", "ओम", "टेस्ला"],
        "answer_en": "Henry",
        "answer_hi": "हेनरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The plant hormone that promotes fruit ripening is:",
        "question_hi": "वह पादप हार्मोन जो फल पकने को बढ़ावा देता है:",
        "options_en": ["Auxin", "Gibberellin", "Ethylene", "Abscisic acid"],
        "options_hi": ["ऑक्सिन", "जिबरेलिन", "एथिलीन", "एब्सिसिक अम्ल"],
        "answer_en": "Ethylene",
        "answer_hi": "एथिलीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which metal is used in making electric cables?",
        "question_hi": "विद्युत केबल बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Copper", "Lead", "Mercury", "Tungsten"],
        "options_hi": ["ताँबा", "लेड", "पारा", "टंगस्टन"],
        "answer_en": "Copper",
        "answer_hi": "ताँबा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The lens used to correct presbyopia is:",
        "question_hi": "जरादूरदृष्टि सुधारने के लिए प्रयुक्त लेंस है:",
        "options_en": ["Convex lens", "Concave lens", "Bifocal lens", "Cylindrical lens"],
        "options_hi": ["उत्तल लेंस", "अवतल लेंस", "द्विफोकसी लेंस", "बेलनाकार लेंस"],
        "answer_en": "Bifocal lens",
        "answer_hi": "द्विफोकसी लेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The process of upward movement of water in plants is called:",
        "question_hi": "पौधों में जल के ऊपर की ओर संचलन की प्रक्रिया को कहते हैं:",
        "options_en": ["Transpiration", "Ascent of sap", "Photosynthesis", "Respiration"],
        "options_hi": ["वाष्पोत्सर्जन", "रसारोहण", "प्रकाश संश्लेषण", "श्वसन"],
        "answer_en": "Ascent of sap",
        "answer_hi": "रसारोहण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The chemical formula of ammonium sulfate is:",
        "question_hi": "अमोनियम सल्फेट का रासायनिक सूत्र है:",
        "options_en": ["(NH₄)₂SO₄", "NH₄Cl", "NH₄NO₃", "NH₄OH"],
        "options_hi": ["(NH₄)₂SO₄", "NH₄Cl", "NH₄NO₃", "NH₄OH"],
        "answer_en": "(NH₄)₂SO₄",
        "answer_hi": "(NH₄)₂SO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which part of eye gives it color?",
        "question_hi": "आँख का कौन सा भाग उसे रंग देता है?",
        "options_en": ["Cornea", "Iris", "Retina", "Pupil"],
        "options_hi": ["कॉर्निया", "परितारिका", "रेटिना", "पुतली"],
        "answer_en": "Iris",
        "answer_hi": "परितारिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The phenomenon of light waves cancelling each other is called:",
        "question_hi": "प्रकाश तरंगों का एक-दूसरे को निरस्त करने की घटना को कहते हैं:",
        "options_en": ["Constructive interference", "Destructive interference", "Diffraction", "Polarization"],
        "options_hi": ["रचनात्मक व्यतिकरण", "विनाशी व्यतिकरण", "विवर्तन", "ध्रुवण"],
        "answer_en": "Destructive interference",
        "answer_hi": "विनाशी व्यतिकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which acid is used in pickling of steel?",
        "question_hi": "स्टील के अम्ल धावन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Phosphoric acid"],
        "options_hi": ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "फॉस्फोरिक अम्ल"],
        "answer_en": "Hydrochloric acid",
        "answer_hi": "हाइड्रोक्लोरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "The process of conversion of atmospheric nitrogen to plant usable form is:",
        "question_hi": "वायुमंडलीय नाइट्रोजन का पौधों द्वारा उपयोग योग्य रूप में परिवर्तन की प्रक्रिया है:",
        "options_en": ["Photosynthesis", "Nitrogen fixation", "Respiration", "Transpiration"],
        "options_hi": ["प्रकाश संश्लेषण", "नाइट्रोजन स्थिरीकरण", "श्वसन", "वाष्पोत्सर्जन"],
        "answer_en": "Nitrogen fixation",
        "answer_hi": "नाइट्रोजन स्थिरीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which device converts solar energy to electrical energy?",
        "question_hi": "कौन सा यंत्र सौर ऊर्जा को विद्युत ऊर्जा में बदलता है?",
        "options_en": ["Solar cell", "Solar cooker", "Solar heater", "Solar furnace"],
        "options_hi": ["सौर सेल", "सौर कुकर", "सौर हीटर", "सौर भट्टी"],
        "answer_en": "Solar cell",
        "answer_hi": "सौर सेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The main component of water gas is:",
        "question_hi": "वाटर गैस का मुख्य घटक है:",
        "options_en": ["CO + H₂", "CH₄", "C₂H₂", "C₃H₈"],
        "options_hi": ["CO + H₂", "CH₄", "C₂H₂", "C₃H₈"],
        "answer_en": "CO + H₂",
        "answer_hi": "CO + H₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which of the following is a superconductor at low temperature?",
        "question_hi": "निम्नलिखित में से कौन कम तापमान पर अतिचालक है?",
        "options_en": ["Copper", "Mercury", "Silver", "Aluminum"],
        "options_hi": ["ताँबा", "पारा", "चाँदी", "एल्यूमीनियम"],
        "answer_en": "Mercury",
        "answer_hi": "पारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The process of absorption of digested food into blood is called:",
        "question_hi": "पचे हुए भोजन का रक्त में अवशोषण की प्रक्रिया को कहते हैं:",
        "options_en": ["Ingestion", "Digestion", "Absorption", "Assimilation"],
        "options_hi": ["अंतर्ग्रहण", "पाचन", "अवशोषण", "स्वांगीकरण"],
        "answer_en": "Absorption",
        "answer_hi": "अवशोषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which gas is responsible for Bhopal gas tragedy?",
        "question_hi": "भोपाल गैस त्रासदी के लिए कौन सी गैस जिम्मेदार थी?",
        "options_en": ["Methyl isocyanate", "Carbon monoxide", "Sulfur dioxide", "Ammonia"],
        "options_hi": ["मेथिल आइसोसाइनेट", "कार्बन मोनोऑक्साइड", "सल्फर डाइऑक्साइड", "अमोनिया"],
        "answer_en": "Methyl isocyanate",
        "answer_hi": "मेथिल आइसोसाइनेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The unit of capacitance is:",
        "question_hi": "धारिता की इकाई है:",
        "options_en": ["Farad", "Henry", "Ohm", "Tesla"],
        "options_hi": ["फैरड", "हेनरी", "ओम", "टेस्ला"],
        "answer_en": "Farad",
        "answer_hi": "फैरड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Deficiency of which mineral causes muscle cramps?",
        "question_hi": "किस खनिज की कमी से मांसपेशियों में ऐंठन होती है?",
        "options_en": ["Potassium", "Calcium", "Iron", "Sodium"],
        "options_hi": ["पोटैशियम", "कैल्शियम", "आयरन", "सोडियम"],
        "answer_en": "Potassium",
        "answer_hi": "पोटैशियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The pH of human blood is approximately:",
        "question_hi": "मानव रक्त का pH लगभग है:",
        "options_en": ["7.35-7.45", "6.8-7.0", "7.8-8.0", "5.5-6.5"],
        "options_hi": ["7.35-7.45", "6.8-7.0", "7.8-8.0", "5.5-6.5"],
        "answer_en": "7.35-7.45",
        "answer_hi": "7.35-7.45",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The bluish color of water in deep sea is due to:",
        "question_hi": "गहरे समुद्र में पानी का नीला रंग होता है:",
        "options_en": ["Reflection of sky", "Absorption of red light", "Scattering", "All of these"],
        "options_hi": ["आकाश का परावर्तन", "लाल प्रकाश का अवशोषण", "प्रकीर्णन", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which organ produces digestive enzymes in human body?",
        "question_hi": "मानव शरीर में कौन सा अंग पाचक एंजाइम उत्पन्न करता है?",
        "options_en": ["Pancreas", "Liver", "Stomach", "Small intestine"],
        "options_hi": ["अग्न्याशय", "यकृत", "आमाशय", "छोटी आँत"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The chemical formula of ferrous sulfate is:",
        "question_hi": "फेरस सल्फेट का रासायनिक सूत्र है:",
        "options_en": ["FeSO₄", "Fe₂(SO₄)₃", "FeCl₃", "Fe₂O₃"],
        "options_hi": ["FeSO₄", "Fe₂(SO₄)₃", "FeCl₃", "Fe₂O₃"],
        "answer_en": "FeSO₄",
        "answer_hi": "FeSO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The lens used in compound microscope is:",
        "question_hi": "संयुक्त सूक्ष्मदर्शी में प्रयुक्त लेंस है:",
        "options_en": ["Two convex lenses", "Two concave lenses", "One convex one concave", "None of these"],
        "options_hi": ["दो उत्तल लेंस", "दो अवतल लेंस", "एक उत्तल एक अवतल", "इनमें से कोई नहीं"],
        "answer_en": "Two convex lenses",
        "answer_hi": "दो उत्तल लेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which gland secretes testosterone?",
        "question_hi": "कौन सी ग्रंथि टेस्टोस्टेरोन स्रावित करती है?",
        "options_en": ["Testis", "Ovary", "Pituitary", "Thyroid"],
        "options_hi": ["वृषण", "अंडाशय", "पीयूष", "थाइरॉइड"],
        "answer_en": "Testis",
        "answer_hi": "वृषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The process of preventing corrosion by coating with paint is:",
        "question_hi": "पेंट के लेप द्वारा संक्षारण रोकने की प्रक्रिया है:",
        "options_en": ["Galvanization", "Electroplating", "Painting", "Anodizing"],
        "options_hi": ["जस्तीकरण", "विद्युत लेपन", "पेंटिंग", "एनोडीकरण"],
        "answer_en": "Painting",
        "answer_hi": "पेंटिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which part of the plant stores food in sweet potato?",
        "question_hi": "पौधे का कौन सा भाग शकरकंद में भोजन संग्रह करता है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
        "answer_en": "Root",
        "answer_hi": "जड़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The chemical formula of ammonium chloride is:",
        "question_hi": "अमोनियम क्लोराइड का रासायनिक सूत्र है:",
        "options_en": ["NH₄Cl", "NH₄NO₃", "(NH₄)₂SO₄", "NH₄OH"],
        "options_hi": ["NH₄Cl", "NH₄NO₃", "(NH₄)₂SO₄", "NH₄OH"],
        "answer_en": "NH₄Cl",
        "answer_hi": "NH₄Cl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which of the following is a wind energy device?",
        "question_hi": "निम्नलिखित में से कौन पवन ऊर्जा उपकरण है?",
        "options_en": ["Windmill", "Solar panel", "Hydro turbine", "Geothermal plant"],
        "options_hi": ["पवन चक्की", "सौर पैनल", "जल टर्बाइन", "भूतापीय संयंत्र"],
        "answer_en": "Windmill",
        "answer_hi": "पवन चक्की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The process of conversion of fats to soap is called:",
        "question_hi": "वसाओं का साबुन में परिवर्तन की प्रक्रिया को कहते हैं:",
        "options_en": ["Hydrolysis", "Saponification", "Hydrogenation", "Fermentation"],
        "options_hi": ["जल-अपघटन", "साबुनीकरण", "हाइड्रोजनीकरण", "किण्वन"],
        "answer_en": "Saponification",
        "answer_hi": "साबुनीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which gas is used in making soft drinks?",
        "question_hi": "शीतल पेय बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "The SI unit of radioactivity is:",
        "question_hi": "रेडियोधर्मिता की SI इकाई है:",
        "options_en": ["Becquerel", "Curie", "Rutherford", "Roentgen"],
        "options_hi": ["बेकरेल", "क्यूरी", "रदरफोर्ड", "रॉन्टजन"],
        "answer_en": "Becquerel",
        "answer_hi": "बेकरेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which part of flower produces male gametes?",
        "question_hi": "फूल का कौन सा भाग नर युग्मक उत्पन्न करता है?",
        "options_en": ["Anther", "Ovary", "Stigma", "Style"],
        "options_hi": ["परागकोष", "अंडाशय", "वर्तिकाग्र", "वर्तिका"],
        "answer_en": "Anther",
        "answer_hi": "परागकोष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The chemical formula of nitrogen dioxide is:",
        "question_hi": "नाइट्रोजन डाइऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["NO₂", "NO", "N₂O", "N₂O₅"],
        "options_hi": ["NO₂", "NO", "N₂O", "N₂O₅"],
        "answer_en": "NO₂",
        "answer_hi": "NO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which blood cells are produced in bone marrow?",
        "question_hi": "कौन सी रक्त कोशिकाएं अस्थि मज्जा में उत्पन्न होती हैं?",
        "options_en": ["All blood cells", "Only RBCs", "Only WBCs", "Only platelets"],
        "options_hi": ["सभी रक्त कोशिकाएं", "केवल लाल रक्त कोशिकाएं", "केवल श्वेत रक्त कोशिकाएं", "केवल प्लेटलेट्स"],
        "answer_en": "All blood cells",
        "answer_hi": "सभी रक्त कोशिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The device used to measure very small distances is:",
        "question_hi": "बहुत छोटी दूरियाँ मापने के लिए प्रयुक्त यंत्र है:",
        "options_en": ["Vernier calipers", "Screw gauge", "Meter scale", "Both A and B"],
        "options_hi": ["वर्नियर कैलिपर", "स्क्रू गेज", "मीटर स्केल", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which gas is released during photosynthesis in plants?",
        "question_hi": "पौधों में प्रकाश संश्लेषण के दौरान कौन सी गैस मुक्त होती है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The process of conversion of water into water vapor at any temperature is called:",
        "question_hi": "किसी भी तापमान पर पानी का जल वाष्प में परिवर्तन की प्रक्रिया को कहते हैं:",
        "options_en": ["Evaporation", "Boiling", "Condensation", "Sublimation"],
        "options_hi": ["वाष्पीकरण", "क्वथन", "संघनन", "उर्ध्वपातन"],
        "answer_en": "Evaporation",
        "answer_hi": "वाष्पीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which organelle contains cristae and matrix?",
        "question_hi": "किस अंगक में क्रिस्टी और मैट्रिक्स होते हैं?",
        "options_en": ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"],
        "options_hi": ["माइटोकॉन्ड्रिया", "हरितलवक", "केंद्रक", "राइबोसोम"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The chemical formula of potassium sulfate is:",
        "question_hi": "पोटेशियम सल्फेट का रासायनिक सूत्र है:",
        "options_en": ["K₂SO₄", "KNO₃", "KCl", "KOH"],
        "options_hi": ["K₂SO₄", "KNO₃", "KCl", "KOH"],
        "answer_en": "K₂SO₄",
        "answer_hi": "K₂SO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which mirror is used in flood lights?",
        "question_hi": "फ्लड लाइट में किस दर्पण का उपयोग किया जाता है?",
        "options_en": ["Plane mirror", "Concave mirror", "Convex mirror", "Parabolic mirror"],
        "options_hi": ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "परवलयिक दर्पण"],
        "answer_en": "Parabolic mirror",
        "answer_hi": "परवलयिक दर्पण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "The process of movement of digested food in blood to cells is called:",
        "question_hi": "रक्त में पचे हुए भोजन का कोशिकाओं में संचलन की प्रक्रिया को कहते हैं:",
        "options_en": ["Circulation", "Absorption", "Assimilation", "Digestion"],
        "options_hi": ["परिसंचरण", "अवशोषण", "स्वांगीकरण", "पाचन"],
        "answer_en": "Assimilation",
        "answer_hi": "स्वांगीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which gas is released during lightning?",
        "question_hi": "बिजली गिरने के दौरान कौन सी गैस मुक्त होती है?",
        "options_en": ["Ozone", "Oxygen", "Nitrogen", "Carbon dioxide"],
        "options_hi": ["ओजोन", "ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
        "answer_en": "Ozone",
        "answer_hi": "ओजोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The instrument used to measure angle is:",
        "question_hi": "कोण मापने के लिए प्रयुक्त यंत्र है:",
        "options_en": ["Protractor", "Compass", "Divider", "Scale"],
        "options_hi": ["चाँदा", "कम्पास", "डिवाइडर", "स्केल"],
        "answer_en": "Protractor",
        "answer_hi": "चाँदा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which acid is present in sour curd?",
        "question_hi": "खट्टी दही में कौन सा अम्ल उपस्थित होता है?",
        "options_en": ["Lactic acid", "Acetic acid", "Citric acid", "Tartaric acid"],
        "options_hi": ["लैक्टिक अम्ल", "ऐसीटिक अम्ल", "साइट्रिक अम्ल", "टार्टरिक अम्ल"],
        "answer_en": "Lactic acid",
        "answer_hi": "लैक्टिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The image formed by a convex mirror is always:",
        "question_hi": "उत्तल दर्पण द्वारा बना प्रतिबिंब सदैव होता है:",
        "options_en": ["Real and inverted", "Virtual and erect", "Real and erect", "Virtual and inverted"],
        "options_hi": ["वास्तविक और उल्टा", "आभासी और सीधा", "वास्तविक और सीधा", "आभासी और उल्टा"],
        "answer_en": "Virtual and erect",
        "answer_hi": "आभासी और सीधा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which metal is used in making filaments of bulbs?",
        "question_hi": "बल्बों के तंतु बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Tungsten", "Copper", "Aluminum", "Iron"],
        "options_hi": ["टंगस्टन", "ताँबा", "एल्यूमीनियम", "लोहा"],
        "answer_en": "Tungsten",
        "answer_hi": "टंगस्टन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "The process of conversion of light energy to chemical energy occurs in:",
        "question_hi": "प्रकाश ऊर्जा का रासायनिक ऊर्जा में परिवर्तन होता है:",
        "options_en": ["Chlorophyll", "Stomata", "Roots", "Stems"],
        "options_hi": ["क्लोरोफिल", "रंध्र", "जड़ें", "तने"],
        "answer_en": "Chlorophyll",
        "answer_hi": "क्लोरोफिल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which of the following is an alkaline earth metal?",
        "question_hi": "निम्नलिखित में से कौन क्षारीय मृदा धातु है?",
        "options_en": ["Sodium", "Calcium", "Aluminum", "Iron"],
        "options_hi": ["सोडियम", "कैल्शियम", "एल्यूमीनियम", "लोहा"],
        "answer_en": "Calcium",
        "answer_hi": "कैल्शियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The phenomenon of apparent bending of straw in water is due to:",
        "question_hi": "पानी में तिनके का आभासी मुड़ना होता है:",
        "options_en": ["Reflection", "Refraction", "Scattering", "Dispersion"],
        "options_hi": ["परावर्तन", "अपवर्तन", "प्रकीर्णन", "विक्षेपण"],
        "answer_en": "Refraction",
        "answer_hi": "अपवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which part of brain controls sleep and wake cycle?",
        "question_hi": "मस्तिष्क का कौन सा भाग सोने और जागने के चक्र को नियंत्रित करता है?",
        "options_en": ["Hypothalamus", "Cerebrum", "Cerebellum", "Medulla"],
        "options_hi": ["हाइपोथैलेमस", "सेरिब्रम", "सेरिबेलम", "मेडुला"],
        "answer_en": "Hypothalamus",
        "answer_hi": "हाइपोथैलेमस",
        "attempted": false,
        "selected": ""
    },
{
    "num": 51,
    "question_en": "The chemical formula of sodium phosphate is:",
    "question_hi": "सोडियम फॉस्फेट का रासायनिक सूत्र है:",
    "options_en": ["Na₃PO₄", "Na₂CO₃", "NaCl", "Na₂SO₄"],
    "options_hi": ["Na₃PO₄", "Na₂CO₃", "NaCl", "Na₂SO₄"],
    "answer_en": "Na₃PO₄",
    "answer_hi": "Na₃PO₄",
    "attempted": false,
    "selected": ""
},
{
    "num": 52,
    "question_en": "Which of the following is not a greenhouse gas?",
    "question_hi": "निम्नलिखित में से कौन सी ग्रीनहाउस गैस नहीं है?",
    "options_en": ["Carbon dioxide", "Methane", "Nitrogen", "Chlorofluorocarbon"],
    "options_hi": ["कार्बन डाइऑक्साइड", "मीथेन", "नाइट्रोजन", "क्लोरोफ्लोरोकार्बन"],
    "answer_en": "Nitrogen",
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
},
{
    "num": 53,
    "question_en": "The main constituent of biogas is:",
    "question_hi": "बायोगैस का मुख्य घटक है:",
    "options_en": ["Methane", "Ethane", "Propane", "Butane"],
    "options_hi": ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
    "answer_en": "Methane",
    "answer_hi": "मीथेन",
    "attempted": false,
    "selected": ""
},
{
    "num": 54,
    "question_en": "Which vitamin is synthesized by bacteria in human intestine?",
    "question_hi": "कौन सा विटामिन मानव आंत में बैक्टीरिया द्वारा संश्लेषित होता है?",
    "options_en": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B12", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin B12",
    "answer_hi": "विटामिन B12",
    "attempted": false,
    "selected": ""
},
{
    "num": 55,
    "question_en": "The instrument used to measure atmospheric pressure is:",
    "question_hi": "वायुमंडलीय दाब मापने के लिए प्रयुक्त यंत्र है:",
    "options_en": ["Barometer", "Hygrometer", "Thermometer", "Anemometer"],
    "options_hi": ["बैरोमीटर", "हाइग्रोमीटर", "थर्मामीटर", "एनीमोमीटर"],
    "answer_en": "Barometer",
    "answer_hi": "बैरोमीटर",
    "attempted": false,
    "selected": ""
},
{
    "num": 56,
    "question_en": "The SI unit of electric current is:",
    "question_hi": "विद्युत धारा की SI इकाई है:",
    "options_en": ["Ampere", "Volt", "Ohm", "Watt"],
    "options_hi": ["एम्पियर", "वोल्ट", "ओम", "वाट"],
    "answer_en": "Ampere",
    "answer_hi": "एम्पियर",
    "attempted": false,
    "selected": ""
},
{
    "num": 57,
    "question_en": "Which part of the flower develops into fruit?",
    "question_hi": "फूल का कौन सा भाग फल में विकसित होता है?",
    "options_en": ["Ovary", "Stigma", "Anther", "Petal"],
    "options_hi": ["अंडाशय", "वर्तिकाग्र", "परागकोष", "पंखुड़ी"],
    "answer_en": "Ovary",
    "answer_hi": "अंडाशय",
    "attempted": false,
    "selected": ""
},
{
    "num": 58,
    "question_en": "The chemical formula of calcium carbonate is:",
    "question_hi": "कैल्शियम कार्बोनेट का रासायनिक सूत्र है:",
    "options_en": ["CaCO₃", "CaO", "Ca(OH)₂", "CaSO₄"],
    "options_hi": ["CaCO₃", "CaO", "Ca(OH)₂", "CaSO₄"],
    "answer_en": "CaCO₃",
    "answer_hi": "CaCO₃",
    "attempted": false,
    "selected": ""
},
{
    "num": 59,
    "question_en": "The device that converts mechanical energy to electrical energy is:",
    "question_hi": "वह युक्ति जो यांत्रिक ऊर्जा को विद्युत ऊर्जा में बदलती है:",
    "options_en": ["Generator", "Motor", "Transformer", "Dynamo"],
    "options_hi": ["जनरेटर", "मोटर", "ट्रांसफॉर्मर", "डायनेमो"],
    "answer_en": "Generator",
    "answer_hi": "जनरेटर",
    "attempted": false,
    "selected": ""
},
{
    "num": 60,
    "question_en": "Which hormone regulates blood sugar level?",
    "question_hi": "कौन सा हार्मोन रक्त शर्करा स्तर को नियंत्रित करता है?",
    "options_en": ["Insulin", "Adrenaline", "Thyroxine", "Testosterone"],
    "options_hi": ["इंसुलिन", "एड्रेनालाईन", "थायरॉक्सिन", "टेस्टोस्टेरोन"],
    "answer_en": "Insulin",
    "answer_hi": "इंसुलिन",
    "attempted": false,
    "selected": ""
},
{
    "num": 61,
    "question_en": "The phenomenon of splitting of white light into seven colors is called:",
    "question_hi": "श्वेत प्रकाश का सात रंगों में विभक्त होने की घटना को कहते हैं:",
    "options_en": ["Dispersion", "Scattering", "Refraction", "Reflection"],
    "options_hi": ["विक्षेपण", "प्रकीर्णन", "अपवर्तन", "परावर्तन"],
    "answer_en": "Dispersion",
    "answer_hi": "विक्षेपण",
    "attempted": false,
    "selected": ""
},
{
    "num": 62,
    "question_en": "The hardest natural substance on earth is:",
    "question_hi": "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ है:",
    "options_en": ["Diamond", "Graphite", "Quartz", "Iron"],
    "options_hi": ["हीरा", "ग्रेफाइट", "क्वार्ट्ज", "लोहा"],
    "answer_en": "Diamond",
    "answer_hi": "हीरा",
    "attempted": false,
    "selected": ""
},
{
    "num": 63,
    "question_en": "Which gas is filled in electric bulbs?",
    "question_hi": "विद्युत बल्बों में कौन सी गैस भरी जाती है?",
    "options_en": ["Argon", "Oxygen", "Hydrogen", "Nitrogen"],
    "options_hi": ["आर्गन", "ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन"],
    "answer_en": "Argon",
    "answer_hi": "आर्गन",
    "attempted": false,
    "selected": ""
},
{
    "num": 64,
    "question_en": "The process of loss of water from plants in the form of vapor is called:",
    "question_hi": "पौधों से जल का वाष्प के रूप में हानि की प्रक्रिया को कहते हैं:",
    "options_en": ["Transpiration", "Photosynthesis", "Respiration", "Guttation"],
    "options_hi": ["वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "श्वसन", "बिंदुस्राव"],
    "answer_en": "Transpiration",
    "answer_hi": "वाष्पोत्सर्जन",
    "attempted": false,
    "selected": ""
},
{
    "num": 65,
    "question_en": "Which of the following is a non-metal that is liquid at room temperature?",
    "question_hi": "निम्नलिखित में से कौन एक अधातु है जो कमरे के तापमान पर द्रव है?",
    "options_en": ["Bromine", "Mercury", "Chlorine", "Iodine"],
    "options_hi": ["ब्रोमीन", "पारा", "क्लोरीन", "आयोडीन"],
    "answer_en": "Bromine",
    "answer_hi": "ब्रोमीन",
    "attempted": false,
    "selected": ""
},
{
    "num": 66,
    "question_en": "The SI unit of frequency is:",
    "question_hi": "आवृत्ति की SI इकाई है:",
    "options_en": ["Hertz", "Decibel", "Newton", "Pascal"],
    "options_hi": ["हर्ट्ज", "डेसीबल", "न्यूटन", "पास्कल"],
    "answer_en": "Hertz",
    "answer_hi": "हर्ट्ज",
    "attempted": false,
    "selected": ""
},
{
    "num": 67,
    "question_en": "The blood vessel that carries blood from heart to lungs is:",
    "question_hi": "वह रक्त वाहिका जो हृदय से फेफड़ों तक रक्त ले जाती है:",
    "options_en": ["Pulmonary artery", "Pulmonary vein", "Aorta", "Vena cava"],
    "options_hi": ["फुफ्फुसीय धमनी", "फुफ्फुसीय शिरा", "महाधमनी", "महाशिरा"],
    "answer_en": "Pulmonary artery",
    "answer_hi": "फुफ्फुसीय धमनी",
    "attempted": false,
    "selected": ""
},
{
    "num": 68,
    "question_en": "The chemical formula of sulfuric acid is:",
    "question_hi": "सल्फ्यूरिक अम्ल का रासायनिक सूत्र है:",
    "options_en": ["H₂SO₄", "HCl", "HNO₃", "H₃PO₄"],
    "options_hi": ["H₂SO₄", "HCl", "HNO₃", "H₃PO₄"],
    "answer_en": "H₂SO₄",
    "answer_hi": "H₂SO₄",
    "attempted": false,
    "selected": ""
},
{
    "num": 69,
    "question_en": "Which lens is used in correcting myopia?",
    "question_hi": "निकटदृष्टि सुधारने में कौन सा लेंस प्रयुक्त होता है?",
    "options_en": ["Concave lens", "Convex lens", "Cylindrical lens", "Bifocal lens"],
    "options_hi": ["अवतल लेंस", "उत्तल लेंस", "बेलनाकार लेंस", "द्विफोकसी लेंस"],
    "answer_en": "Concave lens",
    "answer_hi": "अवतल लेंस",
    "attempted": false,
    "selected": ""
},
{
    "num": 70,
    "question_en": "The process of conversion of glucose to alcohol is called:",
    "question_hi": "ग्लूकोज का एल्कोहल में परिवर्तन की प्रक्रिया को कहते हैं:",
    "options_en": ["Fermentation", "Photosynthesis", "Respiration", "Distillation"],
    "options_hi": ["किण्वन", "प्रकाश संश्लेषण", "श्वसन", "आसवन"],
    "answer_en": "Fermentation",
    "answer_hi": "किण्वन",
    "attempted": false,
    "selected": ""
},
{
    "num": 71,
    "question_en": "Which planet is known as the Red Planet?",
    "question_hi": "किस ग्रह को लाल ग्रह के नाम से जाना जाता है?",
    "options_en": ["Mars", "Venus", "Jupiter", "Saturn"],
    "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
    "answer_en": "Mars",
    "answer_hi": "मंगल",
    "attempted": false,
    "selected": ""
},
{
    "num": 72,
    "question_en": "The SI unit of force is:",
    "question_hi": "बल की SI इकाई है:",
    "options_en": ["Newton", "Joule", "Watt", "Pascal"],
    "options_hi": ["न्यूटन", "जूल", "वाट", "पास्कल"],
    "answer_en": "Newton",
    "answer_hi": "न्यूटन",
    "attempted": false,
    "selected": ""
},
{
    "num": 73,
    "question_en": "Which part of the human ear is responsible for balance?",
    "question_hi": "मानव कान का कौन सा भाग संतुलन के लिए उत्तरदायी है?",
    "options_en": ["Semicircular canals", "Cochlea", "Eardrum", "Eustachian tube"],
    "options_hi": ["अर्धवृत्ताकार नलिकाएं", "कोक्लिया", "कान का पर्दा", "यूस्टेशियन नली"],
    "answer_en": "Semicircular canals",
    "answer_hi": "अर्धवृत्ताकार नलिकाएं",
    "attempted": false,
    "selected": ""
},
{
    "num": 74,
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
    "num": 75,
    "question_en": "Which device is used to measure electric current?",
    "question_hi": "विद्युत धारा मापने के लिए किस यंत्र का प्रयोग किया जाता है?",
    "options_en": ["Ammeter", "Voltmeter", "Galvanometer", "Ohmmeter"],
    "options_hi": ["एमीटर", "वोल्टमीटर", "गैल्वेनोमीटर", "ओममीटर"],
    "answer_en": "Ammeter",
    "answer_hi": "एमीटर",
    "attempted": false,
    "selected": ""
},
{
    "num": 76,
    "question_en": "The process of conversion of solid directly to gas is called:",
    "question_hi": "ठोस का सीधे गैस में परिवर्तन की प्रक्रिया को कहते हैं:",
    "options_en": ["Sublimation", "Evaporation", "Condensation", "Fusion"],
    "options_hi": ["उर्ध्वपातन", "वाष्पीकरण", "संघनन", "गलन"],
    "answer_en": "Sublimation",
    "answer_hi": "उर्ध्वपातन",
    "attempted": false,
    "selected": ""
},
{
    "num": 77,
    "question_en": "Which vitamin deficiency causes scurvy?",
    "question_hi": "किस विटामिन की कमी से स्कर्वी रोग होता है?",
    "options_en": ["Vitamin C", "Vitamin D", "Vitamin A", "Vitamin B1"],
    "options_hi": ["विटामिन C", "विटामिन D", "विटामिन A", "विटामिन B1"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
},
{
    "num": 78,
    "question_en": "The phenomenon of persistence of sound due to repeated reflection is called:",
    "question_hi": "बार-बार परावर्तन के कारण ध्वनि के बने रहने की घटना को कहते हैं:",
    "options_en": ["Echo", "Reverberation", "Resonance", "Amplification"],
    "options_hi": ["प्रतिध्वनि", "पुनर्ध्वनि", "अनुनाद", "प्रवर्धन"],
    "answer_en": "Reverberation",
    "answer_hi": "पुनर्ध्वनि",
    "attempted": false,
    "selected": ""
},
{
    "num": 79,
    "question_en": "Which metal is present in chlorophyll?",
    "question_hi": "क्लोरोफिल में कौन सी धातु उपस्थित होती है?",
    "options_en": ["Magnesium", "Iron", "Calcium", "Sodium"],
    "options_hi": ["मैग्नीशियम", "आयरन", "कैल्शियम", "सोडियम"],
    "answer_en": "Magnesium",
    "answer_hi": "मैग्नीशियम",
    "attempted": false,
    "selected": ""
},
{
    "num": 80,
    "question_en": "The chemical formula of sodium chloride is:",
    "question_hi": "सोडियम क्लोराइड का रासायनिक सूत्र है:",
    "options_en": ["NaCl", "NaOH", "Na₂CO₃", "NaHCO₃"],
    "options_hi": ["NaCl", "NaOH", "Na₂CO₃", "NaHCO₃"],
    "answer_en": "NaCl",
    "answer_hi": "NaCl",
    "attempted": false,
    "selected": ""
},
{
    "num": 81,
    "question_en": "Which type of mirror is used in rear view mirrors of vehicles?",
    "question_hi": "वाहनों के रियर व्यू मिरर में किस प्रकार के दर्पण का उपयोग किया जाता है?",
    "options_en": ["Convex mirror", "Concave mirror", "Plane mirror", "Parabolic mirror"],
    "options_hi": ["उत्तल दर्पण", "अवतल दर्पण", "समतल दर्पण", "परवलयिक दर्पण"],
    "answer_en": "Convex mirror",
    "answer_hi": "उत्तल दर्पण",
    "attempted": false,
    "selected": ""
},
{
    "num": 82,
    "question_en": "The process of transfer of heat in solids is called:",
    "question_hi": "ठोसों में ऊष्मा के स्थानांतरण की प्रक्रिया को कहते हैं:",
    "options_en": ["Conduction", "Convection", "Radiation", "Absorption"],
    "options_hi": ["चालन", "संवहन", "विकिरण", "अवशोषण"],
    "answer_en": "Conduction",
    "answer_hi": "चालन",
    "attempted": false,
    "selected": ""
},
{
    "num": 83,
    "question_en": "Which gas is used in advertising signboards?",
    "question_hi": "विज्ञापन साइनबोर्ड में किस गैस का उपयोग किया जाता है?",
    "options_en": ["Neon", "Helium", "Argon", "Xenon"],
    "options_hi": ["नियॉन", "हीलियम", "आर्गन", "जीनॉन"],
    "answer_en": "Neon",
    "answer_hi": "नियॉन",
    "attempted": false,
    "selected": ""
},
{
    "num": 84,
    "question_en": "The SI unit of pressure is:",
    "question_hi": "दाब की SI इकाई है:",
    "options_en": ["Pascal", "Newton", "Joule", "Watt"],
    "options_hi": ["पास्कल", "न्यूटन", "जूल", "वाट"],
    "answer_en": "Pascal",
    "answer_hi": "पास्कल",
    "attempted": false,
    "selected": ""
},
{
    "num": 85,
    "question_en": "Which gland is known as the master gland?",
    "question_hi": "किस ग्रंथि को मास्टर ग्रंथि कहा जाता है?",
    "options_en": ["Pituitary gland", "Thyroid gland", "Adrenal gland", "Pancreas"],
    "options_hi": ["पीयूष ग्रंथि", "थाइरॉइड ग्रंथि", "अधिवृक्क ग्रंथि", "अग्न्याशय"],
    "answer_en": "Pituitary gland",
    "answer_hi": "पीयूष ग्रंथि",
    "attempted": false,
    "selected": ""
},
{
    "num": 86,
    "question_en": "The chemical formula of carbon dioxide is:",
    "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र है:",
    "options_en": ["CO₂", "CO", "C₂O", "C₂O₃"],
    "options_hi": ["CO₂", "CO", "C₂O", "C₂O₃"],
    "answer_en": "CO₂",
    "answer_hi": "CO₂",
    "attempted": false,
    "selected": ""
},
{
    "num": 87,
    "question_en": "Which device converts electrical energy to mechanical energy?",
    "question_hi": "वह युक्ति जो विद्युत ऊर्जा को यांत्रिक ऊर्जा में बदलती है:",
    "options_en": ["Motor", "Generator", "Transformer", "Dynamo"],
    "options_hi": ["मोटर", "जनरेटर", "ट्रांसफॉर्मर", "डायनेमो"],
    "answer_en": "Motor",
    "answer_hi": "मोटर",
    "attempted": false,
    "selected": ""
},
{
    "num": 88,
    "question_en": "The process of conversion of ammonia to nitrates is called:",
    "question_hi": "अमोनिया का नाइट्रेट में परिवर्तन की प्रक्रिया को कहते हैं:",
    "options_en": ["Nitrification", "Denitrification", "Ammonification", "Nitrogen fixation"],
    "options_hi": ["नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण", "नाइट्रोजन स्थिरीकरण"],
    "answer_en": "Nitrification",
    "answer_hi": "नाइट्रीकरण",
    "attempted": false,
    "selected": ""
},
{
    "num": 89,
    "question_en": "Which lens is used as a magnifying glass?",
    "question_hi": "आवर्धक कांच के रूप में किस लेंस का प्रयोग किया जाता है?",
    "options_en": ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"],
    "options_hi": ["उत्तल लेंस", "अवतल लेंस", "बेलनाकार लेंस", "द्विफोकसी लेंस"],
    "answer_en": "Convex lens",
    "answer_hi": "उत्तल लेंस",
    "attempted": false,
    "selected": ""
},
{
    "num": 90,
    "question_en": "The phenomenon of change in frequency due to relative motion between source and observer is called:",
    "question_hi": "स्रोत और प्रेक्षक के बीच आपेक्षिक गति के कारण आवृत्ति में परिवर्तन की घटना को कहते हैं:",
    "options_en": ["Doppler effect", "Photoelectric effect", "Compton effect", "Raman effect"],
    "options_hi": ["डॉप्लर प्रभाव", "प्रकाशविद्युत प्रभाव", "कॉम्पटन प्रभाव", "रमन प्रभाव"],
    "answer_en": "Doppler effect",
    "answer_hi": "डॉप्लर प्रभाव",
    "attempted": false,
    "selected": ""
},
{
    "num": 91,
    "question_en": "Which acid is present in vinegar?",
    "question_hi": "सिरका में कौन सा अम्ल उपस्थित होता है?",
    "options_en": ["Acetic acid", "Citric acid", "Lactic acid", "Tartaric acid"],
    "options_hi": ["ऐसीटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल", "टार्टरिक अम्ल"],
    "answer_en": "Acetic acid",
    "answer_hi": "ऐसीटिक अम्ल",
    "attempted": false,
    "selected": ""
},
{
    "num": 92,
    "question_en": "The SI unit of work is:",
    "question_hi": "कार्य की SI इकाई है:",
    "options_en": ["Joule", "Newton", "Watt", "Pascal"],
    "options_hi": ["जूल", "न्यूटन", "वाट", "पास्कल"],
    "answer_en": "Joule",
    "answer_hi": "जूल",
    "attempted": false,
    "selected": ""
},
{
    "num": 93,
    "question_en": "Which part of the plant carries water from roots to leaves?",
    "question_hi": "पौधे का कौन सा भाग जड़ों से पत्तियों तक पानी पहुँचाता है?",
    "options_en": ["Xylem", "Phloem", "Cambium", "Epidermis"],
    "options_hi": ["जाइलम", "फ्लोएम", "कैम्बियम", "एपिडर्मिस"],
    "answer_en": "Xylem",
    "answer_hi": "जाइलम",
    "attempted": false,
    "selected": ""
},
{
    "num": 94,
    "question_en": "The chemical formula of hydrogen peroxide is:",
    "question_hi": "हाइड्रोजन पेरोक्साइड का रासायनिक सूत्र है:",
    "options_en": ["H₂O₂", "H₂O", "HO₂", "H₂O₃"],
    "options_hi": ["H₂O₂", "H₂O", "HO₂", "H₂O₃"],
    "answer_en": "H₂O₂",
    "answer_hi": "H₂O₂",
    "attempted": false,
    "selected": ""
},
{
    "num": 95,
    "question_en": "Which device is used to measure potential difference?",
    "question_hi": "विभवांतर मापने के लिए किस यंत्र का प्रयोग किया जाता है?",
    "options_en": ["Voltmeter", "Ammeter", "Galvanometer", "Ohmmeter"],
    "options_hi": ["वोल्टमीटर", "एमीटर", "गैल्वेनोमीटर", "ओममीटर"],
    "answer_en": "Voltmeter",
    "answer_hi": "वोल्टमीटर",
    "attempted": false,
    "selected": ""
},
{
    "num": 96,
    "question_en": "The process of conversion of milk to curd is due to:",
    "question_hi": "दूध का दही में परिवर्तन होता है:",
    "options_en": ["Bacterial action", "Chemical reaction", "Enzymatic action", "Fermentation"],
    "options_hi": ["जीवाणु क्रिया", "रासायनिक अभिक्रिया", "एंजाइमी क्रिया", "किण्वन"],
    "answer_en": "Bacterial action",
    "answer_hi": "जीवाणु क्रिया",
    "attempted": false,
    "selected": ""
},
{
    "num": 97,
    "question_en": "Which metal is used in making aircraft bodies?",
    "question_hi": "वायुयन के धड़ बनाने में किस धातु का उपयोग किया जाता है?",
    "options_en": ["Aluminum", "Copper", "Iron", "Lead"],
    "options_hi": ["एल्यूमीनियम", "ताँबा", "लोहा", "लेड"],
    "answer_en": "Aluminum",
    "answer_hi": "एल्यूमीनियम",
    "attempted": false,
    "selected": ""
},
{
    "num": 98,
    "question_en": "The phenomenon of scattering of light by colloidal particles is called:",
    "question_hi": "कोलॉइडी कणों द्वारा प्रकाश के प्रकीर्णन की घटना को कहते हैं:",
    "options_en": ["Tyndall effect", "Doppler effect", "Photoelectric effect", "Raman effect"],
    "options_hi": ["टिंडल प्रभाव", "डॉप्लर प्रभाव", "प्रकाशविद्युत प्रभाव", "रमन प्रभाव"],
    "answer_en": "Tyndall effect",
    "answer_hi": "टिंडल प्रभाव",
    "attempted": false,
    "selected": ""
},
{
    "num": 99,
    "question_en": "The chemical formula of sodium hydroxide is:",
    "question_hi": "सोडियम हाइड्रॉक्साइड का रासायनिक सूत्र है:",
    "options_en": ["NaOH", "NaCl", "Na₂CO₃", "NaHCO₃"],
    "options_hi": ["NaOH", "NaCl", "Na₂CO₃", "NaHCO₃"],
    "answer_en": "NaOH",
    "answer_hi": "NaOH",
    "attempted": false,
    "selected": ""
},
{
    "num": 100,
    "question_en": "Which planet has the most number of moons?",
    "question_hi": "किस ग्रह के सबसे अधिक चंद्रमा हैं?",
    "options_en": ["Jupiter", "Saturn", "Uranus", "Neptune"],
    "options_hi": ["बृहस्पति", "शनि", "अरुण", "वरुण"],
    "answer_en": "Saturn",
    "answer_hi": "शनि",
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