const questions=[
  {
    "num": 1,
    "question_en": "What is the primary purpose of an operating system?",
    "question_hi": "ऑपरेटिंग सिस्टम का प्राथमिक उद्देश्य क्या है?",
    "options_en": ["Manage computer hardware and software resources", "Create documents and presentations", "Connect to the internet", "Play multimedia files"],
    "options_hi": ["कंप्यूटर हार्डवेयर और सॉफ्टवेयर संसाधन प्रबंधित करना", "दस्तावेज़ और प्रस्तुतियाँ बनाना", "इंटरनेट से कनेक्ट होना", "मल्टीमीडिया फ़ाइलें चलाना"],
    "answer_en": "Manage computer hardware and software resources",
    "answer_hi": "कंप्यूटर हार्डवेयर और सॉफ्टवेयर संसाधन प्रबंधित करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which component is responsible for executing instructions in a computer?",
    "question_hi": "कंप्यूटर में निर्देशों को निष्पादित करने के लिए कौन सा घटक जिम्मेदार है?",
    "options_en": ["CPU", "RAM", "Hard Drive", "Motherboard"],
    "options_hi": ["CPU", "RAM", "हार्ड ड्राइव", "मदरबोर्ड"],
    "answer_en": "CPU",
    "answer_hi": "CPU",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What type of software is used to create and edit text documents?",
    "question_hi": "टेक्स्ट दस्तावेज़ बनाने और संपादित करने के लिए किस प्रकार के सॉफ्टवेयर का उपयोग किया जाता है?",
    "options_en": ["Word Processor", "Spreadsheet", "Presentation Software", "Database Software"],
    "options_hi": ["वर्ड प्रोसेसर", "स्प्रेडशीट", "प्रेजेंटेशन सॉफ्टवेयर", "डेटाबेस सॉफ्टवेयर"],
    "answer_en": "Word Processor",
    "answer_hi": "वर्ड प्रोसेसर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which device converts digital data to analog signals for transmission over telephone lines?",
    "question_hi": "कौन सा उपकरण टेलीफोन लाइनों पर ट्रांसमिशन के लिए डिजिटल डेटा को एनालॉग सिग्नल में परिवर्तित करता है?",
    "options_en": ["Modem", "Router", "Switch", "Hub"],
    "options_hi": ["मॉडेम", "राउटर", "स्विच", "हब"],
    "answer_en": "Modem",
    "answer_hi": "मॉडेम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the binary equivalent of the decimal number 10?",
    "question_hi": "दशमलव संख्या 10 का बाइनरी समकक्ष क्या है?",
    "options_en": ["1010", "1001", "1100", "1110"],
    "options_hi": ["1010", "1001", "1100", "1110"],
    "answer_en": "1010",
    "answer_hi": "1010",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which type of memory loses its contents when the computer is turned off?",
    "question_hi": "कंप्यूटर बंद होने पर किस प्रकार की मेमोरी अपनी सामग्री खो देती है?",
    "options_en": ["Volatile Memory", "Non-Volatile Memory", "Permanent Memory", "Secondary Memory"],
    "options_hi": ["वोलेटाइल मेमोरी", "नॉन-वोलेटाइल मेमोरी", "स्थायी मेमोरी", "द्वितीयक मेमोरी"],
    "answer_en": "Volatile Memory",
    "answer_hi": "वोलेटाइल मेमोरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What does the acronym 'URL' represent in web browsing?",
    "question_hi": "वेब ब्राउज़िंग में संक्षिप्त नाम 'URL' क्या दर्शाता है?",
    "options_en": ["Uniform Resource Locator", "Universal Resource Link", "Uniform Resource Link", "Universal Resource Locator"],
    "options_hi": ["यूनिफ़ॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लिंक", "यूनिफ़ॉर्म रिसोर्स लिंक", "यूनिवर्सल रिसोर्स लोकेटर"],
    "answer_en": "Uniform Resource Locator",
    "answer_hi": "यूनिफ़ॉर्म रिसोर्स लोकेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which key combination bypasses the Recycle Bin when deleting files?",
    "question_hi": "फ़ाइलें हटाते समय कौन सा की संयोजन रीसाइकिल बिन को बायपास करता है?",
    "options_en": ["Shift + Delete", "Ctrl + Delete", "Alt + Delete", "Delete + Enter"],
    "options_hi": ["Shift + Delete", "Ctrl + Delete", "Alt + Delete", "Delete + Enter"],
    "answer_en": "Shift + Delete",
    "answer_hi": "Shift + Delete",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What type of network connects computers within a limited geographical area like a school?",
    "question_hi": "स्कूल जैसे सीमित भौगोलिक क्षेत्र के भीतर कंप्यूटरों को जोड़ने वाले नेटवर्क का प्रकार क्या है?",
    "options_en": ["Local Area Network", "Wide Area Network", "Metropolitan Area Network", "Personal Area Network"],
    "options_hi": ["लोकल एरिया नेटवर्क", "वाइड एरिया नेटवर्क", "मेट्रोपॉलिटन एरिया नेटवर्क", "पर्सनल एरिया नेटवर्क"],
    "answer_en": "Local Area Network",
    "answer_hi": "लोकल एरिया नेटवर्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which company is the original developer of the Android mobile operating system?",
    "question_hi": "Android मोबाइल ऑपरेटिंग सिस्टम का मूल डेवलपर कौन सी कंपनी है?",
    "options_en": ["Google", "Microsoft", "Apple", "Samsung"],
    "options_hi": ["गूगल", "माइक्रोसॉफ्ट", "एप्पल", "सैमसंग"],
    "answer_en": "Google",
    "answer_hi": "गूगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the primary function of a firewall in network security?",
    "question_hi": "नेटवर्क सुरक्षा में फ़ायरवॉल का प्राथमिक कार्य क्या है?",
    "options_en": ["Prevent unauthorized access", "Increase internet speed", "Store backup files", "Manage email accounts"],
    "options_hi": ["अनधिकृत पहुंच रोकना", "इंटरनेट गति बढ़ाना", "बैकअप फ़ाइलें संग्रहित करना", "ईमेल खाते प्रबंधित करना"],
    "answer_en": "Prevent unauthorized access",
    "answer_hi": "अनधिकृत पहुंच रोकना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which programming language is primarily used for adding interactivity to web pages?",
    "question_hi": "वेब पेजों में इंटरैक्टिविटी जोड़ने के लिए मुख्य रूप से किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
    "options_en": ["JavaScript", "Python", "C++", "Java"],
    "options_hi": ["जावास्क्रिप्ट", "पायथन", "C++", "जावा"],
    "answer_en": "JavaScript",
    "answer_hi": "जावास्क्रिप्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What does 'BCC' stand for in email terminology?",
    "question_hi": "ईमेल शब्दावली में 'BCC' का क्या अर्थ है?",
    "options_en": ["Blind Carbon Copy", "Blind Copy Carbon", "Broad Carbon Copy", "Broad Copy Carbon"],
    "options_hi": ["ब्लाइंड कार्बन कॉपी", "ब्लाइंड कॉपी कार्बन", "ब्रॉड कार्बन कॉपी", "ब्रॉड कॉपी कार्बन"],
    "answer_en": "Blind Carbon Copy",
    "answer_hi": "ब्लाइंड कार्बन कॉपी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which storage technology uses flash memory and has no moving parts?",
    "question_hi": "कौन सी स्टोरेज टेक्नोलॉजी फ्लैश मेमोरी का उपयोग करती है और इसमें कोई चलने वाले भाग नहीं हैं?",
    "options_en": ["Solid State Drive", "Hard Disk Drive", "Optical Drive", "Magnetic Tape"],
    "options_hi": ["सॉलिड स्टेट ड्राइव", "हार्ड डिस्क ड्राइव", "ऑप्टिकल ड्राइव", "मैग्नेटिक टेप"],
    "answer_en": "Solid State Drive",
    "answer_hi": "सॉलिड स्टेट ड्राइव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the main purpose of the Arithmetic Logic Unit (ALU) in a CPU?",
    "question_hi": "CPU में अरिथमेटिक लॉजिक यूनिट (ALU) का मुख्य उद्देश्य क्या है?",
    "options_en": ["Perform mathematical and logical operations", "Store temporary data", "Control input/output devices", "Manage power consumption"],
    "options_hi": ["गणितीय और तार्किक संचालन करना", "अस्थायी डेटा संग्रहित करना", "इनपुट/आउटपुट डिवाइस नियंत्रित करना", "बिजली खपत प्रबंधित करना"],
    "answer_en": "Perform mathematical and logical operations",
    "answer_hi": "गणितीय और तार्किक संचालन करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which protocol provides secure encrypted communication over a computer network?",
    "question_hi": "कौन सा प्रोटोकॉल कंप्यूटर नेटवर्क पर सुरक्षित एन्क्रिप्टेड संचार प्रदान करता है?",
    "options_en": ["HTTPS", "HTTP", "FTP", "SMTP"],
    "options_hi": ["HTTPS", "HTTP", "FTP", "SMTP"],
    "answer_en": "HTTPS",
    "answer_hi": "HTTPS",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the smallest unit of measurement in digital data storage?",
    "question_hi": "डिजिटल डेटा स्टोरेज में माप की सबसे छोटी इकाई क्या है?",
    "options_en": ["Bit", "Byte", "Kilobyte", "Megabyte"],
    "options_hi": ["बिट", "बाइट", "किलोबाइट", "मेगाबाइट"],
    "answer_en": "Bit",
    "answer_hi": "बिट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyboard shortcut moves the cursor to the beginning of a document?",
    "question_hi": "कौन सा कीबोर्ड शॉर्टकट कर्सर को दस्तावेज़ की शुरुआत में ले जाता है?",
    "options_en": ["Ctrl + Home", "Ctrl + End", "Home", "End"],
    "options_hi": ["Ctrl + Home", "Ctrl + End", "Home", "End"],
    "answer_en": "Ctrl + Home",
    "answer_hi": "Ctrl + Home",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What does the acronym 'ISP' represent in internet terminology?",
    "question_hi": "इंटरनेट शब्दावली में संक्षिप्त नाम 'ISP' क्या दर्शाता है?",
    "options_en": ["Internet Service Provider", "Internet System Protocol", "Internet Security Protocol", "Internet Service Protocol"],
    "options_hi": ["इंटरनेट सेवा प्रदाता", "इंटरनेट सिस्टम प्रोटोकॉल", "इंटरनेट सुरक्षा प्रोटोकॉल", "इंटरनेट सेवा प्रोटोकॉल"],
    "answer_en": "Internet Service Provider",
    "answer_hi": "इंटरनेट सेवा प्रदाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which networking device connects multiple computers in a local network?",
    "question_hi": "कौन सा नेटवर्किंग उपकरण स्थानीय नेटवर्क में कई कंप्यूटरों को जोड़ता है?",
    "options_en": ["Network Switch", "Printer", "Monitor", "Keyboard"],
    "options_hi": ["नेटवर्क स्विच", "प्रिंटर", "मॉनिटर", "कीबोर्ड"],
    "answer_en": "Network Switch",
    "answer_hi": "नेटवर्क स्विच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the full form of 'PDF' in document format?",
    "question_hi": "दस्तावेज़ प्रारूप में 'PDF' का पूर्ण रूप क्या है?",
    "options_en": ["Portable Document Format", "Printable Document Format", "Portable Data Format", "Printable Data Format"],
    "options_hi": ["पोर्टेबल डॉक्यूमेंट फॉर्मेट", "प्रिंटेबल डॉक्यूमेंट फॉर्मेट", "पोर्टेबल डेटा फॉर्मेट", "प्रिंटेबल डेटा फॉर्मेट"],
    "answer_en": "Portable Document Format",
    "answer_hi": "पोर्टेबल डॉक्यूमेंट फॉर्मेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which type of software protects computers from malicious programs and viruses?",
    "question_hi": "कौन सा प्रकार का सॉफ्टवेयर कंप्यूटरों को दुर्भावनापूर्ण प्रोग्राम और वायरस से सुरक्षा करता है?",
    "options_en": ["Antivirus Software", "Word Processing Software", "Spreadsheet Software", "Database Software"],
    "options_hi": ["एंटीवायरस सॉफ्टवेयर", "वर्ड प्रोसेसिंग सॉफ्टवेयर", "स्प्रेडशीट सॉफ्टवेयर", "डेटाबेस सॉफ्टवेयर"],
    "answer_en": "Antivirus Software",
    "answer_hi": "एंटीवायरस सॉफ्टवेयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What does 'CPU' stand for in computer terminology?",
    "question_hi": "कंप्यूटर शब्दावली में 'CPU' का क्या अर्थ है?",
    "options_en": ["Central Processing Unit", "Central Processor Unit", "Computer Processing Unit", "Computer Processor Unit"],
    "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "सेंट्रल प्रोसेसर यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट", "कंप्यूटर प्रोसेसर यूनिट"],
    "answer_en": "Central Processing Unit",
    "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which key combination opens the Task Manager in Windows?",
    "question_hi": "विंडोज में टास्क मैनेजर खोलने के लिए कौन सा की संयोजन है?",
    "options_en": ["Ctrl + Shift + Esc", "Ctrl + Alt + Delete", "Alt + F4", "Windows + X"],
    "options_hi": ["Ctrl + Shift + Esc", "Ctrl + Alt + Delete", "Alt + F4", "Windows + X"],
    "answer_en": "Ctrl + Shift + Esc",
    "answer_hi": "Ctrl + Shift + Esc",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the concept of storing and accessing data over the internet instead of local computers?",
    "question_hi": "स्थानीय कंप्यूटरों के बजाय इंटरनेट पर डेटा संग्रहीत करने और उसे एक्सेस करने की अवधारणा क्या है?",
    "options_en": ["Cloud Computing", "Local Computing", "Network Computing", "Distributed Computing"],
    "options_hi": ["क्लाउड कंप्यूटिंग", "लोकल कंप्यूटिंग", "नेटवर्क कंप्यूटिंग", "डिस्ट्रिब्यूटेड कंप्यूटिंग"],
    "answer_en": "Cloud Computing",
    "answer_hi": "क्लाउड कंप्यूटिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which company originally developed the Windows operating system?",
    "question_hi": "विंडोज ऑपरेटिंग सिस्टम मूल रूप से किस कंपनी ने विकसित किया?",
    "options_en": ["Microsoft Corporation", "Apple Inc.", "Google LLC", "IBM Corporation"],
    "options_hi": ["माइक्रोसॉफ्ट कॉर्पोरेशन", "एप्पल इंक.", "गूगल एलएलसी", "आईबीएम कॉर्पोरेशन"],
    "answer_en": "Microsoft Corporation",
    "answer_hi": "माइक्रोसॉफ्ट कॉर्पोरेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the core component of an operating system that manages system resources?",
    "question_hi": "ऑपरेटिंग सिस्टम का वह कोर कंपोनेंट क्या है जो सिस्टम संसाधन प्रबंधित करता है?",
    "options_en": ["Kernel", "Shell", "Interface", "Application"],
    "options_hi": ["कर्नेल", "शेल", "इंटरफेस", "एप्लिकेशन"],
    "answer_en": "Kernel",
    "answer_hi": "कर्नेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which function key reloads or refreshes a webpage in most browsers?",
    "question_hi": "अधिकांश ब्राउज़रों में कौन सी फंक्शन की वेबपेज को रीलोड या रीफ्रेश करती है?",
    "options_en": ["F5", "F1", "F2", "F3"],
    "options_hi": ["F5", "F1", "F2", "F3"],
    "answer_en": "F5",
    "answer_hi": "F5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What does 'RAM' stand for in computer memory?",
    "question_hi": "कंप्यूटर मेमोरी में 'RAM' का क्या अर्थ है?",
    "options_en": ["Random Access Memory", "Read Access Memory", "Random Available Memory", "Read Available Memory"],
    "options_hi": ["रैंडम एक्सेस मेमोरी", "रीड एक्सेस मेमोरी", "रैंडम अवेलेबल मेमोरी", "रीड अवेलेबल मेमोरी"],
    "answer_en": "Random Access Memory",
    "answer_hi": "रैंडम एक्सेस मेमोरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which output device produces physical copies of digital documents?",
    "question_hi": "कौन सा आउटपुट डिवाइस डिजिटल दस्तावेजों की भौतिक प्रतियाँ बनाता है?",
    "options_en": ["Printer", "Scanner", "Monitor", "Keyboard"],
    "options_hi": ["प्रिंटर", "स्कैनर", "मॉनिटर", "कीबोर्ड"],
    "answer_en": "Printer",
    "answer_hi": "प्रिंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the full form of 'HTML' in web development?",
    "question_hi": "वेब डेवलपमेंट में 'HTML' का पूर्ण रूप क्या है?",
    "options_en": ["HyperText Markup Language", "HighText Markup Language", "HyperText Marking Language", "HighText Marking Language"],
    "options_hi": ["हाइपरटेक्स्ट मार्कअप लैंग्वेज", "हाईटेक्स्ट मार्कअप लैंग्वेज", "हाइपरटेक्स्ट मार्किंग लैंग्वेज", "हाईटेक्स्ट मार्किंग लैंग्वेज"],
    "answer_en": "HyperText Markup Language",
    "answer_hi": "हाइपरटेक्स्ट मार्कअप लैंग्वेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which keyboard shortcut saves the current document in most applications?",
    "question_hi": "अधिकांश एप्लिकेशन में वर्तमान दस्तावेज़ को सेव करने के लिए कौन सा कीबोर्ड शॉर्टकट है?",
    "options_en": ["Ctrl + S", "Ctrl + P", "Ctrl + O", "Ctrl + N"],
    "options_hi": ["Ctrl + S", "Ctrl + P", "Ctrl + O", "Ctrl + N"],
    "answer_en": "Ctrl + S",
    "answer_hi": "Ctrl + S",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What does 'Wi-Fi' stand for in wireless networking?",
    "question_hi": "वायरलेस नेटवर्किंग में 'Wi-Fi' का क्या अर्थ है?",
    "options_en": ["Wireless Fidelity", "Wireless Frequency", "Wired Fidelity", "Wired Frequency"],
    "options_hi": ["वायरलेस फिडेलिटी", "वायरलेस फ्रीक्वेंसी", "वायर्ड फिडेलिटी", "वायर्ड फ्रीक्वेंसी"],
    "answer_en": "Wireless Fidelity",
    "answer_hi": "वायरलेस फिडेलिटी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which storage component retains data even when the computer is powered off?",
    "question_hi": "कौन सा स्टोरेज कंपोनेंट कंप्यूटर के बंद होने पर भी डेटा रिटेन करता है?",
    "options_en": ["Non-Volatile Storage", "Volatile Storage", "Temporary Storage", "Cache Storage"],
    "options_hi": ["नॉन-वोलेटाइल स्टोरेज", "वोलेटाइल स्टोरेज", "अस्थायी स्टोरेज", "कैश स्टोरेज"],
    "answer_en": "Non-Volatile Storage",
    "answer_hi": "नॉन-वोलेटाइल स्टोरेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the primary purpose of an Ethernet cable?",
    "question_hi": "ईथरनेट केबल का प्राथमिक उद्देश्य क्या है?",
    "options_en": ["Connect devices in a wired network", "Charge electronic devices", "Transmit audio signals", "Provide power supply"],
    "options_hi": ["वायर्ड नेटवर्क में डिवाइस कनेक्ट करना", "इलेक्ट्रॉनिक डिवाइस चार्ज करना", "ऑडियो सिग्नल ट्रांसमिट करना", "बिजली आपूर्ति प्रदान करना"],
    "answer_en": "Connect devices in a wired network",
    "answer_hi": "वायर्ड नेटवर्क में डिवाइस कनेक्ट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which key opens the Start menu in Windows operating system?",
    "question_hi": "विंडोज ऑपरेटिंग सिस्टम में स्टार्ट मेन्यू खोलने के लिए कौन सी की है?",
    "options_en": ["Windows Key", "Ctrl Key", "Alt Key", "Shift Key"],
    "options_hi": ["विंडोज की", "Ctrl की", "Alt की", "Shift की"],
    "answer_en": "Windows Key",
    "answer_hi": "विंडोज की",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What does 'GUI' stand for in user interface design?",
    "question_hi": "यूजर इंटरफेस डिज़ाइन में 'GUI' का क्या अर्थ है?",
    "options_en": ["Graphical User Interface", "Graphical Utility Interface", "General User Interface", "General Utility Interface"],
    "options_hi": ["ग्राफिकल यूजर इंटरफेस", "ग्राफिकल यूटिलिटी इंटरफेस", "जनरल यूजर इंटरफेस", "जनरल यूटिलिटी इंटरफेस"],
    "answer_en": "Graphical User Interface",
    "answer_hi": "ग्राफिकल यूजर इंटरफेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which software application is used to create slide presentations?",
    "question_hi": "स्लाइड प्रेजेंटेशन बनाने के लिए किस सॉफ्टवेयर एप्लिकेशन का उपयोग किया जाता है?",
    "options_en": ["Presentation Software", "Word Processing Software", "Spreadsheet Software", "Database Software"],
    "options_hi": ["प्रेजेंटेशन सॉफ्टवेयर", "वर्ड प्रोसेसिंग सॉफ्टवेयर", "स्प्रेडशीट सॉफ्टवेयर", "डेटाबेस सॉफ्टवेयर"],
    "answer_en": "Presentation Software",
    "answer_hi": "प्रेजेंटेशन सॉफ्टवेयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the main function of a web browser?",
    "question_hi": "वेब ब्राउज़र का मुख्य कार्य क्या है?",
    "options_en": ["Display and navigate web pages", "Create text documents", "Edit digital images", "Manage databases"],
    "options_hi": ["वेब पेज प्रदर्शित और नेविगेट करना", "टेक्स्ट दस्तावेज़ बनाना", "डिजिटल इमेज संपादित करना", "डेटाबेस प्रबंधित करना"],
    "answer_en": "Display and navigate web pages",
    "answer_hi": "वेब पेज प्रदर्शित और नेविगेट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which keyboard shortcut copies selected text or items?",
    "question_hi": "कौन सा कीबोर्ड शॉर्टकट चयनित टेक्स्ट या आइटम को कॉपी करता है?",
    "options_en": ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"],
    "options_hi": ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"],
    "answer_en": "Ctrl + C",
    "answer_hi": "Ctrl + C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What does 'LAN' abbreviate in networking terminology?",
    "question_hi": "नेटवर्किंग शब्दावली में 'LAN' क्या संक्षिप्त करता है?",
    "options_en": ["Local Area Network", "Large Area Network", "Local Access Network", "Large Access Network"],
    "options_hi": ["लोकल एरिया नेटवर्क", "लार्ज एरिया नेटवर्क", "लोकल एक्सेस नेटवर्क", "लार्ज एक्सेस नेटवर्क"],
    "answer_en": "Local Area Network",
    "answer_hi": "लोकल एरिया नेटवर्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which input device is used for typing text and commands into a computer?",
    "question_hi": "कंप्यूटर में टेक्स्ट और कमांड टाइप करने के लिए किस इनपुट डिवाइस का उपयोग किया जाता है?",
    "options_en": ["Keyboard", "Mouse", "Monitor", "Printer"],
    "options_hi": ["कीबोर्ड", "माउस", "मॉनिटर", "प्रिंटर"],
    "answer_en": "Keyboard",
    "answer_hi": "कीबोर्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the full form of 'USB' in computer connectivity?",
    "question_hi": "कंप्यूटर कनेक्टिविटी में 'USB' का पूर्ण रूप क्या है?",
    "options_en": ["Universal Serial Bus", "Universal System Bus", "Universal Serial Board", "Universal System Board"],
    "options_hi": ["यूनिवर्सल सीरियल बस", "यूनिवर्सल सिस्टम बस", "यूनिवर्सल सीरियल बोर्ड", "यूनिवर्सल सिस्टम बोर्ड"],
    "answer_en": "Universal Serial Bus",
    "answer_hi": "यूनिवर्सल सीरियल बस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which keyboard shortcut pastes copied content?",
    "question_hi": "कॉपी किए गए कंटेंट को पेस्ट करने के लिए कौन सा कीबोर्ड शॉर्टकट है?",
    "options_en": ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + Z"],
    "options_hi": ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + Z"],
    "answer_en": "Ctrl + V",
    "answer_hi": "Ctrl + V",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What does 'DNS' stand for in internet technology?",
    "question_hi": "इंटरनेट टेक्नोलॉजी में 'DNS' का क्या अर्थ है?",
    "options_en": ["Domain Name System", "Domain Name Server", "Domain Network System", "Domain Network Server"],
    "options_hi": ["डोमेन नेम सिस्टम", "डोमेन नेम सर्वर", "डोमेन नेटवर्क सिस्टम", "डोमेन नेटवर्क सर्वर"],
    "answer_en": "Domain Name System",
    "answer_hi": "डोमेन नेम सिस्टम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which component displays visual output from a computer?",
    "question_hi": "कौन सा कंपोनेंट कंप्यूटर से विजुअल आउटपुट प्रदर्शित करता है?",
    "options_en": ["Display Monitor", "Keyboard", "Mouse", "Printer"],
    "options_hi": ["डिस्प्ले मॉनिटर", "कीबोर्ड", "माउस", "प्रिंटर"],
    "answer_en": "Display Monitor",
    "answer_hi": "डिस्प्ले मॉनिटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the primary function of a network router?",
    "question_hi": "नेटवर्क राउटर का प्राथमिक कार्य क्या है?",
    "options_en": ["Route data between different networks", "Store files and documents", "Print physical copies", "Scan images and documents"],
    "options_hi": ["विभिन्न नेटवर्क के बीच डेटा रूट करना", "फ़ाइलें और दस्तावेज़ संग्रहित करना", "भौतिक प्रतियाँ प्रिंट करना", "छवियाँ और दस्तावेज़ स्कैन करना"],
    "answer_en": "Route data between different networks",
    "answer_hi": "विभिन्न नेटवर्क के बीच डेटा रूट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which key deletes characters to the right of the cursor?",
    "question_hi": "कौन सी की कर्सर के दाईं ओर के कैरेक्टर्स को डिलीट करती है?",
    "options_en": ["Delete Key", "Backspace Key", "Insert Key", "Home Key"],
    "options_hi": ["डिलीट की", "बैकस्पेस की", "इंसर्ट की", "होम की"],
    "answer_en": "Delete Key",
    "answer_hi": "डिलीट की",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What does 'HTTP' abbreviate in web protocols?",
    "question_hi": "वेब प्रोटोकॉल में 'HTTP' क्या संक्षिप्त करता है?",
    "options_en": ["HyperText Transfer Protocol", "HighText Transfer Protocol", "HyperText Transmission Protocol", "HighText Transmission Protocol"],
    "options_hi": ["हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाईटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाइपरटेक्स्ट ट्रांसमिशन प्रोटोकॉल", "हाईटेक्स्ट ट्रांसमिशन प्रोटोकॉल"],
    "answer_en": "HyperText Transfer Protocol",
    "answer_hi": "हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which software is designed for creating and managing databases?",
    "question_hi": "डेटाबेस बनाने और प्रबंधित करने के लिए किस सॉफ्टवेयर को डिज़ाइन किया गया है?",
    "options_en": ["Database Management Software", "Word Processing Software", "Spreadsheet Software", "Presentation Software"],
    "options_hi": ["डेटाबेस मैनेजमेंट सॉफ्टवेयर", "वर्ड प्रोसेसिंग सॉफ्टवेयर", "स्प्रेडशीट सॉफ्टवेयर", "प्रेजेंटेशन सॉफ्टवेयर"],
    "answer_en": "Database Management Software",
    "answer_hi": "डेटाबेस मैनेजमेंट सॉफ्टवेयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is the main purpose of spreadsheet software?",
    "question_hi": "स्प्रेडशीट सॉफ्टवेयर का मुख्य उद्देश्य क्या है?",
    "options_en": ["Organize and analyze numerical data", "Create text-based documents", "Design visual presentations", "Browse internet websites"],
    "options_hi": ["संख्यात्मक डेटा व्यवस्थित और विश्लेषण करना", "टेक्स्ट-आधारित दस्तावेज़ बनाना", "विजुअल प्रेजेंटेशन डिज़ाइन करना", "इंटरनेट वेबसाइट ब्राउज़ करना"],
    "answer_en": "Organize and analyze numerical data",
    "answer_hi": "संख्यात्मक डेटा व्यवस्थित और विश्लेषण करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Which keyboard shortcut selects all content in a document or window?",
    "question_hi": "दस्तावेज़ या विंडो में सभी कंटेंट को चुनने के लिए कौन सा कीबोर्ड शॉर्टकट है?",
    "options_en": ["Ctrl + A", "Ctrl + S", "Ctrl + D", "Ctrl + F"],
    "options_hi": ["Ctrl + A", "Ctrl + S", "Ctrl + D", "Ctrl + F"],
    "answer_en": "Ctrl + A",
    "answer_hi": "Ctrl + A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What does 'ROM' stand for in computer memory?",
    "question_hi": "कंप्यूटर मेमोरी में 'ROM' का क्या अर्थ है?",
    "options_en": ["Read Only Memory", "Random Only Memory", "Read Once Memory", "Random Once Memory"],
    "options_hi": ["रीड ओनली मेमोरी", "रैंडम ओनली मेमोरी", "रीड वन्स मेमोरी", "रैंडम वन्स मेमोरी"],
    "answer_en": "Read Only Memory",
    "answer_hi": "रीड ओनली मेमोरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which device converts physical documents into digital format?",
    "question_hi": "कौन सा उपकरण भौतिक दस्तावेजों को डिजिटल फॉर्मेट में परिवर्तित करता है?",
    "options_en": ["Scanner", "Printer", "Monitor", "Keyboard"],
    "options_hi": ["स्कैनर", "प्रिंटर", "मॉनिटर", "कीबोर्ड"],
    "answer_en": "Scanner",
    "answer_hi": "स्कैनर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is the function of a file manager in an operating system?",
    "question_hi": "ऑपरेटिंग सिस्टम में फ़ाइल मैनेजर का कार्य क्या है?",
    "options_en": ["Organize and manage files and folders", "Execute application programs", "Connect to internet networks", "Print hard copies of documents"],
    "options_hi": ["फ़ाइलों और फ़ोल्डरों को व्यवस्थित और प्रबंधित करना", "एप्लिकेशन प्रोग्राम निष्पादित करना", "इंटरनेट नेटवर्क से कनेक्ट होना", "दस्तावेजों की हार्ड कॉपी प्रिंट करना"],
    "answer_en": "Organize and manage files and folders",
    "answer_hi": "फ़ाइलों और फ़ोल्डरों को व्यवस्थित और प्रबंधित करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "Which key is commonly used to cancel operations or close dialog boxes?",
    "question_hi": "ऑपरेशन रद्द करने या डायलॉग बॉक्स बंद करने के लिए आमतौर पर किस की का उपयोग किया जाता है?",
    "options_en": ["Escape Key", "Enter Key", "Tab Key", "Space Key"],
    "options_hi": ["एस्केप की", "एंटर की", "टैब की", "स्पेस की"],
    "answer_en": "Escape Key",
    "answer_hi": "एस्केप की",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What does 'SSD' abbreviate in computer storage?",
    "question_hi": "कंप्यूटर स्टोरेज में 'SSD' क्या संक्षिप्त करता है?",
    "options_en": ["Solid State Drive", "Solid Storage Drive", "System State Drive", "System Storage Drive"],
    "options_hi": ["सॉलिड स्टेट ड्राइव", "सॉलिड स्टोरेज ड्राइव", "सिस्टम स्टेट ड्राइव", "सिस्टम स्टोरेज ड्राइव"],
    "answer_en": "Solid State Drive",
    "answer_hi": "सॉलिड स्टेट ड्राइव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which software is used for editing digital photographs?",
    "question_hi": "डिजिटल फोटोग्राफ संपादित करने के लिए किस सॉफ्टवेयर का उपयोग किया जाता है?",
    "options_en": ["Image Editing Software", "Word Processing Software", "Spreadsheet Software", "Database Software"],
    "options_hi": ["इमेज एडिटिंग सॉफ्टवेयर", "वर्ड प्रोसेसिंग सॉफ्टवेयर", "स्प्रेडशीट सॉफ्टवेयर", "डेटाबेस सॉफ्टवेयर"],
    "answer_en": "Image Editing Software",
    "answer_hi": "इमेज एडिटिंग सॉफ्टवेयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is the purpose of an Uninterruptible Power Supply?",
    "question_hi": "अनइंटरप्टिबल पावर सप्लाई का उद्देश्य क्या है?",
    "options_en": ["Provide backup power during outages", "Increase internet connection speed", "Store files and documents", "Print multiple copies"],
    "options_hi": ["बिजली कटौती के दौरान बैकअप पावर प्रदान करना", "इंटरनेट कनेक्शन गति बढ़ाना", "फ़ाइलें और दस्तावेज़ संग्रहित करना", "एकाधिक प्रतियाँ प्रिंट करना"],
    "answer_en": "Provide backup power during outages",
    "answer_hi": "बिजली कटौती के दौरान बैकअप पावर प्रदान करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which keyboard shortcut reverses the last action?",
    "question_hi": "अंतिम क्रिया को उलटने के लिए कौन सा कीबोर्ड शॉर्टकट है?",
    "options_en": ["Ctrl + Z", "Ctrl + Y", "Ctrl + U", "Ctrl + R"],
    "options_hi": ["Ctrl + Z", "Ctrl + Y", "Ctrl + U", "Ctrl + R"],
    "answer_en": "Ctrl + Z",
    "answer_hi": "Ctrl + Z",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What does 'VPN' stand for in network security?",
    "question_hi": "नेटवर्क सुरक्षा में 'VPN' का क्या अर्थ है?",
    "options_en": ["Virtual Private Network", "Virtual Public Network", "Virtual Personal Network", "Virtual Protected Network"],
    "options_hi": ["वर्चुअल प्राइवेट नेटवर्क", "वर्चुअल पब्लिक नेटवर्क", "वर्चुअल पर्सनल नेटवर्क", "वर्चुअल प्रोटेक्टेड नेटवर्क"],
    "answer_en": "Virtual Private Network",
    "answer_hi": "वर्चुअल प्राइवेट नेटवर्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Which component specializes in processing graphics and visual data?",
    "question_hi": "कौन सा कंपोनेंट ग्राफिक्स और विजुअल डेटा प्रोसेसिंग में विशेषज्ञता रखता है?",
    "options_en": ["Graphics Processing Unit", "Central Processing Unit", "Random Access Memory", "Hard Disk Drive"],
    "options_hi": ["ग्राफिक्स प्रोसेसिंग यूनिट", "सेंट्रल प्रोसेसिंग यूनिट", "रैंडम एक्सेस मेमोरी", "हार्ड डिस्क ड्राइव"],
    "answer_en": "Graphics Processing Unit",
    "answer_hi": "ग्राफिक्स प्रोसेसिंग यूनिट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is the function of an audio card in a computer system?",
    "question_hi": "कंप्यूटर सिस्टम में ऑडियो कार्ड का कार्य क्या है?",
    "options_en": ["Process audio input and output", "Display visual information", "Store permanent data", "Connect to internet networks"],
    "options_hi": ["ऑडियो इनपुट और आउटपुट प्रोसेस करना", "विजुअल जानकारी प्रदर्शित करना", "स्थायी डेटा संग्रहित करना", "इंटरनेट नेटवर्क से कनेक्ट होना"],
    "answer_en": "Process audio input and output",
    "answer_hi": "ऑडियो इनपुट और आउटपुट प्रोसेस करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which keyboard shortcut moves to the end of a document?",
    "question_hi": "दस्तावेज़ के अंत में जाने के लिए कौन सा कीबोर्ड शॉर्टकट है?",
    "options_en": ["Ctrl + End", "Ctrl + Home", "End", "Home"],
    "options_hi": ["Ctrl + End", "Ctrl + Home", "End", "Home"],
    "answer_en": "Ctrl + End",
    "answer_hi": "Ctrl + End",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What does 'BIOS' stand for in computer systems?",
    "question_hi": "कंप्यूटर सिस्टम में 'BIOS' का क्या अर्थ है?",
    "options_en": ["Basic Input Output System", "Basic Input Output Software", "Basic Interface Output System", "Basic Interface Output Software"],
    "options_hi": ["बेसिक इनपुट आउटपुट सिस्टम", "बेसिक इनपुट आउटपुट सॉफ्टवेयर", "बेसिक इंटरफेस आउटपुट सिस्टम", "बेसिक इंटरफेस आउटपुट सॉफ्टवेयर"],
    "answer_en": "Basic Input Output System",
    "answer_hi": "बेसिक इनपुट आउटपुट सिस्टम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Which pointing device controls cursor movement on screen?",
    "question_hi": "स्क्रीन पर कर्सर मूवमेंट कंट्रोल करने वाला पॉइंटिंग डिवाइस कौन सा है?",
    "options_en": ["Mouse", "Keyboard", "Scanner", "Printer"],
    "options_hi": ["माउस", "कीबोर्ड", "स्कैनर", "प्रिंटर"],
    "answer_en": "Mouse",
    "answer_hi": "माउस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is the primary role of a web server?",
    "question_hi": "वेब सर्वर की प्राथमिक भूमिका क्या है?",
    "options_en": ["Host websites and deliver web content", "Browse internet pages", "Create text documents", "Edit digital images"],
    "options_hi": ["वेबसाइट होस्ट करना और वेब कंटेंट डिलीवर करना", "इंटरनेट पेज ब्राउज़ करना", "टेक्स्ट दस्तावेज़ बनाना", "डिजिटल इमेज संपादित करना"],
    "answer_en": "Host websites and deliver web content",
    "answer_hi": "वेबसाइट होस्ट करना और वेब कंटेंट डिलीवर करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which keyboard shortcut redoes or repeats the last action?",
    "question_hi": "अंतिम क्रिया को दोहराने या फिर से करने के लिए कौन सा कीबोर्ड शॉर्टकट है?",
    "options_en": ["Ctrl + Y", "Ctrl + Z", "Ctrl + R", "Ctrl + D"],
    "options_hi": ["Ctrl + Y", "Ctrl + Z", "Ctrl + R", "Ctrl + D"],
    "answer_en": "Ctrl + Y",
    "answer_hi": "Ctrl + Y",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What does 'HDD' abbreviate in storage technology?",
    "question_hi": "स्टोरेज टेक्नोलॉजी में 'HDD' क्या संक्षिप्त करता है?",
    "options_en": ["Hard Disk Drive", "Hard Drive Disk", "Hard Data Drive", "Hard Drive Data"],
    "options_hi": ["हार्ड डिस्क ड्राइव", "हार्ड ड्राइव डिस्क", "हार्ड डेटा ड्राइव", "हार्ड ड्राइव डेटा"],
    "answer_en": "Hard Disk Drive",
    "answer_hi": "हार्ड डिस्क ड्राइव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which software is used to compress files for efficient storage?",
    "question_hi": "कुशल संग्रहण के लिए फ़ाइलों को संपीड़ित करने के लिए किस सॉफ्टवेयर का उपयोग किया जाता है?",
    "options_en": ["File Compression Software", "Word Processing Software", "Spreadsheet Software", "Image Editing Software"],
    "options_hi": ["फ़ाइल कम्प्रेशन सॉफ्टवेयर", "वर्ड प्रोसेसिंग सॉफ्टवेयर", "स्प्रेडशीट सॉफ्टवेयर", "इमेज एडिटिंग सॉफ्टवेयर"],
    "answer_en": "File Compression Software",
    "answer_hi": "फ़ाइल कम्प्रेशन सॉफ्टवेयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is the purpose of a network hub device?",
    "question_hi": "नेटवर्क हब डिवाइस का उद्देश्य क्या है?",
    "options_en": ["Connect multiple network devices", "Store files and documents", "Print hard copies", "Scan images and text"],
    "options_hi": ["एकाधिक नेटवर्क डिवाइस कनेक्ट करना", "फ़ाइलें और दस्तावेज़ संग्रहित करना", "हार्ड कॉपी प्रिंट करना", "छवियाँ और टेक्स्ट स्कैन करना"],
    "answer_en": "Connect multiple network devices",
    "answer_hi": "एकाधिक नेटवर्क डिवाइस कनेक्ट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which key creates indentation or moves to the next field in forms?",
    "question_hi": "कौन सी की इंडेंटेशन बनाती है या फॉर्म में अगले फील्ड में जाती है?",
    "options_en": ["Tab Key", "Space Key", "Enter Key", "Shift Key"],
    "options_hi": ["टैब की", "स्पेस की", "एंटर की", "शिफ्ट की"],
    "answer_en": "Tab Key",
    "answer_hi": "टैब की",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What does 'GPU' stand for in computer graphics?",
    "question_hi": "कंप्यूटर ग्राफिक्स में 'GPU' का क्या अर्थ है?",
    "options_en": ["Graphics Processing Unit", "Graphics Power Unit", "Graphics Performance Unit", "Graphics Processing Unity"],
    "options_hi": ["ग्राफिक्स प्रोसेसिंग यूनिट", "ग्राफिक्स पावर यूनिट", "ग्राफिक्स परफॉर्मेंस यूनिट", "ग्राफिक्स प्रोसेसिंग यूनिटी"],
    "answer_en": "Graphics Processing Unit",
    "answer_hi": "ग्राफिक्स प्रोसेसिंग यूनिट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "Which device produces audio output from a computer?",
    "question_hi": "कौन सा डिवाइस कंप्यूटर से ऑडियो आउटपुट उत्पन्न करता है?",
    "options_en": ["Speakers", "Monitor", "Keyboard", "Mouse"],
    "options_hi": ["स्पीकर", "मॉनिटर", "कीबोर्ड", "माउस"],
    "answer_en": "Speakers",
    "answer_hi": "स्पीकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is the function of a compiler in software development?",
    "question_hi": "सॉफ्टवेयर डेवलपमेंट में कंपाइलर का कार्य क्या है?",
    "options_en": ["Translate source code to machine code", "Execute compiled programs", "Debug programming errors", "Write source code"],
    "options_hi": ["सोर्स कोड को मशीन कोड में अनुवाद करना", "कंपाइल्ड प्रोग्राम निष्पादित करना", "प्रोग्रामिंग त्रुटियों को डीबग करना", "सोर्स कोड लिखना"],
    "answer_en": "Translate source code to machine code",
    "answer_hi": "सोर्स कोड को मशीन कोड में अनुवाद करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Which keyboard shortcut opens the find/search function?",
    "question_hi": "खोज/सर्च फ़ंक्शन खोलने के लिए कौन सा कीबोर्ड शॉर्टकट है?",
    "options_en": ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + E"],
    "options_hi": ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + E"],
    "answer_en": "Ctrl + F",
    "answer_hi": "Ctrl + F",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What does 'IP Address' represent in networking?",
    "question_hi": "नेटवर्किंग में 'IP एड्रेस' क्या दर्शाता है?",
    "options_en": ["Internet Protocol Address", "Internet Provider Address", "Internet Personal Address", "Internet Port Address"],
    "options_hi": ["इंटरनेट प्रोटोकॉल एड्रेस", "इंटरनेट प्रोवाइडर एड्रेस", "इंटरनेट पर्सनल एड्रेस", "इंटरनेट पोर्ट एड्रेस"],
    "answer_en": "Internet Protocol Address",
    "answer_hi": "इंटरनेट प्रोटोकॉल एड्रेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "Which component supplies electrical power to computer parts?",
    "question_hi": "कौन सा कंपोनेंट कंप्यूटर भागों को विद्युत शक्ति आपूर्ति करता है?",
    "options_en": ["Power Supply Unit", "Motherboard", "Central Processing Unit", "Hard Disk Drive"],
    "options_hi": ["पावर सप्लाई यूनिट", "मदरबोर्ड", "सेंट्रल प्रोसेसिंग यूनिट", "हार्ड डिस्क ड्राइव"],
    "answer_en": "Power Supply Unit",
    "answer_hi": "पावर सप्लाई यूनिट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is the primary function of database software?",
    "question_hi": "डेटाबेस सॉफ्टवेयर का प्राथमिक कार्य क्या है?",
    "options_en": ["Store, retrieve, and manage structured data", "Create text documents", "Browse internet content", "Edit digital photographs"],
    "options_hi": ["संरचित डेटा संग्रहित, पुनर्प्राप्त और प्रबंधित करना", "टेक्स्ट दस्तावेज़ बनाना", "इंटरनेट कंटेंट ब्राउज़ करना", "डिजिटल फोटोग्राफ संपादित करना"],
    "answer_en": "Store, retrieve, and manage structured data",
    "answer_hi": "संरचित डेटा संग्रहित, पुनर्प्राप्त और प्रबंधित करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which key removes characters to the left of the cursor?",
    "question_hi": "कौन सी की कर्सर के बाईं ओर के कैरेक्टर्स को हटाती है?",
    "options_en": ["Backspace Key", "Delete Key", "Insert Key", "Home Key"],
    "options_hi": ["बैकस्पेस की", "डिलीट की", "इंसर्ट की", "होम की"],
    "answer_en": "Backspace Key",
    "answer_hi": "बैकस्पेस की",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What does 'ALU' abbreviate in processor architecture?",
    "question_hi": "प्रोसेसर आर्किटेक्चर में 'ALU' क्या संक्षिप्त करता है?",
    "options_en": ["Arithmetic Logic Unit", "Arithmetic Logical Unit", "Advanced Logic Unit", "Advanced Logical Unit"],
    "options_hi": ["अरिथमेटिक लॉजिक यूनिट", "अरिथमेटिक लॉजिकल यूनिट", "एडवांस्ड लॉजिक यूनिट", "एडवांस्ड लॉजिकल यूनिट"],
    "answer_en": "Arithmetic Logic Unit",
    "answer_hi": "अरिथमेटिक लॉजिक यूनिट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Which device enables wireless internet connectivity?",
    "question_hi": "कौन सा डिवाइस वायरलेस इंटरनेट कनेक्टिविटी सक्षम करता है?",
    "options_en": ["Wireless Network Adapter", "Ethernet Cable", "Modem Device", "Network Router"],
    "options_hi": ["वायरलेस नेटवर्क एडाप्टर", "ईथरनेट केबल", "मॉडेम डिवाइस", "नेटवर्क राउटर"],
    "answer_en": "Wireless Network Adapter",
    "answer_hi": "वायरलेस नेटवर्क एडाप्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is the purpose of cache memory in a computer?",
    "question_hi": "कंप्यूटर में कैश मेमोरी का उद्देश्य क्या है?",
    "options_en": ["Store frequently accessed data for quick retrieval", "Provide permanent storage", "Display visual information", "Establish network connections"],
    "options_hi": ["तेज पुनर्प्राप्ति के लिए अक्सर एक्सेस किए गए डेटा को संग्रहित करना", "स्थायी संग्रहण प्रदान करना", "विजुअल जानकारी प्रदर्शित करना", "नेटवर्क कनेक्शन स्थापित करना"],
    "answer_en": "Store frequently accessed data for quick retrieval",
    "answer_hi": "तेज पुनर्प्राप्ति के लिए अक्सर एक्सेस किए गए डेटा को संग्रहित करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Which keyboard shortcut opens the print dialog?",
    "question_hi": "प्रिंट डायलॉग खोलने के लिए कौन सा कीबोर्ड शॉर्टकट है?",
    "options_en": ["Ctrl + P", "Ctrl + S", "Ctrl + O", "Ctrl + N"],
    "options_hi": ["Ctrl + P", "Ctrl + S", "Ctrl + O", "Ctrl + N"],
    "answer_en": "Ctrl + P",
    "answer_hi": "Ctrl + P",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What does 'FTP' stand for in file transfer?",
    "question_hi": "फ़ाइल ट्रांसफर में 'FTP' का क्या अर्थ है?",
    "options_en": ["File Transfer Protocol", "File Transmission Protocol", "File Transfer Process", "File Transmission Process"],
    "options_hi": ["फ़ाइल ट्रांसफर प्रोटोकॉल", "फ़ाइल ट्रांसमिशन प्रोटोकॉल", "फ़ाइल ट्रांसफर प्रोसेस", "फ़ाइल ट्रांसमिशन प्रोसेस"],
    "answer_en": "File Transfer Protocol",
    "answer_hi": "फ़ाइल ट्रांसफर प्रोटोकॉल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Which software is used for creating vector-based graphics?",
    "question_hi": "वेक्टर-आधारित ग्राफिक्स बनाने के लिए किस सॉफ्टवेयर का उपयोग किया जाता है?",
    "options_en": ["Vector Graphics Software", "Word Processing Software", "Spreadsheet Software", "Image Editing Software"],
    "options_hi": ["वेक्टर ग्राफिक्स सॉफ्टवेयर", "वर्ड प्रोसेसिंग सॉफ्टवेयर", "स्प्रेडशीट सॉफ्टवेयर", "इमेज एडिटिंग सॉफ्टवेयर"],
    "answer_en": "Vector Graphics Software",
    "answer_hi": "वेक्टर ग्राफिक्स सॉफ्टवेयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is the function of a network interface controller?",
    "question_hi": "नेटवर्क इंटरफेस कंट्रोलर का कार्य क्या है?",
    "options_en": ["Connect computer to network infrastructure", "Store files and documents", "Print physical copies", "Scan documents and images"],
    "options_hi": ["कंप्यूटर को नेटवर्क इंफ्रास्ट्रक्चर से कनेक्ट करना", "फ़ाइलें और दस्तावेज़ संग्रहित करना", "भौतिक प्रतियाँ प्रिंट करना", "दस्तावेज़ और छवियाँ स्कैन करना"],
    "answer_en": "Connect computer to network infrastructure",
    "answer_hi": "कंप्यूटर को नेटवर्क इंफ्रास्ट्रक्चर से कनेक्ट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Which keyboard shortcut switches between open applications?",
    "question_hi": "खुले एप्लिकेशन के बीच स्विच करने के लिए कौन सा कीबोर्ड शॉर्टकट है?",
    "options_en": ["Alt + Tab", "Ctrl + Tab", "Windows + Tab", "Alt + Esc"],
    "options_hi": ["Alt + Tab", "Ctrl + Tab", "Windows + Tab", "Alt + Esc"],
    "answer_en": "Alt + Tab",
    "answer_hi": "Alt + Tab",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What does 'SMTP' abbreviate in email communication?",
    "question_hi": "ईमेल संचार में 'SMTP' क्या संक्षिप्त करता है?",
    "options_en": ["Simple Mail Transfer Protocol", "Simple Mail Transmission Protocol", "Simple Message Transfer Protocol", "Simple Message Transmission Protocol"],
    "options_hi": ["सिंपल मेल ट्रांसफर प्रोटोकॉल", "सिंपल मेल ट्रांसमिशन प्रोटोकॉल", "सिंपल मैसेज ट्रांसफर प्रोटोकॉल", "सिंपल मैसेज ट्रांसमिशन प्रोटोकॉल"],
    "answer_en": "Simple Mail Transfer Protocol",
    "answer_hi": "सिंपल मेल ट्रांसफर प्रोटोकॉल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which component dissipates heat from the processor?",
    "question_hi": "कौन सा कंपोनेंट प्रोसेसर से गर्मी को दूर करता है?",
    "options_en": ["Cooling System", "Power Supply", "Random Access Memory", "Hard Disk Drive"],
    "options_hi": ["कूलिंग सिस्टम", "पावर सप्लाई", "रैंडम एक्सेस मेमोरी", "हार्ड डिस्क ड्राइव"],
    "answer_en": "Cooling System",
    "answer_hi": "कूलिंग सिस्टम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is the purpose of spreadsheet formulas like SUM?",
    "question_hi": "SUM जैसे स्प्रेडशीट फॉर्मूले का उद्देश्य क्या है?",
    "options_en": ["Perform calculations on data", "Format text appearance", "Create visual charts", "Sort alphabetically"],
    "options_hi": ["डेटा पर गणना करना", "टेक्स्ट की उपस्थिति फॉर्मेट करना", "विजुअल चार्ट बनाना", "वर्णानुक्रम में सॉर्ट करना"],
    "answer_en": "Perform calculations on data",
    "answer_hi": "डेटा पर गणना करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Which keyboard shortcut creates a new document?",
    "question_hi": "नया दस्तावेज़ बनाने के लिए कौन सा कीबोर्ड शॉर्टकट है?",
    "options_en": ["Ctrl + N", "Ctrl + O", "Ctrl + S", "Ctrl + P"],
    "options_hi": ["Ctrl + N", "Ctrl + O", "Ctrl + S", "Ctrl + P"],
    "answer_en": "Ctrl + N",
    "answer_hi": "Ctrl + N",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What does 'PSU' stand for in computer hardware?",
    "question_hi": "कंप्यूटर हार्डवेयर में 'PSU' का क्या अर्थ है?",
    "options_en": ["Power Supply Unit", "Power System Unit", "Power Supply Unity", "Power System Unity"],
    "options_hi": ["पावर सप्लाई यूनिट", "पावर सिस्टम यूनिट", "पावर सप्लाई यूनिटी", "पावर सिस्टम यूनिटी"],
    "answer_en": "Power Supply Unit",
    "answer_hi": "पावर सप्लाई यूनिट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Which software manages email communication?",
    "question_hi": "कौन सा सॉफ्टवेयर ईमेल संचार प्रबंधित करता है?",
    "options_en": ["Email Client Software", "Word Processing Software", "Spreadsheet Software", "Image Editing Software"],
    "options_hi": ["ईमेल क्लाइंट सॉफ्टवेयर", "वर्ड प्रोसेसिंग सॉफ्टवेयर", "स्प्रेडशीट सॉफ्टवेयर", "इमेज एडिटिंग सॉफ्टवेयर"],
    "answer_en": "Email Client Software",
    "answer_hi": "ईमेल क्लाइंट सॉफ्टवेयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is the function of an optical disc drive?",
    "question_hi": "ऑप्टिकल डिस्क ड्राइव का कार्य क्या है?",
    "options_en": ["Read and write optical discs", "Provide permanent storage", "Process graphical data", "Establish internet connections"],
    "options_hi": ["ऑप्टिकल डिस्क पढ़ना और लिखना", "स्थायी संग्रहण प्रदान करना", "ग्राफिकल डेटा प्रोसेस करना", "इंटरनेट कनेक्शन स्थापित करना"],
    "answer_en": "Read and write optical discs",
    "answer_hi": "ऑप्टिकल डिस्क पढ़ना और लिखना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "Which key enables typing capital letters?",
    "question_hi": "कौन सी की बड़े अक्षर टाइप करने में सक्षम बनाती है?",
    "options_en": ["Shift Key", "Caps Lock Key", "Ctrl Key", "Alt Key"],
    "options_hi": ["शिफ्ट की", "कैप्स लॉक की", "Ctrl की", "Alt की"],
    "answer_en": "Shift Key",
    "answer_hi": "शिफ्ट की",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What does 'CMOS' stand for in computer technology?",
    "question_hi": "कंप्यूटर टेक्नोलॉजी में 'CMOS' का क्या अर्थ है?",
    "options_en": ["Complementary Metal Oxide Semiconductor", "Computer Metal Oxide Semiconductor", "Complementary Memory Oxide Semiconductor", "Computer Memory Oxide Semiconductor"],
    "options_hi": ["कॉम्प्लिमेंटरी मेटल ऑक्साइड सेमीकंडक्टर", "कंप्यूटर मेटल ऑक्साइड सेमीकंडक्टर", "कॉम्प्लिमेंटरी मेमोरी ऑक्साइड सेमीकंडक्टर", "कंप्यूटर मेमोरी ऑक्साइड सेमीकंडक्टर"],
    "answer_en": "Complementary Metal Oxide Semiconductor",
    "answer_hi": "कॉम्प्लिमेंटरी मेटल ऑक्साइड सेमीकंडक्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "Which device captures video for online communication?",
    "question_hi": "ऑनलाइन संचार के लिए वीडियो कैप्चर करने वाला डिवाइस कौन सा है?",
    "options_en": ["Video Capture Device", "Audio Input Device", "Sound Output Device", "Visual Display Device"],
    "options_hi": ["वीडियो कैप्चर डिवाइस", "ऑडियो इनपुट डिवाइस", "साउंड आउटपुट डिवाइस", "विजुअल डिस्प्ले डिवाइस"],
    "answer_en": "Video Capture Device",
    "answer_hi": "वीडियो कैप्चर डिवाइस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is the purpose of macros in spreadsheet applications?",
    "question_hi": "स्प्रेडशीट एप्लिकेशन में मैक्रो का उद्देश्य क्या है?",
    "options_en": ["Automate repetitive tasks", "Create data visualizations", "Apply formatting styles", "Perform data sorting"],
    "options_hi": ["दोहराए जाने वाले कार्यों को स्वचालित करना", "डेटा विज़ुअलाइज़ेशन बनाना", "फॉर्मेटिंग स्टाइल लागू करना", "डेटा सॉर्टिंग करना"],
    "answer_en": "Automate repetitive tasks",
    "answer_hi": "दोहराए जाने वाले कार्यों को स्वचालित करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Which keyboard shortcut cuts selected content?",
    "question_hi": "चयनित कंटेंट को काटने के लिए कौन सा कीबोर्ड शॉर्टकट है?",
    "options_en": ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
    "options_hi": ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
    "answer_en": "Ctrl + X",
    "answer_hi": "Ctrl + X",
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