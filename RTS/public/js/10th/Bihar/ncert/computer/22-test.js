const questions = [
    {
        "num": 1,
        "question_en": "Which part of computer is known as its brain?",
        "question_hi": "कंप्यूटर के किस भाग को उसका दिमाग कहा जाता है?",
        "options_en": ["CPU", "RAM", "Hard Disk", "Motherboard"],
        "options_hi": ["CPU", "RAM", "हार्ड डिस्क", "मदरबोर्ड"],
        "answer_en": "CPU",
        "answer_hi": "CPU",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What type of device is a keyboard?",
        "question_hi": "कीबोर्ड किस प्रकार का डिवाइस है?",
        "options_en": ["Input", "Output", "Processing", "Storage"],
        "options_hi": ["इनपुट", "आउटपुट", "प्रोसेसिंग", "स्टोरेज"],
        "answer_en": "Input",
        "answer_hi": "इनपुट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which company created Windows operating system?",
        "question_hi": "विंडोज ऑपरेटिंग सिस्टम किस कंपनी ने बनाया?",
        "options_en": ["Microsoft", "Apple", "Google", "IBM"],
        "options_hi": ["माइक्रोसॉफ्ट", "एप्पल", "गूगल", "आईबीएम"],
        "answer_en": "Microsoft",
        "answer_hi": "माइक्रोसॉफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the full form of CPU?",
        "question_hi": "CPU का पूरा नाम क्या है?",
        "options_en": ["Central Processing Unit", "Central Process Unit", "Computer Processing Unit", "Computer Process Unit"],
        "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "सेंट्रल प्रोसेस यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट", "कंप्यूटर प्रोसेस यूनिट"],
        "answer_en": "Central Processing Unit",
        "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which device displays output from computer?",
        "question_hi": "कौन सा डिवाइस कंप्यूटर से आउटपुट दिखाता है?",
        "options_en": ["Monitor", "Keyboard", "Mouse", "Printer"],
        "options_hi": ["मॉनिटर", "कीबोर्ड", "माउस", "प्रिंटर"],
        "answer_en": "Monitor",
        "answer_hi": "मॉनिटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the main memory of computer called?",
        "question_hi": "कंप्यूटर की मुख्य मेमोरी को क्या कहते हैं?",
        "options_en": ["RAM", "ROM", "Hard Disk", "Cache"],
        "options_hi": ["RAM", "ROM", "हार्ड डिस्क", "कैश"],
        "answer_en": "RAM",
        "answer_hi": "RAM",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which key is used to create a new line in documents?",
        "question_hi": "डॉक्यूमेंट में नई लाइन बनाने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Enter", "Space", "Tab", "Shift"],
        "options_hi": ["एंटर", "स्पेस", "टैब", "शिफ्ट"],
        "answer_en": "Enter",
        "answer_hi": "एंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does WWW stand for?",
        "question_hi": "WWW का क्या अर्थ है?",
        "options_en": ["World Wide Web", "World Web Wide", "Web World Wide", "Wide World Web"],
        "options_hi": ["वर्ल्ड वाइड वेब", "वर्ल्ड वेब वाइड", "वेब वर्ल्ड वाइड", "वाइड वर्ल्ड वेब"],
        "answer_en": "World Wide Web",
        "answer_hi": "वर्ल्ड वाइड वेब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which company created Macintosh computers?",
        "question_hi": "मैकिन्टोश कंप्यूटर किस कंपनी ने बनाए?",
        "options_en": ["Apple", "Microsoft", "IBM", "Dell"],
        "options_hi": ["एप्पल", "माइक्रोसॉफ्ट", "आईबीएम", "डेल"],
        "answer_en": "Apple",
        "answer_hi": "एप्पल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the extension of Microsoft Word document?",
        "question_hi": "माइक्रोसॉफ्ट वर्ड डॉक्यूमेंट का एक्सटेंशन क्या है?",
        "options_en": [".doc", ".docx", ".txt", ".pdf"],
        "options_hi": [".doc", ".docx", ".txt", ".pdf"],
        "answer_en": ".docx",
        "answer_hi": ".docx",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which key is used to type capital letters?",
        "question_hi": "कैपिटल लेटर्स टाइप करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Shift", "Caps Lock", "Both", "Ctrl"],
        "options_hi": ["शिफ्ट", "कैप्स लॉक", "दोनों", "Ctrl"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What does ISP stand for?",
        "question_hi": "ISP का क्या अर्थ है?",
        "options_en": ["Internet Service Provider", "Internet System Provider", "International Service Provider", "International System Provider"],
        "options_hi": ["इंटरनेट सर्विस प्रोवाइडर", "इंटरनेट सिस्टम प्रोवाइडर", "इंटरनेशनल सर्विस प्रोवाइडर", "इंटरनेशनल सिस्टम प्रोवाइडर"],
        "answer_en": "Internet Service Provider",
        "answer_hi": "इंटरनेट सर्विस प्रोवाइडर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which device stores data permanently?",
        "question_hi": "कौन सा डिवाइस डेटा स्थायी रूप से स्टोर करता है?",
        "options_en": ["Hard Disk", "RAM", "Cache", "Register"],
        "options_hi": ["हार्ड डिस्क", "RAM", "कैश", "रजिस्टर"],
        "answer_en": "Hard Disk",
        "answer_hi": "हार्ड डिस्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the capacity of a standard pen drive?",
        "question_hi": "स्टैंडर्ड पेन ड्राइव की क्षमता कितनी होती है?",
        "options_en": ["Varies (4GB to 256GB)", "Only 8GB", "Only 16GB", "Only 32GB"],
        "options_hi": ["अलग-अलग (4GB से 256GB)", "केवल 8GB", "केवल 16GB", "केवल 32GB"],
        "answer_en": "Varies (4GB to 256GB)",
        "answer_hi": "अलग-अलग (4GB से 256GB)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which company created MS-DOS operating system?",
        "question_hi": "MS-DOS ऑपरेटिंग सिस्टम किस कंपनी ने बनाया?",
        "options_en": ["Microsoft", "IBM", "Apple", "Digital Research"],
        "options_hi": ["माइक्रोसॉफ्ट", "आईबीएम", "एप्पल", "डिजिटल रिसर्च"],
        "answer_en": "Microsoft",
        "answer_hi": "माइक्रोसॉफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does LAN mean?",
        "question_hi": "LAN का क्या मतलब है?",
        "options_en": ["Local Area Network", "Large Area Network", "Local Access Network", "Large Access Network"],
        "options_hi": ["लोकल एरिया नेटवर्क", "लार्ज एरिया नेटवर्क", "लोकल एक्सेस नेटवर्क", "लार्ज एक्सेस नेटवर्क"],
        "answer_en": "Local Area Network",
        "answer_hi": "लोकल एरिया नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which key combination is used to save a document?",
        "question_hi": "डॉक्यूमेंट सेव करने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + S", "Ctrl + C", "Ctrl + V", "Ctrl + P"],
        "options_hi": ["Ctrl + S", "Ctrl + C", "Ctrl + V", "Ctrl + P"],
        "answer_en": "Ctrl + S",
        "answer_hi": "Ctrl + S",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does RAM mean?",
        "question_hi": "RAM का क्या मतलब है?",
        "options_en": ["Random Access Memory", "Read Access Memory", "Random Access Module", "Read Access Module"],
        "options_hi": ["रैंडम एक्सेस मेमोरी", "रीड एक्सेस मेमोरी", "रैंडम एक्सेस मॉड्यूल", "रीड एक्सेस मॉड्यूल"],
        "answer_en": "Random Access Memory",
        "answer_hi": "रैंडम एक्सेस मेमोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which company created the first microprocessor?",
        "question_hi": "पहला माइक्रोप्रोसेसर किस कंपनी ने बनाया?",
        "options_en": ["Intel", "AMD", "IBM", "Motorola"],
        "options_hi": ["इंटेल", "एएमडी", "आईबीएम", "मोटोरोला"],
        "answer_en": "Intel",
        "answer_hi": "इंटेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the extension of Excel file?",
        "question_hi": "एक्सेल फाइल का एक्सटेंशन क्या है?",
        "options_en": [".xlsx", ".xls", ".csv", ".exl"],
        "options_hi": [".xlsx", ".xls", ".csv", ".exl"],
        "answer_en": ".xlsx",
        "answer_hi": ".xlsx",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which key is used to delete text?",
        "question_hi": "टेक्स्ट डिलीट करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Delete", "Backspace", "Both", "Shift"],
        "options_hi": ["डिलीट", "बैकस्पेस", "दोनों", "शिफ्ट"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does WAN mean?",
        "question_hi": "WAN का क्या मतलब है?",
        "options_en": ["Wide Area Network", "Wide Access Network", "World Area Network", "World Access Network"],
        "options_hi": ["वाइड एरिया नेटवर्क", "वाइड एक्सेस नेटवर्क", "वर्ल्ड एरिया नेटवर्क", "वर्ल्ड एक्सेस नेटवर्क"],
        "answer_en": "Wide Area Network",
        "answer_hi": "वाइड एरिया नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which device connects computer to internet?",
        "question_hi": "कौन सा डिवाइस कंप्यूटर को इंटरनेट से जोड़ता है?",
        "options_en": ["Modem", "Router", "Switch", "All of these"],
        "options_hi": ["मॉडेम", "राउटर", "स्विच", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the smallest unit of computer memory?",
        "question_hi": "कंप्यूटर मेमोरी की सबसे छोटी इकाई क्या है?",
        "options_en": ["Bit", "Byte", "Kilobyte", "Megabyte"],
        "options_hi": ["बिट", "बाइट", "किलोबाइट", "मेगाबाइट"],
        "answer_en": "Bit",
        "answer_hi": "बिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which company created Linux operating system?",
        "question_hi": "लिनक्स ऑपरेटिंग सिस्टम किस कंपनी/व्यक्ति ने बनाया?",
        "options_en": ["Linus Torvalds", "Microsoft", "IBM", "Apple"],
        "options_hi": ["लाइनस टोरवाल्ड्स", "माइक्रोसॉफ्ट", "आईबीएम", "एप्पल"],
        "answer_en": "Linus Torvalds",
        "answer_hi": "लाइनस टोरवाल्ड्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What does PDF mean?",
        "question_hi": "PDF का क्या मतलब है?",
        "options_en": ["Portable Document Format", "Portable Data Format", "Printed Document Format", "Personal Document Format"],
        "options_hi": ["पोर्टेबल डॉक्यूमेंट फॉर्मेट", "पोर्टेबल डेटा फॉर्मेट", "प्रिंटेड डॉक्यूमेंट फॉर्मेट", "पर्सनल डॉक्यूमेंट फॉर्मेट"],
        "answer_en": "Portable Document Format",
        "answer_hi": "पोर्टेबल डॉक्यूमेंट फॉर्मेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
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
        "num": 28,
        "question_en": "What does ROM mean?",
        "question_hi": "ROM का क्या मतलब है?",
        "options_en": ["Read Only Memory", "Random Only Memory", "Read Only Module", "Random Only Module"],
        "options_hi": ["रीड ओनली मेमोरी", "रैंडम ओनली मेमोरी", "रीड ओनली मॉड्यूल", "रैंडम ओनली मॉड्यूल"],
        "answer_en": "Read Only Memory",
        "answer_hi": "रीड ओनली मेमोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which company created first laptop?",
        "question_hi": "पहला लैपटॉप किस कंपनी ने बनाया?",
        "options_en": ["Osborne", "IBM", "Apple", "Dell"],
        "options_hi": ["ओसबोर्न", "आईबीएम", "एप्पल", "डेल"],
        "answer_en": "Osborne",
        "answer_hi": "ओसबोर्न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the extension of PowerPoint file?",
        "question_hi": "पावरपॉइंट फाइल का एक्सटेंशन क्या है?",
        "options_en": [".pptx", ".ppt", ".pps", ".pptm"],
        "options_hi": [".pptx", ".ppt", ".pps", ".pptm"],
        "answer_en": ".pptx",
        "answer_hi": ".pptx",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which key is used to go to beginning of document?",
        "question_hi": "डॉक्यूमेंट की शुरुआत में जाने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Ctrl + Home", "Home", "Page Up", "Ctrl + Page Up"],
        "options_hi": ["Ctrl + Home", "Home", "Page Up", "Ctrl + Page Up"],
        "answer_en": "Ctrl + Home",
        "answer_hi": "Ctrl + Home",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does URL mean?",
        "question_hi": "URL का क्या मतलब है?",
        "options_en": ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"],
        "options_hi": ["यूनिफ़ॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लोकेटर", "यूनिफ़ॉर्म रिसोर्स लिंक", "यूनिवर्सल रिसोर्स लिंक"],
        "answer_en": "Uniform Resource Locator",
        "answer_hi": "यूनिफ़ॉर्म रिसोर्स लोकेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which device prints documents?",
        "question_hi": "कौन सा डिवाइस डॉक्यूमेंट प्रिंट करता है?",
        "options_en": ["Printer", "Scanner", "Plotter", "All of these"],
        "options_hi": ["प्रिंटर", "स्कैनर", "प्लॉटर", "ये सभी"],
        "answer_en": "Printer",
        "answer_hi": "प्रिंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is 1 Kilobyte equal to?",
        "question_hi": "1 किलोबाइट किसके बराबर होता है?",
        "options_en": ["1024 Bytes", "1000 Bytes", "1024 Bits", "1000 Bits"],
        "options_hi": ["1024 बाइट्स", "1000 बाइट्स", "1024 बिट्स", "1000 बिट्स"],
        "answer_en": "1024 Bytes",
        "answer_hi": "1024 बाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which company created Java programming language?",
        "question_hi": "जावा प्रोग्रामिंग भाषा किस कंपनी ने बनाई?",
        "options_en": ["Sun Microsystems", "Microsoft", "Oracle", "IBM"],
        "options_hi": ["सन माइक्रोसिस्टम्स", "माइक्रोसॉफ्ट", "ओरेकल", "आईबीएम"],
        "answer_en": "Sun Microsystems",
        "answer_hi": "सन माइक्रोसिस्टम्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does HTML mean?",
        "question_hi": "HTML का क्या मतलब है?",
        "options_en": ["Hypertext Markup Language", "Hypertext Modeling Language", "Hypertext Markup Link", "Hypertext Modeling Link"],
        "options_hi": ["हाइपरटेक्स्ट मार्कअप लैंग्वेज", "हाइपरटेक्स्ट मॉडलिंग लैंग्वेज", "हाइपरटेक्स्ट मार्कअप लिंक", "हाइपरटेक्स्ट मॉडलिंग लिंक"],
        "answer_en": "Hypertext Markup Language",
        "answer_hi": "हाइपरटेक्स्ट मार्कअप लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which key combination is used to redo an action?",
        "question_hi": "एक्शन रीडू करने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + Y", "Ctrl + Z", "Ctrl + R", "Ctrl + D"],
        "options_hi": ["Ctrl + Y", "Ctrl + Z", "Ctrl + R", "Ctrl + D"],
        "answer_en": "Ctrl + Y",
        "answer_hi": "Ctrl + Y",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What does USB mean?",
        "question_hi": "USB का क्या मतलब है?",
        "options_en": ["Universal Serial Bus", "Universal System Bus", "United Serial Bus", "United System Bus"],
        "options_hi": ["यूनिवर्सल सीरियल बस", "यूनिवर्सल सिस्टम बस", "यूनाइटेड सीरियल बस", "यूनाइटेड सिस्टम बस"],
        "answer_en": "Universal Serial Bus",
        "answer_hi": "यूनिवर्सल सीरियल बस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which company created first personal computer?",
        "question_hi": "पहला पर्सनल कंप्यूटर किस कंपनी ने बनाया?",
        "options_en": ["Altair", "IBM", "Apple", "Commodore"],
        "options_hi": ["आल्टेयर", "आईबीएम", "एप्पल", "कमोडोर"],
        "answer_en": "Altair",
        "answer_hi": "आल्टेयर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the extension of Access database file?",
        "question_hi": "एक्सेस डेटाबेस फाइल का एक्सटेंशन क्या है?",
        "options_en": [".accdb", ".mdb", ".db", ".sql"],
        "options_hi": [".accdb", ".mdb", ".db", ".sql"],
        "answer_en": ".accdb",
        "answer_hi": ".accdb",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which key is used to cancel current operation?",
        "question_hi": "करंट ऑपरेशन कैंसिल करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Esc", "Enter", "Tab", "Shift"],
        "options_hi": ["एस्क", "एंटर", "टैब", "शिफ्ट"],
        "answer_en": "Esc",
        "answer_hi": "एस्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What does HTTP mean?",
        "question_hi": "HTTP का क्या मतलब है?",
        "options_en": ["Hypertext Transfer Protocol", "Hypertext Transmission Protocol", "Hypertext Transfer Process", "Hypertext Transmission Process"],
        "options_hi": ["हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाइपरटेक्स्ट ट्रांसमिशन प्रोटोकॉल", "हाइपरटेक्स्ट ट्रांसफर प्रोसेस", "हाइपरटेक्स्ट ट्रांसमिशन प्रोसेस"],
        "answer_en": "Hypertext Transfer Protocol",
        "answer_hi": "हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which device scans documents?",
        "question_hi": "कौन सा डिवाइस डॉक्यूमेंट स्कैन करता है?",
        "options_en": ["Scanner", "Printer", "Plotter", "Copier"],
        "options_hi": ["स्कैनर", "प्रिंटर", "प्लॉटर", "कॉपियर"],
        "answer_en": "Scanner",
        "answer_hi": "स्कैनर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is 1 Megabyte equal to?",
        "question_hi": "1 मेगाबाइट किसके बराबर होता है?",
        "options_en": ["1024 Kilobytes", "1000 Kilobytes", "1024 Bytes", "1000 Bytes"],
        "options_hi": ["1024 किलोबाइट्स", "1000 किलोबाइट्स", "1024 बाइट्स", "1000 बाइट्स"],
        "answer_en": "1024 Kilobytes",
        "answer_hi": "1024 किलोबाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which company created Python programming language?",
        "question_hi": "पाइथन प्रोग्रामिंग भाषा किस व्यक्ति/संस्था ने बनाई?",
        "options_en": ["Guido van Rossum", "Microsoft", "Google", "IBM"],
        "options_hi": ["गुइडो वैन रोसुम", "माइक्रोसॉफ्ट", "गूगल", "आईबीएम"],
        "answer_en": "Guido van Rossum",
        "answer_hi": "गुइडो वैन रोसुम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What does CSS mean?",
        "question_hi": "CSS का क्या मतलब है?",
        "options_en": ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Cascading System Sheets"],
        "options_hi": ["कैस्केडिंग स्टाइल शीट्स", "कंप्यूटर स्टाइल शीट्स", "क्रिएटिव स्टाइल शीट्स", "कैस्केडिंग सिस्टम शीट्स"],
        "answer_en": "Cascading Style Sheets",
        "answer_hi": "कैस्केडिंग स्टाइल शीट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which key combination is used to cut selected text?",
        "question_hi": "सेलेक्टेड टेक्स्ट कट करने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
        "options_hi": ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
        "answer_en": "Ctrl + X",
        "answer_hi": "Ctrl + X",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What does HDMI mean?",
        "question_hi": "HDMI का क्या मतलब है?",
        "options_en": ["High Definition Multimedia Interface", "High Definition Media Interface", "High Definition Multimedia Input", "High Definition Media Input"],
        "options_hi": ["हाई डेफिनिशन मल्टीमीडिया इंटरफेस", "हाई डेफिनिशन मीडिया इंटरफेस", "हाई डेफिनिशन मल्टीमीडिया इनपुट", "हाई डेफिनिशन मीडिया इनपुट"],
        "answer_en": "High Definition Multimedia Interface",
        "answer_hi": "हाई डेफिनिशन मल्टीमीडिया इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which company created first supercomputer?",
        "question_hi": "पहला सुपरकंप्यूटर किस कंपनी ने बनाया?",
        "options_en": ["CDC", "IBM", "Cray", "Fujitsu"],
        "options_hi": ["सीडीसी", "आईबीएम", "क्रे", "फुजित्सु"],
        "answer_en": "CDC",
        "answer_hi": "सीडीसी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the extension of text file?",
        "question_hi": "टेक्स्ट फाइल का एक्सटेंशन क्या है?",
        "options_en": [".txt", ".doc", ".rtf", ".text"],
        "options_hi": [".txt", ".doc", ".rtf", ".text"],
        "answer_en": ".txt",
        "answer_hi": ".txt",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which key is used to insert tab space?",
        "question_hi": "टैब स्पेस इन्सर्ट करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Tab", "Space", "Enter", "Shift + Tab"],
        "options_hi": ["टैब", "स्पेस", "एंटर", "शिफ्ट + टैब"],
        "answer_en": "Tab",
        "answer_hi": "टैब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What does FTP mean?",
        "question_hi": "FTP का क्या मतलब है?",
        "options_en": ["File Transfer Protocol", "File Transmission Protocol", "File Transfer Process", "File Transmission Process"],
        "options_hi": ["फाइल ट्रांसफर प्रोटोकॉल", "फाइल ट्रांसमिशन प्रोटोकॉल", "फाइल ट्रांसफर प्रोसेस", "फाइल ट्रांसमिशन प्रोसेस"],
        "answer_en": "File Transfer Protocol",
        "answer_hi": "फाइल ट्रांसफर प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which device is used for video calls?",
        "question_hi": "वीडियो कॉल के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Webcam", "Microphone", "Speaker", "Monitor"],
        "options_hi": ["वेबकैम", "माइक्रोफोन", "स्पीकर", "मॉनिटर"],
        "answer_en": "Webcam",
        "answer_hi": "वेबकैम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is 1 Gigabyte equal to?",
        "question_hi": "1 गीगाबाइट किसके बराबर होता है?",
        "options_en": ["1024 Megabytes", "1000 Megabytes", "1024 Kilobytes", "1000 Kilobytes"],
        "options_hi": ["1024 मेगाबाइट्स", "1000 मेगाबाइट्स", "1024 किलोबाइट्स", "1000 किलोबाइट्स"],
        "answer_en": "1024 Megabytes",
        "answer_hi": "1024 मेगाबाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which company created C programming language?",
        "question_hi": "सी प्रोग्रामिंग भाषा किस कंपनी/व्यक्ति ने बनाई?",
        "options_en": ["Dennis Ritchie", "Microsoft", "IBM", "Bell Labs"],
        "options_hi": ["डेनिस रिची", "माइक्रोसॉफ्ट", "आईबीएम", "बेल लैब्स"],
        "answer_en": "Dennis Ritchie",
        "answer_hi": "डेनिस रिची",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What does SQL mean?",
        "question_hi": "SQL का क्या मतलब है?",
        "options_en": ["Structured Query Language", "Structured Question Language", "Simple Query Language", "Simple Question Language"],
        "options_hi": ["स्ट्रक्चर्ड क्वेरी लैंग्वेज", "स्ट्रक्चर्ड क्वेश्चन लैंग्वेज", "सिंपल क्वेरी लैंग्वेज", "सिंपल क्वेश्चन लैंग्वेज"],
        "answer_en": "Structured Query Language",
        "answer_hi": "स्ट्रक्चर्ड क्वेरी लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which key combination is used to open new document?",
        "question_hi": "नया डॉक्यूमेंट खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + N", "Ctrl + O", "Ctrl + S", "Ctrl + P"],
        "options_hi": ["Ctrl + N", "Ctrl + O", "Ctrl + S", "Ctrl + P"],
        "answer_en": "Ctrl + N",
        "answer_hi": "Ctrl + N",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does Wi-Fi mean?",
        "question_hi": "Wi-Fi का क्या मतलब है?",
        "options_en": ["Wireless Fidelity", "Wireless Frequency", "Wireless Fiber", "Wireless File"],
        "options_hi": ["वायरलेस फिडेलिटी", "वायरलेस फ्रिक्वेंसी", "वायरलेस फाइबर", "वायरलेस फाइल"],
        "answer_en": "Wireless Fidelity",
        "answer_hi": "वायरलेस फिडेलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which company created first computer game?",
        "question_hi": "पहला कंप्यूटर गेम किस कंपनी/व्यक्ति ने बनाया?",
        "options_en": ["William Higinbotham", "Atari", "Nintendo", "Microsoft"],
        "options_hi": ["विलियम हिगिनबोथम", "अटारी", "निन्टेंडो", "माइक्रोसॉफ्ट"],
        "answer_en": "William Higinbotham",
        "answer_hi": "विलियम हिगिनबोथम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the extension of compressed file?",
        "question_hi": "कम्प्रेस्ड फाइल का एक्सटेंशन क्या है?",
        "options_en": [".zip", ".rar", ".7z", "All of these"],
        "options_hi": [".zip", ".rar", ".7z", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which key is used to move cursor without deleting?",
        "question_hi": "बिना डिलीट किए कर्सर मूव करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Arrow Keys", "Delete", "Backspace", "Enter"],
        "options_hi": ["एरो कीज", "डिलीट", "बैकस्पेस", "एंटर"],
        "answer_en": "Arrow Keys",
        "answer_hi": "एरो कीज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What does SMTP mean?",
        "question_hi": "SMTP का क्या मतलब है?",
        "options_en": ["Simple Mail Transfer Protocol", "Simple Message Transfer Protocol", "System Mail Transfer Protocol", "System Message Transfer Protocol"],
        "options_hi": ["सिंपल मेल ट्रांसफर प्रोटोकॉल", "सिंपल मैसेज ट्रांसफर प्रोटोकॉल", "सिस्टम मेल ट्रांसफर प्रोटोकॉल", "सिस्टम मैसेज ट्रांसफर प्रोटोकॉल"],
        "answer_en": "Simple Mail Transfer Protocol",
        "answer_hi": "सिंपल मेल ट्रांसफर प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which device records sound?",
        "question_hi": "कौन सा डिवाइस साउंड रिकॉर्ड करता है?",
        "options_en": ["Microphone", "Speaker", "Headphone", "Webcam"],
        "options_hi": ["माइक्रोफोन", "स्पीकर", "हेडफोन", "वेबकैम"],
        "answer_en": "Microphone",
        "answer_hi": "माइक्रोफोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is 1 Terabyte equal to?",
        "question_hi": "1 टेराबाइट किसके बराबर होता है?",
        "options_en": ["1024 Gigabytes", "1000 Gigabytes", "1024 Megabytes", "1000 Megabytes"],
        "options_hi": ["1024 गीगाबाइट्स", "1000 गीगाबाइट्स", "1024 मेगाबाइट्स", "1000 मेगाबाइट्स"],
        "answer_en": "1024 Gigabytes",
        "answer_hi": "1024 गीगाबाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which company created JavaScript?",
        "question_hi": "जावास्क्रिप्ट किस कंपनी ने बनाई?",
        "options_en": ["Netscape", "Microsoft", "Google", "Sun Microsystems"],
        "options_hi": ["नेटस्केप", "माइक्रोसॉफ्ट", "गूगल", "सन माइक्रोसिस्टम्स"],
        "answer_en": "Netscape",
        "answer_hi": "नेटस्केप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What does XML mean?",
        "question_hi": "XML का क्या मतलब है?",
        "options_en": ["eXtensible Markup Language", "eXtensible Modeling Language", "eXtensible Markup Link", "eXtensible Modeling Link"],
        "options_hi": ["एक्सटेंसिबल मार्कअप लैंग्वेज", "एक्सटेंसिबल मॉडलिंग लैंग्वेज", "एक्सटेंसिबल मार्कअप लिंक", "एक्सटेंसिबल मॉडलिंग लिंक"],
        "answer_en": "eXtensible Markup Language",
        "answer_hi": "एक्सटेंसिबल मार्कअप लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which key combination is used to close application?",
        "question_hi": "एप्लिकेशन बंद करने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Alt + F4", "Ctrl + F4", "Ctrl + W", "All of these"],
        "options_hi": ["Alt + F4", "Ctrl + F4", "Ctrl + W", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What does SSD mean?",
        "question_hi": "SSD का क्या मतलब है?",
        "options_en": ["Solid State Drive", "Solid State Disk", "System State Drive", "System State Disk"],
        "options_hi": ["सॉलिड स्टेट ड्राइव", "सॉलिड स्टेट डिस्क", "सिस्टम स्टेट ड्राइव", "सिस्टम स्टेट डिस्क"],
        "answer_en": "Solid State Drive",
        "answer_hi": "सॉलिड स्टेट ड्राइव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which company created first touchscreen phone?",
        "question_hi": "पहला टचस्क्रीन फोन किस कंपनी ने बनाया?",
        "options_en": ["IBM", "Apple", "Nokia", "Motorola"],
        "options_hi": ["आईबीएम", "एप्पल", "नोकिया", "मोटोरोला"],
        "answer_en": "IBM",
        "answer_hi": "आईबीएम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the extension of image file?",
        "question_hi": "इमेज फाइल का एक्सटेंशन क्या है?",
        "options_en": [".jpg", ".png", ".gif", "All of these"],
        "options_hi": [".jpg", ".png", ".gif", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which key is used to open start menu?",
        "question_hi": "स्टार्ट मेन्यू खोलने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Windows Key", "Ctrl + Esc", "Both", "Alt + S"],
        "options_hi": ["विंडोज की", "Ctrl + Esc", "दोनों", "Alt + S"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What does POP3 mean?",
        "question_hi": "POP3 का क्या मतलब है?",
        "options_en": ["Post Office Protocol 3", "Post Office Process 3", "Post Office Program 3", "Post Office Procedure 3"],
        "options_hi": ["पोस्ट ऑफिस प्रोटोकॉल 3", "पोस्ट ऑफिस प्रोसेस 3", "पोस्ट ऑफिस प्रोग्राम 3", "पोस्ट ऑफिस प्रोसीजर 3"],
        "answer_en": "Post Office Protocol 3",
        "answer_hi": "पोस्ट ऑफिस प्रोटोकॉल 3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which device projects computer screen?",
        "question_hi": "कौन सा डिवाइस कंप्यूटर स्क्रीन प्रोजेक्ट करता है?",
        "options_en": ["Projector", "Monitor", "TV", "All of these"],
        "options_hi": ["प्रोजेक्टर", "मॉनिटर", "टीवी", "ये सभी"],
        "answer_en": "Projector",
        "answer_hi": "प्रोजेक्टर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is 1 Petabyte equal to?",
        "question_hi": "1 पेटाबाइट किसके बराबर होता है?",
        "options_en": ["1024 Terabytes", "1000 Terabytes", "1024 Gigabytes", "1000 Gigabytes"],
        "options_hi": ["1024 टेराबाइट्स", "1000 टेराबाइट्स", "1024 गीगाबाइट्स", "1000 गीगाबाइट्स"],
        "answer_en": "1024 Terabytes",
        "answer_hi": "1024 टेराबाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which company created Ruby programming language?",
        "question_hi": "रूबी प्रोग्रामिंग भाषा किस व्यक्ति ने बनाई?",
        "options_en": ["Yukihiro Matsumoto", "Microsoft", "Google", "IBM"],
        "options_hi": ["युकिहिरो मात्सुमोटो", "माइक्रोसॉफ्ट", "गूगल", "आईबीएम"],
        "answer_en": "Yukihiro Matsumoto",
        "answer_hi": "युकिहिरो मात्सुमोटो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What does API mean?",
        "question_hi": "API का क्या मतलब है?",
        "options_en": ["Application Programming Interface", "Application Program Interface", "Application Programming Input", "Application Program Input"],
        "options_hi": ["एप्लिकेशन प्रोग्रामिंग इंटरफेस", "एप्लिकेशन प्रोग्राम इंटरफेस", "एप्लिकेशन प्रोग्रामिंग इनपुट", "एप्लिकेशन प्रोग्राम इनपुट"],
        "answer_en": "Application Programming Interface",
        "answer_hi": "एप्लिकेशन प्रोग्रामिंग इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which key combination is used to select all?",
        "question_hi": "सभी सेलेक्ट करने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + A", "Ctrl + S", "Ctrl + D", "Ctrl + F"],
        "options_hi": ["Ctrl + A", "Ctrl + S", "Ctrl + D", "Ctrl + F"],
        "answer_en": "Ctrl + A",
        "answer_hi": "Ctrl + A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What does HDD mean?",
        "question_hi": "HDD का क्या मतलब है?",
        "options_en": ["Hard Disk Drive", "Hard Drive Disk", "Hard Data Drive", "Hard Drive Data"],
        "options_hi": ["हार्ड डिस्क ड्राइव", "हार्ड ड्राइव डिस्क", "हार्ड डेटा ड्राइव", "हार्ड ड्राइव डेटा"],
        "answer_en": "Hard Disk Drive",
        "answer_hi": "हार्ड डिस्क ड्राइव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which company created first computer virus?",
        "question_hi": "पहला कंप्यूटर वायरस किस कंपनी/व्यक्ति ने बनाया?",
        "options_en": ["BBN Technologies", "Microsoft", "IBM", "Apple"],
        "options_hi": ["बीबीएन टेक्नोलॉजीज", "माइक्रोसॉफ्ट", "आईबीएम", "एप्पल"],
        "answer_en": "BBN Technologies",
        "answer_hi": "बीबीएन टेक्नोलॉजीज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the extension of audio file?",
        "question_hi": "ऑडियो फाइल का एक्सटेंशन क्या है?",
        "options_en": [".mp3", ".wav", ".aac", "All of these"],
        "options_hi": [".mp3", ".wav", ".aac", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which key is used to scroll up?",
        "question_hi": "स्क्रॉल अप करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Page Up", "Page Down", "Home", "End"],
        "options_hi": ["पेज अप", "पेज डाउन", "होम", "एंड"],
        "answer_en": "Page Up",
        "answer_hi": "पेज अप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What does BIOS mean?",
        "question_hi": "BIOS का क्या मतलब है?",
        "options_en": ["Basic Input Output System", "Basic Input Output Software", "Binary Input Output System", "Binary Input Output Software"],
        "options_hi": ["बेसिक इनपुट आउटपुट सिस्टम", "बेसिक इनपुट आउटपुट सॉफ्टवेयर", "बाइनरी इनपुट आउटपुट सिस्टम", "बाइनरी इनपुट आउटपुट सॉफ्टवेयर"],
        "answer_en": "Basic Input Output System",
        "answer_hi": "बेसिक इनपुट आउटपुट सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which device reads CDs/DVDs?",
        "question_hi": "कौन सा डिवाइस CDs/DVDs पढ़ता है?",
        "options_en": ["Optical Drive", "Hard Disk", "USB Port", "Memory Card Reader"],
        "options_hi": ["ऑप्टिकल ड्राइव", "हार्ड डिस्क", "USB पोर्ट", "मेमोरी कार्ड रीडर"],
        "answer_en": "Optical Drive",
        "answer_hi": "ऑप्टिकल ड्राइव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is 1 Exabyte equal to?",
        "question_hi": "1 एक्साबाइट किसके बराबर होता है?",
        "options_en": ["1024 Petabytes", "1000 Petabytes", "1024 Terabytes", "1000 Terabytes"],
        "options_hi": ["1024 पेटाबाइट्स", "1000 पेटाबाइट्स", "1024 टेराबाइट्स", "1000 टेराबाइट्स"],
        "answer_en": "1024 Petabytes",
        "answer_hi": "1024 पेटाबाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which company created PHP?",
        "question_hi": "PHP किस व्यक्ति ने बनाई?",
        "options_en": ["Rasmus Lerdorf", "Microsoft", "Google", "IBM"],
        "options_hi": ["रैसमस लर्डोर्फ", "माइक्रोसॉफ्ट", "गूगल", "आईबीएम"],
        "answer_en": "Rasmus Lerdorf",
        "answer_hi": "रैसमस लर्डोर्फ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What does DNS mean?",
        "question_hi": "DNS का क्या मतलब है?",
        "options_en": ["Domain Name System", "Domain Name Server", "Domain Network System", "Domain Network Server"],
        "options_hi": ["डोमेन नेम सिस्टम", "डोमेन नेम सर्वर", "डोमेन नेटवर्क सिस्टम", "डोमेन नेटवर्क सर्वर"],
        "answer_en": "Domain Name System",
        "answer_hi": "डोमेन नेम सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which key combination is used to find text?",
        "question_hi": "टेक्स्ट ढूंढने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + R"],
        "options_hi": ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + R"],
        "answer_en": "Ctrl + F",
        "answer_hi": "Ctrl + F",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What does GPU mean?",
        "question_hi": "GPU का क्या मतलब है?",
        "options_en": ["Graphics Processing Unit", "Graphics Processing Unit", "Graphics Program Unit", "Graphics Program Unit"],
        "options_hi": ["ग्राफिक्स प्रोसेसिंग यूनिट", "ग्राफिक्स प्रोसेसिंग यूनिट", "ग्राफिक्स प्रोग्राम यूनिट", "ग्राफिक्स प्रोग्राम यूनिट"],
        "answer_en": "Graphics Processing Unit",
        "answer_hi": "ग्राफिक्स प्रोसेसिंग यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which company created first website?",
        "question_hi": "पहली वेबसाइट किस कंपनी/संस्था ने बनाई?",
        "options_en": ["CERN", "Microsoft", "Google", "Yahoo"],
        "options_hi": ["सर्न", "माइक्रोसॉफ्ट", "गूगल", "याहू"],
        "answer_en": "CERN",
        "answer_hi": "सर्न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the extension of video file?",
        "question_hi": "वीडियो फाइल का एक्सटेंशन क्या है?",
        "options_en": [".mp4", ".avi", ".mov", "All of these"],
        "options_hi": [".mp4", ".avi", ".mov", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which key is used to scroll down?",
        "question_hi": "स्क्रॉल डाउन करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Page Down", "Page Up", "Home", "End"],
        "options_hi": ["पेज डाउन", "पेज अप", "होम", "एंड"],
        "answer_en": "Page Down",
        "answer_hi": "पेज डाउन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What does CMOS mean?",
        "question_hi": "CMOS का क्या मतलब है?",
        "options_en": ["Complementary Metal Oxide Semiconductor", "Complementary Metal Oxide System", "Computer Metal Oxide Semiconductor", "Computer Metal Oxide System"],
        "options_hi": ["कॉम्प्लीमेंटरी मेटल ऑक्साइड सेमीकंडक्टर", "कॉम्प्लीमेंटरी मेटल ऑक्साइड सिस्टम", "कंप्यूटर मेटल ऑक्साइड सेमीकंडक्टर", "कंप्यूटर मेटल ऑक्साइड सिस्टम"],
        "answer_en": "Complementary Metal Oxide Semiconductor",
        "answer_hi": "कॉम्प्लीमेंटरी मेटल ऑक्साइड सेमीकंडक्टर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which device connects multiple computers?",
        "question_hi": "कौन सा डिवाइस मल्टीपल कंप्यूटर जोड़ता है?",
        "options_en": ["Switch", "Router", "Hub", "All of these"],
        "options_hi": ["स्विच", "राउटर", "हब", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is 1 Zettabyte equal to?",
        "question_hi": "1 ज़ेटाबाइट किसके बराबर होता है?",
        "options_en": ["1024 Exabytes", "1000 Exabytes", "1024 Petabytes", "1000 Petabytes"],
        "options_hi": ["1024 एक्साबाइट्स", "1000 एक्साबाइट्स", "1024 पेटाबाइट्स", "1000 पेटाबाइट्स"],
        "answer_en": "1024 Exabytes",
        "answer_hi": "1024 एक्साबाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which company created Swift programming language?",
        "question_hi": "स्विफ्ट प्रोग्रामिंग भाषा किस कंपनी ने बनाई?",
        "options_en": ["Apple", "Microsoft", "Google", "IBM"],
        "options_hi": ["एप्पल", "माइक्रोसॉफ्ट", "गूगल", "आईबीएम"],
        "answer_en": "Apple",
        "answer_hi": "एप्पल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What does VPN mean?",
        "question_hi": "VPN का क्या मतलब है?",
        "options_en": ["Virtual Private Network", "Virtual Public Network", "Virtual Private Node", "Virtual Public Node"],
        "options_hi": ["वर्चुअल प्राइवेट नेटवर्क", "वर्चुअल पब्लिक नेटवर्क", "वर्चुअल प्राइवेट नोड", "वर्चुअल पब्लिक नोड"],
        "answer_en": "Virtual Private Network",
        "answer_hi": "वर्चुअल प्राइवेट नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
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
        "num": 98,
        "question_en": "What does UPS mean?",
        "question_hi": "UPS का क्या मतलब है?",
        "options_en": ["Uninterruptible Power Supply", "Uninterrupted Power Supply", "Universal Power Supply", "Universal Power System"],
        "options_hi": ["अनइंटरप्टिबल पावर सप्लाई", "अनइंटरप्टेड पावर सप्लाई", "यूनिवर्सल पावर सप्लाई", "यूनिवर्सल पावर सिस्टम"],
        "answer_en": "Uninterruptible Power Supply",
        "answer_hi": "अनइंटरप्टिबल पावर सप्लाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which company created first computer monitor?",
        "question_hi": "पहला कंप्यूटर मॉनिटर किस कंपनी ने बनाया?",
        "options_en": ["IBM", "Apple", "Commodore", "Radio Shack"],
        "options_hi": ["आईबीएम", "एप्पल", "कमोडोर", "रेडियो शैक"],
        "answer_en": "IBM",
        "answer_hi": "आईबीएम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the extension of executable file?",
        "question_hi": "एक्जीक्यूटेबल फाइल का एक्सटेंशन क्या है?",
        "options_en": [".exe", ".bat", ".com", "All of these"],
        "options_hi": [".exe", ".bat", ".com", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
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