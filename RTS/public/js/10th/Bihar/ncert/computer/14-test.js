const questions= [
    {
        "num": 1,
        "question_en": "Which key is used to activate the function keys?",
        "question_hi": "फंक्शन कीज़ को सक्रिय करने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["Fn", "Ctrl", "Alt", "Shift"],
        "options_hi": ["Fn", "Ctrl", "Alt", "Shift"],
        "answer_en": "Fn",
        "answer_hi": "Fn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the unit of measurement for screen refresh rate?",
        "question_hi": "स्क्रीन रिफ्रेश रेट के मापन की इकाई क्या है?",
        "options_en": ["Hertz", "Pixels", "FPS", "Both Hertz and FPS"],
        "options_hi": ["हर्ट्ज", "पिक्सेल", "एफपीएस", "हर्ट्ज और एफपीएस दोनों"],
        "answer_en": "Both Hertz and FPS",
        "answer_hi": "हर्ट्ज और एफपीएस दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which company developed the first computer with trackpoint?",
        "question_hi": "पहला ट्रैकपॉइंट वाला कंप्यूटर किस कंपनी ने विकसित किया?",
        "options_en": ["IBM", "Apple", "Dell", "Lenovo"],
        "options_hi": ["आईबीएम", "एप्पल", "डेल", "लेनोवो"],
        "answer_en": "IBM",
        "answer_hi": "आईबीएम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What does XPS stand for?",
        "question_hi": "XPS का क्या अर्थ है?",
        "options_en": ["XML Paper Specification", "XML Print Specification", "Xerox Paper Specification", "Xerox Print Specification"],
        "options_hi": ["XML पेपर स्पेसिफिकेशन", "XML प्रिंट स्पेसिफिकेशन", "जेरोक्स पेपर स्पेसिफिकेशन", "जेरोक्स प्रिंट स्पेसिफिकेशन"],
        "answer_en": "XML Paper Specification",
        "answer_hi": "XML पेपर स्पेसिफिकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which device is used to connect computer to projector?",
        "question_hi": "कंप्यूटर को प्रोजेक्टर से जोड़ने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["VGA Cable", "HDMI Cable", "Both", "USB Cable"],
        "options_hi": ["VGA केबल", "HDMI केबल", "दोनों", "USB केबल"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the full form of TDP?",
        "question_hi": "TDP का पूर्ण रूप क्या है?",
        "options_en": ["Thermal Design Power", "Thermal Design Point", "Total Design Power", "Total Design Point"],
        "options_hi": ["थर्मल डिज़ाइन पावर", "थर्मल डिज़ाइन पॉइंट", "टोटल डिज़ाइन पावर", "टोटल डिज़ाइन पॉइंट"],
        "answer_en": "Thermal Design Power",
        "answer_hi": "थर्मल डिज़ाइन पावर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which key combination is used to open emoji panel?",
        "question_hi": "इमोजी पैनल खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Windows + .", "Windows + ;", "Ctrl + .", "Alt + ."],
        "options_hi": ["Windows + .", "Windows + ;", "Ctrl + .", "Alt + ."],
        "answer_en": "Windows + .",
        "answer_hi": "Windows + .",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does M.2 stand for in storage?",
        "question_hi": "स्टोरेज में M.2 का क्या अर्थ है?",
        "options_en": ["Next Generation Form Factor", "Mini Form Factor", "Micro Form Factor", "Mobile Form Factor"],
        "options_hi": ["नेक्स्ट जनरेशन फॉर्म फैक्टर", "मिनी फॉर्म फैक्टर", "माइक्रो फॉर्म फैक्टर", "मोबाइल फॉर्म फैक्टर"],
        "answer_en": "Next Generation Form Factor",
        "answer_hi": "नेक्स्ट जनरेशन फॉर्म फैक्टर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which company created the first computer with backlit keyboard?",
        "question_hi": "पहला बैकलिट कीबोर्ड वाला कंप्यूटर किस कंपनी ने बनाया?",
        "options_en": ["Apple", "IBM", "Dell", "Alienware"],
        "options_hi": ["एप्पल", "आईबीएम", "डेल", "एलियनवेयर"],
        "answer_en": "Apple",
        "answer_hi": "एप्पल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the file extension for a Windows update file?",
        "question_hi": "विंडोज अपडेट फाइल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".msu", ".exe", ".cab", ".update"],
        "options_hi": [".msu", ".exe", ".cab", ".update"],
        "answer_en": ".msu",
        "answer_hi": ".msu",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which key is used to toggle scroll lock?",
        "question_hi": "स्क्रॉल लॉक टॉगल करने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["Scroll Lock", "Num Lock", "Caps Lock", "Insert"],
        "options_hi": ["स्क्रॉल लॉक", "नम लॉक", "कैप्स लॉक", "इंसर्ट"],
        "answer_en": "Scroll Lock",
        "answer_hi": "स्क्रॉल लॉक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What does LDAP stand for?",
        "question_hi": "LDAP का क्या अर्थ है?",
        "options_en": ["Lightweight Directory Access Protocol", "Light Directory Access Protocol", "Lightweight Data Access Protocol", "Light Data Access Protocol"],
        "options_hi": ["लाइटवेट डायरेक्टरी एक्सेस प्रोटोकॉल", "लाइट डायरेक्टरी एक्सेस प्रोटोकॉल", "लाइटवेट डेटा एक्सेस प्रोटोकॉल", "लाइट डेटा एक्सेस प्रोटोकॉल"],
        "answer_en": "Lightweight Directory Access Protocol",
        "answer_hi": "लाइटवेट डायरेक्टरी एक्सेस प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which device is used to measure fan speed?",
        "question_hi": "फैन स्पीड मापने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["RPM Sensor", "Multimeter", "Thermometer", "All of these"],
        "options_hi": ["आरपीएम सेंसर", "मल्टीमीटर", "थर्मामीटर", "ये सभी"],
        "answer_en": "RPM Sensor",
        "answer_hi": "आरपीएम सेंसर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the standard size of a microSDHC card?",
        "question_hi": "माइक्रोएसडीएचसी कार्ड का मानक आकार क्या है?",
        "options_en": ["Up to 32GB", "Up to 64GB", "Up to 128GB", "Up to 256GB"],
        "options_hi": ["32GB तक", "64GB तक", "128GB तक", "256GB तक"],
        "answer_en": "Up to 32GB",
        "answer_hi": "32GB तक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which company developed the first computer with OLED display?",
        "question_hi": "पहला OLED डिस्प्ले वाला कंप्यूटर किस कंपनी ने विकसित किया?",
        "options_en": ["Apple", "Dell", "Lenovo", "Sony"],
        "options_hi": ["एप्पल", "डेल", "लेनोवो", "सोनी"],
        "answer_en": "Apple",
        "answer_hi": "एप्पल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does MBR stand for?",
        "question_hi": "MBR का क्या अर्थ है?",
        "options_en": ["Master Boot Record", "Main Boot Record", "Master Boot Region", "Main Boot Region"],
        "options_hi": ["मास्टर बूट रिकॉर्ड", "मेन बूट रिकॉर्ड", "मास्टर बूट रीजन", "मेन बूट रीजन"],
        "answer_en": "Master Boot Record",
        "answer_hi": "मास्टर बूट रिकॉर्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which key combination is used to take partial screenshot?",
        "question_hi": "पार्शियल स्क्रीनशॉट लेने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Windows + Shift + S", "Windows + S", "Ctrl + Shift + S", "Alt + S"],
        "options_hi": ["Windows + Shift + S", "Windows + S", "Ctrl + Shift + S", "Alt + S"],
        "answer_en": "Windows + Shift + S",
        "answer_hi": "Windows + Shift + S",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does GPT stand for?",
        "question_hi": "GPT का क्या अर्थ है?",
        "options_en": ["GUID Partition Table", "Global Partition Table", "GUID Partition Type", "Global Partition Type"],
        "options_hi": ["GUID पार्टीशन टेबल", "ग्लोबल पार्टीशन टेबल", "GUID पार्टीशन टाइप", "ग्लोबल पार्टीशन टाइप"],
        "answer_en": "GUID Partition Table",
        "answer_hi": "GUID पार्टीशन टेबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which company created the first computer with facial recognition?",
        "question_hi": "पहला फेशियल रिकग्निशन वाला कंप्यूटर किस कंपनी ने बनाया?",
        "options_en": ["Microsoft", "Apple", "Lenovo", "Dell"],
        "options_hi": ["माइक्रोसॉफ्ट", "एप्पल", "लेनोवो", "डेल"],
        "answer_en": "Microsoft",
        "answer_hi": "माइक्रोसॉफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the file extension for a Windows driver file?",
        "question_hi": "विंडोज ड्राइवर फाइल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".sys", ".drv", ".inf", "All of these"],
        "options_hi": [".sys", ".drv", ".inf", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which key is used to toggle num lock?",
        "question_hi": "नम लॉक टॉगल करने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["Num Lock", "Scroll Lock", "Caps Lock", "Insert"],
        "options_hi": ["नम लॉक", "स्क्रॉल लॉक", "कैप्स लॉक", "इंसर्ट"],
        "answer_en": "Num Lock",
        "answer_hi": "नम लॉक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does SMB stand for?",
        "question_hi": "SMB का क्या अर्थ है?",
        "options_en": ["Server Message Block", "Server Management Block", "System Message Block", "System Management Block"],
        "options_hi": ["सर्वर मैसेज ब्लॉक", "सर्वर मैनेजमेंट ब्लॉक", "सिस्टम मैसेज ब्लॉक", "सिस्टम मैनेजमेंट ब्लॉक"],
        "answer_en": "Server Message Block",
        "answer_hi": "सर्वर मैसेज ब्लॉक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which device is used to measure network latency?",
        "question_hi": "नेटवर्क लेटेंसी मापने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Ping Utility", "Multimeter", "Oscilloscope", "All of these"],
        "options_hi": ["पिंग यूटिलिटी", "मल्टीमीटर", "ऑसिलोस्कोप", "ये सभी"],
        "answer_en": "Ping Utility",
        "answer_hi": "पिंग यूटिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the standard size of a microSDXC card?",
        "question_hi": "माइक्रोएसडीएक्ससी कार्ड का मानक आकार क्या है?",
        "options_en": ["64GB to 2TB", "32GB to 2TB", "128GB to 2TB", "256GB to 2TB"],
        "options_hi": ["64GB से 2TB", "32GB से 2TB", "128GB से 2TB", "256GB से 2TB"],
        "answer_en": "64GB to 2TB",
        "answer_hi": "64GB से 2TB",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which company developed the first computer with 3D camera?",
        "question_hi": "पहला 3D कैमरा वाला कंप्यूटर किस कंपनी ने विकसित किया?",
        "options_en": ["Apple", "Microsoft", "Lenovo", "HP"],
        "options_hi": ["एप्पल", "माइक्रोसॉफ्ट", "लेनोवो", "एचपी"],
        "answer_en": "Apple",
        "answer_hi": "एप्पल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What does UEFI stand for?",
        "question_hi": "UEFI का क्या अर्थ है?",
        "options_en": ["Unified Extensible Firmware Interface", "Universal Extensible Firmware Interface", "Unified Extended Firmware Interface", "Universal Extended Firmware Interface"],
        "options_hi": ["यूनिफाइड एक्सटेंसिबल फर्मवेयर इंटरफेस", "यूनिवर्सल एक्सटेंसिबल फर्मवेयर इंटरफेस", "यूनिफाइड एक्सटेंडेड फर्मवेयर इंटरफेस", "यूनिवर्सल एक्सटेंडेड फर्मवेयर इंटरफेस"],
        "answer_en": "Unified Extensible Firmware Interface",
        "answer_hi": "यूनिफाइड एक्सटेंसिबल फर्मवेयर इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which key combination is used to open clipboard history?",
        "question_hi": "क्लिपबोर्ड हिस्ट्री खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Windows + V", "Ctrl + V", "Ctrl + Shift + V", "Alt + V"],
        "options_hi": ["Windows + V", "Ctrl + V", "Ctrl + Shift + V", "Alt + V"],
        "answer_en": "Windows + V",
        "answer_hi": "Windows + V",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What does NVMe stand for?",
        "question_hi": "NVMe का क्या अर्थ है?",
        "options_en": ["Non-Volatile Memory Express", "Non-Volatile Memory Extension", "New Volatile Memory Express", "New Volatile Memory Extension"],
        "options_hi": ["नॉन-वोलेटाइल मेमोरी एक्सप्रेस", "नॉन-वोलेटाइल मेमोरी एक्सटेंशन", "न्यू वोलेटाइल मेमोरी एक्सप्रेस", "न्यू वोलेटाइल मेमोरी एक्सटेंशन"],
        "answer_en": "Non-Volatile Memory Express",
        "answer_hi": "नॉन-वोलेटाइल मेमोरी एक्सप्रेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which company created the first computer with eye tracking?",
        "question_hi": "पहला आई ट्रैकिंग वाला कंप्यूटर किस कंपनी ने बनाया?",
        "options_en": ["Tobii", "Microsoft", "Apple", "Lenovo"],
        "options_hi": ["टोबी", "माइक्रोसॉफ्ट", "एप्पल", "लेनोवो"],
        "answer_en": "Tobii",
        "answer_hi": "टोबी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the file extension for a Windows certificate file?",
        "question_hi": "विंडोज सर्टिफिकेट फाइल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".cer", ".crt", ".pfx", "All of these"],
        "options_hi": [".cer", ".crt", ".pfx", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which key is used to toggle caps lock?",
        "question_hi": "कैप्स लॉक टॉगल करने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["Caps Lock", "Num Lock", "Scroll Lock", "Insert"],
        "options_hi": ["कैप्स लॉक", "नम लॉक", "स्क्रॉल लॉक", "इंसर्ट"],
        "answer_en": "Caps Lock",
        "answer_hi": "कैप्स लॉक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does NFS stand for?",
        "question_hi": "NFS का क्या अर्थ है?",
        "options_en": ["Network File System", "Network File Service", "Network File Server", "Network File Sharing"],
        "options_hi": ["नेटवर्क फाइल सिस्टम", "नेटवर्क फाइल सर्विस", "नेटवर्क फाइल सर्वर", "नेटवर्क फाइल शेयरिंग"],
        "answer_en": "Network File System",
        "answer_hi": "नेटवर्क फाइल सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which device is used to measure power consumption?",
        "question_hi": "पावर कंजम्पशन मापने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Watt Meter", "Multimeter", "Voltmeter", "All of these"],
        "options_hi": ["वॉट मीटर", "मल्टीमीटर", "वोल्टमीटर", "ये सभी"],
        "answer_en": "Watt Meter",
        "answer_hi": "वॉट मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the standard size of a CompactFlash card?",
        "question_hi": "कॉम्पैक्टफ्लैश कार्ड का मानक आकार क्या है?",
        "options_en": ["Up to 512GB", "Up to 256GB", "Up to 128GB", "Up to 64GB"],
        "options_hi": ["512GB तक", "256GB तक", "128GB तक", "64GB तक"],
        "answer_en": "Up to 512GB",
        "answer_hi": "512GB तक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which company developed the first computer with haptic feedback?",
        "question_hi": "पहला हैप्टिक फीडबैक वाला कंप्यूटर किस कंपनी ने विकसित किया?",
        "options_en": ["Microsoft", "Apple", "Dell", "HP"],
        "options_hi": ["माइक्रोसॉफ्ट", "एप्पल", "डेल", "एचपी"],
        "answer_en": "Microsoft",
        "answer_hi": "माइक्रोसॉफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does BIOS CMOS store?",
        "question_hi": "BIOS CMOS क्या स्टोर करता है?",
        "options_en": ["System Configuration", "Operating System", "User Data", "All of these"],
        "options_hi": ["सिस्टम कॉन्फ़िगरेशन", "ऑपरेटिंग सिस्टम", "यूज़र डेटा", "ये सभी"],
        "answer_en": "System Configuration",
        "answer_hi": "सिस्टम कॉन्फ़िगरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which key combination is used to open virtual desktop?",
        "question_hi": "वर्चुअल डेस्कटॉप खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Windows + Tab", "Ctrl + Tab", "Alt + Tab", "Windows + D"],
        "options_hi": ["Windows + Tab", "Ctrl + Tab", "Alt + Tab", "Windows + D"],
        "answer_en": "Windows + Tab",
        "answer_hi": "Windows + Tab",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What does SATA stand for?",
        "question_hi": "SATA का क्या अर्थ है?",
        "options_en": ["Serial Advanced Technology Attachment", "Serial Advanced Transfer Attachment", "System Advanced Technology Attachment", "System Advanced Transfer Attachment"],
        "options_hi": ["सीरियल एडवांस्ड टेक्नोलॉजी अटैचमेंट", "सीरियल एडवांस्ड ट्रांसफर अटैचमेंट", "सिस्टम एडवांस्ड टेक्नोलॉजी अटैचमेंट", "सिस्टम एडवांस्ड ट्रांसफर अटैचमेंट"],
        "answer_en": "Serial Advanced Technology Attachment",
        "answer_hi": "सीरियल एडवांस्ड टेक्नोलॉजी अटैचमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which company created the first computer with gesture control?",
        "question_hi": "पहला जेस्चर कंट्रोल वाला कंप्यूटर किस कंपनी ने बनाया?",
        "options_en": ["Microsoft", "Apple", "Lenovo", "HP"],
        "options_hi": ["माइक्रोसॉफ्ट", "एप्पल", "लेनोवो", "एचपी"],
        "answer_en": "Microsoft",
        "answer_hi": "माइक्रोसॉफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the file extension for a Windows temporary internet file?",
        "question_hi": "विंडोज टेंपरेरी इंटरनेट फाइल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".tmp", ".temp", ".cache", "All of these"],
        "options_hi": [".tmp", ".temp", ".cache", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which key is used to toggle insert mode?",
        "question_hi": "इंसर्ट मोड टॉगल करने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["Insert", "Delete", "Home", "End"],
        "options_hi": ["इंसर्ट", "डिलीट", "होम", "एंड"],
        "answer_en": "Insert",
        "answer_hi": "इंसर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What does CIFS stand for?",
        "question_hi": "CIFS का क्या अर्थ है?",
        "options_en": ["Common Internet File System", "Common Internet File Service", "Common Internet File Server", "Common Internet File Sharing"],
        "options_hi": ["कॉमन इंटरनेट फाइल सिस्टम", "कॉमन इंटरनेट फाइल सर्विस", "कॉमन इंटरनेट फाइल सर्वर", "कॉमन इंटरनेट फाइल शेयरिंग"],
        "answer_en": "Common Internet File System",
        "answer_hi": "कॉमन इंटरनेट फाइल सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which device is used to measure ambient temperature?",
        "question_hi": "एम्बिएंट टेम्परेचर मापने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Thermometer", "Thermal Sensor", "Multimeter", "All of these"],
        "options_hi": ["थर्मामीटर", "थर्मल सेंसर", "मल्टीमीटर", "ये सभी"],
        "answer_en": "Thermal Sensor",
        "answer_hi": "थर्मल सेंसर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the standard size of a Memory Stick?",
        "question_hi": "मेमोरी स्टिक का मानक आकार क्या है?",
        "options_en": ["Up to 128GB", "Up to 64GB", "Up to 32GB", "Up to 16GB"],
        "options_hi": ["128GB तक", "64GB तक", "32GB तक", "16GB तक"],
        "answer_en": "Up to 128GB",
        "answer_hi": "128GB तक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which company developed the first computer with quantum processor?",
        "question_hi": "पहला क्वांटम प्रोसेसर वाला कंप्यूटर किस कंपनी ने विकसित किया?",
        "options_en": ["IBM", "Google", "Microsoft", "Intel"],
        "options_hi": ["आईबीएम", "गूगल", "माइक्रोसॉफ्ट", "इंटेल"],
        "answer_en": "IBM",
        "answer_hi": "आईबीएम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What does POST check during boot?",
        "question_hi": "बूट के दौरान POST क्या चेक करता है?",
        "options_en": ["Hardware Components", "Software Components", "Network Connection", "All of these"],
        "options_hi": ["हार्डवेयर कंपोनेंट्स", "सॉफ्टवेयर कंपोनेंट्स", "नेटवर्क कनेक्शन", "ये सभी"],
        "answer_en": "Hardware Components",
        "answer_hi": "हार्डवेयर कंपोनेंट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which key combination is used to open task view?",
        "question_hi": "टास्क व्यू खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Windows + Tab", "Ctrl + Tab", "Alt + Tab", "Windows + T"],
        "options_hi": ["Windows + Tab", "Ctrl + Tab", "Alt + Tab", "Windows + T"],
        "answer_en": "Windows + Tab",
        "answer_hi": "Windows + Tab",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What does PATA stand for?",
        "question_hi": "PATA का क्या अर्थ है?",
        "options_en": ["Parallel Advanced Technology Attachment", "Parallel Advanced Transfer Attachment", "Primary Advanced Technology Attachment", "Primary Advanced Transfer Attachment"],
        "options_hi": ["पैरेलल एडवांस्ड टेक्नोलॉजी अटैचमेंट", "पैरेलल एडवांस्ड ट्रांसफर अटैचमेंट", "प्राइमरी एडवांस्ड टेक्नोलॉजी अटैचमेंट", "प्राइमरी एडवांस्ड ट्रांसफर अटैचमेंट"],
        "answer_en": "Parallel Advanced Technology Attachment",
        "answer_hi": "पैरेलल एडवांस्ड टेक्नोलॉजी अटैचमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which company created the first computer with touch bar?",
        "question_hi": "पहला टच बार वाला कंप्यूटर किस कंपनी ने बनाया?",
        "options_en": ["Apple", "Microsoft", "Lenovo", "Dell"],
        "options_hi": ["एप्पल", "माइक्रोसॉफ्ट", "लेनोवो", "डेल"],
        "answer_en": "Apple",
        "answer_hi": "एप्पल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the file extension for a Windows help and support file?",
        "question_hi": "विंडोज हेल्प एंड सपोर्ट फाइल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".chm", ".hlp", ".help", "Both .chm and .hlp"],
        "options_hi": [".chm", ".hlp", ".help", ".chm और .hlp दोनों"],
        "answer_en": "Both .chm and .hlp",
        "answer_hi": ".chm और .hlp दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which key is used to pause screen output?",
        "question_hi": "स्क्रीन आउटपुट पॉज करने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["Pause/Break", "Scroll Lock", "Insert", "Delete"],
        "options_hi": ["पॉज/ब्रेक", "स्क्रॉल लॉक", "इंसर्ट", "डिलीट"],
        "answer_en": "Pause/Break",
        "answer_hi": "पॉज/ब्रेक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What does SNMP stand for?",
        "question_hi": "SNMP का क्या अर्थ है?",
        "options_en": ["Simple Network Management Protocol", "Simple Network Monitoring Protocol", "System Network Management Protocol", "System Network Monitoring Protocol"],
        "options_hi": ["सिंपल नेटवर्क मैनेजमेंट प्रोटोकॉल", "सिंपल नेटवर्क मॉनिटरिंग प्रोटोकॉल", "सिस्टम नेटवर्क मैनेजमेंट प्रोटोकॉल", "सिस्टम नेटवर्क मॉनिटरिंग प्रोटोकॉल"],
        "answer_en": "Simple Network Management Protocol",
        "answer_hi": "सिंपल नेटवर्क मैनेजमेंट प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which device is used to measure humidity?",
        "question_hi": "ह्यूमिडिटी मापने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Hygrometer", "Thermometer", "Barometer", "All of these"],
        "options_hi": ["हाइग्रोमीटर", "थर्मामीटर", "बैरोमीटर", "ये सभी"],
        "answer_en": "Hygrometer",
        "answer_hi": "हाइग्रोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the standard size of an xD-Picture Card?",
        "question_hi": "xD-पिक्चर कार्ड का मानक आकार क्या है?",
        "options_en": ["Up to 2GB", "Up to 1GB", "Up to 512MB", "Up to 256MB"],
        "options_hi": ["2GB तक", "1GB तक", "512MB तक", "256MB तक"],
        "answer_en": "Up to 2GB",
        "answer_hi": "2GB तक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which company developed the first computer with neural processor?",
        "question_hi": "पहला न्यूरल प्रोसेसर वाला कंप्यूटर किस कंपनी ने विकसित किया?",
        "options_en": ["Apple", "Intel", "AMD", "Qualcomm"],
        "options_hi": ["एप्पल", "इंटेल", "एएमडी", "क्वालकॉम"],
        "answer_en": "Apple",
        "answer_hi": "एप्पल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What does ACPI manage?",
        "question_hi": "ACPI क्या प्रबंधित करता है?",
        "options_en": ["Power Management", "Memory Management", "Processor Management", "All of these"],
        "options_hi": ["पावर मैनेजमेंट", "मेमोरी मैनेजमेंट", "प्रोसेसर मैनेजमेंट", "ये सभी"],
        "answer_en": "Power Management",
        "answer_hi": "पावर मैनेजमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which key combination is used to open Windows settings?",
        "question_hi": "विंडोज सेटिंग्स खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Windows + I", "Windows + S", "Ctrl + I", "Alt + S"],
        "options_hi": ["Windows + I", "Windows + S", "Ctrl + I", "Alt + S"],
        "answer_en": "Windows + I",
        "answer_hi": "Windows + I",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does eSATA stand for?",
        "question_hi": "eSATA का क्या अर्थ है?",
        "options_en": ["External Serial ATA", "Extended Serial ATA", "Enhanced Serial ATA", "External SATA"],
        "options_hi": ["एक्सटर्नल सीरियल ATA", "एक्सटेंडेड सीरियल ATA", "एनहांस्ड सीरियल ATA", "एक्सटर्नल SATA"],
        "answer_en": "External Serial ATA",
        "answer_hi": "एक्सटर्नल सीरियल ATA",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which company created the first computer with liquid cooling?",
        "question_hi": "पहला लिक्विड कूलिंग वाला कंप्यूटर किस कंपनी ने बनाया?",
        "options_en": ["Apple", "IBM", "Cray", "HP"],
        "options_hi": ["एप्पल", "आईबीएम", "क्रे", "एचपी"],
        "answer_en": "Cray",
        "answer_hi": "क्रे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the file extension for a Windows contact file?",
        "question_hi": "विंडोज कॉन्टैक्ट फाइल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".contact", ".vcf", ".ctc", ".cnt"],
        "options_hi": [".contact", ".vcf", ".ctc", ".cnt"],
        "answer_en": ".vcf",
        "answer_hi": ".vcf",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which key is used to print screen?",
        "question_hi": "स्क्रीन प्रिंट करने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["Print Screen", "PrtScn", "Both", "Screen Print"],
        "options_hi": ["प्रिंट स्क्रीन", "PrtScn", "दोनों", "स्क्रीन प्रिंट"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What does TFTP stand for?",
        "question_hi": "TFTP का क्या अर्थ है?",
        "options_en": ["Trivial File Transfer Protocol", "Trivial File Transfer Process", "Trivial File Transmission Protocol", "Trivial File Transmission Process"],
        "options_hi": ["ट्रिवियल फाइल ट्रांसफर प्रोटोकॉल", "ट्रिवियल फाइल ट्रांसफर प्रोसेस", "ट्रिवियल फाइल ट्रांसमिशन प्रोटोकॉल", "ट्रिवियल फाइल ट्रांसमिशन प्रोसेस"],
        "answer_en": "Trivial File Transfer Protocol",
        "answer_hi": "ट्रिवियल फाइल ट्रांसफर प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which device is used to measure air pressure?",
        "question_hi": "एयर प्रेशर मापने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Barometer", "Thermometer", "Hygrometer", "All of these"],
        "options_hi": ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "ये सभी"],
        "answer_en": "Barometer",
        "answer_hi": "बैरोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the standard size of a SmartMedia card?",
        "question_hi": "स्मार्टमीडिया कार्ड का मानक आकार क्या है?",
        "options_en": ["Up to 128MB", "Up to 64MB", "Up to 32MB", "Up to 16MB"],
        "options_hi": ["128MB तक", "64MB तक", "32MB तक", "16MB तक"],
        "answer_en": "Up to 128MB",
        "answer_hi": "128MB तक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which company developed the first computer with graphene processor?",
        "question_hi": "पहला ग्राफीन प्रोसेसर वाला कंप्यूटर किस कंपनी ने विकसित किया?",
        "options_en": ["IBM", "Intel", "AMD", "Samsung"],
        "options_hi": ["आईबीएम", "इंटेल", "एएमडी", "सैमसंग"],
        "answer_en": "IBM",
        "answer_hi": "आईबीएम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What does IRQ handle?",
        "question_hi": "IRQ क्या हैंडल करता है?",
        "options_en": ["Interrupt Requests", "Input Requests", "Interface Requests", "Internet Requests"],
        "options_hi": ["इंटरप्ट रिक्वेस्ट्स", "इनपुट रिक्वेस्ट्स", "इंटरफेस रिक्वेस्ट्स", "इंटरनेट रिक्वेस्ट्स"],
        "answer_en": "Interrupt Requests",
        "answer_hi": "इंटरप्ट रिक्वेस्ट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which key combination is used to open file explorer?",
        "question_hi": "फाइल एक्सप्लोरर खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Windows + E", "Windows + F", "Ctrl + E", "Alt + E"],
        "options_hi": ["Windows + E", "Windows + F", "Ctrl + E", "Alt + E"],
        "answer_en": "Windows + E",
        "answer_hi": "Windows + E",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What does SAS stand for?",
        "question_hi": "SAS का क्या अर्थ है?",
        "options_en": ["Serial Attached SCSI", "Serial Advanced SCSI", "System Attached SCSI", "System Advanced SCSI"],
        "options_hi": ["सीरियल अटैच्ड SCSI", "सीरियल एडवांस्ड SCSI", "सिस्टम अटैच्ड SCSI", "सिस्टम एडवांस्ड SCSI"],
        "answer_en": "Serial Attached SCSI",
        "answer_hi": "सीरियल अटैच्ड SCSI",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which company created the first computer with foldable screen?",
        "question_hi": "पहला फोल्डेबल स्क्रीन वाला कंप्यूटर किस कंपनी ने बनाया?",
        "options_en": ["Lenovo", "Microsoft", "HP", "Dell"],
        "options_hi": ["लेनोवो", "माइक्रोसॉफ्ट", "एचपी", "डेल"],
        "answer_en": "Lenovo",
        "answer_hi": "लेनोवो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the file extension for a Windows calendar file?",
        "question_hi": "विंडोज कैलेंडर फाइल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".ics", ".calendar", ".cal", ".cld"],
        "options_hi": [".ics", ".calendar", ".cal", ".cld"],
        "answer_en": ".ics",
        "answer_hi": ".ics",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which key is used to open context menu?",
        "question_hi": "कॉन्टेक्स्ट मेन्यू खोलने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["Application Key", "Windows Key", "Ctrl Key", "Alt Key"],
        "options_hi": ["एप्लिकेशन कुंजी", "विंडोज कुंजी", "Ctrl कुंजी", "Alt कुंजी"],
        "answer_en": "Application Key",
        "answer_hi": "एप्लिकेशन कुंजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What does NetBIOS provide?",
        "question_hi": "NetBIOS क्या प्रदान करता है?",
        "options_en": ["Network Naming Services", "File Sharing Services", "Print Services", "All of these"],
        "options_hi": ["नेटवर्क नेमिंग सर्विसेज", "फाइल शेयरिंग सर्विसेज", "प्रिंट सर्विसेज", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which device is used to measure magnetic fields?",
        "question_hi": "मैग्नेटिक फील्ड्स मापने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Magnetometer", "Multimeter", "Oscilloscope", "All of these"],
        "options_hi": ["मैग्नेटोमीटर", "मल्टीमीटर", "ऑसिलोस्कोप", "ये सभी"],
        "answer_en": "Magnetometer",
        "answer_hi": "मैग्नेटोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the standard size of a MultiMediaCard?",
        "question_hi": "मल्टीमीडियाकार्ड का मानक आकार क्या है?",
        "options_en": ["Up to 4GB", "Up to 2GB", "Up to 1GB", "Up to 512MB"],
        "options_hi": ["4GB तक", "2GB तक", "1GB तक", "512MB तक"],
        "answer_en": "Up to 4GB",
        "answer_hi": "4GB तक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which company developed the first computer with photonic processor?",
        "question_hi": "पहला फोटोनिक प्रोसेसर वाला कंप्यूटर किस कंपनी ने विकसित किया?",
        "options_en": ["Intel", "IBM", "Microsoft", "HP"],
        "options_hi": ["इंटेल", "आईबीएम", "माइक्रोसॉफ्ट", "एचपी"],
        "answer_en": "Intel",
        "answer_hi": "इंटेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What does DMA do?",
        "question_hi": "DMA क्या करता है?",
        "options_en": ["Direct Memory Access", "Direct Memory Allocation", "Direct Memory Addressing", "Direct Memory Architecture"],
        "options_hi": ["डायरेक्ट मेमोरी एक्सेस", "डायरेक्ट मेमोरी एलोकेशन", "डायरेक्ट मेमोरी एड्रेसिंग", "डायरेक्ट मेमोरी आर्किटेक्चर"],
        "answer_en": "Direct Memory Access",
        "answer_hi": "डायरेक्ट मेमोरी एक्सेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which key combination is used to open magnifier?",
        "question_hi": "मैग्निफायर खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Windows + +", "Windows + -", "Both", "Windows + M"],
        "options_hi": ["Windows + +", "Windows + -", "दोनों", "Windows + M"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What does SCSI stand for?",
        "question_hi": "SCSI का क्या अर्थ है?",
        "options_en": ["Small Computer System Interface", "Small Computer System Interconnect", "System Computer System Interface", "System Computer System Interconnect"],
        "options_hi": ["स्मॉल कंप्यूटर सिस्टम इंटरफेस", "स्मॉल कंप्यूटर सिस्टम इंटरकनेक्ट", "सिस्टम कंप्यूटर सिस्टम इंटरफेस", "सिस्टम कंप्यूटर सिस्टम इंटरकनेक्ट"],
        "answer_en": "Small Computer System Interface",
        "answer_hi": "स्मॉल कंप्यूटर सिस्टम इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which company created the first computer with modular design?",
        "question_hi": "पहला मॉड्यूलर डिज़ाइन वाला कंप्यूटर किस कंपनी ने बनाया?",
        "options_en": ["Framework", "Dell", "HP", "Lenovo"],
        "options_hi": ["फ्रेमवर्क", "डेल", "एचपी", "लेनोवो"],
        "answer_en": "Framework",
        "answer_hi": "फ्रेमवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the file extension for a Windows task file?",
        "question_hi": "विंडोज टास्क फाइल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".job", ".task", ".tsk", ".jobfile"],
        "options_hi": [".job", ".task", ".tsk", ".jobfile"],
        "answer_en": ".job",
        "answer_hi": ".job",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which key is used to open search in file explorer?",
        "question_hi": "फाइल एक्सप्लोरर में सर्च खोलने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["F3", "Ctrl + F", "Both", "F4"],
        "options_hi": ["F3", "Ctrl + F", "दोनों", "F4"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What does WINS stand for?",
        "question_hi": "WINS का क्या अर्थ है?",
        "options_en": ["Windows Internet Name Service", "Windows Internet Naming Service", "Windows Internet Network Service", "Windows Internet Naming System"],
        "options_hi": ["विंडोज इंटरनेट नेम सर्विस", "विंडोज इंटरनेट नेमिंग सर्विस", "विंडोज इंटरनेट नेटवर्क सर्विस", "विंडोज इंटरनेट नेमिंग सिस्टम"],
        "answer_en": "Windows Internet Name Service",
        "answer_hi": "विंडोज इंटरनेट नेम सर्विस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which device is used to measure radiation?",
        "question_hi": "रेडिएशन मापने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Geiger Counter", "Multimeter", "Oscilloscope", "All of these"],
        "options_hi": ["गीगर काउंटर", "मल्टीमीटर", "ऑसिलोस्कोप", "ये सभी"],
        "answer_en": "Geiger Counter",
        "answer_hi": "गीगर काउंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the standard size of a Secure Digital card?",
        "question_hi": "सिक्योर डिजिटल कार्ड का मानक आकार क्या है?",
        "options_en": ["Up to 2GB", "Up to 4GB", "Up to 8GB", "Up to 16GB"],
        "options_hi": ["2GB तक", "4GB तक", "8GB तक", "16GB तक"],
        "answer_en": "Up to 2GB",
        "answer_hi": "2GB तक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which company developed the first computer with carbon nanotube processor?",
        "question_hi": "पहला कार्बन नैनोट्यूब प्रोसेसर वाला कंप्यूटर किस कंपनी ने विकसित किया?",
        "options_en": ["IBM", "Intel", "MIT", "Stanford"],
        "options_hi": ["आईबीएम", "इंटेल", "एमआईटी", "स्टैनफोर्ड"],
        "answer_en": "MIT",
        "answer_hi": "एमआईटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What does CMOS battery power?",
        "question_hi": "CMOS बैटरी क्या पावर देती है?",
        "options_en": ["BIOS Settings Memory", "System RAM", "CPU Cache", "All of these"],
        "options_hi": ["BIOS सेटिंग्स मेमोरी", "सिस्टम RAM", "CPU कैश", "ये सभी"],
        "answer_en": "BIOS Settings Memory",
        "answer_hi": "BIOS सेटिंग्स मेमोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which key combination is used to open narrator?",
        "question_hi": "नैरेटर खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Windows + Ctrl + Enter", "Windows + Enter", "Ctrl + Alt + Enter", "Windows + N"],
        "options_hi": ["Windows + Ctrl + Enter", "Windows + Enter", "Ctrl + Alt + Enter", "Windows + N"],
        "answer_en": "Windows + Ctrl + Enter",
        "answer_hi": "Windows + Ctrl + Enter",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What does IDE stand for?",
        "question_hi": "IDE का क्या अर्थ है?",
        "options_en": ["Integrated Drive Electronics", "Integrated Development Environment", "Both", "Intelligent Drive Electronics"],
        "options_hi": ["इंटीग्रेटेड ड्राइव इलेक्ट्रॉनिक्स", "इंटीग्रेटेड डेवलपमेंट एनवायरनमेंट", "दोनों", "इंटेलिजेंट ड्राइव इलेक्ट्रॉनिक्स"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which company created the first computer with holographic display?",
        "question_hi": "पहला होलोग्राफिक डिस्प्ले वाला कंप्यूटर किस कंपनी ने बनाया?",
        "options_en": ["Microsoft", "Apple", "Looking Glass Factory", "HP"],
        "options_hi": ["माइक्रोसॉफ्ट", "एप्पल", "लुकिंग ग्लास फैक्टरी", "एचपी"],
        "answer_en": "Looking Glass Factory",
        "answer_hi": "लुकिंग ग्लास फैक्टरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the file extension for a Windows event log file?",
        "question_hi": "विंडोज इवेंट लॉग फाइल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".evtx", ".log", ".etl", "All of these"],
        "options_hi": [".evtx", ".log", ".etl", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which key is used to refresh in file explorer?",
        "question_hi": "फाइल एक्सप्लोरर में रिफ्रेश करने के लिए किस कुंजी का उपयोग किया जाता है?",
        "options_en": ["F5", "Ctrl + R", "Both", "F4"],
        "options_hi": ["F5", "Ctrl + R", "दोनों", "F4"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What does ARP stand for?",
        "question_hi": "ARP का क्या अर्थ है?",
        "options_en": ["Address Resolution Protocol", "Address Resolution Process", "Address Routing Protocol", "Address Routing Process"],
        "options_hi": ["एड्रेस रेज़ोल्यूशन प्रोटोकॉल", "एड्रेस रेज़ोल्यूशन प्रोसेस", "एड्रेस रूटिंग प्रोटोकॉल", "एड्रेस रूटिंग प्रोसेस"],
        "answer_en": "Address Resolution Protocol",
        "answer_hi": "एड्रेस रेज़ोल्यूशन प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which device is used to measure sound levels?",
        "question_hi": "साउंड लेवल मापने के लिए किस डिवाइस का उपयोग किया जाता है?",
        "options_en": ["Decibel Meter", "Multimeter", "Oscilloscope", "All of these"],
        "options_hi": ["डेसिबल मीटर", "मल्टीमीटर", "ऑसिलोस्कोप", "ये सभी"],
        "answer_en": "Decibel Meter",
        "answer_hi": "डेसिबल मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the standard size of a MiniSD card?",
        "question_hi": "मिनीएसडी कार्ड का मानक आकार क्या है?",
        "options_en": ["Up to 2GB", "Up to 4GB", "Up to 8GB", "Up to 16GB"],
        "options_hi": ["2GB तक", "4GB तक", "8GB तक", "16GB तक"],
        "answer_en": "Up to 2GB",
        "answer_hi": "2GB तक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which company developed the first computer with molecular processor?",
        "question_hi": "पहला मॉलिक्यूलर प्रोसेसर वाला कंप्यूटर किस कंपनी ने विकसित किया?",
        "options_en": ["HP", "IBM", "Intel", "Caltech"],
        "options_hi": ["एचपी", "आईबीएम", "इंटेल", "कैलटेक"],
        "answer_en": "Caltech",
        "answer_hi": "कैलटेक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What does API stand for?",
        "question_hi": "API का क्या अर्थ है?",
        "options_en": ["Application Programming Interface", "Application Program Interface", "Application Programming Interconnect", "Application Program Interconnect"],
        "options_hi": ["एप्लिकेशन प्रोग्रामिंग इंटरफेस", "एप्लिकेशन प्रोग्राम इंटरफेस", "एप्लिकेशन प्रोग्रामिंग इंटरकनेक्ट", "एप्लिकेशन प्रोग्राम इंटरकनेक्ट"],
        "answer_en": "Application Programming Interface",
        "answer_hi": "एप्लिकेशन प्रोग्रामिंग इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which key combination is used to open Windows security?",
        "question_hi": "विंडोज सिक्योरिटी खोलने के लिए किस की संयोजन का उपयोग किया जाता है?",
        "options_en": ["Windows + L", "Ctrl + Alt + Delete", "Both", "Windows + S"],
        "options_hi": ["Windows + L", "Ctrl + Alt + Delete", "दोनों", "Windows + S"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What does RAID stand for?",
        "question_hi": "RAID का क्या अर्थ है?",
        "options_en": ["Redundant Array of Independent Disks", "Redundant Array of Inexpensive Disks", "Both", "Reliable Array of Independent Disks"],
        "options_hi": ["रिडंडेंट एरे ऑफ इंडिपेंडेंट डिस्क्स", "रिडंडेंट एरे ऑफ इनएक्सपेंसिव डिस्क्स", "दोनों", "रिलायबल एरे ऑफ इंडिपेंडेंट डिस्क्स"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which company created the first computer with dual-screen?",
        "question_hi": "पहला डुअल-स्क्रीन वाला कंप्यूटर किस कंपनी ने बनाया?",
        "options_en": ["Microsoft", "Lenovo", "HP", "Asus"],
        "options_hi": ["माइक्रोसॉफ्ट", "लेनोवो", "एचपी", "एसस"],
        "answer_en": "Microsoft",
        "answer_hi": "माइक्रोसॉफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the file extension for a Windows registry backup file?",
        "question_hi": "विंडोज रजिस्ट्री बैकअप फाइल के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".reg", ".backup", ".rbk", ".regback"],
        "options_hi": [".reg", ".backup", ".rbk", ".regback"],
        "answer_en": ".reg",
        "answer_hi": ".reg",
        "attempted": false,
        "selected": ""
    }
]
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