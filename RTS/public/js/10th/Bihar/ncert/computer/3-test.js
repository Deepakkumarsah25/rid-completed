const questions = [
    {
        "num": 1,
        "question_en": "Which part of computer is known as the brain of computer?",
        "question_hi": "कंप्यूटर के किस भाग को कंप्यूटर का दिमाग कहा जाता है?",
        "options_en": ["CPU", "RAM", "Hard Disk", "Motherboard"],
        "options_hi": ["सीपीयू", "रैम", "हार्ड डिस्क", "मदरबोर्ड"],
        "answer_en": "CPU",
        "answer_hi": "सीपीयू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the smallest unit of memory in computer?",
        "question_hi": "कंप्यूटर में मेमोरी की सबसे छोटी इकाई क्या है?",
        "options_en": ["Bit", "Byte", "Nibble", "Word"],
        "options_hi": ["बिट", "बाइट", "निबल", "वर्ड"],
        "answer_en": "Bit",
        "answer_hi": "बिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which programming language is known as the mother of all languages?",
        "question_hi": "किस प्रोग्रामिंग भाषा को सभी भाषाओं की जननी कहा जाता है?",
        "options_en": ["C", "Assembly", "FORTRAN", "COBOL"],
        "options_hi": ["सी", "असेम्बली", "फोरट्रान", "कोबोल"],
        "answer_en": "C",
        "answer_hi": "सी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the file extension of a Word document?",
        "question_hi": "वर्ड डॉक्यूमेंट की फाइल एक्सटेंशन क्या है?",
        "options_en": [".docx", ".txt", ".pdf", ".xlsx"],
        "options_hi": [".docx", ".txt", ".pdf", ".xlsx"],
        "answer_en": ".docx",
        "answer_hi": ".docx",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which operating system was developed by Microsoft?",
        "question_hi": "कौन सा ऑपरेटिंग सिस्टम माइक्रोसॉफ्ट द्वारा विकसित किया गया था?",
        "options_en": ["Windows", "Linux", "macOS", "Android"],
        "options_hi": ["विंडोज", "लिनक्स", "मैकओएस", "एंड्रॉयड"],
        "answer_en": "Windows",
        "answer_hi": "विंडोज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the full form of HTTP?",
        "question_hi": "HTTP का पूर्ण रूप क्या है?",
        "options_en": ["HyperText Transfer Protocol", "Hyper Transfer Text Protocol", "High Text Transfer Protocol", "Hyper Transfer Protocol"],
        "options_hi": ["हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाइपर ट्रांसफर टेक्स्ट प्रोटोकॉल", "हाई टेक्स्ट ट्रांसफर प्रोटोकॉल", "हाइपर ट्रांसफर प्रोटोकॉल"],
        "answer_en": "HyperText Transfer Protocol",
        "answer_hi": "हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which component stores data temporarily?",
        "question_hi": "कौन सा घटक डेटा को अस्थायी रूप से संग्रहीत करता है?",
        "options_en": ["RAM", "ROM", "Hard Disk", "CPU"],
        "options_hi": ["रैम", "रोम", "हार्ड डिस्क", "सीपीयू"],
        "answer_en": "RAM",
        "answer_hi": "रैम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the unit of memory equal to 1024 bytes?",
        "question_hi": "मेमोरी की वह इकाई क्या है जो 1024 बाइट्स के बराबर होती है?",
        "options_en": ["Kilobyte", "Megabyte", "Gigabyte", "Terabyte"],
        "options_hi": ["किलोबाइट", "मेगाबाइट", "गीगाबाइट", "टेराबाइट"],
        "answer_en": "Kilobyte",
        "answer_hi": "किलोबाइट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which programming language is used for web development?",
        "question_hi": "वेब डेवलपमेंट के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["JavaScript", "Python", "C++", "Java"],
        "options_hi": ["जावास्क्रिप्ट", "पायथन", "सी++", "जावा"],
        "answer_en": "JavaScript",
        "answer_hi": "जावास्क्रिप्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the file extension of an Excel file?",
        "question_hi": "एक्सेल फाइल की फाइल एक्सटेंशन क्या है?",
        "options_en": [".xlsx", ".docx", ".pptx", ".pdf"],
        "options_hi": [".xlsx", ".docx", ".pptx", ".pdf"],
        "answer_en": ".xlsx",
        "answer_hi": ".xlsx",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which operating system is open source?",
        "question_hi": "कौन सा ऑपरेटिंग सिस्टम ओपन सोर्स है?",
        "options_en": ["Linux", "Windows", "macOS", "iOS"],
        "options_hi": ["लिनक्स", "विंडोज", "मैकओएस", "आईओएस"],
        "answer_en": "Linux",
        "answer_hi": "लिनक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the full form of URL?",
        "question_hi": "URL का पूर्ण रूप क्या है?",
        "options_en": ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"],
        "options_hi": ["यूनिफ़ॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लोकेटर", "यूनिफ़ॉर्म रिसोर्स लिंक", "यूनिवर्सल रिसोर्स लिंक"],
        "answer_en": "Uniform Resource Locator",
        "answer_hi": "यूनिफ़ॉर्म रिसोर्स लोकेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which device is used to input data into computer?",
        "question_hi": "कंप्यूटर में डेटा इनपुट करने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Keyboard", "Monitor", "Printer", "Speaker"],
        "options_hi": ["कीबोर्ड", "मॉनिटर", "प्रिंटर", "स्पीकर"],
        "answer_en": "Keyboard",
        "answer_hi": "कीबोर्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is 1 GB equal to in MB?",
        "question_hi": "1 GB कितने MB के बराबर होता है?",
        "options_en": ["1024 MB", "1000 MB", "512 MB", "2048 MB"],
        "options_hi": ["1024 MB", "1000 MB", "512 MB", "2048 MB"],
        "answer_en": "1024 MB",
        "answer_hi": "1024 MB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which programming language is used for Android development?",
        "question_hi": "एंड्रॉयड डेवलपमेंट के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["Java", "Python", "C#", "Ruby"],
        "options_hi": ["जावा", "पायथन", "सी#", "रूबी"],
        "answer_en": "Java",
        "answer_hi": "जावा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the file extension of a PowerPoint presentation?",
        "question_hi": "पावरपॉइंट प्रेजेंटेशन की फाइल एक्सटेंशन क्या है?",
        "options_en": [".pptx", ".docx", ".xlsx", ".pdf"],
        "options_hi": [".pptx", ".docx", ".xlsx", ".pdf"],
        "answer_en": ".pptx",
        "answer_hi": ".pptx",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which operating system is developed by Apple?",
        "question_hi": "कौन सा ऑपरेटिंग सिस्टम Apple द्वारा विकसित किया गया है?",
        "options_en": ["macOS", "Windows", "Linux", "Android"],
        "options_hi": ["मैकओएस", "विंडोज", "लिनक्स", "एंड्रॉयड"],
        "answer_en": "macOS",
        "answer_hi": "मैकओएस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the full form of HTML?",
        "question_hi": "HTML का पूर्ण रूप क्या है?",
        "options_en": ["HyperText Markup Language", "HighText Machine Language", "HyperText Machine Language", "HighText Markup Language"],
        "options_hi": ["हाइपरटेक्स्ट मार्कअप लैंग्वेज", "हाईटेक्स्ट मशीन लैंग्वेज", "हाइपरटेक्स्ट मशीन लैंग्वेज", "हाईटेक्स्ट मार्कअप लैंग्वेज"],
        "answer_en": "HyperText Markup Language",
        "answer_hi": "हाइपरटेक्स्ट मार्कअप लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which component is called permanent memory?",
        "question_hi": "किस घटक को स्थायी मेमोरी कहा जाता है?",
        "options_en": ["Hard Disk", "RAM", "Cache", "Register"],
        "options_hi": ["हार्ड डिस्क", "रैम", "कैश", "रजिस्टर"],
        "answer_en": "Hard Disk",
        "answer_hi": "हार्ड डिस्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the unit of processing speed?",
        "question_hi": "प्रोसेसिंग स्पीड की इकाई क्या है?",
        "options_en": ["Hertz", "Bytes", "Bits", "Pixels"],
        "options_hi": ["हर्ट्ज", "बाइट्स", "बिट्स", "पिक्सेल"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which programming language is used for artificial intelligence?",
        "question_hi": "आर्टिफिशियल इंटेलिजेंस के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["Python", "Java", "C++", "PHP"],
        "options_hi": ["पायथन", "जावा", "सी++", "पीएचपी"],
        "answer_en": "Python",
        "answer_hi": "पायथन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the file extension of a PDF file?",
        "question_hi": "PDF फाइल की फाइल एक्सटेंशन क्या है?",
        "options_en": [".pdf", ".doc", ".txt", ".jpg"],
        "options_hi": [".pdf", ".doc", ".txt", ".jpg"],
        "answer_en": ".pdf",
        "answer_hi": ".pdf",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which operating system is used in smartphones?",
        "question_hi": "स्मार्टफोन में किस ऑपरेटिंग सिस्टम का उपयोग किया जाता है?",
        "options_en": ["Android", "Windows", "Linux", "macOS"],
        "options_hi": ["एंड्रॉयड", "विंडोज", "लिनक्स", "मैकओएस"],
        "answer_en": "Android",
        "answer_hi": "एंड्रॉयड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the full form of CPU?",
        "question_hi": "CPU का पूर्ण रूप क्या है?",
        "options_en": ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
        "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंप्यूटर प्रोग्राम यूनिट"],
        "answer_en": "Central Processing Unit",
        "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which device displays output from computer?",
        "question_hi": "कौन सा डिवाइस कंप्यूटर से आउटपुट प्रदर्शित करता है?",
        "options_en": ["Monitor", "Keyboard", "Mouse", "Scanner"],
        "options_hi": ["मॉनिटर", "कीबोर्ड", "माउस", "स्कैनर"],
        "answer_en": "Monitor",
        "answer_hi": "मॉनिटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is 1 TB equal to in GB?",
        "question_hi": "1 TB कितने GB के बराबर होता है?",
        "options_en": ["1024 GB", "1000 GB", "512 GB", "2048 GB"],
        "options_hi": ["1024 GB", "1000 GB", "512 GB", "2048 GB"],
        "answer_en": "1024 GB",
        "answer_hi": "1024 GB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which programming language is used for iOS development?",
        "question_hi": "iOS डेवलपमेंट के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["Swift", "Java", "Kotlin", "C#"],
        "options_hi": ["स्विफ्ट", "जावा", "कोटलिन", "सी#"],
        "answer_en": "Swift",
        "answer_hi": "स्विफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the file extension of a compressed file?",
        "question_hi": "कम्प्रेस्ड फाइल की फाइल एक्सटेंशन क्या है?",
        "options_en": [".zip", ".exe", ".mp3", ".mp4"],
        "options_hi": [".zip", ".exe", ".mp3", ".mp4"],
        "answer_en": ".zip",
        "answer_hi": ".zip",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which operating system uses command line interface?",
        "question_hi": "कौन सा ऑपरेटिंग सिस्टम कमांड लाइन इंटरफेस का उपयोग करता है?",
        "options_en": ["DOS", "Windows", "macOS", "Android"],
        "options_hi": ["डॉस", "विंडोज", "मैकओएस", "एंड्रॉयड"],
        "answer_en": "DOS",
        "answer_hi": "डॉस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the full form of RAM?",
        "question_hi": "RAM का पूर्ण रूप क्या है?",
        "options_en": ["Random Access Memory", "Read Access Memory", "Random Available Memory", "Read Available Memory"],
        "options_hi": ["रैंडम एक्सेस मेमोरी", "रीड एक्सेस मेमोरी", "रैंडम अवेलेबल मेमोरी", "रीड अवेलेबल मेमोरी"],
        "answer_en": "Random Access Memory",
        "answer_hi": "रैंडम एक्सेस मेमोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which device is used to print documents?",
        "question_hi": "दस्तावेज़ प्रिंट करने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Printer", "Scanner", "Monitor", "Keyboard"],
        "options_hi": ["प्रिंटर", "स्कैनर", "मॉनिटर", "कीबोर्ड"],
        "answer_en": "Printer",
        "answer_hi": "प्रिंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the unit of network speed?",
        "question_hi": "नेटवर्क स्पीड की इकाई क्या है?",
        "options_en": ["Mbps", "Hz", "GB", "Pixel"],
        "options_hi": ["एमबीपीएस", "हर्ट्ज", "जीबी", "पिक्सेल"],
        "answer_en": "Mbps",
        "answer_hi": "एमबीपीएस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which programming language is used for database management?",
        "question_hi": "डेटाबेस प्रबंधन के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["SQL", "Python", "Java", "C++"],
        "options_hi": ["एसक्यूएल", "पायथन", "जावा", "सी++"],
        "answer_en": "SQL",
        "answer_hi": "एसक्यूएल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the file extension of an image file?",
        "question_hi": "इमेज फाइल की फाइल एक्सटेंशन क्या है?",
        "options_en": [".jpg", ".docx", ".mp3", ".exe"],
        "options_hi": [".jpg", ".docx", ".mp3", ".exe"],
        "answer_en": ".jpg",
        "answer_hi": ".jpg",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which operating system is developed by Google?",
        "question_hi": "कौन सा ऑपरेटिंग सिस्टम Google द्वारा विकसित किया गया है?",
        "options_en": ["Android", "Windows", "Linux", "iOS"],
        "options_hi": ["एंड्रॉयड", "विंडोज", "लिनक्स", "आईओएस"],
        "answer_en": "Android",
        "answer_hi": "एंड्रॉयड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the full form of ROM?",
        "question_hi": "ROM का पूर्ण रूप क्या है?",
        "options_en": ["Read Only Memory", "Random Only Memory", "Read Output Memory", "Random Output Memory"],
        "options_hi": ["रीड ओनली मेमोरी", "रैंडम ओनली मेमोरी", "रीड आउटपुट मेमोरी", "रैंडम आउटपुट मेमोरी"],
        "answer_en": "Read Only Memory",
        "answer_hi": "रीड ओनली मेमोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which device is used to connect to internet?",
        "question_hi": "इंटरनेट से कनेक्ट होने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Modem", "Printer", "Scanner", "Monitor"],
        "options_hi": ["मॉडेम", "प्रिंटर", "स्कैनर", "मॉनिटर"],
        "answer_en": "Modem",
        "answer_hi": "मॉडेम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the unit of screen resolution?",
        "question_hi": "स्क्रीन रेज़ोल्यूशन की इकाई क्या है?",
        "options_en": ["Pixel", "Hertz", "Byte", "Bit"],
        "options_hi": ["पिक्सेल", "हर्ट्ज", "बाइट", "बिट"],
        "answer_en": "Pixel",
        "answer_hi": "पिक्सेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which programming language is used for game development?",
        "question_hi": "गेम डेवलपमेंट के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["C++", "Python", "Java", "PHP"],
        "options_hi": ["सी++", "पायथन", "जावा", "पीएचपी"],
        "answer_en": "C++",
        "answer_hi": "सी++",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the file extension of a video file?",
        "question_hi": "वीडियो फाइल की फाइल एक्सटेंशन क्या है?",
        "options_en": [".mp4", ".jpg", ".docx", ".pdf"],
        "options_hi": [".mp4", ".jpg", ".docx", ".pdf"],
        "answer_en": ".mp4",
        "answer_hi": ".mp4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which operating system is used in Apple computers?",
        "question_hi": "Apple कंप्यूटरों में किस ऑपरेटिंग सिस्टम का उपयोग किया जाता है?",
        "options_en": ["macOS", "Windows", "Linux", "Android"],
        "options_hi": ["मैकओएस", "विंडोज", "लिनक्स", "एंड्रॉयड"],
        "answer_en": "macOS",
        "answer_hi": "मैकओएस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the full form of BIOS?",
        "question_hi": "BIOS का पूर्ण रूप क्या है?",
        "options_en": ["Basic Input Output System", "Binary Input Output System", "Basic Input Output Software", "Binary Input Output Software"],
        "options_hi": ["बेसिक इनपुट आउटपुट सिस्टम", "बाइनरी इनपुट आउटपुट सिस्टम", "बेसिक इनपुट आउटपुट सॉफ्टवेयर", "बाइनरी इनपुट आउटपुट सॉफ्टवेयर"],
        "answer_en": "Basic Input Output System",
        "answer_hi": "बेसिक इनपुट आउटपुट सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which device is used to scan documents?",
        "question_hi": "दस्तावेज़ स्कैन करने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Scanner", "Printer", "Keyboard", "Mouse"],
        "options_hi": ["स्कैनर", "प्रिंटर", "कीबोर्ड", "माउस"],
        "answer_en": "Scanner",
        "answer_hi": "स्कैनर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the unit of data transfer rate?",
        "question_hi": "डेटा ट्रांसफर रेट की इकाई क्या है?",
        "options_en": ["bps", "Hz", "Pixel", "Byte"],
        "options_hi": ["बीपीएस", "हर्ट्ज", "पिक्सेल", "बाइट"],
        "answer_en": "bps",
        "answer_hi": "बीपीएस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which programming language is used for web servers?",
        "question_hi": "वेब सर्वर के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["PHP", "Python", "Java", "C++"],
        "options_hi": ["पीएचपी", "पायथन", "जावा", "सी++"],
        "answer_en": "PHP",
        "answer_hi": "पीएचपी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the file extension of an audio file?",
        "question_hi": "ऑडियो फाइल की फाइल एक्सटेंशन क्या है?",
        "options_en": [".mp3", ".jpg", ".docx", ".pdf"],
        "options_hi": [".mp3", ".jpg", ".docx", ".pdf"],
        "answer_en": ".mp3",
        "answer_hi": ".mp3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which operating system is used in servers?",
        "question_hi": "सर्वर में किस ऑपरेटिंग सिस्टम का उपयोग किया जाता है?",
        "options_en": ["Linux", "Windows", "macOS", "Android"],
        "options_hi": ["लिनक्स", "विंडोज", "मैकओएस", "एंड्रॉयड"],
        "answer_en": "Linux",
        "answer_hi": "लिनक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the full form of GUI?",
        "question_hi": "GUI का पूर्ण रूप क्या है?",
        "options_en": ["Graphical User Interface", "Graphical Unit Interface", "General User Interface", "General Unit Interface"],
        "options_hi": ["ग्राफिकल यूज़र इंटरफेस", "ग्राफिकल यूनिट इंटरफेस", "जनरल यूज़र इंटरफेस", "जनरल यूनिट इंटरफेस"],
        "answer_en": "Graphical User Interface",
        "answer_hi": "ग्राफिकल यूज़र इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which device is used to control cursor on screen?",
        "question_hi": "स्क्रीन पर कर्सर को नियंत्रित करने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Mouse", "Keyboard", "Scanner", "Printer"],
        "options_hi": ["माउस", "कीबोर्ड", "स्कैनर", "प्रिंटर"],
        "answer_en": "Mouse",
        "answer_hi": "माउस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the unit of clock speed?",
        "question_hi": "क्लॉक स्पीड की इकाई क्या है?",
        "options_en": ["Gigahertz", "Megabyte", "Mbps", "Pixel"],
        "options_hi": ["गीगाहर्ट्ज", "मेगाबाइट", "एमबीपीएस", "पिक्सेल"],
        "answer_en": "Gigahertz",
        "answer_hi": "गीगाहर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which programming language is used for data science?",
        "question_hi": "डेटा साइंस के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["Python", "Java", "C++", "PHP"],
        "options_hi": ["पायथन", "जावा", "सी++", "पीएचपी"],
        "answer_en": "Python",
        "answer_hi": "पायथन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the file extension of an executable file?",
        "question_hi": "एक्ज़ीक्यूटेबल फाइल की फाइल एक्सटेंशन क्या है?",
        "options_en": [".exe", ".docx", ".jpg", ".mp3"],
        "options_hi": [".exe", ".docx", ".jpg", ".mp3"],
        "answer_en": ".exe",
        "answer_hi": ".exe",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which operating system is used in smart watches?",
        "question_hi": "स्मार्ट वॉच में किस ऑपरेटिंग सिस्टम का उपयोग किया जाता है?",
        "options_en": ["Wear OS", "Windows", "Linux", "Android"],
        "options_hi": ["वियर ओएस", "विंडोज", "लिनक्स", "एंड्रॉयड"],
        "answer_en": "Wear OS",
        "answer_hi": "वियर ओएस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the full form of USB?",
        "question_hi": "USB का पूर्ण रूप क्या है?",
        "options_en": ["Universal Serial Bus", "Universal System Bus", "United Serial Bus", "United System Bus"],
        "options_hi": ["यूनिवर्सल सीरियल बस", "यूनिवर्सल सिस्टम बस", "यूनाइटेड सीरियल बस", "यूनाइटेड सिस्टम बस"],
        "answer_en": "Universal Serial Bus",
        "answer_hi": "यूनिवर्सल सीरियल बस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which device is used for voice input?",
        "question_hi": "वॉइस इनपुट के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Microphone", "Speaker", "Headphone", "Webcam"],
        "options_hi": ["माइक्रोफोन", "स्पीकर", "हेडफोन", "वेबकैम"],
        "answer_en": "Microphone",
        "answer_hi": "माइक्रोफोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the unit of storage capacity?",
        "question_hi": "स्टोरेज क्षमता की इकाई क्या है?",
        "options_en": ["Terabyte", "Hertz", "Mbps", "Pixel"],
        "options_hi": ["टेराबाइट", "हर्ट्ज", "एमबीपीएस", "पिक्सेल"],
        "answer_en": "Terabyte",
        "answer_hi": "टेराबाइट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which programming language is used for mobile apps?",
        "question_hi": "मोबाइल ऐप्स के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["Java", "Python", "C++", "Ruby"],
        "options_hi": ["जावा", "पायथन", "सी++", "रूबी"],
        "answer_en": "Java",
        "answer_hi": "जावा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the file extension of a text file?",
        "question_hi": "टेक्स्ट फाइल की फाइल एक्सटेंशन क्या है?",
        "options_en": [".txt", ".docx", ".pdf", ".jpg"],
        "options_hi": [".txt", ".docx", ".pdf", ".jpg"],
        "answer_en": ".txt",
        "answer_hi": ".txt",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which operating system uses tiles interface?",
        "question_hi": "कौन सा ऑपरेटिंग सिस्टम टाइल्स इंटरफेस का उपयोग करता है?",
        "options_en": ["Windows 8", "Windows 10", "Linux", "macOS"],
        "options_hi": ["विंडोज 8", "विंडोज 10", "लिनक्स", "मैकओएस"],
        "answer_en": "Windows 8",
        "answer_hi": "विंडोज 8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the full form of LAN?",
        "question_hi": "LAN का पूर्ण रूप क्या है?",
        "options_en": ["Local Area Network", "Large Area Network", "Local Access Network", "Large Access Network"],
        "options_hi": ["लोकल एरिया नेटवर्क", "लार्ज एरिया नेटवर्क", "लोकल एक्सेस नेटवर्क", "लार्ज एक्सेस नेटवर्क"],
        "answer_en": "Local Area Network",
        "answer_hi": "लोकल एरिया नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which device is used for video calling?",
        "question_hi": "वीडियो कॉलिंग के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Webcam", "Microphone", "Speaker", "Printer"],
        "options_hi": ["वेबकैम", "माइक्रोफोन", "स्पीकर", "प्रिंटर"],
        "answer_en": "Webcam",
        "answer_hi": "वेबकैम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the unit of internet data usage?",
        "question_hi": "इंटरनेट डेटा यूज़ेज की इकाई क्या है?",
        "options_en": ["Gigabyte", "Hertz", "Mbps", "Pixel"],
        "options_hi": ["गीगाबाइट", "हर्ट्ज", "एमबीपीएस", "पिक्सेल"],
        "answer_en": "Gigabyte",
        "answer_hi": "गीगाबाइट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which programming language is used for system programming?",
        "question_hi": "सिस्टम प्रोग्रामिंग के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["C", "Python", "Java", "JavaScript"],
        "options_hi": ["सी", "पायथन", "जावा", "जावास्क्रिप्ट"],
        "answer_en": "C",
        "answer_hi": "सी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the file extension of a spreadsheet file?",
        "question_hi": "स्प्रेडशीट फाइल की फाइल एक्सटेंशन क्या है?",
        "options_en": [".xls", ".doc", ".ppt", ".pdf"],
        "options_hi": [".xls", ".doc", ".ppt", ".pdf"],
        "answer_en": ".xls",
        "answer_hi": ".xls",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which operating system is used in gaming consoles?",
        "question_hi": "गेमिंग कंसोल में किस ऑपरेटिंग सिस्टम का उपयोग किया जाता है?",
        "options_en": ["Custom OS", "Windows", "Linux", "Android"],
        "options_hi": ["कस्टम ओएस", "विंडोज", "लिनक्स", "एंड्रॉयड"],
        "answer_en": "Custom OS",
        "answer_hi": "कस्टम ओएस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the full form of Wi-Fi?",
        "question_hi": "Wi-Fi का पूर्ण रूप क्या है?",
        "options_en": ["Wireless Fidelity", "Wireless Frequency", "Wired Fidelity", "Wired Frequency"],
        "options_hi": ["वायरलेस फिडेलिटी", "वायरलेस फ्रीक्वेंसी", "वायर्ड फिडेलिटी", "वायर्ड फ्रीक्वेंसी"],
        "answer_en": "Wireless Fidelity",
        "answer_hi": "वायरलेस फिडेलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which device is used for audio output?",
        "question_hi": "ऑडियो आउटपुट के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Speaker", "Microphone", "Webcam", "Scanner"],
        "options_hi": ["स्पीकर", "माइक्रोफोन", "वेबकैम", "स्कैनर"],
        "answer_en": "Speaker",
        "answer_hi": "स्पीकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the unit of cache memory?",
        "question_hi": "कैश मेमोरी की इकाई क्या है?",
        "options_en": ["Kilobyte", "Terabyte", "Gigahertz", "Mbps"],
        "options_hi": ["किलोबाइट", "टेराबाइट", "गीगाहर्ट्ज", "एमबीपीएस"],
        "answer_en": "Kilobyte",
        "answer_hi": "किलोबाइट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which programming language is used for machine learning?",
        "question_hi": "मशीन लर्निंग के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["Python", "Java", "C++", "PHP"],
        "options_hi": ["पायथन", "जावा", "सी++", "पीएचपी"],
        "answer_en": "Python",
        "answer_hi": "पायथन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the file extension of a presentation file?",
        "question_hi": "प्रेजेंटेशन फाइल की फाइल एक्सटेंशन क्या है?",
        "options_en": [".ppt", ".doc", ".xls", ".pdf"],
        "options_hi": [".ppt", ".doc", ".xls", ".pdf"],
        "answer_en": ".ppt",
        "answer_hi": ".ppt",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which operating system is used in ATMs?",
        "question_hi": "एटीएम में किस ऑपरेटिंग सिस्टम का उपयोग किया जाता है?",
        "options_en": ["Windows XP", "Linux", "macOS", "Android"],
        "options_hi": ["विंडोज एक्सपी", "लिनक्स", "मैकओएस", "एंड्रॉयड"],
        "answer_en": "Windows XP",
        "answer_hi": "विंडोज एक्सपी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the full form of VPN?",
        "question_hi": "VPN का पूर्ण रूप क्या है?",
        "options_en": ["Virtual Private Network", "Virtual Public Network", "Verified Private Network", "Verified Public Network"],
        "options_hi": ["वर्चुअल प्राइवेट नेटवर्क", "वर्चुअल पब्लिक नेटवर्क", "वेरिफाइड प्राइवेट नेटवर्क", "वेरिफाइड पब्लिक नेटवर्क"],
        "answer_en": "Virtual Private Network",
        "answer_hi": "वर्चुअल प्राइवेट नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which device is used to read barcodes?",
        "question_hi": "बारकोड पढ़ने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Barcode Scanner", "Printer", "Keyboard", "Mouse"],
        "options_hi": ["बारकोड स्कैनर", "प्रिंटर", "कीबोर्ड", "माउस"],
        "answer_en": "Barcode Scanner",
        "answer_hi": "बारकोड स्कैनर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the unit of bandwidth?",
        "question_hi": "बैंडविड्थ की इकाई क्या है?",
        "options_en": ["Mbps", "Gigahertz", "Terabyte", "Pixel"],
        "options_hi": ["एमबीपीएस", "गीगाहर्ट्ज", "टेराबाइट", "पिक्सेल"],
        "answer_en": "Mbps",
        "answer_hi": "एमबीपीएस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which programming language is used for robotics?",
        "question_hi": "रोबोटिक्स के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["C++", "Python", "Java", "JavaScript"],
        "options_hi": ["सी++", "पायथन", "जावा", "जावास्क्रिप्ट"],
        "answer_en": "C++",
        "answer_hi": "सी++",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the file extension of a database file?",
        "question_hi": "डेटाबेस फाइल की फाइल एक्सटेंशन क्या है?",
        "options_en": [".db", ".doc", ".pdf", ".jpg"],
        "options_hi": [".db", ".doc", ".pdf", ".jpg"],
        "answer_en": ".db",
        "answer_hi": ".db",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which operating system is used in embedded systems?",
        "question_hi": "एम्बेडेड सिस्टम में किस ऑपरेटिंग सिस्टम का उपयोग किया जाता है?",
        "options_en": ["RTOS", "Windows", "macOS", "Android"],
        "options_hi": ["आरटीओएस", "विंडोज", "मैकओएस", "एंड्रॉयड"],
        "answer_en": "RTOS",
        "answer_hi": "आरटीओएस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the full form of SSD?",
        "question_hi": "SSD का पूर्ण रूप क्या है?",
        "options_en": ["Solid State Drive", "Solid Storage Drive", "State Storage Drive", "State Solid Drive"],
        "options_hi": ["सॉलिड स्टेट ड्राइव", "सॉलिड स्टोरेज ड्राइव", "स्टेट स्टोरेज ड्राइव", "स्टेट सॉलिड ड्राइव"],
        "answer_en": "Solid State Drive",
        "answer_hi": "सॉलिड स्टेट ड्राइव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which device is used for touch input?",
        "question_hi": "टच इनपुट के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Touchscreen", "Keyboard", "Mouse", "Scanner"],
        "options_hi": ["टचस्क्रीन", "कीबोर्ड", "माउस", "स्कैनर"],
        "answer_en": "Touchscreen",
        "answer_hi": "टचस्क्रीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the unit of refresh rate?",
        "question_hi": "रिफ्रेश रेट की इकाई क्या है?",
        "options_en": ["Hertz", "Mbps", "Gigabyte", "Pixel"],
        "options_hi": ["हर्ट्ज", "एमबीपीएस", "गीगाबाइट", "पिक्सेल"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which programming language is used for blockchain?",
        "question_hi": "ब्लॉकचेन के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["Solidity", "Python", "Java", "C++"],
        "options_hi": ["सोलिडिटी", "पायथन", "जावा", "सी++"],
        "answer_en": "Solidity",
        "answer_hi": "सोलिडिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the file extension of a vector image?",
        "question_hi": "वेक्टर इमेज की फाइल एक्सटेंशन क्या है?",
        "options_en": [".svg", ".jpg", ".png", ".gif"],
        "options_hi": [".svg", ".jpg", ".png", ".gif"],
        "answer_en": ".svg",
        "answer_hi": ".svg",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which operating system is used in supercomputers?",
        "question_hi": "सुपरकंप्यूटर में किस ऑपरेटिंग सिस्टम का उपयोग किया जाता है?",
        "options_en": ["Linux", "Windows", "macOS", "Android"],
        "options_hi": ["लिनक्स", "विंडोज", "मैकओएस", "एंड्रॉयड"],
        "answer_en": "Linux",
        "answer_hi": "लिनक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the full form of HDD?",
        "question_hi": "HDD का पूर्ण रूप क्या है?",
        "options_en": ["Hard Disk Drive", "Hard Drive Disk", "High Density Disk", "High Drive Disk"],
        "options_hi": ["हार्ड डिस्क ड्राइव", "हार्ड ड्राइव डिस्क", "हाई डेंसिटी डिस्क", "हाई ड्राइव डिस्क"],
        "answer_en": "Hard Disk Drive",
        "answer_hi": "हार्ड डिस्क ड्राइव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which device is used for wireless connectivity?",
        "question_hi": "वायरलेस कनेक्टिविटी के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Wi-Fi Adapter", "Ethernet Cable", "USB Cable", "HDMI Cable"],
        "options_hi": ["वाई-फाई एडाप्टर", "ईथरनेट केबल", "यूएसबी केबल", "एचडीएमआई केबल"],
        "answer_en": "Wi-Fi Adapter",
        "answer_hi": "वाई-फाई एडाप्टर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the unit of graphic memory?",
        "question_hi": "ग्राफिक मेमोरी की इकाई क्या है?",
        "options_en": ["VRAM", "RAM", "Cache", "ROM"],
        "options_hi": ["वीरैम", "रैम", "कैश", "रोम"],
        "answer_en": "VRAM",
        "answer_hi": "वीरैम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which programming language is used for web scraping?",
        "question_hi": "वेब स्क्रैपिंग के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["Python", "Java", "C++", "PHP"],
        "options_hi": ["पायथन", "जावा", "सी++", "पीएचपी"],
        "answer_en": "Python",
        "answer_hi": "पायथन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the file extension of a Python file?",
        "question_hi": "पायथन फाइल की फाइल एक्सटेंशन क्या है?",
        "options_en": [".py", ".java", ".cpp", ".php"],
        "options_hi": [".py", ".java", ".cpp", ".php"],
        "answer_en": ".py",
        "answer_hi": ".py",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which operating system is used in routers?",
        "question_hi": "राउटर में किस ऑपरेटिंग सिस्टम का उपयोग किया जाता है?",
        "options_en": ["Router OS", "Windows", "Linux", "Android"],
        "options_hi": ["राउटर ओएस", "विंडोज", "लिनक्स", "एंड्रॉयड"],
        "answer_en": "Router OS",
        "answer_hi": "राउटर ओएस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the full form of DNS?",
        "question_hi": "DNS का पूर्ण रूप क्या है?",
        "options_en": ["Domain Name System", "Domain Network System", "Digital Name System", "Digital Network System"],
        "options_hi": ["डोमेन नेम सिस्टम", "डोमेन नेटवर्क सिस्टम", "डिजिटल नेम सिस्टम", "डिजिटल नेटवर्क सिस्टम"],
        "answer_en": "Domain Name System",
        "answer_hi": "डोमेन नेम सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which device is used for biometric authentication?",
        "question_hi": "बायोमेट्रिक प्रमाणीकरण के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Fingerprint Scanner", "Keyboard", "Mouse", "Webcam"],
        "options_hi": ["फिंगरप्रिंट स्कैनर", "कीबोर्ड", "माउस", "वेबकैम"],
        "answer_en": "Fingerprint Scanner",
        "answer_hi": "फिंगरप्रिंट स्कैनर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the unit of processor cache?",
        "question_hi": "प्रोसेसर कैश की इकाई क्या है?",
        "options_en": ["MB", "GB", "TB", "KB"],
        "options_hi": ["एमबी", "जीबी", "टीबी", "केबी"],
        "answer_en": "MB",
        "answer_hi": "एमबी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which programming language is used for automation?",
        "question_hi": "ऑटोमेशन के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["Python", "Java", "C++", "JavaScript"],
        "options_hi": ["पायथन", "जावा", "सी++", "जावास्क्रिप्ट"],
        "answer_en": "Python",
        "answer_hi": "पायथन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the file extension of a Java file?",
        "question_hi": "जावा फाइल की फाइल एक्सटेंशन क्या है?",
        "options_en": [".java", ".py", ".cpp", ".js"],
        "options_hi": [".java", ".py", ".cpp", ".js"],
        "answer_en": ".java",
        "answer_hi": ".java",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which operating system is used in IoT devices?",
        "question_hi": "IoT डिवाइसों में किस ऑपरेटिंग सिस्टम का उपयोग किया जाता है?",
        "options_en": ["TinyOS", "Windows", "macOS", "Android"],
        "options_hi": ["टिनीओएस", "विंडोज", "मैकओएस", "एंड्रॉयड"],
        "answer_en": "TinyOS",
        "answer_hi": "टिनीओएस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the full form of ISP?",
        "question_hi": "ISP का पूर्ण रूप क्या है?",
        "options_en": ["Internet Service Provider", "Internet System Provider", "International Service Provider", "International System Provider"],
        "options_hi": ["इंटरनेट सर्विस प्रोवाइडर", "इंटरनेट सिस्टम प्रोवाइडर", "इंटरनेशनल सर्विस प्रोवाइडर", "इंटरनेशनल सिस्टम प्रोवाइडर"],
        "answer_en": "Internet Service Provider",
        "answer_hi": "इंटरनेट सर्विस प्रोवाइडर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which device is used for virtual reality?",
        "question_hi": "वर्चुअल रियलिटी के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["VR Headset", "Webcam", "Speaker", "Printer"],
        "options_hi": ["वीआर हेडसेट", "वेबकैम", "स्पीकर", "प्रिंटर"],
        "answer_en": "VR Headset",
        "answer_hi": "वीआर हेडसेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the unit of network latency?",
        "question_hi": "नेटवर्क लेटेंसी की इकाई क्या है?",
        "options_en": ["Milliseconds", "Mbps", "Gigahertz", "Bytes"],
        "options_hi": ["मिलीसेकंड", "एमबीपीएस", "गीगाहर्ट्ज", "बाइट्स"],
        "answer_en": "Milliseconds",
        "answer_hi": "मिलीसेकंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which programming language is used for frontend development?",
        "question_hi": "फ्रंटएंड डेवलपमेंट के लिए किस प्रोग्रामिंग भाषा का उपयोग किया जाता है?",
        "options_en": ["JavaScript", "Python", "Java", "C++"],
        "options_hi": ["जावास्क्रिप्ट", "पायथन", "जावा", "सी++"],
        "answer_en": "JavaScript",
        "answer_hi": "जावास्क्रिप्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the file extension of a C++ file?",
        "question_hi": "सी++ फाइल की फाइल एक्सटेंशन क्या है?",
        "options_en": [".cpp", ".java", ".py", ".js"],
        "options_hi": [".cpp", ".java", ".py", ".js"],
        "answer_en": ".cpp",
        "answer_hi": ".cpp",
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