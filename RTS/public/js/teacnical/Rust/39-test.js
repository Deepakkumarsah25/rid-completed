const questions=[
    {
        "num": 1,
        "question_en": "What is the Rust compiler called?",
        "question_hi": "Rust कम्पाइलर को क्या कहते हैं?",
        "options_en": ["rustc", "rustcc", "rc", "rustcomp"],
        "options_hi": ["rustc", "rustcc", "rc", "rustcomp"],
        "answer_en": "rustc",
        "answer_hi": "rustc",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which package manager does Rust use?",
        "question_hi": "Rust किस पैकेज मैनेजर का उपयोग करता है?",
        "options_en": ["Cargo", "Crate", "Rustup", "Pack"],
        "options_hi": ["Cargo", "Crate", "Rustup", "Pack"],
        "answer_en": "Cargo",
        "answer_hi": "Cargo",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the file extension for Rust source files?",
        "question_hi": "Rust सोर्स फाइलों का एक्सटेंशन क्या है?",
        "options_en": [".rs", ".rust", ".rc", ".r"],
        "options_hi": [".rs", ".rust", ".rc", ".r"],
        "answer_en": ".rs",
        "answer_hi": ".rs",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which keyword defines a function in Rust?",
        "question_hi": "Rust में फंक्शन डिफाइन करने के लिए किस कीवर्ड का उपयोग करते हैं?",
        "options_en": ["fn", "func", "function", "def"],
        "options_hi": ["fn", "func", "function", "def"],
        "answer_en": "fn",
        "answer_hi": "fn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the default behavior of variables in Rust?",
        "question_hi": "Rust में वेरिएबल्स का डिफॉल्ट बिहेवियर क्या है?",
        "options_en": ["Immutable", "Mutable", "Constant", "Static"],
        "options_hi": ["इम्यूटेबल", "म्यूटेबल", "कॉन्स्टेंट", "स्टेटिक"],
        "answer_en": "Immutable",
        "answer_hi": "इम्यूटेबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which symbol is used for single-line comments?",
        "question_hi": "सिंगल-लाइन कमेंट्स के लिए किस सिंबल का उपयोग करते हैं?",
        "options_en": ["//", "#", "--", "/*"],
        "options_hi": ["//", "#", "--", "/*"],
        "answer_en": "//",
        "answer_hi": "//",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the size of bool type in Rust?",
        "question_hi": "Rust में bool टाइप का साइज क्या है?",
        "options_en": ["1 byte", "1 bit", "4 bytes", "8 bytes"],
        "options_hi": ["1 बाइट", "1 बिट", "4 बाइट्स", "8 बाइट्स"],
        "answer_en": "1 byte",
        "answer_hi": "1 बाइट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which method is used to read user input?",
        "question_hi": "यूजर इनपुट पढ़ने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["read_line()", "input()", "scan()", "get_input()"],
        "options_hi": ["read_line()", "input()", "scan()", "get_input()"],
        "answer_en": "read_line()",
        "answer_hi": "read_line()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What does RAII stand for in Rust?",
        "question_hi": "Rust में RAII का क्या मतलब है?",
        "options_en": ["Resource Acquisition Is Initialization", "Rust Allocation Interface Implementation", "Runtime Allocation Instance Interface", "Resource Allocation In Initialization"],
        "options_hi": ["रिसोर्स एक्विजिशन इज इनिशियलाइज़ेशन", "रस्ट अलोकेशन इंटरफेस इम्प्लीमेंटेशन", "रनटाइम अलोकेशन इंस्टेंस इंटरफेस", "रिसोर्स अलोकेशन इन इनिशियलाइज़ेशन"],
        "answer_en": "Resource Acquisition Is Initialization",
        "answer_hi": "रिसोर्स एक्विजिशन इज इनिशियलाइज़ेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which trait is automatically implemented for most types?",
        "question_hi": "ज्यादातर टाइप्स के लिए कौन सा trait ऑटोमैटिकली इम्प्लीमेंट होता है?",
        "options_en": ["Sized", "Copy", "Clone", "Debug"],
        "options_hi": ["Sized", "Copy", "Clone", "Debug"],
        "answer_en": "Sized",
        "answer_hi": "Sized",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of the 'unwrap()' method?",
        "question_hi": "'unwrap()' मेथड का उद्देश्य क्या है?",
        "options_en": ["Extract value from Option/Result", "Unwrap package", "Debug tool", "Memory management"],
        "options_hi": ["Option/Result से वैल्यू निकालना", "पैकेज अनरैप करना", "डीबग टूल", "मेमोरी मैनेजमेंट"],
        "answer_en": "Extract value from Option/Result",
        "answer_hi": "Option/Result से वैल्यू निकालना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which loop runs at least once?",
        "question_hi": "कौन सा लूप कम से कम एक बार जरूर रन करता है?",
        "options_en": ["loop", "while", "for", "do-while"],
        "options_hi": ["loop", "while", "for", "do-while"],
        "answer_en": "loop",
        "answer_hi": "loop",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the Rust's package unit called?",
        "question_hi": "Rust के पैकेज यूनिट को क्या कहते हैं?",
        "options_en": ["Crate", "Module", "Package", "Box"],
        "options_hi": ["क्रेट", "मॉड्यूल", "पैकेज", "बॉक्स"],
        "answer_en": "Crate",
        "answer_hi": "क्रेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which method creates an empty string?",
        "question_hi": "खाली स्ट्रिंग बनाने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["String::new()", "String::empty()", "new String()", "String()"],
        "options_hi": ["String::new()", "String::empty()", "new String()", "String()"],
        "answer_en": "String::new()",
        "answer_hi": "String::new()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the maximum number of elements in a tuple?",
        "question_hi": "टपल में एलिमेंट्स की मैक्सिमम संख्या कितनी होती है?",
        "options_en": ["No fixed limit", "12", "32", "64"],
        "options_hi": ["कोई फिक्स्ड लिमिट नहीं", "12", "32", "64"],
        "answer_en": "No fixed limit",
        "answer_hi": "कोई फिक्स्ड लिमिट नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which attribute marks the main function?",
        "question_hi": "मेन फंक्शन को मार्क करने के लिए किस एट्रिब्यूट का उपयोग करते हैं?",
        "options_en": ["No attribute needed", "#[main]", "#[start]", "#[entry]"],
        "options_hi": ["कोई एट्रिब्यूट जरूरी नहीं", "#[main]", "#[start]", "#[entry]"],
        "answer_en": "No attribute needed",
        "answer_hi": "कोई एट्रिब्यूट जरूरी नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What does the ':' symbol indicate in function signatures?",
        "question_hi": "फंक्शन सिग्नेचर में ':' सिंबल क्या इंडिकेट करता है?",
        "options_en": ["Type annotation", "Return type", "Parameter separator", "Scope operator"],
        "options_hi": ["टाइप एनोटेशन", "रिटर्न टाइप", "पैरामीटर सेपरेटर", "स्कोप ऑपरेटर"],
        "answer_en": "Type annotation",
        "answer_hi": "टाइप एनोटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which collection maintains insertion order?",
        "question_hi": "कौन सा कलेक्शन इन्सर्शन ऑर्डर मेंटेन करता है?",
        "options_en": ["Vec", "HashMap", "BTreeMap", "HashSet"],
        "options_hi": ["Vec", "HashMap", "BTreeMap", "HashSet"],
        "answer_en": "Vec",
        "answer_hi": "Vec",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of 'std::mem::size_of'?",
        "question_hi": "'std::mem::size_of' का उद्देश्य क्या है?",
        "options_en": ["Get size of type in bytes", "Memory allocation", "Size calculation", "Type checking"],
        "options_hi": ["टाइप का साइज बाइट्स में पाना", "मेमोरी अलोकेशन", "साइज कैलकुलेशन", "टाइप चेकिंग"],
        "answer_en": "Get size of type in bytes",
        "answer_hi": "टाइप का साइज बाइट्स में पाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which operator is used for bitwise AND?",
        "question_hi": "बिटवाइज AND के लिए किस ऑपरेटर का उपयोग करते हैं?",
        "options_en": ["&", "&&", "and", "bitand"],
        "options_hi": ["&", "&&", "and", "bitand"],
        "answer_en": "&",
        "answer_hi": "&",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What does '#[derive(Debug)]' do?",
        "question_hi": "'#[derive(Debug)]' क्या करता है?",
        "options_en": ["Auto-implement Debug trait", "Enable debugging", "Add debug symbols", "Compile with debug info"],
        "options_hi": ["Debug trait ऑटो-इम्प्लीमेंट करता है", "डीबगिंग एनेबल करता है", "डीबग सिंबल्स एड करता है", "डीबग इनफो के साथ कम्पाइल करता है"],
        "answer_en": "Auto-implement Debug trait",
        "answer_hi": "Debug trait ऑटो-इम्प्लीमेंट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which method reverses a vector in place?",
        "question_hi": "कौन सी मेथड वेक्टर को इन-प्लेस रिवर्स करती है?",
        "options_en": ["reverse()", "rev()", "flip()", "invert()"],
        "options_hi": ["reverse()", "rev()", "flip()", "invert()"],
        "answer_en": "reverse()",
        "answer_hi": "reverse()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the default floating-point type?",
        "question_hi": "डिफॉल्ट फ्लोटिंग-पॉइंट टाइप क्या है?",
        "options_en": ["f64", "f32", "float", "double"],
        "options_hi": ["f64", "f32", "float", "double"],
        "answer_en": "f64",
        "answer_hi": "f64",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which keyword imports items from other modules?",
        "question_hi": "दूसरे मॉड्यूल्स से आइटम्स इम्पोर्ट करने के लिए किस कीवर्ड का उपयोग करते हैं?",
        "options_en": ["use", "import", "include", "bring"],
        "options_hi": ["use", "import", "include", "bring"],
        "answer_en": "use",
        "answer_hi": "use",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What does 'Option<T>' represent?",
        "question_hi": "'Option<T>' क्या रिप्रेजेंट करता है?",
        "options_en": ["Optional value that might be absent", "Required value", "Error value", "Default value"],
        "options_hi": ["ऑप्शनल वैल्यू जो अनएवेलेबल हो सकती है", "रिक्वायर्ड वैल्यू", "एरर वैल्यू", "डिफॉल्ट वैल्यू"],
        "answer_en": "Optional value that might be absent",
        "answer_hi": "ऑप्शनल वैल्यू जो अनएवेलेबल हो सकती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which method creates a vector with repeated values?",
        "question_hi": "रिपीटेड वैल्यूज के साथ वेक्टर बनाने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["vec![value; count]", "Vec::repeat(value, count)", "Vec::with_elements(value, count)", "vector!(value, count)"],
        "options_hi": ["vec![value; count]", "Vec::repeat(value, count)", "Vec::with_elements(value, count)", "vector!(value, count)"],
        "answer_en": "vec![value; count]",
        "answer_hi": "vec![value; count]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of 'std::fs::read_to_string'?",
        "question_hi": "'std::fs::read_to_string' का उद्देश्य क्या है?",
        "options_en": ["Read file contents as string", "Convert to string", "File to string conversion", "Read file metadata"],
        "options_hi": ["फाइल कंटेंट्स को स्ट्रिंग के रूप में पढ़ना", "स्ट्रिंग में कन्वर्ट करना", "फाइल टू स्ट्रिंग कन्वर्जन", "फाइल मेटाडेटा पढ़ना"],
        "answer_en": "Read file contents as string",
        "answer_hi": "फाइल कंटेंट्स को स्ट्रिंग के रूप में पढ़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which trait enables the '+' operator for strings?",
        "question_hi": "स्ट्रिंग्स के लिए '+' ऑपरेटर को कौन सा trait एनेबल करता है?",
        "options_en": ["Add", "Concat", "Append", "Plus"],
        "options_hi": ["Add", "Concat", "Append", "Plus"],
        "answer_en": "Add",
        "answer_hi": "Add",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What does '&[T]' represent?",
        "question_hi": "'&[T]' क्या रिप्रेजेंट करता है?",
        "options_en": ["Slice of elements", "Array reference", "Vector slice", "All of the above"],
        "options_hi": ["एलिमेंट्स की स्लाइस", "ऐरे रेफरेंस", "वेक्टर स्लाइस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which method removes whitespace from string ends?",
        "question_hi": "स्ट्रिंग के दोनों सिरों से व्हाइटस्पेस रिमूव करने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["trim()", "strip()", "clean()", "remove_whitespace()"],
        "options_hi": ["trim()", "strip()", "clean()", "remove_whitespace()"],
        "answer_en": "trim()",
        "answer_hi": "trim()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of 'std::process::exit'?",
        "question_hi": "'std::process::exit' का उद्देश्य क्या है?",
        "options_en": ["Terminate program with exit code", "Exit function", "Stop thread", "Kill process"],
        "options_hi": ["एग्जिट कोड के साथ प्रोग्राम टर्मिनेट करना", "फंक्शन से बाहर निकलना", "थ्रेड रोकना", "प्रोसेस किल करना"],
        "answer_en": "Terminate program with exit code",
        "answer_hi": "एग्जिट कोड के साथ प्रोग्राम टर्मिनेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which macro is used for compile-time assertions?",
        "question_hi": "कम्पाइल-टाइम असेर्शन्स के लिए किस मैक्रो का उपयोग करते हैं?",
        "options_en": ["assert!()", "debug_assert!()", "static_assert!()", "compile_assert!()"],
        "options_hi": ["assert!()", "debug_assert!()", "static_assert!()", "compile_assert!()"],
        "answer_en": "assert!()",
        "answer_hi": "assert!()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What does 'Send' trait indicate?",
        "question_hi": "'Send' trait क्या इंडिकेट करता है?",
        "options_en": ["Safe to transfer between threads", "Can be sent over network", "Serializable", "Copyable"],
        "options_hi": ["थ्रेड्स के बीच ट्रांसफर करने के लिए सेफ", "नेटवर्क पर भेजा जा सकता है", "सीरियलाइज़ेबल", "कॉपीएबल"],
        "answer_en": "Safe to transfer between threads",
        "answer_hi": "थ्रेड्स के बीच ट्रांसफर करने के लिए सेफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which method finds an element in a vector?",
        "question_hi": "वेक्टर में एलिमेंट ढूंढने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["contains()", "find()", "search()", "locate()"],
        "options_hi": ["contains()", "find()", "search()", "locate()"],
        "answer_en": "contains()",
        "answer_hi": "contains()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of 'std::env::args'?",
        "question_hi": "'std::env::args' का उद्देश्य क्या है?",
        "options_en": ["Access command-line arguments", "Environment variables", "Program arguments", "System parameters"],
        "options_hi": ["कमांड-लाइन आर्ग्युमेंट्स एक्सेस करना", "एनवायरनमेंट वेरिएबल्स", "प्रोग्राम आर्ग्युमेंट्स", "सिस्टम पैरामीटर्स"],
        "answer_en": "Access command-line arguments",
        "answer_hi": "कमांड-लाइन आर्ग्युमेंट्स एक्सेस करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which trait enables method calls with dot notation?",
        "question_hi": "डॉट नोटेशन के साथ मेथड कॉल्स को कौन सा trait एनेबल करता है?",
        "options_en": ["Automatically for all types", "Call", "Method", "Invoke"],
        "options_hi": ["सभी टाइप्स के लिए ऑटोमैटिकली", "Call", "Method", "Invoke"],
        "answer_en": "Automatically for all types",
        "answer_hi": "सभी टाइप्स के लिए ऑटोमैटिकली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What does 'Box<T>' provide?",
        "question_hi": "'Box<T>' क्या प्रोवाइड करता है?",
        "options_en": ["Heap allocation with ownership", "Reference counting", "Smart pointer", "Memory management"],
        "options_hi": ["ओनरशिप के साथ हीप अलोकेशन", "रेफरेन्स काउंटिंग", "स्मार्ट पॉइंटर", "मेमोरी मैनेजमेंट"],
        "answer_en": "Heap allocation with ownership",
        "answer_hi": "ओनरशिप के साथ हीप अलोकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which method converts a string to bytes?",
        "question_hi": "स्ट्रिंग को बाइट्स में कन्वर्ट करने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["as_bytes()", "to_bytes()", "bytes()", "into_bytes()"],
        "options_hi": ["as_bytes()", "to_bytes()", "bytes()", "into_bytes()"],
        "answer_en": "as_bytes()",
        "answer_hi": "as_bytes()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of 'std::collections::HashSet'?",
        "question_hi": "'std::collections::HashSet' का उद्देश्य क्या है?",
        "options_en": ["Store unique elements", "Key-value storage", "Sorted elements", "Duplicate elements"],
        "options_hi": ["यूनिक एलिमेंट्स स्टोर करना", "की-वैल्यू स्टोरेज", "सॉर्टेड एलिमेंट्स", "डुप्लिकेट एलिमेंट्स"],
        "answer_en": "Store unique elements",
        "answer_hi": "यूनिक एलिमेंट्स स्टोर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which operator is used for dereferencing?",
        "question_hi": "डिरेफरेंसिंग के लिए किस ऑपरेटर का उपयोग करते हैं?",
        "options_en": ["*", "&", "->", "::"],
        "options_hi": ["*", "&", "->", "::"],
        "answer_en": "*",
        "answer_hi": "*",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What does 'Sync' trait indicate?",
        "question_hi": "'Sync' trait क्या इंडिकेट करता है?",
        "options_en": ["Safe to share references between threads", "Synchronized access", "Thread-safe", "All of the above"],
        "options_hi": ["थ्रेड्स के बीच रेफरेन्सेज शेयर करने के लिए सेफ", "सिंक्रोनाइज्ड एक्सेस", "थ्रेड-सेफ", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which method creates a string from bytes?",
        "question_hi": "बाइट्स से स्ट्रिंग बनाने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["String::from_utf8()", "str::from_bytes()", "bytes.to_string()", "String::new(bytes)"],
        "options_hi": ["String::from_utf8()", "str::from_bytes()", "bytes.to_string()", "String::new(bytes)"],
        "answer_en": "String::from_utf8()",
        "answer_hi": "String::from_utf8()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of 'std::io::stdin'?",
        "question_hi": "'std::io::stdin' का उद्देश्य क्या है?",
        "options_en": ["Standard input handle", "File input", "User input", "Console input"],
        "options_hi": ["स्टैण्डर्ड इनपुट हैंडल", "फाइल इनपुट", "यूजर इनपुट", "कंसोल इनपुट"],
        "answer_en": "Standard input handle",
        "answer_hi": "स्टैण्डर्ड इनपुट हैंडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which attribute prevents dead code warnings?",
        "question_hi": "डेड कोड वार्निंग्स को प्रिवेंट करने के लिए किस एट्रिब्यूट का उपयोग करते हैं?",
        "options_en": ["#[allow(dead_code)]", "#[no_dead_code]", "#[ignore(dead_code)]", "#[suppress(dead_code)]"],
        "options_hi": ["#[allow(dead_code)]", "#[no_dead_code]", "#[ignore(dead_code)]", "#[suppress(dead_code)]"],
        "answer_en": "#[allow(dead_code)]",
        "answer_hi": "#[allow(dead_code)]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What does 'Rc<T>' stand for?",
        "question_hi": "'Rc<T>' का क्या मतलब है?",
        "options_en": ["Reference Counted", "Rust Counter", "Resource Counter", "Reference Container"],
        "options_hi": ["रेफरेन्स काउंटेड", "रस्ट काउंटर", "रिसोर्स काउंटर", "रेफरेन्स कंटेनर"],
        "answer_en": "Reference Counted",
        "answer_hi": "रेफरेन्स काउंटेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which method sorts a vector in place?",
        "question_hi": "वेक्टर को इन-प्लेस सॉर्ट करने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["sort()", "order()", "arrange()", "sorted()"],
        "options_hi": ["sort()", "order()", "arrange()", "sorted()"],
        "answer_en": "sort()",
        "answer_hi": "sort()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of 'std::mem::drop'?",
        "question_hi": "'std::mem::drop' का उद्देश्य क्या है?",
        "options_en": ["Explicitly destroy a value", "Memory deallocation", "Drop trait implementation", "All of the above"],
        "options_hi": ["एक्सप्लिसिटली वैल्यू डिस्ट्रॉय करना", "मेमोरी डीलोकेशन", "Drop trait इम्प्लीमेंटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which trait enables the '==' operator?",
        "question_hi": "'==' ऑपरेटर को कौन सा trait एनेबल करता है?",
        "options_en": ["PartialEq", "Eq", "Equal", "Both PartialEq and Eq"],
        "options_hi": ["PartialEq", "Eq", "Equal", "PartialEq और Eq दोनों"],
        "answer_en": "PartialEq",
        "answer_hi": "PartialEq",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What does 'Arc<T>' provide over 'Rc<T>'?",
        "question_hi": "'Arc<T>' क्या प्रोवाइड करता है जो 'Rc<T>' नहीं करता?",
        "options_en": ["Thread-safe reference counting", "Atomic operations", "Multi-threaded usage", "All of the above"],
        "options_hi": ["थ्रेड-सेफ रेफरेन्स काउंटिंग", "एटोमिक ऑपरेशन्स", "मल्टी-थ्रेडेड यूसेज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which method checks if a file exists?",
        "question_hi": "फाइल एक्सिस्ट करती है या नहीं चेक करने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["Path::exists()", "fs::exists()", "file_exists()", "check_file()"],
        "options_hi": ["Path::exists()", "fs::exists()", "file_exists()", "check_file()"],
        "answer_en": "Path::exists()",
        "answer_hi": "Path::exists()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of 'std::cell::RefCell'?",
        "question_hi": "'std::cell::RefCell' का उद्देश्य क्या है?",
        "options_en": ["Interior mutability with runtime checks", "Mutable references", "Cell mutation", "All of the above"],
        "options_hi": ["रनटाइम चेक्स के साथ इंटीरियर म्यूटेबिलिटी", "म्यूटेबल रेफरेन्सेज", "सेल म्यूटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which method creates a path from a string?",
        "question_hi": "स्ट्रिंग से पाथ बनाने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["Path::new()", "Path::from()", "as_path()", "to_path()"],
        "options_hi": ["Path::new()", "Path::from()", "as_path()", "to_path()"],
        "answer_en": "Path::new()",
        "answer_hi": "Path::new()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What does 'Cow' stand for in 'std::borrow::Cow'?",
        "question_hi": "'std::borrow::Cow' में 'Cow' का क्या मतलब है?",
        "options_en": ["Clone On Write", "Copy On Write", "Cow Ownership Wrapper", "Copy Or Write"],
        "options_hi": ["क्लोन ऑन राइट", "कॉपी ऑन राइट", "काउ ओनरशिप रैपर", "कॉपी ओर राइट"],
        "answer_en": "Clone On Write",
        "answer_hi": "क्लोन ऑन राइट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which method converts a vector to an array?",
        "question_hi": "वेक्टर को ऐरे में कन्वर्ट करने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["try_into()", "to_array()", "as_array()", "into_array()"],
        "options_hi": ["try_into()", "to_array()", "as_array()", "into_array()"],
        "answer_en": "try_into()",
        "answer_hi": "try_into()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of 'std::sync::Mutex'?",
        "question_hi": "'std::sync::Mutex' का उद्देश्य क्या है?",
        "options_en": ["Thread-safe mutual exclusion", "Locking mechanism", "Synchronized access", "All of the above"],
        "options_hi": ["थ्रेड-सेफ म्यूचुअल एक्सक्लूजन", "लॉकिंग मेकेनिज्म", "सिंक्रोनाइज्ड एक्सेस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which trait enables the '{}' formatting?",
        "question_hi": "'{}' फॉर्मेटिंग को कौन सा trait एनेबल करता है?",
        "options_en": ["Display", "Debug", "Format", "Both Display and Debug"],
        "options_hi": ["Display", "Debug", "Format", "Display और Debug दोनों"],
        "answer_en": "Display",
        "answer_hi": "Display",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What does 'std::result::Result<T, E>' represent?",
        "question_hi": "'std::result::Result<T, E>' क्या रिप्रेजेंट करता है?",
        "options_en": ["Operation that might fail", "Success or error", "Error handling type", "All of the above"],
        "options_hi": ["ऑपरेशन जो फेल हो सकता है", "सक्सेस या एरर", "एरर हैंडलिंग टाइप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which method creates a directory?",
        "question_hi": "डायरेक्टरी बनाने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["fs::create_dir()", "mkdir()", "dir::create()", "fs::mkdir()"],
        "options_hi": ["fs::create_dir()", "mkdir()", "dir::create()", "fs::mkdir()"],
        "answer_en": "fs::create_dir()",
        "answer_hi": "fs::create_dir()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of 'std::iter::FromIterator'?",
        "question_hi": "'std::iter::FromIterator' का उद्देश्य क्या है?",
        "options_en": ["Create collection from iterator", "Iterator conversion", "Collection construction", "All of the above"],
        "options_hi": ["इटरेटर से कलेक्शन बनाना", "इटरेटर कन्वर्जन", "कलेक्शन कंस्ट्रक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Which method gets the current working directory?",
        "question_hi": "करंट वर्किंग डायरेक्टरी पाने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["env::current_dir()", "os::cwd()", "path::current()", "fs::cwd()"],
        "options_hi": ["env::current_dir()", "os::cwd()", "path::current()", "fs::cwd()"],
        "answer_en": "env::current_dir()",
        "answer_hi": "env::current_dir()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What does 'std::convert::AsRef' do?",
        "question_hi": "'std::convert::AsRef' क्या करता है?",
        "options_en": ["Cheap reference-to-reference conversion", "Type conversion", "Reference conversion", "All of the above"],
        "options_hi": ["चीप रेफरेंस-टू-रेफरेंस कन्वर्जन", "टाइप कन्वर्जन", "रेफरेंस कन्वर्जन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which method removes a file?",
        "question_hi": "फाइल रिमूव करने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["fs::remove_file()", "fs::delete()", "file::remove()", "fs::rm()"],
        "options_hi": ["fs::remove_file()", "fs::delete()", "file::remove()", "fs::rm()"],
        "answer_en": "fs::remove_file()",
        "answer_hi": "fs::remove_file()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of 'std::default::Default'?",
        "question_hi": "'std::default::Default' का उद्देश्य क्या है?",
        "options_en": ["Provide default values", "Default construction", "Initialization", "All of the above"],
        "options_hi": ["डिफॉल्ट वैल्यूज प्रोवाइड करना", "डिफॉल्ट कंस्ट्रक्शन", "इनिशियलाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which trait enables the '>' operator?",
        "question_hi": "'>' ऑपरेटर को कौन सा trait एनेबल करता है?",
        "options_en": ["PartialOrd", "Ord", "Greater", "Compare"],
        "options_hi": ["PartialOrd", "Ord", "Greater", "Compare"],
        "answer_en": "PartialOrd",
        "answer_hi": "PartialOrd",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What does 'std::boxed::Box' provide?",
        "question_hi": "'std::boxed::Box' क्या प्रोवाइड करता है?",
        "options_en": ["Heap allocation", "Owned pointer", "Automatic deallocation", "All of the above"],
        "options_hi": ["हीप अलोकेशन", "ओन्ड पॉइंटर", "ऑटोमैटिक डीलोकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which method converts a string to a number?",
        "question_hi": "स्ट्रिंग को नंबर में कन्वर्ट करने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["parse()", "to_int()", "convert()", "as_number()"],
        "options_hi": ["parse()", "to_int()", "convert()", "as_number()"],
        "answer_en": "parse()",
        "answer_hi": "parse()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of 'std::marker::PhantomData'?",
        "question_hi": "'std::marker::PhantomData' का उद्देश्य क्या है?",
        "options_en": ["Mark unused type parameters", "Ghost data", "Type system trick", "All of the above"],
        "options_hi": ["अनयूज्ड टाइप पैरामीटर्स मार्क करना", "घोस्ट डेटा", "टाइप सिस्टम ट्रिक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which method creates a thread with a closure?",
        "question_hi": "क्लोजर के साथ थ्रेड बनाने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["thread::spawn()", "Thread::new()", "spawn_thread()", "create_thread()"],
        "options_hi": ["thread::spawn()", "Thread::new()", "spawn_thread()", "create_thread()"],
        "answer_en": "thread::spawn()",
        "answer_hi": "thread::spawn()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What does 'std::ops::Deref' enable?",
        "question_hi": "'std::ops::Deref' क्या एनेबल करता है?",
        "options_en": ["Dereference operator overloading", "* operator", "Smart pointer behavior", "All of the above"],
        "options_hi": ["डिरेफरेंस ऑपरेटर ओवरलोडिंग", "* ऑपरेटर", "स्मार्ट पॉइंटर बिहेवियर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which method checks if a path is a file?",
        "question_hi": "पाथ फाइल है या नहीं चेक करने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["is_file()", "file()", "is_file", "check_file()"],
        "options_hi": ["is_file()", "file()", "is_file", "check_file()"],
        "answer_en": "is_file()",
        "answer_hi": "is_file()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of 'std::string::ToString'?",
        "question_hi": "'std::string::ToString' का उद्देश्य क्या है?",
        "options_en": ["Convert to string", "String representation", "Display conversion", "All of the above"],
        "options_hi": ["स्ट्रिंग में कन्वर्ट करना", "स्ट्रिंग रिप्रेजेंटेशन", "डिस्प्ले कन्वर्जन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which trait enables the '[]' indexing?",
        "question_hi": "'[]' इंडेक्सिंग को कौन सा trait एनेबल करता है?",
        "options_en": ["Index", "IndexMut", "Both Index and IndexMut", "Slice"],
        "options_hi": ["Index", "IndexMut", "Index और IndexMut दोनों", "Slice"],
        "answer_en": "Both Index and IndexMut",
        "answer_hi": "Index और IndexMut दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What does 'std::vec::Vec::with_capacity' do?",
        "question_hi": "'std::vec::Vec::with_capacity' क्या करता है?",
        "options_en": ["Create vector with initial capacity", "Pre-allocate memory", "Capacity optimization", "All of the above"],
        "options_hi": ["इनिशियल कैपेसिटी के साथ वेक्टर बनाना", "प्री-अलोकेट मेमोरी", "कैपेसिटी ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which method converts a number to a string?",
        "question_hi": "नंबर को स्ट्रिंग में कन्वर्ट करने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["to_string()", "as_string()", "into_string()", "string()"],
        "options_hi": ["to_string()", "as_string()", "into_string()", "string()"],
        "answer_en": "to_string()",
        "answer_hi": "to_string()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of 'std::cmp::PartialEq'?",
        "question_hi": "'std::cmp::PartialEq' का उद्देश्य क्या है?",
        "options_en": ["Partial equality comparison", "== operator", "Equality check", "All of the above"],
        "options_hi": ["पार्शियल इक्वलिटी कम्पेरिजन", "== ऑपरेटर", "इक्वलिटी चेक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which method creates a hash map from key-value pairs?",
        "question_hi": "की-वैल्यू पेयर्स से हैश मैप बनाने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["HashMap::from()", "collect()", "HashMap::new()", "Both HashMap::from() and collect()"],
        "options_hi": ["HashMap::from()", "collect()", "HashMap::new()", "HashMap::from() और collect() दोनों"],
        "answer_en": "Both HashMap::from() and collect()",
        "answer_hi": "HashMap::from() और collect() दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What does 'std::option::Option::unwrap_or' do?",
        "question_hi": "'std::option::Option::unwrap_or' क्या करता है?",
        "options_en": ["Unwrap or use default value", "Safe unwrapping", "Default value fallback", "All of the above"],
        "options_hi": ["अनरैप या डिफॉल्ट वैल्यू यूज करना", "सेफ अनरैपिंग", "डिफॉल्ट वैल्यू फॉलबैक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which method gets the length of a string in bytes?",
        "question_hi": "स्ट्रिंग की लेंथ बाइट्स में पाने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["len()", "bytes().len()", "as_bytes().len()", "All of the above"],
        "options_hi": ["len()", "bytes().len()", "as_bytes().len()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of 'std::clone::Clone'?",
        "question_hi": "'std::clone::Clone' का उद्देश्य क्या है?",
        "options_en": ["Explicit duplication", "Deep copy", "Clone method", "All of the above"],
        "options_hi": ["एक्सप्लिसिट डुप्लिकेशन", "डीप कॉपी", "क्लोन मेथड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which trait enables the '!=' operator?",
        "question_hi": "'!=' ऑपरेटर को कौन सा trait एनेबल करता है?",
        "options_en": ["PartialEq", "Eq", "NotEqual", "Both PartialEq and Eq"],
        "options_hi": ["PartialEq", "Eq", "NotEqual", "PartialEq और Eq दोनों"],
        "answer_en": "PartialEq",
        "answer_hi": "PartialEq",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What does 'std::mem::swap' do?",
        "question_hi": "'std::mem::swap' क्या करता है?",
        "options_en": ["Swap values of two variables", "Exchange values", "Memory swap", "All of the above"],
        "options_hi": ["दो वेरिएबल्स की वैल्यूज स्वैप करना", "वैल्यूज एक्सचेंज करना", "मेमोरी स्वैप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which method creates a string from a character?",
        "question_hi": "कैरेक्टर से स्ट्रिंग बनाने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["char::to_string()", "String::from()", "char.into()", "All of the above"],
        "options_hi": ["char::to_string()", "String::from()", "char.into()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of 'std::convert::Into'?",
        "question_hi": "'std::convert::Into' का उद्देश्य क्या है?",
        "options_en": ["Type conversion", "Value transformation", "Into method", "All of the above"],
        "options_hi": ["टाइप कन्वर्जन", "वैल्यू ट्रांसफॉर्मेशन", "Into मेथड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which method checks if a vector contains an element?",
        "question_hi": "वेक्टर में एलिमेंट है या नहीं चेक करने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["contains()", "has()", "includes()", "exists()"],
        "options_hi": ["contains()", "has()", "includes()", "exists()"],
        "answer_en": "contains()",
        "answer_hi": "contains()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What does 'std::ops::Add' enable?",
        "question_hi": "'std::ops::Add' क्या एनेबल करता है?",
        "options_en": ["+ operator overloading", "Addition operation", "Add trait", "All of the above"],
        "options_hi": ["+ ऑपरेटर ओवरलोडिंग", "ऐडिशन ऑपरेशन", "Add trait", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which method gets the first element of a vector?",
        "question_hi": "वेक्टर का फर्स्ट एलिमेंट पाने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["first()", "get(0)", "front()", "Both first() and get(0)"],
        "options_hi": ["first()", "get(0)", "front()", "first() और get(0) दोनों"],
        "answer_en": "Both first() and get(0)",
        "answer_hi": "first() और get(0) दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of 'std::iter::Iterator::map'?",
        "question_hi": "'std::iter::Iterator::map' का उद्देश्य क्या है?",
        "options_en": ["Transform iterator elements", "Map function over iterator", "Element transformation", "All of the above"],
        "options_hi": ["इटरेटर एलिमेंट्स ट्रांसफॉर्म करना", "इटरेटर पर मैप फंक्शन", "एलिमेंट ट्रांसफॉर्मेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which trait enables the '-' operator?",
        "question_hi": "'-' ऑपरेटर को कौन सा trait एनेबल करता है?",
        "options_en": ["Sub", "Subtract", "Minus", "Sub trait"],
        "options_hi": ["Sub", "Subtract", "Minus", "Sub trait"],
        "answer_en": "Sub",
        "answer_hi": "Sub",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What does 'std::result::Result::ok' do?",
        "question_hi": "'std::result::Result::ok' क्या करता है?",
        "options_en": ["Convert Result to Option", "Extract Ok value", "Success conversion", "All of the above"],
        "options_hi": ["Result को Option में कन्वर्ट करना", "Ok वैल्यू एक्सट्रैक्ट करना", "सक्सेस कन्वर्जन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which method creates a slice from a vector?",
        "question_hi": "वेक्टर से स्लाइस बनाने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["as_slice()", "slice()", "to_slice()", "get_slice()"],
        "options_hi": ["as_slice()", "slice()", "to_slice()", "get_slice()"],
        "answer_en": "as_slice()",
        "answer_hi": "as_slice()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of 'std::cmp::Ord'?",
        "question_hi": "'std::cmp::Ord' का उद्देश्य क्या है?",
        "options_en": ["Total ordering", "Comparison operations", "Sorting", "All of the above"],
        "options_hi": ["टोटल ऑर्डरिंग", "कम्पेरिजन ऑपरेशन्स", "सॉर्टिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which method removes duplicate elements from a vector?",
        "question_hi": "वेक्टर से डुप्लिकेट एलिमेंट्स रिमूव करने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["dedup()", "unique()", "remove_duplicates()", "distinct()"],
        "options_hi": ["dedup()", "unique()", "remove_duplicates()", "distinct()"],
        "answer_en": "dedup()",
        "answer_hi": "dedup()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What does 'std::option::Option::and_then' do?",
        "question_hi": "'std::option::Option::and_then' क्या करता है?",
        "options_en": ["Chain operations on Option", "Flat map", "Monadic bind", "All of the above"],
        "options_hi": ["Option पर ऑपरेशन्स चेन करना", "फ्लैट मैप", "मोनैडिक बाइंड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which method gets the last element of a vector?",
        "question_hi": "वेक्टर का लास्ट एलिमेंट पाने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["last()", "get(len-1)", "back()", "Both last() and get(len-1)"],
        "options_hi": ["last()", "get(len-1)", "back()", "last() और get(len-1) दोनों"],
        "answer_en": "Both last() and get(len-1)",
        "answer_hi": "last() और get(len-1) दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of 'std::convert::From'?",
        "question_hi": "'std::convert::From' का उद्देश्य क्या है?",
        "options_en": ["Type conversion", "From trait", "Conversion implementation", "All of the above"],
        "options_hi": ["टाइप कन्वर्जन", "From trait", "कन्वर्जन इम्प्लीमेंटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which trait enables the '*' multiplication operator?",
        "question_hi": "'*' मल्टिप्लिकेशन ऑपरेटर को कौन सा trait एनेबल करता है?",
        "options_en": ["Mul", "Multiply", "Times", "Product"],
        "options_hi": ["Mul", "Multiply", "Times", "Product"],
        "answer_en": "Mul",
        "answer_hi": "Mul",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What does 'std::vec::Vec::retain' do?",
        "question_hi": "'std::vec::Vec::retain' क्या करता है?",
        "options_en": ["Keep elements matching predicate", "Filter in place", "Conditional retention", "All of the above"],
        "options_hi": ["प्रेडिकेट मैच करने वाले एलिमेंट्स रखना", "इन-प्लेस फिल्टर", "कंडीशनल रिटेंशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which method converts a vector to a heap?",
        "question_hi": "वेक्टर को हीप में कन्वर्ट करने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["into_boxed_slice()", "to_heap()", "boxed()", "heap()"],
        "options_hi": ["into_boxed_slice()", "to_heap()", "boxed()", "heap()"],
        "answer_en": "into_boxed_slice()",
        "answer_hi": "into_boxed_slice()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of 'std::ops::Range'?",
        "question_hi": "'std::ops::Range' का उद्देश्य क्या है?",
        "options_en": ["Represent a range", "Range type", "Interval representation", "All of the above"],
        "options_hi": ["रेंज रिप्रेजेंट करना", "रेंज टाइप", "इंटरवल रिप्रेजेंटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which method creates a string from a vector of bytes?",
        "question_hi": "बाइट्स के वेक्टर से स्ट्रिंग बनाने के लिए किस मेथड का उपयोग करते हैं?",
        "options_en": ["String::from_utf8()", "String::from_bytes()", "bytes.to_string()", "str::from_utf8()"],
        "options_hi": ["String::from_utf8()", "String::from_bytes()", "bytes.to_string()", "str::from_utf8()"],
        "answer_en": "String::from_utf8()",
        "answer_hi": "String::from_utf8()",
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