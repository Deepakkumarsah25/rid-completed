const questions=[
    {
        "num": 1,
        "question_en": "What is the difference between sync.Mutex and sync.RWMutex in high-contention scenarios?",
        "question_hi": "हाई-कॉन्टेंशन सीनारियो में sync.Mutex और sync.RWMutex में क्या अंतर है?",
        "options_en": ["RWMutex allows multiple concurrent readers", "Mutex has lower memory overhead", "RWMutex performs better with many readers", "All of the above"],
        "options_hi": ["RWMutex मल्टीपल कंकरंट रीडर की अनुमति देता है", "Mutex का मेमोरी ओवरहेड कम है", "RWMutex कई रीडर के साथ बेहतर परफॉर्म करता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How does Go's escape analysis optimize closure variable handling?",
        "question_hi": "Go की एस्केप एनालिसिस क्लोजर वेरिएबल हैंडलिंग को कैसे ऑप्टिमाइज़ करती है?",
        "options_en": ["Detects if closure variables escape function scope", "Determines stack vs heap allocation", "Optimizes variable capture mechanism", "All of the above"],
        "options_hi": ["डिटेक्ट करती है कि क्लोजर वेरिएबल फंक्शन स्कोप से बचते हैं", "स्टैक vs हीप अलोकेशन निर्धारित करती है", "वेरिएबल कैप्चर मैकेनिज्म ऑप्टिमाइज़ करती है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the purpose of the 'runtime.schedule' function in Go's scheduler?",
        "question_hi": "Go के शेड्यूलर में 'runtime.schedule' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Find next goroutine to execute", "Handle goroutine preemption", "Manage run queue operations", "All of the above"],
        "options_hi": ["एक्जिक्यूट करने के लिए अगली गोरूटीन ढूंढना", "गोरूटीन प्रीएम्पशन हैंडल करना", "रन क्यू ऑपरेशन मैनेज करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How does Go implement zero-cost interface method calls for concrete types?",
        "question_hi": "Go कंक्रीट टाइप के लिए जीरो-कॉस्ट इंटरफेस मेथड कॉल कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Direct call through itab caching", "Compiler devirtualization", "Inline method dispatch", "All of the above"],
        "options_hi": ["itab कैशिंग के माध्यम से डायरेक्ट कॉल", "कंपाइलर डिवर्चुअलाइज़ेशन", "इनलाइन मेथड डिस्पैच", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the difference between sync.Map and concurrent map with sharding?",
        "question_hi": "sync.Map और शार्डिंग के साथ कंकरंट मैप में क्या अंतर है?",
        "options_en": ["sync.Map uses copy-on-write", "Sharded maps reduce lock contention", "Different consistency guarantees", "All of the above"],
        "options_hi": ["sync.Map कॉपी-ऑन-राइट का उपयोग करता है", "शार्डेड मैप लॉक कॉन्टेंशन कम करते हैं", "अलग-अलग कंसिस्टेंसी गारंटी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How does Go's GC handle pointer write barriers during concurrent marking?",
        "question_hi": "Go का GC कंकरंट मार्किंग के दौरान पॉइंटर राइट बैरियर कैसे हैंडल करता है?",
        "options_en": ["Hybrid barrier technique", "Track pointer modifications", "Ensure GC correctness", "All of the above"],
        "options_hi": ["हाइब्रिड बैरियर टेक्निक", "पॉइंटर मॉडिफिकेशन ट्रैक करना", "GC करेक्टनेस सुनिश्चित करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of 'runtime.morestack_noctxt' in goroutine stack management?",
        "question_hi": "गोरूटीन स्टैक मैनेजमेंट में 'runtime.morestack_noctxt' का उद्देश्य क्या है?",
        "options_en": ["Grow stack without context", "Handle stack overflow", "Optimized stack growth path", "All of the above"],
        "options_hi": ["कॉन्टेक्स्ट के बिना स्टैक बढ़ाना", "स्टैक ओवरफ्लो हैंडल करना", "ऑप्टिमाइज़्ड स्टैक ग्रोथ पाथ", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How does Go implement efficient map iteration with random start?",
        "question_hi": "Go रैंडम स्टार्ट के साथ एफिशिएंट मैप इटरेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Random bucket selection", "Hash seed for iteration", "Prevent predictable iteration order", "All of the above"],
        "options_hi": ["रैंडम बकेट सिलेक्शन", "इटरेशन के लिए हैश सीड", "प्रिडिक्टेबल इटरेशन ऑर्डर रोकना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the difference between sync.Pool and manual object pooling with slices?",
        "question_hi": "sync.Pool और स्लाइस के साथ मैन्युअल ऑब्जेक्ट पूलिंग में क्या अंतर है?",
        "options_en": ["sync.Pool is GC-aware", "Manual pooling gives more control", "Different performance characteristics", "All of the above"],
        "options_hi": ["sync.Pool GC-अवेयर है", "मैन्युअल पूलिंग अधिक कंट्रोल देती है", "अलग-अलग परफॉर्मेंस कैरेक्टरिस्टिक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How does Go's runtime handle sysmon goroutine for system monitoring?",
        "question_hi": "Go का रनटाइम सिस्टम मॉनिटरिंग के लिए sysmon गोरूटीन कैसे हैंडल करता है?",
        "options_en": ["Forced GC triggering", "Netpoll timeout handling", "Retake P from syscalls", "All of the above"],
        "options_hi": ["फोर्स्ड GC ट्रिगरिंग", "Netpoll टाइमआउट हैंडलिंग", "सिस्टमकॉल से P रीटेक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of 'runtime.convT64' for small integer interface conversion?",
        "question_hi": "छोटे इंटीजर इंटरफेस कन्वर्जन के लिए 'runtime.convT64' का उद्देश्य क्या है?",
        "options_en": ["Optimized conversion for small integers", "Avoid heap allocation", "Direct value embedding", "All of the above"],
        "options_hi": ["छोटे इंटीजर के लिए ऑप्टिमाइज़्ड कन्वर्जन", "हीप अलोकेशन से बचना", "डायरेक्ट वैल्यू एम्बेडिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How does Go implement efficient bounds check elimination in SSA?",
        "question_hi": "Go SSA में एफिशिएंट बाउंड्स चेक एलिमिनेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Prove indices within bounds", "Loop induction variable analysis", "Range expression optimization", "All of the above"],
        "options_hi": ["साबित करें कि इंडिक्स बाउंड्स के भीतर हैं", "लूप इंडक्शन वेरिएबल एनालिसिस", "रेंज एक्सप्रेशन ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the difference between channel operations in buffered vs unbuffered performance?",
        "question_hi": "बफर्ड vs अनबफर्ड परफॉर्मेंस में चैनल ऑपरेशन में क्या अंतर है?",
        "options_en": ["Buffered channels reduce contention", "Unbuffered provide stronger synchronization", "Different use case optimizations", "All of the above"],
        "options_hi": ["बफर्ड चैनल कॉन्टेंशन कम करते हैं", "अनबफर्ड स्ट्रॉन्गर सिंक्रोनाइज़ेशन प्रदान करते हैं", "अलग-अलग यूज केस ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How does Go's memory allocator handle size class optimization?",
        "question_hi": "Go का मेमोरी अलोकेटर साइज क्लास ऑप्टिमाइज़ेशन कैसे हैंडल करता है?",
        "options_en": ["Pre-defined size buckets", "Minimize internal fragmentation", "Fast allocation paths", "All of the above"],
        "options_hi": ["प्री-डिफाइंड साइज बकेट", "इंटरनल फ्रैगमेंटेशन मिनिमाइज़ करना", "फास्ट अलोकेशन पाथ", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of 'runtime.mapassign_faststr' for string keys?",
        "question_hi": "स्ट्रिंग की के लिए 'runtime.mapassign_faststr' का उद्देश्य क्या है?",
        "options_en": ["Optimized map assignment for strings", "Avoid interface conversion", "Direct string comparison", "All of the above"],
        "options_hi": ["स्ट्रिंग के लिए ऑप्टिमाइज़्ड मैप असाइनमेंट", "इंटरफेस कन्वर्जन से बचना", "डायरेक्ट स्ट्रिंग कम्पेयरिजन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How does Go implement efficient interface type switches?",
        "question_hi": "Go एफिशिएंट इंटरफेस टाइप स्विच कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Jump table generation", "Type hash comparison", "Direct type assertion", "All of the above"],
        "options_hi": ["जंप टेबल जनरेशन", "टाइप हैश कम्पेयरिजन", "डायरेक्ट टाइप असर्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the difference between stack growth and segmented stacks?",
        "question_hi": "स्टैक ग्रोथ और सेगमेंटेड स्टैक में क्या अंतर है?",
        "options_en": ["Stack growth uses contiguous memory", "Segmented stacks use linked chunks", "Different fragmentation behavior", "All of the above"],
        "options_hi": ["स्टैक ग्रोथ कॉन्टिग्यूअस मेमोरी का उपयोग करती है", "सेगमेंटेड स्टैक लिंक्ड चंक का उपयोग करते हैं", "अलग-अलग फ्रैगमेंटेशन बिहेवियर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How does Go's runtime handle finalizer execution timing?",
        "question_hi": "Go का रनटाइम फाइनलाइज़र एक्जिक्यूशन टाइमिंग कैसे हैंडल करता है?",
        "options_en": ["Non-deterministic execution", "Before object collection", "Separate finalizer goroutine", "All of the above"],
        "options_hi": ["नॉन-डिटरमिनिस्टिक एक्जिक्यूशन", "ऑब्जेक्ट कलेक्शन से पहले", "अलग फाइनलाइज़र गोरूटीन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of 'runtime.memclrNoHeapPointers' for memory zeroing?",
        "question_hi": "मेमोरी जीरोइंग के लिए 'runtime.memclrNoHeapPointers' का उद्देश्य क्या है?",
        "options_en": ["Efficient memory clearing", "Avoid GC write barriers", "Optimized for no pointers", "All of the above"],
        "options_hi": ["एफिशिएंट मेमोरी क्लीयरिंग", "GC राइट बैरियर से बचना", "नो पॉइंटर के लिए ऑप्टिमाइज़्ड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How does Go implement efficient string concatenation with strings.Builder?",
        "question_hi": "Go strings.Builder के साथ एफिशिएंट स्ट्रिंग कॉन्कैटनेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Minimize allocations", "Buffer reuse", "Efficient growth strategy", "All of the above"],
        "options_hi": ["अलोकेशन मिनिमाइज़ करना", "बफर रीयूज", "एफिशिएंट ग्रोथ स्ट्रैटेजी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the difference between sync.Once and atomic.Once in Go 1.21?",
        "question_hi": "Go 1.21 में sync.Once और atomic.Once में क्या अंतर है?",
        "options_en": ["atomic.Once uses atomic operations", "sync.Once uses mutex", "Different performance characteristics", "All of the above"],
        "options_hi": ["atomic.Once एटॉमिक ऑपरेशन का उपयोग करता है", "sync.Once म्यूटेक्स का उपयोग करता है", "अलग-अलग परफॉर्मेंस कैरेक्टरिस्टिक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How does Go's runtime handle netpoller for I/O multiplexing?",
        "question_hi": "Go का रनटाइम I/O मल्टीप्लेक्सिंग के लिए netpoller कैसे हैंडल करता है?",
        "options_en": ["epoll/kqueue integration", "Goroutine parking on I/O", "Efficient event notification", "All of the above"],
        "options_hi": ["epoll/kqueue इंटीग्रेशन", "I/O पर गोरूटीन पार्किंग", "एफिशिएंट इवेंट नोटिफिकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of 'runtime.gcBgMarkWorker' for concurrent marking?",
        "question_hi": "कंकरंट मार्किंग के लिए 'runtime.gcBgMarkWorker' का उद्देश्य क्या है?",
        "options_en": ["Background marking work", "Concurrent GC assistance", "Work stealing for GC", "All of the above"],
        "options_hi": ["बैकग्राउंड मार्किंग वर्क", "कंकरंट GC असिस्टेंस", "GC के लिए वर्क स्टीलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How does Go implement efficient map hash computation with AES?",
        "question_hi": "Go AES के साथ एफिशिएंट मैप हैश कम्प्यूटेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Hardware accelerated hashing", "Cryptographic security", "HashDoS protection", "All of the above"],
        "options_hi": ["हार्डवेयर एक्सेलेरेटेड हैशिंग", "क्रिप्टोग्राफिक सिक्योरिटी", "HashDoS प्रोटेक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the difference between interface method calls and direct calls in performance?",
        "question_hi": "परफॉर्मेंस में इंटरफेस मेथड कॉल और डायरेक्ट कॉल में क्या अंतर है?",
        "options_en": ["Interface calls have indirection", "Direct calls are faster", "Compiler can devirtualize", "All of the above"],
        "options_hi": ["इंटरफेस कॉल में इंडायरेक्शन है", "डायरेक्ट कॉल फास्टर हैं", "कंपाइलर डिवर्चुअलाइज़ कर सकता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How does Go's runtime handle memory scavenging for OS return?",
        "question_hi": "OS रिटर्न के लिए Go का रनटाइम मेमोरी स्कैवेंजिंग कैसे हैंडल करता है?",
        "options_en": ["Return unused memory to OS", "Page decommit strategy", "Background scavenger", "All of the above"],
        "options_hi": ["OS को अनयूज्ड मेमोरी वापस करना", "पेज डिकमिट स्ट्रैटेजी", "बैकग्राउंड स्कैवेंजर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of 'runtime.duffcopy' for memory copying?",
        "question_hi": "मेमोरी कॉपीिंग के लिए 'runtime.duffcopy' का उद्देश्य क्या है?",
        "options_en": ["Efficient memory copying", "Duff's device implementation", "Loop unrolling optimization", "All of the above"],
        "options_hi": ["एफिशिएंट मेमोरी कॉपीिंग", "डफ्स डिवाइस इम्प्लीमेंटेशन", "लूप अनरोलिंग ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How does Go implement efficient select statement with default case?",
        "question_hi": "Go डिफॉल्ट केस के साथ एफिशिएंट select स्टेटमेंट कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Non-blocking operation", "Immediate return", "Avoid goroutine parking", "All of the above"],
        "options_hi": ["नॉन-ब्लॉकिंग ऑपरेशन", "इमीडिएट रिटर्न", "गोरूटीन पार्किंग से बचना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the difference between sync.Cond and channel-based broadcasting?",
        "question_hi": "sync.Cond और चैनल-बेस्ड ब्रॉडकास्टिंग में क्या अंतर है?",
        "options_en": ["sync.Cond allows multiple waiters", "Channels are more composable", "Different synchronization patterns", "All of the above"],
        "options_hi": ["sync.Cond मल्टीपल वेटर की अनुमति देता है", "चैनल अधिक कंपोजेबल हैं", "अलग-अलग सिंक्रोनाइज़ेशन पैटर्न", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How does Go's runtime handle large object allocation?",
        "question_hi": "Go का रनटाइम लार्ज ऑब्जेक्ट अलोकेशन कैसे हैंडल करता है?",
        "options_en": ["Separate large object space", "Avoid moving large objects", "Direct OS allocation", "All of the above"],
        "options_hi": ["अलग लार्ज ऑब्जेक्ट स्पेस", "लार्ज ऑब्जेक्ट मूव करने से बचना", "डायरेक्ट OS अलोकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of 'runtime.convT2E' for interface conversion?",
        "question_hi": "इंटरफेस कन्वर्जन के लिए 'runtime.convT2E' का उद्देश्य क्या है?",
        "options_en": ["Convert concrete type to empty interface", "Handle interface representation", "Allocate interface data", "All of the above"],
        "options_hi": ["कंक्रीट टाइप को एम्प्टी इंटरफेस में कन्वर्ट करना", "इंटरफेस रिप्रेजेंटेशन हैंडल करना", "इंटरफेस डेटा अलोकेट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How does Go implement efficient goroutine context switching?",
        "question_hi": "Go एफिशिएंट गोरूटीन कॉन्टेक्स्ट स्विचिंग कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Minimal register saving", "Stack pointer switching", "Cooperative scheduling", "All of the above"],
        "options_hi": ["मिनिमल रजिस्टर सेविंग", "स्टैक पॉइंटर स्विचिंग", "कोऑपरेटिव शेड्यूलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the difference between stack and heap memory profiling?",
        "question_hi": "स्टैक और हीप मेमोरी प्रोफाइलिंग में क्या अंतर है?",
        "options_en": ["Stack shows call hierarchy", "Heap shows allocation sites", "Different sampling methods", "All of the above"],
        "options_hi": ["स्टैक कॉल हायरार्की दिखाता है", "हीप अलोकेशन साइट दिखाता है", "अलग-अलग सैंपलिंग मेथड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How does Go's runtime handle cgo callback performance?",
        "question_hi": "Go का रनटाइम cgo कॉलबैक परफॉर्मेंस कैसे हैंडल करता है?",
        "options_en": ["Stack switching overhead", "Goroutine scheduling impact", "C to Go transition cost", "All of the above"],
        "options_hi": ["स्टैक स्विचिंग ओवरहेड", "गोरूटीन शेड्यूलिंग इम्पैक्ट", "C से Go ट्रांजिशन कॉस्ट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of 'runtime.stringtoslicebyte' for conversion?",
        "question_hi": "कन्वर्जन के लिए 'runtime.stringtoslicebyte' का उद्देश्य क्या है?",
        "options_en": ["Efficient string to byte slice conversion", "Avoid unnecessary copying", "Memory optimization", "All of the above"],
        "options_hi": ["स्ट्रिंग से बाइट स्लाइस कन्वर्जन", "अननसेसरी कॉपीिंग से बचना", "मेमोरी ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How does Go implement efficient memory zeroing with SIMD?",
        "question_hi": "Go SIMD के साथ एफिशिएंट मेमोरी जीरोइंग कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Vector instructions when available", "Bulk memory operations", "Compiler optimizations", "All of the above"],
        "options_hi": ["उपलब्ध होने पर वेक्टर इंस्ट्रक्शन", "बल्क मेमोरी ऑपरेशन", "कंपाइलर ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the difference between sync.Mutex and spinlock for low contention?",
        "question_hi": "लो कॉन्टेंशन के लिए sync.Mutex और स्पिनलॉक में क्या अंतर है?",
        "options_en": ["Spinlock uses busy-waiting", "Mutex uses OS primitives", "Different performance tradeoffs", "All of the above"],
        "options_hi": ["स्पिनलॉक बिजी-वेटिंग का उपयोग करता है", "Mutex OS प्रिमिटिव का उपयोग करता है", "अलग-अलग परफॉर्मेंस ट्रेडऑफ", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How does Go's runtime handle goroutine stack initialization?",
        "question_hi": "Go का रनटाइम गोरूटीन स्टैक इनिशियलाइज़ेशन कैसे हैंडल करता है?",
        "options_en": ["Fixed initial size", "Growth capability", "Guard page protection", "All of the above"],
        "options_hi": ["फिक्स्ड इनिशियल साइज", "ग्रोथ कैपेबिलिटी", "गार्ड पेज प्रोटेक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of 'runtime.makeslice' for slice allocation?",
        "question_hi": "स्लाइस अलोकेशन के लिए 'runtime.makeslice' का उद्देश्य क्या है?",
        "options_en": ["Efficient slice creation", "Capacity calculation", "Overflow checking", "All of the above"],
        "options_hi": ["एफिशिएंट स्लाइस क्रिएशन", "कैपेसिटी कैलकुलेशन", "ओवरफ्लो चेकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How does Go implement efficient function inlining heuristics?",
        "question_hi": "Go एफिशिएंट फंक्शन इनलाइनिंग ह्यूरिस्टिक कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Cost-based analysis", "Function size limits", "Call frequency consideration", "All of the above"],
        "options_hi": ["कॉस्ट-बेस्ड एनालिसिस", "फंक्शन साइज लिमिट", "कॉल फ्रिक्वेंसी कंसिडरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the difference between channel operations in select vs direct?",
        "question_hi": "select vs डायरेक्ट में चैनल ऑपरेशन में क्या अंतर है?",
        "options_en": ["Select allows multiple operations", "Different scheduling behavior", "Non-blocking support", "All of the above"],
        "options_hi": ["Select मल्टीपल ऑपरेशन की अनुमति देता है", "अलग-अलग शेड्यूलिंग बिहेवियर", "नॉन-ब्लॉकिंग सपोर्ट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How does Go's runtime handle memory arena management?",
        "question_hi": "Go का रनटाइम मेमोरी एरिना मैनेजमेंट कैसे हैंडल करता है?",
        "options_en": ["Per-P cache", "Central heap", "Span allocation", "All of the above"],
        "options_hi": ["प्रति-P कैश", "सेंट्रल हीप", "स्पैन अलोकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of 'runtime.growslice' for slice expansion?",
        "question_hi": "स्लाइस एक्सपेंशन के लिए 'runtime.growslice' का उद्देश्य क्या है?",
        "options_en": ["Exponential growth strategy", "Memory copying", "Capacity management", "All of the above"],
        "options_hi": ["एक्सपोनेंशियल ग्रोथ स्ट्रैटेजी", "मेमोरी कॉपीिंग", "कैपेसिटी मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How does Go implement efficient map key comparison?",
        "question_hi": "Go एफिशिएंट मैप की कम्पेयरिजन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Type-specific functions", "Memcmp optimization", "Interface method calls", "All of the above"],
        "options_hi": ["टाइप-स्पेसिफिक फंक्शन", "Memcmp ऑप्टिमाइज़ेशन", "इंटरफेस मेथड कॉल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the difference between sync.Map and sharded map performance?",
        "question_hi": "sync.Map और शार्डेड मैप परफॉर्मेंस में क्या अंतर है?",
        "options_en": ["sync.Map for read-heavy", "Sharded for write-heavy", "Different contention patterns", "All of the above"],
        "options_hi": ["रीड-हेवी के लिए sync.Map", "राइट-हेवी के लिए शार्डेड", "अलग-अलग कॉन्टेंशन पैटर्न", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How does Go's runtime handle syscall execution model?",
        "question_hi": "Go का रनटाइम सिस्टमकॉल एक्जिक्यूशन मॉडल कैसे हैंडल करता है?",
        "options_en": ["Handoff to separate thread", "Goroutine parking", "Non-blocking wrappers", "All of the above"],
        "options_hi": ["अलग थ्रेड को हैंडऑफ", "गोरूटीन पार्किंग", "नॉन-ब्लॉकिंग रैपर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of 'runtime.mcall' for context switching?",
        "question_hi": "कॉन्टेक्स्ट स्विचिंग के लिए 'runtime.mcall' का उद्देश्य क्या है?",
        "options_en": ["Switch to system stack", "Save goroutine state", "Schedule next goroutine", "All of the above"],
        "options_hi": ["सिस्टम स्टैक पर स्विच करना", "गोरूटीन स्टेट सेव करना", "अगली गोरूटीन शेड्यूल करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How does Go implement efficient interface type assertions?",
        "question_hi": "Go एफिशिएंट इंटरफेस टाइप असर्शन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Type hash comparison", "Direct pointer comparison", "Type cache optimization", "All of the above"],
        "options_hi": ["टाइप हैश कम्पेयरिजन", "डायरेक्ट पॉइंटर कम्पेयरिजन", "टाइप कैश ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the difference between stack and heap allocation profiling?",
        "question_hi": "स्टैक और हीप अलोकेशन प्रोफाइलिंग में क्या अंतर है?",
        "options_en": ["Stack shows call chains", "Heap shows allocation sites", "Different data collection", "All of the above"],
        "options_hi": ["स्टैक कॉल चेन दिखाता है", "हीप अलोकेशन साइट दिखाता है", "अलग-अलग डेटा कलेक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How does Go's runtime handle memory statistics collection?",
        "question_hi": "Go का रनटाइम मेमोरी स्टैटिस्टिक्स कलेक्शन कैसे हैंडल करता है?",
        "options_en": ["Atomic counters", "Size class tracking", "GC cycle data", "All of the above"],
        "options_hi": ["एटॉमिक काउंटर", "साइज क्लास ट्रैकिंग", "GC साइकल डेटा", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of 'runtime.procyield' for processor yielding?",
        "question_hi": "प्रोसेसर यील्डिंग के लिए 'runtime.procyield' का उद्देश्य क्या है?",
        "options_en": ["Efficient busy-waiting", "Reduce power consumption", "CPU contention management", "All of the above"],
        "options_hi": ["एफिशिएंट बिजी-वेटिंग", "पावर कंजम्पशन कम करना", "CPU कॉन्टेंशन मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How does Go implement efficient bounds check elimination in loops?",
        "question_hi": "Go लूप में एफिशिएंट बाउंड्स चेक एलिमिनेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Loop invariant analysis", "Induction variable proof", "Range optimization", "All of the above"],
        "options_hi": ["लूप इनवेरिएंट एनालिसिस", "इंडक्शन वेरिएबल प्रूफ", "रेंज ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the difference between interface method sets for values and pointers?",
        "question_hi": "वैल्यू और पॉइंटर के लिए इंटरफेस मेथड सेट में क्या अंतर है?",
        "options_en": ["Value receivers work with both", "Pointer receivers only with pointers", "Different satisfaction rules", "All of the above"],
        "options_hi": ["वैल्यू रिसीवर दोनों के साथ काम करते हैं", "पॉइंटर रिसीवर केवल पॉइंटर के साथ", "अलग-अलग सैटिस्फैक्शन रूल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How does Go's runtime handle write barrier implementation?",
        "question_hi": "Go का रनटाइम राइट बैरियर इम्प्लीमेंटेशन कैसे हैंडल करता है?",
        "options_en": ["Hybrid barrier technique", "Pointer write tracking", "GC correctness", "All of the above"],
        "options_hi": ["हाइब्रिड बैरियर टेक्निक", "पॉइंटर राइट ट्रैकिंग", "GC करेक्टनेस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of 'runtime.gcAssistAlloc' for allocation help?",
        "question_hi": "अलोकेशन हेल्प के लिए 'runtime.gcAssistAlloc' का उद्देश्य क्या है?",
        "options_en": ["Help GC during allocation", "Balance allocation work", "Prevent heap growth", "All of the above"],
        "options_hi": ["अलोकेशन के दौरान GC की मदद करना", "अलोकेशन वर्क बैलेंस करना", "हीप ग्रोथ रोकना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How does Go implement efficient select with multiple channel cases?",
        "question_hi": "Go मल्टीपल चैनल केस के साथ एफिशिएंट select कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Random case selection", "Channel polling", "Starvation prevention", "All of the above"],
        "options_hi": ["रैंडम केस सिलेक्शन", "चैनल पोलिंग", "स्टार्वेशन प्रिवेंशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the difference between sync.Once and init() function timing?",
        "question_hi": "sync.Once और init() फंक्शन टाइमिंग में क्या अंतर है?",
        "options_en": ["init() runs at package init", "sync.Once on first call", "Different initialization timing", "All of the above"],
        "options_hi": ["init() पैकेज इनिट पर रन होता है", "sync.Once पहली कॉल पर", "अलग-अलग इनिशियलाइज़ेशन टाइमिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How does Go's runtime handle finalizer queue processing?",
        "question_hi": "Go का रनटाइम फाइनलाइज़र क्यू प्रोसेसिंग कैसे हैंडल करता है?",
        "options_en": ["Separate goroutine", "Queue-based execution", "GC coordination", "All of the above"],
        "options_hi": ["अलग गोरूटीन", "क्यू-बेस्ड एक्जिक्यूशन", "GC कोऑर्डिनेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of 'runtime.typedmemmove' for type-aware copy?",
        "question_hi": "टाइप-अवेयर कॉपी के लिए 'runtime.typedmemmove' का उद्देश्य क्या है?",
        "options_en": ["Handle pointer types", "GC write barriers", "Efficient struct copy", "All of the above"],
        "options_hi": ["पॉइंटर टाइप हैंडल करना", "GC राइट बैरियर", "एफिशिएंट स्ट्रक्चर कॉपी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How does Go implement efficient range loop over maps?",
        "question_hi": "Go मैप पर एफिशिएंट रेंज लूप कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Iterator state tracking", "Bucket traversal", "Concurrent modification check", "All of the above"],
        "options_hi": ["इटरेटर स्टेट ट्रैकिंग", "बकेट ट्रैवर्सल", "कंकरंट मॉडिफिकेशन चेक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the difference between sync.WaitGroup and errgroup error handling?",
        "question_hi": "sync.WaitGroup और errgroup एरर हैंडलिंग में क्या अंतर है?",
        "options_en": ["errgroup propagates errors", "WaitGroup only waits", "Context cancellation support", "All of the above"],
        "options_hi": ["errgroup एरर प्रोपेगेट करता है", "WaitGroup केवल इंतज़ार करता है", "कॉन्टेक्स्ट कैंसलेशन सपोर्ट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How does Go's runtime handle goroutine parking mechanism?",
        "question_hi": "Go का रनटाइम गोरूटीन पार्किंग मैकेनिज्म कैसे हैंडल करता है?",
        "options_en": ["Channel operations", "Scheduler coordination", "Wake-up signals", "All of the above"],
        "options_hi": ["चैनल ऑपरेशन", "शेड्यूलर कोऑर्डिनेशन", "वेक-अप सिग्नल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of 'runtime.memhash' for efficient hashing?",
        "question_hi": "एफिशिएंट हैशिंग के लिए 'runtime.memhash' का उद्देश्य क्या है?",
        "options_en": ["Fast hash computation", "Type-specific hashing", "Map optimization", "All of the above"],
        "options_hi": ["फास्ट हैश कम्प्यूटेशन", "टाइप-स्पेसिफिक हैशिंग", "मैप ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How does Go implement efficient reflection for struct field access?",
        "question_hi": "Go स्ट्रक्चर फील्ड एक्सेस के लिए एफिशिएंट रिफ्लेक्शन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Field offset caching", "Type descriptor reuse", "Direct memory access", "All of the above"],
        "options_hi": ["फील्ड ऑफसेट कैशिंग", "टाइप डिस्क्रिप्टर रीयूज", "डायरेक्ट मेमोरी एक्सेस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the difference between stack copying and contiguous growth?",
        "question_hi": "स्टैक कॉपीिंग और कॉन्टिग्यूअस ग्रोथ में क्या अंतर है?",
        "options_en": ["Copying allows moving", "Growth uses contiguous memory", "Fragmentation differences", "All of the above"],
        "options_hi": ["कॉपीिंग मूव करने की अनुमति देती है", "ग्रोथ कॉन्टिग्यूअस मेमोरी का उपयोग करती है", "फ्रैगमेंटेशन डिफरेंस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How does Go's runtime handle finalizer execution order?",
        "question_hi": "Go का रनटाइम फाइनलाइज़र एक्जिक्यूशन ऑर्डर कैसे हैंडल करता है?",
        "options_en": ["No guaranteed order", "Queue processing", "GC dependencies", "All of the above"],
        "options_hi": ["कोई गारंटीड ऑर्डर नहीं", "क्यू प्रोसेसिंग", "GC डिपेंडेंसी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of 'runtime.cgocallback' for C to Go calls?",
        "question_hi": "C से Go कॉल के लिए 'runtime.cgocallback' का उद्देश्य क्या है?",
        "options_en": ["Handle C callbacks", "Stack switching", "Goroutine integration", "All of the above"],
        "options_hi": ["C कॉलबैक हैंडल करना", "स्टैक स्विचिंग", "गोरूटीन इंटीग्रेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How does Go implement efficient interface method dispatch?",
        "question_hi": "Go एफिशिएंट इंटरफेस मेथड डिस्पैच कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Itab caching", "Direct call optimization", "Method table lookup", "All of the above"],
        "options_hi": ["Itab कैशिंग", "डायरेक्ट कॉल ऑप्टिमाइज़ेशन", "मेथड टेबल लुकअप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the difference between sync.RWMutex and reader-preference locks?",
        "question_hi": "sync.RWMutex और रीडर-प्रेफरेंस लॉक में क्या अंतर है?",
        "options_en": ["sync.RWMutex is writer-preference", "Starvation characteristics", "Implementation complexity", "All of the above"],
        "options_hi": ["sync.RWMutex राइटर-प्रेफरेंस है", "स्टार्वेशन कैरेक्टरिस्टिक", "इम्प्लीमेंटेशन कॉम्प्लेक्सिटी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How does Go's runtime handle memory span management?",
        "question_hi": "Go का रनटाइम मेमोरी स्पैन मैनेजमेंट कैसे हैंडल करता है?",
        "options_en": ["Page-sized blocks", "Size class organization", "Free list management", "All of the above"],
        "options_hi": ["पेज-साइज्ड ब्लॉक", "साइज क्लास ऑर्गनाइज़ेशन", "फ्री लिस्ट मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of 'runtime.gcAssistAlloc' for GC assistance?",
        "question_hi": "GC असिस्टेंस के लिए 'runtime.gcAssistAlloc' का उद्देश्य क्या है?",
        "options_en": ["Help GC during allocation", "Balance GC work", "Prevent heap growth", "All of the above"],
        "options_hi": ["अलोकेशन के दौरान GC की मदद करना", "GC वर्क बैलेंस करना", "हीप ग्रोथ रोकना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How does Go implement efficient zero-sized type handling?",
        "question_hi": "Go एफिशिएंट जीरो-साइज्ड टाइप हैंडलिंग कैसे इम्प्लीमेंट करता है?",
        "options_en": ["No allocation", "Special case handling", "Compiler optimization", "All of the above"],
        "options_hi": ["कोई अलोकेशन नहीं", "स्पेशल केस हैंडलिंग", "कंपाइलर ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the difference between channel operations in buffered performance?",
        "question_hi": "बफर्ड परफॉर्मेंस में चैनल ऑपरेशन में क्या अंतर है?",
        "options_en": ["Buffered reduce contention", "Unbuffered stronger sync", "Different use cases", "All of the above"],
        "options_hi": ["बफर्ड कॉन्टेंशन कम करते हैं", "अनबफर्ड स्ट्रॉन्गर सिंक", "अलग-अलग यूज केस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How does Go's runtime handle memory allocation for small objects?",
        "question_hi": "Go का रनटाइम छोटी ऑब्जेक्ट के लिए मेमोरी अलोकेशन कैसे हैंडल करता है?",
        "options_en": ["Size class optimization", "Per-P cache", "Reduced locking", "All of the above"],
        "options_hi": ["साइज क्लास ऑप्टिमाइज़ेशन", "प्रति-P कैश", "कम लॉकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of 'runtime.gcWriteBarrier' for pointer tracking?",
        "question_hi": "पॉइंटर ट्रैकिंग के लिए 'runtime.gcWriteBarrier' का उद्देश्य क्या है?",
        "options_en": ["Track pointer writes", "GC concurrent marking", "Memory color maintenance", "All of the above"],
        "options_hi": ["पॉइंटर राइट ट्रैक करना", "GC कंकरंट मार्किंग", "मेमोरी कलर मेंटेनेंस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How does Go implement efficient method value creation?",
        "question_hi": "Go एफिशिएंट मेथड वैल्यू क्रिएशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Closure implementation", "Receiver capture", "Escape analysis", "All of the above"],
        "options_hi": ["क्लोजर इम्प्लीमेंटेशन", "रिसीवर कैप्चर", "एस्केप एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the difference between sync.Pool and global variable pooling?",
        "question_hi": "sync.Pool और ग्लोबल वेरिएबल पूलिंग में क्या अंतर है?",
        "options_en": ["sync.Pool is GC-aware", "Per-P distribution", "Automatic lifecycle", "All of the above"],
        "options_hi": ["sync.Pool GC-अवेयर है", "प्रति-P डिस्ट्रीब्यूशन", "ऑटोमैटिक लाइफसाइकल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How does Go's runtime handle goroutine stack initialization size?",
        "question_hi": "Go का रनटाइम गोरूटीन स्टैक इनिशियलाइज़ेशन साइज कैसे हैंडल करता है?",
        "options_en": ["Fixed initial size", "Growth capability", "Guard page setup", "All of the above"],
        "options_hi": ["फिक्स्ड इनिशियल साइज", "ग्रोथ कैपेबिलिटी", "गार्ड पेज सेटअप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of 'runtime.mapiterinit' for map iteration?",
        "question_hi": "मैप इटरेशन के लिए 'runtime.mapiterinit' का उद्देश्य क्या है?",
        "options_en": ["Initialize iterator", "Track bucket position", "Handle concurrency", "All of the above"],
        "options_hi": ["इटरेटर इनिशियलाइज़ करना", "बकेट पोजीशन ट्रैक करना", "कंकरेंसी हैंडल करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How does Go implement efficient string comparison optimization?",
        "question_hi": "Go एफिशिएंट स्ट्रिंग कम्पेयरिजन ऑप्टिमाइज़ेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Length check first", "Memcmp optimization", "Compiler help", "All of the above"],
        "options_hi": ["पहले लेंथ चेक", "Memcmp ऑप्टिमाइज़ेशन", "कंपाइलर हेल्प", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the difference between sync.Mutex and spinlock for low latency?",
        "question_hi": "लो लेटेंसी के लिए sync.Mutex और स्पिनलॉक में क्या अंतर है?",
        "options_en": ["Spinlock for low contention", "Mutex for general use", "Different latency characteristics", "All of the above"],
        "options_hi": ["लो कॉन्टेंशन के लिए स्पिनलॉक", "जनरल यूज के लिए Mutex", "अलग-अलग लेटेंसी कैरेक्टरिस्टिक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How does Go's runtime handle finalizer registration process?",
        "question_hi": "Go का रनटाइम फाइनलाइज़र रजिस्ट्रेशन प्रोसेस कैसे हैंडल करता है?",
        "options_en": ["Special queue", "GC coordination", "Reachability tracking", "All of the above"],
        "options_hi": ["स्पेशल क्यू", "GC कोऑर्डिनेशन", "रीचेबिलिटी ट्रैकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of 'runtime.convI2I' for interface conversion?",
        "question_hi": "इंटरफेस कन्वर्जन के लिए 'runtime.convI2I' का उद्देश्य क्या है?",
        "options_en": ["Interface to interface conversion", "Method set checking", "Type assertion", "All of the above"],
        "options_hi": ["इंटरफेस से इंटरफेस कन्वर्जन", "मेथड सेट चेकिंग", "टाइप असर्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How does Go implement efficient array bounds checking?",
        "question_hi": "Go एफिशिएंट ऐरे बाउंड्स चेकिंग कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Compile-time elimination", "Runtime checking", "SSA optimization", "All of the above"],
        "options_hi": ["कंपाइल-टाइम एलिमिनेशन", "रनटाइम चेकिंग", "SSA ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the difference between channel select and direct operations?",
        "question_hi": "चैनल select और डायरेक्ट ऑपरेशन में क्या अंतर है?",
        "options_en": ["Select allows multiple", "Different scheduling", "Non-blocking support", "All of the above"],
        "options_hi": ["Select मल्टीपल की अनुमति देता है", "अलग-अलग शेड्यूलिंग", "नॉन-ब्लॉकिंग सपोर्ट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How does Go's runtime handle small object allocation optimization?",
        "question_hi": "Go का रनटाइम छोटी ऑब्जेक्ट अलोकेशन ऑप्टिमाइज़ेशन कैसे हैंडल करता है?",
        "options_en": ["Size class based", "Per-P cache", "Lock reduction", "All of the above"],
        "options_hi": ["साइज क्लास बेस्ड", "प्रति-P कैश", "लॉक रिडक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of 'runtime.gcWriteBarrier' for GC correctness?",
        "question_hi": "GC करेक्टनेस के लिए 'runtime.gcWriteBarrier' का उद्देश्य क्या है?",
        "options_en": ["Track pointer modifications", "Concurrent marking support", "Memory color tracking", "All of the above"],
        "options_hi": ["पॉइंटर मॉडिफिकेशन ट्रैक करना", "कंकरंट मार्किंग सपोर्ट", "मेमोरी कलर ट्रैकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How does Go implement efficient method value performance?",
        "question_hi": "Go एफिशिएंट मेथड वैल्यू परफॉर्मेंस कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Closure optimization", "Receiver handling", "Escape analysis", "All of the above"],
        "options_hi": ["क्लोजर ऑप्टिमाइज़ेशन", "रिसीवर हैंडलिंग", "एस्केप एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the difference between sync.Pool and manual pooling control?",
        "question_hi": "sync.Pool और मैन्युअल पूलिंग कंट्रोल में क्या अंतर है?",
        "options_en": ["sync.Pool GC integration", "Manual gives control", "Different lifecycle", "All of the above"],
        "options_hi": ["sync.Pool GC इंटीग्रेशन", "मैन्युअल कंट्रोल देता है", "अलग-अलग लाइफसाइकल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How does Go's runtime handle goroutine parking efficiency?",
        "question_hi": "Go का रनटाइम गोरूटीन पार्किंग एफिशिएंसी कैसे हैंडल करता है?",
        "options_en": ["Channel coordination", "Scheduler integration", "Wake-up mechanism", "All of the above"],
        "options_hi": ["चैनल कोऑर्डिनेशन", "शेड्यूलर इंटीग्रेशन", "वेक-अप मैकेनिज्म", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of 'runtime.memhash' for map performance?",
        "question_hi": "मैप परफॉर्मेंस के लिए 'runtime.memhash' का उद्देश्य क्या है?",
        "options_hi": ["फास्ट हैशिंग", "टाइप-स्पेसिफिक ऑप्टिमाइज़ेशन", "मैप एफिशिएंसी", "उपरोक्त सभी"],
        "options_en": ["Fast hashing", "Type-specific optimization", "Map efficiency", "All of the above"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How does Go implement efficient reflection struct access?",
        "question_hi": "Go एफिशिएंट रिफ्लेक्शन स्ट्रक्चर एक्सेस कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Field offset cache", "Type descriptor reuse", "Direct memory access", "All of the above"],
        "options_hi": ["फील्ड ऑफसेट कैश", "टाइप डिस्क्रिप्टर रीयूज", "डायरेक्ट मेमोरी एक्सेस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the difference between stack strategies for fragmentation?",
        "question_hi": "फ्रैगमेंटेशन के लिए स्टैक स्ट्रैटेजी में क्या अंतर है?",
        "options_en": ["Copying reduces fragmentation", "Growth can fragment", "Different behaviors", "All of the above"],
        "options_hi": ["कॉपीिंग फ्रैगमेंटेशन कम करती है", "ग्रोथ फ्रैगमेंट कर सकती है", "अलग-अलग बिहेवियर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How does Go's runtime handle finalizer execution timing control?",
        "question_hi": "Go का रनटाइम फाइनलाइज़र एक्जिक्यूशन टाइमिंग कंट्रोल कैसे हैंडल करता है?",
        "options_en": ["No timing guarantees", "Queue-based execution", "GC cycle coordination", "All of the above"],
        "options_hi": ["कोई टाइमिंग गारंटी नहीं", "क्यू-बेस्ड एक्जिक्यूशन", "GC साइकल कोऑर्डिनेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of 'runtime.cgocallback' for C integration?",
        "question_hi": "C इंटीग्रेशन के लिए 'runtime.cgocallback' का उद्देश्य क्या है?",
        "options_en": ["C to Go callbacks", "Stack management", "Goroutine handling", "All of the above"],
        "options_hi": ["C से Go कॉलबैक", "स्टैक मैनेजमेंट", "गोरूटीन हैंडलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How does Go implement efficient interface call optimization?",
        "question_hi": "Go एफिशिएंट इंटरफेस कॉल ऑप्टिमाइज़ेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Itab caching", "Direct call when possible", "Method table optimization", "All of the above"],
        "options_hi": ["Itab कैशिंग", "जब संभव हो डायरेक्ट कॉल", "मेथड टेबल ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the difference between RWMutex lock preferences?",
        "question_hi": "RWMutex लॉक प्रेफरेंस में क्या अंतर है?",
        "options_en": ["Writer-preference in Go", "Reader-preference alternatives", "Starvation tradeoffs", "All of the above"],
        "options_hi": ["Go में राइटर-प्रेफरेंस", "रीडर-प्रेफरेंस अल्टरनेटिव", "स्टार्वेशन ट्रेडऑफ", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How does Go's runtime handle memory span allocation?",
        "question_hi": "Go का रनटाइम मेमोरी स्पैन अलोकेशन कैसे हैंडल करता है?",
        "options_en": ["Page management", "Size class organization", "Free list handling", "All of the above"],
        "options_hi": ["पेज मैनेजमेंट", "साइज क्लास ऑर्गनाइज़ेशन", "फ्री लिस्ट हैंडलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of 'runtime.gcAssistAlloc' for work balancing?",
        "question_hi": "वर्क बैलेंसिंग के लिए 'runtime.gcAssistAlloc' का उद्देश्य क्या है?",
        "options_en": ["GC work assistance", "Allocation balancing", "Heap growth control", "All of the above"],
        "options_hi": ["GC वर्क असिस्टेंस", "अलोकेशन बैलेंसिंग", "हीप ग्रोथ कंट्रोल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How does Go implement zero-sized type efficiency?",
        "question_hi": "Go जीरो-साइज्ड टाइप एफिशिएंसी कैसे इम्प्लीमेंट करता है?",
        "options_en": ["No memory overhead", "Special handling", "Compiler optimization", "All of the above"],
        "options_hi": ["कोई मेमोरी ओवरहेड नहीं", "स्पेशल हैंडलिंग", "कंपाइलर ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
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