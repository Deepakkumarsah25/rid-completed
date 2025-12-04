const questions = [
    {
        "num": 1,
        "question_en": "What is the chemical symbol for Tungsten?",
        "question_hi": "टंगस्टन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Tu", "Tg", "W", "Ts"],
        "options_hi": ["Tu", "Tg", "W", "Ts"],
        "answer_en": "W",
        "answer_hi": "W",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which planet is known as the 'Ice Giant'?",
        "question_hi": "कौन सा ग्रह 'आइस जायंट' के नाम से जाना जाता है?",
        "options_en": ["Saturn", "Uranus", "Neptune", "Jupiter"],
        "options_hi": ["शनि", "अरुण", "वरुण", "बृहस्पति"],
        "answer_en": "Uranus",
        "answer_hi": "अरुण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the SI unit of luminous intensity?",
        "question_hi": "ज्योति तीव्रता की SI इकाई क्या है?",
        "options_en": ["Lumen", "Lux", "Candela", "Watt"],
        "options_hi": ["लुमेन", "लक्स", "कैंडेला", "वाट"],
        "answer_en": "Candela",
        "answer_hi": "कैंडेला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which gas is responsible for the greenhouse effect?",
        "question_hi": "ग्रीनहाउस प्रभाव के लिए कौन सी गैस जिम्मेदार है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the normal human body temperature in Celsius?",
        "question_hi": "सामान्य मानव शरीर का तापमान सेल्सियस में क्या है?",
        "options_en": ["36°C", "37°C", "38°C", "35°C"],
        "options_hi": ["36°C", "37°C", "38°C", "35°C"],
        "answer_en": "37°C",
        "answer_hi": "37°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which organ produces insulin in the human body?",
        "question_hi": "मानव शरीर में इंसुलिन कौन सा अंग उत्पन्न करता है?",
        "options_en": ["Liver", "Pancreas", "Kidney", "Stomach"],
        "options_hi": ["यकृत", "अग्न्याशय", "गुर्दा", "पेट"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the speed of sound in air at 20°C?",
        "question_hi": "20°C पर हवा में ध्वनि की गति क्या है?",
        "options_en": ["330 m/s", "340 m/s", "350 m/s", "360 m/s"],
        "options_hi": ["330 m/s", "340 m/s", "350 m/s", "360 m/s"],
        "answer_en": "340 m/s",
        "answer_hi": "340 m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which element has the highest melting point?",
        "question_hi": "किस तत्व का गलनांक सबसे अधिक है?",
        "options_en": ["Iron", "Tungsten", "Gold", "Platinum"],
        "options_hi": ["लोहा", "टंगस्टन", "सोना", "प्लैटिनम"],
        "answer_en": "Tungsten",
        "answer_hi": "टंगस्टन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the main component of the Earth's core?",
        "question_hi": "पृथ्वी के क्रोड का मुख्य घटक क्या है?",
        "options_en": ["Nickel", "Iron", "Copper", "Aluminum"],
        "options_hi": ["निकेल", "लोहा", "तांबा", "एल्युमिनियम"],
        "answer_en": "Iron",
        "answer_hi": "लोहा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which scientist discovered penicillin?",
        "question_hi": "किस वैज्ञानिक ने पेनिसिलिन की खोज की?",
        "options_en": ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Marie Curie"],
        "options_hi": ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "रॉबर्ट कोच", "मैरी क्यूरी"],
        "answer_en": "Alexander Fleming",
        "answer_hi": "अलेक्जेंडर फ्लेमिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the chemical formula of ozone?",
        "question_hi": "ओजोन का रासायनिक सूत्र क्या है?",
        "options_en": ["O₂", "O₃", "O₄", "HO"],
        "options_hi": ["O₂", "O₃", "O₄", "HO"],
        "answer_en": "O₃",
        "answer_hi": "O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which part of the flower produces pollen?",
        "question_hi": "फूल का कौन सा भाग पराग उत्पन्न करता है?",
        "options_en": ["Petal", "Stamen", "Pistil", "Sepal"],
        "options_hi": ["पंखुड़ी", "पुंकेसर", "स्त्रीकेसर", "बाह्यदल"],
        "answer_en": "Stamen",
        "answer_hi": "पुंकेसर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the unit of electric charge?",
        "question_hi": "विद्युत आवेश की इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Coulomb", "Ohm"],
        "options_hi": ["वोल्ट", "एम्पियर", "कूलम्ब", "ओम"],
        "answer_en": "Coulomb",
        "answer_hi": "कूलम्ब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which gas is used in advertising signs?",
        "question_hi": "विज्ञापन साइनों में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Helium", "Neon", "Argon", "Xenon"],
        "options_hi": ["हीलियम", "नियॉन", "आर्गन", "जेनॉन"],
        "answer_en": "Neon",
        "answer_hi": "नियॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the hardest substance in the human body?",
        "question_hi": "मानव शरीर में सबसे कठोर पदार्थ क्या है?",
        "options_en": ["Bone", "Tooth enamel", "Nail", "Cartilage"],
        "options_hi": ["हड्डी", "दांत का इनेमल", "नाखून", "उपास्थि"],
        "answer_en": "Tooth enamel",
        "answer_hi": "दांत का इनेमल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which blood cells carry oxygen?",
        "question_hi": "कौन सी रक्त कोशिकाएं ऑक्सीजन ले जाती हैं?",
        "options_en": ["White blood cells", "Red blood cells", "Platelets", "Plasma"],
        "options_hi": ["श्वेत रक्त कोशिकाएं", "लाल रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
        "answer_en": "Red blood cells",
        "answer_hi": "लाल रक्त कोशिकाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the chemical name of laughing gas?",
        "question_hi": "हंसाने वाली गैस का रासायनिक नाम क्या है?",
        "options_en": ["Nitrous oxide", "Nitric oxide", "Nitrogen dioxide", "Ammonia"],
        "options_hi": ["नाइट्रस ऑक्साइड", "नाइट्रिक ऑक्साइड", "नाइट्रोजन डाइऑक्साइड", "अमोनिया"],
        "answer_en": "Nitrous oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which planet has the most volcanic activity?",
        "question_hi": "किस ग्रह पर सबसे अधिक ज्वालामुखी गतिविधि है?",
        "options_en": ["Mars", "Venus", "Earth", "Io (moon of Jupiter)"],
        "options_hi": ["मंगल", "शुक्र", "पृथ्वी", "आयो (बृहस्पति का चंद्रमा)"],
        "answer_en": "Io (moon of Jupiter)",
        "answer_hi": "आयो (बृहस्पति का चंद्रमा)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the study of rocks called?",
        "question_hi": "चट्टानों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Geology", "Petrology", "Mineralogy", "Seismology"],
        "options_hi": ["भूविज्ञान", "शैलविज्ञान", "खनिज विज्ञान", "भूकंप विज्ञान"],
        "answer_en": "Petrology",
        "answer_hi": "शैलविज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which metal is used in thermometers?",
        "question_hi": "थर्मामीटर में कौन सी धातु प्रयोग की जाती है?",
        "options_en": ["Copper", "Mercury", "Aluminum", "Silver"],
        "options_hi": ["तांबा", "पारा", "एल्युमिनियम", "चांदी"],
        "answer_en": "Mercury",
        "answer_hi": "पारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the smallest bone in human body?",
        "question_hi": "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
        "options_en": ["Femur", "Stapes", "Radius", "Ulna"],
        "options_hi": ["फीमर", "स्टेप्स", "रेडियस", "अल्ना"],
        "answer_en": "Stapes",
        "answer_hi": "स्टेप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which gas is responsible for acid rain?",
        "question_hi": "अम्ल वर्षा के लिए कौन सी गैस जिम्मेदार है?",
        "options_en": ["Carbon dioxide", "Sulfur dioxide", "Nitrogen", "Oxygen"],
        "options_hi": ["कार्बन डाइऑक्साइड", "सल्फर डाइऑक्साइड", "नाइट्रोजन", "ऑक्सीजन"],
        "answer_en": "Sulfur dioxide",
        "answer_hi": "सल्फर डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the SI unit of magnetic flux?",
        "question_hi": "चुंबकीय फ्लक्स की SI इकाई क्या है?",
        "options_en": ["Tesla", "Weber", "Henry", "Farad"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "फैरड"],
        "answer_en": "Weber",
        "answer_hi": "वेबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which vitamin is essential for blood clotting?",
        "question_hi": "रक्त के थक्के जमने के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन K"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the chemical symbol for Platinum?",
        "question_hi": "प्लैटिनम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Pl", "Pt", "Pn", "Pa"],
        "options_hi": ["Pl", "Pt", "Pn", "Pa"],
        "answer_en": "Pt",
        "answer_hi": "Pt",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which instrument is used to measure earthquake intensity?",
        "question_hi": "भूकंप की तीव्रता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Barometer", "Seismograph", "Hygrometer", "Anemometer"],
        "options_hi": ["बैरोमीटर", "सिस्मोग्राफ", "हाइग्रोमीटर", "एनीमोमीटर"],
        "answer_en": "Seismograph",
        "answer_hi": "सिस्मोग्राफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the main component of CNG?",
        "question_hi": "सीएनजी का मुख्य घटक क्या है?",
        "options_en": ["Propane", "Butane", "Methane", "Ethane"],
        "options_hi": ["प्रोपेन", "ब्यूटेन", "मीथेन", "ईथेन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which cell organelle contains chlorophyll?",
        "question_hi": "कौन सा कोशिका अंग क्लोरोफिल रखता है?",
        "options_en": ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"],
        "options_hi": ["माइटोकॉन्ड्रिया", "क्लोरोप्लास्ट", "केंद्रक", "राइबोसोम"],
        "answer_en": "Chloroplast",
        "answer_hi": "क्लोरोप्लास्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the unit of capacitance?",
        "question_hi": "धारिता की इकाई क्या है?",
        "options_en": ["Ohm", "Farad", "Henry", "Weber"],
        "options_hi": ["ओम", "फैरड", "हेनरी", "वेबर"],
        "answer_en": "Farad",
        "answer_hi": "फैरड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which acid is present in ant sting?",
        "question_hi": "चींटी के डंक में कौन सा अम्ल होता है?",
        "options_en": ["Acetic acid", "Formic acid", "Citric acid", "Lactic acid"],
        "options_hi": ["एसिटिक अम्ल", "फॉर्मिक अम्ल", "सिट्रिक अम्ल", "लैक्टिक अम्ल"],
        "answer_en": "Formic acid",
        "answer_hi": "फॉर्मिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the study of the universe called?",
        "question_hi": "ब्रह्मांड के अध्ययन को क्या कहते हैं?",
        "options_en": ["Astrology", "Astronomy", "Cosmology", "Geology"],
        "options_hi": ["ज्योतिष", "खगोल विज्ञान", "ब्रह्मांड विज्ञान", "भूविज्ञान"],
        "answer_en": "Cosmology",
        "answer_hi": "ब्रह्मांड विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which gas is used in photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण में कौन सी गैस प्रयोग होती है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the chemical formula of rust?",
        "question_hi": "जंग का रासायनिक सूत्र क्या है?",
        "options_en": ["FeO", "Fe₂O₃", "Fe₃O₄", "Fe(OH)₂"],
        "options_hi": ["FeO", "Fe₂O₃", "Fe₃O₄", "Fe(OH)₂"],
        "answer_en": "Fe₂O₃",
        "answer_hi": "Fe₂O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which planet has the Great Dark Spot?",
        "question_hi": "किस ग्रह पर ग्रेट डार्क स्पॉट है?",
        "options_en": ["Jupiter", "Saturn", "Neptune", "Uranus"],
        "options_hi": ["बृहस्पति", "शनि", "वरुण", "अरुण"],
        "answer_en": "Neptune",
        "answer_hi": "वरुण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the SI unit of inductance?",
        "question_hi": "प्रेरकत्व की SI इकाई क्या है?",
        "options_en": ["Farad", "Henry", "Weber", "Tesla"],
        "options_hi": ["फैरड", "हेनरी", "वेबर", "टेस्ला"],
        "answer_en": "Henry",
        "answer_hi": "हेनरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which vitamin deficiency causes pellagra?",
        "question_hi": "किस विटामिन की कमी से पेलाग्रा होता है?",
        "options_en": ["Vitamin B3", "Vitamin B1", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन B3", "विटामिन B1", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin B3",
        "answer_hi": "विटामिन B3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the chemical symbol for Silicon?",
        "question_hi": "सिलिकॉन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Si", "Sl", "Sc", "Sn"],
        "options_hi": ["Si", "Sl", "Sc", "Sn"],
        "answer_en": "Si",
        "answer_hi": "Si",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which gas is used in fluorescent tubes?",
        "question_hi": "फ्लोरोसेंट ट्यूबों में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Neon", "Argon", "Mercury vapor", "Xenon"],
        "options_hi": ["नियॉन", "आर्गन", "पारा वाष्प", "जेनॉन"],
        "answer_en": "Mercury vapor",
        "answer_hi": "पारा वाष्प",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the largest moon of Saturn?",
        "question_hi": "शनि का सबसे बड़ा चंद्रमा कौन सा है?",
        "options_en": ["Titan", "Rhea", "Iapetus", "Dione"],
        "options_hi": ["टाइटन", "रिया", "आयापेटस", "डायोन"],
        "answer_en": "Titan",
        "answer_hi": "टाइटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which part of the cell is called the 'brain of the cell'?",
        "question_hi": "कोशिका के किस भाग को 'कोशिका का मस्तिष्क' कहा जाता है?",
        "options_en": ["Mitochondria", "Nucleus", "Ribosome", "Golgi apparatus"],
        "options_hi": ["माइटोकॉन्ड्रिया", "केंद्रक", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the chemical formula of ethanol?",
        "question_hi": "एथनॉल का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₃OH", "C₂H₅OH", "C₃H₇OH", "C₄H₉OH"],
        "options_hi": ["CH₃OH", "C₂H₅OH", "C₃H₇OH", "C₄H₉OH"],
        "answer_en": "C₂H₅OH",
        "answer_hi": "C₂H₅OH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which instrument is used to measure blood pressure?",
        "question_hi": "रक्तचाप मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Stethoscope", "Sphygmomanometer", "Thermometer", "Barometer"],
        "options_hi": ["स्टेथोस्कोप", "स्फिग्मोमैनोमीटर", "थर्मामीटर", "बैरोमीटर"],
        "answer_en": "Sphygmomanometer",
        "answer_hi": "स्फिग्मोमैनोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the main component of diesel?",
        "question_hi": "डीजल का मुख्य घटक क्या है?",
        "options_en": ["Methane", "Propane", "Butane", "Hydrocarbons"],
        "options_hi": ["मीथेन", "प्रोपेन", "ब्यूटेन", "हाइड्रोकार्बन"],
        "answer_en": "Hydrocarbons",
        "answer_hi": "हाइड्रोकार्बन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which vitamin is also known as niacin?",
        "question_hi": "किस विटामिन को नियासिन के नाम से भी जाना जाता है?",
        "options_en": ["Vitamin B1", "Vitamin B2", "Vitamin B3", "Vitamin B6"],
        "options_hi": ["विटामिन B1", "विटामिन B2", "विटामिन B3", "विटामिन B6"],
        "answer_en": "Vitamin B3",
        "answer_hi": "विटामिन B3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the chemical symbol for Magnesium?",
        "question_hi": "मैग्नीशियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ma", "Mg", "Mn", "Ms"],
        "options_hi": ["Ma", "Mg", "Mn", "Ms"],
        "answer_en": "Mg",
        "answer_hi": "Mg",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which gas is used in anesthesia?",
        "question_hi": "एनेस्थीसिया में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Nitrous oxide", "Carbon dioxide", "Helium"],
        "options_hi": ["ऑक्सीजन", "नाइट्रस ऑक्साइड", "कार्बन डाइऑक्साइड", "हीलियम"],
        "answer_en": "Nitrous oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the smallest planet in our solar system?",
        "question_hi": "हमारे सौर मंडल का सबसे छोटा ग्रह कौन सा है?",
        "options_en": ["Mars", "Mercury", "Venus", "Pluto"],
        "options_hi": ["मंगल", "बुध", "शुक्र", "प्लूटो"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which part of the cell contains DNA?",
        "question_hi": "कोशिका का कौन सा भाग DNA रखता है?",
        "options_en": ["Cytoplasm", "Nucleus", "Mitochondria", "Ribosome"],
        "options_hi": ["कोशिका द्रव्य", "केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the chemical formula of propane?",
        "question_hi": "प्रोपेन का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "answer_en": "C₃H₈",
        "answer_hi": "C₃H₈",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which instrument is used to measure radioactivity?",
        "question_hi": "रेडियोधर्मिता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Geiger counter", "Barometer", "Thermometer", "Hygrometer"],
        "options_hi": ["गीगर काउंटर", "बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर"],
        "answer_en": "Geiger counter",
        "answer_hi": "गीगर काउंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the chemical symbol for Aluminum?",
        "question_hi": "एल्युमिनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Al", "Am", "An", "Au"],
        "options_hi": ["Al", "Am", "An", "Au"],
        "answer_en": "Al",
        "answer_hi": "Al",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which gas is used in cigarette lighters?",
        "question_hi": "सिगरेट लाइटर में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Methane", "Propane", "Butane", "Ethane"],
        "options_hi": ["मीथेन", "प्रोपेन", "ब्यूटेन", "ईथेन"],
        "answer_en": "Butane",
        "answer_hi": "ब्यूटेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the study of fish called?",
        "question_hi": "मछलियों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Ornithology", "Entomology", "Ichthyology", "Herpetology"],
        "options_hi": ["पक्षीविज्ञान", "कीटविज्ञान", "मत्स्यविज्ञान", "सरीसृपविज्ञान"],
        "answer_en": "Ichthyology",
        "answer_hi": "मत्स्यविज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which planet has the most eccentric orbit?",
        "question_hi": "किस ग्रह की कक्षा सबसे विलक्षण है?",
        "options_en": ["Mercury", "Venus", "Earth", "Mars"],
        "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the chemical formula of acetic acid?",
        "question_hi": "एसिटिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₃COOH", "H₂SO₄", "HCl", "HNO₃"],
        "options_hi": ["CH₃COOH", "H₂SO₄", "HCl", "HNO₃"],
        "answer_en": "CH₃COOH",
        "answer_hi": "CH₃COOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which vitamin is essential for collagen formation?",
        "question_hi": "कोलेजन निर्माण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the chemical symbol for Chromium?",
        "question_hi": "क्रोमियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ch", "Cr", "Cm", "Co"],
        "options_hi": ["Ch", "Cr", "Cm", "Co"],
        "answer_en": "Cr",
        "answer_hi": "Cr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which gas is used in deep sea diving?",
        "question_hi": "गहरे समुद्र में गोताखोरी के लिए कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Helium", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "हीलियम", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the study of reptiles called?",
        "question_hi": "सरीसृपों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Ornithology", "Entomology", "Herpetology", "Ichthyology"],
        "options_hi": ["पक्षीविज्ञान", "कीटविज्ञान", "सरीसृपविज्ञान", "मत्स्यविज्ञान"],
        "answer_en": "Herpetology",
        "answer_hi": "सरीसृपविज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which planet has the fastest rotation?",
        "question_hi": "किस ग्रह का घूर्णन सबसे तेज है?",
        "options_en": ["Jupiter", "Saturn", "Venus", "Mercury"],
        "options_hi": ["बृहस्पति", "शनि", "शुक्र", "बुध"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the chemical formula of nitric acid?",
        "question_hi": "नाइट्रिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["HNO₃", "H₂SO₄", "HCl", "CH₃COOH"],
        "options_hi": ["HNO₃", "H₂SO₄", "HCl", "CH₃COOH"],
        "answer_en": "HNO₃",
        "answer_hi": "HNO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which vitamin is essential for nerve function?",
        "question_hi": "तंत्रिका कार्य के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B1", "Vitamin B2", "Vitamin B12", "Vitamin C"],
        "options_hi": ["विटामिन B1", "विटामिन B2", "विटामिन B12", "विटामिन C"],
        "answer_en": "Vitamin B12",
        "answer_hi": "विटामिन B12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the chemical symbol for Manganese?",
        "question_hi": "मैंगनीज का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ma", "Mg", "Mn", "Ms"],
        "options_hi": ["Ma", "Mg", "Mn", "Ms"],
        "answer_en": "Mn",
        "answer_hi": "Mn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which gas is known as 'tear gas'?",
        "question_hi": "कौन सी गैस 'आंसू गैस' के नाम से जानी जाती है?",
        "options_en": ["Chlorine", "Ammonia", "CS gas", "Sulfur dioxide"],
        "options_hi": ["क्लोरीन", "अमोनिया", "सीएस गैस", "सल्फर डाइऑक्साइड"],
        "answer_en": "CS gas",
        "answer_hi": "सीएस गैस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the study of animal behavior called?",
        "question_hi": "पशु व्यवहार के अध्ययन को क्या कहते हैं?",
        "options_en": ["Ecology", "Ethology", "Zoology", "Biology"],
        "options_hi": ["पारिस्थितिकी", "एथोलॉजी", "प्राणी विज्ञान", "जीव विज्ञान"],
        "answer_en": "Ethology",
        "answer_hi": "एथोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which planet has the most circular orbit?",
        "question_hi": "किस ग्रह की कक्षा सबसे गोलाकार है?",
        "options_en": ["Venus", "Earth", "Mars", "Neptune"],
        "options_hi": ["शुक्र", "पृथ्वी", "मंगल", "वरुण"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the chemical formula of calcium carbonate?",
        "question_hi": "कैल्शियम कार्बोनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "options_hi": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "answer_en": "CaCO₃",
        "answer_hi": "CaCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which vitamin deficiency causes anemia?",
        "question_hi": "किस विटामिन की कमी से एनीमिया होता है?",
        "options_en": ["Vitamin B12", "Vitamin C", "Vitamin D", "Vitamin E"],
        "options_hi": ["विटामिन B12", "विटामिन C", "विटामिन D", "विटामिन E"],
        "answer_en": "Vitamin B12",
        "answer_hi": "विटामिन B12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the chemical symbol for Cobalt?",
        "question_hi": "कोबाल्ट का रासायनिक प्रतीक क्या है?",
        "options_en": ["Cb", "Co", "Ct", "Ca"],
        "options_hi": ["Cb", "Co", "Ct", "Ca"],
        "answer_en": "Co",
        "answer_hi": "Co",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which gas is used in weather balloons?",
        "question_hi": "मौसम गुब्बारों में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
        "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "हीलियम", "नाइट्रोजन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the study of tissues called?",
        "question_hi": "ऊतकों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Histology", "Cytology", "Pathology", "Anatomy"],
        "options_hi": ["ऊतक विज्ञान", "कोशिका विज्ञान", "रोग विज्ञान", "शरीर रचना विज्ञान"],
        "answer_en": "Histology",
        "answer_hi": "ऊतक विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which planet has the longest year?",
        "question_hi": "किस ग्रह का वर्ष सबसे लंबा है?",
        "options_en": ["Jupiter", "Saturn", "Neptune", "Uranus"],
        "options_hi": ["बृहस्पति", "शनि", "वरुण", "अरुण"],
        "answer_en": "Neptune",
        "answer_hi": "वरुण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the chemical formula of sodium hydroxide?",
        "question_hi": "सोडियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["NaOH", "NaCl", "Na₂CO₃", "NaHCO₃"],
        "options_hi": ["NaOH", "NaCl", "Na₂CO₃", "NaHCO₃"],
        "answer_en": "NaOH",
        "answer_hi": "NaOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which vitamin is essential for calcium absorption?",
        "question_hi": "कैल्शियम अवशोषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the chemical symbol for Nickel?",
        "question_hi": "निकेल का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ni", "Nk", "Nl", "Ne"],
        "options_hi": ["Ni", "Nk", "Nl", "Ne"],
        "answer_en": "Ni",
        "answer_hi": "Ni",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which gas is used in semiconductor industry?",
        "question_hi": "सेमीकंडक्टर उद्योग में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Nitrogen", "Argon", "Silane"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "सिलेन"],
        "answer_en": "Silane",
        "answer_hi": "सिलेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the study of cells called?",
        "question_hi": "कोशिकाओं के अध्ययन को क्या कहते हैं?",
        "options_en": ["Histology", "Cytology", "Pathology", "Anatomy"],
        "options_hi": ["ऊतक विज्ञान", "कोशिका विज्ञान", "रोग विज्ञान", "शरीर रचना विज्ञान"],
        "answer_en": "Cytology",
        "answer_hi": "कोशिका विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which planet has the shortest year?",
        "question_hi": "किस ग्रह का वर्ष सबसे छोटा है?",
        "options_en": ["Mercury", "Venus", "Earth", "Mars"],
        "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the chemical formula of potassium hydroxide?",
        "question_hi": "पोटेशियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["KOH", "KCl", "K₂CO₃", "KHCO₃"],
        "options_hi": ["KOH", "KCl", "K₂CO₃", "KHCO₃"],
        "answer_en": "KOH",
        "answer_hi": "KOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which vitamin is essential for antioxidant protection?",
        "question_hi": "एंटीऑक्सीडेंट सुरक्षा के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin E", "Vitamin K"],
        "options_hi": ["विटामिन A", "विटामिन C", "विटामिन E", "विटामिन K"],
        "answer_en": "Vitamin E",
        "answer_hi": "विटामिन E",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the chemical symbol for Zinc?",
        "question_hi": "जस्ते का रासायनिक प्रतीक क्या है?",
        "options_en": ["Zi", "Zn", "Zc", "Z"],
        "options_hi": ["Zi", "Zn", "Zc", "Z"],
        "answer_en": "Zn",
        "answer_hi": "Zn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which gas is used in food packaging?",
        "question_hi": "खाद्य पैकेजिंग में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हीलियम"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the study of drugs called?",
        "question_hi": "दवाओं के अध्ययन को क्या कहते हैं?",
        "options_en": ["Pharmacology", "Pharmacy", "Toxicology", "Pathology"],
        "options_hi": ["फार्माकोलॉजी", "फार्मेसी", "विष विज्ञान", "रोग विज्ञान"],
        "answer_en": "Pharmacology",
        "answer_hi": "फार्माकोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which planet has the most tilted axis?",
        "question_hi": "किस ग्रह का अक्ष सबसे अधिक झुका हुआ है?",
        "options_en": ["Earth", "Mars", "Uranus", "Neptune"],
        "options_hi": ["पृथ्वी", "मंगल", "अरुण", "वरुण"],
        "answer_en": "Uranus",
        "answer_hi": "अरुण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the chemical formula of magnesium hydroxide?",
        "question_hi": "मैग्नीशियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["MgO", "Mg(OH)₂", "MgCO₃", "MgSO₄"],
        "options_hi": ["MgO", "Mg(OH)₂", "MgCO₃", "MgSO₄"],
        "answer_en": "Mg(OH)₂",
        "answer_hi": "Mg(OH)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which vitamin is essential for DNA synthesis?",
        "question_hi": "DNA संश्लेषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B9", "Vitamin B12", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन B9", "विटामिन B12", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin B9",
        "answer_hi": "विटामिन B9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the chemical symbol for Silver?",
        "question_hi": "चांदी का रासायनिक प्रतीक क्या है?",
        "options_en": ["Si", "Sv", "Ag", "Au"],
        "options_hi": ["Si", "Sv", "Ag", "Au"],
        "answer_en": "Ag",
        "answer_hi": "Ag",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which gas is used in laser technology?",
        "question_hi": "लेजर प्रौद्योगिकी में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Helium", "Neon", "Carbon dioxide", "Argon"],
        "options_hi": ["हीलियम", "नियॉन", "कार्बन डाइऑक्साइड", "आर्गन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the study of heredity called?",
        "question_hi": "आनुवंशिकता के अध्ययन को क्या कहते हैं?",
        "options_en": ["Genetics", "Evolution", "Ecology", "Taxonomy"],
        "options_hi": ["आनुवंशिकी", "विकास", "पारिस्थितिकी", "वर्गीकरण विज्ञान"],
        "answer_en": "Genetics",
        "answer_hi": "आनुवंशिकी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
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
        "num": 91,
        "question_en": "What is the chemical formula of aluminum oxide?",
        "question_hi": "एल्युमिनियम ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["AlO", "Al₂O₃", "AlO₂", "Al₃O₂"],
        "options_hi": ["AlO", "Al₂O₃", "AlO₂", "Al₃O₂"],
        "answer_en": "Al₂O₃",
        "answer_hi": "Al₂O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which vitamin is essential for energy metabolism?",
        "question_hi": "ऊर्जा चयापचय के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B1", "Vitamin B2", "Vitamin B6", "All B vitamins"],
        "options_hi": ["विटामिन B1", "विटामिन B2", "विटामिन B6", "सभी B विटामिन"],
        "answer_en": "All B vitamins",
        "answer_hi": "सभी B विटामिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the chemical symbol for Gold?",
        "question_hi": "सोने का रासायनिक प्रतीक क्या है?",
        "options_en": ["Go", "Gd", "Au", "Ag"],
        "options_hi": ["Go", "Gd", "Au", "Ag"],
        "answer_en": "Au",
        "answer_hi": "Au",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which gas is used in neon signs?",
        "question_hi": "नियॉन साइनों में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Helium", "Neon", "Argon", "Xenon"],
        "options_hi": ["हीलियम", "नियॉन", "आर्गन", "जेनॉन"],
        "answer_en": "Neon",
        "answer_hi": "नियॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the study of plants called?",
        "question_hi": "पौधों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Botany", "Zoology", "Biology", "Ecology"],
        "options_hi": ["वनस्पति विज्ञान", "प्राणी विज्ञान", "जीव विज्ञान", "पारिस्थितिकी"],
        "answer_en": "Botany",
        "answer_hi": "वनस्पति विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which planet is known as the 'Water World'?",
        "question_hi": "कौन सा ग्रह 'वाटर वर्ल्ड' के नाम से जाना जाता है?",
        "options_en": ["Earth", "Mars", "Europa", "Titan"],
        "options_hi": ["पृथ्वी", "मंगल", "यूरोपा", "टाइटन"],
        "answer_en": "Earth",
        "answer_hi": "पृथ्वी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the chemical formula of iron oxide?",
        "question_hi": "आयरन ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["FeO", "Fe₂O₃", "Fe₃O₄", "All of these"],
        "options_hi": ["FeO", "Fe₂O₃", "Fe₃O₄", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which vitamin is essential for red blood cell formation?",
        "question_hi": "लाल रक्त कोशिका निर्माण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B6", "Vitamin B9", "Vitamin B12", "All of these"],
        "options_hi": ["विटामिन B6", "विटामिन B9", "विटामिन B12", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the chemical symbol for Uranium?",
        "question_hi": "यूरेनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ur", "Un", "U", "Um"],
        "options_hi": ["Ur", "Un", "U", "Um"],
        "answer_en": "U",
        "answer_hi": "U",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which gas is used in medical imaging?",
        "question_hi": "चिकित्सा इमेजिंग में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Xenon", "Helium", "Nitrogen"],
        "options_hi": ["ऑक्सीजन", "जेनॉन", "हीलियम", "नाइट्रोजन"],
        "answer_en": "Xenon",
        "answer_hi": "जेनॉन",
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