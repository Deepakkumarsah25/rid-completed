const questions = [
    {
           "num": 1,
        "question_en": "What is the purpose of the 'runtime.funcsp' in Go's stack trace handling?",
        "question_hi": "Go के स्टैक ट्रेस हैंडलिंग में 'runtime.funcsp' का उद्देश्य क्या है?",
        "options_en": ["Get function stack pointer", "Track call stack depth", "Handle stack unwinding", "All of the above"],
        "options_hi": ["फंक्शन स्टैक पॉइंटर प्राप्त करना", "कॉल स्टैक डेप्थ ट्रैक करना", "स्टैक अनवाइंडिंग हैंडल करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How does Go's compiler implement dead code elimination in SSA form?",
        "question_hi": "Go का कंपाइलर SSA फॉर्म में डेड कोड एलिमिनेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Remove unreachable code", "Eliminate unused variables", "Optimize control flow", "All of the above"],
        "options_hi": ["अनरीचेबल कोड रिमूव करना", "अनयूज्ड वेरिएबल एलिमिनेट करना", "कंट्रोल फ्लो ऑप्टिमाइज़ करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the role of 'runtime.casgstatus' in goroutine state transitions?",
        "question_hi": "गोरूटीन स्टेट ट्रांजिशन में 'runtime.casgstatus' की क्या भूमिका है?",
        "options_en": ["Atomic state changes", "Prevent race conditions", "Scheduler coordination", "All of the above"],
        "options_hi": ["एटॉमिक स्टेट चेंज", "रेस कंडीशन रोकना", "शेड्यूलर कोऑर्डिनेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How does Go implement efficient zero-length slice operations?",
        "question_hi": "Go जीरो-लेंथ स्लाइस ऑपरेशन को एफिशिएंटली कैसे इम्प्लीमेंट करता है?",
        "options_en": ["No allocation needed", "Shared empty slice", "Compiler optimizations", "All of the above"],
        "options_hi": ["कोई अलोकेशन जरूरी नहीं", "शेयर्ड एम्प्टी स्लाइस", "कंपाइलर ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of 'runtime.mSpanList' in memory management?",
        "question_hi": "मेमोरी मैनेजमेंट में 'runtime.mSpanList' का उद्देश्य क्या है?",
        "options_en": ["Manage memory spans", "Track free memory blocks", "Handle span allocation", "All of the above"],
        "options_hi": ["मेमोरी स्पैन मैनेज करना", "फ्री मेमोरी ब्लॉक ट्रैक करना", "स्पैन अलोकेशन हैंडल करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How does Go's runtime handle CPU profile sampling rate?",
        "question_hi": "Go का रनटाइम CPU प्रोफाइल सैंपलिंग रेट कैसे हैंडल करता है?",
        "options_en": ["Configurable sampling frequency", "Balance detail vs overhead", "Signal-based profiling", "All of the above"],
        "options_hi": ["कॉन्फिगरेबल सैंपलिंग फ्रिक्वेंसी", "डिटेल vs ओवरहेड बैलेंस", "सिग्नल-बेस्ड प्रोफाइलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the difference between 'runtime.newstack' and stack growth?",
        "question_hi": "'runtime.newstack' और स्टैक ग्रोथ में क्या अंतर है?",
        "options_en": ["newstack handles overflow", "Growth manages capacity", "Different trigger conditions", "All of the above"],
        "options_hi": ["newstack ओवरफ्लो हैंडल करता है", "ग्रोथ कैपेसिटी मैनेज करती है", "अलग-अलग ट्रिगर कंडीशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How does Go implement efficient map iteration with fastrand?",
        "question_hi": "Go fastrand के साथ एफिशिएंट मैप इटरेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Random iteration start", "Prevent predictable patterns", "Hash seed randomization", "All of the above"],
        "options_hi": ["रैंडम इटरेशन स्टार्ट", "प्रिडिक्टेबल पैटर्न रोकना", "हैश सीड रैंडमाइजेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of 'runtime.getcallerpc' in debugging?",
        "question_hi": "डिबगिंग में 'runtime.getcallerpc' का उद्देश्य क्या है?",
        "options_en": ["Get caller program counter", "Stack trace generation", "Debug information", "All of the above"],
        "options_hi": ["कॉलर प्रोग्राम काउंटर प्राप्त करना", "स्टैक ट्रेस जनरेशन", "डिबग इनफार्मेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How does Go's GC handle scannable and non-scannable objects?",
        "question_hi": "Go का GC स्कैनेबल और नॉन-स्कैनेबल ऑब्जेक्ट को कैसे हैंडल करता है?",
        "options_en": ["Different marking strategies", "Pointer tracking", "Memory optimization", "All of the above"],
        "options_hi": ["अलग-अलग मार्किंग स्ट्रैटेजी", "पॉइंटर ट्रैकिंग", "मेमोरी ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the role of 'runtime.notesleep' in synchronization?",
        "question_hi": "सिंक्रोनाइज़ेशन में 'runtime.notesleep' की क्या भूमिका है?",
        "options_en": ["Efficient thread parking", "Low-level synchronization", "OS primitive integration", "All of the above"],
        "options_hi": ["एफिशिएंट थ्रेड पार्किंग", "लो-लेवल सिंक्रोनाइज़ेशन", "OS प्रिमिटिव इंटीग्रेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How does Go implement efficient interface method caching?",
        "question_hi": "Go एफिशिएंट इंटरफेस मेथड कैशिंग कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Itab reuse", "Method table caching", "Type-specific optimization", "All of the above"],
        "options_hi": ["Itab रीयूज", "मेथड टेबल कैशिंग", "टाइप-स्पेसिफिक ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of 'runtime.mcache' in allocation fast path?",
        "question_hi": "अलोकेशन फास्ट पाथ में 'runtime.mcache' का उद्देश्य क्या है?",
        "options_en": ["Per-P allocation cache", "Reduce lock contention", "Fast object allocation", "All of the above"],
        "options_hi": ["प्रति-P अलोकेशन कैश", "लॉक कॉन्टेंशन कम करना", "फास्ट ऑब्जेक्ट अलोकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How does Go's runtime handle signal stack for recovery?",
        "question_hi": "Go का रनटाइम रिकवरी के लिए सिग्नल स्टैक कैसे हैंडल करता है?",
        "options_en": ["Separate signal stack", "Handle stack overflow", "Recovery mechanism", "All of the above"],
        "options_hi": ["अलग सिग्नल स्टैक", "स्टैक ओवरफ्लो हैंडल करना", "रिकवरी मैकेनिज्म", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the difference between 'runtime.convT2Enoptr' and regular conversion?",
        "question_hi": "'runtime.convT2Enoptr' और रेगुलर कन्वर्जन में क्या अंतर है?",
        "options_en": ["Optimized for no pointers", "Avoid write barriers", "Faster conversion", "All of the above"],
        "options_hi": ["नो पॉइंटर के लिए ऑप्टिमाइज़्ड", "राइट बैरियर से बचना", "फास्टर कन्वर्जन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How does Go implement efficient range over array pointers?",
        "question_hi": "Go ऐरे पॉइंटर पर एफिशिएंट रेंज कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Pointer dereference optimization", "Bounds check elimination", "Loop optimization", "All of the above"],
        "options_hi": ["पॉइंटर डेरिफरेंस ऑप्टिमाइज़ेशन", "बाउंड्स चेक एलिमिनेशन", "लूप ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of 'runtime.gcMarkWorkerMode' in GC phases?",
        "question_hi": "GC फेज में 'runtime.gcMarkWorkerMode' का उद्देश्य क्या है?",
        "options_en": ["Control marking behavior", "Worker coordination", "Phase management", "All of the above"],
        "options_hi": ["मार्किंग बिहेवियर कंट्रोल करना", "वर्कर कोऑर्डिनेशन", "फेज मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How does Go's compiler implement constant propagation?",
        "question_hi": "Go का कंपाइलर कॉन्स्टेंट प्रोपेगेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Replace variables with constants", "Optimize expressions", "Reduce runtime computation", "All of the above"],
        "options_hi": ["वेरिएबल को कॉन्स्टेंट से रिप्लेस करना", "एक्सप्रेशन ऑप्टिमाइज़ करना", "रनटाइम कम्प्यूटेशन कम करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the role of 'runtime.sigprof' in profiling?",
        "question_hi": "प्रोफाइलिंग में 'runtime.sigprof' की क्या भूमिका है?",
        "options_en": ["Handle profiling signals", "Stack trace collection", "Performance data", "All of the above"],
        "options_hi": ["प्रोफाइलिंग सिग्नल हैंडल करना", "स्टैक ट्रेस कलेक्शन", "परफॉर्मेंस डेटा", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How does Go implement efficient string to []byte conversion without copy?",
        "question_hi": "Go कॉपी के बिना स्ट्रिंग से []byte कन्वर्जन को एफिशिएंटली कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Unsafe pointer conversion", "Memory sharing", "Compiler optimizations", "All of the above"],
        "options_hi": ["अनसेफ पॉइंटर कन्वर्जन", "मेमोरी शेयरिंग", "कंपाइलर ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of 'runtime.stackfree' in stack management?",
        "question_hi": "स्टैक मैनेजमेंट में 'runtime.stackfree' का उद्देश्य क्या है?",
        "options_en": ["Free unused stack memory", "Memory reclamation", "Stack pool management", "All of the above"],
        "options_hi": ["अनयूज्ड स्टैक मेमोरी फ्री करना", "मेमोरी रिक्लेमेशन", "स्टैक पूल मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How does Go's runtime handle timer bucket management?",
        "question_hi": "Go का रनटाइम टाइमर बकेट मैनेजमेंट कैसे हैंडल करता है?",
        "options_en": ["Per-P timer heaps", "Efficient timer operations", "Timeout management", "All of the above"],
        "options_hi": ["प्रति-P टाइमर हीप", "एफिशिएंट टाइमर ऑपरेशन", "टाइमआउट मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the difference between 'runtime.getg' and 'runtime.getm'?",
        "question_hi": "'runtime.getg' और 'runtime.getm' में क्या अंतर है?",
        "options_en": ["getg gets goroutine", "getm gets machine", "Different abstraction levels", "All of the above"],
        "options_hi": ["getg गोरूटीन प्राप्त करता है", "getm मशीन प्राप्त करता है", "अलग-अलग एब्स्ट्रैक्शन लेवल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How does Go implement efficient map access with hash bits?",
        "question_hi": "Go हैश बिट्स के साथ एफिशिएंट मैप एक्सेस कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Fast hash comparison", "Bucket selection", "Collision handling", "All of the above"],
        "options_hi": ["फास्ट हैश कम्पेयरिजन", "बकेट सिलेक्शन", "कॉलिजन हैंडलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of 'runtime.usleep' in scheduling?",
        "question_hi": "शेड्यूलिंग में 'runtime.usleep' का उद्देश्य क्या है?",
        "options_en": ["Microsecond sleep", "Cooperative yielding", "Reduce CPU spinning", "All of the above"],
        "options_hi": ["माइक्रोसेकंड स्लीप", "कोऑपरेटिव यील्डिंग", "CPU स्पिनिंग कम करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How does Go's GC handle pointer bitmap for scanning?",
        "question_hi": "Go का GC स्कैनिंग के लिए पॉइंटर बिटमैप कैसे हैंडल करता है?",
        "options_en": ["Track pointer locations", "Efficient scanning", "Memory layout information", "All of the above"],
        "options_hi": ["पॉइंटर लोकेशन ट्रैक करना", "एफिशिएंट स्कैनिंग", "मेमोरी लेआउट इनफार्मेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the role of 'runtime.addfinalizer' in object lifecycle?",
        "question_hi": "ऑब्जेक्ट लाइफसाइकल में 'runtime.addfinalizer' की क्या भूमिका है?",
        "options_en": ["Register finalizer callbacks", "Resource cleanup", "GC coordination", "All of the above"],
        "options_hi": ["फाइनलाइज़र कॉलबैक रजिस्टर करना", "रिसोर्स क्लीनअप", "GC कोऑर्डिनेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How does Go implement efficient slice append growth factor?",
        "question_hi": "Go स्लाइस ऐपेंड ग्रोथ फैक्टर को एफिशिएंटली कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Exponential growth", "Balance allocation vs copy", "Capacity calculation", "All of the above"],
        "options_hi": ["एक्सपोनेंशियल ग्रोथ", "अलोकेशन vs कॉपी बैलेंस", "कैपेसिटी कैलकुलेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of 'runtime.gopark' in goroutine parking?",
        "question_hi": "गोरूटीन पार्किंग में 'runtime.gopark' का उद्देश्य क्या है?",
        "options_en": ["Park goroutine", "Wait for wakeup", "Scheduler integration", "All of the above"],
        "options_hi": ["गोरूटीन पार्क करना", "वेकअप का इंतज़ार", "शेड्यूलर इंटीग्रेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How does Go's runtime handle memory statistics with 'runtime.MemStats'?",
        "question_hi": "Go का रनटाइम 'runtime.MemStats' के साथ मेमोरी स्टैटिस्टिक्स कैसे हैंडल करता है?",
        "options_en": ["Track allocation metrics", "GC statistics", "Heap information", "All of the above"],
        "options_hi": ["अलोकेशन मेट्रिक्स ट्रैक करना", "GC स्टैटिस्टिक्स", "हीप इनफार्मेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the difference between 'runtime.newobject' and 'runtime.mallocgc'?",
        "question_hi": "'runtime.newobject' और 'runtime.mallocgc' में क्या अंतर है?",
        "options_en": ["newobject for specific types", "mallocgc general allocation", "Different use cases", "All of the above"],
        "options_hi": ["स्पेसिफिक टाइप के लिए newobject", "mallocgc जनरल अलोकेशन", "अलग-अलग यूज केस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How does Go implement efficient channel select with 'selgen'?",
        "question_hi": "Go 'selgen' के साथ एफिशिएंट चैनल select कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Generate selection code", "Optimize case ordering", "Reduce overhead", "All of the above"],
        "options_hi": ["सिलेक्शन कोड जनरेट करना", "केस ऑर्डरिंग ऑप्टिमाइज़ करना", "ओवरहेड कम करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of 'runtime.funcdata' in function metadata?",
        "question_hi": "फंक्शन मेटाडेटा में 'runtime.funcdata' का उद्देश्य क्या है?",
        "options_en": ["Store function information", "Debug data", "Stack maps", "All of the above"],
        "options_hi": ["फंक्शन इनफार्मेशन स्टोर करना", "डिबग डेटा", "स्टैक मैप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How does Go's compiler implement common subexpression elimination?",
        "question_hi": "Go का कंपाइलर कॉमन सबएक्सप्रेशन एलिमिनेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Identify duplicate expressions", "Compute once reuse results", "Optimize computation", "All of the above"],
        "options_hi": ["डुप्लिकेट एक्सप्रेशन आइडेंटिफाई करना", "एक बार कम्प्यूट करना रिजल्ट रीयूज करना", "कम्प्यूटेशन ऑप्टिमाइज़ करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the role of 'runtime.sigignore' in signal handling?",
        "question_hi": "सिग्नल हैंडलिंग में 'runtime.sigignore' की क्या भूमिका है?",
        "options_en": ["Ignore specific signals", "Signal management", "Prevent interference", "All of the above"],
        "options_hi": ["स्पेसिफिक सिग्नल इग्नोर करना", "सिग्नल मैनेजमेंट", "इंटरफेरेंस रोकना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How does Go implement efficient interface conversion with 'eface'?",
        "question_hi": "Go 'eface' के साथ एफिशिएंट इंटरफेस कन्वर्जन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Empty interface representation", "Type and data fields", "Fast conversion", "All of the above"],
        "options_hi": ["एम्प्टी इंटरफेस रिप्रेजेंटेशन", "टाइप और डेटा फील्ड", "फास्ट कन्वर्जन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of 'runtime.mProf' in memory profiling?",
        "question_hi": "मेमोरी प्रोफाइलिंग में 'runtime.mProf' का उद्देश्य क्या है?",
        "options_en": ["Memory profile data", "Allocation tracking", "Profile generation", "All of the above"],
        "options_hi": ["मेमोरी प्रोफाइल डेटा", "अलोकेशन ट्रैकिंग", "प्रोफाइल जनरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How does Go's runtime handle 'runtime.netpoll' for network I/O?",
        "question_hi": "Go का रनटाइम नेटवर्क I/O के लिए 'runtime.netpoll' कैसे हैंडल करता है?",
        "options_en": ["Network event polling", "I/O readiness", "Goroutine wakeup", "All of the above"],
        "options_hi": ["नेटवर्क इवेंट पोलिंग", "I/O रेडीनेस", "गोरूटीन वेकअप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the difference between 'runtime.gcStart' and GC trigger?",
        "question_hi": "'runtime.gcStart' और GC ट्रिगर में क्या अंतर है?",
        "options_en": ["gcStart initiates GC", "Trigger decides when", "Different responsibilities", "All of the above"],
        "options_hi": ["gcStart GC शुरू करता है", "ट्रिगर तय करता है कब", "अलग-अलग जिम्मेदारियां", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How does Go implement efficient map assignment with 'mapassign'?",
        "question_hi": "Go 'mapassign' के साथ एफिशिएंट मैप असाइनमेंट कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Key lookup and insertion", "Bucket management", "Growth handling", "All of the above"],
        "options_hi": ["की लुकअप और इंसर्शन", "बकेट मैनेजमेंट", "ग्रोथ हैंडलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of 'runtime.writeBarrier' in garbage collection?",
        "question_hi": "गार्बेज कलेक्शन में 'runtime.writeBarrier' का उद्देश्य क्या है?",
        "options_en": ["Track pointer writes", "Prevent memory leaks", "Enable concurrent GC", "All of the above"],
        "options_hi": ["पॉइंटर राइट्स ट्रैक करना", "मेमोरी लीक्स रोकना", "कंकरंट GC एनेबल करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How does Go implement efficient defer statement handling?",
        "question_hi": "Go एफिशिएंट defer स्टेटमेंट हैंडलिंग कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Defer pool reuse", "Stack allocation", "Compiler optimizations", "All of the above"],
        "options_hi": ["Defer पूल रीयूज", "स्टैक अलोकेशन", "कंपाइलर ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the role of 'runtime.sigaction' in signal handling setup?",
        "question_hi": "सिग्नल हैंडलिंग सेटअप में 'runtime.sigaction' की क्या भूमिका है?",
        "options_en": ["Register signal handlers", "Configure signal behavior", "OS signal integration", "All of the above"],
        "options_hi": ["सिग्नल हैंडलर रजिस्टर करना", "सिग्नल बिहेवियर कॉन्फ़िगर करना", "OS सिग्नल इंटीग्रेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How does Go's runtime handle sysmon background monitoring?",
        "question_hi": "Go का रनटाइम sysmon बैकग्राउंड मॉनिटरिंग कैसे हैंडल करता है?",
        "options_en": ["Deadlock detection", "Netpoll timeout", "Retake P from syscalls", "All of the above"],
        "options_hi": ["डेडलॉक डिटेक्शन", "Netpoll टाइमआउट", "सिसकॉल से P रिटेक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of 'runtime.duffcopy' in memory operations?",
        "question_hi": "मेमोरी ऑपरेशन में 'runtime.duffcopy' का उद्देश्य क्या है?",
        "options_en": ["Efficient memory copying", "Loop unrolling optimization", "Assembly implementation", "All of the above"],
        "options_hi": ["एफिशिएंट मेमोरी कॉपीिंग", "लूप अनरोलिंग ऑप्टिमाइज़ेशन", "असेंबली इम्प्लीमेंटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How does Go implement efficient type assertions with 'assert' functions?",
        "question_hi": "Go 'assert' फंक्शन के साथ एफिशिएंट टाइप असर्शन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Direct interface comparison", "Type hash checking", "Fast path for common types", "All of the above"],
        "options_hi": ["डायरेक्ट इंटरफेस कम्पेयरिजन", "टाइप हैश चेकिंग", "कॉमन टाइप के लिए फास्ट पाथ", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the role of 'runtime.mcentral' in span management?",
        "question_hi": "स्पैन मैनेजमेंट में 'runtime.mcentral' की क्या भूमिका है?",
        "options_en": ["Central span cache", "Global span allocation", "Span redistribution", "All of the above"],
        "options_hi": ["सेंट्रल स्पैन कैश", "ग्लोबल स्पैन अलोकेशन", "स्पैन रिडिस्ट्रीब्यूशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How does Go's compiler implement escape analysis for stack allocation?",
        "question_hi": "Go का कंपाइलर स्टैक अलोकेशन के लिए एस्केप एनालिसिस कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Determine variable lifetime", "Identify escaping pointers", "Optimize allocation placement", "All of the above"],
        "options_hi": ["वेरिएबल लाइफटाइम डिटरमाइन करना", "एस्केपिंग पॉइंटर आइडेंटिफाई करना", "अलोकेशन प्लेसमेंट ऑप्टिमाइज़ करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of 'runtime.gcBgMarkWorker' in concurrent marking?",
        "question_hi": "कंकरंट मार्किंग में 'runtime.gcBgMarkWorker' का उद्देश्य क्या है?",
        "options_en": ["Background marking goroutines", "Parallel mark execution", "GC throughput optimization", "All of the above"],
        "options_hi": ["बैकग्राउंड मार्किंग गोरूटीन", "पैरेलल मार्क एक्सीक्यूशन", "GC थ्रूपुट ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How does Go implement efficient slice bounds check elimination?",
        "question_hi": "Go स्लाइस बाउंड्स चेक एलिमिनेशन को एफिशिएंटली कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Prove bounds safety", "Remove redundant checks", "Compiler proof analysis", "All of the above"],
        "options_hi": ["बाउंड्स सेफ्टी प्रूव करना", "रिडंडेंट चेक्स रिमूव करना", "कंपाइलर प्रूफ एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the role of 'runtime.semasleep' in synchronization primitives?",
        "question_hi": "सिंक्रोनाइज़ेशन प्रिमिटिव्स में 'runtime.semasleep' की क्या भूमिका है?",
        "options_en": ["OS thread sleeping", "Semaphore operations", "Efficient waiting", "All of the above"],
        "options_hi": ["OS थ्रेड स्लीपिंग", "सेमाफोर ऑपरेशन", "एफिशिएंट वेटिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How does Go's runtime handle 'runtime.gcStopTheWorld' for GC safepoints?",
        "question_hi": "Go का रनटाइम GC सेफपॉइंट के लिए 'runtime.gcStopTheWorld' कैसे हैंडल करता है?",
        "options_en": ["Pause all goroutines", "Ensure memory consistency", "GC phase transition", "All of the above"],
        "options_hi": ["सभी गोरूटीन पॉज करना", "मेमोरी कंसिस्टेंसी एन्श्योर करना", "GC फेज ट्रांजिशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of 'runtime.memclrNoHeapPointers' in memory initialization?",
        "question_hi": "मेमोरी इनिशियलाइज़ेशन में 'runtime.memclrNoHeapPointers' का उद्देश्य क्या है?",
        "options_en": ["Fast memory zeroing", "Skip write barriers", "Optimize initialization", "All of the above"],
        "options_hi": ["फास्ट मेमोरी जीरोइंग", "राइट बैरियर स्किप करना", "इनिशियलाइज़ेशन ऑप्टिमाइज़ करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How does Go implement efficient channel operations with 'chansend' and 'chanrecv'?",
        "question_hi": "Go 'chansend' और 'chanrecv' के साथ एफिशिएंट चैनल ऑपरेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Direct goroutine transfer", "Bypass locking when possible", "Optimize common cases", "All of the above"],
        "options_hi": ["डायरेक्ट गोरूटीन ट्रांसफर", "जब संभव हो लॉकिंग बायपास करना", "कॉमन केस ऑप्टिमाइज़ करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the role of 'runtime.settype_flush' in type system management?",
        "question_hi": "टाइप सिस्टम मैनेजमेंट में 'runtime.settype_flush' की क्या भूमिका है?",
        "options_en": ["Update type information", "Memory barrier for types", "Ensure type consistency", "All of the above"],
        "options_hi": ["टाइप इनफार्मेशन अपडेट करना", "टाइप के लिए मेमोरी बैरियर", "टाइप कंसिस्टेंसी एन्श्योर करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How does Go's runtime handle 'runtime.wakep' for M wakeup coordination?",
        "question_hi": "Go का रनटाइम M वेकअप कोऑर्डिनेशन के लिए 'runtime.wakep' कैसे हैंडल करता है?",
        "options_en": ["Wake idle M threads", "Load balancing", "Processor utilization", "All of the above"],
        "options_hi": ["आइडल M थ्रेड वेक करना", "लोड बैलेंसिंग", "प्रोसेसर यूटिलाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of 'runtime.heapBits' in GC bitmap management?",
        "question_hi": "GC बिटमैप मैनेजमेंट में 'runtime.heapBits' का उद्देश्य क्या है?",
        "options_en": ["Track object boundaries", "Mark live objects", "Pointer bitmap operations", "All of the above"],
        "options_hi": ["ऑब्जेक्ट बाउंड्री ट्रैक करना", "लाइव ऑब्जेक्ट मार्क करना", "पॉइंटर बिटमैप ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How does Go implement efficient string concatenation with 'concatstrings'?",
        "question_hi": "Go 'concatstrings' के साथ एफिशिएंट स्ट्रिंग कॉन्कटीनेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Buffer pre-calculation", "Single allocation", "Copy optimization", "All of the above"],
        "options_hi": ["बफर प्री-कैलकुलेशन", "सिंगल अलोकेशन", "कॉपी ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the role of 'runtime.cgocallback' in CGO interoperability?",
        "question_hi": "CGO इंटरऑपरेबिलिटी में 'runtime.cgocallback' की क्या भूमिका है?",
        "options_en": ["C to Go call transitions", "Stack switching", "Goroutine scheduling", "All of the above"],
        "options_hi": ["C से Go कॉल ट्रांजिशन", "स्टैक स्विचिंग", "गोरूटीन शेड्यूलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How does Go's runtime handle 'runtime.panic' and recovery mechanism?",
        "question_hi": "Go का रनटाइम 'runtime.panic' और रिकवरी मैकेनिज्म कैसे हैंडल करता है?",
        "options_en": ["Stack unwinding", "Deferred function execution", "Recover point identification", "All of the above"],
        "options_hi": ["स्टैक अनवाइंडिंग", "डिफर्ड फंक्शन एक्सीक्यूशन", "रिकवर पॉइंट आइडेंटिफिकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of 'runtime.spanOf' in memory management?",
        "question_hi": "मेमोरी मैनेजमेंट में 'runtime.spanOf' का उद्देश्य क्या है?",
        "options_en": ["Find span for address", "Memory region lookup", "Span metadata access", "All of the above"],
        "options_hi": ["एड्रेस के लिए स्पैन ढूंढना", "मेमोरी रीजन लुकअप", "स्पैन मेटाडेटा एक्सेस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How does Go implement efficient goroutine creation with 'newproc'?",
        "question_hi": "Go 'newproc' के साथ एफिशिएंट गोरूटीन क्रिएशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Stack allocation", "Initialization optimization", "Scheduler integration", "All of the above"],
        "options_hi": ["स्टैक अलोकेशन", "इनिशियलाइज़ेशन ऑप्टिमाइज़ेशन", "शेड्यूलर इंटीग्रेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the role of 'runtime.memmove' in slice operations?",
        "question_hi": "स्लाइस ऑपरेशन में 'runtime.memmove' की क्या भूमिका है?",
        "options_en": ["Efficient memory copying", "Overlap handling", "Assembly optimization", "All of the above"],
        "options_hi": ["एफिशिएंट मेमोरी कॉपीिंग", "ओवरलैप हैंडलिंग", "असेंबली ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How does Go's runtime handle 'runtime.gcSweep' for memory reclamation?",
        "question_hi": "Go का रनटाइम मेमोरी रिक्लेमेशन के लिए 'runtime.gcSweep' कैसे हैंडल करता है?",
        "options_en": ["Free unused spans", "Sweep phase execution", "Memory reuse preparation", "All of the above"],
        "options_hi": ["अनयूज्ड स्पैन फ्री करना", "स्वीप फेज एक्सीक्यूशन", "मेमोरी रीयूज प्रिपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of 'runtime.typedmemmove' in type-safe memory operations?",
        "question_hi": "टाइप-सेफ मेमोरी ऑपरेशन में 'runtime.typedmemmove' का उद्देश्य क्या है?",
        "options_en": ["Type-aware copying", "Write barrier execution", "Memory consistency", "All of the above"],
        "options_hi": ["टाइप-अवेयर कॉपीिंग", "राइट बैरियर एक्सीक्यूशन", "मेमोरी कंसिस्टेंसी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How does Go implement efficient map iteration order randomization?",
        "question_hi": "Go मैप इटरेशन ऑर्डर रैंडमाइजेशन को एफिशिएंटली कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Hash seed variation", "Start bucket randomization", "Iteration state mixing", "All of the above"],
        "options_hi": ["हैश सीड वेरिएशन", "स्टार्ट बकेट रैंडमाइजेशन", "इटरेशन स्टेट मिक्सिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the role of 'runtime.gcMarkRoot' in GC root scanning?",
        "question_hi": "GC रूट स्कैनिंग में 'runtime.gcMarkRoot' की क्या भूमिका है?",
        "options_en": ["Global variable scanning", "Stack root marking", "Register-based roots", "All of the above"],
        "options_hi": ["ग्लोबल वेरिएबल स्कैनिंग", "स्टैक रूट मार्किंग", "रजिस्टर-बेस्ड रूट्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How does Go's compiler implement nil pointer check elimination?",
        "question_hi": "Go का कंपाइलर nil पॉइंटर चेक एलिमिनेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Prove non-nil values", "Remove redundant checks", "Flow analysis optimization", "All of the above"],
        "options_hi": ["नॉन-निल वैल्यू प्रूव करना", "रिडंडेंट चेक्स रिमूव करना", "फ्लो एनालिसिस ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of 'runtime.netpollBreak' in I/O polling?",
        "question_hi": "I/O पोलिंग में 'runtime.netpollBreak' का उद्देश्य क्या है?",
        "options_en": ["Interrupt polling", "Force wakeup", "Timeout handling", "All of the above"],
        "options_hi": ["पोलिंग इंटरप्ट करना", "फोर्स वेकअप", "टाइमआउट हैंडलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
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
        "num": 71,
        "question_en": "What is the role of 'runtime.gcAssistAlloc' in allocation pacing?",
        "question_hi": "अलोकेशन पेसिंग में 'runtime.gcAssistAlloc' की क्या भूमिका है?",
        "options_en": ["GC assist mechanism", "Prevent heap explosion", "Balance allocation cost", "All of the above"],
        "options_hi": ["GC असिस्ट मैकेनिज्म", "हीप एक्सप्लोजन रोकना", "अलोकेशन कॉस्ट बैलेंस करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How does Go's runtime handle 'runtime.ready' for goroutine wakeup?",
        "question_hi": "Go का रनटाइम गोरूटीन वेकअप के लिए 'runtime.ready' कैसे हैंडल करता है?",
        "options_en": ["Mark goroutine runnable", "Scheduler queue insertion", "Processor wakeup", "All of the above"],
        "options_hi": ["गोरूटीन रनेबल मार्क करना", "शेड्यूलर क्यू इंसर्शन", "प्रोसेसर वेकअप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of 'runtime.spanOfUnchecked' in fast path lookups?",
        "question_hi": "फास्ट पाथ लुकअप में 'runtime.spanOfUnchecked' का उद्देश्य क्या है?",
        "options_en": ["Bypass safety checks", "Performance optimization", "Internal use only", "All of the above"],
        "options_hi": ["सेफ्टी चेक बायपास करना", "परफॉर्मेंस ऑप्टिमाइज़ेशन", "इंटरनल यूज ओनली", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How does Go implement efficient small object allocation?",
        "question_hi": "Go एफिशिएंट स्मॉल ऑब्जेक्ट अलोकेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Size class optimization", "mcache fast path", "Bump pointer allocation", "All of the above"],
        "options_hi": ["साइज क्लास ऑप्टिमाइज़ेशन", "mcache फास्ट पाथ", "बम्प पॉइंटर अलोकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the role of 'runtime.gcDrain' in marking phase?",
        "question_hi": "मार्किंग फेज में 'runtime.gcDrain' की क्या भूमिका है?",
        "options_en": ["Process mark work", "Drain mark queues", "Mark termination", "All of the above"],
        "options_hi": ["मार्क वर्क प्रोसेस करना", "मार्क क्यू ड्रेन करना", "मार्क टर्मिनेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How does Go's runtime handle 'runtime.osyield' in scheduling?",
        "question_hi": "शेड्यूलिंग में 'runtime.osyield' कैसे हैंडल करता है?",
        "options_en": ["Cooperative yielding", "OS thread yield", "Prevent busy waiting", "All of the above"],
        "options_hi": ["कोऑपरेटिव यील्डिंग", "OS थ्रेड यील्ड", "बिजी वेटिंग रोकना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of 'runtime.heapLive' in GC triggering?",
        "question_hi": "GC ट्रिगरिंग में 'runtime.heapLive' का उद्देश्य क्या है?",
        "options_en": ["Track live heap size", "GC trigger calculation", "Memory pressure detection", "All of the above"],
        "options_hi": ["लाइव हीप साइज ट्रैक करना", "GC ट्रिगर कैलकुलेशन", "मेमोरी प्रेशर डिटेक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How does Go implement efficient closure variable capture?",
        "question_hi": "Go एफिशिएंट क्लोजर वेरिएबल कैप्चर कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Stack allocation", "Escape analysis", "Pointer conversion", "All of the above"],
        "options_hi": ["स्टैक अलोकेशन", "एस्केप एनालिसिस", "पॉइंटर कन्वर्जन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the role of 'runtime.gcStart' in GC cycle initiation?",
        "question_hi": "GC साइकल इनिशिएशन में 'runtime.gcStart' की क्या भूमिका है?",
        "options_en": ["Start GC cycle", "Phase transition", "World stopping", "All of the above"],
        "options_hi": ["GC साइकल स्टार्ट करना", "फेज ट्रांजिशन", "वर्ल्ड स्टॉपिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How does Go's runtime handle 'runtime.malloc' for CGO interop?",
        "question_hi": "Go का रनटाइम CGO इंटरऑप के लिए 'runtime.malloc' कैसे हैंडल करता है?",
        "options_en": ["C-compatible allocation", "Manual memory management", "FFI integration", "All of the above"],
        "options_hi": ["C-कंपेटिबल अलोकेशन", "मैन्युअल मेमोरी मैनेजमेंट", "FFI इंटीग्रेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of 'runtime.gcController' in GC pacing?",
        "question_hi": "GC पेसिंग में 'runtime.gcController' का उद्देश्य क्या है?",
        "options_en": ["GC rate control", "Heap growth management", "CPU utilization balancing", "All of the above"],
        "options_hi": ["GC रेट कंट्रोल", "हीप ग्रोथ मैनेजमेंट", "CPU यूटिलाइज़ेशन बैलेंसिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How does Go implement efficient runtime type comparisons?",
        "question_hi": "Go एफिशिएंट रनटाइम टाइप कम्पेयरिजन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Type pointer comparison", "Hash-based checking", "Cache optimization", "All of the above"],
        "options_hi": ["टाइप पॉइंटर कम्पेयरिजन", "हैश-बेस्ड चेकिंग", "कैश ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the role of 'runtime.sigfwd' in signal forwarding?",
        "question_hi": "सिग्नल फॉरवर्डिंग में 'runtime.sigfwd' की क्या भूमिका है?",
        "options_en": ["Forward signals to OS", "Signal chain handling", "External handler integration", "All of the above"],
        "options_hi": ["OS को सिग्नल फॉरवर्ड करना", "सिग्नल चेन हैंडलिंग", "एक्सटर्नल हैंडलर इंटीग्रेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How does Go's runtime handle 'runtime.gentraceback' for debugging?",
        "question_hi": "डिबगिंग के लिए 'runtime.gentraceback' कैसे हैंडल करता है?",
        "options_en": ["Stack trace generation", "PC/SP unwinding", "Debug information", "All of the above"],
        "options_hi": ["स्टैक ट्रेस जनरेशन", "PC/SP अनवाइंडिंग", "डिबग इनफार्मेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of 'runtime.spanalloc' in span management?",
        "question_hi": "स्पैन मैनेजमेंट में 'runtime.spanalloc' का उद्देश्य क्या है?",
        "options_en": ["Span allocation", "Cache management", "Memory initialization", "All of the above"],
        "options_hi": ["स्पैन अलोकेशन", "कैश मैनेजमेंट", "मेमोरी इनिशियलाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How does Go implement efficient channel close operations?",
        "question_hi": "Go एफिशिएंट चैनल क्लोज ऑपरेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Wake all waiting goroutines", "Set closed state", "Memory barrier", "All of the above"],
        "options_hi": ["सभी वेटिंग गोरूटीन वेक करना", "क्लोज्ड स्टेट सेट करना", "मेमोरी बैरियर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the role of 'runtime.gcSweepBuf' in sweep phase?",
        "question_hi": "स्वीप फेज में 'runtime.gcSweepBuf' की क्या भूमिका है?",
        "options_en": ["Sweep work buffering", "Parallel sweep coordination", "Span queuing", "All of the above"],
        "options_hi": ["स्वीप वर्क बफरिंग", "पैरेलल स्वीप कोऑर्डिनेशन", "स्पैन क्यूइंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How does Go's runtime handle 'runtime.asmcgocall' for assembly CGO?",
        "question_hi": "Go का रनटाइम असेंबली CGO के लिए 'runtime.asmcgocall' कैसे हैंडल करता है?",
        "options_en": ["Assembly C call setup", "Stack switching", "Goroutine context", "All of the above"],
        "options_hi": ["असेंबली C कॉल सेटअप", "स्टैक स्विचिंग", "गोरूटीन कॉन्टेक्स्ट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of 'runtime.gcMarkTinyAllocs' in small object marking?",
        "question_hi": "स्मॉल ऑब्जेक्ट मार्किंग में 'runtime.gcMarkTinyAllocs' का उद्देश्य क्या है?",
        "options_en": ["Mark tiny objects", "Optimize small allocations", "Reduce marking overhead", "All of the above"],
        "options_hi": ["टाइनी ऑब्जेक्ट मार्क करना", "स्मॉल अलोकेशन ऑप्टिमाइज़ करना", "मार्किंग ओवरहेड कम करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How does Go implement efficient runtime string comparisons?",
        "question_hi": "Go एफिशिएंट रनटाइम स्ट्रिंग कम्पेयरिजन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Length check first", "Word-sized comparisons", "Assembly optimization", "All of the above"],
        "options_hi": ["पहले लेंथ चेक", "वर्ड-साइज्ड कम्पेयरिजन", "असेंबली ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the role of 'runtime.sigaltstack' in signal handling?",
        "question_hi": "सिग्नल हैंडलिंग में 'runtime.sigaltstack' की क्या भूमिका है?",
        "options_en": ["Alternate stack setup", "Stack overflow protection", "Signal safety", "All of the above"],
        "options_hi": ["अल्टरनेट स्टैक सेटअप", "स्टैक ओवरफ्लो प्रोटेक्शन", "सिग्नल सेफ्टी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How does Go's runtime handle 'runtime.gcResetMarkState' between cycles?",
        "question_hi": "Go का रनटाइम साइकल के बीच 'runtime.gcResetMarkState' कैसे हैंडल करता है?",
        "options_en": ["Reset mark bits", "Prepare for next GC", "Clear mark state", "All of the above"],
        "options_hi": ["मार्क बिट रीसेट करना", "अगले GC के लिए तैयार करना", "मार्क स्टेट क्लियर करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of 'runtime.heapBitsForAddr' in pointer tracking?",
        "question_hi": "पॉइंटर ट्रैकिंग में 'runtime.heapBitsForAddr' का उद्देश्य क्या है?",
        "options_en": ["Find heap bits for address", "Pointer bitmap lookup", "Object boundary detection", "All of the above"],
        "options_hi": ["एड्रेस के लिए हीप बिट ढूंढना", "पॉइंटर बिटमैप लुकअप", "ऑब्जेक्ट बाउंड्री डिटेक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How does Go implement efficient runtime slice growth?",
        "question_hi": "Go एफिशिएंट रनटाइम स्लाइस ग्रोथ कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Capacity calculation", "Memory copying", "Growth factor optimization", "All of the above"],
        "options_hi": ["कैपेसिटी कैलकुलेशन", "मेमोरी कॉपीिंग", "ग्रोथ फैक्टर ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the role of 'runtime.gcBgMarkStartWorkers' in concurrent GC?",
        "question_hi": "कंकरंट GC में 'runtime.gcBgMarkStartWorkers' की क्या भूमिका है?",
        "options_en": ["Start mark workers", "Worker pool initialization", "Parallel marking setup", "All of the above"],
        "options_hi": ["मार्क वर्कर स्टार्ट करना", "वर्कर पूल इनिशियलाइज़ेशन", "पैरेलल मार्किंग सेटअप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How does Go's runtime handle 'runtime.mProf_Free' in memory profiling?",
        "question_hi": "Go का रनटाइम मेमोरी प्रोफाइलिंग में 'runtime.mProf_Free' कैसे हैंडल करता है?",
        "options_en": ["Free profile records", "Memory cleanup", "Profile buffer management", "All of the above"],
        "options_hi": ["फ्री प्रोफाइल रिकॉर्ड", "मेमोरी क्लीनअप", "प्रोफाइल बफर मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of 'runtime.spanOfHeap' in heap management?",
        "question_hi": "हीप मैनेजमेंट में 'runtime.spanOfHeap' का उद्देश्य क्या है?",
        "options_en": ["Heap span lookup", "Address validation", "Memory region identification", "All of the above"],
        "options_hi": ["हीप स्पैन लुकअप", "एड्रेस वैलिडेशन", "मेमोरी रीजन आइडेंटिफिकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How does Go implement efficient runtime map access misses?",
        "question_hi": "Go एफिशिएंट रनटाइम मैप एक्सेस मिसेस कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Fast miss detection", "Hash collision handling", "Empty bucket checking", "All of the above"],
        "options_hi": ["फास्ट मिस डिटेक्शन", "हैश कॉलिजन हैंडलिंग", "एम्प्टी बकेट चेकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the role of 'runtime.gcMarkTermination' in GC completion?",
        "question_hi": "GC कम्प्लीशन में 'runtime.gcMarkTermination' की क्या भूमिका है?",
        "options_en": ["Finalize mark phase", "World restart", "Cycle completion", "All of the above"],
        "options_hi": ["मार्क फेज फाइनलाइज़ करना", "वर्ल्ड रीस्टार्ट", "साइकल कम्प्लीशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How does Go's runtime handle 'runtime.schedinit' during startup?",
        "question_hi": "Go का रनटाइम स्टार्टअप के दौरान 'runtime.schedinit' कैसे हैंडल करता है?",
        "options_en": ["Scheduler initialization", "P and M setup", "Runtime bootstrap", "All of the above"],
        "options_hi": ["शेड्यूलर इनिशियलाइज़ेशन", "P और M सेटअप", "रनटाइम बूटस्ट्रैप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    }
    // ... rest of your questions array (truncated for brevity)
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