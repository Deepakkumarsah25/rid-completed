const questions = [
    {
        "num": 1,
        "question_en": "What is the primary goal of Rust's borrow checker?",
        "question_hi": "Rust के borrow checker का प्राथमिक लक्ष्य क्या है?",
        "options_en": ["Prevent data races at compile time", "Optimize memory usage", "Speed up compilation", "Simplify syntax"],
        "options_hi": ["कंपाइल टाइम पर डेटा रेस रोकना", "मेमोरी उपयोग ऑप्टिमाइज़ करना", "कंपाइलेशन गति बढ़ाना", "सिंटैक्स सरल बनाना"],
        "answer_en": "Prevent data races at compile time",
        "answer_hi": "कंपाइल टाइम पर डेटा रेस रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What does the '&' symbol represent in Rust?",
        "question_hi": "Rust में '&' प्रतीक क्या दर्शाता है?",
        "options_en": ["Reference", "Address of", "Bitwise AND", "All of the above"],
        "options_hi": ["रिफरेन्स", "एड्रेस ऑफ", "बिटवाइज AND", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which of these is NOT a Rust scalar data type?",
        "question_hi": "इनमें से कौन सा Rust स्केलर डेटा टाइप नहीं है?",
        "options_en": ["f32", "i64", "str", "bool"],
        "options_hi": ["f32", "i64", "str", "bool"],
        "answer_en": "str",
        "answer_hi": "str",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the output type of the 'main' function in Rust?",
        "question_hi": "Rust में 'main' फ़ंक्शन का आउटपुट टाइप क्या है?",
        "options_en": ["()", "i32", "bool", "No return type"],
        "options_hi": ["()", "i32", "bool", "कोई रिटर्न टाइप नहीं"],
        "answer_en": "()",
        "answer_hi": "()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which macro is used for printing to standard output?",
        "question_hi": "स्टैण्डर्ड आउटपुट पर प्रिंट करने के लिए किस मैक्रो का उपयोग किया जाता है?",
        "options_en": ["println!", "print!", "echo!", "Both println! and print!"],
        "options_hi": ["println!", "print!", "echo!", "दोनों println! और print!"],
        "answer_en": "Both println! and print!",
        "answer_hi": "दोनों println! और print!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the purpose of the 'match' keyword in Rust?",
        "question_hi": "Rust में 'match' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Pattern matching", "String comparison", "Regular expression matching", "Thread synchronization"],
        "options_hi": ["पैटर्न मिलान", "स्ट्रिंग तुलना", "रेगुलर एक्सप्रेशन मिलान", "थ्रेड सिंक्रोनाइज़ेशन"],
        "answer_en": "Pattern matching",
        "answer_hi": "पैटर्न मिलान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which trait is used for string conversion using 'to_string()'?",
        "question_hi": "'to_string()' का उपयोग करके स्ट्रिंग रूपांतरण के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["ToString", "Display", "Stringify", "Convert"],
        "options_hi": ["ToString", "Display", "Stringify", "Convert"],
        "answer_en": "ToString",
        "answer_hi": "ToString",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does 'RAII' stand for in Rust?",
        "question_hi": "Rust में 'RAII' का क्या अर्थ है?",
        "options_en": ["Resource Acquisition Is Initialization", "Rust Automatic Initialization Interface", "Runtime Allocation and Initialization", "Resource Allocation and Initialization"],
        "options_hi": ["Resource Acquisition Is Initialization", "Rust Automatic Initialization Interface", "Runtime Allocation and Initialization", "Resource Allocation and Initialization"],
        "answer_en": "Resource Acquisition Is Initialization",
        "answer_hi": "Resource Acquisition Is Initialization",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which of these is a valid variable declaration in Rust?",
        "question_hi": "इनमें से कौन सा Rust में वैध वेरिएबल डिक्लेरेशन है?",
        "options_en": ["let x = 5;", "var x = 5;", "int x = 5;", "x := 5;"],
        "options_hi": ["let x = 5;", "var x = 5;", "int x = 5;", "x := 5;"],
        "answer_en": "let x = 5;",
        "answer_hi": "let x = 5;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the default integer type in Rust?",
        "question_hi": "Rust में डिफॉल्ट इंटीजर टाइप क्या है?",
        "options_en": ["i32", "i64", "isize", "usize"],
        "options_hi": ["i32", "i64", "isize", "usize"],
        "answer_en": "i32",
        "answer_hi": "i32",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which operator is used for the remainder operation?",
        "question_hi": "शेष ऑपरेशन के लिए किस ऑपरेटर का उपयोग किया जाता है?",
        "options_en": ["%", "mod", "rem", "/"],
        "options_hi": ["%", "mod", "rem", "/"],
        "answer_en": "%",
        "answer_hi": "%",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the purpose of the 'unwrap_or()' method?",
        "question_hi": "'unwrap_or()' मेथड का उद्देश्य क्या है?",
        "options_en": ["Provide default value for Option/Result", "Unwrap without panic", "Or operation on booleans", "Unwrap or return error"],
        "options_hi": ["Option/Result के लिए डिफॉल्ट वैल्यू प्रदान करना", "पैनिक के बिना अनरैप करना", "बूलियन पर OR ऑपरेशन", "अनरैप या एरर रिटर्न करना"],
        "answer_en": "Provide default value for Option/Result",
        "answer_hi": "Option/Result के लिए डिफॉल्ट वैल्यू प्रदान करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which collection type provides O(1) indexing?",
        "question_hi": "कौन सा कलेक्शन टाइप O(1) इंडेक्सिंग प्रदान करता है?",
        "options_en": ["Vec", "HashMap", "LinkedList", "BTreeMap"],
        "options_hi": ["Vec", "HashMap", "LinkedList", "BTreeMap"],
        "answer_en": "Vec",
        "answer_hi": "Vec",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What does 'DST' stand for in Rust?",
        "question_hi": "Rust में 'DST' का क्या अर्थ है?",
        "options_en": ["Dynamically Sized Type", "Data Structure Type", "Dynamic String Type", "Default Sized Type"],
        "options_hi": ["Dynamically Sized Type", "Data Structure Type", "Dynamic String Type", "Default Sized Type"],
        "answer_en": "Dynamically Sized Type",
        "answer_hi": "Dynamically Sized Type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which keyword is used to define a constant?",
        "question_hi": "कॉन्स्टेंट डिफाइन करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["const", "let", "static", "define"],
        "options_hi": ["const", "let", "static", "define"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the type of 'None' in Rust?",
        "question_hi": "Rust में 'None' का टाइप क्या है?",
        "options_en": ["Option<T>", "Result<T, E>", "bool", "()"],
        "options_hi": ["Option<T>", "Result<T, E>", "bool", "()"],
        "answer_en": "Option<T>",
        "answer_hi": "Option<T>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which method is used to add an element to a Vec?",
        "question_hi": "Vec में एलिमेंट जोड़ने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["push", "add", "append", "insert"],
        "options_hi": ["push", "add", "append", "insert"],
        "answer_en": "push",
        "answer_hi": "push",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the purpose of the '?' operator in error handling?",
        "question_hi": "एरर हैंडलिंग में '?' ऑपरेटर का उद्देश्य क्या है?",
        "options_en": ["Early return on Err", "Optional chaining", "Question mark operator", "Error propagation"],
        "options_hi": ["Err पर अर्ली रिटर्न", "ऑप्शनल चेनिंग", "प्रश्न चिन्ह ऑपरेटर", "एरर प्रोपगेशन"],
        "answer_en": "Early return on Err",
        "answer_hi": "Err पर अर्ली रिटर्न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which trait is required for using the '==' operator?",
        "question_hi": "'==' ऑपरेटर का उपयोग करने के लिए किस ट्रेट की आवश्यकता होती है?",
        "options_en": ["PartialEq", "Eq", "Equal", "Compare"],
        "options_hi": ["PartialEq", "Eq", "Equal", "Compare"],
        "answer_en": "PartialEq",
        "answer_hi": "PartialEq",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
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
        "num": 21,
        "question_en": "Which macro is used for string formatting?",
        "question_hi": "स्ट्रिंग फॉर्मेटिंग के लिए किस मैक्रो का उपयोग किया जाता है?",
        "options_en": ["format!", "println!", "write!", "All of the above"],
        "options_hi": ["format!", "println!", "write!", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the purpose of 'lifetime parameters'?",
        "question_hi": "'लाइफटाइम पैरामीटर्स' का उद्देश्य क्या है?",
        "options_en": ["Specify reference validity scope", "Control memory allocation time", "Manage thread lifetime", "Define variable scope"],
        "options_hi": ["रिफरेन्स वैलिडिटी स्कोप निर्दिष्ट करना", "मेमोरी अलोकेशन टाइम कंट्रोल करना", "थ्रेड लाइफटाइम मैनेज करना", "वेरिएबल स्कोप डिफाइन करना"],
        "answer_en": "Specify reference validity scope",
        "answer_hi": "रिफरेन्स वैलिडिटी स्कोप निर्दिष्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which method is used to get the length of a Vec?",
        "question_hi": "Vec की लंबाई प्राप्त करने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["len", "length", "size", "count"],
        "options_hi": ["len", "length", "size", "count"],
        "answer_en": "len",
        "answer_hi": "len",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the type of array [i32; 5]?",
        "question_hi": "ऐरे [i32; 5] का टाइप क्या है?",
        "options_en": ["Array of 5 i32 elements", "Slice of i32", "Vector of i32", "5 i32 values"],
        "options_hi": ["5 i32 एलिमेंट्स का ऐरे", "i32 का स्लाइस", "i32 का वेक्टर", "5 i32 वैल्यूज"],
        "answer_en": "Array of 5 i32 elements",
        "answer_hi": "5 i32 एलिमेंट्स का ऐरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which trait is used for ordering comparisons?",
        "question_hi": "ऑर्डरिंग कम्पेयरिजन के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["PartialOrd", "Ord", "Compare", "Order"],
        "options_hi": ["PartialOrd", "Ord", "Compare", "Order"],
        "answer_en": "PartialOrd",
        "answer_hi": "PartialOrd",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What does 'MIR' stand for in Rust compilation?",
        "question_hi": "Rust कंपाइलेशन में 'MIR' का क्या अर्थ है?",
        "options_en": ["Mid-level Intermediate Representation", "Memory Intermediate Representation", "Mid Internal Representation", "Memory Internal Representation"],
        "options_hi": ["Mid-level Intermediate Representation", "Memory Intermediate Representation", "Mid Internal Representation", "Memory Internal Representation"],
        "answer_en": "Mid-level Intermediate Representation",
        "answer_hi": "Mid-level Intermediate Representation",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which method is used to remove an element from a Vec?",
        "question_hi": "Vec से एलिमेंट हटाने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["remove", "pop", "delete", "Both remove and pop"],
        "options_hi": ["remove", "pop", "delete", "दोनों remove और pop"],
        "answer_en": "Both remove and pop",
        "answer_hi": "दोनों remove और pop",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the purpose of 'std::mem::swap'?",
        "question_hi": "'std::mem::swap' का उद्देश्य क्या है?",
        "options_en": ["Exchange values between two variables", "Swap memory locations", "Exchange pointers", "All of the above"],
        "options_hi": ["दो वेरिएबल्स के बीच वैल्यूज एक्सचेंज करना", "मेमोरी लोकेशन स्वैप करना", "पॉइंटर्स एक्सचेंज करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which keyword is used to create a new scope?",
        "question_hi": "नया स्कोप बनाने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["{} braces", "scope", "block", "new"],
        "options_hi": ["{} ब्रेसिज़", "scope", "block", "new"],
        "answer_en": "{} braces",
        "answer_hi": "{} ब्रेसिज़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the type of 'Some(5)'?",
        "question_hi": "'Some(5)' का टाइप क्या है?",
        "options_en": ["Option<i32>", "Result<i32, Error>", "i32", "bool"],
        "options_hi": ["Option<i32>", "Result<i32, Error>", "i32", "bool"],
        "answer_en": "Option<i32>",
        "answer_hi": "Option<i32>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which method converts a Result to an Option?",
        "question_hi": "कौन सी मेथड Result को Option में कन्वर्ट करती है?",
        "options_en": ["ok", "unwrap", "to_option", "convert"],
        "options_hi": ["ok", "unwrap", "to_option", "convert"],
        "answer_en": "ok",
        "answer_hi": "ok",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the purpose of 'std::fs::read_to_string'?",
        "question_hi": "'std::fs::read_to_string' का उद्देश्य क्या है?",
        "options_en": ["Read file contents as string", "Convert file to string", "Read string from file", "All of the above"],
        "options_hi": ["फाइल कंटेंट को स्ट्रिंग के रूप में पढ़ना", "फाइल को स्ट्रिंग में कन्वर्ट करना", "फाइल से स्ट्रिंग पढ़ना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which trait is used for iterator functionality?",
        "question_hi": "इटरेटर फंक्शनैलिटी के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["Iterator", "Iter", "Next", "Sequence"],
        "options_hi": ["Iterator", "Iter", "Next", "Sequence"],
        "answer_en": "Iterator",
        "answer_hi": "Iterator",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the purpose of 'std::process::Command'?",
        "question_hi": "'std::process::Command' का उद्देश्य क्या है?",
        "options_en": ["Execute external commands", "Command pattern implementation", "Process management", "All of the above"],
        "options_hi": ["एक्सटर्नल कमांड्स एक्जीक्यूट करना", "कमांड पैटर्न इम्प्लीमेंटेशन", "प्रोसेस मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which method is used to check if an Option is Some?",
        "question_hi": "Option के Some होने की जांच के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["is_some", "is_none", "contains", "Both is_some and is_none"],
        "options_hi": ["is_some", "is_none", "contains", "दोनों is_some और is_none"],
        "answer_en": "Both is_some and is_none",
        "answer_hi": "दोनों is_some और is_none",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the purpose of 'std::collections::HashMap'?",
        "question_hi": "'std::collections::HashMap' का उद्देश्य क्या है?",
        "options_en": ["Key-value storage", "Hash table implementation", "Map data structure", "All of the above"],
        "options_hi": ["की-वैल्यू स्टोरेज", "हैश टेबल इम्प्लीमेंटेशन", "मैप डेटा स्ट्रक्चर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which macro is used for compile-time assertions?",
        "question_hi": "कंपाइल-टाइम असेर्शन के लिए किस मैक्रो का उपयोग किया जाता है?",
        "options_en": ["assert!", "debug_assert!", "static_assert!", "compile_assert!"],
        "options_hi": ["assert!", "debug_assert!", "static_assert!", "compile_assert!"],
        "answer_en": "assert!",
        "answer_hi": "assert!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the purpose of 'std::sync::Arc'?",
        "question_hi": "'std::sync::Arc' का उद्देश्य क्या है?",
        "options_en": ["Atomic reference counting", "Thread-safe shared ownership", "Concurrent data sharing", "All of the above"],
        "options_hi": ["एटॉमिक रिफरेन्स काउंटिंग", "थ्रेड-सेफ शेयर्ड ओनरशिप", "कंकरंट डेटा शेयरिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which method is used to convert a string to a number?",
        "question_hi": "स्ट्रिंग को नंबर में कन्वर्ट करने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["parse", "to_i32", "convert", "as_number"],
        "options_hi": ["parse", "to_i32", "convert", "as_number"],
        "answer_en": "parse",
        "answer_hi": "parse",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the purpose of 'std::option::Option'?",
        "question_hi": "'std::option::Option' का उद्देश्य क्या है?",
        "options_en": ["Represent optional values", "Handle null safety", "Optional type wrapper", "All of the above"],
        "options_hi": ["ऑप्शनल वैल्यूज रिप्रेजेंट करना", "नल सेफ्टी हैंडल करना", "ऑप्शनल टाइप रैपर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which trait is used for copying values?",
        "question_hi": "वैल्यूज कॉपी करने के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["Copy", "Clone", "Duplicate", "Both Copy and Clone"],
        "options_hi": ["Copy", "Clone", "Duplicate", "दोनों Copy और Clone"],
        "answer_en": "Both Copy and Clone",
        "answer_hi": "दोनों Copy और Clone",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the purpose of 'std::result::Result'?",
        "question_hi": "'std::result::Result' का उद्देश्य क्या है?",
        "options_en": ["Error handling", "Success/failure representation", "Monadic error handling", "All of the above"],
        "options_hi": ["एरर हैंडलिंग", "सक्सेस/फेल्योर रिप्रेजेंटेशन", "मोनैडिक एरर हैंडलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which method is used to iterate over a range?",
        "question_hi": "रेंज पर इटरेट करने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["for loop with ..", "range", "iter", "All of the above"],
        "options_hi": [".. के साथ for लूप", "range", "iter", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the purpose of 'std::boxed::Box'?",
        "question_hi": "'std::boxed::Box' का उद्देश्य क्या है?",
        "options_en": ["Heap allocation", "Owned pointer", "Dynamic memory", "All of the above"],
        "options_hi": ["हीप अलोकेशन", "ओन्ड पॉइंटर", "डायनामिक मेमोरी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which macro is used for vector creation?",
        "question_hi": "वेक्टर क्रिएशन के लिए किस मैक्रो का उपयोग किया जाता है?",
        "options_en": ["vec!", "vector!", "Vec::new", "Both vec! and Vec::new"],
        "options_hi": ["vec!", "vector!", "Vec::new", "दोनों vec! और Vec::new"],
        "answer_en": "Both vec! and Vec::new",
        "answer_hi": "दोनों vec! और Vec::new",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the purpose of 'std::cell::RefCell'?",
        "question_hi": "'std::cell::RefCell' का उद्देश्य क्या है?",
        "options_en": ["Interior mutability", "Runtime borrow checking", "Mutable shared data", "All of the above"],
        "options_hi": ["इंटीरियर म्यूटेबिलिटी", "रनटाइम बोरो चेकिंग", "म्यूटेबल शेयर्ड डेटा", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which method is used for string concatenation?",
        "question_hi": "स्ट्रिंग कॉन्कटीनेशन के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["+ operator", "push_str", "format!", "All of the above"],
        "options_hi": ["+ ऑपरेटर", "push_str", "format!", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the purpose of 'std::sync::Mutex'?",
        "question_hi": "'std::sync::Mutex' का उद्देश्य क्या है?",
        "options_en": ["Mutual exclusion", "Thread synchronization", "Locking mechanism", "All of the above"],
        "options_hi": ["म्यूचुअल एक्सक्लूजन", "थ्रेड सिंक्रोनाइज़ेशन", "लॉकिंग मैकेनिज्म", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which trait is used for default values?",
        "question_hi": "डिफॉल्ट वैल्यूज के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["Default", "DefaultValue", "Init", "New"],
        "options_hi": ["Default", "DefaultValue", "Init", "New"],
        "answer_en": "Default",
        "answer_hi": "Default",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the purpose of 'std::mem::size_of'?",
        "question_hi": "'std::mem::size_of' का उद्देश्य क्या है?",
        "options_en": ["Get type size in bytes", "Memory size calculation", "Compile-time size info", "All of the above"],
        "options_hi": ["टाइप साइज बाइट्स में प्राप्त करना", "मेमोरी साइज कैलकुलेशन", "कंपाइल-टाइम साइज इन्फो", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which method is used to handle multiple error types?",
        "question_hi": "मल्टीपल एरर टाइप्स हैंडल करने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["map_err", "and_then", "or_else", "All of the above"],
        "options_hi": ["map_err", "and_then", "or_else", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the purpose of 'std::convert::From'?",
        "question_hi": "'std::convert::From' का उद्देश्य क्या है?",
        "options_en": ["Type conversion", "Value transformation", "Trait implementation", "All of the above"],
        "options_hi": ["टाइप कन्वर्जन", "वैल्यू ट्रांसफॉर्मेशन", "ट्रेट इम्प्लीमेंटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which macro is used for panic with message?",
        "question_hi": "मैसेज के साथ पैनिक के लिए किस मैक्रो का उपयोग किया जाता है?",
        "options_en": ["panic!", "error!", "crash!", "fail!"],
        "options_hi": ["panic!", "error!", "crash!", "fail!"],
        "answer_en": "panic!",
        "answer_hi": "panic!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the purpose of 'std::iter::Iterator'?",
        "question_hi": "'std::iter::Iterator' का उद्देश्य क्या है?",
        "options_en": ["Sequence traversal", "Lazy evaluation", "Collection processing", "All of the above"],
        "options_hi": ["सीक्वेंस ट्रैवर्सल", "लेजी एवैल्यूएशन", "कलेक्शन प्रोसेसिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which method is used for case-insensitive string comparison?",
        "question_hi": "केस-इनसेंसिटिव स्ट्रिंग कम्पेयरिजन के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["eq_ignore_ascii_case", "case_insensitive_eq", "ignore_case", "to_lowercase then =="],
        "options_hi": ["eq_ignore_ascii_case", "case_insensitive_eq", "ignore_case", "to_lowercase फिर =="],
        "answer_en": "eq_ignore_ascii_case",
        "answer_hi": "eq_ignore_ascii_case",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the purpose of 'std::default::Default'?",
        "question_hi": "'std::default::Default' का उद्देश्य क्या है?",
        "options_en": ["Default values", "Initialization", "Zero values", "All of the above"],
        "options_hi": ["डिफॉल्ट वैल्यूज", "इनिशियलाइज़ेशन", "जीरो वैल्यूज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which trait is used for hashing?",
        "question_hi": "हैशिंग के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["Hash", "Hasher", "Hashable", "Both Hash and Hasher"],
        "options_hi": ["Hash", "Hasher", "Hashable", "दोनों Hash और Hasher"],
        "answer_en": "Both Hash and Hasher",
        "answer_hi": "दोनों Hash और Hasher",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the purpose of 'std::ops::Drop'?",
        "question_hi": "'std::ops::Drop' का उद्देश्य क्या है?",
        "options_en": ["Custom cleanup", "Destructor implementation", "Resource release", "All of the above"],
        "options_hi": ["कस्टम क्लीनअप", "डिस्ट्रक्टर इम्प्लीमेंटेशन", "रिसोर्स रिलीज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which method is used to convert between string types?",
        "question_hi": "स्ट्रिंग टाइप्स के बीच कन्वर्ट करने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["to_string", "into", "as_str", "All of the above"],
        "options_hi": ["to_string", "into", "as_str", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the purpose of 'std::cmp::PartialEq'?",
        "question_hi": "'std::cmp::PartialEq' का उद्देश्य क्या है?",
        "options_en": ["Equality comparison", "Partial equality", "== operator implementation", "All of the above"],
        "options_hi": ["इक्वलिटी कम्पेयरिजन", "पार्शियल इक्वलिटी", "== ऑपरेटर इम्प्लीमेंटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which macro is used for documentation comments?",
        "question_hi": "डॉक्युमेंटेशन कमेंट्स के लिए किस मैक्रो का उपयोग किया जाता है?",
        "options_en": ["///", "//!", "/** */", "All of the above"],
        "options_hi": ["///", "//!", "/** */", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the purpose of 'std::sync::RwLock'?",
        "question_hi": "'std::sync::RwLock' का उद्देश्य क्या है?",
        "options_en": ["Read-write lock", "Multiple readers", "Single writer", "All of the above"],
        "options_hi": ["रीड-राइट लॉक", "मल्टीपल रीडर", "सिंगल राइटर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which method is used for floating-point NaN check?",
        "question_hi": "फ्लोटिंग-पॉइंट NaN चेक के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["is_nan", "is_finite", "is_infinite", "All of the above"],
        "options_hi": ["is_nan", "is_finite", "is_infinite", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the purpose of 'std::num::Wrapping'?",
        "question_hi": "'std::num::Wrapping' का उद्देश्य क्या है?",
        "options_en": ["Integer overflow handling", "Wrapping arithmetic", "Modular arithmetic", "All of the above"],
        "options_hi": ["इंटीजर ओवरफ्लो हैंडलिंग", "रैपिंग अरिथमेटिक", "मॉड्यूलर अरिथमेटिक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which trait is used for function call syntax?",
        "question_hi": "फंक्शन कॉल सिंटैक्स के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["Fn", "Call", "Invoke", "Execute"],
        "options_hi": ["Fn", "Call", "Invoke", "Execute"],
        "answer_en": "Fn",
        "answer_hi": "Fn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the purpose of 'std::mem::transmute'?",
        "question_hi": "'std::mem::transmute' का उद्देश्य क्या है?",
        "options_en": ["Unsafe type conversion", "Memory reinterpretation", "Bitwise conversion", "All of the above"],
        "options_hi": ["अनसेफ टाइप कन्वर्जन", "मेमोरी रिइंटरप्रिटेशन", "बिटवाइज कन्वर्जन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which method is used for string slicing?",
        "question_hi": "स्ट्रिंग स्लाइसिंग के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["get", "slice", "[] indexing", "All of the above"],
        "options_hi": ["get", "slice", "[] इंडेक्सिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the purpose of 'std::thread::spawn'?",
        "question_hi": "'std::thread::spawn' का उद्देश्य क्या है?",
        "options_en": ["Create new thread", "Thread execution", "Concurrent programming", "All of the above"],
        "options_hi": ["नया थ्रेड बनाना", "थ्रेड एक्जीक्यूशन", "कंकरंट प्रोग्रामिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which trait is used for ordering?",
        "question_hi": "ऑर्डरिंग के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["Ord", "Ordering", "Compare", "PartialOrd"],
        "options_hi": ["Ord", "Ordering", "Compare", "PartialOrd"],
        "answer_en": "Ord",
        "answer_hi": "Ord",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the purpose of 'std::path::Path'?",
        "question_hi": "'std::path::Path' का उद्देश्य क्या है?",
        "options_en": ["Path manipulation", "File system paths", "Cross-platform paths", "All of the above"],
        "options_hi": ["पाथ मैनिपुलेशन", "फाइल सिस्टम पाथ", "क्रॉस-प्लेटफॉर्म पाथ", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which method is used for error conversion?",
        "question_hi": "एरर कन्वर्जन के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["map_err", "into", "convert", "All of the above"],
        "options_hi": ["map_err", "into", "convert", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the purpose of 'std::fs::File'?",
        "question_hi": "'std::fs::File' का उद्देश्य क्या है?",
        "options_en": ["File handling", "File I/O operations", "File system access", "All of the above"],
        "options_hi": ["फाइल हैंडलिंग", "फाइल I/O ऑपरेशन", "फाइल सिस्टम एक्सेस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which macro is used for conditional compilation?",
        "question_hi": "कंडीशनल कंपाइलेशन के लिए किस मैक्रो का उपयोग किया जाता है?",
        "options_en": ["cfg!", "#[cfg]", "conditional!", "All of the above"],
        "options_hi": ["cfg!", "#[cfg]", "conditional!", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the purpose of 'std::io::Read'?",
        "question_hi": "'std::io::Read' का उद्देश्य क्या है?",
        "options_en": ["Input operations", "Reading data", "Stream input", "All of the above"],
        "options_hi": ["इनपुट ऑपरेशन", "डेटा रीडिंग", "स्ट्रीम इनपुट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which method is used for iterator transformation?",
        "question_hi": "इटरेटर ट्रांसफॉर्मेशन के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["map", "filter", "fold", "All of the above"],
        "options_hi": ["map", "filter", "fold", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the purpose of 'std::io::Write'?",
        "question_hi": "'std::io::Write' का उद्देश्य क्या है?",
        "options_en": ["Output operations", "Writing data", "Stream output", "All of the above"],
        "options_hi": ["आउटपुट ऑपरेशन", "डेटा राइटिंग", "स्ट्रीम आउटपुट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which trait is used for string representation?",
        "question_hi": "स्ट्रिंग रिप्रेजेंटेशन के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["Display", "ToString", "Stringify", "Both Display and ToString"],
        "options_hi": ["Display", "ToString", "Stringify", "दोनों Display और ToString"],
        "answer_en": "Both Display and ToString",
        "answer_hi": "दोनों Display और ToString",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the purpose of 'std::sync::Once'?",
        "question_hi": "'std::sync::Once' का उद्देश्य क्या है?",
        "options_en": ["One-time initialization", "Thread-safe init", "Singleton pattern", "All of the above"],
        "options_hi": ["वन-टाइम इनिशियलाइज़ेशन", "थ्रेड-सेफ इनिट", "सिंगलटन पैटर्न", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which method is used for optional value extraction?",
        "question_hi": "ऑप्शनल वैल्यू एक्सट्रैक्शन के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["unwrap", "expect", "unwrap_or", "All of the above"],
        "options_hi": ["unwrap", "expect", "unwrap_or", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the purpose of 'std::collections::BinaryHeap'?",
        "question_hi": "'std::collections::BinaryHeap' का उद्देश्य क्या है?",
        "options_en": ["Priority queue", "Heap data structure", "Max/min heap", "All of the above"],
        "options_hi": ["प्रायोरिटी क्यू", "हीप डेटा स्ट्रक्चर", "मैक्स/मिन हीप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which trait is used for borrowing?",
        "question_hi": "बोरोइंग के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["Borrow", "AsRef", "Deref", "All of the above"],
        "options_hi": ["Borrow", "AsRef", "Deref", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the purpose of 'std::net::TcpListener'?",
        "question_hi": "'std::net::TcpListener' का उद्देश्य क्या है?",
        "options_en": ["TCP server", "Network listening", "Connection acceptance", "All of the above"],
        "options_hi": ["TCP सर्वर", "नेटवर्क लिसनिंग", "कनेक्शन एक्सेप्टेंस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which method is used for character iteration?",
        "question_hi": "कैरेक्टर इटरेशन के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["chars", "char_indices", "bytes", "All of the above"],
        "options_hi": ["chars", "char_indices", "bytes", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the purpose of 'std::time::Duration'?",
        "question_hi": "'std::time::Duration' का उद्देश्य क्या है?",
        "options_en": ["Time intervals", "Time measurement", "Time calculations", "All of the above"],
        "options_hi": ["टाइम इंटरवल", "टाइम मेजरमेंट", "टाइम कैलकुलेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which trait is used for slicing?",
        "question_hi": "स्लाइसिंग के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["Slice", "Index", "AsRef", "All of the above"],
        "options_hi": ["Slice", "Index", "AsRef", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the purpose of 'std::env::vars'?",
        "question_hi": "'std::env::vars' का उद्देश्य क्या है?",
        "options_en": ["Environment variables", "System configuration", "Process environment", "All of the above"],
        "options_hi": ["एनवायरनमेंट वेरिएबल्स", "सिस्टम कॉन्फिगरेशन", "प्रोसेस एनवायरनमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which method is used for floating-point rounding?",
        "question_hi": "फ्लोटिंग-पॉइंट राउंडिंग के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["round", "ceil", "floor", "All of the above"],
        "options_hi": ["round", "ceil", "floor", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the purpose of 'std::cmp::Ordering'?",
        "question_hi": "'std::cmp::Ordering' का उद्देश्य क्या है?",
        "options_en": ["Comparison results", "Sorting order", "Three-way comparison", "All of the above"],
        "options_hi": ["कम्पेयरिजन रिजल्ट", "सॉर्टिंग ऑर्डर", "थ्री-वे कम्पेयरिजन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which trait is used for type conversion?",
        "question_hi": "टाइप कन्वर्जन के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["From", "Into", "AsRef", "All of the above"],
        "options_hi": ["From", "Into", "AsRef", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the purpose of 'std::fs::metadata'?",
        "question_hi": "'std::fs::metadata' का उद्देश्य क्या है?",
        "options_en": ["File information", "File stats", "File metadata", "All of the above"],
        "options_hi": ["फाइल इन्फॉर्मेशन", "फाइल स्टैट्स", "फाइल मेटाडेटा", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which method is used for string searching?",
        "question_hi": "स्ट्रिंग सर्चिंग के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["find", "contains", "starts_with", "All of the above"],
        "options_hi": ["find", "contains", "starts_with", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the purpose of 'std::io::BufReader'?",
        "question_hi": "'std::io::BufReader' का उद्देश्य क्या है?",
        "options_en": ["Buffered reading", "Performance optimization", "Efficient I/O", "All of the above"],
        "options_hi": ["बफर्ड रीडिंग", "परफॉर्मेंस ऑप्टिमाइज़ेशन", "एफिशिएंट I/O", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which trait is used for iterator creation?",
        "question_hi": "इटरेटर क्रिएशन के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["IntoIterator", "Iter", "Iterator", "All of the above"],
        "options_hi": ["IntoIterator", "Iter", "Iterator", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the purpose of 'std::collections::LinkedList'?",
        "question_hi": "'std::collections::LinkedList' का उद्देश्य क्या है?",
        "options_en": ["Doubly-linked list", "O(1) insertion", "Sequential access", "All of the above"],
        "options_hi": ["डबली-लिंक्ड लिस्ट", "O(1) इंसर्शन", "सीक्वेंशियल एक्सेस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which method is used for memory allocation?",
        "question_hi": "मेमोरी अलोकेशन के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["Box::new", "Vec::with_capacity", "String::with_capacity", "All of the above"],
        "options_hi": ["Box::new", "Vec::with_capacity", "String::with_capacity", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the purpose of 'std::sync::Barrier'?",
        "question_hi": "'std::sync::Barrier' का उद्देश्य क्या है?",
        "options_en": ["Thread synchronization", "Wait for multiple threads", "Coordination point", "All of the above"],
        "options_hi": ["थ्रेड सिंक्रोनाइज़ेशन", "मल्टीपल थ्रेड्स के लिए वेट", "कोऑर्डिनेशन पॉइंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which trait is used for fallible conversions?",
        "question_hi": "फेलिबल कन्वर्जन के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["TryFrom", "TryInto", "FromStr", "All of the above"],
        "options_hi": ["TryFrom", "TryInto", "FromStr", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the purpose of 'std::io::Seek'?",
        "question_hi": "'std::io::Seek' का उद्देश्य क्या है?",
        "options_en": ["Stream positioning", "Random access", "File seeking", "All of the above"],
        "options_hi": ["स्ट्रीम पोजिशनिंग", "रैंडम एक्सेस", "फाइल सीकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which method is used for string trimming?",
        "question_hi": "स्ट्रिंग ट्रिमिंग के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["trim", "trim_start", "trim_end", "All of the above"],
        "options_hi": ["trim", "trim_start", "trim_end", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the purpose of 'std::future::Future'?",
        "question_hi": "'std::future::Future' का उद्देश्य क्या है?",
        "options_en": ["Asynchronous programming", "Promise pattern", "Async/await foundation", "All of the above"],
        "options_hi": ["असिंक्रोनस प्रोग्रामिंग", "प्रॉमिस पैटर्न", "Async/await फाउंडेशन", "उपरोक्त सभी"],
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