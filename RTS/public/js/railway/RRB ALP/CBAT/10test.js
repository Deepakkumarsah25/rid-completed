const questions = [
    {
num: 1,
question_en: "In quantum chromodynamics, what is the property of quarks that gives rise to the strong nuclear force?",
question_hi: "क्वांटम क्रोमोडायनामिक्स में, क्वार्कों का वह गुण क्या है जो प्रबल नाभिकीय बल को जन्म देता है?",
options_en: ["Electric Charge", "Spin", "Color Charge", "Flavor"],
options_hi: ["विद्युत आवेश", "चक्रण", "रंग आवेश", "स्वाद"],
answer_en: "Color Charge",
answer_hi: "रंग आवेश",
attempted: false,
selected: ""
},

{
num: 2,
question_en: "What is the Penrose-Hawking singularity theorem in general relativity primarily concerned with?",
question_hi: "सामान्य सापेक्षता में पेनरोज़-हॉकिंग विलक्षणता प्रमेय मुख्य रूप से किससे संबंधित है?",
options_en: ["Existence of black holes under certain conditions", "Expansion of the universe", "Behavior of gravitational waves", "Quantum fluctuations in spacetime"],
options_hi: ["कुछ शर्तों के तहत ब्लैक होल का अस्तित्व", "ब्रह्मांड का विस्तार", "गुरुत्वाकर्षण तरंगों का व्यवहार", "स्पेसटाइम में क्वांटम उतार-चढ़ाव"],
answer_en: "Existence of black holes under certain conditions",
answer_hi: "कुछ शर्तों के तहत ब्लैक होल का अस्तित्व",
attempted: false,
selected: ""
},

{
num: 3,
question_en: "Which biochemical pathway is responsible for the generation of NADPH and pentoses, independent of the Calvin cycle?",
question_hi: "कौन सा जैवरासायनिक मार्ग NADPH और पेंटोज़ का उत्पादन करने के लिए जिम्मेदार है, जो केल्विन चक्र से स्वतंत्र है?",
options_en: ["Glycolysis", "Pentose Phosphate Pathway", "Citric Acid Cycle", "Gluconeogenesis"],
options_hi: ["ग्लाइकोलाइसिस", "पेंटोज़ फॉस्फेट मार्ग", "सिट्रिक अम्ल चक्र", "ग्लूकोनियोजेनेसिस"],
answer_en: "Pentose Phosphate Pathway",
answer_hi: "पेंटोज़ फॉस्फेट मार्ग",
attempted: false,
selected: ""
},

{
num: 4,
question_en: "In the context of topological insulators, what is protected by time-reversal symmetry?",
question_hi: "टोपोलॉजिकल इंसुलेटरों के संदर्भ में, समय-विपरीत सममिति द्वारा क्या संरक्षित होता है?",
options_en: ["Energy gap", "Surface states", "Bulk conductivity", "Magnetic ordering"],
options_hi: ["ऊर्जा अंतराल", "सतह अवस्थाएँ", "आयतन चालकता", "चुंबकीय क्रम"],
answer_en: "Surface states",
answer_hi: "सतह अवस्थाएँ",
attempted: false,
selected: ""
},

{
num: 5,
question_en: "What is the primary mechanism by which CRISPR-Cas9 system achieves targeted DNA cleavage?",
question_hi: "CRISPR-Cas9 प्रणाली लक्षित DNA विदारण किस प्राथमिक तंत्र द्वारा प्राप्त करती है?",
options_en: ["Homologous recombination", "Guide RNA-directed Cas9 nuclease activity", "Zinc finger nuclease action", "Transposon-mediated insertion"],
options_hi: ["समरूप पुनर्संयोजन", "गाइड RNA-निर्देशित Cas9 न्यूक्लिएज़ गतिविधि", "जिंक फिंगर न्यूक्लिएज़ क्रिया", "ट्रांसपोज़ॉन-मध्यस्थ प्रवेशन"],
answer_en: "Guide RNA-directed Cas9 nuclease activity",
answer_hi: "गाइड RNA-निर्देशित Cas9 न्यूक्लिएज़ गतिविधि",
attempted: false,
selected: ""
},

{
num: 6,
question_en: "According to the BCS theory, what is the origin of superconductivity in conventional superconductors?",
question_hi: "BCS सिद्धांत के अनुसार, पारंपरिक अतिचालकों में अतिचालकता का मूल क्या है?",
options_en: ["Phonon-mediated electron pairing", "Magnetic spin interactions", "Quantum tunneling", "High electron mobility"],
options_hi: ["फोनॉन-मध्यस्थ इलेक्ट्रॉन युग्मन", "चुंबकीय चक्रण अंतःक्रिया", "क्वांटम सुरंगन", "उच्च इलेक्ट्रॉन गतिशीलता"],
answer_en: "Phonon-mediated electron pairing",
answer_hi: "फोनॉन-मध्यस्थ इलेक्ट्रॉन युग्मन",
attempted: false,
selected: ""
},

{
num: 7,
question_en: "In population genetics, what does Wright's F-statistic (FST) primarily measure?",
question_hi: "जनसंख्या आनुवंशिकी में, राइट का F-सांख्यिकी (FST) मुख्य रूप से क्या मापता है?",
options_en: ["Mutation rate", "Genetic differentiation between subpopulations", "Inbreeding coefficient", "Effective population size"],
options_hi: ["उत्परिवर्तन दर", "उप-जनसंख्या के बीच आनुवंशिक विभेदीकरण", "सगोत्र प्रजनन गुणांक", "प्रभावी जनसंख्या आकार"],
answer_en: "Genetic differentiation between subpopulations",
answer_hi: "उप-जनसंख्या के बीच आनुवंशिक विभेदीकरण",
attempted: false,
selected: ""
},

{
num: 8,
question_en: "What is the principle behind the operation of a scanning tunneling microscope (STM)?",
question_hi: "स्कैनिंग टनलिंग माइक्रोस्कोप (STM) के संचालन का सिद्धांत क्या है?",
options_en: ["Atomic force repulsion", "Quantum tunneling of electrons", "Photon emission", "Magnetic resonance"],
options_hi: ["परमाणु बल प्रतिकर्षण", "इलेक्ट्रॉनों का क्वांटम सुरंगन", "फोटॉन उत्सर्जन", "चुंबकीय अनुनाद"],
answer_en: "Quantum tunneling of electrons",
answer_hi: "इलेक्ट्रॉनों का क्वांटम सुरंगन",
attempted: false,
selected: ""
},

{
num: 9,
question_en: "In the context of enzyme kinetics, what does the Lineweaver-Burk plot linearize?",
question_hi: "एंजाइम गतिजी के संदर्भ में, लाइनवीवर-बर्क आरेख क्या रैखिक करता है?",
options_en: ["Michaelis-Menten equation", "Hill equation", "Arrhenius equation", "Van't Hoff equation"],
options_hi: ["माइकाएलिस-मेन्टेन समीकरण", "हिल समीकरण", "आरहेनियस समीकरण", "वांट हॉफ समीकरण"],
answer_en: "Michaelis-Menten equation",
answer_hi: "माइकाएलिस-मेन्टेन समीकरण",
attempted: false,
selected: ""
},

{
num: 10,
question_en: "What phenomenon is described by the Ginzburg-Landau theory in superconductivity?",
question_hi: "अतिचालकता में गिन्ज़बर्ग-लैंडाऊ सिद्धांत किस घटना का वर्णन करता है?",
options_en: ["Critical temperature", "Phase transition and order parameter", "London penetration depth", "Josephson effect"],
options_hi: ["क्रांतिक तापमान", "फेज संक्रमण और आदेश प्राचल", "लंदन अंतर्वेशन गहराई", "जोसेफसन प्रभाव"],
answer_en: "Phase transition and order parameter",
answer_hi: "फेज संक्रमण और आदेश प्राचल",
attempted: false,
selected: ""
},

{
num: 11,
question_en: "In immunology, what is the primary function of the Major Histocompatibility Complex (MHC) class I molecules?",
question_hi: "प्रतिरक्षा विज्ञान में, प्रमुख ऊतक अनुरूपता परिसर (MHC) वर्ग I अणुओं का प्राथमिक कार्य क्या है?",
options_en: ["Presentation of exogenous antigens to CD4+ T cells", "Presentation of endogenous antigens to CD8+ T cells", "Activation of B cells", "Complement activation"],
options_hi: ["CD4+ T कोशिकाओं को बहिजन्य प्रतिजन प्रस्तुत करना", "CD8+ T कोशिकाओं को अंतर्जन्य प्रतिजन प्रस्तुत करना", "B कोशिकाओं का सक्रियण", "पूरक सक्रियण"],
answer_en: "Presentation of endogenous antigens to CD8+ T cells",
answer_hi: "CD8+ T कोशिकाओं को अंतर्जन्य प्रतिजन प्रस्तुत करना",
attempted: false,
selected: ""
},

{
num: 12,
question_en: "What is the Chandrasekhar-Friedmann-Lemaître-Robertson-Walker (FLRW) metric used to describe?",
question_hi: "चंद्रशेखर-फ्रीडमैन-लैमाइत्रे-रॉबर्टसन-वॉकर (FLRW) मीट्रिक क्या वर्णन करने के लिए प्रयोग किया जाता है?",
options_en: ["Black hole geometry", "Homogeneous and isotropic expanding universe", "Gravitational waves", "Quantum foam"],
options_hi: ["ब्लैक होल ज्यामिति", "समांगी और समदैशिक विस्तारशील ब्रह्मांड", "गुरुत्वाकर्षण तरंगें", "क्वांटम फोम"],
answer_en: "Homogeneous and isotropic expanding universe",
answer_hi: "समांगी और समदैशिक विस्तारशील ब्रह्मांड",
attempted: false,
selected: ""
},

{
num: 13,
question_en: "In organic synthesis, what is the role of a Grignard reagent?",
question_hi: "कार्बनिक संश्लेषण में, ग्रिग्नार्ड अभिकर्मक की क्या भूमिका है?",
options_en: ["Oxidizing agent", "Nucleophile for carbon-carbon bond formation", "Acid catalyst", "Reducing agent"],
options_hi: ["ऑक्सीकारक", "कार्बन-कार्बन बंध निर्माण के लिए न्यूक्लियोफाइल", "अम्ल उत्प्रेरक", "अपचायक"],
answer_en: "Nucleophile for carbon-carbon bond formation",
answer_hi: "कार्बन-कार्बन बंध निर्माण के लिए न्यूक्लियोफाइल",
attempted: false,
selected: ""
},

{
num: 14,
question_en: "What does the Gauss-Bonnet theorem in differential geometry relate?",
question_hi: "अवकल ज्यामिति में गॉस-बोनेट प्रमेय क्या संबंधित करती है?",
options_en: ["Curvature of a surface to its topology", "Distance and geodesics", "Tensor fields", "Manifold dimensions"],
options_hi: ["एक सतह की वक्रता को उसकी टोपोलॉजी से", "दूरी और भूमितिज", "टेंसर क्षेत्र", "मैनिफोल्ड आयाम"],
answer_en: "Curvature of a surface to its topology",
answer_hi: "एक सतह की वक्रता को उसकी टोपोलॉजी से",
attempted: false,
selected: ""
},

{
num: 15,
question_en: "Which metabolic process in plants is primarily responsible for photorespiration?",
question_hi: "पौधों में कौन सी चयापचय प्रक्रिया प्रकाशश्वसन के लिए मुख्य रूप से जिम्मेदार है?",
options_en: ["Rubisco's oxygenase activity", "Cyclic electron flow", "C4 carbon fixation", "Glycolysis"],
options_hi: ["रूबिस्को की ऑक्सीजनेज गतिविधि", "चक्रीय इलेक्ट्रॉन प्रवाह", "C4 कार्बन स्थिरीकरण", "ग्लाइकोलाइसिस"],
answer_en: "Rubisco's oxygenase activity",
answer_hi: "रूबिस्को की ऑक्सीजनेज गतिविधि",
attempted: false,
selected: ""
},

{
num: 16,
question_en: "In the Standard Model of particle physics, what breaks the electroweak symmetry?",
question_hi: "कण भौतिकी के मानक मॉडल में, क्या विद्युत-दुर्बल सममिति को तोड़ता है?",
options_en: ["The strong force", "The Higgs mechanism", "Quantum chromodynamics", "Neutrino oscillations"],
options_hi: ["प्रबल बल", "हिग्स तंत्र", "क्वांटम क्रोमोडायनामिक्स", "न्यूट्रिनो दोलन"],
answer_en: "The Higgs mechanism",
answer_hi: "हिग्स तंत्र",
attempted: false,
selected: ""
},

{
num: 17,
question_en: "What is the primary function of the spliceosome in eukaryotic cells?",
question_hi: "यूकेरियोटिक कोशिकाओं में स्प्लिसोसोम का प्राथमिक कार्य क्या है?",
options_en: ["DNA replication", "Removal of introns from pre-mRNA", "Protein folding", "Ribosome assembly"],
options_hi: ["DNA प्रतिकृति", "pre-mRNA से इंट्रॉनों को हटाना", "प्रोटीन फोल्डिंग", "राइबोसोम संयोजन"],
answer_en: "Removal of introns from pre-mRNA",
answer_hi: "pre-mRNA से इंट्रॉनों को हटाना",
attempted: false,
selected: ""
},

{
num: 18,
question_en: "In fluid mechanics, what does the Navier-Stokes equation describe?",
question_hi: "द्रव यांत्रिकी में, नेवियर-स्टोक्स समीकरण क्या वर्णन करती है?",
options_en: ["Conservation of mass for incompressible fluids", "Motion of viscous fluid substances", "Bernoulli's principle", "Turbulence onset"],
options_hi: ["असंपीड्य द्रवों के लिए द्रव्यमान का संरक्षण", "श्यान द्रव पदार्थों की गति", "बरनौली का सिद्धांत", "अशांति आरंभ"],
answer_en: "Motion of viscous fluid substances",
answer_hi: "श्यान द्रव पदार्थों की गति",
attempted: false,
selected: ""
},

{
num: 19,
question_en: "What is the role of Shine-Dalgarno sequence in prokaryotic translation?",
question_hi: "प्रोकैरियोटिक अनुवाद में शाइन-डलगार्नो अनुक्रम की क्या भूमिका है?",
options_en: ["Transcription termination", "Ribosome binding site for mRNA", "tRNA anticodon recognition", "Protein export signal"],
options_hi: ["अनुलेखन समापन", "mRNA के लिए राइबोसोम बंधन स्थल", "tRNA एंटीकोडोन मान्यता", "प्रोटीन निर्यात संकेत"],
answer_en: "Ribosome binding site for mRNA",
answer_hi: "mRNA के लिए राइबोसोम बंधन स्थल",
attempted: false,
selected: ""
},

{
num: 20,
question_en: "In cosmology, what does the term 'baryon acoustic oscillations' (BAO) refer to?",
question_hi: "विश्वविद्यापीठ में, 'बैर्योन ध्वनिक दोलन' (BAO) शब्द किसे संदर्भित करता है?",
options_en: ["Sound waves in the early universe that imprint a characteristic scale", "Quantum fluctuations in inflation", "Dark matter halo formation", "Gamma-ray bursts"],
options_hi: ["प्रारंभिक ब्रह्मांड में ध्वनि तरंगें जो एक विशिष्ट पैमाना अंकित करती हैं", "मुद्रास्फीति में क्वांटम उतार-चढ़ाव", "डार्क मैटर हैलो निर्माण", "गामा-रे विस्फोट"],
answer_en: "Sound waves in the early universe that imprint a characteristic scale",
answer_hi: "प्रारंभिक ब्रह्मांड में ध्वनि तरंगें जो एक विशिष्ट पैमाना अंकित करती हैं",
attempted: false,
selected: ""
},

{
num: 21,
question_en: "What is the principle behind the functioning of a laser (Light Amplification by Stimulated Emission of Radiation)?",
question_hi: "लेजर (प्रेरित उत्सर्जन द्वारा प्रकाश प्रवर्धन) के कार्य करने का सिद्धांत क्या है?",
options_en: ["Spontaneous emission", "Stimulated emission causing population inversion", "Absorption of photons", "Reflection in a cavity"],
options_hi: ["सहज उत्सर्जन", "जनसंख्या व्युत्क्रमण पैदा करने वाला प्रेरित उत्सर्जन", "फोटॉनों का अवशोषण", "एक गुहिका में परावर्तन"],
answer_en: "Stimulated emission causing population inversion",
answer_hi: "जनसंख्या व्युत्क्रमण पैदा करने वाला प्रेरित उत्सर्जन",
attempted: false,
selected: ""
},

{
num: 22,
question_en: "In the context of neural networks, what does the backpropagation algorithm accomplish?",
question_hi: "न्यूरल नेटवर्क के संदर्भ में, बैकप्रोपेगेशन एल्गोरिदम क्या पूरा करता है?",
options_en: ["Forward pass of data", "Calculation of error gradients for weight adjustment", "Initialization of weights", "Activation function selection"],
options_hi: ["डेटा का अग्र पास", "भार समायोजन के लिए त्रुटि ग्रेडिएंट की गणना", "भारों का प्रारंभिकीकरण", "सक्रियण फ़ंक्शन चयन"],
answer_en: "Calculation of error gradients for weight adjustment",
answer_hi: "भार समायोजन के लिए त्रुटि ग्रेडिएंट की गणना",
attempted: false,
selected: ""
},

{
num: 23,
question_en: "What is the primary product of the enzyme nitrogenase in nitrogen-fixing bacteria?",
question_hi: "नाइट्रोजन-स्थिरीकरण करने वाले जीवाणुओं में एंजाइम नाइट्रोजिनेज का प्राथमिक उत्पाद क्या है?",
options_en: ["Nitrate (NO3-)", "Ammonia (NH3)", "Nitrite (NO2-)", "Nitrous oxide (N2O)"],
options_hi: ["नाइट्रेट (NO3-)", "अमोनिया (NH3)", "नाइट्राइट (NO2-)", "नाइट्रस ऑक्साइड (N2O)"],
answer_en: "Ammonia (NH3)",
answer_hi: "अमोनिया (NH3)",
attempted: false,
selected: ""
},

{
num: 24,
question_en: "In quantum computing, what property of qubits allows for superposition?",
question_hi: "क्वांटम कंप्यूटिंग में, क्यूबिट्स का कौन सा गुण सुपरपोजिशन की अनुमति देता है?",
options_en: ["Entanglement", "Phase coherence", "Ability to be in |0⟩ and |1⟩ states simultaneously", "High fidelity"],
options_hi: ["उलझाव", "फेज कॉहरेंस", "एक साथ |0⟩ और |1⟩ अवस्थाओं में रहने की क्षमता", "उच्च फिडेलिटी"],
answer_en: "Ability to be in |0⟩ and |1⟩ states simultaneously",
answer_hi: "एक साथ |0⟩ और |1⟩ अवस्थाओं में रहने की क्षमता",
attempted: false,
selected: ""
},

{
num: 25,
question_en: "What is the Warburg effect observed in cancer cell metabolism?",
question_hi: "कैंसर कोशिका चयापचय में देखा गया वारबर्ग प्रभाव क्या है?",
options_en: ["Increased oxidative phosphorylation", "Preference for glycolysis even in aerobic conditions", "Enhanced fatty acid oxidation", "Suppressed glucose uptake"],
options_hi: ["बढ़ी हुई ऑक्सीडेटिव फॉस्फोराइलेशन", "ऐरोबिक परिस्थितियों में भी ग्लाइकोलाइसिस को प्राथमिकता", "बढ़ी हुई फैटी एसिड ऑक्सीकरण", "दबी हुई ग्लूकोज अवशोषण"],
answer_en: "Preference for glycolysis even in aerobic conditions",
answer_hi: "ऐरोबिक परिस्थितियों में भी ग्लाइकोलाइसिस को प्राथमिकता",
attempted: false,
selected: ""
},

{
num: 26,
question_en: "In the theory of elasticity, what does Hooke's law state for small deformations?",
question_hi: "प्रत्यास्थता के सिद्धांत में, हुक का नियम छोटी विरूपणों के लिए क्या कहता है?",
options_en: ["Stress is proportional to strain", "Strain is proportional to temperature", "Stress is independent of material", "Deformation is permanent"],
options_hi: ["प्रतिबल विकृति के समानुपाती होता है", "विकृति तापमान के समानुपाती होती है", "प्रतिबल पदार्थ से स्वतंत्र होता है", "विरूपण स्थायी होता है"],
answer_en: "Stress is proportional to strain",
answer_hi: "प्रतिबल विकृति के समानुपाती होता है",
attempted: false,
selected: ""
},

{
num: 27,
question_en: "What is the primary role of the ribosome in protein synthesis?",
question_hi: "प्रोटीन संश्लेषण में राइबोसोम की प्राथमिक भूमिका क्या है?",
options_en: ["DNA unwinding", "mRNA synthesis", "Catalyzing peptide bond formation", "Protein folding"],
options_hi: ["DNA अनलाइनिंग", "mRNA संश्लेषण", "पेप्टाइड बंध निर्माण को उत्प्रेरित करना", "प्रोटीन फोल्डिंग"],
answer_en: "Catalyzing peptide bond formation",
answer_hi: "पेप्टाइड बंध निर्माण को उत्प्रेरित करना",
attempted: false,
selected: ""
},

{
num: 28,
question_en: "In electrodynamics, what does the Lorentz force law describe?",
question_hi: "विद्युतगतिकी में, लोरेंत्ज़ बल नियम क्या वर्णन करता है?",
options_en: ["Force on a charged particle in electromagnetic fields", "Induced electromotive force", "Energy of a magnetic dipole", "Capacitance of a system"],
options_hi: ["विद्युत चुंबकीय क्षेत्रों में एक आवेशित कण पर बल", "प्रेरित विद्युत वाहक बल", "एक चुंबकीय द्विध्रुव की ऊर्जा", "एक तंत्र की धारिता"],
answer_en: "Force on a charged particle in electromagnetic fields",
answer_hi: "विद्युत चुंबकीय क्षेत्रों में एक आवेशित कण पर बल",
attempted: false,
selected: ""
},

{
num: 29,
question_en: "What is the function of the enzyme reverse transcriptase?",
question_hi: "एंजाइम रिवर्स ट्रांसक्रिप्टेज का कार्य क्या है?",
options_en: ["Synthesizes DNA from an RNA template", "Synthesizes RNA from a DNA template", "Unwinds DNA double helix", "Repairs DNA damage"],
options_hi: ["RNA टेम्पलेट से DNA संश्लेषित करता है", "DNA टेम्पलेट से RNA संश्लेषित करता है", "DNA द्वि-कुंडली को खोलता है", "DNA क्षति की मरम्मत करता है"],
answer_en: "Synthesizes DNA from an RNA template",
answer_hi: "RNA टेम्पलेट से DNA संश्लेषित करता है",
attempted: false,
selected: ""
},

{
num: 30,
question_en: "In thermodynamics, what is the significance of the Carnot cycle?",
question_hi: "ऊष्मागतिकी में, कार्नोट चक्र का क्या महत्व है?",
options_en: ["It represents the most efficient possible heat engine cycle", "It describes adiabatic processes", "It measures entropy change", "It defines absolute zero"],
options_hi: ["यह संभवतः सबसे कुशल ऊष्मा इंजन चक्र का प्रतिनिधित्व करता है", "यह रुद्धोष्म प्रक्रियाओं का वर्णन करता है", "यह एंट्रॉपी परिवर्तन मापता है", "यह परम शून्य को परिभाषित करता है"],
answer_en: "It represents the most efficient possible heat engine cycle",
answer_hi: "यह संभवतः सबसे कुशल ऊष्मा इंजन चक्र का प्रतिनिधित्व करता है",
attempted: false,
selected: ""
},

{
num: 31,
question_en: "What is the principle of mass spectrometry?",
question_hi: "मास स्पेक्ट्रोमेट्री का सिद्धांत क्या है?",
options_en: ["Separation of ions by mass-to-charge ratio", "Absorption of specific wavelengths", "Emission spectra analysis", "Nuclear magnetic resonance"],
options_hi: ["द्रव्यमान-से-आवेश अनुपात द्वारा आयनों का पृथक्करण", "विशिष्ट तरंगदैर्ध्यों का अवशोषण", "उत्सर्जन स्पेक्ट्रा विश्लेषण", "नाभिकीय चुंबकीय अनुनाद"],
answer_en: "Separation of ions by mass-to-charge ratio",
answer_hi: "द्रव्यमान-से-आवेश अनुपात द्वारा आयनों का पृथक्करण",
attempted: false,
selected: ""
},

{
num: 32,
question_en: "In cell signaling, what is the role of a G-protein coupled receptor (GPCR)?",
question_hi: "कोशिका संकेतन में, जी-प्रोटीन युग्मित रिसेप्टर (GPCR) की क्या भूमिका है?",
options_en: ["Direct ion channel opening", "Activation of intracellular G-proteins upon ligand binding", "Nuclear transcription regulation", "Cytoskeletal rearrangement"],
options_hi: ["प्रत्यक्ष आयन चैनल खोलना", "लिगैंड बंधन पर अंतराकोशिकीय जी-प्रोटीनों का सक्रियण", "केंद्रक अनुलेखन नियमन", "कोशिका कंकाल पुनर्व्यवस्था"],
answer_en: "Activation of intracellular G-proteins upon ligand binding",
answer_hi: "लिगैंड बंधन पर अंतराकोशिकीय जी-प्रोटीनों का सक्रियण",
attempted: false,
selected: ""
},

{
num: 33,
question_en: "What is the Heisenberg uncertainty principle?",
question_hi: "हाइजेनबर्ग अनिश्चितता सिद्धांत क्या है?",
options_en: ["Impossibility of simultaneously knowing exact position and momentum", "Wave-particle duality", "Quantum entanglement", "Superposition principle"],
options_hi: ["एक साथ सटीक स्थिति और संवेग जानने की असंभवता", "तरंग-कण द्वैत", "क्वांटम उलझाव", "अध्यारोपण सिद्धांत"],
answer_en: "Impossibility of simultaneously knowing exact position and momentum",
answer_hi: "एक साथ सटीक स्थिति और संवेग जानने की असंभवता",
attempted: false,
selected: ""
},

{
num: 34,
question_en: "In genetics, what is a frameshift mutation?",
question_hi: "आनुवंशिकी में, फ्रेमशिफ्ट उत्परिवर्तन क्या है?",
options_en: ["Substitution of one nucleotide", "Insertion or deletion altering the reading frame", "Mutation in non-coding region", "Chromosomal rearrangement"],
options_hi: ["एक न्यूक्लियोटाइड का प्रतिस्थापन", "रीडिंग फ्रेम बदलने वाला प्रवेशन या विलोपन", "गैर-कूटलेखन क्षेत्र में उत्परिवर्तन", "गुणसूत्रीय पुनर्व्यवस्था"],
answer_en: "Insertion or deletion altering the reading frame",
answer_hi: "रीडिंग फ्रेम बदलने वाला प्रवेशन या विलोपन",
attempted: false,
selected: ""
},

{
num: 35,
question_en: "What is the function of the Golgi apparatus?",
question_hi: "गॉल्जी उपकरण का कार्य क्या है?",
options_en: ["Protein synthesis", "Modification, sorting, and packaging of proteins", "Cellular respiration", "Lipid synthesis"],
options_hi: ["प्रोटीन संश्लेषण", "प्रोटीनों का संशोधन, छँटाई और पैकेजिंग", "कोशिकीय श्वसन", "लिपिड संश्लेषण"],
answer_en: "Modification, sorting, and packaging of proteins",
answer_hi: "प्रोटीनों का संशोधन, छँटाई और पैकेजिंग",
attempted: false,
selected: ""
},

{
num: 36,
question_en: "In optics, what is Snell's law?",
question_hi: "प्रकाशिकी में, स्नेल का नियम क्या है?",
options_en: ["n1 sin θ1 = n2 sin θ2", "1/f = 1/v - 1/u", "E = hν", "c = λν"],
options_hi: ["n1 sin θ1 = n2 sin θ2", "1/f = 1/v - 1/u", "E = hν", "c = λν"],
answer_en: "n1 sin θ1 = n2 sin θ2",
answer_hi: "n1 sin θ1 = n2 sin θ2",
attempted: false,
selected: ""
},

{
num: 37,
question_en: "What is the role of tRNA in translation?",
question_hi: "अनुवाद में tRNA की क्या भूमिका है?",
options_en: ["Carries amino acids to the ribosome", "Forms ribosome structure", "Synthesizes mRNA", "Unwinds DNA"],
options_hi: ["राइबोसोम तक अमीनो अम्ल ले जाता है", "राइबोसोम संरचना बनाता है", "mRNA संश्लेषित करता है", "DNA खोलता है"],
answer_en: "Carries amino acids to the ribosome",
answer_hi: "राइबोसोम तक अमीनो अम्ल ले जाता है",
attempted: false,
selected: ""
},

{
num: 38,
question_en: "In astronomy, what is a pulsar?",
question_hi: "खगोल विज्ञान में, पल्सर क्या है?",
options_en: ["A type of galaxy", "A rapidly rotating neutron star emitting beams of radiation", "A black hole", "A red giant star"],
options_hi: ["एक प्रकार की आकाशगंगा", "विकिरण की किरणें उत्सर्जित करने वाला तेजी से घूमने वाला न्यूट्रॉन तारा", "एक ब्लैक होल", "एक लाल दानव तारा"],
answer_en: "A rapidly rotating neutron star emitting beams of radiation",
answer_hi: "विकिरण की किरणें उत्सर्जित करने वाला तेजी से घूमने वाला न्यूट्रॉन तारा",
attempted: false,
selected: ""
},

{
num: 39,
question_en: "What is the function of the endoplasmic reticulum?",
question_hi: "अंतर्द्रव्यी जालिका का कार्य क्या है?",
options_en: ["ATP production", "Protein and lipid synthesis", "Waste disposal", "Cell division"],
options_hi: ["ATP उत्पादन", "प्रोटीन और लिपिड संश्लेषण", "अपशिष्ट निपटान", "कोशिका विभाजन"],
answer_en: "Protein and lipid synthesis",
answer_hi: "प्रोटीन और लिपिड संश्लेषण",
attempted: false,
selected: ""
},

{
num: 40,
question_en: "In chemistry, what is Avogadro's number?",
question_hi: "रसायन विज्ञान में, आवोगाद्रो संख्या क्या है?",
options_en: ["6.022 × 10^23", "3.00 × 10^8", "1.602 × 10^-19", "9.81"],
options_hi: ["6.022 × 10^23", "3.00 × 10^8", "1.602 × 10^-19", "9.81"],
answer_en: "6.022 × 10^23",
answer_hi: "6.022 × 10^23",
attempted: false,
selected: ""
},

{
num: 41,
question_en: "What is the structure of DNA?",
question_hi: "DNA की संरचना क्या है?",
options_en: ["Single helix", "Double helix", "Triple helix", "Linear chain"],
options_hi: ["एकल कुंडली", "द्वि-कुंडली", "त्रि-कुंडली", "रैखिक श्रृंखला"],
answer_en: "Double helix",
answer_hi: "द्वि-कुंडली",
attempted: false,
selected: ""
},

{
num: 42,
question_en: "In physics, what is Planck's constant?",
question_hi: "भौतिकी में, प्लांक नियतांक क्या है?",
options_en: ["6.626 × 10^-34 J·s", "3.00 × 10^8 m/s", "1.381 × 10^-23 J/K", "9.109 × 10^-31 kg"],
options_hi: ["6.626 × 10^-34 J·s", "3.00 × 10^8 m/s", "1.381 × 10^-23 J/K", "9.109 × 10^-31 kg"],
answer_en: "6.626 × 10^-34 J·s",
answer_hi: "6.626 × 10^-34 J·s",
attempted: false,
selected: ""
},

{
num: 43,
question_en: "What is the function of mitochondria?",
question_hi: "माइटोकॉन्ड्रिया का कार्य क्या है?",
options_en: ["Photosynthesis", "ATP production", "Protein synthesis", "Waste storage"],
options_hi: ["प्रकाश संश्लेषण", "ATP उत्पादन", "प्रोटीन संश्लेषण", "अपशिष्ट भंडारण"],
answer_en: "ATP production",
answer_hi: "ATP उत्पादन",
attempted: false,
selected: ""
},

{
num: 44,
question_en: "In geology, what is the rock cycle?",
question_hi: "भूविज्ञान में, शैल चक्र क्या है?",
options_en: ["Transformation of rock types over time", "Formation of volcanoes", "Movement of tectonic plates", "Erosion process"],
options_hi: ["समय के साथ शैल प्रकारों का रूपांतरण", "ज्वालामुखियों का निर्माण", "टेक्टोनिक प्लेटों की गति", "कटाव प्रक्रिया"],
answer_en: "Transformation of rock types over time",
answer_hi: "समय के साथ शैल प्रकारों का रूपांतरण",
attempted: false,
selected: ""
},

{
num: 45,
question_en: "What is the function of the kidneys?",
question_hi: "गुर्दे का कार्य क्या है?",
options_en: ["Pump blood", "Filter blood and produce urine", "Digest food", "Produce hormones"],
options_hi: ["रक्त पंप करना", "रक्त छानना और मूत्र उत्पन्न करना", "भोजन पचाना", "हार्मोन उत्पन्न करना"],
answer_en: "Filter blood and produce urine",
answer_hi: "रक्त छानना और मूत्र उत्पन्न करना",
attempted: false,
selected: ""
},

{
num: 46,
question_en: "In mathematics, what is the Pythagorean theorem?",
question_hi: "गणित में, पाइथागोरस प्रमेय क्या है?",
options_en: ["a² + b² = c²", "E = mc²", "F = ma", "V = IR"],
options_hi: ["a² + b² = c²", "E = mc²", "F = ma", "V = IR"],
answer_en: "a² + b² = c²",
answer_hi: "a² + b² = c²",
attempted: false,
selected: ""
},

{
num: 47,
question_en: "What is the role of chlorophyll in plants?",
question_hi: "पौधों में क्लोरोफिल की क्या भूमिका है?",
options_en: ["Absorb light for photosynthesis", "Transport water", "Provide structural support", "Store energy"],
options_hi: ["प्रकाश संश्लेषण के लिए प्रकाश अवशोषित करना", "जल का परिवहन करना", "संरचनात्मक सहायता प्रदान करना", "ऊर्जा संग्रहीत करना"],
answer_en: "Absorb light for photosynthesis",
answer_hi: "प्रकाश संश्लेषण के लिए प्रकाश अवशोषित करना",
attempted: false,
selected: ""
},

{
num: 48,
question_en: "In computer science, what is binary code?",
question_hi: "कंप्यूटर विज्ञान में, बाइनरी कोड क्या है?",
options_en: ["Code using 0s and 1s", "Decimal number system", "Programming language", "Data encryption method"],
options_hi: ["0 और 1 का उपयोग करने वाला कोड", "दशमलव संख्या प्रणाली", "प्रोग्रामिंग भाषा", "डेटा एन्क्रिप्शन विधि"],
answer_en: "Code using 0s and 1s",
answer_hi: "0 और 1 का उपयोग करने वाला कोड",
attempted: false,
selected: ""
},

{
num: 49,
question_en: "What is the function of white blood cells?",
question_hi: "श्वेत रक्त कोशिकाओं का कार्य क्या है?",
options_en: ["Carry oxygen", "Fight infection", "Clot blood", "Transport nutrients"],
options_hi: ["ऑक्सीजन ले जाना", "संक्रमण से लड़ना", "रक्त का थक्का बनाना", "पोषक तत्वों का परिवहन करना"],
answer_en: "Fight infection",
answer_hi: "संक्रमण से लड़ना",
attempted: false,
selected: ""
},

{
num: 50,
question_en: "In economics, what is inflation?",
question_hi: "अर्थशास्त्र में, मुद्रास्फीति क्या है?",
options_en: ["Increase in general price level", "Decrease in unemployment", "Growth of GDP", "Rise in exports"],
options_hi: ["सामान्य कीमत स्तर में वृद्धि", "बेरोजगारी में कमी", "जीडीपी की वृद्धि", "निर्यात में वृद्धि"],
answer_en: "Increase in general price level",
answer_hi: "सामान्य कीमत स्तर में वृद्धि",
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