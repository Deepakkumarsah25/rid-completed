const questions =[
    // Technical & Coding Questions (1-25)
    {
    "num": 1,
    "question_en": "What is the behaviour of 'append' when capacity of slice is insufficient?",
    "question_hi": "जब slice की capacity अपर्याप्त हो तब 'append' क्या करता है?",
    "options_en": ["Allocates new underlying array and copies", "Panics", "Returns error", "Ignores new elements"],
    "options_hi": ["नई underlying array allocate कर के copy करता है", "panic करता है", "error लौटाता है", "नए elements ignore करता है"],
    "answer_en": "Allocates new underlying array and copies",
    "answer_hi": "नई underlying array allocate कर के copy करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which of these identifies the Go module file?",
    "question_hi": "Go module file को कौन सा नाम दर्शाता है?",
    "options_en": ["go.mod", "module.json", "gomod", "mod.go"],
    "options_hi": ["go.mod", "module.json", "gomod", "mod.go"],
    "answer_en": "go.mod",
    "answer_hi": "go.mod",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which function in net/http listens and serves on given address?",
    "question_hi": "net/http में दिए गए address पर listen और serve करने वाला function कौन सा है?",
    "options_en": ["http.ListenAndServe", "http.Serve", "http.Listen", "http.StartServer"],
    "options_hi": ["http.ListenAndServe", "http.Serve", "http.Listen", "http.StartServer"],
    "answer_en": "http.ListenAndServe",
    "answer_hi": "http.ListenAndServe",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which construct represents an unnamed field in a struct?",
    "question_hi": "struct में unnamed field किस तरह दर्शाते हैं?",
    "options_en": ["Embedding type directly", "field: type", "anon(field)", "named anonymous"],
    "options_hi": ["type को सीधे embed करना", "field: type", "anon(field)", "named anonymous"],
    "answer_en": "Embedding type directly",
    "answer_hi": "type को सीधे embed करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which environment variable controls the GOPATH default location in older Go versions?",
    "question_hi": "पुराने Go versions में GOPATH default location किस environment variable से नियंत्रित होता है?",
    "options_en": ["GOPATH", "GOMOD", "GOROOT", "GOHOME"],
    "options_hi": ["GOPATH", "GOMOD", "GOROOT", "GOHOME"],
    "answer_en": "GOPATH",
    "answer_hi": "GOPATH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which method is used to add a value to a sync.Map?",
    "question_hi": "sync.Map में value जोड़ने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["Store", "Set", "Put", "Add"],
    "options_hi": ["Store", "Set", "Put", "Add"],
    "answer_en": "Store",
    "answer_hi": "Store",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which function returns caller information like file and line?",
    "question_hi": "कौन सा function file और line जैसी caller जानकारी देता है?",
    "options_en": ["runtime.Caller", "os.Caller", "debug.Caller", "caller.Info"],
    "options_hi": ["runtime.Caller", "os.Caller", "debug.Caller", "caller.Info"],
    "answer_en": "runtime.Caller",
    "answer_hi": "runtime.Caller",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What does 'go fmt' do when run on a package?",
    "question_hi": "'go fmt' package पर चलाने पर क्या करता है?",
    "options_en": ["Formats source files", "Builds package", "Runs tests", "Installs package"],
    "options_hi": ["source files को format करता है", "package build करता है", "tests चलाता है", "package install करता है"],
    "answer_en": "Formats source files",
    "answer_hi": "source files को format करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which type conversion is required to convert uintptr to unsafe.Pointer?",
    "question_hi": "uintptr को unsafe.Pointer में convert करने के लिए किस conversion की आवश्यकता होती है?",
    "options_en": ["unsafe.Pointer(uintptr)", "uintptr(unsafe.Pointer)", "direct assign", "cast not allowed"],
    "options_hi": ["unsafe.Pointer(uintptr)", "uintptr(unsafe.Pointer)", "direct assign", "cast not allowed"],
    "answer_en": "unsafe.Pointer(uintptr)",
    "answer_hi": "unsafe.Pointer(uintptr)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which statement about goroutines is true?",
    "question_hi": "goroutines के बारे में कौन सी बात सही है?",
    "options_en": ["Lightweight and multiplexed by runtime", "Each maps to one OS thread permanently", "They are heavy like OS threads", "Cannot communicate"],
    "options_hi": ["lightweight और runtime द्वारा multiplex होते हैं", "हर एक permanently एक OS thread से map होता है", "ये OS threads की तरह heavy हैं", "संचार नहीं कर सकते"],
    "answer_en": "Lightweight and multiplexed by runtime",
    "answer_hi": "lightweight और runtime द्वारा multiplex होते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which keyword declares a package-level variable?",
    "question_hi": "package-level variable declare करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["var", "let", "const", "package"],
    "options_hi": ["var", "let", "const", "package"],
    "answer_en": "var",
    "answer_hi": "var",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which function in testing package marks a test as failed immediately?",
    "question_hi": "testing package में किसी test को तुरंत failed करने वाला function कौन सा है?",
    "options_en": ["t.Fatal", "t.Error", "t.Fail", "t.Skip"],
    "options_hi": ["t.Fatal", "t.Error", "t.Fail", "t.Skip"],
    "answer_en": "t.Fatal",
    "answer_hi": "t.Fatal",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which operator checks equality between two values?",
    "question_hi": "दो मानों के बीच equality जांचने के लिए कौन सा operator है?",
    "options_en": ["==", "=", "eq", "equals()"],
    "options_hi": ["==", "=", "eq", "equals()"],
    "answer_en": "==",
    "answer_hi": "==",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the result type of strconv.Itoa(123)?",
    "question_hi": "strconv.Itoa(123) का result type क्या है?",
    "options_en": ["string", "int", "[]byte", "interface{}"],
    "options_hi": ["string", "int", "[]byte", "interface{}"],
    "answer_en": "string",
    "answer_hi": "string",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which function is used to parse template files in text/template?",
    "question_hi": "text/template में template files parse करने के लिए कौन सा function है?",
    "options_en": ["template.ParseFiles", "template.Parse", "template.Read", "template.Load"],
    "options_hi": ["template.ParseFiles", "template.Parse", "template.Read", "template.Load"],
    "answer_en": "template.ParseFiles",
    "answer_hi": "template.ParseFiles",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which of these is used to create a new file?",
    "question_hi": "नया file बनाने के लिए किसका उपयोग करते हैं?",
    "options_en": ["os.Create", "os.New", "ioutil.NewFile", "file.Create"],
    "options_hi": ["os.Create", "os.New", "ioutil.NewFile", "file.Create"],
    "answer_en": "os.Create",
    "answer_hi": "os.Create",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which type conversion yields the default formatted string for a value?",
    "question_hi": "कौन सा type conversion किसी value का default formatted string देता है?",
    "options_en": ["fmt.Sprint(v)", "string(v)", "fmt.Format(v)", "toString(v)"],
    "options_hi": ["fmt.Sprint(v)", "string(v)", "fmt.Format(v)", "toString(v)"],
    "answer_en": "fmt.Sprint(v)",
    "answer_hi": "fmt.Sprint(v)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which of these ensures a function parameter is optional and can accept multiple values?",
    "question_hi": "कौन सा तरीका function parameter को optional और multiple values accept करने वाला बनाता है?",
    "options_en": ["variadic parameter", "pointer parameter", "interface parameter", "slice only"],
    "options_hi": ["variadic parameter", "pointer parameter", "interface parameter", "slice only"],
    "answer_en": "variadic parameter",
    "answer_hi": "variadic parameter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which package provides TCP networking primitives?",
    "question_hi": "TCP networking primitives किस package में मिलते हैं?",
    "options_en": ["net", "net/http", "tcp", "network"],
    "options_hi": ["net", "net/http", "tcp", "network"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which keyword declares a constant expression block that uses iota?",
    "question_hi": "iota का उपयोग करने वाला constant expression block किस keyword से declare होता है?",
    "options_en": ["const ( ... )", "var ( ... )", "enum ( ... )", "constseq ( ... )"],
    "options_hi": ["const ( ... )", "var ( ... )", "enum ( ... )", "constseq ( ... )"],
    "answer_en": "const ( ... )",
    "answer_hi": "const ( ... )",
    "attempted": false,
    "selected": ""
  },
    {
        "num": 21,
        "question_en": "What is the time complexity of accessing an element in an array?",
        "question_hi": "ऐरे में एलिमेंट एक्सेस करने की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "options_hi": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "answer_en": "O(1)",
        "answer_hi": "O(1)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which language is used for styling web pages?",
        "question_hi": "वेब पेज स्टाइल करने के लिए कौन सी भाषा उपयोग की जाती है?",
        "options_en": ["HTML", "JavaScript", "CSS", "Python"],
        "options_hi": ["HTML", "जावास्क्रिप्ट", "CSS", "पाइथन"],
        "answer_en": "CSS",
        "answer_hi": "CSS",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What does URL stand for?",
        "question_hi": "URL का पूरा नाम क्या है?",
        "options_en": ["Uniform Resource Locator", "Universal Resource Link", "Uniform Reference Locator", "Universal Reference Link"],
        "options_hi": ["यूनिफॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लिंक", "यूनिफॉर्म रेफरेन्स लोकेटर", "यूनिवर्सल रेफरेन्स लिंक"],
        "answer_en": "Uniform Resource Locator",
        "answer_hi": "यूनिफॉर्म रिसोर्स लोकेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which sorting algorithm has the best average case time complexity?",
        "question_hi": "कौन सा सॉर्टिंग अल्गोरिदम सबसे अच्छी एवरेज केस टाइम कॉम्प्लेक्सिटी रखता है?",
        "options_en": ["Bubble Sort", "Quick Sort", "Insertion Sort", "Selection Sort"],
        "options_hi": ["बबल सॉर्ट", "क्विक सॉर्ट", "इन्सर्शन सॉर्ट", "सिलेक्शन सॉर्ट"],
        "answer_en": "Quick Sort",
        "answer_hi": "क्विक सॉर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the main purpose of garbage collection in Java?",
        "question_hi": "जावा में गार्बेज कलेक्शन का मुख्य उद्देश्य क्या है?",
        "options_en": ["Memory management", "Code optimization", "Error handling", "Security"],
        "options_hi": ["मेमोरी मैनेजमेंट", "कोड ऑप्टिमाइजेशन", "एरर हैंडलिंग", "सिक्योरिटी"],
        "answer_en": "Memory management",
        "answer_hi": "मेमोरी मैनेजमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which data structure is used for BFS traversal?",
        "question_hi": "BFS ट्रैवर्सल के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Stack", "Queue", "Tree", "Graph"],
        "options_hi": ["स्टैक", "क्यू", "ट्री", "ग्राफ"],
        "answer_en": "Queue",
        "answer_hi": "क्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What does IDE stand for?",
        "question_hi": "IDE का पूरा नाम क्या है?",
        "options_en": ["Integrated Development Environment", "International Development Engine", "Integrated Design Environment", "Interactive Development Engine"],
        "options_hi": ["इंटीग्रेटेड डेवलपमेंट एनवायरनमेंट", "इंटरनेशनल डेवलपमेंट इंजन", "इंटीग्रेटेड डिजाइन एनवायरनमेंट", "इंटरएक्टिव डेवलपमेंट इंजन"],
        "answer_en": "Integrated Development Environment",
        "answer_hi": "इंटीग्रेटेड डेवलपमेंट एनवायरनमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which keyword is used to create an object in Java?",
        "question_hi": "जावा में ऑब्जेक्ट क्रिएट करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["create", "new", "object", "allocate"],
        "options_hi": ["क्रिएट", "न्यू", "ऑब्जेक्ट", "अलोकेट"],
        "answer_en": "new",
        "answer_hi": "न्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the time complexity of merge sort?",
        "question_hi": "मर्ज सॉर्ट की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        "options_hi": ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        "answer_en": "O(n log n)",
        "answer_hi": "O(n log n)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which protocol is used for file transfer?",
        "question_hi": "फाइल ट्रांसफर के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "SMTP", "TCP"],
        "options_hi": ["HTTP", "FTP", "SMTP", "TCP"],
        "answer_en": "FTP",
        "answer_hi": "FTP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What does SQL INSERT statement do?",
        "question_hi": "SQL INSERT स्टेटमेंट क्या करता है?",
        "options_en": ["Deletes data", "Updates data", "Adds new data", "Retrieves data"],
        "options_hi": ["डेटा डिलीट करता है", "डेटा अपडेट करता है", "नया डेटा जोड़ता है", "डेटा रिट्रीव करता है"],
        "answer_en": "Adds new data",
        "answer_hi": "नया डेटा जोड़ता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which data structure uses FIFO principle?",
        "question_hi": "कौन सी डेटा स्ट्रक्चर FIFO प्रिंसिपल का उपयोग करती है?",
        "options_en": ["Stack", "Queue", "Tree", "Graph"],
        "options_hi": ["स्टैक", "क्यू", "ट्री", "ग्राफ"],
        "answer_en": "Queue",
        "answer_hi": "क्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of version control systems like Git?",
        "question_hi": "Git जैसे वर्जन कंट्रोल सिस्टम का उद्देश्य क्या है?",
        "options_en": ["Code backup", "Collaboration", "Tracking changes", "All of the above"],
        "options_hi": ["कोड बैकअप", "कोलैबोरेशन", "चेंजेस ट्रैकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which language is primarily used for iOS development?",
        "question_hi": "iOS डेवलपमेंट के लिए मुख्य रूप से कौन सी भाषा उपयोग की जाती है?",
        "options_en": ["Java", "Swift", "Kotlin", "C#"],
        "options_hi": ["जावा", "स्विफ्ट", "कोटलिन", "C#"],
        "answer_en": "Swift",
        "answer_hi": "स्विफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What does CPU stand for?",
        "question_hi": "CPU का पूरा नाम क्या है?",
        "options_en": ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
        "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंप्यूटर प्रोग्राम यूनिट"],
        "answer_en": "Central Processing Unit",
        "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which algorithm is used for pattern searching in strings?",
        "question_hi": "स्ट्रिंग्स में पैटर्न सर्चिंग के लिए कौन सा अल्गोरिदम उपयोग किया जाता है?",
        "options_en": ["Binary Search", "Quick Sort", "KMP Algorithm", "Bubble Sort"],
        "options_hi": ["बाइनरी सर्च", "क्विक सॉर्ट", "KMP अल्गोरिदम", "बबल सॉर्ट"],
        "answer_en": "KMP Algorithm",
        "answer_hi": "KMP अल्गोरिदम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the time complexity of linear search?",
        "question_hi": "लीनियर सर्च की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "options_hi": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "answer_en": "O(n)",
        "answer_hi": "O(n)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which data structure is used for DFS traversal?",
        "question_hi": "DFS ट्रैवर्सल के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Queue", "Stack", "Tree", "Graph"],
        "options_hi": ["क्यू", "स्टैक", "ट्री", "ग्राफ"],
        "answer_en": "Stack",
        "answer_hi": "स्टैक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What does RAM stand for?",
        "question_hi": "RAM का पूरा नाम क्या है?",
        "options_en": ["Random Access Memory", "Read Access Memory", "Random Allocation Memory", "Read Allocation Memory"],
        "options_hi": ["रैंडम एक्सेस मेमोरी", "रीड एक्सेस मेमोरी", "रैंडम अलोकेशन मेमोरी", "रीड अलोकेशन मेमोरी"],
        "answer_en": "Random Access Memory",
        "answer_hi": "रैंडम एक्सेस मेमोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which keyword is used to define a constant in Java?",
        "question_hi": "जावा में कॉन्स्टेंट डिफाइन करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["const", "final", "static", "constant"],
        "options_hi": ["कॉन्स्ट", "फाइनल", "स्टैटिक", "कॉन्स्टेंट"],
        "answer_en": "final",
        "answer_hi": "फाइनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of DNS?",
        "question_hi": "DNS का उद्देश्य क्या है?",
        "options_en": ["Domain Name System", "Data Network Service", "Digital Naming System", "Domain Network Service"],
        "options_hi": ["डोमेन नेम सिस्टम", "डेटा नेटवर्क सर्विस", "डिजिटल नेमिंग सिस्टम", "डोमेन नेटवर्क सर्विस"],
        "answer_en": "Domain Name System",
        "answer_hi": "डोमेन नेम सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which sorting algorithm is stable?",
        "question_hi": "कौन सा सॉर्टिंग अल्गोरिदम स्टेबल है?",
        "options_en": ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
        "options_hi": ["क्विक सॉर्ट", "हीप सॉर्ट", "मर्ज सॉर्ट", "सिलेक्शन सॉर्ट"],
        "answer_en": "Merge Sort",
        "answer_hi": "मर्ज सॉर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What does HTTP stand for?",
        "question_hi": "HTTP का पूरा नाम क्या है?",
        "options_en": ["HyperText Transfer Protocol", "High Text Transfer Protocol", "Hyper Transfer Text Protocol", "High Transfer Text Protocol"],
        "options_hi": ["हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाई टेक्स्ट ट्रांसफर प्रोटोकॉल", "हाइपर ट्रांसफर टेक्स्ट प्रोटोकॉल", "हाई ट्रांसफर टेक्स्ट प्रोटोकॉल"],
        "answer_en": "HyperText Transfer Protocol",
        "answer_hi": "हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which data structure is used for implementing LRU cache?",
        "question_hi": "LRU कैश इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Array", "Linked List", "HashMap + Doubly Linked List", "Stack"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "हैशमैप + डबली लिंक्ड लिस्ट", "स्टैक"],
        "answer_en": "HashMap + Doubly Linked List",
        "answer_hi": "हैशमैप + डबली लिंक्ड लिस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the time complexity of heap sort?",
        "question_hi": "हीप सॉर्ट की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        "options_hi": ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        "answer_en": "O(n log n)",
        "answer_hi": "O(n log n)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which protocol is used for secure shell access?",
        "question_hi": "सिक्योर शेल एक्सेस के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "SSH", "SMTP"],
        "options_hi": ["HTTP", "FTP", "SSH", "SMTP"],
        "answer_en": "SSH",
        "answer_hi": "SSH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What does OOP stand for?",
        "question_hi": "OOP का पूरा नाम क्या है?",
        "options_en": ["Object Oriented Programming", "Object Oriented Protocol", "Object Optimization Programming", "Object Operation Protocol"],
        "options_hi": ["ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग", "ऑब्जेक्ट ओरिएंटेड प्रोटोकॉल", "ऑब्जेक्ट ऑप्टिमाइजेशन प्रोग्रामिंग", "ऑब्जेक्ट ऑपरेशन प्रोटोकॉल"],
        "answer_en": "Object Oriented Programming",
        "answer_hi": "ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which data structure is used for implementing undo functionality?",
        "question_hi": "अंडो फंक्शनैलिटी इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Queue", "Stack", "Tree", "Graph"],
        "options_hi": ["क्यू", "स्टैक", "ट्री", "ग्राफ"],
        "answer_en": "Stack",
        "answer_hi": "स्टैक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the default port for HTTPS?",
        "question_hi": "HTTPS के लिए डिफॉल्ट पोर्ट क्या है?",
        "options_en": ["80", "443", "8080", "21"],
        "options_hi": ["80", "443", "8080", "21"],
        "answer_en": "443",
        "answer_hi": "443",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which algorithm is used for minimum spanning tree?",
        "question_hi": "मिनिमम स्पैनिंग ट्री के लिए कौन सा अल्गोरिदम उपयोग किया जाता है?",
        "options_en": ["Dijkstra's", "Kruskal's", "Bellman-Ford", "Floyd-Warshall"],
        "options_hi": ["डिजक्स्ट्रा", "क्रुस्कल", "बेलमन-फोर्ड", "फ्लॉयड-वारशल"],
        "answer_en": "Kruskal's",
        "answer_hi": "क्रुस्कल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What does VPN stand for?",
        "question_hi": "VPN का पूरा नाम क्या है?",
        "options_en": ["Virtual Private Network", "Virtual Public Network", "Verified Private Network", "Virtual Protocol Network"],
        "options_hi": ["वर्चुअल प्राइवेट नेटवर्क", "वर्चुअल पब्लिक नेटवर्क", "वेरिफाइड प्राइवेट नेटवर्क", "वर्चुअल प्रोटोकॉल नेटवर्क"],
        "answer_en": "Virtual Private Network",
        "answer_hi": "वर्चुअल प्राइवेट नेटवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which data structure is used for implementing dictionaries?",
        "question_hi": "डिक्शनरी इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Array", "Linked List", "Hash Table", "Stack"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "हैश टेबल", "स्टैक"],
        "answer_en": "Hash Table",
        "answer_hi": "हैश टेबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the time complexity of insertion in a binary search tree?",
        "question_hi": "बाइनरी सर्च ट्री में इन्सर्शन की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "options_hi": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "answer_en": "O(log n)",
        "answer_hi": "O(log n)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which protocol is used for dynamic IP address assignment?",
        "question_hi": "डायनामिक IP एड्रेस असाइनमेंट के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "DNS", "DHCP", "FTP"],
        "options_hi": ["HTTP", "DNS", "DHCP", "FTP"],
        "answer_en": "DHCP",
        "answer_hi": "DHCP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What does SQL SELECT statement do?",
        "question_hi": "SQL SELECT स्टेटमेंट क्या करता है?",
        "options_en": ["Deletes data", "Updates data", "Adds new data", "Retrieves data"],
        "options_hi": ["डेटा डिलीट करता है", "डेटा अपडेट करता है", "नया डेटा जोड़ता है", "डेटा रिट्रीव करता है"],
        "answer_en": "Retrieves data",
        "answer_hi": "डेटा रिट्रीव करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which data structure is used for implementing recursion?",
        "question_hi": "रिकर्सन इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Queue", "Stack", "Tree", "Graph"],
        "options_hi": ["क्यू", "स्टैक", "ट्री", "ग्राफ"],
        "answer_en": "Stack",
        "answer_hi": "स्टैक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of compiler?",
        "question_hi": "कंपाइलर का उद्देश्य क्या है?",
        "options_en": ["Translate high-level to machine code", "Execute programs", "Debug code", "All of the above"],
        "options_hi": ["हाई-लेवल को मशीन कोड में ट्रांसलेट करना", "प्रोग्राम एक्जीक्यूट करना", "कोड डीबग करना", "उपरोक्त सभी"],
        "answer_en": "Translate high-level to machine code",
        "answer_hi": "हाई-लेवल को मशीन कोड में ट्रांसलेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which language is used for web development backend?",
        "question_hi": "वेब डेवलपमेंट बैकएंड के लिए कौन सी भाषा उपयोग की जाती है?",
        "options_en": ["HTML", "CSS", "JavaScript", "Python"],
        "options_hi": ["HTML", "CSS", "जावास्क्रिप्ट", "पाइथन"],
        "answer_en": "Python",
        "answer_hi": "पाइथन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What does BIOS stand for?",
        "question_hi": "BIOS का पूरा नाम क्या है?",
        "options_en": ["Basic Input Output System", "Binary Input Output System", "Basic Integrated Operating System", "Binary Integrated Operating System"],
        "options_hi": ["बेसिक इनपुट आउटपुट सिस्टम", "बाइनरी इनपुट आउटपुट सिस्टम", "बेसिक इंटीग्रेटेड ऑपरेटिंग सिस्टम", "बाइनरी इंटीग्रेटेड ऑपरेटिंग सिस्टम"],
        "answer_en": "Basic Input Output System",
        "answer_hi": "बेसिक इनपुट आउटपुट सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which algorithm is used for database indexing?",
        "question_hi": "डेटाबेस इंडेक्सिंग के लिए कौन सा अल्गोरिदम उपयोग किया जाता है?",
        "options_en": ["Binary Search Tree", "B-tree", "Linked List", "Array"],
        "options_hi": ["बाइनरी सर्च ट्री", "B-ट्री", "लिंक्ड लिस्ट", "ऐरे"],
        "answer_en": "B-tree",
        "answer_hi": "B-ट्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the time complexity of quicksort in worst case?",
        "question_hi": "क्विकसॉर्ट की वर्स्ट केस टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        "options_hi": ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        "answer_en": "O(n²)",
        "answer_hi": "O(n²)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which data structure is used for implementing social networks?",
        "question_hi": "सोशल नेटवर्क्स इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Array", "Linked List", "Graph", "Stack"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "ग्राफ", "स्टैक"],
        "answer_en": "Graph",
        "answer_hi": "ग्राफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What does SQL UPDATE statement do?",
        "question_hi": "SQL UPDATE स्टेटमेंट क्या करता है?",
        "options_en": ["Deletes data", "Modifies existing data", "Adds new data", "Retrieves data"],
        "options_hi": ["डेटा डिलीट करता है", "एक्सिस्टिंग डेटा मॉडिफाई करता है", "नया डेटा जोड़ता है", "डेटा रिट्रीव करता है"],
        "answer_en": "Modifies existing data",
        "answer_hi": "एक्सिस्टिंग डेटा मॉडिफाई करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which protocol is used for email reception?",
        "question_hi": "ईमेल रिसेप्शन के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["SMTP", "POP3", "FTP", "HTTP"],
        "options_hi": ["SMTP", "POP3", "FTP", "HTTP"],
        "answer_en": "POP3",
        "answer_hi": "POP3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of firewall?",
        "question_hi": "फायरवॉल का उद्देश्य क्या है?",
        "options_en": ["Network security", "Data backup", "Speed optimization", "All of the above"],
        "options_hi": ["नेटवर्क सिक्योरिटी", "डेटा बैकअप", "स्पीड ऑप्टिमाइजेशन", "उपरोक्त सभी"],
        "answer_en": "Network security",
        "answer_hi": "नेटवर्क सिक्योरिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which data structure is used for implementing autocomplete?",
        "question_hi": "ऑटोकम्पलीट इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Array", "Linked List", "Trie", "Stack"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "ट्राई", "स्टैक"],
        "answer_en": "Trie",
        "answer_hi": "ट्राई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the time complexity of DFS?",
        "question_hi": "DFS की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(V+E)", "O(V)", "O(E)", "O(V²)"],
        "options_hi": ["O(V+E)", "O(V)", "O(E)", "O(V²)"],
        "answer_en": "O(V+E)",
        "answer_hi": "O(V+E)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which protocol is used for real-time communication?",
        "question_hi": "रियल-टाइम कम्युनिकेशन के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "WebSocket", "SMTP"],
        "options_hi": ["HTTP", "FTP", "वेबसॉकेट", "SMTP"],
        "answer_en": "WebSocket",
        "answer_hi": "वेबसॉकेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What does SQL DELETE statement do?",
        "question_hi": "SQL DELETE स्टेटमेंट क्या करता है?",
        "options_en": ["Deletes data", "Updates data", "Adds new data", "Retrieves data"],
        "options_hi": ["डेटा डिलीट करता है", "डेटा अपडेट करता है", "नया डेटा जोड़ता है", "डेटा रिट्रीव करता है"],
        "answer_en": "Deletes data",
        "answer_hi": "डेटा डिलीट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which data structure is used for implementing browser history?",
        "question_hi": "ब्राउजर हिस्ट्री इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Queue", "Stack", "Tree", "Graph"],
        "options_hi": ["क्यू", "स्टैक", "ट्री", "ग्राफ"],
        "answer_en": "Stack",
        "answer_hi": "स्टैक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the time complexity of BFS?",
        "question_hi": "BFS की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(V+E)", "O(V)", "O(E)", "O(V²)"],
        "options_hi": ["O(V+E)", "O(V)", "O(E)", "O(V²)"],
        "answer_en": "O(V+E)",
        "answer_hi": "O(V+E)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which protocol is used for video streaming?",
        "question_hi": "वीडियो स्ट्रीमिंग के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "RTMP", "SMTP"],
        "options_hi": ["HTTP", "FTP", "RTMP", "SMTP"],
        "answer_en": "RTMP",
        "answer_hi": "RTMP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What does SQL WHERE clause do?",
        "question_hi": "SQL WHERE क्लॉज क्या करता है?",
        "options_en": ["Filters records", "Sorts records", "Groups records", "Joins tables"],
        "options_hi": ["रिकॉर्ड्स फिल्टर करता है", "रिकॉर्ड्स सॉर्ट करता है", "रिकॉर्ड्स ग्रुप करता है", "टेबल्स जोड़ता है"],
        "answer_en": "Filters records",
        "answer_hi": "रिकॉर्ड्स फिल्टर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which data structure is used for implementing call stack?",
        "question_hi": "कॉल स्टैक इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Queue", "Stack", "Tree", "Graph"],
        "options_hi": ["क्यू", "स्टैक", "ट्री", "ग्राफ"],
        "answer_en": "Stack",
        "answer_hi": "स्टैक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the time complexity of matrix multiplication?",
        "question_hi": "मैट्रिक्स मल्टीप्लिकेशन की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n)", "O(n²)", "O(n³)", "O(log n)"],
        "options_hi": ["O(n)", "O(n²)", "O(n³)", "O(log n)"],
        "answer_en": "O(n³)",
        "answer_hi": "O(n³)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which protocol is used for file sharing?",
        "question_hi": "फाइल शेयरिंग के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "SMTP", "TCP"],
        "options_hi": ["HTTP", "FTP", "SMTP", "TCP"],
        "answer_en": "FTP",
        "answer_hi": "FTP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What does SQL JOIN clause do?",
        "question_hi": "SQL JOIN क्लॉज क्या करता है?",
        "options_en": ["Combines rows from tables", "Filters records", "Sorts records", "Groups records"],
        "options_hi": ["टेबल्स से रोज कॉम्बाइन करता है", "रिकॉर्ड्स फिल्टर करता है", "रिकॉर्ड्स सॉर्ट करता है", "रिकॉर्ड्स ग्रुप करता है"],
        "answer_en": "Combines rows from tables",
        "answer_hi": "टेबल्स से रोज कॉम्बाइन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which data structure is used for implementing job scheduling?",
        "question_hi": "जॉब शेड्यूलिंग इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Queue", "Stack", "Tree", "Graph"],
        "options_hi": ["क्यू", "स्टैक", "ट्री", "ग्राफ"],
        "answer_en": "Queue",
        "answer_hi": "क्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the time complexity of binary tree traversal?",
        "question_hi": "बाइनरी ट्री ट्रैवर्सल की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        "options_hi": ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        "answer_en": "O(n)",
        "answer_hi": "O(n)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which protocol is used for network time synchronization?",
        "question_hi": "नेटवर्क टाइम सिंक्रोनाइजेशन के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "NTP", "SMTP"],
        "options_hi": ["HTTP", "FTP", "NTP", "SMTP"],
        "answer_en": "NTP",
        "answer_hi": "NTP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What does SQL GROUP BY clause do?",
        "question_hi": "SQL GROUP BY क्लॉज क्या करता है?",
        "options_en": ["Groups rows", "Filters records", "Sorts records", "Joins tables"],
        "options_hi": ["रोज ग्रुप करता है", "रिकॉर्ड्स फिल्टर करता है", "रिकॉर्ड्स सॉर्ट करता है", "टेबल्स जोड़ता है"],
        "answer_en": "Groups rows",
        "answer_hi": "रोज ग्रुप करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which data structure is used for implementing cache?",
        "question_hi": "कैश इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Array", "Linked List", "Hash Table", "All of the above"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "हैश टेबल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the time complexity of hash table insertion?",
        "question_hi": "हैश टेबल इन्सर्शन की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "options_hi": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "answer_en": "O(1)",
        "answer_hi": "O(1)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which protocol is used for network management?",
        "question_hi": "नेटवर्क मैनेजमेंट के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "SNMP", "SMTP"],
        "options_hi": ["HTTP", "FTP", "SNMP", "SMTP"],
        "answer_en": "SNMP",
        "answer_hi": "SNMP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What does SQL ORDER BY clause do?",
        "question_hi": "SQL ORDER BY क्लॉज क्या करता है?",
        "options_en": ["Sorts records", "Filters records", "Groups records", "Joins tables"],
        "options_hi": ["रिकॉर्ड्स सॉर्ट करता है", "रिकॉर्ड्स फिल्टर करता है", "रिकॉर्ड्स ग्रुप करता है", "टेबल्स जोड़ता है"],
        "answer_en": "Sorts records",
        "answer_hi": "रिकॉर्ड्स सॉर्ट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which data structure is used for implementing sets?",
        "question_hi": "सेट्स इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Array", "Linked List", "Hash Table", "All of the above"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "हैश टेबल", "उपरोक्त सभी"],
        "answer_en": "Hash Table",
        "answer_hi": "हैश टेबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the time complexity of bubble sort in best case?",
        "question_hi": "बबल सॉर्ट की बेस्ट केस टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
        "options_hi": ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
        "answer_en": "O(n)",
        "answer_hi": "O(n)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which protocol is used for secure file transfer?",
        "question_hi": "सिक्योर फाइल ट्रांसफर के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "SFTP", "SMTP"],
        "options_hi": ["HTTP", "FTP", "SFTP", "SMTP"],
        "answer_en": "SFTP",
        "answer_hi": "SFTP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What does SQL HAVING clause do?",
        "question_hi": "SQL HAVING क्लॉज क्या करता है?",
        "options_en": ["Filters groups", "Filters records", "Sorts records", "Joins tables"],
        "options_hi": ["ग्रुप्स फिल्टर करता है", "रिकॉर्ड्स फिल्टर करता है", "रिकॉर्ड्स सॉर्ट करता है", "टेबल्स जोड़ता है"],
        "answer_en": "Filters groups",
        "answer_hi": "ग्रुप्स फिल्टर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which data structure is used for implementing priority queue?",
        "question_hi": "प्रायोरिटी क्यू इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Array", "Linked List", "Heap", "Stack"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "हीप", "स्टैक"],
        "answer_en": "Heap",
        "answer_hi": "हीप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the time complexity of radix sort?",
        "question_hi": "रेडिक्स सॉर्ट की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n)", "O(nk)", "O(n log n)", "O(n²)"],
        "options_hi": ["O(n)", "O(nk)", "O(n log n)", "O(n²)"],
        "answer_en": "O(nk)",
        "answer_hi": "O(nk)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which protocol is used for voice over IP?",
        "question_hi": "वॉइस ओवर IP के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "VoIP", "SMTP"],
        "options_hi": ["HTTP", "FTP", "VoIP", "SMTP"],
        "answer_en": "VoIP",
        "answer_hi": "VoIP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What does SQL UNION operator do?",
        "question_hi": "SQL UNION ऑपरेटर क्या करता है?",
        "options_en": ["Combines result sets", "Filters records", "Sorts records", "Joins tables"],
        "options_hi": ["रिजल्ट सेट्स कॉम्बाइन करता है", "रिकॉर्ड्स फिल्टर करता है", "रिकॉर्ड्स सॉर्ट करता है", "टेबल्स जोड़ता है"],
        "answer_en": "Combines result sets",
        "answer_hi": "रिजल्ट सेट्स कॉम्बाइन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which data structure is used for implementing blockchain?",
        "question_hi": "ब्लॉकचेन इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Array", "Linked List", "Tree", "Graph"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "ट्री", "ग्राफ"],
        "answer_en": "Linked List",
        "answer_hi": "लिंक्ड लिस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the time complexity of counting sort?",
        "question_hi": "काउंटिंग सॉर्ट की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n)", "O(n+k)", "O(n log n)", "O(n²)"],
        "options_hi": ["O(n)", "O(n+k)", "O(n log n)", "O(n²)"],
        "answer_en": "O(n+k)",
        "answer_hi": "O(n+k)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which protocol is used for remote desktop access?",
        "question_hi": "रिमोट डेस्कटॉप एक्सेस के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "RDP", "SMTP"],
        "options_hi": ["HTTP", "FTP", "RDP", "SMTP"],
        "answer_en": "RDP",
        "answer_hi": "RDP",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What does SQL PRIMARY KEY constraint do?",
        "question_hi": "SQL PRIMARY KEY कंस्ट्रेंट क्या करता है?",
        "options_en": ["Uniquely identifies records", "Filters records", "Sorts records", "Joins tables"],
        "options_hi": ["रिकॉर्ड्स को यूनिकली आइडेंटिफाई करता है", "रिकॉर्ड्स फिल्टर करता है", "रिकॉर्ड्स सॉर्ट करता है", "टेबल्स जोड़ता है"],
        "answer_en": "Uniquely identifies records",
        "answer_hi": "रिकॉर्ड्स को यूनिकली आइडेंटिफाई करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which data structure is used for implementing neural networks?",
        "question_hi": "न्यूरल नेटवर्क्स इम्प्लीमेंट करने के लिए कौन सी डेटा स्ट्रक्चर उपयोग की जाती है?",
        "options_en": ["Array", "Linked List", "Graph", "All of the above"],
        "options_hi": ["ऐरे", "लिंक्ड लिस्ट", "ग्राफ", "उपरोक्त सभी"],
        "answer_en": "Graph",
        "answer_hi": "ग्राफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the time complexity of bucket sort?",
        "question_hi": "बकेट सॉर्ट की टाइम कॉम्प्लेक्सिटी क्या है?",
        "options_en": ["O(n)", "O(n+k)", "O(n log n)", "O(n²)"],
        "options_hi": ["O(n)", "O(n+k)", "O(n log n)", "O(n²)"],
        "answer_en": "O(n+k)",
        "answer_hi": "O(n+k)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which protocol is used for web services?",
        "question_hi": "वेब सर्विसेज के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
        "options_en": ["HTTP", "FTP", "SOAP", "SMTP"],
        "options_hi": ["HTTP", "FTP", "SOAP", "SMTP"],
        "answer_en": "SOAP",
        "answer_hi": "SOAP",
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