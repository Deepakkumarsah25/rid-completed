const questions = [
    {
        "num": 1,
        "question_en": "What is the purpose of go mod edit command?",
        "question_hi": "go mod edit कमांड का उद्देश्य क्या है?",
        "options_en": ["Edit go.mod file", "Modify dependencies", "Both A and B", "Create modules"],
        "options_hi": ["go.mod फाइल एडिट करना", "डिपेंडेंसीज मॉडिफाई करना", "A और B दोनों", "मॉड्यूल बनाना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How do you implement feature flags in Go?",
        "question_hi": "Go में फीचर फ्लैग्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Configuration files", "Environment variables", "Database storage", "All of the above"],
        "options_hi": ["कॉन्फिगरेशन फाइल्स", "एनवायरनमेंट वेरिएबल्स", "डेटाबेस स्टोरेज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the purpose of go mod vendor command?",
        "question_hi": "go mod vendor कमांड का उद्देश्य क्या है?",
        "options_en": ["Create vendor directory", "Copy dependencies locally", "Both A and B", "Remove vendor directory"],
        "options_hi": ["वेंडर डायरेक्टरी बनाना", "डिपेंडेंसीज लोकली कॉपी करना", "A और B दोनों", "वेंडर डायरेक्टरी रिमूव करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you implement API documentation in Go?",
        "question_hi": "Go में API डॉक्यूमेंटेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Swagger/OpenAPI", "Go comments", "Third-party tools", "All of the above"],
        "options_hi": ["Swagger/OpenAPI", "Go कमेंट्स", "थर्ड-पार्टी टूल्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of go mod init vs go mod tidy?",
        "question_hi": "go mod init vs go mod tidy का उद्देश्य क्या है?",
        "options_en": ["Init creates, tidy cleans", "Both manage dependencies", "No difference", "Init removes, tidy adds"],
        "options_hi": ["Init बनाता है, tidy साफ करता है", "दोनों डिपेंडेंसीज मैनेज करते हैं", "कोई अंतर नहीं", "Init रिमूव करता है, tidy ऐड करता है"],
        "answer_en": "Init creates, tidy cleans",
        "answer_hi": "Init बनाता है, tidy साफ करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you import a package in Go?",
        "question_hi": "Go में पैकेज कैसे इम्पोर्ट करते हैं?",
        "options_en": ["import \"package-name\"", "require \"package-name\"", "include \"package-name\"", "using \"package-name\""],
        "options_hi": ["import \"package-name\"", "require \"package-name\"", "include \"package-name\"", "using \"package-name\""],
        "answer_en": "import \"package-name\"",
        "answer_hi": "import \"package-name\"",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of range keyword?",
        "question_hi": "range कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Iterate over elements", "Define range of numbers", "Create arrays", "All of the above"],
        "options_hi": ["एलिमेंट्स पर इटरेट करना", "नंबर्स की रेंज डिफाइन करना", "ऐरे बनाना", "उपरोक्त सभी"],
        "answer_en": "Iterate over elements",
        "answer_hi": "एलिमेंट्स पर इटरेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you handle errors in Go?",
        "question_hi": "Go में एरर्स कैसे हैंडल करते हैं?",
        "options_en": ["Return error values", "Try-catch blocks", "Exceptions", "Error events"],
        "options_hi": ["एरर वैल्यूज रिटर्न करके", "ट्राई-कैच ब्लॉक्स", "एक्सेप्शन्स", "एरर इवेंट्स"],
        "answer_en": "Return error values",
        "answer_hi": "एरर वैल्यूज रिटर्न करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the difference between := and = in Go?",
        "question_hi": "Go में := और = में क्या अंतर है?",
        "options_en": [":= declares and assigns, = only assigns", "No difference", "= is for constants", ":= is for functions"],
        "options_hi": [":= डिक्लेयर और असाइन करता है, = केवल असाइन करता है", "कोई अंतर नहीं", "= कॉन्स्टेंट्स के लिए है", ":= फंक्शन्स के लिए है"],
        "answer_en": ":= declares and assigns, = only assigns",
        "answer_hi": ":= डिक्लेयर और असाइन करता है, = केवल असाइन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you write a unit test in Go?",
        "question_hi": "Go में यूनिट टेस्ट कैसे लिखते हैं?",
        "options_en": ["Create function with Test prefix", "Use testing package", "Both A and B", "Use unittest package"],
        "options_hi": ["Test प्रीफिक्स के साथ फंक्शन बनाएं", "testing पैकेज का उपयोग करें", "A और B दोनों", "unittest पैकेज का उपयोग करें"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is a pointer in Go?",
        "question_hi": "Go में पॉइंटर क्या है?",
        "options_en": ["Variable that stores memory address", "Reference to function", "Type of array", "All of the above"],
        "options_hi": ["वेरिएबल जो मेमोरी एड्रेस स्टोर करता है", "फंक्शन का रेफरेंस", "ऐरे का प्रकार", "उपरोक्त सभी"],
        "answer_en": "Variable that stores memory address",
        "answer_hi": "वेरिएबल जो मेमोरी एड्रेस स्टोर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you create a map in Go?",
        "question_hi": "Go में मैप कैसे बनाते हैं?",
        "options_en": ["make(map[keyType]valueType)", "new(map[keyType]valueType)", "map{key: value}", "All of the above"],
        "options_hi": ["make(map[keyType]valueType)", "new(map[keyType]valueType)", "map{key: value}", "उपरोक्त सभी"],
        "answer_en": "make(map[keyType]valueType)",
        "answer_hi": "make(map[keyType]valueType)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of interface in Go?",
        "question_hi": "Go में इंटरफेस का उद्देश्य क्या है?",
        "options_en": ["Define method signatures", "Achieve polymorphism", "Both A and B", "Memory optimization"],
        "options_hi": ["मेथड सिग्नेचर डिफाइन करना", "पॉलीमॉर्फिज्म प्राप्त करना", "A और B दोनों", "मेमोरी ऑप्टिमाइजेशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you convert between types in Go?",
        "question_hi": "Go में टाइप्स के बीच कन्वर्जन कैसे करते हैं?",
        "options_en": ["Type(value)", "value.(type)", "convert(type, value)", "All of the above"],
        "options_hi": ["Type(value)", "value.(type)", "convert(type, value)", "उपरोक्त सभी"],
        "answer_en": "Type(value)",
        "answer_hi": "Type(value)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is a variadic function in Go?",
        "question_hi": "Go में वेरिएडिक फंक्शन क्या है?",
        "options_en": ["Function with variable number of arguments", "Function that returns multiple values", "Anonymous function", "Recursive function"],
        "options_hi": ["वेरिएबल नंबर ऑफ आर्गुमेंट्स वाला फंक्शन", "मल्टीपल वैल्यूज रिटर्न करने वाला फंक्शन", "अनाम फंक्शन", "रिकर्सिव फंक्शन"],
        "answer_en": "Function with variable number of arguments",
        "answer_hi": "वेरिएबल नंबर ऑफ आर्गुमेंट्स वाला फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you handle JSON in Go?",
        "question_hi": "Go में JSON कैसे हैंडल करते हैं?",
        "options_en": ["encoding/json package", "json.Marshal and json.Unmarshal", "Struct tags", "All of the above"],
        "options_hi": ["encoding/json पैकेज", "json.Marshal और json.Unmarshal", "स्ट्रक्ट टैग्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of go.mod file?",
        "question_hi": "go.mod फाइल का उद्देश्य क्या है?",
        "options_en": ["Module dependency management", "Build configuration", "Version control", "All of the above"],
        "options_hi": ["मॉड्यूल डिपेंडेंसी मैनेजमेंट", "बिल्ड कॉन्फिगरेशन", "वर्जन कंट्रोल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you implement inheritance in Go?",
        "question_hi": "Go में इनहेरिटेंस कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using struct embedding", "Using interfaces", "Using composition", "All of the above"],
        "options_hi": ["स्ट्रक्ट एम्बेडिंग का उपयोग करके", "इंटरफेस का उपयोग करके", "कम्पोजिशन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of recover() function?",
        "question_hi": "recover() फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Handle panics", "Catch exceptions", "Memory recovery", "Error logging"],
        "options_hi": ["पैनिक्स हैंडल करना", "एक्सेप्शन्स कैच करना", "मेमोरी रिकवरी", "एरर लॉगिंग"],
        "answer_en": "Handle panics",
        "answer_hi": "पैनिक्स हैंडल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you create an array in Go?",
        "question_hi": "Go में ऐरे कैसे बनाते हैं?",
        "options_en": ["var arr [5]int", "arr := [5]int{}", "array(5)int", "Both A and B"],
        "options_hi": ["var arr [5]int", "arr := [5]int{}", "array(5)int", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the difference between array and slice?",
        "question_hi": "ऐरे और स्लाइस में क्या अंतर है?",
        "options_en": ["Array has fixed size, slice is dynamic", "No difference", "Slice is faster", "Array is reference type"],
        "options_hi": ["ऐरे का साइज फिक्स्ड होता है, स्लाइस डायनामिक होती है", "कोई अंतर नहीं", "स्लाइस तेज है", "ऐरे रेफरेंस टाइप है"],
        "answer_en": "Array has fixed size, slice is dynamic",
        "answer_hi": "ऐरे का साइज फिक्स्ड होता है, स्लाइस डायनामिक होती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you implement polymorphism in Go?",
        "question_hi": "Go में पॉलीमॉर्फिज्म कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using interfaces", "Using structs", "Using functions", "Using packages"],
        "options_hi": ["इंटरफेस का उपयोग करके", "स्ट्रक्ट्स का उपयोग करके", "फंक्शन्स का उपयोग करके", "पैकेज का उपयोग करके"],
        "answer_en": "Using interfaces",
        "answer_hi": "इंटरफेस का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of go routines?",
        "question_hi": "गोरूटीन्स का उद्देश्य क्या है?",
        "options_en": ["Concurrent execution", "Parallel processing", "Lightweight threads", "All of the above"],
        "options_hi": ["कंकरेंट एक्जीक्यूशन", "पैरेलल प्रोसेसिंग", "लाइटवेट थ्रेड्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How do you handle file operations in Go?",
        "question_hi": "Go में फाइल ऑपरेशन्स कैसे हैंडल करते हैं?",
        "options_en": ["os package", "ioutil package", "bufio package", "All of the above"],
        "options_hi": ["os पैकेज", "ioutil पैकेज", "bufio पैकेज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is channel in Go?",
        "question_hi": "Go में चैनल क्या है?",
        "options_en": ["Communication mechanism between goroutines", "Data storage", "Function type", "All of the above"],
        "options_hi": ["गोरूटीन्स के बीच कम्युनिकेशन मैकेनिज्म", "डेटा स्टोरेज", "फंक्शन टाइप", "उपरोक्त सभी"],
        "answer_en": "Communication mechanism between goroutines",
        "answer_hi": "गोरूटीन्स के बीच कम्युनिकेशन मैकेनिज्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How do you create a HTTP server in Go?",
        "question_hi": "Go में HTTP सर्वर कैसे बनाते हैं?",
        "options_en": ["http.ListenAndServe", "net/http package", "Define handlers", "All of the above"],
        "options_hi": ["http.ListenAndServe", "net/http पैकेज", "हैंडलर्स डिफाइन करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of context package?",
        "question_hi": "context पैकेज का उद्देश्य क्या है?",
        "options_en": ["Request-scoped values", "Cancellation signals", "Deadlines", "All of the above"],
        "options_hi": ["रिक्वेस्ट-स्कोप्ड वैल्यूज", "कैंसलेशन सिग्नल्स", "डेडलाइन्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How do you implement middleware in Go?",
        "question_hi": "Go में मिडलवेयर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Function that takes and returns http.Handler", "Using structs", "Using interfaces", "All of the above"],
        "options_hi": ["फंक्शन जो http.Handler लेता है और रिटर्न करता है", "स्ट्रक्ट्स का उपयोग करके", "इंटरफेस का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "Function that takes and returns http.Handler",
        "answer_hi": "फंक्शन जो http.Handler लेता है और रिटर्न करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of sync package?",
        "question_hi": "sync पैकेज का उद्देश्य क्या है?",
        "options_en": ["Synchronization primitives", "Mutexes", "WaitGroups", "All of the above"],
        "options_hi": ["सिंक्रोनाइजेशन प्रिमिटिव्स", "म्यूटेक्स", "वेटग्रुप्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you handle database operations in Go?",
        "question_hi": "Go में डेटाबेस ऑपरेशन्स कैसे हैंडल करते हैं?",
        "options_en": ["database/sql package", "ORM libraries", "Driver packages", "All of the above"],
        "options_hi": ["database/sql पैकेज", "ORM लाइब्रेरी", "ड्राइवर पैकेज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of go test command?",
        "question_hi": "go test कमांड का उद्देश्य क्या है?",
        "options_en": ["Run tests", "Benchmark code", "Show test coverage", "All of the above"],
        "options_hi": ["टेस्ट्स रन करना", "कोड बेंचमार्क करना", "टेस्ट कवरेज दिखाना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you implement logging in Go?",
        "question_hi": "Go में लॉगिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["log package", "Third-party libraries", "Custom logging", "All of the above"],
        "options_hi": ["log पैकेज", "थर्ड-पार्टी लाइब्रेरी", "कस्टम लॉगिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of go vet command?",
        "question_hi": "go vet कमांड का उद्देश्य क्या है?",
        "options_en": ["Static code analysis", "Find suspicious constructs", "Code validation", "All of the above"],
        "options_hi": ["स्टेटिक कोड एनालिसिस", "सस्पीशियस कंस्ट्रक्ट्स ढूंढना", "कोड वैलिडेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you handle configuration in Go?",
        "question_hi": "Go में कॉन्फिगरेशन कैसे हैंडल करते हैं?",
        "options_en": ["Environment variables", "Config files", "Flags", "All of the above"],
        "options_hi": ["एनवायरनमेंट वेरिएबल्स", "कॉन्फिग फाइल्स", "फ्लैग्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of go fmt command?",
        "question_hi": "go fmt कमांड का उद्देश्य क्या है?",
        "options_en": ["Format Go code", "Standardize code style", "Both A and B", "Compile code"],
        "options_hi": ["Go कोड फॉर्मेट करना", "कोड स्टाइल स्टैंडर्डाइज करना", "A और B दोनों", "कोड कम्पाइल करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do you implement caching in Go?",
        "question_hi": "Go में कैशिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using maps", "sync.Map", "Third-party libraries", "All of the above"],
        "options_hi": ["मैप्स का उपयोग करके", "sync.Map", "थर्ड-पार्टी लाइब्रेरी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of go run command?",
        "question_hi": "go run कमांड का उद्देश्य क्या है?",
        "options_en": ["Compile and run Go program", "Only compile", "Only run", "Debug program"],
        "options_hi": ["Go प्रोग्राम कम्पाइल और रन करना", "केवल कम्पाइल", "केवल रन", "प्रोग्राम डीबग करना"],
        "answer_en": "Compile and run Go program",
        "answer_hi": "Go प्रोग्राम कम्पाइल और रन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How do you handle signals in Go?",
        "question_hi": "Go में सिग्नल्स कैसे हैंडल करते हैं?",
        "options_en": ["os/signal package", "signal.Notify", "Context cancellation", "All of the above"],
        "options_hi": ["os/signal पैकेज", "signal.Notify", "कॉन्टेक्स्ट कैंसलेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of go build command?",
        "question_hi": "go build कमांड का उद्देश्य क्या है?",
        "options_en": ["Compile Go packages", "Create executable", "Both A and B", "Run tests"],
        "options_hi": ["Go पैकेज कम्पाइल करना", "एक्जीक्यूटेबल बनाना", "A और B दोनों", "टेस्ट्स रन करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How do you implement rate limiting in Go?",
        "question_hi": "Go में रेट लिमिटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using tickers", "Token bucket algorithm", "Third-party libraries", "All of the above"],
        "options_hi": ["टिकर्स का उपयोग करके", "टोकन बकेट अल्गोरिदम", "थर्ड-पार्टी लाइब्रेरी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of go clean command?",
        "question_hi": "go clean कमांड का उद्देश्य क्या है?",
        "options_en": ["Remove object files", "Clean build cache", "Both A and B", "Update dependencies"],
        "options_hi": ["ऑब्जेक्ट फाइल्स रिमूव करना", "बिल्ड कैश क्लीन करना", "A और B दोनों", "डिपेंडेंसीज अपडेट करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How do you implement WebSocket client in Go?",
        "question_hi": "Go में WebSocket क्लाइंट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["gorilla/websocket", "nhooyr/websocket", "Standard library", "All of the above"],
        "options_hi": ["gorilla/websocket", "nhooyr/websocket", "स्टैंडर्ड लाइब्रेरी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of go doc command?",
        "question_hi": "go doc कमांड का उद्देश्य क्या है?",
        "options_en": ["Show documentation", "Generate docs", "Both A and B", "Format code"],
        "options_hi": ["डॉक्यूमेंटेशन दिखाना", "डॉक्स जेनरेट करना", "A और B दोनों", "कोड फॉर्मेट करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How do you implement gRPC server in Go?",
        "question_hi": "Go में gRPC सर्वर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["google.golang.org/grpc", "Protocol buffers", "Code generation", "All of the above"],
        "options_hi": ["google.golang.org/grpc", "प्रोटोकॉल बफर", "कोड जेनरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of go list command?",
        "question_hi": "go list कमांड का उद्देश्य क्या है?",
        "options_en": ["List packages", "Show package information", "Both A and B", "Install packages"],
        "options_hi": ["पैकेज लिस्ट करना", "पैकेज इनफॉर्मेशन दिखाना", "A और B दोनों", "पैकेज इंस्टॉल करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How do you implement GraphQL server in Go?",
        "question_hi": "Go में GraphQL सर्वर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["graphql-go/graphql", "99designs/gqlgen", "Custom implementation", "All of the above"],
        "options_hi": ["graphql-go/graphql", "99designs/gqlgen", "कस्टम इम्प्लीमेंटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of go version command?",
        "question_hi": "go version कमांड का उद्देश्य क्या है?",
        "options_en": ["Show Go version", "Check compatibility", "Both A and B", "Update Go"],
        "options_hi": ["Go वर्जन दिखाना", "कंपैटिबिलिटी चेक करना", "A और B दोनों", "Go अपडेट करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you implement OAuth2 client in Go?",
        "question_hi": "Go में OAuth2 क्लाइंट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["golang.org/x/oauth2", "Third-party libraries", "Custom implementation", "All of the above"],
        "options_hi": ["golang.org/x/oauth2", "थर्ड-पार्टी लाइब्रेरी", "कस्टम इम्प्लीमेंटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of go fix command?",
        "question_hi": "go fix कमांड का उद्देश्य क्या है?",
        "options_en": ["Update code to new API", "Fix deprecated usage", "Both A and B", "Format code"],
        "options_hi": ["कोड को नए API में अपडेट करना", "डिप्रेकेटेड यूसेज फिक्स करना", "A और B दोनों", "कोड फॉर्मेट करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you implement JWT authentication in Go?",
        "question_hi": "Go में JWT ऑथेंटिकेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["golang-jwt/jwt", "Custom implementation", "Middleware", "All of the above"],
        "options_hi": ["golang-jwt/jwt", "कस्टम इम्प्लीमेंटेशन", "मिडलवेयर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of go get command?",
        "question_hi": "go get कमांड का उद्देश्य क्या है?",
        "options_en": ["Download and install packages", "Add dependencies", "Both A and B", "Remove packages"],
        "options_hi": ["पैकेज डाउनलोड और इंस्टॉल करना", "डिपेंडेंसीज ऐड करना", "A और B दोनों", "पैकेज रिमूव करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How do you implement CORS in Go?",
        "question_hi": "Go में CORS कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Custom middleware", "rs/cors library", "Handler wrappers", "All of the above"],
        "options_hi": ["कस्टम मिडलवेयर", "rs/cors लाइब्रेरी", "हैंडलर रैपर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of go work command?",
        "question_hi": "go work कमांड का उद्देश्य क्या है?",
        "options_en": ["Multi-module workspaces", "Development environments", "Both A and B", "Single module management"],
        "options_hi": ["मल्टी-मॉड्यूल वर्कस्पेस", "डेवलपमेंट एनवायरनमेंट", "A और B दोनों", "सिंगल मॉड्यूल मैनेजमेंट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you implement database migrations in Go?",
        "question_hi": "Go में डेटाबेस माइग्रेशन्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["golang-migrate/migrate", "Custom scripts", "ORM tools", "All of the above"],
        "options_hi": ["golang-migrate/migrate", "कस्टम स्क्रिप्ट्स", "ORM टूल्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of go generate command?",
        "question_hi": "go generate कमांड का उद्देश्य क्या है?",
        "options_en": ["Run code generators", "Generate code", "Automation", "All of the above"],
        "options_hi": ["कोड जेनरेटर रन करना", "कोड जेनरेट करना", "ऑटोमेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you implement message queues in Go?",
        "question_hi": "Go में मैसेज क्यू कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using channels", "Third-party libraries", "External systems", "All of the above"],
        "options_hi": ["चैनल्स का उपयोग करके", "थर्ड-पार्टी लाइब्रेरी", "एक्सटर्नल सिस्टम", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of go env command?",
        "question_hi": "go env कमांड का उद्देश्य क्या है?",
        "options_en": ["Show Go environment", "Set environment variables", "Both A and B", "Run programs"],
        "options_hi": ["Go एनवायरनमेंट दिखाना", "एनवायरनमेंट वेरिएबल्स सेट करना", "A और B दोनों", "प्रोग्राम रन करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How do you implement file upload in Go?",
        "question_hi": "Go में फाइल अपलोड कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["multipart forms", "io.Copy", "Custom handlers", "All of the above"],
        "options_hi": ["मल्टीपार्ट फॉर्म", "io.Copy", "कस्टम हैंडलर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of go mod init command?",
        "question_hi": "go mod init कमांड का उद्देश्य क्या है?",
        "options_en": ["Initialize new module", "Create go.mod file", "Both A and B", "Install dependencies"],
        "options_hi": ["नया मॉड्यूल इनिशियलाइज करना", "go.mod फाइल बनाना", "A और B दोनों", "डिपेंडेंसीज इंस्टॉल करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you implement email sending in Go?",
        "question_hi": "Go में ईमेल सेंडिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["net/smtp", "Third-party libraries", "SMTP servers", "All of the above"],
        "options_hi": ["net/smtp", "थर्ड-पार्टी लाइब्रेरी", "SMTP सर्वर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of go mod download command?",
        "question_hi": "go mod download कमांड का उद्देश्य क्या है?",
        "options_en": ["Download dependencies", "Update go.sum", "Both A and B", "Remove dependencies"],
        "options_hi": ["डिपेंडेंसीज डाउनलोड करना", "go.sum अपडेट करना", "A और B दोनों", "डिपेंडेंसीज रिमूव करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How do you implement caching strategies in Go?",
        "question_hi": "Go में कैशिंग स्ट्रैटेजी कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["In-memory cache", "Redis", "Distributed caching", "All of the above"],
        "options_hi": ["इन-मेमोरी कैश", "Redis", "डिस्ट्रीब्यूटेड कैशिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of go mod verify command?",
        "question_hi": "go mod verify कमांड का उद्देश्य क्या है?",
        "options_en": ["Verify dependencies", "Check integrity", "Both A and B", "Install packages"],
        "options_hi": ["डिपेंडेंसीज वेरीफाई करना", "इंटिग्रिटी चेक करना", "A और B दोनों", "पैकेज इंस्टॉल करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How do you implement background jobs in Go?",
        "question_hi": "Go में बैकग्राउंड जॉब्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Goroutines", "Workers pools", "Cron jobs", "All of the above"],
        "options_hi": ["गोरूटीन्स", "वर्कर पूल", "क्रॉन जॉब्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of go mod tidy command?",
        "question_hi": "go mod tidy कमांड का उद्देश्य क्या है?",
        "options_en": ["Clean up dependencies", "Add missing modules", "Remove unused modules", "All of the above"],
        "options_hi": ["डिपेंडेंसीज क्लीन अप करना", "मिसिंग मॉड्यूल ऐड करना", "अनयूज्ड मॉड्यूल रिमूव करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How do you implement health checks in Go?",
        "question_hi": "Go में हेल्थ चेक्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["/health endpoint", "Database checks", "External service checks", "All of the above"],
        "options_hi": ["/health एंडपॉइंट", "डेटाबेस चेक्स", "एक्सटर्नल सर्विस चेक्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of go mod graph command?",
        "question_hi": "go mod graph कमांड का उद्देश्य क्या है?",
        "options_en": ["Show module dependency graph", "Visualize dependencies", "Both A and B", "Update dependencies"],
        "options_hi": ["मॉड्यूल डिपेंडेंसी ग्राफ दिखाना", "डिपेंडेंसीज विजुअलाइज करना", "A और B दोनों", "डिपेंडेंसीज अपडेट करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you implement API versioning in Go?",
        "question_hi": "Go में API वर्जनिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["URL paths", "Headers", "Query parameters", "All of the above"],
        "options_hi": ["URL पाथ", "हेडर", "क्वेरी पैरामीटर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of go mod why command?",
        "question_hi": "go mod why कमांड का उद्देश्य क्या है?",
        "options_en": ["Explain package imports", "Show dependency reasons", "Both A and B", "Remove dependencies"],
        "options_hi": ["पैकेज इम्पोर्ट्स एक्सप्लेन करना", "डिपेंडेंसी रीजन्स दिखाना", "A और B दोनों", "डिपेंडेंसीज रिमूव करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How do you implement distributed tracing in Go?",
        "question_hi": "Go में डिस्ट्रीब्यूटेड ट्रेसिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["OpenTelemetry", "Jaeger", "Zipkin", "All of the above"],
        "options_hi": ["OpenTelemetry", "Jaeger", "Zipkin", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the zero value of an interface in Go?",
        "question_hi": "Go में इंटरफेस का जीरो वैल्यू क्या है?",
        "options_en": ["nil", "0", "empty interface", "undefined"],
        "options_hi": ["nil", "0", "खाली इंटरफेस", "अपरिभाषित"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How do you declare a constant in Go?",
        "question_hi": "Go में कॉन्स्टेंट कैसे डिक्लेयर करते हैं?",
        "options_en": ["const x = 5", "var const x = 5", "let x = 5", "constant x = 5"],
        "options_hi": ["const x = 5", "var const x = 5", "let x = 5", "constant x = 5"],
        "answer_en": "const x = 5",
        "answer_hi": "const x = 5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of defer keyword in Go?",
        "question_hi": "Go में defer कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Delay function execution", "Error handling", "Memory management", "All of the above"],
        "options_hi": ["फंक्शन एक्जीक्यूशन डिले करना", "एरर हैंडलिंग", "मेमोरी मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "Delay function execution",
        "answer_hi": "फंक्शन एक्जीक्यूशन डिले करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How do you create a new goroutine?",
        "question_hi": "नई गोरूटीन कैसे बनाते हैं?",
        "options_en": ["go functionName()", "goroutine functionName()", "async functionName()", "spawn functionName()"],
        "options_hi": ["go functionName()", "goroutine functionName()", "async functionName()", "spawn functionName()"],
        "answer_en": "go functionName()",
        "answer_hi": "go functionName()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is a struct in Go?",
        "question_hi": "Go में स्ट्रक्ट क्या है?",
        "options_en": ["Collection of fields", "A class", "A function", "A package"],
        "options_hi": ["फील्ड्स का कलेक्शन", "एक क्लास", "एक फंक्शन", "एक पैकेज"],
        "answer_en": "Collection of fields",
        "answer_hi": "फील्ड्स का कलेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How do you implement graceful shutdown in Go?",
        "question_hi": "Go में ग्रेसफुल शटडाउन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Signal handling", "Context cancellation", "Resource cleanup", "All of the above"],
        "options_hi": ["सिग्नल हैंडलिंग", "कॉन्टेक्स्ट कैंसलेशन", "रिसोर्स क्लीनअप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the difference between go get and go install?",
        "question_hi": "go get और go install में क्या अंतर है?",
        "options_en": ["get downloads, install builds binaries", "No difference", "get builds, install downloads", "Both are same"],
        "options_hi": ["get डाउनलोड करता है, install बाइनरी बनाता है", "कोई अंतर नहीं", "get बनाता है, install डाउनलोड करता है", "दोनों समान हैं"],
        "answer_en": "get downloads, install builds binaries",
        "answer_hi": "get डाउनलोड करता है, install बाइनरी बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How do you implement data validation in Go?",
        "question_hi": "Go में डेटा वैलिडेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Struct tags", "Custom validation", "Third-party libraries", "All of the above"],
        "options_hi": ["स्ट्रक्ट टैग्स", "कस्टम वैलिडेशन", "थर्ड-पार्टी लाइब्रेरी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of go mod download vs go get?",
        "question_hi": "go mod download vs go get का उद्देश्य क्या है?",
        "options_en": ["download gets dependencies, get installs packages", "No difference", "Both are same", "get downloads, download installs"],
        "options_hi": ["download डिपेंडेंसीज लाता है, get पैकेज इंस्टॉल करता है", "कोई अंतर नहीं", "दोनों समान हैं", "get डाउनलोड करता है, download इंस्टॉल करता है"],
        "answer_en": "download gets dependencies, get installs packages",
        "answer_hi": "download डिपेंडेंसीज लाता है, get पैकेज इंस्टॉल करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How do you implement monitoring in Go?",
        "question_hi": "Go में मॉनिटरिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Prometheus metrics", "Health checks", "Logging", "All of the above"],
        "options_hi": ["Prometheus मेट्रिक्स", "हेल्थ चेक्स", "लॉगिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the difference between buffer and unbuffered channels?",
        "question_hi": "बफर्ड और अनबफर्ड चैनल में क्या अंतर है?",
        "options_en": ["Buffered has capacity, unbuffered blocks immediately", "No difference", "Unbuffered has capacity", "Both are same"],
        "options_hi": ["बफर्ड की कैपेसिटी होती है, अनबफर्ड तुरंत ब्लॉक करता है", "कोई अंतर नहीं", "अनबफर्ड की कैपेसिटी होती है", "दोनों समान हैं"],
        "answer_en": "Buffered has capacity, unbuffered blocks immediately",
        "answer_hi": "बफर्ड की कैपेसिटी होती है, अनबफर्ड तुरंत ब्लॉक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How do you implement dependency injection in Go?",
        "question_hi": "Go में डिपेंडेंसी इंजेक्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Constructor injection", "Interface-based", "Third-party frameworks", "All of the above"],
        "options_hi": ["कंस्ट्रक्टर इंजेक्शन", "इंटरफेस-बेस्ड", "थर्ड-पार्टी फ्रेमवर्क", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of go mod why vs go mod graph?",
        "question_hi": "go mod why vs go mod graph का उद्देश्य क्या है?",
        "options_en": ["why shows reasons, graph shows structure", "No difference", "Both show same information", "graph shows reasons, why shows structure"],
        "options_hi": ["why कारण दिखाता है, graph संरचना दिखाता है", "कोई अंतर नहीं", "दोनों समान जानकारी दिखाते हैं", "graph कारण दिखाता है, why संरचना दिखाता है"],
        "answer_en": "why shows reasons, graph shows structure",
        "answer_hi": "why कारण दिखाता है, graph संरचना दिखाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How do you implement circuit breaker pattern in Go?",
        "question_hi": "Go में सर्किट ब्रेकर पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["State machine", "Counters and timers", "Third-party libraries", "All of the above"],
        "options_hi": ["स्टेट मशीन", "काउंटर और टाइमर", "थर्ड-पार्टी लाइब्रेरी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the difference between methods and functions in Go?",
        "question_hi": "Go में मेथड्स और फंक्शन्स में क्या अंतर है?",
        "options_en": ["Methods have receivers, functions don't", "No difference", "Functions have receivers", "Both are same"],
        "options_hi": ["मेथड्स में रिसीवर होते हैं, फंक्शन्स में नहीं", "कोई अंतर नहीं", "फंक्शन्स में रिसीवर होते हैं", "दोनों समान हैं"],
        "answer_en": "Methods have receivers, functions don't",
        "answer_hi": "मेथड्स में रिसीवर होते हैं, फंक्शन्स में नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you implement API rate limiting in Go?",
        "question_hi": "Go में API रेट लिमिटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Token bucket", "Fixed window", "Sliding window", "All of the above"],
        "options_hi": ["टोकन बकेट", "फिक्स्ड विंडो", "स्लाइडिंग विंडो", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of go mod verify vs go mod tidy?",
        "question_hi": "go mod verify vs go mod tidy का उद्देश्य क्या है?",
        "options_en": ["verify checks integrity, tidy cleans dependencies", "No difference", "Both do same thing", "tidy checks integrity, verify cleans"],
        "options_hi": ["verify इंटिग्रिटी चेक करता है, tidy डिपेंडेंसीज साफ करता है", "कोई अंतर नहीं", "दोनों एक ही काम करते हैं", "tidy इंटिग्रिटी चेक करता है, verify साफ करता है"],
        "answer_en": "verify checks integrity, tidy cleans dependencies",
        "answer_hi": "verify इंटिग्रिटी चेक करता है, tidy डिपेंडेंसीज साफ करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you implement service discovery in Go?",
        "question_hi": "Go में सर्विस डिस्कवरी कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Consul", "etcd", "Custom registry", "All of the above"],
        "options_hi": ["Consul", "etcd", "कस्टम रजिस्ट्री", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the difference between sync.Mutex and sync.RWMutex?",
        "question_hi": "sync.Mutex और sync.RWMutex में क्या अंतर है?",
        "options_en": ["RWMutex allows multiple readers", "No difference", "Mutex allows multiple readers", "Both are same"],
        "options_hi": ["RWMutex मल्टीपल रीडर्स की अनुमति देता है", "कोई अंतर नहीं", "Mutex मल्टीपल रीडर्स की अनुमति देता है", "दोनों समान हैं"],
        "answer_en": "RWMutex allows multiple readers",
        "answer_hi": "RWMutex मल्टीपल रीडर्स की अनुमति देता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How do you implement load balancing in Go?",
        "question_hi": "Go में लोड बैलेंसिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Round robin", "Least connections", "Third-party tools", "All of the above"],
        "options_hi": ["राउंड रॉबिन", "लीस्ट कनेक्शन", "थर्ड-पार्टी टूल्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of go mod edit vs go mod init?",
        "question_hi": "go mod edit vs go mod init का उद्देश्य क्या है?",
        "options_en": ["init creates, edit modifies", "No difference", "Both create modules", "edit creates, init modifies"],
        "options_hi": ["init बनाता है, edit मॉडिफाई करता है", "कोई अंतर नहीं", "दोनों मॉड्यूल बनाते हैं", "edit बनाता है, init मॉडिफाई करता है"],
        "answer_en": "init creates, edit modifies",
        "answer_hi": "init बनाता है, edit मॉडिफाई करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you implement distributed locks in Go?",
        "question_hi": "Go में डिस्ट्रीब्यूटेड लॉक्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Redis", "etcd", "Consul", "All of the above"],
        "options_hi": ["Redis", "etcd", "Consul", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the difference between make and new in Go?",
        "question_hi": "Go में make और new में क्या अंतर है?",
        "options_en": ["make initializes slices/maps/channels, new allocates memory", "No difference", "Both are same", "new initializes, make allocates"],
        "options_hi": ["make स्लाइस/मैप/चैनल इनिशियलाइज करता है, new मेमोरी अलोकेट करता है", "कोई अंतर नहीं", "दोनों समान हैं", "new इनिशियलाइज करता है, make अलोकेट करता है"],
        "answer_en": "make initializes slices/maps/channels, new allocates memory",
        "answer_hi": "make स्लाइस/मैप/चैनल इनिशियलाइज करता है, new मेमोरी अलोकेट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you implement API gateway in Go?",
        "question_hi": "Go में API गेटवे कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Reverse proxy", "Routing", "Middleware", "All of the above"],
        "options_hi": ["रिवर्स प्रॉक्सी", "रूटिंग", "मिडलवेयर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of go mod vendor vs go mod download?",
        "question_hi": "go mod vendor vs go mod download का उद्देश्य क्या है?",
        "options_en": ["vendor creates local copy, download gets dependencies", "No difference", "Both do same thing", "download creates local copy, vendor gets dependencies"],
        "options_hi": ["vendor लोकल कॉपी बनाता है, download डिपेंडेंसीज लाता है", "कोई अंतर नहीं", "दोनों एक ही काम करते हैं", "download लोकल कॉपी बनाता है, vendor डिपेंडेंसीज लाता है"],
        "answer_en": "vendor creates local copy, download gets dependencies",
        "answer_hi": "vendor लोकल कॉपी बनाता है, download डिपेंडेंसीज लाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How do you implement event sourcing in Go?",
        "question_hi": "Go में इवेंट सोर्सिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Event stores", "Projections", "CQRS pattern", "All of the above"],
        "options_hi": ["इवेंट स्टोर", "प्रोजेक्शन", "CQRS पैटर्न", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the difference between context.WithCancel and context.WithTimeout?",
        "question_hi": "context.WithCancel और context.WithTimeout में क्या अंतर है?",
        "options_en": ["WithCancel manual cancellation, WithTimeout automatic after duration", "No difference", "Both are same", "WithTimeout manual, WithCancel automatic"],
        "options_hi": ["WithCancel मैनुअल कैंसलेशन, WithTimeout ड्यूरेशन के बाद ऑटोमैटिक", "कोई अंतर नहीं", "दोनों समान हैं", "WithTimeout मैनुअल, WithCancel ऑटोमैटिक"],
        "answer_en": "WithCancel manual cancellation, WithTimeout automatic after duration",
        "answer_hi": "WithCancel मैनुअल कैंसलेशन, WithTimeout ड्यूरेशन के बाद ऑटोमैटिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do you implement database connection pooling in Go?",
        "question_hi": "Go में डेटाबेस कनेक्शन पूलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["database/sql", "Third-party libraries", "Custom implementation", "All of the above"],
        "options_hi": ["database/sql", "थर्ड-पार्टी लाइब्रेरी", "कस्टम इम्प्लीमेंटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of go mod graph vs go list?",
        "question_hi": "go mod graph vs go list का उद्देश्य क्या है?",
        "options_en": ["graph shows dependencies, list shows packages", "No difference", "Both show same information", "list shows dependencies, graph shows packages"],
        "options_hi": ["graph डिपेंडेंसीज दिखाता है, list पैकेज दिखाता है", "कोई अंतर नहीं", "दोनों समान जानकारी दिखाते हैं", "list डिपेंडेंसीज दिखाता है, graph पैकेज दिखाता है"],
        "answer_en": "graph shows dependencies, list shows packages",
        "answer_hi": "graph डिपेंडेंसीज दिखाता है, list पैकेज दिखाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How do you implement microservices in Go?",
        "question_hi": "Go में माइक्रोसर्विसेज कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["gRPC", "REST APIs", "Message queues", "All of the above"],
        "options_hi": ["gRPC", "REST APIs", "मैसेज क्यू", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
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