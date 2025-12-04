const questions = [
    {
        "num": 1,
        "question_en": "What is 'unsafe' code in Rust?",
        "question_hi": "Rust में 'unsafe' कोड क्या है?",
        "options_en": ["Code that bypasses some safety checks", "Unoptimized code", "Experimental features", "Deprecated code"],
        "options_hi": ["वह कोड जो कुछ सेफ्टी चेक्स को बायपास करता है", "अनऑप्टिमाइज्ड कोड", "एक्सपेरिमेंटल फीचर्स", "डिप्रिकेटेड कोड"],
        "answer_en": "Code that bypasses some safety checks",
        "answer_hi": "वह कोड जो कुछ सेफ्टी चेक्स को बायपास करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the purpose of 'Option<T>'?",
        "question_hi": "'Option<T>' का उद्देश्य क्या है?",
        "options_en": ["Represent optional values", "Optimize code", "Handle errors", "Manage memory"],
        "options_hi": ["ऑप्शनल वैल्यूज को रिप्रेजेंट करना", "कोड ऑप्टिमाइज़ करना", "एरर हैंडल करना", "मेमोरी मैनेज करना"],
        "answer_en": "Represent optional values",
        "answer_hi": "ऑप्शनल वैल्यूज को रिप्रेजेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "How do you iterate over a vector?",
        "question_hi": "Vector पर iterate कैसे करते हैं?",
        "options_en": ["Using for loop with iter()", "Using while loop", "Using foreach", "Using map() only"],
        "options_hi": ["iter() के साथ for loop का उपयोग", "while loop का उपयोग", "foreach का उपयोग", "केवल map() का उपयोग"],
        "answer_en": "Using for loop with iter()",
        "answer_hi": "iter() के साथ for loop का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you handle errors in Rust using Result<T, E>?",
        "question_hi": "Rust में Result<T, E> का उपयोग करके errors को कैसे हैंडल करते हैं?",
        "options_en": ["Using match statements", "Automatic error propagation", "Try-catch blocks", "Error events"],
        "options_hi": ["match स्टेटमेंट्स का उपयोग", "ऑटोमैटिक एरर प्रोपगेशन", "Try-catch ब्लॉक्स", "एरर इवेंट्स"],
        "answer_en": "Using match statements",
        "answer_hi": "match स्टेटमेंट्स का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of the 'unwrap()' method?",
        "question_hi": "'unwrap()' मेथड का उद्देश्य क्या है?",
        "options_en": ["Extract value from Option/Result", "Wrap a value", "Handle errors safely", "Create a new thread"],
        "options_hi": ["Option/Result से वैल्यू निकालना", "वैल्यू को wrap करना", "Errors को सुरक्षित रूप से हैंडल करना", "नया थ्रेड बनाना"],
        "answer_en": "Extract value from Option/Result",
        "answer_hi": "Option/Result से वैल्यू निकालना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What does '#[derive(Debug)]' do?",
        "question_hi": "'#[derive(Debug)]' क्या करता है?",
        "options_en": ["Automatically implements Debug trait", "Enables debugging", "Creates debug logs", "Compiles in debug mode"],
        "options_hi": ["Debug trait को ऑटोमैटिकली इम्प्लीमेंट करता है", "डिबगिंग सक्षम करता है", "डिबग लॉग बनाता है", "डिबग मोड में कम्पाइल करता है"],
        "answer_en": "Automatically implements Debug trait",
        "answer_hi": "Debug trait को ऑटोमैटिकली इम्प्लीमेंट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is pattern matching in Rust?",
        "question_hi": "Rust में pattern matching क्या है?",
        "options_en": ["Comparing values against patterns", "String pattern search", "Regular expressions", "File pattern matching"],
        "options_hi": ["पैटर्न के विरुद्ध वैल्यूज की तुलना", "स्ट्रिंग पैटर्न सर्च", "रेगुलर एक्सप्रेशन", "फाइल पैटर्न मैचिंग"],
        "answer_en": "Comparing values against patterns",
        "answer_hi": "पैटर्न के विरुद्ध वैल्यूज की तुलना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the difference between String and &str?",
        "question_hi": "String और &str में क्या अंतर है?",
        "options_en": ["String is owned, &str is borrowed", "String is faster", "&str is mutable", "No difference"],
        "options_hi": ["String owned है, &str borrowed है", "String तेज है", "&str mutable है", "कोई अंतर नहीं"],
        "answer_en": "String is owned, &str is borrowed",
        "answer_hi": "String owned है, &str borrowed है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "How do you create a new vector in Rust?",
        "question_hi": "Rust में नया vector कैसे बनाते हैं?",
        "options_en": ["Vec::new()", "new Vector()", "create_vector()", "Vector::new()"],
        "options_hi": ["Vec::new()", "new Vector()", "create_vector()", "Vector::new()"],
        "answer_en": "Vec::new()",
        "answer_hi": "Vec::new()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the purpose of the 'match' keyword?",
        "question_hi": "'match' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Pattern matching", "String comparison", "Thread matching", "File matching"],
        "options_hi": ["पैटर्न मैचिंग", "स्ट्रिंग कम्पेयरिजन", "थ्रेड मैचिंग", "फाइल मैचिंग"],
        "answer_en": "Pattern matching",
        "answer_hi": "पैटर्न मैचिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What does the 'impl' keyword do?",
        "question_hi": "'impl' कीवर्ड क्या करता है?",
        "options_en": ["Implements traits for types", "Imports libraries", "Implicit conversion", "Improves performance"],
        "options_hi": ["टाइप्स के लिए traits इम्प्लीमेंट करता है", "लाइब्रेरीज इम्पोर्ट करता है", "इम्प्लिसिट कन्वर्जन", "परफॉर्मेंस इम्प्रूव करता है"],
        "answer_en": "Implements traits for types",
        "answer_hi": "टाइप्स के लिए traits इम्प्लीमेंट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is a lifetime in Rust?",
        "question_hi": "Rust में lifetime क्या है?",
        "options_en": ["Scope of a reference", "Program execution time", "Memory allocation duration", "Thread lifetime"],
        "options_hi": ["रिफरेन्स का स्कोप", "प्रोग्राम एक्जीक्यूशन टाइम", "मेमोरी अलोकेशन ड्यूरेशन", "थ्रेड लाइफटाइम"],
        "answer_en": "Scope of a reference",
        "answer_hi": "रिफरेन्स का स्कोप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How do you define a struct in Rust?",
        "question_hi": "Rust में struct कैसे डिफाइन करते हैं?",
        "options_en": ["struct Name { fields }", "class Name { fields }", "define struct Name", "new struct Name"],
        "options_hi": ["struct Name { fields }", "class Name { fields }", "define struct Name", "new struct Name"],
        "answer_en": "struct Name { fields }",
        "answer_hi": "struct Name { fields }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the '?' operator used for?",
        "question_hi": "'?' ऑपरेटर किस लिए उपयोग किया जाता है?",
        "options_en": ["Error propagation", "Optional values", "Question mark in strings", "Boolean operations"],
        "options_hi": ["एरर प्रोपगेशन", "ऑप्शनल वैल्यूज", "स्ट्रिंग्स में प्रश्न चिन्ह", "बूलियन ऑपरेशन"],
        "answer_en": "Error propagation",
        "answer_hi": "एरर प्रोपगेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is a closure in Rust?",
        "question_hi": "Rust में closure क्या है?",
        "options_en": ["Anonymous function", "Function pointer", "Method closure", "Block scope"],
        "options_hi": ["अनाम फंक्शन", "फंक्शन पॉइंटर", "मेथड क्लोजर", "ब्लॉक स्कोप"],
        "answer_en": "Anonymous function",
        "answer_hi": "अनाम फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you handle concurrent programming in Rust?",
        "question_hi": "Rust में concurrent programming कैसे हैंडल करते हैं?",
        "options_en": ["Using threads and channels", "Async/await only", "Shared memory only", "No concurrency support"],
        "options_hi": ["थ्रेड्स और चैनल्स का उपयोग", "केवल Async/await", "केवल शेयर्ड मेमोरी", "कोई कंकरेंसी सपोर्ट नहीं"],
        "answer_en": "Using threads and channels",
        "answer_hi": "थ्रेड्स और चैनल्स का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of 'Box<T>'?",
        "question_hi": "'Box<T>' का उद्देश्य क्या है?",
        "options_en": ["Heap allocation", "Stack allocation", "Boxing values", "Package management"],
        "options_hi": ["हीप अलोकेशन", "स्टैक अलोकेशन", "वैल्यूज को बॉक्स करना", "पैकेज मैनेजमेंट"],
        "answer_en": "Heap allocation",
        "answer_hi": "हीप अलोकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does 'move' keyword do in closures?",
        "question_hi": "closures में 'move' कीवर्ड क्या करता है?",
        "options_en": ["Takes ownership of captured variables", "Moves closure to heap", "Transfers ownership to thread", "Moves data between threads"],
        "options_hi": ["कैप्चर किए गए वेरिएबल्स की ownership लेता है", "क्लोजर को हीप पर मूव करता है", "थ्रेड को ownership ट्रांसफर करता है", "थ्रेड्स के बीच डेटा मूव करता है"],
        "answer_en": "Takes ownership of captured variables",
        "answer_hi": "कैप्चर किए गए वेरिएबल्स की ownership लेता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the difference between '==' and 'eq()'?",
        "question_hi": "'==' और 'eq()' में क्या अंतर है?",
        "options_en": ["No difference, both check equality", "== is for primitives, eq() for objects", "eq() is faster", "== is for reference equality"],
        "options_hi": ["कोई अंतर नहीं, दोनों equality चेक करते हैं", "== primitives के लिए, eq() objects के लिए", "eq() तेज है", "== reference equality के लिए है"],
        "answer_en": "No difference, both check equality",
        "answer_hi": "कोई अंतर नहीं, दोनों equality चेक करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you create a new thread in Rust?",
        "question_hi": "Rust में नया थ्रेड कैसे बनाते हैं?",
        "options_en": ["thread::spawn()", "Thread::new()", "create_thread()", "new Thread()"],
        "options_hi": ["thread::spawn()", "Thread::new()", "create_thread()", "new Thread()"],
        "answer_en": "thread::spawn()",
        "answer_hi": "thread::spawn()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the main advantage of Rust's ownership system?",
        "question_hi": "Rust की ownership system का मुख्य लाभ क्या है?",
        "options_en": ["Memory safety without garbage collection", "Faster execution speed", "Automatic memory management", "Simpler syntax"],
        "options_hi": ["गार्बेज कलेक्शन के बिना मेमोरी सुरक्षा", "तेज एक्जीक्यूशन स्पीड", "ऑटोमैटिक मेमोरी मैनेजमेंट", "सरल सिंटैक्स"],
        "answer_en": "Memory safety without garbage collection",
        "answer_hi": "गार्बेज कलेक्शन के बिना मेमोरी सुरक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does the 'mut' keyword do in Rust?",
        "question_hi": "Rust में 'mut' कीवर्ड क्या करता है?",
        "options_en": ["Makes a variable mutable", "Creates a mutable reference", "Declares a function", "Imports a module"],
        "options_hi": ["वेरिएबल को mutable बनाता है", "Mutable reference बनाता है", "फंक्शन डिक्लेयर करता है", "मॉड्यूल इम्पोर्ट करता है"],
        "answer_en": "Makes a variable mutable",
        "answer_hi": "वेरिएबल को mutable बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is a trait in Rust?",
        "question_hi": "Rust में trait क्या है?",
        "options_en": ["A collection of methods", "A type of variable", "A memory management technique", "A error handling mechanism"],
        "options_hi": ["मेथड्स का कलेक्शन", "एक प्रकार का वेरिएबल", "मेमोरी मैनेजमेंट टेक्नीक", "एरर हैंडलिंग मैकेनिज्म"],
        "answer_en": "A collection of methods",
        "answer_hi": "मेथड्स का कलेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is 'dyn' keyword used for?",
        "question_hi": "'dyn' कीवर्ड किस लिए उपयोग किया जाता है?",
        "options_en": ["Trait objects", "Dynamic arrays", "Dynamic typing", "Dynamic dispatch"],
        "options_hi": ["Trait objects", "डायनामिक ऐरे", "डायनामिक टाइपिंग", "डायनामिक डिस्पैच"],
        "answer_en": "Trait objects",
        "answer_hi": "Trait objects",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the difference between 'let' and 'const'?",
        "question_hi": "'let' और 'const' में क्या अंतर है?",
        "options_en": ["let can be mutable, const is always immutable", "const is faster", "let is for variables, const for functions", "No difference"],
        "options_hi": ["let mutable हो सकता है, const हमेशा immutable होता है", "const तेज है", "let वेरिएबल्स के लिए, const फंक्शन्स के लिए", "कोई अंतर नहीं"],
        "answer_en": "let can be mutable, const is always immutable",
        "answer_hi": "let mutable हो सकता है, const हमेशा immutable होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How do you handle panics in Rust?",
        "question_hi": "Rust में panics को कैसे हैंडल करते हैं?",
        "options_en": ["Using catch_unwind", "Try-catch blocks", "Error handling", "Panic recovery"],
        "options_hi": ["catch_unwind का उपयोग", "Try-catch ब्लॉक्स", "एरर हैंडलिंग", "पैनिक रिकवरी"],
        "answer_en": "Using catch_unwind",
        "answer_hi": "catch_unwind का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is a macro in Rust?",
        "question_hi": "Rust में macro क्या है?",
        "options_en": ["Code that writes code", "Large function", "External library", "Compiler directive"],
        "options_hi": ["वह कोड जो कोड लिखता है", "बड़ा फंक्शन", "एक्सटर्नल लाइब्रेरी", "कंपाइलर डायरेक्टिव"],
        "answer_en": "Code that writes code",
        "answer_hi": "वह कोड जो कोड लिखता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the purpose of 'RefCell<T>'?",
        "question_hi": "'RefCell<T>' का उद्देश्य क्या है?",
        "options_en": ["Interior mutability", "Reference counting", "Cell reference", "Borrow checker"],
        "options_hi": ["इंटीरियर म्यूटेबिलिटी", "रिफरेन्स काउंटिंग", "सेल रिफरेन्स", "बोरो चेकर"],
        "answer_en": "Interior mutability",
        "answer_hi": "इंटीरियर म्यूटेबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How do you create a HashMap?",
        "question_hi": "HashMap कैसे बनाते हैं?",
        "options_en": ["HashMap::new()", "new HashMap()", "create_hashmap()", "Map::new()"],
        "options_hi": ["HashMap::new()", "new HashMap()", "create_hashmap()", "Map::new()"],
        "answer_en": "HashMap::new()",
        "answer_hi": "HashMap::new()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the 'async/await' syntax for?",
        "question_hi": "'async/await' सिंटैक्स किस लिए है?",
        "options_en": ["Asynchronous programming", "Synchronous operations", "Error handling", "Memory management"],
        "options_hi": ["असिंक्रोनस प्रोग्रामिंग", "सिंक्रोनस ऑपरेशन", "एरर हैंडलिंग", "मेमोरी मैनेजमेंट"],
        "answer_en": "Asynchronous programming",
        "answer_hi": "असिंक्रोनस प्रोग्रामिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is 'cargo' in Rust?",
        "question_hi": "Rust में 'cargo' क्या है?",
        "options_en": ["Package manager and build system", "Compiler", "Debugger", "Code formatter"],
        "options_hi": ["पैकेज मैनेजर और बिल्ड सिस्टम", "कंपाइलर", "डिबगर", "कोड फॉर्मेटर"],
        "answer_en": "Package manager and build system",
        "answer_hi": "पैकेज मैनेजर और बिल्ड सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does 'clone()' method do?",
        "question_hi": "'clone()' मेथड क्या करता है?",
        "options_en": ["Creates a deep copy", "Creates a reference", "Moves ownership", "Deletes the object"],
        "options_hi": ["डीप कॉपी बनाता है", "रिफरेन्स बनाता है", "Ownership मूव करता है", "ऑब्जेक्ट डिलीट करता है"],
        "answer_en": "Creates a deep copy",
        "answer_hi": "डीप कॉपी बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the difference between 'i32' and 'u32'?",
        "question_hi": "'i32' और 'u32' में क्या अंतर है?",
        "options_en": ["i32 is signed, u32 is unsigned", "i32 is larger", "u32 is faster", "No difference"],
        "options_hi": ["i32 signed है, u32 unsigned है", "i32 बड़ा है", "u32 तेज है", "कोई अंतर नहीं"],
        "answer_en": "i32 is signed, u32 is unsigned",
        "answer_hi": "i32 signed है, u32 unsigned है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you handle optional values safely?",
        "question_hi": "ऑप्शनल वैल्यूज को सुरक्षित रूप से कैसे हैंडल करते हैं?",
        "options_en": ["Using pattern matching", "Always using unwrap()", "Ignoring them", "Using panic!"],
        "options_hi": ["पैटर्न मैचिंग का उपयोग", "हमेशा unwrap() का उपयोग", "उन्हें इग्नोर करना", "panic! का उपयोग"],
        "answer_en": "Using pattern matching",
        "answer_hi": "पैटर्न मैचिंग का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is 'Arc<T>' used for?",
        "question_hi": "'Arc<T>' किस लिए उपयोग किया जाता है?",
        "options_en": ["Atomic reference counting", "Archiving data", "Array creation", "Arithmetic operations"],
        "options_hi": ["एटॉमिक रिफरेन्स काउंटिंग", "डेटा आर्काइविंग", "ऐरे क्रिएशन", "अरिथमेटिक ऑपरेशन"],
        "answer_en": "Atomic reference counting",
        "answer_hi": "एटॉमिक रिफरेन्स काउंटिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the purpose of 'Mutex<T>'?",
        "question_hi": "'Mutex<T>' का उद्देश्य क्या है?",
        "options_en": ["Mutual exclusion for threads", "Memory allocation", "Mutable variables", "Method execution"],
        "options_hi": ["थ्रेड्स के लिए म्यूचुअल एक्सक्लूजन", "मेमोरी अलोकेशन", "Mutable वेरिएबल्स", "मेथड एक्जीक्यूशन"],
        "answer_en": "Mutual exclusion for threads",
        "answer_hi": "थ्रेड्स के लिए म्यूचुअल एक्सक्लूजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How do you define an enum in Rust?",
        "question_hi": "Rust में enum कैसे डिफाइन करते हैं?",
        "options_en": ["enum Name { Variants }", "define enum Name", "enum Name = {}", "new enum Name"],
        "options_hi": ["enum Name { Variants }", "define enum Name", "enum Name = {}", "new enum Name"],
        "answer_en": "enum Name { Variants }",
        "answer_hi": "enum Name { Variants }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is 'if let' syntax used for?",
        "question_hi": "'if let' सिंटैक्स किस लिए उपयोग किया जाता है?",
        "options_en": ["Pattern matching in if conditions", "Let declarations", "If conditions only", "Variable assignment"],
        "options_hi": ["if कंडीशन में पैटर्न मैचिंग", "Let डिक्लेरेशन", "केवल if कंडीशन", "वेरिएबल असाइनमेंट"],
        "answer_en": "Pattern matching in if conditions",
        "answer_hi": "if कंडीशन में पैटर्न मैचिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What does 'pub' keyword do?",
        "question_hi": "'pub' कीवर्ड क्या करता है?",
        "options_en": ["Makes item public", "Publishes code", "Public interface", "Module publication"],
        "options_hi": ["आइटम को public बनाता है", "कोड पब्लिश करता है", "पब्लिक इंटरफेस", "मॉड्यूल पब्लिकेशन"],
        "answer_en": "Makes item public",
        "answer_hi": "आइटम को public बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the 'Drop' trait for?",
        "question_hi": "'Drop' trait किस लिए है?",
        "options_en": ["Custom cleanup when value goes out of scope", "Dropping values", "Error handling", "Memory allocation"],
        "options_hi": ["वैल्यू के स्कोप से बाहर जाने पर कस्टम क्लीनअप", "वैल्यूज ड्रॉप करना", "एरर हैंडलिंग", "मेमोरी अलोकेशन"],
        "answer_en": "Custom cleanup when value goes out of scope",
        "answer_hi": "वैल्यू के स्कोप से बाहर जाने पर कस्टम क्लीनअप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How do you concatenate strings?",
        "question_hi": "स्ट्रिंग्स को कैसे जोड़ते हैं?",
        "options_en": ["Using + operator or format! macro", "Using concat() method", "Using append()", "Using join()"],
        "options_hi": ["+ ऑपरेटर या format! मैक्रो का उपयोग", "concat() मेथड का उपयोग", "append() का उपयोग", "join() का उपयोग"],
        "answer_en": "Using + operator or format! macro",
        "answer_hi": "+ ऑपरेटर या format! मैक्रो का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is 'Cow' (Clone on Write) in Rust?",
        "question_hi": "Rust में 'Cow' (Clone on Write) क्या है?",
        "options_en": ["Smart pointer for clone-on-write", "Cow animal type", "Copy-on-write optimization", "Constant object wrapper"],
        "options_hi": ["क्लोन-ऑन-राइट के लिए स्मार्ट पॉइंटर", "Cow एनिमल टाइप", "कॉपी-ऑन-राइट ऑप्टिमाइज़ेशन", "कॉन्स्टेंट ऑब्जेक्ट रैपर"],
        "answer_en": "Smart pointer for clone-on-write",
        "answer_hi": "क्लोन-ऑन-राइट के लिए स्मार्ट पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of 'From' and 'Into' traits?",
        "question_hi": "'From' और 'Into' traits का उद्देश्य क्या है?",
        "options_en": ["Type conversions", "Trait inheritance", "Function parameters", "Memory conversions"],
        "options_hi": ["टाइप कन्वर्जन", "Trait इनहेरिटेंस", "फंक्शन पैरामीटर्स", "मेमोरी कन्वर्जन"],
        "answer_en": "Type conversions",
        "answer_hi": "टाइप कन्वर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How do you handle file I/O in Rust?",
        "question_hi": "Rust में file I/O कैसे हैंडल करते हैं?",
        "options_en": ["Using std::fs module", "Using file! macro", "Using io module only", "Using fs::read/write"],
        "options_hi": ["std::fs मॉड्यूल का उपयोग", "file! मैक्रो का उपयोग", "केवल io मॉड्यूल का उपयोग", "fs::read/write का उपयोग"],
        "answer_en": "Using std::fs module",
        "answer_hi": "std::fs मॉड्यूल का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is 'Rc<T>' used for?",
        "question_hi": "'Rc<T>' किस लिए उपयोग किया जाता है?",
        "options_en": ["Reference counting in single thread", "Runtime checks", "Resource cleanup", "Race condition prevention"],
        "options_hi": ["सिंगल थ्रेड में रिफरेन्स काउंटिंग", "रनटाइम चेक्स", "रिसोर्स क्लीनअप", "रेस कंडीशन प्रिवेंशन"],
        "answer_en": "Reference counting in single thread",
        "answer_hi": "सिंगल थ्रेड में रिफरेन्स काउंटिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the difference between 'iter()' and 'into_iter()'?",
        "question_hi": "'iter()' और 'into_iter()' में क्या अंतर है?",
        "options_en": ["iter() borrows, into_iter() takes ownership", "iter() is faster", "into_iter() borrows", "No difference"],
        "options_hi": ["iter() उधार लेता है, into_iter() ownership लेता है", "iter() तेज है", "into_iter() उधार लेता है", "कोई अंतर नहीं"],
        "answer_en": "iter() borrows, into_iter() takes ownership",
        "answer_hi": "iter() उधार लेता है, into_iter() ownership लेता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "How do you create a static variable?",
        "question_hi": "static variable कैसे बनाते हैं?",
        "options_en": ["static NAME: Type = value;", "let static NAME = value;", "const static NAME = value;", "variable static NAME = value;"],
        "options_hi": ["static NAME: Type = value;", "let static NAME = value;", "const static NAME = value;", "variable static NAME = value;"],
        "answer_en": "static NAME: Type = value;",
        "answer_hi": "static NAME: Type = value;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is 'tokio' in Rust?",
        "question_hi": "Rust में 'tokio' क्या है?",
        "options_en": ["Async runtime", "Package manager", "Testing framework", "Code formatter"],
        "options_hi": ["Async रनटाइम", "पैकेज मैनेजर", "टेस्टिंग फ्रेमवर्क", "कोड फॉर्मेटर"],
        "answer_en": "Async runtime",
        "answer_hi": "Async रनटाइम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of 'Send' and 'Sync' traits?",
        "question_hi": "'Send' और 'Sync' traits का उद्देश्य क्या है?",
        "options_en": ["Concurrency safety", "Data sending", "Synchronization", "Message passing"],
        "options_hi": ["कंकरेंसी सेफ्टी", "डेटा सेन्डिंग", "सिंक्रोनाइज़ेशन", "मैसेज पासिंग"],
        "answer_en": "Concurrency safety",
        "answer_hi": "कंकरेंसी सेफ्टी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you write unit tests in Rust?",
        "question_hi": "Rust में unit tests कैसे लिखते हैं?",
        "options_en": ["Using #[cfg(test)] and #[test]", "Using test! macro", "Using unittest module", "Using cargo test only"],
        "options_hi": ["#[cfg(test)] और #[test] का उपयोग", "test! मैक्रो का उपयोग", "unittest मॉड्यूल का उपयोग", "केवल cargo test का उपयोग"],
        "answer_en": "Using #[cfg(test)] and #[test]",
        "answer_hi": "#[cfg(test)] और #[test] का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is 'serde' used for in Rust?",
        "question_hi": "Rust में 'serde' किस लिए उपयोग किया जाता है?",
        "options_en": ["Serialization and deserialization", "Server development", "Security features", "System programming"],
        "options_hi": ["सीरियलाइज़ेशन और डीसीरियलाइज़ेशन", "सर्वर डेवलपमेंट", "सिक्योरिटी फीचर्स", "सिस्टम प्रोग्रामिंग"],
        "answer_en": "Serialization and deserialization",
        "answer_hi": "सीरियलाइज़ेशन और डीसीरियलाइज़ेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the difference between 'panic!' and 'Result'?",
        "question_hi": "'panic!' और 'Result' में क्या अंतर है?",
        "options_en": ["panic! is unrecoverable, Result is recoverable", "Result is faster", "panic! is for errors", "No difference"],
        "options_hi": ["panic! अनरिकवरेबल है, Result रिकवरेबल है", "Result तेज है", "panic! errors के लिए है", "कोई अंतर नहीं"],
        "answer_en": "panic! is unrecoverable, Result is recoverable",
        "answer_hi": "panic! अनरिकवरेबल है, Result रिकवरेबल है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "How do you create a slice from an array?",
        "question_hi": "ऐरे से slice कैसे बनाते हैं?",
        "options_en": ["&array[..] or &array[start..end]", "slice(array)", "array.slice()", "array.to_slice()"],
        "options_hi": ["&array[..] या &array[start..end]", "slice(array)", "array.slice()", "array.to_slice()"],
        "answer_en": "&array[..] or &array[start..end]",
        "answer_hi": "&array[..] या &array[start..end]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is 'lifetime elision'?",
        "question_hi": "'lifetime elision' क्या है?",
        "options_en": ["Compiler infers lifetimes in common cases", "Lifetime deletion", "Lifetime extension", "Lifetime error"],
        "options_hi": ["कंपाइलर कॉमन केस में लाइफटाइम्स इन्फर करता है", "लाइफटाइम डिलीशन", "लाइफटाइम एक्सटेंशन", "लाइफटाइम एरर"],
        "answer_en": "Compiler infers lifetimes in common cases",
        "answer_hi": "कंपाइलर कॉमन केस में लाइफटाइम्स इन्फर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of 'Box::leak()'?",
        "question_hi": "'Box::leak()' का उद्देश्य क्या है?",
        "options_en": ["Create 'static reference from Box", "Memory leak", "Box destruction", "Reference creation"],
        "options_hi": ["Box से 'static reference बनाना", "मेमोरी लीक", "Box डिस्ट्रक्शन", "रिफरेन्स क्रिएशन"],
        "answer_en": "Create 'static reference from Box",
        "answer_hi": "Box से 'static reference बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you handle command line arguments?",
        "question_hi": "कमांड लाइन आर्गुमेंट्स को कैसे हैंडल करते हैं?",
        "options_en": ["std::env::args()", "get_args()", "command_line::args()", "args::collect()"],
        "options_hi": ["std::env::args()", "get_args()", "command_line::args()", "args::collect()"],
        "answer_en": "std::env::args()",
        "answer_hi": "std::env::args()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is 'no_std' in Rust?",
        "question_hi": "Rust में 'no_std' क्या है?",
        "options_en": ["Programming without standard library", "No standard types", "Non-standard code", "No structs"],
        "options_hi": ["स्टैण्डर्ड लाइब्रेरी के बिना प्रोग्रामिंग", "कोई स्टैण्डर्ड टाइप्स नहीं", "नॉन-स्टैण्डर्ड कोड", "कोई structs नहीं"],
        "answer_en": "Programming without standard library",
        "answer_hi": "स्टैण्डर्ड लाइब्रेरी के बिना प्रोग्रामिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the purpose of 'PhantomData'?",
        "question_hi": "'PhantomData' का उद्देश्य क्या है?",
        "options_en": ["Mark unused type parameters", "Ghost data", "Memory phantom", "Data tracking"],
        "options_hi": ["अनयूज्ड टाइप पैरामीटर्स मार्क करना", "घोस्ट डेटा", "मेमोरी फैंटम", "डेटा ट्रैकिंग"],
        "answer_en": "Mark unused type parameters",
        "answer_hi": "अनयूज्ड टाइप पैरामीटर्स मार्क करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "How do you create a trait bound?",
        "question_hi": "trait bound कैसे बनाते हैं?",
        "options_en": ["Using where clause or <T: Trait>", "Using bound! macro", "Using trait_bounds", "Using impl Trait"],
        "options_hi": ["where क्लॉज या <T: Trait> का उपयोग", "bound! मैक्रो का उपयोग", "trait_bounds का उपयोग", "impl Trait का उपयोग"],
        "answer_en": "Using where clause or <T: Trait>",
        "answer_hi": "where क्लॉज या <T: Trait> का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is 'const generics' in Rust?",
        "question_hi": "Rust में 'const generics' क्या है?",
        "options_en": ["Generic parameters that are constants", "Constant generation", "Generic constants", "Const type parameters"],
        "options_hi": ["जेनेरिक पैरामीटर्स जो कॉन्स्टेंट हैं", "कॉन्स्टेंट जेनरेशन", "जेनेरिक कॉन्स्टेंट्स", "कॉन्स्ट टाइप पैरामीटर्स"],
        "answer_en": "Generic parameters that are constants",
        "answer_hi": "जेनेरिक पैरामीटर्स जो कॉन्स्टेंट हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of 'mem::replace'?",
        "question_hi": "'mem::replace' का उद्देश्य क्या है?",
        "options_en": ["Replace value while returning old value", "Memory replacement", "Value exchange", "Data swap"],
        "options_hi": ["पुरानी वैल्यू रिटर्न करते हुए वैल्यू रिप्लेस करना", "मेमोरी रिप्लेसमेंट", "वैल्यू एक्सचेंज", "डेटा स्वैप"],
        "answer_en": "Replace value while returning old value",
        "answer_hi": "पुरानी वैल्यू रिटर्न करते हुए वैल्यू रिप्लेस करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How do you handle network programming in Rust?",
        "question_hi": "Rust में नेटवर्क प्रोग्रामिंग कैसे हैंडल करते हैं?",
        "options_en": ["Using std::net or tokio", "Using network! macro", "Using socket module", "Using tcp/ip crate"],
        "options_hi": ["std::net या tokio का उपयोग", "network! मैक्रो का उपयोग", "socket मॉड्यूल का उपयोग", "tcp/ip crate का उपयोग"],
        "answer_en": "Using std::net or tokio",
        "answer_hi": "std::net या tokio का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is 'rayon' used for?",
        "question_hi": "'rayon' किस लिए उपयोग किया जाता है?",
        "options_en": ["Parallel iterators", "Ray tracing", "Light calculations", "Graphics programming"],
        "options_hi": ["पैरेलल इटरेटर्स", "रे ट्रेसिंग", "लाइट कैलकुलेशन", "ग्राफिक्स प्रोग्रामिंग"],
        "answer_en": "Parallel iterators",
        "answer_hi": "पैरेलल इटरेटर्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the difference between 'Fn', 'FnMut', and 'FnOnce'?",
        "question_hi": "'Fn', 'FnMut', और 'FnOnce' में क्या अंतर है?",
        "options_en": ["Different levels of closure capturing", "Different performance", "Different syntax", "No difference"],
        "options_hi": ["क्लोजर कैप्चरिंग के अलग-अलग लेवल", "अलग परफॉर्मेंस", "अलग सिंटैक्स", "कोई अंतर नहीं"],
        "answer_en": "Different levels of closure capturing",
        "answer_hi": "क्लोजर कैप्चरिंग के अलग-अलग लेवल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "How do you create a custom error type?",
        "question_hi": "कस्टम एरर टाइप कैसे बनाते हैं?",
        "options_en": ["Implement std::error::Error trait", "Using error! macro", "Creating Error struct", "Using failure crate"],
        "options_hi": ["std::error::Error trait इम्प्लीमेंट करना", "error! मैक्रो का उपयोग", "Error struct बनाना", "failure crate का उपयोग"],
        "answer_en": "Implement std::error::Error trait",
        "answer_hi": "std::error::Error trait इम्प्लीमेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is 'pin' in Rust async programming?",
        "question_hi": "Rust async प्रोग्रामिंग में 'pin' क्या है?",
        "options_en": ["Prevent moving of values", "Pin data to memory", "Async pinning", "Memory pinning"],
        "options_hi": ["वैल्यूज के मूवमेंट को रोकना", "मेमोरी पर डेटा पिन करना", "Async पिनिंग", "मेमोरी पिनिंग"],
        "answer_en": "Prevent moving of values",
        "answer_hi": "वैल्यूज के मूवमेंट को रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of 'std::mem::forget'?",
        "question_hi": "'std::mem::forget' का उद्देश्य क्या है?",
        "options_en": ["Prevent running destructor", "Memory cleanup", "Forget values", "Data deletion"],
        "options_hi": ["डिस्ट्रक्टर रन होने से रोकना", "मेमोरी क्लीनअप", "वैल्यूज भूलना", "डेटा डिलीशन"],
        "answer_en": "Prevent running destructor",
        "answer_hi": "डिस्ट्रक्टर रन होने से रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you work with dates and times?",
        "question_hi": "dates और times के साथ कैसे काम करते हैं?",
        "options_en": ["Using chrono crate", "Using std::time", "Using date! macro", "Using time module"],
        "options_hi": ["chrono crate का उपयोग", "std::time का उपयोग", "date! मैक्रो का उपयोग", "time मॉड्यूल का उपयोग"],
        "answer_en": "Using chrono crate",
        "answer_hi": "chrono crate का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is 'crossbeam' used for?",
        "question_hi": "'crossbeam' किस लिए उपयोग किया जाता है?",
        "options_en": ["Concurrent data structures", "Cross-platform beams", "Graphics programming", "Web development"],
        "options_hi": ["कंकरंट डेटा स्ट्रक्चर्स", "क्रॉस-प्लेटफॉर्म बीम्स", "ग्राफिक्स प्रोग्रामिंग", "वेब डेवलपमेंट"],
        "answer_en": "Concurrent data structures",
        "answer_hi": "कंकरंट डेटा स्ट्रक्चर्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the purpose of 'std::ops' traits?",
        "question_hi": "'std::ops' traits का उद्देश्य क्या है?",
        "options_en": ["Operator overloading", "Operations management", "Optimized operations", "Optional operations"],
        "options_hi": ["ऑपरेटर ओवरलोडिंग", "ऑपरेशन मैनेजमेंट", "ऑप्टिमाइज्ड ऑपरेशन", "ऑप्शनल ऑपरेशन"],
        "answer_en": "Operator overloading",
        "answer_hi": "ऑपरेटर ओवरलोडिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "How do you create a shared library in Rust?",
        "question_hi": "Rust में shared library कैसे बनाते हैं?",
        "options_en": ["Using cdylib crate type", "Using shared! macro", "Using lib.rs only", "Using crate-type shared"],
        "options_hi": ["cdylib crate टाइप का उपयोग", "shared! मैक्रो का उपयोग", "केवल lib.rs का उपयोग", "crate-type shared का उपयोग"],
        "answer_en": "Using cdylib crate type",
        "answer_hi": "cdylib crate टाइप का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is 'nom' used for in Rust?",
        "question_hi": "Rust में 'nom' किस लिए उपयोग किया जाता है?",
        "options_en": ["Parser combinators", "Nominal types", "Name parsing", "Number operations"],
        "options_hi": ["पार्सर कॉम्बिनेटर्स", "नॉमिनल टाइप्स", "नेम पार्सिंग", "नंबर ऑपरेशन"],
        "answer_en": "Parser combinators",
        "answer_hi": "पार्सर कॉम्बिनेटर्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of 'std::convert' traits?",
        "question_hi": "'std::convert' traits का उद्देश्य क्या है?",
        "options_en": ["Type conversions", "Data conversion", "Value transformation", "All of the above"],
        "options_hi": ["टाइप कन्वर्जन", "डेटा कन्वर्जन", "वैल्यू ट्रांसफॉर्मेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How do you handle JSON in Rust?",
        "question_hi": "Rust में JSON कैसे हैंडल करते हैं?",
        "options_en": ["Using serde_json crate", "Using json! macro", "Using std::json", "Using parse_json()"],
        "options_hi": ["serde_json crate का उपयोग", "json! मैक्रो का उपयोग", "std::json का उपयोग", "parse_json() का उपयोग"],
        "answer_en": "Using serde_json crate",
        "answer_hi": "serde_json crate का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is 'lazy_static' used for?",
        "question_hi": "'lazy_static' किस लिए उपयोग किया जाता है?",
        "options_en": ["Lazy initialization of statics", "Static lazy evaluation", "Lazy variables", "Static lazy loading"],
        "options_hi": ["स्टैटिक्स की लेजी इनिशियलाइज़ेशन", "स्टैटिक लेजी एवैल्यूएशन", "लेजी वेरिएबल्स", "स्टैटिक लेजी लोडिंग"],
        "answer_en": "Lazy initialization of statics",
        "answer_hi": "स्टैटिक्स की लेजी इनिशियलाइज़ेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the purpose of 'std::default::Default'?",
        "question_hi": "'std::default::Default' का उद्देश्य क्या है?",
        "options_en": ["Provide default values", "Default implementation", "Default traits", "All of the above"],
        "options_hi": ["डिफॉल्ट वैल्यूज प्रोवाइड करना", "डिफॉल्ट इम्प्लीमेंटेशन", "डिफॉल्ट traits", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "How do you work with databases in Rust?",
        "question_hi": "Rust में databases के साथ कैसे काम करते हैं?",
        "options_en": ["Using diesel or sqlx", "Using db! macro", "Using std::database", "Using mysql crate only"],
        "options_hi": ["diesel या sqlx का उपयोग", "db! मैक्रो का उपयोग", "std::database का उपयोग", "केवल mysql crate का उपयोग"],
        "answer_en": "Using diesel or sqlx",
        "answer_hi": "diesel या sqlx का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is 'actix-web' used for?",
        "question_hi": "'actix-web' किस लिए उपयोग किया जाता है?",
        "options_en": ["Web framework", "Actor system", "Web actions", "Activation web"],
        "options_hi": ["वेब फ्रेमवर्क", "एक्टर सिस्टम", "वेब एक्शन", "एक्टिवेशन वेब"],
        "answer_en": "Web framework",
        "answer_hi": "वेब फ्रेमवर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of 'std::cmp' traits?",
        "question_hi": "'std::cmp' traits का उद्देश्य क्या है?",
        "options_en": ["Comparison operations", "Compatibility checks", "Compile-time comparisons", "All of the above"],
        "options_hi": ["कम्पेयरिजन ऑपरेशन", "कम्पेटिबिलिटी चेक्स", "कंपाइल-टाइम कम्पेयरिजन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How do you create a GUI application in Rust?",
        "question_hi": "Rust में GUI एप्लीकेशन कैसे बनाते हैं?",
        "options_en": ["Using egui or iced", "Using gui! macro", "Using std::gui", "Using winit only"],
        "options_hi": ["egui या iced का उपयोग", "gui! मैक्रो का उपयोग", "std::gui का उपयोग", "केवल winit का उपयोग"],
        "answer_en": "Using egui or iced",
        "answer_hi": "egui या iced का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is 'wasm-bindgen' used for?",
        "question_hi": "'wasm-bindgen' किस लिए उपयोग किया जाता है?",
        "options_en": ["WebAssembly interoperability", "WASM binding", "Web assembly generation", "All of the above"],
        "options_hi": ["WebAssembly इंटरऑपरेबिलिटी", "WASM बाइंडिंग", "वेब असेंबली जेनरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the purpose of 'std::iter' traits?",
        "question_hi": "'std::iter' traits का उद्देश्य क्या है?",
        "options_en": ["Iterator functionality", "Iteration patterns", "Iterable types", "All of the above"],
        "options_hi": ["इटरेटर फंक्शनैलिटी", "इटरेशन पैटर्न", "इटरेबल टाइप्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "How do you handle logging in Rust?",
        "question_hi": "Rust में logging कैसे हैंडल करते हैं?",
        "options_en": ["Using log crate", "Using println! only", "Using debug! macro", "Using std::log"],
        "options_hi": ["log crate का उपयोग", "केवल println! का उपयोग", "debug! मैक्रो का उपयोग", "std::log का उपयोग"],
        "answer_en": "Using log crate",
        "answer_hi": "log crate का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is 'clap' used for?",
        "question_hi": "'clap' किस लिए उपयोग किया जाता है?",
        "options_en": ["Command line argument parsing", "CLI applications", "Command parsing", "All of the above"],
        "options_hi": ["कमांड लाइन आर्गुमेंट पार्सिंग", "CLI एप्लीकेशन", "कमांड पार्सिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of 'std::fmt' traits?",
        "question_hi": "'std::fmt' traits का उद्देश्य क्या है?",
        "options_en": ["Formatting output", "String formatting", "Display implementation", "All of the above"],
        "options_hi": ["फॉर्मेटिंग आउटपुट", "स्ट्रिंग फॉर्मेटिंग", "Display इम्प्लीमेंटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you work with filesystem in Rust?",
        "question_hi": "Rust में filesystem के साथ कैसे काम करते हैं?",
        "options_en": ["Using std::fs", "Using file_system! macro", "Using fs module only", "Using std::path and std::fs"],
        "options_hi": ["std::fs का उपयोग", "file_system! मैक्रो का उपयोग", "केवल fs मॉड्यूल का उपयोग", "std::path और std::fs का उपयोग"],
        "answer_en": "Using std::path and std::fs",
        "answer_hi": "std::path और std::fs का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is 'regex' crate used for?",
        "question_hi": "'regex' crate किस लिए उपयोग किया जाता है?",
        "options_en": ["Regular expressions", "String matching", "Pattern searching", "All of the above"],
        "options_hi": ["रेगुलर एक्सप्रेशन", "स्ट्रिंग मैचिंग", "पैटर्न सर्चिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the purpose of 'std::collections'?",
        "question_hi": "'std::collections' का उद्देश्य क्या है?",
        "options_en": ["Data structures", "Collection types", "Container implementations", "All of the above"],
        "options_hi": ["डेटा स्ट्रक्चर्स", "कलेक्शन टाइप्स", "कंटेनर इम्प्लीमेंटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "How do you handle configuration in Rust?",
        "question_hi": "Rust में configuration कैसे हैंडल करते हैं?",
        "options_en": ["Using config crate", "Using env variables", "Using config files", "All of the above"],
        "options_hi": ["config crate का उपयोग", "env वेरिएबल्स का उपयोग", "config फाइल्स का उपयोग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is 'tokio' runtime used for?",
        "question_hi": "'tokio' runtime किस लिए उपयोग किया जाता है?",
        "options_en": ["Async task execution", "Event-driven programming", "Non-blocking I/O", "All of the above"],
        "options_hi": ["Async टास्क एक्जीक्यूशन", "इवेंट-ड्रिवेन प्रोग्रामिंग", "नॉन-ब्लॉकिंग I/O", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of 'std::sync::mpsc'?",
        "question_hi": "'std::sync::mpsc' का उद्देश्य क्या है?",
        "options_en": ["Multi-producer, single-consumer channels", "Message passing", "Thread communication", "All of the above"],
        "options_hi": ["मल्टी-प्रोड्यूसर, सिंगल-कंज्यूमर चैनल", "मैसेज पासिंग", "थ्रेड कम्युनिकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you work with HTTP in Rust?",
        "question_hi": "Rust में HTTP के साथ कैसे काम करते हैं?",
        "options_en": ["Using reqwest or hyper", "Using http! macro", "Using std::http", "Using web crate only"],
        "options_hi": ["reqwest या hyper का उपयोग", "http! मैक्रो का उपयोग", "std::http का उपयोग", "केवल web crate का उपयोग"],
        "answer_en": "Using reqwest or hyper",
        "answer_hi": "reqwest या hyper का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is 'anyhow' crate used for?",
        "question_hi": "'anyhow' crate किस लिए उपयोग किया जाता है?",
        "options_en": ["Easy error handling", "Any type handling", "How-to guides", "All of the above"],
        "options_hi": ["आसान एरर हैंडलिंग", "किसी भी टाइप की हैंडलिंग", "हाउ-टू गाइड", "उपरोक्त सभी"],
        "answer_en": "Easy error handling",
        "answer_hi": "आसान एरर हैंडलिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the purpose of 'std::num'?",
        "question_hi": "'std::num' का उद्देश्य क्या है?",
        "options_en": ["Numeric operations", "Number types", "Math functions", "All of the above"],
        "options_hi": ["न्यूमेरिक ऑपरेशन", "नंबर टाइप्स", "मैथ फंक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "How do you handle cryptography in Rust?",
        "question_hi": "Rust में cryptography कैसे हैंडल करते हैं?",
        "options_en": ["Using ring or openssl", "Using crypto! macro", "Using std::crypto", "Using encrypt crate only"],
        "options_hi": ["ring या openssl का उपयोग", "crypto! मैक्रो का उपयोग", "std::crypto का उपयोग", "केवल encrypt crate का उपयोग"],
        "answer_en": "Using ring or openssl",
        "answer_hi": "ring या openssl का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is 'thiserror' crate used for?",
        "question_hi": "'thiserror' crate किस लिए उपयोग किया जाता है?",
        "options_en": ["Custom error types", "This error handling", "Error derivation", "All of the above"],
        "options_hi": ["कस्टम एरर टाइप्स", "इस एरर हैंडलिंग", "एरर डेरिवेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of 'std::process'?",
        "question_hi": "'std::process' का उद्देश्य क्या है?",
        "options_en": ["Process management", "Command execution", "Child processes", "All of the above"],
        "options_hi": ["प्रोसेस मैनेजमेंट", "कमांड एक्जीक्यूशन", "चाइल्ड प्रोसेस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do you work with serialization in Rust?",
        "question_hi": "Rust में serialization के साथ कैसे काम करते हैं?",
        "options_en": ["Using serde", "Using serialize! macro", "Using std::serialize", "Using json only"],
        "options_hi": ["serde का उपयोग", "serialize! मैक्रो का उपयोग", "std::serialize का उपयोग", "केवल json का उपयोग"],
        "answer_en": "Using serde",
        "answer_hi": "serde का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is 'rayon' data parallelism?",
        "question_hi": "'rayon' डेटा पैरेललिज्म क्या है?",
        "options_en": ["Parallel data processing", "Ray tracing parallelism", "Data ray processing", "All of the above"],
        "options_hi": ["पैरेलल डेटा प्रोसेसिंग", "रे ट्रेसिंग पैरेललिज्म", "डेटा रे प्रोसेसिंग", "उपरोक्त सभी"],
        "answer_en": "Parallel data processing",
        "answer_hi": "पैरेलल डेटा प्रोसेसिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the future of Rust programming?",
        "question_hi": "Rust प्रोग्रामिंग का भविष्य क्या है?",
        "options_en": ["Systems programming", "Web development", "Embedded systems", "All of the above"],
        "options_hi": ["सिस्टम प्रोग्रामिंग", "वेब डेवलपमेंट", "एम्बेडेड सिस्टम", "उपरोक्त सभी"],
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