const questions = [
   {
        "num": 1,
        "question_en": "Purpose of 'go clean'?",
        "question_hi": "'go clean' का उद्देश्य क्या है?",
        "options_en": ["Remove object files", "Clean cache", "Remove binaries", "All of the above"],
        "options_hi": ["ऑब्जेक्ट फाइल्स रिमूव करना", "कैश क्लीन करना", "बाइनरी रिमूव करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How do you declare a variable in Go?",
        "question_hi": "Go में वेरिएबल कैसे डिक्लेयर करते हैं?",
        "options_en": ["var x int", "x := 10", "Both A and B", "None of the above"],
        "options_hi": ["var x int", "x := 10", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the zero value of an integer in Go?",
        "question_hi": "Go में इंटीजर का जीरो वैल्यू क्या है?",
        "options_en": ["0", "nil", "false", "-1"],
        "options_hi": ["0", "nil", "false", "-1"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which keyword is used to define a constant?",
        "question_hi": "कॉन्स्टेंट डिफाइन करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["const", "var", "let", "constant"],
        "options_hi": ["const", "var", "let", "constant"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What does the 'defer' keyword do?",
        "question_hi": "'defer' कीवर्ड क्या करता है?",
        "options_en": ["Delays function execution", "Stops execution", "Defines function", "Imports package"],
        "options_hi": ["फंक्शन एक्जीक्यूशन डिले करता है", "एक्जीक्यूशन रोकता है", "फंक्शन डिफाइन करता है", "पैकेज इम्पोर्ट करता है"],
        "answer_en": "Delays function execution",
        "answer_hi": "फंक्शन एक्जीक्यूशन डिले करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you create a slice?",
        "question_hi": "स्लाइस कैसे बनाते हैं?",
        "options_en": ["make([]int, 5)", "[]int{1,2,3}", "Both A and B", "None of the above"],
        "options_hi": ["make([]int, 5)", "[]int{1,2,3}", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of channels?",
        "question_hi": "चैनल्स का उद्देश्य क्या है?",
        "options_en": ["Communication between goroutines", "File handling", "Error handling", "Memory allocation"],
        "options_hi": ["गोरूटीन्स के बीच कम्युनिकेशन", "फाइल हैंडलिंग", "एरर हैंडलिंग", "मेमोरी अलोकेशन"],
        "answer_en": "Communication between goroutines",
        "answer_hi": "गोरूटीन्स के बीच कम्युनिकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you import a package?",
        "question_hi": "पैकेज कैसे इम्पोर्ट करते हैं?",
        "options_en": ["import \"fmt\"", "include \"fmt\"", "require \"fmt\"", "using \"fmt\""],
        "options_hi": ["import \"fmt\"", "include \"fmt\"", "require \"fmt\"", "using \"fmt\""],
        "answer_en": "import \"fmt\"",
        "answer_hi": "import \"fmt\"",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is a goroutine?",
        "question_hi": "गोरूटीन क्या है?",
        "options_en": ["Lightweight thread", "Function", "Variable", "Package"],
        "options_hi": ["लाइटवेट थ्रेड", "फंक्शन", "वेरिएबल", "पैकेज"],
        "answer_en": "Lightweight thread",
        "answer_hi": "लाइटवेट थ्रेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you check variable type?",
        "question_hi": "वेरिएबल टाइप कैसे चेक करते हैं?",
        "options_en": ["Using reflect package", "typeOf operator", "typeof function", "All of the above"],
        "options_hi": ["reflect पैकेज का उपयोग करके", "typeOf ऑपरेटर", "typeof फंक्शन", "उपरोक्त सभी"],
        "answer_en": "Using reflect package",
        "answer_hi": "reflect पैकेज का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of interface?",
        "question_hi": "इंटरफेस का उद्देश्य क्या है?",
        "options_en": ["Define method signatures", "Inheritance", "Memory management", "Error handling"],
        "options_hi": ["मेथड सिग्नेचर डिफाइन करना", "इनहेरिटेंस", "मेमोरी मैनेजमेंट", "एरर हैंडलिंग"],
        "answer_en": "Define method signatures",
        "answer_hi": "मेथड सिग्नेचर डिफाइन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you handle errors?",
        "question_hi": "एरर कैसे हैंडल करते हैं?",
        "options_en": ["Return error from functions", "Using try-catch", "Using panic-recover", "Both A and C"],
        "options_hi": ["फंक्शन से एरर रिटर्न करके", "try-catch का उपयोग करके", "panic-recover का उपयोग करके", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is a struct?",
        "question_hi": "स्ट्रक्ट क्या है?",
        "options_en": ["Collection of fields", "Function", "Package", "Variable"],
        "options_hi": ["फील्ड्स का कलेक्शन", "फंक्शन", "पैकेज", "वेरिएबल"],
        "answer_en": "Collection of fields",
        "answer_hi": "फील्ड्स का कलेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you iterate over a slice?",
        "question_hi": "स्लाइस पर कैसे इटरेट करते हैं?",
        "options_en": ["Using for loop with range", "Using while loop", "Using foreach", "Using iterator"],
        "options_hi": ["for लूप के साथ range का उपयोग करके", "while लूप का उपयोग करके", "foreach का उपयोग करके", "iterator का उपयोग करके"],
        "answer_en": "Using for loop with range",
        "answer_hi": "for लूप के साथ range का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of 'go fmt'?",
        "question_hi": "'go fmt' का उद्देश्य क्या है?",
        "options_en": ["Format Go code", "Run tests", "Build binary", "Install packages"],
        "options_hi": ["Go कोड फॉर्मेट करना", "टेस्ट रन करना", "बाइनरी बिल्ड करना", "पैकेज इंस्टॉल करना"],
        "answer_en": "Format Go code",
        "answer_hi": "Go कोड फॉर्मेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you create a map?",
        "question_hi": "मैप कैसे बनाते हैं?",
        "options_en": ["make(map[string]int)", "map[string]int{}", "Both A and B", "None of the above"],
        "options_hi": ["make(map[string]int)", "map[string]int{}", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Difference between slice and array?",
        "question_hi": "स्लाइस और ऐरे में क्या अंतर है?",
        "options_en": ["Slice is dynamic, array is fixed", "Array is dynamic, slice is fixed", "No difference", "Slice is faster"],
        "options_hi": ["स्लाइस डायनामिक है, ऐरे फिक्स्ड है", "ऐरे डायनामिक है, स्लाइस फिक्स्ड है", "कोई अंतर नहीं", "स्लाइस फास्टर है"],
        "answer_en": "Slice is dynamic, array is fixed",
        "answer_hi": "स्लाइस डायनामिक है, ऐरे फिक्स्ड है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Purpose of 'context' package?",
        "question_hi": "'context' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Request-scoped values", "Database operations", "File handling", "Logging"],
        "options_hi": ["रिक्वेस्ट-स्कोप्ड वैल्यूज", "डेटाबेस ऑपरेशन्स", "फाइल हैंडलिंग", "लॉगिंग"],
        "answer_en": "Request-scoped values",
        "answer_hi": "रिक्वेस्ट-स्कोप्ड वैल्यूज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "How to write unit tests?",
        "question_hi": "यूनिट टेस्ट कैसे लिखते हैं?",
        "options_en": ["Create _test.go files", "Use testing package", "Both A and B", "None of the above"],
        "options_hi": ["_test.go फाइल्स बनाएं", "testing पैकेज का उपयोग करें", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is a pointer?",
        "question_hi": "पॉइंटर क्या है?",
        "options_en": ["Variable storing memory address", "Function pointer", "Package pointer", "None of the above"],
        "options_hi": ["मेमोरी एड्रेस स्टोर करने वाला वेरिएबल", "फंक्शन पॉइंटर", "पैकेज पॉइंटर", "इनमें से कोई नहीं"],
        "answer_en": "Variable storing memory address",
        "answer_hi": "मेमोरी एड्रेस स्टोर करने वाला वेरिएबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Convert string to integer?",
        "question_hi": "स्ट्रिंग को इंटीजर में कन्वर्ट करें?",
        "options_en": ["strconv.Atoi()", "int.Parse()", "string.ToInt()", "convert.Int()"],
        "options_hi": ["strconv.Atoi()", "int.Parse()", "string.ToInt()", "convert.Int()"],
        "answer_en": "strconv.Atoi()",
        "answer_hi": "strconv.Atoi()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Purpose of 'iota'?",
        "question_hi": "'iota' का उद्देश्य क्या है?",
        "options_en": ["Enumerated constants", "Iteration", "Error handling", "Logging"],
        "options_hi": ["एन्युमरेटेड कॉन्स्टेंट्स", "इटरेशन", "एरर हैंडलिंग", "लॉगिंग"],
        "answer_en": "Enumerated constants",
        "answer_hi": "एन्युमरेटेड कॉन्स्टेंट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Handle JSON in Go?",
        "question_hi": "Go में JSON कैसे हैंडल करें?",
        "options_en": ["Using encoding/json package", "Using json module", "Using marshal/unmarshal", "Both A and C"],
        "options_hi": ["encoding/json पैकेज का उपयोग करके", "json मॉड्यूल का उपयोग करके", "marshal/unmarshal का उपयोग करके", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Purpose of 'go vet'?",
        "question_hi": "'go vet' का उद्देश्य क्या है?",
        "options_en": ["Report suspicious constructs", "Format code", "Run tests", "Build code"],
        "options_hi": ["सस्पिशियस कंस्ट्रक्ट्स रिपोर्ट करना", "कोड फॉर्मेट करना", "टेस्ट रन करना", "कोड बिल्ड करना"],
        "answer_en": "Report suspicious constructs",
        "answer_hi": "सस्पिशियस कंस्ट्रक्ट्स रिपोर्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Implement concurrency?",
        "question_hi": "कंकरेंसी कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using goroutines", "Using channels", "Using sync package", "All of the above"],
        "options_hi": ["गोरूटीन्स का उपयोग करके", "चैनल्स का उपयोग करके", "sync पैकेज का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Difference between := and =?",
        "question_hi": ":= और = में क्या अंतर है?",
        "options_en": [":= declares and assigns, = only assigns", "= declares and assigns, := only assigns", "No difference", ":= is for constants"],
        "options_hi": [":= डिक्लेयर और असाइन करता है, = केवल असाइन करता है", "= डिक्लेयर और असाइन करता है, := केवल असाइन करता है", "कोई अंतर नहीं", ":= कॉन्स्टेंट्स के लिए है"],
        "answer_en": ":= declares and assigns, = only assigns",
        "answer_hi": ":= डिक्लेयर और असाइन करता है, = केवल असाइन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Handle timeouts?",
        "question_hi": "टाइमआउट कैसे हैंडल करें?",
        "options_en": ["Using context.WithTimeout", "Using time.After", "Using select statement", "All of the above"],
        "options_hi": ["context.WithTimeout का उपयोग करके", "time.After का उपयोग करके", "select स्टेटमेंट का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Purpose of 'go run'?",
        "question_hi": "'go run' का उद्देश्य क्या है?",
        "options_en": ["Compile and run Go program", "Only compile", "Only run", "Install package"],
        "options_hi": ["Go प्रोग्राम कंपाइल और रन करना", "केवल कंपाइल करना", "केवल रन करना", "पैकेज इंस्टॉल करना"],
        "answer_en": "Compile and run Go program",
        "answer_hi": "Go प्रोग्राम कंपाइल और रन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Create method on struct?",
        "question_hi": "स्ट्रक्ट पर मेथड कैसे बनाएं?",
        "options_en": ["func (s Struct) method()", "func method(s Struct)", "struct.method()", "method struct()"],
        "options_hi": ["func (s Struct) method()", "func method(s Struct)", "struct.method()", "method struct()"],
        "answer_en": "func (s Struct) method()",
        "answer_hi": "func (s Struct) method()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Zero value for boolean?",
        "question_hi": "बूलियन का जीरो वैल्यू क्या है?",
        "options_en": ["false", "true", "0", "nil"],
        "options_hi": ["false", "true", "0", "nil"],
        "answer_en": "false",
        "answer_hi": "false",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Read command line arguments?",
        "question_hi": "कमांड लाइन आर्गुमेंट्स कैसे पढ़ें?",
        "options_en": ["os.Args", "flag package", "Both A and B", "None of the above"],
        "options_hi": ["os.Args", "flag पैकेज", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Purpose of 'go get'?",
        "question_hi": "'go get' का उद्देश्य क्या है?",
        "options_en": ["Download and install packages", "Get variable values", "Get user input", "Get file contents"],
        "options_hi": ["पैकेज डाउनलोड और इंस्टॉल करना", "वेरिएबल वैल्यूज प्राप्त करना", "यूजर इनपुट प्राप्त करना", "फाइल कंटेंट प्राप्त करना"],
        "answer_en": "Download and install packages",
        "answer_hi": "पैकेज डाउनलोड और इंस्टॉल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Implement polymorphism?",
        "question_hi": "पोलीमॉर्फिज्म कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using interfaces", "Using inheritance", "Using structs", "Using packages"],
        "options_hi": ["इंटरफेस का उपयोग करके", "इनहेरिटेंस का उपयोग करके", "स्ट्रक्ट्स का उपयोग करके", "पैकेज का उपयोग करके"],
        "answer_en": "Using interfaces",
        "answer_hi": "इंटरफेस का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Purpose of 'recover' function?",
        "question_hi": "'recover' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Recover from panic", "Recover memory", "Recover files", "Recover network"],
        "options_hi": ["panic से रिकवर करना", "मेमोरी रिकवर करना", "फाइल्स रिकवर करना", "नेटवर्क रिकवर करना"],
        "answer_en": "Recover from panic",
        "answer_hi": "panic से रिकवर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Write to a file?",
        "question_hi": "फाइल में कैसे लिखें?",
        "options_en": ["Using os package", "Using ioutil package", "Using bufio package", "All of the above"],
        "options_hi": ["os पैकेज का उपयोग करके", "ioutil पैकेज का उपयोग करके", "bufio पैकेज का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is a closure?",
        "question_hi": "क्लोजर क्या है?",
        "options_en": ["Function referencing outside variables", "Closed function", "Private function", "Anonymous function"],
        "options_hi": ["बाहरी वेरिएबल्स को रेफरेंस करने वाला फंक्शन", "क्लोज्ड फंक्शन", "प्राइवेट फंक्शन", "अनोनिमस फंक्शन"],
        "answer_en": "Function referencing outside variables",
        "answer_hi": "बाहरी वेरिएबल्स को रेफरेंस करने वाला फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Implement web server?",
        "question_hi": "वेब सर्वर कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using net/http package", "Using http.ListenAndServe", "Defining handlers", "All of the above"],
        "options_hi": ["net/http पैकेज का उपयोग करके", "http.ListenAndServe का उपयोग करके", "हैंडलर्स डिफाइन करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Purpose of 'go build'?",
        "question_hi": "'go build' का उद्देश्य क्या है?",
        "options_en": ["Compile Go program", "Run tests", "Format code", "Install dependencies"],
        "options_hi": ["Go प्रोग्राम कंपाइल करना", "टेस्ट रन करना", "कोड फॉर्मेट करना", "डिपेंडेंसी इंस्टॉल करना"],
        "answer_en": "Compile Go program",
        "answer_hi": "Go प्रोग्राम कंपाइल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Create anonymous function?",
        "question_hi": "अनोनिमस फंक्शन कैसे बनाएं?",
        "options_en": ["func() { }", "function() { }", "anon() { }", "lambda() { }"],
        "options_hi": ["func() { }", "function() { }", "anon() { }", "lambda() { }"],
        "answer_en": "func() { }",
        "answer_hi": "func() { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Zero value for numeric types?",
        "question_hi": "न्यूमेरिक टाइप्स का जीरो वैल्यू क्या है?",
        "options_en": ["0", "nil", "false", ""],
        "options_hi": ["0", "nil", "false", ""],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Handle database operations?",
        "question_hi": "डेटाबेस ऑपरेशन्स कैसे हैंडल करें?",
        "options_en": ["Using database/sql package", "Using ORM libraries", "Using driver packages", "All of the above"],
        "options_hi": ["database/sql पैकेज का उपयोग करके", "ORM लाइब्रेरी का उपयोग करके", "ड्राइवर पैकेज का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Purpose of 'go test'?",
        "question_hi": "'go test' का उद्देश्य क्या है?",
        "options_en": ["Run tests", "Build tests", "Format tests", "Install tests"],
        "options_hi": ["टेस्ट रन करना", "टेस्ट बिल्ड करना", "टेस्ट फॉर्मेट करना", "टेस्ट इंस्टॉल करना"],
        "answer_en": "Run tests",
        "answer_hi": "टेस्ट रन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Implement custom sorting?",
        "question_hi": "कस्टम सॉर्टिंग कैसे इम्प्लीमेंट करें?",
        "options_en": ["Implement sort.Interface", "Using sort.Slice", "Both A and B", "None of the above"],
        "options_hi": ["sort.Interface इम्प्लीमेंट करके", "sort.Slice का उपयोग करके", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Purpose of 'make' function?",
        "question_hi": "'make' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Allocate and initialize slices, maps, channels", "Create variables", "Make functions", "Make packages"],
        "options_hi": ["स्लाइस, मैप, चैनल अलोकेट और इनिशियलाइज करना", "वेरिएबल बनाना", "फंक्शन बनाना", "पैकेज बनाना"],
        "answer_en": "Allocate and initialize slices, maps, channels",
        "answer_hi": "स्लाइस, मैप, चैनल अलोकेट और इनिशियलाइज करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Handle HTTP requests?",
        "question_hi": "HTTP रिक्वेस्ट कैसे हैंडल करें?",
        "options_en": ["Using http.HandleFunc", "Implementing http.Handler", "Using routers", "All of the above"],
        "options_hi": ["http.HandleFunc का उपयोग करके", "http.Handler इम्प्लीमेंट करके", "राउटर का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Purpose of 'new' function?",
        "question_hi": "'new' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Allocate memory for types", "Create new variables", "Create new functions", "Create new packages"],
        "options_hi": ["टाइप्स के लिए मेमोरी अलोकेट करना", "नए वेरिएबल बनाना", "नए फंक्शन बनाना", "नए पैकेज बनाना"],
        "answer_en": "Allocate memory for types",
        "answer_hi": "टाइप्स के लिए मेमोरी अलोकेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Implement middleware?",
        "question_hi": "मिडलवेयर कैसे इम्प्लीमेंट करें?",
        "options_en": ["By wrapping handlers", "Using decorator pattern", "Both A and B", "None of the above"],
        "options_hi": ["हैंडलर्स को रैप करके", "डेकोरेटर पैटर्न का उपयोग करके", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Purpose of 'go clean'?",
        "question_hi": "'go clean' का उद्देश्य क्या है?",
        "options_en": ["Remove object files", "Clean cache", "Remove binaries", "All of the above"],
        "options_hi": ["ऑब्जेक्ट फाइल्स रिमूव करना", "कैश क्लीन करना", "बाइनरी रिमूव करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Handle environment variables?",
        "question_hi": "एनवायरनमेंट वेरिएबल्स कैसे हैंडल करें?",
        "options_en": ["Using os package", "os.Getenv()", "os.Setenv()", "All of the above"],
        "options_hi": ["os पैकेज का उपयोग करके", "os.Getenv()", "os.Setenv()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Difference between buffered and unbuffered channels?",
        "question_hi": "बफर्ड और अनबफर्ड चैनल्स में क्या अंतर है?",
        "options_en": ["Buffered has capacity, unbuffered blocks immediately", "Unbuffered has capacity, buffered blocks", "No difference", "Buffered is faster"],
        "options_hi": ["बफर्ड में कैपेसिटी होती है, अनबफर्ड तुरंत ब्लॉक करता है", "अनबफर्ड में कैपेसिटी होती है, बफर्ड ब्लॉक करता है", "कोई अंतर नहीं", "बफर्ड फास्टर है"],
        "answer_en": "Buffered has capacity, unbuffered blocks immediately",
        "answer_hi": "बफर्ड में कैपेसिटी होती है, अनबफर्ड तुरंत ब्लॉक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Implement rate limiting?",
        "question_hi": "रेट लिमिटिंग कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using time.Ticker", "Using goroutines and channels", "Using third-party libraries", "All of the above"],
        "options_hi": ["time.Ticker का उपयोग करके", "गोरूटीन और चैनल का उपयोग करके", "थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Purpose of 'go doc'?",
        "question_hi": "'go doc' का उद्देश्य क्या है?",
        "options_en": ["Show documentation", "Generate docs", "Format docs", "Test docs"],
        "options_hi": ["डॉक्युमेंटेशन दिखाना", "डॉक्स जेनरेट करना", "डॉक्स फॉर्मेट करना", "डॉक्स टेस्ट करना"],
        "answer_en": "Show documentation",
        "answer_hi": "डॉक्युमेंटेशन दिखाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Implement caching?",
        "question_hi": "कैशिंग कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using sync.Map", "Using maps with mutex", "Using third-party caches", "All of the above"],
        "options_hi": ["sync.Map का उपयोग करके", "म्यूटेक्स के साथ मैप का उपयोग करके", "थर्ड-पार्टी कैश का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Purpose of 'go list'?",
        "question_hi": "'go list' का उद्देश्य क्या है?",
        "options_en": ["List packages", "List files", "List dependencies", "All of the above"],
        "options_hi": ["पैकेज लिस्ट करना", "फाइल्स लिस्ट करना", "डिपेंडेंसी लिस्ट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Handle configuration?",
        "question_hi": "कॉन्फिगरेशन कैसे हैंडल करें?",
        "options_en": ["Using config files", "Using environment variables", "Using command line flags", "All of the above"],
        "options_hi": ["कॉन्फिग फाइल्स का उपयोग करके", "एनवायरनमेंट वेरिएबल्स का उपयोग करके", "कमांड लाइन फ्लैग्स का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Purpose of 'go generate'?",
        "question_hi": "'go generate' का उद्देश्य क्या है?",
        "options_en": ["Run code generation tools", "Generate random numbers", "Generate tests", "Generate documentation"],
        "options_hi": ["कोड जेनरेशन टूल्स रन करना", "रैंडम नंबर जेनरेट करना", "टेस्ट जेनरेट करना", "डॉक्युमेंटेशन जेनरेट करना"],
        "answer_en": "Run code generation tools",
        "answer_hi": "कोड जेनरेशन टूल्स रन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Implement logging?",
        "question_hi": "लॉगिंग कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using log package", "Using third-party logging libraries", "Using fmt package", "All of the above"],
        "options_hi": ["log पैकेज का उपयोग करके", "थर्ड-पार्टी लॉगिंग लाइब्रेरी का उपयोग करके", "fmt पैकेज का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Purpose of 'go install'?",
        "question_hi": "'go install' का उद्देश्य क्या है?",
        "options_en": ["Compile and install packages", "Only compile", "Only install", "Uninstall packages"],
        "options_hi": ["पैकेज कंपाइल और इंस्टॉल करना", "केवल कंपाइल करना", "केवल इंस्टॉल करना", "पैकेज अनइंस्टॉल करना"],
        "answer_en": "Compile and install packages",
        "answer_hi": "पैकेज कंपाइल और इंस्टॉल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Implement dependency injection?",
        "question_hi": "डिपेंडेंसी इंजेक्शन कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using constructor injection", "Using interface-based design", "Using third-party frameworks", "All of the above"],
        "options_hi": ["कंस्ट्रक्टर इंजेक्शन का उपयोग करके", "इंटरफेस-बेस्ड डिजाइन का उपयोग करके", "थर्ड-पार्टी फ्रेमवर्क का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Purpose of 'go work'?",
        "question_hi": "'go work' का उद्देश्य क्या है?",
        "options_en": ["Multi-module workspaces", "Work scheduling", "Worker pools", "Work distribution"],
        "options_hi": ["मल्टी-मॉड्यूल वर्कस्पेस", "वर्क शेड्यूलिंग", "वर्कर पूल", "वर्क डिस्ट्रीब्यूशन"],
        "answer_en": "Multi-module workspaces",
        "answer_hi": "मल्टी-मॉड्यूल वर्कस्पेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Implement health checks?",
        "question_hi": "हेल्थ चेक कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using HTTP endpoints", "Using background goroutines", "Using third-party libraries", "All of the above"],
        "options_hi": ["HTTP एंडपॉइंट का उपयोग करके", "बैकग्राउंड गोरूटीन का उपयोग करके", "थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Purpose of 'go fix'?",
        "question_hi": "'go fix' का उद्देश्य क्या है?",
        "options_en": ["Update code to use new APIs", "Fix bugs", "Fix formatting", "Fix tests"],
        "options_hi": ["नए API का उपयोग करने के लिए कोड अपडेट करना", "बग फिक्स करना", "फॉर्मेटिंग फिक्स करना", "टेस्ट फिक्स करना"],
        "answer_en": "Update code to use new APIs",
        "answer_hi": "नए API का उपयोग करने के लिए कोड अपडेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Implement circuit breaker pattern?",
        "question_hi": "सर्किट ब्रेकर पैटर्न कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using third-party libraries", "Implementing with channels and goroutines", "Using state machine", "All of the above"],
        "options_hi": ["थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "चैनल और गोरूटीन के साथ इम्प्लीमेंट करके", "स्टेट मशीन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Purpose of 'go version'?",
        "question_hi": "'go version' का उद्देश्य क्या है?",
        "options_en": ["Show Go version", "Show program version", "Show package version", "Show module version"],
        "options_hi": ["Go वर्जन दिखाना", "प्रोग्राम वर्जन दिखाना", "पैकेज वर्जन दिखाना", "मॉड्यूल वर्जन दिखाना"],
        "answer_en": "Show Go version",
        "answer_hi": "Go वर्जन दिखाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Implement retry logic?",
        "question_hi": "रिट्राई लॉजिक कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using for loop with sleep", "Using exponential backoff", "Using third-party libraries", "All of the above"],
        "options_hi": ["स्लीप के साथ for लूप का उपयोग करके", "एक्सपोनेंशियल बैकऑफ का उपयोग करके", "थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Purpose of 'go env'?",
        "question_hi": "'go env' का उद्देश्य क्या है?",
        "options_en": ["Show Go environment variables", "Set environment variables", "Unset environment variables", "Test environment"],
        "options_hi": ["Go एनवायरनमेंट वेरिएबल्स दिखाना", "एनवायरनमेंट वेरिएबल्स सेट करना", "एनवायरनमेंट वेरिएबल्स अनसेट करना", "एनवायरनमेंट टेस्ट करना"],
        "answer_en": "Show Go environment variables",
        "answer_hi": "Go एनवायरनमेंट वेरिएबल्स दिखाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Implement graceful shutdown?",
        "question_hi": "ग्रेसफुल शटडाउन कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using signal handling", "Using context cancellation", "Using server.Shutdown()", "All of the above"],
        "options_hi": ["सिग्नल हैंडलिंग का उपयोग करके", "कॉन्टेक्स्ट कैंसलेशन का उपयोग करके", "server.Shutdown() का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Purpose of 'go tool'?",
        "question_hi": "'go tool' का उद्देश्य क्या है?",
        "options_en": ["Run Go tools", "Create tools", "Install tools", "Remove tools"],
        "options_hi": ["Go टूल्स रन करना", "टूल्स बनाना", "टूल्स इंस्टॉल करना", "टूल्स रिमूव करना"],
        "answer_en": "Run Go tools",
        "answer_hi": "Go टूल्स रन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Implement pub-sub pattern?",
        "question_hi": "पब-सब पैटर्न कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using channels", "Using third-party libraries", "Using sync package", "All of the above"],
        "options_hi": ["चैनल का उपयोग करके", "थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "sync पैकेज का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Purpose of 'go mod init'?",
        "question_hi": "'go mod init' का उद्देश्य क्या है?",
        "options_en": ["Initialize a new module", "Initialize project", "Initialize package", "Initialize workspace"],
        "options_hi": ["नया मॉड्यूल इनिशियलाइज करना", "प्रोजेक्ट इनिशियलाइज करना", "पैकेज इनिशियलाइज करना", "वर्कस्पेस इनिशियलाइज करना"],
        "answer_en": "Initialize a new module",
        "answer_hi": "नया मॉड्यूल इनिशियलाइज करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Implement worker pools?",
        "question_hi": "वर्कर पूल कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using goroutines and channels", "Using sync.WaitGroup", "Using third-party libraries", "All of the above"],
        "options_hi": ["गोरूटीन और चैनल का उपयोग करके", "sync.WaitGroup का उपयोग करके", "थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Purpose of 'go mod tidy'?",
        "question_hi": "'go mod tidy' का उद्देश्य क्या है?",
        "options_en": ["Add missing and remove unused modules", "Clean modules", "Format modules", "Test modules"],
        "options_hi": ["मिसिंग मॉड्यूल ऐड और अनयूज्ड मॉड्यूल रिमूव करना", "मॉड्यूल क्लीन करना", "मॉड्यूल फॉर्मेट करना", "मॉड्यूल टेस्ट करना"],
        "answer_en": "Add missing and remove unused modules",
        "answer_hi": "मिसिंग मॉड्यूल ऐड और अनयूज्ड मॉड्यूल रिमूव करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Implement feature flags?",
        "question_hi": "फीचर फ्लैग्स कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using configuration", "Using environment variables", "Using third-party services", "All of the above"],
        "options_hi": ["कॉन्फिगरेशन का उपयोग करके", "एनवायरनमेंट वेरिएबल्स का उपयोग करके", "थर्ड-पार्टी सर्विस का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Purpose of 'go mod download'?",
        "question_hi": "'go mod download' का उद्देश्य क्या है?",
        "options_en": ["Download modules to cache", "Download source code", "Download binaries", "Download documentation"],
        "options_hi": ["मॉड्यूल कैश में डाउनलोड करना", "सोर्स कोड डाउनलोड करना", "बाइनरी डाउनलोड करना", "डॉक्युमेंटेशन डाउनलोड करना"],
        "answer_en": "Download modules to cache",
        "answer_hi": "मॉड्यूल कैश में डाउनलोड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Implement distributed tracing?",
        "question_hi": "डिस्ट्रीब्यूटेड ट्रेसिंग कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using OpenTelemetry", "Using third-party APM tools", "Using context propagation", "All of the above"],
        "options_hi": ["OpenTelemetry का उपयोग करके", "थर्ड-पार्टी APM टूल का उपयोग करके", "कॉन्टेक्स्ट प्रोपेगेशन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Purpose of 'go mod verify'?",
        "question_hi": "'go mod verify' का उद्देश्य क्या है?",
        "options_en": ["Verify module dependencies", "Verify code", "Verify tests", "Verify format"],
        "options_hi": ["मॉड्यूल डिपेंडेंसी वेरिफाई करना", "कोड वेरिफाई करना", "टेस्ट वेरिफाई करना", "फॉर्मेट वेरिफाई करना"],
        "answer_en": "Verify module dependencies",
        "answer_hi": "मॉड्यूल डिपेंडेंसी वेरिफाई करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Implement API versioning?",
        "question_hi": "API वर्जनिंग कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using URL paths", "Using headers", "Using query parameters", "All of the above"],
        "options_hi": ["URL पाथ का उपयोग करके", "हेडर का उपयोग करके", "क्वेरी पैरामीटर का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Purpose of 'go mod graph'?",
        "question_hi": "'go mod graph' का उद्देश्य क्या है?",
        "options_en": ["Print module requirement graph", "Graph performance", "Graph dependencies", "Graph code structure"],
        "options_hi": ["मॉड्यूल रिक्वायरमेंट ग्राफ प्रिंट करना", "परफॉर्मेंस ग्राफ करना", "डिपेंडेंसी ग्राफ करना", "कोड स्ट्रक्चर ग्राफ करना"],
        "answer_en": "Print module requirement graph",
        "answer_hi": "मॉड्यूल रिक्वायरमेंट ग्राफ प्रिंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Implement API documentation?",
        "question_hi": "API डॉक्युमेंटेशन कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using Go comments", "Using Swagger/OpenAPI", "Using third-party tools", "All of the above"],
        "options_hi": ["Go कमेंट्स का उपयोग करके", "Swagger/OpenAPI का उपयोग करके", "थर्ड-पार्टी टूल का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Purpose of 'go mod why'?",
        "question_hi": "'go mod why' का उद्देश्य क्या है?",
        "options_en": ["Explain why packages or modules are needed", "Ask why", "Question dependencies", "Debug modules"],
        "options_hi": ["एक्सप्लेन करना कि पैकेज या मॉड्यूल क्यों जरूरी हैं", "क्यों पूछना", "डिपेंडेंसी क्वेश्चन करना", "मॉड्यूल डीबग करना"],
        "answer_en": "Explain why packages or modules are needed",
        "answer_hi": "एक्सप्लेन करना कि पैकेज या मॉड्यूल क्यों जरूरी हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Implement data validation?",
        "question_hi": "डेटा वैलिडेशन कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using struct tags", "Using validation libraries", "Manual validation", "All of the above"],
        "options_hi": ["स्ट्रक्ट टैग का उपयोग करके", "वैलिडेशन लाइब्रेरी का उपयोग करके", "मैनुअल वैलिडेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Purpose of 'go mod vendor'?",
        "question_hi": "'go mod vendor' का उद्देश्य क्या है?",
        "options_en": ["Create vendor directory", "Vendor dependencies", "Include dependencies in project", "All of the above"],
        "options_hi": ["वेंडर डायरेक्टरी बनाना", "डिपेंडेंसी वेंडर करना", "प्रोजेक्ट में डिपेंडेंसी इनक्लूड करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Implement API authentication?",
        "question_hi": "API ऑथेंटिकेशन कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using JWT tokens", "Using OAuth", "Using API keys", "All of the above"],
        "options_hi": ["JWT टोकन का उपयोग करके", "OAuth का उपयोग करके", "API की का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Purpose of 'go mod edit'?",
        "question_hi": "'go mod edit' का उद्देश्य क्या है?",
        "options_en": ["Edit go.mod file", "Edit modules", "Edit dependencies", "Edit code"],
        "options_hi": ["go.mod फाइल एडिट करना", "मॉड्यूल एडिट करना", "डिपेंडेंसी एडिट करना", "कोड एडिट करना"],
        "answer_en": "Edit go.mod file",
        "answer_hi": "go.mod फाइल एडिट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Implement background jobs?",
        "question_hi": "बैकग्राउंड जॉब्स कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using goroutines", "Using cron jobs", "Using message queues", "All of the above"],
        "options_hi": ["गोरूटीन का उपयोग करके", "क्रॉन जॉब का उपयोग करके", "मैसेज क्यू का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Purpose of 'go test -v'?",
        "question_hi": "'go test -v' का उद्देश्य क्या है?",
        "options_en": ["Run tests in verbose mode", "Validate tests", "Verify tests", "View tests"],
        "options_hi": ["वर्बोस मोड में टेस्ट रन करना", "टेस्ट वैलिडेट करना", "टेस्ट वेरिफाई करना", "टेस्ट व्यू करना"],
        "answer_en": "Run tests in verbose mode",
        "answer_hi": "वर्बोस मोड में टेस्ट रन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Implement database migrations?",
        "question_hi": "डेटाबेस माइग्रेशन कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using migration libraries", "Using SQL files", "Using ORM tools", "All of the above"],
        "options_hi": ["माइग्रेशन लाइब्रेरी का उपयोग करके", "SQL फाइल्स का उपयोग करके", "ORM टूल्स का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Purpose of 'go test -cover'?",
        "question_hi": "'go test -cover' का उद्देश्य क्या है?",
        "options_en": ["Measure code coverage", "Cover tests", "Cover code", "Cover packages"],
        "options_hi": ["कोड कवरेज मापना", "टेस्ट कवर करना", "कोड कवर करना", "पैकेज कवर करना"],
        "answer_en": "Measure code coverage",
        "answer_hi": "कोड कवरेज मापना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Implement API rate limiting?",
        "question_hi": "API रेट लिमिटिंग कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using token bucket algorithm", "Using fixed window", "Using sliding window", "All of the above"],
        "options_hi": ["टोकन बकेट अल्गोरिदम का उपयोग करके", "फिक्स्ड विंडो का उपयोग करके", "स्लाइडिंग विंडो का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Purpose of 'go test -race'?",
        "question_hi": "'go test -race' का उद्देश्य क्या है?",
        "options_en": ["Detect race conditions", "Race tests", "Test racing", "Speed up tests"],
        "options_hi": ["रेस कंडीशन डिटेक्ट करना", "टेस्ट रेस करना", "रेसिंग टेस्ट करना", "टेस्ट स्पीड अप करना"],
        "answer_en": "Detect race conditions",
        "answer_hi": "रेस कंडीशन डिटेक्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Implement service discovery?",
        "question_hi": "सर्विस डिस्कवरी कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using Consul", "Using etcd", "Using Kubernetes services", "All of the above"],
        "options_hi": ["Consul का उपयोग करके", "etcd का उपयोग करके", "Kubernetes सर्विस का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Purpose of 'go test -bench'?",
        "question_hi": "'go test -bench' का उद्देश्य क्या है?",
        "options_en": ["Run benchmarks", "Bench tests", "Test benches", "Optimize tests"],
        "options_hi": ["बेंचमार्क रन करना", "टेस्ट बेंच करना", "बेंच टेस्ट करना", "टेस्ट ऑप्टिमाइज करना"],
        "answer_en": "Run benchmarks",
        "answer_hi": "बेंचमार्क रन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Implement message queues?",
        "question_hi": "मैसेज क्यू कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using channel patterns", "Using RabbitMQ", "Using Kafka", "All of the above"],
        "options_hi": ["चैनल पैटर्न का उपयोग करके", "RabbitMQ का उपयोग करके", "Kafka का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Purpose of 'go test -run'?",
        "question_hi": "'go test -run' का उद्देश्य क्या है?",
        "options_en": ["Run specific tests", "Run all tests", "Run random tests", "Run failed tests"],
        "options_hi": ["स्पेसिफिक टेस्ट रन करना", "सभी टेस्ट रन करना", "रैंडम टेस्ट रन करना", "फेल्ड टेस्ट रन करना"],
        "answer_en": "Run specific tests",
        "answer_hi": "स्पेसिफिक टेस्ट रन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Implement monitoring and metrics?",
        "question_hi": "मॉनिटरिंग और मेट्रिक्स कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using Prometheus", "Using metrics libraries", "Using custom metrics", "All of the above"],
        "options_hi": ["Prometheus का उपयोग करके", "मेट्रिक्स लाइब्रेरी का उपयोग करके", "कस्टम मेट्रिक्स का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Purpose of 'sync' package?",
        "question_hi": "'sync' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Synchronization primitives", "String operations", "File operations", "Network operations"],
        "options_hi": ["सिंक्रोनाइजेशन प्रिमिटिव्स", "स्ट्रिंग ऑपरेशन्स", "फाइल ऑपरेशन्स", "नेटवर्क ऑपरेशन्स"],
        "answer_en": "Synchronization primitives",
        "answer_hi": "सिंक्रोनाइजेशन प्रिमिटिव्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Create custom error?",
        "question_hi": "कस्टम एरर कैसे बनाएं?",
        "options_en": ["errors.New()", "fmt.Errorf()", "Implement error interface", "All of the above"],
        "options_hi": ["errors.New()", "fmt.Errorf()", "एरर इंटरफेस इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Purpose of 'go mod' command?",
        "question_hi": "'go mod' कमांड का उद्देश्य क्या है?",
        "options_en": ["Module management", "Code formatting", "Testing", "Building"],
        "options_hi": ["मॉड्यूल मैनेजमेंट", "कोड फॉर्मेटिंग", "टेस्टिंग", "बिल्डिंग"],
        "answer_en": "Module management",
        "answer_hi": "मॉड्यूल मैनेजमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Implement file operations?",
        "question_hi": "फाइल ऑपरेशन्स कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using os package", "Using ioutil package", "Using bufio package", "All of the above"],
        "options_hi": ["os पैकेज का उपयोग करके", "ioutil पैकेज का उपयोग करके", "bufio पैकेज का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the zero value of a pointer?",
        "question_hi": "पॉइंटर का जीरो वैल्यू क्या है?",
        "options_en": ["nil", "0", "false", ""],
        "options_hi": ["nil", "0", "false", ""],
        "answer_en": "nil",
        "answer_hi": "nil",
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