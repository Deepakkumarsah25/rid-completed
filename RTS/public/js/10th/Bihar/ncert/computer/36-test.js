const questions=[
    {
        "num": 1,
        "question_en": "What is the main purpose of an interpreter?",
        "question_hi": "इंटरप्रेटर का मुख्य उद्देश्य क्या है?",
        "options_en": ["Execute code line by line", "Compile entire program", "Debug code", "Design interfaces"],
        "options_hi": ["कोड को लाइन बाई लाइन एक्जीक्यूट करना", "पूरे प्रोग्राम को कंपाइल करना", "कोड डीबग करना", "इंटरफेस डिजाइन करना"],
        "answer_en": "Execute code line by line",
        "answer_hi": "कोड को लाइन बाई लाइन एक्जीक्यूट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which sorting algorithm uses pivot element?",
        "question_hi": "कौन सा सॉर्टिंग एल्गोरिदम पिवट एलिमेंट का उपयोग करता है?",
        "options_en": ["Quick Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"],
        "options_hi": ["क्विक सॉर्ट", "मर्ज सॉर्ट", "बबल सॉर्ट", "इंसर्शन सॉर्ट"],
        "answer_en": "Quick Sort",
        "answer_hi": "क्विक सॉर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
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
        "num": 4,
        "question_en": "Which protocol is used for network time synchronization?",
        "question_hi": "नेटवर्क टाइम सिंक्रोनाइज़ेशन के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["NTP", "HTTP", "FTP", "SMTP"],
        "options_hi": ["NTP", "HTTP", "FTP", "SMTP"],
        "answer_en": "NTP",
        "answer_hi": "NTP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
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
        "num": 6,
        "question_en": "Which data structure uses LIFO (Last In First Out) principle?",
        "question_hi": "कौन सी डेटा संरचना LIFO (लास्ट इन फर्स्ट आउट) सिद्धांत का उपयोग करती है?",
        "options_en": ["Stack", "Queue", "Array", "Linked List"],
        "options_hi": ["स्टैक", "क्यू", "ऐरे", "लिंक्ड लिस्ट"],
        "answer_en": "Stack",
        "answer_hi": "स्टैक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
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
        "num": 8,
        "question_en": "Which programming paradigm does Python support?",
        "question_hi": "पायथन किस प्रोग्रामिंग पैराडाइम का समर्थन करता है?",
        "options_en": ["Object-oriented", "Functional", "Procedural", "All of these"],
        "options_hi": ["ऑब्जेक्ट-ओरिएंटेड", "फंक्शनल", "प्रोसीजरल", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the time complexity of binary search?",
        "question_hi": "बाइनरी सर्च की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
        "options_hi": ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
        "answer_en": "O(log n)",
        "answer_hi": "O(log n)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which language is used for styling web pages?",
        "question_hi": "वेब पेजों को स्टाइल करने के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["CSS", "HTML", "JavaScript", "PHP"],
        "options_hi": ["CSS", "HTML", "जावास्क्रिप्ट", "PHP"],
        "answer_en": "CSS",
        "answer_hi": "CSS",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What does SQL stand for?",
        "question_hi": "SQL का पूरा नाम क्या है?",
        "options_en": ["Structured Query Language", "Simple Query Language", "Structured Question Language", "Simple Question Language"],
        "options_hi": ["स्ट्रक्चर्ड क्वेरी लैंग्वेज", "सिंपल क्वेरी लैंग्वेज", "स्ट्रक्चर्ड क्वेश्चन लैंग्वेज", "सिंपल क्वेश्चन लैंग्वेज"],
        "answer_en": "Structured Query Language",
        "answer_hi": "स्ट्रक्चर्ड क्वेरी लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which algorithm is used for shortest path finding?",
        "question_hi": "शॉर्टेस्ट पाथ ढूंढने के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["Dijkstra's", "Bubble Sort", "Quick Sort", "Binary Search"],
        "options_hi": ["डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट", "बाइनरी सर्च"],
        "answer_en": "Dijkstra's",
        "answer_hi": "डिज्क्स्ट्रा",
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
        "question_en": "Which data structure uses FIFO (First In First Out) principle?",
        "question_hi": "कौन सी डेटा संरचना FIFO (फर्स्ट इन फर्स्ट आउट) सिद्धांत का उपयोग करती है?",
        "options_en": ["Queue", "Stack", "Tree", "Graph"],
        "options_hi": ["क्यू", "स्टैक", "ट्री", "ग्राफ"],
        "answer_en": "Queue",
        "answer_hi": "क्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the main purpose of an operating system?",
        "question_hi": "ऑपरेटिंग सिस्टम का मुख्य उद्देश्य क्या है?",
        "options_en": ["Resource management", "Game development", "Web browsing", "Document editing"],
        "options_hi": ["संसाधन प्रबंधन", "गेम डेवलपमेंट", "वेब ब्राउज़िंग", "डॉक्यूमेंट एडिटिंग"],
        "answer_en": "Resource management",
        "answer_hi": "संसाधन प्रबंधन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which programming language is used for Android app development?",
        "question_hi": "एंड्रॉयड ऐप डेवलपमेंट के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["Java", "Swift", "C#", "Ruby"],
        "options_hi": ["जावा", "स्विफ्ट", "C#", "रूबी"],
        "answer_en": "Java",
        "answer_hi": "जावा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
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
        "num": 18,
        "question_en": "Which sorting algorithm has worst-case time complexity O(n²)?",
        "question_hi": "किस सॉर्टिंग एल्गोरिदम की वर्स्ट-केस टाइम कॉम्प्लेक्सिटी O(n²) है?",
        "options_en": ["Bubble Sort", "Merge Sort", "Quick Sort", "Heap Sort"],
        "options_hi": ["बबल सॉर्ट", "मर्ज सॉर्ट", "क्विक सॉर्ट", "हीप सॉर्ट"],
        "answer_en": "Bubble Sort",
        "answer_hi": "बबल सॉर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the default port for HTTP?",
        "question_hi": "HTTP का डिफ़ॉल्ट पोर्ट क्या है?",
        "options_en": ["80", "443", "21", "25"],
        "options_hi": ["80", "443", "21", "25"],
        "answer_en": "80",
        "answer_hi": "80",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which database model represents data as tables?",
        "question_hi": "कौन सा डेटाबेस मॉडल डेटा को टेबल के रूप में प्रस्तुत करता है?",
        "options_en": ["Relational", "Hierarchical", "Network", "Object-oriented"],
        "options_hi": ["रिलेशनल", "हायरार्किकल", "नेटवर्क", "ऑब्जेक्ट-ओरिएंटेड"],
        "answer_en": "Relational",
        "answer_hi": "रिलेशनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
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
        "num": 22,
        "question_en": "Which protocol is used for email transmission?",
        "question_hi": "ईमेल ट्रांसमिशन के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["SMTP", "HTTP", "FTP", "TCP"],
        "options_hi": ["SMTP", "HTTP", "FTP", "TCP"],
        "answer_en": "SMTP",
        "answer_hi": "SMTP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the time complexity of linear search?",
        "question_hi": "लीनियर सर्च की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        "options_hi": ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        "answer_en": "O(n)",
        "answer_hi": "O(n)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which language is primarily used for iOS app development?",
        "question_hi": "iOS ऐप डेवलपमेंट के लिए मुख्य रूप से किस भाषा का उपयोग किया जाता है?",
        "options_en": ["Swift", "Java", "Kotlin", "C++"],
        "options_hi": ["स्विफ्ट", "जावा", "कोटलिन", "C++"],
        "answer_en": "Swift",
        "answer_hi": "स्विफ्ट",
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
        "question_en": "Which algorithm is used for page replacement in operating systems?",
        "question_hi": "ऑपरेटिंग सिस्टम में पेज रिप्लेसमेंट के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["LRU", "FIFO", "Both", "Dijkstra"],
        "options_hi": ["LRU", "FIFO", "दोनों", "डिज्क्स्ट्रा"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
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
        "num": 28,
        "question_en": "Which programming language is known for machine learning?",
        "question_hi": "मशीन लर्निंग के लिए किस प्रोग्रामिंग भाषा को जाना जाता है?",
        "options_en": ["Python", "Java", "C++", "Ruby"],
        "options_hi": ["पायथन", "जावा", "C++", "रूबी"],
        "answer_en": "Python",
        "answer_hi": "पायथन",
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
        "question_en": "Which data structure is used for implementing recursion?",
        "question_hi": "रिकर्सन इम्प्लीमेंट करने के लिए किस डेटा स्ट्रक्चर का उपयोग किया जाता है?",
        "options_en": ["Stack", "Queue", "Tree", "Graph"],
        "options_hi": ["स्टैक", "क्यू", "ट्री", "ग्राफ"],
        "answer_en": "Stack",
        "answer_hi": "स्टैक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the main purpose of a firewall?",
        "question_hi": "फायरवॉल का मुख्य उद्देश्य क्या है?",
        "options_en": ["Network security", "Speed up internet", "Store data", "Manage emails"],
        "options_hi": ["नेटवर्क सुरक्षा", "इंटरनेट की गति बढ़ाना", "डेटा स्टोर करना", "ईमेल प्रबंधित करना"],
        "answer_en": "Network security",
        "answer_hi": "नेटवर्क सुरक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which sorting algorithm is known as divide and conquer?",
        "question_hi": "किस सॉर्टिंग एल्गोरिदम को डिवाइड एंड कॉन्कर के रूप में जाना जाता है?",
        "options_en": ["Merge Sort", "Bubble Sort", "Selection Sort", "Insertion Sort"],
        "options_hi": ["मर्ज सॉर्ट", "बबल सॉर्ट", "सिलेक्शन सॉर्ट", "इंसर्शन सॉर्ट"],
        "answer_en": "Merge Sort",
        "answer_hi": "मर्ज सॉर्ट",
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
        "question_en": "Which protocol is used for file transfer?",
        "question_hi": "फ़ाइल ट्रांसफर के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["FTP", "HTTP", "SMTP", "TCP"],
        "options_hi": ["FTP", "HTTP", "SMTP", "TCP"],
        "answer_en": "FTP",
        "answer_hi": "FTP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the time complexity of accessing an element in an array?",
        "question_hi": "ऐरे में एक एलिमेंट को एक्सेस करने की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "options_hi": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "answer_en": "O(1)",
        "answer_hi": "O(1)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which language is used for database queries?",
        "question_hi": "डेटाबेस क्वेरी के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["SQL", "Java", "Python", "HTML"],
        "options_hi": ["SQL", "जावा", "पायथन", "HTML"],
        "answer_en": "SQL",
        "answer_hi": "SQL",
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
        "question_en": "Which algorithm is used for network routing?",
        "question_hi": "नेटवर्क रूटिंग के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["Dijkstra's", "Bubble Sort", "Quick Sort", "Binary Search"],
        "options_hi": ["डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट", "बाइनरी सर्च"],
        "answer_en": "Dijkstra's",
        "answer_hi": "डिज्क्स्ट्रा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the main purpose of a compiler?",
        "question_hi": "कंपाइलर का मुख्य उद्देश्य क्या है?",
        "options_en": ["Translate high-level to machine code", "Execute programs", "Debug code", "Design interfaces"],
        "options_hi": ["हाई-लेवल को मशीन कोड में ट्रांसलेट करना", "प्रोग्राम एक्जीक्यूट करना", "कोड डीबग करना", "इंटरफेस डिजाइन करना"],
        "answer_en": "Translate high-level to machine code",
        "answer_hi": "हाई-लेवल को मशीन कोड में ट्रांसलेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which data structure is hierarchical?",
        "question_hi": "कौन सी डेटा संरचना पदानुक्रमित है?",
        "options_en": ["Tree", "Array", "Linked List", "Stack"],
        "options_hi": ["ट्री", "ऐरे", "लिंक्ड लिस्ट", "स्टैक"],
        "answer_en": "Tree",
        "answer_hi": "ट्री",
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
        "question_en": "What is the time complexity of bubble sort in worst case?",
        "question_hi": "बबल सॉर्ट की वर्स्ट केस टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
        "options_hi": ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
        "answer_en": "O(n²)",
        "answer_hi": "O(n²)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which language is used for web development?",
        "question_hi": "वेब डेवलपमेंट के लिए किस भाषा का उपयोग किया जाता है?",
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
        "question_en": "Which algorithm is used for compression?",
        "question_hi": "कंप्रेशन के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["Huffman Coding", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["हफमैन कोडिंग", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "Huffman Coding",
        "answer_hi": "हफमैन कोडिंग",
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
        "question_en": "Which programming language is functional?",
        "question_hi": "कौन सी प्रोग्रामिंग भाषा फंक्शनल है?",
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
        "question_en": "Which data structure allows bidirectional traversal?",
        "question_hi": "कौन सी डेटा संरचना द्विदिश ट्रैवर्सल की अनुमति देती है?",
        "options_en": ["Doubly Linked List", "Singly Linked List", "Stack", "Queue"],
        "options_hi": ["डबली लिंक्ड लिस्ट", "सिंगली लिंक्ड लिस्ट", "स्टैक", "क्यू"],
        "answer_en": "Doubly Linked List",
        "answer_hi": "डबली लिंक्ड लिस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the main purpose of cache memory?",
        "question_hi": "कैश मेमोरी का मुख्य उद्देश्य क्या है?",
        "options_en": ["Speed up data access", "Increase storage", "Backup data", "Encrypt data"],
        "options_hi": ["डेटा एक्सेस की गति बढ़ाना", "स्टोरेज बढ़ाना", "डेटा बैकअप", "डेटा एन्क्रिप्ट करना"],
        "answer_en": "Speed up data access",
        "answer_hi": "डेटा एक्सेस की गति बढ़ाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
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
        "question_en": "Which language is used for statistical computing?",
        "question_hi": "सांख्यिकीय कंप्यूटिंग के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["R", "Java", "C#", "Ruby"],
        "options_hi": ["R", "जावा", "C#", "रूबी"],
        "answer_en": "R",
        "answer_hi": "R",
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
        "question_en": "Which algorithm solves the traveling salesman problem?",
        "question_hi": "कौन सा एल्गोरिदम ट्रैवलिंग सेल्समैन प्रॉब्लम को हल करता है?",
        "options_en": ["Dynamic Programming", "Dijkstra", "Bubble Sort", "Binary Search"],
        "options_hi": ["डायनामिक प्रोग्रामिंग", "डिज्क्स्ट्रा", "बबल सॉर्ट", "बाइनरी सर्च"],
        "answer_en": "Dynamic Programming",
        "answer_hi": "डायनामिक प्रोग्रामिंग",
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
        "question_en": "Which data structure uses key-value pairs?",
        "question_hi": "कौन सी डेटा संरचना की-वैल्यू पेयर्स का उपयोग करती है?",
        "options_en": ["Hash Table", "Array", "Linked List", "Stack"],
        "options_hi": ["हैश टेबल", "ऐरे", "लिंक्ड लिस्ट", "स्टैक"],
        "answer_en": "Hash Table",
        "answer_hi": "हैश टेबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the main purpose of an assembler?",
        "question_hi": "असेम्बलर का मुख्य उद्देश्य क्या है?",
        "options_en": ["Convert assembly to machine code", "Execute programs", "Debug code", "Design interfaces"],
        "options_hi": ["असेम्बली को मशीन कोड में कन्वर्ट करना", "प्रोग्राम एक्जीक्यूट करना", "कोड डीबग करना", "इंटरफेस डिजाइन करना"],
        "answer_en": "Convert assembly to machine code",
        "answer_hi": "असेम्बली को मशीन कोड में कन्वर्ट करना",
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
        "question_en": "Which protocol is used for domain name resolution?",
        "question_hi": "डोमेन नेम रेजोल्यूशन के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["DNS", "HTTP", "FTP", "SMTP"],
        "options_hi": ["DNS", "HTTP", "FTP", "SMTP"],
        "answer_en": "DNS",
        "answer_hi": "DNS",
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
        "question_en": "Which language is used for system programming?",
        "question_hi": "सिस्टम प्रोग्रामिंग के लिए किस भाषा का उपयोग किया जाता है?",
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
        "question_en": "Which algorithm finds minimum spanning tree?",
        "question_hi": "कौन सा एल्गोरिदम मिनिमम स्पैनिंग ट्री ढूंढता है?",
        "options_en": ["Kruskal's", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["क्रुस्कल", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "Kruskal's",
        "answer_hi": "क्रुस्कल",
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
        "question_en": "Which data structure is non-linear?",
        "question_hi": "कौन सी डेटा संरचना नॉन-लीनियर है?",
        "options_en": ["Graph", "Array", "Linked List", "Stack"],
        "options_hi": ["ग्राफ", "ऐरे", "लिंक्ड लिस्ट", "स्टैक"],
        "answer_en": "Graph",
        "answer_hi": "ग्राफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What does CPU stand for?",
        "question_hi": "CPU का पूरा नाम क्या है?",
        "options_en": ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
        "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंप्यूटर प्रोग्राम यूनिट"],
        "answer_en": "Central Processing Unit",
        "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which programming language is known as the 'mother of all languages'?",
        "question_hi": "किस प्रोग्रामिंग भाषा को 'सभी भाषाओं की माता' के रूप में जाना जाता है?",
        "options_en": ["C", "Assembly", "Fortran", "ALGOL"],
        "options_hi": ["C", "असेम्बली", "फोरट्रान", "ALGOL"],
        "answer_en": "ALGOL",
        "answer_hi": "ALGOL",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What does RAM stand for?",
        "question_hi": "RAM का पूरा नाम क्या है?",
        "options_en": ["Random Access Memory", "Read Access Memory", "Random Available Memory", "Read Available Memory"],
        "options_hi": ["रैंडम एक्सेस मेमोरी", "रीड एक्सेस मेमोरी", "रैंडम अवेलेबल मेमोरी", "रीड अवेलेबल मेमोरी"],
        "answer_en": "Random Access Memory",
        "answer_hi": "रैंडम एक्सेस मेमोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which protocol is used for secure communication over a computer network?",
        "question_hi": "कंप्यूटर नेटवर्क पर सुरक्षित संचार के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["HTTPS", "HTTP", "FTP", "SMTP"],
        "options_hi": ["HTTPS", "HTTP", "FTP", "SMTP"],
        "answer_en": "HTTPS",
        "answer_hi": "HTTPS",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the full form of URL?",
        "question_hi": "URL का पूरा नाम क्या है?",
        "options_en": ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"],
        "options_hi": ["यूनिफ़ॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लोकेटर", "यूनिफ़ॉर्म रिसोर्स लिंक", "यूनिवर्सल रिसोर्स लिंक"],
        "answer_en": "Uniform Resource Locator",
        "answer_hi": "यूनिफ़ॉर्म रिसोर्स लोकेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which language is used for artificial intelligence?",
        "question_hi": "आर्टिफिशियल इंटेलिजेंस के लिए किस भाषा का उपयोग किया जाता है?",
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
        "question_en": "Which algorithm solves the knapsack problem?",
        "question_hi": "कौन सा एल्गोरिदम नैपसैक प्रॉब्लम को हल करता है?",
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
        "question_en": "Which data structure allows circular linking?",
        "question_hi": "कौन सी डेटा संरचना सर्कुलर लिंकिंग की अनुमति देती है?",
        "options_en": ["Circular Linked List", "Singly Linked List", "Doubly Linked List", "Array"],
        "options_hi": ["सर्कुलर लिंक्ड लिस्ट", "सिंगली लिंक्ड लिस्ट", "डबली लिंक्ड लिस्ट", "ऐरे"],
        "answer_en": "Circular Linked List",
        "answer_hi": "सर्कुलर लिंक्ड लिस्ट",
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
        "question_en": "Which sorting algorithm has best-case time complexity O(n)?",
        "question_hi": "किस सॉर्टिंग एल्गोरिदम की बेस्ट-केस टाइम कॉम्प्लेक्सिटी O(n) है?",
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
        "question_en": "Which protocol is used for secure shell access?",
        "question_hi": "सिक्योर शेल एक्सेस के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["SSH", "HTTP", "FTP", "SMTP"],
        "options_hi": ["SSH", "HTTP", "FTP", "SMTP"],
        "answer_en": "SSH",
        "answer_hi": "SSH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the time complexity of insertion sort in worst case?",
        "question_hi": "इंसर्शन सॉर्ट की वर्स्ट केस टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
        "options_hi": ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
        "answer_en": "O(n²)",
        "answer_hi": "O(n²)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which language is used for game development?",
        "question_hi": "गेम डेवलपमेंट के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["C++", "Java", "Python", "Ruby"],
        "options_hi": ["C++", "जावा", "पायथन", "रूबी"],
        "answer_en": "C++",
        "answer_hi": "C++",
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
        "question_en": "Which algorithm finds strongly connected components?",
        "question_hi": "कौन सा एल्गोरिदम स्ट्रोंगली कनेक्टेड कंपोनेंट्स ढूंढता है?",
        "options_en": ["Kosaraju's", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["कोसाराजू", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "Kosaraju's",
        "answer_hi": "कोसाराजू",
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
        "question_en": "Which data structure uses parent-child relationships?",
        "question_hi": "कौन सी डेटा संरचना पैरेंट-चाइल्ड रिलेशनशिप का उपयोग करती है?",
        "options_en": ["Tree", "Array", "Linked List", "Stack"],
        "options_hi": ["ट्री", "ऐरे", "लिंक्ड लिस्ट", "स्टैक"],
        "answer_en": "Tree",
        "answer_hi": "ट्री",
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
        "question_en": "Which sorting algorithm is comparison-based?",
        "question_hi": "कौन सा सॉर्टिंग एल्गोरिदम कम्पैरिजन-बेस्ड है?",
        "options_en": ["All sorting algorithms", "Counting Sort", "Radix Sort", "Bucket Sort"],
        "options_hi": ["सभी सॉर्टिंग एल्गोरिदम", "काउंटिंग सॉर्ट", "रेडिक्स सॉर्ट", "बकेट सॉर्ट"],
        "answer_en": "All sorting algorithms",
        "answer_hi": "सभी सॉर्टिंग एल्गोरिदम",
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
        "question_en": "Which protocol is used for voice over IP?",
        "question_hi": "वॉइस ओवर IP के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["VoIP", "HTTP", "FTP", "SMTP"],
        "options_hi": ["VoIP", "HTTP", "FTP", "SMTP"],
        "answer_en": "VoIP",
        "answer_hi": "VoIP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the time complexity of radix sort?",
        "question_hi": "रेडिक्स सॉर्ट की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(nk)", "O(n log n)", "O(n²)", "O(log n)"],
        "options_hi": ["O(nk)", "O(n log n)", "O(n²)", "O(log n)"],
        "answer_en": "O(nk)",
        "answer_hi": "O(nk)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which language is used for embedded systems?",
        "question_hi": "एम्बेडेड सिस्टम के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["C", "Java", "Python", "JavaScript"],
        "options_hi": ["C", "जावा", "पायथन", "जावास्क्रिप्ट"],
        "answer_en": "C",
        "answer_hi": "C",
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
        "question_en": "Which algorithm finds bridges in a graph?",
        "question_hi": "कौन सा एल्गोरिदम ग्राफ में ब्रिज ढूंढता है?",
        "options_en": ["Tarjan's", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["टार्जन", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "Tarjan's",
        "answer_hi": "टार्जन",
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
        "question_en": "Which data structure allows efficient searching?",
        "question_hi": "कौन सी डेटा संरचना कुशल खोज की अनुमति देती है?",
        "options_en": ["Binary Search Tree", "Array", "Linked List", "Stack"],
        "options_hi": ["बाइनरी सर्च ट्री", "ऐरे", "लिंक्ड लिस्ट", "स्टैक"],
        "answer_en": "Binary Search Tree",
        "answer_hi": "बाइनरी सर्च ट्री",
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