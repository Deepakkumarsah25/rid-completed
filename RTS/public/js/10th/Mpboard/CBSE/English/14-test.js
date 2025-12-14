const questions=[
     {
        "num": 1,
        "question_en": "How do you handle environment variables in Go?",
        "question_hi": "Go में एनवायरनमेंट वेरिएबल्स कैसे हैंडल करते हैं?",
        "options_en": ["os.Getenv()", "env.Get()", "system.Getenv()", "runtime.Getenv()"],
        "options_hi": ["os.Getenv()", "env.Get()", "system.Getenv()", "runtime.Getenv()"],
        "answer_en": "os.Getenv()",
        "answer_hi": "os.Getenv()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the zero value of a slice in Go?",
        "question_hi": "Go में स्लाइस का जीरो वैल्यू क्या होता है?",
        "options_en": ["nil", "empty slice", "0", "undefined"],
        "options_hi": ["nil", "खाली स्लाइस", "0", "अपरिभाषित"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "How do you achieve composition in Go?",
        "question_hi": "Go में कम्पोज़िशन कैसे प्राप्त करते हैं?",
        "options_en": ["Using struct embedding", "Using inheritance", "Using interfaces only", "Using pointers"],
        "options_hi": ["स्ट्रक्चर एम्बेडिंग का उपयोग करके", "इनहेरिटेंस का उपयोग करके", "केवल इंटरफेस का उपयोग करके", "पॉइंटर्स का उपयोग करके"],
        "answer_en": "Using struct embedding",
        "answer_hi": "स्ट्रक्चर एम्बेडिंग का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the purpose of context package in Go?",
        "question_hi": "Go में context पैकेज का उद्देश्य क्या है?",
        "options_en": ["Request-scoped values and cancellation", "Database connections", "HTTP routing", "Logging"],
        "options_hi": ["रिक्वेस्ट-स्कोप्ड वैल्यू और कैंसलेशन", "डेटाबेस कनेक्शन", "HTTP रूटिंग", "लॉगिंग"],
        "answer_en": "Request-scoped values and cancellation",
        "answer_hi": "रिक्वेस्ट-स्कोप्ड वैल्यू और कैंसलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is a buffered channel in Go?",
        "question_hi": "Go में बफर्ड चैनल क्या है?",
        "options_en": ["Channel with capacity", "Channel without capacity", "Fast channel", "Unidirectional channel"],
        "options_hi": ["कैपेसिटी वाला चैनल", "बिना कैपेसिटी का चैनल", "फास्ट चैनल", "यूनिडायरेक्शनल चैनल"],
        "answer_en": "Channel with capacity",
        "answer_hi": "कैपेसिटी वाला चैनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How to prevent goroutine leaks?",
        "question_hi": "गोरूटीन लीक्स को कैसे रोकते हैं?",
        "options_en": ["Using context cancellation", "Using infinite loops", "Ignoring them", "Using more goroutines"],
        "options_hi": ["कॉन्टेक्स्ट कैंसलेशन का उपयोग करके", "इनफिनाइट लूप्स का उपयोग करके", "उन्हें इग्नोर करके", "ज्यादा गोरूटीन्स का उपयोग करके"],
        "answer_en": "Using context cancellation",
        "answer_hi": "कॉन्टेक्स्ट कैंसलेशन का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the empty interface in Go?",
        "question_hi": "Go में एम्प्टी इंटरफेस क्या है?",
        "options_en": ["interface{}", "interface()", "empty{}", "any{}"],
        "options_hi": ["interface{}", "interface()", "empty{}", "any{}"],
        "answer_en": "interface{}",
        "answer_hi": "interface{}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How to achieve polymorphism in Go?",
        "question_hi": "Go में पॉलीमॉर्फिज्म कैसे प्राप्त करते हैं?",
        "options_en": ["Using interfaces", "Using structs", "Using inheritance", "Using generics"],
        "options_hi": ["इंटरफेस का उपयोग करके", "स्ट्रक्चर्स का उपयोग करके", "इनहेरिटेंस का उपयोग करके", "जेनरिक्स का उपयोग करके"],
        "answer_en": "Using interfaces",
        "answer_hi": "इंटरफेस का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is defer in Go?",
        "question_hi": "Go में defer क्या है?",
        "options_en": ["Delays function execution until surrounding function returns", "Immediate execution", "Error handling", "Loop control"],
        "options_hi": ["फंक्शन एक्सेक्यूशन को सराउंडिंग फंक्शन के रिटर्न तक डिले करता है", "इमीडिएट एक्सेक्यूशन", "एरर हैंडलिंग", "लूप कंट्रोल"],
        "answer_en": "Delays function execution until surrounding function returns",
        "answer_hi": "फंक्शन एक्सेक्यूशन को सराउंडिंग फंक्शन के रिटर्न तक डिले करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is a mutex in Go?",
        "question_hi": "Go में म्यूटेक्स क्या है?",
        "options_en": ["Mutual exclusion lock", "Channel type", "Function type", "Interface type"],
        "options_hi": ["म्यूचुअल एक्सक्लूजन लॉक", "चैनल टाइप", "फंक्शन टाइप", "इंटरफेस टाइप"],
        "answer_en": "Mutual exclusion lock",
        "answer_hi": "म्यूचुअल एक्सक्लूजन लॉक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "How to convert interface{} to concrete type?",
        "question_hi": "interface{} को कंक्रीट टाइप में कैसे कन्वर्ट करते हैं?",
        "options_en": ["Type assertion", "Type conversion", "Casting", "Parsing"],
        "options_hi": ["टाइप असर्शन", "टाइप कन्वर्जन", "कास्टिंग", "पार्सिंग"],
        "answer_en": "Type assertion",
        "answer_hi": "टाइप असर्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the purpose of sync.WaitGroup?",
        "question_hi": "sync.WaitGroup का उद्देश्य क्या है?",
        "options_en": ["Wait for goroutines to finish", "Synchronize maps", "Lock resources", "Manage memory"],
        "options_hi": ["गोरूटीन्स के खत्म होने का इंतज़ार करना", "मैप्स सिंक्रोनाइज़ करना", "रिसोर्सेज लॉक करना", "मेमोरी मैनेज करना"],
        "answer_en": "Wait for goroutines to finish",
        "answer_hi": "गोरूटीन्स के खत्म होने का इंतज़ार करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is a race condition in Go?",
        "question_hi": "Go में रेस कंडीशन क्या है?",
        "options_en": ["When multiple goroutines access shared data concurrently", "Slow program", "Memory leak", "Deadlock"],
        "options_hi": ["जब मल्टीपल गोरूटीन्स शेयर्ड डेटा को कंकरंटली एक्सेस करती हैं", "स्लो प्रोग्राम", "मेमोरी लीक", "डेडलॉक"],
        "answer_en": "When multiple goroutines access shared data concurrently",
        "answer_hi": "जब मल्टीपल गोरूटीन्स शेयर्ड डेटा को कंकरंटली एक्सेस करती हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How to detect race conditions in Go?",
        "question_hi": "Go में रेस कंडीशन्स कैसे डिटेक्ट करते हैं?",
        "options_en": ["go run -race", "go test -race", "go build --race", "All of the above"],
        "options_hi": ["go run -race", "go test -race", "go build --race", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of sync.Pool?",
        "question_hi": "sync.Pool का उद्देश्य क्या है?",
        "options_en": ["Reuse allocated objects", "Memory allocation", "Garbage collection", "Object creation"],
        "options_hi": ["अलोकेटेड ऑब्जेक्ट्स का पुन: उपयोग", "मेमोरी अलोकेशन", "गार्बेज कलेक्शन", "ऑब्जेक्ट क्रिएशन"],
        "answer_en": "Reuse allocated objects",
        "answer_hi": "अलोकेटेड ऑब्जेक्ट्स का पुन: उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is a method receiver in Go?",
        "question_hi": "Go में मेथड रिसीवर क्या है?",
        "options_en": ["Links method to type", "Function parameter", "Return value", "Interface"],
        "options_hi": ["मेथड को टाइप से लिंक करता है", "फंक्शन पैरामीटर", "रिटर्न वैल्यू", "इंटरफेस"],
        "answer_en": "Links method to type",
        "answer_hi": "मेथड को टाइप से लिंक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Difference between value and pointer receiver?",
        "question_hi": "वैल्यू और पॉइंटर रिसीवर में क्या अंतर है?",
        "options_en": ["Pointer can modify struct, value makes copy", "No difference", "Value is faster", "Pointer is slower"],
        "options_hi": ["पॉइंटर स्ट्रक्चर मॉडिफाई कर सकता है, वैल्यू कॉपी बनाता है", "कोई अंतर नहीं", "वैल्यू फास्टर है", "पॉइंटर स्लोवर है"],
        "answer_en": "Pointer can modify struct, value makes copy",
        "answer_hi": "पॉइंटर स्ट्रक्चर मॉडिफाई कर सकता है, वैल्यू कॉपी बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is goroutine in Go?",
        "question_hi": "Go में गोरूटीन क्या है?",
        "options_en": ["Lightweight thread", "Heavy process", "Function call", "Variable"],
        "options_hi": ["लाइटवेट थ्रेड", "हेवी प्रोसेस", "फंक्शन कॉल", "वेरिएबल"],
        "answer_en": "Lightweight thread",
        "answer_hi": "लाइटवेट थ्रेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "How to create a goroutine?",
        "question_hi": "गोरूटीन कैसे बनाते हैं?",
        "options_en": ["go keyword", "goroutine keyword", "async keyword", "thread keyword"],
        "options_hi": ["go कीवर्ड", "goroutine कीवर्ड", "async कीवर्ड", "thread कीवर्ड"],
        "answer_en": "go keyword",
        "answer_hi": "go कीवर्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is channel in Go?",
        "question_hi": "Go में चैनल क्या है?",
        "options_en": ["Communication mechanism between goroutines", "Data type", "Function", "Variable"],
        "options_hi": ["गोरूटीन्स के बीच कम्युनिकेशन मैकेनिज्म", "डेटा टाइप", "फंक्शन", "वेरिएबल"],
        "answer_en": "Communication mechanism between goroutines",
        "answer_hi": "गोरूटीन्स के बीच कम्युनिकेशन मैकेनिज्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is select statement used for?",
        "question_hi": "select स्टेटमेंट किस लिए उपयोग किया जाता है?",
        "options_en": ["Multiple channel operations", "Loop control", "Error handling", "Type switching"],
        "options_hi": ["मल्टीपल चैनल ऑपरेशन्स", "लूप कंट्रोल", "एरर हैंडलिंग", "टाइप स्विचिंग"],
        "answer_en": "Multiple channel operations",
        "answer_hi": "मल्टीपल चैनल ऑपरेशन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is interface in Go?",
        "question_hi": "Go में इंटरफेस क्या है?",
        "options_en": ["Set of method signatures", "Class definition", "Struct type", "Function type"],
        "options_hi": ["मेथड सिग्नेचर्स का सेट", "क्लास डेफिनिशन", "स्ट्रक्चर टाइप", "फंक्शन टाइप"],
        "answer_en": "Set of method signatures",
        "answer_hi": "मेथड सिग्नेचर्स का सेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is type embedding in Go?",
        "question_hi": "Go में टाइप एम्बेडिंग क्या है?",
        "options_en": ["Including type without name", "Inheritance", "Copying", "Importing"],
        "options_hi": ["बिना नाम के टाइप को इन्क्लूड करना", "इनहेरिटेंस", "कॉपीइंग", "इम्पोर्टिंग"],
        "answer_en": "Including type without name",
        "answer_hi": "बिना नाम के टाइप को इन्क्लूड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How to handle errors in Go?",
        "question_hi": "Go में एरर्स को कैसे हैंडल करते हैं?",
        "options_en": ["Return error values", "Try-catch", "Panic-recover", "Both A and C"],
        "options_hi": ["एरर वैल्यूज रिटर्न करके", "ट्राई-कैच", "पैनिक-रिकवर", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is panic in Go?",
        "question_hi": "Go में पैनिक क्या है?",
        "options_en": ["Runtime error that stops execution", "Compile error", "Warning", "Log message"],
        "options_hi": ["रनटाइम एरर जो एक्सेक्यूशन रोकता है", "कम्पाइल एरर", "वार्निंग", "लॉग मैसेज"],
        "answer_en": "Runtime error that stops execution",
        "answer_hi": "रनटाइम एरर जो एक्सेक्यूशन रोकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How to recover from panic?",
        "question_hi": "पैनिक से कैसे रिकवर करते हैं?",
        "options_en": ["Using recover() in defer", "Using catch", "Ignoring panic", "Restarting program"],
        "options_hi": ["defer में recover() का उपयोग करके", "catch का उपयोग करके", "पैनिक को इग्नोर करके", "प्रोग्राम रीस्टार्ट करके"],
        "answer_en": "Using recover() in defer",
        "answer_hi": "defer में recover() का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is init() function in Go?",
        "question_hi": "Go में init() फंक्शन क्या है?",
        "options_en": ["Automatically executed before main()", "After main()", "Manual call required", "Not used"],
        "options_hi": ["मेन() से पहले ऑटोमेटिकली एक्सेक्यूट होता है", "मेन() के बाद", "मैनुअल कॉल रिक्वायर्ड", "उपयोग नहीं होता"],
        "answer_en": "Automatically executed before main()",
        "answer_hi": "मेन() से पहले ऑटोमेटिकली एक्सेक्यूट होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the zero value for interface?",
        "question_hi": "इंटरफेस के लिए जीरो वैल्यू क्या है?",
        "options_en": ["nil", "0", "empty interface", "undefined"],
        "options_hi": ["nil", "0", "एम्प्टी इंटरफेस", "अपरिभाषित"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How to implement constructor in Go?",
        "question_hi": "Go में कंस्ट्रक्टर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["NewXxx() function", "constructor keyword", "init() method", "build() function"],
        "options_hi": ["NewXxx() फंक्शन", "constructor कीवर्ड", "init() मेथड", "build() फंक्शन"],
        "answer_en": "NewXxx() function",
        "answer_hi": "NewXxx() फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is sync.Map used for?",
        "question_hi": "sync.Map किस लिए उपयोग किया जाता है?",
        "options_en": ["Concurrent map operations", "Fast maps", "Small maps", "Serialized maps"],
        "options_hi": ["कंकरंट मैप ऑपरेशन्स", "फास्ट मैप्स", "स्मॉल मैप्स", "सीरियलाइज्ड मैप्स"],
        "answer_en": "Concurrent map operations",
        "answer_hi": "कंकरंट मैप ऑपरेशन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of sync.Once?",
        "question_hi": "sync.Once का उद्देश्य क्या है?",
        "options_en": ["Execute function exactly once", "Execute multiple times", "Skip execution", "Delay execution"],
        "options_hi": ["फंक्शन को एक्सेक्टली एक बार एक्सेक्यूट करना", "मल्टीपल टाइम्स एक्सेक्यूट करना", "एक्सेक्यूशन स्किप करना", "एक्सेक्यूशन डिले करना"],
        "answer_en": "Execute function exactly once",
        "answer_hi": "फंक्शन को एक्सेक्टली एक बार एक्सेक्यूट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How to implement timeouts with channels?",
        "question_hi": "चैनल्स के साथ टाइमआउट्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using time.After", "Using sleep", "Using loops", "Using counters"],
        "options_hi": ["time.After का उपयोग करके", "sleep का उपयोग करके", "लूप्स का उपयोग करके", "काउंटर्स का उपयोग करके"],
        "answer_en": "Using time.After",
        "answer_hi": "time.After का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is reflection in Go?",
        "question_hi": "Go में रिफ्लेक्शन क्या है?",
        "options_en": ["Examining types at runtime", "Compile-time checking", "Code generation", "Optimization"],
        "options_hi": ["रनटाइम पर टाइप्स की जांच करना", "कम्पाइल-टाइम चेकिंग", "कोड जनरेशन", "ऑप्टिमाइज़ेशन"],
        "answer_en": "Examining types at runtime",
        "answer_hi": "रनटाइम पर टाइप्स की जांच करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How to create custom errors in Go?",
        "question_hi": "Go में कस्टम एरर्स कैसे बनाते हैं?",
        "options_en": ["Implement Error() method", "Extend error interface", "Use strings", "Use panic"],
        "options_hi": ["Error() मेथड इम्प्लीमेंट करके", "एरर इंटरफेस एक्सटेंड करके", "स्ट्रिंग्स का उपयोग करके", "पैनिक का उपयोग करके"],
        "answer_en": "Implement Error() method",
        "answer_hi": "Error() मेथड इम्प्लीमेंट करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the difference between array and slice?",
        "question_hi": "ऐरे और स्लाइस में क्या अंतर है?",
        "options_en": ["Array fixed size, slice dynamic", "No difference", "Slice fixed, array dynamic", "Both same"],
        "options_hi": ["ऐरे फिक्स्ड साइज, स्लाइस डायनामिक", "कोई अंतर नहीं", "स्लाइस फिक्स्ड, ऐरे डायनामिक", "दोनों समान"],
        "answer_en": "Array fixed size, slice dynamic",
        "answer_hi": "ऐरे फिक्स्ड साइज, स्लाइस डायनामिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How to copy a slice?",
        "question_hi": "स्लाइस को कैसे कॉपी करते हैं?",
        "options_en": ["Using copy() function", "Assignment operator", "Loop and append", "All of above"],
        "options_hi": ["copy() फंक्शन का उपयोग करके", "असाइनमेंट ऑपरेटर", "लूप और ऐपेंड", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of cap() function?",
        "question_hi": "cap() फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get capacity of slice", "Get length", "Copy slice", "Create slice"],
        "options_hi": ["स्लाइस की कैपेसिटी प्राप्त करना", "लेंथ प्राप्त करना", "स्लाइस कॉपी करना", "स्लाइस बनाना"],
        "answer_en": "Get capacity of slice",
        "answer_hi": "स्लाइस की कैपेसिटी प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How to iterate over maps?",
        "question_hi": "मैप्स पर कैसे इटरेट करते हैं?",
        "options_en": ["Using range", "Using for loop with index", "Using while loop", "Using recursion"],
        "options_hi": ["range का उपयोग करके", "इंडेक्स के साथ for लूप का उपयोग करके", "while लूप का उपयोग करके", "रिकर्शन का उपयोग करके"],
        "answer_en": "Using range",
        "answer_hi": "range का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the zero value for map?",
        "question_hi": "मैप के लिए जीरो वैल्यू क्या है?",
        "options_en": ["nil", "empty map", "0", "undefined"],
        "options_hi": ["nil", "खाली मैप", "0", "अपरिभाषित"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How to check if key exists in map?",
        "question_hi": "मैप में की एक्सिस्ट करती है या नहीं कैसे चेक करते हैं?",
        "options_en": ["comma ok idiom", "Using len()", "Using range", "Using if"],
        "options_hi": ["कॉमा ओक इडियम", "len() का उपयोग करके", "range का उपयोग करके", "if का उपयोग करके"],
        "answer_en": "comma ok idiom",
        "answer_hi": "कॉमा ओक इडियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of append()?",
        "question_hi": "append() का उद्देश्य क्या है?",
        "options_en": ["Add elements to slice", "Remove elements", "Sort slice", "Copy slice"],
        "options_hi": ["स्लाइस में एलिमेंट्स ऐड करना", "एलिमेंट्स रिमूव करना", "स्लाइस सॉर्ट करना", "स्लाइस कॉपी करना"],
        "answer_en": "Add elements to slice",
        "answer_hi": "स्लाइस में एलिमेंट्स ऐड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How to delete from map?",
        "question_hi": "मैप से कैसे डिलीट करते हैं?",
        "options_en": ["Using delete() function", "Using remove()", "Setting to nil", "Using clear()"],
        "options_hi": ["delete() फंक्शन का उपयोग करके", "remove() का उपयोग करके", "nil सेट करके", "clear() का उपयोग करके"],
        "answer_en": "Using delete() function",
        "answer_hi": "delete() फंक्शन का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is variadic function?",
        "question_hi": "वेरिएडिक फंक्शन क्या है?",
        "options_en": ["Function with variable number of arguments", "Function with no arguments", "Constant function", "Random function"],
        "options_hi": ["वेरिएबल नंबर ऑफ आर्गुमेंट्स वाला फंक्शन", "बिना आर्गुमेंट्स का फंक्शन", "कॉन्स्टेंट फंक्शन", "रैंडम फंक्शन"],
        "answer_en": "Function with variable number of arguments",
        "answer_hi": "वेरिएबल नंबर ऑफ आर्गुमेंट्स वाला फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How to implement cross-compilation?",
        "question_hi": "क्रॉस-कम्पाइलेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using GOOS and GOARCH", "Special compiler", "Docker containers", "Virtual machines"],
        "options_hi": ["GOOS और GOARCH का उपयोग करके", "स्पेशल कम्पाइलर", "डॉकर कंटेनर्स", "वर्चुअल मशीन्स"],
        "answer_en": "Using GOOS and GOARCH",
        "answer_hi": "GOOS और GOARCH का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of iota?",
        "question_hi": "iota का उद्देश्य क्या है?",
        "options_en": ["Auto increment constants", "Decrement constants", "Random numbers", "Float values"],
        "options_hi": ["ऑटो इंक्रीमेंट कॉन्स्टेंट्स", "डिक्रीमेंट कॉन्स्टेंट्स", "रैंडम नंबर्स", "फ्लोट वैल्यूज"],
        "answer_en": "Auto increment constants",
        "answer_hi": "ऑटो इंक्रीमेंट कॉन्स्टेंट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How to implement string representation?",
        "question_hi": "स्ट्रिंग रिप्रेजेंटेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement String() method", "ToString() method", "String interface", "Format method"],
        "options_hi": ["String() मेथड इम्प्लीमेंट करके", "ToString() मेथड", "स्ट्रिंग इंटरफेस", "फॉर्मेट मेथड"],
        "answer_en": "Implement String() method",
        "answer_hi": "String() मेथड इम्प्लीमेंट करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the difference between == and equals?",
        "question_hi": "== और equals में क्या अंतर है?",
        "options_en": ["Go uses == for comparison", "Go uses equals", "Both same", "No comparison"],
        "options_hi": ["Go कम्पेरिजन के लिए == उपयोग करता है", "Go equals उपयोग करता है", "दोनों समान", "कोई कम्पेरिजन नहीं"],
        "answer_en": "Go uses == for comparison",
        "answer_hi": "Go कम्पेरिजन के लिए == उपयोग करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How to deep copy a struct?",
        "question_hi": "स्ट्रक्चर की डीप कॉपी कैसे बनाते हैं?",
        "options_en": ["Manual field copying", "Assignment operator", "Using copy()", "Using clone()"],
        "options_hi": ["मैनुअल फील्ड कॉपीइंग", "असाइनमेंट ऑपरेटर", "copy() का उपयोग करके", "clone() का उपयोग करके"],
        "answer_en": "Manual field copying",
        "answer_hi": "मैनुअल फील्ड कॉपीइंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of unsafe package?",
        "question_hi": "unsafe पैकेज का उद्देश्य क्या है?",
        "options_en": ["Low-level programming", "Safe operations", "Error handling", "Networking"],
        "options_hi": ["लो-लेवल प्रोग्रामिंग", "सेफ ऑपरेशन्स", "एरर हैंडलिंग", "नेटवर्किंग"],
        "answer_en": "Low-level programming",
        "answer_hi": "लो-लेवल प्रोग्रामिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How to implement sorting?",
        "question_hi": "सॉर्टिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement sort.Interface", "Using sort.Sort", "Both A and B", "Using loops"],
        "options_hi": ["sort.Interface इम्प्लीमेंट करके", "sort.Sort का उपयोग करके", "A और B दोनों", "लूप्स का उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of defer?",
        "question_hi": "defer का उद्देश्य क्या है?",
        "options_en": ["Cleanup operations", "Speed optimization", "Memory allocation", "Error handling"],
        "options_hi": ["क्लीनअप ऑपरेशन्स", "स्पीड ऑप्टिमाइज़ेशन", "मेमोरी अलोकेशन", "एरर हैंडलिंग"],
        "answer_en": "Cleanup operations",
        "answer_hi": "क्लीनअप ऑपरेशन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How to convert string to bytes?",
        "question_hi": "स्ट्रिंग को बाइट्स में कैसे कन्वर्ट करते हैं?",
        "options_en": ["[]byte(string)", "byte(string)", "string.Bytes()", "Bytes(string)"],
        "options_hi": ["[]byte(string)", "byte(string)", "string.Bytes()", "Bytes(string)"],
        "answer_en": "[]byte(string)",
        "answer_hi": "[]byte(string)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the zero value for pointer?",
        "question_hi": "पॉइंटर के लिए जीरो वैल्यू क्या है?",
        "options_en": ["nil", "0", "undefined", "null"],
        "options_hi": ["nil", "0", "अपरिभाषित", "null"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How to implement JSON marshaling?",
        "question_hi": "JSON मार्शलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["json.Marshal()", "json.Encode()", "json.Serialize()", "json.String()"],
        "options_hi": ["json.Marshal()", "json.Encode()", "json.Serialize()", "json.String()"],
        "answer_en": "json.Marshal()",
        "answer_hi": "json.Marshal()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of tags in struct?",
        "question_hi": "स्ट्रक्चर में टैग्स का उद्देश्य क्या है?",
        "options_en": ["Metadata for fields", "Comments", "Variable names", "Function names"],
        "options_hi": ["फील्ड्स के लिए मेटाडेटा", "कमेंट्स", "वेरिएबल नेम्स", "फंक्शन नेम्स"],
        "answer_en": "Metadata for fields",
        "answer_hi": "फील्ड्स के लिए मेटाडेटा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How to implement HTTP server?",
        "question_hi": "HTTP सर्वर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["http.ListenAndServe()", "http.Server()", "http.Start()", "http.Create()"],
        "options_hi": ["http.ListenAndServe()", "http.Server()", "http.Start()", "http.Create()"],
        "answer_en": "http.ListenAndServe()",
        "answer_hi": "http.ListenAndServe()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of sync.Cond?",
        "question_hi": "sync.Cond का उद्देश्य क्या है?",
        "options_en": ["Goroutine synchronization", "Memory management", "Error handling", "Network operations"],
        "options_hi": ["गोरूटीन सिंक्रोनाइज़ेशन", "मेमोरी मैनेजमेंट", "एरर हैंडलिंग", "नेटवर्क ऑपरेशन्स"],
        "answer_en": "Goroutine synchronization",
        "answer_hi": "गोरूटीन सिंक्रोनाइज़ेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How to implement worker pool?",
        "question_hi": "वर्कर पूल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using channels and goroutines", "Using threads", "Using processes", "Using mutex only"],
        "options_hi": ["चैनल्स और गोरूटीन्स का उपयोग करके", "थ्रेड्स का उपयोग करके", "प्रोसेसेज का उपयोग करके", "केवल म्यूटेक्स का उपयोग करके"],
        "answer_en": "Using channels and goroutines",
        "answer_hi": "चैनल्स और गोरूटीन्स का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of atomic operations?",
        "question_hi": "एटॉमिक ऑपरेशन्स का उद्देश्य क्या है?",
        "options_en": ["Lock-free synchronization", "With locks", "Slow operations", "Database operations"],
        "options_hi": ["लॉक-फ्री सिंक्रोनाइज़ेशन", "लॉक्स के साथ", "स्लो ऑपरेशन्स", "डेटाबेस ऑपरेशन्स"],
        "answer_en": "Lock-free synchronization",
        "answer_hi": "लॉक-फ्री सिंक्रोनाइज़ेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How to implement rate limiting?",
        "question_hi": "रेट लिमिटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using tickers and channels", "Using sleep", "Using loops", "Using counters"],
        "options_hi": ["टिकर्स और चैनल्स का उपयोग करके", "sleep का उपयोग करके", "लूप्स का उपयोग करके", "काउंटर्स का उपयोग करके"],
        "answer_en": "Using tickers and channels",
        "answer_hi": "टिकर्स और चैनल्स का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of context.WithTimeout?",
        "question_hi": "context.WithTimeout का उद्देश्य क्या है?",
        "options_en": ["Set deadline for operations", "Set start time", "Log time", "Measure performance"],
        "options_hi": ["ऑपरेशन्स के लिए डेडलाइन सेट करना", "स्टार्ट टाइम सेट करना", "टाइम लॉग करना", "परफॉर्मेंस मापना"],
        "answer_en": "Set deadline for operations",
        "answer_hi": "ऑपरेशन्स के लिए डेडलाइन सेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How to implement middleware?",
        "question_hi": "मिडलवेयर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Function chaining", "Using classes", "Using interfaces", "Using structs"],
        "options_hi": ["फंक्शन चेनिंग", "क्लासेज का उपयोग करके", "इंटरफेस का उपयोग करके", "स्ट्रक्चर्स का उपयोग करके"],
        "answer_en": "Function chaining",
        "answer_hi": "फंक्शन चेनिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of sync.RWMutex?",
        "question_hi": "sync.RWMutex का उद्देश्य क्या है?",
        "options_en": ["Multiple readers, single writer", "Single reader, multiple writers", "No locking", "Only writing"],
        "options_hi": ["मल्टीपल रीडर्स, सिंगल राइटर", "सिंगल रीडर, मल्टीपल राइटर्स", "कोई लॉकिंग नहीं", "केवल राइटिंग"],
        "answer_en": "Multiple readers, single writer",
        "answer_hi": "मल्टीपल रीडर्स, सिंगल राइटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How to implement graceful shutdown?",
        "question_hi": "ग्रेसफुल शटडाउन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using signal handling", "Kill process", "Exit immediately", "Ignore signals"],
        "options_hi": ["सिग्नल हैंडलिंग का उपयोग करके", "प्रोसेस किल करके", "इमीडिएटली एक्जिट करके", "सिग्नल्स इग्नोर करके"],
        "answer_en": "Using signal handling",
        "answer_hi": "सिग्नल हैंडलिंग का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of go.mod?",
        "question_hi": "go.mod का उद्देश्य क्या है?",
        "options_en": ["Module dependency management", "Code compilation", "Testing", "Documentation"],
        "options_hi": ["मॉड्यूल डिपेंडेंसी मैनेजमेंट", "कोड कम्पाइलेशन", "टेस्टिंग", "डॉक्यूमेंटेशन"],
        "answer_en": "Module dependency management",
        "answer_hi": "मॉड्यूल डिपेंडेंसी मैनेजमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How to implement testing?",
        "question_hi": "टेस्टिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Create _test.go files", "Special directory", "Build tags", "All of above"],
        "options_hi": ["_test.go फाइल्स बनाकर", "स्पेशल डायरेक्टरी", "बिल्ड टैग्स", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of benchmark tests?",
        "question_hi": "बेंचमार्क टेस्ट्स का उद्देश्य क्या है?",
        "options_en": ["Performance measurement", "Functionality testing", "Error checking", "Memory usage"],
        "options_hi": ["परफॉर्मेंस माप", "फंक्शनैलिटी टेस्टिंग", "एरर चेकिंग", "मेमोरी यूसेज"],
        "answer_en": "Performance measurement",
        "answer_hi": "परफॉर्मेंस माप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How to implement table-driven tests?",
        "question_hi": "टेबल-ड्रिवेन टेस्ट्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using test cases slice", "Multiple functions", "Separate files", "Using databases"],
        "options_hi": ["टेस्ट केसेस स्लाइस का उपयोग करके", "मल्टीपल फंक्शन्स", "अलग फाइल्स", "डेटाबेस का उपयोग करके"],
        "answer_en": "Using test cases slice",
        "answer_hi": "टेस्ट केसेस स्लाइस का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of example tests?",
        "question_hi": "एग्ज़ाम्पल टेस्ट्स का उद्देश्य क्या है?",
        "options_en": ["Documentation and testing", "Performance", "Error handling", "Memory management"],
        "options_hi": ["डॉक्यूमेंटेशन और टेस्टिंग", "परफॉर्मेंस", "एरर हैंडलिंग", "मेमोरी मैनेजमेंट"],
        "answer_en": "Documentation and testing",
        "answer_hi": "डॉक्यूमेंटेशन और टेस्टिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How to implement fuzzing?",
        "question_hi": "फज़्ज़िंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["go test -fuzz", "Special compiler", "Manual input", "Random generation"],
        "options_hi": ["go test -fuzz", "स्पेशल कम्पाइलर", "मैनुअल इनपुट", "रैंडम जनरेशन"],
        "answer_en": "go test -fuzz",
        "answer_hi": "go test -fuzz",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of cover tool?",
        "question_hi": "cover टूल का उद्देश्य क्या है?",
        "options_en": ["Code coverage analysis", "Performance testing", "Memory profiling", "CPU profiling"],
        "options_hi": ["कोड कवरेज एनालिसिस", "परफॉर्मेंस टेस्टिंग", "मेमोरी प्रोफाइलिंग", "CPU प्रोफाइलिंग"],
        "answer_en": "Code coverage analysis",
        "answer_hi": "कोड कवरेज एनालिसिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How to implement profiling?",
        "question_hi": "प्रोफाइलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using pprof package", "Manual timing", "Log analysis", "External tools"],
        "options_hi": ["pprof पैकेज का उपयोग करके", "मैनुअल टाइमिंग", "लॉग एनालिसिस", "एक्सटर्नल टूल्स"],
        "answer_en": "Using pprof package",
        "answer_hi": "pprof पैकेज का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of go vet?",
        "question_hi": "go vet का उद्देश्य क्या है?",
        "options_en": ["Static code analysis", "Running tests", "Building binaries", "Formatting code"],
        "options_hi": ["स्टैटिक कोड एनालिसिस", "टेस्ट्स रन करना", "बाइनरीज बिल्ड करना", "कोड फॉर्मेटिंग"],
        "answer_en": "Static code analysis",
        "answer_hi": "स्टैटिक कोड एनालिसिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How to implement generics?",
        "question_hi": "जेनरिक्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using type parameters", "Using interface{}", "Using reflection", "Using code generation"],
        "options_hi": ["टाइप पैरामीटर्स का उपयोग करके", "interface{} का उपयोग करके", "रिफ्लेक्शन का उपयोग करके", "कोड जनरेशन का उपयोग करके"],
        "answer_en": "Using type parameters",
        "answer_hi": "टाइप पैरामीटर्स का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of comparable constraint?",
        "question_hi": "comparable कंस्ट्रेंट का उद्देश्य क्या है?",
        "options_en": ["Types that can be compared with == and !=", "Any type", "Numeric types", "String types"],
        "options_hi": ["== और != से कम्पेयर हो सकने वाले टाइप्स", "कोई भी टाइप", "न्यूमेरिक टाइप्स", "स्ट्रिंग टाइप्स"],
        "answer_en": "Types that can be compared with == and !=",
        "answer_hi": "== और != से कम्पेयर हो सकने वाले टाइप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How to implement type constraints?",
        "question_hi": "टाइप कंस्ट्रेंट्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using interface with type set", "Using struct", "Using function", "Using method"],
        "options_hi": ["टाइप सेट के साथ इंटरफेस का उपयोग करके", "स्ट्रक्चर का उपयोग करके", "फंक्शन का उपयोग करके", "मेथड का उपयोग करके"],
        "answer_en": "Using interface with type set",
        "answer_hi": "टाइप सेट के साथ इंटरफेस का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of any type?",
        "question_hi": "any टाइप का उद्देश्य क्या है?",
        "options_en": ["Alias for interface{}", "New type", "String type", "Number type"],
        "options_hi": ["interface{} के लिए एलियास", "नया टाइप", "स्ट्रिंग टाइप", "नंबर टाइप"],
        "answer_en": "Alias for interface{}",
        "answer_hi": "interface{} के लिए एलियास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How to implement method on generic type?",
        "question_hi": "जेनरिक टाइप पर मेथड कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Receiver with type parameters", "Normal receiver", "Using interface", "Using reflection"],
        "options_hi": ["टाइप पैरामीटर्स के साथ रिसीवर", "नॉर्मल रिसीवर", "इंटरफेस का उपयोग करके", "रिफ्लेक्शन का उपयोग करके"],
        "answer_en": "Receiver with type parameters",
        "answer_hi": "टाइप पैरामीटर्स के साथ रिसीवर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of ~ in constraints?",
        "question_hi": "कंस्ट्रेंट्स में ~ का उद्देश्य क्या है?",
        "options_en": ["Include underlying types", "Exclude types", "For pointers", "For interfaces"],
        "options_hi": ["अंडरलाइंग टाइप्स को इन्क्लूड करना", "टाइप्स एक्सक्लूड करना", "पॉइंटर्स के लिए", "इंटरफेस के लिए"],
        "answer_en": "Include underlying types",
        "answer_hi": "अंडरलाइंग टाइप्स को इन्क्लूड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How to implement union constraints?",
        "question_hi": "यूनियन कंस्ट्रेंट्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using | operator", "Using & operator", "Using + operator", "Using - operator"],
        "options_hi": ["| ऑपरेटर का उपयोग करके", "& ऑपरेटर का उपयोग करके", "+ ऑपरेटर का उपयोग करके", "- ऑपरेटर का उपयोग करके"],
        "answer_en": "Using | operator",
        "answer_hi": "| ऑपरेटर का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of go:generate?",
        "question_hi": "go:generate का उद्देश्य क्या है?",
        "options_en": ["Code generation", "Running tests", "Building code", "Formatting code"],
        "options_hi": ["कोड जनरेशन", "टेस्ट्स रन करना", "कोड बिल्ड करना", "कोड फॉर्मेटिंग"],
        "answer_en": "Code generation",
        "answer_hi": "कोड जनरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How to implement plugins?",
        "question_hi": "प्लगइन्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using plugin package", "Using shared libraries", "Using HTTP", "Using RPC"],
        "options_hi": ["प्लगइन पैकेज का उपयोग करके", "शेयर्ड लाइब्रेरीज का उपयोग करके", "HTTP का उपयोग करके", "RPC का उपयोग करके"],
        "answer_en": "Using plugin package",
        "answer_hi": "प्लगइन पैकेज का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of go:embed?",
        "question_hi": "go:embed का उद्देश्य क्या है?",
        "options_en": ["Embed files in binary", "External files", "Network resources", "Database data"],
        "options_hi": ["बाइनरी में फाइल्स एम्बेड करना", "एक्सटर्नल फाइल्स", "नेटवर्क रिसोर्सेज", "डेटाबेस डेटा"],
        "answer_en": "Embed files in binary",
        "answer_hi": "बाइनरी में फाइल्स एम्बेड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How to implement cross-compilation?",
        "question_hi": "क्रॉस-कम्पाइलेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using GOOS and GOARCH", "Special compiler", "Docker containers", "Virtual machines"],
        "options_hi": ["GOOS और GOARCH का उपयोग करके", "स्पेशल कम्पाइलर", "डॉकर कंटेनर्स", "वर्चुअल मशीन्स"],
        "answer_en": "Using GOOS and GOARCH",
        "answer_hi": "GOOS और GOARCH का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of go:build?",
        "question_hi": "go:build का उद्देश्य क्या है?",
        "options_en": ["Build constraints", "Running code", "Testing code", "Formatting code"],
        "options_hi": ["बिल्ड कंस्ट्रेंट्स", "कोड रन करना", "कोड टेस्टिंग", "कोड फॉर्मेटिंग"],
        "answer_en": "Build constraints",
        "answer_hi": "बिल्ड कंस्ट्रेंट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How to implement cgo?",
        "question_hi": "cgo कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Import C package", "Using C++", "Using assembly", "Using FFI"],
        "options_hi": ["C पैकेज इम्पोर्ट करके", "C++ का उपयोग करके", "असेम्बली का उपयोग करके", "FFI का उपयोग करके"],
        "answer_en": "Import C package",
        "answer_hi": "C पैकेज इम्पोर्ट करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of runtime package?",
        "question_hi": "runtime पैकेज का उद्देश्य क्या है?",
        "options_en": ["Interact with Go runtime", "Network operations", "File operations", "Math operations"],
        "options_hi": ["Go रनटाइम के साथ इंटरैक्ट करना", "नेटवर्क ऑपरेशन्स", "फाइल ऑपरेशन्स", "मैथ ऑपरेशन्स"],
        "answer_en": "Interact with Go runtime",
        "answer_hi": "Go रनटाइम के साथ इंटरैक्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How to implement finalizers?",
        "question_hi": "फाइनलाइज़र्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using runtime.SetFinalizer", "Using defer", "Using cleanup", "Using destructors"],
        "options_hi": ["runtime.SetFinalizer का उपयोग करके", "defer का उपयोग करके", "cleanup का उपयोग करके", "डिस्ट्रक्टर्स का उपयोग करके"],
        "answer_en": "Using runtime.SetFinalizer",
        "answer_hi": "runtime.SetFinalizer का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of unsafe.Pointer?",
        "question_hi": "unsafe.Pointer का उद्देश्य क्या है?",
        "options_en": ["Convert between pointer types", "Safe conversions", "Memory allocation", "Garbage collection"],
        "options_hi": ["पॉइंटर टाइप्स के बीच कन्वर्ट करना", "सेफ कन्वर्जन्स", "मेमोरी अलोकेशन", "गार्बेज कलेक्शन"],
        "answer_en": "Convert between pointer types",
        "answer_hi": "पॉइंटर टाइप्स के बीच कन्वर्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How to implement memory pooling?",
        "question_hi": "मेमोरी पूलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sync.Pool", "Manual allocation", "Using GC", "Using stacks"],
        "options_hi": ["sync.Pool का उपयोग करके", "मैनुअल अलोकेशन", "GC का उपयोग करके", "स्टैक्स का उपयोग करके"],
        "answer_en": "Using sync.Pool",
        "answer_hi": "sync.Pool का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of escape analysis?",
        "question_hi": "एस्केप एनालिसिस का उद्देश्य क्या है?",
        "options_en": ["Determine if variable escapes to heap", "Memory leaks", "Performance", "Garbage collection"],
        "options_hi": ["डिटरमाइन करना कि वेरिएबल हीप पर एस्केप होता है या नहीं", "मेमोरी लीक्स", "परफॉर्मेंस", "गार्बेज कलेक्शन"],
        "answer_en": "Determine if variable escapes to heap",
        "answer_hi": "डिटरमाइन करना कि वेरिएबल हीप पर एस्केप होता है या नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How to reduce GC pressure?",
        "question_hi": "GC प्रेशर कैसे कम करते हैं?",
        "options_en": ["Reduce heap allocations", "Increase allocations", "Use more pointers", "Use interfaces"],
        "options_hi": ["हीप अलोकेशन्स कम करके", "अलोकेशन्स बढ़ाकर", "ज्यादा पॉइंटर्स उपयोग करके", "इंटरफेस उपयोग करके"],
        "answer_en": "Reduce heap allocations",
        "answer_hi": "हीप अलोकेशन्स कम करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of GODEBUG?",
        "question_hi": "GODEBUG का उद्देश्य क्या है?",
        "options_en": ["Runtime debugging", "Compile time", "Testing", "Documentation"],
        "options_hi": ["रनटाइम डिबगिंग", "कम्पाइल टाइम", "टेस्टिंग", "डॉक्यूमेंटेशन"],
        "answer_en": "Runtime debugging",
        "answer_hi": "रनटाइम डिबगिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How to implement tracing?",
        "question_hi": "ट्रेसिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using runtime/trace", "Manual logging", "External tools", "Database queries"],
        "options_hi": ["runtime/trace का उपयोग करके", "मैनुअल लॉगिंग", "एक्सटर्नल टूल्स", "डेटाबेस क्वेरीज"],
        "answer_en": "Using runtime/trace",
        "answer_hi": "runtime/trace का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of net/http/pprof?",
        "question_hi": "net/http/pprof का उद्देश्य क्या है?",
        "options_en": ["HTTP profiling endpoint", "HTTP server", "HTTP client", "HTTP middleware"],
        "options_hi": ["HTTP प्रोफाइलिंग एंडपॉइंट", "HTTP सर्वर", "HTTP क्लाइंट", "HTTP मिडलवेयर"],
        "answer_en": "HTTP profiling endpoint",
        "answer_hi": "HTTP प्रोफाइलिंग एंडपॉइंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How to implement custom allocator?",
        "question_hi": "कस्टम अलोकेटर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using unsafe and sync.Pool", "Using make", "Using new", "Using GC"],
        "options_hi": ["unsafe और sync.Pool का उपयोग करके", "make का उपयोग करके", "new का उपयोग करके", "GC का उपयोग करके"],
        "answer_en": "Using unsafe and sync.Pool",
        "answer_hi": "unsafe और sync.Pool का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of reflect package?",
        "question_hi": "reflect पैकेज का उद्देश्य क्या है?",
        "options_en": ["Runtime reflection", "Compile time", "Code generation", "Optimization"],
        "options_hi": ["रनटाइम रिफ्लेक्शन", "कम्पाइल टाइम", "कोड जनरेशन", "ऑप्टिमाइज़ेशन"],
        "answer_en": "Runtime reflection",
        "answer_hi": "रनटाइम रिफ्लेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How to implement dynamic function calls?",
        "question_hi": "डायनामिक फंक्शन कॉल्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using reflect.Value.Call", "Using interfaces", "Using function pointers", "Using channels"],
        "options_hi": ["reflect.Value.Call का उपयोग करके", "इंटरफेस का उपयोग करके", "फंक्शन पॉइंटर्स का उपयोग करके", "चैनल्स का उपयोग करके"],
        "answer_en": "Using reflect.Value.Call",
        "answer_hi": "reflect.Value.Call का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of go:linkname?",
        "question_hi": "go:linkname का उद्देश्य क्या है?",
        "options_en": ["Link to unexported functions", "Export functions", "Import packages", "Create interfaces"],
        "options_hi": ["अनएक्सपोर्टेड फंक्शन्स से लिंक करना", "फंक्शन्स एक्सपोर्ट करना", "पैकेज इम्पोर्ट करना", "इंटरफेस बनाना"],
        "answer_en": "Link to unexported functions",
        "answer_hi": "अनएक्सपोर्टेड फंक्शन्स से लिंक करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How to implement system calls?",
        "question_hi": "सिस्टम कॉल्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using syscall package", "Using os package", "Using runtime", "Using CGO"],
        "options_hi": ["syscall पैकेज का उपयोग करके", "os पैकेज का उपयोग करके", "runtime का उपयोग करके", "CGO का उपयोग करके"],
        "answer_en": "Using syscall package",
        "answer_hi": "syscall पैकेज का उपयोग करके",
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