const questions = [
    {
        "num": 1,
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
        "num": 2,
        "question_en": "Which keyword makes a variable mutable in Rust?",
        "question_hi": "Rust में कौन सा कीवर्ड वेरिएबल को म्यूटेबल बनाता है?",
        "options_en": ["mut", "var", "mutable", "changeable"],
        "options_hi": ["mut", "var", "mutable", "changeable"],
        "answer_en": "mut",
        "answer_hi": "mut",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What does Cargo primarily manage in Rust projects?",
        "question_hi": "Rust प्रोजेक्ट्स में Cargo मुख्य रूप से क्या मैनेज करता है?",
        "options_en": ["Dependencies and builds", "Code formatting", "Documentation", "Testing"],
        "options_hi": ["डिपेंडेंसीज और बिल्ड्स", "कोड फॉर्मेटिंग", "डॉक्यूमेंटेशन", "टेस्टिंग"],
        "answer_en": "Dependencies and builds",
        "answer_hi": "डिपेंडेंसीज और बिल्ड्स",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 4,
        "question_en": "What is the main purpose of Rust's ownership system?",
        "question_hi": "Rust के ownership सिस्टम का मुख्य उद्देश्य क्या है?",
        "options_en": ["Memory safety without garbage collection", "Faster compilation", "Automatic memory management", "Simpler syntax"],
        "options_hi": ["गार्बेज कलेक्शन के बिना मेमोरी सेफ्टी", "तेज कंपाइलेशन", "ऑटोमैटिक मेमोरी मैनेजमेंट", "सरल सिंटैक्स"],
        "answer_en": "Memory safety without garbage collection",
        "answer_hi": "गार्बेज कलेक्शन के बिना मेमोरी सेफ्टी",
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
        "question_en": "What is the primary use of pattern matching in Rust?",
        "question_hi": "Rust में पैटर्न मैचिंग का प्राथमिक उपयोग क्या है?",
        "options_en": ["Deconstructing values and control flow", "String pattern searching", "Memory optimization", "Code analysis"],
        "options_hi": ["वैल्यूज को डीकंस्ट्रक्ट करना और कंट्रोल फ्लो", "स्ट्रिंग पैटर्न सर्चिंग", "मेमोरी ऑप्टिमाइज़ेशन", "कोड एनालिसिस"],
        "answer_en": "Deconstructing values and control flow",
        "answer_hi": "वैल्यूज को डीकंस्ट्रक्ट करना और कंट्रोल फ्लो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which enum is used for operations that can fail?",
        "question_hi": "कौन सा enum फेल हो सकने वाले ऑपरेशन्स के लिए उपयोग किया जाता है?",
        "options_en": ["Result", "Option", "Either", "Maybe"],
        "options_hi": ["Result", "Option", "Either", "Maybe"],
        "answer_en": "Result",
        "answer_hi": "Result",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does RAII stand for in Rust context?",
        "question_hi": "Rust कॉन्टेक्स्ट में RAII का क्या अर्थ है?",
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
        "options_en": ["const", "static", "let", "final"],
        "options_hi": ["const", "static", "let", "final"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What happens when unwrap() is called on a None value?",
        "question_hi": "None वैल्यू पर unwrap() कॉल करने पर क्या होता है?",
        "options_en": ["Program panics", "Returns default value", "Returns None", "Silently continues"],
        "options_hi": ["प्रोग्राम पैनिक करता है", "डिफॉल्ट वैल्यू रिटर्न करता है", "None रिटर्न करता है", "साइलेंटली कंटिन्यू करता है"],
        "answer_en": "Program panics",
        "answer_hi": "प्रोग्राम पैनिक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which macro is used for formatted printing?",
        "question_hi": "फॉर्मेटेड प्रिंटिंग के लिए किस मैक्रो का उपयोग किया जाता है?",
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
        "options_en": ["A collection of method signatures", "A data type", "A module", "A function"],
        "options_hi": ["मेथड सिग्नेचर्स का कलेक्शन", "एक डेटा टाइप", "एक मॉड्यूल", "एक फंक्शन"],
        "answer_en": "A collection of method signatures",
        "answer_hi": "मेथड सिग्नेचर्स का कलेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What does the ? operator do in error handling?",
        "question_hi": "एरर हैंडलिंग में ? ऑपरेटर क्या करता है?",
        "options_en": ["Returns early on error", "Converts error types", "Logs the error", "Ignores the error"],
        "options_hi": ["एरर पर अर्ली रिटर्न करता है", "एरर टाइप्स कन्वर्ट करता है", "एरर को लॉग करता है", "एरर को इग्नोर करता है"],
        "answer_en": "Returns early on error",
        "answer_hi": "एरर पर अर्ली रिटर्न करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is Box<T> primarily used for?",
        "question_hi": "Box<T> मुख्य रूप से किस लिए उपयोग किया जाता है?",
        "options_en": ["Heap allocation", "Stack allocation", "Thread safety", "Memory mapping"],
        "options_hi": ["हीप अलोकेशन", "स्टैक अलोकेशन", "थ्रेड सेफ्टी", "मेमोरी मैपिंग"],
        "answer_en": "Heap allocation",
        "answer_hi": "हीप अलोकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which keyword defines a function in Rust?",
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
        "question_en": "What is the key difference between String and &str?",
        "question_hi": "String और &str में मुख्य अंतर क्या है?",
        "options_en": ["String is owned, &str is borrowed", "String is mutable, &str is immutable", "Both A and B", "No significant difference"],
        "options_hi": ["String ओन्ड है, &str बोरोड है", "String म्यूटेबल है, &str इम्म्यूटेबल है", "A और B दोनों", "कोई महत्वपूर्ण अंतर नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "How do you create a vector with initial capacity?",
        "question_hi": "इनिशियल कैपेसिटी के साथ वेक्टर कैसे बनाते हैं?",
        "options_en": ["Vec::with_capacity()", "Vector::new_with_capacity()", "new Vec(capacity)", "vec![; capacity]"],
        "options_hi": ["Vec::with_capacity()", "Vector::new_with_capacity()", "new Vec(capacity)", "vec![; capacity]"],
        "answer_en": "Vec::with_capacity()",
        "answer_hi": "Vec::with_capacity()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does #[derive(Debug)] automatically provide?",
        "question_hi": "#[derive(Debug)] ऑटोमैटिकली क्या प्रोवाइड करता है?",
        "options_en": ["Debug trait implementation", "Debugging capabilities", "Print formatting", "All of the above"],
        "options_hi": ["Debug ट्रेट इम्प्लीमेंटेशन", "डीबगिंग कैपेबिलिटीज", "प्रिंट फॉर्मेटिंग", "उपरोक्त सभी"],
        "answer_en": "Debug trait implementation",
        "answer_hi": "Debug ट्रेट इम्प्लीमेंटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which trait allows creating a deep copy?",
        "question_hi": "कौन सा ट्रेट डीप कॉपी बनाने की अनुमति देता है?",
        "options_en": ["Clone", "Copy", "DeepCopy", "Duplicate"],
        "options_hi": ["Clone", "Copy", "DeepCopy", "Duplicate"],
        "answer_en": "Clone",
        "answer_hi": "Clone",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What does the 'move' keyword do in closures?",
        "question_hi": "क्लोजर्स में 'move' कीवर्ड क्या करता है?",
        "options_en": ["Takes ownership of captured variables", "Moves the closure itself", "Makes closure mutable", "Copies variables"],
        "options_hi": ["कैप्चर्ड वेरिएबल्स की ओनरशिप लेता है", "क्लोजर को खुद मूव करता है", "क्लोजर को म्यूटेबल बनाता है", "वेरिएबल्स को कॉपी करता है"],
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
        "question_en": "What is the purpose of lifetime annotations?",
        "question_hi": "लाइफटाइम एनोटेशन्स का उद्देश्य क्या है?",
        "options_en": ["Ensure reference validity", "Manage memory allocation", "Control thread lifetime", "All of the above"],
        "options_hi": ["रिफरेन्स वैलिडिटी सुनिश्चित करना", "मेमोरी अलोकेशन मैनेज करना", "थ्रेड लाइफटाइम कंट्रोल करना", "उपरोक्त सभी"],
        "answer_en": "Ensure reference validity",
        "answer_hi": "रिफरेन्स वैलिडिटी सुनिश्चित करना",
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
        "question_en": "What is the main purpose of impl blocks?",
        "question_hi": "impl ब्लॉक्स का मुख्य उद्देश्य क्या है?",
        "options_en": ["Implement methods for types", "Define traits", "Import modules", "All of the above"],
        "options_hi": ["टाइप्स के लिए मेथड्स इम्प्लीमेंट करना", "ट्रेट्स डिफाइन करना", "मॉड्यूल्स इम्पोर्ट करना", "उपरोक्त सभी"],
        "answer_en": "Implement methods for types",
        "answer_hi": "टाइप्स के लिए मेथड्स इम्प्लीमेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "How do you wait for a thread to complete?",
        "question_hi": "थ्रेड के कम्पलीट होने का इंतज़ार कैसे करते हैं?",
        "options_en": ["join() method", "wait() method", "await keyword", "finish() method"],
        "options_hi": ["join() मेथड", "wait() मेथड", "await कीवर्ड", "finish() मेथड"],
        "answer_en": "join() method",
        "answer_hi": "join() मेथड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is pattern destructuring used for?",
        "question_hi": "पैटर्न डीस्ट्रक्चरिंग किस लिए उपयोग की जाती है?",
        "options_en": ["Extracting values from complex types", "Memory deallocation", "Variable destruction", "Code optimization"],
        "options_hi": ["कॉम्प्लेक्स टाइप्स से वैल्यूज एक्सट्रैक्ट करना", "मेमोरी डीलोकेशन", "वेरिएबल डिस्ट्रक्शन", "कोड ऑप्टिमाइज़ेशन"],
        "answer_en": "Extracting values from complex types",
        "answer_hi": "कॉम्प्लेक्स टाइप्स से वैल्यूज एक्सट्रैक्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which trait is used for string conversion?",
        "question_hi": "स्ट्रिंग कन्वर्जन के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["ToString", "FromStr", "Both A and B", "Stringify"],
        "options_hi": ["ToString", "FromStr", "A और B दोनों", "Stringify"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is variable shadowing in Rust?",
        "question_hi": "Rust में वेरिएबल शैडोइंग क्या है?",
        "options_en": ["Declaring a new variable with same name", "Hiding variables from outer scope", "Memory optimization technique", "Thread safety feature"],
        "options_hi": ["समान नाम से नया वेरिएबल डिक्लेयर करना", "आउटर स्कोप से वेरिएबल्स हाइड करना", "मेमोरी ऑप्टिमाइज़ेशन टेक्निक", "थ्रेड सेफ्टी फीचर"],
        "answer_en": "Declaring a new variable with same name",
        "answer_hi": "समान नाम से नया वेरिएबल डिक्लेयर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How do you represent optional values in Rust?",
        "question_hi": "Rust में ऑप्शनल वैल्यूज को कैसे रिप्रेजेंट करते हैं?",
        "options_en": ["Option<T>", "Optional<T>", "Maybe<T>", "Nullable<T>"],
        "options_hi": ["Option<T>", "Optional<T>", "Maybe<T>", "Nullable<T>"],
        "answer_en": "Option<T>",
        "answer_hi": "Option<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What does the 'dyn' keyword indicate?",
        "question_hi": "'dyn' कीवर्ड क्या इंगित करता है?",
        "options_en": ["Dynamic dispatch", "Dynamic allocation", "Dynamic typing", "Dynamic linking"],
        "options_hi": ["डायनामिक डिस्पैच", "डायनामिक अलोकेशन", "डायनामिक टाइपिंग", "डायनामिक लिंकिंग"],
        "answer_en": "Dynamic dispatch",
        "answer_hi": "डायनामिक डिस्पैच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "How do you iterate over a collection with index?",
        "question_hi": "इंडेक्स के साथ कलेक्शन पर कैसे इटरेट करते हैं?",
        "options_en": ["iter().enumerate()", "for i in 0..collection.len()", "Both A and B", "collection.indexed_iter()"],
        "options_hi": ["iter().enumerate()", "for i in 0..collection.len()", "A और B दोनों", "collection.indexed_iter()"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "When is unsafe code necessary?",
        "question_hi": "अनसेफ कोड कब आवश्यक है?",
        "options_en": ["FFI calls", "Raw pointer manipulation", "Inline assembly", "All of the above"],
        "options_hi": ["FFI कॉल्स", "रॉ पॉइंटर मैनिपुलेशन", "इनलाइन असेंबली", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
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
        "question_en": "What is the borrow checker's role?",
        "question_hi": "बोरो चेकर की क्या भूमिका है?",
        "options_en": ["Ensure memory safety through reference rules", "Check code style", "Optimize performance", "Manage dependencies"],
        "options_hi": ["रिफरेन्स रूल्स के माध्यम से मेमोरी सेफ्टी सुनिश्चित करना", "कोड स्टाइल चेक करना", "परफॉर्मेंस ऑप्टिमाइज़ करना", "डिपेंडेंसीज मैनेज करना"],
        "answer_en": "Ensure memory safety through reference rules",
        "answer_hi": "रिफरेन्स रूल्स के माध्यम से मेमोरी सेफ्टी सुनिश्चित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How do you read a file as a string?",
        "question_hi": "फाइल को स्ट्रिंग के रूप में कैसे पढ़ते हैं?",
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
        "options_en": ["Additional metadata and semantics", "Automatic memory management", "Thread safety", "All of the above"],
        "options_hi": ["एडिशनल मेटाडेटा और सेमेंटिक्स", "ऑटोमैटिक मेमोरी मैनेजमेंट", "थ्रेड सेफ्टी", "उपरोक्त सभी"],
        "answer_en": "Additional metadata and semantics",
        "answer_hi": "एडिशनल मेटाडेटा और सेमेंटिक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which macro creates a formatted string?",
        "question_hi": "कौन सा मैक्रो फॉर्मेटेड स्ट्रिंग बनाता है?",
        "options_en": ["format!", "fmt!", "create_string!", "string!"],
        "options_hi": ["format!", "fmt!", "create_string!", "string!"],
        "answer_en": "format!",
        "answer_hi": "format!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What does 'Self' represent in trait implementations?",
        "question_hi": "ट्रेट इम्प्लीमेंटेशन्स में 'Self' क्या रिप्रेजेंट करता है?",
        "options_en": ["The implementing type", "The trait itself", "Self reference", "Static context"],
        "options_hi": ["इम्प्लीमेंटिंग टाइप", "ट्रेट खुद", "सेल्फ रिफरेन्स", "स्टैटिक कॉन्टेक्स्ट"],
        "answer_en": "The implementing type",
        "answer_hi": "इम्प्लीमेंटिंग टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How do you define a static variable?",
        "question_hi": "स्टैटिक वेरिएबल कैसे डिफाइन करते हैं?",
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
        "options_en": ["Sequential access to elements", "Loop construction", "Collection creation", "All of the above"],
        "options_hi": ["एलिमेंट्स तक सीक्वेंशियल एक्सेस", "लूप कंस्ट्रक्शन", "कलेक्शन क्रिएशन", "उपरोक्त सभी"],
        "answer_en": "Sequential access to elements",
        "answer_hi": "एलिमेंट्स तक सीक्वेंशियल एक्सेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the primary purpose of the ? operator?",
        "question_hi": "? ऑपरेटर का प्राथमिक उद्देश्य क्या है?",
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
        "options_en": ["Inter-thread communication", "Network communication", "File I/O", "Process communication"],
        "options_hi": ["इंटर-थ्रेड कम्युनिकेशन", "नेटवर्क कम्युनिकेशन", "फाइल I/O", "प्रोसेस कम्युनिकेशन"],
        "answer_en": "Inter-thread communication",
        "answer_hi": "इंटर-थ्रेड कम्युनिकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How do you define a struct with named fields?",
        "question_hi": "नामित फील्ड्स के साथ struct कैसे डिफाइन करते हैं?",
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
        "options_en": ["A type with multiple variants", "Enumerator for loops", "List of values", "Number sequence"],
        "options_hi": ["मल्टीपल वेरिएंट्स वाला टाइप", "लूप्स के लिए एन्युमरेटर", "वैल्यूज की लिस्ट", "नंबर सीक्वेंस"],
        "answer_en": "A type with multiple variants",
        "answer_hi": "मल्टीपल वेरिएंट्स वाला टाइप",
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
        "question_en": "What is async/await primarily used for?",
        "question_hi": "async/await मुख्य रूप से किस लिए उपयोग किया जाता है?",
        "options_en": ["Asynchronous programming", "Synchronous operations", "Parallel execution", "Thread management"],
        "options_hi": ["असिंक्रोनस प्रोग्रामिंग", "सिंक्रोनस ऑपरेशन्स", "पैरेलल एक्जीक्यूशन", "थ्रेड मैनेजमेंट"],
        "answer_en": "Asynchronous programming",
        "answer_hi": "असिंक्रोनस प्रोग्रामिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "How do you intentionally cause a panic?",
        "question_hi": "इंटेंशनली पैनिक कैसे कराते हैं?",
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
        "question_en": "Which trait is used for debug output?",
        "question_hi": "डीबग आउटपुट के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["Debug", "Display", "Print", "Show"],
        "options_hi": ["Debug", "Display", "Print", "Show"],
        "answer_en": "Debug",
        "answer_hi": "Debug",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is a Mutex used for?",
        "question_hi": "Mutex का उपयोग किस लिए किया जाता है?",
        "options_en": ["Mutual exclusion for thread safety", "Memory protection", "File locking", "All of the above"],
        "options_hi": ["थ्रेड सेफ्टी के लिए म्यूचुअल एक्सक्लूजन", "मेमोरी प्रोटेक्शन", "फाइल लॉकिंग", "उपरोक्त सभी"],
        "answer_en": "Mutual exclusion for thread safety",
        "answer_hi": "थ्रेड सेफ्टी के लिए म्यूचुअल एक्सक्लूजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How do you create a tuple?",
        "question_hi": "tuple कैसे बनाते हैं?",
        "options_en": ["(value1, value2)", "tuple(value1, value2)", "Tuple::new(value1, value2)", "new tuple(value1, value2)"],
        "options_hi": ["(value1, value2)", "tuple(value1, value2)", "Tuple::new(value1, value2)", "new tuple(value1, value2)"],
        "answer_en": "(value1, value2)",
        "answer_hi": "(value1, value2)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does the Drop trait allow?",
        "question_hi": "Drop ट्रेट क्या अनुमति देता है?",
        "options_en": ["Custom cleanup when value goes out of scope", "Automatic memory deallocation", "Both A and B", "Manual resource management"],
        "options_hi": ["वैल्यू के स्कोप से बाहर जाने पर कस्टम क्लीनअप", "ऑटोमैटिक मेमोरी डीलोकेशन", "A और B दोनों", "मैन्युअल रिसोर्स मैनेजमेंट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
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
        "question_en": "What is PhantomData used for?",
        "question_hi": "PhantomData का उपयोग किस लिए किया जाता है?",
        "options_en": ["Marking unused type parameters", "Ghost data for compilation", "Type system tricks", "All of the above"],
        "options_hi": ["अनयूज्ड टाइप पैरामीटर्स को मार्क करना", "कंपाइलेशन के लिए घोस्ट डेटा", "टाइप सिस्टम ट्रिक्स", "उपरोक्त सभी"],
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
        "options_en": ["Interior mutability for Copy types", "Cell-based storage", "Memory cells", "Data storage"],
        "options_hi": ["Copy टाइप्स के लिए इंटीरियर म्यूटेबिलिटी", "सेल-बेस्ड स्टोरेज", "मेमोरी सेल्स", "डेटा स्टोरेज"],
        "answer_en": "Interior mutability for Copy types",
        "answer_hi": "Copy टाइप्स के लिए इंटीरियर म्यूटेबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which trait is required for hashing?",
        "question_hi": "हैशिंग के लिए किस ट्रेट की आवश्यकता होती है?",
        "options_en": ["Hash", "Hasher", "Digest", "Hashing"],
        "options_hi": ["Hash", "Hasher", "Digest", "Hashing"],
        "answer_en": "Hash",
        "answer_hi": "Hash",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is a crate in Rust?",
        "question_hi": "Rust में crate क्या है?",
        "options_en": ["A compilation unit", "A package", "A library", "All of the above"],
        "options_hi": ["एक कंपाइलेशन यूनिट", "एक पैकेज", "एक लाइब्रेरी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What are the floating-point types in Rust?",
        "question_hi": "Rust में फ्लोटिंग-पॉइंट टाइप्स क्या हैं?",
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
        "question_en": "How do you add elements to a vector?",
        "question_hi": "वेक्टर में एलिमेंट्स कैसे एड करते हैं?",
        "options_en": ["push() method", "add() method", "append() method", "insert() method"],
        "options_hi": ["push() मेथड", "add() मेथड", "append() मेथड", "insert() मेथड"],
        "answer_en": "push() method",
        "answer_hi": "push() मेथड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What does the Send trait indicate?",
        "question_hi": "Send ट्रेट क्या इंगित करता है?",
        "options_en": ["Safe to transfer between threads", "Safe to send over network", "Safe to copy", "Safe to reference"],
        "options_hi": ["थ्रेड्स के बीच ट्रांसफर करने के लिए सेफ", "नेटवर्क पर भेजने के लिए सेफ", "कॉपी करने के लिए सेफ", "रिफरेन्स करने के लिए सेफ"],
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
        "question_en": "What does the Sync trait guarantee?",
        "question_hi": "Sync ट्रेट क्या गारंटी देता है?",
        "options_en": ["Safe to share references between threads", "Safe to synchronize", "Safe to copy", "Safe to mutate"],
        "options_hi": ["थ्रेड्स के बीच रिफरेन्सेस शेयर करने के लिए सेफ", "सिंक्रोनाइज़ करने के लिए सेफ", "कॉपी करने के लिए सेफ", "म्यूटेट करने के लिए सेफ"],
        "answer_en": "Safe to share references between threads",
        "answer_hi": "थ्रेड्स के बीच रिफरेन्सेस शेयर करने के लिए सेफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "How do you handle Option values safely?",
        "question_hi": "Option वैल्यूज को सेफली कैसे हैंडल करते हैं?",
        "options_en": ["match expression", "if let syntax", "unwrap_or()", "All of the above"],
        "options_hi": ["match एक्सप्रेशन", "if let सिंटैक्स", "unwrap_or()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is a const function?",
        "question_hi": "const फंक्शन क्या है?",
        "options_en": ["Function evaluable at compile time", "Constant function", "Both A and B", "Function that returns constant"],
        "options_hi": ["कंपाइल टाइम पर एवेलुएबल फंक्शन", "कॉन्स्टेंट फंक्शन", "A और B दोनों", "फंक्शन जो कॉन्स्टेंट रिटर्न करता है"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "How do you perform network operations?",
        "question_hi": "नेटवर्क ऑपरेशन्स कैसे परफॉर्म करते हैं?",
        "options_en": ["Using std::net module", "Using external crates", "Both A and B", "Rust doesn't support networking"],
        "options_hi": ["std::net मॉड्यूल का उपयोग करके", "एक्सटर्नल क्रेट्स का उपयोग करके", "A और B दोनों", "Rust नेटवर्किंग सपोर्ट नहीं करता"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is turbofish syntax?",
        "question_hi": "टर्बोफिश सिंटैक्स क्या है?",
        "options_en": ["::<> for specifying generic types", "Function return type syntax", "Match arm syntax", "Type annotation syntax"],
        "options_hi": ["जेनेरिक टाइप्स स्पेसिफाई करने के लिए ::<>", "फंक्शन रिटर्न टाइप सिंटैक्स", "मैच आर्म सिंटैक्स", "टाइप एनोटेशन सिंटैक्स"],
        "answer_en": "::<> for specifying generic types",
        "answer_hi": "जेनेरिक टाइप्स स्पेसिफाई करने के लिए ::<>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which traits are used for type conversion?",
        "question_hi": "टाइप कन्वर्जन के लिए कौन से ट्रेट्स उपयोग किए जाते हैं?",
        "options_en": ["From and Into", "AsRef and AsMut", "Both A and B", "Convert and Transform"],
        "options_hi": ["From और Into", "AsRef और AsMut", "A और B दोनों", "Convert और Transform"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is an associated type?",
        "question_hi": "एसोसिएटेड टाइप क्या है?",
        "options_en": ["Type placeholder in a trait", "Type alias in implementation", "Both A and B", "Generic type parameter"],
        "options_hi": ["ट्रेट में टाइप प्लेसहोल्डर", "इम्प्लीमेंटेशन में टाइप एलियास", "A और B दोनों", "जेनेरिक टाइप पैरामीटर"],
        "answer_en": "Type placeholder in a trait",
        "answer_hi": "ट्रेट में टाइप प्लेसहोल्डर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "How do you define a function pointer?",
        "question_hi": "फंक्शन पॉइंटर कैसे डिफाइन करते हैं?",
        "options_en": ["fn pointer type", "function pointer", "Both A and B", "&fn"],
        "options_hi": ["fn पॉइंटर टाइप", "फंक्शन पॉइंटर", "A और B दोनों", "&fn"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
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
        "question_en": "How do you concatenate strings?",
        "question_hi": "स्ट्रिंग्स को कैसे कॉन्कटीनेट करते हैं?",
        "options_en": ["+ operator", "format! macro", "push_str() method", "All of the above"],
        "options_hi": ["+ ऑपरेटर", "format! मैक्रो", "push_str() मेथड", "उपरोक्त सभी"],
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
        "question_en": "How do you handle JSON data?",
        "question_hi": "JSON डेटा को कैसे हैंडल करते हैं?",
        "options_en": ["Using serde crate", "Using json crate", "Both A and B", "Using built-in JSON support"],
        "options_hi": ["serde क्रेट का उपयोग करके", "json क्रेट का उपयोग करके", "A और B दोनों", "बिल्ट-इन JSON सपोर्ट का उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What does 'zero-cost abstraction' mean?",
        "question_hi": "'zero-cost abstraction' का क्या अर्थ है?",
        "options_en": ["No runtime overhead for abstractions", "Compile-time optimization", "Both A and B", "Free abstractions"],
        "options_hi": ["एब्स्ट्रैक्शन्स के लिए कोई रनटाइम ओवरहेड नहीं", "कंपाइल-टाइम ऑप्टिमाइज़ेशन", "A और B दोनों", "फ्री एब्स्ट्रैक्शन्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "How can main function handle errors?",
        "question_hi": "main फंक्शन एरर्स को कैसे हैंडल कर सकता है?",
        "options_en": ["Returning Result type", "Using ? operator", "Both A and B", "Using panic!"],
        "options_hi": ["Result टाइप रिटर्न करके", "? ऑपरेटर का उपयोग करके", "A और B दोनों", "panic! का उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is Pin used for?",
        "question_hi": "Pin का उपयोग किस लिए किया जाता है?",
        "options_en": ["Self-referential structs", "Memory pinning", "Async guarantees", "All of the above"],
        "options_hi": ["सेल्फ-रेफरेंशियल स्ट्रक्चर्स", "मेमोरी पिनिंग", "Async गारंटी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "How do you write generic functions?",
        "question_hi": "जेनेरिक फंक्शन्स कैसे लिखते हैं?",
        "options_en": ["fn name<T>(param: T) -> T", "generic fn name<T>()", "fn name<generic T>()", "function<T> name()"],
        "options_hi": ["fn name<T>(param: T) -> T", "generic fn name<T>()", "fn name<generic T>()", "function<T> name()"],
        "answer_en": "fn name<T>(param: T) -> T",
        "answer_hi": "fn name<T>(param: T) -> T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What makes a trait unsafe?",
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
        "question_en": "How do you allocate memory on the heap?",
        "question_hi": "हीप पर मेमोरी कैसे अलोकेट करते हैं?",
        "options_en": ["Box::new()", "Vec::new()", "Both A and B", "malloc equivalent"],
        "options_hi": ["Box::new()", "Vec::new()", "A और B दोनों", "malloc इक्विवेलेंट"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What improved with non-lexical lifetimes?",
        "question_hi": "नॉन-लेक्सिकल लाइफटाइम्स से क्या सुधार हुआ?",
        "options_en": ["Borrow checker precision", "Lifetime inference", "Both A and B", "Compile times"],
        "options_hi": ["बोरो चेकर प्रिसिजन", "लाइफटाइम इन्फेरेंस", "A और B दोनों", "कंपाइल टाइम्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "How do you target WebAssembly?",
        "question_hi": "WebAssembly को कैसे टारगेट करते हैं?",
        "options_en": ["wasm32-unknown-unknown target", "wasm-bindgen", "Both A and B", "emscripten"],
        "options_hi": ["wasm32-unknown-unknown टारगेट", "wasm-bindgen", "A और B दोनों", "emscripten"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What are const generics?",
        "question_hi": "कॉन्स्ट जेनेरिक्स क्या हैं?",
        "options_en": ["Generic parameters that are constants", "Compile-time values in generics", "Both A and B", "Constant types"],
        "options_hi": ["कॉन्स्टेंट्स वाले जेनेरिक पैरामीटर्स", "जेनेरिक्स में कंपाइल-टाइम वैल्यूज", "A और B दोनों", "कॉन्स्टेंट टाइप्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "How do you define async functions?",
        "question_hi": "async फंक्शन्स कैसे डिफाइन करते हैं?",
        "options_en": ["async fn name()", "fn async name()", "await fn name()", "future fn name()"],
        "options_hi": ["async fn name()", "fn async name()", "await fn name()", "future fn name()"],
        "answer_en": "async fn name()",
        "answer_hi": "async fn name()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is tokio used for?",
        "question_hi": "tokio का उपयोग किस लिए किया जाता है?",
        "options_en": ["Async runtime", "Network programming", "Both A and B", "Synchronous I/O"],
        "options_hi": ["Async रनटाइम", "नेटवर्क प्रोग्रामिंग", "A और B दोनों", "सिंक्रोनस I/O"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "How do you create trait objects?",
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
        "question_en": "What is no_std environment?",
        "question_hi": "no_std एनवायरनमेंट क्या है?",
        "options_en": ["Without standard library", "For embedded systems", "Both A and B", "For web development"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी के बिना", "एम्बेडेड सिस्टम्स के लिए", "A और B दोनों", "वेब डेवलपमेंट के लिए"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "How do you copy memory between slices?",
        "question_hi": "स्लाइस के बीच मेमोरी कैसे कॉपी करते हैं?",
        "options_en": ["copy_from_slice()", "clone()", "memcpy()", "copy()"],
        "options_hi": ["copy_from_slice()", "clone()", "memcpy()", "copy()"],
        "answer_en": "copy_from_slice()",
        "answer_hi": "copy_from_slice()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the Rustonomicon?",
        "question_hi": "Rustonomicon क्या है?",
        "options_en": ["Guide to unsafe Rust", "Advanced patterns", "Both A and B", "Basic tutorial"],
        "options_hi": ["अनसेफ Rust की गाइड", "एडवांस्ड पैटर्न्स", "A और B दोनों", "बेसिक ट्यूटोरियल"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "How do you use SIMD in Rust?",
        "question_hi": "Rust में SIMD का उपयोग कैसे करते हैं?",
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
        "options_en": ["Foreign function interface", "C interoperability", "Both A and B", "Network calls"],
        "options_hi": ["फॉरेन फंक्शन इंटरफेस", "C इंटरऑपरेबिलिटी", "A और B दोनों", "नेटवर्क कॉल्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "How do you perform bit manipulation?",
        "question_hi": "बिट मैनिपुलेशन कैसे परफॉर्म करते हैं?",
        "options_en": ["Bitwise operators", "Bit manipulation methods", "Both A and B", "Bit fields"],
        "options_hi": ["बिटवाइज ऑपरेटर्स", "बिट मैनिपुलेशन मेथड्स", "A और B दोनों", "बिट फील्ड्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What does cargo clippy provide?",
        "question_hi": "cargo clippy क्या प्रोवाइड करता है?",
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