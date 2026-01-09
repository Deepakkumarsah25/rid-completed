const questions = [
    {
num: 1,
question_en: "What is the principle behind the working of a mass spectrometer?",
question_hi: "मास स्पेक्ट्रोमीटर के काम करने का सिद्धांत क्या है?",
options_en: ["Separation of ions based on charge-to-mass ratio", "Separation based on boiling points", "Diffusion of gases", "Chromatography"],
options_hi: ["आवेश-द्रव्यमान अनुपात के आधार पर आयनों का पृथक्करण", "क्वथनांक के आधार पर पृथक्करण", "गैसों का विसरण", "क्रोमैटोग्राफी"],
answer_en: "Separation of ions based on charge-to-mass ratio",
answer_hi: "आवेश-द्रव्यमान अनुपात के आधार पर आयनों का पृथक्करण",
attempted: false,
selected: ""
},

{
num: 2,
question_en: "In quantum mechanics, what does Heisenberg's Uncertainty Principle state?",
question_hi: "क्वांटम यांत्रिकी में, हाइजेनबर्ग का अनिश्चितता सिद्धांत क्या कहता है?",
options_en: ["Energy and time cannot be simultaneously measured precisely", "Position and momentum cannot be simultaneously measured precisely", "Charge and spin are quantized", "Wave-particle duality exists"],
options_hi: ["ऊर्जा और समय को एक साथ सटीक रूप से नहीं मापा जा सकता", "स्थिति और संवेग को एक साथ सटीक रूप से नहीं मापा जा सकता", "आवेश और स्पिन क्वांटित होते हैं", "तरंग-कण द्वैत मौजूद होता है"],
answer_en: "Position and momentum cannot be simultaneously measured precisely",
answer_hi: "स्थिति और संवेग को एक साथ सटीक रूप से नहीं मापा जा सकता",
attempted: false,
selected: ""
},

{
num: 3,
question_en: "Which of the following is a characteristic of a catalytic reaction?",
question_hi: "निम्नलिखित में से कौन सी एक उत्प्रेरक अभिक्रिया की विशेषता है?",
options_en: ["Increases activation energy", "Gets consumed in the reaction", "Changes the equilibrium constant", "Provides an alternative pathway with lower activation energy"],
options_hi: ["सक्रियण ऊर्जा बढ़ाता है", "अभिक्रिया में उपभुक्त हो जाता है", "साम्य स्थिरांक बदलता है", "कम सक्रियण ऊर्जा वाला वैकल्पिक मार्ग प्रदान करता है"],
answer_en: "Provides an alternative pathway with lower activation energy",
answer_hi: "कम सक्रियण ऊर्जा वाला वैकल्पिक मार्ग प्रदान करता है",
attempted: false,
selected: ""
},

{
num: 4,
question_en: "What is the term for the phenomenon where light exhibits both wave and particle properties?",
question_hi: "उस घटना के लिए क्या शब्द है जहां प्रकाश तरंग और कण दोनों गुण प्रदर्शित करता है?",
options_en: ["Photoelectric effect", "Wave-particle duality", "Quantum entanglement", "Superposition"],
options_hi: ["प्रकाश विद्युत प्रभाव", "तरंग-कण द्वैत", "क्वांटम उलझन", "सुपरपोजिशन"],
answer_en: "Wave-particle duality",
answer_hi: "तरंग-कण द्वैत",
attempted: false,
selected: ""
},

{
num: 5,
question_en: "In genetics, what does the term 'epistasis' refer to?",
question_hi: "आनुवंशिकी में, 'एपिस्टेसिस' शब्द किसे संदर्भित करता है?",
options_en: ["Interaction between alleles of the same gene", "Interaction between genes where one gene masks the effect of another", "Crossing over between homologous chromosomes", "Mutation in a single nucleotide"],
options_hi: ["एक ही जीन के एलीलों के बीच परस्पर क्रिया", "जीनों के बीच परस्पर क्रिया जहां एक जीन दूसरे के प्रभाव को छिपाता है", "समरूप गुणसूत्रों के बीच क्रॉसिंग ओवर", "एकल न्यूक्लियोटाइड में उत्परिवर्तन"],
answer_en: "Interaction between genes where one gene masks the effect of another",
answer_hi: "जीनों के बीच परस्पर क्रिया जहां एक जीन दूसरे के प्रभाव को छिपाता है",
attempted: false,
selected: ""
},

{
num: 6,
question_en: "Which thermodynamic law states that absolute zero cannot be achieved?",
question_hi: "कौन सा ऊष्मागतिकी नियम कहता है कि परम शून्य प्राप्त नहीं किया जा सकता?",
options_en: ["Zeroth Law", "First Law", "Second Law", "Third Law"],
options_hi: ["शून्यवाँ नियम", "प्रथम नियम", "द्वितीय नियम", "तृतीय नियम"],
answer_en: "Third Law",
answer_hi: "तृतीय नियम",
attempted: false,
selected: ""
},

{
num: 7,
question_en: "What is the principle behind the functioning of an Optical Fiber?",
question_hi: "ऑप्टिकल फाइबर के कार्य करने का सिद्धांत क्या है?",
options_en: ["Reflection", "Total Internal Reflection", "Refraction", "Dispersion"],
options_hi: ["परावर्तन", "पूर्ण आंतरिक परावर्तन", "अपवर्तन", "विसरण"],
answer_en: "Total Internal Reflection",
answer_hi: "पूर्ण आंतरिक परावर्तन",
attempted: false,
selected: ""
},

{
num: 8,
question_en: "In organic chemistry, what is Markovnikov's rule used for?",
question_hi: "कार्बनिक रसायन विज्ञान में, मार्कोवनिकोव का नियम किसके लिए प्रयोग किया जाता है?",
options_en: ["Predicting the stability of carbocations", "Predicting the major product in electrophilic addition to unsymmetrical alkenes", "Determining the rate of SN1 reactions", "Identifying chiral centers"],
options_hi: ["कार्बोकैटायनों की स्थिरता की भविष्यवाणी करना", "असममित एल्कीन्स में इलेक्ट्रोफिलिक योगज में प्रमुख उत्पाद की भविष्यवाणी करना", "SN1 अभिक्रियाओं की दर निर्धारित करना", "कायरल केंद्रों की पहचान करना"],
answer_en: "Predicting the major product in electrophilic addition to unsymmetrical alkenes",
answer_hi: "असममित एल्कीन्स में इलेक्ट्रोफिलिक योगज में प्रमुख उत्पाद की भविष्यवाणी करना",
attempted: false,
selected: ""
},

{
num: 9,
question_en: "What is the significance of the Hardy-Weinberg equilibrium principle in population genetics?",
question_hi: "जनसंख्या आनुवंशिकी में हार्डी-वीनबर्ग साम्य सिद्धांत का क्या महत्व है?",
options_en: ["It describes the conditions under which evolution will occur", "It provides a mathematical model to predict allele frequencies in a non-evolving population", "It explains genetic drift", "It measures mutation rates"],
options_hi: ["यह उन स्थितियों का वर्णन करता है जिनके तहत विकास होगा", "यह एक गैर-विकसित हो रही जनसंख्या में एलील आवृत्तियों की भविष्यवाणी करने के लिए एक गणितीय मॉडल प्रदान करता है", "यह आनुवंशिक प्रवाह की व्याख्या करता है", "यह उत्परिवर्तन दरों को मापता है"],
answer_en: "It provides a mathematical model to predict allele frequencies in a non-evolving population",
answer_hi: "यह एक गैर-विकसित हो रही जनसंख्या में एलील आवृत्तियों की भविष्यवाणी करने के लिए एक गणितीय मॉडल प्रदान करता है",
attempted: false,
selected: ""
},

{
num: 10,
question_en: "In atomic physics, what does the term 'degenerate pressure' refer to?",
question_hi: "परमाणु भौतिकी में, 'अपभ्रष्ट दाब' शब्द किसे संदर्भित करता है?",
options_en: ["Pressure due to thermal motion of particles", "Pressure exerted by a degenerate electron gas as described by quantum statistics", "Pressure in the core of a main-sequence star", "Atmospheric pressure"],
options_hi: ["कणों की तापीय गति के कारण दाब", "क्वांटम सांख्यिकी द्वारा वर्णित अपभ्रष्ट इलेक्ट्रॉन गैस द्वारा डाला गया दाब", "मुख्य अनुक्रम तारे के कोर में दाब", "वायुमंडलीय दाब"],
answer_en: "Pressure exerted by a degenerate electron gas as described by quantum statistics",
answer_hi: "क्वांटम सांख्यिकी द्वारा वर्णित अपभ्रष्ट इलेक्ट्रॉन गैस द्वारा डाला गया दाब",
attempted: false,
selected: ""
},

{
num: 11,
question_en: "What is the role of NADP+ in photosynthesis?",
question_hi: "प्रकाश संश्लेषण में NADP+ की क्या भूमिका है?",
options_en: ["It splits water molecules", "It is the final electron acceptor in the light-dependent reactions", "It fixes carbon dioxide", "It transfers energy to chlorophyll"],
options_hi: ["यह जल अणुओं को विभाजित करता है", "यह प्रकाश-निर्भर अभिक्रियाओं में अंतिम इलेक्ट्रॉन स्वीकर्ता है", "यह कार्बन डाइऑक्साइड स्थिर करता है", "यह क्लोरोफिल में ऊर्जा स्थानांतरित करता है"],
answer_en: "It is the final electron acceptor in the light-dependent reactions",
answer_hi: "यह प्रकाश-निर्भर अभिक्रियाओं में अंतिम इलेक्ट्रॉन स्वीकर्ता है",
attempted: false,
selected: ""
},

{
num: 12,
question_en: "Which principle is used to explain the operation of a hydraulic brake system?",
question_hi: "हाइड्रोलिक ब्रेक प्रणाली के संचालन की व्याख्या करने के लिए किस सिद्धांत का उपयोग किया जाता है?",
options_en: ["Bernoulli's Principle", "Pascal's Law", "Archimedes' Principle", "Continuity Equation"],
options_hi: ["बरनौली का सिद्धांत", "पास्कल का नियम", "आर्किमिडीज का सिद्धांत", "सातत्य समीकरण"],
answer_en: "Pascal's Law",
answer_hi: "पास्कल का नियम",
attempted: false,
selected: ""
},

{
num: 13,
question_en: "In molecular biology, what is the function of the enzyme 'DNA ligase'?",
question_hi: "आणविक जीव विज्ञान में, एंजाइम 'DNA लाइगेज' का क्या कार्य है?",
options_en: ["Unwinds the DNA double helix", "Adds nucleotides during replication", "Joins Okazaki fragments on the lagging strand", "Proofreads the newly synthesized DNA"],
options_hi: ["DNA द्वि-कुंडली को खोलता है", "प्रतिकृति के दौरान न्यूक्लियोटाइड जोड़ता है", "पिछड़े स्ट्रैंड पर ओकाज़ाकी खंडों को जोड़ता है", "नव संश्लेषित DNA की प्रूफरीडिंग करता है"],
answer_en: "Joins Okazaki fragments on the lagging strand",
answer_hi: "पिछड़े स्ट्रैंड पर ओकाज़ाकी खंडों को जोड़ता है",
attempted: false,
selected: ""
},

{
num: 14,
question_en: "What is the primary cause of the Coriolis effect on Earth?",
question_hi: "पृथ्वी पर कोरिऑलिस प्रभाव का प्राथमिक कारण क्या है?",
options_en: ["Earth's magnetic field", "Earth's rotation", "Revolution around the Sun", "Gravitational pull of the Moon"],
options_hi: ["पृथ्वी का चुंबकीय क्षेत्र", "पृथ्वी का घूर्णन", "सूर्य के चारों ओर परिक्रमण", "चंद्रमा का गुरुत्वाकर्षण खिंचाव"],
answer_en: "Earth's rotation",
answer_hi: "पृथ्वी का घूर्णन",
attempted: false,
selected: ""
},

{
num: 15,
question_en: "In electrochemistry, what does the Nernst equation describe?",
question_hi: "विद्युत रसायन विज्ञान में, नर्नस्ट समीकरण क्या वर्णन करता है?",
options_en: ["Relationship between cell potential and concentration", "Rate of an electrochemical reaction", "Conductivity of an electrolyte", "Decomposition potential"],
options_hi: ["सेल विभव और सांद्रता के बीच संबंध", "एक विद्युत रासायनिक अभिक्रिया की दर", "एक विद्युत अपघट्य की चालकता", "अपघटन विभव"],
answer_en: "Relationship between cell potential and concentration",
answer_hi: "सेल विभव और सांद्रता के बीच संबंध",
attempted: false,
selected: ""
},

{
num: 16,
question_en: "What is the fundamental principle behind Magnetic Resonance Imaging (MRI)?",
question_hi: "चुंबकीय अनुनाद इमेजिंग (MRI) के पीछे मौलिक सिद्धांत क्या है?",
options_en: ["X-ray diffraction", "Nuclear Magnetic Resonance (NMR) of hydrogen nuclei", "Positron emission", "Ultrasound reflection"],
options_hi: ["एक्स-रे विवर्तन", "हाइड्रोजन नाभिकों का नाभिकीय चुंबकीय अनुनाद (NMR)", "पॉज़िट्रॉन उत्सर्जन", "अल्ट्रासाउंड परावर्तन"],
answer_en: "Nuclear Magnetic Resonance (NMR) of hydrogen nuclei",
answer_hi: "हाइड्रोजन नाभिकों का नाभिकीय चुंबकीय अनुनाद (NMR)",
attempted: false,
selected: ""
},

{
num: 17,
question_en: "In ecology, what does the term 'trophic cascade' refer to?",
question_hi: "पारिस्थितिकी में, 'पोषी सोपान' शब्द किसे संदर्भित करता है?",
options_en: ["Linear sequence of who eats whom", "Indirect effects of predators on non-adjacent trophic levels", "Energy loss between trophic levels", "Cyclic fluctuation of predator and prey populations"],
options_hi: ["कौन किसे खाता है का रैखिक क्रम", "शिकारियों का गैर-आसन्न पोषी स्तरों पर अप्रत्यक्ष प्रभाव", "पोषी स्तरों के बीच ऊर्जा हानि", "शिकारी और शिकार आबादी का चक्रीय उतार-चढ़ाव"],
answer_en: "Indirect effects of predators on non-adjacent trophic levels",
answer_hi: "शिकारियों का गैर-आसन्न पोषी स्तरों पर अप्रत्यक्ष प्रभाव",
attempted: false,
selected: ""
},

{
num: 18,
question_en: "What is the mechanism by which non-competitive inhibitors affect enzyme activity?",
question_hi: "वह तंत्र क्या है जिसके द्वारा गैर-प्रतिस्पर्धी अवरोधक एंजाइम गतिविधि को प्रभावित करते हैं?",
options_en: ["They bind to the active site", "They bind to a site other than the active site, altering the enzyme's shape", "They denature the enzyme", "They compete with the substrate for the active site"],
options_hi: ["वे सक्रिय स्थल से बंधते हैं", "वे सक्रिय स्थल के अलावा किसी अन्य स्थल से बंधते हैं, एंजाइम के आकार को बदल देते हैं", "वे एंजाइम को विकृत कर देते हैं", "वे सक्रिय स्थल के लिए सब्सट्रेट के साथ प्रतिस्पर्धा करते हैं"],
answer_en: "They bind to a site other than the active site, altering the enzyme's shape",
answer_hi: "वे सक्रिय स्थल के अलावा किसी अन्य स्थल से बंधते हैं, एंजाइम के आकार को बदल देते हैं",
attempted: false,
selected: ""
},

{
num: 19,
question_en: "In special relativity, what is the phenomenon known as 'time dilation'?",
question_hi: "विशेष सापेक्षता में, 'समय विस्तारण' के नाम से जानी जाने वाली घटना क्या है?",
options_en: ["Time speeds up for objects moving at high velocities", "Time slows down for objects moving at high velocities relative to a stationary observer", "Time is absolute and never changes", "Gravitational effect on time"],
options_hi: ["उच्च वेग से चलने वाली वस्तुओं के लिए समय तेज हो जाता है", "स्थिर प्रेक्षक के सापेक्ष उच्च वेग से चलने वाली वस्तुओं के लिए समय धीमा हो जाता है", "समय निरपेक्ष है और कभी नहीं बदलता", "समय पर गुरुत्वाकर्षण प्रभाव"],
answer_en: "Time slows down for objects moving at high velocities relative to a stationary observer",
answer_hi: "स्थिर प्रेक्षक के सापेक्ष उच्च वेग से चलने वाली वस्तुओं के लिए समय धीमा हो जाता है",
attempted: false,
selected: ""
},

{
num: 20,
question_en: "What is the principle behind the 'Geiger-Muller counter'?",
question_hi: "'गाइगर-मूलर काउंटर' के पीछे सिद्धांत क्या है?",
options_en: ["Detection of ionizing radiation by ionization of gas", "Detection of infrared radiation", "Measurement of magnetic fields", "Detection of sound waves"],
options_hi: ["गैस के आयनीकरण द्वारा आयनकारी विकिरण का पता लगाना", "अवरक्त विकिरण का पता लगाना", "चुंबकीय क्षेत्रों का मापन", "ध्वनि तरंगों का पता लगाना"],
answer_en: "Detection of ionizing radiation by ionization of gas",
answer_hi: "गैस के आयनीकरण द्वारा आयनकारी विकिरण का पता लगाना",
attempted: false,
selected: ""
},

{
num: 21,
question_en: "In immunology, what is the primary role of 'Memory B cells'?",
question_hi: "प्रतिरक्षा विज्ञान में, 'स्मृति B कोशिकाओं' की प्राथमिक भूमिका क्या है?",
options_en: ["Phagocytose pathogens", "Produce antibodies during primary response", "Mount a rapid and enhanced response upon re-exposure to the same antigen", "Activate T cells"],
options_hi: ["रोगजनकों का भक्षण करना", "प्राथमिक प्रतिक्रिया के दौरान प्रतिरक्षी उत्पन्न करना", "एक ही प्रतिजन के पुनः संपर्क में आने पर तेज और बढ़ी हुई प्रतिक्रिया करना", "T कोशिकाओं को सक्रिय करना"],
answer_en: "Mount a rapid and enhanced response upon re-exposure to the same antigen",
answer_hi: "एक ही प्रतिजन के पुनः संपर्क में आने पर तेज और बढ़ी हुई प्रतिक्रिया करना",
attempted: false,
selected: ""
},

{
num: 22,
question_en: "What does the term 'Gibbs Free Energy' (ΔG) indicate about a chemical reaction?",
question_hi: "रासायनिक अभिक्रिया के बारे में 'गिब्स मुक्त ऊर्जा' (ΔG) शब्द क्या दर्शाता है?",
options_en: ["The heat released or absorbed", "The rate of the reaction", "The spontaneity of the reaction at constant temperature and pressure", "The activation energy"],
options_hi: ["मुक्त या अवशोषित ऊष्मा", "अभिक्रिया की दर", "स्थिर तापमान और दाब पर अभिक्रिया की स्वतःप्रवर्तिता", "सक्रियण ऊर्जा"],
answer_en: "The spontaneity of the reaction at constant temperature and pressure",
answer_hi: "स्थिर तापमान और दाब पर अभिक्रिया की स्वतःप्रवर्तिता",
attempted: false,
selected: ""
},

{
num: 23,
question_en: "Which principle explains why a needle floats on water despite being denser?",
question_hi: "कौन सा सिद्धांत बताता है कि सुई पानी पर क्यों तैरती है भले ही वह सघन हो?",
options_en: ["Buoyancy", "Surface Tension", "Viscosity", "Capillary Action"],
options_hi: ["उत्प्लावन", "पृष्ठ तनाव", "श्यानता", "केशिकाकर्षण"],
answer_en: "Surface Tension",
answer_hi: "पृष्ठ तनाव",
attempted: false,
selected: ""
},

{
num: 24,
question_en: "In astrophysics, what is the 'Chandrasekhar Limit'?",
question_hi: "खगोल भौतिकी में, 'चंद्रशेखर सीमा' क्या है?",
options_en: ["Maximum mass of a white dwarf star", "Maximum mass of a neutron star", "Minimum mass for nuclear fusion in a star", "Distance limit for habitable zones"],
options_hi: ["एक श्वेत वामन तारे का अधिकतम द्रव्यमान", "एक न्यूट्रॉन तारे का अधिकतम द्रव्यमान", "तारे में नाभिकीय संलयन के लिए न्यूनतम द्रव्यमान", "रहने योग्य क्षेत्रों की दूरी सीमा"],
answer_en: "Maximum mass of a white dwarf star",
answer_hi: "एक श्वेत वामन तारे का अधिकतम द्रव्यमान",
attempted: false,
selected: ""
},

{
num: 25,
question_en: "What is the function of 'Cytochrome c' in cellular respiration?",
question_hi: "कोशिकीय श्वसन में 'साइटोक्रोम c' का क्या कार्य है?",
options_en: ["Pumps protons across the inner mitochondrial membrane", "Transfers electrons between Complex III and Complex IV of the electron transport chain", "Converts pyruvate to acetyl-CoA", "Splits glucose into pyruvate"],
options_hi: ["आंतरिक माइटोकॉन्ड्रियल झिल्ली के पार प्रोटॉन पंप करता है", "इलेक्ट्रॉन परिवहन श्रृंखला के कॉम्प्लेक्स III और कॉम्प्लेक्स IV के बीच इलेक्ट्रॉन स्थानांतरित करता है", "पाइरुवेट को एसिटाइल-CoA में परिवर्तित करता है", "ग्लूकोज को पाइरुवेट में विभाजित करता है"],
answer_en: "Transfers electrons between Complex III and Complex IV of the electron transport chain",
answer_hi: "इलेक्ट्रॉन परिवहन श्रृंखला के कॉम्प्लेक्स III और कॉम्प्लेक्स IV के बीच इलेक्ट्रॉन स्थानांतरित करता है",
attempted: false,
selected: ""
},

{
num: 26,
question_en: "What is the fundamental cause of the 'Doppler Effect'?",
question_hi: "'डॉप्लर प्रभाव' का मूल कारण क्या है?",
options_en: ["Change in amplitude of waves", "Relative motion between source and observer", "Change in medium density", "Interference of waves"],
options_hi: ["तरंगों के आयाम में परिवर्तन", "स्रोत और प्रेक्षक के बीच सापेक्ष गति", "माध्यम के घनत्व में परिवर्तन", "तरंगों का व्यतिकरण"],
answer_en: "Relative motion between source and observer",
answer_hi: "स्रोत और प्रेक्षक के बीच सापेक्ष गति",
attempted: false,
selected: ""
},

{
num: 27,
question_en: "In geology, what is the 'Mohorovičić discontinuity' (Moho)?",
question_hi: "भूविज्ञान में, 'मोहोरोविसिक असांतत्य' (मोहो) क्या है?",
options_en: ["Boundary between crust and mantle", "Boundary between mantle and outer core", "Boundary between inner and outer core", "Boundary between lithosphere and asthenosphere"],
options_hi: ["भूपर्पटी और मेंटल के बीच की सीमा", "मेंटल और बाह्य कोर के बीच की सीमा", "आंतरिक और बाह्य कोर के बीच की सीमा", "स्थलमंडल और दुर्बलता मंडल के बीच की सीमा"],
answer_en: "Boundary between crust and mantle",
answer_hi: "भूपर्पटी और मेंटल के बीच की सीमा",
attempted: false,
selected: ""
},

{
num: 28,
question_en: "What does 'Le Chatelier's Principle' predict about a system at equilibrium?",
question_hi: "'ले शातेलिए का सिद्धांत' साम्यावस्था में एक तंत्र के बारे में क्या भविष्यवाणी करता है?",
options_en: ["The position of equilibrium shifts to counteract any change imposed on the system", "The equilibrium constant always remains unchanged", "The rate of forward and reverse reactions become zero", "The system always moves towards higher entropy"],
options_hi: ["साम्य की स्थिति तंत्र पर लगाए गए किसी भी परिवर्तन का प्रतिकार करने के लिए स्थानांतरित हो जाती है", "साम्य स्थिरांक हमेशा अपरिवर्तित रहता है", "अग्र और प्रतीप अभिक्रियाओं की दर शून्य हो जाती है", "तंत्र हमेशा उच्च एन्ट्रॉपी की ओर बढ़ता है"],
answer_en: "The position of equilibrium shifts to counteract any change imposed on the system",
answer_hi: "साम्य की स्थिति तंत्र पर लगाए गए किसी भी परिवर्तन का प्रतिकार करने के लिए स्थानांतरित हो जाती है",
attempted: false,
selected: ""
},

{
num: 29,
question_en: "In electronics, what is the primary function of a 'Zener Diode'?",
question_hi: "इलेक्ट्रॉनिक्स में, 'ज़ेनर डायोड' का प्राथमिक कार्य क्या है?",
options_en: ["Amplification", "Rectification", "Voltage Regulation", "Switching"],
options_hi: ["प्रवर्धन", "दिष्टकारी", "वोल्टेज नियमन", "स्विचिंग"],
answer_en: "Voltage Regulation",
answer_hi: "वोल्टेज नियमन",
attempted: false,
selected: ""
},

{
num: 30,
question_en: "What is the primary role of 'RuBisCO' in the Calvin cycle?",
question_hi: "केल्विन चक्र में 'RuBisCO' की प्राथमिक भूमिका क्या है?",
options_en: ["Regeneration of RuBP", "Fixation of carbon dioxide", "Reduction of 3-PGA", "Production of G3P"],
options_hi: ["RuBP का पुनर्जनन", "कार्बन डाइऑक्साइड का स्थिरीकरण", "3-PGA का अपचयन", "G3P का उत्पादन"],
answer_en: "Fixation of carbon dioxide",
answer_hi: "कार्बन डाइऑक्साइड का स्थिरीकरण",
attempted: false,
selected: ""
},

{
num: 31,
question_en: "Which law of thermodynamics is associated with the concept of entropy?",
question_hi: "ऊष्मागतिकी का कौन सा नियम एन्ट्रॉपी की अवधारणा से जुड़ा है?",
options_en: ["Zeroth Law", "First Law", "Second Law", "Third Law"],
options_hi: ["शून्यवाँ नियम", "प्रथम नियम", "द्वितीय नियम", "तृतीय नियम"],
answer_en: "Second Law",
answer_hi: "द्वितीय नियम",
attempted: false,
selected: ""
},

{
num: 32,
question_en: "In particle physics, what are the carriers of the weak nuclear force?",
question_hi: "कण भौतिकी में, दुर्बल नाभिकीय बल के वाहक क्या हैं?",
options_en: ["Gluons", "Photons", "W and Z bosons", "Gravitons"],
options_hi: ["ग्लुऑन", "फोटॉन", "W और Z बोसॉन", "ग्रेविटॉन"],
answer_en: "W and Z bosons",
answer_hi: "W और Z बोसॉन",
attempted: false,
selected: ""
},

{
num: 33,
question_en: "What is the 'Haber Process' primarily used for?",
question_hi: "'हैबर प्रक्रम' मुख्य रूप से किसके लिए प्रयोग किया जाता है?",
options_en: ["Production of sulfuric acid", "Production of ammonia from nitrogen and hydrogen", "Production of nitric acid", "Electrolysis of water"],
options_hi: ["सल्फ्यूरिक अम्ल का उत्पादन", "नाइट्रोजन और हाइड्रोजन से अमोनिया का उत्पादन", "नाइट्रिक अम्ल का उत्पादन", "जल का विद्युत अपघटन"],
answer_en: "Production of ammonia from nitrogen and hydrogen",
answer_hi: "नाइट्रोजन और हाइड्रोजन से अमोनिया का उत्पादन",
attempted: false,
selected: ""
},

{
num: 34,
question_en: "What is the principle behind the 'Carbon-14 dating' method?",
question_hi: "'कार्बन-14 डेटिंग' पद्धति का सिद्धांत क्या है?",
options_en: ["Radioactive decay of C-14 to N-14 at a known rate", "Measurement of trapped argon gas", "Analysis of tree rings", "Measurement of uranium-lead ratio"],
options_hi: ["ज्ञात दर पर C-14 का N-14 में रेडियोधर्मी क्षय", "फंसी हुई आर्गन गैस का मापन", "वृक्ष के वार्षिक वलयों का विश्लेषण", "यूरेनियम-सीसा अनुपात का मापन"],
answer_en: "Radioactive decay of C-14 to N-14 at a known rate",
answer_hi: "ज्ञात दर पर C-14 का N-14 में रेडियोधर्मी क्षय",
attempted: false,
selected: ""
},

{
num: 35,
question_en: "In neurobiology, what is the role of the 'Nodes of Ranvier'?",
question_hi: "स्नायु जीव विज्ञान में, 'रैनविए की संधियों' की क्या भूमिका है?",
options_en: ["Produce myelin sheath", "Site of neurotransmitter release", "Allow saltatory conduction of nerve impulses", "Synthesize neurotransmitters"],
options_hi: ["मायेलिन आवरण उत्पन्न करना", "न्यूरोट्रांसमीटर मुक्ति का स्थल", "तंत्रिका आवेगों की उल्लंघनात्मक चालन की अनुमति देना", "न्यूरोट्रांसमीटर संश्लेषित करना"],
answer_en: "Allow saltatory conduction of nerve impulses",
answer_hi: "तंत्रिका आवेगों की उल्लंघनात्मक चालन की अनुमति देना",
attempted: false,
selected: ""
},

{
num: 36,
question_en: "What is the 'Pauli Exclusion Principle'?",
question_hi: "'पाउली अपवर्जन सिद्धांत' क्या है?",
options_en: ["No two fermions can occupy the same quantum state simultaneously", "Electrons fill orbitals of lower energy first", "The uncertainty in position and momentum", "Energy is quantized in atoms"],
options_hi: ["कोई दो फर्मियान एक साथ एक ही क्वांटम अवस्था पर कब्जा नहीं कर सकते", "इलेक्ट्रॉन पहले निम्न ऊर्जा के कक्षक भरते हैं", "स्थिति और संवेग में अनिश्चितता", "परमाणुओं में ऊर्जा क्वांटित होती है"],
answer_en: "No two fermions can occupy the same quantum state simultaneously",
answer_hi: "कोई दो फर्मियान एक साथ एक ही क्वांटम अवस्था पर कब्जा नहीं कर सकते",
attempted: false,
selected: ""
},

{
num: 37,
question_en: "Which biogeochemical cycle does NOT have a significant atmospheric component?",
question_hi: "किस जैव-रासायनिक चक्र का कोई महत्वपूर्ण वायुमंडलीय घटक नहीं है?",
options_en: ["Carbon Cycle", "Nitrogen Cycle", "Phosphorus Cycle", "Water Cycle"],
options_hi: ["कार्बन चक्र", "नाइट्रोजन चक्र", "फॉस्फोरस चक्र", "जल चक्र"],
answer_en: "Phosphorus Cycle",
answer_hi: "फॉस्फोरस चक्र",
attempted: false,
selected: ""
},

{
num: 38,
question_en: "What is the primary mechanism of action of penicillin antibiotics?",
question_hi: "पेनिसिलिन एंटीबायोटिक्स की क्रिया का प्राथमिक तंत्र क्या है?",
options_en: ["Inhibit protein synthesis", "Inhibit cell wall synthesis", "Disrupt cell membrane", "Inhibit nucleic acid synthesis"],
options_hi: ["प्रोटीन संश्लेषण को रोकना", "कोशिका भित्ति संश्लेषण को रोकना", "कोशिका झिल्ली को भंग करना", "न्यूक्लिक अम्ल संश्लेषण को रोकना"],
answer_en: "Inhibit cell wall synthesis",
answer_hi: "कोशिका भित्ति संश्लेषण को रोकना",
attempted: false,
selected: ""
},

{
num: 39,
question_en: "In fluid dynamics, what does 'Reynolds Number' determine?",
question_hi: "द्रव गतिकी में, 'रेनॉल्ड्स संख्या' क्या निर्धारित करती है?",
options_en: ["Flow rate of a fluid", "Transition between laminar and turbulent flow", "Pressure drop in a pipe", "Viscosity of a fluid"],
options_hi: ["द्रव का प्रवाह दर", "स्तरीय और विक्षुब्ध प्रवाह के बीच संक्रमण", "एक पाइप में दाब पात", "द्रव की श्यानता"],
answer_en: "Transition between laminar and turbulent flow",
answer_hi: "स्तरीय और विक्षुब्ध प्रवाह के बीच संक्रमण",
attempted: false,
selected: ""
},

{
num: 40,
question_en: "What is the role of 'Telomerase' in eukaryotic cells?",
question_hi: "यूकेरियोटिक कोशिकाओं में 'टेलोमरेज़' की क्या भूमिका है?",
options_en: ["Unwinds DNA during replication", "Adds telomeric repeats to chromosome ends, preventing shortening", "Proofreads DNA", "Joins Okazaki fragments"],
options_hi: ["प्रतिकृति के दौरान DNA को खोलता है", "गुणसूत्रों के सिरों पर टेलोमेरिक पुनरावृत्तियाँ जोड़ता है, छोटा होने से रोकता है", "DNA की प्रूफरीडिंग करता है", "ओकाज़ाकी खंडों को जोड़ता है"],
answer_en: "Adds telomeric repeats to chromosome ends, preventing shortening",
answer_hi: "गुणसूत्रों के सिरों पर टेलोमेरिक पुनरावृत्तियाँ जोड़ता है, छोटा होने से रोकता है",
attempted: false,
selected: ""
},

{
num: 41,
question_en: "What does 'Avogadro's Law' state about gases?",
question_hi: "गैसों के बारे में 'ऐवोगेड्रो का नियम' क्या कहता है?",
options_en: ["Volume is directly proportional to temperature at constant pressure", "Pressure is inversely proportional to volume at constant temperature", "Equal volumes of gases at same temperature and pressure contain equal number of molecules", "The total pressure is the sum of partial pressures"],
options_hi: ["स्थिर दाब पर आयतन तापमान के समानुपाती होता है", "स्थिर तापमान पर दाब आयतन के व्युत्क्रमानुपाती होता है", "समान तापमान और दाब पर गैसों के समान आयतन में अणुओं की समान संख्या होती है", "कुल दाब आंशिक दाबों का योग है"],
answer_en: "Equal volumes of gases at same temperature and pressure contain equal number of molecules",
answer_hi: "समान तापमान और दाब पर गैसों के समान आयतन में अणुओं की समान संख्या होती है",
attempted: false,
selected: ""
},

{
num: 42,
question_en: "In signal transduction, what is the role of 'Second Messengers' like cAMP?",
question_hi: "संकेत अनुवादन में, 'द्वितीय संदेशवाहकों' जैसे cAMP की क्या भूमिका है?",
options_en: ["They are the primary extracellular signals", "They amplify and transmit signals inside the cell", "They are cell surface receptors", "They terminate the signal"],
options_hi: ["वे प्राथमिक कोशिका बाह्य संकेत हैं", "वे संकेत को कोशिका के अंदर प्रवर्धित और संचारित करते हैं", "वे कोशिका सतह ग्राही हैं", "वे संकेत को समाप्त करते हैं"],
answer_en: "They amplify and transmit signals inside the cell",
answer_hi: "वे संकेत को कोशिका के अंदर प्रवर्धित और संचारित करते हैं",
attempted: false,
selected: ""
},

{
num: 43,
question_en: "What is the 'Stefan-Boltzmann Law' related to?",
question_hi: "'स्टीफन-बोल्ट्जमैन नियम' किससे संबंधित है?",
options_en: ["Blackbody radiation", "Photoelectric effect", "Wave-particle duality", "Radioactive decay"],
options_hi: ["कृष्णिका विकिरण", "प्रकाश विद्युत प्रभाव", "तरंग-कण द्वैत", "रेडियोधर्मी क्षय"],
answer_en: "Blackbody radiation",
answer_hi: "कृष्णिका विकिरण",
attempted: false,
selected: ""
},

{
num: 44,
question_en: "What is the primary function of the 'Lymphatic System'?",
question_hi: "'लसीका प्रणाली' का प्राथमिक कार्य क्या है?",
options_en: ["Transport oxygen", "Transport hormones", "Return interstitial fluid to blood and provide immune defense", "Produce bile"],
options_hi: ["ऑक्सीजन का परिवहन", "हार्मोनों का परिवहन", "अंतर्कोशिकीय द्रव को रक्त में वापस लाना और प्रतिरक्षा सुरक्षा प्रदान करना", "पित्त उत्पन्न करना"],
answer_en: "Return interstitial fluid to blood and provide immune defense",
answer_hi: "अंतर्कोशिकीय द्रव को रक्त में वापस लाना और प्रतिरक्षा सुरक्षा प्रदान करना",
attempted: false,
selected: ""
},

{
num: 45,
question_en: "In physical chemistry, what is 'Colligative Property'?",
question_hi: "भौतिक रसायन विज्ञान में, 'अणुसंख्य गुणधर्म' क्या है?",
options_en: ["Property that depends on the identity of the solute particles", "Property that depends only on the number of solute particles, not their identity", "Property related to color", "Property related to conductivity"],
options_hi: ["वह गुण जो विलेय कणों की पहचान पर निर्भर करता है", "वह गुण जो केवल विलेय कणों की संख्या पर निर्भर करता है, उनकी पहचान पर नहीं", "रंग से संबंधित गुण", "चालकता से संबंधित गुण"],
answer_en: "Property that depends only on the number of solute particles, not their identity",
answer_hi: "वह गुण जो केवल विलेय कणों की संख्या पर निर्भर करता है, उनकी पहचान पर नहीं",
attempted: false,
selected: ""
},

{
num: 46,
question_en: "What is the 'Miller-Urey experiment' famous for?",
question_hi: "'मिलर-यूरे प्रयोग' किस लिए प्रसिद्ध है?",
options_en: ["Demonstrating natural selection", "Demonstrating the formation of organic compounds from inorganic precursors under simulated early Earth conditions", "Discovering DNA structure", "Proving germ theory"],
options_hi: ["प्राकृतिक चयन का प्रदर्शन करना", "सिम्युलेटेड प्रारंभिक पृथ्वी की स्थितियों में अकार्बनिक अग्रदूतों से कार्बनिक यौगिकों के निर्माण का प्रदर्शन करना", "DNA संरचना की खोज", "रोगाणु सिद्धांत सिद्ध करना"],
answer_en: "Demonstrating the formation of organic compounds from inorganic precursors under simulated early Earth conditions",
answer_hi: "सिम्युलेटेड प्रारंभिक पृथ्वी की स्थितियों में अकार्बनिक अग्रदूतों से कार्बनिक यौगिकों के निर्माण का प्रदर्शन करना",
attempted: false,
selected: ""
},

{
num: 47,
question_en: "In optics, what is 'Total Internal Reflection'?",
question_hi: "प्रकाशिकी में, 'पूर्ण आंतरिक परावर्तन' क्या है?",
options_en: ["Reflection from a shiny surface", "Reflection that occurs when light travels from a denser to a rarer medium at an angle greater than the critical angle", "Refraction at a boundary", "Dispersion of light"],
options_hi: ["चमकदार सतह से परावर्तन", "वह परावर्तन जो तब होता है जब प्रकाश सघन से विरल माध्यम में क्रांतिक कोण से अधिक कोण पर यात्रा करता है", "सीमा पर अपवर्तन", "प्रकाश का विसरण"],
answer_en: "Reflection that occurs when light travels from a denser to a rarer medium at an angle greater than the critical angle",
answer_hi: "वह परावर्तन जो तब होता है जब प्रकाश सघन से विरल माध्यम में क्रांतिक कोण से अधिक कोण पर यात्रा करता है",
attempted: false,
selected: ""
},

{
num: 48,
question_en: "What is the 'Krebs Cycle' also known as?",
question_hi: "'क्रेब्स चक्र' को और किस नाम से जाना जाता है?",
options_en: ["Glycolysis", "Citric Acid Cycle", "Electron Transport Chain", "Calvin Cycle"],
options_hi: ["ग्लाइकोलाइसिस", "सिट्रिक अम्ल चक्र", "इलेक्ट्रॉन परिवहन श्रृंखला", "केल्विन चक्र"],
answer_en: "Citric Acid Cycle",
answer_hi: "सिट्रिक अम्ल चक्र",
attempted: false,
selected: ""
},

{
num: 49,
question_en: "What is the primary role of 'Bile' in digestion?",
question_hi: "पाचन में 'पित्त' की प्राथमिक भूमिका क्या है?",
options_en: ["Break down proteins", "Emulsify fats", "Break down carbohydrates", "Neutralize stomach acid"],
options_hi: ["प्रोटीन तोड़ना", "वसा का इमल्सीकरण करना", "कार्बोहाइड्रेट तोड़ना", "आमाशयिक अम्ल को उदासीन करना"],
answer_en: "Emulsify fats",
answer_hi: "वसा का इमल्सीकरण करना",
attempted: false,
selected: ""
},

{
num: 50,
question_en: "In electronics, what is the function of a 'Transistor' in a circuit?",
question_hi: "इलेक्ट्रॉनिक्स में, एक परिपथ में 'ट्रांजिस्टर' का कार्य क्या है?",
options_en: ["Store electrical energy", "Amplify or switch electronic signals", "Convert AC to DC", "Regulate voltage"],
options_hi: ["विद्युत ऊर्जा संग्रहीत करना", "इलेक्ट्रॉनिक संकेतों को प्रवर्धित या स्विच करना", "AC को DC में बदलना", "वोल्टेज नियमित करना"],
answer_en: "Amplify or switch electronic signals",
answer_hi: "इलेक्ट्रॉनिक संकेतों को प्रवर्धित या स्विच करना",
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