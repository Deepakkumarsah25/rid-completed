const questions=[
    {
        "num": 1,
        "question_en": "What does AI stand for?",
        "question_hi": "AI का पूरा नाम क्या है?",
        "options_en": ["Artificial Intelligence", "Automated Intelligence", "Artificial Information", "Automated Information"],
        "options_hi": ["आर्टिफिशियल इंटेलिजेंस", "ऑटोमेटेड इंटेलिजेंस", "आर्टिफिशियल इंफॉर्मेशन", "ऑटोमेटेड इंफॉर्मेशन"],
        "answer_en": "Artificial Intelligence",
        "answer_hi": "आर्टिफिशियल इंटेलिजेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which data structure is used for implementing LRU cache?",
        "question_hi": "LRU कैश इम्प्लीमेंट करने के लिए किस डेटा स्ट्रक्चर का उपयोग किया जाता है?",
        "options_en": ["Doubly Linked List + Hash Map", "Array", "Stack", "Queue"],
        "options_hi": ["डबली लिंक्ड लिस्ट + हैश मैप", "ऐरे", "स्टैक", "क्यू"],
        "answer_en": "Doubly Linked List + Hash Map",
        "answer_hi": "डबली लिंक्ड लिस्ट + हैश मैप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What does ML stand for?",
        "question_hi": "ML का पूरा नाम क्या है?",
        "options_en": ["Machine Learning", "Memory Learning", "Machine Logic", "Memory Logic"],
        "options_hi": ["मशीन लर्निंग", "मेमोरी लर्निंग", "मशीन लॉजिक", "मेमोरी लॉजिक"],
        "answer_en": "Machine Learning",
        "answer_hi": "मशीन लर्निंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which protocol is used for IoT device communication?",
        "question_hi": "IoT डिवाइस कम्युनिकेशन के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["MQTT", "HTTP", "FTP", "SMTP"],
        "options_hi": ["MQTT", "HTTP", "FTP", "SMTP"],
        "answer_en": "MQTT",
        "answer_hi": "MQTT",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the full form of DBMS?",
        "question_hi": "DBMS का पूरा नाम क्या है?",
        "options_en": ["Database Management System", "Data Base Management System", "Database Managing System", "Data Base Managing System"],
        "options_hi": ["डेटाबेस मैनेजमेंट सिस्टम", "डेटा बेस मैनेजमेंट सिस्टम", "डेटाबेस मैनेजिंग सिस्टम", "डेटा बेस मैनेजिंग सिस्टम"],
        "answer_en": "Database Management System",
        "answer_hi": "डेटाबेस मैनेजमेंट सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which algorithm is used for face recognition?",
        "question_hi": "फेस रिकग्निशन के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["CNN (Convolutional Neural Network)", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["CNN (कनवॉल्यूशनल न्यूरल नेटवर्क)", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "CNN (Convolutional Neural Network)",
        "answer_hi": "CNN (कनवॉल्यूशनल न्यूरल नेटवर्क)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What does IOT stand for?",
        "question_hi": "IOT का पूरा नाम क्या है?",
        "options_en": ["Internet of Things", "Internet of Technology", "Intelligent Objects Technology", "Intelligent Objects Things"],
        "options_hi": ["इंटरनेट ऑफ थिंग्स", "इंटरनेट ऑफ टेक्नोलॉजी", "इंटेलिजेंट ऑब्जेक्ट्स टेक्नोलॉजी", "इंटेलिजेंट ऑब्जेक्ट्स थिंग्स"],
        "answer_en": "Internet of Things",
        "answer_hi": "इंटरनेट ऑफ थिंग्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which programming language is used for quantum computing?",
        "question_hi": "क्वांटम कंप्यूटिंग के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["Q#", "Java", "Python", "C++"],
        "options_hi": ["Q#", "जावा", "पायथन", "C++"],
        "answer_en": "Q#",
        "answer_hi": "Q#",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the time complexity of Floyd-Warshall algorithm?",
        "question_hi": "फ्लॉयड-वारशॉल एल्गोरिदम की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(V³)", "O(V²)", "O(V log V)", "O(V)"],
        "options_hi": ["O(V³)", "O(V²)", "O(V log V)", "O(V)"],
        "answer_en": "O(V³)",
        "answer_hi": "O(V³)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which language is used for blockchain smart contracts?",
        "question_hi": "ब्लॉकचेन स्मार्ट कॉन्ट्रैक्ट्स के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["Solidity", "Java", "Python", "JavaScript"],
        "options_hi": ["सोलिडिटी", "जावा", "पायथन", "जावास्क्रिप्ट"],
        "answer_en": "Solidity",
        "answer_hi": "सोलिडिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What does NLP stand for?",
        "question_hi": "NLP का पूरा नाम क्या है?",
        "options_en": ["Natural Language Processing", "Natural Learning Processing", "Neural Language Processing", "Neural Learning Processing"],
        "options_hi": ["नेचुरल लैंग्वेज प्रोसेसिंग", "नेचुरल लर्निंग प्रोसेसिंग", "न्यूरल लैंग्वेज प्रोसेसिंग", "न्यूरल लर्निंग प्रोसेसिंग"],
        "answer_en": "Natural Language Processing",
        "answer_hi": "नेचुरल लैंग्वेज प्रोसेसिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which algorithm is used for recommendation systems?",
        "question_hi": "रिकमेंडेशन सिस्टम के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["Collaborative Filtering", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["कोलैबोरेटिव फिल्टरिंग", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "Collaborative Filtering",
        "answer_hi": "कोलैबोरेटिव फिल्टरिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What does DSA stand for?",
        "question_hi": "DSA का पूरा नाम क्या है?",
        "options_en": ["Data Structures and Algorithms", "Data System Algorithms", "Digital Structure Algorithms", "Digital System Algorithms"],
        "options_hi": ["डेटा स्ट्रक्चर्स एंड एल्गोरिदम्स", "डेटा सिस्टम एल्गोरिदम्स", "डिजिटल स्ट्रक्चर एल्गोरिदम्स", "डिजिटल सिस्टम एल्गोरिदम्स"],
        "answer_en": "Data Structures and Algorithms",
        "answer_hi": "डेटा स्ट्रक्चर्स एंड एल्गोरिदम्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which data structure is used in Redis database?",
        "question_hi": "Redis डेटाबेस में किस डेटा स्ट्रक्चर का उपयोग किया जाता है?",
        "options_en": ["Key-Value Store", "Relational Tables", "Document Store", "Graph Database"],
        "options_hi": ["की-वैल्यू स्टोर", "रिलेशनल टेबल्स", "डॉक्यूमेंट स्टोर", "ग्राफ डेटाबेस"],
        "answer_en": "Key-Value Store",
        "answer_hi": "की-वैल्यू स्टोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the main purpose of Docker?",
        "question_hi": "Docker का मुख्य उद्देश्य क्या है?",
        "options_en": ["Containerization", "Virtualization", "Compilation", "Debugging"],
        "options_hi": ["कंटेनराइजेशन", "वर्चुअलाइजेशन", "कंपाइलेशन", "डीबगिंग"],
        "answer_en": "Containerization",
        "answer_hi": "कंटेनराइजेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which programming language is used for AR/VR development?",
        "question_hi": "AR/VR डेवलपमेंट के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["C# with Unity", "Java", "Python", "Ruby"],
        "options_hi": ["C# with Unity", "जावा", "पायथन", "रूबी"],
        "answer_en": "C# with Unity",
        "answer_hi": "C# with Unity",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What does AR stand for?",
        "question_hi": "AR का पूरा नाम क्या है?",
        "options_en": ["Augmented Reality", "Artificial Reality", "Augmented Reality", "Automated Reality"],
        "options_hi": ["ऑगमेंटेड रियलिटी", "आर्टिफिशियल रियलिटी", "ऑगमेंटेड रियलिटी", "ऑटोमेटेड रियलिटी"],
        "answer_en": "Augmented Reality",
        "answer_hi": "ऑगमेंटेड रियलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which algorithm is used for fraud detection?",
        "question_hi": "फ्रॉड डिटेक्शन के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["Anomaly Detection", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["अनोमली डिटेक्शन", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "Anomaly Detection",
        "answer_hi": "अनोमली डिटेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the default port for MongoDB?",
        "question_hi": "MongoDB का डिफ़ॉल्ट पोर्ट क्या है?",
        "options_en": ["27017", "3306", "5432", "6379"],
        "options_hi": ["27017", "3306", "5432", "6379"],
        "answer_en": "27017",
        "answer_hi": "27017",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which database is graph-based?",
        "question_hi": "कौन सा डेटाबेस ग्राफ-बेस्ड है?",
        "options_en": ["Neo4j", "MySQL", "PostgreSQL", "MongoDB"],
        "options_hi": ["Neo4j", "MySQL", "PostgreSQL", "MongoDB"],
        "answer_en": "Neo4j",
        "answer_hi": "Neo4j",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What does VR stand for?",
        "question_hi": "VR का पूरा नाम क्या है?",
        "options_en": ["Virtual Reality", "Visual Reality", "Virtual Reality", "Visual Reality"],
        "options_hi": ["वर्चुअल रियलिटी", "विजुअल रियलिटी", "वर्चुअल रियलिटी", "विजुअल रियलिटी"],
        "answer_en": "Virtual Reality",
        "answer_hi": "वर्चुअल रियलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which protocol is used for streaming video?",
        "question_hi": "स्ट्रीमिंग वीडियो के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["RTMP", "HTTP", "FTP", "SMTP"],
        "options_hi": ["RTMP", "HTTP", "FTP", "SMTP"],
        "answer_en": "RTMP",
        "answer_hi": "RTMP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the time complexity of Bellman-Ford algorithm?",
        "question_hi": "बेलमैन-फोर्ड एल्गोरिदम की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(VE)", "O(V²)", "O(V log V)", "O(V)"],
        "options_hi": ["O(VE)", "O(V²)", "O(V log V)", "O(V)"],
        "answer_en": "O(VE)",
        "answer_hi": "O(VE)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which language is used for scientific computing?",
        "question_hi": "साइंटिफिक कंप्यूटिंग के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["Python with NumPy", "Java", "C#", "Ruby"],
        "options_hi": ["पायथन with NumPy", "जावा", "C#", "रूबी"],
        "answer_en": "Python with NumPy",
        "answer_hi": "पायथन with NumPy",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What does CI/CD stand for?",
        "question_hi": "CI/CD का पूरा नाम क्या है?",
        "options_en": ["Continuous Integration/Continuous Deployment", "Continuous Integration/Continuous Development", "Continuous Integration/Continuous Delivery", "All of these"],
        "options_hi": ["कंटीन्यूअस इंटीग्रेशन/कंटीन्यूअस डिप्लॉयमेंट", "कंटीन्यूअस इंटीग्रेशन/कंटीन्यूअस डेवलपमेंट", "कंटीन्यूअस इंटीग्रेशन/कंटीन्यूअस डिलीवरी", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which algorithm is used for image segmentation?",
        "question_hi": "इमेज सेगमेंटेशन के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["U-Net", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["U-Net", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "U-Net",
        "answer_hi": "U-Net",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the default port for PostgreSQL?",
        "question_hi": "PostgreSQL का डिफ़ॉल्ट पोर्ट क्या है?",
        "options_en": ["5432", "3306", "27017", "6379"],
        "options_hi": ["5432", "3306", "27017", "6379"],
        "answer_en": "5432",
        "answer_hi": "5432",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which programming language is used for embedded Linux?",
        "question_hi": "एम्बेडेड Linux के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["C", "Java", "Python", "JavaScript"],
        "options_hi": ["C", "जावा", "पायथन", "जावास्क्रिप्ट"],
        "answer_en": "C",
        "answer_hi": "C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What does RDBMS stand for?",
        "question_hi": "RDBMS का पूरा नाम क्या है?",
        "options_en": ["Relational Database Management System", "Relational Data Base Management System", "Relational Database Managing System", "Relational Data Base Managing System"],
        "options_hi": ["रिलेशनल डेटाबेस मैनेजमेंट सिस्टम", "रिलेशनल डेटा बेस मैनेजमेंट सिस्टम", "रिलेशनल डेटाबेस मैनेजिंग सिस्टम", "रिलेशनल डेटा बेस मैनेजिंग सिस्टम"],
        "answer_en": "Relational Database Management System",
        "answer_hi": "रिलेशनल डेटाबेस मैनेजमेंट सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which data structure is used in TensorFlow?",
        "question_hi": "TensorFlow में किस डेटा स्ट्रक्चर का उपयोग किया जाता है?",
        "options_en": ["Tensors", "Arrays", "Linked Lists", "Stacks"],
        "options_hi": ["टेंसर्स", "ऐरे", "लिंक्ड लिस्ट्स", "स्टैक्स"],
        "answer_en": "Tensors",
        "answer_hi": "टेंसर्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the main purpose of Kubernetes?",
        "question_hi": "Kubernetes का मुख्य उद्देश्य क्या है?",
        "options_en": ["Container orchestration", "Virtualization", "Compilation", "Debugging"],
        "options_hi": ["कंटेनर ऑर्केस्ट्रेशन", "वर्चुअलाइजेशन", "कंपाइलेशन", "डीबगिंग"],
        "answer_en": "Container orchestration",
        "answer_hi": "कंटेनर ऑर्केस्ट्रेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which algorithm is used for natural language translation?",
        "question_hi": "नेचुरल लैंग्वेज ट्रांसलेशन के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["Transformer", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["ट्रांसफॉर्मर", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "Transformer",
        "answer_hi": "ट्रांसफॉर्मर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What does CNN stand for in deep learning?",
        "question_hi": "डीप लर्निंग में CNN का पूरा नाम क्या है?",
        "options_en": ["Convolutional Neural Network", "Convolutional Neural Network", "Convolutional Neural Network", "Convolutional Neural Network"],
        "options_hi": ["कनवॉल्यूशनल न्यूरल नेटवर्क", "कनवॉल्यूशनल न्यूरल नेटवर्क", "कनवॉल्यूशनल न्यूरल नेटवर्क", "कनवॉल्यूशनल न्यूरल नेटवर्क"],
        "answer_en": "Convolutional Neural Network",
        "answer_hi": "कनवॉल्यूशनल न्यूरल नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which protocol is used for microservices communication?",
        "question_hi": "माइक्रोसर्विसेज कम्युनिकेशन के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["gRPC", "HTTP", "FTP", "SMTP"],
        "options_hi": ["gRPC", "HTTP", "FTP", "SMTP"],
        "answer_en": "gRPC",
        "answer_hi": "gRPC",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the time complexity of A* search algorithm?",
        "question_hi": "A* सर्च एल्गोरिदम की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(b^d)", "O(n²)", "O(n log n)", "O(n)"],
        "options_hi": ["O(b^d)", "O(n²)", "O(n log n)", "O(n)"],
        "answer_en": "O(b^d)",
        "answer_hi": "O(b^d)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which language is used for Hadoop ecosystem?",
        "question_hi": "Hadoop इकोसिस्टम के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["Java", "Python", "Scala", "All of these"],
        "options_hi": ["जावा", "पायथन", "स्काला", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
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
        "num": 38,
        "question_en": "Which algorithm is used for autonomous vehicles?",
        "question_hi": "ऑटोनोमस व्हीकल्स के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["Reinforcement Learning", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["रीइन्फोर्समेंट लर्निंग", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "Reinforcement Learning",
        "answer_hi": "रीइन्फोर्समेंट लर्निंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the main purpose of Apache Spark?",
        "question_hi": "Apache Spark का मुख्य उद्देश्य क्या है?",
        "options_en": ["Big data processing", "Web serving", "Database management", "File storage"],
        "options_hi": ["बिग डेटा प्रोसेसिंग", "वेब सर्विंग", "डेटाबेस मैनेजमेंट", "फ़ाइल स्टोरेज"],
        "answer_en": "Big data processing",
        "answer_hi": "बिग डेटा प्रोसेसिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which data structure is used in Redis Sorted Sets?",
        "question_hi": "Redis सॉर्टेड सेट्स में किस डेटा स्ट्रक्चर का उपयोग किया जाता है?",
        "options_en": ["Skip List", "Array", "Linked List", "Stack"],
        "options_hi": ["स्किप लिस्ट", "ऐरे", "लिंक्ड लिस्ट", "स्टैक"],
        "answer_en": "Skip List",
        "answer_hi": "स्किप लिस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What does RNN stand for?",
        "question_hi": "RNN का पूरा नाम क्या है?",
        "options_en": ["Recurrent Neural Network", "Recursive Neural Network", "Recurrent Neural Network", "Recursive Neural Network"],
        "options_hi": ["रिकरेंट न्यूरल नेटवर्क", "रिकर्सिव न्यूरल नेटवर्क", "रिकरेंट न्यूरल नेटवर्क", "रिकर्सिव न्यूरल नेटवर्क"],
        "answer_en": "Recurrent Neural Network",
        "answer_hi": "रिकरेंट न्यूरल नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which protocol is used for service discovery?",
        "question_hi": "सर्विस डिस्कवरी के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["Consul", "HTTP", "FTP", "SMTP"],
        "options_hi": ["कॉन्सुल", "HTTP", "FTP", "SMTP"],
        "answer_en": "Consul",
        "answer_hi": "कॉन्सुल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the time complexity of Kruskal's algorithm?",
        "question_hi": "क्रुस्कल एल्गोरिदम की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(E log V)", "O(V²)", "O(V log V)", "O(V)"],
        "options_hi": ["O(E log V)", "O(V²)", "O(V log V)", "O(V)"],
        "answer_en": "O(E log V)",
        "answer_hi": "O(E log V)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which language is used for Apache Kafka?",
        "question_hi": "Apache Kafka के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["Scala", "Java", "Python", "Ruby"],
        "options_hi": ["स्काला", "जावा", "पायथन", "रूबी"],
        "answer_en": "Scala",
        "answer_hi": "स्काला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What does LSTM stand for?",
        "question_hi": "LSTM का पूरा नाम क्या है?",
        "options_en": ["Long Short-Term Memory", "Long Short-Term Memory", "Long Short-Term Memory", "Long Short-Term Memory"],
        "options_hi": ["लॉन्ग शॉर्ट-टर्म मेमोरी", "लॉन्ग शॉर्ट-टर्म मेमोरी", "लॉन्ग शॉर्ट-टर्म मेमोरी", "लॉन्ग शॉर्ट-टर्म मेमोरी"],
        "answer_en": "Long Short-Term Memory",
        "answer_hi": "लॉन्ग शॉर्ट-टर्म मेमोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which algorithm is used for clustering?",
        "question_hi": "क्लस्टरिंग के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["K-Means", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["K-Means", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "K-Means",
        "answer_hi": "K-Means",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the default port for Redis?",
        "question_hi": "Redis का डिफ़ॉल्ट पोर्ट क्या है?",
        "options_en": ["6379", "3306", "5432", "27017"],
        "options_hi": ["6379", "3306", "5432", "27017"],
        "answer_en": "6379",
        "answer_hi": "6379",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which programming language is used for Ethereum?",
        "question_hi": "Ethereum के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["Solidity", "Java", "Python", "C++"],
        "options_hi": ["सोलिडिटी", "जावा", "पायथन", "C++"],
        "answer_en": "Solidity",
        "answer_hi": "सोलिडिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What does NoSQL stand for?",
        "question_hi": "NoSQL का पूरा नाम क्या है?",
        "options_en": ["Not Only SQL", "No SQL", "Non SQL", "Not SQL"],
        "options_hi": ["नॉट ओनली SQL", "नो SQL", "नॉन SQL", "नॉट SQL"],
        "answer_en": "Not Only SQL",
        "answer_hi": "नॉट ओनली SQL",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which data structure is used in Elasticsearch?",
        "question_hi": "Elasticsearch में किस डेटा स्ट्रक्चर का उपयोग किया जाता है?",
        "options_en": ["Inverted Index", "B-Tree", "Hash Table", "Linked List"],
        "options_hi": ["इनवर्टेड इंडेक्स", "B-ट्री", "हैश टेबल", "लिंक्ड लिस्ट"],
        "answer_en": "Inverted Index",
        "answer_hi": "इनवर्टेड इंडेक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the main purpose of GraphQL?",
        "question_hi": "GraphQL का मुख्य उद्देश्य क्या है?",
        "options_en": ["API query language", "Database management", "File storage", "Web serving"],
        "options_hi": ["API क्वेरी लैंग्वेज", "डेटाबेस मैनेजमेंट", "फ़ाइल स्टोरेज", "वेब सर्विंग"],
        "answer_en": "API query language",
        "answer_hi": "API क्वेरी लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which algorithm is used for sentiment analysis?",
        "question_hi": "सेंटीमेंट एनालिसिस के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["BERT", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["BERT", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "BERT",
        "answer_hi": "BERT",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What does GAN stand for?",
        "question_hi": "GAN का पूरा नाम क्या है?",
        "options_en": ["Generative Adversarial Network", "Generative Adversarial Network", "Generative Adversarial Network", "Generative Adversarial Network"],
        "options_hi": ["जेनरेटिव एडवरसैरियल नेटवर्क", "जेनरेटिव एडवरसैरियल नेटवर्क", "जेनरेटिव एडवरसैरियल नेटवर्क", "जेनरेटिव एडवरसैरियल नेटवर्क"],
        "answer_en": "Generative Adversarial Network",
        "answer_hi": "जेनरेटिव एडवरसैरियल नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which protocol is used for load balancing?",
        "question_hi": "लोड बैलेंसिंग के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["HAProxy", "HTTP", "FTP", "SMTP"],
        "options_hi": ["HAProxy", "HTTP", "FTP", "SMTP"],
        "answer_en": "HAProxy",
        "answer_hi": "HAProxy",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the time complexity of Prim's algorithm?",
        "question_hi": "प्रिम एल्गोरिदम की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(E log V)", "O(V²)", "O(V log V)", "O(V)"],
        "options_hi": ["O(E log V)", "O(V²)", "O(V log V)", "O(V)"],
        "answer_en": "O(E log V)",
        "answer_hi": "O(E log V)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which language is used for Apache Flink?",
        "question_hi": "Apache Flink के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["Java", "Scala", "Python", "All of these"],
        "options_hi": ["जावा", "स्काला", "पायथन", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What does TPU stand for?",
        "question_hi": "TPU का पूरा नाम क्या है?",
        "options_en": ["Tensor Processing Unit", "Tensor Program Unit", "Tensor Processing Unit", "Tensor Program Unit"],
        "options_hi": ["टेंसर प्रोसेसिंग यूनिट", "टेंसर प्रोग्राम यूनिट", "टेंसर प्रोसेसिंग यूनिट", "टेंसर प्रोग्राम यूनिट"],
        "answer_en": "Tensor Processing Unit",
        "answer_hi": "टेंसर प्रोसेसिंग यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which algorithm is used for time series forecasting?",
        "question_hi": "टाइम सीरीज फोरकास्टिंग के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["ARIMA", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["ARIMA", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "ARIMA",
        "answer_hi": "ARIMA",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the main purpose of Apache Cassandra?",
        "question_hi": "Apache Cassandra का मुख्य उद्देश्य क्या है?",
        "options_en": ["Distributed database", "Web serving", "File storage", "API management"],
        "options_hi": ["डिस्ट्रीब्यूटेड डेटाबेस", "वेब सर्विंग", "फ़ाइल स्टोरेज", "API मैनेजमेंट"],
        "answer_en": "Distributed database",
        "answer_hi": "डिस्ट्रीब्यूटेड डेटाबेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which data structure is used in Apache HBase?",
        "question_hi": "Apache HBase में किस डेटा स्ट्रक्चर का उपयोग किया जाता है?",
        "options_en": ["LSM Tree", "B-Tree", "Hash Table", "Linked List"],
        "options_hi": ["LSM ट्री", "B-ट्री", "हैश टेबल", "लिंक्ड लिस्ट"],
        "answer_en": "LSM Tree",
        "answer_hi": "LSM ट्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What does BERT stand for?",
        "question_hi": "BERT का पूरा नाम क्या है?",
        "options_en": ["Bidirectional Encoder Representations from Transformers", "Bidirectional Encoder Representations from Transformers", "Bidirectional Encoder Representations from Transformers", "Bidirectional Encoder Representations from Transformers"],
        "options_hi": ["बाइडायरेक्शनल एनकोडर रिप्रेजेंटेशन्स फ्रॉम ट्रांसफॉर्मर्स", "बाइडायरेक्शनल एनकोडर रिप्रेजेंटेशन्स फ्रॉम ट्रांसफॉर्मर्स", "बाइडायरेक्शनल एनकोडर रिप्रेजेंटेशन्स फ्रॉम ट्रांसफॉर्मर्स", "बाइडायरेक्शनल एनकोडर रिप्रेजेंटेशन्स फ्रॉम ट्रांसफॉर्मर्स"],
        "answer_en": "Bidirectional Encoder Representations from Transformers",
        "answer_hi": "बाइडायरेक्शनल एनकोडर रिप्रेजेंटेशन्स फ्रॉम ट्रांसफॉर्मर्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which protocol is used for message queuing?",
        "question_hi": "मैसेज क्यूइंग के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["AMQP", "HTTP", "FTP", "SMTP"],
        "options_hi": ["AMQP", "HTTP", "FTP", "SMTP"],
        "answer_en": "AMQP",
        "answer_hi": "AMQP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the time complexity of Ford-Fulkerson algorithm?",
        "question_hi": "फोर्ड-फुलकर्सन एल्गोरिदम की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(E * max_flow)", "O(V²)", "O(V log V)", "O(V)"],
        "options_hi": ["O(E * max_flow)", "O(V²)", "O(V log V)", "O(V)"],
        "answer_en": "O(E * max_flow)",
        "answer_hi": "O(E * max_flow)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which language is used for Apache Storm?",
        "question_hi": "Apache Storm के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["Clojure", "Java", "Python", "Scala"],
        "options_hi": ["क्लोजर", "जावा", "पायथन", "स्काला"],
        "answer_en": "Clojure",
        "answer_hi": "क्लोजर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What does YAML stand for?",
        "question_hi": "YAML का पूरा नाम क्या है?",
        "options_en": ["YAML Ain't Markup Language", "Yet Another Markup Language", "YAML Ain't Markup Language", "Yet Another Markup Language"],
        "options_hi": ["YAML ऐंट मार्कअप लैंग्वेज", "येट अनदर मार्कअप लैंग्वेज", "YAML ऐंट मार्कअप लैंग्वेज", "येट अनदर मार्कअप लैंग्वेज"],
        "answer_en": "YAML Ain't Markup Language",
        "answer_hi": "YAML ऐंट मार्कअप लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which algorithm is used for object detection?",
        "question_hi": "ऑब्जेक्ट डिटेक्शन के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["YOLO", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["YOLO", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "YOLO",
        "answer_hi": "YOLO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the default port for RabbitMQ?",
        "question_hi": "RabbitMQ का डिफ़ॉल्ट पोर्ट क्या है?",
        "options_en": ["5672", "3306", "5432", "6379"],
        "options_hi": ["5672", "3306", "5432", "6379"],
        "answer_en": "5672",
        "answer_hi": "5672",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which programming language is used for TensorFlow?",
        "question_hi": "TensorFlow के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["Python", "C++", "Java", "All of these"],
        "options_hi": ["पायथन", "C++", "जावा", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What does ACID stand for in databases?",
        "question_hi": "डेटाबेस में ACID का पूरा नाम क्या है?",
        "options_en": ["Atomicity, Consistency, Isolation, Durability", "Atomicity, Consistency, Isolation, Durability", "Atomicity, Consistency, Isolation, Durability", "Atomicity, Consistency, Isolation, Durability"],
        "options_hi": ["एटोमिसिटी, कंसिस्टेंसी, आइसोलेशन, ड्यूरेबिलिटी", "एटोमिसिटी, कंसिस्टेंसी, आइसोलेशन, ड्यूरेबिलिटी", "एटोमिसिटी, कंसिस्टेंसी, आइसोलेशन, ड्यूरेबिलिटी", "एटोमिसिटी, कंसिस्टेंसी, आइसोलेशन, ड्यूरेबिलिटी"],
        "answer_en": "Atomicity, Consistency, Isolation, Durability",
        "answer_hi": "एटोमिसिटी, कंसिस्टेंसी, आइसोलेशन, ड्यूरेबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which data structure is used in Apache Lucene?",
        "question_hi": "Apache Lucene में किस डेटा स्ट्रक्चर का उपयोग किया जाता है?",
        "options_en": ["Inverted Index", "B-Tree", "Hash Table", "Linked List"],
        "options_hi": ["इनवर्टेड इंडेक्स", "B-ट्री", "हैश टेबल", "लिंक्ड लिस्ट"],
        "answer_en": "Inverted Index",
        "answer_hi": "इनवर्टेड इंडेक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the main purpose of Prometheus?",
        "question_hi": "Prometheus का मुख्य उद्देश्य क्या है?",
        "options_en": ["Monitoring and alerting", "Database management", "File storage", "Web serving"],
        "options_hi": ["मॉनिटरिंग और अलर्टिंग", "डेटाबेस मैनेजमेंट", "फ़ाइल स्टोरेज", "वेब सर्विंग"],
        "answer_en": "Monitoring and alerting",
        "answer_hi": "मॉनिटरिंग और अलर्टिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which algorithm is used for credit scoring?",
        "question_hi": "क्रेडिट स्कोरिंग के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["Logistic Regression", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["लॉजिस्टिक रिग्रेशन", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "Logistic Regression",
        "answer_hi": "लॉजिस्टिक रिग्रेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What does GPT stand for?",
        "question_hi": "GPT का पूरा नाम क्या है?",
        "options_en": ["Generative Pre-trained Transformer", "Generative Pre-trained Transformer", "Generative Pre-trained Transformer", "Generative Pre-trained Transformer"],
        "options_hi": ["जेनरेटिव प्री-ट्रेंड ट्रांसफॉर्मर", "जेनरेटिव प्री-ट्रेंड ट्रांसफॉर्मर", "जेनरेटिव प्री-ट्रेंड ट्रांसफॉर्मर", "जेनरेटिव प्री-ट्रेंड ट्रांसफॉर्मर"],
        "answer_en": "Generative Pre-trained Transformer",
        "answer_hi": "जेनरेटिव प्री-ट्रेंड ट्रांसफॉर्मर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which protocol is used for service mesh?",
        "question_hi": "सर्विस मेश के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["Envoy", "HTTP", "FTP", "SMTP"],
        "options_hi": ["एनवॉय", "HTTP", "FTP", "SMTP"],
        "answer_en": "Envoy",
        "answer_hi": "एनवॉय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the time complexity of Edmonds-Karp algorithm?",
        "question_hi": "एडमंड्स-कार्प एल्गोरिदम की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(VE²)", "O(V²)", "O(V log V)", "O(V)"],
        "options_hi": ["O(VE²)", "O(V²)", "O(V log V)", "O(V)"],
        "answer_en": "O(VE²)",
        "answer_hi": "O(VE²)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which language is used for Apache Beam?",
        "question_hi": "Apache Beam के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["Java", "Python", "Go", "All of these"],
        "options_hi": ["जावा", "पायथन", "गो", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What does CAP theorem state?",
        "question_hi": "CAP थ्योरम क्या बताती है?",
        "options_en": ["Consistency, Availability, Partition tolerance", "Consistency, Availability, Partition tolerance", "Consistency, Availability, Partition tolerance", "Consistency, Availability, Partition tolerance"],
        "options_hi": ["कंसिस्टेंसी, अवेलेबिलिटी, पार्टीशन टॉलरेंस", "कंसिस्टेंसी, अवेलेबिलिटी, पार्टीशन टॉलरेंस", "कंसिस्टेंसी, अवेलेबिलिटी, पार्टीशन टॉलरेंस", "कंसिस्टेंसी, अवेलेबिलिटी, पार्टीशन टॉलरेंस"],
        "answer_en": "Consistency, Availability, Partition tolerance",
        "answer_hi": "कंसिस्टेंसी, अवेलेबिलिटी, पार्टीशन टॉलरेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which algorithm is used for association rule mining?",
        "question_hi": "एसोसिएशन रूल माइनिंग के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["Apriori", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["अप्रायोरी", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "Apriori",
        "answer_hi": "अप्रायोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the main purpose of Apache ZooKeeper?",
        "question_hi": "Apache ZooKeeper का मुख्य उद्देश्य क्या है?",
        "options_en": ["Distributed coordination", "Database management", "File storage", "Web serving"],
        "options_hi": ["डिस्ट्रीब्यूटेड कोऑर्डिनेशन", "डेटाबेस मैनेजमेंट", "फ़ाइल स्टोरेज", "वेब सर्विंग"],
        "answer_en": "Distributed coordination",
        "answer_hi": "डिस्ट्रीब्यूटेड कोऑर्डिनेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which data structure is used in CouchDB?",
        "question_hi": "CouchDB में किस डेटा स्ट्रक्चर का उपयोग किया जाता है?",
        "options_en": ["B-Tree", "LSM Tree", "Hash Table", "Linked List"],
        "options_hi": ["B-ट्री", "LSM ट्री", "हैश टेबल", "लिंक्ड लिस्ट"],
        "answer_en": "B-Tree",
        "answer_hi": "B-ट्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What does SVM stand for?",
        "question_hi": "SVM का पूरा नाम क्या है?",
        "options_en": ["Support Vector Machine", "Support Vector Machine", "Support Vector Machine", "Support Vector Machine"],
        "options_hi": ["सपोर्ट वेक्टर मशीन", "सपोर्ट वेक्टर मशीन", "सपोर्ट वेक्टर मशीन", "सपोर्ट वेक्टर मशीन"],
        "answer_en": "Support Vector Machine",
        "answer_hi": "सपोर्ट वेक्टर मशीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which protocol is used for distributed transactions?",
        "question_hi": "डिस्ट्रीब्यूटेड ट्रांजैक्शन के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["Two-Phase Commit", "HTTP", "FTP", "SMTP"],
        "options_hi": ["टू-फेज कमिट", "HTTP", "FTP", "SMTP"],
        "answer_en": "Two-Phase Commit",
        "answer_hi": "टू-फेज कमिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the time complexity of Kosaraju's algorithm?",
        "question_hi": "कोसाराजू एल्गोरिदम की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(V + E)", "O(V²)", "O(V log V)", "O(V)"],
        "options_hi": ["O(V + E)", "O(V²)", "O(V log V)", "O(V)"],
        "answer_en": "O(V + E)",
        "answer_hi": "O(V + E)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which language is used for Apache Airflow?",
        "question_hi": "Apache Airflow के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["Python", "Java", "Scala", "Ruby"],
        "options_hi": ["पायथन", "जावा", "स्काला", "रूबी"],
        "answer_en": "Python",
        "answer_hi": "पायथन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What does RPC stand for?",
        "question_hi": "RPC का पूरा नाम क्या है?",
        "options_en": ["Remote Procedure Call", "Remote Procedure Call", "Remote Procedure Call", "Remote Procedure Call"],
        "options_hi": ["रिमोट प्रोसीजर कॉल", "रिमोट प्रोसीजर कॉल", "रिमोट प्रोसीजर कॉल", "रिमोट प्रोसीजर कॉल"],
        "answer_en": "Remote Procedure Call",
        "answer_hi": "रिमोट प्रोसीजर कॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which algorithm is used for dimensionality reduction?",
        "question_hi": "डायमेंशनैलिटी रिडक्शन के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["PCA", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["PCA", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "PCA",
        "answer_hi": "PCA",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the default port for Apache Kafka?",
        "question_hi": "Apache Kafka का डिफ़ॉल्ट पोर्ट क्या है?",
        "options_en": ["9092", "3306", "5432", "6379"],
        "options_hi": ["9092", "3306", "5432", "6379"],
        "answer_en": "9092",
        "answer_hi": "9092",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which programming language is used for PyTorch?",
        "question_hi": "PyTorch के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["Python", "C++", "Lua", "All of these"],
        "options_hi": ["पायथन", "C++", "लुआ", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What does BASE stand for in databases?",
        "question_hi": "डेटाबेस में BASE का पूरा नाम क्या है?",
        "options_en": ["Basically Available, Soft state, Eventual consistency", "Basically Available, Soft state, Eventual consistency", "Basically Available, Soft state, Eventual consistency", "Basically Available, Soft state, Eventual consistency"],
        "options_hi": ["बेसिकली अवेलेबल, सॉफ्ट स्टेट, इवेंचुअल कंसिस्टेंसी", "बेसिकली अवेलेबल, सॉफ्ट स्टेट, इवेंचुअल कंसिस्टेंसी", "बेसिकली अवेलेबल, सॉफ्ट स्टेट, इवेंचुअल कंसिस्टेंसी", "बेसिकली अवेलेबल, सॉफ्ट स्टेट, इवेंचुअल कंसिस्टेंसी"],
        "answer_en": "Basically Available, Soft state, Eventual consistency",
        "answer_hi": "बेसिकली अवेलेबल, सॉफ्ट स्टेट, इवेंचुअल कंसिस्टेंसी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which data structure is used in Memcached?",
        "question_hi": "Memcached में किस डेटा स्ट्रक्चर का उपयोग किया जाता है?",
        "options_en": ["LRU Cache", "B-Tree", "Hash Table", "Linked List"],
        "options_hi": ["LRU कैश", "B-ट्री", "हैश टेबल", "लिंक्ड लिस्ट"],
        "answer_en": "LRU Cache",
        "answer_hi": "LRU कैश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the main purpose of Grafana?",
        "question_hi": "Grafana का मुख्य उद्देश्य क्या है?",
        "options_en": ["Data visualization", "Database management", "File storage", "Web serving"],
        "options_hi": ["डेटा विज़ुअलाइजेशन", "डेटाबेस मैनेजमेंट", "फ़ाइल स्टोरेज", "वेब सर्विंग"],
        "answer_en": "Data visualization",
        "answer_hi": "डेटा विज़ुअलाइजेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which algorithm is used for market basket analysis?",
        "question_hi": "मार्केट बास्केट एनालिसिस के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["FP-Growth", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["FP-ग्रोथ", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "FP-Growth",
        "answer_hi": "FP-ग्रोथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What does REST stand for?",
        "question_hi": "REST का पूरा नाम क्या है?",
        "options_en": ["Representational State Transfer", "Representational State Transfer", "Representational State Transfer", "Representational State Transfer"],
        "options_hi": ["रिप्रेजेंटेशनल स्टेट ट्रांसफर", "रिप्रेजेंटेशनल स्टेट ट्रांसफर", "रिप्रेजेंटेशनल स्टेट ट्रांसफर", "रिप्रेजेंटेशनल स्टेट ट्रांसफर"],
        "answer_en": "Representational State Transfer",
        "answer_hi": "रिप्रेजेंटेशनल स्टेट ट्रांसफर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which protocol is used for API gateway?",
        "question_hi": "API गेटवे के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
        "options_en": ["Kong", "HTTP", "FTP", "SMTP"],
        "options_hi": ["कॉन्ग", "HTTP", "FTP", "SMTP"],
        "answer_en": "Kong",
        "answer_hi": "कॉन्ग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the time complexity of Tarjan's algorithm?",
        "question_hi": "टार्जन एल्गोरिदम की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(V + E)", "O(V²)", "O(V log V)", "O(V)"],
        "options_hi": ["O(V + E)", "O(V²)", "O(V log V)", "O(V)"],
        "answer_en": "O(V + E)",
        "answer_hi": "O(V + E)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which language is used for Apache Druid?",
        "question_hi": "Apache Druid के लिए किस भाषा का उपयोग किया जाता है?",
        "options_en": ["Java", "Python", "Scala", "All of these"],
        "options_hi": ["जावा", "पायथन", "स्काला", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What does MapReduce do?",
        "question_hi": "MapReduce क्या करता है?",
        "options_en": ["Distributed data processing", "Database management", "File storage", "Web serving"],
        "options_hi": ["डिस्ट्रीब्यूटेड डेटा प्रोसेसिंग", "डेटाबेस मैनेजमेंट", "फ़ाइल स्टोरेज", "वेब सर्विंग"],
        "answer_en": "Distributed data processing",
        "answer_hi": "डिस्ट्रीब्यूटेड डेटा प्रोसेसिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which algorithm is used for gradient boosting?",
        "question_hi": "ग्रेडिएंट बूस्टिंग के लिए किस एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["XGBoost", "Dijkstra", "Bubble Sort", "Quick Sort"],
        "options_hi": ["XGBoost", "डिज्क्स्ट्रा", "बबल सॉर्ट", "क्विक सॉर्ट"],
        "answer_en": "XGBoost",
        "answer_hi": "XGBoost",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the main purpose of Apache Nifi?",
        "question_hi": "Apache Nifi का मुख्य उद्देश्य क्या है?",
        "options_en": ["Data flow automation", "Database management", "File storage", "Web serving"],
        "options_hi": ["डेटा फ्लो ऑटोमेशन", "डेटाबेस मैनेजमेंट", "फ़ाइल स्टोरेज", "वेब सर्विंग"],
        "answer_en": "Data flow automation",
        "answer_hi": "डेटा फ्लो ऑटोमेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which data structure is used in Apache Kafka for message storage?",
        "question_hi": "Apache Kafka में मैसेज स्टोरेज के लिए किस डेटा स्ट्रक्चर का उपयोग किया जाता है?",
        "options_en": ["Log-structured storage", "B-Tree", "Hash Table", "Linked List"],
        "options_hi": ["लॉग-स्ट्रक्चर्ड स्टोरेज", "B-ट्री", "हैश टेबल", "लिंक्ड लिस्ट"],
        "answer_en": "Log-structured storage",
        "answer_hi": "लॉग-स्ट्रक्चर्ड स्टोरेज",
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