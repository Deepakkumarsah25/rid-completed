const questions = [
    {
        "num": 1,
        "question_en": "What is the full form of CPU?",
        "question_hi": "CPU का पूरा नाम क्या है?",
        "options_en": ["Central Processing Unit", "Central Program Unit", "Computer Processing Unit", "Computer Program Unit"],
        "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट", "कंप्यूटर प्रोग्राम यूनिट"],
        "answer_en": "Central Processing Unit",
        "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which device is used to input data into a computer?",
        "question_hi": "कंप्यूटर में डेटा इनपुट करने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Keyboard", "Monitor", "Printer", "Speaker"],
        "options_hi": ["कीबोर्ड", "मॉनिटर", "प्रिंटर", "स्पीकर"],
        "answer_en": "Keyboard",
        "answer_hi": "कीबोर्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
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
        "num": 4,
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
        "num": 5,
        "question_en": "Which device displays output from a computer?",
        "question_hi": "कंप्यूटर से आउटपुट प्रदर्शित करने वाला उपकरण कौन सा है?",
        "options_en": ["Monitor", "Keyboard", "Mouse", "Scanner"],
        "options_hi": ["मॉनिटर", "कीबोर्ड", "माउस", "स्कैनर"],
        "answer_en": "Monitor",
        "answer_hi": "मॉनिटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
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
        "num": 7,
        "question_en": "Which device is used to point and click on a computer?",
        "question_hi": "कंप्यूटर पर पॉइंट और क्लिक करने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Mouse", "Keyboard", "Joystick", "Trackball"],
        "options_hi": ["माउस", "कीबोर्ड", "जॉयस्टिक", "ट्रैकबॉल"],
        "answer_en": "Mouse",
        "answer_hi": "माउस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the permanent memory of a computer?",
        "question_hi": "कंप्यूटर की स्थायी मेमोरी क्या है?",
        "options_en": ["Hard Disk", "RAM", "Cache", "Register"],
        "options_hi": ["हार्ड डिस्क", "रैम", "कैश", "रजिस्टर"],
        "answer_en": "Hard Disk",
        "answer_hi": "हार्ड डिस्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which company developed Windows operating system?",
        "question_hi": "विंडोज ऑपरेटिंग सिस्टम किस कंपनी ने विकसित किया?",
        "options_en": ["Microsoft", "Apple", "IBM", "Google"],
        "options_hi": ["माइक्रोसॉफ्ट", "एप्पल", "आईबीएम", "गूगल"],
        "answer_en": "Microsoft",
        "answer_hi": "माइक्रोसॉफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What does CD-ROM stand for?",
        "question_hi": "CD-ROM का पूरा नाम क्या है?",
        "options_en": ["Compact Disc Read-Only Memory", "Compact Disc Random Only Memory", "Computer Disc Read-Only Memory", "Computer Disc Random Only Memory"],
        "options_hi": ["कॉम्पैक्ट डिस्क रीड-ओनली मेमोरी", "कॉम्पैक्ट डिस्क रैंडम ओनली मेमोरी", "कंप्यूटर डिस्क रीड-ओनली मेमोरी", "कंप्यूटर डिस्क रैंडम ओनली मेमोरी"],
        "answer_en": "Compact Disc Read-Only Memory",
        "answer_hi": "कॉम्पैक्ट डिस्क रीड-ओनली मेमोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which device prints documents from a computer?",
        "question_hi": "कंप्यूटर से डॉक्यूमेंट प्रिंट करने वाला उपकरण कौन सा है?",
        "options_en": ["Printer", "Scanner", "Monitor", "Keyboard"],
        "options_hi": ["प्रिंटर", "स्कैनर", "मॉनिटर", "कीबोर्ड"],
        "answer_en": "Printer",
        "answer_hi": "प्रिंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
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
        "num": 13,
        "question_en": "Which key is used to type capital letters?",
        "question_hi": "कैपिटल लेटर्स टाइप करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Shift", "Ctrl", "Alt", "Enter"],
        "options_hi": ["शिफ्ट", "कंट्रोल", "आल्ट", "एंटर"],
        "answer_en": "Shift",
        "answer_hi": "शिफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the temporary memory of a computer?",
        "question_hi": "कंप्यूटर की अस्थायी मेमोरी क्या है?",
        "options_en": ["RAM", "ROM", "Hard Disk", "CD-ROM"],
        "options_hi": ["रैम", "रोम", "हार्ड डिस्क", "सीडी-रोम"],
        "answer_en": "RAM",
        "answer_hi": "रैम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
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
        "num": 16,
        "question_en": "What does DVD stand for?",
        "question_hi": "DVD का पूरा नाम क्या है?",
        "options_en": ["Digital Versatile Disc", "Digital Video Disc", "Digital Versatile Disk", "Digital Video Disk"],
        "options_hi": ["डिजिटल वर्सेटाइल डिस्क", "डिजिटल वीडियो डिस्क", "डिजिटल वर्सेटाइल डिस्क", "डिजिटल वीडियो डिस्क"],
        "answer_en": "Digital Versatile Disc",
        "answer_hi": "डिजिटल वर्सेटाइल डिस्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which device scans documents into a computer?",
        "question_hi": "डॉक्यूमेंट को कंप्यूटर में स्कैन करने वाला उपकरण कौन सा है?",
        "options_en": ["Scanner", "Printer", "Monitor", "Keyboard"],
        "options_hi": ["स्कैनर", "प्रिंटर", "मॉनिटर", "कीबोर्ड"],
        "answer_en": "Scanner",
        "answer_hi": "स्कैनर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does VDU stand for?",
        "question_hi": "VDU का पूरा नाम क्या है?",
        "options_en": ["Visual Display Unit", "Video Display Unit", "Visual Data Unit", "Video Data Unit"],
        "options_hi": ["विजुअल डिस्प्ले यूनिट", "वीडियो डिस्प्ले यूनिट", "विजुअल डेटा यूनिट", "वीडियो डेटा यूनिट"],
        "answer_en": "Visual Display Unit",
        "answer_hi": "विजुअल डिस्प्ले यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which key is used to delete text to the right of cursor?",
        "question_hi": "कर्सर के दाईं ओर टेक्स्ट डिलीट करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Delete", "Backspace", "Shift", "Enter"],
        "options_hi": ["डिलीट", "बैकस्पेस", "शिफ्ट", "एंटर"],
        "answer_en": "Delete",
        "answer_hi": "डिलीट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the main circuit board of a computer called?",
        "question_hi": "कंप्यूटर के मुख्य सर्किट बोर्ड को क्या कहा जाता है?",
        "options_en": ["Motherboard", "CPU", "RAM", "Hard Disk"],
        "options_hi": ["मदरबोर्ड", "सीपीयू", "रैम", "हार्ड डिस्क"],
        "answer_en": "Motherboard",
        "answer_hi": "मदरबोर्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which company developed Android OS?",
        "question_hi": "एंड्रॉइड OS किस कंपनी ने विकसित किया?",
        "options_en": ["Google", "Apple", "Microsoft", "Samsung"],
        "options_hi": ["गूगल", "एप्पल", "माइक्रोसॉफ्ट", "सैमसंग"],
        "answer_en": "Google",
        "answer_hi": "गूगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
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
        "num": 23,
        "question_en": "Which device produces sound output from a computer?",
        "question_hi": "कंप्यूटर से साउंड आउटपुट प्रदान करने वाला उपकरण कौन सा है?",
        "options_en": ["Speaker", "Microphone", "Headphone", "All of these"],
        "options_hi": ["स्पीकर", "माइक्रोफोन", "हेडफोन", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What does ALU stand for?",
        "question_hi": "ALU का पूरा नाम क्या है?",
        "options_en": ["Arithmetic Logic Unit", "Array Logic Unit", "Arithmetic Local Unit", "Array Local Unit"],
        "options_hi": ["अरिथमेटिक लॉजिक यूनिट", "ऐरे लॉजिक यूनिट", "अरिथमेटिक लोकल यूनिट", "ऐरे लोकल यूनिट"],
        "answer_en": "Arithmetic Logic Unit",
        "answer_hi": "अरिथमेटिक लॉजिक यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which key is used to delete text to the left of cursor?",
        "question_hi": "कर्सर के बाईं ओर टेक्स्ट डिलीट करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Backspace", "Delete", "Shift", "Enter"],
        "options_hi": ["बैकस्पेस", "डिलीट", "शिफ्ट", "एंटर"],
        "answer_en": "Backspace",
        "answer_hi": "बैकस्पेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the smallest unit of computer memory?",
        "question_hi": "कंप्यूटर मेमोरी की सबसे छोटी इकाई क्या है?",
        "options_en": ["Bit", "Byte", "Nibble", "Word"],
        "options_hi": ["बिट", "बाइट", "निबल", "वर्ड"],
        "answer_en": "Bit",
        "answer_hi": "बिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which company developed Linux OS?",
        "question_hi": "लिनक्स OS किसने विकसित किया?",
        "options_en": ["Linus Torvalds", "Microsoft", "IBM", "Google"],
        "options_hi": ["लिनस टोरवाल्ड्स", "माइक्रोसॉफ्ट", "आईबीएम", "गूगल"],
        "answer_en": "Linus Torvalds",
        "answer_hi": "लिनस टोरवाल्ड्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
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
        "num": 29,
        "question_en": "Which device captures images for computer input?",
        "question_hi": "कंप्यूटर इनपुट के लिए इमेज कैप्चर करने वाला उपकरण कौन सा है?",
        "options_en": ["Webcam", "Scanner", "Printer", "Monitor"],
        "options_hi": ["वेबकैम", "स्कैनर", "प्रिंटर", "मॉनिटर"],
        "answer_en": "Webcam",
        "answer_hi": "वेबकैम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
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
        "num": 31,
        "question_en": "Which key is used to move cursor to beginning of line?",
        "question_hi": "कर्सर को लाइन की शुरुआत में ले जाने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Home", "End", "Page Up", "Page Down"],
        "options_hi": ["होम", "एंड", "पेज अप", "पेज डाउन"],
        "answer_en": "Home",
        "answer_hi": "होम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
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
        "num": 33,
        "question_en": "Which company developed MS-DOS?",
        "question_hi": "MS-DOS किस कंपनी ने विकसित किया?",
        "options_en": ["Microsoft", "Apple", "IBM", "Google"],
        "options_hi": ["माइक्रोसॉफ्ट", "एप्पल", "आईबीएम", "गूगल"],
        "answer_en": "Microsoft",
        "answer_hi": "माइक्रोसॉफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What does HDD stand for?",
        "question_hi": "HDD का पूरा नाम क्या है?",
        "options_en": ["Hard Disk Drive", "Hard Drive Disk", "High Density Disk", "High Density Drive"],
        "options_hi": ["हार्ड डिस्क ड्राइव", "हार्ड ड्राइव डिस्क", "हाई डेंसिटी डिस्क", "हाई डेंसिटी ड्राइव"],
        "answer_en": "Hard Disk Drive",
        "answer_hi": "हार्ड डिस्क ड्राइव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which device is used to play games on computer?",
        "question_hi": "कंप्यूटर पर गेम खेलने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Joystick", "Keyboard", "Mouse", "All of these"],
        "options_hi": ["जॉयस्टिक", "कीबोर्ड", "माउस", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does LCD stand for?",
        "question_hi": "LCD का पूरा नाम क्या है?",
        "options_en": ["Liquid Crystal Display", "Liquid Crystal Device", "Light Crystal Display", "Light Crystal Device"],
        "options_hi": ["लिक्विड क्रिस्टल डिस्प्ले", "लिक्विड क्रिस्टल डिवाइस", "लाइट क्रिस्टल डिस्प्ले", "लाइट क्रिस्टल डिवाइस"],
        "answer_en": "Liquid Crystal Display",
        "answer_hi": "लिक्विड क्रिस्टल डिस्प्ले",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which key is used to move cursor to end of line?",
        "question_hi": "कर्सर को लाइन के अंत में ले जाने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["End", "Home", "Page Up", "Page Down"],
        "options_hi": ["एंड", "होम", "पेज अप", "पेज डाउन"],
        "answer_en": "End",
        "answer_hi": "एंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
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
        "num": 39,
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
        "num": 40,
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
        "num": 41,
        "question_en": "Which device records sound input for computer?",
        "question_hi": "कंप्यूटर के लिए साउंड इनपुट रिकॉर्ड करने वाला उपकरण कौन सा है?",
        "options_en": ["Microphone", "Speaker", "Headphone", "Webcam"],
        "options_hi": ["माइक्रोफोन", "स्पीकर", "हेडफोन", "वेबकैम"],
        "answer_en": "Microphone",
        "answer_hi": "माइक्रोफोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
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
        "num": 43,
        "question_en": "Which key is used to cancel current operation?",
        "question_hi": "वर्तमान ऑपरेशन कैंसल करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Escape", "Enter", "Tab", "Shift"],
        "options_hi": ["एस्केप", "एंटर", "टैब", "शिफ्ट"],
        "answer_en": "Escape",
        "answer_hi": "एस्केप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is 1 megabyte equal to?",
        "question_hi": "1 मेगाबाइट किसके बराबर होता है?",
        "options_en": ["1024 kilobytes", "1000 kilobytes", "2048 kilobytes", "2000 kilobytes"],
        "options_hi": ["1024 किलोबाइट्स", "1000 किलोबाइट्स", "2048 किलोबाइट्स", "2000 किलोबाइट्स"],
        "answer_en": "1024 kilobytes",
        "answer_hi": "1024 किलोबाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which company developed MS Office?",
        "question_hi": "MS Office किस कंपनी ने विकसित किया?",
        "options_en": ["Microsoft", "Apple", "Google", "IBM"],
        "options_hi": ["माइक्रोसॉफ्ट", "एप्पल", "गूगल", "आईबीएम"],
        "answer_en": "Microsoft",
        "answer_hi": "माइक्रोसॉफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
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
        "num": 47,
        "question_en": "Which device is used for wireless internet connection?",
        "question_hi": "वायरलेस इंटरनेट कनेक्शन के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Wi-Fi Router", "Modem", "Switch", "All of these"],
        "options_hi": ["वाई-फाई राउटर", "मॉडेम", "स्विच", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
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
        "question_en": "Which key is used to insert tab space?",
        "question_hi": "टैब स्पेस इन्सर्ट करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Tab", "Space", "Enter", "Shift"],
        "options_hi": ["टैब", "स्पेस", "एंटर", "शिफ्ट"],
        "answer_en": "Tab",
        "answer_hi": "टैब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is 1 gigabyte equal to?",
        "question_hi": "1 गीगाबाइट किसके बराबर होता है?",
        "options_en": ["1024 megabytes", "1000 megabytes", "2048 megabytes", "2000 megabytes"],
        "options_hi": ["1024 मेगाबाइट्स", "1000 मेगाबाइट्स", "2048 मेगाबाइट्स", "2000 मेगाबाइट्स"],
        "answer_en": "1024 megabytes",
        "answer_hi": "1024 मेगाबाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which company developed Google Chrome?",
        "question_hi": "गूगल क्रोम किस कंपनी ने विकसित किया?",
        "options_en": ["Google", "Microsoft", "Apple", "Mozilla"],
        "options_hi": ["गूगल", "माइक्रोसॉफ्ट", "एप्पल", "मोज़िला"],
        "answer_en": "Google",
        "answer_hi": "गूगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
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
        "num": 53,
        "question_en": "Which device connects computer to telephone line?",
        "question_hi": "कंप्यूटर को टेलीफोन लाइन से जोड़ने वाला उपकरण कौन सा है?",
        "options_en": ["Modem", "Router", "Switch", "Hub"],
        "options_hi": ["मॉडेम", "राउटर", "स्विच", "हब"],
        "answer_en": "Modem",
        "answer_hi": "मॉडेम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What does HTTP stand for?",
        "question_hi": "HTTP का पूरा नाम क्या है?",
        "options_en": ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HighText Transfer Protocol", "HighText Transmission Protocol"],
        "options_hi": ["हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाइपरटेक्स्ट ट्रांसमिशन प्रोटोकॉल", "हाईटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाईटेक्स्ट ट्रांसमिशन प्रोटोकॉल"],
        "answer_en": "HyperText Transfer Protocol",
        "answer_hi": "हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which key is used to execute command or go to next line?",
        "question_hi": "कमांड एक्जीक्यूट करने या अगली लाइन पर जाने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Enter", "Tab", "Space", "Shift"],
        "options_hi": ["एंटर", "टैब", "स्पेस", "शिफ्ट"],
        "answer_en": "Enter",
        "answer_hi": "एंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is 1 terabyte equal to?",
        "question_hi": "1 टेराबाइट किसके बराबर होता है?",
        "options_en": ["1024 gigabytes", "1000 gigabytes", "2048 gigabytes", "2000 gigabytes"],
        "options_hi": ["1024 गीगाबाइट्स", "1000 गीगाबाइट्स", "2048 गीगाबाइट्स", "2000 गीगाबाइट्स"],
        "answer_en": "1024 gigabytes",
        "answer_hi": "1024 गीगाबाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which company developed Firefox browser?",
        "question_hi": "फायरफॉक्स ब्राउज़र किस कंपनी ने विकसित किया?",
        "options_en": ["Mozilla", "Google", "Microsoft", "Apple"],
        "options_hi": ["मोज़िला", "गूगल", "माइक्रोसॉफ्ट", "एप्पल"],
        "answer_en": "Mozilla",
        "answer_hi": "मोज़िला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
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
        "num": 59,
        "question_en": "Which device protects computer from power fluctuations?",
        "question_hi": "पावर फ्लक्चुएशन से कंप्यूटर को सुरक्षित रखने वाला उपकरण कौन सा है?",
        "options_en": ["UPS", "Stabilizer", "Both", "Modem"],
        "options_hi": ["यूपीएस", "स्टेबलाइज़र", "दोनों", "मॉडेम"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What does WWW stand for?",
        "question_hi": "WWW का पूरा नाम क्या है?",
        "options_en": ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"],
        "options_hi": ["वर्ल्ड वाइड वेब", "वर्ल्ड वेब वाइड", "वाइड वर्ल्ड वेब", "वेब वर्ल्ड वाइड"],
        "answer_en": "World Wide Web",
        "answer_hi": "वर्ल्ड वाइड वेब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which key is used to select multiple items?",
        "question_hi": "कई आइटम्स सिलेक्ट करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Ctrl", "Shift", "Alt", "Enter"],
        "options_hi": ["कंट्रोल", "शिफ्ट", "आल्ट", "एंटर"],
        "answer_en": "Ctrl",
        "answer_hi": "कंट्रोल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the fastest memory in computer?",
        "question_hi": "कंप्यूटर में सबसे तेज मेमोरी कौन सी है?",
        "options_en": ["Cache", "RAM", "Hard Disk", "SSD"],
        "options_hi": ["कैश", "रैम", "हार्ड डिस्क", "एसएसडी"],
        "answer_en": "Cache",
        "answer_hi": "कैश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which company developed Safari browser?",
        "question_hi": "सफारी ब्राउज़र किस कंपनी ने विकसित किया?",
        "options_en": ["Apple", "Google", "Microsoft", "Mozilla"],
        "options_hi": ["एप्पल", "गूगल", "माइक्रोसॉफ्ट", "मोज़िला"],
        "answer_en": "Apple",
        "answer_hi": "एप्पल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
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
        "num": 65,
        "question_en": "Which device connects multiple computers in network?",
        "question_hi": "नेटवर्क में कई कंप्यूटरों को जोड़ने वाला उपकरण कौन सा है?",
        "options_en": ["Switch", "Router", "Modem", "All of these"],
        "options_hi": ["स्विच", "राउटर", "मॉडेम", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What does ISP stand for?",
        "question_hi": "ISP का पूरा नाम क्या है?",
        "options_en": ["Internet Service Provider", "Internet Service Protocol", "International Service Provider", "International Service Protocol"],
        "options_hi": ["इंटरनेट सर्विस प्रोवाइडर", "इंटरनेट सर्विस प्रोटोकॉल", "इंटरनेशनल सर्विस प्रोवाइडर", "इंटरनेशनल सर्विस प्रोटोकॉल"],
        "answer_en": "Internet Service Provider",
        "answer_hi": "इंटरनेट सर्विस प्रोवाइडर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which key combination is used to copy?",
        "question_hi": "कॉपी करने के लिए किस की कॉम्बिनेशन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"],
        "options_hi": ["कंट्रोल + सी", "कंट्रोल + वी", "कंट्रोल + एक्स", "कंट्रोल + जेड"],
        "answer_en": "Ctrl + C",
        "answer_hi": "कंट्रोल + सी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the volatile memory?",
        "question_hi": "वोलेटाइल मेमोरी कौन सी है?",
        "options_en": ["RAM", "ROM", "Hard Disk", "CD-ROM"],
        "options_hi": ["रैम", "रोम", "हार्ड डिस्क", "सीडी-रोम"],
        "answer_en": "RAM",
        "answer_hi": "रैम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which company developed Internet Explorer?",
        "question_hi": "इंटरनेट एक्सप्लोरर किस कंपनी ने विकसित किया?",
        "options_en": ["Microsoft", "Google", "Apple", "Mozilla"],
        "options_hi": ["माइक्रोसॉफ्ट", "गूगल", "एप्पल", "मोज़िला"],
        "answer_en": "Microsoft",
        "answer_hi": "माइक्रोसॉफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
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
        "num": 71,
        "question_en": "Which device converts digital to analog signals?",
        "question_hi": "डिजिटल को एनालॉग सिग्नल में परिवर्तित करने वाला उपकरण कौन सा है?",
        "options_en": ["Modem", "Router", "Switch", "Hub"],
        "options_hi": ["मॉडेम", "राउटर", "स्विच", "हब"],
        "answer_en": "Modem",
        "answer_hi": "मॉडेम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
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
        "num": 73,
        "question_en": "Which key combination is used to paste?",
        "question_hi": "पेस्ट करने के लिए किस की कॉम्बिनेशन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + Z"],
        "options_hi": ["कंट्रोल + वी", "कंट्रोल + सी", "कंट्रोल + एक्स", "कंट्रोल + जेड"],
        "answer_en": "Ctrl + V",
        "answer_hi": "कंट्रोल + वी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the non-volatile memory?",
        "question_hi": "नॉन-वोलेटाइल मेमोरी कौन सी है?",
        "options_en": ["ROM", "RAM", "Cache", "Register"],
        "options_hi": ["रोम", "रैम", "कैश", "रजिस्टर"],
        "answer_en": "ROM",
        "answer_hi": "रोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which company developed Microsoft Edge?",
        "question_hi": "माइक्रोसॉफ्ट एज किस कंपनी ने विकसित किया?",
        "options_en": ["Microsoft", "Google", "Apple", "Mozilla"],
        "options_hi": ["माइक्रोसॉफ्ट", "गूगल", "एप्पल", "मोज़िला"],
        "answer_en": "Microsoft",
        "answer_hi": "माइक्रोसॉफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
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
        "num": 77,
        "question_en": "Which device provides backup power?",
        "question_hi": "बैकअप पावर प्रदान करने वाला उपकरण कौन सा है?",
        "options_en": ["UPS", "Stabilizer", "SMPS", "Modem"],
        "options_hi": ["यूपीएस", "स्टेबलाइज़र", "एसएमपीएस", "मॉडेम"],
        "answer_en": "UPS",
        "answer_hi": "यूपीएस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
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
        "num": 79,
        "question_en": "Which key combination is used to cut?",
        "question_hi": "कट करने के लिए किस की कॉम्बिनेशन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
        "options_hi": ["कंट्रोल + एक्स", "कंट्रोल + सी", "कंट्रोल + वी", "कंट्रोल + जेड"],
        "answer_en": "Ctrl + X",
        "answer_hi": "कंट्रोल + एक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the read-only memory?",
        "question_hi": "रीड-ओनली मेमोरी कौन सी है?",
        "options_en": ["ROM", "RAM", "Hard Disk", "SSD"],
        "options_hi": ["रोम", "रैम", "हार्ड डिस्क", "एसएसडी"],
        "answer_en": "ROM",
        "answer_hi": "रोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which company developed Adobe Photoshop?",
        "question_hi": "एडोब फोटोशॉप किस कंपनी ने विकसित किया?",
        "options_en": ["Adobe", "Microsoft", "Google", "Apple"],
        "options_hi": ["एडोब", "माइक्रोसॉफ्ट", "गूगल", "एप्पल"],
        "answer_en": "Adobe",
        "answer_hi": "एडोब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
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
        "num": 83,
        "question_en": "Which device cools the computer?",
        "question_hi": "कंप्यूटर को ठंडा करने वाला उपकरण कौन सा है?",
        "options_en": ["Cooling Fan", "UPS", "SMPS", "Stabilizer"],
        "options_hi": ["कूलिंग फैन", "यूपीएस", "एसएमपीएस", "स्टेबलाइज़र"],
        "answer_en": "Cooling Fan",
        "answer_hi": "कूलिंग फैन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
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
        "num": 85,
        "question_en": "Which key combination is used to undo?",
        "question_hi": "अनडू करने के लिए किस की कॉम्बिनेशन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + Z", "Ctrl + Y", "Ctrl + X", "Ctrl + C"],
        "options_hi": ["कंट्रोल + जेड", "कंट्रोल + वाई", "कंट्रोल + एक्स", "कंट्रोल + सी"],
        "answer_en": "Ctrl + Z",
        "answer_hi": "कंट्रोल + जेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is random access memory?",
        "question_hi": "रैंडम एक्सेस मेमोरी कौन सी है?",
        "options_en": ["RAM", "ROM", "Hard Disk", "CD-ROM"],
        "options_hi": ["रैम", "रोम", "हार्ड डिस्क", "सीडी-रोम"],
        "answer_en": "RAM",
        "answer_hi": "रैम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which company developed WhatsApp?",
        "question_hi": "व्हाट्सएप किस कंपनी ने विकसित किया?",
        "options_en": ["Facebook (Meta)", "Google", "Microsoft", "Apple"],
        "options_hi": ["फेसबुक (मेटा)", "गूगल", "माइक्रोसॉफ्ट", "एप्पल"],
        "answer_en": "Facebook (Meta)",
        "answer_hi": "फेसबुक (मेटा)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
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
        "num": 89,
        "question_en": "Which device supplies power to computer?",
        "question_hi": "कंप्यूटर को पावर सप्लाई करने वाला उपकरण कौन सा है?",
        "options_en": ["SMPS", "UPS", "Stabilizer", "Modem"],
        "options_hi": ["एसएमपीएस", "यूपीएस", "स्टेबलाइज़र", "मॉडेम"],
        "answer_en": "SMPS",
        "answer_hi": "एसएमपीएस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What does WiFi stand for?",
        "question_hi": "WiFi का पूरा नाम क्या है?",
        "options_en": ["Wireless Fidelity", "Wireless Frequency", "Wireless Fiber", "Wireless File"],
        "options_hi": ["वायरलेस फिडेलिटी", "वायरलेस फ्रीक्वेंसी", "वायरलेस फाइबर", "वायरलेस फाइल"],
        "answer_en": "Wireless Fidelity",
        "answer_hi": "वायरलेस फिडेलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which key combination is used to redo?",
        "question_hi": "रीडू करने के लिए किस की कॉम्बिनेशन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + Y", "Ctrl + Z", "Ctrl + X", "Ctrl + C"],
        "options_hi": ["कंट्रोल + वाई", "कंट्रोल + जेड", "कंट्रोल + एक्स", "कंट्रोल + सी"],
        "answer_en": "Ctrl + Y",
        "answer_hi": "कंट्रोल + वाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is optical storage device?",
        "question_hi": "ऑप्टिकल स्टोरेज डिवाइस कौन सा है?",
        "options_en": ["CD-ROM", "Hard Disk", "USB Drive", "SSD"],
        "options_hi": ["सीडी-रोम", "हार्ड डिस्क", "यूएसबी ड्राइव", "एसएसडी"],
        "answer_en": "CD-ROM",
        "answer_hi": "सीडी-रोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which company developed YouTube?",
        "question_hi": "YouTube किस कंपनी ने विकसित किया?",
        "options_en": ["Google", "Microsoft", "Apple", "Facebook"],
        "options_hi": ["गूगल", "माइक्रोसॉफ्ट", "एप्पल", "फेसबुक"],
        "answer_en": "Google",
        "answer_hi": "गूगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
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
        "num": 95,
        "question_en": "Which device provides internet connectivity?",
        "question_hi": "इंटरनेट कनेक्टिविटी प्रदान करने वाला उपकरण कौन सा है?",
        "options_en": ["Router", "Switch", "Hub", "All of these"],
        "options_hi": ["राउटर", "स्विच", "हब", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
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
        "num": 97,
        "question_en": "Which key combination is used to save?",
        "question_hi": "सेव करने के लिए किस की कॉम्बिनेशन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + S", "Ctrl + P", "Ctrl + O", "Ctrl + N"],
        "options_hi": ["कंट्रोल + एस", "कंट्रोल + पी", "कंट्रोल + ओ", "कंट्रोल + एन"],
        "answer_en": "Ctrl + S",
        "answer_hi": "कंट्रोल + एस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is magnetic storage device?",
        "question_hi": "मैग्नेटिक स्टोरेज डिवाइस कौन सा है?",
        "options_en": ["Hard Disk", "CD-ROM", "DVD", "Blu-ray"],
        "options_hi": ["हार्ड डिस्क", "सीडी-रोम", "डीवीडी", "ब्लू-रे"],
        "answer_en": "Hard Disk",
        "answer_hi": "हार्ड डिस्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which company developed Facebook?",
        "question_hi": "फेसबुक किस कंपनी ने विकसित किया?",
        "options_en": ["Meta (Facebook)", "Google", "Microsoft", "Apple"],
        "options_hi": ["मेटा (फेसबुक)", "गूगल", "माइक्रोसॉफ्ट", "एप्पल"],
        "answer_en": "Meta (Facebook)",
        "answer_hi": "मेटा (फेसबुक)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What does CSS stand for?",
        "question_hi": "CSS का पूरा नाम क्या है?",
        "options_en": ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        "options_hi": ["कैस्केडिंग स्टाइल शीट्स", "कंप्यूटर स्टाइल शीट्स", "क्रिएटिव स्टाइल शीट्स", "कलरफुल स्टाइल शीट्स"],
        "answer_en": "Cascading Style Sheets",
        "answer_hi": "कैस्केडिंग स्टाइल शीट्स",
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