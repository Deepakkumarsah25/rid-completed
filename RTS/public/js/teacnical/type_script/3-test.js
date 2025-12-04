const questions = [
    
    {
        "num": 1,
        "question_en": "What is the dimensional formula of Planck's constant?",
        "question_hi": "प्लैंक स्थिरांक का विमीय सूत्र क्या है?",
        "options_en": ["[ML²T⁻¹]", "[ML²T⁻²]", "[MLT⁻¹]", "[ML²T⁻³]"],
        "options_hi": ["[ML²T⁻¹]", "[ML²T⁻²]", "[MLT⁻¹]", "[ML²T⁻³]"],
        "answer_en": "[ML²T⁻¹]",
        "answer_hi": "[ML²T⁻¹]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The SI unit of electric flux is:",
        "question_hi": "विद्युत फ्लक्स की SI इकाई है:",
        "options_en": ["Weber", "Tesla", "Volt-meter", "Farad"],
        "options_hi": ["वेबर", "टेस्ला", "वोल्ट-मीटर", "फैरड"],
        "answer_en": "Volt-meter",
        "answer_hi": "वोल्ट-मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which law governs the force between two point charges?",
        "question_hi": "दो बिंदु आवेशों के बीच बल किस नियम द्वारा शासित होता है?",
        "options_en": ["Ohm's Law", "Coulomb's Law", "Faraday's Law", "Ampere's Law"],
        "options_hi": ["ओम का नियम", "कूलॉम का नियम", "फैराडे का नियम", "एम्पीयर का नियम"],
        "answer_en": "Coulomb's Law",
        "answer_hi": "कूलॉम का नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The energy of a photon is given by:",
        "question_hi": "एक फोटॉन की ऊर्जा किसके द्वारा दी जाती है?",
        "options_en": ["E = mc²", "E = hν", "E = ½mv²", "E = kx²"],
        "options_hi": ["E = mc²", "E = hν", "E = ½mv²", "E = kx²"],
        "answer_en": "E = hν",
        "answer_hi": "E = hν",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "A convex lens has a focal length of 20 cm. Its power is:",
        "question_hi": "एक उत्तल लेंस की फोकस दूरी 20 cm है। इसकी क्षमता है:",
        "options_en": ["+5 D", "-5 D", "+0.05 D", "-0.05 D"],
        "options_hi": ["+5 D", "-5 D", "+0.05 D", "-0.05 D"],
        "answer_en": "+5 D",
        "answer_hi": "+5 D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which of the following is NOT a fundamental force?",
        "question_hi": "निम्नलिखित में से कौन सा एक मौलिक बल नहीं है?",
        "options_en": ["Gravitational", "Electromagnetic", "Frictional", "Strong Nuclear"],
        "options_hi": ["गुरुत्वाकर्षण", "विद्युत चुम्बकीय", "घर्षण", "प्रबल नाभिकीय"],
        "answer_en": "Frictional",
        "answer_hi": "घर्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "In Young's double-slit experiment, if the slit separation is doubled, the fringe width becomes:",
        "question_hi": "यंग के द्विक रेखा-छिद्र प्रयोग में, यदि रेखा-छिद्र पृथक्करण दोगुना कर दिया जाए, तो फ्रिंज चौड़ाई हो जाती है:",
        "options_en": ["Half", "Double", "Same", "Four times"],
        "options_hi": ["आधी", "दोगुनी", "समान", "चार गुनी"],
        "answer_en": "Half",
        "answer_hi": "आधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The de Broglie wavelength is inversely proportional to:",
        "question_hi": "डी-ब्रॉग्ली तरंगदैर्घ्य किसके व्युत्क्रमानुपाती होती है?",
        "options_en": ["Energy", "Momentum", "Velocity", "Mass"],
        "options_hi": ["ऊर्जा", "संवेग", "वेग", "द्रव्यमान"],
        "answer_en": "Momentum",
        "answer_hi": "संवेग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "A particle executes SHM with amplitude A. At what displacement is its speed half the maximum speed?",
        "question_hi": "एक कण A आयाम से सरल आवर्त गति करता है। किस विस्थापन पर इसकी गति अधिकतम गति की आधी होगी?",
        "options_en": ["A/2", "A/√2", "A√3/2", "2A/3"],
        "options_hi": ["A/2", "A/√2", "A√3/2", "2A/3"],
        "answer_en": "A√3/2",
        "answer_hi": "A√3/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The work done in moving a charge between two points in an equipotential surface is:",
        "question_hi": "एक समविभव सतह पर दो बिंदुओं के बीच आवेश को ले जाने में किया गया कार्य है:",
        "options_en": ["Zero", "Positive", "Negative", "Infinite"],
        "options_hi": ["शून्य", "धनात्मक", "ऋणात्मक", "अनंत"],
        "answer_en": "Zero",
        "answer_hi": "शून्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "The IUPAC name of CH₃-CH=CH₂ is:",
        "question_hi": "CH₃-CH=CH₂ का IUPAC नाम है:",
        "options_en": ["Ethene", "Propene", "Butene", "Methane"],
        "options_hi": ["एथीन", "प्रोपीन", "ब्यूटीन", "मीथेन"],
        "answer_en": "Propene",
        "answer_hi": "प्रोपीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which of the following is a noble gas?",
        "question_hi": "निम्नलिखित में से कौन सी एक अक्रिय गैस है?",
        "options_en": ["Chlorine", "Oxygen", "Argon", "Nitrogen"],
        "options_hi": ["क्लोरीन", "ऑक्सीजन", "आर्गन", "नाइट्रोजन"],
        "answer_en": "Argon",
        "answer_hi": "आर्गन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The pH of a neutral solution at 25°C is:",
        "question_hi": "25°C पर एक उदासीन विलयन का pH होता है:",
        "options_en": ["0", "7", "10", "14"],
        "options_hi": ["0", "7", "10", "14"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which hybridization is found in methane (CH₄)?",
        "question_hi": "मीथेन (CH₄) में कौन सा संकरण पाया जाता है?",
        "options_en": ["sp", "sp²", "sp³", "sp³d"],
        "options_hi": ["sp", "sp²", "sp³", "sp³d"],
        "answer_en": "sp³",
        "answer_hi": "sp³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The number of π-bonds in benzene (C₆H₆) is:",
        "question_hi": "बेंजीन (C₆H₆) में π-बंधों की संख्या है:",
        "options_en": ["3", "6", "9", "12"],
        "options_hi": ["3", "6", "9", "12"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which element has the electronic configuration [Ar] 3d⁵ 4s¹?",
        "question_hi": "किस तत्व का इलेक्ट्रॉनिक विन्यास [Ar] 3d⁵ 4s¹ है?",
        "options_en": ["Iron (Fe)", "Chromium (Cr)", "Manganese (Mn)", "Cobalt (Co)"],
        "options_hi": ["आयरन (Fe)", "क्रोमियम (Cr)", "मैंगनीज (Mn)", "कोबाल्ट (Co)"],
        "answer_en": "Chromium (Cr)",
        "answer_hi": "क्रोमियम (Cr)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "In SN2 reactions, the rate depends on:",
        "question_hi": "SN2 अभिक्रियाओं में, दर निर्भर करती है:",
        "options_en": ["Concentration of nucleophile only", "Concentration of substrate only", "Both nucleophile and substrate", "Temperature only"],
        "options_hi": ["केवल न्यूक्लियोफाइल की सांद्रता", "केवल सब्सट्रेट की सांद्रता", "न्यूक्लियोफाइल और सब्सट्रेट दोनों", "केवल तापमान"],
        "answer_en": "Both nucleophile and substrate",
        "answer_hi": "न्यूक्लियोफाइल और सब्सट्रेट दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The shape of [Ni(CN)₄]²⁻ is:",
        "question_hi": "[Ni(CN)₄]²⁻ की आकृति है:",
        "options_en": ["Tetrahedral", "Square planar", "Octahedral", "Linear"],
        "options_hi": ["चतुष्फलकीय", "वर्ग समतलीय", "अष्टफलकीय", "रैखिक"],
        "answer_en": "Square planar",
        "answer_hi": "वर्ग समतलीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which is NOT a colligative property?",
        "question_hi": "कौन सा एक अणुसंख्य गुणधर्म नहीं है?",
        "options_en": ["Osmotic pressure", "Lowering of vapor pressure", "Elevation in boiling point", "Refractive index"],
        "options_hi": ["परासरण दाब", "वाष्प दाब का अवनमन", "क्वथनांक में उन्नयन", "अपवर्तनांक"],
        "answer_en": "Refractive index",
        "answer_hi": "अपवर्तनांक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The number of unpaired electrons in O₂ molecule is:",
        "question_hi": "O₂ अणु में अयुग्मित इलेक्ट्रॉनों की संख्या है:",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "The derivative of sin(x) with respect to x is:",
        "question_hi": "x के संबंध में sin(x) का अवकलज है:",
        "options_en": ["cos(x)", "-cos(x)", "tan(x)", "sec(x)"],
        "options_hi": ["cos(x)", "-cos(x)", "tan(x)", "sec(x)"],
        "answer_en": "cos(x)",
        "answer_hi": "cos(x)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The value of ∫(1/x) dx is:",
        "question_hi": "∫(1/x) dx का मान है:",
        "options_en": ["ln|x| + C", "x²/2 + C", "1/x² + C", "eˣ + C"],
        "options_hi": ["ln|x| + C", "x²/2 + C", "1/x² + C", "eˣ + C"],
        "answer_en": "ln|x| + C",
        "answer_hi": "ln|x| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "If A is a 3×3 matrix with |A| = 2, then |3A| is:",
        "question_hi": "यदि A एक 3×3 आव्यूह है जिसमें |A| = 2 है, तो |3A| है:",
        "options_en": ["6", "18", "54", "2"],
        "options_hi": ["6", "18", "54", "2"],
        "answer_en": "54",
        "answer_hi": "54",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The probability of getting a prime number when a die is rolled is:",
        "question_hi": "एक पासा फेंकने पर एक अभाज्य संख्या आने की प्रायिकता है:",
        "options_en": ["1/2", "1/3", "1/6", "2/3"],
        "options_hi": ["1/2", "1/3", "1/6", "2/3"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The number of diagonals in a hexagon is:",
        "question_hi": "एक षट्भुज में विकर्णों की संख्या है:",
        "options_en": ["6", "9", "12", "15"],
        "options_hi": ["6", "9", "12", "15"],
        "answer_en": "9",
        "answer_hi": "9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The solution of dy/dx = y/x is:",
        "question_hi": "dy/dx = y/x का हल है:",
        "options_en": ["y = kx", "y = k/x", "y = keˣ", "y = kx²"],
        "options_hi": ["y = kx", "y = k/x", "y = keˣ", "y = kx²"],
        "answer_en": "y = kx",
        "answer_hi": "y = kx",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The modulus of the complex number (1 + i) is:",
        "question_hi": "सम्मिश्र संख्या (1 + i) का मापांक है:",
        "options_en": ["1", "√2", "2", "1/√2"],
        "options_hi": ["1", "√2", "2", "1/√2"],
        "answer_en": "√2",
        "answer_hi": "√2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The value of lim(x→0) (sinx/x) is:",
        "question_hi": "lim(x→0) (sinx/x) का मान है:",
        "options_en": ["0", "1", "∞", "Undefined"],
        "options_hi": ["0", "1", "∞", "अपरिभाषित"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The area of a circle with radius r is given by:",
        "question_hi": "त्रिज्या r वाले वृत्त का क्षेत्रफल दिया जाता है:",
        "options_en": ["πr", "2πr", "πr²", "4πr²"],
        "options_hi": ["πr", "2πr", "πr²", "4πr²"],
        "answer_en": "πr²",
        "answer_hi": "πr²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The sum of the series 1 + 2 + 3 + ... + n is:",
        "question_hi": "श्रेणी 1 + 2 + 3 + ... + n का योग है:",
        "options_en": ["n(n+1)/2", "n(n-1)/2", "n²", "2n"],
        "options_hi": ["n(n+1)/2", "n(n-1)/2", "n²", "2n"],
        "answer_en": "n(n+1)/2",
        "answer_hi": "n(n+1)/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "The time period of a simple pendulum depends on:",
        "question_hi": "एक सरल लोलक का आवर्तकाल निर्भर करता है:",
        "options_en": ["Only length", "Only mass", "Both length and mass", "Length and acceleration due to gravity"],
        "options_hi": ["केवल लंबाई पर", "केवल द्रव्यमान पर", "लंबाई और द्रव्यमान दोनों पर", "लंबाई और गुरुत्वीय त्वरण पर"],
        "answer_en": "Length and acceleration due to gravity",
        "answer_hi": "लंबाई और गुरुत्वीय त्वरण पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The unit of resistivity is:",
        "question_hi": "प्रतिरोधकता की इकाई है:",
        "options_en": ["Ohm", "Ohm-meter", "Ohm/meter", "Ohm/meter²"],
        "options_hi": ["ओम", "ओम-मीटर", "ओम/मीटर", "ओम/मीटर²"],
        "answer_en": "Ohm-meter",
        "answer_hi": "ओम-मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which of the following is a diamagnetic material?",
        "question_hi": "निम्नलिखित में से कौन सा एक प्रतिचुम्बकीय पदार्थ है?",
        "options_en": ["Aluminum", "Copper", "Iron", "Nickel"],
        "options_hi": ["एल्युमिनियम", "तांबा", "लोहा", "निकेल"],
        "answer_en": "Copper",
        "answer_hi": "तांबा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The ratio of rms velocity to average velocity of gas molecules at a given temperature is:",
        "question_hi": "दिए गए तापमान पर गैस अणुओं के वर्ग माध्य मूल वेग और औसत वेग का अनुपात है:",
        "options_en": ["1.086:1", "1:1.086", "1:1", "1.224:1"],
        "options_hi": ["1.086:1", "1:1.086", "1:1", "1.224:1"],
        "answer_en": "1.086:1",
        "answer_hi": "1.086:1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "A transformer works on the principle of:",
        "question_hi": "एक ट्रांसफार्मर किस सिद्धांत पर कार्य करता है?",
        "options_en": ["Self induction", "Mutual induction", "Electromagnetic induction", "All of these"],
        "options_hi": ["स्वप्रेरण", "पारस्परिक प्रेरण", "विद्युत चुम्बकीय प्रेरण", "ये सभी"],
        "answer_en": "Mutual induction",
        "answer_hi": "पारस्परिक प्रेरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The half-life of a radioactive element is 10 days. The mean life is approximately:",
        "question_hi": "एक रेडियोधर्मी तत्व का अर्ध-जीवन 10 दिन है। माध्य जीवन लगभग है:",
        "options_en": ["6.93 days", "14.43 days", "20 days", "30 days"],
        "options_hi": ["6.93 दिन", "14.43 दिन", "20 दिन", "30 दिन"],
        "answer_en": "14.43 days",
        "answer_hi": "14.43 दिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The critical angle for a medium is 30°. Its refractive index is:",
        "question_hi": "एक माध्यम के लिए क्रांतिक कोण 30° है। इसका अपवर्तनांक है:",
        "options_en": ["1", "1.5", "2", "2.5"],
        "options_hi": ["1", "1.5", "2", "2.5"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The energy stored in a capacitor is given by:",
        "question_hi": "एक संधारित्र में संचित ऊर्जा दी जाती है:",
        "options_en": ["½CV", "½CV²", "CV", "CV²"],
        "options_hi": ["½CV", "½CV²", "CV", "CV²"],
        "answer_en": "½CV²",
        "answer_hi": "½CV²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The dimensional formula for torque is same as that of:",
        "question_hi": "बल आघूर्ण का विमीय सूत्र किसके समान होता है?",
        "options_en": ["Work", "Power", "Angular momentum", "Force"],
        "options_hi": ["कार्य", "शक्ति", "कोणीय संवेग", "बल"],
        "answer_en": "Work",
        "answer_hi": "कार्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "A body is moving with uniform acceleration. Its velocity after 5 seconds is 25 m/s and after 8 seconds is 34 m/s. The acceleration is:",
        "question_hi": "एक पिंड एकसमान त्वरण से गतिमान है। 5 सेकंड के बाद इसका वेग 25 m/s है और 8 सेकंड के बाद 34 m/s है। त्वरण है:",
        "options_en": ["3 m/s²", "4 m/s²", "5 m/s²", "6 m/s²"],
        "options_hi": ["3 m/s²", "4 m/s²", "5 m/s²", "6 m/s²"],
        "answer_en": "3 m/s²",
        "answer_hi": "3 m/s²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which of the following is a metalloid?",
        "question_hi": "निम्नलिखित में से कौन सा एक उपधातु है?",
        "options_en": ["Sodium", "Silicon", "Chlorine", "Aluminum"],
        "options_hi": ["सोडियम", "सिलिकॉन", "क्लोरीन", "एल्युमिनियम"],
        "answer_en": "Silicon",
        "answer_hi": "सिलिकॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "The oxidation state of chromium in K₂Cr₂O₇ is:",
        "question_hi": "K₂Cr₂O₇ में क्रोमियम की ऑक्सीकरण अवस्था है:",
        "options_en": ["+2", "+3", "+6", "+7"],
        "options_hi": ["+2", "+3", "+6", "+7"],
        "answer_en": "+6",
        "answer_hi": "+6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The shape of NH₃ molecule is:",
        "question_hi": "NH₃ अणु की आकृति है:",
        "options_en": ["Linear", "Trigonal planar", "Tetrahedral", "Trigonal pyramidal"],
        "options_hi": ["रैखिक", "त्रिकोणीय समतलीय", "चतुष्फलकीय", "त्रिकोणीय पिरामिडी"],
        "answer_en": "Trigonal pyramidal",
        "answer_hi": "त्रिकोणीय पिरामिडी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which of the following is NOT a thermodynamic function?",
        "question_hi": "निम्नलिखित में से कौन सा एक ऊष्मागतिक फलन नहीं है?",
        "options_en": ["Internal energy", "Enthalpy", "Work", "Entropy"],
        "options_hi": ["आंतरिक ऊर्जा", "एन्थैल्पी", "कार्य", "एन्ट्रॉपी"],
        "answer_en": "Work",
        "answer_hi": "कार्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The number of σ bonds in ethyne (C₂H₂) is:",
        "question_hi": "एथाइन (C₂H₂) में σ बंधों की संख्या है:",
        "options_en": ["1", "2", "3", "5"],
        "options_hi": ["1", "2", "3", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "The catalyst used in Haber's process is:",
        "question_hi": "हेबर प्रक्रम में प्रयुक्त उत्प्रेरक है:",
        "options_en": ["Pt", "Fe", "Ni", "V₂O₅"],
        "options_hi": ["Pt", "Fe", "Ni", "V₂O₅"],
        "answer_en": "Fe",
        "answer_hi": "Fe",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "The hardest substance known is:",
        "question_hi": "ज्ञात सबसे कठोर पदार्थ है:",
        "options_en": ["Graphite", "Diamond", "Quartz", "Boron nitride"],
        "options_hi": ["ग्रेफाइट", "हीरा", "क्वार्ट्ज", "बोरॉन नाइट्राइड"],
        "answer_en": "Diamond",
        "answer_hi": "हीरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "The element with atomic number 29 is:",
        "question_hi": "परमाणु संख्या 29 वाला तत्व है:",
        "options_en": ["Silver", "Copper", "Gold", "Zinc"],
        "options_hi": ["चांदी", "तांबा", "सोना", "जस्ता"],
        "answer_en": "Copper",
        "answer_hi": "तांबा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The IUPAC name of C₆H₅COOH is:",
        "question_hi": "C₆H₅COOH का IUPAC नाम है:",
        "options_en": ["Benzoic acid", "Benzene carboxylic acid", "Phenyl methanoic acid", "Both 1 and 2"],
        "options_hi": ["बेंजोइक अम्ल", "बेंजीन कार्बोक्सिलिक अम्ल", "फेनिल मेथेनोइक अम्ल", "1 और 2 दोनों"],
        "answer_en": "Both 1 and 2",
        "answer_hi": "1 और 2 दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "The number of possible isomers for C₄H₁₀ is:",
        "question_hi": "C₄H₁₀ के लिए संभावित समावयवियों की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "The value of ∫₀¹ x(1-x) dx is:",
        "question_hi": "∫₀¹ x(1-x) dx का मान है:",
        "options_en": ["1/2", "1/6", "1/12", "1/4"],
        "options_hi": ["1/2", "1/6", "1/12", "1/4"],
        "answer_en": "1/6",
        "answer_hi": "1/6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "The number of terms in the expansion of (a+b)ⁿ is:",
        "question_hi": "(a+b)ⁿ के विस्तार में पदों की संख्या है:",
        "options_en": ["n", "n+1", "n-1", "2ⁿ"],
        "options_hi": ["n", "n+1", "n-1", "2ⁿ"],
        "answer_en": "n+1",
        "answer_hi": "n+1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "The equation of the circle with center at (1,2) and radius 3 is:",
        "question_hi": "(1,2) पर केंद्र और 3 त्रिज्या वाले वृत्त का समीकरण है:",
        "options_en": ["(x-1)² + (y-2)² = 9", "(x+1)² + (y+2)² = 9", "(x-1)² + (y-2)² = 3", "(x+1)² + (y+2)² = 3"],
        "options_hi": ["(x-1)² + (y-2)² = 9", "(x+1)² + (y+2)² = 9", "(x-1)² + (y-2)² = 3", "(x+1)² + (y+2)² = 3"],
        "answer_en": "(x-1)² + (y-2)² = 9",
        "answer_hi": "(x-1)² + (y-2)² = 9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "If A and B are mutually exclusive events, then P(A∪B) is:",
        "question_hi": "यदि A और B परस्पर अपवर्जी घटनाएँ हैं, तो P(A∪B) है:",
        "options_en": ["P(A)+P(B)", "P(A)×P(B)", "P(A)-P(B)", "P(A)/P(B)"],
        "options_hi": ["P(A)+P(B)", "P(A)×P(B)", "P(A)-P(B)", "P(A)/P(B)"],
        "answer_en": "P(A)+P(B)",
        "answer_hi": "P(A)+P(B)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "The value of tan(π/4) is:",
        "question_hi": "tan(π/4) का मान है:",
        "options_en": ["0", "1", "√3", "Undefined"],
        "options_hi": ["0", "1", "√3", "अपरिभाषित"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "The number of diagonals in a polygon with n sides is:",
        "question_hi": "n भुजाओं वाले बहुभुज में विकर्णों की संख्या है:",
        "options_en": ["n(n-1)/2", "n(n-3)/2", "n(n-1)", "n(n-3)"],
        "options_hi": ["n(n-1)/2", "n(n-3)/2", "n(n-1)", "n(n-3)"],
        "answer_en": "n(n-3)/2",
        "answer_hi": "n(n-3)/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "The arithmetic mean of first n natural numbers is:",
        "question_hi": "प्रथम n प्राकृतिक संख्याओं का समांतर माध्य है:",
        "options_en": ["n/2", "(n+1)/2", "n(n+1)/2", "n²"],
        "options_hi": ["n/2", "(n+1)/2", "n(n+1)/2", "n²"],
        "answer_en": "(n+1)/2",
        "answer_hi": "(n+1)/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "The solution of the equation 2ˣ = 8 is:",
        "question_hi": "समीकरण 2ˣ = 8 का हल है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "The distance between points (1,2) and (4,6) is:",
        "question_hi": "बिंदुओं (1,2) और (4,6) के बीच की दूरी है:",
        "options_en": ["3", "4", "5", "6"],
        "options_hi": ["3", "4", "5", "6"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "The value of sin²θ + cos²θ is:",
        "question_hi": "sin²θ + cos²θ का मान है:",
        "options_en": ["0", "1", "2", "Depends on θ"],
        "options_hi": ["0", "1", "2", "θ पर निर्भर"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "The work done in an isothermal process depends on:",
        "question_hi": "एक समतापी प्रक्रम में किया गया कार्य निर्भर करता है:",
        "options_en": ["Initial state only", "Final state only", "Both initial and final states", "Path between states"],
        "options_hi": ["केवल प्रारंभिक अवस्था पर", "केवल अंतिम अवस्था पर", "प्रारंभिक और अंतिम दोनों अवस्थाओं पर", "अवस्थाओं के बीच के पथ पर"],
        "answer_en": "Both initial and final states",
        "answer_hi": "प्रारंभिक और अंतिम दोनों अवस्थाओं पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "The unit of magnetic flux is:",
        "question_hi": "चुंबकीय फ्लक्स की इकाई है:",
        "options_en": ["Tesla", "Weber", "Henry", "Gauss"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
        "answer_en": "Weber",
        "answer_hi": "वेबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "In a p-n junction diode, the current flows when it is:",
        "question_hi": "एक p-n संधि डायोड में, धारा प्रवाहित होती है जब यह होता है:",
        "options_en": ["Forward biased", "Reverse biased", "Unbiased", "All of these"],
        "options_hi": ["अग्र अभिनत", "पश्च अभिनत", "अनभिनत", "ये सभी"],
        "answer_en": "Forward biased",
        "answer_hi": "अग्र अभिनत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The energy of a hydrogen atom in its ground state is -13.6 eV. Its energy in the first excited state is:",
        "question_hi": "अपनी मूल अवस्था में एक हाइड्रोजन परमाणु की ऊर्जा -13.6 eV है। पहली उत्तेजित अवस्था में इसकी ऊर्जा है:",
        "options_en": ["-3.4 eV", "-6.8 eV", "-13.6 eV", "-27.2 eV"],
        "options_hi": ["-3.4 eV", "-6.8 eV", "-13.6 eV", "-27.2 eV"],
        "answer_en": "-3.4 eV",
        "answer_hi": "-3.4 eV",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The ratio of specific heats (Cp/Cv) for a diatomic gas is approximately:",
        "question_hi": "एक द्विपरमाणुक गैस के लिए विशिष्ट ऊष्माओं का अनुपात (Cp/Cv) लगभग है:",
        "options_en": ["1.33", "1.4", "1.67", "2"],
        "options_hi": ["1.33", "1.4", "1.67", "2"],
        "answer_en": "1.4",
        "answer_hi": "1.4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "A ray of light passes from air to glass. Which property remains unchanged?",
        "question_hi": "प्रकाश की एक किरण वायु से कांच में जाती है। कौन सा गुण अपरिवर्तित रहता है?",
        "options_en": ["Velocity", "Wavelength", "Frequency", "Direction"],
        "options_hi": ["वेग", "तरंगदैर्घ्य", "आवृत्ति", "दिशा"],
        "answer_en": "Frequency",
        "answer_hi": "आवृत्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The dimensional formula for power is:",
        "question_hi": "शक्ति का विमीय सूत्र है:",
        "options_en": ["[ML²T⁻³]", "[ML²T⁻²]", "[MLT⁻²]", "[MLT⁻¹]"],
        "options_hi": ["[ML²T⁻³]", "[ML²T⁻²]", "[MLT⁻²]", "[MLT⁻¹]"],
        "answer_en": "[ML²T⁻³]",
        "answer_hi": "[ML²T⁻³]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "A body of mass 2 kg moves with an acceleration of 3 m/s². The force acting on it is:",
        "question_hi": "2 kg द्रव्यमान का एक पिंड 3 m/s² के त्वरण से गतिमान है। इस पर कार्यरत बल है:",
        "options_en": ["1.5 N", "5 N", "6 N", "9 N"],
        "options_hi": ["1.5 N", "5 N", "6 N", "9 N"],
        "answer_en": "6 N",
        "answer_hi": "6 N",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "The efficiency of a Carnot engine working between 400 K and 300 K is:",
        "question_hi": "400 K और 300 K के बीच कार्य कर रहे एक कार्नोट इंजन की दक्षता है:",
        "options_en": ["25%", "50%", "75%", "100%"],
        "options_hi": ["25%", "50%", "75%", "100%"],
        "answer_en": "25%",
        "answer_hi": "25%",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "The resistance of a wire is R. If its length is doubled and area is halved, the new resistance will be:",
        "question_hi": "एक तार का प्रतिरोध R है। यदि इसकी लंबाई दोगुनी कर दी जाए और क्षेत्रफल आधा कर दिया जाए, तो नया प्रतिरोध होगा:",
        "options_en": ["R", "2R", "4R", "8R"],
        "options_hi": ["R", "2R", "4R", "8R"],
        "answer_en": "4R",
        "answer_hi": "4R",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which of the following is NOT a transition element?",
        "question_hi": "निम्नलिखित में से कौन सा एक संक्रमण तत्व नहीं है?",
        "options_en": ["Copper", "Zinc", "Iron", "Silver"],
        "options_hi": ["तांबा", "जस्ता", "लोहा", "चांदी"],
        "answer_en": "Zinc",
        "answer_hi": "जस्ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The number of moles in 44 g of CO₂ is:",
        "question_hi": "44 g CO₂ में मोलों की संख्या है:",
        "options_en": ["0.5", "1", "1.5", "2"],
        "options_hi": ["0.5", "1", "1.5", "2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The compound formed when ethanol is oxidized by acidified K₂Cr₂O₇ is:",
        "question_hi": "जब एथेनॉल को अम्लीकृत K₂Cr₂O₇ द्वारा ऑक्सीकृत किया जाता है, तो बनने वाला यौगिक है:",
        "options_en": ["Ethanal", "Ethanoic acid", "Ethene", "Ethane"],
        "options_hi": ["एथेनाल", "एथेनोइक अम्ल", "एथीन", "एथेन"],
        "answer_en": "Ethanoic acid",
        "answer_hi": "एथेनोइक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The shape of XeF₄ molecule is:",
        "question_hi": "XeF₄ अणु की आकृति है:",
        "options_en": ["Tetrahedral", "Square planar", "Octahedral", "Trigonal bipyramidal"],
        "options_hi": ["चतुष्फलकीय", "वर्ग समतलीय", "अष्टफलकीय", "त्रिकोणीय द्विपिरामिडी"],
        "answer_en": "Square planar",
        "answer_hi": "वर्ग समतलीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The pH of 0.01 M HCl solution is:",
        "question_hi": "0.01 M HCl विलयन का pH है:",
        "options_en": ["1", "2", "7", "12"],
        "options_hi": ["1", "2", "7", "12"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "The IUPAC name of CH₃-O-CH₃ is:",
        "question_hi": "CH₃-O-CH₃ का IUPAC नाम है:",
        "options_en": ["Dimethyl ether", "Methoxymethane", "Ethoxyethane", "Both 1 and 2"],
        "options_hi": ["डाइमेथिल ईथर", "मेथॉक्सीमेथेन", "एथॉक्सीएथेन", "1 और 2 दोनों"],
        "answer_en": "Both 1 and 2",
        "answer_hi": "1 और 2 दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The hybridization of carbon in C₂H₂ is:",
        "question_hi": "C₂H₂ में कार्बन का संकरण है:",
        "options_en": ["sp", "sp²", "sp³", "sp³d"],
        "options_hi": ["sp", "sp²", "sp³", "sp³d"],
        "answer_en": "sp",
        "answer_hi": "sp",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The number of π-bonds in C₆H₆ is:",
        "question_hi": "C₆H₆ में π-बंधों की संख्या है:",
        "options_en": ["3", "6", "9", "12"],
        "options_hi": ["3", "6", "9", "12"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The catalyst used in the contact process is:",
        "question_hi": "संपर्क प्रक्रम में प्रयुक्त उत्प्रेरक है:",
        "options_en": ["Fe", "Ni", "V₂O₅", "Pt"],
        "options_hi": ["Fe", "Ni", "V₂O₅", "Pt"],
        "answer_en": "V₂O₅",
        "answer_hi": "V₂O₅",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The element with the highest electronegativity is:",
        "question_hi": "सबसे अधिक विद्युतऋणात्मकता वाला तत्व है:",
        "options_en": ["Fluorine", "Chlorine", "Oxygen", "Nitrogen"],
        "options_hi": ["फ्लोरीन", "क्लोरीन", "ऑक्सीजन", "नाइट्रोजन"],
        "answer_en": "Fluorine",
        "answer_hi": "फ्लोरीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The value of ∫(eˣ + 1) dx is:",
        "question_hi": "∫(eˣ + 1) dx का मान है:",
        "options_en": ["eˣ + x + C", "eˣ + C", "eˣ + x²/2 + C", "eˣ + 1 + C"],
        "options_hi": ["eˣ + x + C", "eˣ + C", "eˣ + x²/2 + C", "eˣ + 1 + C"],
        "answer_en": "eˣ + x + C",
        "answer_hi": "eˣ + x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The number of terms in a quadratic equation is:",
        "question_hi": "एक द्विघात समीकरण में पदों की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "The sum of the roots of the equation x² - 5x + 6 = 0 is:",
        "question_hi": "समीकरण x² - 5x + 6 = 0 के मूलों का योग है:",
        "options_en": ["5", "-5", "6", "-6"],
        "options_hi": ["5", "-5", "6", "-6"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The slope of the line y = 2x + 3 is:",
        "question_hi": "रेखा y = 2x + 3 की ढाल है:",
        "options_en": ["2", "3", "1/2", "-2"],
        "options_hi": ["2", "3", "1/2", "-2"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The value of log₁₀100 is:",
        "question_hi": "log₁₀100 का मान है:",
        "options_en": ["1", "2", "10", "100"],
        "options_hi": ["1", "2", "10", "100"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The probability of getting a head when a coin is tossed is:",
        "question_hi": "एक सिक्का उछालने पर चित आने की प्रायिकता है:",
        "options_en": ["0", "0.5", "1", "2"],
        "options_hi": ["0", "0.5", "1", "2"],
        "answer_en": "0.5",
        "answer_hi": "0.5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The area of a triangle with base 4 cm and height 6 cm is:",
        "question_hi": "4 cm आधार और 6 cm ऊंचाई वाले त्रिभुज का क्षेत्रफल है:",
        "options_en": ["10 cm²", "12 cm²", "24 cm²", "48 cm²"],
        "options_hi": ["10 cm²", "12 cm²", "24 cm²", "48 cm²"],
        "answer_en": "12 cm²",
        "answer_hi": "12 cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The value of sin(30°) is:",
        "question_hi": "sin(30°) का मान है:",
        "options_en": ["0", "0.5", "1/√2", "√3/2"],
        "options_hi": ["0", "0.5", "1/√2", "√3/2"],
        "answer_en": "0.5",
        "answer_hi": "0.5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The number of vertices in a cube is:",
        "question_hi": "एक घन में शीर्षों की संख्या है:",
        "options_en": ["4", "6", "8", "12"],
        "options_hi": ["4", "6", "8", "12"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The value of (1 + i)(1 - i) is:",
        "question_hi": "(1 + i)(1 - i) का मान है:",
        "options_en": ["0", "1", "2", "2i"],
        "options_hi": ["0", "1", "2", "2i"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The phenomenon of light responsible for the blue color of the sky is:",
        "question_hi": "आकाश के नीले रंग के लिए जिम्मेदार प्रकाश की घटना है:",
        "options_en": ["Reflection", "Refraction", "Scattering", "Dispersion"],
        "options_hi": ["परावर्तन", "अपवर्तन", "प्रकीर्णन", "विक्षेपण"],
        "answer_en": "Scattering",
        "answer_hi": "प्रकीर्णन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The unit of inductance is:",
        "question_hi": "प्रेरकत्व की इकाई है:",
        "options_en": ["Farad", "Henry", "Ohm", "Tesla"],
        "options_hi": ["फैरड", "हेनरी", "ओम", "टेस्ला"],
        "answer_en": "Henry",
        "answer_hi": "हेनरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "In a transistor, the relation between α (alpha) and β (beta) is:",
        "question_hi": "एक ट्रांजिस्टर में, α (अल्फा) और β (बीटा) के बीच संबंध है:",
        "options_en": ["β = α/(1-α)", "α = β/(1+β)", "Both 1 and 2", "None of these"],
        "options_hi": ["β = α/(1-α)", "α = β/(1+β)", "1 और 2 दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both 1 and 2",
        "answer_hi": "1 और 2 दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The energy gap between valence band and conduction band is maximum in:",
        "question_hi": "संयोजकता बैंड और चालन बैंड के बीच ऊर्जा अंतर अधिकतम होता है:",
        "options_en": ["Metals", "Semiconductors", "Insulators", "Superconductors"],
        "options_hi": ["धातुओं में", "अर्धचालकों में", "कुचालकों में", "अतिचालकों में"],
        "answer_en": "Insulators",
        "answer_hi": "कुचालकों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The ratio of intensities in Young's double slit experiment is 1:9. The ratio of amplitudes is:",
        "question_hi": "यंग के द्विक रेखा-छिद्र प्रयोग में तीव्रताओं का अनुपात 1:9 है। आयामों का अनुपात है:",
        "options_en": ["1:3", "1:9", "1:√3", "1:81"],
        "options_hi": ["1:3", "1:9", "1:√3", "1:81"],
        "answer_en": "1:3",
        "answer_hi": "1:3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "The dimensional formula for surface tension is:",
        "question_hi": "पृष्ठ तनाव का विमीय सूत्र है:",
        "options_en": ["[MLT⁻²]", "[ML⁻¹T⁻²]", "[ML²T⁻²]", "[MT⁻²]"],
        "options_hi": ["[MLT⁻²]", "[ML⁻¹T⁻²]", "[ML²T⁻²]", "[MT⁻²]"],
        "answer_en": "[MT⁻²]",
        "answer_hi": "[MT⁻²]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "A body is projected horizontally with velocity 10 m/s from a height of 20 m. Its time of flight is: (g = 10 m/s²)",
        "question_hi": "एक पिंड को 20 m की ऊंचाई से 10 m/s के वेग से क्षैतिज रूप से प्रक्षेपित किया जाता है। इसका उड़ान काल है: (g = 10 m/s²)",
        "options_en": ["1 s", "2 s", "3 s", "4 s"],
        "options_hi": ["1 s", "2 s", "3 s", "4 s"],
        "answer_en": "2 s",
        "answer_hi": "2 s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The efficiency of a machine can never be:",
        "question_hi": "एक मशीन की दक्षता कभी नहीं हो सकती:",
        "options_en": ["50%", "75%", "90%", "100%"],
        "options_hi": ["50%", "75%", "90%", "100%"],
        "answer_en": "100%",
        "answer_hi": "100%",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The resistance of a conductor increases with:",
        "question_hi": "एक चालक का प्रतिरोध बढ़ता है:",
        "options_en": ["Increase in temperature", "Decrease in temperature", "Increase in cross-section", "Decrease in length"],
        "options_hi": ["तापमान में वृद्धि", "तापमान में कमी", "अनुप्रस्थ काट में वृद्धि", "लंबाई में कमी"],
        "answer_en": "Increase in temperature",
        "answer_hi": "तापमान में वृद्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The ratio of specific heats (γ) for a monoatomic gas is:",
        "question_hi": "एक एकपरमाणुक गैस के लिए विशिष्ट ऊष्माओं का अनुपात (γ) है:",
        "options_en": ["1.33", "1.4", "1.67", "2"],
        "options_hi": ["1.33", "1.4", "1.67", "2"],
        "answer_en": "1.67",
        "answer_hi": "1.67",
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