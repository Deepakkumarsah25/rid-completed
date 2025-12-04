const questions = [
    {
        "num": 1,
        "question_en": "The SI unit of luminous flux is:",
        "question_hi": "ज्योति फ्लक्स की SI इकाई है:",
        "options_en": ["Lux", "Lumen", "Candela", "Watt"],
        "options_hi": ["लक्स", "लुमेन", "कैंडेला", "वाट"],
        "answer_en": "Lumen",
        "answer_hi": "लुमेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The process of converting AC to DC is called:",
        "question_hi": "AC को DC में परिवर्तित करने की प्रक्रिया कहलाती है:",
        "options_en": ["Amplification", "Rectification", "Modulation", "Oscillation"],
        "options_hi": ["प्रवर्धन", "दिष्टकरण", "मॉडुलन", "दोलन"],
        "answer_en": "Rectification",
        "answer_hi": "दिष्टकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The element with atomic number 17 is:",
        "question_hi": "परमाणु संख्या 17 वाला तत्व है:",
        "options_en": ["Sulfur", "Chlorine", "Argon", "Phosphorus"],
        "options_hi": ["सल्फर", "क्लोरीन", "आर्गन", "फॉस्फोरस"],
        "answer_en": "Chlorine",
        "answer_hi": "क्लोरीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The process of removing salt from seawater is called:",
        "question_hi": "समुद्री जल से नमक हटाने की प्रक्रिया कहलाती है:",
        "options_en": ["Filtration", "Distillation", "Desalination", "Sedimentation"],
        "options_hi": ["निस्यंदन", "आसवन", "अलवणीकरण", "अवसादन"],
        "answer_en": "Desalination",
        "answer_hi": "अलवणीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The study of insects is called:",
        "question_hi": "कीटों का अध्ययन कहलाता है:",
        "options_en": ["Entomology", "Ornithology", "Herpetology", "Ichthyology"],
        "options_hi": ["कीटविज्ञान", "पक्षीविज्ञान", "सरीसृपविज्ञान", "मत्स्यविज्ञान"],
        "answer_en": "Entomology",
        "answer_hi": "कीटविज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The metal used in fireworks to produce green color is:",
        "question_hi": "आतिशबाजी में हरा रंग उत्पन्न करने के लिए प्रयुक्त धातु है:",
        "options_en": ["Sodium", "Copper", "Barium", "Strontium"],
        "options_hi": ["सोडियम", "तांबा", "बेरियम", "स्ट्रोंशियम"],
        "answer_en": "Barium",
        "answer_hi": "बेरियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The instrument used to measure electric current is:",
        "question_hi": "विद्युत धारा मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Voltmeter", "Ammeter", "Galvanometer", "Ohmmeter"],
        "options_hi": ["वोल्टमीटर", "एमीटर", "गैल्वेनोमीटर", "ओममीटर"],
        "answer_en": "Ammeter",
        "answer_hi": "एमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The process of cell division in reproductive cells is called:",
        "question_hi": "प्रजनन कोशिकाओं में कोशिका विभाजन की प्रक्रिया कहलाती है:",
        "options_en": ["Mitosis", "Meiosis", "Binary fission", "Budding"],
        "options_hi": ["समसूत्रीविभाजन", "अर्धसूत्रीविभाजन", "द्विखंडन", "मुकुलन"],
        "answer_en": "Meiosis",
        "answer_hi": "अर्धसूत्रीविभाजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The chemical formula of quicklime is:",
        "question_hi": "बिना बुझा चूना का रासायनिक सूत्र है:",
        "options_en": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "options_hi": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "answer_en": "CaO",
        "answer_hi": "CaO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The SI unit of electric charge is:",
        "question_hi": "विद्युत आवेश की SI इकाई है:",
        "options_en": ["Ampere", "Volt", "Coulomb", "Ohm"],
        "options_hi": ["एम्पियर", "वोल्ट", "कूलॉम", "ओम"],
        "answer_en": "Coulomb",
        "answer_hi": "कूलॉम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "The process of conversion of vapor to liquid is called:",
        "question_hi": "वाष्प का द्रव में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Evaporation", "Condensation", "Sublimation", "Fusion"],
        "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "संलयन"],
        "answer_en": "Condensation",
        "answer_hi": "संघनन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The metal used in thermometers is:",
        "question_hi": "थर्मामीटर में प्रयुक्त धातु है:",
        "options_en": ["Mercury", "Aluminum", "Copper", "Iron"],
        "options_hi": ["पारा", "एल्युमिनियम", "तांबा", "लोहा"],
        "answer_en": "Mercury",
        "answer_hi": "पारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The study of blood is called:",
        "question_hi": "रक्त का अध्ययन कहलाता है:",
        "options_en": ["Cardiology", "Hematology", "Neurology", "Pathology"],
        "options_hi": ["हृदय विज्ञान", "रक्त विज्ञान", "स्नायु विज्ञान", "रोग विज्ञान"],
        "answer_en": "Hematology",
        "answer_hi": "रक्त विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
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
        "num": 15,
        "question_en": "The device used to measure atmospheric humidity is:",
        "question_hi": "वायुमंडलीय आर्द्रता मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Barometer", "Hygrometer", "Anemometer", "Thermometer"],
        "options_hi": ["बैरोमीटर", "हाइग्रोमीटर", "एनीमोमीटर", "थर्मामीटर"],
        "answer_en": "Hygrometer",
        "answer_hi": "हाइग्रोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The process of converting light energy to chemical energy is:",
        "question_hi": "प्रकाश ऊर्जा को रासायनिक ऊर्जा में परिवर्तित करने की प्रक्रिया है:",
        "options_en": ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
        "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "किण्वन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The metal used in making electric wires is:",
        "question_hi": "विद्युत तार बनाने में प्रयुक्त धातु है:",
        "options_en": ["Copper", "Aluminum", "Silver", "Both A and B"],
        "options_hi": ["तांबा", "एल्युमिनियम", "चांदी", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The study of fungi is called:",
        "question_hi": "कवक का अध्ययन कहलाता है:",
        "options_en": ["Mycology", "Bacteriology", "Virology", "Phycology"],
        "options_hi": ["कवक विज्ञान", "जीवाणु विज्ञान", "वायरस विज्ञान", "शैवाल विज्ञान"],
        "answer_en": "Mycology",
        "answer_hi": "कवक विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The chemical formula of common salt is:",
        "question_hi": "साधारण नमक का रासायनिक सूत्र है:",
        "options_en": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "options_hi": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The SI unit of power is:",
        "question_hi": "शक्ति की SI इकाई है:",
        "options_en": ["Joule", "Watt", "Newton", "Pascal"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "The process of conversion of nitrogen to ammonia is called:",
        "question_hi": "नाइट्रोजन का अमोनिया में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
        "options_hi": ["नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण"],
        "answer_en": "Nitrogen fixation",
        "answer_hi": "नाइट्रोजन स्थिरीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The metal used in aircraft manufacturing is:",
        "question_hi": "वायुयान निर्माण में प्रयुक्त धातु है:",
        "options_en": ["Aluminum", "Iron", "Copper", "Lead"],
        "options_hi": ["एल्युमिनियम", "लोहा", "तांबा", "सीसा"],
        "answer_en": "Aluminum",
        "answer_hi": "एल्युमिनियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The study of birds is called:",
        "question_hi": "पक्षियों का अध्ययन कहलाता है:",
        "options_en": ["Ornithology", "Entomology", "Herpetology", "Ichthyology"],
        "options_hi": ["पक्षीविज्ञान", "कीटविज्ञान", "सरीसृपविज्ञान", "मत्स्यविज्ञान"],
        "answer_en": "Ornithology",
        "answer_hi": "पक्षीविज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
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
        "num": 25,
        "question_en": "The SI unit of frequency is:",
        "question_hi": "आवृत्ति की SI इकाई है:",
        "options_en": ["Hertz", "Decibel", "Newton", "Joule"],
        "options_hi": ["हर्ट्ज", "डेसिबल", "न्यूटन", "जूल"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The process of conversion of solid to liquid is called:",
        "question_hi": "ठोस का द्रव में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Melting", "Freezing", "Evaporation", "Condensation"],
        "options_hi": ["गलन", "हिमीकरण", "वाष्पीकरण", "संघनन"],
        "answer_en": "Melting",
        "answer_hi": "गलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The metal used in storage batteries is:",
        "question_hi": "संचायक बैटरियों में प्रयुक्त धातु है:",
        "options_en": ["Lead", "Zinc", "Copper", "Aluminum"],
        "options_hi": ["सीसा", "जस्ता", "तांबा", "एल्युमिनियम"],
        "answer_en": "Lead",
        "answer_hi": "सीसा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The study of viruses is called:",
        "question_hi": "वायरस का अध्ययन कहलाता है:",
        "options_en": ["Virology", "Bacteriology", "Mycology", "Parasitology"],
        "options_hi": ["वायरस विज्ञान", "जीवाणु विज्ञान", "कवक विज्ञान", "परजीवी विज्ञान"],
        "answer_en": "Virology",
        "answer_hi": "वायरस विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
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
        "num": 30,
        "question_en": "The SI unit of electric potential is:",
        "question_hi": "विद्युत विभव की SI इकाई है:",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Volt",
        "answer_hi": "वोल्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "The process of conversion of liquid to solid is called:",
        "question_hi": "द्रव का ठोस में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Freezing", "Melting", "Evaporation", "Condensation"],
        "options_hi": ["हिमीकरण", "गलन", "वाष्पीकरण", "संघनन"],
        "answer_en": "Freezing",
        "answer_hi": "हिमीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The metal used in making permanent magnets is:",
        "question_hi": "स्थायी चुंबक बनाने में प्रयुक्त धातु है:",
        "options_en": ["Iron", "Steel", "Cobalt", "All of these"],
        "options_hi": ["लोहा", "इस्पात", "कोबाल्ट", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The study of algae is called:",
        "question_hi": "शैवाल का अध्ययन कहलाता है:",
        "options_en": ["Phycology", "Mycology", "Bryology", "Pteridology"],
        "options_hi": ["शैवाल विज्ञान", "कवक विज्ञान", "ब्रायोफाइट विज्ञान", "फर्न विज्ञान"],
        "answer_en": "Phycology",
        "answer_hi": "शैवाल विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The chemical formula of carbon dioxide is:",
        "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["CO₂", "CO", "C₂O", "CO₃"],
        "options_hi": ["CO₂", "CO", "C₂O", "CO₃"],
        "answer_en": "CO₂",
        "answer_hi": "CO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The SI unit of resistance is:",
        "question_hi": "प्रतिरोध की SI इकाई है:",
        "options_en": ["Ohm", "Volt", "Ampere", "Watt"],
        "options_hi": ["ओम", "वोल्ट", "एम्पियर", "वाट"],
        "answer_en": "Ohm",
        "answer_hi": "ओम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The process of conversion of liquid to vapor is called:",
        "question_hi": "द्रव का वाष्प में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Evaporation", "Condensation", "Sublimation", "Freezing"],
        "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "हिमीकरण"],
        "answer_en": "Evaporation",
        "answer_hi": "वाष्पीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The metal used in making coins is:",
        "question_hi": "सिक्के बनाने में प्रयुक्त धातु है:",
        "options_en": ["Copper", "Nickel", "Aluminum", "All of these"],
        "options_hi": ["तांबा", "निकल", "एल्युमिनियम", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The study of tissues is called:",
        "question_hi": "ऊतकों का अध्ययन कहलाता है:",
        "options_en": ["Histology", "Cytology", "Anatomy", "Physiology"],
        "options_hi": ["ऊतक विज्ञान", "कोशिका विज्ञान", "शरीर रचना विज्ञान", "शरीर क्रिया विज्ञान"],
        "answer_en": "Histology",
        "answer_hi": "ऊतक विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The chemical formula of ammonia is:",
        "question_hi": "अमोनिया का रासायनिक सूत्र है:",
        "options_en": ["NH₃", "NH₄", "N₂H₄", "HNO₃"],
        "options_hi": ["NH₃", "NH₄", "N₂H₄", "HNO₃"],
        "answer_en": "NH₃",
        "answer_hi": "NH₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The SI unit of energy is:",
        "question_hi": "ऊर्जा की SI इकाई है:",
        "options_en": ["Joule", "Watt", "Newton", "Pascal"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "The process of conversion of glucose to energy in cells is called:",
        "question_hi": "कोशिकाओं में ग्लूकोज का ऊर्जा में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
        "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "पाचन"],
        "answer_en": "Respiration",
        "answer_hi": "श्वसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "The metal used in making jewelry is:",
        "question_hi": "आभूषण बनाने में प्रयुक्त धातु है:",
        "options_en": ["Gold", "Silver", "Platinum", "All of these"],
        "options_hi": ["सोना", "चांदी", "प्लैटिनम", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The study of bacteria is called:",
        "question_hi": "जीवाणुओं का अध्ययन कहलाता है:",
        "options_en": ["Bacteriology", "Virology", "Mycology", "Parasitology"],
        "options_hi": ["जीवाणु विज्ञान", "वायरस विज्ञान", "कवक विज्ञान", "परजीवी विज्ञान"],
        "answer_en": "Bacteriology",
        "answer_hi": "जीवाणु विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "The chemical formula of water is:",
        "question_hi": "जल का रासायनिक सूत्र है:",
        "options_en": ["H₂O", "H₂O₂", "HO", "H₃O"],
        "options_hi": ["H₂O", "H₂O₂", "HO", "H₃O"],
        "answer_en": "H₂O",
        "answer_hi": "H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
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
        "num": 46,
        "question_en": "The process of conversion of food to simpler substances is called:",
        "question_hi": "भोजन का सरल पदार्थों में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Digestion", "Respiration", "Photosynthesis", "Transpiration"],
        "options_hi": ["पाचन", "श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन"],
        "answer_en": "Digestion",
        "answer_hi": "पाचन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "The metal used in making cans for food storage is:",
        "question_hi": "भोजन भंडारण के लिए डिब्बे बनाने में प्रयुक्त धातु है:",
        "options_en": ["Aluminum", "Tin", "Steel", "All of these"],
        "options_hi": ["एल्युमिनियम", "टिन", "इस्पात", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "The study of cells is called:",
        "question_hi": "कोशिकाओं का अध्ययन कहलाता है:",
        "options_en": ["Cytology", "Histology", "Anatomy", "Physiology"],
        "options_hi": ["कोशिका विज्ञान", "ऊतक विज्ञान", "शरीर रचना विज्ञान", "शरीर क्रिया विज्ञान"],
        "answer_en": "Cytology",
        "answer_hi": "कोशिका विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The chemical formula of hydrogen peroxide is:",
        "question_hi": "हाइड्रोजन पेरोक्साइड का रासायनिक सूत्र है:",
        "options_en": ["H₂O₂", "H₂O", "HO₂", "H₃O"],
        "options_hi": ["H₂O₂", "H₂O", "HO₂", "H₃O"],
        "answer_en": "H₂O₂",
        "answer_hi": "H₂O₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
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
        "num": 51,
        "question_en": "The process of conversion of light to electrical energy in plants is:",
        "question_hi": "पौधों में प्रकाश का विद्युत ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["Photosynthesis", "Respiration", "Transpiration", "Digestion"],
        "options_hi": ["प्रकाश संश्लेषण", "श्वसन", "वाष्पोत्सर्जन", "पाचन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "The metal used in making surgical instruments is:",
        "question_hi": "शल्य चिकित्सा उपकरण बनाने में प्रयुक्त धातु है:",
        "options_en": ["Stainless steel", "Copper", "Aluminum", "Lead"],
        "options_hi": ["स्टेनलेस स्टील", "तांबा", "एल्युमिनियम", "सीसा"],
        "answer_en": "Stainless steel",
        "answer_hi": "स्टेनलेस स्टील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "The study of the structure of organisms is called:",
        "question_hi": "जीवों की संरचना का अध्ययन कहलाता है:",
        "options_en": ["Anatomy", "Physiology", "Morphology", "Histology"],
        "options_hi": ["शरीर रचना विज्ञान", "शरीर क्रिया विज्ञान", "आकृति विज्ञान", "ऊतक विज्ञान"],
        "answer_en": "Anatomy",
        "answer_hi": "शरीर रचना विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "The chemical formula of nitric acid is:",
        "question_hi": "नाइट्रिक अम्ल का रासायनिक सूत्र है:",
        "options_en": ["HNO₃", "H₂SO₄", "HCl", "H₃PO₄"],
        "options_hi": ["HNO₃", "H₂SO₄", "HCl", "H₃PO₄"],
        "answer_en": "HNO₃",
        "answer_hi": "HNO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "The SI unit of work is:",
        "question_hi": "कार्य की SI इकाई है:",
        "options_en": ["Joule", "Watt", "Newton", "Pascal"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Joule",
        "answer_hi": "जूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "The process of conversion of chemical energy to electrical energy is:",
        "question_hi": "रासायनिक ऊर्जा का विद्युत ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["In battery", "In generator", "In motor", "In transformer"],
        "options_hi": ["बैटरी में", "जनरेटर में", "मोटर में", "ट्रांसफॉर्मर में"],
        "answer_en": "In battery",
        "answer_hi": "बैटरी में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "The metal used in making radiators is:",
        "question_hi": "रेडिएटर बनाने में प्रयुक्त धातु है:",
        "options_en": ["Copper", "Aluminum", "Both A and B", "Iron"],
        "options_hi": ["तांबा", "एल्युमिनियम", "A और B दोनों", "लोहा"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "The study of the function of organisms is called:",
        "question_hi": "जीवों के कार्य का अध्ययन कहलाता है:",
        "options_en": ["Physiology", "Anatomy", "Morphology", "Histology"],
        "options_hi": ["शरीर क्रिया विज्ञान", "शरीर रचना विज्ञान", "आकृति विज्ञान", "ऊतक विज्ञान"],
        "answer_en": "Physiology",
        "answer_hi": "शरीर क्रिया विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "The chemical formula of hydrochloric acid is:",
        "question_hi": "हाइड्रोक्लोरिक अम्ल का रासायनिक सूत्र है:",
        "options_en": ["HCl", "H₂SO₄", "HNO₃", "H₃PO₄"],
        "options_hi": ["HCl", "H₂SO₄", "HNO₃", "H₃PO₄"],
        "answer_en": "HCl",
        "answer_hi": "HCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "The SI unit of temperature is:",
        "question_hi": "तापमान की SI इकाई है:",
        "options_en": ["Kelvin", "Celsius", "Fahrenheit", "All of these"],
        "options_hi": ["केल्विन", "सेल्सियस", "फारेनहाइट", "ये सभी"],
        "answer_en": "Kelvin",
        "answer_hi": "केल्विन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "The process of conversion of electrical energy to mechanical energy is:",
        "question_hi": "विद्युत ऊर्जा का यांत्रिक ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["In motor", "In generator", "In battery", "In transformer"],
        "options_hi": ["मोटर में", "जनरेटर में", "बैटरी में", "ट्रांसफॉर्मर में"],
        "answer_en": "In motor",
        "answer_hi": "मोटर में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "The metal used in making electrical contacts is:",
        "question_hi": "विद्युत संपर्क बनाने में प्रयुक्त धातु है:",
        "options_en": ["Silver", "Copper", "Gold", "All of these"],
        "options_hi": ["चांदी", "तांबा", "सोना", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The study of heredity is called:",
        "question_hi": "आनुवंशिकता का अध्ययन कहलाता है:",
        "options_en": ["Genetics", "Evolution", "Ecology", "Taxonomy"],
        "options_hi": ["आनुवंशिकी", "विकास", "पारिस्थितिकी", "वर्गीकरण विज्ञान"],
        "answer_en": "Genetics",
        "answer_hi": "आनुवंशिकी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The chemical formula of ozone is:",
        "question_hi": "ओजोन का रासायनिक सूत्र है:",
        "options_en": ["O₃", "O₂", "O₄", "HO₃"],
        "options_hi": ["O₃", "O₂", "O₄", "HO₃"],
        "answer_en": "O₃",
        "answer_hi": "O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
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
        "num": 66,
        "question_en": "The process of conversion of mechanical energy to electrical energy is:",
        "question_hi": "यांत्रिक ऊर्जा का विद्युत ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["In generator", "In motor", "In battery", "In transformer"],
        "options_hi": ["जनरेटर में", "मोटर में", "बैटरी में", "ट्रांसफॉर्मर में"],
        "answer_en": "In generator",
        "answer_hi": "जनरेटर में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The metal used in making mirrors is:",
        "question_hi": "दर्पण बनाने में प्रयुक्त धातु है:",
        "options_en": ["Silver", "Aluminum", "Both A and B", "Copper"],
        "options_hi": ["चांदी", "एल्युमिनियम", "A और B दोनों", "तांबा"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The study of classification of organisms is called:",
        "question_hi": "जीवों के वर्गीकरण का अध्ययन कहलाता है:",
        "options_en": ["Taxonomy", "Genetics", "Ecology", "Evolution"],
        "options_hi": ["वर्गीकरण विज्ञान", "आनुवंशिकी", "पारिस्थितिकी", "विकास"],
        "answer_en": "Taxonomy",
        "answer_hi": "वर्गीकरण विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
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
        "num": 70,
        "question_en": "The SI unit of luminous intensity is:",
        "question_hi": "ज्योति तीव्रता की SI इकाई है:",
        "options_en": ["Candela", "Lumen", "Lux", "Watt"],
        "options_hi": ["कैंडेला", "लुमेन", "लक्स", "वाट"],
        "answer_en": "Candela",
        "answer_hi": "कैंडेला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "The process of conversion of nuclear energy to electrical energy is:",
        "question_hi": "नाभिकीय ऊर्जा का विद्युत ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["In nuclear power plant", "In solar cell", "In battery", "In generator"],
        "options_hi": ["नाभिकीय ऊर्जा संयंत्र में", "सौर सेल में", "बैटरी में", "जनरेटर में"],
        "answer_en": "In nuclear power plant",
        "answer_hi": "नाभिकीय ऊर्जा संयंत्र में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The metal used in making electrical wires is:",
        "question_hi": "विद्युत तार बनाने में प्रयुक्त धातु है:",
        "options_en": ["Copper", "Aluminum", "Both A and B", "Iron"],
        "options_hi": ["तांबा", "एल्युमिनियम", "A और B दोनों", "लोहा"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The study of the relationship between organisms and their environment is called:",
        "question_hi": "जीवों और उनके पर्यावरण के बीच संबंध का अध्ययन कहलाता है:",
        "options_en": ["Ecology", "Genetics", "Evolution", "Taxonomy"],
        "options_hi": ["पारिस्थितिकी", "आनुवंशिकी", "विकास", "वर्गीकरण विज्ञान"],
        "answer_en": "Ecology",
        "answer_hi": "पारिस्थितिकी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
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
        "num": 75,
        "question_en": "The SI unit of amount of substance is:",
        "question_hi": "पदार्थ की मात्रा की SI इकाई है:",
        "options_en": ["Mole", "Gram", "Kilogram", "Liter"],
        "options_hi": ["मोल", "ग्राम", "किलोग्राम", "लीटर"],
        "answer_en": "Mole",
        "answer_hi": "मोल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "The process of conversion of solar energy to electrical energy is:",
        "question_hi": "सौर ऊर्जा का विद्युत ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["In solar cell", "In battery", "In generator", "In motor"],
        "options_hi": ["सौर सेल में", "बैटरी में", "जनरेटर में", "मोटर में"],
        "answer_en": "In solar cell",
        "answer_hi": "सौर सेल में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The metal used in making aircraft bodies is:",
        "question_hi": "वायुयान के धड़ बनाने में प्रयुक्त धातु है:",
        "options_en": ["Aluminum", "Titanium", "Both A and B", "Steel"],
        "options_hi": ["एल्युमिनियम", "टाइटेनियम", "A और B दोनों", "इस्पात"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The study of the development of organisms is called:",
        "question_hi": "जीवों के विकास का अध्ययन कहलाता है:",
        "options_en": ["Embryology", "Genetics", "Evolution", "Ecology"],
        "options_hi": ["भ्रूण विज्ञान", "आनुवंशिकी", "विकास", "पारिस्थितिकी"],
        "answer_en": "Embryology",
        "answer_hi": "भ्रूण विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The chemical formula of potassium nitrate is:",
        "question_hi": "पोटैशियम नाइट्रेट का रासायनिक सूत्र है:",
        "options_en": ["KNO₃", "KCl", "K₂SO₄", "KOH"],
        "options_hi": ["KNO₃", "KCl", "K₂SO₄", "KOH"],
        "answer_en": "KNO₃",
        "answer_hi": "KNO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The SI unit of time is:",
        "question_hi": "समय की SI इकाई है:",
        "options_en": ["Second", "Minute", "Hour", "Day"],
        "options_hi": ["सेकंड", "मिनट", "घंटा", "दिन"],
        "answer_en": "Second",
        "answer_hi": "सेकंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The process of conversion of wind energy to electrical energy is:",
        "question_hi": "पवन ऊर्जा का विद्युत ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["In wind turbine", "In solar cell", "In battery", "In generator"],
        "options_hi": ["पवन टरबाइन में", "सौर सेल में", "बैटरी में", "जनरेटर में"],
        "answer_en": "In wind turbine",
        "answer_hi": "पवन टरबाइन में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The metal used in making ship hulls is:",
        "question_hi": "जहाज के पतवार बनाने में प्रयुक्त धातु है:",
        "options_en": ["Steel", "Aluminum", "Copper", "Lead"],
        "options_hi": ["इस्पात", "एल्युमिनियम", "तांबा", "सीसा"],
        "answer_en": "Steel",
        "answer_hi": "इस्पात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "The study of the behavior of organisms is called:",
        "question_hi": "जीवों के व्यवहार का अध्ययन कहलाता है:",
        "options_en": ["Ethology", "Ecology", "Psychology", "Sociology"],
        "options_hi": ["व्यवहार विज्ञान", "पारिस्थितिकी", "मनोविज्ञान", "समाजशास्त्र"],
        "answer_en": "Ethology",
        "answer_hi": "व्यवहार विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The chemical formula of magnesium oxide is:",
        "question_hi": "मैग्नीशियम ऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["MgO", "Mg(OH)₂", "MgCO₃", "MgSO₄"],
        "options_hi": ["MgO", "Mg(OH)₂", "MgCO₃", "MgSO₄"],
        "answer_en": "MgO",
        "answer_hi": "MgO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The SI unit of length is:",
        "question_hi": "लंबाई की SI इकाई है:",
        "options_en": ["Meter", "Centimeter", "Kilometer", "Millimeter"],
        "options_hi": ["मीटर", "सेंटीमीटर", "किलोमीटर", "मिलीमीटर"],
        "answer_en": "Meter",
        "answer_hi": "मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The process of conversion of geothermal energy to electrical energy is:",
        "question_hi": "भूतापीय ऊर्जा का विद्युत ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["In geothermal power plant", "In solar cell", "In wind turbine", "In battery"],
        "options_hi": ["भूतापीय ऊर्जा संयंत्र में", "सौर सेल में", "पवन टरबाइन में", "बैटरी में"],
        "answer_en": "In geothermal power plant",
        "answer_hi": "भूतापीय ऊर्जा संयंत्र में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The metal used in making dental fillings is:",
        "question_hi": "दंत भराव बनाने में प्रयुक्त धातु है:",
        "options_en": ["Mercury amalgam", "Gold", "Silver", "All of these"],
        "options_hi": ["पारा अमलगम", "सोना", "चांदी", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The study of the form and structure of organisms is called:",
        "question_hi": "जीवों के रूप और संरचना का अध्ययन कहलाता है:",
        "options_en": ["Morphology", "Anatomy", "Physiology", "Histology"],
        "options_hi": ["आकृति विज्ञान", "शरीर रचना विज्ञान", "शरीर क्रिया विज्ञान", "ऊतक विज्ञान"],
        "answer_en": "Morphology",
        "answer_hi": "आकृति विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The chemical formula of calcium oxide is:",
        "question_hi": "कैल्शियम ऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "options_hi": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "answer_en": "CaO",
        "answer_hi": "CaO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The SI unit of mass is:",
        "question_hi": "द्रव्यमान की SI इकाई है:",
        "options_en": ["Kilogram", "Gram", "Pound", "Ounce"],
        "options_hi": ["किलोग्राम", "ग्राम", "पाउंड", "औंस"],
        "answer_en": "Kilogram",
        "answer_hi": "किलोग्राम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The process of conversion of tidal energy to electrical energy is:",
        "question_hi": "ज्वारीय ऊर्जा का विद्युत ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["In tidal power plant", "In solar cell", "In wind turbine", "In battery"],
        "options_hi": ["ज्वारीय ऊर्जा संयंत्र में", "सौर सेल में", "पवन टरबाइन में", "बैटरी में"],
        "answer_en": "In tidal power plant",
        "answer_hi": "ज्वारीय ऊर्जा संयंत्र में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The metal used in making musical instruments is:",
        "question_hi": "संगीत वाद्ययंत्र बनाने में प्रयुक्त धातु है:",
        "options_en": ["Brass", "Copper", "Silver", "All of these"],
        "options_hi": ["पीतल", "तांबा", "चांदी", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The study of the nervous system is called:",
        "question_hi": "तंत्रिका तंत्र का अध्ययन कहलाता है:",
        "options_en": ["Neurology", "Cardiology", "Hematology", "Endocrinology"],
        "options_hi": ["स्नायु विज्ञान", "हृदय विज्ञान", "रक्त विज्ञान", "अंतःस्राव विज्ञान"],
        "answer_en": "Neurology",
        "answer_hi": "स्नायु विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The chemical formula of sodium carbonate is:",
        "question_hi": "सोडियम कार्बोनेट का रासायनिक सूत्र है:",
        "options_en": ["Na₂CO₃", "NaHCO₃", "NaOH", "NaCl"],
        "options_hi": ["Na₂CO₃", "NaHCO₃", "NaOH", "NaCl"],
        "answer_en": "Na₂CO₃",
        "answer_hi": "Na₂CO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The SI unit of electric capacitance is:",
        "question_hi": "विद्युत धारिता की SI इकाई है:",
        "options_en": ["Farad", "Henry", "Tesla", "Weber"],
        "options_hi": ["फैरड", "हेनरी", "टेस्ला", "वेबर"],
        "answer_en": "Farad",
        "answer_hi": "फैरड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "The process of conversion of biomass to electrical energy is:",
        "question_hi": "बायोमास का विद्युत ऊर्जा में परिवर्तन की प्रक्रिया है:",
        "options_en": ["In biomass power plant", "In solar cell", "In wind turbine", "In battery"],
        "options_hi": ["बायोमास ऊर्जा संयंत्र में", "सौर सेल में", "पवन टरबाइन में", "बैटरी में"],
        "answer_en": "In biomass power plant",
        "answer_hi": "बायोमास ऊर्जा संयंत्र में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The metal used in making bulletproof vests is:",
        "question_hi": "बुलेटप्रूफ वेस्ट बनाने में प्रयुक्त धातु है:",
        "options_en": ["Kevlar (not metal)", "Steel", "Titanium", "All of these"],
        "options_hi": ["केवलार (धातु नहीं)", "इस्पात", "टाइटेनियम", "ये सभी"],
        "answer_en": "Kevlar (not metal)",
        "answer_hi": "केवलार (धातु नहीं)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The study of the endocrine system is called:",
        "question_hi": "अंतःस्राव तंत्र का अध्ययन कहलाता है:",
        "options_en": ["Endocrinology", "Neurology", "Cardiology", "Hematology"],
        "options_hi": ["अंतःस्राव विज्ञान", "स्नायु विज्ञान", "हृदय विज्ञान", "रक्त विज्ञान"],
        "answer_en": "Endocrinology",
        "answer_hi": "अंतःस्राव विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The chemical formula of potassium hydroxide is:",
        "question_hi": "पोटैशियम हाइड्रॉक्साइड का रासायनिक सूत्र है:",
        "options_en": ["KOH", "KCl", "K₂SO₄", "KNO₃"],
        "options_hi": ["KOH", "KCl", "K₂SO₄", "KNO₃"],
        "answer_en": "KOH",
        "answer_hi": "KOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The SI unit of magnetic flux is:",
        "question_hi": "चुंबकीय फ्लक्स की SI इकाई है:",
        "options_en": ["Weber", "Tesla", "Henry", "Farad"],
        "options_hi": ["वेबर", "टेस्ला", "हेनरी", "फैरड"],
        "answer_en": "Weber",
        "answer_hi": "वेबर",
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