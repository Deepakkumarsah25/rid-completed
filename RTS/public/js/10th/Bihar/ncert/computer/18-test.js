const questions = [
    {
        "num": 1,
        "question_en": "Which key is used to toggle between open applications in Windows?",
        "question_hi": "विंडोज़ में खुले एप्लिकेशन के बीच टॉगल करने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["Alt + Tab", "Ctrl + Tab", "Shift + Tab", "Windows + Tab"],
        "options_hi": ["Alt + Tab", "Ctrl + Tab", "Shift + Tab", "Windows + Tab"],
        "answer_en": "Alt + Tab",
        "answer_hi": "Alt + Tab",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the unit of measurement for internet speed?",
        "question_hi": "इंटरनेट स्पीड के मापन की इकाई क्या है?",
        "options_en": ["Mbps", "MHz", "GB", "KB/s"],
        "options_hi": ["Mbps", "MHz", "GB", "KB/s"],
        "answer_en": "Mbps",
        "answer_hi": "Mbps",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which company developed the Android operating system?",
        "question_hi": "एंड्रॉयड ऑपरेटिंग सिस्टम किस कंपनी ने विकसित किया?",
        "options_en": ["Google", "Microsoft", "Apple", "IBM"],
        "options_hi": ["गूगल", "माइक्रोसॉफ्ट", "एप्पल", "आईबीएम"],
        "answer_en": "Google",
        "answer_hi": "गूगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What does JPEG stand for?",
        "question_hi": "JPEG का क्या अर्थ है?",
        "options_en": ["Joint Photographic Experts Group", "Joint Picture Experts Group", "Joint Photo Experts Group", "Joint Photographic Group"],
        "options_hi": ["ज्वाइंट फोटोग्राफिक एक्सपर्ट्स ग्रुप", "ज्वाइंट पिक्चर एक्सपर्ट्स ग्रुप", "ज्वाइंट फोटो एक्सपर्ट्स ग्रुप", "ज्वाइंट फोटोग्राफिक ग्रुप"],
        "answer_en": "Joint Photographic Experts Group",
        "answer_hi": "ज्वाइंट फोटोग्राफिक एक्सपर्ट्स ग्रुप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which device converts AC to DC power for computer?",
        "question_hi": "कंप्यूटर के लिए AC को DC पावर में बदलने वाला डिवाइस कौन सा है?",
        "options_en": ["Power Supply Unit", "UPS", "SMPS", "All of these"],
        "options_hi": ["पावर सप्लाई यूनिट", "यूपीएस", "एसएमपीएस", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the full form of VGA?",
        "question_hi": "VGA का पूर्ण रूप क्या है?",
        "options_en": ["Video Graphics Array", "Video Graphics Adapter", "Visual Graphics Array", "Visual Graphics Adapter"],
        "options_hi": ["वीडियो ग्राफिक्स ऐरे", "वीडियो ग्राफिक्स एडाप्टर", "विजुअल ग्राफिक्स ऐरे", "विजुअल ग्राफिक्स एडाप्टर"],
        "answer_en": "Video Graphics Array",
        "answer_hi": "वीडियो ग्राफिक्स ऐरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which key combination is used to select all items?",
        "question_hi": "सभी आइटम्स सेलेक्ट करने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + A", "Ctrl + S", "Ctrl + D", "Ctrl + F"],
        "options_hi": ["Ctrl + A", "Ctrl + S", "Ctrl + D", "Ctrl + F"],
        "answer_en": "Ctrl + A",
        "answer_hi": "Ctrl + A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does LCD stand for?",
        "question_hi": "LCD का क्या अर्थ है?",
        "options_en": ["Liquid Crystal Display", "Light Crystal Display", "Liquid Crystal Device", "Light Crystal Device"],
        "options_hi": ["लिक्विड क्रिस्टल डिस्प्ले", "लाइट क्रिस्टल डिस्प्ले", "लिक्विड क्रिस्टल डिवाइस", "लाइट क्रिस्टल डिवाइस"],
        "answer_en": "Liquid Crystal Display",
        "answer_hi": "लिक्विड क्रिस्टल डिस्प्ले",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which company created the first computer virus for experimental purposes?",
        "question_hi": "प्रयोगात्मक उद्देश्यों के लिए पहला कंप्यूटर वायरस किस कंपनी ने बनाया?",
        "options_en": ["BBN Technologies", "Microsoft", "IBM", "Apple"],
        "options_hi": ["बीबीएन टेक्नोलॉजीज", "माइक्रोसॉफ्ट", "आईबीएम", "एप्पल"],
        "answer_en": "BBN Technologies",
        "answer_hi": "बीबीएन टेक्नोलॉजीज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the file extension for a Windows system configuration file?",
        "question_hi": "विंडोज़ सिस्टम कॉन्फ़िगरेशन फाइल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".sys", ".cfg", ".ini", "All of these"],
        "options_hi": [".sys", ".cfg", ".ini", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which key is used to open the start menu in Windows?",
        "question_hi": "विंडोज़ में स्टार्ट मेन्यू खोलने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["Windows Key", "Ctrl + Esc", "Both", "Alt + S"],
        "options_hi": ["विंडोज़ कुंजी", "Ctrl + Esc", "दोनों", "Alt + S"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What does DNS do?",
        "question_hi": "DNS क्या करता है?",
        "options_en": ["Translates domain names to IP addresses", "Stores website data", "Manages email servers", "Secures network connections"],
        "options_hi": ["डोमेन नामों को आईपी एड्रेस में बदलता है", "वेबसाइट डेटा स्टोर करता है", "ईमेल सर्वर मैनेज करता है", "नेटवर्क कनेक्शन सुरक्षित करता है"],
        "answer_en": "Translates domain names to IP addresses",
        "answer_hi": "डोमेन नामों को आईपी एड्रेस में बदलता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which device is used to store BIOS settings?",
        "question_hi": "BIOS सेटिंग्स स्टोर करने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["CMOS Battery", "Hard Disk", "RAM", "ROM"],
        "options_hi": ["CMOS बैटरी", "हार्ड डिस्क", "RAM", "ROM"],
        "answer_en": "CMOS Battery",
        "answer_hi": "CMOS बैटरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the standard size of a standard DVD+R?",
        "question_hi": "स्टैंडर्ड DVD+R का मानक आकार क्या है?",
        "options_en": ["4.7 GB", "8.5 GB", "9.4 GB", "17 GB"],
        "options_hi": ["4.7 GB", "8.5 GB", "9.4 GB", "17 GB"],
        "answer_en": "4.7 GB",
        "answer_hi": "4.7 GB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which company developed the first computer spreadsheet software VisiCalc?",
        "question_hi": "पहला कंप्यूटर स्प्रेडशीट सॉफ्टवेयर VisiCalc किस कंपनी ने विकसित किया?",
        "options_en": ["Software Arts", "Microsoft", "IBM", "Apple"],
        "options_hi": ["सॉफ्टवेयर आर्ट्स", "माइक्रोसॉफ्ट", "आईबीएम", "एप्पल"],
        "answer_en": "Software Arts",
        "answer_hi": "सॉफ्टवेयर आर्ट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does PNG stand for?",
        "question_hi": "PNG का क्या अर्थ है?",
        "options_en": ["Portable Network Graphics", "Portable Network Group", "Portable Graphics Network", "Portable Group Network"],
        "options_hi": ["पोर्टेबल नेटवर्क ग्राफिक्स", "पोर्टेबल नेटवर्क ग्रुप", "पोर्टेबल ग्राफिक्स नेटवर्क", "पोर्टेबल ग्रुप नेटवर्क"],
        "answer_en": "Portable Network Graphics",
        "answer_hi": "पोर्टेबल नेटवर्क ग्राफिक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which key combination is used to open the run dialog?",
        "question_hi": "रन डायलॉग खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Windows + R", "Ctrl + R", "Alt + R", "Shift + R"],
        "options_hi": ["Windows + R", "Ctrl + R", "Alt + R", "Shift + R"],
        "answer_en": "Windows + R",
        "answer_hi": "Windows + R",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does LED stand for?",
        "question_hi": "LED का क्या अर्थ है?",
        "options_en": ["Light Emitting Diode", "Light Emitting Device", "Liquid Emitting Diode", "Liquid Emitting Device"],
        "options_hi": ["लाइट एमिटिंग डायोड", "लाइट एमिटिंग डिवाइस", "लिक्विड एमिटिंग डायोड", "लिक्विड एमिटिंग डिवाइस"],
        "answer_en": "Light Emitting Diode",
        "answer_hi": "लाइट एमिटिंग डायोड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which company created the first computer touchpad?",
        "question_hi": "पहला कंप्यूटर टचपैड किस कंपनी ने बनाया?",
        "options_en": ["Cirque", "Apple", "IBM", "Microsoft"],
        "options_hi": ["सर्क", "एप्पल", "आईबीएम", "माइक्रोसॉफ्ट"],
        "answer_en": "Cirque",
        "answer_hi": "सर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the file extension for a Windows audio media file?",
        "question_hi": "विंडोज़ ऑडियो मीडिया फाइल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".wma", ".mp3", ".wav", ".aac"],
        "options_hi": [".wma", ".mp3", ".wav", ".aac"],
        "answer_en": ".wma",
        "answer_hi": ".wma",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which key is used to refresh the current window?",
        "question_hi": "करंट विंडो रिफ्रेश करने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["F5", "F1", "F2", "F3"],
        "options_hi": ["F5", "F1", "F2", "F3"],
        "answer_en": "F5",
        "answer_hi": "F5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does VPN provide?",
        "question_hi": "VPN क्या प्रदान करता है?",
        "options_en": ["Secure encrypted connection", "Faster internet speed", "Free internet access", "All of these"],
        "options_hi": ["सिक्योर एन्क्रिप्टेड कनेक्शन", "तेज़ इंटरनेट स्पीड", "फ्री इंटरनेट एक्सेस", "ये सभी"],
        "answer_en": "Secure encrypted connection",
        "answer_hi": "सिक्योर एन्क्रिप्टेड कनेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which device is used to measure CPU clock speed?",
        "question_hi": "CPU क्लॉक स्पीड मापने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["CPU-Z Software", "Multimeter", "Oscilloscope", "All of these"],
        "options_hi": ["CPU-Z सॉफ्टवेयर", "मल्टीमीटर", "ऑसिलोस्कोप", "ये सभी"],
        "answer_en": "CPU-Z Software",
        "answer_hi": "CPU-Z सॉफ्टवेयर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the standard size of a Blu-ray triple layer disc?",
        "question_hi": "ब्लू-रे ट्रिपल लेयर डिस्क का मानक आकार क्या है?",
        "options_en": ["100 GB", "128 GB", "150 GB", "200 GB"],
        "options_hi": ["100 GB", "128 GB", "150 GB", "200 GB"],
        "answer_en": "100 GB",
        "answer_hi": "100 GB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which company developed the first computer programming language FORTRAN?",
        "question_hi": "पहली कंप्यूटर प्रोग्रामिंग लैंग्वेज FORTRAN किस कंपनी ने विकसित की?",
        "options_en": ["IBM", "Microsoft", "Bell Labs", "MIT"],
        "options_hi": ["आईबीएम", "माइक्रोसॉफ्ट", "बेल लैब्स", "एमआईटी"],
        "answer_en": "IBM",
        "answer_hi": "आईबीएम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What does MP4 stand for?",
        "question_hi": "MP4 का क्या अर्थ है?",
        "options_en": ["MPEG-4 Part 14", "MPEG-4 Part 10", "MPEG-4 Video", "MPEG-4 Audio"],
        "options_hi": ["MPEG-4 Part 14", "MPEG-4 Part 10", "MPEG-4 Video", "MPEG-4 Audio"],
        "answer_en": "MPEG-4 Part 14",
        "answer_hi": "MPEG-4 Part 14",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which key combination is used to open the save as dialog?",
        "question_hi": "Save As डायलॉग खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["F12", "Ctrl + Shift + S", "Both", "Ctrl + S"],
        "options_hi": ["F12", "Ctrl + Shift + S", "दोनों", "Ctrl + S"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What does OLED stand for?",
        "question_hi": "OLED का क्या अर्थ है?",
        "options_en": ["Organic Light Emitting Diode", "Organic Liquid Emitting Diode", "Organic Light Emitting Device", "Organic Liquid Emitting Device"],
        "options_hi": ["ऑर्गेनिक लाइट एमिटिंग डायोड", "ऑर्गेनिक लिक्विड एमिटिंग डायोड", "ऑर्गेनिक लाइट एमिटिंग डिवाइस", "ऑर्गेनिक लिक्विड एमिटिंग डिवाइस"],
        "answer_en": "Organic Light Emitting Diode",
        "answer_hi": "ऑर्गेनिक लाइट एमिटिंग डायोड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which company created the first computer optical mouse?",
        "question_hi": "पहला कंप्यूटर ऑप्टिकल माउस किस कंपनी ने बनाया?",
        "options_en": ["Microsoft", "Logitech", "Apple", "IBM"],
        "options_hi": ["माइक्रोसॉफ्ट", "लोगिटेक", "एप्पल", "आईबीएम"],
        "answer_en": "Microsoft",
        "answer_hi": "माइक्रोसॉफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the file extension for a Windows compressed folder?",
        "question_hi": "विंडोज़ कंप्रेस्ड फोल्डर के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".zip", ".rar", ".7z", ".cab"],
        "options_hi": [".zip", ".rar", ".7z", ".cab"],
        "answer_en": ".zip",
        "answer_hi": ".zip",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which key is used to activate the right-click context menu?",
        "question_hi": "राइट-क्लिक कॉन्टेक्स्ट मेन्यू एक्टिवेट करने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["Menu Key", "Shift + F10", "Both", "Ctrl + M"],
        "options_hi": ["मेन्यू कुंजी", "Shift + F10", "दोनों", "Ctrl + M"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does HTML5 introduce?",
        "question_hi": "HTML5 क्या पेश करता है?",
        "options_en": ["Multimedia support without plugins", "Better graphics", "Offline storage", "All of these"],
        "options_hi": ["बिना प्लगइन के मल्टीमीडिया सपोर्ट", "बेहतर ग्राफिक्स", "ऑफ़लाइन स्टोरेज", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which device is used to test motherboard components?",
        "question_hi": "मदरबोर्ड कंपोनेंट्स टेस्ट करने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["POST Card", "Multimeter", "Oscilloscope", "All of these"],
        "options_hi": ["POST कार्ड", "मल्टीमीटर", "ऑसिलोस्कोप", "ये सभी"],
        "answer_en": "POST Card",
        "answer_hi": "POST कार्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the standard size of a DVD-RAM?",
        "question_hi": "DVD-RAM का मानक आकार क्या है?",
        "options_en": ["4.7 GB", "9.4 GB", "2.6 GB", "5.2 GB"],
        "options_hi": ["4.7 GB", "9.4 GB", "2.6 GB", "5.2 GB"],
        "answer_en": "4.7 GB",
        "answer_hi": "4.7 GB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which company developed the first computer search engine?",
        "question_hi": "पहला कंप्यूटर सर्च इंजन किस कंपनी ने विकसित किया?",
        "options_en": ["Archie", "Google", "Yahoo", "Microsoft"],
        "options_hi": ["आर्ची", "गूगल", "याहू", "माइक्रोसॉफ्ट"],
        "answer_en": "Archie",
        "answer_hi": "आर्ची",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does CSS stand for?",
        "question_hi": "CSS का क्या अर्थ है?",
        "options_en": ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Cascading System Sheets"],
        "options_hi": ["कैस्केडिंग स्टाइल शीट्स", "कंप्यूटर स्टाइल शीट्स", "क्रिएटिव स्टाइल शीट्स", "कैस्केडिंग सिस्टम शीट्स"],
        "answer_en": "Cascading Style Sheets",
        "answer_hi": "कैस्केडिंग स्टाइल शीट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which key combination is used to open the print dialog?",
        "question_hi": "प्रिंट डायलॉग खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + P", "Ctrl + Shift + P", "Alt + P", "Windows + P"],
        "options_hi": ["Ctrl + P", "Ctrl + Shift + P", "Alt + P", "Windows + P"],
        "answer_en": "Ctrl + P",
        "answer_hi": "Ctrl + P",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What does AMOLED stand for?",
        "question_hi": "AMOLED का क्या अर्थ है?",
        "options_en": ["Active Matrix Organic LED", "Active Matrix OLED", "Advanced Matrix Organic LED", "Advanced Matrix OLED"],
        "options_hi": ["एक्टिव मैट्रिक्स ऑर्गेनिक LED", "एक्टिव मैट्रिक्स OLED", "एडवांस्ड मैट्रिक्स ऑर्गेनिक LED", "एडवांस्ड मैट्रिक्स OLED"],
        "answer_en": "Active Matrix Organic LED",
        "answer_hi": "एक्टिव मैट्रिक्स ऑर्गेनिक LED",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which company created the first computer laser printer?",
        "question_hi": "पहला कंप्यूटर लेज़र प्रिंटर किस कंपनी ने बनाया?",
        "options_en": ["Xerox", "IBM", "HP", "Canon"],
        "options_hi": ["जेरोक्स", "आईबीएम", "एचपी", "कैनन"],
        "answer_en": "Xerox",
        "answer_hi": "जेरोक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the file extension for a Windows media playlist?",
        "question_hi": "विंडोज़ मीडिया प्लेलिस्ट के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".wpl", ".m3u", ".pls", ".asx"],
        "options_hi": [".wpl", ".m3u", ".pls", ".asx"],
        "answer_en": ".wpl",
        "answer_hi": ".wpl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which key is used to open help in most applications?",
        "question_hi": "अधिकांश एप्लिकेशन में हेल्प खोलने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["F1", "F2", "F3", "F4"],
        "options_hi": ["F1", "F2", "F3", "F4"],
        "answer_en": "F1",
        "answer_hi": "F1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What does API allow?",
        "question_hi": "API क्या अनुमति देता है?",
        "options_en": ["Different software to communicate", "Hardware acceleration", "Internet connectivity", "All of these"],
        "options_hi": ["अलग सॉफ्टवेयर को कम्युनिकेट करने", "हार्डवेयर एक्सीलरेशन", "इंटरनेट कनेक्टिविटी", "ये सभी"],
        "answer_en": "Different software to communicate",
        "answer_hi": "अलग सॉफ्टवेयर को कम्युनिकेट करने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which device is used to test GPU performance?",
        "question_hi": "GPU परफॉर्मेंस टेस्ट करने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["3DMark Software", "Multimeter", "Oscilloscope", "All of these"],
        "options_hi": ["3DMark सॉफ्टवेयर", "मल्टीमीटर", "ऑसिलोस्कोप", "ये सभी"],
        "answer_en": "3DMark Software",
        "answer_hi": "3DMark सॉफ्टवेयर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the standard size of a HD DVD-R?",
        "question_hi": "HD DVD-R का मानक आकार क्या है?",
        "options_en": ["15 GB", "30 GB", "25 GB", "50 GB"],
        "options_hi": ["15 GB", "30 GB", "25 GB", "50 GB"],
        "answer_en": "15 GB",
        "answer_hi": "15 GB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which company developed the first computer database language SQL?",
        "question_hi": "पहली कंप्यूटर डेटाबेस लैंग्वेज SQL किस कंपनी ने विकसित की?",
        "options_en": ["IBM", "Oracle", "Microsoft", "Apple"],
        "options_hi": ["आईबीएम", "ओरेकल", "माइक्रोसॉफ्ट", "एप्पल"],
        "answer_en": "IBM",
        "answer_hi": "आईबीएम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What does GIF stand for?",
        "question_hi": "GIF का क्या अर्थ है?",
        "options_en": ["Graphics Interchange Format", "Graphics Interface Format", "Graphics Internet Format", "Graphics Interchange File"],
        "options_hi": ["ग्राफिक्स इंटरचेंज फॉर्मेट", "ग्राफिक्स इंटरफेस फॉर्मेट", "ग्राफिक्स इंटरनेट फॉर्मेट", "ग्राफिक्स इंटरचेंज फाइल"],
        "answer_en": "Graphics Interchange Format",
        "answer_hi": "ग्राफिक्स इंटरचेंज फॉर्मेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which key combination is used to open the find dialog?",
        "question_hi": "Find डायलॉग खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + R"],
        "options_hi": ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + R"],
        "answer_en": "Ctrl + F",
        "answer_hi": "Ctrl + F",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What does QLED stand for?",
        "question_hi": "QLED का क्या अर्थ है?",
        "options_en": ["Quantum Dot LED", "Quantum Light Emitting Diode", "Quality LED", "Quantum Liquid Emitting Diode"],
        "options_hi": ["क्वांटम डॉट LED", "क्वांटम लाइट एमिटिंग डायोड", "क्वालिटी LED", "क्वांटम लिक्विड एमिटिंग डायोड"],
        "answer_en": "Quantum Dot LED",
        "answer_hi": "क्वांटम डॉट LED",
        "attempted": false,
        "selected": ""
    },
    {
"num": 49,
"question_en": "Which company created the first commercial computer mouse?",
"question_hi": "पहला कमर्शियल कंप्यूटर माउस किस कंपनी ने बनाया?",
"options_en": ["Xerox", "Apple", "Microsoft", "Logitech"],
"options_hi": ["जेरोक्स", "एप्पल", "माइक्रोसॉफ्ट", "लोगिटेक"],
"answer_en": "Xerox",
"answer_hi": "जेरोक्स",
"attempted": false,
"selected": ""
},
{
"num": 50,
"question_en": "What is the file extension for a Windows system log file?",
"question_hi": "विंडोज़ सिस्टम लॉग फाइल के लिए फाइल एक्सटेंशन क्या है?",
"options_en": [".log", ".txt", ".sys", ".evt"],
"options_hi": [".log", ".txt", ".sys", ".evt"],
"answer_en": ".log",
"answer_hi": ".log",
"attempted": false,
"selected": ""
},
{
"num": 51,
"question_en": "Which key is used to rename a selected file?",
"question_hi": "सेलेक्टेड फाइल का नाम बदलने के लिए किस कुंजी का उपयोग किया जाता है?",
"options_en": ["F2", "F3", "F4", "F5"],
"options_hi": ["F2", "F3", "F4", "F5"],
"answer_en": "F2",
"answer_hi": "F2",
"attempted": false,
"selected": ""
},
{
"num": 52,
"question_en": "What does PHP stand for?",
"question_hi": "PHP का क्या अर्थ है?",
"options_en": ["Hypertext Preprocessor", "Personal Home Page", "Both", "Preprocessed Hypertext Processor"],
"options_hi": ["हाइपरटेक्स्ट प्रीप्रोसेसर", "पर्सनल होम पेज", "दोनों", "प्रीप्रोसेस्ड हाइपरटेक्स्ट प्रोसेसर"],
"answer_en": "Both",
"answer_hi": "दोनों",
"attempted": false,
"selected": ""
},
{
"num": 53,
"question_en": "Which device is used to test RAM for errors?",
"question_hi": "RAM में एरर टेस्ट करने के लिए किस डिवाइस/सॉफ़्टवेयर का उपयोग किया जाता है?",
"options_en": ["MemTest86", "Multimeter", "Oscilloscope", "All of these"],
"options_hi": ["MemTest86", "मल्टीमीटर", "ऑसिलोस्कोप", "ये सभी"],
"answer_en": "MemTest86",
"answer_hi": "MemTest86",
"attempted": false,
"selected": ""
},
{
"num": 54,
"question_en": "What is the standard size of a Mini DVD?",
"question_hi": "मिनी DVD का मानक आकार क्या है?",
"options_en": ["1.4 GB", "4.7 GB", "8.5 GB", "9.4 GB"],
"options_hi": ["1.4 GB", "4.7 GB", "8.5 GB", "9.4 GB"],
"answer_en": "1.4 GB",
"answer_hi": "1.4 GB",
"attempted": false,
"selected": ""
},
{
"num": 55,
"question_en": "Which company developed the first computer email system?",
"question_hi": "पहला कंप्यूटर ईमेल सिस्टम किस कंपनी ने विकसित किया?",
"options_en": ["BBN Technologies", "Microsoft", "IBM", "Apple"],
"options_hi": ["बीबीएन टेक्नोलॉजीज", "माइक्रोसॉफ्ट", "आईबीएम", "एप्पल"],
"answer_en": "BBN Technologies",
"answer_hi": "बीबीएन टेक्नोलॉजीज",
"attempted": false,
"selected": ""
},
{
"num": 56,
"question_en": "What does XML stand for?",
"question_hi": "XML का क्या अर्थ है?",
"options_en": ["eXtensible Markup Language", "eXtensible Modeling Language", "eXtensible Markup Link", "eXtensible Modeling Link"],
"options_hi": ["एक्सटेंसिबल मार्कअप लैंग्वेज", "एक्सटेंसिबल मॉडलिंग लैंग्वेज", "एक्सटेंसिबल मार्कअप लिंक", "एक्सटेंसिबल मॉडलिंग लिंक"],
"answer_en": "eXtensible Markup Language",
"answer_hi": "एक्सटेंसिबल मार्कअप लैंग्वेज",
"attempted": false,
"selected": ""
},
{
"num": 57,
"question_en": "Which key combination is used to open the task manager?",
"question_hi": "टास्क मैनेजर खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
"options_en": ["Ctrl + Shift + Esc", "Ctrl + Alt + Del", "Both", "Windows + X"],
"options_hi": ["Ctrl + Shift + Esc", "Ctrl + Alt + Del", "दोनों", "Windows + X"],
"answer_en": "Both",
"answer_hi": "दोनों",
"attempted": false,
"selected": ""
},
{
"num": 58,
"question_en": "What does HDMI stand for?",
"question_hi": "HDMI का क्या अर्थ है?",
"options_en": ["High Definition Multimedia Interface", "High Definition Media Interface", "High Definition Multimedia Input", "High Definition Media Input"],
"options_hi": ["हाई डेफिनिशन मल्टीमीडिया इंटरफेस", "हाई डेफिनिशन मीडिया इंटरफेस", "हाई डेफिनिशन मल्टीमीडिया इनपुट", "हाई डेफिनिशन मीडिया इनपुट"],
"answer_en": "High Definition Multimedia Interface",
"answer_hi": "हाई डेफिनिशन मल्टीमीडिया इंटरफेस",
"attempted": false,
"selected": ""
},
{
"num": 59,
"question_en": "Which company created the first laptop computer?",
"question_hi": "पहला लैपटॉप कंप्यूटर किस कंपनी ने बनाया?",
"options_en": ["Osborne", "IBM", "Compaq", "Apple"],
"options_hi": ["ओसबोर्न", "आईबीएम", "कॉम्पैक", "एप्पल"],
"answer_en": "Osborne",
"answer_hi": "ओसबोर्न",
"attempted": false,
"selected": ""
},
{
"num": 60,
"question_en": "What is the file extension for a Windows executable file?",
"question_hi": "विंडोज़ एक्जीक्यूटेबल फाइल के लिए फाइल एक्सटेंशन क्या है?",
"options_en": [".exe", ".bat", ".com", ".msi"],
"options_hi": [".exe", ".bat", ".com", ".msi"],
"answer_en": ".exe",
"answer_hi": ".exe",
"attempted": false,
"selected": ""
},
{
"num": 61,
"question_en": "Which key is used to switch between open windows of the same application?",
"question_hi": "एक ही एप्लिकेशन की खुली विंडोज़ के बीच स्विच करने के लिए किस कुंजी का उपयोग किया जाता है?",
"options_en": ["Ctrl + Tab", "Alt + Tab", "Ctrl + F6", "Both Ctrl+Tab and Ctrl+F6"],
"options_hi": ["Ctrl + Tab", "Alt + Tab", "Ctrl + F6", "दोनों Ctrl+Tab और Ctrl+F6"],
"answer_en": "Both Ctrl+Tab and Ctrl+F6",
"answer_hi": "दोनों Ctrl+Tab और Ctrl+F6",
"attempted": false,
"selected": ""
},
{
"num": 62,
"question_en": "What does AJAX allow?",
"question_hi": "AJAX क्या अनुमति देता है?",
"options_en": ["Asynchronous data loading", "Dynamic web content updates", "Both", "Synchronous data loading"],
"options_hi": ["एसिंक्रोनस डेटा लोडिंग", "डायनामिक वेब कंटेंट अपडेट", "दोनों", "सिंक्रोनस डेटा लोडिंग"],
"answer_en": "Both",
"answer_hi": "दोनों",
"attempted": false,
"selected": ""
},
{
"num": 63,
"question_en": "Which device is used to test hard drive health?",
"question_hi": "हार्ड ड्राइव हेल्थ टेस्ट करने के लिए किस सॉफ़्टवेयर का उपयोग किया जाता है?",
"options_en": ["CrystalDiskInfo", "Multimeter", "Oscilloscope", "All of these"],
"options_hi": ["CrystalDiskInfo", "मल्टीमीटर", "ऑसिलोस्कोप", "ये सभी"],
"answer_en": "CrystalDiskInfo",
"answer_hi": "CrystalDiskInfo",
"attempted": false,
"selected": ""
},
{
"num": 64,
"question_en": "What is the standard size of a CD-ROM?",
"question_hi": "CD-ROM का मानक आकार क्या है?",
"options_en": ["700 MB", "650 MB", "800 MB", "900 MB"],
"options_hi": ["700 MB", "650 MB", "800 MB", "900 MB"],
"answer_en": "700 MB",
"answer_hi": "700 MB",
"attempted": false,
"selected": ""
},
{
"num": 65,
"question_en": "Which company developed the first computer web browser?",
"question_hi": "पहला कंप्यूटर वेब ब्राउज़र किस कंपनी ने विकसित किया?",
"options_en": ["CERN", "Netscape", "Microsoft", "Google"],
"options_hi": ["सर्न", "नेटस्केप", "माइक्रोसॉफ्ट", "गूगल"],
"answer_en": "CERN",
"answer_hi": "सर्न",
"attempted": false,
"selected": ""
},
{
"num": 66,
"question_en": "What does PDF stand for?",
"question_hi": "PDF का क्या अर्थ है?",
"options_en": ["Portable Document Format", "Portable Data Format", "Printed Document Format", "Portable Document File"],
"options_hi": ["पोर्टेबल डॉक्यूमेंट फॉर्मेट", "पोर्टेबल डेटा फॉर्मेट", "प्रिंटेड डॉक्यूमेंट फॉर्मेट", "पोर्टेबल डॉक्यूमेंट फाइल"],
"answer_en": "Portable Document Format",
"answer_hi": "पोर्टेबल डॉक्यूमेंट फॉर्मेट",
"attempted": false,
"selected": ""
},
{
"num": 67,
"question_en": "Which key combination is used to close the current window?",
"question_hi": "करंट विंडो बंद करने के लिए किस की संयोजन का उपयोग किया जाता है?",
"options_en": ["Alt + F4", "Ctrl + F4", "Both", "Ctrl + W"],
"options_hi": ["Alt + F4", "Ctrl + F4", "दोनों", "Ctrl + W"],
"answer_en": "Both",
"answer_hi": "दोनों",
"attempted": false,
"selected": ""
},
{
"num": 68,
"question_en": "What does USB stand for?",
"question_hi": "USB का क्या अर्थ है?",
"options_en": ["Universal Serial Bus", "Universal System Bus", "United Serial Bus", "United System Bus"],
"options_hi": ["यूनिवर्सल सीरियल बस", "यूनिवर्सल सिस्टम बस", "यूनाइटेड सीरियल बस", "यूनाइटेड सिस्टम बस"],
"answer_en": "Universal Serial Bus",
"answer_hi": "यूनिवर्सल सीरियल बस",
"attempted": false,
"selected": ""
},
{
"num": 69,
"question_en": "Which company created the first personal computer (PC)?",
"question_hi": "पहला पर्सनल कंप्यूटर (PC) किस कंपनी ने बनाया?",
"options_en": ["IBM", "Apple", "Commodore", "Altair"],
"options_hi": ["आईबीएम", "एप्पल", "कमोडोर", "आल्टेयर"],
"answer_en": "Altair",
"answer_hi": "आल्टेयर",
"attempted": false,
"selected": ""
},
{
"num": 70,
"question_en": "What is the file extension for a Windows dynamic link library?",
"question_hi": "विंडोज़ डायनामिक लिंक लाइब्रेरी के लिए फाइल एक्सटेंशन क्या है?",
"options_en": [".dll", ".exe", ".sys", ".drv"],
"options_hi": [".dll", ".exe", ".sys", ".drv"],
"answer_en": ".dll",
"answer_hi": ".dll",
"attempted": false,
"selected": ""
},
{
"num": 71,
"question_en": "Which key is used to open the address bar in a web browser?",
"question_hi": "वेब ब्राउज़र में एड्रेस बार खोलने के लिए किस कुंजी का उपयोग किया जाता है?",
"options_en": ["F6", "Ctrl + L", "Alt + D", "All of these"],
"options_hi": ["F6", "Ctrl + L", "Alt + D", "ये सभी"],
"answer_en": "All of these",
"answer_hi": "ये सभी",
"attempted": false,
"selected": ""
},
{
"num": 72,
"question_en": "What does SQL stand for?",
"question_hi": "SQL का क्या अर्थ है?",
"options_en": ["Structured Query Language", "Structured Question Language", "Simple Query Language", "Simple Question Language"],
"options_hi": ["स्ट्रक्चर्ड क्वेरी लैंग्वेज", "स्ट्रक्चर्ड क्वेश्चन लैंग्वेज", "सिंपल क्वेरी लैंग्वेज", "सिंपल क्वेश्चन लैंग्वेज"],
"answer_en": "Structured Query Language",
"answer_hi": "स्ट्रक्चर्ड क्वेरी लैंग्वेज",
"attempted": false,
"selected": ""
},
{
"num": 73,
"question_en": "Which device is used to monitor CPU temperature?",
"question_hi": "CPU तापमान मॉनिटर करने के लिए किस सॉफ़्टवेयर का उपयोग किया जाता है?",
"options_en": ["Core Temp", "Multimeter", "Thermal Camera", "All of these"],
"options_hi": ["Core Temp", "मल्टीमीटर", "थर्मल कैमरा", "ये सभी"],
"answer_en": "Core Temp",
"answer_hi": "Core Temp",
"attempted": false,
"selected": ""
},
{
"num": 74,
"question_en": "What is the standard size of a Dual Layer Blu-ray disc?",
"question_hi": "डुअल लेयर ब्लू-रे डिस्क का मानक आकार क्या है?",
"options_en": ["50 GB", "25 GB", "100 GB", "128 GB"],
"options_hi": ["50 GB", "25 GB", "100 GB", "128 GB"],
"answer_en": "50 GB",
"answer_hi": "50 GB",
"attempted": false,
"selected": ""
},
{
"num": 75,
"question_en": "Which company developed the first computer antivirus software?",
"question_hi": "पहला कंप्यूटर एंटीवायरस सॉफ्टवेयर किस कंपनी ने विकसित किया?",
"options_en": ["Bernd Fix", "McAfee", "Symantec", "IBM"],
"options_hi": ["बर्न्ड फिक्स", "मैकाफी", "सिमेंटेक", "आईबीएम"],
"answer_en": "Bernd Fix",
"answer_hi": "बर्न्ड फिक्स",
"attempted": false,
"selected": ""
},
{
"num": 76,
"question_en": "What does URL stand for?",
"question_hi": "URL का क्या अर्थ है?",
"options_en": ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"],
"options_hi": ["यूनिफ़ॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लोकेटर", "यूनिफ़ॉर्म रिसोर्स लिंक", "यूनिवर्सल रिसोर्स लिंक"],
"answer_en": "Uniform Resource Locator",
"answer_hi": "यूनिफ़ॉर्म रिसोर्स लोकेटर",
"attempted": false,
"selected": ""
},
{
"num": 77,
"question_en": "Which key combination is used to open a new tab in a web browser?",
"question_hi": "वेब ब्राउज़र में नया टैब खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
"options_en": ["Ctrl + T", "Ctrl + N", "Ctrl + Shift + T", "Ctrl + W"],
"options_hi": ["Ctrl + T", "Ctrl + N", "Ctrl + Shift + T", "Ctrl + W"],
"answer_en": "Ctrl + T",
"answer_hi": "Ctrl + T",
"attempted": false,
"selected": ""
},
{
"num": 78,
"question_en": "What does SSD stand for?",
"question_hi": "SSD का क्या अर्थ है?",
"options_en": ["Solid State Drive", "Solid State Disk", "System State Drive", "System State Disk"],
"options_hi": ["सॉलिड स्टेट ड्राइव", "सॉलिड स्टेट डिस्क", "सिस्टम स्टेट ड्राइव", "सिस्टम स्टेट डिस्क"],
"answer_en": "Solid State Drive",
"answer_hi": "सॉलिड स्टेट ड्राइव",
"attempted": false,
"selected": ""
},
{
"num": 79,
"question_en": "Which company created the first graphical user interface (GUI)?",
"question_hi": "पहला ग्राफिकल यूजर इंटरफेस (GUI) किस कंपनी ने बनाया?",
"options_en": ["Xerox", "Apple", "Microsoft", "IBM"],
"options_hi": ["जेरोक्स", "एप्पल", "माइक्रोसॉफ्ट", "आईबीएम"],
"answer_en": "Xerox",
"answer_hi": "जेरोक्स",
"attempted": false,
"selected": ""
},
{
"num": 80,
"question_en": "What is the file extension for a Windows help file?",
"question_hi": "विंडोज़ हेल्प फाइल के लिए फाइल एक्सटेंशन क्या है?",
"options_en": [".hlp", ".chm", ".help", ".man"],
"options_hi": [".hlp", ".chm", ".help", ".man"],
"answer_en": ".hlp",
"answer_hi": ".hlp",
"attempted": false,
"selected": ""
},
{
"num": 81,
"question_en": "Which key is used to move the cursor to the beginning of a line?",
"question_hi": "कर्सर को लाइन की शुरुआत में ले जाने के लिए किस कुंजी का उपयोग किया जाता है?",
"options_en": ["Home", "End", "Page Up", "Page Down"],
"options_hi": ["होम", "एंड", "पेज अप", "पेज डाउन"],
"answer_en": "Home",
"answer_hi": "होम",
"attempted": false,
"selected": ""
},
{
"num": 82,
"question_en": "What does BIOS stand for?",
"question_hi": "BIOS का क्या अर्थ है?",
"options_en": ["Basic Input Output System", "Basic Input Output Software", "Binary Input Output System", "Binary Input Output Software"],
"options_hi": ["बेसिक इनपुट आउटपुट सिस्टम", "बेसिक इनपुट आउटपुट सॉफ्टवेयर", "बाइनरी इनपुट आउटपुट सिस्टम", "बाइनरी इनपुट आउटपुट सॉफ्टवेयर"],
"answer_en": "Basic Input Output System",
"answer_hi": "बेसिक इनपुट आउटपुट सिस्टम",
"attempted": false,
"selected": ""
},
{
"num": 83,
"question_en": "Which device is used to test network connectivity?",
"question_hi": "नेटवर्क कनेक्टिविटी टेस्ट करने के लिए किस डिवाइस/कमांड का उपयोग किया जाता है?",
"options_en": ["Ping", "Multimeter", "Oscilloscope", "All of these"],
"options_hi": ["पिंग", "मल्टीमीटर", "ऑसिलोस्कोप", "ये सभी"],
"answer_en": "Ping",
"answer_hi": "पिंग",
"attempted": false,
"selected": ""
},
{
"num": 84,
"question_en": "What is the standard size of a Micro SD card?",
"question_hi": "माइक्रो SD कार्ड का मानक आकार क्या है?",
"options_en": ["Varies (up to 1TB)", "32 GB max", "64 GB max", "128 GB max"],
"options_hi": ["अलग-अलग (1TB तक)", "32 GB अधिकतम", "64 GB अधिकतम", "128 GB अधिकतम"],
"answer_en": "Varies (up to 1TB)",
"answer_hi": "अलग-अलग (1TB तक)",
"attempted": false,
"selected": ""
},
{
"num": 85,
"question_en": "Which company developed the first computer programming language COBOL?",
"question_hi": "पहली कंप्यूटर प्रोग्रामिंग लैंग्वेज COBOL किस कंपनी/समूह ने विकसित की?",
"options_en": ["CODASYL", "IBM", "Microsoft", "Bell Labs"],
"options_hi": ["CODASYL", "आईबीएम", "माइक्रोसॉफ्ट", "बेल लैब्स"],
"answer_en": "CODASYL",
"answer_hi": "CODASYL",
"attempted": false,
"selected": ""
},
{
"num": 86,
"question_en": "What does FTP stand for?",
"question_hi": "FTP का क्या अर्थ है?",
"options_en": ["File Transfer Protocol", "File Transmission Protocol", "File Transfer Process", "File Transmission Process"],
"options_hi": ["फाइल ट्रांसफर प्रोटोकॉल", "फाइल ट्रांसमिशन प्रोटोकॉल", "फाइल ट्रांसफर प्रोसेस", "फाइल ट्रांसमिशन प्रोसेस"],
"answer_en": "File Transfer Protocol",
"answer_hi": "फाइल ट्रांसफर प्रोटोकॉल",
"attempted": false,
"selected": ""
},
{
"num": 87,
"question_en": "Which key combination is used to copy selected text?",
"question_hi": "सेलेक्टेड टेक्स्ट को कॉपी करने के लिए किस की संयोजन का उपयोग किया जाता है?",
"options_en": ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + P"],
"options_hi": ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + P"],
"answer_en": "Ctrl + C",
"answer_hi": "Ctrl + C",
"attempted": false,
"selected": ""
},
{
"num": 88,
"question_en": "What does RAM stand for?",
"question_hi": "RAM का क्या अर्थ है?",
"options_en": ["Random Access Memory", "Random Access Module", "Read Access Memory", "Read Access Module"],
"options_hi": ["रैंडम एक्सेस मेमोरी", "रैंडम एक्सेस मॉड्यूल", "रीड एक्सेस मेमोरी", "रीड एक्सेस मॉड्यूल"],
"answer_en": "Random Access Memory",
"answer_hi": "रैंडम एक्सेस मेमोरी",
"attempted": false,
"selected": ""
},
{
"num": 89,
"question_en": "Which company created the first tablet computer?",
"question_hi": "पहला टैबलेट कंप्यूटर किस कंपनी ने बनाया?",
"options_en": ["GRiD Systems", "Apple", "Microsoft", "IBM"],
"options_hi": ["जीआरआईडी सिस्टम्स", "एप्पल", "माइक्रोसॉफ्ट", "आईबीएम"],
"answer_en": "GRiD Systems",
"answer_hi": "जीआरआईडी सिस्टम्स",
"attempted": false,
"selected": ""
},
{
"num": 90,
"question_en": "What is the file extension for a Windows temporary file?",
"question_hi": "विंडोज़ टेम्पररी फाइल के लिए फाइल एक्सटेंशन क्या है?",
"options_en": [".tmp", ".temp", ".cache", ".bak"],
"options_hi": [".tmp", ".temp", ".cache", ".bak"],
"answer_en": ".tmp",
"answer_hi": ".tmp",
"attempted": false,
"selected": ""
},
{
"num": 91,
"question_en": "Which key is used to delete the character to the left of the cursor?",
"question_hi": "कर्सर के बाईं ओर के करैक्टर को डिलीट करने के लिए किस कुंजी का उपयोग किया जाता है?",
"options_en": ["Backspace", "Delete", "Shift + Delete", "Ctrl + Delete"],
"options_hi": ["बैकस्पेस", "डिलीट", "Shift + Delete", "Ctrl + Delete"],
"answer_en": "Backspace",
"answer_hi": "बैकस्पेस",
"attempted": false,
"selected": ""
},
{
"num": 92,
"question_en": "What does LAN stand for?",
"question_hi": "LAN का क्या अर्थ है?",
"options_en": ["Local Area Network", "Local Access Network", "Large Area Network", "Large Access Network"],
"options_hi": ["लोकल एरिया नेटवर्क", "लोकल एक्सेस नेटवर्क", "लार्ज एरिया नेटवर्क", "लार्ज एक्सेस नेटवर्क"],
"answer_en": "Local Area Network",
"answer_hi": "लोकल एरिया नेटवर्क",
"attempted": false,
"selected": ""
},
{
"num": 93,
"question_en": "Which device is used to test power supply voltage?",
"question_hi": "पावर सप्लाई वोल्टेज टेस्ट करने के लिए किस डिवाइस का उपयोग किया जाता है?",
"options_en": ["Multimeter", "Oscilloscope", "Power Supply Tester", "All of these"],
"options_hi": ["मल्टीमीटर", "ऑसिलोस्कोप", "पावर सप्लाई टेस्टर", "ये सभी"],
"answer_en": "All of these",
"answer_hi": "ये सभी",
"attempted": false,
"selected": ""
},
{
"num": 94,
"question_en": "What is the standard size of a standard CD-R?",
"question_hi": "स्टैंडर्ड CD-R का मानक आकार क्या है?",
"options_en": ["700 MB", "650 MB", "800 MB", "900 MB"],
"options_hi": ["700 MB", "650 MB", "800 MB", "900 MB"],
"answer_en": "700 MB",
"answer_hi": "700 MB",
"attempted": false,
"selected": ""
},
{
"num": 95,
"question_en": "Which company developed the first computer operating system?",
"question_hi": "पहला कंप्यूटर ऑपरेटिंग सिस्टम किस कंपनी ने विकसित किया?",
"options_en": ["General Motors", "IBM", "Microsoft", "Bell Labs"],
"options_hi": ["जनरल मोटर्स", "आईबीएम", "माइक्रोसॉफ्ट", "बेल लैब्स"],
"answer_en": "General Motors",
"answer_hi": "जनरल मोटर्स",
"attempted": false,
"selected": ""
},
{
"num": 96,
"question_en": "What does HTTP stand for?",
"question_hi": "HTTP का क्या अर्थ है?",
"options_en": ["Hypertext Transfer Protocol", "Hypertext Transmission Protocol", "Hypertext Transfer Process", "Hypertext Transmission Process"],
"options_hi": ["हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाइपरटेक्स्ट ट्रांसमिशन प्रोटोकॉल", "हाइपरटेक्स्ट ट्रांसफर प्रोसेस", "हाइपरटेक्स्ट ट्रांसमिशन प्रोसेस"],
"answer_en": "Hypertext Transfer Protocol",
"answer_hi": "हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल",
"attempted": false,
"selected": ""
},
{
"num": 97,
"question_en": "Which key combination is used to paste copied text?",
"question_hi": "कॉपी किए गए टेक्स्ट को पेस्ट करने के लिए किस की संयोजन का उपयोग किया जाता है?",
"options_en": ["Ctrl + V", "Ctrl + P", "Ctrl + C", "Ctrl + X"],
"options_hi": ["Ctrl + V", "Ctrl + P", "Ctrl + C", "Ctrl + X"],
"answer_en": "Ctrl + V",
"answer_hi": "Ctrl + V",
"attempted": false,
"selected": ""
},
{
"num": 98,
"question_en": "What does ROM stand for?",
"question_hi": "ROM का क्या अर्थ है?",
"options_en": ["Read Only Memory", "Read Only Module", "Random Only Memory", "Random Only Module"],
"options_hi": ["रीड ओनली मेमोरी", "रीड ओनली मॉड्यूल", "रैंडम ओनली मेमोरी", "रैंडम ओनली मॉड्यूल"],
"answer_en": "Read Only Memory",
"answer_hi": "रीड ओनली मेमोरी",
"attempted": false,
"selected": ""
},
{
"num": 99,
"question_en": "Which company created the first smartphone?",
"question_hi": "पहला स्मार्टफोन किस कंपनी ने बनाया?",
"options_en": ["IBM", "Apple", "Nokia", "BlackBerry"],
"options_hi": ["आईबीएम", "एप्पल", "नोकिया", "ब्लैकबेरी"],
"answer_en": "IBM",
"answer_hi": "आईबीएम",
"attempted": false,
"selected": ""
},
{
"num": 100,
"question_en": "What is the file extension for a Windows bitmap image?",
"question_hi": "विंडोज़ बिटमैप इमेज के लिए फाइल एक्सटेंशन क्या है?",
"options_en": [".bmp", ".jpg", ".png", ".gif"],
"options_hi": [".bmp", ".jpg", ".png", ".gif"],
"answer_en": ".bmp",
"answer_hi": ".bmp",
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