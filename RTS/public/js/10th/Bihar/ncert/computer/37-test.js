const questions=[
  {
    "num": 1,
    "question_en": "What is the primary function of system software?",
    "question_hi": "सिस्टम सॉफ्टवेयर का प्राथमिक कार्य क्या है?",
    "options_en": ["Run user applications", "Manage hardware resources", "Create documents", "Browse internet"],
    "options_hi": ["उपयोगकर्ता अनुप्रयोग चलाना", "हार्डवेयर संसाधन प्रबंधित करना", "दस्तावेज़ बनाना", "इंटरनेट ब्राउज़ करना"],
    "answer_en": "Manage hardware resources",
    "answer_hi": "हार्डवेयर संसाधन प्रबंधित करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which device converts AC to DC power in computers?",
    "question_hi": "कंप्यूटर में एसी को डीसी पावर में कौन सा उपकरण बदलता है?",
    "options_en": ["SMPS", "CPU", "RAM", "Motherboard"],
    "options_hi": ["एसएमपीएस", "सीपीयू", "रैम", "मदरबोर्ड"],
    "answer_en": "SMPS",
    "answer_hi": "एसएमपीएस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does BIOS stand for?",
    "question_hi": "BIOS का पूरा नाम क्या है?",
    "options_en": ["Basic Input Output System", "Binary Input Output System", "Basic Integrated Operating System", "Binary Integrated Operating System"],
    "options_hi": ["बेसिक इनपुट आउटपुट सिस्टम", "बाइनरी इनपुट आउटपुट सिस्टम", "बेसिक इंटीग्रेटेड ऑपरेटिंग सिस्टम", "बाइनरी इंटीग्रेटेड ऑपरेटिंग सिस्टम"],
    "answer_en": "Basic Input Output System",
    "answer_hi": "बेसिक इनपुट आउटपुट सिस्टम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which protocol is used for email reception?",
    "question_hi": "ईमेल प्राप्ति के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
    "options_en": ["SMTP", "POP3", "FTP", "HTTP"],
    "options_hi": ["एसएमटीपी", "पीओपी3", "एफटीपी", "एचटीटीपी"],
    "answer_en": "POP3",
    "answer_hi": "पीओपी3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the purpose of cache memory?",
    "question_hi": "कैश मेमोरी का उद्देश्य क्या है?",
    "options_en": ["Long-term storage", "Store BIOS settings", "Speed up CPU access", "Backup data"],
    "options_hi": ["लंबी अवधि का भंडारण", "BIOS सेटिंग्स संग्रहीत करना", "सीपीयू एक्सेस गति बढ़ाना", "डेटा बैकअप"],
    "answer_en": "Speed up CPU access",
    "answer_hi": "सीपीयू एक्सेस गति बढ़ाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which component stores the bootloader?",
    "question_hi": "बूटलोडर किस घटक में संग्रहीत होता है?",
    "options_en": ["RAM", "Hard Drive", "ROM", "Cache"],
    "options_hi": ["रैम", "हार्ड ड्राइव", "रोम", "कैश"],
    "answer_en": "ROM",
    "answer_hi": "रोम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the function of an assembler?",
    "question_hi": "असेम्बलर का कार्य क्या है?",
    "options_en": ["Convert high-level to machine code", "Convert assembly to machine code", "Execute programs", "Debug code"],
    "options_hi": ["हाई-लेवल को मशीन कोड में बदलना", "असेम्बली को मशीन कोड में बदलना", "प्रोग्राम एक्सेक्यूट करना", "कोड डीबग करना"],
    "answer_en": "Convert assembly to machine code",
    "answer_hi": "असेम्बली को मशीन कोड में बदलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which topology uses a central connection point?",
    "question_hi": "कौन सा टोपोलॉजी केंद्रीय कनेक्शन पॉइंट का उपयोग करता है?",
    "options_en": ["Bus", "Star", "Ring", "Mesh"],
    "options_hi": ["बस", "स्टार", "रिंग", "मेश"],
    "answer_en": "Star",
    "answer_hi": "स्टार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What does DNS resolve?",
    "question_hi": "DNS क्या रिज़ॉल्व करता है?",
    "options_en": ["IP to MAC addresses", "Domain names to IP addresses", "IP to domain names", "MAC to IP addresses"],
    "options_hi": ["आईपी से मैक एड्रेस", "डोमेन नेम से आईपी एड्रेस", "आईपी से डोमेन नेम", "मैक से आईपी एड्रेस"],
    "answer_en": "Domain names to IP addresses",
    "answer_hi": "डोमेन नेम से आईपी एड्रेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which programming paradigm uses objects?",
    "question_hi": "कौन सा प्रोग्रामिंग पैराडाइम ऑब्जेक्ट्स का उपयोग करता है?",
    "options_en": ["Procedural", "Functional", "Object-oriented", "Logical"],
    "options_hi": ["प्रोसीजरल", "फंक्शनल", "ऑब्जेक्ट-ओरिएंटेड", "लॉजिकल"],
    "answer_en": "Object-oriented",
    "answer_hi": "ऑब्जेक्ट-ओरिएंटेड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is RAID used for?",
    "question_hi": "RAID किसके लिए उपयोग किया जाता है?",
    "options_en": ["Virus protection", "Data redundancy", "Network security", "Speed up internet"],
    "options_hi": ["वायरस सुरक्षा", "डेटा रिडंडेंसी", "नेटवर्क सुरक्षा", "इंटरनेट गति बढ़ाना"],
    "answer_en": "Data redundancy",
    "answer_hi": "डेटा रिडंडेंसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which port is used for HTTPS?",
    "question_hi": "HTTPS के लिए किस पोर्ट का उपयोग किया जाता है?",
    "options_en": ["80", "443", "21", "25"],
    "options_hi": ["80", "443", "21", "25"],
    "answer_en": "443",
    "answer_hi": "443",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the function of ALU?",
    "question_hi": "ALU का कार्य क्या है?",
    "options_en": ["Store data", "Perform calculations", "Control operations", "Manage memory"],
    "options_hi": ["डेटा संग्रहीत करना", "गणना करना", "ऑपरेशन नियंत्रित करना", "मेमोरी प्रबंधित करना"],
    "answer_en": "Perform calculations",
    "answer_hi": "गणना करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which IEEE standard defines Wi-Fi?",
    "question_hi": "कौन सा IEEE मानक वाई-फाई को परिभाषित करता है?",
    "options_en": ["802.3", "802.11", "802.15", "802.16"],
    "options_hi": ["802.3", "802.11", "802.15", "802.16"],
    "answer_en": "802.11",
    "answer_hi": "802.11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is a compiler?",
    "question_hi": "कंपाइलर क्या है?",
    "options_en": ["Hardware device", "System software", "Application software", "Utility program"],
    "options_hi": ["हार्डवेयर डिवाइस", "सिस्टम सॉफ्टवेयर", "एप्लिकेशन सॉफ्टवेयर", "यूटिलिटी प्रोग्राम"],
    "answer_en": "System software",
    "answer_hi": "सिस्टम सॉफ्टवेयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which storage has fastest access time?",
    "question_hi": "किस भंडारण की एक्सेस टाइम सबसे तेज़ होती है?",
    "options_en": ["HDD", "SSD", "Optical disk", "Magnetic tape"],
    "options_hi": ["एचडीडी", "एसएसडी", "ऑप्टिकल डिस्क", "मैग्नेटिक टेप"],
    "answer_en": "SSD",
    "answer_hi": "एसएसडी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What does VPN provide?",
    "question_hi": "VPN क्या प्रदान करता है?",
    "options_en": ["Faster internet", "Secure connection", "Free storage", "Better graphics"],
    "options_hi": ["तेज़ इंटरनेट", "सुरक्षित कनेक्शन", "मुफ्त भंडारण", "बेहतर ग्राफिक्स"],
    "answer_en": "Secure connection",
    "answer_hi": "सुरक्षित कनेक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which language is interpreted?",
    "question_hi": "कौन सी भाषा इंटरप्रेटेड है?",
    "options_en": ["C", "C++", "Python", "Java"],
    "options_hi": ["सी", "सी++", "पाइथन", "जावा"],
    "answer_en": "Python",
    "answer_hi": "पाइथन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the role of kernel?",
    "question_hi": "कर्नेल की भूमिका क्या है?",
    "options_en": ["User interface", "Core of OS", "File manager", "Network controller"],
    "options_hi": ["उपयोगकर्ता इंटरफेस", "ओएस का कोर", "फ़ाइल मैनेजर", "नेटवर्क नियंत्रक"],
    "answer_en": "Core of OS",
    "answer_hi": "ओएस का कोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which device has MAC address?",
    "question_hi": "किस उपकरण में MAC एड्रेस होता है?",
    "options_en": ["Router", "Switch", "Network Interface Card", "All of these"],
    "options_hi": ["राउटर", "स्विच", "नेटवर्क इंटरफेस कार्ड", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is cloud computing?",
    "question_hi": "क्लाउड कंप्यूटिंग क्या है?",
    "options_en": ["Local storage", "Internet-based services", "Hardware maintenance", "Software installation"],
    "options_hi": ["स्थानीय भंडारण", "इंटरनेट-आधारित सेवाएं", "हार्डवेयर रखरखाव", "सॉफ्टवेयर इंस्टॉलेशन"],
    "answer_en": "Internet-based services",
    "answer_hi": "इंटरनेट-आधारित सेवाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which protocol is connection-oriented?",
    "question_hi": "कौन सा प्रोटोकॉल कनेक्शन-ओरिएंटेड है?",
    "options_en": ["UDP", "TCP", "IP", "ICMP"],
    "options_hi": ["यूडीपी", "टीसीपी", "आईपी", "आईसीएमपी"],
    "answer_en": "TCP",
    "answer_hi": "टीसीपी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is polymorphism in OOP?",
    "question_hi": "OOP में पॉलीमॉर्फिज्म क्या है?",
    "options_en": ["Data hiding", "Multiple forms", "Inheritance", "Encapsulation"],
    "options_hi": ["डेटा छिपाना", "कई रूप", "इनहेरिटेंस", "एनकैप्सुलेशन"],
    "answer_en": "Multiple forms",
    "answer_hi": "कई रूप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which is volatile memory?",
    "question_hi": "कौन सी वोलेटाइल मेमोरी है?",
    "options_en": ["ROM", "PROM", "RAM", "EEPROM"],
    "options_hi": ["रोम", "प्रोम", "रैम", "ईईप्रोम"],
    "answer_en": "RAM",
    "answer_hi": "रैम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What does SQL stand for?",
    "question_hi": "SQL का पूरा नाम क्या है?",
    "options_en": ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"],
    "options_hi": ["स्ट्रक्चर्ड क्वेरी लैंग्वेज", "सिंपल क्वेरी लैंग्वेज", "स्टैंडर्ड क्वेरी लैंग्वेज", "सिस्टम क्वेरी लैंग्वेज"],
    "answer_en": "Structured Query Language",
    "answer_hi": "स्ट्रक्चर्ड क्वेरी लैंग्वेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which is an output device?",
    "question_hi": "कौन सा आउटपुट डिवाइस है?",
    "options_en": ["Keyboard", "Mouse", "Printer", "Scanner"],
    "options_hi": ["कीबोर्ड", "माउस", "प्रिंटर", "स्कैनर"],
    "answer_en": "Printer",
    "answer_hi": "प्रिंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is bandwidth?",
    "question_hi": "बैंडविड्थ क्या है?",
    "options_en": ["Data storage capacity", "Network transmission capacity", "CPU speed", "Memory size"],
    "options_hi": ["डेटा भंडारण क्षमता", "नेटवर्क ट्रांसमिशन क्षमता", "सीपीयू गति", "मेमोरी आकार"],
    "answer_en": "Network transmission capacity",
    "answer_hi": "नेटवर्क ट्रांसमिशन क्षमता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which company created Java?",
    "question_hi": "जावा किस कंपनी ने बनाया?",
    "options_en": ["Microsoft", "Sun Microsystems", "Oracle", "Google"],
    "options_hi": ["माइक्रोसॉफ्ट", "सन माइक्रोसिस्टम्स", "ओरेकल", "गूगल"],
    "answer_en": "Sun Microsystems",
    "answer_hi": "सन माइक्रोसिस्टम्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is binary system base?",
    "question_hi": "बाइनरी सिस्टम का आधार क्या है?",
    "options_en": ["2", "8", "10", "16"],
    "options_hi": ["2", "8", "10", "16"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which key combination closes program?",
    "question_hi": "कौन सा कुंजी संयोजन प्रोग्राम बंद करता है?",
    "options_en": ["Ctrl+C", "Ctrl+V", "Alt+F4", "Ctrl+Z"],
    "options_hi": ["Ctrl+C", "Ctrl+V", "Alt+F4", "Ctrl+Z"],
    "answer_en": "Alt+F4",
    "answer_hi": "Alt+F4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What does IoT stand for?",
    "question_hi": "IoT का पूरा नाम क्या है?",
    "options_en": ["Internet of Things", "Internet of Technology", "Integrated Online Things", "Internal Operating Technology"],
    "options_hi": ["इंटरनेट ऑफ थिंग्स", "इंटरनेट ऑफ टेक्नोलॉजी", "इंटीग्रेटेड ऑनलाइन थिंग्स", "इंटरनल ऑपरेटिंग टेक्नोलॉजी"],
    "answer_en": "Internet of Things",
    "answer_hi": "इंटरनेट ऑफ थिंग्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which is system software?",
    "question_hi": "कौन सा सिस्टम सॉफ्टवेयर है?",
    "options_en": ["Word", "Excel", "Windows", "Photoshop"],
    "options_hi": ["वर्ड", "एक्सेल", "विंडोज", "फोटोशॉप"],
    "answer_en": "Windows",
    "answer_hi": "विंडोज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the purpose of UPS?",
    "question_hi": "UPS का उद्देश्य क्या है?",
    "options_en": ["Increase speed", "Provide backup power", "Cool system", "Connect networks"],
    "options_hi": ["गति बढ़ाना", "बैकअप पावर प्रदान करना", "सिस्टम ठंडा करना", "नेटवर्क कनेक्ट करना"],
    "answer_en": "Provide backup power",
    "answer_hi": "बैकअप पावर प्रदान करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which topology is most reliable?",
    "question_hi": "कौन सा टोपोलॉजी सबसे विश्वसनीय है?",
    "options_en": ["Bus", "Star", "Ring", "Mesh"],
    "options_hi": ["बस", "स्टार", "रिंग", "मेश"],
    "answer_en": "Mesh",
    "answer_hi": "मेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What does API stand for?",
    "question_hi": "API का पूरा नाम क्या है?",
    "options_en": ["Application Programming Interface", "Advanced Programming Interface", "Application Process Interface", "Advanced Process Interface"],
    "options_hi": ["एप्लिकेशन प्रोग्रामिंग इंटरफेस", "एडवांस्ड प्रोग्रामिंग इंटरफेस", "एप्लिकेशन प्रोसेस इंटरफेस", "एडवांस्ड प्रोसेस इंटरफेस"],
    "answer_en": "Application Programming Interface",
    "answer_hi": "एप्लिकेशन प्रोग्रामिंग इंटरफेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which device amplifies signals?",
    "question_hi": "कौन सा उपकरण सिग्नल प्रवर्धित करता है?",
    "options_en": ["Router", "Repeater", "Switch", "Hub"],
    "options_hi": ["राउटर", "रिपीटर", "स्विच", "हब"],
    "answer_en": "Repeater",
    "answer_hi": "रिपीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is encapsulation in OOP?",
    "question_hi": "OOP में एनकैप्सुलेशन क्या है?",
    "options_en": ["Data binding", "Data hiding", "Inheritance", "Polymorphism"],
    "options_hi": ["डेटा बाइंडिंग", "डेटा हाइडिंग", "इनहेरिटेंस", "पॉलीमॉर्फिज्म"],
    "answer_en": "Data hiding",
    "answer_hi": "डेटा हाइडिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which is input device?",
    "question_hi": "कौन सा इनपुट डिवाइस है?",
    "options_en": ["Monitor", "Speaker", "Joystick", "Printer"],
    "options_hi": ["मॉनिटर", "स्पीकर", "जॉयस्टिक", "प्रिंटर"],
    "answer_en": "Joystick",
    "answer_hi": "जॉयस्टिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is hexadecimal base?",
    "question_hi": "हेक्साडेसिमल का आधार क्या है?",
    "options_en": ["2", "8", "10", "16"],
    "options_hi": ["2", "8", "10", "16"],
    "answer_en": "16",
    "answer_hi": "16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which protocol transfers files?",
    "question_hi": "कौन सा प्रोटोकॉल फ़ाइलें स्थानांतरित करता है?",
    "options_en": ["HTTP", "FTP", "SMTP", "POP3"],
    "options_hi": ["एचटीटीपी", "एफटीपी", "एसएमटीपी", "पीओपी3"],
    "answer_en": "FTP",
    "answer_hi": "एफटीपी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is machine language?",
    "question_hi": "मशीन भाषा क्या है?",
    "options_en": ["English-like language", "Binary code", "High-level language", "Assembly language"],
    "options_hi": ["अंग्रेजी जैसी भाषा", "बाइनरी कोड", "हाई-लेवल भाषा", "असेम्बली भाषा"],
    "answer_en": "Binary code",
    "answer_hi": "बाइनरी कोड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which memory is fastest?",
    "question_hi": "कौन सी मेमोरी सबसे तेज़ है?",
    "options_en": ["RAM", "Cache", "ROM", "Hard disk"],
    "options_hi": ["रैम", "कैश", "रोम", "हार्ड डिस्क"],
    "answer_en": "Cache",
    "answer_hi": "कैश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What does CSS stand for?",
    "question_hi": "CSS का पूरा नाम क्या है?",
    "options_en": ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Content Style Sheets"],
    "options_hi": ["कंप्यूटर स्टाइल शीट्स", "कैस्केडिंग स्टाइल शीट्स", "क्रिएटिव स्टाइल शीट्स", "कंटेंट स्टाइल शीट्स"],
    "answer_en": "Cascading Style Sheets",
    "answer_hi": "कैस्केडिंग स्टाइल शीट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which device connects networks?",
    "question_hi": "कौन सा उपकरण नेटवर्क जोड़ता है?",
    "options_en": ["Switch", "Hub", "Router", "Repeater"],
    "options_hi": ["स्विच", "हब", "राउटर", "रिपीटर"],
    "answer_en": "Router",
    "answer_hi": "राउटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is inheritance in OOP?",
    "question_hi": "OOP में इनहेरिटेंस क्या है?",
    "options_en": ["Code reusability", "Data hiding", "Multiple forms", "Data binding"],
    "options_hi": ["कोड पुन: उपयोगिता", "डेटा छिपाना", "कई रूप", "डेटा बाइंडिंग"],
    "answer_en": "Code reusability",
    "answer_hi": "कोड पुन: उपयोगिता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which is secondary storage?",
    "question_hi": "कौन सा सेकेंडरी स्टोरेज है?",
    "options_en": ["RAM", "Cache", "Register", "Hard disk"],
    "options_hi": ["रैम", "कैश", "रजिस्टर", "हार्ड डिस्क"],
    "answer_en": "Hard disk",
    "answer_hi": "हार्ड डिस्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What does URL contain?",
    "question_hi": "URL में क्या शामिल होता है?",
    "options_en": ["Protocol, domain, path", "IP address only", "MAC address", "Domain only"],
    "options_hi": ["प्रोटोकॉल, डोमेन, पाथ", "केवल IP एड्रेस", "MAC एड्रेस", "केवल डोमेन"],
    "answer_en": "Protocol, domain, path",
    "answer_hi": "प्रोटोकॉल, डोमेन, पाथ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which is open source OS?",
    "question_hi": "कौन सा ओपन सोर्स OS है?",
    "options_en": ["Windows", "macOS", "Linux", "iOS"],
    "options_hi": ["विंडोज", "macOS", "लिनक्स", "iOS"],
    "answer_en": "Linux",
    "answer_hi": "लिनक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is phishing?",
    "question_hi": "फिशिंग क्या है?",
    "options_en": ["Virus type", "Cyber attack method", "Programming error", "Network protocol"],
    "options_hi": ["वायरस प्रकार", "साइबर हमला विधि", "प्रोग्रामिंग त्रुटि", "नेटवर्क प्रोटोकॉल"],
    "answer_en": "Cyber attack method",
    "answer_hi": "साइबर हमला विधि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which key combination pastes?",
    "question_hi": "कौन सा कुंजी संयोजन पेस्ट करता है?",
    "options_en": ["Ctrl+C", "Ctrl+V", "Ctrl+X", "Ctrl+Z"],
    "options_hi": ["Ctrl+C", "Ctrl+V", "Ctrl+X", "Ctrl+Z"],
    "answer_en": "Ctrl+V",
    "answer_hi": "Ctrl+V",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is data mining?",
    "question_hi": "डेटा माइनिंग क्या है?",
    "options_en": ["Storing data", "Extracting patterns", "Deleting data", "Transferring data"],
    "options_hi": ["डेटा संग्रहीत करना", "पैटर्न निकालना", "डेटा हटाना", "डेटा स्थानांतरित करना"],
    "answer_en": "Extracting patterns",
    "answer_hi": "पैटर्न निकालना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which network is largest?",
    "question_hi": "कौन सा नेटवर्क सबसे बड़ा है?",
    "options_en": ["LAN", "MAN", "WAN", "PAN"],
    "options_hi": ["लैन", "मैन", "वैन", "पैन"],
    "answer_en": "WAN",
    "answer_hi": "वैन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is algorithm?",
    "question_hi": "एल्गोरिदम क्या है?",
    "options_en": ["Programming language", "Step-by-step procedure", "Hardware device", "Data type"],
    "options_hi": ["प्रोग्रामिंग भाषा", "चरणबद्ध प्रक्रिया", "हार्डवेयर डिवाइस", "डेटा प्रकार"],
    "answer_en": "Step-by-step procedure",
    "answer_hi": "चरणबद्ध प्रक्रिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which is optical storage?",
    "question_hi": "कौन सा ऑप्टिकल स्टोरेज है?",
    "options_en": ["Hard disk", "SSD", "CD-ROM", "USB drive"],
    "options_hi": ["हार्ड डिस्क", "एसएसडी", "सीडी-रोम", "यूएसबी ड्राइव"],
    "answer_en": "CD-ROM",
    "answer_hi": "सीडी-रोम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What does IDE stand for?",
    "question_hi": "IDE का पूरा नाम क्या है?",
    "options_en": ["Integrated Development Environment", "Internal Development Environment", "Integrated Design Environment", "Internal Design Environment"],
    "options_hi": ["इंटीग्रेटेड डेवलपमेंट एनवायरनमेंट", "इंटरनल डेवलपमेंट एनवायरनमेंट", "इंटीग्रेटेड डिज़ाइन एनवायरनमेंट", "इंटरनल डिज़ाइन एनवायरनमेंट"],
    "answer_en": "Integrated Development Environment",
    "answer_hi": "इंटीग्रेटेड डेवलपमेंट एनवायरनमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Which protocol is connectionless?",
    "question_hi": "कौन सा प्रोटोकॉल कनेक्शनलेस है?",
    "options_en": ["TCP", "UDP", "FTP", "HTTP"],
    "options_hi": ["टीसीपी", "यूडीपी", "एफटीपी", "एचटीटीपी"],
    "answer_en": "UDP",
    "answer_hi": "यूडीपी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is multitasking?",
    "question_hi": "मल्टीटास्किंग क्या है?",
    "options_en": ["Multiple users", "Multiple tasks", "Multiple CPUs", "Multiple networks"],
    "options_hi": ["एकाधिक उपयोगकर्ता", "एकाधिक कार्य", "एकाधिक सीपीयू", "एकाधिक नेटवर्क"],
    "answer_en": "Multiple tasks",
    "answer_hi": "एकाधिक कार्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which is primary memory?",
    "question_hi": "कौन सी प्राइमरी मेमोरी है?",
    "options_en": ["Hard disk", "CD", "RAM", "Pen drive"],
    "options_hi": ["हार्ड डिस्क", "सीडी", "रैम", "पेन ड्राइव"],
    "answer_en": "RAM",
    "answer_hi": "रैम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is syntax?",
    "question_hi": "सिंटैक्स क्या है?",
    "options_en": ["Program logic", "Grammar rules", "Output format", "Data structure"],
    "options_hi": ["प्रोग्राम लॉजिक", "व्याकरण नियम", "आउटपुट फॉर्मेट", "डेटा स्ट्रक्चर"],
    "answer_en": "Grammar rules",
    "answer_hi": "व्याकरण नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which key combination undoes?",
    "question_hi": "कौन सा कुंजी संयोजन अनडू करता है?",
    "options_en": ["Ctrl+Z", "Ctrl+Y", "Ctrl+X", "Ctrl+C"],
    "options_hi": ["Ctrl+Z", "Ctrl+Y", "Ctrl+X", "Ctrl+C"],
    "answer_en": "Ctrl+Z",
    "answer_hi": "Ctrl+Z",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is bus in computer?",
    "question_hi": "कंप्यूटर में बस क्या है?",
    "options_en": ["Transportation vehicle", "Data pathway", "Power supply", "Network cable"],
    "options_hi": ["परिवहन वाहन", "डेटा पथ", "पावर सप्लाई", "नेटवर्क केबल"],
    "answer_en": "Data pathway",
    "answer_hi": "डेटा पथ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which is system call?",
    "question_hi": "कौन सा सिस्टम कॉल है?",
    "options_en": ["Function in program", "OS service request", "User command", "Network message"],
    "options_hi": ["प्रोग्राम में फंक्शन", "OS सेवा अनुरोध", "उपयोगकर्ता कमांड", "नेटवर्क संदेश"],
    "answer_en": "OS service request",
    "answer_hi": "OS सेवा अनुरोध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is firmware?",
    "question_hi": "फर्मवेयर क्या है?",
    "options_en": ["Hardware component", "Software on hardware", "Application software", "Network protocol"],
    "options_hi": ["हार्डवेयर घटक", "हार्डवेयर पर सॉफ्टवेयर", "एप्लिकेशन सॉफ्टवेयर", "नेटवर्क प्रोटोकॉल"],
    "answer_en": "Software on hardware",
    "answer_hi": "हार्डवेयर पर सॉफ्टवेयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which is magnetic storage?",
    "question_hi": "कौन सा मैग्नेटिक स्टोरेज है?",
    "options_en": ["SSD", "CD", "Hard disk", "Pen drive"],
    "options_hi": ["एसएसडी", "सीडी", "हार्ड डिस्क", "पेन ड्राइव"],
    "answer_en": "Hard disk",
    "answer_hi": "हार्ड डिस्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is deadlock?",
    "question_hi": "डेडलॉक क्या है?",
    "options_en": ["Network failure", "Process blockage", "Memory full", "Power outage"],
    "options_hi": ["नेटवर्क विफलता", "प्रक्रिया अवरोध", "मेमोरी भर जाना", "बिजली बंद होना"],
    "answer_en": "Process blockage",
    "answer_hi": "प्रक्रिया अवरोध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Which key combination saves as?",
    "question_hi": "कौन सा कुंजी संयोजन सेव एस करता है?",
    "options_en": ["Ctrl+S", "F12", "Ctrl+P", "Ctrl+N"],
    "options_hi": ["Ctrl+S", "F12", "Ctrl+P", "Ctrl+N"],
    "answer_en": "F12",
    "answer_hi": "F12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is virtual memory?",
    "question_hi": "वर्चुअल मेमोरी क्या है?",
    "options_en": ["RAM extension", "Cache memory", "ROM memory", "Hard disk space"],
    "options_hi": ["रैम एक्सटेंशन", "कैश मेमोरी", "रोम मेमोरी", "हार्ड डिस्क स्पेस"],
    "answer_en": "RAM extension",
    "answer_hi": "रैम एक्सटेंशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which is network layer device?",
    "question_hi": "कौन सा नेटवर्क लेयर डिवाइस है?",
    "options_en": ["Hub", "Switch", "Router", "Repeater"],
    "options_hi": ["हब", "स्विच", "राउटर", "रिपीटर"],
    "answer_en": "Router",
    "answer_hi": "राउटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is cookie in web?",
    "question_hi": "वेब में कुकी क्या है?",
    "options_en": ["Malware", "Small data file", "Programming language", "Network protocol"],
    "options_hi": ["मैलवेयर", "छोटी डेटा फ़ाइल", "प्रोग्रामिंग भाषा", "नेटवर्क प्रोटोकॉल"],
    "answer_en": "Small data file",
    "answer_hi": "छोटी डेटा फ़ाइल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which is programming tool?",
    "question_hi": "कौन सा प्रोग्रामिंग टूल है?",
    "options_en": ["Compiler", "OS", "Browser", "Word processor"],
    "options_hi": ["कंपाइलर", "OS", "ब्राउज़र", "वर्ड प्रोसेसर"],
    "answer_en": "Compiler",
    "answer_hi": "कंपाइलर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is throughput?",
    "question_hi": "थ्रूपुट क्या है?",
    "options_en": ["Data processed per time", "Storage capacity", "Network range", "CPU speed"],
    "options_hi": ["प्रति समय प्रोसेस्ड डेटा", "भंडारण क्षमता", "नेटवर्क रेंज", "सीपीयू गति"],
    "answer_en": "Data processed per time",
    "answer_hi": "प्रति समय प्रोसेस्ड डेटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which is data link device?",
    "question_hi": "कौन सा डेटा लिंक डिवाइस है?",
    "options_en": ["Router", "Switch", "Gateway", "Repeater"],
    "options_hi": ["राउटर", "स्विच", "गेटवे", "रिपीटर"],
    "answer_en": "Switch",
    "answer_hi": "स्विच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is recursion?",
    "question_hi": "रिकर्सन क्या है?",
    "options_en": ["Loop structure", "Function calling itself", "Data structure", "Algorithm type"],
    "options_hi": ["लूप स्ट्रक्चर", "फंक्शन खुद को कॉल करना", "डेटा स्ट्रक्चर", "एल्गोरिदम प्रकार"],
    "answer_en": "Function calling itself",
    "answer_hi": "फंक्शन खुद को कॉल करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which key combination prints?",
    "question_hi": "कौन सा कुंजी संयोजन प्रिंट करता है?",
    "options_en": ["Ctrl+P", "Ctrl+S", "Ctrl+O", "Ctrl+N"],
    "options_hi": ["Ctrl+P", "Ctrl+S", "Ctrl+O", "Ctrl+N"],
    "answer_en": "Ctrl+P",
    "answer_hi": "Ctrl+P",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is malware?",
    "question_hi": "मैलवेयर क्या है?",
    "options_en": ["Useful software", "Malicious software", "System software", "Application software"],
    "options_hi": ["उपयोगी सॉफ्टवेयर", "दुर्भावनापूर्ण सॉफ्टवेयर", "सिस्टम सॉफ्टवेयर", "एप्लिकेशन सॉफ्टवेयर"],
    "answer_en": "Malicious software",
    "answer_hi": "दुर्भावनापूर्ण सॉफ्टवेयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Which is physical layer device?",
    "question_hi": "कौन सा फिजिकल लेयर डिवाइस है?",
    "options_en": ["Router", "Switch", "Hub", "Gateway"],
    "options_hi": ["राउटर", "स्विच", "हब", "गेटवे"],
    "answer_en": "Hub",
    "answer_hi": "हब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is array?",
    "question_hi": "ऐरे क्या है?",
    "options_en": ["Single variable", "Collection of variables", "Function type", "Loop structure"],
    "options_hi": ["एकल वेरिएबल", "वेरिएबल्स का संग्रह", "फंक्शन प्रकार", "लूप स्ट्रक्चर"],
    "answer_en": "Collection of variables",
    "answer_hi": "वेरिएबल्स का संग्रह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which key combination finds?",
    "question_hi": "कौन सा कुंजी संयोजन ढूंढता है?",
    "options_en": ["Ctrl+F", "Ctrl+H", "Ctrl+G", "Ctrl+E"],
    "options_hi": ["Ctrl+F", "Ctrl+H", "Ctrl+G", "Ctrl+E"],
    "answer_en": "Ctrl+F",
    "answer_hi": "Ctrl+F",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is bandwidth measured in?",
    "question_hi": "बैंडविड्थ किसमें मापी जाती है?",
    "options_en": ["Bytes", "Bits per second", "Hertz", "Watts"],
    "options_hi": ["बाइट्स", "बिट्स प्रति सेकंड", "हर्ट्ज", "वाट"],
    "answer_en": "Bits per second",
    "answer_hi": "बिट्स प्रति सेकंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which is volatile storage?",
    "question_hi": "कौन सा वोलेटाइल स्टोरेज है?",
    "options_en": ["Hard disk", "CD", "RAM", "Pen drive"],
    "options_hi": ["हार्ड डिस्क", "सीडी", "रैम", "पेन ड्राइव"],
    "answer_en": "RAM",
    "answer_hi": "रैम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is bug in programming?",
    "question_hi": "प्रोग्रामिंग में बग क्या है?",
    "options_en": ["Feature", "Error", "Variable", "Function"],
    "options_hi": ["फीचर", "त्रुटि", "वेरिएबल", "फंक्शन"],
    "answer_en": "Error",
    "answer_hi": "त्रुटि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which key combination new document?",
    "question_hi": "कौन सा कुंजी संयोजन नया डॉक्यूमेंट बनाता है?",
    "options_en": ["Ctrl+N", "Ctrl+O", "Ctrl+S", "Ctrl+P"],
    "options_hi": ["Ctrl+N", "Ctrl+O", "Ctrl+S", "Ctrl+P"],
    "answer_en": "Ctrl+N",
    "answer_hi": "Ctrl+N",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is bandwidth sharing?",
    "question_hi": "बैंडविड्थ शेयरिंग क्या है?",
    "options_en": ["Multiple users", "Single user", "No sharing", "Limited access"],
    "options_hi": ["एकाधिक उपयोगकर्ता", "एकल उपयोगकर्ता", "कोई शेयरिंग नहीं", "सीमित पहुंच"],
    "answer_en": "Multiple users",
    "answer_hi": "एकाधिक उपयोगकर्ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which is storage interface?",
    "question_hi": "कौन सा स्टोरेज इंटरफेस है?",
    "options_en": ["USB", "CPU", "RAM", "Motherboard"],
    "options_hi": ["यूएसबी", "सीपीयू", "रैम", "मदरबोर्ड"],
    "answer_en": "USB",
    "answer_hi": "यूएसबी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is byte?",
    "question_hi": "बाइट क्या है?",
    "options_en": ["4 bits", "8 bits", "16 bits", "32 bits"],
    "options_hi": ["4 बिट्स", "8 बिट्स", "16 बिट्स", "32 बिट्स"],
    "answer_en": "8 bits",
    "answer_hi": "8 बिट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Which key combination replaces?",
    "question_hi": "कौन सा कुंजी संयोजन रिप्लेस करता है?",
    "options_en": ["Ctrl+H", "Ctrl+F", "Ctrl+R", "Ctrl+E"],
    "options_hi": ["Ctrl+H", "Ctrl+F", "Ctrl+R", "Ctrl+E"],
    "answer_en": "Ctrl+H",
    "answer_hi": "Ctrl+H",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is protocol?",
    "question_hi": "प्रोटोकॉल क्या है?",
    "options_en": ["Hardware device", "Communication rules", "Software program", "Data type"],
    "options_hi": ["हार्डवेयर डिवाइस", "संचार नियम", "सॉफ्टवेयर प्रोग्राम", "डेटा प्रकार"],
    "answer_en": "Communication rules",
    "answer_hi": "संचार नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which is flash memory?",
    "question_hi": "कौन सी फ्लैश मेमोरी है?",
    "options_en": ["Hard disk", "CD", "Pen drive", "Floppy disk"],
    "options_hi": ["हार्ड डिस्क", "सीडी", "पेन ड्राइव", "फ्लॉपी डिस्क"],
    "answer_en": "Pen drive",
    "answer_hi": "पेन ड्राइव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is DNS server?",
    "question_hi": "DNS सर्वर क्या है?",
    "options_en": ["Web server", "Email server", "Name resolution server", "File server"],
    "options_hi": ["वेब सर्वर", "ईमेल सर्वर", "नेम रिज़ॉल्यूशन सर्वर", "फ़ाइल सर्वर"],
    "answer_en": "Name resolution server",
    "answer_hi": "नेम रिज़ॉल्यूशन सर्वर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which key combination selects all?",
    "question_hi": "कौन सा कुंजी संयोजन सब कुछ सेलेक्ट करता है?",
    "options_en": ["Ctrl+A", "Ctrl+C", "Ctrl+V", "Ctrl+X"],
    "options_hi": ["Ctrl+A", "Ctrl+C", "Ctrl+V", "Ctrl+X"],
    "answer_en": "Ctrl+A",
    "answer_hi": "Ctrl+A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is spam?",
    "question_hi": "स्पैम क्या है?",
    "options_en": ["Useful email", "Unwanted email", "Important message", "System alert"],
    "options_hi": ["उपयोगी ईमेल", "अवांछित ईमेल", "महत्वपूर्ण संदेश", "सिस्टम अलर्ट"],
    "answer_en": "Unwanted email",
    "answer_hi": "अवांछित ईमेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which is network protocol?",
    "question_hi": "कौन सा नेटवर्क प्रोटोकॉल है?",
    "options_en": ["TCP/IP", "USB", "HDMI", "SATA"],
    "options_hi": ["टीसीपी/आईपी", "यूएसबी", "एचडीएमआई", "साटा"],
    "answer_en": "TCP/IP",
    "answer_hi": "टीसीपी/आईपी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is variable?",
    "question_hi": "वेरिएबल क्या है?",
    "options_en": ["Fixed value", "Changing value", "Function name", "Program name"],
    "options_hi": ["फिक्स्ड वैल्यू", "बदलती वैल्यू", "फंक्शन नाम", "प्रोग्राम नाम"],
    "answer_en": "Changing value",
    "answer_hi": "बदलती वैल्यू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which key combination redoes?",
    "question_hi": "कौन सा कुंजी संयोजन रीडू करता है?",
    "options_en": ["Ctrl+Y", "Ctrl+Z", "Ctrl+X", "Ctrl+C"],
    "options_hi": ["Ctrl+Y", "Ctrl+Z", "Ctrl+X", "Ctrl+C"],
    "answer_en": "Ctrl+Y",
    "answer_hi": "Ctrl+Y",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is kernel panic?",
    "question_hi": "कर्नेल पैनिक क्या है?",
    "options_en": ["System error", "Normal operation", "User login", "Program start"],
    "options_hi": ["सिस्टम त्रुटि", "सामान्य ऑपरेशन", "उपयोगकर्ता लॉगिन", "प्रोग्राम स्टार्ट"],
    "answer_en": "System error",
    "answer_hi": "सिस्टम त्रुटि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Which is data structure?",
    "question_hi": "कौन सा डेटा स्ट्रक्चर है?",
    "options_en": ["Array", "Function", "Loop", "Variable"],
    "options_hi": ["ऐरे", "फंक्शन", "लूप", "वेरिएबल"],
    "answer_en": "Array",
    "answer_hi": "ऐरे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is daemon process?",
    "question_hi": "डेमन प्रोसेस क्या है?",
    "options_en": ["User process", "Background process", "Foreground process", "System boot"],
    "options_hi": ["उपयोगकर्ता प्रक्रिया", "बैकग्राउंड प्रक्रिया", "फोरग्राउंड प्रक्रिया", "सिस्टम बूट"],
    "answer_en": "Background process",
    "answer_hi": "बैकग्राउंड प्रक्रिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which key combination cuts?",
    "question_hi": "कौन सा कुंजी संयोजन कट करता है?",
    "options_en": ["Ctrl+X", "Ctrl+C", "Ctrl+V", "Ctrl+Z"],
    "options_hi": ["Ctrl+X", "Ctrl+C", "Ctrl+V", "Ctrl+Z"],
    "answer_en": "Ctrl+X",
    "answer_hi": "Ctrl+X",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is peer-to-peer network?",
    "question_hi": "पीयर-टू-पीयर नेटवर्क क्या है?",
    "options_en": ["Client-server", "Equal computers", "Central server", "Hierarchical"],
    "options_hi": ["क्लाइंट-सर्वर", "समान कंप्यूटर", "केंद्रीय सर्वर", "पदानुक्रमित"],
    "answer_en": "Equal computers",
    "answer_hi": "समान कंप्यूटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which is programming paradigm?",
    "question_hi": "कौन सा प्रोग्रामिंग पैराडाइम है?",
    "options_en": ["Object-oriented", "Hardware", "Network", "Storage"],
    "options_hi": ["ऑब्जेक्ट-ओरिएंटेड", "हार्डवेयर", "नेटवर्क", "भंडारण"],
    "answer_en": "Object-oriented",
    "answer_hi": "ऑब्जेक्ट-ओरिएंटेड",
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