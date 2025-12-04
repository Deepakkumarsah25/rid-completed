const questions=[
    {
        "num": 1,
        "question_en": "What is the purpose of the 'runtime.SetFinalizer' function?",
        "question_hi": "'runtime.SetFinalizer' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Register finalizer function for garbage collection", "Set object destructor", "Force garbage collection", "Manage memory manually"],
        "options_hi": ["गार्बेज कलेक्शन के लिए फाइनलाइज़र फंक्शन रजिस्टर करना", "ऑब्जेक्ट डिस्ट्रक्टर सेट करना", "गार्बेज कलेक्शन फोर्स करना", "मेमोरी मैन्युअली मैनेज करना"],
        "answer_en": "Register finalizer function for garbage collection",
        "answer_hi": "गार्बेज कलेक्शन के लिए फाइनलाइज़र फंक्शन रजिस्टर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How do you implement lock-free data structures using atomic operations?",
        "question_hi": "एटॉमिक ऑपरेशन का उपयोग करके लॉक-फ्री डेटा स्ट्रक्चर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sync/atomic package with CAS operations", "With mutex-free programming", "Using channel-based synchronization", "With runtime locks"],
        "options_hi": ["CAS ऑपरेशन के साथ sync/atomic पैकेज का उपयोग करके", "म्यूटेक्स-फ्री प्रोग्रामिंग के साथ", "चैनल-बेस्ड सिंक्रोनाइज़ेशन का उपयोग करके", "रनटाइम लॉक के साथ"],
        "answer_en": "Using sync/atomic package with CAS operations",
        "answer_hi": "CAS ऑपरेशन के साथ sync/atomic पैकेज का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the purpose of the 'unsafe.Alignof' function?",
        "question_hi": "'unsafe.Alignof' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get alignment requirement of a type", "Check memory alignment", "Align memory addresses", "Calculate padding bytes"],
        "options_hi": ["टाइप की अलाइनमेंट रिक्वायरमेंट प्राप्त करना", "मेमोरी अलाइनमेंट चेक करना", "मेमोरी एड्रेस अलाइन करना", "पैडिंग बाइट कैलकुलेट करना"],
        "answer_en": "Get alignment requirement of a type",
        "answer_hi": "टाइप की अलाइनमेंट रिक्वायरमेंट प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you implement a read-preferring RW mutex?",
        "question_hi": "रीड-प्रेफरिंग RW म्यूटेक्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sync.RWMutex with reader count", "With custom implementation using sync.Cond", "Using atomic operations for reader preference", "All of the above"],
        "options_hi": ["रीडर काउंट के साथ sync.RWMutex का उपयोग करके", "sync.Cond का उपयोग करके कस्टम इम्प्लीमेंटेशन के साथ", "रीडर प्रेफरेंस के लिए एटॉमिक ऑपरेशन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of the 'runtime.ReadMemStats' function?",
        "question_hi": "'runtime.ReadMemStats' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Read memory statistics and GC information", "Monitor heap usage", "Profile memory allocation", "All of the above"],
        "options_hi": ["मेमोरी स्टैटिस्टिक्स और GC इनफार्मेशन रीड करना", "हीप यूसेज मॉनिटर करना", "मेमोरी अलोकेशन प्रोफाइल करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you implement zero-copy I/O using syscall package?",
        "question_hi": "syscall पैकेज का उपयोग करके जीरो-कॉपी I/O कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sendfile system call", "With splice and tee operations", "Using memory mapping", "All of the above"],
        "options_hi": ["sendfile सिस्टम कॉल का उपयोग करके", "splice और tee ऑपरेशन के साथ", "मेमोरी मैपिंग का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of the 'reflect.ChanDir' type?",
        "question_hi": "'reflect.ChanDir' टाइप का उद्देश्य क्या है?",
        "options_en": ["Represent channel direction in reflection", "Create channel directions", "Check channel capabilities", "Modify channel behavior"],
        "options_hi": ["रिफ्लेक्शन में चैनल डायरेक्शन रिप्रेजेंट करना", "चैनल डायरेक्शन बनाना", "चैनल कैपेबिलिटी चेक करना", "चैनल बिहेवियर मोडिफाई करना"],
        "answer_en": "Represent channel direction in reflection",
        "answer_hi": "रिफ्लेक्शन में चैनल डायरेक्शन रिप्रेजेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you implement custom garbage collection behavior?",
        "question_hi": "कस्टम गार्बेज कलेक्शन बिहेवियर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using runtime.SetFinalizer", "With manual memory management", "Implementing object pools", "All of the above"],
        "options_hi": ["runtime.SetFinalizer का उपयोग करके", "मैनुअल मेमोरी मैनेजमेंट के साथ", "ऑब्जेक्ट पूल इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of the 'context.WithTimeoutCause' function?",
        "question_hi": "'context.WithTimeoutCause' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Create context with timeout and custom cause", "Set timeout with specific error", "Custom timeout handling", "All of the above"],
        "options_hi": ["टाइमआउट और कस्टम कॉज के साथ कॉन्टेक्स्ट बनाना", "स्पेसिफिक एरर के साथ टाइमआउट सेट करना", "कस्टम टाइमआउट हैंडलिंग", "उपरोक्त सभी"],
        "answer_en": "Create context with timeout and custom cause",
        "answer_hi": "टाइमआउट और कस्टम कॉज के साथ कॉन्टेक्स्ट बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you implement efficient object pooling?",
        "question_hi": "एफिशिएंट ऑब्जेक्ट पूलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sync.Pool with proper reset logic", "With manual allocation tracking", "Implementing free lists", "All of the above"],
        "options_hi": ["प्रॉपर रीसेट लॉजिक के साथ sync.Pool का उपयोग करके", "मैनुअल अलोकेशन ट्रैकिंग के साथ", "फ्री लिस्ट इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of the 'runtime.GOMAXPROCS' function?",
        "question_hi": "'runtime.GOMAXPROCS' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Set maximum number of CPUs for Go routines", "Control parallelism", "Limit concurrent execution", "All of the above"],
        "options_hi": ["गो रूटीन के लिए मैक्सिमम CPU नंबर सेट करना", "पैरेललिज्म कंट्रोल करना", "कनकरेंट एक्सेक्यूशन लिमिट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you implement lock-free ring buffer?",
        "question_hi": "लॉक-फ्री रिंग बफर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using atomic operations for head/tail pointers", "With CAS-based algorithms", "Memory barriers for consistency", "All of the above"],
        "options_hi": ["हेड/टेल पॉइंटर के लिए एटॉमिक ऑपरेशन का उपयोग करके", "CAS-बेस्ड एल्गोरिदम के साथ", "कंसिस्टेंसी के लिए मेमोरी बैरियर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of the 'reflect.MakeFunc' function?",
        "question_hi": "'reflect.MakeFunc' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Create new function at runtime", "Dynamic function generation", "Implement function proxies", "All of the above"],
        "options_hi": ["रनटाइम पर नया फंक्शन बनाना", "डायनामिक फंक्शन जनरेशन", "फंक्शन प्रॉक्सी इम्प्लीमेंट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you implement efficient string concatenation?",
        "question_hi": "एफिशिएंट स्ट्रिंग कॉन्कटेनेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using strings.Builder for multiple appends", "With bytes.Buffer and string conversion", "Pre-allocate with make([]byte, size)", "All of the above"],
        "options_hi": ["मल्टीपल ऐपेंड के लिए strings.Builder का उपयोग करके", "bytes.Buffer और स्ट्रिंग कन्वर्जन के साथ", "make([]byte, size) के साथ प्री-अलोकेट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of the 'runtime.Caller' function?",
        "question_hi": "'runtime.Caller' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get caller's program counter and file info", "Stack trace inspection", "Debug information", "All of the above"],
        "options_hi": ["कॉलर का प्रोग्राम काउंटर और फाइल इनफो प्राप्त करना", "स्टैक ट्रेस इंस्पेक्शन", "डीबग इनफार्मेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you implement custom memory allocator?",
        "question_hi": "कस्टम मेमोरी अलोकेटर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using unsafe.Pointer and manual management", "With arena-based allocation", "Implementing slab allocator", "All of the above"],
        "options_hi": ["unsafe.Pointer और मैनुअल मैनेजमेंट का उपयोग करके", "एरिना-बेस्ड अलोकेशन के साथ", "स्लैब अलोकेटर इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of the 'sync.Once' type?",
        "question_hi": "'sync.Once' टाइप का उद्देश्य क्या है?",
        "options_en": ["Ensure function executes only once", "Thread-safe initialization", "Lazy initialization pattern", "All of the above"],
        "options_hi": ["फंक्शन केवल एक बार एक्सेक्यूट हो यह सुनिश्चित करना", "थ्रेड-सेफ इनिशियलाइज़ेशन", "लेज़ी इनिशियलाइज़ेशन पैटर्न", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you implement backpressure in channel pipelines?",
        "question_hi": "चैनल पाइपलाइन में बैकप्रेशर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using buffered channels with size limits", "With select and default cases", "Implementing token bucket", "All of the above"],
        "options_hi": ["साइज लिमिट के साथ बफर्ड चैनल का उपयोग करके", "select और default केस के साथ", "टोकन बकेट इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of the 'runtime.FuncForPC' function?",
        "question_hi": "'runtime.FuncForPC' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get function information from program counter", "Function metadata lookup", "Debug symbol resolution", "All of the above"],
        "options_hi": ["प्रोग्राम काउंटर से फंक्शन इनफार्मेशन प्राप्त करना", "फंक्शन मेटाडेटा लुकअप", "डीबग सिंबल रेजोल्यूशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you implement efficient concurrent maps?",
        "question_hi": "एफिशिएंट कनकरेंट मैप कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sync.Map for read-heavy workloads", "With sharded mutex-protected maps", "Implementing lock-free hash tables", "All of the above"],
        "options_hi": ["रीड-हैवी वर्कलोड के लिए sync.Map का उपयोग करके", "शार्डेड म्यूटेक्स-प्रोटेक्टेड मैप के साथ", "लॉक-फ्री हैश टेबल इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of the 'context.AfterFunc' function?",
        "question_hi": "'context.AfterFunc' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Register function to run after context cancellation", "Post-cancellation cleanup", "Deferred context operations", "All of the above"],
        "options_hi": ["कॉन्टेक्स्ट कैंसलेशन के बाद रन होने वाला फंक्शन रजिस्टर करना", "पोस्ट-कैंसलेशन क्लीनअप", "डिफर्ड कॉन्टेक्स्ट ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you implement graceful shutdown?",
        "question_hi": "ग्रेसफुल शटडाउन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using context cancellation and WaitGroup", "With signal handling and cleanup", "Implementing shutdown channels", "All of the above"],
        "options_hi": ["कॉन्टेक्स्ट कैंसलेशन और WaitGroup का उपयोग करके", "सिग्नल हैंडलिंग और क्लीनअप के साथ", "शटडाउन चैनल इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of the 'runtime.Stack' function?",
        "question_hi": "'runtime.Stack' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get current goroutine's stack trace", "Debug stack information", "Profile stack usage", "All of the above"],
        "options_hi": ["करंट गोरूटीन का स्टैक ट्रेस प्राप्त करना", "डीबग स्टैक इनफार्मेशन", "स्टैक यूसेज प्रोफाइल करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How do you implement circuit breaker pattern?",
        "question_hi": "सर्किट ब्रेकर पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using state machine with failure counting", "With timeout and backoff strategies", "Implementing health checks", "All of the above"],
        "options_hi": ["फेलियर काउंटिंग के साथ स्टेट मशीन का उपयोग करके", "टाइमआउट और बैकऑफ स्ट्रैटेजी के साथ", "हेल्थ चेक इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of the 'reflect.Swapper' function?",
        "question_hi": "'reflect.Swapper' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Create function to swap slice elements", "Generic element swapping", "Reflection-based swapping", "All of the above"],
        "options_hi": ["स्लाइस एलिमेंट स्वैप करने के लिए फंक्शन बनाना", "जेनरिक एलिमेंट स्वैपिंग", "रिफ्लेक्शन-बेस्ड स्वैपिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How do you implement efficient JSON parsing?",
        "question_hi": "एफिशिएंट JSON पार्सिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using json.RawMessage for lazy parsing", "With streaming json.Decoder", "Implementing custom unmarshalers", "All of the above"],
        "options_hi": ["लेज़ी पार्सिंग के लिए json.RawMessage का उपयोग करके", "स्ट्रीमिंग json.Decoder के साथ", "कस्टम अनमार्शलर इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of the 'runtime.MemProfileRate' variable?",
        "question_hi": "'runtime.MemProfileRate' वेरिएबल का उद्देश्य क्या है?",
        "options_en": ["Control memory profiling sampling rate", "Set allocation tracking frequency", "Configure memory profile granularity", "All of the above"],
        "options_hi": ["मेमोरी प्रोफाइलिंग सैंपलिंग रेट कंट्रोल करना", "अलोकेशन ट्रैकिंग फ्रीक्वेंसी सेट करना", "मेमोरी प्रोफाइल ग्रैन्युलैरिटी कॉन्फिगर करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How do you implement connection pooling?",
        "question_hi": "कनेक्शन पूलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sync.Pool for lightweight connections", "With channel-based pool management", "Implementing health checks and timeouts", "All of the above"],
        "options_hi": ["लाइटवेट कनेक्शन के लिए sync.Pool का उपयोग करके", "चैनल-बेस्ड पूल मैनेजमेंट के साथ", "हेल्थ चेक और टाइमआउट इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of the 'unsafe.Offsetof' function?",
        "question_hi": "'unsafe.Offsetof' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get field offset within struct", "Calculate memory layout", "Low-level struct manipulation", "All of the above"],
        "options_hi": ["स्ट्रक्चर के भीतर फील्ड ऑफसेट प्राप्त करना", "मेमोरी लेआउट कैलकुलेट करना", "लो-लेवल स्ट्रक्चर मैनिपुलेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you implement rate limiting?",
        "question_hi": "रेट लिमिटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using token bucket algorithm", "With sliding window counters", "Implementing leaky bucket", "All of the above"],
        "options_hi": ["टोकन बकेट एल्गोरिदम का उपयोग करके", "स्लाइडिंग विंडो काउंटर के साथ", "लीकी बकेट इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of the 'runtime.SetBlockProfileRate' function?",
        "question_hi": "'runtime.SetBlockProfileRate' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Control blocking profile sampling rate", "Set goroutine blocking tracking", "Configure block profile granularity", "All of the above"],
        "options_hi": ["ब्लॉकिंग प्रोफाइल सैंपलिंग रेट कंट्रोल करना", "गोरूटीन ब्लॉकिंग ट्रैकिंग सेट करना", "ब्लॉक प्रोफाइल ग्रैन्युलैरिटी कॉन्फिगर करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you implement distributed tracing?",
        "question_hi": "डिस्ट्रीब्यूटेड ट्रेसिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using context propagation with trace IDs", "With OpenTelemetry integration", "Implementing span creation and propagation", "All of the above"],
        "options_hi": ["ट्रेस ID के साथ कॉन्टेक्स्ट प्रोपेगेशन का उपयोग करके", "OpenTelemetry इंटीग्रेशन के साथ", "स्पैन क्रिएशन और प्रोपेगेशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of the 'reflect.Select' function?",
        "question_hi": "'reflect.Select' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Dynamic select statement execution", "Reflection-based channel selection", "Runtime channel operations", "All of the above"],
        "options_hi": ["डायनामिक select स्टेटमेंट एक्सेक्यूशन", "रिफ्लेक्शन-बेस्ड चैनल सिलेक्शन", "रनटाइम चैनल ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you implement memory-mapped files?",
        "question_hi": "मेमोरी-मैप्ड फाइल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using syscall.Mmap for file mapping", "With manual memory management", "Implementing page-aligned access", "All of the above"],
        "options_hi": ["फाइल मैपिंग के लिए syscall.Mmap का उपयोग करके", "मैनुअल मेमोरी मैनेजमेंट के साथ", "पेज-अलाइंड एक्सेस इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of the 'runtime.NumCPU' function?",
        "question_hi": "'runtime.NumCPU' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get number of logical CPUs", "Detect available parallelism", "Configure worker pools", "All of the above"],
        "options_hi": ["लॉजिकल CPU की संख्या प्राप्त करना", "उपलब्ध पैरेललिज्म डिटेक्ट करना", "वर्कर पूल कॉन्फिगर करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do you implement bloom filters?",
        "question_hi": "ब्लूम फिल्टर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using multiple hash functions with bit array", "With probabilistic membership testing", "Implementing space-efficient sets", "All of the above"],
        "options_hi": ["बिट ऐरे के साथ मल्टीपल हैश फंक्शन का उपयोग करके", "प्रोबेबिलिस्टिक मेंबरशिप टेस्टिंग के साथ", "स्पेस-एफिशिएंट सेट इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of the 'sync.Cond' type?",
        "question_hi": "'sync.Cond' टाइप का उद्देश्य क्या है?",
        "options_en": ["Condition variable for goroutine synchronization", "Broadcast and signal waiting goroutines", "Complex synchronization patterns", "All of the above"],
        "options_hi": ["गोरूटीन सिंक्रोनाइज़ेशन के लिए कंडीशन वेरिएबल", "वेटिंग गोरूटीन को ब्रॉडकास्ट और सिग्नल करना", "कॉम्प्लेक्स सिंक्रोनाइज़ेशन पैटर्न", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How do you implement worker pools with dynamic scaling?",
        "question_hi": "डायनामिक स्केलिंग के साथ वर्कर पूल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using buffered channels and dynamic goroutine creation", "With work stealing algorithms", "Implementing load-based scaling", "All of the above"],
        "options_hi": ["बफर्ड चैनल और डायनामिक गोरूटीन क्रिएशन का उपयोग करके", "वर्क स्टीलिंग एल्गोरिदम के साथ", "लोड-बेस्ड स्केलिंग इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of the 'runtime.LockOSThread' function?",
        "question_hi": "'runtime.LockOSThread' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Bind goroutine to OS thread", "Thread-local storage requirements", "GUI and system call compatibility", "All of the above"],
        "options_hi": ["गोरूटीन को OS थ्रेड से बाइंड करना", "थ्रेड-लोकल स्टोरेज रिक्वायरमेंट", "GUI और सिस्टम कॉल कम्पेटिबिलिटी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How do you implement content-addressable storage?",
        "question_hi": "कंटेंट-एड्रेसेबल स्टोरेज कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using cryptographic hashes as keys", "With deduplication based on content hash", "Implementing hash-based storage systems", "All of the above"],
        "options_hi": ["क्रिप्टोग्राफिक हैश को की के रूप में उपयोग करके", "कंटेंट हैश के आधार पर डीडुप्लिकेशन के साथ", "हैश-बेस्ड स्टोरेज सिस्टम इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of the 'reflect.VisibleFields' function?",
        "question_hi": "'reflect.VisibleFields' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get all visible fields of struct including embedded", "Comprehensive field inspection", "Reflection-based struct analysis", "All of the above"],
        "options_hi": ["एम्बेडेड सहित स्ट्रक्चर के सभी विजिबल फील्ड प्राप्त करना", "कम्प्रिहेंसिव फील्ड इंस्पेक्शन", "रिफ्लेक्शन-बेस्ड स्ट्रक्चर एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How do you implement vector clocks?",
        "question_hi": "वेक्टर क्लॉक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using map of node IDs to counters", "With causal ordering detection", "Implementing distributed version vectors", "All of the above"],
        "options_hi": ["काउंटर के लिए नोड ID के मैप का उपयोग करके", "कॉज़ल ऑर्डरिंग डिटेक्शन के साथ", "डिस्ट्रीब्यूटेड वर्जन वेक्टर इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of the 'runtime.StartTrace' function?",
        "question_hi": "'runtime.StartTrace' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Start execution tracing", "Capture runtime events", "Performance analysis", "All of the above"],
        "options_hi": ["एक्सेक्यूशन ट्रेसिंग स्टार्ट करना", "रनटाइम इवेंट कैप्चर करना", "परफॉर्मेंस एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How do you implement consistent hashing?",
        "question_hi": "कंसिस्टेंट हैशिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using ring of virtual nodes", "With minimal disruption on node changes", "Implementing distributed hash tables", "All of the above"],
        "options_hi": ["वर्चुअल नोड के रिंग का उपयोग करके", "नोड चेंज पर मिनिमल डिसरप्शन के साथ", "डिस्ट्रीब्यूटेड हैश टेबल इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of the 'unsafe.Slice' function?",
        "question_hi": "'unsafe.Slice' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Create slice from pointer and length", "Low-level slice construction", "Memory region to slice conversion", "All of the above"],
        "options_hi": ["पॉइंटर और लेंथ से स्लाइस बनाना", "लो-लेवल स्लाइस कंस्ट्रक्शन", "मेमोरी रीजन को स्लाइस में कन्वर्जन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How do you implement distributed locks?",
        "question_hi": "डिस्ट्रीब्यूटेड लॉक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Redis or etcd with lease mechanisms", "With consensus algorithms", "Implementing leader election", "All of the above"],
        "options_hi": ["लीज मैकेनिज्म के साथ Redis या etcd का उपयोग करके", "कंसेंसस एल्गोरिदम के साथ", "लीडर इलेक्शन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of the 'runtime.GC' function?",
        "question_hi": "'runtime.GC' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Trigger garbage collection manually", "Force memory cleanup", "Performance testing", "All of the above"],
        "options_hi": ["गार्बेज कलेक्शन मैन्युअली ट्रिगर करना", "मेमोरी क्लीनअप फोर्स करना", "परफॉर्मेंस टेस्टिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you implement write-ahead logging?",
        "question_hi": "राइट-अहेड लॉगिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using append-only log files", "With crash recovery mechanisms", "Implementing transaction logging", "All of the above"],
        "options_hi": ["ऐपेंड-ओनली लॉग फाइल का उपयोग करके", "क्रैश रिकवरी मैकेनिज्म के साथ", "ट्रांजैक्शन लॉगिंग इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of the 'reflect.Value.Convert' method?",
        "question_hi": "'reflect.Value.Convert' मेथड का उद्देश्य क्या है?",
        "options_en": ["Convert value to different type in reflection", "Type conversion at runtime", "Reflection-based type casting", "All of the above"],
        "options_hi": ["रिफ्लेक्शन में वैल्यू को अलग टाइप में कन्वर्ट करना", "रनटाइम पर टाइप कन्वर्जन", "रिफ्लेक्शन-बेस्ड टाइप कास्टिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you implement CRDTs (Conflict-free Replicated Data Types)?",
        "question_hi": "CRDT (कनफ्लिक्ट-फ्री रेप्लिकेटेड डेटा टाइप) कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using state-based or operation-based approaches", "With mergeable data structures", "Implementing eventually consistent types", "All of the above"],
        "options_hi": ["स्टेट-बेस्ड या ऑपरेशन-बेस्ड एप्रोच का उपयोग करके", "मर्जेबल डेटा स्ट्रक्चर के साथ", "इवेंचुअली कंसिस्टेंट टाइप इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of the 'runtime.KeepAlive' function?",
        "question_hi": "'runtime.KeepAlive' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Prevent garbage collection of value", "Extend object lifetime", "Manual memory management aid", "All of the above"],
        "options_hi": ["वैल्यू का गार्बेज कलेक्शन रोकना", "ऑब्जेक्ट लाइफटाइम एक्सटेंड करना", "मैनुअल मेमोरी मैनेजमेंट एड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How do you implement stream processing?",
        "question_hi": "स्ट्रीम प्रोसेसिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using channel pipelines with stages", "With windowing and aggregation", "Implementing backpressure handling", "All of the above"],
        "options_hi": ["स्टेज के साथ चैनल पाइपलाइन का उपयोग करके", "विंडोइंग और एग्रीगेशन के साथ", "बैकप्रेशर हैंडलिंग इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of the 'reflect.Type.Implements' method?",
        "question_hi": "'reflect.Type.Implements' मेथड का उद्देश्य क्या है?",
        "options_en": ["Check if type implements interface", "Runtime interface compliance check", "Reflection-based interface verification", "All of the above"],
        "options_hi": ["चेक करना कि टाइप इंटरफेस इम्प्लीमेंट करता है या नहीं", "रनटाइम इंटरफेस कम्प्लायंस चेक", "रिफ्लेक्शन-बेस्ड इंटरफेस वेरिफिकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you implement consensus algorithms?",
        "question_hi": "कंसेंसस एल्गोरिदम कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Raft or Paxos implementations", "With leader election and log replication", "Implementing distributed state machines", "All of the above"],
        "options_hi": ["Raft या Paxos इम्प्लीमेंटेशन का उपयोग करके", "लीडर इलेक्शन और लॉग रेप्लिकेशन के साथ", "डिस्ट्रीब्यूटेड स्टेट मशीन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of the 'runtime.SetCPUProfileRate' function?",
        "question_hi": "'runtime.SetCPUProfileRate' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Set CPU profiling sampling rate", "Control profile granularity", "Configure performance monitoring", "All of the above"],
        "options_hi": ["CPU प्रोफाइलिंग सैंपलिंग रेट सेट करना", "प्रोफाइल ग्रैन्युलैरिटी कंट्रोल करना", "परफॉर्मेंस मॉनिटरिंग कॉन्फिगर करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you implement geospatial indexing?",
        "question_hi": "जियोस्पेशियल इंडेक्सिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using geohash or quadtree structures", "With spatial partitioning algorithms", "Implementing location-based queries", "All of the above"],
        "options_hi": ["जियोहैश या क्वाडट्री स्ट्रक्चर का उपयोग करके", "स्पेशियल पार्टिशनिंग एल्गोरिदम के साथ", "लोकेशन-बेस्ड क्वेरी इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of the 'unsafe.String' function?",
        "question_hi": "'unsafe.String' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Create string from byte pointer and length", "Low-level string construction", "Memory to string conversion", "All of the above"],
        "options_hi": ["बाइट पॉइंटर और लेंथ से स्ट्रिंग बनाना", "लो-लेवल स्ट्रिंग कंस्ट्रक्शन", "मेमोरी को स्ट्रिंग में कन्वर्जन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How do you implement time series databases?",
        "question_hi": "टाइम सीरीज डेटाबेस कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using columnar storage with compression", "With time-based partitioning", "Implementing rollup and aggregation", "All of the above"],
        "options_hi": ["कम्प्रेशन के साथ कॉलमनर स्टोरेज का उपयोग करके", "टाइम-बेस्ड पार्टिशनिंग के साथ", "रोलअप और एग्रीगेशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of the 'reflect.Value.TryRecv' method?",
        "question_hi": "'reflect.Value.TryRecv' मेथड का उद्देश्य क्या है?",
        "options_en": ["Non-blocking channel receive in reflection", "Check channel readiness", "Reflection-based channel polling", "All of the above"],
        "options_hi": ["रिफ्लेक्शन में नॉन-ब्लॉकिंग चैनल रिसीव", "चैनल रेडीनेस चेक करना", "रिफ्लेक्शन-बेस्ड चैनल पोलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you implement machine learning inference?",
        "question_hi": "मशीन लर्निंग इनफरेंस कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using ONNX runtime bindings", "With tensor operations", "Implementing model serving", "All of the above"],
        "options_hi": ["ONNX रनटाइम बाइंडिंग का उपयोग करके", "टेंसर ऑपरेशन के साथ", "मॉडल सर्विंग इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of the 'runtime.UnlockOSThread' function?",
        "question_hi": "'runtime.UnlockOSThread' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Unbind goroutine from OS thread", "Release thread binding", "Reverse LockOSThread operation", "All of the above"],
        "options_hi": ["गोरूटीन को OS थ्रेड से अनबाइंड करना", "थ्रेड बाइंडिंग रिलीज करना", "LockOSThread ऑपरेशन रिवर्स करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How do you implement graph algorithms?",
        "question_hi": "ग्राफ एल्गोरिदम कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using adjacency lists or matrices", "With BFS, DFS, Dijkstra implementations", "Implementing graph traversal and search", "All of the above"],
        "options_hi": ["एडजेंसी लिस्ट या मैट्रिक्स का उपयोग करके", "BFS, DFS, Dijkstra इम्प्लीमेंटेशन के साथ", "ग्राफ ट्रैवर्सल और सर्च इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of the 'reflect.Value.TrySend' method?",
        "question_hi": "'reflect.Value.TrySend' मेथड का उद्देश्य क्या है?",
        "options_en": ["Non-blocking channel send in reflection", "Check channel capacity", "Reflection-based channel testing", "All of the above"],
        "options_hi": ["रिफ्लेक्शन में नॉन-ब्लॉकिंग चैनल सेंड", "चैनल कैपेसिटी चेक करना", "रिफ्लेक्शन-बेस्ड चैनल टेस्टिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How do you implement real-time collaboration?",
        "question_hi": "रियल-टाइम कॉलैबोरेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using WebSocket with operational transforms", "With conflict resolution algorithms", "Implementing collaborative editing", "All of the above"],
        "options_hi": ["ऑपरेशनल ट्रांसफॉर्म के साथ WebSocket का उपयोग करके", "कनफ्लिक्ट रेजोल्यूशन एल्गोरिदम के साथ", "कॉलैबोरेटिव एडिटिंग इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of the 'runtime.Gosched' function?",
        "question_hi": "'runtime.Gosched' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Yield processor to other goroutines", "Cooperative scheduling", "Prevent goroutine starvation", "All of the above"],
        "options_hi": ["प्रोसेसर को अन्य गोरूटीन को यील्ड करना", "कोऑपरेटिव शेड्यूलिंग", "गोरूटीन स्टार्वेशन रोकना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How do you implement blockchain protocols?",
        "question_hi": "ब्लॉकचेन प्रोटोकॉल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using cryptographic primitives", "With consensus mechanisms", "Implementing distributed ledgers", "All of the above"],
        "options_hi": ["क्रिप्टोग्राफिक प्रिमिटिव का उपयोग करके", "कंसेंसस मैकेनिज्म के साथ", "डिस्ट्रीब्यूटेड लेजर इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of the 'reflect.Value.MapRange' method?",
        "question_hi": "'reflect.Value.MapRange' मेथड का उद्देश्य क्या है?",
        "options_en": ["Iterate over map in reflection", "Reflection-based map traversal", "Key-value iteration", "All of the above"],
        "options_hi": ["रिफ्लेक्शन में मैप पर इटरेट करना", "रिफ्लेक्शन-बेस्ड मैप ट्रैवर्सल", "की-वैल्यू इटरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you implement quantum computing simulations?",
        "question_hi": "क्वांटम कंप्यूटिंग सिमुलेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using complex number matrices", "With quantum gate operations", "Implementing state vector evolution", "All of the above"],
        "options_hi": ["कॉम्प्लेक्स नंबर मैट्रिक्स का उपयोग करके", "क्वांटम गेट ऑपरेशन के साथ", "स्टेट वेक्टर इवोल्यूशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of the 'runtime.Goexit' function?",
        "question_hi": "'runtime.Goexit' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Terminate current goroutine", "Clean goroutine shutdown", "Run deferred functions", "All of the above"],
        "options_hi": ["करंट गोरूटीन टर्मिनेट करना", "क्लीन गोरूटीन शटडाउन", "डिफर्ड फंक्शन रन करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How do you implement genetic algorithms?",
        "question_hi": "जेनेटिक एल्गोरिदम कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using selection, crossover, mutation", "With fitness evaluation", "Implementing population evolution", "All of the above"],
        "options_hi": ["सिलेक्शन, क्रॉसओवर, म्यूटेशन का उपयोग करके", "फिटनेस एवैल्यूएशन के साथ", "पॉपुलेशन इवोल्यूशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of the 'reflect.Value.Slice3' method?",
        "question_hi": "'reflect.Value.Slice3' मेथड का उद्देश्य क्या है?",
        "options_en": ["Three-index slice operation in reflection", "Full slice expression support", "Reflection-based slice manipulation", "All of the above"],
        "options_hi": ["रिफ्लेक्शन में थ्री-इंडेक्स स्लाइस ऑपरेशन", "फुल स्लाइस एक्सप्रेशन सपोर्ट", "रिफ्लेक्शन-बेस्ड स्लाइस मैनिपुलेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How do you implement neural networks?",
        "question_hi": "न्यूरल नेटवर्क कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using matrix operations for layers", "With backpropagation algorithm", "Implementing activation functions", "All of the above"],
        "options_hi": ["लेयर के लिए मैट्रिक्स ऑपरेशन का उपयोग करके", "बैकप्रोपेगेशन एल्गोरिदम के साथ", "एक्टिवेशन फंक्शन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of the 'runtime.SetMutexProfileFraction' function?",
        "question_hi": "'runtime.SetMutexProfileFraction' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Set mutex contention profiling rate", "Control mutex profile sampling", "Configure lock profiling", "All of the above"],
        "options_hi": ["म्यूटेक्स कॉन्टेंशन प्रोफाइलिंग रेट सेट करना", "म्यूटेक्स प्रोफाइल सैंपलिंग कंट्रोल करना", "लॉक प्रोफाइलिंग कॉन्फिगर करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How do you implement computer vision algorithms?",
        "question_hi": "कंप्यूटर विजन एल्गोरिदम कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using image processing operations", "With feature detection algorithms", "Implementing object recognition", "All of the above"],
        "options_hi": ["इमेज प्रोसेसिंग ऑपरेशन का उपयोग करके", "फीचर डिटेक्शन एल्गोरिदम के साथ", "ऑब्जेक्ट रिकग्निशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of the 'reflect.Value.UnsafeAddr' method?",
        "question_hi": "'reflect.Value.UnsafeAddr' मेथड का उद्देश्य क्या है?",
        "options_en": ["Get unsafe.Pointer to value", "Low-level address access", "Reflection-based pointer operations", "All of the above"],
        "options_hi": ["वैल्यू का unsafe.Pointer प्राप्त करना", "लो-लेवल एड्रेस एक्सेस", "रिफ्लेक्शन-बेस्ड पॉइंटर ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How do you implement natural language processing?",
        "question_hi": "नेचुरल लैंग्वेज प्रोसेसिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using tokenization and parsing", "With semantic analysis", "Implementing language models", "All of the above"],
        "options_hi": ["टोकनाइजेशन और पार्सिंग का उपयोग करके", "सिमेंटिक एनालिसिस के साथ", "लैंग्वेज मॉडल इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of the 'runtime.SetCgoTraceback' function?",
        "question_hi": "'runtime.SetCgoTraceback' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Set CGO traceback collection", "Configure CGO debugging", "Enable CGO stack traces", "All of the above"],
        "options_hi": ["CGO ट्रेसबैक कलेक्शन सेट करना", "CGO डीबगिंग कॉन्फिगर करना", "CGO स्टैक ट्रेस एनेबल करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How do you implement recommendation systems?",
        "question_hi": "रिकमेंडेशन सिस्टम कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using collaborative filtering", "With content-based approaches", "Implementing matrix factorization", "All of the above"],
        "options_hi": ["कॉलैबोरेटिव फिल्टरिंग का उपयोग करके", "कंटेंट-बेस्ड एप्रोच के साथ", "मैट्रिक्स फैक्टराइजेशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of the 'reflect.Value.CanInterface' method?",
        "question_hi": "'reflect.Value.CanInterface' मेथड का उद्देश्य क्या है?",
        "options_en": ["Check if value can be converted to interface{}", "Interface conversion safety", "Reflection-based type checking", "All of the above"],
        "options_hi": ["चेक करना कि वैल्यू interface{} में कन्वर्ट हो सकती है या नहीं", "इंटरफेस कन्वर्जन सेफ्टी", "रिफ्लेक्शन-बेस्ड टाइप चेकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How do you implement anomaly detection?",
        "question_hi": "अनोमली डिटेक्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using statistical methods", "With machine learning models", "Implementing outlier detection", "All of the above"],
        "options_hi": ["स्टैटिस्टिकल मेथड का उपयोग करके", "मशीन लर्निंग मॉडल के साथ", "आउटलायर डिटेक्शन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of the 'runtime.Callers' function?",
        "question_hi": "'runtime.Callers' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get call stack program counters", "Stack trace generation", "Debug information collection", "All of the above"],
        "options_hi": ["कॉल स्टैक प्रोग्राम काउंटर प्राप्त करना", "स्टैक ट्रेस जनरेशन", "डीबग इनफार्मेशन कलेक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How do you implement fraud detection?",
        "question_hi": "फ्रॉड डिटेक्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using rule-based systems", "With behavioral analysis", "Implementing pattern recognition", "All of the above"],
        "options_hi": ["रूल-बेस्ड सिस्टम का उपयोग करके", "बिहेवियरल एनालिसिस के साथ", "पैटर्न रिकग्निशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of the 'reflect.Value.OverflowComplex' method?",
        "question_hi": "'reflect.Value.OverflowComplex' मेथड का उद्देश्य क्या है?",
        "options_en": ["Check complex number overflow in conversion", "Type conversion safety", "Reflection-based overflow detection", "All of the above"],
        "options_hi": ["कन्वर्जन में कॉम्प्लेक्स नंबर ओवरफ्लो चेक करना", "टाइप कन्वर्जन सेफ्टी", "रिफ्लेक्शन-बेस्ड ओवरफ्लो डिटेक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How do you implement predictive maintenance?",
        "question_hi": "प्रिडिक्टिव मेंटेनेंस कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sensor data analysis", "With failure prediction models", "Implementing condition monitoring", "All of the above"],
        "options_hi": ["सेंसर डेटा एनालिसिस का उपयोग करके", "फेलियर प्रिडिक्शन मॉडल के साथ", "कंडीशन मॉनिटरिंग इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of the 'runtime.Func' type?",
        "question_hi": "'runtime.Func' टाइप का उद्देश्य क्या है?",
        "options_en": ["Represent function in runtime", "Function metadata access", "Debug information", "All of the above"],
        "options_hi": ["रनटाइम में फंक्शन रिप्रेजेंट करना", "फंक्शन मेटाडेटा एक्सेस", "डीबग इनफार्मेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you implement supply chain optimization?",
        "question_hi": "सप्लाई चेन ऑप्टिमाइज़ेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using linear programming", "With constraint satisfaction", "Implementing routing algorithms", "All of the above"],
        "options_hi": ["लीनियर प्रोग्रामिंग का उपयोग करके", "कंस्ट्रेंट सैटिस्फैक्शन के साथ", "रूटिंग एल्गोरिदम इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of the 'reflect.Value.OverflowFloat' method?",
        "question_hi": "'reflect.Value.OverflowFloat' मेथड का उद्देश्य क्या है?",
        "options_en": ["Check float overflow in conversion", "Floating-point safety", "Reflection-based range checking", "All of the above"],
        "options_hi": ["कन्वर्जन में फ्लोट ओवरफ्लो चेक करना", "फ्लोटिंग-पॉइंट सेफ्टी", "रिफ्लेक्शन-बेस्ड रेंज चेकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you implement energy management systems?",
        "question_hi": "एनर्जी मैनेजमेंट सिस्टम कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using smart grid algorithms", "With consumption optimization", "Implementing demand response", "All of the above"],
        "options_hi": ["स्मार्ट ग्रिड एल्गोरिदम का उपयोग करके", "कंजम्पशन ऑप्टिमाइज़ेशन के साथ", "डिमांड रिस्पांस इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of the 'runtime.Frames' type?",
        "question_hi": "'runtime.Frames' टाइप का उद्देश्य क्या है?",
        "options_en": ["Iterate over call stack frames", "Stack frame information", "Debug stack analysis", "All of the above"],
        "options_hi": ["कॉल स्टैक फ्रेम पर इटरेट करना", "स्टैक फ्रेम इनफार्मेशन", "डीबग स्टैक एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How do you implement autonomous vehicle control?",
        "question_hi": "ऑटोनोमस व्हीकल कंट्रोल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sensor fusion algorithms", "With path planning", "Implementing control systems", "All of the above"],
        "options_hi": ["सेंसर फ्यूजन एल्गोरिदम का उपयोग करके", "पाथ प्लानिंग के साथ", "कंट्रोल सिस्टम इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of the 'reflect.Value.OverflowInt' method?",
        "question_hi": "'reflect.Value.OverflowInt' मेथड का उद्देश्य क्या है?",
        "options_en": ["Check integer overflow in conversion", "Integer range safety", "Reflection-based overflow checking", "All of the above"],
        "options_hi": ["कन्वर्जन में इंटीजर ओवरफ्लो चेक करना", "इंटीजर रेंज सेफ्टी", "रिफ्लेक्शन-बेस्ड ओवरफ्लो चेकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you implement smart city infrastructure?",
        "question_hi": "स्मार्ट सिटी इन्फ्रास्ट्रक्चर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using IoT sensor networks", "With data analytics platforms", "Implementing urban management systems", "All of the above"],
        "options_hi": ["IoT सेंसर नेटवर्क का उपयोग करके", "डेटा एनालिटिक्स प्लेटफॉर्म के साथ", "अर्बन मैनेजमेंट सिस्टम इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of the 'reflect.Value.OverflowUint' method?",
        "question_hi": "'reflect.Value.OverflowUint' मेथड का उद्देश्य क्या है?",
        "options_en": ["Check unsigned integer overflow in conversion", "Unsigned integer safety", "Reflection-based unsigned overflow", "All of the above"],
        "options_hi": ["कन्वर्जन में अनसाइन्ड इंटीजर ओवरफ्लो चेक करना", "अनसाइन्ड इंटीजर सेफ्टी", "रिफ्लेक्शन-बेस्ड अनसाइन्ड ओवरफ्लो", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you implement digital twins?",
        "question_hi": "डिजिटल ट्विन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using real-time data synchronization", "With simulation models", "Implementing virtual representations", "All of the above"],
        "options_hi": ["रियल-टाइम डेटा सिंक्रोनाइज़ेशन का उपयोग करके", "सिमुलेशन मॉडल के साथ", "वर्चुअल रिप्रेजेंटेशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of the 'runtime.Frame' type?",
        "question_hi": "'runtime.Frame' टाइप का उद्देश्य क्या है?",
        "options_en": ["Represent stack frame information", "Call stack metadata", "Debug frame details", "All of the above"],
        "options_hi": ["स्टैक फ्रेम इनफार्मेशन रिप्रेजेंट करना", "कॉल स्टैक मेटाडेटा", "डीबग फ्रेम डिटेल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How do you implement augmented reality?",
        "question_hi": "ऑगमेंटेड रियलिटी कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using computer vision for tracking", "With 3D rendering", "Implementing sensor integration", "All of the above"],
        "options_hi": ["ट्रैकिंग के लिए कंप्यूटर विजन का उपयोग करके", "3D रेंडरिंग के साथ", "सेंसर इंटीग्रेशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of the 'reflect.Value.SetMapIndex' method?",
        "question_hi": "'reflect.Value.SetMapIndex' मेथड का उद्देश्य क्या है?",
        "options_en": ["Set map key-value pair in reflection", "Reflection-based map modification", "Dynamic map operations", "All of the above"],
        "options_hi": ["रिफ्लेक्शन में मैप की-वैल्यू पेयर सेट करना", "रिफ्लेक्शन-बेस्ड मैप मोडिफिकेशन", "डायनामिक मैप ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do you implement virtual reality?",
        "question_hi": "वर्चुअल रियलिटी कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using head tracking and rendering", "With immersive environments", "Implementing motion controls", "All of the above"],
        "options_hi": ["हेड ट्रैकिंग और रेंडरिंग का उपयोग करके", "इमर्सिव एनवायरनमेंट के साथ", "मोशन कंट्रोल इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of the 'reflect.Value.Send' method?",
        "question_hi": "'reflect.Value.Send' मेथड का उद्देश्य क्या है?",
        "options_en": ["Send value to channel in reflection", "Reflection-based channel operations", "Dynamic channel communication", "All of the above"],
        "options_hi": ["रिफ्लेक्शन में चैनल को वैल्यू सेंड करना", "रिफ्लेक्शन-बेस्ड चैनल ऑपरेशन", "डायनामिक चैनल कम्युनिकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How do you implement metaverse platforms?",
        "question_hi": "मेटावर्स प्लेटफॉर्म कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using 3D world rendering", "With social interaction systems", "Implementing virtual economies", "All of the above"],
        "options_hi": ["3D वर्ल्ड रेंडरिंग का उपयोग करके", "सोशल इंटरेक्शन सिस्टम के साथ", "वर्चुअल इकॉनमी इम्प्लीमेंट करके", "उपरोक्त सभी"],
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