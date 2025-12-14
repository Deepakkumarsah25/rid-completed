const questions = [

    {
      "num": 1,
      "question_en": "Which of the following is not a part of the human digestive system?",
      "question_hi": "निम्नलिखित में से कौन मानव पाचन तंत्र का भाग नहीं है?",
      "options_en": ["Liver", "Pancreas", "Kidney", "Stomach"],
      "options_hi": ["यकृत", "अग्न्याशय", "वृक्क", "आमाशय"],
      "answer_en": "Kidney",
      "answer_hi": "वृक्क",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "The chemical formula of baking soda is:",
      "question_hi": "बेकिंग सोडा का रासायनिक सूत्र है:",
      "options_en": ["NaCl", "NaHCO₃", "NaOH", "Na₂CO₃"],
      "options_hi": ["NaCl", "NaHCO₃", "NaOH", "Na₂CO₃"],
      "answer_en": "NaHCO₃",
      "answer_hi": "NaHCO₃",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "Which gland in human body is called the master gland?",
      "question_hi": "मानव शरीर में किस ग्रंथि को मास्टर ग्रंथि कहा जाता है?",
      "options_en": ["Thyroid", "Pituitary", "Pancreas", "Adrenal"],
      "options_hi": ["थायरॉयड", "पिट्यूटरी", "अग्न्याशय", "अधिवृक्क"],
      "answer_en": "Pituitary",
      "answer_hi": "पिट्यूटरी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "The phenomenon of scattering of light by colloidal particles is called:",
      "question_hi": "कोलाइडल कणों द्वारा प्रकाश के प्रकीर्णन की घटना को कहा जाता है:",
      "options_en": ["Reflection", "Refraction", "Tyndall effect", "Dispersion"],
      "options_hi": ["परावर्तन", "अपवर्तन", "टिंडल प्रभाव", "विक्षेपण"],
      "answer_en": "Tyndall effect",
      "answer_hi": "टिंडल प्रभाव",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "Which of the following is a good conductor of electricity?",
      "question_hi": "निम्नलिखित में से कौन विद्युत का सुचालक है?",
      "options_en": ["Distilled water", "Silver", "Rubber", "Plastic"],
      "options_hi": ["आसुत जल", "चाँदी", "रबर", "प्लास्टिक"],
      "answer_en": "Silver",
      "answer_hi": "चाँदी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "The SI unit of electric current is:",
      "question_hi": "विद्युत धारा का SI मात्रक है:",
      "options_en": ["Volt", "Ohm", "Ampere", "Watt"],
      "options_hi": ["वोल्ट", "ओम", "एम्पियर", "वाट"],
      "answer_en": "Ampere",
      "answer_hi": "एम्पियर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "Which of the following is not a greenhouse gas?",
      "question_hi": "निम्नलिखित में से कौन ग्रीनहाउस गैस नहीं है?",
      "options_en": ["Carbon dioxide", "Methane", "Oxygen", "Nitrous oxide"],
      "options_hi": ["कार्बन डाइऑक्साइड", "मीथेन", "ऑक्सीजन", "नाइट्रस ऑक्साइड"],
      "answer_en": "Oxygen",
      "answer_hi": "ऑक्सीजन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "The process by which plants make their food is called:",
      "question_hi": "वह प्रक्रिया जिसके द्वारा पौधे अपना भोजन बनाते हैं, कहलाती है:",
      "options_en": ["Respiration", "Transpiration", "Photosynthesis", "Digestion"],
      "options_hi": ["श्वसन", "वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "पाचन"],
      "answer_en": "Photosynthesis",
      "answer_hi": "प्रकाश संश्लेषण",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "Which of the following metals is liquid at room temperature?",
      "question_hi": "निम्नलिखित में से कौन सी धातु कमरे के तापमान पर तरल होती है?",
      "options_en": ["Iron", "Mercury", "Gold", "Aluminum"],
      "options_hi": ["लोहा", "पारा", "सोना", "एल्युमिनियम"],
      "answer_en": "Mercury",
      "answer_hi": "पारा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "The chemical name of washing soda is:",
      "question_hi": "धोने का सोडा का रासायनिक नाम है:",
      "options_en": ["Sodium chloride", "Sodium bicarbonate", "Sodium carbonate", "Sodium hydroxide"],
      "options_hi": ["सोडियम क्लोराइड", "सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "सोडियम हाइड्रॉक्साइड"],
      "answer_en": "Sodium carbonate",
      "answer_hi": "सोडियम कार्बोनेट",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "Which of the following is not a part of neuron?",
      "question_hi": "निम्नलिखित में से कौन न्यूरॉन का भाग नहीं है?",
      "options_en": ["Dendrite", "Axon", "Nephron", "Cell body"],
      "options_hi": ["डेंड्राइट", "एक्सॉन", "नेफ्रॉन", "कोशिका काय"],
      "answer_en": "Nephron",
      "answer_hi": "नेफ्रॉन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "The pH value of pure water is:",
      "question_hi": "शुद्ध जल का pH मान होता है:",
      "options_en": ["1", "7", "10", "14"],
      "options_hi": ["1", "7", "10", "14"],
      "answer_en": "7",
      "answer_hi": "7",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "The image formed by a plane mirror is:",
      "question_hi": "समतल दर्पण द्वारा बना प्रतिबिंब होता है:",
      "options_en": ["Real and inverted", "Virtual and erect", "Real and erect", "Virtual and inverted"],
      "options_hi": ["वास्तविक और उल्टा", "आभासी और सीधा", "वास्तविक और सीधा", "आभासी और उल्टा"],
      "answer_en": "Virtual and erect",
      "answer_hi": "आभासी और सीधा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "Which of the following is not a renewable source of energy?",
      "question_hi": "निम्नलिखित में से कौन ऊर्जा का नवीकरणीय स्रोत नहीं है?",
      "options_en": ["Solar energy", "Wind energy", "Coal", "Biomass"],
      "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "बायोमास"],
      "answer_en": "Coal",
      "answer_hi": "कोयला",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "The process of depositing a layer of zinc on iron is called:",
      "question_hi": "लोहे पर जिंक की परत जमाने की प्रक्रिया को कहते हैं:",
      "options_en": ["Galvanization", "Crystallization", "Distillation", "Sedimentation"],
      "options_hi": ["जस्तीकरण", "क्रिस्टलीकरण", "आसवन", "अवसादन"],
      "answer_en": "Galvanization",
      "answer_hi": "जस्तीकरण",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_en": "Which of the following is not a function of roots?",
      "question_hi": "निम्नलिखित में से कौन सा जड़ों का कार्य नहीं है?",
      "options_en": ["Absorption of water", "Photosynthesis", "Anchoring the plant", "Storage of food"],
      "options_hi": ["जल का अवशोषण", "प्रकाश संश्लेषण", "पौधे को स्थिर करना", "भोजन का संग्रहण"],
      "answer_en": "Photosynthesis",
      "answer_hi": "प्रकाश संश्लेषण",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "The chemical reaction in which heat is absorbed is called:",
      "question_hi": "वह रासायनिक अभिक्रिया जिसमें ऊष्मा अवशोषित होती है, कहलाती है:",
      "options_en": ["Exothermic", "Endothermic", "Combustion", "Neutralization"],
      "options_hi": ["ऊष्माक्षेपी", "ऊष्माशोषी", "दहन", "उदासीनीकरण"],
      "answer_en": "Endothermic",
      "answer_hi": "ऊष्माशोषी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_en": "The device used to measure electric current is:",
      "question_hi": "विद्युत धारा मापने के लिए प्रयुक्त यंत्र है:",
      "options_en": ["Voltmeter", "Ammeter", "Galvanometer", "Ohmmeter"],
      "options_hi": ["वोल्टमीटर", "एमीटर", "गैल्वेनोमीटर", "ओममीटर"],
      "answer_en": "Ammeter",
      "answer_hi": "एमीटर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_en": "Which of the following is not a part of the female reproductive system in humans?",
      "question_hi": "निम्नलिखित में से कौन मानव में मादा प्रजनन तंत्र का भाग नहीं है?",
      "options_en": ["Ovary", "Testis", "Uterus", "Fallopian tube"],
      "options_hi": ["अंडाशय", "वृषण", "गर्भाशय", "फैलोपियन ट्यूब"],
      "answer_en": "Testis",
      "answer_hi": "वृषण",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 20,
      "question_en": "The phenomenon of change in direction of light when it passes from one medium to another is called:",
      "question_hi": "प्रकाश की दिशा में परिवर्तन की वह घटना जब यह एक माध्यम से दूसरे माध्यम में जाता है, कहलाती है:",
      "options_en": ["Reflection", "Refraction", "Dispersion", "Scattering"],
      "options_hi": ["परावर्तन", "अपवर्तन", "विक्षेपण", "प्रकीर्णन"],
      "answer_en": "Refraction",
      "answer_hi": "अपवर्तन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 21,
      "question_en": "Which of the following is not a component of blood?",
      "question_hi": "निम्नलिखित में से कौन रक्त का घटक नहीं है?",
      "options_en": ["Plasma", "Platelets", "Bone cells", "Red blood cells"],
      "options_hi": ["प्लाज्मा", "प्लेटलेट्स", "हड्डी कोशिकाएँ", "लाल रक्त कोशिकाएँ"],
      "answer_en": "Bone cells",
      "answer_hi": "हड्डी कोशिकाएँ",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 22,
      "question_en": "The chemical formula of methane is:",
      "question_hi": "मीथेन का रासायनिक सूत्र है:",
      "options_en": ["CH₄", "C₂H₆", "C₃H<0xE2><0x82><0x88>", "C₄H₁₀"],
      "options_hi": ["CH₄", "C₂H₆", "C₃H<0xE2><0x82><0x88>", "C₄H₁₀"],
      "answer_en": "CH₄",
      "answer_hi": "CH₄",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 23,
      "question_en": "Which of the following is not a metal?",
      "question_hi": "निम्नलिखित में से कौन धातु नहीं है?",
      "options_en": ["Gold", "Silver", "Carbon", "Iron"],
      "options_hi": ["सोना", "चाँदी", "कार्बन", "लोहा"],
      "answer_en": "Carbon",
      "answer_hi": "कार्बन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 24,
      "question_en": "The process of conversion of sugar into alcohol is called:",
      "question_hi": "चीनी को अल्कोहल में बदलने की प्रक्रिया को कहते हैं:",
      "options_en": ["Fermentation", "Distillation", "Evaporation", "Sublimation"],
      "options_hi": ["किण्वन", "आसवन", "वाष्पीकरण", "उर्ध्वपातन"],
      "answer_en": "Fermentation",
      "answer_hi": "किण्वन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 25,
      "question_en": "Which of the following is not a part of the excretory system?",
      "question_hi": "निम्नलिखित में से कौन उत्सर्जन तंत्र का भाग नहीं है?",
      "options_en": ["Kidney", "Ureter", "Lungs", "Esophagus"],
      "options_hi": ["वृक्क", "मूत्रवाहिनी", "फेफड़े", "ग्रासनली"],
      "answer_en": "Esophagus",
      "answer_hi": "ग्रासनली",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 26,
      "question_en": "The SI unit of electric resistance is:",
      "question_hi": "विद्युत प्रतिरोध का SI मात्रक है:",
      "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
      "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
      "answer_en": "Ohm",
      "answer_hi": "ओम",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 27,
      "question_en": "Which of the following is not a greenhouse gas?",
      "question_hi": "निम्नलिखित में से कौन ग्रीनहाउस गैस नहीं है?",
      "options_en": ["Carbon dioxide", "Nitrogen", "Methane", "Water vapor"],
      "options_hi": ["कार्बन डाइऑक्साइड", "नाइट्रोजन", "मीथेन", "जल वाष्प"],
      "answer_en": "Nitrogen",
      "answer_hi": "नाइट्रोजन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 28,
      "question_en": "The process by which plants lose water through leaves is called:",
      "question_hi": "वह प्रक्रिया जिसके द्वारा पौधे पत्तियों के माध्यम से पानी खो देते हैं, कहलाती है:",
      "options_en": ["Photosynthesis", "Transpiration", "Respiration", "Evaporation"],
      "options_hi": ["प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "श्वसन", "वाष्पीकरण"],
      "answer_en": "Transpiration",
      "answer_hi": "वाष्पोत्सर्जन",
      "attempted": false,
      "selected": ""
    },
 
    
      {
        "num": 29,
        "question_en": "Which of the following is not a noble gas?",
        "question_hi": "निम्नलिखित में से कौन अक्रिय गैस नहीं है?",
        "options_en": ["Helium", "Neon", "Hydrogen", "Argon"],
        "options_hi": ["हीलियम", "नियॉन", "हाइड्रोजन", "आर्गन"],
        "answer_en": "Hydrogen",
        "answer_hi": "हाइड्रोजन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "The chemical name of common salt is:",
        "question_hi": "साधारण नमक का रासायनिक नाम है:",
        "options_en": ["Sodium chloride", "Sodium carbonate", "Sodium bicarbonate", "Sodium hydroxide"],
        "options_hi": ["सोडियम क्लोराइड", "सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट", "सोडियम हाइड्रॉक्साइड"],
        "answer_en": "Sodium chloride",
        "answer_hi": "सोडियम क्लोराइड",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "Which of the following is not a part of the nervous system?",
        "question_hi": "निम्नलिखित में से कौन तंत्रिका तंत्र का भाग नहीं है?",
        "options_en": ["Brain", "Spinal cord", "Nerves", "Heart"],
        "options_hi": ["मस्तिष्क", "मेरुरज्जु", "तंत्रिकाएँ", "हृदय"],
        "answer_en": "Heart",
        "answer_hi": "हृदय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "The pH value of acidic solutions is:",
        "question_hi": "अम्लीय विलयनों का pH मान होता है:",
        "options_en": ["Less than 7", "Equal to 7", "Greater than 7", "Equal to 14"],
        "options_hi": ["7 से कम", "7 के बराबर", "7 से अधिक", "14 के बराबर"],
        "answer_en": "Less than 7",
        "answer_hi": "7 से कम",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "The image formed by a convex lens when the object is placed at focus is:",
        "question_hi": "उत्तल लेंस द्वारा बना प्रतिबिंब जब वस्तु को फोकस पर रखा जाता है:",
        "options_en": ["Real and inverted", "Virtual and erect", "Highly enlarged", "At infinity"],
        "options_hi": ["वास्तविक और उल्टा", "आभासी और सीधा", "अत्यधिक आवर्धित", "अनंत पर"],
        "answer_en": "At infinity",
        "answer_hi": "अनंत पर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "Which of the following is a renewable source of energy?",
        "question_hi": "निम्नलिखित में से कौन ऊर्जा का नवीकरणीय स्रोत है?",
        "options_en": ["Coal", "Petroleum", "Natural gas", "Solar energy"],
        "options_hi": ["कोयला", "पेट्रोलियम", "प्राकृतिक गैस", "सौर ऊर्जा"],
        "answer_en": "Solar energy",
        "answer_hi": "सौर ऊर्जा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "The process of conversion of vapor into liquid is called:",
        "question_hi": "वाष्प को द्रव में बदलने की प्रक्रिया को कहते हैं:",
        "options_en": ["Evaporation", "Condensation", "Sublimation", "Freezing"],
        "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "हिमीकरण"],
        "answer_en": "Condensation",
        "answer_hi": "संघनन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "Which of the following is not a function of leaves?",
        "question_hi": "निम्नलिखित में से कौन सा पत्तियों का कार्य नहीं है?",
        "options_en": ["Photosynthesis", "Transpiration", "Storage of food", "Absorption of water"],
        "options_hi": ["प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "भोजन का संग्रहण", "जल का अवशोषण"],
        "answer_en": "Absorption of water",
        "answer_hi": "जल का अवशोषण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "The chemical reaction in which heat is released is called:",
        "question_hi": "वह रासायनिक अभिक्रिया जिसमें ऊष्मा मुक्त होती है, कहलाती है:",
        "options_en": ["Endothermic", "Exothermic", "Combustion", "Neutralization"],
        "options_hi": ["ऊष्माशोषी", "ऊष्माक्षेपी", "दहन", "उदासीनीकरण"],
        "answer_en": "Exothermic",
        "answer_hi": "ऊष्माक्षेपी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "The device used to measure potential difference is:",
        "question_hi": "विभवांतर मापने के लिए प्रयुक्त यंत्र है:",
        "options_en": ["Ammeter", "Voltmeter", "Galvanometer", "Ohmmeter"],
        "options_hi": ["एमीटर", "वोल्टमीटर", "गैल्वेनोमीटर", "ओममीटर"],
        "answer_en": "Voltmeter",
        "answer_hi": "वोल्टमीटर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "Which of the following is not a part of the male reproductive system in humans?",
        "question_hi": "निम्नलिखित में से कौन मानव में नर प्रजनन तंत्र का भाग नहीं है?",
        "options_en": ["Testis", "Ovary", "Vas deferens", "Prostate gland"],
        "options_hi": ["वृषण", "अंडाशय", "वास डिफेरेंस", "प्रोस्टेट ग्रंथि"],
        "answer_en": "Ovary",
        "answer_hi": "अंडाशय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "The phenomenon of bouncing back of light when it strikes a smooth surface is called:",
        "question_hi": "प्रकाश के वापस लौटने की वह घटना जब यह एक चिकनी सतह से टकराता है, कहलाती है:",
        "options_en": ["Refraction", "Reflection", "Dispersion", "Scattering"],
        "options_hi": ["अपवर्तन", "परावर्तन", "विक्षेपण", "प्रकीर्णन"],
        "answer_en": "Reflection",
        "answer_hi": "परावर्तन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "Which of the following is not a component of urine?",
        "question_hi": "निम्नलिखित में से कौन मूत्र का घटक नहीं है?",
        "options_en": ["Water", "Urea", "Glucose", "Salts"],
        "options_hi": ["जल", "यूरिया", "ग्लूकोज", "लवण"],
        "answer_en": "Glucose",
        "answer_hi": "ग्लूकोज",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "The chemical formula of carbon dioxide is:",
        "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["CO", "CO₂", "C₂O", "C₂O₃"],
        "options_hi": ["CO", "CO₂", "C₂O", "C₂O₃"],
        "answer_en": "CO₂",
        "answer_hi": "CO₂",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "Which of the following is a non-metal?",
        "question_hi": "निम्नलिखित में से कौन अधातु है?",
        "options_en": ["Iron", "Copper", "Sulfur", "Aluminum"],
        "options_hi": ["लोहा", "तांबा", "सल्फर", "एल्युमिनियम"],
        "answer_en": "Sulfur",
        "answer_hi": "सल्फर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "The process of conversion of liquid into vapor is called:",
        "question_hi": "द्रव को वाष्प में बदलने की प्रक्रिया को कहते हैं:",
        "options_en": ["Condensation", "Evaporation", "Sublimation", "Freezing"],
        "options_hi": ["संघनन", "वाष्पीकरण", "उर्ध्वपातन", "हिमीकरण"],
        "answer_en": "Evaporation",
        "answer_hi": "वाष्पीकरण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Which of the following is not a part of the respiratory system?",
        "question_hi": "निम्नलिखित में से कौन श्वसन तंत्र का भाग नहीं है?",
        "options_en": ["Nose", "Trachea", "Lungs", "Esophagus"],
        "options_hi": ["नाक", "श्वासनली", "फेफड़े", "ग्रासनली"],
        "answer_en": "Esophagus",
        "answer_hi": "ग्रासनली",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "The SI unit of electric power is:",
        "question_hi": "विद्युत शक्ति का SI मात्रक है:",
        "options_en": ["Volt", "Ampere", "Watt", "Ohm"],
        "options_hi": ["वोल्ट", "एम्पियर", "वाट", "ओम"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Which of the following is a greenhouse gas?",
        "question_hi": "निम्नलिखित में से कौन ग्रीनहाउस गैस है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "The process by which green plants prepare their food is called:",
        "question_hi": "वह प्रक्रिया जिसके द्वारा हरे पौधे अपना भोजन तैयार करते हैं, कहलाती है:",
        "options_en": ["Respiration", "Transpiration", "Photosynthesis", "Digestion"],
        "options_hi": ["श्वसन", "वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "पाचन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "Which of the following is a noble gas?",
        "question_hi": "निम्नलिखित में से कौन अक्रिय गैस है?",
        "options_en": ["Hydrogen", "Oxygen", "Helium", "Nitrogen"],
        "options_hi": ["हाइड्रोजन", "ऑक्सीजन", "हीलियम", "नाइट्रोजन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "The chemical name of lime water is:",
        "question_hi": "चूने के पानी का रासायनिक नाम है:",
        "options_en": ["Calcium oxide", "Calcium hydroxide", "Calcium carbonate", "Calcium chloride"],
        "options_hi": ["कैल्शियम ऑक्साइड", "कैल्शियम हाइड्रॉक्साइड", "कैल्शियम कार्बोनेट", "कैल्शियम क्लोराइड"],
        "answer_en": "Calcium hydroxide",
        "answer_hi": "कैल्शियम हाइड्रॉक्साइड",
        "attempted": false,
        "selected": ""
      }
    





];
    

// Add more questions as needed...

let currentQuestion = 0;
let language = "en"; // Default English
const circlesPerPage = 70;
let currentCirclePage = 0;
let timeLeft = 300;
let timerInterval;

function loadQuestion(index) {
    const questionText = language === "en" ? questions[index].question_en : questions[index].question_hi;
    const optionsArray = language === "en" ? questions[index].options_en : questions[index].options_hi;

    document.getElementById("question").textContent = `${questions[index].num}. ${questionText}`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    optionsArray.forEach(option => {
        optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
    });

    updateCircles();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateCircles();
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

function updateCircles() {
    const circleContainer = document.getElementById("circleContainer");
    circleContainer.innerHTML = "";
    const start = currentCirclePage * circlesPerPage;
    const end = Math.min(start + circlesPerPage, questions.length);

    for (let i = start; i < end; i++) {
        const q = questions[i];
        let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
        circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
    }
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

function prevCirclePage() {
    if (currentCirclePage > 0) {
        currentCirclePage--;
        updateCircles();
    }
}

function nextCirclePage() {
    if ((currentCirclePage + 1) * circlesPerPage < questions.length) {
        currentCirclePage++;
        updateCircles();
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
  let confirmation = confirm("Are you sure you want to submit the test?");
  if (!confirmation) return;

  let attempted = 0, notAttempted = 0, score = 0;
  const results = [];

  questions.forEach(q => {
      const correctAnswer = language === "en" ? q.answer_en : q.answer_hi;
      if (q.attempted) {
          attempted++;
          if (q.selected === correctAnswer) score++;
      } else {
          notAttempted++;
      }
      results.push({ 
          question: language === "en" ? q.question_en : q.question_hi,
          selected: q.selected || "Not Answered", 
          correct: correctAnswer 
      });
  });

  localStorage.setItem("attempted", attempted);
  localStorage.setItem("notAttempted", notAttempted);
  localStorage.setItem("score", score);
  localStorage.setItem("results", JSON.stringify(results));

  let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
  if (viewResult) {
      window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
  }
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Submitting the quiz automatically.");
            submitQuiz();
        } else {
            timerElement.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
}

window.onload = function () {
    startTimer();
    loadQuestion(currentQuestion);
};