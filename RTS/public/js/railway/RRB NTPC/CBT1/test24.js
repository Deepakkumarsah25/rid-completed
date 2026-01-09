const questions = [
  {
    "num": 1,
    "question_en": "What is the fourth layer in the TCP/IP protocol suite? (Application, Transport, Internet, Network Access)",
    "question_hi": "TCP/IP प्रोटोकॉल सूट में चौथी परत कौन सी है? (एप्लिकेशन, ट्रांसपोर्ट, इंटरनेट, नेटवर्क एक्सेस)",
    "options_en": ["Application", "Transport", "Internet", "Network Access"],
    "options_hi": ["एप्लिकेशन", "ट्रांसपोर्ट", "इंटरनेट", "नेटवर्क एक्सेस"],
    "answer_en": "Network Access",
    "answer_hi": "नेटवर्क एक्सेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the third generation of integrated circuits? (SSI, MSI, LSI, VLSI, ULSI)",
    "question_hi": "इंटीग्रेटेड सर्किट की तीसरी पीढ़ी कौन सी है? (SSI, MSI, LSI, VLSI, ULSI)",
    "options_en": ["SSI", "MSI", "LSI", "VLSI"],
    "options_hi": ["SSI", "MSI", "LSI", "VLSI"],
    "answer_en": "LSI",
    "answer_hi": "LSI",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the fourth Maxwell's equation? (Gauss's law for electricity, Gauss's law for magnetism, Faraday's law, Ampere-Maxwell law)",
    "question_hi": "चौथा मैक्सवेल समीकरण कौन सा है? (विद्युत के लिए गॉस का नियम, चुंबकत्व के लिए गॉस का नियम, फैराडे का नियम, एम्पियर-मैक्सवेल नियम)",
    "options_en": ["Gauss's law for magnetism", "Faraday's law", "Ampere-Maxwell law", "Lorentz force law"],
    "options_hi": ["चुंबकत्व के लिए गॉस का नियम", "फैराडे का नियम", "एम्पियर-मैक्सवेल नियम", "लॉरेंट्ज बल नियम"],
    "answer_en": "Ampere-Maxwell law",
    "answer_hi": "एम्पियर-मैक्सवेल नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the third stage in the Carnot cycle? (Isothermal expansion, Adiabatic expansion, Isothermal compression, Adiabatic compression)",
    "question_hi": "कार्नोट चक्र में तीसरा चरण कौन सा है? (समतापीय प्रसार, रुद्धोष्म प्रसार, समतापीय संपीडन, रुद्धोष्म संपीडन)",
    "options_en": ["Adiabatic expansion", "Isothermal compression", "Adiabatic compression", "Heat rejection"],
    "options_hi": ["रुद्धोष्म प्रसार", "समतापीय संपीडन", "रुद्धोष्म संपीडन", "ऊष्मा अस्वीकरण"],
    "answer_en": "Isothermal compression",
    "answer_hi": "समतापीय संपीडन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the fourth type of robot configuration? (Cartesian, Cylindrical, Spherical, SCARA, Articulated)",
    "question_hi": "रोबोट कॉन्फ़िगरेशन का चौथा प्रकार कौन सा है? (कार्टेशियन, सिलिंड्रिकल, स्फेरिकल, SCARA, आर्टिकुलेटेड)",
    "options_en": ["Cylindrical", "Spherical", "SCARA", "Articulated"],
    "options_hi": ["सिलिंड्रिकल", "स्फेरिकल", "SCARA", "आर्टिकुलेटेड"],
    "answer_en": "SCARA",
    "answer_hi": "SCARA",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the third law of robotics by Isaac Asimov? (First Law, Second Law, Third Law, Zeroth Law)",
    "question_hi": "आइजैक असिमोव द्वारा रोबोटिक्स का तीसरा नियम कौन सा है? (प्रथम नियम, द्वितीय नियम, तृतीय नियम, शून्य नियम)",
    "options_en": ["First Law", "Second Law", "Third Law", "Zeroth Law"],
    "options_hi": ["प्रथम नियम", "द्वितीय नियम", "तृतीय नियम", "शून्य नियम"],
    "answer_en": "Third Law",
    "answer_hi": "तृतीय नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the fourth level in the Kirkpatrick model of training evaluation? (Reaction, Learning, Behavior, Results)",
    "question_hi": "प्रशिक्षण मूल्यांकन के किर्कपैट्रिक मॉडल में चौथा स्तर कौन सा है? (प्रतिक्रिया, सीख, व्यवहार, परिणाम)",
    "options_en": ["Learning", "Behavior", "Results", "ROI"],
    "options_hi": ["सीख", "व्यवहार", "परिणाम", "आरओआई"],
    "answer_en": "Results",
    "answer_hi": "परिणाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the third stage in the software development life cycle? (Requirements, Design, Implementation, Testing, Deployment, Maintenance)",
    "question_hi": "सॉफ्टवेयर विकास जीवनचक्र में तीसरा चरण कौन सा है? (आवश्यकताएं, डिजाइन, कार्यान्वयन, परीक्षण, तैनाती, रखरखाव)",
    "options_en": ["Requirements", "Design", "Implementation", "Testing"],
    "options_hi": ["आवश्यकताएं", "डिजाइन", "कार्यान्वयन", "परीक्षण"],
    "answer_en": "Implementation",
    "answer_hi": "कार्यान्वयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the fourth type of finite element? (Bar element, Beam element, Triangular element, Quadrilateral element, Tetrahedral element)",
    "question_hi": "फाइनाइट एलिमेंट का चौथा प्रकार कौन सा है? (बार एलिमेंट, बीम एलिमेंट, त्रिभुजाकार एलिमेंट, चतुर्भुज एलिमेंट, चतुष्फलकीय एलिमेंट)",
    "options_en": ["Beam element", "Triangular element", "Quadrilateral element", "Tetrahedral element"],
    "options_hi": ["बीम एलिमेंट", "त्रिभुजाकार एलिमेंट", "चतुर्भुज एलिमेंट", "चतुष्फलकीय एलिमेंट"],
    "answer_en": "Quadrilateral element",
    "answer_hi": "चतुर्भुज एलिमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the third generation of computer languages? (Machine language, Assembly language, High-level language, 4GL, 5GL)",
    "question_hi": "कंप्यूटर भाषाओं की तीसरी पीढ़ी कौन सी है? (मशीन भाषा, असेंबली भाषा, उच्च-स्तरीय भाषा, 4GL, 5GL)",
    "options_en": ["Assembly language", "High-level language", "4GL", "5GL"],
    "options_hi": ["असेंबली भाषा", "उच्च-स्तरीय भाषा", "4GL", "5GL"],
    "answer_en": "High-level language",
    "answer_hi": "उच्च-स्तरीय भाषा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the fourth stage in the Deming cycle? (Plan, Do, Check, Act)",
    "question_hi": "डेमिंग चक्र में चौथा चरण कौन सा है? (योजना, करना, जाँच, कार्य)",
    "options_en": ["Do", "Check", "Act", "Improve"],
    "options_hi": ["करना", "जाँच", "कार्य", "सुधार"],
    "answer_en": "Act",
    "answer_hi": "कार्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
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
    "num": 13,
    "question_en": "What is the fourth layer in the Earth's atmosphere? (Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere)",
    "question_hi": "पृथ्वी के वायुमंडल की चौथी परत कौन सी है? (क्षोभमंडल, समताप मंडल, मध्यमंडल, तापमंडल, बहिर्मंडल)",
    "options_en": ["Stratosphere", "Mesosphere", "Thermosphere", "Exosphere"],
    "options_hi": ["समताप मंडल", "मध्यमंडल", "तापमंडल", "बहिर्मंडल"],
    "answer_en": "Thermosphere",
    "answer_hi": "तापमंडल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the third stage in the metallurgical process? (Concentration, Reduction, Refining, Alloying)",
    "question_hi": "धातुकर्म प्रक्रिया में तीसरा चरण कौन सा है? (सांद्रण, अपचयन, परिष्करण, मिश्रधातु निर्माण)",
    "options_en": ["Concentration", "Reduction", "Refining", "Alloying"],
    "options_hi": ["सांद्रण", "अपचयन", "परिष्करण", "मिश्रधातु निर्माण"],
    "answer_en": "Refining",
    "answer_hi": "परिष्करण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the fourth type of machining process? (Turning, Milling, Drilling, Grinding, Shaping)",
    "question_hi": "मशीनिंग प्रक्रिया का चौथा प्रकार कौन सा है? (टर्निंग, मिलिंग, ड्रिलिंग, ग्राइंडिंग, शेपिंग)",
    "options_en": ["Milling", "Drilling", "Grinding", "Shaping"],
    "options_hi": ["मिलिंग", "ड्रिलिंग", "ग्राइंडिंग", "शेपिंग"],
    "answer_en": "Grinding",
    "answer_hi": "ग्राइंडिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the third step in the scientific computing process? (Problem formulation, Mathematical modeling, Numerical solution, Visualization, Validation)",
    "question_hi": "वैज्ञानिक कंप्यूटिंग प्रक्रिया में तीसरा चरण कौन सा है? (समस्या सूत्रीकरण, गणितीय मॉडलिंग, संख्यात्मक समाधान, विज़ुअलाइज़ेशन, सत्यापन)",
    "options_en": ["Problem formulation", "Mathematical modeling", "Numerical solution", "Visualization"],
    "options_hi": ["समस्या सूत्रीकरण", "गणितीय मॉडलिंग", "संख्यात्मक समाधान", "विज़ुअलाइज़ेशन"],
    "answer_en": "Numerical solution",
    "answer_hi": "संख्यात्मक समाधान",
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
    "question_en": "What is the third stage in the product life cycle? (Introduction, Growth, Maturity, Decline)",
    "question_hi": "उत्पाद जीवनचक्र में तीसरा चरण कौन सा है? (परिचय, विकास, परिपक्वता, गिरावट)",
    "options_en": ["Introduction", "Growth", "Maturity", "Decline"],
    "options_hi": ["परिचय", "विकास", "परिपक्वता", "गिरावट"],
    "answer_en": "Maturity",
    "answer_hi": "परिपक्वता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
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
    "num": 20,
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
    "num": 21,
    "question_en": "What is the fourth stage in the data science pipeline? (Data collection, Data cleaning, Data analysis, Data visualization, Model deployment)",
    "question_hi": "डेटा साइंस पाइपलाइन में चौथा चरण कौन सा है? (डेटा संग्रह, डेटा सफाई, डेटा विश्लेषण, डेटा विज़ुअलाइज़ेशन, मॉडल तैनाती)",
    "options_en": ["Data cleaning", "Data analysis", "Data visualization", "Model deployment"],
    "options_hi": ["डेटा सफाई", "डेटा विश्लेषण", "डेटा विज़ुअलाइज़ेशन", "मॉडल तैनाती"],
    "answer_en": "Data visualization",
    "answer_hi": "डेटा विज़ुअलाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the third type of machine learning algorithm? (Supervised, Unsupervised, Reinforcement, Semi-supervised)",
    "question_hi": "मशीन लर्निंग एल्गोरिदम का तीसरा प्रकार कौन सा है? (सुपरवाइज्ड, अनसुपरवाइज्ड, रीइन्फोर्समेंट, सेमी-सुपरवाइज्ड)",
    "options_en": ["Supervised", "Unsupervised", "Reinforcement", "Semi-supervised"],
    "options_hi": ["सुपरवाइज्ड", "अनसुपरवाइज्ड", "रीइन्फोर्समेंट", "सेमी-सुपरवाइज्ड"],
    "answer_en": "Reinforcement",
    "answer_hi": "रीइन्फोर्समेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the fourth level in the OSI model? (Physical, Data Link, Network, Transport, Session, Presentation, Application)",
    "question_hi": "OSI मॉडल में चौथा स्तर कौन सा है? (फिजिकल, डेटा लिंक, नेटवर्क, ट्रांसपोर्ट, सेशन, प्रेजेंटेशन, एप्लिकेशन)",
    "options_en": ["Data Link", "Network", "Transport", "Session"],
    "options_hi": ["डेटा लिंक", "नेटवर्क", "ट्रांसपोर्ट", "सेशन"],
    "answer_en": "Transport",
    "answer_hi": "ट्रांसपोर्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the third stage in the water treatment process? (Screening, Sedimentation, Filtration, Disinfection, Distribution)",
    "question_hi": "जल उपचार प्रक्रिया में तीसरा चरण कौन सा है? (स्क्रीनिंग, अवसादन, निस्पंदन, कीटाणुशोधन, वितरण)",
    "options_en": ["Sedimentation", "Filtration", "Disinfection", "Distribution"],
    "options_hi": ["अवसादन", "निस्पंदन", "कीटाणुशोधन", "वितरण"],
    "answer_en": "Filtration",
    "answer_hi": "निस्पंदन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the fourth type of bridge? (Beam, Arch, Truss, Suspension, Cable-stayed)",
    "question_hi": "पुल का चौथा प्रकार कौन सा है? (बीम, मेहराब, ट्रस, सस्पेंशन, केबल-स्टेड)",
    "options_en": ["Arch", "Truss", "Suspension", "Cable-stayed"],
    "options_hi": ["मेहराब", "ट्रस", "सस्पेंशन", "केबल-स्टेड"],
    "answer_en": "Suspension",
    "answer_hi": "सस्पेंशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
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
    "num": 27,
    "question_en": "What is the fourth step in the troubleshooting methodology? (Identify, Research, Establish theory, Test theory, Implement fix, Verify)",
    "question_hi": "समस्या निवारण पद्धति में चौथा चरण कौन सा है? (पहचान, शोध, सिद्धांत स्थापित करें, सिद्धांत परीक्षण, समाधान लागू करें, सत्यापन)",
    "options_en": ["Research", "Establish theory", "Test theory", "Implement fix"],
    "options_hi": ["शोध", "सिद्धांत स्थापित करें", "सिद्धांत परीक्षण", "समाधान लागू करें"],
    "answer_en": "Test theory",
    "answer_hi": "सिद्धांत परीक्षण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the third type of engineering drawing? (Orthographic, Isometric, Perspective, Sectional, Auxiliary)",
    "question_hi": "इंजीनियरिंग ड्राइंग का तीसरा प्रकार कौन सा है? (ऑर्थोग्राफिक, आइसोमेट्रिक, परिप्रेक्ष्य, अनुभागीय, सहायक)",
    "options_en": ["Orthographic", "Isometric", "Perspective", "Sectional"],
    "options_hi": ["ऑर्थोग्राफिक", "आइसोमेट्रिक", "परिप्रेक्ष्य", "अनुभागीय"],
    "answer_en": "Perspective",
    "answer_hi": "परिप्रेक्ष्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the fourth stage in the construction lifecycle? (Planning, Design, Procurement, Construction, Commissioning)",
    "question_hi": "निर्माण जीवनचक्र में चौथा चरण कौन सा है? (योजना, डिजाइन, खरीद, निर्माण, कमीशनिंग)",
    "options_en": ["Design", "Procurement", "Construction", "Commissioning"],
    "options_hi": ["डिजाइन", "खरीद", "निर्माण", "कमीशनिंग"],
    "answer_en": "Construction",
    "answer_hi": "निर्माण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the third type of renewable energy? (Solar, Wind, Hydro, Geothermal, Biomass)",
    "question_hi": "नवीकरणीय ऊर्जा का तीसरा प्रकार कौन सा है? (सौर, पवन, जल, भूतापीय, बायोमास)",
    "options_en": ["Wind", "Hydro", "Geothermal", "Biomass"],
    "options_hi": ["पवन", "जल", "भूतापीय", "बायोमास"],
    "answer_en": "Hydro",
    "answer_hi": "जल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the fourth step in the risk management process? (Identify, Analyze, Evaluate, Treat, Monitor)",
    "question_hi": "जोखिम प्रबंधन प्रक्रिया में चौथा चरण कौन सा है? (पहचान, विश्लेषण, मूल्यांकन, उपचार, निगरानी)",
    "options_en": ["Analyze", "Evaluate", "Treat", "Monitor"],
    "options_hi": ["विश्लेषण", "मूल्यांकन", "उपचार", "निगरानी"],
    "answer_en": "Treat",
    "answer_hi": "उपचार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the third type of computer memory? (Register, Cache, RAM, ROM, Secondary)",
    "question_hi": "कंप्यूटर मेमोरी का तीसरा प्रकार कौन सा है? (रजिस्टर, कैश, RAM, ROM, सेकेंडरी)",
    "options_en": ["Cache", "RAM", "ROM", "Secondary"],
    "options_hi": ["कैश", "RAM", "ROM", "सेकेंडरी"],
    "answer_en": "RAM",
    "answer_hi": "RAM",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
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
    "num": 34,
    "question_en": "What is the third stage in the data analysis process? (Data collection, Data cleaning, Data analysis, Data visualization, Interpretation)",
    "question_hi": "डेटा विश्लेषण प्रक्रिया में तीसरा चरण कौन सा है? (डेटा संग्रह, डेटा सफाई, डेटा विश्लेषण, डेटा विज़ुअलाइज़ेशन, व्याख्या)",
    "options_en": ["Data collection", "Data cleaning", "Data analysis", "Data visualization"],
    "options_hi": ["डेटा संग्रह", "डेटा सफाई", "डेटा विश्लेषण", "डेटा विज़ुअलाइज़ेशन"],
    "answer_en": "Data analysis",
    "answer_hi": "डेटा विश्लेषण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the fourth type of motor? (DC, AC synchronous, AC induction, Stepper, Servo)",
    "question_hi": "मोटर का चौथा प्रकार कौन सा है? (DC, AC सिंक्रोनस, AC इंडक्शन, स्टेपर, सर्वो)",
    "options_en": ["AC synchronous", "AC induction", "Stepper", "Servo"],
    "options_hi": ["AC सिंक्रोनस", "AC इंडक्शन", "स्टेपर", "सर्वो"],
    "answer_en": "Stepper",
    "answer_hi": "स्टेपर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the third stage in the cell cycle? (G1, S, G2, M)",
    "question_hi": "सेल चक्र में तीसरा चरण कौन सा है? (G1, S, G2, M)",
    "options_en": ["G1", "S", "G2", "M"],
    "options_hi": ["G1", "S", "G2", "M"],
    "answer_en": "G2",
    "answer_hi": "G2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the fourth type of foundation? (Shallow, Deep, Pile, Raft, Combined)",
    "question_hi": "नींव का चौथा प्रकार कौन सा है? (उथली, गहरी, ढेर, राफ्ट, संयुक्त)",
    "options_en": ["Deep", "Pile", "Raft", "Combined"],
    "options_hi": ["गहरी", "ढेर", "राफ्ट", "संयुक्त"],
    "answer_en": "Raft",
    "answer_hi": "राफ्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the third step in the research process? (Problem identification, Literature review, Research design, Data collection, Analysis)",
    "question_hi": "शोध प्रक्रिया में तीसरा चरण कौन सा है? (समस्या पहचान, साहित्य समीक्षा, शोध डिजाइन, डेटा संग्रह, विश्लेषण)",
    "options_en": ["Literature review", "Research design", "Data collection", "Analysis"],
    "options_hi": ["साहित्य समीक्षा", "शोध डिजाइन", "डेटा संग्रह", "विश्लेषण"],
    "answer_en": "Research design",
    "answer_hi": "शोध डिजाइन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the fourth type of measurement scale? (Nominal, Ordinal, Interval, Ratio)",
    "question_hi": "माप पैमाने का चौथा प्रकार कौन सा है? (नामिक, क्रमसूचक, अंतराल, अनुपात)",
    "options_en": ["Ordinal", "Interval", "Ratio", "Absolute"],
    "options_hi": ["क्रमसूचक", "अंतराल", "अनुपात", "निरपेक्ष"],
    "answer_en": "Ratio",
    "answer_hi": "अनुपात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the third stage in the supply chain? (Plan, Source, Make, Deliver, Return)",
    "question_hi": "आपूर्ति श्रृंखला में तीसरा चरण कौन सा है? (योजना, स्रोत, निर्माण, वितरण, वापसी)",
    "options_en": ["Plan", "Source", "Make", "Deliver"],
    "options_hi": ["योजना", "स्रोत", "निर्माण", "वितरण"],
    "answer_en": "Make",
    "answer_hi": "निर्माण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the fourth type of engineering material? (Metals, Ceramics, Polymers, Composites, Semiconductors)",
    "question_hi": "इंजीनियरिंग सामग्री का चौथा प्रकार कौन सा है? (धातु, सिरेमिक, पॉलिमर, कम्पोजिट, सेमीकंडक्टर)",
    "options_en": ["Ceramics", "Polymers", "Composites", "Semiconductors"],
    "options_hi": ["सिरेमिक", "पॉलिमर", "कम्पोजिट", "सेमीकंडक्टर"],
    "answer_en": "Composites",
    "answer_hi": "कम्पोजिट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the third step in the decision-making process? (Identify problem, Gather information, Evaluate alternatives, Choose alternative, Implement)",
    "question_hi": "निर्णय लेने की प्रक्रिया में तीसरा चरण कौन सा है? (समस्या पहचान, जानकारी एकत्र करें, विकल्पों का मूल्यांकन करें, विकल्प चुनें, कार्यान्वयन)",
    "options_en": ["Gather information", "Evaluate alternatives", "Choose alternative", "Implement"],
    "options_hi": ["जानकारी एकत्र करें", "विकल्पों का मूल्यांकन करें", "विकल्प चुनें", "कार्यान्वयन"],
    "answer_en": "Evaluate alternatives",
    "answer_hi": "विकल्पों का मूल्यांकन करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the fourth stage in the product lifecycle? (Introduction, Growth, Maturity, Decline, Discontinuation)",
    "question_hi": "उत्पाद जीवनचक्र में चौथा चरण कौन सा है? (परिचय, विकास, परिपक्वता, गिरावट, समाप्ति)",
    "options_en": ["Growth", "Maturity", "Decline", "Discontinuation"],
    "options_hi": ["विकास", "परिपक्वता", "गिरावट", "समाप्ति"],
    "answer_en": "Decline",
    "answer_hi": "गिरावट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the third type of database? (Hierarchical, Network, Relational, Object-oriented, NoSQL)",
    "question_hi": "डेटाबेस का तीसरा प्रकार कौन सा है? (पदानुक्रमित, नेटवर्क, संबंधपरक, वस्तु-उन्मुख, NoSQL)",
    "options_en": ["Network", "Relational", "Object-oriented", "NoSQL"],
    "options_hi": ["नेटवर्क", "संबंधपरक", "वस्तु-उन्मुख", "NoSQL"],
    "answer_en": "Relational",
    "answer_hi": "संबंधपरक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the fourth step in the maintenance process? (Inspection, Detection, Correction, Prevention, Improvement)",
    "question_hi": "रखरखाव प्रक्रिया में चौथा चरण कौन सा है? (निरीक्षण, पहचान, सुधार, रोकथाम, सुधार)",
    "options_en": ["Detection", "Correction", "Prevention", "Improvement"],
    "options_hi": ["पहचान", "सुधार", "रोकथाम", "सुधार"],
    "answer_en": "Prevention",
    "answer_hi": "रोकथाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the third type of computer network? (PAN, LAN, MAN, WAN, VPN)",
    "question_hi": "कंप्यूटर नेटवर्क का तीसरा प्रकार कौन सा है? (PAN, LAN, MAN, WAN, VPN)",
    "options_en": ["LAN", "MAN", "WAN", "VPN"],
    "options_hi": ["LAN", "MAN", "WAN", "VPN"],
    "answer_en": "MAN",
    "answer_hi": "MAN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the fourth stage in the butterfly lifecycle? (Egg, Larva, Pupa, Adult)",
    "question_hi": "तितली जीवनचक्र में चौथा चरण कौन सा है? (अंडा, लार्वा, प्यूपा, वयस्क)",
    "options_en": ["Larva", "Pupa", "Adult", "Reproduction"],
    "options_hi": ["लार्वा", "प्यूपा", "वयस्क", "प्रजनन"],
    "answer_en": "Adult",
    "answer_hi": "वयस्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the third step in the problem-solving process? (Define, Analyze, Generate solutions, Select solution, Implement, Evaluate)",
    "question_hi": "समस्या-समाधान प्रक्रिया में तीसरा चरण कौन सा है? (परिभाषित, विश्लेषण, समाधान उत्पन्न करें, समाधान चुनें, कार्यान्वयन, मूल्यांकन)",
    "options_en": ["Analyze", "Generate solutions", "Select solution", "Implement"],
    "options_hi": ["विश्लेषण", "समाधान उत्पन्न करें", "समाधान चुनें", "कार्यान्वयन"],
    "answer_en": "Generate solutions",
    "answer_hi": "समाधान उत्पन्न करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the fourth type of power plant? (Thermal, Hydro, Nuclear, Solar, Wind)",
    "question_hi": "पावर प्लांट का चौथा प्रकार कौन सा है? (थर्मल, हाइड्रो, न्यूक्लियर, सौर, पवन)",
    "options_en": ["Hydro", "Nuclear", "Solar", "Wind"],
    "options_hi": ["हाइड्रो", "न्यूक्लियर", "सौर", "पवन"],
    "answer_en": "Solar",
    "answer_hi": "सौर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the third stage in the water cycle? (Evaporation, Condensation, Precipitation, Collection)",
    "question_hi": "जल चक्र में तीसरा चरण कौन सा है? (वाष्पीकरण, संघनन, वर्षा, संग्रहण)",
    "options_en": ["Condensation", "Precipitation", "Collection", "Runoff"],
    "options_hi": ["संघनन", "वर्षा", "संग्रहण", "अपवाह"],
    "answer_en": "Precipitation",
    "answer_hi": "वर्षा",
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