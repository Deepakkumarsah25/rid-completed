const questions =[
    {
        "num": 1,
        "question_en": "Which of the following shows periodic change?",
        "question_hi": "निम्नलिखित में से कौन आवर्ती परिवर्तन दिखाता है?",
        "options_en": ["Rusting of iron", "Change of seasons", "Burning of paper", "Digestion of food"],
        "options_hi": ["लोहे में जंग लगना", "ऋतुओं का परिवर्तन", "कागज का जलना", "भोजन का पाचन"],
        "answer_en": "Change of seasons",
        "answer_hi": "ऋतुओं का परिवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The SI unit of magnetic field strength is:",
        "question_hi": "चुंबकीय क्षेत्र सामर्थ्य की SI इकाई है:",
        "options_en": ["Tesla", "Weber", "Henry", "Gauss"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The plant hormone that promotes cell division is:",
        "question_hi": "वह पादप हार्मोन जो कोशिका विभाजन को बढ़ावा देता है:",
        "options_en": ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
        "options_hi": ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एब्सिसिक अम्ल"],
        "answer_en": "Cytokinin",
        "answer_hi": "साइटोकाइनिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which metal is used in making permanent magnets?",
        "question_hi": "स्थायी चुंबक बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Iron", "Steel", "Aluminum", "Copper"],
        "options_hi": ["लोहा", "इस्पात", "एल्यूमीनियम", "ताँबा"],
        "answer_en": "Steel",
        "answer_hi": "इस्पात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The lens used to correct myopia is:",
        "question_hi": "निकट दृष्टि दोष सुधारने के लिए प्रयुक्त लेंस है:",
        "options_en": ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"],
        "options_hi": ["उत्तल लेंस", "अवतल लेंस", "बेलनाकार लेंस", "द्विफोकसी लेंस"],
        "answer_en": "Concave lens",
        "answer_hi": "अवतल लेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which process involves loss of water from plant surface?",
        "question_hi": "कौन सी प्रक्रिया पौधे की सतह से पानी की हानि को शामिल करती है?",
        "options_en": ["Photosynthesis", "Respiration", "Transpiration", "Absorption"],
        "options_hi": ["प्रकाश संश्लेषण", "श्वसन", "वाष्पोत्सर्जन", "अवशोषण"],
        "answer_en": "Transpiration",
        "answer_hi": "वाष्पोत्सर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The chemical formula of phosphorus pentoxide is:",
        "question_hi": "फॉस्फोरस पेंटॉक्साइड का रासायनिक सूत्र है:",
        "options_en": ["P₂O₅", "P₄O₁₀", "P₂O₃", "PO₄"],
        "options_hi": ["P₂O₅", "P₄O₁₀", "P₂O₃", "PO₄"],
        "answer_en": "P₂O₅",
        "answer_hi": "P₂O₅",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which part of eye is transparent and allows light to enter?",
        "question_hi": "आँख का कौन सा भाग पारदर्शी है और प्रकाश को प्रवेश करने देता है?",
        "options_en": ["Cornea", "Iris", "Retina", "Sclera"],
        "options_hi": ["कॉर्निया", "परितारिका", "रेटिना", "श्वेतपटल"],
        "answer_en": "Cornea",
        "answer_hi": "कॉर्निया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The phenomenon of light waves superimposing is called:",
        "question_hi": "प्रकाश तरंगों के अध्यारोपण की घटना को कहते हैं:",
        "options_en": ["Reflection", "Refraction", "Interference", "Diffraction"],
        "options_hi": ["परावर्तन", "अपवर्तन", "व्यतिकरण", "विवर्तन"],
        "answer_en": "Interference",
        "answer_hi": "व्यतिकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which acid is used in lead storage batteries?",
        "question_hi": "लेड संचायक बैटरी में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Nitric acid", "Hydrochloric acid", "Acetic acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "ऐसीटिक अम्ल"],
        "answer_en": "Sulfuric acid",
        "answer_hi": "सल्फ्यूरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "The process of conversion of glucose to starch in plants is:",
        "question_hi": "पौधों में ग्लूकोज का स्टार्च में परिवर्तन की प्रक्रिया है:",
        "options_en": ["Photosynthesis", "Respiration", "Translocation", "Polymerization"],
        "options_hi": ["प्रकाश संश्लेषण", "श्वसन", "स्थानांतरण", "बहुलकीकरण"],
        "answer_en": "Polymerization",
        "answer_hi": "बहुलकीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which device converts mechanical energy to electrical energy?",
        "question_hi": "कौन सा यंत्र यांत्रिक ऊर्जा को विद्युत ऊर्जा में बदलता है?",
        "options_en": ["Motor", "Generator", "Transformer", "Rectifier"],
        "options_hi": ["मोटर", "जनरेटर", "ट्रांसफॉर्मर", "दिष्टकारी"],
        "answer_en": "Generator",
        "answer_hi": "जनरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The main component of coal gas is:",
        "question_hi": "कोल गैस का मुख्य घटक है:",
        "options_en": ["Methane", "Hydrogen", "Carbon monoxide", "All of these"],
        "options_hi": ["मीथेन", "हाइड्रोजन", "कार्बन मोनोऑक्साइड", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which of the following is an electrolyte in dry cell?",
        "question_hi": "निम्नलिखित में से कौन शुष्क सेल में विद्युत अपघट्य है?",
        "options_en": ["Sulfuric acid", "Ammonium chloride paste", "Sodium chloride", "Potassium hydroxide"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "अमोनियम क्लोराइड पेस्ट", "सोडियम क्लोराइड", "पोटेशियम हाइड्रॉक्साइड"],
        "answer_en": "Ammonium chloride paste",
        "answer_hi": "अमोनियम क्लोराइड पेस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The process of breakdown of food in stomach is called:",
        "question_hi": "आमाशय में भोजन के टूटने की प्रक्रिया को कहते हैं:",
        "options_en": ["Chemical digestion", "Mechanical digestion", "Absorption", "Assimilation"],
        "options_hi": ["रासायनिक पाचन", "यांत्रिक पाचन", "अवशोषण", "स्वांगीकरण"],
        "answer_en": "Chemical digestion",
        "answer_hi": "रासायनिक पाचन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which gas is produced during incomplete combustion of fuels?",
        "question_hi": "ईंधन के अपूर्ण दहन के दौरान कौन सी गैस उत्पन्न होती है?",
        "options_en": ["Carbon dioxide", "Carbon monoxide", "Oxygen", "Nitrogen"],
        "options_hi": ["कार्बन डाइऑक्साइड", "कार्बन मोनोऑक्साइड", "ऑक्सीजन", "नाइट्रोजन"],
        "answer_en": "Carbon monoxide",
        "answer_hi": "कार्बन मोनोऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The unit of luminous intensity is:",
        "question_hi": "ज्योति तीव्रता की इकाई है:",
        "options_en": ["Lumen", "Candela", "Lux", "Watt"],
        "options_hi": ["लूमेन", "कैंडेला", "लक्स", "वाट"],
        "answer_en": "Candela",
        "answer_hi": "कैंडेला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Deficiency of which mineral causes osteoporosis?",
        "question_hi": "किस खनिज की कमी से ऑस्टियोपोरोसिस होता है?",
        "options_en": ["Calcium", "Iron", "Iodine", "Phosphorus"],
        "options_hi": ["कैल्शियम", "आयरन", "आयोडीन", "फॉस्फोरस"],
        "answer_en": "Calcium",
        "answer_hi": "कैल्शियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The pH of milk is approximately:",
        "question_hi": "दूध का pH लगभग है:",
        "options_en": ["6.5-6.7", "7.0", "7.5-8.0", "4.0-4.5"],
        "options_hi": ["6.5-6.7", "7.0", "7.5-8.0", "4.0-4.5"],
        "answer_en": "6.5-6.7",
        "answer_hi": "6.5-6.7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The red color of sunset is due to:",
        "question_hi": "सूर्यास्त का लाल रंग होता है:",
        "options_en": ["Reflection", "Scattering of light", "Refraction", "Dispersion"],
        "options_hi": ["परावर्तन", "प्रकाश का प्रकीर्णन", "अपवर्तन", "विक्षेपण"],
        "answer_en": "Scattering of light",
        "answer_hi": "प्रकाश का प्रकीर्णन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which organ filters blood and removes waste in human body?",
        "question_hi": "मानव शरीर में कौन सा अंग रक्त को छानता है और अपशिष्ट निकालता है?",
        "options_en": ["Liver", "Kidney", "Pancreas", "Spleen"],
        "options_hi": ["यकृत", "वृक्क", "अग्न्याशय", "तिल्ली"],
        "answer_en": "Kidney",
        "answer_hi": "वृक्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The chemical formula of ferric chloride is:",
        "question_hi": "फेरिक क्लोराइड का रासायनिक सूत्र है:",
        "options_en": ["FeCl₃", "FeCl₂", "Fe₂O₃", "FeSO₄"],
        "options_hi": ["FeCl₃", "FeCl₂", "Fe₂O₃", "FeSO₄"],
        "answer_en": "FeCl₃",
        "answer_hi": "FeCl₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The lens used in simple microscope is:",
        "question_hi": "सरल सूक्ष्मदर्शी में प्रयुक्त लेंस है:",
        "options_en": ["Concave lens", "Convex lens", "Plano-convex lens", "Biconcave lens"],
        "options_hi": ["अवतल लेंस", "उत्तल लेंस", "समतलोत्तल लेंस", "द्विअवतल लेंस"],
        "answer_en": "Convex lens",
        "answer_hi": "उत्तल लेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which gland secretes insulin?",
        "question_hi": "कौन सी ग्रंथि इंसुलिन स्रावित करती है?",
        "options_en": ["Pancreas", "Thyroid", "Pituitary", "Adrenal"],
        "options_hi": ["अग्न्याशय", "थाइरॉइड", "पीयूष", "अधिवृक्क"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The process of preventing corrosion by sacrificial protection is:",
        "question_hi": "बलि संरक्षण द्वारा संक्षारण रोकने की प्रक्रिया है:",
        "options_en": ["Galvanization", "Electroplating", "Cathodic protection", "Painting"],
        "options_hi": ["जस्तीकरण", "विद्युत लेपन", "कैथोडिक संरक्षण", "पेंटिंग"],
        "answer_en": "Cathodic protection",
        "answer_hi": "कैथोडिक संरक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which part of the plant stores food in turnip?",
        "question_hi": "पौधे का कौन सा भाग शलजम में भोजन संग्रह करता है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
        "answer_en": "Root",
        "answer_hi": "जड़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The chemical formula of ammonium nitrate is:",
        "question_hi": "अमोनियम नाइट्रेट का रासायनिक सूत्र है:",
        "options_en": ["NH₄NO₃", "NH₄Cl", "(NH₄)₂SO₄", "NH₄OH"],
        "options_hi": ["NH₄NO₃", "NH₄Cl", "(NH₄)₂SO₄", "NH₄OH"],
        "answer_en": "NH₄NO₃",
        "answer_hi": "NH₄NO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which of the following is a solar energy device?",
        "question_hi": "निम्नलिखित में से कौन सौर ऊर्जा उपकरण है?",
        "options_en": ["Solar cooker", "Windmill", "Hydroelectric dam", "Thermal power plant"],
        "options_hi": ["सौर कुकर", "पवन चक्की", "जल विद्युत बांध", "तापीय विद्युत संयंत्र"],
        "answer_en": "Solar cooker",
        "answer_hi": "सौर कुकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The process of conversion of oils to fats is called:",
        "question_hi": "तेलों का वसा में परिवर्तन की प्रक्रिया को कहते हैं:",
        "options_en": ["Hydrogenation", "Saponification", "Fermentation", "Emulsification"],
        "options_hi": ["हाइड्रोजनीकरण", "साबुनीकरण", "किण्वन", "पायसीकरण"],
        "answer_en": "Hydrogenation",
        "answer_hi": "हाइड्रोजनीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which gas is used in making ammonia?",
        "question_hi": "अमोनिया बनाने में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Nitrogen and hydrogen", "Nitrogen and oxygen", "Hydrogen and oxygen", "Carbon and hydrogen"],
        "options_hi": ["नाइट्रोजन और हाइड्रोजन", "नाइट्रोजन और ऑक्सीजन", "हाइड्रोजन और ऑक्सीजन", "कार्बन और हाइड्रोजन"],
        "answer_en": "Nitrogen and hydrogen",
        "answer_hi": "नाइट्रोजन और हाइड्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "The SI unit of electric conductivity is:",
        "question_hi": "विद्युत चालकता की SI इकाई है:",
        "options_en": ["Siemens per meter", "Ohm-meter", "Mho", "All of these"],
        "options_hi": ["सीमेंस प्रति मीटर", "ओम-मीटर", "म्हो", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which part of flower protects the bud?",
        "question_hi": "फूल का कौन सा भाग कली की रक्षा करता है?",
        "options_en": ["Sepal", "Petal", "Stamen", "Pistil"],
        "options_hi": ["बाह्यदल", "पंखुड़ी", "पुंकेसर", "स्त्रीकेसर"],
        "answer_en": "Sepal",
        "answer_hi": "बाह्यदल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The chemical formula of sulfur trioxide is:",
        "question_hi": "सल्फर ट्राइऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["SO₃", "SO₂", "S", "H₂SO₄"],
        "options_hi": ["SO₃", "SO₂", "S", "H₂SO₄"],
        "answer_en": "SO₃",
        "answer_hi": "SO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which blood component is about 55% of total blood volume?",
        "question_hi": "रक्त का कौन सा घटक कुल रक्त आयतन का लगभग 55% है?",
        "options_en": ["RBCs", "WBCs", "Platelets", "Plasma"],
        "options_hi": ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
        "answer_en": "Plasma",
        "answer_hi": "प्लाज्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The device used to measure small electric currents is:",
        "question_hi": "छोटी विद्युत धाराएं मापने के लिए प्रयुक्त यंत्र है:",
        "options_en": ["Ammeter", "Galvanometer", "Voltmeter", "Ohmmeter"],
        "options_hi": ["अमीटर", "गैल्वेनोमीटर", "वोल्टमीटर", "ओममीटर"],
        "answer_en": "Galvanometer",
        "answer_hi": "गैल्वेनोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which gas is released during volcanic eruptions?",
        "question_hi": "ज्वालामुखी विस्फोट के दौरान कौन सी गैस मुक्त होती है?",
        "options_en": ["Sulfur dioxide", "Oxygen", "Nitrogen", "Helium"],
        "options_hi": ["सल्फर डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हीलियम"],
        "answer_en": "Sulfur dioxide",
        "answer_hi": "सल्फर डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The process of conversion of liquid into gas at boiling point is called:",
        "question_hi": "क्वथनांक पर द्रव का गैस में परिवर्तन की प्रक्रिया को कहते हैं:",
        "options_en": ["Evaporation", "Boiling", "Condensation", "Sublimation"],
        "options_hi": ["वाष्पीकरण", "क्वथन", "संघनन", "उर्ध्वपातन"],
        "answer_en": "Boiling",
        "answer_hi": "क्वथन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which organelle contains chlorophyll?",
        "question_hi": "किस अंगक में क्लोरोफिल होता है?",
        "options_en": ["Chloroplast", "Mitochondria", "Nucleus", "Ribosome"],
        "options_hi": ["हरितलवक", "माइटोकॉन्ड्रिया", "केंद्रक", "राइबोसोम"],
        "answer_en": "Chloroplast",
        "answer_hi": "हरितलवक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The chemical formula of potassium chloride is:",
        "question_hi": "पोटेशियम क्लोराइड का रासायनिक सूत्र है:",
        "options_en": ["KCl", "KNO₃", "K₂SO₄", "KOH"],
        "options_hi": ["KCl", "KNO₃", "K₂SO₄", "KOH"],
        "answer_en": "KCl",
        "answer_hi": "KCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which mirror is used in making periscope?",
        "question_hi": "पेरिस्कोप बनाने में किस दर्पण का उपयोग किया जाता है?",
        "options_en": ["Plane mirror", "Concave mirror", "Convex mirror", "Spherical mirror"],
        "options_hi": ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "गोलाकार दर्पण"],
        "answer_en": "Plane mirror",
        "answer_hi": "समतल दर्पण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "The process of movement of food through alimentary canal is called:",
        "question_hi": "आहार नाल के माध्यम से भोजन के संचलन की प्रक्रिया को कहते हैं:",
        "options_en": ["Digestion", "Peristalsis", "Absorption", "Assimilation"],
        "options_hi": ["पाचन", "क्रमाकुंचन", "अवशोषण", "स्वांगीकरण"],
        "answer_en": "Peristalsis",
        "answer_hi": "क्रमाकुंचन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which gas is released during decomposition of organic matter?",
        "question_hi": "कार्बनिक पदार्थ के अपघटन के दौरान कौन सी गैस मुक्त होती है?",
        "options_en": ["Methane", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["मीथेन", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The instrument used to measure very high temperature is:",
        "question_hi": "बहुत उच्च तापमान मापने के लिए प्रयुक्त यंत्र है:",
        "options_en": ["Clinical thermometer", "Laboratory thermometer", "Pyrometer", "Thermocouple"],
        "options_hi": ["क्लिनिकल थर्मामीटर", "प्रयोगशाला थर्मामीटर", "पायरोमीटर", "थर्मोकपल"],
        "answer_en": "Pyrometer",
        "answer_hi": "पायरोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which acid is present in unripe mangoes?",
        "question_hi": "कच्चे आम में कौन सा अम्ल उपस्थित होता है?",
        "options_en": ["Tartaric acid", "Malic acid", "Citric acid", "Oxalic acid"],
        "options_hi": ["टार्टरिक अम्ल", "मैलिक अम्ल", "साइट्रिक अम्ल", "ऑक्सैलिक अम्ल"],
        "answer_en": "Malic acid",
        "answer_hi": "मैलिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The image formed by a concave mirror when object is at infinity is:",
        "question_hi": "अवतल दर्पण द्वारा बना प्रतिबिंब जब वस्तु अनंत पर होती है:",
        "options_en": ["At focus", "At center of curvature", "Between focus and center", "Beyond center"],
        "options_hi": ["फोकस पर", "वक्रता केंद्र पर", "फोकस और केंद्र के बीच", "केंद्र से परे"],
        "answer_en": "At focus",
        "answer_hi": "फोकस पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which metal is used in making statues?",
        "question_hi": "मूर्तियाँ बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Iron", "Bronze", "Aluminum", "Silver"],
        "options_hi": ["लोहा", "काँस्य", "एल्यूमीनियम", "चाँदी"],
        "answer_en": "Bronze",
        "answer_hi": "काँस्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "The process of conversion of light energy to electrical energy in plants is part of:",
        "question_hi": "पौधों में प्रकाश ऊर्जा का विद्युत ऊर्जा में परिवर्तन का भाग है:",
        "options_en": ["Photosynthesis", "Respiration", "Transpiration", "All of these"],
        "options_hi": ["प्रकाश संश्लेषण", "श्वसन", "वाष्पोत्सर्जन", "ये सभी"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which of the following is an alkali metal?",
        "question_hi": "निम्नलिखित में से कौन क्षार धातु है?",
        "options_en": ["Sodium", "Calcium", "Aluminum", "Iron"],
        "options_hi": ["सोडियम", "कैल्शियम", "एल्यूमीनियम", "लोहा"],
        "answer_en": "Sodium",
        "answer_hi": "सोडियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The phenomenon of splitting of light by water droplets is:",
        "question_hi": "जल बूंदों द्वारा प्रकाश के विभाजन की घटना है:",
        "options_en": ["Rainbow formation", "Mirage", "Twinkling of stars", "Advanced sunrise"],
        "options_hi": ["इंद्रधनुष बनना", "मृगतृष्णा", "तारों का टिमटिमाना", "उन्नत सूर्योदय"],
        "answer_en": "Rainbow formation",
        "answer_hi": "इंद्रधनुष बनना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which part of brain controls posture and equilibrium?",
        "question_hi": "मस्तिष्क का कौन सा भाग मुद्रा और संतुलन को नियंत्रित करता है?",
        "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
        "options_hi": ["सेरिब्रम", "सेरिबेलम", "मेडुला", "हाइपोथैलेमस"],
        "answer_en": "Cerebellum",
        "answer_hi": "सेरिबेलम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "The chemical formula of sodium sulfate is:",
        "question_hi": "सोडियम सल्फेट का रासायनिक सूत्र है:",
        "options_en": ["Na₂SO₄", "Na₂SO₃", "NaHSO₄", "Na₂S"],
        "options_hi": ["Na₂SO₄", "Na₂SO₃", "NaHSO₄", "Na₂S"],
        "answer_en": "Na₂SO₄",
        "answer_hi": "Na₂SO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which blood cells are most numerous?",
        "question_hi": "कौन सी रक्त कोशिकाएं सबसे अधिक संख्या में होती हैं?",
        "options_en": ["RBCs", "WBCs", "Platelets", "Lymphocytes"],
        "options_hi": ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "लिम्फोसाइट्स"],
        "answer_en": "RBCs",
        "answer_hi": "लाल रक्त कोशिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "The refractive index of diamond is approximately:",
        "question_hi": "हीरे का अपवर्तनांक लगभग है:",
        "options_en": ["1.33", "1.52", "2.42", "1.00"],
        "options_hi": ["1.33", "1.52", "2.42", "1.00"],
        "answer_en": "2.42",
        "answer_hi": "2.42",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which organ helps in touch sensation?",
        "question_hi": "कौन सा अंग स्पर्श संवेदना में मदद करता है?",
        "options_en": ["Skin", "Eyes", "Ears", "Nose"],
        "options_hi": ["त्वचा", "आँखें", "कान", "नाक"],
        "answer_en": "Skin",
        "answer_hi": "त्वचा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "The process of conversion of water vapor into water droplets is called:",
        "question_hi": "जल वाष्प का जल बूंदों में परिवर्तन की प्रक्रिया को कहते हैं:",
        "options_en": ["Evaporation", "Condensation", "Sublimation", "Freezing"],
        "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "जमना"],
        "answer_en": "Condensation",
        "answer_hi": "संघनन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which of the following is the best insulator?",
        "question_hi": "निम्नलिखित में से कौन सबसे अच्छा कुचालक है?",
        "options_en": ["Copper", "Silver", "Air", "Aluminum"],
        "options_hi": ["ताँबा", "चाँदी", "वायु", "एल्यूमीनियम"],
        "answer_en": "Air",
        "answer_hi": "वायु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "The process of exchange of gases in plants occurs through:",
        "question_hi": "पौधों में गैसों का आदान-प्रदान होता है:",
        "options_en": ["Root hairs", "Lenticels", "Stomata", "All of these"],
        "options_hi": ["मूल रोम", "वातरंध्र", "रंध्र", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which mirror is used in torch light?",
        "question_hi": "टॉर्च लाइट में किस दर्पण का उपयोग किया जाता है?",
        "options_en": ["Plane mirror", "Concave mirror", "Convex mirror", "Spherical mirror"],
        "options_hi": ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "गोलाकार दर्पण"],
        "answer_en": "Concave mirror",
        "answer_hi": "अवतल दर्पण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "The chemical formula of magnesium oxide is:",
        "question_hi": "मैग्नीशियम ऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["MgO", "Mg(OH)₂", "MgCO₃", "MgCl₂"],
        "options_hi": ["MgO", "Mg(OH)₂", "MgCO₃", "MgCl₂"],
        "answer_en": "MgO",
        "answer_hi": "MgO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Deficiency of which vitamin causes xerophthalmia?",
        "question_hi": "किस विटामिन की कमी से ज़ीरोफथाल्मिया होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "The device that decreases voltage is:",
        "question_hi": "वह युक्ति जो वोल्टेज घटाती है:",
        "options_en": ["Step-up transformer", "Step-down transformer", "Rectifier", "Inverter"],
        "options_hi": ["स्टेप-अप ट्रांसफॉर्मर", "स्टेप-डाउन ट्रांसफॉर्मर", "दिष्टकारी", "इन्वर्टर"],
        "answer_en": "Step-down transformer",
        "answer_hi": "स्टेप-डाउन ट्रांसफॉर्मर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which part of the plant is modified in potato?",
        "question_hi": "पौधे का कौन सा भाग आलू में संशोधित होता है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
        "answer_en": "Stem",
        "answer_hi": "तना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The chemical formula of calcium nitrate is:",
        "question_hi": "कैल्शियम नाइट्रेट का रासायनिक सूत्र है:",
        "options_en": ["Ca(NO₃)₂", "CaCO₃", "CaO", "CaCl₂"],
        "options_hi": ["Ca(NO₃)₂", "CaCO₃", "CaO", "CaCl₂"],
        "answer_en": "Ca(NO₃)₂",
        "answer_hi": "Ca(NO₃)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which of the following is a skeletal tissue?",
        "question_hi": "निम्नलिखित में से कौन कंकालीय ऊतक है?",
        "options_en": ["Bone", "Blood", "Muscle", "Nerve"],
        "options_hi": ["हड्डी", "रक्त", "पेशी", "तंत्रिका"],
        "answer_en": "Bone",
        "answer_hi": "हड्डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The device used to measure voltage in a circuit is connected:",
        "question_hi": "परिपथ में वोल्टेज मापने के लिए प्रयुक्त यंत्र जोड़ा जाता है:",
        "options_en": ["In series", "In parallel", "Both ways", "None of these"],
        "options_hi": ["श्रेणीक्रम में", "समानांतर क्रम में", "दोनों तरीकों से", "इनमें से कोई नहीं"],
        "answer_en": "In parallel",
        "answer_hi": "समानांतर क्रम में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which gas is used in anesthesia?",
        "question_hi": "संवेदनाहारी में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Nitrous oxide", "Oxygen", "Nitrogen", "Carbon dioxide"],
        "options_hi": ["नाइट्रस ऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
        "answer_en": "Nitrous oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The device that converts electrical energy to light energy is:",
        "question_hi": "वह युक्ति जो विद्युत ऊर्जा को प्रकाश ऊर्जा में बदलती है:",
        "options_en": ["Bulb", "Motor", "Generator", "Heater"],
        "options_hi": ["बल्ब", "मोटर", "जनरेटर", "हीटर"],
        "answer_en": "Bulb",
        "answer_hi": "बल्ब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which part of the cell contains DNA?",
        "question_hi": "कोशिका का कौन सा भाग DNA रखता है?",
        "options_en": ["Nucleus", "Cytoplasm", "Cell membrane", "Mitochondria"],
        "options_hi": ["केंद्रक", "कोशिकाद्रव्य", "कोशिका झिल्ली", "माइटोकॉन्ड्रिया"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "The chemical formula of aluminum oxide is:",
        "question_hi": "एल्यूमीनियम ऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["Al₂O₃", "AlO", "Al(OH)₃", "AlCl₃"],
        "options_hi": ["Al₂O₃", "AlO", "Al(OH)₃", "AlCl₃"],
        "answer_en": "Al₂O₃",
        "answer_hi": "Al₂O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which mirror can produce a magnified image?",
        "question_hi": "कौन सा दर्पण आवर्धित प्रतिबिंब उत्पन्न कर सकता है?",
        "options_en": ["Plane mirror", "Concave mirror", "Convex mirror", "All of these"],
        "options_hi": ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "ये सभी"],
        "answer_en": "Concave mirror",
        "answer_hi": "अवतल दर्पण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "The process of conversion of starch to maltose is called:",
        "question_hi": "स्टार्च का माल्टोज में परिवर्तन की प्रक्रिया को कहते हैं:",
        "options_en": ["Hydrolysis", "Digestion", "Fermentation", "Photosynthesis"],
        "options_hi": ["जल-अपघटन", "पाचन", "किण्वन", "प्रकाश संश्लेषण"],
        "answer_en": "Hydrolysis",
        "answer_hi": "जल-अपघटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which of the following is a tidal energy source?",
        "question_hi": "निम्नलिखित में से कौन ज्वारीय ऊर्जा स्रोत है?",
        "options_en": ["Sun", "Moon", "Wind", "Geothermal"],
        "options_hi": ["सूर्य", "चंद्रमा", "पवन", "भूतापीय"],
        "answer_en": "Moon",
        "answer_hi": "चंद्रमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The chemical formula of benzene is:",
        "question_hi": "बेंजीन का रासायनिक सूत्र है:",
        "options_en": ["C₆H₆", "C₆H₁₂", "C₆H₁₀", "C₆H₈"],
        "options_hi": ["C₆H₆", "C₆H₁₂", "C₆H₁₀", "C₆H₈"],
        "answer_en": "C₆H₆",
        "answer_hi": "C₆H₆",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which tissue provides mechanical support to young plants?",
        "question_hi": "कौन सा ऊतक युवा पौधों को यांत्रिक सहारा प्रदान करता है?",
        "options_en": ["Collenchyma", "Sclerenchyma", "Parenchyma", "Xylem"],
        "options_hi": ["कोलेनकाइमा", "दृढ़ोतक", "मृदूतक", "जाइलम"],
        "answer_en": "Collenchyma",
        "answer_hi": "कोलेनकाइमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The device that converts heat energy to mechanical energy is:",
        "question_hi": "वह युक्ति जो ऊष्मा ऊर्जा को यांत्रिक ऊर्जा में बदलती है:",
        "options_en": ["Steam engine", "Generator", "Motor", "Transformer"],
        "options_hi": ["भाप इंजन", "जनरेटर", "मोटर", "ट्रांसफॉर्मर"],
        "answer_en": "Steam engine",
        "answer_hi": "भाप इंजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which acid is present in rancid butter?",
        "question_hi": "बासी मक्खन में कौन सा अम्ल उपस्थित होता है?",
        "options_en": ["Butyric acid", "Acetic acid", "Lactic acid", "Formic acid"],
        "options_hi": ["ब्यूटिरिक अम्ल", "ऐसीटिक अम्ल", "लैक्टिक अम्ल", "फॉर्मिक अम्ल"],
        "answer_en": "Butyric acid",
        "answer_hi": "ब्यूटिरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The process of conversion of atmospheric nitrogen to nitrates is:",
        "question_hi": "वायुमंडलीय नाइट्रोजन का नाइट्रेट में परिवर्तन की प्रक्रिया है:",
        "options_en": ["Nitrogen fixation", "Denitrification", "Nitrification", "Ammonification"],
        "options_hi": ["नाइट्रोजन स्थिरीकरण", "विनाइट्रीकरण", "नाइट्रीकरण", "अमोनीकरण"],
        "answer_en": "Nitrogen fixation",
        "answer_hi": "नाइट्रोजन स्थिरीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which of the following is biodegradable plastic?",
        "question_hi": "निम्नलिखित में से कौन जैव निम्नीकरणीय प्लास्टिक है?",
        "options_en": ["PVC", "Polyethene", "PHBV", "Polystyrene"],
        "options_hi": ["PVC", "पॉलीएथिलीन", "PHBV", "पॉलीस्टाइरीन"],
        "answer_en": "PHBV",
        "answer_hi": "PHBV",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The chemical formula of glucose is:",
        "question_hi": "ग्लूकोज का रासायनिक सूत्र है:",
        "options_en": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
        "options_hi": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
        "answer_en": "C₆H₁₂O₆",
        "answer_hi": "C₆H₁₂O₆",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which tissue stores food in plants?",
        "question_hi": "कौन सा ऊतक पौधों में भोजन संग्रहित करता है?",
        "options_en": ["Parenchyma", "Collenchyma", "Sclerenchyma", "Xylem"],
        "options_hi": ["मृदूतक", "कोलेनकाइमा", "दृढ़ोतक", "जाइलम"],
        "answer_en": "Parenchyma",
        "answer_hi": "मृदूतक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The instrument used to measure earthquake waves is:",
        "question_hi": "भूकंप तरंगें मापने के लिए प्रयुक्त यंत्र है:",
        "options_en": ["Seismograph", "Barometer", "Thermometer", "Hygrometer"],
        "options_hi": ["सिस्मोग्राफ", "बैरोमीटर", "थर्मामीटर", "आर्द्रतामापी"],
        "answer_en": "Seismograph",
        "answer_hi": "सिस्मोग्राफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which gas is released during burning of magnesium ribbon?",
        "question_hi": "मैग्नीशियम रिबन के जलने के दौरान कौन सी गैस मुक्त होती है?",
        "options_en": ["Oxygen", "Nitrogen", "Hydrogen", "None, it forms solid product"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन", "कोई नहीं, यह ठोस उत्पाद बनाता है"],
        "answer_en": "None, it forms solid product",
        "answer_hi": "कोई नहीं, यह ठोस उत्पाद बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "The chemical formula of oxalic acid is:",
        "question_hi": "ऑक्सैलिक अम्ल का रासायनिक सूत्र है:",
        "options_en": ["(COOH)₂·2H₂O", "CH₃COOH", "C₆H₈O₇", "C₄H₆O₆"],
        "options_hi": ["(COOH)₂·2H₂O", "CH₃COOH", "C₆H₈O₇", "C₄H₆O₆"],
        "answer_en": "(COOH)₂·2H₂O",
        "answer_hi": "(COOH)₂·2H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which organ detoxifies chemicals in human body?",
        "question_hi": "मानव शरीर में कौन सा अंग रसायनों का विषहरण करता है?",
        "options_en": ["Liver", "Kidney", "Pancreas", "Spleen"],
        "options_hi": ["यकृत", "वृक्क", "अग्न्याशय", "तिल्ली"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The phenomenon of light waves bending around corners is:",
        "question_hi": "प्रकाश तरंगों का कोनों के चारों ओर मुड़ने की घटना है:",
        "options_en": ["Refraction", "Diffraction", "Interference", "Polarization"],
        "options_hi": ["अपवर्तन", "विवर्तन", "व्यतिकरण", "ध्रुवण"],
        "answer_en": "Diffraction",
        "answer_hi": "विवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which of the following is non-biodegradable pollutant?",
        "question_hi": "निम्नलिखित में से कौन गैर-जैव निम्नीकरणीय प्रदूषक है?",
        "options_en": ["Sewage", "Agricultural waste", "DDT", "Food waste"],
        "options_hi": ["मलजल", "कृषि अपशिष्ट", "DDT", "खाद्य अपशिष्ट"],
        "answer_en": "DDT",
        "answer_hi": "DDT",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The chemical formula of sodium nitrate is:",
        "question_hi": "सोडियम नाइट्रेट का रासायनिक सूत्र है:",
        "options_en": ["NaNO₃", "NaNO₂", "Na₂NO₃", "Na(NO₃)₂"],
        "options_hi": ["NaNO₃", "NaNO₂", "Na₂NO₃", "Na(NO₃)₂"],
        "answer_en": "NaNO₃",
        "answer_hi": "NaNO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which gland secretes cortisol?",
        "question_hi": "कौन सी ग्रंथि कोर्टिसोल स्रावित करती है?",
        "options_en": ["Adrenal", "Thyroid", "Pituitary", "Pancreas"],
        "options_hi": ["अधिवृक्क", "थाइरॉइड", "पीयूष", "अग्न्याशय"],
        "answer_en": "Adrenal",
        "answer_hi": "अधिवृक्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The phenomenon used in optical fibers is:",
        "question_hi": "प्रकाशीय तंतुओं में प्रयुक्त घटना है:",
        "options_en": ["Total internal reflection", "Refraction", "Dispersion", "Scattering"],
        "options_hi": ["पूर्ण आंतरिक परावर्तन", "अपवर्तन", "विक्षेपण", "प्रकीर्णन"],
        "answer_en": "Total internal reflection",
        "answer_hi": "पूर्ण आंतरिक परावर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which of the following is a micronutrient?",
        "question_hi": "निम्नलिखित में से कौन सूक्ष्म पोषक तत्व है?",
        "options_en": ["Nitrogen", "Phosphorus", "Boron", "Potassium"],
        "options_hi": ["नाइट्रोजन", "फॉस्फोरस", "बोरॉन", "पोटैशियम"],
        "answer_en": "Boron",
        "answer_hi": "बोरॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The chemical formula of citric acid is:",
        "question_hi": "साइट्रिक अम्ल का रासायनिक सूत्र है:",
        "options_en": ["C₆H₈O₇", "C₄H₆O₆", "C₃H₆O₃", "C₂H₄O₂"],
        "options_hi": ["C₆H₈O₇", "C₄H₆O₆", "C₃H₆O₃", "C₂H₄O₂"],
        "answer_en": "C₆H₈O₇",
        "answer_hi": "C₆H₈O₇",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which organelle is called energy currency of cell?",
        "question_hi": "कोशिका के किस अंगक को ऊर्जा मुद्रा कहा जाता है?",
        "options_en": ["ATP", "Mitochondria", "Chloroplast", "Nucleus"],
        "options_hi": ["ATP", "माइटोकॉन्ड्रिया", "हरितलवक", "केंद्रक"],
        "answer_en": "ATP",
        "answer_hi": "ATP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The instrument used to measure depth of ocean is:",
        "question_hi": "समुद्र की गहराई मापने के लिए प्रयुक्त यंत्र है:",
        "options_en": ["Fathometer", "Barometer", "Thermometer", "Hygrometer"],
        "options_hi": ["फैदोमीटर", "बैरोमीटर", "थर्मामीटर", "आर्द्रतामापी"],
        "answer_en": "Fathometer",
        "answer_hi": "फैदोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which gas is responsible for acid rain?",
        "question_hi": "कौन सी गैस अम्ल वर्षा के लिए जिम्मेदार है?",
        "options_en": ["SO₂ and NO₂", "CO₂", "O₂", "N₂"],
        "options_hi": ["SO₂ और NO₂", "CO₂", "O₂", "N₂"],
        "answer_en": "SO₂ and NO₂",
        "answer_hi": "SO₂ और NO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The chemical formula of nitrous oxide is:",
        "question_hi": "नाइट्रस ऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["N₂O", "NO", "NO₂", "N₂O₄"],
        "options_hi": ["N₂O", "NO", "NO₂", "N₂O₄"],
        "answer_en": "N₂O",
        "answer_hi": "N₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which part of brain controls body temperature?",
        "question_hi": "मस्तिष्क का कौन सा भाग शरीर के तापमान को नियंत्रित करता है?",
        "options_en": ["Hypothalamus", "Cerebrum", "Cerebellum", "Medulla"],
        "options_hi": ["हाइपोथैलेमस", "सेरिब्रम", "सेरिबेलम", "मेडुला"],
        "answer_en": "Hypothalamus",
        "answer_hi": "हाइपोथैलेमस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The working of a camera is similar to:",
        "question_hi": "कैमरे का कार्य समान है:",
        "options_en": ["Human eye", "Microscope", "Telescope", "Periscope"],
        "options_hi": ["मानव आँख", "सूक्ष्मदर्शी", "दूरबीन", "पेरिस्कोप"],
        "answer_en": "Human eye",
        "answer_hi": "मानव आँख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which of the following is a water-borne disease?",
        "question_hi": "निम्नलिखित में से कौन जलजनित रोग है?",
        "options_en": ["Malaria", "Cholera", "Tuberculosis", "Influenza"],
        "options_hi": ["मलेरिया", "हैजा", "तपेदिक", "इन्फ्लूएंजा"],
        "answer_en": "Cholera",
        "answer_hi": "हैजा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The chemical formula of sodium thiosulfate is:",
        "question_hi": "सोडियम थायोसल्फेट का रासायनिक सूत्र है:",
        "options_en": ["Na₂S₂O₃", "Na₂SO₄", "Na₂SO₃", "Na₂S"],
        "options_hi": ["Na₂S₂O₃", "Na₂SO₄", "Na₂SO₃", "Na₂S"],
        "answer_en": "Na₂S₂O₃",
        "answer_hi": "Na₂S₂O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which part of flower produces female gametes?",
        "question_hi": "फूल का कौन सा भाग मादा युग्मक उत्पन्न करता है?",
        "options_en": ["Ovary", "Anther", "Stigma", "Style"],
        "options_hi": ["अंडाशय", "परागकोष", "वर्तिकाग्र", "वर्तिका"],
        "answer_en": "Ovary",
        "answer_hi": "अंडाशय",
        "attempted": false,
        "selected": ""
    }
]
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