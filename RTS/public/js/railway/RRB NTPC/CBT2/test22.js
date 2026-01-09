const questions = [
  {
    "num": 1,
    "question_en": "In a synchronous machine, the armature reaction MMF under lagging power factor load is:",
    "question_hi": "सिंक्रोनस मशीन में, लैगिंग पावर फैक्टर लोड के तहत आर्मेचर रिएक्शन MMF है:",
    "options_en": ["Demagnetizing and cross-magnetizing", "Purely demagnetizing", "Purely cross-magnetizing", "Magnetizing and cross-magnetizing"],
    "options_hi": ["विचुंबकीय और क्रॉस-चुंबकीय", "विशुद्ध रूप से विचुंबकीय", "विशुद्ध रूप से क्रॉस-चुंबकीय", "चुंबकीय और क्रॉस-चुंबकीय"],
    "answer_en": "Demagnetizing and cross-magnetizing",
    "answer_hi": "विचुंबकीय और क्रॉस-चुंबकीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "The Orifice coefficient (Cd) for sharp-edged orifice is typically in the range of:",
    "question_hi": "तीक्ष्ण-धार वाले ऑरिफिस के लिए ऑरिफिस गुणांक (Cd) आमतौर पर सीमा में होता है:",
    "options_en": ["0.6 to 0.65", "0.95 to 0.99", "0.7 to 0.8", "0.98 to 1.0"],
    "options_hi": ["0.6 से 0.65", "0.95 से 0.99", "0.7 से 0.8", "0.98 से 1.0"],
    "answer_en": "0.6 to 0.65",
    "answer_hi": "0.6 से 0.65",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "The Bauschinger effect is most prominent in materials that exhibit:",
    "question_hi": "बॉशिंगर प्रभाव सबसे प्रमुख है उन पदार्थों में जो प्रदर्शित करते हैं:",
    "options_en": ["Significant plastic deformation", "High elastic modulus", "Brittle fracture", "Viscoelastic behavior"],
    "options_hi": ["महत्वपूर्ण प्लास्टिक विरूपण", "उच्च प्रत्यास्थता मापांक", "भंगुर फ्रैक्चर", "श्यान-प्रत्यास्थ व्यवहार"],
    "answer_en": "Significant plastic deformation",
    "answer_hi": "महत्वपूर्ण प्लास्टिक विरूपण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "For a second-order system with damping ratio ζ = 0.707, the percentage overshoot is approximately:",
    "question_hi": "अवमंदन अनुपात ζ = 0.707 वाली द्वितीय-कोटि प्रणाली के लिए, प्रतिशत ओवरशूट लगभग है:",
    "options_en": ["4.3%", "9.5%", "16.3%", "25.4%"],
    "options_hi": ["4.3%", "9.5%", "16.3%", "25.4%"],
    "answer_en": "4.3%",
    "answer_hi": "4.3%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "The Prandtl number for liquid metals is very low (0.01-0.1) because:",
    "question_hi": "द्रव धातुओं के लिए प्रांटल संख्या बहुत कम (0.01-0.1) होती है क्योंकि:",
    "options_en": ["Thermal diffusivity is much larger than kinematic viscosity", "Kinematic viscosity is much larger than thermal diffusivity", "Both are nearly equal", "They have very low conductivity"],
    "options_hi": ["थर्मल विसरणशीलता गतिक श्यानता से बहुत अधिक है", "गतिक श्यानता थर्मल विसरणशीलता से बहुत अधिक है", "दोनों लगभग बराबर हैं", "उनकी चालकता बहुत कम है"],
    "answer_en": "Thermal diffusivity is much larger than kinematic viscosity",
    "answer_hi": "थर्मल विसरणशीलता गतिक श्यानता से बहुत अधिक है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "In a MOSFET, the channel length modulation effect causes:",
    "question_hi": "MOSFET में, चैनल लंबाई मॉड्यूलेशन प्रभाव कारण बनता है:",
    "options_en": ["Finite output resistance in saturation", "Reduced transconductance", "Increased threshold voltage", "Decreased gate capacitance"],
    "options_hi": ["संतृप्ति में परिमित आउटपुट प्रतिरोध", "कम ट्रांसकंडक्टेंस", "बढ़ी हुई थ्रेशोल्ड वोल्टेज", "कम गेट धारिता"],
    "answer_en": "Finite output resistance in saturation",
    "answer_hi": "संतृप्ति में परिमित आउटपुट प्रतिरोध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "The Reynolds analogy between momentum and heat transfer is strictly valid for:",
    "question_hi": "संवेग और ऊष्मा स्थानांतरण के बीच रेनॉल्ड्स अनुरूपता कड़ाई से मान्य है:",
    "options_en": ["Pr = 1", "Pr = 0.7", "All Prandtl numbers", "Turbulent flow only"],
    "options_hi": ["Pr = 1", "Pr = 0.7", "सभी प्रांटल संख्याओं के लिए", "केवल अशांत प्रवाह"],
    "answer_en": "Pr = 1",
    "answer_hi": "Pr = 1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "The von Karman vortex street occurs when the Reynolds number based on cylinder diameter is approximately:",
    "question_hi": "वॉन कार्मान भंवर सड़क तब होती है जब सिलेंडर व्यास पर आधारित रेनॉल्ड्स संख्या लगभग है:",
    "options_en": ["40 to 300", "1000 to 2000", "10^5 to 10^6", "Less than 5"],
    "options_hi": ["40 से 300", "1000 से 2000", "10^5 से 10^6", "5 से कम"],
    "answer_en": "40 to 300",
    "answer_hi": "40 से 300",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "For a phase-locked loop (PLL), the lock range is:",
    "question_hi": "फेज-लॉक्ड लूप (PLL) के लिए, लॉक रेंज है:",
    "options_en": ["Always greater than capture range", "Always less than capture range", "Equal to capture range", "Independent of capture range"],
    "options_hi": ["सदैव कैप्चर रेंज से अधिक", "सदैव कैप्चर रेंज से कम", "कैप्चर रेंज के बराबर", "कैप्चर रेंज से स्वतंत्र"],
    "answer_en": "Always greater than capture range",
    "answer_hi": "सदैव कैप्चर रेंज से अधिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "The Grashof criterion for a four-bar linkage states that the sum of shortest and longest links:",
    "question_hi": "चार-बार लिंकेज के लिए ग्राशोफ मापदंड कहता है कि सबसे छोटे और सबसे लंबे लिंकों का योग:",
    "options_en": ["Must be less than sum of other two links", "Must be greater than sum of other two links", "Must be equal to sum of other two links", "Is irrelevant"],
    "options_hi": ["अन्य दो लिंकों के योग से कम होना चाहिए", "अन्य दो लिंकों के योग से अधिक होना चाहिए", "अन्य दो लिंकों के योग के बराबर होना चाहिए", "अप्रासंगिक है"],
    "answer_en": "Must be less than sum of other two links",
    "answer_hi": "अन्य दो लिंकों के योग से कम होना चाहिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "The Eckert number in high-speed flow represents the ratio of:",
    "question_hi": "उच्च-गति प्रवाह में एकर्ट संख्या अनुपात को प्रस्तुत करती है:",
    "options_en": ["Kinetic energy to enthalpy difference", "Inertia to viscous forces", "Convective to conductive heat transfer", "Buoyancy to viscous forces"],
    "options_hi": ["गतिज ऊर्जा से एन्थैल्पी अंतर", "जड़त्व से श्यान बल", "संवहनी से चालकीय ऊष्मा स्थानांतरण", "उत्प्लावन से श्यान बल"],
    "answer_en": "Kinetic energy to enthalpy difference",
    "answer_hi": "गतिज ऊर्जा से एन्थैल्पी अंतर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "In fracture mechanics, the plastic zone size at crack tip for plane stress is proportional to:",
    "question_hi": "फ्रैक्चर यांत्रिकी में, समतल प्रतिबल के लिए दरार शिखर पर प्लास्टिक ज़ोन आकार आनुपातिक है:",
    "options_en": ["(K/σys)²", "K/σys", "(K/σys)^(1/2)", "K²/σys"],
    "options_hi": ["(K/σys)²", "K/σys", "(K/σys)^(1/2)", "K²/σys"],
    "answer_en": "(K/σys)²",
    "answer_hi": "(K/σys)²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "The Butterworth filter of order n has a roll-off rate of:",
    "question_hi": "क्रम n के बटरवर्थ फिल्टर की रोल-ऑफ दर है:",
    "options_en": ["20n dB/decade", "40n dB/decade", "6n dB/octave", "Both A and C"],
    "options_hi": ["20n dB/decade", "40n dB/decade", "6n dB/octave", "A और C दोनों"],
    "answer_en": "Both A and C",
    "answer_hi": "A और C दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "The Lewis number in mass transfer is defined as:",
    "question_hi": "द्रव्यमान स्थानांतरण में लुईस संख्या को परिभाषित किया जाता है:",
    "options_en": ["α/D", "D/α", "Sc/Pr", "Pr/Sc"],
    "options_hi": ["α/D", "D/α", "Sc/Pr", "Pr/Sc"],
    "answer_en": "α/D",
    "answer_hi": "α/D",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "For a simply supported beam with central point load, the maximum deflection is given by:",
    "question_hi": "केंद्रीय बिंदु भार वाली सरल आलंबित बीम के लिए, अधिकतम विक्षेपण दिया जाता है:",
    "options_en": ["PL³/(48EI)", "PL³/(192EI)", "5wL⁴/(384EI)", "wL⁴/(8EI)"],
    "options_hi": ["PL³/(48EI)", "PL³/(192EI)", "5wL⁴/(384EI)", "wL⁴/(8EI)"],
    "answer_en": "PL³/(48EI)",
    "answer_hi": "PL³/(48EI)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "The Hartmann number in MHD flow represents the ratio of:",
    "question_hi": "MHD प्रवाह में हार्टमैन संख्या अनुपात को प्रस्तुत करती है:",
    "options_en": ["Magnetic force to viscous force", "Electric force to magnetic force", "Lorentz force to inertia force", "Joule heating to viscous dissipation"],
    "options_hi": ["चुंबकीय बल से श्यान बल", "विद्युत बल से चुंबकीय बल", "लोरेंत्ज़ बल से जड़त्व बल", "जूल तापन से श्यान अपव्यय"],
    "answer_en": "Magnetic force to viscous force",
    "answer_hi": "चुंबकीय बल से श्यान बल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "The Nyquist stability criterion for a system with open-loop transfer function G(s)H(s) requires examination of:",
    "question_hi": "ओपन-लूप स्थानांतरण फलन G(s)H(s) वाली प्रणाली के लिए नाइक्विस्ट स्थिरता मापदंड की आवश्यकता है:",
    "options_en": ["Mapping of Nyquist contour in G(s)H(s) plane", "Roots of characteristic equation", "Bode plot magnitude", "Phase margin only"],
    "options_hi": ["G(s)H(s) तल में नाइक्विस्ट समोच्च का मानचित्रण", "अभिलाक्षणिक समीकरण के मूल", "बोड प्लॉट परिमाण", "केवल फेज मार्जिन"],
    "answer_en": "Mapping of Nyquist contour in G(s)H(s) plane",
    "answer_hi": "G(s)H(s) तल में नाइक्विस्ट समोच्च का मानचित्रण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "The Weissenberg effect in non-Newtonian fluids refers to:",
    "question_hi": "गैर-न्यूटोनियन द्रवों में वाइसेनबर्ग प्रभाव संदर्भित करता है:",
    "options_en": ["Radial migration towards center in Couette flow", "Climbing up a rotating rod", "Shear thinning behavior", "Time-dependent viscosity"],
    "options_hi": "कुएट प्रवाह में केंद्र की ओर रेडियल प्रवास",
    "options_hi": ["कुएट प्रवाह में केंद्र की ओर रेडियल प्रवास", "घूमने वाली छड़ पर चढ़ना", "कर्तन प्रवाहन व्यवहार", "समय-निर्भर श्यानता"],
    "answer_en": "Climbing up a rotating rod",
    "answer_hi": "घूमने वाली छड़ पर चढ़ना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "The Peclet number in mass transfer is:",
    "question_hi": "द्रव्यमान स्थानांतरण में पेकलेट संख्या है:",
    "options_en": ["Re × Sc", "Re × Pr", "Gr × Sc", "Ra × Pr"],
    "options_hi": ["Re × Sc", "Re × Pr", "Gr × Sc", "Ra × Pr"],
    "answer_en": "Re × Sc",
    "answer_hi": "Re × Sc",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "The Soderberg line for fatigue design assumes:",
    "question_hi": "थकान डिजाइन के लिए सोडरबर्ग रेखा मानती है:",
    "options_en": ["Yield strength as fatigue limit", "Ultimate strength as fatigue limit", "Endurance limit as fatigue limit", "Tensile strength as fatigue limit"],
    "options_hi": ["पराभव सामर्थ्य को थकान सीमा के रूप में", "अंतिम सामर्थ्य को थकान सीमा के रूप में", "सहन सीमा को थकान सीमा के रूप में", "तन्य सामर्थ्य को थकान सीमा के रूप में"],
    "answer_en": "Yield strength as fatigue limit",
    "answer_hi": "पराभव सामर्थ्य को थकान सीमा के रूप में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "The Margules equation for vapor-liquid equilibrium is a:",
    "question_hi": "वाष्प-द्रव संतुलन के लिए मार्गुलेस समीकरण एक है:",
    "options_en": ["Two-parameter activity coefficient model", "One-parameter model", "Three-parameter model", "Ideal solution model"],
    "options_hi": ["दो-पैरामीटर सक्रियता गुणांक मॉडल", "एक-पैरामीटर मॉडल", "तीन-पैरामीटर मॉडल", "आदर्श विलयन मॉडल"],
    "answer_en": "Two-parameter activity coefficient model",
    "answer_hi": "दो-पैरामीटर सक्रियता गुणांक मॉडल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "The Lockhart-Martinelli parameter for two-phase flow is defined as:",
    "question_hi": "दो-फेज प्रवाह के लिए लॉकहार्ट-मार्टिनेली पैरामीटर को परिभाषित किया जाता है:",
    "options_en": ["√(ΔP_l/ΔP_g)", "ΔP_l/ΔP_g", "(ΔP_l/ΔP_g)^(1/4)", "(ΔP_g/ΔP_l)^(1/2)"],
    "options_hi": ["√(ΔP_l/ΔP_g)", "ΔP_l/ΔP_g", "(ΔP_l/ΔP_g)^(1/4)", "(ΔP_g/ΔP_l)^(1/2)"],
    "answer_en": "√(ΔP_l/ΔP_g)",
    "answer_hi": "√(ΔP_l/ΔP_g)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "The Rayleigh line on T-s diagram for Rayleigh flow is:",
    "question_hi": "रेले प्रवाह के लिए T-s आरेख पर रेले रेखा है:",
    "options_en": ["A curve with maximum entropy point", "A straight line", "A parabola", "An exponential curve"],
    "options_hi": ["अधिकतम एन्ट्रॉपी बिंदु वाला वक्र", "एक सीधी रेखा", "एक परवलय", "एक घातांकीय वक्र"],
    "answer_en": "A curve with maximum entropy point",
    "answer_hi": "अधिकतम एन्ट्रॉपी बिंदु वाला वक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "The Colebrook-White equation is valid for:",
    "question_hi": "कोलब्रूक-व्हाइट समीकरण मान्य है:",
    "options_en": ["Transition and turbulent flow regimes", "Laminar flow only", "Smooth pipes only", "Rough pipes only"],
    "options_hi": ["संक्रमण और अशांत प्रवाह शासन", "केवल लैमिनार प्रवाह", "केवल चिकने पाइप", "केवल खुरदरे पाइप"],
    "answer_en": "Transition and turbulent flow regimes",
    "answer_hi": "संक्रमण और अशांत प्रवाह शासन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "The Debye length in plasma physics is:",
    "question_hi": "प्लाज्मा भौतिकी में डेबाई लंबाई है:",
    "options_en": ["Screening distance for electric fields", "Mean free path of electrons", "Plasma oscillation wavelength", "Larmor radius"],
    "options_hi": ["विद्युत क्षेत्रों के लिए परिरक्षण दूरी", "इलेक्ट्रॉनों का माध्य मुक्त पथ", "प्लाज्मा दोलन तरंगदैर्घ्य", "लार्मोर त्रिज्या"],
    "answer_en": "Screening distance for electric fields",
    "answer_hi": "विद्युत क्षेत्रों के लिए परिरक्षण दूरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "The Johnson-Mehl-Avrami equation describes:",
    "question_hi": "जॉनसन-मेहल-अवरामी समीकरण वर्णन करता है:",
    "options_en": ["Phase transformation kinetics", "Creep deformation", "Fatigue crack growth", "Diffusion processes"],
    "options_hi": ["फेज परिवर्तन गतिकी", "विसर्पण विरूपण", "थकान दरार वृद्धि", "विसरण प्रक्रियाएं"],
    "answer_en": "Phase transformation kinetics",
    "answer_hi": "फेज परिवर्तन गतिकी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "The Knudsen number becomes important when:",
    "question_hi": "नडसेन संख्या महत्वपूर्ण हो जाती है जब:",
    "options_en": ["Mean free path ≈ characteristic length", "Re >> 1", "Ma >> 1", "Pr << 1"],
    "options_hi": ["माध्य मुक्त पथ ≈ अभिलाक्षणिक लंबाई", "Re >> 1", "Ma >> 1", "Pr << 1"],
    "answer_en": "Mean free path ≈ characteristic length",
    "answer_hi": "माध्य मुक्त पथ ≈ अभिलाक्षणिक लंबाई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "The Moody chart plots friction factor against:",
    "question_hi": "मूडी आरेख घर्षण कारक प्लॉट करता है:",
    "options_en": ["Reynolds number with relative roughness as parameter", "Reynolds number only", "Relative roughness only", "Mach number"],
    "options_hi": ["पैरामीटर के रूप में सापेक्ष खुरदरापन के साथ रेनॉल्ड्स संख्या", "केवल रेनॉल्ड्स संख्या", "केवल सापेक्ष खुरदरापन", "मैक संख्या"],
    "answer_en": "Reynolds number with relative roughness as parameter",
    "answer_hi": "पैरामीटर के रूप में सापेक्ष खुरदरापन के साथ रेनॉल्ड्स संख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "The Navier-Stokes equations for incompressible flow consist of:",
    "question_hi": "असंपीड्य प्रवाह के लिए नेवियर-स्टोक्स समीकरण शामिल करते हैं:",
    "options_en": ["Momentum equations + continuity equation", "Energy equation + momentum equations", "Continuity equation only", "Momentum equations only"],
    "options_hi": ["संवेग समीकरण + निरंतरता समीकरण", "ऊर्जा समीकरण + संवेग समीकरण", "केवल निरंतरता समीकरण", "केवल संवेग समीकरण"],
    "answer_en": "Momentum equations + continuity equation",
    "answer_hi": "संवेग समीकरण + निरंतरता समीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "The Bode plot of an integrator has:",
    "question_hi": "इंटीग्रेटर का बोड प्लॉट है:",
    "options_en": ["-20 dB/decade slope and -90° phase", "-40 dB/decade slope and -180° phase", "0 dB/decade slope and -90° phase", "-20 dB/decade slope and 0° phase"],
    "options_hi": ["-20 dB/decade ढलान और -90° फेज", "-40 dB/decade ढलान और -180° फेज", "0 dB/decade ढलान और -90° फेज", "-20 dB/decade ढलान और 0° फेज"],
    "answer_en": "-20 dB/decade slope and -90° phase",
    "answer_hi": "-20 dB/decade ढलान और -90° फेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "The Kirchhoff's law of radiation states that for a body in thermal equilibrium:",
    "question_hi": "विकिरण का किरचॉफ नियम कहता है कि तापीय संतुलन में किसी पिंड के लिए:",
    "options_en": ["Emissivity = absorptivity", "Emissivity = reflectivity", "Absorptivity = transmissivity", "Emissivity = 1 - reflectivity"],
    "options_hi": ["उत्सर्जकता = अवशोषण क्षमता", "उत्सर्जकता = परावर्तन क्षमता", "अवशोषण क्षमता = संप्रेषण क्षमता", "उत्सर्जकता = 1 - परावर्तन क्षमता"],
    "answer_en": "Emissivity = absorptivity",
    "answer_hi": "उत्सर्जकता = अवशोषण क्षमता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "The Rayleigh criterion for resolution of two point sources states that they are just resolvable when:",
    "question_hi": "दो बिंदु स्रोतों के विभेदन के लिए रेले मापदंड कहता है कि वे सिर्फ विभेद्य होते हैं जब:",
    "options_en": ["First minimum of one coincides with central maximum of other", "Central maxima coincide", "First minima coincide", "Central maximum of one coincides with first minimum of other"],
    "options_hi": ["एक का प्रथम न्यूनतम दूसरे के केंद्रीय अधिकतम के साथ संपाती हो", "केंद्रीय अधिकतम संपाती हों", "प्रथम न्यूनतम संपाती हों", "एक का केंद्रीय अधिकतम दूसरे के प्रथम न्यूनतम के साथ संपाती हो"],
    "answer_en": "First minimum of one coincides with central maximum of other",
    "answer_hi": "एक का प्रथम न्यूनतम दूसरे के केंद्रीय अधिकतम के साथ संपाती हो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "The Fenske equation in distillation gives:",
    "question_hi": "आसवन में फेंस्के समीकरण देता है:",
    "options_en": ["Minimum number of theoretical plates at total reflux", "Actual number of plates", "Optimum reflux ratio", "Feed plate location"],
    "options_hi": ["कुल रिफ्लक्स पर सैद्धांतिक प्लेटों की न्यूनतम संख्या", "वास्तविक प्लेटों की संख्या", "इष्टतम रिफ्लक्स अनुपात", "फीड प्लेट स्थान"],
    "answer_en": "Minimum number of theoretical plates at total reflux",
    "answer_hi": "कुल रिफ्लक्स पर सैद्धांतिक प्लेटों की न्यूनतम संख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "The Biot number for lumped system analysis should be:",
    "question_hi": "लंपित प्रणाली विश्लेषण के लिए बायोट संख्या होनी चाहिए:",
    "options_en": ["< 0.1", "> 10", "≈ 1", "> 100"],
    "options_hi": ["< 0.1", "> 10", "≈ 1", "> 100"],
    "answer_en": "< 0.1",
    "answer_hi": "< 0.1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "The Mach number for incompressible flow is:",
    "question_hi": "असंपीड्य प्रवाह के लिए मैक संख्या है:",
    "options_en": ["Approximately zero", "Exactly zero", "Greater than 0.3", "Always greater than 1"],
    "options_hi": ["लगभग शून्य", "ठीक शून्य", "0.3 से अधिक", "सदैव 1 से अधिक"],
    "answer_en": "Approximately zero",
    "answer_hi": "लगभग शून्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "The Nusselt number for fully developed laminar flow in circular pipe with constant wall temperature is:",
    "question_hi": "निरंतर दीवार तापमान वाले वृत्ताकार पाइप में पूर्ण विकसित लैमिनार प्रवाह के लिए नसेल्ट संख्या है:",
    "options_en": ["3.66", "4.36", "0.023Re^0.8Pr^0.4", "0.027Re^0.8Pr^(1/3)"],
    "options_hi": ["3.66", "4.36", "0.023Re^0.8Pr^0.4", "0.027Re^0.8Pr^(1/3)"],
    "answer_en": "3.66",
    "answer_hi": "3.66",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
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
    "num": 38,
    "question_en": "The Colebrook equation for friction factor is:",
    "question_hi": "घर्षण कारक के लिए कोलब्रूक समीकरण है:",
    "options_en": ["1/√f = -2log[ε/(3.7D) + 2.51/(Re√f)]", "f = 64/Re", "1/√f = 1.14 - 2log(ε/D)", "f = 0.316/Re^0.25"],
    "options_hi": ["1/√f = -2log[ε/(3.7D) + 2.51/(Re√f)]", "f = 64/Re", "1/√f = 1.14 - 2log(ε/D)", "f = 0.316/Re^0.25"],
    "answer_en": "1/√f = -2log[ε/(3.7D) + 2.51/(Re√f)]",
    "answer_hi": "1/√f = -2log[ε/(3.7D) + 2.51/(Re√f)]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "The Peclet number for heat transfer is:",
    "question_hi": "ऊष्मा स्थानांतरण के लिए पेकलेट संख्या है:",
    "options_en": ["Re × Pr", "Re × Sc", "Gr × Pr", "Ra × Sc"],
    "options_hi": ["Re × Pr", "Re × Sc", "Gr × Pr", "Ra × Sc"],
    "answer_en": "Re × Pr",
    "answer_hi": "Re × Pr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "The Knudsen diffusion occurs when:",
    "question_hi": "नडसेन विसरण तब होता है:",
    "options_en": ["Pore diameter < mean free path", "Pore diameter > mean free path", "Pore diameter ≈ mean free path", "Always in nano-pores"],
    "options_hi": ["छिद्र व्यास < माध्य मुक्त पथ", "छिद्र व्यास > माध्य मुक्त पथ", "छिद्र व्यास ≈ माध्य मुक्त पथ", "सदैव नैनो-छिद्रों में"],
    "answer_en": "Pore diameter < mean free path",
    "answer_hi": "छिद्र व्यास < माध्य मुक्त पथ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "The Weibull modulus in fracture statistics indicates:",
    "question_hi": "फ्रैक्चर सांख्यिकी में वेइबुल मापांक संकेत करता है:",
    "options_en": ["Scatter in strength data", "Mean strength", "Minimum strength", "Maximum strength"],
    "options_hi": ["सामर्थ्य डेटा में फैलाव", "माध्य सामर्थ्य", "न्यूनतम सामर्थ्य", "अधिकतम सामर्थ्य"],
    "answer_en": "Scatter in strength data",
    "answer_hi": "सामर्थ्य डेटा में फैलाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "The Margules equation parameters A12 and A21 represent:",
    "question_hi": "मार्गुलेस समीकरण पैरामीटर A12 और A21 प्रतिनिधित्व करते हैं:",
    "options_en": ["Binary interaction parameters", "Pure component properties", "Temperature coefficients", "Pressure coefficients"],
    "options_hi": ["द्विआधारी अंतर्क्रिया पैरामीटर", "शुद्ध घटक गुण", "तापमान गुणांक", "दबाव गुणांक"],
    "answer_en": "Binary interaction parameters",
    "answer_hi": "द्विआधारी अंतर्क्रिया पैरामीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "The Lockhart-Martinelli parameter X is defined as:",
    "question_hi": "लॉकहार्ट-मार्टिनेली पैरामीटर X को परिभाषित किया जाता है:",
    "options_en": ["√(ΔP_l/ΔP_g)", "ΔP_l/ΔP_g", "(ΔP_l/ΔP_g)^2", "ΔP_g/ΔP_l"],
    "options_hi": ["√(ΔP_l/ΔP_g)", "ΔP_l/ΔP_g", "(ΔP_l/ΔP_g)^2", "ΔP_g/ΔP_l"],
    "answer_en": "√(ΔP_l/ΔP_g)",
    "answer_hi": "√(ΔP_l/ΔP_g)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "The Rayleigh line on h-s diagram has:",
    "question_hi": "h-s आरेख पर रेले रेखा है:",
    "options_en": ["Constant stagnation enthalpy", "Constant static enthalpy", "Constant entropy", "Constant pressure"],
    "options_hi": ["निरंतर ठहराव एन्थैल्पी", "निरंतर स्थैतिक एन्थैल्पी", "निरंतर एन्ट्रॉपी", "निरंतर दबाव"],
    "answer_en": "Constant stagnation enthalpy",
    "answer_hi": "निरंतर ठहराव एन्थैल्पी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "The Colebrook-White equation is implicit in:",
    "question_hi": "कोलब्रूक-व्हाइट समीकरण अंतर्निहित है:",
    "options_en": ["f", "Re", "ε/D", "All of these"],
    "options_hi": ["f", "Re", "ε/D", "ये सभी"],
    "answer_en": "f",
    "answer_hi": "f",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "The Debye length λ_D is given by:",
    "question_hi": "डेबाई लंबाई λ_D दी जाती है:",
    "options_en": ["√(ε₀kT/ne²)", "√(ε₀kT/ne)", "ε₀kT/ne²", "ε₀kT/ne"],
    "options_hi": ["√(ε₀kT/ne²)", "√(ε₀kT/ne)", "ε₀kT/ne²", "ε₀kT/ne"],
    "answer_en": "√(ε₀kT/ne²)",
    "answer_hi": "√(ε₀kT/ne²)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "The Johnson-Mehl-Avrami equation is:",
    "question_hi": "जॉनसन-मेहल-अवरामी समीकरण है:",
    "options_en": ["X = 1 - exp(-kt^n)", "X = kt^n", "X = 1 - kt^n", "X = exp(-kt^n)"],
    "options_hi": ["X = 1 - exp(-kt^n)", "X = kt^n", "X = 1 - kt^n", "X = exp(-kt^n)"],
    "answer_en": "X = 1 - exp(-kt^n)",
    "answer_hi": "X = 1 - exp(-kt^n)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "The Knudsen number Kn is defined as:",
    "question_hi": "नडसेन संख्या Kn को परिभाषित किया जाता है:",
    "options_en": ["λ/L", "L/λ", "λ²/L", "L²/λ"],
    "options_hi": ["λ/L", "L/λ", "λ²/L", "L²/λ"],
    "answer_en": "λ/L",
    "answer_hi": "λ/L",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "The Moody friction factor for laminar flow is:",
    "question_hi": "लैमिनार प्रवाह के लिए मूडी घर्षण कारक है:",
    "options_en": ["64/Re", "0.316/Re^0.25", "0.184/Re^0.2", "1/(1.8 log(Re/7))^2"],
    "options_hi": ["64/Re", "0.316/Re^0.25", "0.184/Re^0.2", "1/(1.8 log(Re/7))^2"],
    "answer_en": "64/Re",
    "answer_hi": "64/Re",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "The Navier-Stokes equations are based on:",
    "question_hi": "नेवियर-स्टोक्स समीकरण आधारित हैं:",
    "options_en": ["Conservation of mass and momentum", "Conservation of energy", "Newton's second law", "Both A and C"],
    "options_hi": ["द्रव्यमान और संवेग के संरक्षण पर", "ऊर्जा के संरक्षण पर", "न्यूटन के द्वितीय नियम पर", "A और C दोनों"],
    "answer_en": "Both A and C",
    "answer_hi": "A और C दोनों",
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