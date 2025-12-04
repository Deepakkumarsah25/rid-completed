const questions=[
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
        "question_en": "Which company originally sponsored Rust development?",
        "question_hi": "कौन सी कंपनी ने मूल रूप से Rust विकास को प्रायोजित किया?",
        "options_en": ["Mozilla", "Google", "Microsoft", "Apple"],
        "options_hi": ["मोज़िला", "गूगल", "माइक्रोसॉफ्ट", "एप्पल"],
        "answer_en": "Mozilla",
        "answer_hi": "मोज़िला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What year was Rust first released?",
        "question_hi": "Rust पहली बार किस वर्ष रिलीज़ हुआ?",
        "options_en": ["2010", "2012", "2015", "2018"],
        "options_hi": ["2010", "2012", "2015", "2018"],
        "answer_en": "2010",
        "answer_hi": "2010",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is Rust's package manager called?",
        "question_hi": "Rust के पैकेज मैनेजर को क्या कहते हैं?",
        "options_en": ["Cargo", "NPM", "Pip", "Gem"],
        "options_hi": ["कार्गो", "एनपीएम", "पिप", "जेम"],
        "answer_en": "Cargo",
        "answer_hi": "कार्गो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the Rust compiler called?",
        "question_hi": "Rust कम्पाइलर को क्या कहते हैं?",
        "options_en": ["rustc", "rustcc", "rc", "rust-compile"],
        "options_hi": ["रस्टसी", "रस्टसीसी", "आरसी", "रस्ट-कम्पाइल"],
        "answer_en": "rustc",
        "answer_hi": "रस्टसी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What file contains Rust project metadata?",
        "question_hi": "कौन सी फाइल Rust प्रोजेक्ट मेटाडेटा रखती है?",
        "options_en": ["Cargo.toml", "package.json", "rust.toml", "config.rs"],
        "options_hi": ["Cargo.toml", "package.json", "rust.toml", "config.rs"],
        "answer_en": "Cargo.toml",
        "answer_hi": "Cargo.toml",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "How do you create a new Rust project?",
        "question_hi": "नया Rust प्रोजेक्ट कैसे बनाते हैं?",
        "options_en": ["cargo new project_name", "rust new project_name", "cargo init project_name", "rust create project_name"],
        "options_hi": ["cargo new प्रोजेक्ट_नाम", "rust new प्रोजेक्ट_नाम", "cargo init प्रोजेक्ट_नाम", "rust create प्रोजेक्ट_नाम"],
        "answer_en": "cargo new project_name",
        "answer_hi": "cargo new प्रोजेक्ट_नाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you compile a Rust program?",
        "question_hi": "Rust प्रोग्राम कैसे कम्पाइल करते हैं?",
        "options_en": ["cargo build", "rustc main.rs", "cargo compile", "Both A and B"],
        "options_hi": ["cargo build", "rustc main.rs", "cargo compile", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "How do you run a Rust program?",
        "question_hi": "Rust प्रोग्राम कैसे चलाते हैं?",
        "options_en": ["cargo run", "./target/debug/project_name", "rust run main.rs", "Both A and B"],
        "options_hi": ["cargo run", "./target/debug/प्रोजेक्ट_नाम", "rust run main.rs", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the entry point of a Rust program?",
        "question_hi": "Rust प्रोग्राम का एंट्री पॉइंट क्या है?",
        "options_en": ["main function", "start function", "init function", "begin function"],
        "options_hi": ["मुख्य फ़ंक्शन", "स्टार्ट फ़ंक्शन", "इनिशियलाइज़ फ़ंक्शन", "बिगिन फ़ंक्शन"],
        "answer_en": "main function",
        "answer_hi": "मुख्य फ़ंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "How do you print to the console?",
        "question_hi": "कंसोल पर कैसे प्रिंट करते हैं?",
        "options_en": ["println!()", "print!()", "console.log()", "Both A and B"],
        "options_hi": ["println!()", "print!()", "console.log()", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What does the '!' in println! indicate?",
        "question_hi": "println! में '!' क्या दर्शाता है?",
        "options_en": ["It's a macro", "It's a function", "It's a variable", "It's a type"],
        "options_hi": ["यह एक मैक्रो है", "यह एक फ़ंक्शन है", "यह एक वेरिएबल है", "यह एक टाइप है"],
        "answer_en": "It's a macro",
        "answer_hi": "यह एक मैक्रो है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How do you declare a variable?",
        "question_hi": "वेरिएबल कैसे डिक्लेयर करते हैं?",
        "options_en": ["let x = 5;", "var x = 5;", "int x = 5;", "x := 5;"],
        "options_hi": ["let x = 5;", "var x = 5;", "int x = 5;", "x := 5;"],
        "answer_en": "let x = 5;",
        "answer_hi": "let x = 5;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Are variables mutable by default?",
        "question_hi": "क्या वेरिएबल डिफ़ॉल्ट रूप से म्यूटेबल होते हैं?",
        "options_en": ["No", "Yes", "Only integers", "Only strings"],
        "options_hi": ["नहीं", "हाँ", "केवल इंटीजर", "केवल स्ट्रिंग्स"],
        "answer_en": "No",
        "answer_hi": "नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "How do you make a variable mutable?",
        "question_hi": "वेरिएबल को म्यूटेबल कैसे बनाते हैं?",
        "options_en": ["let mut x = 5;", "mut x = 5;", "let x = mut 5;", "variable mut x = 5;"],
        "options_hi": ["let mut x = 5;", "mut x = 5;", "let x = mut 5;", "variable mut x = 5;"],
        "answer_en": "let mut x = 5;",
        "answer_hi": "let mut x = 5;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the difference between let and const?",
        "question_hi": "let और const में क्या अंतर है?",
        "options_en": ["const requires type annotation", "let is for variables, const for constants", "const is compile-time constant", "All of the above"],
        "options_hi": ["const को टाइप एनोटेशन चाहिए", "let वेरिएबल्स के लिए, const कॉन्स्टेंट्स के लिए", "const कम्पाइल-टाइम कॉन्स्टेंट है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "How do you declare a constant?",
        "question_hi": "कॉन्स्टेंट कैसे डिक्लेयर करते हैं?",
        "options_en": ["const MAX: u32 = 100;", "let MAX = 100;", "static MAX = 100;", "define MAX 100;"],
        "options_hi": ["const MAX: u32 = 100;", "let MAX = 100;", "static MAX = 100;", "define MAX 100;"],
        "answer_en": "const MAX: u32 = 100;",
        "answer_hi": "const MAX: u32 = 100;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What are the basic data types in Rust?",
        "question_hi": "Rust में बेसिक डेटा टाइप्स क्या हैं?",
        "options_en": ["Scalar and compound", "Primitive and reference", "Value and pointer", "Simple and complex"],
        "options_hi": ["स्केलर और कंपाउंड", "प्रिमिटिव और रेफरेन्स", "वैल्यू और पॉइंटर", "सिंपल और कॉम्प्लेक्स"],
        "answer_en": "Scalar and compound",
        "answer_hi": "स्केलर और कंपाउंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which are scalar types?",
        "question_hi": "स्केलर टाइप्स कौन से हैं?",
        "options_en": ["Integers, floats, booleans, characters", "Arrays, tuples", "Strings, vectors", "Structs, enums"],
        "options_hi": ["इंटीजर, फ्लोट्स, बूलियन्स, कैरेक्टर्स", "ऐरे, टुपल्स", "स्ट्रिंग्स, वेक्टर्स", "स्ट्रक्ट्स, एनम्स"],
        "answer_en": "Integers, floats, booleans, characters",
        "answer_hi": "इंटीजर, फ्लोट्स, बूलियन्स, कैरेक्टर्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the default integer type?",
        "question_hi": "डिफ़ॉल्ट इंटीजर टाइप क्या है?",
        "options_en": ["i32", "i64", "usize", "isize"],
        "options_hi": ["i32", "i64", "usize", "isize"],
        "answer_en": "i32",
        "answer_hi": "i32",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What does 'i' in i32 stand for?",
        "question_hi": "i32 में 'i' क्या दर्शाता है?",
        "options_en": ["Signed integer", "Integer", "Index", "Initial"],
        "options_hi": ["साइन्ड इंटीजर", "इंटीजर", "इंडेक्स", "इनिशियल"],
        "answer_en": "Signed integer",
        "answer_hi": "साइन्ड इंटीजर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does 'u' in u32 stand for?",
        "question_hi": "u32 में 'u' क्या दर्शाता है?",
        "options_en": ["Unsigned integer", "Universal", "Unique", "User"],
        "options_hi": ["अनसाइन्ड इंटीजर", "यूनिवर्सल", "यूनिक", "यूज़र"],
        "answer_en": "Unsigned integer",
        "answer_hi": "अनसाइन्ड इंटीजर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the range of i8?",
        "question_hi": "i8 की रेंज क्या है?",
        "options_en": ["-128 to 127", "0 to 255", "-32768 to 32767", "0 to 65535"],
        "options_hi": ["-128 से 127", "0 से 255", "-32768 से 32767", "0 से 65535"],
        "answer_en": "-128 to 127",
        "answer_hi": "-128 से 127",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the range of u8?",
        "question_hi": "u8 की रेंज क्या है?",
        "options_en": ["0 to 255", "-128 to 127", "0 to 65535", "-32768 to 32767"],
        "options_hi": ["0 से 255", "-128 से 127", "0 से 65535", "-32768 से 32767"],
        "answer_en": "0 to 255",
        "answer_hi": "0 से 255",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What are the floating point types?",
        "question_hi": "फ्लोटिंग पॉइंट टाइप्स क्या हैं?",
        "options_en": ["f32 and f64", "float and double", "f16 and f32", "f64 and f128"],
        "options_hi": ["f32 और f64", "float और double", "f16 और f32", "f64 और f128"],
        "answer_en": "f32 and f64",
        "answer_hi": "f32 और f64",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the boolean type?",
        "question_hi": "बूलियन टाइप क्या है?",
        "options_en": ["bool", "boolean", "Boolean", "bit"],
        "options_hi": ["bool", "boolean", "Boolean", "bit"],
        "answer_en": "bool",
        "answer_hi": "bool",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What are the boolean values?",
        "question_hi": "बूलियन वैल्यूज क्या हैं?",
        "options_en": ["true and false", "True and False", "1 and 0", "yes and no"],
        "options_hi": ["true और false", "True और False", "1 और 0", "yes और no"],
        "answer_en": "true and false",
        "answer_hi": "true और false",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the character type?",
        "question_hi": "कैरेक्टर टाइप क्या है?",
        "options_en": ["char", "character", "chr", "c"],
        "options_hi": ["char", "character", "chr", "c"],
        "answer_en": "char",
        "answer_hi": "char",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How many bytes does a char occupy?",
        "question_hi": "एक char कितने बाइट्स लेता है?",
        "options_en": ["4 bytes", "1 byte", "2 bytes", "8 bytes"],
        "options_hi": ["4 बाइट्स", "1 बाइट", "2 बाइट्स", "8 बाइट्स"],
        "answer_en": "4 bytes",
        "answer_hi": "4 बाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What are compound types?",
        "question_hi": "कंपाउंड टाइप्स क्या हैं?",
        "options_en": ["Tuples and arrays", "Strings and vectors", "Structs and enums", "Functions and closures"],
        "options_hi": ["टुपल्स और ऐरे", "स्ट्रिंग्स और वेक्टर्स", "स्ट्रक्ट्स और एनम्स", "फ़ंक्शन्स और क्लोजर्स"],
        "answer_en": "Tuples and arrays",
        "answer_hi": "टुपल्स और ऐरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "How do you create a tuple?",
        "question_hi": "टुपल कैसे बनाते हैं?",
        "options_en": ["let tup = (500, 6.4, 1);", "let tup = [500, 6.4, 1];", "let tup = {500, 6.4, 1};", "tuple tup = (500, 6.4, 1);"],
        "options_hi": ["let tup = (500, 6.4, 1);", "let tup = [500, 6.4, 1];", "let tup = {500, 6.4, 1};", "tuple tup = (500, 6.4, 1);"],
        "answer_en": "let tup = (500, 6.4, 1);",
        "answer_hi": "let tup = (500, 6.4, 1);",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you access tuple elements?",
        "question_hi": "टुपल एलिमेंट्स तक कैसे पहुंचते हैं?",
        "options_en": ["tup.0", "tup[0]", "tup(0)", "tup->0"],
        "options_hi": ["tup.0", "tup[0]", "tup(0)", "tup->0"],
        "answer_en": "tup.0",
        "answer_hi": "tup.0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "How do you create an array?",
        "question_hi": "ऐरे कैसे बनाते हैं?",
        "options_en": ["let a = [1, 2, 3];", "let a = (1, 2, 3);", "let a = {1, 2, 3};", "array a = [1, 2, 3];"],
        "options_hi": ["let a = [1, 2, 3];", "let a = (1, 2, 3);", "let a = {1, 2, 3};", "array a = [1, 2, 3];"],
        "answer_en": "let a = [1, 2, 3];",
        "answer_hi": "let a = [1, 2, 3];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you access array elements?",
        "question_hi": "ऐरे एलिमेंट्स तक कैसे पहुंचते हैं?",
        "options_en": ["a[0]", "a.0", "a(0)", "a->0"],
        "options_hi": ["a[0]", "a.0", "a(0)", "a->0"],
        "answer_en": "a[0]",
        "answer_hi": "a[0]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the string slice type?",
        "question_hi": "स्ट्रिंग स्लाइस टाइप क्या है?",
        "options_en": ["&str", "str", "String", "&string"],
        "options_hi": ["&str", "str", "String", "&string"],
        "answer_en": "&str",
        "answer_hi": "&str",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do you create a string slice?",
        "question_hi": "स्ट्रिंग स्लाइस कैसे बनाते हैं?",
        "options_en": ["let s = \"hello\";", "let s: &str = \"hello\";", "let s = String::from(\"hello\");", "Both A and B"],
        "options_hi": ["let s = \"hello\";", "let s: &str = \"hello\";", "let s = String::from(\"hello\");", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the String type?",
        "question_hi": "String टाइप क्या है?",
        "options_en": ["A growable, owned string", "A fixed string", "A string slice", "A character array"],
        "options_hi": ["एक ग्रोएबल, ओनड स्ट्रिंग", "एक फिक्स्ड स्ट्रिंग", "एक स्ट्रिंग स्लाइस", "एक कैरेक्टर ऐरे"],
        "answer_en": "A growable, owned string",
        "answer_hi": "एक ग्रोएबल, ओनड स्ट्रिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How do you create a String?",
        "question_hi": "String कैसे बनाते हैं?",
        "options_en": ["String::from(\"hello\")", "\"hello\".to_string()", "\"hello\".into()", "All of the above"],
        "options_hi": ["String::from(\"hello\")", "\"hello\".to_string()", "\"hello\".into()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "How do you define a function?",
        "question_hi": "फ़ंक्शन कैसे डिफाइन करते हैं?",
        "options_en": ["fn my_func() {}", "function my_func() {}", "def my_func() {}", "func my_func() {}"],
        "options_hi": ["fn my_func() {}", "function my_func() {}", "def my_func() {}", "func my_func() {}"],
        "answer_en": "fn my_func() {}",
        "answer_hi": "fn my_func() {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How do you call a function?",
        "question_hi": "फ़ंक्शन कैसे कॉल करते हैं?",
        "options_en": ["my_func();", "call my_func();", "my_func.call();", "invoke my_func();"],
        "options_hi": ["my_func();", "call my_func();", "my_func.call();", "invoke my_func();"],
        "answer_en": "my_func();",
        "answer_hi": "my_func();",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How do you return a value from a function?",
        "question_hi": "फ़ंक्शन से वैल्यू कैसे रिटर्न करते हैं?",
        "options_en": ["fn five() -> i32 { 5 }", "fn five(): i32 { return 5; }", "fn five() -> i32 { return 5; }", "All of the above"],
        "options_hi": ["fn five() -> i32 { 5 }", "fn five(): i32 { return 5; }", "fn five() -> i32 { return 5; }", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What are statements?",
        "question_hi": "स्टेटमेंट्स क्या हैं?",
        "options_en": ["Instructions that perform actions", "Expressions that evaluate to values", "Function definitions", "Type declarations"],
        "options_hi": ["निर्देश जो एक्शन करते हैं", "एक्सप्रेशन जो वैल्यू इवैल्यूएट करते हैं", "फ़ंक्शन डेफिनिशन", "टाइप डिक्लेरेशन"],
        "answer_en": "Instructions that perform actions",
        "answer_hi": "निर्देश जो एक्शन करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What are expressions?",
        "question_hi": "एक्सप्रेशन क्या हैं?",
        "options_en": ["Code that evaluates to a value", "Instructions that perform actions", "Function calls", "Variable declarations"],
        "options_hi": ["कोड जो वैल्यू इवैल्यूएट करता है", "निर्देश जो एक्शन करते हैं", "फ़ंक्शन कॉल", "वेरिएबल डिक्लेरेशन"],
        "answer_en": "Code that evaluates to a value",
        "answer_hi": "कोड जो वैल्यू इवैल्यूएट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
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
        "num": 45,
        "question_en": "How do you write an if statement?",
        "question_hi": "if स्टेटमेंट कैसे लिखते हैं?",
        "options_en": ["if number < 5 { println!(\"small\"); }", "if (number < 5) { println!(\"small\"); }", "if number < 5 then println!(\"small\");", "Both A and B"],
        "options_hi": ["if number < 5 { println!(\"small\"); }", "if (number < 5) { println!(\"small\"); }", "if number < 5 then println!(\"small\");", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Can if be used as an expression?",
        "question_hi": "क्या if को एक्सप्रेशन की तरह यूज किया जा सकता है?",
        "options_en": ["Yes", "No", "Only in functions", "Only with integers"],
        "options_hi": ["हाँ", "नहीं", "केवल फ़ंक्शन में", "केवल इंटीजर के साथ"],
        "answer_en": "Yes",
        "answer_hi": "हाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "How do you write if as an expression?",
        "question_hi": "if को एक्सप्रेशन की तरह कैसे लिखते हैं?",
        "options_en": ["let number = if condition { 5 } else { 6 };", "let number = if condition then 5 else 6;", "let number = condition ? 5 : 6;", "let number = if condition 5 else 6;"],
        "options_hi": ["let number = if condition { 5 } else { 6 };", "let number = if condition then 5 else 6;", "let number = condition ? 5 : 6;", "let number = if condition 5 else 6;"],
        "answer_en": "let number = if condition { 5 } else { 6 };",
        "answer_hi": "let number = if condition { 5 } else { 6 };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the loop keyword?",
        "question_hi": "लूप कीवर्ड क्या है?",
        "options_en": ["loop", "while", "for", "repeat"],
        "options_hi": ["loop", "while", "for", "repeat"],
        "answer_en": "loop",
        "answer_hi": "loop",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How do you break out of a loop?",
        "question_hi": "लूप से कैसे बाहर निकलते हैं?",
        "options_en": ["break;", "exit;", "stop;", "return;"],
        "options_hi": ["break;", "exit;", "stop;", "return;"],
        "answer_en": "break;",
        "answer_hi": "break;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you skip to the next iteration?",
        "question_hi": "अगले इटरेशन पर कैसे जाते हैं?",
        "options_en": ["continue;", "skip;", "next;", "jump;"],
        "options_hi": ["continue;", "skip;", "next;", "jump;"],
        "answer_en": "continue;",
        "answer_hi": "continue;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the while loop syntax?",
        "question_hi": "while लूप सिंटैक्स क्या है?",
        "options_en": ["while condition { }", "while (condition) { }", "do while condition", "while condition do"],
        "options_hi": ["while condition { }", "while (condition) { }", "do while condition", "while condition do"],
        "answer_en": "while condition { }",
        "answer_hi": "while condition { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How do you write a for loop?",
        "question_hi": "for लूप कैसे लिखते हैं?",
        "options_en": ["for element in array { }", "for (element in array) { }", "for element of array { }", "foreach element in array { }"],
        "options_hi": ["for element in array { }", "for (element in array) { }", "for element of array { }", "foreach element in array { }"],
        "answer_en": "for element in array { }",
        "answer_hi": "for element in array { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What does 0..5 represent?",
        "question_hi": "0..5 क्या दर्शाता है?",
        "options_en": ["Range from 0 to 4", "Range from 0 to 5", "Array of 5 elements", "List of numbers"],
        "options_hi": ["0 से 4 तक रेंज", "0 से 5 तक रेंज", "5 एलिमेंट का ऐरे", "नंबर की लिस्ट"],
        "answer_en": "Range from 0 to 4",
        "answer_hi": "0 से 4 तक रेंज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What does 0..=5 represent?",
        "question_hi": "0..=5 क्या दर्शाता है?",
        "options_en": ["Range from 0 to 5 inclusive", "Range from 0 to 4", "Array of 6 elements", "List of numbers"],
        "options_hi": ["0 से 5 तक इन्क्लूसिव रेंज", "0 से 4 तक रेंज", "6 एलिमेंट का ऐरे", "नंबर की लिस्ट"],
        "answer_en": "Range from 0 to 5 inclusive",
        "answer_hi": "0 से 5 तक इन्क्लूसिव रेंज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is ownership?",
        "question_hi": "ओनरशिप क्या है?",
        "options_en": ["A set of rules governing memory", "A way to manage files", "A type of variable", "A loop construct"],
        "options_hi": ["मेमोरी को गवर्न करने वाले नियम", "फाइल मैनेज करने का तरीका", "एक प्रकार का वेरिएबल", "एक लूप कंस्ट्रक्ट"],
        "answer_en": "A set of rules governing memory",
        "answer_hi": "मेमोरी को गवर्न करने वाले नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What are the ownership rules?",
        "question_hi": "ओनरशिप नियम क्या हैं?",
        "options_en": ["Each value has one owner", "When owner goes out of scope, value is dropped", "Only one mutable reference allowed", "All of the above"],
        "options_hi": ["हर वैल्यू का एक ओनर होता है", "जब ओनर स्कोप से बाहर जाता है, वैल्यू ड्रॉप हो जाती है", "केवल एक म्यूटेबल रेफरेन्स की अनुमति", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is borrowing?",
        "question_hi": "बोरोइंग क्या है?",
        "options_en": ["Creating references to data", "Taking ownership of data", "Copying data", "Deleting data"],
        "options_hi": ["डेटा के रेफरेन्स बनाना", "डेटा की ओनरशिप लेना", "डेटा को कॉपी करना", "डेटा को डिलीट करना"],
        "answer_en": "Creating references to data",
        "answer_hi": "डेटा के रेफरेन्स बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How do you create an immutable reference?",
        "question_hi": "इम्यूटेबल रेफरेन्स कैसे बनाते हैं?",
        "options_en": ["&x", "&mut x", "ref x", "*x"],
        "options_hi": ["&x", "&mut x", "ref x", "*x"],
        "answer_en": "&x",
        "answer_hi": "&x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "How do you create a mutable reference?",
        "question_hi": "म्यूटेबल रेफरेन्स कैसे बनाते हैं?",
        "options_en": ["&mut x", "&x", "mut &x", "ref mut x"],
        "options_hi": ["&mut x", "&x", "mut &x", "ref mut x"],
        "answer_en": "&mut x",
        "answer_hi": "&mut x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is a slice?",
        "question_hi": "स्लाइस क्या है?",
        "options_en": ["A reference to a contiguous sequence", "A type of array", "A string type", "A function"],
        "options_hi": ["कॉन्टीग्यूअस सीक्वेंस का रेफरेन्स", "एक प्रकार का ऐरे", "एक स्ट्रिंग टाइप", "एक फ़ंक्शन"],
        "answer_en": "A reference to a contiguous sequence",
        "answer_hi": "कॉन्टीग्यूअस सीक्वेंस का रेफरेन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "How do you create a string slice from a string?",
        "question_hi": "स्ट्रिंग से स्ट्रिंग स्लाइस कैसे बनाते हैं?",
        "options_en": ["&s[..]", "s.as_str()", "&s", "All of the above"],
        "options_hi": ["&s[..]", "s.as_str()", "&s", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is a struct?",
        "question_hi": "स्ट्रक्ट क्या है?",
        "options_en": ["A custom data type", "A function", "A loop", "A module"],
        "options_hi": ["एक कस्टम डेटा टाइप", "एक फ़ंक्शन", "एक लूप", "एक मॉड्यूल"],
        "answer_en": "A custom data type",
        "answer_hi": "एक कस्टम डेटा टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "How do you define a struct?",
        "question_hi": "स्ट्रक्ट कैसे डिफाइन करते हैं?",
        "options_en": ["struct User { name: String, age: u32 }", "struct User { String name, u32 age }", "class User { name: String, age: u32 }", "type User = { name: String, age: u32 };"],
        "options_hi": ["struct User { name: String, age: u32 }", "struct User { String name, u32 age }", "class User { name: String, age: u32 }", "type User = { name: String, age: u32 };"],
        "answer_en": "struct User { name: String, age: u32 }",
        "answer_hi": "struct User { name: String, age: u32 }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How do you create a struct instance?",
        "question_hi": "स्ट्रक्ट इंस्टेंस कैसे बनाते हैं?",
        "options_en": ["let user = User { name: String::from(\"Alice\"), age: 30 };", "let user = new User(\"Alice\", 30);", "let user = User::new(\"Alice\", 30);", "User user = { \"Alice\", 30 };"],
        "options_hi": ["let user = User { name: String::from(\"Alice\"), age: 30 };", "let user = new User(\"Alice\", 30);", "let user = User::new(\"Alice\", 30);", "User user = { \"Alice\", 30 };"],
        "answer_en": "let user = User { name: String::from(\"Alice\"), age: 30 };",
        "answer_hi": "let user = User { name: String::from(\"Alice\"), age: 30 };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "How do you access struct fields?",
        "question_hi": "स्ट्रक्ट फील्ड्स तक कैसे पहुंचते हैं?",
        "options_en": ["user.name", "user->name", "user[name]", "User::name"],
        "options_hi": ["user.name", "user->name", "user[name]", "User::name"],
        "answer_en": "user.name",
        "answer_hi": "user.name",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is an enum?",
        "question_hi": "एनम क्या है?",
        "options_en": ["A type with multiple variants", "A number type", "A string type", "A function type"],
        "options_hi": ["मल्टीपल वेरिएंट वाला टाइप", "एक नंबर टाइप", "एक स्ट्रिंग टाइप", "एक फ़ंक्शन टाइप"],
        "answer_en": "A type with multiple variants",
        "answer_hi": "मल्टीपल वेरिएंट वाला टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "How do you define an enum?",
        "question_hi": "एनम कैसे डिफाइन करते हैं?",
        "options_en": ["enum IpAddr { V4, V6 }", "enum IpAddr { V4; V6 }", "enum IpAddr = { V4, V6 }", "type enum IpAddr { V4, V6 }"],
        "options_hi": ["enum IpAddr { V4, V6 }", "enum IpAddr { V4; V6 }", "enum IpAddr = { V4, V6 }", "type enum IpAddr { V4, V6 }"],
        "answer_en": "enum IpAddr { V4, V6 }",
        "answer_hi": "enum IpAddr { V4, V6 }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the Option enum used for?",
        "question_hi": "Option एनम का उपयोग किस लिए किया जाता है?",
        "options_en": ["Representing optional values", "Error handling", "Loop control", "Memory allocation"],
        "options_hi": ["ऑप्शनल वैल्यू रिप्रेजेंट करना", "एरर हैंडलिंग", "लूप कंट्रोल", "मेमोरी अलोकेशन"],
        "answer_en": "Representing optional values",
        "answer_hi": "ऑप्शनल वैल्यू रिप्रेजेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
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
        "num": 70,
        "question_en": "What is the Result enum used for?",
        "question_hi": "Result एनम का उपयोग किस लिए किया जाता है?",
        "options_en": ["Error handling", "Optional values", "Loop control", "Memory management"],
        "options_hi": ["एरर हैंडलिंग", "ऑप्शनल वैल्यू", "लूप कंट्रोल", "मेमोरी मैनेजमेंट"],
        "answer_en": "Error handling",
        "answer_hi": "एरर हैंडलिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
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
        "num": 72,
        "question_en": "What is pattern matching?",
        "question_hi": "पैटर्न मैचिंग क्या है?",
        "options_en": ["Comparing values against patterns", "String comparison", "Loop iteration", "Function calling"],
        "options_hi": ["पैटर्न के खिलाफ वैल्यू कम्पेयर करना", "स्ट्रिंग कम्पेरिजन", "लूप इटरेशन", "फ़ंक्शन कॉलिंग"],
        "answer_en": "Comparing values against patterns",
        "answer_hi": "पैटर्न के खिलाफ वैल्यू कम्पेयर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which keyword is used for pattern matching?",
        "question_hi": "पैटर्न मैचिंग के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["match", "switch", "case", "check"],
        "options_hi": ["match", "switch", "case", "check"],
        "answer_en": "match",
        "answer_hi": "match",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
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
        "num": 75,
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
        "num": 76,
        "question_en": "What are modules?",
        "question_hi": "मॉड्यूल क्या हैं?",
        "options_en": ["Namespaces for organizing code", "Data types", "Functions", "Variables"],
        "options_hi": ["कोड ऑर्गनाइज करने के लिए नेमस्पेस", "डेटा टाइप", "फ़ंक्शन", "वेरिएबल"],
        "answer_en": "Namespaces for organizing code",
        "answer_hi": "कोड ऑर्गनाइज करने के लिए नेमस्पेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "How do you define a module?",
        "question_hi": "मॉड्यूल कैसे डिफाइन करते हैं?",
        "options_en": ["mod my_module { }", "module my_module { }", "namespace my_module { }", "package my_module { }"],
        "options_hi": ["mod my_module { }", "module my_module { }", "namespace my_module { }", "package my_module { }"],
        "answer_en": "mod my_module { }",
        "answer_hi": "mod my_module { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How do you use items from another module?",
        "question_hi": "दूसरे मॉड्यूल के आइटम कैसे यूज करते हैं?",
        "options_en": ["use my_module::item;", "import my_module.item;", "include my_module::item;", "from my_module import item;"],
        "options_hi": ["use my_module::item;", "import my_module.item;", "include my_module::item;", "from my_module import item;"],
        "answer_en": "use my_module::item;",
        "answer_hi": "use my_module::item;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the pub keyword used for?",
        "question_hi": "pub कीवर्ड का उपयोग किस लिए किया जाता है?",
        "options_en": ["Making items public", "Making items private", "Publishing code", "Public functions only"],
        "options_hi": ["आइटम को पब्लिक बनाना", "आइटम को प्राइवेट बनाना", "कोड पब्लिश करना", "केवल पब्लिक फ़ंक्शन"],
        "answer_en": "Making items public",
        "answer_hi": "आइटम को पब्लिक बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What are collections?",
        "question_hi": "कलेक्शन क्या हैं?",
        "options_en": ["Data structures that contain multiple values", "Single values", "Functions", "Modules"],
        "options_hi": ["डेटा स्ट्रक्चर जिनमें मल्टीपल वैल्यू होते हैं", "सिंगल वैल्यू", "फ़ंक्शन", "मॉड्यूल"],
        "answer_en": "Data structures that contain multiple values",
        "answer_hi": "डेटा स्ट्रक्चर जिनमें मल्टीपल वैल्यू होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is a vector?",
        "question_hi": "वेक्टर क्या है?",
        "options_en": ["A growable array", "A fixed array", "A string", "A tuple"],
        "options_hi": ["एक ग्रोएबल ऐरे", "एक फिक्स्ड ऐरे", "एक स्ट्रिंग", "एक टुपल"],
        "answer_en": "A growable array",
        "answer_hi": "एक ग्रोएबल ऐरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How do you create a vector?",
        "question_hi": "वेक्टर कैसे बनाते हैं?",
        "options_en": ["let v = vec![1, 2, 3];", "let v = [1, 2, 3];", "let v = Vector::new();", "let v = new vec![1, 2, 3];"],
        "options_hi": ["let v = vec![1, 2, 3];", "let v = [1, 2, 3];", "let v = Vector::new();", "let v = new vec![1, 2, 3];"],
        "answer_en": "let v = vec![1, 2, 3];",
        "answer_hi": "let v = vec![1, 2, 3];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "How do you add elements to a vector?",
        "question_hi": "वेक्टर में एलिमेंट कैसे ऐड करते हैं?",
        "options_en": ["v.push(4);", "v.add(4);", "v.insert(4);", "v.append(4);"],
        "options_hi": ["v.push(4);", "v.add(4);", "v.insert(4);", "v.append(4);"],
        "answer_en": "v.push(4);",
        "answer_hi": "v.push(4);",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is a HashMap?",
        "question_hi": "HashMap क्या है?",
        "options_en": ["A key-value store", "An array", "A string", "A function"],
        "options_hi": ["एक की-वैल्यू स्टोर", "एक ऐरे", "एक स्ट्रिंग", "एक फ़ंक्शन"],
        "answer_en": "A key-value store",
        "answer_hi": "एक की-वैल्यू स्टोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
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
        "num": 86,
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
        "num": 87,
        "question_en": "What is error handling?",
        "question_hi": "एरर हैंडलिंग क्या है?",
        "options_en": ["Dealing with recoverable and unrecoverable errors", "Ignoring errors", "Only compile errors", "Only runtime errors"],
        "options_hi": ["रिकवरेबल और अनरिकवरेबल एरर से डील करना", "एरर इग्नोर करना", "केवल कम्पाइल एरर", "केवल रनटाइम एरर"],
        "answer_en": "Dealing with recoverable and unrecoverable errors",
        "answer_hi": "रिकवरेबल और अनरिकवरेबल एरर से डील करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is panic?",
        "question_hi": "पैनिक क्या है?",
        "options_en": ["Unrecoverable error", "A warning", "A compile error", "A type of loop"],
        "options_hi": ["अनरिकवरेबल एरर", "एक वार्निंग", "एक कम्पाइल एरर", "एक प्रकार का लूप"],
        "answer_en": "Unrecoverable error",
        "answer_hi": "अनरिकवरेबल एरर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "How do you cause a panic?",
        "question_hi": "पैनिक कैसे कॉज करते हैं?",
        "options_en": ["panic!(\"error message\");", "error!(\"error message\");", "crash!(\"error message\");", "fail!(\"error message\");"],
        "options_hi": ["panic!(\"error message\");", "error!(\"error message\");", "crash!(\"error message\");", "fail!(\"error message\");"],
        "answer_en": "panic!(\"error message\");",
        "answer_hi": "panic!(\"error message\");",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the ? operator used for?",
        "question_hi": "? ऑपरेटर का उपयोग किस लिए किया जाता है?",
        "options_en": ["Error propagation", "Optional values", "Boolean operations", "String operations"],
        "options_hi": ["एरर प्रोपेगेशन", "ऑप्शनल वैल्यू", "बूलियन ऑपरेशन", "स्ट्रिंग ऑपरेशन"],
        "answer_en": "Error propagation",
        "answer_hi": "एरर प्रोपेगेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What are generics?",
        "question_hi": "जेनरिक्स क्या हैं?",
        "options_en": ["Abstract stand-ins for concrete types", "Specific types", "Function parameters", "Loop variables"],
        "options_hi": ["कंक्रीट टाइप के लिए अब्स्ट्रैक्ट स्टैंड-इन", "स्पेसिफिक टाइप", "फ़ंक्शन पैरामीटर", "लूप वेरिएबल"],
        "answer_en": "Abstract stand-ins for concrete types",
        "answer_hi": "कंक्रीट टाइप के लिए अब्स्ट्रैक्ट स्टैंड-इन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you define a generic function?",
        "question_hi": "जेनरिक फ़ंक्शन कैसे डिफाइन करते हैं?",
        "options_en": ["fn func<T>(param: T) -> T {}", "fn func generic<T>(param: T) {}", "generic fn func<T>(param: T) {}", "fn<T> func(param: T) {}"],
        "options_hi": ["fn func<T>(param: T) -> T {}", "fn func generic<T>(param: T) {}", "generic fn func<T>(param: T) {}", "fn<T> func(param: T) {}"],
        "answer_en": "fn func<T>(param: T) -> T {}",
        "answer_hi": "fn func<T>(param: T) -> T {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What are traits?",
        "question_hi": "ट्रेट्स क्या हैं?",
        "options_en": ["Shared behavior that types can implement", "Data types", "Functions", "Variables"],
        "options_hi": ["शेयर्ड बिहेवियर जिसे टाइप इम्प्लीमेंट कर सकते हैं", "डेटा टाइप", "फ़ंक्शन", "वेरिएबल"],
        "answer_en": "Shared behavior that types can implement",
        "answer_hi": "शेयर्ड बिहेवियर जिसे टाइप इम्प्लीमेंट कर सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you define a trait?",
        "question_hi": "ट्रेट कैसे डिफाइन करते हैं?",
        "options_en": ["trait MyTrait { fn method(&self); }", "struct trait MyTrait { }", "interface MyTrait { }", "define trait MyTrait;"],
        "options_hi": ["trait MyTrait { fn method(&self); }", "struct trait MyTrait { }", "interface MyTrait { }", "define trait MyTrait;"],
        "answer_en": "trait MyTrait { fn method(&self); }",
        "answer_hi": "trait MyTrait { fn method(&self); }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "How do you implement a trait?",
        "question_hi": "ट्रेट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["impl MyTrait for MyType {}", "trait impl for MyType {}", "MyType implements MyTrait {}", "implement MyTrait for MyType {}"],
        "options_hi": ["impl MyTrait for MyType {}", "trait impl for MyType {}", "MyType implements MyTrait {}", "implement MyTrait for MyType {}"],
        "answer_en": "impl MyTrait for MyType {}",
        "answer_hi": "impl MyTrait for MyType {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is testing?",
        "question_hi": "टेस्टिंग क्या है?",
        "options_en": ["Verifying code works as expected", "Compiling code", "Running code", "Debugging code"],
        "options_hi": ["वेरिफाई करना कि कोड एक्सपेक्टेड तरह से वर्क करता है", "कोड कम्पाइल करना", "कोड रन करना", "कोड डीबग करना"],
        "answer_en": "Verifying code works as expected",
        "answer_hi": "वेरिफाई करना कि कोड एक्सपेक्टेड तरह से वर्क करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "How do you write a test function?",
        "question_hi": "टेस्ट फ़ंक्शन कैसे लिखते हैं?",
        "options_en": ["#[test] fn test_func() {}", "#[test] function test_func() {}", "test fn test_func() {}", "fn test test_func() {}"],
        "options_hi": ["#[test] fn test_func() {}", "#[test] function test_func() {}", "test fn test_func() {}", "fn test test_func() {}"],
        "answer_en": "#[test] fn test_func() {}",
        "answer_hi": "#[test] fn test_func() {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do you run tests?",
        "question_hi": "टेस्ट कैसे रन करते हैं?",
        "options_en": ["cargo test", "rust test", "cargo run --test", "rustc --test"],
        "options_hi": ["cargo test", "rust test", "cargo run --test", "rustc --test"],
        "answer_en": "cargo test",
        "answer_hi": "cargo test",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What are assertions?",
        "question_hi": "असर्शन्स क्या हैं?",
        "options_en": ["Checks that verify expected behavior", "Test functions", "Test modules", "Test runners"],
        "options_hi": ["चेक जो एक्सपेक्टेड बिहेवियर वेरिफाई करते हैं", "टेस्ट फ़ंक्शन", "टेस्ट मॉड्यूल", "टेस्ट रनर"],
        "answer_en": "Checks that verify expected behavior",
        "answer_hi": "चेक जो एक्सपेक्टेड बिहेवियर वेरिफाई करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How do you assert equality?",
        "question_hi": "इक्वलिटी कैसे अस्सेर्ट करते हैं?",
        "options_en": ["assert_eq!(a, b);", "assert_equal(a, b);", "assert(a == b);", "check_eq!(a, b);"],
        "options_hi": ["assert_eq!(a, b);", "assert_equal(a, b);", "assert(a == b);", "check_eq!(a, b);"],
        "answer_en": "assert_eq!(a, b);",
        "answer_hi": "assert_eq!(a, b);",
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