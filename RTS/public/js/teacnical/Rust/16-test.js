const questions = [
    {
        "num": 1,
        "question_en": "How do you handle WebAssembly in Rust?",
        "question_hi": "Rust में WebAssembly को कैसे हैंडल करते हैं?",
        "options_en": ["Using wasm-bindgen", "Using wasm-pack", "Both A and B", "Using std::wasm"],
        "options_hi": ["wasm-bindgen का उपयोग करके", "wasm-pack का उपयोग करके", "A और B दोनों", "std::wasm का उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which Rust feature allows zero-cost abstractions through monomorphization?",
        "question_hi": "कौन सी Rust फीचर मोनोमोर्फाइजेशन के माध्यम से जीरो-कॉस्ट एब्स्ट्रैक्शन की अनुमति देता है?",
        "options_en": ["Generics", "Traits", "Macros", "Lifetimes"],
        "options_hi": ["जेनेरिक्स", "ट्रेट्स", "मैक्रोस", "लाइफटाइम्स"],
        "answer_en": "Generics",
        "answer_hi": "जेनेरिक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the purpose of the 'std::mem::swap' function in Rust?",
        "question_hi": "Rust में 'std::mem::swap' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Efficiently exchange values between two mutable references", "Swap memory locations", "Exchange heap and stack values", "Replace values with defaults"],
        "options_hi": ["दो म्यूटेबल रिफरेन्सेस के बीच वैल्यूज को एफिशिएंटली एक्सचेंज करना", "मेमोरी लोकेशन्स स्वैप करना", "हीप और स्टैक वैल्यूज एक्सचेंज करना", "वैल्यूज को डिफॉल्ट से रिप्लेस करना"],
        "answer_en": "Efficiently exchange values between two mutable references",
        "answer_hi": "दो म्यूटेबल रिफरेन्सेस के बीच वैल्यूज को एफिशिएंटली एक्सचेंज करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "In Rust, what does the 'Sized' trait represent?",
        "question_hi": "Rust में, 'Sized' ट्रेट क्या रिप्रेजेंट करता है?",
        "options_en": ["Types with known size at compile time", "Types that can be resized", "Types with dynamic size", "Types that implement size() method"],
        "options_hi": ["कंपाइल टाइम पर ज्ञात साइज वाले टाइप्स", "रीसाइज किए जा सकने वाले टाइप्स", "डायनामिक साइज वाले टाइप्स", "size() मेथड इम्प्लीमेंट करने वाले टाइप्स"],
        "answer_en": "Types with known size at compile time",
        "answer_hi": "कंपाइल टाइम पर ज्ञात साइज वाले टाइप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the primary use case for 'std::cell::RefCell' in Rust?",
        "question_hi": "Rust में 'std::cell::RefCell' का प्राथमिक उपयोग केस क्या है?",
        "options_en": ["Interior mutability with runtime borrow checking", "Reference counting", "Atomic operations", "Thread-safe mutable access"],
        "options_hi": ["रनटाइम बोरो चेकिंग के साथ इंटीरियर म्यूटेबिलिटी", "रिफरेन्स काउंटिंग", "एटॉमिक ऑपरेशन्स", "थ्रेड-सेफ म्यूटेबल एक्सेस"],
        "answer_en": "Interior mutability with runtime borrow checking",
        "answer_hi": "रनटाइम बोरो चेकिंग के साथ इंटीरियर म्यूटेबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How does Rust's 'match' expression ensure exhaustiveness?",
        "question_hi": "Rust का 'match' एक्सप्रेशन एक्जॉस्टिवनेस कैसे सुनिश्चित करता है?",
        "options_en": ["Compiler requires all possible patterns to be handled", "Runtime checks for unhandled cases", "Default case is automatically added", "It doesn't ensure exhaustiveness"],
        "options_hi": ["कंपाइलर सभी संभावित पैटर्न्स को हैंडल करने की आवश्यकता होती है", "अनहैंडल्ड केस के लिए रनटाइम चेक्स", "डिफॉल्ट केस ऑटोमैटिकली एड किया जाता है", "यह एक्जॉस्टिवनेस सुनिश्चित नहीं करता"],
        "answer_en": "Compiler requires all possible patterns to be handled",
        "answer_hi": "कंपाइलर सभी संभावित पैटर्न्स को हैंडल करने की आवश्यकता होती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the role of 'std::marker::PhantomData' in Rust generics?",
        "question_hi": "Rust जेनेरिक्स में 'std::marker::PhantomData' की क्या भूमिका है?",
        "options_en": ["Tell compiler about unused type parameters", "Optimize memory layout", "Enable dynamic dispatch", "Provide default implementations"],
        "options_hi": ["कंपाइलर को अनयूज्ड टाइप पैरामीटर्स के बारे में बताना", "मेमोरी लेआउट ऑप्टिमाइज़ करना", "डायनामिक डिस्पैच सक्षम करना", "डिफॉल्ट इम्प्लीमेंटेशन प्रोवाइड करना"],
        "answer_en": "Tell compiler about unused type parameters",
        "answer_hi": "कंपाइलर को अनयूज्ड टाइप पैरामीटर्स के बारे में बताना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does Rust's 'std::sync::mpsc' module provide?",
        "question_hi": "Rust का 'std::sync::mpsc' मॉड्यूल क्या प्रोवाइड करता है?",
        "options_en": ["Multiple producer, single consumer channels", "Multi-threaded shared memory", "Atomic operations", "Thread pools"],
        "options_hi": ["मल्टीपल प्रोड्यूसर, सिंगल कंज्यूमर चैनल्स", "मल्टी-थ्रेडेड शेयर्ड मेमोरी", "एटॉमिक ऑपरेशन्स", "थ्रेड पूल्स"],
        "answer_en": "Multiple producer, single consumer channels",
        "answer_hi": "मल्टीपल प्रोड्यूसर, सिंगल कंज्यूमर चैनल्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "How does Rust's 'std::pin::Pin' type prevent moves?",
        "question_hi": "Rust का 'std::pin::Pin' टाइप मूव्स को कैसे रोकता है?",
        "options_en": ["By making the pinned data immovable through the type system", "Using runtime checks", "By copying data instead of moving", "Through reference counting"],
        "options_hi": ["टाइप सिस्टम के माध्यम से पिन किए गए डेटा को इम्मोवेबल बनाकर", "रनटाइम चेक्स का उपयोग करके", "मूव करने के बजाय डेटा को कॉपी करके", "रिफरेन्स काउंटिंग के माध्यम से"],
        "answer_en": "By making the pinned data immovable through the type system",
        "answer_hi": "टाइप सिस्टम के माध्यम से पिन किए गए डेटा को इम्मोवेबल बनाकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the purpose of 'std::mem::ManuallyDrop' in Rust?",
        "question_hi": "Rust में 'std::mem::ManuallyDrop' का उद्देश्य क्या है?",
        "options_en": ["Prevent automatic destructor calls while allowing access", "Manual memory deallocation", "Force immediate cleanup", "Enable move semantics"],
        "options_hi": ["एक्सेस की अनुमति देते हुए ऑटोमैटिक डिस्ट्रक्टर कॉल्स को रोकना", "मैन्युअल मेमोरी डीलोकेशन", "इमीडिएट क्लीनअप फोर्स करना", "मूव सेमेंटिक्स सक्षम करना"],
        "answer_en": "Prevent automatic destructor calls while allowing access",
        "answer_hi": "एक्सेस की अनुमति देते हुए ऑटोमैटिक डिस्ट्रक्टर कॉल्स को रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "How does Rust's 'std::ops::Deref' trait enable smart pointer behavior?",
        "question_hi": "Rust का 'std::ops::Deref' ट्रेट स्मार्ट पॉइंटर बिहेवियर कैसे सक्षम करता है?",
        "options_en": ["By allowing automatic dereferencing through the * operator", "Through reference counting", "By implementing clone semantics", "Via move operations"],
        "options_hi": ["* ऑपरेटर के माध्यम से ऑटोमैटिक डेरिफरेंसिंग की अनुमति देकर", "रिफरेन्स काउंटिंग के माध्यम से", "clone सेमेंटिक्स इम्प्लीमेंट करके", "मूव ऑपरेशन्स के माध्यम से"],
        "answer_en": "By allowing automatic dereferencing through the * operator",
        "answer_hi": "* ऑपरेटर के माध्यम से ऑटोमैटिक डेरिफरेंसिंग की अनुमति देकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the primary advantage of Rust's 'std::vec::Vec' over arrays?",
        "question_hi": "ऐरे पर Rust के 'std::vec::Vec' का प्राथमिक फायदा क्या है?",
        "options_en": ["Dynamic resizing capability", "Better performance", "Smaller memory footprint", "Built-in sorting"],
        "options_hi": ["डायनामिक रीसाइजिंग कैपेबिलिटी", "बेहतर परफॉर्मेंस", "छोटा मेमोरी फुटप्रिंट", "बिल्ट-इन सॉर्टिंग"],
        "answer_en": "Dynamic resizing capability",
        "answer_hi": "डायनामिक रीसाइजिंग कैपेबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How does Rust's 'std::sync::Arc' differ from 'std::rc::Rc'?",
        "question_hi": "Rust का 'std::sync::Arc' 'std::rc::Rc' से कैसे अलग है?",
        "options_en": ["Arc is thread-safe, Rc is not", "Arc is faster", "Rc uses less memory", "Arc doesn't support weak references"],
        "options_hi": ["Arc थ्रेड-सेफ है, Rc नहीं है", "Arc तेज है", "Rc कम मेमोरी उपयोग करता है", "Arc weak रिफरेन्सेस सपोर्ट नहीं करता"],
        "answer_en": "Arc is thread-safe, Rc is not",
        "answer_hi": "Arc थ्रेड-सेफ है, Rc नहीं है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the purpose of 'std::convert::AsRef' trait in Rust?",
        "question_hi": "Rust में 'std::convert::AsRef' ट्रेट का उद्देश्य क्या है?",
        "options_en": ["Cheap reference-to-reference conversion", "Expensive type conversion", "Move semantics", "Clone operations"],
        "options_hi": ["सस्ता रिफरेन्स-टू-रिफरेन्स कन्वर्जन", "महंगा टाइप कन्वर्जन", "मूव सेमेंटिक्स", "clone ऑपरेशन्स"],
        "answer_en": "Cheap reference-to-reference conversion",
        "answer_hi": "सस्ता रिफरेन्स-टू-रिफरेन्स कन्वर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "How does Rust's 'std::option::Option' help eliminate null pointer errors?",
        "question_hi": "Rust का 'std::option::Option' नल पॉइंटर एरर्स को खत्म करने में कैसे मदद करता है?",
        "options_en": ["By forcing explicit handling of absence", "Through automatic null checks", "By using default values", "Via exception handling"],
        "options_hi": ["अनुपस्थिति के एक्सप्लिसिट हैंडलिंग को फोर्स करके", "ऑटोमैटिक नल चेक्स के माध्यम से", "डिफॉल्ट वैल्यूज का उपयोग करके", "एक्सेप्शन हैंडलिंग के माध्यम से"],
        "answer_en": "By forcing explicit handling of absence",
        "answer_hi": "अनुपस्थिति के एक्सप्लिसिट हैंडलिंग को फोर्स करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the role of 'std::default::Default' trait in Rust?",
        "question_hi": "Rust में 'std::default::Default' ट्रेट की क्या भूमिका है?",
        "options_en": ["Provide sensible default values for types", "Initialize memory to zero", "Create empty collections", "All of the above"],
        "options_hi": ["टाइप्स के लिए समझदार डिफॉल्ट वैल्यूज प्रोवाइड करना", "मेमोरी को जीरो से इनिशियलाइज़ करना", "खाली कलेक्शन्स बनाना", "उपरोक्त सभी"],
        "answer_en": "Provide sensible default values for types",
        "answer_hi": "टाइप्स के लिए समझदार डिफॉल्ट वैल्यूज प्रोवाइड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "How does Rust's 'std::iter::Iterator' trait enable functional programming patterns?",
        "question_hi": "Rust का 'std::iter::Iterator' ट्रेट फंक्शनल प्रोग्रामिंग पैटर्न्स कैसे सक्षम करता है?",
        "options_en": ["By providing map, filter, fold methods", "Through recursion", "Via pattern matching", "Using closures exclusively"],
        "options_hi": ["map, filter, fold मेथड्स प्रोवाइड करके", "रिकर्सन के माध्यम से", "पैटर्न मैचिंग के माध्यम से", "केवल क्लोजर्स का उपयोग करके"],
        "answer_en": "By providing map, filter, fold methods",
        "answer_hi": "map, filter, fold मेथड्स प्रोवाइड करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the purpose of 'std::mem::size_of' function in Rust?",
        "question_hi": "Rust में 'std::mem::size_of' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get the size of a type in bytes", "Measure heap allocation size", "Calculate memory usage at runtime", "Determine stack frame size"],
        "options_hi": ["टाइप का साइज बाइट्स में प्राप्त करना", "हीप अलोकेशन साइज मापना", "रनटाइम पर मेमोरी यूज कैलकुलेट करना", "स्टैक फ्रेम साइज निर्धारित करना"],
        "answer_en": "Get the size of a type in bytes",
        "answer_hi": "टाइप का साइज बाइट्स में प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "How does Rust's 'std::error::Error' trait facilitate error handling?",
        "question_hi": "Rust का 'std::error::Error' ट्रेट एरर हैंडलिंग कैसे सुविधाजनक बनाता है?",
        "options_en": ["By providing a common interface for errors", "Through automatic error conversion", "Via exception propagation", "Using global error handlers"],
        "options_hi": ["एरर्स के लिए कॉमन इंटरफेस प्रोवाइड करके", "ऑटोमैटिक एरर कन्वर्जन के माध्यम से", "एक्सेप्शन प्रोपेगेशन के माध्यम से", "ग्लोबल एरर हैंडलर्स का उपयोग करके"],
        "answer_en": "By providing a common interface for errors",
        "answer_hi": "एरर्स के लिए कॉमन इंटरफेस प्रोवाइड करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the primary use of 'std::borrow::Cow' (Clone on Write) in Rust?",
        "question_hi": "Rust में 'std::borrow::Cow' (Clone on Write) का प्राथमिक उपयोग क्या है?",
        "options_en": ["Efficiently handle borrowed or owned data", "Thread-safe data sharing", "Automatic memory management", "Zero-copy serialization"],
        "options_hi": ["बोरोड या ओन्ड डेटा को एफिशिएंटली हैंडल करना", "थ्रेड-सेफ डेटा शेयरिंग", "ऑटोमैटिक मेमोरी मैनेजमेंट", "जीरो-कॉपी सीरियलाइज़ेशन"],
        "answer_en": "Efficiently handle borrowed or owned data",
        "answer_hi": "बोरोड या ओन्ड डेटा को एफिशिएंटली हैंडल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "How does Rust's 'std::sync::atomic' module enable lock-free programming?",
        "question_hi": "Rust का 'std::sync::atomic' मॉड्यूल लॉक-फ्री प्रोग्रामिंग कैसे सक्षम करता है?",
        "options_en": ["By providing atomic operations on primitive types", "Through automatic locking", "Via reference counting", "Using mutexes internally"],
        "options_hi": ["प्रिमिटिव टाइप्स पर एटॉमिक ऑपरेशन्स प्रोवाइड करके", "ऑटोमैटिक लॉकिंग के माध्यम से", "रिफरेन्स काउंटिंग के माध्यम से", "आंतरिक रूप से म्यूटेक्स का उपयोग करके"],
        "answer_en": "By providing atomic operations on primitive types",
        "answer_hi": "प्रिमिटिव टाइप्स पर एटॉमिक ऑपरेशन्स प्रोवाइड करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the purpose of 'std::hint::spin_loop' in Rust?",
        "question_hi": "Rust में 'std::hint::spin_loop' का उद्देश्य क्या है?",
        "options_en": ["Optimize busy-waiting loops", "Create infinite loops", "Implement thread yielding", "Force compiler optimizations"],
        "options_hi": ["बिजी-वेटिंग लूप्स को ऑप्टिमाइज़ करना", "इनफिनाइट लूप्स बनाना", "थ्रेड यील्डिंग इम्प्लीमेंट करना", "कंपाइलर ऑप्टिमाइज़ेशन फोर्स करना"],
        "answer_en": "Optimize busy-waiting loops",
        "answer_hi": "बिजी-वेटिंग लूप्स को ऑप्टिमाइज़ करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "How does Rust's 'std::process::Command' facilitate process management?",
        "question_hi": "Rust का 'std::process::Command' प्रोसेस मैनेजमेंट कैसे सुविधाजनक बनाता है?",
        "options_en": ["By providing a builder pattern for spawning processes", "Through automatic process forking", "Via shell command execution", "Using async process handling"],
        "options_hi": ["प्रोसेस स्पॉन करने के लिए बिल्डर पैटर्न प्रोवाइड करके", "ऑटोमैटिक प्रोसेस फोर्किंग के माध्यम से", "शेल कमांड एक्जीक्यूशन के माध्यम से", "Async प्रोसेस हैंडलिंग का उपयोग करके"],
        "answer_en": "By providing a builder pattern for spawning processes",
        "answer_hi": "प्रोसेस स्पॉन करने के लिए बिल्डर पैटर्न प्रोवाइड करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the role of 'std::num::Wrapping' in Rust arithmetic?",
        "question_hi": "Rust अंकगणित में 'std::num::Wrapping' की क्या भूमिका है?",
        "options_en": ["Enable well-defined overflow behavior", "Prevent all overflow", "Detect overflow at runtime", "Optimize arithmetic operations"],
        "options_hi": ["वेल-डिफाइंड ओवरफ्लो बिहेवियर सक्षम करना", "सभी ओवरफ्लो रोकना", "रनटाइम पर ओवरफ्लो डिटेक्ट करना", "अंकगणित ऑपरेशन्स ऑप्टिमाइज़ करना"],
        "answer_en": "Enable well-defined overflow behavior",
        "answer_hi": "वेल-डिफाइंड ओवरफ्लो बिहेवियर सक्षम करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "How does Rust's 'std::collections::BinaryHeap' implement priority queues?",
        "question_hi": "Rust का 'std::collections::BinaryHeap' प्रायोरिटी क्यू कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Using a max-heap data structure", "Through sorted vectors", "Via linked lists", "Using balanced trees"],
        "options_hi": ["मैक्स-हीप डेटा स्ट्रक्चर का उपयोग करके", "सॉर्टेड वेक्टर्स के माध्यम से", "लिंक्ड लिस्ट्स के माध्यम से", "बैलेंस्ड ट्रीज़ का उपयोग करके"],
        "answer_en": "Using a max-heap data structure",
        "answer_hi": "मैक्स-हीप डेटा स्ट्रक्चर का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the purpose of 'std::mem::transmute' in unsafe Rust?",
        "question_hi": "अनसेफ Rust में 'std::mem::transmute' का उद्देश्य क्या है?",
        "options_en": ["Reinterpret bits of one type as another", "Safe type conversion", "Memory allocation", "Garbage collection"],
        "options_hi": ["एक टाइप के बिट्स को दूसरे टाइप के रूप में रीइंटरप्रेट करना", "सेफ टाइप कन्वर्जन", "मेमोरी अलोकेशन", "गार्बेज कलेक्शन"],
        "answer_en": "Reinterpret bits of one type as another",
        "answer_hi": "एक टाइप के बिट्स को दूसरे टाइप के रूप में रीइंटरप्रेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "How does Rust's 'std::fmt::Display' trait differ from 'Debug'?",
        "question_hi": "Rust का 'std::fmt::Display' ट्रेट 'Debug' से कैसे अलग है?",
        "options_en": ["Display is for user-facing output, Debug for developers", "Debug is more efficient", "Display supports more types", "Debug is automatically derived"],
        "options_hi": ["Display यूजर-फेसिंग आउटपुट के लिए है, Debug डेवलपर्स के लिए", "Debug अधिक एफिशिएंट है", "Display अधिक टाइप्स सपोर्ट करता है", "Debug ऑटोमैटिकली डेरिव होता है"],
        "answer_en": "Display is for user-facing output, Debug for developers",
        "answer_hi": "Display यूजर-फेसिंग आउटपुट के लिए है, Debug डेवलपर्स के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the primary use of 'std::sync::Barrier' in concurrent Rust?",
        "question_hi": "कंकरंट Rust में 'std::sync::Barrier' का प्राथमिक उपयोग क्या है?",
        "options_en": ["Synchronize multiple threads at a point", "Prevent data races", "Manage thread priorities", "Implement read-write locks"],
        "options_hi": ["एक बिंदु पर मल्टीपल थ्रेड्स को सिंक्रोनाइज़ करना", "डेटा रेस रोकना", "थ्रेड प्रायोरिटीज मैनेज करना", "रीड-राइट लॉक्स इम्प्लीमेंट करना"],
        "answer_en": "Synchronize multiple threads at a point",
        "answer_hi": "एक बिंदु पर मल्टीपल थ्रेड्स को सिंक्रोनाइज़ करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How does Rust's 'std::path::Path' handle cross-platform path differences?",
        "question_hi": "Rust का 'std::path::Path' क्रॉस-प्लेटफॉर्म पाथ डिफरेंसेस को कैसे हैंडल करता है?",
        "options_en": ["By providing platform-agnostic path manipulation", "Through conditional compilation", "Via environment variables", "Using different types per platform"],
        "options_hi": ["प्लेटफॉर्म-एग्नोस्टिक पाथ मैनिपुलेशन प्रोवाइड करके", "कंडीशनल कंपाइलेशन के माध्यम से", "एनवायरनमेंट वेरिएबल्स के माध्यम से", "प्रति प्लेटफॉर्म अलग-अलग टाइप्स का उपयोग करके"],
        "answer_en": "By providing platform-agnostic path manipulation",
        "answer_hi": "प्लेटफॉर्म-एग्नोस्टिक पाथ मैनिपुलेशन प्रोवाइड करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the purpose of 'std::time::Instant' in Rust?",
        "question_hi": "Rust में 'std::time::Instant' का उद्देश्य क्या है?",
        "options_en": ["Measure elapsed time with high precision", "Get current system time", "Create timers", "Handle time zones"],
        "options_hi": ["हाई प्रिसिजन के साथ बीता हुआ समय मापना", "करंट सिस्टम टाइम प्राप्त करना", "टाइमर बनाना", "टाइम जोन्स हैंडल करना"],
        "answer_en": "Measure elapsed time with high precision",
        "answer_hi": "हाई प्रिसिजन के साथ बीता हुआ समय मापना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "How does Rust's 'std::fs::Metadata' provide file information?",
        "question_hi": "Rust का 'std::fs::Metadata' फाइल इनफॉर्मेशन कैसे प्रोवाइड करता है?",
        "options_en": ["By querying file system for attributes", "Through file content analysis", "Via file extension parsing", "Using cached information"],
        "options_hi": ["एट्रिब्यूट्स के लिए फाइल सिस्टम क्वेरी करके", "फाइल कंटेंट एनालिसिस के माध्यम से", "फाइल एक्सटेंशन पार्सिंग के माध्यम से", "कैश्ड इनफॉर्मेशन का उपयोग करके"],
        "answer_en": "By querying file system for attributes",
        "answer_hi": "एट्रिब्यूट्स के लिए फाइल सिस्टम क्वेरी करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the role of 'std::cmp::Ordering' in Rust comparisons?",
        "question_hi": "Rust कम्पेयरिजन में 'std::cmp::Ordering' की क्या भूमिका है?",
        "options_en": ["Represent three-way comparison results", "Optimize comparison performance", "Enable fuzzy matching", "Handle floating-point comparisons"],
        "options_hi": ["थ्री-वे कम्पेयरिजन रिजल्ट्स रिप्रेजेंट करना", "कम्पेयरिजन परफॉर्मेंस ऑप्टिमाइज़ करना", "फजी मैचिंग सक्षम करना", "फ्लोटिंग-पॉइंट कम्पेयरिजन हैंडल करना"],
        "answer_en": "Represent three-way comparison results",
        "answer_hi": "थ्री-वे कम्पेयरिजन रिजल्ट्स रिप्रेजेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "How does Rust's 'std::env' module interact with the operating system?",
        "question_hi": "Rust का 'std::env' मॉड्यूल ऑपरेटिंग सिस्टम के साथ कैसे इंटरैक्ट करता है?",
        "options_en": ["Access environment variables and command-line arguments", "Modify system configuration", "Control process execution", "Manage system resources"],
        "options_hi": ["एनवायरनमेंट वेरिएबल्स और कमांड-लाइन आर्गुमेंट्स एक्सेस करना", "सिस्टम कॉन्फ़िगरेशन मॉडिफाई करना", "प्रोसेस एक्जीक्यूशन कंट्रोल करना", "सिस्टम रिसोर्सेज मैनेज करना"],
        "answer_en": "Access environment variables and command-line arguments",
        "answer_hi": "एनवायरनमेंट वेरिएबल्स और कमांड-लाइन आर्गुमेंट्स एक्सेस करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the purpose of 'std::io::BufReader' in Rust I/O?",
        "question_hi": "Rust I/O में 'std::io::BufReader' का उद्देश्य क्या है?",
        "options_en": ["Reduce system calls by buffering reads", "Increase read speed automatically", "Handle binary data", "Provide async I/O"],
        "options_hi": ["बफरिंग रीड्स द्वारा सिस्टम कॉल्स कम करना", "ऑटोमैटिकली रीड स्पीड बढ़ाना", "बाइनरी डेटा हैंडल करना", "Async I/O प्रोवाइड करना"],
        "answer_en": "Reduce system calls by buffering reads",
        "answer_hi": "बफरिंग रीड्स द्वारा सिस्टम कॉल्स कम करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "How does Rust's 'std::collections::HashMap' handle key collisions?",
        "question_hi": "Rust का 'std::collections::HashMap' की कॉलिजन्स को कैसे हैंडल करता है?",
        "options_en": ["Using Robin Hood hashing with SIMD lookup", "Through separate chaining", "Via open addressing", "Using perfect hashing"],
        "options_hi": ["SIMD लुकअप के साथ रॉबिन हुड हैशिंग का उपयोग करके", "सेपरेट चेनिंग के माध्यम से", "ओपन एड्रेसिंग के माध्यम से", "परफेक्ट हैशिंग का उपयोग करके"],
        "answer_en": "Using Robin Hood hashing with SIMD lookup",
        "answer_hi": "SIMD लुकअप के साथ रॉबिन हुड हैशिंग का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the role of 'std::sync::Once' in Rust initialization?",
        "question_hi": "Rust इनिशियलाइज़ेशन में 'std::sync::Once' की क्या भूमिका है?",
        "options_en": ["Ensure one-time initialization in thread-safe manner", "Prevent multiple instances", "Handle lazy initialization", "All of the above"],
        "options_hi": ["थ्रेड-सेफ तरीके से वन-टाइम इनिशियलाइज़ेशन सुनिश्चित करना", "मल्टीपल इंस्टेंसेस रोकना", "लेजी इनिशियलाइज़ेशन हैंडल करना", "उपरोक्त सभी"],
        "answer_en": "Ensure one-time initialization in thread-safe manner",
        "answer_hi": "थ्रेड-सेफ तरीके से वन-टाइम इनिशियलाइज़ेशन सुनिश्चित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How does Rust's 'std::ffi::CString' facilitate FFI?",
        "question_hi": "Rust का 'std::ffi::CString' FFI को कैसे सुविधाजनक बनाता है?",
        "options_en": ["Create null-terminated C-compatible strings", "Convert between string encodings", "Handle string memory allocation", "All of the above"],
        "options_hi": ["नल-टर्मिनेटेड C-कम्पेटिबल स्ट्रिंग्स बनाना", "स्ट्रिंग एन्कोडिंग्स के बीच कन्वर्ट करना", "स्ट्रिंग मेमोरी अलोकेशन हैंडल करना", "उपरोक्त सभी"],
        "answer_en": "Create null-terminated C-compatible strings",
        "answer_hi": "नल-टर्मिनेटेड C-कम्पेटिबल स्ट्रिंग्स बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the purpose of 'std::num::NonZeroU32' in Rust?",
        "question_hi": "Rust में 'std::num::NonZeroU32' का उद्देश्य क्या है?",
        "options_en": ["Enable memory optimization for Option<NonZeroU32>", "Prevent zero values", "Ensure positive numbers", "All of the above"],
        "options_hi": ["Option<NonZeroU32> के लिए मेमोरी ऑप्टिमाइज़ेशन सक्षम करना", "जीरो वैल्यूज रोकना", "पॉजिटिव नंबर्स सुनिश्चित करना", "उपरोक्त सभी"],
        "answer_en": "Enable memory optimization for Option<NonZeroU32>",
        "answer_hi": "Option<NonZeroU32> के लिए मेमोरी ऑप्टिमाइज़ेशन सक्षम करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "How does Rust's 'std::thread::LocalKey' work with thread-local storage?",
        "question_hi": "Rust का 'std::thread::LocalKey' थ्रेड-लोकल स्टोरेज के साथ कैसे काम करता है?",
        "options_en": ["Provides type-safe access to thread-local data", "Automatically shares data between threads", "Synchronizes access to global data", "Manages thread pools"],
        "options_hi": ["थ्रेड-लोकल डेटा तक टाइप-सेफ एक्सेस प्रोवाइड करता है", "थ्रेड्स के बीच डेटा ऑटोमैटिकली शेयर करता है", "ग्लोबल डेटा तक एक्सेस सिंक्रोनाइज़ करता है", "थ्रेड पूल्स मैनेज करता है"],
        "answer_en": "Provides type-safe access to thread-local data",
        "answer_hi": "थ्रेड-लोकल डेटा तक टाइप-सेफ एक्सेस प्रोवाइड करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the role of 'std::panic::catch_unwind' in Rust error handling?",
        "question_hi": "Rust एरर हैंडलिंग में 'std::panic::catch_unwind' की क्या भूमिका है?",
        "options_en": ["Recover from panics in controlled manner", "Prevent all panics", "Convert panics to errors", "All of the above"],
        "options_hi": ["कंट्रोल्ड तरीके से पैनिक्स से रिकवर करना", "सभी पैनिक्स रोकना", "पैनिक्स को एरर्स में कन्वर्ट करना", "उपरोक्त सभी"],
        "answer_en": "Recover from panics in controlled manner",
        "answer_hi": "कंट्रोल्ड तरीके से पैनिक्स से रिकवर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How does Rust's 'std::sync::MutexGuard' implement RAII for locks?",
        "question_hi": "Rust का 'std::sync::MutexGuard' लॉक्स के लिए RAII कैसे इम्प्लीमेंट करता है?",
        "options_en": ["Automatically releases lock when guard goes out of scope", "Manages lock acquisition timing", "Provides deadlock detection", "Optimizes lock performance"],
        "options_hi": ["गार्ड के स्कोप से बाहर जाने पर ऑटोमैटिकली लॉक रिलीज करता है", "लॉक एक्विजिशन टाइमिंग मैनेज करता है", "डेडलॉक डिटेक्शन प्रोवाइड करता है", "लॉक परफॉर्मेंस ऑप्टिमाइज़ करता है"],
        "answer_en": "Automatically releases lock when guard goes out of scope",
        "answer_hi": "गार्ड के स्कोप से बाहर जाने पर ऑटोमैटिकली लॉक रिलीज करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the purpose of 'std::mem::MaybeUninit' in Rust?",
        "question_hi": "Rust में 'std::mem::MaybeUninit' का उद्देश्य क्या है?",
        "options_en": ["Handle uninitialized memory safely", "Optimize memory allocation", "Prevent memory leaks", "Enable zero-copy operations"],
        "options_hi": ["अनइनिशियलाइज्ड मेमोरी को सेफली हैंडल करना", "मेमोरी अलोकेशन ऑप्टिमाइज़ करना", "मेमोरी लीक्स रोकना", "जीरो-कॉपी ऑपरेशन्स सक्षम करना"],
        "answer_en": "Handle uninitialized memory safely",
        "answer_hi": "अनइनिशियलाइज्ड मेमोरी को सेफली हैंडल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "How does Rust's 'std::iter::FromIterator' trait enable collection creation?",
        "question_hi": "Rust का 'std::iter::FromIterator' ट्रेट कलेक्शन क्रिएशन कैसे सक्षम करता है?",
        "options_en": ["Convert iterators into collections", "Create iterators from collections", "Optimize iteration performance", "Handle infinite sequences"],
        "options_hi": ["इटरेटर्स को कलेक्शन्स में कन्वर्ट करना", "कलेक्शन्स से इटरेटर्स बनाना", "इटरेशन परफॉर्मेंस ऑप्टिमाइज़ करना", "इनफिनाइट सीक्वेंसेस हैंडल करना"],
        "answer_en": "Convert iterators into collections",
        "answer_hi": "इटरेटर्स को कलेक्शन्स में कन्वर्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the role of 'std::ops::Index' in Rust containers?",
        "question_hi": "Rust कंटेनर्स में 'std::ops::Index' की क्या भूमिका है?",
        "options_en": ["Enable indexing syntax like container[index]", "Provide bounds checking", "Optimize access patterns", "Handle out-of-bounds access"],
        "options_hi": ["container[index] जैसे इंडेक्सिंग सिंटैक्स सक्षम करना", "बाउंड्स चेकिंग प्रोवाइड करना", "एक्सेस पैटर्न्स ऑप्टिमाइज़ करना", "आउट-ऑफ-बाउंड्स एक्सेस हैंडल करना"],
        "answer_en": "Enable indexing syntax like container[index]",
        "answer_hi": "container[index] जैसे इंडेक्सिंग सिंटैक्स सक्षम करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How does Rust's 'std::future::Future' trait enable async programming?",
        "question_hi": "Rust का 'std::future::Future' ट्रेट async प्रोग्रामिंग कैसे सक्षम करता है?",
        "options_en": ["Represent asynchronous computations that can be polled", "Automatically execute tasks", "Handle thread creation", "Manage memory for async operations"],
        "options_hi": ["पोल किए जा सकने वाले असिंक्रोनस कम्प्यूटेशन्स को रिप्रेजेंट करना", "ऑटोमैटिकली टास्क्स एक्जीक्यूट करना", "थ्रेड क्रिएशन हैंडल करना", "async ऑपरेशन्स के लिए मेमोरी मैनेज करना"],
        "answer_en": "Represent asynchronous computations that can be polled",
        "answer_hi": "पोल किए जा सकने वाले असिंक्रोनस कम्प्यूटेशन्स को रिप्रेजेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the purpose of 'std::str::FromStr' trait in Rust?",
        "question_hi": "Rust में 'std::str::FromStr' ट्रेट का उद्देश्य क्या है?",
        "options_en": ["Parse strings into other types", "Convert types to strings", "Handle string encoding", "Optimize string operations"],
        "options_hi": ["स्ट्रिंग्स को अन्य टाइप्स में पार्स करना", "टाइप्स को स्ट्रिंग्स में कन्वर्ट करना", "स्ट्रिंग एन्कोडिंग हैंडल करना", "स्ट्रिंग ऑपरेशन्स ऑप्टिमाइज़ करना"],
        "answer_en": "Parse strings into other types",
        "answer_hi": "स्ट्रिंग्स को अन्य टाइप्स में पार्स करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "How does Rust's 'std::collections::BTreeMap' differ from HashMap?",
        "question_hi": "Rust का 'std::collections::BTreeMap' HashMap से कैसे अलग है?",
        "options_en": ["BTreeMap maintains sorted order, HashMap does not", "HashMap is faster", "BTreeMap uses less memory", "HashMap supports more key types"],
        "options_hi": ["BTreeMap सॉर्टेड ऑर्डर मेंटेन करता है, HashMap नहीं करता", "HashMap तेज है", "BTreeMap कम मेमोरी उपयोग करता है", "HashMap अधिक की टाइप्स सपोर्ट करता है"],
        "answer_en": "BTreeMap maintains sorted order, HashMap does not",
        "answer_hi": "BTreeMap सॉर्टेड ऑर्डर मेंटेन करता है, HashMap नहीं करता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the role of 'std::sync::atomic::Ordering' in concurrent Rust?",
        "question_hi": "कंकरंट Rust में 'std::sync::atomic::Ordering' की क्या भूमिका है?",
        "options_en": ["Specify memory ordering constraints for atomic operations", "Control thread scheduling", "Manage lock acquisition order", "Optimize cache performance"],
        "options_hi": ["एटॉमिक ऑपरेशन्स के लिए मेमोरी ऑर्डरिंग कंस्ट्रेंट्स स्पेसिफाई करना", "थ्रेड स्केड्यूलिंग कंट्रोल करना", "लॉक एक्विजिशन ऑर्डर मैनेज करना", "कैश परफॉर्मेंस ऑप्टिमाइज़ करना"],
        "answer_en": "Specify memory ordering constraints for atomic operations",
        "answer_hi": "एटॉमिक ऑपरेशन्स के लिए मेमोरी ऑर्डरिंग कंस्ट्रेंट्स स्पेसिफाई करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How does Rust's 'std::io::Seek' trait enable random access in files?",
        "question_hi": "Rust का 'std::io::Seek' ट्रेट फाइल्स में रैंडम एक्सेस कैसे सक्षम करता है?",
        "options_en": ["By allowing movement to different positions in a stream", "Through memory mapping", "Via file caching", "Using database-like indexing"],
        "options_hi": ["स्ट्रीम में विभिन्न पोजिशन्स पर मूवमेंट की अनुमति देकर", "मेमोरी मैपिंग के माध्यम से", "फाइल कैशिंग के माध्यम से", "डेटाबेस-लाइक इंडेक्सिंग का उपयोग करके"],
        "answer_en": "By allowing movement to different positions in a stream",
        "answer_hi": "स्ट्रीम में विभिन्न पोजिशन्स पर मूवमेंट की अनुमति देकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the purpose of 'std::net::ToSocketAddrs' trait in Rust networking?",
        "question_hi": "Rust नेटवर्किंग में 'std::net::ToSocketAddrs' ट्रेट का उद्देश्य क्या है?",
        "options_en": ["Convert various types to socket addresses", "Manage network connections", "Handle DNS resolution", "All of the above"],
        "options_hi": ["विभिन्न टाइप्स को सॉकेट एड्रेसेस में कन्वर्ट करना", "नेटवर्क कनेक्शन्स मैनेज करना", "DNS रेजोल्यूशन हैंडल करना", "उपरोक्त सभी"],
        "answer_en": "Convert various types to socket addresses",
        "answer_hi": "विभिन्न टाइप्स को सॉकेट एड्रेसेस में कन्वर्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "How does Rust's 'std::ops::RangeBounds' trait work with range syntax?",
        "question_hi": "Rust का 'std::ops::RangeBounds' ट्रेट रेंज सिंटैक्स के साथ कैसे काम करता है?",
        "options_en": ["Enable various range patterns like .., a.., ..b, a..=b", "Optimize range iteration", "Handle range validation", "Provide range arithmetic"],
        "options_hi": ["विभिन्न रेंज पैटर्न्स को सक्षम करना जैसे .., a.., ..b, a..=b", "रेंज इटरेशन ऑप्टिमाइज़ करना", "रेंज वैलिडेशन हैंडल करना", "रेंज अंकगणित प्रोवाइड करना"],
        "answer_en": "Enable various range patterns like .., a.., ..b, a..=b",
        "answer_hi": "विभिन्न रेंज पैटर्न्स को सक्षम करना जैसे .., a.., ..b, a..=b",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the role of 'std::convert::TryFrom' in Rust error-prone conversions?",
        "question_hi": "Rust एरर-प्रोन कन्वर्जन में 'std::convert::TryFrom' की क्या भूमिका है?",
        "options_en": ["Perform conversions that might fail, returning Result", "Optimize successful conversions", "Handle type coercion", "Provide fallback values"],
        "options_hi": ["फेल हो सकने वाले कन्वर्जन परफॉर्म करना, Result रिटर्न करना", "सफल कन्वर्जन ऑप्टिमाइज़ करना", "टाइप कोर्शन हैंडल करना", "फॉलबैक वैल्यूज प्रोवाइड करना"],
        "answer_en": "Perform conversions that might fail, returning Result",
        "answer_hi": "फेल हो सकने वाले कन्वर्जन परफॉर्म करना, Result रिटर्न करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "How does Rust's 'std::task::Context' enable async execution?",
        "question_hi": "Rust का 'std::task::Context' async एक्जीक्यूशन कैसे सक्षम करता है?",
        "options_en": ["Provide waker for resuming async tasks", "Manage thread pools", "Handle task scheduling", "All of the above"],
        "options_hi": ["async टास्क्स को रिज्यूम करने के लिए वेकर प्रोवाइड करना", "थ्रेड पूल्स मैनेज करना", "टास्क स्केड्यूलिंग हैंडल करना", "उपरोक्त सभी"],
        "answer_en": "Provide waker for resuming async tasks",
        "answer_hi": "async टास्क्स को रिज्यूम करने के लिए वेकर प्रोवाइड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the purpose of 'std::mem::size_of_val' in Rust?",
        "question_hi": "Rust में 'std::mem::size_of_val' का उद्देश्य क्या है?",
        "options_en": ["Get size of value including dynamically sized types", "Measure only stack size", "Calculate heap allocation size", "Determine type size at runtime"],
        "options_hi": ["डायनामिकली साइज्ड टाइप्स सहित वैल्यू का साइज प्राप्त करना", "केवल स्टैक साइज मापना", "हीप अलोकेशन साइज कैलकुलेट करना", "रनटाइम पर टाइप साइज निर्धारित करना"],
        "answer_en": "Get size of value including dynamically sized types",
        "answer_hi": "डायनामिकली साइज्ड टाइप्स सहित वैल्यू का साइज प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "How does Rust's 'std::sync::mpsc::sync_channel' differ from channel?",
        "question_hi": "Rust का 'std::sync::mpsc::sync_channel' channel से कैसे अलग है?",
        "options_en": ["sync_channel has bounded capacity, channel is unbounded", "channel is faster", "sync_channel supports more senders", "channel is thread-safe"],
        "options_hi": ["sync_channel की बाउंडेड कैपेसिटी है, channel अनबाउंडेड है", "channel तेज है", "sync_channel अधिक सेंडर्स सपोर्ट करता है", "channel थ्रेड-सेफ है"],
        "answer_en": "sync_channel has bounded capacity, channel is unbounded",
        "answer_hi": "sync_channel की बाउंडेड कैपेसिटी है, channel अनबाउंडेड है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the role of 'std::ops::Drop' in Rust resource management?",
        "question_hi": "Rust रिसोर्स मैनेजमेंट में 'std::ops::Drop' की क्या भूमिका है?",
        "options_en": ["Define custom cleanup code when value goes out of scope", "Automatically free memory", "Handle garbage collection", "Manage reference counting"],
        "options_hi": ["वैल्यू के स्कोप से बाहर जाने पर कस्टम क्लीनअप कोड डिफाइन करना", "ऑटोमैटिकली मेमोरी फ्री करना", "गार्बेज कलेक्शन हैंडल करना", "रिफरेन्स काउंटिंग मैनेज करना"],
        "answer_en": "Define custom cleanup code when value goes out of scope",
        "answer_hi": "वैल्यू के स्कोप से बाहर जाने पर कस्टम क्लीनअप कोड डिफाइन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How does Rust's 'std::collections::VecDeque' enable efficient queue operations?",
        "question_hi": "Rust का 'std::collections::VecDeque' एफिशिएंट क्यू ऑपरेशन्स कैसे सक्षम करता है?",
        "options_en": ["Using ring buffer with O(1) push/pop from both ends", "Through linked lists", "Via dynamic arrays", "Using heap structures"],
        "options_hi": ["दोनों सिरों से O(1) push/pop के साथ रिंग बफर का उपयोग करके", "लिंक्ड लिस्ट्स के माध्यम से", "डायनामिक ऐरे के माध्यम से", "हीप स्ट्रक्चर्स का उपयोग करके"],
        "answer_en": "Using ring buffer with O(1) push/pop from both ends",
        "answer_hi": "दोनों सिरों से O(1) push/pop के साथ रिंग बफर का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the purpose of 'std::sync::Condvar' in Rust synchronization?",
        "question_hi": "Rust सिंक्रोनाइज़ेशन में 'std::sync::Condvar' का उद्देश्य क्या है?",
        "options_en": ["Allow threads to wait for condition changes", "Prevent deadlocks", "Optimize lock performance", "Manage thread priorities"],
        "options_hi": ["थ्रेड्स को कंडीशन चेंजेस के लिए वेट करने की अनुमति देना", "डेडलॉक्स रोकना", "लॉक परफॉर्मेंस ऑप्टिमाइज़ करना", "थ्रेड प्रायोरिटीज मैनेज करना"],
        "answer_en": "Allow threads to wait for condition changes",
        "answer_hi": "थ्रेड्स को कंडीशन चेंजेस के लिए वेट करने की अनुमति देना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "How does Rust's 'std::iter::Peekable' enhance iterator functionality?",
        "question_hi": "Rust का 'std::iter::Peekable' इटरेटर फंक्शनैलिटी कैसे बढ़ाता है?",
        "options_en": ["Allow looking at next element without consuming it", "Optimize iteration speed", "Handle infinite iterators", "Provide random access"],
        "options_hi": ["अगले एलिमेंट को कंज्यूम किए बिना देखने की अनुमति देना", "इटरेशन स्पीड ऑप्टिमाइज़ करना", "इनफिनाइट इटरेटर्स हैंडल करना", "रैंडम एक्सेस प्रोवाइड करना"],
        "answer_en": "Allow looking at next element without consuming it",
        "answer_hi": "अगले एलिमेंट को कंज्यूम किए बिना देखने की अनुमति देना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the role of 'std::num::FpCategory' in Rust floating-point operations?",
        "question_hi": "Rust फ्लोटिंग-पॉइंट ऑपरेशन्स में 'std::num::FpCategory' की क्या भूमिका है?",
        "options_en": ["Classify floating-point values (Normal, Subnormal, Zero, Infinite, NaN)", "Optimize float operations", "Handle rounding errors", "Provide mathematical functions"],
        "options_hi": ["फ्लोटिंग-पॉइंट वैल्यूज को क्लासिफाई करना (Normal, Subnormal, Zero, Infinite, NaN)", "फ्लोट ऑपरेशन्स ऑप्टिमाइज़ करना", "राउंडिंग एरर्स हैंडल करना", "मैथमेटिकल फंक्शन्स प्रोवाइड करना"],
        "answer_en": "Classify floating-point values (Normal, Subnormal, Zero, Infinite, NaN)",
        "answer_hi": "फ्लोटिंग-पॉइंट वैल्यूज को क्लासिफाई करना (Normal, Subnormal, Zero, Infinite, NaN)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "How does Rust's 'std::ops::DerefMut' enable mutable smart pointer behavior?",
        "question_hi": "Rust का 'std::ops::DerefMut' म्यूटेबल स्मार्ट पॉइंटर बिहेवियर कैसे सक्षम करता है?",
        "options_en": ["Allow mutable dereferencing through &mut *ptr", "Provide immutable access", "Handle reference counting", "Optimize memory usage"],
        "options_hi": ["&mut *ptr के माध्यम से म्यूटेबल डेरिफरेंसिंग की अनुमति देना", "इम्म्यूटेबल एक्सेस प्रोवाइड करना", "रिफरेन्स काउंटिंग हैंडल करना", "मेमोरी यूज ऑप्टिमाइज़ करना"],
        "answer_en": "Allow mutable dereferencing through &mut *ptr",
        "answer_hi": "&mut *ptr के माध्यम से म्यूटेबल डेरिफरेंसिंग की अनुमति देना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is 'cell' used for?",
        "question_hi": "'cell' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Interior mutability", "Cell storage", "Memory cells", "Data cells"],
        "options_hi": ["इंटीरियर म्यूटेबिलिटी", "सेल स्टोरेज", "मेमोरी सेल्स", "डेटा सेल्स"],
        "answer_en": "Interior mutability",
        "answer_hi": "इंटीरियर म्यूटेबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which trait is used for hashing?",
        "question_hi": "हैशिंग के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["Hash", "Hashing", "Digest", "Hasher"],
        "options_hi": ["Hash", "Hashing", "Digest", "Hasher"],
        "answer_en": "Hash",
        "answer_hi": "Hash",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is 'crate' in Rust?",
        "question_hi": "Rust में 'crate' क्या है?",
        "options_en": ["Compilation unit", "Package", "Library", "All of the above"],
        "options_hi": ["कंपाइलेशन यूनिट", "पैकेज", "लाइब्रेरी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "How do you handle floating point numbers?",
        "question_hi": "आप फ्लोटिंग पॉइंट नंबर्स को कैसे हैंडल करते हैं?",
        "options_en": ["f32 and f64", "float and double", "only f64", "only f32"],
        "options_hi": ["f32 और f64", "float और double", "केवल f64", "केवल f32"],
        "answer_en": "f32 and f64",
        "answer_hi": "f32 और f64",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is 'never type' in Rust?",
        "question_hi": "Rust में 'never type' क्या है?",
        "options_en": ["!", "never", "None", "void"],
        "options_hi": ["!", "never", "None", "void"],
        "answer_en": "!",
        "answer_hi": "!",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which method is used for vector pushing?",
        "question_hi": "वेक्टर पुशिंग के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["push()", "add()", "append()", "insert()"],
        "options_hi": ["push()", "add()", "append()", "insert()"],
        "answer_en": "push()",
        "answer_hi": "push()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is 'Send' trait for?",
        "question_hi": "'Send' ट्रेट किस लिए है?",
        "options_en": ["Thread safety", "Memory safety", "Both A and B", "None of the above"],
        "options_hi": ["थ्रेड सेफ्टी", "मेमोरी सेफ्टी", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Thread safety",
        "answer_hi": "थ्रेड सेफ्टी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "How do you create a raw pointer?",
        "question_hi": "आप रॉ पॉइंटर कैसे बनाते हैं?",
        "options_en": ["as *const T", "raw_ptr()", "pointer()", "Ptr::new()"],
        "options_hi": ["as *const T", "raw_ptr()", "pointer()", "Ptr::new()"],
        "answer_en": "as *const T",
        "answer_hi": "as *const T",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is 'Sync' trait for?",
        "question_hi": "'Sync' ट्रेट किस लिए है?",
        "options_en": ["Thread-safe references", "Memory synchronization", "Both A and B", "None of the above"],
        "options_hi": ["थ्रेड-सेफ रिफरेन्सेस", "मेमोरी सिंक्रोनाइज़ेशन", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Thread-safe references",
        "answer_hi": "थ्रेड-सेफ रिफरेन्सेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which method is used for option matching?",
        "question_hi": "ऑप्शन मैचिंग के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["match", "if let", "Both A and B", "unwrap"],
        "options_hi": ["match", "if let", "A और B दोनों", "unwrap"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is 'const fn' used for?",
        "question_hi": "'const fn' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Compile-time evaluation", "Constant functions", "Both A and B", "None of the above"],
        "options_hi": ["कंपाइल-टाइम एवेलुएशन", "कॉन्स्टेंट फंक्शन्स", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "How do you handle network programming?",
        "question_hi": "आप नेटवर्क प्रोग्रामिंग को कैसे हैंडल करते हैं?",
        "options_en": ["Using std::net", "Using tokio", "Using async-std", "All of the above"],
        "options_hi": ["std::net का उपयोग करके", "tokio का उपयोग करके", "async-std का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is 'turbofish' syntax?",
        "question_hi": "'turbofish' सिंटैक्स क्या है?",
        "options_en": ["::<>", "->", "=>", "<>"],
        "options_hi": ["::<>", "->", "=>", "<>"],
        "answer_en": "::<>",
        "answer_hi": "::<>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which trait is used for conversion?",
        "question_hi": "कन्वर्जन के लिए किस ट्रेट का उपयोग किया जाता है?",
        "options_en": ["From and Into", "Convert", "Transform", "Change"],
        "options_hi": ["From और Into", "Convert", "Transform", "Change"],
        "answer_en": "From and Into",
        "answer_hi": "From और Into",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is 'associated type'?",
        "question_hi": "'associated type' क्या है?",
        "options_en": ["Type connected to trait", "Type alias", "Generic type", "Trait type"],
        "options_hi": ["ट्रेट से कनेक्टेड टाइप", "टाइप एलियास", "जेनेरिक टाइप", "ट्रेट टाइप"],
        "answer_en": "Type connected to trait",
        "answer_hi": "ट्रेट से कनेक्टेड टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "How do you create a function pointer?",
        "question_hi": "आप फंक्शन पॉइंटर कैसे बनाते हैं?",
        "options_en": ["fn pointer", "function pointer", "&fn", "Function::ptr"],
        "options_hi": ["fn pointer", "function pointer", "&fn", "Function::ptr"],
        "answer_en": "fn pointer",
        "answer_hi": "fn pointer",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is 'unit type' in Rust?",
        "question_hi": "Rust में 'unit type' क्या है?",
        "options_en": ["()", "unit", "void", "none"],
        "options_hi": ["()", "unit", "void", "none"],
        "answer_en": "()",
        "answer_hi": "()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which method is used for string concatenation?",
        "question_hi": "स्ट्रिंग कॉन्कटीनेशन के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["+ operator", "concat()", "join()", "All of the above"],
        "options_hi": ["+ ऑपरेटर", "concat()", "join()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is 'macro_rules!' used for?",
        "question_hi": "'macro_rules!' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Define macros", "Rule-based macros", "Both A and B", "None of the above"],
        "options_hi": ["मैक्रोस डिफाइन करना", "रूल-बेस्ड मैक्रोस", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "How do you handle JSON in Rust?",
        "question_hi": "Rust में JSON को कैसे हैंडल करते हैं?",
        "options_en": ["Using serde", "Using json crate", "Both A and B", "Using std::json"],
        "options_hi": ["serde का उपयोग करके", "json crate का उपयोग करके", "A और B दोनों", "std::json का उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is 'zero-cost abstraction'?",
        "question_hi": "'zero-cost abstraction' क्या है?",
        "options_en": ["No runtime overhead", "Free abstractions", "Both A and B", "Compile-time cost"],
        "options_hi": ["कोई रनटाइम ओवरहेड नहीं", "फ्री एब्स्ट्रैक्शन्स", "A और B दोनों", "कंपाइल-टाइम कॉस्ट"],
        "answer_en": "No runtime overhead",
        "answer_hi": "कोई रनटाइम ओवरहेड नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which method is used for error handling in main?",
        "question_hi": "main में एरर हैंडलिंग के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["Result return", "panic!", "unwrap", "All of the above"],
        "options_hi": ["Result रिटर्न", "panic!", "unwrap", "उपरोक्त सभी"],
        "answer_en": "Result return",
        "answer_hi": "Result रिटर्न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is 'pin' used for?",
        "question_hi": "'pin' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Self-referential structs", "Memory pinning", "Both A and B", "None of the above"],
        "options_hi": ["सेल्फ-रेफरेंशियल स्ट्रक्चर्स", "मेमोरी पिनिंग", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "How do you create a generic function?",
        "question_hi": "आप जेनेरिक फंक्शन कैसे बनाते हैं?",
        "options_en": ["fn name<T>()", "generic fn name()", "fn name<generic>()", "function<T> name()"],
        "options_hi": ["fn name<T>()", "generic fn name()", "fn name<generic>()", "function<T> name()"],
        "answer_en": "fn name<T>()",
        "answer_hi": "fn name<T>()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is 'unsafe trait'?",
        "question_hi": "'unsafe trait' क्या है?",
        "options_en": ["Trait with unsafe contracts", "Unsafe implementation", "Both A and B", "None of the above"],
        "options_hi": ["अनसेफ कॉन्ट्रैक्ट्स वाला ट्रेट", "अनसेफ इम्प्लीमेंटेशन", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Trait with unsafe contracts",
        "answer_hi": "अनसेफ कॉन्ट्रैक्ट्स वाला ट्रेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which method is used for memory allocation?",
        "question_hi": "मेमोरी अलोकेशन के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["Box::new()", "alloc()", "malloc()", "All of the above"],
        "options_hi": ["Box::new()", "alloc()", "malloc()", "उपरोक्त सभी"],
        "answer_en": "Box::new()",
        "answer_hi": "Box::new()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is 'non-lexical lifetimes'?",
        "question_hi": "'non-lexical lifetimes' क्या है?",
        "options_en": ["Improved borrow checker", "New lifetime system", "Both A and B", "None of the above"],
        "options_hi": ["इम्प्रूव्ड बोरो चेकर", "न्यू लाइफटाइम सिस्टम", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Improved borrow checker",
        "answer_hi": "इम्प्रूव्ड बोरो चेकर",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 89,
        "question_en": "What is the primary mechanism Rust uses to prevent data races at compile time?",
        "question_hi": "Rust कंपाइल टाइम पर डेटा रेस को रोकने के लिए किस प्राथमिक मैकेनिज्म का उपयोग करता है?",
        "options_en": ["Ownership system with borrow checker", "Runtime checks", "Garbage collection", "Manual memory management"],
        "options_hi": ["बोरो चेकर के साथ ओनरशिप सिस्टम", "रनटाइम चेक्स", "गार्बेज कलेक्शन", "मैन्युअल मेमोरी मैनेजमेंट"],
        "answer_en": "Ownership system with borrow checker",
        "answer_hi": "बोरो चेकर के साथ ओनरशिप सिस्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is 'const generics'?",
        "question_hi": "'const generics' क्या है?",
        "options_en": ["Generic constants", "Compile-time values in generics", "Both A and B", "None of the above"],
        "options_hi": ["जेनेरिक कॉन्स्टेंट्स", "जेनेरिक्स में कंपाइल-टाइम वैल्यूज", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Compile-time values in generics",
        "answer_hi": "जेनेरिक्स में कंपाइल-टाइम वैल्यूज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which method is used for async functions?",
        "question_hi": "async फंक्शन्स के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["async fn", "fn async", "await fn", "future fn"],
        "options_hi": ["async fn", "fn async", "await fn", "future fn"],
        "answer_en": "async fn",
        "answer_hi": "async fn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is 'tokio' used for?",
        "question_hi": "'tokio' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Async runtime", "Network programming", "Both A and B", "None of the above"],
        "options_hi": ["Async रनटाइम", "नेटवर्क प्रोग्रामिंग", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "How do you create a trait object?",
        "question_hi": "आप trait object कैसे बनाते हैं?",
        "options_en": ["&dyn Trait", "dyn Trait", "Trait object", "object Trait"],
        "options_hi": ["&dyn Trait", "dyn Trait", "Trait object", "object Trait"],
        "answer_en": "&dyn Trait",
        "answer_hi": "&dyn Trait",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is 'no_std' environment?",
        "question_hi": "'no_std' एनवायरनमेंट क्या है?",
        "options_en": ["Without standard library", "Embedded systems", "Both A and B", "None of the above"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी के बिना", "एम्बेडेड सिस्टम्स", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which method is used for memory copying?",
        "question_hi": "मेमोरी कॉपीिंग के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["copy_from_slice()", "memcpy()", "copy()", "clone()"],
        "options_hi": ["copy_from_slice()", "memcpy()", "copy()", "clone()"],
        "answer_en": "copy_from_slice()",
        "answer_hi": "copy_from_slice()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is 'Rustonomicon'?",
        "question_hi": "'Rustonomicon' क्या है?",
        "options_en": ["Unsafe Rust guide", "Rust Bible", "Both A and B", "None of the above"],
        "options_hi": ["अनसेफ Rust गाइड", "Rust बाइबल", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Unsafe Rust guide",
        "answer_hi": "अनसेफ Rust गाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "How do you handle SIMD in Rust?",
        "question_hi": "Rust में SIMD को कैसे हैंडल करते हैं?",
        "options_en": ["Using std::simd", "Using packed_simd", "Both A and B", "Using vector types"],
        "options_hi": ["std::simd का उपयोग करके", "packed_simd का उपयोग करके", "A और B दोनों", "वेक्टर टाइप्स का उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is 'FFI' in Rust?",
        "question_hi": "Rust में 'FFI' क्या है?",
        "options_en": ["Foreign Function Interface", "Function Foreign Interface", "Foreign File Interface", "Fast Function Interface"],
        "options_hi": ["फॉरेन फंक्शन इंटरफेस", "फंक्शन फॉरेन इंटरफेस", "फॉरेन फाइल इंटरफेस", "फास्ट फंक्शन इंटरफेस"],
        "answer_en": "Foreign Function Interface",
        "answer_hi": "फॉरेन फंक्शन इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which method is used for bit manipulation?",
        "question_hi": "बिट मैनिपुलेशन के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["Bitwise operators", "bitvec crate", "Both A and B", "bit manipulation functions"],
        "options_hi": ["बिटवाइज ऑपरेटर्स", "bitvec crate", "A और B दोनों", "बिट मैनिपुलेशन फंक्शन्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is 'cargo fmt' used for?",
        "question_hi": "'cargo fmt' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Code formatting", "Format cargo.toml", "Both A and B", "None of the above"],
        "options_hi": ["कोड फॉर्मेटिंग", "cargo.toml फॉर्मेट करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
        "answer_en": "Code formatting",
        "answer_hi": "कोड फॉर्मेटिंग",
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