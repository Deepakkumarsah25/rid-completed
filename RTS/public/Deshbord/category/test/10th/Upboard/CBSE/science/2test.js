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
      "question_en": "The chemical formula of Baking Soda is:",
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
      "question_en": "The SI unit of electric current is:",
      "question_hi": "विद्युत धारा का SI मात्रक है:",
      "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
      "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
      "answer_en": "Ampere",
      "answer_hi": "एम्पियर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "Which gland secretes insulin hormone?",
      "question_hi": "इंसुलिन हार्मोन कौन-सी ग्रंथि स्रावित करती है?",
      "options_en": ["Thyroid", "Pituitary", "Pancreas", "Adrenal"],
      "options_hi": ["थायरॉइड", "पिट्यूटरी", "अग्न्याशय", "अधिवृक्क"],
      "answer_en": "Pancreas",
      "answer_hi": "अग्न्याशय",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "The process by which plants lose water vapor is called:",
      "question_hi": "पौधों द्वारा जल वाष्प छोड़ने की प्रक्रिया कहलाती है:",
      "options_en": ["Photosynthesis", "Transpiration", "Respiration", "Evaporation"],
      "options_hi": ["प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "श्वसन", "वाष्पीकरण"],
      "answer_en": "Transpiration",
      "answer_hi": "वाष्पोत्सर्जन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "Which metal is present in chlorophyll?",
      "question_hi": "क्लोरोफिल में कौन-सी धातु उपस्थित होती है?",
      "options_en": ["Iron", "Magnesium", "Calcium", "Zinc"],
      "options_hi": ["लोहा", "मैग्नीशियम", "कैल्शियम", "जिंक"],
      "answer_en": "Magnesium",
      "answer_hi": "मैग्नीशियम",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
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
      "num": 8,
      "question_en": "Acid rain is caused due to increased levels of:",
      "question_hi": "अम्ल वर्षा किसके बढ़े हुए स्तर के कारण होती है?",
      "options_en": ["CO₂ and O₂", "SO₂ and NO₂", "H₂ and He", "N₂ and Ar"],
      "options_hi": ["CO₂ और O₂", "SO₂ और NO₂", "H₂ और He", "N₂ और Ar"],
      "answer_en": "SO₂ and NO₂",
      "answer_hi": "SO₂ और NO₂",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "The functional unit of kidney is:",
      "question_hi": "वृक्क की क्रियात्मक इकाई है:",
      "options_en": ["Neuron", "Nephron", "Alveoli", "Bronchiole"],
      "options_hi": ["न्यूरॉन", "नेफ्रॉन", "वायुकोश", "श्वसनिका"],
      "answer_en": "Nephron",
      "answer_hi": "नेफ्रॉन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "Which of the following is a greenhouse gas?",
      "question_hi": "निम्नलिखित में से कौन एक ग्रीनहाउस गैस है?",
      "options_en": ["Oxygen", "Nitrogen", "Methane", "Hydrogen"],
      "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "मीथेन", "हाइड्रोजन"],
      "answer_en": "Methane",
      "answer_hi": "मीथेन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 11,
      "question_en": "The chemical reaction in which heat is absorbed is called:",
      "question_hi": "वह रासायनिक अभिक्रिया जिसमें ऊष्मा अवशोषित होती है, कहलाती है:",
      "options_en": ["Exothermic", "Endothermic", "Combustion", "Neutralization"],
      "options_hi": ["उष्माक्षेपी", "उष्माशोषी", "दहन", "उदासीनीकरण"],
      "answer_en": "Endothermic",
      "answer_hi": "उष्माशोषी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 12,
      "question_en": "The device used to measure electric potential difference is:",
      "question_hi": "विद्युत विभवांतर मापने के लिए प्रयुक्त यंत्र है:",
      "options_en": ["Ammeter", "Voltmeter", "Galvanometer", "Barometer"],
      "options_hi": ["एमीटर", "वोल्टमीटर", "गैल्वेनोमीटर", "बैरोमीटर"],
      "answer_en": "Voltmeter",
      "answer_hi": "वोल्टमीटर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 13,
      "question_en": "The process of conversion of sugar into alcohol is called:",
      "question_hi": "शर्करा को अल्कोहल में परिवर्तित करने की प्रक्रिया कहलाती है:",
      "options_en": ["Nitrogen fixation", "Fermentation", "Photosynthesis", "Respiration"],
      "options_hi": ["नाइट्रोजन स्थिरीकरण", "किण्वन", "प्रकाश संश्लेषण", "श्वसन"],
      "answer_en": "Fermentation",
      "answer_hi": "किण्वन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 14,
      "question_en": "Which of the following is not a renewable source of energy?",
      "question_hi": "निम्नलिखित में से कौन ऊर्जा का नवीकरणीय स्रोत नहीं है?",
      "options_en": ["Solar energy", "Wind energy", "Coal", "Biogas"],
      "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "बायोगैस"],
      "answer_en": "Coal",
      "answer_hi": "कोयला",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 15,
      "question_en": "The gas evolved during photosynthesis is:",
      "question_hi": "प्रकाश संश्लेषण के दौरान निकलने वाली गैस है:",
      "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
      "answer_en": "Oxygen",
      "answer_hi": "ऑक्सीजन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 16,
      "question_en": "The pH of a neutral solution is:",
      "question_hi": "एक उदासीन विलयन का pH मान होता है:",
      "options_en": ["0", "7", "10", "14"],
      "options_hi": ["0", "7", "10", "14"],
      "answer_en": "7",
      "answer_hi": "7",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 17,
      "question_en": "The phenomenon of light bending when it passes from one medium to another is called:",
      "question_hi": "प्रकाश का एक माध्यम से दूसरे माध्यम में जाने पर मुड़ने की घटना कहलाती है:",
      "options_en": ["Reflection", "Refraction", "Dispersion", "Scattering"],
      "options_hi": ["परावर्तन", "अपवर्तन", "विक्षेपण", "प्रकीर्णन"],
      "answer_en": "Refraction",
      "answer_hi": "अपवर्तन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 18,
      "question_en": "Which part of the brain controls voluntary actions?",
      "question_hi": "मस्तिष्क का कौन-सा भाग ऐच्छिक क्रियाओं को नियंत्रित करता है?",
      "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
      "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला", "हाइपोथैलेमस"],
      "answer_en": "Cerebrum",
      "answer_hi": "सेरेब्रम",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 19,
      "question_en": "The chemical name of plaster of Paris is:",
      "question_hi": "प्लास्टर ऑफ पेरिस का रासायनिक नाम है:",
      "options_en": ["Calcium sulphate hemihydrate", "Calcium carbonate", "Calcium hydroxide", "Calcium oxide"],
      "options_hi": ["कैल्शियम सल्फेट हेमीहाइड्रेट", "कैल्शियम कार्बोनेट", "कैल्शियम हाइड्रॉक्साइड", "कैल्शियम ऑक्साइड"],
      "answer_en": "Calcium sulphate hemihydrate",
      "answer_hi": "कैल्शियम सल्फेट हेमीहाइड्रेट",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 20,
      "question_en": "The resistance of a conductor depends on:",
      "question_hi": "किसी चालक का प्रतिरोध निर्भर करता है:",
      "options_en": ["Length only", "Area only", "Material only", "All of these"],
      "options_hi": ["केवल लंबाई पर", "केवल क्षेत्रफल पर", "केवल पदार्थ पर", "इन सभी पर"],
      "answer_en": "All of these",
      "answer_hi": "इन सभी पर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 21,
      "question_en": "The process of depositing a layer of zinc on iron is called:",
      "question_hi": "लोहे पर जिंक की परत जमाने की प्रक्रिया कहलाती है:",
      "options_en": ["Galvanization", "Crystallization", "Distillation", "Reduction"],
      "options_hi": ["जस्तीकरण", "क्रिस्टलीकरण", "आसवन", "अपचयन"],
      "answer_en": "Galvanization",
      "answer_hi": "जस्तीकरण",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 22,
      "question_en": "Which of the following is not a part of the female reproductive system?",
      "question_hi": "निम्नलिखित में से कौन मादा प्रजनन तंत्र का भाग नहीं है?",
      "options_en": ["Ovary", "Testis", "Uterus", "Fallopian tube"],
      "options_hi": ["अंडाशय", "वृषण", "गर्भाशय", "अंडवाहिनी नली"],
      "answer_en": "Testis",
      "answer_hi": "वृषण",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 23,
      "question_en": "The phenomenon due to which the Sun appears red during sunrise and sunset is:",
      "question_hi": "वह घटना जिसके कारण सूर्योदय और सूर्यास्त के समय सूर्य लाल दिखाई देता है:",
      "options_en": ["Dispersion", "Scattering", "Reflection", "Refraction"],
      "options_hi": ["विक्षेपण", "प्रकीर्णन", "परावर्तन", "अपवर्तन"],
      "answer_en": "Scattering",
      "answer_hi": "प्रकीर्णन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 24,
      "question_en": "The chemical used in whitewashing is:",
      "question_hi": "सफेदी करने में प्रयुक्त रसायन है:",
      "options_en": ["Calcium oxide", "Calcium hydroxide", "Calcium carbonate", "Calcium chloride"],
      "options_hi": ["कैल्शियम ऑक्साइड", "कैल्शियम हाइड्रॉक्साइड", "कैल्शियम कार्बोनेट", "कैल्शियम क्लोराइड"],
      "answer_en": "Calcium hydroxide",
      "answer_hi": "कैल्शियम हाइड्रॉक्साइड",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 25,
      "question_en": "The device that converts mechanical energy into electrical energy is called:",
      "question_hi": "वह युक्ति जो यांत्रिक ऊर्जा को विद्युत ऊर्जा में परिवर्तित करती है, कहलाती है:",
      "options_en": ["Electric motor", "Generator", "Galvanometer", "Ammeter"],
      "options_hi": ["विद्युत मोटर", "जनरेटर", "गैल्वेनोमीटर", "एमीटर"],
      "answer_en": "Generator",
      "answer_hi": "जनरेटर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 26,
      "question_en": "The process of removing salt from seawater is called:",
      "question_hi": "समुद्री जल से नमक हटाने की प्रक्रिया कहलाती है:",
      "options_en": ["Filtration", "Distillation", "Sedimentation", "Decantation"],
      "options_hi": ["निस्पंदन", "आसवन", "अवसादन", "निस्तारण"],
      "answer_en": "Distillation",
      "answer_hi": "आसवन",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 27,
      "question_en": "Which of the following is not a fossil fuel?",
      "question_hi": "निम्नलिखित में से कौन जीवाश्म ईंधन नहीं है?",
      "options_en": ["Coal", "Petroleum", "Natural gas", "Biogas"],
      "options_hi": ["कोयला", "पेट्रोलियम", "प्राकृतिक गैस", "बायोगैस"],
      "answer_en": "Biogas",
      "answer_hi": "बायोगैस",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 28,
      "question_en": "The phenomenon of splitting of white light into its constituent colors is called:",
      "question_hi": "सफेद प्रकाश के अपने घटक रंगों में विभक्त होने की घटना कहलाती है:",
      "options_en": ["Reflection", "Refraction", "Dispersion", "Scattering"],
      "options_hi": ["परावर्तन", "अपवर्तन", "विक्षेपण", "प्रकीर्णन"],
      "answer_en": "Dispersion",
      "answer_hi": "विक्षेपण",
      "attempted": false,
      "selected": ""
    },
   
    
      {
        "num": 29,
        "question_en": "The process by which solid changes directly into gas is called:",
        "question_hi": "वह प्रक्रिया जिसमें ठोस सीधे गैस में परिवर्तित हो जाता है, कहलाती है:",
        "options_en": ["Evaporation", "Sublimation", "Condensation", "Melting"],
        "options_hi": ["वाष्पीकरण", "उर्ध्वपातन", "संघनन", "पिघलना"],
        "answer_en": "Sublimation",
        "answer_hi": "उर्ध्वपातन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "Which of the following is not a part of the neuron?",
        "question_hi": "निम्नलिखित में से कौन न्यूरॉन का भाग नहीं है?",
        "options_en": ["Dendrite", "Axon", "Nephron", "Cell body"],
        "options_hi": ["डेंड्राइट", "एक्सॉन", "नेफ्रॉन", "कोशिका काय"],
        "answer_en": "Nephron",
        "answer_hi": "नेफ्रॉन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "The chemical formula of washing soda is:",
        "question_hi": "धोने का सोडा का रासायनिक सूत्र है:",
        "options_en": ["NaHCO₃", "Na₂CO₃.10H₂O", "NaOH", "NaCl"],
        "options_hi": ["NaHCO₃", "Na₂CO₃.10H₂O", "NaOH", "NaCl"],
        "answer_en": "Na₂CO₃.10H₂O",
        "answer_hi": "Na₂CO₃.10H₂O",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "The SI unit of power is:",
        "question_hi": "शक्ति का SI मात्रक है:",
        "options_en": ["Joule", "Watt", "Newton", "Pascal"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "Which of the following is not a greenhouse gas?",
        "question_hi": "निम्नलिखित में से कौन ग्रीनहाउस गैस नहीं है?",
        "options_en": ["Carbon dioxide", "Methane", "Oxygen", "Chlorofluorocarbon"],
        "options_hi": ["कार्बन डाइऑक्साइड", "मीथेन", "ऑक्सीजन", "क्लोरोफ्लोरोकार्बन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "The process of fusion of male and female gametes is called:",
        "question_hi": "नर और मादा युग्मकों के संलयन की प्रक्रिया कहलाती है:",
        "options_en": ["Fertilization", "Pollination", "Germination", "Reproduction"],
        "options_hi": ["निषेचन", "परागण", "अंकुरण", "प्रजनन"],
        "answer_en": "Fertilization",
        "answer_hi": "निषेचन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "The phenomenon of current induced by changing magnetic field is called:",
        "question_hi": "चुंबकीय क्षेत्र में परिवर्तन से उत्पन्न धारा की घटना कहलाती है:",
        "options_en": ["Electromagnetic induction", "Magnetic effect", "Heating effect", "Chemical effect"],
        "options_hi": ["विद्युत चुंबकीय प्रेरण", "चुंबकीय प्रभाव", "तापीय प्रभाव", "रासायनिक प्रभाव"],
        "answer_en": "Electromagnetic induction",
        "answer_hi": "विद्युत चुंबकीय प्रेरण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "The acid present in vinegar is:",
        "question_hi": "सिरका में उपस्थित अम्ल है:",
        "options_en": ["Acetic acid", "Citric acid", "Lactic acid", "Hydrochloric acid"],
        "options_hi": ["एसिटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "The part of the eye that controls the amount of light entering is:",
        "question_hi": "नेत्र का वह भाग जो प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है:",
        "options_en": ["Cornea", "Iris", "Retina", "Lens"],
        "options_hi": ["कॉर्निया", "आइरिस", "रेटिना", "लेंस"],
        "answer_en": "Iris",
        "answer_hi": "आइरिस",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "The process of conversion of vapor into liquid is called:",
        "question_hi": "वाष्प का द्रव में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Evaporation", "Condensation", "Sublimation", "Freezing"],
        "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "हिमीकरण"],
        "answer_en": "Condensation",
        "answer_hi": "संघनन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "Which of the following is not a metal?",
        "question_hi": "निम्नलिखित में से कौन धातु नहीं है?",
        "options_en": ["Sodium", "Mercury", "Carbon", "Iron"],
        "options_hi": ["सोडियम", "पारा", "कार्बन", "लोहा"],
        "answer_en": "Carbon",
        "answer_hi": "कार्बन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "The phenomenon of persistence of hearing in humans is:",
        "question_hi": "मनुष्यों में श्रवण की उत्तरजीविता की घटना है:",
        "options_en": ["0.05 second", "0.1 second", "0.5 second", "1 second"],
        "options_hi": ["0.05 सेकंड", "0.1 सेकंड", "0.5 सेकंड", "1 सेकंड"],
        "answer_en": "0.1 second",
        "answer_hi": "0.1 सेकंड",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "The chemical name of common salt is:",
        "question_hi": "सामान्य नमक का रासायनिक नाम है:",
        "options_en": ["Sodium chloride", "Sodium carbonate", "Sodium hydroxide", "Sodium bicarbonate"],
        "options_hi": ["सोडियम क्लोराइड", "सोडियम कार्बोनेट", "सोडियम हाइड्रॉक्साइड", "सोडियम बाइकार्बोनेट"],
        "answer_en": "Sodium chloride",
        "answer_hi": "सोडियम क्लोराइड",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "The device used to measure atmospheric pressure is:",
        "question_hi": "वायुमंडलीय दाब मापने के लिए प्रयुक्त यंत्र है:",
        "options_en": ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
        "options_hi": ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
        "answer_en": "Barometer",
        "answer_hi": "बैरोमीटर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "Which of the following is not a part of the male reproductive system?",
        "question_hi": "निम्नलिखित में से कौन नर प्रजनन तंत्र का भाग नहीं है?",
        "options_en": ["Testis", "Ovary", "Vas deferens", "Prostate gland"],
        "options_hi": ["वृषण", "अंडाशय", "शुक्रवाहिनी", "प्रोस्टेट ग्रंथि"],
        "answer_en": "Ovary",
        "answer_hi": "अंडाशय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "The phenomenon of bouncing back of light when it strikes a smooth surface is called:",
        "question_hi": "प्रकाश का चिकनी सतह से टकराकर वापस लौटने की घटना कहलाती है:",
        "options_en": ["Refraction", "Reflection", "Dispersion", "Scattering"],
        "options_hi": ["अपवर्तन", "परावर्तन", "विक्षेपण", "प्रकीर्णन"],
        "answer_en": "Reflection",
        "answer_hi": "परावर्तन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "The chemical used as an antiseptic in cuts and wounds is:",
        "question_hi": "कटे और घावों में एंटीसेप्टिक के रूप में प्रयुक्त रसायन है:",
        "options_en": ["Iodine", "Bromine", "Chlorine", "Fluorine"],
        "options_hi": ["आयोडीन", "ब्रोमीन", "क्लोरीन", "फ्लोरीन"],
        "answer_en": "Iodine",
        "answer_hi": "आयोडीन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "The process by which plants prepare their food is called:",
        "question_hi": "वह प्रक्रिया जिसके द्वारा पौधे अपना भोजन तैयार करते हैं, कहलाती है:",
        "options_en": ["Respiration", "Transpiration", "Photosynthesis", "Fermentation"],
        "options_hi": ["श्वसन", "वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "किण्वन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Which of the following is not a component of blood?",
        "question_hi": "निम्नलिखित में से कौन रक्त का घटक नहीं है?",
        "options_en": ["Plasma", "Platelets", "Neurons", "White blood cells"],
        "options_hi": ["प्लाज्मा", "प्लेटलेट्स", "न्यूरॉन्स", "श्वेत रक्त कोशिकाएँ"],
        "answer_en": "Neurons",
        "answer_hi": "न्यूरॉन्स",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "The phenomenon of change in direction of light when it passes from one medium to another is called:",
        "question_hi": "प्रकाश की दिशा में परिवर्तन की घटना जब वह एक माध्यम से दूसरे माध्यम में जाता है, कहलाती है:",
        "options_en": ["Reflection", "Refraction", "Dispersion", "Scattering"],
        "options_hi": ["परावर्तन", "अपवर्तन", "विक्षेपण", "प्रकीर्णन"],
        "answer_en": "Refraction",
        "answer_hi": "अपवर्तन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
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
        "num": 50,
        "question_en": "The part of the plant that conducts water and minerals from roots to leaves is:",
        "question_hi": "पौधे का वह भाग जो जड़ों से पत्तियों तक जल और खनिज संवहन करता है:",
        "options_en": ["Phloem", "Xylem", "Cambium", "Epidermis"],
        "options_hi": ["फ्लोएम", "जाइलम", "कैम्बियम", "एपिडर्मिस"],
        "answer_en": "Xylem",
        "answer_hi": "जाइलम",
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