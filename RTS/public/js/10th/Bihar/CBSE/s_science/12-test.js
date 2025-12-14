const questions=[
    {
        "num": 1,
        "question_en": "What is the entry point of a Go program?",
        "question_hi": "Go प्रोग्राम का एंट्री पॉइंट क्या है?",
        "options_en": ["main() function", "init() function", "start() function", "package main"],
        "options_hi": ["main() फंक्शन", "init() फंक्शन", "start() फंक्शन", "package main"],
        "answer_en": "main() function",
        "answer_hi": "main() फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which keyword is used to import packages in Go?",
        "question_hi": "Go में पैकेज इम्पोर्ट करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["import", "include", "require", "package"],
        "options_hi": ["import", "include", "require", "package"],
        "answer_en": "import",
        "answer_hi": "import",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the default value of a boolean variable in Go?",
        "question_hi": "Go में boolean वेरिएबल का डिफॉल्ट वैल्यू क्या है?",
        "options_en": ["false", "true", "0", "nil"],
        "options_hi": ["false", "true", "0", "nil"],
        "answer_en": "false",
        "answer_hi": "false",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you declare a constant in Go?",
        "question_hi": "Go में कॉन्स्टेंट कैसे डिक्लेयर करते हैं?",
        "options_en": ["const x = 10", "var x constant = 10", "let x = 10", "constant x = 10"],
        "options_hi": ["const x = 10", "var x constant = 10", "let x = 10", "constant x = 10"],
        "answer_en": "const x = 10",
        "answer_hi": "const x = 10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the length of an empty slice in Go?",
        "question_hi": "Go में खाली स्लाइस की लंबाई क्या है?",
        "options_en": ["0", "nil", "-1", "undefined"],
        "options_hi": ["0", "nil", "-1", "अपरिभाषित"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which function is used to get the length of a slice?",
        "question_hi": "स्लाइस की लंबाई प्राप्त करने के लिए किस फंक्शन का उपयोग किया जाता है?",
        "options_en": ["len()", "length()", "size()", "cap()"],
        "options_hi": ["len()", "length()", "size()", "cap()"],
        "answer_en": "len()",
        "answer_hi": "len()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of the 'defer' keyword?",
        "question_hi": "'defer' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Delay function execution", "Delete function", "Define function", "Debug function"],
        "options_hi": ["फंक्शन एक्जिक्यूशन डिले करना", "फंक्शन डिलीट करना", "फंक्शन डिफाइन करना", "फंक्शन डीबग करना"],
        "answer_en": "Delay function execution",
        "answer_hi": "फंक्शन एक्जिक्यूशन डिले करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you create a new channel in Go?",
        "question_hi": "Go में नया चैनल कैसे बनाते हैं?",
        "options_en": ["make(chan int)", "new(chan int)", "chan int{}", "channel(int)"],
        "options_hi": ["make(chan int)", "new(chan int)", "chan int{}", "channel(int)"],
        "answer_en": "make(chan int)",
        "answer_hi": "make(chan int)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the zero value for an interface in Go?",
        "question_hi": "Go में इंटरफेस का जीरो वैल्यू क्या है?",
        "options_en": ["nil", "0", "false", "null"],
        "options_hi": ["nil", "0", "false", "null"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which package is used for formatted I/O?",
        "question_hi": "फॉर्मेटेड I/O के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["fmt", "io", "os", "bufio"],
        "options_hi": ["fmt", "io", "os", "bufio"],
        "answer_en": "fmt",
        "answer_hi": "fmt",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "How do you write comments in Go?",
        "question_hi": "Go में कमेंट कैसे लिखते हैं?",
        "options_en": ["// Single line", "/* Multi line */", "Both A and B", "# Single line"],
        "options_hi": ["// सिंगल लाइन", "/* मल्टी लाइन */", "A और B दोनों", "# सिंगल लाइन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the type of 'len' function in Go?",
        "question_hi": "Go में 'len' फंक्शन का टाइप क्या है?",
        "options_en": ["Built-in function", "Standard library function", "User-defined function", "Method"],
        "options_hi": ["बिल्ट-इन फंक्शन", "स्टैंडर्ड लाइब्रेरी फंक्शन", "यूजर-डिफाइंड फंक्शन", "मेथड"],
        "answer_en": "Built-in function",
        "answer_hi": "बिल्ट-इन फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How do you convert an integer to string in Go?",
        "question_hi": "Go में इंटीजर को स्ट्रिंग में कैसे कन्वर्ट करते हैं?",
        "options_en": ["strconv.Itoa()", "string()", "fmt.Sprintf()", "All of the above"],
        "options_hi": ["strconv.Itoa()", "string()", "fmt.Sprintf()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the purpose of 'go mod init' command?",
        "question_hi": "'go mod init' कमांड का उद्देश्य क्या है?",
        "options_en": ["Initialize new module", "Install dependencies", "Update modules", "Create new package"],
        "options_hi": ["नया मॉड्यूल इनिशियलाइज करना", "डिपेंडेंसी इंस्टॉल करना", "मॉड्यूल अपडेट करना", "नया पैकेज बनाना"],
        "answer_en": "Initialize new module",
        "answer_hi": "नया मॉड्यूल इनिशियलाइज करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which data type is used for dynamic arrays in Go?",
        "question_hi": "Go में डायनामिक ऐरे के लिए किस डेटा टाइप का उपयोग किया जाता है?",
        "options_en": ["Slice", "Array", "Map", "List"],
        "options_hi": ["स्लाइस", "ऐरे", "मैप", "लिस्ट"],
        "answer_en": "Slice",
        "answer_hi": "स्लाइस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you handle errors in Go?",
        "question_hi": "Go में errors को कैसे हैंडल करते हैं?",
        "options_en": ["Return error value", "Try-catch blocks", "Panic recovery", "Both A and C"],
        "options_hi": ["error वैल्यू रिटर्न करना", "Try-catch ब्लॉक्स", "Panic recovery", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the capacity of a slice?",
        "question_hi": "स्लाइस की कैपेसिटी क्या है?",
        "options_en": ["Maximum elements it can hold", "Current elements count", "Memory size", "Both A and C"],
        "options_hi": ["मैक्सिमम एलिमेंट्स जो इसे होल्ड कर सकती है", "करंट एलिमेंट्स काउंट", "मेमोरी साइज", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which function is used to append elements to a slice?",
        "question_hi": "स्लाइस में एलिमेंट्स ऐपेंड करने के लिए किस फंक्शन का उपयोग किया जाता है?",
        "options_en": ["append()", "add()", "push()", "insert()"],
        "options_hi": ["append()", "add()", "push()", "insert()"],
        "answer_en": "append()",
        "answer_hi": "append()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the type of 'true' and 'false' in Go?",
        "question_hi": "Go में 'true' और 'false' का टाइप क्या है?",
        "options_en": ["bool", "boolean", "int", "string"],
        "options_hi": ["bool", "boolean", "int", "string"],
        "answer_en": "bool",
        "answer_hi": "bool",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you create a pointer variable?",
        "question_hi": "पॉइंटर वेरिएबल कैसे बनाते हैं?",
        "options_en": ["var p *int", "p := &x", "Both A and B", "new(int)"],
        "options_hi": ["var p *int", "p := &x", "A और B दोनों", "new(int)"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of the 'interface{}' type?",
        "question_hi": "'interface{}' टाइप का उद्देश्य क्या है?",
        "options_en": ["Empty interface", "Accepts any type", "Both A and B", "Interface definition"],
        "options_hi": ["खाली इंटरफेस", "किसी भी टाइप को एक्सेप्ट करता है", "A और B दोनों", "इंटरफेस डेफिनिशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which package is used for HTTP operations?",
        "question_hi": "HTTP ऑपरेशन्स के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["net/http", "http", "web", "net"],
        "options_hi": ["net/http", "http", "web", "net"],
        "answer_en": "net/http",
        "answer_hi": "net/http",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "How do you create a goroutine?",
        "question_hi": "गोरूटीन कैसे बनाते हैं?",
        "options_en": ["go function()", "goroutine function()", "async function()", "thread function()"],
        "options_hi": ["go function()", "goroutine function()", "async function()", "thread function()"],
        "answer_en": "go function()",
        "answer_hi": "go function()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the zero value for numeric types?",
        "question_hi": "न्यूमेरिक टाइप्स का जीरो वैल्यू क्या है?",
        "options_en": ["0", "nil", "false", "null"],
        "options_hi": ["0", "nil", "false", "null"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "How do you check variable type at runtime?",
        "question_hi": "रनटाइम पर वेरिएबल टाइप कैसे चेक करते हैं?",
        "options_en": ["Type switches", "reflect package", "Both A and B", "typeof operator"],
        "options_hi": ["टाइप स्विच", "reflect पैकेज", "A और B दोनों", "typeof ऑपरेटर"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the purpose of 'go get' command?",
        "question_hi": "'go get' कमांड का उद्देश्य क्या है?",
        "options_en": ["Download packages", "Install dependencies", "Both A and B", "Update Go version"],
        "options_hi": ["पैकेज डाउनलोड करना", "डिपेंडेंसी इंस्टॉल करना", "A और B दोनों", "Go वर्जन अपडेट करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which method is used to read user input?",
        "question_hi": "यूजर इनपुट पढ़ने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["fmt.Scan()", "bufio.NewReader", "os.Stdin.Read", "All of the above"],
        "options_hi": ["fmt.Scan()", "bufio.NewReader", "os.Stdin.Read", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is a struct in Go?",
        "question_hi": "Go में स्ट्रक्ट क्या है?",
        "options_en": ["Collection of fields", "User-defined type", "Both A and B", "Function collection"],
        "options_hi": ["फील्ड्स का कलेक्शन", "यूजर-डिफाइंड टाइप", "A और B दोनों", "फंक्शन कलेक्शन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How do you implement inheritance in Go?",
        "question_hi": "Go में इनहेरिटेंस कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Embedding structs", "Using extends keyword", "Inheritance keyword", "Not supported"],
        "options_hi": ["स्ट्रक्ट्स एम्बेड करना", "extends कीवर्ड का उपयोग", "Inheritance कीवर्ड", "सपोर्टेड नहीं"],
        "answer_en": "Embedding structs",
        "answer_hi": "स्ट्रक्ट्स एम्बेड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the purpose of 'go test' command?",
        "question_hi": "'go test' कमांड का उद्देश्य क्या है?",
        "options_en": ["Run tests", "Test coverage", "Benchmark tests", "All of the above"],
        "options_hi": ["टेस्ट रन करना", "टेस्ट कवरेज", "बेंचमार्क टेस्ट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "How do you create a buffered channel?",
        "question_hi": "बफर्ड चैनल कैसे बनाते हैं?",
        "options_en": ["make(chan int, size)", "buffered(chan int)", "chan int{buffer: size}", "new(chan int, size)"],
        "options_hi": ["make(chan int, size)", "buffered(chan int)", "chan int{buffer: size}", "new(chan int, size)"],
        "answer_en": "make(chan int, size)",
        "answer_hi": "make(chan int, size)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the difference between array and slice?",
        "question_hi": "ऐरे और स्लाइस में क्या अंतर है?",
        "options_en": ["Array fixed size, slice dynamic", "No difference", "Slice fixed size", "Both are same"],
        "options_hi": ["ऐरे फिक्स्ड साइज, स्लाइस डायनामिक", "कोई अंतर नहीं", "स्लाइस फिक्स्ड साइज", "दोनों समान हैं"],
        "answer_en": "Array fixed size, slice dynamic",
        "answer_hi": "ऐरे फिक्स्ड साइज, स्लाइस डायनामिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which package is used for JSON operations?",
        "question_hi": "JSON ऑपरेशन्स के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["encoding/json", "json", "fmt", "io/json"],
        "options_hi": ["encoding/json", "json", "fmt", "io/json"],
        "answer_en": "encoding/json",
        "answer_hi": "encoding/json",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you handle concurrent map access?",
        "question_hi": "कंकरंट मैप एक्सेस कैसे हैंडल करते हैं?",
        "options_en": ["sync.Mutex", "sync.RWMutex", "channels", "All of the above"],
        "options_hi": ["sync.Mutex", "sync.RWMutex", "चैनल्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of 'context' package?",
        "question_hi": "'context' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Request context management", "Cancellation signals", "Deadlines", "All of the above"],
        "options_hi": ["रिक्वेस्ट कॉन्टेक्स्ट मैनेजमेंट", "कैंसलेशन सिग्नल्स", "डेडलाइन्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do you create a custom error?",
        "question_hi": "कस्टम error कैसे बनाते हैं?",
        "options_en": ["errors.New()", "fmt.Errorf()", "Implement error interface", "All of the above"],
        "options_hi": ["errors.New()", "fmt.Errorf()", "error इंटरफेस इम्प्लीमेंट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of 'sync.WaitGroup'?",
        "question_hi": "'sync.WaitGroup' का उद्देश्य क्या है?",
        "options_en": ["Wait for goroutines", "Synchronization", "Both A and B", "Channel waiting"],
        "options_hi": ["गोरूटीन्स का इंतज़ार करना", "सिंक्रोनाइजेशन", "A और B दोनों", "चैनल वेटिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How do you implement polymorphism in Go?",
        "question_hi": "Go में पोलीमॉर्फिज्म कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using interfaces", "Method overriding", "Both A and B", "Not supported"],
        "options_hi": ["इंटरफेस का उपयोग करके", "मेथड ओवरराइडिंग", "A और B दोनों", "सपोर्टेड नहीं"],
        "answer_en": "Using interfaces",
        "answer_hi": "इंटरफेस का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of 'go build' command?",
        "question_hi": "'go build' कमांड का उद्देश्य क्या है?",
        "options_en": ["Compile packages", "Create executable", "Both A and B", "Run tests"],
        "options_hi": ["पैकेज कंपाइल करना", "एक्जीक्यूटेबल बनाना", "A और B दोनों", "टेस्ट रन करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How do you convert string to integer?",
        "question_hi": "स्ट्रिंग को इंटीजर में कैसे कन्वर्ट करते हैं?",
        "options_en": ["strconv.Atoi()", "int.Parse()", "string.ToInt()", "convert.Int()"],
        "options_hi": ["strconv.Atoi()", "int.Parse()", "string.ToInt()", "convert.Int()"],
        "answer_en": "strconv.Atoi()",
        "answer_hi": "strconv.Atoi()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of 'time' package?",
        "question_hi": "'time' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Time operations", "Sleep function", "Tickers and timers", "All of the above"],
        "options_hi": ["टाइम ऑपरेशन्स", "Sleep फंक्शन", "टिकर और टाइमर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How do you create a method with pointer receiver?",
        "question_hi": "पॉइंटर रिसीवर के साथ मेथड कैसे बनाते हैं?",
        "options_en": ["func (s *Struct) Method()", "func (*s Struct) Method()", "func Method(s *Struct)", "pointer func (s Struct) Method()"],
        "options_hi": ["func (s *Struct) Method()", "func (*s Struct) Method()", "func Method(s *Struct)", "pointer func (s Struct) Method()"],
        "answer_en": "func (s *Struct) Method()",
        "answer_hi": "func (s *Struct) Method()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of 'go fmt' command?",
        "question_hi": "'go fmt' कमांड का उद्देश्य क्या है?",
        "options_en": ["Format code", "Standardize code style", "Both A and B", "Fix syntax errors"],
        "options_hi": ["कोड फॉर्मेट करना", "कोड स्टाइल स्टैंडर्डाइज करना", "A और B दोनों", "सिंटैक्स एरर फिक्स करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How do you implement string representation for custom types?",
        "question_hi": "कस्टम टाइप्स के लिए स्ट्रिंग रिप्रेजेंटेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["String() method", "ToString() method", "fmt.Stringer interface", "Both A and C"],
        "options_hi": ["String() मेथड", "ToString() मेथड", "fmt.Stringer इंटरफेस", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of 'sync.Once'?",
        "question_hi": "'sync.Once' का उद्देश्य क्या है?",
        "options_en": ["Execute once", "Thread-safe initialization", "Both A and B", "Run multiple times"],
        "options_hi": ["एक बार एक्जिक्यूट करना", "थ्रेड-सेफ इनिशियलाइजेशन", "A और B दोनों", "मल्टीपल टाइम्स रन करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How do you create a file in Go?",
        "question_hi": "Go में फाइल कैसे बनाते हैं?",
        "options_en": ["os.Create()", "file.New()", "io.Create()", "files.Create()"],
        "options_hi": ["os.Create()", "file.New()", "io.Create()", "files.Create()"],
        "answer_en": "os.Create()",
        "answer_hi": "os.Create()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of 'regexp' package?",
        "question_hi": "'regexp' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Regular expressions", "Pattern matching", "String search", "All of the above"],
        "options_hi": ["रेगुलर एक्सप्रेशन", "पैटर्न मैचिंग", "स्ट्रिंग सर्च", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you implement custom sorting?",
        "question_hi": "कस्टम सॉर्टिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["sort.Interface", "Implement Len, Less, Swap", "Both A and B", "sort.Sort()"],
        "options_hi": ["sort.Interface", "Len, Less, Swap इम्प्लीमेंट करना", "A और B दोनों", "sort.Sort()"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of 'flag' package?",
        "question_hi": "'flag' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Command-line flags", "Argument parsing", "Both A and B", "Environment variables"],
        "options_hi": ["कमांड-लाइन फ्लैग्स", "आर्गुमेंट पार्सिंग", "A और B दोनों", "एनवायरनमेंट वेरिएबल्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you create a HTTP server?",
        "question_hi": "HTTP सर्वर कैसे बनाते हैं?",
        "options_en": ["http.ListenAndServe()", "server.New()", "http.Server{}", "Both A and C"],
        "options_hi": ["http.ListenAndServe()", "server.New()", "http.Server{}", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of 'sync.Pool' in Go?",
        "question_hi": "Go में 'sync.Pool' का उद्देश्य क्या है?",
        "options_en": ["Object pooling", "Reduce GC pressure", "Reuse expensive objects", "All of the above"],
        "options_hi": ["ऑब्जेक्ट पूलिंग", "GC प्रेशर कम करना", "एक्सपेंसिव ऑब्जेक्ट्स रीयूज करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How do you create a TCP server in Go?",
        "question_hi": "Go में TCP सर्वर कैसे बनाते हैं?",
        "options_en": ["net.Listen()", "tcp.NewServer()", "server.TCP()", "net.TCPListen()"],
        "options_hi": ["net.Listen()", "tcp.NewServer()", "server.TCP()", "net.TCPListen()"],
        "answer_en": "net.Listen()",
        "answer_hi": "net.Listen()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of 'go vet' command?",
        "question_hi": "'go vet' कमांड का उद्देश्य क्या है?",
        "options_en": ["Static code analysis", "Find suspicious constructs", "Both A and B", "Run tests"],
        "options_hi": ["स्टैटिक कोड एनालिसिस", "सस्पिशियस कंस्ट्रक्ट्स ढूंढना", "A और B दोनों", "टेस्ट रन करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you implement middleware in HTTP handlers?",
        "question_hi": "HTTP हैंडलर्स में मिडलवेयर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Function composition", "Wrapper functions", "Both A and B", "Inheritance"],
        "options_hi": ["फंक्शन कंपोजिशन", "रैपर फंक्शन्स", "A और B दोनों", "इनहेरिटेंस"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of 'crypto' package?",
        "question_hi": "'crypto' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Cryptographic operations", "Hashing algorithms", "Encryption/Decryption", "All of the above"],
        "options_hi": ["क्रिप्टोग्राफिक ऑपरेशन्स", "हैशिंग एल्गोरिदम", "एन्क्रिप्शन/डिक्रिप्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you handle database operations in Go?",
        "question_hi": "Go में डेटाबेस ऑपरेशन्स कैसे हैंडल करते हैं?",
        "options_en": ["database/sql package", "ORM libraries", "Driver packages", "All of the above"],
        "options_hi": ["database/sql पैकेज", "ORM लाइब्रेरीज", "ड्राइवर पैकेज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of 'go generate' command?",
        "question_hi": "'go generate' कमांड का उद्देश्य क्या है?",
        "options_en": ["Code generation", "Run generators", "Both A and B", "Compile code"],
        "options_hi": ["कोड जेनरेशन", "जेनरेटर्स रन करना", "A और B दोनों", "कोड कंपाइल करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How do you implement graceful shutdown in HTTP server?",
        "question_hi": "HTTP सर्वर में ग्रेसफुल शटडाउन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["context.Context", "signal.Notify()", "Shutdown() method", "All of the above"],
        "options_hi": ["context.Context", "signal.Notify()", "Shutdown() मेथड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of 'unsafe' package?",
        "question_hi": "'unsafe' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Low-level programming", "Type conversions", "Memory operations", "All of the above"],
        "options_hi": ["लो-लेवल प्रोग्रामिंग", "टाइप कन्वर्जन", "मेमोरी ऑपरेशन्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you create a UDP connection?",
        "question_hi": "UDP कनेक्शन कैसे बनाते हैं?",
        "options_en": ["net.ListenPacket()", "udp.New()", "net.DialUDP()", "Both A and C"],
        "options_hi": ["net.ListenPacket()", "udp.New()", "net.DialUDP()", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of 'go doc' command?",
        "question_hi": "'go doc' कमांड का उद्देश्य क्या है?",
        "options_en": ["Documentation viewer", "Show package docs", "Both A and B", "Generate docs"],
        "options_hi": ["डॉक्यूमेंटेशन व्यूअर", "पैकेज डॉक्स दिखाना", "A और B दोनों", "डॉक्स जेनरेट करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How do you implement rate limiting?",
        "question_hi": "रेट लिमिटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["time.Ticker", "golang.org/x/time/rate", "Channel throttling", "All of the above"],
        "options_hi": ["time.Ticker", "golang.org/x/time/rate", "चैनल थ्रॉटलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of 'embed' package?",
        "question_hi": "'embed' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Embed files in binary", "Static assets", "Both A and B", "External files"],
        "options_hi": ["बाइनरी में फाइल्स एम्बेड करना", "स्टैटिक एसेट्स", "A और B दोनों", "एक्सटर्नल फाइल्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How do you create a WebSocket server?",
        "question_hi": "WebSocket सर्वर कैसे बनाते हैं?",
        "options_en": ["golang.org/x/net/websocket", "github.com/gorilla/websocket", "Third-party packages", "All of the above"],
        "options_hi": ["golang.org/x/net/websocket", "github.com/gorilla/websocket", "थर्ड-पार्टी पैकेज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of 'go mod tidy'?",
        "question_hi": "'go mod tidy' का उद्देश्य क्या है?",
        "options_en": ["Clean up dependencies", "Add missing modules", "Remove unused modules", "All of the above"],
        "options_hi": ["डिपेंडेंसी क्लीन अप करना", "मिसिंग मॉड्यूल ऐड करना", "अनयूज्ड मॉड्यूल रिमूव करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How do you implement circuit breaker pattern?",
        "question_hi": "सर्किट ब्रेकर पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["github.com/sony/gobreaker", "Custom implementation", "Both A and B", "Not supported"],
        "options_hi": ["github.com/sony/gobreaker", "कस्टम इम्प्लीमेंटेशन", "A और B दोनों", "सपोर्टेड नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of 'runtime' package?",
        "question_hi": "'runtime' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Go runtime interaction", "GC control", "Goroutine info", "All of the above"],
        "options_hi": ["Go रनटाइम इंटरेक्शन", "GC कंट्रोल", "गोरूटीन इन्फो", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you create a CLI application?",
        "question_hi": "CLI एप्लिकेशन कैसे बनाते हैं?",
        "options_en": ["flag package", "cobra library", "urfave/cli", "All of the above"],
        "options_hi": ["flag पैकेज", "cobra लाइब्रेरी", "urfave/cli", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of 'go work' command?",
        "question_hi": "'go work' कमांड का उद्देश्य क्या है?",
        "options_en": ["Multi-module workspaces", "Local development", "Both A and B", "Single module"],
        "options_hi": ["मल्टी-मॉड्यूल वर्कस्पेस", "लोकल डेवलपमेंट", "A और B दोनों", "सिंगल मॉड्यूल"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How do you implement distributed tracing?",
        "question_hi": "डिस्ट्रीब्यूटेड ट्रेसिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["OpenTelemetry", "Custom tracing", "Third-party tools", "All of the above"],
        "options_hi": ["OpenTelemetry", "कस्टम ट्रेसिंग", "थर्ड-पार्टी टूल्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of 'text/template' package?",
        "question_hi": "'text/template' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Text templating", "Dynamic content generation", "Both A and B", "HTML templates"],
        "options_hi": ["टेक्स्ट टेम्प्लेटिंग", "डायनामिक कंटेंट जेनरेशन", "A और B दोनों", "HTML टेम्प्लेट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How do you handle configuration management?",
        "question_hi": "कॉन्फिगरेशन मैनेजमेंट कैसे हैंडल करते हैं?",
        "options_en": ["Environment variables", "Config files", "Flags", "All of the above"],
        "options_hi": ["एनवायरनमेंट वेरिएबल्स", "कॉन्फिग फाइल्स", "फ्लैग्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of 'go mod vendor'?",
        "question_hi": "'go mod vendor' का उद्देश्य क्या है?",
        "options_en": ["Create vendor directory", "Local dependency copies", "Both A and B", "Download dependencies"],
        "options_hi": ["वेंडर डायरेक्टरी बनाना", "लोकल डिपेंडेंसी कॉपीज", "A और B दोनों", "डिपेंडेंसी डाउनलोड करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How do you implement health checks?",
        "question_hi": "हेल्थ चेक्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["HTTP endpoints", "Readiness probes", "Liveness probes", "All of the above"],
        "options_hi": ["HTTP एंडपॉइंट्स", "रेडीनेस प्रोब्स", "लिवनेस प्रोब्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of 'sync.Cond'?",
        "question_hi": "'sync.Cond' का उद्देश्य क्या है?",
        "options_en": ["Condition variables", "Goroutine signaling", "Both A and B", "Mutex locking"],
        "options_hi": ["कंडीशन वेरिएबल्स", "गोरूटीन सिग्नलिंग", "A और B दोनों", "म्यूटेक्स लॉकिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How do you create a gRPC server?",
        "question_hi": "gRPC सर्वर कैसे बनाते हैं?",
        "options_en": ["google.golang.org/grpc", "Protocol buffers", "Both A and B", "REST API"],
        "options_hi": ["google.golang.org/grpc", "प्रोटोकॉल बफर्स", "A और B दोनों", "REST API"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of 'go tool pprof'?",
        "question_hi": "'go tool pprof' का उद्देश्य क्या है?",
        "options_en": ["Performance profiling", "CPU profiling", "Memory profiling", "All of the above"],
        "options_hi": ["परफॉर्मेंस प्रोफाइलिंग", "CPU प्रोफाइलिंग", "मेमोरी प्रोफाइलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How do you implement service discovery?",
        "question_hi": "सर्विस डिस्कवरी कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Consul", "etcd", "Kubernetes", "All of the above"],
        "options_hi": ["Consul", "etcd", "Kubernetes", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of 'expvar' package?",
        "question_hi": "'expvar' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Expose variables", "Metrics endpoint", "Both A and B", "Environment variables"],
        "options_hi": ["वेरिएबल्स एक्सपोज करना", "मेट्रिक्स एंडपॉइंट", "A और B दोनों", "एनवायरनमेंट वेरिएबल्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How do you create a plugin system?",
        "question_hi": "प्लगइन सिस्टम कैसे बनाते हैं?",
        "options_en": ["plugin package", "RPC calls", "Both A and B", "Not supported"],
        "options_hi": ["plugin पैकेज", "RPC कॉल्स", "A और B दोनों", "सपोर्टेड नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of 'go fix' command?",
        "question_hi": "'go fix' कमांड का उद्देश्य क्या है?",
        "options_en": ["Update old APIs", "Fix deprecated code", "Both A and B", "Syntax errors"],
        "options_hi": ["पुराने APIs अपडेट करना", "डिप्रेकेटेड कोड फिक्स करना", "A और B दोनों", "सिंटैक्स एरर"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How do you implement feature flags?",
        "question_hi": "फीचर फ्लैग्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Configuration", "Environment variables", "Third-party services", "All of the above"],
        "options_hi": ["कॉन्फिगरेशन", "एनवायरनमेंट वेरिएबल्स", "थर्ड-पार्टी सर्विसेज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of 'compress' package?",
        "question_hi": "'compress' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Compression algorithms", "gzip, zlib", "Both A and B", "File operations"],
        "options_hi": ["कम्प्रेशन एल्गोरिदम", "gzip, zlib", "A और B दोनों", "फाइल ऑपरेशन्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How do you create a reverse proxy?",
        "question_hi": "रिवर्स प्रॉक्सी कैसे बनाते हैं?",
        "options_en": ["httputil.ReverseProxy", "Custom implementation", "Both A and B", "Not possible"],
        "options_hi": ["httputil.ReverseProxy", "कस्टम इम्प्लीमेंटेशन", "A और B दोनों", "संभव नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of 'go list' command?",
        "question_hi": "'go list' कमांड का उद्देश्य क्या है?",
        "options_en": ["List packages", "Module information", "Both A and B", "File listing"],
        "options_hi": ["पैकेज लिस्ट करना", "मॉड्यूल इनफार्मेशन", "A और B दोनों", "फाइल लिस्टिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you implement caching?",
        "question_hi": "कैशिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["In-memory cache", "Redis", "Distributed cache", "All of the above"],
        "options_hi": ["इन-मेमोरी कैश", "Redis", "डिस्ट्रीब्यूटेड कैश", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of 'archive' package?",
        "question_hi": "'archive' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Archive file handling", "tar, zip formats", "Both A and B", "File compression"],
        "options_hi": ["आर्काइव फाइल हैंडलिंग", "tar, zip फॉर्मेट", "A और B दोनों", "फाइल कम्प्रेशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you create a DNS resolver?",
        "question_hi": "DNS रेजोल्वर कैसे बनाते हैं?",
        "options_en": ["net.Resolver", "Custom resolver", "Both A and B", "Not possible"],
        "options_hi": ["net.Resolver", "कस्टम रेजोल्वर", "A और B दोनों", "संभव नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of 'go clean' command?",
        "question_hi": "'go clean' कमांड का उद्देश्य क्या है?",
        "options_en": ["Remove object files", "Clean build cache", "Both A and B", "Delete source code"],
        "options_hi": ["ऑब्जेक्ट फाइल्स रिमूव करना", "बिल्ड कैश क्लीन करना", "A और B दोनों", "सोर्स कोड डिलीट करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How do you implement API versioning?",
        "question_hi": "API वर्जनिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["URL path", "Headers", "Query parameters", "All of the above"],
        "options_hi": ["URL पाथ", "हेडर्स", "क्वेरी पैरामीटर्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of 'mime' package?",
        "question_hi": "'mime' पैकेज का उद्देश्य क्या है?",
        "options_en": ["MIME type detection", "Content type handling", "Both A and B", "Email handling"],
        "options_hi": ["MIME टाइप डिटेक्शन", "कंटेंट टाइप हैंडलिंग", "A और B दोनों", "ईमेल हैंडलिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you create a load balancer?",
        "question_hi": "लोड बैलेंसर कैसे बनाते हैं?",
        "options_en": ["Custom implementation", "Third-party libraries", "Both A and B", "Not possible"],
        "options_hi": ["कस्टम इम्प्लीमेंटेशन", "थर्ड-पार्टी लाइब्रेरीज", "A और B दोनों", "संभव नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of 'go version' command?",
        "question_hi": "'go version' कमांड का उद्देश्य क्या है?",
        "options_en": ["Show Go version", "Module compatibility", "Both A and B", "Compiler version"],
        "options_hi": ["Go वर्जन दिखाना", "मॉड्यूल कंपैटिबिलिटी", "A और B दोनों", "कंपाइलर वर्जन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you implement structured logging?",
        "question_hi": "स्ट्रक्चर्ड लॉगिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["log/slog", "Third-party loggers", "Custom JSON logger", "All of the above"],
        "options_hi": ["log/slog", "थर्ड-पार्टी लॉगर्स", "कस्टम JSON लॉगर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of 'path/filepath' package?",
        "question_hi": "'path/filepath' पैकेज का उद्देश्य क्या है?",
        "options_en": ["File path operations", "Cross-platform paths", "Both A and B", "File content"],
        "options_hi": ["फाइल पाथ ऑपरेशन्स", "क्रॉस-प्लेटफॉर्म पाथ", "A और B दोनों", "फाइल कंटेंट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How do you create a certificate authority?",
        "question_hi": "सर्टिफिकेट अथॉरिटी कैसे बनाते हैं?",
        "options_en": ["crypto/tls", "crypto/x509", "Both A and B", "Not possible"],
        "options_hi": ["crypto/tls", "crypto/x509", "A और B दोनों", "संभव नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of 'go run' command?",
        "question_hi": "'go run' कमांड का उद्देश्य क्या है?",
        "options_en": ["Compile and run", "Quick testing", "Both A and B", "Only compile"],
        "options_hi": ["कंपाइल और रन", "क्विक टेस्टिंग", "A और B दोनों", "केवल कंपाइल"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do you implement backpressure?",
        "question_hi": "बैकप्रेशर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Channel buffering", "Rate limiting", "Circuit breakers", "All of the above"],
        "options_hi": ["चैनल बफरिंग", "रेट लिमिटिंग", "सर्किट ब्रेकर्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of 'image' package?",
        "question_hi": "'image' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Image processing", "Format support", "Both A and B", "Video processing"],
        "options_hi": ["इमेज प्रोसेसिंग", "फॉर्मेट सपोर्ट", "A और B दोनों", "वीडियो प्रोसेसिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How do you create a custom compiler?",
        "question_hi": "कस्टम कंपाइलर कैसे बनाते हैं?",
        "options_en": ["Go compiler toolchain", "LLVM integration", "Both A and B", "Not possible"],
        "options_hi": ["Go कंपाइलर टूलचेन", "LLVM इंटीग्रेशन", "A और B दोनों", "संभव नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
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