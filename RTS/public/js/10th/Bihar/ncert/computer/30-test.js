const questions = [
    {
        "num": 1,
        "question_en": "What is the full form of CPU?",
        "question_hi": "CPU का पूरा नाम क्या है?",
        "options_en": ["Central Processing Unit", "Central Program Unit", "Computer Processing Unit", "Control Processing Unit"],
        "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट", "कंट्रोल प्रोसेसिंग यूनिट"],
        "answer_en": "Central Processing Unit",
        "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
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
        "num": 3,
        "question_en": "What is the full form of ROM?",
        "question_hi": "ROM का पूरा नाम क्या है?",
        "options_en": ["Read Only Memory", "Read Output Memory", "Random Only Memory", "Random Output Memory"],
        "options_hi": ["रीड ओनली मेमोरी", "रीड आउटपुट मेमोरी", "रैंडम ओनली मेमोरी", "रैंडम आउटपुट मेमोरी"],
        "answer_en": "Read Only Memory",
        "answer_hi": "रीड ओनली मेमोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What does BIOS stand for?",
        "question_hi": "BIOS का पूरा नाम क्या है?",
        "options_en": ["Basic Input Output System", "Binary Input Output System", "Basic Input Operating System", "Binary Input Operating System"],
        "options_hi": ["बेसिक इनपुट आउटपुट सिस्टम", "बाइनरी इनपुट आउटपुट सिस्टम", "बेसिक इनपुट ऑपरेटिंग सिस्टम", "बाइनरी इनपुट ऑपरेटिंग सिस्टम"],
        "answer_en": "Basic Input Output System",
        "answer_hi": "बेसिक इनपुट आउटपुट सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the full form of URL?",
        "question_hi": "URL का पूरा नाम क्या है?",
        "options_en": ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"],
        "options_hi": ["यूनिफॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लोकेटर", "यूनिफॉर्म रिसोर्स लिंक", "यूनिवर्सल रिसोर्स लिंक"],
        "answer_en": "Uniform Resource Locator",
        "answer_hi": "यूनिफॉर्म रिसोर्स लोकेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
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
        "num": 7,
        "question_en": "What is the full form of HTML?",
        "question_hi": "HTML का पूरा नाम क्या है?",
        "options_en": ["HyperText Markup Language", "HighText Markup Language", "HyperText Marking Language", "HighText Marking Language"],
        "options_hi": ["हाइपरटेक्स्ट मार्कअप लैंग्वेज", "हाईटेक्स्ट मार्कअप लैंग्वेज", "हाइपरटेक्स्ट मार्किंग लैंग्वेज", "हाईटेक्स्ट मार्किंग लैंग्वेज"],
        "answer_en": "HyperText Markup Language",
        "answer_hi": "हाइपरटेक्स्ट मार्कअप लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does PDF stand for?",
        "question_hi": "PDF का पूरा नाम क्या है?",
        "options_en": ["Portable Document Format", "Printable Document Format", "Portable Data Format", "Printable Data Format"],
        "options_hi": ["पोर्टेबल डॉक्यूमेंट फॉर्मेट", "प्रिंटेबल डॉक्यूमेंट फॉर्मेट", "पोर्टेबल डेटा फॉर्मेट", "प्रिंटेबल डेटा फॉर्मेट"],
        "answer_en": "Portable Document Format",
        "answer_hi": "पोर्टेबल डॉक्यूमेंट फॉर्मेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the full form of USB?",
        "question_hi": "USB का पूरा नाम क्या है?",
        "options_en": ["Universal Serial Bus", "Universal System Bus", "United Serial Bus", "United System Bus"],
        "options_hi": ["यूनिवर्सल सीरियल बस", "यूनिवर्सल सिस्टम बस", "यूनाइटेड सीरियल बस", "यूनाइटेड सिस्टम बस"],
        "answer_en": "Universal Serial Bus",
        "answer_hi": "यूनिवर्सल सीरियल बस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
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
        "num": 11,
        "question_en": "What is the full form of WAN?",
        "question_hi": "WAN का पूरा नाम क्या है?",
        "options_en": ["Wide Area Network", "Wireless Area Network", "Wide Access Network", "Wireless Access Network"],
        "options_hi": ["वाइड एरिया नेटवर्क", "वायरलेस एरिया नेटवर्क", "वाइड एक्सेस नेटवर्क", "वायरलेस एक्सेस नेटवर्क"],
        "answer_en": "Wide Area Network",
        "answer_hi": "वाइड एरिया नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What does VPN stand for?",
        "question_hi": "VPN का पूरा नाम क्या है?",
        "options_en": ["Virtual Private Network", "Virtual Public Network", "Visible Private Network", "Visible Public Network"],
        "options_hi": ["वर्चुअल प्राइवेट नेटवर्क", "वर्चुअल पब्लिक नेटवर्क", "विजिबल प्राइवेट नेटवर्क", "विजिबल पब्लिक नेटवर्क"],
        "answer_en": "Virtual Private Network",
        "answer_hi": "वर्चुअल प्राइवेट नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the full form of GUI?",
        "question_hi": "GUI का पूरा नाम क्या है?",
        "options_en": ["Graphical User Interface", "Graphical Utility Interface", "General User Interface", "General Utility Interface"],
        "options_hi": ["ग्राफिकल यूजर इंटरफेस", "ग्राफिकल यूटिलिटी इंटरफेस", "जनरल यूजर इंटरफेस", "जनरल यूटिलिटी इंटरफेस"],
        "answer_en": "Graphical User Interface",
        "answer_hi": "ग्राफिकल यूजर इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What does OS stand for?",
        "question_hi": "OS का पूरा नाम क्या है?",
        "options_en": ["Operating System", "Operating Software", "Output System", "Output Software"],
        "options_hi": ["ऑपरेटिंग सिस्टम", "ऑपरेटिंग सॉफ्टवेयर", "आउटपुट सिस्टम", "आउटपुट सॉफ्टवेयर"],
        "answer_en": "Operating System",
        "answer_hi": "ऑपरेटिंग सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the full form of SSD?",
        "question_hi": "SSD का पूरा नाम क्या है?",
        "options_en": ["Solid State Drive", "Solid Storage Drive", "Static State Drive", "Static Storage Drive"],
        "options_hi": ["सॉलिड स्टेट ड्राइव", "सॉलिड स्टोरेज ड्राइव", "स्टैटिक स्टेट ड्राइव", "स्टैटिक स्टोरेज ड्राइव"],
        "answer_en": "Solid State Drive",
        "answer_hi": "सॉलिड स्टेट ड्राइव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does HDD stand for?",
        "question_hi": "HDD का पूरा नाम क्या है?",
        "options_en": ["Hard Disk Drive", "Hard Drive Disk", "High Disk Drive", "High Drive Disk"],
        "options_hi": ["हार्ड डिस्क ड्राइव", "हार्ड ड्राइव डिस्क", "हाई डिस्क ड्राइव", "हाई ड्राइव डिस्क"],
        "answer_en": "Hard Disk Drive",
        "answer_hi": "हार्ड डिस्क ड्राइव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the full form of IP?",
        "question_hi": "IP का पूरा नाम क्या है?",
        "options_en": ["Internet Protocol", "Internet Program", "Internal Protocol", "Internal Program"],
        "options_hi": ["इंटरनेट प्रोटोकॉल", "इंटरनेट प्रोग्राम", "इंटरनल प्रोटोकॉल", "इंटरनल प्रोग्राम"],
        "answer_en": "Internet Protocol",
        "answer_hi": "इंटरनेट प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does DNS stand for?",
        "question_hi": "DNS का पूरा नाम क्या है?",
        "options_en": ["Domain Name System", "Domain Network System", "Data Name System", "Data Network System"],
        "options_hi": ["डोमेन नेम सिस्टम", "डोमेन नेटवर्क सिस्टम", "डेटा नेम सिस्टम", "डेटा नेटवर्क सिस्टम"],
        "answer_en": "Domain Name System",
        "answer_hi": "डोमेन नेम सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the full form of ISP?",
        "question_hi": "ISP का पूरा नाम क्या है?",
        "options_en": ["Internet Service Provider", "Internet System Provider", "Internal Service Provider", "Internal System Provider"],
        "options_hi": ["इंटरनेट सर्विस प्रोवाइडर", "इंटरनेट सिस्टम प्रोवाइडर", "इंटरनल सर्विस प्रोवाइडर", "इंटरनल सिस्टम प्रोवाइडर"],
        "answer_en": "Internet Service Provider",
        "answer_hi": "इंटरनेट सर्विस प्रोवाइडर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What does Wi-Fi stand for?",
        "question_hi": "Wi-Fi का पूरा नाम क्या है?",
        "options_en": ["Wireless Fidelity", "Wireless Frequency", "Wide Fidelity", "Wide Frequency"],
        "options_hi": ["वायरलेस फिडेलिटी", "वायरलेस फ्रीक्वेंसी", "वाइड फिडेलिटी", "वाइड फ्रीक्वेंसी"],
        "answer_en": "Wireless Fidelity",
        "answer_hi": "वायरलेस फिडेलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the full form of FTP?",
        "question_hi": "FTP का पूरा नाम क्या है?",
        "options_en": ["File Transfer Protocol", "File Transmission Protocol", "File Transfer Program", "File Transmission Program"],
        "options_hi": ["फाइल ट्रांसफर प्रोटोकॉल", "फाइल ट्रांसमिशन प्रोटोकॉल", "फाइल ट्रांसफर प्रोग्राम", "फाइल ट्रांसमिशन प्रोग्राम"],
        "answer_en": "File Transfer Protocol",
        "answer_hi": "फाइल ट्रांसफर प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does AI stand for?",
        "question_hi": "AI का पूरा नाम क्या है?",
        "options_en": ["Artificial Intelligence", "Automated Intelligence", "Artificial Information", "Automated Information"],
        "options_hi": ["आर्टिफिशियल इंटेलिजेंस", "ऑटोमेटेड इंटेलिजेंस", "आर्टिफिशियल इनफॉर्मेशन", "ऑटोमेटेड इनफॉर्मेशन"],
        "answer_en": "Artificial Intelligence",
        "answer_hi": "आर्टिफिशियल इंटेलिजेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the full form of VR?",
        "question_hi": "VR का पूरा नाम क्या है?",
        "options_en": ["Virtual Reality", "Visual Reality", "Virtual Response", "Visual Response"],
        "options_hi": ["वर्चुअल रियलिटी", "विजुअल रियलिटी", "वर्चुअल रिस्पॉन्स", "विजुअल रिस्पॉन्स"],
        "answer_en": "Virtual Reality",
        "answer_hi": "वर्चुअल रियलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What does AR stand for?",
        "question_hi": "AR का पूरा नाम क्या है?",
        "options_en": ["Augmented Reality", "Artificial Reality", "Augmented Response", "Artificial Response"],
        "options_hi": ["ऑगमेंटेड रियलिटी", "आर्टिफिशियल रियलिटी", "ऑगमेंटेड रिस्पॉन्स", "आर्टिफिशियल रिस्पॉन्स"],
        "answer_en": "Augmented Reality",
        "answer_hi": "ऑगमेंटेड रियलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the full form of GPU?",
        "question_hi": "GPU का पूरा नाम क्या है?",
        "options_en": ["Graphics Processing Unit", "Graphics Program Unit", "Graphics Processing Utility", "Graphics Program Utility"],
        "options_hi": ["ग्राफिक्स प्रोसेसिंग यूनिट", "ग्राफिक्स प्रोग्राम यूनिट", "ग्राफिक्स प्रोसेसिंग यूटिलिटी", "ग्राफिक्स प्रोग्राम यूटिलिटी"],
        "answer_en": "Graphics Processing Unit",
        "answer_hi": "ग्राफिक्स प्रोसेसिंग यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What does API stand for?",
        "question_hi": "API का पूरा नाम क्या है?",
        "options_en": ["Application Programming Interface", "Application Program Interface", "Application Programming Integration", "Application Program Integration"],
        "options_hi": ["एप्लीकेशन प्रोग्रामिंग इंटरफेस", "एप्लीकेशन प्रोग्राम इंटरफेस", "एप्लीकेशन प्रोग्रामिंग इंटीग्रेशन", "एप्लीकेशन प्रोग्राम इंटीग्रेशन"],
        "answer_en": "Application Programming Interface",
        "answer_hi": "एप्लीकेशन प्रोग्रामिंग इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the full form of SQL?",
        "question_hi": "SQL का पूरा नाम क्या है?",
        "options_en": ["Structured Query Language", "Structured Question Language", "System Query Language", "System Question Language"],
        "options_hi": ["स्ट्रक्चर्ड क्वेरी लैंग्वेज", "स्ट्रक्चर्ड क्वेश्चन लैंग्वेज", "सिस्टम क्वेरी लैंग्वेज", "सिस्टम क्वेश्चन लैंग्वेज"],
        "answer_en": "Structured Query Language",
        "answer_hi": "स्ट्रक्चर्ड क्वेरी लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What does CDN stand for?",
        "question_hi": "CDN का पूरा नाम क्या है?",
        "options_en": ["Content Delivery Network", "Content Distribution Network", "Content Delivery Node", "Content Distribution Node"],
        "options_hi": ["कंटेंट डिलीवरी नेटवर्क", "कंटेंट डिस्ट्रीब्यूशन नेटवर्क", "कंटेंट डिलीवरी नोड", "कंटेंट डिस्ट्रीब्यूशन नोड"],
        "answer_en": "Content Delivery Network",
        "answer_hi": "कंटेंट डिलीवरी नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the full form of DNS?",
        "question_hi": "DNS का पूरा नाम क्या है?",
        "options_en": ["Domain Name System", "Domain Name Server", "Digital Name System", "Digital Name Server"],
        "options_hi": ["डोमेन नेम सिस्टम", "डोमेन नेम सर्वर", "डिजिटल नेम सिस्टम", "डिजिटल नेम सर्वर"],
        "answer_en": "Domain Name System",
        "answer_hi": "डोमेन नेम सिस्टम",
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
        "question_en": "What is the full form of USB?",
        "question_hi": "USB का पूरा नाम क्या है?",
        "options_en": ["Universal Serial Bus", "Universal Serial Board", "United Serial Bus", "United Serial Board"],
        "options_hi": ["यूनिवर्सल सीरियल बस", "यूनिवर्सल सीरियल बोर्ड", "यूनाइटेड सीरियल बस", "यूनाइटेड सीरियल बोर्ड"],
        "answer_en": "Universal Serial Bus",
        "answer_hi": "यूनिवर्सल सीरियल बस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does LAN stand for?",
        "question_hi": "LAN का पूरा नाम क्या है?",
        "options_en": ["Local Area Network", "Local Access Network", "Large Area Network", "Large Access Network"],
        "options_hi": ["लोकल एरिया नेटवर्क", "लोकल एक्सेस नेटवर्क", "लार्ज एरिया नेटवर्क", "लार्ज एक्सेस नेटवर्क"],
        "answer_en": "Local Area Network",
        "answer_hi": "लोकल एरिया नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the full form of WAN?",
        "question_hi": "WAN का पूरा नाम क्या है?",
        "options_en": ["Wide Area Network", "Wireless Area Network", "World Area Network", "World Access Network"],
        "options_hi": ["वाइड एरिया नेटवर्क", "वायरलेस एरिया नेटवर्क", "वर्ल्ड एरिया नेटवर्क", "वर्ल्ड एक्सेस नेटवर्क"],
        "answer_en": "Wide Area Network",
        "answer_hi": "वाइड एरिया नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What does VPN stand for?",
        "question_hi": "VPN का पूरा नाम क्या है?",
        "options_en": ["Virtual Private Network", "Virtual Public Network", "Visible Private Network", "Visible Public Network"],
        "options_hi": ["वर्चुअल प्राइवेट नेटवर्क", "वर्चुअल पब्लिक नेटवर्क", "विजिबल प्राइवेट नेटवर्क", "विजिबल पब्लिक नेटवर्क"],
        "answer_en": "Virtual Private Network",
        "answer_hi": "वर्चुअल प्राइवेट नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the full form of HTTP?",
        "question_hi": "HTTP का पूरा नाम क्या है?",
        "options_en": ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HighText Transfer Protocol", "HighText Transmission Protocol"],
        "options_hi": ["हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाइपरटेक्स्ट ट्रांसमिशन प्रोटोकॉल", "हाईटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाईटेक्स्ट ट्रांसमिशन प्रोटोकॉल"],
        "answer_en": "HyperText Transfer Protocol",
        "answer_hi": "हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does HTTPS stand for?",
        "question_hi": "HTTPS का पूरा नाम क्या है?",
        "options_en": ["HyperText Transfer Protocol Secure", "HyperText Transfer Protocol System", "HighText Transfer Protocol Secure", "HighText Transfer Protocol System"],
        "options_hi": ["हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल सिक्योर", "हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल सिस्टम", "हाईटेक्स्ट ट्रांसफर प्रोटोकॉल सिक्योर", "हाईटेक्स्ट ट्रांसफर प्रोटोकॉल सिस्टम"],
        "answer_en": "HyperText Transfer Protocol Secure",
        "answer_hi": "हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल सिक्योर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the full form of URL?",
        "question_hi": "URL का पूरा नाम क्या है?",
        "options_en": ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"],
        "options_hi": ["यूनिफॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लोकेटर", "यूनिफॉर्म रिसोर्स लिंक", "यूनिवर्सल रिसोर्स लिंक"],
        "answer_en": "Uniform Resource Locator",
        "answer_hi": "यूनिफॉर्म रिसोर्स लोकेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What does HTML stand for?",
        "question_hi": "HTML का पूरा नाम क्या है?",
        "options_en": ["HyperText Markup Language", "HighText Markup Language", "HyperText Marking Language", "HighText Marking Language"],
        "options_hi": ["हाइपरटेक्स्ट मार्कअप लैंग्वेज", "हाईटेक्स्ट मार्कअप लैंग्वेज", "हाइपरटेक्स्ट मार्किंग लैंग्वेज", "हाईटेक्स्ट मार्किंग लैंग्वेज"],
        "answer_en": "HyperText Markup Language",
        "answer_hi": "हाइपरटेक्स्ट मार्कअप लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the full form of CSS?",
        "question_hi": "CSS का पूरा नाम क्या है?",
        "options_en": ["Cascading Style Sheets", "Computer Style Sheets", "Cascading System Sheets", "Computer System Sheets"],
        "options_hi": ["कैस्केडिंग स्टाइल शीट्स", "कंप्यूटर स्टाइल शीट्स", "कैस्केडिंग सिस्टम शीट्स", "कंप्यूटर सिस्टम शीट्स"],
        "answer_en": "Cascading Style Sheets",
        "answer_hi": "कैस्केडिंग स्टाइल शीट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What does JS stand for?",
        "question_hi": "JS का पूरा नाम क्या है?",
        "options_en": ["JavaScript", "Java System", "Java Source", "Java Script"],
        "options_hi": ["जावास्क्रिप्ट", "जावा सिस्टम", "जावा सोर्स", "जावा स्क्रिप्ट"],
        "answer_en": "JavaScript",
        "answer_hi": "जावास्क्रिप्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the full form of PHP?",
        "question_hi": "PHP का पूरा नाम क्या है?",
        "options_en": ["Hypertext Preprocessor", "Personal Home Page", "Preprocessor Hypertext Processor", "Processor Hypertext Preprocessor"],
        "options_hi": ["हाइपरटेक्स्ट प्रीप्रोसेसर", "पर्सनल होम पेज", "प्रीप्रोसेसर हाइपरटेक्स्ट प्रोसेसर", "प्रोसेसर हाइपरटेक्स्ट प्रीप्रोसेसर"],
        "answer_en": "Hypertext Preprocessor",
        "answer_hi": "हाइपरटेक्स्ट प्रीप्रोसेसर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What does XML stand for?",
        "question_hi": "XML का पूरा नाम क्या है?",
        "options_en": ["eXtensible Markup Language", "Extended Markup Language", "eXtensible Marking Language", "Extended Marking Language"],
        "options_hi": ["एक्सटेंसिबल मार्कअप लैंग्वेज", "एक्सटेंडेड मार्कअप लैंग्वेज", "एक्सटेंसिबल मार्किंग लैंग्वेज", "एक्सटेंडेड मार्किंग लैंग्वेज"],
        "answer_en": "eXtensible Markup Language",
        "answer_hi": "एक्सटेंसिबल मार्कअप लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the full form of JSON?",
        "question_hi": "JSON का पूरा नाम क्या है?",
        "options_en": ["JavaScript Object Notation", "Java Standard Object Notation", "JavaScript Object Network", "Java Standard Object Network"],
        "options_hi": ["जावास्क्रिप्ट ऑब्जेक्ट नोटेशन", "जावा स्टैंडर्ड ऑब्जेक्ट नोटेशन", "जावास्क्रिप्ट ऑब्जेक्ट नेटवर्क", "जावा स्टैंडर्ड ऑब्जेक्ट नेटवर्क"],
        "answer_en": "JavaScript Object Notation",
        "answer_hi": "जावास्क्रिप्ट ऑब्जेक्ट नोटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What does SQL stand for?",
        "question_hi": "SQL का पूरा नाम क्या है?",
        "options_en": ["Structured Query Language", "System Query Language", "Structured Question Language", "System Question Language"],
        "options_hi": ["स्ट्रक्चर्ड क्वेरी लैंग्वेज", "सिस्टम क्वेरी लैंग्वेज", "स्ट्रक्चर्ड क्वेश्चन लैंग्वेज", "सिस्टम क्वेश्चन लैंग्वेज"],
        "answer_en": "Structured Query Language",
        "answer_hi": "स्ट्रक्चर्ड क्वेरी लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the full form of DBMS?",
        "question_hi": "DBMS का पूरा नाम क्या है?",
        "options_en": ["Database Management System", "Database Management Software", "Data Backup Management System", "Data Backup Management Software"],
        "options_hi": ["डेटाबेस मैनेजमेंट सिस्टम", "डेटाबेस मैनेजमेंट सॉफ्टवेयर", "डेटा बैकअप मैनेजमेंट सिस्टम", "डेटा बैकअप मैनेजमेंट सॉफ्टवेयर"],
        "answer_en": "Database Management System",
        "answer_hi": "डेटाबेस मैनेजमेंट सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What does RDBMS stand for?",
        "question_hi": "RDBMS का पूरा नाम क्या है?",
        "options_en": ["Relational Database Management System", "Relational Database Management Software", "Real-time Database Management System", "Real-time Database Management Software"],
        "options_hi": ["रिलेशनल डेटाबेस मैनेजमेंट सिस्टम", "रिलेशनल डेटाबेस मैनेजमेंट सॉफ्टवेयर", "रील-टाइम डेटाबेस मैनेजमेंट सिस्टम", "रील-टाइम डेटाबेस मैनेजमेंट सॉफ्टवेयर"],
        "answer_en": "Relational Database Management System",
        "answer_hi": "रिलेशनल डेटाबेस मैनेजमेंट सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the full form of API?",
        "question_hi": "API का पूरा नाम क्या है?",
        "options_en": ["Application Programming Interface", "Application Program Interface", "Application Programming Integration", "Application Program Integration"],
        "options_hi": ["एप्लीकेशन प्रोग्रामिंग इंटरफेस", "एप्लीकेशन प्रोग्राम इंटरफेस", "एप्लीकेशन प्रोग्रामिंग इंटीग्रेशन", "एप्लीकेशन प्रोग्राम इंटीग्रेशन"],
        "answer_en": "Application Programming Interface",
        "answer_hi": "एप्लीकेशन प्रोग्रामिंग इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What does SDK stand for?",
        "question_hi": "SDK का पूरा नाम क्या है?",
        "options_en": ["Software Development Kit", "System Development Kit", "Software Development Kit", "System Development Kit"],
        "options_hi": ["सॉफ्टवेयर डेवलपमेंट किट", "सिस्टम डेवलपमेंट किट", "सॉफ्टवेयर डेवलपमेंट किट", "सिस्टम डेवलपमेंट किट"],
        "answer_en": "Software Development Kit",
        "answer_hi": "सॉफ्टवेयर डेवलपमेंट किट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the full form of IDE?",
        "question_hi": "IDE का पूरा नाम क्या है?",
        "options_en": ["Integrated Development Environment", "Integrated Development Engine", "Integrated Design Environment", "Integrated Design Engine"],
        "options_hi": ["इंटीग्रेटेड डेवलपमेंट एनवायरनमेंट", "इंटीग्रेटेड डेवलपमेंट इंजन", "इंटीग्रेटेड डिजाइन एनवायरनमेंट", "इंटीग्रेटेड डिजाइन इंजन"],
        "answer_en": "Integrated Development Environment",
        "answer_hi": "इंटीग्रेटेड डेवलपमेंट एनवायरनमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What does CLI stand for?",
        "question_hi": "CLI का पूरा नाम क्या है?",
        "options_en": ["Command Line Interface", "Command Line Interpreter", "Command Language Interface", "Command Language Interpreter"],
        "options_hi": ["कमांड लाइन इंटरफेस", "कमांड लाइन इंटरप्रेटर", "कमांड लैंग्वेज इंटरफेस", "कमांड लैंग्वेज इंटरप्रेटर"],
        "answer_en": "Command Line Interface",
        "answer_hi": "कमांड लाइन इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the full form of GUI?",
        "question_hi": "GUI का पूरा नाम क्या है?",
        "options_en": ["Graphical User Interface", "Graphical User Interpreter", "Graphical Utility Interface", "Graphical Utility Interpreter"],
        "options_hi": ["ग्राफिकल यूजर इंटरफेस", "ग्राफिकल यूजर इंटरप्रेटर", "ग्राफिकल यूटिलिटी इंटरफेस", "ग्राफिकल यूटिलिटी इंटरप्रेटर"],
        "answer_en": "Graphical User Interface",
        "answer_hi": "ग्राफिकल यूजर इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What does OS stand for?",
        "question_hi": "OS का पूरा नाम क्या है?",
        "options_en": ["Operating System", "Operating Software", "Output System", "Output Software"],
        "options_hi": ["ऑपरेटिंग सिस्टम", "ऑपरेटिंग सॉफ्टवेयर", "आउटपुट सिस्टम", "आउटपुट सॉफ्टवेयर"],
        "answer_en": "Operating System",
        "answer_hi": "ऑपरेटिंग सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the full form of BIOS?",
        "question_hi": "BIOS का पूरा नाम क्या है?",
        "options_en": ["Basic Input Output System", "Binary Input Output System", "Basic Input Operating System", "Binary Input Operating System"],
        "options_hi": ["बेसिक इनपुट आउटपुट सिस्टम", "बाइनरी इनपुट आउटपुट सिस्टम", "बेसिक इनपुट ऑपरेटिंग सिस्टम", "बाइनरी इनपुट ऑपरेटिंग सिस्टम"],
        "answer_en": "Basic Input Output System",
        "answer_hi": "बेसिक इनपुट आउटपुट सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What does UEFI stand for?",
        "question_hi": "UEFI का पूरा नाम क्या है?",
        "options_en": ["Unified Extensible Firmware Interface", "Universal Extensible Firmware Interface", "Unified Extensible Firmware Integration", "Universal Extensible Firmware Integration"],
        "options_hi": ["यूनिफाइड एक्सटेंसिबल फर्मवेयर इंटरफेस", "यूनिवर्सल एक्सटेंसिबल फर्मवेयर इंटरफेस", "यूनिफाइड एक्सटेंसिबल फर्मवेयर इंटीग्रेशन", "यूनिवर्सल एक्सटेंसिबल फर्मवेयर इंटीग्रेशन"],
        "answer_en": "Unified Extensible Firmware Interface",
        "answer_hi": "यूनिफाइड एक्सटेंसिबल फर्मवेयर इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the full form of RAM?",
        "question_hi": "RAM का पूरा नाम क्या है?",
        "options_en": ["Random Access Memory", "Read Access Memory", "Random Available Memory", "Read Available Memory"],
        "options_hi": ["रैंडम एक्सेस मेमोरी", "रीड एक्सेस मेमोरी", "रैंडम अवेलेबल मेमोरी", "रीड अवेलेबल मेमोरी"],
        "answer_en": "Random Access Memory",
        "answer_hi": "रैंडम एक्सेस मेमोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
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
        "num": 57,
        "question_en": "What is the full form of CPU?",
        "question_hi": "CPU का पूरा नाम क्या है?",
        "options_en": ["Central Processing Unit", "Central Program Unit", "Computer Processing Unit", "Control Processing Unit"],
        "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट", "कंट्रोल प्रोसेसिंग यूनिट"],
        "answer_en": "Central Processing Unit",
        "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does GPU stand for?",
        "question_hi": "GPU का पूरा नाम क्या है?",
        "options_en": ["Graphics Processing Unit", "Graphics Program Unit", "Graphics Processing Utility", "Graphics Program Utility"],
        "options_hi": ["ग्राफिक्स प्रोसेसिंग यूनिट", "ग्राफिक्स प्रोग्राम यूनिट", "ग्राफिक्स प्रोसेसिंग यूटिलिटी", "ग्राफिक्स प्रोग्राम यूटिलिटी"],
        "answer_en": "Graphics Processing Unit",
        "answer_hi": "ग्राफिक्स प्रोसेसिंग यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the full form of HDD?",
        "question_hi": "HDD का पूरा नाम क्या है?",
        "options_en": ["Hard Disk Drive", "Hard Drive Disk", "High Disk Drive", "High Drive Disk"],
        "options_hi": ["हार्ड डिस्क ड्राइव", "हार्ड ड्राइव डिस्क", "हाई डिस्क ड्राइव", "हाई ड्राइव डिस्क"],
        "answer_en": "Hard Disk Drive",
        "answer_hi": "हार्ड डिस्क ड्राइव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
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
        "num": 61,
        "question_en": "What is the full form of USB?",
        "question_hi": "USB का पूरा नाम क्या है?",
        "options_en": ["Universal Serial Bus", "Universal Serial Board", "United Serial Bus", "United Serial Board"],
        "options_hi": ["यूनिवर्सल सीरियल बस", "यूनिवर्सल सीरियल बोर्ड", "यूनाइटेड सीरियल बस", "यूनाइटेड सीरियल बोर्ड"],
        "answer_en": "Universal Serial Bus",
        "answer_hi": "यूनिवर्सल सीरियल बस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What does HDMI stand for?",
        "question_hi": "HDMI का पूरा नाम क्या है?",
        "options_en": ["High Definition Multimedia Interface", "High Definition Media Interface", "High Definition Multimedia Integration", "High Definition Media Integration"],
        "options_hi": ["हाई डेफिनिशन मल्टीमीडिया इंटरफेस", "हाई डेफिनिशन मीडिया इंटरफेस", "हाई डेफिनिशन मल्टीमीडिया इंटीग्रेशन", "हाई डेफिनिशन मीडिया इंटीग्रेशन"],
        "answer_en": "High Definition Multimedia Interface",
        "answer_hi": "हाई डेफिनिशन मल्टीमीडिया इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the full form of VGA?",
        "question_hi": "VGA का पूरा नाम क्या है?",
        "options_en": ["Video Graphics Array", "Video Graphics Adapter", "Visual Graphics Array", "Visual Graphics Adapter"],
        "options_hi": ["वीडियो ग्राफिक्स ऐरे", "वीडियो ग्राफिक्स एडाप्टर", "विजुअल ग्राफिक्स ऐरे", "विजुअल ग्राफिक्स एडाप्टर"],
        "answer_en": "Video Graphics Array",
        "answer_hi": "वीडियो ग्राफिक्स ऐरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What does DVI stand for?",
        "question_hi": "DVI का पूरा नाम क्या है?",
        "options_en": ["Digital Visual Interface", "Digital Video Interface", "Digital Visual Integration", "Digital Video Integration"],
        "options_hi": ["डिजिटल विजुअल इंटरफेस", "डिजिटल वीडियो इंटरफेस", "डिजिटल विजुअल इंटीग्रेशन", "डिजिटल वीडियो इंटीग्रेशन"],
        "answer_en": "Digital Visual Interface",
        "answer_hi": "डिजिटल विजुअल इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the full form of LCD?",
        "question_hi": "LCD का पूरा नाम क्या है?",
        "options_en": ["Liquid Crystal Display", "Liquid Crystal Diode", "Liquid Crystal Device", "Liquid Crystal Driver"],
        "options_hi": ["लिक्विड क्रिस्टल डिस्प्ले", "लिक्विड क्रिस्टल डायोड", "लिक्विड क्रिस्टल डिवाइस", "लिक्विड क्रिस्टल ड्राइवर"],
        "answer_en": "Liquid Crystal Display",
        "answer_hi": "लिक्विड क्रिस्टल डिस्प्ले",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What does LED stand for?",
        "question_hi": "LED का पूरा नाम क्या है?",
        "options_en": ["Light Emitting Diode", "Light Emitting Display", "Light Emitting Device", "Light Emitting Driver"],
        "options_hi": ["लाइट एमिटिंग डायोड", "लाइट एमिटिंग डिस्प्ले", "लाइट एमिटिंग डिवाइस", "लाइट एमिटिंग ड्राइवर"],
        "answer_en": "Light Emitting Diode",
        "answer_hi": "लाइट एमिटिंग डायोड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the full form of OLED?",
        "question_hi": "OLED का पूरा नाम क्या है?",
        "options_en": ["Organic Light Emitting Diode", "Organic Light Emitting Display", "Organic Light Emitting Device", "Organic Light Emitting Driver"],
        "options_hi": ["ऑर्गेनिक लाइट एमिटिंग डायोड", "ऑर्गेनिक लाइट एमिटिंग डिस्प्ले", "ऑर्गेनिक लाइट एमिटिंग डिवाइस", "ऑर्गेनिक लाइट एमिटिंग ड्राइवर"],
        "answer_en": "Organic Light Emitting Diode",
        "answer_hi": "ऑर्गेनिक लाइट एमिटिंग डायोड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What does IPS stand for?",
        "question_hi": "IPS का पूरा नाम क्या है?",
        "options_en": ["In-Plane Switching", "In-Plane Screen", "In-Plane System", "In-Plane Switch"],
        "options_hi": ["इन-प्लेन स्विचिंग", "इन-प्लेन स्क्रीन", "इन-प्लेन सिस्टम", "इन-प्लेन स्विच"],
        "answer_en": "In-Plane Switching",
        "answer_hi": "इन-प्लेन स्विचिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the full form of NFC?",
        "question_hi": "NFC का पूरा नाम क्या है?",
        "options_en": ["Near Field Communication", "Near Field Connection", "Near Field Control", "Near Field Contact"],
        "options_hi": ["नियर फील्ड कम्युनिकेशन", "नियर फील्ड कनेक्शन", "नियर फील्ड कंट्रोल", "नियर फील्ड कॉन्टैक्ट"],
        "answer_en": "Near Field Communication",
        "answer_hi": "नियर फील्ड कम्युनिकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What does RFID stand for?",
        "question_hi": "RFID का पूरा नाम क्या है?",
        "options_en": ["Radio Frequency Identification", "Radio Frequency Interface Device", "Radio Frequency Identification Device", "Radio Frequency Interface Detection"],
        "options_hi": ["रेडियो फ्रीक्वेंसी आइडेंटिफिकेशन", "रेडियो फ्रीक्वेंसी इंटरफेस डिवाइस", "रेडियो फ्रीक्वेंसी आइडेंटिफिकेशन डिवाइस", "रेडियो फ्रीक्वेंसी इंटरफेस डिटेक्शन"],
        "answer_en": "Radio Frequency Identification",
        "answer_hi": "रेडियो फ्रीक्वेंसी आइडेंटिफिकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the full form of GPS?",
        "question_hi": "GPS का पूरा नाम क्या है?",
        "options_en": ["Global Positioning System", "Global Positioning Satellite", "Global Positioning Service", "Global Positioning Software"],
        "options_hi": ["ग्लोबल पोजिशनिंग सिस्टम", "ग्लोबल पोजिशनिंग सैटेलाइट", "ग्लोबल पोजिशनिंग सर्विस", "ग्लोबल पोजिशनिंग सॉफ्टवेयर"],
        "answer_en": "Global Positioning System",
        "answer_hi": "ग्लोबल पोजिशनिंग सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What does GSM stand for?",
        "question_hi": "GSM का पूरा नाम क्या है?",
        "options_en": ["Global System for Mobile Communications", "Global System for Mobile", "Global Standard for Mobile Communications", "Global Standard for Mobile"],
        "options_hi": ["ग्लोबल सिस्टम फॉर मोबाइल कम्युनिकेशन्स", "ग्लोबल सिस्टम फॉर मोबाइल", "ग्लोबल स्टैंडर्ड फॉर मोबाइल कम्युनिकेशन्स", "ग्लोबल स्टैंडर्ड फॉर मोबाइल"],
        "answer_en": "Global System for Mobile Communications",
        "answer_hi": "ग्लोबल सिस्टम फॉर मोबाइल कम्युनिकेशन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the full form of CDMA?",
        "question_hi": "CDMA का पूरा नाम क्या है?",
        "options_en": ["Code Division Multiple Access", "Code Division Multiple Address", "Code Division Mobile Access", "Code Division Mobile Address"],
        "options_hi": ["कोड डिवीजन मल्टीपल एक्सेस", "कोड डिवीजन मल्टीपल एड्रेस", "कोड डिवीजन मोबाइल एक्सेस", "कोड डिवीजन मोबाइल एड्रेस"],
        "answer_en": "Code Division Multiple Access",
        "answer_hi": "कोड डिवीजन मल्टीपल एक्सेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What does LTE stand for?",
        "question_hi": "LTE का पूरा नाम क्या है?",
        "options_en": ["Long Term Evolution", "Long Term Extension", "Long Term Enhancement", "Long Term Expansion"],
        "options_hi": ["लॉन्ग टर्म एवोल्यूशन", "लॉन्ग टर्म एक्सटेंशन", "लॉन्ग टर्म एनहांसमेंट", "लॉन्ग टर्म एक्सपेंशन"],
        "answer_en": "Long Term Evolution",
        "answer_hi": "लॉन्ग टर्म एवोल्यूशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the full form of 5G?",
        "question_hi": "5G का पूरा नाम क्या है?",
        "options_en": ["5th Generation", "5th Generation Network", "5th Generation Technology", "5th Generation System"],
        "options_hi": ["5वीं जनरेशन", "5वीं जनरेशन नेटवर्क", "5वीं जनरेशन टेक्नोलॉजी", "5वीं जनरेशन सिस्टम"],
        "answer_en": "5th Generation",
        "answer_hi": "5वीं जनरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What does IoT stand for?",
        "question_hi": "IoT का पूरा नाम क्या है?",
        "options_en": ["Internet of Things", "Internet of Technology", "Internet of Tools", "Internet of Tasks"],
        "options_hi": ["इंटरनेट ऑफ थिंग्स", "इंटरनेट ऑफ टेक्नोलॉजी", "इंटरनेट ऑफ टूल्स", "इंटरनेट ऑफ टास्क्स"],
        "answer_en": "Internet of Things",
        "answer_hi": "इंटरनेट ऑफ थिंग्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the full form of AI?",
        "question_hi": "AI का पूरा नाम क्या है?",
        "options_en": ["Artificial Intelligence", "Automated Intelligence", "Artificial Information", "Automated Information"],
        "options_hi": ["आर्टिफिशियल इंटेलिजेंस", "ऑटोमेटेड इंटेलिजेंस", "आर्टिफिशियल इनफॉर्मेशन", "ऑटोमेटेड इनफॉर्मेशन"],
        "answer_en": "Artificial Intelligence",
        "answer_hi": "आर्टिफिशियल इंटेलिजेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What does ML stand for?",
        "question_hi": "ML का पूरा नाम क्या है?",
        "options_en": ["Machine Learning", "Machine Language", "Machine Logic", "Machine Library"],
        "options_hi": ["मशीन लर्निंग", "मशीन लैंग्वेज", "मशीन लॉजिक", "मशीन लाइब्रेरी"],
        "answer_en": "Machine Learning",
        "answer_hi": "मशीन लर्निंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the full form of DL?",
        "question_hi": "DL का पूरा नाम क्या है?",
        "options_en": ["Deep Learning", "Deep Language", "Deep Logic", "Deep Library"],
        "options_hi": ["डीप लर्निंग", "डीप लैंग्वेज", "डीप लॉजिक", "डीप लाइब्रेरी"],
        "answer_en": "Deep Learning",
        "answer_hi": "डीप लर्निंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What does NLP stand for?",
        "question_hi": "NLP का पूरा नाम क्या है?",
        "options_en": ["Natural Language Processing", "Natural Language Program", "Natural Language Processor", "Natural Language Protocol"],
        "options_hi": ["नेचुरल लैंग्वेज प्रोसेसिंग", "नेचुरल लैंग्वेज प्रोग्राम", "नेचुरल लैंग्वेज प्रोसेसर", "नेचुरल लैंग्वेज प्रोटोकॉल"],
        "answer_en": "Natural Language Processing",
        "answer_hi": "नेचुरल लैंग्वेज प्रोसेसिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the full form of CV?",
        "question_hi": "CV का पूरा नाम क्या है?",
        "options_en": ["Computer Vision", "Computer Video", "Computer View", "Computer Visual"],
        "options_hi": ["कंप्यूटर विजन", "कंप्यूटर वीडियो", "कंप्यूटर व्यू", "कंप्यूटर विजुअल"],
        "answer_en": "Computer Vision",
        "answer_hi": "कंप्यूटर विजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What does AR stand for?",
        "question_hi": "AR का पूरा नाम क्या है?",
        "options_en": ["Augmented Reality", "Artificial Reality", "Augmented Response", "Artificial Response"],
        "options_hi": ["ऑगमेंटेड रियलिटी", "आर्टिफिशियल रियलिटी", "ऑगमेंटेड रिस्पॉन्स", "आर्टिफिशियल रिस्पॉन्स"],
        "answer_en": "Augmented Reality",
        "answer_hi": "ऑगमेंटेड रियलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the full form of VR?",
        "question_hi": "VR का पूरा नाम क्या है?",
        "options_en": ["Virtual Reality", "Visual Reality", "Virtual Response", "Visual Response"],
        "options_hi": ["वर्चुअल रियलिटी", "विजुअल रियलिटी", "वर्चुअल रिस्पॉन्स", "विजुअल रिस्पॉन्स"],
        "answer_en": "Virtual Reality",
        "answer_hi": "वर्चुअल रियलिटी",
        "attempted": false,
        "selected": ""
    },
    {
"num": 84,
"question_en": "What does MR stand for?",
"question_hi": "MR का पूरा नाम क्या है?",
"options_en": ["Mixed Reality", "Mixed Response", "Multi Reality", "Multi Response"],
"options_hi": ["मिक्स्ड रियलिटी", "मिक्स्ड रिस्पॉन्स", "मल्टी रियलिटी", "मल्टी रिस्पॉन्स"],
"answer_en": "Mixed Reality",
"answer_hi": "मिक्स्ड रियलिटी",
"attempted": false,
"selected": ""
},
{
"num": 85,
"question_en": "What is the full form of XR?",
"question_hi": "XR का पूरा नाम क्या है?",
"options_en": ["Extended Reality", "Extended Response", "Extreme Reality", "Extreme Response"],
"options_hi": ["एक्सटेंडेड रियलिटी", "एक्सटेंडेड रिस्पॉन्स", "एक्सट्रीम रियलिटी", "एक्सट्रीम रिस्पॉन्स"],
"answer_en": "Extended Reality",
"answer_hi": "एक्सटेंडेड रियलिटी",
"attempted": false,
"selected": ""
},
{
"num": 86,
"question_en": "What does CAD stand for?",
"question_hi": "CAD का पूरा नाम क्या है?",
"options_en": ["Computer-Aided Design", "Computer-Aided Drafting", "Computer-Aided Development", "Computer-Aided Diagram"],
"options_hi": ["कंप्यूटर-एडेड डिजाइन", "कंप्यूटर-एडेड ड्राफ्टिंग", "कंप्यूटर-एडेड डेवलपमेंट", "कंप्यूटर-एडेड डायग्राम"],
"answer_en": "Computer-Aided Design",
"answer_hi": "कंप्यूटर-एडेड डिजाइन",
"attempted": false,
"selected": ""
},
{
"num": 87,
"question_en": "What is the full form of CAM?",
"question_hi": "CAM का पूरा नाम क्या है?",
"options_en": ["Computer-Aided Manufacturing", "Computer-Aided Machining", "Computer-Aided Modeling", "Computer-Aided Management"],
"options_hi": ["कंप्यूटर-एडेड मैन्युफैक्चरिंग", "कंप्यूटर-एडेड मशीनिंग", "कंप्यूटर-एडेड मॉडलिंग", "कंप्यूटर-एडेड मैनेजमेंट"],
"answer_en": "Computer-Aided Manufacturing",
"answer_hi": "कंप्यूटर-एडेड मैन्युफैक्चरिंग",
"attempted": false,
"selected": ""
},
{
"num": 88,
"question_en": "What does CAE stand for?",
"question_hi": "CAE का पूरा नाम क्या है?",
"options_en": ["Computer-Aided Engineering", "Computer-Aided Education", "Computer-Aided Evaluation", "Computer-Aided Environment"],
"options_hi": ["कंप्यूटर-एडेड इंजीनियरिंग", "कंप्यूटर-एडेड एजुकेशन", "कंप्यूटर-एडेड एवल्यूएशन", "कंप्यूटर-एडेड एनवायरनमेंट"],
"answer_en": "Computer-Aided Engineering",
"answer_hi": "कंप्यूटर-एडेड इंजीनियरिंग",
"attempted": false,
"selected": ""
},
{
"num": 89,
"question_en": "What is the full form of ERP?",
"question_hi": "ERP का पूरा नाम क्या है?",
"options_en": ["Enterprise Resource Planning", "Enterprise Resource Program", "Enterprise Resource Platform", "Enterprise Resource Protocol"],
"options_hi": ["एंटरप्राइज रिसोर्स प्लानिंग", "एंटरप्राइज रिसोर्स प्रोग्राम", "एंटरप्राइज रिसोर्स प्लेटफॉर्म", "एंटरप्राइज रिसोर्स प्रोटोकॉल"],
"answer_en": "Enterprise Resource Planning",
"answer_hi": "एंटरप्राइज रिसोर्स प्लानिंग",
"attempted": false,
"selected": ""
},
{
"num": 90,
"question_en": "What does CRM stand for?",
"question_hi": "CRM का पूरा नाम क्या है?",
"options_en": ["Customer Relationship Management", "Customer Resource Management", "Customer Relationship Marketing", "Customer Resource Marketing"],
"options_hi": ["कस्टमर रिलेशनशिप मैनेजमेंट", "कस्टमर रिसोर्स मैनेजमेंट", "कस्टमर रिलेशनशिप मार्केटिंग", "कस्टमर रिसोर्स मार्केटिंग"],
"answer_en": "Customer Relationship Management",
"answer_hi": "कस्टमर रिलेशनशिप मैनेजमेंट",
"attempted": false,
"selected": ""
},
{
"num": 91,
"question_en": "What is the full form of SCM?",
"question_hi": "SCM का पूरा नाम क्या है?",
"options_en": ["Supply Chain Management", "Supply Chain Marketing", "Supply Chain Model", "Supply Chain Method"],
"options_hi": ["सप्लाई चेन मैनेजमेंट", "सप्लाई चेन मार्केटिंग", "सप्लाई चेन मॉडल", "सप्लाई चेन मेथड"],
"answer_en": "Supply Chain Management",
"answer_hi": "सप्लाई चेन मैनेजमेंट",
"attempted": false,
"selected": ""
},
{
"num": 92,
"question_en": "What does CMS stand for?",
"question_hi": "CMS का पूरा नाम क्या है?",
"options_en": ["Content Management System", "Content Management Software", "Content Management Service", "Content Management Server"],
"options_hi": ["कंटेंट मैनेजमेंट सिस्टम", "कंटेंट मैनेजमेंट सॉफ्टवेयर", "कंटेंट मैनेजमेंट सर्विस", "कंटेंट मैनेजमेंट सर्वर"],
"answer_en": "Content Management System",
"answer_hi": "कंटेंट मैनेजमेंट सिस्टम",
"attempted": false,
"selected": ""
},
{
"num": 93,
"question_en": "What is the full form of SEO?",
"question_hi": "SEO का पूरा नाम क्या है?",
"options_en": ["Search Engine Optimization", "Search Engine Operation", "Search Engine Organization", "Search Engine Option"],
"options_hi": ["सर्च इंजन ऑप्टिमाइजेशन", "सर्च इंजन ऑपरेशन", "सर्च इंजन ऑर्गनाइजेशन", "सर्च इंजन ऑप्शन"],
"answer_en": "Search Engine Optimization",
"answer_hi": "सर्च इंजन ऑप्टिमाइजेशन",
"attempted": false,
"selected": ""
},
{
"num": 94,
"question_en": "What does SEM stand for?",
"question_hi": "SEM का पूरा नाम क्या है?",
"options_en": ["Search Engine Marketing", "Search Engine Management", "Search Engine Monitoring", "Search Engine Method"],
"options_hi": ["सर्च इंजन मार्केटिंग", "सर्च इंजन मैनेजमेंट", "सर्च इंजन मॉनिटरिंग", "सर्च इंजन मेथड"],
"answer_en": "Search Engine Marketing",
"answer_hi": "सर्च इंजन मार्केटिंग",
"attempted": false,
"selected": ""
},
{
"num": 95,
"question_en": "What is the full form of SMO?",
"question_hi": "SMO का पूरा नाम क्या है?",
"options_en": ["Social Media Optimization", "Social Media Operation", "Social Media Organization", "Social Media Option"],
"options_hi": ["सोशल मीडिया ऑप्टिमाइजेशन", "सोशल मीडिया ऑपरेशन", "सोशल मीडिया ऑर्गनाइजेशन", "सोशल मीडिया ऑप्शन"],
"answer_en": "Social Media Optimization",
"answer_hi": "सोशल मीडिया ऑप्टिमाइजेशन",
"attempted": false,
"selected": ""
},
{
"num": 96,
"question_en": "What does PPC stand for?",
"question_hi": "PPC का पूरा नाम क्या है?",
"options_en": ["Pay Per Click", "Pay Per Customer", "Pay Per Campaign", "Pay Per Conversion"],
"options_hi": ["पे पर क्लिक", "पे पर कस्टमर", "पे पर कैम्पेन", "पे पर कन्वर्जन"],
"answer_en": "Pay Per Click",
"answer_hi": "पे पर क्लिक",
"attempted": false,
"selected": ""
},
{
"num": 97,
"question_en": "What is the full form of CTR?",
"question_hi": "CTR का पूरा नाम क्या है?",
"options_en": ["Click-Through Rate", "Click-Through Ratio", "Click-Through Response", "Click-Through Report"],
"options_hi": ["क्लिक-थ्रू रेट", "क्लिक-थ्रू रेशियो", "क्लिक-थ्रू रिस्पॉन्स", "क्लिक-थ्रू रिपोर्ट"],
"answer_en": "Click-Through Rate",
"answer_hi": "क्लिक-थ्रू रेट",
"attempted": false,
"selected": ""
},
{
"num": 98,
"question_en": "What does CPC stand for?",
"question_hi": "CPC का पूरा नाम क्या है?",
"options_en": ["Cost Per Click", "Cost Per Customer", "Cost Per Campaign", "Cost Per Conversion"],
"options_hi": ["कॉस्ट पर क्लिक", "कॉस्ट पर कस्टमर", "कॉस्ट पर कैम्पेन", "कॉस्ट पर कन्वर्जन"],
"answer_en": "Cost Per Click",
"answer_hi": "कॉस्ट पर क्लिक",
"attempted": false,
"selected": ""
},
{
"num": 99,
"question_en": "What is the full form of CPM?",
"question_hi": "CPM का पूरा नाम क्या है?",
"options_en": ["Cost Per Mille (Thousand)", "Cost Per Million", "Cost Per Minute", "Cost Per Month"],
"options_hi": ["कॉस्ट पर मिल (हजार)", "कॉस्ट पर मिलियन", "कॉस्ट पर मिनट", "कॉस्ट पर मंथ"],
"answer_en": "Cost Per Mille (Thousand)",
"answer_hi": "कॉस्ट पर मिल (हजार)",
"attempted": false,
"selected": ""
},
{
"num": 100,
"question_en": "What does ROI stand for?",
"question_hi": "ROI का पूरा नाम क्या है?",
"options_en": ["Return on Investment", "Return on Interest", "Rate of Investment", "Rate of Interest"],
"options_hi": ["रिटर्न ऑन इन्वेस्टमेंट", "रिटर्न ऑन इंटरेस्ट", "रेट ऑफ इन्वेस्टमेंट", "रेट ऑफ इंटरेस्ट"],
"answer_en": "Return on Investment",
"answer_hi": "रिटर्न ऑन इन्वेस्टमेंट",
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