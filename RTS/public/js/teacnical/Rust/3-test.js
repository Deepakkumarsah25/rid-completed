const questions = [
    {
        "num": 1,
        "question_en": "What is the main function signature in Rust?",
        "question_hi": "Rust में main function का signature क्या है?",
        "options_en": ["fn main()", "pub fn main()", "fn main() -> ()", "All of the above"],
        "options_hi": ["fn main()", "pub fn main()", "fn main() -> ()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which keyword is used to print to stdout?",
        "question_hi": "stdout में प्रिंट करने के लिए किस keyword का उपयोग किया जाता है?",
        "options_en": ["println!", "print!", "echo!", "All of the above"],
        "options_hi": ["println!", "print!", "echo!", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the default integer type in Rust?",
        "question_hi": "Rust में default integer type क्या है?",
        "options_en": ["i32", "i64", "usize", "isize"],
        "options_hi": ["i32", "i64", "usize", "isize"],
        "answer_en": "i32",
        "answer_hi": "i32",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you declare a mutable variable?",
        "question_hi": "Mutable variable कैसे declare करते हैं?",
        "options_en": ["let mut x = 5;", "mut x = 5;", "let x = mut 5;", "variable mut x = 5;"],
        "options_hi": ["let mut x = 5;", "mut x = 5;", "let x = mut 5;", "variable mut x = 5;"],
        "answer_en": "let mut x = 5;",
        "answer_hi": "let mut x = 5;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the range of i8 in Rust?",
        "question_hi": "Rust में i8 की range क्या है?",
        "options_en": ["-128 to 127", "0 to 255", "-32768 to 32767", "0 to 65535"],
        "options_hi": ["-128 से 127", "0 से 255", "-32768 से 32767", "0 से 65535"],
        "answer_en": "-128 to 127",
        "answer_hi": "-128 से 127",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you create a constant?",
        "question_hi": "Constant कैसे बनाते हैं?",
        "options_en": ["const MAX: u32 = 100;", "let const MAX = 100;", "static MAX: u32 = 100;", "define MAX 100;"],
        "options_hi": ["const MAX: u32 = 100;", "let const MAX = 100;", "static MAX: u32 = 100;", "define MAX 100;"],
        "answer_en": "const MAX: u32 = 100;",
        "answer_hi": "const MAX: u32 = 100;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the boolean type in Rust?",
        "question_hi": "Rust में boolean type क्या है?",
        "options_en": ["bool", "boolean", "Boolean", "bit"],
        "options_hi": ["bool", "boolean", "Boolean", "bit"],
        "answer_en": "bool",
        "answer_hi": "bool",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which operator is used for integer division?",
        "question_hi": "Integer division के लिए किस operator का उपयोग किया जाता है?",
        "options_en": ["/", "//", "div", "÷"],
        "options_hi": ["/", "//", "div", "÷"],
        "answer_en": "/",
        "answer_hi": "/",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the remainder operator?",
        "question_hi": "Remainder operator क्या है?",
        "options_en": ["%", "mod", "rem", "//"],
        "options_hi": ["%", "mod", "rem", "//"],
        "answer_en": "%",
        "answer_hi": "%",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you create a tuple?",
        "question_hi": "Tuple कैसे बनाते हैं?",
        "options_en": ["let t = (1, \"hello\", 3.14);", "let t = [1, \"hello\", 3.14];", "let t = {1, \"hello\", 3.14};", "tuple t = (1, \"hello\", 3.14);"],
        "options_hi": ["let t = (1, \"hello\", 3.14);", "let t = [1, \"hello\", 3.14];", "let t = {1, \"hello\", 3.14};", "tuple t = (1, \"hello\", 3.14);"],
        "answer_en": "let t = (1, \"hello\", 3.14);",
        "answer_hi": "let t = (1, \"hello\", 3.14);",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "How do you access the first element of a tuple?",
        "question_hi": "Tuple के पहले element तक कैसे पहुंचते हैं?",
        "options_en": ["t.0", "t[0]", "t.first", "t(0)"],
        "options_hi": ["t.0", "t[0]", "t.first", "t(0)"],
        "answer_en": "t.0",
        "answer_hi": "t.0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the character type in Rust?",
        "question_hi": "Rust में character type क्या है?",
        "options_en": ["char", "character", "chr", "c"],
        "options_hi": ["char", "character", "chr", "c"],
        "answer_en": "char",
        "answer_hi": "char",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How do you create an array?",
        "question_hi": "Array कैसे बनाते हैं?",
        "options_en": ["let a = [1, 2, 3];", "let a = (1, 2, 3);", "let a = {1, 2, 3};", "array a = [1, 2, 3];"],
        "options_hi": ["let a = [1, 2, 3];", "let a = (1, 2, 3);", "let a = {1, 2, 3};", "array a = [1, 2, 3];"],
        "answer_en": "let a = [1, 2, 3];",
        "answer_hi": "let a = [1, 2, 3];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you access array elements?",
        "question_hi": "Array elements तक कैसे पहुंचते हैं?",
        "options_en": ["a[0]", "a.0", "a(0)", "a->0"],
        "options_hi": ["a[0]", "a.0", "a(0)", "a->0"],
        "answer_en": "a[0]",
        "answer_hi": "a[0]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the string slice type?",
        "question_hi": "String slice type क्या है?",
        "options_en": ["&str", "str", "String", "&string"],
        "options_hi": ["&str", "str", "String", "&string"],
        "answer_en": "&str",
        "answer_hi": "&str",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you define a function?",
        "question_hi": "Function कैसे define करते हैं?",
        "options_en": ["fn my_func() {}", "function my_func() {}", "def my_func() {}", "func my_func() {}"],
        "options_hi": ["fn my_func() {}", "function my_func() {}", "def my_func() {}", "func my_func() {}"],
        "answer_en": "fn my_func() {}",
        "answer_hi": "fn my_func() {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "How do you return a value from a function?",
        "question_hi": "Function से value कैसे return करते हैं?",
        "options_en": ["fn add() -> i32 { 5 }", "fn add(): i32 { return 5; }", "fn add() -> i32 { return 5; }", "All of the above"],
        "options_hi": ["fn add() -> i32 { 5 }", "fn add(): i32 { return 5; }", "fn add() -> i32 { return 5; }", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the control flow keyword for conditions?",
        "question_hi": "Conditions के लिए control flow keyword क्या है?",
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
        "question_hi": "If statement कैसे लिखते हैं?",
        "options_en": ["if x > 5 { println!(\"big\"); }", "if (x > 5) { println!(\"big\"); }", "if x > 5 then println!(\"big\");", "Both A and B"],
        "options_hi": ["if x > 5 { println!(\"big\"); }", "if (x > 5) { println!(\"big\"); }", "if x > 5 then println!(\"big\");", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the infinite loop keyword?",
        "question_hi": "Infinite loop keyword क्या है?",
        "options_en": ["loop", "while true", "for", "repeat"],
        "options_hi": ["loop", "while true", "for", "repeat"],
        "answer_en": "loop",
        "answer_hi": "loop",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "How do you break out of a loop?",
        "question_hi": "Loop से कैसे बाहर निकलते हैं?",
        "options_en": ["break;", "exit;", "stop;", "return;"],
        "options_hi": ["break;", "exit;", "stop;", "return;"],
        "answer_en": "break;",
        "answer_hi": "break;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you skip to the next iteration?",
        "question_hi": "अगले iteration पर कैसे जाते हैं?",
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
        "question_hi": "While loop syntax क्या है?",
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
        "question_hi": "For loop कैसे लिखते हैं?",
        "options_en": ["for i in 0..5 { }", "for (i in 0..5) { }", "for i of 0..5 { }", "foreach i in 0..5 { }"],
        "options_hi": ["for i in 0..5 { }", "for (i in 0..5) { }", "for i of 0..5 { }", "foreach i in 0..5 { }"],
        "answer_en": "for i in 0..5 { }",
        "answer_hi": "for i in 0..5 { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What does 0..5 represent?",
        "question_hi": "0..5 क्या represent करता है?",
        "options_en": ["Range from 0 to 4", "Range from 0 to 5", "Array of 5 elements", "List of numbers"],
        "options_hi": ["0 से 4 तक range", "0 से 5 तक range", "5 elements का array", "Numbers की list"],
        "answer_en": "Range from 0 to 4",
        "answer_hi": "0 से 4 तक range",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What does 0..=5 represent?",
        "question_hi": "0..=5 क्या represent करता है?",
        "options_en": ["Range from 0 to 5 inclusive", "Range from 0 to 4", "Array of 6 elements", "List of numbers"],
        "options_hi": ["0 से 5 तक inclusive range", "0 से 4 तक range", "6 elements का array", "Numbers की list"],
        "answer_en": "Range from 0 to 5 inclusive",
        "answer_hi": "0 से 5 तक inclusive range",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "How do you create an immutable reference?",
        "question_hi": "Immutable reference कैसे बनाते हैं?",
        "options_en": ["&x", "&mut x", "ref x", "*x"],
        "options_hi": ["&x", "&mut x", "ref x", "*x"],
        "answer_en": "&x",
        "answer_hi": "&x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How do you create a mutable reference?",
        "question_hi": "Mutable reference कैसे बनाते हैं?",
        "options_en": ["&mut x", "&x", "mut &x", "ref mut x"],
        "options_hi": ["&mut x", "&x", "mut &x", "ref mut x"],
        "answer_en": "&mut x",
        "answer_hi": "&mut x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is a slice?",
        "question_hi": "Slice क्या है?",
        "options_en": ["A reference to a contiguous sequence", "A type of array", "A string type", "A function"],
        "options_hi": ["Contiguous sequence का reference", "एक प्रकार का array", "एक string type", "एक function"],
        "answer_en": "A reference to a contiguous sequence",
        "answer_hi": "Contiguous sequence का reference",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you create a string slice from a string?",
        "question_hi": "String से string slice कैसे बनाते हैं?",
        "options_en": ["&s[..]", "s.as_str()", "&s", "All of the above"],
        "options_hi": ["&s[..]", "s.as_str()", "&s", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the String type?",
        "question_hi": "String type क्या है?",
        "options_en": ["A growable, owned string", "A fixed string", "A string slice", "A character array"],
        "options_hi": ["एक growable, owned string", "एक fixed string", "एक string slice", "एक character array"],
        "answer_en": "A growable, owned string",
        "answer_hi": "एक growable, owned string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you create a String from a string literal?",
        "question_hi": "String literal से String कैसे बनाते हैं?",
        "options_en": ["String::from(\"hello\")", "\"hello\".to_string()", "\"hello\".into()", "All of the above"],
        "options_hi": ["String::from(\"hello\")", "\"hello\".to_string()", "\"hello\".into()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "How do you push a character to a String?",
        "question_hi": "String में character कैसे push करते हैं?",
        "options_en": ["s.push('c');", "s.add('c');", "s.append('c');", "s.insert('c');"],
        "options_hi": ["s.push('c');", "s.add('c');", "s.append('c');", "s.insert('c');"],
        "answer_en": "s.push('c');",
        "answer_hi": "s.push('c');",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you push a string to a String?",
        "question_hi": "String में string कैसे push करते हैं?",
        "options_en": ["s.push_str(\"world\");", "s.add_str(\"world\");", "s.append_str(\"world\");", "s.insert_str(\"world\");"],
        "options_hi": ["s.push_str(\"world\");", "s.add_str(\"world\");", "s.append_str(\"world\");", "s.insert_str(\"world\");"],
        "answer_en": "s.push_str(\"world\");",
        "answer_hi": "s.push_str(\"world\");",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is a struct?",
        "question_hi": "Struct क्या है?",
        "options_en": ["A custom data type", "A function", "A loop", "A module"],
        "options_hi": ["एक custom data type", "एक function", "एक loop", "एक module"],
        "answer_en": "A custom data type",
        "answer_hi": "एक custom data type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do you define a struct?",
        "question_hi": "Struct कैसे define करते हैं?",
        "options_en": ["struct Point { x: i32, y: i32 }", "struct Point { i32 x, i32 y }", "class Point { x: i32, y: i32 }", "type Point = { x: i32, y: i32 };"],
        "options_hi": ["struct Point { x: i32, y: i32 }", "struct Point { i32 x, i32 y }", "class Point { x: i32, y: i32 }", "type Point = { x: i32, y: i32 };"],
        "answer_en": "struct Point { x: i32, y: i32 }",
        "answer_hi": "struct Point { x: i32, y: i32 }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How do you create a struct instance?",
        "question_hi": "Struct instance कैसे बनाते हैं?",
        "options_en": ["let p = Point { x: 0, y: 0 };", "let p = new Point(0, 0);", "let p = Point::new(0, 0);", "Point p = { 0, 0 };"],
        "options_hi": ["let p = Point { x: 0, y: 0 };", "let p = new Point(0, 0);", "let p = Point::new(0, 0);", "Point p = { 0, 0 };"],
        "answer_en": "let p = Point { x: 0, y: 0 };",
        "answer_hi": "let p = Point { x: 0, y: 0 };",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How do you access struct fields?",
        "question_hi": "Struct fields तक कैसे पहुंचते हैं?",
        "options_en": ["p.x", "p->x", "p[x]", "Point::x"],
        "options_hi": ["p.x", "p->x", "p[x]", "Point::x"],
        "answer_en": "p.x",
        "answer_hi": "p.x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is an enum?",
        "question_hi": "Enum क्या है?",
        "options_en": ["A type with multiple variants", "A number type", "A string type", "A function type"],
        "options_hi": ["Multiple variants वाला type", "एक number type", "एक string type", "एक function type"],
        "answer_en": "A type with multiple variants",
        "answer_hi": "Multiple variants वाला type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How do you define an enum?",
        "question_hi": "Enum कैसे define करते हैं?",
        "options_en": ["enum Color { Red, Green, Blue }", "enum Color { Red; Green; Blue }", "enum Color = { Red, Green, Blue }", "type enum Color { Red, Green, Blue }"],
        "options_hi": ["enum Color { Red, Green, Blue }", "enum Color { Red; Green; Blue }", "enum Color = { Red, Green, Blue }", "type enum Color { Red, Green, Blue }"],
        "answer_en": "enum Color { Red, Green, Blue }",
        "answer_hi": "enum Color { Red, Green, Blue }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the Option enum used for?",
        "question_hi": "Option enum का उपयोग किस लिए किया जाता है?",
        "options_en": ["Representing optional values", "Error handling", "Loop control", "Memory allocation"],
        "options_hi": ["Optional values represent करने के लिए", "Error handling", "Loop control", "Memory allocation"],
        "answer_en": "Representing optional values",
        "answer_hi": "Optional values represent करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What are the variants of Option?",
        "question_hi": "Option के variants क्या हैं?",
        "options_en": ["Some(T) and None", "Ok(T) and Err(E)", "True and False", "Value and Null"],
        "options_hi": ["Some(T) और None", "Ok(T) और Err(E)", "True और False", "Value और Null"],
        "answer_en": "Some(T) and None",
        "answer_hi": "Some(T) और None",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the Result enum used for?",
        "question_hi": "Result enum का उपयोग किस लिए किया जाता है?",
        "options_en": ["Error handling", "Optional values", "Loop control", "Memory management"],
        "options_hi": ["Error handling", "Optional values", "Loop control", "Memory management"],
        "answer_en": "Error handling",
        "answer_hi": "Error handling",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What are the variants of Result?",
        "question_hi": "Result के variants क्या हैं?",
        "options_en": ["Ok(T) and Err(E)", "Some(T) and None", "Success and Failure", "Value and Error"],
        "options_hi": ["Ok(T) और Err(E)", "Some(T) और None", "Success और Failure", "Value और Error"],
        "answer_en": "Ok(T) and Err(E)",
        "answer_hi": "Ok(T) और Err(E)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is pattern matching?",
        "question_hi": "Pattern matching क्या है?",
        "options_en": ["Comparing values against patterns", "String comparison", "Loop iteration", "Function calling"],
        "options_hi": ["Patterns के against values compare करना", "String comparison", "Loop iteration", "Function calling"],
        "answer_en": "Comparing values against patterns",
        "answer_hi": "Patterns के against values compare करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which keyword is used for pattern matching?",
        "question_hi": "Pattern matching के लिए किस keyword का उपयोग किया जाता है?",
        "options_en": ["match", "switch", "case", "check"],
        "options_hi": ["match", "switch", "case", "check"],
        "answer_en": "match",
        "answer_hi": "match",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "How do you write a match expression?",
        "question_hi": "Match expression कैसे लिखते हैं?",
        "options_en": ["match value { pattern => expr, }", "match value { pattern: expr, }", "match (value) { pattern -> expr }", "switch value { case pattern: expr }"],
        "options_hi": ["match value { pattern => expr, }", "match value { pattern: expr, }", "match (value) { pattern -> expr }", "switch value { case pattern: expr }"],
        "answer_en": "match value { pattern => expr, }",
        "answer_hi": "match value { pattern => expr, }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the _ pattern used for?",
        "question_hi": "_ pattern का उपयोग किस लिए किया जाता है?",
        "options_en": ["Catch-all pattern", "Ignoring values", "Wildcard pattern", "All of the above"],
        "options_hi": ["Catch-all pattern", "Values ignore करने के लिए", "Wildcard pattern", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What are modules?",
        "question_hi": "Modules क्या हैं?",
        "options_en": ["Namespaces for organizing code", "Data types", "Functions", "Variables"],
        "options_hi": ["Code organize करने के लिए namespaces", "Data types", "Functions", "Variables"],
        "answer_en": "Namespaces for organizing code",
        "answer_hi": "Code organize करने के लिए namespaces",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you define a module?",
        "question_hi": "Module कैसे define करते हैं?",
        "options_en": ["mod my_module { }", "module my_module { }", "namespace my_module { }", "package my_module { }"],
        "options_hi": ["mod my_module { }", "module my_module { }", "namespace my_module { }", "package my_module { }"],
        "answer_en": "mod my_module { }",
        "answer_hi": "mod my_module { }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "How do you use items from another module?",
        "question_hi": "दूसरे module के items कैसे use करते हैं?",
        "options_en": ["use my_module::item;", "import my_module.item;", "include my_module::item;", "from my_module import item;"],
        "options_hi": ["use my_module::item;", "import my_module.item;", "include my_module::item;", "from my_module import item;"],
        "answer_en": "use my_module::item;",
        "answer_hi": "use my_module::item;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the pub keyword used for?",
        "question_hi": "pub keyword का उपयोग किस लिए किया जाता है?",
        "options_en": ["Making items public", "Making items private", "Publishing code", "Public functions only"],
        "options_hi": ["Items को public बनाने के लिए", "Items को private बनाने के लिए", "Code publish करने के लिए", "केवल public functions"],
        "answer_en": "Making items public",
        "answer_hi": "Items को public बनाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What are collections?",
        "question_hi": "Collections क्या हैं?",
        "options_en": ["Data structures that contain multiple values", "Single values", "Functions", "Modules"],
        "options_hi": ["Data structures जिनमें multiple values होते हैं", "Single values", "Functions", "Modules"],
        "answer_en": "Data structures that contain multiple values",
        "answer_hi": "Data structures जिनमें multiple values होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is a vector?",
        "question_hi": "Vector क्या है?",
        "options_en": ["A growable array", "A fixed array", "A string", "A tuple"],
        "options_hi": ["एक growable array", "एक fixed array", "एक string", "एक tuple"],
        "answer_en": "A growable array",
        "answer_hi": "एक growable array",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "How do you create a vector?",
        "question_hi": "Vector कैसे बनाते हैं?",
        "options_en": ["let v = vec![1, 2, 3];", "let v = [1, 2, 3];", "let v = Vector::new();", "let v = new vec![1, 2, 3];"],
        "options_hi": ["let v = vec![1, 2, 3];", "let v = [1, 2, 3];", "let v = Vector::new();", "let v = new vec![1, 2, 3];"],
        "answer_en": "let v = vec![1, 2, 3];",
        "answer_hi": "let v = vec![1, 2, 3];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you add elements to a vector?",
        "question_hi": "Vector में elements कैसे add करते हैं?",
        "options_en": ["v.push(4);", "v.add(4);", "v.insert(4);", "v.append(4);"],
        "options_hi": ["v.push(4);", "v.add(4);", "v.insert(4);", "v.append(4);"],
        "answer_en": "v.push(4);",
        "answer_hi": "v.push(4);",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is a HashMap?",
        "question_hi": "HashMap क्या है?",
        "options_en": ["A key-value store", "An array", "A string", "A function"],
        "options_hi": ["एक key-value store", "एक array", "एक string", "एक function"],
        "answer_en": "A key-value store",
        "answer_hi": "एक key-value store",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
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
        "num": 59,
        "question_en": "How do you insert into a HashMap?",
        "question_hi": "HashMap में कैसे insert करते हैं?",
        "options_en": ["map.insert(key, value);", "map.add(key, value);", "map[key] = value;", "map.set(key, value);"],
        "options_hi": ["map.insert(key, value);", "map.add(key, value);", "map[key] = value;", "map.set(key, value);"],
        "answer_en": "map.insert(key, value);",
        "answer_hi": "map.insert(key, value);",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is error handling?",
        "question_hi": "Error handling क्या है?",
        "options_en": ["Dealing with recoverable and unrecoverable errors", "Ignoring errors", "Only compile errors", "Only runtime errors"],
        "options_hi": ["Recoverable और unrecoverable errors से deal करना", "Errors ignore करना", "केवल compile errors", "केवल runtime errors"],
        "answer_en": "Dealing with recoverable and unrecoverable errors",
        "answer_hi": "Recoverable और unrecoverable errors से deal करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is panic?",
        "question_hi": "Panic क्या है?",
        "options_en": ["Unrecoverable error", "A warning", "A compile error", "A type of loop"],
        "options_hi": ["Unrecoverable error", "एक warning", "एक compile error", "एक प्रकार का loop"],
        "answer_en": "Unrecoverable error",
        "answer_hi": "Unrecoverable error",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How do you cause a panic?",
        "question_hi": "Panic कैसे cause करते हैं?",
        "options_en": ["panic!(\"error message\");", "error!(\"error message\");", "crash!(\"error message\");", "fail!(\"error message\");"],
        "options_hi": ["panic!(\"error message\");", "error!(\"error message\");", "crash!(\"error message\");", "fail!(\"error message\");"],
        "answer_en": "panic!(\"error message\");",
        "answer_hi": "panic!(\"error message\");",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the ? operator used for?",
        "question_hi": "? operator का उपयोग किस लिए किया जाता है?",
        "options_en": ["Error propagation", "Optional values", "Boolean operations", "String operations"],
        "options_hi": ["Error propagation", "Optional values", "Boolean operations", "String operations"],
        "answer_en": "Error propagation",
        "answer_hi": "Error propagation",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What are generics?",
        "question_hi": "Generics क्या हैं?",
        "options_en": ["Abstract stand-ins for concrete types", "Specific types", "Function parameters", "Loop variables"],
        "options_hi": ["Concrete types के लिए abstract stand-ins", "Specific types", "Function parameters", "Loop variables"],
        "answer_en": "Abstract stand-ins for concrete types",
        "answer_hi": "Concrete types के लिए abstract stand-ins",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "How do you define a generic function?",
        "question_hi": "Generic function कैसे define करते हैं?",
        "options_en": ["fn func<T>(param: T) -> T {}", "fn func generic<T>(param: T) {}", "generic fn func<T>(param: T) {}", "fn<T> func(param: T) {}"],
        "options_hi": ["fn func<T>(param: T) -> T {}", "fn func generic<T>(param: T) {}", "generic fn func<T>(param: T) {}", "fn<T> func(param: T) {}"],
        "answer_en": "fn func<T>(param: T) -> T {}",
        "answer_hi": "fn func<T>(param: T) -> T {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What are traits?",
        "question_hi": "Traits क्या हैं?",
        "options_en": ["Shared behavior that types can implement", "Data types", "Functions", "Variables"],
        "options_hi": ["Shared behavior जिसे types implement कर सकते हैं", "Data types", "Functions", "Variables"],
        "answer_en": "Shared behavior that types can implement",
        "answer_hi": "Shared behavior जिसे types implement कर सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "How do you define a trait?",
        "question_hi": "Trait कैसे define करते हैं?",
        "options_en": ["trait MyTrait { fn method(&self); }", "struct trait MyTrait { }", "interface MyTrait { }", "define trait MyTrait;"],
        "options_hi": ["trait MyTrait { fn method(&self); }", "struct trait MyTrait { }", "interface MyTrait { }", "define trait MyTrait;"],
        "answer_en": "trait MyTrait { fn method(&self); }",
        "answer_hi": "trait MyTrait { fn method(&self); }",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you implement a trait?",
        "question_hi": "Trait कैसे implement करते हैं?",
        "options_en": ["impl MyTrait for MyType {}", "trait impl for MyType {}", "MyType implements MyTrait {}", "implement MyTrait for MyType {}"],
        "options_hi": ["impl MyTrait for MyType {}", "trait impl for MyType {}", "MyType implements MyTrait {}", "implement MyTrait for MyType {}"],
        "answer_en": "impl MyTrait for MyType {}",
        "answer_hi": "impl MyTrait for MyType {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is testing?",
        "question_hi": "Testing क्या है?",
        "options_en": ["Verifying code works as expected", "Compiling code", "Running code", "Debugging code"],
        "options_hi": ["Verify करना कि code expected तरह से work करता है", "Code compile करना", "Code run करना", "Code debug करना"],
        "answer_en": "Verifying code works as expected",
        "answer_hi": "Verify करना कि code expected तरह से work करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How do you write a test function?",
        "question_hi": "Test function कैसे लिखते हैं?",
        "options_en": ["#[test] fn test_func() {}", "#[test] function test_func() {}", "test fn test_func() {}", "fn test test_func() {}"],
        "options_hi": ["#[test] fn test_func() {}", "#[test] function test_func() {}", "test fn test_func() {}", "fn test test_func() {}"],
        "answer_en": "#[test] fn test_func() {}",
        "answer_hi": "#[test] fn test_func() {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "How do you run tests?",
        "question_hi": "Tests कैसे run करते हैं?",
        "options_en": ["cargo test", "rust test", "cargo run --test", "rustc --test"],
        "options_hi": ["cargo test", "rust test", "cargo run --test", "rustc --test"],
        "answer_en": "cargo test",
        "answer_hi": "cargo test",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What are assertions?",
        "question_hi": "Assertions क्या हैं?",
        "options_en": ["Checks that verify expected behavior", "Test functions", "Test modules", "Test runners"],
        "options_hi": ["Checks जो expected behavior verify करते हैं", "Test functions", "Test modules", "Test runners"],
        "answer_en": "Checks that verify expected behavior",
        "answer_hi": "Checks जो expected behavior verify करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "How do you assert equality?",
        "question_hi": "Equality कैसे assert करते हैं?",
        "options_en": ["assert_eq!(a, b);", "assert_equal(a, b);", "assert(a == b);", "check_eq!(a, b);"],
        "options_hi": ["assert_eq!(a, b);", "assert_equal(a, b);", "assert(a == b);", "check_eq!(a, b);"],
        "answer_en": "assert_eq!(a, b);",
        "answer_hi": "assert_eq!(a, b);",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is documentation?",
        "question_hi": "Documentation क्या है?",
        "options_en": ["Comments that generate documentation", "Code comments", "Function names", "Variable names"],
        "options_hi": ["Comments जो documentation generate करते हैं", "Code comments", "Function names", "Variable names"],
        "answer_en": "Comments that generate documentation",
        "answer_hi": "Comments जो documentation generate करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "How do you write documentation comments?",
        "question_hi": "Documentation comments कैसे लिखते हैं?",
        "options_en": ["/// This is a doc comment", "//! This is a doc comment", "/** This is a doc comment */", "All of the above"],
        "options_hi": ["/// यह एक doc comment है", "//! यह एक doc comment है", "/** यह एक doc comment है */", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How do you generate documentation?",
        "question_hi": "Documentation कैसे generate करते हैं?",
        "options_en": ["cargo doc", "rust doc", "cargo documentation", "rust documentation"],
        "options_hi": ["cargo doc", "rust doc", "cargo documentation", "rust documentation"],
        "answer_en": "cargo doc",
        "answer_hi": "cargo doc",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is Cargo?",
        "question_hi": "Cargo क्या है?",
        "options_en": ["Rust's package manager and build system", "A programming language", "A text editor", "A database"],
        "options_hi": ["Rust का package manager और build system", "एक programming language", "एक text editor", "एक database"],
        "answer_en": "Rust's package manager and build system",
        "answer_hi": "Rust का package manager और build system",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What file describes a Rust project?",
        "question_hi": "कौन सी file Rust project describe करती है?",
        "options_en": ["Cargo.toml", "package.json", "rust.toml", "project.toml"],
        "options_hi": ["Cargo.toml", "package.json", "rust.toml", "project.toml"],
        "answer_en": "Cargo.toml",
        "answer_hi": "Cargo.toml",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "How do you create a new project?",
        "question_hi": "नया project कैसे बनाते हैं?",
        "options_en": ["cargo new project_name", "rust new project_name", "cargo create project_name", "rust create project_name"],
        "options_hi": ["cargo new project_name", "rust new project_name", "cargo create project_name", "rust create project_name"],
        "answer_en": "cargo new project_name",
        "answer_hi": "cargo new project_name",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How do you build a project?",
        "question_hi": "Project कैसे build करते हैं?",
        "options_en": ["cargo build", "rust build", "cargo compile", "rust compile"],
        "options_hi": ["cargo build", "rust build", "cargo compile", "rust compile"],
        "answer_en": "cargo build",
        "answer_hi": "cargo build",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "How do you run a project?",
        "question_hi": "Project कैसे run करते हैं?",
        "options_en": ["cargo run", "rust run", "cargo execute", "rust execute"],
        "options_hi": ["cargo run", "rust run", "cargo execute", "rust execute"],
        "answer_en": "cargo run",
        "answer_hi": "cargo run",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What are dependencies?",
        "question_hi": "Dependencies क्या हैं?",
        "options_en": ["External crates your project depends on", "Your project's files", "Rust compiler versions", "Operating systems"],
        "options_hi": ["External crates जिन पर आपका project depend करता है", "आपके project की files", "Rust compiler versions", "Operating systems"],
        "answer_en": "External crates your project depends on",
        "answer_hi": "External crates जिन पर आपका project depend करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "How do you add a dependency?",
        "question_hi": "Dependency कैसे add करते हैं?",
        "options_en": ["Add to [dependencies] in Cargo.toml", "Add to main.rs", "Add to lib.rs", "Run cargo add dep"],
        "options_hi": ["Cargo.toml में [dependencies] में add करें", "main.rs में add करें", "lib.rs में add करें", "cargo add dep run करें"],
        "answer_en": "Add to [dependencies] in Cargo.toml",
        "answer_hi": "Cargo.toml में [dependencies] में add करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is a crate?",
        "question_hi": "Crate क्या है?",
        "options_en": ["A package of Rust code", "A function", "A module", "A variable"],
        "options_hi": ["Rust code का एक package", "एक function", "एक module", "एक variable"],
        "answer_en": "A package of Rust code",
        "answer_hi": "Rust code का एक package",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What are the two crate types?",
        "question_hi": "दो crate types क्या हैं?",
        "options_en": ["Binary and library", "Main and sub", "Primary and secondary", "Executable and module"],
        "options_hi": ["Binary और library", "Main और sub", "Primary और secondary", "Executable और module"],
        "answer_en": "Binary and library",
        "answer_hi": "Binary और library",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is a binary crate?",
        "question_hi": "Binary crate क्या है?",
        "options_en": ["A crate that compiles to an executable", "A crate with reusable code", "A test crate", "A doc crate"],
        "options_hi": ["एक crate जो executable में compile होता है", "Reusable code वाला crate", "एक test crate", "एक doc crate"],
        "answer_en": "A crate that compiles to an executable",
        "answer_hi": "एक crate जो executable में compile होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is a library crate?",
        "question_hi": "Library crate क्या है?",
        "options_en": ["A crate with reusable code", "A crate that compiles to an executable", "A test crate", "A doc crate"],
        "options_hi": ["Reusable code वाला crate", "एक crate जो executable में compile होता है", "एक test crate", "एक doc crate"],
        "answer_en": "A crate with reusable code",
        "answer_hi": "Reusable code वाला crate",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the main file for a binary crate?",
        "question_hi": "Binary crate की main file क्या है?",
        "options_en": ["src/main.rs", "src/lib.rs", "main.rs", "lib.rs"],
        "options_hi": ["src/main.rs", "src/lib.rs", "main.rs", "lib.rs"],
        "answer_en": "src/main.rs",
        "answer_hi": "src/main.rs",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the main file for a library crate?",
        "question_hi": "Library crate की main file क्या है?",
        "options_en": ["src/lib.rs", "src/main.rs", "lib.rs", "main.rs"],
        "options_hi": ["src/lib.rs", "src/main.rs", "lib.rs", "main.rs"],
        "answer_en": "src/lib.rs",
        "answer_hi": "src/lib.rs",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What are lifetimes?",
        "question_hi": "Lifetimes क्या हैं?",
        "options_en": ["A way to ensure references are valid", "A variable type", "A function parameter", "A loop construct"],
        "options_hi": ["References valid रहें इसका तरीका", "एक variable type", "एक function parameter", "एक loop construct"],
        "answer_en": "A way to ensure references are valid",
        "answer_hi": "References valid रहें इसका तरीका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "How do you specify a lifetime?",
        "question_hi": "Lifetime कैसे specify करते हैं?",
        "options_en": ["fn func<'a>(param: &'a str) -> &'a str {}", "fn func<lifetime a>(param: &a str) {}", "fn func(param: &'a str) -> &'a str {}", "lifetime fn func<'a>(param: &str) {}"],
        "options_hi": ["fn func<'a>(param: &'a str) -> &'a str {}", "fn func<lifetime a>(param: &a str) {}", "fn func(param: &'a str) -> &'a str {}", "lifetime fn func<'a>(param: &str) {}"],
        "answer_en": "fn func<'a>(param: &'a str) -> &'a str {}",
        "answer_hi": "fn func<'a>(param: &'a str) -> &'a str {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the 'static lifetime?",
        "question_hi": "'static lifetime क्या है?",
        "options_en": ["A lifetime that lasts the entire program", "A short lifetime", "A variable lifetime", "A function lifetime"],
        "options_hi": ["एक lifetime जो entire program तक रहती है", "एक short lifetime", "एक variable lifetime", "एक function lifetime"],
        "answer_en": "A lifetime that lasts the entire program",
        "answer_hi": "एक lifetime जो entire program तक रहती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What are closures?",
        "question_hi": "Closures क्या हैं?",
        "options_en": ["Anonymous functions that capture environment", "Named functions", "Function pointers", "Method calls"],
        "options_hi": ["Anonymous functions जो environment capture करते हैं", "Named functions", "Function pointers", "Method calls"],
        "answer_en": "Anonymous functions that capture environment",
        "answer_hi": "Anonymous functions जो environment capture करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you define a closure?",
        "question_hi": "Closure कैसे define करते हैं?",
        "options_en": ["let closure = |x| x + 1;", "closure |x| x + 1;", "let closure = function(x) { x + 1 };", "fn closure(x) { x + 1 }"],
        "options_hi": ["let closure = |x| x + 1;", "closure |x| x + 1;", "let closure = function(x) { x + 1 };", "fn closure(x) { x + 1 }"],
        "answer_en": "let closure = |x| x + 1;",
        "answer_hi": "let closure = |x| x + 1;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What are the Fn traits?",
        "question_hi": "Fn traits क्या हैं?",
        "options_en": ["Traits for closure types", "Traits for functions", "Traits for variables", "Traits for modules"],
        "options_hi": ["Closure types के लिए traits", "Functions के लिए traits", "Variables के लिए traits", "Modules के लिए traits"],
        "answer_en": "Traits for closure types",
        "answer_hi": "Closure types के लिए traits",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the difference between Fn, FnMut, FnOnce?",
        "question_hi": "Fn, FnMut, FnOnce में क्या अंतर है?",
        "options_en": ["How they capture variables", "Their return types", "Their parameter types", "Their names"],
        "options_hi": ["वे variables कैसे capture करते हैं", "उनके return types", "उनके parameter types", "उनके names"],
        "answer_en": "How they capture variables",
        "answer_hi": "वे variables कैसे capture करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What are iterators?",
        "question_hi": "Iterators क्या हैं?",
        "options_en": ["A way to process sequences", "A loop type", "A function type", "A variable type"],
        "options_hi": ["Sequences process करने का तरीका", "एक loop type", "एक function type", "एक variable type"],
        "answer_en": "A way to process sequences",
        "answer_hi": "Sequences process करने का तरीका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do you create an iterator from a vector?",
        "question_hi": "Vector से iterator कैसे बनाते हैं?",
        "options_en": ["v.iter()", "v.iterator()", "iterator(v)", "v.to_iter()"],
        "options_hi": ["v.iter()", "v.iterator()", "iterator(v)", "v.to_iter()"],
        "answer_en": "v.iter()",
        "answer_hi": "v.iter()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the Iterator trait?",
        "question_hi": "Iterator trait क्या है?",
        "options_en": ["A trait that defines iteration", "A trait for functions", "A trait for variables", "A trait for modules"],
        "options_hi": ["एक trait जो iteration define करता है", "Functions के लिए trait", "Variables के लिए trait", "Modules के लिए trait"],
        "answer_en": "A trait that defines iteration",
        "answer_hi": "एक trait जो iteration define करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What are smart pointers?",
        "question_hi": "Smart pointers क्या हैं?",
        "options_en": ["Data structures that act like pointers with extra capabilities", "Regular pointers", "Function pointers", "Variable pointers"],
        "options_hi": ["Data structures जो pointers की तरह act करते हैं extra capabilities के साथ", "Regular pointers", "Function pointers", "Variable pointers"],
        "answer_en": "Data structures that act like pointers with extra capabilities",
        "answer_hi": "Data structures जो pointers की तरह act करते हैं extra capabilities के साथ",
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