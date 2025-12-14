const questions = [
    {
        "num": 1,
        "question_en": "What is the main screen of Windows called?",
        "question_hi": "विंडोज का मुख्य स्क्रीन क्या कहलाता है?",
        "options_en": ["Desktop", "Wallpaper", "Screen", "Interface"],
        "options_hi": ["डेस्कटॉप", "वॉलपेपर", "स्क्रीन", "इंटरफेस"],
        "answer_en": "Desktop",
        "answer_hi": "डेस्कटॉप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which program is used to browse the internet?",
        "question_hi": "इंटरनेट ब्राउज़ करने के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["Web Browser", "Word Processor", "Spreadsheet", "Presentation"],
        "options_hi": ["वेब ब्राउज़र", "वर्ड प्रोसेसर", "स्प्रेडशीट", "प्रेजेंटेशन"],
        "answer_en": "Web Browser",
        "answer_hi": "वेब ब्राउज़र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the name of Google's web browser?",
        "question_hi": "गूगल के वेब ब्राउज़र का नाम क्या है?",
        "options_en": ["Chrome", "Firefox", "Safari", "Edge"],
        "options_hi": ["क्रोम", "फायरफॉक्स", "सफारी", "एज"],
        "answer_en": "Chrome",
        "answer_hi": "क्रोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which key is used to refresh a webpage?",
        "question_hi": "वेबपेज रिफ्रेश करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["F5", "F1", "F2", "F12"],
        "options_hi": ["F5", "F1", "F2", "F12"],
        "answer_en": "F5",
        "answer_hi": "F5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the shortcut to create a new folder?",
        "question_hi": "नई फोल्डर बनाने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + Shift + N", "Ctrl + N", "Alt + N", "Shift + N"],
        "options_hi": ["Ctrl + Shift + N", "Ctrl + N", "Alt + N", "Shift + N"],
        "answer_en": "Ctrl + Shift + N",
        "answer_hi": "Ctrl + Shift + N",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which bar shows open programs in Windows?",
        "question_hi": "विंडोज में खुले प्रोग्राम कौन सी बार दिखाती है?",
        "options_en": ["Taskbar", "Titlebar", "Menubar", "Toolbar"],
        "options_hi": ["टास्कबार", "टाइटलबार", "मेन्यूबार", "टूलबार"],
        "answer_en": "Taskbar",
        "answer_hi": "टास्कबार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the file extension for Word document?",
        "question_hi": "वर्ड डॉक्यूमेंट के लिए फाइल एक्सटेंशन क्या है?",
        "options_en": [".docx", ".txt", ".pdf", ".xlsx"],
        "options_hi": [".docx", ".txt", ".pdf", ".xlsx"],
        "answer_en": ".docx",
        "answer_hi": ".docx",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which key opens the Start menu in Windows?",
        "question_hi": "विंडोज में स्टार्ट मेन्यू कौन सी की खोलती है?",
        "options_en": ["Windows Key", "Ctrl Key", "Alt Key", "Shift Key"],
        "options_hi": ["विंडोज की", "कंट्रोल की", "आल्ट की", "शिफ्ट की"],
        "answer_en": "Windows Key",
        "answer_hi": "विंडोज की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the shortcut to select all text?",
        "question_hi": "सभी टेक्स्ट सिलेक्ट करने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + A", "Ctrl + B", "Ctrl + C", "Ctrl + D"],
        "options_hi": ["Ctrl + A", "Ctrl + B", "Ctrl + C", "Ctrl + D"],
        "answer_en": "Ctrl + A",
        "answer_hi": "Ctrl + A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which program is used for calculations?",
        "question_hi": "कैलकुलेशन के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["Calculator", "Notepad", "Paint", "WordPad"],
        "options_hi": ["कैलकुलेटर", "नोटपैड", "पेंट", "वर्डपैड"],
        "answer_en": "Calculator",
        "answer_hi": "कैलकुलेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the shortcut to save a file?",
        "question_hi": "फाइल सेव करने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + S", "Ctrl + P", "Ctrl + O", "Ctrl + N"],
        "options_hi": ["Ctrl + S", "Ctrl + P", "Ctrl + O", "Ctrl + N"],
        "answer_en": "Ctrl + S",
        "answer_hi": "Ctrl + S",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which key is used to take screenshot in Windows?",
        "question_hi": "विंडोज में स्क्रीनशॉट लेने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["PrtScn", "F12", "Esc", "Tab"],
        "options_hi": ["PrtScn", "F12", "Esc", "Tab"],
        "answer_en": "PrtScn",
        "answer_hi": "PrtScn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the shortcut to print a document?",
        "question_hi": "डॉक्यूमेंट प्रिंट करने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + P", "Ctrl + S", "Ctrl + O", "Ctrl + N"],
        "options_hi": ["Ctrl + P", "Ctrl + S", "Ctrl + O", "Ctrl + N"],
        "answer_en": "Ctrl + P",
        "answer_hi": "Ctrl + P",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which program is used to write simple text?",
        "question_hi": "साधारण टेक्स्ट लिखने के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["Notepad", "Word", "Excel", "PowerPoint"],
        "options_hi": ["नोटपैड", "वर्ड", "एक्सेल", "पावरपॉइंट"],
        "answer_en": "Notepad",
        "answer_hi": "नोटपैड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the shortcut to open a new window?",
        "question_hi": "नई विंडो खोलने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + N", "Ctrl + T", "Ctrl + W", "Ctrl + O"],
        "options_hi": ["Ctrl + N", "Ctrl + T", "Ctrl + W", "Ctrl + O"],
        "answer_en": "Ctrl + N",
        "answer_hi": "Ctrl + N",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which key is used to close a window?",
        "question_hi": "विंडो बंद करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Alt + F4", "Ctrl + F4", "Shift + F4", "Windows + F4"],
        "options_hi": ["Alt + F4", "Ctrl + F4", "Shift + F4", "Windows + F4"],
        "answer_en": "Alt + F4",
        "answer_hi": "Alt + F4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the shortcut to find text?",
        "question_hi": "टेक्स्ट ढूंढने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + E"],
        "options_hi": ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + E"],
        "answer_en": "Ctrl + F",
        "answer_hi": "Ctrl + F",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which program is used for drawing?",
        "question_hi": "ड्राइंग के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["Paint", "Word", "Excel", "Calculator"],
        "options_hi": ["पेंट", "वर्ड", "एक्सेल", "कैलकुलेटर"],
        "answer_en": "Paint",
        "answer_hi": "पेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the shortcut to undo an action?",
        "question_hi": "एक्शन अनडू करने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + Z", "Ctrl + Y", "Ctrl + X", "Ctrl + C"],
        "options_hi": ["Ctrl + Z", "Ctrl + Y", "Ctrl + X", "Ctrl + C"],
        "answer_en": "Ctrl + Z",
        "answer_hi": "Ctrl + Z",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which key is used to switch between open programs?",
        "question_hi": "खुले प्रोग्रामों के बीच स्विच करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Alt + Tab", "Ctrl + Tab", "Shift + Tab", "Windows + Tab"],
        "options_hi": ["Alt + Tab", "Ctrl + Tab", "Shift + Tab", "Windows + Tab"],
        "answer_en": "Alt + Tab",
        "answer_hi": "Alt + Tab",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the shortcut to redo an action?",
        "question_hi": "एक्शन रीडू करने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + Y", "Ctrl + Z", "Ctrl + R", "Ctrl + D"],
        "options_hi": ["Ctrl + Y", "Ctrl + Z", "Ctrl + R", "Ctrl + D"],
        "answer_en": "Ctrl + Y",
        "answer_hi": "Ctrl + Y",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which program is used for spreadsheets?",
        "question_hi": "स्प्रेडशीट के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["Excel", "Word", "PowerPoint", "Access"],
        "options_hi": ["एक्सेल", "वर्ड", "पावरपॉइंट", "एक्सेस"],
        "answer_en": "Excel",
        "answer_hi": "एक्सेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the shortcut to open a file?",
        "question_hi": "फाइल खोलने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + O", "Ctrl + N", "Ctrl + S", "Ctrl + P"],
        "options_hi": ["Ctrl + O", "Ctrl + N", "Ctrl + S", "Ctrl + P"],
        "answer_en": "Ctrl + O",
        "answer_hi": "Ctrl + O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which key is used to rename a file?",
        "question_hi": "फाइल रिनेम करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["F2", "F5", "F1", "F12"],
        "options_hi": ["F2", "F5", "F1", "F12"],
        "answer_en": "F2",
        "answer_hi": "F2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the shortcut to make text bold?",
        "question_hi": "टेक्स्ट बोल्ड करने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + S"],
        "options_hi": ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + S"],
        "answer_en": "Ctrl + B",
        "answer_hi": "Ctrl + B",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which program is used for presentations?",
        "question_hi": "प्रेजेंटेशन के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["PowerPoint", "Word", "Excel", "Publisher"],
        "options_hi": ["पावरपॉइंट", "वर्ड", "एक्सेल", "पब्लिशर"],
        "answer_en": "PowerPoint",
        "answer_hi": "पावरपॉइंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the shortcut to make text italic?",
        "question_hi": "टेक्स्ट इटैलिक करने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + I", "Ctrl + B", "Ctrl + U", "Ctrl + D"],
        "options_hi": ["Ctrl + I", "Ctrl + B", "Ctrl + U", "Ctrl + D"],
        "answer_en": "Ctrl + I",
        "answer_hi": "Ctrl + I",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which key is used to delete a file permanently?",
        "question_hi": "फाइल परमानेंटली डिलीट करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Shift + Delete", "Ctrl + Delete", "Alt + Delete", "Delete"],
        "options_hi": ["Shift + Delete", "Ctrl + Delete", "Alt + Delete", "Delete"],
        "answer_en": "Shift + Delete",
        "answer_hi": "Shift + Delete",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the shortcut to underline text?",
        "question_hi": "टेक्स्ट अंडरलाइन करने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + U", "Ctrl + B", "Ctrl + I", "Ctrl + S"],
        "options_hi": ["Ctrl + U", "Ctrl + B", "Ctrl + I", "Ctrl + S"],
        "answer_en": "Ctrl + U",
        "answer_hi": "Ctrl + U",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which program is used for email?",
        "question_hi": "ईमेल के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["Outlook", "Word", "Excel", "Paint"],
        "options_hi": ["आउटलुक", "वर्ड", "एक्सेल", "पेंट"],
        "answer_en": "Outlook",
        "answer_hi": "आउटलुक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the shortcut to center align text?",
        "question_hi": "टेक्स्ट सेंटर अलाइन करने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + E", "Ctrl + L", "Ctrl + R", "Ctrl + J"],
        "options_hi": ["Ctrl + E", "Ctrl + L", "Ctrl + R", "Ctrl + J"],
        "answer_en": "Ctrl + E",
        "answer_hi": "Ctrl + E",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which key is used to open context menu?",
        "question_hi": "कॉन्टेक्स्ट मेन्यू खोलने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Right-click", "Left-click", "Middle-click", "Double-click"],
        "options_hi": ["राइट-क्लिक", "लेफ्ट-क्लिक", "मिडिल-क्लिक", "डबल-क्लिक"],
        "answer_en": "Right-click",
        "answer_hi": "राइट-क्लिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the shortcut to left align text?",
        "question_hi": "टेक्स्ट लेफ्ट अलाइन करने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + L", "Ctrl + E", "Ctrl + R", "Ctrl + J"],
        "options_hi": ["Ctrl + L", "Ctrl + E", "Ctrl + R", "Ctrl + J"],
        "answer_en": "Ctrl + L",
        "answer_hi": "Ctrl + L",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which program is used for video calling?",
        "question_hi": "वीडियो कॉलिंग के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["Zoom", "Word", "Excel", "Paint"],
        "options_hi": ["ज़ूम", "वर्ड", "एक्सेल", "पेंट"],
        "answer_en": "Zoom",
        "answer_hi": "ज़ूम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the shortcut to right align text?",
        "question_hi": "टेक्स्ट राइट अलाइन करने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + R", "Ctrl + L", "Ctrl + E", "Ctrl + J"],
        "options_hi": ["Ctrl + R", "Ctrl + L", "Ctrl + E", "Ctrl + J"],
        "answer_en": "Ctrl + R",
        "answer_hi": "Ctrl + R",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which key is used to open Task Manager?",
        "question_hi": "टास्क मैनेजर खोलने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Ctrl + Shift + Esc", "Ctrl + Alt + Del", "Alt + F4", "Windows + X"],
        "options_hi": ["Ctrl + Shift + Esc", "Ctrl + Alt + Del", "Alt + F4", "Windows + X"],
        "answer_en": "Ctrl + Shift + Esc",
        "answer_hi": "Ctrl + Shift + Esc",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the shortcut to justify text?",
        "question_hi": "टेक्स्ट जस्टिफाई करने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + J", "Ctrl + L", "Ctrl + E", "Ctrl + R"],
        "options_hi": ["Ctrl + J", "Ctrl + L", "Ctrl + E", "Ctrl + R"],
        "answer_en": "Ctrl + J",
        "answer_hi": "Ctrl + J",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which program is used for PDF files?",
        "question_hi": "PDF फाइलों के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["Adobe Reader", "Word", "Excel", "Paint"],
        "options_hi": ["एडोब रीडर", "वर्ड", "एक्सेल", "पेंट"],
        "answer_en": "Adobe Reader",
        "answer_hi": "एडोब रीडर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the shortcut to close a tab?",
        "question_hi": "टैब बंद करने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + W", "Ctrl + T", "Ctrl + N", "Ctrl + Q"],
        "options_hi": ["Ctrl + W", "Ctrl + T", "Ctrl + N", "Ctrl + Q"],
        "answer_en": "Ctrl + W",
        "answer_hi": "Ctrl + W",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which key is used to open search?",
        "question_hi": "सर्च खोलने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Windows + S", "Ctrl + S", "Alt + S", "Shift + S"],
        "options_hi": ["Windows + S", "Ctrl + S", "Alt + S", "Shift + S"],
        "answer_en": "Windows + S",
        "answer_hi": "Windows + S",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the shortcut to open new tab?",
        "question_hi": "नया टैब खोलने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + T", "Ctrl + N", "Ctrl + W", "Ctrl + O"],
        "options_hi": ["Ctrl + T", "Ctrl + N", "Ctrl + W", "Ctrl + O"],
        "answer_en": "Ctrl + T",
        "answer_hi": "Ctrl + T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which program is used for photo editing?",
        "question_hi": "फोटो एडिटिंग के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["Photoshop", "Word", "Excel", "Paint"],
        "options_hi": ["फोटोशॉप", "वर्ड", "एक्सेल", "पेंट"],
        "answer_en": "Photoshop",
        "answer_hi": "फोटोशॉप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the shortcut to reopen closed tab?",
        "question_hi": "बंद टैब दोबारा खोलने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + Shift + T", "Ctrl + T", "Ctrl + N", "Ctrl + W"],
        "options_hi": ["Ctrl + Shift + T", "Ctrl + T", "Ctrl + N", "Ctrl + W"],
        "answer_en": "Ctrl + Shift + T",
        "answer_hi": "Ctrl + Shift + T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which key is used to lock computer?",
        "question_hi": "कंप्यूटर लॉक करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Windows + L", "Ctrl + L", "Alt + L", "Shift + L"],
        "options_hi": ["Windows + L", "Ctrl + L", "Alt + L", "Shift + L"],
        "answer_en": "Windows + L",
        "answer_hi": "Windows + L",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the shortcut to go to address bar?",
        "question_hi": "एड्रेस बार में जाने का शॉर्टकट क्या है?",
        "options_en": ["F6", "F5", "F4", "F3"],
        "options_hi": ["F6", "F5", "F4", "F3"],
        "answer_en": "F6",
        "answer_hi": "F6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which program is used for video editing?",
        "question_hi": "वीडियो एडिटिंग के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["Windows Movie Maker", "Word", "Excel", "Paint"],
        "options_hi": ["विंडोज मूवी मेकर", "वर्ड", "एक्सेल", "पेंट"],
        "answer_en": "Windows Movie Maker",
        "answer_hi": "विंडोज मूवी मेकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the shortcut to bookmark a page?",
        "question_hi": "पेज बुकमार्क करने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + D", "Ctrl + B", "Ctrl + S", "Ctrl + P"],
        "options_hi": ["Ctrl + D", "Ctrl + B", "Ctrl + S", "Ctrl + P"],
        "answer_en": "Ctrl + D",
        "answer_hi": "Ctrl + D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which key is used to minimize all windows?",
        "question_hi": "सभी विंडोज मिनिमाइज करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Windows + M", "Windows + D", "Alt + M", "Ctrl + M"],
        "options_hi": ["Windows + M", "Windows + D", "Alt + M", "Ctrl + M"],
        "answer_en": "Windows + M",
        "answer_hi": "Windows + M",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the shortcut to open bookmarks?",
        "question_hi": "बुकमार्क्स खोलने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + Shift + B", "Ctrl + B", "Ctrl + D", "Ctrl + S"],
        "options_hi": ["Ctrl + Shift + B", "Ctrl + B", "Ctrl + D", "Ctrl + S"],
        "answer_en": "Ctrl + Shift + B",
        "answer_hi": "Ctrl + Shift + B",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which program is used for music?",
        "question_hi": "म्यूजिक के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["Windows Media Player", "Word", "Excel", "Paint"],
        "options_hi": ["विंडोज मीडिया प्लेयर", "वर्ड", "एक्सेल", "पेंट"],
        "answer_en": "Windows Media Player",
        "answer_hi": "विंडोज मीडिया प्लेयर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the shortcut to zoom in?",
        "question_hi": "ज़ूम इन करने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + Plus", "Ctrl + Minus", "Ctrl + 0", "Ctrl + Scroll"],
        "options_hi": ["Ctrl + प्लस", "Ctrl + माइनस", "Ctrl + 0", "Ctrl + स्क्रॉल"],
        "answer_en": "Ctrl + Plus",
        "answer_hi": "Ctrl + प्लस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which key is used to show desktop?",
        "question_hi": "डेस्कटॉप दिखाने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Windows + D", "Windows + M", "Alt + D", "Ctrl + D"],
        "options_hi": ["Windows + D", "Windows + M", "Alt + D", "Ctrl + D"],
        "answer_en": "Windows + D",
        "answer_hi": "Windows + D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the shortcut to zoom out?",
        "question_hi": "ज़ूम आउट करने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + Minus", "Ctrl + Plus", "Ctrl + 0", "Ctrl + Scroll"],
        "options_hi": ["Ctrl + माइनस", "Ctrl + प्लस", "Ctrl + 0", "Ctrl + स्क्रॉल"],
        "answer_en": "Ctrl + Minus",
        "answer_hi": "Ctrl + माइनस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which program is used for chatting?",
        "question_hi": "चैटिंग के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["WhatsApp", "Word", "Excel", "Paint"],
        "options_hi": ["व्हाट्सएप", "वर्ड", "एक्सेल", "पेंट"],
        "answer_en": "WhatsApp",
        "answer_hi": "व्हाट्सएप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the shortcut to reset zoom?",
        "question_hi": "ज़ूम रीसेट करने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + 0", "Ctrl + Plus", "Ctrl + Minus", "Ctrl + R"],
        "options_hi": ["Ctrl + 0", "Ctrl + प्लस", "Ctrl + माइनस", "Ctrl + R"],
        "answer_en": "Ctrl + 0",
        "answer_hi": "Ctrl + 0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which key is used to open File Explorer?",
        "question_hi": "फाइल एक्सप्लोरर खोलने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Windows + E", "Windows + F", "Windows + R", "Windows + S"],
        "options_hi": ["Windows + E", "Windows + F", "Windows + R", "Windows + S"],
        "answer_en": "Windows + E",
        "answer_hi": "Windows + E",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the shortcut to open history?",
        "question_hi": "हिस्ट्री खोलने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + H", "Ctrl + F", "Ctrl + G", "Ctrl + J"],
        "options_hi": ["Ctrl + H", "Ctrl + F", "Ctrl + G", "Ctrl + J"],
        "answer_en": "Ctrl + H",
        "answer_hi": "Ctrl + H",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which program is used for antivirus?",
        "question_hi": "एंटीवायरस के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["Windows Defender", "Word", "Excel", "Paint"],
        "options_hi": ["विंडोज डिफेंडर", "वर्ड", "एक्सेल", "पेंट"],
        "answer_en": "Windows Defender",
        "answer_hi": "विंडोज डिफेंडर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the shortcut to open downloads?",
        "question_hi": "डाउनलोड्स खोलने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + J", "Ctrl + H", "Ctrl + D", "Ctrl + S"],
        "options_hi": ["Ctrl + J", "Ctrl + H", "Ctrl + D", "Ctrl + S"],
        "answer_en": "Ctrl + J",
        "answer_hi": "Ctrl + J",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which key is used to open Run dialog?",
        "question_hi": "रन डायलॉग खोलने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Windows + R", "Windows + E", "Windows + S", "Windows + D"],
        "options_hi": ["Windows + R", "Windows + E", "Windows + S", "Windows + D"],
        "answer_en": "Windows + R",
        "answer_hi": "Windows + R",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the shortcut to open settings?",
        "question_hi": "सेटिंग्स खोलने का शॉर्टकट क्या है?",
        "options_en": ["Windows + I", "Windows + S", "Windows + X", "Windows + A"],
        "options_hi": ["Windows + I", "Windows + S", "Windows + X", "Windows + A"],
        "answer_en": "Windows + I",
        "answer_hi": "Windows + I",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which program is used for zip files?",
        "question_hi": "ज़िप फाइलों के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["WinRAR", "Word", "Excel", "Paint"],
        "options_hi": ["विनरार", "वर्ड", "एक्सेल", "पेंट"],
        "answer_en": "WinRAR",
        "answer_hi": "विनरार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the shortcut to open action center?",
        "question_hi": "एक्शन सेंटर खोलने का शॉर्टकट क्या है?",
        "options_en": ["Windows + A", "Windows + I", "Windows + S", "Windows + X"],
        "options_hi": ["Windows + A", "Windows + I", "Windows + S", "Windows + X"],
        "answer_en": "Windows + A",
        "answer_hi": "Windows + A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which key is used to open emoji panel?",
        "question_hi": "इमोजी पैनल खोलने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Windows + .", "Windows + ,", "Windows + ;", "Windows + '"],
        "options_hi": ["Windows + .", "Windows + ,", "Windows + ;", "Windows + '"],
        "answer_en": "Windows + .",
        "answer_hi": "Windows + .",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the shortcut to open task view?",
        "question_hi": "टास्क व्यू खोलने का शॉर्टकट क्या है?",
        "options_en": ["Windows + Tab", "Alt + Tab", "Ctrl + Tab", "Shift + Tab"],
        "options_hi": ["Windows + Tab", "Alt + Tab", "Ctrl + Tab", "Shift + Tab"],
        "answer_en": "Windows + Tab",
        "answer_hi": "Windows + Tab",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which program is used for calendar?",
        "question_hi": "कैलेंडर के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["Calendar", "Word", "Excel", "Paint"],
        "options_hi": ["कैलेंडर", "वर्ड", "एक्सेल", "पेंट"],
        "answer_en": "Calendar",
        "answer_hi": "कैलेंडर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the shortcut to open clipboard?",
        "question_hi": "क्लिपबोर्ड खोलने का शॉर्टकट क्या है?",
        "options_en": ["Windows + V", "Windows + C", "Ctrl + V", "Ctrl + C"],
        "options_hi": ["Windows + V", "Windows + C", "Ctrl + V", "Ctrl + C"],
        "answer_en": "Windows + V",
        "answer_hi": "Windows + V",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which key is used to open game bar?",
        "question_hi": "गेम बार खोलने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Windows + G", "Windows + H", "Windows + J", "Windows + K"],
        "options_hi": ["Windows + G", "Windows + H", "Windows + J", "Windows + K"],
        "answer_en": "Windows + G",
        "answer_hi": "Windows + G",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the shortcut to open narrator?",
        "question_hi": "नेरेटर खोलने का शॉर्टकट क्या है?",
        "options_en": ["Windows + Ctrl + Enter", "Windows + Enter", "Ctrl + Enter", "Alt + Enter"],
        "options_hi": ["Windows + Ctrl + Enter", "Windows + Enter", "Ctrl + Enter", "Alt + Enter"],
        "answer_en": "Windows + Ctrl + Enter",
        "answer_hi": "Windows + Ctrl + Enter",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which program is used for sticky notes?",
        "question_hi": "स्टिकी नोट्स के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["Sticky Notes", "Word", "Excel", "Notepad"],
        "options_hi": ["स्टिकी नोट्स", "वर्ड", "एक्सेल", "नोटपैड"],
        "answer_en": "Sticky Notes",
        "answer_hi": "स्टिकी नोट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the shortcut to open magnifier?",
        "question_hi": "मैग्निफायर खोलने का शॉर्टकट क्या है?",
        "options_en": ["Windows + Plus", "Windows + Minus", "Ctrl + Plus", "Ctrl + Minus"],
        "options_hi": ["Windows + प्लस", "Windows + माइनस", "Ctrl + प्लस", "Ctrl + माइनस"],
        "answer_en": "Windows + Plus",
        "answer_hi": "Windows + प्लस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which key is used to open project menu?",
        "question_hi": "प्रोजेक्ट मेन्यू खोलने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Windows + P", "Windows + O", "Windows + U", "Windows + Y"],
        "options_hi": ["Windows + P", "Windows + O", "Windows + U", "Windows + Y"],
        "answer_en": "Windows + P",
        "answer_hi": "Windows + P",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the shortcut to open ease of access?",
        "question_hi": "ईज़ ऑफ एक्सेस खोलने का शॉर्टकट क्या है?",
        "options_en": ["Windows + U", "Windows + I", "Windows + O", "Windows + P"],
        "options_hi": ["Windows + U", "Windows + I", "Windows + O", "Windows + P"],
        "answer_en": "Windows + U",
        "answer_hi": "Windows + U",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which program is used for voice recorder?",
        "question_hi": "वॉइस रिकॉर्डर के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["Voice Recorder", "Word", "Excel", "Media Player"],
        "options_hi": ["वॉइस रिकॉर्डर", "वर्ड", "एक्सेल", "मीडिया प्लेयर"],
        "answer_en": "Voice Recorder",
        "answer_hi": "वॉइस रिकॉर्डर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the shortcut to open system properties?",
        "question_hi": "सिस्टम प्रॉपर्टीज खोलने का शॉर्टकट क्या है?",
        "options_en": ["Windows + Pause", "Windows + Break", "Both", "Ctrl + Pause"],
        "options_hi": ["Windows + Pause", "Windows + Break", "दोनों", "Ctrl + Pause"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which key is used to open windows help?",
        "question_hi": "विंडोज हेल्प खोलने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["F1", "F2", "F3", "F4"],
        "options_hi": ["F1", "F2", "F3", "F4"],
        "answer_en": "F1",
        "answer_hi": "F1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the shortcut to open file properties?",
        "question_hi": "फाइल प्रॉपर्टीज खोलने का शॉर्टकट क्या है?",
        "options_en": ["Alt + Enter", "Alt + F4", "Ctrl + Enter", "Shift + Enter"],
        "options_hi": ["Alt + Enter", "Alt + F4", "Ctrl + Enter", "Shift + Enter"],
        "answer_en": "Alt + Enter",
        "answer_hi": "Alt + Enter",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which program is used for weather information?",
        "question_hi": "वेदर इंफॉर्मेशन के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["Weather", "Calendar", "News", "Sports"],
        "options_hi": ["वेदर", "कैलेंडर", "न्यूज़", "स्पोर्ट्स"],
        "answer_en": "Weather",
        "answer_hi": "वेदर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the shortcut to rename a file?",
        "question_hi": "फाइल रिनेम करने का शॉर्टकट क्या है?",
        "options_en": ["F2", "F3", "F4", "F5"],
        "options_hi": ["F2", "F3", "F4", "F5"],
        "answer_en": "F2",
        "answer_hi": "F2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which key is used to refresh folder?",
        "question_hi": "फोल्डर रिफ्रेश करने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["F5", "F2", "F3", "F4"],
        "options_hi": ["F5", "F2", "F3", "F4"],
        "answer_en": "F5",
        "answer_hi": "F5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the shortcut to search in folder?",
        "question_hi": "फोल्डर में सर्च करने का शॉर्टकट क्या है?",
        "options_en": ["F3", "F2", "F4", "F5"],
        "options_hi": ["F3", "F2", "F4", "F5"],
        "answer_en": "F3",
        "answer_hi": "F3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which program is used for news?",
        "question_hi": "न्यूज़ के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["News", "Weather", "Sports", "Finance"],
        "options_hi": ["न्यूज़", "वेदर", "स्पोर्ट्स", "फाइनेंस"],
        "answer_en": "News",
        "answer_hi": "न्यूज़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the shortcut to open address bar?",
        "question_hi": "एड्रेस बार खोलने का शॉर्टकट क्या है?",
        "options_en": ["F4", "F5", "F6", "F7"],
        "options_hi": ["F4", "F5", "F6", "F7"],
        "answer_en": "F4",
        "answer_hi": "F4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which key is used to spell check?",
        "question_hi": "स्पेल चेक के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["F7", "F5", "F6", "F8"],
        "options_hi": ["F7", "F5", "F6", "F8"],
        "answer_en": "F7",
        "answer_hi": "F7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the shortcut to safe mode?",
        "question_hi": "सेफ मोड के लिए शॉर्टकट क्या है?",
        "options_en": ["F8", "F5", "F6", "F7"],
        "options_hi": ["F8", "F5", "F6", "F7"],
        "answer_en": "F8",
        "answer_hi": "F8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which program is used for maps?",
        "question_hi": "मैप्स के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["Maps", "Weather", "News", "Sports"],
        "options_hi": ["मैप्स", "वेदर", "न्यूज़", "स्पोर्ट्स"],
        "answer_en": "Maps",
        "answer_hi": "मैप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the shortcut to open boot menu?",
        "question_hi": "बूट मेन्यू खोलने का शॉर्टकट क्या है?",
        "options_en": ["F12", "F8", "F9", "F10"],
        "options_hi": ["F12", "F8", "F9", "F10"],
        "answer_en": "F12",
        "answer_hi": "F12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which key is used to open bios?",
        "question_hi": "BIOS खोलने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["F2 or Del", "F8", "F12", "Esc"],
        "options_hi": ["F2 या Del", "F8", "F12", "Esc"],
        "answer_en": "F2 or Del",
        "answer_hi": "F2 या Del",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the shortcut to open developer tools?",
        "question_hi": "डेवलपर टूल्स खोलने का शॉर्टकट क्या है?",
        "options_en": ["F12", "F11", "F10", "F9"],
        "options_hi": ["F12", "F11", "F10", "F9"],
        "answer_en": "F12",
        "answer_hi": "F12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which program is used for alarms?",
        "question_hi": "अलार्म के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["Alarms & Clock", "Calculator", "Calendar", "Weather"],
        "options_hi": ["अलार्म्स एंड क्लॉक", "कैलकुलेटर", "कैलेंडर", "वेदर"],
        "answer_en": "Alarms & Clock",
        "answer_hi": "अलार्म्स एंड क्लॉक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the shortcut to full screen?",
        "question_hi": "फुल स्क्रीन का शॉर्टकट क्या है?",
        "options_en": ["F11", "F12", "F10", "F9"],
        "options_hi": ["F11", "F12", "F10", "F9"],
        "answer_en": "F11",
        "answer_hi": "F11",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which key is used to open menu bar?",
        "question_hi": "मेन्यू बार खोलने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Alt", "Ctrl", "Shift", "Windows"],
        "options_hi": ["Alt", "Ctrl", "Shift", "Windows"],
        "answer_en": "Alt",
        "answer_hi": "Alt",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the shortcut to open inspect element?",
        "question_hi": "इन्स्पेक्ट एलिमेंट खोलने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + Shift + I", "Ctrl + Shift + J", "Ctrl + Shift + C", "Ctrl + Shift + K"],
        "options_hi": ["Ctrl + Shift + I", "Ctrl + Shift + J", "Ctrl + Shift + C", "Ctrl + Shift + K"],
        "answer_en": "Ctrl + Shift + I",
        "answer_hi": "Ctrl + Shift + I",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which program is used for camera?",
        "question_hi": "कैमरा के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["Camera", "Photos", "Paint", "Movie Maker"],
        "options_hi": ["कैमरा", "फोटोज़", "पेंट", "मूवी मेकर"],
        "answer_en": "Camera",
        "answer_hi": "कैमरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the shortcut to open console?",
        "question_hi": "कंसोल खोलने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + Shift + J", "Ctrl + Shift + I", "Ctrl + Shift + C", "Ctrl + Shift + K"],
        "options_hi": ["Ctrl + Shift + J", "Ctrl + Shift + I", "Ctrl + Shift + C", "Ctrl + Shift + K"],
        "answer_en": "Ctrl + Shift + J",
        "answer_hi": "Ctrl + Shift + J",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which key is used to open find and replace?",
        "question_hi": "फाइंड एंड रिप्लेस खोलने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Ctrl + H", "Ctrl + F", "Ctrl + G", "Ctrl + R"],
        "options_hi": ["Ctrl + H", "Ctrl + F", "Ctrl + G", "Ctrl + R"],
        "answer_en": "Ctrl + H",
        "answer_hi": "Ctrl + H",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the shortcut to open go to line?",
        "question_hi": "गो टू लाइन खोलने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + G", "Ctrl + L", "Ctrl + F", "Ctrl + H"],
        "options_hi": ["Ctrl + G", "Ctrl + L", "Ctrl + F", "Ctrl + H"],
        "answer_en": "Ctrl + G",
        "answer_hi": "Ctrl + G",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which program is used for photos?",
        "question_hi": "फोटोज़ के लिए किस प्रोग्राम का उपयोग किया जाता है?",
        "options_en": ["Photos", "Camera", "Paint", "Movie Maker"],
        "options_hi": ["फोटोज़", "कैमरा", "पेंट", "मूवी मेकर"],
        "answer_en": "Photos",
        "answer_hi": "फोटोज़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the shortcut to open page setup?",
        "question_hi": "पेज सेटअप खोलने का शॉर्टकट क्या है?",
        "options_en": ["Ctrl + Shift + P", "Ctrl + P", "Ctrl + S", "Ctrl + O"],
        "options_hi": ["Ctrl + Shift + P", "Ctrl + P", "Ctrl + S", "Ctrl + O"],
        "answer_en": "Ctrl + Shift + P",
        "answer_hi": "Ctrl + Shift + P",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which key is used to open print preview?",
        "question_hi": "प्रिंट प्रिव्यू खोलने के लिए किस की का उपयोग किया जाता है?",
        "options_en": ["Ctrl + F2", "Ctrl + P", "Ctrl + Shift + P", "Ctrl + F12"],
        "options_hi": ["Ctrl + F2", "Ctrl + P", "Ctrl + Shift + P", "Ctrl + F12"],
        "answer_en": "Ctrl + F2",
        "answer_hi": "Ctrl + F2",
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