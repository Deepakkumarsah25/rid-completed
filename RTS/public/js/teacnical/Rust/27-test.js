const questions=[
   {
        "num": 1,
        "question_en": "How do you define an enum in Rust?",
        "question_hi": "Rust में enum कैसे डिफाइन करते हैं?",
        "options_en": ["enum Color { Red, Green, Blue }", "struct enum Color { Red, Green, Blue }", "type Color = Red | Green | Blue;", "union Color { Red, Green, Blue }"],
        "options_hi": ["enum Color { Red, Green, Blue }", "struct enum Color { Red, Green, Blue }", "type Color = Red | Green | Blue;", "union Color { Red, Green, Blue }"],
        "answer_en": "enum Color { Red, Green, Blue }",
        "answer_hi": "enum Color { Red, Green, Blue }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How do you declare a constant in Rust?",
        "question_hi": "Rust में constant कैसे डिक्लेयर करते हैं?",
        "options_en": ["const MAX_SIZE: i32 = 100;", "let const MAX_SIZE = 100;", "constant MAX_SIZE = 100;", "static MAX_SIZE: i32 = 100;"],
        "options_hi": ["const MAX_SIZE: i32 = 100;", "let const MAX_SIZE = 100;", "constant MAX_SIZE = 100;", "static MAX_SIZE: i32 = 100;"],
        "answer_en": "const MAX_SIZE: i32 = 100;",
        "answer_hi": "const MAX_SIZE: i32 = 100;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the default integer type in Rust?",
        "question_hi": "Rust में डिफॉल्ट integer टाइप क्या है?",
        "options_en": ["i32", "i64", "int", "usize"],
        "options_hi": ["i32", "i64", "int", "usize"],
        "answer_en": "i32",
        "answer_hi": "i32",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you create a mutable variable in Rust?",
        "question_hi": "Rust में mutable वेरिएबल कैसे बनाते हैं?",
        "options_en": ["let mut x = 5;", "mut x = 5;", "let x = mut 5;", "variable mut x = 5;"],
        "options_hi": ["let mut x = 5;", "mut x = 5;", "let x = mut 5;", "variable mut x = 5;"],
        "answer_en": "let mut x = 5;",
        "answer_hi": "let mut x = 5;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of the 'match' keyword in Rust?",
        "question_hi": "Rust में 'match' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Pattern matching with exhaustive checking", "String comparison", "Loop control", "Error handling"],
        "options_hi": ["एक्जॉस्टिव चेकिंग के साथ पैटर्न मैचिंग", "स्ट्रिंग कम्पेरिजन", "लूप कंट्रोल", "एरर हैंडलिंग"],
        "answer_en": "Pattern matching with exhaustive checking",
        "answer_hi": "एक्जॉस्टिव चेकिंग के साथ पैटर्न मैचिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you define a function in Rust?",
        "question_hi": "Rust में function कैसे डिफाइन करते हैं?",
        "options_en": ["fn function_name() {}", "function function_name() {}", "def function_name() {}", "func function_name() {}"],
        "options_hi": ["fn function_name() {}", "function function_name() {}", "def function_name() {}", "func function_name() {}"],
        "answer_en": "fn function_name() {}",
        "answer_hi": "fn function_name() {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
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
        "num": 8,
        "question_en": "How do you print to the console in Rust?",
        "question_hi": "Rust में कंसोल पर प्रिंट कैसे करते हैं?",
        "options_en": ["println!(\"Hello\");", "print!(\"Hello\");", "console.log(\"Hello\");", "echo \"Hello\";"],
        "options_hi": ["println!(\"Hello\");", "print!(\"Hello\");", "console.log(\"Hello\");", "echo \"Hello\";"],
        "answer_en": "println!(\"Hello\");",
        "answer_hi": "println!(\"Hello\");",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is a tuple in Rust?",
        "question_hi": "Rust में tuple क्या है?",
        "options_en": ["A fixed-size collection of heterogeneous values", "A resizable array", "A key-value store", "A string type"],
        "options_hi": ["हेटरोजीनियस वैल्यू का फिक्स्ड-साइज कलेक्शन", "रीसाइजेबल ऐरे", "की-वैल्यू स्टोर", "स्ट्रिंग टाइप"],
        "answer_en": "A fixed-size collection of heterogeneous values",
        "answer_hi": "हेटरोजीनियस वैल्यू का फिक्स्ड-साइज कलेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you access tuple elements?",
        "question_hi": "tuple एलिमेंट तक कैसे पहुंचते हैं?",
        "options_en": ["tuple.0", "tuple[0]", "tuple(0)", "tuple->0"],
        "options_hi": ["tuple.0", "tuple[0]", "tuple(0)", "tuple->0"],
        "answer_en": "tuple.0",
        "answer_hi": "tuple.0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is an array in Rust?",
        "question_hi": "Rust में array क्या है?",
        "options_en": ["Fixed-size collection of same type values", "Resizable collection", "Heap-allocated only", "Dynamic collection"],
        "options_hi": ["समान टाइप वैल्यू का फिक्स्ड-साइज कलेक्शन", "रीसाइजेबल कलेक्शन", "सिर्फ हीप-अलोकेटेड", "डायनामिक कलेक्शन"],
        "answer_en": "Fixed-size collection of same type values",
        "answer_hi": "समान टाइप वैल्यू का फिक्स्ड-साइज कलेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you create an array with 5 zeros?",
        "question_hi": "5 जीरो वाला array कैसे बनाते हैं?",
        "options_en": ["let arr = [0; 5];", "let arr = [0, 0, 0, 0, 0];", "let arr = Array::new(5, 0);", "let arr = [5]0;"],
        "options_hi": ["let arr = [0; 5];", "let arr = [0, 0, 0, 0, 0];", "let arr = Array::new(5, 0);", "let arr = [5]0;"],
        "answer_en": "let arr = [0; 5];",
        "answer_hi": "let arr = [0; 5];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the difference between 'let' and 'let mut'?",
        "question_hi": "'let' और 'let mut' में क्या अंतर है?",
        "options_en": ["mut allows mutation, let doesn't", "let is for constants", "mut is for mutable functions", "No difference"],
        "options_hi": ["mut म्यूटेशन की अनुमति देता है, let नहीं", "let कॉन्स्टेंट के लिए है", "mut म्यूटेबल फंक्शन के लिए है", "कोई अंतर नहीं"],
        "answer_en": "mut allows mutation, let doesn't",
        "answer_hi": "mut म्यूटेशन की अनुमति देता है, let नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you create a slice from an array?",
        "question_hi": "array से slice कैसे बनाते हैं?",
        "options_en": ["&arr[1..3]", "arr.slice(1, 3)", "slice(arr, 1, 3)", "arr[1..3]"],
        "options_hi": ["&arr[1..3]", "arr.slice(1, 3)", "slice(arr, 1, 3)", "arr[1..3]"],
        "answer_en": "&arr[1..3]",
        "answer_hi": "&arr[1..3]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the range operator in Rust?",
        "question_hi": "Rust में रेंज ऑपरेटर क्या है?",
        "options_en": ["..", "...", "to", "range"],
        "options_hi": ["..", "...", "to", "range"],
        "answer_en": "..",
        "answer_hi": "..",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you write a loop in Rust?",
        "question_hi": "Rust में लूप कैसे लिखते हैं?",
        "options_en": ["loop { }", "while true { }", "for { }", "do { } while true"],
        "options_hi": ["loop { }", "while true { }", "for { }", "do { } while true"],
        "answer_en": "loop { }",
        "answer_hi": "loop { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the 'while' loop used for?",
        "question_hi": "'while' लूप का उपयोग किस लिए किया जाता है?",
        "options_en": ["Conditional repetition", "Infinite looping", "Iterating collections", "Error handling"],
        "options_hi": ["कंडीशनल रिपीटिशन", "इनफिनाइट लूपिंग", "कलेक्शन पर इटरेट करना", "एरर हैंडलिंग"],
        "answer_en": "Conditional repetition",
        "answer_hi": "कंडीशनल रिपीटिशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you break from a loop?",
        "question_hi": "लूप से ब्रेक कैसे करते हैं?",
        "options_en": ["break;", "exit;", "stop;", "return;"],
        "options_hi": ["break;", "exit;", "stop;", "return;"],
        "answer_en": "break;",
        "answer_hi": "break;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What does 'continue' do in a loop?",
        "question_hi": "लूप में 'continue' क्या करता है?",
        "options_en": ["Skips to next iteration", "Exits the loop", "Restarts the loop", "Pauses the loop"],
        "options_hi": ["अगले इटरेशन पर स्किप करता है", "लूप से बाहर निकलता है", "लूप रीस्टार्ट करता है", "लूप को पॉज करता है"],
        "answer_en": "Skips to next iteration",
        "answer_hi": "अगले इटरेशन पर स्किप करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you write a 'for' loop in Rust?",
        "question_hi": "Rust में 'for' लूप कैसे लिखते हैं?",
        "options_en": ["for i in 0..10 { }", "for (i = 0; i < 10; i++) { }", "for i in range(10) { }", "for i from 0 to 10 { }"],
        "options_hi": ["for i in 0..10 { }", "for (i = 0; i < 10; i++) { }", "for i in range(10) { }", "for i from 0 to 10 { }"],
        "answer_en": "for i in 0..10 { }",
        "answer_hi": "for i in 0..10 { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is a struct in Rust?",
        "question_hi": "Rust में struct क्या है?",
        "options_en": ["A custom data type grouping related values", "A function type", "A collection type", "A pointer type"],
        "options_hi": ["रिलेटेड वैल्यू को ग्रुप करने वाला कस्टम डेटा टाइप", "फंक्शन टाइप", "कलेक्शन टाइप", "पॉइंटर टाइप"],
        "answer_en": "A custom data type grouping related values",
        "answer_hi": "रिलेटेड वैल्यू को ग्रुप करने वाला कस्टम डेटा टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you define a struct?",
        "question_hi": "struct कैसे डिफाइन करते हैं?",
        "options_en": ["struct Point { x: i32, y: i32 }", "class Point { x: i32, y: i32 }", "type Point = { x: i32, y: i32 };", "def struct Point { x: i32, y: i32 }"],
        "options_hi": ["struct Point { x: i32, y: i32 }", "class Point { x: i32, y: i32 }", "type Point = { x: i32, y: i32 };", "def struct Point { x: i32, y: i32 }"],
        "answer_en": "struct Point { x: i32, y: i32 }",
        "answer_hi": "struct Point { x: i32, y: i32 }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "How do you create an instance of a struct?",
        "question_hi": "struct का इंस्टेंस कैसे बनाते हैं?",
        "options_en": ["let p = Point { x: 1, y: 2 };", "let p = new Point(1, 2);", "let p = Point::new(1, 2);", "let p = Point(1, 2);"],
        "options_hi": ["let p = Point { x: 1, y: 2 };", "let p = new Point(1, 2);", "let p = Point::new(1, 2);", "let p = Point(1, 2);"],
        "answer_en": "let p = Point { x: 1, y: 2 };",
        "answer_hi": "let p = Point { x: 1, y: 2 };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is pattern matching in Rust?",
        "question_hi": "Rust में पैटर्न मैचिंग क्या है?",
        "options_en": ["Comparing values against patterns", "String comparison", "Regular expressions", "Image recognition"],
        "options_hi": ["पैटर्न के खिलाफ वैल्यू की तुलना करना", "स्ट्रिंग कम्पेरिजन", "रेगुलर एक्सप्रेशन", "इमेज रिकग्निशन"],
        "answer_en": "Comparing values against patterns",
        "answer_hi": "पैटर्न के खिलाफ वैल्यू की तुलना करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "How do you handle different cases with pattern matching?",
        "question_hi": "पैटर्न मैचिंग से अलग-अलग केस कैसे हैंडल करते हैं?",
        "options_en": ["match value { Pattern => Expression, _ => () }", "switch value { case Pattern: }", "if let Pattern = value { }", "case value of Pattern ->"],
        "options_hi": ["match value { Pattern => Expression, _ => () }", "switch value { case Pattern: }", "if let Pattern = value { }", "case value of Pattern ->"],
        "answer_en": "match value { Pattern => Expression, _ => () }",
        "answer_hi": "match value { Pattern => Expression, _ => () }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the '_' pattern in match?",
        "question_hi": "match में '_' पैटर्न क्या है?",
        "options_en": ["Catch-all pattern", "Ignore value", "Wildcard character", "Private pattern"],
        "options_hi": ["कैच-ऑल पैटर्न", "वैल्यू इग्नोर करना", "वाइल्डकार्ड कैरेक्टर", "प्राइवेट पैटर्न"],
        "answer_en": "Catch-all pattern",
        "answer_hi": "कैच-ऑल पैटर्न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the main advantage of Rust's ownership system?",
        "question_hi": "Rust के ownership सिस्टम का मुख्य फायदा क्या है?",
        "options_en": ["Memory safety without garbage collection", "Faster execution speed", "Automatic memory management", "Dynamic typing"],
        "options_hi": ["गार्बेज कलेक्शन के बिना मेमोरी सेफ्टी", "तेज एक्जिक्यूशन स्पीड", "ऑटोमैटिक मेमोरी मैनेजमेंट", "डायनामिक टाइपिंग"],
        "answer_en": "Memory safety without garbage collection",
        "answer_hi": "गार्बेज कलेक्शन के बिना मेमोरी सेफ्टी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What are enum variants?",
        "question_hi": "enum वेरिएंट क्या हैं?",
        "options_en": ["Possible values of an enum", "Enum methods", "Enum parameters", "Enum traits"],
        "options_hi": ["enum की संभावित वैल्यू", "Enum मेथड", "Enum पैरामीटर", "Enum traits"],
        "answer_en": "Possible values of an enum",
        "answer_hi": "enum की संभावित वैल्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How do you use the 'if let' syntax?",
        "question_hi": "'if let' सिंटैक्स का उपयोग कैसे करते हैं?",
        "options_en": ["if let Pattern = value { }", "if value matches Pattern { }", "let if Pattern = value { }", "if value == Pattern { }"],
        "options_hi": ["if let Pattern = value { }", "if value matches Pattern { }", "let if Pattern = value { }", "if value == Pattern { }"],
        "answer_en": "if let Pattern = value { }",
        "answer_hi": "if let Pattern = value { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is a module in Rust?",
        "question_hi": "Rust में module क्या है?",
        "options_en": ["A namespace containing definitions", "A function group", "A struct implementation", "A trait definition"],
        "options_hi": ["डेफिनिशन वाला नेमस्पेस", "फंक्शन ग्रुप", "struct इम्प्लीमेंटेशन", "trait डेफिनिशन"],
        "answer_en": "A namespace containing definitions",
        "answer_hi": "डेफिनिशन वाला नेमस्पेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "How do you define a module?",
        "question_hi": "module कैसे डिफाइन करते हैं?",
        "options_en": ["mod my_module { }", "module my_module { }", "def mod my_module { }", "namespace my_module { }"],
        "options_hi": ["mod my_module { }", "module my_module { }", "def mod my_module { }", "namespace my_module { }"],
        "answer_en": "mod my_module { }",
        "answer_hi": "mod my_module { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you use items from another module?",
        "question_hi": "दूसरे module से आइटम कैसे उपयोग करते हैं?",
        "options_en": ["use my_module::MyStruct;", "import my_module.MyStruct;", "include my_module::MyStruct;", "from my_module import MyStruct"],
        "options_hi": ["use my_module::MyStruct;", "import my_module.MyStruct;", "include my_module::MyStruct;", "from my_module import MyStruct"],
        "answer_en": "use my_module::MyStruct;",
        "answer_hi": "use my_module::MyStruct;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the 'pub' keyword used for?",
        "question_hi": "'pub' कीवर्ड का उपयोग किस लिए किया जाता है?",
        "options_en": ["Make items public", "Make items private", "Publish to crates.io", "Public functions only"],
        "options_hi": ["आइटम को पब्लिक बनाना", "आइटम को प्राइवेट बनाना", "crates.io पर पब्लिश करना", "सिर्फ पब्लिक फंक्शन"],
        "answer_en": "Make items public",
        "answer_hi": "आइटम को पब्लिक बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you create a new vector?",
        "question_hi": "नया vector कैसे बनाते हैं?",
        "options_en": ["let v = vec![1, 2, 3];", "let v = Vector::new();", "let v = [1, 2, 3].to_vec();", "let v = new_vec![1, 2, 3];"],
        "options_hi": ["let v = vec![1, 2, 3];", "let v = Vector::new();", "let v = [1, 2, 3].to_vec();", "let v = new_vec![1, 2, 3];"],
        "answer_en": "let v = vec![1, 2, 3];",
        "answer_hi": "let v = vec![1, 2, 3];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "How do you add an element to a vector?",
        "question_hi": "vector में एलिमेंट कैसे ऐड करते हैं?",
        "options_en": ["v.push(4);", "v.add(4);", "v.insert(4);", "v.append(4);"],
        "options_hi": ["v.push(4);", "v.add(4);", "v.insert(4);", "v.append(4);"],
        "answer_en": "v.push(4);",
        "answer_hi": "v.push(4);",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is a String in Rust?",
        "question_hi": "Rust में String क्या है?",
        "options_en": ["UTF-8 encoded, growable string", "Fixed-size string", "ASCII string only", "Character array"],
        "options_hi": ["UTF-8 एनकोडेड, ग्रोएबल स्ट्रिंग", "फिक्स्ड-साइज स्ट्रिंग", "सिर्फ ASCII स्ट्रिंग", "कैरेक्टर ऐरे"],
        "answer_en": "UTF-8 encoded, growable string",
        "answer_hi": "UTF-8 एनकोडेड, ग्रोएबल स्ट्रिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How do you create a new String?",
        "question_hi": "नई String कैसे बनाते हैं?",
        "options_en": ["String::from(\"hello\")", "new String(\"hello\")", "\"hello\".to_string()", "Both A and C"],
        "options_hi": ["String::from(\"hello\")", "new String(\"hello\")", "\"hello\".to_string()", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is a string slice (&str)?",
        "question_hi": "string slice (&str) क्या है?",
        "options_en": ["Reference to a UTF-8 string sequence", "Mutable string", "Owned string", "String builder"],
        "options_hi": ["UTF-8 स्ट्रिंग सीक्वेंस का रिफरेन्स", "Mutable स्ट्रिंग", "Owned स्ट्रिंग", "String बिल्डर"],
        "answer_en": "Reference to a UTF-8 string sequence",
        "answer_hi": "UTF-8 स्ट्रिंग सीक्वेंस का रिफरेन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "How do you concatenate strings?",
        "question_hi": "स्ट्रिंग कैसे कॉन्केटनेट करते हैं?",
        "options_en": ["let s = s1 + &s2;", "let s = s1 + s2;", "let s = s1.concat(s2);", "let s = concat(s1, s2);"],
        "options_hi": ["let s = s1 + &s2;", "let s = s1 + s2;", "let s = s1.concat(s2);", "let s = concat(s1, s2);"],
        "answer_en": "let s = s1 + &s2;",
        "answer_hi": "let s = s1 + &s2;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is a HashMap in Rust?",
        "question_hi": "Rust में HashMap क्या है?",
        "options_en": ["Key-value store with hashing", "Sorted map", "Array with keys", "Linked list with keys"],
        "options_hi": ["हैशिंग वाला की-वैल्यू स्टोर", "सॉर्टेड मैप", "की वाला ऐरे", "की वाली लिंक्ड लिस्ट"],
        "answer_en": "Key-value store with hashing",
        "answer_hi": "हैशिंग वाला की-वैल्यू स्टोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How do you create a new HashMap?",
        "question_hi": "नया HashMap कैसे बनाते हैं?",
        "options_en": ["use std::collections::HashMap; let map = HashMap::new();", "let map = new HashMap();", "let map = HashMap::create();", "use HashMap; let map = HashMap()"],
        "options_hi": ["use std::collections::HashMap; let map = HashMap::new();", "let map = new HashMap();", "let map = HashMap::create();", "use HashMap; let map = HashMap()"],
        "answer_en": "use std::collections::HashMap; let map = HashMap::new();",
        "answer_hi": "use std::collections::HashMap; let map = HashMap::new();",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
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
        "num": 43,
        "question_en": "What is the '?' operator used for?",
        "question_hi": "'?' ऑपरेटर का उपयोग किस लिए किया जाता है?",
        "options_en": ["Error propagation", "Optional chaining", "Null checking", "Boolean conversion"],
        "options_hi": ["एरर प्रोपेगेशन", "ऑप्शनल चेनिंग", "नल चेकिंग", "बूलियन कन्वर्जन"],
        "answer_en": "Error propagation",
        "answer_hi": "एरर प्रोपेगेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the difference between Result and Option?",
        "question_hi": "Result और Option में क्या अंतर है?",
        "options_en": ["Result is for errors, Option for optional values", "Result is for success, Option for failure", "No difference", "Result is for numbers, Option for strings"],
        "options_hi": ["Result एरर के लिए है, Option ऑप्शनल वैल्यू के लिए", "Result सक्सेस के लिए है, Option फेल्योर के लिए", "कोई अंतर नहीं", "Result नंबर के लिए है, Option स्ट्रिंग के लिए"],
        "answer_en": "Result is for errors, Option for optional values",
        "answer_hi": "Result एरर के लिए है, Option ऑप्शनल वैल्यू के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How do you handle a Result with match?",
        "question_hi": "Result को match से कैसे हैंडल करते हैं?",
        "options_en": ["match result { Ok(val) => val, Err(e) => panic!() }", "match result { Some(val) => val, None => panic!() }", "switch result { case Ok: case Err: }", "if result.is_ok() { }"],
        "options_hi": ["match result { Ok(val) => val, Err(e) => panic!() }", "match result { Some(val) => val, None => panic!() }", "switch result { case Ok: case Err: }", "if result.is_ok() { }"],
        "answer_en": "match result { Ok(val) => val, Err(e) => panic!() }",
        "answer_hi": "match result { Ok(val) => val, Err(e) => panic!() }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What does 'unwrap()' do on a Result?",
        "question_hi": "Result पर 'unwrap()' क्या करता है?",
        "options_en": ["Returns value or panics on error", "Returns value or default", "Converts to Option", "Ignores error"],
        "options_hi": ["वैल्यू रिटर्न करता है या एरर पर पैनिक करता है", "वैल्यू रिटर्न करता है या डिफॉल्ट", "Option में कन्वर्ट करता है", "एरर इग्नोर करता है"],
        "answer_en": "Returns value or panics on error",
        "answer_hi": "वैल्यू रिटर्न करता है या एरर पर पैनिक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is 'expect()' used for?",
        "question_hi": "'expect()' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Unwrap with custom panic message", "Error handling without panic", "Convert to Option", "Check if value exists"],
        "options_hi": ["कस्टम पैनिक मैसेज के साथ अनरैप", "पैनिक के बिना एरर हैंडलिंग", "Option में कन्वर्ट करना", "चेक करना कि वैल्यू एक्सिस्ट करती है या नहीं"],
        "answer_en": "Unwrap with custom panic message",
        "answer_hi": "कस्टम पैनिक मैसेज के साथ अनरैप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you define a generic function?",
        "question_hi": "जेनरिक फंक्शन कैसे डिफाइन करते हैं?",
        "options_en": ["fn func<T>(param: T) -> T {}", "generic fn func<T>(param: T) {}", "fn func generic<T>(param: T) {}", "function<T> func(param: T) {}"],
        "options_hi": ["fn func<T>(param: T) -> T {}", "generic fn func<T>(param: T) {}", "fn func generic<T>(param: T) {}", "function<T> func(param: T) {}"],
        "answer_en": "fn func<T>(param: T) -> T {}",
        "answer_hi": "fn func<T>(param: T) -> T {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What are traits in Rust?",
        "question_hi": "Rust में traits क्या हैं?",
        "options_en": ["Interfaces defining shared behavior", "Class inheritance", "Function templates", "Type aliases"],
        "options_hi": ["शेयर्ड बिहेवियर डिफाइन करने वाले इंटरफेस", "क्लास इनहेरिटेंस", "फंक्शन टेम्पलेट", "टाइप अलायस"],
        "answer_en": "Interfaces defining shared behavior",
        "answer_hi": "शेयर्ड बिहेवियर डिफाइन करने वाले इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
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
        "num": 51,
        "question_en": "How do you implement a trait for a type?",
        "question_hi": "टाइप के लिए trait कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["impl MyTrait for MyStruct {}", "trait impl for MyStruct {}", "MyStruct implements MyTrait {}", "implement MyTrait for MyStruct {}"],
        "options_hi": ["impl MyTrait for MyStruct {}", "trait impl for MyStruct {}", "MyStruct implements MyTrait {}", "implement MyTrait for MyStruct {}"],
        "answer_en": "impl MyTrait for MyStruct {}",
        "answer_hi": "impl MyTrait for MyStruct {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the 'self' parameter in methods?",
        "question_hi": "मेथड में 'self' पैरामीटर क्या है?",
        "options_en": ["Reference to the instance", "Static method marker", "Return value", "Error parameter"],
        "options_hi": ["इंस्टेंस का रिफरेन्स", "स्टैटिक मेथड मार्कर", "रिटर्न वैल्यू", "एरर पैरामीटर"],
        "answer_en": "Reference to the instance",
        "answer_hi": "इंस्टेंस का रिफरेन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the difference between &self and self?",
        "question_hi": "&self और self में क्या अंतर है?",
        "options_en": ["&self borrows, self takes ownership", "&self is mutable, self is immutable", "No difference", "&self for static, self for instance"],
        "options_hi": ["&self बोरो करता है, self ओनरशिप लेता है", "&self mutable है, self immutable है", "कोई अंतर नहीं", "&self स्टैटिक के लिए, self इंस्टेंस के लिए"],
        "answer_en": "&self borrows, self takes ownership",
        "answer_hi": "&self बोरो करता है, self ओनरशिप लेता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you create a new thread?",
        "question_hi": "नया थ्रेड कैसे बनाते हैं?",
        "options_en": ["std::thread::spawn(|| {})", "thread::new(|| {})", "spawn_thread(|| {})", "Thread::create(|| {})"],
        "options_hi": ["std::thread::spawn(|| {})", "thread::new(|| {})", "spawn_thread(|| {})", "Thread::create(|| {})"],
        "answer_en": "std::thread::spawn(|| {})",
        "answer_hi": "std::thread::spawn(|| {})",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the 'move' keyword in closures?",
        "question_hi": "क्लोजर में 'move' कीवर्ड क्या है?",
        "options_en": ["Takes ownership of captured variables", "Moves closure to heap", "Makes closure mutable", "Moves closure between threads"],
        "options_hi": ["कैप्चर वेरिएबल की ओनरशिप लेता है", "क्लोजर को हीप पर मूव करता है", "क्लोजर को mutable बनाता है", "थ्रेड के बीच क्लोजर मूव करता है"],
        "answer_en": "Takes ownership of captured variables",
        "answer_hi": "कैप्चर वेरिएबल की ओनरशिप लेता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is a closure in Rust?",
        "question_hi": "Rust में closure क्या है?",
        "options_en": ["Anonymous function that captures environment", "Named function", "Function pointer", "Method"],
        "options_hi": ["एनोनिमस फंक्शन जो एनवायरनमेंट कैप्चर करता है", "नेम्ड फंक्शन", "फंक्शन पॉइंटर", "मेथड"],
        "answer_en": "Anonymous function that captures environment",
        "answer_hi": "एनोनिमस फंक्शन जो एनवायरनमेंट कैप्चर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
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
        "num": 58,
        "question_en": "What are the Fn traits?",
        "question_hi": "Fn traits क्या हैं?",
        "options_en": ["Traits for callable types", "Function definitions", "Closure parameters", "Method signatures"],
        "options_hi": ["कॉलेबल टाइप के लिए traits", "फंक्शन डेफिनिशन", "क्लोजर पैरामीटर", "मेथड सिग्नेचर"],
        "answer_en": "Traits for callable types",
        "answer_hi": "कॉलेबल टाइप के लिए traits",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the difference between Fn, FnMut, and FnOnce?",
        "question_hi": "Fn, FnMut, और FnOnce में क्या अंतर है?",
        "options_en": ["Different borrowing requirements for captured variables", "Different return types", "Different parameter counts", "No difference"],
        "options_hi": ["कैप्चर वेरिएबल के लिए अलग-अलग बोरोइंग रिक्वायरमेंट", "अलग-अलग रिटर्न टाइप", "अलग-अलग पैरामीटर काउंट", "कोई अंतर नहीं"],
        "answer_en": "Different borrowing requirements for captured variables",
        "answer_hi": "कैप्चर वेरिएबल के लिए अलग-अलग बोरोइंग रिक्वायरमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you return a closure from a function?",
        "question_hi": "फंक्शन से closure कैसे रिटर्न करते हैं?",
        "options_en": ["Box<dyn Fn() -> i32>", "impl Fn() -> i32", "Closure trait", "Both A and B"],
        "options_hi": ["Box<dyn Fn() -> i32>", "impl Fn() -> i32", "Closure trait", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is a smart pointer in Rust?",
        "question_hi": "Rust में smart pointer क्या है?",
        "options_en": ["A pointer with additional metadata and capabilities", "A raw pointer", "A reference", "A function pointer"],
        "options_hi": ["एडिशनल मेटाडेटा और कैपेबिलिटी वाला पॉइंटर", "रॉ पॉइंटर", "रिफरेन्स", "फंक्शन पॉइंटर"],
        "answer_en": "A pointer with additional metadata and capabilities",
        "answer_hi": "एडिशनल मेटाडेटा और कैपेबिलिटी वाला पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is Box<T> used for?",
        "question_hi": "Box<T> का उपयोग किस लिए किया जाता है?",
        "options_en": ["Heap allocation with ownership", "Reference counting", "Automatic dereferencing", "Thread safety"],
        "options_hi": ["ओनरशिप के साथ हीप अलोकेशन", "रिफरेन्स काउंटिंग", "ऑटोमैटिक डिरेफरेंसिंग", "थ्रेड सेफ्टी"],
        "answer_en": "Heap allocation with ownership",
        "answer_hi": "ओनरशिप के साथ हीप अलोकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is Rc<T> used for?",
        "question_hi": "Rc<T> का उपयोग किस लिए किया जाता है?",
        "options_en": ["Reference counting for single-threaded scenarios", "Thread-safe reference counting", "Automatic memory management", "Heap allocation"],
        "options_hi": ["सिंगल-थ्रेडेड सीनारियो के लिए रिफरेन्स काउंटिंग", "थ्रेड-सेफ रिफरेन्स काउंटिंग", "ऑटोमैटिक मेमोरी मैनेजमेंट", "हीप अलोकेशन"],
        "answer_en": "Reference counting for single-threaded scenarios",
        "answer_hi": "सिंगल-थ्रेडेड सीनारियो के लिए रिफरेन्स काउंटिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is Arc<T> used for?",
        "question_hi": "Arc<T> का उपयोग किस लिए किया जाता है?",
        "options_en": ["Atomic reference counting for thread safety", "Automatic memory cleanup", "Stack allocation", "Single ownership"],
        "options_hi": ["थ्रेड सेफ्टी के लिए एटॉमिक रिफरेन्स काउंटिंग", "ऑटोमैटिक मेमोरी क्लीनअप", "स्टैक अलोकेशन", "सिंगल ओनरशिप"],
        "answer_en": "Atomic reference counting for thread safety",
        "answer_hi": "थ्रेड सेफ्टी के लिए एटॉमिक रिफरेन्स काउंटिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is RefCell<T> used for?",
        "question_hi": "RefCell<T> का उपयोग किस लिए किया जाता है?",
        "options_en": ["Interior mutability with runtime borrowing checks", "Compile-time borrowing checks", "Thread safety", "Automatic memory management"],
        "options_hi": ["रनटाइम बोरोइंग चेक के साथ इंटीरियर म्यूटेबिलिटी", "कम्पाइल-टाइम बोरोइंग चेक", "थ्रेड सेफ्टी", "ऑटोमैटिक मेमोरी मैनेजमेंट"],
        "answer_en": "Interior mutability with runtime borrowing checks",
        "answer_hi": "रनटाइम बोरोइंग चेक के साथ इंटीरियर म्यूटेबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is Cell<T> used for?",
        "question_hi": "Cell<T> का उपयोग किस लिए किया जाता है?",
        "options_en": ["Interior mutability for Copy types", "Thread safety", "Automatic memory management", "Reference counting"],
        "options_hi": ["Copy टाइप के लिए इंटीरियर म्यूटेबिलिटी", "थ्रेड सेफ्टी", "ऑटोमैटिक मेमोरी मैनेजमेंट", "रिफरेन्स काउंटिंग"],
        "answer_en": "Interior mutability for Copy types",
        "answer_hi": "Copy टाइप के लिए इंटीरियर म्यूटेबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the difference between Cell and RefCell?",
        "question_hi": "Cell और RefCell में क्या अंतर है?",
        "options_en": ["Cell works with Copy types, RefCell with any type", "Cell is thread-safe, RefCell is not", "No difference", "Cell uses references, RefCell uses values"],
        "options_hi": ["Cell Copy टाइप के साथ काम करता है, RefCell किसी भी टाइप के साथ", "Cell थ्रेड-सेफ है, RefCell नहीं", "कोई अंतर नहीं", "Cell रिफरेन्स का उपयोग करता है, RefCell वैल्यू का"],
        "answer_en": "Cell works with Copy types, RefCell with any type",
        "answer_hi": "Cell Copy टाइप के साथ काम करता है, RefCell किसी भी टाइप के साथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the Drop trait?",
        "question_hi": "Drop trait क्या है?",
        "options_en": ["Custom cleanup when value goes out of scope", "Automatic memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["वैल्यू के स्कोप से बाहर जाने पर कस्टम क्लीनअप", "ऑटोमैटिक मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Custom cleanup when value goes out of scope",
        "answer_hi": "वैल्यू के स्कोप से बाहर जाने पर कस्टम क्लीनअप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the Clone trait?",
        "question_hi": "Clone trait क्या है?",
        "options_en": ["Explicit duplication of values", "Automatic copying", "Memory management", "Error handling"],
        "options_hi": ["वैल्यू की एक्सप्लिसिट डुप्लिकेशन", "ऑटोमैटिक कॉपीिंग", "मेमोरी मैनेजमेंट", "एरर हैंडलिंग"],
        "answer_en": "Explicit duplication of values",
        "answer_hi": "वैल्यू की एक्सप्लिसिट डुप्लिकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the Copy trait?",
        "question_hi": "Copy trait क्या है?",
        "options_en": ["Mark types that can be copied bitwise", "Automatic duplication", "Memory management", "Error handling"],
        "options_hi": ["उन टाइप को मार्क करना जो बिटवाइज कॉपी हो सकते हैं", "ऑटोमैटिक डुप्लिकेशन", "मेमोरी मैनेजमेंट", "एरर हैंडलिंग"],
        "answer_en": "Mark types that can be copied bitwise",
        "answer_hi": "उन टाइप को मार्क करना जो बिटवाइज कॉपी हो सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the difference between Clone and Copy?",
        "question_hi": "Clone और Copy में क्या अंतर है?",
        "options_en": ["Clone is explicit, Copy is implicit", "Clone for heap, Copy for stack", "No difference", "Clone for structs, Copy for enums"],
        "options_hi": ["Clone एक्सप्लिसिट है, Copy इम्प्लिसिट है", "Clone हीप के लिए, Copy स्टैक के लिए", "कोई अंतर नहीं", "Clone struct के लिए, Copy enum के लिए"],
        "answer_en": "Clone is explicit, Copy is implicit",
        "answer_hi": "Clone एक्सप्लिसिट है, Copy इम्प्लिसिट है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the Default trait?",
        "question_hi": "Default trait क्या है?",
        "options_en": ["Provide default values for types", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["टाइप के लिए डिफॉल्ट वैल्यू प्रोवाइड करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Provide default values for types",
        "answer_hi": "टाइप के लिए डिफॉल्ट वैल्यू प्रोवाइड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the From trait?",
        "question_hi": "From trait क्या है?",
        "options_en": ["Type conversion with guaranteed success", "Error handling", "Memory allocation", "Pattern matching"],
        "options_hi": ["गारंटीड सक्सेस के साथ टाइप कन्वर्जन", "एरर हैंडलिंग", "मेमोरी अलोकेशन", "पैटर्न मैचिंग"],
        "answer_en": "Type conversion with guaranteed success",
        "answer_hi": "गारंटीड सक्सेस के साथ टाइप कन्वर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the Into trait?",
        "question_hi": "Into trait क्या है?",
        "options_en": ["Reciprocal of From trait", "Error conversion", "Memory allocation", "Type checking"],
        "options_hi": ["From trait का रेसिप्रोकल", "एरर कन्वर्जन", "मेमोरी अलोकेशन", "टाइप चेकिंग"],
        "answer_en": "Reciprocal of From trait",
        "answer_hi": "From trait का रेसिप्रोकल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the Deref trait?",
        "question_hi": "Deref trait क्या है?",
        "options_en": ["Enable dereference operator (*) overloading", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["डिरेफरेन्स ऑपरेटर (*) ओवरलोडिंग एनेबल करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Enable dereference operator (*) overloading",
        "answer_hi": "डिरेफरेन्स ऑपरेटर (*) ओवरलोडिंग एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the AsRef trait?",
        "question_hi": "AsRef trait क्या है?",
        "options_en": ["Enable cheap reference-to-reference conversion", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["चीप रिफरेन्स-टू-रिफरेन्स कन्वर्जन एनेबल करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Enable cheap reference-to-reference conversion",
        "answer_hi": "चीप रिफरेन्स-टू-रिफरेन्स कन्वर्जन एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the Borrow trait?",
        "question_hi": "Borrow trait क्या है?",
        "options_en": ["Similar to AsRef but with additional semantic meaning", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["AsRef के समान लेकिन एडिशनल सिमेंटिक मीनिंग के साथ", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Similar to AsRef but with additional semantic meaning",
        "answer_hi": "AsRef के समान लेकिन एडिशनल सिमेंटिक मीनिंग के साथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the ToOwned trait?",
        "question_hi": "ToOwned trait क्या है?",
        "options_en": ["Create owned data from borrowed data", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["बोरो डेटा से owned डेटा क्रिएट करना", "मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Create owned data from borrowed data",
        "answer_hi": "बोरो डेटा से owned डेटा क्रिएट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the Cow (Clone on Write) type?",
        "question_hi": "Cow (Clone on Write) टाइप क्या है?",
        "options_en": ["Efficient borrowing with optional cloning", "Automatic copying", "Memory allocation", "Thread synchronization"],
        "options_hi": ["ऑप्शनल क्लोनिंग के साथ एफिशिएंट बोरोइंग", "ऑटोमैटिक कॉपीिंग", "मेमोरी अलोकेशन", "थ्रेड सिंक्रोनाइज़ेशन"],
        "answer_en": "Efficient borrowing with optional cloning",
        "answer_hi": "ऑप्शनल क्लोनिंग के साथ एफिशिएंट बोरोइंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the Send trait?",
        "question_hi": "Send trait क्या है?",
        "options_en": ["Mark types that can be transferred across threads", "Automatic serialization", "Memory safety", "Error handling"],
        "options_hi": ["उन टाइप को मार्क करना जो थ्रेड के आर-पार ट्रांसफर हो सकते हैं", "ऑटोमैटिक सीरियलाइज़ेशन", "मेमोरी सेफ्टी", "एरर हैंडलिंग"],
        "answer_en": "Mark types that can be transferred across threads",
        "answer_hi": "उन टाइप को मार्क करना जो थ्रेड के आर-पार ट्रांसफर हो सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the Sync trait?",
        "question_hi": "Sync trait क्या है?",
        "options_en": ["Mark types safe to share references between threads", "Thread creation", "Memory allocation", "Error handling"],
        "options_hi": ["उन टाइप को मार्क करना जो थ्रेड के बीच रिफरेन्स शेयर करने के लिए सेफ हैं", "थ्रेड क्रिएशन", "मेमोरी अलोकेशन", "एरर हैंडलिंग"],
        "answer_en": "Mark types safe to share references between threads",
        "answer_hi": "उन टाइप को मार्क करना जो थ्रेड के बीच रिफरेन्स शेयर करने के लिए सेफ हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the 'unsafe' keyword used for?",
        "question_hi": "'unsafe' कीवर्ड का उपयोग किस लिए किया जाता है?",
        "options_en": ["Enable operations that bypass compiler checks", "Disable all safety checks", "Make code faster", "Handle errors"],
        "options_hi": ["कम्पाइलर चेक बायपास करने वाले ऑपरेशन एनेबल करना", "सभी सेफ्टी चेक डिसेबल करना", "कोड को तेज बनाना", "एरर हैंडल करना"],
        "answer_en": "Enable operations that bypass compiler checks",
        "answer_hi": "कम्पाइलर चेक बायपास करने वाले ऑपरेशन एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What can you do in unsafe Rust?",
        "question_hi": "unsafe Rust में आप क्या कर सकते हैं?",
        "options_en": ["Dereference raw pointers, call unsafe functions, access mutable statics", "Ignore all borrow checker rules", "Make any code memory safe", "Automatically fix memory errors"],
        "options_hi": ["रॉ पॉइंटर डिरेफरेन्स करना, unsafe फंक्शन कॉल करना, mutable स्टैटिक एक्सेस करना", "सभी बोरो चेकर रूल्स इग्नोर करना", "किसी भी कोड को मेमोरी सेफ बनाना", "ऑटोमैटिकली मेमोरी एरर फिक्स करना"],
        "answer_en": "Dereference raw pointers, call unsafe functions, access mutable statics",
        "answer_hi": "रॉ पॉइंटर डिरेफरेन्स करना, unsafe फंक्शन कॉल करना, mutable स्टैटिक एक्सेस करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How do you create a raw pointer?",
        "question_hi": "रॉ पॉइंटर कैसे बनाते हैं?",
        "options_en": ["let ptr: *const i32 = &x;", "let ptr = raw_ptr(&x);", "let ptr: &raw i32 = &x;", "let ptr = Pointer::new(&x);"],
        "options_hi": ["let ptr: *const i32 = &x;", "let ptr = raw_ptr(&x);", "let ptr: &raw i32 = &x;", "let ptr = Pointer::new(&x);"],
        "answer_en": "let ptr: *const i32 = &x;",
        "answer_hi": "let ptr: *const i32 = &x;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is a function pointer?",
        "question_hi": "फंक्शन पॉइंटर क्या है?",
        "options_en": ["A pointer that points to code rather than data", "A reference to a function", "A closure", "A method"],
        "options_hi": ["एक पॉइंटर जो डेटा के बजाय कोड को पॉइंट करता है", "फंक्शन का रिफरेन्स", "क्लोजर", "मेथड"],
        "answer_en": "A pointer that points to code rather than data",
        "answer_hi": "एक पॉइंटर जो डेटा के बजाय कोड को पॉइंट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you define a function pointer type?",
        "question_hi": "फंक्शन पॉइंटर टाइप कैसे डिफाइन करते हैं?",
        "options_en": ["type FnPtr = fn(i32) -> i32;", "fn type FnPtr(i32) -> i32;", "function FnPtr = fn(i32) -> i32;", "def FnPtr: fn(i32) -> i32;"],
        "options_hi": ["type FnPtr = fn(i32) -> i32;", "fn type FnPtr(i32) -> i32;", "function FnPtr = fn(i32) -> i32;", "def FnPtr: fn(i32) -> i32;"],
        "answer_en": "type FnPtr = fn(i32) -> i32;",
        "answer_hi": "type FnPtr = fn(i32) -> i32;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is a trait object?",
        "question_hi": "trait ऑब्जेक्ट क्या है?",
        "options_en": ["Runtime polymorphism using traits", "Compile-time trait resolution", "Trait instance", "Trait reference"],
        "options_hi": ["traits का उपयोग करके रनटाइम पोलीमॉर्फिज्म", "कम्पाइल-टाइम trait रेजोल्यूशन", "trait इंस्टेंस", "trait रिफरेन्स"],
        "answer_en": "Runtime polymorphism using traits",
        "answer_hi": "traits का उपयोग करके रनटाइम पोलीमॉर्फिज्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you create a trait object?",
        "question_hi": "trait ऑब्जेक्ट कैसे बनाते हैं?",
        "options_en": ["let obj: &dyn MyTrait = &instance;", "let obj = instance as dyn MyTrait;", "let obj = MyTrait::from(instance);", "let obj = dyn MyTrait::new(instance);"],
        "options_hi": ["let obj: &dyn MyTrait = &instance;", "let obj = instance as dyn MyTrait;", "let obj = MyTrait::from(instance);", "let obj = dyn MyTrait::new(instance);"],
        "answer_en": "let obj: &dyn MyTrait = &instance;",
        "answer_hi": "let obj: &dyn MyTrait = &instance;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the 'dyn' keyword?",
        "question_hi": "'dyn' कीवर्ड क्या है?",
        "options_en": ["Indicates trait object dynamic dispatch", "Dynamic typing", "Memory allocation", "Error handling"],
        "options_hi": ["trait ऑब्जेक्ट डायनामिक डिस्पैच इंडिकेट करता है", "डायनामिक टाइपिंग", "मेमोरी अलोकेशन", "एरर हैंडलिंग"],
        "answer_en": "Indicates trait object dynamic dispatch",
        "answer_hi": "trait ऑब्जेक्ट डायनामिक डिस्पैच इंडिकेट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is associated type in traits?",
        "question_hi": "traits में associated type क्या है?",
        "options_en": ["Type placeholder in trait definition", "Generic type parameter", "Type alias", "Type constructor"],
        "options_hi": ["trait डेफिनिशन में टाइप प्लेसहोल्डर", "जेनरिक टाइप पैरामीटर", "टाइप अलायस", "टाइप कंस्ट्रक्टर"],
        "answer_en": "Type placeholder in trait definition",
        "answer_hi": "trait डेफिनिशन में टाइप प्लेसहोल्डर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "How do you define associated types in traits?",
        "question_hi": "traits में associated types कैसे डिफाइन करते हैं?",
        "options_en": ["trait MyTrait { type Output; }", "trait MyTrait<Output> {}", "trait MyTrait with Output {}", "trait MyTrait where type Output {}"],
        "options_hi": ["trait MyTrait { type Output; }", "trait MyTrait<Output> {}", "trait MyTrait with Output {}", "trait MyTrait where type Output {}"],
        "answer_en": "trait MyTrait { type Output; }",
        "answer_hi": "trait MyTrait { type Output; }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What are generic constraints?",
        "question_hi": "जेनरिक कंस्ट्रेंट क्या हैं?",
        "options_en": ["Restrictions on generic type parameters", "Generic type defaults", "Generic function parameters", "Generic trait bounds"],
        "options_hi": ["जेनरिक टाइप पैरामीटर पर रिस्ट्रिक्शन", "जेनरिक टाइप डिफॉल्ट", "जेनरिक फंक्शन पैरामीटर", "जेनरिक trait बाउंड"],
        "answer_en": "Restrictions on generic type parameters",
        "answer_hi": "जेनरिक टाइप पैरामीटर पर रिस्ट्रिक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "How do you specify trait bounds?",
        "question_hi": "trait बाउंड कैसे स्पेसिफाई करते हैं?",
        "options_en": ["fn func<T: MyTrait>(param: T) {}", "fn func<T where T: MyTrait>(param: T) {}", "fn func<T impl MyTrait>(param: T) {}", "Both A and B"],
        "options_hi": ["fn func<T: MyTrait>(param: T) {}", "fn func<T where T: MyTrait>(param: T) {}", "fn func<T impl MyTrait>(param: T) {}", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the 'impl Trait' syntax?",
        "question_hi": "'impl Trait' सिंटैक्स क्या है?",
        "options_en": ["Return type that implements a trait", "Trait implementation", "Generic trait", "Trait object"],
        "options_hi": ["रिटर्न टाइप जो trait इम्प्लीमेंट करता है", "Trait इम्प्लीमेंटेशन", "जेनरिक trait", "Trait ऑब्जेक्ट"],
        "answer_en": "Return type that implements a trait",
        "answer_hi": "रिटर्न टाइप जो trait इम्प्लीमेंट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "How do you use 'impl Trait' in return position?",
        "question_hi": "रिटर्न पोजिशन में 'impl Trait' कैसे उपयोग करते हैं?",
        "options_en": ["fn func() -> impl MyTrait {}", "fn func() -> dyn MyTrait {}", "fn func() -> trait MyTrait {}", "fn func() -> MyTrait {}"],
        "options_hi": ["fn func() -> impl MyTrait {}", "fn func() -> dyn MyTrait {}", "fn func() -> trait MyTrait {}", "fn func() -> MyTrait {}"],
        "answer_en": "fn func() -> impl MyTrait {}",
        "answer_hi": "fn func() -> impl MyTrait {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What are lifetimes in Rust?",
        "question_hi": "Rust में lifetimes क्या हैं?",
        "options_en": ["Scope of references to prevent dangling references", "Memory allocation time", "Program execution time", "Garbage collection intervals"],
        "options_hi": ["डैंगलिंग रिफरेन्स को प्रिवेंट करने के लिए रिफरेन्स का स्कोप", "मेमोरी अलोकेशन टाइम", "प्रोग्राम एक्जिक्यूशन टाइम", "गार्बेज कलेक्शन इंटरवल"],
        "answer_en": "Scope of references to prevent dangling references",
        "answer_hi": "डैंगलिंग रिफरेन्स को प्रिवेंट करने के लिए रिफरेन्स का स्कोप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "How do you define a lifetime parameter?",
        "question_hi": "लाइफटाइम पैरामीटर कैसे डिफाइन करते हैं?",
        "options_en": ["fn func<'a>(param: &'a str) -> &'a str {}", "fn func<lifetime a>(param: &a str) {}", "fn func(param: &'a str) -> &'a str {}", "lifetime fn func<'a>(param: &str) {}"],
        "options_hi": ["fn func<'a>(param: &'a str) -> &'a str {}", "fn func<lifetime a>(param: &a str) {}", "fn func(param: &'a str) -> &'a str {}", "lifetime fn func<'a>(param: &str) {}"],
        "answer_en": "fn func<'a>(param: &'a str) -> &'a str {}",
        "answer_hi": "fn func<'a>(param: &'a str) -> &'a str {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the 'static lifetime?",
        "question_hi": "'static लाइफटाइम क्या है?",
        "options_en": ["Lifetime that lasts for entire program duration", "Shortest possible lifetime", "Lifetime of static variables", "Both A and C"],
        "options_hi": ["लाइफटाइम जो पूरे प्रोग्राम ड्यूरेशन तक रहती है", "छोटी से छोटी संभव लाइफटाइम", "स्टैटिक वेरिएबल की लाइफटाइम", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is lifetime elision?",
        "question_hi": "लाइफटाइम एलिशन क्या है?",
        "options_en": ["Compiler inference of lifetimes in common patterns", "Manual lifetime specification", "Lifetime elimination", "Lifetime extension"],
        "options_hi": ["कॉमन पैटर्न में लाइफटाइम का कम्पाइलर इनफरेंस", "मैनुअल लाइफटाइम स्पेसिफिकेशन", "लाइफटाइम एलिमिनेशन", "लाइफटाइम एक्सटेंशन"],
        "answer_en": "Compiler inference of lifetimes in common patterns",
        "answer_hi": "कॉमन पैटर्न में लाइफटाइम का कम्पाइलर इनफरेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What are the three lifetime elision rules?",
        "question_hi": "तीन लाइफटाइम एलिशन रूल क्या हैं?",
        "options_en": ["Each parameter gets its own lifetime, if one input lifetime it applies to output, if &self or &mut self then self lifetime applies to output", "All references have same lifetime, output lifetime is 'static, no lifetime needed for primitive types", "Lifetimes are inherited, lifetimes can be omitted in structs, functions have default lifetimes", "No rules, compiler always requires explicit lifetimes"],
        "options_hi": ["हर पैरामीटर को अपनी लाइफटाइम मिलती है, अगर एक इनपुट लाइफटाइम है तो वह आउटपुट पर अप्लाई होती है, अगर &self या &mut self है तो self लाइफटाइम आउटपुट पर अप्लाई होती है", "सभी रिफरेन्स की समान लाइफटाइम होती है, आउटपुट लाइफटाइम 'static होती है, प्रिमिटिव टाइप के लिए लाइफटाइम की जरूरत नहीं", "लाइफटाइम इनहेरिट होती हैं, struct में लाइफटाइम ओमिट की जा सकती हैं, फंक्शन की डिफॉल्ट लाइफटाइम होती हैं", "कोई रूल नहीं, कम्पाइलर को हमेशा एक्सप्लिसिट लाइफटाइम चाहिए"],
        "answer_en": "Each parameter gets its own lifetime, if one input lifetime it applies to output, if &self or &mut self then self lifetime applies to output",
        "answer_hi": "हर पैरामीटर को अपनी लाइफटाइम मिलती है, अगर एक इनपुट लाइफटाइम है तो वह आउटपुट पर अप्लाई होती है, अगर &self या &mut self है तो self लाइफटाइम आउटपुट पर अप्लाई होती है",
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