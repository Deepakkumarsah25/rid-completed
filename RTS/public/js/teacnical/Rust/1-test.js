const questions =[
    {
        "num": 1,
        "question_en": "What is Rust's main advantage over C++?",
        "question_hi": "C++ पर Rust का मुख्य फायदा क्या है?",
        "options_en": ["Memory safety without garbage collection", "Faster execution speed", "Simpler syntax", "Better object-oriented features"],
        "options_hi": ["गार्बेज कलेक्शन के बिना मेमोरी सेफ्टी", "तेज एक्जिक्यूशन स्पीड", "सरल सिंटैक्स", "बेहतर ऑब्जेक्ट-ओरिएंटेड फीचर्स"],
        "answer_en": "Memory safety without garbage collection",
        "answer_hi": "गार्बेज कलेक्शन के बिना मेमोरी सेफ्टी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How do you print 'Hello, World!' in Rust?",
        "question_hi": "Rust में 'Hello, World!' कैसे प्रिंट करते हैं?",
        "options_en": ["println!(\"Hello, World!\");", "print(\"Hello, World!\");", "console.log(\"Hello, World!\");", "System.out.println(\"Hello, World!\");"],
        "options_hi": ["println!(\"Hello, World!\");", "print(\"Hello, World!\");", "console.log(\"Hello, World!\");", "System.out.println(\"Hello, World!\");"],
        "answer_en": "println!(\"Hello, World!\");",
        "answer_hi": "println!(\"Hello, World!\");",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the entry point of a Rust program?",
        "question_hi": "Rust प्रोग्राम का एंट्री पॉइंट क्या है?",
        "options_en": ["fn main()", "function main()", "pub fn main()", "start main()"],
        "options_hi": ["fn main()", "function main()", "pub fn main()", "start main()"],
        "answer_en": "fn main()",
        "answer_hi": "fn main()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you declare an immutable variable in Rust?",
        "question_hi": "Rust में immutable वेरिएबल कैसे डिक्लेयर करते हैं?",
        "options_en": ["let x = 5;", "const x = 5;", "immutable x = 5;", "var x = 5;"],
        "options_hi": ["let x = 5;", "const x = 5;", "immutable x = 5;", "var x = 5;"],
        "answer_en": "let x = 5;",
        "answer_hi": "let x = 5;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the default integer type in Rust?",
        "question_hi": "Rust में डिफॉल्ट इंटीजर टाइप क्या है?",
        "options_en": ["i32", "i64", "int", "usize"],
        "options_hi": ["i32", "i64", "int", "usize"],
        "answer_en": "i32",
        "answer_hi": "i32",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you create a constant in Rust?",
        "question_hi": "Rust में constant कैसे बनाते हैं?",
        "options_en": ["const MAX_POINTS: u32 = 100_000;", "let MAX_POINTS = 100000;", "static MAX_POINTS = 100000;", "define MAX_POINTS 100000;"],
        "options_hi": ["const MAX_POINTS: u32 = 100_000;", "let MAX_POINTS = 100000;", "static MAX_POINTS = 100000;", "define MAX_POINTS 100000;"],
        "answer_en": "const MAX_POINTS: u32 = 100_000;",
        "answer_hi": "const MAX_POINTS: u32 = 100_000;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What does the '!' after println indicate?",
        "question_hi": "println के बाद '!' क्या इंडिकेट करता है?",
        "options_en": ["It's a macro", "It's a function", "It's a variable", "It's a type"],
        "options_hi": ["यह एक मैक्रो है", "यह एक फंक्शन है", "यह एक वेरिएबल है", "यह एक टाइप है"],
        "answer_en": "It's a macro",
        "answer_hi": "यह एक मैक्रो है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you comment a single line in Rust?",
        "question_hi": "Rust में सिंगल लाइन कमेंट कैसे करते हैं?",
        "options_en": ["// This is a comment", "# This is a comment", "/* This is a comment */", "-- This is a comment"],
        "options_hi": ["// यह एक कमेंट है", "# यह एक कमेंट है", "/* यह एक कमेंट है */", "-- यह एक कमेंट है"],
        "answer_en": "// This is a comment",
        "answer_hi": "// यह एक कमेंट है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the boolean type in Rust?",
        "question_hi": "Rust में बूलियन टाइप क्या है?",
        "options_en": ["bool", "boolean", "Boolean", "bit"],
        "options_hi": ["bool", "boolean", "Boolean", "bit"],
        "answer_en": "bool",
        "answer_hi": "bool",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you create a tuple in Rust?",
        "question_hi": "Rust में tuple कैसे बनाते हैं?",
        "options_en": ["let tup = (500, 6.4, 1);", "let tup = [500, 6.4, 1];", "let tup = {500, 6.4, 1};", "tuple tup = (500, 6.4, 1);"],
        "options_hi": ["let tup = (500, 6.4, 1);", "let tup = [500, 6.4, 1];", "let tup = {500, 6.4, 1};", "tuple tup = (500, 6.4, 1);"],
        "answer_en": "let tup = (500, 6.4, 1);",
        "answer_hi": "let tup = (500, 6.4, 1);",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "How do you access tuple elements?",
        "question_hi": "tuple एलिमेंट्स को कैसे एक्सेस करते हैं?",
        "options_en": ["tup.0", "tup[0]", "tup(0)", "tup->0"],
        "options_hi": ["tup.0", "tup[0]", "tup(0)", "tup->0"],
        "answer_en": "tup.0",
        "answer_hi": "tup.0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the character type in Rust?",
        "question_hi": "Rust में कैरेक्टर टाइप क्या है?",
        "options_en": ["char", "character", "chr", "string"],
        "options_hi": ["char", "character", "chr", "string"],
        "answer_en": "char",
        "answer_hi": "char",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How do you create an array in Rust?",
        "question_hi": "Rust में array कैसे बनाते हैं?",
        "options_en": ["let a = [1, 2, 3, 4, 5];", "let a = (1, 2, 3, 4, 5);", "let a = {1, 2, 3, 4, 5};", "array a = [1, 2, 3, 4, 5];"],
        "options_hi": ["let a = [1, 2, 3, 4, 5];", "let a = (1, 2, 3, 4, 5);", "let a = {1, 2, 3, 4, 5};", "array a = [1, 2, 3, 4, 5];"],
        "answer_en": "let a = [1, 2, 3, 4, 5];",
        "answer_hi": "let a = [1, 2, 3, 4, 5];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you access array elements?",
        "question_hi": "array एलिमेंट्स को कैसे एक्सेस करते हैं?",
        "options_en": ["a[0]", "a.0", "a(0)", "a->0"],
        "options_hi": ["a[0]", "a.0", "a(0)", "a->0"],
        "answer_en": "a[0]",
        "answer_hi": "a[0]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the string slice type in Rust?",
        "question_hi": "Rust में स्ट्रिंग स्लाइस टाइप क्या है?",
        "options_en": ["&str", "str", "String", "&string"],
        "options_hi": ["&str", "str", "String", "&string"],
        "answer_en": "&str",
        "answer_hi": "&str",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you define a function in Rust?",
        "question_hi": "Rust में फंक्शन कैसे डिफाइन करते हैं?",
        "options_en": ["fn function_name() {}", "function function_name() {}", "def function_name() {}", "func function_name() {}"],
        "options_hi": ["fn function_name() {}", "function function_name() {}", "def function_name() {}", "func function_name() {}"],
        "answer_en": "fn function_name() {}",
        "answer_hi": "fn function_name() {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "How do you return a value from a function?",
        "question_hi": "फंक्शन से वैल्यू कैसे रिटर्न करते हैं?",
        "options_en": ["fn five() -> i32 { 5 }", "fn five(): i32 { return 5; }", "fn five() -> i32 { return 5; }", "Both A and C"],
        "options_hi": ["fn five() -> i32 { 5 }", "fn five(): i32 { return 5; }", "fn five() -> i32 { return 5; }", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the control flow keyword for conditions?",
        "question_hi": "कंडीशन के लिए कंट्रोल फ्लो कीवर्ड क्या है?",
        "options_en": ["if", "when", "case", "switch"],
        "options_hi": ["if", "when", "case", "switch"],
        "answer_en": "if",
        "answer_hi": "if",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "How do you write an if statement?",
        "question_hi": "if स्टेटमेंट कैसे लिखते हैं?",
        "options_en": ["if number < 5 { println!(\"small\"); }", "if number < 5 then println!(\"small\");", "if (number < 5) { println!(\"small\"); }", "Both A and C"],
        "options_hi": ["if number < 5 { println!(\"small\"); }", "if number < 5 then println!(\"small\");", "if (number < 5) { println!(\"small\"); }", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the loop keyword in Rust?",
        "question_hi": "Rust में loop कीवर्ड क्या है?",
        "options_en": ["loop", "while", "for", "repeat"],
        "options_hi": ["loop", "while", "for", "repeat"],
        "answer_en": "loop",
        "answer_hi": "loop",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "How do you break out of a loop?",
        "question_hi": "loop से कैसे बाहर निकलते हैं?",
        "options_en": ["break;", "exit;", "stop;", "return;"],
        "options_hi": ["break;", "exit;", "stop;", "return;"],
        "answer_en": "break;",
        "answer_hi": "break;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you skip to the next iteration of a loop?",
        "question_hi": "loop के अगले इटरेशन पर कैसे जाते हैं?",
        "options_en": ["continue;", "skip;", "next;", "jump;"],
        "options_hi": ["continue;", "skip;", "next;", "jump;"],
        "answer_en": "continue;",
        "answer_hi": "continue;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the while loop syntax?",
        "question_hi": "while loop सिंटैक्स क्या है?",
        "options_en": ["while condition { }", "while (condition) { }", "do while condition", "while condition do"],
        "options_hi": ["while condition { }", "while (condition) { }", "do while condition", "while condition do"],
        "answer_en": "while condition { }",
        "answer_hi": "while condition { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How do you write a for loop?",
        "question_hi": "for loop कैसे लिखते हैं?",
        "options_en": ["for element in array { }", "for (element in array) { }", "for element of array { }", "foreach element in array { }"],
        "options_hi": ["for element in array { }", "for (element in array) { }", "for element of array { }", "foreach element in array { }"],
        "answer_en": "for element in array { }",
        "answer_hi": "for element in array { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is ownership in Rust?",
        "question_hi": "Rust में ownership क्या है?",
        "options_en": ["A set of rules governing memory management", "A way to manage files", "A type of variable", "A loop construct"],
        "options_hi": ["मेमोरी मैनेजमेंट को गवर्न करने वाले नियमों का सेट", "फाइल्स मैनेज करने का तरीका", "एक प्रकार का वेरिएबल", "एक लूप कंस्ट्रक्ट"],
        "answer_en": "A set of rules governing memory management",
        "answer_hi": "मेमोरी मैनेजमेंट को गवर्न करने वाले नियमों का सेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is borrowing in Rust?",
        "question_hi": "Rust में borrowing क्या है?",
        "options_en": ["Creating references to data", "Taking ownership of data", "Copying data", "Deleting data"],
        "options_hi": ["डेटा के रिफरेन्स बनाना", "डेटा की ownership लेना", "डेटा को कॉपी करना", "डेटा को डिलीट करना"],
        "answer_en": "Creating references to data",
        "answer_hi": "डेटा के रिफरेन्स बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "How do you create an immutable reference?",
        "question_hi": "immutable रिफरेन्स कैसे बनाते हैं?",
        "options_en": ["&variable", "&mut variable", "ref variable", "*variable"],
        "options_hi": ["&variable", "&mut variable", "ref variable", "*variable"],
        "answer_en": "&variable",
        "answer_hi": "&variable",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How do you create a mutable reference?",
        "question_hi": "mutable रिफरेन्स कैसे बनाते हैं?",
        "options_en": ["&mut variable", "&variable", "mut &variable", "ref mut variable"],
        "options_hi": ["&mut variable", "&variable", "mut &variable", "ref mut variable"],
        "answer_en": "&mut variable",
        "answer_hi": "&mut variable",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is a slice in Rust?",
        "question_hi": "Rust में slice क्या है?",
        "options_en": ["A reference to a contiguous sequence of elements", "A type of array", "A string type", "A loop construct"],
        "options_hi": ["एलिमेंट्स के कॉन्टीग्यूअस सीक्वेंस का रिफरेन्स", "एक प्रकार का array", "एक स्ट्रिंग टाइप", "एक लूप कंस्ट्रक्ट"],
        "answer_en": "A reference to a contiguous sequence of elements",
        "answer_hi": "एलिमेंट्स के कॉन्टीग्यूअस सीक्वेंस का रिफरेन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you create a string slice from a string literal?",
        "question_hi": "स्ट्रिंग लिटरल से स्ट्रिंग स्लाइस कैसे बनाते हैं?",
        "options_en": ["let s = \"hello\";", "let s: &str = \"hello\";", "let s = String::from(\"hello\");", "Both A and B"],
        "options_hi": ["let s = \"hello\";", "let s: &str = \"hello\";", "let s = String::from(\"hello\");", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the String type in Rust?",
        "question_hi": "Rust में String टाइप क्या है?",
        "options_en": ["A growable, owned string type", "A fixed-size string", "A string slice", "A character array"],
        "options_hi": ["एक ग्रोएबल, ओनड स्ट्रिंग टाइप", "एक फिक्स्ड-साइज स्ट्रिंग", "एक स्ट्रिंग स्लाइस", "एक कैरेक्टर array"],
        "answer_en": "A growable, owned string type",
        "answer_hi": "एक ग्रोएबल, ओनड स्ट्रिंग टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you create a String from a string literal?",
        "question_hi": "स्ट्रिंग लिटरल से String कैसे बनाते हैं?",
        "options_en": ["String::from(\"hello\")", "\"hello\".to_string()", "\"hello\".into()", "All of the above"],
        "options_hi": ["String::from(\"hello\")", "\"hello\".to_string()", "\"hello\".into()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is a struct in Rust?",
        "question_hi": "Rust में struct क्या है?",
        "options_en": ["A custom data type", "A function", "A loop", "A module"],
        "options_hi": ["एक कस्टम डेटा टाइप", "एक फंक्शन", "एक लूप", "एक मॉड्यूल"],
        "answer_en": "A custom data type",
        "answer_hi": "एक कस्टम डेटा टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you define a struct?",
        "question_hi": "struct कैसे डिफाइन करते हैं?",
        "options_en": ["struct User { name: String, age: u32 }", "struct User { String name, u32 age }", "class User { name: String, age: u32 }", "type User = { name: String, age: u32 };"],
        "options_hi": ["struct User { name: String, age: u32 }", "struct User { String name, u32 age }", "class User { name: String, age: u32 }", "type User = { name: String, age: u32 };"],
        "answer_en": "struct User { name: String, age: u32 }",
        "answer_hi": "struct User { name: String, age: u32 }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "How do you create an instance of a struct?",
        "question_hi": "struct का instance कैसे बनाते हैं?",
        "options_en": ["let user = User { name: String::from(\"Alice\"), age: 30 };", "let user = new User(\"Alice\", 30);", "let user = User::new(\"Alice\", 30);", "User user = { \"Alice\", 30 };"],
        "options_hi": ["let user = User { name: String::from(\"Alice\"), age: 30 };", "let user = new User(\"Alice\", 30);", "let user = User::new(\"Alice\", 30);", "User user = { \"Alice\", 30 };"],
        "answer_en": "let user = User { name: String::from(\"Alice\"), age: 30 };",
        "answer_hi": "let user = User { name: String::from(\"Alice\"), age: 30 };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do you access struct fields?",
        "question_hi": "struct फील्ड्स को कैसे एक्सेस करते हैं?",
        "options_en": ["user.name", "user->name", "user[name]", "User::name"],
        "options_hi": ["user.name", "user->name", "user[name]", "User::name"],
        "answer_en": "user.name",
        "answer_hi": "user.name",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is an enum in Rust?",
        "question_hi": "Rust में enum क्या है?",
        "options_en": ["A type that can be one of several variants", "A number type", "A string type", "A function type"],
        "options_hi": ["एक टाइप जो कई वेरिएंट में से एक हो सकता है", "एक नंबर टाइप", "एक स्ट्रिंग टाइप", "एक फंक्शन टाइप"],
        "answer_en": "A type that can be one of several variants",
        "answer_hi": "एक टाइप जो कई वेरिएंट में से एक हो सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How do you define an enum?",
        "question_hi": "enum कैसे डिफाइन करते हैं?",
        "options_en": ["enum IpAddr { V4, V6 }", "enum IpAddr { V4; V6 }", "enum IpAddr = { V4, V6 }", "type enum IpAddr { V4, V6 }"],
        "options_hi": ["enum IpAddr { V4, V6 }", "enum IpAddr { V4; V6 }", "enum IpAddr = { V4, V6 }", "type enum IpAddr { V4, V6 }"],
        "answer_en": "enum IpAddr { V4, V6 }",
        "answer_hi": "enum IpAddr { V4, V6 }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the Option enum used for?",
        "question_hi": "Option enum का उपयोग किस लिए किया जाता है?",
        "options_en": ["Representing optional values", "Error handling", "Loop control", "Memory allocation"],
        "options_hi": ["ऑप्शनल वैल्यू रिप्रेजेंट करना", "एरर हैंडलिंग", "लूप कंट्रोल", "मेमोरी अलोकेशन"],
        "answer_en": "Representing optional values",
        "answer_hi": "ऑप्शनल वैल्यू रिप्रेजेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What are the variants of Option?",
        "question_hi": "Option के वेरिएंट क्या हैं?",
        "options_en": ["Some(T) and None", "Ok(T) and Err(E)", "True and False", "Value and Null"],
        "options_hi": ["Some(T) और None", "Ok(T) और Err(E)", "True और False", "Value और Null"],
        "answer_en": "Some(T) and None",
        "answer_hi": "Some(T) और None",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the Result enum used for?",
        "question_hi": "Result enum का उपयोग किस लिए किया जाता है?",
        "options_en": ["Error handling", "Optional values", "Loop control", "Memory management"],
        "options_hi": ["एरर हैंडलिंग", "ऑप्शनल वैल्यू", "लूप कंट्रोल", "मेमोरी मैनेजमेंट"],
        "answer_en": "Error handling",
        "answer_hi": "एरर हैंडलिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What are the variants of Result?",
        "question_hi": "Result के वेरिएंट क्या हैं?",
        "options_en": ["Ok(T) and Err(E)", "Some(T) and None", "Success and Failure", "Value and Error"],
        "options_hi": ["Ok(T) और Err(E)", "Some(T) और None", "Success और Failure", "Value और Error"],
        "answer_en": "Ok(T) and Err(E)",
        "answer_hi": "Ok(T) और Err(E)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is pattern matching in Rust?",
        "question_hi": "Rust में pattern matching क्या है?",
        "options_en": ["Comparing values against patterns", "String comparison", "Loop iteration", "Function calling"],
        "options_hi": ["पैटर्न के खिलाफ वैल्यू कम्पेयर करना", "स्ट्रिंग कम्पेरिजन", "लूप इटरेशन", "फंक्शन कॉलिंग"],
        "answer_en": "Comparing values against patterns",
        "answer_hi": "पैटर्न के खिलाफ वैल्यू कम्पेयर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which keyword is used for pattern matching?",
        "question_hi": "पैटर्न matching के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["match", "switch", "case", "check"],
        "options_hi": ["match", "switch", "case", "check"],
        "answer_en": "match",
        "answer_hi": "match",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How do you write a match expression?",
        "question_hi": "match एक्सप्रेशन कैसे लिखते हैं?",
        "options_en": ["match value { pattern => expression, }", "match value { pattern: expression, }", "match (value) { pattern -> expression }", "switch value { case pattern: expression }"],
        "options_hi": ["match value { pattern => expression, }", "match value { pattern: expression, }", "match (value) { pattern -> expression }", "switch value { case pattern: expression }"],
        "answer_en": "match value { pattern => expression, }",
        "answer_hi": "match value { pattern => expression, }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the _ pattern used for?",
        "question_hi": "_ पैटर्न का उपयोग किस लिए किया जाता है?",
        "options_en": ["Catch-all pattern", "Ignoring values", "Wildcard pattern", "All of the above"],
        "options_hi": ["कैच-ऑल पैटर्न", "वैल्यू इग्नोर करना", "वाइल्डकार्ड पैटर्न", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What are modules in Rust?",
        "question_hi": "Rust में modules क्या हैं?",
        "options_en": ["Namespaces for organizing code", "Data types", "Functions", "Variables"],
        "options_hi": ["कोड ऑर्गनाइज करने के लिए नेमस्पेस", "डेटा टाइप", "फंक्शन", "वेरिएबल"],
        "answer_en": "Namespaces for organizing code",
        "answer_hi": "कोड ऑर्गनाइज करने के लिए नेमस्पेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you define a module?",
        "question_hi": "module कैसे डिफाइन करते हैं?",
        "options_en": ["mod module_name { }", "module module_name { }", "namespace module_name { }", "package module_name { }"],
        "options_hi": ["mod module_name { }", "module module_name { }", "namespace module_name { }", "package module_name { }"],
        "answer_en": "mod module_name { }",
        "answer_hi": "mod module_name { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How do you use items from another module?",
        "question_hi": "दूसरे module के आइटम कैसे यूज करते हैं?",
        "options_en": ["use module_name::item;", "import module_name.item;", "include module_name::item;", "from module_name import item;"],
        "options_hi": ["use module_name::item;", "import module_name.item;", "include module_name::item;", "from module_name import item;"],
        "answer_en": "use module_name::item;",
        "answer_hi": "use module_name::item;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the pub keyword used for?",
        "question_hi": "pub कीवर्ड का उपयोग किस लिए किया जाता है?",
        "options_en": ["Making items public", "Making items private", "Publishing code", "Public functions only"],
        "options_hi": ["आइटम को पब्लिक बनाना", "आइटम को प्राइवेट बनाना", "कोड पब्लिश करना", "केवल पब्लिक फंक्शन"],
        "answer_en": "Making items public",
        "answer_hi": "आइटम को पब्लिक बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What are collections in Rust?",
        "question_hi": "Rust में collections क्या हैं?",
        "options_en": ["Data structures that contain multiple values", "Single values", "Functions", "Modules"],
        "options_hi": ["डेटा स्ट्रक्चर जिनमें मल्टीपल वैल्यू होते हैं", "सिंगल वैल्यू", "फंक्शन", "मॉड्यूल"],
        "answer_en": "Data structures that contain multiple values",
        "answer_hi": "डेटा स्ट्रक्चर जिनमें मल्टीपल वैल्यू होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is a vector in Rust?",
        "question_hi": "Rust में vector क्या है?",
        "options_en": ["A growable array type", "A fixed-size array", "A string type", "A tuple type"],
        "options_hi": ["एक ग्रोएबल array टाइप", "एक फिक्स्ड-साइज array", "एक स्ट्रिंग टाइप", "एक tuple टाइप"],
        "answer_en": "A growable array type",
        "answer_hi": "एक ग्रोएबल array टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "How do you create a vector?",
        "question_hi": "vector कैसे बनाते हैं?",
        "options_en": ["let v = vec![1, 2, 3];", "let v = [1, 2, 3];", "let v = Vector::new();", "let v = new vec![1, 2, 3];"],
        "options_hi": ["let v = vec![1, 2, 3];", "let v = [1, 2, 3];", "let v = Vector::new();", "let v = new vec![1, 2, 3];"],
        "answer_en": "let v = vec![1, 2, 3];",
        "answer_hi": "let v = vec![1, 2, 3];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you add elements to a vector?",
        "question_hi": "vector में एलिमेंट कैसे ऐड करते हैं?",
        "options_en": ["v.push(4);", "v.add(4);", "v.insert(4);", "v.append(4);"],
        "options_hi": ["v.push(4);", "v.add(4);", "v.insert(4);", "v.append(4);"],
        "answer_en": "v.push(4);",
        "answer_hi": "v.push(4);",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is a HashMap in Rust?",
        "question_hi": "Rust में HashMap क्या है?",
        "options_en": ["A key-value store", "An array type", "A string type", "A function type"],
        "options_hi": ["एक की-वैल्यू स्टोर", "एक array टाइप", "एक स्ट्रिंग टाइप", "एक फंक्शन टाइप"],
        "answer_en": "A key-value store",
        "answer_hi": "एक की-वैल्यू स्टोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you create a HashMap?",
        "question_hi": "HashMap कैसे बनाते हैं?",
        "options_en": ["use std::collections::HashMap; let mut map = HashMap::new();", "let map = HashMap::new();", "let map = new HashMap();", "use HashMap; let map = HashMap();"],
        "options_hi": ["use std::collections::HashMap; let mut map = HashMap::new();", "let map = HashMap::new();", "let map = new HashMap();", "use HashMap; let map = HashMap();"],
        "answer_en": "use std::collections::HashMap; let mut map = HashMap::new();",
        "answer_hi": "use std::collections::HashMap; let mut map = HashMap::new();",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How do you insert into a HashMap?",
        "question_hi": "HashMap में कैसे इन्सर्ट करते हैं?",
        "options_en": ["map.insert(key, value);", "map.add(key, value);", "map[key] = value;", "map.set(key, value);"],
        "options_hi": ["map.insert(key, value);", "map.add(key, value);", "map[key] = value;", "map.set(key, value);"],
        "answer_en": "map.insert(key, value);",
        "answer_hi": "map.insert(key, value);",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is error handling in Rust?",
        "question_hi": "Rust में error handling क्या है?",
        "options_en": ["Dealing with recoverable and unrecoverable errors", "Ignoring errors", "Only dealing with compile errors", "Only dealing with runtime errors"],
        "options_hi": ["रिकवरेबल और अनरिकवरेबल एरर से डील करना", "एरर इग्नोर करना", "केवल कम्पाइल एरर से डील करना", "केवल रनटाइम एरर से डील करना"],
        "answer_en": "Dealing with recoverable and unrecoverable errors",
        "answer_hi": "रिकवरेबल और अनरिकवरेबल एरर से डील करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is panic in Rust?",
        "question_hi": "Rust में panic क्या है?",
        "options_en": ["Unrecoverable error that stops program execution", "A warning", "A compile error", "A type of loop"],
        "options_hi": ["अनरिकवरेबल एरर जो प्रोग्राम एक्जिक्यूशन रोकता है", "एक वार्निंग", "एक कम्पाइल एरर", "एक प्रकार का लूप"],
        "answer_en": "Unrecoverable error that stops program execution",
        "answer_hi": "अनरिकवरेबल एरर जो प्रोग्राम एक्जिक्यूशन रोकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you cause a panic?",
        "question_hi": "panic कैसे कॉज करते हैं?",
        "options_en": ["panic!(\"Something went wrong\");", "error!(\"Something went wrong\");", "crash!(\"Something went wrong\");", "fail!(\"Something went wrong\");"],
        "options_hi": ["panic!(\"Something went wrong\");", "error!(\"Something went wrong\");", "crash!(\"Something went wrong\");", "fail!(\"Something went wrong\");"],
        "answer_en": "panic!(\"Something went wrong\");",
        "answer_hi": "panic!(\"Something went wrong\");",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the ? operator used for?",
        "question_hi": "? ऑपरेटर का उपयोग किस लिए किया जाता है?",
        "options_en": ["Propagating errors", "Optional values", "Boolean operations", "String operations"],
        "options_hi": ["एरर प्रोपेगेट करना", "ऑप्शनल वैल्यू", "बूलियन ऑपरेशन", "स्ट्रिंग ऑपरेशन"],
        "answer_en": "Propagating errors",
        "answer_hi": "एरर प्रोपेगेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What are generics in Rust?",
        "question_hi": "Rust में generics क्या हैं?",
        "options_en": ["Abstract stand-ins for concrete types", "Specific types", "Function parameters", "Loop variables"],
        "options_hi": ["कंक्रीट टाइप के लिए अब्स्ट्रैक्ट स्टैंड-इन", "स्पेसिफिक टाइप", "फंक्शन पैरामीटर", "लूप वेरिएबल"],
        "answer_en": "Abstract stand-ins for concrete types",
        "answer_hi": "कंक्रीट टाइप के लिए अब्स्ट्रैक्ट स्टैंड-इन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "How do you define a generic function?",
        "question_hi": "generic फंक्शन कैसे डिफाइन करते हैं?",
        "options_en": ["fn function_name<T>(param: T) -> T {}", "fn function_name generic<T>(param: T) {}", "generic fn function_name<T>(param: T) {}", "fn<T> function_name(param: T) {}"],
        "options_hi": ["fn function_name<T>(param: T) -> T {}", "fn function_name generic<T>(param: T) {}", "generic fn function_name<T>(param: T) {}", "fn<T> function_name(param: T) {}"],
        "answer_en": "fn function_name<T>(param: T) -> T {}",
        "answer_hi": "fn function_name<T>(param: T) -> T {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What are traits in Rust?",
        "question_hi": "Rust में traits क्या हैं?",
        "options_en": ["Shared behavior that types can implement", "Data types", "Functions", "Variables"],
        "options_hi": ["शेयर्ड बिहेवियर जिसे टाइप इम्प्लीमेंट कर सकते हैं", "डेटा टाइप", "फंक्शन", "वेरिएबल"],
        "answer_en": "Shared behavior that types can implement",
        "answer_hi": "शेयर्ड बिहेवियर जिसे टाइप इम्प्लीमेंट कर सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "How do you define a trait?",
        "question_hi": "trait कैसे डिफाइन करते हैं?",
        "options_en": ["trait MyTrait { fn method(&self); }", "struct trait MyTrait { }", "interface MyTrait { }", "define trait MyTrait;"],
        "options_hi": ["trait MyTrait { fn method(&self); }", "struct trait MyTrait { }", "interface MyTrait { }", "define trait MyTrait;"],
        "answer_en": "trait MyTrait { fn method(&self); }",
        "answer_hi": "trait MyTrait { fn method(&self); }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How do you implement a trait for a type?",
        "question_hi": "टाइप के लिए trait कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["impl MyTrait for MyType {}", "trait impl for MyType {}", "MyType implements MyTrait {}", "implement MyTrait for MyType {}"],
        "options_hi": ["impl MyTrait for MyType {}", "trait impl for MyType {}", "MyType implements MyTrait {}", "implement MyTrait for MyType {}"],
        "answer_en": "impl MyTrait for MyType {}",
        "answer_hi": "impl MyTrait for MyType {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is testing in Rust?",
        "question_hi": "Rust में testing क्या है?",
        "options_en": ["Verifying that code works as expected", "Compiling code", "Running code", "Debugging code"],
        "options_hi": ["वेरिफाई करना कि कोड एक्सपेक्टेड तरीके से काम करता है", "कोड कम्पाइल करना", "कोड रन करना", "कोड डीबग करना"],
        "answer_en": "Verifying that code works as expected",
        "answer_hi": "वेरिफाई करना कि कोड एक्सपेक्टेड तरीके से काम करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you write a test function?",
        "question_hi": "test फंक्शन कैसे लिखते हैं?",
        "options_en": ["#[test] fn test_function() {}", "#[test] function test_function() {}", "test fn test_function() {}", "fn test test_function() {}"],
        "options_hi": ["#[test] fn test_function() {}", "#[test] function test_function() {}", "test fn test_function() {}", "fn test test_function() {}"],
        "answer_en": "#[test] fn test_function() {}",
        "answer_hi": "#[test] fn test_function() {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "How do you run tests?",
        "question_hi": "test कैसे रन करते हैं?",
        "options_en": ["cargo test", "rust test", "cargo run --test", "rustc --test"],
        "options_hi": ["cargo test", "rust test", "cargo run --test", "rustc --test"],
        "answer_en": "cargo test",
        "answer_hi": "cargo test",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What are assertions in testing?",
        "question_hi": "testing में assertions क्या हैं?",
        "options_en": ["Checks that verify expected behavior", "Test functions", "Test modules", "Test runners"],
        "options_hi": ["चेक जो एक्सपेक्टेड बिहेवियर वेरिफाई करते हैं", "test फंक्शन", "test मॉड्यूल", "test रनर"],
        "answer_en": "Checks that verify expected behavior",
        "answer_hi": "चेक जो एक्सपेक्टेड बिहेवियर वेरिफाई करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "How do you assert two values are equal?",
        "question_hi": "दो वैल्यू इक्वल हैं यह कैसे अस्सेर्ट करते हैं?",
        "options_en": ["assert_eq!(left, right);", "assert_equal(left, right);", "assert(left == right);", "check_eq!(left, right);"],
        "options_hi": ["assert_eq!(left, right);", "assert_equal(left, right);", "assert(left == right);", "check_eq!(left, right);"],
        "answer_en": "assert_eq!(left, right);",
        "answer_hi": "assert_eq!(left, right);",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is documentation in Rust?",
        "question_hi": "Rust में documentation क्या है?",
        "options_en": ["Comments that generate documentation", "Code comments", "Function names", "Variable names"],
        "options_hi": ["कमेंट जो डॉक्युमेंटेशन जेनरेट करते हैं", "कोड कमेंट", "फंक्शन नाम", "वेरिएबल नाम"],
        "answer_en": "Comments that generate documentation",
        "answer_hi": "कमेंट जो डॉक्युमेंटेशन जेनरेट करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "How do you write documentation comments?",
        "question_hi": "डॉक्युमेंटेशन कमेंट कैसे लिखते हैं?",
        "options_en": ["/// This is a documentation comment", "//! This is a documentation comment", "/** This is a documentation comment */", "All of the above"],
        "options_hi": ["/// यह एक डॉक्युमेंटेशन कमेंट है", "//! यह एक डॉक्युमेंटेशन कमेंट है", "/** यह एक डॉक्युमेंटेशन कमेंट है */", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How do you generate documentation?",
        "question_hi": "डॉक्युमेंटेशन कैसे जेनरेट करते हैं?",
        "options_en": ["cargo doc", "rust doc", "cargo documentation", "rust documentation"],
        "options_hi": ["cargo doc", "rust doc", "cargo documentation", "rust documentation"],
        "answer_en": "cargo doc",
        "answer_hi": "cargo doc",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is Cargo in Rust?",
        "question_hi": "Rust में Cargo क्या है?",
        "options_en": ["Rust's package manager and build system", "A programming language", "A text editor", "A database"],
        "options_hi": ["Rust का पैकेज मैनेजर और बिल्ड सिस्टम", "एक प्रोग्रामिंग लैंग्वेज", "एक टेक्स्ट एडिटर", "एक डेटाबेस"],
        "answer_en": "Rust's package manager and build system",
        "answer_hi": "Rust का पैकेज मैनेजर और बिल्ड सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What file describes a Rust project?",
        "question_hi": "कौन सी फाइल Rust प्रोजेक्ट डिस्क्राइब करती है?",
        "options_en": ["Cargo.toml", "package.json", "rust.toml", "project.toml"],
        "options_hi": ["Cargo.toml", "package.json", "rust.toml", "project.toml"],
        "answer_en": "Cargo.toml",
        "answer_hi": "Cargo.toml",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "How do you create a new Rust project?",
        "question_hi": "नया Rust प्रोजेक्ट कैसे बनाते हैं?",
        "options_en": ["cargo new project_name", "rust new project_name", "cargo create project_name", "rust create project_name"],
        "options_hi": ["cargo new project_name", "rust new project_name", "cargo create project_name", "rust create project_name"],
        "answer_en": "cargo new project_name",
        "answer_hi": "cargo new project_name",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How do you build a Rust project?",
        "question_hi": "Rust प्रोजेक्ट कैसे बिल्ड करते हैं?",
        "options_en": ["cargo build", "rust build", "cargo compile", "rust compile"],
        "options_hi": ["cargo build", "rust build", "cargo compile", "rust compile"],
        "answer_en": "cargo build",
        "answer_hi": "cargo build",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "How do you run a Rust project?",
        "question_hi": "Rust प्रोजेक्ट कैसे रन करते हैं?",
        "options_en": ["cargo run", "rust run", "cargo execute", "rust execute"],
        "options_hi": ["cargo run", "rust run", "cargo execute", "rust execute"],
        "answer_en": "cargo run",
        "answer_hi": "cargo run",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What are dependencies in Cargo.toml?",
        "question_hi": "Cargo.toml में dependencies क्या हैं?",
        "options_en": ["External crates your project depends on", "Your project's files", "Rust compiler versions", "Operating systems"],
        "options_hi": ["एक्सटर्नल क्रेट जिन पर आपका प्रोजेक्ट डिपेंड करता है", "आपके प्रोजेक्ट की फाइल", "Rust कम्पाइलर वर्जन", "ऑपरेटिंग सिस्टम"],
        "answer_en": "External crates your project depends on",
        "answer_hi": "एक्सटर्नल क्रेट जिन पर आपका प्रोजेक्ट डिपेंड करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "How do you add a dependency?",
        "question_hi": "dependency कैसे ऐड करते हैं?",
        "options_en": ["Add it to [dependencies] in Cargo.toml", "Add it to main.rs", "Add it to lib.rs", "Run cargo add dependency"],
        "options_hi": ["Cargo.toml में [dependencies] में ऐड करें", "main.rs में ऐड करें", "lib.rs में ऐड करें", "cargo add dependency रन करें"],
        "answer_en": "Add it to [dependencies] in Cargo.toml",
        "answer_hi": "Cargo.toml में [dependencies] में ऐड करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is a crate in Rust?",
        "question_hi": "Rust में crate क्या है?",
        "options_en": ["A package of Rust code", "A function", "A module", "A variable"],
        "options_hi": ["Rust कोड का एक पैकेज", "एक फंक्शन", "एक मॉड्यूल", "एक वेरिएबल"],
        "answer_en": "A package of Rust code",
        "answer_hi": "Rust कोड का एक पैकेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What are the two types of crates?",
        "question_hi": "crates के दो प्रकार क्या हैं?",
        "options_en": ["Binary and library", "Main and sub", "Primary and secondary", "Executable and module"],
        "options_hi": ["बाइनरी और लाइब्रेरी", "मेन और सब", "प्राइमरी और सेकेंडरी", "एक्जिक्यूटेबल और मॉड्यूल"],
        "answer_en": "Binary and library",
        "answer_hi": "बाइनरी और लाइब्रेरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is a binary crate?",
        "question_hi": "binary crate क्या है?",
        "options_en": ["A crate that compiles to an executable", "A crate that contains reusable code", "A crate for testing", "A crate for documentation"],
        "options_hi": ["एक क्रेट जो एक्जिक्यूटेबल में कम्पाइल होता है", "एक क्रेट जिसमें रियूजेबल कोड होता है", "टेस्टिंग के लिए एक क्रेट", "डॉक्युमेंटेशन के लिए एक क्रेट"],
        "answer_en": "A crate that compiles to an executable",
        "answer_hi": "एक क्रेट जो एक्जिक्यूटेबल में कम्पाइल होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is a library crate?",
        "question_hi": "library crate क्या है?",
        "options_en": ["A crate that contains reusable code", "A crate that compiles to an executable", "A crate for testing", "A crate for documentation"],
        "options_hi": ["एक क्रेट जिसमें रियूजेबल कोड होता है", "एक क्रेट जो एक्जिक्यूटेबल में कम्पाइल होता है", "टेस्टिंग के लिए एक क्रेट", "डॉक्युमेंटेशन के लिए एक क्रेट"],
        "answer_en": "A crate that contains reusable code",
        "answer_hi": "एक क्रेट जिसमें रियूजेबल कोड होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the main source file for a binary crate?",
        "question_hi": "binary crate के लिए मेन सोर्स फाइल क्या है?",
        "options_en": ["src/main.rs", "src/lib.rs", "main.rs", "lib.rs"],
        "options_hi": ["src/main.rs", "src/lib.rs", "main.rs", "lib.rs"],
        "answer_en": "src/main.rs",
        "answer_hi": "src/main.rs",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the main source file for a library crate?",
        "question_hi": "library crate के लिए मेन सोर्स फाइल क्या है?",
        "options_en": ["src/lib.rs", "src/main.rs", "lib.rs", "main.rs"],
        "options_hi": ["src/lib.rs", "src/main.rs", "lib.rs", "main.rs"],
        "answer_en": "src/lib.rs",
        "answer_hi": "src/lib.rs",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What are lifetimes in Rust?",
        "question_hi": "Rust में lifetimes क्या हैं?",
        "options_en": ["A way to ensure references are always valid", "A type of variable", "A function parameter", "A loop construct"],
        "options_hi": ["रिफरेन्स हमेशा वैलिड रहें इसका तरीका", "एक प्रकार का वेरिएबल", "एक फंक्शन पैरामीटर", "एक लूप कंस्ट्रक्ट"],
        "answer_en": "A way to ensure references are always valid",
        "answer_hi": "रिफरेन्स हमेशा वैलिड रहें इसका तरीका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "How do you specify a lifetime?",
        "question_hi": "lifetime कैसे स्पेसिफाई करते हैं?",
        "options_en": ["fn func<'a>(param: &'a str) -> &'a str {}", "fn func<lifetime a>(param: &a str) {}", "fn func(param: &'a str) -> &'a str {}", "lifetime fn func<'a>(param: &str) {}"],
        "options_hi": ["fn func<'a>(param: &'a str) -> &'a str {}", "fn func<lifetime a>(param: &a str) {}", "fn func(param: &'a str) -> &'a str {}", "lifetime fn func<'a>(param: &str) {}"],
        "answer_en": "fn func<'a>(param: &'a str) -> &'a str {}",
        "answer_hi": "fn func<'a>(param: &'a str) -> &'a str {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the 'static lifetime?",
        "question_hi": "'static lifetime क्या है?",
        "options_en": ["A lifetime that lasts for the entire program", "A short lifetime", "A variable lifetime", "A function lifetime"],
        "options_hi": ["एक लाइफटाइम जो पूरे प्रोग्राम के लिए रहती है", "एक शॉर्ट लाइफटाइम", "एक वेरिएबल लाइफटाइम", "एक फंक्शन लाइफटाइम"],
        "answer_en": "A lifetime that lasts for the entire program",
        "answer_hi": "एक लाइफटाइम जो पूरे प्रोग्राम के लिए रहती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What are closures in Rust?",
        "question_hi": "Rust में closures क्या हैं?",
        "options_en": ["Anonymous functions that capture their environment", "Named functions", "Function pointers", "Method calls"],
        "options_hi": ["अनॉनिमस फंक्शन जो अपना एनवायरनमेंट कैप्चर करते हैं", "नेमड फंक्शन", "फंक्शन पॉइंटर", "मेथड कॉल"],
        "answer_en": "Anonymous functions that capture their environment",
        "answer_hi": "अनॉनिमस फंक्शन जो अपना एनवायरनमेंट कैप्चर करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you define a closure?",
        "question_hi": "closure कैसे डिफाइन करते हैं?",
        "options_en": ["let closure = |x| x + 1;", "closure |x| x + 1;", "let closure = function(x) { x + 1 };", "fn closure(x) { x + 1 }"],
        "options_hi": ["let closure = |x| x + 1;", "closure |x| x + 1;", "let closure = function(x) { x + 1 };", "fn closure(x) { x + 1 }"],
        "answer_en": "let closure = |x| x + 1;",
        "answer_hi": "let closure = |x| x + 1;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What are the Fn traits?",
        "question_hi": "Fn traits क्या हैं?",
        "options_en": ["Traits for closure types", "Traits for functions", "Traits for variables", "Traits for modules"],
        "options_hi": ["क्लोजर टाइप के लिए traits", "फंक्शन के लिए traits", "वेरिएबल के लिए traits", "मॉड्यूल के लिए traits"],
        "answer_en": "Traits for closure types",
        "answer_hi": "क्लोजर टाइप के लिए traits",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the difference between Fn, FnMut, and FnOnce?",
        "question_hi": "Fn, FnMut, और FnOnce में क्या अंतर है?",
        "options_en": ["How they capture variables from the environment", "Their return types", "Their parameter types", "Their names"],
        "options_hi": ["वे एनवायरनमेंट से वेरिएबल कैसे कैप्चर करते हैं", "उनके रिटर्न टाइप", "उनके पैरामीटर टाइप", "उनके नाम"],
        "answer_en": "How they capture variables from the environment",
        "answer_hi": "वे एनवायरनमेंट से वेरिएबल कैसे कैप्चर करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What are iterators in Rust?",
        "question_hi": "Rust में iterators क्या हैं?",
        "options_en": ["A way to process sequences of elements", "A type of loop", "A function type", "A variable type"],
        "options_hi": ["एलिमेंट के सीक्वेंस प्रोसेस करने का तरीका", "एक प्रकार का लूप", "एक फंक्शन टाइप", "एक वेरिएबल टाइप"],
        "answer_en": "A way to process sequences of elements",
        "answer_hi": "एलिमेंट के सीक्वेंस प्रोसेस करने का तरीका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How do you create an iterator from a vector?",
        "question_hi": "vector से iterator कैसे बनाते हैं?",
        "options_en": ["v.iter()", "v.iterator()", "iterator(v)", "v.to_iter()"],
        "options_hi": ["v.iter()", "v.iterator()", "iterator(v)", "v.to_iter()"],
        "answer_en": "v.iter()",
        "answer_hi": "v.iter()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the Iterator trait?",
        "question_hi": "Iterator trait क्या है?",
        "options_en": ["A trait that defines how to iterate over items", "A trait for functions", "A trait for variables", "A trait for modules"],
        "options_hi": ["एक trait जो डिफाइन करता है कि आइटम पर कैसे इटरेट करें", "फंक्शन के लिए एक trait", "वेरिएबल के लिए एक trait", "मॉड्यूल के लिए एक trait"],
        "answer_en": "A trait that defines how to iterate over items",
        "answer_hi": "एक trait जो डिफाइन करता है कि आइटम पर कैसे इटरेट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What are smart pointers in Rust?",
        "question_hi": "Rust में smart pointers क्या हैं?",
        "options_en": ["Data structures that act like pointers but have additional capabilities", "Regular pointers", "Function pointers", "Variable pointers"],
        "options_hi": ["डेटा स्ट्रक्चर जो पॉइंटर की तरह काम करते हैं लेकिन अतिरिक्त क्षमताएं रखते हैं", "रेगुलर पॉइंटर", "फंक्शन पॉइंटर", "वेरिएबल पॉइंटर"],
        "answer_en": "Data structures that act like pointers but have additional capabilities",
        "answer_hi": "डेटा स्ट्रक्चर जो पॉइंटर की तरह काम करते हैं लेकिन अतिरिक्त क्षमताएं रखते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is Box<T> used for?",
        "question_hi": "Box<T> का उपयोग किस लिए किया जाता है?",
        "options_en": ["Heap allocation", "Stack allocation", "Function calls", "Module organization"],
        "options_hi": ["हीप अलोकेशन", "स्टैक अलोकेशन", "फंक्शन कॉल", "मॉड्यूल ऑर्गनाइजेशन"],
        "answer_en": "Heap allocation",
        "answer_hi": "हीप अलोकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How do you create a Box?",
        "question_hi": "Box कैसे बनाते हैं?",
        "options_en": ["let b = Box::new(5);", "let b = new Box(5);", "let b = Box::create(5);", "let b = Box(5);"],
        "options_hi": ["let b = Box::new(5);", "let b = new Box(5);", "let b = Box::create(5);", "let b = Box(5);"],
        "answer_en": "let b = Box::new(5);",
        "answer_hi": "let b = Box::new(5);",
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