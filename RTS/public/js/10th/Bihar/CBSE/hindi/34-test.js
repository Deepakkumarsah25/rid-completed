const questions=[
    {
        "num": 1,
        "question_en": "What is the difference between sync.Mutex and sync.RWMutex in terms of performance?",
        "question_hi": "परफॉर्मेंस के मामले में sync.Mutex और sync.RWMutex में क्या अंतर है?",
        "options_en": ["RWMutex allows multiple readers but single writer", "Mutex is faster for read-heavy workloads", "RWMutex has higher overhead for writes", "Both A and C"],
        "options_hi": ["RWMutex मल्टीपल रीडर लेकिन सिंगल राइटर की अनुमति देता है", "रीड-हेवी वर्कलोड के लिए Mutex फास्टर है", "राइट के लिए RWMutex का ओवरहेड अधिक है", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How does Go's garbage collector handle circular references?",
        "question_hi": "Go का गार्बेज कलेक्टर सर्कुलर रेफरेंस को कैसे हैंडल करता है?",
        "options_en": ["Uses tri-color mark and sweep", "Automatically detects and collects", "Uses tracing garbage collection", "All of the above"],
        "options_hi": ["ट्राई-कलर मार्क एंड स्वीप का उपयोग करता है", "ऑटोमैटिकली डिटेक्ट और कलेक्ट करता है", "ट्रेसिंग गार्बेज कलेक्शन का उपयोग करता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the purpose of the 'runtime.SetFinalizer' function?",
        "question_hi": "'runtime.SetFinalizer' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Run function before object garbage collection", "Clean up resources", "Execute cleanup logic", "All of the above"],
        "options_hi": ["ऑब्जेक्ट गार्बेज कलेक्शन से पहले फंक्शन रन करना", "रिसोर्स क्लीन अप करना", "क्लीनअप लॉजिक एक्जिक्यूट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you implement a lock-free data structure in Go?",
        "question_hi": "Go में लॉक-फ्री डेटा स्ट्रक्चर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sync/atomic package", "CAS operations", "Memory barriers", "All of the above"],
        "options_hi": ["sync/atomic पैकेज का उपयोग करके", "CAS ऑपरेशन", "मेमोरी बैरियर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the difference between channel-based and mutex-based concurrency?",
        "question_hi": "चैनल-बेस्ड और म्यूटेक्स-बेस्ड कंकरेंसी में क्या अंतर है?",
        "options_en": ["Channels communicate, mutexes synchronize", "Channels are better for data flow", "Mutexes are better for protecting state", "All of the above"],
        "options_hi": ["चैनल कम्युनिकेट करते हैं, म्यूटेक्स सिंक्रोनाइज़ करते हैं", "डेटा फ्लो के लिए चैनल बेहतर हैं", "स्टेट प्रोटेक्ट करने के लिए म्यूटेक्स बेहतर हैं", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you prevent goroutine leaks in long-running applications?",
        "question_hi": "लॉन्ग-रनिंग एप्लिकेशन में गोरूटीन लीक कैसे प्रिवेंट करते हैं?",
        "options_en": ["Use context cancellation", "Proper channel closing", "Monitor goroutine lifecycle", "All of the above"],
        "options_hi": ["कॉन्टेक्स्ट कैंसलेशन का उपयोग करें", "प्रॉपर चैनल क्लोजिंग", "गोरूटीन लाइफसाइकल मॉनिटर करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of the 'runtime.LockOSThread' function?",
        "question_hi": "'runtime.LockOSThread' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Bind goroutine to OS thread", "Prevent thread switching", "Required for CGO in some cases", "All of the above"],
        "options_hi": ["गोरूटीन को OS थ्रेड से बाइंड करना", "थ्रेड स्विचिंग रोकना", "कुछ केस में CGO के लिए रिक्वायर्ड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you implement a worker pool pattern in Go?",
        "question_hi": "Go में वर्कर पूल पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Channel for job queue", "Fixed number of goroutines", "WaitGroup for synchronization", "All of the above"],
        "options_hi": ["जॉब क्यू के लिए चैनल", "फिक्स्ड नंबर ऑफ गोरूटीन", "सिंक्रोनाइज़ेशन के लिए WaitGroup", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the difference between buffered and unbuffered channels in memory usage?",
        "question_hi": "मेमोरी यूसेज में बफर्ड और अनबफर्ड चैनल में क्या अंतर है?",
        "options_en": ["Buffered channels pre-allocate memory", "Unbuffered channels use less memory", "Buffered channels can cause memory leaks", "Both A and B"],
        "options_hi": ["बफर्ड चैनल प्री-अलोकेट मेमोरी", "अनबफर्ड चैनल कम मेमोरी यूज करते हैं", "बफर्ड चैनल मेमोरी लीक कर सकते हैं", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you implement circuit breaker pattern in Go?",
        "question_hi": "Go में सर्किट ब्रेकर पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Monitor failure rates", "State machine with open/half-open/closed states", "Timeout mechanisms", "All of the above"],
        "options_hi": ["फेल्योर रेट मॉनिटर करें", "ओपन/हाफ-ओपन/क्लोज्ड स्टेट के साथ स्टेट मशीन", "टाइमआउट मैकेनिज्म", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of 'runtime.ReadMemStats'?",
        "question_hi": "'runtime.ReadMemStats' का उद्देश्य क्या है?",
        "options_en": ["Get memory allocation statistics", "Monitor GC behavior", "Performance profiling", "All of the above"],
        "options_hi": ["मेमोरी अलोकेशन स्टैटिस्टिक्स प्राप्त करना", "GC बिहेवियर मॉनिटर करना", "परफॉर्मेंस प्रोफाइलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you implement graceful shutdown in HTTP servers?",
        "question_hi": "HTTP सर्वर में ग्रेसफुल शटडाउन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use http.Server.Shutdown()", "Context with timeout", "Wait for active connections", "All of the above"],
        "options_hi": ["http.Server.Shutdown() का उपयोग करें", "टाइमआउट के साथ कॉन्टेक्स्ट", "एक्टिव कनेक्शन का इंतज़ार करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the difference between deep copy and shallow copy in Go?",
        "question_hi": "Go में डीप कॉपी और शैलो कॉपी में क्या अंतर है?",
        "options_en": ["Deep copy duplicates all referenced objects", "Shallow copy shares references", "Deep copy is more expensive", "All of the above"],
        "options_hi": ["डीप कॉपी सभी रेफरेंस्ड ऑब्जेक्ट को डुप्लिकेट करती है", "शैलो कॉपी रेफरेंस शेयर करती है", "डीप कॉपी अधिक महंगी है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you implement custom JSON marshaling with validation?",
        "question_hi": "वैलिडेशन के साथ कस्टम JSON मार्शलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement json.Marshaler interface", "Add validation in MarshalJSON method", "Return error for invalid data", "All of the above"],
        "options_hi": ["json.Marshaler इंटरफेस इम्प्लीमेंट करें", "MarshalJSON मेथड में वैलिडेशन ऐड करें", "इनवैलिड डेटा के लिए एरर रिटर्न करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of 'sync.Pool' and when should it be used?",
        "question_hi": "'sync.Pool' का उद्देश्य क्या है और इसका उपयोग कब करना चाहिए?",
        "options_en": ["Reuse expensive objects", "Reduce GC pressure", "For frequently allocated objects", "All of the above"],
        "options_hi": ["महंगी ऑब्जेक्ट रीयूज करना", "GC प्रेशर कम करना", "फ्रिक्वेंटली अलोकेटेड ऑब्जेक्ट के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you implement rate limiting in Go microservices?",
        "question_hi": "Go माइक्रोसर्विसेज में रेट लिमिटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Token bucket algorithm", "Leaky bucket algorithm", "golang.org/x/time/rate package", "All of the above"],
        "options_hi": ["टोकन बकेट अल्गोरिदम", "लीकी बकेट अल्गोरिदम", "golang.org/x/time/rate पैकेज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the difference between interface{} and any in Go 1.18+?",
        "question_hi": "Go 1.18+ में interface{} और any में क्या अंतर है?",
        "options_en": ["They are identical", "any is alias for interface{}", "Both are empty interface types", "All of the above"],
        "options_hi": ["वे समान हैं", "any, interface{} का एलियास है", "दोनों एम्प्टी इंटरफेस टाइप हैं", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you implement generic functions with type constraints?",
        "question_hi": "टाइप कंस्ट्रेंट के साथ जेनरिक फंक्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use type parameters with constraints", "Define interface constraints", "Use comparable, ordered constraints", "All of the above"],
        "options_hi": ["कंस्ट्रेंट के साथ टाइप पैरामीटर का उपयोग करें", "इंटरफेस कंस्ट्रेंट डिफाइन करें", "comparable, ordered कंस्ट्रेंट का उपयोग करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of 'context.Context' in database transactions?",
        "question_hi": "डेटाबेस ट्रांजैक्शन में 'context.Context' का उद्देश्य क्या है?",
        "options_en": ["Cancellation propagation", "Timeout handling", "Request-scoped values", "All of the above"],
        "options_hi": ["कैंसलेशन प्रोपेगेशन", "टाइमआउट हैंडलिंग", "रिक्वेस्ट-स्कोप्ड वैल्यू", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you prevent memory fragmentation in long-running Go applications?",
        "question_hi": "लॉन्ग-रनिंग Go एप्लिकेशन में मेमोरी फ्रैगमेंटेशन कैसे प्रिवेंट करते हैं?",
        "options_en": ["Use object pools", "Avoid large allocations", "Monitor heap usage", "All of the above"],
        "options_hi": ["ऑब्जेक्ट पूल का उपयोग करें", "लार्ज अलोकेशन से बचें", "हीप यूसेज मॉनिटर करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the difference between 'make' and 'new' for slice allocation?",
        "question_hi": "स्लाइस अलोकेशन के लिए 'make' और 'new' में क्या अंतर है?",
        "options_en": ["make initializes slice with length/capacity", "new returns pointer to zeroed slice", "make is for reference types", "All of the above"],
        "options_hi": ["make लेंथ/कैपेसिटी के साथ स्लाइस इनिशियलाइज़ करता है", "new जीरोड स्लाइस का पॉइंटर रिटर्न करता है", "make रेफरेंस टाइप के लिए है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you implement distributed tracing in Go microservices?",
        "question_hi": "Go माइक्रोसर्विसेज में डिस्ट्रीब्यूटेड ट्रेसिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["OpenTelemetry SDK", "Context propagation with trace IDs", "Span creation and management", "All of the above"],
        "options_hi": ["OpenTelemetry SDK", "ट्रेस ID के साथ कॉन्टेक्स्ट प्रोपेगेशन", "स्पैन क्रिएशन और मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of 'runtime.Gosched'?",
        "question_hi": "'runtime.Gosched' का उद्देश्य क्या है?",
        "options_en": ["Yield processor to other goroutines", "Cooperative scheduling", "Prevent goroutine starvation", "All of the above"],
        "options_hi": ["प्रोसेसर को अन्य गोरूटीन को यील्ड करना", "कोऑपरेटिव शेड्यूलिंग", "गोरूटीन स्टार्वेशन रोकना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How do you implement backpressure in Go channels?",
        "question_hi": "Go चैनल में बैकप्रेशर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use buffered channels with size limits", "Monitor channel capacity", "Block producers when buffer full", "All of the above"],
        "options_hi": ["साइज लिमिट के साथ बफर्ड चैनल का उपयोग करें", "चैनल कैपेसिटी मॉनिटर करें", "बफर फुल होने पर प्रोड्यूसर ब्लॉक करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the difference between value and pointer receivers in method sets?",
        "question_hi": "मेथड सेट में वैल्यू और पॉइंटर रिसीवर में क्या अंतर है?",
        "options_en": ["Value receivers work on copies", "Pointer receivers can modify struct", "Method sets differ for interfaces", "All of the above"],
        "options_hi": ["वैल्यू रिसीवर कॉपी पर काम करते हैं", "पॉइंटर रिसीवर स्ट्रक्चर मॉडिफाई कर सकते हैं", "इंटरफेस के लिए मेथड सेट अलग होते हैं", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How do you implement custom error types with stack traces?",
        "question_hi": "स्टैक ट्रेस के साथ कस्टम एरर टाइप कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use github.com/pkg/errors", "Implement error interface with stack", "runtime.Caller for stack frames", "All of the above"],
        "options_hi": ["github.com/pkg/errors का उपयोग करें", "स्टैक के साथ एरर इंटरफेस इम्प्लीमेंट करें", "स्टैक फ्रेम के लिए runtime.Caller", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of 'sync.Cond' and when to use it?",
        "question_hi": "'sync.Cond' का उद्देश्य क्या है और इसका उपयोग कब करना चाहिए?",
        "options_en": ["Condition variable for goroutine signaling", "Broadcast to multiple waiters", "Complex synchronization scenarios", "All of the above"],
        "options_hi": ["गोरूटीन सिग्नलिंग के लिए कंडीशन वेरिएबल", "मल्टीपल वेटर को ब्रॉडकास्ट", "कॉम्प्लेक्स सिंक्रोनाइज़ेशन सीनारियो", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How do you implement connection pooling for databases?",
        "question_hi": "डेटाबेस के लिए कनेक्शन पूलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use database/sql built-in pooling", "Set MaxOpenConns, MaxIdleConns", "Connection health checks", "All of the above"],
        "options_hi": ["database/sql बिल्ट-इन पूलिंग का उपयोग करें", "MaxOpenConns, MaxIdleConns सेट करें", "कनेक्शन हेल्थ चेक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the difference between compile-time and runtime polymorphism in Go?",
        "question_hi": "Go में कंपाइल-टाइम और रनटाइम पॉलीमॉर्फिज्म में क्या अंतर है?",
        "options_en": ["Interfaces provide runtime polymorphism", "Generics provide compile-time polymorphism", "Both have different use cases", "All of the above"],
        "options_hi": ["इंटरफेस रनटाइम पॉलीमॉर्फिज्म प्रदान करते हैं", "जेनरिक कंपाइल-टाइम पॉलीमॉर्फिज्म प्रदान करते हैं", "दोनों के अलग-अलग यूज केस हैं", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you implement feature flags in Go applications?",
        "question_hi": "Go एप्लिकेशन में फीचर फ्लैग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Configuration management", "Environment variables", "Dynamic flag updates", "All of the above"],
        "options_hi": ["कॉन्फिगरेशन मैनेजमेंट", "एनवायरनमेंट वेरिएबल", "डायनामिक फ्लैग अपडेट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of 'unsafe.Sizeof' and 'unsafe.Alignof'?",
        "question_hi": "'unsafe.Sizeof' और 'unsafe.Alignof' का उद्देश्य क्या है?",
        "options_en": ["Get memory size of types", "Get memory alignment requirements", "Low-level memory optimization", "All of the above"],
        "options_hi": ["टाइप की मेमोरी साइज प्राप्त करना", "मेमोरी अलाइनमेंट रिक्वायरमेंट प्राप्त करना", "लो-लेवल मेमोरी ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you implement graceful degradation in microservices?",
        "question_hi": "माइक्रोसर्विसेज में ग्रेसफुल डिग्रेडेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Fallback mechanisms", "Circuit breakers", "Default responses", "All of the above"],
        "options_hi": ["फॉलबैक मैकेनिज्म", "सर्किट ब्रेकर", "डिफॉल्ट रिस्पांस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the difference between 'defer' and 'runtime.SetFinalizer'?",
        "question_hi": "'defer' और 'runtime.SetFinalizer' में क्या अंतर है?",
        "options_en": ["defer runs at function exit", "SetFinalizer runs at GC", "defer is deterministic", "All of the above"],
        "options_hi": ["defer फंक्शन एक्जिट पर रन होता है", "SetFinalizer GC पर रन होता है", "defer डिटरमिनिस्टिक है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you implement custom hash types for map keys?",
        "question_hi": "मैप की के लिए कस्टम हैश टाइप कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement hashCode and equals", "Define Key method for custom types", "Satisfy comparable constraint", "All of the above"],
        "options_hi": ["hashCode और equals इम्प्लीमेंट करें", "कस्टम टाइप के लिए Key मेथड डिफाइन करें", "comparable कंस्ट्रेंट को सैटिस्फाई करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of 'runtime.MemStats' fields?",
        "question_hi": "'runtime.MemStats' फील्ड का उद्देश्य क्या है?",
        "options_en": ["Monitor heap allocation", "Track GC statistics", "Memory usage analysis", "All of the above"],
        "options_hi": ["हीप अलोकेशन मॉनिटर करना", "GC स्टैटिस्टिक्स ट्रैक करना", "मेमोरी यूसेज एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do you implement distributed locks in Go?",
        "question_hi": "Go में डिस्ट्रीब्यूटेड लॉक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Redis with SETNX", "Etcd with lease mechanism", "Consensus algorithms", "All of the above"],
        "options_hi": ["SETNX के साथ Redis", "लीज मैकेनिज्म के साथ Etcd", "कंसेंसस अल्गोरिदम", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the difference between channel select and switch statements?",
        "question_hi": "चैनल select और switch स्टेटमेंट में क्या अंतर है?",
        "options_en": ["select works on channel operations", "switch works on values", "select can have default case", "All of the above"],
        "options_hi": ["select चैनल ऑपरेशन पर काम करता है", "switch वैल्यू पर काम करता है", "select में डिफॉल्ट केस हो सकता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How do you implement custom HTTP transport with connection pooling?",
        "question_hi": "कनेक्शन पूलिंग के साथ कस्टम HTTP ट्रांसपोर्ट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Custom http.RoundTripper", "Manage connection reuse", "Set timeouts and limits", "All of the above"],
        "options_hi": ["कस्टम http.RoundTripper", "कनेक्शन रीयूज मैनेज करें", "टाइमआउट और लिमिट सेट करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of 'runtime.Caller' and 'runtime.Callers'?",
        "question_hi": "'runtime.Caller' और 'runtime.Callers' का उद्देश्य क्या है?",
        "options_en": ["Get call stack information", "Debugging and logging", "Stack trace generation", "All of the above"],
        "options_hi": ["कॉल स्टैक इनफार्मेशन प्राप्त करना", "डिबगिंग और लॉगिंग", "स्टैक ट्रेस जनरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How do you implement zero-downtime deployments in Go?",
        "question_hi": "Go में जीरो-डाउनटाइम डिप्लॉयमेंट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Graceful shutdown", "Health checks", "Load balancer coordination", "All of the above"],
        "options_hi": ["ग्रेसफुल शटडाउन", "हेल्थ चेक", "लोड बैलेंसर कोऑर्डिनेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the difference between sync.Map and regular map with mutex?",
        "question_hi": "sync.Map और म्यूटेक्स के साथ रेगुलर मैप में क्या अंतर है?",
        "options_en": ["sync.Map optimized for specific use cases", "Regular map more general purpose", "sync.Map better for read-heavy", "All of the above"],
        "options_hi": ["sync.Map स्पेसिफिक यूज केस के लिए ऑप्टिमाइज़्ड", "रेगुलर मैप अधिक जनरल पर्पस", "रीड-हेवी के लिए sync.Map बेहतर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How do you implement content negotiation in HTTP handlers?",
        "question_hi": "HTTP हैंडलर में कंटेंट नेगोशिएशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Parse Accept header", "Support multiple content types", "Default to JSON", "All of the above"],
        "options_hi": ["Accept हेडर पार्स करें", "मल्टीपल कंटेंट टाइप सपोर्ट करें", "JSON को डिफॉल्ट करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of 'runtime.NumGoroutine'?",
        "question_hi": "'runtime.NumGoroutine' का उद्देश्य क्या है?",
        "options_en": ["Get current number of goroutines", "Monitor goroutine leaks", "Performance monitoring", "All of the above"],
        "options_hi": ["करंट नंबर ऑफ गोरूटीन प्राप्त करना", "गोरूटीन लीक मॉनिटर करना", "परफॉर्मेंस मॉनिटरिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How do you implement request deduplication in Go?",
        "question_hi": "Go में रिक्वेस्ट डीडुप्लिकेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use request ID caching", "sync.Once for identical requests", "Deduplication middleware", "All of the above"],
        "options_hi": ["रिक्वेस्ट ID कैशिंग का उपयोग करें", "समान रिक्वेस्ट के लिए sync.Once", "डीडुप्लिकेशन मिडलवेयर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the difference between heap and stack allocation in Go?",
        "question_hi": "Go में हीप और स्टैक अलोकेशन में क्या अंतर है?",
        "options_en": ["Stack for local variables", "Heap for escaped variables", "Escape analysis determines", "All of the above"],
        "options_hi": ["लोकल वेरिएबल के लिए स्टैक", "एस्केप्ड वेरिएबल के लिए हीप", "एस्केप एनालिसिस डिटरमाइन करता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How do you implement custom middleware chains?",
        "question_hi": "कस्टम मिडलवेयर चेन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Function composition", "Handler wrappers", "Order matters in chain", "All of the above"],
        "options_hi": ["फंक्शन कम्पोजिशन", "हैंडलर रैपर", "चेन में ऑर्डर मैटर करता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of 'context.WithDeadline' vs 'context.WithTimeout'?",
        "question_hi": "'context.WithDeadline' vs 'context.WithTimeout' का उद्देश्य क्या है?",
        "options_en": ["WithDeadline uses absolute time", "WithTimeout uses relative duration", "Both provide cancellation", "All of the above"],
        "options_hi": ["WithDeadline एब्सोल्यूट टाइम का उपयोग करता है", "WithTimeout रिलेटिव ड्यूरेशन का उपयोग करता है", "दोनों कैंसलेशन प्रदान करते हैं", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you implement request timeouts at different levels?",
        "question_hi": "अलग-अलग लेवल पर रिक्वेस्ट टाइमआउट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Context timeouts", "HTTP server timeouts", "Database query timeouts", "All of the above"],
        "options_hi": ["कॉन्टेक्स्ट टाइमआउट", "HTTP सर्वर टाइमआउट", "डेटाबेस क्वेरी टाइमआउट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the difference between shallow and deep equal for struct comparison?",
        "question_hi": "स्ट्रक्चर कम्पेयरिजन के लिए शैलो और डीप इक्वल में क्या अंतर है?",
        "options_en": ["Shallow compares references", "Deep compares values", "reflect.DeepEqual for deep comparison", "All of the above"],
        "options_hi": ["शैलो रेफरेंस कम्पेयर करता है", "डीप वैल्यू कम्पेयर करता है", "डीप कम्पेयरिजन के लिए reflect.DeepEqual", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you implement custom sorting with multiple fields?",
        "question_hi": "मल्टीपल फील्ड के साथ कस्टम सॉर्टिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement sort.Interface", "Compare primary then secondary fields", "Use sort.Slice with custom less", "All of the above"],
        "options_hi": ["sort.Interface इम्प्लीमेंट करें", "प्राइमरी फिर सेकेंडरी फील्ड कम्पेयर करें", "कस्टम लेस के साथ sort.Slice का उपयोग करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of 'runtime.GOMAXPROCS'?",
        "question_hi": "'runtime.GOMAXPROCS' का उद्देश्य क्या है?",
        "options_en": ["Set maximum CPU cores used", "Control parallelism", "Affect scheduler behavior", "All of the above"],
        "options_hi": ["उपयोग किए गए मैक्सिमम CPU कोर सेट करना", "पैरेललिज्म कंट्रोल करना", "शेड्यूलर बिहेवियर प्रभावित करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How do you implement retry mechanisms with exponential backoff?",
        "question_hi": "एक्सपोनेंशियल बैकऑफ के साथ रिट्री मैकेनिज्म कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Progressively increasing delays", "Jitter to avoid thundering herd", "Maximum retry limits", "All of the above"],
        "options_hi": ["प्रोग्रेसिवली इनक्रीजिंग डिले", "थंडरिंग हर्ड से बचने के लिए जिटर", "मैक्सिमम रिट्री लिमिट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the difference between sync.Once and init() function?",
        "question_hi": "sync.Once और init() फंक्शन में क्या अंतर है?",
        "options_en": ["init runs at package initialization", "sync.Once runs on first call", "sync.Once is lazy initialization", "All of the above"],
        "options_hi": ["init पैकेज इनिशियलाइज़ेशन पर रन होता है", "sync.Once पहली कॉल पर रन होता है", "sync.Once लेजी इनिशियलाइज़ेशन है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you implement custom protocol handlers?",
        "question_hi": "कस्टम प्रोटोकॉल हैंडलर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement net.Listener interface", "Custom transport layers", "Protocol-specific parsing", "All of the above"],
        "options_hi": ["net.Listener इंटरफेस इम्प्लीमेंट करें", "कस्टम ट्रांसपोर्ट लेयर", "प्रोटोकॉल-स्पेसिफिक पार्सिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of 'reflect.MakeFunc'?",
        "question_hi": "'reflect.MakeFunc' का उद्देश्य क्या है?",
        "options_en": ["Create functions at runtime", "Dynamic function generation", "Proxy and middleware patterns", "All of the above"],
        "options_hi": ["रनटाइम पर फंक्शन बनाना", "डायनामिक फंक्शन जनरेशन", "प्रॉक्सी और मिडलवेयर पैटर्न", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you implement memory-mapped files in Go?",
        "question_hi": "Go में मेमोरी-मैप्ड फाइल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use os package with mmap", "Third-party mmap libraries", "Direct memory access to files", "All of the above"],
        "options_hi": ["mmap के साथ os पैकेज का उपयोग करें", "थर्ड-पार्टी mmap लाइब्रेरी", "फाइल को डायरेक्ट मेमोरी एक्सेस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the difference between blocking and non-blocking channel operations?",
        "question_hi": "ब्लॉकिंग और नॉन-ब्लॉकिंग चैनल ऑपरेशन में क्या अंतर है?",
        "options_en": ["Blocking waits for operation", "Non-blocking returns immediately", "select with default for non-blocking", "All of the above"],
        "options_hi": ["ब्लॉकिंग ऑपरेशन का इंतज़ार करता है", "नॉन-ब्लॉकिंग तुरंत रिटर्न करता है", "नॉन-ब्लॉकिंग के लिए डिफॉल्ट के साथ select", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How do you implement custom error types with sentinel errors?",
        "question_hi": "सेंटिनल एरर के साथ कस्टम एरर टाइप कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Define exported error variables", "Use errors.Is for checking", "Wrap with additional context", "All of the above"],
        "options_hi": ["एक्सपोर्टेड एरर वेरिएबल डिफाइन करें", "चेकिंग के लिए errors.Is का उपयोग करें", "एडिशनल कॉन्टेक्स्ट के साथ रैप करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of 'runtime.SetBlockProfileRate'?",
        "question_hi": "'runtime.SetBlockProfileRate' का उद्देश्य क्या है?",
        "options_en": ["Enable blocking profiling", "Track goroutine blocking", "Performance analysis", "All of the above"],
        "options_hi": ["ब्लॉकिंग प्रोफाइलिंग एनेबल करना", "गोरूटीन ब्लॉकिंग ट्रैक करना", "परफॉर्मेंस एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you implement distributed caching in Go?",
        "question_hi": "Go में डिस्ट्रीब्यूटेड कैशिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Redis client libraries", "Consistent hashing", "Cache invalidation strategies", "All of the above"],
        "options_hi": ["Redis क्लाइंट लाइब्रेरी", "कंसिस्टेंट हैशिंग", "कैश इनवैलिडेशन स्ट्रैटेजी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the difference between value and pointer method receivers for interfaces?",
        "question_hi": "इंटरफेस के लिए वैल्यू और पॉइंटर मेथड रिसीवर में क्या अंतर है?",
        "options_en": ["Value receivers work on values and pointers", "Pointer receivers only work on pointers", "Affects method set satisfaction", "All of the above"],
        "options_hi": ["वैल्यू रिसीवर वैल्यू और पॉइंटर पर काम करते हैं", "पॉइंटर रिसीवर केवल पॉइंटर पर काम करते हैं", "मेथड सेट सैटिस्फैक्शन प्रभावित करता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How do you implement custom unmarshaling with validation?",
        "question_hi": "वैलिडेशन के साथ कस्टम अनमार्शलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement json.Unmarshaler interface", "Add validation in UnmarshalJSON", "Return error for invalid data", "All of the above"],
        "options_hi": ["json.Unmarshaler इंटरफेस इम्प्लीमेंट करें", "UnmarshalJSON में वैलिडेशन ऐड करें", "इनवैलिड डेटा के लिए एरर रिटर्न करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of 'runtime.Stack'?",
        "question_hi": "'runtime.Stack' का उद्देश्य क्या है?",
        "options_en": ["Get current goroutine stack", "Debugging deadlocks", "Stack trace analysis", "All of the above"],
        "options_hi": ["करंट गोरूटीन स्टैक प्राप्त करना", "डेडलॉक डिबगिंग", "स्टैक ट्रेस एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How do you implement request context propagation across services?",
        "question_hi": "सर्विसेज के बीच रिक्वेस्ट कॉन्टेक्स्ट प्रोपेगेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["HTTP headers for context values", "Trace ID propagation", "Context serialization", "All of the above"],
        "options_hi": ["कॉन्टेक्स्ट वैल्यू के लिए HTTP हेडर", "ट्रेस ID प्रोपेगेशन", "कॉन्टेक्स्ट सीरियलाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the difference between sync.WaitGroup and errgroup.Group?",
        "question_hi": "sync.WaitGroup और errgroup.Group में क्या अंतर है?",
        "options_en": ["errgroup handles errors", "WaitGroup only waits", "errgroup provides context", "All of the above"],
        "options_hi": ["errgroup एरर हैंडल करता है", "WaitGroup केवल इंतज़ार करता है", "errgroup कॉन्टेक्स्ट प्रदान करता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How do you implement custom HTTP/2 server push?",
        "question_hi": "कस्टम HTTP/2 सर्वर पुश कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use http.Pusher interface", "Push resources proactively", "Browser support dependent", "All of the above"],
        "options_hi": ["http.Pusher इंटरफेस का उपयोग करें", "प्रोएक्टिवली रिसोर्स पुश करें", "ब्राउज़र सपोर्ट डिपेंडेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of 'reflect.ChanOf'?",
        "question_hi": "'reflect.ChanOf' का उद्देश्य क्या है?",
        "options_en": ["Create channel types at runtime", "Dynamic channel creation", "Reflection-based channel operations", "All of the above"],
        "options_hi": ["रनटाइम पर चैनल टाइप बनाना", "डायनामिक चैनल क्रिएशन", "रिफ्लेक्शन-बेस्ड चैनल ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you implement connection draining in load balancers?",
        "question_hi": "लोड बैलेंसर में कनेक्शन ड्रेनिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Stop accepting new connections", "Wait for existing to complete", "Health check failures", "All of the above"],
        "options_hi": ["नए कनेक्शन स्वीकार करना बंद करें", "मौजूदा कनेक्शन के पूरा होने का इंतज़ार करें", "हेल्थ चेक फेल्योर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the difference between compile-time and runtime code generation?",
        "question_hi": "कंपाइल-टाइम और रनटाइम कोड जनरेशन में क्या अंतर है?",
        "options_en": ["go generate for compile-time", "reflect for runtime", "Different use cases", "All of the above"],
        "options_hi": ["कंपाइल-टाइम के लिए go generate", "रनटाइम के लिए reflect", "अलग-अलग यूज केस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How do you implement custom metric collection?",
        "question_hi": "कस्टम मेट्रिक कलेक्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Prometheus client libraries", "Custom metric types", "Exposition formats", "All of the above"],
        "options_hi": ["प्रोमेथियस क्लाइंट लाइब्रेरी", "कस्टम मेट्रिक टाइप", "एक्सपोजिशन फॉर्मेट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of 'runtime.FuncForPC'?",
        "question_hi": "'runtime.FuncForPC' का उद्देश्य क्या है?",
        "options_en": ["Get function information from program counter", "Stack trace analysis", "Function name and file lookup", "All of the above"],
        "options_hi": ["प्रोग्राम काउंटर से फंक्शन इनफार्मेशन प्राप्त करना", "स्टैक ट्रेस एनालिसिस", "फंक्शन नेम और फाइल लुकअप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How do you implement custom transport with HTTP/2 prioritization?",
        "question_hi": "HTTP/2 प्रायोरिटाइज़ेशन के साथ कस्टम ट्रांसपोर्ट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Custom http2.Transport", "Stream prioritization", "Flow control management", "All of the above"],
        "options_hi": ["कस्टम http2.Transport", "स्ट्रीम प्रायोरिटाइज़ेशन", "फ्लो कंट्रोल मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the difference between batching and streaming in API design?",
        "question_hi": "API डिजाइन में बैचिंग और स्ट्रीमिंग में क्या अंतर है?",
        "options_en": ["Batching processes groups", "Streaming processes continuously", "Different latency characteristics", "All of the above"],
        "options_hi": ["बैचिंग ग्रुप प्रोसेस करती है", "स्ट्रीमिंग कंटीन्यूअसली प्रोसेस करती है", "अलग-अलग लेटेंसी कैरेक्टरिस्टिक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How do you implement custom compression algorithms?",
        "question_hi": "कस्टम कम्प्रेशन अल्गोरिदम कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement compress/flate interfaces", "Custom reader/writer", "Integration with HTTP", "All of the above"],
        "options_hi": ["compress/flate इंटरफेस इम्प्लीमेंट करें", "कस्टम रीडर/राइटर", "HTTP के साथ इंटीग्रेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of 'runtime.SetCPUProfileRate'?",
        "question_hi": "'runtime.SetCPUProfileRate' का उद्देश्य क्या है?",
        "options_en": ["Set CPU profiling frequency", "Control profiling overhead", "Balance detail vs performance", "All of the above"],
        "options_hi": ["CPU प्रोफाइलिंग फ्रिक्वेंसी सेट करना", "प्रोफाइलिंग ओवरहेड कंट्रोल करना", "डिटेल vs परफॉर्मेंस बैलेंस करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How do you implement custom DNS resolution?",
        "question_hi": "कस्टम DNS रेजोल्यूशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Custom net.Resolver", "Override default DNS", "Load balancing strategies", "All of the above"],
        "options_hi": ["कस्टम net.Resolver", "डिफॉल्ट DNS ओवरराइड करना", "लोड बैलेंसिंग स्ट्रैटेजी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the difference between panic/recover and error handling?",
        "question_hi": "panic/recover और एरर हैंडलिंग में क्या अंतर है?",
        "options_en": ["panic for exceptional conditions", "errors for expected failures", "recover only in defer", "All of the above"],
        "options_hi": ["एक्सेप्शनल कंडीशन के लिए panic", "एक्सपेक्टेड फेल्योर के लिए errors", "केवल defer में recover", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How do you implement custom logging with structured context?",
        "question_hi": "स्ट्रक्चर्ड कॉन्टेक्स्ट के साथ कस्टम लॉगिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use log/slog package", "Structured logging fields", "Contextual information", "All of the above"],
        "options_hi": ["log/slog पैकेज का उपयोग करें", "स्ट्रक्चर्ड लॉगिंग फील्ड", "कॉन्टेक्स्चुअल इनफार्मेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of 'runtime.GC'?",
        "question_hi": "'runtime.GC' का उद्देश्य क्या है?",
        "options_en": ["Trigger garbage collection", "Manual GC invocation", "Memory management control", "All of the above"],
        "options_hi": ["गार्बेज कलेक्शन ट्रिगर करना", "मैन्युअल GC इनवोकेशन", "मेमोरी मैनेजमेंट कंट्रोल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How do you implement custom serialization formats?",
        "question_hi": "कस्टम सीरियलाइज़ेशन फॉर्मेट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement encoding.BinaryMarshaler", "Custom byte encoding", "Integration with protocols", "All of the above"],
        "options_hi": ["encoding.BinaryMarshaler इम्प्लीमेंट करें", "कस्टम बाइट एन्कोडिंग", "प्रोटोकॉल के साथ इंटीग्रेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the difference between mutex and semaphore?",
        "question_hi": "म्यूटेक्स और सेमाफोर में क्या अंतर है?",
        "options_en": ["Mutex allows one goroutine", "Semaphore allows N goroutines", "Different synchronization primitives", "All of the above"],
        "options_hi": ["म्यूटेक्स एक गोरूटीन की अनुमति देता है", "सेमाफोर N गोरूटीन की अनुमति देता है", "अलग-अलग सिंक्रोनाइज़ेशन प्रिमिटिव", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How do you implement custom health check endpoints?",
        "question_hi": "कस्टम हेल्थ चेक एंडपॉइंट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Separate HTTP endpoint", "Database connectivity checks", "External dependency verification", "All of the above"],
        "options_hi": ["अलग HTTP एंडपॉइंट", "डेटाबेस कनेक्टिविटी चेक", "एक्सटर्नल डिपेंडेंसी वेरिफिकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of 'reflect.Swapper'?",
        "question_hi": "'reflect.Swapper' का उद्देश्य क्या है?",
        "options_en": ["Swap slice elements efficiently", "Generic swap function", "Reflection-based operations", "All of the above"],
        "options_hi": ["स्लाइस एलिमेंट एफिशिएंटली स्वैप करना", "जेनरिक स्वैप फंक्शन", "रिफ्लेक्शन-बेस्ड ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How do you implement custom authentication middleware?",
        "question_hi": "कस्टम ऑथेंटिकेशन मिडलवेयर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["JWT token validation", "API key authentication", "OAuth2 integration", "All of the above"],
        "options_hi": ["JWT टोकन वैलिडेशन", "API की ऑथेंटिकेशन", "OAuth2 इंटीग्रेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the difference between TCP and UDP socket handling?",
        "question_hi": "TCP और UDP सॉकेट हैंडलिंग में क्या अंतर है?",
        "options_en": ["TCP is connection-oriented", "UDP is connectionless", "Different reliability guarantees", "All of the above"],
        "options_hi": ["TCP कनेक्शन-ओरिएंटेड है", "UDP कनेक्शनलेस है", "अलग-अलग रिलायबिलिटी गारंटी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you implement custom protocol buffers?",
        "question_hi": "कस्टम प्रोटोकॉल बफर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use google.golang.org/protobuf", "Define .proto files", "Generate Go code", "All of the above"],
        "options_hi": ["google.golang.org/protobuf का उपयोग करें", ".proto फाइल डिफाइन करें", "Go कोड जनरेट करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of 'runtime.KeepAlive'?",
        "question_hi": "'runtime.KeepAlive' का उद्देश्य क्या है?",
        "options_en": ["Prevent premature garbage collection", "Extend object lifetime", "unsafe.Pointer safety", "All of the above"],
        "options_hi": ["प्रीमेच्योर गार्बेज कलेक्शन रोकना", "ऑब्जेक्ट लाइफटाइम एक्सटेंड करना", "unsafe.Pointer सेफ्टी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you implement custom load balancing algorithms?",
        "question_hi": "कस्टम लोड बैलेंसिंग अल्गोरिदम कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Round-robin, least connections", "Health-based routing", "Custom selection logic", "All of the above"],
        "options_hi": ["राउंड-रॉबिन, लीस्ट कनेक्शन", "हेल्थ-बेस्ड रूटिंग", "कस्टम सिलेक्शन लॉजिक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the difference between blocking and non-blocking I/O?",
        "question_hi": "ब्लॉकिंग और नॉन-ब्लॉकिंग I/O में क्या अंतर है?",
        "options_en": ["Blocking waits for operation completion", "Non-blocking returns immediately", "Different concurrency models", "All of the above"],
        "options_hi": ["ब्लॉकिंग ऑपरेशन कम्पलीशन का इंतज़ार करता है", "नॉन-ब्लॉकिंग तुरंत रिटर्न करता है", "अलग-अलग कंकरेंसी मॉडल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How do you implement custom session management?",
        "question_hi": "कस्टम सेशन मैनेजमेंट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Cookie-based sessions", "JWT tokens", "Server-side storage", "All of the above"],
        "options_hi": ["कुकी-बेस्ड सेशन", "JWT टोकन", "सर्वर-साइड स्टोरेज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of 'runtime.SetMutexProfileFraction'?",
        "question_hi": "'runtime.SetMutexProfileFraction' का उद्देश्य क्या है?",
        "options_en": ["Enable mutex contention profiling", "Track lock contention", "Performance analysis", "All of the above"],
        "options_hi": ["म्यूटेक्स कॉन्टेंशन प्रोफाइलिंग एनेबल करना", "लॉक कॉन्टेंशन ट्रैक करना", "परफॉर्मेंस एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you implement custom caching strategies?",
        "question_hi": "कस्टम कैशिंग स्ट्रैटेजी कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["LRU, LFU eviction policies", "Time-based expiration", "Write-through vs write-back", "All of the above"],
        "options_hi": ["LRU, LFU एविक्शन पॉलिसी", "टाइम-बेस्ड एक्सपायरेशन", "राइट-थ्रू vs राइट-बैक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the difference between process and goroutine?",
        "question_hi": "प्रोसेस और गोरूटीन में क्या अंतर है?",
        "options_en": ["Process has separate memory space", "Goroutines share memory", "Different scheduling", "All of the above"],
        "options_hi": ["प्रोसेस का अलग मेमोरी स्पेस होता है", "गोरूटीन मेमोरी शेयर करती हैं", "अलग-अलग शेड्यूलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you implement custom file format parsers?",
        "question_hi": "कस्टम फाइल फॉर्मेट पार्सर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Byte-level parsing", "Struct unmarshaling", "Validation and error handling", "All of the above"],
        "options_hi": ["बाइट-लेवल पार्सिंग", "स्ट्रक्चर अनमार्शलिंग", "वैलिडेशन और एरर हैंडलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of 'runtime.StartTrace' and 'runtime.StopTrace'?",
        "question_hi": "'runtime.StartTrace' और 'runtime.StopTrace' का उद्देश्य क्या है?",
        "options_en": ["Enable execution tracing", "Capture runtime events", "Performance analysis", "All of the above"],
        "options_hi": ["एक्जिक्यूशन ट्रेसिंग एनेबल करना", "रनटाइम इवेंट कैप्चर करना", "परफॉर्मेंस एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How do you implement custom network protocols?",
        "question_hi": "कस्टम नेटवर्क प्रोटोकॉल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Raw socket programming", "Protocol message formats", "Connection management", "All of the above"],
        "options_hi": ["रॉ सॉकेट प्रोग्रामिंग", "प्रोटोकॉल मैसेज फॉर्मेट", "कनेक्शन मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the difference between synchronous and asynchronous processing?",
        "question_hi": "सिंक्रोनस और एसिंक्रोनस प्रोसेसिंग में क्या अंतर है?",
        "options_en": ["Synchronous blocks caller", "Asynchronous returns immediately", "Different concurrency patterns", "All of the above"],
        "options_hi": ["सिंक्रोनस कॉलर को ब्लॉक करता है", "एसिंक्रोनस तुरंत रिटर्न करता है", "अलग-अलग कंकरेंसी पैटर्न", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do you implement custom database drivers?",
        "question_hi": "कस्टम डेटाबेस ड्राइवर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement database/sql/driver interfaces", "Connection pooling", "Query execution", "All of the above"],
        "options_hi": ["database/sql/driver इंटरफेस इम्प्लीमेंट करें", "कनेक्शन पूलिंग", "क्वेरी एक्जिक्यूशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of 'runtime.GOROOT' and 'runtime.GOOS'?",
        "question_hi": "'runtime.GOROOT' और 'runtime.GOOS' का उद्देश्य क्या है?",
        "options_en": ["GOROOT is Go installation path", "GOOS is operating system", "Build condition information", "All of the above"],
        "options_hi": ["GOROOT Go इंस्टालेशन पाथ है", "GOOS ऑपरेटिंग सिस्टम है", "बिल्ड कंडीशन इनफार्मेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How do you implement custom build tags and constraints?",
        "question_hi": "कस्टम बिल्ड टैग और कंस्ट्रेंट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["//go:build comments", "File naming conventions", "Conditional compilation", "All of the above"],
        "options_hi": ["//go:build कमेंट", "फाइल नेमिंग कन्वेंशन", "कंडीशनल कंपाइलेशन", "उपरोक्त सभी"],
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