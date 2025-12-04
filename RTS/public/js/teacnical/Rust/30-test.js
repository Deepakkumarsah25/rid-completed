const questions =[
     {
        "num": 1,
        "question_en": "How do you handle errors with the '?' operator?",
        "question_hi": "'?' ऑपरेटर के साथ एरर कैसे हैंडल करते हैं?",
        "options_en": ["Propagate errors automatically", "Ignore errors", "Panic on errors", "Log errors"],
        "options_hi": ["एरर ऑटोमैटिकली प्रोपेगेट करना", "एरर इग्नोर करना", "एरर पर पैनिक करना", "एरर लॉग करना"],
        "answer_en": "Propagate errors automatically",
        "answer_hi": "एरर ऑटोमैटिकली प्रोपेगेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the purpose of the 'Cow' (Clone on Write) type?",
        "question_hi": "'Cow' (Clone on Write) टाइप का उद्देश्य क्या है?",
        "options_en": ["Efficient borrowing with optional cloning", "Automatic copying", "Memory allocation", "Thread synchronization"],
        "options_hi": ["ऑप्शनल क्लोनिंग के साथ एफिशिएंट बोरोइंग", "ऑटोमैटिक कॉपीिंग", "मेमोरी अलोकेशन", "थ्रेड सिंक्रोनाइज़ेशन"],
        "answer_en": "Efficient borrowing with optional cloning",
        "answer_hi": "ऑप्शनल क्लोनिंग के साथ एफिशिएंट बोरोइंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "How do you define a generic function in Rust?",
        "question_hi": "Rust में जेनरिक फंक्शन कैसे डिफाइन करते हैं?",
        "options_en": ["fn func<T>(param: T) -> T {}", "generic fn func<T>(param: T) {}", "fn func generic<T>(param: T) {}", "function<T> func(param: T) {}"],
        "options_hi": ["fn func<T>(param: T) -> T {}", "generic fn func<T>(param: T) {}", "fn func generic<T>(param: T) {}", "function<T> func(param: T) {}"],
        "answer_en": "fn func<T>(param: T) -> T {}",
        "answer_hi": "fn func<T>(param: T) -> T {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the purpose of the 'Mutex' type?",
        "question_hi": "'Mutex' टाइप का उद्देश्य क्या है?",
        "options_en": ["Thread-safe interior mutability", "Memory allocation", "Automatic locking", "Reference counting"],
        "options_hi": ["थ्रेड-सेफ इंटीरियर म्यूटेबिलिटी", "मेमोरी अलोकेशन", "ऑटोमैटिक लॉकिंग", "रिफरेन्स काउंटिंग"],
        "answer_en": "Thread-safe interior mutability",
        "answer_hi": "थ्रेड-सेफ इंटीरियर म्यूटेबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "How do you create a vector in Rust?",
        "question_hi": "Rust में वेक्टर कैसे बनाते हैं?",
        "options_en": ["let vec = vec![1, 2, 3];", "let vec = Vector::new();", "let vec = [1, 2, 3].to_vec();", "let vec = new_vec![1, 2, 3];"],
        "options_hi": ["let vec = vec![1, 2, 3];", "let vec = Vector::new();", "let vec = [1, 2, 3].to_vec();", "let vec = new_vec![1, 2, 3];"],
        "answer_en": "let vec = vec![1, 2, 3];",
        "answer_hi": "let vec = vec![1, 2, 3];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the purpose of the 'Option' type?",
        "question_hi": "'Option' टाइप का उद्देश्य क्या है?",
        "options_en": ["Represent optional values safely", "Error handling", "Boolean operations", "Pattern matching"],
        "options_hi": ["ऑप्शनल वैल्यू को सेफली रिप्रेजेंट करना", "एरर हैंडलिंग", "बूलियन ऑपरेशन", "पैटर्न मैचिंग"],
        "answer_en": "Represent optional values safely",
        "answer_hi": "ऑप्शनल वैल्यू को सेफली रिप्रेजेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num":7,
        "question_en": "How do you implement a trait for a type?",
        "question_hi": "टाइप के लिए trait कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["impl Trait for Type {}", "trait impl for Type {}", "Type implements Trait {}", "implement Trait for Type {}"],
        "options_hi": ["impl Trait for Type {}", "trait impl for Type {}", "Type implements Trait {}", "implement Trait for Type {}"],
        "answer_en": "impl Trait for Type {}",
        "answer_hi": "impl Trait for Type {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the purpose of the 'async/await' syntax?",
        "question_hi": "'async/await' सिंटैक्स का उद्देश्य क्या है?",
        "options_en": ["Asynchronous programming with futures", "Synchronous operations", "Error handling", "Memory management"],
        "options_hi": ["फ्यूचर के साथ एसिंक्रोनस प्रोग्रामिंग", "सिंक्रोनस ऑपरेशन", "एरर हैंडलिंग", "मेमोरी मैनेजमेंट"],
        "answer_en": "Asynchronous programming with futures",
        "answer_hi": "फ्यूचर के साथ एसिंक्रोनस प्रोग्रामिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "How do you create a HashMap in Rust?",
        "question_hi": "Rust में HashMap कैसे बनाते हैं?",
        "options_en": ["use std::collections::HashMap; let map = HashMap::new();", "let map = new HashMap();", "let map = HashMap::create();", "use HashMap; let map = HashMap()"],
        "options_hi": ["use std::collections::HashMap; let map = HashMap::new();", "let map = new HashMap();", "let map = HashMap::create();", "use HashMap; let map = HashMap()"],
        "answer_en": "use std::collections::HashMap; let map = HashMap::new();",
        "answer_hi": "use std::collections::HashMap; let map = HashMap::new();",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the purpose of the 'Drop' trait?",
        "question_hi": "'Drop' trait का उद्देश्य क्या है?",
        "options_en": ["Custom cleanup when value goes out of scope", "Automatic memory allocation", "Error handling", "Pattern matching"],
        "options_hi": ["वैल्यू के स्कोप से बाहर जाने पर कस्टम क्लीनअप", "ऑटोमैटिक मेमोरी अलोकेशन", "एरर हैंडलिंग", "पैटर्न मैचिंग"],
        "answer_en": "Custom cleanup when value goes out of scope",
        "answer_hi": "वैल्यू के स्कोप से बाहर जाने पर कस्टम क्लीनअप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of the 'Rc' smart pointer?",
        "question_hi": "'Rc' स्मार्ट पॉइंटर का उद्देश्य क्या है?",
        "options_en": ["Reference counting for single-threaded scenarios", "Thread-safe reference counting", "Automatic memory management", "Heap allocation"],
        "options_hi": ["सिंगल-थ्रेडेड सीनारियो के लिए रिफरेन्स काउंटिंग", "थ्रेड-सेफ रिफरेन्स काउंटिंग", "ऑटोमैटिक मेमोरी मैनेजमेंट", "हीप अलोकेशन"],
        "answer_en": "Reference counting for single-threaded scenarios",
        "answer_hi": "सिंगल-थ्रेडेड सीनारियो के लिए रिफरेन्स काउंटिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
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
        "num": 13,
        "question_en": "What is the purpose of the 'Cell' type?",
        "question_hi": "'Cell' टाइप का उद्देश्य क्या है?",
        "options_en": ["Interior mutability for Copy types", "Thread safety", "Automatic memory management", "Reference counting"],
        "options_hi": ["Copy टाइप के लिए इंटीरियर म्यूटेबिलिटी", "थ्रेड सेफ्टी", "ऑटोमैटिक मेमोरी मैनेजमेंट", "रिफरेन्स काउंटिंग"],
        "answer_en": "Interior mutability for Copy types",
        "answer_hi": "Copy टाइप के लिए इंटीरियर म्यूटेबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you create a string slice in Rust?",
        "question_hi": "Rust में स्ट्रिंग स्लाइस कैसे बनाते हैं?",
        "options_en": ["let s: &str = \"hello\";", "let s: str = \"hello\";", "let s = String::slice(\"hello\");", "let s = \"hello\".as_str();"],
        "options_hi": ["let s: &str = \"hello\";", "let s: str = \"hello\";", "let s = String::slice(\"hello\");", "let s = \"hello\".as_str();"],
        "answer_en": "let s: &str = \"hello\";",
        "answer_hi": "let s: &str = \"hello\";",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of the 'RefCell' type?",
        "question_hi": "'RefCell' टाइप का उद्देश्य क्या है?",
        "options_en": ["Interior mutability with runtime borrowing checks", "Compile-time borrowing checks", "Thread safety", "Automatic memory management"],
        "options_hi": ["रनटाइम बोरोइंग चेक के साथ इंटीरियर म्यूटेबिलिटी", "कम्पाइल-टाइम बोरोइंग चेक", "थ्रेड सेफ्टी", "ऑटोमैटिक मेमोरी मैनेजमेंट"],
        "answer_en": "Interior mutability with runtime borrowing checks",
        "answer_hi": "रनटाइम बोरोइंग चेक के साथ इंटीरियर म्यूटेबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you define a closure in Rust?",
        "question_hi": "Rust में क्लोजर कैसे डिफाइन करते हैं?",
        "options_en": ["let closure = |x| x + 1;", "closure |x| x + 1;", "let closure = function(x) { x + 1 };", "fn closure(x) { x + 1 }"],
        "options_hi": ["let closure = |x| x + 1;", "closure |x| x + 1;", "let closure = function(x) { x + 1 };", "fn closure(x) { x + 1 }"],
        "answer_en": "let closure = |x| x + 1;",
        "answer_hi": "let closure = |x| x + 1;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of the 'Send' trait?",
        "question_hi": "'Send' trait का उद्देश्य क्या है?",
        "options_en": ["Mark types that can be transferred across threads", "Automatic serialization", "Memory safety", "Error handling"],
        "options_hi": ["उन टाइप को मार्क करना जो थ्रेड के आर-पार ट्रांसफर हो सकते हैं", "ऑटोमैटिक सीरियलाइज़ेशन", "मेमोरी सेफ्टी", "एरर हैंडलिंग"],
        "answer_en": "Mark types that can be transferred across threads",
        "answer_hi": "उन टाइप को मार्क करना जो थ्रेड के आर-पार ट्रांसफर हो सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you create a new String in Rust?",
        "question_hi": "Rust में नई String कैसे बनाते हैं?",
        "options_en": ["let s = String::from(\"hello\");", "let s = new String(\"hello\");", "let s = \"hello\".to_string();", "Both A and C"],
        "options_hi": ["let s = String::from(\"hello\");", "let s = new String(\"hello\");", "let s = \"hello\".to_string();", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of the 'Sync' trait?",
        "question_hi": "'Sync' trait का उद्देश्य क्या है?",
        "options_en": ["Mark types safe to share references between threads", "Thread creation", "Memory allocation", "Error handling"],
        "options_hi": ["उन टाइप को मार्क करना जो थ्रेड के बीच रिफरेन्स शेयर करने के लिए सेफ हैं", "थ्रेड क्रिएशन", "मेमोरी अलोकेशन", "एरर हैंडलिंग"],
        "answer_en": "Mark types safe to share references between threads",
        "answer_hi": "उन टाइप को मार्क करना जो थ्रेड के बीच रिफरेन्स शेयर करने के लिए सेफ हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you iterate over a vector?",
        "question_hi": "वेक्टर पर कैसे इटरेट करते हैं?",
        "options_en": ["for item in &vec {}", "for item in vec.iter() {}", "for item in vec {}", "All of the above"],
        "options_hi": ["for item in &vec {}", "for item in vec.iter() {}", "for item in vec {}", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of Rust's turbofish syntax?",
        "question_hi": "Rust के टर्बोफिश सिंटैक्स का उद्देश्य क्या है?",
        "options_en": ["Explicit type annotation", "Generic parameter specification", "Method disambiguation", "All of the above"],
        "options_hi": ["एक्सप्लिसिट टाइप एनोटेशन", "जेनेरिक पैरामीटर स्पेसिफिकेशन", "मेथड डिसएम्बिगुएशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How does Rust handle string types?",
        "question_hi": "Rust स्ट्रिंग टाइप कैसे हैंडल करता है?",
        "options_en": ["String for owned", "&str for borrowed", "OS string variants", "All of the above"],
        "options_hi": ["ओन्ड के लिए String", "बोरोड के लिए &str", "OS स्ट्रिंग वेरिएंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the role of Rust's from/into traits?",
        "question_hi": "Rust के from/into ट्रेट की क्या भूमिका है?",
        "options_en": ["Type conversion", "Trait coherence", "API ergonomics", "All of the above"],
        "options_hi": ["टाइप कन्वर्जन", "ट्रेट कोहरेन्स", "API एर्गोनॉमिक्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How does Rust implement iterator adapters?",
        "question_hi": "Rust इटरेटर एडाप्टर कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Lazy evaluation", "Method chaining", "Zero-cost abstraction", "All of the above"],
        "options_hi": ["लेजी एवैल्यूएशन", "मेथड चेनिंग", "जीरो-कॉस्ट एब्स्ट्रैक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of Rust's cfg attribute?",
        "question_hi": "Rust के cfg एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation", "Platform-specific code", "Feature gating", "All of the above"],
        "options_hi": ["कंडीशनल कंपाइलेशन", "प्लेटफॉर्म-स्पेसिफिक कोड", "फीचर गेटिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How does Rust handle FFI with C?",
        "question_hi": "Rust C के साथ FFI कैसे हैंडल करता है?",
        "options_en": ["Extern blocks", "C-compatible types", "Binding generation", "All of the above"],
        "options_hi": ["एक्सटर्न ब्लॉक", "C-कंपेटिबल टाइप", "बाइंडिंग जनरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the role of Rust's never type?",
        "question_hi": "Rust के never टाइप की क्या भूमिका है?",
        "options_en": ["Represent divergence", "Match exhaustiveness", "Type system completeness", "All of the above"],
        "options_hi": ["डाइवर्जेंस रिप्रेजेंट", "मैच एक्जॉस्टिवनेस", "टाइप सिस्टम कम्प्लीटनेस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How does Rust implement const generics?",
        "question_hi": "Rust कॉन्स्ट जेनेरिक्स कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Compile-time values", "Array length parameterization", "Type-level integers", "All of the above"],
        "options_hi": ["कंपाइल-टाइम वैल्यू", "ऐरे लेंथ पैरामीटराइजेशन", "टाइप-लेवल इंटीजर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of Rust's dyn keyword?",
        "question_hi": "Rust के dyn कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Trait object indication", "Dynamic dispatch", "Type erasure", "All of the above"],
        "options_hi": ["ट्रेट ऑब्जेक्ट इंडिकेशन", "डायनामिक डिस्पैच", "टाइप इरेज़र", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How does Rust handle SIMD operations?",
        "question_hi": "Rust SIMD ऑपरेशन कैसे हैंडल करता है?",
        "options_en": ["Architecture-specific intrinsics", "Portable simd", "Compiler optimizations", "All of the above"],
        "options_hi": ["आर्किटेक्चर-स्पेसिफिक इंट्रिंसिक", "पोर्टेबल simd", "कंपाइलर ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the role of Rust's associated types?",
        "question_hi": "Rust के एसोसिएटेड टाइप की क्या भूमिका है?",
        "options_en": ["Type family definition", "Trait output types", "Generic abstraction", "All of the above"],
        "options_hi": ["टाइप फैमिली डेफिनिशन", "ट्रेट आउटपुट टाइप", "जेनेरिक एब्स्ट्रैक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How does Rust implement memory layout control?",
        "question_hi": "Rust मेमोरी लेआउट कंट्रोल कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Repr attributes", "Field ordering", "Padding control", "All of the above"],
        "options_hi": ["Repr एट्रिब्यूट", "फील्ड ऑर्डरिंग", "पैडिंग कंट्रोल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of Rust's unsafe traits?",
        "question_hi": "Rust के unsafe ट्रेट का उद्देश्य क्या है?",
        "options_en": ["Invariant requirements", "Safety contracts", "Manual implementation", "All of the above"],
        "options_hi": ["इनवेरिएंट रिक्वायरमेंट", "सेफ्टी कॉन्ट्रैक्ट", "मैन्युअल इम्प्लीमेंटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How does Rust handle stack unwinding?",
        "question_hi": "Rust स्टैक अनवाइंडिंग कैसे हैंडल करता है?",
        "options_en": ["Panic mechanism", "Drop guarantees", "Unwind safety", "All of the above"],
        "options_hi": ["पैनिक मैकेनिज्म", "ड्रॉप गारंटी", "अनवाइंड सेफ्टी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the role of Rust's coherence rules?",
        "question_hi": "Rust के कोहरेन्स रूल की क्या भूमिका है?",
        "options_en": ["Prevent orphan rules", "Trait implementation", "Crate boundaries", "All of the above"],
        "options_hi": ["ऑर्फन रूल रोकना", "ट्रेट इम्प्लीमेंटेशन", "क्रेट बाउंड्री", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How does Rust implement custom allocators?",
        "question_hi": "Rust कस्टम अलोकेटर कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Global allocator trait", "Box with allocator", "No_std support", "All of the above"],
        "options_hi": ["ग्लोबल अलोकेटर ट्रेट", "अलोकेटर के साथ Box", "No_std सपोर्ट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of Rust's must_use attribute?",
        "question_hi": "Rust के must_use एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Prevent ignored results", "API design", "Error handling", "All of the above"],
        "options_hi": ["इग्नोर रिजल्ट रोकना", "API डिजाइन", "एरर हैंडलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How does Rust handle integer overflow?",
        "question_hi": "Rust इंटीजर ओवरफ्लो कैसे हैंडल करता है?",
        "options_en": ["Debug panic", "Release wrap", "Checked operations", "All of the above"],
        "options_hi": ["डिबग पैनिक", "रिलीज रैप", "चेक्ड ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the role of Rust's auto traits?",
        "question_hi": "Rust के ऑटो ट्रेट की क्या भूमिका है?",
        "options_en": ["Automatic implementation", "Marker traits", "Send/Sync derivation", "All of the above"],
        "options_hi": ["ऑटोमैटिक इम्प्लीमेंटेशन", "मार्कर ट्रेट", "Send/Sync डेरिवेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How does Rust implement procedural macros?",
        "question_hi": "Rust प्रोसीजरल मैक्रो कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Token stream manipulation", "Compile-time execution", "AST transformation", "All of the above"],
        "options_hi": ["टोकन स्ट्रीम मैनिपुलेशन", "कंपाइल-टाइम एक्सीक्यूशन", "AST ट्रांसफॉर्मेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of Rust's box syntax?",
        "question_hi": "Rust के बॉक्स सिंटैक्स का उद्देश्य क्या है?",
        "options_en": ["Heap allocation", "Move semantics", "Placement new", "All of the above"],
        "options_hi": ["हीप अलोकेशन", "मूव सेमेंटिक्स", "प्लेसमेंट new", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How does Rust handle variance?",
        "question_hi": "Rust वेरिएंस कैसे हैंडल करता है?",
        "options_en": ["Type parameter relationships", "Lifetime subtyping", "Reference safety", "All of the above"],
        "options_hi": ["टाइप पैरामीटर रिलेशनशिप", "लाइफटाइम सबटाइपिंग", "रिफरेन्स सेफ्टी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the role of Rust's no_std attribute?",
        "question_hi": "Rust के no_std एट्रिब्यूट की क्या भूमिका है?",
        "options_en": ["Standard library exclusion", "Embedded systems", "Kernel development", "All of the above"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी एक्सक्लूजन", "एम्बेडेड सिस्टम", "कर्नल डेवलपमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How does Rust implement specialization?",
        "question_hi": "Rust स्पेशलाइजेशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Overlapping implementations", "Performance optimization", "Backward compatibility", "All of the above"],
        "options_hi": ["ओवरलैपिंग इम्प्लीमेंटेशन", "परफॉर्मेंस ऑप्टिमाइज़ेशन", "बैकवर्ड कंपेटिबिलिटी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of Rust's union types?",
        "question_hi": "Rust के यूनियन टाइप का उद्देश्य क्या है?",
        "options_en": ["FFI compatibility", "Memory overlay", "Unsafe access", "All of the above"],
        "options_hi": ["FFI कंपेटिबिलिटी", "मेमोरी ओवरले", "अनसेफ एक्सेस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How does Rust handle dead code detection?",
        "question_hi": "Rust डेड कोड डिटेक्शन कैसे हैंडल करता है?",
        "options_en": ["Compiler warnings", "Unused attributes", "Dead code elimination", "All of the above"],
        "options_hi": ["कंपाइलर वार्निंग", "अनयूज्ड एट्रिब्यूट", "डेड कोड एलिमिनेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the role of Rust's asm macro?",
        "question_hi": "Rust के asm मैक्रो की क्या भूमिका है?",
        "options_en": ["Inline assembly", "Low-level control", "Platform-specific code", "All of the above"],
        "options_hi": ["इनलाइन असेंबली", "लो-लेवल कंट्रोल", "प्लेटफॉर्म-स्पेसिफिक कोड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How does Rust implement move semantics?",
        "question_hi": "Rust मूव सेमेंटिक्स कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Ownership transfer", "Bitwise copy", "Invalidation", "All of the above"],
        "options_hi": ["ओनरशिप ट्रांसफर", "बिटवाइज कॉपी", "इनवैलिडेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of Rust's exhaustive patterns?",
        "question_hi": "Rust के एक्जॉस्टिव पैटर्न का उद्देश्य क्या है?",
        "options_en": ["Compile-time safety", "Case coverage", "Error prevention", "All of the above"],
        "options_hi": ["कंपाइल-टाइम सेफ्टी", "केस कवरेज", "एरर प्रिवेंशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How does Rust handle trait objects?",
        "question_hi": "Rust ट्रेट ऑब्जेक्ट कैसे हैंडल करता है?",
        "options_en": ["Vtable dispatch", "Fat pointers", "Dynamic typing", "All of the above"],
        "options_hi": ["Vtable डिस्पैच", "फैट पॉइंटर", "डायनामिक टाइपिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of Rust's 'Pin' type?",
        "question_hi": "Rust के 'Pin' टाइप का उद्देश्य क्या है?",
        "options_en": ["Prevent moving of values", "Support self-referential structs", "Enable safe async/await", "All of the above"],
        "options_hi": ["वैल्यू की मूविंग रोकना", "सेल्फ-रेफरेंशियल स्ट्रक्चर सपोर्ट", "सेफ async/await एनेबल करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How does Rust's 'Box::leak' method work?",
        "question_hi": "Rust का 'Box::leak' मेथड कैसे काम करता है?",
        "options_en": ["Convert to 'static lifetime", "Prevent deallocation", "Create global variables", "All of the above"],
        "options_hi": ["'static लाइफटाइम में कन्वर्ट करना", "डीलोकेशन रोकना", "ग्लोबल वेरिएबल बनाना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the role of Rust's 'ManuallyDrop' type?",
        "question_hi": "Rust के 'ManuallyDrop' टाइप की क्या भूमिका है?",
        "options_en": ["Prevent automatic drop", "Manual memory management", "FFI integration", "All of the above"],
        "options_hi": ["ऑटोमैटिक ड्रॉप रोकना", "मैन्युअल मेमोरी मैनेजमेंट", "FFI इंटीग्रेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How does Rust implement 'async' generators?",
        "question_hi": "Rust 'async' जेनरेटर कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Async streams", "State machine transformation", "Poll-based execution", "All of the above"],
        "options_hi": ["Async स्ट्रीम", "स्टेट मशीन ट्रांसफॉर्मेशन", "पोल-बेस्ड एक्सीक्यूशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of Rust's 'MaybeUninit' type?",
        "question_question_hi": "Rust के 'MaybeUninit' टाइप का उद्देश्य क्या है?",
        "options_en": ["Handle uninitialized memory", "FFI buffer management", "Performance optimization", "All of the above"],
        "options_hi": ["अनइनिशियलाइज्ड मेमोरी हैंडल करना", "FFI बफर मैनेजमेंट", "परफॉर्मेंस ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How does Rust's 'std::mem::transmute' work?",
        "question_hi": "Rust का 'std::mem::transmute' कैसे काम करता है?",
        "options_en": ["Type reinterpretation", "Memory bit pattern preservation", "Unsafe type conversion", "All of the above"],
        "options_hi": ["टाइप रिइंटरप्रिटेशन", "मेमोरी बिट पैटर्न प्रिजर्वेशन", "अनसेफ टाइप कन्वर्जन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the role of Rust's 'UnsafeCell' type?",
        "question_hi": "Rust के 'UnsafeCell' टाइप की क्या भूमिका है?",
        "options_en": ["Interior mutability foundation", "Bypass borrowing rules", "Cell type implementation", "All of the above"],
        "options_hi": ["इंटीरियर म्यूटेबिलिटी फाउंडेशन", "बोरोइंग रूल बायपास", "सेल टाइप इम्प्लीमेंटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How does Rust implement 'no_std' async execution?",
        "question_hi": "Rust 'no_std' async एक्सीक्यूशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Custom executors", "Waker implementation", "Heap-less futures", "All of the above"],
        "options_hi": ["कस्टम एग्जीक्यूटर", "वेकर इम्प्लीमेंटेशन", "हीप-लेस फ्यूचर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of Rust's 'std::sync::mpsc'?",
        "question_hi": "Rust के 'std::sync::mpsc' का उद्देश्य क्या है?",
        "options_en": ["Multi-producer single-consumer channels", "Thread communication", "Message passing", "All of the above"],
        "options_hi": ["मल्टी-प्रोड्यूसर सिंगल-कंज्यूमर चैनल", "थ्रेड कम्युनिकेशन", "मैसेज पासिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How does Rust's 'Arc' handle thread safety?",
        "question_hi": "Rust का 'Arc' थ्रेड सेफ्टी कैसे हैंडल करता है?",
        "options_en": ["Atomic reference counting", "Clone sharing", "Send + Sync traits", "All of the above"],
        "options_hi": ["एटॉमिक रिफरेन्स काउंटिंग", "क्लोन शेयरिंग", "Send + Sync ट्रेट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the role of Rust's 'std::mem::forget'?",
        "question_hi": "Rust के 'std::mem::forget' की क्या भूमिका है?",
        "options_en": ["Prevent destructor runs", "Memory leak intentionally", "FFI resource management", "All of the above"],
        "options_hi": ["डिस्ट्रक्टर रन रोकना", "इंटेंशनली मेमोरी लीक", "FFI रिसोर्स मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How does Rust implement 'const fn' evaluation?",
        "question_hi": "Rust 'const fn' एवैल्यूएशन कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Compile-time execution", "Constant propagation", "Limited operations", "All of the above"],
        "options_hi": ["कंपाइल-टाइम एक्सीक्यूशन", "कॉन्स्टेंट प्रोपेगेशन", "लिमिटेड ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of Rust's 'std::panic::catch_unwind'?",
        "question_hi": "Rust के 'std::panic::catch_unwind' का उद्देश्य क्या है?",
        "options_en": ["Recover from panics", "FFI boundary safety", "Error containment", "All of the above"],
        "options_hi": ["पैनिक से रिकवर करना", "FFI बाउंड्री सेफ्टी", "एरर कंटेनमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How does Rust's 'Mutex' prevent deadlocks?",
        "question_hi": "Rust का 'Mutex' डेडलॉक कैसे रोकता है?",
        "options_en": ["RAII locking", "Poisoning detection", "No automatic prevention", "All of the above"],
        "options_hi": ["RAII लॉकिंग", "पॉइजनिंग डिटेक्शन", "कोई ऑटोमैटिक प्रिवेंशन नहीं", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the role of Rust's 'std::sync::Barrier'?",
        "question_hi": "Rust के 'std::sync::Barrier' की क्या भूमिका है?",
        "options_en": ["Thread synchronization", "Wait for multiple threads", "Phase coordination", "All of the above"],
        "options_hi": ["थ्रेड सिंक्रोनाइज़ेशन", "मल्टीपल थ्रेड का इंतज़ार", "फेज कोऑर्डिनेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How does Rust implement 'std::future::Future'?",
        "question_hi": "Rust 'std::future::Future' कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Poll-based interface", "State machine", "Async readiness", "All of the above"],
        "options_hi": ["पोल-बेस्ड इंटरफेस", "स्टेट मशीन", "Async रेडीनेस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of Rust's 'std::task::Waker'?",
        "question_hi": "Rust के 'std::task::Waker' का उद्देश्य क्या है?",
        "options_en": ["Wake async tasks", "Executor notification", "Poll scheduling", "All of the above"],
        "options_hi": ["Async टास्क वेक करना", "एग्जीक्यूटर नोटिफिकेशन", "पोल शेड्यूलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How does Rust's 'RwLock' optimize read access?",
        "question_hi": "Rust का 'RwLock' रीड एक्सेस कैसे ऑप्टिमाइज़ करता है?",
        "options_en": ["Multiple concurrent readers", "Writer preference control", "Lock state tracking", "All of the above"],
        "options_hi": ["मल्टीपल कंकरंट रीडर", "राइटर प्रेफरेंस कंट्रोल", "लॉक स्टेट ट्रैकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the role of Rust's 'std::sync::Once'?",
        "question_hi": "Rust के 'std::sync::Once' की क्या भूमिका है?",
        "options_en": ["One-time initialization", "Thread-safe setup", "Global state creation", "All of the above"],
        "options_hi": ["वन-टाइम इनिशियलाइज़ेशन", "थ्रेड-सेफ सेटअप", "ग्लोबल स्टेट क्रिएशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How does Rust implement 'std::collections::HashMap'?",
        "question_hi": "Rust 'std::collections::HashMap' कैसे इम्प्लीमेंट करता है?",
        "options_en": ["HashDoS protection", "SwissTable algorithm", "Load factor management", "All of the above"],
        "options_hi": ["HashDoS प्रोटेक्शन", "SwissTable अल्गोरिदम", "लोड फैक्टर मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of Rust's 'std::mem::replace'?",
        "question_hi": "Rust के 'std::mem::replace' का उद्देश्य क्या है?",
        "options_en": ["Swap values", "Take ownership", "Avoid temporary moves", "All of the above"],
        "options_hi": ["वैल्यू स्वैप करना", "ओनरशिप लेना", "टेम्पररी मूव से बचना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How does Rust's 'std::sync::Condvar' work?",
        "question_hi": "Rust का 'std::sync::Condvar' कैसे काम करता है?",
        "options_en": ["Thread waiting/signaling", "Mutex coordination", "Condition-based synchronization", "All of the above"],
        "options_hi": ["थ्रेड वेटिंग/सिग्नलिंग", "Mutex कोऑर्डिनेशन", "कंडीशन-बेस्ड सिंक्रोनाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the role of Rust's 'std::ptr::NonNull'?",
        "question_hi": "Rust के 'std::ptr::NonNull' की क्या भूमिका है?",
        "options_en": ["Non-null pointer wrapper", "FFI safety", "Variance control", "All of the above"],
        "options_hi": ["नॉन-नल पॉइंटर रैपर", "FFI सेफ्टी", "वेरिएंस कंट्रोल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How does Rust implement 'std::io::Error'?",
        "question_hi": "Rust 'std::io::Error' कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Error kind categorization", "OS error code wrapping", "Custom error support", "All of the above"],
        "options_hi": ["एरर काइंड कैटेगराइजेशन", "OS एरर कोड रैपिंग", "कस्टम एरर सपोर्ट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of Rust's 'std::sync::atomic' types?",
        "question_hi": "Rust के 'std::sync::atomic' टाइप का उद्देश्य क्या है?",
        "options_en": ["Lock-free operations", "Memory ordering control", "Thread-safe primitives", "All of the above"],
        "options_hi": ["लॉक-फ्री ऑपरेशन", "मेमोरी ऑर्डरिंग कंट्रोल", "थ्रेड-सेफ प्रिमिटिव", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How does Rust's 'std::process::Command' work?",
        "question_hi": "Rust का 'std::process::Command' कैसे काम करता है?",
        "options_en": ["Process spawning", "IO redirection", "Environment configuration", "All of the above"],
        "options_hi": ["प्रोसेस स्पॉनिंग", "IO रीडायरेक्शन", "एनवायरनमेंट कॉन्फिगरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the role of Rust's 'std::ffi::CStr'?",
        "question_hi": "Rust के 'std::ffi::CStr' की क्या भूमिका है?",
        "options_en": ["Null-terminated string handling", "FFI string safety", "C string conversion", "All of the above"],
        "options_hi": ["नल-टर्मिनेटेड स्ट्रिंग हैंडलिंग", "FFI स्ट्रिंग सेफ्टी", "C स्ट्रिंग कन्वर्जन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How does Rust implement 'std::path::Path'?",
        "question_hi": "Rust 'std::path::Path' कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Platform-specific path handling", "Path manipulation", "Encoding safety", "All of the above"],
        "options_hi": ["प्लेटफॉर्म-स्पेसिफिक पाथ हैंडलिंग", "पाथ मैनिपुलेशन", "एनकोडिंग सेफ्टी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of Rust's 'std::net::TcpStream'?",
        "question_hi": "Rust के 'std::net::TcpStream' का उद्देश्य क्या है?",
        "options_en": ["TCP network communication", "Async and sync IO", "Connection management", "All of the above"],
        "options_hi": ["TCP नेटवर्क कम्युनिकेशन", "Async और sync IO", "कनेक्शन मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How does Rust's 'std::fs::File' handle file operations?",
        "question_hi": "Rust का 'std::fs::File' फाइल ऑपरेशन कैसे हैंडल करता है?",
        "options_en": ["File descriptor management", "Read/write operations", "Seeking and metadata", "All of the above"],
        "options_hi": ["फाइल डिस्क्रिप्टर मैनेजमेंट", "रीड/राइट ऑपरेशन", "सीकिंग और मेटाडेटा", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the role of Rust's 'std::env' module?",
        "question_hi": "Rust के 'std::env' मॉड्यूल की क्या भूमिका है?",
        "options_en": ["Environment variable access", "Command line arguments", "Current directory", "All of the above"],
        "options_hi": ["एनवायरनमेंट वेरिएबल एक्सेस", "कमांड लाइन आर्गुमेंट", "करंट डायरेक्टरी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How does Rust implement 'std::time' types?",
        "question_hi": "Rust 'std::time' टाइप कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Duration measurement", "System time access", "Instant comparison", "All of the above"],
        "options_hi": ["ड्यूरेशन मेजरमेंट", "सिस्टम टाइम एक्सेस", "इंस्टेंट कम्पेयरिजन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of Rust's 'std::cell::RefCell'?",
        "question_hi": "Rust के 'std::cell::RefCell' का उद्देश्य क्या है?",
        "options_en": ["Runtime borrow checking", "Interior mutability", "Single-threaded scenarios", "All of the above"],
        "options_hi": ["रनटाइम बोरो चेकिंग", "इंटीरियर म्यूटेबिलिटी", "सिंगल-थ्रेडेड सीनारियो", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How does Rust's 'std::collections::VecDeque' work?",
        "question_hi": "Rust का 'std::collections::VecDeque' कैसे काम करता है?",
        "options_en": ["Double-ended queue", "Ring buffer implementation", "Efficient push/pop both ends", "All of the above"],
        "options_hi": ["डबल-एंडेड क्यू", "रिंग बफर इम्प्लीमेंटेशन", "दोनों एंड पर एफिशिएंट पुश/पॉप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the role of Rust's 'std::sync::mpsc::sync_channel'?",
        "question_hi": "Rust के 'std::sync::mpsc::sync_channel' की क्या भूमिका है?",
        "options_en": ["Bounded channel", "Backpressure handling", "Synchronous communication", "All of the above"],
        "options_hi": ["बाउंडेड चैनल", "बैकप्रेशर हैंडलिंग", "सिंक्रोनस कम्युनिकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How does Rust implement 'std::collections::BTreeMap'?",
        "question_hi": "Rust 'std::collections::BTreeMap' कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Balanced tree structure", "Sorted key storage", "Range query support", "All of the above"],
        "options_hi": ["बैलेंस्ड ट्री स्ट्रक्चर", "सॉर्टेड की स्टोरेज", "रेंज क्वेरी सपोर्ट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of Rust's 'std::mem::size_of'?",
        "question_hi": "Rust के 'std::mem::size_of' का उद्देश्य क्या है?",
        "options_en": ["Type size query", "Memory layout analysis", "FFI compatibility", "All of the above"],
        "options_hi": ["टाइप साइज क्वेरी", "मेमोरी लेआउट एनालिसिस", "FFI कंपेटिबिलिटी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How does Rust's 'std::thread::spawn' work?",
        "question_hi": "Rust का 'std::thread::spawn' कैसे काम करता है?",
        "options_en": ["Thread creation", "Closure execution", "Join handle return", "All of the above"],
        "options_hi": ["थ्रेड क्रिएशन", "क्लोजर एक्सीक्यूशन", "जॉइन हैंडल रिटर्न", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the role of Rust's 'std::io::BufReader'?",
        "question_hi": "Rust के 'std::io::BufReader' की क्या भूमिका है?",
        "options_en": ["Buffered input", "Read performance optimization", "Reduced system calls", "All of the above"],
        "options_hi": ["बफर्ड इनपुट", "रीड परफॉर्मेंस ऑप्टिमाइज़ेशन", "कम सिस्टम कॉल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How does Rust implement 'std::collections::HashSet'?",
        "question_hi": "Rust 'std::collections::HashSet' कैसे इम्प्लीमेंट करता है?",
        "options_en": ["HashMap wrapper", "Unique element storage", "Set operations", "All of the above"],
        "options_hi": ["HashMap रैपर", "यूनिक एलिमेंट स्टोरेज", "सेट ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of Rust's 'std::sync::mpsc::Receiver'?",
        "question_hi": "Rust के 'std::sync::mpsc::Receiver' का उद्देश्य क्या है?",
        "options_en": ["Message consumption", "Channel endpoint", "Blocking and non-blocking receive", "All of the above"],
        "options_hi": ["मैसेज कंजम्पशन", "चैनल एंडपॉइंट", "ब्लॉकिंग और नॉन-ब्लॉकिंग रिसीव", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How does Rust's 'std::mem::align_of' work?",
        "question_hi": "Rust का 'std::mem::align_of' कैसे काम करता है?",
        "options_en": ["Memory alignment query", "FFI structure compatibility", "Performance optimization", "All of the above"],
        "options_hi": ["मेमोरी अलाइनमेंट क्वेरी", "FFI स्ट्रक्चर कंपेटिबिलिटी", "परफॉर्मेंस ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the role of Rust's 'std::io::Seek' trait?",
        "question_hi": "Rust के 'std::io::Seek' ट्रेट की क्या भूमिका है?",
        "options_en": ["Stream position control", "Random access support", "File and memory seeking", "All of the above"],
        "options_hi": ["स्ट्रीम पोजीशन कंट्रोल", "रैंडम एक्सेस सपोर्ट", "फाइल और मेमोरी सीकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How does Rust implement 'std::collections::BinaryHeap'?",
        "question_hi": "Rust 'std::collections::BinaryHeap' कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Priority queue", "Max-heap structure", "Efficient push/pop", "All of the above"],
        "options_hi": ["प्रायोरिटी क्यू", "मैक्स-हीप स्ट्रक्चर", "एफिशिएंट पुश/पॉप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of Rust's 'std::sync::mpsc::Sender'?",
        "question_hi": "Rust के 'std::sync::mpsc::Sender' का उद्देश्य क्या है?",
        "options_en": ["Message production", "Channel endpoint", "Clone for multiple producers", "All of the above"],
        "options_hi": ["मैसेज प्रोडक्शन", "चैनल एंडपॉइंट", "मल्टीपल प्रोड्यूसर के लिए क्लोन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How does Rust's 'std::mem::drop' function work?",
        "question_hi": "Rust का 'std::mem::drop' फंक्शन कैसे काम करता है?",
        "options_en": ["Explicit destructor call", "Ownership transfer", "Memory deallocation", "All of the above"],
        "options_hi": ["एक्सप्लिसिट डिस्ट्रक्टर कॉल", "ओनरशिप ट्रांसफर", "मेमोरी डीलोकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the role of Rust's 'std::io::Write' trait?",
        "question_hi": "Rust के 'std::io::Write' ट्रेट की क्या भूमिका है?",
        "options_en": ["Byte output abstraction", "File and network writing", "Buffered writing support", "All of the above"],
        "options_hi": ["बाइट आउटपुट एब्स्ट्रैक्शन", "फाइल और नेटवर्क राइटिंग", "बफर्ड राइटिंग सपोर्ट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How does Rust implement 'std::collections::LinkedList'?",
        "question_hi": "Rust 'std::collections::LinkedList' कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Doubly-linked list", "O(1) insert/remove", "Cache-unfriendly structure", "All of the above"],
        "options_hi": ["डबली-लिंक्ड लिस्ट", "O(1) इंसर्ट/रिमूव", "कैश-अनफ्रेंडली स्ट्रक्चर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of Rust's 'std::sync::mpsc::channel'?",
        "question_hi": "Rust के 'std::sync::mpsc::channel' का उद्देश्य क्या है?",
        "options_en": ["Unbounded channel creation", "Asynchronous communication", "Multiple producer support", "All of the above"],
        "options_hi": ["अनबाउंडेड चैनल क्रिएशन", "एसिंक्रोनस कम्युनिकेशन", "मल्टीपल प्रोड्यूसर सपोर्ट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How does Rust's 'std::mem::needs_drop' function work?",
        "question_hi": "Rust का 'std::mem::needs_drop' फंक्शन कैसे काम करता है?",
        "options_en": ["Drop requirement detection", "Compile-time optimization", "Memory management", "All of the above"],
        "options_hi": ["ड्रॉप रिक्वायरमेंट डिटेक्शन", "कंपाइल-टाइम ऑप्टिमाइज़ेशन", "मेमोरी मैनेजमेंट", "उपरोक्त सभी"],
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