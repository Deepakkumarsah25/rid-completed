const questions=[
    {
        "num": 1,
        "question_en": "What does Rust's borrow checker ensure?",
        "question_hi": "Rust का borrow checker क्या सुनिश्चित करता है?",
        "options_en": ["Memory safety by enforcing borrowing rules", "Fast compilation times", "Automatic memory allocation", "Dynamic type checking"],
        "options_hi": ["बोरोइंग नियम लागू करके मेमोरी सुरक्षा", "तेज कंपाइलेशन समय", "स्वचालित मेमोरी आवंटन", "डायनामिक टाइप जांच"],
        "answer_en": "Memory safety by enforcing borrowing rules",
        "answer_hi": "बोरोइंग नियम लागू करके मेमोरी सुरक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How do you create a static variable in Rust?",
        "question_hi": "Rust में static वेरिएबल कैसे बनाते हैं?",
        "options_en": ["static COUNT: i32 = 0;", "let static COUNT = 0;", "const static COUNT = 0;", "static mut COUNT: i32 = 0;"],
        "options_hi": ["static COUNT: i32 = 0;", "let static COUNT = 0;", "const static COUNT = 0;", "static mut COUNT: i32 = 0;"],
        "answer_en": "static COUNT: i32 = 0;",
        "answer_hi": "static COUNT: i32 = 0;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the size of bool type in Rust?",
        "question_hi": "Rust में bool टाइप का आकार क्या है?",
        "options_en": ["1 byte", "4 bytes", "8 bytes", "Size depends on platform"],
        "options_hi": ["1 बाइट", "4 बाइट", "8 बाइट", "आकार प्लेटफॉर्म पर निर्भर करता है"],
        "answer_en": "1 byte",
        "answer_hi": "1 बाइट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you create a string literal in Rust?",
        "question_hi": "Rust में string literal कैसे बनाते हैं?",
        "options_en": ["let s = \"hello\";", "let s = String::from(\"hello\");", "let s = 'hello';", "let s = str::new(\"hello\");"],
        "options_hi": ["let s = \"hello\";", "let s = String::from(\"hello\");", "let s = 'hello';", "let s = str::new(\"hello\");"],
        "answer_en": "let s = \"hello\";",
        "answer_hi": "let s = \"hello\";",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of the 'if let' construct?",
        "question_hi": "'if let' कंस्ट्रक्ट का उद्देश्य क्या है?",
        "options_en": ["Concise pattern matching for single cases", "Loop control", "Error handling", "Function declaration"],
        "options_hi": ["सिंगल केस के लिए संक्षिप्त पैटर्न मिलान", "लूप नियंत्रण", "त्रुटि प्रबंधन", "फ़ंक्शन घोषणा"],
        "answer_en": "Concise pattern matching for single cases",
        "answer_hi": "सिंगल केस के लिए संक्षिप्त पैटर्न मिलान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you define a function that takes no parameters and returns nothing?",
        "question_hi": "ऐसा फ़ंक्शन कैसे परिभाषित करें जो कोई पैरामीटर नहीं लेता और कुछ भी वापस नहीं करता?",
        "options_en": ["fn do_nothing() {}", "function do_nothing() {}", "fn do_nothing() -> () {}", "def do_nothing() {}"],
        "options_hi": ["fn do_nothing() {}", "function do_nothing() {}", "fn do_nothing() -> () {}", "def do_nothing() {}"],
        "answer_en": "fn do_nothing() {}",
        "answer_hi": "fn do_nothing() {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the unit type in Rust?",
        "question_hi": "Rust में unit टाइप क्या है?",
        "options_en": "()",
        "options_hi": "()",
        "answer_en": "()",
        "answer_hi": "()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you format strings using the format! macro?",
        "question_hi": "format! मैक्रो का उपयोग करके स्ट्रिंग्स को कैसे फॉर्मेट करते हैं?",
        "options_en": ["format!(\"Hello {}\", name)", "format!(\"Hello %s\", name)", "format!(\"Hello {name}\")", "format!(\"Hello\", name)"],
        "options_hi": ["format!(\"Hello {}\", name)", "format!(\"Hello %s\", name)", "format!(\"Hello {name}\")", "format!(\"Hello\", name)"],
        "answer_en": "format!(\"Hello {}\", name)",
        "answer_hi": "format!(\"Hello {}\", name)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is a unit struct in Rust?",
        "question_hi": "Rust में unit struct क्या है?",
        "options_en": ["A struct with no fields", "A struct with one field", "A generic struct", "A trait object"],
        "options_hi": ["बिना फ़ील्ड वाला struct", "एक फ़ील्ड वाला struct", "एक सामान्य struct", "एक trait ऑब्जेक्ट"],
        "answer_en": "A struct with no fields",
        "answer_hi": "बिना फ़ील्ड वाला struct",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you create a unit struct?",
        "question_hi": "unit struct कैसे बनाते हैं?",
        "options_en": ["struct UnitStruct;", "struct UnitStruct {}", "struct UnitStruct();", "struct UnitStruct { }"],
        "options_hi": ["struct UnitStruct;", "struct UnitStruct {}", "struct UnitStruct();", "struct UnitStruct { }"],
        "answer_en": "struct UnitStruct;",
        "answer_hi": "struct UnitStruct;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the difference between i32 and u32?",
        "question_hi": "i32 और u32 में क्या अंतर है?",
        "options_en": ["i32 is signed, u32 is unsigned", "i32 is 64-bit, u32 is 32-bit", "No difference", "i32 is for integers, u32 for floats"],
        "options_hi": ["i32 साइन्ड है, u32 अनसाइन्ड है", "i32 64-बिट है, u32 32-बिट है", "कोई अंतर नहीं", "i32 इंटीजर के लिए, u32 फ्लोट के लिए"],
        "answer_en": "i32 is signed, u32 is unsigned",
        "answer_hi": "i32 साइन्ड है, u32 अनसाइन्ड है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you create a vector with capacity?",
        "question_hi": "कैपेसिटी वाला vector कैसे बनाते हैं?",
        "options_en": ["Vec::with_capacity(10)", "Vec::new(10)", "vec![10]", "Vector::capacity(10)"],
        "options_hi": ["Vec::with_capacity(10)", "Vec::new(10)", "vec![10]", "Vector::capacity(10)"],
        "answer_en": "Vec::with_capacity(10)",
        "answer_hi": "Vec::with_capacity(10)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the difference between String and &str?",
        "question_hi": "String और &str में क्या अंतर है?",
        "options_en": ["String is owned, &str is borrowed", "String is mutable, &str is immutable", "No difference", "String is for ASCII, &str for UTF-8"],
        "options_hi": ["String owned है, &str borrowed है", "String mutable है, &str immutable है", "कोई अंतर नहीं", "String ASCII के लिए, &str UTF-8 के लिए"],
        "answer_en": "String is owned, &str is borrowed",
        "answer_hi": "String owned है, &str borrowed है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you get the length of a vector?",
        "question_hi": "vector की लंबाई कैसे प्राप्त करते हैं?",
        "options_en": ["vec.len()", "vec.length()", "vec.size()", "len(vec)"],
        "options_hi": ["vec.len()", "vec.length()", "vec.size()", "len(vec)"],
        "answer_en": "vec.len()",
        "answer_hi": "vec.len()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the inclusive range operator?",
        "question_hi": "इनक्लूसिव रेंज ऑपरेटर क्या है?",
        "options_en": ["..=", "...", "..", "to"],
        "options_hi": ["..=", "...", "..", "to"],
        "answer_en": "..=",
        "answer_hi": "..=",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you create an infinite loop?",
        "question_hi": "अनंत लूप कैसे बनाते हैं?",
        "options_en": ["loop { }", "while true { }", "for ;; { }", "All of the above"],
        "options_hi": ["loop { }", "while true { }", "for ;; { }", "उपरोक्त सभी"],
        "answer_en": "loop { }",
        "answer_hi": "loop { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the 'while let' loop used for?",
        "question_hi": "'while let' लूप का उपयोग किस लिए किया जाता है?",
        "options_en": ["Loop while pattern matches", "Conditional looping", "Infinite looping", "Error handling"],
        "options_hi": ["लूप जब तक पैटर्न मैच हो", "सशर्त लूपिंग", "अनंत लूपिंग", "त्रुटि प्रबंधन"],
        "answer_en": "Loop while pattern matches",
        "answer_hi": "लूप जब तक पैटर्न मैच हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you return early from a function?",
        "question_hi": "फ़ंक्शन से जल्दी कैसे वापस लौटते हैं?",
        "options_en": ["return value;", "break value;", "exit value;", "stop value;"],
        "options_hi": ["return value;", "break value;", "exit value;", "stop value;"],
        "answer_en": "return value;",
        "answer_hi": "return value;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What does the 'break' keyword do with a value?",
        "question_hi": "'break' कीवर्ड वैल्यू के साथ क्या करता है?",
        "options_en": ["Returns value from loop", "Exits program", "Breaks value into parts", "Continues with value"],
        "options_hi": ["लूप से वैल्यू वापस करता है", "प्रोग्राम से बाहर निकलता है", "वैल्यू को भागों में तोड़ता है", "वैल्यू के साथ जारी रखता है"],
        "answer_en": "Returns value from loop",
        "answer_hi": "लूप से वैल्यू वापस करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you iterate over a vector with index?",
        "question_hi": "इंडेक्स के साथ vector पर कैसे पुनरावृति करते हैं?",
        "options_en": ["for (i, item) in vec.iter().enumerate()", "for i in 0..vec.len()", "for item in vec.with_index()", "Both A and B"],
        "options_hi": ["for (i, item) in vec.iter().enumerate()", "for i in 0..vec.len()", "for item in vec.with_index()", "A और B दोनों"],
        "answer_en": "for (i, item) in vec.iter().enumerate()",
        "answer_hi": "for (i, item) in vec.iter().enumerate()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is a tuple struct in Rust?",
        "question_hi": "Rust में tuple struct क्या है?",
        "options_en": ["A struct with named fields but tuple syntax", "A struct with unnamed fields", "A generic tuple", "A trait for tuples"],
        "options_hi": ["नामित फ़ील्ड्स वाला struct लेकिन tuple सिंटैक्स के साथ", "बेनाम फ़ील्ड्स वाला struct", "एक सामान्य tuple", "tuples के लिए एक trait"],
        "answer_en": "A struct with unnamed fields",
        "answer_hi": "बेनाम फ़ील्ड्स वाला struct",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you define a tuple struct?",
        "question_hi": "tuple struct कैसे परिभाषित करते हैं?",
        "options_en": ["struct Color(u8, u8, u8);", "struct Color { u8, u8, u8 }", "tuple struct Color(u8, u8, u8);", "struct Color = (u8, u8, u8);"],
        "options_hi": ["struct Color(u8, u8, u8);", "struct Color { u8, u8, u8 }", "tuple struct Color(u8, u8, u8);", "struct Color = (u8, u8, u8);"],
        "answer_en": "struct Color(u8, u8, u8);",
        "answer_hi": "struct Color(u8, u8, u8);",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "How do you destructure a tuple?",
        "question_hi": "tuple को कैसे डिस्ट्रक्चर करते हैं?",
        "options_en": ["let (x, y) = point;", "let x, y = point;", "let point = (x, y);", "destruct point to (x, y);"],
        "options_hi": ["let (x, y) = point;", "let x, y = point;", "let point = (x, y);", "destruct point to (x, y);"],
        "answer_en": "let (x, y) = point;",
        "answer_hi": "let (x, y) = point;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is pattern destructuring?",
        "question_hi": "पैटर्न डिस्ट्रक्चरिंग क्या है?",
        "options_en": ["Breaking down data structures into parts", "String pattern matching", "Regular expressions", "Data validation"],
        "options_hi": ["डेटा संरचनाओं को भागों में तोड़ना", "स्ट्रिंग पैटर्न मिलान", "रेगुलर एक्सप्रेशन", "डेटा सत्यापन"],
        "answer_en": "Breaking down data structures into parts",
        "answer_hi": "डेटा संरचनाओं को भागों में तोड़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "How do you match multiple patterns in one arm?",
        "question_hi": "एक arm में कई पैटर्न कैसे मैच करते हैं?",
        "options_en": ["| operator", "& operator", "or keyword", "Multiple match arms"],
        "options_hi": ["| ऑपरेटर", "& ऑपरेटर", "or कीवर्ड", "मल्टीपल match arms"],
        "answer_en": "| operator",
        "answer_hi": "| ऑपरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the '..' pattern in struct matching?",
        "question_hi": "struct मिलान में '..' पैटर्न क्या है?",
        "options_en": ["Ignore remaining fields", "Range pattern", "Wildcard", "Reference pattern"],
        "options_hi": ["शेष फ़ील्ड्स को अनदेखा करें", "रेंज पैटर्न", "वाइल्डकार्ड", "संदर्भ पैटर्न"],
        "answer_en": "Ignore remaining fields",
        "answer_hi": "शेष फ़ील्ड्स को अनदेखा करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "How do you define an enum with data?",
        "question_hi": "डेटा के साथ enum कैसे परिभाषित करते हैं?",
        "options_en": ["enum Message { Quit, Move { x: i32, y: i32 } }", "enum Message { Quit, Move(x: i32, y: i32) }", "enum Message { Quit, Move(i32, i32) }", "All of the above"],
        "options_hi": ["enum Message { Quit, Move { x: i32, y: i32 } }", "enum Message { Quit, Move(x: i32, y: i32) }", "enum Message { Quit, Move(i32, i32) }", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the Option enum used for?",
        "question_hi": "Option enum का उपयोग किस लिए किया जाता है?",
        "options_en": ["Represent optional values", "Error handling", "Boolean operations", "Pattern matching"],
        "options_hi": ["वैकल्पिक मानों का प्रतिनिधित्व", "त्रुटि प्रबंधन", "बूलियन ऑपरेशन", "पैटर्न मिलान"],
        "answer_en": "Represent optional values",
        "answer_hi": "वैकल्पिक मानों का प्रतिनिधित्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How do you handle None case in Option?",
        "question_hi": "Option में None केस को कैसे हैंडल करते हैं?",
        "options_en": ["match option { Some(x) => x, None => default }", "option.unwrap_or(default)", "if let Some(x) = option { x } else { default }", "All of the above"],
        "options_hi": ["match option { Some(x) => x, None => default }", "option.unwrap_or(default)", "if let Some(x) = option { x } else { default }", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is a nested module?",
        "question_hi": "नेस्टेड मॉड्यूल क्या है?",
        "options_en": ["Module inside another module", "Generic module", "Trait module", "Static module"],
        "options_hi": ["दूसरे मॉड्यूल के अंदर मॉड्यूल", "सामान्य मॉड्यूल", "Trait मॉड्यूल", "स्थिर मॉड्यूल"],
        "answer_en": "Module inside another module",
        "answer_hi": "दूसरे मॉड्यूल के अंदर मॉड्यूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "How do you create a nested module?",
        "question_hi": "नेस्टेड मॉड्यूल कैसे बनाते हैं?",
        "options_en": ["mod outer { mod inner { } }", "module outer { module inner { } }", "nested mod outer inner { }", "mod outer::inner { }"],
        "options_hi": ["mod outer { mod inner { } }", "module outer { module inner { } }", "nested mod outer inner { }", "mod outer::inner { }"],
        "answer_en": "mod outer { mod inner { } }",
        "answer_hi": "mod outer { mod inner { } }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you re-export items from a module?",
        "question_hi": "मॉड्यूल से आइटम्स को कैसे री-एक्सपोर्ट करते हैं?",
        "options_en": ["pub use self::inner::Item;", "export self::inner::Item;", "re-export inner::Item;", "pub export inner::Item;"],
        "options_hi": ["pub use self::inner::Item;", "export self::inner::Item;", "re-export inner::Item;", "pub export inner::Item;"],
        "answer_en": "pub use self::inner::Item;",
        "answer_hi": "pub use self::inner::Item;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the 'crate' keyword used for?",
        "question_hi": "'crate' कीवर्ड का उपयोग किस लिए किया जाता है?",
        "options_en": ["Refer to the root of the current crate", "Create new crates", "Import external crates", "Define crate metadata"],
        "options_hi": ["वर्तमान crate के रूट को संदर्भित करें", "नए crates बनाएं", "बाहरी crates आयात करें", "crate मेटाडेटा परिभाषित करें"],
        "answer_en": "Refer to the root of the current crate",
        "answer_hi": "वर्तमान crate के रूट को संदर्भित करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you remove an element from a vector?",
        "question_hi": "vector से एलिमेंट कैसे हटाते हैं?",
        "options_en": ["vec.remove(index)", "vec.delete(index)", "vec.pop()", "Both A and C"],
        "options_hi": ["vec.remove(index)", "vec.delete(index)", "vec.pop()", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the difference between push and pop?",
        "question_hi": "push और pop में क्या अंतर है?",
        "options_en": ["push adds to end, pop removes from end", "push adds to start, pop removes from start", "No difference", "push for adding, pop for removing anywhere"],
        "options_hi": ["push अंत में जोड़ता है, pop अंत से हटाता है", "push शुरुआत में जोड़ता है, pop शुरुआत से हटाता है", "कोई अंतर नहीं", "push जोड़ने के लिए, pop कहीं से भी हटाने के लिए"],
        "answer_en": "push adds to end, pop removes from end",
        "answer_hi": "push अंत में जोड़ता है, pop अंत से हटाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do you get a character from a string?",
        "question_hi": "स्ट्रिंग से कैरेक्टर कैसे प्राप्त करते हैं?",
        "options_en": ["s.chars().nth(index)", "s[index]", "s.char_at(index)", "get_char(s, index)"],
        "options_hi": ["s.chars().nth(index)", "s[index]", "s.char_at(index)", "get_char(s, index)"],
        "answer_en": "s.chars().nth(index)",
        "answer_hi": "s.chars().nth(index)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the difference between String and str?",
        "question_hi": "String और str में क्या अंतर है?",
        "options_en": ["String is owned, str is borrowed", "String is mutable, str is immutable", "String is growable, str is fixed-size", "All of the above"],
        "options_hi": ["String owned है, str borrowed है", "String mutable है, str immutable है", "String growable है, str fixed-size है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How do you convert &str to String?",
        "question_hi": "&str को String में कैसे कन्वर्ट करते हैं?",
        "options_en": ["s.to_string()", "String::from(s)", "s.into()", "All of the above"],
        "options_hi": ["s.to_string()", "String::from(s)", "s.into()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is string slicing?",
        "question_hi": "स्ट्रिंग स्लाइसिंग क्या है?",
        "options_en": ["Getting a substring as &str", "Splitting string into parts", "Converting string to slice", "All of the above"],
        "options_hi": ["&str के रूप में सबस्ट्रिंग प्राप्त करना", "स्ट्रिंग को भागों में विभाजित करना", "स्ट्रिंग को स्लाइस में बदलना", "उपरोक्त सभी"],
        "answer_en": "Getting a substring as &str",
        "answer_hi": "&str के रूप में सबस्ट्रिंग प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How do you create a HashSet?",
        "question_hi": "HashSet कैसे बनाते हैं?",
        "options_en": ["use std::collections::HashSet; let set = HashSet::new();", "let set = new HashSet();", "let set = HashSet::create();", "use HashSet; let set = HashSet()"],
        "options_hi": ["use std::collections::HashSet; let set = HashSet::new();", "let set = new HashSet();", "let set = HashSet::create();", "use HashSet; let set = HashSet()"],
        "answer_en": "use std::collections::HashSet; let set = HashSet::new();",
        "answer_hi": "use std::collections::HashSet; let set = HashSet::new();",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the difference between HashMap and HashSet?",
        "question_hi": "HashMap और HashSet में क्या अंतर है?",
        "options_en": ["HashMap stores key-value pairs, HashSet stores unique values", "HashMap is ordered, HashSet is not", "No difference", "HashMap for numbers, HashSet for strings"],
        "options_hi": ["HashMap key-value जोड़े संग्रहीत करता है, HashSet अद्वितीय मान संग्रहीत करता है", "HashMap क्रमबद्ध है, HashSet नहीं है", "कोई अंतर नहीं", "HashMap नंबरों के लिए, HashSet स्ट्रिंग्स के लिए"],
        "answer_en": "HashMap stores key-value pairs, HashSet stores unique values",
        "answer_hi": "HashMap key-value जोड़े संग्रहीत करता है, HashSet अद्वितीय मान संग्रहीत करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How do you check if a key exists in HashMap?",
        "question_hi": "HashMap में key के अस्तित्व की जांच कैसे करते हैं?",
        "options_en": ["map.contains_key(&key)", "map.has_key(&key)", "map.exists(&key)", "map.get(&key).is_some()"],
        "options_hi": ["map.contains_key(&key)", "map.has_key(&key)", "map.exists(&key)", "map.get(&key).is_some()"],
        "answer_en": "map.contains_key(&key)",
        "answer_hi": "map.contains_key(&key)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of the '?' operator in main?",
        "question_hi": "main में '?' ऑपरेटर का उद्देश्य क्या है?",
        "options_en": ["It can be used if main returns Result", "It always works in main", "It's not allowed in main", "It converts errors to panics"],
        "options_hi": ["इसका उपयोग किया जा सकता है यदि main Result वापस करता है", "यह main में हमेशा काम करता है", "यह main में अनुमति नहीं है", "यह त्रुटियों को पैनिक में बदलता है"],
        "answer_en": "It can be used if main returns Result",
        "answer_hi": "इसका उपयोग किया जा सकता है यदि main Result वापस करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the difference between unwrap and expect?",
        "question_hi": "unwrap और expect में क्या अंतर है?",
        "options_en": ["expect allows custom panic message", "unwrap is faster", "No difference", "expect for Option, unwrap for Result"],
        "options_hi": ["expect कस्टम पैनिक संदेश की अनुमति देता है", "unwrap तेज है", "कोई अंतर नहीं", "expect Option के लिए, unwrap Result के लिए"],
        "answer_en": "expect allows custom panic message",
        "answer_hi": "expect कस्टम पैनिक संदेश की अनुमति देता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How do you handle multiple error types?",
        "question_hi": "कई त्रुटि प्रकारों को कैसे संभालते हैं?",
        "options_en": ["Use Box<dyn Error>", "Define custom error type", "Use map_err", "All of the above"],
        "options_hi": ["Box<dyn Error> का उपयोग करें", "कस्टम त्रुटि प्रकार परिभाषित करें", "map_err का उपयोग करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What does unwrap_or_default do?",
        "question_hi": "unwrap_or_default क्या करता है?",
        "options_en": ["Unwraps or returns default value", "Unwraps or panics with default message", "Converts to default type", "Handles default errors"],
        "options_hi": ["अनरैप करता है या डिफॉल्ट मान लौटाता है", "डिफॉल्ट संदेश के साथ अनरैप करता है या पैनिक करता है", "डिफॉल्ट प्रकार में परिवर्तित करता है", "डिफॉल्ट त्रुटियों को संभालता है"],
        "answer_en": "Unwraps or returns default value",
        "answer_hi": "अनरैप करता है या डिफॉल्ट मान लौटाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of the map method on Option?",
        "question_hi": "Option पर map मेथड का उद्देश्य क्या है?",
        "options_en": ["Transform Some value", "Handle None case", "Convert to Result", "Check if value exists"],
        "options_hi": ["Some मान को रूपांतरित करें", "None केस को संभालें", "Result में बदलें", "जांचें कि मान मौजूद है या नहीं"],
        "answer_en": "Transform Some value",
        "answer_hi": "Some मान को रूपांतरित करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you define multiple generic types?",
        "question_hi": "कई जेनेरिक प्रकार कैसे परिभाषित करते हैं?",
        "options_en": ["fn func<T, U>(t: T, u: U) {}", "fn func<T and U>(t: T, u: U) {}", "fn func<T U>(t: T, u: U) {}", "generic fn func<T, U>(t: T, u: U) {}"],
        "options_hi": ["fn func<T, U>(t: T, u: U) {}", "fn func<T and U>(t: T, u: U) {}", "fn func<T U>(t: T, u: U) {}", "generic fn func<T, U>(t: T, u: U) {}"],
        "answer_en": "fn func<T, U>(t: T, u: U) {}",
        "answer_hi": "fn func<T, U>(t: T, u: U) {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is trait bound syntax?",
        "question_hi": "trait bound सिंटैक्स क्या है?",
        "options_en": ["Specifying that generic type must implement trait", "Binding traits to functions", "Trait inheritance", "Trait composition"],
        "options_hi": ["निर्दिष्ट करना कि जेनेरिक प्रकार को trait लागू करना होगा", "फ़ंक्शन से traits को बांधना", "Trait इनहेरिटेंस", "Trait कंपोजिशन"],
        "answer_en": "Specifying that generic type must implement trait",
        "answer_hi": "निर्दिष्ट करना कि जेनेरिक प्रकार को trait लागू करना होगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you specify multiple trait bounds?",
        "question_hi": "कई trait bounds कैसे निर्दिष्ट करते हैं?",
        "options_en": ["T: Trait1 + Trait2", "T: Trait1 and Trait2", "T: Trait1, Trait2", "T where Trait1 + Trait2"],
        "options_hi": ["T: Trait1 + Trait2", "T: Trait1 and Trait2", "T: Trait1, Trait2", "T where Trait1 + Trait2"],
        "answer_en": "T: Trait1 + Trait2",
        "answer_hi": "T: Trait1 + Trait2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the difference between trait and implementation?",
        "question_hi": "trait और implementation में क्या अंतर है?",
        "options_en": ["Trait defines interface, impl provides implementation", "No difference", "Trait is for structs, impl for functions", "Trait is compile-time, impl is runtime"],
        "options_hi": ["Trait इंटरफेस परिभाषित करता है, impl कार्यान्वयन प्रदान करता है", "कोई अंतर नहीं", "Trait structs के लिए है, impl फ़ंक्शन के लिए", "Trait कंपाइल-टाइम है, impl रनटाइम है"],
        "answer_en": "Trait defines interface, impl provides implementation",
        "answer_hi": "Trait इंटरफेस परिभाषित करता है, impl कार्यान्वयन प्रदान करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the 'Self' type in traits?",
        "question_hi": "traits में 'Self' टाइप क्या है?",
        "options_en": ["The type implementing the trait", "Current module", "Static reference", "Trait object"],
        "options_hi": ["trait को लागू करने वाला प्रकार", "वर्तमान मॉड्यूल", "स्थिर संदर्भ", "Trait ऑब्जेक्ट"],
        "answer_en": "The type implementing the trait",
        "answer_hi": "trait को लागू करने वाला प्रकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the difference between &self and &mut self?",
        "question_hi": "&self और &mut self में क्या अंतर है?",
        "options_en": ["&self is immutable borrow, &mut self is mutable borrow", "No difference", "&self for reading, &mut self for writing", "Both A and C"],
        "options_hi": ["&self immutable borrow है, &mut self mutable borrow है", "कोई अंतर नहीं", "&self पढ़ने के लिए, &mut self लिखने के लिए", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you wait for a thread to finish?",
        "question_hi": "थ्रेड के समाप्त होने की प्रतीक्षा कैसे करते हैं?",
        "options_en": ["handle.join()", "thread.wait()", "handle.await()", "thread.join_handle()"],
        "options_hi": ["handle.join()", "thread.wait()", "handle.await()", "thread.join_handle()"],
        "answer_en": "handle.join()",
        "answer_hi": "handle.join()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What does the 'move' keyword capture?",
        "question_hi": "'move' कीवर्ड क्या कैप्चर करता है?",
        "options_en": ["Ownership of variables from environment", "References to variables", "Only mutable variables", "Only immutable variables"],
        "options_hi": ["पर्यावरण से वेरिएबल्स की स्वामित्व", "वेरिएबल्स के संदर्भ", "केवल परिवर्तनशील वेरिएबल्स", "केवल अपरिवर्तनीय वेरिएबल्स"],
        "answer_en": "Ownership of variables from environment",
        "answer_hi": "पर्यावरण से वेरिएबल्स की स्वामित्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is a closure that captures nothing?",
        "question_hi": "ऐसा क्लोजर क्या है जो कुछ भी कैप्चर नहीं करता?",
        "options_en": ["It implements FnOnce, FnMut, and Fn", "It only implements FnOnce", "It cannot be called", "It's not a valid closure"],
        "options_hi": ["यह FnOnce, FnMut, और Fn को लागू करता है", "यह केवल FnOnce को लागू करता है", "इसे कॉल नहीं किया जा सकता", "यह मान्य क्लोजर नहीं है"],
        "answer_en": "It implements FnOnce, FnMut, and Fn",
        "answer_hi": "यह FnOnce, FnMut, और Fn को लागू करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How do you call a closure?",
        "question_hi": "क्लोजर को कैसे कॉल करते हैं?",
        "options_en": ["closure()", "closure.call()", "invoke closure", "closure.invoke()"],
        "options_hi": ["closure()", "closure.call()", "invoke closure", "closure.invoke()"],
        "answer_en": "closure()",
        "answer_hi": "closure()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the difference between Fn and fn?",
        "question_hi": "Fn और fn में क्या अंतर है?",
        "options_en": ["Fn is a trait, fn is a function pointer type", "No difference", "Fn for closures, fn for functions", "Both A and C"],
        "options_hi": ["Fn एक trait है, fn एक फ़ंक्शन पॉइंटर प्रकार है", "कोई अंतर नहीं", "Fn क्लोजर के लिए, fn फ़ंक्शन के लिए", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What does FnMut allow?",
        "question_hi": "FnMut क्या अनुमति देता है?",
        "options_en": ["Mutable access to captured variables", "Immutable access only", "Ownership of variables", "No captures"],
        "options_hi": ["कैप्चर वेरिएबल्स तक परिवर्तनशील पहुंच", "केवल अपरिवर्तनीय पहुंच", "वेरिएबल्स की स्वामित्व", "कोई कैप्चर नहीं"],
        "answer_en": "Mutable access to captured variables",
        "answer_hi": "कैप्चर वेरिएबल्स तक परिवर्तनशील पहुंच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you store closures in structs?",
        "question_hi": "structs में क्लोजर कैसे स्टोर करते हैं?",
        "options_en": ["Using generic parameters with trait bounds", "Using Box<dyn Fn>", "Using function pointers", "All of the above"],
        "options_hi": ["trait bounds के साथ जेनेरिक पैरामीटर का उपयोग करके", "Box<dyn Fn> का उपयोग करके", "फ़ंक्शन पॉइंटर्स का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is a boxed value?",
        "question_hi": "boxed वैल्यू क्या है?",
        "options_en": ["A value allocated on the heap", "A value on the stack", "A reference counted value", "A mutable value"],
        "options_hi": ["हीप पर आवंटित मान", "स्टैक पर मान", "संदर्भ गिना मान", "परिवर्तनशील मान"],
        "answer_en": "A value allocated on the heap",
        "answer_hi": "हीप पर आवंटित मान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How do you create a Box?",
        "question_hi": "Box कैसे बनाते हैं?",
        "options_en": ["Box::new(value)", "new Box(value)", "Box(value)", "value.box()"],
        "options_hi": ["Box::new(value)", "new Box(value)", "Box(value)", "value.box()"],
        "answer_en": "Box::new(value)",
        "answer_hi": "Box::new(value)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is reference counting?",
        "question_hi": "संदर्भ गिनती क्या है?",
        "options_en": ["Tracking number of references to data", "Counting variables", "Memory allocation technique", "Garbage collection"],
        "options_hi": ["डेटा के संदर्भों की संख्या ट्रैक करना", "वेरिएबल्स की गिनती", "मेमोरी आवंटन तकनीक", "कचरा संग्रह"],
        "answer_en": "Tracking number of references to data",
        "answer_hi": "डेटा के संदर्भों की संख्या ट्रैक करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "When should you use Arc instead of Rc?",
        "question_hi": "Rc के बजाय Arc का उपयोग कब करना चाहिए?",
        "options_en": ["When sharing between threads", "For single-threaded use", "For better performance", "For smaller memory footprint"],
        "options_hi": ["थ्रेड्स के बीच साझा करते समय", "सिंगल-थ्रेडेड उपयोग के लिए", "बेहतर प्रदर्शन के लिए", "छोटे मेमोरी फुटप्रिंट के लिए"],
        "answer_en": "When sharing between threads",
        "answer_hi": "थ्रेड्स के बीच साझा करते समय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is interior mutability?",
        "question_hi": "आंतरिक परिवर्तनशीलता क्या है?",
        "options_en": ["Mutating data through shared references", "Mutating immutable data", "Compile-time mutation", "Runtime type mutation"],
        "options_hi": ["साझा संदर्भों के माध्यम से डेटा को म्यूटेट करना", "अपरिवर्तनीय डेटा को म्यूटेट करना", "कंपाइल-टाइम म्यूटेशन", "रनटाइम टाइप म्यूटेशन"],
        "answer_en": "Mutating data through shared references",
        "answer_hi": "साझा संदर्भों के माध्यम से डेटा को म्यूटेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How do you use RefCell?",
        "question_hi": "RefCell का उपयोग कैसे करते हैं?",
        "options_en": ["cell.borrow() and cell.borrow_mut()", "cell.get() and cell.set()", "cell.read() and cell.write()", "cell.access() and cell.mutate()"],
        "options_hi": ["cell.borrow() और cell.borrow_mut()", "cell.get() और cell.set()", "cell.read() और cell.write()", "cell.access() और cell.mutate()"],
        "answer_en": "cell.borrow() and cell.borrow_mut()",
        "answer_hi": "cell.borrow() और cell.borrow_mut()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What happens if you panic while borrowing from RefCell?",
        "question_hi": "यदि आप RefCell से उधार लेते समय पैनिक करते हैं तो क्या होता है?",
        "options_en": ["Borrow flags are reset", "Memory leak occurs", "Program continues", "Undefined behavior"],
        "options_hi": ["उधार झंडे रीसेट हो जाते हैं", "मेमोरी लीक होती है", "प्रोग्राम जारी रहता है", "अपरिभाषित व्यवहार"],
        "answer_en": "Borrow flags are reset",
        "answer_hi": "उधार झंडे रीसेट हो जाते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the Drop trait called?",
        "question_hi": "Drop trait को कब कॉल किया जाता है?",
        "options_en": ["When value goes out of scope", "When explicitly called", "During garbage collection", "At program end"],
        "options_hi": ["जब मान स्कोप से बाहर जाता है", "जब स्पष्ट रूप से कॉल किया जाता है", "कचरा संग्रह के दौरान", "प्रोग्राम के अंत में"],
        "answer_en": "When value goes out of scope",
        "answer_hi": "जब मान स्कोप से बाहर जाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "How do you implement the Clone trait?",
        "question_hi": "Clone trait को कैसे लागू करते हैं?",
        "options_en": ["#[derive(Clone)] or manual impl", "automatically for all types", "using clone() function", "with copy trait"],
        "options_hi": ["#[derive(Clone)] या मैनुअल impl", "सभी प्रकारों के लिए स्वचालित रूप से", "clone() फ़ंक्शन का उपयोग करके", "copy trait के साथ"],
        "answer_en": "#[derive(Clone)] or manual impl",
        "answer_hi": "#[derive(Clone)] या मैनुअल impl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What types can implement Copy?",
        "question_hi": "कौन से प्रकार Copy लागू कर सकते हैं?",
        "options_en": ["Types that can be bitwise copied", "All types", "Only primitive types", "Types without heap data"],
        "options_hi": ["ऐसे प्रकार जिन्हें बिटवाइज कॉपी किया जा सकता है", "सभी प्रकार", "केवल आदिम प्रकार", "बिना हीप डेटा वाले प्रकार"],
        "answer_en": "Types that can be bitwise copied",
        "answer_hi": "ऐसे प्रकार जिन्हें बिटवाइज कॉपी किया जा सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Can a type implement both Clone and Copy?",
        "question_hi": "क्या कोई प्रकार Clone और Copy दोनों लागू कर सकता है?",
        "options_en": ["Yes", "No", "Only if it's primitive", "Only for structs"],
        "options_hi": ["हां", "नहीं", "केवल यदि यह आदिम है", "केवल structs के लिए"],
        "answer_en": "Yes",
        "answer_hi": "हां",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How do you use the Default trait?",
        "question_hi": "Default trait का उपयोग कैसे करते हैं?",
        "options_en": ["T::default()", "Default::new()", "new T()", "T::new()"],
        "options_hi": ["T::default()", "Default::new()", "new T()", "T::new()"],
        "answer_en": "T::default()",
        "answer_hi": "T::default()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the From trait used for?",
        "question_hi": "From trait का उपयोग किस लिए किया जाता है?",
        "options_en": ["Type conversions that cannot fail", "Fallible conversions", "String conversions", "Numeric conversions"],
        "options_hi": ["ऐसे प्रकार रूपांतरण जो विफल नहीं हो सकते", "त्रुटिपूर्ण रूपांतरण", "स्ट्रिंग रूपांतरण", "संख्यात्मक रूपांतरण"],
        "answer_en": "Type conversions that cannot fail",
        "answer_hi": "ऐसे प्रकार रूपांतरण जो विफल नहीं हो सकते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How is Into related to From?",
        "question_hi": "Into, From से कैसे संबंधित है?",
        "options_en": ["Implementing From automatically provides Into", "They are unrelated", "Into is the reverse of From", "Both A and C"],
        "options_hi": ["From को लागू करना स्वचालित रूप से Into प्रदान करता है", "वे असंबंधित हैं", "Into, From का उल्टा है", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What does Deref coercion allow?",
        "question_hi": "Deref coercion क्या अनुमति देता है?",
        "options_en": ["Automatic reference conversion", "Manual type casting", "Runtime type checking", "Memory reallocation"],
        "options_hi": ["स्वचालित संदर्भ रूपांतरण", "मैनुअल टाइप कास्टिंग", "रनटाइम टाइप चेकिंग", "मेमोरी पुन: आवंटन"],
        "answer_en": "Automatic reference conversion",
        "answer_hi": "स्वचालित संदर्भ रूपांतरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How do you implement Deref?",
        "question_hi": "Deref को कैसे लागू करते हैं?",
        "options_en": ["impl Deref for MyType { type Target = T; fn deref(&self) -> &T }", "impl Deref for MyType { fn deref(self) -> T }", "derive(Deref)", "auto impl Deref"],
        "options_hi": ["impl Deref for MyType { type Target = T; fn deref(&self) -> &T }", "impl Deref for MyType { fn deref(self) -> T }", "derive(Deref)", "auto impl Deref"],
        "answer_en": "impl Deref for MyType { type Target = T; fn deref(&self) -> &T }",
        "answer_hi": "impl Deref for MyType { type Target = T; fn deref(&self) -> &T }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is AsRef used for?",
        "question_hi": "AsRef का उपयोग किस लिए किया जाता है?",
        "options_en": ["Cheap reference-to-reference conversion", "Expensive conversions", "Ownership transfers", "Memory allocation"],
        "options_hi": ["सस्ता संदर्भ-से-संदर्भ रूपांतरण", "महंगा रूपांतरण", "स्वामित्व स्थानांतरण", "मेमोरी आवंटन"],
        "answer_en": "Cheap reference-to-reference conversion",
        "answer_hi": "सस्ता संदर्भ-से-संदर्भ रूपांतरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How is Borrow different from AsRef?",
        "question_hi": "Borrow, AsRef से कैसे भिन्न है?",
        "options_en": ["Borrow has additional semantic meaning", "No difference", "Borrow is for owned types", "AsRef is for references"],
        "options_hi": ["Borrow का अतिरिक्त अर्थ है", "कोई अंतर नहीं", "Borrow owned प्रकारों के लिए है", "AsRef संदर्भों के लिए है"],
        "answer_en": "Borrow has additional semantic meaning",
        "answer_hi": "Borrow का अतिरिक्त अर्थ है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is Cow (Clone on Write) useful for?",
        "question_hi": "Cow (Clone on Write) किसके लिए उपयोगी है?",
        "options_en": ["Efficiently handling borrowed and owned data", "Fast cloning", "Memory optimization", "All of the above"],
        "options_hi": ["उधार और स्वामित्व वाले डेटा को कुशलतापूर्वक संभालना", "तेज क्लोनिंग", "मेमोरी अनुकूलन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What does the Send trait indicate?",
        "question_hi": "Send trait क्या इंगित करता है?",
        "options_en": ["Type can be safely transferred between threads", "Type can be sent over network", "Type is serializable", "Type is copyable"],
        "options_hi": ["प्रकार को थ्रेड्स के बीच सुरक्षित रूप से स्थानांतरित किया जा सकता है", "प्रकार को नेटवर्क पर भेजा जा सकता है", "प्रकार क्रमबद्ध है", "प्रकार कॉपी करने योग्य है"],
        "answer_en": "Type can be safely transferred between threads",
        "answer_hi": "प्रकार को थ्रेड्स के बीच सुरक्षित रूप से स्थानांतरित किया जा सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What does the Sync trait indicate?",
        "question_hi": "Sync trait क्या इंगित करता है?",
        "options_en": ["Type can be safely shared between threads", "Type can be synchronized", "Type is thread-safe", "All of the above"],
        "options_hi": ["प्रकार को थ्रेड्स के बीच सुरक्षित रूप से साझा किया जा सकता है", "प्रकार को सिंक्रनाइज़ किया जा सकता है", "प्रकार थ्रेड-सुरक्षित है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is unsafe Rust used for?",
        "question_hi": "unsafe Rust का उपयोग किस लिए किया जाता है?",
        "options_en": ["Bypassing compiler safety checks for low-level operations", "Making code faster", "Handling errors", "Memory management"],
        "options_hi": ["निम्न-स्तरीय ऑपरेशन के लिए कंपाइलर सुरक्षा जांच को बायपास करना", "कोड को तेज बनाना", "त्रुटियों को संभालना", "मेमोरी प्रबंधन"],
        "answer_en": "Bypassing compiler safety checks for low-level operations",
        "answer_hi": "निम्न-स्तरीय ऑपरेशन के लिए कंपाइलर सुरक्षा जांच को बायपास करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What operations require unsafe blocks?",
        "question_hi": "किन ऑपरेशनों के लिए unsafe ब्लॉक्स की आवश्यकता होती है?",
        "options_en": ["Dereferencing raw pointers, calling unsafe functions, accessing mutable statics", "All memory operations", "Only FFI calls", "Only system calls"],
        "options_hi": ["कच्चे पॉइंटर्स को डीरेफरेंस करना, असुरक्षित फ़ंक्शन कॉल करना, परिवर्तनशील स्टैटिक्स तक पहुंचना", "सभी मेमोरी ऑपरेशन", "केवल FFI कॉल", "केवल सिस्टम कॉल"],
        "answer_en": "Dereferencing raw pointers, calling unsafe functions, accessing mutable statics",
        "answer_hi": "कच्चे पॉइंटर्स को डीरेफरेंस करना, असुरक्षित फ़ंक्शन कॉल करना, परिवर्तनशील स्टैटिक्स तक पहुंचना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How do you create a mutable raw pointer?",
        "question_hi": "म्यूटेबल रॉ पॉइंटर कैसे बनाते हैं?",
        "options_en": ["let ptr: *mut i32 = &mut x;", "let ptr = raw_ptr_mut(&mut x);", "let ptr: &raw mut i32 = &mut x;", "let ptr = Pointer::mut(&mut x);"],
        "options_hi": ["let ptr: *mut i32 = &mut x;", "let ptr = raw_ptr_mut(&mut x);", "let ptr: &raw mut i32 = &mut x;", "let ptr = Pointer::mut(&mut x);"],
        "answer_en": "let ptr: *mut i32 = &mut x;",
        "answer_hi": "let ptr: *mut i32 = &mut x;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is a function pointer type?",
        "question_hi": "फ़ंक्शन पॉइंटर प्रकार क्या है?",
        "options_en": ["fn(i32) -> i32", "Fn(i32) -> i32", "function(i32) -> i32", "Function<i32, i32>"],
        "options_hi": ["fn(i32) -> i32", "Fn(i32) -> i32", "function(i32) -> i32", "Function<i32, i32>"],
        "answer_en": "fn(i32) -> i32",
        "answer_hi": "fn(i32) -> i32",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you call a function through a function pointer?",
        "question_hi": "फ़ंक्शन पॉइंटर के माध्यम से फ़ंक्शन को कैसे कॉल करते हैं?",
        "options_en": ["ptr(arg)", "ptr.call(arg)", "invoke(ptr, arg)", "Function::call(ptr, arg)"],
        "options_hi": ["ptr(arg)", "ptr.call(arg)", "invoke(ptr, arg)", "Function::call(ptr, arg)"],
        "answer_en": "ptr(arg)",
        "answer_hi": "ptr(arg)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is dynamic dispatch?",
        "question_hi": "डायनामिक डिस्पैच क्या है?",
        "options_en": ["Runtime method resolution", "Compile-time optimization", "Static linking", "Function inlining"],
        "options_hi": ["रनटाइम मेथड रेजोल्यूशन", "कंपाइल-टाइम ऑप्टिमाइजेशन", "स्टैटिक लिंकिंग", "फ़ंक्शन इनलाइनिंग"],
        "answer_en": "Runtime method resolution",
        "answer_hi": "रनटाइम मेथड रेजोल्यूशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you create a boxed trait object?",
        "question_hi": "boxed trait ऑब्जेक्ट कैसे बनाते हैं?",
        "options_en": ["Box::new(value) as Box<dyn Trait>", "Box::<dyn Trait>::new(value)", "value.boxed::<dyn Trait>()", "Both A and B"],
        "options_hi": ["Box::new(value) as Box<dyn Trait>", "Box::<dyn Trait>::new(value)", "value.boxed::<dyn Trait>()", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What does 'dyn' indicate?",
        "question_hi": "'dyn' क्या इंगित करता है?",
        "options_en": ["Dynamic dispatch through trait object", "Dynamic typing", "Dynamic memory allocation", "Dynamic linking"],
        "options_hi": ["trait ऑब्जेक्ट के माध्यम से डायनामिक डिस्पैच", "डायनामिक टाइपिंग", "डायनामिक मेमोरी आवंटन", "डायनामिक लिंकिंग"],
        "answer_en": "Dynamic dispatch through trait object",
        "answer_hi": "trait ऑब्जेक्ट के माध्यम से डायनामिक डिस्पैच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is an associated type?",
        "question_hi": "एसोसिएटेड टाइप क्या है?",
        "options_en": ["Type placeholder in trait definition", "Generic type parameter", "Type alias in trait", "Trait method return type"],
        "options_hi": ["trait परिभाषा में टाइप प्लेसहोल्डर", "जेनेरिक टाइप पैरामीटर", "trait में टाइप अलायस", "Trait मेथड रिटर्न टाइप"],
        "answer_en": "Type placeholder in trait definition",
        "answer_hi": "trait परिभाषा में टाइप प्लेसहोल्डर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "How do you use associated types in implementations?",
        "question_hi": "इम्प्लीमेंटेशन में एसोसिएटेड टाइप्स का उपयोग कैसे करते हैं?",
        "options_en": ["Specify concrete type for associated type", "Use generic parameters", "Automatically inferred", "Cannot be used in impl"],
        "options_hi": ["एसोसिएटेड टाइप के लिए कंक्रीट टाइप निर्दिष्ट करें", "जेनेरिक पैरामीटर का उपयोग करें", "स्वचालित रूप से अनुमानित", "impl में उपयोग नहीं किया जा सकता"],
        "answer_en": "Specify concrete type for associated type",
        "answer_hi": "एसोसिएटेड टाइप के लिए कंक्रीट टाइप निर्दिष्ट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What are where clauses used for?",
        "question_hi": "where क्लॉज का उपयोग किस लिए किया जाता है?",
        "options_en": ["Cleaner trait bound syntax", "Function constraints", "Type constraints", "All of the above"],
        "options_hi": ["साफ़र trait bound सिंटैक्स", "फ़ंक्शन कंस्ट्रेंट", "टाइप कंस्ट्रेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "How do you write a where clause?",
        "question_hi": "where क्लॉज कैसे लिखते हैं?",
        "options_en": ["fn func<T>(t: T) where T: Trait {}", "fn func<T: Trait>(t: T) {}", "fn func<T> where T: Trait (t: T) {}", "Both A and B"],
        "options_hi": ["fn func<T>(t: T) where T: Trait {}", "fn func<T: Trait>(t: T) {}", "fn func<T> where T: Trait (t: T) {}", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is impl Trait in argument position?",
        "question_hi": "आर्ग्युमेंट पोजिशन में impl Trait क्या है?",
        "options_en": ["Generic parameter with trait bound", "Trait object", "Dynamic dispatch", "Function pointer"],
        "options_hi": ["trait bound के साथ जेनेरिक पैरामीटर", "Trait ऑब्जेक्ट", "डायनामिक डिस्पैच", "फ़ंक्शन पॉइंटर"],
        "answer_en": "Generic parameter with trait bound",
        "answer_hi": "trait bound के साथ जेनेरिक पैरामीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "How do you use impl Trait in return position?",
        "question_hi": "रिटर्न पोजिशन में impl Trait का उपयोग कैसे करते हैं?",
        "options_en": ["fn func() -> impl Trait {}", "fn func() -> dyn Trait {}", "fn func() -> Trait {}", "fn func() -> Box<dyn Trait> {}"],
        "options_hi": ["fn func() -> impl Trait {}", "fn func() -> dyn Trait {}", "fn func() -> Trait {}", "fn func() -> Box<dyn Trait> {}"],
        "answer_en": "fn func() -> impl Trait {}",
        "answer_hi": "fn func() -> impl Trait {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What are lifetimes?",
        "question_hi": "लाइफटाइम्स क्या हैं?",
        "options_en": ["Annotations for reference validity", "Memory allocation time", "Program execution duration", "Garbage collection intervals"],
        "options_hi": ["संदर्भ वैधता के लिए एनोटेशन", "मेमोरी आवंटन समय", "प्रोग्राम निष्पादन अवधि", "कचरा संग्रह अंतराल"],
        "answer_en": "Annotations for reference validity",
        "answer_hi": "संदर्भ वैधता के लिए एनोटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "How do you specify lifetime parameters?",
        "question_hi": "लाइफटाइम पैरामीटर कैसे निर्दिष्ट करते हैं?",
        "options_en": ["<'a>", "<lifetime a>", "<'a lifetime>", "<a>"],
        "options_hi": ["<'a>", "<lifetime a>", "<'a lifetime>", "<a>"],
        "answer_en": "<'a>",
        "answer_hi": "<'a>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the 'static lifetime?",
        "question_hi": "'static लाइफटाइम क्या है?",
        "options_en": ["Lifetime for entire program duration", "Short lifetime", "Dynamic lifetime", "Temporary lifetime"],
        "options_hi": ["पूरे प्रोग्राम अवधि के लिए लाइफटाइम", "छोटी लाइफटाइम", "डायनामिक लाइफटाइम", "अस्थायी लाइफटाइम"],
        "answer_en": "Lifetime for entire program duration",
        "answer_hi": "पूरे प्रोग्राम अवधि के लिए लाइफटाइम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is lifetime elision?",
        "question_hi": "लाइफटाइम एलिशन क्या है?",
        "options_en": ["Compiler inference of lifetimes in common patterns", "Manual lifetime omission", "Lifetime elimination", "Reference shortening"],
        "options_hi": ["सामान्य पैटर्न में लाइफटाइम का कंपाइलर अनुमान", "मैनुअल लाइफटाइम ओमिशन", "लाइफटाइम एलिमिनेशन", "संदर्भ छोटा करना"],
        "answer_en": "Compiler inference of lifetimes in common patterns",
        "answer_hi": "सामान्य पैटर्न में लाइफटाइम का कंपाइलर अनुमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What are the lifetime elision rules for methods?",
        "question_hi": "मेथड्स के लिए लाइफटाइम एलिशन रूल्स क्या हैं?",
        "options_en": ["&self or &mut self gets its own lifetime", "All parameters get same lifetime", "Return lifetime is 'static", "No elision for methods"],
        "options_hi": ["&self या &mut self को अपनी लाइफटाइम मिलती है", "सभी पैरामीटर को समान लाइफटाइम मिलती है", "रिटर्न लाइफटाइम 'static है", "मेथड्स के लिए कोई एलिशन नहीं"],
        "answer_en": "&self or &mut self gets its own lifetime",
        "answer_hi": "&self या &mut self को अपनी लाइफटाइम मिलती है",
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