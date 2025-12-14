const questions =[
    {
        "num": 1,
        "question_en": "What is the primary purpose of goroutines in Go?",
        "question_hi": "Go में गोरूटीन्स का प्राथमिक उद्देश्य क्या है?",
        "options_en": ["Concurrent execution", "Memory management", "Error handling", "Package management"],
        "options_hi": ["कंकरेंट एक्जीक्यूशन", "मेमोरी मैनेजमेंट", "एरर हैंडलिंग", "पैकेज मैनेजमेंट"],
        "answer_en": "Concurrent execution",
        "answer_hi": "कंकरेंट एक्जीक्यूशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How do you declare a variable with type inference in Go?",
        "question_hi": "Go में टाइप इनफेरेंस के साथ वेरिएबल कैसे डिक्लेयर करते हैं?",
        "options_en": ["x := 10", "var x = 10", "Both A and B", "None of the above"],
        "options_hi": ["x := 10", "var x = 10", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the zero value for an integer in Go?",
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
        "num": 5,
        "question_en": "What does the 'defer' keyword do in Go?",
        "question_hi": "Go में 'defer' कीवर्ड क्या करता है?",
        "options_en": ["Delays function execution until surrounding function returns", "Stops program execution", "Defers variable declaration", "Imports packages"],
        "options_hi": ["आसपास के फंक्शन के रिटर्न होने तक फंक्शन एक्जीक्यूशन डिले करता है", "प्रोग्राम एक्जीक्यूशन रोकता है", "वेरिएबल डिक्लेरेशन डिफर करता है", "पैकेज इम्पोर्ट करता है"],
        "answer_en": "Delays function execution until surrounding function returns",
        "answer_hi": "आसपास के फंक्शन के रिटर्न होने तक फंक्शन एक्जीक्यूशन डिले करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you create a slice with specific length and capacity?",
        "question_hi": "स्पेसिफिक लेंथ और कैपेसिटी के साथ स्लाइस कैसे बनाते हैं?",
        "options_en": ["make([]int, 5, 10)", "[]int{5, 10}", "new([]int, 5, 10)", "slice(5, 10)"],
        "options_hi": ["make([]int, 5, 10)", "[]int{5, 10}", "new([]int, 5, 10)", "slice(5, 10)"],
        "answer_en": "make([]int, 5, 10)",
        "answer_hi": "make([]int, 5, 10)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the main purpose of channels in Go?",
        "question_hi": "Go में चैनल्स का मुख्य उद्देश्य क्या है?",
        "options_en": ["Communication between goroutines", "File handling", "Error propagation", "Memory allocation"],
        "options_hi": ["गोरूटीन्स के बीच कम्युनिकेशन", "फाइल हैंडलिंग", "एरर प्रोपेगेशन", "मेमोरी अलोकेशन"],
        "answer_en": "Communication between goroutines",
        "answer_hi": "गोरूटीन्स के बीच कम्युनिकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you import multiple packages in Go?",
        "question_hi": "Go में मल्टीपल पैकेज कैसे इम्पोर्ट करते हैं?",
        "options_en": ["import ( \"fmt\" \"os\" )", "import \"fmt\", \"os\"", "import multiple \"fmt\" \"os\"", "import \"fmt\" + \"os\""],
        "options_hi": ["import ( \"fmt\" \"os\" )", "import \"fmt\", \"os\"", "import multiple \"fmt\" \"os\"", "import \"fmt\" + \"os\""],
        "answer_en": "import ( \"fmt\" \"os\" )",
        "answer_hi": "import ( \"fmt\" \"os\" )",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the entry point function of a Go program?",
        "question_hi": "Go प्रोग्राम का एंट्री पॉइंट फंक्शन क्या है?",
        "options_en": ["main()", "start()", "init()", "run()"],
        "options_hi": ["main()", "start()", "init()", "run()"],
        "answer_en": "main()",
        "answer_hi": "main()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you check the type of a variable at runtime?",
        "question_hi": "रनटाइम पर वेरिएबल का टाइप कैसे चेक करते हैं?",
        "options_en": ["Using reflect package", "typeOf operator", "typeof function", "checkType()"],
        "options_hi": ["reflect पैकेज का उपयोग करके", "typeOf ऑपरेटर", "typeof फंक्शन", "checkType()"],
        "answer_en": "Using reflect package",
        "answer_hi": "reflect पैकेज का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the primary purpose of interfaces in Go?",
        "question_hi": "Go में इंटरफेस का प्राथमिक उद्देश्य क्या है?",
        "options_en": ["To define method signatures", "For inheritance", "For memory optimization", "For error handling"],
        "options_hi": ["मेथड सिग्नेचर डिफाइन करने के लिए", "इनहेरिटेंस के लिए", "मेमोरी ऑप्टिमाइजेशन के लिए", "एरर हैंडलिंग के लिए"],
        "answer_en": "To define method signatures",
        "answer_hi": "मेथड सिग्नेचर डिफाइन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the recommended way to handle errors in Go?",
        "question_hi": "Go में एरर हैंडलिंग का रिकमेंडेड तरीका क्या है?",
        "options_en": ["Return error from functions", "Use try-catch blocks", "Use global error variables", "Ignore errors"],
        "options_hi": ["फंक्शन से एरर रिटर्न करें", "try-catch ब्लॉक्स का उपयोग करें", "ग्लोबल एरर वेरिएबल्स का उपयोग करें", "एरर इग्नोर करें"],
        "answer_en": "Return error from functions",
        "answer_hi": "फंक्शन से एरर रिटर्न करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How do you define a struct in Go?",
        "question_hi": "Go में स्ट्रक्ट कैसे डिफाइन करते हैं?",
        "options_en": ["type Person struct { Name string }", "struct Person { string Name }", "Person struct { Name string }", "define Person struct { Name string }"],
        "options_hi": ["type Person struct { Name string }", "struct Person { string Name }", "Person struct { Name string }", "define Person struct { Name string }"],
        "answer_en": "type Person struct { Name string }",
        "answer_hi": "type Person struct { Name string }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the correct way to iterate over a slice?",
        "question_hi": "स्लाइस पर इटरेट करने का सही तरीका क्या है?",
        "options_en": ["for index, value := range slice", "for i = 0; i < len(slice); i++", "Both A and B", "None of the above"],
        "options_hi": ["for index, value := range slice", "for i = 0; i < len(slice); i++", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of the 'go fmt' command?",
        "question_hi": "'go fmt' कमांड का उद्देश्य क्या है?",
        "options_en": ["To format Go source code", "To run tests", "To build binaries", "To install packages"],
        "options_hi": ["Go सोर्स कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "बाइनरी बिल्ड करने के लिए", "पैकेज इंस्टॉल करने के लिए"],
        "answer_en": "To format Go source code",
        "answer_hi": "Go सोर्स कोड फॉर्मेट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you create a map with string keys and integer values?",
        "question_hi": "स्ट्रिंग की और इंटीजर वैल्यू वाला मैप कैसे बनाते हैं?",
        "options_en": ["make(map[string]int)", "map[string]int{}", "Both A and B", "new(map[string]int)"],
        "options_hi": ["make(map[string]int)", "map[string]int{}", "A और B दोनों", "new(map[string]int)"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the key difference between slices and arrays?",
        "question_hi": "स्लाइस और ऐरे में मुख्य अंतर क्या है?",
        "options_en": ["Slices are dynamic, arrays have fixed size", "Arrays are dynamic, slices have fixed size", "No difference", "Slices are faster"],
        "options_hi": ["स्लाइस डायनामिक हैं, ऐरे फिक्स्ड साइज के हैं", "ऐरे डायनामिक हैं, स्लाइस फिक्स्ड साइज के हैं", "कोई अंतर नहीं", "स्लाइस फास्टर हैं"],
        "answer_en": "Slices are dynamic, arrays have fixed size",
        "answer_hi": "स्लाइस डायनामिक हैं, ऐरे फिक्स्ड साइज के हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the purpose of the 'context' package?",
        "question_hi": "'context' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For request-scoped values and cancellation", "For database context", "For file context", "For logging context"],
        "options_hi": ["रिक्वेस्ट-स्कोप्ड वैल्यूज और कैंसलेशन के लिए", "डेटाबेस कॉन्टेक्स्ट के लिए", "फाइल कॉन्टेक्स्ट के लिए", "लॉगिंग कॉन्टेक्स्ट के लिए"],
        "answer_en": "For request-scoped values and cancellation",
        "answer_hi": "रिक्वेस्ट-स्कोप्ड वैल्यूज और कैंसलेशन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "How do you write unit tests in Go?",
        "question_hi": "Go में यूनिट टेस्ट कैसे लिखते हैं?",
        "options_en": ["Create _test.go files with Test functions", "Use testing package", "Both A and B", "Use unittest package"],
        "options_hi": ["Test फंक्शन के साथ _test.go फाइल्स बनाएं", "testing पैकेज का उपयोग करें", "A और B दोनों", "unittest पैकेज का उपयोग करें"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is a pointer in Go?",
        "question_hi": "Go में पॉइंटर क्या है?",
        "options_en": ["Variable that stores memory address", "Function that points to data", "Package for memory management", "Type for references"],
        "options_hi": ["वेरिएबल जो मेमोरी एड्रेस स्टोर करता है", "डेटा को पॉइंट करने वाला फंक्शन", "मेमोरी मैनेजमेंट के लिए पैकेज", "रिफरेन्स के लिए टाइप"],
        "answer_en": "Variable that stores memory address",
        "answer_hi": "वेरिएबल जो मेमोरी एड्रेस स्टोर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "How do you convert a string to integer?",
        "question_hi": "स्ट्रिंग को इंटीजर में कैसे कन्वर्ट करते हैं?",
        "options_en": ["strconv.Atoi()", "int.Parse()", "string.ToInt()", "convert.Int()"],
        "options_hi": ["strconv.Atoi()", "int.Parse()", "string.ToInt()", "convert.Int()"],
        "answer_en": "strconv.Atoi()",
        "answer_hi": "strconv.Atoi()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the purpose of 'iota' in Go?",
        "question_hi": "Go में 'iota' का उद्देश्य क्या है?",
        "options_en": ["For enumerated constants", "For iteration counting", "For error codes", "For logging levels"],
        "options_hi": ["एन्युमरेटेड कॉन्स्टेंट्स के लिए", "इटरेशन काउंटिंग के लिए", "एरर कोड के लिए", "लॉगिंग लेवल के लिए"],
        "answer_en": "For enumerated constants",
        "answer_hi": "एन्युमरेटेड कॉन्स्टेंट्स के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "How do you handle JSON marshaling in Go?",
        "question_hi": "Go में JSON मार्शलिंग कैसे हैंडल करते हैं?",
        "options_en": ["json.Marshal()", "encoding/json package", "Both A and B", "json.Encode()"],
        "options_hi": ["json.Marshal()", "encoding/json पैकेज", "A और B दोनों", "json.Encode()"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the purpose of 'go vet' command?",
        "question_hi": "'go vet' कमांड का उद्देश्य क्या है?",
        "options_en": ["To report suspicious code constructs", "To format code", "To run tests", "To check dependencies"],
        "options_hi": ["सस्पिशियस कोड कंस्ट्रक्ट्स रिपोर्ट करने के लिए", "कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "डिपेंडेंसी चेक करने के लिए"],
        "answer_en": "To report suspicious code constructs",
        "answer_hi": "सस्पिशियस कोड कंस्ट्रक्ट्स रिपोर्ट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "How do you implement concurrency patterns?",
        "question_hi": "कंकरेंसी पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using goroutines and channels", "Using sync package primitives", "Using context package", "All of the above"],
        "options_hi": ["गोरूटीन और चैनल का उपयोग करके", "sync पैकेज प्रिमिटिव्स का उपयोग करके", "context पैकेज का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the difference between := and = operators?",
        "question_hi": ":= और = ऑपरेटर्स में क्या अंतर है?",
        "options_en": [":= declares and assigns, = only assigns", "= declares and assigns, := only assigns", "No difference", ":= is for constants"],
        "options_hi": [":= डिक्लेयर और असाइन करता है, = केवल असाइन करता है", "= डिक्लेयर और असाइन करता है, := केवल असाइन करता है", "कोई अंतर नहीं", ":= कॉन्स्टेंट्स के लिए है"],
        "answer_en": ":= declares and assigns, = only assigns",
        "answer_hi": ":= डिक्लेयर और असाइन करता है, = केवल असाइन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "How do you handle timeouts in concurrent operations?",
        "question_hi": "कंकरेंट ऑपरेशन्स में टाइमआउट कैसे हैंडल करते हैं?",
        "options_en": ["context.WithTimeout", "time.After", "select statement with time.After", "All of the above"],
        "options_hi": ["context.WithTimeout", "time.After", "time.After के साथ select स्टेटमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the purpose of 'go run' command?",
        "question_hi": "'go run' कमांड का उद्देश्य क्या है?",
        "options_en": ["To compile and run Go program", "To only compile", "To only run", "To run tests"],
        "options_hi": ["Go प्रोग्राम कंपाइल और रन करने के लिए", "केवल कंपाइल करने के लिए", "केवल रन करने के लिए", "टेस्ट रन करने के लिए"],
        "answer_en": "To compile and run Go program",
        "answer_hi": "Go प्रोग्राम कंपाइल और रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How do you define methods on structs?",
        "question_hi": "स्ट्रक्ट्स पर मेथड्स कैसे डिफाइन करते हैं?",
        "options_en": ["func (s Struct) Method()", "func Method(s Struct)", "struct.Method()", "method Struct()"],
        "options_hi": ["func (s Struct) Method()", "func Method(s Struct)", "struct.Method()", "method Struct()"],
        "answer_en": "func (s Struct) Method()",
        "answer_hi": "func (s Struct) Method()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the zero value for boolean type?",
        "question_hi": "बूलियन टाइप का जीरो वैल्यू क्या है?",
        "options_en": ["false", "true", "0", "nil"],
        "options_hi": ["false", "true", "0", "nil"],
        "answer_en": "false",
        "answer_hi": "false",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "How do you read command line arguments?",
        "question_hi": "कमांड लाइन आर्गुमेंट्स कैसे पढ़ते हैं?",
        "options_en": ["os.Args", "flag package", "Both A and B", "args package"],
        "options_hi": ["os.Args", "flag पैकेज", "A और B दोनों", "args पैकेज"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the purpose of 'go get' command?",
        "question_hi": "'go get' कमांड का उद्देश्य क्या है?",
        "options_en": ["To download and install packages", "To get variable values", "To fetch user input", "To retrieve data"],
        "options_hi": ["पैकेज डाउनलोड और इंस्टॉल करने के लिए", "वेरिएबल वैल्यूज प्राप्त करने के लिए", "यूजर इनपुट फेच करने के लिए", "डेटा रिट्रीव करने के लिए"],
        "answer_en": "To download and install packages",
        "answer_hi": "पैकेज डाउनलोड और इंस्टॉल करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "How do you implement polymorphism in Go?",
        "question_hi": "Go में पोलीमॉर्फिज्म कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using interfaces", "Using inheritance", "Using struct embedding", "Using method overloading"],
        "options_hi": ["इंटरफेस का उपयोग करके", "इनहेरिटेंस का उपयोग करके", "स्ट्रक्ट एम्बेडिंग का उपयोग करके", "मेथड ओवरलोडिंग का उपयोग करके"],
        "answer_en": "Using interfaces",
        "answer_hi": "इंटरफेस का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the purpose of 'recover' function?",
        "question_hi": "'recover' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To regain control after panic", "To recover memory", "To restore state", "To recover files"],
        "options_hi": ["पैनिक के बाद कंट्रोल वापस पाने के लिए", "मेमोरी रिकवर करने के लिए", "स्टेट रिस्टोर करने के लिए", "फाइल्स रिकवर करने के लिए"],
        "answer_en": "To regain control after panic",
        "answer_hi": "पैनिक के बाद कंट्रोल वापस पाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "How do you write to files in Go?",
        "question_hi": "Go में फाइल्स में कैसे लिखते हैं?",
        "options_en": ["Using os package", "Using ioutil package", "Using bufio package", "All of the above"],
        "options_hi": ["os पैकेज का उपयोग करके", "ioutil पैकेज का उपयोग करके", "bufio पैकेज का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is a closure in Go?",
        "question_hi": "Go में क्लोजर क्या है?",
        "options_en": ["Function that references variables from outer scope", "Closed function", "Private function", "Anonymous function only"],
        "options_hi": ["फंक्शन जो आउटर स्कोप के वेरिएबल्स को रेफर करता है", "क्लोज्ड फंक्शन", "प्राइवेट फंक्शन", "केवल अनोनिमस फंक्शन"],
        "answer_en": "Function that references variables from outer scope",
        "answer_hi": "फंक्शन जो आउटर स्कोप के वेरिएबल्स को रेफर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How do you implement a web server?",
        "question_hi": "वेब सर्वर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using net/http package", "http.ListenAndServe", "Defining handlers", "All of the above"],
        "options_hi": ["net/http पैकेज का उपयोग करके", "http.ListenAndServe", "हैंडलर्स डिफाइन करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the purpose of 'go build' command?",
        "question_hi": "'go build' कमांड का उद्देश्य क्या है?",
        "options_en": ["To compile Go program", "To run tests", "To format code", "To install packages"],
        "options_hi": ["Go प्रोग्राम कंपाइल करने के लिए", "टेस्ट रन करने के लिए", "कोड फॉर्मेट करने के लिए", "पैकेज इंस्टॉल करने के लिए"],
        "answer_en": "To compile Go program",
        "answer_hi": "Go प्रोग्राम कंपाइल करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "How do you create anonymous functions?",
        "question_hi": "अनोनिमस फंक्शन्स कैसे बनाते हैं?",
        "options_en": ["func() { }", "function() { }", "anon() { }", "lambda() { }"],
        "options_hi": ["func() { }", "function() { }", "anon() { }", "lambda() { }"],
        "answer_en": "func() { }",
        "answer_hi": "func() { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the zero value for numeric types?",
        "question_hi": "न्यूमेरिक टाइप्स का जीरो वैल्यू क्या है?",
        "options_en": ["0", "nil", "false", "0.0"],
        "options_hi": ["0", "nil", "false", "0.0"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How do you handle database operations?",
        "question_hi": "डेटाबेस ऑपरेशन्स कैसे हैंडल करते हैं?",
        "options_en": ["Using database/sql package", "Using ORM libraries", "Using driver packages", "All of the above"],
        "options_hi": ["database/sql पैकेज का उपयोग करके", "ORM लाइब्रेरी का उपयोग करके", "ड्राइवर पैकेज का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the purpose of 'go test' command?",
        "question_hi": "'go test' कमांड का उद्देश्य क्या है?",
        "options_en": ["To run tests", "To build tests", "To format tests", "To test performance"],
        "options_hi": ["टेस्ट रन करने के लिए", "टेस्ट बिल्ड करने के लिए", "टेस्ट फॉर्मेट करने के लिए", "परफॉर्मेंस टेस्ट करने के लिए"],
        "answer_en": "To run tests",
        "answer_hi": "टेस्ट रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "How do you implement custom sorting?",
        "question_hi": "कस्टम सॉर्टिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement sort.Interface", "Using sort.Slice", "Both A and B", "Using sort.Custom"],
        "options_hi": ["sort.Interface इम्प्लीमेंट करके", "sort.Slice का उपयोग करके", "A और B दोनों", "sort.Custom का उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the purpose of 'make' function?",
        "question_hi": "'make' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To allocate and initialize slices, maps, channels", "To create variables", "To make functions", "To allocate memory"],
        "options_hi": ["स्लाइस, मैप, चैनल अलोकेट और इनिशियलाइज करने के लिए", "वेरिएबल बनाने के लिए", "फंक्शन बनाने के लिए", "मेमोरी अलोकेट करने के लिए"],
        "answer_en": "To allocate and initialize slices, maps, channels",
        "answer_hi": "स्लाइस, मैप, चैनल अलोकेट और इनिशियलाइज करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How do you handle HTTP requests?",
        "question_hi": "HTTP रिक्वेस्ट कैसे हैंडल करते हैं?",
        "options_en": ["Using http.HandleFunc", "Implementing http.Handler", "Using routers", "All of the above"],
        "options_hi": ["http.HandleFunc का उपयोग करके", "http.Handler इम्प्लीमेंट करके", "राउटर का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the purpose of 'new' function?",
        "question_hi": "'new' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To allocate memory for types", "To create new variables", "To initialize values", "To create instances"],
        "options_hi": ["टाइप्स के लिए मेमोरी अलोकेट करने के लिए", "नए वेरिएबल बनाने के लिए", "वैल्यूज इनिशियलाइज करने के लिए", "इंस्टेंस बनाने के लिए"],
        "answer_en": "To allocate memory for types",
        "answer_hi": "टाइप्स के लिए मेमोरी अलोकेट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "How do you implement middleware?",
        "question_hi": "मिडलवेयर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["By wrapping handlers", "Using decorator pattern", "Both A and B", "Using middleware package"],
        "options_hi": ["हैंडलर्स को रैप करके", "डेकोरेटर पैटर्न का उपयोग करके", "A और B दोनों", "middleware पैकेज का उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the purpose of 'go clean' command?",
        "question_hi": "'go clean' कमांड का उद्देश्य क्या है?",
        "options_en": ["To remove object files and cached data", "To clean code", "To remove dependencies", "To clean workspace"],
        "options_hi": ["ऑब्जेक्ट फाइल्स और कैश्ड डेटा रिमूव करने के लिए", "कोड क्लीन करने के लिए", "डिपेंडेंसी रिमूव करने के लिए", "वर्कस्पेस क्लीन करने के लिए"],
        "answer_en": "To remove object files and cached data",
        "answer_hi": "ऑब्जेक्ट फाइल्स और कैश्ड डेटा रिमूव करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How do you handle environment variables?",
        "question_hi": "एनवायरनमेंट वेरिएबल्स कैसे हैंडल करते हैं?",
        "options_en": ["os.Getenv()", "os.LookupEnv()", "os.Setenv()", "All of the above"],
        "options_hi": ["os.Getenv()", "os.LookupEnv()", "os.Setenv()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the difference between buffered and unbuffered channels?",
        "question_hi": "बफर्ड और अनबफर्ड चैनल्स में क्या अंतर है?",
        "options_en": ["Buffered channels have capacity, unbuffered block immediately", "Unbuffered have capacity, buffered block", "No difference", "Buffered are faster"],
        "options_hi": ["बफर्ड चैनल्स में कैपेसिटी होती है, अनबफर्ड तुरंत ब्लॉक करते हैं", "अनबफर्ड में कैपेसिटी होती है, बफर्ड ब्लॉक करते हैं", "कोई अंतर नहीं", "बफर्ड फास्टर हैं"],
        "answer_en": "Buffered channels have capacity, unbuffered block immediately",
        "answer_hi": "बफर्ड चैनल्स में कैपेसिटी होती है, अनबबफर्ड तुरंत ब्लॉक करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "How do you implement rate limiting?",
        "question_hi": "रेट लिमिटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using token bucket algorithm", "Using time.Ticker", "Using third-party libraries", "All of the above"],
        "options_hi": ["टोकन बकेट अल्गोरिदम का उपयोग करके", "time.Ticker का उपयोग करके", "थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the purpose of 'go doc' command?",
        "question_hi": "'go doc' कमांड का उद्देश्य क्या है?",
        "options_en": ["To show documentation for packages and symbols", "To generate docs", "To format documentation", "To test documentation"],
        "options_hi": ["पैकेज और सिंबल के लिए डॉक्युमेंटेशन दिखाने के लिए", "डॉक्स जेनरेट करने के लिए", "डॉक्युमेंटेशन फॉर्मेट करने के लिए", "डॉक्युमेंटेशन टेस्ट करने के लिए"],
        "answer_en": "To show documentation for packages and symbols",
        "answer_hi": "पैकेज और सिंबल के लिए डॉक्युमेंटेशन दिखाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "How do you implement caching?",
        "question_hi": "कैशिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sync.Map", "Using maps with mutex", "Using third-party caches", "All of the above"],
        "options_hi": ["sync.Map का उपयोग करके", "म्यूटेक्स के साथ मैप का उपयोग करके", "थर्ड-पार्टी कैश का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the purpose of 'go list' command?",
        "question_hi": "'go list' कमांड का उद्देश्य क्या है?",
        "options_en": ["ToList packages and dependencies", "ToList files", "ToList modules", "All of the above"],
        "options_hi": ["पैकेज और डिपेंडेंसी लिस्ट करने के लिए", "फाइल्स लिस्ट करने के लिए", "मॉड्यूल लिस्ट करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "How do you handle configuration?",
        "question_hi": "कॉन्फिगरेशन कैसे हैंडल करते हैं?",
        "options_en": ["Using config files", "Using environment variables", "Using command line flags", "All of the above"],
        "options_hi": ["कॉन्फिग फाइल्स का उपयोग करके", "एनवायरनमेंट वेरिएबल्स का उपयोग करके", "कमांड लाइन फ्लैग्स का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the purpose of 'go generate' command?",
        "question_hi": "'go generate' कमांड का उद्देश्य क्या है?",
        "options_en": ["To run code generation tools", "To generate random data", "To generate tests", "To generate documentation"],
        "options_hi": ["कोड जेनरेशन टूल्स रन करने के लिए", "रैंडम डेटा जेनरेट करने के लिए", "टेस्ट जेनरेट करने के लिए", "डॉक्युमेंटेशन जेनरेट करने के लिए"],
        "answer_en": "To run code generation tools",
        "answer_hi": "कोड जेनरेशन टूल्स रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How do you implement logging?",
        "question_hi": "लॉगिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using log package", "Using third-party logging libraries", "Using structured logging", "All of the above"],
        "options_hi": ["log पैकेज का उपयोग करके", "थर्ड-पार्टी लॉगिंग लाइब्रेरी का उपयोग करके", "स्ट्रक्चर्ड लॉगिंग का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the purpose of 'go install' command?",
        "question_hi": "'go install' कमांड का उद्देश्य क्या है?",
        "options_en": ["To compile and install packages", "To install dependencies", "To install tools", "All of the above"],
        "options_hi": ["पैकेज कंपाइल और इंस्टॉल करने के लिए", "डिपेंडेंसी इंस्टॉल करने के लिए", "टूल्स इंस्टॉल करने के लिए", "उपरोक्त सभी"],
        "answer_en": "To compile and install packages",
        "answer_hi": "पैकेज कंपाइल और इंस्टॉल करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "How do you implement dependency injection?",
        "question_hi": "डिपेंडेंसी इंजेक्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using constructor injection", "Using interface-based design", "Using third-party frameworks", "All of the above"],
        "options_hi": ["कंस्ट्रक्टर इंजेक्शन का उपयोग करके", "इंटरफेस-बेस्ड डिजाइन का उपयोग करके", "थर्ड-पार्टी फ्रेमवर्क का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the purpose of 'go work' command?",
        "question_hi": "'go work' कमांड का उद्देश्य क्या है?",
        "options_en": ["For multi-module workspace management", "For work scheduling", "For worker pools", "For task management"],
        "options_hi": ["मल्टी-मॉड्यूल वर्कस्पेस मैनेजमेंट के लिए", "वर्क शेड्यूलिंग के लिए", "वर्कर पूल के लिए", "टास्क मैनेजमेंट के लिए"],
        "answer_en": "For multi-module workspace management",
        "answer_hi": "मल्टी-मॉड्यूल वर्कस्पेस मैनेजमेंट के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "How do you implement health checks?",
        "question_hi": "हेल्थ चेक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using HTTP endpoints", "Using background goroutines", "Using third-party libraries", "All of the above"],
        "options_hi": ["HTTP एंडपॉइंट का उपयोग करके", "बैकग्राउंड गोरूटीन का उपयोग करके", "थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the purpose of 'go fix' command?",
        "question_hi": "'go fix' कमांड का उद्देश्य क्या है?",
        "options_en": ["To update code to use new APIs", "To fix bugs automatically", "To fix formatting", "To fix imports"],
        "options_hi": ["नए API का उपयोग करने के लिए कोड अपडेट करने के लिए", "बग्स ऑटोमेटिकली फिक्स करने के लिए", "फॉर्मेटिंग फिक्स करने के लिए", "इम्पोर्ट्स फिक्स करने के लिए"],
        "answer_en": "To update code to use new APIs",
        "answer_hi": "नए API का उपयोग करने के लिए कोड अपडेट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "How do you implement circuit breaker pattern?",
        "question_hi": "सर्किट ब्रेकर पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using third-party libraries", "Implementing with state machine", "Using counters and timers", "All of the above"],
        "options_hi": ["थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "स्टेट मशीन के साथ इम्प्लीमेंट करके", "काउंटर और टाइमर का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the purpose of 'go version' command?",
        "question_hi": "'go version' कमांड का उद्देश्य क्या है?",
        "options_en": ["To show Go version", "To show program version", "To show module version", "To show package version"],
        "options_hi": ["Go वर्जन दिखाने के लिए", "प्रोग्राम वर्जन दिखाने के लिए", "मॉड्यूल वर्जन दिखाने के लिए", "पैकेज वर्जन दिखाने के लिए"],
        "answer_en": "To show Go version",
        "answer_hi": "Go वर्जन दिखाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "How do you implement retry logic?",
        "question_hi": "रिट्राई लॉजिक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using exponential backoff", "Using for loops with sleep", "Using third-party libraries", "All of the above"],
        "options_hi": ["एक्सपोनेंशियल बैकऑफ का उपयोग करके", "स्लीप के साथ for लूप का उपयोग करके", "थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the purpose of 'go env' command?",
        "question_hi": "'go env' कमांड का उद्देश्य क्या है?",
        "options_en": ["To show Go environment variables", "To set environment variables", "To check environment", "To validate environment"],
        "options_hi": ["Go एनवायरनमेंट वेरिएबल्स दिखाने के लिए", "एनवायरनमेंट वेरिएबल्स सेट करने के लिए", "एनवायरनमेंट चेक करने के लिए", "एनवायरनमेंट वैलिडेट करने के लिए"],
        "answer_en": "To show Go environment variables",
        "answer_hi": "Go एनवायरनमेंट वेरिएबल्स दिखाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "How do you implement graceful shutdown?",
        "question_hi": "ग्रेसफुल शटडाउन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using signal handling", "Using context cancellation", "Using server.Shutdown()", "All of the above"],
        "options_hi": ["सिग्नल हैंडलिंग का उपयोग करके", "कॉन्टेक्स्ट कैंसलेशन का उपयोग करके", "server.Shutdown() का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the purpose of 'go tool' command?",
        "question_hi": "'go tool' कमांड का उद्देश्य क्या है?",
        "options_en": ["To run Go tools", "To manage tools", "To install tools", "To list tools"],
        "options_hi": ["Go टूल्स रन करने के लिए", "टूल्स मैनेज करने के लिए", "टूल्स इंस्टॉल करने के लिए", "टूल्स लिस्ट करने के लिए"],
        "answer_en": "To run Go tools",
        "answer_hi": "Go टूल्स रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "How do you implement pub-sub pattern?",
        "question_hi": "पब-सब पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using channels", "Using third-party libraries", "Using event buses", "All of the above"],
        "options_hi": ["चैनल का उपयोग करके", "थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "इवेंट बस का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the purpose of 'go mod init' command?",
        "question_hi": "'go mod init' कमांड का उद्देश्य क्या है?",
        "options_en": ["To initialize a new module", "To initialize project", "To create go.mod file", "All of the above"],
        "options_hi": ["नया मॉड्यूल इनिशियलाइज करने के लिए", "प्रोजेक्ट इनिशियलाइज करने के लिए", "go.mod फाइल बनाने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "How do you implement worker pools?",
        "question_hi": "वर्कर पूल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using goroutines and channels", "Using sync.WaitGroup", "Using job queues", "All of the above"],
        "options_hi": ["गोरूटीन और चैनल का उपयोग करके", "sync.WaitGroup का उपयोग करके", "जॉब क्यू का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the purpose of 'go mod tidy' command?",
        "question_hi": "'go mod tidy' कमांड का उद्देश्य क्या है?",
        "options_en": ["To add missing and remove unused dependencies", "To clean modules", "To format go.mod", "To update modules"],
        "options_hi": ["मिसिंग डिपेंडेंसी ऐड और अनयूज्ड डिपेंडेंसी रिमूव करने के लिए", "मॉड्यूल क्लीन करने के लिए", "go.mod फॉर्मेट करने के लिए", "मॉड्यूल अपडेट करने के लिए"],
        "answer_en": "To add missing and remove unused dependencies",
        "answer_hi": "मिसिंग डिपेंडेंसी ऐड और अनयूज्ड डिपेंडेंसी रिमूव करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "How do you implement feature flags?",
        "question_hi": "फीचर फ्लैग्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using configuration", "Using environment variables", "Using third-party services", "All of the above"],
        "options_hi": ["कॉन्फिगरेशन का उपयोग करके", "एनवायरनमेंट वेरिएबल्स का उपयोग करके", "थर्ड-पार्टी सर्विस का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the purpose of 'go mod download' command?",
        "question_hi": "'go mod download' कमांड का उद्देश्य क्या है?",
        "options_en": ["To download modules to cache", "To download source code", "To download dependencies", "All of the above"],
        "options_hi": ["मॉड्यूल कैश में डाउनलोड करने के लिए", "सोर्स कोड डाउनलोड करने के लिए", "डिपेंडेंसी डाउनलोड करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "How do you implement distributed tracing?",
        "question_hi": "डिस्ट्रीब्यूटेड ट्रेसिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using OpenTelemetry", "Using context propagation", "Using third-party APM tools", "All of the above"],
        "options_hi": ["OpenTelemetry का उपयोग करके", "कॉन्टेक्स्ट प्रोपेगेशन का उपयोग करके", "थर्ड-पार्टी APM टूल का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the purpose of 'go mod verify' command?",
        "question_hi": "'go mod verify' कमांड का उद्देश्य क्या है?",
        "options_en": ["To verify module dependencies", "To verify checksums", "To validate modules", "All of the above"],
        "options_hi": ["मॉड्यूल डिपेंडेंसी वेरिफाई करने के लिए", "चेकसम वेरिफाई करने के लिए", "मॉड्यूल वैलिडेट करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "How do you implement API versioning?",
        "question_hi": "API वर्जनिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using URL paths", "Using headers", "Using query parameters", "All of the above"],
        "options_hi": ["URL पाथ का उपयोग करके", "हेडर का उपयोग करके", "क्वेरी पैरामीटर का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the purpose of 'go mod graph' command?",
        "question_hi": "'go mod graph' कमांड का उद्देश्य क्या है?",
        "options_en": ["To print module dependency graph", "To graph dependencies", "To visualize modules", "To analyze dependencies"],
        "options_hi": ["मॉड्यूल डिपेंडेंसी ग्राफ प्रिंट करने के लिए", "डिपेंडेंसी ग्राफ करने के लिए", "मॉड्यूल विजुअलाइज करने के लिए", "डिपेंडेंसी एनालाइज करने के लिए"],
        "answer_en": "To print module dependency graph",
        "answer_hi": "मॉड्यूल डिपेंडेंसी ग्राफ प्रिंट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "How do you implement API documentation?",
        "question_hi": "API डॉक्युमेंटेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Swagger/OpenAPI", "Using Go comments", "Using third-party tools", "All of the above"],
        "options_hi": ["Swagger/OpenAPI का उपयोग करके", "Go कमेंट्स का उपयोग करके", "थर्ड-पार्टी टूल्स का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the purpose of 'go mod why' command?",
        "question_hi": "'go mod why' कमांड का उद्देश्य क्या है?",
        "options_en": ["To explain why packages are needed", "To analyze dependencies", "To find unused packages", "To optimize imports"],
        "options_hi": ["एक्सप्लेन करने के लिए कि पैकेज क्यों जरूरी हैं", "डिपेंडेंसी एनालाइज करने के लिए", "अनयूज्ड पैकेज ढूंढने के लिए", "इम्पोर्ट्स ऑप्टिमाइज करने के लिए"],
        "answer_en": "To explain why packages are needed",
        "answer_hi": "एक्सप्लेन करने के लिए कि पैकेज क्यों जरूरी हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "How do you implement data validation?",
        "question_hi": "डेटा वैलिडेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using struct tags", "Using validation libraries", "Manual validation", "All of the above"],
        "options_hi": ["स्ट्रक्ट टैग का उपयोग करके", "वैलिडेशन लाइब्रेरी का उपयोग करके", "मैनुअल वैलिडेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the purpose of 'go mod vendor' command?",
        "question_hi": "'go mod vendor' कमांड का उद्देश्य क्या है?",
        "options_en": ["To create vendor directory with dependencies", "To vendor dependencies", "To include dependencies in project", "All of the above"],
        "options_hi": ["डिपेंडेंसी के साथ वेंडर डायरेक्टरी बनाने के लिए", "डिपेंडेंसी वेंडर करने के लिए", "प्रोजेक्ट में डिपेंडेंसी इनक्लूड करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "How do you implement API authentication?",
        "question_hi": "API ऑथेंटिकेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using JWT tokens", "Using OAuth", "Using API keys", "All of the above"],
        "options_hi": ["JWT टोकन का उपयोग करके", "OAuth का उपयोग करके", "API की का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the purpose of 'go mod edit' command?",
        "question_hi": "'go mod edit' कमांड का उद्देश्य क्या है?",
        "options_en": ["To edit go.mod file", "To modify dependencies", "To update module requirements", "All of the above"],
        "options_hi": ["go.mod फाइल एडिट करने के लिए", "डिपेंडेंसी मॉडिफाई करने के लिए", "मॉड्यूल रिक्वायरमेंट अपडेट करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "How do you implement background jobs?",
        "question_hi": "बैकग्राउंड जॉब्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using goroutines", "Using cron jobs", "Using message queues", "All of the above"],
        "options_hi": ["गोरूटीन का उपयोग करके", "क्रॉन जॉब का उपयोग करके", "मैसेज क्यू का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the purpose of 'go test -v' command?",
        "question_hi": "'go test -v' कमांड का उद्देश्य क्या है?",
        "options_en": ["To run tests in verbose mode", "To validate tests", "To view test details", "To verify tests"],
        "options_hi": ["वर्बोस मोड में टेस्ट रन करने के लिए", "टेस्ट वैलिडेट करने के लिए", "टेस्ट डिटेल्स व्यू करने के लिए", "टेस्ट वेरिफाई करने के लिए"],
        "answer_en": "To run tests in verbose mode",
        "answer_hi": "वर्बोस मोड में टेस्ट रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "How do you implement database migrations?",
        "question_hi": "डेटाबेस माइग्रेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using migration libraries", "Using SQL files", "Using ORM tools", "All of the above"],
        "options_hi": ["माइग्रेशन लाइब्रेरी का उपयोग करके", "SQL फाइल्स का उपयोग करके", "ORM टूल्स का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the purpose of 'go test -cover' command?",
        "question_hi": "'go test -cover' कमांड का उद्देश्य क्या है?",
        "options_en": ["To measure code coverage", "To cover tests", "To check coverage", "To analyze coverage"],
        "options_hi": ["कोड कवरेज मापने के लिए", "टेस्ट कवर करने के लिए", "कवरेज चेक करने के लिए", "कवरेज एनालाइज करने के लिए"],
        "answer_en": "To measure code coverage",
        "answer_hi": "कोड कवरेज मापने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "How do you implement API rate limiting?",
        "question_hi": "API रेट लिमिटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using token bucket algorithm", "Using fixed window", "Using sliding window", "All of the above"],
        "options_hi": ["टोकन बकेट अल्गोरिदम का उपयोग करके", "फिक्स्ड विंडो का उपयोग करके", "स्लाइडिंग विंडो का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the purpose of 'go test -race' command?",
        "question_hi": "'go test -race' कमांड का उद्देश्य क्या है?",
        "options_en": ["To detect race conditions", "To race tests", "To test concurrency", "To check race issues"],
        "options_hi": ["रेस कंडीशन डिटेक्ट करने के लिए", "टेस्ट रेस करने के लिए", "कंकरेंसी टेस्ट करने के लिए", "रेस इशू चेक करने के लिए"],
        "answer_en": "To detect race conditions",
        "answer_hi": "रेस कंडीशन डिटेक्ट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "How do you implement service discovery?",
        "question_hi": "सर्विस डिस्कवरी कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Consul", "Using etcd", "Using Kubernetes services", "All of the above"],
        "options_hi": ["Consul का उपयोग करके", "etcd का उपयोग करके", "Kubernetes सर्विस का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the purpose of 'go test -bench' command?",
        "question_hi": "'go test -bench' कमांड का उद्देश्य क्या है?",
        "options_en": ["To run benchmarks", "To bench tests", "To performance test", "To measure performance"],
        "options_hi": ["बेंचमार्क रन करने के लिए", "टेस्ट बेंच करने के लिए", "परफॉर्मेंस टेस्ट करने के लिए", "परफॉर्मेंस मापने के लिए"],
        "answer_en": "To run benchmarks",
        "answer_hi": "बेंचमार्क रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "How do you implement message queues?",
        "question_hi": "मैसेज क्यू कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using channel patterns", "Using RabbitMQ", "Using Kafka", "All of the above"],
        "options_hi": ["चैनल पैटर्न का उपयोग करके", "RabbitMQ का उपयोग करके", "Kafka का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the purpose of 'go test -run' command?",
        "question_hi": "'go test -run' कमांड का उद्देश्य क्या है?",
        "options_en": ["To run specific tests", "To run all tests", "To run test patterns", "To run selected tests"],
        "options_hi": ["स्पेसिफिक टेस्ट रन करने के लिए", "सभी टेस्ट रन करने के लिए", "टेस्ट पैटर्न रन करने के लिए", "सिलेक्टेड टेस्ट रन करने के लिए"],
        "answer_en": "To run specific tests",
        "answer_hi": "स्पेसिफिक टेस्ट रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "How do you implement monitoring and metrics?",
        "question_hi": "मॉनिटरिंग और मेट्रिक्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Prometheus", "Using metrics libraries", "Using custom metrics", "All of the above"],
        "options_hi": ["Prometheus का उपयोग करके", "मेट्रिक्स लाइब्रेरी का उपयोग करके", "कस्टम मेट्रिक्स का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the purpose of 'sync/atomic' package?",
        "question_hi": "'sync/atomic' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For atomic operations", "For low-level synchronization", "For thread-safe operations", "All of the above"],
        "options_hi": ["एटोमिक ऑपरेशन्स के लिए", "लो-लेवल सिंक्रोनाइजेशन के लिए", "थ्रेड-सेफ ऑपरेशन्स के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "How do you implement file operations?",
        "question_hi": "फाइल ऑपरेशन्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using os package", "Using ioutil package", "Using bufio package", "All of the above"],
        "options_hi": ["os पैकेज का उपयोग करके", "ioutil पैकेज का उपयोग करके", "bufio पैकेज का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the purpose of 'encoding' packages?",
        "question_hi": "'encoding' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For data encoding/decoding", "For JSON, XML, CSV handling", "For data serialization", "All of the above"],
        "options_hi": ["डेटा एन्कोडिंग/डिकोडिंग के लिए", "JSON, XML, CSV हैंडलिंग के लिए", "डेटा सीरियलाइजेशन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "How do you implement HTTP middleware?",
        "question_hi": "HTTP मिडलवेयर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["By wrapping http.Handler", "Using third-party libraries", "Using function chains", "All of the above"],
        "options_hi": ["http.Handler रैप करके", "थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "फंक्शन चेन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the purpose of 'reflect' package?",
        "question_hi": "'reflect' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For runtime reflection", "For type inspection", "For dynamic programming", "All of the above"],
        "options_hi": ["रनटाइम रिफ्लेक्शन के लिए", "टाइप इंस्पेक्शन के लिए", "डायनामिक प्रोग्रामिंग के लिए", "उपरोक्त सभी"],
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