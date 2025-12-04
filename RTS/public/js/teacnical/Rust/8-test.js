const questions = [
    {
        "num": 1,
        "question_en": "What is the primary benefit of Rust's zero-cost abstractions?",
        "question_hi": "Rust के जीरो-कॉस्ट एब्स्ट्रैक्शन का प्राथमिक लाभ क्या है?",
        "options_en": ["Performance equal to hand-written code", "Easier syntax", "Automatic optimization", "Memory safety"],
        "options_hi": ["हैंड-रिटन कोड के बराबर परफॉर्मेंस", "आसान सिंटैक्स", "ऑटोमैटिक ऑप्टिमाइज़ेशन", "मेमोरी सेफ्टी"],
        "answer_en": "Performance equal to hand-written code",
        "answer_hi": "हैंड-रिटन कोड के बराबर परफॉर्मेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which Rust feature ensures thread safety without data races?",
        "question_hi": "कौन सी Rust फीचर डेटा रेस के बिना थ्रेड सेफ्टी सुनिश्चित करती है?",
        "options_en": ["Ownership system", "Borrow checker", "Both ownership and borrow checker", "Automatic locking"],
        "options_hi": ["ओनरशिप सिस्टम", "बोरो चेकर", "दोनों ओनरशिप और बोरो चेकर", "ऑटोमैटिक लॉकिंग"],
        "answer_en": "Both ownership and borrow checker",
        "answer_hi": "दोनों ओनरशिप और बोरो चेकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What does the 'dyn' keyword indicate in trait objects?",
        "question_hi": "ट्रेट ऑब्जेक्ट्स में 'dyn' कीवर्ड क्या इंडिकेट करता है?",
        "options_en": ["Dynamic dispatch", "Dynamic allocation", "Dynamic typing", "Dynamic linking"],
        "options_hi": ["डायनामिक डिस्पैच", "डायनामिक अलोकेशन", "डायनामिक टाइपिंग", "डायनामिक लिंकिंग"],
        "answer_en": "Dynamic dispatch",
        "answer_hi": "डायनामिक डिस्पैच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How does Rust handle memory management?",
        "question_hi": "Rust मेमोरी मैनेजमेंट कैसे हैंडल करता है?",
        "options_en": ["Ownership system with compile-time checks", "Garbage collection", "Reference counting", "Manual memory management"],
        "options_hi": ["कंपाइल-टाइम चेक के साथ ओनरशिप सिस्टम", "गार्बेज कलेक्शन", "रिफरेन्स काउंटिंग", "मैन्युअल मेमोरी मैनेजमेंट"],
        "answer_en": "Ownership system with compile-time checks",
        "answer_hi": "कंपाइल-टाइम चेक के साथ ओनरशिप सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of Rust's 'unsafe' keyword?",
        "question_hi": "Rust के 'unsafe' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["To bypass certain safety checks", "To mark dangerous code", "For low-level operations", "All of the above"],
        "options_hi": ["कुछ सेफ्टी चेक्स को बायपास करने के लिए", "खतरनाक कोड को मार्क करने के लिए", "लो-लेवल ऑपरेशन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which Rust data structure provides automatic memory deallocation?",
        "question_hi": "कौन सा Rust डेटा स्ट्रक्चर ऑटोमैटिक मेमोरी डीलोकेशन प्रोवाइड करता है?",
        "options_en": ["Drop trait implementation", "RAII pattern", "Smart pointers", "All of the above"],
        "options_hi": ["ड्रॉप ट्रेट इम्प्लीमेंटेशन", "RAII पैटर्न", "स्मार्ट पॉइंटर्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is Rust's approach to null pointer exceptions?",
        "question_hi": "नल पॉइंटर एक्सेप्शन के लिए Rust का एप्रोच क्या है?",
        "options_en": ["Option enum instead of null", "Compile-time null checks", "Runtime null checking", "No null pointers allowed"],
        "options_hi": ["नल के बजाय Option enum", "कंपाइल-टाइम नल चेक्स", "रनटाइम नल चेकिंग", "कोई नल पॉइंटर्स अनुमति नहीं"],
        "answer_en": "Option enum instead of null",
        "answer_hi": "नल के बजाय Option enum",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How does Rust achieve fearless concurrency?",
        "question_hi": "Rust निडर कंकरेंसी कैसे प्राप्त करता है?",
        "options_en": ["Compile-time race condition prevention", "Ownership and borrowing rules", "Type system guarantees", "All of the above"],
        "options_hi": ["कंपाइल-टाइम रेस कंडीशन प्रिवेंशन", "ओनरशिप और बोरोइंग रूल्स", "टाइप सिस्टम गारंटी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the role of Rust's trait system?",
        "question_hi": "Rust के ट्रेट सिस्टम की क्या भूमिका है?",
        "options_en": ["Define shared behavior", "Enable polymorphism", "Code reuse", "All of the above"],
        "options_hi": ["शेयर्ड बिहेवियर डिफाइन करना", "पोलीमॉर्फिज्म एनेबल करना", "कोड रीयूज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which Rust feature allows for efficient C interoperability?",
        "question_hi": "कौन सी Rust फीचर एफिशिएंट C इंटरऑपरेबिलिटी की अनुमति देती है?",
        "options_en": ["Foreign Function Interface (FFI)", "No_std environment", "Inline assembly", "All of the above"],
        "options_hi": ["फॉरेन फंक्शन इंटरफेस (FFI)", "No_std एनवायरनमेंट", "इनलाइन असेंबली", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What makes Rust suitable for embedded systems?",
        "question_hi": "Rust को एम्बेडेड सिस्टम के लिए उपयुक्त क्या बनाता है?",
        "options_en": ["No_std support", "Zero-cost abstractions", "Memory safety", "All of the above"],
        "options_hi": ["No_std सपोर्ट", "जीरो-कॉस्ट एब्स्ट्रैक्शन", "मेमोरी सेफ्टी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How does Rust handle error propagation?",
        "question_hi": "Rust एरर प्रोपगेशन कैसे हैंडल करता है?",
        "options_en": ["Result type and ? operator", "Exception handling", "Error codes", "Panic mechanism"],
        "options_hi": ["रिजल्ट टाइप और ? ऑपरेटर", "एक्सेप्शन हैंडलिंग", "एरर कोड", "पैनिक मैकेनिज्म"],
        "answer_en": "Result type and ? operator",
        "answer_hi": "रिजल्ट टाइप और ? ऑपरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is Rust's approach to metaprogramming?",
        "question_hi": "मेटाप्रोग्रामिंग के लिए Rust का एप्रोच क्या है?",
        "options_en": ["Procedural and declarative macros", "Templates", "Reflection", "Code generation"],
        "options_hi": ["प्रोसीजरल और डिक्लेरेटिव मैक्रोस", "टेम्पलेट्स", "रिफ्लेक्शन", "कोड जेनरेशन"],
        "answer_en": "Procedural and declarative macros",
        "answer_hi": "प्रोसीजरल और डिक्लेरेटिव मैक्रोस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which Rust tool manages dependencies and builds?",
        "question_hi": "कौन सा Rust टूल डिपेंडेंसी और बिल्ड्स मैनेज करता है?",
        "options_en": ["Cargo", "Rustup", "Rustc", "Clippy"],
        "options_hi": ["Cargo", "Rustup", "Rustc", "Clippy"],
        "answer_en": "Cargo",
        "answer_hi": "Cargo",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of Rust's module system?",
        "question_hi": "Rust के मॉड्यूल सिस्टम का उद्देश्य क्या है?",
        "options_en": ["Code organization", "Privacy control", "Namespace management", "All of the above"],
        "options_hi": ["कोड ऑर्गनाइज़ेशन", "प्राइवेसी कंट्रोल", "नेमस्पेस मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How does Rust ensure memory safety?",
        "question_hi": "Rust मेमोरी सेफ्टी कैसे सुनिश्चित करता है?",
        "options_en": ["Ownership system", "Borrow checker", "Lifetime tracking", "All of the above"],
        "options_hi": ["ओनरशिप सिस्टम", "बोरो चेकर", "लाइफटाइम ट्रैकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is Rust's strategy for zero-cost abstractions?",
        "question_hi": "जीरो-कॉस्ट एब्स्ट्रैक्शन के लिए Rust की स्ट्रैटेजी क्या है?",
        "options_en": ["Compile-time optimization", "Monomorphization", "Inline expansion", "All of the above"],
        "options_hi": ["कंपाइल-टाइम ऑप्टिमाइज़ेशन", "मोनोमोर्फाइज़ेशन", "इनलाइन एक्सपेंशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which Rust feature prevents use-after-free errors?",
        "question_hi": "कौन सी Rust फीचर यूज-आफ्टर-फ्री एरर को रोकती है?",
        "options_en": ["Ownership system", "Borrow checker", "Lifetime analysis", "All of the above"],
        "options_hi": ["ओनरशिप सिस्टम", "बोरो चेकर", "लाइफटाइम एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "How does Rust handle async programming?",
        "question_hi": "Rust async प्रोग्रामिंग कैसे हैंडल करता है?",
        "options_en": ["Async/await syntax", "Future trait", "Executor runtime", "All of the above"],
        "options_hi": ["Async/await सिंटैक्स", "फ्यूचर ट्रेट", "एक्जीक्यूटर रनटाइम", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is Rust's approach to pattern matching?",
        "question_hi": "पैटर्न मैचिंग के लिए Rust का एप्रोच क्या है?",
        "options_en": ["Exhaustive and safe", "Compiler-verified", "Expression-oriented", "All of the above"],
        "options_hi": ["एक्जॉस्टिव और सेफ", "कंपाइलर-वेरिफाइड", "एक्सप्रेशन-ओरिएंटेड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which Rust concept enables efficient string handling?",
        "question_hi": "कौन सा Rust कॉन्सेप्ट एफिशिएंट स्ट्रिंग हैंडलिंग एनेबल करता है?",
        "options_en": ["String vs &str distinction", "UTF-8 encoding", "Slice references", "All of the above"],
        "options_hi": ["String vs &str डिस्टिंक्शन", "UTF-8 एन्कोडिंग", "स्लाइस रिफरेन्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What makes Rust suitable for web assembly?",
        "question_hi": "Rust को वेब असेंबली के लिए उपयुक्त क्या बनाता है?",
        "options_en": ["Small binary size", "No runtime", "Memory safety", "All of the above"],
        "options_hi": ["छोटा बाइनरी साइज", "कोई रनटाइम नहीं", "मेमोरी सेफ्टी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "How does Rust prevent buffer overflows?",
        "question_hi": "Rust बफर ओवरफ्लो कैसे रोकता है?",
        "options_en": ["Bounds checking", "Ownership system", "Safe abstractions", "All of the above"],
        "options_hi": ["बाउंड्स चेकिंग", "ओनरशिप सिस्टम", "सेफ एब्स्ट्रैक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is Rust's philosophy on explicit vs implicit?",
        "question_hi": "एक्सप्लिसिट vs इम्प्लिसिट पर Rust का फिलॉसफी क्या है?",
        "options_en": ["Favor explicit over implicit", "Balance both approaches", "Context-dependent", "Always implicit for safety"],
        "options_hi": ["इम्प्लिसिट पर एक्सप्लिसिट को प्राथमिकता", "दोनों एप्रोच को बैलेंस", "कॉन्टेक्स्ट-डिपेंडेंट", "सेफ्टी के लिए हमेशा इम्प्लिसिट"],
        "answer_en": "Favor explicit over implicit",
        "answer_hi": "इम्प्लिसिट पर एक्सप्लिसिट को प्राथमिकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which Rust feature enables cross-platform development?",
        "question_hi": "कौन सी Rust फीचर क्रॉस-प्लेटफॉर्म डेवलपमेंट एनेबल करती है?",
        "options_en": ["Tiered platform support", "Conditional compilation", "Standard library abstractions", "All of the above"],
        "options_hi": ["टियर्ड प्लेटफॉर्म सपोर्ट", "कंडीशनल कंपाइलेशन", "स्टैण्डर्ड लाइब्रेरी एब्स्ट्रैक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How does Rust handle integer overflow?",
        "question_hi": "Rust इंटीजर ओवरफ्लो कैसे हैंडल करता है?",
        "options_en": ["Panic in debug mode", "Wrapping in release mode", "Compiler checks", "All of the above"],
        "options_hi": ["डिबग मोड में पैनिक", "रिलीज मोड में रैपिंग", "कंपाइलर चेक्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is Rust's approach to testing?",
        "question_hi": "टेस्टिंग के लिए Rust का एप्रोच क्या है?",
        "options_en": ["Built-in test framework", "Documentation tests", "Integration tests", "All of the above"],
        "options_hi": ["बिल्ट-इन टेस्ट फ्रेमवर्क", "डॉक्युमेंटेशन टेस्ट", "इंटीग्रेशन टेस्ट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which Rust concept prevents data races?",
        "question_hi": "कौन सा Rust कॉन्सेप्ट डेटा रेस को रोकता है?",
        "options_en": ["Ownership rules", "Borrow checker", "Send and Sync traits", "All of the above"],
        "options_hi": ["ओनरशिप रूल्स", "बोरो चेकर", "सेंड और सिंक ट्रेट्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How does Rust achieve high performance?",
        "question_hi": "Rust हाई परफॉर्मेंस कैसे प्राप्त करता है?",
        "options_en": ["Zero-cost abstractions", "LLVM backend", "No runtime", "All of the above"],
        "options_hi": ["जीरो-कॉस्ट एब्स्ट्रैक्शन", "LLVM बैकएंड", "कोई रनटाइम नहीं", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is Rust's memory model?",
        "question_hi": "Rust का मेमोरी मॉडल क्या है?",
        "options_en": ["Stack-based with ownership", "Heap with garbage collection", "Manual memory management", "Automatic reference counting"],
        "options_hi": ["ओनरशिप के साथ स्टैक-बेस्ड", "गार्बेज कलेक्शन के साथ हीप", "मैन्युअल मेमोरी मैनेजमेंट", "ऑटोमैटिक रिफरेन्स काउंटिंग"],
        "answer_en": "Stack-based with ownership",
        "answer_hi": "ओनरशिप के साथ स्टैक-बेस्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which Rust feature enables functional programming patterns?",
        "question_hi": "कौन सी Rust फीचर फंक्शनल प्रोग्रामिंग पैटर्न एनेबल करती है?",
        "options_en": ["Closures", "Iterators", "Pattern matching", "All of the above"],
        "options_hi": ["क्लोजर", "इटरेटर", "पैटर्न मैचिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How does Rust handle shared mutable state?",
        "question_hi": "Rust शेयर्ड म्यूटेबल स्टेट कैसे हैंडल करता है?",
        "options_en": ["Interior mutability patterns", "Mutex and RwLock", "Atomic types", "All of the above"],
        "options_hi": ["इंटीरियर म्यूटेबिलिटी पैटर्न", "म्यूटेक्स और RwLock", "एटॉमिक टाइप्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is Rust's approach to API design?",
        "question_hi": "API डिजाइन के लिए Rust का एप्रोच क्या है?",
        "options_en": ["Ergonomic and safe", "Explicit and clear", "Backward compatible", "All of the above"],
        "options_hi": ["अर्गोनोमिक और सेफ", "एक्सप्लिसिट और क्लियर", "बैकवर्ड कंपेटिबल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which Rust tool provides linting and code analysis?",
        "question_hi": "कौन सा Rust टूल लिंटिंग और कोड एनालिसिस प्रोवाइड करता है?",
        "options_en": ["Clippy", "Rustfmt", "Cargo audit", "Miri"],
        "options_hi": ["Clippy", "Rustfmt", "Cargo audit", "Miri"],
        "answer_en": "Clippy",
        "answer_hi": "Clippy",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "How does Rust handle platform-specific code?",
        "question_hi": "Rust प्लेटफॉर्म-स्पेसिफिक कोड कैसे हैंडल करता है?",
        "options_en": ["Conditional compilation", "Feature flags", "Cfg attributes", "All of the above"],
        "options_hi": ["कंडीशनल कंपाइलेशन", "फीचर फ्लैग्स", "Cfg एट्रिब्यूट्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is Rust's string encoding?",
        "question_hi": "Rust का स्ट्रिंग एन्कोडिंग क्या है?",
        "options_en": ["UTF-8", "UTF-16", "ASCII", "Platform-dependent"],
        "options_hi": ["UTF-8", "UTF-16", "ASCII", "प्लेटफॉर्म-डिपेंडेंट"],
        "answer_en": "UTF-8",
        "answer_hi": "UTF-8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How does Rust handle dependency management?",
        "question_hi": "Rust डिपेंडेंसी मैनेजमेंट कैसे हैंडल करता है?",
        "options_en": ["Cargo.toml files", "Crates.io registry", "Semantic versioning", "All of the above"],
        "options_hi": ["Cargo.toml फाइल्स", "Crates.io रजिस्ट्री", "सिमेंटिक वर्जनिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is Rust's approach to backward compatibility?",
        "question_hi": "बैकवर्ड कंपेटिबिलिटी के लिए Rust का एप्रोच क्या है?",
        "options_en": ["Stable releases with semver", "Edition system", "Deprecation warnings", "All of the above"],
        "options_hi": ["सेमवर के साथ स्टेबल रिलीज", "एडिशन सिस्टम", "डिप्रिकेशन वार्निंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which Rust feature enables efficient collections?",
        "question_hi": "कौन सी Rust फीचर एफिशिएंट कलेक्शन एनेबल करती है?",
        "options_en": ["Generic programming", "Inline capacity", "Amortized allocation", "All of the above"],
        "options_hi": ["जेनेरिक प्रोग्रामिंग", "इनलाइन कैपेसिटी", "अमोर्टाइज्ड अलोकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How does Rust handle floating-point operations?",
        "question_hi": "Rust फ्लोटिंग-पॉइंट ऑपरेशन कैसे हैंडल करता है?",
        "options_en": ["IEEE 754 standard", "Platform-specific math", "Approximate comparisons", "All of the above"],
        "options_hi": ["IEEE 754 स्टैण्डर्ड", "प्लेटफॉर्म-स्पेसिफिक मैथ", "अप्रॉक्सिमेट कम्पेयरिजन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is Rust's philosophy on compile times?",
        "question_hi": "कंपाइल टाइम्स पर Rust का फिलॉसफी क्या है?",
        "options_en": ["Fast incremental compilation", "Parallel compilation", "Caching mechanisms", "All of the above"],
        "options_hi": ["फास्ट इंक्रीमेंटल कंपाइलेशन", "पैरेलल कंपाइलेशन", "कैशिंग मैकेनिज्म", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which Rust feature enables efficient error handling?",
        "question_hi": "कौन सी Rust फीचर एफिशिएंट एरर हैंडलिंग एनेबल करती है?",
        "options_en": ["Result type", "? operator", "Error propagation", "All of the above"],
        "options_hi": ["रिजल्ट टाइप", "? ऑपरेटर", "एरर प्रोपगेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "How does Rust handle code formatting?",
        "question_hi": "Rust कोड फॉर्मेटिंग कैसे हैंडल करता है?",
        "options_en": ["Rustfmt tool", "Standard style guide", "Automatic formatting", "All of the above"],
        "options_hi": ["Rustfmt टूल", "स्टैण्डर्ड स्टाइल गाइड", "ऑटोमैटिक फॉर्मेटिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is Rust's approach to documentation?",
        "question_hi": "डॉक्युमेंटेशन के लिए Rust का एप्रोच क्या है?",
        "options_en": ["Built-in doc comments", "Documentation tests", "Rustdoc tool", "All of the above"],
        "options_hi": ["बिल्ट-इन डॉक कमेंट", "डॉक्युमेंटेशन टेस्ट", "Rustdoc टूल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which Rust concept prevents iterator invalidation?",
        "question_hi": "कौन सा Rust कॉन्सेप्ट इटरेटर इनवैलिडेशन को रोकता है?",
        "options_en": ["Borrow checker", "Ownership rules", "Lifetime tracking", "All of the above"],
        "options_hi": ["बोरो चेकर", "ओनरशिप रूल्स", "लाइफटाइम ट्रैकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How does Rust handle SIMD operations?",
        "question_hi": "Rust SIMD ऑपरेशन कैसे हैंडल करता है?",
        "options_en": ["Std::simd module", "Inline assembly", "Compiler intrinsics", "All of the above"],
        "options_hi": ["Std::simd मॉड्यूल", "इनलाइन असेंबली", "कंपाइलर इंट्रिंसिक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is Rust's approach to security?",
        "question_hi": "सिक्योरिटी के लिए Rust का एप्रोच क्या है?",
        "options_en": ["Memory safety by default", "Safe abstractions", "Unsafe code isolation", "All of the above"],
        "options_hi": ["डिफॉल्ट रूप से मेमोरी सेफ्टी", "सेफ एब्स्ट्रैक्शन", "अनसेफ कोड आइसोलेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which Rust feature enables efficient serialization?",
        "question_hi": "कौन सी Rust फीचर एफिशिएंट सीरियलाइज़ेशन एनेबल करती है?",
        "options_en": ["Serde library", "Derive macros", "Zero-copy deserialization", "All of the above"],
        "options_hi": ["Serde लाइब्रेरी", "डेराइव मैक्रोस", "जीरो-कॉपी डीसीरियलाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How does Rust handle build configuration?",
        "question_hi": "Rust बिल्ड कॉन्फिगरेशन कैसे हैंडल करता है?",
        "options_en": ["Cargo features", "Build scripts", "Conditional compilation", "All of the above"],
        "options_hi": ["Cargo फीचर्स", "बिल्ड स्क्रिप्ट", "कंडीशनल कंपाइलेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is Rust's philosophy on community development?",
        "question_hi": "कम्युनिटी डेवलपमेंट पर Rust का फिलॉसफी क्या है?",
        "options_en": ["Open source governance", "RFC process", "Community contributions", "All of the above"],
        "options_hi": ["ओपन सोर्स गवर्नेंस", "RFC प्रोसेस", "कम्युनिटी कंट्रीब्यूशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which Rust tool manages toolchain versions?",
        "question_hi": "कौन सा Rust टूल टूलचेन वर्जन मैनेज करता है?",
        "options_en": ["Rustup", "Cargo", "Rustc", "Clippy"],
        "options_hi": ["Rustup", "Cargo", "Rustc", "Clippy"],
        "answer_en": "Rustup",
        "answer_hi": "Rustup",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How does Rust handle dead code detection?",
        "question_hi": "Rust डेड कोड डिटेक्शन कैसे हैंडल करता है?",
        "options_en": ["Compiler warnings", "Clippy lints", "Unused attribute", "All of the above"],
        "options_hi": ["कंपाइलर वार्निंग", "Clippy लिंट्स", "अनयूज्ड एट्रिब्यूट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is Rust's approach to package distribution?",
        "question_hi": "पैकेज डिस्ट्रीब्यूशन के लिए Rust का एप्रोच क्या है?",
        "options_en": ["Crates.io registry", "Git dependencies", "Local paths", "All of the above"],
        "options_hi": ["Crates.io रजिस्ट्री", "Git डिपेंडेंसी", "लोकल पाथ", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which Rust feature enables efficient parsing?",
        "question_hi": "कौन सी Rust फीचर एफिशिएंट पार्सिंग एनेबल करती है?",
        "options_en": ["Nom parser combinators", "Procedural macros", "Zero-copy parsing", "All of the above"],
        "options_hi": ["Nom पार्सर कॉम्बिनेटर", "प्रोसीजरल मैक्रोस", "जीरो-कॉपी पार्सिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "How does Rust handle cryptographic operations?",
        "question_hi": "Rust क्रिप्टोग्राफिक ऑपरेशन कैसे हैंडल करता है?",
        "options_en": ["Ring library", "OpenSSL bindings", "Pure Rust implementations", "All of the above"],
        "options_hi": ["Ring लाइब्रेरी", "OpenSSL बाइंडिंग", "प्योर Rust इम्प्लीमेंटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is Rust's approach to web development?",
        "question_hi": "वेब डेवलपमेंट के लिए Rust का एप्रोच क्या है?",
        "options_en": ["WASM compilation", "Web frameworks", "HTTP libraries", "All of the above"],
        "options_hi": ["WASM कंपाइलेशन", "वेब फ्रेमवर्क", "HTTP लाइब्रेरी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which Rust concept enables efficient caching?",
        "question_hi": "कौन सा Rust कॉन्सेप्ट एफिशिएंट कैशिंग एनेबल करता है?",
        "options_en": ["Interior mutability", "Lazy evaluation", "Memoization patterns", "All of the above"],
        "options_hi": ["इंटीरियर म्यूटेबिलिटी", "लेजी एवैल्यूएशन", "मेमोइज़ेशन पैटर्न", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How does Rust handle database operations?",
        "question_hi": "Rust डेटाबेस ऑपरेशन कैसे हैंडल करता है?",
        "options_en": ["Diesel ORM", "SQLx async SQL", "Connection pooling", "All of the above"],
        "options_hi": ["Diesel ORM", "SQLx async SQL", "कनेक्शन पूलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is Rust's approach to GUI development?",
        "question_hi": "GUI डेवलपमेंट के लिए Rust का एप्रोच क्या है?",
        "options_en": ["Native toolkits", "Web-based approaches", "Immediate mode GUIs", "All of the above"],
        "options_hi": ["नेटिव टूलकिट", "वेब-बेस्ड एप्रोच", "इमीडिएट मोड GUI", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which Rust feature enables efficient networking?",
        "question_hi": "कौन सी Rust फीचर एफिशिएंट नेटवर्किंग एनेबल करती है?",
        "options_en": ["Async runtime", "Zero-copy I/O", "Protocol implementations", "All of the above"],
        "options_hi": ["Async रनटाइम", "जीरो-कॉपी I/O", "प्रोटोकॉल इम्प्लीमेंटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "How does Rust handle scientific computing?",
        "question_hi": "Rust साइंटिफिक कंप्यूटिंग कैसे हैंडल करता है?",
        "options_en": ["Ndarray library", "BLAS/LAPACK bindings", "GPU computing", "All of the above"],
        "options_hi": ["Ndarray लाइब्रेरी", "BLAS/LAPACK बाइंडिंग", "GPU कंप्यूटिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is Rust's approach to machine learning?",
        "question_hi": "मशीन लर्निंग के लिए Rust का एप्रोच क्या है?",
        "options_en": ["Tensor bindings", "Pure Rust implementations", "ONNX support", "All of the above"],
        "options_hi": ["टेंसर बाइंडिंग", "प्योर Rust इम्प्लीमेंटेशन", "ONNX सपोर्ट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which Rust concept enables efficient game development?",
        "question_hi": "कौन सा Rust कॉन्सेप्ट एफिशिएंट गेम डेवलपमेंट एनेबल करता है?",
        "options_en": ["Entity-component systems", "Graphics APIs", "Physics engines", "All of the above"],
        "options_hi": ["एंटिटी-कंपोनेंट सिस्टम", "ग्राफिक्स API", "फिजिक्स इंजन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How does Rust handle blockchain development?",
        "question_hi": "Rust ब्लॉकचेन डेवलपमेंट कैसे हैंडल करता है?",
        "options_en": ["Cryptographic primitives", "Smart contracts", "Distributed systems", "All of the above"],
        "options_hi": ["क्रिप्टोग्राफिक प्रिमिटिव", "स्मार्ट कॉन्ट्रैक्ट", "डिस्ट्रीब्यूटेड सिस्टम", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is Rust's approach to DevOps tooling?",
        "question_hi": "DevOps टूलिंग के लिए Rust का एप्रोच क्या है?",
        "options_en": ["CLI applications", "System utilities", "Monitoring tools", "All of the above"],
        "options_hi": ["CLI एप्लीकेशन", "सिस्टम यूटिलिटी", "मॉनिटरिंग टूल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which Rust feature enables efficient image processing?",
        "question_hi": "कौन सी Rust फीचर एफिशिएंट इमेज प्रोसेसिंग एनेबल करती है?",
        "options_en": ["Image library", "SIMD optimizations", "GPU acceleration", "All of the above"],
        "options_hi": ["इमेज लाइब्रेरी", "SIMD ऑप्टिमाइज़ेशन", "GPU एक्सेलेरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "How does Rust handle audio processing?",
        "question_hi": "Rust ऑडियो प्रोसेसिंग कैसे हैंडल करता है?",
        "options_en": ["CPAL library", "Real-time processing", "DSP algorithms", "All of the above"],
        "options_hi": ["CPAL लाइब्रेरी", "रियल-टाइम प्रोसेसिंग", "DSP अल्गोरिदम", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is Rust's approach to video processing?",
        "question_hi": "वीडियो प्रोसेसिंग के लिए Rust का एप्रोच क्या है?",
        "options_en": ["FFmpeg bindings", "Hardware acceleration", "Codec implementations", "All of the above"],
        "options_hi": ["FFmpeg बाइंडिंग", "हार्डवेयर एक्सेलेरेशन", "कोडेक इम्प्लीमेंटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which Rust concept enables efficient compression?",
        "question_hi": "कौन सा Rust कॉन्सेप्ट एफिशिएंट कम्प्रेशन एनेबल करता है?",
        "options_en": ["Zlib bindings", "Pure Rust implementations", "Streaming compression", "All of the above"],
        "options_hi": ["Zlib बाइंडिंग", "प्योर Rust इम्प्लीमेंटेशन", "स्ट्रीमिंग कम्प्रेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How does Rust handle internationalization?",
        "question_hi": "Rust इंटरनेशनलाइज़ेशन कैसे हैंडल करता है?",
        "options_en": ["Fluent system", "Unicode support", "Locale handling", "All of the above"],
        "options_hi": ["फ्लुएंट सिस्टम", "यूनिकोड सपोर्ट", "लोकेल हैंडलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is Rust's approach to accessibility?",
        "question_hi": "एक्सेसिबिलिटी के लिए Rust का एप्रोच क्या है?",
        "options_en": ["Screen reader support", "Keyboard navigation", "ARIA attributes", "All of the above"],
        "options_hi": ["स्क्रीन रीडर सपोर्ट", "कीबोर्ड नेविगेशन", "ARIA एट्रिब्यूट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which Rust feature enables efficient logging?",
        "question_hi": "कौन सी Rust फीचर एफिशिएंट लॉगिंग एनेबल करती है?",
        "options_en": ["Log crate", "Structured logging", "Async logging", "All of the above"],
        "options_hi": ["लॉग क्रेट", "स्ट्रक्चर्ड लॉगिंग", "Async लॉगिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "How does Rust handle configuration management?",
        "question_hi": "Rust कॉन्फिगरेशन मैनेजमेंट कैसे हैंडल करता है?",
        "options_en": ["Config crate", "Environment variables", "File-based config", "All of the above"],
        "options_hi": ["कॉन्फिग क्रेट", "एनवायरनमेंट वेरिएबल", "फाइल-बेस्ड कॉन्फिग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is Rust's approach to secret management?",
        "question_hi": "सीक्रेट मैनेजमेंट के लिए Rust का एप्रोच क्या है?",
        "options_en": ["Environment variables", "Key management services", "Encrypted storage", "All of the above"],
        "options_hi": ["एनवायरनमेंट वेरिएबल", "की मैनेजमेंट सर्विस", "एन्क्रिप्टेड स्टोरेज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which Rust concept enables efficient caching?",
        "question_hi": "कौन सा Rust कॉन्सेप्ट एफिशिएंट कैशिंग एनेबल करता है?",
        "options_en": ["LRU caches", "Time-based expiration", "Distributed caches", "All of the above"],
        "options_hi": ["LRU कैश", "टाइम-बेस्ड एक्सपायरेशन", "डिस्ट्रीब्यूटेड कैश", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How does Rust handle rate limiting?",
        "question_hi": "Rust रेट लिमिटिंग कैसे हैंडल करता है?",
        "options_en": ["Token bucket algorithm", "Fixed window counters", "Distributed rate limiting", "All of the above"],
        "options_hi": ["टोकन बकेट अल्गोरिदम", "फिक्स्ड विंडो काउंटर", "डिस्ट्रीब्यूटेड रेट लिमिटिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is Rust's approach to circuit breaking?",
        "question_hi": "सर्किट ब्रेकिंग के लिए Rust का एप्रोच क्या है?",
        "options_en": ["Failure detection", "Automatic recovery", "Fallback mechanisms", "All of the above"],
        "options_hi": ["फेल्योर डिटेक्शन", "ऑटोमैटिक रिकवरी", "फॉलबैक मैकेनिज्म", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which Rust feature enables efficient search?",
        "question_hi": "कौन सी Rust फीचर एफिशिएंट सर्च एनेबल करती है?",
        "options_en": ["Full-text search", "Fuzzy matching", "Indexed search", "All of the above"],
        "options_hi": ["फुल-टेक्स्ट सर्च", "फजी मैचिंग", "इंडेक्स्ड सर्च", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "How does Rust handle data validation?",
        "question_hi": "Rust डेटा वैलिडेशन कैसे हैंडल करता है?",
        "options_en": ["Schema validation", "Type-driven validation", "Custom validators", "All of the above"],
        "options_hi": ["स्कीमा वैलिडेशन", "टाइप-ड्रिवेन वैलिडेशन", "कस्टम वैलिडेटर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is Rust's approach to data transformation?",
        "question_hi": "डेटा ट्रांसफॉर्मेशन के लिए Rust का एप्रोच क्या है?",
        "options_en": ["Iterator combinators", "Stream processing", "Batch processing", "All of the above"],
        "options_hi": ["इटरेटर कॉम्बिनेटर", "स्ट्रीम प्रोसेसिंग", "बैच प्रोसेसिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which Rust concept enables efficient aggregation?",
        "question_hi": "कौन सा Rust कॉन्सेप्ट एफिशिएंट एग्रीगेशन एनेबल करता है?",
        "options_en": ["Fold operations", "Reduce patterns", "Window functions", "All of the above"],
        "options_hi": ["फोल्ड ऑपरेशन", "रिड्यूस पैटर्न", "विंडो फंक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How does Rust handle time series data?",
        "question_hi": "Rust टाइम सीरीज डेटा कैसे हैंडल करता है?",
        "options_en": ["Timestamp handling", "Rollup aggregations", "Downsampling", "All of the above"],
        "options_hi": ["टाइमस्टैम्प हैंडलिंग", "रोलअप एग्रीगेशन", "डाउनसैम्पलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is Rust's approach to geospatial data?",
        "question_hi": "जियोस्पेशियल डेटा के लिए Rust का एप्रोच क्या है?",
        "options_en": ["Coordinate systems", "Spatial indexing", "Geometric operations", "All of the above"],
        "options_hi": ["कोऑर्डिनेट सिस्टम", "स्पेशियल इंडेक्सिंग", "ज्योमेट्रिक ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which Rust feature enables efficient graph processing?",
        "question_hi": "कौन सी Rust फीचर एफिशिएंट ग्राफ प्रोसेसिंग एनेबल करती है?",
        "options_en": ["Graph algorithms", "Traversal patterns", "Parallel processing", "All of the above"],
        "options_hi": ["ग्राफ अल्गोरिदम", "ट्रैवर्सल पैटर्न", "पैरेलल प्रोसेसिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "How does Rust handle natural language processing?",
        "question_hi": "Rust नेचुरल लैंग्वेज प्रोसेसिंग कैसे हैंडल करता है?",
        "options_en": ["Tokenization", "Stemming", "Embedding models", "All of the above"],
        "options_hi": ["टोकनाइजेशन", "स्टेमिंग", "एम्बेडिंग मॉडल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is Rust's approach to computer vision?",
        "question_hi": "कंप्यूटर विजन के लिए Rust का एप्रोच क्या है?",
        "options_en": ["Image processing", "Feature detection", "Neural networks", "All of the above"],
        "options_hi": ["इमेज प्रोसेसिंग", "फीचर डिटेक्शन", "न्यूरल नेटवर्क", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which Rust concept enables efficient robotics?",
        "question_hi": "कौन सा Rust कॉन्सेप्ट एफिशिएंट रोबोटिक्स एनेबल करता है?",
        "options_en": ["Real-time control", "Sensor fusion", "Motion planning", "All of the above"],
        "options_hi": ["रियल-टाइम कंट्रोल", "सेंसर फ्यूजन", "मोशन प्लानिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How does Rust handle IoT development?",
        "question_hi": "Rust IoT डेवलपमेंट कैसे हैंडल करता है?",
        "options_en": ["Embedded targets", "Low-power operation", "Wireless protocols", "All of the above"],
        "options_hi": ["एम्बेडेड टारगेट", "लो-पावर ऑपरेशन", "वायरलेस प्रोटोकॉल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is Rust's approach to quantum computing?",
        "question_hi": "क्वांटम कंप्यूटिंग के लिए Rust का एप्रोच क्या है?",
        "options_en": ["Quantum circuit simulation", "Algorithm implementation", "Hardware control", "All of the above"],
        "options_hi": ["क्वांटम सर्किट सिमुलेशन", "अल्गोरिदम इम्प्लीमेंटेशन", "हार्डवेयर कंट्रोल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which Rust feature enables efficient bioinformatics?",
        "question_hi": "कौन सी Rust फीचर एफिशिएंट बायोइन्फॉरमैटिक्स एनेबल करती है?",
        "options_en": ["Sequence alignment", "Genome analysis", "Protein folding", "All of the above"],
        "options_hi": ["सीक्वेंस अलाइनमेंट", "जीनोम एनालिसिस", "प्रोटीन फोल्डिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "How does Rust handle financial computing?",
        "question_hi": "Rust फाइनेंशियल कंप्यूटिंग कैसे हैंडल करता है?",
        "options_en": ["Decimal arithmetic", "Risk modeling", "Trading algorithms", "All of the above"],
        "options_hi": ["डेसीमल अरिथमेटिक", "रिस्क मॉडलिंग", "ट्रेडिंग अल्गोरिदम", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is Rust's approach to digital signal processing?",
        "question_hi": "डिजिटल सिग्नल प्रोसेसिंग के लिए Rust का एप्रोच क्या है?",
        "options_en": ["Filter design", "Spectral analysis", "Real-time processing", "All of the above"],
        "options_hi": ["फिल्टर डिजाइन", "स्पेक्ट्रल एनालिसिस", "रियल-टाइम प्रोसेसिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which Rust concept enables efficient control systems?",
        "question_hi": "कौन सा Rust कॉन्सेप्ट एफिशिएंट कंट्रोल सिस्टम एनेबल करता है?",
        "options_en": ["PID controllers", "State estimation", "System identification", "All of the above"],
        "options_hi": ["PID कंट्रोलर", "स्टेट एस्टिमेशन", "सिस्टम आइडेंटिफिकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How does Rust handle numerical optimization?",
        "question_hi": "Rust न्यूमेरिकल ऑप्टिमाइज़ेशन कैसे हैंडल करता है?",
        "options_en": ["Gradient descent", "Linear programming", "Constraint solving", "All of the above"],
        "options_hi": ["ग्रेडिएंट डिसेंट", "लीनियर प्रोग्रामिंग", "कंस्ट्रेंट सॉल्विंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is Rust's approach to statistical analysis?",
        "question_hi": "स्टैटिस्टिकल एनालिसिस के लिए Rust का एप्रोच क्या है?",
        "options_en": ["Probability distributions", "Hypothesis testing", "Regression analysis", "All of the above"],
        "options_hi": ["प्रोबेबिलिटी डिस्ट्रीब्यूशन", "हाइपोथिसिस टेस्टिंग", "रिग्रेशन एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which Rust feature enables efficient Monte Carlo simulation?",
        "question_hi": "कौन सी Rust फीचर एफिशिएंट मोंटे कार्लो सिमुलेशन एनेबल करती है?",
        "options_en": ["Random number generation", "Parallel execution", "Variance reduction", "All of the above"],
        "options_hi": ["रैंडम नंबर जेनरेशन", "पैरेलल एक्जीक्यूशन", "वेरिएंस रिडक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "How does Rust handle symbolic mathematics?",
        "question_hi": "Rust सिंबोलिक मैथमेटिक्स कैसे हैंडल करता है?",
        "options_en": ["Expression trees", "Algebraic simplification", "Equation solving", "All of the above"],
        "options_hi": ["एक्सप्रेशन ट्री", "अल्जेब्रिक सिम्प्लिफिकेशन", "इक्वेशन सॉल्विंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is Rust's approach to computational geometry?",
        "question_hi": "कम्प्यूटेशनल ज्योमेट्री के लिए Rust का एप्रोच क्या है?",
        "options_en": ["Convex hulls", "Voronoi diagrams", "Collision detection", "All of the above"],
        "options_hi": ["कॉन्वेक्स हल", "वोरोनोई डायग्राम", "कॉलिजन डिटेक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which Rust concept enables efficient cryptography?",
        "question_hi": "कौन सा Rust कॉन्सेप्ट एफिशिएंट क्रिप्टोग्राफी एनेबल करता है?",
        "options_en": ["Constant-time operations", "Side-channel resistance", "Formal verification", "All of the above"],
        "options_hi": ["कॉन्स्टेंट-टाइम ऑपरेशन", "साइड-चैनल रेजिस्टेंस", "फॉर्मल वेरिफिकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What makes Rust suitable for systems programming?",
        "question_hi": "Rust को सिस्टम्स प्रोग्रामिंग के लिए उपयुक्त क्या बनाता है?",
        "options_en": ["Direct hardware access", "Minimal runtime", "Memory control", "All of the above"],
        "options_hi": ["डायरेक्ट हार्डवेयर एक्सेस", "मिनिमल रनटाइम", "मेमोरी कंट्रोल", "उपरोक्त सभी"],
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