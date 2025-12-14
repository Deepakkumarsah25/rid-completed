const questions = [
    {
        "num": 1,
        "question_en": "What is the purpose of the 'init' function in Go?",
        "question_hi": "Go में 'init' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To initialize package variables", "To run before main function", "For package setup", "All of the above"],
        "options_hi": ["पैकेज वेरिएबल्स इनिशियलाइज करने के लिए", "main फंक्शन से पहले रन करने के लिए", "पैकेज सेटअप के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How do you implement type assertions in Go?",
        "question_hi": "Go में टाइप असर्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["value.(type)", "value.(Type)", "assert(value, Type)", "type(value)"],
        "options_hi": ["value.(type)", "value.(Type)", "assert(value, Type)", "type(value)"],
        "answer_en": "value.(Type)",
        "answer_hi": "value.(Type)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the purpose of 'sync.WaitGroup' in Go?",
        "question_hi": "Go में 'sync.WaitGroup' का उद्देश्य क्या है?",
        "options_en": ["To wait for goroutines to finish", "To group variables", "To wait for functions", "To group channels"],
        "options_hi": ["गोरूटीन्स के खत्म होने का इंतज़ार करने के लिए", "वेरिएबल्स ग्रुप करने के लिए", "फंक्शन्स का इंतज़ार करने के लिए", "चैनल्स ग्रुप करने के लिए"],
        "answer_en": "To wait for goroutines to finish",
        "answer_hi": "गोरूटीन्स के खत्म होने का इंतज़ार करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you create a buffered channel in Go?",
        "question_hi": "Go में बफर्ड चैनल कैसे बनाते हैं?",
        "options_en": ["make(chan int, 10)", "chan int{10}", "new(chan int, 10)", "buffer(chan int, 10)"],
        "options_hi": ["make(chan int, 10)", "chan int{10}", "new(chan int, 10)", "buffer(chan int, 10)"],
        "answer_en": "make(chan int, 10)",
        "answer_hi": "make(chan int, 10)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the zero value for slices in Go?",
        "question_hi": "Go में स्लाइस का जीरो वैल्यू क्या है?",
        "options_en": ["nil", "[]", "empty slice", "0"],
        "options_hi": ["nil", "[]", "खाली स्लाइस", "0"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you implement method chaining in Go?",
        "question_hi": "Go में मेथड चेनिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["By returning the receiver", "Using pointers", "Using interfaces", "All of the above"],
        "options_hi": ["रिसीवर रिटर्न करके", "पॉइंटर्स का उपयोग करके", "इंटरफेस का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "By returning the receiver",
        "answer_hi": "रिसीवर रिटर्न करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of 'sync.RWMutex' in Go?",
        "question_hi": "Go में 'sync.RWMutex' का उद्देश्य क्या है?",
        "options_en": ["For read-write mutual exclusion", "For reading only", "For writing only", "For synchronization"],
        "options_hi": ["रीड-राइट म्यूचुअल एक्सक्लूजन के लिए", "केवल रीडिंग के लिए", "केवल राइटिंग के लिए", "सिंक्रोनाइजेशन के लिए"],
        "answer_en": "For read-write mutual exclusion",
        "answer_hi": "रीड-राइट म्यूचुअल एक्सक्लूजन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you implement function composition in Go?",
        "question_hi": "Go में फंक्शन कम्पोजिशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["By combining functions", "Using higher-order functions", "Using closures", "All of the above"],
        "options_hi": ["फंक्शन्स को कम्बाइन करके", "हायर-ऑर्डर फंक्शन्स का उपयोग करके", "क्लोजर का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of 'time.Sleep' in Go?",
        "question_hi": "Go में 'time.Sleep' का उद्देश्य क्या है?",
        "options_en": ["To pause execution", "To sleep goroutine", "To delay operations", "All of the above"],
        "options_hi": ["एक्जीक्यूशन पॉज करने के लिए", "गोरूटीन स्लीप करने के लिए", "ऑपरेशन्स डिले करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you implement custom string formatting in Go?",
        "question_hi": "Go में कस्टम स्ट्रिंग फॉर्मेटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement String() method", "Using fmt.Sprintf", "Using strconv", "All of the above"],
        "options_hi": ["String() मेथड इम्प्लीमेंट करके", "fmt.Sprintf का उपयोग करके", "strconv का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "Implement String() method",
        "answer_hi": "String() मेथड इम्प्लीमेंट करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of 'sync.Once' in Go?",
        "question_hi": "Go में 'sync.Once' का उद्देश्य क्या है?",
        "options_en": ["To execute function only once", "To run once per program", "For initialization", "All of the above"],
        "options_hi": ["फंक्शन को केवल एक बार एक्जीक्यूट करने के लिए", "प्रोग्राम में एक बार रन करने के लिए", "इनिशियलाइजेशन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you implement deep copy in Go?",
        "question_hi": "Go में डीप कॉपी कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using encoding/gob", "Using JSON marshaling", "Manual copying", "All of the above"],
        "options_hi": ["encoding/gob का उपयोग करके", "JSON मार्शलिंग का उपयोग करके", "मैनुअल कॉपीिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of 'runtime.Gosched()' in Go?",
        "question_hi": "Go में 'runtime.Gosched()' का उद्देश्य क्या है?",
        "options_en": ["To yield processor to other goroutines", "To schedule goroutines", "To stop goroutine", "To start goroutine"],
        "options_hi": ["प्रोसेसर को अन्य गोरूटीन्स को यील्ड करने के लिए", "गोरूटीन्स शेड्यूल करने के लिए", "गोरूटीन रोकने के लिए", "गोरूटीन शुरू करने के लिए"],
        "answer_en": "To yield processor to other goroutines",
        "answer_hi": "प्रोसेसर को अन्य गोरूटीन्स को यील्ड करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you implement plugin architecture in Go?",
        "question_hi": "Go में प्लगइन आर्किटेक्चर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using plugin package", "Using interfaces", "Using reflection", "All of the above"],
        "options_hi": ["plugin पैकेज का उपयोग करके", "इंटरफेस का उपयोग करके", "रिफ्लेक्शन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of 'context.WithValue' in Go?",
        "question_hi": "Go में 'context.WithValue' का उद्देश्य क्या है?",
        "options_en": ["To store request-scoped values", "To add values to context", "For data passing", "All of the above"],
        "options_hi": ["रिक्वेस्ट-स्कोप्ड वैल्यूज स्टोर करने के लिए", "कॉन्टेक्स्ट में वैल्यूज ऐड करने के लिए", "डेटा पासिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you implement binary serialization in Go?",
        "question_hi": "Go में बाइनरी सीरियलाइजेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using encoding/gob", "Using encoding/binary", "Using protobuf", "All of the above"],
        "options_hi": ["encoding/gob का उपयोग करके", "encoding/binary का उपयोग करके", "protobuf का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of 'sync.Cond' in Go?",
        "question_hi": "Go में 'sync.Cond' का उद्देश्य क्या है?",
        "options_en": ["For condition variables", "For signaling between goroutines", "For waiting on conditions", "All of the above"],
        "options_hi": ["कंडीशन वेरिएबल्स के लिए", "गोरूटीन्स के बीच सिग्नलिंग के लिए", "कंडीशन्स पर इंतज़ार के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you implement connection pooling in Go?",
        "question_hi": "Go में कनेक्शन पूलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sync.Pool", "Using custom pools", "Using database/sql", "All of the above"],
        "options_hi": ["sync.Pool का उपयोग करके", "कस्टम पूल का उपयोग करके", "database/sql का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of 'go:embed' directive in Go?",
        "question_hi": "Go में 'go:embed' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To embed files in binary", "To include static files", "For file embedding", "All of the above"],
        "options_hi": ["बाइनरी में फाइल्स एम्बेड करने के लिए", "स्टेटिक फाइल्स इनक्लूड करने के लिए", "फाइल एम्बेडिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you implement circuit breaking in Go?",
        "question_hi": "Go में सर्किट ब्रेकिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using hystrix-go", "Using custom implementation", "Using third-party libraries", "All of the above"],
        "options_hi": ["hystrix-go का उपयोग करके", "कस्टम इम्प्लीमेंटेशन का उपयोग करके", "थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of 'unsafe.Pointer' in Go?",
        "question_hi": "Go में 'unsafe.Pointer' का उद्देश्य क्या है?",
        "options_en": ["For unsafe memory operations", "To bypass type safety", "For low-level programming", "All of the above"],
        "options_hi": ["अनसेफ मेमोरी ऑपरेशन्स के लिए", "टाइप सेफ्टी बायपास करने के लिए", "लो-लेवल प्रोग्रामिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you implement memory profiling in Go?",
        "question_hi": "Go में मेमोरी प्रोफाइलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using pprof", "Using runtime/pprof", "Using net/http/pprof", "All of the above"],
        "options_hi": ["pprof का उपयोग करके", "runtime/pprof का उपयोग करके", "net/http/pprof का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of 'go:generate' directive in Go?",
        "question_hi": "Go में 'go:generate' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To run code generators", "To generate code", "For automation", "All of the above"],
        "options_hi": ["कोड जेनरेटर रन करने के लिए", "कोड जेनरेट करने के लिए", "ऑटोमेशन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How do you implement hot reloading in Go?",
        "question_hi": "Go में हॉट रीलोडिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using air", "Using fresh", "Using custom watchers", "All of the above"],
        "options_hi": ["air का उपयोग करके", "fresh का उपयोग करके", "कस्टम वॉचर का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of 'sync.Map' in Go?",
        "question_hi": "Go में 'sync.Map' का उद्देश्य क्या है?",
        "options_en": ["For concurrent map operations", "For thread-safe maps", "For concurrent access", "All of the above"],
        "options_hi": ["कंकरेंट मैप ऑपरेशन्स के लिए", "थ्रेड-सेफ मैप्स के लिए", "कंकरेंट एक्सेस के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How do you implement gRPC in Go?",
        "question_hi": "Go में gRPC कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using google.golang.org/grpc", "Using protocol buffers", "Using code generation", "All of the above"],
        "options_hi": ["google.golang.org/grpc का उपयोग करके", "प्रोटोकॉल बफर का उपयोग करके", "कोड जेनरेशन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of 'context.WithDeadline' in Go?",
        "question_hi": "Go में 'context.WithDeadline' का उद्देश्य क्या है?",
        "options_en": ["To set absolute deadline", "For timeout with specific time", "For deadline-based cancellation", "All of the above"],
        "options_hi": ["एब्सोल्यूट डेडलाइन सेट करने के लिए", "स्पेसिफिक टाइम के साथ टाइमआउट के लिए", "डेडलाइन-बेस्ड कैंसलेशन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How do you implement WebSocket in Go?",
        "question_hi": "Go में WebSocket कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using gorilla/websocket", "Using nhooyr/websocket", "Using standard library", "All of the above"],
        "options_hi": ["gorilla/websocket का उपयोग करके", "nhooyr/websocket का उपयोग करके", "स्टैंडर्ड लाइब्रेरी का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of 'io.Reader' interface in Go?",
        "question_hi": "Go में 'io.Reader' इंटरफेस का उद्देश्य क्या है?",
        "options_en": ["For reading data", "For stream input", "For data consumption", "All of the above"],
        "options_hi": ["डेटा रीडिंग के लिए", "स्ट्रीम इनपुट के लिए", "डेटा कंजम्पशन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you implement file watching in Go?",
        "question_hi": "Go में फाइल वॉचिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using fsnotify", "Using custom polling", "Using OS-specific APIs", "All of the above"],
        "options_hi": ["fsnotify का उपयोग करके", "कस्टम पोलिंग का उपयोग करके", "OS-स्पेसिफिक API का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of 'io.Writer' interface in Go?",
        "question_hi": "Go में 'io.Writer' इंटरफेस का उद्देश्य क्या है?",
        "options_en": ["For writing data", "For stream output", "For data production", "All of the above"],
        "options_hi": ["डेटा राइटिंग के लिए", "स्ट्रीम आउटपुट के लिए", "डेटा प्रोडक्शन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you implement cron jobs in Go?",
        "question_hi": "Go में cron जॉब्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using robfig/cron", "Using custom tickers", "Using time.Ticker", "All of the above"],
        "options_hi": ["robfig/cron का उपयोग करके", "कस्टम टिकर का उपयोग करके", "time.Ticker का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of 'bufio.Scanner' in Go?",
        "question_hi": "Go में 'bufio.Scanner' का उद्देश्य क्या है?",
        "options_en": ["For line-by-line reading", "For tokenization", "For efficient reading", "All of the above"],
        "options_hi": ["लाइन-बाय-लाइन रीडिंग के लिए", "टोकनाइजेशन के लिए", "एफिशिएंट रीडिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you implement GraphQL in Go?",
        "question_hi": "Go में GraphQL कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using graphql-go/graphql", "Using 99designs/gqlgen", "Using custom implementation", "All of the above"],
        "options_hi": ["graphql-go/graphql का उपयोग करके", "99designs/gqlgen का उपयोग करके", "कस्टम इम्प्लीमेंटेशन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of 'sync.Pool' in Go?",
        "question_hi": "Go में 'sync.Pool' का उद्देश्य क्या है?",
        "options_en": ["For object pooling", "For reducing allocations", "For reuse of objects", "All of the above"],
        "options_hi": ["ऑब्जेक्ट पूलिंग के लिए", "अलोकेशन कम करने के लिए", "ऑब्जेक्ट्स के रीयूज के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do you implement OAuth2 in Go?",
        "question_hi": "Go में OAuth2 कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using golang.org/x/oauth2", "Using third-party libraries", "Using custom implementation", "All of the above"],
        "options_hi": ["golang.org/x/oauth2 का उपयोग करके", "थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "कस्टम इम्प्लीमेंटेशन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of 'text/template' in Go?",
        "question_hi": "Go में 'text/template' का उद्देश्य क्या है?",
        "options_en": ["For text templating", "For generating text", "For dynamic text", "All of the above"],
        "options_hi": ["टेक्स्ट टेम्प्लेटिंग के लिए", "टेक्स्ट जेनरेट करने के लिए", "डायनामिक टेक्स्ट के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How do you implement distributed locks in Go?",
        "question_hi": "Go में डिस्ट्रीब्यूटेड लॉक्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Redis", "Using etcd", "Using Consul", "All of the above"],
        "options_hi": ["Redis का उपयोग करके", "etcd का उपयोग करके", "Consul का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of 'html/template' in Go?",
        "question_hi": "Go में 'html/template' का उद्देश्य क्या है?",
        "options_en": ["For HTML templating", "For safe HTML generation", "For web templates", "All of the above"],
        "options_hi": ["HTML टेम्प्लेटिंग के लिए", "सेफ HTML जेनरेशन के लिए", "वेब टेम्प्लेट्स के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How do you implement load testing in Go?",
        "question_hi": "Go में लोड टेस्टिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using vegeta", "Using wrk", "Using custom tools", "All of the above"],
        "options_hi": ["vegeta का उपयोग करके", "wrk का उपयोग करके", "कस्टम टूल्स का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of 'go/ast' package in Go?",
        "question_hi": "Go में 'go/ast' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For abstract syntax trees", "For code analysis", "For parsing Go code", "All of the above"],
        "options_hi": ["अब्स्ट्रैक्ट सिंटैक्स ट्री के लिए", "कोड एनालिसिस के लिए", "Go कोड पार्सिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How do you implement feature toggles in Go?",
        "question_hi": "Go में फीचर टॉगल्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using configuration", "Using environment variables", "Using feature flag services", "All of the above"],
        "options_hi": ["कॉन्फिगरेशन का उपयोग करके", "एनवायरनमेंट वेरिएबल्स का उपयोग करके", "फीचर फ्लैग सर्विस का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of 'go/parser' package in Go?",
        "question_hi": "Go में 'go/parser' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For parsing Go source code", "For code analysis", "For AST generation", "All of the above"],
        "options_hi": ["Go सोर्स कोड पार्सिंग के लिए", "कोड एनालिसिस के लिए", "AST जेनरेशन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How do you implement API mocking in Go?",
        "question_hi": "Go में API मॉकिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using httptest package", "Using third-party libraries", "Using custom implementations", "All of the above"],
        "options_hi": ["httptest पैकेज का उपयोग करके", "थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "कस्टम इम्प्लीमेंटेशन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of 'go/types' package in Go?",
        "question_hi": "Go में 'go/types' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For type checking", "For type information", "For code analysis", "All of the above"],
        "options_hi": ["टाइप चेकिंग के लिए", "टाइप इनफॉर्मेशन के लिए", "कोड एनालिसिस के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How do you implement database transactions in Go?",
        "question_hi": "Go में डेटाबेस ट्रांजैक्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Begin(), Commit(), Rollback()", "Using transaction context", "Using database/sql", "All of the above"],
        "options_hi": ["Begin(), Commit(), Rollback() का उपयोग करके", "ट्रांजैक्शन कॉन्टेक्स्ट का उपयोग करके", "database/sql का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of 'runtime' package in Go?",
        "question_hi": "Go में 'runtime' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For runtime operations", "For GC control", "For goroutine management", "All of the above"],
        "options_hi": ["रनटाइम ऑपरेशन्स के लिए", "GC कंट्रोल के लिए", "गोरूटीन मैनेजमेंट के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you implement content negotiation in Go?",
        "question_hi": "Go में कंटेंट नेगोशिएशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Accept headers", "Using custom middleware", "Using negotiation libraries", "All of the above"],
        "options_hi": ["Accept हेडर का उपयोग करके", "कस्टम मिडलवेयर का उपयोग करके", "नेगोशिएशन लाइब्रेरी का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of 'reflect' package in Go?",
        "question_hi": "Go में 'reflect' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For runtime reflection", "For type inspection", "For dynamic programming", "All of the above"],
        "options_hi": ["रनटाइम रिफ्लेक्शन के लिए", "टाइप इंस्पेक्शन के लिए", "डायनामिक प्रोग्रामिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you implement API versioning with headers in Go?",
        "question_hi": "Go में हेडर के साथ API वर्जनिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Accept header", "Using Custom headers", "Using middleware", "All of the above"],
        "options_hi": ["Accept हेडर का उपयोग करके", "कस्टम हेडर का उपयोग करके", "मिडलवेयर का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of 'sort' package in Go?",
        "question_hi": "Go में 'sort' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For sorting collections", "For custom sorting", "For slice sorting", "All of the above"],
        "options_hi": ["कलेक्शन सॉर्टिंग के लिए", "कस्टम सॉर्टिंग के लिए", "स्लाइस सॉर्टिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How do you implement request validation in Go?",
        "question_hi": "Go में रिक्वेस्ट वैलिडेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using struct tags", "Using validation libraries", "Using custom validation", "All of the above"],
        "options_hi": ["स्ट्रक्ट टैग का उपयोग करके", "वैलिडेशन लाइब्रेरी का उपयोग करके", "कस्टम वैलिडेशन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of 'strings' package in Go?",
        "question_hi": "Go में 'strings' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For string manipulation", "For string operations", "For text processing", "All of the above"],
        "options_hi": ["स्ट्रिंग मैनिपुलेशन के लिए", "स्ट्रिंग ऑपरेशन्स के लिए", "टेक्स्ट प्रोसेसिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you implement CORS in Go?",
        "question_hi": "Go में CORS कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using custom middleware", "Using rs/cors library", "Using handler wrappers", "All of the above"],
        "options_hi": ["कस्टम मिडलवेयर का उपयोग करके", "rs/cors लाइब्रेरी का उपयोग करके", "हैंडलर रैपर का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of 'bytes' package in Go?",
        "question_hi": "Go में 'bytes' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For byte manipulation", "For byte slice operations", "For buffer handling", "All of the above"],
        "options_hi": ["बाइट मैनिपुलेशन के लिए", "बाइट स्लाइस ऑपरेशन्स के लिए", "बफर हैंडलिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you implement rate limiting by IP in Go?",
        "question_hi": "Go में IP द्वारा रेट लिमिटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using token bucket per IP", "Using sliding window per IP", "Using middleware", "All of the above"],
        "options_hi": ["IP प्रति टोकन बकेट का उपयोग करके", "IP प्रति स्लाइडिंग विंडो का उपयोग करके", "मिडलवेयर का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of 'strconv' package in Go?",
        "question_hi": "Go में 'strconv' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For string conversions", "For number parsing", "For format conversions", "All of the above"],
        "options_hi": ["स्ट्रिंग कन्वर्जन के लिए", "नंबर पार्सिंग के लिए", "फॉर्मेट कन्वर्जन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How do you implement graceful database connection handling in Go?",
        "question_hi": "Go में ग्रेसफुल डेटाबेस कनेक्शन हैंडलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using connection pools", "Using health checks", "Using retry logic", "All of the above"],
        "options_hi": ["कनेक्शन पूल का उपयोग करके", "हेल्थ चेक का उपयोग करके", "रिट्राई लॉजिक का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of 'path/filepath' package in Go?",
        "question_hi": "Go में 'path/filepath' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For file path operations", "For cross-platform paths", "For path manipulation", "All of the above"],
        "options_hi": ["फाइल पाथ ऑपरेशन्स के लिए", "क्रॉस-प्लेटफॉर्म पाथ के लिए", "पाथ मैनिपुलेशन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you implement API key authentication in Go?",
        "question_hi": "Go में API की ऑथेंटिकेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using middleware", "Using header validation", "Using database lookup", "All of the above"],
        "options_hi": ["मिडलवेयर का उपयोग करके", "हेडर वैलिडेशन का उपयोग करके", "डेटाबेस लुकअप का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of 'crypto' package in Go?",
        "question_hi": "Go में 'crypto' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For cryptographic operations", "For hashing", "For encryption", "All of the above"],
        "options_hi": ["क्रिप्टोग्राफिक ऑपरेशन्स के लिए", "हैशिंग के लिए", "एन्क्रिप्शन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How do you implement JWT authentication in Go?",
        "question_hi": "Go में JWT ऑथेंटिकेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using golang-jwt/jwt", "Using custom implementation", "Using middleware", "All of the above"],
        "options_hi": ["golang-jwt/jwt का उपयोग करके", "कस्टम इम्प्लीमेंटेशन का उपयोग करके", "मिडलवेयर का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of 'compress' package in Go?",
        "question_hi": "Go में 'compress' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For compression algorithms", "For gzip, zip operations", "For data compression", "All of the above"],
        "options_hi": ["कम्प्रेशन अल्गोरिदम के लिए", "gzip, zip ऑपरेशन्स के लिए", "डेटा कम्प्रेशन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How do you implement request/response logging in Go?",
        "question_hi": "Go में रिक्वेस्ट/रिस्पॉन्स लॉगिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using middleware", "Using custom handlers", "Using structured logging", "All of the above"],
        "options_hi": ["मिडलवेयर का उपयोग करके", "कस्टम हैंडलर का उपयोग करके", "स्ट्रक्चर्ड लॉगिंग का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of 'archive' package in Go?",
        "question_hi": "Go में 'archive' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For archive file handling", "For tar, zip operations", "For file archiving", "All of the above"],
        "options_hi": ["आर्काइव फाइल हैंडलिंग के लिए", "tar, zip ऑपरेशन्स के लिए", "फाइल आर्काइविंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How do you implement structured logging in Go?",
        "question_hi": "Go में स्ट्रक्चर्ड लॉगिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using log/slog", "Using zerolog", "Using logrus", "All of the above"],
        "options_hi": ["log/slog का उपयोग करके", "zerolog का उपयोग करके", "logrus का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of 'mime' package in Go?",
        "question_hi": "Go में 'mime' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For MIME type handling", "For content type detection", "For media type operations", "All of the above"],
        "options_hi": ["MIME टाइप हैंडलिंग के लिए", "कंटेंट टाइप डिटेक्शन के लिए", "मीडिया टाइप ऑपरेशन्स के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you implement file upload handling in Go?",
        "question_hi": "Go में फाइल अपलोड हैंडलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using multipart forms", "Using io.Copy", "Using custom handlers", "All of the above"],
        "options_hi": ["मल्टीपार्ट फॉर्म का उपयोग करके", "io.Copy का उपयोग करके", "कस्टम हैंडलर का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of 'net/mail' package in Go?",
        "question_hi": "Go में 'net/mail' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For email message parsing", "For email handling", "For RFC 5322 compliance", "All of the above"],
        "options_hi": ["ईमेल मैसेज पार्सिंग के लिए", "ईमेल हैंडलिंग के लिए", "RFC 5322 कंप्लायंस के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How do you implement email sending in Go?",
        "question_hi": "Go में ईमेल सेंडिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using net/smtp", "Using third-party libraries", "Using SMTP servers", "All of the above"],
        "options_hi": ["net/smtp का उपयोग करके", "थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "SMTP सर्वर का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of 'flag' package in Go?",
        "question_hi": "Go में 'flag' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For command-line flag parsing", "For argument handling", "For CLI applications", "All of the above"],
        "options_hi": ["कमांड-लाइन फ्लैग पार्सिंग के लिए", "आर्गुमेंट हैंडलिंग के लिए", "CLI एप्लीकेशन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How do you implement configuration reloading in Go?",
        "question_hi": "Go में कॉन्फिगरेशन रीलोडिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using file watching", "Using SIGHUP signals", "Using periodic checks", "All of the above"],
        "options_hi": ["फाइल वॉचिंग का उपयोग करके", "SIGHUP सिग्नल का उपयोग करके", "पीरियोडिक चेक का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of 'expvar' package in Go?",
        "question_hi": "Go में 'expvar' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For exposing variables via HTTP", "For metrics exposure", "For debugging variables", "All of the above"],
        "options_hi": ["HTTP के माध्यम से वेरिएबल्स एक्सपोज करने के लिए", "मेट्रिक्स एक्सपोजर के लिए", "डीबगिंग वेरिएबल्स के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How do you implement panic recovery in HTTP handlers?",
        "question_hi": "Go में HTTP हैंडलर्स में पैनिक रिकवरी कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using defer and recover", "Using middleware", "Using handler wrappers", "All of the above"],
        "options_hi": ["defer और recover का उपयोग करके", "मिडलवेयर का उपयोग करके", "हैंडलर रैपर का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of 'hash' package in Go?",
        "question_hi": "Go में 'hash' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For hash functions", "For checksum operations", "For data integrity", "All of the above"],
        "options_hi": ["हैश फंक्शन के लिए", "चेकसम ऑपरेशन्स के लिए", "डेटा इंटिग्रिटी के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How do you implement request deduplication in Go?",
        "question_hi": "Go में रिक्वेस्ट डीडुप्लिकेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using request ID caching", "Using mutex and map", "Using distributed cache", "All of the above"],
        "options_hi": ["रिक्वेस्ट ID कैशिंग का उपयोग करके", "म्यूटेक्स और मैप का उपयोग करके", "डिस्ट्रीब्यूटेड कैश का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of 'image' package in Go?",
        "question_hi": "Go में 'image' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For image processing", "For image manipulation", "For image format handling", "All of the above"],
        "options_hi": ["इमेज प्रोसेसिंग के लिए", "इमेज मैनिपुलेशन के लिए", "इमेज फॉर्मेट हैंडलिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How do you implement request tracing in Go?",
        "question_hi": "Go में रिक्वेस्ट ट्रेसिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using context propagation", "Using tracing libraries", "Using OpenTelemetry", "All of the above"],
        "options_hi": ["कॉन्टेक्स्ट प्रोपेगेशन का उपयोग करके", "ट्रेसिंग लाइब्रेरी का उपयोग करके", "OpenTelemetry का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of 'testing' package in Go?",
        "question_hi": "Go में 'testing' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For writing tests", "For test utilities", "For benchmarking", "All of the above"],
        "options_hi": ["टेस्ट लिखने के लिए", "टेस्ट यूटिलिटी के लिए", "बेंचमार्किंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How do you implement database connection retry logic in Go?",
        "question_hi": "Go में डेटाबेस कनेक्शन रिट्राई लॉजिक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using exponential backoff", "Using retry with jitter", "Using health checks", "All of the above"],
        "options_hi": ["एक्सपोनेंशियल बैकऑफ का उपयोग करके", "जिटर के साथ रिट्राई का उपयोग करके", "हेल्थ चेक का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of 'unicode' package in Go?",
        "question_hi": "Go में 'unicode' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For Unicode character functions", "For character classification", "For Unicode operations", "All of the above"],
        "options_hi": ["यूनिकोड करैक्टर फंक्शन के लिए", "करैक्टर क्लासिफिकेशन के लिए", "यूनिकोड ऑपरेशन्स के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How do you implement API response caching in Go?",
        "question_hi": "Go में API रिस्पॉन्स कैशिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using in-memory cache", "Using Redis", "Using ETag headers", "All of the above"],
        "options_hi": ["इन-मेमोरी कैश का उपयोग करके", "Redis का उपयोग करके", "ETag हेडर का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of 'regexp' package in Go?",
        "question_hi": "Go में 'regexp' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For regular expressions", "For pattern matching", "For text searching", "All of the above"],
        "options_hi": ["रेगुलर एक्सप्रेशन के लिए", "पैटर्न मैचिंग के लिए", "टेक्स्ट सर्चिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How do you implement background task scheduling in Go?",
        "question_hi": "Go में बैकग्राउंड टास्क शेड्यूलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using time.Ticker", "Using cron libraries", "Using goroutine pools", "All of the above"],
        "options_hi": ["time.Ticker का उपयोग करके", "क्रॉन लाइब्रेरी का उपयोग करके", "गोरूटीन पूल का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of 'container' package in Go?",
        "question_hi": "Go में 'container' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For container data structures", "For lists, heaps, rings", "For data containers", "All of the above"],
        "options_hi": ["कंटेनर डेटा स्ट्रक्चर के लिए", "लिस्ट, हीप, रिंग के लिए", "डेटा कंटेनर के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you implement request timeouts in Go HTTP clients?",
        "question_hi": "Go HTTP क्लाइंट में रिक्वेस्ट टाइमआउट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using context.WithTimeout", "Using http.Client Timeout", "Using custom timeouts", "All of the above"],
        "options_hi": ["context.WithTimeout का उपयोग करके", "http.Client Timeout का उपयोग करके", "कस्टम टाइमआउट का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of 'go/build' package in Go?",
        "question_hi": "Go में 'go/build' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For build information", "For package context", "For build constraints", "All of the above"],
        "options_hi": ["बिल्ड इनफॉर्मेशन के लिए", "पैकेज कॉन्टेक्स्ट के लिए", "बिल्ड कंस्ट्रेंट्स के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you implement circuit breaker with state management in Go?",
        "question_hi": "Go में स्टेट मैनेजमेंट के साथ सर्किट ब्रेकर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using state machine", "Using counters and timers", "Using third-party libraries", "All of the above"],
        "options_hi": ["स्टेट मशीन का उपयोग करके", "काउंटर और टाइमर का उपयोग करके", "थर्ड-पार्टी लाइब्रेरी का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of 'io/ioutil' package in Go?",
        "question_hi": "Go में 'io/ioutil' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For I/O utility functions", "For file operations", "For temporary files", "All of the above"],
        "options_hi": ["I/O यूटिलिटी फंक्शन के लिए", "फाइल ऑपरेशन्स के लिए", "टेम्पररी फाइल्स के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How do you implement graceful job termination in Go?",
        "question_hi": "Go में ग्रेसफुल जॉब टर्मिनेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using context cancellation", "Using signal handling", "Using done channels", "All of the above"],
        "options_hi": ["कॉन्टेक्स्ट कैंसलेशन का उपयोग करके", "सिग्नल हैंडलिंग का उपयोग करके", "डन चैनल का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of 'net/http/httputil' package in Go?",
        "question_hi": "Go में 'net/http/httputil' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For HTTP utility functions", "For reverse proxy", "For request dumping", "All of the above"],
        "options_hi": ["HTTP यूटिलिटी फंक्शन के लिए", "रिवर्स प्रॉक्सी के लिए", "रिक्वेस्ट डंपिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you implement API pagination in Go?",
        "question_hi": "Go में API पेजिनेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using limit and offset", "Using cursor-based pagination", "Using page tokens", "All of the above"],
        "options_hi": ["limit और offset का उपयोग करके", "कर्सर-बेस्ड पेजिनेशन का उपयोग करके", "पेज टोकन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of 'os/exec' package in Go?",
        "question_hi": "Go में 'os/exec' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For executing external commands", "For process management", "For command execution", "All of the above"],
        "options_hi": ["एक्सटर्नल कमांड एक्जीक्यूट करने के लिए", "प्रोसेस मैनेजमेंट के लिए", "कमांड एक्जीक्यूशन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you implement distributed caching in Go?",
        "question_hi": "Go में डिस्ट्रीब्यूटेड कैशिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Redis cluster", "Using Memcached", "Using consistent hashing", "All of the above"],
        "options_hi": ["Redis क्लस्टर का उपयोग करके", "Memcached का उपयोग करके", "कंसिस्टेंट हैशिंग का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of 'path' package in Go?",
        "question_hi": "Go में 'path' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For path manipulation", "For URL path handling", "For path operations", "All of the above"],
        "options_hi": ["पाथ मैनिपुलेशन के लिए", "URL पाथ हैंडलिंग के लिए", "पाथ ऑपरेशन्स के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How do you implement API bulk operations in Go?",
        "question_hi": "Go में API बल्क ऑपरेशन्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using batch processing", "Using worker pools", "Using chunking", "All of the above"],
        "options_hi": ["बैच प्रोसेसिंग का उपयोग करके", "वर्कर पूल का उपयोग करके", "चंकिंग का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of 'runtime/debug' package in Go?",
        "question_hi": "Go में 'runtime/debug' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For debugging utilities", "For stack traces", "For GC statistics", "All of the above"],
        "options_hi": ["डीबगिंग यूटिलिटी के लिए", "स्टैक ट्रेस के लिए", "GC स्टैटिस्टिक्स के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do you implement API filtering and sorting in Go?",
        "question_hi": "Go में API फिल्टरिंग और सॉर्टिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using query parameters", "Using database queries", "Using struct tags", "All of the above"],
        "options_hi": ["क्वेरी पैरामीटर का उपयोग करके", "डेटाबेस क्वेरी का उपयोग करके", "स्ट्रक्ट टैग का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of 'syscall' package in Go?",
        "question_hi": "Go में 'syscall' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For system calls", "For low-level OS operations", "For platform-specific code", "All of the above"],
        "options_hi": ["सिस्टम कॉल के लिए", "लो-लेवल OS ऑपरेशन्स के लिए", "प्लेटफॉर्म-स्पेसिफिक कोड के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How do you implement API documentation generation in Go?",
        "question_hi": "Go में API डॉक्युमेंटेशन जेनरेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using swagger annotations", "Using go doc comments", "Using third-party tools", "All of the above"],
        "options_hi": ["swagger एनोटेशन का उपयोग करके", "go doc कमेंट्स का उपयोग करके", "थर्ड-पार्टी टूल्स का उपयोग करके", "उपरोक्त सभी"],
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