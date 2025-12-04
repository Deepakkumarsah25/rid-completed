const questions = [
     {
        "num": 1,
        "question_en": "How do you iterate over a collection?",
        "question_hi": "कलेक्शन पर कैसे इटरेट करते हैं?",
        "options_en": ["for item in collection", "collection.forEach()", "for (item in collection)", "iterate(collection)"],
        "options_hi": ["for item in collection", "collection.forEach()", "for (item in collection)", "iterate(collection)"],
        "answer_en": "for item in collection",
        "answer_hi": "for item in collection",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "When is 'unsafe' used?",
        "question_hi": "'unsafe' कब उपयोग किया जाता है?",
        "options_en": ["For FFI or raw pointers", "For fast code", "For memory allocation", "For thread creation"],
        "options_hi": ["FFI या रॉ पॉइंटर्स के लिए", "तेज कोड के लिए", "मेमोरी अलोकेशन के लिए", "थ्रेड क्रिएशन के लिए"],
        "answer_en": "For FFI or raw pointers",
        "answer_hi": "FFI या रॉ पॉइंटर्स के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "How do you create a HashMap?",
        "question_hi": "HashMap कैसे बनाते हैं?",
        "options_en": ["HashMap::new()", "Map::new()", "new HashMap()", "create_hashmap()"],
        "options_hi": ["HashMap::new()", "Map::new()", "new HashMap()", "create_hashmap()"],
        "answer_en": "HashMap::new()",
        "answer_hi": "HashMap::new()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the default floating-point type in Rust?",
        "question_hi": "Rust में डिफॉल्ट फ्लोटिंग-पॉइंट टाइप क्या है?",
        "options_en": ["f64", "f32", "float", "double"],
        "options_hi": ["f64", "f32", "float", "double"],
        "answer_en": "f64",
        "answer_hi": "f64",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "How do you create an empty vector in Rust?",
        "question_hi": "Rust में आप खाली वेक्टर कैसे बनाते हैं?",
        "options_en": ["Vec::new()", "Vector::new()", "new Vec()", "vec![]"],
        "options_hi": ["Vec::new()", "Vector::new()", "new Vec()", "vec![]"],
        "answer_en": "Vec::new()",
        "answer_hi": "Vec::new()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the purpose of the 'match' expression?",
        "question_hi": "'match' एक्सप्रेशन का उद्देश्य क्या है?",
        "options_en": ["Pattern matching", "String comparison", "Thread synchronization", "Memory allocation"],
        "options_hi": ["पैटर्न मैचिंग", "स्ट्रिंग कम्पेयरिजन", "थ्रेड सिंक्रोनाइज़ेशन", "मेमोरी अलोकेशन"],
        "answer_en": "Pattern matching",
        "answer_hi": "पैटर्न मैचिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which enum is used for error handling in Rust?",
        "question_hi": "Rust में एरर हैंडलिंग के लिए किस enum का उपयोग किया जाता है?",
        "options_en": ["Result", "Error", "Option", "Either"],
        "options_hi": ["Result", "Error", "Option", "Either"],
        "answer_en": "Result",
        "answer_hi": "Result",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does RAII ensure in Rust?",
        "question_hi": "Rust में RAII क्या सुनिश्चित करता है?",
        "options_en": ["Automatic resource cleanup", "Fast execution", "Memory safety", "Thread safety"],
        "options_hi": ["ऑटोमैटिक रिसोर्स क्लीनअप", "तेज एक्जीक्यूशन", "मेमोरी सेफ्टी", "थ्रेड सेफ्टी"],
        "answer_en": "Automatic resource cleanup",
        "answer_hi": "ऑटोमैटिक रिसोर्स क्लीनअप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "How do you define a global constant in Rust?",
        "question_hi": "Rust में आप ग्लोबल कॉन्स्टेंट कैसे डिफाइन करते हैं?",
        "options_en": ["const", "static", "let", "define"],
        "options_hi": ["const", "static", "let", "define"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What does the 'unwrap()' method do on an Option?",
        "question_hi": "Option पर 'unwrap()' मेथड क्या करता है?",
        "options_en": ["Extracts the value or panics", "Wraps the value", "Returns None", "Converts to Result"],
        "options_hi": ["वैल्यू निकालता है या पैनिक करता है", "वैल्यू को रैप करता है", "None रिटर्न करता है", "Result में कन्वर्ट करता है"],
        "answer_en": "Extracts the value or panics",
        "answer_hi": "वैल्यू निकालता है या पैनिक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which macro is used for formatted output?",
        "question_hi": "फॉर्मेटेड आउटपुट के लिए किस मैक्रो का उपयोग किया जाता है?",
        "options_en": ["println!", "print!", "format!", "write!"],
        "options_hi": ["println!", "print!", "format!", "write!"],
        "answer_en": "println!",
        "answer_hi": "println!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is a trait in Rust?",
        "question_hi": "Rust में trait क्या है?",
        "options_en": ["A collection of method signatures", "A data structure", "A module", "A function type"],
        "options_hi": ["मेथड सिग्नेचर्स का कलेक्शन", "एक डेटा स्ट्रक्चर", "एक मॉड्यूल", "एक फंक्शन टाइप"],
        "answer_en": "A collection of method signatures",
        "answer_hi": "मेथड सिग्नेचर्स का कलेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How do you propagate errors using the ? operator?",
        "question_hi": "? ऑपरेटर का उपयोग करके एरर्स को कैसे प्रोपेगेट करते हैं?",
        "options_en": ["It returns early on Err", "It converts errors", "It ignores errors", "It logs errors"],
        "options_hi": ["यह Err पर अर्ली रिटर्न करता है", "यह एरर्स को कन्वर्ट करता है", "यह एरर्स को इग्नोर करता है", "यह एरर्स को लॉग करता है"],
        "answer_en": "It returns early on Err",
        "answer_hi": "यह Err पर अर्ली रिटर्न करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is Box<T> used for?",
        "question_hi": "Box<T> का उपयोग किस लिए किया जाता है?",
        "options_en": ["Heap allocation", "Stack allocation", "Thread safety", "Memory mapping"],
        "options_hi": ["हीप अलोकेशन", "स्टैक अलोकेशन", "थ्रेड सेफ्टी", "मेमोरी मैपिंग"],
        "answer_en": "Heap allocation",
        "answer_hi": "हीप अलोकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What keyword defines a function in Rust?",
        "question_hi": "Rust में फंक्शन को डिफाइन करने वाला कीवर्ड क्या है?",
        "options_en": ["fn", "function", "def", "func"],
        "options_hi": ["fn", "function", "def", "func"],
        "answer_en": "fn",
        "answer_hi": "fn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the difference between String and &str?",
        "question_hi": "String और &str में क्या अंतर है?",
        "options_en": ["String is owned, &str is borrowed", "String is faster", "&str is mutable", "No difference"],
        "options_hi": ["String ओन्ड है, &str बोरोड है", "String तेज है", "&str म्यूटेबल है", "कोई अंतर नहीं"],
        "answer_en": "String is owned, &str is borrowed",
        "answer_hi": "String ओन्ड है, &str बोरोड है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "How do you create a vector with initial values?",
        "question_hi": "इनिशियल वैल्यूज के साथ वेक्टर कैसे बनाते हैं?",
        "options_en": ["vec![1, 2, 3]", "Vector::with_values(1,2,3)", "new vec(1,2,3)", "Vec::from([1,2,3])"],
        "options_hi": ["vec![1, 2, 3]", "Vector::with_values(1,2,3)", "new vec(1,2,3)", "Vec::from([1,2,3])"],
        "answer_en": "vec![1, 2, 3]",
        "answer_hi": "vec![1, 2, 3]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does the #[derive] attribute do?",
        "question_hi": "#[derive] एट्रिब्यूट क्या करता है?",
        "options_en": ["Automatically implements traits", "Derives new types", "Imports dependencies", "Compiles code"],
        "options_hi": ["ऑटोमैटिकली ट्रेट्स इम्प्लीमेंट करता है", "नए टाइप्स डेरिव करता है", "डिपेंडेंसीज इम्पोर्ट करता है", "कोड कंपाइल करता है"],
        "answer_en": "Automatically implements traits",
        "answer_hi": "ऑटोमैटिकली ट्रेट्स इम्प्लीमेंट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which trait allows deep copying?",
        "question_hi": "कौन सा ट्रेट डीप कॉपी की अनुमति देता है?",
        "options_en": ["Clone", "Copy", "DeepCopy", "Duplicate"],
        "options_hi": ["Clone", "Copy", "DeepCopy", "Duplicate"],
        "answer_en": "Clone",
        "answer_hi": "Clone",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What does 'move' do in a closure?",
        "question_hi": "क्लोजर में 'move' क्या करता है?",
        "options_en": ["Takes ownership of captured variables", "Moves the closure", "Makes closure mutable", "Copies variables"],
        "options_hi": ["कैप्चर्ड वेरिएबल्स की ओनरशिप लेता है", "क्लोजर को मूव करता है", "क्लोजर को म्यूटेबल बनाता है", "वेरिएबल्स को कॉपी करता है"],
        "answer_en": "Takes ownership of captured variables",
        "answer_hi": "कैप्चर्ड वेरिएबल्स की ओनरशिप लेता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "How do you spawn a new thread?",
        "question_hi": "नया थ्रेड कैसे स्पॉन करते हैं?",
        "options_en": ["thread::spawn()", "Thread::new()", "spawn_thread()", "new Thread()"],
        "options_hi": ["thread::spawn()", "Thread::new()", "spawn_thread()", "new Thread()"],
        "answer_en": "thread::spawn()",
        "answer_hi": "thread::spawn()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What are lifetimes in Rust?",
        "question_hi": "Rust में लाइफटाइम्स क्या हैं?",
        "options_en": ["Scope of references", "Program execution time", "Memory allocation duration", "Thread lifetime"],
        "options_hi": ["रिफरेन्सेस का स्कोप", "प्रोग्राम एक्जीक्यूशन टाइम", "मेमोरी अलोकेशन ड्यूरेशन", "थ्रेड लाइफटाइम"],
        "answer_en": "Scope of references",
        "answer_hi": "रिफरेन्सेस का स्कोप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which attribute marks a test function?",
        "question_hi": "कौन सा एट्रिब्यूट टेस्ट फंक्शन को मार्क करता है?",
        "options_en": ["#[test]", "#[cfg(test)]", "#[test_fn]", "#[testing]"],
        "options_hi": ["#[test]", "#[cfg(test)]", "#[test_fn]", "#[testing]"],
        "answer_en": "#[test]",
        "answer_hi": "#[test]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the purpose of 'impl'?",
        "question_hi": "'impl' का उद्देश्य क्या है?",
        "options_en": ["Implement methods for types", "Import libraries", "Initialize variables", "Implement traits"],
        "options_hi": ["टाइप्स के लिए मेथड्स इम्प्लीमेंट करना", "लाइब्रेरीज इम्पोर्ट करना", "वेरिएबल्स इनिशियलाइज़ करना", "ट्रेट्स इम्प्लीमेंट करना"],
        "answer_en": "Implement methods for types",
        "answer_hi": "टाइप्स के लिए मेथड्स इम्प्लीमेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "How do you join a thread?",
        "question_hi": "थ्रेड को कैसे जॉइन करते हैं?",
        "options_en": ["thread.join()", "join_thread()", "Thread::join()", "wait_for_thread()"],
        "options_hi": ["thread.join()", "join_thread()", "Thread::join()", "wait_for_thread()"],
        "answer_en": "thread.join()",
        "answer_hi": "thread.join()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is pattern matching used for?",
        "question_hi": "पैटर्न मैचिंग का उपयोग किस लिए किया जाता है?",
        "options_en": ["Deconstructing values", "String matching", "Memory pattern detection", "Code pattern recognition"],
        "options_hi": ["वैल्यूज को डीकंस्ट्रक्ट करना", "स्ट्रिंग मैचिंग", "मेमोरी पैटर्न डिटेक्शन", "कोड पैटर्न रिकग्निशन"],
        "answer_en": "Deconstructing values",
        "answer_hi": "वैल्यूज को डीकंस्ट्रक्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which trait converts to a string?",
        "question_hi": "कौन सा ट्रेट स्ट्रिंग में कन्वर्ट करता है?",
        "options_en": ["ToString", "Stringify", "Display", "AsStr"],
        "options_hi": ["ToString", "Stringify", "Display", "AsStr"],
        "answer_en": "ToString",
        "answer_hi": "ToString",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is variable shadowing?",
        "question_hi": "वेरिएबल शैडोइंग क्या है?",
        "options_en": ["Redeclaring a variable in same scope", "Hiding variables", "Memory optimization", "Scope limitation"],
        "options_hi": ["समान स्कोप में वेरिएबल को रीडिक्लेयर करना", "वेरिएबल्स को हाइड करना", "मेमोरी ऑप्टिमाइज़ेशन", "स्कोप लिमिटेशन"],
        "answer_en": "Redeclaring a variable in same scope",
        "answer_hi": "समान स्कोप में वेरिएबल को रीडिक्लेयर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How do you represent optional values?",
        "question_hi": "ऑप्शनल वैल्यूज को कैसे रिप्रेजेंट करते हैं?",
        "options_en": ["Option<T>", "Optional<T>", "Maybe<T>", "Nullable<T>"],
        "options_hi": ["Option<T>", "Optional<T>", "Maybe<T>", "Nullable<T>"],
        "answer_en": "Option<T>",
        "answer_hi": "Option<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What does 'dyn' indicate?",
        "question_hi": "'dyn' क्या इंगित करता है?",
        "options_en": ["Dynamic dispatch", "Dynamic allocation", "Dynamic typing", "Dynamic linking"],
        "options_hi": ["डायनामिक डिस्पैच", "डायनामिक अलोकेशन", "डायनामिक टाइपिंग", "डायनामिक लिंकिंग"],
        "answer_en": "Dynamic dispatch",
        "answer_hi": "डायनामिक डिस्पैच",
        "attempted": false,
        "selected": ""
    },
   {
        "num": 31,
        "question_en": "What is the main advantage of Rust's ownership system?",
        "question_hi": "Rust के ownership सिस्टम का मुख्य फायदा क्या है?",
        "options_en": ["Memory safety without garbage collection", "Faster compilation", "Automatic memory management", "Simpler syntax"],
        "options_hi": ["गार्बेज कलेक्शन के बिना मेमोरी सेफ्टी", "तेज कंपाइलेशन", "ऑटोमैटिक मेमोरी मैनेजमेंट", "सरल सिंटैक्स"],
        "answer_en": "Memory safety without garbage collection",
        "answer_hi": "गार्बेज कलेक्शन के बिना मेमोरी सेफ्टी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does the 'mut' keyword allow you to do in Rust?",
        "question_hi": "Rust में 'mut' कीवर्ड आपको क्या करने की अनुमति देता है?",
        "options_en": ["Modify a variable", "Create multiple threads", "Allocate memory", "Import modules"],
        "options_hi": ["वेरिएबल को मॉडिफाई करना", "मल्टीपल थ्रेड्स बनाना", "मेमोरी अलोकेट करना", "मॉड्यूल्स इम्पोर्ट करना"],
        "answer_en": "Modify a variable",
        "answer_hi": "वेरिएबल को मॉडिफाई करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which tool is used to manage Rust dependencies?",
        "question_hi": "Rust डिपेंडेंसीज को मैनेज करने के लिए किस टूल का उपयोग किया जाता है?",
        "options_en": ["Cargo", "Rustup", "Crates.io", "Rustc"],
        "options_hi": ["Cargo", "Rustup", "Crates.io", "Rustc"],
        "answer_en": "Cargo",
        "answer_hi": "Cargo",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What does 'mod' define?",
        "question_hi": "'mod' क्या डिफाइन करता है?",
        "options_en": ["A module", "A model", "A modification", "A mode"],
        "options_hi": ["एक मॉड्यूल", "एक मॉडल", "एक मॉडिफिकेशन", "एक मोड"],
        "answer_en": "A module",
        "answer_hi": "एक मॉड्यूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which trait provides total ordering?",
        "question_hi": "कौन सा ट्रेट टोटल ऑर्डरिंग प्रोवाइड करता है?",
        "options_en": ["Ord", "PartialOrd", "Order", "Compare"],
        "options_hi": ["Ord", "PartialOrd", "Order", "Compare"],
        "answer_en": "Ord",
        "answer_hi": "Ord",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the borrow checker?",
        "question_hi": "बोरो चेकर क्या है?",
        "options_en": ["Validates reference safety", "Checks loan eligibility", "Validates code style", "Checks memory leaks"],
        "options_hi": ["रिफरेन्स सेफ्टी वैलिडेट करता है", "लोन एलिजिबिलिटी चेक करता है", "कोड स्टाइल वैलिडेट करता है", "मेमोरी लीक्स चेक करता है"],
        "answer_en": "Validates reference safety",
        "answer_hi": "रिफरेन्स सेफ्टी वैलिडेट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How do you read a file?",
        "question_hi": "फाइल कैसे पढ़ते हैं?",
        "options_en": ["fs::read_to_string()", "File::read()", "read_file()", "File::open().read()"],
        "options_hi": ["fs::read_to_string()", "File::read()", "read_file()", "File::open().read()"],
        "answer_en": "fs::read_to_string()",
        "answer_hi": "fs::read_to_string()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is a smart pointer?",
        "question_hi": "स्मार्ट पॉइंटर क्या है?",
        "options_en": ["Pointer with additional metadata", "Automatic pointer", "Safe pointer", "Heap pointer"],
        "options_hi": ["एडिशनल मेटाडेटा वाला पॉइंटर", "ऑटोमैटिक पॉइंटर", "सेफ पॉइंटर", "हीप पॉइंटर"],
        "answer_en": "Pointer with additional metadata",
        "answer_hi": "एडिशनल मेटाडेटा वाला पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which macro creates formatted strings?",
        "question_hi": "कौन सा मैक्रो फॉर्मेटेड स्ट्रिंग्स बनाता है?",
        "options_en": ["format!", "fmt!", "string_format!", "create_string!"],
        "options_hi": ["format!", "fmt!", "string_format!", "create_string!"],
        "answer_en": "format!",
        "answer_hi": "format!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What does 'Self' refer to?",
        "question_hi": "'Self' क्या रेफर करता है?",
        "options_en": ["The implementing type", "Current module", "Self reference", "Static type"],
        "options_hi": ["इम्प्लीमेंटिंग टाइप", "करंट मॉड्यूल", "सेल्फ रिफरेन्स", "स्टैटिक टाइप"],
        "answer_en": "The implementing type",
        "answer_hi": "इम्प्लीमेंटिंग टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How do you define a static variable?",
        "question_hi": "स्टैटिक वेरिएबल कैसे डिफाइन करते हैं?",
        "options_en": ["static", "const", "let", "var"],
        "options_hi": ["static", "const", "let", "var"],
        "answer_en": "static",
        "answer_hi": "static",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is an iterator?",
        "question_hi": "इटरेटर क्या है?",
        "options_en": ["Trait for sequential access", "Loop construct", "Collection type", "Function type"],
        "options_hi": ["सीक्वेंशियल एक्सेस के लिए ट्रेट", "लूप कंस्ट्रक्ट", "कलेक्शन टाइप", "फंक्शन टाइप"],
        "answer_en": "Trait for sequential access",
        "answer_hi": "सीक्वेंशियल एक्सेस के लिए ट्रेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What does the ? operator do?",
        "question_hi": "? ऑपरेटर क्या करता है?",
        "options_en": ["Propagates errors", "Checks condition", "Returns option", "Unwraps values"],
        "options_hi": ["एरर्स प्रोपेगेट करता है", "कंडीशन चेक करता है", "ऑप्शन रिटर्न करता है", "वैल्यूज अनरैप करता है"],
        "answer_en": "Propagates errors",
        "answer_hi": "एरर्स प्रोपेगेट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What are channels used for?",
        "question_hi": "चैनल्स का उपयोग किस लिए किया जाता है?",
        "options_en": ["Inter-thread communication", "Network communication", "File I/O", "Process communication"],
        "options_hi": ["इंटर-थ्रेड कम्युनिकेशन", "नेटवर्क कम्युनिकेशन", "फाइल I/O", "प्रोसेस कम्युनिकेशन"],
        "answer_en": "Inter-thread communication",
        "answer_hi": "इंटर-थ्रेड कम्युनिकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How do you define a struct?",
        "question_hi": "struct कैसे डिफाइन करते हैं?",
        "options_en": ["struct Name { fields }", "class Name { fields }", "type Name = struct", "define struct Name"],
        "options_hi": ["struct Name { fields }", "class Name { fields }", "type Name = struct", "define struct Name"],
        "answer_en": "struct Name { fields }",
        "answer_hi": "struct Name { fields }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is an enum?",
        "question_hi": "enum क्या है?",
        "options_en": ["A type with variants", "Enumerator", "List of values", "Number sequence"],
        "options_hi": ["वेरिएंट्स वाला टाइप", "एन्युमरेटर", "वैल्यूज की लिस्ट", "नंबर सीक्वेंस"],
        "answer_en": "A type with variants",
        "answer_hi": "वेरिएंट्स वाला टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which trait provides default values?",
        "question_hi": "कौन सा ट्रेट डिफॉल्ट वैल्यूज प्रोवाइड करता है?",
        "options_en": ["Default", "Init", "Base", "DefaultValue"],
        "options_hi": ["Default", "Init", "Base", "DefaultValue"],
        "answer_en": "Default",
        "answer_hi": "Default",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is lifetime elision?",
        "question_hi": "लाइफटाइम एलिजन क्या है?",
        "options_en": ["Automatic lifetime inference", "Lifetime removal", "Lifetime optimization", "Manual lifetime specification"],
        "options_hi": ["ऑटोमैटिक लाइफटाइम इन्फेरेंस", "लाइफटाइम रिमूवल", "लाइफटाइम ऑप्टिमाइज़ेशन", "मैन्युअल लाइफटाइम स्पेसिफिकेशन"],
        "answer_en": "Automatic lifetime inference",
        "answer_hi": "ऑटोमैटिक लाइफटाइम इन्फेरेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How do you create a slice from an array?",
        "question_hi": "ऐरे से स्लाइस कैसे बनाते हैं?",
        "options_en": ["&array[..]", "slice(array)", "array.slice()", "Slice::from(array)"],
        "options_hi": ["&array[..]", "slice(array)", "array.slice()", "Slice::from(array)"],
        "answer_en": "&array[..]",
        "answer_hi": "&array[..]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is async/await for?",
        "question_hi": "async/await किस लिए है?",
        "options_en": ["Asynchronous programming", "Synchronous code", "Parallel execution", "Thread management"],
        "options_hi": ["असिंक्रोनस प्रोग्रामिंग", "सिंक्रोनस कोड", "पैरेलल एक्जीक्यूशन", "थ्रेड मैनेजमेंट"],
        "answer_en": "Asynchronous programming",
        "answer_hi": "असिंक्रोनस प्रोग्रामिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "How do you cause a panic?",
        "question_hi": "पैनिक कैसे कराते हैं?",
        "options_en": ["panic!()", "error!()", "crash!()", "fail!()"],
        "options_hi": ["panic!()", "error!()", "crash!()", "fail!()"],
        "answer_en": "panic!()",
        "answer_hi": "panic!()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is Rc<T> for?",
        "question_hi": "Rc<T> किस लिए है?",
        "options_en": ["Reference counting in single thread", "Atomic operations", "Thread safety", "Memory allocation"],
        "options_hi": ["सिंगल थ्रेड में रिफरेन्स काउंटिंग", "एटॉमिक ऑपरेशन्स", "थ्रेड सेफ्टी", "मेमोरी अलोकेशन"],
        "answer_en": "Reference counting in single thread",
        "answer_hi": "सिंगल थ्रेड में रिफरेन्स काउंटिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "How do you implement a trait for a type?",
        "question_hi": "टाइप के लिए ट्रेट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["impl Trait for Type", "Type implements Trait", "implement Trait for Type", "trait impl Type"],
        "options_hi": ["impl Trait for Type", "Type implements Trait", "implement Trait for Type", "trait impl Type"],
        "answer_en": "impl Trait for Type",
        "answer_hi": "impl Trait for Type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is Arc<T> for?",
        "question_hi": "Arc<T> किस लिए है?",
        "options_en": ["Atomic reference counting across threads", "Automatic reference", "Array reference", "Async reference"],
        "options_hi": ["थ्रेड्स के बीच एटॉमिक रिफरेन्स काउंटिंग", "ऑटोमैटिक रिफरेन्स", "ऐरे रिफरेन्स", "Async रिफरेन्स"],
        "answer_en": "Atomic reference counting across threads",
        "answer_hi": "थ्रेड्स के बीच एटॉमिक रिफरेन्स काउंटिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which trait is for debugging output?",
        "question_hi": "डीबगिंग आउटपुट के लिए कौन सा ट्रेट है?",
        "options_en": ["Debug", "Display", "Print", "Show"],
        "options_hi": ["Debug", "Display", "Print", "Show"],
        "answer_en": "Debug",
        "answer_hi": "Debug",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is a Mutex?",
        "question_hi": "Mutex क्या है?",
        "options_en": ["Mutual exclusion for thread safety", "Memory protection", "File locking", "Network lock"],
        "options_hi": ["थ्रेड सेफ्टी के लिए म्यूचुअल एक्सक्लूजन", "मेमोरी प्रोटेक्शन", "फाइल लॉकिंग", "नेटवर्क लॉक"],
        "answer_en": "Mutual exclusion for thread safety",
        "answer_hi": "थ्रेड सेफ्टी के लिए म्यूचुअल एक्सक्लूजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How do you create a tuple?",
        "question_hi": "tuple कैसे बनाते हैं?",
        "options_en": ["(1, \"hello\")", "tuple(1, \"hello\")", "Tuple::new(1, \"hello\")", "new tuple(1, \"hello\")"],
        "options_hi": ["(1, \"hello\")", "tuple(1, \"hello\")", "Tuple::new(1, \"hello\")", "new tuple(1, \"hello\")"],
        "answer_en": "(1, \"hello\")",
        "answer_hi": "(1, \"hello\")",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does the Drop trait do?",
        "question_hi": "Drop ट्रेट क्या करता है?",
        "options_en": ["Cleans up resources", "Drops values", "Frees memory", "All of the above"],
        "options_hi": ["रिसोर्सेज क्लीनअप करता है", "वैल्यूज ड्रॉप करता है", "मेमोरी फ्री करता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "How do you get a string slice?",
        "question_hi": "स्ट्रिंग स्लाइस कैसे प्राप्त करते हैं?",
        "options_en": ["&s[0..5]", "s.slice(0,5)", "slice(s,0,5)", "s.get_slice(0,5)"],
        "options_hi": ["&s[0..5]", "s.slice(0,5)", "slice(s,0,5)", "s.get_slice(0,5)"],
        "answer_en": "&s[0..5]",
        "answer_hi": "&s[0..5]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is PhantomData used for?",
        "question_hi": "PhantomData का उपयोग किस लिए किया जाता है?",
        "options_en": ["Mark unused type parameters", "Ghost data", "Type system tricks", "All of the above"],
        "options_hi": ["अनयूज्ड टाइप पैरामीटर्स को मार्क करना", "घोस्ट डेटा", "टाइप सिस्टम ट्रिक्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "How do you create a range?",
        "question_hi": "range कैसे बनाते हैं?",
        "options_en": ["0..10", "range(0, 10)", "0 to 10", "0-10"],
        "options_hi": ["0..10", "range(0, 10)", "0 to 10", "0-10"],
        "answer_en": "0..10",
        "answer_hi": "0..10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is Cell used for?",
        "question_hi": "Cell का उपयोग किस लिए किया जाता है?",
        "options_en": ["Interior mutability for Copy types", "Cell storage", "Memory cells", "Data storage"],
        "options_hi": ["Copy टाइप्स के लिए इंटीरियर म्यूटेबिलिटी", "सेल स्टोरेज", "मेमोरी सेल्स", "डेटा स्टोरेज"],
        "answer_en": "Interior mutability for Copy types",
        "answer_hi": "Copy टाइप्स के लिए इंटीरियर म्यूटेबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which trait is for hashing?",
        "question_hi": "हैशिंग के लिए कौन सा ट्रेट है?",
        "options_en": ["Hash", "Hasher", "Digest", "Hashing"],
        "options_hi": ["Hash", "Hasher", "Digest", "Hashing"],
        "answer_en": "Hash",
        "answer_hi": "Hash",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is a crate?",
        "question_hi": "crate क्या है?",
        "options_en": ["A compilation unit", "A package", "A library", "All of the above"],
        "options_hi": ["एक कंपाइलेशन यूनिट", "एक पैकेज", "एक लाइब्रेरी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What are the floating point types?",
        "question_hi": "फ्लोटिंग पॉइंट टाइप्स क्या हैं?",
        "options_en": ["f32 and f64", "float and double", "only f32", "only f64"],
        "options_hi": ["f32 और f64", "float और double", "केवल f32", "केवल f64"],
        "answer_en": "f32 and f64",
        "answer_hi": "f32 और f64",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the never type?",
        "question_hi": "never टाइप क्या है?",
        "options_en": ["!", "never", "None", "void"],
        "options_hi": ["!", "never", "None", "void"],
        "answer_en": "!",
        "answer_hi": "!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "How do you add to a vector?",
        "question_hi": "वेक्टर में कैसे एड करते हैं?",
        "options_en": ["push()", "add()", "append()", "insert()"],
        "options_hi": ["push()", "add()", "append()", "insert()"],
        "answer_en": "push()",
        "answer_hi": "push()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What does Send indicate?",
        "question_hi": "Send क्या इंगित करता है?",
        "options_en": ["Safe to transfer between threads", "Safe to send over network", "Safe to copy", "Safe to mutate"],
        "options_hi": ["थ्रेड्स के बीच ट्रांसफर करने के लिए सेफ", "नेटवर्क पर भेजने के लिए सेफ", "कॉपी करने के लिए सेफ", "म्यूटेट करने के लिए सेफ"],
        "answer_en": "Safe to transfer between threads",
        "answer_hi": "थ्रेड्स के बीच ट्रांसफर करने के लिए सेफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "How do you create a raw pointer?",
        "question_hi": "रॉ पॉइंटर कैसे बनाते हैं?",
        "options_en": ["&value as *const T", "raw_ptr(value)", "pointer(value)", "Ptr::new(value)"],
        "options_hi": ["&value as *const T", "raw_ptr(value)", "pointer(value)", "Ptr::new(value)"],
        "answer_en": "&value as *const T",
        "answer_hi": "&value as *const T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What does Sync indicate?",
        "question_hi": "Sync क्या इंगित करता है?",
        "options_en": ["Safe to share between threads", "Safe to synchronize", "Safe to copy", "Safe to mutate"],
        "options_hi": ["थ्रेड्स के बीच शेयर करने के लिए सेफ", "सिंक्रोनाइज़ करने के लिए सेफ", "कॉपी करने के लिए सेफ", "म्यूटेट करने के लिए सेफ"],
        "answer_en": "Safe to share between threads",
        "answer_hi": "थ्रेड्स के बीच शेयर करने के लिए सेफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "How do you handle Option values?",
        "question_hi": "Option वैल्यूज को कैसे हैंडल करते हैं?",
        "options_en": ["match or if let", "unwrap", "expect", "All of the above"],
        "options_hi": ["match या if let", "unwrap", "expect", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is const fn?",
        "question_hi": "const fn क्या है?",
        "options_en": ["Function evaluable at compile time", "Constant function", "Both A and B", "None of the above"],
        "options_hi": ["कंपाइल टाइम पर एवेलुएबल फंक्शन", "कॉन्स्टेंट फंक्शन", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "How do you do network programming?",
        "question_hi": "नेटवर्क प्रोग्रामिंग कैसे करते हैं?",
        "options_en": ["Using std::net", "Using external crates", "Both A and B", "Rust doesn't support networking"],
        "options_hi": ["std::net का उपयोग करके", "एक्सटर्नल क्रेट्स का उपयोग करके", "A और B दोनों", "Rust नेटवर्किंग सपोर्ट नहीं करता"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is turbofish syntax?",
        "question_hi": "टर्बोफिश सिंटैक्स क्या है?",
        "options_en": ["::<> for specifying generic types", "-> for return types", "=> for match arms", "<> for comparisons"],
        "options_hi": ["जेनेरिक टाइप्स स्पेसिफाई करने के लिए ::<>", "रिटर्न टाइप्स के लिए ->", "मैच आर्म्स के लिए =>", "कम्पेयरिजन के लिए <>"],
        "answer_en": "::<> for specifying generic types",
        "answer_hi": "जेनेरिक टाइप्स स्पेसिफाई करने के लिए ::<>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which traits are for conversion?",
        "question_hi": "कन्वर्जन के लिए कौन से ट्रेट्स हैं?",
        "options_en": ["From and Into", "Convert", "Transform", "Change"],
        "options_hi": ["From और Into", "Convert", "Transform", "Change"],
        "answer_en": "From and Into",
        "answer_hi": "From और Into",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is an associated type?",
        "question_hi": "एसोसिएटेड टाइप क्या है?",
        "options_en": ["Type connected to a trait", "Type alias", "Generic type", "Trait type"],
        "options_hi": ["ट्रेट से कनेक्टेड टाइप", "टाइप एलियास", "जेनेरिक टाइप", "ट्रेट टाइप"],
        "answer_en": "Type connected to a trait",
        "answer_hi": "ट्रेट से कनेक्टेड टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "How do you create a function pointer?",
        "question_hi": "फंक्शन पॉइंटर कैसे बनाते हैं?",
        "options_en": ["fn pointer type", "function pointer", "&fn", "Function::ptr"],
        "options_hi": ["fn पॉइंटर टाइप", "function pointer", "&fn", "Function::ptr"],
        "answer_en": "fn pointer type",
        "answer_hi": "fn पॉइंटर टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
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
        "num": 79,
        "question_en": "How do you concatenate strings?",
        "question_hi": "स्ट्रिंग्स कैसे कॉन्कटीनेट करते हैं?",
        "options_en": ["+ operator or format! macro", "concat() method", "join() method", "All of the above"],
        "options_hi": ["+ ऑपरेटर या format! मैक्रो", "concat() मेथड", "join() मेथड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is macro_rules! for?",
        "question_hi": "macro_rules! किस लिए है?",
        "options_en": ["Defining declarative macros", "Rule-based macros", "Both A and B", "Procedural macros"],
        "options_hi": ["डिक्लेरेटिव मैक्रोस डिफाइन करना", "रूल-बेस्ड मैक्रोस", "A और B दोनों", "प्रोसीजरल मैक्रोस"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "How do you handle JSON?",
        "question_hi": "JSON को कैसे हैंडल करते हैं?",
        "options_en": ["Using serde crate", "Using json crate", "Both A and B", "Using built-in JSON"],
        "options_hi": ["serde क्रेट का उपयोग करके", "json क्रेट का उपयोग करके", "A और B दोनों", "बिल्ट-इन JSON का उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is zero-cost abstraction?",
        "question_hi": "जीरो-कॉस्ट एब्स्ट्रैक्शन क्या है?",
        "options_en": ["No runtime overhead for abstractions", "Free abstractions", "Compile-time cost only", "All of the above"],
        "options_hi": ["एब्स्ट्रैक्शन्स के लिए कोई रनटाइम ओवरहेड नहीं", "फ्री एब्स्ट्रैक्शन्स", "केवल कंपाइल-टाइम कॉस्ट", "उपरोक्त सभी"],
        "answer_en": "No runtime overhead for abstractions",
        "answer_hi": "एब्स्ट्रैक्शन्स के लिए कोई रनटाइम ओवरहेड नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "How do you handle errors in main?",
        "question_hi": "main में एरर्स को कैसे हैंडल करते हैं?",
        "options_en": ["Return Result", "Use panic!", "Use unwrap", "All are valid"],
        "options_hi": ["Result रिटर्न करें", "panic! उपयोग करें", "unwrap उपयोग करें", "सभी वैलिड हैं"],
        "answer_en": "All are valid",
        "answer_hi": "सभी वैलिड हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is Pin used for?",
        "question_hi": "Pin का उपयोग किस लिए किया जाता है?",
        "options_en": ["Self-referential structs", "Memory pinning", "Both A and B", "Async programming only"],
        "options_hi": ["सेल्फ-रेफरेंशियल स्ट्रक्चर्स", "मेमोरी पिनिंग", "A और B दोनों", "केवल Async प्रोग्रामिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "How do you define a generic function?",
        "question_hi": "जेनेरिक फंक्शन कैसे डिफाइन करते हैं?",
        "options_en": ["fn name<T>(param: T) -> T", "generic fn name<T>()", "fn name<generic T>()", "function<T> name()"],
        "options_hi": ["fn name<T>(param: T) -> T", "generic fn name<T>()", "fn name<generic T>()", "function<T> name()"],
        "answer_en": "fn name<T>(param: T) -> T",
        "answer_hi": "fn name<T>(param: T) -> T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is an unsafe trait?",
        "question_hi": "अनसेफ ट्रेट क्या है?",
        "options_en": ["Trait with unsafe requirements", "Unsafe to implement", "Both A and B", "Trait that can panic"],
        "options_hi": ["अनसेफ रिक्वायरमेंट्स वाला ट्रेट", "इम्प्लीमेंट करने के लिए अनसेफ", "A और B दोनों", "पैनिक कर सकने वाला ट्रेट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "How do you allocate memory on heap?",
        "question_hi": "हीप पर मेमोरी कैसे अलोकेट करते हैं?",
        "options_en": ["Box::new()", "alloc()", "malloc()", "All of the above"],
        "options_hi": ["Box::new()", "alloc()", "malloc()", "उपरोक्त सभी"],
        "answer_en": "Box::new()",
        "answer_hi": "Box::new()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What are non-lexical lifetimes?",
        "question_hi": "नॉन-लेक्सिकल लाइफटाइम्स क्या हैं?",
        "options_en": ["Improved borrow checker analysis", "New lifetime syntax", "Both A and B", "Removed lifetimes"],
        "options_hi": ["इम्प्रूव्ड बोरो चेकर एनालिसिस", "न्यू लाइफटाइम सिंटैक्स", "A और B दोनों", "रिमूव्ड लाइफटाइम्स"],
        "answer_en": "Improved borrow checker analysis",
        "answer_hi": "इम्प्रूव्ड बोरो चेकर एनालिसिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "How do you use WebAssembly with Rust?",
        "question_hi": "Rust के साथ WebAssembly कैसे उपयोग करते हैं?",
        "options_en": ["Using wasm-bindgen", "Compiling to wasm target", "Both A and B", "Rust doesn't support WASM"],
        "options_hi": ["wasm-bindgen का उपयोग करके", "wasm टारगेट पर कंपाइल करके", "A और B दोनों", "Rust WASM सपोर्ट नहीं करता"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What are const generics?",
        "question_hi": "कॉन्स्ट जेनेरिक्स क्या हैं?",
        "options_en": ["Generic parameters that are constants", "Constant generic functions", "Both A and B", "Generic constants"],
        "options_hi": ["कॉन्स्टेंट्स वाले जेनेरिक पैरामीटर्स", "कॉन्स्टेंट जेनेरिक फंक्शन्स", "A और B दोनों", "जेनेरिक कॉन्स्टेंट्स"],
        "answer_en": "Generic parameters that are constants",
        "answer_hi": "कॉन्स्टेंट्स वाले जेनेरिक पैरामीटर्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "How do you define an async function?",
        "question_hi": "async फंक्शन कैसे डिफाइन करते हैं?",
        "options_en": ["async fn name()", "fn async name()", "await fn name()", "future fn name()"],
        "options_hi": ["async fn name()", "fn async name()", "await fn name()", "future fn name()"],
        "answer_en": "async fn name()",
        "answer_hi": "async fn name()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is tokio?",
        "question_hi": "tokio क्या है?",
        "options_en": ["Async runtime for Rust", "Networking library", "Both A and B", "Synchronous runtime"],
        "options_hi": ["Rust के लिए Async रनटाइम", "नेटवर्किंग लाइब्रेरी", "A और B दोनों", "सिंक्रोनस रनटाइम"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "How do you create a trait object?",
        "question_hi": "ट्रेट ऑब्जेक्ट कैसे बनाते हैं?",
        "options_en": ["&dyn Trait", "dyn Trait", "Trait object", "object Trait"],
        "options_hi": ["&dyn Trait", "dyn Trait", "Trait object", "object Trait"],
        "answer_en": "&dyn Trait",
        "answer_hi": "&dyn Trait",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is no_std?",
        "question_hi": "no_std क्या है?",
        "options_en": ["Environment without standard library", "For embedded systems", "Both A and B", "For web development"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी के बिना एनवायरनमेंट", "एम्बेडेड सिस्टम्स के लिए", "A और B दोनों", "वेब डेवलपमेंट के लिए"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "How do you copy memory?",
        "question_hi": "मेमोरी कैसे कॉपी करते हैं?",
        "options_en": ["copy_from_slice()", "memcpy()", "copy()", "clone()"],
        "options_hi": ["copy_from_slice()", "memcpy()", "copy()", "clone()"],
        "answer_en": "copy_from_slice()",
        "answer_hi": "copy_from_slice()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the Rustonomicon?",
        "question_hi": "Rustonomicon क्या है?",
        "options_en": ["Guide to unsafe Rust", "Rust reference", "Both A and B", "Rust tutorial"],
        "options_hi": ["अनसेफ Rust की गाइड", "Rust रिफरेन्स", "A और B दोनों", "Rust ट्यूटोरियल"],
        "answer_en": "Guide to unsafe Rust",
        "answer_hi": "अनसेफ Rust की गाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "How do you use SIMD in Rust?",
        "question_hi": "Rust में SIMD कैसे उपयोग करते हैं?",
        "options_en": ["Using std::simd", "Using architecture-specific intrinsics", "Both A and B", "Rust doesn't support SIMD"],
        "options_hi": ["std::simd का उपयोग करके", "आर्किटेक्चर-स्पेसिफिक इंट्रिंसिक्स का उपयोग करके", "A और B दोनों", "Rust SIMD सपोर्ट नहीं करता"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is FFI?",
        "question_hi": "FFI क्या है?",
        "options_en": ["Foreign Function Interface", "Function Foreign Interface", "Fast Function Interface", "File Function Interface"],
        "options_hi": ["फॉरेन फंक्शन इंटरफेस", "फंक्शन फॉरेन इंटरफेस", "फास्ट फंक्शन इंटरफेस", "फाइल फंक्शन इंटरफेस"],
        "answer_en": "Foreign Function Interface",
        "answer_hi": "फॉरेन फंक्शन इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "How do you manipulate bits?",
        "question_hi": "बिट्स को कैसे मैनिपुलेट करते हैं?",
        "options_en": ["Using bitwise operators", "Using bitvec crate", "Both A and B", "Using bit manipulation functions"],
        "options_hi": ["बिटवाइज ऑपरेटर्स का उपयोग करके", "bitvec क्रेट का उपयोग करके", "A और B दोनों", "बिट मैनिपुलेशन फंक्शन्स का उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What does cargo fmt do?",
        "question_hi": "cargo fmt क्या करता है?",
        "options_en": ["Formats Rust code", "Formats Cargo.toml", "Both A and B", "Formats documentation"],
        "options_hi": ["Rust कोड फॉर्मेट करता है", "Cargo.toml फॉर्मेट करता है", "A और B दोनों", "डॉक्यूमेंटेशन फॉर्मेट करता है"],
        "answer_en": "Formats Rust code",
        "answer_hi": "Rust कोड फॉर्मेट करता है",
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