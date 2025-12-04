const questions=[
     {
        "num": 1,
        "question_en": "How do you create a tuple in Rust?",
        "question_hi": "Rust में tuple कैसे बनाते हैं?",
        "options_en": ["(value1, value2)", "tuple(value1, value2)", "[value1, value2]", "{value1, value2}"],
        "options_hi": ["(value1, value2)", "tuple(value1, value2)", "[value1, value2]", "{value1, value2}"],
        "answer_en": "(value1, value2)",
        "answer_hi": "(value1, value2)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which keyword is used to declare a mutable variable in Rust?",
        "question_hi": "Rust में म्यूटेबल वेरिएबल डिक्लेयर करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["mut", "var", "mutable", "let mut"],
        "options_hi": ["mut", "var", "mutable", "let mut"],
        "answer_en": "mut",
        "answer_hi": "mut",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
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
        "num": 4,
        "question_en": "Which of these is a valid string slice type in Rust?",
        "question_hi": "Rust में यह में से कौन सा वैलिड स्ट्रिंग स्लाइस टाइप है?",
        "options_en": ["&str", "String", "str", "&String"],
        "options_hi": ["&str", "String", "str", "&String"],
        "answer_en": "&str",
        "answer_hi": "&str",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What does the 'println!()' macro represent in Rust?",
        "question_hi": "Rust में 'println!()' मैक्रो क्या रिप्रेजेंट करता है?",
        "options_en": ["A macro for printing to stdout", "A function for file output", "A debug tool", "A string concatenation tool"],
        "options_hi": ["stdout पर प्रिंट करने के लिए एक मैक्रो", "फाइल आउटपुट के लिए एक फंक्शन", "एक डीबग टूल", "स्ट्रिंग कॉन्केटनेशन टूल"],
        "answer_en": "A macro for printing to stdout",
        "answer_hi": "stdout पर प्रिंट करने के लिए एक मैक्रो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you create a new vector in Rust?",
        "question_hi": "Rust में नया वेक्टर कैसे बनाते हैं?",
        "options_en": ["Vec::new()", "new Vector()", "vector![]", "Array::new()"],
        "options_hi": ["Vec::new()", "new Vector()", "vector![]", "Array::new()"],
        "answer_en": "Vec::new()",
        "answer_hi": "Vec::new()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which trait is used for string conversion in Rust?",
        "question_hi": "Rust में स्ट्रिंग कन्वर्जन के लिए किस trait का उपयोग किया जाता है?",
        "options_en": ["ToString", "FromStr", "Convert", "Stringify"],
        "options_hi": ["ToString", "FromStr", "Convert", "Stringify"],
        "answer_en": "ToString",
        "answer_hi": "ToString",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the purpose of the 'match' keyword in Rust?",
        "question_hi": "Rust में 'match' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Pattern matching", "String comparison", "Loop control", "Error handling"],
        "options_hi": ["पैटर्न मैचिंग", "स्ट्रिंग कम्पेरिजन", "लूप कंट्रोल", "एरर हैंडलिंग"],
        "answer_en": "Pattern matching",
        "answer_hi": "पैटर्न मैचिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "How do you define a constant in Rust?",
        "question_hi": "Rust में कॉन्स्टेंट कैसे डिफाइन करते हैं?",
        "options_en": ["const", "let", "static", "define"],
        "options_hi": ["const", "let", "static", "define"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which operator is used for the remainder operation in Rust?",
        "question_hi": "Rust में रिमेंडर ऑपरेशन के लिए किस ऑपरेटर का उपयोग किया जाता है?",
        "options_en": ["%", "mod", "rem", "/"],
        "options_hi": ["%", "mod", "rem", "/"],
        "answer_en": "%",
        "answer_hi": "%",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the entry point of a Rust program?",
        "question_hi": "Rust प्रोग्राम का एंट्री पॉइंट क्या है?",
        "options_en": ["main function", "start function", "init function", "begin function"],
        "options_hi": ["main फंक्शन", "start फंक्शन", "init फंक्शन", "begin फंक्शन"],
        "answer_en": "main function",
        "answer_hi": "main फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you create a struct in Rust?",
        "question_hi": "Rust में struct कैसे बनाते हैं?",
        "options_en": ["struct MyStruct { }", "class MyStruct { }", "type MyStruct = struct;", "def struct MyStruct;"],
        "options_hi": ["struct MyStruct { }", "class MyStruct { }", "type MyStruct = struct;", "def struct MyStruct;"],
        "answer_en": "struct MyStruct { }",
        "answer_hi": "struct MyStruct { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which macro is used for printing debug information?",
        "question_hi": "डीबग इनफार्मेशन प्रिंट करने के लिए किस मैक्रो का उपयोग किया जाता है?",
        "options_en": ["dbg!()", "debug!()", "print_debug!()", "log!()"],
        "options_hi": ["dbg!()", "debug!()", "print_debug!()", "log!()"],
        "answer_en": "dbg!()",
        "answer_hi": "dbg!()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the purpose of the 'impl' keyword?",
        "question_hi": "'impl' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Implement functions for a type", "Import modules", "Implement traits", "Both implement functions and traits"],
        "options_hi": ["टाइप के लिए फंक्शन्स इम्प्लीमेंट करना", "मॉड्यूल्स इम्पोर्ट करना", "ट्रेट्स इम्प्लीमेंट करना", "फंक्शन्स और ट्रेट्स दोनों इम्प्लीमेंट करना"],
        "answer_en": "Both implement functions and traits",
        "answer_hi": "फंक्शन्स और ट्रेट्स दोनों इम्प्लीमेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "How do you handle errors without panicking in Rust?",
        "question_hi": "Rust में पैनिक किए बिना एरर्स को कैसे हैंडल करते हैं?",
        "options_en": ["Using Result type", "Using Option type", "Using catch blocks", "Using error macros"],
        "options_hi": ["Result टाइप का उपयोग करके", "Option टाइप का उपयोग करके", "catch ब्लॉक्स का उपयोग करके", "एरर मैक्रोज़ का उपयोग करके"],
        "answer_en": "Using Result type",
        "answer_hi": "Result टाइप का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the difference between 'String' and '&str'?",
        "question_hi": "'String' और '&str' में क्या अंतर है?",
        "options_en": ["String is owned, &str is borrowed", "String is mutable, &str is immutable", "String is on heap, &str can be anywhere", "All of the above"],
        "options_hi": ["String owned है, &str borrowed है", "String म्यूटेबल है, &str इम्यूटेबल है", "String हीप पर है, &str कहीं भी हो सकता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which trait allows values to be compared for equality?",
        "question_hi": "कौन सा trait वैल्यूज को इक्वलिटी के लिए कम्पेयर करने की अनुमति देता है?",
        "options_en": ["PartialEq", "Eq", "Compare", "Both PartialEq and Eq"],
        "options_hi": ["PartialEq", "Eq", "Compare", "PartialEq और Eq दोनों"],
        "answer_en": "Both PartialEq and Eq",
        "answer_hi": "PartialEq और Eq दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you create a new thread in Rust?",
        "question_hi": "Rust में नया थ्रेड कैसे बनाते हैं?",
        "options_en": ["thread::spawn()", "Thread::new()", "spawn_thread()", "create_thread()"],
        "options_hi": ["thread::spawn()", "Thread::new()", "spawn_thread()", "create_thread()"],
        "answer_en": "thread::spawn()",
        "answer_hi": "thread::spawn()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of the '?' operator in Rust?",
        "question_hi": "Rust में '?' ऑपरेटर का उद्देश्य क्या है?",
        "options_en": ["Error propagation", "Optional unwrapping", "Boolean operation", "String operation"],
        "options_hi": ["एरर प्रोपेगेशन", "ऑप्शनल अनरैपिंग", "बूलियन ऑपरेशन", "स्ट्रिंग ऑपरेशन"],
        "answer_en": "Error propagation",
        "answer_hi": "एरर प्रोपेगेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which collection type provides key-value storage?",
        "question_hi": "कौन सा कलेक्शन टाइप की-वैल्यू स्टोरेज प्रोवाइड करता है?",
        "options_en": ["HashMap", "Vec", "Array", "LinkedList"],
        "options_hi": ["HashMap", "Vec", "Array", "LinkedList"],
        "answer_en": "HashMap",
        "answer_hi": "HashMap",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What does the 'derive' attribute do?",
        "question_hi": "'derive' एट्रिब्यूट क्या करता है?",
        "options_en": ["Automatically implements traits", "Creates derived classes", "Generates documentation", "Compiles code faster"],
        "options_hi": ["ऑटोमैटिकली ट्रेट्स इम्प्लीमेंट करता है", "डेराइव्ड क्लासेज बनाता है", "डॉक्यूमेंटेशन जेनरेट करता है", "कोड को तेज कम्पाइल करता है"],
        "answer_en": "Automatically implements traits",
        "answer_hi": "ऑटोमैटिकली ट्रेट्स इम्प्लीमेंट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you create an array of 5 integers in Rust?",
        "question_hi": "Rust में 5 इंटीजर्स की ऐरे कैसे बनाते हैं?",
        "options_en": ["[i32; 5]", "Array<i32, 5>", "vec![0; 5]", "array![5]"],
        "options_hi": ["[i32; 5]", "Array<i32, 5>", "vec![0; 5]", "array![5]"],
        "answer_en": "[i32; 5]",
        "answer_hi": "[i32; 5]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which trait is used for ordering values?",
        "question_hi": "वैल्यूज को ऑर्डर करने के लिए किस trait का उपयोग किया जाता है?",
        "options_en": ["PartialOrd", "Ord", "Compare", "Both PartialOrd and Ord"],
        "options_hi": ["PartialOrd", "Ord", "Compare", "PartialOrd और Ord दोनों"],
        "answer_en": "Both PartialOrd and Ord",
        "answer_hi": "PartialOrd और Ord दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the purpose of the 'loop' keyword?",
        "question_hi": "'loop' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Infinite loop", "For loop", "While loop", "Do-while loop"],
        "options_hi": ["इनफिनाइट लूप", "फॉर लूप", "व्हाइल लूप", "डू-व्हाइल लूप"],
        "answer_en": "Infinite loop",
        "answer_hi": "इनफिनाइट लूप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "How do you convert a string to an integer?",
        "question_hi": "स्ट्रिंग को इंटीजर में कैसे कन्वर्ट करते हैं?",
        "options_en": ["parse() method", "to_int()", "convert()", "as_int()"],
        "options_hi": ["parse() मेथड", "to_int()", "convert()", "as_int()"],
        "answer_en": "parse() method",
        "answer_hi": "parse() मेथड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the purpose of the 'if let' syntax?",
        "question_hi": "'if let' सिंटैक्स का उद्देश्य क्या है?",
        "options_en": ["Concise pattern matching", "Conditional assignment", "Loop control", "Error handling"],
        "options_hi": ["संक्षिप्त पैटर्न मैचिंग", "कंडीशनल असाइनमेंट", "लूप कंट्रोल", "एरर हैंडलिंग"],
        "answer_en": "Concise pattern matching",
        "answer_hi": "संक्षिप्त पैटर्न मैचिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which macro is used for string formatting?",
        "question_hi": "स्ट्रिंग फॉर्मेटिंग के लिए किस मैक्रो का उपयोग किया जाता है?",
        "options_en": ["format!()", "str_format!()", "string!()", "fmt!()"],
        "options_hi": ["format!()", "str_format!()", "string!()", "fmt!()"],
        "answer_en": "format!()",
        "answer_hi": "format!()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What does the 'move' keyword do in closures?",
        "question_hi": "क्लोजर्स में 'move' कीवर्ड क्या करता है?",
        "options_en": ["Takes ownership of captured variables", "Moves the closure", "Copies variables", "References variables"],
        "options_hi": ["कैप्चर्ड वेरिएबल्स की ओनरशिप लेता है", "क्लोजर को मूव करता है", "वेरिएबल्स को कॉपी करता है", "वेरिएबल्स को रेफरेंस करता है"],
        "answer_en": "Takes ownership of captured variables",
        "answer_hi": "कैप्चर्ड वेरिएबल्स की ओनरशिप लेता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How do you create a static variable?",
        "question_hi": "स्टेटिक वेरिएबल कैसे बनाते हैं?",
        "options_en": ["static", "const", "let static", "global"],
        "options_hi": ["static", "const", "let static", "global"],
        "answer_en": "static",
        "answer_hi": "static",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the purpose of the 'break' keyword?",
        "question_hi": "'break' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Exit a loop", "Skip iteration", "Stop program", "Return value"],
        "options_hi": ["लूप से बाहर निकलना", "इटरेशन स्किप करना", "प्रोग्राम रोकना", "वैल्यू रिटर्न करना"],
        "answer_en": "Exit a loop",
        "answer_hi": "लूप से बाहर निकलना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which trait is used for deep copying?",
        "question_hi": "डीप कॉपीिंग के लिए किस trait का उपयोग किया जाता है?",
        "options_en": ["Clone", "Copy", "DeepClone", "Duplicate"],
        "options_hi": ["Clone", "Copy", "DeepClone", "Duplicate"],
        "answer_en": "Clone",
        "answer_hi": "Clone",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 32,
        "question_en": "What is the primary purpose of Rust's ownership system?",
        "question_hi": "Rust के ownership system का प्राथमिक उद्देश्य क्या है?",
        "options_en": ["Memory safety without garbage collection", "Faster compilation", "Automatic memory allocation", "Better error messages"],
        "options_hi": ["गार्बेज कलेक्शन के बिना मेमोरी सेफ्टी", "तेज कम्पाइलेशन", "ऑटोमैटिक मेमोरी अलोकेशन", "बेहतर एरर मैसेज"],
        "answer_en": "Memory safety without garbage collection",
        "answer_hi": "गार्बेज कलेक्शन के बिना मेमोरी सेफ्टी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of the 'continue' keyword?",
        "question_hi": "'continue' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Skip to next iteration", "Exit loop", "Restart loop", "Pause loop"],
        "options_hi": ["अगले इटरेशन पर स्किप करना", "लूप से बाहर निकलना", "लूप रीस्टार्ट करना", "लूप पॉज करना"],
        "answer_en": "Skip to next iteration",
        "answer_hi": "अगले इटरेशन पर स्किप करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which method is used to add elements to a vector?",
        "question_hi": "वेक्टर में एलिमेंट्स एड करने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["push()", "add()", "append()", "insert()"],
        "options_hi": ["push()", "add()", "append()", "insert()"],
        "answer_en": "push()",
        "answer_hi": "push()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What does the 'dyn' keyword indicate?",
        "question_hi": "'dyn' कीवर्ड क्या इंडिकेट करता है?",
        "options_en": ["Dynamic dispatch", "Dynamic typing", "Dynamic memory", "Dynamic linking"],
        "options_hi": ["डायनामिक डिस्पैच", "डायनामिक टाइपिंग", "डायनामिक मेमोरी", "डायनामिक लिंकिंग"],
        "answer_en": "Dynamic dispatch",
        "answer_hi": "डायनामिक डिस्पैच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do you create a slice from an array?",
        "question_hi": "ऐरे से स्लाइस कैसे बनाते हैं?",
        "options_en": ["&array[start..end]", "slice(array)", "array.slice()", "array.as_slice()"],
        "options_hi": ["&array[start..end]", "slice(array)", "array.slice()", "array.as_slice()"],
        "answer_en": "&array[start..end]",
        "answer_hi": "&array[start..end]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of the 'where' clause?",
        "question_hi": "'where' क्लॉज का उद्देश्य क्या है?",
        "options_en": ["Specify trait bounds", "Define conditions", "Import traits", "Filter types"],
        "options_hi": ["ट्रेट बाउंड्स स्पेसिफाई करना", "कंडीशन्स डिफाइन करना", "ट्रेट्स इम्पोर्ट करना", "टाइप्स फिल्टर करना"],
        "answer_en": "Specify trait bounds",
        "answer_hi": "ट्रेट बाउंड्स स्पेसिफाई करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which method removes the last element from a vector?",
        "question_hi": "कौन सी मेथड वेक्टर से लास्ट एलिमेंट रिमूव करती है?",
        "options_en": ["pop()", "remove_last()", "delete()", "truncate()"],
        "options_hi": ["pop()", "remove_last()", "delete()", "truncate()"],
        "answer_en": "pop()",
        "answer_hi": "pop()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of the 'ref' keyword?",
        "question_hi": "'ref' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Pattern binding by reference", "Create reference", "Reference counting", "Return reference"],
        "options_hi": ["रेफरेंस द्वारा पैटर्न बाइंडिंग", "रेफरेंस बनाना", "रेफरेंस काउंटिंग", "रेफरेंस रिटर्न करना"],
        "answer_en": "Pattern binding by reference",
        "answer_hi": "रेफरेंस द्वारा पैटर्न बाइंडिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How do you create a boxed value?",
        "question_hi": "बॉक्स्ड वैल्यू कैसे बनाते हैं?",
        "options_en": ["Box::new(value)", "value.box()", "box value", "Box(value)"],
        "options_hi": ["Box::new(value)", "value.box()", "box value", "Box(value)"],
        "answer_en": "Box::new(value)",
        "answer_hi": "Box::new(value)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of the 'Self' keyword?",
        "question_hi": "'Self' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Refer to the current type", "Current instance", "Self reference", "Static method"],
        "options_hi": ["करंट टाइप को रेफर करना", "करंट इंस्टेंस", "सेल्फ रेफरेंस", "स्टेटिक मेथड"],
        "answer_en": "Refer to the current type",
        "answer_hi": "करंट टाइप को रेफर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which trait is used for default values?",
        "question_hi": "डिफॉल्ट वैल्यूज के लिए किस trait का उपयोग किया जाता है?",
        "options_en": ["Default", "New", "Init", "Constructor"],
        "options_hi": ["Default", "New", "Init", "Constructor"],
        "answer_en": "Default",
        "answer_hi": "Default",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "How do you create a range in Rust?",
        "question_hi": "Rust में रेंज कैसे बनाते हैं?",
        "options_en": ["start..end", "range(start, end)", "start to end", "start-end"],
        "options_hi": ["start..end", "range(start, end)", "start to end", "start-end"],
        "answer_en": "start..end",
        "answer_hi": "start..end",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the purpose of the 'pub' keyword?",
        "question_hi": "'pub' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Make item public", "Publish crate", "Public function", "Export symbol"],
        "options_hi": ["आइटम को पब्लिक बनाना", "क्रेट पब्लिश करना", "पब्लिक फंक्शन", "सिंबल एक्सपोर्ट करना"],
        "answer_en": "Make item public",
        "answer_hi": "आइटम को पब्लिक बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which method checks if an option contains a value?",
        "question_hi": "कौन सी मेथड चेक करती है कि ऑप्शन में वैल्यू है या नहीं?",
        "options_en": ["is_some()", "has_value()", "contains()", "exists()"],
        "options_hi": ["is_some()", "has_value()", "contains()", "exists()"],
        "answer_en": "is_some()",
        "answer_hi": "is_some()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What does the 'super' keyword refer to?",
        "question_hi": "'super' कीवर्ड किसे रेफर करता है?",
        "options_en": ["Parent module", "Super class", "Base trait", "Inherited type"],
        "options_hi": ["पैरेंट मॉड्यूल", "सुपर क्लास", "बेस trait", "इनहेरिटेड टाइप"],
        "answer_en": "Parent module",
        "answer_hi": "पैरेंट मॉड्यूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "How do you create a hash map with capacity?",
        "question_hi": "कैपेसिटी के साथ हैश मैप कैसे बनाते हैं?",
        "options_en": ["HashMap::with_capacity()", "HashMap::new(capacity)", "HashMap(capacity)", "new HashMap(capacity)"],
        "options_hi": ["HashMap::with_capacity()", "HashMap::new(capacity)", "HashMap(capacity)", "new HashMap(capacity)"],
        "answer_en": "HashMap::with_capacity()",
        "answer_hi": "HashMap::with_capacity()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the purpose of the 'as' keyword?",
        "question_hi": "'as' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Type casting", "Alias creation", "Module import", "Trait implementation"],
        "options_hi": ["टाइप कास्टिंग", "अलायस क्रिएशन", "मॉड्यूल इम्पोर्ट", "ट्रेट इम्प्लीमेंटेशन"],
        "answer_en": "Type casting",
        "answer_hi": "टाइप कास्टिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which trait is used for iterator transformation?",
        "question_hi": "इटरेटर ट्रांसफॉर्मेशन के लिए किस trait का उपयोग किया जाता है?",
        "options_en": ["Iterator", "IntoIterator", "FromIterator", "All of the above"],
        "options_hi": ["Iterator", "IntoIterator", "FromIterator", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you create a raw string literal?",
        "question_hi": "रॉ स्ट्रिंग लिटरल कैसे बनाते हैं?",
        "options_en": ["r\"...\"", "raw\"...\"", "string!(\"...\")", "\"..."],
        "options_hi": ["r\"...\"", "raw\"...\"", "string!(\"...\")", "\"..."],
        "answer_en": "r\"...\"",
        "answer_hi": "r\"...\"",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of the 'crate' keyword?",
        "question_hi": "'crate' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Refer to the current crate", "Create new crate", "Import crate", "Build crate"],
        "options_hi": ["करंट क्रेट को रेफर करना", "नया क्रेट बनाना", "क्रेट इम्पोर्ट करना", "क्रेट बिल्ड करना"],
        "answer_en": "Refer to the current crate",
        "answer_hi": "करंट क्रेट को रेफर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which method converts a vector to a slice?",
        "question_hi": "कौन सी मेथड वेक्टर को स्लाइस में कन्वर्ट करती है?",
        "options_en": ["as_slice()", "to_slice()", "slice()", "as_ref()"],
        "options_hi": ["as_slice()", "to_slice()", "slice()", "as_ref()"],
        "answer_en": "as_slice()",
        "answer_hi": "as_slice()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What does the 'extern' keyword do?",
        "question_hi": "'extern' कीवर्ड क्या करता है?",
        "options_en": ["Declare external functions", "Export functions", "External crate", "Foreign interface"],
        "options_hi": ["एक्सटर्नल फंक्शन्स डिक्लेयर करना", "फंक्शन्स एक्सपोर्ट करना", "एक्सटर्नल क्रेट", "फॉरेन इंटरफेस"],
        "answer_en": "Declare external functions",
        "answer_hi": "एक्सटर्नल फंक्शन्स डिक्लेयर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you create a unit struct?",
        "question_hi": "यूनिट struct कैसे बनाते हैं?",
        "options_en": ["struct MyStruct;", "struct MyStruct {}", "struct MyStruct();", "struct MyStruct unit;"],
        "options_hi": ["struct MyStruct;", "struct MyStruct {}", "struct MyStruct();", "struct MyStruct unit;"],
        "answer_en": "struct MyStruct;",
        "answer_hi": "struct MyStruct;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of the 'type' keyword?",
        "question_hi": "'type' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Create type aliases", "Define new types", "Type declaration", "Generic types"],
        "options_hi": ["टाइप अलायसेज बनाना", "नए टाइप्स डिफाइन करना", "टाइप डिक्लेरेशन", "जेनरिक टाइप्स"],
        "answer_en": "Create type aliases",
        "answer_hi": "टाइप अलायसेज बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which method returns the length of a vector?",
        "question_hi": "कौन सी मेथड वेक्टर की लेंथ रिटर्न करती है?",
        "options_en": ["len()", "length()", "size()", "count()"],
        "options_hi": ["len()", "length()", "size()", "count()"],
        "answer_en": "len()",
        "answer_hi": "len()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What does the 'mod' keyword do?",
        "question_hi": "'mod' कीवर्ड क्या करता है?",
        "options_en": ["Declare a module", "Modify variable", "Module import", "Modular arithmetic"],
        "options_hi": ["मॉड्यूल डिक्लेयर करना", "वेरिएबल मॉडिफाई करना", "मॉड्यूल इम्पोर्ट", "मॉड्यूलर अर्थमैटिक"],
        "answer_en": "Declare a module",
        "answer_hi": "मॉड्यूल डिक्लेयर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How do you create a string from a string slice?",
        "question_hi": "स्ट्रिंग स्लाइस से स्ट्रिंग कैसे बनाते हैं?",
        "options_en": ["to_string()", "String::from()", "into()", "All of the above"],
        "options_hi": ["to_string()", "String::from()", "into()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of the 'use' keyword?",
        "question_hi": "'use' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Import items into scope", "Use variables", "Utilize traits", "Employ functions"],
        "options_hi": ["आइटम्स को स्कोप में इम्पोर्ट करना", "वेरिएबल्स यूज करना", "ट्रेट्स यूटिलाइज़ करना", "फंक्शन्स एम्प्लॉय करना"],
        "answer_en": "Import items into scope",
        "answer_hi": "आइटम्स को स्कोप में इम्पोर्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which trait is used for converting between types?",
        "question_hi": "टाइप्स के बीच कन्वर्जन के लिए किस trait का उपयोग किया जाता है?",
        "options_en": ["From and Into", "Convert", "Transform", "AsRef"],
        "options_hi": ["From और Into", "Convert", "Transform", "AsRef"],
        "answer_en": "From and Into",
        "answer_hi": "From और Into",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "How do you create a mutable reference?",
        "question_hi": "म्यूटेबल रेफरेंस कैसे बनाते हैं?",
        "options_en": ["&mut variable", "mut &variable", "ref mut variable", "variable.mut_ref()"],
        "options_hi": ["&mut variable", "mut &variable", "ref mut variable", "variable.mut_ref()"],
        "answer_en": "&mut variable",
        "answer_hi": "&mut variable",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the purpose of the 'fn' keyword?",
        "question_hi": "'fn' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Declare a function", "Function pointer", "Functional programming", "Final keyword"],
        "options_hi": ["फंक्शन डिक्लेयर करना", "फंक्शन पॉइंटर", "फंक्शनल प्रोग्रामिंग", "फाइनल कीवर्ड"],
        "answer_en": "Declare a function",
        "answer_hi": "फंक्शन डिक्लेयर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which method removes an element by index from a vector?",
        "question_hi": "कौन सी मेथड वेक्टर से इंडेक्स द्वारा एलिमेंट रिमूव करती है?",
        "options_en": ["remove()", "delete()", "pop_at()", "extract()"],
        "options_hi": ["remove()", "delete()", "pop_at()", "extract()"],
        "answer_en": "remove()",
        "answer_hi": "remove()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What does the 'unsafe' keyword allow?",
        "question_hi": "'unsafe' कीवर्ड क्या अनुमति देता है?",
        "options_en": ["Dangerous operations", "Unchecked code", "Raw pointer manipulation", "All of the above"],
        "options_hi": ["खतरनाक ऑपरेशन्स", "अनचेक्ड कोड", "रॉ पॉइंटर मैनिपुलेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "How do you create a new empty string?",
        "question_hi": "नई खाली स्ट्रिंग कैसे बनाते हैं?",
        "options_en": ["String::new()", "String::empty()", "new String()", "\"\".to_string()"],
        "options_hi": ["String::new()", "String::empty()", "new String()", "\"\".to_string()"],
        "answer_en": "String::new()",
        "answer_hi": "String::new()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the purpose of the 'return' keyword?",
        "question_hi": "'return' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Early return from function", "Return value", "Exit program", "Both early return and return value"],
        "options_hi": ["फंक्शन से अर्ली रिटर्न", "वैल्यू रिटर्न करना", "प्रोग्राम से बाहर निकलना", "अर्ली रिटर्न और वैल्यू रिटर्न दोनों"],
        "answer_en": "Both early return and return value",
        "answer_hi": "अर्ली रिटर्न और वैल्यू रिटर्न दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which trait is used for hashing?",
        "question_hi": "हैशिंग के लिए किस trait का उपयोग किया जाता है?",
        "options_en": ["Hash", "Hasher", "Hashable", "Digest"],
        "options_hi": ["Hash", "Hasher", "Hashable", "Digest"],
        "answer_en": "Hash",
        "answer_hi": "Hash",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you create a character literal?",
        "question_hi": "कैरेक्टर लिटरल कैसे बनाते हैं?",
        "options_en": ["'a'", "\"a\"", "char('a')", "c'a'"],
        "options_hi": ["'a'", "\"a\"", "char('a')", "c'a'"],
        "answer_en": "'a'",
        "answer_hi": "'a'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of the 'enum' keyword?",
        "question_hi": "'enum' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Define an enumeration", "Enumeration type", "Sum type", "All of the above"],
        "options_hi": ["एन्युमरेशन डिफाइन करना", "एन्युमरेशन टाइप", "सम टाइप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which method checks if a string is empty?",
        "question_hi": "कौन सी मेथड चेक करती है कि स्ट्रिंग खाली है या नहीं?",
        "options_en": ["is_empty()", "empty()", "len() == 0", "Both is_empty() and len() == 0"],
        "options_hi": ["is_empty()", "empty()", "len() == 0", "is_empty() और len() == 0 दोनों"],
        "answer_en": "Both is_empty() and len() == 0",
        "answer_hi": "is_empty() और len() == 0 दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What does the 'macro_rules!' macro do?",
        "question_hi": "'macro_rules!' मैक्रो क्या करता है?",
        "options_en": ["Define declarative macros", "Create macro rules", "Pattern-based macros", "All of the above"],
        "options_hi": ["डिक्लेरेटिव मैक्रोज़ डिफाइन करना", "मैक्रो रूल्स बनाना", "पैटर्न-बेस्ड मैक्रोज़", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How do you create a fixed-size array?",
        "question_hi": "फिक्स्ड-साइज ऐरे कैसे बनाते हैं?",
        "options_en": ["[T; N]", "Array<T, N>", "fixed_array![T; N]", "array(T, N)"],
        "options_hi": ["[T; N]", "Array<T, N>", "fixed_array![T; N]", "array(T, N)"],
        "answer_en": "[T; N]",
        "answer_hi": "[T; N]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of the 'trait' keyword?",
        "question_hi": "'trait' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Define a trait", "Interface definition", "Behavior specification", "All of the above"],
        "options_hi": ["ट्रेट डिफाइन करना", "इंटरफेस डेफिनिशन", "बिहेवियर स्पेसिफिकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which method converts a string to uppercase?",
        "question_hi": "कौन सी मेथड स्ट्रिंग को अप्परकेस में कन्वर्ट करती है?",
        "options_en": ["to_uppercase()", "upper()", "to_upper()", "uppercase()"],
        "options_hi": ["to_uppercase()", "upper()", "to_upper()", "uppercase()"],
        "answer_en": "to_uppercase()",
        "answer_hi": "to_uppercase()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What does the '..' operator do in patterns?",
        "question_hi": "पैटर्न्स में '..' ऑपरेटर क्या करता है?",
        "options_en": ["Ignore remaining values", "Range pattern", "Wildcard", "Both ignore and range"],
        "options_hi": ["बची हुई वैल्यूज इग्नोर करना", "रेंज पैटर्न", "वाइल्डकार्ड", "इग्नोर और रेंज दोनों"],
        "answer_en": "Both ignore and range",
        "answer_hi": "इग्नोर और रेंज दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How do you create a function pointer?",
        "question_hi": "फंक्शन पॉइंटर कैसे बनाते हैं?",
        "options_en": ["fn pointer", "&function_name", "Function::new()", "fn() type"],
        "options_hi": ["fn पॉइंटर", "&function_name", "Function::new()", "fn() टाइप"],
        "answer_en": "fn() type",
        "answer_hi": "fn() टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of the 'while let' syntax?",
        "question_hi": "'while let' सिंटैक्स का उद्देश्य क्या है?",
        "options_en": ["Loop while pattern matches", "Conditional loop", "Pattern loop", "Match loop"],
        "options_hi": ["पैटर्न मैच होने तक लूप", "कंडीशनल लूप", "पैटर्न लूप", "मैच लूप"],
        "answer_en": "Loop while pattern matches",
        "answer_hi": "पैटर्न मैच होने तक लूप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which method splits a string by whitespace?",
        "question_hi": "कौन सी मेथड स्ट्रिंग को व्हाइटस्पेस द्वारा स्प्लिट करती है?",
        "options_en": ["split_whitespace()", "split(' ')", "tokenize()", "words()"],
        "options_hi": ["split_whitespace()", "split(' ')", "tokenize()", "words()"],
        "answer_en": "split_whitespace()",
        "answer_hi": "split_whitespace()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What does the 'box' syntax do?",
        "question_hi": "'box' सिंटैक्स क्या करता है?",
        "options_en": ["Allocate on heap", "Create boxed value", "Heap allocation", "All of the above"],
        "options_hi": ["हीप पर अलोकेट करना", "बॉक्स्ड वैल्यू बनाना", "हीप अलोकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How do you create a closure?",
        "question_hi": "क्लोजर कैसे बनाते हैं?",
        "options_en": ["|parameters| body", "closure(parameters) body", "fn(parameters) body", "lambda parameters body"],
        "options_hi": ["|parameters| body", "closure(parameters) body", "fn(parameters) body", "lambda parameters body"],
        "answer_en": "|parameters| body",
        "answer_hi": "|parameters| body",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of the 'async' keyword?",
        "question_hi": "'async' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Define async function", "Create future", "Asynchronous code", "All of the above"],
        "options_hi": ["एसिंक फंक्शन डिफाइन करना", "फ्यूचर बनाना", "एसिंक्रोनस कोड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which method returns an iterator over vector elements?",
        "question_hi": "कौन सी मेथड वेक्टर एलिमेंट्स पर इटरेटर रिटर्न करती है?",
        "options_en": ["iter()", "elements()", "values()", "items()"],
        "options_hi": ["iter()", "elements()", "values()", "items()"],
        "answer_en": "iter()",
        "answer_hi": "iter()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What does the 'await' keyword do?",
        "question_hi": "'await' कीवर्ड क्या करता है?",
        "options_en": ["Wait for future completion", "Pause async function", "Await result", "All of the above"],
        "options_hi": ["फ्यूचर कम्प्लीशन का इंतज़ार करना", "एसिंक फंक्शन पॉज करना", "रिजल्ट का इंतज़ार करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How do you create a raw pointer?",
        "question_hi": "रॉ पॉइंटर कैसे बनाते हैं?",
        "options_en": ["*const T or *mut T", "raw_ptr<T>", "Pointer::raw()", "&raw variable"],
        "options_hi": ["*const T या *mut T", "raw_ptr<T>", "Pointer::raw()", "&raw variable"],
        "answer_en": "*const T or *mut T",
        "answer_hi": "*const T या *mut T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of the 'impl Trait' syntax?",
        "question_hi": "'impl Trait' सिंटैक्स का उद्देश्य क्या है?",
        "options_en": ["Return type abstraction", "Trait return type", "Opaque type", "All of the above"],
        "options_hi": ["रिटर्न टाइप एब्स्ट्रैक्शन", "ट्रेट रिटर्न टाइप", "ओपेक टाइप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which method joins string slices?",
        "question_hi": "कौन सी मेथड स्ट्रिंग स्लाइसेज को जॉइन करती है?",
        "options_en": ["concat()", "join()", "connect()", "merge()"],
        "options_hi": ["concat()", "join()", "connect()", "merge()"],
        "answer_en": "concat()",
        "answer_hi": "concat()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What does the '..=' operator create?",
        "question_hi": "'..=' ऑपरेटर क्या बनाता है?",
        "options_en": ["Inclusive range", "Range to value", "Closed range", "All of the above"],
        "options_hi": ["इन्क्लूसिव रेंज", "वैल्यू तक रेंज", "क्लोज्ड रेंज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you create a reference-counted pointer?",
        "question_hi": "रिफरेन्स-काउंटेड पॉइंटर कैसे बनाते हैं?",
        "options_en": ["Rc::new(value)", "Arc::new(value)", "RefCount::new(value)", "Both Rc::new and Arc::new"],
        "options_hi": ["Rc::new(value)", "Arc::new(value)", "RefCount::new(value)", "Rc::new और Arc::new दोनों"],
        "answer_en": "Both Rc::new and Arc::new",
        "answer_hi": "Rc::new और Arc::new दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of the 'match' guard?",
        "question_hi": "'match' गार्ड का उद्देश्य क्या है?",
        "options_en": ["Additional condition in pattern", "Pattern protection", "Conditional matching", "All of the above"],
        "options_hi": ["पैटर्न में अतिरिक्त कंडीशन", "पैटर्न प्रोटेक्शन", "कंडीशनल मैचिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which method converts a result to an option?",
        "question_hi": "कौन सी मेथड रिजल्ट को ऑप्शन में कन्वर्ट करती है?",
        "options_en": ["ok()", "to_option()", "as_option()", "option()"],
        "options_hi": ["ok()", "to_option()", "as_option()", "option()"],
        "answer_en": "ok()",
        "answer_hi": "ok()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What does the '#' attribute do?",
        "question_hi": "'#' एट्रिब्यूट क्या करता है?",
        "options_en": ["Apply attribute", "Metadata annotation", "Compiler directive", "All of the above"],
        "options_hi": ["एट्रिब्यूट एप्लाई करना", "मेटाडेटा एनोटेशन", "कम्पाइलर डायरेक्टिव", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you create a byte string literal?",
        "question_hi": "बाइट स्ट्रिंग लिटरल कैसे बनाते हैं?",
        "options_en": ["b\"...\"", "byte\"...\"", "bytes!(\"...\")", "\"...\".as_bytes()"],
        "options_hi": ["b\"...\"", "byte\"...\"", "bytes!(\"...\")", "\"...\".as_bytes()"],
        "answer_en": "b\"...\"",
        "answer_hi": "b\"...\"",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of the 'for' loop?",
        "question_hi": "'for' लूप का उद्देश्य क्या है?",
        "options_en": ["Iterate over iterators", "Collection iteration", "Range iteration", "All of the above"],
        "options_hi": ["इटरेटर्स पर इटरेट करना", "कलेक्शन इटरेशन", "रेंज इटरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which method returns the capacity of a vector?",
        "question_hi": "कौन सी मेथड वेक्टर की कैपेसिटी रिटर्न करती है?",
        "options_en": ["capacity()", "cap()", "size_capacity()", "alloc_size()"],
        "options_hi": ["capacity()", "cap()", "size_capacity()", "alloc_size()"],
        "answer_en": "capacity()",
        "answer_hi": "capacity()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What does the '..' operator do in struct updates?",
        "question_hi": "struct अपडेट्स में '..' ऑपरेटर क्या करता है?",
        "options_en": ["Copy remaining fields", "Struct update syntax", "Field inheritance", "All of the above"],
        "options_hi": ["बचे हुए फील्ड्स कॉपी करना", "struct अपडेट सिंटैक्स", "फील्ड इनहेरिटेंस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How do you create a static lifetime?",
        "question_hi": "स्टेटिक लाइफटाइम कैसे बनाते हैं?",
        "options_en": ["'static", "static lifetime", "lifetime static", "'static lifetime"],
        "options_hi": ["'static", "static lifetime", "lifetime static", "'static lifetime"],
        "answer_en": "'static",
        "answer_hi": "'static",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of the 'union' keyword?",
        "question_hi": "'union' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Define a union type", "C-compatible union", "Memory overlay", "All of the above"],
        "options_hi": ["यूनियन टाइप डिफाइन करना", "C-कम्पेटिबल यूनियन", "मेमोरी ओवरले", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which method truncates a string?",
        "question_hi": "कौन सी मेथड स्ट्रिंग को ट्रंकेट करती है?",
        "options_en": ["truncate()", "shorten()", "cut()", "trim()"],
        "options_hi": ["truncate()", "shorten()", "cut()", "trim()"],
        "answer_en": "truncate()",
        "answer_hi": "truncate()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What does the 'become' keyword do?",
        "question_hi": "'become' कीवर्ड क्या करता है?",
        "options_en": ["Tail call optimization", "Function replacement", "Stack reuse", "All of the above"],
        "options_hi": ["टेल कॉल ऑप्टिमाइज़ेशन", "फंक्शन रिप्लेसमेंट", "स्टैक रियूज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How do you create a never type?",
        "question_hi": "नेवर टाइप कैसे बनाते हैं?",
        "options_en": ["!", "never", "Never", "NoReturn"],
        "options_hi": ["!", "never", "Never", "NoReturn"],
        "answer_en": "!",
        "answer_hi": "!",
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