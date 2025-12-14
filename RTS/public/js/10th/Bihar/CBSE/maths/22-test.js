const questions = [
    {
        "num": 1,
        "question_en": "What is the time complexity of finding an element in a balanced binary search tree?",
        "question_hi": "बैलेंस्ड बाइनरी सर्च ट्री में एलिमेंट ढूंढने की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "options_hi": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "answer_en": "O(log n)",
        "answer_hi": "O(log n)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which data structure is used for implementing a web browser's back button?",
        "question_hi": "वेब ब्राउजर के बैक बटन को इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Queue", "Stack", "Tree", "Graph"],
        "options_hi": ["क्यू", "स्टैक", "ट्री", "ग्राफ"],
        "answer_en": "Stack",
        "answer_hi": "स्टैक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What does JDK stand for in Java?",
        "question_hi": "जावा में JDK का पूरा नाम क्या है?",
        "options_en": ["Java Development Kit", "Java Design Kit", "Java Deployment Kit", "Java Debugging Kit"],
        "options_hi": ["जावा डेवलपमेंट किट", "जावा डिजाइन किट", "जावा डिप्लॉयमेंट किट", "जावा डीबगिंग किट"],
        "answer_en": "Java Development Kit",
        "answer_hi": "जावा डेवलपमेंट किट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which protocol is used for secure remote login?",
        "question_hi": "सिक्योर रिमोट लॉगिन के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "SSH", "SMTP"],
        "options_hi": ["HTTP", "FTP", "SSH", "SMTP"],
        "answer_en": "SSH",
        "answer_hi": "SSH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the default port for MongoDB?",
        "question_hi": "MongoDB के लिए डिफॉल्ट पोर्ट क्या है?",
        "options_en": ["27017", "80", "443", "21"],
        "options_hi": ["27017", "80", "443", "21"],
        "answer_en": "27017",
        "answer_hi": "27017",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which language is primarily used for system programming?",
        "question_hi": "सिस्टम प्रोग्रामिंग के लिए मुख्य रूप से कौन सी भाषा उपयोग की जाती है?",
        "options_en": ["Python", "Java", "C", "JavaScript"],
        "options_hi": ["पाइथन", "जावा", "C", "जावास्क्रिप्ट"],
        "answer_en": "C",
        "answer_hi": "C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What does JVM stand for?",
        "question_hi": "JVM का पूरा नाम क्या है?",
        "options_en": ["Java Virtual Machine", "Java Visual Machine", "Java Variable Machine", "Java Version Machine"],
        "options_hi": ["जावा वर्चुअल मशीन", "जावा विजुअल मशीन", "जावा वेरिएबल मशीन", "जावा वर्जन मशीन"],
        "answer_en": "Java Virtual Machine",
        "answer_hi": "जावा वर्चुअल मशीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which data structure is used for implementing a printer spooler?",
        "question_hi": "प्रिंटर स्पूलर इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Stack", "Queue", "Tree", "Graph"],
        "options_hi": ["स्टैक", "क्यू", "ट्री", "ग्राफ"],
        "answer_en": "Queue",
        "answer_hi": "क्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the time complexity of radix sort in worst case?",
        "question_hi": "रेडिक्स सॉर्ट की वर्स्ट केस टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n)", "O(nk)", "O(n log n)", "O(n²)"],
        "options_hi": ["O(n)", "O(nk)", "O(n log n)", "O(n²)"],
        "answer_en": "O(nk)",
        "answer_hi": "O(nk)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which programming language is known for its use in scientific computing?",
        "question_hi": "साइंटिफिक कंप्यूटिंग में उपयोग के लिए कौन सी प्रोग्रामिंग भाषा जानी जाती है?",
        "options_en": ["Java", "Python", "C#", "Ruby"],
        "options_hi": ["जावा", "पाइथन", "C#", "रूबी"],
        "answer_en": "Python",
        "answer_hi": "पाइथन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What does SQL stand for in databases?",
        "question_hi": "डेटाबेस में SQL का पूरा नाम क्या है?",
        "options_en": ["Structured Query Language", "Simple Query Language", "System Query Logic", "Structured Question Language"],
        "options_hi": ["स्ट्रक्चर्ड क्वेरी लैंग्वेज", "सिंपल क्वेरी लैंग्वेज", "सिस्टम क्वेरी लॉजिक", "स्ट्रक्चर्ड क्वेश्चन लैंग्वेज"],
        "answer_en": "Structured Query Language",
        "answer_hi": "स्ट्रक्चर्ड क्वेरी लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which keyword is used to define a class in Java?",
        "question_hi": "जावा में क्लास डिफाइन करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["class", "struct", "object", "define"],
        "options_hi": ["क्लास", "स्ट्रक्ट", "ऑब्जेक्ट", "डिफाइन"],
        "answer_en": "class",
        "answer_hi": "क्लास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the size of a char in Java?",
        "question_hi": "जावा में char का साइज क्या है?",
        "options_en": ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
        "options_hi": ["1 बाइट", "2 बाइट्स", "4 बाइट्स", "8 बाइट्स"],
        "answer_en": "2 bytes",
        "answer_hi": "2 बाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which data structure is used for implementing a music streaming queue?",
        "question_hi": "म्यूजिक स्ट्रीमिंग क्यू इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Array", "Linked List", "Queue", "Stack"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "क्यू", "स्टैक"],
        "answer_en": "Queue",
        "answer_hi": "क्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What does CSS stand for in web development?",
        "question_hi": "वेब डेवलपमेंट में CSS का पूरा नाम क्या है?",
        "options_en": ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Sheets"],
        "options_hi": ["कैस्केडिंग स्टाइल शीट्स", "कंप्यूटर स्टाइल शीट्स", "क्रिएटिव स्टाइल सिस्टम", "कलरफुल स्टाइल शीट्स"],
        "answer_en": "Cascading Style Sheets",
        "answer_hi": "कैस्केडिंग स्टाइल शीट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which algorithm is used for finding connected components in a graph?",
        "question_hi": "ग्राफ में कनेक्टेड कंपोनेंट्स ढूंढने के लिए कौन सा अल्गोरिदम उपयोग किया जाता है?",
        "options_en": ["Bubble Sort", "Dijkstra's", "DFS", "Binary Search"],
        "options_hi": ["बबल सॉर्ट", "डिजक्स्ट्रा", "DFS", "बाइनरी सर्च"],
        "answer_en": "DFS",
        "answer_hi": "DFS",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the default value of an object reference in Java?",
        "question_hi": "जावा में ऑब्जेक्ट रेफरेन्स का डिफॉल्ट वैल्यू क्या है?",
        "options_en": ["null", "0", "undefined", "false"],
        "options_hi": ["नल", "0", "अनडिफाइंड", "फॉल्स"],
        "answer_en": "null",
        "answer_hi": "नल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which database is a document-based NoSQL database?",
        "question_hi": "कौन सा डेटाबेस डॉक्यूमेंट-बेस्ड NoSQL डेटाबेस है?",
        "options_en": ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
        "options_hi": ["MySQL", "PostgreSQL", "MongoDB", "ओरेकल"],
        "answer_en": "MongoDB",
        "answer_hi": "MongoDB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What does API stand for in programming?",
        "question_hi": "प्रोग्रामिंग में API का पूरा नाम क्या है?",
        "options_en": ["Application Programming Interface", "Advanced Programming Interface", "Application Protocol Interface", "Automated Programming Interface"],
        "options_hi": ["एप्लिकेशन प्रोग्रामिंग इंटरफेस", "एडवांस्ड प्रोग्रामिंग इंटरफेस", "एप्लिकेशन प्रोटोकॉल इंटरफेस", "ऑटोमेटेड प्रोग्रामिंग इंटरफेस"],
        "answer_en": "Application Programming Interface",
        "answer_hi": "एप्लिकेशन प्रोग्रामिंग इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which protocol is used for sending emails?",
        "question_hi": "ईमेल भेजने के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "SMTP", "TCP"],
        "options_hi": ["HTTP", "FTP", "SMTP", "TCP"],
        "answer_en": "SMTP",
        "answer_hi": "SMTP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the time complexity of inserting at the beginning of a linked list?",
        "question_hi": "लिंक्ड लिस्ट की शुरुआत में इन्सर्ट करने की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "options_hi": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "answer_en": "O(1)",
        "answer_hi": "O(1)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which language is used for building mobile applications?",
        "question_hi": "मोबाइल एप्लिकेशन बनाने के लिए कौन सी भाषा उपयोग की जाती है?",
        "options_en": ["HTML", "CSS", "JavaScript", "Swift"],
        "options_hi": ["HTML", "CSS", "जावास्क्रिप्ट", "स्विफ्ट"],
        "answer_en": "Swift",
        "answer_hi": "स्विफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What does URL stand for in web browsing?",
        "question_hi": "वेब ब्राउजिंग में URL का पूरा नाम क्या है?",
        "options_en": ["Uniform Resource Locator", "Universal Resource Link", "Uniform Reference Locator", "Universal Reference Link"],
        "options_hi": ["यूनिफॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लिंक", "यूनिफॉर्म रेफरेन्स लोकेटर", "यूनिवर्सल रेफरेन्स लिंक"],
        "answer_en": "Uniform Resource Locator",
        "answer_hi": "यूनिफॉर्म रिसोर्स लोकेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which sorting algorithm has O(n) time complexity in best case?",
        "question_hi": "कौन सा सॉर्टिंग अल्गोरिदम बेस्ट केस में O(n) टाइम कॉम्प्लेक्सिटी रखता है?",
        "options_en": ["Bubble Sort", "Quick Sort", "Insertion Sort", "Selection Sort"],
        "options_hi": ["बबल सॉर्ट", "क्विक सॉर्ट", "इन्सर्शन सॉर्ट", "सिलेक्शन सॉर्ट"],
        "answer_en": "Insertion Sort",
        "answer_hi": "इन्सर्शन सॉर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the main purpose of multithreading?",
        "question_hi": "मल्टीथ्रेडिंग का मुख्य उद्देश्य क्या है?",
        "options_en": ["Memory management", "Concurrent execution", "Error handling", "Security"],
        "options_hi": ["मेमोरी मैनेजमेंट", "कन्करंट एक्जीक्यूशन", "एरर हैंडलिंग", "सिक्योरिटी"],
        "answer_en": "Concurrent execution",
        "answer_hi": "कन्करंट एक्जीक्यूशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which data structure is used for implementing a navigation system's shortest path?",
        "question_hi": "नेविगेशन सिस्टम के शॉर्टेस्ट पाथ को इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Stack", "Queue", "Graph", "Tree"],
        "options_hi": ["स्टैक", "क्यू", "ग्राफ", "ट्री"],
        "answer_en": "Graph",
        "answer_hi": "ग्राफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What does IDE stand for in software development?",
        "question_hi": "सॉफ्टवेयर डेवलपमेंट में IDE का पूरा नाम क्या है?",
        "options_en": ["Integrated Development Environment", "International Development Engine", "Integrated Design Environment", "Interactive Development Engine"],
        "options_hi": ["इंटीग्रेटेड डेवलपमेंट एनवायरनमेंट", "इंटरनेशनल डेवलपमेंट इंजन", "इंटीग्रेटेड डिजाइन एनवायरनमेंट", "इंटरएक्टिव डेवलपमेंट इंजन"],
        "answer_en": "Integrated Development Environment",
        "answer_hi": "इंटीग्रेटेड डेवलपमेंट एनवायरनमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which keyword is used to call parent class constructor in Java?",
        "question_hi": "जावा में पैरेंट क्लास कंस्ट्रक्टर को कॉल करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["parent", "super", "this", "base"],
        "options_hi": ["पैरेंट", "सुपर", "दिस", "बेस"],
        "answer_en": "super",
        "answer_hi": "सुपर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the time complexity of heapify operation?",
        "question_hi": "हीपिफाई ऑपरेशन की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        "options_hi": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        "answer_en": "O(log n)",
        "answer_hi": "O(log n)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which protocol is used for transferring large files?",
        "question_hi": "बड़ी फाइल्स ट्रांसफर करने के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "SMTP", "TCP"],
        "options_hi": ["HTTP", "FTP", "SMTP", "TCP"],
        "answer_en": "FTP",
        "answer_hi": "FTP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What does SQL UPDATE statement do?",
        "question_hi": "SQL UPDATE स्टेटमेंट क्या करता है?",
        "options_en": ["Modifies existing data", "Deletes data", "Adds new data", "Retrieves data"],
        "options_hi": ["एक्सिस्टिंग डेटा मॉडिफाई करता है", "डेटा डिलीट करता है", "नया डेटा जोड़ता है", "डेटा रिट्रीव करता है"],
        "answer_en": "Modifies existing data",
        "answer_hi": "एक्सिस्टिंग डेटा मॉडिफाई करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which data structure is used for implementing a cache with LRU policy?",
        "question_hi": "LRU पॉलिसी वाला कैश इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Array", "Linked List", "HashMap + Doubly Linked List", "Stack"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "हैशमैप + डबली लिंक्ड लिस्ट", "स्टैक"],
        "answer_en": "HashMap + Doubly Linked List",
        "answer_hi": "हैशमैप + डबली लिंक्ड लिस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of version control systems?",
        "question_hi": "वर्जन कंट्रोल सिस्टम का उद्देश्य क्या है?",
        "options_en": ["Track code changes", "Collaborate with team", "Backup code", "All of the above"],
        "options_hi": ["कोड चेंजेस ट्रैक करना", "टीम के साथ कोलैबोरेट करना", "कोड बैकअप करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which language is primarily used for game development?",
        "question_hi": "गेम डेवलपमेंट के लिए मुख्य रूप से कौन सी भाषा उपयोग की जाती है?",
        "options_en": ["Java", "C++", "Python", "Ruby"],
        "options_hi": ["जावा", "C++", "पाइथन", "रूबी"],
        "answer_en": "C++",
        "answer_hi": "C++",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What does RAM stand for in computers?",
        "question_hi": "कंप्यूटर में RAM का पूरा नाम क्या है?",
        "options_en": ["Random Access Memory", "Read Access Memory", "Random Allocation Memory", "Read Allocation Memory"],
        "options_hi": ["रैंडम एक्सेस मेमोरी", "रीड एक्सेस मेमोरी", "रैंडम अलोकेशन मेमोरी", "रीड अलोकेशन मेमोरी"],
        "answer_en": "Random Access Memory",
        "answer_hi": "रैंडम एक्सेस मेमोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which algorithm is used for string matching?",
        "question_hi": "स्ट्रिंग मैचिंग के लिए कौन सा अल्गोरिदम उपयोग किया जाता है?",
        "options_en": ["Binary Search", "Quick Sort", "KMP Algorithm", "Bubble Sort"],
        "options_hi": ["बाइनरी सर्च", "क्विक सॉर्ट", "KMP अल्गोरिदम", "बबल सॉर्ट"],
        "answer_en": "KMP Algorithm",
        "answer_hi": "KMP अल्गोरिदम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the time complexity of deleting from a binary search tree?",
        "question_hi": "बाइनरी सर्च ट्री से डिलीट करने की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "options_hi": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "answer_en": "O(log n)",
        "answer_hi": "O(log n)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which data structure is used for implementing a file directory system?",
        "question_hi": "फाइल डायरेक्टरी सिस्टम इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Queue", "Stack", "Tree", "Graph"],
        "options_hi": ["क्यू", "स्टैक", "ट्री", "ग्राफ"],
        "answer_en": "Tree",
        "answer_hi": "ट्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What does CPU stand for in computer architecture?",
        "question_hi": "कंप्यूटर आर्किटेक्चर में CPU का पूरा नाम क्या है?",
        "options_en": ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
        "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंप्यूटर प्रोग्राम यूनिट"],
        "answer_en": "Central Processing Unit",
        "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which keyword is used to create an interface in Java?",
        "question_hi": "जावा में इंटरफेस क्रिएट करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["interface", "abstract", "class", "implements"],
        "options_hi": ["इंटरफेस", "एब्स्ट्रैक्ट", "क्लास", "इम्प्लीमेंट्स"],
        "answer_en": "interface",
        "answer_hi": "इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of DNS in networking?",
        "question_hi": "नेटवर्किंग में DNS का उद्देश्य क्या है?",
        "options_en": ["Domain Name System", "Data Network Service", "Digital Naming System", "Domain Network Service"],
        "options_hi": ["डोमेन नेम सिस्टम", "डेटा नेटवर्क सर्विस", "डिजिटल नेमिंग सिस्टम", "डोमेन नेटवर्क सर्विस"],
        "answer_en": "Domain Name System",
        "answer_hi": "डोमेन नेम सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which sorting algorithm is not stable?",
        "question_hi": "कौन सा सॉर्टिंग अल्गोरिदम स्टेबल नहीं है?",
        "options_en": ["Merge Sort", "Insertion Sort", "Quick Sort", "Bubble Sort"],
        "options_hi": ["मर्ज सॉर्ट", "इन्सर्शन सॉर्ट", "क्विक सॉर्ट", "बबल सॉर्ट"],
        "answer_en": "Quick Sort",
        "answer_hi": "क्विक सॉर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What does HTTP stand for in web protocols?",
        "question_hi": "वेब प्रोटोकॉल में HTTP का पूरा नाम क्या है?",
        "options_en": ["HyperText Transfer Protocol", "High Text Transfer Protocol", "Hyper Transfer Text Protocol", "High Transfer Text Protocol"],
        "options_hi": ["हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाई टेक्स्ट ट्रांसफर प्रोटोकॉल", "हाइपर ट्रांसफर टेक्स्ट प्रोटोकॉल", "हाई ट्रांसफर टेक्स्ट प्रोटोकॉल"],
        "answer_en": "HyperText Transfer Protocol",
        "answer_hi": "हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which data structure is used for implementing a symbol table in compilers?",
        "question_hi": "कंपाइलर में सिंबल टेबल इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Array", "Linked List", "Hash Table", "Stack"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "हैश टेबल", "स्टैक"],
        "answer_en": "Hash Table",
        "answer_hi": "हैश टेबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the time complexity of building a heap?",
        "question_hi": "हीप बिल्ड करने की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        "options_hi": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        "answer_en": "O(n)",
        "answer_hi": "O(n)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which protocol is used for secure web connections?",
        "question_hi": "सिक्योर वेब कनेक्शन के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "HTTPS", "SMTP"],
        "options_hi": ["HTTP", "FTP", "HTTPS", "SMTP"],
        "answer_en": "HTTPS",
        "answer_hi": "HTTPS",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What does OOP stand for in programming?",
        "question_hi": "प्रोग्रामिंग में OOP का पूरा नाम क्या है?",
        "options_en": ["Object Oriented Programming", "Object Oriented Protocol", "Object Optimization Programming", "Object Operation Protocol"],
        "options_hi": ["ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग", "ऑब्जेक्ट ओरिएंटेड प्रोटोकॉल", "ऑब्जेक्ट ऑप्टिमाइजेशन प्रोग्रामिंग", "ऑब्जेक्ट ऑपरेशन प्रोटोकॉल"],
        "answer_en": "Object Oriented Programming",
        "answer_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which data structure is used for implementing a redo functionality?",
        "question_hi": "रीडू फंक्शनैलिटी इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Queue", "Stack", "Tree", "Graph"],
        "options_hi": ["क्यू", "स्टैक", "ट्री", "ग्राफ"],
        "answer_en": "Stack",
        "answer_hi": "स्टैक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the default port for PostgreSQL?",
        "question_hi": "PostgreSQL के लिए डिफॉल्ट पोर्ट क्या है?",
        "options_en": ["80", "443", "5432", "21"],
        "options_hi": ["80", "443", "5432", "21"],
        "answer_en": "5432",
        "answer_hi": "5432",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which algorithm is used for network routing?",
        "question_hi": "नेटवर्क रूटिंग के लिए कौन सा अल्गोरिदम उपयोग किया जाता है?",
        "options_en": ["Dijkstra's", "Kruskal's", "Bellman-Ford", "Floyd-Warshall"],
        "options_hi": ["डिजक्स्ट्रा", "क्रुस्कल", "बेलमन-फोर्ड", "फ्लॉयड-वारशल"],
        "answer_en": "Dijkstra's",
        "answer_hi": "डिजक्स्ट्रा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What does VPN stand for in networking?",
        "question_hi": "नेटवर्किंग में VPN का पूरा नाम क्या है?",
        "options_en": ["Virtual Private Network", "Virtual Public Network", "Verified Private Network", "Virtual Protocol Network"],
        "options_hi": ["वर्चुअल प्राइवेट नेटवर्क", "वर्चुअल पब्लिक नेटवर्क", "वेरिफाइड प्राइवेट नेटवर्क", "वर्चुअल प्रोटोकॉल नेटवर्क"],
        "answer_en": "Virtual Private Network",
        "answer_hi": "वर्चुअल प्राइवेट नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which data structure is used for implementing a set?",
        "question_hi": "सेट इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Array", "Linked List", "Hash Table", "Stack"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "हैश टेबल", "स्टैक"],
        "answer_en": "Hash Table",
        "answer_hi": "हैश टेबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the time complexity of searching in a hash table?",
        "question_hi": "हैश टेबल में सर्चिंग की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "options_hi": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "answer_en": "O(1)",
        "answer_hi": "O(1)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which protocol is used for automatic IP address assignment?",
        "question_hi": "ऑटोमेटिक IP एड्रेस असाइनमेंट के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "DNS", "DHCP", "FTP"],
        "options_hi": ["HTTP", "DNS", "DHCP", "FTP"],
        "answer_en": "DHCP",
        "answer_hi": "DHCP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What does SQL SELECT statement do?",
        "question_hi": "SQL SELECT स्टेटमेंट क्या करता है?",
        "options_en": ["Retrieves data", "Deletes data", "Updates data", "Adds new data"],
        "options_hi": ["डेटा रिट्रीव करता है", "डेटा डिलीट करता है", "डेटा अपडेट करता है", "नया डेटा जोड़ता है"],
        "answer_en": "Retrieves data",
        "answer_hi": "डेटा रिट्रीव करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the purpose of a compiler?",
        "question_hi": "कंपाइलर का उद्देश्य क्या है?",
        "options_en": ["Translate high-level code to machine code", "Execute programs", "Debug code", "All of the above"],
        "options_hi": ["हाई-लेवल कोड को मशीन कोड में ट्रांसलेट करना", "प्रोग्राम एक्जीक्यूट करना", "कोड डीबग करना", "उपरोक्त सभी"],
        "answer_en": "Translate high-level code to machine code",
        "answer_hi": "हाई-लेवल कोड को मशीन कोड में ट्रांसलेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which language is used for frontend web development?",
        "question_hi": "फ्रंटएंड वेब डेवलपमेंट के लिए कौन सी भाषा उपयोग की जाती है?",
        "options_en": ["Python", "Java", "JavaScript", "C#"],
        "options_hi": ["पाइथन", "जावा", "जावास्क्रिप्ट", "C#"],
        "answer_en": "JavaScript",
        "answer_hi": "जावास्क्रिप्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does BIOS stand for in computers?",
        "question_hi": "कंप्यूटर में BIOS का पूरा नाम क्या है?",
        "options_en": ["Basic Input Output System", "Binary Input Output System", "Basic Integrated Operating System", "Binary Integrated Operating System"],
        "options_hi": ["बेसिक इनपुट आउटपुट सिस्टम", "बाइनरी इनपुट आउटपुट सिस्टम", "बेसिक इंटीग्रेटेड ऑपरेटिंग सिस्टम", "बाइनरी इंटीग्रेटेड ऑपरेटिंग सिस्टम"],
        "answer_en": "Basic Input Output System",
        "answer_hi": "बेसिक इनपुट आउटपुट सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which algorithm is used for database query optimization?",
        "question_hi": "डेटाबेस क्वेरी ऑप्टिमाइजेशन के लिए कौन सा अल्गोरिदम उपयोग किया जाता है?",
        "options_en": ["Binary Search", "B-tree", "Linked List", "Array"],
        "options_hi": ["बाइनरी सर्च", "B-ट्री", "लिंक्ड लिस्ट", "ऐरे"],
        "answer_en": "B-tree",
        "answer_hi": "B-ट्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the time complexity of merge sort in worst case?",
        "question_hi": "मर्ज सॉर्ट की वर्स्ट केस टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        "options_hi": ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        "answer_en": "O(n log n)",
        "answer_hi": "O(n log n)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which data structure is used for implementing social media connections?",
        "question_hi": "सोशल मीडिया कनेक्शन्स इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Array", "Linked List", "Graph", "Stack"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "ग्राफ", "स्टैक"],
        "answer_en": "Graph",
        "answer_hi": "ग्राफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What does SQL DELETE statement do?",
        "question_hi": "SQL DELETE स्टेटमेंट क्या करता है?",
        "options_en": ["Deletes data", "Updates data", "Adds new data", "Retrieves data"],
        "options_hi": ["डेटा डिलीट करता है", "डेटा अपडेट करता है", "नया डेटा जोड़ता है", "डेटा रिट्रीव करता है"],
        "answer_en": "Deletes data",
        "answer_hi": "डेटा डिलीट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which protocol is used for receiving emails?",
        "question_hi": "ईमेल रिसीव करने के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["SMTP", "POP3", "FTP", "HTTP"],
        "options_hi": ["SMTP", "POP3", "FTP", "HTTP"],
        "answer_en": "POP3",
        "answer_hi": "POP3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the purpose of a firewall?",
        "question_hi": "फायरवॉल का उद्देश्य क्या है?",
        "options_en": ["Network security", "Data backup", "Speed optimization", "All of the above"],
        "options_hi": ["नेटवर्क सिक्योरिटी", "डेटा बैकअप", "स्पीड ऑप्टिमाइजेशन", "उपरोक्त सभी"],
        "answer_en": "Network security",
        "answer_hi": "नेटवर्क सिक्योरिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which data structure is used for implementing search suggestions?",
        "question_hi": "सर्च सजेशन्स इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Array", "Linked List", "Trie", "Stack"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "ट्राई", "स्टैक"],
        "answer_en": "Trie",
        "answer_hi": "ट्राई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the time complexity of DFS on a graph?",
        "question_hi": "ग्राफ पर DFS की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(V+E)", "O(V)", "O(E)", "O(V²)"],
        "options_hi": ["O(V+E)", "O(V)", "O(E)", "O(V²)"],
        "answer_en": "O(V+E)",
        "answer_hi": "O(V+E)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which protocol is used for real-time web communication?",
        "question_hi": "रियल-टाइम वेब कम्युनिकेशन के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "WebSocket", "SMTP"],
        "options_hi": ["HTTP", "FTP", "वेबसॉकेट", "SMTP"],
        "answer_en": "WebSocket",
        "answer_hi": "वेबसॉकेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What does SQL WHERE clause do?",
        "question_hi": "SQL WHERE क्लॉज क्या करता है?",
        "options_en": ["Filters records", "Sorts records", "Groups records", "Joins tables"],
        "options_hi": ["रिकॉर्ड्स फिल्टर करता है", "रिकॉर्ड्स सॉर्ट करता है", "रिकॉर्ड्स ग्रुप करता है", "टेबल्स जोड़ता है"],
        "answer_en": "Filters records",
        "answer_hi": "रिकॉर्ड्स फिल्टर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which data structure is used for implementing function calls?",
        "question_hi": "फंक्शन कॉल्स इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Queue", "Stack", "Tree", "Graph"],
        "options_hi": ["क्यू", "स्टैक", "ट्री", "ग्राफ"],
        "answer_en": "Stack",
        "answer_hi": "स्टैक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the time complexity of BFS on a graph?",
        "question_hi": "ग्राफ पर BFS की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(V+E)", "O(V)", "O(E)", "O(V²)"],
        "options_hi": ["O(V+E)", "O(V)", "O(E)", "O(V²)"],
        "answer_en": "O(V+E)",
        "answer_hi": "O(V+E)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which protocol is used for live video streaming?",
        "question_hi": "लाइव वीडियो स्ट्रीमिंग के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "HLS", "SMTP"],
        "options_hi": ["HTTP", "FTP", "HLS", "SMTP"],
        "answer_en": "HLS",
        "answer_hi": "HLS",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What does SQL JOIN clause do?",
        "question_hi": "SQL JOIN क्लॉज क्या करता है?",
        "options_en": ["Combines rows from tables", "Filters records", "Sorts records", "Groups records"],
        "options_hi": ["टेबल्स से रोज कॉम्बाइन करता है", "रिकॉर्ड्स फिल्टर करता है", "रिकॉर्ड्स सॉर्ट करता है", "रिकॉर्ड्स ग्रुप करता है"],
        "answer_en": "Combines rows from tables",
        "answer_hi": "टेबल्स से रोज कॉम्बाइन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which data structure is used for implementing expression evaluation?",
        "question_hi": "एक्सप्रेशन एवलुएशन इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Queue", "Stack", "Tree", "Graph"],
        "options_hi": ["क्यू", "स्टैक", "ट्री", "ग्राफ"],
        "answer_en": "Stack",
        "answer_hi": "स्टैक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the time complexity of matrix multiplication using Strassen's algorithm?",
        "question_hi": "स्ट्रैसेन के अल्गोरिदम का उपयोग करके मैट्रिक्स मल्टीप्लिकेशन की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n²)", "O(n².807)", "O(n³)", "O(log n)"],
        "options_hi": ["O(n²)", "O(n².807)", "O(n³)", "O(log n)"],
        "answer_en": "O(n².807)",
        "answer_hi": "O(n².807)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which protocol is used for peer-to-peer file sharing?",
        "question_hi": "पीयर-टू-पीयर फाइल शेयरिंग के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "BitTorrent", "SMTP"],
        "options_hi": ["HTTP", "FTP", "बिटटोरेंट", "SMTP"],
        "answer_en": "BitTorrent",
        "answer_hi": "बिटटोरेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What does SQL GROUP BY clause do?",
        "question_hi": "SQL GROUP BY क्लॉज क्या करता है?",
        "options_en": ["Groups rows", "Filters records", "Sorts records", "Joins tables"],
        "options_hi": ["रोज ग्रुप करता है", "रिकॉर्ड्स फिल्टर करता है", "रिकॉर्ड्स सॉर्ट करता है", "टेबल्स जोड़ता है"],
        "answer_en": "Groups rows",
        "answer_hi": "रोज ग्रुप करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which data structure is used for implementing process scheduling?",
        "question_hi": "प्रोसेस शेड्यूलिंग इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Queue", "Stack", "Tree", "Graph"],
        "options_hi": ["क्यू", "स्टैक", "ट्री", "ग्राफ"],
        "answer_en": "Queue",
        "answer_hi": "क्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the time complexity of in-order tree traversal?",
        "question_hi": "इन-ऑर्डर ट्री ट्रैवर्सल की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        "options_hi": ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        "answer_en": "O(n)",
        "answer_hi": "O(n)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which protocol is used for synchronizing computer clocks?",
        "question_hi": "कंप्यूटर क्लॉक्स सिंक्रोनाइज करने के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "NTP", "SMTP"],
        "options_hi": ["HTTP", "FTP", "NTP", "SMTP"],
        "answer_en": "NTP",
        "answer_hi": "NTP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What does SQL ORDER BY clause do?",
        "question_hi": "SQL ORDER BY क्लॉज क्या करता है?",
        "options_en": ["Sorts records", "Filters records", "Groups records", "Joins tables"],
        "options_hi": ["रिकॉर्ड्स सॉर्ट करता है", "रिकॉर्ड्स फिल्टर करता है", "रिकॉर्ड्स ग्रुप करता है", "टेबल्स जोड़ता है"],
        "answer_en": "Sorts records",
        "answer_hi": "रिकॉर्ड्स सॉर्ट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which data structure is used for implementing a web cache?",
        "question_hi": "वेब कैश इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Array", "Linked List", "Hash Table", "All of the above"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "हैश टेबल", "उपरोक्त सभी"],
        "answer_en": "Hash Table",
        "answer_hi": "हैश टेबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the time complexity of hash table deletion?",
        "question_hi": "हैश टेबल डिलीशन की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "options_hi": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "answer_en": "O(1)",
        "answer_hi": "O(1)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which protocol is used for network monitoring?",
        "question_hi": "नेटवर्क मॉनिटरिंग के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "SNMP", "SMTP"],
        "options_hi": ["HTTP", "FTP", "SNMP", "SMTP"],
        "answer_en": "SNMP",
        "answer_hi": "SNMP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What does SQL HAVING clause do?",
        "question_hi": "SQL HAVING क्लॉज क्या करता है?",
        "options_en": ["Filters groups", "Filters records", "Sorts records", "Joins tables"],
        "options_hi": ["ग्रुप्स फिल्टर करता है", "रिकॉर्ड्स फिल्टर करता है", "रिकॉर्ड्स सॉर्ट करता है", "टेबल्स जोड़ता है"],
        "answer_en": "Filters groups",
        "answer_hi": "ग्रुप्स फिल्टर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which data structure is used for implementing a priority queue efficiently?",
        "question_hi": "प्रायोरिटी क्यू को एफिशिएंटली इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Array", "Linked List", "Heap", "Stack"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "हीप", "स्टैक"],
        "answer_en": "Heap",
        "answer_hi": "हीप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the time complexity of bubble sort when array is sorted?",
        "question_hi": "जब ऐरे सॉर्टेड होता है तो बबल सॉर्ट की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
        "options_hi": ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
        "answer_en": "O(n)",
        "answer_hi": "O(n)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which protocol is used for encrypted file transfer?",
        "question_hi": "एन्क्रिप्टेड फाइल ट्रांसफर के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "SFTP", "SMTP"],
        "options_hi": ["HTTP", "FTP", "SFTP", "SMTP"],
        "answer_en": "SFTP",
        "answer_hi": "SFTP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What does SQL UNION operator do?",
        "question_hi": "SQL UNION ऑपरेटर क्या करता है?",
        "options_en": ["Combines result sets", "Filters records", "Sorts records", "Joins tables"],
        "options_hi": ["रिजल्ट सेट्स कॉम्बाइन करता है", "रिकॉर्ड्स फिल्टर करता है", "रिकॉर्ड्स सॉर्ट करता है", "टेबल्स जोड़ता है"],
        "answer_en": "Combines result sets",
        "answer_hi": "रिजल्ट सेट्स कॉम्बाइन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which data structure is used for implementing a blockchain?",
        "question_hi": "ब्लॉकचेन इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Array", "Linked List", "Tree", "Graph"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "ट्री", "ग्राफ"],
        "answer_en": "Linked List",
        "answer_hi": "लिंक्ड लिस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the time complexity of counting sort?",
        "question_hi": "काउंटिंग सॉर्ट की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n)", "O(n+k)", "O(n log n)", "O(n²)"],
        "options_hi": ["O(n)", "O(n+k)", "O(n log n)", "O(n²)"],
        "answer_en": "O(n+k)",
        "answer_hi": "O(n+k)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which protocol is used for voice communication over internet?",
        "question_hi": "इंटरनेट पर वॉइस कम्युनिकेशन के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "VoIP", "SMTP"],
        "options_hi": ["HTTP", "FTP", "VoIP", "SMTP"],
        "answer_en": "VoIP",
        "answer_hi": "VoIP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What does SQL PRIMARY KEY constraint do?",
        "question_hi": "SQL PRIMARY KEY कंस्ट्रेंट क्या करता है?",
        "options_en": ["Uniquely identifies records", "Filters records", "Sorts records", "Joins tables"],
        "options_hi": ["रिकॉर्ड्स को यूनिकली आइडेंटिफाई करता है", "रिकॉर्ड्स फिल्टर करता है", "रिकॉर्ड्स सॉर्ट करता है", "टेबल्स जोड़ता है"],
        "answer_en": "Uniquely identifies records",
        "answer_hi": "रिकॉर्ड्स को यूनिकली आइडेंटिफाई करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which data structure is used for implementing neural networks?",
        "question_hi": "न्यूरल नेटवर्क्स इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Array", "Linked List", "Graph", "All of the above"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "ग्राफ", "उपरोक्त सभी"],
        "answer_en": "Graph",
        "answer_hi": "ग्राफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the time complexity of bucket sort?",
        "question_hi": "बकेट सॉर्ट की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n)", "O(n+k)", "O(n log n)", "O(n²)"],
        "options_hi": ["O(n)", "O(n+k)", "O(n log n)", "O(n²)"],
        "answer_en": "O(n+k)",
        "answer_hi": "O(n+k)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which protocol is used for remote desktop connections?",
        "question_hi": "रिमोट डेस्कटॉप कनेक्शन के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "RDP", "SMTP"],
        "options_hi": ["HTTP", "FTP", "RDP", "SMTP"],
        "answer_en": "RDP",
        "answer_hi": "RDP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What does SQL FOREIGN KEY constraint do?",
        "question_hi": "SQL FOREIGN KEY कंस्ट्रेंट क्या करता है?",
        "options_en": ["Links tables", "Filters records", "Sorts records", "Groups records"],
        "options_hi": ["टेबल्स लिंक करता है", "रिकॉर्ड्स फिल्टर करता है", "रिकॉर्ड्स सॉर्ट करता है", "रिकॉर्ड्स ग्रुप करता है"],
        "answer_en": "Links tables",
        "answer_hi": "टेबल्स लिंक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which data structure is used for implementing a decision tree?",
        "question_hi": "डिसीजन ट्री इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Array", "Linked List", "Tree", "Graph"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "ट्री", "ग्राफ"],
        "answer_en": "Tree",
        "answer_hi": "ट्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the time complexity of finding the maximum element in an array?",
        "question_hi": "ऐरे में मैक्सिमम एलिमेंट ढूंढने की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "options_hi": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "answer_en": "O(n)",
        "answer_hi": "O(n)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which protocol is used for web services communication?",
        "question_hi": "वेब सर्विसेज कम्युनिकेशन के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "SOAP", "SMTP"],
        "options_hi": ["HTTP", "FTP", "SOAP", "SMTP"],
        "answer_en": "SOAP",
        "answer_hi": "SOAP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the main feature of functional programming?",
        "question_hi": "फंक्शनल प्रोग्रामिंग की मुख्य विशेषता क्या है?",
        "options_en": ["Immutability", "Inheritance", "Pointers", "Global variables"],
        "options_hi": ["इम्यूटेबिलिटी", "इनहेरिटेंस", "पॉइंटर्स", "ग्लोबल वेरिएबल्स"],
        "answer_en": "Immutability",
        "answer_hi": "इम्यूटेबिलिटी",
        "attempted": false,
        "selected": ""
    }
];

// All the JavaScript functions remain exactly the same as previous
// Just replace the questions array with this new one
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