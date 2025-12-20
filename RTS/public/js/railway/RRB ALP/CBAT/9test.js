const questions = [
    {
num: 1,
question_en: "What is the principle behind the 'Gas Chromatography' technique?",
question_hi: "'गैस क्रोमैटोग्राफी' तकनीक का सिद्धांत क्या है?",
options_en: ["Separation based on boiling points and affinity to stationary phase", "Separation based on charge", "Separation based on molecular size", "Separation based on magnetic properties"],
options_hi: ["क्वथनांक और स्थिर प्रावस्था के प्रति आकर्षण के आधार पर पृथक्करण", "आवेश के आधार पर पृथक्करण", "आणविक आकार के आधार पर पृथक्करण", "चुंबकीय गुणों के आधार पर पृथक्करण"],
answer_en: "Separation based on boiling points and affinity to stationary phase",
answer_hi: "क्वथनांक और स्थिर प्रावस्था के प्रति आकर्षण के आधार पर पृथक्करण",
attempted: false,
selected: ""
},

{
num: 2,
question_en: "In molecular genetics, what are 'Introns'?",
question_hi: "आणविक आनुवंशिकी में, 'इंट्रॉन' क्या हैं?",
options_en: ["Coding sequences of DNA", "Non-coding sequences that are spliced out of pre-mRNA", "Regulatory sequences", "Telomeric sequences"],
options_hi: ["DNA के कूटलेखन अनुक्रम", "गैर-कूटलेखन अनुक्रम जो pre-mRNA से काटकर अलग कर दिए जाते हैं", "नियामक अनुक्रम", "टेलोमेरिक अनुक्रम"],
answer_en: "Non-coding sequences that are spliced out of pre-mRNA",
answer_hi: "गैर-कूटलेखन अनुक्रम जो pre-mRNA से काटकर अलग कर दिए जाते हैं",
attempted: false,
selected: ""
},

{
num: 3,
question_en: "What is the 'Hertzsprung-Russell Diagram' used for in astronomy?",
question_hi: "खगोल विज्ञान में 'हर्ट्ज़स्प्रंग-रसेल आरेख' का उपयोग किस लिए किया जाता है?",
options_en: ["Plotting stellar luminosity against surface temperature", "Plotting planetary orbits", "Measuring galaxy distances", "Classifying star clusters"],
options_hi: ["सतह के तापमान के विरुद्ध तारकीय चमक आलेखित करना", "ग्रहीय कक्षाएँ आलेखित करना", "आकाशगंगा दूरियाँ मापना", "तारा समूहों का वर्गीकरण करना"],
answer_en: "Plotting stellar luminosity against surface temperature",
answer_hi: "सतह के तापमान के विरुद्ध तारकीय चमक आलेखित करना",
attempted: false,
selected: ""
},

{
num: 4,
question_en: "What is 'Ohm's Law'?",
question_hi: "'ओम का नियम' क्या है?",
options_en: ["V = I/R", "V = IR", "P = IV", "R = ρL/A"],
options_hi: ["V = I/R", "V = IR", "P = IV", "R = ρL/A"],
answer_en: "V = IR",
answer_hi: "V = IR",
attempted: false,
selected: ""
},

{
num: 5,
question_en: "In microbiology, what is the 'Gram Staining' technique used for?",
question_hi: "सूक्ष्म जीव विज्ञान में, 'ग्राम अभिरंजन' तकनीक का उपयोग किस लिए किया जाता है?",
options_en: ["Identifying bacteria based on cell wall composition", "Staining DNA", "Measuring bacterial growth", "Identifying viral particles"],
options_hi: ["कोशिका भित्ति संरचना के आधार पर जीवाणुओं की पहचान करना", "DNA का अभिरंजन करना", "जीवाणु वृद्धि मापना", "विषाणु कणों की पहचान करना"],
answer_en: "Identifying bacteria based on cell wall composition",
answer_hi: "कोशिका भित्ति संरचना के आधार पर जीवाणुओं की पहचान करना",
attempted: false,
selected: ""
},

{
num: 6,
question_en: "What is the 'Principle of Superposition' in wave theory?",
question_hi: "तरंग सिद्धांत में 'अध्यारोपण का सिद्धांत' क्या है?",
options_en: ["Waves can interfere constructively or destructively", "Waves always travel in straight lines", "The speed of a wave is constant in a given medium", "Waves reflect from boundaries"],
options_hi: ["तरंगें रचनात्मक या विध्वंसक रूप से व्यतिकरण कर सकती हैं", "तरंगें हमेशा सीधी रेखाओं में चलती हैं", "किसी दिए गए माध्यम में तरंग की गति स्थिर होती है", "तरंगें सीमाओं से परावर्तित होती हैं"],
answer_en: "Waves can interfere constructively or destructively",
answer_hi: "तरंगें रचनात्मक या विध्वंसक रूप से व्यतिकरण कर सकती हैं",
attempted: false,
selected: ""
},

{
num: 7,
question_en: "What is the primary function of 'Hemoglobin'?",
question_hi: "'हीमोग्लोबिन' का प्राथमिक कार्य क्या है?",
options_en: ["Fight infection", "Transport oxygen", "Clot blood", "Transport hormones"],
options_hi: ["संक्रमण से लड़ना", "ऑक्सीजन का परिवहन", "रक्त का थक्का बनाना", "हार्मोनों का परिवहन"],
answer_en: "Transport oxygen",
answer_hi: "ऑक्सीजन का परिवहन",
attempted: false,
selected: ""
},

{
num: 8,
question_en: "In organic chemistry, what is a 'Nucleophile'?",
question_hi: "कार्बनिक रसायन विज्ञान में, 'न्यूक्लियोफाइल' क्या है?",
options_en: ["Electron-deficient species", "Electron-rich species that donates an electron pair", "A free radical", "A carbocation"],
options_hi: ["इलेक्ट्रॉन-न्यून प्रजाति", "इलेक्ट्रॉन-युक्त प्रजाति जो एक इलेक्ट्रॉन युग्म दान करती है", "एक मुक्त मूलक", "एक कार्बोकैटायन"],
answer_en: "Electron-rich species that donates an electron pair",
answer_hi: "इलेक्ट्रॉन-युक्त प्रजाति जो एक इलेक्ट्रॉन युग्म दान करती है",
attempted: false,
selected: ""
},

{
num: 9,
question_en: "What is the 'Photoelectric Effect'?",
question_hi: "'प्रकाश विद्युत प्रभाव' क्या है?",
options_en: ["Emission of electrons when light hits a material", "Bending of light around obstacles", "Splitting of light into colors", "Production of light by heating"],
options_hi: ["प्रकाश के किसी पदार्थ से टकराने पर इलेक्ट्रॉनों का उत्सर्जन", "बाधाओं के चारों ओर प्रकाश का मुड़ना", "प्रकाश का रंगों में विभाजन", "ताप द्वारा प्रकाश उत्पादन"],
answer_en: "Emission of electrons when light hits a material",
answer_hi: "प्रकाश के किसी पदार्थ से टकराने पर इलेक्ट्रॉनों का उत्सर्जन",
attempted: false,
selected: ""
},

{
num: 10,
question_en: "What is the role of 'Insulin' in the human body?",
question_hi: "मानव शरीर में 'इंसुलिन' की क्या भूमिका है?",
options_en: ["Increase blood glucose", "Decrease blood glucose", "Regulate calcium levels", "Stimulate growth"],
options_hi: ["रक्त शर्करा बढ़ाना", "रक्त शर्करा कम करना", "कैल्शियम स्तर नियंत्रित करना", "वृद्धि उत्तेजित करना"],
answer_en: "Decrease blood glucose",
answer_hi: "रक्त शर्करा कम करना",
attempted: false,
selected: ""
},

{
num: 11,
question_en: "In ecology, what is 'Primary Succession'?",
question_hi: "पारिस्थितिकी में, 'प्राथमिक अनुक्रमण' क्या है?",
options_en: ["Recovery of an ecosystem after a disturbance", "Establishment of life on a previously uninhabited substrate (like bare rock)", "Change in species composition over seasons", "Migration of animals"],
options_hi: ["अवरोध के बाद एक पारिस्थितिकी तंत्र की वसूली", "पहले से निर्जन सतह (जैसे नंगी चट्टान) पर जीवन की स्थापना", "मौसमों के साथ प्रजाति संरचना में परिवर्तन", "जानवरों का प्रवास"],
answer_en: "Establishment of life on a previously uninhabited substrate (like bare rock)",
answer_hi: "पहले से निर्जन सतह (जैसे नंगी चट्टान) पर जीवन की स्थापना",
attempted: false,
selected: ""
},

{
num: 12,
question_en: "What is 'Archimedes' Principle'?",
question_hi: "'आर्किमिडीज का सिद्धांत' क्या है?",
options_en: ["Pressure in a fluid is transmitted equally in all directions", "Buoyant force equals the weight of the fluid displaced", "Volume of a gas is proportional to temperature", "Every action has an equal and opposite reaction"],
options_hi: ["एक द्रव में दाब सभी दिशाओं में समान रूप से संचारित होता है", "उत्प्लावन बल विस्थापित द्रव के भार के बराबर होता है", "गैस का आयतन तापमान के समानुपाती होता है", "प्रत्येक क्रिया की समान और विपरीत प्रतिक्रिया होती है"],
answer_en: "Buoyant force equals the weight of the fluid displaced",
answer_hi: "उत्प्लावन बल विस्थापित द्रव के भार के बराबर होता है",
attempted: false,
selected: ""
},

{
num: 13,
question_en: "In cell biology, what is 'Mitosis'?",
question_hi: "कोशिका जीव विज्ञान में, 'समसूत्री विभाजन' क्या है?",
options_en: ["Cell division that produces gametes", "Cell division that produces two genetically identical daughter cells", "Process of crossing over", "Process of DNA replication"],
options_hi: ["युग्मक उत्पन्न करने वाला कोशिका विभाजन", "दो आनुवंशिक रूप से समान संतति कोशिकाएँ उत्पन्न करने वाला कोशिका विभाजन", "क्रॉसिंग ओवर की प्रक्रिया", "DNA प्रतिकृति की प्रक्रिया"],
answer_en: "Cell division that produces two genetically identical daughter cells",
answer_hi: "दो आनुवंशिक रूप से समान संतति कोशिकाएँ उत्पन्न करने वाला कोशिका विभाजन",
attempted: false,
selected: ""
},

{
num: 14,
question_en: "What is 'Pascal's Law'?",
question_hi: "'पास्कल का नियम' क्या है?",
options_en: ["Pressure applied to a confined fluid is transmitted undiminished in all directions", "Buoyancy principle", "Gas volume-temperature relationship", "Wave interference principle"],
options_hi: ["एक सीमित द्रव पर लगाया गया दाब सभी दिशाओं में बिना कमी के संचारित होता है", "उत्प्लावन सिद्धांत", "गैस आयतन-तापमान संबंध", "तरंग व्यतिकरण सिद्धांत"],
answer_en: "Pressure applied to a confined fluid is transmitted undiminished in all directions",
answer_hi: "एक सीमित द्रव पर लगाया गया दाब सभी दिशाओं में बिना कमी के संचारित होता है",
attempted: false,
selected: ""
},

{
num: 15,
question_en: "In genetics, what is a 'Punnett Square' used for?",
question_hi: "आनुवंशिकी में, 'पनेट वर्ग' का उपयोग किस लिए किया जाता है?",
options_en: ["Predicting the genotypes of offspring from a genetic cross", "Separating DNA fragments", "Measuring mutation rates", "Visualizing chromosomes"],
options_hi: ["एक आनुवंशिक संकरण से संतानों के जीनोटाइप की भविष्यवाणी करना", "DNA खंडों को अलग करना", "उत्परिवर्तन दरों को मापना", "गुणसूत्रों का दृश्यीकरण करना"],
answer_en: "Predicting the genotypes of offspring from a genetic cross",
answer_hi: "एक आनुवंशिक संकरण से संतानों के जीनोटाइप की भविष्यवाणी करना",
attempted: false,
selected: ""
},

{
num: 16,
question_en: "What is 'Bernoulli's Principle'?",
question_hi: "'बरनौली का सिद्धांत' क्या है?",
options_en: ["In a flowing fluid, pressure decreases as speed increases", "Buoyancy force", "Gas laws", "Refraction of light"],
options_hi: ["एक बहते हुए द्रव में, दाब गति बढ़ने के साथ घटता है", "उत्प्लावन बल", "गैस नियम", "प्रकाश का अपवर्तन"],
answer_en: "In a flowing fluid, pressure decreases as speed increases",
answer_hi: "एक बहते हुए द्रव में, दाब गति बढ़ने के साथ घटता है",
attempted: false,
selected: ""
},

{
num: 17,
question_en: "In biochemistry, what are 'Enzymes'?",
question_hi: "जैव रसायन विज्ञान में, 'एंजाइम' क्या हैं?",
options_en: ["Energy currency of the cell", "Biological catalysts that speed up reactions", "Storage molecules", "Structural proteins"],
options_hi: ["कोशिका की ऊर्जा मुद्रा", "जैविक उत्प्रेरक जो अभिक्रियाओं को गति देते हैं", "संग्रहण अणु", "संरचनात्मक प्रोटीन"],
answer_en: "Biological catalysts that speed up reactions",
answer_hi: "जैविक उत्प्रेरक जो अभिक्रियाओं को गति देते हैं",
attempted: false,
selected: ""
},

{
num: 18,
question_en: "What is the 'Law of Conservation of Energy'?",
question_hi: "'ऊर्जा संरक्षण का नियम' क्या है?",
options_en: ["Energy can be created but not destroyed", "Energy can neither be created nor destroyed, only transformed", "Energy is always increasing", "Energy is always decreasing"],
options_hi: ["ऊर्जा सृजित की जा सकती है लेकिन नष्ट नहीं", "ऊर्जा न तो सृजित की जा सकती है और न ही नष्ट, केवल रूपांतरित की जा सकती है", "ऊर्जा हमेशा बढ़ रही है", "ऊर्जा हमेशा घट रही है"],
answer_en: "Energy can neither be created nor destroyed, only transformed",
answer_hi: "ऊर्जा न तो सृजित की जा सकती है और न ही नष्ट, केवल रूपांतरित की जा सकती है",
attempted: false,
selected: ""
},

{
num: 19,
question_en: "In the periodic table, what are 'Halogens'?",
question_hi: "आवर्त सारणी में, 'हैलोजन' क्या हैं?",
options_en: ["Group 1 elements", "Group 2 elements", "Group 17 elements", "Group 18 elements"],
options_hi: ["समूह 1 के तत्व", "समूह 2 के तत्व", "समूह 17 के तत्व", "समूह 18 के तत्व"],
answer_en: "Group 17 elements",
answer_hi: "समूह 17 के तत्व",
attempted: false,
selected: ""
},

{
num: 20,
question_en: "What is 'Meiosis'?",
question_hi: "'अर्धसूत्री विभाजन' क्या है?",
options_en: ["Cell division for growth and repair", "Cell division that produces four genetically diverse gametes", "Process of protein synthesis", "Process of cellular respiration"],
options_hi: ["वृद्धि और मरम्मत के लिए कोशिका विभाजन", "कोशिका विभाजन जो चार आनुवंशिक रूप से विविध युग्मक उत्पन्न करता है", "प्रोटीन संश्लेषण की प्रक्रिया", "कोशिकीय श्वसन की प्रक्रिया"],
answer_en: "Cell division that produces four genetically diverse gametes",
answer_hi: "कोशिका विभाजन जो चार आनुवंशिक रूप से विविध युग्मक उत्पन्न करता है",
attempted: false,
selected: ""
},

{
num: 21,
question_en: "What is the 'Doppler Effect'?",
question_hi: "'डॉप्लर प्रभाव' क्या है?",
options_en: ["Change in wave frequency due to relative motion", "Bending of waves around obstacles", "Superposition of waves", "Polarization of waves"],
options_hi: ["सापेक्ष गति के कारण तरंग आवृत्ति में परिवर्तन", "बाधाओं के चारों ओर तरंगों का मुड़ना", "तरंगों का अध्यारोपण", "तरंगों का ध्रुवण"],
answer_en: "Change in wave frequency due to relative motion",
answer_hi: "सापेक्ष गति के कारण तरंग आवृत्ति में परिवर्तन",
attempted: false,
selected: ""
},

{
num: 22,
question_en: "In chemistry, what is a 'Covalent Bond'?",
question_hi: "रसायन विज्ञान में, 'सहसंयोजक बंध' क्या है?",
options_en: ["Bond formed by transfer of electrons", "Bond formed by sharing of electron pairs", "Bond between metal and non-metal", "Bond due to electrostatic attraction"],
options_hi: ["इलेक्ट्रॉनों के स्थानांतरण द्वारा बना बंध", "इलेक्ट्रॉन युग्मों के साझाकरण द्वारा बना बंध", "धातु और अधातु के बीच बंध", "विद्युत्स्थैतिक आकर्षण के कारण बंध"],
answer_en: "Bond formed by sharing of electron pairs",
answer_hi: "इलेक्ट्रॉन युग्मों के साझाकरण द्वारा बना बंध",
attempted: false,
selected: ""
},

{
num: 23,
question_en: "What is 'Newton's First Law of Motion'?",
question_hi: "'न्यूटन की गति का प्रथम नियम' क्या है?",
options_en: ["F = ma", "Every action has an equal and opposite reaction", "An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an unbalanced force", "Law of gravitation"],
options_hi: ["F = ma", "हर क्रिया की समान और विपरीत प्रतिक्रिया होती है", "विरामावस्था में वस्तु विरामावस्था में रहती है, और गतिमान वस्तु गतिमान रहती है जब तक कि उस पर कोई असंतुलित बल न लगे", "गुरुत्वाकर्षण का नियम"],
answer_en: "An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an unbalanced force",
answer_hi: "विरामावस्था में वस्तु विरामावस्था में रहती है, और गतिमान वस्तु गतिमान रहती है जब तक कि उस पर कोई असंतुलित बल न लगे",
attempted: false,
selected: ""
},

{
num: 24,
question_en: "In ecology, what is a 'Food Web'?",
question_hi: "पारिस्थितिकी में, 'खाद्य जाल' क्या है?",
options_en: ["Linear sequence of energy transfer", "Complex network of interconnected food chains", "Diagram of trophic levels", "List of producers and consumers"],
options_hi: ["ऊर्जा हस्तांतरण का रैखिक क्रम", "आपस में जुड़े खाद्य श्रृंखलाओं का जटिल नेटवर्क", "पोषी स्तरों का आरेख", "उत्पादकों और उपभोक्ताओं की सूची"],
answer_en: "Complex network of interconnected food chains",
answer_hi: "आपस में जुड़े खाद्य श्रृंखलाओं का जटिल नेटवर्क",
attempted: false,
selected: ""
},

{
num: 25,
question_en: "What is 'Photosynthesis'?",
question_hi: "'प्रकाश संश्लेषण' क्या है?",
options_en: ["Process of breaking down glucose for energy", "Process by which green plants convert light energy into chemical energy", "Process of protein synthesis", "Process of cellular division"],
options_hi: ["ऊर्जा के लिए ग्लूकोज को तोड़ने की प्रक्रिया", "वह प्रक्रिया जिसके द्वारा हरे पौधे प्रकाश ऊर्जा को रासायनिक ऊर्जा में बदलते हैं", "प्रोटीन संश्लेषण की प्रक्रिया", "कोशिकीय विभाजन की प्रक्रिया"],
answer_en: "Process by which green plants convert light energy into chemical energy",
answer_hi: "वह प्रक्रिया जिसके द्वारा हरे पौधे प्रकाश ऊर्जा को रासायनिक ऊर्जा में बदलते हैं",
attempted: false,
selected: ""
},

{
num: 26,
question_en: "In physics, what is 'Work'?",
question_hi: "भौतिकी में, 'कार्य' क्या है?",
options_en: ["Force times distance", "Mass times acceleration", "Energy divided by time", "Pressure times volume"],
options_hi: ["बल गुणा दूरी", "द्रव्यमान गुणा त्वरण", "ऊर्जा भाग समय", "दाब गुणा आयतन"],
answer_en: "Force times distance",
answer_hi: "बल गुणा दूरी",
attempted: false,
selected: ""
},

{
num: 27,
question_en: "What is a 'Gene'?",
question_hi: "'जीन' क्या है?",
options_en: ["A segment of DNA that codes for a functional product", "A type of protein", "A unit of energy", "A cell organelle"],
options_hi: ["DNA का एक खंड जो एक क्रियात्मक उत्पाद के लिए कूटबद्ध होता है", "एक प्रकार का प्रोटीन", "ऊर्जा की एक इकाई", "एक कोशिकांग"],
answer_en: "A segment of DNA that codes for a functional product",
answer_hi: "DNA का एक खंड जो एक क्रियात्मक उत्पाद के लिए कूटबद्ध होता है",
attempted: false,
selected: ""
},

{
num: 28,
question_en: "In geology, what is 'Plate Tectonics'?",
question_hi: "भूविज्ञान में, 'प्लेट विवर्तनिकी' क्या है?",
options_en: ["Study of rocks", "Theory that Earth's lithosphere is divided into plates that move", "Study of fossils", "Study of minerals"],
options_hi: ["चट्टानों का अध्ययन", "सिद्धांत कि पृथ्वी का स्थलमंडल गतिमान प्लेटों में विभाजित है", "जीवाश्मों का अध्ययन", "खनिजों का अध्ययन"],
answer_en: "Theory that Earth's lithosphere is divided into plates that move",
answer_hi: "सिद्धांत कि पृथ्वी का स्थलमंडल गतिमान प्लेटों में विभाजित है",
attempted: false,
selected: ""
},

{
num: 29,
question_en: "What is 'Respiration'?",
question_hi: "'श्वसन' क्या है?",
options_en: ["Process of breathing", "Process of breaking down food molecules to release energy", "Process of photosynthesis", "Process of blood circulation"],
options_hi: ["श्वास लेने की प्रक्रिया", "ऊर्जा मुक्त करने के लिए खाद्य अणुओं को तोड़ने की प्रक्रिया", "प्रकाश संश्लेषण की प्रक्रिया", "रक्त परिसंचरण की प्रक्रिया"],
answer_en: "Process of breaking down food molecules to release energy",
answer_hi: "ऊर्जा मुक्त करने के लिए खाद्य अणुओं को तोड़ने की प्रक्रिया",
attempted: false,
selected: ""
},

{
num: 30,
question_en: "In astronomy, what is a 'Light Year'?",
question_hi: "खगोल विज्ञान में, 'प्रकाश वर्ष' क्या है?",
options_en: ["Unit of time", "Unit of distance (distance light travels in one year)", "Unit of brightness", "Unit of mass"],
options_hi: ["समय की इकाई", "दूरी की इकाई (एक वर्ष में प्रकाश द्वारा तय की गई दूरी)", "चमक की इकाई", "द्रव्यमान की इकाई"],
answer_en: "Unit of distance (distance light travels in one year)",
answer_hi: "दूरी की इकाई (एक वर्ष में प्रकाश द्वारा तय की गई दूरी)",
attempted: false,
selected: ""
},

{
num: 31,
question_en: "What is 'Natural Selection'?",
question_hi: "'प्राकृतिक चयन' क्या है?",
options_en: ["Process where organisms with favorable traits are more likely to survive and reproduce", "Process of selective breeding by humans", "Random change in allele frequencies", "Acquisition of traits during an organism's lifetime"],
options_hi: ["वह प्रक्रिया जहां अनुकूल लक्षणों वाले जीवों के जीवित रहने और प्रजनन की अधिक संभावना होती है", "मनुष्यों द्वारा चयनात्मक प्रजनन की प्रक्रिया", "एलील आवृत्तियों में यादृच्छिक परिवर्तन", "जीव के जीवनकाल के दौरान लक्षणों का अर्जन"],
answer_en: "Process where organisms with favorable traits are more likely to survive and reproduce",
answer_hi: "वह प्रक्रिया जहां अनुकूल लक्षणों वाले जीवों के जीवित रहने और प्रजनन की अधिक संभावना होती है",
attempted: false,
selected: ""
},

{
num: 32,
question_en: "In chemistry, what is the 'pH Scale'?",
question_hi: "रसायन विज्ञान में, 'pH पैमाना' क्या है?",
options_en: ["Scale measuring acidity or basicity from 0 to 14", "Scale for measuring temperature", "Scale for measuring pressure", "Scale for measuring concentration"],
options_hi: ["0 से 14 तक अम्लीयता या क्षारीयता मापने का पैमाना", "तापमान मापने का पैमाना", "दाब मापने का पैमाना", "सांद्रता मापने का पैमाना"],
answer_en: "Scale measuring acidity or basicity from 0 to 14",
answer_hi: "0 से 14 तक अम्लीयता या क्षारीयता मापने का पैमाना",
attempted: false,
selected: ""
},

{
num: 33,
question_en: "What is the 'Water Cycle'?",
question_hi: "'जल चक्र' क्या है?",
options_en: ["Continuous movement of water on, above, and below Earth's surface", "Cycle of carbon through ecosystems", "Cycle of nitrogen in soil", "Process of cloud formation"],
options_hi: ["पृथ्वी की सतह पर, ऊपर और नीचे जल की निरंतर गति", "पारिस्थितिक तंत्रों के माध्यम से कार्बन का चक्र", "मृदा में नाइट्रोजन का चक्र", "बादल निर्माण की प्रक्रिया"],
answer_en: "Continuous movement of water on, above, and below Earth's surface",
answer_hi: "पृथ्वी की सतह पर, ऊपर और नीचे जल की निरंतर गति",
attempted: false,
selected: ""
},

{
num: 34,
question_en: "In physics, what is 'Power'?",
question_hi: "भौतिकी में, 'शक्ति' क्या है?",
options_en: ["Rate of doing work", "Amount of work done", "Force applied", "Energy stored"],
options_hi: ["कार्य करने की दर", "किया गया कार्य की मात्रा", "लगाया गया बल", "संचित ऊर्जा"],
answer_en: "Rate of doing work",
answer_hi: "कार्य करने की दर",
attempted: false,
selected: ""
},

{
num: 35,
question_en: "What is an 'Ecosystem'?",
question_hi: "'पारिस्थितिकी तंत्र' क्या है?",
options_en: ["A community of living organisms and their physical environment", "A single species in an area", "The climate of a region", "A type of biome"],
options_hi: ["जीवों का एक समुदाय और उनका भौतिक पर्यावरण", "एक क्षेत्र में एक ही प्रजाति", "एक क्षेत्र की जलवायु", "एक प्रकार का जीवोम"],
answer_en: "A community of living organisms and their physical environment",
answer_hi: "जीवों का एक समुदाय और उनका भौतिक पर्यावरण",
attempted: false,
selected: ""
},

{
num: 36,
question_en: "In chemistry, what is a 'Mixture'?",
question_hi: "रसायन विज्ञान में, 'मिश्रण' क्या है?",
options_en: ["Substance with fixed composition", "Combination of two or more substances not chemically combined", "Pure element", "Type of compound"],
options_hi: ["निश्चित संघटन वाला पदार्थ", "दो या दो से अधिक पदार्थों का संयोजन जो रासायनिक रूप से संयुक्त नहीं हैं", "शुद्ध तत्व", "एक प्रकार का यौगिक"],
answer_en: "Combination of two or more substances not chemically combined",
answer_hi: "दो या दो से अधिक पदार्थों का संयोजन जो रासायनिक रूप से संयुक्त नहीं हैं",
attempted: false,
selected: ""
},

{
num: 37,
question_en: "What is 'Gravity'?",
question_hi: "'गुरुत्वाकर्षण' क्या है?",
options_en: ["Force that attracts two bodies towards each other", "Force that repels objects", "Force only on Earth", "Force due to electric charge"],
options_hi: ["वह बल जो दो पिंडों को एक-दूसरे की ओर आकर्षित करता है", "वस्तुओं को प्रतिकर्षित करने वाला बल", "केवल पृथ्वी पर कार्य करने वाला बल", "विद्युत आवेश के कारण बल"],
answer_en: "Force that attracts two bodies towards each other",
answer_hi: "वह बल जो दो पिंडों को एक-दूसरे की ओर आकर्षित करता है",
attempted: false,
selected: ""
},

{
num: 38,
question_en: "In biology, what is 'Homeostasis'?",
question_hi: "जीव विज्ञान में, 'समस्थिति' क्या है?",
options_en: ["Process of evolution", "Maintenance of stable internal conditions", "Process of cell division", "Response to stimuli"],
options_hi: ["विकास की प्रक्रिया", "स्थिर आंतरिक स्थितियों का रखरखाव", "कोशिका विभाजन की प्रक्रिया", "उद्दीपनों के प्रति प्रतिक्रिया"],
answer_en: "Maintenance of stable internal conditions",
answer_hi: "स्थिर आंतरिक स्थितियों का रखरखाव",
attempted: false,
selected: ""
},

{
num: 39,
question_en: "What is the 'Periodic Table'?",
question_hi: "'आवर्त सारणी' क्या है?",
options_en: ["Table listing all known elements arranged by atomic number", "Table of chemical reactions", "Table of physical constants", "Table of biological species"],
options_hi: ["सभी ज्ञात तत्वों को परमाणु संख्या के अनुसार व्यवस्थित करने वाली सारणी", "रासायनिक अभिक्रियाओं की सारणी", "भौतिक नियतांकों की सारणी", "जैविक प्रजातियों की सारणी"],
answer_en: "Table listing all known elements arranged by atomic number",
answer_hi: "सभी ज्ञात तत्वों को परमाणु संख्या के अनुसार व्यवस्थित करने वाली सारणी",
attempted: false,
selected: ""
},

{
num: 40,
question_en: "In physics, what is 'Velocity'?",
question_hi: "भौतिकी में, 'वेग' क्या है?",
options_en: ["Speed of an object", "Speed in a given direction", "Change in speed", "Distance traveled"],
options_hi: ["किसी वस्तु की चाल", "दी गई दिशा में चाल", "चाल में परिवर्तन", "तय की गई दूरी"],
answer_en: "Speed in a given direction",
answer_hi: "दी गई दिशा में चाल",
attempted: false,
selected: ""
},

{
num: 41,
question_en: "What is 'DNA'?",
question_hi: "'DNA' क्या है?",
options_en: ["Deoxyribonucleic Acid, the molecule carrying genetic instructions", "A type of protein", "A carbohydrate", "A lipid"],
options_hi: ["डीऑक्सीराइबोन्यूक्लिक एसिड, आनुवंशिक निर्देश वहन करने वाला अणु", "एक प्रकार का प्रोटीन", "एक कार्बोहाइड्रेट", "एक लिपिड"],
answer_en: "Deoxyribonucleic Acid, the molecule carrying genetic instructions",
answer_hi: "डीऑक्सीराइबोन्यूक्लिक एसिड, आनुवंशिक निर्देश वहन करने वाला अणु",
attempted: false,
selected: ""
},

{
num: 42,
question_en: "In chemistry, what is an 'Element'?",
question_hi: "रसायन विज्ञान में, 'तत्व' क्या है?",
options_en: ["Substance made of one type of atom", "Substance made of two or more elements", "Mixture of substances", "Type of molecule"],
options_hi: ["एक प्रकार के परमाणु से बना पदार्थ", "दो या दो से अधिक तत्वों से बना पदार्थ", "पदार्थों का मिश्रण", "अणु का एक प्रकार"],
answer_en: "Substance made of one type of atom",
answer_hi: "एक प्रकार के परमाणु से बना पदार्थ",
attempted: false,
selected: ""
},

{
num: 43,
question_en: "What is 'Evolution'?",
question_hi: "'विकास' क्या है?",
options_en: ["Change in heritable characteristics of populations over generations", "Growth of an individual organism", "Change in weather patterns", "Movement of continents"],
options_hi: ["पीढ़ियों में जनसंख्या की वंशागत विशेषताओं में परिवर्तन", "एक व्यष्टिगत जीव की वृद्धि", "मौसम पैटर्न में परिवर्तन", "महाद्वीपों की गति"],
answer_en: "Change in heritable characteristics of populations over generations",
answer_hi: "पीढ़ियों में जनसंख्या की वंशागत विशेषताओं में परिवर्तन",
attempted: false,
selected: ""
},

{
num: 44,
question_en: "In physics, what is 'Acceleration'?",
question_hi: "भौतिकी में, 'त्वरण' क्या है?",
options_en: ["Rate of change of velocity", "Speed of an object", "Distance traveled per unit time", "Force applied"],
options_hi: ["वेग में परिवर्तन की दर", "किसी वस्तु की चाल", "प्रति इकाई समय तय की गई दूरी", "लगाया गया बल"],
answer_en: "Rate of change of velocity",
answer_hi: "वेग में परिवर्तन की दर",
attempted: false,
selected: ""
},

{
num: 45,
question_en: "What is the 'Cell Theory'?",
question_hi: "'कोशिका सिद्धांत' क्या है?",
options_en: ["All living things are made of cells, cells are the basic unit of life, and cells come from pre-existing cells", "Theory of evolution", "Theory of genetics", "Theory of ecosystems"],
options_hi: ["सभी जीव कोशिकाओं से बने हैं, कोशिका जीवन की मूल इकाई है, और कोशिकाएं पूर्ववर्ती कोशिकाओं से आती हैं", "विकास का सिद्धांत", "आनुवंशिकी का सिद्धांत", "पारिस्थितिकी तंत्र का सिद्धांत"],
answer_en: "All living things are made of cells, cells are the basic unit of life, and cells come from pre-existing cells",
answer_hi: "सभी जीव कोशिकाओं से बने हैं, कोशिका जीवन की मूल इकाई है, और कोशिकाएं पूर्ववर्ती कोशिकाओं से आती हैं",
attempted: false,
selected: ""
},

{
num: 46,
question_en: "In chemistry, what is a 'Compound'?",
question_hi: "रसायन विज्ञान में, 'यौगिक' क्या है?",
options_en: ["Substance made of one type of atom", "Substance made of two or more different elements chemically combined", "Mixture of elements", "Pure substance that cannot be broken down"],
options_hi: ["एक प्रकार के परमाणु से बना पदार्थ", "दो या दो से अधिक विभिन्न तत्वों के रासायनिक रूप से संयुक्त होने से बना पदार्थ", "तत्वों का मिश्रण", "शुद्ध पदार्थ जिसे और नहीं तोड़ा जा सकता"],
answer_en: "Substance made of two or more different elements chemically combined",
answer_hi: "दो या दो से अधिक विभिन्न तत्वों के रासायनिक रूप से संयुक्त होने से बना पदार्थ",
attempted: false,
selected: ""
},

{
num: 47,
question_en: "What is 'Electric Current'?",
question_hi: "'विद्युत धारा' क्या है?",
options_en: ["Flow of electric charge", "Storage of electric charge", "Potential difference", "Resistance to charge flow"],
options_hi: ["विद्युत आवेश का प्रवाह", "विद्युत आवेश का भंडारण", "विभवांतर", "आवेश प्रवाह के लिए प्रतिरोध"],
answer_en: "Flow of electric charge",
answer_hi: "विद्युत आवेश का प्रवाह",
attempted: false,
selected: ""
},

{
num: 48,
question_en: "In biology, what is a 'Chromosome'?",
question_hi: "जीव विज्ञान में, 'गुणसूत्र' क्या है?",
options_en: ["Organelle that produces energy", "Thread-like structure of DNA and protein", "Molecule that carries amino acids", "Structure involved in protein synthesis"],
options_hi: ["ऊर्जा उत्पन्न करने वाला कोशिकांग", "DNA और प्रोटीन की धागे जैसी संरचना", "एमिनो अम्ल वहन करने वाला अणु", "प्रोटीन संश्लेषण में शामिल संरचना"],
answer_en: "Thread-like structure of DNA and protein",
answer_hi: "DNA और प्रोटीन की धागे जैसी संरचना",
attempted: false,
selected: ""
},

{
num: 49,
question_en: "What is the 'Law of Supply and Demand'?",
question_hi: "'आपूर्ति और मांग का नियम' क्या है?",
options_en: ["Economic principle describing relationship between availability and desire for goods", "Physics law of motion", "Biological principle of inheritance", "Chemical law of reactions"],
options_hi: ["वस्तुओं की उपलब्धता और इच्छा के बीच संबंध का वर्णन करने वाला आर्थिक सिद्धांत", "गति का भौतिकी नियम", "वंशागति का जैविक सिद्धांत", "अभिक्रियाओं का रासायनिक नियम"],
answer_en: "Economic principle describing relationship between availability and desire for goods",
answer_hi: "वस्तुओं की उपलब्धता और इच्छा के बीच संबंध का वर्णन करने वाला आर्थिक सिद्धांत",
attempted: false,
selected: ""
},

{
num: 50,
question_en: "In computer science, what is an 'Algorithm'?",
question_hi: "कंप्यूटर विज्ञान में, 'एल्गोरिथम' क्या है?",
options_en: ["Hardware component", "Step-by-step procedure for solving a problem", "Type of programming language", "Data storage device"],
options_hi: ["हार्डवेयर घटक", "किसी समस्या को हल करने के लिए चरण-दर-चरण प्रक्रिया", "प्रोग्रामिंग भाषा का प्रकार", "डेटा संग्रहण उपकरण"],
answer_en: "Step-by-step procedure for solving a problem",
answer_hi: "किसी समस्या को हल करने के लिए चरण-दर-चरण प्रक्रिया",
attempted: false,
selected: ""
}];


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