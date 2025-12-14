const questions=[
    {
        "num": 1,
        "question_en": "What is the difference between make() and new() in Go?",
        "question_hi": "Go में make() और new() में क्या अंतर है?",
        "options_en": ["make allocates and initializes, new only allocates", "No difference", "new for slices, make for structs", "Both are same"],
        "options_hi": ["make अलोकेट और इनिशियलाइज़ करता है, new केवल अलोकेट करता है", "कोई अंतर नहीं", "new स्लाइस के लिए, make स्ट्रक्चर के लिए", "दोनों समान हैं"],
        "answer_en": "make allocates and initializes, new only allocates",
        "answer_hi": "make अलोकेट और इनिशियलाइज़ करता है, new केवल अलोकेट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How do you declare a function that returns multiple values?",
        "question_hi": "मल्टीपल वैल्यू रिटर्न करने वाला फ़ंक्शन कैसे डिक्लेयर करते हैं?",
        "options_en": ["func foo() (int, string)", "func foo() int, string", "func foo() return (int, string)", "func foo() multi(int, string)"],
        "options_hi": ["func foo() (int, string)", "func foo() int, string", "func foo() return (int, string)", "func foo() multi(int, string)"],
        "answer_en": "func foo() (int, string)",
        "answer_hi": "func foo() (int, string)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the purpose of the 'init' function in Go?",
        "question_hi": "Go में 'init' फ़ंक्शन का उद्देश्य क्या है?",
        "options_en": ["Package initialization", "Program startup", "Both A and B", "Main function alternative"],
        "options_hi": ["पैकेज इनिशियलाइज़ेशन", "प्रोग्राम स्टार्टअप", "A और B दोनों", "मेन फ़ंक्शन विकल्प"],
        "answer_en": "Package initialization",
        "answer_hi": "पैकेज इनिशियलाइज़ेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you implement a read-write mutex?",
        "question_hi": "रीड-राइट म्यूटेक्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["sync.RWMutex", "sync.Mutex", "sync.Lock", "sync.ReadWrite"],
        "options_hi": ["sync.RWMutex", "sync.Mutex", "sync.Lock", "sync.ReadWrite"],
        "answer_en": "sync.RWMutex",
        "answer_hi": "sync.RWMutex",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of the '...' operator in function parameters?",
        "question_hi": "फ़ंक्शन पैरामीटर्स में '...' ऑपरेटर का उद्देश्य क्या है?",
        "options_en": ["Variadic functions", "Spread operator", "Both A and B", "Optional parameters"],
        "options_hi": ["वेरिएडिक फ़ंक्शन", "स्प्रेड ऑपरेटर", "A और B दोनों", "ऑप्शनल पैरामीटर्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you create a custom error type?",
        "question_hi": "कस्टम एरर टाइप कैसे बनाते हैं?",
        "options_en": ["Implement Error() method", "Extend error interface", "Create error struct", "All of the above"],
        "options_hi": ["Error() मेथड इम्प्लीमेंट करना", "एरर इंटरफेस एक्सटेंड करना", "एरर स्ट्रक्चर बनाना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the zero value for a slice?",
        "question_hi": "स्लाइस का जीरो वैल्यू क्या है?",
        "options_en": ["nil", "[]", "empty slice", "0"],
        "options_hi": ["nil", "[]", "खाली स्लाइस", "0"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you convert between numeric types?",
        "question_hi": "न्यूमेरिक टाइप्स के बीच कैसे कन्वर्ट करते हैं?",
        "options_en": ["Type conversion: T(v)", "Casting", "Convert package", "All of the above"],
        "options_hi": ["टाइप कन्वर्जन: T(v)", "कास्टिंग", "Convert पैकेज", "उपरोक्त सभी"],
        "answer_en": "Type conversion: T(v)",
        "answer_hi": "टाइप कन्वर्जन: T(v)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of the 'blank identifier' _ ?",
        "question_hi": "'ब्लैंक आइडेंटिफायर' _ का उद्देश्य क्या है?",
        "options_en": ["Ignore values", "Placeholder", "Both A and B", "Error handling"],
        "options_hi": ["वैल्यूज इग्नोर करना", "प्लेसहोल्डर", "A और B दोनों", "एरर हैंडलिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you create a method with value receiver?",
        "question_hi": "वैल्यू रिसीवर के साथ मेथड कैसे बनाते हैं?",
        "options_en": ["func (s Struct) Method()", "func Method(s Struct)", "func s.Method()", "method (s Struct) func()"],
        "options_hi": ["func (s Struct) Method()", "func Method(s Struct)", "func s.Method()", "method (s Struct) func()"],
        "answer_en": "func (s Struct) Method()",
        "answer_hi": "func (s Struct) Method()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of 'go mod download'?",
        "question_hi": "'go mod download' का उद्देश्य क्या है?",
        "options_en": ["Download dependencies", "Cache modules", "Both A and B", "Update Go version"],
        "options_hi": ["डिपेंडेंसी डाउनलोड करना", "मॉड्यूल कैश करना", "A और B दोनों", "Go वर्जन अपडेट करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you implement a timeout with context?",
        "question_hi": "कॉन्टेक्स्ट के साथ टाइमआउट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["context.WithTimeout()", "context.WithDeadline()", "Both A and B", "time.After()"],
        "options_hi": ["context.WithTimeout()", "context.WithDeadline()", "A और B दोनों", "time.After()"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the difference between == and equals in Go?",
        "question_hi": "Go में == और equals में क्या अंतर है?",
        "options_en": ["No equals keyword", "== for comparison", "Both A and B", "equals for strings"],
        "options_hi": ["कोई equals कीवर्ड नहीं", "== कम्पेयर के लिए", "A और B दोनों", "equals स्ट्रिंग्स के लिए"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you create a type alias?",
        "question_hi": "टाइप एलियास कैसे बनाते हैं?",
        "options_en": ["type MyInt = int", "type MyInt int", "alias MyInt int", "MyInt := int"],
        "options_hi": ["type MyInt = int", "type MyInt int", "alias MyInt int", "MyInt := int"],
        "answer_en": "type MyInt = int",
        "answer_hi": "type MyInt = int",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of 'strings.Builder'?",
        "question_hi": "'strings.Builder' का उद्देश्य क्या है?",
        "options_en": ["Efficient string building", "String concatenation", "Both A and B", "String parsing"],
        "options_hi": ["एफिशिएंट स्ट्रिंग बिल्डिंग", "स्ट्रिंग कॉन्कैटिनेशन", "A और B दोनों", "स्ट्रिंग पार्सिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you implement a worker pool?",
        "question_hi": "वर्कर पूल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Goroutines + channels", "sync.Pool", "Both A and B", "Thread pool"],
        "options_hi": ["गोरूटीन्स + चैनल्स", "sync.Pool", "A और B दोनों", "थ्रेड पूल"],
        "answer_en": "Goroutines + channels",
        "answer_hi": "गोरूटीन्स + चैनल्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of 'io.Reader' interface?",
        "question_hi": "'io.Reader' इंटरफेस का उद्देश्य क्या है?",
        "options_en": ["Read data", "Stream input", "Both A and B", "Write data"],
        "options_hi": ["डेटा पढ़ना", "स्ट्रीम इनपुट", "A और B दोनों", "डेटा लिखना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you create a HTTP client?",
        "question_hi": "HTTP क्लाइंट कैसे बनाते हैं?",
        "options_en": ["http.Client{}", "http.NewClient()", "client.HTTP{}", "All of the above"],
        "options_hi": ["http.Client{}", "http.NewClient()", "client.HTTP{}", "उपरोक्त सभी"],
        "answer_en": "http.Client{}",
        "answer_hi": "http.Client{}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of 'sync.Map'?",
        "question_hi": "'sync.Map' का उद्देश्य क्या है?",
        "options_en": ["Concurrent map", "Thread-safe map", "Both A and B", "Regular map"],
        "options_hi": ["कंकरंट मैप", "थ्रेड-सेफ मैप", "A और B दोनों", "रेगुलर मैप"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you implement custom JSON marshaling?",
        "question_hi": "कस्टम JSON मार्शलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement MarshalJSON()", "json.Marshaler interface", "Both A and B", "Custom tags"],
        "options_hi": ["MarshalJSON() इम्प्लीमेंट करना", "json.Marshaler इंटरफेस", "A और B दोनों", "कस्टम टैग्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of 'go mod graph'?",
        "question_hi": "'go mod graph' का उद्देश्य क्या है?",
        "options_en": ["Dependency graph", "Module relationships", "Both A and B", "Code structure"],
        "options_hi": ["डिपेंडेंसी ग्राफ", "मॉड्यूल रिलेशनशिप", "A और B दोनों", "कोड स्ट्रक्चर"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you create a custom flag?",
        "question_hi": "कस्टम फ्लैग कैसे बनाते हैं?",
        "options_en": ["flag.Var()", "Implement Value interface", "Both A and B", "flag.Custom()"],
        "options_hi": ["flag.Var()", "Value इंटरफेस इम्प्लीमेंट करना", "A और B दोनों", "flag.Custom()"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of 'bufio.Scanner'?",
        "question_hi": "'bufio.Scanner' का उद्देश्य क्या है?",
        "options_en": ["Read input line by line", "Buffer I/O operations", "Both A and B", "File scanning"],
        "options_hi": ["इनपुट लाइन बाय लाइन पढ़ना", "बफर I/O ऑपरेशन्स", "A और B दोनों", "फाइल स्कैनिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How do you implement a binary search?",
        "question_hi": "बाइनरी सर्च कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["sort.Search()", "Custom implementation", "Both A and B", "search.Binary()"],
        "options_hi": ["sort.Search()", "कस्टम इम्प्लीमेंटेशन", "A और B दोनों", "search.Binary()"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of 'runtime.Gosched()'?",
        "question_hi": "'runtime.Gosched()' का उद्देश्य क्या है?",
        "options_en": ["Yield processor", "Schedule other goroutines", "Both A and B", "Stop goroutine"],
        "options_hi": ["प्रोसेसर यील्ड करना", "अन्य गोरूटीन्स शेड्यूल करना", "A और B दोनों", "गोरूटीन स्टॉप करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How do you create a template with functions?",
        "question_hi": "फ़ंक्शन्स के साथ टेम्प्लेट कैसे बनाते हैं?",
        "options_en": ["template.FuncMap", "Add functions to template", "Both A and B", "template.WithFuncs()"],
        "options_hi": ["template.FuncMap", "टेम्प्लेट में फ़ंक्शन्स ऐड करना", "A और B दोनों", "template.WithFuncs()"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of 'crypto/rand'?",
        "question_hi": "'crypto/rand' का उद्देश्य क्या है?",
        "options_en": ["Cryptographic random numbers", "Secure random generation", "Both A and B", "Math random"],
        "options_hi": ["क्रिप्टोग्राफिक रैंडम नंबर्स", "सिक्योर रैंडम जेनरेशन", "A और B दोनों", "मैथ रैंडम"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How do you implement a priority queue?",
        "question_hi": "प्रायोरिटी क्यू कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["container/heap", "Custom implementation", "Both A and B", "queue.Priority"],
        "options_hi": ["container/heap", "कस्टम इम्प्लीमेंटेशन", "A और B दोनों", "queue.Priority"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of 'net/http/httptest'?",
        "question_hi": "'net/http/httptest' का उद्देश्य क्या है?",
        "options_en": ["HTTP testing", "Mock server", "Both A and B", "Production server"],
        "options_hi": ["HTTP टेस्टिंग", "मॉक सर्वर", "A और B दोनों", "प्रोडक्शन सर्वर"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you create a Windows service?",
        "question_hi": "Windows सर्विस कैसे बनाते हैं?",
        "options_en": ["golang.org/x/sys/windows/svc", "Third-party packages", "Both A and B", "Not possible"],
        "options_hi": ["golang.org/x/sys/windows/svc", "थर्ड-पार्टी पैकेज", "A और B दोनों", "संभव नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of 'reflect' package?",
        "question_hi": "'reflect' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Runtime reflection", "Type inspection", "Both A and B", "Compile-time checks"],
        "options_hi": ["रनटाइम रिफ्लेक्शन", "टाइप इंस्पेक्शन", "A और B दोनों", "कंपाइल-टाइम चेक्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you implement a cache with expiration?",
        "question_hi": "एक्सपायरेशन के साथ कैश कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["time.Ticker cleanup", "Third-party libraries", "Both A and B", "sync.Map"],
        "options_hi": ["time.Ticker क्लीनअप", "थर्ड-पार्टी लाइब्रेरीज", "A और B दोनों", "sync.Map"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of 'go mod verify'?",
        "question_hi": "'go mod verify' का उद्देश्य क्या है?",
        "options_en": ["Verify module integrity", "Check dependencies", "Both A and B", "Validate code"],
        "options_hi": ["मॉड्यूल इंटीग्रिटी वेरिफाई करना", "डिपेंडेंसी चेक करना", "A और B दोनों", "कोड वैलिडेट करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you create a custom import path?",
        "question_hi": "कस्टम इम्पोर्ट पाथ कैसे बनाते हैं?",
        "options_en": ["go.mod replace directive", "Symbolic links", "Both A and B", "Environment variables"],
        "options_hi": ["go.mod replace डायरेक्टिव", "सिंबोलिक लिंक्स", "A और B दोनों", "एनवायरनमेंट वेरिएबल्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of 'sync/atomic' package?",
        "question_hi": "'sync/atomic' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Atomic operations", "Low-level synchronization", "Both A and B", "High-level locks"],
        "options_hi": ["एटोमिक ऑपरेशन्स", "लो-लेवल सिंक्रोनाइजेशन", "A और B दोनों", "हाई-लेवल लॉक्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do you implement a state machine?",
        "question_hi": "स्टेट मशीन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Struct with state field", "Channel-based", "Both A and B", "switch statements"],
        "options_hi": ["स्टेट फील्ड के साथ स्ट्रक्चर", "चैनल-बेस्ड", "A और B दोनों", "switch स्टेटमेंट्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of 'html/template'?",
        "question_hi": "'html/template' का उद्देश्य क्या है?",
        "options_en": ["HTML templating", "Auto-escaping", "Both A and B", "Text templating"],
        "options_hi": ["HTML टेम्प्लेटिंग", "ऑटो-एस्केपिंग", "A और B दोनों", "टेक्स्ट टेम्प्लेटिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How do you create a memory profiler?",
        "question_hi": "मेमोरी प्रोफाइलर कैसे बनाते हैं?",
        "options_en": ["pprof.WriteHeapProfile", "runtime.MemStats", "Both A and B", "debug.FreeOSMemory"],
        "options_hi": ["pprof.WriteHeapProfile", "runtime.MemStats", "A और B दोनों", "debug.FreeOSMemory"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of 'go mod why'?",
        "question_hi": "'go mod why' का उद्देश्य क्या है?",
        "options_en": ["Explain package imports", "Dependency reasons", "Both A and B", "Code analysis"],
        "options_hi": ["पैकेज इम्पोर्ट्स एक्सप्लेन करना", "डिपेंडेंसी रीजन्स", "A और B दोनों", "कोड एनालिसिस"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How do you implement a connection pool?",
        "question_hi": "कनेक्शन पूल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Channel of connections", "sync.Pool", "Both A and B", "Database/sql"],
        "options_hi": ["कनेक्शन्स का चैनल", "sync.Pool", "A और B दोनों", "Database/sql"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of 'x/net/websocket'?",
        "question_hi": "'x/net/websocket' का उद्देश्य क्या है?",
        "options_en": ["WebSocket implementation", "Real-time communication", "Both A and B", "HTTP communication"],
        "options_hi": ["WebSocket इम्प्लीमेंटेशन", "रियल-टाइम कम्युनिकेशन", "A और B दोनों", "HTTP कम्युनिकेशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How do you create a Linux daemon?",
        "question_hi": "Linux डेमन कैसे बनाते हैं?",
        "options_en": ["os.StartProcess", "syscall.Fork", "Both A and B", "Not possible"],
        "options_hi": ["os.StartProcess", "syscall.Fork", "A और B दोनों", "संभव नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of 'testing/quick'?",
        "question_hi": "'testing/quick' का उद्देश्य क्या है?",
        "options_en": ["Property-based testing", "Random testing", "Both A and B", "Unit testing"],
        "options_hi": ["प्रॉपर्टी-बेस्ड टेस्टिंग", "रैंडम टेस्टिंग", "A और B दोनों", "यूनिट टेस्टिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How do you implement a custom transport?",
        "question_hi": "कस्टम ट्रांसपोर्ट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["http.RoundTripper interface", "Custom http.Transport", "Both A and B", "http.Client modification"],
        "options_hi": ["http.RoundTripper इंटरफेस", "कस्टम http.Transport", "A और B दोनों", "http.Client मॉडिफिकेशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of 'go mod edit'?",
        "question_hi": "'go mod edit' का उद्देश्य क्या है?",
        "options_en": ["Edit go.mod", "Module manipulation", "Both A and B", "Code editing"],
        "options_hi": ["go.mod एडिट करना", "मॉड्यूल मैनिपुलेशन", "A और B दोनों", "कोड एडिटिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How do you create a custom scanner?",
        "question_hi": "कस्टम स्कैनर कैसे बनाते हैं?",
        "options_en": ["bufio.SplitFunc", "Implement Scanner interface", "Both A and B", "io.Reader wrapper"],
        "options_hi": ["bufio.SplitFunc", "Scanner इंटरफेस इम्प्लीमेंट करना", "A और B दोनों", "io.Reader रैपर"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of 'runtime/debug'?",
        "question_hi": "'runtime/debug' का उद्देश्य क्या है?",
        "options_en": ["Debug information", "GC statistics", "Both A and B", "Performance metrics"],
        "options_hi": ["डीबग इनफार्मेशन", "GC स्टैटिस्टिक्स", "A और B दोनों", "परफॉर्मेंस मेट्रिक्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you implement a custom allocator?",
        "question_hi": "कस्टम अलोकेटर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["sync.Pool", "Manual memory management", "Both A and B", "Not possible"],
        "options_hi": ["sync.Pool", "मैनुअल मेमोरी मैनेजमेंट", "A और B दोनों", "संभव नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of 'go tool trace'?",
        "question_hi": "'go tool trace' का उद्देश्य क्या है?",
        "options_en": ["Execution tracing", "Goroutine analysis", "Both A and B", "Memory profiling"],
        "options_hi": ["एक्जिक्यूशन ट्रेसिंग", "गोरूटीन एनालिसिस", "A और B दोनों", "मेमोरी प्रोफाइलिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you create a plugin system with RPC?",
        "question_hi": "RPC के साथ प्लगइन सिस्टम कैसे बनाते हैं?",
        "options_en": ["net/rpc", "gRPC", "Both A and B", "HTTP APIs"],
        "options_hi": ["net/rpc", "gRPC", "A और B दोनों", "HTTP APIs"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of 'context.WithValue'?",
        "question_hi": "'context.WithValue' का उद्देश्य क्या है?",
        "options_en": ["Store request-scoped values", "Pass data between handlers", "Both A and B", "Global variables"],
        "options_hi": ["रिक्वेस्ट-स्कोप्ड वैल्यूज स्टोर करना", "हैंडलर्स के बीच डेटा पास करना", "A और B दोनों", "ग्लोबल वेरिएबल्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How do you implement a custom hash function?",
        "question_hi": "कस्टम हैश फंक्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement hash.Hash interface", "Write custom algorithm", "Both A and B", "Use crypto package"],
        "options_hi": ["hash.Hash इंटरफेस इम्प्लीमेंट करना", "कस्टम एल्गोरिदम लिखना", "A और B दोनों", "crypto पैकेज उपयोग करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of 'io.Pipe'?",
        "question_hi": "'io.Pipe' का उद्देश्य क्या है?",
        "options_en": ["Connect reader and writer", "In-memory pipe", "Both A and B", "File operations"],
        "options_hi": ["रीडर और राइटर कनेक्ट करना", "इन-मेमोरी पाइप", "A और B दोनों", "फाइल ऑपरेशन्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you create a custom URL scheme?",
        "question_hi": "कस्टम URL स्कीम कैसे बनाते हैं?",
        "options_en": ["net/http/httputil", "Custom transport", "Both A and B", "Not possible"],
        "options_hi": ["net/http/httputil", "कस्टम ट्रांसपोर्ट", "A और B दोनों", "संभव नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of 'runtime.SetFinalizer'?",
        "question_hi": "'runtime.SetFinalizer' का उद्देश्य क्या है?",
        "options_en": ["Resource cleanup", "Finalization logic", "Both A and B", "Memory allocation"],
        "options_hi": ["रिसोर्स क्लीनअप", "फाइनलाइजेशन लॉजिक", "A और B दोनों", "मेमोरी अलोकेशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you implement a custom DNS resolver?",
        "question_hi": "कस्टम DNS रेजोल्वर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["net.Resolver", "Custom DialContext", "Both A and B", "net.LookupHost"],
        "options_hi": ["net.Resolver", "कस्टम DialContext", "A और B दोनों", "net.LookupHost"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of 'go mod init' with version?",
        "question_hi": "वर्जन के साथ 'go mod init' का उद्देश्य क्या है?",
        "options_en": ["Specify module version", "Initialize with version", "Both A and B", "Set Go version"],
        "options_hi": ["मॉड्यूल वर्जन स्पेसिफाई करना", "वर्जन के साथ इनिशियलाइज करना", "A और B दोनों", "Go वर्जन सेट करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How do you create a custom compression?",
        "question_hi": "कस्टम कम्प्रेशन कैसे बनाते हैं?",
        "options_en": ["compress/flate", "Implement compression interfaces", "Both A and B", "Use third-party"],
        "options_hi": ["compress/flate", "कम्प्रेशन इंटरफेस इम्प्लीमेंट करना", "A और B दोनों", "थर्ड-पार्टी उपयोग करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of 'sync.WaitGroup' in worker pools?",
        "question_hi": "वर्कर पूल में 'sync.WaitGroup' का उद्देश्य क्या है?",
        "options_en": ["Wait for workers", "Synchronize completion", "Both A and B", "Manage goroutines"],
        "options_hi": ["वर्कर्स का इंतज़ार करना", "कम्प्लीशन सिंक्रोनाइज करना", "A और B दोनों", "गोरूटीन्स मैनेज करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you implement a custom logger?",
        "question_hi": "कस्टम लॉगर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["log.Logger", "Implement log interface", "Both A and B", "fmt.Println"],
        "options_hi": ["log.Logger", "लॉग इंटरफेस इम्प्लीमेंट करना", "A और B दोनों", "fmt.Println"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of 'runtime.NumGoroutine'?",
        "question_hi": "'runtime.NumGoroutine' का उद्देश्य क्या है?",
        "options_en": ["Count active goroutines", "Monitor concurrency", "Both A and B", "Limit goroutines"],
        "options_hi": ["एक्टिव गोरूटीन्स काउंट करना", "कंकरेंसी मॉनिटर करना", "A और B दोनों", "गोरूटीन्स लिमिट करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How do you create a custom flag type?",
        "question_hi": "कस्टम फ्लैग टाइप कैसे बनाते हैं?",
        "options_en": ["flag.Value interface", "Custom parsing", "Both A and B", "String flags only"],
        "options_hi": ["flag.Value इंटरफेस", "कस्टम पार्सिंग", "A और B दोनों", "केवल स्ट्रिंग फ्लैग्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of 'http.MaxBytesReader'?",
        "question_hi": "'http.MaxBytesReader' का उद्देश्य क्या है?",
        "options_en": ["Limit request size", "Prevent OOM", "Both A and B", "Speed up requests"],
        "options_hi": ["रिक्वेस्ट साइज लिमिट करना", "OOM प्रिवेंट करना", "A और B दोनों", "रिक्वेस्ट्स स्पीड अप करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How do you implement a custom sort for complex types?",
        "question_hi": "कॉम्प्लेक्स टाइप्स के लिए कस्टम सॉर्ट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["sort.Interface methods", "Custom comparison", "Both A and B", "Use sort.Slice"],
        "options_hi": ["sort.Interface मेथड्स", "कस्टम कम्पेयरिजन", "A और B दोनों", "sort.Slice उपयोग करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of 'crypto/subtle'?",
        "question_hi": "'crypto/subtle' का उद्देश्य क्या है?",
        "options_en": ["Constant-time operations", "Security algorithms", "Both A and B", "Math operations"],
        "options_hi": ["कॉन्स्टेंट-टाइम ऑपरेशन्स", "सिक्योरिटी एल्गोरिदम", "A और B दोनों", "मैथ ऑपरेशन्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How do you create a custom file system?",
        "question_hi": "कस्टम फाइल सिस्टम कैसे बनाते हैं?",
        "options_en": ["io/fs interfaces", "http.FileSystem", "Both A and B", "os package only"],
        "options_hi": ["io/fs इंटरफेस", "http.FileSystem", "A और B दोनों", "केवल os पैकेज"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of 'context.CancelFunc'?",
        "question_hi": "'context.CancelFunc' का उद्देश्य क्या है?",
        "options_en": ["Cancel context", "Stop operations", "Both A and B", "Start operations"],
        "options_hi": ["कॉन्टेक्स्ट कैंसल करना", "ऑपरेशन्स स्टॉप करना", "A और B दोनों", "ऑपरेशन्स स्टार्ट करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you implement a custom protocol?",
        "question_hi": "कस्टम प्रोटोकॉल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["net.Conn", "Custom listeners", "Both A and B", "HTTP only"],
        "options_hi": ["net.Conn", "कस्टम लिसनर्स", "A और B दोनों", "केवल HTTP"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of 'runtime.GOMAXPROCS'?",
        "question_hi": "'runtime.GOMAXPROCS' का उद्देश्य क्या है?",
        "options_en": ["Set CPU cores", "Control parallelism", "Both A and B", "Memory limits"],
        "options_hi": ["CPU कोर सेट करना", "पैरेललिज्म कंट्रोल करना", "A और B दोनों", "मेमोरी लिमिट्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How do you create a custom middleware chain?",
        "question_hi": "कस्टम मिडलवेयर चेन कैसे बनाते हैं?",
        "options_en": ["Function composition", "Wrapper pattern", "Both A and B", "Inheritance"],
        "options_hi": ["फंक्शन कंपोजिशन", "रैपर पैटर्न", "A और B दोनों", "इनहेरिटेंस"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of 'sync.Once' in singleton pattern?",
        "question_hi": "सिंगलटन पैटर्न में 'sync.Once' का उद्देश्य क्या है?",
        "options_en": ["Thread-safe initialization", "One-time execution", "Both A and B", "Multiple instances"],
        "options_hi": ["थ्रेड-सेफ इनिशियलाइजेशन", "वन-टाइम एक्जिक्यूशन", "A और B दोनों", "मल्टीपल इंस्टेंस"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How do you implement a custom error wrapper?",
        "question_hi": "कस्टम एरर रैपर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["fmt.Errorf with %w", "errors package", "Both A and B", "String concatenation"],
        "options_hi": ["%w के साथ fmt.Errorf", "errors पैकेज", "A और B दोनों", "स्ट्रिंग कॉन्कैटिनेशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of 'time.AfterFunc'?",
        "question_hi": "'time.AfterFunc' का उद्देश्य क्या है?",
        "options_en": ["Delayed function execution", "Timer with callback", "Both A and B", "Immediate execution"],
        "options_hi": ["डिलेयड फंक्शन एक्जिक्यूशन", "कॉलबैक के साथ टाइमर", "A और B दोनों", "इमीडिएट एक्जिक्यूशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How do you create a custom reader?",
        "question_hi": "कस्टम रीडर कैसे बनाते हैं?",
        "options_en": ["io.Reader interface", "Custom Read method", "Both A and B", "bufio.Reader"],
        "options_hi": ["io.Reader इंटरफेस", "कस्टम Read मेथड", "A और B दोनों", "bufio.Reader"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of 'reflect.StructTag'?",
        "question_hi": "'reflect.StructTag' का उद्देश्य क्या है?",
        "options_en": ["Struct tag parsing", "Metadata access", "Both A and B", "Type information"],
        "options_hi": ["स्ट्रक्चर टैग पार्सिंग", "मेटाडेटा एक्सेस", "A और B दोनों", "टाइप इनफार्मेशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How do you implement a custom writer?",
        "question_hi": "कस्टम राइटर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["io.Writer interface", "Custom Write method", "Both A and B", "bufio.Writer"],
        "options_hi": ["io.Writer इंटरफेस", "कस्टम Write मेथड", "A और B दोनों", "bufio.Writer"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of 'sync.Cond.Wait'?",
        "question_hi": "'sync.Cond.Wait' का उद्देश्य क्या है?",
        "options_en": ["Wait for condition", "Release mutex temporarily", "Both A and B", "Acquire mutex"],
        "options_hi": ["कंडीशन का इंतज़ार करना", "म्यूटेक्स टेम्पररली रिलीज करना", "A और B दोनों", "म्यूटेक्स एक्वायर करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How do you create a custom context?",
        "question_hi": "कस्टम कॉन्टेक्स्ट कैसे बनाते हैं?",
        "options_en": ["context.Context interface", "Embed existing context", "Both A and B", "Global variables"],
        "options_hi": ["context.Context इंटरफेस", "एक्सिस्टिंग कॉन्टेक्स्ट एम्बेड करना", "A और B दोनों", "ग्लोबल वेरिएबल्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of 'io.TeeReader'?",
        "question_hi": "'io.TeeReader' का उद्देश्य क्या है?",
        "options_en": ["Duplicate reads", "Write while reading", "Both A and B", "Speed up reading"],
        "options_hi": ["रीड्स डुप्लिकेट करना", "रीडिंग के दौरान राइट करना", "A और B दोनों", "रीडिंग स्पीड अप करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How do you implement a custom marshaler?",
        "question_hi": "कस्टम मार्शलर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["json.Marshaler", "encoding.TextMarshaler", "Both A and B", "String conversion"],
        "options_hi": ["json.Marshaler", "encoding.TextMarshaler", "A और B दोनों", "स्ट्रिंग कन्वर्जन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of 'http.Hijacker'?",
        "question_hi": "'http.Hijacker' का उद्देश्य क्या है?",
        "options_en": ["Take over connection", "WebSocket upgrade", "Both A and B", "HTTP/2 only"],
        "options_hi": ["कनेक्शन टेक ओवर करना", "WebSocket अपग्रेड", "A और B दोनों", "केवल HTTP/2"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How do you create a custom dialer?",
        "question_hi": "कस्टम डायलर कैसे बनाते हैं?",
        "options_en": ["net.Dialer", "Custom Dial function", "Both A and B", "http.Transport only"],
        "options_hi": ["net.Dialer", "कस्टम Dial फंक्शन", "A और B दोनों", "केवल http.Transport"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of 'sync.RWMutex.RLock'?",
        "question_hi": "'sync.RWMutex.RLock' का उद्देश्य क्या है?",
        "options_en": ["Multiple readers", "Shared read access", "Both A and B", "Exclusive write"],
        "options_hi": ["मल्टीपल रीडर्स", "शेयर्ड रीड एक्सेस", "A और B दोनों", "एक्सक्लूसिव राइट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How do you implement a custom unmarshaler?",
        "question_hi": "कस्टम अनमार्शलर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["json.Unmarshaler", "encoding.TextUnmarshaler", "Both A and B", "Type assertion"],
        "options_hi": ["json.Unmarshaler", "encoding.TextUnmarshaler", "A और B दोनों", "टाइप असर्शन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of 'runtime.Stack'?",
        "question_hi": "'runtime.Stack' का उद्देश्य क्या है?",
        "options_en": ["Get goroutine stack", "Debugging information", "Both A and B", "Memory usage"],
        "options_hi": ["गोरूटीन स्टैक प्राप्त करना", "डीबगिंग इनफार्मेशन", "A और B दोनों", "मेमोरी यूसेज"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you create a custom handler?",
        "question_hi": "कस्टम हैंडलर कैसे बनाते हैं?",
        "options_en": ["http.Handler interface", "ServeHTTP method", "Both A and B", "Function wrapper"],
        "options_hi": ["http.Handler इंटरफेस", "ServeHTTP मेथड", "A और B दोनों", "फंक्शन रैपर"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of 'time.Ticker.Reset'?",
        "question_hi": "'time.Ticker.Reset' का उद्देश्य क्या है?",
        "options_en": ["Change tick interval", "Restart ticker", "Both A and B", "Stop ticker"],
        "options_hi": ["टिक इंटरवल बदलना", "टिकर रीस्टार्ट करना", "A और B दोनों", "टिकर स्टॉप करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you implement a custom validator?",
        "question_hi": "कस्टम वैलिडेटर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Validation functions", "Struct tags", "Both A and B", "Third-party only"],
        "options_hi": ["वैलिडेशन फंक्शन्स", "स्ट्रक्चर टैग्स", "A और B दोनों", "केवल थर्ड-पार्टी"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of 'sync.Pool.Put'?",
        "question_hi": "'sync.Pool.Put' का उद्देश्य क्या है?",
        "options_en": ["Return object to pool", "Reuse resources", "Both A and B", "Allocate memory"],
        "options_hi": ["ऑब्जेक्ट पूल में वापस करना", "रिसोर्सेज रीयूज करना", "A और B दोनों", "मेमोरी अलोकेट करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How do you create a custom comparator?",
        "question_hi": "कस्टम कम्पेयरेटर कैसे बनाते हैं?",
        "options_en": ["sort.Interface", "Custom Less method", "Both A and B", "Function pointer"],
        "options_hi": ["sort.Interface", "कस्टम Less मेथड", "A और B दोनों", "फंक्शन पॉइंटर"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of 'context.WithTimeout'?",
        "question_hi": "'context.WithTimeout' का उद्देश्य क्या है?",
        "options_en": ["Set operation timeout", "Automatic cancellation", "Both A and B", "Manual cancellation"],
        "options_hi": ["ऑपरेशन टाइमआउट सेट करना", "ऑटोमैटिक कैंसलेशन", "A और B दोनों", "मैनुअल कैंसलेशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you implement a custom formatter?",
        "question_hi": "कस्टम फॉर्मेटर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["fmt.Formatter", "String() method", "Both A and B", "fmt.Sprintf"],
        "options_hi": ["fmt.Formatter", "String() मेथड", "A और B दोनों", "fmt.Sprintf"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of 'sync.Cond.Signal'?",
        "question_hi": "'sync.Cond.Signal' का उद्देश्य क्या है?",
        "options_en": ["Wake one goroutine", "Notify one waiter", "Both A and B", "Wake all goroutines"],
        "options_hi": ["एक गोरूटीन वेक करना", "एक वेटर को नोटिफाई करना", "A और B दोनों", "सभी गोरूटीन्स वेक करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you create a custom decoder?",
        "question_hi": "कस्टम डिकोडर कैसे बनाते हैं?",
        "options_en": ["encoding.Decoder", "Custom decode logic", "Both A and B", "JSON only"],
        "options_hi": ["encoding.Decoder", "कस्टम डिकोड लॉजिक", "A और B दोनों", "केवल JSON"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of 'runtime.GC'?",
        "question_hi": "'runtime.GC' का उद्देश्य क्या है?",
        "options_en": ["Trigger garbage collection", "Manual GC control", "Both A and B", "Memory allocation"],
        "options_hi": ["गार्बेज कलेक्शन ट्रिगर करना", "मैनुअल GC कंट्रोल", "A और B दोनों", "मेमोरी अलोकेशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How do you implement a custom encoder?",
        "question_hi": "कस्टम एनकोडर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["encoding.Encoder", "Custom encode logic", "Both A and B", "JSON only"],
        "options_hi": ["encoding.Encoder", "कस्टम एनकोड लॉजिक", "A और B दोनों", "केवल JSON"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of 'sync.Map.LoadAndDelete'?",
        "question_hi": "'sync.Map.LoadAndDelete' का उद्देश्य क्या है?",
        "options_en": ["Atomic load and delete", "Thread-safe operation", "Both A and B", "Only load"],
        "options_hi": ["एटोमिक लोड और डिलीट", "थ्रेड-सेफ ऑपरेशन", "A और B दोनों", "केवल लोड"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do you create a custom middleware?",
        "question_hi": "कस्टम मिडलवेयर कैसे बनाते हैं?",
        "options_en": ["Function that returns handler", "Wrapper pattern", "Both A and B", "Inheritance"],
        "options_hi": ["हैंडलर रिटर्न करने वाला फंक्शन", "रैपर पैटर्न", "A और B दोनों", "इनहेरिटेंस"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of 'time.Timer.Stop'?",
        "question_hi": "'time.Timer.Stop' का उद्देश्य क्या है?",
        "options_en": ["Prevent timer firing", "Cancel timer", "Both A and B", "Reset timer"],
        "options_hi": ["टाइमर फायरिंग प्रिवेंट करना", "टाइमर कैंसल करना", "A और B दोनों", "टाइमर रीसेट करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How do you implement a custom stringer?",
        "question_hi": "कस्टम स्ट्रिंगर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["fmt.Stringer interface", "String() method", "Both A and B", "fmt.Sprintf"],
        "options_hi": ["fmt.Stringer इंटरफेस", "String() मेथड", "A और B दोनों", "fmt.Sprintf"],
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