const questions = [
  {
    "num": 1,
    "question_en": "What is the minimum required fracture toughness (K₁C) for Grade 1280 premium rail steel?",
    "question_hi": "ग्रेड 1280 प्रीमियम रेल स्टील के लिए आवश्यक न्यूनतम फ्रैक्चर टफनेस (K₁C) क्या है?",
    "options_en": ["25 MPa√m", "35 MPa√m", "45 MPa√m", "55 MPa√m"],
    "options_hi": ["25 MPa√m", "35 MPa√m", "45 MPa√m", "55 MPa√m"],
    "answer_en": "35 MPa√m",
    "answer_hi": "35 MPa√m",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which numerical method is most accurate for solving wheel-rail contact patch elliptical integrals?",
    "question_hi": "व्हील-रेल संपर्क पैच दीर्घवृत्तीय समाकलन को हल करने के लिए कौन सी संख्यात्मक विधि सबसे सटीक है?",
    "options_en": ["Gauss-Legendre quadrature", "Simpson's rule", "Runge-Kutta method", "Newton-Raphson method"],
    "options_hi": ["गॉस-लेजेंड्रे क्वाड्रैचर", "सिम्पसन का नियम", "रुंगे-कुट्टा विधि", "न्यूटन-रैफसन विधि"],
    "answer_en": "Gauss-Legendre quadrature",
    "answer_hi": "गॉस-लेजेंड्रे क्वाड्रैचर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the critical von Mises stress threshold for initiating ratcheting in pearlitic rail steel?",
    "question_hi": "पर्लाइटिक रेल स्टील में रैचेटिंग शुरू करने के लिए क्रिटिकल वॉन माइसेस स्ट्रेस थ्रेशोल्ड क्या है?",
    "options_en": ["0.6σy", "0.8σy", "1.0σy", "1.2σy"],
    "options_hi": ["0.6σy", "0.8σy", "1.0σy", "1.2σy"],
    "answer_en": "0.8σy",
    "answer_hi": "0.8σy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which advanced steel microstructure provides the best combination of wear resistance and fatigue strength for rails?",
    "question_hi": "रेल के लिए वियर रेजिस्टेंस और फटीग स्ट्रेंथ का सबसे अच्छा संयोजन कौन सी उन्नत स्टील माइक्रोस्ट्रक्चर प्रदान करती है?",
    "options_en": ["Fine pearlite with spheroidized cementite", "Bainite with retained austenite", "Nanobainitic structure", "Twinned martensite"],
    "options_hi": ["स्फेरोइडाइज्ड सीमेंटाइट के साथ फाइन पर्लाइट", "रिटेन्ड ऑस्टेनाइट के साथ बेनाइट", "नैनोबेनिटिक संरचना", "ट्विन्ड मार्टेंसाइट"],
    "answer_en": "Nanobainitic structure",
    "answer_hi": "नैनोबेनिटिक संरचना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the minimum required S-N curve slope parameter (m) for high-cycle fatigue design of railway axles?",
    "question_hi": "रेलवे एक्सल के हाई-साइकिल फटीग डिजाइन के लिए आवश्यक न्यूनतम एस-एन कर्व स्लोप पैरामीटर (m) क्या है?",
    "options_en": ["m = 3", "m = 5", "m = 8", "m = 10"],
    "options_hi": ["m = 3", "m = 5", "m = 8", "m = 10"],
    "answer_en": "m = 8",
    "answer_hi": "m = 8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which sophisticated finite element contact algorithm handles large sliding and separation in wheel-rail interaction?",
    "question_hi": "व्हील-रेल इंटरैक्शन में बड़े स्लाइडिंग और सेपरेशन को संभालने वाला कौन सा परिष्कृत फाइनाइट एलिमेंट कॉन्टैक्ट एल्गोरिदम है?",
    "options_en": ["Penalty method with Lagrange multipliers", "Augmented Lagrangian method", "Mortar method", "Nitsche's method"],
    "options_hi": ["लैग्रेंज मल्टीप्लायर्स के साथ पेनल्टी मेथड", "ऑगमेंटेड लैग्रेंजियन मेथड", "मोर्टार मेथड", "नित्शे की विधि"],
    "answer_en": "Augmented Lagrangian method",
    "answer_hi": "ऑगमेंटेड लैग्रेंजियन मेथड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the critical size for non-metallic inclusions that initiate rolling contact fatigue cracks in rail steel?",
    "question_hi": "गैर-धात्विक समावेशन का क्रिटिकल साइज क्या है जो रेल स्टील में रोलिंग कॉन्टैक्ट फटीग क्रैक्स शुरू करते हैं?",
    "options_en": ["5-10 μm", "10-20 μm", "20-50 μm", "50-100 μm"],
    "options_hi": ["5-10 μm", "10-20 μm", "20-50 μm", "50-100 μm"],
    "answer_en": "20-50 μm",
    "answer_hi": "20-50 μm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which advanced signal processing technique is used for early detection of wheel bearing faults?",
    "question_hi": "व्हील बेयरिंग फॉल्ट्स की शीघ्र पहचान के लिए किस उन्नत सिग्नल प्रोसेसिंग तकनीक का उपयोग किया जाता है?",
    "options_en": ["Empirical Mode Decomposition (EMD)", "Wavelet Transform", "Spectral Kurtosis", "All of these"],
    "options_hi": ["एम्पिरिकल मोड डिकम्पोजिशन (EMD)", "वेवलेट ट्रांसफॉर्म", "स्पेक्ट्रल कर्टोसिस", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the minimum required J-integral value for stable crack growth in rail steel under mixed-mode loading?",
    "question_hi": "मिश्रित-मोड लोडिंग के तहत रेल स्टील में स्थिर क्रैक ग्रोथ के लिए आवश्यक न्यूनतम जे-इंटीग्रल मान क्या है?",
    "options_en": ["JIC = 30 kJ/m²", "JIC = 50 kJ/m²", "JIC = 80 kJ/m²", "JIC = 100 kJ/m²"],
    "options_hi": ["JIC = 30 kJ/m²", "JIC = 50 kJ/m²", "JIC = 80 kJ/m²", "JIC = 100 kJ/m²"],
    "answer_en": "JIC = 50 kJ/m²",
    "answer_hi": "JIC = 50 kJ/m²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which computational model accurately predicts rail squats considering fluid entrapment and pressurization?",
    "question_hi": "तरल अंतर्ग्रहण और दबावीकरण पर विचार करते हुए रेल स्क्वाट्स की सटीक भविष्यवाणी करने वाला कम्प्यूटेशनल मॉडल कौन सा है?",
    "options_en": ["Hydrodynamic pressure model", "Elasto-hydrodynamic lubrication theory", "Coupled fluid-structure interaction", "All of these"],
    "options_hi": ["हाइड्रोडायनामिक प्रेशर मॉडल", "इलास्टो-हाइड्रोडायनामिक लुब्रिकेशन सिद्धांत", "युग्मित द्रव-संरचना अंतःक्रिया", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the critical slip ratio for maximum adhesion in wheel-rail contact under wet conditions?",
    "question_hi": "गीली परिस्थितियों में व्हील-रेल संपर्क में अधिकतम आसंजन के लिए क्रिटिकल स्लिप अनुपात क्या है?",
    "options_en": ["0.5-1.0%", "1.0-2.0%", "2.0-3.0%", "3.0-5.0%"],
    "options_hi": ["0.5-1.0%", "1.0-2.0%", "2.0-3.0%", "3.0-5.0%"],
    "answer_en": "1.0-2.0%",
    "answer_hi": "1.0-2.0%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which advanced metallurgical process reduces prior austenite grain size in rail steel to below 10 μm?",
    "question_hi": "कौन सी उन्नत धातुकर्म प्रक्रिया रेल स्टील में प्रायर ऑस्टेनाइट अनाज आकार को 10 μm से नीचे कम करती है?",
    "options_en": ["Severe plastic deformation", "Electro-slag remelting", "Thermomechanical controlled processing", "Laser surface alloying"],
    "options_hi": ["तीव्र प्लास्टिक विरूपण", "इलेक्ट्रो-स्लैग रीमेल्टिंग", "थर्मोमैकेनिकल नियंत्रित प्रसंस्करण", "लेजर सतह मिश्र धातुकरण"],
    "answer_en": "Thermomechanical controlled processing",
    "answer_hi": "थर्मोमैकेनिकल नियंत्रित प्रसंस्करण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the minimum required hardness gradient in through-hardened rails to prevent shelling?",
    "question_hi": "शेलिंग को रोकने के लिए थ्रू-हार्डन्ड रेल में आवश्यक न्यूनतम हार्डनेस ग्रेडिएंट क्या है?",
    "options_en": ["10 HV/mm", "20 HV/mm", "30 HV/mm", "40 HV/mm"],
    "options_hi": ["10 HV/mm", "20 HV/mm", "30 HV/mm", "40 HV/mm"],
    "answer_en": "20 HV/mm",
    "answer_hi": "20 HV/mm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which sophisticated algorithm optimizes train trajectory considering energy recovery and timetable constraints?",
    "question_hi": "ऊर्जा पुनर्प्राप्ति और समयसारिणी बाधाओं पर विचार करते हुए ट्रेन प्रक्षेपवक्र को अनुकूलित करने वाला परिष्कृत एल्गोरिदम कौन सा है?",
    "options_en": ["Pontryagin's maximum principle", "Dynamic programming", "Genetic algorithm", "All of these"],
    "options_hi": ["पोंट्र्यागिन का अधिकतम सिद्धांत", "डायनामिक प्रोग्रामिंग", "जेनेटिक एल्गोरिदम", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the critical stress intensity factor range (ΔKth) for fatigue crack growth in rail steel under compression-tension loading?",
    "question_hi": "संपीड़न-तनाव लोडिंग के तहत रेल स्टील में फटीग क्रैक ग्रोथ के लिए क्रिटिकल स्ट्रेस इंटेंसिटी फैक्टर रेंज (ΔKth) क्या है?",
    "options_en": ["5-7 MPa√m", "8-10 MPa√m", "11-13 MPa√m", "14-16 MPa√m"],
    "options_hi": ["5-7 MPa√m", "8-10 MPa√m", "11-13 MPa√m", "14-16 MPa√m"],
    "answer_en": "8-10 MPa√m",
    "answer_hi": "8-10 MPa√m",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which advanced composite material is being researched for lightweight railway vehicle structures?",
    "question_hi": "हल्के रेलवे वाहन संरचनाओं के लिए किस उन्नत कम्पोजिट सामग्री पर शोध किया जा रहा है?",
    "options_en": ["Carbon fiber reinforced thermoplastic", "Metal matrix composites", "Self-healing composites", "All of these"],
    "options_hi": ["कार्बन फाइबर प्रबलित थर्मोप्लास्टिक", "धातु मैट्रिक्स कम्पोजिट", "स्व-चिकित्सा कम्पोजिट", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the minimum required damping ratio for railway bridge piers to meet seismic performance requirements?",
    "question_hi": "भूकंपीय प्रदर्शन आवश्यकताओं को पूरा करने के लिए रेलवे ब्रिज पियर्स के लिए आवश्यक न्यूनतम डैम्पिंग अनुपात क्या है?",
    "options_en": ["2%", "3%", "5%", "7%"],
    "options_hi": ["2%", "3%", "5%", "7%"],
    "answer_en": "5%",
    "answer_hi": "5%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which sophisticated optimization algorithm minimizes track maintenance costs while ensuring safety constraints?",
    "question_hi": "सुरक्षा बाधाओं को सुनिश्चित करते हुए ट्रैक रखरखाव लागत को कम करने वाला परिष्कृत अनुकूलन एल्गोरिदम कौन सा है?",
    "options_en": ["Stochastic dynamic programming", "Multi-objective genetic algorithm", "Particle swarm optimization", "All of these"],
    "options_hi": ["स्टोकैस्टिक डायनामिक प्रोग्रामिंग", "मल्टी-ऑब्जेक्टिव जेनेटिक एल्गोरिदम", "पार्टिकल स्वार्म ऑप्टिमाइजेशन", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the critical hydrogen concentration in rail steel that leads to hydrogen-induced cracking?",
    "question_hi": "रेल स्टील में क्रिटिकल हाइड्रोजन सांद्रता क्या है जो हाइड्रोजन-प्रेरित क्रैकिंग की ओर ले जाती है?",
    "options_en": ["0.5-1.0 ppm", "1.0-2.0 ppm", "2.0-3.0 ppm", "3.0-5.0 ppm"],
    "options_hi": ["0.5-1.0 ppm", "1.0-2.0 ppm", "2.0-3.0 ppm", "3.0-5.0 ppm"],
    "answer_en": "1.0-2.0 ppm",
    "answer_hi": "1.0-2.0 ppm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which advanced sensor technology enables real-time monitoring of rail stress using distributed fiber optics?",
    "question_hi": "कौन सी उन्नत सेंसर तकनीक वितरित ऑप्टिक फाइबर का उपयोग करके रेल तनाव की रीयल-टाइम निगरानी सक्षम करती है?",
    "options_en": ["Brillouin Optical Time Domain Analysis (BOTDA)", "Fiber Bragg Grating (FBG)", "Raman scattering", "All of these"],
    "options_hi": ["ब्रिलुइन ऑप्टिकल टाइम डोमेन एनालिसिस (BOTDA)", "फाइबर ब्रैग ग्रेटिंग (FBG)", "रमन स्कैटरिंग", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the minimum required fracture energy for rail steel in drop-weight tear tests?",
    "question_hi": "ड्रॉप-वेट टीयर टेस्ट में रेल स्टील के लिए आवश्यक न्यूनतम फ्रैक्चर एनर्जी क्या है?",
    "options_en": ["40 J", "60 J", "80 J", "100 J"],
    "options_hi": ["40 जे", "60 जे", "80 जे", "100 जे"],
    "answer_en": "80 J",
    "answer_hi": "80 जे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which sophisticated computational method predicts rail corrugation considering non-linear material behavior?",
    "question_hi": "गैर-रैखिक सामग्री व्यवहार पर विचार करते हुए रेल कॉर्रुगेशन की भविष्यवाणी करने वाली परिष्कृत कम्प्यूटेशनल विधि कौन सी है?",
    "options_en": ["Coupled finite element-boundary element method", "Spectral element method", "Isogeometric analysis", "All of these"],
    "options_hi": ["युग्मित फाइनाइट एलिमेंट-बाउंड्री एलिमेंट मेथड", "स्पेक्ट्रल एलिमेंट मेथड", "आइसोज्योमेट्रिक एनालिसिस", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the critical temperature for tempered martensite embrittlement in rail steel?",
    "question_hi": "रेल स्टील में टेम्पर्ड मार्टेंसाइट एम्ब्रिटलमेंट के लिए क्रिटिकल तापमान क्या है?",
    "options_en": ["250-350°C", "350-450°C", "450-550°C", "550-650°C"],
    "options_hi": ["250-350°C", "350-450°C", "450-550°C", "550-650°C"],
    "answer_en": "350-450°C",
    "answer_hi": "350-450°C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which advanced braking system utilizes supercapacitors for regenerative energy storage in metros?",
    "question_hi": "कौन सी उन्नत ब्रेकिंग सिस्टम मेट्रो में पुनर्योजी ऊर्जा भंडारण के लिए सुपरकैपेसिटर का उपयोग करती है?",
    "options_en": ["Hybrid braking with supercapacitor banks", "Electro-mechanical braking", "Hydraulic energy recovery", "Pneumatic regenerative braking"],
    "options_hi": ["सुपरकैपेसिटर बैंक के साथ हाइब्रिड ब्रेकिंग", "इलेक्ट्रो-मैकेनिकल ब्रेकिंग", "हाइड्रोलिक ऊर्जा पुनर्प्राप्ति", "वायवीय पुनर्योजी ब्रेकिंग"],
    "answer_en": "Hybrid braking with supercapacitor banks",
    "answer_hi": "सुपरकैपेसिटर बैंक के साथ हाइब्रिड ब्रेकिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the minimum required compressive residual stress in rail head after premium heat treatment?",
    "question_hi": "प्रीमियम हीट ट्रीटमेंट के बाद रेल हेड में आवश्यक न्यूनतम संपीड़न अवशिष्ट तनाव क्या है?",
    "options_en": ["-200 MPa", "-300 MPa", "-400 MPa", "-500 MPa"],
    "options_hi": ["-200 एमपीए", "-300 एमपीए", "-400 एमपीए", "-500 एमपीए"],
    "answer_en": "-400 MPa",
    "answer_hi": "-400 एमपीए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which sophisticated control algorithm prevents hunting instability in high-speed trains?",
    "question_hi": "हाई-स्पीड ट्रेनों में हंटिंग अस्थिरता को रोकने वाला परिष्कृत नियंत्रण एल्गोरिदम कौन सा है?",
    "options_en": ["Active suspension with LQR control", "Adaptive neuro-fuzzy control", "Sliding mode control", "All of these"],
    "options_hi": ["एलक्यूआर नियंत्रण के साथ सक्रिय निलंबन", "अनुकूली न्यूरो-फजी नियंत्रण", "स्लाइडिंग मोड नियंत्रण", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the critical strain rate for dynamic recrystallization in rail steel during hot rolling?",
    "question_hi": "हॉट रोलिंग के दौरान रेल स्टील में गतिशील पुनर्क्रिस्टलीकरण के लिए क्रिटिकल स्ट्रेन रेट क्या है?",
    "options_en": ["0.1-1.0 s⁻¹", "1.0-10 s⁻¹", "10-100 s⁻¹", "100-1000 s⁻¹"],
    "options_hi": ["0.1-1.0 s⁻¹", "1.0-10 s⁻¹", "10-100 s⁻¹", "100-1000 s⁻¹"],
    "answer_en": "1.0-10 s⁻¹",
    "answer_hi": "1.0-10 s⁻¹",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which advanced non-destructive testing method detects early-stage rolling contact fatigue?",
    "question_hi": "शुरुआती चरण के रोलिंग कॉन्टैक्ट फटीग का पता लगाने वाली उन्नत गैर-विनाशकारी परीक्षण विधि कौन सी है?",
    "options_en": ["Non-linear ultrasonic testing", "Thermographic testing", "Magnetic Barkhausen noise", "All of these"],
    "options_hi": ["गैर-रैखिक अल्ट्रासोनिक परीक्षण", "थर्मोग्राफिक परीक्षण", "चुंबकीय बार्कहौसन शोर", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the minimum required fracture appearance transition temperature (FATT) for Arctic-grade rail steel?",
    "question_hi": "आर्कटिक-ग्रेड रेल स्टील के लिए आवश्यक न्यूनतम फ्रैक्चर एपीयरेंस ट्रांजिशन तापमान (FATT) क्या है?",
    "options_en": ["-20°C", "-40°C", "-60°C", "-80°C"],
    "options_hi": ["-20°C", "-40°C", "-60°C", "-80°C"],
    "answer_en": "-60°C",
    "answer_hi": "-60°C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which sophisticated numerical method solves wheel-rail contact with consideration of third-body layers?",
    "question_hi": "तीसरे-पक्ष परतों पर विचार करते हुए व्हील-रेल संपर्क को हल करने वाली परिष्कृत संख्यात्मक विधि कौन सी है?",
    "options_en": ["Discrete element method with cohesive zones", "Coupled CFD-DEM approach", "Multi-scale finite element method", "All of these"],
    "options_hi": ["सामंजस्यपूर्ण क्षेत्रों के साथ असतत तत्व विधि", "युग्मित सीएफडी-डीईएम दृष्टिकोण", "बहु-पैमाने परिमित तत्व विधि", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the critical oxygen content in rail steel that affects hot ductility during continuous casting?",
    "question_hi": "रेल स्टील में क्रिटिकल ऑक्सीजन सामग्री क्या है जो निरंतर कास्टिंग के दौरान हॉट डक्टिलिटी को प्रभावित करती है?",
    "options_en": ["10-20 ppm", "20-30 ppm", "30-50 ppm", "50-100 ppm"],
    "options_hi": ["10-20 ppm", "20-30 ppm", "30-50 ppm", "50-100 ppm"],
    "answer_en": "20-30 ppm",
    "answer_hi": "20-30 ppm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which advanced signal processing technique extracts bearing fault features in presence of strong background noise?",
    "question_hi": "मजबूत पृष्ठभूमि शोर की उपस्थिति में बेयरिंग दोष सुविधाओं को निकालने वाली उन्नत सिग्नल प्रोसेसिंग तकनीक कौन सी है?",
    "options_en": ["Cyclostationary analysis", "Blind source separation", "Sparse representation", "All of these"],
    "options_hi": ["चक्रीय स्थिर विश्लेषण", "ब्लाइंड सोर्स सेपरेशन", "विरल प्रतिनिधित्व", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the minimum required Charpy shelf energy for Grade 1280 rails in transverse direction?",
    "question_hi": "ट्रांसवर्स दिशा में ग्रेड 1280 रेल के लिए आवश्यक न्यूनतम चार्पी शेल्फ एनर्जी क्या है?",
    "options_en": ["12 J", "18 J", "24 J", "30 J"],
    "options_hi": ["12 जे", "18 जे", "24 जे", "30 जे"],
    "answer_en": "18 J",
    "answer_hi": "18 जे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which sophisticated optimization method designs railway switches for minimum wear and maximum speed?",
    "question_hi": "न्यूनतम वियर और अधिकतम गति के लिए रेलवे स्विच डिजाइन करने वाली परिष्कृत अनुकूलन विधि कौन सी है?",
    "options_en": ["Topology optimization", "Shape optimization", "Multi-disciplinary optimization", "All of these"],
    "options_hi": ["टोपोलॉजी ऑप्टिमाइजेशन", "शेप ऑप्टिमाइजेशन", "बहु-विषयक अनुकूलन", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the critical cooling rate to obtain bainitic microstructure in rail steel heat treatment?",
    "question_hi": "रेल स्टील हीट ट्रीटमेंट में बेनिटिक माइक्रोस्ट्रक्चर प्राप्त करने के लिए क्रिटिकल कूलिंग रेट क्या है?",
    "options_en": ["1-5°C/s", "5-10°C/s", "10-20°C/s", "20-30°C/s"],
    "options_hi": ["1-5°C/s", "5-10°C/s", "10-20°C/s", "20-30°C/s"],
    "answer_en": "5-10°C/s",
    "answer_hi": "5-10°C/s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which advanced composite damping material reduces vibration in high-speed train carbodies?",
    "question_hi": "कौन सी उन्नत कम्पोजिट डैम्पिंग सामग्री हाई-स्पीड ट्रेन कारबॉडी में कंपन को कम करती है?",
    "options_en": ["Viscoelastic constrained layer damping", "Particle damping composites", "Shape memory alloy dampers", "All of these"],
    "options_hi": ["विस्कोइलास्टिक संवृत्त परत अवमंदन", "कण अवमंदन कम्पोजिट", "आकार स्मृति मिश्र धातु डैंपर्स", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the minimum required strain hardening exponent (n-value) for deep drawable rail steel?",
    "question_hi": "डीप ड्रॉएबल रेल स्टील के लिए आवश्यक न्यूनतम स्ट्रेन हार्डनिंग एक्सपोनेंट (n-वैल्यू) क्या है?",
    "options_en": ["n = 0.10", "n = 0.15", "n = 0.20", "n = 0.25"],
    "options_hi": ["n = 0.10", "n = 0.15", "n = 0.20", "n = 0.25"],
    "answer_en": "n = 0.20",
    "answer_hi": "n = 0.20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which sophisticated computational fluid dynamics model predicts crosswind effects on high-speed trains?",
    "question_hi": "हाई-स्पीड ट्रेनों पर क्रॉसविंड प्रभावों की भविष्यवाणी करने वाला परिष्कृत कम्प्यूटेशनल फ्लूइड डायनामिक्स मॉडल कौन सा है?",
    "options_en": ["Detached Eddy Simulation (DES)", "Large Eddy Simulation (LES)", "Reynolds Stress Model (RSM)", "All of these"],
    "options_hi": ["डिटैच्ड एडी सिमुलेशन (DES)", "लार्ज एडी सिमुलेशन (LES)", "रेनॉल्ड्स स्ट्रेस मॉडल (RSM)", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the critical inclusion aspect ratio that initiates fatigue cracks in rail steel?",
    "question_hi": "रेल स्टील में फटीग क्रैक्स शुरू करने वाला क्रिटिकल इनक्लूजन एस्पेक्ट रेशियो क्या है?",
    "options_en": ["2:1", "3:1", "4:1", "5:1"],
    "options_hi": ["2:1", "3:1", "4:1", "5:1"],
    "answer_en": "3:1",
    "answer_hi": "3:1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which advanced sensing technology monitors rail stress using magneto-elastic effects?",
    "question_hi": "चुंबकीय-लोचदार प्रभावों का उपयोग करके रेल तनाव की निगरानी करने वाली उन्नत संवेदन तकनीक कौन सी है?",
    "options_en": ["Magneto-elastic torque sensors", "Barkhausen noise analysis", "Magneto-acoustic emission", "All of these"],
    "options_hi": ["चुंबकीय-लोचदार टॉर्क सेंसर्स", "बार्कहौसन शोर विश्लेषण", "चुंबकीय-ध्वनिक उत्सर्जन", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the minimum required fracture toughness for rail welds in arctic conditions?",
    "question_hi": "आर्कटिक परिस्थितियों में रेल वेल्ड के लिए आवश्यक न्यूनतम फ्रैक्चर टफनेस क्या है?",
    "options_en": ["40 MPa√m at -40°C", "50 MPa√m at -40°C", "60 MPa√m at -40°C", "70 MPa√m at -40°C"],
    "options_hi": ["-40°C पर 40 MPa√m", "-40°C पर 50 MPa√m", "-40°C पर 60 MPa√m", "-40°C पर 70 MPa√m"],
    "answer_en": "50 MPa√m at -40°C",
    "answer_hi": "-40°C पर 50 MPa√m",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which sophisticated finite element formulation handles large deformations in rubber railway components?",
    "question_hi": "रबड़ रेलवे घटकों में बड़े विरूपण को संभालने वाला परिष्कृत फाइनाइट एलिमेंट फॉर्मुलेशन कौन सा है?",
    "options_en": ["Updated Lagrangian formulation", "Total Lagrangian formulation", "Corotational formulation", "All of these"],
    "options_hi": ["अपडेटेड लैग्रेंजियन फॉर्मुलेशन", "टोटल लैग्रेंजियन फॉर्मुलेशन", "कोरोटेशनल फॉर्मुलेशन", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the critical sulfur content in rail steel that affects hot workability?",
    "question_hi": "रेल स्टील में क्रिटिकल सल्फर सामग्री क्या है जो हॉट वर्केबिलिटी को प्रभावित करती है?",
    "options_en": ["0.005% max", "0.010% max", "0.015% max", "0.020% max"],
    "options_hi": ["0.005% अधिकतम", "0.010% अधिकतम", "0.015% अधिकतम", "0.020% अधिकतम"],
    "answer_en": "0.010% max",
    "answer_hi": "0.010% अधिकतम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which advanced control system prevents wheel slip in high-adhesion locomotives?",
    "question_hi": "उच्च आसंजन लोकोमोटिव में व्हील स्लिप को रोकने वाली उन्नत नियंत्रण प्रणाली कौन सी है?",
    "options_en": ["Adhesion control with creep force estimation", "Wheelslip protection using Kalman filtering", "Adaptive traction control", "All of these"],
    "options_hi": ["क्रीप बल अनुमान के साथ आसंजन नियंत्रण", "कलमन फ़िल्टरिंग का उपयोग करके व्हीलस्लिप संरक्षण", "अनुकूली कर्षण नियंत्रण", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the minimum required J-R curve slope for stable crack growth in rail steel?",
    "question_hi": "रेल स्टील में स्थिर क्रैक ग्रोथ के लिए आवश्यक न्यूनतम जे-आर कर्व स्लोप क्या है?",
    "options_en": ["dJ/da = 50 MPa", "dJ/da = 100 MPa", "dJ/da = 150 MPa", "dJ/da = 200 MPa"],
    "options_hi": ["dJ/da = 50 MPa", "dJ/da = 100 MPa", "dJ/da = 150 MPa", "dJ/da = 200 MPa"],
    "answer_en": "dJ/da = 100 MPa",
    "answer_hi": "dJ/da = 100 MPa",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which sophisticated algorithm optimizes railway network capacity using graph theory?",
    "question_hi": "ग्राफ थ्योरी का उपयोग करके रेलवे नेटवर्क क्षमता को अनुकूलित करने वाला परिष्कृत एल्गोरिदम कौन सा है?",
    "options_en": ["Maximum flow algorithms", "Minimum cut algorithms", "Coloring algorithms for scheduling", "All of these"],
    "options_hi": ["अधिकतम प्रवाह एल्गोरिदम", "न्यूनतम कट एल्गोरिदम", "शेड्यूलिंग के लिए रंग एल्गोरिदम", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the critical phase transformation temperature for obtaining ultrafine grained rail steel?",
    "question_hi": "अल्ट्राफाइन अनाज वाली रेल स्टील प्राप्त करने के लिए क्रिटिकल फेज ट्रांसफॉर्मेशन तापमान क्या है?",
    "options_en": ["Ar3 = 750-800°C", "Ar3 = 800-850°C", "Ar3 = 850-900°C", "Ar3 = 900-950°C"],
    "options_hi": ["Ar3 = 750-800°C", "Ar3 = 800-850°C", "Ar3 = 850-900°C", "Ar3 = 900-950°C"],
    "answer_en": "Ar3 = 750-800°C",
    "answer_hi": "Ar3 = 750-800°C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which advanced tribological coating reduces wheel-rail wear in curves?",
    "question_hi": "कौन सी उन्नत ट्राइबोलॉजिकल कोटिंग वक्रों में व्हील-रेल वियर को कम करती है?",
    "options_en": ["Laser-cladded Stellite coatings", "Plasma-sprayed ceramic coatings", "Physical vapor deposition coatings", "All of these"],
    "options_hi": ["लेजर-क्लैडेड स्टेलाइट कोटिंग्स", "प्लाज्मा-स्प्रेयड सिरेमिक कोटिंग्स", "भौतिक वाष्प जमाव कोटिंग्स", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the minimum required endurance limit ratio (σe/σu) for railway spring steel?",
    "question_hi": "रेलवे स्प्रिंग स्टील के लिए आवश्यक न्यूनतम एनड्योरेंस लिमिट अनुपात (σe/σu) क्या है?",
    "options_en": ["0.35", "0.45", "0.55", "0.65"],
    "options_hi": ["0.35", "0.45", "0.55", "0.65"],
    "answer_en": "0.45",
    "answer_hi": "0.45",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which sophisticated machine learning technique predicts remaining useful life of railway components?",
    "question_hi": "रेलवे घटकों के शेष उपयोगी जीवन की भविष्यवाणी करने वाली परिष्कृत मशीन लर्निंग तकनीक कौन सी है?",
    "options_en": ["Recurrent Neural Networks (RNN)", "Long Short-Term Memory (LSTM)", "Gaussian Process Regression", "All of these"],
    "options_hi": ["आवर्ती तंत्रिका नेटवर्क (RNN)", "लॉन्ग शॉर्ट-टर्म मेमोरी (LSTM)", "गाउसियन प्रक्रिया प्रतिगमन", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  }
];

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