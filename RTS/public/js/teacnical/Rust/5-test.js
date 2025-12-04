const questions = [
    {
        "num": 1,
        "question_en": "What is the primary benefit of Rust's ownership system?",
        "question_hi": "Rust के ownership सिस्टम का प्राथमिक लाभ क्या है?",
        "options_en": ["Memory safety without garbage collection", "Faster execution speed", "Automatic memory management", "Simpler syntax"],
        "options_hi": ["गार्बेज कलेक्शन के बिना मेमोरी सेफ्टी", "तेज एक्जीक्यूशन स्पीड", "ऑटोमैटिक मेमोरी मैनेजमेंट", "सरल सिंटैक्स"],
        "answer_en": "Memory safety without garbage collection",
        "answer_hi": "गार्बेज कलेक्शन के बिना मेमोरी सेफ्टी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which keyword makes a variable mutable in Rust?",
        "question_hi": "Rust में कौन सा कीवर्ड वेरिएबल को म्यूटेबल बनाता है?",
        "options_en": ["mut", "var", "let mut", "mutable"],
        "options_hi": ["mut", "var", "let mut", "mutable"],
        "answer_en": "mut",
        "answer_hi": "mut",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is Cargo in Rust?",
        "question_hi": "Rust में Cargo क्या है?",
        "options_en": ["Package manager and build system", "Compiler", "Standard library", "Runtime environment"],
        "options_hi": ["पैकेज मैनेजर और बिल्ड सिस्टम", "कंपाइलर", "स्टैंडर्ड लाइब्रेरी", "रनटाइम एनवायरनमेंट"],
        "answer_en": "Package manager and build system",
        "answer_hi": "पैकेज मैनेजर और बिल्ड सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the default integer type in Rust?",
        "question_hi": "Rust में डिफॉल्ट इंटीजर टाइप क्या है?",
        "options_en": ["i32", "i64", "usize", "int"],
        "options_hi": ["i32", "i64", "usize", "int"],
        "answer_en": "i32",
        "answer_hi": "i32",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "How do you create a new empty String?",
        "question_hi": "नई खाली String कैसे बनाते हैं?",
        "options_en": ["String::new()", "new String()", "String::empty()", "String()"],
        "options_hi": ["String::new()", "new String()", "String::empty()", "String()"],
        "answer_en": "String::new()",
        "answer_hi": "String::new()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is pattern matching in Rust used for?",
        "question_hi": "Rust में पैटर्न मैचिंग का उपयोग किस लिए किया जाता है?",
        "options_en": ["Deconstructing values and control flow", "String pattern searching", "Memory pattern detection", "Code pattern recognition"],
        "options_hi": ["वैल्यूज को डीकंस्ट्रक्ट करना और कंट्रोल फ्लो", "स्ट्रिंग पैटर्न सर्चिंग", "मेमोरी पैटर्न डिटेक्शन", "कोड पैटर्न रिकग्निशन"],
        "answer_en": "Deconstructing values and control flow",
        "answer_hi": "वैल्यूज को डीकंस्ट्रक्ट करना और कंट्रोल फ्लो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which enum is used for error handling that can return either Ok or Err?",
        "question_hi": "कौन सा enum एरर हैंडलिंग के लिए उपयोग किया जाता है जो Ok या Err रिटर्न कर सकता है?",
        "options_en": ["Result", "Option", "Either", "Error"],
        "options_hi": ["Result", "Option", "Either", "Error"],
        "answer_en": "Result",
        "answer_hi": "Result",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does RAII stand for in Rust?",
        "question_hi": "Rust में RAII का क्या अर्थ है?",
        "options_en": ["Resource Acquisition Is Initialization", "Rust Automatic Initialization Interface", "Runtime Allocation and Initialization", "Resource Allocation Interface"],
        "options_hi": ["Resource Acquisition Is Initialization", "Rust Automatic Initialization Interface", "Runtime Allocation and Initialization", "Resource Allocation Interface"],
        "answer_en": "Resource Acquisition Is Initialization",
        "answer_hi": "Resource Acquisition Is Initialization",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "How do you define a compile-time constant?",
        "question_hi": "कंपाइल-टाइम कॉन्स्टेंट कैसे डिफाइन करते हैं?",
        "options_en": ["const", "static", "let", "define"],
        "options_hi": ["const", "static", "let", "define"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What happens when you call unwrap() on a None value?",
        "question_hi": "None वैल्यू पर unwrap() कॉल करने पर क्या होता है?",
        "options_en": ["The program panics", "It returns None", "It returns a default value", "It returns Ok(())"],
        "options_hi": ["प्रोग्राम पैनिक करता है", "यह None रिटर्न करता है", "यह डिफॉल्ट वैल्यू रिटर्न करता है", "यह Ok(()) रिटर्न करता है"],
        "answer_en": "The program panics",
        "answer_hi": "प्रोग्राम पैनिक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which macro is used for printing to standard output?",
        "question_hi": "स्टैंडर्ड आउटपुट पर प्रिंटिंग के लिए किस मैक्रो का उपयोग किया जाता है?",
        "options_en": ["println!", "print!", "echo!", "display!"],
        "options_hi": ["println!", "print!", "echo!", "display!"],
        "answer_en": "println!",
        "answer_hi": "println!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is a trait in Rust?",
        "question_hi": "Rust में trait क्या है?",
        "options_en": ["A collection of method signatures", "A data type", "A module system", "A function type"],
        "options_hi": ["मेथड सिग्नेचर्स का कलेक्शन", "एक डेटा टाइप", "एक मॉड्यूल सिस्टम", "एक फंक्शन टाइप"],
        "answer_en": "A collection of method signatures",
        "answer_hi": "मेथड सिग्नेचर्स का कलेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What does the ? operator do when used on a Result?",
        "question_hi": "Result पर ? ऑपरेटर का उपयोग करने पर क्या होता है?",
        "options_en": ["Returns early with Err if Result is Err", "Converts Result to Option", "Unwraps the value", "Logs the error"],
        "options_hi": ["यदि Result Err है तो Err के साथ अर्ली रिटर्न करता है", "Result को Option में कन्वर्ट करता है", "वैल्यू को अनरैप करता है", "एरर को लॉग करता है"],
        "answer_en": "Returns early with Err if Result is Err",
        "answer_hi": "यदि Result Err है तो Err के साथ अर्ली रिटर्न करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is Box<T> primarily used for?",
        "question_hi": "Box<T> मुख्य रूप से किस लिए उपयोग किया जाता है?",
        "options_en": ["Heap allocation", "Stack allocation", "Thread safety", "Memory optimization"],
        "options_hi": ["हीप अलोकेशन", "स्टैक अलोकेशन", "थ्रेड सेफ्टी", "मेमोरी ऑप्टिमाइज़ेशन"],
        "answer_en": "Heap allocation",
        "answer_hi": "हीप अलोकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which keyword is used to define a function?",
        "question_hi": "फंक्शन डिफाइन करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["fn", "function", "def", "func"],
        "options_hi": ["fn", "function", "def", "func"],
        "answer_en": "fn",
        "answer_hi": "fn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the main difference between String and &str?",
        "question_hi": "String और &str में मुख्य अंतर क्या है?",
        "options_en": ["String is owned, &str is borrowed", "String is mutable, &str is immutable", "String is on heap, &str can be anywhere", "All of the above"],
        "options_hi": ["String ओन्ड है, &str बोरोड है", "String म्यूटेबल है, &str इम्म्यूटेबल है", "String हीप पर है, &str कहीं भी हो सकता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "How do you create a vector with initial values?",
        "question_hi": "इनिशियल वैल्यूज के साथ वेक्टर कैसे बनाते हैं?",
        "options_en": ["vec![1, 2, 3]", "Vector::new(1, 2, 3)", "new Vector(1, 2, 3)", "Vector::from([1, 2, 3])"],
        "options_hi": ["vec![1, 2, 3]", "Vector::new(1, 2, 3)", "new Vector(1, 2, 3)", "Vector::from([1, 2, 3])"],
        "answer_en": "vec![1, 2, 3]",
        "answer_hi": "vec![1, 2, 3]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does the #[derive(Debug)] attribute do?",
        "question_hi": "#[derive(Debug)] एट्रिब्यूट क्या करता है?",
        "options_en": ["Automatically implements Debug trait", "Enables debugging", "Derives debug information", "All of the above"],
        "options_hi": ["Debug ट्रेट को ऑटोमैटिकली इम्प्लीमेंट करता है", "डीबगिंग सक्षम करता है", "डीबग इनफॉर्मेशन डेरिव करता है", "उपरोक्त सभी"],
        "answer_en": "Automatically implements Debug trait",
        "answer_hi": "Debug ट्रेट को ऑटोमैटिकली इम्प्लीमेंट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which trait allows creating a deep copy of a value?",
        "question_hi": "कौन सा ट्रेट वैल्यू की डीप कॉपी बनाने की अनुमति देता है?",
        "options_en": ["Clone", "Copy", "DeepCopy", "Duplicate"],
        "options_hi": ["Clone", "Copy", "DeepCopy", "Duplicate"],
        "answer_en": "Clone",
        "answer_hi": "Clone",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What does the 'move' keyword do in a closure?",
        "question_hi": "क्लोजर में 'move' कीवर्ड क्या करता है?",
        "options_en": ["Takes ownership of captured variables", "Moves the closure to heap", "Makes closure mutable", "Moves variables between threads"],
        "options_hi": ["कैप्चर्ड वेरिएबल्स की ओनरशिप लेता है", "क्लोजर को हीप पर मूव करता है", "क्लोजर को म्यूटेबल बनाता है", "वेरिएबल्स को थ्रेड्स के बीच मूव करता है"],
        "answer_en": "Takes ownership of captured variables",
        "answer_hi": "कैप्चर्ड वेरिएबल्स की ओनरशिप लेता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "How do you spawn a new thread in Rust?",
        "question_hi": "Rust में नया थ्रेड कैसे स्पॉन करते हैं?",
        "options_en": ["thread::spawn()", "Thread::new()", "spawn_thread()", "new Thread()"],
        "options_hi": ["thread::spawn()", "Thread::new()", "spawn_thread()", "new Thread()"],
        "answer_en": "thread::spawn()",
        "answer_hi": "thread::spawn()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the purpose of lifetimes in Rust?",
        "question_hi": "Rust में लाइफटाइम्स का उद्देश्य क्या है?",
        "options_en": ["Ensure references are always valid", "Manage memory allocation", "Control thread lifetime", "All of the above"],
        "options_hi": ["यह सुनिश्चित करना कि रिफरेन्सेस हमेशा वैलिड रहें", "मेमोरी अलोकेशन मैनेज करना", "थ्रेड लाइफटाइम कंट्रोल करना", "उपरोक्त सभी"],
        "answer_en": "Ensure references are always valid",
        "answer_hi": "यह सुनिश्चित करना कि रिफरेन्सेस हमेशा वैलिड रहें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which attribute marks a function as a test?",
        "question_hi": "कौन सा एट्रिब्यूट फंक्शन को टेस्ट के रूप में मार्क करता है?",
        "options_en": ["#[test]", "#[cfg(test)]", "#[test_fn]", "#[testing]"],
        "options_hi": ["#[test]", "#[cfg(test)]", "#[test_fn]", "#[testing]"],
        "answer_en": "#[test]",
        "answer_hi": "#[test]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the purpose of the 'impl' block?",
        "question_hi": "'impl' ब्लॉक का उद्देश्य क्या है?",
        "options_en": ["Implement methods for a type", "Import external libraries", "Initialize variables", "Implement traits for a type"],
        "options_hi": ["टाइप के लिए मेथड्स इम्प्लीमेंट करना", "एक्सटर्नल लाइब्रेरीज इम्पोर्ट करना", "वेरिएबल्स इनिशियलाइज़ करना", "टाइप के लिए ट्रेट्स इम्प्लीमेंट करना"],
        "answer_en": "Implement methods for a type",
        "answer_hi": "टाइप के लिए मेथड्स इम्प्लीमेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "How do you wait for a thread to finish?",
        "question_hi": "थ्रेड के खत्म होने का इंतज़ार कैसे करते हैं?",
        "options_en": ["thread.join()", "thread.wait()", "thread.await()", "thread.finish()"],
        "options_hi": ["thread.join()", "thread.wait()", "thread.await()", "thread.finish()"],
        "answer_en": "thread.join()",
        "answer_hi": "thread.join()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is destructuring in pattern matching?",
        "question_hi": "पैटर्न मैचिंग में डीस्ट्रक्चरिंग क्या है?",
        "options_en": ["Breaking down complex data types", "Destroying values", "Memory deallocation", "Variable destruction"],
        "options_hi": ["कॉम्प्लेक्स डेटा टाइप्स को तोड़ना", "वैल्यूज को डिस्ट्रॉय करना", "मेमोरी डीलोकेशन", "वेरिएबल डिस्ट्रक्शन"],
        "answer_en": "Breaking down complex data types",
        "answer_hi": "कॉम्प्लेक्स डेटा टाइप्स को तोड़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which trait is used to convert a type to a string?",
        "question_hi": "टाइप को स्ट्रिंग में कन्वर्ट करने के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["ToString", "Stringify", "Display", "AsStr"],
        "options_hi": ["ToString", "Stringify", "Display", "AsStr"],
        "answer_en": "ToString",
        "answer_hi": "ToString",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is variable shadowing in Rust?",
        "question_hi": "Rust में वेरिएबल शैडोइंग क्या है?",
        "options_en": ["Declaring a new variable with same name", "Hiding variables from scope", "Memory optimization technique", "Thread safety feature"],
        "options_hi": ["समान नाम से नया वेरिएबल डिक्लेयर करना", "स्कोप से वेरिएबल्स को हाइड करना", "मेमोरी ऑप्टिमाइज़ेशन टेक्निक", "थ्रेड सेफ्टी फीचर"],
        "answer_en": "Declaring a new variable with same name",
        "answer_hi": "समान नाम से नया वेरिएबल डिक्लेयर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How do you represent a value that might be absent?",
        "question_hi": "वैल्यू जो अनुपस्थित हो सकती है उसे कैसे रिप्रेजेंट करते हैं?",
        "options_en": ["Option<T>", "Optional<T>", "Maybe<T>", "Nullable<T>"],
        "options_hi": ["Option<T>", "Optional<T>", "Maybe<T>", "Nullable<T>"],
        "answer_en": "Option<T>",
        "answer_hi": "Option<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What does 'dyn' keyword indicate?",
        "question_hi": "'dyn' कीवर्ड क्या इंगित करता है?",
        "options_en": ["Dynamic dispatch for trait objects", "Dynamic memory allocation", "Dynamic typing", "Dynamic linking"],
        "options_hi": ["ट्रेट ऑब्जेक्ट्स के लिए डायनामिक डिस्पैच", "डायनामिक मेमोरी अलोकेशन", "डायनामिक टाइपिंग", "डायनामिक लिंकिंग"],
        "answer_en": "Dynamic dispatch for trait objects",
        "answer_hi": "ट्रेट ऑब्जेक्ट्स के लिए डायनामिक डिस्पैच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "How do you iterate over elements in a vector?",
        "question_hi": "वेक्टर में एलिमेंट्स पर कैसे इटरेट करते हैं?",
        "options_en": ["for item in &vec", "vec.forEach()", "for (item in vec)", "iterate(vec)"],
        "options_hi": ["for item in &vec", "vec.forEach()", "for (item in vec)", "iterate(vec)"],
        "answer_en": "for item in &vec",
        "answer_hi": "for item in &vec",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "When should you use 'unsafe' code?",
        "question_hi": "'unsafe' कोड का उपयोग कब करना चाहिए?",
        "options_en": ["When interacting with FFI or raw pointers", "For performance optimization", "When you want to bypass checks", "All of the above"],
        "options_hi": ["FFI या रॉ पॉइंटर्स के साथ इंटरैक्ट करते समय", "परफॉर्मेंस ऑप्टिमाइज़ेशन के लिए", "जब आप चेक्स बायपास करना चाहते हैं", "उपरोक्त सभी"],
        "answer_en": "When interacting with FFI or raw pointers",
        "answer_hi": "FFI या रॉ पॉइंटर्स के साथ इंटरैक्ट करते समय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "How do you create a new HashMap?",
        "question_hi": "नया HashMap कैसे बनाते हैं?",
        "options_en": ["HashMap::new()", "Map::new()", "new HashMap()", "create_hashmap()"],
        "options_hi": ["HashMap::new()", "Map::new()", "new HashMap()", "create_hashmap()"],
        "answer_en": "HashMap::new()",
        "answer_hi": "HashMap::new()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What does the 'mod' keyword define?",
        "question_hi": "'mod' कीवर्ड क्या डिफाइन करता है?",
        "options_en": ["A module", "A model", "A mode", "A modification"],
        "options_hi": ["एक मॉड्यूल", "एक मॉडल", "एक मोड", "एक मॉडिफिकेशन"],
        "answer_en": "A module",
        "answer_hi": "एक मॉड्यूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which trait provides total ordering for types?",
        "question_hi": "कौन सा ट्रेट टाइप्स के लिए टोटल ऑर्डरिंग प्रोवाइड करता है?",
        "options_en": ["Ord", "PartialOrd", "Order", "Compare"],
        "options_hi": ["Ord", "PartialOrd", "Order", "Compare"],
        "answer_en": "Ord",
        "answer_hi": "Ord",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the borrow checker's main role?",
        "question_hi": "बोरो चेकर की मुख्य भूमिका क्या है?",
        "options_en": ["Ensure memory safety through reference rules", "Check loan eligibility", "Validate code style", "Detect memory leaks"],
        "options_hi": ["रिफरेन्स रूल्स के माध्यम से मेमोरी सेफ्टी सुनिश्चित करना", "लोन एलिजिबिलिटी चेक करना", "कोड स्टाइल वैलिडेट करना", "मेमोरी लीक्स डिटेक्ट करना"],
        "answer_en": "Ensure memory safety through reference rules",
        "answer_hi": "रिफरेन्स रूल्स के माध्यम से मेमोरी सेफ्टी सुनिश्चित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How do you read an entire file as a string?",
        "question_hi": "पूरी फाइल को स्ट्रिंग के रूप में कैसे पढ़ते हैं?",
        "options_en": ["fs::read_to_string()", "File::read_all()", "read_file()", "File::open().read_to_string()"],
        "options_hi": ["fs::read_to_string()", "File::read_all()", "read_file()", "File::open().read_to_string()"],
        "answer_en": "fs::read_to_string()",
        "answer_hi": "fs::read_to_string()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What makes a pointer 'smart' in Rust?",
        "question_hi": "Rust में पॉइंटर को 'स्मार्ट' क्या बनाता है?",
        "options_en": ["Additional metadata and capabilities", "Automatic memory management", "Thread safety", "All of the above"],
        "options_hi": ["एडिशनल मेटाडेटा और कैपेबिलिटीज", "ऑटोमैटिक मेमोरी मैनेजमेंट", "थ्रेड सेफ्टी", "उपरोक्त सभी"],
        "answer_en": "Additional metadata and capabilities",
        "answer_hi": "एडिशनल मेटाडेटा और कैपेबिलिटीज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which macro creates a formatted string without printing?",
        "question_hi": "कौन सा मैक्रो प्रिंट किए बिना फॉर्मेटेड स्ट्रिंग बनाता है?",
        "options_en": ["format!", "fmt!", "create_string!", "string!"],
        "options_hi": ["format!", "fmt!", "create_string!", "string!"],
        "answer_en": "format!",
        "answer_hi": "format!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What does 'Self' represent in an impl block?",
        "question_hi": "impl ब्लॉक में 'Self' क्या रिप्रेजेंट करता है?",
        "options_en": ["The type being implemented", "The current module", "Self reference", "Static type"],
        "options_hi": ["इम्प्लीमेंट किया जा रहा टाइप", "करंट मॉड्यूल", "सेल्फ रिफरेन्स", "स्टैटिक टाइप"],
        "answer_en": "The type being implemented",
        "answer_hi": "इम्प्लीमेंट किया जा रहा टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How do you define a global static variable?",
        "question_hi": "ग्लोबल स्टैटिक वेरिएबल कैसे डिफाइन करते हैं?",
        "options_en": ["static", "const", "let", "global"],
        "options_hi": ["static", "const", "let", "global"],
        "answer_en": "static",
        "answer_hi": "static",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the Iterator trait used for?",
        "question_hi": "Iterator ट्रेट का उपयोग किस लिए किया जाता है?",
        "options_en": ["Sequential access to collections", "Loop construction", "Collection creation", "All of the above"],
        "options_hi": ["कलेक्शन्स तक सीक्वेंशियल एक्सेस", "लूप कंस्ट्रक्शन", "कलेक्शन क्रिएशन", "उपरोक्त सभी"],
        "answer_en": "Sequential access to collections",
        "answer_hi": "कलेक्शन्स तक सीक्वेंशियल एक्सेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the main purpose of the ? operator?",
        "question_hi": "? ऑपरेटर का मुख्य उद्देश्य क्या है?",
        "options_en": ["Error propagation", "Optional chaining", "Null checking", "All of the above"],
        "options_hi": ["एरर प्रोपेगेशन", "ऑप्शनल चेनिंग", "नल चेकिंग", "उपरोक्त सभी"],
        "answer_en": "Error propagation",
        "answer_hi": "एरर प्रोपेगेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What are channels primarily used for?",
        "question_hi": "चैनल्स मुख्य रूप से किस लिए उपयोग किए जाते हैं?",
        "options_en": ["Communication between threads", "Network communication", "File I/O", "Process communication"],
        "options_hi": ["थ्रेड्स के बीच कम्युनिकेशन", "नेटवर्क कम्युनिकेशन", "फाइल I/O", "प्रोसेस कम्युनिकेशन"],
        "answer_en": "Communication between threads",
        "answer_hi": "थ्रेड्स के बीच कम्युनिकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How do you define a struct with fields?",
        "question_hi": "फील्ड्स के साथ struct कैसे डिफाइन करते हैं?",
        "options_en": ["struct Name { field: Type }", "class Name { field: Type }", "type Name = { field: Type }", "define struct Name"],
        "options_hi": ["struct Name { field: Type }", "class Name { field: Type }", "type Name = { field: Type }", "define struct Name"],
        "answer_en": "struct Name { field: Type }",
        "answer_hi": "struct Name { field: Type }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is an enum in Rust?",
        "question_hi": "Rust में enum क्या है?",
        "options_en": ["A type with multiple variants", "Enumerator for loops", "List of constants", "Number sequence"],
        "options_hi": ["मल्टीपल वेरिएंट्स वाला टाइप", "लूप्स के लिए एन्युमरेटर", "कॉन्स्टेंट्स की लिस्ट", "नंबर सीक्वेंस"],
        "answer_en": "A type with multiple variants",
        "answer_hi": "मल्टीपल वेरिएंट्स वाला टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which trait provides a default value for a type?",
        "question_hi": "कौन सा ट्रेट टाइप के लिए डिफॉल्ट वैल्यू प्रोवाइड करता है?",
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
        "options_en": ["Compiler automatically infers lifetimes", "Manual lifetime specification", "Lifetime removal", "Lifetime optimization"],
        "options_hi": ["कंपाइलर ऑटोमैटिकली लाइफटाइम्स इन्फेर करता है", "मैन्युअल लाइफटाइम स्पेसिफिकेशन", "लाइफटाइम रिमूवल", "लाइफटाइम ऑप्टिमाइज़ेशन"],
        "answer_en": "Compiler automatically infers lifetimes",
        "answer_hi": "कंपाइलर ऑटोमैटिकली लाइफटाइम्स इन्फेर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How do you create a slice from an array?",
        "question_hi": "ऐरे से स्लाइस कैसे बनाते हैं?",
        "options_en": ["&array[..]", "array.slice()", "slice(array)", "Slice::from(array)"],
        "options_hi": ["&array[..]", "array.slice()", "slice(array)", "Slice::from(array)"],
        "answer_en": "&array[..]",
        "answer_hi": "&array[..]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the primary use of async/await?",
        "question_hi": "async/await का प्राथमिक उपयोग क्या है?",
        "options_en": ["Asynchronous programming", "Synchronous code execution", "Parallel processing", "Thread management"],
        "options_hi": ["असिंक्रोनस प्रोग्रामिंग", "सिंक्रोनस कोड एक्जीक्यूशन", "पैरेलल प्रोसेसिंग", "थ्रेड मैनेजमेंट"],
        "answer_en": "Asynchronous programming",
        "answer_hi": "असिंक्रोनस प्रोग्रामिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "How do you intentionally panic a program?",
        "question_hi": "प्रोग्राम को इंटेंशनली पैनिक कैसे कराते हैं?",
        "options_en": ["panic!()", "error!()", "crash!()", "fail!()"],
        "options_hi": ["panic!()", "error!()", "crash!()", "fail!()"],
        "answer_en": "panic!()",
        "answer_hi": "panic!()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is Rc<T> used for?",
        "question_hi": "Rc<T> का उपयोग किस लिए किया जाता है?",
        "options_en": ["Reference counting in single-threaded contexts", "Atomic operations", "Thread-safe reference counting", "Raw pointer management"],
        "options_hi": ["सिंगल-थ्रेडेड कॉन्टेक्स्ट में रिफरेन्स काउंटिंग", "एटॉमिक ऑपरेशन्स", "थ्रेड-सेफ रिफरेन्स काउंटिंग", "रॉ पॉइंटर मैनेजमेंट"],
        "answer_en": "Reference counting in single-threaded contexts",
        "answer_hi": "सिंगल-थ्रेडेड कॉन्टेक्स्ट में रिफरेन्स काउंटिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "How do you implement a trait for a struct?",
        "question_hi": "struct के लिए trait कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["impl Trait for Struct", "Struct implements Trait", "implement Trait for Struct", "trait impl Struct"],
        "options_hi": ["impl Trait for Struct", "Struct implements Trait", "implement Trait for Struct", "trait impl Struct"],
        "answer_en": "impl Trait for Struct",
        "answer_hi": "impl Trait for Struct",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is Arc<T> primarily used for?",
        "question_hi": "Arc<T> मुख्य रूप से किस लिए उपयोग किया जाता है?",
        "options_en": ["Atomic reference counting across threads", "Automatic memory management", "Array references", "Async programming"],
        "options_hi": ["थ्रेड्स के बीच एटॉमिक रिफरेन्स काउंटिंग", "ऑटोमैटिक मेमोरी मैनेजमेंट", "ऐरे रिफरेन्सेस", "Async प्रोग्रामिंग"],
        "answer_en": "Atomic reference counting across threads",
        "answer_hi": "थ्रेड्स के बीच एटॉमिक रिफरेन्स काउंटिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which trait is used for debug formatting?",
        "question_hi": "डीबग फॉर्मेटिंग के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["Debug", "Display", "Print", "Show"],
        "options_hi": ["Debug", "Display", "Print", "Show"],
        "answer_en": "Debug",
        "answer_hi": "Debug",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the purpose of Mutex?",
        "question_hi": "Mutex का उद्देश्य क्या है?",
        "options_en": ["Provide mutual exclusion for thread safety", "Memory protection", "File locking", "All of the above"],
        "options_hi": ["थ्रेड सेफ्टी के लिए म्यूचुअल एक्सक्लूजन प्रोवाइड करना", "मेमोरी प्रोटेक्शन", "फाइल लॉकिंग", "उपरोक्त सभी"],
        "answer_en": "Provide mutual exclusion for thread safety",
        "answer_hi": "थ्रेड सेफ्टी के लिए म्यूचुअल एक्सक्लूजन प्रोवाइड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How do you create a tuple with multiple types?",
        "question_hi": "मल्टीपल टाइप्स के साथ tuple कैसे बनाते हैं?",
        "options_en": ["(1, \"hello\", true)", "tuple(1, \"hello\", true)", "Tuple::new(1, \"hello\", true)", "new tuple(1, \"hello\", true)"],
        "options_hi": ["(1, \"hello\", true)", "tuple(1, \"hello\", true)", "Tuple::new(1, \"hello\", true)", "new tuple(1, \"hello\", true)"],
        "answer_en": "(1, \"hello\", true)",
        "answer_hi": "(1, \"hello\", true)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does the Drop trait allow you to do?",
        "question_hi": "Drop ट्रेट आपको क्या करने की अनुमति देता है?",
        "options_en": ["Run cleanup code when value goes out of scope", "Drop values manually", "Free memory explicitly", "All of the above"],
        "options_hi": ["वैल्यू के स्कोप से बाहर जाने पर क्लीनअप कोड रन करना", "वैल्यूज को मैन्युअली ड्रॉप करना", "एक्सप्लिसिटली मेमोरी फ्री करना", "उपरोक्त सभी"],
        "answer_en": "Run cleanup code when value goes out of scope",
        "answer_hi": "वैल्यू के स्कोप से बाहर जाने पर क्लीनअप कोड रन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "How do you get a substring from a string?",
        "question_hi": "स्ट्रिंग से सबस्ट्रिंग कैसे प्राप्त करते हैं?",
        "options_en": ["&s[start..end]", "s.substring(start, end)", "substring(s, start, end)", "s.get_substring(start, end)"],
        "options_hi": ["&s[start..end]", "s.substring(start, end)", "substring(s, start, end)", "s.get_substring(start, end)"],
        "answer_en": "&s[start..end]",
        "answer_hi": "&s[start..end]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is PhantomData used for in generics?",
        "question_hi": "जेनेरिक्स में PhantomData का उपयोग किस लिए किया जाता है?",
        "options_en": ["Mark unused type parameters", "Ghost data for compilation", "Type system tricks", "All of the above"],
        "options_hi": ["अनयूज्ड टाइप पैरामीटर्स को मार्क करना", "कंपाइलेशन के लिए घोस्ट डेटा", "टाइप सिस्टम ट्रिक्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "How do you create an inclusive range?",
        "question_hi": "इनक्लूसिव range कैसे बनाते हैं?",
        "options_en": ["0..=10", "0 to 10", "range(0, 10)", "0..10 inclusive"],
        "options_hi": ["0..=10", "0 to 10", "range(0, 10)", "0..10 inclusive"],
        "answer_en": "0..=10",
        "answer_hi": "0..=10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is Cell<T> used for?",
        "question_hi": "Cell<T> का उपयोग किस लिए किया जाता है?",
        "options_en": ["Interior mutability for Copy types", "Cell-based storage", "Memory cell management", "Data cell operations"],
        "options_hi": ["Copy टाइप्स के लिए इंटीरियर म्यूटेबिलिटी", "सेल-बेस्ड स्टोरेज", "मेमोरी सेल मैनेजमेंट", "डेटा सेल ऑपरेशन्स"],
        "answer_en": "Interior mutability for Copy types",
        "answer_hi": "Copy टाइप्स के लिए इंटीरियर म्यूटेबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which trait is required for types used as HashMap keys?",
        "question_hi": "HashMap keys के रूप में उपयोग किए जाने वाले टाइप्स के लिए किस ट्रेट की आवश्यकता होती है?",
        "options_en": ["Hash + Eq", "Hash + PartialEq", "Key", "Hashable"],
        "options_hi": ["Hash + Eq", "Hash + PartialEq", "Key", "Hashable"],
        "answer_en": "Hash + Eq",
        "answer_hi": "Hash + Eq",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is a crate in Rust terminology?",
        "question_hi": "Rust टर्मिनोलॉजी में crate क्या है?",
        "options_en": ["A package of Rust code", "Compilation unit", "Library or binary", "All of the above"],
        "options_hi": ["Rust कोड का पैकेज", "कंपाइलेशन यूनिट", "लाइब्रेरी या बाइनरी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What are the two floating-point types in Rust?",
        "question_hi": "Rust में दो फ्लोटिंग-पॉइंट टाइप्स क्या हैं?",
        "options_en": ["f32 and f64", "float and double", "only f32", "only f64"],
        "options_hi": ["f32 और f64", "float और double", "केवल f32", "केवल f64"],
        "answer_en": "f32 and f64",
        "answer_hi": "f32 और f64",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the never type represented by?",
        "question_hi": "never टाइप को किससे रिप्रेजेंट किया जाता है?",
        "options_en": ["!", "never", "None", "void"],
        "options_hi": ["!", "never", "None", "void"],
        "answer_en": "!",
        "answer_hi": "!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "How do you add an element to a vector?",
        "question_hi": "वेक्टर में एलिमेंट कैसे एड करते हैं?",
        "options_en": ["push()", "add()", "append()", "insert()"],
        "options_hi": ["push()", "add()", "append()", "insert()"],
        "answer_en": "push()",
        "answer_hi": "push()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What does the Send trait indicate?",
        "question_hi": "Send ट्रेट क्या इंगित करता है?",
        "options_en": ["Safe to transfer ownership between threads", "Safe to send over network", "Safe to copy", "Safe to reference"],
        "options_hi": ["थ्रेड्स के बीच ओनरशिप ट्रांसफर करने के लिए सेफ", "नेटवर्क पर भेजने के लिए सेफ", "कॉपी करने के लिए सेफ", "रिफरेन्स करने के लिए सेफ"],
        "answer_en": "Safe to transfer ownership between threads",
        "answer_hi": "थ्रेड्स के बीच ओनरशिप ट्रांसफर करने के लिए सेफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "How do you create a mutable raw pointer?",
        "question_hi": "म्यूटेबल रॉ पॉइंटर कैसे बनाते हैं?",
        "options_en": ["&mut value as *mut T", "raw_ptr_mut(value)", "mutable_pointer(value)", "Ptr::mut(value)"],
        "options_hi": ["&mut value as *mut T", "raw_ptr_mut(value)", "mutable_pointer(value)", "Ptr::mut(value)"],
        "answer_en": "&mut value as *mut T",
        "answer_hi": "&mut value as *mut T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What does the Sync trait indicate?",
        "question_hi": "Sync ट्रेट क्या इंगित करता है?",
        "options_en": ["Safe to share references between threads", "Safe to synchronize", "Safe to copy", "Safe to mutate"],
        "options_hi": ["थ्रेड्स के बीच रिफरेन्सेस शेयर करने के लिए सेफ", "सिंक्रोनाइज़ करने के लिए सेफ", "कॉपी करने के लिए सेफ", "म्यूटेट करने के लिए सेफ"],
        "answer_en": "Safe to share references between threads",
        "answer_hi": "थ्रेड्स के बीच रिफरेन्सेस शेयर करने के लिए सेफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What are common ways to handle Option values?",
        "question_hi": "Option वैल्यूज को हैंडल करने के सामान्य तरीके क्या हैं?",
        "options_en": ["match, if let, unwrap", "expect, unwrap_or", "map, and_then", "All of the above"],
        "options_hi": ["match, if let, unwrap", "expect, unwrap_or", "map, and_then", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is a const function?",
        "question_hi": "const फंक्शन क्या है?",
        "options_en": ["Function that can be evaluated at compile time", "Constant function declaration", "Both A and B", "Function that returns constant"],
        "options_hi": ["फंक्शन जिसे कंपाइल टाइम पर एवेलुएट किया जा सकता है", "कॉन्स्टेंट फंक्शन डिक्लेरेशन", "A और B दोनों", "फंक्शन जो कॉन्स्टेंट रिटर्न करता है"],
        "answer_en": "Function that can be evaluated at compile time",
        "answer_hi": "फंक्शन जिसे कंपाइल टाइम पर एवेलुएट किया जा सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "How can you perform network operations in Rust?",
        "question_hi": "Rust में नेटवर्क ऑपरेशन्स कैसे परफॉर्म कर सकते हैं?",
        "options_en": ["Using std::net module", "Using external crates like tokio", "Both A and B", "Rust doesn't support networking"],
        "options_hi": ["std::net मॉड्यूल का उपयोग करके", "tokio जैसे एक्सटर्नल क्रेट्स का उपयोग करके", "A और B दोनों", "Rust नेटवर्किंग सपोर्ट नहीं करता"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is turbofish syntax used for?",
        "question_hi": "टर्बोफिश सिंटैक्स का उपयोग किस लिए किया जाता है?",
        "options_en": ["Explicitly specifying generic types", "Function return types", "Match arms", "Type annotations"],
        "options_hi": ["जेनेरिक टाइप्स को एक्सप्लिसिटली स्पेसिफाई करना", "फंक्शन रिटर्न टाइप्स", "मैच आर्म्स", "टाइप एनोटेशन्स"],
        "answer_en": "Explicitly specifying generic types",
        "answer_hi": "जेनेरिक टाइप्स को एक्सप्लिसिटली स्पेसिफाई करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which traits are used for type conversion?",
        "question_hi": "टाइप कन्वर्जन के लिए कौन से ट्रेट्स उपयोग किए जाते हैं?",
        "options_en": ["From and Into", "Convert", "Transform", "Change"],
        "options_hi": ["From और Into", "Convert", "Transform", "Change"],
        "answer_en": "From and Into",
        "answer_hi": "From और Into",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is an associated type in a trait?",
        "question_hi": "ट्रेट में एसोसिएटेड टाइप क्या है?",
        "options_en": ["A type placeholder defined in trait", "Type alias in trait", "Generic type parameter", "Trait type parameter"],
        "options_hi": ["ट्रेट में डिफाइन किया गया टाइप प्लेसहोल्डर", "ट्रेट में टाइप एलियास", "जेनेरिक टाइप पैरामीटर", "ट्रेट टाइप पैरामीटर"],
        "answer_en": "A type placeholder defined in trait",
        "answer_hi": "ट्रेट में डिफाइन किया गया टाइप प्लेसहोल्डर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "How do you define a function pointer type?",
        "question_hi": "फंक्शन पॉइंटर टाइप कैसे डिफाइन करते हैं?",
        "options_en": ["fn(Params) -> ReturnType", "function pointer", "&fn", "FunctionPtr"],
        "options_hi": ["fn(Params) -> ReturnType", "function pointer", "&fn", "FunctionPtr"],
        "answer_en": "fn(Params) -> ReturnType",
        "answer_hi": "fn(Params) -> ReturnType",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the unit type used for?",
        "question_hi": "यूनिट टाइप का उपयोग किस लिए किया जाता है?",
        "options_en": ["Functions that return nothing", "Empty tuples", "Both A and B", "None values"],
        "options_hi": ["फंक्शन्स जो कुछ नहीं रिटर्न करतीं", "खाली tuples", "A और B दोनों", "None वैल्यूज"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "How can you combine multiple strings?",
        "question_hi": "मल्टीपल स्ट्रिंग्स को कैसे कॉम्बाइन कर सकते हैं?",
        "options_en": ["Using + operator", "Using format! macro", "Using push_str()", "All of the above"],
        "options_hi": ["+ ऑपरेटर का उपयोग करके", "format! मैक्रो का उपयोग करके", "push_str() का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is macro_rules! used for?",
        "question_hi": "macro_rules! का उपयोग किस लिए किया जाता है?",
        "options_en": ["Defining declarative macros", "Creating macro patterns", "Both A and B", "Defining procedural macros"],
        "options_hi": ["डिक्लेरेटिव मैक्रोस डिफाइन करना", "मैक्रो पैटर्न्स क्रिएट करना", "A और B दोनों", "प्रोसीजरल मैक्रोस डिफाइन करना"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "How do you work with JSON data in Rust?",
        "question_hi": "Rust में JSON डेटा के साथ कैसे काम करते हैं?",
        "options_en": ["Using serde library", "Using json crate", "Both A and B", "Using built-in JSON support"],
        "options_hi": ["serde लाइब्रेरी का उपयोग करके", "json क्रेट का उपयोग करके", "A और B दोनों", "बिल्ट-इन JSON सपोर्ट का उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What does 'zero-cost abstraction' mean in Rust?",
        "question_hi": "Rust में 'zero-cost abstraction' का क्या अर्थ है?",
        "options_en": ["No runtime overhead for using abstractions", "Abstractions are free", "Compile-time cost only", "All of the above"],
        "options_hi": ["एब्स्ट्रैक्शन्स उपयोग करने का कोई रनटाइम ओवरहेड नहीं", "एब्स्ट्रैक्शन्स फ्री हैं", "केवल कंपाइल-टाइम कॉस्ट", "उपरोक्त सभी"],
        "answer_en": "No runtime overhead for using abstractions",
        "answer_hi": "एब्स्ट्रैक्शन्स उपयोग करने का कोई रनटाइम ओवरहेड नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "How can main function handle errors?",
        "question_hi": "main फंक्शन एरर्स को कैसे हैंडल कर सकता है?",
        "options_en": ["Returning Result type", "Using panic!", "Using unwrap", "All of the above"],
        "options_hi": ["Result टाइप रिटर्न करके", "panic! उपयोग करके", "unwrap उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is Pin used for?",
        "question_hi": "Pin का उपयोग किस लिए किया जाता है?",
        "options_en": ["Preventing moves for self-referential types", "Memory pinning", "Both A and B", "Async function pinning"],
        "options_hi": ["सेल्फ-रेफरेंशियल टाइप्स के लिए मूव्स रोकना", "मेमोरी पिनिंग", "A और B दोनों", "Async फंक्शन पिनिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "How do you write a generic function?",
        "question_hi": "जेनेरिक फंक्शन कैसे लिखते हैं?",
        "options_en": ["fn name<T>(x: T) -> T", "generic fn name<T>()", "fn name<generic T>()", "function<T> name()"],
        "options_hi": ["fn name<T>(x: T) -> T", "generic fn name<T>()", "fn name<generic T>()", "function<T> name()"],
        "answer_en": "fn name<T>(x: T) -> T",
        "answer_hi": "fn name<T>(x: T) -> T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What makes a trait 'unsafe'?",
        "question_hi": "ट्रेट को 'unsafe' क्या बनाता है?",
        "options_en": ["Implementors must uphold certain invariants", "Trait contains unsafe methods", "Both A and B", "Trait can cause undefined behavior"],
        "options_hi": ["इम्प्लीमेंटर्स को कुछ इनवेरिएंट्स को मेंटेन रखना चाहिए", "ट्रेट में unsafe मेथड्स होती हैं", "A और B दोनों", "ट्रेट अनडिफाइंड बिहेवियर कॉज कर सकती है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "How do you allocate memory on the heap?",
        "question_hi": "हीप पर मेमोरी कैसे अलोकेट करते हैं?",
        "options_en": ["Box::new(value)", "alloc::heap::allocate()", "malloc() in unsafe block", "All of the above"],
        "options_hi": ["Box::new(value)", "alloc::heap::allocate()", "unsafe ब्लॉक में malloc()", "उपरोक्त सभी"],
        "answer_en": "Box::new(value)",
        "answer_hi": "Box::new(value)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What are non-lexical lifetimes (NLL)?",
        "question_hi": "नॉन-लेक्सिकल लाइफटाइम्स (NLL) क्या हैं?",
        "options_en": ["Improved borrow checker that understands scope better", "New lifetime syntax", "Removal of lifetime annotations", "Lifetime inference only"],
        "options_hi": ["इम्प्रूव्ड बोरो चेकर जो स्कोप को बेहतर समझता है", "न्यू लाइफटाइम सिंटैक्स", "लाइफटाइम एनोटेशन्स का रिमूवल", "केवल लाइफटाइम इन्फेरेंस"],
        "answer_en": "Improved borrow checker that understands scope better",
        "answer_hi": "इम्प्रूव्ड बोरो चेकर जो स्कोप को बेहतर समझता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "How can Rust code be compiled to WebAssembly?",
        "question_hi": "Rust कोड को WebAssembly में कैसे कंपाइल किया जा सकता है?",
        "options_en": ["Using wasm32 target", "Using wasm-bindgen", "Both A and B", "Rust doesn't support WASM"],
        "options_hi": ["wasm32 टारगेट का उपयोग करके", "wasm-bindgen का उपयोग करके", "A और B दोनों", "Rust WASM सपोर्ट नहीं करता"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What are const generics?",
        "question_hi": "कॉन्स्ट जेनेरिक्स क्या हैं?",
        "options_en": ["Generic parameters that are constant values", "Constant generic functions", "Generic constants", "All of the above"],
        "options_hi": ["जेनेरिक पैरामीटर्स जो कॉन्स्टेंट वैल्यूज हैं", "कॉन्स्टेंट जेनेरिक फंक्शन्स", "जेनेरिक कॉन्स्टेंट्स", "उपरोक्त सभी"],
        "answer_en": "Generic parameters that are constant values",
        "answer_hi": "जेनेरिक पैरामीटर्स जो कॉन्स्टेंट वैल्यूज हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "How do you define an asynchronous function?",
        "question_hi": "असिंक्रोनस फंक्शन कैसे डिफाइन करते हैं?",
        "options_en": ["async fn name()", "fn async name()", "await fn name()", "future fn name()"],
        "options_hi": ["async fn name()", "fn async name()", "await fn name()", "future fn name()"],
        "answer_en": "async fn name()",
        "answer_hi": "async fn name()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the tokio crate used for?",
        "question_hi": "tokio क्रेट का उपयोग किस लिए किया जाता है?",
        "options_en": ["Asynchronous runtime", "Network programming", "Both A and B", "Synchronous I/O"],
        "options_hi": ["असिंक्रोनस रनटाइम", "नेटवर्क प्रोग्रामिंग", "A और B दोनों", "सिंक्रोनस I/O"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "How do you create a trait object from a value?",
        "question_hi": "वैल्यू से ट्रेट ऑब्जेक्ट कैसे बनाते हैं?",
        "options_en": ["&value as &dyn Trait", "dyn Trait::from(value)", "Trait::from(value)", "value.as_trait()"],
        "options_hi": ["&value as &dyn Trait", "dyn Trait::from(value)", "Trait::from(value)", "value.as_trait()"],
        "answer_en": "&value as &dyn Trait",
        "answer_hi": "&value as &dyn Trait",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the no_std environment?",
        "question_hi": "no_std एनवायरनमेंट क्या है?",
        "options_en": ["Rust without standard library", "For embedded systems", "Both A and B", "For web development"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी के बिना Rust", "एम्बेडेड सिस्टम्स के लिए", "A और B दोनों", "वेब डेवलपमेंट के लिए"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "How do you efficiently copy memory between slices?",
        "question_hi": "स्लाइस के बीच मेमोरी को एफिशिएंटली कैसे कॉपी करते हैं?",
        "options_en": ["copy_from_slice()", "memcpy()", "clone()", "copy()"],
        "options_hi": ["copy_from_slice()", "memcpy()", "clone()", "copy()"],
        "answer_en": "copy_from_slice()",
        "answer_hi": "copy_from_slice()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the Rustonomicon?",
        "question_hi": "Rustonomicon क्या है?",
        "options_en": ["The Unstable Rust Book", "Guide to unsafe Rust", "Both A and B", "Rust reference manual"],
        "options_hi": ["द अनस्टेबल Rust बुक", "अनसेफ Rust की गाइड", "A और B दोनों", "Rust रिफरेन्स मैनुअल"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "How can SIMD be used in Rust?",
        "question_hi": "Rust में SIMD का उपयोग कैसे किया जा सकता है?",
        "options_en": ["Using std::simd", "Using architecture-specific intrinsics", "Both A and B", "Rust doesn't support SIMD"],
        "options_hi": ["std::simd का उपयोग करके", "आर्किटेक्चर-स्पेसिफिक इंट्रिंसिक्स का उपयोग करके", "A और B दोनों", "Rust SIMD सपोर्ट नहीं करता"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What does FFI stand for?",
        "question_hi": "FFI का क्या अर्थ है?",
        "options_en": ["Foreign Function Interface", "Function Foreign Interface", "Fast Function Interface", "File Function Interface"],
        "options_hi": ["फॉरेन फंक्शन इंटरफेस", "फंक्शन फॉरेन इंटरफेस", "फास्ट फंक्शन इंटरफेस", "फाइल फंक्शन इंटरफेस"],
        "answer_en": "Foreign Function Interface",
        "answer_hi": "फॉरेन फंक्शन इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "How do you perform bit manipulation?",
        "question_hi": "बिट मैनिपुलेशन कैसे परफॉर्म करते हैं?",
        "options_en": ["Using bitwise operators", "Using bitvec crate", "Both A and B", "Using bit manipulation functions"],
        "options_hi": ["बिटवाइज ऑपरेटर्स का उपयोग करके", "bitvec क्रेट का उपयोग करके", "A और B दोनों", "बिट मैनिपुलेशन फंक्शन्स का उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the purpose of cargo fmt?",
        "question_hi": "cargo fmt का उद्देश्य क्या है?",
        "options_en": ["Format Rust code according to style guidelines", "Format Cargo.toml files", "Format documentation", "All of the above"],
        "options_hi": ["स्टाइल गाइडलाइन्स के अनुसार Rust कोड फॉर्मेट करना", "Cargo.toml फाइल्स फॉर्मेट करना", "डॉक्यूमेंटेशन फॉर्मेट करना", "उपरोक्त सभी"],
        "answer_en": "Format Rust code according to style guidelines",
        "answer_hi": "स्टाइल गाइडलाइन्स के अनुसार Rust कोड फॉर्मेट करना",
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