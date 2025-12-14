const questions=[
    {
        "num": 1,
        "question_en": "What is the purpose of the 'runtime.MemStats' struct?",
        "question_hi": "'runtime.MemStats' स्ट्रक्चर का उद्देश्य क्या है?",
        "options_en": ["Track memory allocation statistics", "Monitor garbage collection", "Profile heap usage", "All of the above"],
        "options_hi": ["मेमोरी अलोकेशन स्टैटिस्टिक्स ट्रैक करना", "गार्बेज कलेक्शन मॉनिटर करना", "हीप यूसेज प्रोफाइल करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How do you implement a lock-free stack using atomic operations?",
        "question_hi": "एटॉमिक ऑपरेशन का उपयोग करके लॉक-फ्री स्टैक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using CompareAndSwap for head pointer", "With atomic load/store operations", "Implementing Treiber's algorithm", "All of the above"],
        "options_hi": ["हेड पॉइंटर के लिए CompareAndSwap का उपयोग करके", "एटॉमिक लोड/स्टोर ऑपरेशन के साथ", "ट्रेबर के एल्गोरिदम को इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the purpose of the 'unsafe.Add' function?",
        "question_hi": "'unsafe.Add' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Pointer arithmetic with offset", "Calculate memory addresses", "Low-level pointer manipulation", "All of the above"],
        "options_hi": ["ऑफसेट के साथ पॉइंटर अर्थमेटिक", "मेमोरी एड्रेस कैलकुलेट करना", "लो-लेवल पॉइंटर मैनिपुलेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you implement a write-preferring RW mutex?",
        "question_hi": "राइट-प्रेफरिंग RW म्यूटेक्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using writer-preference algorithm", "With starvation prevention", "Implementing fair scheduling", "All of the above"],
        "options_hi": ["राइटर-प्रेफरेंस एल्गोरिदम का उपयोग करके", "स्टार्वेशन प्रिवेंशन के साथ", "फेयर शेड्यूलिंग इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of the 'runtime/debug' package?",
        "question_hi": "'runtime/debug' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Debugging utilities", "Stack trace analysis", "Memory statistics", "All of the above"],
        "options_hi": ["डीबगिंग यूटिलिटी", "स्टैक ट्रेस एनालिसिस", "मेमोरी स्टैटिस्टिक्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you implement zero-copy network I/O?",
        "question_hi": "जीरो-कॉपी नेटवर्क I/O कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using io_uring system calls", "With scatter-gather operations", "Implementing buffer sharing", "All of the above"],
        "options_hi": ["io_uring सिस्टम कॉल का उपयोग करके", "स्कैटर-गैदर ऑपरेशन के साथ", "बफर शेयरिंग इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of the 'reflect.MapIter' type?",
        "question_hi": "'reflect.MapIter' टाइप का उद्देश्य क्या है?",
        "options_en": ["Iterate over maps in reflection", "Efficient map traversal", "Reflection-based iteration", "All of the above"],
        "options_hi": ["रिफ्लेक्शन में मैप पर इटरेट करना", "एफिशिएंट मैप ट्रैवर्सल", "रिफ्लेक्शन-बेस्ड इटरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you implement custom memory arenas?",
        "question_hi": "कस्टम मेमोरी एरिना कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using large memory blocks", "With manual allocation tracking", "Implementing region-based allocation", "All of the above"],
        "options_hi": ["लार्ज मेमोरी ब्लॉक का उपयोग करके", "मैनुअल अलोकेशन ट्रैकिंग के साथ", "रीजन-बेस्ड अलोकेशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of the 'context.WithoutCancel' function?",
        "question_hi": "'context.WithoutCancel' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Create context without cancellation", "Detach from parent cancellation", "Persistent context creation", "All of the above"],
        "options_hi": ["कैंसलेशन के बिना कॉन्टेक्स्ट बनाना", "पैरेंट कैंसलेशन से डिटैच करना", "पर्सिस्टेंट कॉन्टेक्स्ट क्रिएशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you implement thread-local storage in Go?",
        "question_hi": "Go में थ्रेड-लोकल स्टोरेज कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using goroutine-local variables", "With context.Value storage", "Implementing TLS with sync.Pool", "All of the above"],
        "options_hi": ["गोरूटीन-लोकल वेरिएबल का उपयोग करके", "context.Value स्टोरेज के साथ", "sync.Pool के साथ TLS इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of the 'runtime.SetFinalizer' in resource management?",
        "question_hi": "रिसोर्स मैनेजमेंट में 'runtime.SetFinalizer' का उद्देश्य क्या है?",
        "options_en": ["Automatic resource cleanup", "Finalizer-based management", "GC-triggered cleanup", "All of the above"],
        "options_hi": ["ऑटोमैटिक रिसोर्स क्लीनअप", "फाइनलाइज़र-बेस्ड मैनेजमेंट", "GC-ट्रिगर्ड क्लीनअप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you implement a lock-free queue?",
        "question_hi": "लॉक-फ्री क्यू कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Michael-Scott algorithm", "With atomic pointer operations", "Implementing MPMC queue", "All of the above"],
        "options_hi": ["माइकल-स्कॉट एल्गोरिदम का उपयोग करके", "एटॉमिक पॉइंटर ऑपरेशन के साथ", "MPMC क्यू इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of the 'reflect.Value.InterfaceData' method?",
        "question_hi": "'reflect.Value.InterfaceData' मेथड का उद्देश्य क्या है?",
        "options_en": ["Get interface representation", "Low-level interface access", "Reflection-based interface manipulation", "All of the above"],
        "options_hi": ["इंटरफेस रिप्रेजेंटेशन प्राप्त करना", "लो-लेवल इंटरफेस एक्सेस", "रिफ्लेक्शन-बेस्ड इंटरफेस मैनिपुलेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you implement memory-mapped I/O for devices?",
        "question_hi": "डिवाइस के लिए मेमोरी-मैप्ड I/O कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using /dev/mem access", "With register mapping", "Implementing MMIO drivers", "All of the above"],
        "options_hi": ["/dev/mem एक्सेस का उपयोग करके", "रजिस्टर मैपिंग के साथ", "MMIO ड्राइवर इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of the 'runtime.CallersFrames' function?",
        "question_hi": "'runtime.CallersFrames' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Convert program counters to frames", "Stack frame analysis", "Debug information extraction", "All of the above"],
        "options_hi": ["प्रोग्राम काउंटर को फ्रेम में कन्वर्ट करना", "स्टैक फ्रेम एनालिसिस", "डीबग इनफार्मेशन एक्सट्रैक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you implement a slab allocator?",
        "question_hi": "स्लैब अलोकेटर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using fixed-size object caching", "With memory pool management", "Implementing efficient allocation", "All of the above"],
        "options_hi": ["फिक्स्ड-साइज ऑब्जेक्ट कैशिंग का उपयोग करके", "मेमोरी पूल मैनेजमेंट के साथ", "एफिशिएंट अलोकेशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of the 'sync.WaitGroup' in pipeline patterns?",
        "question_hi": "पाइपलाइन पैटर्न में 'sync.WaitGroup' का उद्देश्य क्या है?",
        "options_en": ["Coordinate goroutine completion", "Pipeline stage synchronization", "Work completion tracking", "All of the above"],
        "options_hi": ["गोरूटीन कम्पलीशन कोऑर्डिनेट करना", "पाइपलाइन स्टेज सिंक्रोनाइज़ेशन", "वर्क कम्पलीशन ट्रैकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you implement adaptive backpressure?",
        "question_hi": "अडैप्टिव बैकप्रेशर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using dynamic buffer sizing", "With load-based throttling", "Implementing feedback control", "All of the above"],
        "options_hi": ["डायनामिक बफर साइजिंग का उपयोग करके", "लोड-बेस्ड थ्रॉटलिंग के साथ", "फीडबैक कंट्रोल इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of the 'runtime.FuncForPC' in profiling?",
        "question_hi": "प्रोफाइलिंग में 'runtime.FuncForPC' का उद्देश्य क्या है?",
        "options_en": ["Function identification from PC", "Profile symbol resolution", "Performance analysis", "All of the above"],
        "options_hi": ["PC से फंक्शन आइडेंटिफिकेशन", "प्रोफाइल सिंबल रेजोल्यूशन", "परफॉर्मेंस एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you implement a concurrent skip list?",
        "question_hi": "कनकरेंट स्किप लिस्ट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using lock-free node insertion", "With probabilistic balancing", "Implementing concurrent search", "All of the above"],
        "options_hi": ["लॉक-फ्री नोड इंसर्शन का उपयोग करके", "प्रोबेबिलिस्टिक बैलेंसिंग के साथ", "कनकरेंट सर्च इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of the 'context.WithDeadlineCause' function?",
        "question_hi": "'context.WithDeadlineCause' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Create deadline context with cause", "Custom timeout error handling", "Enhanced context cancellation", "All of the above"],
        "options_hi": ["कॉज के साथ डेडलाइन कॉन्टेक्स्ट बनाना", "कस्टम टाइमआउट एरर हैंडलिंग", "एन्हांस्ड कॉन्टेक्स्ट कैंसलेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you implement graceful connection draining?",
        "question_hi": "ग्रेसफुल कनेक्शन ड्रेनिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using connection tracking", "With graceful shutdown hooks", "Implementing drain timeouts", "All of the above"],
        "options_hi": ["कनेक्शन ट्रैकिंग का उपयोग करके", "ग्रेसफुल शटडाउन हुक के साथ", "ड्रेन टाइमआउट इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of the 'runtime.Stack' in crash reporting?",
        "question_hi": "क्रैश रिपोर्टिंग में 'runtime.Stack' का उद्देश्य क्या है?",
        "options_en": ["Capture stack traces", "Error context collection", "Debug information gathering", "All of the above"],
        "options_hi": ["स्टैक ट्रेस कैप्चर करना", "एरर कॉन्टेक्स्ट कलेक्शन", "डीबग इनफार्मेशन गैदरिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How do you implement a bulkhead pattern?",
        "question_hi": "बल्कहेड पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using resource isolation", "With independent pools", "Implementing failure containment", "All of the above"],
        "options_hi": ["रिसोर्स आइसोलेशन का उपयोग करके", "इंडिपेंडेंट पूल के साथ", "फेलियर कंटेनमेंट इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of the 'reflect.Value.Seq2' method?",
        "question_hi": "'reflect.Value.Seq2' मेथड का उद्देश्य क्या है?",
        "options_en": ["Two-value sequence operations", "Reflection-based iteration", "Sequence manipulation", "All of the above"],
        "options_hi": ["टू-वैल्यू सीक्वेंस ऑपरेशन", "रिफ्लेक्शन-बेस्ड इटरेशन", "सीक्वेंस मैनिपुलेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How do you implement columnar storage?",
        "question_hi": "कॉलमनर स्टोरेज कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using column-wise data layout", "With efficient compression", "Implementing vectorized operations", "All of the above"],
        "options_hi": ["कॉलम-वाइज डेटा लेआउट का उपयोग करके", "एफिशिएंट कम्प्रेशन के साथ", "वेक्टराइज्ड ऑपरेशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of the 'runtime.MemProfile' function?",
        "question_hi": "'runtime.MemProfile' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Generate memory profile", "Allocation tracking", "Memory usage analysis", "All of the above"],
        "options_hi": ["मेमोरी प्रोफाइल जनरेट करना", "अलोकेशन ट्रैकिंग", "मेमोरी यूसेज एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How do you implement connection multiplexing?",
        "question_hi": "कनेक्शन मल्टीप्लेक्सिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using HTTP/2 streams", "With QUIC protocol", "Implementing connection pooling", "All of the above"],
        "options_hi": ["HTTP/2 स्ट्रीम का उपयोग करके", "QUIC प्रोटोकॉल के साथ", "कनेक्शन पूलिंग इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of the 'unsafe.SliceData' function?",
        "question_hi": "'unsafe.SliceData' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get slice underlying array pointer", "Low-level slice access", "Memory buffer manipulation", "All of the above"],
        "options_hi": ["स्लाइस अंडरलाइंग ऐरे पॉइंटर प्राप्त करना", "लो-लेवल स्लाइस एक्सेस", "मेमोरी बफर मैनिपुलेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you implement adaptive rate limiting?",
        "question_hi": "अडैप्टिव रेट लिमिटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using PID controller", "With feedback mechanisms", "Implementing dynamic thresholds", "All of the above"],
        "options_hi": ["PID कंट्रोलर का उपयोग करके", "फीडबैक मैकेनिज्म के साथ", "डायनामिक थ्रेशोल्ड इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of the 'runtime.SetBlockProfileRate' in concurrency analysis?",
        "question_hi": "कनकरेंसी एनालिसिस में 'runtime.SetBlockProfileRate' का उद्देश्य क्या है?",
        "options_en": ["Monitor goroutine blocking", "Concurrency profiling", "Performance bottleneck detection", "All of the above"],
        "options_hi": ["गोरूटीन ब्लॉकिंग मॉनिटर करना", "कनकरेंसी प्रोफाइलिंग", "परफॉर्मेंस बॉटलनेक डिटेक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you implement distributed sagas?",
        "question_hi": "डिस्ट्रीब्यूटेड सागा कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using compensation transactions", "With saga orchestrator", "Implementing distributed transactions", "All of the above"],
        "options_hi": ["कम्पेंसेशन ट्रांजैक्शन का उपयोग करके", "सागा ऑर्केस्ट्रेटर के साथ", "डिस्ट्रीब्यूटेड ट्रांजैक्शन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of the 'reflect.Value.MapIndex' method?",
        "question_hi": "'reflect.Value.MapIndex' मेथड का उद्देश्य क्या है?",
        "options_en": ["Get map value by key in reflection", "Reflection-based map access", "Dynamic map lookup", "All of the above"],
        "options_hi": ["रिफ्लेक्शन में की द्वारा मैप वैल्यू प्राप्त करना", "रिफ्लेक्शन-बेस्ड मैप एक्सेस", "डायनामिक मैप लुकअप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you implement shared memory across processes?",
        "question_hi": "प्रोसेस के आर-पार शेयर्ड मेमोरी कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using POSIX shm", "With memory-mapped files", "Implementing IPC mechanisms", "All of the above"],
        "options_hi": ["POSIX shm का उपयोग करके", "मेमोरी-मैप्ड फाइल के साथ", "IPC मैकेनिज्म इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of the 'runtime.NumGoroutine' in monitoring?",
        "question_hi": "मॉनिटरिंग में 'runtime.NumGoroutine' का उद्देश्य क्या है?",
        "options_en": ["Track goroutine count", "Concurrency monitoring", "Resource usage tracking", "All of the above"],
        "options_hi": ["गोरूटीन काउंट ट्रैक करना", "कनकरेंसी मॉनिटरिंग", "रिसोर्स यूसेज ट्रैकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do you implement a counting bloom filter?",
        "question_hi": "काउंटिंग ब्लूम फिल्टर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using counter arrays", "With deletion support", "Implementing frequency estimation", "All of the above"],
        "options_hi": ["काउंटर ऐरे का उपयोग करके", "डिलीशन सपोर्ट के साथ", "फ्रीक्वेंसी एस्टिमेशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of the 'sync.Cond.Broadcast' method?",
        "question_hi": "'sync.Cond.Broadcast' मेथड का उद्देश्य क्या है?",
        "options_en": ["Wake all waiting goroutines", "Mass notification", "Condition variable signaling", "All of the above"],
        "options_hi": ["सभी वेटिंग गोरूटीन को वेक करना", "मास नोटिफिकेशन", "कंडीशन वेरिएबल सिग्नलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How do you implement work-stealing schedulers?",
        "question_hi": "वर्क-स्टीलिंग शेड्यूलर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using deque-based scheduling", "With load balancing", "Implementing efficient task distribution", "All of the above"],
        "options_hi": ["डेक-बेस्ड शेड्यूलिंग का उपयोग करके", "लोड बैलेंसिंग के साथ", "एफिशिएंट टास्क डिस्ट्रीब्यूशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of the 'runtime.LockOSThread' in GUI applications?",
        "question_hi": "GUI एप्लिकेशन में 'runtime.LockOSThread' का उद्देश्य क्या है?",
        "options_en": ["UI thread binding", "GUI framework compatibility", "Thread-specific operations", "All of the above"],
        "options_hi": ["UI थ्रेड बाइंडिंग", "GUI फ्रेमवर्क कम्पेटिबिलिटी", "थ्रेड-स्पेसिफिक ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How do you implement version vectors?",
        "question_hi": "वर्जन वेक्टर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using node-specific counters", "With causal tracking", "Implementing conflict detection", "All of the above"],
        "options_hi": ["नोड-स्पेसिफिक काउंटर का उपयोग करके", "कॉज़ल ट्रैकिंग के साथ", "कनफ्लिक्ट डिटेक्शन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of the 'reflect.Value.SetString' method?",
        "question_hi": "'reflect.Value.SetString' मेथड का उद्देश्य क्या है?",
        "options_en": ["Set string value in reflection", "Reflection-based assignment", "Dynamic string modification", "All of the above"],
        "options_hi": ["रिफ्लेक्शन में स्ट्रिंग वैल्यू सेट करना", "रिफ्लेक्शन-बेस्ड असाइनमेंट", "डायनामिक स्ट्रिंग मोडिफिकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How do you implement vector clocks for partial ordering?",
        "question_hi": "पार्शियल ऑर्डरिंग के लिए वेक्टर क्लॉक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using process-specific timestamps", "With causal history tracking", "Implementing happens-before relations", "All of the above"],
        "options_hi": ["प्रोसेस-स्पेसिफिक टाइमस्टैम्प का उपयोग करके", "कॉज़ल हिस्ट्री ट्रैकिंग के साथ", "हैपन्स-बिफोर रिलेशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of the 'runtime.StartTrace' in performance analysis?",
        "question_hi": "परफॉर्मेंस एनालिसिस में 'runtime.StartTrace' का उद्देश्य क्या है?",
        "options_en": ["Capture execution events", "Performance profiling", "Runtime behavior analysis", "All of the above"],
        "options_hi": ["एक्सेक्यूशन इवेंट कैप्चर करना", "परफॉर्मेंस प्रोफाइलिंग", "रनटाइम बिहेवियर एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How do you implement rendezvous hashing?",
        "question_hi": "रेंडेज़वस हैशिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using highest random weight", "With minimal disruption", "Implementing load distribution", "All of the above"],
        "options_hi": ["हाइएस्ट रैंडम वेट का उपयोग करके", "मिनिमल डिसरप्शन के साथ", "लोड डिस्ट्रीब्यूशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of the 'unsafe.StringData' function?",
        "question_hi": "'unsafe.StringData' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get string underlying byte pointer", "Low-level string access", "String memory manipulation", "All of the above"],
        "options_hi": ["स्ट्रिंग अंडरलाइंग बाइट पॉइंटर प्राप्त करना", "लो-लेवल स्ट्रिंग एक्सेस", "स्ट्रिंग मेमोरी मैनिपुलेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How do you implement distributed queues?",
        "question_hi": "डिस्ट्रीब्यूटेड क्यू कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Redis streams", "With Kafka topics", "Implementing message brokers", "All of the above"],
        "options_hi": ["Redis स्ट्रीम का उपयोग करके", "Kafka टॉपिक के साथ", "मैसेज ब्रोकर इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of the 'runtime.GC' in memory management?",
        "question_hi": "मेमोरी मैनेजमेंट में 'runtime.GC' का उद्देश्य क्या है?",
        "options_en": ["Force garbage collection", "Memory cleanup", "Performance optimization", "All of the above"],
        "options_hi": ["गार्बेज कलेक्शन फोर्स करना", "मेमोरी क्लीनअप", "परफॉर्मेंस ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you implement log-structured merge trees?",
        "question_hi": "लॉग-स्ट्रक्चर्ड मर्ज ट्री कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using SSTable format", "With compaction strategies", "Implementing level-based storage", "All of the above"],
        "options_hi": ["SSTable फॉर्मेट का उपयोग करके", "कम्पैक्शन स्ट्रैटेजी के साथ", "लेवल-बेस्ड स्टोरेज इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of the 'reflect.Value.Bytes' method?",
        "question_hi": "'reflect.Value.Bytes' मेथड का उद्देश्य क्या है?",
        "options_en": ["Get byte slice from value", "Reflection-based conversion", "Byte data extraction", "All of the above"],
        "options_hi": ["वैल्यू से बाइट स्लाइस प्राप्त करना", "रिफ्लेक्शन-बेस्ड कन्वर्जन", "बाइट डेटा एक्सट्रैक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you implement stateful stream processing?",
        "question_hi": "स्टेटफुल स्ट्रीम प्रोसेसिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using windowed aggregations", "With state management", "Implementing checkpointing", "All of the above"],
        "options_hi": ["विंडोड एग्रीगेशन का उपयोग करके", "स्टेट मैनेजमेंट के साथ", "चेकपॉइंटिंग इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of the 'runtime.KeepAlive' in finalizer safety?",
        "question_hi": "फाइनलाइज़र सेफ्टी में 'runtime.KeepAlive' का उद्देश्य क्या है?",
        "options_en": ["Prevent premature collection", "Extend object lifetime", "Finalizer timing control", "All of the above"],
        "options_hi": ["प्रीमेच्योर कलेक्शन रोकना", "ऑब्जेक्ट लाइफटाइम एक्सटेंड करना", "फाइनलाइज़र टाइमिंग कंट्रोल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How do you implement complex event processing?",
        "question_hi": "कॉम्प्लेक्स इवेंट प्रोसेसिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using event pattern matching", "With temporal reasoning", "Implementing rule engines", "All of the above"],
        "options_hi": ["इवेंट पैटर्न मैचिंग का उपयोग करके", "टेम्पोरल रीजनिंग के साथ", "रूल इंजन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of the 'reflect.Type.AssignableTo' method?",
        "question_hi": "'reflect.Type.AssignableTo' मेथड का उद्देश्य क्या है?",
        "options_en": ["Check type assignability", "Type compatibility verification", "Reflection-based type checking", "All of the above"],
        "options_hi": ["टाइप असाइनेबिलिटी चेक करना", "टाइप कम्पेटिबिलिटी वेरिफिकेशन", "रिफ्लेक्शन-बेस्ड टाइप चेकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you implement Byzantine fault tolerance?",
        "question_hi": "बाइज़ेंटाइन फॉल्ट टॉलरेंस कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using PBFT algorithm", "With cryptographic proofs", "Implementing consensus with faults", "All of the above"],
        "options_hi": ["PBFT एल्गोरिदम का उपयोग करके", "क्रिप्टोग्राफिक प्रूफ के साथ", "फॉल्ट के साथ कंसेंसस इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of the 'runtime.SetCPUProfileRate' in CPU profiling?",
        "question_hi": "CPU प्रोफाइलिंग में 'runtime.SetCPUProfileRate' का उद्देश्य क्या है?",
        "options_en": ["Control profiling frequency", "Performance monitoring", "CPU usage analysis", "All of the above"],
        "options_hi": ["प्रोफाइलिंग फ्रीक्वेंसी कंट्रोल करना", "परफॉर्मेंस मॉनिटरिंग", "CPU यूसेज एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you implement spatial databases?",
        "question_hi": "स्पेशियल डेटाबेस कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using R-tree indexing", "With geometric operations", "Implementing spatial queries", "All of the above"],
        "options_hi": ["R-ट्री इंडेक्सिंग का उपयोग करके", "ज्योमेट्रिक ऑपरेशन के साथ", "स्पेशियल क्वेरी इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of the 'unsafe.Slice' in memory manipulation?",
        "question_hi": "मेमोरी मैनिपुलेशन में 'unsafe.Slice' का उद्देश्य क्या है?",
        "options_en": ["Create slices from pointers", "Low-level slice construction", "Memory region slicing", "All of the above"],
        "options_hi": ["पॉइंटर से स्लाइस बनाना", "लो-लेवल स्लाइस कंस्ट्रक्शन", "मेमोरी रीजन स्लाइसिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How do you implement time-series compression?",
        "question_hi": "टाइम-सीरीज कम्प्रेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using delta encoding", "With run-length encoding", "Implementing specialized algorithms", "All of the above"],
        "options_hi": ["डेल्टा एन्कोडिंग का उपयोग करके", "रन-लेंथ एन्कोडिंग के साथ", "स्पेशलाइज्ड एल्गोरिदम इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of the 'reflect.Value.TryRecv' in channel operations?",
        "question_hi": "चैनल ऑपरेशन में 'reflect.Value.TryRecv' का उद्देश्य क्या है?",
        "options_en": ["Non-blocking channel receive", "Channel state checking", "Reflection-based polling", "All of the above"],
        "options_hi": ["नॉन-ब्लॉकिंग चैनल रिसीव", "चैनल स्टेट चेकिंग", "रिफ्लेक्शन-बेस्ड पोलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you implement federated learning?",
        "question_hi": "फेडरेटेड लर्निंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using distributed model training", "With privacy preservation", "Implementing aggregation protocols", "All of the above"],
        "options_hi": ["डिस्ट्रीब्यूटेड मॉडल ट्रेनिंग का उपयोग करके", "प्राइवेसी प्रिजर्वेशन के साथ", "एग्रीगेशन प्रोटोकॉल इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of the 'runtime.UnlockOSThread' in resource cleanup?",
        "question_hi": "रिसोर्स क्लीनअप में 'runtime.UnlockOSThread' का उद्देश्य क्या है?",
        "options_en": ["Release thread binding", "Resource cleanup", "Thread management", "All of the above"],
        "options_hi": ["थ्रेड बाइंडिंग रिलीज करना", "रिसोर्स क्लीनअप", "थ्रेड मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How do you implement graph neural networks?",
        "question_hi": "ग्राफ न्यूरल नेटवर्क कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using message passing", "With graph convolutions", "Implementing node embeddings", "All of the above"],
        "options_hi": ["मैसेज पासिंग का उपयोग करके", "ग्राफ कन्वोल्यूशन के साथ", "नोड एम्बेडिंग इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of the 'reflect.Value.TrySend' in non-blocking operations?",
        "question_hi": "नॉन-ब्लॉकिंग ऑपरेशन में 'reflect.Value.TrySend' का उद्देश्य क्या है?",
        "options_en": ["Non-blocking channel send", "Channel capacity checking", "Reflection-based testing", "All of the above"],
        "options_hi": ["नॉन-ब्लॉकिंग चैनल सेंड", "चैनल कैपेसिटी चेकिंग", "रिफ्लेक्शन-बेस्ड टेस्टिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How do you implement differential privacy?",
        "question_hi": "डिफरेंशियल प्राइवेसी कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using noise addition", "With privacy budgets", "Implementing epsilon-delta privacy", "All of the above"],
        "options_hi": ["नॉइज ऐडिशन का उपयोग करके", "प्राइवेसी बजट के साथ", "एप्सिलॉन-डेल्टा प्राइवेसी इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of the 'runtime.Gosched' in cooperative multitasking?",
        "question_hi": "कोऑपरेटिव मल्टीटास्किंग में 'runtime.Gosched' का उद्देश्य क्या है?",
        "options_en": ["Yield execution", "Fair scheduling", "Prevent starvation", "All of the above"],
        "options_hi": ["एक्सेक्यूशन यील्ड करना", "फेयर शेड्यूलिंग", "स्टार्वेशन रोकना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How do you implement homomorphic encryption?",
        "question_hi": "होमोमोर्फिक एन्क्रिप्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using lattice-based cryptography", "With computation on encrypted data", "Implementing privacy-preserving computation", "All of the above"],
        "options_hi": ["लेटिस-बेस्ड क्रिप्टोग्राफी का उपयोग करके", "एन्क्रिप्टेड डेटा पर कम्प्यूटेशन के साथ", "प्राइवेसी-प्रिजर्विंग कम्प्यूटेशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of the 'reflect.Value.MapRange' in efficient iteration?",
        "question_hi": "एफिशिएंट इटरेशन में 'reflect.Value.MapRange' का उद्देश्य क्या है?",
        "options_en": ["Efficient map iteration", "Reflection-based traversal", "Key-value access", "All of the above"],
        "options_hi": ["एफिशिएंट मैप इटरेशन", "रिफ्लेक्शन-बेस्ड ट्रैवर्सल", "की-वैल्यू एक्सेस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you implement quantum key distribution?",
        "question_hi": "क्वांटम की डिस्ट्रीब्यूशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using quantum states", "With entanglement protocols", "Implementing secure key exchange", "All of the above"],
        "options_hi": ["क्वांटम स्टेट का उपयोग करके", "एन्टेंगलमेंट प्रोटोकॉल के साथ", "सिक्योर की एक्सचेंज इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of the 'runtime.Goexit' in controlled termination?",
        "question_hi": "कंट्रोल्ड टर्मिनेशन में 'runtime.Goexit' का उद्देश्य क्या है?",
        "options_en": ["Graceful goroutine termination", "Deferred function execution", "Clean shutdown", "All of the above"],
        "options_hi": ["ग्रेसफुल गोरूटीन टर्मिनेशन", "डिफर्ड फंक्शन एक्सेक्यूशन", "क्लीन शटडाउन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How do you implement neuroevolution?",
        "question_hi": "न्यूरोइवोल्यूशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using genetic algorithms for neural networks", "With evolutionary strategies", "Implementing population-based training", "All of the above"],
        "options_hi": ["न्यूरल नेटवर्क के लिए जेनेटिक एल्गोरिदम का उपयोग करके", "इवोल्यूशनरी स्ट्रैटेजी के साथ", "पॉपुलेशन-बेस्ड ट्रेनिंग इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of the 'reflect.Value.Slice3' in full slice support?",
        "question_hi": "फुल स्लाइस सपोर्ट में 'reflect.Value.Slice3' का उद्देश्य क्या है?",
        "options_en": ["Three-index slicing", "Complete slice operations", "Reflection-based manipulation", "All of the above"],
        "options_hi": ["थ्री-इंडेक्स स्लाइसिंग", "कम्प्लीट स्लाइस ऑपरेशन", "रिफ्लेक्शन-बेस्ड मैनिपुलेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How do you implement transformer networks?",
        "question_hi": "ट्रांसफॉर्मर नेटवर्क कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using self-attention mechanisms", "With positional encoding", "Implementing encoder-decoder architectures", "All of the above"],
        "options_hi": ["सेल्फ-अटेंशन मैकेनिज्म का उपयोग करके", "पोजिशनल एन्कोडिंग के साथ", "एन्कोडर-डिकोडर आर्किटेक्चर इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of the 'runtime.SetMutexProfileFraction' in lock analysis?",
        "question_hi": "लॉक एनालिसिस में 'runtime.SetMutexProfileFraction' का उद्देश्य क्या है?",
        "options_en": ["Monitor mutex contention", "Lock profiling", "Concurrency analysis", "All of the above"],
        "options_hi": ["म्यूटेक्स कॉन्टेंशन मॉनिटर करना", "लॉक प्रोफाइलिंग", "कनकरेंसी एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How do you implement generative adversarial networks?",
        "question_hi": "जेनरेटिव एडवरसैरियल नेटवर्क कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using generator-discriminator pairs", "With adversarial training", "Implementing synthetic data generation", "All of the above"],
        "options_hi": ["जनरेटर-डिस्क्रिमिनेटर पेयर का उपयोग करके", "एडवरसैरियल ट्रेनिंग के साथ", "सिंथेटिक डेटा जनरेशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of the 'reflect.Value.UnsafeAddr' in pointer operations?",
        "question_hi": "पॉइंटर ऑपरेशन में 'reflect.Value.UnsafeAddr' का उद्देश्य क्या है?",
        "options_en": ["Get pointer address", "Low-level access", "Reflection-based pointers", "All of the above"],
        "options_hi": ["पॉइंटर एड्रेस प्राप्त करना", "लो-लेवल एक्सेस", "रिफ्लेक्शन-बेस्ड पॉइंटर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How do you implement reinforcement learning?",
        "question_hi": "रिइन्फोर्समेंट लर्निंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Q-learning algorithms", "With policy gradients", "Implementing reward systems", "All of the above"],
        "options_hi": ["Q-लर्निंग एल्गोरिदम का उपयोग करके", "पॉलिसी ग्रेडिएंट के साथ", "रिवार्ड सिस्टम इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of the 'runtime.SetCgoTraceback' in CGO debugging?",
        "question_hi": "CGO डीबगिंग में 'runtime.SetCgoTraceback' का उद्देश्य क्या है?",
        "options_en": ["Enable CGO stack traces", "CGO debugging support", "Cross-language debugging", "All of the above"],
        "options_hi": ["CGO स्टैक ट्रेस एनेबल करना", "CGO डीबगिंग सपोर्ट", "क्रॉस-लैंग्वेज डीबगिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How do you implement knowledge graphs?",
        "question_hi": "नॉलेज ग्राफ कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using RDF triples", "With graph databases", "Implementing semantic reasoning", "All of the above"],
        "options_hi": ["RDF ट्रिपल का उपयोग करके", "ग्राफ डेटाबेस के साथ", "सिमेंटिक रीजनिंग इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of the 'reflect.Value.CanInterface' in type safety?",
        "question_hi": "टाइप सेफ्टी में 'reflect.Value.CanInterface' का उद्देश्य क्या है?",
        "options_en": ["Check interface conversion safety", "Type compatibility", "Reflection safety", "All of the above"],
        "options_hi": ["इंटरफेस कन्वर्जन सेफ्टी चेक करना", "टाइप कम्पेटिबिलिटी", "रिफ्लेक्शन सेफ्टी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How do you implement causal inference?",
        "question_hi": "कॉज़ल इनफरेंस कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using causal graphs", "With counterfactual reasoning", "Implementing causal discovery", "All of the above"],
        "options_hi": ["कॉज़ल ग्राफ का उपयोग करके", "काउंटरफैक्चुअल रीजनिंग के साथ", "कॉज़ल डिस्कवरी इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of the 'runtime.Callers' in stack analysis?",
        "question_hi": "स्टैक एनालिसिस में 'runtime.Callers' का उद्देश्य क्या है?",
        "options_en": ["Get call stack", "Debug information", "Stack trace generation", "All of the above"],
        "options_hi": ["कॉल स्टैक प्राप्त करना", "डीबग इनफार्मेशन", "स्टैक ट्रेस जनरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How do you implement explainable AI?",
        "question_hi": "एक्सप्लेनएबल AI कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using SHAP values", "With feature importance", "Implementing model interpretability", "All of the above"],
        "options_hi": ["SHAP वैल्यू का उपयोग करके", "फीचर इम्पोर्टेंस के साथ", "मॉडल इंटरप्रिटेबिलिटी इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of the 'reflect.Value.OverflowComplex' in numeric safety?",
        "question_hi": "न्यूमेरिक सेफ्टी में 'reflect.Value.OverflowComplex' का उद्देश्य क्या है?",
        "options_en": ["Check complex number overflow", "Numeric safety", "Reflection-based validation", "All of the above"],
        "options_hi": ["कॉम्प्लेक्स नंबर ओवरफ्लो चेक करना", "न्यूमेरिक सेफ्टी", "रिफ्लेक्शन-बेस्ड वैलिडेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How do you implement automated machine learning?",
        "question_hi": "ऑटोमेटेड मशीन लर्निंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using hyperparameter optimization", "With neural architecture search", "Implementing AutoML pipelines", "All of the above"],
        "options_hi": ["हाइपरपैरामीटर ऑप्टिमाइज़ेशन का उपयोग करके", "न्यूरल आर्किटेक्चर सर्च के साथ", "AutoML पाइपलाइन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of the 'runtime.Func' in dynamic analysis?",
        "question_hi": "डायनामिक एनालिसिस में 'runtime.Func' का उद्देश्य क्या है?",
        "options_en": ["Function information access", "Dynamic analysis", "Runtime introspection", "All of the above"],
        "options_hi": ["फंक्शन इनफार्मेशन एक्सेस", "डायनामिक एनालिसिस", "रनटाइम इंट्रोस्पेक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you implement robotic process automation?",
        "question_hi": "रोबोटिक प्रोसेस ऑटोमेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using UI automation", "With workflow orchestration", "Implementing task automation", "All of the above"],
        "options_hi": ["UI ऑटोमेशन का उपयोग करके", "वर्कफ्लो ऑर्केस्ट्रेशन के साथ", "टास्क ऑटोमेशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of the 'reflect.Value.OverflowFloat' in floating-point safety?",
        "question_hi": "फ्लोटिंग-पॉइंट सेफ्टी में 'reflect.Value.OverflowFloat' का उद्देश्य क्या है?",
        "options_en": ["Check float overflow", "Floating-point safety", "Reflection-based range checking", "All of the above"],
        "options_hi": ["फ्लोट ओवरफ्लो चेक करना", "फ्लोटिंग-पॉइंट सेफ्टी", "रिफ्लेक्शन-बेस्ड रेंज चेकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you implement cognitive computing?",
        "question_hi": "कॉग्निटिव कंप्यूटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using natural language processing", "With reasoning engines", "Implementing cognitive architectures", "All of the above"],
        "options_hi": ["नेचुरल लैंग्वेज प्रोसेसिंग का उपयोग करके", "रीजनिंग इंजन के साथ", "कॉग्निटिव आर्किटेक्चर इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of the 'runtime.Frames' in detailed stack analysis?",
        "question_hi": "डिटेल्ड स्टैक एनालिसिस में 'runtime.Frames' का उद्देश्य क्या है?",
        "options_en": ["Iterate stack frames", "Detailed stack information", "Advanced debugging", "All of the above"],
        "options_hi": ["स्टैक फ्रेम पर इटरेट करना", "डिटेल्ड स्टैक इनफार्मेशन", "एडवांस्ड डीबगिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How do you implement swarm intelligence?",
        "question_hi": "स्वार्म इंटेलिजेंस कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using particle swarm optimization", "With ant colony algorithms", "Implementing collective behavior", "All of the above"],
        "options_hi": ["पार्टिकल स्वार्म ऑप्टिमाइज़ेशन का उपयोग करके", "एंट कॉलोनी एल्गोरिदम के साथ", "कलेक्टिव बिहेवियर इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of the 'reflect.Value.OverflowInt' in integer safety?",
        "question_hi": "इंटीजर सेफ्टी में 'reflect.Value.OverflowInt' का उद्देश्य क्या है?",
        "options_en": ["Check integer overflow", "Integer range safety", "Reflection-based validation", "All of the above"],
        "options_hi": ["इंटीजर ओवरफ्लो चेक करना", "इंटीजर रेंज सेफ्टी", "रिफ्लेक्शन-बेस्ड वैलिडेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you implement ambient intelligence?",
        "question_hi": "एम्बिएंट इंटेलिजेंस कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using context-aware systems", "With ubiquitous computing", "Implementing smart environments", "All of the above"],
        "options_hi": ["कॉन्टेक्स्ट-अवेयर सिस्टम का उपयोग करके", "यूबिक्विटस कंप्यूटिंग के साथ", "स्मार्ट एनवायरनमेंट इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of the 'reflect.Value.OverflowUint' in unsigned safety?",
        "question_hi": "अनसाइन्ड सेफ्टी में 'reflect.Value.OverflowUint' का उद्देश्य क्या है?",
        "options_en": ["Check unsigned integer overflow", "Unsigned safety", "Reflection-based validation", "All of the above"],
        "options_hi": ["अनसाइन्ड इंटीजर ओवरफ्लो चेक करना", "अनसाइन्ड सेफ्टी", "रिफ्लेक्शन-बेस्ड वैलिडेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you implement affective computing?",
        "question_hi": "अफेक्टिव कंप्यूटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using emotion recognition", "With sentiment analysis", "Implementing emotional AI", "All of the above"],
        "options_hi": ["इमोशन रिकग्निशन का उपयोग करके", "सेंटीमेंट एनालिसिस के साथ", "इमोशनल AI इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of the 'runtime.Frame' in stack frame analysis?",
        "question_hi": "स्टैक फ्रेम एनालिसिस में 'runtime.Frame' का उद्देश्य क्या है?",
        "options_en": ["Represent stack frame", "Frame information", "Detailed debugging", "All of the above"],
        "options_hi": ["स्टैक फ्रेम रिप्रेजेंट करना", "फ्रेम इनफार्मेशन", "डिटेल्ड डीबगिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How do you implement synthetic biology computing?",
        "question_hi": "सिंथेटिक बायोलॉजी कंप्यूटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using DNA computing", "With biological circuits", "Implementing bio-inspired algorithms", "All of the above"],
        "options_hi": ["DNA कंप्यूटिंग का उपयोग करके", "बायोलॉजिकल सर्किट के साथ", "बायो-इंस्पायर्ड एल्गोरिदम इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of the 'reflect.Value.SetMapIndex' in dynamic map operations?",
        "question_hi": "डायनामिक मैप ऑपरेशन में 'reflect.Value.SetMapIndex' का उद्देश्य क्या है?",
        "options_en": ["Set map key-value pairs", "Dynamic map modification", "Reflection-based operations", "All of the above"],
        "options_hi": ["मैप की-वैल्यू पेयर सेट करना", "डायनामिक मैप मोडिफिकेशन", "रिफ्लेक्शन-बेस्ड ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do you implement neuromorphic computing?",
        "question_hi": "न्यूरोमोर्फिक कंप्यूटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using spiking neural networks", "With event-based processing", "Implementing brain-inspired computing", "All of the above"],
        "options_hi": ["स्पाइकिंग न्यूरल नेटवर्क का उपयोग करके", "इवेंट-बेस्ड प्रोसेसिंग के साथ", "ब्रेन-इंस्पायर्ड कंप्यूटिंग इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of the 'reflect.Value.Send' in channel communication?",
        "question_hi": "चैनल कम्युनिकेशन में 'reflect.Value.Send' का उद्देश्य क्या है?",
        "options_en": ["Send to channels", "Reflection-based communication", "Dynamic channel operations", "All of the above"],
        "options_hi": ["चैनल को सेंड करना", "रिफ्लेक्शन-बेस्ड कम्युनिकेशन", "डायनामिक चैनल ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How do you implement post-quantum cryptography?",
        "question_hi": "पोस्ट-क्वांटम क्रिप्टोग्राफी कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using lattice-based schemes", "With code-based cryptography", "Implementing quantum-resistant algorithms", "All of the above"],
        "options_hi": ["लेटिस-बेस्ड स्कीम का उपयोग करके", "कोड-बेस्ड क्रिप्टोग्राफी के साथ", "क्वांटम-रेजिस्टेंट एल्गोरिदम इम्प्लीमेंट करके", "उपरोक्त सभी"],
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