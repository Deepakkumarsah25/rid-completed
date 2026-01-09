const questions = [
  {
    "num": 1,
    "question_en": "What is the fourth layer of the OSI model? (Physical, Data Link, Network, Transport, Session, Presentation, Application)",
    "question_hi": "OSI मॉडल की चौथी परत कौन सी है? (फिजिकल, डेटा लिंक, नेटवर्क, ट्रांसपोर्ट, सेशन, प्रेजेंटेशन, एप्लिकेशन)",
    "options_en": ["Network", "Transport", "Session", "Presentation"],
    "options_hi": ["नेटवर्क", "ट्रांसपोर्ट", "सेशन", "प्रेजेंटेशन"],
    "answer_en": "Transport",
    "answer_hi": "ट्रांसपोर्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the third gear in a standard 5-speed manual transmission? (1st, 2nd, 3rd, 4th, 5th)",
    "question_hi": "एक मानक 5-स्पीड मैनुअल ट्रांसमिशन में तीसरा गियर कौन सा है? (1st, 2nd, 3rd, 4th, 5th)",
    "options_en": ["2nd", "3rd", "4th", "5th"],
    "options_hi": ["2nd", "3rd", "4th", "5th"],
    "answer_en": "3rd",
    "answer_hi": "3rd",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the fourth step in the software testing life cycle? (Requirement Analysis, Test Planning, Test Design, Test Execution, Test Closure)",
    "question_hi": "सॉफ्टवेयर टेस्टिंग लाइफ साइकल में चौथा चरण कौन सा है? (आवश्यकता विश्लेषण, टेस्ट प्लानिंग, टेस्ट डिजाइन, टेस्ट एक्जीक्यूशन, टेस्ट क्लोजर)",
    "options_en": ["Test Planning", "Test Design", "Test Execution", "Test Closure"],
    "options_hi": ["टेस्ट प्लानिंग", "टेस्ट डिजाइन", "टेस्ट एक्जीक्यूशन", "टेस्ट क्लोजर"],
    "answer_en": "Test Execution",
    "answer_hi": "टेस्ट एक्जीक्यूशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the third color code in resistor color bands? (Black, Brown, Red, Orange, Yellow, Green, Blue, Violet, Gray, White)",
    "question_hi": "रजिस्टर कलर बैंड में तीसरा रंग कोड कौन सा है? (काला, भूरा, लाल, नारंगी, पीला, हरा, नीला, बैंगनी, ग्रे, सफेद)",
    "options_en": ["Brown", "Red", "Orange", "Yellow"],
    "options_hi": ["भूरा", "लाल", "नारंगी", "पीला"],
    "answer_en": "Red",
    "answer_hi": "लाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the fourth step in the engineering drawing process? (Sketching, Dimensioning, Detailing, Checking, Approval)",
    "question_hi": "इंजीनियरिंग ड्राइंग प्रक्रिया में चौथा चरण कौन सा है? (स्केचिंग, डायमेंशनिंग, डिटेलिंग, चेकिंग, अनुमोदन)",
    "options_en": ["Sketching", "Dimensioning", "Detailing", "Checking"],
    "options_hi": ["स्केचिंग", "डायमेंशनिंग", "डिटेलिंग", "चेकिंग"],
    "answer_en": "Checking",
    "answer_hi": "चेकिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the third type of machining operation? (Turning, Milling, Drilling, Grinding, Shaping)",
    "question_hi": "मशीनिंग ऑपरेशन का तीसरा प्रकार कौन सा है? (टर्निंग, मिलिंग, ड्रिलिंग, ग्राइंडिंग, शेपिंग)",
    "options_en": ["Turning", "Milling", "Drilling", "Grinding"],
    "options_hi": ["टर्निंग", "मिलिंग", "ड्रिलिंग", "ग्राइंडिंग"],
    "answer_en": "Drilling",
    "answer_hi": "ड्रिलिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the fourth stage in the project life cycle? (Initiation, Planning, Execution, Monitoring, Closure)",
    "question_hi": "प्रोजेक्ट लाइफ साइकल में चौथा चरण कौन सा है? (आरंभ, योजना, निष्पादन, निगरानी, समापन)",
    "options_en": ["Planning", "Execution", "Monitoring", "Closure"],
    "options_hi": ["योजना", "निष्पादन", "निगरानी", "समापन"],
    "answer_en": "Monitoring",
    "answer_hi": "निगरानी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the third step in the data processing cycle? (Input, Processing, Output, Storage)",
    "question_hi": "डेटा प्रोसेसिंग चक्र में तीसरा चरण कौन सा है? (इनपुट, प्रोसेसिंग, आउटपुट, स्टोरेज)",
    "options_en": ["Input", "Processing", "Output", "Storage"],
    "options_hi": ["इनपुट", "प्रोसेसिंग", "आउटपुट", "स्टोरेज"],
    "answer_en": "Output",
    "answer_hi": "आउटपुट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the fourth type of computer network topology? (Bus, Star, Ring, Mesh, Tree)",
    "question_hi": "कंप्यूटर नेटवर्क टोपोलॉजी का चौथा प्रकार कौन सा है? (बस, स्टार, रिंग, मेश, ट्री)",
    "options_en": ["Star", "Ring", "Mesh", "Tree"],
    "options_hi": ["स्टार", "रिंग", "मेश", "ट्री"],
    "answer_en": "Mesh",
    "answer_hi": "मेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the third step in the scientific method? (Observation, Hypothesis, Experiment, Analysis, Conclusion)",
    "question_hi": "वैज्ञानिक विधि में तीसरा चरण कौन सा है? (अवलोकन, परिकल्पना, प्रयोग, विश्लेषण, निष्कर्ष)",
    "options_en": ["Hypothesis", "Experiment", "Analysis", "Conclusion"],
    "options_hi": ["परिकल्पना", "प्रयोग", "विश्लेषण", "निष्कर्ष"],
    "answer_en": "Experiment",
    "answer_hi": "प्रयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the fourth stage in the water treatment process? (Screening, Sedimentation, Filtration, Disinfection, Distribution)",
    "question_hi": "जल उपचार प्रक्रिया में चौथा चरण कौन सा है? (स्क्रीनिंग, अवसादन, निस्पंदन, कीटाणुशोधन, वितरण)",
    "options_en": ["Sedimentation", "Filtration", "Disinfection", "Distribution"],
    "options_hi": ["अवसादन", "निस्पंदन", "कीटाणुशोधन", "वितरण"],
    "answer_en": "Disinfection",
    "answer_hi": "कीटाणुशोधन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the third step in the engineering design process? (Define, Research, Ideate, Prototype, Test, Implement)",
    "question_hi": "इंजीनियरिंग डिजाइन प्रक्रिया में तीसरा चरण कौन सा है? (परिभाषित, शोध, विचार, प्रोटोटाइप, परीक्षण, कार्यान्वयन)",
    "options_en": ["Research", "Ideate", "Prototype", "Test"],
    "options_hi": ["शोध", "विचार", "प्रोटोटाइप", "परीक्षण"],
    "answer_en": "Ideate",
    "answer_hi": "विचार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the fourth type of bearing? (Ball, Roller, Needle, Thrust, Sleeve)",
    "question_hi": "बेयरिंग का चौथा प्रकार कौन सा है? (बॉल, रोलर, नीडल, थ्रस्ट, स्लीव)",
    "options_en": ["Roller", "Needle", "Thrust", "Sleeve"],
    "options_hi": ["रोलर", "नीडल", "थ्रस्ट", "स्लीव"],
    "answer_en": "Thrust",
    "answer_hi": "थ्रस्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the third layer in the TCP/IP model? (Application, Transport, Internet, Network Access)",
    "question_hi": "TCP/IP मॉडल में तीसरी परत कौन सी है? (एप्लिकेशन, ट्रांसपोर्ट, इंटरनेट, नेटवर्क एक्सेस)",
    "options_en": ["Application", "Transport", "Internet", "Network Access"],
    "options_hi": ["एप्लिकेशन", "ट्रांसपोर्ट", "इंटरनेट", "नेटवर्क एक्सेस"],
    "answer_en": "Internet",
    "answer_hi": "इंटरनेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the fourth type of cement? (OPC, PPC, Rapid Hardening, Low Heat, Sulphate Resistant)",
    "question_hi": "सीमेंट का चौथा प्रकार कौन सा है? (OPC, PPC, रैपिड हार्डनिंग, लो हीट, सल्फेट रेजिस्टेंट)",
    "options_en": ["PPC", "Rapid Hardening", "Low Heat", "Sulphate Resistant"],
    "options_hi": ["PPC", "रैपिड हार्डनिंग", "लो हीट", "सल्फेट रेजिस्टेंट"],
    "answer_en": "Low Heat",
    "answer_hi": "लो हीट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the third stage in the product development lifecycle? (Concept, Design, Development, Testing, Launch, Maintenance)",
    "question_hi": "उत्पाद विकास जीवनचक्र में तीसरा चरण कौन सा है? (अवधारणा, डिजाइन, विकास, परीक्षण, लॉन्च, रखरखाव)",
    "options_en": ["Concept", "Design", "Development", "Testing"],
    "options_hi": ["अवधारणा", "डिजाइन", "विकास", "परीक्षण"],
    "answer_en": "Development",
    "answer_hi": "विकास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the fourth step in the quality control process? (Plan, Do, Check, Act, Improve)",
    "question_hi": "गुणवत्ता नियंत्रण प्रक्रिया में चौथा चरण कौन सा है? (योजना, करना, जाँच, कार्य, सुधार)",
    "options_en": ["Do", "Check", "Act", "Improve"],
    "options_hi": ["करना", "जाँच", "कार्य", "सुधार"],
    "answer_en": "Act",
    "answer_hi": "कार्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the third type of welding process? (Arc, Gas, Resistance, Solid-State, Thermit)",
    "question_hi": "वेल्डिंग प्रक्रिया का तीसरा प्रकार कौन सा है? (आर्क, गैस, प्रतिरोध, ठोस-अवस्था, थर्मिट)",
    "options_en": ["Arc", "Gas", "Resistance", "Solid-State"],
    "options_hi": ["आर्क", "गैस", "प्रतिरोध", "ठोस-अवस्था"],
    "answer_en": "Resistance",
    "answer_hi": "प्रतिरोध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the fourth stage in the software development lifecycle? (Planning, Analysis, Design, Implementation, Testing, Deployment)",
    "question_hi": "सॉफ्टवेयर विकास जीवनचक्र में चौथा चरण कौन सा है? (योजना, विश्लेषण, डिजाइन, कार्यान्वयन, परीक्षण, तैनाती)",
    "options_en": ["Analysis", "Design", "Implementation", "Testing"],
    "options_hi": ["विश्लेषण", "डिजाइन", "कार्यान्वयन", "परीक्षण"],
    "answer_en": "Implementation",
    "answer_hi": "कार्यान्वयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the third phase in the Moon's cycle? (New Moon, Waxing Crescent, First Quarter, Waxing Gibbous, Full Moon)",
    "question_hi": "चंद्रमा के चक्र में तीसरा चरण कौन सा है? (अमावस्या, वैक्सिंग क्रिसेंट, फर्स्ट क्वार्टर, वैक्सिंग गिबस, पूर्णिमा)",
    "options_en": ["Waxing Crescent", "First Quarter", "Waxing Gibbous", "Full Moon"],
    "options_hi": ["वैक्सिंग क्रिसेंट", "फर्स्ट क्वार्टर", "वैक्सिंग गिबस", "पूर्णिमा"],
    "answer_en": "First Quarter",
    "answer_hi": "फर्स्ट क्वार्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
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
    "num": 22,
    "question_en": "What is the third type of bridge? (Beam, Arch, Truss, Suspension, Cable-Stayed)",
    "question_hi": "तीसरे प्रकार का पुल कौन सा है? (बीम, मेहराब, ट्रस, सस्पेंशन, केबल-स्टेड)",
    "options_en": ["Beam", "Arch", "Truss", "Suspension"],
    "options_hi": ["बीम", "मेहराब", "ट्रस", "सस्पेंशन"],
    "answer_en": "Truss",
    "answer_hi": "ट्रस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the fourth generation of computers? (Vacuum Tubes, Transistors, ICs, Microprocessors, AI)",
    "question_hi": "कंप्यूटर की चौथी पीढ़ी कौन सी है? (वैक्यूम ट्यूब, ट्रांजिस्टर, ICs, माइक्रोप्रोसेसर, AI)",
    "options_en": ["Transistors", "ICs", "Microprocessors", "AI"],
    "options_hi": ["ट्रांजिस्टर", "ICs", "माइक्रोप्रोसेसर", "AI"],
    "answer_en": "Microprocessors",
    "answer_hi": "माइक्रोप्रोसेसर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the third law of thermodynamics? (Zeroth, First, Second, Third)",
    "question_hi": "ऊष्मागतिकी का तीसरा नियम कौन सा है? (शून्य, प्रथम, द्वितीय, तृतीय)",
    "options_en": ["First", "Second", "Third", "Zeroth"],
    "options_hi": ["प्रथम", "द्वितीय", "तृतीय", "शून्य"],
    "answer_en": "Third",
    "answer_hi": "तृतीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the fourth type of engineering drawing? (Orthographic, Isometric, Perspective, Sectional, Auxiliary)",
    "question_hi": "इंजीनियरिंग ड्राइंग का चौथा प्रकार कौन सा है? (ऑर्थोग्राफिक, आइसोमेट्रिक, परिप्रेक्ष्य, अनुभागीय, सहायक)",
    "options_en": ["Orthographic", "Isometric", "Perspective", "Sectional"],
    "options_hi": ["ऑर्थोग्राफिक", "आइसोमेट्रिक", "परिप्रेक्ष्य", "अनुभागीय"],
    "answer_en": "Sectional",
    "answer_hi": "अनुभागीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the third stage in the water cycle? (Evaporation, Condensation, Precipitation, Collection)",
    "question_hi": "जल चक्र में तीसरा चरण कौन सा है? (वाष्पीकरण, संघनन, वर्षा, संग्रहण)",
    "options_en": ["Evaporation", "Condensation", "Precipitation", "Collection"],
    "options_hi": ["वाष्पीकरण", "संघनन", "वर्षा", "संग्रहण"],
    "answer_en": "Precipitation",
    "answer_hi": "वर्षा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the fourth step in the manufacturing process? (Design, Material Selection, Processing, Assembly, Testing)",
    "question_hi": "निर्माण प्रक्रिया में चौथा चरण कौन सा है? (डिजाइन, सामग्री चयन, प्रसंस्करण, असेंबली, परीक्षण)",
    "options_en": ["Material Selection", "Processing", "Assembly", "Testing"],
    "options_hi": ["सामग्री चयन", "प्रसंस्करण", "असेंबली", "परीक्षण"],
    "answer_en": "Assembly",
    "answer_hi": "असेंबली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the third type of sensor? (Temperature, Pressure, Flow, Level, Proximity)",
    "question_hi": "सेंसर का तीसरा प्रकार कौन सा है? (तापमान, दबाव, प्रवाह, स्तर, निकटता)",
    "options_en": ["Temperature", "Pressure", "Flow", "Level"],
    "options_hi": ["तापमान", "दबाव", "प्रवाह", "स्तर"],
    "answer_en": "Flow",
    "answer_hi": "प्रवाह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the fourth stage in the construction process? (Planning, Design, Procurement, Construction, Commissioning)",
    "question_hi": "निर्माण प्रक्रिया में चौथा चरण कौन सा है? (योजना, डिजाइन, खरीद, निर्माण, कमीशनिंग)",
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
    "options_en": ["Solar", "Wind", "Hydro", "Geothermal"],
    "options_hi": ["सौर", "पवन", "जल", "भूतापीय"],
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
    "question_en": "What is the third type of computer memory? (Register, Cache, RAM, ROM, HDD)",
    "question_hi": "कंप्यूटर मेमोरी का तीसरा प्रकार कौन सा है? (रजिस्टर, कैश, RAM, ROM, HDD)",
    "options_en": ["Register", "Cache", "RAM", "ROM"],
    "options_hi": ["रजिस्टर", "कैश, RAM, ROM"],
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
    "question_en": "What is the third step in the data analysis process? (Data Collection, Data Cleaning, Data Analysis, Data Visualization, Interpretation)",
    "question_hi": "डेटा विश्लेषण प्रक्रिया में तीसरा चरण कौन सा है? (डेटा संग्रह, डेटा सफाई, डेटा विश्लेषण, डेटा विज़ुअलाइज़ेशन, व्याख्या)",
    "options_en": ["Data Collection", "Data Cleaning", "Data Analysis", "Data Visualization"],
    "options_hi": ["डेटा संग्रह", "डेटा सफाई", "डेटा विश्लेषण", "डेटा विज़ुअलाइज़ेशन"],
    "answer_en": "Data Analysis",
    "answer_hi": "डेटा विश्लेषण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the fourth type of motor? (DC, AC Synchronous, AC Induction, Stepper, Servo)",
    "question_hi": "मोटर का चौथा प्रकार कौन सा है? (DC, AC सिंक्रोनस, AC इंडक्शन, स्टेपर, सर्वो)",
    "options_en": ["DC", "AC Synchronous", "AC Induction", "Stepper"],
    "options_hi": ["DC", "AC सिंक्रोनस", "AC इंडक्शन", "स्टेपर"],
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
    "question_en": "What is the fourth type of building foundation? (Shallow, Deep, Pile, Raft, Combined)",
    "question_hi": "भवन नींव का चौथा प्रकार कौन सा है? (उथला, गहरा, ढेर, राफ्ट, संयुक्त)",
    "options_en": ["Shallow", "Deep", "Pile", "Raft"],
    "options_hi": ["उथला", "गहरा", "ढेर", "राफ्ट"],
    "answer_en": "Raft",
    "answer_hi": "राफ्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the third step in the research process? (Problem Identification, Literature Review, Research Design, Data Collection, Analysis)",
    "question_hi": "शोध प्रक्रिया में तीसरा चरण कौन सा है? (समस्या पहचान, साहित्य समीक्षा, शोध डिजाइन, डेटा संग्रह, विश्लेषण)",
    "options_en": ["Problem Identification", "Literature Review", "Research Design", "Data Collection"],
    "options_hi": ["समस्या पहचान", "साहित्य समीक्षा", "शोध डिजाइन", "डेटा संग्रह"],
    "answer_en": "Research Design",
    "answer_hi": "शोध डिजाइन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the fourth type of measurement scale? (Nominal, Ordinal, Interval, Ratio)",
    "question_hi": "माप पैमाने का चौथा प्रकार कौन सा है? (नामिक, क्रमसूचक, अंतराल, अनुपात)",
    "options_en": ["Nominal", "Ordinal", "Interval", "Ratio"],
    "options_hi": ["नामिक", "क्रमसूचक", "अंतराल", "अनुपात"],
    "answer_en": "Ratio",
    "answer_hi": "अनुपात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the third stage in the supply chain? (Plan, Source, Make, Deliver, Return)",
    "question_hi": "सप्लाई चेन में तीसरा चरण कौन सा है? (योजना, स्रोत, निर्माण, वितरण, वापसी)",
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
    "options_en": ["Metals", "Ceramics", "Polymers", "Composites"],
    "options_hi": ["धातु", "सिरेमिक", "पॉलिमर", "कम्पोजिट"],
    "answer_en": "Composites",
    "answer_hi": "कम्पोजिट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the third step in the decision-making process? (Identify Problem, Gather Information, Evaluate Alternatives, Choose Alternative, Implement)",
    "question_hi": "निर्णय लेने की प्रक्रिया में तीसरा चरण कौन सा है? (समस्या पहचान, जानकारी एकत्र करना, विकल्पों का मूल्यांकन, विकल्प चुनना, कार्यान्वयन)",
    "options_en": ["Identify Problem", "Gather Information", "Evaluate Alternatives", "Choose Alternative"],
    "options_hi": ["समस्या पहचान", "जानकारी एकत्र करना", "विकल्पों का मूल्यांकन", "विकल्प चुनना"],
    "answer_en": "Evaluate Alternatives",
    "answer_hi": "विकल्पों का मूल्यांकन",
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
    "num": 45,
    "question_en": "What is the fourth type of database? (Hierarchical, Network, Relational, Object-oriented, NoSQL)",
    "question_hi": "डेटाबेस का चौथा प्रकार कौन सा है? (पदानुक्रमित, नेटवर्क, संबंधपरक, वस्तु-उन्मुख, NoSQL)",
    "options_en": ["Network", "Relational", "Object-oriented", "NoSQL"],
    "options_hi": ["नेटवर्क", "संबंधपरक", "वस्तु-उन्मुख", "NoSQL"],
    "answer_en": "Object-oriented",
    "answer_hi": "वस्तु-उन्मुख",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the third step in the maintenance process? (Inspection, Detection, Correction, Prevention)",
    "question_hi": "रखरखाव प्रक्रिया में तीसरा चरण कौन सा है? (निरीक्षण, पहचान, सुधार, रोकथाम)",
    "options_en": ["Inspection", "Detection", "Correction", "Prevention"],
    "options_hi": ["निरीक्षण", "पहचान", "सुधार", "रोकथाम"],
    "answer_en": "Correction",
    "answer_hi": "सुधार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the fourth type of computer network? (PAN, LAN, MAN, WAN, VPN)",
    "question_hi": "कंप्यूटर नेटवर्क का चौथा प्रकार कौन सा है? (PAN, LAN, MAN, WAN, VPN)",
    "options_en": ["LAN", "MAN", "WAN", "VPN"],
    "options_hi": ["LAN", "MAN", "WAN", "VPN"],
    "answer_en": "WAN",
    "answer_hi": "WAN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the third stage in the butterfly life cycle? (Egg, Larva, Pupa, Adult)",
    "question_hi": "तितली के जीवन चक्र में तीसरा चरण कौन सा है? (अंडा, लार्वा, प्यूपा, वयस्क)",
    "options_en": ["Egg", "Larva", "Pupa", "Adult"],
    "options_hi": ["अंडा", "लार्वा", "प्यूपा", "वयस्क"],
    "answer_en": "Pupa",
    "answer_hi": "प्यूपा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the fourth step in the problem-solving process? (Define, Analyze, Generate Solutions, Select Solution, Implement, Evaluate)",
    "question_hi": "समस्या-समाधान प्रक्रिया में चौथा चरण कौन सा है? (परिभाषित, विश्लेषण, समाधान उत्पन्न करना, समाधान चुनना, कार्यान्वयन, मूल्यांकन)",
    "options_en": ["Analyze", "Generate Solutions", "Select Solution", "Implement"],
    "options_hi": ["विश्लेषण", "समाधान उत्पन्न करना", "समाधान चुनना", "कार्यान्वयन"],
    "answer_en": "Select Solution",
    "answer_hi": "समाधान चुनना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the third type of power plant? (Thermal, Hydro, Nuclear, Solar, Wind)",
    "question_hi": "पावर प्लांट का तीसरा प्रकार कौन सा है? (थर्मल, हाइड्रो, न्यूक्लियर, सौर, पवन)",
    "options_en": ["Thermal", "Hydro", "Nuclear", "Solar"],
    "options_hi": ["थर्मल", "हाइड्रो", "न्यूक्लियर", "सौर"],
    "answer_en": "Nuclear",
    "answer_hi": "न्यूक्लियर",
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