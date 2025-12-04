const questions =[
    {
        "num": 1,
        "question_en": "Which macro is used for printing in Rust?",
        "question_hi": "Rust में प्रिंटिंग के लिए किस मैक्रो का उपयोग किया जाता है?",
        "options_en": ["println!", "print!", "echo!", "display!"],
        "options_hi": ["println!", "print!", "echo!", "display!"],
        "answer_en": "println!",
        "answer_hi": "println!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is a 'trait' in Rust?",
        "question_hi": "Rust में 'trait' क्या है?",
        "options_en": ["A collection of methods", "A data type", "A module", "A function"],
        "options_hi": ["मेथड्स का कलेक्शन", "एक डेटा टाइप", "एक मॉड्यूल", "एक फंक्शन"],
        "answer_en": "A collection of methods",
        "answer_hi": "मेथड्स का कलेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which of these is Rust's package manager?",
        "question_hi": "इनमें से कौन Rust का पैकेज मैनेजर है?",
        "options_en": ["Cargo", "Rustup", "Crates", "Modman"],
        "options_hi": ["Cargo", "Rustup", "Crates", "Modman"],
        "answer_en": "Cargo",
        "answer_hi": "Cargo",
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
        "question_en": "How do you create a new string in Rust?",
        "question_hi": "Rust में आप नई स्ट्रिंग कैसे बनाते हैं?",
        "options_en": ["String::new()", "new String()", "String.create()", "str::new()"],
        "options_hi": ["String::new()", "new String()", "String.create()", "str::new()"],
        "answer_en": "String::new()",
        "answer_hi": "String::new()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the purpose of the 'match' keyword in Rust?",
        "question_hi": "Rust में 'match' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Pattern matching", "String comparison", "Thread matching", "Memory matching"],
        "options_hi": ["पैटर्न मैचिंग", "स्ट्रिंग कम्पेयरिजन", "थ्रेड मैचिंग", "मेमोरी मैचिंग"],
        "answer_en": "Pattern matching",
        "answer_hi": "पैटर्न मैचिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which trait is used for error handling in Rust?",
        "question_hi": "Rust में एरर हैंडलिंग के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["Result", "Error", "Option", "Throwable"],
        "options_hi": ["Result", "Error", "Option", "Throwable"],
        "answer_en": "Result",
        "answer_hi": "Result",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does 'RAII' stand for in Rust?",
        "question_hi": "Rust में 'RAII' का क्या अर्थ है?",
        "options_en": ["Resource Acquisition Is Initialization", "Rust Allocation Interface Implementation", "Runtime Allocation and Initialization", "Resource Allocation Interface"],
        "options_hi": ["Resource Acquisition Is Initialization", "Rust Allocation Interface Implementation", "Runtime Allocation and Initialization", "Resource Allocation Interface"],
        "answer_en": "Resource Acquisition Is Initialization",
        "answer_hi": "Resource Acquisition Is Initialization",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "How do you define a constant in Rust?",
        "question_hi": "Rust में आप कॉन्स्टेंट कैसे डिफाइन करते हैं?",
        "options_en": ["const", "let", "static", "define"],
        "options_hi": ["const", "let", "static", "define"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the purpose of the 'unwrap()' method?",
        "question_hi": "'unwrap()' मेथड का उद्देश्य क्या है?",
        "options_en": ["Extract value from Option/Result", "Wrap a value", "Unwrap memory", "Debug purpose"],
        "options_hi": ["Option/Result से वैल्यू निकालना", "वैल्यू को रैप करना", "मेमोरी अनरैप करना", "डीबग उद्देश्य"],
        "answer_en": "Extract value from Option/Result",
        "answer_hi": "Option/Result से वैल्यू निकालना",
        "attempted": false,
        "selected": ""
    },
   {
        "num": 11,
        "question_en": "What is the primary purpose of Rust's ownership system?",
        "question_hi": "Rust के ownership सिस्टम का प्राथमिक उद्देश्य क्या है?",
        "options_en": ["Memory safety without garbage collection", "Faster execution speed", "Automatic memory management", "Simpler syntax"],
        "options_hi": ["गार्बेज कलेक्शन के बिना मेमोरी सेफ्टी", "तेज एक्जीक्यूशन स्पीड", "ऑटोमैटिक मेमोरी मैनेजमेंट", "सरल सिंटैक्स"],
        "answer_en": "Memory safety without garbage collection",
        "answer_hi": "गार्बेज कलेक्शन के बिना मेमोरी सेफ्टी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What does the 'mut' keyword indicate in Rust?",
        "question_hi": "Rust में 'mut' कीवर्ड क्या इंगित करता है?",
        "options_en": ["Mutable variable", "Multiple threads", "Memory allocation", "Module usage"],
        "options_hi": ["म्यूटेबल वेरिएबल", "मल्टीपल थ्रेड्स", "मेमोरी अलोकेशन", "मॉड्यूल यूसेज"],
        "answer_en": "Mutable variable",
        "answer_hi": "म्यूटेबल वेरिएबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How do you handle multiple error types in Rust?",
        "question_hi": "Rust में मल्टीपल एरर टाइप्स को कैसे हैंडल करते हैं?",
        "options_en": ["Using the ? operator", "Using try!", "Using catch", "Using error!"],
        "options_hi": ["? ऑपरेटर का उपयोग करके", "try! का उपयोग करके", "catch का उपयोग करके", "error! का उपयोग करके"],
        "answer_en": "Using the ? operator",
        "answer_hi": "? ऑपरेटर का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the purpose of 'Box<T>' in Rust?",
        "question_hi": "Rust में 'Box<T>' का उद्देश्य क्या है?",
        "options_en": ["Heap allocation", "Stack allocation", "Thread safety", "Memory mapping"],
        "options_hi": ["हीप अलोकेशन", "स्टैक अलोकेशन", "थ्रेड सेफ्टी", "मेमोरी मैपिंग"],
        "answer_en": "Heap allocation",
        "answer_hi": "हीप अलोकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which keyword is used to define a function in Rust?",
        "question_hi": "Rust में फंक्शन डिफाइन करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["fn", "func", "function", "def"],
        "options_hi": ["fn", "func", "function", "def"],
        "answer_en": "fn",
        "answer_hi": "fn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the difference between 'String' and 'str' in Rust?",
        "question_hi": "Rust में 'String' और 'str' में क्या अंतर है?",
        "options_en": ["String is growable, str is fixed", "String is on stack, str on heap", "No difference", "String is for numbers"],
        "options_hi": ["String ग्रोएबल है, str फिक्स्ड है", "String स्टैक पर है, str हीप पर", "कोई अंतर नहीं", "String नंबर्स के लिए है"],
        "answer_en": "String is growable, str is fixed",
        "answer_hi": "String ग्रोएबल है, str फिक्स्ड है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "How do you create a vector in Rust?",
        "question_hi": "Rust में आप वेक्टर कैसे बनाते हैं?",
        "options_en": ["Vec::new()", "Vector::new()", "new Vector()", "create_vector()"],
        "options_hi": ["Vec::new()", "Vector::new()", "new Vector()", "create_vector()"],
        "answer_en": "Vec::new()",
        "answer_hi": "Vec::new()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the purpose of 'derive' attribute in Rust?",
        "question_hi": "Rust में 'derive' एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Auto-implement traits", "Derive new types", "Create functions", "Import modules"],
        "options_hi": ["ट्रेट्स को ऑटो-इम्प्लीमेंट करना", "नए टाइप्स डेरिव करना", "फंक्शन्स बनाना", "मॉड्यूल्स इम्पोर्ट करना"],
        "answer_en": "Auto-implement traits",
        "answer_hi": "ट्रेट्स को ऑटो-इम्प्लीमेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which trait is used for cloning in Rust?",
        "question_hi": "Rust में क्लोनिंग के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["Clone", "Copy", "Duplicate", "Replicate"],
        "options_hi": ["Clone", "Copy", "Duplicate", "Replicate"],
        "answer_en": "Clone",
        "answer_hi": "Clone",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What does 'move' keyword do in closures?",
        "question_hi": "क्लोजर्स में 'move' कीवर्ड क्या करता है?",
        "options_en": ["Takes ownership of variables", "Moves closure to heap", "Moves variables between threads", "Creates movable closure"],
        "options_hi": ["वेरिएबल्स की ओनरशिप लेता है", "क्लोजर को हीप पर मूव करता है", "वेरिएबल्स को थ्रेड्स के बीच मूव करता है", "मूवेबल क्लोजर बनाता है"],
        "answer_en": "Takes ownership of variables",
        "answer_hi": "वेरिएबल्स की ओनरशिप लेता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "How do you handle concurrent programming in Rust?",
        "question_hi": "Rust में कंकरंट प्रोग्रामिंग को कैसे हैंडल करते हैं?",
        "options_en": ["Using threads and channels", "Using async/await", "Using both", "Rust doesn't support concurrency"],
        "options_hi": ["थ्रेड्स और चैनल्स का उपयोग करके", "async/await का उपयोग करके", "दोनों का उपयोग करके", "Rust कंकरंसी सपोर्ट नहीं करता"],
        "answer_en": "Using both",
        "answer_hi": "दोनों का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is 'lifetime' in Rust?",
        "question_hi": "Rust में 'lifetime' क्या है?",
        "options_en": ["Scope of references", "Memory allocation time", "Program execution time", "Variable creation time"],
        "options_hi": ["रिफरेन्सेस का स्कोप", "मेमोरी अलोकेशन टाइम", "प्रोग्राम एक्जीक्यूशन टाइम", "वेरिएबल क्रिएशन टाइम"],
        "answer_en": "Scope of references",
        "answer_hi": "रिफरेन्सेस का स्कोप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which macro is used for writing tests in Rust?",
        "question_hi": "Rust में टेस्ट्स लिखने के लिए किस मैक्रो का उपयोग किया जाता है?",
        "options_en": ["#[test]", "#[cfg(test)]", "test!", "check!"],
        "options_hi": ["#[test]", "#[cfg(test)]", "test!", "check!"],
        "answer_en": "#[test]",
        "answer_hi": "#[test]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the purpose of 'impl' keyword?",
        "question_hi": "'impl' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Implement methods for types", "Import modules", "Implement traits", "Both A and C"],
        "options_hi": ["टाइप्स के लिए मेथड्स इम्प्लीमेंट करना", "मॉड्यूल्स इम्पोर्ट करना", "ट्रेट्स इम्प्लीमेंट करना", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "How do you create a new thread in Rust?",
        "question_hi": "Rust में आप नया थ्रेड कैसे बनाते हैं?",
        "options_en": ["thread::spawn()", "Thread::new()", "spawn_thread()", "new_thread()"],
        "options_hi": ["thread::spawn()", "Thread::new()", "spawn_thread()", "new_thread()"],
        "answer_en": "thread::spawn()",
        "answer_hi": "thread::spawn()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is 'pattern matching' in Rust?",
        "question_hi": "Rust में 'pattern matching' क्या है?",
        "options_en": ["Checking value against patterns", "String pattern search", "Memory pattern allocation", "Thread pattern creation"],
        "options_hi": ["पैटर्न्स के विरुद्ध वैल्यू चेक करना", "स्ट्रिंग पैटर्न सर्च", "मेमोरी पैटर्न अलोकेशन", "थ्रेड पैटर्न क्रिएशन"],
        "answer_en": "Checking value against patterns",
        "answer_hi": "पैटर्न्स के विरुद्ध वैल्यू चेक करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which trait is used for string conversion?",
        "question_hi": "स्ट्रिंग कन्वर्जन के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["ToString", "FromStr", "Convert", "Both A and B"],
        "options_hi": ["ToString", "FromStr", "Convert", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is 'shadowing' in Rust?",
        "question_hi": "Rust में 'shadowing' क्या है?",
        "options_en": ["Reusing variable name", "Hiding variables", "Memory optimization", "Thread safety"],
        "options_hi": ["वेरिएबल नाम रीयूज करना", "वेरिएबल्स हाइड करना", "मेमोरी ऑप्टिमाइज़ेशन", "थ्रेड सेफ्टी"],
        "answer_en": "Reusing variable name",
        "answer_hi": "वेरिएबल नाम रीयूज करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How do you handle optional values in Rust?",
        "question_hi": "Rust में ऑप्शनल वैल्यूज को कैसे हैंडल करते हैं?",
        "options_en": ["Using Option enum", "Using null", "Using optional keyword", "Using maybe type"],
        "options_hi": ["Option enum का उपयोग करके", "null का उपयोग करके", "optional कीवर्ड का उपयोग करके", "maybe टाइप का उपयोग करके"],
        "answer_en": "Using Option enum",
        "answer_hi": "Option enum का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the purpose of 'dyn' keyword?",
        "question_hi": "'dyn' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Trait objects", "Dynamic allocation", "Dynamic typing", "Dynamic dispatch"],
        "options_hi": ["ट्रेट ऑब्जेक्ट्स", "डायनामिक अलोकेशन", "डायनामिक टाइपिंग", "डायनामिक डिस्पैच"],
        "answer_en": "Trait objects",
        "answer_hi": "ट्रेट ऑब्जेक्ट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which method is used to iterate over collections?",
        "question_hi": "कलेक्शन्स पर इटरेट करने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["iter()", "iterate()", "foreach()", "loop()"],
        "options_hi": ["iter()", "iterate()", "foreach()", "loop()"],
        "answer_en": "iter()",
        "answer_hi": "iter()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is 'unsafe' keyword used for?",
        "question_hi": "'unsafe' कीवर्ड का उपयोग किस लिए किया जाता है?",
        "options_en": ["Bypass compiler checks", "Memory unsafe operations", "FFI operations", "All of the above"],
        "options_hi": ["कंपाइलर चेक्स बायपास करना", "मेमोरी अनसेफ ऑपरेशन्स", "FFI ऑपरेशन्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "How do you create a HashMap in Rust?",
        "question_hi": "Rust में आप HashMap कैसे बनाते हैं?",
        "options_en": ["HashMap::new()", "Map::new()", "new HashMap()", "create_hashmap()"],
        "options_hi": ["HashMap::new()", "Map::new()", "new HashMap()", "create_hashmap()"],
        "answer_en": "HashMap::new()",
        "answer_hi": "HashMap::new()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the purpose of 'mod' keyword?",
        "question_hi": "'mod' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Define modules", "Modify variables", "Module import", "Memory modification"],
        "options_hi": ["मॉड्यूल्स डिफाइन करना", "वेरिएबल्स मॉडिफाई करना", "मॉड्यूल इम्पोर्ट", "मेमोरी मॉडिफिकेशन"],
        "answer_en": "Define modules",
        "answer_hi": "मॉड्यूल्स डिफाइन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which trait is used for ordering?",
        "question_hi": "ऑर्डरिंग के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["Ord", "Order", "Compare", "PartialOrd"],
        "options_hi": ["Ord", "Order", "Compare", "PartialOrd"],
        "answer_en": "Ord",
        "answer_hi": "Ord",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is 'borrow checker' in Rust?",
        "question_hi": "Rust में 'borrow checker' क्या है?",
        "options_en": ["Memory safety validator", "Loan system", "Code checker", "Thread validator"],
        "options_hi": ["मेमोरी सेफ्टी वैलिडेटर", "लोन सिस्टम", "कोड चेकर", "थ्रेड वैलिडेटर"],
        "answer_en": "Memory safety validator",
        "answer_hi": "मेमोरी सेफ्टी वैलिडेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How do you handle file I/O in Rust?",
        "question_hi": "Rust में फाइल I/O को कैसे हैंडल करते हैं?",
        "options_en": ["Using std::fs", "Using file module", "Using io module", "Both A and C"],
        "options_hi": ["std::fs का उपयोग करके", "file मॉड्यूल का उपयोग करके", "io मॉड्यूल का उपयोग करके", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is 'smart pointer' in Rust?",
        "question_hi": "Rust में 'smart pointer' क्या है?",
        "options_en": ["Pointers with extra capabilities", "Automatic pointers", "Safe pointers", "Heap pointers"],
        "options_hi": ["एक्स्ट्रा कैपेबिलिटीज वाले पॉइंटर्स", "ऑटोमैटिक पॉइंटर्स", "सेफ पॉइंटर्स", "हीप पॉइंटर्स"],
        "answer_en": "Pointers with extra capabilities",
        "answer_hi": "एक्स्ट्रा कैपेबिलिटीज वाले पॉइंटर्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which macro is used for format strings?",
        "question_hi": "फॉर्मेट स्ट्रिंग्स के लिए किस मैक्रो का उपयोग किया जाता है?",
        "options_en": ["format!", "fmt!", "string!", "create!"],
        "options_hi": ["format!", "fmt!", "string!", "create!"],
        "answer_en": "format!",
        "answer_hi": "format!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the purpose of 'Self' keyword?",
        "question_hi": "'Self' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Refer to implementing type", "Current module", "Self reference", "Static reference"],
        "options_hi": ["इम्प्लीमेंटिंग टाइप को रेफर करना", "करंट मॉड्यूल", "सेल्फ रिफरेन्स", "स्टैटिक रिफरेन्स"],
        "answer_en": "Refer to implementing type",
        "answer_hi": "इम्प्लीमेंटिंग टाइप को रेफर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How do you create a static variable?",
        "question_hi": "आप स्टैटिक वेरिएबल कैसे बनाते हैं?",
        "options_en": ["static", "const", "let", "var"],
        "options_hi": ["static", "const", "let", "var"],
        "answer_en": "static",
        "answer_hi": "static",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is 'iterator' in Rust?",
        "question_hi": "Rust में 'iterator' क्या है?",
        "options_en": ["Trait for sequential access", "Loop construct", "Collection type", "Thread iterator"],
        "options_hi": ["सीक्वेंशियल एक्सेस के लिए ट्रेट", "लूप कंस्ट्रक्ट", "कलेक्शन टाइप", "थ्रेड इटरेटर"],
        "answer_en": "Trait for sequential access",
        "answer_hi": "सीक्वेंशियल एक्सेस के लिए ट्रेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which method is used for error propagation?",
        "question_hi": "एरर प्रोपेगेशन के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["?", "!", "->", "=>"],
        "options_hi": ["?", "!", "->", "=>"],
        "answer_en": "?",
        "answer_hi": "?",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is 'channel' used for?",
        "question_hi": "'channel' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Inter-thread communication", "Network communication", "File communication", "Process communication"],
        "options_hi": ["इंटर-थ्रेड कम्युनिकेशन", "नेटवर्क कम्युनिकेशन", "फाइल कम्युनिकेशन", "प्रोसेस कम्युनिकेशन"],
        "answer_en": "Inter-thread communication",
        "answer_hi": "इंटर-थ्रेड कम्युनिकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How do you define a struct?",
        "question_hi": "आप struct कैसे डिफाइन करते हैं?",
        "options_en": ["struct", "class", "type", "define"],
        "options_hi": ["struct", "class", "type", "define"],
        "answer_en": "struct",
        "answer_hi": "struct",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is 'enum' used for?",
        "question_hi": "'enum' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Define enumerated types", "Enumeration values", "Both A and B", "None of the above"],
        "options_hi": ["एन्युमरेटेड टाइप्स डिफाइन करना", "एन्युमरेशन वैल्यूज", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which trait is used for default values?",
        "question_hi": "डिफॉल्ट वैल्यूज के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["Default", "DefaultValue", "Init", "Base"],
        "options_hi": ["Default", "DefaultValue", "Init", "Base"],
        "answer_en": "Default",
        "answer_hi": "Default",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is 'lifetime elision'?",
        "question_hi": "'lifetime elision' क्या है?",
        "options_en": ["Automatic lifetime inference", "Lifetime removal", "Lifetime optimization", "Lifetime extension"],
        "options_hi": ["ऑटोमैटिक लाइफटाइम इन्फेरेंस", "लाइफटाइम रिमूवल", "लाइफटाइम ऑप्टिमाइज़ेशन", "लाइफटाइम एक्सटेंशन"],
        "answer_en": "Automatic lifetime inference",
        "answer_hi": "ऑटोमैटिक लाइफटाइम इन्फेरेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How do you create a slice?",
        "question_hi": "आप slice कैसे बनाते हैं?",
        "options_en": ["&array[..]", "slice::new()", "Slice::from()", "All of the above"],
        "options_hi": ["&array[..]", "slice::new()", "Slice::from()", "उपरोक्त सभी"],
        "answer_en": "&array[..]",
        "answer_hi": "&array[..]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is 'async/await' used for?",
        "question_hi": "'async/await' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Asynchronous programming", "Synchronous programming", "Parallel programming", "Thread programming"],
        "options_hi": ["असिंक्रोनस प्रोग्रामिंग", "सिंक्रोनस प्रोग्रामिंग", "पैरेलल प्रोग्रामिंग", "थ्रेड प्रोग्रामिंग"],
        "answer_en": "Asynchronous programming",
        "answer_hi": "असिंक्रोनस प्रोग्रामिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which method is used to panic in Rust?",
        "question_hi": "Rust में पैनिक करने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["panic!()", "error!()", "crash!()", "fail!()"],
        "options_hi": ["panic!()", "error!()", "crash!()", "fail!()"],
        "answer_en": "panic!()",
        "answer_hi": "panic!()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is 'Rc<T>' used for?",
        "question_hi": "'Rc<T>' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Reference counting", "Raw pointers", "Runtime checks", "Resource control"],
        "options_hi": ["रिफरेन्स काउंटिंग", "रॉ पॉइंटर्स", "रनटाइम चेक्स", "रिसोर्स कंट्रोल"],
        "answer_en": "Reference counting",
        "answer_hi": "रिफरेन्स काउंटिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "How do you implement a trait?",
        "question_hi": "आप एक trait को कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["impl Trait for Type", "implement Trait for Type", "Type implements Trait", "trait impl for Type"],
        "options_hi": ["impl Trait for Type", "implement Trait for Type", "Type implements Trait", "trait impl for Type"],
        "answer_en": "impl Trait for Type",
        "answer_hi": "impl Trait for Type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is 'Arc<T>' used for?",
        "question_hi": "'Arc<T>' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Atomic reference counting", "Automatic reference", "Async reference", "Array reference"],
        "options_hi": ["एटॉमिक रिफरेन्स काउंटिंग", "ऑटोमैटिक रिफरेन्स", "Async रिफरेन्स", "ऐरे रिफरेन्स"],
        "answer_en": "Atomic reference counting",
        "answer_hi": "एटॉमिक रिफरेन्स काउंटिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which trait is used for debugging?",
        "question_hi": "डीबगिंग के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["Debug", "Display", "Print", "Show"],
        "options_hi": ["Debug", "Display", "Print", "Show"],
        "answer_en": "Debug",
        "answer_hi": "Debug",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is 'Mutex' used for?",
        "question_hi": "'Mutex' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Thread synchronization", "Memory protection", "Both A and B", "None of the above"],
        "options_hi": ["थ्रेड सिंक्रोनाइज़ेशन", "मेमोरी प्रोटेक्शन", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How do you create a tuple?",
        "question_hi": "आप tuple कैसे बनाते हैं?",
        "options_en": ["(value1, value2)", "tuple(value1, value2)", "Tuple::new(value1, value2)", "new tuple(value1, value2)"],
        "options_hi": ["(value1, value2)", "tuple(value1, value2)", "Tuple::new(value1, value2)", "new tuple(value1, value2)"],
        "answer_en": "(value1, value2)",
        "answer_hi": "(value1, value2)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is 'drop' trait used for?",
        "question_hi": "'drop' ट्रेट का उपयोग किस लिए किया जाता है?",
        "options_en": ["Cleanup resources", "Drop values", "Memory deallocation", "All of the above"],
        "options_hi": ["रिसोर्सेज क्लीनअप", "वैल्यूज ड्रॉप करना", "मेमोरी डीलोकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which method is used for string slicing?",
        "question_hi": "स्ट्रिंग स्लाइसिंग के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["&s[..]", "s.slice()", "slice(s)", "substring(s)"],
        "options_hi": ["&s[..]", "s.slice()", "slice(s)", "substring(s)"],
        "answer_en": "&s[..]",
        "answer_hi": "&s[..]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is 'phantom data' used for?",
        "question_hi": "'phantom data' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Type system tricks", "Ghost data", "Unused type parameters", "All of the above"],
        "options_hi": ["टाइप सिस्टम ट्रिक्स", "घोस्ट डेटा", "अनयूज्ड टाइप पैरामीटर्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "How do you create a range?",
        "question_hi": "आप range कैसे बनाते हैं?",
        "options_en": ["0..10", "range(0, 10)", "0 to 10", "0-10"],
        "options_hi": ["0..10", "range(0, 10)", "0 to 10", "0-10"],
        "answer_en": "0..10",
        "answer_hi": "0..10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is 'cell' used for?",
        "question_hi": "'cell' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Interior mutability", "Cell storage", "Memory cells", "Data cells"],
        "options_hi": ["इंटीरियर म्यूटेबिलिटी", "सेल स्टोरेज", "मेमोरी सेल्स", "डेटा सेल्स"],
        "answer_en": "Interior mutability",
        "answer_hi": "इंटीरियर म्यूटेबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which trait is used for hashing?",
        "question_hi": "हैशिंग के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["Hash", "Hashing", "Digest", "Hasher"],
        "options_hi": ["Hash", "Hashing", "Digest", "Hasher"],
        "answer_en": "Hash",
        "answer_hi": "Hash",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is 'crate' in Rust?",
        "question_hi": "Rust में 'crate' क्या है?",
        "options_en": ["Compilation unit", "Package", "Library", "All of the above"],
        "options_hi": ["कंपाइलेशन यूनिट", "पैकेज", "लाइब्रेरी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "How do you handle floating point numbers?",
        "question_hi": "आप फ्लोटिंग पॉइंट नंबर्स को कैसे हैंडल करते हैं?",
        "options_en": ["f32 and f64", "float and double", "only f64", "only f32"],
        "options_hi": ["f32 और f64", "float और double", "केवल f64", "केवल f32"],
        "answer_en": "f32 and f64",
        "answer_hi": "f32 और f64",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is 'never type' in Rust?",
        "question_hi": "Rust में 'never type' क्या है?",
        "options_en": ["!", "never", "None", "void"],
        "options_hi": ["!", "never", "None", "void"],
        "answer_en": "!",
        "answer_hi": "!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which method is used for vector pushing?",
        "question_hi": "वेक्टर पुशिंग के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["push()", "add()", "append()", "insert()"],
        "options_hi": ["push()", "add()", "append()", "insert()"],
        "answer_en": "push()",
        "answer_hi": "push()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is 'Send' trait for?",
        "question_hi": "'Send' ट्रेट किस लिए है?",
        "options_en": ["Thread safety", "Memory safety", "Both A and B", "None of the above"],
        "options_hi": ["थ्रेड सेफ्टी", "मेमोरी सेफ्टी", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Thread safety",
        "answer_hi": "थ्रेड सेफ्टी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "How do you create a raw pointer?",
        "question_hi": "आप रॉ पॉइंटर कैसे बनाते हैं?",
        "options_en": ["as *const T", "raw_ptr()", "pointer()", "Ptr::new()"],
        "options_hi": ["as *const T", "raw_ptr()", "pointer()", "Ptr::new()"],
        "answer_en": "as *const T",
        "answer_hi": "as *const T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is 'Sync' trait for?",
        "question_hi": "'Sync' ट्रेट किस लिए है?",
        "options_en": ["Thread-safe references", "Memory synchronization", "Both A and B", "None of the above"],
        "options_hi": ["थ्रेड-सेफ रिफरेन्सेस", "मेमोरी सिंक्रोनाइज़ेशन", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Thread-safe references",
        "answer_hi": "थ्रेड-सेफ रिफरेन्सेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which method is used for option matching?",
        "question_hi": "ऑप्शन मैचिंग के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["match", "if let", "Both A and B", "unwrap"],
        "options_hi": ["match", "if let", "A और B दोनों", "unwrap"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is 'const fn' used for?",
        "question_hi": "'const fn' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Compile-time evaluation", "Constant functions", "Both A and B", "None of the above"],
        "options_hi": ["कंपाइल-टाइम एवेलुएशन", "कॉन्स्टेंट फंक्शन्स", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "How do you handle network programming?",
        "question_hi": "आप नेटवर्क प्रोग्रामिंग को कैसे हैंडल करते हैं?",
        "options_en": ["Using std::net", "Using tokio", "Using async-std", "All of the above"],
        "options_hi": ["std::net का उपयोग करके", "tokio का उपयोग करके", "async-std का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is 'turbofish' syntax?",
        "question_hi": "'turbofish' सिंटैक्स क्या है?",
        "options_en": ["::<>", "->", "=>", "<>"],
        "options_hi": ["::<>", "->", "=>", "<>"],
        "answer_en": "::<>",
        "answer_hi": "::<>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which trait is used for conversion?",
        "question_hi": "कन्वर्जन के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["From and Into", "Convert", "Transform", "Change"],
        "options_hi": ["From और Into", "Convert", "Transform", "Change"],
        "answer_en": "From and Into",
        "answer_hi": "From और Into",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is 'associated type'?",
        "question_hi": "'associated type' क्या है?",
        "options_en": ["Type connected to trait", "Type alias", "Generic type", "Trait type"],
        "options_hi": ["ट्रेट से कनेक्टेड टाइप", "टाइप एलियास", "जेनेरिक टाइप", "ट्रेट टाइप"],
        "answer_en": "Type connected to trait",
        "answer_hi": "ट्रेट से कनेक्टेड टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "How do you create a function pointer?",
        "question_hi": "आप फंक्शन पॉइंटर कैसे बनाते हैं?",
        "options_en": ["fn pointer", "function pointer", "&fn", "Function::ptr"],
        "options_hi": ["fn pointer", "function pointer", "&fn", "Function::ptr"],
        "answer_en": "fn pointer",
        "answer_hi": "fn pointer",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is 'unit type' in Rust?",
        "question_hi": "Rust में 'unit type' क्या है?",
        "options_en": ["()", "unit", "void", "none"],
        "options_hi": ["()", "unit", "void", "none"],
        "answer_en": "()",
        "answer_hi": "()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which method is used for string concatenation?",
        "question_hi": "स्ट्रिंग कॉन्कटीनेशन के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["+ operator", "concat()", "join()", "All of the above"],
        "options_hi": ["+ ऑपरेटर", "concat()", "join()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is 'macro_rules!' used for?",
        "question_hi": "'macro_rules!' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Define macros", "Rule-based macros", "Both A and B", "None of the above"],
        "options_hi": ["मैक्रोस डिफाइन करना", "रूल-बेस्ड मैक्रोस", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "How do you handle JSON in Rust?",
        "question_hi": "Rust में JSON को कैसे हैंडल करते हैं?",
        "options_en": ["Using serde", "Using json crate", "Both A and B", "Using std::json"],
        "options_hi": ["serde का उपयोग करके", "json crate का उपयोग करके", "A और B दोनों", "std::json का उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is 'zero-cost abstraction'?",
        "question_hi": "'zero-cost abstraction' क्या है?",
        "options_en": ["No runtime overhead", "Free abstractions", "Both A and B", "Compile-time cost"],
        "options_hi": ["कोई रनटाइम ओवरहेड नहीं", "फ्री एब्स्ट्रैक्शन्स", "A और B दोनों", "कंपाइल-टाइम कॉस्ट"],
        "answer_en": "No runtime overhead",
        "answer_hi": "कोई रनटाइम ओवरहेड नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which method is used for error handling in main?",
        "question_hi": "main में एरर हैंडलिंग के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["Result return", "panic!", "unwrap", "All of the above"],
        "options_hi": ["Result रिटर्न", "panic!", "unwrap", "उपरोक्त सभी"],
        "answer_en": "Result return",
        "answer_hi": "Result रिटर्न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is 'pin' used for?",
        "question_hi": "'pin' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Self-referential structs", "Memory pinning", "Both A and B", "None of the above"],
        "options_hi": ["सेल्फ-रेफरेंशियल स्ट्रक्चर्स", "मेमोरी पिनिंग", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "How do you create a generic function?",
        "question_hi": "आप जेनेरिक फंक्शन कैसे बनाते हैं?",
        "options_en": ["fn name<T>()", "generic fn name()", "fn name<generic>()", "function<T> name()"],
        "options_hi": ["fn name<T>()", "generic fn name()", "fn name<generic>()", "function<T> name()"],
        "answer_en": "fn name<T>()",
        "answer_hi": "fn name<T>()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is 'unsafe trait'?",
        "question_hi": "'unsafe trait' क्या है?",
        "options_en": ["Trait with unsafe contracts", "Unsafe implementation", "Both A and B", "None of the above"],
        "options_hi": ["अनसेफ कॉन्ट्रैक्ट्स वाला ट्रेट", "अनसेफ इम्प्लीमेंटेशन", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Trait with unsafe contracts",
        "answer_hi": "अनसेफ कॉन्ट्रैक्ट्स वाला ट्रेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which method is used for memory allocation?",
        "question_hi": "मेमोरी अलोकेशन के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["Box::new()", "alloc()", "malloc()", "All of the above"],
        "options_hi": ["Box::new()", "alloc()", "malloc()", "उपरोक्त सभी"],
        "answer_en": "Box::new()",
        "answer_hi": "Box::new()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is 'non-lexical lifetimes'?",
        "question_hi": "'non-lexical lifetimes' क्या है?",
        "options_en": ["Improved borrow checker", "New lifetime system", "Both A and B", "None of the above"],
        "options_hi": ["इम्प्रूव्ड बोरो चेकर", "न्यू लाइफटाइम सिस्टम", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Improved borrow checker",
        "answer_hi": "इम्प्रूव्ड बोरो चेकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "How do you handle WebAssembly in Rust?",
        "question_hi": "Rust में WebAssembly को कैसे हैंडल करते हैं?",
        "options_en": ["Using wasm-bindgen", "Using wasm-pack", "Both A and B", "Using std::wasm"],
        "options_hi": ["wasm-bindgen का उपयोग करके", "wasm-pack का उपयोग करके", "A और B दोनों", "std::wasm का उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is 'const generics'?",
        "question_hi": "'const generics' क्या है?",
        "options_en": ["Generic constants", "Compile-time values in generics", "Both A and B", "None of the above"],
        "options_hi": ["जेनेरिक कॉन्स्टेंट्स", "जेनेरिक्स में कंपाइल-टाइम वैल्यूज", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Compile-time values in generics",
        "answer_hi": "जेनेरिक्स में कंपाइल-टाइम वैल्यूज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which method is used for async functions?",
        "question_hi": "async फंक्शन्स के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["async fn", "fn async", "await fn", "future fn"],
        "options_hi": ["async fn", "fn async", "await fn", "future fn"],
        "answer_en": "async fn",
        "answer_hi": "async fn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is 'tokio' used for?",
        "question_hi": "'tokio' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Async runtime", "Network programming", "Both A and B", "None of the above"],
        "options_hi": ["Async रनटाइम", "नेटवर्क प्रोग्रामिंग", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "How do you create a trait object?",
        "question_hi": "आप trait object कैसे बनाते हैं?",
        "options_en": ["&dyn Trait", "dyn Trait", "Trait object", "object Trait"],
        "options_hi": ["&dyn Trait", "dyn Trait", "Trait object", "object Trait"],
        "answer_en": "&dyn Trait",
        "answer_hi": "&dyn Trait",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is 'no_std' environment?",
        "question_hi": "'no_std' एनवायरनमेंट क्या है?",
        "options_en": ["Without standard library", "Embedded systems", "Both A and B", "None of the above"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी के बिना", "एम्बेडेड सिस्टम्स", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which method is used for memory copying?",
        "question_hi": "मेमोरी कॉपीिंग के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["copy_from_slice()", "memcpy()", "copy()", "clone()"],
        "options_hi": ["copy_from_slice()", "memcpy()", "copy()", "clone()"],
        "answer_en": "copy_from_slice()",
        "answer_hi": "copy_from_slice()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is 'Rustonomicon'?",
        "question_hi": "'Rustonomicon' क्या है?",
        "options_en": ["Unsafe Rust guide", "Rust Bible", "Both A and B", "None of the above"],
        "options_hi": ["अनसेफ Rust गाइड", "Rust बाइबल", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Unsafe Rust guide",
        "answer_hi": "अनसेफ Rust गाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "How do you handle SIMD in Rust?",
        "question_hi": "Rust में SIMD को कैसे हैंडल करते हैं?",
        "options_en": ["Using std::simd", "Using packed_simd", "Both A and B", "Using vector types"],
        "options_hi": ["std::simd का उपयोग करके", "packed_simd का उपयोग करके", "A और B दोनों", "वेक्टर टाइप्स का उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is 'FFI' in Rust?",
        "question_hi": "Rust में 'FFI' क्या है?",
        "options_en": ["Foreign Function Interface", "Function Foreign Interface", "Foreign File Interface", "Fast Function Interface"],
        "options_hi": ["फॉरेन फंक्शन इंटरफेस", "फंक्शन फॉरेन इंटरफेस", "फॉरेन फाइल इंटरफेस", "फास्ट फंक्शन इंटरफेस"],
        "answer_en": "Foreign Function Interface",
        "answer_hi": "फॉरेन फंक्शन इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which method is used for bit manipulation?",
        "question_hi": "बिट मैनिपुलेशन के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["Bitwise operators", "bitvec crate", "Both A and B", "bit manipulation functions"],
        "options_hi": ["बिटवाइज ऑपरेटर्स", "bitvec crate", "A और B दोनों", "बिट मैनिपुलेशन फंक्शन्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is 'cargo fmt' used for?",
        "question_hi": "'cargo fmt' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Code formatting", "Format cargo.toml", "Both A and B", "None of the above"],
        "options_hi": ["कोड फॉर्मेटिंग", "cargo.toml फॉर्मेट करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Code formatting",
        "answer_hi": "कोड फॉर्मेटिंग",
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