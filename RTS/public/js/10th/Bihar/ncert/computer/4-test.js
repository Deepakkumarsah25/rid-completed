const questions = [
    {
        "num": 1,
        "question_en": "What is the full form of ALU?",
        "question_hi": "ALU का पूरा नाम क्या है?",
        "options_en": ["Arithmetic Logic Unit", "Array Logic Unit", "Arithmetic Local Unit", "Array Local Unit"],
        "options_hi": ["अरिथमेटिक लॉजिक यूनिट", "ऐरे लॉजिक यूनिट", "अरिथमेटिक लोकल यूनिट", "ऐरे लोकल यूनिट"],
        "answer_en": "Arithmetic Logic Unit",
        "answer_hi": "अरिथमेटिक लॉजिक यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which was the first electronic computer?",
        "question_hi": "पहला इलेक्ट्रॉनिक कंप्यूटर कौन सा था?",
        "options_en": ["ENIAC", "UNIVAC", "EDSAC", "EDVAC"],
        "options_hi": ["ENIAC", "UNIVAC", "EDSAC", "EDVAC"],
        "answer_en": "ENIAC",
        "answer_hi": "ENIAC",
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
        "question_en": "Which generation used vacuum tubes?",
        "question_hi": "किस पीढ़ी में वैक्यूम ट्यूब का उपयोग किया गया?",
        "options_en": ["First", "Second", "Third", "Fourth"],
        "options_hi": ["पहली", "दूसरी", "तीसरी", "चौथी"],
        "answer_en": "First",
        "answer_hi": "पहली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the brain of the computer?",
        "question_hi": "कंप्यूटर का दिमाग क्या है?",
        "options_en": ["CPU", "RAM", "Hard Disk", "Motherboard"],
        "options_hi": ["सीपीयू", "रैम", "हार्ड डिस्क", "मदरबोर्ड"],
        "answer_en": "CPU",
        "answer_hi": "सीपीयू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is 1 nibble equal to?",
        "question_hi": "1 निबल किसके बराबर होता है?",
        "options_en": ["4 bits", "8 bits", "16 bits", "32 bits"],
        "options_hi": ["4 बिट्स", "8 बिट्स", "16 बिट्स", "32 बिट्स"],
        "answer_en": "4 bits",
        "answer_hi": "4 बिट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which memory is volatile?",
        "question_hi": "कौन सी मेमोरी वोलेटाइल होती है?",
        "options_en": ["RAM", "ROM", "Hard Disk", "CD-ROM"],
        "options_hi": ["रैम", "रोम", "हार्ड डिस्क", "सीडी-रोम"],
        "answer_en": "RAM",
        "answer_hi": "रैम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the binary equivalent of decimal 10?",
        "question_hi": "दशमलव 10 का बाइनरी समकक्ष क्या है?",
        "options_en": ["1010", "1001", "1100", "1011"],
        "options_hi": ["1010", "1001", "1100", "1011"],
        "answer_en": "1010",
        "answer_hi": "1010",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What does URL stand for?",
        "question_hi": "URL का पूरा नाम क्या है?",
        "options_en": ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"],
        "options_hi": ["यूनिफॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लोकेटर", "यूनिफॉर्म रिसोर्स लिंक", "यूनिवर्सल रिसोर्स लिंक"],
        "answer_en": "Uniform Resource Locator",
        "answer_hi": "यूनिफॉर्म रिसोर्स लोकेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which is the fastest memory?",
        "question_hi": "सबसे तेज मेमोरी कौन सी है?",
        "options_en": ["Cache", "RAM", "Hard Disk", "SSD"],
        "options_hi": ["कैश", "रैम", "हार्ड डिस्क", "एसएसडी"],
        "answer_en": "Cache",
        "answer_hi": "कैश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the full form of HTTP?",
        "question_hi": "HTTP का पूरा नाम क्या है?",
        "options_en": ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HighText Transfer Protocol", "HighText Transmission Protocol"],
        "options_hi": ["हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाइपरटेक्स्ट ट्रांसमिशन प्रोटोकॉल", "हाईटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाईटेक्स्ट ट्रांसमिशन प्रोटोकॉल"],
        "answer_en": "HyperText Transfer Protocol",
        "answer_hi": "हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which generation used transistors?",
        "question_hi": "किस पीढ़ी में ट्रांजिस्टर का उपयोग किया गया?",
        "options_en": ["Second", "First", "Third", "Fourth"],
        "options_hi": ["दूसरी", "पहली", "तीसरी", "चौथी"],
        "answer_en": "Second",
        "answer_hi": "दूसरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What does CPU stand for?",
        "question_hi": "CPU का पूरा नाम क्या है?",
        "options_en": ["Central Processing Unit", "Central Program Unit", "Computer Processing Unit", "Computer Program Unit"],
        "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट", "कंप्यूटर प्रोग्राम यूनिट"],
        "answer_en": "Central Processing Unit",
        "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the extension of a Python file?",
        "question_hi": "पायथन फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".py", ".python", ".pt", ".pyt"],
        "options_hi": [".py", ".python", ".pt", ".pyt"],
        "answer_en": ".py",
        "answer_hi": ".py",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What does RAM stand for?",
        "question_hi": "RAM का पूरा नाम क्या है?",
        "options_en": ["Random Access Memory", "Read Access Memory", "Random Allocation Memory", "Read Allocation Memory"],
        "options_hi": ["रैंडम एक्सेस मेमोरी", "रीड एक्सेस मेमोरी", "रैंडम अलॉकेशन मेमोरी", "रीड अलॉकेशन मेमोरी"],
        "answer_en": "Random Access Memory",
        "answer_hi": "रैंडम एक्सेस मेमोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the binary equivalent of decimal 15?",
        "question_hi": "दशमलव 15 का बाइनरी समकक्ष क्या है?",
        "options_en": ["1111", "1010", "1100", "1001"],
        "options_hi": ["1111", "1010", "1100", "1001"],
        "answer_en": "1111",
        "answer_hi": "1111",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which company developed Windows?",
        "question_hi": "विंडोज किस कंपनी ने विकसित किया?",
        "options_en": ["Microsoft", "Apple", "IBM", "Google"],
        "options_hi": ["माइक्रोसॉफ्ट", "एप्पल", "आईबीएम", "गूगल"],
        "answer_en": "Microsoft",
        "answer_hi": "माइक्रोसॉफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the full form of SQL?",
        "question_hi": "SQL का पूरा नाम क्या है?",
        "options_en": ["Structured Query Language", "Structured Question Language", "Simple Query Language", "Simple Question Language"],
        "options_hi": ["स्ट्रक्चर्ड क्वेरी लैंग्वेज", "स्ट्रक्चर्ड क्वेश्चन लैंग्वेज", "सिंपल क्वेरी लैंग्वेज", "सिंपल क्वेश्चन लैंग्वेज"],
        "answer_en": "Structured Query Language",
        "answer_hi": "स्ट्रक्चर्ड क्वेरी लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is 1 byte equal to?",
        "question_hi": "1 बाइट किसके बराबर होता है?",
        "options_en": ["8 bits", "4 bits", "16 bits", "32 bits"],
        "options_hi": ["8 बिट्स", "4 बिट्स", "16 बिट्स", "32 बिट्स"],
        "answer_en": "8 bits",
        "answer_hi": "8 बिट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What does HTML stand for?",
        "question_hi": "HTML का पूरा नाम क्या है?",
        "options_en": ["HyperText Markup Language", "HighText Markup Language", "HyperText Machine Language", "HighText Machine Language"],
        "options_hi": ["हाइपरटेक्स्ट मार्कअप लैंग्वेज", "हाईटेक्स्ट मार्कअप लैंग्वेज", "हाइपरटेक्स्ट मशीन लैंग्वेज", "हाईटेक्स्ट मशीन लैंग्वेज"],
        "answer_en": "HyperText Markup Language",
        "answer_hi": "हाइपरटेक्स्ट मार्कअप लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which generation used integrated circuits?",
        "question_hi": "किस पीढ़ी में इंटीग्रेटेड सर्किट का उपयोग किया गया?",
        "options_en": ["Third", "First", "Second", "Fourth"],
        "options_hi": ["तीसरी", "पहली", "दूसरी", "चौथी"],
        "answer_en": "Third",
        "answer_hi": "तीसरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does SMTP stand for?",
        "question_hi": "SMTP का पूरा नाम क्या है?",
        "options_en": ["Simple Mail Transfer Protocol", "Simple Mail Transmission Protocol", "System Mail Transfer Protocol", "System Mail Transmission Protocol"],
        "options_hi": ["सिंपल मेल ट्रांसफर प्रोटोकॉल", "सिंपल मेल ट्रांसमिशन प्रोटोकॉल", "सिस्टम मेल ट्रांसफर प्रोटोकॉल", "सिस्टम मेल ट्रांसमिशन प्रोटोकॉल"],
        "answer_en": "Simple Mail Transfer Protocol",
        "answer_hi": "सिंपल मेल ट्रांसफर प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which is primary memory?",
        "question_hi": "प्राथमिक मेमोरी कौन सी है?",
        "options_en": ["RAM", "Hard Disk", "CD-ROM", "USB Drive"],
        "options_hi": ["रैम", "हार्ड डिस्क", "सीडी-रोम", "यूएसबी ड्राइव"],
        "answer_en": "RAM",
        "answer_hi": "रैम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the extension of a Java file?",
        "question_hi": "जावा फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".java", ".jav", ".j", ".class"],
        "options_hi": [".java", ".jav", ".j", ".class"],
        "answer_en": ".java",
        "answer_hi": ".java",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What does ROM stand for?",
        "question_hi": "ROM का पूरा नाम क्या है?",
        "options_en": ["Read Only Memory", "Read Output Memory", "Random Only Memory", "Random Output Memory"],
        "options_hi": ["रीड ओनली मेमोरी", "रीड आउटपुट मेमोरी", "रैंडम ओनली मेमोरी", "रैंडम आउटपुट मेमोरी"],
        "answer_en": "Read Only Memory",
        "answer_hi": "रीड ओनली मेमोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the binary equivalent of decimal 7?",
        "question_hi": "दशमलव 7 का बाइनरी समकक्ष क्या है?",
        "options_en": ["111", "101", "110", "100"],
        "options_hi": ["111", "101", "110", "100"],
        "answer_en": "111",
        "answer_hi": "111",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which company developed Linux?",
        "question_hi": "लिनक्स किसने विकसित किया?",
        "options_en": ["Linus Torvalds", "Microsoft", "IBM", "Google"],
        "options_hi": ["लिनस टोरवाल्ड्स", "माइक्रोसॉफ्ट", "आईबीएम", "गूगल"],
        "answer_en": "Linus Torvalds",
        "answer_hi": "लिनस टोरवाल्ड्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the full form of CSS?",
        "question_hi": "CSS का पूरा नाम क्या है?",
        "options_en": ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        "options_hi": ["कैस्केडिंग स्टाइल शीट्स", "कंप्यूटर स्टाइल शीट्स", "क्रिएटिव स्टाइल शीट्स", "कलरफुल स्टाइल शीट्स"],
        "answer_en": "Cascading Style Sheets",
        "answer_hi": "कैस्केडिंग स्टाइल शीट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the smallest unit of memory?",
        "question_hi": "मेमोरी की सबसे छोटी इकाई क्या है?",
        "options_en": ["Bit", "Byte", "Nibble", "Word"],
        "options_hi": ["बिट", "बाइट", "निबल", "वर्ड"],
        "answer_en": "Bit",
        "answer_hi": "बिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What does DNS stand for?",
        "question_hi": "DNS का पूरा नाम क्या है?",
        "options_en": ["Domain Name System", "Domain Name Server", "Domain Network System", "Domain Network Server"],
        "options_hi": ["डोमेन नेम सिस्टम", "डोमेन नेम सर्वर", "डोमेन नेटवर्क सिस्टम", "डोमेन नेटवर्क सर्वर"],
        "answer_en": "Domain Name System",
        "answer_hi": "डोमेन नेम सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which generation used microprocessors?",
        "question_hi": "किस पीढ़ी में माइक्रोप्रोसेसर का उपयोग किया गया?",
        "options_en": ["Fourth", "First", "Second", "Third"],
        "options_hi": ["चौथी", "पहली", "दूसरी", "तीसरी"],
        "answer_en": "Fourth",
        "answer_hi": "चौथी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does FTP stand for?",
        "question_hi": "FTP का पूरा नाम क्या है?",
        "options_en": ["File Transfer Protocol", "File Transmission Protocol", "Fast Transfer Protocol", "Fast Transmission Protocol"],
        "options_hi": ["फाइल ट्रांसफर प्रोटोकॉल", "फाइल ट्रांसमिशन प्रोटोकॉल", "फास्ट ट्रांसफर प्रोटोकॉल", "फास्ट ट्रांसमिशन प्रोटोकॉल"],
        "answer_en": "File Transfer Protocol",
        "answer_hi": "फाइल ट्रांसफर प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which is secondary memory?",
        "question_hi": "सेकेंडरी मेमोरी कौन सी है?",
        "options_en": ["Hard Disk", "RAM", "Cache", "Register"],
        "options_hi": ["हार्ड डिस्क", "रैम", "कैश", "रजिस्टर"],
        "answer_en": "Hard Disk",
        "answer_hi": "हार्ड डिस्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the extension of a C++ file?",
        "question_hi": "C++ फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".cpp", ".c++", ".c", ".cc"],
        "options_hi": [".cpp", ".c++", ".c", ".cc"],
        "answer_en": ".cpp",
        "answer_hi": ".cpp",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What does LAN stand for?",
        "question_hi": "LAN का पूरा नाम क्या है?",
        "options_en": ["Local Area Network", "Large Area Network", "Local Access Network", "Large Access Network"],
        "options_hi": ["लोकल एरिया नेटवर्क", "लार्ज एरिया नेटवर्क", "लोकल एक्सेस नेटवर्क", "लार्ज एक्सेस नेटवर्क"],
        "answer_en": "Local Area Network",
        "answer_hi": "लोकल एरिया नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the binary equivalent of decimal 31?",
        "question_hi": "दशमलव 31 का बाइनरी समकक्ष क्या है?",
        "options_en": ["11111", "11110", "10111", "11011"],
        "options_hi": ["11111", "11110", "10111", "11011"],
        "answer_en": "11111",
        "answer_hi": "11111",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which company developed macOS?",
        "question_hi": "macOS किस कंपनी ने विकसित किया?",
        "options_en": ["Apple", "Microsoft", "IBM", "Google"],
        "options_hi": ["एप्पल", "माइक्रोसॉफ्ट", "आईबीएम", "गूगल"],
        "answer_en": "Apple",
        "answer_hi": "एप्पल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the full form of XML?",
        "question_hi": "XML का पूरा नाम क्या है?",
        "options_en": ["eXtensible Markup Language", "eXecutable Markup Language", "eXtra Modern Language", "eXtended Machine Language"],
        "options_hi": ["एक्स्टेंसिबल मार्कअप लैंग्वेज", "एक्जीक्यूटेबल मार्कअप लैंग्वेज", "एक्स्ट्रा मॉडर्न लैंग्वेज", "एक्सटेंडेड मशीन लैंग्वेज"],
        "answer_en": "eXtensible Markup Language",
        "answer_hi": "एक्स्टेंसिबल मार्कअप लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is 1 kilobyte equal to?",
        "question_hi": "1 किलोबाइट किसके बराबर होता है?",
        "options_en": ["1024 bytes", "1000 bytes", "2048 bytes", "2000 bytes"],
        "options_hi": ["1024 बाइट्स", "1000 बाइट्स", "2048 बाइट्स", "2000 बाइट्स"],
        "answer_en": "1024 bytes",
        "answer_hi": "1024 बाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What does HTTPS stand for?",
        "question_hi": "HTTPS का पूरा नाम क्या है?",
        "options_en": ["HyperText Transfer Protocol Secure", "HyperText Transfer Protocol System", "HighText Transfer Protocol Secure", "HighText Transfer Protocol System"],
        "options_hi": ["हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल सिक्योर", "हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल सिस्टम", "हाईटेक्स्ट ट्रांसफर प्रोटोकॉल सिक्योर", "हाईटेक्स्ट ट्रांसफर प्रोटोकॉल सिस्टम"],
        "answer_en": "HyperText Transfer Protocol Secure",
        "answer_hi": "हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल सिक्योर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What does GUI stand for?",
        "question_hi": "GUI का पूरा नाम क्या है?",
        "options_en": ["Graphical User Interface", "Graphical Utility Interface", "General User Interface", "General Utility Interface"],
        "options_hi": ["ग्राफिकल यूज़र इंटरफेस", "ग्राफिकल यूटिलिटी इंटरफेस", "जनरल यूज़र इंटरफेस", "जनरल यूटिलिटी इंटरफेस"],
        "answer_en": "Graphical User Interface",
        "answer_hi": "ग्राफिकल यूज़र इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the extension of a JavaScript file?",
        "question_hi": "जावास्क्रिप्ट फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".js", ".javascript", ".java", ".jsc"],
        "options_hi": [".js", ".javascript", ".java", ".jsc"],
        "answer_en": ".js",
        "answer_hi": ".js",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What does WAN stand for?",
        "question_hi": "WAN का पूरा नाम क्या है?",
        "options_en": ["Wide Area Network", "Wireless Area Network", "Wide Access Network", "Wireless Access Network"],
        "options_hi": ["वाइड एरिया नेटवर्क", "वायरलेस एरिया नेटवर्क", "वाइड एक्सेस नेटवर्क", "वायरलेस एक्सेस नेटवर्क"],
        "answer_en": "Wide Area Network",
        "answer_hi": "वाइड एरिया नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the hexadecimal equivalent of decimal 255?",
        "question_hi": "दशमलव 255 का हेक्साडेसिमल समकक्ष क्या है?",
        "options_en": ["FF", "F0", "0F", "AA"],
        "options_hi": ["FF", "F0", "0F", "AA"],
        "answer_en": "FF",
        "answer_hi": "FF",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What does API stand for?",
        "question_hi": "API का पूरा नाम क्या है?",
        "options_en": ["Application Programming Interface", "Application Program Interface", "Advanced Programming Interface", "Advanced Program Interface"],
        "options_hi": ["एप्लिकेशन प्रोग्रामिंग इंटरफेस", "एप्लिकेशन प्रोग्राम इंटरफेस", "एडवांस्ड प्रोग्रामिंग इंटरफेस", "एडवांस्ड प्रोग्राम इंटरफेस"],
        "answer_en": "Application Programming Interface",
        "answer_hi": "एप्लिकेशन प्रोग्रामिंग इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the extension of a C file?",
        "question_hi": "C फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".c", ".cpp", ".c++", ".cprog"],
        "options_hi": [".c", ".cpp", ".c++", ".cprog"],
        "answer_en": ".c",
        "answer_hi": ".c",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What does TCP stand for?",
        "question_hi": "TCP का पूरा नाम क्या है?",
        "options_en": ["Transmission Control Protocol", "Transfer Control Protocol", "Transmission Control Program", "Transfer Control Program"],
        "options_hi": ["ट्रांसमिशन कंट्रोल प्रोटोकॉल", "ट्रांसफर कंट्रोल प्रोटोकॉल", "ट्रांसमिशन कंट्रोल प्रोग्राम", "ट्रांसफर कंट्रोल प्रोग्राम"],
        "answer_en": "Transmission Control Protocol",
        "answer_hi": "ट्रांसमिशन कंट्रोल प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the binary equivalent of decimal 63?",
        "question_hi": "दशमलव 63 का बाइनरी समकक्ष क्या है?",
        "options_en": ["111111", "111110", "101111", "110111"],
        "options_hi": ["111111", "111110", "101111", "110111"],
        "answer_en": "111111",
        "answer_hi": "111111",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What does VPN stand for?",
        "question_hi": "VPN का पूरा नाम क्या है?",
        "options_en": ["Virtual Private Network", "Virtual Public Network", "Verified Private Network", "Verified Public Network"],
        "options_hi": ["वर्चुअल प्राइवेट नेटवर्क", "वर्चुअल पब्लिक नेटवर्क", "वेरिफाइड प्राइवेट नेटवर्क", "वेरिफाइड पब्लिक नेटवर्क"],
        "answer_en": "Virtual Private Network",
        "answer_hi": "वर्चुअल प्राइवेट नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the extension of an HTML file?",
        "question_hi": "HTML फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".html", ".htm", ".hml", ".ht"],
        "options_hi": [".html", ".htm", ".hml", ".ht"],
        "answer_en": ".html",
        "answer_hi": ".html",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What does UDP stand for?",
        "question_hi": "UDP का पूरा नाम क्या है?",
        "options_en": ["User Datagram Protocol", "User Data Protocol", "Universal Datagram Protocol", "Universal Data Protocol"],
        "options_hi": ["यूज़र डेटाग्राम प्रोटोकॉल", "यूज़र डेटा प्रोटोकॉल", "यूनिवर्सल डेटाग्राम प्रोटोकॉल", "यूनिवर्सल डेटा प्रोटोकॉल"],
        "answer_en": "User Datagram Protocol",
        "answer_hi": "यूज़र डेटाग्राम प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the octal equivalent of decimal 8?",
        "question_hi": "दशमलव 8 का ऑक्टल समकक्ष क्या है?",
        "options_en": ["10", "11", "12", "13"],
        "options_hi": ["10", "11", "12", "13"],
        "answer_en": "10",
        "answer_hi": "10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What does SSL stand for?",
        "question_hi": "SSL का पूरा नाम क्या है?",
        "options_en": ["Secure Sockets Layer", "Secure System Layer", "System Sockets Layer", "System Secure Layer"],
        "options_hi": ["सिक्योर सॉकेट्स लेयर", "सिक्योर सिस्टम लेयर", "सिस्टम सॉकेट्स लेयर", "सिस्टम सिक्योर लेयर"],
        "answer_en": "Secure Sockets Layer",
        "answer_hi": "सिक्योर सॉकेट्स लेयर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the extension of a PHP file?",
        "question_hi": "PHP फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".php", ".ph", ".phtml", ".phps"],
        "options_hi": [".php", ".ph", ".phtml", ".phps"],
        "answer_en": ".php",
        "answer_hi": ".php",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What does IP stand for?",
        "question_hi": "IP का पूरा नाम क्या है?",
        "options_en": ["Internet Protocol", "Internet Program", "International Protocol", "International Program"],
        "options_hi": ["इंटरनेट प्रोटोकॉल", "इंटरनेट प्रोग्राम", "इंटरनेशनल प्रोटोकॉल", "इंटरनेशनल प्रोग्राम"],
        "answer_en": "Internet Protocol",
        "answer_hi": "इंटरनेट प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the binary equivalent of decimal 127?",
        "question_hi": "दशमलव 127 का बाइनरी समकक्ष क्या है?",
        "options_en": ["1111111", "1111110", "1011111", "1101111"],
        "options_hi": ["1111111", "1111110", "1011111", "1101111"],
        "answer_en": "1111111",
        "answer_hi": "1111111",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What does IDE stand for?",
        "question_hi": "IDE का पूरा नाम क्या है?",
        "options_en": ["Integrated Development Environment", "Integrated Development Engine", "International Development Environment", "International Development Engine"],
        "options_hi": ["इंटीग्रेटेड डेवलपमेंट एनवायरनमेंट", "इंटीग्रेटेड डेवलपमेंट इंजन", "इंटरनेशनल डेवलपमेंट एनवायरनमेंट", "इंटरनेशनल डेवलपमेंट इंजन"],
        "answer_en": "Integrated Development Environment",
        "answer_hi": "इंटीग्रेटेड डेवलपमेंट एनवायरनमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the extension of a CSS file?",
        "question_hi": "CSS फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".css", ".style", ".cascade", ".sheet"],
        "options_hi": [".css", ".style", ".cascade", ".sheet"],
        "answer_en": ".css",
        "answer_hi": ".css",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What does CLI stand for?",
        "question_hi": "CLI का पूरा नाम क्या है?",
        "options_en": ["Command Line Interface", "Command Language Interface", "Computer Line Interface", "Computer Language Interface"],
        "options_hi": ["कमांड लाइन इंटरफेस", "कमांड लैंग्वेज इंटरफेस", "कंप्यूटर लाइन इंटरफेस", "कंप्यूटर लैंग्वेज इंटरफेस"],
        "answer_en": "Command Line Interface",
        "answer_hi": "कमांड लाइन इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the extension of a JSON file?",
        "question_hi": "JSON फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".json", ".jsn", ".jso", ".js"],
        "options_hi": [".json", ".jsn", ".jso", ".js"],
        "answer_en": ".json",
        "answer_hi": ".json",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What does DBMS stand for?",
        "question_hi": "DBMS का पूरा नाम क्या है?",
        "options_en": ["Database Management System", "Database Management Software", "Data Basic Management System", "Data Basic Management Software"],
        "options_hi": ["डेटाबेस मैनेजमेंट सिस्टम", "डेटाबेस मैनेजमेंट सॉफ्टवेयर", "डेटा बेसिक मैनेजमेंट सिस्टम", "डेटा बेसिक मैनेजमेंट सॉफ्टवेयर"],
        "answer_en": "Database Management System",
        "answer_hi": "डेटाबेस मैनेजमेंट सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the extension of an XML file?",
        "question_hi": "XML फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".xml", ".xm", ".xlm", ".x"],
        "options_hi": [".xml", ".xm", ".xlm", ".x"],
        "answer_en": ".xml",
        "answer_hi": ".xml",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What does ASCII stand for?",
        "question_hi": "ASCII का पूरा नाम क्या है?",
        "options_en": ["American Standard Code for Information Interchange", "American System Code for Information Interchange", "American Standard Code for International Interchange", "American System Code for International Interchange"],
        "options_hi": ["अमेरिकन स्टैंडर्ड कोड फॉर इनफॉर्मेशन इंटरचेंज", "अमेरिकन सिस्टम कोड फॉर इनफॉर्मेशन इंटरचेंज", "अमेरिकन स्टैंडर्ड कोड फॉर इंटरनेशनल इंटरचेंज", "अमेरिकन सिस्टम कोड फॉर इंटरनेशनल इंटरचेंज"],
        "answer_en": "American Standard Code for Information Interchange",
        "answer_hi": "अमेरिकन स्टैंडर्ड कोड फॉर इनफॉर्मेशन इंटरचेंज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the extension of a SQL file?",
        "question_hi": "SQL फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".sql", ".sq", ".db", ".query"],
        "options_hi": [".sql", ".sq", ".db", ".query"],
        "answer_en": ".sql",
        "answer_hi": ".sql",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What does OSI stand for?",
        "question_hi": "OSI का पूरा नाम क्या है?",
        "options_en": ["Open Systems Interconnection", "Open Software Interconnection", "Operating Systems Interconnection", "Operating Software Interconnection"],
        "options_hi": ["ओपन सिस्टम्स इंटरकनेक्शन", "ओपन सॉफ्टवेयर इंटरकनेक्शन", "ऑपरेटिंग सिस्टम्स इंटरकनेक्शन", "ऑपरेटिंग सॉफ्टवेयर इंटरकनेक्शन"],
        "answer_en": "Open Systems Interconnection",
        "answer_hi": "ओपन सिस्टम्स इंटरकनेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the extension of a batch file?",
        "question_hi": "बैच फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".bat", ".batch", ".bt", ".cmd"],
        "options_hi": [".bat", ".batch", ".bt", ".cmd"],
        "answer_en": ".bat",
        "answer_hi": ".bat",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What does RDBMS stand for?",
        "question_hi": "RDBMS का पूरा नाम क्या है?",
        "options_en": ["Relational Database Management System", "Relational Data Management System", "Relational Database Management Software", "Relational Data Management Software"],
        "options_hi": ["रिलेशनल डेटाबेस मैनेजमेंट सिस्टम", "रिलेशनल डेटा मैनेजमेंट सिस्टम", "रिलेशनल डेटाबेस मैनेजमेंट सॉफ्टवेयर", "रिलेशनल डेटा मैनेजमेंट सॉफ्टवेयर"],
        "answer_en": "Relational Database Management System",
        "answer_hi": "रिलेशनल डेटाबेस मैनेजमेंट सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the extension of a PowerShell file?",
        "question_hi": "PowerShell फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".ps1", ".ps", ".powershell", ".psh"],
        "options_hi": [".ps1", ".ps", ".powershell", ".psh"],
        "answer_en": ".ps1",
        "answer_hi": ".ps1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What does JPEG stand for?",
        "question_hi": "JPEG का पूरा नाम क्या है?",
        "options_en": ["Joint Photographic Experts Group", "Joint Picture Experts Group", "Joint Photographic Encoding Group", "Joint Picture Encoding Group"],
        "options_hi": ["जॉइंट फोटोग्राफिक एक्सपर्ट्स ग्रुप", "जॉइंट पिक्चर एक्सपर्ट्स ग्रुप", "जॉइंट फोटोग्राफिक एन्कोडिंग ग्रुप", "जॉइंट पिक्चर एन्कोडिंग ग्रुप"],
        "answer_en": "Joint Photographic Experts Group",
        "answer_hi": "जॉइंट फोटोग्राफिक एक्सपर्ट्स ग्रुप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the extension of a TypeScript file?",
        "question_hi": "TypeScript फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".ts", ".typescript", ".tps", ".tp"],
        "options_hi": [".ts", ".typescript", ".tps", ".tp"],
        "answer_en": ".ts",
        "answer_hi": ".ts",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What does GIF stand for?",
        "question_hi": "GIF का पूरा नाम क्या है?",
        "options_en": ["Graphics Interchange Format", "Graphical Interchange Format", "Graphics Image Format", "Graphical Image Format"],
        "options_hi": ["ग्राफिक्स इंटरचेंज फॉर्मेट", "ग्राफिकल इंटरचेंज फॉर्मेट", "ग्राफिक्स इमेज फॉर्मेट", "ग्राफिकल इमेज फॉर्मेट"],
        "answer_en": "Graphics Interchange Format",
        "answer_hi": "ग्राफिक्स इंटरचेंज फॉर्मेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the extension of a Markdown file?",
        "question_hi": "Markdown फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".md", ".markdown", ".mkd", ".mdown"],
        "options_hi": [".md", ".markdown", ".mkd", ".mdown"],
        "answer_en": ".md",
        "answer_hi": ".md",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What does PNG stand for?",
        "question_hi": "PNG का पूरा नाम क्या है?",
        "options_en": ["Portable Network Graphics", "Portable Network Group", "Portable Network Graphics", "Portable Network Group"],
        "options_hi": ["पोर्टेबल नेटवर्क ग्राफिक्स", "पोर्टेबल नेटवर्क ग्रुप", "पोर्टेबल नेटवर्क ग्राफिक्स", "पोर्टेबल नेटवर्क ग्रुप"],
        "answer_en": "Portable Network Graphics",
        "answer_hi": "पोर्टेबल नेटवर्क ग्राफिक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the extension of a YAML file?",
        "question_hi": "YAML फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".yaml", ".yml", ".y", ".yam"],
        "options_hi": [".yaml", ".yml", ".y", ".yam"],
        "answer_en": ".yaml",
        "answer_hi": ".yaml",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What does PDF stand for?",
        "question_hi": "PDF का पूरा नाम क्या है?",
        "options_en": ["Portable Document Format", "Portable Document File", "Portable Data Format", "Portable Data File"],
        "options_hi": ["पोर्टेबल डॉक्यूमेंट फॉर्मेट", "पोर्टेबल डॉक्यूमेंट फाइल", "पोर्टेबल डेटा फॉर्मेट", "पोर्टेबल डेटा फाइल"],
        "answer_en": "Portable Document Format",
        "answer_hi": "पोर्टेबल डॉक्यूमेंट फॉर्मेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the extension of a Shell script file?",
        "question_hi": "Shell स्क्रिप्ट फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".sh", ".shell", ".bash", ".zsh"],
        "options_hi": [".sh", ".shell", ".bash", ".zsh"],
        "answer_en": ".sh",
        "answer_hi": ".sh",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What does MP3 stand for?",
        "question_hi": "MP3 का पूरा नाम क्या है?",
        "options_en": ["MPEG Audio Layer-3", "MPEG Audio Layer-2", "MPEG Audio Layer-1", "MPEG Audio Layer-4"],
        "options_hi": ["एमपीईजी ऑडियो लेयर-3", "एमपीईजी ऑडियो लेयर-2", "एमपीईजी ऑडियो लेयर-1", "एमपीईजी ऑडियो लेयर-4"],
        "answer_en": "MPEG Audio Layer-3",
        "answer_hi": "एमपीईजी ऑडियो लेयर-3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the extension of a Go file?",
        "question_hi": "Go फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".go", ".golang", ".g", ".gofile"],
        "options_hi": [".go", ".golang", ".g", ".gofile"],
        "answer_en": ".go",
        "answer_hi": ".go",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What does MPEG stand for?",
        "question_hi": "MPEG का पूरा नाम क्या है?",
        "options_en": ["Moving Picture Experts Group", "Moving Picture Encoding Group", "Motion Picture Experts Group", "Motion Picture Encoding Group"],
        "options_hi": ["मूविंग पिक्चर एक्सपर्ट्स ग्रुप", "मूविंग पिक्चर एन्कोडिंग ग्रुप", "मोशन पिक्चर एक्सपर्ट्स ग्रुप", "मोशन पिक्चर एन्कोडिंग ग्रुप"],
        "answer_en": "Moving Picture Experts Group",
        "answer_hi": "मूविंग पिक्चर एक्सपर्ट्स ग्रुप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the extension of a Ruby file?",
        "question_hi": "रूबी फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".rb", ".ruby", ".rub", ".rby"],
        "options_hi": [".rb", ".ruby", ".rub", ".rby"],
        "answer_en": ".rb",
        "answer_hi": ".rb",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What does AVI stand for?",
        "question_hi": "AVI का पूरा नाम क्या है?",
        "options_en": ["Audio Video Interleave", "Audio Video Interface", "Audio Visual Interleave", "Audio Visual Interface"],
        "options_hi": ["ऑडियो वीडियो इंटरलीव", "ऑडियो वीडियो इंटरफेस", "ऑडियो विजुअल इंटरलीव", "ऑडियो विजुअल इंटरफेस"],
        "answer_en": "Audio Video Interleave",
        "answer_hi": "ऑडियो वीडियो इंटरलीव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the extension of a Swift file?",
        "question_hi": "Swift फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".swift", ".sw", ".swf", ".swt"],
        "options_hi": [".swift", ".sw", ".swf", ".swt"],
        "answer_en": ".swift",
        "answer_hi": ".swift",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What does USB stand for?",
        "question_hi": "USB का पूरा नाम क्या है?",
        "options_en": ["Universal Serial Bus", "Universal System Bus", "Universal Serial Bridge", "Universal System Bridge"],
        "options_hi": ["यूनिवर्सल सीरियल बस", "यूनिवर्सल सिस्टम बस", "यूनिवर्सल सीरियल ब्रिज", "यूनिवर्सल सिस्टम ब्रिज"],
        "answer_en": "Universal Serial Bus",
        "answer_hi": "यूनिवर्सल सीरियल बस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the extension of a Kotlin file?",
        "question_hi": "Kotlin फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".kt", ".kts", ".kotlin", ".kot"],
        "options_hi": [".kt", ".kts", ".kotlin", ".kot"],
        "answer_en": ".kt",
        "answer_hi": ".kt",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What does HDMI stand for?",
        "question_hi": "HDMI का पूरा नाम क्या है?",
        "options_en": ["High Definition Multimedia Interface", "High Definition Media Interface", "High Definition Multimedia Interconnect", "High Definition Media Interconnect"],
        "options_hi": ["हाई डेफिनिशन मल्टीमीडिया इंटरफेस", "हाई डेफिनिशन मीडिया इंटरफेस", "हाई डेफिनिशन मल्टीमीडिया इंटरकनेक्ट", "हाई डेफिनिशन मीडिया इंटरकनेक्ट"],
        "answer_en": "High Definition Multimedia Interface",
        "answer_hi": "हाई डेफिनिशन मल्टीमीडिया इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the extension of a Rust file?",
        "question_hi": "Rust फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".rs", ".rust", ".rst", ".r"],
        "options_hi": [".rs", ".rust", ".rst", ".r"],
        "answer_en": ".rs",
        "answer_hi": ".rs",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What does VGA stand for?",
        "question_hi": "VGA का पूरा नाम क्या है?",
        "options_en": ["Video Graphics Array", "Video Graphics Adapter", "Video Graphics Architecture", "Video Graphics Application"],
        "options_hi": ["वीडियो ग्राफिक्स ऐरे", "वीडियो ग्राफिक्स एडाप्टर", "वीडियो ग्राफिक्स आर्किटेक्चर", "वीडियो ग्राफिक्स एप्लिकेशन"],
        "answer_en": "Video Graphics Array",
        "answer_hi": "वीडियो ग्राफिक्स ऐरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the extension of a Dart file?",
        "question_hi": "Dart फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".dart", ".dt", ".dr", ".dartfile"],
        "options_hi": [".dart", ".dt", ".dr", ".dartfile"],
        "answer_en": ".dart",
        "answer_hi": ".dart",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What does PCI stand for?",
        "question_hi": "PCI का पूरा नाम क्या है?",
        "options_en": ["Peripheral Component Interconnect", "Peripheral Component Interface", "Peripheral Computer Interconnect", "Peripheral Computer Interface"],
        "options_hi": ["पेरिफेरल कंपोनेंट इंटरकनेक्ट", "पेरिफेरल कंपोनेंट इंटरफेस", "पेरिफेरल कंप्यूटर इंटरकनेक्ट", "पेरिफेरल कंप्यूटर इंटरफेस"],
        "answer_en": "Peripheral Component Interconnect",
        "answer_hi": "पेरिफेरल कंपोनेंट इंटरकनेक्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the extension of a Scala file?",
        "question_hi": "Scala फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".scala", ".sc", ".scl", ".scfile"],
        "options_hi": [".scala", ".sc", ".scl", ".scfile"],
        "answer_en": ".scala",
        "answer_hi": ".scala",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What does AGP stand for?",
        "question_hi": "AGP का पूरा नाम क्या है?",
        "options_en": ["Accelerated Graphics Port", "Advanced Graphics Port", "Accelerated Graphics Protocol", "Advanced Graphics Protocol"],
        "options_hi": ["एक्सेलेरेटेड ग्राफिक्स पोर्ट", "एडवांस्ड ग्राफिक्स पोर्ट", "एक्सेलेरेटेड ग्राफिक्स प्रोटोकॉल", "एडवांस्ड ग्राफिक्स प्रोटोकॉल"],
        "answer_en": "Accelerated Graphics Port",
        "answer_hi": "एक्सेलेरेटेड ग्राफिक्स पोर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the extension of a Perl file?",
        "question_hi": "Perl फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".pl", ".perl", ".prl", ".plfile"],
        "options_hi": [".pl", ".perl", ".prl", ".plfile"],
        "answer_en": ".pl",
        "answer_hi": ".pl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What does SATA stand for?",
        "question_hi": "SATA का पूरा नाम क्या है?",
        "options_en": ["Serial Advanced Technology Attachment", "Serial Advanced Technology Architecture", "Serial Advanced Transfer Attachment", "Serial Advanced Transfer Architecture"],
        "options_hi": ["सीरियल एडवांस्ड टेक्नोलॉजी अटैचमेंट", "सीरियल एडवांस्ड टेक्नोलॉजी आर्किटेक्चर", "सीरियल एडवांस्ड ट्रांसफर अटैचमेंट", "सीरियल एडवांस्ड ट्रांसफर आर्किटेक्चर"],
        "answer_en": "Serial Advanced Technology Attachment",
        "answer_hi": "सीरियल एडवांस्ड टेक्नोलॉजी अटैचमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the extension of a Lua file?",
        "question_hi": "Lua फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".lua", ".lu", ".l", ".luafile"],
        "options_hi": [".lua", ".lu", ".l", ".luafile"],
        "answer_en": ".lua",
        "answer_hi": ".lua",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What does PATA stand for?",
        "question_hi": "PATA का पूरा नाम क्या है?",
        "options_en": ["Parallel Advanced Technology Attachment", "Parallel Advanced Technology Architecture", "Parallel Advanced Transfer Attachment", "Parallel Advanced Transfer Architecture"],
        "options_hi": ["पैरेलल एडवांस्ड टेक्नोलॉजी अटैचमेंट", "पैरेलल एडवांस्ड टेक्नोलॉजी आर्किटेक्चर", "पैरेलल एडवांस्ड ट्रांसफर अटैचमेंट", "पैरेलल एडवांस्ड ट्रांसफर आर्किटेक्चर"],
        "answer_en": "Parallel Advanced Technology Attachment",
        "answer_hi": "पैरेलल एडवांस्ड टेक्नोलॉजी अटैचमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the extension of a Haskell file?",
        "question_hi": "Haskell फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".hs", ".haskell", ".h", ".hfile"],
        "options_hi": [".hs", ".haskell", ".h", ".hfile"],
        "answer_en": ".hs",
        "answer_hi": ".hs",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What does RAID stand for?",
        "question_hi": "RAID का पूरा नाम क्या है?",
        "options_en": ["Redundant Array of Independent Disks", "Redundant Array of Independent Drives", "Redundant Array of Inexpensive Disks", "Redundant Array of Inexpensive Drives"],
        "options_hi": ["रिडंडेंट ऐरे ऑफ इंडिपेंडेंट डिस्क्स", "रिडंडेंट ऐरे ऑफ इंडिपेंडेंट ड्राइव्स", "रिडंडेंट ऐरे ऑफ इनएक्सपेंसिव डिस्क्स", "रिडंडेंट ऐरे ऑफ इनएक्सपेंसिव ड्राइव्स"],
        "answer_en": "Redundant Array of Independent Disks",
        "answer_hi": "रिडंडेंट ऐरे ऑफ इंडिपेंडेंट डिस्क्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the extension of an Elixir file?",
        "question_hi": "Elixir फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".ex", ".exs", ".elixir", ".exfile"],
        "options_hi": [".ex", ".exs", ".elixir", ".exfile"],
        "answer_en": ".ex",
        "answer_hi": ".ex",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What does BIOS stand for in computing?",
        "question_hi": "कंप्यूटिंग में BIOS का पूरा नाम क्या है?",
        "options_en": ["Basic Input/Output System", "Binary Input/Output System", "Basic Integrated Operating System", "Binary Integrated Operating System"],
        "options_hi": ["बेसिक इनपुट/आउटपुट सिस्टम", "बाइनरी इनपुट/आउटपुट सिस्टम", "बेसिक इंटीग्रेटेड ऑपरेटिंग सिस्टम", "बाइनरी इंटीग्रेटेड ऑपरेटिंग सिस्टम"],
        "answer_en": "Basic Input/Output System",
        "answer_hi": "बेसिक इनपुट/आउटपुट सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the extension of a Julia file?",
        "question_hi": "Julia फ़ाइल का एक्सटेंशन क्या है?",
        "options_en": [".jl", ".julia", ".ju", ".jlfile"],
        "options_hi": [".jl", ".julia", ".ju", ".jlfile"],
        "answer_en": ".jl",
        "answer_hi": ".jl",
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