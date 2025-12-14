const questions=[
    {
        "num": 1,
        "question_en": "Which metal is used in making bulletproof glass?",
        "question_hi": "बुलेटप्रूफ ग्लास बनाने में किस धातु का उपयोग होता है?",
        "options_en": ["Tungsten", "Aluminum", "Polycarbonate (not metal)", "Steel"],
        "options_hi": ["टंगस्टन", "एल्यूमीनियम", "पॉलीकार्बोनेट (धातु नहीं)", "स्टील"],
        "answer_en": "Polycarbonate (not metal)",
        "answer_hi": "पॉलीकार्बोनेट (धातु नहीं)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the study of animal behavior called?",
        "question_hi": "पशु व्यवहार के अध्ययन को क्या कहते हैं?",
        "options_en": ["Ecology", "Ethology", "Zoology", "Physiology"],
        "options_hi": ["पारिस्थितिकी", "एथोलॉजी", "प्राणि विज्ञान", "शरीर क्रिया विज्ञान"],
        "answer_en": "Ethology",
        "answer_hi": "एथोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which element has the highest melting point?",
        "question_hi": "किस तत्व का गलनांक सबसे अधिक होता है?",
        "options_en": ["Tungsten", "Carbon", "Osmium", "Rhenium"],
        "options_hi": ["टंगस्टन", "कार्बन", "ओस्मियम", "रेनियम"],
        "answer_en": "Carbon",
        "answer_hi": "कार्बन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the main component of natural gas?",
        "question_hi": "प्राकृतिक गैस का मुख्य घटक क्या है?",
        "options_en": ["Methane", "Ethane", "Propane", "Butane"],
        "options_hi": ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which blood group is known as universal donor?",
        "question_hi": "किस रक्त समूह को सार्वत्रिक दाता कहा जाता है?",
        "options_en": ["O+", "O-", "AB+", "AB-"],
        "options_hi": ["O+", "O-", "AB+", "AB-"],
        "answer_en": "O-",
        "answer_hi": "O-",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the chemical formula of laughing gas?",
        "question_hi": "हंसाने वाली गैस का रासायनिक सूत्र क्या है?",
        "options_en": ["N₂O", "NO₂", "N₂O₄", "NO"],
        "options_hi": ["N₂O", "NO₂", "N₂O₄", "NO"],
        "answer_en": "N₂O",
        "answer_hi": "N₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which planet has the longest day?",
        "question_hi": "किस ग्रह का दिन सबसे लंबा होता है?",
        "options_en": ["Venus", "Mercury", "Mars", "Jupiter"],
        "options_hi": ["शुक्र", "बुध", "मंगल", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the SI unit of luminous flux?",
        "question_hi": "ज्योति फ्लक्स की SI इकाई क्या है?",
        "options_en": ["Lumen", "Candela", "Lux", "Watt"],
        "options_hi": ["ल्यूमेन", "कैंडेला", "लक्स", "वाट"],
        "answer_en": "Lumen",
        "answer_hi": "ल्यूमेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which vitamin is essential for blood clotting?",
        "question_hi": "रक्त के थक्के बनने के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin E"],
        "options_hi": ["विटामिन K", "विटामिन सी", "विटामिन डी", "विटामिन E"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the chemical symbol for potassium?",
        "question_hi": "पोटेशियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["P", "Po", "K", "Pt"],
        "options_hi": ["P", "Po", "K", "Pt"],
        "answer_en": "K",
        "answer_hi": "K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which part of the brain controls balance?",
        "question_hi": "मस्तिष्क का कौन सा भाग संतुलन नियंत्रित करता है?",
        "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"],
        "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला", "थैलेमस"],
        "answer_en": "Cerebellum",
        "answer_hi": "सेरेबेलम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the study of fossils called?",
        "question_hi": "जीवाश्मों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Archaeology", "Paleontology", "Geology", "Anthropology"],
        "options_hi": ["पुरातत्व", "पुराजीव विज्ञान", "भूविज्ञान", "मानव विज्ञान"],
        "answer_en": "Paleontology",
        "answer_hi": "पुराजीव विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which gas is known as 'Marsh Gas'?",
        "question_hi": "किस गैस को 'मार्श गैस' कहा जाता है?",
        "options_en": ["Methane", "Ethane", "Propane", "Butane"],
        "options_hi": ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the normal pH of human blood?",
        "question_hi": "मानव रक्त का सामान्य pH कितना होता है?",
        "options_en": ["7.0", "7.2", "7.4", "7.6"],
        "options_hi": ["7.0", "7.2", "7.4", "7.6"],
        "answer_en": "7.4",
        "answer_hi": "7.4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which element is used in nuclear reactors as a coolant?",
        "question_hi": "नाभिकीय रिएक्टरों में किस तत्व का उपयोग शीतलक के रूप में किया जाता है?",
        "options_en": ["Sodium", "Lead", "Helium", "All of these"],
        "options_hi": ["सोडियम", "सीसा", "हीलियम", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the chemical formula of table salt?",
        "question_hi": "नमक का रासायनिक सूत्र क्या है?",
        "options_en": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "options_hi": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which planet has the most rings?",
        "question_hi": "किस ग्रह के सबसे अधिक छल्ले हैं?",
        "options_en": ["Saturn", "Jupiter", "Uranus", "Neptune"],
        "options_hi": ["शनि", "बृहस्पति", "युरेनस", "नेपच्यून"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the study of crystals called?",
        "question_hi": "क्रिस्टल के अध्ययन को क्या कहते हैं?",
        "options_en": ["Crystallography", "Mineralogy", "Geology", "Petrology"],
        "options_hi": ["क्रिस्टलोग्राफी", "खनिज विज्ञान", "भूविज्ञान", "शैल विज्ञान"],
        "answer_en": "Crystallography",
        "answer_hi": "क्रिस्टलोग्राफी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which metal is liquid at room temperature?",
        "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
        "options_en": ["Mercury", "Gallium", "Francium", "All of these"],
        "options_hi": ["पारा", "गैलियम", "फ्रांसियम", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the chemical symbol for nitrogen?",
        "question_hi": "नाइट्रोजन का रासायनिक प्रतीक क्या है?",
        "options_en": ["N", "Ni", "Na", "Ne"],
        "options_hi": ["N", "Ni", "Na", "Ne"],
        "answer_en": "N",
        "answer_hi": "N",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which part of the plant performs photosynthesis?",
        "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
        "options_en": ["Leaves", "Stem", "Roots", "Flowers"],
        "options_hi": ["पत्तियाँ", "तना", "जड़ें", "फूल"],
        "answer_en": "Leaves",
        "answer_hi": "पत्तियाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the unit of heat?",
        "question_hi": "ऊष्मा की इकाई क्या है?",
        "options_en": ["Joule", "Calorie", "Both", "Watt"],
        "options_hi": ["जूल", "कैलोरी", "दोनों", "वाट"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which vitamin deficiency causes scurvy?",
        "question_hi": "किस विटामिन की कमी से स्कर्वी रोग होता है?",
        "options_en": ["Vitamin C", "Vitamin D", "Vitamin B12", "Vitamin K"],
        "options_hi": ["विटामिन सी", "विटामिन डी", "विटामिन B12", "विटामिन K"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन सी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the chemical formula of water?",
        "question_hi": "पानी का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂O", "H₂O₂", "HO₂", "H₃O"],
        "options_hi": ["H₂O", "H₂O₂", "HO₂", "H₃O"],
        "answer_en": "H₂O",
        "answer_hi": "H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which planet is known as the 'Red Planet'?",
        "question_hi": "किस ग्रह को 'लाल ग्रह' कहा जाता है?",
        "options_en": ["Mars", "Venus", "Jupiter", "Mercury"],
        "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "बुध"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the study of insects called?",
        "question_hi": "कीटों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Entomology", "Zoology", "Botany", "Ecology"],
        "options_hi": ["कीटविज्ञान", "प्राणि विज्ञान", "वनस्पति विज्ञान", "पारिस्थितिकी"],
        "answer_en": "Entomology",
        "answer_hi": "कीटविज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which gas is responsible for the greenhouse effect?",
        "question_hi": "ग्रीनहाउस प्रभाव के लिए कौन सी गैस जिम्मेदार है?",
        "options_en": ["Carbon dioxide", "Methane", "Water vapor", "All of these"],
        "options_hi": ["कार्बन डाइऑक्साइड", "मीथेन", "जल वाष्प", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the chemical symbol for iron?",
        "question_hi": "लोहे का रासायनिक प्रतीक क्या है?",
        "options_en": ["Fe", "Ir", "In", "Io"],
        "options_hi": ["Fe", "Ir", "In", "Io"],
        "answer_en": "Fe",
        "answer_hi": "Fe",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which organ produces insulin?",
        "question_hi": "कौन सा अंग इंसुलिन उत्पन्न करता है?",
        "options_en": ["Liver", "Pancreas", "Kidney", "Stomach"],
        "options_hi": ["यकृत", "अग्न्याशय", "गुर्दा", "पेट"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the chemical formula of methane?",
        "question_hi": "मीथेन का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "answer_en": "CH₄",
        "answer_hi": "CH₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which planet is the largest in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
        "options_en": ["Jupiter", "Saturn", "Neptune", "Uranus"],
        "options_hi": ["बृहस्पति", "शनि", "नेपच्यून", "युरेनस"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the study of birds called?",
        "question_hi": "पक्षियों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Ornithology", "Zoology", "Entomology", "Ecology"],
        "options_hi": ["पक्षी विज्ञान", "प्राणि विज्ञान", "कीटविज्ञान", "पारिस्थितिकी"],
        "answer_en": "Ornithology",
        "answer_hi": "पक्षी विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which metal is used in thermometers?",
        "question_hi": "थर्मामीटर में किस धातु का उपयोग होता है?",
        "options_en": ["Mercury", "Alcohol", "Gallium", "All of these"],
        "options_hi": ["पारा", "अल्कोहल", "गैलियम", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the chemical symbol for sodium?",
        "question_hi": "सोडियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Na", "So", "Sd", "Sm"],
        "options_hi": ["Na", "So", "Sd", "Sm"],
        "answer_en": "Na",
        "answer_hi": "Na",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which part of the cell is called the powerhouse?",
        "question_hi": "कोशिका के किस भाग को पावरहाउस कहा जाता है?",
        "options_en": ["Mitochondria", "Nucleus", "Ribosome", "Golgi apparatus"],
        "options_hi": ["माइटोकॉन्ड्रिया", "नाभिक", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the chemical formula of carbon dioxide?",
        "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CO₂", "CO", "C₂O", "C₂O₃"],
        "options_hi": ["CO₂", "CO", "C₂O", "C₂O₃"],
        "answer_en": "CO₂",
        "answer_hi": "CO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which planet is closest to the Sun?",
        "question_hi": "सूर्य के सबसे निकट कौन सा ग्रह है?",
        "options_en": ["Mercury", "Venus", "Earth", "Mars"],
        "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the study of fish called?",
        "question_hi": "मछलियों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Ichthyology", "Zoology", "Marine Biology", "Oceanography"],
        "options_hi": ["मत्स्य विज्ञान", "प्राणि विज्ञान", "समुद्री जीव विज्ञान", "महासागर विज्ञान"],
        "answer_en": "Ichthyology",
        "answer_hi": "मत्स्य विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which gas is most abundant in Earth's atmosphere?",
        "question_hi": "पृथ्वी के वायुमंडल में कौन सी गैस सबसे अधिक है?",
        "options_en": ["Nitrogen", "Oxygen", "Argon", "Carbon dioxide"],
        "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "आर्गन", "कार्बन डाइऑक्साइड"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the chemical symbol for calcium?",
        "question_hi": "कैल्शियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ca", "Cl", "Cm", "Co"],
        "options_hi": ["Ca", "Cl", "Cm", "Co"],
        "answer_en": "Ca",
        "answer_hi": "Ca",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which vitamin is produced by the human body when exposed to sunlight?",
        "question_hi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर कौन सा विटामिन उत्पन्न करता है?",
        "options_en": ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"],
        "options_hi": ["विटामिन डी", "विटामिन सी", "विटामिन ए", "विटामिन K"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the chemical formula of ammonia?",
        "question_hi": "अमोनिया का रासायनिक सूत्र क्या है?",
        "options_en": ["NH₃", "NH₄", "N₂H₄", "NO₂"],
        "options_hi": ["NH₃", "NH₄", "N₂H₄", "NO₂"],
        "answer_en": "NH₃",
        "answer_hi": "NH₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which planet is known for its beautiful rings?",
        "question_hi": "किस ग्रह को इसके सुंदर छल्लों के लिए जाना जाता है?",
        "options_en": ["Saturn", "Jupiter", "Uranus", "Neptune"],
        "options_hi": ["शनि", "बृहस्पति", "युरेनस", "नेपच्यून"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the study of plants called?",
        "question_hi": "पौधों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Botany", "Zoology", "Biology", "Ecology"],
        "options_hi": ["वनस्पति विज्ञान", "प्राणि विज्ञान", "जीव विज्ञान", "पारिस्थितिकी"],
        "answer_en": "Botany",
        "answer_hi": "वनस्पति विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which metal is the best conductor of heat?",
        "question_hi": "कौन सी धातु ऊष्मा की सबसे अच्छी सुचालक है?",
        "options_en": ["Silver", "Copper", "Gold", "Aluminum"],
        "options_hi": ["चाँदी", "ताँबा", "सोना", "एल्यूमीनियम"],
        "answer_en": "Silver",
        "answer_hi": "चाँदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the chemical symbol for gold?",
        "question_hi": "सोने का रासायनिक प्रतीक क्या है?",
        "options_en": ["Au", "Ag", "Gd", "Go"],
        "options_hi": ["Au", "Ag", "Gd", "Go"],
        "answer_en": "Au",
        "answer_hi": "Au",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which part of the eye controls the amount of light entering?",
        "question_hi": "आँख का कौन सा भाग प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है?",
        "options_en": ["Iris", "Pupil", "Lens", "Retina"],
        "options_hi": ["परितारिका", "पुतली", "लेंस", "रेटिना"],
        "answer_en": "Iris",
        "answer_hi": "परितारिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the chemical formula of sulfuric acid?",
        "question_hi": "सल्फ्यूरिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂SO₄", "HCl", "HNO₃", "H₃PO₄"],
        "options_hi": ["H₂SO₄", "HCl", "HNO₃", "H₃PO₄"],
        "answer_en": "H₂SO₄",
        "answer_hi": "H₂SO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which planet is known as the 'Ice Giant'?",
        "question_hi": "किस ग्रह को 'बर्फीला दानव' कहा जाता है?",
        "options_en": ["Uranus", "Neptune", "Saturn", "Jupiter"],
        "options_hi": ["युरेनस", "नेपच्यून", "शनि", "बृहस्पति"],
        "answer_en": "Neptune",
        "answer_hi": "नेपच्यून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the study of the universe called?",
        "question_hi": "ब्रह्मांड के अध्ययन को क्या कहते हैं?",
        "options_en": ["Cosmology", "Astronomy", "Astrophysics", "All of these"],
        "options_hi": ["ब्रह्माण्ड विज्ञान", "खगोल विज्ञान", "खगोल भौतिकी", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which gas is used in fire extinguishers?",
        "question_hi": "आग बुझाने वाले उपकरणों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Carbon dioxide", "Nitrogen", "Helium", "Argon"],
        "options_hi": ["कार्बन डाइऑक्साइड", "नाइट्रोजन", "हीलियम", "आर्गन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the chemical symbol for helium?",
        "question_hi": "हीलियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["He", "H", "Hi", "Hl"],
        "options_hi": ["He", "H", "Hi", "Hl"],
        "answer_en": "He",
        "answer_hi": "He",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which part of the brain controls breathing?",
        "question_hi": "मस्तिष्क का कौन सा भाग श्वसन को नियंत्रित करता है?",
        "options_en": ["Medulla oblongata", "Cerebrum", "Cerebellum", "Hypothalamus"],
        "options_hi": ["मेडुला ऑब्लोंगाटा", "सेरेब्रम", "सेरेबेलम", "हाइपोथैलेमस"],
        "answer_en": "Medulla oblongata",
        "answer_hi": "मेडुला ऑब्लोंगाटा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the chemical formula of nitric acid?",
        "question_hi": "नाइट्रिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["HNO₃", "H₂SO₄", "HCl", "H₃PO₄"],
        "options_hi": ["HNO₃", "H₂SO₄", "HCl", "H₃PO₄"],
        "answer_en": "HNO₃",
        "answer_hi": "HNO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which planet has the most volcanoes?",
        "question_hi": "किस ग्रह पर सबसे अधिक ज्वालामुखी हैं?",
        "options_en": ["Venus", "Mars", "Earth", "Io (moon)"],
        "options_hi": ["शुक्र", "मंगल", "पृथ्वी", "आईओ (चंद्रमा)"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the study of heredity called?",
        "question_hi": "आनुवंशिकता के अध्ययन को क्या कहते हैं?",
        "options_en": ["Genetics", "Biology", "Evolution", "Ecology"],
        "options_hi": ["आनुवंशिकी", "जीव विज्ञान", "विकास", "पारिस्थितिकी"],
        "answer_en": "Genetics",
        "answer_hi": "आनुवंशिकी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which metal is used in making aircraft bodies?",
        "question_hi": "विमान के धड़ बनाने में किस धातु का उपयोग होता है?",
        "options_en": ["Aluminum", "Steel", "Titanium", "All of these"],
        "options_hi": ["एल्यूमीनियम", "स्टील", "टाइटेनियम", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the chemical symbol for silicon?",
        "question_hi": "सिलिकॉन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Si", "Sl", "Sn", "Sc"],
        "options_hi": ["Si", "Sl", "Sn", "Sc"],
        "answer_en": "Si",
        "answer_hi": "Si",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which part of the cell contains genetic material?",
        "question_hi": "कोशिका का कौन सा भाग आनुवंशिक सामग्री रखता है?",
        "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"],
        "options_hi": ["नाभिक", "माइटोकॉन्ड्रिया", "राइबोसोम", "कोशिका द्रव्य"],
        "answer_en": "Nucleus",
        "answer_hi": "नाभिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the chemical formula of hydrochloric acid?",
        "question_hi": "हाइड्रोक्लोरिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["HCl", "H₂SO₄", "HNO₃", "H₃PO₄"],
        "options_hi": ["HCl", "H₂SO₄", "HNO₃", "H₃PO₄"],
        "answer_en": "HCl",
        "answer_hi": "HCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which planet has the strongest magnetic field?",
        "question_hi": "किस ग्रह का चुंबकीय क्षेत्र सबसे मजबूत है?",
        "options_en": ["Jupiter", "Saturn", "Earth", "Neptune"],
        "options_hi": ["बृहस्पति", "शनि", "पृथ्वी", "नेपच्यून"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the study of tissues called?",
        "question_hi": "ऊतकों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Histology", "Cytology", "Anatomy", "Physiology"],
        "options_hi": ["ऊतक विज्ञान", "कोशिका विज्ञान", "शरीर रचना विज्ञान", "शरीर क्रिया विज्ञान"],
        "answer_en": "Histology",
        "answer_hi": "ऊतक विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which gas is used in balloons to make them float?",
        "question_hi": "गुब्बारों को उड़ाने के लिए किस गैस का उपयोग किया जाता है?",
        "options_en": ["Helium", "Hydrogen", "Both", "Nitrogen"],
        "options_hi": ["हीलियम", "हाइड्रोजन", "दोनों", "नाइट्रोजन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the chemical symbol for carbon?",
        "question_hi": "कार्बन का रासायनिक प्रतीक क्या है?",
        "options_en": ["C", "Ca", "Co", "Cr"],
        "options_hi": ["C", "Ca", "Co", "Cr"],
        "answer_en": "C",
        "answer_hi": "C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which part of the digestive system absorbs water?",
        "question_hi": "पाचन तंत्र का कौन सा भाग पानी अवशोषित करता है?",
        "options_en": ["Small intestine", "Large intestine", "Stomach", "Esophagus"],
        "options_hi": ["छोटी आंत", "बड़ी आंत", "पेट", "ग्रासनली"],
        "answer_en": "Large intestine",
        "answer_hi": "बड़ी आंत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the chemical formula of phosphoric acid?",
        "question_hi": "फॉस्फोरिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["H₃PO₄", "H₂SO₄", "HNO₃", "HCl"],
        "options_hi": ["H₃PO₄", "H₂SO₄", "HNO₃", "HCl"],
        "answer_en": "H₃PO₄",
        "answer_hi": "H₃PO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which planet is the smallest in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे छोटा ग्रह कौन सा है?",
        "options_en": ["Mercury", "Mars", "Venus", "Pluto (dwarf planet)"],
        "options_hi": ["बुध", "मंगल", "शुक्र", "प्लूटो (बौना ग्रह)"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the study of cells called?",
        "question_hi": "कोशिकाओं के अध्ययन को क्या कहते हैं?",
        "options_en": ["Cytology", "Histology", "Biology", "Genetics"],
        "options_hi": ["कोशिका विज्ञान", "ऊतक विज्ञान", "जीव विज्ञान", "आनुवंशिकी"],
        "answer_en": "Cytology",
        "answer_hi": "कोशिका विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which metal is used in making batteries?",
        "question_hi": "बैटरियाँ बनाने में किस धातु का उपयोग होता है?",
        "options_en": ["Lithium", "Lead", "Zinc", "All of these"],
        "options_hi": ["लिथियम", "सीसा", "जस्ता", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the chemical symbol for oxygen?",
        "question_hi": "ऑक्सीजन का रासायनिक प्रतीक क्या है?",
        "options_en": ["O", "Ox", "Og", "Oy"],
        "options_hi": ["O", "Ox", "Og", "Oy"],
        "answer_en": "O",
        "answer_hi": "O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which part of the ear controls balance?",
        "question_hi": "कान का कौन सा भाग संतुलन नियंत्रित करता है?",
        "options_en": ["Cochlea", "Eardrum", "Semicircular canals", "Auditory nerve"],
        "options_hi": ["कोक्लिया", "कान का पर्दा", "अर्धवृत्ताकार नलिकाएं", "श्रवण तंत्रिका"],
        "answer_en": "Semicircular canals",
        "answer_hi": "अर्धवृत्ताकार नलिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the chemical formula of acetic acid?",
        "question_hi": "एसिटिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₃COOH", "H₂SO₄", "HNO₃", "HCl"],
        "options_hi": ["CH₃COOH", "H₂SO₄", "HNO₃", "HCl"],
        "answer_en": "CH₃COOH",
        "answer_hi": "CH₃COOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which planet has the most extreme temperature variations?",
        "question_hi": "किस ग्रह पर सबसे चरम तापमान परिवर्तन होते हैं?",
        "options_en": ["Mercury", "Venus", "Mars", "Earth"],
        "options_hi": ["बुध", "शुक्र", "मंगल", "पृथ्वी"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the study of the immune system called?",
        "question_hi": "प्रतिरक्षा प्रणाली के अध्ययन को क्या कहते हैं?",
        "options_en": ["Immunology", "Pathology", "Microbiology", "Virology"],
        "options_hi": ["प्रतिरक्षा विज्ञान", "रोग विज्ञान", "सूक्ष्म जीव विज्ञान", "वायरोलॉजी"],
        "answer_en": "Immunology",
        "answer_hi": "प्रतिरक्षा विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which gas is known as 'Laughing Gas'?",
        "question_hi": "किस गैस को 'हंसाने वाली गैस' कहा जाता है?",
        "options_en": ["Nitrous oxide", "Carbon dioxide", "Oxygen", "Nitrogen"],
        "options_hi": ["नाइट्रस ऑक्साइड", "कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन"],
        "answer_en": "Nitrous oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the chemical symbol for phosphorus?",
        "question_hi": "फॉस्फोरस का रासायनिक प्रतीक क्या है?",
        "options_en": ["P", "Ph", "Ps", "Po"],
        "options_hi": ["P", "Ph", "Ps", "Po"],
        "answer_en": "P",
        "answer_hi": "P",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which part of the blood fights infection?",
        "question_hi": "रक्त का कौन सा भाग संक्रमण से लड़ता है?",
        "options_en": ["White blood cells", "Red blood cells", "Platelets", "Plasma"],
        "options_hi": ["श्वेत रक्त कोशिकाएं", "लाल रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
        "answer_en": "White blood cells",
        "answer_hi": "श्वेत रक्त कोशिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the chemical formula of ozone?",
        "question_hi": "ओज़ोन का रासायनिक सूत्र क्या है?",
        "options_en": ["O₃", "O₂", "O₄", "HO₂"],
        "options_hi": ["O₃", "O₂", "O₄", "HO₂"],
        "answer_en": "O₃",
        "answer_hi": "O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which planet has the fastest rotation?",
        "question_hi": "किस ग्रह का घूर्णन सबसे तेज़ है?",
        "options_en": ["Jupiter", "Saturn", "Neptune", "Uranus"],
        "options_hi": ["बृहस्पति", "शनि", "नेपच्यून", "युरेनस"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the study of viruses called?",
        "question_hi": "वायरस के अध्ययन को क्या कहते हैं?",
        "options_en": ["Virology", "Bacteriology", "Microbiology", "Immunology"],
        "options_hi": ["वायरोलॉजी", "जीवाणु विज्ञान", "सूक्ष्म जीव विज्ञान", "प्रतिरक्षा विज्ञान"],
        "answer_en": "Virology",
        "answer_hi": "वायरोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which gas is used in refrigeration?",
        "question_hi": "प्रशीतन में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Freon", "Ammonia", "Carbon dioxide", "All of these"],
        "options_hi": ["फ्रीऑन", "अमोनिया", "कार्बन डाइऑक्साइड", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the chemical symbol for sulfur?",
        "question_hi": "सल्फर का रासायनिक प्रतीक क्या है?",
        "options_en": ["S", "Su", "Sl", "Sr"],
        "options_hi": ["S", "Su", "Sl", "Sr"],
        "answer_en": "S",
        "answer_hi": "S",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which part of the kidney filters blood?",
        "question_hi": "गुर्दे का कौन सा भाग रक्त को फिल्टर करता है?",
        "options_en": ["Nephron", "Ureter", "Bladder", "Urethra"],
        "options_hi": ["नेफ्रॉन", "मूत्रवाहिनी", "मूत्राशय", "मूत्रमार्ग"],
        "answer_en": "Nephron",
        "answer_hi": "नेफ्रॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the chemical formula of glucose?",
        "question_hi": "ग्लूकोज का रासायनिक सूत्र क्या है?",
        "options_en": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₄"],
        "options_hi": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₄"],
        "answer_en": "C₆H₁₂O₆",
        "answer_hi": "C₆H₁₂O₆",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which planet has the most moons after Saturn?",
        "question_hi": "शनि के बाद किस ग्रह के सबसे अधिक चंद्रमा हैं?",
        "options_en": ["Jupiter", "Uranus", "Neptune", "Mars"],
        "options_hi": ["बृहस्पति", "युरेनस", "नेपच्यून", "मंगल"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the study of bacteria called?",
        "question_hi": "बैक्टीरिया के अध्ययन को क्या कहते हैं?",
        "options_en": ["Bacteriology", "Virology", "Microbiology", "Mycology"],
        "options_hi": ["जीवाणु विज्ञान", "वायरोलॉजी", "सूक्ष्म जीव विज्ञान", "कवक विज्ञान"],
        "answer_en": "Bacteriology",
        "answer_hi": "जीवाणु विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which metal is used in making jewelry?",
        "question_hi": "गहने बनाने में किस धातु का उपयोग होता है?",
        "options_en": ["Gold", "Silver", "Platinum", "All of these"],
        "options_hi": ["सोना", "चाँदी", "प्लैटिनम", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the chemical symbol for chlorine?",
        "question_hi": "क्लोरीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Cl", "Ch", "C", "Cr"],
        "options_hi": ["Cl", "Ch", "C", "Cr"],
        "answer_en": "Cl",
        "answer_hi": "Cl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which part of the plant transports water?",
        "question_hi": "पौधे का कौन सा भाग पानी का परिवहन करता है?",
        "options_en": ["Xylem", "Phloem", "Roots", "Leaves"],
        "options_hi": ["जाइलम", "फ्लोएम", "जड़ें", "पत्तियाँ"],
        "answer_en": "Xylem",
        "answer_hi": "जाइलम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the chemical formula of ethanol?",
        "question_hi": "इथेनॉल का रासायनिक सूत्र क्या है?",
        "options_en": ["C₂H₅OH", "CH₃OH", "C₆H₁₂O₆", "CH₄"],
        "options_hi": ["C₂H₅OH", "CH₃OH", "C₆H₁₂O₆", "CH₄"],
        "answer_en": "C₂H₅OH",
        "answer_hi": "C₂H₅OH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which planet has the longest year?",
        "question_hi": "किस ग्रह का वर्ष सबसे लंबा होता है?",
        "options_en": ["Neptune", "Uranus", "Saturn", "Jupiter"],
        "options_hi": ["नेपच्यून", "युरेनस", "शनि", "बृहस्पति"],
        "answer_en": "Neptune",
        "answer_hi": "नेपच्यून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the study of drugs called?",
        "question_hi": "दवाओं के अध्ययन को क्या कहते हैं?",
        "options_en": ["Pharmacology", "Pharmacy", "Toxicology", "Chemistry"],
        "options_hi": ["फार्माकोलॉजी", "फार्मेसी", "विष विज्ञान", "रसायन विज्ञान"],
        "answer_en": "Pharmacology",
        "answer_hi": "फार्माकोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which gas is used in welding?",
        "question_hi": "वेल्डिंग में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Acetylene", "Oxygen", "Argon", "All of these"],
        "options_hi": ["एसिटिलीन", "ऑक्सीजन", "आर्गन", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the chemical symbol for magnesium?",
        "question_hi": "मैग्नीशियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Mg", "Ma", "Mn", "Mt"],
        "options_hi": ["Mg", "Ma", "Mn", "Mt"],
        "answer_en": "Mg",
        "answer_hi": "Mg",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which part of the plant performs transpiration?",
        "question_hi": "पौधे का कौन सा भाग वाष्पोत्सर्जन करता है?",
        "options_en": ["Leaves", "Stem", "Roots", "Flowers"],
        "options_hi": ["पत्तियाँ", "तना", "जड़ें", "फूल"],
        "answer_en": "Leaves",
        "answer_hi": "पत्तियाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the chemical formula of methane?",
        "question_hi": "मीथेन का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "answer_en": "CH₄",
        "answer_hi": "CH₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which planet has the most eccentric orbit?",
        "question_hi": "किस ग्रह की कक्षा सबसे अधिक विलक्षण है?",
        "options_en": ["Mercury", "Pluto", "Mars", "Venus"],
        "options_hi": ["बुध", "प्लूटो", "मंगल", "शुक्र"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the study of cancer called?",
        "question_hi": "कैंसर के अध्ययन को क्या कहते हैं?",
        "options_en": ["Oncology", "Pathology", "Radiology", "Hematology"],
        "options_hi": ["ऑन्कोलॉजी", "रोग विज्ञान", "रेडियोलॉजी", "रक्त विज्ञान"],
        "answer_en": "Oncology",
        "answer_hi": "ऑन्कोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which gas is known as 'Tear Gas'?",
        "question_hi": "किस गैस को 'आँसू गैस' कहा जाता है?",
        "options_en": ["Chloropicrin", "CS gas", "Both", "Mustard gas"],
        "options_hi": ["क्लोरोपिक्रिन", "सीएस गैस", "दोनों", "सरसों गैस"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the chemical symbol for zinc?",
        "question_hi": "जस्ता का रासायनिक प्रतीक क्या है?",
        "options_en": ["Zn", "Zi", "Zc", "Zr"],
        "options_hi": ["Zn", "Zi", "Zc", "Zr"],
        "answer_en": "Zn",
        "answer_hi": "Zn",
        "attempted": false,
        "selected": ""
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