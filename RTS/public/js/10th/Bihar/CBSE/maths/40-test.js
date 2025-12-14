const questions=[
    {
        "num": 1,
        "question_en": "What is the purpose of the 'runtime.SetFinalizer' function in resource cleanup?",
        "question_hi": "'runtime.SetFinalizer' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Register cleanup function for garbage collection", "Force immediate resource release", "Manual memory management", "Prevent garbage collection"],
        "options_hi": ["गार्बेज कलेक्शन के लिए क्लीनअप फंक्शन रजिस्टर करना", "इमीडिएट रिसोर्स रिलीज फोर्स करना", "मैनुअल मेमोरी मैनेजमेंट", "गार्बेज कलेक्शन रोकना"],
        "answer_en": "Register cleanup function for garbage collection",
        "answer_hi": "गार्बेज कलेक्शन के लिए क्लीनअप फंक्शन रजिस्टर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How do you implement a lock-free stack using atomic operations?",
        "question_hi": "एटॉमिक ऑपरेशन का उपयोग करके लॉक-फ्री स्टैक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using CompareAndSwap for head pointer updates", "With mutex protection", "Using channel-based synchronization", "With runtime locks"],
        "options_hi": ["हेड पॉइंटर अपडेट के लिए CompareAndSwap का उपयोग करके", "म्यूटेक्स प्रोटेक्शन के साथ", "चैनल-बेस्ड सिंक्रोनाइज़ेशन का उपयोग करके", "रनटाइम लॉक के साथ"],
        "answer_en": "Using CompareAndSwap for head pointer updates",
        "answer_hi": "हेड पॉइंटर अपडेट के लिए CompareAndSwap का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the purpose of the 'unsafe.Alignof' function?",
        "question_hi": "'unsafe.Alignof' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get memory alignment requirements of a type", "Align memory addresses manually", "Calculate structure padding", "Check pointer alignment"],
        "options_hi": ["टाइप की मेमोरी अलाइनमेंट रिक्वायरमेंट प्राप्त करना", "मेमोरी एड्रेस मैन्युअली अलाइन करना", "स्ट्रक्चर पैडिंग कैलकुलेट करना", "पॉइंटर अलाइनमेंट चेक करना"],
        "answer_en": "Get memory alignment requirements of a type",
        "answer_hi": "टाइप की मेमोरी अलाइनमेंट रिक्वायरमेंट प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you implement a read-preferring RW mutex?",
        "question_hi": "रीड-प्रेफरिंग RW म्यूटेक्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using reader count with writer blocking", "With simple mutex", "Using channel-based approach", "With atomic counters only"],
        "options_hi": ["राइटर ब्लॉकिंग के साथ रीडर काउंट का उपयोग करके", "सिंपल म्यूटेक्स के साथ", "चैनल-बेस्ड एप्रोच का उपयोग करके", "केवल एटॉमिक काउंटर के साथ"],
        "answer_en": "Using reader count with writer blocking",
        "answer_hi": "राइटर ब्लॉकिंग के साथ रीडर काउंट का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of the 'runtime.ReadMemStats' function?",
        "question_hi": "'runtime.ReadMemStats' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Read memory allocation and GC statistics", "Force garbage collection", "Allocate memory manually", "Debug memory leaks"],
        "options_hi": ["मेमोरी अलोकेशन और GC स्टैटिस्टिक्स रीड करना", "गार्बेज कलेक्शन फोर्स करना", "मेमोरी मैन्युअली अलोकेट करना", "मेमोरी लीक डीबग करना"],
        "answer_en": "Read memory allocation and GC statistics",
        "answer_hi": "मेमोरी अलोकेशन और GC स्टैटिस्टिक्स रीड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you implement zero-copy I/O using syscall package?",
        "question_hi": "syscall पैकेज का उपयोग करके जीरो-कॉपी I/O कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sendfile system call", "With buffer copying", "Using ioutil package", "With manual memory management"],
        "options_hi": ["sendfile सिस्टम कॉल का उपयोग करके", "बफर कॉपीिंग के साथ", "ioutil पैकेज का उपयोग करके", "मैनुअल मेमोरी मैनेजमेंट के साथ"],
        "answer_en": "Using sendfile system call",
        "answer_hi": "sendfile सिस्टम कॉल का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of the 'reflect.ChanDir' type?",
        "question_hi": "'reflect.ChanDir' टाइप का उद्देश्य क्या है?",
        "options_en": ["Represent channel direction in reflection", "Create new channels", "Modify channel capacity", "Close channels dynamically"],
        "options_hi": ["रिफ्लेक्शन में चैनल डायरेक्शन रिप्रेजेंट करना", "नए चैनल बनाना", "चैनल कैपेसिटी मोडिफाई करना", "चैनल डायनामिकली क्लोज करना"],
        "answer_en": "Represent channel direction in reflection",
        "answer_hi": "रिफ्लेक्शन में चैनल डायरेक्शन रिप्रेजेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you implement custom garbage collection behavior?",
        "question_hi": "कस्टम गार्बेज कलेक्शन बिहेवियर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using runtime.SetFinalizer with cleanup logic", "Modifying GC algorithm", "Disabling GC completely", "Using manual memory allocation only"],
        "options_hi": ["क्लीनअप लॉजिक के साथ runtime.SetFinalizer का उपयोग करके", "GC एल्गोरिदम मोडिफाई करके", "GC को कंप्लीटली डिसेबल करके", "केवल मैनुअल मेमोरी अलोकेशन का उपयोग करके"],
        "answer_en": "Using runtime.SetFinalizer with cleanup logic",
        "answer_hi": "क्लीनअप लॉजिक के साथ runtime.SetFinalizer का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of the 'context.WithTimeoutCause' function?",
        "question_hi": "'context.WithTimeoutCause' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Create context with timeout and custom error cause", "Set infinite timeout", "Cancel context immediately", "Create context without timeout"],
        "options_hi": ["टाइमआउट और कस्टम एरर कॉज के साथ कॉन्टेक्स्ट बनाना", "इनफिनिट टाइमआउट सेट करना", "कॉन्टेक्स्ट इमीडिएटली कैंसल करना", "टाइमआउट के बिना कॉन्टेक्स्ट बनाना"],
        "answer_en": "Create context with timeout and custom error cause",
        "answer_hi": "टाइमआउट और कस्टम एरर कॉज के साथ कॉन्टेक्स्ट बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you implement efficient object pooling?",
        "question_hi": "एफिशिएंट ऑब्जेक्ट पूलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sync.Pool with reset methods", "With global variables", "Using channel-based pools", "With manual allocation every time"],
        "options_hi": ["रीसेट मेथड के साथ sync.Pool का उपयोग करके", "ग्लोबल वेरिएबल के साथ", "चैनल-बेस्ड पूल का उपयोग करके", "हर बार मैनुअल अलोकेशन के साथ"],
        "answer_en": "Using sync.Pool with reset methods",
        "answer_hi": "रीसेट मेथड के साथ sync.Pool का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of the 'runtime.GOMAXPROCS' function?",
        "question_hi": "'runtime.GOMAXPROCS' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Set maximum number of CPUs that can execute simultaneously", "Set maximum goroutines", "Control memory allocation", "Set GC frequency"],
        "options_hi": ["एक साथ एक्सेक्यूट हो सकने वाले CPU की मैक्सिमम संख्या सेट करना", "मैक्सिमम गोरूटीन सेट करना", "मेमोरी अलोकेशन कंट्रोल करना", "GC फ्रीक्वेंसी सेट करना"],
        "answer_en": "Set maximum number of CPUs that can execute simultaneously",
        "answer_hi": "एक साथ एक्सेक्यूट हो सकने वाले CPU की मैक्सिमम संख्या सेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you implement a lock-free ring buffer?",
        "question_hi": "लॉक-फ्री रिंग बफर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using atomic operations for head/tail pointers", "With mutex protection", "Using channels", "With global locks"],
        "options_hi": ["हेड/टेल पॉइंटर के लिए एटॉमिक ऑपरेशन का उपयोग करके", "म्यूटेक्स प्रोटेक्शन के साथ", "चैनल का उपयोग करके", "ग्लोबल लॉक के साथ"],
        "answer_en": "Using atomic operations for head/tail pointers",
        "answer_hi": "हेड/टेल पॉइंटर के लिए एटॉमिक ऑपरेशन का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of the 'reflect.MakeFunc' function?",
        "question_hi": "'reflect.MakeFunc' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Create new functions at runtime", "Modify existing functions", "Delete functions dynamically", "Optimize function calls"],
        "options_hi": ["रनटाइम पर नए फंक्शन बनाना", "एक्सिस्टिंग फंक्शन मोडिफाई करना", "फंक्शन डायनामिकली डिलीट करना", "फंक्शन कॉल ऑप्टिमाइज़ करना"],
        "answer_en": "Create new functions at runtime",
        "answer_hi": "रनटाइम पर नए फंक्शन बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you implement efficient string concatenation?",
        "question_hi": "एफिशिएंट स्ट्रिंग कॉन्कटेनेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using strings.Builder for multiple appends", "With + operator repeatedly", "Using fmt.Sprintf", "With bytes.Buffer and conversion"],
        "options_hi": ["मल्टीपल ऐपेंड के लिए strings.Builder का उपयोग करके", "+ ऑपरेटर को रिपीटेडली उपयोग करके", "fmt.Sprintf का उपयोग करके", "bytes.Buffer और कन्वर्जन के साथ"],
        "answer_en": "Using strings.Builder for multiple appends",
        "answer_hi": "मल्टीपल ऐपेंड के लिए strings.Builder का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of the 'runtime.Caller' function?",
        "question_hi": "'runtime.Caller' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get caller's program counter and file information", "Get current function name", "Modify call stack", "Create stack traces manually"],
        "options_hi": ["कॉलर का प्रोग्राम काउंटर और फाइल इनफार्मेशन प्राप्त करना", "करंट फंक्शन नाम प्राप्त करना", "कॉल स्टैक मोडिफाई करना", "स्टैक ट्रेस मैन्युअली बनाना"],
        "answer_en": "Get caller's program counter and file information",
        "answer_hi": "कॉलर का प्रोग्राम काउंटर और फाइल इनफार्मेशन प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you implement a custom memory allocator?",
        "question_hi": "कस्टम मेमोरी अलोकेटर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using unsafe.Pointer and manual memory management", "Modifying runtime allocator", "Using CGO for malloc", "With reflect package"],
        "options_hi": ["unsafe.Pointer और मैनुअल मेमोरी मैनेजमेंट का उपयोग करके", "रनटाइम अलोकेटर मोडिफाई करके", "malloc के लिए CGO का उपयोग करके", "reflect पैकेज के साथ"],
        "answer_en": "Using unsafe.Pointer and manual memory management",
        "answer_hi": "unsafe.Pointer और मैनुअल मेमोरी मैनेजमेंट का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of the 'sync.Once' type?",
        "question_hi": "'sync.Once' टाइप का उद्देश्य क्या है?",
        "options_en": ["Ensure a function executes only once", "Execute function multiple times", "Create singleton patterns", "Both A and C"],
        "options_hi": ["यह सुनिश्चित करना कि फंक्शन केवल एक बार एक्सेक्यूट हो", "फंक्शन मल्टीपल टाइम एक्सेक्यूट करना", "सिंगलटन पैटर्न बनाना", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you implement backpressure in channel pipelines?",
        "question_hi": "चैनल पाइपलाइन में बैकप्रेशर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using buffered channels with size limits", "With unbuffered channels only", "Using select with default cases", "Both A and C"],
        "options_hi": ["साइज लिमिट के साथ बफर्ड चैनल का उपयोग करके", "केवल अनबफर्ड चैनल के साथ", "डिफॉल्ट केस के साथ select का उपयोग करके", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of the 'runtime.FuncForPC' function?",
        "question_hi": "'runtime.FuncForPC' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get function information from program counter", "Convert function to program counter", "Modify function behavior", "Create new functions"],
        "options_hi": ["प्रोग्राम काउंटर से फंक्शन इनफार्मेशन प्राप्त करना", "फंक्शन को प्रोग्राम काउंटर में कन्वर्ट करना", "फंक्शन बिहेवियर मोडिफाई करना", "नए फंक्शन बनाना"],
        "answer_en": "Get function information from program counter",
        "answer_hi": "प्रोग्राम काउंटर से फंक्शन इनफार्मेशन प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you implement efficient concurrent maps?",
        "question_hi": "एफिशिएंट कनकरेंट मैप कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sync.Map for read-heavy workloads", "With mutex-protected maps", "Using sharded maps", "All of the above"],
        "options_hi": ["रीड-हैवी वर्कलोड के लिए sync.Map का उपयोग करके", "म्यूटेक्स-प्रोटेक्टेड मैप के साथ", "शार्डेड मैप का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of the 'context.AfterFunc' function?",
        "question_hi": "'context.AfterFunc' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Register function to run after context cancellation", "Execute function before context creation", "Replace context cancellation", "Modify context values"],
        "options_hi": ["कॉन्टेक्स्ट कैंसलेशन के बाद रन होने वाला फंक्शन रजिस्टर करना", "कॉन्टेक्स्ट क्रिएशन से पहले फंक्शन एक्सेक्यूट करना", "कॉन्टेक्स्ट कैंसलेशन रिप्लेस करना", "कॉन्टेक्स्ट वैल्यू मोडिफाई करना"],
        "answer_en": "Register function to run after context cancellation",
        "answer_hi": "कॉन्टेक्स्ट कैंसलेशन के बाद रन होने वाला फंक्शन रजिस्टर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you implement graceful shutdown?",
        "question_hi": "ग्रेसफुल शटडाउन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using signal handling and context cancellation", "With os.Exit immediately", "Using panic/recover", "With forced termination"],
        "options_hi": ["सिग्नल हैंडलिंग और कॉन्टेक्स्ट कैंसलेशन का उपयोग करके", "os.Exit इमीडिएटली के साथ", "panic/recover का उपयोग करके", "फोर्स्ड टर्मिनेशन के साथ"],
        "answer_en": "Using signal handling and context cancellation",
        "answer_hi": "सिग्नल हैंडलिंग और कॉन्टेक्स्ट कैंसलेशन का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of the 'runtime.Stack' function?",
        "question_hi": "'runtime.Stack' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get current goroutine's stack trace", "Modify stack size", "Allocate stack memory", "Create new stacks"],
        "options_hi": ["करंट गोरूटीन का स्टैक ट्रेस प्राप्त करना", "स्टैक साइज मोडिफाई करना", "स्टैक मेमोरी अलोकेट करना", "नए स्टैक बनाना"],
        "answer_en": "Get current goroutine's stack trace",
        "answer_hi": "करंट गोरूटीन का स्टैक ट्रेस प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How do you implement circuit breaker pattern?",
        "question_hi": "सर्किट ब्रेकर पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using state machine with failure counting", "With simple error checking", "Using channels only", "With constant retries"],
        "options_hi": ["फेलियर काउंटिंग के साथ स्टेट मशीन का उपयोग करके", "सिंपल एरर चेकिंग के साथ", "केवल चैनल का उपयोग करके", "कॉन्स्टेंट रिट्री के साथ"],
        "answer_en": "Using state machine with failure counting",
        "answer_hi": "फेलियर काउंटिंग के साथ स्टेट मशीन का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of the 'reflect.Swapper' function?",
        "question_hi": "'reflect.Swapper' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Create function to swap slice elements", "Swap variables directly", "Modify slice capacity", "Create new slices"],
        "options_hi": ["स्लाइस एलिमेंट स्वैप करने के लिए फंक्शन बनाना", "वेरिएबल डायरेक्टली स्वैप करना", "स्लाइस कैपेसिटी मोडिफाई करना", "नए स्लाइस बनाना"],
        "answer_en": "Create function to swap slice elements",
        "answer_hi": "स्लाइस एलिमेंट स्वैप करने के लिए फंक्शन बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How do you implement efficient JSON parsing?",
        "question_hi": "एफिशिएंट JSON पार्सिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using json.RawMessage for lazy parsing", "With reflection-based unmarshaling", "Using json.Decoder for streaming", "Both A and C"],
        "options_hi": ["लेज़ी पार्सिंग के लिए json.RawMessage का उपयोग करके", "रिफ्लेक्शन-बेस्ड अनमार्शलिंग के साथ", "स्ट्रीमिंग के लिए json.Decoder का उपयोग करके", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of the 'runtime.MemProfileRate' variable?",
        "question_hi": "'runtime.MemProfileRate' वेरिएबल का उद्देश्य क्या है?",
        "options_en": ["Control memory profiling sampling rate", "Set GC frequency", "Control memory allocation size", "Set stack size"],
        "options_hi": ["मेमोरी प्रोफाइलिंग सैंपलिंग रेट कंट्रोल करना", "GC फ्रीक्वेंसी सेट करना", "मेमोरी अलोकेशन साइज कंट्रोल करना", "स्टैक साइज सेट करना"],
        "answer_en": "Control memory profiling sampling rate",
        "answer_hi": "मेमोरी प्रोफाइलिंग सैंपलिंग रेट कंट्रोल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How do you implement connection pooling?",
        "question_hi": "कनेक्शन पूलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sync.Pool with connection reset", "With global connection variables", "Using channel-based pools", "Both A and C"],
        "options_hi": ["कनेक्शन रीसेट के साथ sync.Pool का उपयोग करके", "ग्लोबल कनेक्शन वेरिएबल के साथ", "चैनल-बेस्ड पूल का उपयोग करके", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of the 'unsafe.Offsetof' function?",
        "question_hi": "'unsafe.Offsetof' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get field offset within a struct", "Calculate struct size", "Modify struct layout", "Create struct instances"],
        "options_hi": ["स्ट्रक्चर के भीतर फील्ड ऑफसेट प्राप्त करना", "स्ट्रक्चर साइज कैलकुलेट करना", "स्ट्रक्चर लेआउट मोडिफाई करना", "स्ट्रक्चर इंस्टेंस बनाना"],
        "answer_en": "Get field offset within a struct",
        "answer_hi": "स्ट्रक्चर के भीतर फील्ड ऑफसेट प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you implement rate limiting?",
        "question_hi": "रेट लिमिटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using token bucket algorithm", "With simple sleep delays", "Using channel ticks", "All of the above"],
        "options_hi": ["टोकन बकेट एल्गोरिदम का उपयोग करके", "सिंपल स्लीप डिले के साथ", "चैनल टिक का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of the 'runtime.SetBlockProfileRate' function?",
        "question_hi": "'runtime.SetBlockProfileRate' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Control goroutine blocking profile rate", "Set GC blocking behavior", "Control channel operations", "Modify scheduler behavior"],
        "options_hi": ["गोरूटीन ब्लॉकिंग प्रोफाइल रेट कंट्रोल करना", "GC ब्लॉकिंग बिहेवियर सेट करना", "चैनल ऑपरेशन कंट्रोल करना", "शेड्यूलर बिहेवियर मोडिफाई करना"],
        "answer_en": "Control goroutine blocking profile rate",
        "answer_hi": "गोरूटीन ब्लॉकिंग प्रोफाइल रेट कंट्रोल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you implement distributed tracing?",
        "question_hi": "डिस्ट्रीब्यूटेड ट्रेसिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using context propagation with trace IDs", "With logging only", "Using global variables", "With channel-based communication"],
        "options_hi": ["ट्रेस ID के साथ कॉन्टेक्स्ट प्रोपेगेशन का उपयोग करके", "केवल लॉगिंग के साथ", "ग्लोबल वेरिएबल का उपयोग करके", "चैनल-बेस्ड कम्युनिकेशन के साथ"],
        "answer_en": "Using context propagation with trace IDs",
        "answer_hi": "ट्रेस ID के साथ कॉन्टेक्स्ट प्रोपेगेशन का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of the 'reflect.Select' function?",
        "question_hi": "'reflect.Select' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Execute dynamic select operations", "Create select statements", "Modify channel operations", "Replace switch statements"],
        "options_hi": ["डायनामिक select ऑपरेशन एक्सेक्यूट करना", "select स्टेटमेंट बनाना", "चैनल ऑपरेशन मोडिफाई करना", "switch स्टेटमेंट रिप्लेस करना"],
        "answer_en": "Execute dynamic select operations",
        "answer_hi": "डायनामिक select ऑपरेशन एक्सेक्यूट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you implement memory-mapped files?",
        "question_hi": "मेमोरी-मैप्ड फाइल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using syscall.Mmap for file mapping", "With ioutil file reading", "Using os package only", "With manual file reading"],
        "options_hi": ["फाइल मैपिंग के लिए syscall.Mmap का उपयोग करके", "ioutil फाइल रीडिंग के साथ", "केवल os पैकेज का उपयोग करके", "मैनुअल फाइल रीडिंग के साथ"],
        "answer_en": "Using syscall.Mmap for file mapping",
        "answer_hi": "फाइल मैपिंग के लिए syscall.Mmap का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of the 'runtime.NumCPU' function?",
        "question_hi": "'runtime.NumCPU' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get number of logical CPUs", "Get number of physical cores", "Set CPU affinity", "Control CPU usage"],
        "options_hi": ["लॉजिकल CPU की संख्या प्राप्त करना", "फिजिकल कोर की संख्या प्राप्त करना", "CPU एफिनिटी सेट करना", "CPU यूसेज कंट्रोल करना"],
        "answer_en": "Get number of logical CPUs",
        "answer_hi": "लॉजिकल CPU की संख्या प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do you implement bloom filters?",
        "question_hi": "ब्लूम फिल्टर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using multiple hash functions with bit array", "With simple hash maps", "Using arrays only", "With database queries"],
        "options_hi": ["बिट ऐरे के साथ मल्टीपल हैश फंक्शन का उपयोग करके", "सिंपल हैश मैप के साथ", "केवल ऐरे का उपयोग करके", "डेटाबेस क्वेरी के साथ"],
        "answer_en": "Using multiple hash functions with bit array",
        "answer_hi": "बिट ऐरे के साथ मल्टीपल हैश फंक्शन का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of the 'sync.Cond' type?",
        "question_hi": "'sync.Cond' टाइप का उद्देश्य क्या है?",
        "options_en": ["Coordinate goroutines with condition variables", "Replace channels", "Create mutexes", "Implement semaphores"],
        "options_hi": ["कंडीशन वेरिएबल के साथ गोरूटीन कोऑर्डिनेट करना", "चैनल रिप्लेस करना", "म्यूटेक्स बनाना", "सेमाफोर इम्प्लीमेंट करना"],
        "answer_en": "Coordinate goroutines with condition variables",
        "answer_hi": "कंडीशन वेरिएबल के साथ गोरूटीन कोऑर्डिनेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How do you implement worker pools with dynamic scaling?",
        "question_hi": "डायनामिक स्केलिंग के साथ वर्कर पूल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using buffered channels and dynamic goroutine creation", "With fixed goroutine count", "Using sync.Pool only", "With global worker variables"],
        "options_hi": ["बफर्ड चैनल और डायनामिक गोरूटीन क्रिएशन का उपयोग करके", "फिक्स्ड गोरूटीन काउंट के साथ", "केवल sync.Pool का उपयोग करके", "ग्लोबल वर्कर वेरिएबल के साथ"],
        "answer_en": "Using buffered channels and dynamic goroutine creation",
        "answer_hi": "बफर्ड चैनल और डायनामिक गोरूटीन क्रिएशन का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of the 'runtime.LockOSThread' function?",
        "question_hi": "'runtime.LockOSThread' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Bind goroutine to OS thread", "Create new threads", "Modify thread priority", "Control thread scheduling"],
        "options_hi": ["गोरूटीन को OS थ्रेड से बाइंड करना", "नए थ्रेड बनाना", "थ्रेड प्रायोरिटी मोडिफाई करना", "थ्रेड शेड्यूलिंग कंट्रोल करना"],
        "answer_en": "Bind goroutine to OS thread",
        "answer_hi": "गोरूटीन को OS थ्रेड से बाइंड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How do you implement content-addressable storage?",
        "question_hi": "कंटेंट-एड्रेसेबल स्टोरेज कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using cryptographic hashes as keys for data", "With sequential keys", "Using UUIDs as keys", "With random keys"],
        "options_hi": ["डेटा के लिए क्रिप्टोग्राफिक हैश को की के रूप में उपयोग करके", "सीक्वेंशियल की के साथ", "UUID को की के रूप में उपयोग करके", "रैंडम की के साथ"],
        "answer_en": "Using cryptographic hashes as keys for data",
        "answer_hi": "डेटा के लिए क्रिप्टोग्राफिक हैश को की के रूप में उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of the 'reflect.VisibleFields' function?",
        "question_hi": "'reflect.VisibleFields' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get all visible fields of a struct including embedded ones", "Get only exported fields", "Get private fields only", "Create new struct fields"],
        "options_hi": ["एम्बेडेड सहित स्ट्रक्चर के सभी विजिबल फील्ड प्राप्त करना", "केवल एक्सपोर्टेड फील्ड प्राप्त करना", "केवल प्राइवेट फील्ड प्राप्त करना", "नए स्ट्रक्चर फील्ड बनाना"],
        "answer_en": "Get all visible fields of a struct including embedded ones",
        "answer_hi": "एम्बेडेड सहित स्ट्रक्चर के सभी विजिबल फील्ड प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How do you implement vector clocks?",
        "question_hi": "वेक्टर क्लॉक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using map of node IDs to logical timestamps", "With physical timestamps only", "Using single global clock", "With random numbers"],
        "options_hi": ["लॉजिकल टाइमस्टैम्प के लिए नोड ID के मैप का उपयोग करके", "केवल फिजिकल टाइमस्टैम्प के साथ", "सिंगल ग्लोबल क्लॉक का उपयोग करके", "रैंडम नंबर के साथ"],
        "answer_en": "Using map of node IDs to logical timestamps",
        "answer_hi": "लॉजिकल टाइमस्टैम्प के लिए नोड ID के मैप का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of the 'runtime.StartTrace' function?",
        "question_hi": "'runtime.StartTrace' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Start execution tracing for performance analysis", "Start garbage collection", "Start memory profiling", "Start CPU profiling"],
        "options_hi": ["परफॉर्मेंस एनालिसिस के लिए एक्सेक्यूशन ट्रेसिंग स्टार्ट करना", "गार्बेज कलेक्शन स्टार्ट करना", "मेमोरी प्रोफाइलिंग स्टार्ट करना", "CPU प्रोफाइलिंग स्टार्ट करना"],
        "answer_en": "Start execution tracing for performance analysis",
        "answer_hi": "परफॉर्मेंस एनालिसिस के लिए एक्सेक्यूशन ट्रेसिंग स्टार्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How do you implement consistent hashing?",
        "question_hi": "कंसिस्टेंट हैशिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using ring of virtual nodes with hash space", "With simple modulo hashing", "Using random distribution", "With sequential allocation"],
        "options_hi": ["हैश स्पेस के साथ वर्चुअल नोड के रिंग का उपयोग करके", "सिंपल मॉड्यूलो हैशिंग के साथ", "रैंडम डिस्ट्रीब्यूशन का उपयोग करके", "सीक्वेंशियल अलोकेशन के साथ"],
        "answer_en": "Using ring of virtual nodes with hash space",
        "answer_hi": "हैश स्पेस के साथ वर्चुअल नोड के रिंग का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of the 'unsafe.Slice' function?",
        "question_hi": "'unsafe.Slice' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Create slice from pointer and length", "Convert slice to pointer", "Modify slice capacity", "Create new slice types"],
        "options_hi": ["पॉइंटर और लेंथ से स्लाइस बनाना", "स्लाइस को पॉइंटर में कन्वर्ट करना", "स्लाइस कैपेसिटी मोडिफाई करना", "नए स्लाइस टाइप बनाना"],
        "answer_en": "Create slice from pointer and length",
        "answer_hi": "पॉइंटर और लेंथ से स्लाइस बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How do you implement distributed locks?",
        "question_hi": "डिस्ट्रीब्यूटेड लॉक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Redis or etcd with lease mechanisms", "With local mutexes only", "Using channels", "With file-based locks"],
        "options_hi": ["लीज मैकेनिज्म के साथ Redis या etcd का उपयोग करके", "केवल लोकल म्यूटेक्स के साथ", "चैनल का उपयोग करके", "फाइल-बेस्ड लॉक के साथ"],
        "answer_en": "Using Redis or etcd with lease mechanisms",
        "answer_hi": "लीज मैकेनिज्म के साथ Redis या etcd का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of the 'runtime.GC' function?",
        "question_hi": "'runtime.GC' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Trigger garbage collection manually", "Disable garbage collection", "Control GC algorithm", "Modify GC parameters"],
        "options_hi": ["गार्बेज कलेक्शन मैन्युअली ट्रिगर करना", "गार्बेज कलेक्शन डिसेबल करना", "GC एल्गोरिदम कंट्रोल करना", "GC पैरामीटर मोडिफाई करना"],
        "answer_en": "Trigger garbage collection manually",
        "answer_hi": "गार्बेज कलेक्शन मैन्युअली ट्रिगर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you implement write-ahead logging?",
        "question_hi": "राइट-अहेड लॉगिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using append-only log files before applying changes", "With in-memory logging only", "Using database transactions", "With file caching"],
        "options_hi": ["चेंजेस अप्लाई करने से पहले ऐपेंड-ओनली लॉग फाइल का उपयोग करके", "केवल इन-मेमोरी लॉगिंग के साथ", "डेटाबेस ट्रांजैक्शन का उपयोग करके", "फाइल कैचिंग के साथ"],
        "answer_en": "Using append-only log files before applying changes",
        "answer_hi": "चेंजेस अप्लाई करने से पहले ऐपेंड-ओनली लॉग फाइल का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of the 'reflect.Value.Convert' method?",
        "question_hi": "'reflect.Value.Convert' मेथड का उद्देश्य क्या है?",
        "options_en": ["Convert value to different type in reflection", "Create new values", "Modify existing values", "Delete values"],
        "options_hi": ["रिफ्लेक्शन में वैल्यू को अलग टाइप में कन्वर्ट करना", "नई वैल्यू बनाना", "एक्सिस्टिंग वैल्यू मोडिफाई करना", "वैल्यू डिलीट करना"],
        "answer_en": "Convert value to different type in reflection",
        "answer_hi": "रिफ्लेक्शन में वैल्यू को अलग टाइप में कन्वर्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you implement CRDTs (Conflict-free Replicated Data Types)?",
        "question_hi": "CRDT (कनफ्लिक्ट-फ्री रेप्लिकेटेड डेटा टाइप) कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using mergeable data structures with commutative operations", "With locking mechanisms", "Using central authority", "With sequential operations"],
        "options_hi": ["कम्यूटेटिव ऑपरेशन के साथ मर्जेबल डेटा स्ट्रक्चर का उपयोग करके", "लॉकिंग मैकेनिज्म के साथ", "सेंट्रल अथॉरिटी का उपयोग करके", "सीक्वेंशियल ऑपरेशन के साथ"],
        "answer_en": "Using mergeable data structures with commutative operations",
        "answer_hi": "कम्यूटेटिव ऑपरेशन के साथ मर्जेबल डेटा स्ट्रक्चर का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of the 'runtime.KeepAlive' function?",
        "question_hi": "'runtime.KeepAlive' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Prevent garbage collection of a value until this point", "Force immediate GC", "Allocate permanent memory", "Lock value in memory"],
        "options_hi": ["इस पॉइंट तक वैल्यू के गार्बेज कलेक्शन को रोकना", "इमीडिएट GC फोर्स करना", "पर्मानेंट मेमोरी अलोकेट करना", "वैल्यू को मेमोरी में लॉक करना"],
        "answer_en": "Prevent garbage collection of a value until this point",
        "answer_hi": "इस पॉइंट तक वैल्यू के गार्बेज कलेक्शन को रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How do you implement stream processing?",
        "question_hi": "स्ट्रीम प्रोसेसिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using channel pipelines with processing stages", "With batch processing only", "Using global variables", "With file-based processing"],
        "options_hi": ["प्रोसेसिंग स्टेज के साथ चैनल पाइपलाइन का उपयोग करके", "केवल बैच प्रोसेसिंग के साथ", "ग्लोबल वेरिएबल का उपयोग करके", "फाइल-बेस्ड प्रोसेसिंग के साथ"],
        "answer_en": "Using channel pipelines with processing stages",
        "answer_hi": "प्रोसेसिंग स्टेज के साथ चैनल पाइपलाइन का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of the 'reflect.Type.Implements' method?",
        "question_hi": "'reflect.Type.Implements' मेथड का उद्देश्य क्या है?",
        "options_en": ["Check if type implements an interface", "Create interface implementations", "Modify interfaces", "Delete interfaces"],
        "options_hi": ["चेक करना कि टाइप इंटरफेस इम्प्लीमेंट करता है या नहीं", "इंटरफेस इम्प्लीमेंटेशन बनाना", "इंटरफेस मोडिफाई करना", "इंटरफेस डिलीट करना"],
        "answer_en": "Check if type implements an interface",
        "answer_hi": "चेक करना कि टाइप इंटरफेस इम्प्लीमेंट करता है या नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you implement consensus algorithms?",
        "question_hi": "कंसेंसस एल्गोरिदम कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Raft or Paxos with leader election", "With simple voting", "Using central coordinator", "With random selection"],
        "options_hi": ["लीडर इलेक्शन के साथ Raft या Paxos का उपयोग करके", "सिंपल वोटिंग के साथ", "सेंट्रल कोऑर्डिनेटर का उपयोग करके", "रैंडम सिलेक्शन के साथ"],
        "answer_en": "Using Raft or Paxos with leader election",
        "answer_hi": "लीडर इलेक्शन के साथ Raft या Paxos का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of the 'runtime.SetCPUProfileRate' function?",
        "question_hi": "'runtime.SetCPUProfileRate' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Set CPU profiling sampling rate", "Control CPU usage", "Set CPU affinity", "Modify CPU scheduling"],
        "options_hi": ["CPU प्रोफाइलिंग सैंपलिंग रेट सेट करना", "CPU यूसेज कंट्रोल करना", "CPU एफिनिटी सेट करना", "CPU शेड्यूलिंग मोडिफाई करना"],
        "answer_en": "Set CPU profiling sampling rate",
        "answer_hi": "CPU प्रोफाइलिंग सैंपलिंग रेट सेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you implement geospatial indexing?",
        "question_hi": "जियोस्पेशियल इंडेक्सिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using geohash or quadtree data structures", "With simple arrays", "Using hash maps only", "With sequential scanning"],
        "options_hi": ["जियोहैश या क्वाडट्री डेटा स्ट्रक्चर का उपयोग करके", "सिंपल ऐरे के साथ", "केवल हैश मैप का उपयोग करके", "सीक्वेंशियल स्कैनिंग के साथ"],
        "answer_en": "Using geohash or quadtree data structures",
        "answer_hi": "जियोहैश या क्वाडट्री डेटा स्ट्रक्चर का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of the 'unsafe.String' function?",
        "question_hi": "'unsafe.String' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Create string from byte pointer and length", "Convert string to byte pointer", "Modify string content", "Create new string types"],
        "options_hi": ["बाइट पॉइंटर और लेंथ से स्ट्रिंग बनाना", "स्ट्रिंग को बाइट पॉइंटर में कन्वर्ट करना", "स्ट्रिंग कंटेंट मोडिफाई करना", "नए स्ट्रिंग टाइप बनाना"],
        "answer_en": "Create string from byte pointer and length",
        "answer_hi": "बाइट पॉइंटर और लेंथ से स्ट्रिंग बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How do you implement time series databases?",
        "question_hi": "टाइम सीरीज डेटाबेस कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using columnar storage with time-based partitioning", "With simple key-value stores", "Using document databases", "With relational databases"],
        "options_hi": ["टाइम-बेस्ड पार्टिशनिंग के साथ कॉलमनर स्टोरेज का उपयोग करके", "सिंपल की-वैल्यू स्टोर के साथ", "डॉक्युमेंट डेटाबेस का उपयोग करके", "रिलेशनल डेटाबेस के साथ"],
        "answer_en": "Using columnar storage with time-based partitioning",
        "answer_hi": "टाइम-बेस्ड पार्टिशनिंग के साथ कॉलमनर स्टोरेज का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of the 'reflect.Value.TryRecv' method?",
        "question_hi": "'reflect.Value.TryRecv' मेथड का उद्देश्य क्या है?",
        "options_en": ["Non-blocking channel receive in reflection", "Blocking channel receive", "Send to channel", "Close channel"],
        "options_hi": ["रिफ्लेक्शन में नॉन-ब्लॉकिंग चैनल रिसीव", "ब्लॉकिंग चैनल रिसीव", "चैनल को सेंड करना", "चैनल क्लोज करना"],
        "answer_en": "Non-blocking channel receive in reflection",
        "answer_hi": "रिफ्लेक्शन में नॉन-ब्लॉकिंग चैनल रिसीव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you implement machine learning inference?",
        "question_hi": "मशीन लर्निंग इनफरेंस कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using ONNX runtime or TensorFlow bindings", "With manual algorithm implementation", "Using statistical packages", "With database queries"],
        "options_hi": ["ONNX रनटाइम या TensorFlow बाइंडिंग का उपयोग करके", "मैनुअल एल्गोरिदम इम्प्लीमेंटेशन के साथ", "स्टैटिस्टिकल पैकेज का उपयोग करके", "डेटाबेस क्वेरी के साथ"],
        "answer_en": "Using ONNX runtime or TensorFlow bindings",
        "answer_hi": "ONNX रनटाइम या TensorFlow बाइंडिंग का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of the 'runtime.UnlockOSThread' function?",
        "question_hi": "'runtime.UnlockOSThread' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Unbind goroutine from OS thread", "Create new threads", "Modify thread properties", "Control thread pooling"],
        "options_hi": ["गोरूटीन को OS थ्रेड से अनबाइंड करना", "नए थ्रेड बनाना", "थ्रेड प्रॉपर्टी मोडिफाई करना", "थ्रेड पूलिंग कंट्रोल करना"],
        "answer_en": "Unbind goroutine from OS thread",
        "answer_hi": "गोरूटीन को OS थ्रेड से अनबाइंड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How do you implement graph algorithms?",
        "question_hi": "ग्राफ एल्गोरिदम कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using adjacency lists or matrices with BFS/DFS", "With simple arrays", "Using hash maps only", "With sequential processing"],
        "options_hi": ["BFS/DFS के साथ एडजेंसी लिस्ट या मैट्रिक्स का उपयोग करके", "सिंपल ऐरे के साथ", "केवल हैश मैप का उपयोग करके", "सीक्वेंशियल प्रोसेसिंग के साथ"],
        "answer_en": "Using adjacency lists or matrices with BFS/DFS",
        "answer_hi": "BFS/DFS के साथ एडजेंसी लिस्ट या मैट्रिक्स का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of the 'reflect.Value.TrySend' method?",
        "question_hi": "'reflect.Value.TrySend' मेथड का उद्देश्य क्या है?",
        "options_en": ["Non-blocking channel send in reflection", "Blocking channel send", "Receive from channel", "Create new channels"],
        "options_hi": ["रिफ्लेक्शन में नॉन-ब्लॉकिंग चैनल सेंड", "ब्लॉकिंग चैनल सेंड", "चैनल से रिसीव करना", "नए चैनल बनाना"],
        "answer_en": "Non-blocking channel send in reflection",
        "answer_hi": "रिफ्लेक्शन में नॉन-ब्लॉकिंग चैनल सेंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How do you implement real-time collaboration?",
        "question_hi": "रियल-टाइम कॉलैबोरेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using WebSocket with operational transforms", "With simple HTTP polling", "Using file sharing", "With email notifications"],
        "options_hi": ["ऑपरेशनल ट्रांसफॉर्म के साथ WebSocket का उपयोग करके", "सिंपल HTTP पोलिंग के साथ", "फाइल शेयरिंग का उपयोग करके", "ईमेल नोटिफिकेशन के साथ"],
        "answer_en": "Using WebSocket with operational transforms",
        "answer_hi": "ऑपरेशनल ट्रांसफॉर्म के साथ WebSocket का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of the 'runtime.Gosched' function?",
        "question_hi": "'runtime.Gosched' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Yield processor, allowing other goroutines to run", "Stop current goroutine", "Create new goroutines", "Modify goroutine priority"],
        "options_hi": ["प्रोसेसर यील्ड करना, अन्य गोरूटीन को रन करने की अनुमति देना", "करंट गोरूटीन स्टॉप करना", "नई गोरूटीन बनाना", "गोरूटीन प्रायोरिटी मोडिफाई करना"],
        "answer_en": "Yield processor, allowing other goroutines to run",
        "answer_hi": "प्रोसेसर यील्ड करना, अन्य गोरूटीन को रन करने की अनुमति देना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How do you implement blockchain protocols?",
        "question_hi": "ब्लॉकचेन प्रोटोकॉल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using cryptographic hashing with merkle trees", "With simple linked lists", "Using arrays only", "With database records"],
        "options_hi": ["मर्कल ट्री के साथ क्रिप्टोग्राफिक हैशिंग का उपयोग करके", "सिंपल लिंक्ड लिस्ट के साथ", "केवल ऐरे का उपयोग करके", "डेटाबेस रिकॉर्ड के साथ"],
        "answer_en": "Using cryptographic hashing with merkle trees",
        "answer_hi": "मर्कल ट्री के साथ क्रिप्टोग्राफिक हैशिंग का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of the 'reflect.Value.MapRange' method?",
        "question_hi": "'reflect.Value.MapRange' मेथड का उद्देश्य क्या है?",
        "options_en": ["Iterate over map key-value pairs in reflection", "Create new maps", "Modify map values", "Delete map entries"],
        "options_hi": ["रिफ्लेक्शन में मैप की-वैल्यू पेयर पर इटरेट करना", "नए मैप बनाना", "मैप वैल्यू मोडिफाई करना", "मैप एंट्री डिलीट करना"],
        "answer_en": "Iterate over map key-value pairs in reflection",
        "answer_hi": "रिफ्लेक्शन में मैप की-वैल्यू पेयर पर इटरेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you implement quantum computing simulations?",
        "question_hi": "क्वांटम कंप्यूटिंग सिमुलेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using complex number matrices for quantum states", "With simple probability calculations", "Using statistical methods", "With random number generators"],
        "options_hi": ["क्वांटम स्टेट के लिए कॉम्प्लेक्स नंबर मैट्रिक्स का उपयोग करके", "सिंपल प्रोबेबिलिटी कैलकुलेशन के साथ", "स्टैटिस्टिकल मेथड का उपयोग करके", "रैंडम नंबर जनरेटर के साथ"],
        "answer_en": "Using complex number matrices for quantum states",
        "answer_hi": "क्वांटम स्टेट के लिए कॉम्प्लेक्स नंबर मैट्रिक्स का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of the 'runtime.Goexit' function?",
        "question_hi": "'runtime.Goexit' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Terminate the goroutine that calls it", "Terminate all goroutines", "Create new goroutines", "Modify goroutine state"],
        "options_hi": ["इसे कॉल करने वाली गोरूटीन को टर्मिनेट करना", "सभी गोरूटीन टर्मिनेट करना", "नई गोरूटीन बनाना", "गोरूटीन स्टेट मोडिफाई करना"],
        "answer_en": "Terminate the goroutine that calls it",
        "answer_hi": "इसे कॉल करने वाली गोरूटीन को टर्मिनेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How do you implement genetic algorithms?",
        "question_hi": "जेनेटिक एल्गोरिदम कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using selection, crossover, and mutation operations", "With simple random search", "Using gradient descent", "With brute force methods"],
        "options_hi": ["सिलेक्शन, क्रॉसओवर, और म्यूटेशन ऑपरेशन का उपयोग करके", "सिंपल रैंडम सर्च के साथ", "ग्रेडिएंट डिसेंट का उपयोग करके", "ब्रूट फोर्स मेथड के साथ"],
        "answer_en": "Using selection, crossover, and mutation operations",
        "answer_hi": "सिलेक्शन, क्रॉसओवर, और म्यूटेशन ऑपरेशन का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of the 'reflect.Value.Slice3' method?",
        "question_hi": "'reflect.Value.Slice3' मेथड का उद्देश्य क्या है?",
        "options_en": ["Three-index slicing operation in reflection", "Two-index slicing", "Create new slices", "Modify slice capacity"],
        "options_hi": ["रिफ्लेक्शन में थ्री-इंडेक्स स्लाइसिंग ऑपरेशन", "टू-इंडेक्स स्लाइसिंग", "नए स्लाइस बनाना", "स्लाइस कैपेसिटी मोडिफाई करना"],
        "answer_en": "Three-index slicing operation in reflection",
        "answer_hi": "रिफ्लेक्शन में थ्री-इंडेक्स स्लाइसिंग ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How do you implement neural networks?",
        "question_hi": "न्यूरल नेटवर्क कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using matrix operations with activation functions", "With simple if-else statements", "Using statistical methods", "With database queries"],
        "options_hi": ["एक्टिवेशन फंक्शन के साथ मैट्रिक्स ऑपरेशन का उपयोग करके", "सिंपल if-else स्टेटमेंट के साथ", "स्टैटिस्टिकल मेथड का उपयोग करके", "डेटाबेस क्वेरी के साथ"],
        "answer_en": "Using matrix operations with activation functions",
        "answer_hi": "एक्टिवेशन फंक्शन के साथ मैट्रिक्स ऑपरेशन का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of the 'runtime.SetMutexProfileFraction' function?",
        "question_hi": "'runtime.SetMutexProfileFraction' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Set fraction of mutex contention events reported", "Control mutex behavior", "Create mutex profiles", "Modify mutex implementation"],
        "options_hi": ["रिपोर्ट किए गए म्यूटेक्स कॉन्टेंशन इवेंट के फ्रैक्शन को सेट करना", "म्यूटेक्स बिहेवियर कंट्रोल करना", "म्यूटेक्स प्रोफाइल बनाना", "म्यूटेक्स इम्प्लीमेंटेशन मोडिफाई करना"],
        "answer_en": "Set fraction of mutex contention events reported",
        "answer_hi": "रिपोर्ट किए गए म्यूटेक्स कॉन्टेंशन इवेंट के फ्रैक्शन को सेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How do you implement computer vision algorithms?",
        "question_hi": "कंप्यूटर विजन एल्गोरिदम कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using image processing with convolution operations", "With simple pixel access", "Using file operations", "With text processing"],
        "options_hi": ["कन्वोल्यूशन ऑपरेशन के साथ इमेज प्रोसेसिंग का उपयोग करके", "सिंपल पिक्सेल एक्सेस के साथ", "फाइल ऑपरेशन का उपयोग करके", "टेक्स्ट प्रोसेसिंग के साथ"],
        "answer_en": "Using image processing with convolution operations",
        "answer_hi": "कन्वोल्यूशन ऑपरेशन के साथ इमेज प्रोसेसिंग का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of the 'reflect.Value.UnsafeAddr' method?",
        "question_hi": "'reflect.Value.UnsafeAddr' मेथड का उद्देश्य क्या है?",
        "options_en": ["Get unsafe.Pointer to the value's data", "Get value address safely", "Create new pointers", "Modify pointer values"],
        "options_hi": ["वैल्यू के डेटा का unsafe.Pointer प्राप्त करना", "वैल्यू एड्रेस सेफली प्राप्त करना", "नए पॉइंटर बनाना", "पॉइंटर वैल्यू मोडिफाई करना"],
        "answer_en": "Get unsafe.Pointer to the value's data",
        "answer_hi": "वैल्यू के डेटा का unsafe.Pointer प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How do you implement natural language processing?",
        "question_hi": "नेचुरल लैंग्वेज प्रोसेसिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using tokenization with linguistic analysis", "With simple string splitting", "Using regular expressions only", "With file processing"],
        "options_hi": ["लिंग्विस्टिक एनालिसिस के साथ टोकनाइजेशन का उपयोग करके", "सिंपल स्ट्रिंग स्प्लिटिंग के साथ", "केवल रेगुलर एक्सप्रेशन का उपयोग करके", "फाइल प्रोसेसिंग के साथ"],
        "answer_en": "Using tokenization with linguistic analysis",
        "answer_hi": "लिंग्विस्टिक एनालिसिस के साथ टोकनाइजेशन का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of the 'runtime.SetCgoTraceback' function?",
        "question_hi": "'runtime.SetCgoTraceback' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Enable CGO stack trace collection", "Disable CGO", "Control CGO performance", "Modify CGO behavior"],
        "options_hi": ["CGO स्टैक ट्रेस कलेक्शन एनेबल करना", "CGO डिसेबल करना", "CGO परफॉर्मेंस कंट्रोल करना", "CGO बिहेवियर मोडिफाई करना"],
        "answer_en": "Enable CGO stack trace collection",
        "answer_hi": "CGO स्टैक ट्रेस कलेक्शन एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How do you implement recommendation systems?",
        "question_hi": "रिकमेंडेशन सिस्टम कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using collaborative filtering with similarity measures", "With random suggestions", "Using popularity rankings", "With manual curation"],
        "options_hi": ["सिमिलैरिटी मेजर के साथ कॉलैबोरेटिव फिल्टरिंग का उपयोग करके", "रैंडम सजेशन के साथ", "पॉपुलैरिटी रैंकिंग का उपयोग करके", "मैनुअल क्यूरेशन के साथ"],
        "answer_en": "Using collaborative filtering with similarity measures",
        "answer_hi": "सिमिलैरिटी मेजर के साथ कॉलैबोरेटिव फिल्टरिंग का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of the 'reflect.Value.CanInterface' method?",
        "question_hi": "'reflect.Value.CanInterface' मेथड का उद्देश्य क्या है?",
        "options_en": ["Check if value can be converted to interface{}", "Create interface values", "Modify interface types", "Delete interface methods"],
        "options_hi": ["चेक करना कि वैल्यू interface{} में कन्वर्ट हो सकती है या नहीं", "इंटरफेस वैल्यू बनाना", "इंटरफेस टाइप मोडिफाई करना", "इंटरफेस मेथड डिलीट करना"],
        "answer_en": "Check if value can be converted to interface{}",
        "answer_hi": "चेक करना कि वैल्यू interface{} में कन्वर्ट हो सकती है या नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How do you implement anomaly detection?",
        "question_hi": "अनोमली डिटेक्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using statistical methods with outlier detection", "With simple threshold checks", "Using machine learning models", "All of the above"],
        "options_hi": ["आउटलायर डिटेक्शन के साथ स्टैटिस्टिकल मेथड का उपयोग करके", "सिंपल थ्रेशोल्ड चेक के साथ", "मशीन लर्निंग मॉडल का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of the 'runtime.Callers' function?",
        "question_hi": "'runtime.Callers' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get call stack's program counters", "Modify call stack", "Create stack frames", "Delete stack entries"],
        "options_hi": ["कॉल स्टैक के प्रोग्राम काउंटर प्राप्त करना", "कॉल स्टैक मोडिफाई करना", "स्टैक फ्रेम बनाना", "स्टैक एंट्री डिलीट करना"],
        "answer_en": "Get call stack's program counters",
        "answer_hi": "कॉल स्टैक के प्रोग्राम काउंटर प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How do you implement fraud detection?",
        "question_hi": "फ्रॉड डिटेक्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using pattern recognition with behavioral analysis", "With simple rule checking", "Using machine learning", "All of the above"],
        "options_hi": ["बिहेवियरल एनालिसिस के साथ पैटर्न रिकग्निशन का उपयोग करके", "सिंपल रूल चेकिंग के साथ", "मशीन लर्निंग का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of the 'reflect.Value.OverflowComplex' method?",
        "question_hi": "'reflect.Value.OverflowComplex' मेथड का उद्देश्य क्या है?",
        "options_en": ["Check complex number overflow in conversion", "Create complex numbers", "Modify complex values", "Delete complex numbers"],
        "options_hi": ["कन्वर्जन में कॉम्प्लेक्स नंबर ओवरफ्लो चेक करना", "कॉम्प्लेक्स नंबर बनाना", "कॉम्प्लेक्स वैल्यू मोडिफाई करना", "कॉम्प्लेक्स नंबर डिलीट करना"],
        "answer_en": "Check complex number overflow in conversion",
        "answer_hi": "कन्वर्जन में कॉम्प्लेक्स नंबर ओवरफ्लो चेक करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How do you implement predictive maintenance?",
        "question_hi": "प्रिडिक्टिव मेंटेनेंस कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sensor data analysis with failure prediction", "With scheduled maintenance only", "Using manual inspections", "With random checks"],
        "options_hi": ["फेलियर प्रिडिक्शन के साथ सेंसर डेटा एनालिसिस का उपयोग करके", "केवल शेड्यूल्ड मेंटेनेंस के साथ", "मैनुअल इंस्पेक्शन का उपयोग करके", "रैंडम चेक के साथ"],
        "answer_en": "Using sensor data analysis with failure prediction",
        "answer_hi": "फेलियर प्रिडिक्शन के साथ सेंसर डेटा एनालिसिस का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of the 'runtime.Func' type?",
        "question_hi": "'runtime.Func' टाइप का उद्देश्य क्या है?",
        "options_en": ["Represent function information in runtime", "Create new functions", "Modify function behavior", "Delete functions"],
        "options_hi": ["रनटाइम में फंक्शन इनफार्मेशन रिप्रेजेंट करना", "नए फंक्शन बनाना", "फंक्शन बिहेवियर मोडिफाई करना", "फंक्शन डिलीट करना"],
        "answer_en": "Represent function information in runtime",
        "answer_hi": "रनटाइम में फंक्शन इनफार्मेशन रिप्रेजेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you implement supply chain optimization?",
        "question_hi": "सप्लाई चेन ऑप्टिमाइज़ेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using linear programming with constraint optimization", "With simple scheduling", "Using manual planning", "With random allocation"],
        "options_hi": ["कंस्ट्रेंट ऑप्टिमाइज़ेशन के साथ लीनियर प्रोग्रामिंग का उपयोग करके", "सिंपल शेड्यूलिंग के साथ", "मैनुअल प्लानिंग का उपयोग करके", "रैंडम अलोकेशन के साथ"],
        "answer_en": "Using linear programming with constraint optimization",
        "answer_hi": "कंस्ट्रेंट ऑप्टिमाइज़ेशन के साथ लीनियर प्रोग्रामिंग का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of the 'reflect.Value.OverflowFloat' method?",
        "question_hi": "'reflect.Value.OverflowFloat' मेथड का उद्देश्य क्या है?",
        "options_en": ["Check float overflow in conversion", "Create float values", "Modify float precision", "Delete float values"],
        "options_hi": ["कन्वर्जन में फ्लोट ओवरफ्लो चेक करना", "फ्लोट वैल्यू बनाना", "फ्लोट प्रिसिजन मोडिफाई करना", "फ्लोट वैल्यू डिलीट करना"],
        "answer_en": "Check float overflow in conversion",
        "answer_hi": "कन्वर्जन में फ्लोट ओवरफ्लो चेक करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you implement energy management systems?",
        "question_hi": "एनर्जी मैनेजमेंट सिस्टम कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using smart grid algorithms with consumption optimization", "With simple monitoring", "Using manual control", "With fixed schedules"],
        "options_hi": ["कंजम्पशन ऑप्टिमाइज़ेशन के साथ स्मार्ट ग्रिड एल्गोरिदम का उपयोग करके", "सिंपल मॉनिटरिंग के साथ", "मैनुअल कंट्रोल का उपयोग करके", "फिक्स्ड शेड्यूल के साथ"],
        "answer_en": "Using smart grid algorithms with consumption optimization",
        "answer_hi": "कंजम्पशन ऑप्टिमाइज़ेशन के साथ स्मार्ट ग्रिड एल्गोरिदम का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of the 'runtime.Frames' type?",
        "question_hi": "'runtime.Frames' टाइप का उद्देश्य क्या है?",
        "options_en": ["Iterate over call stack frames", "Create stack frames", "Modify frame information", "Delete stack frames"],
        "options_hi": ["कॉल स्टैक फ्रेम पर इटरेट करना", "स्टैक फ्रेम बनाना", "फ्रेम इनफार्मेशन मोडिफाई करना", "स्टैक फ्रेम डिलीट करना"],
        "answer_en": "Iterate over call stack frames",
        "answer_hi": "कॉल स्टैक फ्रेम पर इटरेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How do you implement autonomous vehicle control?",
        "question_hi": "ऑटोनोमस व्हीकल कंट्रोल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sensor fusion with control algorithms", "With manual driving only", "Using simple rules", "With remote control"],
        "options_hi": ["कंट्रोल एल्गोरिदम के साथ सेंसर फ्यूजन का उपयोग करके", "केवल मैनुअल ड्राइविंग के साथ", "सिंपल रूल का उपयोग करके", "रिमोट कंट्रोल के साथ"],
        "answer_en": "Using sensor fusion with control algorithms",
        "answer_hi": "कंट्रोल एल्गोरिदम के साथ सेंसर फ्यूजन का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of the 'reflect.Value.OverflowInt' method?",
        "question_hi": "'reflect.Value.OverflowInt' मेथड का उद्देश्य क्या है?",
        "options_en": ["Check integer overflow in conversion", "Create integer values", "Modify integer ranges", "Delete integer values"],
        "options_hi": ["कन्वर्जन में इंटीजर ओवरफ्लो चेक करना", "इंटीजर वैल्यू बनाना", "इंटीजर रेंज मोडिफाई करना", "इंटीजर वैल्यू डिलीट करना"],
        "answer_en": "Check integer overflow in conversion",
        "answer_hi": "कन्वर्जन में इंटीजर ओवरफ्लो चेक करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you implement smart city infrastructure?",
        "question_hi": "स्मार्ट सिटी इन्फ्रास्ट्रक्चर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using IoT networks with data analytics", "With manual monitoring", "Using simple sensors", "With periodic checks"],
        "options_hi": ["डेटा एनालिटिक्स के साथ IoT नेटवर्क का उपयोग करके", "मैनुअल मॉनिटरिंग के साथ", "सिंपल सेंसर का उपयोग करके", "पीरियडिक चेक के साथ"],
        "answer_en": "Using IoT networks with data analytics",
        "answer_hi": "डेटा एनालिटिक्स के साथ IoT नेटवर्क का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of the 'reflect.Value.OverflowUint' method?",
        "question_hi": "'reflect.Value.OverflowUint' मेथड का उद्देश्य क्या है?",
        "options_en": ["Check unsigned integer overflow in conversion", "Create unsigned integers", "Modify unsigned ranges", "Delete unsigned values"],
        "options_hi": ["कन्वर्जन में अनसाइन्ड इंटीजर ओवरफ्लो चेक करना", "अनसाइन्ड इंटीजर बनाना", "अनसाइन्ड रेंज मोडिफाई करना", "अनसाइन्ड वैल्यू डिलीट करना"],
        "answer_en": "Check unsigned integer overflow in conversion",
        "answer_hi": "कन्वर्जन में अनसाइन्ड इंटीजर ओवरफ्लो चेक करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you implement digital twins?",
        "question_hi": "डिजिटल ट्विन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using real-time data synchronization with simulation models", "With static models only", "Using manual updates", "With periodic synchronization"],
        "options_hi": ["सिमुलेशन मॉडल के साथ रियल-टाइम डेटा सिंक्रोनाइज़ेशन का उपयोग करके", "केवल स्टैटिक मॉडल के साथ", "मैनुअल अपडेट का उपयोग करके", "पीरियडिक सिंक्रोनाइज़ेशन के साथ"],
        "answer_en": "Using real-time data synchronization with simulation models",
        "answer_hi": "सिमुलेशन मॉडल के साथ रियल-टाइम डेटा सिंक्रोनाइज़ेशन का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of the 'runtime.Frame' type?",
        "question_hi": "'runtime.Frame' टाइप का उद्देश्य क्या है?",
        "options_en": ["Represent call stack frame information", "Create stack frames", "Modify frame data", "Delete frames"],
        "options_hi": ["कॉल स्टैक फ्रेम इनफार्मेशन रिप्रेजेंट करना", "स्टैक फ्रेम बनाना", "फ्रेम डेटा मोडिफाई करना", "फ्रेम डिलीट करना"],
        "answer_en": "Represent call stack frame information",
        "answer_hi": "कॉल स्टैक फ्रेम इनफार्मेशन रिप्रेजेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How do you implement augmented reality?",
        "question_hi": "ऑगमेंटेड रियलिटी कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using computer vision with 3D rendering", "With simple image overlay", "Using manual alignment", "With static images"],
        "options_hi": ["3D रेंडरिंग के साथ कंप्यूटर विजन का उपयोग करके", "सिंपल इमेज ओवरले के साथ", "मैनुअल अलाइनमेंट का उपयोग करके", "स्टैटिक इमेज के साथ"],
        "answer_en": "Using computer vision with 3D rendering",
        "answer_hi": "3D रेंडरिंग के साथ कंप्यूटर विजन का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of the 'reflect.Value.SetMapIndex' method?",
        "question_hi": "'reflect.Value.SetMapIndex' मेथड का उद्देश्य क्या है?",
        "options_en": ["Set map key-value pair in reflection", "Create new maps", "Modify map structure", "Delete map entries"],
        "options_hi": ["रिफ्लेक्शन में मैप की-वैल्यू पेयर सेट करना", "नए मैप बनाना", "मैप स्ट्रक्चर मोडिफाई करना", "मैप एंट्री डिलीट करना"],
        "answer_en": "Set map key-value pair in reflection",
        "answer_hi": "रिफ्लेक्शन में मैप की-वैल्यू पेयर सेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do you implement virtual reality?",
        "question_hi": "वर्चुअल रियलिटी कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using head tracking with immersive rendering", "With simple 3D graphics", "Using 2D displays", "With static environments"],
        "options_hi": ["इमर्सिव रेंडरिंग के साथ हेड ट्रैकिंग का उपयोग करके", "सिंपल 3D ग्राफिक्स के साथ", "2D डिस्प्ले का उपयोग करके", "स्टैटिक एनवायरनमेंट के साथ"],
        "answer_en": "Using head tracking with immersive rendering",
        "answer_hi": "इमर्सिव रेंडरिंग के साथ हेड ट्रैकिंग का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of the 'reflect.Value.Send' method?",
        "question_hi": "'reflect.Value.Send' मेथड का उद्देश्य क्या है?",
        "options_en": ["Send value to channel in reflection", "Create new channels", "Modify channel properties", "Close channels"],
        "options_hi": ["रिफ्लेक्शन में चैनल को वैल्यू सेंड करना", "नए चैनल बनाना", "चैनल प्रॉपर्टी मोडिफाई करना", "चैनल क्लोज करना"],
        "answer_en": "Send value to channel in reflection",
        "answer_hi": "रिफ्लेक्शन में चैनल को वैल्यू सेंड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How do you implement metaverse platforms?",
        "question_hi": "मेटावर्स प्लेटफॉर्म कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using 3D virtual worlds with social interaction", "With simple chat rooms", "Using 2D interfaces", "With static content"],
        "options_hi": ["सोशल इंटरेक्शन के साथ 3D वर्चुअल वर्ल्ड का उपयोग करके", "सिंपल चैट रूम के साथ", "2D इंटरफेस का उपयोग करके", "स्टैटिक कंटेंट के साथ"],
        "answer_en": "Using 3D virtual worlds with social interaction",
        "answer_hi": "सोशल इंटरेक्शन के साथ 3D वर्चुअल वर्ल्ड का उपयोग करके",
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