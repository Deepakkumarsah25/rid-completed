const questions = [
    {
        "num": 1,
        "question_en": "Which instrument is used to measure blood pressure?",
        "question_hi": "रक्तचाप मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Sphygmomanometer", "Stethoscope", "Thermometer", "Barometer"],
        "options_hi": ["स्फिग्मोमैनोमीटर", "स्टेथोस्कोप", "थर्मामीटर", "बैरोमीटर"],
        "answer_en": "Sphygmomanometer",
        "answer_hi": "स्फिग्मोमैनोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the chemical formula of laughing gas?",
        "question_hi": "हंसाने वाली गैस का रासायनिक सूत्र क्या है?",
        "options_en": ["N₂O", "NO₂", "NO", "N₂O₄"],
        "options_hi": ["N₂O", "NO₂", "NO", "N₂O₄"],
        "answer_en": "N₂O",
        "answer_hi": "N₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Who invented the telephone?",
        "question_hi": "टेलीफोन का आविष्कार किसने किया?",
        "options_en": ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
        "options_hi": ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "निकोला टेस्ला", "गुग्लील्मो मार्कोनी"],
        "answer_en": "Alexander Graham Bell",
        "answer_hi": "अलेक्जेंडर ग्राहम बेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the main component of vitamin B12?",
        "question_hi": "विटामिन B12 का मुख्य घटक क्या है?",
        "options_en": ["Cobalt", "Iron", "Zinc", "Copper"],
        "options_hi": ["कोबाल्ट", "आयरन", "जिंक", "कॉपर"],
        "answer_en": "Cobalt",
        "answer_hi": "कोबाल्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the SI unit of luminous flux?",
        "question_hi": "दीप्त फ्लक्स की SI इकाई क्या है?",
        "options_en": ["Lumen", "Lux", "Candela", "Watt"],
        "options_hi": ["ल्यूमेन", "लक्स", "कैंडेला", "वाट"],
        "answer_en": "Lumen",
        "answer_hi": "ल्यूमेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which gas is used in fire extinguishers?",
        "question_hi": "आग बुझाने के यंत्रों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Carbon dioxide", "Nitrogen", "Oxygen", "Helium"],
        "options_hi": ["कार्बन डाइऑक्साइड", "नाइट्रोजन", "ऑक्सीजन", "हीलियम"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the chemical formula of ozone?",
        "question_hi": "ओजोन का रासायनिक सूत्र क्या है?",
        "options_en": ["O₃", "O₂", "O₄", "HO₃"],
        "options_hi": ["O₃", "O₂", "O₄", "HO₃"],
        "answer_en": "O₃",
        "answer_hi": "O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which planet is known as Earth's twin?",
        "question_hi": "किस ग्रह को पृथ्वी का जुड़वां कहा जाता है?",
        "options_en": ["Venus", "Mars", "Mercury", "Jupiter"],
        "options_hi": ["शुक्र", "मंगल", "बुध", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the main component of tears?",
        "question_hi": "आँसू का मुख्य घटक क्या है?",
        "options_en": ["Water", "Oil", "Mucus", "All of these"],
        "options_hi": ["पानी", "तेल", "श्लेष्मा", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
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
        "num": 11,
        "question_en": "What is the chemical symbol for tungsten?",
        "question_hi": "टंगस्टन का रासायनिक प्रतीक क्या है?",
        "options_en": ["W", "Tu", "Tg", "Ts"],
        "options_hi": ["W", "Tu", "Tg", "Ts"],
        "answer_en": "W",
        "answer_hi": "W",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which vitamin is essential for collagen synthesis?",
        "question_hi": "कोलेजन संश्लेषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin K"],
        "options_hi": ["विटामिन सी", "विटामिन ए", "विटामिन डी", "विटामिन K"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन सी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the unit of radioactivity?",
        "question_hi": "रेडियोधर्मिता की इकाई क्या है?",
        "options_en": ["Becquerel", "Curie", "Both", "Gray"],
        "options_hi": ["बेकरेल", "क्यूरी", "दोनों", "ग्रे"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which metal is used in dental fillings?",
        "question_hi": "दंत भराव में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Amalgam", "Gold", "Silver", "All of these"],
        "options_hi": ["अमलगम", "सोना", "चांदी", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the chemical formula of quicklime?",
        "question_hi": "बिना बुझा चूना का रासायनिक सूत्र क्या है?",
        "options_en": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "options_hi": ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
        "answer_en": "CaO",
        "answer_hi": "CaO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which planet has the most volcanic activity?",
        "question_hi": "किस ग्रह पर सबसे अधिक ज्वालामुखी गतिविधि है?",
        "options_en": ["Venus", "Mars", "Earth", "Io (moon of Jupiter)"],
        "options_hi": ["शुक्र", "मंगल", "पृथ्वी", "आईओ (बृहस्पति का चंद्रमा)"],
        "answer_en": "Io (moon of Jupiter)",
        "answer_hi": "आईओ (बृहस्पति का चंद्रमा)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the study of fossils called?",
        "question_hi": "जीवाश्मों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Paleontology", "Archaeology", "Geology", "Anthropology"],
        "options_hi": ["जीवाश्मिकी", "पुरातत्व", "भूविज्ञान", "मानवविज्ञान"],
        "answer_en": "Paleontology",
        "answer_hi": "जीवाश्मिकी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which instrument is used to measure radiation?",
        "question_hi": "विकिरण मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Geiger counter", "Spectrometer", "Radiometer", "Dosimeter"],
        "options_hi": ["गाइगर काउंटर", "स्पेक्ट्रोमीटर", "रेडियोमीटर", "डोसीमीटर"],
        "answer_en": "Geiger counter",
        "answer_hi": "गाइगर काउंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the chemical symbol for platinum?",
        "question_hi": "प्लैटिनम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Pt", "Pl", "Pa", "Pm"],
        "options_hi": ["Pt", "Pl", "Pa", "Pm"],
        "answer_en": "Pt",
        "answer_hi": "Pt",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which vitamin is also known as tocopherol?",
        "question_hi": "किस विटामिन को टोकोफेरोल भी कहा जाता है?",
        "options_en": ["Vitamin E", "Vitamin K", "Vitamin D", "Vitamin A"],
        "options_hi": ["विटामिन ई", "विटामिन K", "विटामिन डी", "विटामिन ए"],
        "answer_en": "Vitamin E",
        "answer_hi": "विटामिन ई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the SI unit of electric capacitance?",
        "question_hi": "विद्युत धारिता की SI इकाई क्या है?",
        "options_en": ["Farad", "Henry", "Ohm", "Siemens"],
        "options_hi": ["फैरड", "हेनरी", "ओम", "सीमेंस"],
        "answer_en": "Farad",
        "answer_hi": "फैरड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which gas is responsible for acid rain?",
        "question_hi": "अम्लीय वर्षा के लिए कौन सी गैस जिम्मेदार है?",
        "options_en": ["Sulfur dioxide", "Carbon dioxide", "Nitrogen", "Oxygen"],
        "options_hi": ["सल्फर डाइऑक्साइड", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "ऑक्सीजन"],
        "answer_en": "Sulfur dioxide",
        "answer_hi": "सल्फर डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the chemical formula of hydrogen peroxide?",
        "question_hi": "हाइड्रोजन पेरोक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂O₂", "HO₂", "H₂O", "H₃O₂"],
        "options_hi": ["H₂O₂", "HO₂", "H₂O", "H₃O₂"],
        "answer_en": "H₂O₂",
        "answer_hi": "H₂O₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which planet has the longest day?",
        "question_hi": "किस ग्रह का दिन सबसे लंबा है?",
        "options_en": ["Venus", "Mercury", "Mars", "Jupiter"],
        "options_hi": ["शुक्र", "बुध", "मंगल", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the main component of gastric juice?",
        "question_hi": "गैस्ट्रिक जूस का मुख्य घटक क्या है?",
        "options_en": ["Hydrochloric acid", "Pepsin", "Mucus", "All of these"],
        "options_hi": ["हाइड्रोक्लोरिक अम्ल", "पेप्सिन", "श्लेष्मा", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which part of the plant conducts photosynthesis?",
        "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
        "options_en": ["Leaves", "Roots", "Stem", "Flowers"],
        "options_hi": ["पत्तियां", "जड़ें", "तना", "फूल"],
        "answer_en": "Leaves",
        "answer_hi": "पत्तियां",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the chemical symbol for uranium?",
        "question_hi": "यूरेनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["U", "Ur", "Un", "Um"],
        "options_hi": ["U", "Ur", "Un", "Um"],
        "answer_en": "U",
        "answer_hi": "U",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which vitamin deficiency causes osteomalacia?",
        "question_hi": "किस विटामिन की कमी से ऑस्टियोमलेशिया होता है?",
        "options_en": ["Vitamin D", "Vitamin C", "Vitamin K", "Vitamin B12"],
        "options_hi": ["विटामिन डी", "विटामिन सी", "विटामिन K", "विटामिन बी12"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the unit of magnetic flux?",
        "question_hi": "चुंबकीय फ्लक्स की इकाई क्या है?",
        "options_en": ["Weber", "Tesla", "Henry", "Gauss"],
        "options_hi": ["वेबर", "टेस्ला", "हेनरी", "गॉस"],
        "answer_en": "Weber",
        "answer_hi": "वेबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which metal is used in nuclear reactors?",
        "question_hi": "परमाणु रिएक्टरों में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Uranium", "Plutonium", "Both", "Thorium"],
        "options_hi": ["यूरेनियम", "प्लूटोनियम", "दोनों", "थोरियम"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the chemical formula of baking soda?",
        "question_hi": "बेकिंग सोडा का रासायनिक सूत्र क्या है?",
        "options_en": ["NaHCO₃", "Na₂CO₃", "NaOH", "NaCl"],
        "options_hi": ["NaHCO₃", "Na₂CO₃", "NaOH", "NaCl"],
        "answer_en": "NaHCO₃",
        "answer_hi": "NaHCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which planet has the most extreme seasons?",
        "question_hi": "किस ग्रह पर सबसे अधिक चरम ऋतुएं होती हैं?",
        "options_en": ["Uranus", "Mars", "Earth", "Saturn"],
        "options_hi": ["युरेनस", "मंगल", "पृथ्वी", "शनि"],
        "answer_en": "Uranus",
        "answer_hi": "युरेनस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the study of viruses called?",
        "question_hi": "वायरस के अध्ययन को क्या कहते हैं?",
        "options_en": ["Virology", "Bacteriology", "Mycology", "Parasitology"],
        "options_hi": ["वायरोलॉजी", "बैक्टीरियोलॉजी", "माइकोलॉजी", "परजीवी विज्ञान"],
        "answer_en": "Virology",
        "answer_hi": "वायरोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which instrument is used to measure sugar concentration?",
        "question_hi": "चीनी सांद्रता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Refractometer", "Spectrometer", "Polarimeter", "Hydrometer"],
        "options_hi": ["रिफ्रैक्टोमीटर", "स्पेक्ट्रोमीटर", "पोलरिमीटर", "हाइड्रोमीटर"],
        "answer_en": "Refractometer",
        "answer_hi": "रिफ्रैक्टोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the chemical symbol for chromium?",
        "question_hi": "क्रोमियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Cr", "Ch", "Cm", "Co"],
        "options_hi": ["Cr", "Ch", "Cm", "Co"],
        "answer_en": "Cr",
        "answer_hi": "Cr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which vitamin is essential for calcium absorption?",
        "question_hi": "कैल्शियम अवशोषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin D", "Vitamin C", "Vitamin K", "Vitamin A"],
        "options_hi": ["विटामिन डी", "विटामिन सी", "विटामिन K", "विटामिन ए"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the SI unit of inductance?",
        "question_hi": "प्रेरकत्व की SI इकाई क्या है?",
        "options_en": ["Henry", "Farad", "Ohm", "Weber"],
        "options_hi": ["हेनरी", "फैरड", "ओम", "वेबर"],
        "answer_en": "Henry",
        "answer_hi": "हेनरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which gas is used in neon signs?",
        "question_hi": "नीयन साइन में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Neon", "Argon", "Xenon", "All of these"],
        "options_hi": ["नियॉन", "आर्गन", "ज़ेनॉन", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the chemical formula of methane hydrate?",
        "question_hi": "मीथेन हाइड्रेट का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₄·nH₂O", "CH₄·H₂O", "CH₄·2H₂O", "CH₄·5H₂O"],
        "options_hi": ["CH₄·nH₂O", "CH₄·H₂O", "CH₄·2H₂O", "CH₄·5H₂O"],
        "answer_en": "CH₄·nH₂O",
        "answer_hi": "CH₄·nH₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which planet has the fastest winds?",
        "question_hi": "किस ग्रह पर सबसे तेज हवाएं चलती हैं?",
        "options_en": ["Neptune", "Jupiter", "Saturn", "Mars"],
        "options_hi": ["नेपच्यून", "बृहस्पति", "शनि", "मंगल"],
        "answer_en": "Neptune",
        "answer_hi": "नेपच्यून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the main component of sweat?",
        "question_hi": "पसीने का मुख्य घटक क्या है?",
        "options_en": ["Water", "Salt", "Urea", "All of these"],
        "options_hi": ["पानी", "नमक", "यूरिया", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which part of the flower produces pollen?",
        "question_hi": "फूल का कौन सा भाग पराग उत्पन्न करता है?",
        "options_en": ["Anther", "Stigma", "Petal", "Sepal"],
        "options_hi": ["पुंकेसर", "वर्तिकाग्र", "पंखुड़ी", "बाह्यदल"],
        "answer_en": "Anther",
        "answer_hi": "पुंकेसर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the chemical symbol for manganese?",
        "question_hi": "मैंगनीज का रासायनिक प्रतीक क्या है?",
        "options_en": ["Mn", "Mg", "Ma", "Mh"],
        "options_hi": ["Mn", "Mg", "Ma", "Mh"],
        "answer_en": "Mn",
        "answer_hi": "Mn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which vitamin deficiency causes hemorrhagic disease?",
        "question_hi": "किस विटामिन की कमी से रक्तस्रावी रोग होता है?",
        "options_en": ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin E"],
        "options_hi": ["विटामिन K", "विटामिन सी", "विटामिन डी", "विटामिन ई"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the unit of electric conductivity?",
        "question_hi": "विद्युत चालकता की इकाई क्या है?",
        "options_en": ["Siemens", "Mho", "Both", "Ohm"],
        "options_hi": ["सीमेंस", "म्हो", "दोनों", "ओम"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which metal is used in light bulbs?",
        "question_hi": "लाइट बल्ब में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Tungsten", "Copper", "Aluminum", "Iron"],
        "options_hi": ["टंगस्टन", "कॉपर", "एल्यूमिनियम", "आयरन"],
        "answer_en": "Tungsten",
        "answer_hi": "टंगस्टन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the chemical formula of washing soda?",
        "question_hi": "धोने का सोडा का रासायनिक सूत्र क्या है?",
        "options_en": ["Na₂CO₃·10H₂O", "NaHCO₃", "NaOH", "NaCl"],
        "options_hi": ["Na₂CO₃·10H₂O", "NaHCO₃", "NaOH", "NaCl"],
        "answer_en": "Na₂CO₃·10H₂O",
        "answer_hi": "Na₂CO₃·10H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which planet has the most elliptical orbit?",
        "question_hi": "किस ग्रह की कक्षा सबसे अधिक दीर्घवृत्ताकार है?",
        "options_en": ["Mercury", "Pluto (dwarf planet)", "Mars", "Venus"],
        "options_hi": ["बुध", "प्लूटो (बौना ग्रह)", "मंगल", "शुक्र"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the study of blood called?",
        "question_hi": "रक्त के अध्ययन को क्या कहते हैं?",
        "options_en": ["Hematology", "Cardiology", "Nephrology", "Neurology"],
        "options_hi": ["हीमेटोलॉजी", "हृदय रोग विज्ञान", "नेफ्रोलॉजी", "न्यूरोलॉजी"],
        "answer_en": "Hematology",
        "answer_hi": "हीमेटोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which instrument is used to measure radioactivity?",
        "question_hi": "रेडियोधर्मिता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Scintillation counter", "Geiger counter", "Both", "Dosimeter"],
        "options_hi": ["सिंटिलेशन काउंटर", "गाइगर काउंटर", "दोनों", "डोसीमीटर"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the chemical symbol for cobalt?",
        "question_hi": "कोबाल्ट का रासायनिक प्रतीक क्या है?",
        "options_en": ["Co", "Cb", "Ct", "Ca"],
        "options_hi": ["Co", "Cb", "Ct", "Ca"],
        "answer_en": "Co",
        "answer_hi": "Co",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which vitamin is essential for nerve function?",
        "question_hi": "तंत्रिका कार्य के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B12", "Vitamin B1", "Vitamin B6", "All of these"],
        "options_hi": ["विटामिन बी12", "विटामिन बी1", "विटामिन बी6", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the SI unit of magnetic field strength?",
        "question_hi": "चुंबकीय क्षेत्र शक्ति की SI इकाई क्या है?",
        "options_en": ["Tesla", "Weber", "Henry", "Gauss"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which gas is used in medical anesthesia?",
        "question_hi": "चिकित्सा संज्ञाहरण में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Nitrous oxide", "Xenon", "Both", "Oxygen"],
        "options_hi": ["नाइट्रस ऑक्साइड", "ज़ेनॉन", "दोनों", "ऑक्सीजन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the chemical formula of slaked lime?",
        "question_hi": "बुझा हुआ चूना का रासायनिक सूत्र क्या है?",
        "options_en": ["Ca(OH)₂", "CaO", "CaCO₃", "CaSO₄"],
        "options_hi": ["Ca(OH)₂", "CaO", "CaCO₃", "CaSO₄"],
        "answer_en": "Ca(OH)₂",
        "answer_hi": "Ca(OH)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which planet has the most methane in its atmosphere?",
        "question_hi": "किस ग्रह के वातावरण में सबसे अधिक मीथेन है?",
        "options_en": ["Uranus", "Neptune", "Saturn", "Jupiter"],
        "options_hi": ["युरेनस", "नेपच्यून", "शनि", "बृहस्पति"],
        "answer_en": "Uranus",
        "answer_hi": "युरेनस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the main component of lymph?",
        "question_hi": "लसीका का मुख्य घटक क्या है?",
        "options_en": ["Plasma", "White blood cells", "Water", "All of these"],
        "options_hi": ["प्लाज्मा", "श्वेत रक्त कोशिकाएं", "पानी", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which part of the plant absorbs water?",
        "question_hi": "पौधे का कौन सा भाग पानी अवशोषित करता है?",
        "options_en": ["Roots", "Leaves", "Stem", "Flowers"],
        "options_hi": ["जड़ें", "पत्तियां", "तना", "फूल"],
        "answer_en": "Roots",
        "answer_hi": "जड़ें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
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
        "num": 60,
        "question_en": "Which vitamin deficiency causes megaloblastic anemia?",
        "question_hi": "किस विटामिन की कमी से मेगालोब्लास्टिक एनीमिया होता है?",
        "options_en": ["Vitamin B12", "Folic acid", "Both", "Vitamin B6"],
        "options_hi": ["विटामिन बी12", "फोलिक अम्ल", "दोनों", "विटामिन बी6"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the unit of electric charge?",
        "question_hi": "विद्युत आवेश की इकाई क्या है?",
        "options_en": ["Coulomb", "Ampere", "Volt", "Ohm"],
        "options_hi": ["कूलॉम", "एम्पीयर", "वोल्ट", "ओम"],
        "answer_en": "Coulomb",
        "answer_hi": "कूलॉम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which metal is used in superconductors?",
        "question_hi": "सुपरकंडक्टर में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Niobium", "Yttrium", "Both", "Titanium"],
        "options_hi": ["नियोबियम", "इट्रियम", "दोनों", "टाइटेनियम"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the chemical formula of vinegar?",
        "question_hi": "सिरका का रासायनिक सूत्र क्या है?",
        "options_en": ["CH₃COOH", "HCOOH", "C₆H₈O₇", "H₂C₂O₄"],
        "options_hi": ["CH₃COOH", "HCOOH", "C₆H₈O₇", "H₂C₂O₄"],
        "answer_en": "CH₃COOH",
        "answer_hi": "CH₃COOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which planet has the most intense radiation belts?",
        "question_hi": "किस ग्रह पर सबसे तीव्र विकिरण बेल्ट हैं?",
        "options_en": ["Jupiter", "Saturn", "Earth", "Mars"],
        "options_hi": ["बृहस्पति", "शनि", "पृथ्वी", "मंगल"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the study of tissues called?",
        "question_hi": "ऊतकों के अध्ययन को क्या कहते हैं?",
        "options_en": ["Histology", "Cytology", "Pathology", "Embryology"],
        "options_hi": ["ऊतक विज्ञान", "कोशिका विज्ञान", "रोग विज्ञान", "भ्रूण विज्ञान"],
        "answer_en": "Histology",
        "answer_hi": "ऊतक विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which instrument is used to measure pH?",
        "question_hi": "pH मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["pH meter", "Litmus paper", "Both", "Spectrophotometer"],
        "options_hi": ["pH मीटर", "लिटमस पेपर", "दोनों", "स्पेक्ट्रोफोटोमीटर"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the chemical symbol for phosphorus?",
        "question_hi": "फास्फोरस का रासायनिक प्रतीक क्या है?",
        "options_en": ["P", "Ph", "Ps", "Po"],
        "options_hi": ["P", "Ph", "Ps", "Po"],
        "answer_en": "P",
        "answer_hi": "P",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which vitamin is essential for blood vessel health?",
        "question_hi": "रक्त वाहिका स्वास्थ्य के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin C", "Vitamin E", "Vitamin K", "All of these"],
        "options_hi": ["विटामिन सी", "विटामिन ई", "विटामिन K", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the SI unit of absorbed dose?",
        "question_hi": "अवशोषित खुराक की SI इकाई क्या है?",
        "options_en": ["Gray", "Sievert", "Becquerel", "Curie"],
        "options_hi": ["ग्रे", "सिवर्ट", "बेकरेल", "क्यूरी"],
        "answer_en": "Gray",
        "answer_hi": "ग्रे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which gas is used in weather balloons?",
        "question_hi": "मौसम गुब्बारों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Helium", "Hydrogen", "Both", "Neon"],
        "options_hi": ["हीलियम", "हाइड्रोजन", "दोनों", "नियॉन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the chemical formula of rust?",
        "question_hi": "जंग का रासायनिक सूत्र क्या है?",
        "options_en": ["Fe₂O₃·xH₂O", "FeO", "Fe₃O₄", "Fe(OH)₂"],
        "options_hi": ["Fe₂O₃·xH₂O", "FeO", "Fe₃O₄", "Fe(OH)₂"],
        "answer_en": "Fe₂O₃·xH₂O",
        "answer_hi": "Fe₂O₃·xH₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which planet has the most active magnetic field?",
        "question_hi": "किस ग्रह का सबसे सक्रिय चुंबकीय क्षेत्र है?",
        "options_en": ["Jupiter", "Saturn", "Earth", "Mercury"],
        "options_hi": ["बृहस्पति", "शनि", "पृथ्वी", "बुध"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the main component of synovial fluid?",
        "question_hi": "सिनोवियल द्रव का मुख्य घटक क्या है?",
        "options_en": ["Hyaluronic acid", "Water", "Proteins", "All of these"],
        "options_hi": ["हायलूरोनिक अम्ल", "पानी", "प्रोटीन", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which part of the plant stores food?",
        "question_hi": "पौधे का कौन सा भाग भोजन संचित करता है?",
        "options_en": ["Roots", "Stem", "Leaves", "All of these"],
        "options_hi": ["जड़ें", "तना", "पत्तियां", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
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
        "num": 76,
        "question_en": "Which vitamin deficiency causes night blindness?",
        "question_hi": "किस विटामिन की कमी से रतौंधी होती है?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
        "options_hi": ["विटामिन ए", "विटामिन सी", "विटामिन डी", "विटामिन ई"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन ए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the unit of electric potential?",
        "question_hi": "विद्युत विभव की इकाई क्या है?",
        "options_en": ["Volt", "Ohm", "Ampere", "Watt"],
        "options_hi": ["वोल्ट", "ओम", "एम्पीयर", "वाट"],
        "answer_en": "Volt",
        "answer_hi": "वोल्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which metal is used in spacecraft heat shields?",
        "question_hi": "अंतरिक्ष यान हीट शील्ड में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Titanium", "Carbon composites", "Both", "Aluminum"],
        "options_hi": ["टाइटेनियम", "कार्बन मिश्रित", "दोनों", "एल्यूमिनियम"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the chemical formula of gypsum?",
        "question_hi": "जिप्सम का रासायनिक सूत्र क्या है?",
        "options_en": ["CaSO₄·2H₂O", "CaSO₄", "CaCO₃", "Ca(OH)₂"],
        "options_hi": ["CaSO₄·2H₂O", "CaSO₄", "CaCO₃", "Ca(OH)₂"],
        "answer_en": "CaSO₄·2H₂O",
        "answer_hi": "CaSO₄·2H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which planet has the most extreme temperature variations?",
        "question_hi": "किस ग्रह पर सबसे अधिक चरम तापमान भिन्नता है?",
        "options_en": ["Mercury", "Venus", "Mars", "Earth"],
        "options_hi": ["बुध", "शुक्र", "मंगल", "पृथ्वी"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the study of cancer called?",
        "question_hi": "कैंसर के अध्ययन को क्या कहते हैं?",
        "options_en": ["Oncology", "Pathology", "Hematology", "Radiology"],
        "options_hi": ["ऑन्कोलॉजी", "रोग विज्ञान", "हीमेटोलॉजी", "रेडियोलॉजी"],
        "answer_en": "Oncology",
        "answer_hi": "ऑन्कोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which instrument is used to measure specific gravity?",
        "question_hi": "विशिष्ट गुरुत्व मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Hydrometer", "Pycnometer", "Both", "Densitometer"],
        "options_hi": ["हाइड्रोमीटर", "पिक्नोमीटर", "दोनों", "डेंसिटोमीटर"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the chemical symbol for boron?",
        "question_hi": "बोरॉन का रासायनिक प्रतीक क्या है?",
        "options_en": ["B", "Bo", "Br", "Bn"],
        "options_hi": ["B", "Bo", "Br", "Bn"],
        "answer_en": "B",
        "answer_hi": "B",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which vitamin is essential for immune function?",
        "question_hi": "प्रतिरक्षा कार्य के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin C", "Vitamin D", "Vitamin A", "All of these"],
        "options_hi": ["विटामिन सी", "विटामिन डी", "विटामिन ए", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the SI unit of equivalent dose?",
        "question_hi": "समतुल्य खुराक की SI इकाई क्या है?",
        "options_en": ["Sievert", "Gray", "Becquerel", "Curie"],
        "options_hi": ["सिवर्ट", "ग्रे", "बेकरेल", "क्यूरी"],
        "answer_en": "Sievert",
        "answer_hi": "सिवर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which gas is used in lasers?",
        "question_hi": "लेजर में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Helium-neon", "Argon", "Carbon dioxide", "All of these"],
        "options_hi": ["हीलियम-नियॉन", "आर्गन", "कार्बन डाइऑक्साइड", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the chemical formula of chalk?",
        "question_hi": "चॉक का रासायनिक सूत्र क्या है?",
        "options_en": ["CaCO₃", "CaSO₄", "CaO", "Ca(OH)₂"],
        "options_hi": ["CaCO₃", "CaSO₄", "CaO", "Ca(OH)₂"],
        "answer_en": "CaCO₃",
        "answer_hi": "CaCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which planet has the most circular orbit?",
        "question_hi": "किस ग्रह की कक्षा सबसे गोलाकार है?",
        "options_en": ["Venus", "Earth", "Neptune", "Mars"],
        "options_hi": ["शुक्र", "पृथ्वी", "नेपच्यून", "मंगल"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the main component of cerebrospinal fluid?",
        "question_hi": "सेरेब्रोस्पाइनल द्रव का मुख्य घटक क्या है?",
        "options_en": ["Water", "Electrolytes", "Glucose", "All of these"],
        "options_hi": ["पानी", "इलेक्ट्रोलाइट्स", "ग्लूकोज", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which part of the plant produces fruit?",
        "question_hi": "पौधे का कौन सा भाग फल उत्पन्न करता है?",
        "options_en": ["Ovary", "Stamen", "Petal", "Sepal"],
        "options_hi": ["अंडाशय", "पुंकेसर", "पंखुड़ी", "बाह्यदल"],
        "answer_en": "Ovary",
        "answer_hi": "अंडाशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the chemical symbol for arsenic?",
        "question_hi": "आर्सेनिक का रासायनिक प्रतीक क्या है?",
        "options_en": ["As", "Ar", "Ac", "An"],
        "options_hi": ["As", "Ar", "Ac", "An"],
        "answer_en": "As",
        "answer_hi": "As",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which vitamin deficiency causes dermatitis?",
        "question_hi": "किस विटामिन की कमी से डर्मेटाइटिस होता है?",
        "options_en": ["Vitamin B7 (Biotin)", "Vitamin B3", "Vitamin B6", "All of these"],
        "options_hi": ["विटामिन बी7 (बायोटिन)", "विटामिन बी3", "विटामिन बी6", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the unit of frequency?",
        "question_hi": "आवृत्ति की इकाई क्या है?",
        "options_en": ["Hertz", "Decibel", "Watt", "Joule"],
        "options_hi": ["हर्ट्ज", "डेसिबल", "वाट", "जूल"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which metal is used in MRI machines?",
        "question_hi": "एमआरआई मशीनों में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Niobium-titanium", "Copper", "Aluminum", "Iron"],
        "options_hi": ["नियोबियम-टाइटेनियम", "कॉपर", "एल्यूमिनियम", "आयरन"],
        "answer_en": "Niobium-titanium",
        "answer_hi": "नियोबियम-टाइटेनियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the chemical formula of plaster of Paris?",
        "question_hi": "प्लास्टर ऑफ पेरिस का रासायनिक सूत्र क्या है?",
        "options_en": ["CaSO₄·½H₂O", "CaSO₄·2H₂O", "CaCO₃", "Ca(OH)₂"],
        "options_hi": ["CaSO₄·½H₂O", "CaSO₄·2H₂O", "CaCO₃", "Ca(OH)₂"],
        "answer_en": "CaSO₄·½H₂O",
        "answer_hi": "CaSO₄·½H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which planet has the most visible rings?",
        "question_hi": "किस ग्रह के सबसे अधिक दिखाई देने वाले वलय हैं?",
        "options_en": ["Saturn", "Jupiter", "Uranus", "Neptune"],
        "options_hi": ["शनि", "बृहस्पति", "युरेनस", "नेपच्यून"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the study of hormones called?",
        "question_hi": "हार्मोन के अध्ययन को क्या कहते हैं?",
        "options_en": ["Endocrinology", "Neurology", "Cardiology", "Nephrology"],
        "options_hi": ["एंडोक्राइनोलॉजी", "न्यूरोलॉजी", "हृदय रोग विज्ञान", "नेफ्रोलॉजी"],
        "answer_en": "Endocrinology",
        "answer_hi": "एंडोक्राइनोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which instrument is used to measure wind direction?",
        "question_hi": "हवा की दिशा मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Wind vane", "Anemometer", "Both", "Barometer"],
        "options_hi": ["वायु दिशा सूचक", "एनीमोमीटर", "दोनों", "बैरोमीटर"],
        "answer_en": "Wind vane",
        "answer_hi": "वायु दिशा सूचक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the chemical symbol for helium?",
        "question_hi": "हीलियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["He", "Hl", "Hm", "Hy"],
        "options_hi": ["He", "Hl", "Hm", "Hy"],
        "answer_en": "He",
        "answer_hi": "He",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which vitamin is essential for DNA synthesis?",
        "question_hi": "DNA संश्लेषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Folic acid", "Vitamin B12", "Both", "Vitamin C"],
        "options_hi": ["फोलिक अम्ल", "विटामिन बी12", "दोनों", "विटामिन सी"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
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