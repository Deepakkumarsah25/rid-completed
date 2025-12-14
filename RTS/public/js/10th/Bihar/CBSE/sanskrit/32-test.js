const questions=[
    {
        "num": 1,
        "question_en": "What is the purpose of the 'go mod init' command?",
        "question_hi": "'go mod init' कमांड का उद्देश्य क्या है?",
        "options_en": ["Initialize a new module", "Create a new project", "Install dependencies", "Update Go version"],
        "options_hi": ["नया मॉड्यूल इनिशियलाइज़ करना", "नया प्रोजेक्ट बनाना", "डिपेंडेंसी इंस्टॉल करना", "Go वर्जन अपडेट करना"],
        "answer_en": "Initialize a new module",
        "answer_hi": "नया मॉड्यूल इनिशियलाइज़ करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How do you declare a constant in Go?",
        "question_hi": "Go में कॉन्स्टेंट कैसे डिक्लेयर करते हैं?",
        "options_en": ["const Pi = 3.14", "var Pi = 3.14", "let Pi = 3.14", "constant Pi = 3.14"],
        "options_hi": ["const Pi = 3.14", "var Pi = 3.14", "let Pi = 3.14", "constant Pi = 3.14"],
        "answer_en": "const Pi = 3.14",
        "answer_hi": "const Pi = 3.14",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the zero value for a pointer in Go?",
        "question_hi": "Go में पॉइंटर की जीरो वैल्यू क्या है?",
        "options_en": ["nil", "0", "null", "undefined"],
        "options_hi": ["nil", "0", "null", "undefined"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
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
        "num": 5,
        "question_en": "What is the purpose of the 'defer' keyword?",
        "question_hi": "'defer' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Schedule function execution before return", "Delay execution", "Async execution", "Error handling"],
        "options_hi": ["रिटर्न से पहले फंक्शन एक्सेक्यूशन शेड्यूल करना", "एक्सेक्यूशन डिले करना", "एसिंक एक्सेक्यूशन", "एरर हैंडलिंग"],
        "answer_en": "Schedule function execution before return",
        "answer_hi": "रिटर्न से पहले फंक्शन एक्सेक्यूशन शेड्यूल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you check if a map contains a key?",
        "question_hi": "मैप में की है या नहीं कैसे चेक करते हैं?",
        "options_en": ["value, exists := myMap[key]", "exists = myMap.has(key)", "myMap.contains(key)", "myMap.exists(key)"],
        "options_hi": ["value, exists := myMap[key]", "exists = myMap.has(key)", "myMap.contains(key)", "myMap.exists(key)"],
        "answer_en": "value, exists := myMap[key]",
        "answer_hi": "value, exists := myMap[key]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of the 'iota' identifier?",
        "question_hi": "'iota' आइडेंटिफायर का उद्देश्य क्या है?",
        "options_en": ["Auto-incrementing constant generator", "Integer constant", "Loop counter", "Random number generator"],
        "options_hi": ["ऑटो-इंक्रीमेंटिंग कॉन्स्टेंट जनरेटर", "इंटीजर कॉन्स्टेंट", "लूप काउंटर", "रैंडम नंबर जनरेटर"],
        "answer_en": "Auto-incrementing constant generator",
        "answer_hi": "ऑटो-इंक्रीमेंटिंग कॉन्स्टेंट जनरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you define a method on a struct?",
        "question_hi": "स्ट्रक्चर पर मेथड कैसे डिफाइन करते हैं?",
        "options_en": ["func (s Struct) MethodName()", "method (s Struct) MethodName()", "func MethodName(s Struct)", "struct MethodName(s Struct)"],
        "options_hi": ["func (s Struct) MethodName()", "method (s Struct) MethodName()", "func MethodName(s Struct)", "struct MethodName(s Struct)"],
        "answer_en": "func (s Struct) MethodName()",
        "answer_hi": "func (s Struct) MethodName()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of the 'range' keyword?",
        "question_hi": "'range' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Iterate over arrays, slices, maps", "Create ranges", "Generate numbers", "Define boundaries"],
        "options_hi": ["ऐरे, स्लाइस, मैप पर इटरेट करना", "रेंज बनाना", "नंबर जनरेट करना", "बाउंड्री डिफाइन करना"],
        "answer_en": "Iterate over arrays, slices, maps",
        "answer_hi": "ऐरे, स्लाइस, मैप पर इटरेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you handle errors in Go?",
        "question_hi": "Go में एरर कैसे हैंडल करते हैं?",
        "options_en": ["Return error as last return value", "Try-catch blocks", "Throw exceptions", "Panic recovery"],
        "options_hi": ["लास्ट रिटर्न वैल्यू के रूप में एरर रिटर्न करना", "ट्राई-कैच ब्लॉक", "एक्सेप्शन थ्रो करना", "पैनिक रिकवरी"],
        "answer_en": "Return error as last return value",
        "answer_hi": "लास्ट रिटर्न वैल्यू के रूप में एरर रिटर्न करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of the 'make' function?",
        "question_hi": "'make' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Allocate and initialize slices, maps, channels", "Memory allocation", "Create variables", "Object creation"],
        "options_hi": ["स्लाइस, मैप, चैनल अलोकेट और इनिशियलाइज़ करना", "मेमोरी अलोकेशन", "वेरिएबल बनाना", "ऑब्जेक्ट क्रिएशन"],
        "answer_en": "Allocate and initialize slices, maps, channels",
        "answer_hi": "स्लाइस, मैप, चैनल अलोकेट और इनिशियलाइज़ करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you convert a string to a byte slice?",
        "question_hi": "स्ट्रिंग को बाइट स्लाइस में कैसे कन्वर्ट करते हैं?",
        "options_en": ["[]byte(string)", "byte(string)", "string.ToBytes()", "convert.StringToBytes(string)"],
        "options_hi": ["[]byte(string)", "byte(string)", "string.ToBytes()", "convert.StringToBytes(string)"],
        "answer_en": "[]byte(string)",
        "answer_hi": "[]byte(string)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of the 'new' function?",
        "question_hi": "'new' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Allocate memory for zero value", "Create objects", "Initialize variables", "Memory management"],
        "options_hi": ["जीरो वैल्यू के लिए मेमोरी अलोकेट करना", "ऑब्जेक्ट बनाना", "वेरिएबल इनिशियलाइज़ करना", "मेमोरी मैनेजमेंट"],
        "answer_en": "Allocate memory for zero value",
        "answer_hi": "जीरो वैल्यू के लिए मेमोरी अलोकेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you read from a channel?",
        "question_hi": "चैनल से कैसे रीड करते हैं?",
        "options_en": ["value := <-ch", "ch.read()", "<-ch.read()", "read(ch)"],
        "options_hi": ["value := <-ch", "ch.read()", "<-ch.read()", "read(ch)"],
        "answer_en": "value := <-ch",
        "answer_hi": "value := <-ch",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of the 'select' statement?",
        "question_hi": "'select' स्टेटमेंट का उद्देश्य क्या है?",
        "options_en": ["Wait on multiple channel operations", "Choose from cases", "Switch on channels", "All of the above"],
        "options_hi": ["मल्टीपल चैनल ऑपरेशन पर वेट करना", "केस से चुनना", "चैनल पर स्विच करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you write to a channel?",
        "question_hi": "चैनल में कैसे लिखते हैं?",
        "options_en": ["ch <- value", "ch.write(value)", "write(ch, value)", "ch.send(value)"],
        "options_hi": ["ch <- value", "ch.write(value)", "write(ch, value)", "ch.send(value)"],
        "answer_en": "ch <- value",
        "answer_hi": "ch <- value",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of the 'panic' function?",
        "question_hi": "'panic' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Stop normal execution", "Throw exception", "Log error", "Debug program"],
        "options_hi": ["नॉर्मल एक्सेक्यूशन रोकना", "एक्सेप्शन थ्रो करना", "एरर लॉग करना", "प्रोग्राम डीबग करना"],
        "answer_en": "Stop normal execution",
        "answer_hi": "नॉर्मल एक्सेक्यूशन रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you recover from a panic?",
        "question_hi": "पैनिक से कैसे रिकवर करते हैं?",
        "options_en": ["defer func() { recover() }()", "catch panic", "try-recover", "handle panic"],
        "options_hi": ["defer func() { recover() }()", "catch panic", "try-recover", "handle panic"],
        "answer_en": "defer func() { recover() }()",
        "answer_hi": "defer func() { recover() }()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of the 'interface{}' type?",
        "question_hi": "'interface{}' टाइप का उद्देश्य क्या है?",
        "options_en": ["Accept any type", "Empty interface", "Generic type", "All of the above"],
        "options_hi": ["कोई भी टाइप स्वीकार करना", "एम्प्टी इंटरफेस", "जेनरिक टाइप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you implement string representation for a type?",
        "question_hi": "टाइप के लिए स्ट्रिंग रिप्रेजेंटेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement String() string method", "ToString() method", "Stringer interface", "fmt.Stringer"],
        "options_hi": ["String() string मेथड इम्प्लीमेंट करना", "ToString() मेथड", "Stringer इंटरफेस", "fmt.Stringer"],
        "answer_en": "Implement String() string method",
        "answer_hi": "String() string मेथड इम्प्लीमेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of the 'go.mod' file?",
        "question_hi": "'go.mod' फाइल का उद्देश्य क्या है?",
        "options_en": ["Define module dependencies", "Project configuration", "Build settings", "All of the above"],
        "options_hi": ["मॉड्यूल डिपेंडेंसी डिफाइन करना", "प्रोजेक्ट कॉन्फिगरेशन", "बिल्ड सेटिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you import a package with a custom name?",
        "question_hi": "कस्टम नाम के साथ पैकेज कैसे इम्पोर्ट करते हैं?",
        "options_en": ["import alias \"package/path\"", "import \"package/path\" as alias", "import custom alias from \"package/path\"", "use alias \"package/path\""],
        "options_hi": ["import alias \"package/path\"", "import \"package/path\" as alias", "import custom alias from \"package/path\"", "use alias \"package/path\""],
        "answer_en": "import alias \"package/path\"",
        "answer_hi": "import alias \"package/path\"",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of the 'context' package?",
        "question_hi": "'context' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Manage request-scoped values", "Cancellation signals", "Timeouts across API boundaries", "All of the above"],
        "options_hi": ["रिक्वेस्ट-स्कोप्ड वैल्यू मैनेज करना", "कैंसलेशन सिग्नल", "API बाउंड्री के आर-पार टाइमआउट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How do you create a buffered channel?",
        "question_hi": "बफर्ड चैनल कैसे बनाते हैं?",
        "options_en": ["make(chan int, size)", "chan int{buffer: size}", "new(chan int, size)", "buffered chan int(size)"],
        "options_hi": ["make(chan int, size)", "chan int{buffer: size}", "new(chan int, size)", "buffered chan int(size)"],
        "answer_en": "make(chan int, size)",
        "answer_hi": "make(chan int, size)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of the 'sync' package?",
        "question_hi": "'sync' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Synchronization primitives", "Concurrency control", "Wait groups and mutexes", "All of the above"],
        "options_hi": ["सिंक्रोनाइज़ेशन प्रिमिटिव", "कनकरेंसी कंट्रोल", "वेट ग्रुप और म्यूटेक्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How do you use a WaitGroup?",
        "question_hi": "WaitGroup कैसे उपयोग करते हैं?",
        "options_en": ["wg.Add(1); defer wg.Done(); wg.Wait()", "wg.Start(); wg.Finish(); wg.Await()", "wg.Begin(); wg.End(); wg.Wait()", "wg.New(); wg.Complete(); wg.Wait()"],
        "options_hi": ["wg.Add(1); defer wg.Done(); wg.Wait()", "wg.Start(); wg.Finish(); wg.Await()", "wg.Begin(); wg.End(); wg.Wait()", "wg.New(); wg.Complete(); wg.Wait()"],
        "answer_en": "wg.Add(1); defer wg.Done(); wg.Wait()",
        "answer_hi": "wg.Add(1); defer wg.Done(); wg.Wait()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of the 'json' package?",
        "question_hi": "'json' पैकेज का उद्देश्य क्या है?",
        "options_en": ["JSON encoding and decoding", "Data serialization", "API communication", "All of the above"],
        "options_hi": ["JSON एन्कोडिंग और डिकोडिंग", "डेटा सीरियलाइज़ेशन", "API कम्युनिकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How do you marshal a struct to JSON?",
        "question_hi": "स्ट्रक्चर को JSON में कैसे मार्शल करते हैं?",
        "options_en": ["json.Marshal(struct)", "struct.ToJSON()", "encode.JSON(struct)", "json.Encode(struct)"],
        "options_hi": ["json.Marshal(struct)", "struct.ToJSON()", "encode.JSON(struct)", "json.Encode(struct)"],
        "answer_en": "json.Marshal(struct)",
        "answer_hi": "json.Marshal(struct)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of struct tags?",
        "question_hi": "स्ट्रक्चर टैग का उद्देश्य क्या है?",
        "options_en": ["Add metadata to struct fields", "JSON mapping", "Validation rules", "All of the above"],
        "options_hi": ["स्ट्रक्चर फील्ड में मेटाडेटा ऐड करना", "JSON मैपिंग", "वैलिडेशन रूल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you define a struct tag?",
        "question_hi": "स्ट्रक्चर टैग कैसे डिफाइन करते हैं?",
        "options_en": ["`json:\"name\"`", "tag json:\"name\"", "#json:\"name\"", "@json:\"name\""],
        "options_hi": ["`json:\"name\"`", "tag json:\"name\"", "#json:\"name\"", "@json:\"name\""],
        "answer_en": "`json:\"name\"`",
        "answer_hi": "`json:\"name\"`",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of the 'testing' package?",
        "question_hi": "'testing' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Write unit tests", "Benchmark code", "Run test suites", "All of the above"],
        "options_hi": ["यूनिट टेस्ट लिखना", "कोड बेंचमार्क करना", "टेस्ट सूट रन करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you write a unit test in Go?",
        "question_hi": "Go में यूनिट टेस्ट कैसे लिखते हैं?",
        "options_en": ["func TestXxx(*testing.T)", "test func Xxx()", "func test_Xxx(t Testing)", "unit TestXxx(t Test)"],
        "options_hi": ["func TestXxx(*testing.T)", "test func Xxx()", "func test_Xxx(t Testing)", "unit TestXxx(t Test)"],
        "answer_en": "func TestXxx(*testing.T)",
        "answer_hi": "func TestXxx(*testing.T)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of the 't.Error()' method?",
        "question_hi": "'t.Error()' मेथड का उद्देश्य क्या है?",
        "options_en": ["Log error and continue test", "Fail test immediately", "Log message", "Stop test execution"],
        "options_hi": ["एरर लॉग करना और टेस्ट जारी रखना", "टेस्ट तुरंत फेल करना", "मैसेज लॉग करना", "टेस्ट एक्सेक्यूशन रोकना"],
        "answer_en": "Log error and continue test",
        "answer_hi": "एरर लॉग करना और टेस्ट जारी रखना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you run benchmarks in Go?",
        "question_hi": "Go में बेंचमार्क कैसे रन करते हैं?",
        "options_en": ["go test -bench", "go benchmark", "go run -bench", "go build -bench"],
        "options_hi": ["go test -bench", "go benchmark", "go run -bench", "go build -bench"],
        "answer_en": "go test -bench",
        "answer_hi": "go test -bench",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of the 'reflect' package?",
        "question_hi": "'reflect' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Runtime reflection", "Type inspection", "Dynamic programming", "All of the above"],
        "options_hi": ["रनटाइम रिफ्लेक्शन", "टाइप इंस्पेक्शन", "डायनामिक प्रोग्रामिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do you get the type of a variable at runtime?",
        "question_hi": "रनटाइम पर वेरिएबल का टाइप कैसे प्राप्त करते हैं?",
        "options_en": ["reflect.TypeOf(variable)", "typeof variable", "variable.Type()", "type(variable)"],
        "options_hi": ["reflect.TypeOf(variable)", "typeof variable", "variable.Type()", "type(variable)"],
        "answer_en": "reflect.TypeOf(variable)",
        "answer_hi": "reflect.TypeOf(variable)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of the 'unsafe' package?",
        "question_hi": "'unsafe' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Bypass type safety", "Low-level programming", "Memory manipulation", "All of the above"],
        "options_hi": ["टाइप सेफ्टी बायपास करना", "लो-लेवल प्रोग्रामिंग", "मेमोरी मैनिपुलेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How do you convert a pointer to uintptr?",
        "question_hi": "पॉइंटर को uintptr में कैसे कन्वर्ट करते हैं?",
        "options_en": ["uintptr(unsafe.Pointer(ptr))", "ptr.ToUintptr()", "unsafe.Uintptr(ptr)", "convert.Uintptr(ptr)"],
        "options_hi": ["uintptr(unsafe.Pointer(ptr))", "ptr.ToUintptr()", "unsafe.Uintptr(ptr)", "convert.Uintptr(ptr)"],
        "answer_en": "uintptr(unsafe.Pointer(ptr))",
        "answer_hi": "uintptr(unsafe.Pointer(ptr))",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of the 'os' package?",
        "question_hi": "'os' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Operating system functionality", "File operations", "Environment variables", "All of the above"],
        "options_hi": ["ऑपरेटिंग सिस्टम फंक्शनैलिटी", "फाइल ऑपरेशन", "एनवायरनमेंट वेरिएबल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How do you read a file in Go?",
        "question_hi": "Go में फाइल कैसे रीड करते हैं?",
        "options_en": ["os.ReadFile(filename)", "file.ReadAll()", "io.ReadFile(filename)", "read.File(filename)"],
        "options_hi": ["os.ReadFile(filename)", "file.ReadAll()", "io.ReadFile(filename)", "read.File(filename)"],
        "answer_en": "os.ReadFile(filename)",
        "answer_hi": "os.ReadFile(filename)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of the 'io' package?",
        "question_hi": "'io' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Basic I/O interfaces", "Stream operations", "Reader/Writer interfaces", "All of the above"],
        "options_hi": ["बेसिक I/O इंटरफेस", "स्ट्रीम ऑपरेशन", "रीडर/राइटर इंटरफेस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How do you implement a custom Reader?",
        "question_hi": "कस्टम रीडर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement Read([]byte) (int, error)", "type MyReader struct{} with Read method", "Both A and B", "Implement Reader interface"],
        "options_hi": ["Read([]byte) (int, error) इम्प्लीमेंट करना", "type MyReader struct{} with Read method", "A और B दोनों", "Reader इंटरफेस इम्प्लीमेंट करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of the 'bufio' package?",
        "question_hi": "'bufio' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Buffered I/O", "Efficient reading/writing", "Scanner functionality", "All of the above"],
        "options_hi": ["बफर्ड I/O", "एफिशिएंट रीडिंग/राइटिंग", "स्कैनर फंक्शनैलिटी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How do you read a file line by line?",
        "question_hi": "फाइल को लाइन बाय लाइन कैसे रीड करते हैं?",
        "options_en": ["scanner := bufio.NewScanner(file)", "file.ReadLine()", "io.ReadLine(file)", "read.Lines(file)"],
        "options_hi": ["scanner := bufio.NewScanner(file)", "file.ReadLine()", "io.ReadLine(file)", "read.Lines(file)"],
        "answer_en": "scanner := bufio.NewScanner(file)",
        "answer_hi": "scanner := bufio.NewScanner(file)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of the 'time' package?",
        "question_hi": "'time' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Time measurement", "Date operations", "Sleep and ticks", "All of the above"],
        "options_hi": ["टाइम मेजरमेंट", "डेट ऑपरेशन", "स्लीप और टिक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How do you sleep for 1 second?",
        "question_hi": "1 सेकंड के लिए स्लीप कैसे करते हैं?",
        "options_en": ["time.Sleep(time.Second)", "sleep(1)", "time.Wait(1*time.Second)", "delay(time.Second)"],
        "options_hi": ["time.Sleep(time.Second)", "sleep(1)", "time.Wait(1*time.Second)", "delay(time.Second)"],
        "answer_en": "time.Sleep(time.Second)",
        "answer_hi": "time.Sleep(time.Second)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of the 'strings' package?",
        "question_hi": "'strings' पैकेज का उद्देश्य क्या है?",
        "options_en": ["String manipulation", "Text processing", "String utilities", "All of the above"],
        "options_hi": ["स्ट्रिंग मैनिपुलेशन", "टेक्स्ट प्रोसेसिंग", "स्ट्रिंग यूटिलिटी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you split a string by spaces?",
        "question_hi": "स्ट्रिंग को स्पेस से कैसे स्प्लिट करते हैं?",
        "options_en": ["strings.Split(str, \" \")", "str.Split(\" \")", "split.String(str, \" \")", "strings.Fields(str)"],
        "options_hi": ["strings.Split(str, \" \")", "str.Split(\" \")", "split.String(str, \" \")", "strings.Fields(str)"],
        "answer_en": "strings.Split(str, \" \")",
        "answer_hi": "strings.Split(str, \" \")",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of the 'strconv' package?",
        "question_hi": "'strconv' पैकेज का उद्देश्य क्या है?",
        "options_en": ["String conversions", "Parse numbers", "Format values", "All of the above"],
        "options_hi": ["स्ट्रिंग कन्वर्जन", "नंबर पार्स करना", "वैल्यू फॉर्मेट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you convert a string to int?",
        "question_hi": "स्ट्रिंग को int में कैसे कन्वर्ट करते हैं?",
        "options_en": ["strconv.Atoi(str)", "int(str)", "str.ToInt()", "convert.Int(str)"],
        "options_hi": ["strconv.Atoi(str)", "int(str)", "str.ToInt()", "convert.Int(str)"],
        "answer_en": "strconv.Atoi(str)",
        "answer_hi": "strconv.Atoi(str)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of the 'flag' package?",
        "question_hi": "'flag' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Command-line flag parsing", "Program arguments", "Configuration options", "All of the above"],
        "options_hi": ["कमांड-लाइन फ्लैग पार्सिंग", "प्रोग्राम आर्गुमेंट", "कॉन्फिगरेशन ऑप्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How do you define a command-line flag?",
        "question_hi": "कमांड-लाइन फ्लैग कैसे डिफाइन करते हैं?",
        "options_en": ["flag.String(\"name\", \"default\", \"usage\")", "flag.defineString(\"name\", \"default\", \"usage\")", "flags.String(\"name\", \"default\", \"usage\")", "cmd.Flag(\"name\", \"default\", \"usage\")"],
        "options_hi": ["flag.String(\"name\", \"default\", \"usage\")", "flag.defineString(\"name\", \"default\", \"usage\")", "flags.String(\"name\", \"default\", \"usage\")", "cmd.Flag(\"name\", \"default\", \"usage\")"],
        "answer_en": "flag.String(\"name\", \"default\", \"usage\")",
        "answer_hi": "flag.String(\"name\", \"default\", \"usage\")",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of the 'log' package?",
        "question_hi": "'log' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Logging utilities", "Message output", "Error logging", "All of the above"],
        "options_hi": ["लॉगिंग यूटिलिटी", "मैसेज आउटपुट", "एरर लॉगिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you log a fatal error?",
        "question_hi": "फेटल एरर कैसे लॉग करते हैं?",
        "options_en": ["log.Fatal(err)", "log.Error(err); os.Exit(1)", "log.Panic(err)", "log.Critical(err)"],
        "options_hi": ["log.Fatal(err)", "log.Error(err); os.Exit(1)", "log.Panic(err)", "log.Critical(err)"],
        "answer_en": "log.Fatal(err)",
        "answer_hi": "log.Fatal(err)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of the 'sort' package?",
        "question_hi": "'sort' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Sorting collections", "Slice operations", "Custom sorting", "All of the above"],
        "options_hi": ["कलेक्शन सॉर्टिंग", "स्लाइस ऑपरेशन", "कस्टम सॉर्टिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you sort a slice of integers?",
        "question_hi": "इंटीजर की स्लाइस कैसे सॉर्ट करते हैं?",
        "options_en": ["sort.Ints(slice)", "slice.Sort()", "sort.Slice(slice)", "sorted.Ints(slice)"],
        "options_hi": ["sort.Ints(slice)", "slice.Sort()", "sort.Slice(slice)", "sorted.Ints(slice)"],
        "answer_en": "sort.Ints(slice)",
        "answer_hi": "sort.Ints(slice)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of the 'path/filepath' package?",
        "question_hi": "'path/filepath' पैकेज का उद्देश्य क्या है?",
        "options_en": ["File path manipulation", "Cross-platform paths", "File system operations", "All of the above"],
        "options_hi": ["फाइल पाथ मैनिपुलेशन", "क्रॉस-प्लेटफॉर्म पाथ", "फाइल सिस्टम ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How do you get the base name of a file path?",
        "question_hi": "फाइल पाथ का बेस नेम कैसे प्राप्त करते हैं?",
        "options_en": ["filepath.Base(path)", "path.Base(path)", "os.PathBase(path)", "base.Name(path)"],
        "options_hi": ["filepath.Base(path)", "path.Base(path)", "os.PathBase(path)", "base.Name(path)"],
        "answer_en": "filepath.Base(path)",
        "answer_hi": "filepath.Base(path)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of the 'crypto' package?",
        "question_hi": "'crypto' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Cryptographic operations", "Hashing algorithms", "Encryption/decryption", "All of the above"],
        "options_hi": ["क्रिप्टोग्राफिक ऑपरेशन", "हैशिंग एल्गोरिदम", "एन्क्रिप्शन/डिक्रिप्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you compute MD5 hash?",
        "question_hi": "MD5 हैश कैसे कम्प्यूट करते हैं?",
        "options_en": ["md5.Sum(data)", "crypto.MD5(data)", "hash.MD5(data)", "md5.Hash(data)"],
        "options_hi": ["md5.Sum(data)", "crypto.MD5(data)", "hash.MD5(data)", "md5.Hash(data)"],
        "answer_en": "md5.Sum(data)",
        "answer_hi": "md5.Sum(data)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of the 'net/http' package?",
        "question_hi": "'net/http' पैकेज का उद्देश्य क्या है?",
        "options_en": ["HTTP client and server", "Web applications", "API development", "All of the above"],
        "options_hi": ["HTTP क्लाइंट और सर्वर", "वेब एप्लिकेशन", "API डेवलपमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How do you create an HTTP server?",
        "question_hi": "HTTP सर्वर कैसे बनाते हैं?",
        "options_en": ["http.ListenAndServe(\":8080\", nil)", "server.NewHTTP(\":8080\")", "http.Server(\":8080\")", "create.HTTPServer(\":8080\")"],
        "options_hi": ["http.ListenAndServe(\":8080\", nil)", "server.NewHTTP(\":8080\")", "http.Server(\":8080\")", "create.HTTPServer(\":8080\")"],
        "answer_en": "http.ListenAndServe(\":8080\", nil)",
        "answer_hi": "http.ListenAndServe(\":8080\", nil)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of the 'database/sql' package?",
        "question_hi": "'database/sql' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Database operations", "SQL queries", "Connection pooling", "All of the above"],
        "options_hi": ["डेटाबेस ऑपरेशन", "SQL क्वेरी", "कनेक्शन पूलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How do you open a database connection?",
        "question_hi": "डेटाबेस कनेक्शन कैसे ओपन करते हैं?",
        "options_en": ["sql.Open(driver, dataSource)", "db.Open(driver, dataSource)", "database.Open(driver, dataSource)", "sql.Connect(driver, dataSource)"],
        "options_hi": ["sql.Open(driver, dataSource)", "db.Open(driver, dataSource)", "database.Open(driver, dataSource)", "sql.Connect(driver, dataSource)"],
        "answer_en": "sql.Open(driver, dataSource)",
        "answer_hi": "sql.Open(driver, dataSource)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of the 'encoding' package?",
        "question_hi": "'encoding' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Data encoding/decoding", "Serialization formats", "Binary/text conversion", "All of the above"],
        "options_hi": ["डेटा एन्कोडिंग/डिकोडिंग", "सीरियलाइज़ेशन फॉर्मेट", "बाइनरी/टेक्स्ट कन्वर्जन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How do you encode data to JSON?",
        "question_hi": "डेटा को JSON में कैसे एन्कोड करते हैं?",
        "options_en": ["json.Marshal(data)", "encoding.JSON(data)", "data.ToJSON()", "encode.ToJSON(data)"],
        "options_hi": ["json.Marshal(data)", "encoding.JSON(data)", "data.ToJSON()", "encode.ToJSON(data)"],
        "answer_en": "json.Marshal(data)",
        "answer_hi": "json.Marshal(data)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of the 'bytes' package?",
        "question_hi": "'bytes' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Byte slice manipulation", "Buffer operations", "Efficient I/O", "All of the above"],
        "options_hi": ["बाइट स्लाइस मैनिपुलेशन", "बफर ऑपरेशन", "एफिशिएंट I/O", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you create a bytes buffer?",
        "question_hi": "बाइट्स बफर कैसे बनाते हैं?",
        "options_en": ["bytes.NewBuffer([]byte)", "new(bytes.Buffer)", "bytes.Buffer{}", "All of the above"],
        "options_hi": ["bytes.NewBuffer([]byte)", "new(bytes.Buffer)", "bytes.Buffer{}", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of the 'container' package?",
        "question_hi": "'container' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Container data structures", "Lists, rings, heaps", "Generic collections", "All of the above"],
        "options_hi": ["कंटेनर डेटा स्ट्रक्चर", "लिस्ट, रिंग, हीप", "जेनरिक कलेक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How do you use a linked list?",
        "question_hi": "लिंक्ड लिस्ट कैसे उपयोग करते हैं?",
        "options_en": ["list.New()", "container/list.New()", "new(list.List)", "All of the above"],
        "options_hi": ["list.New()", "container/list.New()", "new(list.List)", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of the 'archive' package?",
        "question_hi": "'archive' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Archive file handling", "ZIP, TAR formats", "Compression utilities", "All of the above"],
        "options_hi": ["आर्काइव फाइल हैंडलिंग", "ZIP, TAR फॉर्मेट", "कम्प्रेशन यूटिलिटी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How do you read a ZIP file?",
        "question_hi": "ZIP फाइल कैसे रीड करते हैं?",
        "options_en": ["zip.NewReader(reader, size)", "archive/zip package", "zip.OpenReader(filename)", "All of the above"],
        "options_hi": ["zip.NewReader(reader, size)", "archive/zip package", "zip.OpenReader(filename)", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of the 'compress' package?",
        "question_hi": "'compress' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Compression algorithms", "GZIP, ZLIB, etc.", "Data compression", "All of the above"],
        "options_hi": ["कम्प्रेशन एल्गोरिदम", "GZIP, ZLIB, आदि", "डेटा कम्प्रेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How do you compress data with GZIP?",
        "question_hi": "GZIP के साथ डेटा कैसे कम्प्रेस करते हैं?",
        "options_en": ["gzip.NewWriter(writer)", "compress/gzip package", "gzip.Compress(data)", "Both A and B"],
        "options_hi": ["gzip.NewWriter(writer)", "compress/gzip package", "gzip.Compress(data)", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of the 'image' package?",
        "question_hi": "'image' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Image processing", "Format decoding/encoding", "Pixel manipulation", "All of the above"],
        "options_hi": ["इमेज प्रोसेसिंग", "फॉर्मेट डिकोडिंग/एन्कोडिंग", "पिक्सेल मैनिपुलेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How do you decode an image?",
        "question_hi": "इमेज कैसे डिकोड करते हैं?",
        "options_en": ["image.Decode(reader)", "decode.Image(reader)", "image.Read(reader)", "reader.DecodeImage()"],
        "options_hi": ["image.Decode(reader)", "decode.Image(reader)", "image.Read(reader)", "reader.DecodeImage()"],
        "answer_en": "image.Decode(reader)",
        "answer_hi": "image.Decode(reader)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of the 'html/template' package?",
        "question_hi": "'html/template' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Safe HTML templates", "Web page generation", "Template execution", "All of the above"],
        "options_hi": ["सेफ HTML टेम्पलेट", "वेब पेज जनरेशन", "टेम्पलेट एक्सेक्यूशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How do you execute an HTML template?",
        "question_hi": "HTML टेम्पलेट कैसे एक्सेक्यूट करते हैं?",
        "options_en": ["template.Execute(writer, data)", "tmpl.Render(writer, data)", "template.Render(data)", "execute.Template(writer, data)"],
        "options_hi": ["template.Execute(writer, data)", "tmpl.Render(writer, data)", "template.Render(data)", "execute.Template(writer, data)"],
        "answer_en": "template.Execute(writer, data)",
        "answer_hi": "template.Execute(writer, data)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of the 'text/template' package?",
        "question_hi": "'text/template' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Text template processing", "String formatting", "Document generation", "All of the above"],
        "options_hi": ["टेक्स्ट टेम्पलेट प्रोसेसिंग", "स्ट्रिंग फॉर्मेटिंग", "डॉक्युमेंट जनरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How do you define a template?",
        "question_hi": "टेम्पलेट कैसे डिफाइन करते हैं?",
        "options_en": ["template.New(\"name\").Parse(text)", "new template(text)", "template.Define(text)", "create.Template(text)"],
        "options_hi": ["template.New(\"name\").Parse(text)", "new template(text)", "template.Define(text)", "create.Template(text)"],
        "answer_en": "template.New(\"name\").Parse(text)",
        "answer_hi": "template.New(\"name\").Parse(text)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of the 'go/ast' package?",
        "question_hi": "'go/ast' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Go AST manipulation", "Code analysis", "Abstract syntax trees", "All of the above"],
        "options_hi": ["Go AST मैनिपुलेशन", "कोड एनालिसिस", "अब्स्ट्रैक्ट सिंटैक्स ट्री", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How do you parse Go source code?",
        "question_hi": "Go सोर्स कोड कैसे पार्स करते हैं?",
        "options_en": ["parser.ParseFile(fset, filename, src, mode)", "ast.Parse(src)", "go.Parse(src)", "source.Parse(src)"],
        "options_hi": ["parser.ParseFile(fset, filename, src, mode)", "ast.Parse(src)", "go.Parse(src)", "source.Parse(src)"],
        "answer_en": "parser.ParseFile(fset, filename, src, mode)",
        "answer_hi": "parser.ParseFile(fset, filename, src, mode)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of the 'go/doc' package?",
        "question_hi": "'go/doc' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Documentation extraction", "Code documentation", "Package comments", "All of the above"],
        "options_hi": ["डॉक्युमेंटेशन एक्सट्रैक्शन", "कोड डॉक्युमेंटेशन", "पैकेज कमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How do you extract package documentation?",
        "question_hi": "पैकेज डॉक्युमेंटेशन कैसे एक्सट्रैक्ट करते हैं?",
        "options_en": ["doc.New(pkg, importPath, mode)", "pkg.Documentation()", "extract.Doc(pkg)", "doc.FromPackage(pkg)"],
        "options_hi": ["doc.New(pkg, importPath, mode)", "pkg.Documentation()", "extract.Doc(pkg)", "doc.FromPackage(pkg)"],
        "answer_en": "doc.New(pkg, importPath, mode)",
        "answer_hi": "doc.New(pkg, importPath, mode)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of the 'go/format' package?",
        "question_hi": "'go/format' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Code formatting", "Go fmt utility", "Source code prettifying", "All of the above"],
        "options_hi": ["कोड फॉर्मेटिंग", "Go fmt यूटिलिटी", "सोर्स कोड प्रीटीफाइंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you format Go source code?",
        "question_hi": "Go सोर्स कोड कैसे फॉर्मेट करते हैं?",
        "options_en": ["format.Source(src)", "goformat.Source(src)", "fmt.Source(src)", "pretty.Source(src)"],
        "options_hi": ["format.Source(src)", "goformat.Source(src)", "fmt.Source(src)", "pretty.Source(src)"],
        "answer_en": "format.Source(src)",
        "answer_hi": "format.Source(src)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of the 'go/build' package?",
        "question_hi": "'go/build' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Build information", "Package context", "Compilation details", "All of the above"],
        "options_hi": ["बिल्ड इनफार्मेशन", "पैकेज कॉन्टेक्स्ट", "कम्पाइलेशन डिटेल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you get build context?",
        "question_hi": "बिल्ड कॉन्टेक्स्ट कैसे प्राप्त करते हैं?",
        "options_en": ["build.Default", "build.Context{}", "build.NewContext()", "context.Build()"],
        "options_hi": ["build.Default", "build.Context{}", "build.NewContext()", "context.Build()"],
        "answer_en": "build.Default",
        "answer_hi": "build.Default",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of the 'go/parser' package?",
        "question_hi": "'go/parser' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Go source parsing", "AST generation", "Syntax analysis", "All of the above"],
        "options_hi": ["Go सोर्स पार्सिंग", "AST जनरेशन", "सिंटैक्स एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How do you parse expressions?",
        "question_hi": "एक्सप्रेशन कैसे पार्स करते हैं?",
        "options_en": ["parser.ParseExpr(expr)", "ast.ParseExpr(expr)", "expr.Parse()", "parse.Expression(expr)"],
        "options_hi": ["parser.ParseExpr(expr)", "ast.ParseExpr(expr)", "expr.Parse()", "parse.Expression(expr)"],
        "answer_en": "parser.ParseExpr(expr)",
        "answer_hi": "parser.ParseExpr(expr)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of the 'go/token' package?",
        "question_hi": "'go/token' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Token positions", "Source code tokens", "File sets", "All of the above"],
        "options_hi": ["टोकन पोजीशन", "सोर्स कोड टोकन", "फाइल सेट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you create a file set?",
        "question_hi": "फाइल सेट कैसे बनाते हैं?",
        "options_en": ["token.NewFileSet()", "new(token.FileSet)", "token.FileSet{}", "All of the above"],
        "options_hi": ["token.NewFileSet()", "new(token.FileSet)", "token.FileSet{}", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of the 'go/types' package?",
        "question_hi": "'go/types' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Type checking", "Go type system", "Static analysis", "All of the above"],
        "options_hi": ["टाइप चेकिंग", "Go टाइप सिस्टम", "स्टैटिक एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you check types in a package?",
        "question_hi": "पैकेज में टाइप कैसे चेक करते हैं?",
        "options_en": ["types.Check(path, fset, files, nil)", "pkg.CheckTypes()", "type.Check(pkg)", "check.Types(pkg)"],
        "options_hi": ["types.Check(path, fset, files, nil)", "pkg.CheckTypes()", "type.Check(pkg)", "check.Types(pkg)"],
        "answer_en": "types.Check(path, fset, files, nil)",
        "answer_hi": "types.Check(path, fset, files, nil)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of the 'runtime' package?",
        "question_hi": "'runtime' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Runtime operations", "GC control", "Go routine info", "All of the above"],
        "options_hi": ["रनटाइम ऑपरेशन", "GC कंट्रोल", "गो रूटीन इनफो", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How do you get Go routine count?",
        "question_hi": "गो रूटीन काउंट कैसे प्राप्त करते हैं?",
        "options_en": ["runtime.NumGoroutine()", "goroutine.Count()", "runtime.Goroutines()", "count.Goroutines()"],
        "options_hi": ["runtime.NumGoroutine()", "goroutine.Count()", "runtime.Goroutines()", "count.Goroutines()"],
        "answer_en": "runtime.NumGoroutine()",
        "answer_hi": "runtime.NumGoroutine()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of the 'reflect' package in testing?",
        "question_hi": "टेस्टिंग में 'reflect' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Deep equality checks", "Type comparison", "Value inspection", "All of the above"],
        "options_hi": ["डीप इक्वलिटी चेक", "टाइप कम्पेरिजन", "वैल्यू इंस्पेक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do you compare two values deeply?",
        "question_hi": "दो वैल्यू को डीपली कैसे कम्पेयर करते हैं?",
        "options_en": ["reflect.DeepEqual(a, b)", "deep.Equal(a, b)", "a.DeepEqual(b)", "compare.Deep(a, b)"],
        "options_hi": ["reflect.DeepEqual(a, b)", "deep.Equal(a, b)", "a.DeepEqual(b)", "compare.Deep(a, b)"],
        "answer_en": "reflect.DeepEqual(a, b)",
        "answer_hi": "reflect.DeepEqual(a, b)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of the 'sync/atomic' package?",
        "question_hi": "'sync/atomic' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Atomic operations", "Lock-free programming", "Thread-safe counters", "All of the above"],
        "options_hi": ["एटॉमिक ऑपरेशन", "लॉक-फ्री प्रोग्रामिंग", "थ्रेड-सेफ काउंटर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How do you perform atomic addition?",
        "question_hi": "एटॉमिक एडिशन कैसे परफॉर्म करते हैं?",
        "options_en": ["atomic.AddInt32(&val, 1)", "val.AtomicAdd(1)", "atomic.Increment(&val)", "add.Atomic(&val, 1)"],
        "options_hi": ["atomic.AddInt32(&val, 1)", "val.AtomicAdd(1)", "atomic.Increment(&val)", "add.Atomic(&val, 1)"],
        "answer_en": "atomic.AddInt32(&val, 1)",
        "answer_hi": "atomic.AddInt32(&val, 1)",
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