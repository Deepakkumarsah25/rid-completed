const questions=[
    {
        "num": 1,
        "question_en": "How do you create a raw pointer in Rust?",
        "question_hi": "Rust में रॉ पॉइंटर कैसे बनाते हैं?",
        "options_en": ["let ptr: *const i32 = &x;", "let ptr = raw_ptr(&x);", "let ptr: &raw i32 = &x;", "let ptr = Pointer::new(&x);"],
        "options_hi": ["let ptr: *const i32 = &x;", "let ptr = raw_ptr(&x);", "let ptr: &raw i32 = &x;", "let ptr = Pointer::new(&x);"],
        "answer_en": "let ptr: *const i32 = &x;",
        "answer_hi": "let ptr: *const i32 = &x;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How do you declare a mutable variable in Rust?",
        "question_hi": "Rust में mutable वेरिएबल कैसे डिक्लेयर करते हैं?",
        "options_en": ["let mut x = 5;", "mut x = 5;", "let x = mut 5;", "variable mut x = 5;"],
        "options_hi": ["let mut x = 5;", "mut x = 5;", "let x = mut 5;", "variable mut x = 5;"],
        "answer_en": "let mut x = 5;",
        "answer_hi": "let mut x = 5;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the purpose of the 'Box' smart pointer?",
        "question_hi": "'Box' स्मार्ट पॉइंटर का उद्देश्य क्या है?",
        "options_en": ["Heap allocation with ownership", "Reference counting", "Automatic dereferencing", "Thread safety"],
        "options_hi": ["ओनरशिप के साथ हीप अलोकेशन", "रिफरेन्स काउंटिंग", "ऑटोमैटिक डिरेफरेंसिंग", "थ्रेड सेफ्टी"],
        "answer_en": "Heap allocation with ownership",
        "answer_hi": "ओनरशिप के साथ हीप अलोकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
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
        "num": 5,
        "question_en": "What is the purpose of the 'Result' type?",
        "question_hi": "'Result' टाइप का उद्देश्य क्या है?",
        "options_en": ["Error handling with recoverable errors", "Boolean operations", "Option type replacement", "Pattern matching"],
        "options_hi": ["रिकवरेबल एरर के साथ एरर हैंडलिंग", "बूलियन ऑपरेशन", "Option टाइप रिप्लेसमेंट", "पैटर्न मैचिंग"],
        "answer_en": "Error handling with recoverable errors",
        "answer_hi": "रिकवरेबल एरर के साथ एरर हैंडलिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you implement a method for a struct?",
        "question_hi": "स्ट्रक्चर के लिए मेथड कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["impl StructName { fn method(&self) {} }", "struct impl StructName { }", "fn StructName::method() {}", "method fn for StructName {}"],
        "options_hi": ["impl StructName { fn method(&self) {} }", "struct impl StructName { }", "fn StructName::method() {}", "method fn for StructName {}"],
        "answer_en": "impl StructName { fn method(&self) {} }",
        "answer_hi": "impl StructName { fn method(&self) {} }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of the 'match' keyword?",
        "question_hi": "'match' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Pattern matching with exhaustive checking", "String comparison", "Loop control", "Error handling"],
        "options_hi": ["एक्जॉस्टिव चेकिंग के साथ पैटर्न मैचिंग", "स्ट्रिंग कम्पेरिजन", "लूप कंट्रोल", "एरर हैंडलिंग"],
        "answer_en": "Pattern matching with exhaustive checking",
        "answer_hi": "एक्जॉस्टिव चेकिंग के साथ पैटर्न मैचिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you create a new thread in Rust?",
        "question_hi": "Rust में नया थ्रेड कैसे बनाते हैं?",
        "options_en": ["std::thread::spawn(|| {})", "thread::new(|| {})", "spawn_thread(|| {})", "Thread::create(|| {})"],
        "options_hi": ["std::thread::spawn(|| {})", "thread::new(|| {})", "spawn_thread(|| {})", "Thread::create(|| {})"],
        "answer_en": "std::thread::spawn(|| {})",
        "answer_hi": "std::thread::spawn(|| {})",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of the 'Arc' smart pointer?",
        "question_hi": "'Arc' स्मार्ट पॉइंटर का उद्देश्य क्या है?",
        "options_en": ["Atomic reference counting for thread safety", "Automatic memory cleanup", "Stack allocation", "Single ownership"],
        "options_hi": ["थ्रेड सेफ्टी के लिए एटॉमिक रिफरेन्स काउंटिंग", "ऑटोमैटिक मेमोरी क्लीनअप", "स्टैक अलोकेशन", "सिंगल ओनरशिप"],
        "answer_en": "Atomic reference counting for thread safety",
        "answer_hi": "थ्रेड सेफ्टी के लिए एटॉमिक रिफरेन्स काउंटिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you handle errors with the '?' operator?",
        "question_hi": "'?' ऑपरेटर के साथ एरर कैसे हैंडल करते हैं?",
        "options_en": ["Propagate errors automatically", "Ignore errors", "Panic on errors", "Log errors"],
        "options_hi": ["एरर ऑटोमैटिकली प्रोपेगेट करना", "एरर इग्नोर करना", "एरर पर पैनिक करना", "एरर लॉग करना"],
        "answer_en": "Propagate errors automatically",
        "answer_hi": "एरर ऑटोमैटिकली प्रोपेगेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of the 'Cow' (Clone on Write) type?",
        "question_hi": "'Cow' (Clone on Write) टाइप का उद्देश्य क्या है?",
        "options_en": ["Efficient borrowing with optional cloning", "Automatic copying", "Memory allocation", "Thread synchronization"],
        "options_hi": ["ऑप्शनल क्लोनिंग के साथ एफिशिएंट बोरोइंग", "ऑटोमैटिक कॉपीिंग", "मेमोरी अलोकेशन", "थ्रेड सिंक्रोनाइज़ेशन"],
        "answer_en": "Efficient borrowing with optional cloning",
        "answer_hi": "ऑप्शनल क्लोनिंग के साथ एफिशिएंट बोरोइंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you define a generic function in Rust?",
        "question_hi": "Rust में जेनरिक फंक्शन कैसे डिफाइन करते हैं?",
        "options_en": ["fn func<T>(param: T) -> T {}", "generic fn func<T>(param: T) {}", "fn func generic<T>(param: T) {}", "function<T> func(param: T) {}"],
        "options_hi": ["fn func<T>(param: T) -> T {}", "generic fn func<T>(param: T) {}", "fn func generic<T>(param: T) {}", "function<T> func(param: T) {}"],
        "answer_en": "fn func<T>(param: T) -> T {}",
        "answer_hi": "fn func<T>(param: T) -> T {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of the 'Mutex' type?",
        "question_hi": "'Mutex' टाइप का उद्देश्य क्या है?",
        "options_en": ["Thread-safe interior mutability", "Memory allocation", "Automatic locking", "Reference counting"],
        "options_hi": ["थ्रेड-सेफ इंटीरियर म्यूटेबिलिटी", "मेमोरी अलोकेशन", "ऑटोमैटिक लॉकिंग", "रिफरेन्स काउंटिंग"],
        "answer_en": "Thread-safe interior mutability",
        "answer_hi": "थ्रेड-सेफ इंटीरियर म्यूटेबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you create a vector in Rust?",
        "question_hi": "Rust में वेक्टर कैसे बनाते हैं?",
        "options_en": ["let vec = vec![1, 2, 3];", "let vec = Vector::new();", "let vec = [1, 2, 3].to_vec();", "let vec = new_vec![1, 2, 3];"],
        "options_hi": ["let vec = vec![1, 2, 3];", "let vec = Vector::new();", "let vec = [1, 2, 3].to_vec();", "let vec = new_vec![1, 2, 3];"],
        "answer_en": "let vec = vec![1, 2, 3];",
        "answer_hi": "let vec = vec![1, 2, 3];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of the 'Option' type?",
        "question_hi": "'Option' टाइप का उद्देश्य क्या है?",
        "options_en": ["Represent optional values safely", "Error handling", "Boolean operations", "Pattern matching"],
        "options_hi": ["ऑप्शनल वैल्यू को सेफली रिप्रेजेंट करना", "एरर हैंडलिंग", "बूलियन ऑपरेशन", "पैटर्न मैचिंग"],
        "answer_en": "Represent optional values safely",
        "answer_hi": "ऑप्शनल वैल्यू को सेफली रिप्रेजेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you implement a trait for a type?",
        "question_hi": "टाइप के लिए trait कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["impl Trait for Type {}", "trait impl for Type {}", "Type implements Trait {}", "implement Trait for Type {}"],
        "options_hi": ["impl Trait for Type {}", "trait impl for Type {}", "Type implements Trait {}", "implement Trait for Type {}"],
        "answer_en": "impl Trait for Type {}",
        "answer_hi": "impl Trait for Type {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of the 'async/await' syntax?",
        "question_hi": "'async/await' सिंटैक्स का उद्देश्य क्या है?",
        "options_en": ["Asynchronous programming with futures", "Synchronous operations", "Error handling", "Memory management"],
        "options_hi": ["फ्यूचर के साथ एसिंक्रोनस प्रोग्रामिंग", "सिंक्रोनस ऑपरेशन", "एरर हैंडलिंग", "मेमोरी मैनेजमेंट"],
        "answer_en": "Asynchronous programming with futures",
        "answer_hi": "फ्यूचर के साथ एसिंक्रोनस प्रोग्रामिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you create a HashMap in Rust?",
        "question_hi": "Rust में HashMap कैसे बनाते हैं?",
        "options_en": ["use std::collections::HashMap; let map = HashMap::new();", "let map = new HashMap();", "let map = HashMap::create();", "use HashMap; let map = HashMap()"],
        "options_hi": ["use std::collections::HashMap; let map = HashMap::new();", "let map = new HashMap();", "let map = HashMap::create();", "use HashMap; let map = HashMap()"],
        "answer_en": "use std::collections::HashMap; let map = HashMap::new();",
        "answer_hi": "use std::collections::HashMap; let map = HashMap::new();",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of the 'Drop' trait?",
        "question_hi": "'Drop' trait का उद्देश्य क्या है?",
        "options_en": ["Custom cleanup when value goes out of scope", "Automatic memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["वैल्यू के स्कोप से बाहर जाने पर कस्टम क्लीनअप", "ऑटोमैटिक मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Custom cleanup when value goes out of scope",
        "answer_hi": "वैल्यू के स्कोप से बाहर जाने पर कस्टम क्लीनअप",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 20,
        "question_en": "How do you handle panics in Rust?",
        "question_hi": "Rust में पैनिक कैसे हैंडल करते हैं?",
        "options_en": ["std::panic::catch_unwind(|| {})", "try { } catch { }", "panic::recover(|| {})", "handle_panic(|| {})"],
        "options_hi": ["std::panic::catch_unwind(|| {})", "try { } catch { }", "panic::recover(|| {})", "handle_panic(|| {})"],
        "answer_en": "std::panic::catch_unwind(|| {})",
        "answer_hi": "std::panic::catch_unwind(|| {})",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the role of Rust's unsafe keyword?",
        "question_hi": "Rust के unsafe कीवर्ड की क्या भूमिका है?",
        "options_en": ["Bypass borrow checker", "Raw pointer manipulation", "FFI integration", "All of the above"],
        "options_hi": ["बोरो चेकर बायपास", "रॉ पॉइंटर मैनिपुलेशन", "FFI इंटीग्रेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How does Rust implement async/await?",
        "question_hi": "Rust async/await कैसे इम्प्लीमेंट करता है?",
        "options_en": ["State machines", "Future trait", "Executor systems", "All of the above"],
        "options_hi": ["स्टेट मशीन", "फ्यूचर ट्रेट", "एग्जीक्यूटर सिस्टम", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of Rust's pinning?",
        "question_hi": "Rust के पिनिंग का उद्देश्य क्या है?",
        "options_en": ["Prevent moving in memory", "Self-referential structs", "Async foundations", "All of the above"],
        "options_hi": ["मेमोरी में मूविंग रोकना", "सेल्फ-रेफरेंशियल स्ट्रक्चर", "Async फाउंडेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How does Rust's module system work?",
        "question_hi": "Rust का मॉड्यूल सिस्टम कैसे काम करता है?",
        "options_en": ["Namespace management", "Visibility control", "Code organization", "All of the above"],
        "options_hi": ["नेमस्पेस मैनेजमेंट", "विजिबिलिटी कंट्रोल", "कोड ऑर्गनाइजेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the role of Rust's cargo tool?",
        "question_hi": "Rust के cargo टूल की क्या भूमिका है?",
        "options_en": ["Package management", "Dependency resolution", "Build system", "All of the above"],
        "options_hi": ["पैकेज मैनेजमेंट", "डिपेंडेंसी रेजोल्यूशन", "बिल्ड सिस्टम", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How does Rust implement interior mutability?",
        "question_hi": "Rust इंटीरियर म्यूटेबिलिटी कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Cell types", "RefCell", "Atomic operations", "All of the above"],
        "options_hi": ["सेल टाइप", "RefCell", "एटॉमिक ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of Rust's phantom data?",
        "question_hi": "Rust के फैंटम डेटा का उद्देश्य क्या है?",
        "options_en": ["Type parameter usage", "Lifetime tracking", "Variance control", "All of the above"],
        "options_hi": ["टाइप पैरामीटर यूज", "लाइफटाइम ट्रैकिंग", "वेरिएंस कंट्रोल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How does Rust handle memory allocation?",
        "question_hi": "Rust मेमोरी अलोकेशन कैसे हैंडल करता है?",
        "options_en": ["Box for heap", "Stack allocation", "Global allocator", "All of the above"],
        "options_hi": ["हीप के लिए Box", "स्टैक अलोकेशन", "ग्लोबल अलोकेटर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the role of Rust's closure system?",
        "question_hi": "Rust के क्लोजर सिस्टम की क्या भूमिका है?",
        "options_en": ["Anonymous functions", "Environment capture", "Trait implementation", "All of the above"],
        "options_hi": ["अनॉनिमस फंक्शन", "एनवायरनमेंट कैप्चर", "ट्रेट इम्प्लीमेंटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How does Rust implement smart pointers?",
        "question_hi": "Rust स्मार्ट पॉइंटर कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Deref trait", "Drop trait", "Reference counting", "All of the above"],
        "options_hi": ["Deref ट्रेट", "Drop ट्रेट", "रिफरेन्स काउंटिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of the 'unwrap' method?",
        "question_hi": "'unwrap' मेथड का उद्देश्य क्या है?",
        "options_en": ["Extract value from Option/Result or panic", "Error handling", "Pattern matching", "Memory allocation"],
        "options_hi": ["Option/Result से वैल्यू एक्सट्रैक्ट करना या पैनिक करना", "एरर हैंडलिंग", "पैटर्न मैचिंग", "मेमोरी अलोकेशन"],
        "answer_en": "Extract value from Option/Result or panic",
        "answer_hi": "Option/Result से वैल्यू एक्सट्रैक्ट करना या पैनिक करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you define an enum in Rust?",
        "question_hi": "Rust में enum कैसे डिफाइन करते हैं?",
        "options_en": ["enum MyEnum { Variant1, Variant2 }", "struct enum MyEnum { }", "define enum MyEnum {}", "MyEnum { Variant1, Variant2 }"],
        "options_hi": ["enum MyEnum { Variant1, Variant2 }", "struct enum MyEnum { }", "define enum MyEnum {}", "MyEnum { Variant1, Variant2 }"],
        "answer_en": "enum MyEnum { Variant1, Variant2 }",
        "answer_hi": "enum MyEnum { Variant1, Variant2 }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of the 'dyn' keyword?",
        "question_hi": "'dyn' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Trait object dynamic dispatch", "Dynamic typing", "Memory allocation", "Error handling"],
        "options_hi": ["Trait ऑब्जेक्ट डायनामिक डिस्पैच", "डायनामिक टाइपिंग", "मेमोरी अलोकेशन", "एरर हैंडलिंग"],
        "answer_en": "Trait object dynamic dispatch",
        "answer_hi": "Trait ऑब्जेक्ट डायनामिक डिस्पैच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you handle multiple error types?",
        "question_hi": "मल्टीपल एरर टाइप कैसे हैंडल करते हैं?",
        "options_en": ["Use Box<dyn Error> or custom error types", "Use multiple match statements", "Ignore errors", "Use panic"],
        "options_hi": ["Box<dyn Error> या कस्टम एरर टाइप का उपयोग करें", "मल्टीपल match स्टेटमेंट का उपयोग करें", "एरर इग्नोर करें", "panic का उपयोग करें"],
        "answer_en": "Use Box<dyn Error> or custom error types",
        "answer_hi": "Box<dyn Error> या कस्टम एरर टाइप का उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of the 'Clone' trait?",
        "question_hi": "'Clone' trait का उद्देश्य क्या है?",
        "options_en": ["Explicit duplication of values", "Automatic copying", "Memory management", "Error handling"],
        "options_hi": ["वैल्यू की एक्सप्लिसिट डुप्लिकेशन", "ऑटोमैटिक कॉपीिंग", "मेमोरी मैनेजमेंट", "एरर हैंडलिंग"],
        "answer_en": "Explicit duplication of values",
        "answer_hi": "वैल्यू की एक्सप्लिसिट डुप्लिकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do you create a static variable?",
        "question_hi": "स्टैटिक वेरिएबल कैसे बनाते हैं?",
        "options_en": ["static VAR: i32 = 42;", "let static VAR = 42;", "const static VAR = 42;", "static mut VAR: i32 = 42;"],
        "options_hi": ["static VAR: i32 = 42;", "let static VAR = 42;", "const static VAR = 42;", "static mut VAR: i32 = 42;"],
        "answer_en": "static VAR: i32 = 42;",
        "answer_hi": "static VAR: i32 = 42;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of the 'Default' trait?",
        "question_hi": "'Default' trait का उद्देश्य क्या है?",
        "options_en": ["Provide default values for types", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["टाइप के लिए डिफॉल्ट वैल्यू प्रोवाइड करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Provide default values for types",
        "answer_hi": "टाइप के लिए डिफॉल्ट वैल्यू प्रोवाइड करना",
        "attempted": false,
        "selected": ""
    },{
        "num": 38,
        "question_en": "What is the purpose of Rust's ownership system?",
        "question_hi": "Rust के ownership सिस्टम का उद्देश्य क्या है?",
        "options_en": ["Memory safety without garbage collection", "Faster compilation", "Automatic memory management", "Dynamic typing"],
        "options_hi": ["गार्बेज कलेक्शन के बिना मेमोरी सेफ्टी", "तेज कम्पाइलेशन", "ऑटोमैटिक मेमोरी मैनेजमेंट", "डायनामिक टाइपिंग"],
        "answer_en": "Memory safety without garbage collection",
        "answer_hi": "गार्बेज कलेक्शन के बिना मेमोरी सेफ्टी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of the 'From' trait?",
        "question_hi": "'From' trait का उद्देश्य क्या है?",
        "options_en": ["Type conversion with guaranteed success", "Error handling", "Memory allocation", "Pattern matching"],
        "options_hi": ["गारंटीड सक्सेस के साथ टाइप कन्वर्जन", "एरर हैंडलिंग", "मेमोरी अलोकेशन", "पैटर्न मैचिंग"],
        "answer_en": "Type conversion with guaranteed success",
        "answer_hi": "गारंटीड सक्सेस के साथ टाइप कन्वर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How do you create a thread-safe reference counted pointer?",
        "question_hi": "थ्रेड-सेफ रिफरेन्स काउंटेड पॉइंटर कैसे बनाते हैं?",
        "options_en": ["use std::sync::Arc; let arc = Arc::new(data);", "use std::rc::Arc; let arc = Arc::new(data);", "let arc = Arc::new_thread_safe(data);", "let arc = Rc::new(data).make_thread_safe();"],
        "options_hi": ["use std::sync::Arc; let arc = Arc::new(data);", "use std::rc::Arc; let arc = Arc::new(data);", "let arc = Arc::new_thread_safe(data);", "let arc = Rc::new(data).make_thread_safe();"],
        "answer_en": "use std::sync::Arc; let arc = Arc::new(data);",
        "answer_hi": "use std::sync::Arc; let arc = Arc::new(data);",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of the 'Iterator' trait?",
        "question_hi": "'Iterator' trait का उद्देश्य क्या है?",
        "options_en": ["Define sequential access to elements", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["एलिमेंट के सीक्वेंशियल एक्सेस को डिफाइन करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Define sequential access to elements",
        "answer_hi": "एलिमेंट के सीक्वेंशियल एक्सेस को डिफाइन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How do you define associated types in traits?",
        "question_hi": "trait में associated types कैसे डिफाइन करते हैं?",
        "options_en": ["trait MyTrait { type Output; }", "trait MyTrait<Output> {}", "trait MyTrait with Output {}", "trait MyTrait where type Output {}"],
        "options_hi": ["trait MyTrait { type Output; }", "trait MyTrait<Output> {}", "trait MyTrait with Output {}", "trait MyTrait where type Output {}"],
        "answer_en": "trait MyTrait { type Output; }",
        "answer_hi": "trait MyTrait { type Output; }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of the 'PhantomData' marker?",
        "question_hi": "'PhantomData' मार्कर का उद्देश्य क्या है?",
        "options_en": ["Mark unused type parameters for safety", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["सेफ्टी के लिए अनयूज्ड टाइप पैरामीटर मार्क करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Mark unused type parameters for safety",
        "answer_hi": "सेफ्टी के लिए अनयूज्ड टाइप पैरामीटर मार्क करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How do you create a custom error type?",
        "question_hi": "कस्टम एरर टाइप कैसे बनाते हैं?",
        "options_en": ["#[derive(Debug)] enum MyError { Variant }", "struct MyError;", "class MyError extends Error {}", "error MyError {}"],
        "options_hi": ["#[derive(Debug)] enum MyError { Variant }", "struct MyError;", "class MyError extends Error {}", "error MyError {}"],
        "answer_en": "#[derive(Debug)] enum MyError { Variant }",
        "answer_hi": "#[derive(Debug)] enum MyError { Variant }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of the 'Fn' traits?",
        "question_hi": "'Fn' traits का उद्देश्य क्या है?",
        "options_en": ["Define closure calling behavior", "Function declaration", "Memory allocation", "Error handling"],
        "options_hi": ["क्लोजर कॉलिंग बिहेवियर डिफाइन करना", "फंक्शन डिक्लेरेशन", "मेमोरी अलोकेशन", "एरर हैंडलिंग"],
        "answer_en": "Define closure calling behavior",
        "answer_hi": "क्लोजर कॉलिंग बिहेवियर डिफाइन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How do you implement operator overloading?",
        "question_hi": "ऑपरेटर ओवरलोडिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["impl std::ops::Add for MyStruct {}", "override + for MyStruct {}", "MyStruct::operator+() {}", "fn add for MyStruct {}"],
        "options_hi": ["impl std::ops::Add for MyStruct {}", "override + for MyStruct {}", "MyStruct::operator+() {}", "fn add for MyStruct {}"],
        "answer_en": "impl std::ops::Add for MyStruct {}",
        "answer_hi": "impl std::ops::Add for MyStruct {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of the 'unsafe' keyword?",
        "question_hi": "'unsafe' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Enable operations that bypass compiler checks", "Disable all safety checks", "Make code faster", "Handle errors"],
        "options_hi": ["कम्पाइलर चेक बायपास करने वाले ऑपरेशन एनेबल करना", "सभी सेफ्टी चेक डिसेबल करना", "कोड को तेज बनाना", "एरर हैंडल करना"],
        "answer_en": "Enable operations that bypass compiler checks",
        "answer_hi": "कम्पाइलर चेक बायपास करने वाले ऑपरेशन एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you create a trait object?",
        "question_hi": "Trait ऑब्जेक्ट कैसे बनाते हैं?",
        "options_en": ["let obj: &dyn MyTrait = &instance;", "let obj = instance as dyn MyTrait;", "let obj = MyTrait::from(instance);", "let obj = dyn MyTrait::new(instance);"],
        "options_hi": ["let obj: &dyn MyTrait = &instance;", "let obj = instance as dyn MyTrait;", "let obj = MyTrait::from(instance);", "let obj = dyn MyTrait::new(instance);"],
        "answer_en": "let obj: &dyn MyTrait = &instance;",
        "answer_hi": "let obj: &dyn MyTrait = &instance;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of the 'Copy' trait?",
        "question_hi": "'Copy' trait का उद्देश्य क्या है?",
        "options_en": ["Mark types that can be copied bitwise", "Automatic duplication", "Memory management", "Error handling"],
        "options_hi": ["उन टाइप को मार्क करना जो बिटवाइज कॉपी हो सकते हैं", "ऑटोमैटिक डुप्लिकेशन", "मेमोरी मैनेजमेंट", "एरर हैंडलिंग"],
        "answer_en": "Mark types that can be copied bitwise",
        "answer_hi": "उन टाइप को मार्क करना जो बिटवाइज कॉपी हो सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you create a mutable static variable?",
        "question_hi": "mutable स्टैटिक वेरिएबल कैसे बनाते हैं?",
        "options_en": ["static mut VAR: i32 = 42;", "static mut let VAR = 42;", "static VAR: mut i32 = 42;", "mut static VAR: i32 = 42;"],
        "options_hi": ["static mut VAR: i32 = 42;", "static mut let VAR = 42;", "static VAR: mut i32 = 42;", "mut static VAR: i32 = 42;"],
        "answer_en": "static mut VAR: i32 = 42;",
        "answer_hi": "static mut VAR: i32 = 42;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of the 'Sized' trait?",
        "question_hi": "'Sized' trait का उद्देश्य क्या है?",
        "options_en": ["Mark types with known size at compile time", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["उन टाइप को मार्क करना जिनका साइज कम्पाइल टाइम पर ज्ञात हो", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Mark types with known size at compile time",
        "answer_hi": "उन टाइप को मार्क करना जिनका साइज कम्पाइल टाइम पर ज्ञात हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How do you create a boxed trait object?",
        "question_hi": "boxed trait ऑब्जेक्ट कैसे बनाते हैं?",
        "options_en": ["let boxed: Box<dyn MyTrait> = Box::new(instance);", "let boxed = Box::new(instance) as dyn MyTrait;", "let boxed = Box::dyn(instance);", "let boxed = instance.boxed::<dyn MyTrait>();"],
        "options_hi": ["let boxed: Box<dyn MyTrait> = Box::new(instance);", "let boxed = Box::new(instance) as dyn MyTrait;", "let boxed = Box::dyn(instance);", "let boxed = instance.boxed::<dyn MyTrait>();"],
        "answer_en": "let boxed: Box<dyn MyTrait> = Box::new(instance);",
        "answer_hi": "let boxed: Box<dyn MyTrait> = Box::new(instance);",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of the 'Any' trait?",
        "question_hi": "'Any' trait का उद्देश्य क्या है?",
        "options_en": ["Runtime type reflection and downcasting", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["रनटाइम टाइप रिफ्लेक्शन और डाउनकास्टिंग", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Runtime type reflection and downcasting",
        "answer_hi": "रनटाइम टाइप रिफ्लेक्शन और डाउनकास्टिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you create a thread-local variable?",
        "question_hi": "थ्रेड-लोकल वेरिएबल कैसे बनाते हैं?",
        "options_en": ["thread_local! { static VAR: i32 = 42; }", "thread_local VAR: i32 = 42;", "static thread_local VAR: i32 = 42;", "let thread_local VAR = 42;"],
        "options_hi": ["thread_local! { static VAR: i32 = 42; }", "thread_local VAR: i32 = 42;", "static thread_local VAR: i32 = 42;", "let thread_local VAR = 42;"],
        "answer_en": "thread_local! { static VAR: i32 = 42; }",
        "answer_hi": "thread_local! { static VAR: i32 = 42; }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of the 'Hash' trait?",
        "question_hi": "'Hash' trait का उद्देश्य क्या है?",
        "options_en": ["Enable hashing for HashMap keys", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["HashMap की के लिए हैशिंग एनेबल करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Enable hashing for HashMap keys",
        "answer_hi": "HashMap की के लिए हैशिंग एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you create a custom iterator?",
        "question_hi": "कस्टम इटरेटर कैसे बनाते हैं?",
        "options_en": ["struct MyIter { } impl Iterator for MyIter { type Item = i32; }", "iterator struct MyIter {}", "fn iterator() -> impl Iterator {}", "Iterable struct MyIter {}"],
        "options_hi": ["struct MyIter { } impl Iterator for MyIter { type Item = i32; }", "iterator struct MyIter {}", "fn iterator() -> impl Iterator {}", "Iterable struct MyIter {}"],
        "answer_en": "struct MyIter { } impl Iterator for MyIter { type Item = i32; }",
        "answer_hi": "struct MyIter { } impl Iterator for MyIter { type Item = i32; }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of the 'Debug' trait?",
        "question_hi": "'Debug' trait का उद्देश्य क्या है?",
        "options_en": ["Format values for debugging output", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["डीबगिंग आउटपुट के लिए वैल्यू फॉर्मेट करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Format values for debugging output",
        "answer_hi": "डीबगिंग आउटपुट के लिए वैल्यू फॉर्मेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How do you create a reference-counted pointer?",
        "question_hi": "रिफरेन्स-काउंटेड पॉइंटर कैसे बनाते हैं?",
        "options_en": ["use std::rc::Rc; let rc = Rc::new(data);", "use std::sync::Rc; let rc = Rc::new(data);", "let rc = Rc::new_ref_counted(data);", "let rc = ReferenceCounted::new(data);"],
        "options_hi": ["use std::rc::Rc; let rc = Rc::new(data);", "use std::sync::Rc; let rc = Rc::new(data);", "let rc = Rc::new_ref_counted(data);", "let rc = ReferenceCounted::new(data);"],
        "answer_en": "use std::rc::Rc; let rc = Rc::new(data);",
        "answer_hi": "use std::rc::Rc; let rc = Rc::new(data);",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of the 'Display' trait?",
        "question_hi": "'Display' trait का उद्देश्य क्या है?",
        "options_en": ["User-friendly formatting", "Debug output", "Memory allocation", "Error handling"],
        "options_hi": ["यूजर-फ्रेंडली फॉर्मेटिंग", "डीबग आउटपुट", "मेमोरी अलोकेशन", "एरर हैंडलिंग"],
        "answer_en": "User-friendly formatting",
        "answer_hi": "यूजर-फ्रेंडली फॉर्मेटिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you create a mutex-protected value?",
        "question_hi": "म्यूटेक्स-प्रोटेक्टेड वैल्यू कैसे बनाते हैं?",
        "options_en": ["use std::sync::Mutex; let mutex = Mutex::new(data);", "use std::thread::Mutex; let mutex = Mutex::new(data);", "let mutex = Mutex::protect(data);", "let mutex = data.mutex();"],
        "options_hi": ["use std::sync::Mutex; let mutex = Mutex::new(data);", "use std::thread::Mutex; let mutex = Mutex::new(data);", "let mutex = Mutex::protect(data);", "let mutex = data.mutex();"],
        "answer_en": "use std::sync::Mutex; let mutex = Mutex::new(data);",
        "answer_hi": "use std::sync::Mutex; let mutex = Mutex::new(data);",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of the 'PartialEq' trait?",
        "question_hi": "'PartialEq' trait का उद्देश्य क्या है?",
        "options_en": ["Enable partial equality comparisons", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["पार्शियल इक्वलिटी कम्पेरिजन एनेबल करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Enable partial equality comparisons",
        "answer_hi": "पार्शियल इक्वलिटी कम्पेरिजन एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How do you create a channel for inter-thread communication?",
        "question_hi": "इंटर-थ्रेड कम्युनिकेशन के लिए चैनल कैसे बनाते हैं?",
        "options_en": ["let (tx, rx) = std::sync::mpsc::channel();", "let channel = std::thread::channel();", "let (tx, rx) = Channel::new();", "let channel = mpsc::new_channel();"],
        "options_hi": ["let (tx, rx) = std::sync::mpsc::channel();", "let channel = std::thread::channel();", "let (tx, rx) = Channel::new();", "let channel = mpsc::new_channel();"],
        "answer_en": "let (tx, rx) = std::sync::mpsc::channel();",
        "answer_hi": "let (tx, rx) = std::sync::mpsc::channel();",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of the 'Eq' trait?",
        "question_hi": "'Eq' trait का उद्देश्य क्या है?",
        "options_en": ["Enable total equality comparisons", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["टोटल इक्वलिटी कम्पेरिजन एनेबल करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Enable total equality comparisons",
        "answer_hi": "टोटल इक्वलिटी कम्पेरिजन एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How do you create a reference-counted mutable value?",
        "question_hi": "रिफरेन्स-काउंटेड mutable वैल्यू कैसे बनाते हैं?",
        "options_en": ["use std::rc::Rc; use std::cell::RefCell; let rc = Rc::new(RefCell::new(data));", "let rc = Rc::new_mut(data);", "let rc = RcMut::new(data);", "let rc = data.rc_mut();"],
        "options_hi": ["use std::rc::Rc; use std::cell::RefCell; let rc = Rc::new(RefCell::new(data));", "let rc = Rc::new_mut(data);", "let rc = RcMut::new(data);", "let rc = data.rc_mut();"],
        "answer_en": "use std::rc::Rc; use std::cell::RefCell; let rc = Rc::new(RefCell::new(data));",
        "answer_hi": "use std::rc::Rc; use std::cell::RefCell; let rc = Rc::new(RefCell::new(data));",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of the 'Ord' trait?",
        "question_hi": "'Ord' trait का उद्देश्य क्या है?",
        "options_en": ["Enable total ordering comparisons", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["टोटल ऑर्डरिंग कम्पेरिजन एनेबल करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Enable total ordering comparisons",
        "answer_hi": "टोटल ऑर्डरिंग कम्पेरिजन एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How do you create a thread-safe reference-counted mutable value?",
        "question_hi": "थ्रेड-सेफ रिफरेन्स-काउंटेड mutable वैल्यू कैसे बनाते हैं?",
        "options_en": ["use std::sync::Arc; use std::sync::Mutex; let arc = Arc::new(Mutex::new(data));", "let arc = Arc::new_mut(data);", "let arc = ArcMut::new(data);", "let arc = data.arc_mut();"],
        "options_hi": ["use std::sync::Arc; use std::sync::Mutex; let arc = Arc::new(Mutex::new(data));", "let arc = Arc::new_mut(data);", "let arc = ArcMut::new(data);", "let arc = data.arc_mut();"],
        "answer_en": "use std::sync::Arc; use std::sync::Mutex; let arc = Arc::new(Mutex::new(data));",
        "answer_hi": "use std::sync::Arc; use std::sync::Mutex; let arc = Arc::new(Mutex::new(data));",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of the 'PartialOrd' trait?",
        "question_hi": "'PartialOrd' trait का उद्देश्य क्या है?",
        "options_en": ["Enable partial ordering comparisons", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["पार्शियल ऑर्डरिंग कम्पेरिजन एनेबल करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Enable partial ordering comparisons",
        "answer_hi": "पार्शियल ऑर्डरिंग कम्पेरिजन एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you create a custom panic handler?",
        "question_hi": "कस्टम पैनिक हैंडलर कैसे बनाते हैं?",
        "options_en": ["std::panic::set_hook(Box::new(|info| { }));", "panic::set_handler(|info| { });", "std::panic::set_handler(Box::new(|info| { }));", "set_panic_handler(|info| { });"],
        "options_hi": ["std::panic::set_hook(Box::new(|info| { }));", "panic::set_handler(|info| { });", "std::panic::set_handler(Box::new(|info| { }));", "set_panic_handler(|info| { });"],
        "answer_en": "std::panic::set_hook(Box::new(|info| { }));",
        "answer_hi": "std::panic::set_hook(Box::new(|info| { }));",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of the 'AsRef' trait?",
        "question_hi": "'AsRef' trait का उद्देश्य क्या है?",
        "options_en": ["Enable cheap reference-to-reference conversion", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["चीप रिफरेन्स-टू-रिफरेन्स कन्वर्जन एनेबल करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Enable cheap reference-to-reference conversion",
        "answer_hi": "चीप रिफरेन्स-टू-रिफरेन्स कन्वर्जन एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How do you create a custom allocator?",
        "question_hi": "कस्टम अलोकेटर कैसे बनाते हैं?",
        "options_en": ["#[global_allocator] static ALLOC: MyAlloc = MyAlloc;", "#[allocator] static ALLOC: MyAlloc = MyAlloc;", "global_allocator(MyAlloc);", "set_allocator(MyAlloc);"],
        "options_hi": ["#[global_allocator] static ALLOC: MyAlloc = MyAlloc;", "#[allocator] static ALLOC: MyAlloc = MyAlloc;", "global_allocator(MyAlloc);", "set_allocator(MyAlloc);"],
        "answer_en": "#[global_allocator] static ALLOC: MyAlloc = MyAlloc;",
        "answer_hi": "#[global_allocator] static ALLOC: MyAlloc = MyAlloc;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of the 'AsMut' trait?",
        "question_hi": "'AsMut' trait का उद्देश्य क्या है?",
        "options_en": ["Enable cheap mutable reference conversion", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["चीप mutable रिफरेन्स कन्वर्जन एनेबल करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Enable cheap mutable reference conversion",
        "answer_hi": "चीप mutable रिफरेन्स कन्वर्जन एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How do you create a custom future?",
        "question_hi": "कस्टम फ्यूचर कैसे बनाते हैं?",
        "options_en": ["struct MyFuture { } impl Future for MyFuture { type Output = (); }", "future struct MyFuture {}", "async fn my_future() {}", "fn future() -> impl Future {}"],
        "options_hi": ["struct MyFuture { } impl Future for MyFuture { type Output = (); }", "future struct MyFuture {}", "async fn my_future() {}", "fn future() -> impl Future {}"],
        "answer_en": "struct MyFuture { } impl Future for MyFuture { type Output = (); }",
        "answer_hi": "struct MyFuture { } impl Future for MyFuture { type Output = (); }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of the 'Deref' trait?",
        "question_hi": "'Deref' trait का उद्देश्य क्या है?",
        "options_en": ["Enable dereference operator (*) overloading", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["डिरेफरेन्स ऑपरेटर (*) ओवरलोडिंग एनेबल करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Enable dereference operator (*) overloading",
        "answer_hi": "डिरेफरेन्स ऑपरेटर (*) ओवरलोडिंग एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How do you create a custom stream?",
        "question_hi": "कस्टम स्ट्रीम कैसे बनाते हैं?",
        "options_en": ["struct MyStream { } impl Stream for MyStream { type Item = i32; }", "stream struct MyStream {}", "async stream fn my_stream() {}", "fn stream() -> impl Stream {}"],
        "options_hi": ["struct MyStream { } impl Stream for MyStream { type Item = i32; }", "stream struct MyStream {}", "async stream fn my_stream() {}", "fn stream() -> impl Stream {}"],
        "answer_en": "struct MyStream { } impl Stream for MyStream { type Item = i32; }",
        "answer_hi": "struct MyStream { } impl Stream for MyStream { type Item = i32; }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of the 'DerefMut' trait?",
        "question_hi": "'DerefMut' trait का उद्देश्य क्या है?",
        "options_en": ["Enable mutable dereference operator overloading", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["mutable डिरेफरेन्स ऑपरेटर ओवरलोडिंग एनेबल करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Enable mutable dereference operator overloading",
        "answer_hi": "mutable डिरेफरेन्स ऑपरेटर ओवरलोडिंग एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How do you create a custom sink?",
        "question_hi": "कस्टम सिंक कैसे बनाते हैं?",
        "options_en": ["struct MySink { } impl Sink for MySink { type Error = (); }", "sink struct MySink {}", "async sink fn my_sink() {}", "fn sink() -> impl Sink {}"],
        "options_hi": ["struct MySink { } impl Sink for MySink { type Error = (); }", "sink struct MySink {}", "async sink fn my_sink() {}", "fn sink() -> impl Sink {}"],
        "answer_en": "struct MySink { } impl Sink for MySink { type Error = (); }",
        "answer_hi": "struct MySink { } impl Sink for MySink { type Error = (); }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of the 'Borrow' trait?",
        "question_hi": "'Borrow' trait का उद्देश्य क्या है?",
        "options_en": ["Enable flexible borrowing for HashMap keys", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["HashMap की के लिए फ्लेक्सिबल बोरोइंग एनेबल करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Enable flexible borrowing for HashMap keys",
        "answer_hi": "HashMap की के लिए फ्लेक्सिबल बोरोइंग एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How do you create a custom derive macro?",
        "question_hi": "कस्टम derive मैक्रो कैसे बनाते हैं?",
        "options_en": ["#[proc_macro_derive(MyDerive)] pub fn my_derive(input: TokenStream) -> TokenStream {}", "#[derive_macro] fn my_derive() {}", "macro_derive! MyDerive {}", "derive_macro(MyDerive) {}"],
        "options_hi": ["#[proc_macro_derive(MyDerive)] pub fn my_derive(input: TokenStream) -> TokenStream {}", "#[derive_macro] fn my_derive() {}", "macro_derive! MyDerive {}", "derive_macro(MyDerive) {}"],
        "answer_en": "#[proc_macro_derive(MyDerive)] pub fn my_derive(input: TokenStream) -> TokenStream {}",
        "answer_hi": "#[proc_macro_derive(MyDerive)] pub fn my_derive(input: TokenStream) -> TokenStream {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of the 'BorrowMut' trait?",
        "question_hi": "'BorrowMut' trait का उद्देश्य क्या है?",
        "options_en": ["Enable flexible mutable borrowing", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["फ्लेक्सिबल mutable बोरोइंग एनेबल करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Enable flexible mutable borrowing",
        "answer_hi": "फ्लेक्सिबल mutable बोरोइंग एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How do you create a custom attribute macro?",
        "question_hi": "कस्टम attribute मैक्रो कैसे बनाते हैं?",
        "options_en": ["#[proc_macro_attribute] pub fn my_attr(attr: TokenStream, item: TokenStream) -> TokenStream {}", "#[attribute_macro] fn my_attr() {}", "macro_attribute! my_attr {}", "attribute_macro(my_attr) {}"],
        "options_hi": ["#[proc_macro_attribute] pub fn my_attr(attr: TokenStream, item: TokenStream) -> TokenStream {}", "#[attribute_macro] fn my_attr() {}", "macro_attribute! my_attr {}", "attribute_macro(my_attr) {}"],
        "answer_en": "#[proc_macro_attribute] pub fn my_attr(attr: TokenStream, item: TokenStream) -> TokenStream {}",
        "answer_hi": "#[proc_macro_attribute] pub fn my_attr(attr: TokenStream, item: TokenStream) -> TokenStream {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of the 'ToOwned' trait?",
        "question_hi": "'ToOwned' trait का उद्देश्य क्या है?",
        "options_en": ["Enable conversion from borrowed to owned data", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["बोरोड डेटा से ओनड डेटा में कन्वर्जन एनेबल करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Enable conversion from borrowed to owned data",
        "answer_hi": "बोरोड डेटा से ओनड डेटा में कन्वर्जन एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How do you create a custom function-like macro?",
        "question_hi": "कस्टम function-like मैक्रो कैसे बनाते हैं?",
        "options_en": ["#[proc_macro] pub fn my_macro(input: TokenStream) -> TokenStream {}", "#[function_macro] fn my_macro() {}", "macro_fn! my_macro {}", "function_macro(my_macro) {}"],
        "options_hi": ["#[proc_macro] pub fn my_macro(input: TokenStream) -> TokenStream {}", "#[function_macro] fn my_macro() {}", "macro_fn! my_macro {}", "function_macro(my_macro) {}"],
        "answer_en": "#[proc_macro] pub fn my_macro(input: TokenStream) -> TokenStream {}",
        "answer_hi": "#[proc_macro] pub fn my_macro(input: TokenStream) -> TokenStream {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of the 'TryFrom' trait?",
        "question_hi": "'TryFrom' trait का उद्देश्य क्या है?",
        "options_en": ["Enable fallible type conversions", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["फेलिबल टाइप कन्वर्जन एनेबल करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Enable fallible type conversions",
        "answer_hi": "फेलिबल टाइप कन्वर्जन एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How do you create a custom procedural macro?",
        "question_hi": "कस्टम procedural मैक्रो कैसे बनाते हैं?",
        "options_en": ["use proc_macro::TokenStream; #[proc_macro] pub fn my_macro(input: TokenStream) -> TokenStream {}", "proc_macro! my_macro {}", "procedural_macro! {}", "macro_proc! my_macro {}"],
        "options_hi": ["use proc_macro::TokenStream; #[proc_macro] pub fn my_macro(input: TokenStream) -> TokenStream {}", "proc_macro! my_macro {}", "procedural_macro! {}", "macro_proc! my_macro {}"],
        "answer_en": "use proc_macro::TokenStream; #[proc_macro] pub fn my_macro(input: TokenStream) -> TokenStream {}",
        "answer_hi": "use proc_macro::TokenStream; #[proc_macro] pub fn my_macro(input: TokenStream) -> TokenStream {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of the 'TryInto' trait?",
        "question_hi": "'TryInto' trait का उद्देश्य क्या है?",
        "options_en": ["Enable fallible type conversions with into()", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["into() के साथ फेलिबल टाइप कन्वर्जन एनेबल करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Enable fallible type conversions with into()",
        "answer_hi": "into() के साथ फेलिबल टाइप कन्वर्जन एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you create a custom declarative macro?",
        "question_hi": "कस्टम declarative मैक्रो कैसे बनाते हैं?",
        "options_en": ["macro_rules! my_macro { () => {} }", "decl_macro! my_macro { }", "#[macro] fn my_macro() {}", "macro_decl! my_macro {}"],
        "options_hi": ["macro_rules! my_macro { () => {} }", "decl_macro! my_macro { }", "#[macro] fn my_macro() {}", "macro_decl! my_macro {}"],
        "answer_en": "macro_rules! my_macro { () => {} }",
        "answer_hi": "macro_rules! my_macro { () => {} }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of the 'Index' trait?",
        "question_hi": "'Index' trait का उद्देश्य क्या है?",
        "options_en": ["Enable indexing with [] operator", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["[] ऑपरेटर के साथ इंडेक्सिंग एनेबल करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Enable indexing with [] operator",
        "answer_hi": "[] ऑपरेटर के साथ इंडेक्सिंग एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you create a custom macro that generates code?",
        "question_hi": "कस्टम मैक्रो कैसे बनाते हैं जो कोड जेनरेट करता है?",
        "options_en": ["macro_rules! my_macro { ($($t:tt)*) => { $($t)* } }", "codegen_macro! {}", "generate_macro! {}", "macro_gen! {}"],
        "options_hi": ["macro_rules! my_macro { ($($t:tt)*) => { $($t)* } }", "codegen_macro! {}", "generate_macro! {}", "macro_gen! {}"],
        "answer_en": "macro_rules! my_macro { ($($t:tt)*) => { $($t)* } }",
        "answer_hi": "macro_rules! my_macro { ($($t:tt)*) => { $($t)* } }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of the 'IndexMut' trait?",
        "question_hi": "'IndexMut' trait का उद्देश्य क्या है?",
        "options_en": ["Enable mutable indexing with [] operator", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["[] ऑपरेटर के साथ mutable इंडेक्सिंग एनेबल करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Enable mutable indexing with [] operator",
        "answer_hi": "[] ऑपरेटर के साथ mutable इंडेक्सिंग एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How do you create a custom macro with hygiene?",
        "question_hi": "हाइजीन के साथ कस्टम मैक्रो कैसे बनाते हैं?",
        "options_en": ["macro_rules! my_macro { () => { let x = 0; } }", "hygienic_macro! {}", "macro_hygiene! {}", "clean_macro! {}"],
        "options_hi": ["macro_rules! my_macro { () => { let x = 0; } }", "hygienic_macro! {}", "macro_hygiene! {}", "clean_macro! {}"],
        "answer_en": "macro_rules! my_macro { () => { let x = 0; } }",
        "answer_hi": "macro_rules! my_macro { () => { let x = 0; } }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of the 'RangeBounds' trait?",
        "question_hi": "'RangeBounds' trait का उद्देश्य क्या है?",
        "options_en": ["Enable range-based indexing and slicing", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["रेंज-बेस्ड इंडेक्सिंग और स्लाइसिंग एनेबल करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Enable range-based indexing and slicing",
        "answer_hi": "रेंज-बेस्ड इंडेक्सिंग और स्लाइसिंग एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you create a custom macro that accepts patterns?",
        "question_hi": "कस्टम मैक्रो कैसे बनाते हैं जो पैटर्न स्वीकार करता है?",
        "options_en": ["macro_rules! my_macro { ($p:pat) => {} }", "pattern_macro! {}", "macro_pattern! {}", "pat_macro! {}"],
        "options_hi": ["macro_rules! my_macro { ($p:pat) => {} }", "pattern_macro! {}", "macro_pattern! {}", "pat_macro! {}"],
        "answer_en": "macro_rules! my_macro { ($p:pat) => {} }",
        "answer_hi": "macro_rules! my_macro { ($p:pat) => {} }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of the 'FnOnce' trait?",
        "question_hi": "'FnOnce' trait का उद्देश्य क्या है?",
        "options_en": ["Define closures that can be called once", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["उन क्लोजर को डिफाइन करना जिन्हें एक बार कॉल किया जा सकता है", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Define closures that can be called once",
        "answer_hi": "उन क्लोजर को डिफाइन करना जिन्हें एक बार कॉल किया जा सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you create a custom macro that accepts expressions?",
        "question_hi": "कस्टम मैक्रो कैसे बनाते हैं जो एक्सप्रेशन स्वीकार करता है?",
        "options_en": ["macro_rules! my_macro { ($e:expr) => {} }", "expr_macro! {}", "macro_expr! {}", "expression_macro! {}"],
        "options_hi": ["macro_rules! my_macro { ($e:expr) => {} }", "expr_macro! {}", "macro_expr! {}", "expression_macro! {}"],
        "answer_en": "macro_rules! my_macro { ($e:expr) => {} }",
        "answer_hi": "macro_rules! my_macro { ($e:expr) => {} }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of the 'FnMut' trait?",
        "question_hi": "'FnMut' trait का उद्देश्य क्या है?",
        "options_en": ["Define closures that can be called mutably", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["उन क्लोजर को डिफाइन करना जिन्हें mutably कॉल किया जा सकता है", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Define closures that can be called mutably",
        "answer_hi": "उन क्लोजर को डिफाइन करना जिन्हें mutably कॉल किया जा सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How do you create a custom macro that accepts types?",
        "question_hi": "कस्टम मैक्रो कैसे बनाते हैं जो टाइप स्वीकार करता है?",
        "options_en": ["macro_rules! my_macro { ($t:ty) => {} }", "type_macro! {}", "macro_type! {}", "ty_macro! {}"],
        "options_hi": ["macro_rules! my_macro { ($t:ty) => {} }", "type_macro! {}", "macro_type! {}", "ty_macro! {}"],
        "answer_en": "macro_rules! my_macro { ($t:ty) => {} }",
        "answer_hi": "macro_rules! my_macro { ($t:ty) => {} }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of the 'Generator' trait?",
        "question_hi": "'Generator' trait का उद्देश्य क्या है?",
        "options_en": ["Define resumable functions with yield", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["yield के साथ रिज्यूमेबल फंक्शन डिफाइन करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Define resumable functions with yield",
        "answer_hi": "yield के साथ रिज्यूमेबल फंक्शन डिफाइन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do you create a custom macro that accepts identifiers?",
        "question_hi": "कस्टम मैक्रो कैसे बनाते हैं जो आइडेंटिफायर स्वीकार करता है?",
        "options_en": ["macro_rules! my_macro { ($i:ident) => {} }", "ident_macro! {}", "macro_ident! {}", "identifier_macro! {}"],
        "options_hi": ["macro_rules! my_macro { ($i:ident) => {} }", "ident_macro! {}", "macro_ident! {}", "identifier_macro! {}"],
        "answer_en": "macro_rules! my_macro { ($i:ident) => {} }",
        "answer_hi": "macro_rules! my_macro { ($i:ident) => {} }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of the 'Termination' trait?",
        "question_hi": "'Termination' trait का उद्देश्य क्या है?",
        "options_en": ["Define program exit behavior for main()", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["main() के लिए प्रोग्राम एक्जिट बिहेवियर डिफाइन करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Define program exit behavior for main()",
        "answer_hi": "main() के लिए प्रोग्राम एक्जिट बिहेवियर डिफाइन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How do you create a custom macro that accepts literals?",
        "question_hi": "कस्टम मैक्रो कैसे बनाते हैं जो लिटरल स्वीकार करता है?",
        "options_en": ["macro_rules! my_macro { ($l:literal) => {} }", "literal_macro! {}", "macro_literal! {}", "lit_macro! {}"],
        "options_hi": ["macro_rules! my_macro { ($l:literal) => {} }", "literal_macro! {}", "macro_literal! {}", "lit_macro! {}"],
        "answer_en": "macro_rules! my_macro { ($l:literal) => {} }",
        "answer_hi": "macro_rules! my_macro { ($l:literal) => {} }",
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