const questions = [
    {
        "num": 1,
        "question_en": "What does XML stand for?",
        "question_hi": "XML का पूरा नाम क्या है?",
        "options_en": ["eXtensible Markup Language", "eXtensible Making Language", "eXternal Markup Language", "eXternal Making Language"],
        "options_hi": ["एक्सटेंसिबल मार्कअप लैंग्वेज", "एक्सटेंसिबल मेकिंग लैंग्वेज", "एक्सटर्नल मार्कअप लैंग्वेज", "एक्सटर्नल मेकिंग लैंग्वेज"],
        "answer_en": "eXtensible Markup Language",
        "answer_hi": "एक्सटेंसिबल मार्कअप लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which programming language is primarily used for data science?",
        "question_hi": "डेटा साइंस के लिए मुख्य रूप से किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["Python", "Java", "C++", "Ruby"],
        "options_hi": ["पायथन", "जावा", "C++", "रूबी"],
        "answer_en": "Python",
        "answer_hi": "पायथन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What does JSON stand for?",
        "question_hi": "JSON का पूरा नाम क्या है?",
        "options_en": ["JavaScript Object Notation", "Java Object Notation", "JavaScript Object Network", "Java Object Network"],
        "options_hi": ["जावास्क्रिप्ट ऑब्जेक्ट नोटेशन", "जावा ऑब्जेक्ट नोटेशन", "जावास्क्रिप्ट ऑब्जेक्ट नेटवर्क", "जावा ऑब्जेक्ट नेटवर्क"],
        "answer_en": "JavaScript Object Notation",
        "answer_hi": "जावास्क्रिप्ट ऑब्जेक्ट नोटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which protocol is used for real-time communication?",
        "question_hi": "रियल-टाइम कम्युनिकेशन के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["WebRTC", "HTTP", "FTP", "SMTP"],
        "options_hi": ["WebRTC", "HTTP", "FTP", "SMTP"],
        "answer_en": "WebRTC",
        "answer_hi": "WebRTC",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the full form of API?",
        "question_hi": "API का पूरा नाम क्या है?",
        "options_en": ["Application Programming Interface", "Advanced Programming Interface", "Application Program Interface", "Advanced Program Interface"],
        "options_hi": ["एप्लिकेशन प्रोग्रामिंग इंटरफेस", "एडवांस्ड प्रोग्रामिंग इंटरफेस", "एप्लिकेशन प्रोग्राम इंटरफेस", "एडवांस्ड प्रोग्राम इंटरफेस"],
        "answer_en": "Application Programming Interface",
        "answer_hi": "एप्लिकेशन प्रोग्रामिंग इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which data structure is used for implementing priority queues?",
        "question_hi": "प्रायोरिटी क्यू को इम्प्लीमेंट करने के लिए किस डेटा स्ट्रक्चर का उपयोग किया जाता है?",
        "options_en": ["Heap", "Array", "Linked List", "Stack"],
        "options_hi": ["हीप", "ऐरे", "लिंक्ड लिस्ट", "स्टैक"],
        "answer_en": "Heap",
        "answer_hi": "हीप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What does CSS stand for?",
        "question_hi": "CSS का पूरा नाम क्या है?",
        "options_en": ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Cascading System Sheets"],
        "options_hi": ["कैस्केडिंग स्टाइल शीट्स", "कंप्यूटर स्टाइल शीट्स", "क्रिएटिव स्टाइल शीट्स", "कैस्केडिंग सिस्टम शीट्स"],
        "answer_en": "Cascading Style Sheets",
        "answer_hi": "कैस्केडिंग स्टाइल शीट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which programming paradigm focuses on mathematical functions?",
        "question_hi": "कौन सा प्रोग्रामिंग पैराडाइम गणितीय फ़ंक्शन पर केंद्रित है?",
        "options_en": ["Functional Programming", "Object-Oriented Programming", "Procedural Programming", "Imperative Programming"],
        "options_hi": ["फंक्शनल प्रोग्रामिंग", "ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग", "प्रोसीजरल प्रोग्रामिंग", "इम्पेरेटिव प्रोग्रामिंग"],
        "answer_en": "Functional Programming",
        "answer_hi": "फंक्शनल प्रोग्रामिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the time complexity of quicksort in average case?",
        "question_hi": "क्विकसॉर्ट की एवरेज केस टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
        "options_hi": ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
        "answer_en": "O(n log n)",
        "answer_hi": "O(n log n)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which language is used for server-side scripting?",
        "question_hi": "सर्वर-साइड स्क्रिप्टिंग के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["PHP", "HTML", "CSS", "JavaScript"],
        "options_hi": ["PHP", "HTML", "CSS", "जावास्क्रिप्ट"],
        "answer_en": "PHP",
        "answer_hi": "PHP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What does SQL stand for?",
        "question_hi": "SQL का पूरा नाम क्या है?",
        "options_en": ["Structured Query Language", "Simple Query Language", "System Query Language", "Standard Query Language"],
        "options_hi": ["स्ट्रक्चर्ड क्वेरी लैंग्वेज", "सिंपल क्वेरी लैंग्वेज", "सिस्टम क्वेरी लैंग्वेज", "स्टैंडर्ड क्वेरी लैंग्वेज"],
        "answer_en": "Structured Query Language",
        "answer_hi": "स्ट्रक्चर्ड क्वेरी लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which algorithm is used for pattern searching in strings?",
        "question_hi": "स्ट्रिंग्स में पैटर्न सर्चिंग के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["KMP Algorithm", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["KMP एल्गोरिदम", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "KMP Algorithm",
        "answer_hi": "KMP एल्गोरिदम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What does IDE stand for?",
        "question_hi": "IDE का पूरा नाम क्या है?",
        "options_en": ["Integrated Development Environment", "Integrated Design Environment", "Interactive Development Environment", "Interactive Design Environment"],
        "options_hi": ["इंटीग्रेटेड डेवलपमेंट एनवायरनमेंट", "इंटीग्रेटेड डिजाइन एनवायरनमेंट", "इंटरएक्टिव डेवलपमेंट एनवायरनमेंट", "इंटरएक्टिव डिजाइन एनवायरनमेंट"],
        "answer_en": "Integrated Development Environment",
        "answer_hi": "इंटीग्रेटेड डेवलपमेंट एनवायरनमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which data structure is used for browser history?",
        "question_hi": "ब्राउज़र हिस्ट्री के लिए किस डेटा स्ट्रक्चर का उपयोग किया जाता है?",
        "options_en": ["Stack", "Queue", "Array", "Linked List"],
        "options_hi": ["स्टैक", "क्यू", "ऐरे", "लिंक्ड लिस्ट"],
        "answer_en": "Stack",
        "answer_hi": "स्टैक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the main purpose of virtual memory?",
        "question_hi": "वर्चुअल मेमोरी का मुख्य उद्देश्य क्या है?",
        "options_en": ["Extend RAM using disk space", "Increase CPU speed", "Store permanent data", "Manage network connections"],
        "options_hi": ["डिस्क स्पेस का उपयोग करके RAM बढ़ाना", "CPU की गति बढ़ाना", "स्थायी डेटा स्टोर करना", "नेटवर्क कनेक्शन प्रबंधित करना"],
        "answer_en": "Extend RAM using disk space",
        "answer_hi": "डिस्क स्पेस का उपयोग करके RAM बढ़ाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which programming language is used for iOS development?",
        "question_hi": "iOS डेवलपमेंट के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["Swift", "Java", "Kotlin", "C#"],
        "options_hi": ["स्विफ्ट", "जावा", "कोटलिन", "C#"],
        "answer_en": "Swift",
        "answer_hi": "स्विफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What does URL stand for?",
        "question_hi": "URL का पूरा नाम क्या है?",
        "options_en": ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"],
        "options_hi": ["यूनिफ़ॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लोकेटर", "यूनिफ़ॉर्म रिसोर्स लिंक", "यूनिवर्सल रिसोर्स लिंक"],
        "answer_en": "Uniform Resource Locator",
        "answer_hi": "यूनिफ़ॉर्म रिसोर्स लोकेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which sorting algorithm is adaptive?",
        "question_hi": "कौन सा सॉर्टिंग एल्गोरिदम एडेप्टिव है?",
        "options_en": ["Insertion Sort", "Merge Sort", "Heap Sort", "Selection Sort"],
        "options_hi": ["इंसर्शन सॉर्ट", "मर्ज सॉर्ट", "हीप सॉर्ट", "सिलेक्शन सॉर्ट"],
        "answer_en": "Insertion Sort",
        "answer_hi": "इंसर्शन सॉर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the default port for HTTPS?",
        "question_hi": "HTTPS का डिफ़ॉल्ट पोर्ट क्या है?",
        "options_en": ["443", "80", "8080", "8443"],
        "options_hi": ["443", "80", "8080", "8443"],
        "answer_en": "443",
        "answer_hi": "443",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which database is NoSQL?",
        "question_hi": "कौन सा डेटाबेस NoSQL है?",
        "options_en": ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
        "options_hi": ["MongoDB", "MySQL", "PostgreSQL", "ओरेकल"],
        "answer_en": "MongoDB",
        "answer_hi": "MongoDB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What does HTTP stand for?",
        "question_hi": "HTTP का पूरा नाम क्या है?",
        "options_en": ["HyperText Transfer Protocol", "HighText Transfer Protocol", "HyperText Transmission Protocol", "HighText Transmission Protocol"],
        "options_hi": ["हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाईटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाइपरटेक्स्ट ट्रांसमिशन प्रोटोकॉल", "हाईटेक्स्ट ट्रांसमिशन प्रोटोकॉल"],
        "answer_en": "HyperText Transfer Protocol",
        "answer_hi": "हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which protocol is used for email reception?",
        "question_hi": "ईमेल रिसेप्शन के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["POP3/IMAP", "SMTP", "HTTP", "FTP"],
        "options_hi": ["POP3/IMAP", "SMTP", "HTTP", "FTP"],
        "answer_en": "POP3/IMAP",
        "answer_hi": "POP3/IMAP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the time complexity of binary search tree operations?",
        "question_hi": "बाइनरी सर्च ट्री ऑपरेशन की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(h)", "O(n)", "O(log n)", "O(1)"],
        "options_hi": ["O(h)", "O(n)", "O(log n)", "O(1)"],
        "answer_en": "O(h)",
        "answer_hi": "O(h)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which language is used for Android development?",
        "question_hi": "एंड्रॉयड डेवलपमेंट के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["Java/Kotlin", "Swift", "C#", "Python"],
        "options_hi": ["जावा/कोटलिन", "स्विफ्ट", "C#", "पायथन"],
        "answer_en": "Java/Kotlin",
        "answer_hi": "जावा/कोटलिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What does GUI stand for?",
        "question_hi": "GUI का पूरा नाम क्या है?",
        "options_en": ["Graphical User Interface", "Graphical Unit Interface", "General User Interface", "General Unit Interface"],
        "options_hi": ["ग्राफिकल यूजर इंटरफेस", "ग्राफिकल यूनिट इंटरफेस", "जनरल यूजर इंटरफेस", "जनरल यूनिट इंटरफेस"],
        "answer_en": "Graphical User Interface",
        "answer_hi": "ग्राफिकल यूजर इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which algorithm is used for deadlock detection?",
        "question_hi": "डेडलॉक डिटेक्शन के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["Banker's Algorithm", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["बैंकर एल्गोरिदम", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "Banker's Algorithm",
        "answer_hi": "बैंकर एल्गोरिदम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the default port for HTTP?",
        "question_hi": "HTTP का डिफ़ॉल्ट पोर्ट क्या है?",
        "options_en": ["80", "443", "8080", "8443"],
        "options_hi": ["80", "443", "8080", "8443"],
        "answer_en": "80",
        "answer_hi": "80",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which programming language is used for blockchain?",
        "question_hi": "ब्लॉकचेन के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["Solidity", "Java", "Python", "C++"],
        "options_hi": ["सोलिडिटी", "जावा", "पायथन", "C++"],
        "answer_en": "Solidity",
        "answer_hi": "सोलिडिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
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
        "num": 30,
        "question_en": "Which data structure is used for implementing undo functionality?",
        "question_hi": "अंडो फंक्शनैलिटी इम्प्लीमेंट करने के लिए किस डेटा स्ट्रक्चर का उपयोग किया जाता है?",
        "options_en": ["Stack", "Queue", "Array", "Linked List"],
        "options_hi": ["स्टैक", "क्यू", "ऐरे", "लिंक्ड लिस्ट"],
        "answer_en": "Stack",
        "answer_hi": "स्टैक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the main purpose of a proxy server?",
        "question_hi": "प्रॉक्सी सर्वर का मुख्य उद्देश्य क्या है?",
        "options_en": ["Act as intermediary", "Increase storage", "Backup data", "Encrypt data"],
        "options_hi": ["मध्यस्थ के रूप में कार्य करना", "स्टोरेज बढ़ाना", "डेटा बैकअप", "डेटा एन्क्रिप्ट करना"],
        "answer_en": "Act as intermediary",
        "answer_hi": "मध्यस्थ के रूप में कार्य करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which sorting algorithm is not comparison-based?",
        "question_hi": "कौन सा सॉर्टिंग एल्गोरिदम कम्पैरिजन-बेस्ड नहीं है?",
        "options_en": ["Counting Sort", "Merge Sort", "Quick Sort", "Insertion Sort"],
        "options_hi": ["काउंटिंग सॉर्ट", "मर्ज सॉर्ट", "क्विक सॉर्ट", "इंसर्शन सॉर्ट"],
        "answer_en": "Counting Sort",
        "answer_hi": "काउंटिंग सॉर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What does HTML stand for?",
        "question_hi": "HTML का पूरा नाम क्या है?",
        "options_en": ["HyperText Markup Language", "HighText Markup Language", "HyperText Making Language", "HighText Making Language"],
        "options_hi": ["हाइपरटेक्स्ट मार्कअप लैंग्वेज", "हाईटेक्स्ट मार्कअप लैंग्वेज", "हाइपरटेक्स्ट मेकिंग लैंग्वेज", "हाईटेक्स्ट मेकिंग लैंग्वेज"],
        "answer_en": "HyperText Markup Language",
        "answer_hi": "हाइपरटेक्स्ट मार्कअप लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which protocol is used for file sharing?",
        "question_hi": "फ़ाइल शेयरिंग के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["FTP/SFTP", "HTTP", "SMTP", "TCP"],
        "options_hi": ["FTP/SFTP", "HTTP", "SMTP", "TCP"],
        "answer_en": "FTP/SFTP",
        "answer_hi": "FTP/SFTP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the time complexity of hash table operations?",
        "question_hi": "हैश टेबल ऑपरेशन की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(1) average", "O(n)", "O(log n)", "O(n²)"],
        "options_hi": ["O(1) एवरेज", "O(n)", "O(log n)", "O(n²)"],
        "answer_en": "O(1) average",
        "answer_hi": "O(1) एवरेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which language is used for big data processing?",
        "question_hi": "बिग डेटा प्रोसेसिंग के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["Scala", "Java", "Python", "HTML"],
        "options_hi": ["स्काला", "जावा", "पायथन", "HTML"],
        "answer_en": "Scala",
        "answer_hi": "स्काला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What does SSD stand for?",
        "question_hi": "SSD का पूरा नाम क्या है?",
        "options_en": ["Solid State Drive", "Solid Storage Device", "Static State Drive", "Static Storage Device"],
        "options_hi": ["सॉलिड स्टेट ड्राइव", "सॉलिड स्टोरेज डिवाइस", "स्टेटिक स्टेट ड्राइव", "स्टेटिक स्टोरेज डिवाइस"],
        "answer_en": "Solid State Drive",
        "answer_hi": "सॉलिड स्टेट ड्राइव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which algorithm is used for topological sorting?",
        "question_hi": "टोपोलॉजिकल सॉर्टिंग के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["Kahn's Algorithm", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["काहन एल्गोरिदम", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "Kahn's Algorithm",
        "answer_hi": "काहन एल्गोरिदम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the main purpose of an interpreter?",
        "question_hi": "इंटरप्रेटर का मुख्य उद्देश्य क्या है?",
        "options_en": ["Execute code directly", "Compile entire program", "Debug code", "Design interfaces"],
        "options_hi": ["कोड को सीधे एक्जीक्यूट करना", "पूरे प्रोग्राम को कंपाइल करना", "कोड डीबग करना", "इंटरफेस डिजाइन करना"],
        "answer_en": "Execute code directly",
        "answer_hi": "कोड को सीधे एक्जीक्यूट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which data structure is used for BFS traversal?",
        "question_hi": "BFS ट्रैवर्सल के लिए किस डेटा स्ट्रक्चर का उपयोग किया जाता है?",
        "options_en": ["Queue", "Stack", "Array", "Linked List"],
        "options_hi": ["क्यू", "स्टैक", "ऐरे", "लिंक्ड लिस्ट"],
        "answer_en": "Queue",
        "answer_hi": "क्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What does OOP stand for?",
        "question_hi": "OOP का पूरा नाम क्या है?",
        "options_en": ["Object-Oriented Programming", "Object-Oriented Processing", "Objective-Oriented Programming", "Objective-Oriented Processing"],
        "options_hi": ["ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग", "ऑब्जेक्ट-ओरिएंटेड प्रोसेसिंग", "ऑब्जेक्टिव-ओरिएंटेड प्रोग्रामिंग", "ऑब्जेक्टिव-ओरिएंटेड प्रोसेसिंग"],
        "answer_en": "Object-Oriented Programming",
        "answer_hi": "ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which protocol is connection-oriented?",
        "question_hi": "कौन सा प्रोटोकॉल कनेक्शन-ओरिएंटेड है?",
        "options_en": ["TCP", "UDP", "Both", "HTTP"],
        "options_hi": ["TCP", "UDP", "दोनों", "HTTP"],
        "answer_en": "TCP",
        "answer_hi": "TCP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the time complexity of bubble sort?",
        "question_hi": "बबल सॉर्ट की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
        "options_hi": ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
        "answer_en": "O(n²)",
        "answer_hi": "O(n²)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which language is used for web scripting?",
        "question_hi": "वेब स्क्रिप्टिंग के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["JavaScript", "C", "Assembly", "Fortran"],
        "options_hi": ["जावास्क्रिप्ट", "C", "असेम्बली", "फोरट्रान"],
        "answer_en": "JavaScript",
        "answer_hi": "जावास्क्रिप्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
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
        "num": 46,
        "question_en": "Which algorithm is used for encryption?",
        "question_hi": "एन्क्रिप्शन के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["RSA", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["RSA", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "RSA",
        "answer_hi": "RSA",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the default port for FTP?",
        "question_hi": "FTP का डिफ़ॉल्ट पोर्ट क्या है?",
        "options_en": ["21", "22", "23", "25"],
        "options_hi": ["21", "22", "23", "25"],
        "answer_en": "21",
        "answer_hi": "21",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which programming language is purely functional?",
        "question_hi": "कौन सी प्रोग्रामिंग भाषा शुद्ध रूप से फंक्शनल है?",
        "options_en": ["Haskell", "Java", "C++", "Python"],
        "options_hi": ["हैस्केल", "जावा", "C++", "पायथन"],
        "answer_en": "Haskell",
        "answer_hi": "हैस्केल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
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
        "num": 50,
        "question_en": "Which data structure allows fast insertion at both ends?",
        "question_hi": "कौन सी डेटा संरचना दोनों सिरों पर तेजी से इंसर्शन की अनुमति देती है?",
        "options_en": ["Deque", "Stack", "Queue", "Array"],
        "options_hi": ["डीक", "स्टैक", "क्यू", "ऐरे"],
        "answer_en": "Deque",
        "answer_hi": "डीक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the main purpose of cache?",
        "question_hi": "कैश का मुख्य उद्देश्य क्या है?",
        "options_en": ["Reduce access time", "Increase storage", "Backup data", "Encrypt data"],
        "options_hi": ["एक्सेस टाइम कम करना", "स्टोरेज बढ़ाना", "डेटा बैकअप", "डेटा एन्क्रिप्ट करना"],
        "answer_en": "Reduce access time",
        "answer_hi": "एक्सेस टाइम कम करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which sorting algorithm is external?",
        "question_hi": "कौन सा सॉर्टिंग एल्गोरिदम एक्सटर्नल है?",
        "options_en": ["Merge Sort", "Quick Sort", "Bubble Sort", "Insertion Sort"],
        "options_hi": ["मर्ज सॉर्ट", "क्विक सॉर्ट", "बबल सॉर्ट", "इंसर्शन सॉर्ट"],
        "answer_en": "Merge Sort",
        "answer_hi": "मर्ज सॉर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What does SSL stand for?",
        "question_hi": "SSL का पूरा नाम क्या है?",
        "options_en": ["Secure Sockets Layer", "Secure Software Layer", "System Security Layer", "System Software Layer"],
        "options_hi": ["सिक्योर सॉकेट्स लेयर", "सिक्योर सॉफ्टवेयर लेयर", "सिस्टम सिक्योरिटी लेयर", "सिस्टम सॉफ्टवेयर लेयर"],
        "answer_en": "Secure Sockets Layer",
        "answer_hi": "सिक्योर सॉकेट्स लेयर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which protocol is connectionless?",
        "question_hi": "कौन सा प्रोटोकॉल कनेक्शनलेस है?",
        "options_en": ["UDP", "TCP", "Both", "HTTP"],
        "options_hi": ["UDP", "TCP", "दोनों", "HTTP"],
        "answer_en": "UDP",
        "answer_hi": "UDP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the time complexity of merge sort?",
        "question_hi": "मर्ज सॉर्ट की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
        "options_hi": ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
        "answer_en": "O(n log n)",
        "answer_hi": "O(n log n)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which language is used for data analysis?",
        "question_hi": "डेटा एनालिसिस के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["Python", "Java", "C#", "Ruby"],
        "options_hi": ["पायथन", "जावा", "C#", "रूबी"],
        "answer_en": "Python",
        "answer_hi": "पायथन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What does GPU stand for?",
        "question_hi": "GPU का पूरा नाम क्या है?",
        "options_en": ["Graphics Processing Unit", "Graphics Program Unit", "General Processing Unit", "General Program Unit"],
        "options_hi": ["ग्राफिक्स प्रोसेसिंग यूनिट", "ग्राफिक्स प्रोग्राम यूनिट", "जनरल प्रोसेसिंग यूनिट", "जनरल प्रोग्राम यूनिट"],
        "answer_en": "Graphics Processing Unit",
        "answer_hi": "ग्राफिक्स प्रोसेसिंग यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which algorithm solves the N-Queens problem?",
        "question_hi": "कौन सा एल्गोरिदम N-क्वीन्स प्रॉब्लम को हल करता है?",
        "options_en": ["Backtracking", "Dijkstra", "Bubble Sort", "Binary Search"],
        "options_hi": ["बैकट्रैकिंग", "डिज्क्स्ट्रा", "बबल सॉर्ट", "बाइनरी सर्च"],
        "answer_en": "Backtracking",
        "answer_hi": "बैकट्रैकिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the default port for SSH?",
        "question_hi": "SSH का डिफ़ॉल्ट पोर्ट क्या है?",
        "options_en": ["22", "23", "21", "25"],
        "options_hi": ["22", "23", "21", "25"],
        "answer_en": "22",
        "answer_hi": "22",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which data structure uses chaining?",
        "question_hi": "कौन सी डेटा संरचना चेनिंग का उपयोग करती है?",
        "options_en": ["Hash Table", "Array", "Linked List", "Stack"],
        "options_hi": ["हैश टेबल", "ऐरे", "लिंक्ड लिस्ट", "स्टैक"],
        "answer_en": "Hash Table",
        "answer_hi": "हैश टेबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the main purpose of a compiler?",
        "question_hi": "कंपाइलर का मुख्य उद्देश्य क्या है?",
        "options_en": ["Translate source to object code", "Execute programs", "Debug code", "Design interfaces"],
        "options_hi": ["सोर्स को ऑब्जेक्ट कोड में ट्रांसलेट करना", "प्रोग्राम एक्जीक्यूट करना", "कोड डीबग करना", "इंटरफेस डिजाइन करना"],
        "answer_en": "Translate source to object code",
        "answer_hi": "सोर्स को ऑब्जेक्ट कोड में ट्रांसलेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which sorting algorithm is stable?",
        "question_hi": "कौन सा सॉर्टिंग एल्गोरिदम स्थिर है?",
        "options_en": ["Merge Sort", "Quick Sort", "Heap Sort", "Selection Sort"],
        "options_hi": ["मर्ज सॉर्ट", "क्विक सॉर्ट", "हीप सॉर्ट", "सिलेक्शन सॉर्ट"],
        "answer_en": "Merge Sort",
        "answer_hi": "मर्ज सॉर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
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
        "num": 64,
        "question_en": "Which protocol is used for dynamic IP assignment?",
        "question_hi": "डायनामिक IP असाइनमेंट के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["DHCP", "DNS", "HTTP", "FTP"],
        "options_hi": ["DHCP", "DNS", "HTTP", "FTP"],
        "answer_en": "DHCP",
        "answer_hi": "DHCP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the time complexity of heap sort?",
        "question_hi": "हीप सॉर्ट की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
        "options_hi": ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
        "answer_en": "O(n log n)",
        "answer_hi": "O(n log n)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which language is used for operating systems?",
        "question_hi": "ऑपरेटिंग सिस्टम के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["C", "Java", "Python", "JavaScript"],
        "options_hi": ["C", "जावा", "पायथन", "जावास्क्रिप्ट"],
        "answer_en": "C",
        "answer_hi": "C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What does ROM stand for?",
        "question_hi": "ROM का पूरा नाम क्या है?",
        "options_en": ["Read Only Memory", "Random Only Memory", "Read Optical Memory", "Random Optical Memory"],
        "options_hi": ["रीड ओनली मेमोरी", "रैंडम ओनली मेमोरी", "रीड ऑप्टिकल मेमोरी", "रैंडम ऑप्टिकल मेमोरी"],
        "answer_en": "Read Only Memory",
        "answer_hi": "रीड ओनली मेमोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which algorithm finds articulation points?",
        "question_hi": "कौन सा एल्गोरिदम आर्टिकुलेशन पॉइंट्स ढूंढता है?",
        "options_en": ["Tarjan's", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["टार्जन", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "Tarjan's",
        "answer_hi": "टार्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the default port for DNS?",
        "question_hi": "DNS का डिफ़ॉल्ट पोर्ट क्या है?",
        "options_en": ["53", "80", "443", "21"],
        "options_hi": ["53", "80", "443", "21"],
        "answer_en": "53",
        "answer_hi": "53",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which data structure is used for DFS traversal?",
        "question_hi": "DFS ट्रैवर्सल के लिए किस डेटा स्ट्रक्चर का उपयोग किया जाता है?",
        "options_en": ["Stack", "Queue", "Array", "Linked List"],
        "options_hi": ["स्टैक", "क्यू", "ऐरे", "लिंक्ड लिस्ट"],
        "answer_en": "Stack",
        "answer_hi": "स्टैक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the main purpose of a loader?",
        "question_hi": "लोडर का मुख्य उद्देश्य क्या है?",
        "options_en": ["Load program into memory", "Execute programs", "Debug code", "Design interfaces"],
        "options_hi": ["प्रोग्राम को मेमोरी में लोड करना", "प्रोग्राम एक्जीक्यूट करना", "कोड डीबग करना", "इंटरफेस डिजाइन करना"],
        "answer_en": "Load program into memory",
        "answer_hi": "प्रोग्राम को मेमोरी में लोड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which sorting algorithm uses divide and conquer?",
        "question_hi": "कौन सा सॉर्टिंग एल्गोरिदम डिवाइड एंड कॉन्कर का उपयोग करता है?",
        "options_en": ["Merge Sort", "Bubble Sort", "Insertion Sort", "Selection Sort"],
        "options_hi": ["मर्ज सॉर्ट", "बबल सॉर्ट", "इंसर्शन सॉर्ट", "सिलेक्शन सॉर्ट"],
        "answer_en": "Merge Sort",
        "answer_hi": "मर्ज सॉर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What does IP stand for?",
        "question_hi": "IP का पूरा नाम क्या है?",
        "options_en": ["Internet Protocol", "Internet Program", "Internet Port", "Internet Packet"],
        "options_hi": ["इंटरनेट प्रोटोकॉल", "इंटरनेट प्रोग्राम", "इंटरनेट पोर्ट", "इंटरनेट पैकेट"],
        "answer_en": "Internet Protocol",
        "answer_hi": "इंटरनेट प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which protocol is used for video streaming?",
        "question_hi": "वीडियो स्ट्रीमिंग के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["RTSP", "HTTP", "FTP", "SMTP"],
        "options_hi": ["RTSP", "HTTP", "FTP", "SMTP"],
        "answer_en": "RTSP",
        "answer_hi": "RTSP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the time complexity of selection sort?",
        "question_hi": "सिलेक्शन सॉर्ट की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
        "options_hi": ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
        "answer_en": "O(n²)",
        "answer_hi": "O(n²)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which language is used for machine learning?",
        "question_hi": "मशीन लर्निंग के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["Python", "Java", "C", "Assembly"],
        "options_hi": ["पायथन", "जावा", "C", "असेम्बली"],
        "answer_en": "Python",
        "answer_hi": "पायथन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What does CAD stand for?",
        "question_hi": "CAD का पूरा नाम क्या है?",
        "options_en": ["Computer-Aided Design", "Computer-Aided Drawing", "Computer-Assisted Design", "Computer-Assisted Drawing"],
        "options_hi": ["कंप्यूटर-एडेड डिजाइन", "कंप्यूटर-एडेड ड्राइंग", "कंप्यूटर-असिस्टेड डिजाइन", "कंप्यूटर-असिस्टेड ड्राइंग"],
        "answer_en": "Computer-Aided Design",
        "answer_hi": "कंप्यूटर-एडेड डिजाइन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which algorithm solves the Fibonacci series?",
        "question_hi": "कौन सा एल्गोरिदम फाइबोनैची सीरीज को हल करता है?",
        "options_en": ["Dynamic Programming", "Dijkstra", "Bubble Sort", "Binary Search"],
        "options_hi": ["डायनामिक प्रोग्रामिंग", "डिज्क्स्ट्रा", "बबल सॉर्ट", "बाइनरी सर्च"],
        "answer_en": "Dynamic Programming",
        "answer_hi": "डायनामिक प्रोग्रामिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the default port for Telnet?",
        "question_hi": "टेलनेट का डिफ़ॉल्ट पोर्ट क्या है?",
        "options_en": ["23", "22", "21", "25"],
        "options_hi": ["23", "22", "21", "25"],
        "answer_en": "23",
        "answer_hi": "23",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which data structure allows random access?",
        "question_hi": "कौन सी डेटा संरचना रैंडम एक्सेस की अनुमति देती है?",
        "options_en": ["Array", "Linked List", "Stack", "Queue"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "स्टैक", "क्यू"],
        "answer_en": "Array",
        "answer_hi": "ऐरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the main purpose of a debugger?",
        "question_hi": "डीबगर का मुख्य उद्देश्य क्या है?",
        "options_en": ["Find and fix errors", "Execute programs", "Compile code", "Design interfaces"],
        "options_hi": ["एरर ढूंढना और ठीक करना", "प्रोग्राम एक्जीक्यूट करना", "कोड कंपाइल करना", "इंटरफेस डिजाइन करना"],
        "answer_en": "Find and fix errors",
        "answer_hi": "एरर ढूंढना और ठीक करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which sorting algorithm has best-case O(n)?",
        "question_hi": "किस सॉर्टिंग एल्गोरिदम की बेस्ट-केस O(n) है?",
        "options_en": ["Insertion Sort", "Merge Sort", "Quick Sort", "Heap Sort"],
        "options_hi": ["इंसर्शन सॉर्ट", "मर्ज सॉर्ट", "क्विक सॉर्ट", "हीप सॉर्ट"],
        "answer_en": "Insertion Sort",
        "answer_hi": "इंसर्शन सॉर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What does PHP stand for?",
        "question_hi": "PHP का पूरा नाम क्या है?",
        "options_en": ["Hypertext Preprocessor", "Personal Home Page", "Both", "Program Hypertext Processor"],
        "options_hi": ["हाइपरटेक्स्ट प्रीप्रोसेसर", "पर्सनल होम पेज", "दोनों", "प्रोग्राम हाइपरटेक्स्ट प्रोसेसर"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which protocol is used for secure file transfer?",
        "question_hi": "सिक्योर फ़ाइल ट्रांसफर के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["SFTP", "HTTP", "FTP", "SMTP"],
        "options_hi": ["SFTP", "HTTP", "FTP", "SMTP"],
        "answer_en": "SFTP",
        "answer_hi": "SFTP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the time complexity of insertion sort?",
        "question_hi": "इंसर्शन सॉर्ट की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
        "options_hi": ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
        "answer_en": "O(n²)",
        "answer_hi": "O(n²)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which language is used for desktop applications?",
        "question_hi": "डेस्कटॉप एप्लिकेशन के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["C#", "Java", "Python", "Ruby"],
        "options_hi": ["C#", "जावा", "पायथन", "रूबी"],
        "answer_en": "C#",
        "answer_hi": "C#",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What does CMOS stand for?",
        "question_hi": "CMOS का पूरा नाम क्या है?",
        "options_en": ["Complementary Metal-Oxide-Semiconductor", "Computer Metal-Oxide-Semiconductor", "Complementary Memory-Oxide-Semiconductor", "Computer Memory-Oxide-Semiconductor"],
        "options_hi": ["कॉम्प्लीमेंटरी मेटल-ऑक्साइड-सेमीकंडक्टर", "कंप्यूटर मेटल-ऑक्साइड-सेमीकंडक्टर", "कॉम्प्लीमेंटरी मेमोरी-ऑक्साइड-सेमीकंडक्टर", "कंप्यूटर मेमोरी-ऑक्साइड-सेमीकंडक्टर"],
        "answer_en": "Complementary Metal-Oxide-Semiconductor",
        "answer_hi": "कॉम्प्लीमेंटरी मेटल-ऑक्साइड-सेमीकंडक्टर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which algorithm finds Eulerian path?",
        "question_hi": "कौन सा एल्गोरिदम यूलरियन पाथ ढूंढता है?",
        "options_en": ["Fleury's", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["फ्लेरी", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "Fleury's",
        "answer_hi": "फ्लेरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the default port for SMTP?",
        "question_hi": "SMTP का डिफ़ॉल्ट पोर्ट क्या है?",
        "options_en": ["25", "80", "443", "21"],
        "options_hi": ["25", "80", "443", "21"],
        "answer_en": "25",
        "answer_hi": "25",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which data structure uses indexes?",
        "question_hi": "कौन सी डेटा संरचना इंडेक्स का उपयोग करती है?",
        "options_en": ["Array", "Linked List", "Stack", "Queue"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "स्टैक", "क्यू"],
        "answer_en": "Array",
        "answer_hi": "ऐरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the main purpose of a linker?",
        "question_hi": "लिंकर का मुख्य उद्देश्य क्या है?",
        "options_en": ["Combine object files", "Execute programs", "Debug code", "Design interfaces"],
        "options_hi": ["ऑब्जेक्ट फाइल्स को कॉम्बाइन करना", "प्रोग्राम एक्जीक्यूट करना", "कोड डीबग करना", "इंटरफेस डिजाइन करना"],
        "answer_en": "Combine object files",
        "answer_hi": "ऑब्जेक्ट फाइल्स को कॉम्बाइन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which sorting algorithm is in-place?",
        "question_hi": "कौन सा सॉर्टिंग एल्गोरिदम इन-प्लेस है?",
        "options_en": ["Quick Sort", "Merge Sort", "Both", "Heap Sort"],
        "options_hi": ["क्विक सॉर्ट", "मर्ज सॉर्ट", "दोनों", "हीप सॉर्ट"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What does AJAX stand for?",
        "question_hi": "AJAX का पूरा नाम क्या है?",
        "options_en": ["Asynchronous JavaScript and XML", "Advanced JavaScript and XML", "Asynchronous Java and XML", "Advanced Java and XML"],
        "options_hi": ["एसिंक्रोनस जावास्क्रिप्ट और XML", "एडवांस्ड जावास्क्रिप्ट और XML", "एसिंक्रोनस जावा और XML", "एडवांस्ड जावा और XML"],
        "answer_en": "Asynchronous JavaScript and XML",
        "answer_hi": "एसिंक्रोनस जावास्क्रिप्ट और XML",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which protocol is used for chat applications?",
        "question_hi": "चैट एप्लिकेशन के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["XMPP", "HTTP", "FTP", "SMTP"],
        "options_hi": ["XMPP", "HTTP", "FTP", "SMTP"],
        "answer_en": "XMPP",
        "answer_hi": "XMPP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the time complexity of counting sort?",
        "question_hi": "काउंटिंग सॉर्ट की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n + k)", "O(n log n)", "O(n²)", "O(log n)"],
        "options_hi": ["O(n + k)", "O(n log n)", "O(n²)", "O(log n)"],
        "answer_en": "O(n + k)",
        "answer_hi": "O(n + k)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which language is used for robotics?",
        "question_hi": "रोबोटिक्स के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["C++", "Java", "Python", "JavaScript"],
        "options_hi": ["C++", "जावा", "पायथन", "जावास्क्रिप्ट"],
        "answer_en": "C++",
        "answer_hi": "C++",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What does RAID stand for?",
        "question_hi": "RAID का पूरा नाम क्या है?",
        "options_en": ["Redundant Array of Independent Disks", "Redundant Array of Inexpensive Disks", "Both", "Random Array of Independent Disks"],
        "options_hi": ["रिडंडेंट ऐरे ऑफ इंडिपेंडेंट डिस्क्स", "रिडंडेंट ऐरे ऑफ इनएक्सपेंसिव डिस्क्स", "दोनों", "रैंडम ऐरे ऑफ इंडिपेंडेंट डिस्क्स"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which algorithm finds Hamiltonian cycle?",
        "question_hi": "कौन सा एल्गोरिदम हैमिल्टोनियन साइकिल ढूंढता है?",
        "options_en": ["Backtracking", "Dijkstra", "Bubble Sort", "Binary Search"],
        "options_hi": ["बैकट्रैकिंग", "डिज्क्स्ट्रा", "बबल सॉर्ट", "बाइनरी सर्च"],
        "answer_en": "Backtracking",
        "answer_hi": "बैकट्रैकिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the default port for MySQL?",
        "question_hi": "MySQL का डिफ़ॉल्ट पोर्ट क्या है?",
        "options_en": ["3306", "80", "443", "21"],
        "options_hi": ["3306", "80", "443", "21"],
        "answer_en": "3306",
        "answer_hi": "3306",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which data structure allows duplicate elements?",
        "question_hi": "कौन सी डेटा संरचना डुप्लिकेट एलिमेंट्स की अनुमति देती है?",
        "options_en": ["Multiset", "Set", "Both", "Map"],
        "options_hi": ["मल्टीसैट", "सैट", "दोनों", "मैप"],
        "answer_en": "Multiset",
        "answer_hi": "मल्टीसैट",
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