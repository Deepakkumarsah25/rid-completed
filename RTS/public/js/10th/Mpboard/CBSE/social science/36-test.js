const questions=[
    {
        "num": 1,
        "question_en": "What is the memory layout difference between []byte and string in Go?",
        "question_hi": "Go में []byte और string के बीच मेमोरी लेआउट में क्या अंतर है?",
        "options_en": ["string is immutable, []byte is mutable", "Both have different header structures", "string doesn't require null termination", "All of the above"],
        "options_hi": ["string इम्यूटेबल है, []byte म्यूटेबल है", "दोनों के अलग-अलग हेडर स्ट्रक्चर हैं", "string को null टर्मिनेशन की आवश्यकता नहीं है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How does Go's escape analysis determine stack vs heap allocation?",
        "question_hi": "Go की एस्केप एनालिसिस स्टैक vs हीप अलोकेशन कैसे निर्धारित करती है?",
        "options_en": ["Variables escaping function scope go to heap", "Pointers to local variables cause heap allocation", "Interface methods often cause heap allocation", "All of the above"],
        "options_hi": ["फंक्शन स्कोप से बचने वाले वेरिएबल हीप पर जाते हैं", "लोकल वेरिएबल के पॉइंटर हीप अलोकेशन करते हैं", "इंटरफेस मेथड अक्सर हीप अलोकेशन करते हैं", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the purpose of the 'runtime.mallocgc' function in Go's memory management?",
        "question_hi": "Go की मेमोरी मैनेजमेंट में 'runtime.mallocgc' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Allocate memory with garbage collection", "Handle small object allocation", "Manage memory spans and arenas", "All of the above"],
        "options_hi": ["गार्बेज कलेक्शन के साथ मेमोरी अलोकेट करना", "छोटी ऑब्जेक्ट अलोकेशन हैंडल करना", "मेमोरी स्पैन और एरिना मैनेज करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How does Go's goroutine scheduler implement work stealing?",
        "question_hi": "Go का गोरूटीन शेड्यूलर वर्क स्टीलिंग कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Idle processors steal from busy processors", "Uses per-P run queues", "Reduces goroutine starvation", "All of the above"],
        "options_hi": ["आइडल प्रोसेसर बिजी प्रोसेसर से चुराते हैं", "प्रति-P रन क्यू का उपयोग करता है", "गोरूटीन स्टार्वेशन कम करता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the difference between sync/atomic and runtime/internal/atomic packages?",
        "question_hi": "sync/atomic और runtime/internal/atomic पैकेज में क्या अंतर है?",
        "options_en": ["runtime/internal/atomic has lower-level primitives", "sync/atomic is for user code", "Different memory ordering guarantees", "All of the above"],
        "options_hi": ["runtime/internal/atomic में लोअर-लेवल प्रिमिटिव हैं", "sync/atomic यूजर कोड के लिए है", "अलग-अलग मेमोरी ऑर्डरिंग गारंटी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How does Go's GC implement tri-color mark and sweep algorithm?",
        "question_hi": "Go का GC ट्राई-कलर मार्क एंड स्वीप अल्गोरिदम कैसे इम्प्लीमेंट करता है?",
        "options_en": ["White: unmarked, Gray: being processed, Black: marked", "Uses write barriers for on-the-fly marking", "Concurrent marking phase", "All of the above"],
        "options_hi": ["व्हाइट: अनमार्क्ड, ग्रे: प्रोसेस हो रहा, ब्लैक: मार्क्ड", "ऑन-द-फ्लाई मार्किंग के लिए राइट बैरियर का उपयोग", "कंकरंट मार्किंग फेज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of the 'runtime.panic' and 'runtime.gopanic' functions?",
        "question_hi": "'runtime.panic' और 'runtime.gopanic' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Handle panic propagation", "Unwind stack frames", "Execute deferred functions", "All of the above"],
        "options_hi": ["पैनिक प्रोपेगेशन हैंडल करना", "स्टैक फ्रेम अनवाइंड करना", "डिफर्ड फंक्शन एक्जिक्यूट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How does Go implement interface method dispatch?",
        "question_hi": "Go इंटरफेस मेथड डिस्पैच कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Uses itab and iface structures", "Runtime type lookup", "Method table caching", "All of the above"],
        "options_hi": ["itab और iface स्ट्रक्चर का उपयोग", "रनटाइम टाइप लुकअप", "मेथड टेबल कैशिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the difference between syscall and syscall/js packages?",
        "question_hi": "syscall और syscall/js पैकेज में क्या अंतर है?",
        "options_en": ["syscall/js is for WebAssembly", "Different system call interfaces", "Platform-specific implementations", "All of the above"],
        "options_hi": ["syscall/js WebAssembly के लिए है", "अलग-अलग सिस्टम कॉल इंटरफेस", "प्लेटफॉर्म-स्पेसिफिक इम्प्लीमेंटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How does Go's memory allocator use size classes?",
        "question_hi": "Go का मेमोरी अलोकेटर साइज क्लासेज का उपयोग कैसे करता है?",
        "options_en": ["Pre-defined size buckets", "Reduces fragmentation", "Fast allocation for common sizes", "All of the above"],
        "options_hi": ["प्री-डिफाइंड साइज बकेट", "फ्रैगमेंटेशन कम करता है", "कॉमन साइज के लिए फास्ट अलोकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of 'runtime.convT2E' and 'runtime.convT2I'?",
        "question_hi": "'runtime.convT2E' और 'runtime.convT2I' का उद्देश्य क्या है?",
        "options_en": ["Convert concrete types to interface types", "Handle interface value representation", "Allocate interface data", "All of the above"],
        "options_hi": ["कंक्रीट टाइप को इंटरफेस टाइप में कन्वर्ट करना", "इंटरफेस वैल्यू रिप्रेजेंटेशन हैंडल करना", "इंटरफेस डेटा अलोकेट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How does Go implement defer performance optimizations?",
        "question_hi": "Go डिफर परफॉर्मेंस ऑप्टिमाइज़ेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Stack-allocated defer records", "Open-coded defers", "Compiler optimizations", "All of the above"],
        "options_hi": ["स्टैक-अलोकेटेड डिफर रिकॉर्ड", "ओपन-कोडेड डिफर", "कंपाइलर ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the difference between map access with comma-ok and without?",
        "question_hi": "कॉमा-ok के साथ और बिना मैप एक्सेस में क्या अंतर है?",
        "options_en": ["Comma-ok provides existence check", "Different code generation", "Panic vs zero value behavior", "All of the above"],
        "options_hi": ["कॉमा-ok एक्सिस्टेंस चेक प्रदान करता है", "अलग-अलग कोड जनरेशन", "पैनिक vs जीरो वैल्यू बिहेवियर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How does Go's compiler implement bounds check elimination?",
        "question_hi": "Go का कंपाइलर बाउंड्स चेक एलिमिनेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Prove indices are within bounds", "Loop induction variable analysis", "SSA optimization passes", "All of the above"],
        "options_hi": ["साबित करें कि इंडिक्स बाउंड्स के भीतर हैं", "लूप इंडक्शन वेरिएबल एनालिसिस", "SSA ऑप्टिमाइज़ेशन पास", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of 'runtime.newobject' and 'runtime.makemap'?",
        "question_hi": "'runtime.newobject' और 'runtime.makemap' का उद्देश्य क्या है?",
        "options_en": ["Allocate new objects on heap", "Initialize map data structures", "Handle GC-related operations", "All of the above"],
        "options_hi": ["हीप पर नई ऑब्जेक्ट अलोकेट करना", "मैप डेटा स्ट्रक्चर इनिशियलाइज़ करना", "GC-संबंधित ऑपरेशन हैंडल करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How does Go implement zero-cost interface conversions?",
        "question_hi": "Go जीरो-कॉस्ट इंटरफेस कन्वर्जन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Compiler optimizations for concrete types", "Direct method calls when possible", "Interface method inlining", "All of the above"],
        "options_hi": ["कंक्रीट टाइप के लिए कंपाइलर ऑप्टिमाइज़ेशन", "जब संभव हो डायरेक्ट मेथड कॉल", "इंटरफेस मेथड इनलाइनिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the difference between sync.Pool and manual object pooling?",
        "question_hi": "sync.Pool और मैन्युअल ऑब्जेक्ट पूलिंग में क्या अंतर है?",
        "options_en": ["sync.Pool is GC-aware", "Different lifecycle management", "sync.Pool has per-P pools", "All of the above"],
        "options_hi": ["sync.Pool GC-अवेयर है", "अलग-अलग लाइफसाइकल मैनेजमेंट", "sync.Pool में प्रति-P पूल हैं", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How does Go's runtime handle signal processing?",
        "question_hi": "Go का रनटाइम सिग्नल प्रोसेसिंग कैसे हैंडल करता है?",
        "options_en": ["OS signal to goroutine translation", "Preemption signals", "Non-cooperative goroutine preemption", "All of the above"],
        "options_hi": ["OS सिग्नल से गोरूटीन ट्रांसलेशन", "प्रीएम्पशन सिग्नल", "नॉन-कोऑपरेटिव गोरूटीन प्रीएम्पशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of 'runtime.morestack' and 'runtime.lessstack'?",
        "question_hi": "'runtime.morestack' और 'runtime.lessstack' का उद्देश्य क्या है?",
        "options_en": ["Grow and shrink goroutine stacks", "Stack overflow handling", "Segmented stack management", "All of the above"],
        "options_hi": ["गोरूटीन स्टैक बढ़ाना और सिकोड़ना", "स्टैक ओवरफ्लो हैंडलिंग", "सेगमेंटेड स्टैक मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How does Go implement efficient string concatenation?",
        "question_hi": "Go एफिशिएंट स्ट्रिंग कॉन्कैटनेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["strings.Builder for multiple appends", "Compiler optimizations for small strings", "Escape analysis to avoid allocations", "All of the above"],
        "options_hi": ["मल्टीपल ऐपेंड के लिए strings.Builder", "छोटी स्ट्रिंग के लिए कंपाइलर ऑप्टिमाइज़ेशन", "अलोकेशन से बचने के लिए एस्केप एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the difference between channel operations in sync and async modes?",
        "question_hi": "सिंक और एसिंक मोड में चैनल ऑपरेशन में क्या अंतर है?",
        "options_en": ["Sync operations block until completion", "Async uses select with default", "Different goroutine scheduling", "All of the above"],
        "options_hi": ["सिंक ऑपरेशन कम्पलीशन तक ब्लॉक करते हैं", "एसिंक डिफॉल्ट के साथ select का उपयोग करता है", "अलग-अलग गोरूटीन शेड्यूलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How does Go's runtime implement netpoller for I/O multiplexing?",
        "question_hi": "Go का रनटाइम I/O मल्टीप्लेक्सिंग के लिए netpoller कैसे इम्प्लीमेंट करता है?",
        "options_en": ["epoll/kqueue/IOCP integration", "Goroutine blocking on I/O", "Efficient I/O event handling", "All of the above"],
        "options_hi": ["epoll/kqueue/IOCP इंटीग्रेशन", "I/O पर गोरूटीन ब्लॉकिंग", "एफिशिएंट I/O इवेंट हैंडलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of 'runtime.mapaccess1' and 'runtime.mapaccess2'?",
        "question_hi": "'runtime.mapaccess1' और 'runtime.mapaccess2' का उद्देश्य क्या है?",
        "options_en": ["Fast path map access", "Handle hash collisions", "Different return value patterns", "All of the above"],
        "options_hi": ["फास्ट पाथ मैप एक्सेस", "हैश कॉलिजन हैंडल करना", "अलग-अलग रिटर्न वैल्यू पैटर्न", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How does Go implement efficient slice operations?",
        "question_hi": "Go एफिशिएंट स्लाइस ऑपरेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Slice header with pointer, len, cap", "Bounds check elimination", "Memory layout optimizations", "All of the above"],
        "options_hi": ["पॉइंटर, len, cap के साथ स्लाइस हेडर", "बाउंड्स चेक एलिमिनेशन", "मेमोरी लेआउट ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the difference between compile-time and runtime type assertions?",
        "question_hi": "कंपाइल-टाइम और रनटाइम टाइप असर्शन में क्या अंतर है?",
        "options_en": ["Compile-time uses type switches", "Runtime uses interface conversions", "Different performance characteristics", "All of the above"],
        "options_hi": ["कंपाइल-टाइम टाइप स्विच का उपयोग करता है", "रनटाइम इंटरफेस कन्वर्जन का उपयोग करता है", "अलग-अलग परफॉर्मेंस कैरेक्टरिस्टिक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How does Go's GC handle large object allocation?",
        "question_hi": "Go का GC लार्ज ऑब्जेक्ट अलोकेशन कैसे हैंडल करता है?",
        "options_en": ["Separate large object space", "Different allocation strategies", "Avoids moving large objects", "All of the above"],
        "options_hi": ["अलग लार्ज ऑब्जेक्ट स्पेस", "अलग-अलग अलोकेशन स्ट्रैटेजी", "लार्ज ऑब्जेक्ट मूव करने से बचता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of 'runtime.chansend' and 'runtime.chanrecv'?",
        "question_hi": "'runtime.chansend' और 'runtime.chanrecv' का उद्देश्य क्या है?",
        "options_en": ["Low-level channel operations", "Handle blocking and non-blocking cases", "Goroutine scheduling integration", "All of the above"],
        "options_hi": ["लो-लेवल चैनल ऑपरेशन", "ब्लॉकिंग और नॉन-ब्लॉकिंग केस हैंडल करना", "गोरूटीन शेड्यूलिंग इंटीग्रेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How does Go implement efficient map iteration?",
        "question_hi": "Go एफिशिएंट मैप इटरेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Randomized iteration start", "Bucket-based traversal", "Concurrent modification detection", "All of the above"],
        "options_hi": ["रैंडमाइज्ड इटरेशन स्टार्ट", "बकेट-बेस्ड ट्रैवर्सल", "कंकरंट मॉडिफिकेशन डिटेक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the difference between stack growth and stack copying?",
        "question_hi": "स्टैक ग्रोथ और स्टैक कॉपीिंग में क्या अंतर है?",
        "options_en": ["Stack growth uses contiguous memory", "Stack copying allows moving stacks", "Different fragmentation characteristics", "All of the above"],
        "options_hi": ["स्टैक ग्रोथ कॉन्टिग्यूअस मेमोरी का उपयोग करती है", "स्टैक कॉपीिंग स्टैक मूव करने की अनुमति देती है", "अलग-अलग फ्रैगमेंटेशन कैरेक्टरिस्टिक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How does Go's runtime handle finalizer execution?",
        "question_hi": "Go का रनटाइम फाइनलाइज़र एक्जिक्यूशन कैसे हैंडल करता है?",
        "options_en": ["Separate finalizer goroutine", "Runs before object collection", "Non-deterministic execution timing", "All of the above"],
        "options_hi": ["अलग फाइनलाइज़र गोरूटीन", "ऑब्जेक्ट कलेक्शन से पहले रन होता है", "नॉन-डिटरमिनिस्टिक एक्जिक्यूशन टाइमिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of 'runtime.gcStart' and 'runtime.gcSweep'?",
        "question_hi": "'runtime.gcStart' और 'runtime.gcSweep' का उद्देश्य क्या है?",
        "options_en": ["Initiate garbage collection cycles", "Manage mark and sweep phases", "Coordinate with mutator threads", "All of the above"],
        "options_hi": ["गार्बेज कलेक्शन साइकल शुरू करना", "मार्क और स्वीप फेज मैनेज करना", "म्यूटेटर थ्रेड के साथ कोऑर्डिनेट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How does Go implement efficient context switching between goroutines?",
        "question_hi": "Go गोरूटीन के बीच एफिशिएंट कॉन्टेक्स्ट स्विचिंग कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Minimal register saving", "Stack pointer switching", "Cooperative scheduling points", "All of the above"],
        "options_hi": ["मिनिमल रजिस्टर सेविंग", "स्टैक पॉइंटर स्विचिंग", "कोऑपरेटिव शेड्यूलिंग पॉइंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the difference between interface method calls and direct method calls?",
        "question_hi": "इंटरफेस मेथड कॉल और डायरेक्ट मेथड कॉल में क्या अंतर है?",
        "options_en": ["Interface calls require dynamic dispatch", "Direct calls are statically resolved", "Different performance overhead", "All of the above"],
        "options_hi": ["इंटरफेस कॉल डायनामिक डिस्पैच रिक्वायर करते हैं", "डायरेक्ट कॉल स्टैटिकली रिजॉल्व्ड होते हैं", "अलग-अलग परफॉर्मेंस ओवरहेड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How does Go's runtime handle system thread management?",
        "question_hi": "Go का रनटाइम सिस्टम थ्रेड मैनेजमेंट कैसे हैंडल करता है?",
        "options_en": ["M:N threading model", "Work-stealing scheduler", "OS thread pooling", "All of the above"],
        "options_hi": ["M:N थ्रेडिंग मॉडल", "वर्क-स्टीलिंग शेड्यूलर", "OS थ्रेड पूलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of 'runtime.stringtoslicebyte' and 'runtime.slicebytetostring'?",
        "question_hi": "'runtime.stringtoslicebyte' और 'runtime.slicebytetostring' का उद्देश्य क्या है?",
        "options_en": ["Efficient string/byte slice conversion", "Avoid unnecessary copying", "Memory allocation optimization", "All of the above"],
        "options_hi": ["एफिशिएंट स्ट्रिंग/बाइट स्लाइस कन्वर्जन", "अननसेसरी कॉपीिंग से बचना", "मेमोरी अलोकेशन ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How does Go implement efficient memory zeroing?",
        "question_hi": "Go एफिशिएंट मेमोरी जीरोइंग कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Compiler-generated zeroing code", "Bulk memory operations", "SSE/AVX instructions when available", "All of the above"],
        "options_hi": ["कंपाइलर-जनरेटेड जीरोइंग कोड", "बल्क मेमोरी ऑपरेशन", "उपलब्ध होने पर SSE/AVX इंस्ट्रक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the difference between sync.Mutex and sync.RWMutex implementation?",
        "question_hi": "sync.Mutex और sync.RWMutex इम्प्लीमेंटेशन में क्या अंतर है?",
        "options_en": ["RWMutex has reader-writer semantics", "Different lock state management", "Reader counting mechanism", "All of the above"],
        "options_hi": ["RWMutex में रीडर-राइटर सेमेन्टिक्स हैं", "अलग-अलग लॉक स्टेट मैनेजमेंट", "रीडर काउंटिंग मैकेनिज्म", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How does Go's runtime handle cgo call overhead?",
        "question_hi": "Go का रनटाइम cgo कॉल ओवरहेड कैसे हैंडल करता है?",
        "options_en": ["C to Go callback handling", "Stack switching for C calls", "Goroutine locking during C execution", "All of the above"],
        "options_hi": ["C से Go कॉलबैक हैंडलिंग", "C कॉल के लिए स्टैक स्विचिंग", "C एक्जिक्यूशन के दौरान गोरूटीन लॉकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of 'runtime.memclrNoHeapPointers'?",
        "question_hi": "'runtime.memclrNoHeapPointers' का उद्देश्य क्या है?",
        "options_en": ["Efficient memory clearing", "Avoid GC write barriers", "Performance optimization", "All of the above"],
        "options_hi": ["एफिशिएंट मेमोरी क्लीयरिंग", "GC राइट बैरियर से बचना", "परफॉर्मेंस ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How does Go implement efficient function inlining?",
        "question_hi": "Go एफिशिएंट फंक्शन इनलाइनिंग कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Cost-based inlining decisions", "Function size heuristics", "Escape analysis integration", "All of the above"],
        "options_hi": ["कॉस्ट-बेस्ड इनलाइनिंग डिसीजन", "फंक्शन साइज ह्यूरिस्टिक", "एस्केप एनालिसिस इंटीग्रेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the difference between channel operations in buffered and unbuffered modes?",
        "question_hi": "बफर्ड और अनबफर्ड मोड में चैनल ऑपरेशन में क्या अंतर है?",
        "options_en": ["Buffered channels allow temporary storage", "Different synchronization semantics", "Performance characteristics vary", "All of the above"],
        "options_hi": ["बफर्ड चैनल टेम्पररी स्टोरेज की अनुमति देते हैं", "अलग-अलग सिंक्रोनाइज़ेशन सेमेन्टिक्स", "परफॉर्मेंस कैरेक्टरिस्टिक अलग-अलग होती हैं", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How does Go's runtime handle panic recovery across goroutines?",
        "question_hi": "Go का रनटाइम गोरूटीन के बीच पैनिक रिकवरी कैसे हैंडल करता है?",
        "options_en": ["Panic doesn't cross goroutine boundaries", "Each goroutine has separate panic state", "Recover only works in panicking goroutine", "All of the above"],
        "options_hi": ["पैनिक गोरूटीन बाउंड्री क्रॉस नहीं करता", "प्रत्येक गोरूटीन का अलग पैनिक स्टेट होता है", "रिकवर केवल पैनिक करने वाली गोरूटीन में काम करता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of 'runtime.duffcopy' and 'runtime.duffzero'?",
        "question_hi": "'runtime.duffcopy' और 'runtime.duffzero' का उद्देश्य क्या है?",
        "options_en": ["Efficient memory copying and zeroing", "Duff's device implementation", "Loop unrolling optimizations", "All of the above"],
        "options_hi": ["एफिशिएंट मेमोरी कॉपीिंग और जीरोइंग", "डफ्स डिवाइस इम्प्लीमेंटेशन", "लूप अनरोलिंग ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How does Go implement efficient type switches?",
        "question_hi": "Go एफिशिएंट टाइप स्विच कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Jump table generation", "Type hash comparisons", "Direct type assertions", "All of the above"],
        "options_hi": ["जंप टेबल जनरेशन", "टाइप हैश कम्पेयरिजन", "डायरेक्ट टाइप असर्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the difference between slice growth strategies in append vs make?",
        "question_hi": "append vs make में स्लाइस ग्रोथ स्ट्रैटेजी में क्या अंतर है?",
        "options_en": ["append uses exponential growth", "make allows explicit capacity", "Different allocation patterns", "All of the above"],
        "options_hi": ["append एक्सपोनेंशियल ग्रोथ का उपयोग करता है", "make एक्सप्लिसिट कैपेसिटी की अनुमति देता है", "अलग-अलग अलोकेशन पैटर्न", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How does Go's runtime handle timer management?",
        "question_hi": "Go का रनटाइम टाइमर मैनेजमेंट कैसे हैंडल करता है?",
        "options_en": ["Per-P timer heaps", "Efficient timer firing", "Integration with netpoller", "All of the above"],
        "options_hi": ["प्रति-P टाइमर हीप", "एफिशिएंट टाइमर फायरिंग", "netpoller के साथ इंटीग्रेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of 'runtime.getg' and 'runtime.getm'?",
        "question_hi": "'runtime.getg' और 'runtime.getm' का उद्देश्य क्या है?",
        "options_en": ["Get current goroutine and machine", "Runtime introspection", "Low-level scheduler access", "All of the above"],
        "options_hi": ["करंट गोरूटीन और मशीन प्राप्त करना", "रनटाइम इंट्रोस्पेक्शन", "लो-लेवल शेड्यूलर एक्सेस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How does Go implement efficient map hash computation?",
        "question_hi": "Go एफिशिएंट मैप हैश कम्प्यूटेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Type-specific hash functions", "AES-based hashing for security", "Hash seed randomization", "All of the above"],
        "options_hi": ["टाइप-स्पेसिफिक हैश फंक्शन", "सिक्योरिटी के लिए AES-बेस्ड हैशिंग", "हैश सीड रैंडमाइजेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the difference between stack and heap profiling in Go?",
        "question_hi": "Go में स्टैक और हीप प्रोफाइलिंग में क्या अंतर है?",
        "options_en": ["Stack profiling samples call stacks", "Heap profiling shows memory allocation", "Different data collection methods", "All of the above"],
        "options_hi": ["स्टैक प्रोफाइलिंग कॉल स्टैक सैंपल करती है", "हीप प्रोफाइलिंग मेमोरी अलोकेशन दिखाती है", "अलग-अलग डेटा कलेक्शन मेथड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How does Go's runtime handle sysmon (system monitor) goroutine?",
        "question_hi": "Go का रनटाइम sysmon (सिस्टम मॉनिटर) गोरूटीन कैसे हैंडल करता है?",
        "options_en": ["Background system monitoring", "Forced GC triggering", "Netpoll timeout handling", "All of the above"],
        "options_hi": ["बैकग्राउंड सिस्टम मॉनिटरिंग", "फोर्स्ड GC ट्रिगरिंग", "Netpoll टाइमआउट हैंडलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of 'runtime.casgstatus' and goroutine state transitions?",
        "question_hi": "'runtime.casgstatus' और गोरूटीन स्टेट ट्रांजिशन का उद्देश्य क्या है?",
        "options_en": ["Atomic goroutine state changes", "Scheduler coordination", "Prevention of race conditions", "All of the above"],
        "options_hi": ["एटॉमिक गोरूटीन स्टेट चेंज", "शेड्यूलर कोऑर्डिनेशन", "रेस कंडीशन की रोकथाम", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How does Go implement efficient bounds check elimination in loops?",
        "question_hi": "Go लूप में एफिशिएंट बाउंड्स चेक एलिमिनेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Loop invariant code motion", "Induction variable analysis", "Range expression optimizations", "All of the above"],
        "options_hi": ["लूप इनवेरिएंट कोड मोशन", "इंडक्शन वेरिएबल एनालिसिस", "रेंज एक्सप्रेशन ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the difference between interface method sets for value and pointer receivers?",
        "question_hi": "वैल्यू और पॉइंटर रिसीवर के लिए इंटरफेस मेथड सेट में क्या अंतर है?",
        "options_en": ["Value receivers implement value and pointer interfaces", "Pointer receivers only implement pointer interfaces", "Different method set satisfaction rules", "All of the above"],
        "options_hi": ["वैल्यू रिसीवर वैल्यू और पॉइंटर इंटरफेस इम्प्लीमेंट करते हैं", "पॉइंटर रिसीवर केवल पॉइंटर इंटरफेस इम्प्लीमेंट करते हैं", "अलग-अलग मेथड सेट सैटिस्फैक्शन रूल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How does Go's runtime handle memory statistics collection?",
        "question_hi": "Go का रनटाइम मेमोरी स्टैटिस्टिक्स कलेक्शन कैसे हैंडल करता है?",
        "options_en": ["Atomic counter updates", "Per-size class statistics", "GC cycle data collection", "All of the above"],
        "options_hi": ["एटॉमिक काउंटर अपडेट", "प्रति-साइज क्लास स्टैटिस्टिक्स", "GC साइकल डेटा कलेक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of 'runtime.procyield' and processor yielding?",
        "question_hi": "'runtime.procyield' और प्रोसेसर यील्डिंग का उद्देश्य क्या है?",
        "options_en": ["Efficient busy-waiting", "Reduce CPU contention", "Power consumption optimization", "All of the above"],
        "options_hi": ["एफिशिएंट बिजी-वेटिंग", "CPU कॉन्टेंशन कम करना", "पावर कंजम्पशन ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How does Go implement efficient select statement with multiple cases?",
        "question_hi": "Go मल्टीपल केस के साथ एफिशिएंट select स्टेटमेंट कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Random case selection", "Channel operation polling", "Avoidance of goroutine starvation", "All of the above"],
        "options_hi": ["रैंडम केस सिलेक्शन", "चैनल ऑपरेशन पोलिंग", "गोरूटीन स्टार्वेशन से बचना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the difference between sync.Once and atomic.Once in Go 1.21+?",
        "question_hi": "Go 1.21+ में sync.Once और atomic.Once में क्या अंतर है?",
        "options_en": ["atomic.Once is faster for uncontended cases", "sync.Once has better contended performance", "Different implementation strategies", "All of the above"],
        "options_hi": ["atomic.Once अनकॉन्टेंडेड केस के लिए फास्टर है", "sync.Once की कॉन्टेंडेड परफॉर्मेंस बेहतर है", "अलग-अलग इम्प्लीमेंटेशन स्ट्रैटेजी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How does Go's runtime handle write barrier implementation?",
        "question_hi": "Go का रनटाइम राइट बैरियर इम्प्लीमेंटेशन कैसे हैंडल करता है?",
        "options_en": ["Hybrid barrier for concurrent GC", "Pointer write interception", "Memory color maintenance", "All of the above"],
        "options_hi": ["कंकरंट GC के लिए हाइब्रिड बैरियर", "पॉइंटर राइट इंटरसेप्शन", "मेमोरी कलर मेंटेनेंस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of 'runtime.gcBgMarkWorker' goroutines?",
        "question_hi": "'runtime.gcBgMarkWorker' गोरूटीन का उद्देश्य क्या है?",
        "options_en": ["Background GC marking", "Concurrent mark phase execution", "Work stealing for GC", "All of the above"],
        "options_hi": ["बैकग्राउंड GC मार्किंग", "कंकरंट मार्क फेज एक्जिक्यूशन", "GC के लिए वर्क स्टीलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How does Go implement efficient reflection method calls?",
        "question_hi": "Go एफिशिएंट रिफ्लेक्शन मेथड कॉल कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Method value caching", "Direct call optimization", "Interface conversion shortcuts", "All of the above"],
        "options_hi": ["मेथड वैल्यू कैशिंग", "डायरेक्ट कॉल ऑप्टिमाइज़ेशन", "इंटरफेस कन्वर्जन शॉर्टकट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the difference between stack and register-based calling conventions?",
        "question_hi": "स्टैक और रजिस्टर-बेस्ड कॉलिंग कन्वेंशन में क्या अंतर है?",
        "options_en": ["Go uses platform-specific calling conventions", "Some architectures use register-based", "Different performance characteristics", "All of the above"],
        "options_hi": ["Go प्लेटफॉर्म-स्पेसिफिक कॉलिंग कन्वेंशन का उपयोग करता है", "कुछ आर्किटेक्चर रजिस्टर-बेस्ड का उपयोग करते हैं", "अलग-अलग परफॉर्मेंस कैरेक्टरिस्टिक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How does Go's runtime handle finalizer queue management?",
        "question_hi": "Go का रनटाइम फाइनलाइज़र क्यू मैनेजमेंट कैसे हैंडल करता है?",
        "options_en": ["Separate finalizer goroutine", "Queue-based execution", "GC cycle coordination", "All of the above"],
        "options_hi": ["अलग फाइनलाइज़र गोरूटीन", "क्यू-बेस्ड एक्जिक्यूशन", "GC साइकल कोऑर्डिनेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of 'runtime.makeslice' and capacity calculation?",
        "question_hi": "'runtime.makeslice' और कैपेसिटी कैलकुलेशन का उद्देश्य क्या है?",
        "options_en": ["Efficient slice allocation", "Memory alignment handling", "Overflow checking", "All of the above"],
        "options_hi": ["एफिशिएंट स्लाइस अलोकेशन", "मेमोरी अलाइनमेंट हैंडलिंग", "ओवरफ्लो चेकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How does Go implement efficient closure variable capture?",
        "question_hi": "Go एफिशिएंट क्लोजर वेरिएबल कैप्चर कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Heap allocation when escaping", "Pointer-based variable access", "Escape analysis optimization", "All of the above"],
        "options_hi": ["एस्केप होने पर हीप अलोकेशन", "पॉइंटर-बेस्ड वेरिएबल एक्सेस", "एस्केप एनालिसिस ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the difference between sync.Cond and channel-based signaling?",
        "question_hi": "sync.Cond और चैनल-बेस्ड सिग्नलिंग में क्या अंतर है?",
        "options_en": ["sync.Cond allows multiple waiters", "Channels are more composable", "Different performance characteristics", "All of the above"],
        "options_hi": ["sync.Cond मल्टीपल वेटर की अनुमति देता है", "चैनल अधिक कंपोजेबल हैं", "अलग-अलग परफॉर्मेंस कैरेक्टरिस्टिक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How does Go's runtime handle memory arena management?",
        "question_hi": "Go का रनटाइम मेमोरी एरिना मैनेजमेंट कैसे हैंडल करता है?",
        "options_en": ["Per-P memory caches", "Central heap arenas", "Span-based allocation", "All of the above"],
        "options_hi": ["प्रति-P मेमोरी कैश", "सेंट्रल हीप एरिना", "स्पैन-बेस्ड अलोकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of 'runtime.growslice' and slice growth algorithm?",
        "question_hi": "'runtime.growslice' और स्लाइस ग्रोथ अल्गोरिदम का उद्देश्य क्या है?",
        "options_en": ["Exponential capacity growth", "Memory copying optimization", "Overflow protection", "All of the above"],
        "options_hi": ["एक्सपोनेंशियल कैपेसिटी ग्रोथ", "मेमोरी कॉपीिंग ऑप्टिमाइज़ेशन", "ओवरफ्लो प्रोटेक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How does Go implement efficient map key comparison?",
        "question_hi": "Go एफिशिएंट मैप की कम्पेयरिजन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Type-specific comparison functions", "Memcmp for comparable types", "Interface method dispatch", "All of the above"],
        "options_hi": ["टाइप-स्पेसिफिक कम्पेयरिजन फंक्शन", "कम्पेयरबल टाइप के लिए Memcmp", "इंटरफेस मेथड डिस्पैच", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the difference between sync.Map and concurrent map with RWMutex?",
        "question_hi": "sync.Map और RWMutex के साथ कंकरंट मैप में क्या अंतर है?",
        "options_en": ["sync.Map optimized for read-heavy workloads", "Different lock granularity", "Copy-on-write semantics", "All of the above"],
        "options_hi": ["sync.Map रीड-हेवी वर्कलोड के लिए ऑप्टिमाइज़्ड", "अलग-अलग लॉक ग्रैन्युलैरिटी", "कॉपी-ऑन-राइट सेमेन्टिक्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How does Go's runtime handle syscall execution and blocking?",
        "question_hi": "Go का रनटाइम सिस्टमकॉल एक्जिक्यूशन और ब्लॉकिंग कैसे हैंडल करता है?",
        "options_en": ["Handoff to separate thread", "Non-blocking syscall wrapper", "Goroutine parking during syscalls", "All of the above"],
        "options_hi": ["अलग थ्रेड को हैंडऑफ", "नॉन-ब्लॉकिंग सिस्टमकॉल रैपर", "सिस्टमकॉल के दौरान गोरूटीन पार्किंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of 'runtime.mcall' and goroutine context switching?",
        "question_hi": "'runtime.mcall' और गोरूटीन कॉन्टेक्स्ट स्विचिंग का उद्देश्य क्या है?",
        "options_en": ["Switch to system stack", "Save goroutine context", "Schedule next goroutine", "All of the above"],
        "options_hi": ["सिस्टम स्टैक पर स्विच करना", "गोरूटीन कॉन्टेक्स्ट सेव करना", "अगली गोरूटीन शेड्यूल करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How does Go implement efficient interface type assertions?",
        "question_hi": "Go एफिशिएंट इंटरफेस टाइप असर्शन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Type hash comparison", "Direct type pointer comparison", "Cache recently used types", "All of the above"],
        "options_hi": ["टाइप हैश कम्पेयरिजन", "डायरेक्ट टाइप पॉइंटर कम्पेयरिजन", "हाल में उपयोग किए गए टाइप कैश करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the difference between stack and heap memory profiling?",
        "question_hi": "स्टैक और हीप मेमोरी प्रोफाइलिंग में क्या अंतर है?",
        "options_en": ["Stack profiling shows call hierarchy", "Heap profiling shows allocation sites", "Different sampling rates", "All of the above"],
        "options_hi": ["स्टैक प्रोफाइलिंग कॉल हायरार्की दिखाती है", "हीप प्रोफाइलिंग अलोकेशन साइट दिखाती है", "अलग-अलग सैंपलिंग रेट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How does Go's runtime handle memory scavenging?",
        "question_hi": "Go का रनटाइम मेमोरी स्कैवेंजिंग कैसे हैंडल करता है?",
        "options_en": ["Return memory to OS", "Page-level decommit", "Background scavenger goroutine", "All of the above"],
        "options_hi": ["OS को मेमोरी वापस करना", "पेज-लेवल डिकमिट", "बैकग्राउंड स्कैवेंजर गोरूटीन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of 'runtime.typedmemmove' and type-aware memory copying?",
        "question_hi": "'runtime.typedmemmove' और टाइप-अवेयर मेमोरी कॉपीिंग का उद्देश्य क्या है?",
        "options_en": ["Handle pointer-containing types", "GC write barrier integration", "Efficient struct copying", "All of the above"],
        "options_hi": ["पॉइंटर-कंटेनिंग टाइप हैंडल करना", "GC राइट बैरियर इंटीग्रेशन", "एफिशिएंट स्ट्रक्चर कॉपीिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How does Go implement efficient range loop over maps?",
        "question_hi": "Go मैप पर एफिशिएंट रेंज लूप कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Iterator state tracking", "Bucket-based traversal", "Concurrent modification detection", "All of the above"],
        "options_hi": ["इटरेटर स्टेट ट्रैकिंग", "बकेट-बेस्ड ट्रैवर्सल", "कंकरंट मॉडिफिकेशन डिटेक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the difference between sync.WaitGroup and errgroup with context?",
        "question_hi": "sync.WaitGroup और कॉन्टेक्स्ट के साथ errgroup में क्या अंतर है?",
        "options_en": ["errgroup provides error propagation", "Context cancellation support", "Different use case patterns", "All of the above"],
        "options_hi": ["errgroup एरर प्रोपेगेशन प्रदान करता है", "कॉन्टेक्स्ट कैंसलेशन सपोर्ट", "अलग-अलग यूज केस पैटर्न", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How does Go's runtime handle goroutine stack initialization?",
        "question_hi": "Go का रनटाइम गोरूटीन स्टैक इनिशियलाइज़ेशन कैसे हैंडल करता है?",
        "options_en": ["Fixed initial stack size", "Stack growth capability", "Guard page protection", "All of the above"],
        "options_hi": ["फिक्स्ड इनिशियल स्टैक साइज", "स्टैक ग्रोथ कैपेबिलिटी", "गार्ड पेज प्रोटेक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of 'runtime.mapiterinit' and map iteration state?",
        "question_hi": "'runtime.mapiterinit' और मैप इटरेशन स्टेट का उद्देश्य क्या है?",
        "options_en": ["Initialize map iterator", "Track current bucket and offset", "Handle concurrent modification", "All of the above"],
        "options_hi": ["मैप इटरेटर इनिशियलाइज़ करना", "करंट बकेट और ऑफसेट ट्रैक करना", "कंकरंट मॉडिफिकेशन हैंडल करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How does Go implement efficient string comparison?",
        "question_hi": "Go एफिशिएंट स्ट्रिंग कम्पेयरिजन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Length check first", "Memcmp for byte comparison", "Compiler optimizations", "All of the above"],
        "options_hi": ["पहले लेंथ चेक", "बाइट कम्पेयरिजन के लिए Memcmp", "कंपाइलर ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the difference between sync.Mutex and spinlock implementation?",
        "question_hi": "sync.Mutex और स्पिनलॉक इम्प्लीमेंटेशन में क्या अंतर है?",
        "options_en": ["sync.Mutex uses OS primitives", "Spinlock uses busy-waiting", "Different contention handling", "All of the above"],
        "options_hi": ["sync.Mutex OS प्रिमिटिव का उपयोग करता है", "स्पिनलॉक बिजी-वेटिंग का उपयोग करता है", "अलग-अलग कॉन्टेंशन हैंडलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How does Go's runtime handle finalizer registration?",
        "question_hi": "Go का रनटाइम फाइनलाइज़र रजिस्ट्रेशन कैसे हैंडल करता है?",
        "options_en": ["Special finalizer queue", "GC coordination", "Object reachability tracking", "All of the above"],
        "options_hi": ["स्पेशल फाइनलाइज़र क्यू", "GC कोऑर्डिनेशन", "ऑब्जेक्ट रीचेबिलिटी ट्रैकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of 'runtime.convI2I' and interface to interface conversion?",
        "question_hi": "'runtime.convI2I' और इंटरफेस से इंटरफेस कन्वर्जन का उद्देश्य क्या है?",
        "options_en": ["Convert between interface types", "Handle method set compatibility", "Type assertion implementation", "All of the above"],
        "options_hi": ["इंटरफेस टाइप के बीच कन्वर्ट करना", "मेथड सेट कम्पेटिबिलिटी हैंडल करना", "टाइप असर्शन इम्प्लीमेंटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How does Go implement efficient array and slice bounds checking?",
        "question_hi": "Go एफिशिएंट ऐरे और स्लाइस बाउंड्स चेकिंग कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Compile-time bounds elimination", "Runtime bounds checking", "SSA optimization passes", "All of the above"],
        "options_hi": ["कंपाइल-टाइम बाउंड्स एलिमिनेशन", "रनटाइम बाउंड्स चेकिंग", "SSA ऑप्टिमाइज़ेशन पास", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the difference between channel operations in select vs direct send/receive?",
        "question_hi": "select vs डायरेक्ट सेंड/रिसीव में चैनल ऑपरेशन में क्या अंतर है?",
        "options_en": ["Select allows multiple operations", "Different goroutine scheduling", "Non-blocking operation support", "All of the above"],
        "options_hi": ["Select मल्टीपल ऑपरेशन की अनुमति देता है", "अलग-अलग गोरूटीन शेड्यूलिंग", "नॉन-ब्लॉकिंग ऑपरेशन सपोर्ट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How does Go's runtime handle memory allocation for small objects?",
        "question_hi": "Go का रनटाइम छोटी ऑब्जेक्ट के लिए मेमोरी अलोकेशन कैसे हैंडल करता है?",
        "options_en": ["Size-class based allocation", "Per-P cache for small objects", "Reduced lock contention", "All of the above"],
        "options_hi": ["साइज-क्लास बेस्ड अलोकेशन", "छोटी ऑब्जेक्ट के लिए प्रति-P कैश", "कम लॉक कॉन्टेंशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of 'runtime.gcWriteBarrier' and pointer writes?",
        "question_hi": "'runtime.gcWriteBarrier' और पॉइंटर राइट का उद्देश्य क्या है?",
        "options_en": ["Track pointer modifications", "GC concurrent marking support", "Memory color maintenance", "All of the above"],
        "options_hi": ["पॉइंटर मॉडिफिकेशन ट्रैक करना", "GC कंकरंट मार्किंग सपोर्ट", "मेमोरी कलर मेंटेनेंस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How does Go implement efficient method value creation?",
        "question_hi": "Go एफिशिएंट मेथड वैल्यू क्रिएशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Closure-based implementation", "Receiver capture optimization", "Escape analysis for method values", "All of the above"],
        "options_hi": ["क्लोजर-बेस्ड इम्प्लीमेंटेशन", "रिसीवर कैप्चर ऑप्टिमाइज़ेशन", "मेथड वैल्यू के लिए एस्केप एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the difference between sync.Pool and global variable caching?",
        "question_hi": "sync.Pool और ग्लोबल वेरिएबल कैशिंग में क्या अंतर है?",
        "options_en": ["sync.Pool is GC-aware", "Per-P cache distribution", "Automatic object lifecycle", "All of the above"],
        "options_hi": ["sync.Pool GC-अवेयर है", "प्रति-P कैश डिस्ट्रीब्यूशन", "ऑटोमैटिक ऑब्जेक्ट लाइफसाइकल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How does Go's runtime handle goroutine parking and unparking?",
        "question_hi": "Go का रनटाइम गोरूटीन पार्किंग और अनपार्किंग कैसे हैंडल करता है?",
        "options_en": ["Channel operation coordination", "Scheduler queue management", "Wake-up signal handling", "All of the above"],
        "options_hi": ["चैनल ऑपरेशन कोऑर्डिनेशन", "शेड्यूलर क्यू मैनेजमेंट", "वेक-अप सिग्नल हैंडलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of 'runtime.memhash' and efficient hashing?",
        "question_hi": "'runtime.memhash' और एफिशिएंट हैशिंग का उद्देश्य क्या है?",
        "options_en": ["Fast hash computation", "Type-specific hash functions", "Map key hashing optimization", "All of the above"],
        "options_hi": ["फास्ट हैश कम्प्यूटेशन", "टाइप-स्पेसिफिक हैश फंक्शन", "मैप की हैशिंग ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How does Go implement efficient reflection for struct fields?",
        "question_hi": "Go स्ट्रक्चर फील्ड के लिए एफिशिएंट रिफ्लेक्शन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Field offset caching", "Type descriptor reuse", "Direct memory access", "All of the above"],
        "options_hi": ["फील्ड ऑफसेट कैशिंग", "टाइप डिस्क्रिप्टर रीयूज", "डायरेक्ट मेमोरी एक्सेस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the difference between stack copying and stack growth strategies?",
        "question_hi": "स्टैक कॉपीिंग और स्टैक ग्रोथ स्ट्रैटेजी में क्या अंतर है?",
        "options_en": ["Copying allows stack moving", "Growth uses contiguous memory", "Different fragmentation behavior", "All of the above"],
        "options_hi": ["कॉपीिंग स्टैक मूव करने की अनुमति देती है", "ग्रोथ कॉन्टिग्यूअस मेमोरी का उपयोग करती है", "अलग-अलग फ्रैगमेंटेशन बिहेवियर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How does Go's runtime handle finalizer execution ordering?",
        "question_hi": "Go का रनटाइम फाइनलाइज़र एक्जिक्यूशन ऑर्डरिंग कैसे हैंडल करता है?",
        "options_en": ["No guaranteed execution order", "Queue-based processing", "GC cycle dependency", "All of the above"],
        "options_hi": ["कोई गारंटीड एक्जिक्यूशन ऑर्डर नहीं", "क्यू-बेस्ड प्रोसेसिंग", "GC साइकल डिपेंडेंसी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of 'runtime.cgocallback' and C to Go calls?",
        "question_hi": "'runtime.cgocallback' और C से Go कॉल का उद्देश्य क्या है?",
        "options_en": ["Handle C to Go callbacks", "Stack switching for Go code", "Goroutine scheduling integration", "All of the above"],
        "options_hi": ["C से Go कॉलबैक हैंडल करना", "Go कोड के लिए स्टैक स्विचिंग", "गोरूटीन शेड्यूलिंग इंटीग्रेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How does Go implement efficient interface method calls?",
        "question_hi": "Go एफिशिएंट इंटरफेस मेथड कॉल कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Itab caching", "Direct call optimization", "Method table lookup", "All of the above"],
        "options_hi": ["Itab कैशिंग", "डायरेक्ट कॉल ऑप्टिमाइज़ेशन", "मेथड टेबल लुकअप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the difference between sync.RWMutex and reader-preference locks?",
        "question_hi": "sync.RWMutex और रीडर-प्रेफरेंस लॉक में क्या अंतर है?",
        "options_en": ["sync.RWMutex is writer-preference", "Different starvation characteristics", "Implementation complexity", "All of the above"],
        "options_hi": ["sync.RWMutex राइटर-प्रेफरेंस है", "अलग-अलग स्टार्वेशन कैरेक्टरिस्टिक", "इम्प्लीमेंटेशन कॉम्प्लेक्सिटी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How does Go's runtime handle memory span management?",
        "question_hi": "Go का रनटाइम मेमोरी स्पैन मैनेजमेंट कैसे हैंडल करता है?",
        "options_en": ["Page-sized memory blocks", "Size-class organization", "Free list management", "All of the above"],
        "options_hi": ["पेज-साइज्ड मेमोरी ब्लॉक", "साइज-क्लास ऑर्गनाइज़ेशन", "फ्री लिस्ट मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of 'runtime.gcAssistAlloc' and allocation assistance?",
        "question_hi": "'runtime.gcAssistAlloc' और अलोकेशन असिस्टेंस का उद्देश्य क्या है?",
        "options_en": ["Help GC during allocation", "Prevent heap growth", "Balance allocation and GC work", "All of the above"],
        "options_hi": ["अलोकेशन के दौरान GC की मदद करना", "हीप ग्रोथ रोकना", "अलोकेशन और GC वर्क बैलेंस करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How does Go implement efficient zero-sized type handling?",
        "question_hi": "Go एफिशिएंट जीरो-साइज्ड टाइप हैंडलिंग कैसे इम्प्लीमेंट करता है?",
        "options_en": ["No memory allocation", "Special case handling", "Compiler optimizations", "All of the above"],
        "options_hi": ["कोई मेमोरी अलोकेशन नहीं", "स्पेशल केस हैंडलिंग", "कंपाइलर ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
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