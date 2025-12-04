const questions=[
    {
        "num": 1,
        "question_en": "What is pattern matching in Rust?",
        "question_hi": "Rust में पैटर्न मिलान क्या है?",
        "options_en": ["Comparing values against patterns", "String comparison", "Regular expressions", "Image recognition"],
        "options_hi": ["पैटर्न के विरुद्ध मानों की तुलना करना", "स्ट्रिंग तुलना", "रेगुलर एक्सप्रेशन", "छवि पहचान"],
        "answer_en": "Comparing values against patterns",
        "answer_hi": "पैटर्न के विरुद्ध मानों की तुलना करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How do you declare an immutable variable in Rust?",
        "question_hi": "Rust में अपरिवर्तनीय वेरिएबल कैसे घोषित करते हैं?",
        "options_en": ["let x = 5;", "const x = 5;", "immutable x = 5;", "let immut x = 5;"],
        "options_hi": ["let x = 5;", "const x = 5;", "immutable x = 5;", "let immut x = 5;"],
        "answer_en": "let x = 5;",
        "answer_hi": "let x = 5;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the entry point of every Rust program?",
        "question_hi": "हर Rust प्रोग्राम का एंट्री पॉइंट क्या है?",
        "options_en": ["fn main()", "function main()", "pub fn main()", "start main()"],
        "options_hi": ["fn main()", "function main()", "pub fn main()", "start main()"],
        "answer_en": "fn main()",
        "answer_hi": "fn main()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you print to standard output in Rust?",
        "question_hi": "Rust में स्टैंडर्ड आउटपुट पर प्रिंट कैसे करते हैं?",
        "options_en": ["println!(\"Hello\")", "print!(\"Hello\")", "console.log(\"Hello\")", "printf(\"Hello\")"],
        "options_hi": ["println!(\"Hello\")", "print!(\"Hello\")", "console.log(\"Hello\")", "printf(\"Hello\")"],
        "answer_en": "println!(\"Hello\")",
        "answer_hi": "println!(\"Hello\")",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the default integer type in Rust?",
        "question_hi": "Rust में डिफॉल्ट इंटीजर प्रकार क्या है?",
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
        "question_hi": "Rust में कॉन्स्टेंट कैसे बनाते हैं?",
        "options_en": ["const MAX: u32 = 100_000;", "let const MAX = 100000;", "constant MAX = 100000;", "static MAX: u32 = 100000;"],
        "options_hi": ["const MAX: u32 = 100_000;", "let const MAX = 100000;", "constant MAX = 100000;", "static MAX: u32 = 100000;"],
        "answer_en": "const MAX: u32 = 100_000;",
        "answer_hi": "const MAX: u32 = 100_000;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is a tuple in Rust?",
        "question_hi": "Rust में टपल क्या है?",
        "options_en": ["A collection of values of different types", "An array of same type values", "A key-value store", "A string type"],
        "options_hi": ["विभिन्न प्रकार के मानों का संग्रह", "समान प्रकार के मानों की सरणी", "कुंजी-मान भंडार", "स्ट्रिंग प्रकार"],
        "answer_en": "A collection of values of different types",
        "answer_hi": "विभिन्न प्रकार के मानों का संग्रह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you access tuple elements?",
        "question_hi": "टपल एलिमेंट्स तक कैसे पहुंचते हैं?",
        "options_en": ["tuple.0", "tuple[0]", "tuple(0)", "tuple->0"],
        "options_hi": ["tuple.0", "tuple[0]", "tuple(0)", "tuple->0"],
        "answer_en": "tuple.0",
        "answer_hi": "tuple.0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is an array in Rust?",
        "question_hi": "Rust में ऐरे क्या है?",
        "options_en": ["Fixed-size collection of same type elements", "Dynamic collection of elements", "Key-value pairs", "A string buffer"],
        "options_hi": ["समान प्रकार के तत्वों का निश्चित आकार संग्रह", "तत्वों का गतिशील संग्रह", "कुंजी-मान जोड़े", "स्ट्रिंग बफर"],
        "answer_en": "Fixed-size collection of same type elements",
        "answer_hi": "समान प्रकार के तत्वों का निश्चित आकार संग्रह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you create an array with 5 zeros?",
        "question_hi": "5 जीरो वाला ऐरे कैसे बनाते हैं?",
        "options_en": ["let arr = [0; 5];", "let arr = [0, 0, 0, 0, 0];", "let arr = Array::new(5, 0);", "let arr = [5]0;"],
        "options_hi": ["let arr = [0; 5];", "let arr = [0, 0, 0, 0, 0];", "let arr = Array::new(5, 0);", "let arr = [5]0;"],
        "answer_en": "let arr = [0; 5];",
        "answer_hi": "let arr = [0; 5];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of the 'mut' keyword?",
        "question_hi": "'mut' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["To make variables mutable", "To create constants", "For function mutability", "For module mutability"],
        "options_hi": ["वेरिएबल्स को परिवर्तनशील बनाने के लिए", "कॉन्स्टेंट्स बनाने के लिए", "फंक्शन म्यूटेबिलिटी के लिए", "मॉड्यूल म्यूटेबिलिटी के लिए"],
        "answer_en": "To make variables mutable",
        "answer_hi": "वेरिएबल्स को परिवर्तनशील बनाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you create a slice from an array?",
        "question_hi": "ऐरे से स्लाइस कैसे बनाते हैं?",
        "options_en": ["&arr[1..3]", "arr.slice(1, 3)", "slice(arr, 1, 3)", "arr[1..3]"],
        "options_hi": ["&arr[1..3]", "arr.slice(1, 3)", "slice(arr, 1, 3)", "arr[1..3]"],
        "answer_en": "&arr[1..3]",
        "answer_hi": "&arr[1..3]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
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
        "num": 14,
        "question_en": "How do you write an infinite loop?",
        "question_hi": "अनंत लूप कैसे लिखते हैं?",
        "options_en": ["loop { }", "while true { }", "for ;; { }", "All of the above"],
        "options_hi": ["loop { }", "while true { }", "for ;; { }", "उपरोक्त सभी"],
        "answer_en": "loop { }",
        "answer_hi": "loop { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the 'while' loop used for?",
        "question_hi": "'while' लूप का उपयोग किस लिए किया जाता है?",
        "options_en": ["Conditional repetition", "Infinite looping", "Collection iteration", "Error handling"],
        "options_hi": ["सशर्त पुनरावृत्ति", "अनंत लूपिंग", "संग्रह पुनरावृत्ति", "त्रुटि प्रबंधन"],
        "answer_en": "Conditional repetition",
        "answer_hi": "सशर्त पुनरावृत्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
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
        "num": 17,
        "question_en": "What does 'continue' do in a loop?",
        "question_hi": "लूप में 'continue' क्या करता है?",
        "options_en": ["Skips to next iteration", "Exits the loop", "Restarts the loop", "Pauses the loop"],
        "options_hi": ["अगले पुनरावृत्ति पर जाता है", "लूप से बाहर निकलता है", "लूप को पुनः आरंभ करता है", "लूप को रोकता है"],
        "answer_en": "Skips to next iteration",
        "answer_hi": "अगले पुनरावृत्ति पर जाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
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
        "num": 19,
        "question_en": "What is a struct in Rust?",
        "question_hi": "Rust में स्ट्रक्चर क्या है?",
        "options_en": ["A custom data type that groups related data", "A function type", "A collection type", "A pointer type"],
        "options_hi": ["एक कस्टम डेटा प्रकार जो संबंधित डेटा को समूहित करता है", "एक फंक्शन प्रकार", "एक संग्रह प्रकार", "एक पॉइंटर प्रकार"],
        "answer_en": "A custom data type that groups related data",
        "answer_hi": "एक कस्टम डेटा प्रकार जो संबंधित डेटा को समूहित करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you define a struct?",
        "question_hi": "स्ट्रक्चर कैसे परिभाषित करते हैं?",
        "options_en": ["struct User { name: String, age: u32 }", "class User { name: String, age: u32 }", "type User = { name: String, age: u32 };", "def struct User { name: String, age: u32 }"],
        "options_hi": ["struct User { name: String, age: u32 }", "class User { name: String, age: u32 }", "type User = { name: String, age: u32 };", "def struct User { name: String, age: u32 }"],
        "answer_en": "struct User { name: String, age: u32 }",
        "answer_hi": "struct User { name: String, age: u32 }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "How do you create an instance of a struct?",
        "question_hi": "स्ट्रक्चर का इंस्टेंस कैसे बनाते हैं?",
        "options_en": ["let user = User { name: String::from(\"Alice\"), age: 30 };", "let user = new User(\"Alice\", 30);", "let user = User::new(\"Alice\", 30);", "let user = User(\"Alice\", 30);"],
        "options_hi": ["let user = User { name: String::from(\"Alice\"), age: 30 };", "let user = new User(\"Alice\", 30);", "let user = User::new(\"Alice\", 30);", "let user = User(\"Alice\", 30);"],
        "answer_en": "let user = User { name: String::from(\"Alice\"), age: 30 };",
        "answer_hi": "let user = User { name: String::from(\"Alice\"), age: 30 };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the main purpose of Rust's ownership system?",
        "question_hi": "Rust के स्वामित्व प्रणाली का मुख्य उद्देश्य क्या है?",
        "options_en": ["Memory safety without garbage collection", "Faster execution speed", "Automatic memory management", "Dynamic typing support"],
        "options_hi": ["गार्बेज कलेक्शन के बिना मेमोरी सुरक्षा", "तेज एक्जिक्यूशन स्पीड", "स्वचालित मेमोरी प्रबंधन", "डायनामिक टाइपिंग समर्थन"],
        "answer_en": "Memory safety without garbage collection",
        "answer_hi": "गार्बेज कलेक्शन के बिना मेमोरी सुरक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "How do you use the 'match' keyword?",
        "question_hi": "'match' कीवर्ड का उपयोग कैसे करते हैं?",
        "options_en": ["match value { pattern => expression, _ => () }", "switch value { case pattern: }", "if value matches pattern { }", "case value of pattern ->"],
        "options_hi": ["match value { pattern => expression, _ => () }", "switch value { case pattern: }", "if value matches pattern { }", "case value of pattern ->"],
        "answer_en": "match value { pattern => expression, _ => () }",
        "answer_hi": "match value { pattern => expression, _ => () }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the '_' pattern in match?",
        "question_hi": "match में '_' पैटर्न क्या है?",
        "options_en": ["Catch-all pattern", "Ignore value", "Wildcard character", "Private pattern"],
        "options_hi": ["सभी को पकड़ने वाला पैटर्न", "मान को अनदेखा करना", "वाइल्डकार्ड वर्ण", "निजी पैटर्न"],
        "answer_en": "Catch-all pattern",
        "answer_hi": "सभी को पकड़ने वाला पैटर्न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "How do you define an enum in Rust?",
        "question_hi": "Rust में एनम कैसे परिभाषित करते हैं?",
        "options_en": ["enum IpAddr { V4, V6 }", "struct enum IpAddr { V4, V6 }", "type IpAddr = V4 | V6;", "union IpAddr { V4, V6 }"],
        "options_hi": ["enum IpAddr { V4, V6 }", "struct enum IpAddr { V4, V6 }", "type IpAddr = V4 | V6;", "union IpAddr { V4, V6 }"],
        "answer_en": "enum IpAddr { V4, V6 }",
        "answer_hi": "enum IpAddr { V4, V6 }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What are enum variants?",
        "question_hi": "एनम वेरिएंट क्या हैं?",
        "options_en": ["Possible values of an enum", "Enum methods", "Enum parameters", "Enum traits"],
        "options_hi": ["एनम के संभावित मान", "एनम विधियाँ", "एनम पैरामीटर", "एनम ट्रेट्स"],
        "answer_en": "Possible values of an enum",
        "answer_hi": "एनम के संभावित मान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "How do you use the 'if let' syntax?",
        "question_hi": "'if let' सिंटैक्स का उपयोग कैसे करते हैं?",
        "options_en": ["if let pattern = value { }", "if value matches pattern { }", "let if pattern = value { }", "if value == pattern { }"],
        "options_hi": ["if let pattern = value { }", "if value matches pattern { }", "let if pattern = value { }", "if value == pattern { }"],
        "answer_en": "if let pattern = value { }",
        "answer_hi": "if let pattern = value { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is a module in Rust?",
        "question_hi": "Rust में मॉड्यूल क्या है?",
        "options_en": ["A namespace that contains definitions", "A function group", "A struct implementation", "A trait definition"],
        "options_hi": ["एक नेमस्पेस जिसमें परिभाषाएँ होती हैं", "एक फंक्शन समूह", "एक स्ट्रक्चर कार्यान्वयन", "एक ट्रेट परिभाषा"],
        "answer_en": "A namespace that contains definitions",
        "answer_hi": "एक नेमस्पेस जिसमें परिभाषाएँ होती हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How do you define a module?",
        "question_hi": "मॉड्यूल कैसे परिभाषित करते हैं?",
        "options_en": ["mod my_module { }", "module my_module { }", "def mod my_module { }", "namespace my_module { }"],
        "options_hi": ["mod my_module { }", "module my_module { }", "def mod my_module { }", "namespace my_module { }"],
        "answer_en": "mod my_module { }",
        "answer_hi": "mod my_module { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you use items from another module?",
        "question_hi": "दूसरे मॉड्यूल से आइटम्स का उपयोग कैसे करते हैं?",
        "options_en": ["use my_module::MyStruct;", "import my_module.MyStruct;", "include my_module::MyStruct;", "from my_module import MyStruct"],
        "options_hi": ["use my_module::MyStruct;", "import my_module.MyStruct;", "include my_module::MyStruct;", "from my_module import MyStruct"],
        "answer_en": "use my_module::MyStruct;",
        "answer_hi": "use my_module::MyStruct;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the 'pub' keyword used for?",
        "question_hi": "'pub' कीवर्ड का उपयोग किस लिए किया जाता है?",
        "options_en": ["To make items public", "To make items private", "To publish crates", "For public functions only"],
        "options_hi": ["आइटम्स को सार्वजनिक बनाने के लिए", "आइटम्स को निजी बनाने के लिए", "क्रेट्स प्रकाशित करने के लिए", "केवल सार्वजनिक फंक्शन्स के लिए"],
        "answer_en": "To make items public",
        "answer_hi": "आइटम्स को सार्वजनिक बनाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you create a new vector?",
        "question_hi": "नया वेक्टर कैसे बनाते हैं?",
        "options_en": ["let v = vec![1, 2, 3];", "let v = Vector::new();", "let v = [1, 2, 3].to_vec();", "let v = new_vec![1, 2, 3];"],
        "options_hi": ["let v = vec![1, 2, 3];", "let v = Vector::new();", "let v = [1, 2, 3].to_vec();", "let v = new_vec![1, 2, 3];"],
        "answer_en": "let v = vec![1, 2, 3];",
        "answer_hi": "let v = vec![1, 2, 3];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "How do you add an element to a vector?",
        "question_hi": "वेक्टर में एलिमेंट कैसे जोड़ते हैं?",
        "options_en": ["v.push(4);", "v.add(4);", "v.insert(4);", "v.append(4);"],
        "options_hi": ["v.push(4);", "v.add(4);", "v.insert(4);", "v.append(4);"],
        "answer_en": "v.push(4);",
        "answer_hi": "v.push(4);",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is a String in Rust?",
        "question_hi": "Rust में स्ट्रिंग क्या है?",
        "options_en": ["A UTF-8 encoded, growable string", "A fixed-size string", "An ASCII string only", "A character array"],
        "options_hi": ["एक UTF-8 एनकोडेड, बढ़ने योग्य स्ट्रिंग", "एक निश्चित आकार की स्ट्रिंग", "केवल एक ASCII स्ट्रिंग", "एक वर्ण सरणी"],
        "answer_en": "A UTF-8 encoded, growable string",
        "answer_hi": "एक UTF-8 एनकोडेड, बढ़ने योग्य स्ट्रिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "How do you create a new String?",
        "question_hi": "नई स्ट्रिंग कैसे बनाते हैं?",
        "options_en": ["String::from(\"hello\")", "new String(\"hello\")", "\"hello\".to_string()", "Both A and C"],
        "options_hi": ["String::from(\"hello\")", "new String(\"hello\")", "\"hello\".to_string()", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is a string slice (&str)?",
        "question_hi": "स्ट्रिंग स्लाइस (&str) क्या है?",
        "options_en": ["A reference to a UTF-8 string sequence", "A mutable string", "An owned string", "A string builder"],
        "options_hi": ["एक UTF-8 स्ट्रिंग अनुक्रम का संदर्भ", "एक परिवर्तनशील स्ट्रिंग", "एक स्वामित्व वाली स्ट्रिंग", "एक स्ट्रिंग बिल्डर"],
        "answer_en": "A reference to a UTF-8 string sequence",
        "answer_hi": "एक UTF-8 स्ट्रिंग अनुक्रम का संदर्भ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How do you concatenate strings?",
        "question_hi": "स्ट्रिंग्स को कैसे जोड़ते हैं?",
        "options_en": ["let s = s1 + &s2;", "let s = s1 + s2;", "let s = s1.concat(s2);", "let s = concat(s1, s2);"],
        "options_hi": ["let s = s1 + &s2;", "let s = s1 + s2;", "let s = s1.concat(s2);", "let s = concat(s1, s2);"],
        "answer_en": "let s = s1 + &s2;",
        "answer_hi": "let s = s1 + &s2;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is a HashMap in Rust?",
        "question_hi": "Rust में HashMap क्या है?",
        "options_en": ["A key-value store with hashing", "A sorted map", "An array with keys", "A linked list with keys"],
        "options_hi": ["हैशिंग के साथ एक कुंजी-मान भंडार", "एक क्रमबद्ध मानचित्र", "कुंजियों के साथ एक सरणी", "कुंजियों के साथ एक लिंक्ड सूची"],
        "answer_en": "A key-value store with hashing",
        "answer_hi": "हैशिंग के साथ एक कुंजी-मान भंडार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
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
        "num": 40,
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
        "num": 41,
        "question_en": "What is the '?' operator used for?",
        "question_hi": "'?' ऑपरेटर का उपयोग किस लिए किया जाता है?",
        "options_en": ["Error propagation", "Optional chaining", "Null checking", "Boolean conversion"],
        "options_hi": ["त्रुटि प्रसार", "वैकल्पिक श्रृंखलन", "शून्य जांच", "बूलियन रूपांतरण"],
        "answer_en": "Error propagation",
        "answer_hi": "त्रुटि प्रसार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the difference between Result and Option?",
        "question_hi": "Result और Option में क्या अंतर है?",
        "options_en": ["Result is for errors, Option for optional values", "Result is for success, Option for failure", "No difference", "Result is for numbers, Option for strings"],
        "options_hi": ["Result त्रुटियों के लिए है, Option वैकल्पिक मानों के लिए", "Result सफलता के लिए है, Option विफलता के लिए", "कोई अंतर नहीं", "Result संख्याओं के लिए है, Option स्ट्रिंग्स के लिए"],
        "answer_en": "Result is for errors, Option for optional values",
        "answer_hi": "Result त्रुटियों के लिए है, Option वैकल्पिक मानों के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "How do you handle a Result with match?",
        "question_hi": "Result को match से कैसे संभालते हैं?",
        "options_en": ["match result { Ok(val) => val, Err(e) => panic!() }", "match result { Some(val) => val, None => panic!() }", "switch result { case Ok: case Err: }", "if result.is_ok() { }"],
        "options_hi": ["match result { Ok(val) => val, Err(e) => panic!() }", "match result { Some(val) => val, None => panic!() }", "switch result { case Ok: case Err: }", "if result.is_ok() { }"],
        "answer_en": "match result { Ok(val) => val, Err(e) => panic!() }",
        "answer_hi": "match result { Ok(val) => val, Err(e) => panic!() }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What does 'unwrap()' do on a Result?",
        "question_hi": "Result पर 'unwrap()' क्या करता है?",
        "options_en": ["Returns value or panics on error", "Returns value or default", "Converts to Option", "Ignores error"],
        "options_hi": ["मान लौटाता है या त्रुटि पर पैनिक करता है", "मान लौटाता है या डिफॉल्ट", "Option में परिवर्तित करता है", "त्रुटि को अनदेखा करता है"],
        "answer_en": "Returns value or panics on error",
        "answer_hi": "मान लौटाता है या त्रुटि पर पैनिक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is 'expect()' used for?",
        "question_hi": "'expect()' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Unwrap with custom panic message", "Error handling without panic", "Convert to Option", "Check if value exists"],
        "options_hi": ["कस्टम पैनिक संदेश के साथ अनरैप", "पैनिक के बिना त्रुटि प्रबंधन", "Option में परिवर्तित करना", "जांचना कि मान मौजूद है या नहीं"],
        "answer_en": "Unwrap with custom panic message",
        "answer_hi": "कस्टम पैनिक संदेश के साथ अनरैप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How do you define a generic function?",
        "question_hi": "जेनेरिक फंक्शन कैसे परिभाषित करते हैं?",
        "options_en": ["fn func<T>(param: T) -> T {}", "generic fn func<T>(param: T) {}", "fn func generic<T>(param: T) {}", "function<T> func(param: T) {}"],
        "options_hi": ["fn func<T>(param: T) -> T {}", "generic fn func<T>(param: T) {}", "fn func generic<T>(param: T) {}", "function<T> func(param: T) {}"],
        "answer_en": "fn func<T>(param: T) -> T {}",
        "answer_hi": "fn func<T>(param: T) -> T {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What are traits in Rust?",
        "question_hi": "Rust में ट्रेट्स क्या हैं?",
        "options_en": ["Interfaces that define shared behavior", "Class inheritance", "Function templates", "Type aliases"],
        "options_hi": ["इंटरफेस जो साझा व्यवहार को परिभाषित करते हैं", "क्लास इनहेरिटेंस", "फंक्शन टेम्पलेट्स", "टाइप अलायसेस"],
        "answer_en": "Interfaces that define shared behavior",
        "answer_hi": "इंटरफेस जो साझा व्यवहार को परिभाषित करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you define a trait?",
        "question_hi": "ट्रेट कैसे परिभाषित करते हैं?",
        "options_en": ["trait MyTrait { fn method(&self); }", "struct trait MyTrait { }", "interface MyTrait { }", "define trait MyTrait;"],
        "options_hi": ["trait MyTrait { fn method(&self); }", "struct trait MyTrait { }", "interface MyTrait { }", "define trait MyTrait;"],
        "answer_en": "trait MyTrait { fn method(&self); }",
        "answer_hi": "trait MyTrait { fn method(&self); }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How do you implement a trait for a type?",
        "question_hi": "किसी प्रकार के लिए ट्रेट कैसे लागू करते हैं?",
        "options_en": ["impl MyTrait for MyStruct {}", "trait impl for MyStruct {}", "MyStruct implements MyTrait {}", "implement MyTrait for MyStruct {}"],
        "options_hi": ["impl MyTrait for MyStruct {}", "trait impl for MyStruct {}", "MyStruct implements MyTrait {}", "implement MyTrait for MyStruct {}"],
        "answer_en": "impl MyTrait for MyStruct {}",
        "answer_hi": "impl MyTrait for MyStruct {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the 'self' parameter in methods?",
        "question_hi": "मेथड्स में 'self' पैरामीटर क्या है?",
        "options_en": ["A reference to the instance", "A static method marker", "A return value", "An error parameter"],
        "options_hi": ["इंस्टेंस का एक संदर्भ", "एक स्थिर मेथड मार्कर", "एक रिटर्न वैल्यू", "एक त्रुटि पैरामीटर"],
        "answer_en": "A reference to the instance",
        "answer_hi": "इंस्टेंस का एक संदर्भ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the difference between &self and self?",
        "question_hi": "&self और self में क्या अंतर है?",
        "options_en": ["&self borrows, self takes ownership", "&self is mutable, self is immutable", "No difference", "&self for static, self for instance"],
        "options_hi": ["&self उधार लेता है, self स्वामित्व लेता है", "&self परिवर्तनशील है, self अपरिवर्तनीय है", "कोई अंतर नहीं", "&self स्थिर के लिए, self इंस्टेंस के लिए"],
        "answer_en": "&self borrows, self takes ownership",
        "answer_hi": "&self उधार लेता है, self स्वामित्व लेता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
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
        "num": 53,
        "question_en": "What is the 'move' keyword in closures?",
        "question_hi": "क्लोजर में 'move' कीवर्ड क्या है?",
        "options_en": ["Takes ownership of captured variables", "Moves closure to heap", "Makes closure mutable", "Moves closure between threads"],
        "options_hi": ["कैप्चर वेरिएबल्स का स्वामित्व लेता है", "क्लोजर को हीप पर ले जाता है", "क्लोजर को परिवर्तनशील बनाता है", "क्लोजर को थ्रेड्स के बीच ले जाता है"],
        "answer_en": "Takes ownership of captured variables",
        "answer_hi": "कैप्चर वेरिएबल्स का स्वामित्व लेता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is a closure in Rust?",
        "question_hi": "Rust में क्लोजर क्या है?",
        "options_en": ["An anonymous function that captures its environment", "A named function", "A function pointer", "A method"],
        "options_hi": ["एक अनाम फंक्शन जो अपने वातावरण को कैप्चर करता है", "एक नामित फंक्शन", "एक फंक्शन पॉइंटर", "एक मेथड"],
        "answer_en": "An anonymous function that captures its environment",
        "answer_hi": "एक अनाम फंक्शन जो अपने वातावरण को कैप्चर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "How do you define a closure?",
        "question_hi": "क्लोजर कैसे परिभाषित करते हैं?",
        "options_en": ["let closure = |x| x + 1;", "closure |x| x + 1;", "let closure = function(x) { x + 1 };", "fn closure(x) { x + 1 }"],
        "options_hi": ["let closure = |x| x + 1;", "closure |x| x + 1;", "let closure = function(x) { x + 1 };", "fn closure(x) { x + 1 }"],
        "answer_en": "let closure = |x| x + 1;",
        "answer_hi": "let closure = |x| x + 1;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What are the Fn traits?",
        "question_hi": "Fn ट्रेट्स क्या हैं?",
        "options_en": ["Traits for callable types", "Function definitions", "Closure parameters", "Method signatures"],
        "options_hi": ["कॉलेबल प्रकारों के लिए ट्रेट्स", "फंक्शन परिभाषाएँ", "क्लोजर पैरामीटर", "मेथड सिग्नेचर"],
        "answer_en": "Traits for callable types",
        "answer_hi": "कॉलेबल प्रकारों के लिए ट्रेट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the difference between Fn, FnMut, and FnOnce?",
        "question_hi": "Fn, FnMut, और FnOnce में क्या अंतर है?",
        "options_en": ["Different borrowing requirements for captured variables", "Different return types", "Different parameter counts", "No difference"],
        "options_hi": ["कैप्चर वेरिएबल्स के लिए अलग-अलग उधार आवश्यकताएँ", "अलग-अलग रिटर्न प्रकार", "अलग-अलग पैरामीटर संख्या", "कोई अंतर नहीं"],
        "answer_en": "Different borrowing requirements for captured variables",
        "answer_hi": "कैप्चर वेरिएबल्स के लिए अलग-अलग उधार आवश्यकताएँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How do you return a closure from a function?",
        "question_hi": "फंक्शन से क्लोजर कैसे लौटाते हैं?",
        "options_en": ["Box<dyn Fn() -> i32>", "impl Fn() -> i32", "Closure trait", "Both A and B"],
        "options_hi": ["Box<dyn Fn() -> i32>", "impl Fn() -> i32", "Closure trait", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is a smart pointer in Rust?",
        "question_hi": "Rust में स्मार्ट पॉइंटर क्या है?",
        "options_en": ["A pointer with additional metadata and capabilities", "A raw pointer", "A reference", "A function pointer"],
        "options_hi": ["अतिरिक्त मेटाडेटा और क्षमताओं वाला एक पॉइंटर", "एक रॉ पॉइंटर", "एक संदर्भ", "एक फंक्शन पॉइंटर"],
        "answer_en": "A pointer with additional metadata and capabilities",
        "answer_hi": "अतिरिक्त मेटाडेटा और क्षमताओं वाला एक पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is Box<T> used for?",
        "question_hi": "Box<T> का उपयोग किस लिए किया जाता है?",
        "options_en": ["Heap allocation with ownership", "Reference counting", "Automatic dereferencing", "Thread safety"],
        "options_hi": ["स्वामित्व के साथ हीप आवंटन", "संदर्भ गिनती", "स्वचालित डीरेफरेंसिंग", "थ्रेड सुरक्षा"],
        "answer_en": "Heap allocation with ownership",
        "answer_hi": "स्वामित्व के साथ हीप आवंटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is Rc<T> used for?",
        "question_hi": "Rc<T> का उपयोग किस लिए किया जाता है?",
        "options_en": ["Reference counting for single-threaded scenarios", "Thread-safe reference counting", "Automatic memory management", "Heap allocation"],
        "options_hi": ["सिंगल-थ्रेडेड परिदृश्यों के लिए संदर्भ गिनती", "थ्रेड-सुरक्षित संदर्भ गिनती", "स्वचालित मेमोरी प्रबंधन", "हीप आवंटन"],
        "answer_en": "Reference counting for single-threaded scenarios",
        "answer_hi": "सिंगल-थ्रेडेड परिदृश्यों के लिए संदर्भ गिनती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is Arc<T> used for?",
        "question_hi": "Arc<T> का उपयोग किस लिए किया जाता है?",
        "options_en": ["Atomic reference counting for thread safety", "Automatic memory cleanup", "Stack allocation", "Single ownership"],
        "options_hi": ["थ्रेड सुरक्षा के लिए परमाणु संदर्भ गिनती", "स्वचालित मेमोरी सफाई", "स्टैक आवंटन", "एकल स्वामित्व"],
        "answer_en": "Atomic reference counting for thread safety",
        "answer_hi": "थ्रेड सुरक्षा के लिए परमाणु संदर्भ गिनती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is RefCell<T> used for?",
        "question_hi": "RefCell<T> का उपयोग किस लिए किया जाता है?",
        "options_en": ["Interior mutability with runtime borrowing checks", "Compile-time borrowing checks", "Thread safety", "Automatic memory management"],
        "options_hi": ["रनटाइम उधार जांच के साथ आंतरिक परिवर्तनशीलता", "कंपाइल-टाइम उधार जांच", "थ्रेड सुरक्षा", "स्वचालित मेमोरी प्रबंधन"],
        "answer_en": "Interior mutability with runtime borrowing checks",
        "answer_hi": "रनटाइम उधार जांच के साथ आंतरिक परिवर्तनशीलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is Cell<T> used for?",
        "question_hi": "Cell<T> का उपयोग किस लिए किया जाता है?",
        "options_en": ["Interior mutability for Copy types", "Thread safety", "Automatic memory management", "Reference counting"],
        "options_hi": ["Copy प्रकारों के लिए आंतरिक परिवर्तनशीलता", "थ्रेड सुरक्षा", "स्वचालित मेमोरी प्रबंधन", "संदर्भ गिनती"],
        "answer_en": "Interior mutability for Copy types",
        "answer_hi": "Copy प्रकारों के लिए आंतरिक परिवर्तनशीलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the difference between Cell and RefCell?",
        "question_hi": "Cell और RefCell में क्या अंतर है?",
        "options_en": ["Cell works with Copy types, RefCell with any type", "Cell is thread-safe, RefCell is not", "No difference", "Cell uses references, RefCell uses values"],
        "options_hi": ["Cell Copy प्रकारों के साथ काम करता है, RefCell किसी भी प्रकार के साथ", "Cell थ्रेड-सुरक्षित है, RefCell नहीं है", "कोई अंतर नहीं", "Cell संदर्भों का उपयोग करता है, RefCell मानों का उपयोग करता है"],
        "answer_en": "Cell works with Copy types, RefCell with any type",
        "answer_hi": "Cell Copy प्रकारों के साथ काम करता है, RefCell किसी भी प्रकार के साथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the Drop trait?",
        "question_hi": "Drop ट्रेट क्या है?",
        "options_en": ["Custom cleanup when value goes out of scope", "Automatic memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["मान के स्कोप से बाहर जाने पर कस्टम सफाई", "स्वचालित मेमोरी आवंटन", "त्रुटि प्रबंधन", "पैटर्न मिलान"],
        "answer_en": "Custom cleanup when value goes out of scope",
        "answer_hi": "मान के स्कोप से बाहर जाने पर कस्टम सफाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the Clone trait?",
        "question_hi": "Clone ट्रेट क्या है?",
        "options_en": ["Explicit duplication of values", "Automatic copying", "Memory management", "Error handling"],
        "options_hi": ["मानों की स्पष्ट प्रतिलिपि", "स्वचालित कॉपीिंग", "मेमोरी प्रबंधन", "त्रुटि प्रबंधन"],
        "answer_en": "Explicit duplication of values",
        "answer_hi": "मानों की स्पष्ट प्रतिलिपि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the Copy trait?",
        "question_hi": "Copy ट्रेट क्या है?",
        "options_en": ["Mark types that can be copied bitwise", "Automatic duplication", "Memory management", "Error handling"],
        "options_hi": ["उन प्रकारों को चिह्नित करें जिन्हें बिटवाइज कॉपी किया जा सकता है", "स्वचालित प्रतिलिपि", "मेमोरी प्रबंधन", "त्रुटि प्रबंधन"],
        "answer_en": "Mark types that can be copied bitwise",
        "answer_hi": "उन प्रकारों को चिह्नित करें जिन्हें बिटवाइज कॉपी किया जा सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the difference between Clone and Copy?",
        "question_hi": "Clone और Copy में क्या अंतर है?",
        "options_en": ["Clone is explicit, Copy is implicit", "Clone for heap, Copy for stack", "No difference", "Clone for structs, Copy for enums"],
        "options_hi": ["Clone स्पष्ट है, Copy अंतर्निहित है", "Clone हीप के लिए, Copy स्टैक के लिए", "कोई अंतर नहीं", "Clone स्ट्रक्चर के लिए, Copy एनम के लिए"],
        "answer_en": "Clone is explicit, Copy is implicit",
        "answer_hi": "Clone स्पष्ट है, Copy अंतर्निहित है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the Default trait?",
        "question_hi": "Default ट्रेट क्या है?",
        "options_en": ["Provide default values for types", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["प्रकारों के लिए डिफॉल्ट मान प्रदान करना", "मेमोरी आवंटन", "त्रुटि प्रबंधन", "पैटर्न मिलान"],
        "answer_en": "Provide default values for types",
        "answer_hi": "प्रकारों के लिए डिफॉल्ट मान प्रदान करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the From trait?",
        "question_hi": "From ट्रेट क्या है?",
        "options_en": ["Type conversion with guaranteed success", "Error handling", "Memory allocation", "Pattern matching"],
        "options_hi": ["गारंटीकृत सफलता के साथ प्रकार रूपांतरण", "त्रुटि प्रबंधन", "मेमोरी आवंटन", "पैटर्न मिलान"],
        "answer_en": "Type conversion with guaranteed success",
        "answer_hi": "गारंटीकृत सफलता के साथ प्रकार रूपांतरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the Into trait?",
        "question_hi": "Into ट्रेट क्या है?",
        "options_en": ["Reciprocal of From trait", "Error conversion", "Memory allocation", "Type checking"],
        "options_hi": ["From ट्रेट का पारस्परिक", "त्रुटि रूपांतरण", "मेमोरी आवंटन", "प्रकार जांच"],
        "answer_en": "Reciprocal of From trait",
        "answer_hi": "From ट्रेट का पारस्परिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the Deref trait?",
        "question_hi": "Deref ट्रेट क्या है?",
        "options_en": ["Enable dereference operator (*) overloading", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["डीरेफरेंस ऑपरेटर (*) ओवरलोडिंग सक्षम करना", "मेमोरी आवंटन", "त्रुटि प्रबंधन", "पैटर्न मिलान"],
        "answer_en": "Enable dereference operator (*) overloading",
        "answer_hi": "डीरेफरेंस ऑपरेटर (*) ओवरलोडिंग सक्षम करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the AsRef trait?",
        "question_hi": "AsRef ट्रेट क्या है?",
        "options_en": ["Enable cheap reference-to-reference conversion", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["सस्ता संदर्भ-से-संदर्भ रूपांतरण सक्षम करना", "मेमोरी आवंटन", "त्रुटि प्रबंधन", "पैटर्न मिलान"],
        "answer_en": "Enable cheap reference-to-reference conversion",
        "answer_hi": "सस्ता संदर्भ-से-संदर्भ रूपांतरण सक्षम करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the Borrow trait?",
        "question_hi": "Borrow ट्रेट क्या है?",
        "options_en": ["Similar to AsRef but with additional semantic meaning", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["AsRef के समान लेकिन अतिरिक्त अर्थ के साथ", "मेमोरी आवंटन", "त्रुटि प्रबंधन", "पैटर्न मिलान"],
        "answer_en": "Similar to AsRef but with additional semantic meaning",
        "answer_hi": "AsRef के समान लेकिन अतिरिक्त अर्थ के साथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the ToOwned trait?",
        "question_hi": "ToOwned ट्रेट क्या है?",
        "options_en": ["Create owned data from borrowed data", "Memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["उधार डेटा से स्वामित्व वाला डेटा बनाना", "मेमोरी आवंटन", "त्रुटि प्रबंधन", "पैटर्न मिलान"],
        "answer_en": "Create owned data from borrowed data",
        "answer_hi": "उधार डेटा से स्वामित्व वाला डेटा बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the Cow (Clone on Write) type?",
        "question_hi": "Cow (Clone on Write) प्रकार क्या है?",
        "options_en": ["Efficient borrowing with optional cloning", "Automatic copying", "Memory allocation", "Thread synchronization"],
        "options_hi": ["वैकल्पिक क्लोनिंग के साथ कुशल उधार", "स्वचालित कॉपीिंग", "मेमोरी आवंटन", "थ्रेड सिंक्रनाइज़ेशन"],
        "answer_en": "Efficient borrowing with optional cloning",
        "answer_hi": "वैकल्पिक क्लोनिंग के साथ कुशल उधार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the Send trait?",
        "question_hi": "Send ट्रेट क्या है?",
        "options_en": ["Mark types that can be transferred across threads", "Automatic serialization", "Memory safety", "Error handling"],
        "options_hi": ["उन प्रकारों को चिह्नित करें जिन्हें थ्रेड्स के बीच स्थानांतरित किया जा सकता है", "स्वचालित क्रमबद्धता", "मेमोरी सुरक्षा", "त्रुटि प्रबंधन"],
        "answer_en": "Mark types that can be transferred across threads",
        "answer_hi": "उन प्रकारों को चिह्नित करें जिन्हें थ्रेड्स के बीच स्थानांतरित किया जा सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the Sync trait?",
        "question_hi": "Sync ट्रेट क्या है?",
        "options_en": ["Mark types safe to share references between threads", "Thread creation", "Memory allocation", "Error handling"],
        "options_hi": ["उन प्रकारों को चिह्नित करें जो थ्रेड्स के बीच संदर्भ साझा करने के लिए सुरक्षित हैं", "थ्रेड निर्माण", "मेमोरी आवंटन", "त्रुटि प्रबंधन"],
        "answer_en": "Mark types safe to share references between threads",
        "answer_hi": "उन प्रकारों को चिह्नित करें जो थ्रेड्स के बीच संदर्भ साझा करने के लिए सुरक्षित हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the 'unsafe' keyword used for?",
        "question_hi": "'unsafe' कीवर्ड का उपयोग किस लिए किया जाता है?",
        "options_en": ["Enable operations that bypass compiler checks", "Disable all safety checks", "Make code faster", "Handle errors"],
        "options_hi": ["कंपाइलर जांच को बायपास करने वाले ऑपरेशन सक्षम करना", "सभी सुरक्षा जांच अक्षम करना", "कोड को तेज बनाना", "त्रुटियों को संभालना"],
        "answer_en": "Enable operations that bypass compiler checks",
        "answer_hi": "कंपाइलर जांच को बायपास करने वाले ऑपरेशन सक्षम करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What can you do in unsafe Rust?",
        "question_hi": "unsafe Rust में आप क्या कर सकते हैं?",
        "options_en": ["Dereference raw pointers, call unsafe functions, access mutable statics", "Ignore all borrow checker rules", "Make any code memory safe", "Automatically fix memory errors"],
        "options_hi": ["रॉ पॉइंटर्स को डीरेफरेंस करना, unsafe फंक्शन कॉल करना, म्यूटेबल स्टैटिक्स एक्सेस करना", "सभी उधार चेकर नियमों को अनदेखा करना", "किसी भी कोड को मेमोरी सुरक्षित बनाना", "मेमोरी त्रुटियों को स्वचालित रूप से ठीक करना"],
        "answer_en": "Dereference raw pointers, call unsafe functions, access mutable statics",
        "answer_hi": "रॉ पॉइंटर्स को डीरेफरेंस करना, unsafe फंक्शन कॉल करना, म्यूटेबल स्टैटिक्स एक्सेस करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
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
        "num": 83,
        "question_en": "What is a function pointer?",
        "question_hi": "फंक्शन पॉइंटर क्या है?",
        "options_en": ["A pointer that points to code rather than data", "A reference to a function", "A closure", "A method"],
        "options_hi": ["एक पॉइंटर जो डेटा के बजाय कोड की ओर इशारा करता है", "एक फंक्शन का संदर्भ", "एक क्लोजर", "एक मेथड"],
        "answer_en": "A pointer that points to code rather than data",
        "answer_hi": "एक पॉइंटर जो डेटा के बजाय कोड की ओर इशारा करता है",
        "attempted": false,
        "selected": ""
    },
        {
        "num": 84,
        "question_en": "How do you define a function pointer type?",
        "question_hi": "फंक्शन पॉइंटर प्रकार कैसे परिभाषित करते हैं?",
        "options_en": ["type FnPtr = fn(i32) -> i32;", "fn type FnPtr(i32) -> i32;", "typedef fn(i32) -> i32 FnPtr;", "function pointer FnPtr = fn(i32) -> i32;"],
        "options_hi": ["type FnPtr = fn(i32) -> i32;", "fn type FnPtr(i32) -> i32;", "typedef fn(i32) -> i32 FnPtr;", "function pointer FnPtr = fn(i32) -> i32;"],
        "answer_en": "type FnPtr = fn(i32) -> i32;",
        "answer_hi": "type FnPtr = fn(i32) -> i32;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is a macro in Rust?",
        "question_hi": "Rust में मैक्रो क्या है?",
        "options_en": ["Metaprogramming that writes code", "A large function", "A compiled function", "A type alias"],
        "options_hi": ["मेटाप्रोग्रामिंग जो कोड लिखती है", "एक बड़ा फंक्शन", "एक संकलित फंक्शन", "एक प्रकार उपनाम"],
        "answer_en": "Metaprogramming that writes code",
        "answer_hi": "मेटाप्रोग्रामिंग जो कोड लिखती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you define a declarative macro?",
        "question_hi": "डिक्लेरेटिव मैक्रो कैसे परिभाषित करते हैं?",
        "options_en": ["macro_rules! my_macro { () => {} }", "defmacro my_macro { () => {} }", "macro my_macro() {}", "decl_macro! my_macro { () => {} }"],
        "options_hi": ["macro_rules! my_macro { () => {} }", "defmacro my_macro { () => {} }", "macro my_macro() {}", "decl_macro! my_macro { () => {} }"],
        "answer_en": "macro_rules! my_macro { () => {} }",
        "answer_hi": "macro_rules! my_macro { () => {} }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is a procedural macro?",
        "question_hi": "प्रोसीजरल मैक्रो क्या है?",
        "options_en": ["A macro that operates on Rust syntax trees", "A function-like macro", "A declarative macro", "A built-in macro"],
        "options_hi": ["एक मैक्रो जो Rust सिंटैक्स ट्री पर काम करता है", "एक फंक्शन-जैसा मैक्रो", "एक डिक्लेरेटिव मैक्रो", "एक बिल्ट-इन मैक्रो"],
        "answer_en": "A macro that operates on Rust syntax trees",
        "answer_hi": "एक मैक्रो जो Rust सिंटैक्स ट्री पर काम करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What are the three types of procedural macros?",
        "question_hi": "प्रोसीजरल मैक्रो के तीन प्रकार क्या हैं?",
        "options_en": ["Derive, attribute-like, function-like", "Declarative, imperative, functional", "Public, private, internal", "Safe, unsafe, const"],
        "options_hi": ["डेराइव, एट्रिब्यूट-लाइक, फंक्शन-लाइक", "डिक्लेरेटिव, इम्पेरेटिव, फंक्शनल", "पब्लिक, प्राइवेट, इंटरनल", "सेफ, अनसेफ, कॉन्स्ट"],
        "answer_en": "Derive, attribute-like, function-like",
        "answer_hi": "डेराइव, एट्रिब्यूट-लाइक, फंक्शन-लाइक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the #[derive] attribute used for?",
        "question_hi": "#[derive] एट्रिब्यूट का उपयोग किस लिए किया जाता है?",
        "options_en": ["Automatically implement traits for structs/enums", "Create new types", "Import modules", "Define functions"],
        "options_hi": ["स्ट्रक्चर/एनम के लिए ट्रेट्स स्वचालित रूप से लागू करना", "नए प्रकार बनाना", "मॉड्यूल आयात करना", "फंक्शन परिभाषित करना"],
        "answer_en": "Automatically implement traits for structs/enums",
        "answer_hi": "स्ट्रक्चर/एनम के लिए ट्रेट्स स्वचालित रूप से लागू करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the 'crate' keyword in module paths?",
        "question_hi": "मॉड्यूल पाथ में 'crate' कीवर्ड क्या है?",
        "options_en": ["Refers to the root of the current crate", "Imports external crates", "Creates new crates", "Exports modules"],
        "options_hi": ["वर्तमान क्रेट की रूट को संदर्भित करता है", "बाहरी क्रेट आयात करता है", "नए क्रेट बनाता है", "मॉड्यूल निर्यात करता है"],
        "answer_en": "Refers to the root of the current crate",
        "answer_hi": "वर्तमान क्रेट की रूट को संदर्भित करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the 'super' keyword in module paths?",
        "question_hi": "मॉड्यूल पाथ में 'super' कीवर्ड क्या है?",
        "options_en": ["Refers to the parent module", "Refers to submodules", "Imports all modules", "Creates super traits"],
        "options_hi": ["पैरेंट मॉड्यूल को संदर्भित करता है", "सबमॉड्यूल को संदर्भित करता है", "सभी मॉड्यूल आयात करता है", "सुपर ट्रेट बनाता है"],
        "answer_en": "Refers to the parent module",
        "answer_hi": "पैरेंट मॉड्यूल को संदर्भित करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is a workspace in Cargo?",
        "question_hi": "Cargo में वर्कस्पेस क्या है?",
        "options_en": ["A collection of related packages", "A single package", "A module", "A function"],
        "options_hi": ["संबंधित पैकेजों का संग्रह", "एक एकल पैकेज", "एक मॉड्यूल", "एक फंक्शन"],
        "answer_en": "A collection of related packages",
        "answer_hi": "संबंधित पैकेजों का संग्रह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of Cargo.toml?",
        "question_hi": "Cargo.toml का उद्देश्य क्या है?",
        "options_en": ["Package manifest file with dependencies and metadata", "Source code file", "Build script", "Test configuration"],
        "options_hi": ["निर्भरताओं और मेटाडेटा के साथ पैकेज मैनिफेस्ट फाइल", "सोर्स कोड फाइल", "बिल्ड स्क्रिप्ट", "टेस्ट कॉन्फ़िगरेशन"],
        "answer_en": "Package manifest file with dependencies and metadata",
        "answer_hi": "निर्भरताओं और मेटाडेटा के साथ पैकेज मैनिफेस्ट फाइल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you run tests in a Rust project?",
        "question_hi": "Rust प्रोजेक्ट में टेस्ट कैसे चलाते हैं?",
        "options_en": ["cargo test", "rust test", "cargo run --test", "rustc --test"],
        "options_hi": ["cargo test", "rust test", "cargo run --test", "rustc --test"],
        "answer_en": "cargo test",
        "answer_hi": "cargo test",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the #[test] attribute used for?",
        "question_hi": "#[test] एट्रिब्यूट का उपयोग किस लिए किया जाता है?",
        "options_en": ["Mark functions as tests", "Mark functions as benchmarks", "Import test modules", "Define test configurations"],
        "options_hi": ["फंक्शन को टेस्ट के रूप में चिह्नित करना", "फंक्शन को बेंचमार्क के रूप में चिह्नित करना", "टेस्ट मॉड्यूल आयात करना", "टेस्ट कॉन्फ़िगरेशन परिभाषित करना"],
        "answer_en": "Mark functions as tests",
        "answer_hi": "फंक्शन को टेस्ट के रूप में चिह्नित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the #[cfg(test)] attribute for?",
        "question_hi": "#[cfg(test)] एट्रिब्यूट किस लिए है?",
        "options_en": ["Conditional compilation for test code", "Running tests", "Defining test functions", "Importing test dependencies"],
        "options_hi": ["टेस्ट कोड के लिए सशर्त संकलन", "टेस्ट चलाना", "टेस्ट फंक्शन परिभाषित करना", "टेस्ट निर्भरताएँ आयात करना"],
        "answer_en": "Conditional compilation for test code",
        "answer_hi": "टेस्ट कोड के लिए सशर्त संकलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of the assert! macro?",
        "question_hi": "assert! मैक्रो का उद्देश्य क्या है?",
        "options_en": ["Check that a condition is true", "Compare two values", "Test performance", "Handle errors"],
        "options_hi": ["जांचना कि एक शर्त सत्य है", "दो मानों की तुलना करना", "प्रदर्शन परीक्षण", "त्रुटियों को संभालना"],
        "answer_en": "Check that a condition is true",
        "answer_hi": "जांचना कि एक शर्त सत्य है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do you document Rust code?",
        "question_hi": "Rust कोड का दस्तावेज़ीकरण कैसे करते हैं?",
        "options_en": ["/// for line comments and //! for module comments", "// for all comments", "/* */ for block comments only", "# for documentation"],
        "options_hi": ["/// लाइन टिप्पणियों के लिए और //! मॉड्यूल टिप्पणियों के लिए", "// सभी टिप्पणियों के लिए", "/* */ केवल ब्लॉक टिप्पणियों के लिए", "# दस्तावेज़ीकरण के लिए"],
        "answer_en": "/// for line comments and //! for module comments",
        "answer_hi": "/// लाइन टिप्पणियों के लिए और //! मॉड्यूल टिप्पणियों के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of cargo doc?",
        "question_hi": "cargo doc का उद्देश्य क्या है?",
        "options_en": ["Generate documentation from Rust code", "Document dependencies", "Create doc tests", "Format documentation"],
        "options_hi": ["Rust कोड से दस्तावेज़ीकरण उत्पन्न करना", "निर्भरताओं का दस्तावेज़ीकरण", "डॉक टेस्ट बनाना", "दस्तावेज़ीकरण फॉर्मेट करना"],
        "answer_en": "Generate documentation from Rust code",
        "answer_hi": "Rust कोड से दस्तावेज़ीकरण उत्पन्न करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the final keyword in Rust programming?",
        "question_hi": "Rust प्रोग्रामिंग में अंतिम कीवर्ड क्या है?",
        "options_en": ["There is no 'final' keyword in Rust", "'final' for class inheritance", "'final' for variable declaration", "'final' for function overloading"],
        "options_hi": ["Rust में कोई 'final' कीवर्ड नहीं है", "क्लास इनहेरिटेंस के लिए 'final'", "वेरिएबल डिक्लेरेशन के लिए 'final'", "फंक्शन ओवरलोडिंग के लिए 'final'"],
        "answer_en": "There is no 'final' keyword in Rust",
        "answer_hi": "Rust में कोई 'final' कीवर्ड नहीं है",
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