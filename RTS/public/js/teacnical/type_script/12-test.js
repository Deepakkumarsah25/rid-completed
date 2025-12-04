const questions = [
    {
        "num": 1,
        "question_en": "The process by which plants lose water through their leaves is called:",
        "question_hi": "वह प्रक्रिया जिसके द्वारा पौधे अपने पत्तों के माध्यम से पानी खो देते हैं, कहलाती है:",
        "options_en": ["Transpiration", "Evaporation", "Condensation", "Respiration"],
        "options_hi": ["वाष्पोत्सर्जन", "वाष्पीकरण", "संघनन", "श्वसन"],
        "answer_en": "Transpiration",
        "answer_hi": "वाष्पोत्सर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which gas is primarily responsible for the greenhouse effect?",
        "question_hi": "ग्रीनहाउस प्रभाव के लिए मुख्य रूप से कौन सी गैस जिम्मेदार है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The smallest unit of life is:",
        "question_hi": "जीवन की सबसे छोटी इकाई है:",
        "options_en": ["Atom", "Cell", "Molecule", "Tissue"],
        "options_hi": ["परमाणु", "कोशिका", "अणु", "ऊतक"],
        "answer_en": "Cell",
        "answer_hi": "कोशिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which planet is known as the Red Planet?",
        "question_hi": "किस ग्रह को लाल ग्रह के नाम से जाना जाता है?",
        "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
        "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The chemical symbol for gold is:",
        "question_hi": "सोने का रासायनिक प्रतीक है:",
        "options_en": ["Go", "Gd", "Au", "Ag"],
        "options_hi": ["Go", "Gd", "Au", "Ag"],
        "answer_en": "Au",
        "answer_hi": "Au",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the main component of the Sun?",
        "question_hi": "सूर्य का मुख्य घटक क्या है?",
        "options_en": ["Helium", "Hydrogen", "Oxygen", "Carbon"],
        "options_hi": ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "कार्बन"],
        "answer_en": "Hydrogen",
        "answer_hi": "हाइड्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The process of converting sugar into alcohol is called:",
        "question_hi": "चीनी को अल्कोहल में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Fermentation", "Distillation", "Evaporation", "Oxidation"],
        "options_hi": ["किण्वन", "आसवन", "वाष्पीकरण", "ऑक्सीकरण"],
        "answer_en": "Fermentation",
        "answer_hi": "किण्वन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which organ in the human body produces insulin?",
        "question_hi": "मानव शरीर में कौन सा अंग इंसुलिन उत्पन्न करता है?",
        "options_en": ["Liver", "Pancreas", "Kidney", "Stomach"],
        "options_hi": ["यकृत", "अग्न्याशय", "वृक्क", "आमाशय"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The speed of light in vacuum is approximately:",
        "question_hi": "निर्वात में प्रकाश की गति लगभग है:",
        "options_en": ["3×10⁶ m/s", "3×10⁸ m/s", "3×10¹⁰ m/s", "3×10¹² m/s"],
        "options_hi": ["3×10⁶ m/s", "3×10⁸ m/s", "3×10¹⁰ m/s", "3×10¹² m/s"],
        "answer_en": "3×10⁸ m/s",
        "answer_hi": "3×10⁸ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which element has the atomic number 1?",
        "question_hi": "किस तत्व की परमाणु संख्या 1 है?",
        "options_en": ["Helium", "Hydrogen", "Oxygen", "Carbon"],
        "options_hi": ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "कार्बन"],
        "answer_en": "Hydrogen",
        "answer_hi": "हाइड्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "The process of water turning into vapor is called:",
        "question_hi": "पानी के वाष्प में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Condensation", "Evaporation", "Sublimation", "Precipitation"],
        "options_hi": ["संघनन", "वाष्पीकरण", "उर्ध्वपातन", "वर्षण"],
        "answer_en": "Evaporation",
        "answer_hi": "वाष्पीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which blood cells are responsible for carrying oxygen?",
        "question_hi": "कौन सी रक्त कोशिकाएं ऑक्सीजन ले जाने के लिए जिम्मेदार हैं?",
        "options_en": ["White blood cells", "Red blood cells", "Platelets", "Plasma"],
        "options_hi": ["श्वेत रक्त कोशिकाएं", "लाल रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
        "answer_en": "Red blood cells",
        "answer_hi": "लाल रक्त कोशिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The SI unit of electric current is:",
        "question_hi": "विद्युत धारा की SI इकाई है:",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which gas do plants absorb during photosynthesis?",
        "question_hi": "पौधे प्रकाश संश्लेषण के दौरान कौन सी गैस अवशोषित करते हैं?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The hardest natural substance on Earth is:",
        "question_hi": "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ है:",
        "options_en": ["Iron", "Diamond", "Gold", "Platinum"],
        "options_hi": ["लोहा", "हीरा", "सोना", "प्लैटिनम"],
        "answer_en": "Diamond",
        "answer_hi": "हीरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which part of the plant conducts photosynthesis?",
        "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
        "answer_en": "Leaf",
        "answer_hi": "पत्ती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The chemical formula of table salt is:",
        "question_hi": "साधारण नमक का रासायनिक सूत्र है:",
        "options_en": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "options_hi": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which planet is closest to the Sun?",
        "question_hi": "सूर्य के सबसे निकट कौन सा ग्रह है?",
        "options_en": ["Venus", "Earth", "Mercury", "Mars"],
        "options_hi": ["शुक्र", "पृथ्वी", "बुध", "मंगल"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The process of cell division that results in two identical cells is called:",
        "question_hi": "कोशिका विभाजन की वह प्रक्रिया जिसके परिणामस्वरूप दो समान कोशिकाएं होती हैं, कहलाती है:",
        "options_en": ["Meiosis", "Mitosis", "Binary fission", "Budding"],
        "options_hi": ["अर्धसूत्रीविभाजन", "समसूत्रीविभाजन", "द्विखंडन", "मुकुलन"],
        "answer_en": "Mitosis",
        "answer_hi": "समसूत्रीविभाजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which gas is used in balloons to make them float?",
        "question_hi": "गुब्बारों को तैरने के लिए किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
        "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "हीलियम", "नाइट्रोजन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "The largest planet in our solar system is:",
        "question_hi": "हमारे सौर मंडल का सबसे बड़ा ग्रह है:",
        "options_en": ["Earth", "Jupiter", "Saturn", "Neptune"],
        "options_hi": ["पृथ्वी", "बृहस्पति", "शनि", "वरुण"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which vitamin is produced when the human body is exposed to sunlight?",
        "question_hi": "मानव शरीर जब सूर्य के प्रकाश के संपर्क में आता है तो कौन सा विटामिन उत्पन्न होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The process of converting a solid directly into a gas is called:",
        "question_hi": "ठोस को सीधे गैस में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Evaporation", "Condensation", "Sublimation", "Melting"],
        "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "गलन"],
        "answer_en": "Sublimation",
        "answer_hi": "उर्ध्वपातन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which organ is responsible for pumping blood throughout the body?",
        "question_hi": "कौन सा अंग पूरे शरीर में रक्त पंप करने के लिए जिम्मेदार है?",
        "options_en": ["Lungs", "Heart", "Liver", "Kidneys"],
        "options_hi": ["फेफड़े", "हृदय", "यकृत", "वृक्क"],
        "answer_en": "Heart",
        "answer_hi": "हृदय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The chemical symbol for iron is:",
        "question_hi": "लोहे का रासायनिक प्रतीक है:",
        "options_en": ["Ir", "Fe", "In", "Io"],
        "options_hi": ["Ir", "Fe", "In", "Io"],
        "answer_en": "Fe",
        "answer_hi": "Fe",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which layer of the Earth's atmosphere contains the ozone layer?",
        "question_hi": "पृथ्वी के वायुमंडल की कौन सी परत में ओजोन परत होती है?",
        "options_en": ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
        "options_hi": ["क्षोभमंडल", "समतापमंडल", "मध्यमंडल", "तापमंडल"],
        "answer_en": "Stratosphere",
        "answer_hi": "समतापमंडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The process of converting light energy into chemical energy in plants is called:",
        "question_hi": "पौधों में प्रकाश ऊर्जा को रासायनिक ऊर्जा में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
        "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "पाचन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which gas is essential for combustion?",
        "question_hi": "दहन के लिए कौन सी गैस आवश्यक है?",
        "options_en": ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The smallest bone in the human body is located in the:",
        "question_hi": "मानव शरीर की सबसे छोटी हड्डी स्थित है:",
        "options_en": ["Hand", "Foot", "Ear", "Nose"],
        "options_hi": ["हाथ", "पैर", "कान", "नाक"],
        "answer_en": "Ear",
        "answer_hi": "कान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which metal is liquid at room temperature?",
        "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
        "options_en": ["Iron", "Mercury", "Copper", "Aluminum"],
        "options_hi": ["लोहा", "पारा", "तांबा", "एल्युमिनियम"],
        "answer_en": "Mercury",
        "answer_hi": "पारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "The process of converting food into energy in cells is called:",
        "question_hi": "कोशिकाओं में भोजन को ऊर्जा में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Digestion", "Respiration", "Photosynthesis", "Transpiration"],
        "options_hi": ["पाचन", "श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन"],
        "answer_en": "Respiration",
        "answer_hi": "श्वसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which planet has the most moons?",
        "question_hi": "किस ग्रह के सबसे अधिक चंद्रमा हैं?",
        "options_en": ["Jupiter", "Saturn", "Uranus", "Neptune"],
        "options_hi": ["बृहस्पति", "शनि", "अरुण", "वरुण"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The chemical formula of water is:",
        "question_hi": "पानी का रासायनिक सूत्र है:",
        "options_en": ["H₂O", "HO₂", "H₂O₂", "HO"],
        "options_hi": ["H₂O", "HO₂", "H₂O₂", "HO"],
        "answer_en": "H₂O",
        "answer_hi": "H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which part of the human brain is responsible for balance and coordination?",
        "question_hi": "मानव मस्तिष्क का कौन सा भाग संतुलन और समन्वय के लिए जिम्मेदार है?",
        "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
        "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला", "हाइपोथैलेमस"],
        "answer_en": "Cerebellum",
        "answer_hi": "सेरेबेलम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The process of converting a liquid into a solid is called:",
        "question_hi": "द्रव को ठोस में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Melting", "Freezing", "Evaporation", "Condensation"],
        "options_hi": ["गलन", "हिमीकरण", "वाष्पीकरण", "संघनन"],
        "answer_en": "Freezing",
        "answer_hi": "हिमीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which gas is produced during photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण के दौरान कौन सी गैस उत्पन्न होती है?",
        "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The largest organ in the human body is:",
        "question_hi": "मानव शरीर का सबसे बड़ा अंग है:",
        "options_en": ["Liver", "Skin", "Heart", "Lungs"],
        "options_hi": ["यकृत", "त्वचा", "हृदय", "फेफड़े"],
        "answer_en": "Skin",
        "answer_hi": "त्वचा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which planet is known for its rings?",
        "question_hi": "कौन सा ग्रह अपनी वलयों के लिए जाना जाता है?",
        "options_en": ["Jupiter", "Saturn", "Uranus", "Neptune"],
        "options_hi": ["बृहस्पति", "शनि", "अरुण", "वरुण"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The chemical symbol for sodium is:",
        "question_hi": "सोडियम का रासायनिक प्रतीक है:",
        "options_en": ["So", "Sd", "Na", "Nm"],
        "options_hi": ["So", "Sd", "Na", "Nm"],
        "answer_en": "Na",
        "answer_hi": "Na",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which blood type is known as the universal donor?",
        "question_hi": "कौन सा रक्त समूह सार्वत्रिक दाता के रूप में जाना जाता है?",
        "options_en": ["A", "B", "AB", "O"],
        "options_hi": ["A", "B", "AB", "O"],
        "answer_en": "O",
        "answer_hi": "O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "The process of converting a gas into a liquid is called:",
        "question_hi": "गैस को द्रव में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Evaporation", "Condensation", "Sublimation", "Freezing"],
        "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "हिमीकरण"],
        "answer_en": "Condensation",
        "answer_hi": "संघनन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which element is the most abundant in the Earth's crust?",
        "question_hi": "पृथ्वी की पपड़ी में कौन सा तत्व सबसे अधिक मात्रा में पाया जाता है?",
        "options_en": ["Oxygen", "Silicon", "Aluminum", "Iron"],
        "options_hi": ["ऑक्सीजन", "सिलिकॉन", "एल्युमिनियम", "लोहा"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The part of the cell that contains genetic material is the:",
        "question_hi": "कोशिका का वह भाग जिसमें आनुवंशिक सामग्री होती है, वह है:",
        "options_en": ["Cytoplasm", "Nucleus", "Mitochondria", "Ribosome"],
        "options_hi": ["कोशिका द्रव्य", "केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which planet is known as the Evening Star?",
        "question_hi": "किस ग्रह को सांझ का तारा कहा जाता है?",
        "options_en": ["Mars", "Venus", "Jupiter", "Mercury"],
        "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "बुध"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The chemical formula of carbon monoxide is:",
        "question_hi": "कार्बन मोनोऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["CO", "CO₂", "C₂O", "CO₃"],
        "options_hi": ["CO", "CO₂", "C₂O", "CO₃"],
        "answer_en": "CO",
        "answer_hi": "CO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which organ is responsible for filtering blood in the human body?",
        "question_hi": "मानव शरीर में रक्त को छानने के लिए कौन सा अंग जिम्मेदार है?",
        "options_en": ["Liver", "Kidneys", "Heart", "Lungs"],
        "options_hi": ["यकृत", "वृक्क", "हृदय", "फेफड़े"],
        "answer_en": "Kidneys",
        "answer_hi": "वृक्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "The process of converting a solid into a liquid is called:",
        "question_hi": "ठोस को द्रव में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Melting", "Freezing", "Evaporation", "Condensation"],
        "options_hi": ["गलन", "हिमीकरण", "वाष्पीकरण", "संघनन"],
        "answer_en": "Melting",
        "answer_hi": "गलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which gas is used by plants during respiration?",
        "question_hi": "पौधे श्वसन के दौरान किस गैस का उपयोग करते हैं?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The smallest planet in our solar system is:",
        "question_hi": "हमारे सौर मंडल का सबसे छोटा ग्रह है:",
        "options_en": ["Mercury", "Mars", "Venus", "Earth"],
        "options_hi": ["बुध", "मंगल", "शुक्र", "पृथ्वी"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which element has the chemical symbol 'K'?",
        "question_hi": "किस तत्व का रासायनिक प्रतीक 'K' है?",
        "options_en": ["Potassium", "Krypton", "Calcium", "Carbon"],
        "options_hi": ["पोटैशियम", "क्रिप्टन", "कैल्शियम", "कार्बन"],
        "answer_en": "Potassium",
        "answer_hi": "पोटैशियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "The process of breaking down food in the body is called:",
        "question_hi": "शरीर में भोजन को तोड़ने की प्रक्रिया कहलाती है:",
        "options_en": ["Respiration", "Digestion", "Photosynthesis", "Transpiration"],
        "options_hi": ["श्वसन", "पाचन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन"],
        "answer_en": "Digestion",
        "answer_hi": "पाचन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which planet is known as the Blue Planet?",
        "question_hi": "किस ग्रह को नीला ग्रह कहा जाता है?",
        "options_en": ["Earth", "Neptune", "Uranus", "Mars"],
        "options_hi": ["पृथ्वी", "वरुण", "अरुण", "मंगल"],
        "answer_en": "Earth",
        "answer_hi": "पृथ्वी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
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
        "num": 54,
        "question_en": "Which part of the eye controls the amount of light entering?",
        "question_hi": "आंख का कौन सा भाग प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है?",
        "options_en": ["Retina", "Cornea", "Pupil", "Lens"],
        "options_hi": ["रेटिना", "कॉर्निया", "पुतली", "लेंस"],
        "answer_en": "Pupil",
        "answer_hi": "पुतली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "The process of converting vapor into liquid is called:",
        "question_hi": "वाष्प को द्रव में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Evaporation", "Condensation", "Sublimation", "Freezing"],
        "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "हिमीकरण"],
        "answer_en": "Condensation",
        "answer_hi": "संघनन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which gas is known as laughing gas?",
        "question_hi": "किस गैस को हंसाने वाली गैस के नाम से जाना जाता है?",
        "options_en": ["Oxygen", "Nitrous oxide", "Carbon dioxide", "Helium"],
        "options_hi": ["ऑक्सीजन", "नाइट्रस ऑक्साइड", "कार्बन डाइऑक्साइड", "हीलियम"],
        "answer_en": "Nitrous oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "The largest moon in our solar system is:",
        "question_hi": "हमारे सौर मंडल का सबसे बड़ा चंद्रमा है:",
        "options_en": ["Moon", "Ganymede", "Titan", "Europa"],
        "options_hi": ["चंद्रमा", "गेनीमेड", "टाइटन", "यूरोपा"],
        "answer_en": "Ganymede",
        "answer_hi": "गेनीमेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which element has the atomic number 6?",
        "question_hi": "किस तत्व की परमाणु संख्या 6 है?",
        "options_en": ["Carbon", "Oxygen", "Nitrogen", "Boron"],
        "options_hi": ["कार्बन", "ऑक्सीजन", "नाइट्रोजन", "बोरॉन"],
        "answer_en": "Carbon",
        "answer_hi": "कार्बन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "The process of converting light energy into electrical energy in solar cells is called:",
        "question_hi": "सौर सेल में प्रकाश ऊर्जा को विद्युत ऊर्जा में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Photovoltaic effect", "Photoelectric effect", "Thermoelectric effect", "Electromagnetic effect"],
        "options_hi": ["फोटोवोल्टाइक प्रभाव", "प्रकाश विद्युत प्रभाव", "थर्मोइलेक्ट्रिक प्रभाव", "विद्युत चुम्बकीय प्रभाव"],
        "answer_en": "Photovoltaic effect",
        "answer_hi": "फोटोवोल्टाइक प्रभाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which blood cells are responsible for fighting infections?",
        "question_hi": "कौन सी रक्त कोशिकाएं संक्रमण से लड़ने के लिए जिम्मेदार हैं?",
        "options_en": ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
        "options_hi": ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
        "answer_en": "White blood cells",
        "answer_hi": "श्वेत रक्त कोशिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "The chemical symbol for silver is:",
        "question_hi": "चांदी का रासायनिक प्रतीक है:",
        "options_en": ["Si", "Sv", "Ag", "Au"],
        "options_hi": ["Si", "Sv", "Ag", "Au"],
        "answer_en": "Ag",
        "answer_hi": "Ag",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which planet has the shortest day?",
        "question_hi": "किस ग्रह का दिन सबसे छोटा होता है?",
        "options_en": ["Jupiter", "Saturn", "Earth", "Mars"],
        "options_hi": ["बृहस्पति", "शनि", "पृथ्वी", "मंगल"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The process of converting electrical energy into light energy is called:",
        "question_hi": "विद्युत ऊर्जा को प्रकाश ऊर्जा में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Incandescence", "Fluorescence", "Both A and B", "Photoelectric effect"],
        "options_hi": ["उद्दीप्ति", "प्रतिदीप्ति", "A और B दोनों", "प्रकाश विद्युत प्रभाव"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which organ produces bile?",
        "question_hi": "कौन सा अंग पित्त उत्पन्न करता है?",
        "options_en": ["Liver", "Pancreas", "Gallbladder", "Stomach"],
        "options_hi": ["यकृत", "अग्न्याशय", "पित्ताशय", "आमाशय"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
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
        "num": 66,
        "question_en": "Which gas is used in fire extinguishers?",
        "question_hi": "आग बुझाने के यंत्रों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हीलियम"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The process of converting mechanical energy into electrical energy is called:",
        "question_hi": "यांत्रिक ऊर्जा को विद्युत ऊर्जा में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Electromagnetic induction", "Photoelectric effect", "Thermoelectric effect", "Chemical reaction"],
        "options_hi": ["विद्युत चुम्बकीय प्रेरण", "प्रकाश विद्युत प्रभाव", "थर्मोइलेक्ट्रिक प्रभाव", "रासायनिक अभिक्रिया"],
        "answer_en": "Electromagnetic induction",
        "answer_hi": "विद्युत चुम्बकीय प्रेरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which element is the main component of diamonds?",
        "question_hi": "हीरे का मुख्य घटक कौन सा तत्व है?",
        "options_en": ["Carbon", "Silicon", "Oxygen", "Nitrogen"],
        "options_hi": ["कार्बन", "सिलिकॉन", "ऑक्सीजन", "नाइट्रोजन"],
        "answer_en": "Carbon",
        "answer_hi": "कार्बन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "The chemical symbol for copper is:",
        "question_hi": "तांबे का रासायनिक प्रतीक है:",
        "options_en": ["Co", "Cp", "Cu", "Cr"],
        "options_hi": ["Co", "Cp", "Cu", "Cr"],
        "answer_en": "Cu",
        "answer_hi": "Cu",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which planet is known for its Great Red Spot?",
        "question_hi": "कौन सा ग्रह अपने ग्रेट रेड स्पॉट के लिए जाना जाता है?",
        "options_en": ["Jupiter", "Mars", "Saturn", "Venus"],
        "options_hi": ["बृहस्पति", "मंगल", "शनि", "शुक्र"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "The process of converting chemical energy into electrical energy is called:",
        "question_hi": "रासायनिक ऊर्जा को विद्युत ऊर्जा में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Electrolysis", "Galvanic cell reaction", "Both A and B", "Photoelectric effect"],
        "options_hi": ["विद्युत अपघटन", "गैल्वेनिक सेल अभिक्रिया", "A और B दोनों", "प्रकाश विद्युत प्रभाव"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which organ is responsible for producing urine?",
        "question_hi": "मूत्र उत्पन्न करने के लिए कौन सा अंग जिम्मेदार है?",
        "options_en": ["Liver", "Kidneys", "Bladder", "Pancreas"],
        "options_hi": ["यकृत", "वृक्क", "मूत्राशय", "अग्न्याशय"],
        "answer_en": "Kidneys",
        "answer_hi": "वृक्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
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
        "num": 74,
        "question_en": "Which gas is essential for photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण के लिए कौन सी गैस आवश्यक है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The process of converting electrical energy into sound energy is called:",
        "question_hi": "विद्युत ऊर्जा को ध्वनि ऊर्जा में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Piezoelectric effect", "Magnetostriction", "Both A and B", "Photoelectric effect"],
        "options_hi": ["पीजोइलेक्ट्रिक प्रभाव", "चुंबकीय संकुचन", "A और B दोनों", "प्रकाश विद्युत प्रभाव"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which element has the highest melting point?",
        "question_hi": "किस तत्व का गलनांक सबसे अधिक है?",
        "options_en": ["Tungsten", "Iron", "Copper", "Gold"],
        "options_hi": ["टंगस्टन", "लोहा", "तांबा", "सोना"],
        "answer_en": "Tungsten",
        "answer_hi": "टंगस्टन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The chemical symbol for lead is:",
        "question_hi": "सीसे का रासायनिक प्रतीक है:",
        "options_en": ["Ld", "Pb", "Pl", "Le"],
        "options_hi": ["Ld", "Pb", "Pl", "Le"],
        "answer_en": "Pb",
        "answer_hi": "Pb",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which planet has the longest day?",
        "question_hi": "किस ग्रह का दिन सबसे लंबा होता है?",
        "options_en": ["Venus", "Mercury", "Earth", "Mars"],
        "options_hi": ["शुक्र", "बुध", "पृथ्वी", "मंगल"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The process of converting nuclear energy into heat energy is called:",
        "question_hi": "नाभिकीय ऊर्जा को ऊष्मा ऊर्जा में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Nuclear fission", "Nuclear fusion", "Both A and B", "Radioactive decay"],
        "options_hi": ["नाभिकीय विखंडन", "नाभिकीय संलयन", "A और B दोनों", "रेडियोधर्मी क्षय"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which organ is responsible for producing insulin?",
        "question_hi": "इंसुलिन उत्पन्न करने के लिए कौन सा अंग जिम्मेदार है?",
        "options_en": ["Liver", "Pancreas", "Kidneys", "Stomach"],
        "options_hi": ["यकृत", "अग्न्याशय", "वृक्क", "आमाशय"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
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
        "num": 82,
        "question_en": "Which gas is used in refrigerators?",
        "question_hi": "रेफ्रिजरेटर में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Ammonia", "Freon", "Both A and B", "Carbon dioxide"],
        "options_hi": ["अमोनिया", "फ्रेऑन", "A और B दोनों", "कार्बन डाइऑक्साइड"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "The process of converting heat energy into mechanical energy is called:",
        "question_hi": "ऊष्मा ऊर्जा को यांत्रिक ऊर्जा में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Thermodynamic cycle", "Heat engine operation", "Both A and B", "Photoelectric effect"],
        "options_hi": ["ऊष्मागतिकी चक्र", "ऊष्मा इंजन संचालन", "A और B दोनों", "प्रकाश विद्युत प्रभाव"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which element is the lightest?",
        "question_hi": "कौन सा तत्व सबसे हल्का है?",
        "options_en": ["Helium", "Hydrogen", "Lithium", "Oxygen"],
        "options_hi": ["हीलियम", "हाइड्रोजन", "लिथियम", "ऑक्सीजन"],
        "answer_en": "Hydrogen",
        "answer_hi": "हाइड्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The chemical symbol for mercury is:",
        "question_hi": "पारे का रासायनिक प्रतीक है:",
        "options_en": ["Me", "Mg", "Hg", "My"],
        "options_hi": ["Me", "Mg", "Hg", "My"],
        "answer_en": "Hg",
        "answer_hi": "Hg",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which planet is known as the Morning Star?",
        "question_hi": "किस ग्रह को सुबह का तारा कहा जाता है?",
        "options_en": ["Venus", "Mercury", "Mars", "Jupiter"],
        "options_hi": ["शुक्र", "बुध", "मंगल", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The process of converting sound energy into electrical energy is called:",
        "question_hi": "ध्वनि ऊर्जा को विद्युत ऊर्जा में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Piezoelectric effect", "Magnetostriction", "Both A and B", "Photoelectric effect"],
        "options_hi": ["पीजोइलेक्ट्रिक प्रभाव", "चुंबकीय संकुचन", "A और B दोनों", "प्रकाश विद्युत प्रभाव"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which organ is responsible for storing bile?",
        "question_hi": "पित्त संग्रहीत करने के लिए कौन सा अंग जिम्मेदार है?",
        "options_en": ["Liver", "Gallbladder", "Pancreas", "Stomach"],
        "options_hi": ["यकृत", "पित्ताशय", "अग्न्याशय", "आमाशय"],
        "answer_en": "Gallbladder",
        "answer_hi": "पित्ताशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
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
        "num": 90,
        "question_en": "Which gas is used in light bulbs?",
        "question_hi": "लाइट बल्ब में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Nitrogen", "Argon", "Helium"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "हीलियम"],
        "answer_en": "Argon",
        "answer_hi": "आर्गन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The process of converting electrical energy into mechanical energy is called:",
        "question_hi": "विद्युत ऊर्जा को यांत्रिक ऊर्जा में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Electric motor operation", "Electromagnetic force", "Both A and B", "Photoelectric effect"],
        "options_hi": ["विद्युत मोटर संचालन", "विद्युत चुम्बकीय बल", "A और B दोनों", "प्रकाश विद्युत प्रभाव"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which element is the most abundant in the universe?",
        "question_hi": "ब्रह्मांड में कौन सा तत्व सबसे अधिक मात्रा में पाया जाता है?",
        "options_en": ["Hydrogen", "Helium", "Oxygen", "Carbon"],
        "options_hi": ["हाइड्रोजन", "हीलियम", "ऑक्सीजन", "कार्बन"],
        "answer_en": "Hydrogen",
        "answer_hi": "हाइड्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The chemical symbol for potassium is:",
        "question_hi": "पोटैशियम का रासायनिक प्रतीक है:",
        "options_en": ["Po", "Pt", "K", "P"],
        "options_hi": ["Po", "Pt", "K", "P"],
        "answer_en": "K",
        "answer_hi": "K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which planet has the most extreme seasons?",
        "question_hi": "किस ग्रह में सबसे अधिक चरम मौसम होते हैं?",
        "options_en": ["Earth", "Mars", "Uranus", "Neptune"],
        "options_hi": ["पृथ्वी", "मंगल", "अरुण", "वरुण"],
        "answer_en": "Uranus",
        "answer_hi": "अरुण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The process of converting chemical energy into heat energy is called:",
        "question_hi": "रासायनिक ऊर्जा को ऊष्मा ऊर्जा में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Combustion", "Exothermic reaction", "Both A and B", "Endothermic reaction"],
        "options_hi": ["दहन", "ऊष्माक्षेपी अभिक्रिया", "A और B दोनों", "ऊष्माशोषी अभिक्रिया"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which organ is responsible for producing red blood cells?",
        "question_hi": "लाल रक्त कोशिकाएं उत्पन्न करने के लिए कौन सा अंग जिम्मेदार है?",
        "options_en": ["Liver", "Bone marrow", "Spleen", "Kidneys"],
        "options_hi": ["यकृत", "बोन मैरो", "तिल्ली", "वृक्क"],
        "answer_en": "Bone marrow",
        "answer_hi": "बोन मैरो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
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
        "num": 98,
        "question_en": "Which gas is used in balloons for weather monitoring?",
        "question_hi": "मौसम निगरानी के लिए गुब्बारों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Helium", "Hydrogen", "Both A and B", "Nitrogen"],
        "options_hi": ["हीलियम", "हाइड्रोजन", "A और B दोनों", "नाइट्रोजन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The process of converting mechanical energy into sound energy is called:",
        "question_hi": "यांत्रिक ऊर्जा को ध्वनि ऊर्जा में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Vibration", "Acoustic emission", "Both A and B", "Photoelectric effect"],
        "options_hi": ["कंपन", "ध्वनिक उत्सर्जन", "A और B दोनों", "प्रकाश विद्युत प्रभाव"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which element is used in nuclear reactors as a fuel?",
        "question_hi": "नाभिकीय रिएक्टरों में ईंधन के रूप में किस तत्व का उपयोग किया जाता है?",
        "options_en": ["Uranium", "Plutonium", "Both A and B", "Thorium"],
        "options_hi": ["यूरेनियम", "प्लूटोनियम", "A और B दोनों", "थोरियम"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
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