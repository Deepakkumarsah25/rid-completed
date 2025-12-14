const questions=[
    {
        "num": 1,
        "question_en": "What is the difference between sync.Mutex and sync.RWMutex?",
        "question_hi": "sync.Mutex और sync.RWMutex में क्या अंतर है?",
        "options_en": ["RWMutex allows multiple readers or single writer", "Mutex is faster", "RWMutex is for read-only", "No difference"],
        "options_hi": ["RWMutex मल्टीपल रीडर्स या सिंगल राइटर की अनुमति देता है", "Mutex तेज है", "RWMutex रीड-ओनली के लिए है", "कोई अंतर नहीं"],
        "answer_en": "RWMutex allows multiple readers or single writer",
        "answer_hi": "RWMutex मल्टीपल रीडर्स या सिंगल राइटर की अनुमति देता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How does Go's garbage collector work?",
        "question_hi": "Go का गार्बेज कलेक्टर कैसे काम करता है?",
        "options_en": ["Concurrent mark-and-sweep", "Reference counting", "Stop-the-world", "Generational collection"],
        "options_hi": ["कंकरंट मार्क-एंड-स्वीप", "रिफरेन्स काउंटिंग", "स्टॉप-द-वर्ल्ड", "जेनरेशनल कलेक्शन"],
        "answer_en": "Concurrent mark-and-sweep",
        "answer_hi": "कंकरंट मार्क-एंड-स्वीप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is escape analysis in Go?",
        "question_hi": "Go में एस्केप एनालिसिस क्या है?",
        "options_en": ["Determines if variables escape to heap", "Analyzes code escapes", "Checks memory leaks", "Optimizes loops"],
        "options_hi": ["निर्धारित करता है कि वेरिएबल हीप पर एस्केप होते हैं या नहीं", "कोड एस्केप का विश्लेषण करता है", "मेमोरी लीक की जांच करता है", "लूप ऑप्टिमाइज़ करता है"],
        "answer_en": "Determines if variables escape to heap",
        "answer_hi": "निर्धारित करता है कि वेरिएबल हीप पर एस्केप होते हैं या नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the purpose of sync.Pool?",
        "question_hi": "sync.Pool का उद्देश्य क्या है?",
        "options_en": ["Reuse allocated objects to reduce GC pressure", "Pool database connections", "Manage goroutine pools", "Cache computation results"],
        "options_hi": ["GC प्रेशर कम करने के लिए अलोकेटेड ऑब्जेक्ट्स का पुन: उपयोग", "डेटाबेस कनेक्शन पूल करना", "गोरूटीन पूल प्रबंधित करना", "कम्प्यूटेशन रिजल्ट कैश करना"],
        "answer_en": "Reuse allocated objects to reduce GC pressure",
        "answer_hi": "GC प्रेशर कम करने के लिए अलोकेटेड ऑब्जेक्ट्स का पुन: उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "How to prevent goroutine leaks?",
        "question_hi": "गोरूटीन लीक्स को कैसे रोकते हैं?",
        "options_en": ["Use context.WithCancel and select", "Always use defer", "Use global variables", "Ignore them"],
        "options_hi": ["context.WithCancel और select का उपयोग करें", "हमेशा defer का उपयोग करें", "ग्लोबल वेरिएबल का उपयोग करें", "उन्हें नजरअंदाज करें"],
        "answer_en": "Use context.WithCancel and select",
        "answer_hi": "context.WithCancel और select का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the difference between buffered and unbuffered channels?",
        "question_hi": "बफर्ड और अनबफर्ड चैनल में क्या अंतर है?",
        "options_en": ["Buffered channels have capacity, unbuffered block immediately", "No difference", "Unbuffered are faster", "Buffered are always better"],
        "options_hi": ["बफर्ड चैनल में क्षमता होती है, अनबफर्ड तुरंत ब्लॉक होते हैं", "कोई अंतर नहीं", "अनबफर्ड तेज हैं", "बफर्ड हमेशा बेहतर हैं"],
        "answer_en": "Buffered channels have capacity, unbuffered block immediately",
        "answer_hi": "बफर्ड चैनल में क्षमता होती है, अनबफर्ड तुरंत ब्लॉक होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of the 'volatile' keyword in Go?",
        "question_hi": "Go में 'volatile' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Go doesn't have volatile keyword", "For atomic operations", "For memory consistency", "For variable declaration"],
        "options_hi": ["Go में volatile कीवर्ड नहीं है", "एटॉमिक ऑपरेशन के लिए", "मेमोरी कंसिस्टेंसी के लिए", "वेरिएबल डिक्लेरेशन के लिए"],
        "answer_en": "Go doesn't have volatile keyword",
        "answer_hi": "Go में volatile कीवर्ड नहीं है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How to implement graceful shutdown in Go?",
        "question_hi": "Go में ग्रेसफुल शटडाउन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use signal.Notify with context cancellation", "Call os.Exit directly", "Use panic/recover", "Ignore signals"],
        "options_hi": ["कॉन्टेक्स्ट कैंसलेशन के साथ signal.Notify का उपयोग करें", "सीधे os.Exit कॉल करें", "panic/recover का उपयोग करें", "सिग्नल्स को नजरअंदाज करें"],
        "answer_en": "Use signal.Notify with context cancellation",
        "answer_hi": "कॉन्टेक्स्ट कैंसलेशन के साथ signal.Notify का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the difference between interface{} and any?",
        "question_hi": "interface{} और any में क्या अंतर है?",
        "options_en": ["any is alias for interface{} in Go 1.18+", "any is faster", "interface{} is deprecated", "No difference"],
        "options_hi": ["any, Go 1.18+ में interface{} का alias है", "any तेज है", "interface{} डिप्रिकेटेड है", "कोई अंतर नहीं"],
        "answer_en": "any is alias for interface{} in Go 1.18+",
        "answer_hi": "any, Go 1.18+ में interface{} का alias है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How to implement generic functions in Go?",
        "question_hi": "Go में जेनरिक फंक्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use type parameters with [T any] syntax", "Use interface{}", "Use reflection", "Use code generation"],
        "options_hi": ["[T any] सिंटैक्स के साथ टाइप पैरामीटर का उपयोग करें", "interface{} का उपयोग करें", "रिफ्लेक्शन का उपयोग करें", "कोड जनरेशन का उपयोग करें"],
        "answer_en": "Use type parameters with [T any] syntax",
        "answer_hi": "[T any] सिंटैक्स के साथ टाइप पैरामीटर का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of go:generate directive?",
        "question_hi": "go:generate डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To run code generation tools", "To generate tests", "To compile code", "To format code"],
        "options_hi": ["कोड जनरेशन टूल चलाने के लिए", "टेस्ट जनरेट करने के लिए", "कोड कम्पाइल करने के लिए", "कोड फॉर्मेट करने के लिए"],
        "answer_en": "To run code generation tools",
        "answer_hi": "कोड जनरेशन टूल चलाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How to implement type constraints in generics?",
        "question_hi": "जेनरिक्स में टाइप कंस्ट्रेंट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use interface with type set", "Use struct constraints", "Use function constraints", "Use method constraints"],
        "options_hi": ["टाइप सेट के साथ इंटरफेस का उपयोग करें", "स्ट्रक्चर कंस्ट्रेंट का उपयोग करें", "फंक्शन कंस्ट्रेंट का उपयोग करें", "मेथड कंस्ट्रेंट का उपयोग करें"],
        "answer_en": "Use interface with type set",
        "answer_hi": "टाइप सेट के साथ इंटरफेस का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the difference between ~int and int in constraints?",
        "question_hi": "कंस्ट्रेंट में ~int और int में क्या अंतर है?",
        "options_en": ["~int includes underlying type int", "int is faster", "~int is deprecated", "No difference"],
        "options_hi": ["~int अंडरलाइंग टाइप int को शामिल करता है", "int तेज है", "~int डिप्रिकेटेड है", "कोई अंतर नहीं"],
        "answer_en": "~int includes underlying type int",
        "answer_hi": "~int अंडरलाइंग टाइप int को शामिल करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How to implement worker pool pattern?",
        "question_hi": "वर्कर पूल पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use channel for job queue and goroutines as workers", "Use sync.Pool", "Use context with cancel", "Use mutex only"],
        "options_hi": ["जॉब क्यू के लिए चैनल और वर्कर के रूप में गोरूटीन का उपयोग करें", "sync.Pool का उपयोग करें", "कैंसल के साथ कॉन्टेक्स्ट का उपयोग करें", "केवल म्यूटेक्स का उपयोग करें"],
        "answer_en": "Use channel for job queue and goroutines as workers",
        "answer_hi": "जॉब क्यू के लिए चैनल और वर्कर के रूप में गोरूटीन का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of runtime.Gosched()?",
        "question_hi": "runtime.Gosched() का उद्देश्य क्या है?",
        "options_en": ["Yield processor to other goroutines", "Force garbage collection", "Stop current goroutine", "Schedule new goroutine"],
        "options_hi": ["प्रोसेसर को अन्य गोरूटीन के लिए यील्ड करना", "गार्बेज कलेक्शन फोर्स करना", "करंट गोरूटीन को रोकना", "नई गोरूटीन शेड्यूल करना"],
        "answer_en": "Yield processor to other goroutines",
        "answer_hi": "प्रोसेसर को अन्य गोरूटीन के लिए यील्ड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How to detect race conditions in Go?",
        "question_hi": "Go में रेस कंडीशन कैसे डिटेक्ट करते हैं?",
        "options_en": ["Use -race flag with go run/test/build", "Use debug mode", "Use profiling", "Use logging"],
        "options_hi": ["go run/test/build के साथ -race फ्लैग का उपयोग करें", "डिबग मोड का उपयोग करें", "प्रोफाइलिंग का उपयोग करें", "लॉगिंग का उपयोग करें"],
        "answer_en": "Use -race flag with go run/test/build",
        "answer_hi": "go run/test/build के साथ -race फ्लैग का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of sync.Once?",
        "question_hi": "sync.Once का उद्देश्य क्या है?",
        "options_en": ["Execute function exactly once", "Execute once per goroutine", "Execute periodically", "Execute on demand"],
        "options_hi": ["फंक्शन को ठीक एक बार एक्सेक्यूट करना", "प्रति गोरूटीन एक बार एक्सेक्यूट करना", "आवधिक रूप से एक्सेक्यूट करना", "डिमांड पर एक्सेक्यूट करना"],
        "answer_en": "Execute function exactly once",
        "answer_hi": "फंक्शन को ठीक एक बार एक्सेक्यूट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How to implement circuit breaker pattern?",
        "question_hi": "सर्किट ब्रेकर पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use state machine with counters and timeouts", "Use context cancellation", "Use mutex locks", "Use channels only"],
        "options_hi": ["काउंटर और टाइमआउट के साथ स्टेट मशीन का उपयोग करें", "कॉन्टेक्स्ट कैंसलेशन का उपयोग करें", "म्यूटेक्स लॉक का उपयोग करें", "केवल चैनल का उपयोग करें"],
        "answer_en": "Use state machine with counters and timeouts",
        "answer_hi": "काउंटर और टाइमआउट के साथ स्टेट मशीन का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the difference between value and pointer receivers?",
        "question_hi": "वैल्यू और पॉइंटर रिसीवर में क्या अंतर है?",
        "options_en": ["Pointer receivers can modify struct, value receivers work on copy", "No difference", "Value receivers are faster", "Pointer receivers are deprecated"],
        "options_hi": ["पॉइंटर रिसीवर स्ट्रक्चर को संशोधित कर सकते हैं, वैल्यू रिसीवर कॉपी पर काम करते हैं", "कोई अंतर नहीं", "वैल्यू रिसीवर तेज हैं", "पॉइंटर रिसीवर डिप्रिकेटेड हैं"],
        "answer_en": "Pointer receivers can modify struct, value receivers work on copy",
        "answer_hi": "पॉइंटर रिसीवर स्ट्रक्चर को संशोधित कर सकते हैं, वैल्यू रिसीवर कॉपी पर काम करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How to implement middleware chain in HTTP?",
        "question_hi": "HTTP में मिडलवेयर चेन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use function composition with next.ServeHTTP", "Use struct embedding", "Use interface composition", "Use goroutines"],
        "options_hi": ["next.ServeHTTP के साथ फंक्शन कम्पोज़िशन का उपयोग करें", "स्ट्रक्चर एम्बेडिंग का उपयोग करें", "इंटरफेस कम्पोज़िशन का उपयोग करें", "गोरूटीन का उपयोग करें"],
        "answer_en": "Use function composition with next.ServeHTTP",
        "answer_hi": "next.ServeHTTP के साथ फंक्शन कम्पोज़िशन का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of context.WithValue?",
        "question_hi": "context.WithValue का उद्देश्य क्या है?",
        "options_en": ["To carry request-scoped values", "To store global variables", "To cache data", "To share database connections"],
        "options_hi": ["रिक्वेस्ट-स्कोप्ड वैल्यू ले जाने के लिए", "ग्लोबल वेरिएबल स्टोर करने के लिए", "डेटा कैश करने के लिए", "डेटाबेस कनेक्शन शेयर करने के लिए"],
        "answer_en": "To carry request-scoped values",
        "answer_hi": "रिक्वेस्ट-स्कोप्ड वैल्यू ले जाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How to implement connection pooling?",
        "question_hi": "कनेक्शन पूलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use sync.Pool or database/sql built-in pooling", "Use global variables", "Use channels only", "Use mutex locks"],
        "options_hi": ["sync.Pool या database/sql बिल्ट-इन पूलिंग का उपयोग करें", "ग्लोबल वेरिएबल का उपयोग करें", "केवल चैनल का उपयोग करें", "म्यूटेक्स लॉक का उपयोग करें"],
        "answer_en": "Use sync.Pool or database/sql built-in pooling",
        "answer_hi": "sync.Pool या database/sql बिल्ट-इन पूलिंग का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the difference between T and *T in generics?",
        "question_hi": "जेनरिक्स में T और *T में क्या अंतर है?",
        "options_en": ["T is value type, *T is pointer type", "No difference", "T is faster", "*T is deprecated"],
        "options_hi": ["T वैल्यू टाइप है, *T पॉइंटर टाइप है", "कोई अंतर नहीं", "T तेज है", "*T डिप्रिकेटेड है"],
        "answer_en": "T is value type, *T is pointer type",
        "answer_hi": "T वैल्यू टाइप है, *T पॉइंटर टाइप है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How to implement rate limiting?",
        "question_hi": "रेट लिमिटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use time.Ticker or token bucket algorithm", "Use sleep only", "Use mutex locks", "Use context timeout"],
        "options_hi": ["time.Ticker या टोकन बकेट एल्गोरिदम का उपयोग करें", "केवल sleep का उपयोग करें", "म्यूटेक्स लॉक का उपयोग करें", "कॉन्टेक्स्ट टाइमआउट का उपयोग करें"],
        "answer_en": "Use time.Ticker or token bucket algorithm",
        "answer_hi": "time.Ticker या टोकन बकेट एल्गोरिदम का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of runtime.SetFinalizer?",
        "question_hi": "runtime.SetFinalizer का उद्देश्य क्या है?",
        "options_en": ["To run function when object is garbage collected", "To finalize program", "To clean up resources", "To stop goroutines"],
        "options_hi": ["ऑब्जेक्ट के गार्बेज कलेक्ट होने पर फंक्शन चलाने के लिए", "प्रोग्राम फाइनलाइज़ करने के लिए", "रिसोर्सेज क्लीन अप करने के लिए", "गोरूटीन रोकने के लिए"],
        "answer_en": "To run function when object is garbage collected",
        "answer_hi": "ऑब्जेक्ट के गार्बेज कलेक्ट होने पर फंक्शन चलाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How to implement distributed tracing?",
        "question_hi": "डिस्ट्रीब्यूटेड ट्रेसिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use context propagation with trace IDs", "Use logging only", "Use database transactions", "Use message queues"],
        "options_hi": ["ट्रेस ID के साथ कॉन्टेक्स्ट प्रोपगेशन का उपयोग करें", "केवल लॉगिंग का उपयोग करें", "डेटाबेस ट्रांजैक्शन का उपयोग करें", "मैसेज क्यू का उपयोग करें"],
        "answer_en": "Use context propagation with trace IDs",
        "answer_hi": "ट्रेस ID के साथ कॉन्टेक्स्ट प्रोपगेशन का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the difference between make and new?",
        "question_hi": "make और new में क्या अंतर है?",
        "options_en": ["make initializes slices/maps/channels, new only allocates memory", "No difference", "make is faster", "new is deprecated"],
        "options_hi": ["make स्लाइस/मैप/चैनल इनिशियलाइज़ करता है, new केवल मेमोरी अलोकेट करता है", "कोई अंतर नहीं", "make तेज है", "new डिप्रिकेटेड है"],
        "answer_en": "make initializes slices/maps/channels, new only allocates memory",
        "answer_hi": "make स्लाइस/मैप/चैनल इनिशियलाइज़ करता है, new केवल मेमोरी अलोकेट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How to implement custom JSON marshaling?",
        "question_hi": "कस्टम JSON मार्शलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement json.Marshaler and json.Unmarshaler interfaces", "Use struct tags only", "Use reflection", "Use code generation"],
        "options_hi": ["json.Marshaler और json.Unmarshaler इंटरफेस इम्प्लीमेंट करें", "केवल स्ट्रक्चर टैग का उपयोग करें", "रिफ्लेक्शन का उपयोग करें", "कोड जनरेशन का उपयोग करें"],
        "answer_en": "Implement json.Marshaler and json.Unmarshaler interfaces",
        "answer_hi": "json.Marshaler और json.Unmarshaler इंटरफेस इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of sync.Cond?",
        "question_hi": "sync.Cond का उद्देश्य क्या है?",
        "options_en": ["For goroutine synchronization using condition variables", "For conditional compilation", "For error conditions", "For flow control"],
        "options_hi": ["कंडीशन वेरिएबल का उपयोग करके गोरूटीन सिंक्रोनाइज़ेशन के लिए", "कंडीशनल कम्पाइलेशन के लिए", "एरर कंडीशन के लिए", "फ्लो कंट्रोल के लिए"],
        "answer_en": "For goroutine synchronization using condition variables",
        "answer_hi": "कंडीशन वेरिएबल का उपयोग करके गोरूटीन सिंक्रोनाइज़ेशन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How to implement service discovery pattern?",
        "question_hi": "सर्विस डिस्कवरी पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use registry pattern with health checks", "Use DNS only", "Use load balancer", "Use database"],
        "options_hi": ["हेल्थ चेक के साथ रजिस्ट्री पैटर्न का उपयोग करें", "केवल DNS का उपयोग करें", "लोड बैलेंसर का उपयोग करें", "डेटाबेस का उपयोग करें"],
        "answer_en": "Use registry pattern with health checks",
        "answer_hi": "हेल्थ चेक के साथ रजिस्ट्री पैटर्न का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the difference between == and .Equal() for interfaces?",
        "question_hi": "इंटरफेस के लिए == और .Equal() में क्या अंतर है?",
        "options_en": ["== compares references, .Equal() compares values if implemented", "No difference", "== is faster", ".Equal() is deprecated"],
        "options_hi": ["== रिफरेन्स की तुलना करता है, .Equal() वैल्यू की तुलना करता है यदि इम्प्लीमेंटेड है", "कोई अंतर नहीं", "== तेज है", ".Equal() डिप्रिकेटेड है"],
        "answer_en": "== compares references, .Equal() compares values if implemented",
        "answer_hi": "== रिफरेन्स की तुलना करता है, .Equal() वैल्यू की तुलना करता है यदि इम्प्लीमेंटेड है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How to implement backpressure in Go?",
        "question_hi": "Go में बैकप्रेशर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use buffered channels with size limits", "Use unbuffered channels", "Use mutex locks", "Use context cancellation"],
        "options_hi": ["साइज लिमिट के साथ बफर्ड चैनल का उपयोग करें", "अनबफर्ड चैनल का उपयोग करें", "म्यूटेक्स लॉक का उपयोग करें", "कॉन्टेक्स्ट कैंसलेशन का उपयोग करें"],
        "answer_en": "Use buffered channels with size limits",
        "answer_hi": "साइज लिमिट के साथ बफर्ड चैनल का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of runtime.ReadMemStats?",
        "question_hi": "runtime.ReadMemStats का उद्देश्य क्या है?",
        "options_en": ["To read memory allocation statistics", "To read CPU stats", "To read goroutine count", "To read GC stats"],
        "options_hi": ["मेमोरी अलोकेशन स्टैटिस्टिक्स पढ़ने के लिए", "CPU स्टैट्स पढ़ने के लिए", "गोरूटीन काउंट पढ़ने के लिए", "GC स्टैट्स पढ़ने के लिए"],
        "answer_en": "To read memory allocation statistics",
        "answer_hi": "मेमोरी अलोकेशन स्टैटिस्टिक्स पढ़ने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How to implement retry mechanism with exponential backoff?",
        "question_hi": "एक्सपोनेंशियल बैकऑफ के साथ रिट्री मैकेनिज्म कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use for loop with time.Sleep and increasing duration", "Use context timeout", "Use channels only", "Use mutex locks"],
        "options_hi": ["time.Sleep और बढ़ती अवधि के साथ for लूप का उपयोग करें", "कॉन्टेक्स्ट टाइमआउट का उपयोग करें", "केवल चैनल का उपयोग करें", "म्यूटेक्स लॉक का उपयोग करें"],
        "answer_en": "Use for loop with time.Sleep and increasing duration",
        "answer_hi": "time.Sleep और बढ़ती अवधि के साथ for लूप का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the difference between defer and finally?",
        "question_hi": "defer और finally में क्या अंतर है?",
        "options_en": ["Go has defer but no finally, defer runs when function exits", "No difference", "finally is faster", "defer is deprecated"],
        "options_hi": ["Go में defer है लेकिन finally नहीं, defer फंक्शन के एक्जिट होने पर चलता है", "कोई अंतर नहीं", "finally तेज है", "defer डिप्रिकेटेड है"],
        "answer_en": "Go has defer but no finally, defer runs when function exits",
        "answer_hi": "Go में defer है लेकिन finally नहीं, defer फंक्शन के एक्जिट होने पर चलता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How to implement plugin architecture?",
        "question_hi": "प्लगइन आर्किटेक्चर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use plugin package or interface-based design", "Use dynamic linking", "Use code generation", "Use reflection only"],
        "options_hi": ["प्लगइन पैकेज या इंटरफेस-बेस्ड डिजाइन का उपयोग करें", "डायनामिक लिंकिंग का उपयोग करें", "कोड जनरेशन का उपयोग करें", "केवल रिफ्लेक्शन का उपयोग करें"],
        "answer_en": "Use plugin package or interface-based design",
        "answer_hi": "प्लगइन पैकेज या इंटरफेस-बेस्ड डिजाइन का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of unsafe.Pointer?",
        "question_hi": "unsafe.Pointer का उद्देश्य क्या है?",
        "options_en": ["To convert between pointer types bypassing type system", "For safe pointer operations", "For memory allocation", "For garbage collection"],
        "options_hi": ["टाइप सिस्टम को बायपास करके पॉइंटर टाइप के बीच कन्वर्ट करने के लिए", "सेफ पॉइंटर ऑपरेशन के लिए", "मेमोरी अलोकेशन के लिए", "गार्बेज कलेक्शन के लिए"],
        "answer_en": "To convert between pointer types bypassing type system",
        "answer_hi": "टाइप सिस्टम को बायपास करके पॉइंटर टाइप के बीच कन्वर्ट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How to implement CQRS pattern?",
        "question_hi": "CQRS पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Separate command and query models with different data stores", "Use single database", "Use caching only", "Use message queues"],
        "options_hi": ["अलग-अलग डेटा स्टोर के साथ कमांड और क्वेरी मॉडल अलग करें", "सिंगल डेटाबेस का उपयोग करें", "केवल कैशिंग का उपयोग करें", "मैसेज क्यू का उपयोग करें"],
        "answer_en": "Separate command and query models with different data stores",
        "answer_hi": "अलग-अलग डेटा स्टोर के साथ कमांड और क्वेरी मॉडल अलग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the difference between slice and array?",
        "question_hi": "स्लाइस और ऐरे में क्या अंतर है?",
        "options_en": ["Array has fixed size, slice is dynamic view of array", "No difference", "Slice is faster", "Array is deprecated"],
        "options_hi": ["ऐरे का फिक्स्ड साइज होता है, स्लाइस ऐरे का डायनामिक व्यू होता है", "कोई अंतर नहीं", "स्लाइस तेज है", "ऐरे डिप्रिकेटेड है"],
        "answer_en": "Array has fixed size, slice is dynamic view of array",
        "answer_hi": "ऐरे का फिक्स्ड साइज होता है, स्लाइस ऐरे का डायनामिक व्यू होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How to implement health checks?",
        "question_hi": "हेल्थ चेक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use HTTP endpoints with readiness and liveness probes", "Use logging", "Use monitoring only", "Use database queries"],
        "options_hi": ["रीडीनेस और लिवनेस प्रोब के साथ HTTP एंडपॉइंट का उपयोग करें", "लॉगिंग का उपयोग करें", "केवल मॉनिटरिंग का उपयोग करें", "डेटाबेस क्वेरी का उपयोग करें"],
        "answer_en": "Use HTTP endpoints with readiness and liveness probes",
        "answer_hi": "रीडीनेस और लिवनेस प्रोब के साथ HTTP एंडपॉइंट का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of runtime.LockOSThread?",
        "question_hi": "runtime.LockOSThread का उद्देश्य क्या है?",
        "options_en": ["To bind goroutine to OS thread", "To lock memory", "To stop thread", "To schedule thread"],
        "options_hi": ["गोरूटीन को OS थ्रेड से बाइंड करने के लिए", "मेमोरी लॉक करने के लिए", "थ्रेड रोकने के लिए", "थ्रेड शेड्यूल करने के लिए"],
        "answer_en": "To bind goroutine to OS thread",
        "answer_hi": "गोरूटीन को OS थ्रेड से बाइंड करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How to implement feature flags?",
        "question_hi": "फीचर फ्लैग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use configuration with conditional logic", "Use environment variables only", "Use database flags", "Use compile-time flags"],
        "options_hi": ["कंडीशनल लॉजिक के साथ कॉन्फिगरेशन का उपयोग करें", "केवल एनवायरनमेंट वेरिएबल का उपयोग करें", "डेटाबेस फ्लैग का उपयोग करें", "कम्पाइल-टाइम फ्लैग का उपयोग करें"],
        "answer_en": "Use configuration with conditional logic",
        "answer_hi": "कंडीशनल लॉजिक के साथ कॉन्फिगरेशन का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the difference between cap and len for slices?",
        "question_hi": "स्लाइस के लिए cap और len में क्या अंतर है?",
        "options_en": ["len is current length, cap is maximum capacity", "No difference", "cap is faster", "len is deprecated"],
        "options_hi": ["len करंट लेंथ है, cap मैक्सिमम कैपेसिटी है", "कोई अंतर नहीं", "cap तेज है", "len डिप्रिकेटेड है"],
        "answer_en": "len is current length, cap is maximum capacity",
        "answer_hi": "len करंट लेंथ है, cap मैक्सिमम कैपेसिटी है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How to implement distributed locking?",
        "question_hi": "डिस्ट्रीब्यूटेड लॉकिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use Redis or etcd with lease mechanism", "Use database locks", "Use file locks", "Use mutex only"],
        "options_hi": ["लीज मैकेनिज्म के साथ Redis या etcd का उपयोग करें", "डेटाबेस लॉक का उपयोग करें", "फाइल लॉक का उपयोग करें", "केवल म्यूटेक्स का उपयोग करें"],
        "answer_en": "Use Redis or etcd with lease mechanism",
        "answer_hi": "लीज मैकेनिज्म के साथ Redis या etcd का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of go:embed directive?",
        "question_hi": "go:embed डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To embed files into binary at compile time", "To embed images", "To embed code", "To embed configurations"],
        "options_hi": ["कम्पाइल टाइम पर फाइल को बाइनरी में एम्बेड करने के लिए", "इमेज एम्बेड करने के लिए", "कोड एम्बेड करने के लिए", "कॉन्फिगरेशन एम्बेड करने के लिए"],
        "answer_en": "To embed files into binary at compile time",
        "answer_hi": "कम्पाइल टाइम पर फाइल को बाइनरी में एम्बेड करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How to implement A/B testing?",
        "question_hi": "A/B टेस्टिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use feature flags with user segmentation", "Use different code branches", "Use separate deployments", "Use database flags"],
        "options_hi": ["यूजर सेगमेंटेशन के साथ फीचर फ्लैग का उपयोग करें", "अलग-अलग कोड ब्रांच का उपयोग करें", "अलग डिप्लॉयमेंट का उपयोग करें", "डेटाबेस फ्लैग का उपयोग करें"],
        "answer_en": "Use feature flags with user segmentation",
        "answer_hi": "यूजर सेगमेंटेशन के साथ फीचर फ्लैग का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the difference between mutex and atomic operations?",
        "question_hi": "म्यूटेक्स और एटॉमिक ऑपरेशन में क्या अंतर है?",
        "options_en": ["Mutex uses locking, atomic uses CPU instructions", "No difference", "Atomic is faster", "Mutex is deprecated"],
        "options_hi": ["म्यूटेक्स लॉकिंग का उपयोग करता है, एटॉमिक CPU इंस्ट्रक्शन का उपयोग करता है", "कोई अंतर नहीं", "एटॉमिक तेज है", "म्यूटेक्स डिप्रिकेटेड है"],
        "answer_en": "Mutex uses locking, atomic uses CPU instructions",
        "answer_hi": "म्यूटेक्स लॉकिंग का उपयोग करता है, एटॉमिक CPU इंस्ट्रक्शन का उपयोग करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How to implement event sourcing?",
        "question_hi": "इवेंट सोर्सिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Store state changes as immutable events", "Use database transactions", "Use logging", "Use message queues"],
        "options_hi": ["स्टेट चेंज को इम्यूटेबल इवेंट के रूप में स्टोर करें", "डेटाबेस ट्रांजैक्शन का उपयोग करें", "लॉगिंग का उपयोग करें", "मैसेज क्यू का उपयोग करें"],
        "answer_en": "Store state changes as immutable events",
        "answer_hi": "स्टेट चेंज को इम्यूटेबल इवेंट के रूप में स्टोर करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of sync.Map?",
        "question_hi": "sync.Map का उद्देश्य क्या है?",
        "options_en": ["Concurrent map for read-heavy workloads", "Faster map", "Smaller map", "Ordered map"],
        "options_hi": ["रीड-हैवी वर्कलोड के लिए कंकरंट मैप", "तेज मैप", "छोटा मैप", "ऑर्डर्ड मैप"],
        "answer_en": "Concurrent map for read-heavy workloads",
        "answer_hi": "रीड-हैवी वर्कलोड के लिए कंकरंट मैप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How to implement canary deployments?",
        "question_hi": "कैनरी डिप्लॉयमेंट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use traffic splitting with feature flags", "Use separate clusters", "Use different ports", "Use database migrations"],
        "options_hi": ["फीचर फ्लैग के साथ ट्रैफिक स्प्लिटिंग का उपयोग करें", "अलग क्लस्टर का उपयोग करें", "अलग पोर्ट का उपयोग करें", "डेटाबेस माइग्रेशन का उपयोग करें"],
        "answer_en": "Use traffic splitting with feature flags",
        "answer_hi": "फीचर फ्लैग के साथ ट्रैफिक स्प्लिटिंग का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of runtime.NumGoroutine?",
        "question_hi": "runtime.NumGoroutine का उद्देश्य क्या है?",
        "options_en": ["To get current number of goroutines", "To get CPU count", "To get memory usage", "To get GC stats"],
        "options_hi": ["गोरूटीन की करंट संख्या प्राप्त करने के लिए", "CPU काउंट प्राप्त करने के लिए", "मेमोरी यूसेज प्राप्त करने के लिए", "GC स्टैट्स प्राप्त करने के लिए"],
        "answer_en": "To get current number of goroutines",
        "answer_hi": "गोरूटीन की करंट संख्या प्राप्त करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How to implement bulkhead pattern?",
        "question_hi": "बल्कहेड पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use resource isolation with separate pools", "Use single pool", "Use caching", "Use load balancing"],
        "options_hi": ["अलग-अलग पूल के साथ रिसोर्स आइसोलेशन का उपयोग करें", "सिंगल पूल का उपयोग करें", "कैशिंग का उपयोग करें", "लोड बैलेंसिंग का उपयोग करें"],
        "answer_en": "Use resource isolation with separate pools",
        "answer_hi": "अलग-अलग पूल के साथ रिसोर्स आइसोलेशन का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the difference between context.Background and context.TODO?",
        "question_hi": "context.Background और context.TODO में क्या अंतर है?",
        "options_en": ["Background is for main context, TODO is for temporary placeholder", "No difference", "TODO is faster", "Background is deprecated"],
        "options_hi": ["Background मुख्य कॉन्टेक्स्ट के लिए है, TODO अस्थायी प्लेसहोल्डर के लिए है", "कोई अंतर नहीं", "TODO तेज है", "Background डिप्रिकेटेड है"],
        "answer_en": "Background is for main context, TODO is for temporary placeholder",
        "answer_hi": "Background मुख्य कॉन्टेक्स्ट के लिए है, TODO अस्थायी प्लेसहोल्डर के लिए है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How to implement sagas pattern?",
        "question_hi": "सागा पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use compensating transactions for distributed transactions", "Use database transactions", "Use message queues", "Use event sourcing"],
        "options_hi": ["डिस्ट्रीब्यूटेड ट्रांजैक्शन के लिए कम्पेंसेटिंग ट्रांजैक्शन का उपयोग करें", "डेटाबेस ट्रांजैक्शन का उपयोग करें", "मैसेज क्यू का उपयोग करें", "इवेंट सोर्सिंग का उपयोग करें"],
        "answer_en": "Use compensating transactions for distributed transactions",
        "answer_hi": "डिस्ट्रीब्यूटेड ट्रांजैक्शन के लिए कम्पेंसेटिंग ट्रांजैक्शन का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of reflect.TypeOf?",
        "question_hi": "reflect.TypeOf का उद्देश्य क्या है?",
        "options_en": ["To get type information at runtime", "To get value", "To set value", "To create type"],
        "options_hi": ["रनटाइम पर टाइप इनफार्मेशन प्राप्त करने के लिए", "वैल्यू प्राप्त करने के लिए", "वैल्यू सेट करने के लिए", "टाइप बनाने के लिए"],
        "answer_en": "To get type information at runtime",
        "answer_hi": "रनटाइम पर टाइप इनफार्मेशन प्राप्त करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How to implement API versioning?",
        "question_hi": "API वर्जनिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use URL path, headers, or query parameters", "Use different servers", "Use database versioning", "Use code branching"],
        "options_hi": ["URL पाथ, हेडर या क्वेरी पैरामीटर का उपयोग करें", "अलग सर्वर का उपयोग करें", "डेटाबेस वर्जनिंग का उपयोग करें", "कोड ब्रांचिंग का उपयोग करें"],
        "answer_en": "Use URL path, headers, or query parameters",
        "answer_hi": "URL पाथ, हेडर या क्वेरी पैरामीटर का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the difference between time.After and time.NewTimer?",
        "question_hi": "time.After और time.NewTimer में क्या अंतर है?",
        "options_en": ["After returns channel, Timer can be stopped", "No difference", "After is faster", "Timer is deprecated"],
        "options_hi": ["After चैनल रिटर्न करता है, Timer को रोका जा सकता है", "कोई अंतर नहीं", "After तेज है", "Timer डिप्रिकेटेड है"],
        "answer_en": "After returns channel, Timer can be stopped",
        "answer_hi": "After चैनल रिटर्न करता है, Timer को रोका जा सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How to implement content negotiation?",
        "question_hi": "कंटेंट नेगोशिएशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use Accept and Content-Type headers", "Use URL parameters", "Use different endpoints", "Use database settings"],
        "options_hi": ["Accept और Content-Type हेडर का उपयोग करें", "URL पैरामीटर का उपयोग करें", "अलग एंडपॉइंट का उपयोग करें", "डेटाबेस सेटिंग का उपयोग करें"],
        "answer_en": "Use Accept and Content-Type headers",
        "answer_hi": "Accept और Content-Type हेडर का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of runtime.GC?",
        "question_hi": "runtime.GC का उद्देश्य क्या है?",
        "options_en": ["To trigger garbage collection manually", "To get GC stats", "To set GC parameters", "To disable GC"],
        "options_hi": ["गार्बेज कलेक्शन को मैन्युअली ट्रिगर करने के लिए", "GC स्टैट्स प्राप्त करने के लिए", "GC पैरामीटर सेट करने के लिए", "GC डिसेबल करने के लिए"],
        "answer_en": "To trigger garbage collection manually",
        "answer_hi": "गार्बेज कलेक्शन को मैन्युअली ट्रिगर करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How to implement data validation?",
        "question_hi": "डेटा वैलिडेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use struct tags with validation libraries", "Use if statements only", "Use database constraints", "Use external services"],
        "options_hi": ["वैलिडेशन लाइब्रेरी के साथ स्ट्रक्चर टैग का उपयोग करें", "केवल if स्टेटमेंट का उपयोग करें", "डेटाबेस कंस्ट्रेंट का उपयोग करें", "एक्सटर्नल सर्विस का उपयोग करें"],
        "answer_en": "Use struct tags with validation libraries",
        "answer_hi": "वैलिडेशन लाइब्रेरी के साथ स्ट्रक्चर टैग का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the difference between errors.Is and errors.As?",
        "question_hi": "errors.Is और errors.As में क्या अंतर है?",
        "options_en": ["Is checks error equality, As checks error type", "No difference", "Is is faster", "As is deprecated"],
        "options_hi": ["Is एरर इक्वलिटी चेक करता है, As एरर टाइप चेक करता है", "कोई अंतर नहीं", "Is तेज है", "As डिप्रिकेटेड है"],
        "answer_en": "Is checks error equality, As checks error type",
        "answer_hi": "Is एरर इक्वलिटी चेक करता है, As एरर टाइप चेक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How to implement request deduplication?",
        "question_hi": "रिक्वेस्ट डीडुप्लिकेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use cache with request IDs or hashes", "Use database unique constraints", "Use message queues", "Use load balancing"],
        "options_hi": ["रिक्वेस्ट ID या हैश के साथ कैश का उपयोग करें", "डेटाबेस यूनिक कंस्ट्रेंट का उपयोग करें", "मैसेज क्यू का उपयोग करें", "लोड बैलेंसिंग का उपयोग करें"],
        "answer_en": "Use cache with request IDs or hashes",
        "answer_hi": "रिक्वेस्ट ID या हैश के साथ कैश का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of sync.WaitGroup?",
        "question_hi": "sync.WaitGroup का उद्देश्य क्या है?",
        "options_en": ["To wait for goroutines to complete", "To synchronize maps", "To lock resources", "To manage memory"],
        "options_hi": ["गोरूटीन के पूरा होने की प्रतीक्षा करने के लिए", "मैप सिंक्रोनाइज़ करने के लिए", "रिसोर्सेज लॉक करने के लिए", "मेमोरी मैनेज करने के लिए"],
        "answer_en": "To wait for goroutines to complete",
        "answer_hi": "गोरूटीन के पूरा होने की प्रतीक्षा करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How to implement configuration management?",
        "question_hi": "कॉन्फिगरेशन मैनेजमेंट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use environment variables, config files, or remote config", "Use hardcoded values", "Use database only", "Use command line only"],
        "options_hi": ["एनवायरनमेंट वेरिएबल, कॉन्फिग फाइल या रिमोट कॉन्फिग का उपयोग करें", "हार्डकोडेड वैल्यू का उपयोग करें", "केवल डेटाबेस का उपयोग करें", "केवल कमांड लाइन का उपयोग करें"],
        "answer_en": "Use environment variables, config files, or remote config",
        "answer_hi": "एनवायरनमेंट वेरिएबल, कॉन्फिग फाइल या रिमोट कॉन्फिग का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the difference between deep copy and shallow copy?",
        "question_hi": "डीप कॉपी और शैलो कॉपी में क्या अंतर है?",
        "options_en": ["Deep copy duplicates all nested objects, shallow copy shares references", "No difference", "Shallow copy is faster", "Deep copy is deprecated"],
        "options_hi": ["डीप कॉपी सभी नेस्टेड ऑब्जेक्ट को डुप्लिकेट करती है, शैलो कॉपी रिफरेन्स शेयर करती है", "कोई अंतर नहीं", "शैलो कॉपी तेज है", "डीप कॉपी डिप्रिकेटेड है"],
        "answer_en": "Deep copy duplicates all nested objects, shallow copy shares references",
        "answer_hi": "डीप कॉपी सभी नेस्टेड ऑब्जेक्ट को डुप्लिकेट करती है, शैलो कॉपी रिफरेन्स शेयर करती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How to implement pagination?",
        "question_hi": "पेजिनेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use limit/offset or cursor-based pagination", "Use page numbers only", "Use infinite scroll", "Use database views"],
        "options_hi": ["limit/offset या कर्सर-बेस्ड पेजिनेशन का उपयोग करें", "केवल पेज नंबर का उपयोग करें", "इनफिनिट स्क्रॉल का उपयोग करें", "डेटाबेस व्यू का उपयोग करें"],
        "answer_en": "Use limit/offset or cursor-based pagination",
        "answer_hi": "limit/offset या कर्सर-बेस्ड पेजिनेशन का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of runtime.Stack?",
        "question_hi": "runtime.Stack का उद्देश्य क्या है?",
        "options_en": ["To get current goroutine stack trace", "To get memory stack", "To set stack size", "To allocate stack"],
        "options_hi": ["करंट गोरूटीन स्टैक ट्रेस प्राप्त करने के लिए", "मेमोरी स्टैक प्राप्त करने के लिए", "स्टैक साइज सेट करने के लिए", "स्टैक अलोकेट करने के लिए"],
        "answer_en": "To get current goroutine stack trace",
        "answer_hi": "करंट गोरूटीन स्टैक ट्रेस प्राप्त करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How to implement caching strategies?",
        "question_hi": "कैशिंग स्ट्रैटेजी कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use LRU, TTL, or write-through caching", "Use memory only", "Use database caching", "Use external cache only"],
        "options_hi": ["LRU, TTL या राइट-थ्रू कैशिंग का उपयोग करें", "केवल मेमोरी का उपयोग करें", "डेटाबेस कैशिंग का उपयोग करें", "केवल एक्सटर्नल कैश का उपयोग करें"],
        "answer_en": "Use LRU, TTL, or write-through caching",
        "answer_hi": "LRU, TTL या राइट-थ्रू कैशिंग का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the difference between compile-time and runtime polymorphism?",
        "question_hi": "कम्पाइल-टाइम और रनटाइम पॉलीमॉर्फिज्म में क्या अंतर है?",
        "options_en": ["Compile-time uses generics, runtime uses interfaces", "No difference", "Compile-time is faster", "Runtime is deprecated"],
        "options_hi": ["कम्पाइल-टाइम जेनरिक्स का उपयोग करता है, रनटाइम इंटरफेस का उपयोग करता है", "कोई अंतर नहीं", "कम्पाइल-टाइम तेज है", "रनटाइम डिप्रिकेटेड है"],
        "answer_en": "Compile-time uses generics, runtime uses interfaces",
        "answer_hi": "कम्पाइल-टाइम जेनरिक्स का उपयोग करता है, रनटाइम इंटरफेस का उपयोग करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How to implement dependency injection?",
        "question_hi": "डिपेंडेंसी इंजेक्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use constructor injection with interfaces", "Use global variables", "Use service locator", "Use reflection only"],
        "options_hi": ["इंटरफेस के साथ कंस्ट्रक्टर इंजेक्शन का उपयोग करें", "ग्लोबल वेरिएबल का उपयोग करें", "सर्विस लोकेटर का उपयोग करें", "केवल रिफ्लेक्शन का उपयोग करें"],
        "answer_en": "Use constructor injection with interfaces",
        "answer_hi": "इंटरफेस के साथ कंस्ट्रक्टर इंजेक्शन का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of runtime.GOMAXPROCS?",
        "question_hi": "runtime.GOMAXPROCS का उद्देश्य क्या है?",
        "options_en": ["To set maximum number of CPUs that can execute simultaneously", "To set goroutine limit", "To set memory limit", "To set GC frequency"],
        "options_hi": ["एक साथ execute हो सकने वाले CPU की अधिकतम संख्या सेट करने के लिए", "गोरूटीन लिमिट सेट करने के लिए", "मेमोरी लिमिट सेट करने के लिए", "GC फ्रीक्वेंसी सेट करने के लिए"],
        "answer_en": "To set maximum number of CPUs that can execute simultaneously",
        "answer_hi": "एक साथ execute हो सकने वाले CPU की अधिकतम संख्या सेट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How to implement data encryption?",
        "question_hi": "डेटा एन्क्रिप्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use crypto package with AES or RSA algorithms", "Use base64 encoding", "Use hashing only", "Use external services"],
        "options_hi": ["AES या RSA एल्गोरिदम के साथ crypto पैकेज का उपयोग करें", "base64 एन्कोडिंग का उपयोग करें", "केवल हैशिंग का उपयोग करें", "एक्सटर्नल सर्विस का उपयोग करें"],
        "answer_en": "Use crypto package with AES or RSA algorithms",
        "answer_hi": "AES या RSA एल्गोरिदम के साथ crypto पैकेज का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the difference between mutex and semaphore?",
        "question_hi": "म्यूटेक्स और सेमाफोर में क्या अंतर है?",
        "options_en": ["Mutex allows one goroutine, semaphore allows N goroutines", "No difference", "Mutex is faster", "Semaphore is deprecated"],
        "options_hi": ["म्यूटेक्स एक गोरूटीन की अनुमति देता है, सेमाफोर N गोरूटीन की अनुमति देता है", "कोई अंतर नहीं", "म्यूटेक्स तेज है", "सेमाफोर डिप्रिकेटेड है"],
        "answer_en": "Mutex allows one goroutine, semaphore allows N goroutines",
        "answer_hi": "म्यूटेक्स एक गोरूटीन की अनुमति देता है, सेमाफोर N गोरूटीन की अनुमति देता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How to implement API rate limiting?",
        "question_hi": "API रेट लिमिटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use token bucket or leaky bucket algorithm", "Use sleep only", "Use database counters", "Use external services"],
        "options_hi": ["टोकन बकेट या लीकी बकेट एल्गोरिदम का उपयोग करें", "केवल sleep का उपयोग करें", "डेटाबेस काउंटर का उपयोग करें", "एक्सटर्नल सर्विस का उपयोग करें"],
        "answer_en": "Use token bucket or leaky bucket algorithm",
        "answer_hi": "टोकन बकेट या लीकी बकेट एल्गोरिदम का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of reflect.ValueOf?",
        "question_hi": "reflect.ValueOf का उद्देश्य क्या है?",
        "options_en": ["To get value information at runtime", "To get type information", "To set value", "To create value"],
        "options_hi": ["रनटाइम पर वैल्यू इनफार्मेशन प्राप्त करने के लिए", "टाइप इनफार्मेशन प्राप्त करने के लिए", "वैल्यू सेट करने के लिए", "वैल्यू बनाने के लिए"],
        "answer_en": "To get value information at runtime",
        "answer_hi": "रनटाइम पर वैल्यू इनफार्मेशन प्राप्त करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How to implement database migrations?",
        "question_hi": "डेटाबेस माइग्रेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use migration tools with versioned SQL scripts", "Use manual SQL", "Use ORM only", "Use database backups"],
        "options_hi": ["वर्जन SQL स्क्रिप्ट के साथ माइग्रेशन टूल का उपयोग करें", "मैनुअल SQL का उपयोग करें", "केवल ORM का उपयोग करें", "डेटाबेस बैकअप का उपयोग करें"],
        "answer_en": "Use migration tools with versioned SQL scripts",
        "answer_hi": "वर्जन SQL स्क्रिप्ट के साथ माइग्रेशन टूल का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the difference between TCP and UDP in Go?",
        "question_hi": "Go में TCP और UDP में क्या अंतर है?",
        "options_en": ["TCP is reliable and connection-oriented, UDP is unreliable and connectionless", "No difference", "TCP is faster", "UDP is deprecated"],
        "options_hi": ["TCP विश्वसनीय और कनेक्शन-ओरिएंटेड है, UDP अविश्वसनीय और कनेक्शनलेस है", "कोई अंतर नहीं", "TCP तेज है", "UDP डिप्रिकेटेड है"],
        "answer_en": "TCP is reliable and connection-oriented, UDP is unreliable and connectionless",
        "answer_hi": "TCP विश्वसनीय और कनेक्शन-ओरिएंटेड है, UDP अविश्वसनीय और कनेक्शनलेस है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How to implement websocket communication?",
        "question_hi": "वेबसॉकेट कम्युनिकेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use gorilla/websocket or net/http with Upgrade", "Use raw TCP", "Use HTTP polling", "Use message queues"],
        "options_hi": ["gorilla/websocket या Upgrade के साथ net/http का उपयोग करें", "रॉ TCP का उपयोग करें", "HTTP पोलिंग का उपयोग करें", "मैसेज क्यू का उपयोग करें"],
        "answer_en": "Use gorilla/websocket or net/http with Upgrade",
        "answer_hi": "gorilla/websocket या Upgrade के साथ net/http का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of runtime.Caller?",
        "question_hi": "runtime.Caller का उद्देश्य क्या है?",
        "options_en": ["To get function call stack information", "To get CPU information", "To get memory information", "To get GC information"],
        "options_hi": ["फंक्शन कॉल स्टैक इनफार्मेशन प्राप्त करने के लिए", "CPU इनफार्मेशन प्राप्त करने के लिए", "मेमोरी इनफार्मेशन प्राप्त करने के लिए", "GC इनफार्मेशन प्राप्त करने के लिए"],
        "answer_en": "To get function call stack information",
        "answer_hi": "फंक्शन कॉल स्टैक इनफार्मेशन प्राप्त करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How to implement file watching?",
        "question_hi": "फाइल वॉचिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use fsnotify package or platform-specific APIs", "Use polling only", "Use database triggers", "Use external services"],
        "options_hi": ["fsnotify पैकेज या प्लेटफॉर्म-स्पेसिफिक API का उपयोग करें", "केवल पोलिंग का उपयोग करें", "डेटाबेस ट्रिगर का उपयोग करें", "एक्सटर्नल सर्विस का उपयोग करें"],
        "answer_en": "Use fsnotify package or platform-specific APIs",
        "answer_hi": "fsnotify पैकेज या प्लेटफॉर्म-स्पेसिफिक API का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the difference between SHA-256 and MD5?",
        "question_hi": "SHA-256 और MD5 में क्या अंतर है?",
        "options_en": ["SHA-256 is more secure, MD5 is broken and should not be used", "No difference", "MD5 is faster", "SHA-256 is deprecated"],
        "options_hi": ["SHA-256 अधिक सुरक्षित है, MD5 ब्रोकन है और इसका उपयोग नहीं करना चाहिए", "कोई अंतर नहीं", "MD5 तेज है", "SHA-256 डिप्रिकेटेड है"],
        "answer_en": "SHA-256 is more secure, MD5 is broken and should not be used",
        "answer_hi": "SHA-256 अधिक सुरक्षित है, MD5 ब्रोकन है और इसका उपयोग नहीं करना चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How to implement gRPC in Go?",
        "question_hi": "Go में gRPC कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use protobuf definitions with grpc package", "Use JSON-RPC", "Use REST only", "Use raw TCP"],
        "options_hi": ["grpc पैकेज के साथ protobuf डेफिनिशन का उपयोग करें", "JSON-RPC का उपयोग करें", "केवल REST का उपयोग करें", "रॉ TCP का उपयोग करें"],
        "answer_en": "Use protobuf definitions with grpc package",
        "answer_hi": "grpc पैकेज के साथ protobuf डेफिनिशन का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of context.WithDeadline?",
        "question_hi": "context.WithDeadline का उद्देश्य क्या है?",
        "options_en": ["To set absolute time for operation completion", "To set relative timeout", "To set cancellation", "To set values"],
        "options_hi": ["ऑपरेशन कम्पलीशन के लिए एब्सोल्यूट टाइम सेट करने के लिए", "रिलेटिव टाइमआउट सेट करने के लिए", "कैंसलेशन सेट करने के लिए", "वैल्यू सेट करने के लिए"],
        "answer_en": "To set absolute time for operation completion",
        "answer_hi": "ऑपरेशन कम्पलीशन के लिए एब्सोल्यूट टाइम सेट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How to implement structured logging?",
        "question_hi": "स्ट्रक्चर्ड लॉगिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use log/slog or third-party logging libraries", "Use fmt.Println only", "Use database logging", "Use external services"],
        "options_hi": ["log/slog या थर्ड-पार्टी लॉगिंग लाइब्रेरी का उपयोग करें", "केवल fmt.Println का उपयोग करें", "डेटाबेस लॉगिंग का उपयोग करें", "एक्सटर्नल सर्विस का उपयोग करें"],
        "answer_en": "Use log/slog or third-party logging libraries",
        "answer_hi": "log/slog या थर्ड-पार्टी लॉगिंग लाइब्रेरी का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the difference between unit test and integration test?",
        "question_hi": "यूनिट टेस्ट और इंटीग्रेशन टेस्ट में क्या अंतर है?",
        "options_en": ["Unit test tests isolated code, integration test tests components together", "No difference", "Unit test is faster", "Integration test is deprecated"],
        "options_hi": ["यूनिट टेस्ट आइसोलेटेड कोड टेस्ट करता है, इंटीग्रेशन टेस्ट कंपोनेंट्स को एक साथ टेस्ट करता है", "कोई अंतर नहीं", "यूनिट टेस्ट तेज है", "इंटीग्रेशन टेस्ट डिप्रिकेटेड है"],
        "answer_en": "Unit test tests isolated code, integration test tests components together",
        "answer_hi": "यूनिट टेस्ट आइसोलेटेड कोड टेस्ट करता है, इंटीग्रेशन टेस्ट कंपोनेंट्स को एक साथ टेस्ट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How to implement memory profiling?",
        "question_hi": "मेमोरी प्रोफाइलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use pprof package with memory profiling enabled", "Use logging only", "Use external tools", "Use database queries"],
        "options_hi": ["मेमोरी प्रोफाइलिंग एनेबल के साथ pprof पैकेज का उपयोग करें", "केवल लॉगिंग का उपयोग करें", "एक्सटर्नल टूल का उपयोग करें", "डेटाबेस क्वेरी का उपयोग करें"],
        "answer_en": "Use pprof package with memory profiling enabled",
        "answer_hi": "मेमोरी प्रोफाइलिंग एनेबल के साथ pprof पैकेज का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of sync/atomic package?",
        "question_hi": "sync/atomic पैकेज का उद्देश्य क्या है?",
        "options_en": ["For atomic operations on primitive types", "For atomic file operations", "For database transactions", "For network operations"],
        "options_hi": ["प्रिमिटिव टाइप पर एटॉमिक ऑपरेशन के लिए", "एटॉमिक फाइल ऑपरेशन के लिए", "डेटाबेस ट्रांजैक्शन के लिए", "नेटवर्क ऑपरेशन के लिए"],
        "answer_en": "For atomic operations on primitive types",
        "answer_hi": "प्रिमिटिव टाइप पर एटॉमिक ऑपरेशन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How to implement API authentication?",
        "question_hi": "API ऑथेंटिकेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use JWT, OAuth2, or API keys", "Use basic auth only", "Use database passwords", "Use external services"],
        "options_hi": ["JWT, OAuth2 या API की का उपयोग करें", "केवल बेसिक ऑथ का उपयोग करें", "डेटाबेस पासवर्ड का उपयोग करें", "एक्सटर्नल सर्विस का उपयोग करें"],
        "answer_en": "Use JWT, OAuth2, or API keys",
        "answer_hi": "JWT, OAuth2 या API की का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the difference between heap and stack allocation?",
        "question_hi": "हीप और स्टैक अलोकेशन में क्या अंतर है?",
        "options_en": ["Stack is fast and automatic, heap is slow and managed by GC", "No difference", "Heap is faster", "Stack is deprecated"],
        "options_hi": ["स्टैक तेज और ऑटोमैटिक है, हीप धीमा है और GC द्वारा मैनेज किया जाता है", "कोई अंतर नहीं", "हीप तेज है", "स्टैक डिप्रिकेटेड है"],
        "answer_en": "Stack is fast and automatic, heap is slow and managed by GC",
        "answer_hi": "स्टैक तेज और ऑटोमैटिक है, हीप धीमा है और GC द्वारा मैनेज किया जाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How to implement message queue?",
        "question_hi": "मैसेज क्यू कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use channels or external systems like RabbitMQ/Kafka", "Use database tables", "Use file system", "Use HTTP endpoints"],
        "options_hi": ["चैनल या RabbitMQ/Kafka जैसी एक्सटर्नल सिस्टम का उपयोग करें", "डेटाबेस टेबल का उपयोग करें", "फाइल सिस्टम का उपयोग करें", "HTTP एंडपॉइंट का उपयोग करें"],
        "answer_en": "Use channels or external systems like RabbitMQ/Kafka",
        "answer_hi": "चैनल या RabbitMQ/Kafka जैसी एक्सटर्नल सिस्टम का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of go test -bench?",
        "question_hi": "go test -bench का उद्देश्य क्या है?",
        "options_en": ["To run benchmark tests", "To run unit tests", "To run integration tests", "To run coverage tests"],
        "options_hi": ["बेंचमार्क टेस्ट चलाने के लिए", "यूनिट टेस्ट चलाने के लिए", "इंटीग्रेशन टेस्ट चलाने के लिए", "कवरेज टेस्ट चलाने के लिए"],
        "answer_en": "To run benchmark tests",
        "answer_hi": "बेंचमार्क टेस्ट चलाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How to implement data compression?",
        "question_hi": "डेटा कम्प्रेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use compress package with gzip/zlib", "Use base64 encoding", "Use hashing", "Use external services"],
        "options_hi": ["gzip/zlib के साथ compress पैकेज का उपयोग करें", "base64 एन्कोडिंग का उपयोग करें", "हैशिंग का उपयोग करें", "एक्सटर्नल सर्विस का उपयोग करें"],
        "answer_en": "Use compress package with gzip/zlib",
        "answer_hi": "gzip/zlib के साथ compress पैकेज का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the difference between binary and text protocols?",
        "question_hi": "बाइनरी और टेक्स्ट प्रोटोकॉल में क्या अंतर है?",
        "options_en": ["Binary is efficient for machines, text is human-readable", "No difference", "Binary is faster", "Text is deprecated"],
        "options_hi": ["बाइनरी मशीन के लिए एफिशिएंट है, टेक्स्ट ह्यूमन-रीडेबल है", "कोई अंतर नहीं", "बाइनरी तेज है", "टेक्स्ट डिप्रिकेटेड है"],
        "answer_en": "Binary is efficient for machines, text is human-readable",
        "answer_hi": "बाइनरी मशीन के लिए एफिशिएंट है, टेक्स्ट ह्यूमन-रीडेबल है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How to implement hot reloading?",
        "question_hi": "हॉट रीलोडिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use file watching with restart or plugin system", "Use manual restart", "Use database triggers", "Use external tools"],
        "options_hi": ["रिस्टार्ट या प्लगइन सिस्टम के साथ फाइल वॉचिंग का उपयोग करें", "मैनुअल रिस्टार्ट का उपयोग करें", "डेटाबेस ट्रिगर का उपयोग करें", "एक्सटर्नल टूल का उपयोग करें"],
        "answer_en": "Use file watching with restart or plugin system",
        "answer_hi": "रिस्टार्ट या प्लगइन सिस्टम के साथ फाइल वॉचिंग का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of go test -cover?",
        "question_hi": "go test -cover का उद्देश्य क्या है?",
        "options_en": ["To measure code coverage", "To run tests", "To benchmark tests", "To profile tests"],
        "options_hi": ["कोड कवरेज मापने के लिए", "टेस्ट चलाने के लिए", "बेंचमार्क टेस्ट के लिए", "प्रोफाइल टेस्ट के लिए"],
        "answer_en": "To measure code coverage",
        "answer_hi": "कोड कवरेज मापने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How to implement data streaming?",
        "question_hi": "डेटा स्ट्रीमिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use io.Reader and io.Writer interfaces", "Use channels only", "Use database streams", "Use external services"],
        "options_hi": ["io.Reader और io.Writer इंटरफेस का उपयोग करें", "केवल चैनल का उपयोग करें", "डेटाबेस स्ट्रीम का उपयोग करें", "एक्सटर्नल सर्विस का उपयोग करें"],
        "answer_en": "Use io.Reader and io.Writer interfaces",
        "answer_hi": "io.Reader और io.Writer इंटरफेस का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the difference between REST and GraphQL?",
        "question_hi": "REST और GraphQL में क्या अंतर है?",
        "options_en": ["REST has fixed endpoints, GraphQL has flexible queries", "No difference", "REST is faster", "GraphQL is deprecated"],
        "options_hi": ["REST के फिक्स्ड एंडपॉइंट हैं, GraphQL के फ्लेक्सिबल क्वेरी हैं", "कोई अंतर नहीं", "REST तेज है", "GraphQL डिप्रिकेटेड है"],
        "answer_en": "REST has fixed endpoints, GraphQL has flexible queries",
        "answer_hi": "REST के फिक्स्ड एंडपॉइंट हैं, GraphQL के फ्लेक्सिबल क्वेरी हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How to implement cron jobs?",
        "question_hi": "क्रॉन जॉब कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use time.Ticker or robfig/cron package", "Use sleep in loop", "Use database scheduler", "Use external services"],
        "options_hi": ["time.Ticker या robfig/cron पैकेज का उपयोग करें", "लूप में sleep का उपयोग करें", "डेटाबेस शेड्यूलर का उपयोग करें", "एक्सटर्नल सर्विस का उपयोग करें"],
        "answer_en": "Use time.Ticker or robfig/cron package",
        "answer_hi": "time.Ticker या robfig/cron पैकेज का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of go mod tidy?",
        "question_hi": "go mod tidy का उद्देश्य क्या है?",
        "options_en": ["To clean up unused dependencies", "To add dependencies", "To remove dependencies", "To update dependencies"],
        "options_hi": ["अनयूज्ड डिपेंडेंसी को क्लीन अप करने के लिए", "डिपेंडेंसी ऐड करने के लिए", "डिपेंडेंसी रिमूव करने के लिए", "डिपेंडेंसी अपडेट करने के लिए"],
        "answer_en": "To clean up unused dependencies",
        "answer_hi": "अनयूज्ड डिपेंडेंसी को क्लीन अप करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How to implement cross-compilation?",
        "question_hi": "क्रॉस-कम्पाइलेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use GOOS and GOARCH environment variables", "Use different compilers", "Use Docker containers", "Use virtual machines"],
        "options_hi": ["GOOS और GOARCH एनवायरनमेंट वेरिएबल का उपयोग करें", "अलग कम्पाइलर का उपयोग करें", "डॉकर कंटेनर का उपयोग करें", "वर्चुअल मशीन का उपयोग करें"],
        "answer_en": "Use GOOS and GOARCH environment variables",
        "answer_hi": "GOOS और GOARCH एनवायरनमेंट वेरिएबल का उपयोग करें",
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