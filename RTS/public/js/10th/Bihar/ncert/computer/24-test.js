const questions=[
    {
        "num": 1,
        "question_en": "Which component is known as the heart of a computer?",
        "question_hi": "कंप्यूटर के किस घटक को उसका दिल कहा जाता है?",
        "options_en": ["CPU", "Motherboard", "Power Supply", "Hard Drive"],
        "options_hi": ["CPU", "मदरबोर्ड", "पावर सप्लाई", "हार्ड ड्राइव"],
        "answer_en": "Motherboard",
        "answer_hi": "मदरबोर्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What type of device is a printer?",
        "question_hi": "प्रिंटर किस प्रकार का डिवाइस है?",
        "options_en": ["Output", "Input", "Processing", "Storage"],
        "options_hi": ["आउटपुट", "इनपुट", "प्रोसेसिंग", "स्टोरेज"],
        "answer_en": "Output",
        "answer_hi": "आउटपुट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which company created the UNIX operating system?",
        "question_hi": "UNIX ऑपरेटिंग सिस्टम किस कंपनी ने बनाया?",
        "options_en": ["Bell Labs", "Microsoft", "IBM", "Apple"],
        "options_hi": ["बेल लैब्स", "माइक्रोसॉफ्ट", "आईबीएम", "एप्पल"],
        "answer_en": "Bell Labs",
        "answer_hi": "बेल लैब्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the full form of ALU?",
        "question_hi": "ALU का पूरा नाम क्या है?",
        "options_en": ["Arithmetic Logic Unit", "Arithmetic Language Unit", "Algorithm Logic Unit", "Algorithm Language Unit"],
        "options_hi": ["अरिथमेटिक लॉजिक यूनिट", "अरिथमेटिक लैंग्वेज यूनिट", "अल्गोरिदम लॉजिक यूनिट", "अल्गोरिदम लैंग्वेज यूनिट"],
        "answer_en": "Arithmetic Logic Unit",
        "answer_hi": "अरिथमेटिक लॉजिक यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which device produces sound output from computer?",
        "question_hi": "कौन सा डिवाइस कंप्यूटर से साउंड आउटपुट पैदा करता है?",
        "options_en": ["Speaker", "Microphone", "Headphone", "Sound Card"],
        "options_hi": ["स्पीकर", "माइक्रोफोन", "हेडफोन", "साउंड कार्ड"],
        "answer_en": "Speaker",
        "answer_hi": "स्पीकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the permanent memory of computer called?",
        "question_hi": "कंप्यूटर की स्थायी मेमोरी को क्या कहते हैं?",
        "options_en": ["ROM", "RAM", "Cache", "Register"],
        "options_hi": ["ROM", "RAM", "कैश", "रजिस्टर"],
        "answer_en": "ROM",
        "answer_hi": "ROM",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which key is used to indent text in documents?",
        "question_hi": "डॉक्यूमेंट में टेक्स्ट इंडेंट करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Tab", "Space", "Enter", "Shift"],
        "options_hi": ["टैब", "स्पेस", "एंटर", "शिफ्ट"],
        "answer_en": "Tab",
        "answer_hi": "टैब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does ISP mean?",
        "question_hi": "ISP का क्या अर्थ है?",
        "options_en": ["Internet Service Provider", "Internet System Provider", "International Service Provider", "International System Provider"],
        "options_hi": ["इंटरनेट सर्विस प्रोवाइडर", "इंटरनेट सिस्टम प्रोवाइडर", "इंटरनेशनल सर्विस प्रोवाइडर", "इंटरनेशनल सिस्टम प्रोवाइडर"],
        "answer_en": "Internet Service Provider",
        "answer_hi": "इंटरनेट सर्विस प्रोवाइडर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which company created the first graphical web browser?",
        "question_hi": "पहला ग्राफिकल वेब ब्राउज़र किस कंपनी ने बनाया?",
        "options_en": ["Netscape", "Microsoft", "CERN", "Google"],
        "options_hi": ["नेटस्केप", "माइक्रोसॉफ्ट", "सर्न", "गूगल"],
        "answer_en": "Netscape",
        "answer_hi": "नेटस्केप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the extension of Microsoft PowerPoint file?",
        "question_hi": "माइक्रोसॉफ्ट पावरपॉइंट फाइल का एक्सटेंशन क्या है?",
        "options_en": [".pptx", ".ppt", ".pps", ".pptm"],
        "options_hi": [".pptx", ".ppt", ".pps", ".pptm"],
        "answer_en": ".pptx",
        "answer_hi": ".pptx",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which key is used to type symbols above numbers?",
        "question_hi": "नंबरों के ऊपर सिंबल टाइप करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Shift", "Alt", "Ctrl", "Caps Lock"],
        "options_hi": ["शिफ्ट", "Alt", "Ctrl", "कैप्स लॉक"],
        "answer_en": "Shift",
        "answer_hi": "शिफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
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
        "num": 13,
        "question_en": "Which device temporarily stores frequently used data?",
        "question_hi": "कौन सा डिवाइस बार-बार उपयोग होने वाले डेटा को अस्थायी रूप से स्टोर करता है?",
        "options_en": ["Cache", "RAM", "Hard Disk", "SSD"],
        "options_hi": ["कैश", "RAM", "हार्ड डिस्क", "SSD"],
        "answer_en": "Cache",
        "answer_hi": "कैश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the typical capacity of a CD-ROM?",
        "question_hi": "CD-ROM की सामान्य क्षमता कितनी होती है?",
        "options_en": ["700 MB", "650 MB", "4.7 GB", "8.5 GB"],
        "options_hi": ["700 MB", "650 MB", "4.7 GB", "8.5 GB"],
        "answer_en": "700 MB",
        "answer_hi": "700 MB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which company created the first spreadsheet software?",
        "question_hi": "पहला स्प्रेडशीट सॉफ्टवेयर किस कंपनी ने बनाया?",
        "options_en": ["VisiCalc", "Microsoft", "IBM", "Lotus"],
        "options_hi": ["विसिकैल्क", "माइक्रोसॉफ्ट", "आईबीएम", "लोटस"],
        "answer_en": "VisiCalc",
        "answer_hi": "विसिकैल्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does WAN stand for?",
        "question_hi": "WAN का पूरा नाम क्या है?",
        "options_en": ["Wide Area Network", "Wide Access Network", "World Area Network", "World Access Network"],
        "options_hi": ["वाइड एरिया नेटवर्क", "वाइड एक्सेस नेटवर्क", "वर्ल्ड एरिया नेटवर्क", "वर्ल्ड एक्सेस नेटवर्क"],
        "answer_en": "Wide Area Network",
        "answer_hi": "वाइड एरिया नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which key combination is used to open a file?",
        "question_hi": "फाइल खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + O", "Ctrl + N", "Ctrl + S", "Ctrl + P"],
        "options_hi": ["Ctrl + O", "Ctrl + N", "Ctrl + S", "Ctrl + P"],
        "answer_en": "Ctrl + O",
        "answer_hi": "Ctrl + O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does CU stand for in CPU?",
        "question_hi": "CPU में CU का क्या अर्थ है?",
        "options_en": ["Control Unit", "Central Unit", "Computer Unit", "Control Unit"],
        "options_hi": ["कंट्रोल यूनिट", "सेंट्रल यूनिट", "कंप्यूटर यूनिट", "कंट्रोल यूनिट"],
        "answer_en": "Control Unit",
        "answer_hi": "कंट्रोल यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which company created the first commercial computer?",
        "question_hi": "पहला कमर्शियल कंप्यूटर किस कंपनी ने बनाया?",
        "options_en": ["UNIVAC", "IBM", "Apple", "Commodore"],
        "options_hi": ["यूनिवैक", "आईबीएम", "एप्पल", "कमोडोर"],
        "answer_en": "UNIVAC",
        "answer_hi": "यूनिवैक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the extension of a Photoshop file?",
        "question_hi": "फोटोशॉप फाइल का एक्सटेंशन क्या है?",
        "options_en": [".psd", ".jpg", ".png", ".bmp"],
        "options_hi": [".psd", ".jpg", ".png", ".bmp"],
        "answer_en": ".psd",
        "answer_hi": ".psd",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which key is used to switch between open applications?",
        "question_hi": "खुले एप्लिकेशन के बीच स्विच करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Alt + Tab", "Ctrl + Tab", "Windows + Tab", "Shift + Tab"],
        "options_hi": ["Alt + Tab", "Ctrl + Tab", "Windows + Tab", "Shift + Tab"],
        "answer_en": "Alt + Tab",
        "answer_hi": "Alt + Tab",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does HTML stand for?",
        "question_hi": "HTML का पूरा नाम क्या है?",
        "options_en": ["Hypertext Markup Language", "Hypertext Modeling Language", "Hypertext Markup Link", "Hypertext Modeling Link"],
        "options_hi": ["हाइपरटेक्स्ट मार्कअप लैंग्वेज", "हाइपरटेक्स्ट मॉडलिंग लैंग्वेज", "हाइपरटेक्स्ट मार्कअप लिंक", "हाइपरटेक्स्ट मॉडलिंग लिंक"],
        "answer_en": "Hypertext Markup Language",
        "answer_hi": "हाइपरटेक्स्ट मार्कअप लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which device connects wireless devices to network?",
        "question_hi": "कौन सा डिवाइस वायरलेस डिवाइस को नेटवर्क से जोड़ता है?",
        "options_en": ["Wi-Fi Router", "Switch", "Modem", "Hub"],
        "options_hi": ["Wi-Fi राउटर", "स्विच", "मॉडेम", "हब"],
        "answer_en": "Wi-Fi Router",
        "answer_hi": "Wi-Fi राउटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the smallest unit of data storage?",
        "question_hi": "डेटा स्टोरेज की सबसे छोटी इकाई क्या है?",
        "options_en": ["Bit", "Byte", "Nibble", "Word"],
        "options_hi": ["बिट", "बाइट", "निबल", "वर्ड"],
        "answer_en": "Bit",
        "answer_hi": "बिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which person created the C++ programming language?",
        "question_hi": "C++ प्रोग्रामिंग भाषा किस व्यक्ति ने बनाई?",
        "options_en": ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
        "options_hi": ["बजार्ने स्ट्रॉस्ट्रुप", "डेनिस रिची", "जेम्स गोसलिंग", "गुइडो वैन रोसुम"],
        "answer_en": "Bjarne Stroustrup",
        "answer_hi": "बजार्ने स्ट्रॉस्ट्रुप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
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
        "num": 27,
        "question_en": "Which key combination is used to paste copied content?",
        "question_hi": "कॉपी किए गए कंटेंट को पेस्ट करने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + V", "Ctrl + P", "Ctrl + C", "Ctrl + X"],
        "options_hi": ["Ctrl + V", "Ctrl + P", "Ctrl + C", "Ctrl + X"],
        "answer_en": "Ctrl + V",
        "answer_hi": "Ctrl + V",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
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
        "num": 29,
        "question_en": "Which company created the first tablet PC?",
        "question_hi": "पहला टैबलेट PC किस कंपनी ने बनाया?",
        "options_en": ["Microsoft", "Apple", "IBM", "HP"],
        "options_hi": ["माइक्रोसॉफ्ट", "एप्पल", "आईबीएम", "एचपी"],
        "answer_en": "Microsoft",
        "answer_hi": "माइक्रोसॉफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the extension of a Windows Media Player playlist?",
        "question_hi": "विंडोज मीडिया प्लेयर प्लेलिस्ट का एक्सटेंशन क्या है?",
        "options_en": [".wpl", ".m3u", ".pls", ".mp3"],
        "options_hi": [".wpl", ".m3u", ".pls", ".mp3"],
        "answer_en": ".wpl",
        "answer_hi": ".wpl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which key is used to go to the end of a document?",
        "question_hi": "डॉक्यूमेंट के अंत में जाने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Ctrl + End", "End", "Page Down", "Ctrl + Page Down"],
        "options_hi": ["Ctrl + End", "End", "Page Down", "Ctrl + Page Down"],
        "answer_en": "Ctrl + End",
        "answer_hi": "Ctrl + End",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does FTP stand for?",
        "question_hi": "FTP का पूरा नाम क्या है?",
        "options_en": ["File Transfer Protocol", "File Transmission Protocol", "File Transfer Process", "File Transmission Process"],
        "options_hi": ["फाइल ट्रांसफर प्रोटोकॉल", "फाइल ट्रांसमिशन प्रोटोकॉल", "फाइल ट्रांसफर प्रोसेस", "फाइल ट्रांसमिशन प्रोसेस"],
        "answer_en": "File Transfer Protocol",
        "answer_hi": "फाइल ट्रांसफर प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which device captures images for computer?",
        "question_hi": "कौन सा डिवाइस कंप्यूटर के लिए इमेज कैप्चर करता है?",
        "options_en": ["Scanner", "Printer", "Webcam", "Digital Camera"],
        "options_hi": ["स्कैनर", "प्रिंटर", "वेबकैम", "डिजिटल कैमरा"],
        "answer_en": "Scanner",
        "answer_hi": "स्कैनर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is 1 Byte equal to?",
        "question_hi": "1 बाइट किसके बराबर होता है?",
        "options_en": ["8 Bits", "4 Bits", "16 Bits", "32 Bits"],
        "options_hi": ["8 बिट्स", "4 बिट्स", "16 बिट्स", "32 बिट्स"],
        "answer_en": "8 Bits",
        "answer_hi": "8 बिट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which company created the PHP programming language?",
        "question_hi": "PHP प्रोग्रामिंग भाषा किसने बनाई?",
        "options_en": ["Rasmus Lerdorf", "Microsoft", "Google", "IBM"],
        "options_hi": ["रैसमस लर्डोर्फ", "माइक्रोसॉफ्ट", "गूगल", "आईबीएम"],
        "answer_en": "Rasmus Lerdorf",
        "answer_hi": "रैसमस लर्डोर्फ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does SQL stand for?",
        "question_hi": "SQL का पूरा नाम क्या है?",
        "options_en": ["Structured Query Language", "Structured Question Language", "Simple Query Language", "Simple Question Language"],
        "options_hi": ["स्ट्रक्चर्ड क्वेरी लैंग्वेज", "स्ट्रक्चर्ड क्वेश्चन लैंग्वेज", "सिंपल क्वेरी लैंग्वेज", "सिंपल क्वेश्चन लैंग्वेज"],
        "answer_en": "Structured Query Language",
        "answer_hi": "स्ट्रक्चर्ड क्वेरी लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which key combination is used to print a document?",
        "question_hi": "डॉक्यूमेंट प्रिंट करने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + P", "Ctrl + S", "Ctrl + O", "Ctrl + N"],
        "options_hi": ["Ctrl + P", "Ctrl + S", "Ctrl + O", "Ctrl + N"],
        "answer_en": "Ctrl + P",
        "answer_hi": "Ctrl + P",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What does USB stand for?",
        "question_hi": "USB का पूरा नाम क्या है?",
        "options_en": ["Universal Serial Bus", "Universal System Bus", "United Serial Bus", "United System Bus"],
        "options_hi": ["यूनिवर्सल सीरियल बस", "यूनिवर्सल सिस्टम बस", "यूनाइटेड सीरियल बस", "यूनाइटेड सिस्टम बस"],
        "answer_en": "Universal Serial Bus",
        "answer_hi": "यूनिवर्सल सीरियल बस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which company created the first digital computer?",
        "question_hi": "पहला डिजिटल कंप्यूटर किस कंपनी/व्यक्ति ने बनाया?",
        "options_en": ["John Atanasoff", "IBM", "Apple", "UNIVAC"],
        "options_hi": ["जॉन एटानासॉफ", "आईबीएम", "एप्पल", "यूनिवैक"],
        "answer_en": "John Atanasoff",
        "answer_hi": "जॉन एटानासॉफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the extension of a Python file?",
        "question_hi": "पाइथन फाइल का एक्सटेंशन क्या है?",
        "options_en": [".py", ".python", ".pt", ".pyt"],
        "options_hi": [".py", ".python", ".pt", ".pyt"],
        "answer_en": ".py",
        "answer_hi": ".py",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which key is used to refresh a webpage?",
        "question_hi": "वेबपेज रिफ्रेश करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["F5", "F1", "F2", "F3"],
        "options_hi": ["F5", "F1", "F2", "F3"],
        "answer_en": "F5",
        "answer_hi": "F5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What does HTTP stand for?",
        "question_hi": "HTTP का पूरा नाम क्या है?",
        "options_en": ["Hypertext Transfer Protocol", "Hypertext Transmission Protocol", "Hypertext Transfer Process", "Hypertext Transmission Process"],
        "options_hi": ["हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाइपरटेक्स्ट ट्रांसमिशन प्रोटोकॉल", "हाइपरटेक्स्ट ट्रांसफर प्रोसेस", "हाइपरटेक्स्ट ट्रांसमिशन प्रोसेस"],
        "answer_en": "Hypertext Transfer Protocol",
        "answer_hi": "हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which device amplifies network signal?",
        "question_hi": "कौन सा डिवाइस नेटवर्क सिग्नल को एम्पलीफाई करता है?",
        "options_en": ["Repeater", "Router", "Switch", "Hub"],
        "options_hi": ["रिपीटर", "राउटर", "स्विच", "हब"],
        "answer_en": "Repeater",
        "answer_hi": "रिपीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is 1 Nibble equal to?",
        "question_hi": "1 निबल किसके बराबर होता है?",
        "options_en": ["4 Bits", "2 Bits", "8 Bits", "16 Bits"],
        "options_hi": ["4 बिट्स", "2 बिट्स", "8 बिट्स", "16 बिट्स"],
        "answer_en": "4 Bits",
        "answer_hi": "4 बिट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which person created the JavaScript programming language?",
        "question_hi": "जावास्क्रिप्ट प्रोग्रामिंग भाषा किस व्यक्ति ने बनाई?",
        "options_en": ["Brendan Eich", "Bill Gates", "Steve Jobs", "Larry Page"],
        "options_hi": ["ब्रेंडन आइच", "बिल गेट्स", "स्टीव जॉब्स", "लैरी पेज"],
        "answer_en": "Brendan Eich",
        "answer_hi": "ब्रेंडन आइच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What does XML stand for?",
        "question_hi": "XML का पूरा नाम क्या है?",
        "options_en": ["eXtensible Markup Language", "eXtensible Modeling Language", "eXtensible Markup Link", "eXtensible Modeling Link"],
        "options_hi": ["एक्सटेंसिबल मार्कअप लैंग्वेज", "एक्सटेंसिबल मॉडलिंग लैंग्वेज", "एक्सटेंसिबल मार्कअप लिंक", "एक्सटेंसिबल मॉडलिंग लिंक"],
        "answer_en": "eXtensible Markup Language",
        "answer_hi": "एक्सटेंसिबल मार्कअप लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which key combination is used to copy selected text?",
        "question_hi": "सेलेक्टेड टेक्स्ट कॉपी करने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + Z"],
        "options_hi": ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + Z"],
        "answer_en": "Ctrl + C",
        "answer_hi": "Ctrl + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What does HDMI stand for?",
        "question_hi": "HDMI का पूरा नाम क्या है?",
        "options_en": ["High Definition Multimedia Interface", "High Definition Media Interface", "High Definition Multimedia Input", "High Definition Media Input"],
        "options_hi": ["हाई डेफिनिशन मल्टीमीडिया इंटरफेस", "हाई डेफिनिशन मीडिया इंटरफेस", "हाई डेफिनिशन मल्टीमीडिया इनपुट", "हाई डेफिनिशन मीडिया इनपुट"],
        "answer_en": "High Definition Multimedia Interface",
        "answer_hi": "हाई डेफिनिशन मल्टीमीडिया इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which company created the first supercomputer?",
        "question_hi": "पहला सुपरकंप्यूटर किस कंपनी ने बनाया?",
        "options_en": ["Cray", "IBM", "CDC", "Fujitsu"],
        "options_hi": ["क्रे", "आईबीएम", "सीडीसी", "फुजित्सु"],
        "answer_en": "Cray",
        "answer_hi": "क्रे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the extension of a Java file?",
        "question_hi": "जावा फाइल का एक्सटेंशन क्या है?",
        "options_en": [".java", ".class", ".jar", ".js"],
        "options_hi": [".java", ".class", ".jar", ".js"],
        "answer_en": ".java",
        "answer_hi": ".java",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which key is used to move cursor one word left?",
        "question_hi": "कर्सर को एक शब्द बाईं ओर ले जाने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Ctrl + Left Arrow", "Left Arrow", "Alt + Left Arrow", "Shift + Left Arrow"],
        "options_hi": ["Ctrl + लेफ्ट एरो", "लेफ्ट एरो", "Alt + लेफ्ट एरो", "Shift + लेफ्ट एरो"],
        "answer_en": "Ctrl + Left Arrow",
        "answer_hi": "Ctrl + लेफ्ट एरो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What does SMTP stand for?",
        "question_hi": "SMTP का पूरा नाम क्या है?",
        "options_en": ["Simple Mail Transfer Protocol", "Simple Message Transfer Protocol", "System Mail Transfer Protocol", "System Message Transfer Protocol"],
        "options_hi": ["सिंपल मेल ट्रांसफर प्रोटोकॉल", "सिंपल मैसेज ट्रांसफर प्रोटोकॉल", "सिस्टम मेल ट्रांसफर प्रोटोकॉल", "सिस्टम मैसेज ट्रांसफर प्रोटोकॉल"],
        "answer_en": "Simple Mail Transfer Protocol",
        "answer_hi": "सिंपल मेल ट्रांसफर प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which device converts digital to analog signals?",
        "question_hi": "कौन सा डिवाइस डिजिटल से एनालॉग सिग्नल कन्वर्ट करता है?",
        "options_en": ["Modem", "Router", "Switch", "Repeater"],
        "options_hi": ["मॉडेम", "राउटर", "स्विच", "रिपीटर"],
        "answer_en": "Modem",
        "answer_hi": "मॉडेम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is 1 Word (in computing) equal to?",
        "question_hi": "कंप्यूटिंग में 1 वर्ड किसके बराबर होता है?",
        "options_en": ["Depends on architecture (16/32/64 bits)", "8 Bits", "16 Bits", "32 Bits"],
        "options_hi": ["आर्किटेक्चर पर निर्भर (16/32/64 बिट्स)", "8 बिट्स", "16 बिट्स", "32 बिट्स"],
        "answer_en": "Depends on architecture (16/32/64 bits)",
        "answer_hi": "आर्किटेक्चर पर निर्भर (16/32/64 बिट्स)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which company created the Ruby programming language?",
        "question_hi": "रूबी प्रोग्रामिंग भाषा किसने बनाई?",
        "options_en": ["Yukihiro Matsumoto", "Microsoft", "Google", "Apple"],
        "options_hi": ["युकिहिरो मात्सुमोटो", "माइक्रोसॉफ्ट", "गूगल", "एप्पल"],
        "answer_en": "Yukihiro Matsumoto",
        "answer_hi": "युकिहिरो मात्सुमोटो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
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
        "num": 57,
        "question_en": "Which key combination is used to save as a document?",
        "question_hi": "डॉक्यूमेंट सेव एस करने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["F12", "Ctrl + Shift + S", "Both", "Ctrl + S"],
        "options_hi": ["F12", "Ctrl + Shift + S", "दोनों", "Ctrl + S"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does SSD stand for?",
        "question_hi": "SSD का पूरा नाम क्या है?",
        "options_en": ["Solid State Drive", "Solid State Disk", "System State Drive", "System State Disk"],
        "options_hi": ["सॉलिड स्टेट ड्राइव", "सॉलिड स्टेट डिस्क", "सिस्टम स्टेट ड्राइव", "सिस्टम स्टेट डिस्क"],
        "answer_en": "Solid State Drive",
        "answer_hi": "सॉलिड स्टेट ड्राइव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which company created the first computer mouse?",
        "question_hi": "पहला कंप्यूटर माउस किस कंपनी/व्यक्ति ने बनाया?",
        "options_en": ["Douglas Engelbart", "Microsoft", "Apple", "Logitech"],
        "options_hi": ["डगलस एंगेलबार्ट", "माइक्रोसॉफ्ट", "एप्पल", "लोगिटेक"],
        "answer_en": "Douglas Engelbart",
        "answer_hi": "डगलस एंगेलबार्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the extension of a C programming file?",
        "question_hi": "C प्रोग्रामिंग फाइल का एक्सटेंशन क्या है?",
        "options_en": [".c", ".cpp", ".cs", ".java"],
        "options_hi": [".c", ".cpp", ".cs", ".java"],
        "answer_en": ".c",
        "answer_hi": ".c",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which key is used to move cursor one word right?",
        "question_hi": "कर्सर को एक शब्द दाईं ओर ले जाने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Ctrl + Right Arrow", "Right Arrow", "Alt + Right Arrow", "Shift + Right Arrow"],
        "options_hi": ["Ctrl + राइट एरो", "राइट एरो", "Alt + राइट एरो", "Shift + राइट एरो"],
        "answer_en": "Ctrl + Right Arrow",
        "answer_hi": "Ctrl + राइट एरो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What does POP3 stand for?",
        "question_hi": "POP3 का पूरा नाम क्या है?",
        "options_en": ["Post Office Protocol 3", "Post Office Process 3", "Post Office Program 3", "Post Office Procedure 3"],
        "options_hi": ["पोस्ट ऑफिस प्रोटोकॉल 3", "पोस्ट ऑफिस प्रोसेस 3", "पोस्ट ऑफिस प्रोग्राम 3", "पोस्ट ऑफिस प्रोसीजर 3"],
        "answer_en": "Post Office Protocol 3",
        "answer_hi": "पोस्ट ऑफिस प्रोटोकॉल 3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which device protects computer from power fluctuations?",
        "question_hi": "कौन सा डिवाइस कंप्यूटर को पावर फ्लक्चुएशन से बचाता है?",
        "options_en": ["UPS", "Stabilizer", "Surge Protector", "All of these"],
        "options_hi": ["UPS", "स्टेबलाइजर", "सर्ज प्रोटेक्टर", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is 1 Kilobyte in bits?",
        "question_hi": "1 किलोबाइट बिट्स में कितना होता है?",
        "options_en": ["8192 Bits", "8000 Bits", "1024 Bits", "1000 Bits"],
        "options_hi": ["8192 बिट्स", "8000 बिट्स", "1024 बिट्स", "1000 बिट्स"],
        "answer_en": "8192 Bits",
        "answer_hi": "8192 बिट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which company created the Go programming language?",
        "question_hi": "गो प्रोग्रामिंग भाषा किस कंपनी ने बनाई?",
        "options_en": ["Google", "Microsoft", "Facebook", "Apple"],
        "options_hi": ["गूगल", "माइक्रोसॉफ्ट", "फेसबुक", "एप्पल"],
        "answer_en": "Google",
        "answer_hi": "गूगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What does API stand for?",
        "question_hi": "API का पूरा नाम क्या है?",
        "options_en": ["Application Programming Interface", "Application Program Interface", "Application Programming Input", "Application Program Input"],
        "options_hi": ["एप्लिकेशन प्रोग्रामिंग इंटरफेस", "एप्लिकेशन प्रोग्राम इंटरफेस", "एप्लिकेशन प्रोग्रामिंग इनपुट", "एप्लिकेशन प्रोग्राम इनपुट"],
        "answer_en": "Application Programming Interface",
        "answer_hi": "एप्लिकेशन प्रोग्रामिंग इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which key combination is used to find text in document?",
        "question_hi": "डॉक्यूमेंट में टेक्स्ट ढूंढने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + R"],
        "options_hi": ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + R"],
        "answer_en": "Ctrl + F",
        "answer_hi": "Ctrl + F",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What does HDD stand for?",
        "question_hi": "HDD का पूरा नाम क्या है?",
        "options_en": ["Hard Disk Drive", "Hard Drive Disk", "Hard Data Drive", "Hard Drive Data"],
        "options_hi": ["हार्ड डिस्क ड्राइव", "हार्ड ड्राइव डिस्क", "हार्ड डेटा ड्राइव", "हार्ड ड्राइव डेटा"],
        "answer_en": "Hard Disk Drive",
        "answer_hi": "हार्ड डिस्क ड्राइव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which company created the first smartphone?",
        "question_hi": "पहला स्मार्टफोन किस कंपनी ने बनाया?",
        "options_en": ["IBM Simon", "Apple", "Nokia", "BlackBerry"],
        "options_hi": ["आईबीएम साइमन", "एप्पल", "नोकिया", "ब्लैकबेरी"],
        "answer_en": "IBM Simon",
        "answer_hi": "आईबीएम साइमन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the extension of an HTML file?",
        "question_hi": "HTML फाइल का एक्सटेंशन क्या है?",
        "options_en": [".html", ".htm", ".php", ".asp"],
        "options_hi": [".html", ".htm", ".php", ".asp"],
        "answer_en": ".html",
        "answer_hi": ".html",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which key is used to open the Run dialog?",
        "question_hi": "रन डायलॉग खोलने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Windows + R", "Ctrl + R", "Alt + R", "Shift + R"],
        "options_hi": ["Windows + R", "Ctrl + R", "Alt + R", "Shift + R"],
        "answer_en": "Windows + R",
        "answer_hi": "Windows + R",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What does VPN stand for?",
        "question_hi": "VPN का पूरा नाम क्या है?",
        "options_en": ["Virtual Private Network", "Virtual Public Network", "Virtual Private Node", "Virtual Public Node"],
        "options_hi": ["वर्चुअल प्राइवेट नेटवर्क", "वर्चुअल पब्लिक नेटवर्क", "वर्चुअल प्राइवेट नोड", "वर्चुअल पब्लिक नोड"],
        "answer_en": "Virtual Private Network",
        "answer_hi": "वर्चुअल प्राइवेट नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which device cools down the CPU?",
        "question_hi": "कौन सा डिवाइस CPU को ठंडा करता है?",
        "options_en": ["Heat Sink", "Fan", "Thermal Paste", "All of these"],
        "options_hi": ["हीट सिंक", "फैन", "थर्मल पेस्ट", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is 1 Megabyte in bits?",
        "question_hi": "1 मेगाबाइट बिट्स में कितना होता है?",
        "options_en": ["8388608 Bits", "8000000 Bits", "1048576 Bits", "1000000 Bits"],
        "options_hi": ["8388608 बिट्स", "8000000 बिट्स", "1048576 बिट्स", "1000000 बिट्स"],
        "answer_en": "8388608 Bits",
        "answer_hi": "8388608 बिट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which company created the Swift programming language?",
        "question_hi": "स्विफ्ट प्रोग्रामिंग भाषा किस कंपनी ने बनाई?",
        "options_en": ["Apple", "Microsoft", "Google", "Facebook"],
        "options_hi": ["एप्पल", "माइक्रोसॉफ्ट", "गूगल", "फेसबुक"],
        "answer_en": "Apple",
        "answer_hi": "एप्पल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What does AJAX stand for?",
        "question_hi": "AJAX का पूरा नाम क्या है?",
        "options_en": ["Asynchronous JavaScript and XML", "Asynchronous Java and XML", "Advanced JavaScript and XML", "Advanced Java and XML"],
        "options_hi": ["एसिंक्रोनस जावास्क्रिप्ट और XML", "एसिंक्रोनस जावा और XML", "एडवांस्ड जावास्क्रिप्ट और XML", "एडवांस्ड जावा और XML"],
        "answer_en": "Asynchronous JavaScript and XML",
        "answer_hi": "एसिंक्रोनस जावास्क्रिप्ट और XML",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which key combination is used to replace text?",
        "question_hi": "टेक्स्ट रिप्लेस करने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + H", "Ctrl + F", "Ctrl + R", "Ctrl + E"],
        "options_hi": ["Ctrl + H", "Ctrl + F", "Ctrl + R", "Ctrl + E"],
        "answer_en": "Ctrl + H",
        "answer_hi": "Ctrl + H",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What does RAM stand for?",
        "question_hi": "RAM का पूरा नाम क्या है?",
        "options_en": ["Random Access Memory", "Read Access Memory", "Random Access Module", "Read Access Module"],
        "options_hi": ["रैंडम एक्सेस मेमोरी", "रीड एक्सेस मेमोरी", "रैंडम एक्सेस मॉड्यूल", "रीड एक्सेस मॉड्यूल"],
        "answer_en": "Random Access Memory",
        "answer_hi": "रैंडम एक्सेस मेमोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which company created the first computer printer?",
        "question_hi": "पहला कंप्यूटर प्रिंटर किस कंपनी ने बनाया?",
        "options_en": ["IBM", "Epson", "HP", "Xerox"],
        "options_hi": ["आईबीएम", "एप्सन", "एचपी", "जेरोक्स"],
        "answer_en": "IBM",
        "answer_hi": "आईबीएम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the extension of a CSS file?",
        "question_hi": "CSS फाइल का एक्सटेंशन क्या है?",
        "options_en": [".css", ".style", ".sheet", ".styl"],
        "options_hi": [".css", ".style", ".sheet", ".styl"],
        "answer_en": ".css",
        "answer_hi": ".css",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which key is used to open Task Manager?",
        "question_hi": "टास्क मैनेजर खोलने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Ctrl + Shift + Esc", "Ctrl + Alt + Del", "Both", "Windows + X"],
        "options_hi": ["Ctrl + Shift + Esc", "Ctrl + Alt + Del", "दोनों", "Windows + X"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What does CMOS stand for?",
        "question_hi": "CMOS का पूरा नाम क्या है?",
        "options_en": ["Complementary Metal Oxide Semiconductor", "Complementary Metal Oxide System", "Computer Metal Oxide Semiconductor", "Computer Metal Oxide System"],
        "options_hi": ["कॉम्प्लीमेंटरी मेटल ऑक्साइड सेमीकंडक्टर", "कॉम्प्लीमेंटरी मेटल ऑक्साइड सिस्टम", "कंप्यूटर मेटल ऑक्साइड सेमीकंडक्टर", "कंप्यूटर मेटल ऑक्साइड सिस्टम"],
        "answer_en": "Complementary Metal Oxide Semiconductor",
        "answer_hi": "कॉम्प्लीमेंटरी मेटल ऑक्साइड सेमीकंडक्टर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which device reads memory cards?",
        "question_hi": "कौन सा डिवाइस मेमोरी कार्ड पढ़ता है?",
        "options_en": ["Card Reader", "USB Port", "Hard Drive", "Optical Drive"],
        "options_hi": ["कार्ड रीडर", "USB पोर्ट", "हार्ड ड्राइव", "ऑप्टिकल ड्राइव"],
        "answer_en": "Card Reader",
        "answer_hi": "कार्ड रीडर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is 1 Gigabyte in bits?",
        "question_hi": "1 गीगाबाइट बिट्स में कितना होता है?",
        "options_en": ["8589934592 Bits", "8000000000 Bits", "1073741824 Bits", "1000000000 Bits"],
        "options_hi": ["8589934592 बिट्स", "8000000000 बिट्स", "1073741824 बिट्स", "1000000000 बिट्स"],
        "answer_en": "8589934592 Bits",
        "answer_hi": "8589934592 बिट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which company created the Kotlin programming language?",
        "question_hi": "कोटलिन प्रोग्रामिंग भाषा किस कंपनी ने बनाई?",
        "options_en": ["JetBrains", "Google", "Microsoft", "Oracle"],
        "options_hi": ["जेटब्रेन्स", "गूगल", "माइक्रोसॉफ्ट", "ओरेकल"],
        "answer_en": "JetBrains",
        "answer_hi": "जेटब्रेन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What does GPU stand for?",
        "question_hi": "GPU का पूरा नाम क्या है?",
        "options_en": ["Graphics Processing Unit", "Graphics Program Unit", "Graphics Processing Unit", "Graphics Program Unit"],
        "options_hi": ["ग्राफिक्स प्रोसेसिंग यूनिट", "ग्राफिक्स प्रोग्राम यूनिट", "ग्राफिक्स प्रोसेसिंग यूनिट", "ग्राफिक्स प्रोग्राम यूनिट"],
        "answer_en": "Graphics Processing Unit",
        "answer_hi": "ग्राफिक्स प्रोसेसिंग यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which key combination is used to select all text?",
        "question_hi": "सभी टेक्स्ट सेलेक्ट करने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + A", "Ctrl + S", "Ctrl + D", "Ctrl + F"],
        "options_hi": ["Ctrl + A", "Ctrl + S", "Ctrl + D", "Ctrl + F"],
        "answer_en": "Ctrl + A",
        "answer_hi": "Ctrl + A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What does ROM stand for?",
        "question_hi": "ROM का पूरा नाम क्या है?",
        "options_en": ["Read Only Memory", "Random Only Memory", "Read Only Module", "Random Only Module"],
        "options_hi": ["रीड ओनली मेमोरी", "रैंडम ओनली मेमोरी", "रीड ओनली मॉड्यूल", "रैंडम ओनली मॉड्यूल"],
        "answer_en": "Read Only Memory",
        "answer_hi": "रीड ओनली मेमोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which company created the first computer network?",
        "question_hi": "पहला कंप्यूटर नेटवर्क किस संस्था ने बनाया?",
        "options_en": ["ARPANET", "IBM", "Microsoft", "Bell Labs"],
        "options_hi": ["अरपानेट", "आईबीएम", "माइक्रोसॉफ्ट", "बेल लैब्स"],
        "answer_en": "ARPANET",
        "answer_hi": "अरपानेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the extension of a JavaScript file?",
        "question_hi": "जावास्क्रिप्ट फाइल का एक्सटेंशन क्या है?",
        "options_en": [".js", ".javascript", ".java", ".jsp"],
        "options_hi": [".js", ".javascript", ".java", ".jsp"],
        "answer_en": ".js",
        "answer_hi": ".js",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which key is used to rename a file?",
        "question_hi": "फाइल का नाम बदलने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["F2", "F1", "F3", "F4"],
        "options_hi": ["F2", "F1", "F3", "F4"],
        "answer_en": "F2",
        "answer_hi": "F2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What does LED stand for?",
        "question_hi": "LED का पूरा नाम क्या है?",
        "options_en": ["Light Emitting Diode", "Light Emitting Device", "Liquid Emitting Diode", "Liquid Emitting Device"],
        "options_hi": ["लाइट एमिटिंग डायोड", "लाइट एमिटिंग डिवाइस", "लिक्विड एमिटिंग डायोड", "लिक्विड एमिटिंग डिवाइस"],
        "answer_en": "Light Emitting Diode",
        "answer_hi": "लाइट एमिटिंग डायोड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which device converts AC to DC power?",
        "question_hi": "कौन सा डिवाइस AC को DC पावर में बदलता है?",
        "options_en": ["SMPS", "UPS", "Stabilizer", "All of these"],
        "options_hi": ["SMPS", "UPS", "स्टेबलाइजर", "ये सभी"],
        "answer_en": "SMPS",
        "answer_hi": "SMPS",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is 1 Terabyte in bits?",
        "question_hi": "1 टेराबाइट बिट्स में कितना होता है?",
        "options_en": ["8796093022208 Bits", "8000000000000 Bits", "1099511627776 Bits", "1000000000000 Bits"],
        "options_hi": ["8796093022208 बिट्स", "8000000000000 बिट्स", "1099511627776 बिट्स", "1000000000000 बिट्स"],
        "answer_en": "8796093022208 Bits",
        "answer_hi": "8796093022208 बिट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which company created the Rust programming language?",
        "question_hi": "रस्ट प्रोग्रामिंग भाषा किस कंपनी ने बनाई?",
        "options_en": ["Mozilla", "Microsoft", "Google", "Apple"],
        "options_hi": ["मोज़िला", "माइक्रोसॉफ्ट", "गूगल", "एप्पल"],
        "answer_en": "Mozilla",
        "answer_hi": "मोज़िला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What does LCD stand for?",
        "question_hi": "LCD का पूरा नाम क्या है?",
        "options_en": ["Liquid Crystal Display", "Light Crystal Display", "Liquid Crystal Device", "Light Crystal Device"],
        "options_hi": ["लिक्विड क्रिस्टल डिस्प्ले", "लाइट क्रिस्टल डिस्प्ले", "लिक्विड क्रिस्टल डिवाइस", "लाइट क्रिस्टल डिवाइस"],
        "answer_en": "Liquid Crystal Display",
        "answer_hi": "लिक्विड क्रिस्टल डिस्प्ले",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which key combination is used to undo an action?",
        "question_hi": "एक्शन अंडू करने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + Z", "Ctrl + Y", "Ctrl + X", "Ctrl + U"],
        "options_hi": ["Ctrl + Z", "Ctrl + Y", "Ctrl + X", "Ctrl + U"],
        "answer_en": "Ctrl + Z",
        "answer_hi": "Ctrl + Z",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What does UPS stand for?",
        "question_hi": "UPS का पूरा नाम क्या है?",
        "options_en": ["Uninterruptible Power Supply", "Uninterrupted Power Supply", "Universal Power Supply", "Universal Power System"],
        "options_hi": ["अनइंटरप्टिबल पावर सप्लाई", "अनइंटरप्टेड पावर सप्लाई", "यूनिवर्सल पावर सप्लाई", "यूनिवर्सल पावर सिस्टम"],
        "answer_en": "Uninterruptible Power Supply",
        "answer_hi": "अनइंटरप्टिबल पावर सप्लाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which company created the first computer keyboard?",
        "question_hi": "पहला कंप्यूटर कीबोर्ड किस कंपनी ने बनाया?",
        "options_en": ["IBM", "Apple", "Microsoft", "Commodore"],
        "options_hi": ["आईबीएम", "एप्पल", "माइक्रोसॉफ्ट", "कमोडोर"],
        "answer_en": "IBM",
        "answer_hi": "आईबीएम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the extension of a Windows shortcut file?",
        "question_hi": "विंडोज शॉर्टकट फाइल का एक्सटेंशन क्या है?",
        "options_en": [".lnk", ".shortcut", ".sc", ".link"],
        "options_hi": [".lnk", ".shortcut", ".sc", ".link"],
        "answer_en": ".lnk",
        "answer_hi": ".lnk",
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