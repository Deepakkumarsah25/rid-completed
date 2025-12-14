const questions=[
    {
        "num": 1,
        "question_en": "What is the zero value of a slice in Go?",
        "question_hi": "Go में स्लाइस की जीरो वैल्यू क्या होती है?",
        "options_en": ["nil", "empty slice", "zero-length slice", "undefined"],
        "options_hi": ["nil", "खाली स्लाइस", "जीरो-लेंथ स्लाइस", "अनडिफाइंड"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which keyword is used to create a new goroutine?",
        "question_hi": "नई गोरूटीन बनाने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["go", "goroutine", "async", "spawn"],
        "options_hi": ["go", "goroutine", "async", "spawn"],
        "answer_en": "go",
        "answer_hi": "go",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the purpose of the 'defer' keyword?",
        "question_hi": "'defer' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["To schedule a function call before the surrounding function returns", "To delay function execution", "To stop function execution", "To speed up function execution"],
        "options_hi": ["सराउंडिंग फंक्शन के रिटर्न होने से पहले फंक्शन कॉल शेड्यूल करने के लिए", "फंक्शन एक्सेक्यूशन डिले करने के लिए", "फंक्शन एक्सेक्यूशन रोकने के लिए", "फंक्शन एक्सेक्यूशन स्पीड अप करने के लिए"],
        "answer_en": "To schedule a function call before the surrounding function returns",
        "answer_hi": "सराउंडिंग फंक्शन के रिटर्न होने से पहले फंक्शन कॉल शेड्यूल करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you check if a map contains a specific key?",
        "question_hi": "आप कैसे चेक करते हैं कि मैप में कोई स्पेसिफिक की है या नहीं?",
        "options_en": ["value, ok := map[key]", "map.contains(key)", "map.has(key)", "map.exists(key)"],
        "options_hi": ["value, ok := map[key]", "map.contains(key)", "map.has(key)", "map.exists(key)"],
        "answer_en": "value, ok := map[key]",
        "answer_hi": "value, ok := map[key]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the difference between := and = in Go?",
        "question_hi": "Go में := और = में क्या अंतर है?",
        "options_en": [":= declares and assigns, = only assigns", "No difference", "= declares and assigns, := only assigns", ":= is for constants"],
        "options_hi": [":= डिक्लेयर और असाइन करता है, = केवल असाइन करता है", "कोई अंतर नहीं", "= डिक्लेयर और असाइन करता है, := केवल असाइन करता है", ":= कॉन्स्टेंट के लिए है"],
        "answer_en": ":= declares and assigns, = only assigns",
        "answer_hi": ":= डिक्लेयर और असाइन करता है, = केवल असाइन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which package is used for formatted I/O in Go?",
        "question_hi": "Go में फॉर्मेटेड I/O के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["fmt", "io", "bufio", "os"],
        "options_hi": ["fmt", "io", "bufio", "os"],
        "answer_en": "fmt",
        "answer_hi": "fmt",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of the 'range' keyword?",
        "question_hi": "'range' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["To iterate over arrays, slices, maps, or channels", "To define a range of numbers", "To set value ranges", "To limit function scope"],
        "options_hi": ["ऐरे, स्लाइस, मैप या चैनल पर इटरेट करने के लिए", "नंबर की रेंज डिफाइन करने के लिए", "वैल्यू रेंज सेट करने के लिए", "फंक्शन स्कोप लिमिट करने के लिए"],
        "answer_en": "To iterate over arrays, slices, maps, or channels",
        "answer_hi": "ऐरे, स्लाइस, मैप या चैनल पर इटरेट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you create a pointer in Go?",
        "question_hi": "Go में पॉइंटर कैसे बनाते हैं?",
        "options_en": ["Using the & operator", "Using the * operator", "Using new() function", "All of the above"],
        "options_hi": ["& ऑपरेटर का उपयोग करके", "* ऑपरेटर का उपयोग करके", "new() फंक्शन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the zero value of an interface in Go?",
        "question_hi": "Go में इंटरफेस की जीरो वैल्यू क्या होती है?",
        "options_en": ["nil", "empty interface", "zero interface", "undefined"],
        "options_hi": ["nil", "खाली इंटरफेस", "जीरो इंटरफेस", "अनडिफाइंड"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which function is used to create a new error in Go?",
        "question_hi": "Go में नया एरर बनाने के लिए किस फंक्शन का उपयोग किया जाता है?",
        "options_en": ["errors.New()", "fmt.Errorf()", "Both A and B", "error.Create()"],
        "options_hi": ["errors.New()", "fmt.Errorf()", "A और B दोनों", "error.Create()"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of the 'select' statement?",
        "question_hi": "'select' स्टेटमेंट का उद्देश्य क्या है?",
        "options_en": ["To wait on multiple channel operations", "To select from multiple options", "To choose between cases", "To implement switch on channels"],
        "options_hi": ["मल्टीपल चैनल ऑपरेशन पर वेट करने के लिए", "मल्टीपल ऑप्शन से सेलेक्ट करने के लिए", "केस के बीच चुनने के लिए", "चैनल पर स्विच इम्प्लीमेंट करने के लिए"],
        "answer_en": "To wait on multiple channel operations",
        "answer_hi": "मल्टीपल चैनल ऑपरेशन पर वेट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you convert a string to a byte slice?",
        "question_hi": "स्ट्रिंग को बाइट स्लाइस में कैसे कन्वर्ट करते हैं?",
        "options_en": ["[]byte(string)", "string.Bytes()", "bytes.Convert(string)", "cast(string)"],
        "options_hi": ["[]byte(string)", "string.Bytes()", "bytes.Convert(string)", "cast(string)"],
        "answer_en": "[]byte(string)",
        "answer_hi": "[]byte(string)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of the 'make' function?",
        "question_hi": "'make' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To allocate and initialize slices, maps, and channels", "To create new variables", "To allocate memory", "To initialize structs"],
        "options_hi": ["स्लाइस, मैप और चैनल अलोकेट और इनिशियलाइज़ करने के लिए", "नए वेरिएबल बनाने के लिए", "मेमोरी अलोकेट करने के लिए", "स्ट्रक्ट इनिशियलाइज़ करने के लिए"],
        "answer_en": "To allocate and initialize slices, maps, and channels",
        "answer_hi": "स्लाइस, मैप और चैनल अलोकेट और इनिशियलाइज़ करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which method is called automatically when a struct is printed?",
        "question_hi": "जब स्ट्रक्ट प्रिंट किया जाता है तो कौन सी मेथड ऑटोमैटिकली कॉल होती है?",
        "options_en": ["String()", "Print()", "Format()", "Display()"],
        "options_hi": ["String()", "Print()", "Format()", "Display()"],
        "answer_en": "String()",
        "answer_hi": "String()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the zero value of a boolean in Go?",
        "question_hi": "Go में बूलियन की जीरो वैल्यू क्या होती है?",
        "options_en": ["false", "true", "nil", "0"],
        "options_hi": ["false", "true", "nil", "0"],
        "answer_en": "false",
        "answer_hi": "false",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you declare a constant in Go?",
        "question_hi": "Go में कॉन्स्टेंट कैसे डिक्लेयर करते हैं?",
        "options_en": ["const name = value", "var name const = value", "constant name = value", "define name value"],
        "options_hi": ["const name = value", "var name const = value", "constant name = value", "define name value"],
        "answer_en": "const name = value",
        "answer_hi": "const name = value",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of the 'iota' identifier?",
        "question_hi": "'iota' आइडेंटिफायर का उद्देश्य क्या है?",
        "options_en": ["To create enumerated constants", "To iterate over values", "To create sequences", "To generate IDs"],
        "options_hi": ["एन्युमरेटेड कॉन्स्टेंट बनाने के लिए", "वैल्यू पर इटरेट करने के लिए", "सीक्वेंस बनाने के लिए", "ID जनरेट करने के लिए"],
        "answer_en": "To create enumerated constants",
        "answer_hi": "एन्युमरेटेड कॉन्स्टेंट बनाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which package is used for HTTP server and client implementation?",
        "question_hi": "HTTP सर्वर और क्लाइंट इम्प्लीमेंटेशन के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["net/http", "http", "net", "web"],
        "options_hi": ["net/http", "http", "net", "web"],
        "answer_en": "net/http",
        "answer_hi": "net/http",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "How do you handle errors in Go?",
        "question_hi": "Go में एरर को कैसे हैंडल करते हैं?",
        "options_en": ["By returning error values from functions", "Using try-catch blocks", "Using exceptions", "Using panic/recover"],
        "options_hi": ["फंक्शन से एरर वैल्यू रिटर्न करके", "try-catch ब्लॉक का उपयोग करके", "एक्सेप्शन का उपयोग करके", "panic/recover का उपयोग करके"],
        "answer_en": "By returning error values from functions",
        "answer_hi": "फंक्शन से एरर वैल्यू रिटर्न करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the purpose of the 'recover' function?",
        "question_hi": "'recover' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To regain control of a panicking goroutine", "To recover from errors", "To restore state", "To handle exceptions"],
        "options_hi": ["पैनिकिंग गोरूटीन का कंट्रोल वापस पाने के लिए", "एरर से रिकवर करने के लिए", "स्टेट रिस्टोर करने के लिए", "एक्सेप्शन हैंडल करने के लिए"],
        "answer_en": "To regain control of a panicking goroutine",
        "answer_hi": "पैनिकिंग गोरूटीन का कंट्रोल वापस पाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which data type is used to represent Unicode characters in Go?",
        "question_hi": "Go में यूनिकोड करैक्टर रिप्रेजेंट करने के लिए किस डेटा टाइप का उपयोग किया जाता है?",
        "options_en": ["rune", "char", "unicode", "string"],
        "options_hi": ["rune", "char", "unicode", "string"],
        "answer_en": "rune",
        "answer_hi": "rune",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the purpose of the 'cap' function?",
        "question_hi": "'cap' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To get the capacity of a slice or channel", "To capitalize strings", "To capture values", "To check capacity"],
        "options_hi": ["स्लाइस या चैनल की कैपेसिटी प्राप्त करने के लिए", "स्ट्रिंग कैपिटलाइज़ करने के लिए", "वैल्यू कैप्चर करने के लिए", "कैपेसिटी चेक करने के लिए"],
        "answer_en": "To get the capacity of a slice or channel",
        "answer_hi": "स्लाइस या चैनल की कैपेसिटी प्राप्त करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "How do you create a buffered channel?",
        "question_hi": "बफर्ड चैनल कैसे बनाते हैं?",
        "options_en": ["make(chan type, capacity)", "make(chan type, buffer)", "chan type{buffer: size}", "new(chan type, size)"],
        "options_hi": ["make(chan type, capacity)", "make(chan type, buffer)", "chan type{buffer: size}", "new(chan type, size)"],
        "answer_en": "make(chan type, capacity)",
        "answer_hi": "make(chan type, capacity)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the zero value of a struct?",
        "question_hi": "स्ट्रक्ट की जीरो वैल्यू क्या होती है?",
        "options_en": ["Struct with zero values for all fields", "nil", "empty struct", "undefined"],
        "options_hi": ["सभी फील्ड के लिए जीरो वैल्यू वाला स्ट्रक्ट", "nil", "खाली स्ट्रक्ट", "अनडिफाइंड"],
        "answer_en": "Struct with zero values for all fields",
        "answer_hi": "सभी फील्ड के लिए जीरो वैल्यू वाला स्ट्रक्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which package is used for JSON encoding and decoding?",
        "question_hi": "JSON एन्कोडिंग और डिकोडिंग के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["encoding/json", "json", "encoding", "convert/json"],
        "options_hi": ["encoding/json", "json", "encoding", "convert/json"],
        "answer_en": "encoding/json",
        "answer_hi": "encoding/json",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the purpose of the 'len' function?",
        "question_hi": "'len' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To get the length of arrays, slices, strings, maps, and channels", "To calculate length", "To measure size", "To count elements"],
        "options_hi": ["ऐरे, स्लाइस, स्ट्रिंग, मैप और चैनल की लेंथ प्राप्त करने के लिए", "लेंथ कैलकुलेट करने के लिए", "साइज मापने के लिए", "एलिमेंट काउंट करने के लिए"],
        "answer_en": "To get the length of arrays, slices, strings, maps, and channels",
        "answer_hi": "ऐरे, स्लाइस, स्ट्रिंग, मैप और चैनल की लेंथ प्राप्त करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "How do you implement inheritance in Go?",
        "question_hi": "Go में इनहेरिटेंस कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using composition with struct embedding", "Using extends keyword", "Using inheritance keyword", "Using class inheritance"],
        "options_hi": ["स्ट्रक्ट एम्बेडिंग के साथ कम्पोजिशन का उपयोग करके", "extends कीवर्ड का उपयोग करके", "inheritance कीवर्ड का उपयोग करके", "क्लास इनहेरिटेंस का उपयोग करके"],
        "answer_en": "Using composition with struct embedding",
        "answer_hi": "स्ट्रक्ट एम्बेडिंग के साथ कम्पोजिशन का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the purpose of the 'close' function for channels?",
        "question_hi": "चैनल के लिए 'close' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To close a channel and indicate no more values will be sent", "To stop channel operations", "To destroy a channel", "To pause a channel"],
        "options_hi": ["चैनल क्लोज करने और इंडिकेट करने के लिए कि कोई और वैल्यू नहीं भेजी जाएगी", "चैनल ऑपरेशन रोकने के लिए", "चैनल डिस्ट्रॉय करने के लिए", "चैनल पॉज करने के लिए"],
        "answer_en": "To close a channel and indicate no more values will be sent",
        "answer_hi": "चैनल क्लोज करने और इंडिकेट करने के लिए कि कोई और वैल्यू नहीं भेजी जाएगी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which package is used for sorting in Go?",
        "question_hi": "Go में सॉर्टिंग के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["sort", "algorithm/sort", "collections/sort", "utils/sort"],
        "options_hi": ["sort", "algorithm/sort", "collections/sort", "utils/sort"],
        "answer_en": "sort",
        "answer_hi": "sort",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the purpose of the 'new' function?",
        "question_hi": "'new' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To allocate memory for a type and return a pointer", "To create new variables", "To initialize values", "To create instances"],
        "options_hi": ["टाइप के लिए मेमोरी अलोकेट करने और पॉइंटर रिटर्न करने के लिए", "नए वेरिएबल बनाने के लिए", "वैल्यू इनिशियलाइज़ करने के लिए", "इंस्टेंस बनाने के लिए"],
        "answer_en": "To allocate memory for a type and return a pointer",
        "answer_hi": "टाइप के लिए मेमोरी अलोकेट करने और पॉइंटर रिटर्न करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "How do you declare a variable without initializing it?",
        "question_hi": "बिना इनिशियलाइज़ किए वेरिएबल कैसे डिक्लेयर करते हैं?",
        "options_en": ["var name type", "name := type", "variable name type", "declare name type"],
        "options_hi": ["var name type", "name := type", "variable name type", "declare name type"],
        "answer_en": "var name type",
        "answer_hi": "var name type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the purpose of the 'append' function?",
        "question_hi": "'append' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To add elements to a slice", "To concatenate strings", "To add to arrays", "To extend maps"],
        "options_hi": ["स्लाइस में एलिमेंट ऐड करने के लिए", "स्ट्रिंग कॉन्कैटनेट करने के लिए", "ऐरे में ऐड करने के लिए", "मैप एक्सटेंड करने के लिए"],
        "answer_en": "To add elements to a slice",
        "answer_hi": "स्लाइस में एलिमेंट ऐड करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which package is used for working with time?",
        "question_hi": "टाइम के साथ काम करने के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["time", "datetime", "clock", "times"],
        "options_hi": ["time", "datetime", "clock", "times"],
        "answer_en": "time",
        "answer_hi": "time",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the zero value of a pointer?",
        "question_hi": "पॉइंटर की जीरो वैल्यू क्या होती है?",
        "options_en": ["nil", "0", "null", "undefined"],
        "options_hi": ["nil", "0", "null", "अनडिफाइंड"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "How do you create a method on a struct?",
        "question_hi": "स्ट्रक्ट पर मेथड कैसे बनाते हैं?",
        "options_en": ["func (receiver structType) methodName() returnType", "func methodName(receiver structType) returnType", "structType.methodName() returnType", "method (receiver structType) methodName()"],
        "options_hi": ["func (receiver structType) methodName() returnType", "func methodName(receiver structType) returnType", "structType.methodName() returnType", "method (receiver structType) methodName()"],
        "answer_en": "func (receiver structType) methodName() returnType",
        "answer_hi": "func (receiver structType) methodName() returnType",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the purpose of the 'copy' function?",
        "question_hi": "'copy' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To copy elements from one slice to another", "To duplicate slices", "To clone arrays", "To replicate data"],
        "options_hi": ["एक स्लाइस से दूसरी स्लाइस में एलिमेंट कॉपी करने के लिए", "स्लाइस डुप्लिकेट करने के लिए", "ऐरे क्लोन करने के लिए", "डेटा रेप्लिकेट करने के लिए"],
        "answer_en": "To copy elements from one slice to another",
        "answer_hi": "एक स्लाइस से दूसरी स्लाइस में एलिमेंट कॉपी करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which package is used for file operations?",
        "question_hi": "फाइल ऑपरेशन के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["os", "io", "file", "filesystem"],
        "options_hi": ["os", "io", "file", "filesystem"],
        "answer_en": "os",
        "answer_hi": "os",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the purpose of the 'panic' function?",
        "question_hi": "'panic' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To stop normal execution and begin panicking", "To throw exceptions", "To log errors", "To stop program"],
        "options_hi": ["नॉर्मल एक्सेक्यूशन रोकने और पैनिकिंग शुरू करने के लिए", "एक्सेप्शन थ्रो करने के लिए", "एरर लॉग करने के लिए", "प्रोग्राम रोकने के लिए"],
        "answer_en": "To stop normal execution and begin panicking",
        "answer_hi": "नॉर्मल एक्सेक्यूशन रोकने और पैनिकिंग शुरू करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "How do you import a package with a different name?",
        "question_hi": "डिफरेंट नाम के साथ पैकेज कैसे इम्पोर्ट करते हैं?",
        "options_en": ["import alias \"package/path\"", "import \"package/path\" as alias", "import alias from \"package/path\"", "use alias \"package/path\""],
        "options_hi": ["import alias \"package/path\"", "import \"package/path\" as alias", "import alias from \"package/path\"", "use alias \"package/path\""],
        "answer_en": "import alias \"package/path\"",
        "answer_hi": "import alias \"package/path\"",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the purpose of the 'delete' function?",
        "question_hi": "'delete' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To remove a key from a map", "To delete variables", "To remove elements from slices", "To clear memory"],
        "options_hi": ["मैप से की रिमूव करने के लिए", "वेरिएबल डिलीट करने के लिए", "स्लाइस से एलिमेंट रिमूव करने के लिए", "मेमोरी क्लियर करने के लिए"],
        "answer_en": "To remove a key from a map",
        "answer_hi": "मैप से की रिमूव करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which package is used for string manipulation?",
        "question_hi": "स्ट्रिंग मैनिपुलेशन के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["strings", "string", "str", "text"],
        "options_hi": ["strings", "string", "str", "text"],
        "answer_en": "strings",
        "answer_hi": "strings",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the purpose of the 'interface{}' type?",
        "question_hi": "'interface{}' टाइप का उद्देश्य क्या है?",
        "options_en": ["To represent any type", "To define interfaces", "To create empty interfaces", "To implement polymorphism"],
        "options_hi": ["किसी भी टाइप को रिप्रेजेंट करने के लिए", "इंटरफेस डिफाइन करने के लिए", "एम्प्टी इंटरफेस बनाने के लिए", "पोलीमॉर्फिज्म इम्प्लीमेंट करने के लिए"],
        "answer_en": "To represent any type",
        "answer_hi": "किसी भी टाइप को रिप्रेजेंट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "How do you create a custom type?",
        "question_hi": "कस्टम टाइप कैसे बनाते हैं?",
        "options_en": ["type NewType ExistingType", "typedef ExistingType NewType", "custom type NewType ExistingType", "NewType = ExistingType"],
        "options_hi": ["type NewType ExistingType", "typedef ExistingType NewType", "custom type NewType ExistingType", "NewType = ExistingType"],
        "answer_en": "type NewType ExistingType",
        "answer_hi": "type NewType ExistingType",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the purpose of the 'go mod' command?",
        "question_hi": "'go mod' कमांड का उद्देश्य क्या है?",
        "options_en": ["To manage Go modules", "To modify code", "To create modules", "To update Go"],
        "options_hi": ["Go मॉड्यूल मैनेज करने के लिए", "कोड मॉडिफाई करने के लिए", "मॉड्यूल बनाने के लिए", "Go अपडेट करने के लिए"],
        "answer_en": "To manage Go modules",
        "answer_hi": "Go मॉड्यूल मैनेज करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which package is used for mathematical operations?",
        "question_hi": "मैथमेटिकल ऑपरेशन के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["math", "calculate", "numbers", "arithmetic"],
        "options_hi": ["math", "calculate", "numbers", "arithmetic"],
        "answer_en": "math",
        "answer_hi": "math",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the purpose of the 'rune' type?",
        "question_hi": "'rune' टाइप का उद्देश्य क्या है?",
        "options_en": ["To represent Unicode code points", "To run functions", "To create sequences", "To handle characters"],
        "options_hi": ["यूनिकोड कोड पॉइंट रिप्रेजेंट करने के लिए", "फंक्शन रन करने के लिए", "सीक्वेंस बनाने के लिए", "करैक्टर हैंडल करने के लिए"],
        "answer_en": "To represent Unicode code points",
        "answer_hi": "यूनिकोड कोड पॉइंट रिप्रेजेंट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "How do you implement polymorphism in Go?",
        "question_hi": "Go में पोलीमॉर्फिज्म कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using interfaces", "Using inheritance", "Using generics", "Using function overloading"],
        "options_hi": ["इंटरफेस का उपयोग करके", "इनहेरिटेंस का उपयोग करके", "जेनरिक्स का उपयोग करके", "फंक्शन ओवरलोडिंग का उपयोग करके"],
        "answer_en": "Using interfaces",
        "answer_hi": "इंटरफेस का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the purpose of the 'go test' command?",
        "question_hi": "'go test' कमांड का उद्देश्य क्या है?",
        "options_en": ["To run tests", "To test code quality", "To check syntax", "To validate code"],
        "options_hi": ["टेस्ट रन करने के लिए", "कोड क्वालिटी टेस्ट करने के लिए", "सिंटैक्स चेक करने के लिए", "कोड वैलिडेट करने के लिए"],
        "answer_en": "To run tests",
        "answer_hi": "टेस्ट रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which package is used for command-line flag parsing?",
        "question_hi": "कमांड-लाइन फ्लैग पार्सिंग के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["flag", "flags", "cli", "command"],
        "options_hi": ["flag", "flags", "cli", "command"],
        "answer_en": "flag",
        "answer_hi": "flag",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the purpose of the 'go build' command?",
        "question_hi": "'go build' कमांड का उद्देश्य क्या है?",
        "options_en": ["To compile Go packages and dependencies", "To build applications", "To create executables", "To compile code"],
        "options_hi": ["Go पैकेज और डिपेंडेंसी कम्पाइल करने के लिए", "एप्लिकेशन बिल्ड करने के लिए", "एक्जीक्यूटेबल बनाने के लिए", "कोड कम्पाइल करने के लिए"],
        "answer_en": "To compile Go packages and dependencies",
        "answer_hi": "Go पैकेज और डिपेंडेंसी कम्पाइल करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "How do you handle multiple return values?",
        "question_hi": "मल्टीपल रिटर्न वैल्यू को कैसे हैंडल करते हैं?",
        "options_en": ["By assigning to multiple variables", "Using arrays", "Using structs", "Using tuples"],
        "options_hi": ["मल्टीपल वेरिएबल को असाइन करके", "ऐरे का उपयोग करके", "स्ट्रक्ट का उपयोग करके", "टपल का उपयोग करके"],
        "answer_en": "By assigning to multiple variables",
        "answer_hi": "मल्टीपल वेरिएबल को असाइन करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the purpose of the 'go run' command?",
        "question_hi": "'go run' कमांड का उद्देश्य क्या है?",
        "options_en": ["To compile and run Go program", "To execute Go code", "To run tests", "To start server"],
        "options_hi": ["Go प्रोग्राम कम्पाइल और रन करने के लिए", "Go कोड एक्सेक्यूट करने के लिए", "टेस्ट रन करने के लिए", "सर्वर स्टार्ट करने के लिए"],
        "answer_en": "To compile and run Go program",
        "answer_hi": "Go प्रोग्राम कम्पाइल और रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which package is used for random number generation?",
        "question_hi": "रैंडम नंबर जनरेशन के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["math/rand", "random", "rand", "math/random"],
        "options_hi": ["math/rand", "random", "rand", "math/random"],
        "answer_en": "math/rand",
        "answer_hi": "math/rand",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the purpose of the 'go fmt' command?",
        "question_hi": "'go fmt' कमांड का उद्देश्य क्या है?",
        "options_en": ["To format Go source code", "To format output", "To format strings", "To format files"],
        "options_hi": ["Go सोर्स कोड फॉर्मेट करने के लिए", "आउटपुट फॉर्मेट करने के लिए", "स्ट्रिंग फॉर्मेट करने के लिए", "फाइल फॉर्मेट करने के लिए"],
        "answer_en": "To format Go source code",
        "answer_hi": "Go सोर्स कोड फॉर्मेट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "How do you create a variadic function?",
        "question_hi": "वेरिएडिक फंक्शन कैसे बनाते हैं?",
        "options_en": ["func name(args ...type) returnType", "func name(...args type) returnType", "func name(args type...) returnType", "func name(variadic args type) returnType"],
        "options_hi": ["func name(args ...type) returnType", "func name(...args type) returnType", "func name(args type...) returnType", "func name(variadic args type) returnType"],
        "answer_en": "func name(args ...type) returnType",
        "answer_hi": "func name(args ...type) returnType",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the purpose of the 'go get' command?",
        "question_hi": "'go get' कमांड का उद्देश्य क्या है?",
        "options_en": ["To download and install packages", "To get Go version", "To retrieve data", "To fetch dependencies"],
        "options_hi": ["पैकेज डाउनलोड और इंस्टॉल करने के लिए", "Go वर्जन प्राप्त करने के लिए", "डेटा रिट्रीव करने के लिए", "डिपेंडेंसी फेच करने के लिए"],
        "answer_en": "To download and install packages",
        "answer_hi": "पैकेज डाउनलोड और इंस्टॉल करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which package is used for cryptographic functions?",
        "question_hi": "क्रिप्टोग्राफिक फंक्शन के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["crypto", "crypt", "security", "encrypt"],
        "options_hi": ["crypto", "crypt", "security", "encrypt"],
        "answer_en": "crypto",
        "answer_hi": "crypto",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the purpose of the 'go doc' command?",
        "question_hi": "'go doc' कमांड का उद्देश्य क्या है?",
        "options_en": ["To show documentation for packages or symbols", "To create documentation", "To format docs", "To generate docs"],
        "options_hi": ["पैकेज या सिंबल के लिए डॉक्युमेंटेशन दिखाने के लिए", "डॉक्युमेंटेशन बनाने के लिए", "डॉक्स फॉर्मेट करने के लिए", "डॉक्स जनरेट करने के लिए"],
        "answer_en": "To show documentation for packages or symbols",
        "answer_hi": "पैकेज या सिंबल के लिए डॉक्युमेंटेशन दिखाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "How do you create an anonymous function?",
        "question_hi": "अनोनिमस फंक्शन कैसे बनाते हैं?",
        "options_en": ["func() { ... }()", "function() { ... }", "anonymous func() { ... }", "lambda() { ... }"],
        "options_hi": ["func() { ... }()", "function() { ... }", "anonymous func() { ... }", "lambda() { ... }"],
        "answer_en": "func() { ... }()",
        "answer_hi": "func() { ... }()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the purpose of the 'go vet' command?",
        "question_hi": "'go vet' कमांड का उद्देश्य क्या है?",
        "options_en": ["To report suspicious constructs in Go code", "To check health", "To validate code", "To inspect code"],
        "options_hi": ["Go कोड में सस्पिशियस कंस्ट्रक्ट रिपोर्ट करने के लिए", "हेल्थ चेक करने के लिए", "कोड वैलिडेट करने के लिए", "कोड इंस्पेक्ट करने के लिए"],
        "answer_en": "To report suspicious constructs in Go code",
        "answer_hi": "Go कोड में सस्पिशियस कंस्ट्रक्ट रिपोर्ट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which package is used for compression?",
        "question_hi": "कम्प्रेशन के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["compress", "zip", "gzip", "archive"],
        "options_hi": ["compress", "zip", "gzip", "archive"],
        "answer_en": "compress",
        "answer_hi": "compress",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the purpose of the 'go clean' command?",
        "question_hi": "'go clean' कमांड का उद्देश्य क्या है?",
        "options_en": ["To remove object files and cached files", "To clean code", "To remove dependencies", "To clear cache"],
        "options_hi": ["ऑब्जेक्ट फाइल और कैश्ड फाइल रिमूव करने के लिए", "कोड क्लीन करने के लिए", "डिपेंडेंसी रिमूव करने के लिए", "कैश क्लियर करने के लिए"],
        "answer_en": "To remove object files and cached files",
        "answer_hi": "ऑब्जेक्ट फाइल और कैश्ड फाइल रिमूव करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "How do you implement a read-write mutex?",
        "question_hi": "रीड-राइट म्यूटेक्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sync.RWMutex", "Using sync.Mutex", "Using sync.Lock", "Using mutex.RW"],
        "options_hi": ["sync.RWMutex का उपयोग करके", "sync.Mutex का उपयोग करके", "sync.Lock का उपयोग करके", "mutex.RW का उपयोग करके"],
        "answer_en": "Using sync.RWMutex",
        "answer_hi": "sync.RWMutex का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the purpose of the 'go list' command?",
        "question_hi": "'go list' कमांड का उद्देश्य क्या है?",
        "options_en": ["To list packages or modules", "To list files", "To list dependencies", "To list functions"],
        "options_hi": ["पैकेज या मॉड्यूल लिस्ट करने के लिए", "फाइल लिस्ट करने के लिए", "डिपेंडेंसी लिस्ट करने के लिए", "फंक्शन लिस्ट करने के लिए"],
        "answer_en": "To list packages or modules",
        "answer_hi": "पैकेज या मॉड्यूल लिस्ट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which package is used for regular expressions?",
        "question_hi": "रेगुलर एक्सप्रेशन के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["regexp", "regex", "re", "pattern"],
        "options_hi": ["regexp", "regex", "re", "pattern"],
        "answer_en": "regexp",
        "answer_hi": "regexp",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the purpose of the 'go install' command?",
        "question_hi": "'go install' कमांड का उद्देश्य क्या है?",
        "options_en": ["To compile and install packages", "To install Go", "To install dependencies", "To setup environment"],
        "options_hi": ["पैकेज कम्पाइल और इंस्टॉल करने के लिए", "Go इंस्टॉल करने के लिए", "डिपेंडेंसी इंस्टॉल करने के लिए", "एनवायरनमेंट सेटअप करने के लिए"],
        "answer_en": "To compile and install packages",
        "answer_hi": "पैकेज कम्पाइल और इंस्टॉल करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "How do you create a tagged union in Go?",
        "question_hi": "Go में टैग्ड यूनियन कैसे बनाते हैं?",
        "options_en": ["Using interfaces with type switches", "Using unions", "Using structs with tags", "Using enums"],
        "options_hi": ["टाइप स्विच के साथ इंटरफेस का उपयोग करके", "यूनियन का उपयोग करके", "टैग के साथ स्ट्रक्ट का उपयोग करके", "एनम का उपयोग करके"],
        "answer_en": "Using interfaces with type switches",
        "answer_hi": "टाइप स्विच के साथ इंटरफेस का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the purpose of the 'go generate' command?",
        "question_hi": "'go generate' कमांड का उद्देश्य क्या है?",
        "options_en": ["To run code generation tools", "To generate code", "To create files", "To build generators"],
        "options_hi": ["कोड जनरेशन टूल रन करने के लिए", "कोड जनरेट करने के लिए", "फाइल बनाने के लिए", "जनरेटर बिल्ड करने के लिए"],
        "answer_en": "To run code generation tools",
        "answer_hi": "कोड जनरेशन टूल रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which package is used for context management?",
        "question_hi": "कॉन्टेक्स्ट मैनेजमेंट के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["context", "ctx", "concurrent", "async"],
        "options_hi": ["context", "ctx", "concurrent", "async"],
        "answer_en": "context",
        "answer_hi": "context",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the purpose of the 'go version' command?",
        "question_hi": "'go version' कमांड का उद्देश्य क्या है?",
        "options_en": ["To print Go version", "To check version compatibility", "To update version", "To set version"],
        "options_hi": ["Go वर्जन प्रिंट करने के लिए", "वर्जन कंपैटिबिलिटी चेक करने के लिए", "वर्जन अपडेट करने के लिए", "वर्जन सेट करने के लिए"],
        "answer_en": "To print Go version",
        "answer_hi": "Go वर्जन प्रिंट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "How do you create a function type?",
        "question_hi": "फंक्शन टाइप कैसे बनाते हैं?",
        "options_en": ["type FuncType func(params) returnType", "func type FuncType(params) returnType", "typedef func(params) returnType FuncType", "function type FuncType(params) returnType"],
        "options_hi": ["type FuncType func(params) returnType", "func type FuncType(params) returnType", "typedef func(params) returnType FuncType", "function type FuncType(params) returnType"],
        "answer_en": "type FuncType func(params) returnType",
        "answer_hi": "type FuncType func(params) returnType",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the purpose of the 'go env' command?",
        "question_hi": "'go env' कमांड का उद्देश्य क्या है?",
        "options_en": ["To print Go environment information", "To set environment variables", "To check environment", "To configure environment"],
        "options_hi": ["Go एनवायरनमेंट इनफार्मेशन प्रिंट करने के लिए", "एनवायरनमेंट वेरिएबल सेट करने के लिए", "एनवायरनमेंट चेक करने के लिए", "एनवायरनमेंट कॉन्फिगर करने के लिए"],
        "answer_en": "To print Go environment information",
        "answer_hi": "Go एनवायरनमेंट इनफार्मेशन प्रिंट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which package is used for template processing?",
        "question_hi": "टेम्पलेट प्रोसेसिंग के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["text/template", "template", "html/template", "templates"],
        "options_hi": ["text/template", "template", "html/template", "templates"],
        "answer_en": "text/template",
        "answer_hi": "text/template",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the purpose of the 'go fix' command?",
        "question_hi": "'go fix' कमांड का उद्देश्य क्या है?",
        "options_en": ["To update packages to use new APIs", "To fix bugs", "To correct syntax", "To repair code"],
        "options_hi": ["नए API का उपयोग करने के लिए पैकेज अपडेट करने के लिए", "बग फिक्स करने के लिए", "सिंटैक्स करेक्ट करने के लिए", "कोड रिपेयर करने के लिए"],
        "answer_en": "To update packages to use new APIs",
        "answer_hi": "नए API का उपयोग करने के लिए पैकेज अपडेट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "How do you create a method with pointer receiver?",
        "question_hi": "पॉइंटर रिसीवर के साथ मेथड कैसे बनाते हैं?",
        "options_en": ["func (receiver *StructType) methodName() returnType", "func (*receiver StructType) methodName() returnType", "func methodName(receiver *StructType) returnType", "func (receiver StructType*) methodName() returnType"],
        "options_hi": ["func (receiver *StructType) methodName() returnType", "func (*receiver StructType) methodName() returnType", "func methodName(receiver *StructType) returnType", "func (receiver StructType*) methodName() returnType"],
        "answer_en": "func (receiver *StructType) methodName() returnType",
        "answer_hi": "func (receiver *StructType) methodName() returnType",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the purpose of the 'go work' command?",
        "question_hi": "'go work' कमांड का उद्देश्य क्या है?",
        "options_en": ["To manage workspace modules", "To work on code", "To set workspace", "To manage projects"],
        "options_hi": ["वर्कस्पेस मॉड्यूल मैनेज करने के लिए", "कोड पर काम करने के लिए", "वर्कस्पेस सेट करने के लिए", "प्रोजेक्ट मैनेज करने के लिए"],
        "answer_en": "To manage workspace modules",
        "answer_hi": "वर्कस्पेस मॉड्यूल मैनेज करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which package is used for atomic operations?",
        "question_hi": "एटॉमिक ऑपरेशन के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["sync/atomic", "atomic", "sync", "concurrent/atomic"],
        "options_hi": ["sync/atomic", "atomic", "sync", "concurrent/atomic"],
        "answer_en": "sync/atomic",
        "answer_hi": "sync/atomic",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the purpose of the 'go tool' command?",
        "question_hi": "'go tool' कमांड का उद्देश्य क्या है?",
        "options_en": ["To run specified Go tool", "To manage tools", "To install tools", "To list tools"],
        "options_hi": ["स्पेसिफाइड Go टूल रन करने के लिए", "टूल मैनेज करने के लिए", "टूल इंस्टॉल करने के लिए", "टूल लिस्ट करने के लिए"],
        "answer_en": "To run specified Go tool",
        "answer_hi": "स्पेसिफाइड Go टूल रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "How do you create a type assertion?",
        "question_hi": "टाइप असर्शन कैसे बनाते हैं?",
        "options_en": ["value := interfaceVar.(Type)", "value := (Type)interfaceVar", "value := interfaceVar as Type", "value := assert(interfaceVar, Type)"],
        "options_hi": ["value := interfaceVar.(Type)", "value := (Type)interfaceVar", "value := interfaceVar as Type", "value := assert(interfaceVar, Type)"],
        "answer_en": "value := interfaceVar.(Type)",
        "answer_hi": "value := interfaceVar.(Type)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the purpose of the 'go mod init' command?",
        "question_hi": "'go mod init' कमांड का उद्देश्य क्या है?",
        "options_en": ["To initialize new module in current directory", "To initialize project", "To create module", "To setup module"],
        "options_hi": ["करंट डायरेक्टरी में नया मॉड्यूल इनिशियलाइज़ करने के लिए", "प्रोजेक्ट इनिशियलाइज़ करने के लिए", "मॉड्यूल बनाने के लिए", "मॉड्यूल सेटअप करने के लिए"],
        "answer_en": "To initialize new module in current directory",
        "answer_hi": "करंट डायरेक्टरी में नया मॉड्यूल इनिशियलाइज़ करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which package is used for reflection?",
        "question_hi": "रिफ्लेक्शन के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["reflect", "reflection", "meta", "runtime/reflect"],
        "options_hi": ["reflect", "reflection", "meta", "runtime/reflect"],
        "answer_en": "reflect",
        "answer_hi": "reflect",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the purpose of the 'go mod tidy' command?",
        "question_hi": "'go mod tidy' कमांड का उद्देश्य क्या है?",
        "options_en": ["To add missing and remove unused modules", "To clean modules", "To organize modules", "To update modules"],
        "options_hi": ["मिसिंग मॉड्यूल ऐड और अनयूज्ड मॉड्यूल रिमूव करने के लिए", "मॉड्यूल क्लीन करने के लिए", "मॉड्यूल ऑर्गनाइज़ करने के लिए", "मॉड्यूल अपडेट करने के लिए"],
        "answer_en": "To add missing and remove unused modules",
        "answer_hi": "मिसिंग मॉड्यूल ऐड और अनयूज्ड मॉड्यूल रिमूव करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "How do you create a type switch?",
        "question_hi": "टाइप स्विच कैसे बनाते हैं?",
        "options_en": ["switch v := i.(type) { case T: ... }", "switch (type) i { case T: ... }", "switch i.(type) { case T: ... }", "switch type i { case T: ... }"],
        "options_hi": ["switch v := i.(type) { case T: ... }", "switch (type) i { case T: ... }", "switch i.(type) { case T: ... }", "switch type i { case T: ... }"],
        "answer_en": "switch v := i.(type) { case T: ... }",
        "answer_hi": "switch v := i.(type) { case T: ... }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the purpose of the 'go mod vendor' command?",
        "question_hi": "'go mod vendor' कमांड का उद्देश्य क्या है?",
        "options_en": ["To make vendored copy of dependencies", "To create vendor directory", "To vendor modules", "To copy dependencies"],
        "options_hi": ["डिपेंडेंसी की वेंडर्ड कॉपी बनाने के लिए", "वेंडर डायरेक्टरी बनाने के लिए", "मॉड्यूल वेंडर करने के लिए", "डिपेंडेंसी कॉपी करने के लिए"],
        "answer_en": "To make vendored copy of dependencies",
        "answer_hi": "डिपेंडेंसी की वेंडर्ड कॉपी बनाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which package is used for binary data reading and writing?",
        "question_hi": "बाइनरी डेटा रीडिंग और राइटिंग के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["encoding/binary", "binary", "bytes", "encoding"],
        "options_hi": ["encoding/binary", "binary", "bytes", "encoding"],
        "answer_en": "encoding/binary",
        "answer_hi": "encoding/binary",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the purpose of the 'go mod download' command?",
        "question_hi": "'go mod download' कमांड का उद्देश्य क्या है?",
        "options_en": ["To download modules to local cache", "To download dependencies", "To get modules", "To cache modules"],
        "options_hi": ["लोकल कैश में मॉड्यूल डाउनलोड करने के लिए", "डिपेंडेंसी डाउनलोड करने के लिए", "मॉड्यूल प्राप्त करने के लिए", "मॉड्यूल कैश करने के लिए"],
        "answer_en": "To download modules to local cache",
        "answer_hi": "लोकल कैश में मॉड्यूल डाउनलोड करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "How do you create a custom error type?",
        "question_hi": "कस्टम एरर टाइप कैसे बनाते हैं?",
        "options_en": ["By implementing Error() string method", "By extending error interface", "By creating error struct", "By using custom error"],
        "options_hi": ["Error() string मेथड इम्प्लीमेंट करके", "error इंटरफेस एक्सटेंड करके", "error स्ट्रक्ट बनाकर", "कस्टम error का उपयोग करके"],
        "answer_en": "By implementing Error() string method",
        "answer_hi": "Error() string मेथड इम्प्लीमेंट करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the purpose of the 'go mod verify' command?",
        "question_hi": "'go mod verify' कमांड का उद्देश्य क्या है?",
        "options_en": ["To verify dependencies have expected content", "To check module integrity", "To validate modules", "To verify checksums"],
        "options_hi": ["डिपेंडेंसी के एक्सपेक्टेड कंटेंट को वेरिफाई करने के लिए", "मॉड्यूल इंटीग्रिटी चेक करने के लिए", "मॉड्यूल वैलिडेट करने के लिए", "चेकसम वेरिफाई करने के लिए"],
        "answer_en": "To verify dependencies have expected content",
        "answer_hi": "डिपेंडेंसी के एक्सपेक्टेड कंटेंट को वेरिफाई करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which package is used for SQL database operations?",
        "question_hi": "SQL डेटाबेस ऑपरेशन के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["database/sql", "sql", "db", "database"],
        "options_hi": ["database/sql", "sql", "db", "database"],
        "answer_en": "database/sql",
        "answer_hi": "database/sql",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the purpose of the 'go mod graph' command?",
        "question_hi": "'go mod graph' कमांड का उद्देश्य क्या है?",
        "options_en": ["To print module requirement graph", "To show dependency graph", "To visualize modules", "To graph relationships"],
        "options_hi": ["मॉड्यूल रिक्वायरमेंट ग्राफ प्रिंट करने के लिए", "डिपेंडेंसी ग्राफ दिखाने के लिए", "मॉड्यूल विजुअलाइज़ करने के लिए", "रिलेशनशिप ग्राफ करने के लिए"],
        "answer_en": "To print module requirement graph",
        "answer_hi": "मॉड्यूल रिक्वायरमेंट ग्राफ प्रिंट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "How do you create a method on a non-struct type?",
        "question_hi": "नॉन-स्ट्रक्ट टाइप पर मेथड कैसे बनाते हैं?",
        "options_en": ["By defining method on type alias", "Using extension methods", "Using wrapper types", "It's not possible"],
        "options_hi": ["टाइप एलियास पर मेथड डिफाइन करके", "एक्सटेंशन मेथड का उपयोग करके", "रैपर टाइप का उपयोग करके", "यह संभव नहीं है"],
        "answer_en": "By defining method on type alias",
        "answer_hi": "टाइप एलियास पर मेथड डिफाइन करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the purpose of the 'go mod why' command?",
        "question_hi": "'go mod why' कमांड का उद्देश्य क्या है?",
        "options_en": ["To explain why packages or modules are needed", "To find why imports are used", "To explain dependencies", "To show requirement reasons"],
        "options_hi": ["एक्सप्लेन करने के लिए कि पैकेज या मॉड्यूल की आवश्यकता क्यों है", "फाइंड करने के लिए कि इम्पोर्ट का उपयोग क्यों किया जाता है", "डिपेंडेंसी एक्सप्लेन करने के लिए", "रिक्वायरमेंट रीजन दिखाने के लिए"],
        "answer_en": "To explain why packages or modules are needed",
        "answer_hi": "एक्सप्लेन करने के लिए कि पैकेज या मॉड्यूल की आवश्यकता क्यों है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which package is used for HTTP/2 support?",
        "question_hi": "HTTP/2 सपोर्ट के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["golang.org/x/net/http2", "net/http2", "http2", "net/http/http2"],
        "options_hi": ["golang.org/x/net/http2", "net/http2", "http2", "net/http/http2"],
        "answer_en": "golang.org/x/net/http2",
        "answer_hi": "golang.org/x/net/http2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the purpose of the 'go mod edit' command?",
        "question_hi": "'go mod edit' कमांड का उद्देश्य क्या है?",
        "options_en": ["To edit go.mod from tools or scripts", "To modify modules", "To edit dependencies", "To change module settings"],
        "options_hi": ["टूल या स्क्रिप्ट से go.mod एडिट करने के लिए", "मॉड्यूल मॉडिफाई करने के लिए", "डिपेंडेंसी एडिट करने के लिए", "मॉड्यूल सेटिंग चेंज करने के लिए"],
        "answer_en": "To edit go.mod from tools or scripts",
        "answer_hi": "टूल या स्क्रिप्ट से go.mod एडिट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "How do you create a generic function?",
        "question_hi": "जेनरिक फंक्शन कैसे बनाते हैं?",
        "options_en": ["func name[T constraint](params) returnType", "func name[T any](params) returnType", "generic func name[T](params) returnType", "func name generic[T](params) returnType"],
        "options_hi": ["func name[T constraint](params) returnType", "func name[T any](params) returnType", "generic func name[T](params) returnType", "func name generic[T](params) returnType"],
        "answer_en": "func name[T constraint](params) returnType",
        "answer_hi": "func name[T constraint](params) returnType",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the purpose of the 'go.sum' file?",
        "question_hi": "'go.sum' फाइल का उद्देश्य क्या है?",
        "options_en": ["To record cryptographic checksums of dependencies", "To sum dependencies", "To track module versions", "To verify integrity"],
        "options_hi": ["डिपेंडेंसी के क्रिप्टोग्राफिक चेकसम रिकॉर्ड करने के लिए", "डिपेंडेंसी सम करने के लिए", "मॉड्यूल वर्जन ट्रैक करने के लिए", "इंटीग्रिटी वेरिफाई करने के लिए"],
        "answer_en": "To record cryptographic checksums of dependencies",
        "answer_hi": "डिपेंडेंसी के क्रिप्टोग्राफिक चेकसम रिकॉर्ड करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which package is used for profiling?",
        "question_hi": "प्रोफाइलिंग के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["runtime/pprof", "pprof", "profile", "runtime/profile"],
        "options_hi": ["runtime/pprof", "pprof", "profile", "runtime/profile"],
        "answer_en": "runtime/pprof",
        "answer_hi": "runtime/pprof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the purpose of the 'go.mod' file?",
        "question_hi": "'go.mod' फाइल का उद्देश्य क्या है?",
        "options_en": ["To define module's path and dependencies", "To configure Go module", "To list dependencies", "To specify module settings"],
        "options_hi": ["मॉड्यूल के पथ और डिपेंडेंसी डिफाइन करने के लिए", "Go मॉड्यूल कॉन्फिगर करने के लिए", "डिपेंडेंसी लिस्ट करने के लिए", "मॉड्यूल सेटिंग स्पेसिफाई करने के लिए"],
        "answer_en": "To define module's path and dependencies",
        "answer_hi": "मॉड्यूल के पथ और डिपेंडेंसी डिफाइन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "How do you create a type constraint?",
        "question_hi": "टाइप कंस्ट्रेंट कैसे बनाते हैं?",
        "options_en": ["type constraint interface { ... }", "constraint type interface { ... }", "type interface constraint { ... }", "interface constraint type { ... }"],
        "options_hi": ["type constraint interface { ... }", "constraint type interface { ... }", "type interface constraint { ... }", "interface constraint type { ... }"],
        "answer_en": "type constraint interface { ... }",
        "answer_hi": "type constraint interface { ... }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the purpose of the 'any' type alias?",
        "question_hi": "'any' टाइप एलियास का उद्देश्य क्या है?",
        "options_en": ["It's an alias for interface{} for better readability", "It's a new generic type", "It replaces all interfaces", "It's for any data type"],
        "options_hi": ["यह बेहतर रीडेबिलिटी के लिए interface{} का एलियास है", "यह एक नया जेनरिक टाइप है", "यह सभी इंटरफेस को रिप्लेस करता है", "यह किसी भी डेटा टाइप के लिए है"],
        "answer_en": "It's an alias for interface{} for better readability",
        "answer_hi": "यह बेहतर रीडेबिलिटी के लिए interface{} का एलियास है",
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