const questions = [
  {
    "num": 1,
    "question_en": "In a three-phase induction motor, if the rotor slots are skewed, it helps to reduce:",
    "question_hi": "तीन-फेज प्रेरण मोटर में, यदि रोटर स्लॉट्स तिरछे हैं, तो यह कम करने में मदद करता है:",
    "options_en": ["Starting torque", "Cogging", "Magnetizing current", "Copper losses"],
    "options_hi": ["प्रारंभिक बलाघूर्ण", "कॉगिंग", "चुंबकीय धारा", "तांबे की हानियाँ"],
    "answer_en": "Cogging",
    "answer_hi": "कॉगिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "The Buckingham Pi theorem states that if there are n variables in a physical problem and m fundamental dimensions, then the number of dimensionless groups is:",
    "question_hi": "बकिंघम पाई प्रमेय कहता है कि यदि किसी भौतिक समस्या में n चर और m मौलिक आयाम हैं, तो विमाहीन समूहों की संख्या है:",
    "options_en": ["n - m", "n + m", "n × m", "n/m"],
    "options_hi": ["n - m", "n + m", "n × m", "n/m"],
    "answer_en": "n - m",
    "answer_hi": "n - m",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "In a MOSFET, the body effect causes:",
    "question_hi": "MOSFET में, बॉडी प्रभाव कारण बनता है:",
    "options_en": ["Increase in threshold voltage", "Decrease in threshold voltage", "Increase in transconductance", "Decrease in output resistance"],
    "options_hi": ["थ्रेशोल्ड वोल्टेज में वृद्धि", "थ्रेशोल्ड वोल्टेज में कमी", "ट्रांसकंडक्टेंस में वृद्धि", "आउटपुट प्रतिरोध में कमी"],
    "answer_en": "Increase in threshold voltage",
    "answer_hi": "थ्रेशोल्ड वोल्टेज में वृद्धि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "The Margoulis equation relates which two non-dimensional numbers in mass transfer?",
    "question_hi": "मार्गौलिस समीकरण द्रव्यमान स्थानांतरण में कौन से दो विमाहीन संख्याओं को संबंधित करता है?",
    "options_en": ["Sherwood and Reynolds", "Sherwood and Schmidt", "Nusselt and Prandtl", "Stanton and Reynolds"],
    "options_hi": ["शेरवुड और रेनॉल्ड्स", "शेरवुड और श्मिट", "नसेल्ट और प्रांटल", "स्टैंटन और रेनॉल्ड्स"],
    "answer_en": "Sherwood and Reynolds",
    "answer_hi": "शेरवुड और रेनॉल्ड्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "For a statically indeterminate beam, the degree of static indeterminacy is equal to:",
    "question_hi": "स्थैतिक रूप से अनिर्धारित बीम के लिए, स्थैतिक अनिर्धार्यता की कोटि बराबर है:",
    "options_en": ["Number of reactions minus 3", "Number of equilibrium equations minus reactions", "Both A and B", "Number of unknown forces"],
    "options_hi": ["प्रतिक्रियाओं की संख्या घटा 3", "संतुलन समीकरणों की संख्या घटा प्रतिक्रियाएं", "A और B दोनों", "अज्ञात बलों की संख्या"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "In a phase-locked loop (PLL), the capture range is:",
    "question_hi": "फेज-लॉक्ड लूप (PLL) में, कैप्चर रेंज है:",
    "options_en": ["Always greater than lock range", "Always smaller than lock range", "Equal to lock range", "Independent of lock range"],
    "options_hi": ["सदैव लॉक रेंज से अधिक", "सदैव लॉक रेंज से छोटा", "लॉक रेंज के बराबर", "लॉक रेंज से स्वतंत्र"],
    "answer_en": "Always smaller than lock range",
    "answer_hi": "सदैव लॉक रेंज से छोटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "The Colebrook equation is used to calculate:",
    "question_hi": "कोलब्रूक समीकरण का उपयोग गणना के लिए किया जाता है:",
    "options_en": ["Friction factor for turbulent flow in rough pipes", "Heat transfer coefficient", "Pressure drop in laminar flow", "Velocity profile in boundary layer"],
    "options_hi": ["खुरदरे पाइपों में अशांत प्रवाह के लिए घर्षण कारक", "ऊष्मा स्थानांतरण गुणांक", "लैमिनार प्रवाह में दबाव पात", "सीमा परत में वेग प्रोफाइल"],
    "answer_en": "Friction factor for turbulent flow in rough pipes",
    "answer_hi": "खुरदरे पाइपों में अशांत प्रवाह के लिए घर्षण कारक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "The Smith chart is used in:",
    "question_hi": "स्मिथ चार्ट का उपयोग किया जाता है:",
    "options_en": ["Transmission line impedance matching", "Control system stability analysis", "Digital filter design", "Antenna radiation pattern plotting"],
    "options_hi": ["संचरण लाइन प्रतिबाधा मिलान", "नियंत्रण प्रणाली स्थिरता विश्लेषण", "डिजिटल फिल्टर डिजाइन", "एंटीना विकिरण पैटर्न प्लॉटिंग"],
    "answer_en": "Transmission line impedance matching",
    "answer_hi": "संचरण लाइन प्रतिबाधा मिलान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "In fracture mechanics, the J-integral is:",
    "question_hi": "फ्रैक्चर यांत्रिकी में, J-इंटीग्रल है:",
    "options_en": ["Path independent for linear elastic materials", "Path dependent for all materials", "Equal to stress intensity factor", "A measure of plastic zone size"],
    "options_hi": ["रैखिक प्रत्यास्थ पदार्थों के लिए पथ स्वतंत्र", "सभी पदार्थों के लिए पथ निर्भर", "प्रतिबल तीव्रता कारक के बराबर", "प्लास्टिक ज़ोन आकार का माप"],
    "answer_en": "Path independent for linear elastic materials",
    "answer_hi": "रैखिक प्रत्यास्थ पदार्थों के लिए पथ स्वतंत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "The Bode plot of a system with transfer function G(s) = K/s has:",
    "question_hi": "स्थानांतरण फलन G(s) = K/s वाली प्रणाली का बोड प्लॉट है:",
    "options_en": ["-20 dB/decade slope and -90° phase", "-40 dB/decade slope and -180° phase", "-20 dB/decade slope and 0° phase", "0 dB/decade slope and -90° phase"],
    "options_hi": ["-20 dB/decade ढलान और -90° फेज", "-40 dB/decade ढलान और -180° फेज", "-20 dB/decade ढलान और 0° फेज", "0 dB/decade ढलान और -90° फेज"],
    "answer_en": "-20 dB/decade slope and -90° phase",
    "answer_hi": "-20 dB/decade ढलान और -90° फेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "The Knudsen number is important when:",
    "question_hi": "नडसेन संख्या महत्वपूर्ण है जब:",
    "options_en": ["Mean free path is comparable to characteristic length", "Reynolds number is very high", "Mach number exceeds 1", "Flow is incompressible"],
    "options_hi": ["माध्य मुक्त पथ अभिलाक्षणिक लंबाई के तुलनीय है", "रेनॉल्ड्स संख्या बहुत अधिक है", "मैक संख्या 1 से अधिक है", "प्रवाह असंपीड्य है"],
    "answer_en": "Mean free path is comparable to characteristic length",
    "answer_hi": "माध्य मुक्त पथ अभिलाक्षणिक लंबाई के तुलनीय है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "In a thyristor, the turn-off time is primarily determined by:",
    "question_hi": "थाइरिस्टर में, टर्न-ऑफ समय मुख्य रूप से निर्धारित होता है:",
    "options_en": ["Reverse recovery time", "Gate trigger delay", "dv/dt capability", "di/dt capability"],
    "options_hi": ["रिवर्स रिकवरी समय", "गेट ट्रिगर विलंब", "dv/dt क्षमता", "di/dt क्षमता"],
    "answer_en": "Reverse recovery time",
    "answer_hi": "रिवर्स रिकवरी समय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "The Prandtl boundary layer equations are derived using:",
    "question_hi": "प्रांटल सीमा परत समीकरण व्युत्पन्न किए जाते हैं उपयोग करके:",
    "options_en": ["Order of magnitude analysis", "Similarity transformation", "Both A and B", "Laplace transform"],
    "options_hi": ["परिमाण का क्रम विश्लेषण", "समानता परिवर्तन", "A और B दोनों", "लाप्लास रूपांतरण"],
    "answer_en": "Order of magnitude analysis",
    "answer_hi": "परिमाण का क्रम विश्लेषण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "The characteristic equation of a system with poles at s = -1 ± j2 and zero at s = -3 is:",
    "question_hi": "s = -1 ± j2 पर ध्रुवों और s = -3 पर शून्य वाली प्रणाली का अभिलाक्षणिक समीकरण है:",
    "options_en": ["s² + 2s + 5 = 0", "s³ + 5s² + 9s + 5 = 0", "(s+3)(s²+2s+5) = 0", "s² + 4s + 5 = 0"],
    "options_hi": ["s² + 2s + 5 = 0", "s³ + 5s² + 9s + 5 = 0", "(s+3)(s²+2s+5) = 0", "s² + 4s + 5 = 0"],
    "answer_en": "s² + 2s + 5 = 0",
    "answer_hi": "s² + 2s + 5 = 0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "The Lewis number in mass transfer is defined as:",
    "question_hi": "द्रव्यमान स्थानांतरण में लुईस संख्या को परिभाषित किया जाता है:",
    "options_en": ["α/D", "D/α", "ν/α", "α/ν"],
    "options_hi": ["α/D", "D/α", "ν/α", "α/ν"],
    "answer_en": "α/D",
    "answer_hi": "α/D",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "In a Hartley oscillator, the feedback network consists of:",
    "question_hi": "हार्टले ऑसिलेटर में, फीडबैक नेटवर्क शामिल होता है:",
    "options_en": ["Two capacitors and one inductor", "Two inductors and one capacitor", "Three capacitors", "Three inductors"],
    "options_hi": ["दो संधारित्र और एक प्रेरक", "दो प्रेरक और एक संधारित्र", "तीन संधारित्र", "तीन प्रेरक"],
    "answer_en": "Two inductors and one capacitor",
    "answer_hi": "दो प्रेरक और एक संधारित्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "The Mohr-Coulomb failure criterion is used for:",
    "question_hi": "मोहर-कूलम्ब विफलता मापदंड का उपयोग किया जाता है:",
    "options_en": ["Ductile materials", "Brittle materials", "Soils and rocks", "Composite materials"],
    "options_hi": ["आघातवर्धनीय पदार्थ", "भंगुर पदार्थ", "मिट्टी और चट्टानें", "संमिश्र पदार्थ"],
    "answer_en": "Soils and rocks",
    "answer_hi": "मिट्टी और चट्टानें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "The slip frequency in an induction motor at maximum torque is given by:",
    "question_hi": "अधिकतम बलाघूर्ण पर प्रेरण मोटर में स्लिप आवृत्ति दी जाती है:",
    "options_en": ["R2/(2πL2)", "R2/X2 × supply frequency", "R2/(X2 + X1) × supply frequency", "R1/X1 × supply frequency"],
    "options_hi": ["R2/(2πL2)", "R2/X2 × आपूर्ति आवृत्ति", "R2/(X2 + X1) × आपूर्ति आवृत्ति", "R1/X1 × आपूर्ति आवृत्ति"],
    "answer_en": "R2/X2 × supply frequency",
    "answer_hi": "R2/X2 × आपूर्ति आवृत्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "The Biot number for a sphere is defined as:",
    "question_hi": "गोले के लिए बायोट संख्या को परिभाषित किया जाता है:",
    "options_en": ["hR/k", "hR/3k", "hL/k", "k/hR"],
    "options_hi": ["hR/k", "hR/3k", "hL/k", "k/hR"],
    "answer_en": "hR/k",
    "answer_hi": "hR/k",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "In a 4-bit successive approximation ADC, the conversion time for n bits is proportional to:",
    "question_hi": "4-बिट सक्सेसिव एप्रॉक्सिमेशन ADC में, n बिट्स के लिए रूपांतरण समय आनुपातिक है:",
    "options_en": ["n", "2^n", "log₂n", "n²"],
    "options_hi": ["n", "2^n", "log₂n", "n²"],
    "answer_en": "n",
    "answer_hi": "n",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "The Rayleigh scattering law states that scattering intensity is proportional to:",
    "question_hi": "रेले प्रकीर्णन नियम कहता है कि प्रकीर्णन तीव्रता आनुपातिक है:",
    "options_en": ["1/λ⁴", "λ⁴", "1/λ²", "λ²"],
    "options_hi": ["1/λ⁴", "λ⁴", "1/λ²", "λ²"],
    "answer_en": "1/λ⁴",
    "answer_hi": "1/λ⁴",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "In a synchronous machine, the short circuit ratio (SCR) is defined as:",
    "question_hi": "सिंक्रोनस मशीन में, शॉर्ट सर्किट अनुपात (SCR) को परिभाषित किया जाता है:",
    "options_en": ["Field current for rated voltage on open circuit to field current for rated armature current on short circuit", "Reciprocal of synchronous reactance in pu", "Both A and B", "Xd in pu"],
    "options_hi": ["खुले परिपथ पर रेटेड वोल्टेज के लिए फील्ड धारा से शॉर्ट सर्किट पर रेटेड आर्मेचर धारा के लिए फील्ड धारा", "pu में तुल्यकालिक प्रतिघात का व्युत्क्रम", "A और B दोनों", "pu में Xd"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "The Weibull distribution is commonly used to model:",
    "question_hi": "वेइबुल वितरण का आमतौर पर उपयोग किया जाता है मॉडलिंग के लिए:",
    "options_en": ["Failure rates in reliability engineering", "Normal distribution data", "Poisson processes", "Binomial distributions"],
    "options_hi": ["विश्वसनीयता इंजीनियरिंग में विफलता दरें", "सामान्य वितरण डेटा", "प्वासों प्रक्रियाएं", "द्विपद वितरण"],
    "answer_en": "Failure rates in reliability engineering",
    "answer_hi": "विश्वसनीयता इंजीनियरिंग में विफलता दरें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "The Lockhart-Martinelli parameter is used in:",
    "question_hi": "लॉकहार्ट-मार्टिनेली पैरामीटर का उपयोग किया जाता है:",
    "options_en": ["Two-phase flow pressure drop calculation", "Turbulent boundary layer analysis", "Heat exchanger design", "Compressible flow analysis"],
    "options_hi": ["दो-फेज प्रवाह दबाव पात गणना", "अशांत सीमा परत विश्लेषण", "हीट एक्सचेंजर डिजाइन", "संपीड्य प्रवाह विश्लेषण"],
    "answer_en": "Two-phase flow pressure drop calculation",
    "answer_hi": "दो-फेज प्रवाह दबाव पात गणना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "The Routh array for a system with characteristic equation s³ + 3s² + 3s + 1 + K = 0 has:",
    "question_hi": "अभिलाक्षणिक समीकरण s³ + 3s² + 3s + 1 + K = 0 वाली प्रणाली के लिए राउथ सारणी है:",
    "options_en": ["Two sign changes for K > 8", "One sign change for K < -1", "No sign changes for 0 < K < 8", "All of these"],
    "options_hi": ["K > 8 के लिए दो चिन्ह परिवर्तन", "K < -1 के लिए एक चिन्ह परिवर्तन", "0 < K < 8 के लिए कोई चिन्ह परिवर्तन नहीं", "ये सभी"],
    "answer_en": "No sign changes for 0 < K < 8",
    "answer_hi": "0 < K < 8 के लिए कोई चिन्ह परिवर्तन नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "The Peclet number in heat transfer is the product of:",
    "question_hi": "ऊष्मा स्थानांतरण में पेकलेट संख्या उत्पाद है:",
    "options_en": ["Reynolds and Prandtl numbers", "Reynolds and Nusselt numbers", "Prandtl and Grashof numbers", "Nusselt and Stanton numbers"],
    "options_hi": ["रेनॉल्ड्स और प्रांटल संख्याओं का", "रेनॉल्ड्स और नसेल्ट संख्याओं का", "प्रांटल और ग्राशोफ संख्याओं का", "नसेल्ट और स्टैंटन संख्याओं का"],
    "answer_en": "Reynolds and Prandtl numbers",
    "answer_hi": "रेनॉल्ड्स और प्रांटल संख्याओं का",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "In a boost converter, the output voltage is related to input voltage by:",
    "question_hi": "बूस्ट कन्वर्टर में, आउटपुट वोल्टेज संबंधित है इनपुट वोल्टेज से:",
    "options_en": ["Vout = Vin/(1-D)", "Vout = Vin × D", "Vout = Vin × (1-D)", "Vout = Vin/(D)"],
    "options_hi": ["Vout = Vin/(1-D)", "Vout = Vin × D", "Vout = Vin × (1-D)", "Vout = Vin/(D)"],
    "answer_en": "Vout = Vin/(1-D)",
    "answer_hi": "Vout = Vin/(1-D)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "The Tresca yield criterion is based on:",
    "question_hi": "ट्रेस्का पराभव मापदंड आधारित है:",
    "options_en": ["Maximum shear stress", "Maximum normal stress", "Distortion energy", "Strain energy density"],
    "options_hi": ["अधिकतम कर्तन प्रतिबल", "अधिकतम सामान्य प्रतिबल", "विकृति ऊर्जा", "विकृति ऊर्जा घनत्व"],
    "answer_en": "Maximum shear stress",
    "answer_hi": "अधिकतम कर्तन प्रतिबल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "The Sieder-Tate correlation is used for:",
    "question_hi": "सीडर-टेट सहसंबंध का उपयोग किया जाता है:",
    "options_en": ["Turbulent flow heat transfer in pipes", "Laminar flow heat transfer with variable viscosity", "Natural convection", "Radiation heat transfer"],
    "options_hi": ["पाइपों में अशांत प्रवाह ऊष्मा स्थानांतरण", "परिवर्तनशील श्यानता के साथ लैमिनार प्रवाह ऊष्मा स्थानांतरण", "प्राकृतिक संवहन", "विकिरण ऊष्मा स्थानांतरण"],
    "answer_en": "Laminar flow heat transfer with variable viscosity",
    "answer_hi": "परिवर्तनशील श्यानता के साथ लैमिनार प्रवाह ऊष्मा स्थानांतरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "The Miller effect in amplifiers causes:",
    "question_hi": "एम्पलीफायरों में मिलर प्रभाव कारण बनता है:",
    "options_en": ["Increase in input capacitance", "Decrease in input capacitance", "Increase in bandwidth", "Decrease in gain"],
    "options_hi": ["इनपुट धारिता में वृद्धि", "इनपुट धारिता में कमी", "बैंडविड्थ में वृद्धि", "लाभ में कमी"],
    "answer_en": "Increase in input capacitance",
    "answer_hi": "इनपुट धारिता में वृद्धि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "The Weber number becomes important when:",
    "question_hi": "वेबर संख्या महत्वपूर्ण हो जाती है जब:",
    "options_en": ["Surface tension forces are significant", "Viscous forces dominate", "Compressibility effects are important", "Gravity forces are dominant"],
    "options_hi": ["पृष्ठ तनाव बल महत्वपूर्ण हैं", "श्यान बल प्रभावी हैं", "संपीड्यता प्रभाव महत्वपूर्ण हैं", "गुरुत्वाकर्षण बल प्रभावी हैं"],
    "answer_en": "Surface tension forces are significant",
    "answer_hi": "पृष्ठ तनाव बल महत्वपूर्ण हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "The Mason's gain formula is used for:",
    "question_hi": "मेसन का लाभ सूत्र उपयोग किया जाता है:",
    "options_en": ["Finding transfer function of signal flow graphs", "Stability analysis of control systems", "Gain calculation of operational amplifiers", "Noise analysis in circuits"],
    "options_hi": ["सिग्नल फ्लो ग्राफ के स्थानांतरण फलन को खोजने के लिए", "नियंत्रण प्रणालियों का स्थिरता विश्लेषण", "ऑपरेशनल एम्पलीफायरों की लाभ गणना", "परिपथों में शोर विश्लेषण"],
    "answer_en": "Finding transfer function of signal flow graphs",
    "answer_hi": "सिग्नल फ्लो ग्राफ के स्थानांतरण फलन को खोजने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "The Eckert number in heat transfer represents:",
    "question_hi": "ऊष्मा स्थानांतरण में एकर्ट संख्या प्रतिनिधित्व करती है:",
    "options_en": ["Ratio of kinetic energy to enthalpy difference", "Ratio of inertia force to viscous force", "Ratio of convective to conductive heat transfer", "Dimensionless temperature"],
    "options_hi": ["गतिज ऊर्जा से एन्थैल्पी अंतर का अनुपात", "जड़त्व बल से श्यान बल का अनुपात", "संवहनी से चालकीय ऊष्मा स्थानांतरण का अनुपात", "विमाहीन तापमान"],
    "answer_en": "Ratio of kinetic energy to enthalpy difference",
    "answer_hi": "गतिज ऊर्जा से एन्थैल्पी अंतर का अनुपात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "In a Cuk converter, the output voltage is given by:",
    "question_hi": "कुक कन्वर्टर में, आउटपुट वोल्टेज दी जाती है:",
    "options_en": ["Vout = -Vin × D/(1-D)", "Vout = Vin × D/(1-D)", "Vout = -Vin/(1-D)", "Vout = Vin/(1-D)"],
    "options_hi": ["Vout = -Vin × D/(1-D)", "Vout = Vin × D/(1-D)", "Vout = -Vin/(1-D)", "Vout = Vin/(1-D)"],
    "answer_en": "Vout = -Vin × D/(1-D)",
    "answer_hi": "Vout = -Vin × D/(1-D)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "The Schmidt number in mass transfer is analogous to:",
    "question_hi": "द्रव्यमान स्थानांतरण में श्मिट संख्या अनुरूप है:",
    "options_en": ["Prandtl number in heat transfer", "Reynolds number in fluid flow", "Nusselt number", "Grashof number"],
    "options_hi": ["ऊष्मा स्थानांतरण में प्रांटल संख्या", "द्रव प्रवाह में रेनॉल्ड्स संख्या", "नसेल्ट संख्या", "ग्राशोफ संख्या"],
    "answer_en": "Prandtl number in heat transfer",
    "answer_hi": "ऊष्मा स्थानांतरण में प्रांटल संख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "The Kármán vortex street occurs when:",
    "question_hi": "कार्मान भंवर सड़क तब होती है:",
    "options_en": ["Re > 40 for flow past a cylinder", "Re < 5 for flow past a sphere", "Flow is laminar", "Boundary layer is turbulent"],
    "options_hi": ["सिलेंडर के पार प्रवाह के लिए Re > 40", "गोले के पार प्रवाह के लिए Re < 5", "प्रवाह लैमिनार है", "सीमा परत अशांत है"],
    "answer_en": "Re > 40 for flow past a cylinder",
    "answer_hi": "सिलेंडर के पार प्रवाह के लिए Re > 40",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "The Nyquist rate for a signal with maximum frequency 10 kHz is:",
    "question_hi": "अधिकतम आवृत्ति 10 kHz वाले सिग्नल के लिए नाइक्विस्ट दर है:",
    "options_en": ["10 kHz", "20 kHz", "5 kHz", "40 kHz"],
    "options_hi": ["10 kHz", "20 kHz", "5 kHz", "40 kHz"],
    "answer_en": "20 kHz",
    "answer_hi": "20 kHz",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "The Colburn j-factor for heat transfer is defined as:",
    "question_hi": "ऊष्मा स्थानांतरण के लिए कोलबर्न j-फैक्टर को परिभाषित किया जाता है:",
    "options_en": ["St·Pr^(2/3)", "Nu/(Re·Pr^(1/3))", "Both A and B", "h/(ρVcp)"],
    "options_hi": ["St·Pr^(2/3)", "Nu/(Re·Pr^(1/3))", "A और B दोनों", "h/(ρVcp)"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "In a flip-flop, the setup time is:",
    "question_hi": "फ्लिप-फ्लॉप में, सेटअप समय है:",
    "options_en": ["Minimum time data must be stable before clock edge", "Minimum time data must be stable after clock edge", "Maximum clock frequency", "Propagation delay"],
    "options_hi": ["क्लॉक एज से पहले डेटा को स्थिर रहने के लिए न्यूनतम समय", "क्लॉक एज के बाद डेटा को स्थिर रहने के लिए न्यूनतम समय", "अधिकतम क्लॉक आवृत्ति", "प्रसार विलंब"],
    "answer_en": "Minimum time data must be stable before clock edge",
    "answer_hi": "क्लॉक एज से पहले डेटा को स्थिर रहने के लिए न्यूनतम समय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "The Blasius solution is for:",
    "question_hi": "ब्लासियस समाधान है:",
    "options_en": ["Laminar boundary layer on flat plate", "Turbulent pipe flow", "Natural convection", "Compressible flow"],
    "options_hi": ["समतल प्लेट पर लैमिनार सीमा परत", "अशांत पाइप प्रवाह", "प्राकृतिक संवहन", "संपीड्य प्रवाह"],
    "answer_en": "Laminar boundary layer on flat plate",
    "answer_hi": "समतल प्लेट पर लैमिनार सीमा परत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "The Fanno flow deals with:",
    "question_hi": "फैनो प्रवाह संबंधित है:",
    "options_en": ["Adiabatic flow with friction in constant area duct", "Isentropic flow in nozzles", "Heat transfer with friction", "Rayleigh flow"],
    "options_hi": ["निरंतर क्षेत्र नलिका में घर्षण के साथ रुद्धोष्म प्रवाह", "नोजलों में आइसेंट्रोपिक प्रवाह", "घर्षण के साथ ऊष्मा स्थानांतरण", "रेले प्रवाह"],
    "answer_en": "Adiabatic flow with friction in constant area duct",
    "answer_hi": "निरंतर क्षेत्र नलिका में घर्षण के साथ रुद्धोष्म प्रवाह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "The Hall-Petch equation relates:",
    "question_hi": "हॉल-पेच समीकरण संबंधित करता है:",
    "options_en": ["Yield strength to grain size", "Hardness to carbon content", "Fracture toughness to crack length", "Creep rate to temperature"],
    "options_hi": ["पराभव सामर्थ्य से अनाज आकार", "कठोरता से कार्बन सामग्री", "फ्रैक्चर कर्कशता से दरार लंबाई", "विसर्पण दर से तापमान"],
    "answer_en": "Yield strength to grain size",
    "answer_hi": "पराभव सामर्थ्य से अनाज आकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "The Reynolds analogy relates:",
    "question_hi": "रेनॉल्ड्स अनुरूपता संबंधित करती है:",
    "options_en": ["Heat transfer and momentum transfer", "Mass transfer and heat transfer", "Pressure drop and velocity", "Friction factor and Nusselt number"],
    "options_hi": ["ऊष्मा स्थानांतरण और संवेग स्थानांतरण", "द्रव्यमान स्थानांतरण और ऊष्मा स्थानांतरण", "दबाव पात और वेग", "घर्षण कारक और नसेल्ट संख्या"],
    "answer_en": "Heat transfer and momentum transfer",
    "answer_hi": "ऊष्मा स्थानांतरण और संवेग स्थानांतरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "The Sherwood number in mass transfer is analogous to:",
    "question_hi": "द्रव्यमान स्थानांतरण में शेरवुड संख्या अनुरूप है:",
    "options_en": ["Nusselt number in heat transfer", "Reynolds number", "Prandtl number", "Stanton number"],
    "options_hi": ["ऊष्मा स्थानांतरण में नसेल्ट संख्या", "रेनॉल्ड्स संख्या", "प्रांटल संख्या", "स्टैंटन संख्या"],
    "answer_en": "Nusselt number in heat transfer",
    "answer_hi": "ऊष्मा स्थानांतरण में नसेल्ट संख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "The Moody diagram gives friction factor as a function of:",
    "question_hi": "मूडी आरेख घर्षण कारक देता है के फलन के रूप में:",
    "options_en": ["Reynolds number for laminar flow", "Reynolds number and relative roughness for turbulent flow", "Mach number", "Froude number"],
    "options_hi": ["लैमिनार प्रवाह के लिए रेनॉल्ड्स संख्या", "अशांत प्रवाह के लिए रेनॉल्ड्स संख्या और सापेक्ष खुरदरापन", "मैक संख्या", "फ्रॉड संख्या"],
    "answer_en": "Reynolds number and relative roughness for turbulent flow",
    "answer_hi": "अशांत प्रवाह के लिए रेनॉल्ड्स संख्या और सापेक्ष खुरदरापन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "The Nyquist stability criterion uses:",
    "question_hi": "नाइक्विस्ट स्थिरता मापदंड उपयोग करता है:",
    "options_en": ["Open-loop frequency response", "Closed-loop poles", "Root locus", "Bode plot magnitude only"],
    "options_hi": ["ओपन-लूप आवृत्ति प्रतिक्रिया", "क्लोज्ड-लूप ध्रुव", "रूट लोकस", "केवल बोड प्लॉट परिमाण"],
    "answer_en": "Open-loop frequency response",
    "answer_hi": "ओपन-लूप आवृत्ति प्रतिक्रिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "The Grashof number represents the ratio of:",
    "question_hi": "ग्राशोफ संख्या अनुपात को प्रस्तुत करती है:",
    "options_en": ["Buoyancy force to viscous force", "Inertia force to viscous force", "Buoyancy force to inertia force", "Pressure force to viscous force"],
    "options_hi": ["उत्प्लावन बल से श्यान बल", "जड़त्व बल से श्यान बल", "उत्प्लावन बल से जड़त्व बल", "दबाव बल से श्यान बल"],
    "answer_en": "Buoyancy force to viscous force",
    "answer_hi": "उत्प्लावन बल से श्यान बल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "The Stefan-Boltzmann constant has units of:",
    "question_hi": "स्टीफन-बोल्ट्जमान स्थिरांक की इकाइयाँ हैं:",
    "options_en": ["W/m²K⁴", "W/mK", "J/kgK", "m²/s"],
    "options_hi": ["W/m²K⁴", "W/mK", "J/kgK", "m²/s"],
    "answer_en": "W/m²K⁴",
    "answer_hi": "W/m²K⁴",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "The Mach number is important when:",
    "question_hi": "मैक संख्या महत्वपूर्ण है जब:",
    "options_en": ["Compressibility effects are significant", "Viscous effects dominate", "Surface tension is important", "Gravity effects are dominant"],
    "options_hi": ["संपीड्यता प्रभाव महत्वपूर्ण हैं", "श्यान प्रभाव प्रभावी हैं", "पृष्ठ तनाव महत्वपूर्ण है", "गुरुत्वाकर्षण प्रभाव प्रभावी हैं"],
    "answer_en": "Compressibility effects are significant",
    "answer_hi": "संपीड्यता प्रभाव महत्वपूर्ण हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "The Prandtl number for liquid metals is typically:",
    "question_hi": "द्रव धातुओं के लिए प्रांटल संख्या आमतौर पर है:",
    "options_en": ["Very small (~0.01)", "About 0.7", "About 7", "Very large (>100)"],
    "options_hi": ["बहुत छोटा (~0.01)", "लगभग 0.7", "लगभग 7", "बहुत बड़ा (>100)"],
    "answer_en": "Very small (~0.01)",
    "answer_hi": "बहुत छोटा (~0.01)",
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