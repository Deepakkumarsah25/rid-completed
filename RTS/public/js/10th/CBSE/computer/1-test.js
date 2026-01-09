const questions = [
    {
        "num": 1,
        "question_en": "What is the brain of the computer called?",
        "question_hi": "कंप्यूटर के दिमाग को क्या कहा जाता है?",
        "options_en": ["CPU", "RAM", "Hard Disk", "Motherboard"],
        "options_hi": ["सीपीयू", "रैम", "हार्ड डिस्क", "मदरबोर्ड"],
        "answer_en": "CPU",
        "answer_hi": "सीपीयू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
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
        "num": 3,
        "question_en": "Which programming language is known as the mother of all languages?",
        "question_hi": "किस प्रोग्रामिंग भाषा को सभी भाषाओं की जननी कहा जाता है?",
        "options_en": ["C", "Assembly", "FORTRAN", "COBOL"],
        "options_hi": ["C", "असेंबली", "फोरट्रान", "कोबोल"],
        "answer_en": "C",
        "answer_hi": "C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the full form of URL?",
        "question_hi": "URL का पूरा नाम क्या है?",
        "options_en": ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"],
        "options_hi": ["यूनिफॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लोकेटर", "यूनिफॉर्म रिसोर्स लिंक", "यूनिवर्सल रिसोर्स लिंक"],
        "answer_en": "Uniform Resource Locator",
        "answer_hi": "यूनिफॉर्म रिसोर्स लोकेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which company developed the Windows operating system?",
        "question_hi": "विंडोज ऑपरेटिंग सिस्टम किस कंपनी ने विकसित किया?",
        "options_en": ["Microsoft", "Apple", "IBM", "Google"],
        "options_hi": ["माइक्रोसॉफ्ट", "एप्पल", "आईबीएम", "गूगल"],
        "answer_en": "Microsoft",
        "answer_hi": "माइक्रोसॉफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the binary equivalent of decimal number 10?",
        "question_hi": "दशमलव संख्या 10 का बाइनरी समकक्ष क्या है?",
        "options_en": ["1010", "1001", "1100", "1011"],
        "options_hi": ["1010", "1001", "1100", "1011"],
        "answer_en": "1010",
        "answer_hi": "1010",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which protocol is used for sending emails?",
        "question_hi": "ईमेल भेजने के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["SMTP", "POP3", "IMAP", "HTTP"],
        "options_hi": ["एसएमटीपी", "पॉप3", "आईमैप", "एचटीटीपी"],
        "answer_en": "SMTP",
        "answer_hi": "एसएमटीपी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does HTML stand for?",
        "question_hi": "HTML का पूरा नाम क्या है?",
        "options_en": ["HyperText Markup Language", "HyperText Machine Language", "HighText Markup Language", "HyperTool Markup Language"],
        "options_hi": ["हाइपरटेक्स्ट मार्कअप लैंग्वेज", "हाइपरटेक्स्ट मशीन लैंग्वेज", "हाईटेक्स्ट मार्कअप लैंग्वेज", "हाइपरटूल मार्कअप लैंग्वेज"],
        "answer_en": "HyperText Markup Language",
        "answer_hi": "हाइपरटेक्स्ट मार्कअप लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which component is known as permanent memory?",
        "question_hi": "किस घटक को स्थायी मेमोरी के रूप में जाना जाता है?",
        "options_en": ["Hard Disk", "RAM", "Cache", "Register"],
        "options_hi": ["हार्ड डिस्क", "रैम", "कैश", "रजिस्टर"],
        "answer_en": "Hard Disk",
        "answer_hi": "हार्ड डिस्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
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
        "num": 11,
        "question_en": "Which device converts digital signals to analog signals?",
        "question_hi": "कौन सा उपकरण डिजिटल सिग्नल को एनालॉग सिग्नल में परिवर्तित करता है?",
        "options_en": ["Modem", "Router", "Switch", "Hub"],
        "options_hi": ["मॉडेम", "राउटर", "स्विच", "हब"],
        "answer_en": "Modem",
        "answer_hi": "मॉडेम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the full form of SQL?",
        "question_hi": "SQL का पूरा नाम क्या है?",
        "options_en": ["Structured Query Language", "Structured Question Language", "Sequential Query Language", "Simple Query Language"],
        "options_hi": ["स्ट्रक्चर्ड क्वेरी लैंग्वेज", "स्ट्रक्चर्ड क्वेश्चन लैंग्वेज", "सीक्वेंशियल क्वेरी लैंग्वेज", "सिंपल क्वेरी लैंग्वेज"],
        "answer_en": "Structured Query Language",
        "answer_hi": "स्ट्रक्चर्ड क्वेरी लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which company created the Java programming language?",
        "question_hi": "जावा प्रोग्रामिंग भाषा किस कंपनी ने बनाई?",
        "options_en": ["Sun Microsystems", "Microsoft", "Oracle", "IBM"],
        "options_hi": ["सन माइक्रोसिस्टम्स", "माइक्रोसॉफ्ट", "ओरेकल", "आईबीएम"],
        "answer_en": "Sun Microsystems",
        "answer_hi": "सन माइक्रोसिस्टम्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What does HTTP stand for?",
        "question_hi": "HTTP का पूरा नाम क्या है?",
        "options_en": ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HighText Transfer Protocol", "HyperTool Transfer Protocol"],
        "options_hi": ["हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाइपरटेक्स्ट ट्रांसमिशन प्रोटोकॉल", "हाईटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाइपरटूल ट्रांसफर प्रोटोकॉल"],
        "answer_en": "HyperText Transfer Protocol",
        "answer_hi": "हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which is the fastest memory in a computer?",
        "question_hi": "कंप्यूटर में सबसे तेज मेमोरी कौन सी है?",
        "options_en": ["Cache", "RAM", "Hard Disk", "SSD"],
        "options_hi": ["कैश", "रैम", "हार्ड डिस्क", "एसएसडी"],
        "answer_en": "Cache",
        "answer_hi": "कैश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
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
        "num": 17,
        "question_en": "Which protocol is used for secure web browsing?",
        "question_hi": "सुरक्षित वेब ब्राउजिंग के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["HTTPS", "HTTP", "FTP", "SMTP"],
        "options_hi": ["एचटीटीपीएस", "एचटीटीपी", "एफटीपी", "एसएमटीपी"],
        "answer_en": "HTTPS",
        "answer_hi": "एचटीटीपीएस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
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
        "num": 19,
        "question_en": "Which company developed the Linux operating system?",
        "question_hi": "लिनक्स ऑपरेटिंग सिस्टम किसने विकसित किया?",
        "options_en": ["Linus Torvalds", "Microsoft", "IBM", "Google"],
        "options_hi": ["लिनस टोरवाल्ड्स", "माइक्रोसॉफ्ट", "आईबीएम", "गूगल"],
        "answer_en": "Linus Torvalds",
        "answer_hi": "लिनस टोरवाल्ड्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the binary equivalent of decimal number 15?",
        "question_hi": "दशमलव संख्या 15 का बाइनरी समकक्ष क्या है?",
        "options_en": ["1111", "1010", "1100", "1001"],
        "options_hi": ["1111", "1010", "1100", "1001"],
        "answer_en": "1111",
        "answer_hi": "1111",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which protocol is used for receiving emails?",
        "question_hi": "ईमेल प्राप्त करने के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["POP3", "SMTP", "HTTP", "FTP"],
        "options_hi": ["पॉप3", "एसएमटीपी", "एचटीटीपी", "एफटीपी"],
        "answer_en": "POP3",
        "answer_hi": "पॉप3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does CSS stand for?",
        "question_hi": "CSS का पूरा नाम क्या है?",
        "options_en": ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        "options_hi": ["कैस्केडिंग स्टाइल शीट्स", "कंप्यूटर स्टाइल शीट्स", "क्रिएटिव स्टाइल शीट्स", "कलरफुल स्टाइल शीट्स"],
        "answer_en": "Cascading Style Sheets",
        "answer_hi": "कैस्केडिंग स्टाइल शीट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which is the smallest unit of memory?",
        "question_hi": "मेमोरी की सबसे छोटी इकाई कौन सी है?",
        "options_en": ["Bit", "Byte", "Nibble", "Word"],
        "options_hi": ["बिट", "बाइट", "निबल", "वर्ड"],
        "answer_en": "Bit",
        "answer_hi": "बिट",
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
        "question_en": "Which device connects multiple computers in a network?",
        "question_hi": "कौन सा उपकरण नेटवर्क में कई कंप्यूटरों को जोड़ता है?",
        "options_en": ["Switch", "Modem", "Router", "Repeater"],
        "options_hi": ["स्विच", "मॉडेम", "राउटर", "रिपीटर"],
        "answer_en": "Switch",
        "answer_hi": "स्विच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
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
        "num": 27,
        "question_en": "Who created the Python programming language?",
        "question_hi": "पायथन प्रोग्रामिंग भाषा किसने बनाई?",
        "options_en": ["Guido van Rossum", "James Gosling", "Bjarne Stroustrup", "Dennis Ritchie"],
        "options_hi": ["गुइडो वैन रोसुम", "जेम्स गोस्लिंग", "ब्जार्ने स्ट्रॉस्ट्रुप", "डेनिस रिची"],
        "answer_en": "Guido van Rossum",
        "answer_hi": "गुइडो वैन रोसुम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What does FTP stand for?",
        "question_hi": "FTP का पूरा नाम क्या है?",
        "options_en": ["File Transfer Protocol", "File Transmission Protocol", "Fast Transfer Protocol", "File Transport Protocol"],
        "options_hi": ["फाइल ट्रांसफर प्रोटोकॉल", "फाइल ट्रांसमिशन प्रोटोकॉल", "फास्ट ट्रांसफर प्रोटोकॉल", "फाइल ट्रांसपोर्ट प्रोटोकॉल"],
        "answer_en": "File Transfer Protocol",
        "answer_hi": "फाइल ट्रांसफर प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which memory is volatile?",
        "question_hi": "कौन सी मेमोरी अस्थिर होती है?",
        "options_en": ["RAM", "ROM", "Hard Disk", "SSD"],
        "options_hi": ["रैम", "रोम", "हार्ड डिस्क", "एसएसडी"],
        "answer_en": "RAM",
        "answer_hi": "रैम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
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
        "num": 31,
        "question_en": "Which protocol is used for domain name resolution?",
        "question_hi": "डोमेन नेम रिज़ॉल्यूशन के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["DNS", "HTTP", "SMTP", "FTP"],
        "options_hi": ["डीएनएस", "एचटीटीपी", "एसएमटीपी", "एफटीपी"],
        "answer_en": "DNS",
        "answer_hi": "डीएनएस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
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
        "num": 33,
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
        "num": 34,
        "question_en": "What is the hexadecimal equivalent of decimal number 255?",
        "question_hi": "दशमलव संख्या 255 का हेक्साडेसिमल समकक्ष क्या है?",
        "options_en": ["FF", "F0", "0F", "AA"],
        "options_hi": ["FF", "F0", "0F", "AA"],
        "answer_en": "FF",
        "answer_hi": "FF",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which protocol is used for real-time communication?",
        "question_hi": "रीयल-टाइम संचार के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["WebSocket", "HTTP", "FTP", "SMTP"],
        "options_hi": ["वेबसॉकेट", "एचटीटीपी", "एफटीपी", "एसएमटीपी"],
        "answer_en": "WebSocket",
        "answer_hi": "वेबसॉकेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
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
        "num": 37,
        "question_en": "Which memory is non-volatile?",
        "question_hi": "कौन सी मेमोरी गैर-अस्थिर होती है?",
        "options_en": ["ROM", "RAM", "Cache", "Register"],
        "options_hi": ["रोम", "रैम", "कैश", "रजिस्टर"],
        "answer_en": "ROM",
        "answer_hi": "रोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
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
        "num": 39,
        "question_en": "Which device connects different networks?",
        "question_hi": "कौन सा उपकरण विभिन्न नेटवर्कों को जोड़ता है?",
        "options_en": ["Router", "Switch", "Hub", "Bridge"],
        "options_hi": ["राउटर", "स्विच", "हब", "ब्रिज"],
        "answer_en": "Router",
        "answer_hi": "राउटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the full form of JSON?",
        "question_hi": "JSON का पूरा नाम क्या है?",
        "options_en": ["JavaScript Object Notation", "Java Object Notation", "JavaScript Online Notation", "Java Online Notation"],
        "options_hi": ["जावास्क्रिप्ट ऑब्जेक्ट नोटेशन", "जावा ऑब्जेक्ट नोटेशन", "जावास्क्रिप्ट ऑनलाइन नोटेशन", "जावा ऑनलाइन नोटेशन"],
        "answer_en": "JavaScript Object Notation",
        "answer_hi": "जावास्क्रिप्ट ऑब्जेक्ट नोटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Who created the C programming language?",
        "question_hi": "C प्रोग्रामिंग भाषा किसने बनाई?",
        "options_en": ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"],
        "options_hi": ["डेनिस रिची", "ब्जार्ने स्ट्रॉस्ट्रुप", "जेम्स गोस्लिंग", "गुइडो वैन रोसुम"],
        "answer_en": "Dennis Ritchie",
        "answer_hi": "डेनिस रिची",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
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
        "num": 43,
        "question_en": "Which is the primary memory?",
        "question_hi": "प्राथमिक मेमोरी कौन सी है?",
        "options_en": ["RAM", "Hard Disk", "CD-ROM", "USB Drive"],
        "options_hi": ["रैम", "हार्ड डिस्क", "सीडी-रोम", "यूएसबी ड्राइव"],
        "answer_en": "RAM",
        "answer_hi": "रैम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
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
        "num": 45,
        "question_en": "Which device amplifies signals in a network?",
        "question_hi": "कौन सा उपकरण नेटवर्क में सिग्नल को प्रवर्धित करता है?",
        "options_en": ["Repeater", "Router", "Switch", "Modem"],
        "options_hi": ["रिपीटर", "राउटर", "स्विच", "मॉडेम"],
        "answer_en": "Repeater",
        "answer_hi": "रिपीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the full form of GUI?",
        "question_hi": "GUI का पूरा नाम क्या है?",
        "options_en": ["Graphical User Interface", "Graphical Utility Interface", "General User Interface", "General Utility Interface"],
        "options_hi": ["ग्राफिकल यूज़र इंटरफेस", "ग्राफिकल यूटिलिटी इंटरफेस", "जनरल यूज़र इंटरफेस", "जनरल यूटिलिटी इंटरफेस"],
        "answer_en": "Graphical User Interface",
        "answer_hi": "ग्राफिकल यूज़र इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Who created the C++ programming language?",
        "question_hi": "C++ प्रोग्रामिंग भाषा किसने बनाई?",
        "options_en": ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
        "options_hi": ["ब्जार्ने स्ट्रॉस्ट्रुप", "डेनिस रिची", "जेम्स गोस्लिंग", "गुइडो वैन रोसुम"],
        "answer_en": "Bjarne Stroustrup",
        "answer_hi": "ब्जार्ने स्ट्रॉस्ट्रुप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
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
        "num": 49,
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
        "question_en": "Which protocol is used for transferring files?",
        "question_hi": "फ़ाइलें ट्रांसफर करने के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["FTP", "HTTP", "SMTP", "DNS"],
        "options_hi": ["एफटीपी", "एचटीटीपी", "एसएमटीपी", "डीएनएस"],
        "answer_en": "FTP",
        "answer_hi": "एफटीपी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What does BIOS stand for?",
        "question_hi": "BIOS का पूरा नाम क्या है?",
        "options_en": ["Basic Input Output System", "Basic Input Output Software", "Binary Input Output System", "Binary Input Output Software"],
        "options_hi": ["बेसिक इनपुट आउटपुट सिस्टम", "बेसिक इनपुट आउटपुट सॉफ्टवेयर", "बाइनरी इनपुट आउटपुट सिस्टम", "बाइनरी इनपुट आउटपुट सॉफ्टवेयर"],
        "answer_en": "Basic Input Output System",
        "answer_hi": "बेसिक इनपुट आउटपुट सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which company developed Android OS?",
        "question_hi": "एंड्रॉइड ओएस किस कंपनी ने विकसित किया?",
        "options_en": ["Google", "Apple", "Microsoft", "Samsung"],
        "options_hi": ["गूगल", "एप्पल", "माइक्रोसॉफ्ट", "सैमसंग"],
        "answer_en": "Google",
        "answer_hi": "गूगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the binary equivalent of decimal number 7?",
        "question_hi": "दशमलव संख्या 7 का बाइनरी समकक्ष क्या है?",
        "options_en": ["111", "101", "110", "100"],
        "options_hi": ["111", "101", "110", "100"],
        "answer_en": "111",
        "answer_hi": "111",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which protocol is used for voice over IP?",
        "question_hi": "वॉइस ओवर आईपी के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["SIP", "HTTP", "FTP", "SMTP"],
        "options_hi": ["एसआईपी", "एचटीटीपी", "एफटीपी", "एसएमटीपी"],
        "answer_en": "SIP",
        "answer_hi": "एसआईपी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
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
        "num": 57,
        "question_en": "Which memory is used for BIOS?",
        "question_hi": "BIOS के लिए किस मेमोरी का उपयोग किया जाता है?",
        "options_en": ["ROM", "RAM", "Cache", "Hard Disk"],
        "options_hi": ["रोम", "रैम", "कैश", "हार्ड डिस्क"],
        "answer_en": "ROM",
        "answer_hi": "रोम",
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
        "question_en": "Which device connects computers in a star topology?",
        "question_hi": "कौन सा उपकरण स्टार टोपोलॉजी में कंप्यूटरों को जोड़ता है?",
        "options_en": ["Hub", "Router", "Switch", "Bridge"],
        "options_hi": ["हब", "राउटर", "स्विच", "ब्रिज"],
        "answer_en": "Hub",
        "answer_hi": "हब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the full form of DBMS?",
        "question_hi": "DBMS का पूरा नाम क्या है?",
        "options_en": ["Database Management System", "Database Management Software", "Data Basic Management System", "Data Basic Management Software"],
        "options_hi": ["डेटाबेस मैनेजमेंट सिस्टम", "डेटाबेस मैनेजमेंट सॉफ्टवेयर", "डेटा बेसिक मैनेजमेंट सिस्टम", "डेटा बेसिक मैनेजमेंट सॉफ्टवेयर"],
        "answer_en": "Database Management System",
        "answer_hi": "डेटाबेस मैनेजमेंट सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Who created the JavaScript programming language?",
        "question_hi": "जावास्क्रिप्ट प्रोग्रामिंग भाषा किसने बनाई?",
        "options_en": ["Brendan Eich", "James Gosling", "Guido van Rossum", "Dennis Ritchie"],
        "options_hi": ["ब्रेंडन ईच", "जेम्स गोस्लिंग", "गुइडो वैन रोसुम", "डेनिस रिची"],
        "answer_en": "Brendan Eich",
        "answer_hi": "ब्रेंडन ईच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
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
        "num": 63,
        "question_en": "Which is faster: SSD or HDD?",
        "question_hi": "कौन सा तेज है: SSD या HDD?",
        "options_en": ["SSD", "HDD", "Both are equal", "Depends on usage"],
        "options_hi": ["एसएसडी", "एचडीडी", "दोनों बराबर हैं", "उपयोग पर निर्भर करता है"],
        "answer_en": "SSD",
        "answer_hi": "एसएसडी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
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
        "num": 65,
        "question_en": "Which device filters network traffic?",
        "question_hi": "कौन सा उपकरण नेटवर्क ट्रैफ़िक को फ़िल्टर करता है?",
        "options_en": ["Firewall", "Router", "Switch", "Hub"],
        "options_hi": ["फायरवॉल", "राउटर", "स्विच", "हब"],
        "answer_en": "Firewall",
        "answer_hi": "फायरवॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the full form of OSI model?",
        "question_hi": "OSI मॉडल का पूरा नाम क्या है?",
        "options_en": ["Open Systems Interconnection", "Open Software Interconnection", "Operating Systems Interconnection", "Operating Software Interconnection"],
        "options_hi": ["ओपन सिस्टम्स इंटरकनेक्शन", "ओपन सॉफ्टवेयर इंटरकनेक्शन", "ऑपरेटिंग सिस्टम्स इंटरकनेक्शन", "ऑपरेटिंग सॉफ्टवेयर इंटरकनेक्शन"],
        "answer_en": "Open Systems Interconnection",
        "answer_hi": "ओपन सिस्टम्स इंटरकनेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Who created the PHP programming language?",
        "question_hi": "PHP प्रोग्रामिंग भाषा किसने बनाई?",
        "options_en": ["Rasmus Lerdorf", "James Gosling", "Guido van Rossum", "Dennis Ritchie"],
        "options_hi": ["रास्मुस लेरडॉर्फ", "जेम्स गोस्लिंग", "गुइडो वैन रोसुम", "डेनिस रिची"],
        "answer_en": "Rasmus Lerdorf",
        "answer_hi": "रास्मुस लेरडॉर्फ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
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
        "num": 69,
        "question_en": "Which memory is closest to CPU?",
        "question_hi": "कौन सी मेमोरी CPU के सबसे नजदीक होती है?",
        "options_en": ["Register", "Cache", "RAM", "ROM"],
        "options_hi": ["रजिस्टर", "कैश", "रैम", "रोम"],
        "answer_en": "Register",
        "answer_hi": "रजिस्टर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
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
        "num": 71,
        "question_en": "Which device connects two similar networks?",
        "question_hi": "कौन सा उपकरण दो समान नेटवर्कों को जोड़ता है?",
        "options_en": ["Bridge", "Router", "Gateway", "Switch"],
        "options_hi": ["ब्रिज", "राउटर", "गेटवे", "स्विच"],
        "answer_en": "Bridge",
        "answer_hi": "ब्रिज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the full form of SQL?",
        "question_hi": "SQL का पूरा नाम क्या है?",
        "options_en": ["Structured Query Language", "Standard Query Language", "Simple Query Language", "System Query Language"],
        "options_hi": ["स्ट्रक्चर्ड क्वेरी लैंग्वेज", "स्टैंडर्ड क्वेरी लैंग्वेज", "सिंपल क्वेरी लैंग्वेज", "सिस्टम क्वेरी लैंग्वेज"],
        "answer_en": "Structured Query Language",
        "answer_hi": "स्ट्रक्चर्ड क्वेरी लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which company developed UNIX?",
        "question_hi": "UNIX किस कंपनी ने विकसित किया?",
        "options_en": ["AT&T Bell Labs", "Microsoft", "IBM", "Apple"],
        "options_hi": ["एटी एंड टी बेल लैब्स", "माइक्रोसॉफ्ट", "आईबीएम", "एप्पल"],
        "answer_en": "AT&T Bell Labs",
        "answer_hi": "एटी एंड टी बेल लैब्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the octal equivalent of decimal number 8?",
        "question_hi": "दशमलव संख्या 8 का ऑक्टल समकक्ष क्या है?",
        "options_en": ["10", "11", "12", "13"],
        "options_hi": ["10", "11", "12", "13"],
        "answer_en": "10",
        "answer_hi": "10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which protocol is connection-oriented?",
        "question_hi": "कौन सा प्रोटोकॉल कनेक्शन-ओरिएंटेड है?",
        "options_en": ["TCP", "UDP", "IP", "ICMP"],
        "options_hi": ["टीसीपी", "यूडीपी", "आईपी", "आईसीएमपी"],
        "answer_en": "TCP",
        "answer_hi": "टीसीपी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
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
        "num": 77,
        "question_en": "Which memory stores data temporarily?",
        "question_hi": "कौन सी मेमोरी डेटा को अस्थायी रूप से संग्रहीत करती है?",
        "options_en": ["RAM", "ROM", "Hard Disk", "SSD"],
        "options_hi": ["रैम", "रोम", "हार्ड डिस्क", "एसएसडी"],
        "answer_en": "RAM",
        "answer_hi": "रैम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
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
        "num": 79,
        "question_en": "Which device converts analog to digital signals?",
        "question_hi": "कौन सा उपकरण एनालॉग को डिजिटल सिग्नल में परिवर्तित करता है?",
        "options_en": ["ADC", "DAC", "Modem", "Router"],
        "options_hi": ["एडीसी", "डीएसी", "मॉडेम", "राउटर"],
        "answer_en": "ADC",
        "answer_hi": "एडीसी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the full form of NoSQL?",
        "question_hi": "NoSQL का पूरा नाम क्या है?",
        "options_en": ["Not Only SQL", "No Structured Query Language", "New SQL", "Network SQL"],
        "options_hi": ["नॉट ओनली SQL", "नो स्ट्रक्चर्ड क्वेरी लैंग्वेज", "न्यू SQL", "नेटवर्क SQL"],
        "answer_en": "Not Only SQL",
        "answer_hi": "नॉट ओनली SQL",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Who created the Ruby programming language?",
        "question_hi": "रूबी प्रोग्रामिंग भाषा किसने बनाई?",
        "options_en": ["Yukihiro Matsumoto", "James Gosling", "Guido van Rossum", "Dennis Ritchie"],
        "options_hi": ["युकिहिरो मात्सुमोटो", "जेम्स गोस्लिंग", "गुइडो वैन रोसुम", "डेनिस रिची"],
        "answer_en": "Yukihiro Matsumoto",
        "answer_hi": "युकिहिरो मात्सुमोटो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
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
        "num": 83,
        "question_en": "Which is the main circuit board of a computer?",
        "question_hi": "कंप्यूटर का मुख्य सर्किट बोर्ड कौन सा है?",
        "options_en": ["Motherboard", "CPU", "RAM", "Hard Disk"],
        "options_hi": ["मदरबोर्ड", "सीपीयू", "रैम", "हार्ड डिस्क"],
        "answer_en": "Motherboard",
        "answer_hi": "मदरबोर्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
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
        "num": 85,
        "question_en": "Which device connects dissimilar networks?",
        "question_hi": "कौन सा उपकरण असमान नेटवर्कों को जोड़ता है?",
        "options_en": ["Gateway", "Router", "Bridge", "Switch"],
        "options_hi": ["गेटवे", "राउटर", "ब्रिज", "स्विच"],
        "answer_en": "Gateway",
        "answer_hi": "गेटवे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the full form of RDBMS?",
        "question_hi": "RDBMS का पूरा नाम क्या है?",
        "options_en": ["Relational Database Management System", "Relational Data Management System", "Relational Database Management Software", "Relational Data Management Software"],
        "options_hi": ["रिलेशनल डेटाबेस मैनेजमेंट सिस्टम", "रिलेशनल डेटा मैनेजमेंट सिस्टम", "रिलेशनल डेटाबेस मैनेजमेंट सॉफ्टवेयर", "रिलेशनल डेटा मैनेजमेंट सॉफ्टवेयर"],
        "answer_en": "Relational Database Management System",
        "answer_hi": "रिलेशनल डेटाबेस मैनेजमेंट सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Who created the Swift programming language?",
        "question_hi": "स्विफ्ट प्रोग्रामिंग भाषा किसने बनाई?",
        "options_en": ["Apple", "Google", "Microsoft", "Facebook"],
        "options_hi": ["एप्पल", "गूगल", "माइक्रोसॉफ्ट", "फेसबुक"],
        "answer_en": "Apple",
        "answer_hi": "एप्पल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
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
        "num": 89,
        "question_en": "Which memory is used for firmware?",
        "question_hi": "फर्मवेयर के लिए किस मेमोरी का उपयोग किया जाता है?",
        "options_en": ["ROM", "RAM", "Cache", "Register"],
        "options_hi": ["रोम", "रैम", "कैश", "रजिस्टर"],
        "answer_en": "ROM",
        "answer_hi": "रोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
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
        "num": 91,
        "question_en": "Which device connects segments of a network?",
        "question_hi": "कौन सा उपकरण नेटवर्क के सेगमेंट्स को जोड़ता है?",
        "options_en": ["Switch", "Hub", "Router", "Bridge"],
        "options_hi": ["स्विच", "हब", "राउटर", "ब्रिज"],
        "answer_en": "Switch",
        "answer_hi": "स्विच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the full form of ASCII?",
        "question_hi": "ASCII का पूरा नाम क्या है?",
        "options_en": ["American Standard Code for Information Interchange", "American System Code for Information Interchange", "American Standard Code for International Interchange", "American System Code for International Interchange"],
        "options_hi": ["अमेरिकन स्टैंडर्ड कोड फॉर इनफॉर्मेशन इंटरचेंज", "अमेरिकन सिस्टम कोड फॉर इनफॉर्मेशन इंटरचेंज", "अमेरिकन स्टैंडर्ड कोड फॉर इंटरनेशनल इंटरचेंज", "अमेरिकन सिस्टम कोड फॉर इंटरनेशनल इंटरचेंज"],
        "answer_en": "American Standard Code for Information Interchange",
        "answer_hi": "अमेरिकन स्टैंडर्ड कोड फॉर इनफॉर्मेशन इंटरचेंज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which company developed the first GUI?",
        "question_hi": "पहला GUI किस कंपनी ने विकसित किया?",
        "options_en": ["Xerox PARC", "Apple", "Microsoft", "IBM"],
        "options_hi": ["ज़ेरॉक्स पार्क", "एप्पल", "माइक्रोसॉफ्ट", "आईबीएम"],
        "answer_en": "Xerox PARC",
        "answer_hi": "ज़ेरॉक्स पार्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the binary equivalent of decimal number 31?",
        "question_hi": "दशमलव संख्या 31 का बाइनरी समकक्ष क्या है?",
        "options_en": ["11111", "11110", "10111", "11011"],
        "options_hi": ["11111", "11110", "10111", "11011"],
        "answer_en": "11111",
        "answer_hi": "11111",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which protocol is connectionless?",
        "question_hi": "कौन सा प्रोटोकॉल कनेक्शनलेस है?",
        "options_en": ["UDP", "TCP", "FTP", "HTTP"],
        "options_hi": ["यूडीपी", "टीसीपी", "एफटीपी", "एचटीटीपी"],
        "answer_en": "UDP",
        "answer_hi": "यूडीपी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
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
        "num": 97,
        "question_en": "Which memory has the largest capacity?",
        "question_hi": "किस मेमोरी की क्षमता सबसे अधिक है?",
        "options_en": ["Hard Disk", "RAM", "Cache", "Register"],
        "options_hi": ["हार्ड डिस्क", "रैम", "कैश", "रजिस्टर"],
        "answer_en": "Hard Disk",
        "answer_hi": "हार्ड डिस्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
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
        "num": 99,
        "question_en": "Which device provides wireless connectivity?",
        "question_hi": "कौन सा उपकरण वायरलेस कनेक्टिविटी प्रदान करता है?",
        "options_en": ["Wi-Fi Router", "Switch", "Hub", "Modem"],
        "options_hi": ["वाई-फाई राउटर", "स्विच", "हब", "मॉडेम"],
        "answer_en": "Wi-Fi Router",
        "answer_hi": "वाई-फाई राउटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the full form of DNS?",
        "question_hi": "DNS का पूरा नाम क्या है?",
        "options_en": ["Domain Name System", "Domain Name Server", "Domain Network System", "Domain Network Server"],
        "options_hi": ["डोमेन नेम सिस्टम", "डोमेन नेम सर्वर", "डोमेन नेटवर्क सिस्टम", "डोमेन नेटवर्क सर्वर"],
        "answer_en": "Domain Name System",
        "answer_hi": "डोमेन नेम सिस्टम",
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