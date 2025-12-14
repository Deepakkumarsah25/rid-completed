const questions =[
    {
        "num": 1,
        "question_en": "What is the purpose of 'go mod graph' command?",
        "question_hi": "'go mod graph' कमांड का उद्देश्य क्या है?",
        "options_en": ["To print module requirement graph", "To graph performance", "To graph dependencies", "To graph code structure"],
        "options_hi": ["मॉड्यूल रिक्वायरमेंट ग्राफ प्रिंट करने के लिए", "परफॉर्मेंस ग्राफ करने के लिए", "डिपेंडेंसी ग्राफ करने के लिए", "कोड स्ट्रक्चर ग्राफ करने के लिए"],
        "answer_en": "To print module requirement graph",
        "answer_hi": "मॉड्यूल रिक्वायरमेंट ग्राफ प्रिंट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How do you implement API documentation in Go?",
        "question_hi": "Go में API डॉक्युमेंटेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Go comments", "Using Swagger/OpenAPI", "Using third-party tools", "All of the above"],
        "options_hi": ["Go कमेंट्स का उपयोग करके", "Swagger/OpenAPI का उपयोग करके", "थर्ड-पार्टी टूल का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the purpose of 'go mod why' command?",
        "question_hi": "'go mod why' कमांड का उद्देश्य क्या है?",
        "options_en": ["To explain why packages or modules are needed", "To ask why", "To question dependencies", "To debug modules"],
        "options_hi": ["एक्सप्लेन करने के लिए कि पैकेज या मॉड्यूल क्यों जरूरी हैं", "क्यों पूछने के लिए", "डिपेंडेंसी क्वेश्चन करने के लिए", "मॉड्यूल डीबग करने के लिए"],
        "answer_en": "To explain why packages or modules are needed",
        "answer_hi": "एक्सप्लेन करने के लिए कि पैकेज या मॉड्यूल क्यों जरूरी हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is a goroutine in Go?",
        "question_hi": "Go में गोरूटीन क्या है?",
        "options_en": ["A lightweight thread", "A function", "A variable", "A package"],
        "options_hi": ["एक लाइटवेट थ्रेड", "एक फंक्शन", "एक वेरिएबल", "एक पैकेज"],
        "answer_en": "A lightweight thread",
        "answer_hi": "एक लाइटवेट थ्रेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "How do you declare a variable in Go?",
        "question_hi": "Go में वेरिएबल कैसे डिक्लेयर करते हैं?",
        "options_en": ["var x int", "x := 0", "Both A and B", "None of the above"],
        "options_hi": ["var x int", "x := 0", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the zero value of a pointer in Go?",
        "question_hi": "Go में पॉइंटर का जीरो वैल्यू क्या है?",
        "options_en": ["0", "nil", "false", ""],
        "options_hi": ["0", "nil", "false", ""],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which keyword is used to define a constant in Go?",
        "question_hi": "Go में कॉन्स्टेंट डिफाइन करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["const", "var", "let", "constant"],
        "options_hi": ["const", "var", "let", "constant"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does the 'defer' keyword do in Go?",
        "question_hi": "Go में 'defer' कीवर्ड क्या करता है?",
        "options_en": ["Delays function execution", "Stops execution", "Defines a function", "Imports a package"],
        "options_hi": ["फंक्शन एक्जीक्यूशन डिले करता है", "एक्जीक्यूशन रोकता है", "फंक्शन डिफाइन करता है", "पैकेज इम्पोर्ट करता है"],
        "answer_en": "Delays function execution",
        "answer_hi": "फंक्शन एक्जीक्यूशन डिले करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "How do you create a slice in Go?",
        "question_hi": "Go में स्लाइस कैसे बनाते हैं?",
        "options_en": ["make([]int, 5)", "[]int{1,2,3}", "Both A and B", "None of the above"],
        "options_hi": ["make([]int, 5)", "[]int{1,2,3}", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the purpose of channels in Go?",
        "question_hi": "Go में चैनल्स का उद्देश्य क्या है?",
        "options_en": ["Communication between goroutines", "File handling", "Error handling", "Memory allocation"],
        "options_hi": ["गोरूटीन्स के बीच कम्युनिकेशन", "फाइल हैंडलिंग", "एरर हैंडलिंग", "मेमोरी अलोकेशन"],
        "answer_en": "Communication between goroutines",
        "answer_hi": "गोरूटीन्स के बीच कम्युनिकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "How do you import a package in Go?",
        "question_hi": "Go में पैकेज कैसे इम्पोर्ट करते हैं?",
        "options_en": ["import \"fmt\"", "include \"fmt\"", "require \"fmt\"", "using \"fmt\""],
        "options_hi": ["import \"fmt\"", "include \"fmt\"", "require \"fmt\"", "using \"fmt\""],
        "answer_en": "import \"fmt\"",
        "answer_hi": "import \"fmt\"",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the entry point of a Go program?",
        "question_hi": "Go प्रोग्राम का एंट्री पॉइंट क्या है?",
        "options_en": ["main() function", "init() function", "start() function", "run() function"],
        "options_hi": ["main() फंक्शन", "init() फंक्शन", "start() फंक्शन", "run() फंक्शन"],
        "answer_en": "main() function",
        "answer_hi": "main() फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How do you check the type of a variable in Go?",
        "question_hi": "Go में वेरिएबल का टाइप कैसे चेक करते हैं?",
        "options_en": ["Using reflect package", "typeOf operator", "typeof function", "All of the above"],
        "options_hi": ["reflect पैकेज का उपयोग करके", "typeOf ऑपरेटर", "typeof फंक्शन", "उपरोक्त सभी"],
        "answer_en": "Using reflect package",
        "answer_hi": "reflect पैकेज का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the purpose of interface in Go?",
        "question_hi": "Go में इंटरफेस का उद्देश्य क्या है?",
        "options_en": ["To define method signatures", "For inheritance", "For memory management", "For error handling"],
        "options_hi": ["मेथड सिग्नेचर डिफाइन करने के लिए", "इनहेरिटेंस के लिए", "मेमोरी मैनेजमेंट के लिए", "एरर हैंडलिंग के लिए"],
        "answer_en": "To define method signatures",
        "answer_hi": "मेथड सिग्नेचर डिफाइन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "How do you handle errors in Go?",
        "question_hi": "Go में एरर कैसे हैंडल करते हैं?",
        "options_en": ["Return error from functions", "Using try-catch", "Using panic-recover", "Both A and C"],
        "options_hi": ["फंक्शन से एरर रिटर्न करके", "try-catch का उपयोग करके", "panic-recover का उपयोग करके", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is a struct in Go?",
        "question_hi": "Go में स्ट्रक्ट क्या है?",
        "options_en": ["A collection of fields", "A function", "A package", "A variable"],
        "options_hi": ["फील्ड्स का कलेक्शन", "एक फंक्शन", "एक पैकेज", "एक वेरिएबल"],
        "answer_en": "A collection of fields",
        "answer_hi": "फील्ड्स का कलेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "How do you iterate over a slice in Go?",
        "question_hi": "Go में स्लाइस पर कैसे इटरेट करते हैं?",
        "options_en": ["Using for loop with range", "Using while loop", "Using foreach", "Using iterator"],
        "options_hi": ["for लूप के साथ range का उपयोग करके", "while लूप का उपयोग करके", "foreach का उपयोग करके", "iterator का उपयोग करके"],
        "answer_en": "Using for loop with range",
        "answer_hi": "for लूप के साथ range का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the purpose of 'go fmt' command?",
        "question_hi": "'go fmt' कमांड का उद्देश्य क्या है?",
        "options_en": ["To format Go code", "To run tests", "To build binary", "To install packages"],
        "options_hi": ["Go कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "बाइनरी बिल्ड करने के लिए", "पैकेज इंस्टॉल करने के लिए"],
        "answer_en": "To format Go code",
        "answer_hi": "Go कोड फॉर्मेट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "How do you create a map in Go?",
        "question_hi": "Go में मैप कैसे बनाते हैं?",
        "options_en": ["make(map[string]int)", "map[string]int{}", "Both A and B", "None of the above"],
        "options_hi": ["make(map[string]int)", "map[string]int{}", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the difference between slice and array in Go?",
        "question_hi": "Go में स्लाइस और ऐरे में क्या अंतर है?",
        "options_en": ["Slice is dynamic, array is fixed size", "Array is dynamic, slice is fixed", "No difference", "Slice is faster"],
        "options_hi": ["स्लाइस डायनामिक है, ऐरे फिक्स्ड साइज का है", "ऐरे डायनामिक है, स्लाइस फिक्स्ड है", "कोई अंतर नहीं", "स्लाइस फास्टर है"],
        "answer_en": "Slice is dynamic, array is fixed size",
        "answer_hi": "स्लाइस डायनामिक है, ऐरे फिक्स्ड साइज का है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of 'context' package in Go?",
        "question_hi": "Go में 'context' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For request-scoped values", "For database operations", "For file handling", "For logging"],
        "options_hi": ["रिक्वेस्ट-स्कोप्ड वैल्यूज के लिए", "डेटाबेस ऑपरेशन्स के लिए", "फाइल हैंडलिंग के लिए", "लॉगिंग के लिए"],
        "answer_en": "For request-scoped values",
        "answer_hi": "रिक्वेस्ट-स्कोप्ड वैल्यूज के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you write unit tests in Go?",
        "question_hi": "Go में यूनिट टेस्ट कैसे लिखते हैं?",
        "options_en": ["Create _test.go files", "Use testing package", "Both A and B", "None of the above"],
        "options_hi": ["_test.go फाइल्स बनाएं", "testing पैकेज का उपयोग करें", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is a pointer in Go?",
        "question_hi": "Go में पॉइंटर क्या है?",
        "options_en": ["Variable that stores memory address", "Function pointer", "Package pointer", "None of the above"],
        "options_hi": ["वेरिएबल जो मेमोरी एड्रेस स्टोर करता है", "फंक्शन पॉइंटर", "पैकेज पॉइंटर", "इनमें से कोई नहीं"],
        "answer_en": "Variable that stores memory address",
        "answer_hi": "वेरिएबल जो मेमोरी एड्रेस स्टोर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How do you convert string to integer in Go?",
        "question_hi": "Go में स्ट्रिंग को इंटीजर में कैसे कन्वर्ट करते हैं?",
        "options_en": ["strconv.Atoi()", "int.Parse()", "string.ToInt()", "convert.Int()"],
        "options_hi": ["strconv.Atoi()", "int.Parse()", "string.ToInt()", "convert.Int()"],
        "answer_en": "strconv.Atoi()",
        "answer_hi": "strconv.Atoi()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of 'iota' in Go?",
        "question_hi": "Go में 'iota' का उद्देश्य क्या है?",
        "options_en": ["For enumerated constants", "For iteration", "For error handling", "For logging"],
        "options_hi": ["एन्युमरेटेड कॉन्स्टेंट्स के लिए", "इटरेशन के लिए", "एरर हैंडलिंग के लिए", "लॉगिंग के लिए"],
        "answer_en": "For enumerated constants",
        "answer_hi": "एन्युमरेटेड कॉन्स्टेंट्स के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How do you handle JSON in Go?",
        "question_hi": "Go में JSON कैसे हैंडल करते हैं?",
        "options_en": ["Using encoding/json package", "Using json module", "Using marshal/unmarshal", "Both A and C"],
        "options_hi": ["encoding/json पैकेज का उपयोग करके", "json मॉड्यूल का उपयोग करके", "marshal/unmarshal का उपयोग करके", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of 'go vet' command?",
        "question_hi": "'go vet' कमांड का उद्देश्य क्या है?",
        "options_en": ["To report suspicious constructs", "To format code", "To run tests", "To build code"],
        "options_hi": ["सस्पिशियस कंस्ट्रक्ट्स रिपोर्ट करने के लिए", "कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "कोड बिल्ड करने के लिए"],
        "answer_en": "To report suspicious constructs",
        "answer_hi": "सस्पिशियस कंस्ट्रक्ट्स रिपोर्ट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How do you implement concurrency in Go?",
        "question_hi": "Go में कंकरेंसी कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using goroutines", "Using channels", "Using sync package", "All of the above"],
        "options_hi": ["गोरूटीन्स का उपयोग करके", "चैनल्स का उपयोग करके", "sync पैकेज का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the difference between := and = in Go?",
        "question_hi": "Go में := और = में क्या अंतर है?",
        "options_en": [":= declares and assigns, = only assigns", "= declares and assigns, := only assigns", "No difference", ":= is for constants"],
        "options_hi": [":= डिक्लेयर और असाइन करता है, = केवल असाइन करता है", "= डिक्लेयर और असाइन करता है, := केवल असाइन करता है", "कोई अंतर नहीं", ":= कॉन्स्टेंट्स के लिए है"],
        "answer_en": ":= declares and assigns, = only assigns",
        "answer_hi": ":= डिक्लेयर और असाइन करता है, = केवल असाइन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you handle timeouts in Go?",
        "question_hi": "Go में टाइमआउट कैसे हैंडल करते हैं?",
        "options_en": ["Using context.WithTimeout", "Using time.After", "Using select statement", "All of the above"],
        "options_hi": ["context.WithTimeout का उपयोग करके", "time.After का उपयोग करके", "select स्टेटमेंट का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of 'go run' command?",
        "question_hi": "'go run' कमांड का उद्देश्य क्या है?",
        "options_en": ["To compile and run Go program", "To only compile", "To only run", "To install package"],
        "options_hi": ["Go प्रोग्राम कंपाइल और रन करने के लिए", "केवल कंपाइल करने के लिए", "केवल रन करने के लिए", "पैकेज इंस्टॉल करने के लिए"],
        "answer_en": "To compile and run Go program",
        "answer_hi": "Go प्रोग्राम कंपाइल और रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you create a method on a struct in Go?",
        "question_hi": "Go में स्ट्रक्ट पर मेथड कैसे बनाते हैं?",
        "options_en": ["func (s Struct) method()", "func method(s Struct)", "struct.method()", "method struct()"],
        "options_hi": ["func (s Struct) method()", "func method(s Struct)", "struct.method()", "method struct()"],
        "answer_en": "func (s Struct) method()",
        "answer_hi": "func (s Struct) method()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the zero value for boolean in Go?",
        "question_hi": "Go में बूलियन का जीरो वैल्यू क्या है?",
        "options_en": ["false", "true", "0", "nil"],
        "options_hi": ["false", "true", "0", "nil"],
        "answer_en": "false",
        "answer_hi": "false",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you read command line arguments in Go?",
        "question_hi": "Go में कमांड लाइन आर्गुमेंट्स कैसे पढ़ते हैं?",
        "options_en": ["os.Args", "flag package", "Both A and B", "None of the above"],
        "options_hi": ["os.Args", "flag पैकेज", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of 'go get' command?",
        "question_hi": "'go get' कमांड का उद्देश्य क्या है?",
        "options_en": ["To download and install packages", "To get variable values", "To get user input", "To get file contents"],
        "options_hi": ["पैकेज डाउनलोड और इंस्टॉल करने के लिए", "वेरिएबल वैल्यूज प्राप्त करने के लिए", "यूजर इनपुट प्राप्त करने के लिए", "फाइल कंटेंट प्राप्त करने के लिए"],
        "answer_en": "To download and install packages",
        "answer_hi": "पैकेज डाउनलोड और इंस्टॉल करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do you implement polymorphism in Go?",
        "question_hi": "Go में पोलीमॉर्फिज्म कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using interfaces", "Using inheritance", "Using structs", "Using packages"],
        "options_hi": ["इंटरफेस का उपयोग करके", "इनहेरिटेंस का उपयोग करके", "स्ट्रक्ट्स का उपयोग करके", "पैकेज का उपयोग करके"],
        "answer_en": "Using interfaces",
        "answer_hi": "इंटरफेस का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of 'recover' function in Go?",
        "question_hi": "Go में 'recover' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To recover from panic", "To recover memory", "To recover files", "To recover network"],
        "options_hi": ["panic से रिकवर करने के लिए", "मेमोरी रिकवर करने के लिए", "फाइल्स रिकवर करने के लिए", "नेटवर्क रिकवर करने के लिए"],
        "answer_en": "To recover from panic",
        "answer_hi": "panic से रिकवर करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How do you write to a file in Go?",
        "question_hi": "Go में फाइल में कैसे लिखते हैं?",
        "options_en": ["Using os package", "Using ioutil package", "Using bufio package", "All of the above"],
        "options_hi": ["os पैकेज का उपयोग करके", "ioutil पैकेज का उपयोग करके", "bufio पैकेज का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is a closure in Go?",
        "question_hi": "Go में क्लोजर क्या है?",
        "options_en": ["Function that references variables from outside its body", "Closed function", "Private function", "Anonymous function"],
        "options_hi": ["फंक्शन जो अपने बॉडी के बाहर के वेरिएबल्स को रेफरेंस करता है", "क्लोज्ड फंक्शन", "प्राइवेट फंक्शन", "अनोनिमस फंक्शन"],
        "answer_en": "Function that references variables from outside its body",
        "answer_hi": "फंक्शन जो अपने बॉडी के बाहर के वेरिएबल्स को रेफरेंस करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How do you implement a web server in Go?",
        "question_hi": "Go में वेब सर्वर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using net/http package", "Using http.ListenAndServe", "Defining handlers", "All of the above"],
        "options_hi": ["net/http पैकेज का उपयोग करके", "http.ListenAndServe का उपयोग करके", "हैंडलर्स डिफाइन करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of 'go build' command?",
        "question_hi": "'go build' कमांड का उद्देश्य क्या है?",
        "options_en": ["To compile Go program", "To run tests", "To format code", "To install dependencies"],
        "options_hi": ["Go प्रोग्राम कंपाइल करने के लिए", "टेस्ट रन करने के लिए", "कोड फॉर्मेट करने के लिए", "डिपेंडेंसी इंस्टॉल करने के लिए"],
        "answer_en": "To compile Go program",
        "answer_hi": "Go प्रोग्राम कंपाइल करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How do you create an anonymous function in Go?",
        "question_hi": "Go में अनोनिमस फंक्शन कैसे बनाते हैं?",
        "options_en": ["func() { }", "function() { }", "anon() { }", "lambda() { }"],
        "options_hi": ["func() { }", "function() { }", "anon() { }", "lambda() { }"],
        "answer_en": "func() { }",
        "answer_hi": "func() { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the zero value for numeric types in Go?",
        "question_hi": "Go में न्यूमेरिक टाइप्स का जीरो वैल्यू क्या है?",
        "options_en": ["0", "nil", "false", ""],
        "options_hi": ["0", "nil", "false", ""],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How do you handle database operations in Go?",
        "question_hi": "Go में डेटाबेस ऑपरेशन्स कैसे हैंडल करते हैं?",
        "options_en": ["Using database/sql package", "Using ORM libraries", "Using driver packages", "All of the above"],
        "options_hi": ["database/sql पैकेज का उपयोग करके", "ORM लाइब्रेरी का उपयोग करके", "ड्राइवर पैकेज का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of 'go test' command?",
        "question_hi": "'go test' कमांड का उद्देश्य क्या है?",
        "options_en": ["To run tests", "To build tests", "To format tests", "To install tests"],
        "options_hi": ["टेस्ट रन करने के लिए", "टेस्ट बिल्ड करने के लिए", "टेस्ट फॉर्मेट करने के लिए", "टेस्ट इंस्टॉल करने के लिए"],
        "answer_en": "To run tests",
        "answer_hi": "टेस्ट रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How do you implement custom sorting in Go?",
        "question_hi": "Go में कस्टम सॉर्टिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement sort.Interface", "Using sort.Slice", "Both A and B", "None of the above"],
        "options_hi": ["sort.Interface इम्प्लीमेंट करके", "sort.Slice का उपयोग करके", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of 'make' function in Go?",
        "question_hi": "Go में 'make' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To allocate and initialize slices, maps, channels", "To create variables", "To make functions", "To make packages"],
        "options_hi": ["स्लाइस, मैप, चैनल अलोकेट और इनिशियलाइज करने के लिए", "वेरिएबल बनाने के लिए", "फंक्शन बनाने के लिए", "पैकेज बनाने के लिए"],
        "answer_en": "To allocate and initialize slices, maps, channels",
        "answer_hi": "स्लाइस, मैप, चैनल अलोकेट और इनिशियलाइज करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you handle HTTP requests in Go?",
        "question_hi": "Go में HTTP रिक्वेस्ट कैसे हैंडल करते हैं?",
        "options_en": ["Using http.HandleFunc", "Implementing http.Handler", "Using routers", "All of the above"],
        "options_hi": ["http.HandleFunc का उपयोग करके", "http.Handler इम्प्लीमेंट करके", "राउटर का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of 'new' function in Go?",
        "question_hi": "Go में 'new' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To allocate memory for types", "To create new variables", "To create new functions", "To create new packages"],
        "options_hi": ["टाइप्स के लिए मेमोरी अलोकेट करने के लिए", "नए वेरिएबल बनाने के लिए", "नए फंक्शन बनाने के लिए", "नए पैकेज बनाने के लिए"],
        "answer_en": "To allocate memory for types",
        "answer_hi": "टाइप्स के लिए मेमोरी अलोकेट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you implement middleware in Go HTTP handlers?",
        "question_hi": "Go HTTP हैंडलर्स में मिडलवेयर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["By wrapping handlers", "Using decorator pattern", "Both A and B", "None of the above"],
        "options_hi": ["हैंडलर्स को रैप करके", "डेकोरेटर पैटर्न का उपयोग करके", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of 'go clean' command?",
        "question_hi": "'go clean' कमांड का उद्देश्य क्या है?",
        "options_en": ["To remove object files", "To clean cache", "To remove binaries", "All of the above"],
        "options_hi": ["ऑब्जेक्ट फाइल्स रिमूव करने के लिए", "कैश क्लीन करने के लिए", "बाइनरी रिमूव करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How do you handle environment variables in Go?",
        "question_hi": "Go में एनवायरनमेंट वेरिएबल्स कैसे हैंडल करते हैं?",
        "options_en": ["Using os package", "os.Getenv()", "os.Setenv()", "All of the above"],
        "options_hi": ["os पैकेज का उपयोग करके", "os.Getenv()", "os.Setenv()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the difference between buffered and unbuffered channels?",
        "question_hi": "बफर्ड और अनबफर्ड चैनल्स में क्या अंतर है?",
        "options_en": ["Buffered has capacity, unbuffered blocks immediately", "Unbuffered has capacity, buffered blocks", "No difference", "Buffered is faster"],
        "options_hi": ["बफर्ड में कैपेसिटी होती है, अनबफर्ड तुरंत ब्लॉक करता है", "अनबफर्ड में कैपेसिटी होती है, बफर्ड ब्लॉक करता है", "कोई अंतर नहीं", "बफर्ड फास्टर है"],
        "answer_en": "Buffered has capacity, unbuffered blocks immediately",
        "answer_hi": "बफर्ड में कैपेसिटी होती है, अनबफर्ड तुरंत ब्लॉक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you implement rate limiting in Go?",
        "question_hi": "Go में रेट लिमिटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using time.Ticker", "Using goroutines and channels", "Using third-party libraries", "All of the above"],
        "options_hi": ["time.Ticker का उपयोग करके", "गोरूटीन और चैनल का उपयोग करके", "थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of 'go doc' command?",
        "question_hi": "'go doc' कमांड का उद्देश्य क्या है?",
        "options_en": ["To show documentation", "To generate docs", "To format docs", "To test docs"],
        "options_hi": ["डॉक्युमेंटेशन दिखाने के लिए", "डॉक्स जेनरेट करने के लिए", "डॉक्स फॉर्मेट करने के लिए", "डॉक्स टेस्ट करने के लिए"],
        "answer_en": "To show documentation",
        "answer_hi": "डॉक्युमेंटेशन दिखाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you implement caching in Go?",
        "question_hi": "Go में कैशिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sync.Map", "Using maps with mutex", "Using third-party caches", "All of the above"],
        "options_hi": ["sync.Map का उपयोग करके", "म्यूटेक्स के साथ मैप का उपयोग करके", "थर्ड-पार्टी कैश का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of 'go list' command?",
        "question_hi": "'go list' कमांड का उद्देश्य क्या है?",
        "options_en": ["ToList packages", "ToList files", "ToList dependencies", "All of the above"],
        "options_hi": ["पैकेज लिस्ट करने के लिए", "फाइल्स लिस्ट करने के लिए", "डिपेंडेंसी लिस्ट करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How do you handle configuration in Go applications?",
        "question_hi": "Go एप्लीकेशन में कॉन्फिगरेशन कैसे हैंडल करते हैं?",
        "options_en": ["Using config files", "Using environment variables", "Using command line flags", "All of the above"],
        "options_hi": ["कॉन्फिग फाइल्स का उपयोग करके", "एनवायरनमेंट वेरिएबल्स का उपयोग करके", "कमांड लाइन फ्लैग्स का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of 'go generate' command?",
        "question_hi": "'go generate' कमांड का उद्देश्य क्या है?",
        "options_en": ["To run code generation tools", "To generate random numbers", "To generate tests", "To generate documentation"],
        "options_hi": ["कोड जेनरेशन टूल्स रन करने के लिए", "रैंडम नंबर जेनरेट करने के लिए", "टेस्ट जेनरेट करने के लिए", "डॉक्युमेंटेशन जेनरेट करने के लिए"],
        "answer_en": "To run code generation tools",
        "answer_hi": "कोड जेनरेशन टूल्स रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you implement logging in Go?",
        "question_hi": "Go में लॉगिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using log package", "Using third-party logging libraries", "Using fmt package", "All of the above"],
        "options_hi": ["log पैकेज का उपयोग करके", "थर्ड-पार्टी लॉगिंग लाइब्रेरी का उपयोग करके", "fmt पैकेज का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of 'go install' command?",
        "question_hi": "'go install' कमांड का उद्देश्य क्या है?",
        "options_en": ["To compile and install packages", "To only compile", "To only install", "To uninstall packages"],
        "options_hi": ["पैकेज कंपाइल और इंस्टॉल करने के लिए", "केवल कंपाइल करने के लिए", "केवल इंस्टॉल करने के लिए", "पैकेज अनइंस्टॉल करने के लिए"],
        "answer_en": "To compile and install packages",
        "answer_hi": "पैकेज कंपाइल और इंस्टॉल करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How do you implement dependency injection in Go?",
        "question_hi": "Go में डिपेंडेंसी इंजेक्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using constructor injection", "Using interface-based design", "Using third-party frameworks", "All of the above"],
        "options_hi": ["कंस्ट्रक्टर इंजेक्शन का उपयोग करके", "इंटरफेस-बेस्ड डिजाइन का उपयोग करके", "थर्ड-पार्टी फ्रेमवर्क का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of 'go work' command?",
        "question_hi": "'go work' कमांड का उद्देश्य क्या है?",
        "options_en": ["For multi-module workspaces", "For work scheduling", "For worker pools", "For work distribution"],
        "options_hi": ["मल्टी-मॉड्यूल वर्कस्पेस के लिए", "वर्क शेड्यूलिंग के लिए", "वर्कर पूल के लिए", "वर्क डिस्ट्रीब्यूशन के लिए"],
        "answer_en": "For multi-module workspaces",
        "answer_hi": "मल्टी-मॉड्यूल वर्कस्पेस के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How do you implement health checks in Go services?",
        "question_hi": "Go सर्विसेज में हेल्थ चेक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using HTTP endpoints", "Using background goroutines", "Using third-party libraries", "All of the above"],
        "options_hi": ["HTTP एंडपॉइंट का उपयोग करके", "बैकग्राउंड गोरूटीन का उपयोग करके", "थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of 'go fix' command?",
        "question_hi": "'go fix' कमांड का उद्देश्य क्या है?",
        "options_en": ["To update code to use new APIs", "To fix bugs", "To fix formatting", "To fix tests"],
        "options_hi": ["नए API का उपयोग करने के लिए कोड अपडेट करने के लिए", "बग फिक्स करने के लिए", "फॉर्मेटिंग फिक्स करने के लिए", "टेस्ट फिक्स करने के लिए"],
        "answer_en": "To update code to use new APIs",
        "answer_hi": "नए API का उपयोग करने के लिए कोड अपडेट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How do you implement circuit breaker pattern in Go?",
        "question_hi": "Go में सर्किट ब्रेकर पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using third-party libraries", "Implementing with channels and goroutines", "Using state machine", "All of the above"],
        "options_hi": ["थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "चैनल और गोरूटीन के साथ इम्प्लीमेंट करके", "स्टेट मशीन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of 'go version' command?",
        "question_hi": "'go version' कमांड का उद्देश्य क्या है?",
        "options_en": ["To show Go version", "To show program version", "To show package version", "To show module version"],
        "options_hi": ["Go वर्जन दिखाने के लिए", "प्रोग्राम वर्जन दिखाने के लिए", "पैकेज वर्जन दिखाने के लिए", "मॉड्यूल वर्जन दिखाने के लिए"],
        "answer_en": "To show Go version",
        "answer_hi": "Go वर्जन दिखाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you implement retry logic in Go?",
        "question_hi": "Go में रिट्राई लॉजिक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using for loop with sleep", "Using exponential backoff", "Using third-party libraries", "All of the above"],
        "options_hi": ["स्लीप के साथ for लूप का उपयोग करके", "एक्सपोनेंशियल बैकऑफ का उपयोग करके", "थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of 'go env' command?",
        "question_hi": "'go env' कमांड का उद्देश्य क्या है?",
        "options_en": ["To show Go environment variables", "To set environment variables", "To unset environment variables", "To test environment"],
        "options_hi": ["Go एनवायरनमेंट वेरिएबल्स दिखाने के लिए", "एनवायरनमेंट वेरिएबल्स सेट करने के लिए", "एनवायरनमेंट वेरिएबल्स अनसेट करने के लिए", "एनवायरनमेंट टेस्ट करने के लिए"],
        "answer_en": "To show Go environment variables",
        "answer_hi": "Go एनवायरनमेंट वेरिएबल्स दिखाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How do you implement graceful shutdown in Go servers?",
        "question_hi": "Go सर्वर्स में ग्रेसफुल शटडाउन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using signal handling", "Using context cancellation", "Using server.Shutdown()", "All of the above"],
        "options_hi": ["सिग्नल हैंडलिंग का उपयोग करके", "कॉन्टेक्स्ट कैंसलेशन का उपयोग करके", "server.Shutdown() का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of 'go tool' command?",
        "question_hi": "'go tool' कमांड का उद्देश्य क्या है?",
        "options_en": ["To run Go tools", "To create tools", "To install tools", "To remove tools"],
        "options_hi": ["Go टूल्स रन करने के लिए", "टूल्स बनाने के लिए", "टूल्स इंस्टॉल करने के लिए", "टूल्स रिमूव करने के लिए"],
        "answer_en": "To run Go tools",
        "answer_hi": "Go टूल्स रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How do you implement pub-sub pattern in Go?",
        "question_hi": "Go में पब-सब पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using channels", "Using third-party libraries", "Using sync package", "All of the above"],
        "options_hi": ["चैनल का उपयोग करके", "थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "sync पैकेज का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of 'go mod init' command?",
        "question_hi": "'go mod init' कमांड का उद्देश्य क्या है?",
        "options_en": ["To initialize a new module", "To initialize project", "To initialize package", "To initialize workspace"],
        "options_hi": ["नया मॉड्यूल इनिशियलाइज करने के लिए", "प्रोजेक्ट इनिशियलाइज करने के लिए", "पैकेज इनिशियलाइज करने के लिए", "वर्कस्पेस इनिशियलाइज करने के लिए"],
        "answer_en": "To initialize a new module",
        "answer_hi": "नया मॉड्यूल इनिशियलाइज करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How do you implement worker pools in Go?",
        "question_hi": "Go में वर्कर पूल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using goroutines and channels", "Using sync.WaitGroup", "Using third-party libraries", "All of the above"],
        "options_hi": ["गोरूटीन और चैनल का उपयोग करके", "sync.WaitGroup का उपयोग करके", "थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of 'go mod tidy' command?",
        "question_hi": "'go mod tidy' कमांड का उद्देश्य क्या है?",
        "options_en": ["To add missing and remove unused modules", "To clean modules", "To format modules", "To test modules"],
        "options_hi": ["मिसिंग मॉड्यूल ऐड और अनयूज्ड मॉड्यूल रिमूव करने के लिए", "मॉड्यूल क्लीन करने के लिए", "मॉड्यूल फॉर्मेट करने के लिए", "मॉड्यूल टेस्ट करने के लिए"],
        "answer_en": "To add missing and remove unused modules",
        "answer_hi": "मिसिंग मॉड्यूल ऐड और अनयूज्ड मॉड्यूल रिमूव करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How do you implement feature flags in Go?",
        "question_hi": "Go में फीचर फ्लैग्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using configuration", "Using environment variables", "Using third-party services", "All of the above"],
        "options_hi": ["कॉन्फिगरेशन का उपयोग करके", "एनवायरनमेंट वेरिएबल्स का उपयोग करके", "थर्ड-पार्टी सर्विस का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of 'go mod download' command?",
        "question_hi": "'go mod download' कमांड का उद्देश्य क्या है?",
        "options_en": ["To download modules to cache", "To download source code", "To download binaries", "To download documentation"],
        "options_hi": ["मॉड्यूल कैश में डाउनलोड करने के लिए", "सोर्स कोड डाउनलोड करने के लिए", "बाइनरी डाउनलोड करने के लिए", "डॉक्युमेंटेशन डाउनलोड करने के लिए"],
        "answer_en": "To download modules to cache",
        "answer_hi": "मॉड्यूल कैश में डाउनलोड करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How do you implement distributed tracing in Go?",
        "question_hi": "Go में डिस्ट्रीब्यूटेड ट्रेसिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using OpenTelemetry", "Using third-party APM tools", "Using context propagation", "All of the above"],
        "options_hi": ["OpenTelemetry का उपयोग करके", "थर्ड-पार्टी APM टूल का उपयोग करके", "कॉन्टेक्स्ट प्रोपेगेशन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of 'go mod verify' command?",
        "question_hi": "'go mod verify' कमांड का उद्देश्य क्या है?",
        "options_en": ["To verify module dependencies", "To verify code", "To verify tests", "To verify format"],
        "options_hi": ["मॉड्यूल डिपेंडेंसी वेरिफाई करने के लिए", "कोड वेरिफाई करने के लिए", "टेस्ट वेरिफाई करने के लिए", "फॉर्मेट वेरिफाई करने के लिए"],
        "answer_en": "To verify module dependencies",
        "answer_hi": "मॉड्यूल डिपेंडेंसी वेरिफाई करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How do you implement API versioning in Go?",
        "question_hi": "Go में API वर्जनिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using URL paths", "Using headers", "Using query parameters", "All of the above"],
        "options_hi": ["URL पाथ का उपयोग करके", "हेडर का उपयोग करके", "क्वेरी पैरामीटर का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of 'go mod graph' command?",
        "question_hi": "'go mod graph' कमांड का उद्देश्य क्या है?",
        "options_en": ["To print module requirement graph", "To graph performance", "To graph dependencies", "To graph code structure"],
        "options_hi": ["मॉड्यूल रिक्वायरमेंट ग्राफ प्रिंट करने के लिए", "परफॉर्मेंस ग्राफ करने के लिए", "डिपेंडेंसी ग्राफ करने के लिए", "कोड स्ट्रक्चर ग्राफ करने के लिए"],
        "answer_en": "To print module requirement graph",
        "answer_hi": "मॉड्यूल रिक्वायरमेंट ग्राफ प्रिंट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How do you implement API documentation in Go?",
        "question_hi": "Go में API डॉक्युमेंटेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Go comments", "Using Swagger/OpenAPI", "Using third-party tools", "All of the above"],
        "options_hi": ["Go कमेंट्स का उपयोग करके", "Swagger/OpenAPI का उपयोग करके", "थर्ड-पार्टी टूल का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of 'go mod why' command?",
        "question_hi": "'go mod why' कमांड का उद्देश्य क्या है?",
        "options_en": ["To explain why packages or modules are needed", "To ask why", "To question dependencies", "To debug modules"],
        "options_hi": ["एक्सप्लेन करने के लिए कि पैकेज या मॉड्यूल क्यों जरूरी हैं", "क्यों पूछने के लिए", "डिपेंडेंसी क्वेश्चन करने के लिए", "मॉड्यूल डीबग करने के लिए"],
        "answer_en": "To explain why packages or modules are needed",
        "answer_hi": "एक्सप्लेन करने के लिए कि पैकेज या मॉड्यूल क्यों जरूरी हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How do you implement data validation in Go?",
        "question_hi": "Go में डेटा वैलिडेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using struct tags", "Using validation libraries", "Manual validation", "All of the above"],
        "options_hi": ["स्ट्रक्ट टैग का उपयोग करके", "वैलिडेशन लाइब्रेरी का उपयोग करके", "मैनुअल वैलिडेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of 'go mod vendor' command?",
        "question_hi": "'go mod vendor' कमांड का उद्देश्य क्या है?",
        "options_en": ["To create vendor directory", "To vendor dependencies", "To include dependencies in project", "All of the above"],
        "options_hi": ["वेंडर डायरेक्टरी बनाने के लिए", "डिपेंडेंसी वेंडर करने के लिए", "प्रोजेक्ट में डिपेंडेंसी इनक्लूड करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you implement API authentication in Go?",
        "question_hi": "Go में API ऑथेंटिकेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using JWT tokens", "Using OAuth", "Using API keys", "All of the above"],
        "options_hi": ["JWT टोकन का उपयोग करके", "OAuth का उपयोग करके", "API की का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of 'go mod edit' command?",
        "question_hi": "'go mod edit' कमांड का उद्देश्य क्या है?",
        "options_en": ["To edit go.mod file", "To edit modules", "To edit dependencies", "To edit code"],
        "options_hi": ["go.mod फाइल एडिट करने के लिए", "मॉड्यूल एडिट करने के लिए", "डिपेंडेंसी एडिट करने के लिए", "कोड एडिट करने के लिए"],
        "answer_en": "To edit go.mod file",
        "answer_hi": "go.mod फाइल एडिट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you implement background jobs in Go?",
        "question_hi": "Go में बैकग्राउंड जॉब्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using goroutines", "Using cron jobs", "Using message queues", "All of the above"],
        "options_hi": ["गोरूटीन का उपयोग करके", "क्रॉन जॉब का उपयोग करके", "मैसेज क्यू का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of 'go mod init' command?",
        "question_hi": "'go mod init' कमांड का उद्देश्य क्या है?",
        "options_en": ["To initialize new module in current directory", "To initialize project", "To initialize workspace", "To initialize package"],
        "options_hi": ["करंट डायरेक्टरी में नया मॉड्यूल इनिशियलाइज करने के लिए", "प्रोजेक्ट इनिशियलाइज करने के लिए", "वर्कस्पेस इनिशियलाइज करने के लिए", "पैकेज इनिशियलाइज करने के लिए"],
        "answer_en": "To initialize new module in current directory",
        "answer_hi": "करंट डायरेक्टरी में नया मॉड्यूल इनिशियलाइज करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How do you implement configuration management in Go?",
        "question_hi": "Go में कॉन्फिगरेशन मैनेजमेंट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Viper library", "Using environment variables", "Using config files", "All of the above"],
        "options_hi": ["Viper लाइब्रेरी का उपयोग करके", "एनवायरनमेंट वेरिएबल्स का उपयोग करके", "कॉन्फिग फाइल्स का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of 'go test -v' command?",
        "question_hi": "'go test -v' कमांड का उद्देश्य क्या है?",
        "options_en": ["To run tests in verbose mode", "To validate tests", "To verify tests", "To view tests"],
        "options_hi": ["वर्बोस मोड में टेस्ट रन करने के लिए", "टेस्ट वैलिडेट करने के लिए", "टेस्ट वेरिफाई करने के लिए", "टेस्ट व्यू करने के लिए"],
        "answer_en": "To run tests in verbose mode",
        "answer_hi": "वर्बोस मोड में टेस्ट रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you implement database migrations in Go?",
        "question_hi": "Go में डेटाबेस माइग्रेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using migration libraries", "Using SQL files", "Using ORM tools", "All of the above"],
        "options_hi": ["माइग्रेशन लाइब्रेरी का उपयोग करके", "SQL फाइल्स का उपयोग करके", "ORM टूल का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of 'go test -cover' command?",
        "question_hi": "'go test -cover' कमांड का उद्देश्य क्या है?",
        "options_en": ["To measure code coverage", "To cover tests", "To cover code", "To cover packages"],
        "options_hi": ["कोड कवरेज मापने के लिए", "टेस्ट कवर करने के लिए", "कोड कवर करने के लिए", "पैकेज कवर करने के लिए"],
        "answer_en": "To measure code coverage",
        "answer_hi": "कोड कवरेज मापने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you implement API rate limiting in Go?",
        "question_hi": "Go में API रेट लिमिटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using token bucket algorithm", "Using fixed window", "Using sliding window", "All of the above"],
        "options_hi": ["टोकन बकेट अल्गोरिदम का उपयोग करके", "फिक्स्ड विंडो का उपयोग करके", "स्लाइडिंग विंडो का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of 'go test -race' command?",
        "question_hi": "'go test -race' कमांड का उद्देश्य क्या है?",
        "options_en": ["To detect race conditions", "To race tests", "To test racing", "To speed up tests"],
        "options_hi": ["रेस कंडीशन डिटेक्ट करने के लिए", "टेस्ट रेस करने के लिए", "रेसिंग टेस्ट करने के लिए", "टेस्ट स्पीड अप करने के लिए"],
        "answer_en": "To detect race conditions",
        "answer_hi": "रेस कंडीशन डिटेक्ट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How do you implement service discovery in Go?",
        "question_hi": "Go में सर्विस डिस्कवरी कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Consul", "Using etcd", "Using Kubernetes services", "All of the above"],
        "options_hi": ["Consul का उपयोग करके", "etcd का उपयोग करके", "Kubernetes सर्विस का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of 'go test -bench' command?",
        "question_hi": "'go test -bench' कमांड का उद्देश्य क्या है?",
        "options_en": ["To run benchmarks", "To bench tests", "To test benches", "To optimize tests"],
        "options_hi": ["बेंचमार्क रन करने के लिए", "टेस्ट बेंच करने के लिए", "बेंच टेस्ट करने के लिए", "टेस्ट ऑप्टिमाइज करने के लिए"],
        "answer_en": "To run benchmarks",
        "answer_hi": "बेंचमार्क रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do you implement message queues in Go?",
        "question_hi": "Go में मैसेज क्यू कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using channel patterns", "Using RabbitMQ", "Using Kafka", "All of the above"],
        "options_hi": ["चैनल पैटर्न का उपयोग करके", "RabbitMQ का उपयोग करके", "Kafka का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of 'go test -run' command?",
        "question_hi": "'go test -run' कमांड का उद्देश्य क्या है?",
        "options_en": ["To run specific tests", "To run all tests", "To run random tests", "To run failed tests"],
        "options_hi": ["स्पेसिफिक टेस्ट रन करने के लिए", "सभी टेस्ट रन करने के लिए", "रैंडम टेस्ट रन करने के लिए", "फेल्ड टेस्ट रन करने के लिए"],
        "answer_en": "To run specific tests",
        "answer_hi": "स्पेसिफिक टेस्ट रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How do you implement monitoring and metrics in Go?",
        "question_hi": "Go में मॉनिटरिंग और मेट्रिक्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Prometheus", "Using metrics libraries", "Using custom metrics", "All of the above"],
        "options_hi": ["Prometheus का उपयोग करके", "मेट्रिक्स लाइब्रेरी का उपयोग करके", "कस्टम मेट्रिक्स का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
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