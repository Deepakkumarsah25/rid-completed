const questions = [
   {
num: 1,
question_en: "Which phenomenon explains the bending of light around obstacles?",
question_hi: "कौन सी घटना बाधाओं के चारों ओर प्रकाश के मुड़ने की व्याख्या करती है?",
options_en: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
options_hi: ["परावर्तन", "अपवर्तन", "विवर्तन", "विसरण"],
answer_en: "Diffraction",
answer_hi: "विवर्तन",
attempted: false,
selected: ""
},

{
num: 2,
question_en: "What is the process of conversion of a solid directly into vapor called?",
question_hi: "किसी ठोस के सीधे वाष्प में परिवर्तित होने की प्रक्रिया को क्या कहते हैं?",
options_en: ["Sublimation", "Evaporation", "Condensation", "Fusion"],
options_hi: ["उर्ध्वपातन", "वाष्पीकरण", "संघनन", "संलयन"],
answer_en: "Sublimation",
answer_hi: "उर्ध्वपातन",
attempted: false,
selected: ""
},

{
num: 3,
question_en: "Which law states that the pressure of a gas is inversely proportional to its volume at constant temperature?",
question_hi: "कौन सा नियम कहता है कि स्थिर तापमान पर गैस का दाब उसके आयतन के व्युत्क्रमानुपाती होता है?",
options_en: ["Charles's Law", "Avogadro's Law", "Gay-Lussac's Law", "Boyle's Law"],
options_hi: ["चार्ल्स का नियम", "ऐवोगेड्रो का नियम", "गे-लुसाक का नियम", "बॉयल का नियम"],
answer_en: "Boyle's Law",
answer_hi: "बॉयल का नियम",
attempted: false,
selected: ""
},

{
num: 4,
question_en: "What is the SI unit of luminous intensity?",
question_hi: "ज्योति तीव्रता की SI इकाई क्या है?",
options_en: ["Lumen", "Candela", "Lux", "Watt"],
options_hi: ["ल्यूमेन", "कैंडेला", "लक्स", "वाट"],
answer_en: "Candela",
answer_hi: "कैंडेला",
attempted: false,
selected: ""
},

{
num: 5,
question_en: "Which organelle is responsible for protein synthesis in a cell?",
question_hi: "कोशिका में प्रोटीन संश्लेषण के लिए कौन सा कोशिकांग जिम्मेदार है?",
options_en: ["Mitochondria", "Lysosome", "Ribosome", "Endoplasmic Reticulum"],
options_hi: ["माइटोकॉन्ड्रिया", "लाइसोसोम", "राइबोसोम", "अंतर्द्रव्यी जालिका"],
answer_en: "Ribosome",
answer_hi: "राइबोसोम",
attempted: false,
selected: ""
},

{
num: 6,
question_en: "What is the chemical name of the compound commonly known as 'Plaster of Paris'?",
question_hi: "'प्लास्टर ऑफ पेरिस' के नाम से जाने जाने वाले यौगिक का रासायनिक नाम क्या है?",
options_en: ["Calcium Sulphate Hemihydrate", "Calcium Carbonate", "Calcium Hydroxide", "Calcium Oxide"],
options_hi: ["कैल्शियम सल्फेट हेमिहाइड्रेट", "कैल्शियम कार्बोनेट", "कैल्शियम हाइड्रॉक्साइड", "कैल्शियम ऑक्साइड"],
answer_en: "Calcium Sulphate Hemihydrate",
answer_hi: "कैल्शियम सल्फेट हेमिहाइड्रेट",
attempted: false,
selected: ""
},

{
num: 7,
question_en: "In the human eye, which part controls the amount of light entering the eye?",
question_hi: "मानव नेत्र में, कौन सा भाग आँख में प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है?",
options_en: ["Cornea", "Lens", "Retina", "Iris"],
options_hi: ["कॉर्निया", "लेंस", "रेटिना", "परितारिका"],
answer_en: "Iris",
answer_hi: "परितारिका",
attempted: false,
selected: ""
},

{
num: 8,
question_en: "Which of the following is NOT a greenhouse gas?",
question_hi: "निम्नलिखित में से कौन सी एक ग्रीनहाउस गैस नहीं है?",
options_en: ["Methane", "Nitrous Oxide", "Chlorofluorocarbons", "Argon"],
options_hi: ["मीथेन", "नाइट्रस ऑक्साइड", "क्लोरोफ्लोरोकार्बन", "आर्गन"],
answer_en: "Argon",
answer_hi: "आर्गन",
attempted: false,
selected: ""
},

{
num: 9,
question_en: "What is the process by which water rises in a capillary tube?",
question_hi: "वह प्रक्रिया क्या है जिसके द्वारा केशिका नलिका में जल ऊपर चढ़ता है?",
options_en: ["Osmosis", "Surface Tension", "Capillary Action", "Gravitation"],
options_hi: ["परासरण", "पृष्ठ तनाव", "केशिकाकर्षण", "गुरुत्वाकर्षण"],
answer_en: "Capillary Action",
answer_hi: "केशिकाकर्षण",
attempted: false,
selected: ""
},

{
num: 10,
question_en: "Which vitamin deficiency causes the disease 'Pellagra'?",
question_hi: "किस विटामिन की कमी से 'पेलाग्रा' रोग होता है?",
options_en: ["Vitamin B3 (Niacin)", "Vitamin B1", "Vitamin B12", "Vitamin C"],
options_hi: ["विटामिन बी3 (नियासिन)", "विटामिन बी1", "विटामिन बी12", "विटामिन सी"],
answer_en: "Vitamin B3 (Niacin)",
answer_hi: "विटामिन बी3 (नियासिन)",
attempted: false,
selected: ""
},

{
num: 11,
question_en: "What is the pH range of an acidic solution?",
question_hi: "अम्लीय विलयन की pH सीमा क्या है?",
options_en: ["0 to 14", "7 to 14", "0 to 7", "Exactly 7"],
options_hi: ["0 से 14", "7 से 14", "0 से 7", "ठीक 7"],
answer_en: "0 to 7",
answer_hi: "0 से 7",
attempted: false,
selected: ""
},

{
num: 12,
question_en: "Which scientist is credited with the discovery of the electron?",
question_hi: "इलेक्ट्रॉन की खोज का श्रेय किस वैज्ञानिक को दिया जाता है?",
options_en: ["J.J. Thomson", "Ernest Rutherford", "James Chadwick", "Niels Bohr"],
options_hi: ["जे.जे. थॉमसन", "अर्नेस्ट रदरफोर्ड", "जेम्स चैडविक", "नील्स बोहर"],
answer_en: "J.J. Thomson",
answer_hi: "जे.जे. थॉमसन",
attempted: false,
selected: ""
},

{
num: 13,
question_en: "What is the main component of natural gas?",
question_hi: "प्राकृतिक गैस का मुख्य घटक क्या है?",
options_en: ["Propane", "Butane", "Methane", "Ethane"],
options_hi: ["प्रोपेन", "ब्यूटेन", "मीथेन", "ईथेन"],
answer_en: "Methane",
answer_hi: "मीथेन",
attempted: false,
selected: ""
},

{
num: 14,
question_en: "Which layer of the Earth's atmosphere contains the ozone layer?",
question_hi: "पृथ्वी के वायुमंडल की किस परत में ओज़ोन परत होती है?",
options_en: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
options_hi: ["क्षोभमंडल", "समतापमंडल", "मध्यमंडल", "थर्मोस्फीयर"],
answer_en: "Stratosphere",
answer_hi: "समतापमंडल",
attempted: false,
selected: ""
},

{
num: 15,
question_en: "What is the process of splitting of a heavy nucleus into lighter nuclei called?",
question_hi: "किसी भारी नाभिक के हल्के नाभिकों में विभाजित होने की प्रक्रिया को क्या कहते हैं?",
options_en: ["Nuclear Fusion", "Nuclear Fission", "Radioactive Decay", "Transmutation"],
options_hi: ["नाभिकीय संलयन", "नाभिकीय विखंडन", "रेडियोधर्मी क्षय", "रूपांतरण"],
answer_en: "Nuclear Fission",
answer_hi: "नाभिकीय विखंडन",
attempted: false,
selected: ""
},

{
num: 16,
question_en: "Which hormone is responsible for regulating blood sugar levels?",
question_hi: "रक्त शर्करा के स्तर को नियंत्रित करने के लिए कौन सा हार्मोन जिम्मेदार है?",
options_en: ["Adrenaline", "Thyroxine", "Insulin", "Estrogen"],
options_hi: ["एड्रेनालाईन", "थायरोक्सिन", "इंसुलिन", "एस्ट्रोजन"],
answer_en: "Insulin",
answer_hi: "इंसुलिन",
attempted: false,
selected: ""
},

{
num: 17,
question_en: "What is the unit of electric conductance?",
question_hi: "विद्युत चालकता की इकाई क्या है?",
options_en: ["Ohm", "Siemens", "Farad", "Henry"],
options_hi: ["ओम", "सीमेंस", "फैरड", "हेनरी"],
answer_en: "Siemens",
answer_hi: "सीमेंस",
attempted: false,
selected: ""
},

{
num: 18,
question_en: "Which of the following is a noble gas?",
question_hi: "निम्नलिखित में से कौन सी एक उत्कृष्ट गैस है?",
options_en: ["Chlorine", "Fluorine", "Helium", "Nitrogen"],
options_hi: ["क्लोरीन", "फ्लोरीन", "हीलियम", "नाइट्रोजन"],
answer_en: "Helium",
answer_hi: "हीलियम",
attempted: false,
selected: ""
},

{
num: 19,
question_en: "Which blood cells are responsible for clotting?",
question_hi: "रक्त का थक्का बनाने के लिए कौन सी रक्त कोशिकाएँ जिम्मेदार हैं?",
options_en: ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"],
options_hi: ["लाल रक्त कोशिकाएँ", "श्वेत रक्त कोशिकाएँ", "प्लेटलेट्स", "प्लाज़्मा"],
answer_en: "Platelets",
answer_hi: "प्लेटलेट्स",
attempted: false,
selected: ""
},

{
num: 20,
question_en: "What is the phenomenon where light splits into its constituent colors?",
question_hi: "वह घटना क्या है जिसमें प्रकाश अपने घटक रंगों में विभाजित हो जाता है?",
options_en: ["Reflection", "Refraction", "Dispersion", "Scattering"],
options_hi: ["परावर्तन", "अपवर्तन", "विसरण", "प्रकीर्णन"],
answer_en: "Dispersion",
answer_hi: "विसरण",
attempted: false,
selected: ""
},

{
num: 21,
question_en: "What is the process of conversion of nitrates into free nitrogen called?",
question_hi: "नाइट्रेट्स के मुक्त नाइट्रोजन में परिवर्तित होने की प्रक्रिया को क्या कहते हैं?",
options_en: ["Nitrogen Fixation", "Ammonification", "Nitrification", "Denitrification"],
options_hi: ["नाइट्रोजन स्थिरीकरण", "अमोनीकरण", "नाइट्रीकरण", "विनाइट्रीकरण"],
answer_en: "Denitrification",
answer_hi: "विनाइट्रीकरण",
attempted: false,
selected: ""
},

{
num: 22,
question_en: "Which force is responsible for the spherical shape of liquid drops?",
question_hi: "तरल बूंदों के गोलाकार आकार के लिए कौन सा बल जिम्मेदार है?",
options_en: ["Gravitational Force", "Viscous Force", "Surface Tension", "Centrifugal Force"],
options_hi: ["गुरुत्वाकर्षण बल", "श्यान बल", "पृष्ठ तनाव", "अपकेंद्री बल"],
answer_en: "Surface Tension",
answer_hi: "पृष्ठ तनाव",
attempted: false,
selected: ""
},

{
num: 23,
question_en: "What is the chemical formula of laughing gas?",
question_hi: "हास्य गैस का रासायनिक सूत्र क्या है?",
options_en: ["NO2", "N2O", "NO", "N2O3"],
options_hi: ["NO2", "N2O", "NO", "N2O3"],
answer_en: "N2O",
answer_hi: "N2O",
attempted: false,
selected: ""
},

{
num: 24,
question_en: "Which part of a neuron transmits impulses away from the cell body?",
question_hi: "न्यूरॉन का कौन सा भाग कोशिका काय से दूर आवेगों का संचरण करता है?",
options_en: ["Dendrite", "Axon", "Synapse", "Nucleus"],
options_hi: ["डेंड्राइट", "एक्सोन", "सिनैप्स", "केंद्रक"],
answer_en: "Axon",
answer_hi: "एक्सोन",
attempted: false,
selected: ""
},

{
num: 25,
question_en: "Which planet's day is longer than its year?",
question_hi: "किस ग्रह का दिन उसके वर्ष से लंबा होता है?",
options_en: ["Mercury", "Venus", "Mars", "Jupiter"],
options_hi: ["बुध", "शुक्र", "मंगल", "बृहस्पति"],
answer_en: "Venus",
answer_hi: "शुक्र",
attempted: false,
selected: ""
},

{
num: 26,
question_en: "What is the process of depositing a thin layer of one metal over another using electricity called?",
question_hi: "बिजली का उपयोग करके एक धातु की पतली परत दूसरी धातु पर जमा करने की प्रक्रिया को क्या कहते हैं?",
options_en: ["Galvanization", "Electroplating", "Anodization", "Smelting"],
options_hi: ["गैल्वनीकरण", "विद्युत लेपन", "ऐनोडीकरण", "गलाना"],
answer_en: "Electroplating",
answer_hi: "विद्युत लेपन",
attempted: false,
selected: ""
},

{
num: 27,
question_en: "Which of these is a non-conservative force?",
question_hi: "ये में से कौन सा एक अ-संरक्षी बल है?",
options_en: ["Gravitational Force", "Electrostatic Force", "Frictional Force", "Elastic Spring Force"],
options_hi: ["गुरुत्वाकर्षण बल", "विद्युत्स्थैतिक बल", "घर्षण बल", "प्रत्यास्थ स्प्रिंग बल"],
answer_en: "Frictional Force",
answer_hi: "घर्षण बल",
attempted: false,
selected: ""
},

{
num: 28,
question_en: "What is the primary function of the xylem in plants?",
question_hi: "पौधों में जाइलम का प्राथमिक कार्य क्या है?",
options_en: ["Transport of food", "Transport of water", "Photosynthesis", "Storage"],
options_hi: ["भोजन का परिवहन", "जल का परिवहन", "प्रकाश संश्लेषण", "भंडारण"],
answer_en: "Transport of water",
answer_hi: "जल का परिवहन",
attempted: false,
selected: ""
},

{
num: 29,
question_en: "Which scientist proposed the 'Theory of Natural Selection'?",
question_hi: "'प्राकृतिक चयन के सिद्धांत' का प्रस्ताव किस वैज्ञानिक ने दिया?",
options_en: ["Gregor Mendel", "Charles Darwin", "Jean-Baptiste Lamarck", "Alfred Russel Wallace"],
options_hi: ["ग्रेगर मेंडल", "चार्ल्स डार्विन", "जीन-बैप्टिस्ट लैमार्क", "अल्फ्रेड रसेल वालेस"],
answer_en: "Charles Darwin",
answer_hi: "चार्ल्स डार्विन",
attempted: false,
selected: ""
},

{
num: 30,
question_en: "What is the unit of radioactivity?",
question_hi: "रेडियोधर्मिता की इकाई क्या है?",
options_en: ["Becquerel", "Gray", "Sievert", "Curie"],
options_hi: ["बेकरेल", "ग्रे", "सीवर्ट", "क्यूरी"],
answer_en: "Becquerel",
answer_hi: "बेकरेल",
attempted: false,
selected: ""
},

{
num: 31,
question_en: "Which of the following is an example of a colloidal solution?",
question_hi: "निम्नलिखित में से कौन सा एक कोलॉइडी विलयन का उदाहरण है?",
options_en: ["Salt Water", "Milk", "Sugar Solution", "Vinegar"],
options_hi: ["नमक का पानी", "दूध", "चीनी का घोल", "सिरका"],
answer_en: "Milk",
answer_hi: "दूध",
attempted: false,
selected: ""
},

{
num: 32,
question_en: "Which part of the human brain is associated with intelligence and memory?",
question_hi: "मानव मस्तिष्क का कौन सा भाग बुद्धि और स्मृति से जुड़ा है?",
options_en: ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Hypothalamus"],
options_hi: ["सेरिब्रम", "सेरिबैलम", "मेडुला ओब्लोंगाटा", "हाइपोथैलेमस"],
answer_en: "Cerebrum",
answer_hi: "सेरिब्रम",
attempted: false,
selected: ""
},

{
num: 33,
question_en: "What is the principle behind the working of a hydraulic lift?",
question_hi: "हाइड्रोलिक लिफ्ट के काम करने के पीछे क्या सिद्धांत है?",
options_en: ["Bernoulli's Principle", "Pascal's Law", "Archimedes' Principle", "Hooke's Law"],
options_hi: ["बरनौली का सिद्धांत", "पास्कल का नियम", "आर्किमिडीज का सिद्धांत", "हुक का नियम"],
answer_en: "Pascal's Law",
answer_hi: "पास्कल का नियम",
attempted: false,
selected: ""
},

{
num: 34,
question_en: "Which disease is caused by the deficiency of Iodine?",
question_hi: "आयोडीन की कमी से कौन सा रोग होता है?",
options_en: ["Goitre", "Scurvy", "Rickets", "Beri-Beri"],
options_hi: ["घेंघा", "स्कर्वी", "रिकेट्स", "बेरी-बेरी"],
answer_en: "Goitre",
answer_hi: "घेंघा",
attempted: false,
selected: ""
},

{
num: 35,
question_en: "What is the process of conversion of a substance from gaseous to solid state without passing through the liquid state called?",
question_hi: "किसी पदार्थ का द्रव अवस्था से गुजरे बिना गैसीय अवस्था से ठोस अवस्था में परिवर्तन की प्रक्रिया को क्या कहते हैं?",
options_en: ["Sublimation", "Deposition", "Condensation", "Freezing"],
options_hi: ["उर्ध्वपातन", "निक्षेपण", "संघनन", "हिमीकरण"],
answer_en: "Deposition",
answer_hi: "निक्षेपण",
attempted: false,
selected: ""
},

{
num: 36,
question_en: "Which enzyme is present in saliva that breaks down starch?",
question_hi: "लार में कौन सा एंजाइम होता है जो स्टार्च को तोड़ता है?",
options_en: ["Pepsin", "Amylase", "Lipase", "Trypsin"],
options_hi: ["पेप्सिन", "एमाइलेज", "लाइपेज", "ट्रिप्सिन"],
answer_en: "Amylase",
answer_hi: "एमाइलेज",
attempted: false,
selected: ""
},

{
num: 37,
question_en: "Which of the following statements is true for an AC generator?",
question_hi: "एक AC जनरेटर के लिए निम्नलिखित में से कौन सा कथन सत्य है?",
options_en: ["It converts mechanical energy into AC electrical energy.", "It uses split rings.", "It produces direct current.", "It is based on motor effect."],
options_hi: ["यह यांत्रिक ऊर्जा को AC विद्युत ऊर्जा में परिवर्तित करता है।", "यह विभक्त वलयों का उपयोग करता है।", "यह दिष्ट धारा उत्पन्न करता है।", "यह मोटर प्रभाव पर आधारित है।"],
answer_en: "It converts mechanical energy into AC electrical energy.",
answer_hi: "यह यांत्रिक ऊर्जा को AC विद्युत ऊर्जा में परिवर्तित करता है।",
attempted: false,
selected: ""
},

{
num: 38,
question_en: "What is the term for plants that grow in saline soil?",
question_hi: "लवणीय मिट्टी में उगने वाले पौधों के लिए क्या शब्द है?",
options_en: ["Hydrophytes", "Xerophytes", "Halophytes", "Epiphytes"],
options_hi: ["जलोद्भिद", "काष्ठोद्भिद (शुष्कोद्भिद)", "लवणोद्भिद", "परिजीवी"],
answer_en: "Halophytes",
answer_hi: "लवणोद्भिद",
attempted: false,
selected: ""
},

{
num: 39,
question_en: "What does the reading of a clinical thermometer indicate?",
question_hi: "क्लिनिकल थर्मामीटर का पाठ्यांक क्या दर्शाता है?",
options_en: ["Atmospheric Temperature", "Body Temperature", "Boiling Point of Water", "Room Temperature"],
options_hi: ["वायुमंडलीय तापमान", "शरीर का तापमान", "जल का क्वथनांक", "कमरे का तापमान"],
answer_en: "Body Temperature",
answer_hi: "शरीर का तापमान",
attempted: false,
selected: ""
},

{
num: 40,
question_en: "Which of the following is a physical change?",
question_hi: "निम्नलिखित में से कौन सा एक भौतिक परिवर्तन है?",
options_en: ["Burning of wood", "Rusting of iron", "Melting of ice", "Digestion of food"],
options_hi: ["लकड़ी का जलना", "लोहे में जंग लगना", "बर्फ का पिघलना", "भोजन का पाचन"],
answer_en: "Melting of ice",
answer_hi: "बर्फ का पिघलना",
attempted: false,
selected: ""
},

{
num: 41,
question_en: "Which phenomenon causes the twinkling of stars?",
question_hi: "कौन सी घटना तारों के टिमटिमाने का कारण बनती है?",
options_en: ["Atmospheric Refraction", "Reflection", "Scattering", "Total Internal Reflection"],
options_hi: ["वायुमंडलीय अपवर्तन", "परावर्तन", "प्रकीर्णन", "पूर्ण आंतरिक परावर्तन"],
answer_en: "Atmospheric Refraction",
answer_hi: "वायुमंडलीय अपवर्तन",
attempted: false,
selected: ""
},

{
num: 42,
question_en: "What is the chemical used in fire extinguishers to produce carbon dioxide?",
question_hi: "कार्बन डाइऑक्साइड उत्पन्न करने के लिए अग्निशामक यंत्रों में किस रसायन का उपयोग किया जाता है?",
options_en: ["Sodium Bicarbonate", "Sodium Carbonate", "Potassium Nitrate", "Sodium Chloride"],
options_hi: ["सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "पोटैशियम नाइट्रेट", "सोडियम क्लोराइड"],
answer_en: "Sodium Bicarbonate",
answer_hi: "सोडियम बाइकार्बोनेट",
attempted: false,
selected: ""
},

{
num: 43,
question_en: "Which part of the flower develops into the fruit?",
question_hi: "फूल का कौन सा भाग फल में विकसित होता है?",
options_en: ["Ovary", "Stigma", "Anther", "Petal"],
options_hi: ["अंडाशय", "वर्तिकाग्र", "परागकोष", "पंखुड़ी"],
answer_en: "Ovary",
answer_hi: "अंडाशय",
attempted: false,
selected: ""
},

{
num: 44,
question_en: "What is the relative atomic mass of an element?",
question_hi: "किसी तत्व का आपेक्षिक परमाणु द्रव्यमान क्या है?",
options_en: ["Mass of one atom compared to 1/12th mass of C-12 atom", "Mass of one mole of atoms", "Total number of protons and neutrons", "Mass number of the most abundant isotope"],
options_hi: ["एक परमाणु का द्रव्यमान C-12 परमाणु के 1/12 द्रव्यमान की तुलना में", "एक मोल परमाणुओं का द्रव्यमान", "प्रोटॉन और न्यूट्रॉन की कुल संख्या", "सबसे प्रचुर समस्थानिक की द्रव्यमान संख्या"],
answer_en: "Mass of one atom compared to 1/12th mass of C-12 atom",
answer_hi: "एक परमाणु का द्रव्यमान C-12 परमाणु के 1/12 द्रव्यमान की तुलना में",
attempted: false,
selected: ""
},

{
num: 45,
question_en: "Which type of mirror can form a real and inverted image?",
question_hi: "किस प्रकार का दर्पण एक वास्तविक और उल्टा प्रतिबिंब बना सकता है?",
options_en: ["Plane Mirror", "Convex Mirror", "Concave Mirror", "Both Convex and Concave"],
options_hi: ["समतल दर्पण", "उत्तल दर्पण", "अवतल दर्पण", "उत्तल और अवतल दोनों"],
answer_en: "Concave Mirror",
answer_hi: "अवतल दर्पण",
attempted: false,
selected: ""
},

{
num: 46,
question_en: "What is the process of formation of sperm called?",
question_hi: "शुक्राणु के निर्माण की प्रक्रिया को क्या कहते हैं?",
options_en: ["Oogenesis", "Spermatogenesis", "Mitosis", "Meiosis"],
options_hi: ["अंडजनन", "शुक्राणुजनन", "समसूत्री विभाजन", "अर्धसूत्री विभाजन"],
answer_en: "Spermatogenesis",
answer_hi: "शुक्राणुजनन",
attempted: false,
selected: ""
},

{
num: 47,
question_en: "What is the principle behind the formation of a rainbow?",
question_hi: "इंद्रधनुष के निर्माण के पीछे क्या सिद्धांत है?",
options_en: ["Reflection of light", "Refraction and total internal reflection of light", "Scattering of light", "Diffraction of light"],
options_hi: ["प्रकाश का परावर्तन", "प्रकाश का अपवर्तन और पूर्ण आंतरिक परावर्तन", "प्रकाश का प्रकीर्णन", "प्रकाश का विवर्तन"],
answer_en: "Refraction and total internal reflection of light",
answer_hi: "प्रकाश का अपवर्तन और पूर्ण आंतरिक परावर्तन",
attempted: false,
selected: ""
},

{
num: 48,
question_en: "Which of the following is a micronutrient required by plants?",
question_hi: "निम्नलिखित में से कौन सा पौधों द्वारा आवश्यक एक सूक्ष्म पोषक तत्व है?",
options_en: ["Nitrogen", "Phosphorus", "Iron", "Potassium"],
options_hi: ["नाइट्रोजन", "फॉस्फोरस", "आयरन", "पोटैशियम"],
answer_en: "Iron",
answer_hi: "आयरन",
attempted: false,
selected: ""
},

{
num: 49,
question_en: "What is the process of losing water in the form of vapor from plant surfaces called?",
question_hi: "पौधों की सतहों से वाष्प के रूप में जल खोने की प्रक्रिया को क्या कहते हैं?",
options_en: ["Evaporation", "Transpiration", "Guttation", "Condensation"],
options_hi: ["वाष्पीकरण", "वाष्पोत्सर्जन", "बिंदुस्राव", "संघनन"],
answer_en: "Transpiration",
answer_hi: "वाष्पोत्सर्जन",
attempted: false,
selected: ""
},

{
num: 50,
question_en: "Which of these diseases is caused by a virus?",
question_hi: "ये में से कौन सा रोग एक वायरस के कारण होता है?",
options_en: ["Tuberculosis", "Malaria", "Influenza", "Cholera"],
options_hi: ["तपेदिक", "मलेरिया", "इन्फ्लूएंजा (फ्लू)", "हैजा"],
answer_en: "Influenza",
answer_hi: "इन्फ्लूएंजा (फ्लू)",
attempted: false,
selected: ""
}];

// --------------------------- GLOBAL VARS -----------------------------
// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60; 
let timerInterval;

// ----------------- Load Question -----------------
function loadQuestion(index) {
    const q = questions[index];
    if (!q) return; //  undefined error fix

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach(option => {
        const isSelected = q.selected === option;

        const div = document.createElement("div");
        div.className = "option-box";

        div.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        div.innerHTML = `
            <input type="radio" name="option" value="${option}" 
            ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        div.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(div);
    });

    updateNavigation();
}

// ----------------- Attempt Mark -----------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ----------------- Next / Previous -----------------
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

// ----------------- Final Submit -----------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

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

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted! Do you want to view result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}

// ----------------- Navigation Circles -----------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        nav.innerHTML += `
            <div class="circle" style="background:${color};"
            onclick="jumpToQuestion(${i})">${i + 1}</div>
        `;
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

// ----------------- Timer -----------------
function startTimer() {
    const timerElement = document.getElementById("timer");

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
            const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
            const seconds = String(timeLeft % 60).padStart(2, "0");

            timerElement.textContent = `Time Left: ${hours}:${minutes}:${seconds}`;
            timeLeft--;
        }
    }, 1000);
}

// ----------------- Camera & Movement Detection -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style = `
        position:fixed; top:10px; left:10px; width:130px; height:130px;
        border-radius:50%; overflow:hidden; border:3px solid red; z-index:9999;
    `;

    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsinline = true;
    video.style = "width:100%; height:100%; object-fit:cover;";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(() => alert("Camera access denied!"));
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;

    let lastData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, 160, 160);
        const data = ctx.getImageData(0, 0, 160, 160);

        if (lastData) {
            let diff = 0;
            for (let i = 0; i < data.data.length; i += 4) {
                diff += Math.abs(data.data[i] - lastData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;

                if (movementCount === 1) alert("⚠ Alert 1: No movement detected!");
                if (movementCount === 2) alert("⚠ Alert 2: Head not moving!");
                if (movementCount === 3) {
                    alert("⚠ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastData = data;

    }, 2000);
}

function restartTest() {
    if (videoStream) videoStream.getTracks().forEach(t => t.stop());

    const cam = document.getElementById("camera-container");
    if (cam) cam.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 60 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(0);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};