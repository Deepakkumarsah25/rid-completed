const questions=[
    {
        "num": 1,
        "question_en": "What is the primary purpose of Rust's borrow checker?",
        "question_hi": "Rust के borrow checker का प्राथमिक उद्देश्य क्या है?",
        "options_en": ["Prevent data races at compile time", "Manage memory allocation", "Optimize code performance", "Handle errors automatically"],
        "options_hi": ["कम्पाइल टाइम पर डेटा रेस को रोकना", "मेमोरी अलोकेशन प्रबंधित करना", "कोड परफॉर्मेंस ऑप्टिमाइज़ करना", "एरर ऑटोमैटिकली हैंडल करना"],
        "answer_en": "Prevent data races at compile time",
        "answer_hi": "कम्पाइल टाइम पर डेटा रेस को रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which Rust feature ensures memory safety without garbage collection?",
        "question_hi": "कौन सी Rust विशेषता गार्बेज कलेक्शन के बिना मेमोरी सुरक्षा सुनिश्चित करती है?",
        "options_en": ["Ownership system", "Smart pointers", "Lifetimes", "All of the above"],
        "options_hi": ["ओनरशिप सिस्टम", "स्मार्ट पॉइंटर्स", "लाइफटाइम्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What does Rust's 'zero-cost abstractions' principle mean?",
        "question_hi": "Rust का 'जीरो-कॉस्ट एब्स्ट्रैक्शन' सिद्धांत क्या मतलब है?",
        "options_en": ["Abstractions don't incur runtime overhead", "Free to use abstractions", "No compilation cost", "Automatic optimization"],
        "options_hi": ["एब्स्ट्रैक्शन रनटाइम ओवरहेड नहीं लगाते", "एब्स्ट्रैक्शन मुफ्त में यूज करें", "कोई कम्पाइलेशन कॉस्ट नहीं", "ऑटोमैटिक ऑप्टिमाइज़ेशन"],
        "answer_en": "Abstractions don't incur runtime overhead",
        "answer_hi": "एब्स्ट्रैक्शन रनटाइम ओवरहेड नहीं लगाते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How does Rust handle null pointer exceptions?",
        "question_hi": "Rust नल पॉइंटर एक्सेप्शन को कैसे हैंडल करता है?",
        "options_en": ["Using Option type instead of null", "Automatic null checking", "Compile-time null prevention", "Runtime null detection"],
        "options_hi": ["नल के बजाय Option टाइप का उपयोग", "ऑटोमैटिक नल चेकिंग", "कम्पाइल-टाइम नल प्रिवेंशन", "रनटाइम नल डिटेक्शन"],
        "answer_en": "Using Option type instead of null",
        "answer_hi": "नल के बजाय Option टाइप का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of Rust's 'match' expression?",
        "question_hi": "Rust के 'match' एक्सप्रेशन का उद्देश्य क्या है?",
        "options_en": ["Exhaustive pattern matching", "String comparison", "Loop control", "Error handling"],
        "options_hi": ["एक्जॉस्टिव पैटर्न मैचिंग", "स्ट्रिंग कम्पेरिजन", "लूप कंट्रोल", "एरर हैंडलिंग"],
        "answer_en": "Exhaustive pattern matching",
        "answer_hi": "एक्जॉस्टिव पैटर्न मैचिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which Rust construct is used for error handling without exceptions?",
        "question_hi": "एक्सेप्शन के बिना एरर हैंडलिंग के लिए किस Rust कंस्ट्रक्ट का उपयोग किया जाता है?",
        "options_en": ["Result type", "Option type", "panic! macro", "unwrap method"],
        "options_hi": ["Result टाइप", "Option टाइप", "panic! मैक्रो", "unwrap मेथड"],
        "answer_en": "Result type",
        "answer_hi": "Result टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What does Rust's 'Send' trait indicate?",
        "question_hi": "Rust का 'Send' trait क्या इंडिकेट करता है?",
        "options_en": ["Type can be transferred between threads", "Type can be serialized", "Type can be sent over network", "Type can be copied"],
        "options_hi": ["टाइप थ्रेड्स के बीच ट्रांसफर हो सकता है", "टाइप सीरियलाइज़ हो सकता है", "टाइप नेटवर्क पर भेजा जा सकता है", "टाइप कॉपी हो सकता है"],
        "answer_en": "Type can be transferred between threads",
        "answer_hi": "टाइप थ्रेड्स के बीच ट्रांसफर हो सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you create a thread-safe reference-counted pointer in Rust?",
        "question_hi": "Rust में थ्रेड-सेफ रिफरेन्स-काउंटेड पॉइंटर कैसे बनाते हैं?",
        "options_en": ["Arc<T>", "Rc<T>", "Box<T>", "RefCell<T>"],
        "options_hi": ["Arc<T>", "Rc<T>", "Box<T>", "RefCell<T>"],
        "answer_en": "Arc<T>",
        "answer_hi": "Arc<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of Rust's 'Drop' trait?",
        "question_hi": "Rust के 'Drop' trait का उद्देश्य क्या है?",
        "options_en": ["Custom cleanup when value goes out of scope", "Automatic memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["वैल्यू के स्कोप से बाहर जाने पर कस्टम क्लीनअप", "ऑटोमैटिक मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Custom cleanup when value goes out of scope",
        "answer_hi": "वैल्यू के स्कोप से बाहर जाने पर कस्टम क्लीनअप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which Rust feature allows writing code that works with multiple types?",
        "question_hi": "कौन सी Rust विशेषता मल्टीपल टाइप्स के साथ काम करने वाला कोड लिखने की अनुमति देती है?",
        "options_en": ["Generics", "Traits", "Enums", "Macros"],
        "options_hi": ["जेनरिक्स", "ट्रेट्स", "एनम्स", "मैक्रोज़"],
        "answer_en": "Generics",
        "answer_hi": "जेनरिक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of Rust's 'unsafe' keyword?",
        "question_hi": "Rust के 'unsafe' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Enable operations that bypass compiler checks", "Disable all safety checks", "Make code faster", "Handle errors"],
        "options_hi": ["कम्पाइलर चेक बायपास करने वाले ऑपरेशन एनेबल करना", "सभी सेफ्टी चेक डिसेबल करना", "कोड को तेज बनाना", "एरर हैंडल करना"],
        "answer_en": "Enable operations that bypass compiler checks",
        "answer_hi": "कम्पाइलर चेक बायपास करने वाले ऑपरेशन एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you define a trait in Rust?",
        "question_hi": "Rust में trait कैसे डिफाइन करते हैं?",
        "options_en": ["trait MyTrait { fn method(&self); }", "struct trait MyTrait { }", "interface MyTrait { }", "define trait MyTrait;"],
        "options_hi": ["trait MyTrait { fn method(&self); }", "struct trait MyTrait { }", "interface MyTrait { }", "define trait MyTrait;"],
        "answer_en": "trait MyTrait { fn method(&self); }",
        "answer_hi": "trait MyTrait { fn method(&self); }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of Rust's 'Cow' (Clone on Write) type?",
        "question_hi": "Rust के 'Cow' (Clone on Write) टाइप का उद्देश्य क्या है?",
        "options_en": ["Efficient borrowing with optional cloning", "Automatic copying", "Memory allocation", "Thread synchronization"],
        "options_hi": ["ऑप्शनल क्लोनिंग के साथ एफिशिएंट बोरोइंग", "ऑटोमैटिक कॉपीिंग", "मेमोरी अलोकेशन", "थ्रेड सिंक्रोनाइज़ेशन"],
        "answer_en": "Efficient borrowing with optional cloning",
        "answer_hi": "ऑप्शनल क्लोनिंग के साथ एफिशिएंट बोरोइंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which Rust construct is used for asynchronous programming?",
        "question_hi": "एसिंक्रोनस प्रोग्रामिंग के लिए किस Rust कंस्ट्रक्ट का उपयोग किया जाता है?",
        "options_en": ["async/await", "threads", "closures", "iterators"],
        "options_hi": ["async/await", "थ्रेड्स", "क्लोजर्स", "इटरेटर्स"],
        "answer_en": "async/await",
        "answer_hi": "async/await",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of Rust's 'PhantomData' marker?",
        "question_hi": "Rust के 'PhantomData' मार्कर का उद्देश्य क्या है?",
        "options_en": ["Mark unused type parameters for safety", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["सेफ्टी के लिए अनयूज्ड टाइप पैरामीटर मार्क करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Mark unused type parameters for safety",
        "answer_hi": "सेफ्टी के लिए अनयूज्ड टाइप पैरामीटर मार्क करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you handle multiple error types in Rust?",
        "question_hi": "Rust में मल्टीपल एरर टाइप्स कैसे हैंडल करते हैं?",
        "options_en": ["Use Box<dyn Error> or custom error types", "Use multiple match statements", "Ignore errors", "Use panic"],
        "options_hi": ["Box<dyn Error> या कस्टम एरर टाइप्स का उपयोग करें", "मल्टीपल match स्टेटमेंट्स का उपयोग करें", "एरर इग्नोर करें", "panic का उपयोग करें"],
        "answer_en": "Use Box<dyn Error> or custom error types",
        "answer_hi": "Box<dyn Error> या कस्टम एरर टाइप्स का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of Rust's 'Any' trait?",
        "question_hi": "Rust के 'Any' trait का उद्देश्य क्या है?",
        "options_en": ["Runtime type reflection and downcasting", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["रनटाइम टाइप रिफ्लेक्शन और डाउनकास्टिंग", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Runtime type reflection and downcasting",
        "answer_hi": "रनटाइम टाइप रिफ्लेक्शन और डाउनकास्टिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which Rust feature allows compile-time metaprogramming?",
        "question_hi": "कौन सी Rust विशेषता कम्पाइल-टाइम मेटाप्रोग्रामिंग की अनुमति देती है?",
        "options_en": ["Procedural macros", "Functions", "Traits", "Enums"],
        "options_hi": ["प्रोसीजरल मैक्रोज़", "फंक्शन्स", "ट्रेट्स", "एनम्स"],
        "answer_en": "Procedural macros",
        "answer_hi": "प्रोसीजरल मैक्रोज़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of Rust's 'Deref' trait?",
        "question_hi": "Rust के 'Deref' trait का उद्देश्य क्या है?",
        "options_en": ["Enable dereference operator (*) overloading", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["डिरेफरेन्स ऑपरेटर (*) ओवरलोडिंग एनेबल करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Enable dereference operator (*) overloading",
        "answer_hi": "डिरेफरेन्स ऑपरेटर (*) ओवरलोडिंग एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you create a custom iterator in Rust?",
        "question_hi": "Rust में कस्टम इटरेटर कैसे बनाते हैं?",
        "options_en": ["Implement Iterator trait for a type", "Use iter() method", "Create a vector", "Use for loop"],
        "options_hi": ["टाइप के लिए Iterator trait इम्प्लीमेंट करें", "iter() मेथड यूज करें", "वेक्टर बनाएँ", "for loop यूज करें"],
        "answer_en": "Implement Iterator trait for a type",
        "answer_hi": "टाइप के लिए Iterator trait इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of Rust's 'From' and 'Into' traits?",
        "question_hi": "Rust के 'From' और 'Into' traits का उद्देश्य क्या है?",
        "options_en": ["Type conversion with guaranteed success", "Error handling", "Memory allocation", "Pattern matching"],
        "options_hi": ["गारंटीड सक्सेस के साथ टाइप कन्वर्जन", "एरर हैंडलिंग", "मेमोरी अलोकेशन", "पैटर्न मैचिंग"],
        "answer_en": "Type conversion with guaranteed success",
        "answer_hi": "गारंटीड सक्सेस के साथ टाइप कन्वर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which Rust feature allows writing DSLs (Domain Specific Languages)?",
        "question_hi": "कौन सी Rust विशेषता DSLs (डोमेन स्पेसिफिक लैंग्वेजेज) लिखने की अनुमति देती है?",
        "options_en": ["Macros", "Traits", "Generics", "Enums"],
        "options_hi": ["मैक्रोज़", "ट्रेट्स", "जेनरिक्स", "एनम्स"],
        "answer_en": "Macros",
        "answer_hi": "मैक्रोज़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of Rust's 'Cell' and 'RefCell' types?",
        "question_hi": "Rust के 'Cell' और 'RefCell' टाइप्स का उद्देश्य क्या है?",
        "options_en": ["Interior mutability", "Thread safety", "Memory allocation", "Error handling"],
        "options_hi": ["इंटीरियर म्यूटेबिलिटी", "थ्रेड सेफ्टी", "मेमोरी अलोकेशन", "एरर हैंडलिंग"],
        "answer_en": "Interior mutability",
        "answer_hi": "इंटीरियर म्यूटेबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How does Rust ensure thread safety?",
        "question_hi": "Rust थ्रेड सेफ्टी कैसे सुनिश्चित करता है?",
        "options_en": ["Ownership system and type system", "Runtime checks", "Garbage collection", "Manual locking"],
        "options_hi": ["ओनरशिप सिस्टम और टाइप सिस्टम", "रनटाइम चेक्स", "गार्बेज कलेक्शन", "मैनुअल लॉकिंग"],
        "answer_en": "Ownership system and type system",
        "answer_hi": "ओनरशिप सिस्टम और टाइप सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of Rust's 'Box' smart pointer?",
        "question_hi": "Rust के 'Box' स्मार्ट पॉइंटर का उद्देश्य क्या है?",
        "options_en": ["Heap allocation with ownership", "Reference counting", "Automatic dereferencing", "Thread safety"],
        "options_hi": ["ओनरशिप के साथ हीप अलोकेशन", "रिफरेन्स काउंटिंग", "ऑटोमैटिक डिरेफरेंसिंग", "थ्रेड सेफ्टी"],
        "answer_en": "Heap allocation with ownership",
        "answer_hi": "ओनरशिप के साथ हीप अलोकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which Rust feature allows writing generic code that works with any type implementing specific behavior?",
        "question_hi": "कौन सी Rust विशेषता जेनरिक कोड लिखने की अनुमति देती है जो स्पेसिफिक बिहेवियर इम्प्लीमेंट करने वाले किसी भी टाइप के साथ काम करता है?",
        "options_en": ["Trait bounds", "Generics", "Macros", "Enums"],
        "options_hi": ["ट्रेट बाउंड्स", "जेनरिक्स", "मैक्रोज़", "एनम्स"],
        "answer_en": "Trait bounds",
        "answer_hi": "ट्रेट बाउंड्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of Rust's '?' operator?",
        "question_hi": "Rust के '?' ऑपरेटर का उद्देश्य क्या है?",
        "options_en": ["Error propagation", "Optional values", "Boolean operations", "String operations"],
        "options_hi": ["एरर प्रोपेगेशन", "ऑप्शनल वैल्यूज", "बूलियन ऑपरेशन्स", "स्ट्रिंग ऑपरेशन्स"],
        "answer_en": "Error propagation",
        "answer_hi": "एरर प्रोपेगेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How do you create a thread in Rust?",
        "question_hi": "Rust में थ्रेड कैसे बनाते हैं?",
        "options_en": ["std::thread::spawn()", "Thread::new()", "spawn_thread()", "create_thread()"],
        "options_hi": ["std::thread::spawn()", "Thread::new()", "spawn_thread()", "create_thread()"],
        "answer_en": "std::thread::spawn()",
        "answer_hi": "std::thread::spawn()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of Rust's 'Mutex' type?",
        "question_hi": "Rust के 'Mutex' टाइप का उद्देश्य क्या है?",
        "options_en": ["Thread-safe interior mutability", "Memory allocation", "Automatic locking", "Reference counting"],
        "options_hi": ["थ्रेड-सेफ इंटीरियर म्यूटेबिलिटी", "मेमोरी अलोकेशन", "ऑटोमैटिक लॉकिंग", "रिफरेन्स काउंटिंग"],
        "answer_en": "Thread-safe interior mutability",
        "answer_hi": "थ्रेड-सेफ इंटीरियर म्यूटेबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which Rust feature allows compile-time function evaluation?",
        "question_hi": "कौन सी Rust विशेषता कम्पाइल-टाइम फंक्शन इवैल्यूएशन की अनुमति देती है?",
        "options_en": ["const fn", "static", "macro", "trait"],
        "options_hi": ["const fn", "static", "macro", "trait"],
        "answer_en": "const fn",
        "answer_hi": "const fn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of Rust's 'Clone' trait?",
        "question_hi": "Rust के 'Clone' trait का उद्देश्य क्या है?",
        "options_en": ["Explicit duplication of values", "Automatic copying", "Memory management", "Error handling"],
        "options_hi": ["वैल्यूज की एक्सप्लिसिट डुप्लिकेशन", "ऑटोमैटिक कॉपीिंग", "मेमोरी मैनेजमेंट", "एरर हैंडलिंग"],
        "answer_en": "Explicit duplication of values",
        "answer_hi": "वैल्यूज की एक्सप्लिसिट डुप्लिकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you define associated types in traits?",
        "question_hi": "ट्रेट्स में associated types कैसे डिफाइन करते हैं?",
        "options_en": ["trait MyTrait { type Output; }", "trait MyTrait<Output> {}", "trait MyTrait with Output {}", "trait MyTrait where type Output {}"],
        "options_hi": ["trait MyTrait { type Output; }", "trait MyTrait<Output> {}", "trait MyTrait with Output {}", "trait MyTrait where type Output {}"],
        "answer_en": "trait MyTrait { type Output; }",
        "answer_hi": "trait MyTrait { type Output; }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of Rust's 'Default' trait?",
        "question_hi": "Rust के 'Default' trait का उद्देश्य क्या है?",
        "options_en": ["Provide default values for types", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["टाइप्स के लिए डिफॉल्ट वैल्यूज प्रोवाइड करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Provide default values for types",
        "answer_hi": "टाइप्स के लिए डिफॉल्ट वैल्यूज प्रोवाइड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which Rust feature allows writing code that works with types of unknown size?",
        "question_hi": "कौन सी Rust विशेषता अननोन साइज के टाइप्स के साथ काम करने वाला कोड लिखने की अनुमति देती है?",
        "options_en": ["Trait objects with dyn", "Generics", "Macros", "Enums"],
        "options_hi": ["dyn के साथ ट्रेट ऑब्जेक्ट्स", "जेनरिक्स", "मैक्रोज़", "एनम्स"],
        "answer_en": "Trait objects with dyn",
        "answer_hi": "dyn के साथ ट्रेट ऑब्जेक्ट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of Rust's 'Sized' trait?",
        "question_hi": "Rust के 'Sized' trait का उद्देश्य क्या है?",
        "options_en": ["Mark types with known size at compile time", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["उन टाइप्स को मार्क करना जिनका साइज कम्पाइल टाइम पर ज्ञात हो", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Mark types with known size at compile time",
        "answer_hi": "उन टाइप्स को मार्क करना जिनका साइज कम्पाइल टाइम पर ज्ञात हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do you create a custom error type in Rust?",
        "question_hi": "Rust में कस्टम एरर टाइप कैसे बनाते हैं?",
        "options_en": ["#[derive(Debug)] enum MyError { Variant }", "struct MyError;", "class MyError extends Error {}", "error MyError {}"],
        "options_hi": ["#[derive(Debug)] enum MyError { Variant }", "struct MyError;", "class MyError extends Error {}", "error MyError {}"],
        "answer_en": "#[derive(Debug)] enum MyError { Variant }",
        "answer_hi": "#[derive(Debug)] enum MyError { Variant }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of Rust's 'Fn' traits?",
        "question_hi": "Rust के 'Fn' traits का उद्देश्य क्या है?",
        "options_en": ["Define closure calling behavior", "Function declaration", "Memory allocation", "Error handling"],
        "options_hi": ["क्लोजर कॉलिंग बिहेवियर डिफाइन करना", "फंक्शन डिक्लेरेशन", "मेमोरी अलोकेशन", "एरर हैंडलिंग"],
        "answer_en": "Define closure calling behavior",
        "answer_hi": "क्लोजर कॉलिंग बिहेवियर डिफाइन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which Rust feature allows operator overloading?",
        "question_hi": "कौन सी Rust विशेषता ऑपरेटर ओवरलोडिंग की अनुमति देती है?",
        "options_en": ["Implementing std::ops traits", "Macros", "Special functions", "Compiler flags"],
        "options_hi": ["std::ops traits इम्प्लीमेंट करना", "मैक्रोज़", "स्पेशल फंक्शन्स", "कम्पाइलर फ्लैग्स"],
        "answer_en": "Implementing std::ops traits",
        "answer_hi": "std::ops traits इम्प्लीमेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of Rust's 'Copy' trait?",
        "question_hi": "Rust के 'Copy' trait का उद्देश्य क्या है?",
        "options_en": ["Mark types that can be copied bitwise", "Automatic duplication", "Memory management", "Error handling"],
        "options_hi": ["उन टाइप्स को मार्क करना जो बिटवाइज कॉपी हो सकते हैं", "ऑटोमैटिक डुप्लिकेशन", "मेमोरी मैनेजमेंट", "एरर हैंडलिंग"],
        "answer_en": "Mark types that can be copied bitwise",
        "answer_hi": "उन टाइप्स को मार्क करना जो बिटवाइज कॉपी हो सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How do you create a thread-local variable in Rust?",
        "question_hi": "Rust में थ्रेड-लोकल वेरिएबल कैसे बनाते हैं?",
        "options_en": ["thread_local! { static VAR: i32 = 42; }", "thread_local VAR: i32 = 42;", "static thread_local VAR: i32 = 42;", "let thread_local VAR = 42;"],
        "options_hi": ["thread_local! { static VAR: i32 = 42; }", "thread_local VAR: i32 = 42;", "static thread_local VAR: i32 = 42;", "let thread_local VAR = 42;"],
        "answer_en": "thread_local! { static VAR: i32 = 42; }",
        "answer_hi": "thread_local! { static VAR: i32 = 42; }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of Rust's 'std::mem::replace' function?",
        "question_hi": "Rust के 'std::mem::replace' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Replace a value while returning the old one", "Memory allocation", "Error handling", "Thread synchronization"],
        "options_hi": ["वैल्यू को रिप्लेस करते हुए पुरानी वैल्यू रिटर्न करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "थ्रेड सिंक्रोनाइज़ेशन"],
        "answer_en": "Replace a value while returning the old one",
        "answer_hi": "वैल्यू को रिप्लेस करते हुए पुरानी वैल्यू रिटर्न करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which Rust feature allows you to write conditional compilation?",
        "question_hi": "कौन सी Rust विशेषता कंडीशनल कम्पाइलेशन लिखने की अनुमति देती है?",
        "options_en": ["#[cfg] attribute", "#ifdef directive", "cfg! macro", "Both #[cfg] and cfg!"],
        "options_hi": ["#[cfg] एट्रिब्यूट", "#ifdef डायरेक्टिव", "cfg! मैक्रो", "दोनों #[cfg] और cfg!"],
        "answer_en": "Both #[cfg] and cfg!",
        "answer_hi": "दोनों #[cfg] और cfg!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of Rust's 'std::sync::Barrier'?",
        "question_hi": "Rust के 'std::sync::Barrier' का उद्देश्य क्या है?",
        "options_en": ["Synchronize multiple threads at a point", "Memory allocation", "Error handling", "Data sharing"],
        "options_hi": ["एक पॉइंट पर मल्टीपल थ्रेड्स सिंक्रोनाइज़ करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "डेटा शेयरिंग"],
        "answer_en": "Synchronize multiple threads at a point",
        "answer_hi": "एक पॉइंट पर मल्टीपल थ्रेड्स सिंक्रोनाइज़ करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How do you create a recursive data structure in Rust?",
        "question_hi": "Rust में रिकर्सिव डेटा स्ट्रक्चर कैसे बनाते हैं?",
        "options_en": ["Use Box or other indirection", "Direct recursion", "Use arrays", "Not possible"],
        "options_hi": ["Box या अन्य इंडायरेक्शन यूज करें", "डायरेक्ट रिकर्सन", "ऐरे यूज करें", "संभव नहीं"],
        "answer_en": "Use Box or other indirection",
        "answer_hi": "Box या अन्य इंडायरेक्शन यूज करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of Rust's 'std::pin::Pin' type?",
        "question_hi": "Rust के 'std::pin::Pin' टाइप का उद्देश्य क्या है?",
        "options_en": ["Prevent moving of values in memory", "Memory allocation", "Error handling", "Thread safety"],
        "options_hi": ["मेमोरी में वैल्यूज को मूव होने से रोकना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "थ्रेड सेफ्टी"],
        "answer_en": "Prevent moving of values in memory",
        "answer_hi": "मेमोरी में वैल्यूज को मूव होने से रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which Rust trait is used for formatting output?",
        "question_hi": "आउटपुट फॉर्मेटिंग के लिए किस Rust trait का उपयोग किया जाता है?",
        "options_en": ["Display and Debug", "ToString", "Format", "Print"],
        "options_hi": ["Display और Debug", "ToString", "Format", "Print"],
        "answer_en": "Display and Debug",
        "answer_hi": "Display और Debug",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of Rust's 'std::sync::Once'?",
        "question_hi": "Rust के 'std::sync::Once' का उद्देश्य क्या है?",
        "options_en": ["One-time initialization", "Memory allocation", "Error handling", "Thread creation"],
        "options_hi": ["वन-टाइम इनिशियलाइज़ेशन", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "थ्रेड क्रिएशन"],
        "answer_en": "One-time initialization",
        "answer_hi": "वन-टाइम इनिशियलाइज़ेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you handle panics in Rust?",
        "question_hi": "Rust में पैनिक्स को कैसे हैंडल करते हैं?",
        "options_en": ["catch_unwind or set panic hook", "try-catch blocks", "panic handler", "error types"],
        "options_hi": ["catch_unwind या पैनिक हुक सेट करें", "try-catch ब्लॉक्स", "पैनिक हैंडलर", "एरर टाइप्स"],
        "answer_en": "catch_unwind or set panic hook",
        "answer_hi": "catch_unwind या पैनिक हुक सेट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of Rust's 'std::future::Future' trait?",
        "question_hi": "Rust के 'std::future::Future' trait का उद्देश्य क्या है?",
        "options_en": ["Represent asynchronous computations", "Memory allocation", "Error handling", "Thread management"],
        "options_hi": ["एसिंक्रोनस कंप्यूटेशन्स रिप्रेजेंट करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "थ्रेड मैनेजमेंट"],
        "answer_en": "Represent asynchronous computations",
        "answer_hi": "एसिंक्रोनस कंप्यूटेशन्स रिप्रेजेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which Rust feature allows you to write inline assembly?",
        "question_hi": "कौन सी Rust विशेषता इनलाइन असेंबली लिखने की अनुमति देती है?",
        "options_en": ["asm! macro", "inline assembly block", "assembly! macro", "Not supported"],
        "options_hi": ["asm! मैक्रो", "इनलाइन असेंबली ब्लॉक", "assembly! मैक्रो", "सपोर्टेड नहीं"],
        "answer_en": "asm! macro",
        "answer_hi": "asm! मैक्रो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of Rust's 'std::collections::HashMap'?",
        "question_hi": "Rust के 'std::collections::HashMap' का उद्देश्य क्या है?",
        "options_en": ["Key-value storage with hashing", "Array storage", "Linked list", "Tree structure"],
        "options_hi": ["हैशिंग के साथ की-वैल्यू स्टोरेज", "ऐरे स्टोरेज", "लिंक्ड लिस्ट", "ट्री स्ट्रक्चर"],
        "answer_en": "Key-value storage with hashing",
        "answer_hi": "हैशिंग के साथ की-वैल्यू स्टोरेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How do you implement a trait for a foreign type in Rust?",
        "question_hi": "Rust में फॉरेन टाइप के लिए trait कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use the orphan rule with local trait", "Direct implementation", "Use macros", "Not possible"],
        "options_hi": ["लोकल trait के साथ ऑर्फन रूल यूज करें", "डायरेक्ट इम्प्लीमेंटेशन", "मैक्रोज़ यूज करें", "संभव नहीं"],
        "answer_en": "Use the orphan rule with local trait",
        "answer_hi": "लोकल trait के साथ ऑर्फन रूल यूज करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of Rust's 'std::process::Command'?",
        "question_hi": "Rust के 'std::process::Command' का उद्देश्य क्या है?",
        "options_en": ["Spawn and manage subprocesses", "Thread management", "Memory allocation", "Error handling"],
        "options_hi": ["सबप्रोसेसेज स्पॉन और मैनेज करना", "थ्रेड मैनेजमेंट", "मेमोरी अलोकेशन", "एरर हैंडलिंग"],
        "answer_en": "Spawn and manage subprocesses",
        "answer_hi": "सबप्रोसेसेज स्पॉन और मैनेज करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which Rust feature allows you to write tests?",
        "question_hi": "कौन सी Rust विशेषता टेस्ट्स लिखने की अनुमति देती है?",
        "options_en": ["#[test] attribute and cfg(test)", "test keyword", "testing module", "check macro"],
        "options_hi": ["#[test] एट्रिब्यूट और cfg(test)", "test कीवर्ड", "टेस्टिंग मॉड्यूल", "check मैक्रो"],
        "answer_en": "#[test] attribute and cfg(test)",
        "answer_hi": "#[test] एट्रिब्यूट और cfg(test)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of Rust's 'std::sync::mpsc' channels?",
        "question_hi": "Rust के 'std::sync::mpsc' चैनल्स का उद्देश्य क्या है?",
        "options_en": ["Multi-producer, single-consumer message passing", "Memory sharing", "Thread creation", "Error handling"],
        "options_hi": ["मल्टी-प्रोड्यूसर, सिंगल-कंज्यूमर मैसेज पासिंग", "मेमोरी शेयरिंग", "थ्रेड क्रिएशन", "एरर हैंडलिंग"],
        "answer_en": "Multi-producer, single-consumer message passing",
        "answer_hi": "मल्टी-प्रोड्यूसर, सिंगल-कंज्यूमर मैसेज पासिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you create a static library in Rust?",
        "question_hi": "Rust में स्टेटिक लाइब्रेरी कैसे बनाते हैं?",
        "options_en": ["lib.rs with pub mod declarations", "main.rs with functions", "static keyword", "library macro"],
        "options_hi": ["pub mod डिक्लेरेशन्स के साथ lib.rs", "फंक्शन्स के साथ main.rs", "static कीवर्ड", "library मैक्रो"],
        "answer_en": "lib.rs with pub mod declarations",
        "answer_hi": "pub mod डिक्लेरेशन्स के साथ lib.rs",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of Rust's 'std::path::Path'?",
        "question_hi": "Rust के 'std::path::Path' का उद्देश्य क्या है?",
        "options_en": ["Cross-platform path manipulation", "File reading", "Memory allocation", "String processing"],
        "options_hi": ["क्रॉस-प्लेटफॉर्म पाथ मैनिपुलेशन", "फाइल रीडिंग", "मेमोरी अलोकेशन", "स्ट्रिंग प्रोसेसिंग"],
        "answer_en": "Cross-platform path manipulation",
        "answer_hi": "क्रॉस-प्लेटफॉर्म पाथ मैनिपुलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which Rust feature allows you to write documentation comments?",
        "question_hi": "कौन सी Rust विशेषता डॉक्यूमेंटेशन कमेंट्स लिखने की अनुमति देती है?",
        "options_en": ["/// for line comments and //! for module comments", "/*! */ blocks", "#doc attribute", "doc! macro"],
        "options_hi": ["/// लाइन कमेंट्स के लिए और //! मॉड्यूल कमेंट्स के लिए", "/*! */ ब्लॉक्स", "#doc एट्रिब्यूट", "doc! मैक्रो"],
        "answer_en": "/// for line comments and //! for module comments",
        "answer_hi": "/// लाइन कमेंट्स के लिए और //! मॉड्यूल कमेंट्स के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of Rust's 'std::fs::File'?",
        "question_hi": "Rust के 'std::fs::File' का उद्देश्य क्या है?",
        "options_en": ["File I/O operations", "Memory mapping", "Network operations", "Thread management"],
        "options_hi": ["फाइल I/O ऑपरेशन्स", "मेमोरी मैपिंग", "नेटवर्क ऑपरेशन्स", "थ्रेड मैनेजमेंट"],
        "answer_en": "File I/O operations",
        "answer_hi": "फाइल I/O ऑपरेशन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you create a custom derive macro in Rust?",
        "question_hi": "Rust में कस्टम डेराइव मैक्रो कैसे बनाते हैं?",
        "options_en": ["Procedural macro with #[proc_macro_derive]", "macro_rules! macro", "derive keyword", "custom attribute"],
        "options_hi": ["#[proc_macro_derive] के साथ प्रोसीजरल मैक्रो", "macro_rules! मैक्रो", "derive कीवर्ड", "कस्टम एट्रिब्यूट"],
        "answer_en": "Procedural macro with #[proc_macro_derive]",
        "answer_hi": "#[proc_macro_derive] के साथ प्रोसीजरल मैक्रो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of Rust's 'std::net::TcpStream'?",
        "question_hi": "Rust के 'std::net::TcpStream' का उद्देश्य क्या है?",
        "options_en": ["TCP network communication", "File operations", "Memory allocation", "Thread synchronization"],
        "options_hi": ["TCP नेटवर्क कम्यूनिकेशन", "फाइल ऑपरेशन्स", "मेमोरी अलोकेशन", "थ्रेड सिंक्रोनाइज़ेशन"],
        "answer_en": "TCP network communication",
        "answer_hi": "TCP नेटवर्क कम्यूनिकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which Rust feature allows you to write platform-specific code?",
        "question_hi": "कौन सी Rust विशेषता प्लेटफॉर्म-स्पेसिफिक कोड लिखने की अनुमति देती है?",
        "options_en": ["#[cfg(target_os = \"...\")]", "platform module", "target specific functions", "os! macro"],
        "options_hi": ["#[cfg(target_os = \"...\")]", "प्लेटफॉर्म मॉड्यूल", "टार्गेट स्पेसिफिक फंक्शन्स", "os! मैक्रो"],
        "answer_en": "#[cfg(target_os = \"...\")]",
        "answer_hi": "#[cfg(target_os = \"...\")]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of Rust's 'std::time::Duration'?",
        "question_hi": "Rust के 'std::time::Duration' का उद्देश्य क्या है?",
        "options_en": ["Represent time spans", "Memory allocation", "Error handling", "Thread management"],
        "options_hi": ["टाइम स्पैन्स रिप्रेजेंट करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "थ्रेड मैनेजमेंट"],
        "answer_en": "Represent time spans",
        "answer_hi": "टाइम स्पैन्स रिप्रेजेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How do you handle floating-point comparisons in Rust?",
        "question_hi": "Rust में फ्लोटिंग-पॉइंट कम्पेरिजन कैसे हैंडल करते हैं?",
        "options_en": ["Use epsilon comparison or approx_eq crates", "Direct == operator", "Use integers", "Not possible"],
        "options_hi": ["एप्सिलॉन कम्पेरिजन या approx_eq क्रेट्स यूज करें", "डायरेक्ट == ऑपरेटर", "इंटीजर्स यूज करें", "संभव नहीं"],
        "answer_en": "Use epsilon comparison or approx_eq crates",
        "answer_hi": "एप्सिलॉन कम्पेरिजन या approx_eq क्रेट्स यूज करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of Rust's 'std::collections::BinaryHeap'?",
        "question_hi": "Rust के 'std::collections::BinaryHeap' का उद्देश्य क्या है?",
        "options_en": ["Priority queue implementation", "Sorted array", "Linked list", "Hash table"],
        "options_hi": ["प्रायोरिटी क्यू इम्प्लीमेंटेशन", "सॉर्टेड ऐरे", "लिंक्ड लिस्ट", "हैश टेबल"],
        "answer_en": "Priority queue implementation",
        "answer_hi": "प्रायोरिटी क्यू इम्प्लीमेंटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which Rust feature allows you to write custom lint checks?",
        "question_hi": "कौन सी Rust विशेषता कस्टम लिंट चेक्स लिखने की अनुमति देती है?",
        "options_en": ["Compiler plugins or clippy", "lint attribute", "check macro", "Not supported"],
        "options_hi": ["कम्पाइलर प्लगइन्स या clippy", "lint एट्रिब्यूट", "check मैक्रो", "सपोर्टेड नहीं"],
        "answer_en": "Compiler plugins or clippy",
        "answer_hi": "कम्पाइलर प्लगइन्स या clippy",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of Rust's 'std::sync::RwLock'?",
        "question_hi": "Rust के 'std::sync::RwLock' का उद्देश्य क्या है?",
        "options_en": ["Multiple readers or single writer synchronization", "Memory allocation", "Error handling", "Thread creation"],
        "options_hi": ["मल्टीपल रीडर्स या सिंगल राइटर सिंक्रोनाइज़ेशन", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "थ्रेड क्रिएशन"],
        "answer_en": "Multiple readers or single writer synchronization",
        "answer_hi": "मल्टीपल रीडर्स या सिंगल राइटर सिंक्रोनाइज़ेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you create a shared mutable state between threads?",
        "question_hi": "थ्रेड्स के बीच शेयर्ड म्यूटेबल स्टेट कैसे बनाते हैं?",
        "options_en": ["Arc<Mutex<T>> or Arc<RwLock<T>>", "static mut variable", "global variables", "thread_local"],
        "options_hi": ["Arc<Mutex<T>> या Arc<RwLock<T>>", "static mut वेरिएबल", "ग्लोबल वेरिएबल्स", "thread_local"],
        "answer_en": "Arc<Mutex<T>> or Arc<RwLock<T>>",
        "answer_hi": "Arc<Mutex<T>> या Arc<RwLock<T>>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of Rust's 'std::iter::Iterator' trait?",
        "question_hi": "Rust के 'std::iter::Iterator' trait का उद्देश्य क्या है?",
        "options_en": ["Abstract sequence traversal", "Memory allocation", "Error handling", "Thread management"],
        "options_hi": ["सीक्वेंस ट्रैवर्सल को एब्स्ट्रैक्ट करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "थ्रेड मैनेजमेंट"],
        "answer_en": "Abstract sequence traversal",
        "answer_hi": "सीक्वेंस ट्रैवर्सल को एब्स्ट्रैक्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which Rust feature allows you to write FFI (Foreign Function Interface)?",
        "question_hi": "कौन सी Rust विशेषता FFI (फॉरेन फंक्शन इंटरफेस) लिखने की अनुमति देती है?",
        "options_en": ["extern blocks and #[no_mangle]", "ffi module", "foreign keyword", "Not supported"],
        "options_hi": ["extern ब्लॉक्स और #[no_mangle]", "ffi मॉड्यूल", "foreign कीवर्ड", "सपोर्टेड नहीं"],
        "answer_en": "extern blocks and #[no_mangle]",
        "answer_hi": "extern ब्लॉक्स और #[no_mangle]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of Rust's 'std::collections::VecDeque'?",
        "question_hi": "Rust के 'std::collections::VecDeque' का उद्देश्य क्या है?",
        "options_en": ["Double-ended queue implementation", "Vector implementation", "Linked list", "Stack"],
        "options_hi": ["डबल-एंडेड क्यू इम्प्लीमेंटेशन", "वेक्टर इम्प्लीमेंटेशन", "लिंक्ड लिस्ट", "स्टैक"],
        "answer_en": "Double-ended queue implementation",
        "answer_hi": "डबल-एंडेड क्यू इम्प्लीमेंटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How do you handle stack overflow in Rust?",
        "question_hi": "Rust में स्टैक ओवरफ्लो कैसे हैंडल करते हैं?",
        "options_en": ["Use Box for large data or increase stack size", "Not possible", "Use vectors", "Ignore it"],
        "options_hi": ["बड़े डेटा के लिए Box यूज करें या स्टैक साइज बढ़ाएं", "संभव नहीं", "वेक्टर्स यूज करें", "इग्नोर करें"],
        "answer_en": "Use Box for large data or increase stack size",
        "answer_hi": "बड़े डेटा के लिए Box यूज करें या स्टैक साइज बढ़ाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of Rust's 'std::mem::ManuallyDrop'?",
        "question_hi": "Rust के 'std::mem::ManuallyDrop' का उद्देश्य क्या है?",
        "options_en": ["Prevent automatic destruction of values", "Memory allocation", "Error handling", "Thread safety"],
        "options_hi": ["वैल्यूज के ऑटोमैटिक डिस्ट्रक्शन को रोकना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "थ्रेड सेफ्टी"],
        "answer_en": "Prevent automatic destruction of values",
        "answer_hi": "वैल्यूज के ऑटोमैटिक डिस्ट्रक्शन को रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which Rust feature allows you to write SIMD (Single Instruction Multiple Data) code?",
        "question_hi": "कौन सी Rust विशेषता SIMD (सिंगल इंस्ट्रक्शन मल्टीपल डेटा) कोड लिखने की अनुमति देती है?",
        "options_en": ["std::simd or platform-specific intrinsics", "simd keyword", "vector types", "Not supported"],
        "options_hi": ["std::simd या प्लेटफॉर्म-स्पेसिफिक इंट्रिंसिक्स", "simd कीवर्ड", "वेक्टर टाइप्स", "सपोर्टेड नहीं"],
        "answer_en": "std::simd or platform-specific intrinsics",
        "answer_hi": "std::simd या प्लेटफॉर्म-स्पेसिफिक इंट्रिंसिक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of Rust's 'std::sync::Condvar'?",
        "question_hi": "Rust के 'std::sync::Condvar' का उद्देश्य क्या है?",
        "options_en": ["Thread condition variable for waiting/signaling", "Memory allocation", "Error handling", "Thread creation"],
        "options_hi": ["वेटिंग/सिग्नलिंग के लिए थ्रेड कंडीशन वेरिएबल", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "थ्रेड क्रिएशन"],
        "answer_en": "Thread condition variable for waiting/signaling",
        "answer_hi": "वेटिंग/सिग्नलिंग के लिए थ्रेड कंडीशन वेरिएबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How do you create a trait object in Rust?",
        "question_hi": "Rust में trait object कैसे बनाते हैं?",
        "options_en": ["&dyn Trait or Box<dyn Trait>", "impl Trait", "trait object keyword", "new Trait()"],
        "options_hi": ["&dyn Trait या Box<dyn Trait>", "impl Trait", "trait object कीवर्ड", "new Trait()"],
        "answer_en": "&dyn Trait or Box<dyn Trait>",
        "answer_hi": "&dyn Trait या Box<dyn Trait>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of Rust's 'std::collections::BTreeMap'?",
        "question_hi": "Rust के 'std::collections::BTreeMap' का उद्देश्य क्या है?",
        "options_en": ["Sorted key-value storage using B-trees", "Hash table", "Array storage", "Linked list"],
        "options_hi": ["B-ट्रीज़ का उपयोग करके सॉर्टेड की-वैल्यू स्टोरेज", "हैश टेबल", "ऐरे स्टोरेज", "लिंक्ड लिस्ट"],
        "answer_en": "Sorted key-value storage using B-trees",
        "answer_hi": "B-ट्रीज़ का उपयोग करके सॉर्टेड की-वैल्यू स्टोरेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which Rust feature allows you to write custom allocators?",
        "question_hi": "कौन सी Rust विशेषता कस्टम अलोकेटर्स लिखने की अनुमति देती है?",
        "options_en": ["GlobalAlloc trait and #[global_allocator]", "allocator keyword", "memory module", "Not supported"],
        "options_hi": ["GlobalAlloc trait और #[global_allocator]", "allocator कीवर्ड", "मेमोरी मॉड्यूल", "सपोर्टेड नहीं"],
        "answer_en": "GlobalAlloc trait and #[global_allocator]",
        "answer_hi": "GlobalAlloc trait और #[global_allocator]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of Rust's 'std::io::BufReader'?",
        "question_hi": "Rust के 'std::io::BufReader' का उद्देश्य क्या है?",
        "options_en": ["Buffered reading for efficiency", "Memory allocation", "Error handling", "Thread safety"],
        "options_hi": ["एफिशिएंसी के लिए बफर्ड रीडिंग", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "थ्रेड सेफ्टी"],
        "answer_en": "Buffered reading for efficiency",
        "answer_hi": "एफिशिएंसी के लिए बफर्ड रीडिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How do you handle integer overflow in Rust?",
        "question_hi": "Rust में इंटीजर ओवरफ्लो कैसे हैंडल करते हैं?",
        "options_en": ["Checked, wrapping, saturating, or overflowing methods", "Panic automatically", "Ignore it", "Use floats"],
        "options_hi": ["चेक्ड, रैपिंग, सैचुरेटिंग, या ओवरफ्लोइंग मेथड्स", "ऑटोमैटिक पैनिक", "इग्नोर करें", "फ्लोट्स यूज करें"],
        "answer_en": "Checked, wrapping, saturating, or overflowing methods",
        "answer_hi": "चेक्ड, रैपिंग, सैचुरेटिंग, या ओवरफ्लोइंग मेथड्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of Rust's 'std::sync::atomic' module?",
        "question_hi": "Rust के 'std::sync::atomic' मॉड्यूल का उद्देश्य क्या है?",
        "options_en": ["Atomic operations for lock-free programming", "Memory allocation", "Error handling", "Thread creation"],
        "options_hi": ["लॉक-फ्री प्रोग्रामिंग के लिए एटोमिक ऑपरेशन्स", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "थ्रेड क्रिएशन"],
        "answer_en": "Atomic operations for lock-free programming",
        "answer_hi": "लॉक-फ्री प्रोग्रामिंग के लिए एटोमिक ऑपरेशन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which Rust feature allows you to write custom panic handlers?",
        "question_hi": "कौन सी Rust विशेषता कस्टम पैनिक हैंडलर्स लिखने की अनुमति देती है?",
        "options_en": ["std::panic::set_hook", "panic_handler attribute", "catch_panic macro", "Not supported"],
        "options_hi": ["std::panic::set_hook", "panic_handler एट्रिब्यूट", "catch_panic मैक्रो", "सपोर्टेड नहीं"],
        "answer_en": "std::panic::set_hook",
        "answer_hi": "std::panic::set_hook",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of Rust's 'std::ffi::CString'?",
        "question_hi": "Rust के 'std::ffi::CString' का उद्देश्य क्या है?",
        "options_en": ["Null-terminated strings for FFI", "Memory allocation", "Error handling", "String manipulation"],
        "options_hi": ["FFI के लिए नल-टर्मिनेटेड स्ट्रिंग्स", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "स्ट्रिंग मैनिपुलेशन"],
        "answer_en": "Null-terminated strings for FFI",
        "answer_hi": "FFI के लिए नल-टर्मिनेटेड स्ट्रिंग्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How do you create a WebAssembly target in Rust?",
        "question_hi": "Rust में WebAssembly टार्गेट कैसे बनाते हैं?",
        "options_en": ["wasm32-unknown-unknown target", "wasm keyword", "web assembly module", "Not supported"],
        "options_hi": ["wasm32-unknown-unknown टार्गेट", "wasm कीवर्ड", "वेब असेंबली मॉड्यूल", "सपोर्टेड नहीं"],
        "answer_en": "wasm32-unknown-unknown target",
        "answer_hi": "wasm32-unknown-unknown टार्गेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of Rust's 'std::hint::spin_loop'?",
        "question_hi": "Rust के 'std::hint::spin_loop' का उद्देश्य क्या है?",
        "options_en": ["Optimize busy-waiting loops", "Memory allocation", "Error handling", "Thread creation"],
        "options_hi": ["बिजी-वेटिंग लूप्स ऑप्टिमाइज़ करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "थ्रेड क्रिएशन"],
        "answer_en": "Optimize busy-waiting loops",
        "answer_hi": "बिजी-वेटिंग लूप्स ऑप्टिमाइज़ करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which Rust feature allows you to write const generics?",
        "question_hi": "कौन सी Rust विशेषता कॉन्स्ट जेनरिक्स लिखने की अनुमति देती है?",
        "options_en": ["const parameters in generics", "const keyword", "generic consts", "Not supported"],
        "options_hi": ["जेनरिक्स में कॉन्स्ट पैरामीटर्स", "const कीवर्ड", "जेनरिक कॉन्स्ट्स", "सपोर्टेड नहीं"],
        "answer_en": "const parameters in generics",
        "answer_hi": "जेनरिक्स में कॉन्स्ट पैरामीटर्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of Rust's 'std::mem::transmute'?",
        "question_hi": "Rust के 'std::mem::transmute' का उद्देश्य क्या है?",
        "options_en": ["Unsafe type conversion reinterpretating bits", "Memory allocation", "Error handling", "Thread safety"],
        "options_hi": ["बिट्स रिइंटरप्रेट करते हुए अनसेफ टाइप कन्वर्जन", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "थ्रेड सेफ्टी"],
        "answer_en": "Unsafe type conversion reinterpretating bits",
        "answer_hi": "बिट्स रिइंटरप्रेट करते हुए अनसेफ टाइप कन्वर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you create a no_std application in Rust?",
        "question_hi": "Rust में no_std एप्लिकेशन कैसे बनाते हैं?",
        "options_en": ["#![no_std] attribute and use core/liballoc", "no_std keyword", "core module only", "Not possible"],
        "options_hi": ["#![no_std] एट्रिब्यूट और core/liballoc यूज करें", "no_std कीवर्ड", "सिर्फ core मॉड्यूल", "संभव नहीं"],
        "answer_en": "#![no_std] attribute and use core/liballoc",
        "answer_hi": "#![no_std] एट्रिब्यूट और core/liballoc यूज करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of Rust's 'std::task::Poll'?",
        "question_hi": "Rust के 'std::task::Poll' का उद्देश्य क्या है?",
        "options_en": ["Async task polling status", "Memory allocation", "Error handling", "Thread management"],
        "options_hi": ["एसिंक टास्क पोलिंग स्टेटस", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "थ्रेड मैनेजमेंट"],
        "answer_en": "Async task polling status",
        "answer_hi": "एसिंक टास्क पोलिंग स्टेटस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which Rust feature allows you to write custom attribute macros?",
        "question_hi": "कौन सी Rust विशेषता कस्टम एट्रिब्यूट मैक्रोज़ लिखने की अनुमति देती है?",
        "options_en": ["#[proc_macro_attribute] procedural macros", "macro_rules! macros", "attribute keyword", "Not supported"],
        "options_hi": ["#[proc_macro_attribute] प्रोसीजरल मैक्रोज़", "macro_rules! मैक्रोज़", "attribute कीवर्ड", "सपोर्टेड नहीं"],
        "answer_en": "#[proc_macro_attribute] procedural macros",
        "answer_hi": "#[proc_macro_attribute] प्रोसीजरल मैक्रोज़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of Rust's 'std::collections::HashSet'?",
        "question_hi": "Rust के 'std::collections::HashSet' का उद्देश्य क्या है?",
        "options_en": ["Unique element storage using hashing", "Sorted storage", "Array storage", "Linked list"],
        "options_hi": ["हैशिंग का उपयोग करके यूनिक एलिमेंट स्टोरेज", "सॉर्टेड स्टोरेज", "ऐरे स्टोरेज", "लिंक्ड लिस्ट"],
        "answer_en": "Unique element storage using hashing",
        "answer_hi": "हैशिंग का उपयोग करके यूनिक एलिमेंट स्टोरेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you handle dynamic dispatch in Rust?",
        "question_hi": "Rust में डायनामिक डिस्पैच कैसे हैंडल करते हैं?",
        "options_en": ["Trait objects with dyn keyword", "impl Trait", "generic functions", "macro_rules!"],
        "options_hi": ["dyn कीवर्ड के साथ ट्रेट ऑब्जेक्ट्स", "impl Trait", "जेनरिक फंक्शन्स", "macro_rules!"],
        "answer_en": "Trait objects with dyn keyword",
        "answer_hi": "dyn कीवर्ड के साथ ट्रेट ऑब्जेक्ट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of Rust's 'std::io::Error'?",
        "question_hi": "Rust के 'std::io::Error' का उद्देश्य क्या है?",
        "options_en": ["Standard I/O error type", "Memory allocation", "Thread safety", "Network operations"],
        "options_hi": ["स्टैण्डर्ड I/O एरर टाइप", "मेमोरी अलोकेशन", "थ्रेड सेफ्टी", "नेटवर्क ऑपरेशन्स"],
        "answer_en": "Standard I/O error type",
        "answer_hi": "स्टैण्डर्ड I/O एरर टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which Rust feature allows you to write custom pattern matching?",
        "question_hi": "कौन सी Rust विशेषता कस्टम पैटर्न मैचिंग लिखने की अनुमति देती है?",
        "options_en": ["Implementing std::ops::Deref or using #[derive]", "pattern trait", "match macro", "Not supported"],
        "options_hi": ["std::ops::Deref इम्प्लीमेंट करना या #[derive] यूज करना", "pattern trait", "match मैक्रो", "सपोर्टेड नहीं"],
        "answer_en": "Implementing std::ops::Deref or using #[derive]",
        "answer_hi": "std::ops::Deref इम्प्लीमेंट करना या #[derive] यूज करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of Rust's 'std::sync::mpsc::sync_channel'?",
        "question_hi": "Rust के 'std::sync::mpsc::sync_channel' का उद्देश्य क्या है?",
        "options_en": ["Bounded synchronous channel with capacity", "Unbounded channel", "Memory allocation", "Thread creation"],
        "options_hi": ["कैपेसिटी के साथ बाउंडेड सिंक्रोनस चैनल", "अनबाउंडेड चैनल", "मेमोरी अलोकेशन", "थ्रेड क्रिएशन"],
        "answer_en": "Bounded synchronous channel with capacity",
        "answer_hi": "कैपेसिटी के साथ बाउंडेड सिंक्रोनस चैनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How do you create a Rust workspace?",
        "question_hi": "Rust वर्कस्पेस कैसे बनाते हैं?",
        "options_en": ["Cargo.toml with [workspace] section", "workspace keyword", "cargo workspace command", "Not supported"],
        "options_hi": ["[workspace] सेक्शन के साथ Cargo.toml", "workspace कीवर्ड", "cargo workspace कमांड", "सपोर्टेड नहीं"],
        "answer_en": "Cargo.toml with [workspace] section",
        "answer_hi": "[workspace] सेक्शन के साथ Cargo.toml",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of Rust's 'std::num::Wrapping'?",
        "question_hi": "Rust के 'std::num::Wrapping' का उद्देश्य क्या है?",
        "options_en": ["Wrap-around arithmetic for integers", "Memory allocation", "Error handling", "Thread safety"],
        "options_hi": ["इंटीजर्स के लिए रैप-अराउंड अर्थमैटिक", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "थ्रेड सेफ्टी"],
        "answer_en": "Wrap-around arithmetic for integers",
        "answer_hi": "इंटीजर्स के लिए रैप-अराउंड अर्थमैटिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which Rust feature allows you to write custom destructors?",
        "question_hi": "कौन सी Rust विशेषता कस्टम डिस्ट्रक्टर्स लिखने की अनुमति देती है?",
        "options_en": ["Drop trait implementation", "destructor keyword", "drop function", "Not supported"],
        "options_hi": ["Drop trait इम्प्लीमेंटेशन", "destructor कीवर्ड", "drop फंक्शन", "सपोर्टेड नहीं"],
        "answer_en": "Drop trait implementation",
        "answer_hi": "Drop trait इम्प्लीमेंटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of Rust's 'std::borrow::Cow'?",
        "question_hi": "Rust के 'std::borrow::Cow' का उद्देश्य क्या है?",
        "options_en": ["Clone-on-write smart pointer", "Memory allocation", "Error handling", "Thread safety"],
        "options_hi": ["क्लोन-ऑन-राइट स्मार्ट पॉइंटर", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "थ्रेड सेफ्टी"],
        "answer_en": "Clone-on-write smart pointer",
        "answer_hi": "क्लोन-ऑन-राइट स्मार्ट पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How do you create a Rust procedural macro?",
        "question_hi": "Rust प्रोसीजरल मैक्रो कैसे बनाते हैं?",
        "options_en": ["proc-macro crate with proc_macro attribute", "macro_rules! declaration", "procedural keyword", "Not supported"],
        "options_hi": ["proc_macro एट्रिब्यूट के साथ proc-macro क्रेट", "macro_rules! डिक्लेरेशन", "procedural कीवर्ड", "सपोर्टेड नहीं"],
        "answer_en": "proc-macro crate with proc_macro attribute",
        "answer_hi": "proc_macro एट्रिब्यूट के साथ proc-macro क्रेट",
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