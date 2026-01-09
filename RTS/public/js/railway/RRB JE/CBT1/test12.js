const questions = [
  {
    "num": 1,
    "question_en": "What is the fourth Maxwell's equation in differential form? (∇·E = ρ/ε₀, ∇·B = 0, ∇×E = -∂B/∂t, ∇×B = μ₀J + μ₀ε₀∂E/∂t)",
    "question_hi": "चौथा मैक्सवेल समीकरण अवकल रूप में क्या है? (∇·E = ρ/ε₀, ∇·B = 0, ∇×E = -∂B/∂t, ∇×B = μ₀J + μ₀ε₀∂E/∂t)",
    "options_en": ["∇·E = ρ/ε₀", "∇·B = 0", "∇×E = -∂B/∂t", "∇×B = μ₀J + μ₀ε₀∂E/∂t"],
    "options_hi": ["∇·E = ρ/ε₀", "∇·B = 0", "∇×E = -∂B/∂t", "∇×B = μ₀J + μ₀ε₀∂E/∂t"],
    "answer_en": "∇×B = μ₀J + μ₀ε₀∂E/∂t",
    "answer_hi": "∇×B = μ₀J + μ₀ε₀∂E/∂t",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the third quantum number? (Principal, Azimuthal, Magnetic, Spin)",
    "question_hi": "तीसरी क्वांटम संख्या कौन सी है? (प्रधान, अज़ीमुथल, चुंबकीय, स्पिन)",
    "options_en": ["Principal", "Azimuthal", "Magnetic", "Spin"],
    "options_hi": ["प्रधान", "अज़ीमुथल", "चुंबकीय", "स्पिन"],
    "answer_en": "Magnetic",
    "answer_hi": "चुंबकीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the fourth layer of TCP/IP model? (Application, Transport, Internet, Network Access)",
    "question_hi": "TCP/IP मॉडल की चौथी परत कौन सी है? (एप्लिकेशन, ट्रांसपोर्ट, इंटरनेट, नेटवर्क एक्सेस)",
    "options_en": ["Application", "Transport", "Internet", "Network Access"],
    "options_hi": ["एप्लिकेशन", "ट्रांसपोर्ट", "इंटरनेट", "नेटवर्क एक्सेस"],
    "answer_en": "Network Access",
    "answer_hi": "नेटवर्क एक्सेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the third stage in Carnot cycle? (Isothermal Expansion, Adiabatic Expansion, Isothermal Compression, Adiabatic Compression)",
    "question_hi": "कार्नोट चक्र में तीसरा चरण कौन सा है? (समतापीय प्रसार, रुद्धोष्म प्रसार, समतापीय संपीडन, रुद्धोष्म संपीडन)",
    "options_en": ["Isothermal Expansion", "Adiabatic Expansion", "Isothermal Compression", "Adiabatic Compression"],
    "options_hi": ["समतापीय प्रसार", "रुद्धोष्म प्रसार", "समतापीय संपीडन", "रुद्धोष्म संपीडन"],
    "answer_en": "Isothermal Compression",
    "answer_hi": "समतापीय संपीडन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the fourth type of welding? (Arc, Gas, Resistance, Solid-State, Thermit)",
    "question_hi": "वेल्डिंग का चौथा प्रकार कौन सा है? (आर्क, गैस, प्रतिरोध, ठोस-अवस्था, थर्मिट)",
    "options_en": ["Gas", "Resistance", "Solid-State", "Thermit"],
    "options_hi": ["गैस", "प्रतिरोध", "ठोस-अवस्था", "थर्मिट"],
    "answer_en": "Solid-State",
    "answer_hi": "ठोस-अवस्था",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the third programming language generation? (Machine Language, Assembly Language, High-Level Language, 4GL, 5GL)",
    "question_hi": "तीसरी प्रोग्रामिंग भाषा पीढ़ी कौन सी है? (मशीन भाषा, असेंबली भाषा, उच्च-स्तरीय भाषा, 4GL, 5GL)",
    "options_en": ["Machine Language", "Assembly Language", "High-Level Language", "4GL"],
    "options_hi": ["मशीन भाषा", "असेंबली भाषा", "उच्च-स्तरीय भाषा", "4GL"],
    "answer_en": "High-Level Language",
    "answer_hi": "उच्च-स्तरीय भाषा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the fourth step in software development lifecycle? (Planning, Analysis, Design, Implementation, Testing, Deployment)",
    "question_hi": "सॉफ्टवेयर विकास जीवनचक्र में चौथा चरण कौन सा है? (योजना, विश्लेषण, डिजाइन, कार्यान्वयन, परीक्षण, तैनाती)",
    "options_en": ["Analysis", "Design", "Implementation", "Testing"],
    "options_hi": ["विश्लेषण", "डिजाइन", "कार्यान्वयन", "परीक्षण"],
    "answer_en": "Implementation",
    "answer_hi": "कार्यान्वयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the third law of robotics according to Isaac Asimov? (First, Second, Third, Zeroth)",
    "question_hi": "आइजैक असिमोव के अनुसार रोबोटिक्स का तीसरा नियम कौन सा है? (प्रथम, द्वितीय, तृतीय, शून्य)",
    "options_en": ["First", "Second", "Third", "Zeroth"],
    "options_hi": ["प्रथम", "द्वितीय", "तृतीय", "शून्य"],
    "answer_en": "Third",
    "answer_hi": "तृतीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the fourth fundamental theorem of calculus? (First, Second, Third, Fourth)",
    "question_hi": "कैलकुलस का चौथा मौलिक प्रमेय कौन सा है? (प्रथम, द्वितीय, तृतीय, चतुर्थ)",
    "options_en": ["First Fundamental Theorem", "Second Fundamental Theorem", "Third Fundamental Theorem", "Fourth Fundamental Theorem"],
    "options_hi": ["प्रथम मौलिक प्रमेय", "द्वितीय मौलिक प्रमेय", "तृतीय मौलिक प्रमेय", "चतुर्थ मौलिक प्रमेय"],
    "answer_en": "Third Fundamental Theorem",
    "answer_hi": "तृतीय मौलिक प्रमेय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the third type of semiconductor? (Intrinsic, Extrinsic, P-type, N-type)",
    "question_hi": "सेमीकंडक्टर का तीसरा प्रकार कौन सा है? (अंतर्जात, बहिर्जात, P-प्रकार, N-प्रकार)",
    "options_en": ["Intrinsic", "Extrinsic", "P-type", "N-type"],
    "options_hi": ["अंतर्जात", "बहिर्जात", "P-प्रकार", "N-प्रकार"],
    "answer_en": "P-type",
    "answer_hi": "P-प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the fourth state variable in thermodynamics? (Pressure, Volume, Temperature, Internal Energy, Entropy)",
    "question_hi": "ऊष्मागतिकी में चौथा अवस्था चर कौन सा है? (दाब, आयतन, तापमान, आंतरिक ऊर्जा, एन्ट्रॉपी)",
    "options_en": ["Volume", "Temperature", "Internal Energy", "Entropy"],
    "options_hi": ["आयतन", "तापमान", "आंतरिक ऊर्जा", "एन्ट्रॉपी"],
    "answer_en": "Internal Energy",
    "answer_hi": "आंतरिक ऊर्जा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the third approximation in diode modeling? (Ideal, Piecewise Linear, Constant Voltage Drop, Exponential)",
    "question_hi": "डायोड मॉडलिंग में तीसरा सन्निकटन कौन सा है? (आदर्श, टुकड़ावार रैखिक, स्थिर वोल्टेज ड्रॉप, घातीय)",
    "options_en": ["Ideal", "Piecewise Linear", "Constant Voltage Drop", "Exponential"],
    "options_hi": ["आदर्श", "टुकड़ावार रैखिक", "स्थिर वोल्टेज ड्रॉप", "घातीय"],
    "answer_en": "Constant Voltage Drop",
    "answer_hi": "स्थिर वोल्टेज ड्रॉप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the fourth basic logic gate? (AND, OR, NOT, XOR, NAND)",
    "question_hi": "चौथा मूल लॉजिक गेट कौन सा है? (AND, OR, NOT, XOR, NAND)",
    "options_en": ["AND", "OR", "NOT", "XOR"],
    "options_hi": ["AND", "OR", "NOT", "XOR"],
    "answer_en": "XOR",
    "answer_hi": "XOR",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the third type of machine learning? (Supervised, Unsupervised, Reinforcement, Semi-supervised)",
    "question_hi": "मशीन लर्निंग का तीसरा प्रकार कौन सा है? (सुपरवाइज्ड, अनसुपरवाइज्ड, रीइन्फोर्समेंट, सेमी-सुपरवाइज्ड)",
    "options_en": ["Supervised", "Unsupervised", "Reinforcement", "Semi-supervised"],
    "options_hi": ["सुपरवाइज्ड", "अनसुपरवाइज्ड", "रीइन्फोर्समेंट", "सेमी-सुपरवाइज्ड"],
    "answer_en": "Reinforcement",
    "answer_hi": "रीइन्फोर्समेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the fourth stage in the database development lifecycle? (Planning, Analysis, Design, Implementation, Testing, Maintenance)",
    "question_hi": "डेटाबेस विकास जीवनचक्र में चौथा चरण कौन सा है? (योजना, विश्लेषण, डिजाइन, कार्यान्वयन, परीक्षण, रखरखाव)",
    "options_en": ["Analysis", "Design", "Implementation", "Testing"],
    "options_hi": ["विश्लेषण", "डिजाइन", "कार्यान्वयन", "परीक्षण"],
    "answer_en": "Implementation",
    "answer_hi": "कार्यान्वयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the third level in Maslow's hierarchy of needs? (Physiological, Safety, Love/Belonging, Esteem, Self-actualization)",
    "question_hi": "मास्लो की आवश्यकताओं के पदानुक्रम में तीसरा स्तर कौन सा है? (शारीरिक, सुरक्षा, प्यार/संबंध, सम्मान, आत्म-साक्षात्कार)",
    "options_en": ["Physiological", "Safety", "Love/Belonging", "Esteem"],
    "options_hi": ["शारीरिक", "सुरक्षा", "प्यार/संबंध", "सम्मान"],
    "answer_en": "Love/Belonging",
    "answer_hi": "प्यार/संबंध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the fourth generation of wireless technology? (1G, 2G, 3G, 4G, 5G)",
    "question_hi": "वायरलेस प्रौद्योगिकी की चौथी पीढ़ी कौन सी है? (1G, 2G, 3G, 4G, 5G)",
    "options_en": ["2G", "3G", "4G", "5G"],
    "options_hi": ["2G", "3G", "4G", "5G"],
    "answer_en": "4G",
    "answer_hi": "4G",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the third step in the scientific computing process? (Problem Definition, Mathematical Modeling, Numerical Solution, Visualization, Validation)",
    "question_hi": "वैज्ञानिक कंप्यूटिंग प्रक्रिया में तीसरा चरण कौन सा है? (समस्या परिभाषा, गणितीय मॉडलिंग, संख्यात्मक समाधान, विज़ुअलाइज़ेशन, सत्यापन)",
    "options_en": ["Problem Definition", "Mathematical Modeling", "Numerical Solution", "Visualization"],
    "options_hi": ["समस्या परिभाषा", "गणितीय मॉडलिंग", "संख्यात्मक समाधान", "विज़ुअलाइज़ेशन"],
    "answer_en": "Numerical Solution",
    "answer_hi": "संख्यात्मक समाधान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the fourth dimension in spacetime? (Length, Width, Height, Time)",
    "question_hi": "स्पेसटाइम में चौथा आयाम कौन सा है? (लंबाई, चौड़ाई, ऊँचाई, समय)",
    "options_en": ["Width", "Height", "Time", "Temperature"],
    "options_hi": ["चौड़ाई", "ऊँचाई", "समय", "तापमान"],
    "answer_en": "Time",
    "answer_hi": "समय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the third type of cloud computing service? (IaaS, PaaS, SaaS, FaaS)",
    "question_hi": "क्लाउड कंप्यूटिंग सेवा का तीसरा प्रकार कौन सा है? (IaaS, PaaS, SaaS, FaaS)",
    "options_en": ["IaaS", "PaaS", "SaaS", "FaaS"],
    "options_hi": ["IaaS", "PaaS", "SaaS", "FaaS"],
    "answer_en": "SaaS",
    "answer_hi": "SaaS",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the fourth step in the problem-solving methodology? (Understand, Plan, Implement, Review, Document)",
    "question_hi": "समस्या-समाधान पद्धति में चौथा चरण कौन सा है? (समझ, योजना, कार्यान्वयन, समीक्षा, दस्तावेज़ीकरण)",
    "options_en": ["Plan", "Implement", "Review", "Document"],
    "options_hi": ["योजना", "कार्यान्वयन", "समीक्षा", "दस्तावेज़ीकरण"],
    "answer_en": "Review",
    "answer_hi": "समीक्षा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the third law of thermodynamics? (Zeroth, First, Second, Third)",
    "question_hi": "ऊष्मागतिकी का तीसरा नियम कौन सा है? (शून्य, प्रथम, द्वितीय, तृतीय)",
    "options_en": ["First", "Second", "Third", "Fourth"],
    "options_hi": ["प्रथम", "द्वितीय", "तृतीय", "चतुर्थ"],
    "answer_en": "Third",
    "answer_hi": "तृतीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the fourth step in the engineering design process? (Define, Research, Ideate, Prototype, Test, Implement)",
    "question_hi": "इंजीनियरिंग डिजाइन प्रक्रिया में चौथा चरण कौन सा है? (परिभाषित, शोध, विचार, प्रोटोटाइप, परीक्षण, कार्यान्वयन)",
    "options_en": ["Research", "Ideate", "Prototype", "Test"],
    "options_hi": ["शोध", "विचार", "प्रोटोटाइप", "परीक्षण"],
    "answer_en": "Prototype",
    "answer_hi": "प्रोटोटाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the third type of AI? (Narrow AI, General AI, Super AI, Reactive AI)",
    "question_hi": "AI का तीसरा प्रकार कौन सा है? (संकीर्ण AI, सामान्य AI, सुपर AI, प्रतिक्रियाशील AI)",
    "options_en": ["Narrow AI", "General AI", "Super AI", "Reactive AI"],
    "options_hi": ["संकीर्ण AI", "सामान्य AI", "सुपर AI", "प्रतिक्रियाशील AI"],
    "answer_en": "Super AI",
    "answer_hi": "सुपर AI",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the fourth fundamental force? (Gravity, Electromagnetic, Strong Nuclear, Weak Nuclear)",
    "question_hi": "चौथा मौलिक बल कौन सा है? (गुरुत्वाकर्षण, विद्युतचुंबकीय, प्रबल नाभिकीय, दुर्बल नाभिकीय)",
    "options_en": ["Electromagnetic", "Strong Nuclear", "Weak Nuclear", "Electroweak"],
    "options_hi": ["विद्युतचुंबकीय", "प्रबल नाभिकीय", "दुर्बल नाभिकीय", "विद्युतदुर्बल"],
    "answer_en": "Weak Nuclear",
    "answer_hi": "दुर्बल नाभिकीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the third type of material stress? (Tensile, Compressive, Shear, Torsional)",
    "question_hi": "सामग्री प्रतिबल का तीसरा प्रकार कौन सा है? (तन्य, संपीड़न, कर्तन, मरोड़)",
    "options_en": ["Tensile", "Compressive", "Shear", "Torsional"],
    "options_hi": ["तन्य", "संपीड़न", "कर्तन", "मरोड़"],
    "answer_en": "Shear",
    "answer_hi": "कर्तन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the fourth type of gear? (Spur, Helical, Bevel, Worm, Planetary)",
    "question_hi": "गियर का चौथा प्रकार कौन सा है? (स्पर, हेलिकल, बेवल, वर्म, प्लेनेटरी)",
    "options_en": ["Helical", "Bevel", "Worm", "Planetary"],
    "options_hi": ["हेलिकल", "बेवल", "वर्म", "प्लेनेटरी"],
    "answer_en": "Worm",
    "answer_hi": "वर्म",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the third step in the decision-making process? (Identify Problem, Gather Information, Evaluate Alternatives, Choose Alternative, Implement, Review)",
    "question_hi": "निर्णय लेने की प्रक्रिया में तीसरा चरण कौन सा है? (समस्या पहचान, जानकारी एकत्र करना, विकल्पों का मूल्यांकन, विकल्प चुनना, कार्यान्वयन, समीक्षा)",
    "options_en": ["Gather Information", "Evaluate Alternatives", "Choose Alternative", "Implement"],
    "options_hi": ["जानकारी एकत्र करना", "विकल्पों का मूल्यांकन", "विकल्प चुनना", "कार्यान्वयन"],
    "answer_en": "Evaluate Alternatives",
    "answer_hi": "विकल्पों का मूल्यांकन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the fourth type of database model? (Hierarchical, Network, Relational, Object-oriented, NoSQL)",
    "question_hi": "डेटाबेस मॉडल का चौथा प्रकार कौन सा है? (पदानुक्रमित, नेटवर्क, संबंधपरक, वस्तु-उन्मुख, NoSQL)",
    "options_en": ["Network", "Relational", "Object-oriented", "NoSQL"],
    "options_hi": ["नेटवर्क", "संबंधपरक", "वस्तु-उन्मुख", "NoSQL"],
    "answer_en": "Object-oriented",
    "answer_hi": "वस्तु-उन्मुख",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the third type of computer memory? (Register, Cache, RAM, ROM, HDD)",
    "question_hi": "कंप्यूटर मेमोरी का तीसरा प्रकार कौन सा है? (रजिस्टर, कैश, RAM, ROM, HDD)",
    "options_en": ["Register", "Cache", "RAM", "ROM"],
    "options_hi": ["रजिस्टर", "कैश", "RAM", "ROM"],
    "answer_en": "RAM",
    "answer_hi": "RAM",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the fourth stage in the product development process? (Ideation, Concept Development, Design, Prototyping, Testing, Launch)",
    "question_hi": "उत्पाद विकास प्रक्रिया में चौथा चरण कौन सा है? (विचार, अवधारणा विकास, डिजाइन, प्रोटोटाइपिंग, परीक्षण, लॉन्च)",
    "options_en": ["Concept Development", "Design", "Prototyping", "Testing"],
    "options_hi": ["अवधारणा विकास", "डिजाइन", "प्रोटोटाइपिंग", "परीक्षण"],
    "answer_en": "Prototyping",
    "answer_hi": "प्रोटोटाइपिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the third type of beam support? (Fixed, Pinned, Roller, Simply Supported)",
    "question_hi": "बीम समर्थन का तीसरा प्रकार कौन सा है? (स्थिर, पिन्ड, रोलर, साधारण रूप से समर्थित)",
    "options_en": ["Fixed", "Pinned", "Roller", "Simply Supported"],
    "options_hi": ["स्थिर", "पिन्ड", "रोलर", "साधारण रूप से समर्थित"],
    "answer_en": "Roller",
    "answer_hi": "रोलर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the fourth step in the research methodology? (Problem Identification, Literature Review, Research Design, Data Collection, Analysis, Conclusion)",
    "question_hi": "अनुसंधान पद्धति में चौथा चरण कौन सा है? (समस्या पहचान, साहित्य समीक्षा, शोध डिजाइन, डेटा संग्रह, विश्लेषण, निष्कर्ष)",
    "options_en": ["Literature Review", "Research Design", "Data Collection", "Analysis"],
    "options_hi": ["साहित्य समीक्षा", "शोध डिजाइन", "डेटा संग्रह", "विश्लेषण"],
    "answer_en": "Data Collection",
    "answer_hi": "डेटा संग्रह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the third type of fluid flow? (Laminar, Turbulent, Transitional, Compressible)",
    "question_hi": "द्रव प्रवाह का तीसरा प्रकार कौन सा है? (स्तरीय, अशांत, संक्रमणकालीन, संपीड्य)",
    "options_en": ["Laminar", "Turbulent", "Transitional", "Compressible"],
    "options_hi": ["स्तरीय", "अशांत", "संक्रमणकालीन", "संपीड्य"],
    "answer_en": "Transitional",
    "answer_hi": "संक्रमणकालीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the fourth type of bridge? (Beam, Arch, Truss, Suspension, Cable-Stayed)",
    "question_hi": "पुल का चौथा प्रकार कौन सा है? (बीम, मेहराब, ट्रस, सस्पेंशन, केबल-स्टेड)",
    "options_en": ["Arch", "Truss", "Suspension", "Cable-Stayed"],
    "options_hi": ["मेहराब", "ट्रस", "सस्पेंशन", "केबल-स्टेड"],
    "answer_en": "Suspension",
    "answer_hi": "सस्पेंशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the third type of heat transfer? (Conduction, Convection, Radiation, Advection)",
    "question_hi": "ऊष्मा स्थानांतरण का तीसरा प्रकार कौन सा है? (चालन, संवहन, विकिरण, अभिवहन)",
    "options_en": ["Conduction", "Convection", "Radiation", "Advection"],
    "options_hi": ["चालन", "संवहन", "विकिरण", "अभिवहन"],
    "answer_en": "Radiation",
    "answer_hi": "विकिरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the fourth step in the troubleshooting process? (Identify, Research, Establish Theory, Test Theory, Implement Fix, Verify)",
    "question_hi": "समस्या निवारण प्रक्रिया में चौथा चरण कौन सा है? (पहचान, शोध, सिद्धांत स्थापित करना, सिद्धांत परीक्षण, समाधान लागू करना, सत्यापन)",
    "options_en": ["Research", "Establish Theory", "Test Theory", "Implement Fix"],
    "options_hi": ["शोध", "सिद्धांत स्थापित करना", "सिद्धांत परीक्षण", "समाधान लागू करना"],
    "answer_en": "Test Theory",
    "answer_hi": "सिद्धांत परीक्षण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the third type of control system? (Open-loop, Closed-loop, Adaptive, Optimal)",
    "question_hi": "नियंत्रण प्रणाली का तीसरा प्रकार कौन सा है? (ओपन-लूप, क्लोज्ड-लूप, अनुकूली, इष्टतम)",
    "options_en": ["Open-loop", "Closed-loop", "Adaptive", "Optimal"],
    "options_hi": ["ओपन-लूप", "क्लोज्ड-लूप", "अनुकूली", "इष्टतम"],
    "answer_en": "Adaptive",
    "answer_hi": "अनुकूली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the fourth type of programming error? (Syntax, Runtime, Logical, Semantic, Resource)",
    "question_hi": "प्रोग्रामिंग त्रुटि का चौथा प्रकार कौन सा है? (सिंटैक्स, रनटाइम, लॉजिकल, सेमेंटिक, रिसोर्स)",
    "options_en": ["Syntax", "Runtime", "Logical", "Semantic"],
    "options_hi": ["सिंटैक्स", "रनटाइम", "लॉजिकल", "सेमेंटिक"],
    "answer_en": "Semantic",
    "answer_hi": "सेमेंटिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the third type of computer network? (LAN, MAN, WAN, PAN, VPN)",
    "question_hi": "कंप्यूटर नेटवर्क का तीसरा प्रकार कौन सा है? (LAN, MAN, WAN, PAN, VPN)",
    "options_en": ["LAN", "MAN", "WAN", "PAN"],
    "options_hi": ["LAN", "MAN", "WAN", "PAN"],
    "answer_en": "WAN",
    "answer_hi": "WAN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the fourth step in the data analysis process? (Data Collection, Data Cleaning, Data Exploration, Data Modeling, Interpretation, Visualization)",
    "question_hi": "डेटा विश्लेषण प्रक्रिया में चौथा चरण कौन सा है? (डेटा संग्रह, डेटा सफाई, डेटा अन्वेषण, डेटा मॉडलिंग, व्याख्या, विज़ुअलाइज़ेशन)",
    "options_en": ["Data Cleaning", "Data Exploration", "Data Modeling", "Interpretation"],
    "options_hi": ["डेटा सफाई", "डेटा अन्वेषण", "डेटा मॉडलिंग", "व्याख्या"],
    "answer_en": "Data Modeling",
    "answer_hi": "डेटा मॉडलिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the third type of operating system? (Batch, Time-sharing, Distributed, Real-time, Network)",
    "question_hi": "ऑपरेटिंग सिस्टम का तीसरा प्रकार कौन सा है? (बैच, टाइम-शेयरिंग, वितरित, रियल-टाइम, नेटवर्क)",
    "options_en": ["Batch", "Time-sharing", "Distributed", "Real-time"],
    "options_hi": ["बैच", "टाइम-शेयरिंग", "वितरित", "रियल-टाइम"],
    "answer_en": "Distributed",
    "answer_hi": "वितरित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the fourth type of transformer? (Step-up, Step-down, Isolation, Auto-transformer, Instrument)",
    "question_hi": "ट्रांसफॉर्मर का चौथा प्रकार कौन सा है? (स्टेप-अप, स्टेप-डाउन, आइसोलेशन, ऑटो-ट्रांसफॉर्मर, इंस्ट्रूमेंट)",
    "options_en": ["Step-up", "Step-down", "Isolation", "Auto-transformer"],
    "options_hi": ["स्टेप-अप", "स्टेप-डाउन", "आइसोलेशन", "ऑटो-ट्रांसफॉर्मर"],
    "answer_en": "Auto-transformer",
    "answer_hi": "ऑटो-ट्रांसफॉर्मर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the third type of sensor? (Temperature, Pressure, Flow, Level, Position)",
    "question_hi": "सेंसर का तीसरा प्रकार कौन सा है? (तापमान, दबाव, प्रवाह, स्तर, स्थिति)",
    "options_en": ["Temperature", "Pressure", "Flow", "Level"],
    "options_hi": ["तापमान", "दबाव", "प्रवाह", "स्तर"],
    "answer_en": "Flow",
    "answer_hi": "प्रवाह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the fourth step in the quality assurance process? (Plan, Do, Check, Act, Improve)",
    "question_hi": "गुणवत्ता आश्वासन प्रक्रिया में चौथा चरण कौन सा है? (योजना, करना, जाँच, कार्य, सुधार)",
    "options_en": ["Do", "Check", "Act", "Improve"],
    "options_hi": ["करना", "जाँच", "कार्य", "सुधार"],
    "answer_en": "Act",
    "answer_hi": "कार्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the third type of manufacturing process? (Casting, Forming, Machining, Joining, Additive)",
    "question_hi": "निर्माण प्रक्रिया का तीसरा प्रकार कौन सा है? (कास्टिंग, फॉर्मिंग, मशीनिंग, जॉइनिंग, एडिटिव)",
    "options_en": ["Casting", "Forming", "Machining", "Joining"],
    "options_hi": ["कास्टिंग", "फॉर्मिंग", "मशीनिंग", "जॉइनिंग"],
    "answer_en": "Machining",
    "answer_hi": "मशीनिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the fourth type of power plant? (Thermal, Hydro, Nuclear, Solar, Wind)",
    "question_hi": "पावर प्लांट का चौथा प्रकार कौन सा है? (थर्मल, हाइड्रो, न्यूक्लियर, सौर, पवन)",
    "options_en": ["Thermal", "Hydro", "Nuclear", "Solar"],
    "options_hi": ["थर्मल", "हाइड्रो", "न्यूक्लियर", "सौर"],
    "answer_en": "Solar",
    "answer_hi": "सौर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the third step in the innovation process? (Ideation, Selection, Development, Commercialization, Diffusion)",
    "question_hi": "नवाचार प्रक्रिया में तीसरा चरण कौन सा है? (विचार, चयन, विकास, वाणिज्यिकीकरण, प्रसार)",
    "options_en": ["Ideation", "Selection", "Development", "Commercialization"],
    "options_hi": ["विचार", "चयन", "विकास", "वाणिज्यिकीकरण"],
    "answer_en": "Development",
    "answer_hi": "विकास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the fourth type of bearing? (Ball, Roller, Needle, Thrust, Sleeve)",
    "question_hi": "बेयरिंग का चौथा प्रकार कौन सा है? (बॉल, रोलर, नीडल, थ्रस्ट, स्लीव)",
    "options_en": ["Ball", "Roller", "Needle", "Thrust"],
    "options_hi": ["बॉल", "रोलर", "नीडल", "थ्रस्ट"],
    "answer_en": "Thrust",
    "answer_hi": "थ्रस्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the third step in the risk assessment process? (Hazard Identification, Risk Analysis, Risk Evaluation, Risk Treatment, Monitoring)",
    "question_hi": "जोखिम आकलन प्रक्रिया में तीसरा चरण कौन सा है? (खतरा पहचान, जोखिम विश्लेषण, जोखिम मूल्यांकन, जोखिम उपचार, निगरानी)",
    "options_en": ["Hazard Identification", "Risk Analysis", "Risk Evaluation", "Risk Treatment"],
    "options_hi": ["खतरा पहचान", "जोखिम विश्लेषण", "जोखिम मूल्यांकन", "जोखिम उपचार"],
    "answer_en": "Risk Evaluation",
    "answer_hi": "जोखिम मूल्यांकन",
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