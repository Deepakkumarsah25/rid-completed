const questions = [
    {
        "num": 1,
        "question_en": "Which metal is used in making mirrors?",
        "question_hi": "दर्पण बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Silver", "Aluminum", "Mercury", "Both A and B"],
        "options_hi": ["चांदी", "एल्युमीनियम", "पारा", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the chemical formula of laughing gas?",
        "question_hi": "हंसाने वाली गैस का रासायनिक सूत्र क्या है?",
        "options_en": ["N₂O", "NO₂", "NO", "N₂O₃"],
        "options_hi": ["N₂O", "NO₂", "NO", "N₂O₃"],
        "answer_en": "N₂O",
        "answer_hi": "N₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which scientist discovered the electron?",
        "question_hi": "किस वैज्ञानिक ने इलेक्ट्रॉन की खोज की?",
        "options_en": ["J.J. Thomson", "Ernest Rutherford", "Niels Bohr", "James Chadwick"],
        "options_hi": ["जे.जे. थॉमसन", "अर्नेस्ट रदरफोर्ड", "नील्स बोहर", "जेम्स चैडविक"],
        "answer_en": "J.J. Thomson",
        "answer_hi": "जे.जे. थॉमसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the main component of CNG?",
        "question_hi": "सीएनजी का मुख्य घटक क्या है?",
        "options_en": ["Methane", "Ethane", "Propane", "Butane"],
        "options_hi": ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which gland produces adrenaline?",
        "question_hi": "कौन सी ग्रंथि एड्रेनालाईन उत्पन्न करती है?",
        "options_en": ["Adrenal gland", "Thyroid gland", "Pituitary gland", "Pancreas"],
        "options_hi": ["अधिवृक्क ग्रंथि", "थायरॉयड ग्रंथि", "पिट्यूटरी ग्रंथि", "अग्न्याशय"],
        "answer_en": "Adrenal gland",
        "answer_hi": "अधिवृक्क ग्रंथि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the chemical name of blue vitriol?",
        "question_hi": "नीले थोथे का रासायनिक नाम क्या है?",
        "options_en": ["Copper sulfate", "Copper oxide", "Copper chloride", "Copper nitrate"],
        "options_hi": ["कॉपर सल्फेट", "कॉपर ऑक्साइड", "कॉपर क्लोराइड", "कॉपर नाइट्रेट"],
        "answer_en": "Copper sulfate",
        "answer_hi": "कॉपर सल्फेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which vitamin is also known as calciferol?",
        "question_hi": "किस विटामिन को कैल्सीफेरोल भी कहा जाता है?",
        "options_en": ["Vitamin D", "Vitamin K", "Vitamin E", "Vitamin A"],
        "options_hi": ["विटामिन डी", "विटामिन K", "विटामिन ई", "विटामिन ए"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the SI unit of electric current?",
        "question_hi": "विद्युत धारा की SI इकाई क्या है?",
        "options_en": ["Ampere", "Volt", "Ohm", "Watt"],
        "options_hi": ["एम्पीयर", "वोल्ट", "ओम", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पीयर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which metal is used in making electric wires?",
        "question_hi": "बिजली के तार बनाने में किस धातु का उपयोग किया जाता है?",
        "options_en": ["Copper", "Aluminum", "Both", "Iron"],
        "options_hi": ["तांबा", "एल्युमीनियम", "दोनों", "लोहा"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the chemical formula of hydrogen sulfide?",
        "question_hi": "हाइड्रोजन सल्फाइड का रासायनिक सूत्र क्या है?",
        "options_en": ["H₂S", "HS", "H₂SO₄", "H₂SO₃"],
        "options_hi": ["H₂S", "HS", "H₂SO₄", "H₂SO₃"],
        "answer_en": "H₂S",
        "answer_hi": "H₂S",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which part of the plant is modified into a ginger?",
        "question_hi": "पौधे का कौन सा भाग अदरक में परिवर्तित होता है?",
        "options_en": ["Root", "Stem", "Rhizome", "Bulb"],
        "options_hi": ["जड़", "तना", "प्रकंद", "कंद"],
        "answer_en": "Rhizome",
        "answer_hi": "प्रकंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the most abundant element in the universe?",
        "question_hi": "ब्रह्मांड में सबसे प्रचुर तत्व कौन सा है?",
        "options_en": ["Hydrogen", "Helium", "Oxygen", "Carbon"],
        "options_hi": ["हाइड्रोजन", "हीलियम", "ऑक्सीजन", "कार्बन"],
        "answer_en": "Hydrogen",
        "answer_hi": "हाइड्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which gas is used in balloons for lifting?",
        "question_hi": "गुब्बारों को उठाने के लिए किस गैस का उपयोग किया जाता है?",
        "options_en": ["Helium", "Hydrogen", "Both", "Neon"],
        "options_hi": ["हीलियम", "हाइड्रोजन", "दोनों", "नियॉन"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the human body temperature in Fahrenheit?",
        "question_hi": "मानव शरीर का तापमान फारेनहाइट में क्या है?",
        "options_en": ["98.6°F", "100°F", "96.8°F", "102°F"],
        "options_hi": ["98.6°F", "100°F", "96.8°F", "102°F"],
        "answer_en": "98.6°F",
        "answer_hi": "98.6°F",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which planet is known as the Red Planet?",
        "question_hi": "किस ग्रह को लाल ग्रह कहा जाता है?",
        "options_en": ["Mars", "Venus", "Jupiter", "Saturn"],
        "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the chemical symbol for potassium?",
        "question_hi": "पोटेशियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["K", "P", "Po", "Ka"],
        "options_hi": ["K", "P", "Po", "Ka"],
        "answer_en": "K",
        "answer_hi": "K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which vitamin deficiency causes osteomalacia?",
        "question_hi": "किस विटामिन की कमी से ऑस्टियोमलेशिया होता है?",
        "options_en": ["Vitamin D", "Vitamin C", "Vitamin K", "Vitamin A"],
        "options_hi": ["विटामिन डी", "विटामिन सी", "विटामिन K", "विटामिन ए"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन डी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the unit of angular momentum?",
        "question_hi": "कोणीय संवेग की इकाई क्या है?",
        "options_en": ["kg·m²/s", "N·m·s", "Both", "J·s"],
        "options_hi": ["किलोग्राम·मीटर²/सेकंड", "न्यूटन·मीटर·सेकंड", "दोनों", "जूल·सेकंड"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which acid is used in the production of fertilizers?",
        "question_hi": "उर्वरक उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Nitric acid", "Phosphoric acid", "All of these"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "फॉस्फोरिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the chemical formula of sodium carbonate?",
        "question_hi": "सोडियम कार्बोनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["Na₂CO₃", "NaHCO₃", "NaOH", "Na₂O"],
        "options_hi": ["Na₂CO₃", "NaHCO₃", "NaOH", "Na₂O"],
        "answer_en": "Na₂CO₃",
        "answer_hi": "Na₂CO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which is the brightest star in the night sky?",
        "question_hi": "रात के आकाश में सबसे चमकीला तारा कौन सा है?",
        "options_en": ["Sirius", "Polaris", "Vega", "Betelgeuse"],
        "options_hi": ["सीरियस", "पोलारिस", "वेगा", "बीटलजूस"],
        "answer_en": "Sirius",
        "answer_hi": "सीरियस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the chemical symbol for magnesium?",
        "question_hi": "मैग्नीशियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Mg", "Mn", "Ma", "M"],
        "options_hi": ["Mg", "Mn", "Ma", "M"],
        "answer_en": "Mg",
        "answer_hi": "Mg",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which vitamin is essential for collagen synthesis?",
        "question_hi": "कोलेजन संश्लेषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin E"],
        "options_hi": ["विटामिन सी", "विटामिन ए", "विटामिन डी", "विटामिन ई"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन सी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the unit of electric field?",
        "question_hi": "विद्युत क्षेत्र की इकाई क्या है?",
        "options_en": ["N/C", "V/m", "Both", "J/C"],
        "options_hi": ["N/C", "V/m", "दोनों", "J/C"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which acid is used in the production of plastics?",
        "question_hi": "प्लास्टिक उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Phthalic acid", "Acetic acid", "Citric acid", "Formic acid"],
        "options_hi": ["थैलिक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "फॉर्मिक अम्ल"],
        "answer_en": "Phthalic acid",
        "answer_hi": "थैलिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the chemical formula of potassium nitrate?",
        "question_hi": "पोटेशियम नाइट्रेट का रासायनिक सूत्र क्या है?",
        "options_en": ["KNO₃", "KNO₂", "K₂NO₃", "K₃NO₄"],
        "options_hi": ["KNO₃", "KNO₂", "K₂NO₃", "K₃NO₄"],
        "answer_en": "KNO₃",
        "answer_hi": "KNO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which planet has the most elliptical orbit?",
        "question_hi": "किस ग्रह की कक्षा सबसे अधिक दीर्घवृत्ताकार है?",
        "options_en": ["Mercury", "Venus", "Earth", "Mars"],
        "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
        "answer_en": "Mercury",
        "answer_hi": "बुध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the chemical symbol for calcium?",
        "question_hi": "कैल्शियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ca", "C", "Cl", "Cu"],
        "options_hi": ["Ca", "C", "Cl", "Cu"],
        "answer_en": "Ca",
        "answer_hi": "Ca",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which vitamin deficiency causes xerophthalmia?",
        "question_hi": "किस विटामिन की कमी से ज़ीरोफ्थाल्मिया होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन ए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the unit of magnetic flux density?",
        "question_hi": "चुंबकीय फ्लक्स घनत्व की इकाई क्या है?",
        "options_en": ["Tesla", "Weber", "Henry", "Gauss"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which acid is present in gastric juice?",
        "question_hi": "गैस्ट्रिक जूस में कौन सा अम्ल मौजूद होता है?",
        "options_en": ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Phosphoric acid"],
        "options_hi": ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "फॉस्फोरिक अम्ल"],
        "answer_en": "Hydrochloric acid",
        "answer_hi": "हाइड्रोक्लोरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the chemical formula of carbon disulfide?",
        "question_hi": "कार्बन डाइसल्फाइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CS₂", "C₂S", "CS", "C₂S₂"],
        "options_hi": ["CS₂", "C₂S", "CS", "C₂S₂"],
        "answer_en": "CS₂",
        "answer_hi": "CS₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which planet has the most extreme seasons?",
        "question_hi": "किस ग्रह पर सबसे अधिक चरम ऋतुएँ होती हैं?",
        "options_en": ["Uranus", "Neptune", "Saturn", "Jupiter"],
        "options_hi": ["युरेनस", "नेपच्यून", "शनि", "बृहस्पति"],
        "answer_en": "Uranus",
        "answer_hi": "युरेनस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
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
        "num": 35,
        "question_en": "Which vitamin is essential for blood clotting?",
        "question_hi": "रक्त के थक्के बनने के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin E"],
        "options_hi": ["विटामिन K", "विटामिन सी", "विटामिन डी", "विटामिन ई"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the unit of specific heat capacity?",
        "question_hi": "विशिष्ट ऊष्मा धारिता की इकाई क्या है?",
        "options_en": ["J/kg·K", "cal/g·°C", "Both", "W/m·K"],
        "options_hi": ["J/kg·K", "cal/g·°C", "दोनों", "W/m·K"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which acid is used in the production of synthetic fibers?",
        "question_hi": "सिंथेटिक फाइबर उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Terephthalic acid", "Adipic acid", "Both", "Formic acid"],
        "options_hi": ["टेरेफ्थैलिक अम्ल", "एडिपिक अम्ल", "दोनों", "फॉर्मिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the chemical formula of potassium dichromate?",
        "question_hi": "पोटेशियम डाइक्रोमेट का रासायनिक सूत्र क्या है?",
        "options_en": ["K₂Cr₂O₇", "KCrO₄", "K₂CrO₄", "KMnO₄"],
        "options_hi": ["K₂Cr₂O₇", "KCrO₄", "K₂CrO₄", "KMnO₄"],
        "answer_en": "K₂Cr₂O₇",
        "answer_hi": "K₂Cr₂O₇",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which planet has the most volcanic activity?",
        "question_hi": "किस ग्रह पर सबसे अधिक ज्वालामुखी गतिविधि है?",
        "options_en": ["Io (moon)", "Venus", "Mars", "Earth"],
        "options_hi": ["आईओ (चंद्रमा)", "शुक्र", "मंगल", "पृथ्वी"],
        "answer_en": "Io (moon)",
        "answer_hi": "आईओ (चंद्रमा)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the chemical symbol for barium?",
        "question_hi": "बेरियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ba", "Br", "Bm", "Bi"],
        "options_hi": ["Ba", "Br", "Bm", "Bi"],
        "answer_en": "Ba",
        "answer_hi": "Ba",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which vitamin deficiency causes paresthesia?",
        "question_hi": "किस विटामिन की कमी से पेरेस्थेसिया होता है?",
        "options_en": ["Vitamin B12", "Vitamin B6", "Vitamin B1", "All of these"],
        "options_hi": ["विटामिन बी12", "विटामिन बी6", "विटामिन बी1", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the unit of electric displacement?",
        "question_hi": "विद्युत विस्थापन की इकाई क्या है?",
        "options_en": ["C/m²", "A/m", "V/m", "T"],
        "options_hi": ["C/m²", "A/m", "V/m", "T"],
        "answer_en": "C/m²",
        "answer_hi": "C/m²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which acid is used in the production of dyes?",
        "question_hi": "रंगों के उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfuric acid", "Nitric acid", "Hydrochloric acid", "All of these"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the chemical formula of sodium thiosulfate?",
        "question_hi": "सोडियम थायोसल्फेट का रासायनिक सूत्र क्या है?",
        "options_en": ["Na₂S₂O₃", "Na₂SO₄", "Na₂SO₃", "Na₂S₂O₈"],
        "options_hi": ["Na₂S₂O₃", "Na₂SO₄", "Na₂SO₃", "Na₂S₂O₈"],
        "answer_en": "Na₂S₂O₃",
        "answer_hi": "Na₂S₂O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which planet has the longest orbital period?",
        "question_hi": "किस ग्रह की कक्षीय अवधि सबसे लंबी है?",
        "options_en": ["Neptune", "Uranus", "Saturn", "Jupiter"],
        "options_hi": ["नेपच्यून", "युरेनस", "शनि", "बृहस्पति"],
        "answer_en": "Neptune",
        "answer_hi": "नेपच्यून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the chemical symbol for bromine?",
        "question_hi": "ब्रोमीन का रासायनिक प्रतीक क्या है?",
        "options_en": ["Br", "Bm", "Bn", "Bo"],
        "options_hi": ["Br", "Bm", "Bn", "Bo"],
        "answer_en": "Br",
        "answer_hi": "Br",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which vitamin deficiency causes angular cheilitis?",
        "question_hi": "किस विटामिन की कमी से एंगुलर चीलाइटिस होता है?",
        "options_en": ["Vitamin B2", "Vitamin B12", "Vitamin B6", "Vitamin B3"],
        "options_hi": ["विटामिन बी2", "विटामिन बी12", "विटामिन बी6", "विटामिन बी3"],
        "answer_en": "Vitamin B2",
        "answer_hi": "विटामिन बी2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the unit of electric polarization?",
        "question_hi": "विद्युत ध्रुवीकरण की इकाई क्या है?",
        "options_en": ["C/m²", "A/m", "V/m", "N/C"],
        "options_hi": ["C/m²", "A/m", "V/m", "N/C"],
        "answer_en": "C/m²",
        "answer_hi": "C/m²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which acid is used in the production of aspirin?",
        "question_hi": "एस्पिरिन उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Salicylic acid", "Acetic anhydride", "Both", "Formic acid"],
        "options_hi": ["सैलिसिलिक अम्ल", "एसिटिक एनहाइड्राइड", "दोनों", "फॉर्मिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the chemical formula of calcium phosphate?",
        "question_hi": "कैल्शियम फॉस्फेट का रासायनिक सूत्र क्या है?",
        "options_en": ["Ca₃(PO₄)₂", "CaHPO₄", "Ca(H₂PO₄)₂", "All of these"],
        "options_hi": ["Ca₃(PO₄)₂", "CaHPO₄", "Ca(H₂PO₄)₂", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which planet has the strongest winds?",
        "question_hi": "किस ग्रह पर सबसे तेज हवाएं चलती हैं?",
        "options_en": ["Neptune", "Jupiter", "Saturn", "Uranus"],
        "options_hi": ["नेपच्यून", "बृहस्पति", "शनि", "युरेनस"],
        "answer_en": "Neptune",
        "answer_hi": "नेपच्यून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
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
        "num": 53,
        "question_en": "Which vitamin is essential for DNA synthesis?",
        "question_hi": "DNA संश्लेषण के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B9", "Vitamin B12", "Both", "Vitamin B6"],
        "options_hi": ["विटामिन बी9", "विटामिन बी12", "दोनों", "विटामिन बी6"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the unit of gravitational constant?",
        "question_hi": "गुरुत्वाकर्षण स्थिरांक की इकाई क्या है?",
        "options_en": ["N·m²/kg²", "m³/kg·s²", "Both", "kg·m/s²"],
        "options_hi": ["N·m²/kg²", "m³/kg·s²", "दोनों", "kg·m/s²"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which acid is used in the production of vinegar?",
        "question_hi": "सिरका उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetic acid", "Citric acid", "Lactic acid", "Tartaric acid"],
        "options_hi": ["एसिटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल", "टार्टरिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the chemical formula of magnesium hydroxide?",
        "question_hi": "मैग्नीशियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["Mg(OH)₂", "MgO", "MgCO₃", "MgSO₄"],
        "options_hi": ["Mg(OH)₂", "MgO", "MgCO₃", "MgSO₄"],
        "answer_en": "Mg(OH)₂",
        "answer_hi": "Mg(OH)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which planet has the most extreme axial tilt?",
        "question_hi": "किस ग्रह का अक्षीय झुकाव सबसे अधिक चरम है?",
        "options_en": ["Uranus", "Neptune", "Saturn", "Jupiter"],
        "options_hi": ["युरेनस", "नेपच्यून", "शनि", "बृहस्पति"],
        "answer_en": "Uranus",
        "answer_hi": "युरेनस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the chemical symbol for germanium?",
        "question_hi": "जर्मेनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ge", "Gm", "Gr", "Ga"],
        "options_hi": ["Ge", "Gm", "Gr", "Ga"],
        "answer_en": "Ge",
        "answer_hi": "Ge",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which vitamin deficiency causes photophobia?",
        "question_hi": "किस विटामिन की कमी से फोटोफोबिया होता है?",
        "options_en": ["Vitamin B2", "Vitamin A", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन बी2", "विटामिन ए", "विटामिन सी", "विटामिन डी"],
        "answer_en": "Vitamin B2",
        "answer_hi": "विटामिन बी2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the unit of permeability?",
        "question_hi": "पारगम्यता की इकाई क्या है?",
        "options_en": ["H/m", "T/A", "Both", "Wb/A"],
        "options_hi": ["H/m", "T/A", "दोनों", "Wb/A"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which acid is used in the production of paints?",
        "question_hi": "पेंट उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Phthalic acid", "Acetic acid", "Citric acid", "Formic acid"],
        "options_hi": ["थैलिक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "फॉर्मिक अम्ल"],
        "answer_en": "Phthalic acid",
        "answer_hi": "थैलिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the chemical formula of potassium hydroxide?",
        "question_hi": "पोटेशियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["KOH", "K₂O", "K₂CO₃", "KNO₃"],
        "options_hi": ["KOH", "K₂O", "K₂CO₃", "KNO₃"],
        "answer_en": "KOH",
        "answer_hi": "KOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
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
        "num": 64,
        "question_en": "What is the chemical symbol for zirconium?",
        "question_hi": "जिरकोनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Zr", "Zi", "Zc", "Zm"],
        "options_hi": ["Zr", "Zi", "Zc", "Zm"],
        "answer_en": "Zr",
        "answer_hi": "Zr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which vitamin deficiency causes neural tube defects?",
        "question_hi": "किस विटामिन की कमी से न्यूरल ट्यूब दोष होते हैं?",
        "options_en": ["Vitamin B9", "Vitamin B12", "Vitamin B6", "Vitamin B1"],
        "options_hi": ["विटामिन बी9", "विटामिन बी12", "विटामिन बी6", "विटामिन बी1"],
        "answer_en": "Vitamin B9",
        "answer_hi": "विटामिन बी9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the unit of electric mobility?",
        "question_hi": "विद्युत गतिशीलता की इकाई क्या है?",
        "options_en": ["m²/V·s", "cm²/V·s", "Both", "A·m²/V"],
        "options_hi": ["m²/V·s", "cm²/V·s", "दोनों", "A·m²/V"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which acid is used in the production of rubber?",
        "question_hi": "रबर उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Formic acid", "Acetic acid", "Both", "Tartaric acid"],
        "options_hi": ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "दोनों", "टार्टरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the chemical formula of sodium bicarbonate?",
        "question_hi": "सोडियम बाइकार्बोनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["NaHCO₃", "Na₂CO₃", "NaOH", "Na₂SO₄"],
        "options_hi": ["NaHCO₃", "Na₂CO₃", "NaOH", "Na₂SO₄"],
        "answer_en": "NaHCO₃",
        "answer_hi": "NaHCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which planet has the strongest magnetic field?",
        "question_hi": "किस ग्रह का चुंबकीय क्षेत्र सबसे शक्तिशाली है?",
        "options_en": ["Jupiter", "Saturn", "Earth", "Neptune"],
        "options_hi": ["बृहस्पति", "शनि", "पृथ्वी", "नेपच्यून"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the chemical symbol for hafnium?",
        "question_hi": "हाफ्नियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Hf", "Ha", "Hn", "Hm"],
        "options_hi": ["Hf", "Ha", "Hn", "Hm"],
        "answer_en": "Hf",
        "answer_hi": "Hf",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which vitamin is essential for antioxidant defense?",
        "question_hi": "एंटीऑक्सीडेंट रक्षा के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin E", "Vitamin C", "Both", "Vitamin A"],
        "options_hi": ["विटामिन ई", "विटामिन सी", "दोनों", "विटामिन ए"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the unit of electric susceptibility?",
        "question_hi": "विद्युत संवेदनशीलता की इकाई क्या है?",
        "options_en": ["Dimensionless", "C/m²", "V/m", "A/m"],
        "options_hi": ["आयामहीन", "C/m²", "V/m", "A/m"],
        "answer_en": "Dimensionless",
        "answer_hi": "आयामहीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which acid is used in the production of paper?",
        "question_hi": "कागज उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfurous acid", "Sulfuric acid", "Both", "Hydrochloric acid"],
        "options_hi": ["सल्फ्यूरस अम्ल", "सल्फ्यूरिक अम्ल", "दोनों", "हाइड्रोक्लोरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the chemical formula of calcium oxide?",
        "question_hi": "कैल्शियम ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CaO", "CaCO₃", "Ca(OH)₂", "CaSO₄"],
        "options_hi": ["CaO", "CaCO₃", "Ca(OH)₂", "CaSO₄"],
        "answer_en": "CaO",
        "answer_hi": "CaO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which planet has the most prominent auroras?",
        "question_hi": "किस ग्रह पर सबसे प्रमुख अरोरा होते हैं?",
        "options_en": ["Jupiter", "Saturn", "Earth", "All of these"],
        "options_hi": ["बृहस्पति", "शनि", "पृथ्वी", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the chemical symbol for niobium?",
        "question_hi": "नायोबियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Nb", "Ni", "No", "Nm"],
        "options_hi": ["Nb", "Ni", "No", "Nm"],
        "answer_en": "Nb",
        "answer_hi": "Nb",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which vitamin is essential for energy metabolism?",
        "question_hi": "ऊर्जा चयापचय के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B complex", "Vitamin C", "Vitamin D", "Vitamin E"],
        "options_hi": ["विटामिन बी कॉम्प्लेक्स", "विटामिन सी", "विटामिन डी", "विटामिन ई"],
        "answer_en": "Vitamin B complex",
        "answer_hi": "विटामिन बी कॉम्प्लेक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the unit of electric permittivity?",
        "question_hi": "विद्युत पारगम्यता की इकाई क्या है?",
        "options_en": ["F/m", "C²/N·m²", "Both", "H/m"],
        "options_hi": ["F/m", "C²/N·m²", "दोनों", "H/m"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which acid is used in the production of detergents?",
        "question_hi": "डिटर्जेंट उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Sulfonic acid", "Sulfuric acid", "Phosphoric acid", "Hydrochloric acid"],
        "options_hi": ["सल्फोनिक अम्ल", "सल्फ्यूरिक अम्ल", "फॉस्फोरिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
        "answer_en": "Sulfonic acid",
        "answer_hi": "सल्फोनिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the chemical formula of zinc oxide?",
        "question_hi": "जिंक ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["ZnO", "Zn(OH)₂", "ZnCO₃", "ZnSO₄"],
        "options_hi": ["ZnO", "Zn(OH)₂", "ZnCO₃", "ZnSO₄"],
        "answer_en": "ZnO",
        "answer_hi": "ZnO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which planet has the most volcanic moons?",
        "question_hi": "किस ग्रह के सबसे अधिक ज्वालामुखी चंद्रमा हैं?",
        "options_en": ["Jupiter", "Saturn", "Neptune", "Uranus"],
        "options_hi": ["बृहस्पति", "शनि", "नेपच्यून", "युरेनस"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the chemical symbol for molybdenum?",
        "question_hi": "मोलिब्डेनम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Mo", "Mb", "Ml", "Mn"],
        "options_hi": ["Mo", "Mb", "Ml", "Mn"],
        "answer_en": "Mo",
        "answer_hi": "Mo",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which vitamin deficiency causes fatigue?",
        "question_hi": "किस विटामिन की कमी से थकान होती है?",
        "options_en": ["Vitamin B12", "Vitamin D", "Iron (not vitamin)", "All of these"],
        "options_hi": ["विटामिन बी12", "विटामिन डी", "आयरन (विटामिन नहीं)", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the unit of magnetic susceptibility?",
        "question_hi": "चुंबकीय संवेदनशीलता की इकाई क्या है?",
        "options_en": ["Dimensionless", "T", "Wb", "H"],
        "options_hi": ["आयामहीन", "T", "Wb", "H"],
        "answer_en": "Dimensionless",
        "answer_hi": "आयामहीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which acid is used in the production of cosmetics?",
        "question_hi": "कॉस्मेटिक उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Hyaluronic acid", "Salicylic acid", "Both", "Formic acid"],
        "options_hi": ["हयालूरोनिक अम्ल", "सैलिसिलिक अम्ल", "दोनों", "फॉर्मिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the chemical formula of aluminum oxide?",
        "question_hi": "एल्युमीनियम ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["Al₂O₃", "AlO", "Al₃O₂", "AlO₂"],
        "options_hi": ["Al₂O₃", "AlO", "Al₃O₂", "AlO₂"],
        "answer_en": "Al₂O₃",
        "answer_hi": "Al₂O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which planet has the most visible rings?",
        "question_hi": "किस ग्रह के सबसे अधिक दिखाई देने वाले छल्ले हैं?",
        "options_en": ["Saturn", "Jupiter", "Uranus", "Neptune"],
        "options_hi": ["शनि", "बृहस्पति", "युरेनस", "नेपच्यून"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the chemical symbol for technetium?",
        "question_hi": "टेक्नेटियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Tc", "Tn", "Te", "Tm"],
        "options_hi": ["Tc", "Tn", "Te", "Tm"],
        "answer_en": "Tc",
        "answer_hi": "Tc",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which vitamin is essential for red blood cell production?",
        "question_hi": "लाल रक्त कोशिका उत्पादन के लिए कौन सा विटामिन आवश्यक है?",
        "options_en": ["Vitamin B12", "Vitamin B9", "Iron (not vitamin)", "All of these"],
        "options_hi": ["विटामिन बी12", "विटामिन बी9", "आयरन (विटामिन नहीं)", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the unit of Planck's constant?",
        "question_hi": "प्लैंक स्थिरांक की इकाई क्या है?",
        "options_en": ["J·s", "eV·s", "Both", "W·s"],
        "options_hi": ["J·s", "eV·s", "दोनों", "W·s"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which acid is used in the production of textiles?",
        "question_hi": "टेक्सटाइल उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Acetic acid", "Formic acid", "Both", "Tartaric acid"],
        "options_hi": ["एसिटिक अम्ल", "फॉर्मिक अम्ल", "दोनों", "टार्टरिक अम्ल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the chemical formula of silicon dioxide?",
        "question_hi": "सिलिकॉन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["SiO₂", "SiO", "Si₂O₃", "Si₃O₄"],
        "options_hi": ["SiO₂", "SiO", "Si₂O₃", "Si₃O₄"],
        "answer_en": "SiO₂",
        "answer_hi": "SiO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which planet has the most dense atmosphere?",
        "question_hi": "किस ग्रह का वातावरण सबसे सघन है?",
        "options_en": ["Venus", "Earth", "Mars", "Jupiter"],
        "options_hi": ["शुक्र", "पृथ्वी", "मंगल", "बृहस्पति"],
        "answer_en": "Venus",
        "answer_hi": "शुक्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the chemical symbol for ruthenium?",
        "question_hi": "रुथेनियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Ru", "Rt", "Rn", "Rh"],
        "options_hi": ["Ru", "Rt", "Rn", "Rh"],
        "answer_en": "Ru",
        "answer_hi": "Ru",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which vitamin deficiency causes bleeding gums?",
        "question_hi": "किस विटामिन की कमी से मसूड़ों से खून आता है?",
        "options_en": ["Vitamin C", "Vitamin K", "Both", "Vitamin A"],
        "options_hi": ["विटामिन सी", "विटामिन K", "दोनों", "विटामिन ए"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the unit of Boltzmann constant?",
        "question_hi": "बोल्ट्जमैन स्थिरांक की इकाई क्या है?",
        "options_en": ["J/K", "eV/K", "Both", "W/K"],
        "options_hi": ["J/K", "eV/K", "दोनों", "W/K"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which acid is used in the production of cleaning agents?",
        "question_hi": "सफाई एजेंटों के उत्पादन में किस अम्ल का उपयोग किया जाता है?",
        "options_en": ["Hydrochloric acid", "Sulfuric acid", "Phosphoric acid", "All of these"],
        "options_hi": ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "फॉस्फोरिक अम्ल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the chemical formula of iron(III) oxide?",
        "question_hi": "आयरन(III) ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["Fe₂O₃", "FeO", "Fe₃O₄", "Fe(OH)₃"],
        "options_hi": ["Fe₂O₃", "FeO", "Fe₃O₄", "Fe(OH)₃"],
        "answer_en": "Fe₂O₃",
        "answer_hi": "Fe₂O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which planet has the most retrograde rotation?",
        "question_hi": "किस ग्रह का घूर्णन सबसे अधिक प्रतिगामी है?",
        "options_en": ["Venus", "Uranus", "Both", "Neptune"],
        "options_hi": ["शुक्र", "युरेनस", "दोनों", "नेपच्यून"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the chemical symbol for palladium?",
        "question_hi": "पैलेडियम का रासायनिक प्रतीक क्या है?",
        "options_en": ["Pd", "Pl", "Pa", "Pm"],
        "options_hi": ["Pd", "Pl", "Pa", "Pm"],
        "answer_en": "Pd",
        "answer_hi": "Pd",
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