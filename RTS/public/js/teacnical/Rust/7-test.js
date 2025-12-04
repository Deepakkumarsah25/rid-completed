const questions = [
    {
        "num": 1,
        "question_en": "Which macro prints to standard error?",
        "question_hi": "कौन सा मैक्रो स्टैंडर्ड एरर पर प्रिंट करता है?",
        "options_en": ["eprintln!", "error!", "print_err!", "stderr!"],
        "options_hi": ["eprintln!", "error!", "print_err!", "stderr!"],
        "answer_en": "eprintln!",
        "answer_hi": "eprintln!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which keyword allows variable mutation in Rust?",
        "question_hi": "Rust में वेरिएबल म्यूटेशन की अनुमति कौन सा कीवर्ड देता है?",
        "options_en": ["mut", "var", "mutable", "change"],
        "options_hi": ["mut", "var", "mutable", "change"],
        "answer_en": "mut",
        "answer_hi": "mut",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is Cargo's main function in Rust?",
        "question_hi": "Rust में Cargo का मुख्य कार्य क्या है?",
        "options_en": ["Package manager and build tool", "Compiler", "Code formatter", "Documentation generator"],
        "options_hi": ["पैकेज मैनेजर और बिल्ड टूल", "कंपाइलर", "कोड फॉर्मेटर", "डॉक्यूमेंटेशन जेनरेटर"],
        "answer_en": "Package manager and build tool",
        "answer_hi": "पैकेज मैनेजर और बिल्ड टूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which integer type is platform-dependent for size?",
        "question_hi": "कौन सा इंटीजर टाइप साइज के लिए प्लेटफॉर्म-डिपेंडेंट है?",
        "options_en": ["usize", "i32", "i64", "isize"],
        "options_hi": ["usize", "i32", "i64", "isize"],
        "answer_en": "usize",
        "answer_hi": "usize",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "How do you create a string from a string literal?",
        "question_hi": "स्ट्रिंग लिटरल से स्ट्रिंग कैसे बनाते हैं?",
        "options_en": ["\"hello\".to_string()", "String::from(\"hello\")", "Both A and B", "new String(\"hello\")"],
        "options_hi": ["\"hello\".to_string()", "String::from(\"hello\")", "A और B दोनों", "new String(\"hello\")"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the purpose of pattern matching with match?",
        "question_hi": "match के साथ पैटर्न मैचिंग का उद्देश्य क्या है?",
        "options_en": ["Exhaustive value decomposition", "String comparison", "Memory pattern analysis", "Code pattern recognition"],
        "options_hi": ["एक्जॉस्टिव वैल्यू डिकम्पोज़िशन", "स्ट्रिंग कम्पेयरिजन", "मेमोरी पैटर्न एनालिसिस", "कोड पैटर्न रिकग्निशन"],
        "answer_en": "Exhaustive value decomposition",
        "answer_hi": "एक्जॉस्टिव वैल्यू डिकम्पोज़िशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which enum is used for fallible operations?",
        "question_hi": "फेलिबल ऑपरेशन्स के लिए कौन सा enum उपयोग किया जाता है?",
        "options_en": ["Result", "Option", "Either", "Maybe"],
        "options_hi": ["Result", "Option", "Either", "Maybe"],
        "answer_en": "Result",
        "answer_hi": "Result",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does RAII ensure in resource management?",
        "question_hi": "रिसोर्स मैनेजमेंट में RAII क्या सुनिश्चित करता है?",
        "options_en": ["Automatic resource cleanup", "Resource optimization", "Manual resource management", "Resource sharing"],
        "options_hi": ["ऑटोमैटिक रिसोर्स क्लीनअप", "रिसोर्स ऑप्टिमाइज़ेशन", "मैन्युअल रिसोर्स मैनेजमेंट", "रिसोर्स शेयरिंग"],
        "answer_en": "Automatic resource cleanup",
        "answer_hi": "ऑटोमैटिक रिसोर्स क्लीनअप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "How do you define a compile-time constant value?",
        "question_hi": "कंपाइल-टाइम कॉन्स्टेंट वैल्यू कैसे डिफाइन करते हैं?",
        "options_en": ["const", "static", "let", "final"],
        "options_hi": ["const", "static", "let", "final"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What happens when unwrap() is called on Err?",
        "question_hi": "Err पर unwrap() कॉल करने पर क्या होता है?",
        "options_en": ["Program panics", "Returns default value", "Returns None", "Silently fails"],
        "options_hi": ["प्रोग्राम पैनिक करता है", "डिफॉल्ट वैल्यू रिटर्न करता है", "None रिटर्न करता है", "साइलेंटली फेल होता है"],
        "answer_en": "Program panics",
        "answer_hi": "प्रोग्राम पैनिक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the primary goal of Rust's ownership system?",
        "question_hi": "Rust के ownership सिस्टम का प्राथमिक लक्ष्य क्या है?",
        "options_en": ["Memory safety without garbage collection", "Faster execution", "Automatic memory management", "Simpler syntax"],
        "options_hi": ["गार्बेज कलेक्शन के बिना मेमोरी सेफ्टी", "तेज एक्जीक्यूशन", "ऑटोमैटिक मेमोरी मैनेजमेंट", "सरल सिंटैक्स"],
        "answer_en": "Memory safety without garbage collection",
        "answer_hi": "गार्बेज कलेक्शन के बिना मेमोरी सेफ्टी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is a trait's primary purpose?",
        "question_hi": "ट्रेट का प्राथमिक उद्देश्य क्या है?",
        "options_en": ["Define shared behavior", "Create data types", "Manage memory", "Handle errors"],
        "options_hi": ["शेयर्ड बिहेवियर डिफाइन करना", "डेटा टाइप्स बनाना", "मेमोरी मैनेज करना", "एरर्स हैंडल करना"],
        "answer_en": "Define shared behavior",
        "answer_hi": "शेयर्ड बिहेवियर डिफाइन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What does the ? operator do in error propagation?",
        "question_hi": "एरर प्रोपेगेशन में ? ऑपरेटर क्या करता है?",
        "options_en": ["Early return on error", "Convert error types", "Log errors", "Ignore errors"],
        "options_hi": ["एरर पर अर्ली रिटर्न", "एरर टाइप्स कन्वर्ट करना", "एरर्स लॉग करना", "एरर्स इग्नोर करना"],
        "answer_en": "Early return on error",
        "answer_hi": "एरर पर अर्ली रिटर्न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is Box<T> primarily used for?",
        "question_hi": "Box<T> मुख्य रूप से किस लिए उपयोग किया जाता है?",
        "options_en": ["Heap allocation", "Stack allocation", "Reference counting", "Atomic operations"],
        "options_hi": ["हीप अलोकेशन", "स्टैक अलोकेशन", "रिफरेन्स काउंटिंग", "एटॉमिक ऑपरेशन्स"],
        "answer_en": "Heap allocation",
        "answer_hi": "हीप अलोकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which keyword starts a function definition?",
        "question_hi": "फंक्शन डेफिनिशन कौन सा कीवर्ड शुरू करता है?",
        "options_en": ["fn", "function", "def", "func"],
        "options_hi": ["fn", "function", "def", "func"],
        "answer_en": "fn",
        "answer_hi": "fn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What distinguishes String from &str?",
        "question_hi": "String को &str से क्या अलग करता है?",
        "options_en": ["Ownership and mutability", "Performance", "Memory location", "All of the above"],
        "options_hi": ["ओनरशिप और म्यूटेबिलिटी", "परफॉर्मेंस", "मेमोरी लोकेशन", "उपरोक्त सभी"],
        "answer_en": "Ownership and mutability",
        "answer_hi": "ओनरशिप और म्यूटेबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "How do you create a vector with capacity?",
        "question_hi": "कैपेसिटी के साथ वेक्टर कैसे बनाते हैं?",
        "options_en": ["Vec::with_capacity()", "Vector::new_with_capacity()", "new Vec(capacity)", "vec![; capacity]"],
        "options_hi": ["Vec::with_capacity()", "Vector::new_with_capacity()", "new Vec(capacity)", "vec![; capacity]"],
        "answer_en": "Vec::with_capacity()",
        "answer_hi": "Vec::with_capacity()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does #[derive(Clone)] provide?",
        "question_hi": "#[derive(Clone)] क्या प्रोवाइड करता है?",
        "options_en": ["Automatic clone implementation", "Deep copy capability", "Both A and B", "Reference counting"],
        "options_hi": ["ऑटोमैटिक clone इम्प्लीमेंटेशन", "डीप कॉपी कैपेबिलिटी", "A और B दोनों", "रिफरेन्स काउंटिंग"],
        "answer_en": "Automatic clone implementation",
        "answer_hi": "ऑटोमैटिक clone इम्प्लीमेंटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which trait enables bitwise copying?",
        "question_hi": "कौन सा ट्रेट बिटवाइज कॉपीिंग सक्षम करता है?",
        "options_en": ["Copy", "Clone", "Duplicate", "BitCopy"],
        "options_hi": ["Copy", "Clone", "Duplicate", "BitCopy"],
        "answer_en": "Copy",
        "answer_hi": "Copy",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What does 'move' capture in closures?",
        "question_hi": "क्लोजर्स में 'move' क्या कैप्चर करता है?",
        "options_en": ["Ownership of variables", "References to variables", "Variable values", "Memory addresses"],
        "options_hi": ["वेरिएबल्स की ओनरशिप", "वेरिएबल्स के रिफरेन्स", "वेरिएबल वैल्यूज", "मेमोरी एड्रेसेस"],
        "answer_en": "Ownership of variables",
        "answer_hi": "वेरिएबल्स की ओनरशिप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "How do you create a scoped thread?",
        "question_hi": "स्कोप्ड थ्रेड कैसे बनाते हैं?",
        "options_en": ["thread::spawn() with scope", "std::thread::scope()", "Thread::scoped()", "scope::thread()"],
        "options_hi": ["thread::spawn() with scope", "std::thread::scope()", "Thread::scoped()", "scope::thread()"],
        "answer_en": "std::thread::scope()",
        "answer_hi": "std::thread::scope()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What do lifetime parameters ensure?",
        "question_hi": "लाइफटाइम पैरामीटर्स क्या सुनिश्चित करते हैं?",
        "options_en": ["Reference validity", "Memory allocation", "Thread safety", "Performance"],
        "options_hi": ["रिफरेन्स वैलिडिटी", "मेमोरी अलोकेशन", "थ्रेड सेफ्टी", "परफॉर्मेंस"],
        "answer_en": "Reference validity",
        "answer_hi": "रिफरेन्स वैलिडिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which attribute enables test compilation?",
        "question_hi": "कौन सा एट्रिब्यूट टेस्ट कंपाइलेशन सक्षम करता है?",
        "options_en": ["#[cfg(test)]", "#[test]", "#[testing]", "#[test_enable]"],
        "options_hi": ["#[cfg(test)]", "#[test]", "#[testing]", "#[test_enable]"],
        "answer_en": "#[cfg(test)]",
        "answer_hi": "#[cfg(test)]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What does an impl block define?",
        "question_hi": "impl ब्लॉक क्या डिफाइन करता है?",
        "options_en": ["Methods for a type", "Trait implementations", "Both A and B", "Module implementations"],
        "options_hi": ["टाइप के लिए मेथड्स", "ट्रेट इम्प्लीमेंटेशन्स", "A और B दोनों", "मॉड्यूल इम्प्लीमेंटेशन्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "How do you retrieve a thread's result?",
        "question_hi": "थ्रेड का रिजल्ट कैसे प्राप्त करते हैं?",
        "options_en": ["join() method", "result() method", "get() method", "await keyword"],
        "options_hi": ["join() मेथड", "result() मेथड", "get() मेथड", "await कीवर्ड"],
        "answer_en": "join() method",
        "answer_hi": "join() मेथड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is if let used for?",
        "question_hi": "if let किस लिए उपयोग किया जाता है?",
        "options_en": ["Simple pattern matching", "Conditional assignment", "Both A and B", "Loop control"],
        "options_hi": ["सिंपल पैटर्न मैचिंग", "कंडीशनल असाइनमेंट", "A और B दोनों", "लूप कंट्रोल"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which trait parses strings?",
        "question_hi": "कौन सा ट्रेट स्ट्रिंग्स पार्स करता है?",
        "options_en": ["FromStr", "Parse", "FromString", "StringParse"],
        "options_hi": ["FromStr", "Parse", "FromString", "StringParse"],
        "answer_en": "FromStr",
        "answer_hi": "FromStr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is variable shadowing?",
        "question_hi": "वेरिएबल शैडोइंग क्या है?",
        "options_en": ["Redeclaring variables in same scope", "Hiding outer variables", "Memory optimization", "Scope limitation"],
        "options_hi": ["समान स्कोप में वेरिएबल्स रीडिक्लेयर करना", "आउटर वेरिएबल्स हाइड करना", "मेमोरी ऑप्टिमाइज़ेशन", "स्कोप लिमिटेशन"],
        "answer_en": "Redeclaring variables in same scope",
        "answer_hi": "समान स्कोप में वेरिएबल्स रीडिक्लेयर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How do you handle optional values safely?",
        "question_hi": "ऑप्शनल वैल्यूज को सेफली कैसे हैंडल करते हैं?",
        "options_en": ["Pattern matching", "unwrap_or()", "? operator", "All of the above"],
        "options_hi": ["पैटर्न मैचिंग", "unwrap_or()", "? ऑपरेटर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What does dyn enable?",
        "question_hi": "dyn क्या सक्षम करता है?",
        "options_en": ["Dynamic dispatch", "Dynamic typing", "Dynamic allocation", "Dynamic linking"],
        "options_hi": ["डायनामिक डिस्पैच", "डायनामिक टाइपिंग", "डायनामिक अलोकेशन", "डायनामिक लिंकिंग"],
        "answer_en": "Dynamic dispatch",
        "answer_hi": "डायनामिक डिस्पैच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "How do you iterate with index?",
        "question_hi": "इंडेक्स के साथ कैसे इटरेट करते हैं?",
        "options_en": ["iter().enumerate()", "for i in 0..vec.len()", "Both A and B", "vec.indexed_iter()"],
        "options_hi": ["iter().enumerate()", "for i in 0..vec.len()", "A और B दोनों", "vec.indexed_iter()"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "When is unsafe necessary?",
        "question_hi": "unsafe कब आवश्यक है?",
        "options_en": ["FFI calls", "Raw pointer dereferencing", "Inline assembly", "All of the above"],
        "options_hi": ["FFI कॉल्स", "रॉ पॉइंटर डेरिफरेंसिंग", "इनलाइन असेंबली", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "How do you create a HashSet?",
        "question_hi": "HashSet कैसे बनाते हैं?",
        "options_en": ["HashSet::new()", "Set::new()", "new HashSet()", "create_hashset()"],
        "options_hi": ["HashSet::new()", "Set::new()", "new HashSet()", "create_hashset()"],
        "answer_en": "HashSet::new()",
        "answer_hi": "HashSet::new()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What does 'pub' modifier do?",
        "question_hi": "'pub' मॉडिफायर क्या करता है?",
        "options_en": ["Makes item public", "Makes item private", "Publishes item", "Exports item"],
        "options_hi": ["आइटम को पब्लिक बनाता है", "आइटम को प्राइवेट बनाता है", "आइटम पब्लिश करता है", "आइटम एक्सपोर्ट करता है"],
        "answer_en": "Makes item public",
        "answer_hi": "आइटम को पब्लिक बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which trait provides partial ordering?",
        "question_hi": "कौन सा ट्रेट पार्शियल ऑर्डरिंग प्रोवाइड करता है?",
        "options_en": ["PartialOrd", "Ord", "Order", "Compare"],
        "options_hi": ["PartialOrd", "Ord", "Order", "Compare"],
        "answer_en": "PartialOrd",
        "answer_hi": "PartialOrd",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What prevents data races?",
        "question_hi": "डेटा रेस क्या रोकता है?",
        "options_en": ["Ownership system", "Borrow checker", "Both A and B", "Thread scheduler"],
        "options_hi": ["ओनरशिप सिस्टम", "बोरो चेकर", "A और B दोनों", "थ्रेड स्केड्यूलर"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How do you write to a file?",
        "question_hi": "फाइल में कैसे लिखते हैं?",
        "options_en": ["fs::write()", "File::create()", "Both A and B", "file.write_all()"],
        "options_hi": ["fs::write()", "File::create()", "A और B दोनों", "file.write_all()"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is a smart pointer?",
        "question_hi": "स्मार्ट पॉइंटर क्या है?",
        "options_en": ["Pointer with extra semantics", "Automatic pointer", "Safe pointer", "Heap pointer"],
        "options_hi": ["एक्स्ट्रा सेमेंटिक्स वाला पॉइंटर", "ऑटोमैटिक पॉइंटर", "सेफ पॉइंटर", "हीप पॉइंटर"],
        "answer_en": "Pointer with extra semantics",
        "answer_hi": "एक्स्ट्रा सेमेंटिक्स वाला पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which macro creates documentation?",
        "question_hi": "कौन सा मैक्रो डॉक्यूमेंटेशन बनाता है?",
        "options_en": ["///", "//!", "#[doc]", "All of the above"],
        "options_hi": ["///", "//!", "#[doc]", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What does Self represent?",
        "question_hi": "Self क्या रिप्रेजेंट करता है?",
        "options_en": ["Current type", "Self reference", "Static type", "Trait type"],
        "options_hi": ["करंट टाइप", "सेल्फ रिफरेन्स", "स्टैटिक टाइप", "ट्रेट टाइप"],
        "answer_en": "Current type",
        "answer_hi": "करंट टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How do you share data between threads?",
        "question_hi": "थ्रेड्स के बीच डेटा कैसे शेयर करते हैं?",
        "options_en": ["Arc<T>", "Mutex<T>", "Both A and B", "static variables"],
        "options_hi": ["Arc<T>", "Mutex<T>", "A और B दोनों", "static वेरिएबल्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is an iterator adapter?",
        "question_hi": "इटरेटर एडाप्टर क्या है?",
        "options_en": ["Method that transforms iterator", "Iterator wrapper", "Both A and B", "Iterator consumer"],
        "options_hi": ["मेथड जो इटरेटर ट्रांसफॉर्म करती है", "इटरेटर रैपर", "A और B दोनों", "इटरेटर कंज्यूमर"],
        "answer_en": "Method that transforms iterator",
        "answer_hi": "मेथड जो इटरेटर ट्रांसफॉर्म करती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What does try! macro do?",
        "question_hi": "try! मैक्रो क्या करता है?",
        "options_en": ["Early return on error", "Error conversion", "Both A and B", "Error logging"],
        "options_hi": ["एरर पर अर्ली रिटर्न", "एरर कन्वर्जन", "A और B दोनों", "एरर लॉगिंग"],
        "answer_en": "Early return on error",
        "answer_hi": "एरर पर अर्ली रिटर्न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What are channels for?",
        "question_hi": "चैनल्स किस लिए हैं?",
        "options_en": ["Thread communication", "Message passing", "Both A and B", "Network communication"],
        "options_hi": ["थ्रेड कम्युनिकेशन", "मैसेज पासिंग", "A और B दोनों", "नेटवर्क कम्युनिकेशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How do you define tuple structs?",
        "question_hi": "tuple structs कैसे डिफाइन करते हैं?",
        "options_en": ["struct Name(Type1, Type2)", "tuple struct Name", "struct Name tuple", "Name(struct)"],
        "options_hi": ["struct Name(Type1, Type2)", "tuple struct Name", "struct Name tuple", "Name(struct)"],
        "answer_en": "struct Name(Type1, Type2)",
        "answer_hi": "struct Name(Type1, Type2)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What are enum variants?",
        "question_hi": "enum वेरिएंट्स क्या हैं?",
        "options_en": ["Possible values of enum", "Enum methods", "Enum types", "Enum fields"],
        "options_hi": ["enum के संभावित मान", "enum मेथड्स", "enum टाइप्स", "enum फील्ड्स"],
        "answer_en": "Possible values of enum",
        "answer_hi": "enum के संभावित मान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which trait provides ordering?",
        "question_hi": "कौन सा ट्रेट ऑर्डरिंग प्रोवाइड करता है?",
        "options_en": ["Ord", "Order", "Compare", "Sort"],
        "options_hi": ["Ord", "Order", "Compare", "Sort"],
        "answer_en": "Ord",
        "answer_hi": "Ord",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is lifetime elision?",
        "question_hi": "लाइफटाइम एलिजन क्या है?",
        "options_en": ["Automatic lifetime inference", "Lifetime syntax sugar", "Both A and B", "Lifetime removal"],
        "options_hi": ["ऑटोमैटिक लाइफटाइम इन्फेरेंस", "लाइफटाइम सिंटैक्स शुगर", "A और B दोनों", "लाइफटाइम रिमूवल"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How do you get array length?",
        "question_hi": "ऐरे लेंथ कैसे प्राप्त करते हैं?",
        "options_en": [".len() method", "sizeof array", "array.length", "length(array)"],
        "options_hi": [".len() मेथड", "sizeof array", "array.length", "length(array)"],
        "answer_en": ".len() method",
        "answer_hi": ".len() मेथड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is async/await for?",
        "question_hi": "async/await किस लिए है?",
        "options_en": ["Non-blocking operations", "Concurrent programming", "Both A and B", "Parallel execution"],
        "options_hi": ["नॉन-ब्लॉकिंग ऑपरेशन्स", "कंकरंट प्रोग्रामिंग", "A और B दोनों", "पैरेलल एक्जीक्यूशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "How do you handle unreachable code?",
        "question_hi": "अनरीचेबल कोड को कैसे हैंडल करते हैं?",
        "options_en": ["unreachable!()", "panic!()", "Both A and B", "compile_error!()"],
        "options_hi": ["unreachable!()", "panic!()", "A और B दोनों", "compile_error!()"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is Rc<T> limitation?",
        "question_hi": "Rc<T> की क्या सीमा है?",
        "options_en": ["Not thread-safe", "No mutable access", "Both A and B", "No reference counting"],
        "options_hi": ["थ्रेड-सेफ नहीं", "म्यूटेबल एक्सेस नहीं", "A और B दोनों", "रिफरेन्स काउंटिंग नहीं"],
        "answer_en": "Not thread-safe",
        "answer_hi": "थ्रेड-सेफ नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "How do you implement multiple traits?",
        "question_hi": "मल्टीपल ट्रेट्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Separate impl blocks", "Single impl with multiple traits", "Both A and B", "trait impl for Type"],
        "options_hi": ["अलग impl ब्लॉक्स", "मल्टीपल ट्रेट्स के साथ सिंगल impl", "A और B दोनों", "trait impl for Type"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is Arc<T> advantage?",
        "question_hi": "Arc<T> का क्या फायदा है?",
        "options_en": ["Thread-safe reference counting", "Automatic memory management", "Faster than Rc", "Smaller memory footprint"],
        "options_hi": ["थ्रेड-सेफ रिफरेन्स काउंटिंग", "ऑटोमैटिक मेमोरी मैनेजमेंट", "Rc से तेज", "छोटा मेमोरी फुटप्रिंट"],
        "answer_en": "Thread-safe reference counting",
        "answer_hi": "थ्रेड-सेफ रिफरेन्स काउंटिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which trait is for user-facing output?",
        "question_hi": "यूजर-फेसिंग आउटपुट के लिए कौन सा ट्रेट है?",
        "options_en": ["Display", "Debug", "Print", "Show"],
        "options_hi": ["Display", "Debug", "Print", "Show"],
        "answer_en": "Display",
        "answer_hi": "Display",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is RwLock?",
        "question_hi": "RwLock क्या है?",
        "options_en": ["Reader-writer lock", "Multiple readers or one writer", "Both A and B", "Recursive lock"],
        "options_hi": ["रीडर-राइटर लॉक", "मल्टीपल रीडर्स या एक राइटर", "A और B दोनों", "रिकर्सिव लॉक"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How do you destructure tuples?",
        "question_hi": "tuples को कैसे डीस्ट्रक्चर करते हैं?",
        "options_en": ["let (a, b) = tuple", "tuple.destructure()", "destructure tuple", "tuple.(a, b)"],
        "options_hi": ["let (a, b) = tuple", "tuple.destructure()", "destructure tuple", "tuple.(a, b)"],
        "answer_en": "let (a, b) = tuple",
        "answer_hi": "let (a, b) = tuple",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does Drop trait provide?",
        "question_hi": "Drop ट्रेट क्या प्रोवाइड करता है?",
        "options_en": ["Custom cleanup logic", "Automatic memory free", "Both A and B", "Resource finalization"],
        "options_hi": ["कस्टम क्लीनअप लॉजिक", "ऑटोमैटिक मेमोरी फ्री", "A और B दोनों", "रिसोर्स फाइनलाइज़ेशन"],
        "answer_en": "Custom cleanup logic",
        "answer_hi": "कस्टम क्लीनअप लॉजिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "How do you check string length?",
        "question_hi": "स्ट्रिंग लेंथ कैसे चेक करते हैं?",
        "options_en": [".len() method", ".length() method", "sizeof string", "string_size()"],
        "options_hi": [".len() मेथड", ".length() मेथड", "sizeof string", "string_size()"],
        "answer_en": ".len() method",
        "answer_hi": ".len() मेथड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is PhantomData for?",
        "question_hi": "PhantomData किस लिए है?",
        "options_en": ["Type system marker", "Ghost data", "Compile-time data", "All of the above"],
        "options_hi": ["टाइप सिस्टम मार्कर", "घोस्ट डेटा", "कंपाइल-टाइम डेटा", "उपरोक्त सभी"],
        "answer_en": "Type system marker",
        "answer_hi": "टाइप सिस्टम मार्कर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "How do you create exclusive range?",
        "question_hi": "एक्सक्लूसिव range कैसे बनाते हैं?",
        "options_en": ["0..10", "0 to 9", "range(0, 10)", "0..=9"],
        "options_hi": ["0..10", "0 to 9", "range(0, 10)", "0..=9"],
        "answer_en": "0..10",
        "answer_hi": "0..10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is RefCell for?",
        "question_hi": "RefCell किस लिए है?",
        "options_en": ["Interior mutability with runtime checks", "Reference counting", "Cell operations", "Borrow checking"],
        "options_hi": ["रनटाइम चेक्स के साथ इंटीरियर म्यूटेबिलिटी", "रिफरेन्स काउंटिंग", "सेल ऑपरेशन्स", "बोरो चेकिंग"],
        "answer_en": "Interior mutability with runtime checks",
        "answer_hi": "रनटाइम चेक्स के साथ इंटीरियर म्यूटेबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which trait is for equality?",
        "question_hi": "इक्वलिटी के लिए कौन सा ट्रेट है?",
        "options_en": ["PartialEq", "Eq", "Both A and B", "Equal"],
        "options_hi": ["PartialEq", "Eq", "A और B दोनों", "Equal"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is a workspace?",
        "question_hi": "वर्कस्पेस क्या है?",
        "options_en": ["Collection of related packages", "Development environment", "Both A and B", "Code editor"],
        "options_hi": ["संबंधित पैकेजों का संग्रह", "डेवलपमेंट एनवायरनमेंट", "A और B दोनों", "कोड एडिटर"],
        "answer_en": "Collection of related packages",
        "answer_hi": "संबंधित पैकेजों का संग्रह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is char type for?",
        "question_hi": "char टाइप किस लिए है?",
        "options_en": ["Unicode scalar value", "ASCII character", "Both A and B", "Byte character"],
        "options_hi": ["यूनिकोड स्केलर वैल्यू", "ASCII कैरेक्टर", "A और B दोनों", "बाइट कैरेक्टर"],
        "answer_en": "Unicode scalar value",
        "answer_hi": "यूनिकोड स्केलर वैल्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the unit type?",
        "question_hi": "यूनिट टाइप क्या है?",
        "options_en": ["()", "unit", "void", "none"],
        "options_hi": ["()", "unit", "void", "none"],
        "answer_en": "()",
        "answer_hi": "()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "How do you remove from vector?",
        "question_hi": "वेक्टर से कैसे रिमूव करते हैं?",
        "options_en": [".remove()", ".pop()", "Both A and B", ".delete()"],
        "options_hi": [".remove()", ".pop()", "A और B दोनों", ".delete()"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What does Send allow?",
        "question_hi": "Send क्या अनुमति देता है?",
        "options_en": ["Transfer between threads", "Network transmission", "Both A and B", "Memory sharing"],
        "options_hi": ["थ्रेड्स के बीच ट्रांसफर", "नेटवर्क ट्रांसमिशन", "A और B दोनों", "मेमोरी शेयरिंग"],
        "answer_en": "Transfer between threads",
        "answer_hi": "थ्रेड्स के बीच ट्रांसफर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "How do you dereference raw pointers?",
        "question_hi": "रॉ पॉइंटर्स को कैसे डेरिफरेंस करते हैं?",
        "options_en": ["unsafe { *ptr }", "ptr.deref()", "deref(ptr)", "&*ptr"],
        "options_hi": ["unsafe { *ptr }", "ptr.deref()", "deref(ptr)", "&*ptr"],
        "answer_en": "unsafe { *ptr }",
        "answer_hi": "unsafe { *ptr }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What does Sync guarantee?",
        "question_hi": "Sync क्या गारंटी देता है?",
        "options_en": ["Safe reference sharing between threads", "Synchronized access", "Both A and B", "Atomic operations"],
        "options_hi": ["थ्रेड्स के बीच सेफ रिफरेन्स शेयरिंग", "सिंक्रोनाइज्ड एक्सेस", "A और B दोनों", "एटॉमिक ऑपरेशन्स"],
        "answer_en": "Safe reference sharing between threads",
        "answer_hi": "थ्रेड्स के बीच सेफ रिफरेन्स शेयरिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "How do you handle multiple errors?",
        "question_hi": "मल्टीपल एरर्स को कैसे हैंडल करते हैं?",
        "options_en": ["? operator", "map_err()", "Both A and B", "unwrap()"],
        "options_hi": ["? ऑपरेटर", "map_err()", "A और B दोनों", "unwrap()"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is const evaluation?",
        "question_hi": "कॉन्स्ट एवेलुएशन क्या है?",
        "options_en": ["Compile-time computation", "Constant folding", "Both A and B", "Runtime evaluation"],
        "options_hi": ["कंपाइल-टाइम कम्प्यूटेशन", "कॉन्स्टेंट फोल्डिंग", "A और B दोनों", "रनटाइम एवेलुएशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "How do you create TCP connection?",
        "question_hi": "TCP कनेक्शन कैसे बनाते हैं?",
        "options_en": ["TcpStream::connect()", "tcp_connect()", "Tcp::new()", "connect_tcp()"],
        "options_hi": ["TcpStream::connect()", "tcp_connect()", "Tcp::new()", "connect_tcp()"],
        "answer_en": "TcpStream::connect()",
        "answer_hi": "TcpStream::connect()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is turbofish syntax?",
        "question_hi": "टर्बोफिश सिंटैक्स क्या है?",
        "options_en": ["::<> for type annotation", "Generic type specification", "Both A and B", "Function type annotation"],
        "options_hi": ["टाइप एनोटेशन के लिए ::<>", "जेनेरिक टाइप स्पेसिफिकेशन", "A और B दोनों", "फंक्शन टाइप एनोटेशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which traits convert types?",
        "question_hi": "कौन से ट्रेट्स टाइप्स कन्वर्ट करते हैं?",
        "options_en": ["From and Into", "AsRef and AsMut", "Both A and B", "Convert and Transform"],
        "options_hi": ["From और Into", "AsRef और AsMut", "A और B दोनों", "Convert और Transform"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is associated type?",
        "question_hi": "एसोसिएटेड टाइप क्या है?",
        "options_en": ["Type placeholder in trait", "Type alias in impl", "Both A and B", "Generic type parameter"],
        "options_hi": ["ट्रेट में टाइप प्लेसहोल्डर", "impl में टाइप एलियास", "A और B दोनों", "जेनेरिक टाइप पैरामीटर"],
        "answer_en": "Type placeholder in trait",
        "answer_hi": "ट्रेट में टाइप प्लेसहोल्डर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "How do you use function pointers?",
        "question_hi": "फंक्शन पॉइंटर्स का उपयोग कैसे करते हैं?",
        "options_en": ["fn type", "Function pointer", "Both A and B", "&fn"],
        "options_hi": ["fn टाइप", "फंक्शन पॉइंटर", "A और B दोनों", "&fn"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is () used for?",
        "question_hi": "() का उपयोग किस लिए किया जाता है?",
        "options_en": ["No value", "Unit type", "Both A and B", "Empty tuple"],
        "options_hi": ["कोई वैल्यू नहीं", "यूनिट टाइप", "A और B दोनों", "खाली tuple"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "How do you join strings?",
        "question_hi": "स्ट्रिंग्स को कैसे जॉइन करते हैं?",
        "options_en": [".join() method", "concat! macro", "Both A and B", "+ operator"],
        "options_hi": [".join() मेथड", "concat! मैक्रो", "A और B दोनों", "+ ऑपरेटर"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What are declarative macros?",
        "question_hi": "डिक्लेरेटिव मैक्रोस क्या हैं?",
        "options_en": ["macro_rules! macros", "Pattern-based macros", "Both A and B", "Function-like macros"],
        "options_hi": ["macro_rules! मैक्रोस", "पैटर्न-बेस्ड मैक्रोस", "A और B दोनों", "फंक्शन-लाइक मैक्रोस"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "How do you serialize data?",
        "question_hi": "डेटा को कैसे सीरियलाइज़ करते हैं?",
        "options_en": ["serde library", "Serialize trait", "Both A and B", "json crate"],
        "options_hi": ["serde लाइब्रेरी", "Serialize ट्रेट", "A और B दोनों", "json क्रेट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is zero-cost abstraction?",
        "question_hi": "जीरो-कॉस्ट एब्स्ट्रैक्शन क्या है?",
        "options_en": ["No runtime overhead", "Compile-time optimization", "Both A and B", "Free abstractions"],
        "options_hi": ["कोई रनटाइम ओवरहेड नहीं", "कंपाइल-टाइम ऑप्टिमाइज़ेशन", "A और B दोनों", "फ्री एब्स्ट्रैक्शन्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "How can main return Result?",
        "question_hi": "main Result कैसे रिटर्न कर सकता है?",
        "options_en": ["-> Result<(), E>", "Using ? operator", "Both A and B", "panic on error"],
        "options_hi": ["-> Result<(), E>", "? ऑपरेटर का उपयोग करके", "A और B दोनों", "एरर पर पैनिक"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is Pin for?",
        "question_hi": "Pin किस लिए है?",
        "question_en": "Preventing moves in self-referential structs",
        "question_hi": "सेल्फ-रेफरेंशियल स्ट्रक्चर्स में मूव्स रोकना",
        "options_en": ["Memory pinning", "Async guarantees", "All of the above"],
        "options_hi": ["मेमोरी पिनिंग", "Async गारंटी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "How do you bound generic types?",
        "question_hi": "जेनेरिक टाइप्स को कैसे बाउंड करते हैं?",
        "options_en": ["T: Trait", "where clause", "Both A and B", "impl Trait"],
        "options_hi": ["T: Trait", "where क्लॉज", "A और B दोनों", "impl Trait"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What makes trait unsafe?",
        "question_hi": "ट्रेट को unsafe क्या बनाता है?",
        "options_en": ["Unsafe implementation requirements", "Memory safety invariants", "Both A and B", "Unsafe methods"],
        "options_hi": ["अनसेफ इम्प्लीमेंटेशन रिक्वायरमेंट्स", "मेमोरी सेफ्टी इनवेरिएंट्स", "A और B दोनों", "अनसेफ मेथड्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "How do you allocate dynamically?",
        "question_hi": "डायनामिकली कैसे अलोकेट करते हैं?",
        "options_en": ["Box::new()", "Vec::new()", "Both A and B", "malloc equivalent"],
        "options_hi": ["Box::new()", "Vec::new()", "A और B दोनों", "malloc इक्विवेलेंट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What improved NLL?",
        "question_hi": "NLL ने क्या सुधार किया?",
        "options_en": ["Borrow checker precision", "Lifetime inference", "Both A and B", "Compile times"],
        "options_hi": ["बोरो चेकर प्रिसिजन", "लाइफटाइम इन्फेरेंस", "A और B दोनों", "कंपाइल टाइम्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "How to target WebAssembly?",
        "question_hi": "WebAssembly को कैसे टारगेट करते हैं?",
        "options_en": ["wasm32-unknown-unknown", "wasm-bindgen", "Both A and B", "emscripten"],
        "options_hi": ["wasm32-unknown-unknown", "wasm-bindgen", "A और B दोनों", "emscripten"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What are const generics?",
        "question_hi": "कॉन्स्ट जेनेरिक्स क्या हैं?",
        "options_en": ["Generic value parameters", "Compile-time values in generics", "Both A and B", "Constant types"],
        "options_hi": ["जेनेरिक वैल्यू पैरामीटर्स", "जेनेरिक्स में कंपाइल-टाइम वैल्यूज", "A और B दोनों", "कॉन्स्टेंट टाइप्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "How to define async trait methods?",
        "question_hi": "async ट्रेट मेथड्स कैसे डिफाइन करते हैं?",
        "options_en": ["async-trait crate", "Box<dyn Future>", "Both A and B", "native async traits"],
        "options_hi": ["async-trait क्रेट", "Box<dyn Future>", "A और B दोनों", "नेटिव async ट्रेट्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is tokio's purpose?",
        "question_hi": "tokio का उद्देश्य क्या है?",
        "options_en": ["Async runtime", "I/O operations", "Both A and B", "Synchronous runtime"],
        "options_hi": ["Async रनटाइम", "I/O ऑपरेशन्स", "A और B दोनों", "सिंक्रोनस रनटाइम"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "How to create trait objects?",
        "question_hi": "ट्रेट ऑब्जेक्ट्स कैसे बनाते हैं?",
        "options_en": ["&dyn Trait", "Box<dyn Trait>", "Both A and B", "dyn Trait"],
        "options_hi": ["&dyn Trait", "Box<dyn Trait>", "A और B दोनों", "dyn Trait"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is no_std for?",
        "question_hi": "no_std किस लिए है?",
        "options_en": ["Embedded systems", "Kernel development", "Both A and B", "Web development"],
        "options_hi": ["एम्बेडेड सिस्टम्स", "कर्नल डेवलपमेंट", "A और B दोनों", "वेब डेवलपमेंट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "How to copy memory safely?",
        "question_hi": "मेमोरी को सेफली कैसे कॉपी करते हैं?",
        "options_en": ["copy_from_slice()", "clone() for types", "Both A and B", "memcpy equivalent"],
        "options_hi": ["copy_from_slice()", "टाइप्स के लिए clone()", "A और B दोनों", "memcpy इक्विवेलेंट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What does Rustonomicon cover?",
        "question_hi": "Rustonomicon क्या कवर करता है?",
        "options_en": ["Unsafe Rust guidelines", "Advanced patterns", "Both A and B", "Basic syntax"],
        "options_hi": ["अनसेफ Rust गाइडलाइन्स", "एडवांस्ड पैटर्न्स", "A और B दोनों", "बेसिक सिंटैक्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "How to use SIMD?",
        "question_hi": "SIMD का उपयोग कैसे करते हैं?",
        "options_en": ["std::simd", "Architecture intrinsics", "Both A and B", "Auto-vectorization"],
        "options_hi": ["std::simd", "आर्किटेक्चर इंट्रिंसिक्स", "A और B दोनों", "ऑटो-वेक्टराइज़ेशन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is FFI used for?",
        "question_hi": "FFI का उपयोग किस लिए किया जाता है?",
        "options_en": ["C interoperability", "System calls", "Both A and B", "Network calls"],
        "options_hi": ["C इंटरऑपरेबिलिटी", "सिस्टम कॉल्स", "A और B दोनों", "नेटवर्क कॉल्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "How to manipulate bits?",
        "question_hi": "बिट्स को कैसे मैनिपुलेट करते हैं?",
        "options_en": ["Bitwise operators", "Bit manipulation methods", "Both A and B", "Bit fields"],
        "options_hi": ["बिटवाइज ऑपरेटर्स", "बिट मैनिपुलेशन मेथड्स", "A और B दोनों", "बिट फील्ड्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What does cargo clippy do?",
        "question_hi": "cargo clippy क्या करता है?",
        "options_en": ["Code linting", "Style suggestions", "Both A and B", "Code formatting"],
        "options_hi": ["कोड लिंटिंग", "स्टाइल सजेशन्स", "A और B दोनों", "कोड फॉर्मेटिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
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