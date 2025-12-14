const questions = [
    {
        "num": 1,
        "question_en": "Which key is used to create an indentation in a document?",
        "question_hi": "डॉक्यूमेंट में इंडेंटेशन बनाने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["Tab", "Space", "Enter", "Shift"],
        "options_hi": ["टैब", "स्पेस", "एंटर", "शिफ्ट"],
        "answer_en": "Tab",
        "answer_hi": "टैब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the unit of measurement for display resolution?",
        "question_hi": "डिस्प्ले रिज़ॉल्यूशन के मापन की इकाई क्या है?",
        "options_en": ["Pixels", "Hertz", "Bits", "Bytes"],
        "options_hi": ["पिक्सेल", "हर्ट्ज", "बिट्स", "बाइट्स"],
        "answer_en": "Pixels",
        "answer_hi": "पिक्सेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which company developed the first computer with a color display?",
        "question_hi": "पहला कलर डिस्प्ले वाला कंप्यूटर किस कंपनी ने विकसित किया?",
        "options_en": ["Apple", "IBM", "Commodore", "Tandy"],
        "options_hi": ["एप्पल", "आईबीएम", "कमोडोर", "टैंडी"],
        "answer_en": "Apple",
        "answer_hi": "एप्पल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What does PPT stand for?",
        "question_hi": "PPT का क्या अर्थ है?",
        "options_en": ["PowerPoint Presentation", "PowerPoint Template", "Presentation File", "PowerPoint File"],
        "options_hi": ["पावरपॉइंट प्रेजेंटेशन", "पावरपॉइंट टेम्पलेट", "प्रेजेंटेशन फाइल", "पावरपॉइंट फाइल"],
        "answer_en": "PowerPoint Presentation",
        "answer_hi": "पावरपॉइंट प्रेजेंटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which device is used to connect a computer to a telephone line?",
        "question_hi": "कंप्यूटर को टेलीफोन लाइन से जोड़ने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Modem", "Router", "Switch", "Hub"],
        "options_hi": ["मॉडेम", "राउटर", "स्विच", "हब"],
        "answer_en": "Modem",
        "answer_hi": "मॉडेम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the full form of APU?",
        "question_hi": "APU का पूर्ण रूप क्या है?",
        "options_en": ["Accelerated Processing Unit", "Advanced Processing Unit", "Application Processing Unit", "All Purpose Unit"],
        "options_hi": ["एक्सीलरेटेड प्रोसेसिंग यूनिट", "एडवांस्ड प्रोसेसिंग यूनिट", "एप्लिकेशन प्रोसेसिंग यूनिट", "ऑल पर्पज यूनिट"],
        "answer_en": "Accelerated Processing Unit",
        "answer_hi": "एक्सीलरेटेड प्रोसेसिंग यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which key combination is used to open a new tab in browser?",
        "question_hi": "ब्राउज़र में नया टैब खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + T", "Ctrl + N", "Ctrl + W", "Ctrl + Tab"],
        "options_hi": ["Ctrl + T", "Ctrl + N", "Ctrl + W", "Ctrl + Tab"],
        "answer_en": "Ctrl + T",
        "answer_hi": "Ctrl + T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does NAS stand for in storage?",
        "question_hi": "स्टोरेज में NAS का क्या अर्थ है?",
        "options_en": ["Network Attached Storage", "Network Access Storage", "Network Area Storage", "Network Available Storage"],
        "options_hi": ["नेटवर्क अटैच्ड स्टोरेज", "नेटवर्क एक्सेस स्टोरेज", "नेटवर्क एरिया स्टोरेज", "नेटवर्क अवेलेबल स्टोरेज"],
        "answer_en": "Network Attached Storage",
        "answer_hi": "नेटवर्क अटैच्ड स्टोरेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which company created the first computer drawing tablet?",
        "question_hi": "पहला कंप्यूटर ड्राइंग टैबलेट किस कंपनी ने बनाया?",
        "options_en": ["Wacom", "Apple", "Microsoft", "IBM"],
        "options_hi": ["वैकॉम", "एप्पल", "माइक्रोसॉफ्ट", "आईबीएम"],
        "answer_en": "Wacom",
        "answer_hi": "वैकॉम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the file extension for a Windows media file?",
        "question_hi": "विंडोज मीडिया फाइल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".wmv", ".mp4", ".avi", ".mov"],
        "options_hi": [".wmv", ".mp4", ".avi", ".mov"],
        "answer_en": ".wmv",
        "answer_hi": ".wmv",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which key is used to move cursor to the beginning of document?",
        "question_hi": "कर्सर को डॉक्यूमेंट की शुरुआत में ले जाने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["Ctrl + Home", "Home", "Page Up", "Ctrl + Page Up"],
        "options_hi": ["Ctrl + Home", "Home", "Page Up", "Ctrl + Page Up"],
        "answer_en": "Ctrl + Home",
        "answer_hi": "Ctrl + Home",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What does SMTP use for email transmission?",
        "question_hi": "ईमेल ट्रांसमिशन के लिए SMTP क्या उपयोग करता है?",
        "options_en": ["Port 25", "Port 80", "Port 443", "Port 21"],
        "options_hi": ["पोर्ट 25", "पोर्ट 80", "पोर्ट 443", "पोर्ट 21"],
        "answer_en": "Port 25",
        "answer_hi": "पोर्ट 25",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which device is used to measure CPU temperature?",
        "question_hi": "CPU तापमान मापने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Thermal Sensor", "Multimeter", "Thermometer", "All of these"],
        "options_hi": ["थर्मल सेंसर", "मल्टीमीटर", "थर्मामीटर", "ये सभी"],
        "answer_en": "Thermal Sensor",
        "answer_hi": "थर्मल सेंसर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the standard size of a mini CD?",
        "question_hi": "मिनी CD का मानक आकार क्या है?",
        "options_en": ["185 MB", "210 MB", "650 MB", "700 MB"],
        "options_hi": ["185 MB", "210 MB", "650 MB", "700 MB"],
        "answer_en": "185 MB",
        "answer_hi": "185 MB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which company developed the first computer with touchpad?",
        "question_hi": "पहला टचपैड वाला कंप्यूटर किस कंपनी ने विकसित किया?",
        "options_en": ["Apple", "IBM", "Dell", "Compaq"],
        "options_hi": ["एप्पल", "आईबीएम", "डेल", "कॉम्पैक"],
        "answer_en": "Apple",
        "answer_hi": "एप्पल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does XLS stand for?",
        "question_hi": "XLS का क्या अर्थ है?",
        "options_en": ["Excel Spreadsheet", "Extended Legacy Spreadsheet", "Excel Legacy Spreadsheet", "Extended Spreadsheet"],
        "options_hi": ["एक्सेल स्प्रेडशीट", "एक्सटेंडेड लेगेसी स्प्रेडशीट", "एक्सेल लेगेसी स्प्रेडशीट", "एक्सटेंडेड स्प्रेडशीट"],
        "answer_en": "Excel Spreadsheet",
        "answer_hi": "एक्सेल स्प्रेडशीट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which key combination is used to close current tab in browser?",
        "question_hi": "ब्राउज़र में करंट टैब बंद करने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + W", "Ctrl + F4", "Ctrl + Q", "Both Ctrl+W and Ctrl+F4"],
        "options_hi": ["Ctrl + W", "Ctrl + F4", "Ctrl + Q", "Ctrl+W और Ctrl+F4 दोनों"],
        "answer_en": "Both Ctrl+W and Ctrl+F4",
        "answer_hi": "Ctrl+W और Ctrl+F4 दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does DAS stand for in storage?",
        "question_hi": "स्टोरेज में DAS का क्या अर्थ है?",
        "options_en": ["Direct Attached Storage", "Direct Access Storage", "Digital Attached Storage", "Digital Access Storage"],
        "options_hi": ["डायरेक्ट अटैच्ड स्टोरेज", "डायरेक्ट एक्सेस स्टोरेज", "डिजिटल अटैच्ड स्टोरेज", "डिजिटल एक्सेस स्टोरेज"],
        "answer_en": "Direct Attached Storage",
        "answer_hi": "डायरेक्ट अटैच्ड स्टोरेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which company created the first computer touchscreen monitor?",
        "question_hi": "पहला कंप्यूटर टचस्क्रीन मॉनिटर किस कंपनी ने बनाया?",
        "options_en": ["HP", "IBM", "Apple", "Microsoft"],
        "options_hi": ["एचपी", "आईबीएम", "एप्पल", "माइक्रोसॉफ्ट"],
        "answer_en": "HP",
        "answer_hi": "एचपी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the file extension for a Windows log file?",
        "question_hi": "विंडोज लॉग फाइल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".log", ".txt", ".logfile", ".lfg"],
        "options_hi": [".log", ".txt", ".logfile", ".lfg"],
        "answer_en": ".log",
        "answer_hi": ".log",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which key is used to move cursor to the end of document?",
        "question_hi": "कर्सर को डॉक्यूमेंट के अंत में ले जाने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["Ctrl + End", "End", "Page Down", "Ctrl + Page Down"],
        "options_hi": ["Ctrl + End", "End", "Page Down", "Ctrl + Page Down"],
        "answer_en": "Ctrl + End",
        "answer_hi": "Ctrl + End",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does IMAP use for email access?",
        "question_hi": "ईमेल एक्सेस के लिए IMAP क्या उपयोग करता है?",
        "options_en": ["Port 143", "Port 25", "Port 110", "Port 80"],
        "options_hi": ["पोर्ट 143", "पोर्ट 25", "पोर्ट 110", "पोर्ट 80"],
        "answer_en": "Port 143",
        "answer_hi": "पोर्ट 143",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which device is used to clean computer screen?",
        "question_hi": "कंप्यूटर स्क्रीन साफ करने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Microfiber Cloth", "Tissue Paper", "Cotton Cloth", "All of these"],
        "options_hi": ["माइक्रोफाइबर क्लॉथ", "टिशू पेपर", "कॉटन क्लॉथ", "ये सभी"],
        "answer_en": "Microfiber Cloth",
        "answer_hi": "माइक्रोफाइबर क्लॉथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the standard size of a business card CD?",
        "question_hi": "बिजनेस कार्ड CD का मानक आकार क्या है?",
        "options_en": ["50 MB", "100 MB", "150 MB", "200 MB"],
        "options_hi": ["50 MB", "100 MB", "150 MB", "200 MB"],
        "answer_en": "50 MB",
        "answer_hi": "50 MB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which company developed the first computer with built-in Wi-Fi?",
        "question_hi": "पहला बिल्ट-इन वाई-फाई वाला कंप्यूटर किस कंपनी ने विकसित किया?",
        "options_en": ["Apple", "IBM", "Dell", "Toshiba"],
        "options_hi": ["एप्पल", "आईबीएम", "डेल", "टोशिबा"],
        "answer_en": "Apple",
        "answer_hi": "एप्पल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What does MPG stand for?",
        "question_hi": "MPG का क्या अर्थ है?",
        "options_en": ["MPEG Video File", "Moving Picture Group", "Movie Picture Group", "MPEG File"],
        "options_hi": ["एमपीईजी वीडियो फाइल", "मूविंग पिक्चर ग्रुप", "मूवी पिक्चर ग्रुप", "एमपीईजी फाइल"],
        "answer_en": "MPEG Video File",
        "answer_hi": "एमपीईजी वीडियो फाइल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which key combination is used to switch between tabs in browser?",
        "question_hi": "ब्राउज़र में टैब्स के बीच स्विच करने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + Tab", "Ctrl + Shift + Tab", "Both", "Alt + Tab"],
        "options_hi": ["Ctrl + Tab", "Ctrl + Shift + Tab", "दोनों", "Alt + Tab"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What does SAN stand for in storage?",
        "question_hi": "स्टोरेज में SAN का क्या अर्थ है?",
        "options_en": ["Storage Area Network", "System Area Network", "Storage Access Network", "System Access Network"],
        "options_hi": ["स्टोरेज एरिया नेटवर्क", "सिस्टम एरिया नेटवर्क", "स्टोरेज एक्सेस नेटवर्क", "सिस्टम एक्सेस नेटवर्क"],
        "answer_en": "Storage Area Network",
        "answer_hi": "स्टोरेज एरिया नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which company created the first computer trackball?",
        "question_hi": "पहला कंप्यूटर ट्रैकबॉल किस कंपनी ने बनाया?",
        "options_en": ["Logitech", "Microsoft", "IBM", "Apple"],
        "options_hi": ["लोगिटेक", "माइक्रोसॉफ्ट", "आईबीएम", "एप्पल"],
        "answer_en": "Logitech",
        "answer_hi": "लोगिटेक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the file extension for a Windows theme file?",
        "question_hi": "विंडोज थीम फाइल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".theme", ".themepack", ".deskthemepack", "All of these"],
        "options_hi": [".theme", ".themepack", ".deskthemepack", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which key is used to select multiple files?",
        "question_hi": "मल्टीपल फाइल्स सेलेक्ट करने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["Ctrl", "Shift", "Alt", "Windows"],
        "options_hi": ["Ctrl", "Shift", "Alt", "Windows"],
        "answer_en": "Ctrl",
        "answer_hi": "Ctrl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does POP3 use for email retrieval?",
        "question_hi": "ईमेल रिट्रीवल के लिए POP3 क्या उपयोग करता है?",
        "options_en": ["Port 110", "Port 143", "Port 25", "Port 80"],
        "options_hi": ["पोर्ट 110", "पोर्ट 143", "पोर्ट 25", "पोर्ट 80"],
        "answer_en": "Port 110",
        "answer_hi": "पोर्ट 110",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which device is used to measure hard disk speed?",
        "question_hi": "हार्ड डिस्क स्पीड मापने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Benchmark Software", "Stopwatch", "Multimeter", "All of these"],
        "options_hi": ["बेंचमार्क सॉफ्टवेयर", "स्टॉपवॉच", "मल्टीमीटर", "ये सभी"],
        "answer_en": "Benchmark Software",
        "answer_hi": "बेंचमार्क सॉफ्टवेयर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the standard size of a CD-RW?",
        "question_hi": "CD-RW का मानक आकार क्या है?",
        "options_en": ["700 MB", "650 MB", "800 MB", "1 GB"],
        "options_hi": ["700 MB", "650 MB", "800 MB", "1 GB"],
        "answer_en": "700 MB",
        "answer_hi": "700 MB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which company developed the first computer with USB ports?",
        "question_hi": "पहला USB पोर्ट्स वाला कंप्यूटर किस कंपनी ने विकसित किया?",
        "options_en": ["Apple", "IBM", "Compaq", "Dell"],
        "options_hi": ["एप्पल", "आईबीएम", "कॉम्पैक", "डेल"],
        "answer_en": "Apple",
        "answer_hi": "एप्पल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does MOV stand for?",
        "question_hi": "MOV का क्या अर्थ है?",
        "options_en": ["QuickTime Movie", "Movie File", "Moving Video", "Movie"],
        "options_hi": ["क्विकटाइम मूवी", "मूवी फाइल", "मूविंग वीडियो", "मूवी"],
        "answer_en": "QuickTime Movie",
        "answer_hi": "क्विकटाइम मूवी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which key combination is used to reload webpage?",
        "question_hi": "वेबपेज रीलोड करने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["F5", "Ctrl + R", "Ctrl + F5", "All of these"],
        "options_hi": ["F5", "Ctrl + R", "Ctrl + F5", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What does RAID 0 provide?",
        "question_hi": "RAID 0 क्या प्रदान करता है?",
        "options_en": ["Striping for performance", "Mirroring for redundancy", "Parity for protection", "All of these"],
        "options_hi": ["परफॉर्मेंस के लिए स्ट्राइपिंग", "रिडंडेंसी के लिए मिररिंग", "प्रोटेक्शन के लिए पैरिटी", "ये सभी"],
        "answer_en": "Striping for performance",
        "answer_hi": "परफॉर्मेंस के लिए स्ट्राइपिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which company created the first computer webcam?",
        "question_hi": "पहला कंप्यूटर वेबकैम किस कंपनी ने बनाया?",
        "options_en": ["Connectix", "Logitech", "Microsoft", "Creative"],
        "options_hi": ["कनेक्टिक्स", "लोगिटेक", "माइक्रोसॉफ्ट", "क्रिएटिव"],
        "answer_en": "Connectix",
        "answer_hi": "कनेक्टिक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the file extension for a Windows icon file?",
        "question_hi": "विंडोज आइकन फाइल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".ico", ".icon", ".icn", ".icns"],
        "options_hi": [".ico", ".icon", ".icn", ".icns"],
        "answer_en": ".ico",
        "answer_hi": ".ico",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which key is used to select continuous files?",
        "question_hi": "कंटीन्यूअस फाइल्स सेलेक्ट करने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["Shift", "Ctrl", "Alt", "Tab"],
        "options_hi": ["Shift", "Ctrl", "Alt", "Tab"],
        "answer_en": "Shift",
        "answer_hi": "Shift",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What does HTTPS use for secure connection?",
        "question_hi": "सिक्योर कनेक्शन के लिए HTTPS क्या उपयोग करता है?",
        "options_en": ["Port 443", "Port 80", "Port 8080", "Port 21"],
        "options_hi": ["पोर्ट 443", "पोर्ट 80", "पोर्ट 8080", "पोर्ट 21"],
        "answer_en": "Port 443",
        "answer_hi": "पोर्ट 443",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which device is used to test network cables?",
        "question_hi": "नेटवर्क केबल्स टेस्ट करने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Cable Tester", "Multimeter", "Oscilloscope", "All of these"],
        "options_hi": ["केबल टेस्टर", "मल्टीमीटर", "ऑसिलोस्कोप", "ये सभी"],
        "answer_en": "Cable Tester",
        "answer_hi": "केबल टेस्टर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the standard size of a DVD-RW?",
        "question_hi": "DVD-RW का मानक आकार क्या है?",
        "options_en": ["4.7 GB", "8.5 GB", "9.4 GB", "17 GB"],
        "options_hi": ["4.7 GB", "8.5 GB", "9.4 GB", "17 GB"],
        "answer_en": "4.7 GB",
        "answer_hi": "4.7 GB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which company developed the first computer with Bluetooth?",
        "question_hi": "पहला ब्लूटूथ वाला कंप्यूटर किस कंपनी ने विकसित किया?",
        "options_en": ["Toshiba", "Apple", "IBM", "Dell"],
        "options_hi": ["टोशिबा", "एप्पल", "आईबीएम", "डेल"],
        "answer_en": "Toshiba",
        "answer_hi": "टोशिबा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What does WMA stand for?",
        "question_hi": "WMA का क्या अर्थ है?",
        "options_en": ["Windows Media Audio", "Windows Music Audio", "Windows Multimedia Audio", "Windows Media Format"],
        "options_hi": ["विंडोज मीडिया ऑडियो", "विंडोज म्यूजिक ऑडियो", "विंडोज मल्टीमीडिया ऑडियो", "विंडोज मीडिया फॉर्मेट"],
        "answer_en": "Windows Media Audio",
        "answer_hi": "विंडोज मीडिया ऑडियो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which key combination is used to bookmark a page?",
        "question_hi": "पेज बुकमार्क करने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + D", "Ctrl + B", "Ctrl + M", "Ctrl + K"],
        "options_hi": ["Ctrl + D", "Ctrl + B", "Ctrl + M", "Ctrl + K"],
        "answer_en": "Ctrl + D",
        "answer_hi": "Ctrl + D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What does RAID 1 provide?",
        "question_hi": "RAID 1 क्या प्रदान करता है?",
        "options_en": ["Mirroring for redundancy", "Striping for performance", "Parity for protection", "All of these"],
        "options_hi": ["रिडंडेंसी के लिए मिररिंग", "परफॉर्मेंस के लिए स्ट्राइपिंग", "प्रोटेक्शन के लिए पैरिटी", "ये सभी"],
        "answer_en": "Mirroring for redundancy",
        "answer_hi": "रिडंडेंसी के लिए मिररिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which company created the first computer sound system?",
        "question_hi": "पहला कंप्यूटर साउंड सिस्टम किस कंपनी ने बनाया?",
        "options_en": ["AdLib", "Creative", "Yamaha", "Roland"],
        "options_hi": ["एडलिब", "क्रिएटिव", "यामाहा", "रोलैंड"],
        "answer_en": "AdLib",
        "answer_hi": "एडलिब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the file extension for a Windows cursor file?",
        "question_hi": "विंडोज कर्सर फाइल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".cur", ".cursor", ".ani", "Both .cur and .ani"],
        "options_hi": [".cur", ".cursor", ".ani", ".cur और .ani दोनों"],
        "answer_en": "Both .cur and .ani",
        "answer_hi": ".cur और .ani दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which key is used to rename a file?",
        "question_hi": "फाइल रिनेम करने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["F2", "F1", "F3", "F4"],
        "options_hi": ["F2", "F1", "F3", "F4"],
        "answer_en": "F2",
        "answer_hi": "F2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What does FTP use for file transfer?",
        "question_hi": "फाइल ट्रांसफर के लिए FTP क्या उपयोग करता है?",
        "options_en": ["Port 21", "Port 20", "Both", "Port 22"],
        "options_hi": ["पोर्ट 21", "पोर्ट 20", "दोनों", "पोर्ट 22"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which device is used to measure RAM speed?",
        "question_hi": "RAM स्पीड मापने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Benchmark Software", "Multimeter", "Oscilloscope", "All of these"],
        "options_hi": ["बेंचमार्क सॉफ्टवेयर", "मल्टीमीटर", "ऑसिलोस्कोप", "ये सभी"],
        "answer_en": "Benchmark Software",
        "answer_hi": "बेंचमार्क सॉफ्टवेयर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the standard size of a DVD+R DL?",
        "question_hi": "DVD+R DL का मानक आकार क्या है?",
        "options_en": ["8.5 GB", "4.7 GB", "9.4 GB", "17 GB"],
        "options_hi": ["8.5 GB", "4.7 GB", "9.4 GB", "17 GB"],
        "answer_en": "8.5 GB",
        "answer_hi": "8.5 GB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which company developed the first computer with HDMI port?",
        "question_hi": "पहला HDMI पोर्ट वाला कंप्यूटर किस कंपनी ने विकसित किया?",
        "options_en": ["Apple", "Dell", "HP", "Sony"],
        "options_hi": ["एप्पल", "डेल", "एचपी", "सोनी"],
        "answer_en": "Apple",
        "answer_hi": "एप्पल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What does FLAC stand for?",
        "question_hi": "FLAC का क्या अर्थ है?",
        "options_en": ["Free Lossless Audio Codec", "Free Loss Audio Compression", "Free Lossless Audio Compression", "Free Loss Audio Codec"],
        "options_hi": ["फ्री लॉसलेस ऑडियो कोडेक", "फ्री लॉस ऑडियो कम्प्रेशन", "फ्री लॉसलेस ऑडियो कम्प्रेशन", "फ्री लॉस ऑडियो कोडेक"],
        "answer_en": "Free Lossless Audio Codec",
        "answer_hi": "फ्री लॉसलेस ऑडियो कोडेक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which key combination is used to open bookmarks manager?",
        "question_hi": "बुकमार्क्स मैनेजर खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + Shift + O", "Ctrl + B", "Ctrl + Shift + B", "Ctrl + D"],
        "options_hi": ["Ctrl + Shift + O", "Ctrl + B", "Ctrl + Shift + B", "Ctrl + D"],
        "answer_en": "Ctrl + Shift + O",
        "answer_hi": "Ctrl + Shift + O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does RAID 5 provide?",
        "question_hi": "RAID 5 क्या प्रदान करता है?",
        "options_en": ["Striping with parity", "Mirroring", "Striping without parity", "All of these"],
        "options_hi": ["पैरिटी के साथ स्ट्राइपिंग", "मिररिंग", "बिना पैरिटी के स्ट्राइपिंग", "ये सभी"],
        "answer_en": "Striping with parity",
        "answer_hi": "पैरिटी के साथ स्ट्राइपिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which company created the first computer microphone?",
        "question_hi": "पहला कंप्यूटर माइक्रोफोन किस कंपनी ने बनाया?",
        "options_en": ["Shure", "Sennheiser", "IBM", "Microsoft"],
        "options_hi": ["श्योर", "सेनहाइज़र", "आईबीएम", "माइक्रोसॉफ्ट"],
        "answer_en": "Shure",
        "answer_hi": "श्योर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the file extension for a Windows font file?",
        "question_hi": "विंडोज फॉन्ट फाइल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".ttf", ".otf", ".fon", "All of these"],
        "options_hi": [".ttf", ".otf", ".fon", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which key is used to delete file permanently?",
        "question_hi": "फाइल परमानेंटली डिलीट करने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["Shift + Delete", "Ctrl + Delete", "Alt + Delete", "Delete"],
        "options_hi": ["Shift + Delete", "Ctrl + Delete", "Alt + Delete", "Delete"],
        "answer_en": "Shift + Delete",
        "answer_hi": "Shift + Delete",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What does SSH use for secure connection?",
        "question_hi": "सिक्योर कनेक्शन के लिए SSH क्या उपयोग करता है?",
        "options_en": ["Port 22", "Port 23", "Port 25", "Port 443"],
        "options_hi": ["पोर्ट 22", "पोर्ट 23", "पोर्ट 25", "पोर्ट 443"],
        "answer_en": "Port 22",
        "answer_hi": "पोर्ट 22",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which device is used to test power supply?",
        "question_hi": "पावर सप्लाई टेस्ट करने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Power Supply Tester", "Multimeter", "Oscilloscope", "All of these"],
        "options_hi": ["पावर सप्लाई टेस्टर", "मल्टीमीटर", "ऑसिलोस्कोप", "ये सभी"],
        "answer_en": "Power Supply Tester",
        "answer_hi": "पावर सप्लाई टेस्टर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the standard size of a Blu-ray DL?",
        "question_hi": "ब्लू-रे DL का मानक आकार क्या है?",
        "options_en": ["50 GB", "25 GB", "100 GB", "128 GB"],
        "options_hi": ["50 GB", "25 GB", "100 GB", "128 GB"],
        "answer_en": "50 GB",
        "answer_hi": "50 GB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which company developed the first computer with Thunderbolt port?",
        "question_hi": "पहला थंडरबोल्ट पोर्ट वाला कंप्यूटर किस कंपनी ने विकसित किया?",
        "options_en": ["Apple", "Intel", "Dell", "HP"],
        "options_hi": ["एप्पल", "इंटेल", "डेल", "एचपी"],
        "answer_en": "Apple",
        "answer_hi": "एप्पल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What does OGG stand for?",
        "question_hi": "OGG का क्या अर्थ है?",
        "options_en": ["Ogg Vorbis", "Open Graphic Format", "Open Game Graphics", "Ogg File"],
        "options_hi": ["ओग वोर्बिस", "ओपन ग्राफिक फॉर्मेट", "ओपन गेम ग्राफिक्स", "ओग फाइल"],
        "answer_en": "Ogg Vorbis",
        "answer_hi": "ओग वोर्बिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which key combination is used to open history?",
        "question_hi": "हिस्ट्री खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + H", "Ctrl + Shift + H", "Ctrl + Y", "Ctrl + P"],
        "options_hi": ["Ctrl + H", "Ctrl + Shift + H", "Ctrl + Y", "Ctrl + P"],
        "answer_en": "Ctrl + H",
        "answer_hi": "Ctrl + H",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What does RAID 10 provide?",
        "question_hi": "RAID 10 क्या प्रदान करता है?",
        "options_en": ["Mirroring + Striping", "Striping only", "Mirroring only", "Parity"],
        "options_hi": ["मिररिंग + स्ट्राइपिंग", "सिर्फ स्ट्राइपिंग", "सिर्फ मिररिंग", "पैरिटी"],
        "answer_en": "Mirroring + Striping",
        "answer_hi": "मिररिंग + स्ट्राइपिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which company created the first computer speakers?",
        "question_hi": "पहला कंप्यूटर स्पीकर्स किस कंपनी ने बनाया?",
        "options_en": ["Altec Lansing", "Bose", "Creative", "Logitech"],
        "options_hi": ["ऑल्टेक लैन्सिंग", "बोस", "क्रिएटिव", "लोगिटेक"],
        "answer_en": "Altec Lansing",
        "answer_hi": "ऑल्टेक लैन्सिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the file extension for a Windows wallpaper file?",
        "question_hi": "विंडोज वॉलपेपर फाइल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".jpg", ".png", ".bmp", "All of these"],
        "options_hi": [".jpg", ".png", ".bmp", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which key is used to open properties?",
        "question_hi": "प्रॉपर्टीज़ खोलने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["Alt + Enter", "Ctrl + Enter", "Shift + Enter", "Enter"],
        "options_hi": ["Alt + Enter", "Ctrl + Enter", "Shift + Enter", "Enter"],
        "answer_en": "Alt + Enter",
        "answer_hi": "Alt + Enter",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What does Telnet use for remote access?",
        "question_hi": "रिमोट एक्सेस के लिए Telnet क्या उपयोग करता है?",
        "options_en": ["Port 23", "Port 22", "Port 21", "Port 25"],
        "options_hi": ["पोर्ट 23", "पोर्ट 22", "पोर्ट 21", "पोर्ट 25"],
        "answer_en": "Port 23",
        "answer_hi": "पोर्ट 23",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which device is used to test monitor pixels?",
        "question_hi": "मॉनिटर पिक्सेल टेस्ट करने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Pixel Test Software", "Multimeter", "Oscilloscope", "All of these"],
        "options_hi": ["पिक्सेल टेस्ट सॉफ्टवेयर", "मल्टीमीटर", "ऑसिलोस्कोप", "ये सभी"],
        "answer_en": "Pixel Test Software",
        "answer_hi": "पिक्सेल टेस्ट सॉफ्टवेयर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the standard size of a HD DVD?",
        "question_hi": "HD DVD का मानक आकार क्या है?",
        "options_en": ["15 GB", "30 GB", "25 GB", "50 GB"],
        "options_hi": ["15 GB", "30 GB", "25 GB", "50 GB"],
        "answer_en": "15 GB",
        "answer_hi": "15 GB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which company developed the first computer with fingerprint scanner?",
        "question_hi": "पहला फिंगरप्रिंट स्कैनर वाला कंप्यूटर किस कंपनी ने विकसित किया?",
        "options_en": ["IBM", "Apple", "Dell", "Toshiba"],
        "options_hi": ["आईबीएम", "एप्पल", "डेल", "टोशिबा"],
        "answer_en": "IBM",
        "answer_hi": "आईबीएम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What does WAV stand for?",
        "question_hi": "WAV का क्या अर्थ है?",
        "options_en": ["Waveform Audio File Format", "Windows Audio Video", "Wave Audio Format", "Windows Audio Format"],
        "options_hi": ["वेवफॉर्म ऑडियो फाइल फॉर्मेट", "विंडोज ऑडियो वीडियो", "वेव ऑडियो फॉर्मेट", "विंडोज ऑडियो फॉर्मेट"],
        "answer_en": "Waveform Audio File Format",
        "answer_hi": "वेवफॉर्म ऑडियो फाइल फॉर्मेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which key combination is used to open downloads?",
        "question_hi": "डाउनलोड्स खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + J", "Ctrl + D", "Ctrl + L", "Ctrl + S"],
        "options_hi": ["Ctrl + J", "Ctrl + D", "Ctrl + L", "Ctrl + S"],
        "answer_en": "Ctrl + J",
        "answer_hi": "Ctrl + J",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What does JBOD stand for?",
        "question_hi": "JBOD का क्या अर्थ है?",
        "options_en": ["Just a Bunch Of Disks", "Just Bunch Of Data", "Joined Bunch Of Disks", "Joined Bunch Of Data"],
        "options_hi": ["जस्ट अ बंच ऑफ डिस्क्स", "जस्ट बंच ऑफ डेटा", "जॉइंड बंच ऑफ डिस्क्स", "जॉइंड बंच ऑफ डेटा"],
        "answer_en": "Just a Bunch Of Disks",
        "answer_hi": "जस्ट अ बंच ऑफ डिस्क्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which company created the first computer headphones?",
        "question_hi": "पहला कंप्यूटर हेडफोन्स किस कंपनी ने बनाया?",
        "options_en": ["Koss", "Sony", "Bose", "Sennheiser"],
        "options_hi": ["कोस", "सोनी", "बोस", "सेनहाइज़र"],
        "answer_en": "Koss",
        "answer_hi": "कोस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the file extension for a Windows screen saver?",
        "question_hi": "विंडोज स्क्रीन सेवर के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".scr", ".saver", ".ss", ".screensaver"],
        "options_hi": [".scr", ".saver", ".ss", ".screensaver"],
        "answer_en": ".scr",
        "answer_hi": ".scr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which key is used to open search?",
        "question_hi": "सर्च खोलने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["F3", "F1", "F2", "F4"],
        "options_hi": ["F3", "F1", "F2", "F4"],
        "answer_en": "F3",
        "answer_hi": "F3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What does RDP use for remote desktop?",
        "question_hi": "रिमोट डेस्कटॉप के लिए RDP क्या उपयोग करता है?",
        "options_en": ["Port 3389", "Port 3390", "Port 3388", "Port 3399"],
        "options_hi": ["पोर्ट 3389", "पोर्ट 3390", "पोर्ट 3388", "पोर्ट 3399"],
        "answer_en": "Port 3389",
        "answer_hi": "पोर्ट 3389",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which device is used to test keyboard keys?",
        "question_hi": "कीबोर्ड कीज़ टेस्ट करने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Keyboard Test Software", "Multimeter", "Oscilloscope", "All of these"],
        "options_hi": ["कीबोर्ड टेस्ट सॉफ्टवेयर", "मल्टीमीटर", "ऑसिलोस्कोप", "ये सभी"],
        "answer_en": "Keyboard Test Software",
        "answer_hi": "कीबोर्ड टेस्ट सॉफ्टवेयर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the standard size of a UMD?",
        "question_hi": "UMD का मानक आकार क्या है?",
        "options_en": ["1.8 GB", "900 MB", "2.4 GB", "4.7 GB"],
        "options_hi": ["1.8 GB", "900 MB", "2.4 GB", "4.7 GB"],
        "answer_en": "1.8 GB",
        "answer_hi": "1.8 GB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which company developed the first computer with webcam?",
        "question_hi": "पहला वेबकैम वाला कंप्यूटर किस कंपनी ने विकसित किया?",
        "options_en": ["Apple", "Dell", "HP", "Sony"],
        "options_hi": ["एप्पल", "डेल", "एचपी", "सोनी"],
        "answer_en": "Apple",
        "answer_hi": "एप्पल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What does AIFF stand for?",
        "question_hi": "AIFF का क्या अर्थ है?",
        "options_en": ["Audio Interchange File Format", "Audio Interface File Format", "Audio Interchange Format File", "Audio Interface Format File"],
        "options_hi": ["ऑडियो इंटरचेंज फाइल फॉर्मेट", "ऑडियो इंटरफेस फाइल फॉर्मेट", "ऑडियो इंटरचेंज फॉर्मेट फाइल", "ऑडियो इंटरफेस फॉर्मेट फाइल"],
        "answer_en": "Audio Interchange File Format",
        "answer_hi": "ऑडियो इंटरचेंज फाइल फॉर्मेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which key combination is used to clear browsing data?",
        "question_hi": "ब्राउज़िंग डेटा क्लियर करने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + Shift + Delete", "Ctrl + Alt + Delete", "Ctrl + D", "Ctrl + C"],
        "options_hi": ["Ctrl + Shift + Delete", "Ctrl + Alt + Delete", "Ctrl + D", "Ctrl + C"],
        "answer_en": "Ctrl + Shift + Delete",
        "answer_hi": "Ctrl + Shift + Delete",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What does LVM stand for?",
        "question_hi": "LVM का क्या अर्थ है?",
        "options_en": ["Logical Volume Manager", "Logical Volume Management", "Logical Virtual Manager", "Logical Virtual Management"],
        "options_hi": ["लॉजिकल वॉल्यूम मैनेजर", "लॉजिकल वॉल्यूम मैनेजमेंट", "लॉजिकल वर्चुअल मैनेजर", "लॉजिकल वर्चुअल मैनेजमेंट"],
        "answer_en": "Logical Volume Manager",
        "answer_hi": "लॉजिकल वॉल्यूम मैनेजर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which company created the first computer joystick?",
        "question_hi": "पहला कंप्यूटर जॉयस्टिक किस कंपनी ने बनाया?",
        "options_en": ["Atari", "Microsoft", "Logitech", "Thrustmaster"],
        "options_hi": ["अटारी", "माइक्रोसॉफ्ट", "लोगिटेक", "थ्रस्टमास्टर"],
        "answer_en": "Atari",
        "answer_hi": "अटारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the file extension for a Windows inf file?",
        "question_hi": "विंडोज inf फाइल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".inf", ".information", ".info", ".install"],
        "options_hi": [".inf", ".information", ".info", ".install"],
        "answer_en": ".inf",
        "answer_hi": ".inf",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which key is used to open address bar?",
        "question_hi": "एड्रेस बार खोलने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["F6", "F5", "F4", "F3"],
        "options_hi": ["F6", "F5", "F4", "F3"],
        "answer_en": "F6",
        "answer_hi": "F6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What does VNC use for remote access?",
        "question_hi": "रिमोट एक्सेस के लिए VNC क्या उपयोग करता है?",
        "options_en": ["Port 5900", "Port 5800", "Both", "Port 3389"],
        "options_hi": ["पोर्ट 5900", "पोर्ट 5800", "दोनों", "पोर्ट 3389"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which device is used to test mouse clicks?",
        "question_hi": "माउस क्लिक्स टेस्ट करने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Mouse Test Software", "Multimeter", "Oscilloscope", "All of these"],
        "options_hi": ["माउस टेस्ट सॉफ्टवेयर", "मल्टीमीटर", "ऑसिलोस्कोप", "ये सभी"],
        "answer_en": "Mouse Test Software",
        "answer_hi": "माउस टेस्ट सॉफ्टवेयर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the standard size of a MiniDisc?",
        "question_hi": "मिनीडिस्क का मानक आकार क्या है?",
        "options_en": ["1 GB", "650 MB", "140 MB", "1.44 MB"],
        "options_hi": ["1 GB", "650 MB", "140 MB", "1.44 MB"],
        "answer_en": "1 GB",
        "answer_hi": "1 GB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which company developed the first computer with retina display?",
        "question_hi": "पहला रेटिना डिस्प्ले वाला कंप्यूटर किस कंपनी ने विकसित किया?",
        "options_en": ["Apple", "Dell", "HP", "Lenovo"],
        "options_hi": ["एप्पल", "डेल", "एचपी", "लेनोवो"],
        "answer_en": "Apple",
        "answer_hi": "एप्पल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What does MIDI stand for?",
        "question_hi": "MIDI का क्या अर्थ है?",
        "options_en": ["Musical Instrument Digital Interface", "Music Interface Digital Instrument", "Musical Interface Digital Instrument", "Music Instrument Digital Interface"],
        "options_hi": ["म्यूजिकल इंस्ट्रूमेंट डिजिटल इंटरफेस", "म्यूजिक इंटरफेस डिजिटल इंस्ट्रूमेंट", "म्यूजिकल इंटरफेस डिजिटल इंस्ट्रूमेंट", "म्यूजिक इंस्ट्रूमेंट डिजिटल इंटरफेस"],
        "answer_en": "Musical Instrument Digital Interface",
        "answer_hi": "म्यूजिकल इंस्ट्रूमेंट डिजिटल इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which key combination is used to open developer tools?",
        "question_hi": "डेवलपर टूल्स खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["F12", "Ctrl + Shift + I", "Ctrl + Shift + J", "All of these"],
        "options_hi": ["F12", "Ctrl + Shift + I", "Ctrl + Shift + J", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What does ZFS stand for?",
        "question_hi": "ZFS का क्या अर्थ है?",
        "options_en": ["Zettabyte File System", "Zeta File System", "Zero File System", "Z File System"],
        "options_hi": ["जेटाबाइट फाइल सिस्टम", "जीटा फाइल सिस्टम", "जीरो फाइल सिस्टम", "जेड फाइल सिस्टम"],
        "answer_en": "Zettabyte File System",
        "answer_hi": "जेटाबाइट फाइल सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which company created the first computer gamepad?",
        "question_hi": "पहला कंप्यूटर गेमपैड किस कंपनी ने बनाया?",
        "options_en": ["Nintendo", "Microsoft", "Sony", "Atari"],
        "options_hi": ["निन्टेंडो", "माइक्रोसॉफ्ट", "सोनी", "अटारी"],
        "answer_en": "Nintendo",
        "answer_hi": "निन्टेंडो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the file extension for a Windows cabinet file?",
        "question_hi": "विंडोज कैबिनेट फाइल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".cab", ".cabinet", ".cabin", ".cabfile"],
        "options_hi": [".cab", ".cabinet", ".cabin", ".cabfile"],
        "answer_en": ".cab",
        "answer_hi": ".cab",
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