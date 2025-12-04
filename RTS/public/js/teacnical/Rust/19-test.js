const questions = [
    {
        "num": 1,
        "question_en": "What is the difference between `Box<dyn Trait>` and `impl Trait` in return position?",
        "question_hi": "रिटर्न पोजीशन में `Box<dyn Trait>` और `impl Trait` में क्या अंतर है?",
        "options_en": ["Box<dyn Trait> is heap-allocated, impl Trait is static dispatch", "No difference", "impl Trait uses dynamic dispatch", "Box<dyn Trait> is faster"],
        "options_hi": ["Box<dyn Trait> हीप-अलोकेटेड है, impl Trait स्टैटिक डिस्पैच है", "कोई अंतर नहीं", "impl Trait डायनामिक डिस्पैच यूज करता है", "Box<dyn Trait> तेज है"],
        "answer_en": "Box<dyn Trait> is heap-allocated, impl Trait is static dispatch",
        "answer_hi": "Box<dyn Trait> हीप-अलोकेटेड है, impl Trait स्टैटिक डिस्पैच है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the purpose of the `NonNull` pointer type?",
        "question_hi": "`NonNull` पॉइंटर टाइप का उद्देश्य क्या है?",
        "options_en": ["Represent non-null raw pointers", "Null pointer optimization", "Safe null pointers", "Faster pointer arithmetic"],
        "options_hi": ["नॉन-नल रॉ पॉइंटर्स को रिप्रेजेंट करना", "नल पॉइंटर ऑप्टिमाइज़ेशन", "सेफ नल पॉइंटर्स", "तेज पॉइंटर अर्थमैटिक"],
        "answer_en": "Represent non-null raw pointers",
        "answer_hi": "नॉन-नल रॉ पॉइंटर्स को रिप्रेजेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What does the `ManuallyDrop` wrapper allow you to do?",
        "question_hi": "`ManuallyDrop` रैपर आपको क्या करने की अनुमति देता है?",
        "options_en": ["Prevent automatic destruction of a value", "Manual memory management", "Automatic drop optimization", "Forced destruction"],
        "options_hi": ["वैल्यू के ऑटोमैटिक डिस्ट्रक्शन को रोकना", "मैनुअल मेमोरी मैनेजमेंट", "ऑटोमैटिक ड्रॉप ऑप्टिमाइज़ेशन", "फोर्स्ड डिस्ट्रक्शन"],
        "answer_en": "Prevent automatic destruction of a value",
        "answer_hi": "वैल्यू के ऑटोमैटिक डिस्ट्रक्शन को रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the difference between `core` and `std` crates?",
        "question_hi": "`core` और `std` क्रेट्स में क्या अंतर है?",
        "options_en": ["core is for no-std environments, std requires OS", "core is larger", "std is for embedded", "No difference"],
        "options_hi": ["core नो-स्टडी एनवायरनमेंट्स के लिए है, std को OS की जरूरत है", "core बड़ा है", "std एम्बेडेड के लिए है", "कोई अंतर नहीं"],
        "answer_en": "core is for no-std environments, std requires OS",
        "answer_hi": "core नो-स्टडी एनवायरनमेंट्स के लिए है, std को OS की जरूरत है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of the `GlobalAlloc` trait?",
        "question_hi": "`GlobalAlloc` ट्रेट का उद्देश्य क्या है?",
        "options_en": ["Define global memory allocator", "Global variable allocation", "Heap management", "Memory optimization"],
        "options_hi": ["ग्लोबल मेमोरी अलोकेटर को डिफाइन करना", "ग्लोबल वेरिएबल अलोकेशन", "हीप मैनेजमेंट", "मेमोरी ऑप्टिमाइज़ेशन"],
        "answer_en": "Define global memory allocator",
        "answer_hi": "ग्लोबल मेमोरी अलोकेटर को डिफाइन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What does the `#[inline(always)]` attribute guarantee?",
        "question_hi": "`#[inline(always)]` एट्रिब्यूट क्या गारंटी देता है?",
        "options_en": ["Compiler will always inline the function", "Function will be faster", "No function call overhead", "Compiler must obey"],
        "options_hi": ["कंपाइलर हमेशा फंक्शन को इनलाइन करेगा", "फंक्शन तेज होगा", "कोई फंक्शन कॉल ओवरहेड नहीं", "कंपाइलर को मानना होगा"],
        "answer_en": "Compiler will always inline the function",
        "answer_hi": "कंपाइलर हमेशा फंक्शन को इनलाइन करेगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of the `MaybeUninit` type?",
        "question_hi": "`MaybeUninit` टाइप का उद्देश्य क्या है?",
        "options_en": ["Handle uninitialized memory safely", "Maybe initialize variables", "Uninitialized memory optimization", "Safe memory allocation"],
        "options_hi": ["अनइनिशियलाइज्ड मेमोरी को सेफली हैंडल करना", "शायद वेरिएबल्स इनिशियलाइज़ करें", "अनइनिशियलाइज्ड मेमोरी ऑप्टिमाइज़ेशन", "सेफ मेमोरी अलोकेशन"],
        "answer_en": "Handle uninitialized memory safely",
        "answer_hi": "अनइनिशियलाइज्ड मेमोरी को सेफली हैंडल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the difference between `Rc` and `Arc`?",
        "question_hi": "`Rc` और `Arc` में क्या अंतर है?",
        "options_en": ["Arc is thread-safe, Rc is not", "Rc is faster", "Arc uses less memory", "No difference"],
        "options_hi": ["Arc थ्रेड-सेफ है, Rc नहीं है", "Rc तेज है", "Arc कम मेमोरी यूज करता है", "कोई अंतर नहीं"],
        "answer_en": "Arc is thread-safe, Rc is not",
        "answer_hi": "Arc थ्रेड-सेफ है, Rc नहीं है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What does the `Cow` (Clone-on-Write) smart pointer optimize?",
        "question_hi": "`Cow` (क्लोन-ऑन-राइट) स्मार्ट पॉइंटर क्या ऑप्टिमाइज़ करता है?",
        "options_en": ["Avoid unnecessary clones", "Memory allocation", "Write operations", "Read operations"],
        "options_hi": ["अनावश्यक क्लोन्स से बचना", "मेमोरी अलोकेशन", "राइट ऑपरेशन्स", "रीड ऑपरेशन्स"],
        "answer_en": "Avoid unnecessary clones",
        "answer_hi": "अनावश्यक क्लोन्स से बचना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the purpose of the `FromRaw` trait pattern?",
        "question_hi": "`FromRaw` ट्रेट पैटर्न का उद्देश्य क्या है?",
        "options_en": ["Create types from raw pointers safely", "Raw pointer conversion", "Unsafe type creation", "Memory safety"],
        "options_hi": ["रॉ पॉइंटर्स से टाइप्स को सेफली क्रिएट करना", "रॉ पॉइंटर कन्वर्जन", "अनसेफ टाइप क्रिएशन", "मेमोरी सेफ्टी"],
        "answer_en": "Create types from raw pointers safely",
        "answer_hi": "रॉ पॉइंटर्स से टाइप्स को सेफली क्रिएट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What does the `#[repr(transparent)]` attribute ensure?",
        "question_hi": "`#[repr(transparent)]` एट्रिब्यूट क्या सुनिश्चित करता है?",
        "options_en": ["Type has same representation as its single field", "Transparent memory", "Zero-cost abstraction", "Memory optimization"],
        "options_hi": ["टाइप का अपने सिंगल फील्ड के समान रिप्रेजेंटेशन है", "ट्रांसपेरेंट मेमोरी", "जीरो-कॉस्ट एब्स्ट्रक्शन", "मेमोरी ऑप्टिमाइज़ेशन"],
        "answer_en": "Type has same representation as its single field",
        "answer_hi": "टाइप का अपने सिंगल फील्ड के समान रिप्रेजेंटेशन है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the purpose of the `UnsafeCell` type?",
        "question_hi": "`UnsafeCell` टाइप का उद्देश्य क्या है?",
        "options_en": ["Enable interior mutability for shared references", "Unsafe cell operations", "Cell mutation", "Memory cell management"],
        "options_hi": ["शेयर्ड रेफरेंसेस के लिए इंटीरियर म्यूटेबिलिटी एनेबल करना", "अनसेफ सेल ऑपरेशन्स", "सेल म्यूटेशन", "मेमोरी सेल मैनेजमेंट"],
        "answer_en": "Enable interior mutability for shared references",
        "answer_hi": "शेयर्ड रेफरेंसेस के लिए इंटीरियर म्यूटेबिलिटी एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the difference between `Send` and `Sync` traits?",
        "question_hi": "`Send` और `Sync` ट्रेट्स में क्या अंतर है?",
        "options_en": ["Send allows transfer between threads, Sync allows shared access", "No difference", "Sync is for sending", "Send is for sharing"],
        "options_hi": ["Send थ्रेड्स के बीच ट्रांसफर की अनुमति देता है, Sync शेयर्ड एक्सेस की अनुमति देता है", "कोई अंतर नहीं", "Sync भेजने के लिए है", "Send शेयर करने के लिए है"],
        "answer_en": "Send allows transfer between threads, Sync allows shared access",
        "answer_hi": "Send थ्रेड्स के बीच ट्रांसफर की अनुमति देता है, Sync शेयर्ड एक्सेस की अनुमति देता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What does the `#[track_caller]` attribute provide?",
        "question_hi": "`#[track_caller]` एट्रिब्यूट क्या प्रदान करता है?",
        "options_en": ["Accurate panic location reporting", "Function tracking", "Caller information", "Debug information"],
        "options_hi": ["एक्यूरेट पैनिक लोकेशन रिपोर्टिंग", "फंक्शन ट्रैकिंग", "कॉलर इनफॉर्मेशन", "डिबग इनफॉर्मेशन"],
        "answer_en": "Accurate panic location reporting",
        "answer_hi": "एक्यूरेट पैनिक लोकेशन रिपोर्टिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of the `Box::leak` method?",
        "question_hi": "`Box::leak` मेथड का उद्देश्य क्या है?",
        "options_en": ["Convert Box into 'static reference", "Memory leak intentionally", "Box destruction", "Memory cleanup"],
        "options_hi": ["Box को 'static रेफरेंस में कन्वर्ट करना", "जानबूझकर मेमोरी लीक", "Box डिस्ट्रक्शन", "मेमोरी क्लीनअप"],
        "answer_en": "Convert Box into 'static reference",
        "answer_hi": "Box को 'static रेफरेंस में कन्वर्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does the `mem::transmute` function do?",
        "question_hi": "`mem::transmute` फंक्शन क्या करता है?",
        "options_en": ["Reinterpret bits of one type as another", "Type conversion", "Memory transformation", "Safe type casting"],
        "options_hi": ["एक टाइप के बिट्स को दूसरे टाइप के रूप में रीइंटरप्रेट करना", "टाइप कन्वर्जन", "मेमोरी ट्रांसफॉर्मेशन", "सेफ टाइप कास्टिंग"],
        "answer_en": "Reinterpret bits of one type as another",
        "answer_hi": "एक टाइप के बिट्स को दूसरे टाइप के रूप में रीइंटरप्रेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of the `#[derive]` attribute with custom traits?",
        "question_hi": "कस्टम ट्रेट्स के साथ `#[derive]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Automatically implement traits for a type", "Trait derivation", "Automatic trait implementation", "Custom derivation"],
        "options_hi": ["टाइप के लिए ट्रेट्स को ऑटोमैटिकली इम्प्लीमेंट करना", "ट्रेट डेरिवेशन", "ऑटोमैटिक ट्रेट इम्प्लीमेंटेशन", "कस्टम डेरिवेशन"],
        "answer_en": "Automatically implement traits for a type",
        "answer_hi": "टाइप के लिए ट्रेट्स को ऑटोमैटिकली इम्प्लीमेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does the `async_trait` crate solve?",
        "question_hi": "`async_trait` क्रेट क्या सॉल्व करता है?",
        "options_en": ["Async methods in traits", "Trait async implementation", "Async trait bounds", "Trait async syntax"],
        "options_hi": ["ट्रेट्स में एसिंक मेथड्स", "ट्रेट एसिंक इम्प्लीमेंटेशन", "एसिंक ट्रेट बाउंड्स", "ट्रेट एसिंक सिंटैक्स"],
        "answer_en": "Async methods in traits",
        "answer_hi": "ट्रेट्स में एसिंक मेथड्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of the `#[no_mangle]` attribute?",
        "question_hi": "`#[no_mangle]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Prevent name mangling for FFI", "No memory mangling", "Function name preservation", "Symbol name stability"],
        "options_hi": ["FFI के लिए नेम मैंगलिंग को रोकना", "नो मेमोरी मैंगलिंग", "फंक्शन नेम प्रिजर्वेशन", "सिंबल नेम स्टेबिलिटी"],
        "answer_en": "Prevent name mangling for FFI",
        "answer_hi": "FFI के लिए नेम मैंगलिंग को रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What does the `mem::forget` function do?",
        "question_hi": "`mem::forget` फंक्शन क्या करता है?",
        "options_en": ["Prevent destructor from running", "Memory cleanup", "Forget variable values", "Memory deallocation"],
        "options_hi": ["डिस्ट्रक्टर को रन होने से रोकना", "मेमोरी क्लीनअप", "वेरिएबल वैल्यूज भूल जाना", "मेमोरी डीलोकेशन"],
        "answer_en": "Prevent destructor from running",
        "answer_hi": "डिस्ट्रक्टर को रन होने से रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of the `#[repr(C)]` attribute?",
        "question_hi": "`#[repr(C)]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["C-compatible memory layout", "C language representation", "C struct compatibility", "Foreign function interface"],
        "options_hi": ["C-कम्पैटिबल मेमोरी लेआउट", "C लैंग्वेज रिप्रेजेंटेशन", "C स्ट्रक्चर कम्पैटिबिलिटी", "फॉरेन फंक्शन इंटरफेस"],
        "answer_en": "C-compatible memory layout",
        "answer_hi": "C-कम्पैटिबल मेमोरी लेआउट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does the `Box::into_raw` method return?",
        "question_hi": "`Box::into_raw` मेथड क्या रिटर्न करता है?",
        "options_en": ["Raw pointer to heap-allocated data", "Raw memory address", "Unsafe pointer", "Memory location"],
        "options_hi": ["हीप-अलोकेटेड डेटा का रॉ पॉइंटर", "रॉ मेमोरी एड्रेस", "अनसेफ पॉइंटर", "मेमोरी लोकेशन"],
        "answer_en": "Raw pointer to heap-allocated data",
        "answer_hi": "हीप-अलोकेटेड डेटा का रॉ पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of the `#[cfg(test)]` attribute?",
        "question_hi": "`#[cfg(test)]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation for tests", "Test configuration", "Test-only code", "Testing framework"],
        "options_hi": ["टेस्ट्स के लिए कंडीशनल कंपाइलेशन", "टेस्ट कॉन्फ़िगरेशन", "टेस्ट-ओनली कोड", "टेस्टिंग फ्रेमवर्क"],
        "answer_en": "Conditional compilation for tests",
        "answer_hi": "टेस्ट्स के लिए कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What does the `mem::swap` function do?",
        "question_hi": "`mem::swap` फंक्शन क्या करता है?",
        "options_en": ["Exchange values between two mutable references", "Swap memory locations", "Exchange variables", "Memory swapping"],
        "options_hi": ["दो म्यूटेबल रेफरेंसेस के बीच वैल्यूज एक्सचेंज करना", "मेमोरी लोकेशन्स स्वैप करना", "वेरिएबल्स एक्सचेंज करना", "मेमोरी स्वैपिंग"],
        "answer_en": "Exchange values between two mutable references",
        "answer_hi": "दो म्यूटेबल रेफरेंसेस के बीच वैल्यूज एक्सचेंज करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of the `#[panic_handler]` attribute?",
        "question_hi": "`#[panic_handler]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Define panic behavior in no-std environments", "Handle panics", "Custom panic handling", "Panic recovery"],
        "options_hi": ["नो-स्टडी एनवायरनमेंट्स में पैनिक बिहेवियर डिफाइन करना", "पैनिक्स हैंडल करना", "कस्टम पैनिक हैंडलिंग", "पैनिक रिकवरी"],
        "answer_en": "Define panic behavior in no-std environments",
        "answer_hi": "नो-स्टडी एनवायरनमेंट्स में पैनिक बिहेवियर डिफाइन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What does the `core::hint::unreachable_unchecked` function do?",
        "question_hi": "`core::hint::unreachable_unchecked` फंक्शन क्या करता है?",
        "options_en": ["Tell optimizer code is unreachable", "Unreachable code elimination", "Code optimization hint", "Unchecked unreachable"],
        "options_hi": ["ऑप्टिमाइज़र को बताना कि कोड अनरीचेबल है", "अनरीचेबल कोड एलिमिनेशन", "कोड ऑप्टिमाइज़ेशन हिंट", "अनचेक्ड अनरीचेबल"],
        "answer_en": "Tell optimizer code is unreachable",
        "answer_hi": "ऑप्टिमाइज़र को बताना कि कोड अनरीचेबल है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of the `#[global_allocator]` attribute?",
        "question_hi": "`#[global_allocator]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Set global memory allocator", "Global allocation", "Memory allocator configuration", "Heap allocator setup"],
        "options_hi": ["ग्लोबल मेमोरी अलोकेटर सेट करना", "ग्लोबल अलोकेशन", "मेमोरी अलोकेटर कॉन्फ़िगरेशन", "हीप अलोकेटर सेटअप"],
        "answer_en": "Set global memory allocator",
        "answer_hi": "ग्लोबल मेमोरी अलोकेटर सेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What does the `mem::size_of_val` function return?",
        "question_hi": "`mem::size_of_val` फंक्शन क्या रिटर्न करता है?",
        "options_en": ["Size of pointed-to value in bytes", "Value size", "Memory size", "Byte size of value"],
        "options_hi": ["पॉइंटेड-टू वैल्यू का साइज बाइट्स में", "वैल्यू साइज", "मेमोरी साइज", "वैल्यू का बाइट साइज"],
        "answer_en": "Size of pointed-to value in bytes",
        "answer_hi": "पॉइंटेड-टू वैल्यू का साइज बाइट्स में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of the `#[derive(Copy)]` attribute?",
        "question_hi": "`#[derive(Copy)]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Implement Copy trait for bitwise copying", "Copy derivation", "Bitwise copy implementation", "Copy trait automation"],
        "options_hi": ["बिटवाइज कॉपीिंग के लिए Copy ट्रेट इम्प्लीमेंट करना", "Copy डेरिवेशन", "बिटवाइज कॉपी इम्प्लीमेंटेशन", "Copy ट्रेट ऑटोमेशन"],
        "answer_en": "Implement Copy trait for bitwise copying",
        "answer_hi": "बिटवाइज कॉपीिंग के लिए Copy ट्रेट इम्प्लीमेंट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What does the `core::ptr::read` function do?",
        "question_hi": "`core::ptr::read` फंक्शन क्या करता है?",
        "options_en": ["Read value from pointer without taking ownership", "Pointer reading", "Memory reading", "Ownership-free read"],
        "options_hi": ["स्वामित्व लिए बिना पॉइंटर से वैल्यू रीड करना", "पॉइंटर रीडिंग", "मेमोरी रीडिंग", "ओनरशिप-फ्री रीड"],
        "answer_en": "Read value from pointer without taking ownership",
        "answer_hi": "स्वामित्व लिए बिना पॉइंटर से वैल्यू रीड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of the `#[repr(align(N))]` attribute?",
        "question_hi": "`#[repr(align(N))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Set memory alignment requirements", "Memory alignment", "Alignment specification", "Memory layout alignment"],
        "options_hi": ["मेमोरी अलाइनमेंट रिक्वायरमेंट्स सेट करना", "मेमोरी अलाइनमेंट", "अलाइनमेंट स्पेसिफिकेशन", "मेमोरी लेआउट अलाइनमेंट"],
        "answer_en": "Set memory alignment requirements",
        "answer_hi": "मेमोरी अलाइनमेंट रिक्वायरमेंट्स सेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does the `mem::replace` function do?",
        "question_hi": "`mem::replace` फंक्शन क्या करता है?",
        "options_en": ["Replace value and return old value", "Value replacement", "Memory replacement", "Swap and return"],
        "options_hi": ["वैल्यू रिप्लेस करना और पुरानी वैल्यू रिटर्न करना", "वैल्यू रिप्लेसमेंट", "मेमोरी रिप्लेसमेंट", "स्वैप और रिटर्न"],
        "answer_en": "Replace value and return old value",
        "answer_hi": "वैल्यू रिप्लेस करना और पुरानी वैल्यू रिटर्न करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of the `#[cold]` attribute?",
        "question_hi": "`#[cold]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Hint that function is unlikely to be called", "Cold code path", "Optimization hint", "Rarely called function"],
        "options_hi": ["हिंट देना कि फंक्शन के कॉल होने की संभावना कम है", "कोल्ड कोड पाथ", "ऑप्टिमाइज़ेशन हिंट", "शायद ही कभी कॉल होने वाला फंक्शन"],
        "answer_en": "Hint that function is unlikely to be called",
        "answer_hi": "हिंट देना कि फंक्शन के कॉल होने की संभावना कम है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What does the `core::intrinsics` module contain?",
        "question_hi": "`core::intrinsics` मॉड्यूल में क्या होता है?",
        "options_en": ["Compiler built-in functions", "Intrinsic functions", "Compiler internals", "Low-level operations"],
        "options_hi": ["कंपाइलर बिल्ट-इन फंक्शन्स", "इंट्रिन्सिक फंक्शन्स", "कंपाइलर इंटर्नल्स", "लो-लेवल ऑपरेशन्स"],
        "answer_en": "Compiler built-in functions",
        "answer_hi": "कंपाइलर बिल्ट-इन फंक्शन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of the `#[link_section]` attribute?",
        "question_hi": "`#[link_section]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Place function/data in specific linker section", "Linker section placement", "Memory section control", "Binary section management"],
        "options_hi": ["फंक्शन/डेटा को स्पेसिफिक लिंकर सेक्शन में रखना", "लिंकर सेक्शन प्लेसमेंट", "मेमोरी सेक्शन कंट्रोल", "बाइनरी सेक्शन मैनेजमेंट"],
        "answer_en": "Place function/data in specific linker section",
        "answer_hi": "फंक्शन/डेटा को स्पेसिफिक लिंकर सेक्शन में रखना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does the `mem::align_of` function return?",
        "question_hi": "`mem::align_of` फंक्शन क्या रिटर्न करता है?",
        "options_en": ["Alignment of a type in bytes", "Type alignment", "Memory alignment", "Byte alignment"],
        "options_hi": ["टाइप का अलाइनमेंट बाइट्स में", "टाइप अलाइनमेंट", "मेमोरी अलाइनमेंट", "बाइट अलाइनमेंट"],
        "answer_en": "Alignment of a type in bytes",
        "answer_hi": "टाइप का अलाइनमेंट बाइट्स में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of the `#[inline(never)]` attribute?",
        "question_hi": "`#[inline(never)]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Prevent function inlining", "No inlining", "Function call preservation", "Optimization prevention"],
        "options_hi": ["फंक्शन इनलाइनिंग को रोकना", "नो इनलाइनिंग", "फंक्शन कॉल प्रिजर्वेशन", "ऑप्टिमाइज़ेशन प्रिवेंशन"],
        "answer_en": "Prevent function inlining",
        "answer_hi": "फंक्शन इनलाइनिंग को रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What does the `core::hint::spin_loop` function do?",
        "question_hi": "`core::hint::spin_loop` फंक्शन क्या करता है?",
        "options_en": ["Signal processor for spin loop optimization", "Spin loop hint", "Processor optimization", "Loop hinting"],
        "options_hi": ["स्पिन लूप ऑप्टिमाइज़ेशन के लिए प्रोसेसर को सिग्नल करना", "स्पिन लूप हिंट", "प्रोसेसर ऑप्टिमाइज़ेशन", "लूप हिंटिंग"],
        "answer_en": "Signal processor for spin loop optimization",
        "answer_hi": "स्पिन लूप ऑप्टिमाइज़ेशन के लिए प्रोसेसर को सिग्नल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of the `#[alloc_error_handler]` attribute?",
        "question_hi": "`#[alloc_error_handler]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Handle memory allocation failures in no-std", "Allocation error handling", "Memory error handler", "OOM handler"],
        "options_hi": ["नो-स्टडी में मेमोरी अलोकेशन फेल्योर्स को हैंडल करना", "अलोकेशन एरर हैंडलिंग", "मेमोरी एरर हैंडलर", "OOM हैंडलर"],
        "answer_en": "Handle memory allocation failures in no-std",
        "answer_hi": "नो-स्टडी में मेमोरी अलोकेशन फेल्योर्स को हैंडल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What does the `mem::zeroed` function do?",
        "question_hi": "`mem::zeroed` फंक्शन क्या करता है?",
        "options_en": ["Create zero-initialized instance of type", "Zero initialization", "Memory zeroing", "Type zeroing"],
        "options_hi": ["टाइप का जीरो-इनिशियलाइज्ड इंस्टेंस क्रिएट करना", "जीरो इनिशियलाइज़ेशन", "मेमोरी जीरोइंग", "टाइप जीरोइंग"],
        "answer_en": "Create zero-initialized instance of type",
        "answer_hi": "टाइप का जीरो-इनिशियलाइज्ड इंस्टेंस क्रिएट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of the `#[target_feature]` attribute?",
        "question_hi": "`#[target_feature]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Enable CPU-specific features for function", "Target feature enable", "CPU feature activation", "Platform-specific features"],
        "options_hi": ["फंक्शन के लिए CPU-स्पेसिफिक फीचर्स एनेबल करना", "टारगेट फीचर एनेबल", "CPU फीचर एक्टिवेशन", "प्लेटफॉर्म-स्पेसिफिक फीचर्स"],
        "answer_en": "Enable CPU-specific features for function",
        "answer_hi": "फंक्शन के लिए CPU-स्पेसिफिक फीचर्स एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What does the `core::sync::atomic` module provide?",
        "question_hi": "`core::sync::atomic` मॉड्यूल क्या प्रदान करता है?",
        "options_en": ["Atomic operations for concurrent programming", "Atomic operations", "Concurrent programming primitives", "Thread-safe operations"],
        "options_hi": ["कनकरेंट प्रोग्रामिंग के लिए एटॉमिक ऑपरेशन्स", "एटॉमिक ऑपरेशन्स", "कनकरेंट प्रोग्रामिंग प्रिमिटिव्स", "थ्रेड-सेफ ऑपरेशन्स"],
        "answer_en": "Atomic operations for concurrent programming",
        "answer_hi": "कनकरेंट प्रोग्रामिंग के लिए एटॉमिक ऑपरेशन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of the `#[doc(hidden)]` attribute?",
        "question_hi": "`#[doc(hidden)]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Hide item from public documentation", "Documentation hiding", "Private documentation", "Internal item hiding"],
        "options_hi": ["आइटम को पब्लिक डॉक्यूमेंटेशन से हाइड करना", "डॉक्यूमेंटेशन हाइडिंग", "प्राइवेट डॉक्यूमेंटेशन", "इंटरनल आइटम हाइडिंग"],
        "answer_en": "Hide item from public documentation",
        "answer_hi": "आइटम को पब्लिक डॉक्यूमेंटेशन से हाइड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What does the `mem::needs_drop` function check?",
        "question_hi": "`mem::needs_drop` फंक्शन क्या चेक करता है?",
        "options_en": ["Whether type requires drop glue", "Drop requirement", "Type drop needs", "Destructor requirement"],
        "options_hi": ["क्या टाइप को ड्रॉप ग्लू की जरूरत है", "ड्रॉप रिक्वायरमेंट", "टाइप ड्रॉप नीड्स", "डिस्ट्रक्टर रिक्वायरमेंट"],
        "answer_en": "Whether type requires drop glue",
        "answer_hi": "क्या टाइप को ड्रॉप ग्लू की जरूरत है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of the `#[non_exhaustive]` attribute?",
        "question_hi": "`#[non_exhaustive]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Prevent exhaustive pattern matching", "Non-exhaustive types", "Pattern matching limitation", "Future-proof enums"],
        "options_hi": ["एक्जॉस्टिव पैटर्न मैचिंग को रोकना", "नॉन-एक्जॉस्टिव टाइप्स", "पैटर्न मैचिंग लिमिटेशन", "फ्यूचर-प्रूफ एनम्स"],
        "answer_en": "Prevent exhaustive pattern matching",
        "answer_hi": "एक्जॉस्टिव पैटर्न मैचिंग को रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What does the `core::arch` module provide?",
        "question_hi": "`core::arch` मॉड्यूल क्या प्रदान करता है?",
        "options_en": ["Architecture-specific intrinsics", "Architecture intrinsics", "CPU-specific functions", "Platform intrinsics"],
        "options_hi": ["आर्किटेक्चर-स्पेसिफिक इंट्रिन्सिक्स", "आर्किटेक्चर इंट्रिन्सिक्स", "CPU-स्पेसिफिक फंक्शन्स", "प्लेटफॉर्म इंट्रिन्सिक्स"],
        "answer_en": "Architecture-specific intrinsics",
        "answer_hi": "आर्किटेक्चर-स्पेसिफिक इंट्रिन्सिक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of the `#[repr(packed)]` attribute?",
        "question_hi": "`#[repr(packed)]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Remove padding between struct fields", "Packed representation", "No padding layout", "Tight memory packing"],
        "options_hi": ["स्ट्रक्चर फील्ड्स के बीच पैडिंग रिमूव करना", "पैक्ड रिप्रेजेंटेशन", "नो पैडिंग लेआउट", "टाइट मेमोरी पैकिंग"],
        "answer_en": "Remove padding between struct fields",
        "answer_hi": "स्ट्रक्चर फील्ड्स के बीच पैडिंग रिमूव करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What does the `mem::uninitialized` function do?",
        "question_hi": "`mem::uninitialized` फंक्शन क्या करता है?",
        "options_en": ["Create uninitialized instance (deprecated)", "Uninitialized instance creation", "Memory initialization bypass", "Raw instance creation"],
        "options_hi": ["अनइनिशियलाइज्ड इंस्टेंस क्रिएट करना (डिप्रिकेटेड)", "अनइनिशियलाइज्ड इंस्टेंस क्रिएशन", "मेमोरी इनिशियलाइज़ेशन बायपास", "रॉ इंस्टेंस क्रिएशन"],
        "answer_en": "Create uninitialized instance (deprecated)",
        "answer_hi": "अनइनिशियलाइज्ड इंस्टेंस क्रिएट करना (डिप्रिकेटेड)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of the `#[cfg(doctest)]` attribute?",
        "question_hi": "`#[cfg(doctest)]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation for doc tests", "Doc test configuration", "Documentation test compilation", "Test-only doc code"],
        "options_hi": ["डॉक टेस्ट्स के लिए कंडीशनल कंपाइलेशन", "डॉक टेस्ट कॉन्फ़िगरेशन", "डॉक्यूमेंटेशन टेस्ट कंपाइलेशन", "टेस्ट-ओनली डॉक कोड"],
        "answer_en": "Conditional compilation for doc tests",
        "answer_hi": "डॉक टेस्ट्स के लिए कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What does the `core::hint::black_box` function do?",
        "question_hi": "`core::hint::black_box` फंक्शन क्या करता है?",
        "options_en": ["Prevent compiler optimizations across calls", "Optimization barrier", "Compiler hint for optimization prevention", "Code optimization block"],
        "options_hi": ["कॉल्स के बीच कंपाइलर ऑप्टिमाइज़ेशन को रोकना", "ऑप्टिमाइज़ेशन बैरियर", "ऑप्टिमाइज़ेशन प्रिवेंशन के लिए कंपाइलर हिंट", "कोड ऑप्टिमाइज़ेशन ब्लॉक"],
        "answer_en": "Prevent compiler optimizations across calls",
        "answer_hi": "कॉल्स के बीच कंपाइलर ऑप्टिमाइज़ेशन को रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of the `#[ffi_returns_twice]` attribute?",
        "question_hi": "`#[ffi_returns_twice]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Mark FFI functions that return multiple times", "Multiple return FFI", "FFI return behavior", "Foreign function return marking"],
        "options_hi": ["ऐसे FFI फंक्शन्स को मार्क करना जो मल्टीपल टाइम्स रिटर्न करते हैं", "मल्टीपल रिटर्न FFI", "FFI रिटर्न बिहेवियर", "फॉरेन फंक्शन रिटर्न मार्किंग"],
        "answer_en": "Mark FFI functions that return multiple times",
        "answer_hi": "ऐसे FFI फंक्शन्स को मार्क करना जो मल्टीपल टाइम्स रिटर्न करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What does the `mem::drop` function actually do?",
        "question_hi": "`mem::drop` फंक्शन वास्तव में क्या करता है?",
        "options_en": ["Take ownership and run destructor", "Explicit destruction", "Memory deallocation", "Ownership taking"],
        "options_hi": ["स्वामित्व लेना और डिस्ट्रक्टर रन करना", "एक्सप्लिसिट डिस्ट्रक्शन", "मेमोरी डीलोकेशन", "ओनरशिप टेकिंग"],
        "answer_en": "Take ownership and run destructor",
        "answer_hi": "स्वामित्व लेना और डिस्ट्रक्टर रन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of the `#[thread_local]` attribute?",
        "question_hi": "`#[thread_local]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Define thread-local storage", "Thread-local variables", "Per-thread storage", "Thread-specific data"],
        "options_hi": ["थ्रेड-लोकल स्टोरेज डिफाइन करना", "थ्रेड-लोकल वेरिएबल्स", "पर-थ्रेड स्टोरेज", "थ्रेड-स्पेसिफिक डेटा"],
        "answer_en": "Define thread-local storage",
        "answer_hi": "थ्रेड-लोकल स्टोरेज डिफाइन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What does the `core::num::Wrapping` type provide?",
        "question_hi": "`core::num::Wrapping` टाइप क्या प्रदान करता है?",
        "options_en": ["Modular arithmetic without overflow checks", "Wrapping arithmetic", "Overflow-safe operations", "Modular arithmetic wrapper"],
        "options_hi": ["ओवरफ्लो चेक्स के बिना मॉड्यूलर अर्थमैटिक", "रैपिंग अर्थमैटिक", "ओवरफ्लो-सेफ ऑपरेशन्स", "मॉड्यूलर अर्थमैटिक रैपर"],
        "answer_en": "Modular arithmetic without overflow checks",
        "answer_hi": "ओवरफ्लो चेक्स के बिना मॉड्यूलर अर्थमैटिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of the `#[cfg(sanitize = \"...\")]` attribute?",
        "question_hi": "`#[cfg(sanitize = \"...\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation for sanitizers", "Sanitizer configuration", "Memory sanitizer support", "Security sanitizer compilation"],
        "options_hi": ["सैनिटाइज़र्स के लिए कंडीशनल कंपाइलेशन", "सैनिटाइज़र कॉन्फ़िगरेशन", "मेमोरी सैनिटाइज़र सपोर्ट", "सिक्योरिटी सैनिटाइज़र कंपाइलेशन"],
        "answer_en": "Conditional compilation for sanitizers",
        "answer_hi": "सैनिटाइज़र्स के लिए कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What does the `mem::size_of` function return for a zero-sized type?",
        "question_hi": "जीरो-साइज्ड टाइप के लिए `mem::size_of` फंक्शन क्या रिटर्न करता है?",
        "options_en": ["0", "1", "Compiler-dependent", "Platform-dependent"],
        "options_hi": ["0", "1", "कंपाइलर-डिपेंडेंट", "प्लेटफॉर्म-डिपेंडेंट"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of the `#[linkage = \"...\"]` attribute?",
        "question_hi": "`#[linkage = \"...\"]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Control symbol linkage in object files", "Linkage control", "Symbol linkage specification", "Object file linkage"],
        "options_hi": ["ऑब्जेक्ट फाइल्स में सिंबल लिंकेज कंट्रोल करना", "लिंकेज कंट्रोल", "सिंबल लिंकेज स्पेसिफिकेशन", "ऑब्जेक्ट फाइल लिंकेज"],
        "answer_en": "Control symbol linkage in object files",
        "answer_hi": "ऑब्जेक्ट फाइल्स में सिंबल लिंकेज कंट्रोल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does the `core::ptr::null` function return?",
        "question_hi": "`core::ptr::null` फंक्शन क्या रिटर्न करता है?",
        "options_en": ["Null raw pointer", "Null pointer", "Zero pointer", "Empty pointer"],
        "options_hi": ["नल रॉ पॉइंटर", "नल पॉइंटर", "जीरो पॉइंटर", "एम्प्टी पॉइंटर"],
        "answer_en": "Null raw pointer",
        "answer_hi": "नल रॉ पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of the `#[cfg(panic = \"...\")]` attribute?",
        "question_hi": "`#[cfg(panic = \"...\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation based on panic strategy", "Panic strategy configuration", "Panic behavior compilation", "Error handling compilation"],
        "options_hi": ["पैनिक स्ट्रैटेजी के आधार पर कंडीशनल कंपाइलेशन", "पैनिक स्ट्रैटेजी कॉन्फ़िगरेशन", "पैनिक बिहेवियर कंपाइलेशन", "एरर हैंडलिंग कंपाइलेशन"],
        "answer_en": "Conditional compilation based on panic strategy",
        "answer_hi": "पैनिक स्ट्रैटेजी के आधार पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What does the `mem::align_of_val` function return?",
        "question_hi": "`mem::align_of_val` फंक्शन क्या रिटर्न करता है?",
        "options_en": ["Alignment of the value's type", "Value alignment", "Memory alignment of value", "Type alignment of value"],
        "options_hi": ["वैल्यू के टाइप का अलाइनमेंट", "वैल्यू अलाइनमेंट", "वैल्यू का मेमोरी अलाइनमेंट", "वैल्यू का टाइप अलाइनमेंट"],
        "answer_en": "Alignment of the value's type",
        "answer_hi": "वैल्यू के टाइप का अलाइनमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of the `#[cfg(feature = \"...\")]` attribute?",
        "question_hi": "`#[cfg(feature = \"...\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation based on Cargo features", "Feature-based compilation", "Cargo feature configuration", "Optional feature compilation"],
        "options_hi": ["कार्गो फीचर्स के आधार पर कंडीशनल कंपाइलेशन", "फीचर-बेस्ड कंपाइलेशन", "कार्गो फीचर कॉन्फ़िगरेशन", "ऑप्शनल फीचर कंपाइलेशन"],
        "answer_en": "Conditional compilation based on Cargo features",
        "answer_hi": "कार्गो फीचर्स के आधार पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What does the `core::ptr::write` function do?",
        "question_hi": "`core::ptr::write` फंक्शन क्या करता है?",
        "options_en": ["Write to memory location without dropping old value", "Memory writing", "Pointer writing", "Unsafe value writing"],
        "options_hi": ["पुरानी वैल्यू ड्रॉप किए बिना मेमोरी लोकेशन में राइट करना", "मेमोरी राइटिंग", "पॉइंटर राइटिंग", "अनसेफ वैल्यू राइटिंग"],
        "answer_en": "Write to memory location without dropping old value",
        "answer_hi": "पुरानी वैल्यू ड्रॉप किए बिना मेमोरी लोकेशन में राइट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of the `#[repr(simd)]` attribute?",
        "question_hi": "`#[repr(simd)]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Enable SIMD vector types", "SIMD representation", "Vector type optimization", "Parallel processing types"],
        "options_hi": ["SIMD वेक्टर टाइप्स एनेबल करना", "SIMD रिप्रेजेंटेशन", "वेक्टर टाइप ऑप्टिमाइज़ेशन", "पैरेलल प्रोसेसिंग टाइप्स"],
        "answer_en": "Enable SIMD vector types",
        "answer_hi": "SIMD वेक्टर टाइप्स एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What does the `mem::forget` not do?",
        "question_hi": "`mem::forget` क्या नहीं करता है?",
        "options_en": ["Deallocate memory", "Run destructor", "Free resources", "Clean up memory"],
        "options_hi": ["मेमोरी डीलोकेट करना", "डिस्ट्रक्टर रन करना", "रिसोर्सेज फ्री करना", "मेमोरी क्लीन अप करना"],
        "answer_en": "Deallocate memory",
        "answer_hi": "मेमोरी डीलोकेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of the `#[cfg(debug_assertions)]` attribute?",
        "question_hi": "`#[cfg(debug_assertions)]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation for debug builds", "Debug build configuration", "Debug assertion compilation", "Development build features"],
        "options_hi": ["डिबग बिल्ड्स के लिए कंडीशनल कंपाइलेशन", "डिबग बिल्ड कॉन्फ़िगरेशन", "डिबग असेर्शन कंपाइलेशन", "डेवलपमेंट बिल्ड फीचर्स"],
        "answer_en": "Conditional compilation for debug builds",
        "answer_hi": "डिबग बिल्ड्स के लिए कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What does the `core::ptr::read_volatile` function provide?",
        "question_hi": "`core::ptr::read_volatile` फंक्शन क्या प्रदान करता है?",
        "options_en": ["Volatile memory read preventing optimization", "Volatile reading", "Optimization-preventing read", "Memory barrier read"],
        "options_hi": ["ऑप्टिमाइज़ेशन रोकने वाला वोलेटाइल मेमोरी रीड", "वोलेटाइल रीडिंग", "ऑप्टिमाइज़ेशन-प्रिवेंटिंग रीड", "मेमोरी बैरियर रीड"],
        "answer_en": "Volatile memory read preventing optimization",
        "answer_hi": "ऑप्टिमाइज़ेशन रोकने वाला वोलेटाइल मेमोरी रीड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of the `#[cfg(target_has_atomic = \"...\")]` attribute?",
        "question_hi": "`#[cfg(target_has_atomic = \"...\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation based on atomic support", "Atomic operation support check", "Target atomic capability", "Hardware atomic support"],
        "options_hi": ["एटॉमिक सपोर्ट के आधार पर कंडीशनल कंपाइलेशन", "एटॉमिक ऑपरेशन सपोर्ट चेक", "टारगेट एटॉमिक कैपेबिलिटी", "हार्डवेयर एटॉमिक सपोर्ट"],
        "answer_en": "Conditional compilation based on atomic support",
        "answer_hi": "एटॉमिक सपोर्ट के आधार पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What does the `mem::transmute_copy` function do?",
        "question_hi": "`mem::transmute_copy` फंक्शन क्या करता है?",
        "options_en": ["Reinterpret bytes without taking ownership", "Copy and transmute", "Byte reinterpretation copy", "Ownership-free transmute"],
        "options_hi": ["स्वामित्व लिए बिना बाइट्स को रीइंटरप्रेट करना", "कॉपी और ट्रांसम्यूट", "बाइट रीइंटरप्रेटेशन कॉपी", "ओनरशिप-फ्री ट्रांसम्यूट"],
        "answer_en": "Reinterpret bytes without taking ownership",
        "answer_hi": "स्वामित्व लिए बिना बाइट्स को रीइंटरप्रेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of the `#[cfg(target_thread_local)]` attribute?",
        "question_hi": "`#[cfg(target_thread_local)]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation for thread-local support", "Thread-local support check", "Target thread-local capability", "Platform thread-local feature"],
        "options_hi": ["थ्रेड-लोकल सपोर्ट के लिए कंडीशनल कंपाइलेशन", "थ्रेड-लोकल सपोर्ट चेक", "टारगेट थ्रेड-लोकल कैपेबिलिटी", "प्लेटफॉर्म थ्रेड-लोकल फीचर"],
        "answer_en": "Conditional compilation for thread-local support",
        "answer_hi": "थ्रेड-लोकल सपोर्ट के लिए कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What does the `core::ptr::null_mut` function return?",
        "question_hi": "`core::ptr::null_mut` फंक्शन क्या रिटर्न करता है?",
        "options_en": ["Null mutable raw pointer", "Null mutable pointer", "Mutable zero pointer", "Empty mutable pointer"],
        "options_hi": ["नल म्यूटेबल रॉ पॉइंटर", "नल म्यूटेबल पॉइंटर", "म्यूटेबल जीरो पॉइंटर", "एम्प्टी म्यूटेबल पॉइंटर"],
        "answer_en": "Null mutable raw pointer",
        "answer_hi": "नल म्यूटेबल रॉ पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of the `#[cfg(target_pointer_width = \"...\")]` attribute?",
        "question_hi": "`#[cfg(target_pointer_width = \"...\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation based on pointer size", "Pointer width configuration", "Target pointer size check", "Platform pointer size"],
        "options_hi": ["पॉइंटर साइज के आधार पर कंडीशनल कंपाइलेशन", "पॉइंटर विड्थ कॉन्फ़िगरेशन", "टारगेट पॉइंटर साइज चेक", "प्लेटफॉर्म पॉइंटर साइज"],
        "answer_en": "Conditional compilation based on pointer size",
        "answer_hi": "पॉइंटर साइज के आधार पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What does the `mem::take` function do?",
        "question_hi": "`mem::take` फंक्शन क्या करता है?",
        "options_en": ["Replace value with default and return old value", "Take and replace with default", "Value replacement with default", "Default value swap"],
        "options_hi": ["वैल्यू को डिफॉल्ट से रिप्लेस करना और पुरानी वैल्यू रिटर्न करना", "ले लो और डिफॉल्ट से रिप्लेस करो", "डिफॉल्ट के साथ वैल्यू रिप्लेसमेंट", "डिफॉल्ट वैल्यू स्वैप"],
        "answer_en": "Replace value with default and return old value",
        "answer_hi": "वैल्यू को डिफॉल्ट से रिप्लेस करना और पुरानी वैल्यू रिटर्न करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of the `#[cfg(unix)]` attribute?",
        "question_hi": "`#[cfg(unix)]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation for Unix-like systems", "Unix system configuration", "Unix platform compilation", "POSIX system features"],
        "options_hi": ["यूनिक्स-लाइक सिस्टम्स के लिए कंडीशनल कंपाइलेशन", "यूनिक्स सिस्टम कॉन्फ़िगरेशन", "यूनिक्स प्लेटफॉर्म कंपाइलेशन", "POSIX सिस्टम फीचर्स"],
        "answer_en": "Conditional compilation for Unix-like systems",
        "answer_hi": "यूनिक्स-लाइक सिस्टम्स के लिए कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What does the `core::ptr::write_volatile` function provide?",
        "question_hi": "`core::ptr::write_volatile` फंक्शन क्या प्रदान करता है?",
        "options_en": ["Volatile memory write preventing optimization", "Volatile writing", "Optimization-preventing write", "Memory barrier write"],
        "options_hi": ["ऑप्टिमाइज़ेशन रोकने वाला वोलेटाइल मेमोरी राइट", "वोलेटाइल राइटिंग", "ऑप्टिमाइज़ेशन-प्रिवेंटिंग राइट", "मेमोरी बैरियर राइट"],
        "answer_en": "Volatile memory write preventing optimization",
        "answer_hi": "ऑप्टिमाइज़ेशन रोकने वाला वोलेटाइल मेमोरी राइट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of the `#[cfg(windows)]` attribute?",
        "question_hi": "`#[cfg(windows)]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation for Windows systems", "Windows system configuration", "Windows platform compilation", "Windows-specific features"],
        "options_hi": ["विंडोज सिस्टम्स के लिए कंडीशनल कंपाइलेशन", "विंडोज सिस्टम कॉन्फ़िगरेशन", "विंडोज प्लेटफॉर्म कंपाइलेशन", "विंडोज-स्पेसिफिक फीचर्स"],
        "answer_en": "Conditional compilation for Windows systems",
        "answer_hi": "विंडोज सिस्टम्स के लिए कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What does the `mem::MaybeUninit::assume_init` method do?",
        "question_hi": "`mem::MaybeUninit::assume_init` मेथड क्या करता है?",
        "options_en": ["Assume MaybeUninit is initialized and get value", "Assumed initialization", "Unsafe value extraction", "Initialization assumption"],
        "options_hi": ["मान लें कि MaybeUninit इनिशियलाइज्ड है और वैल्यू प्राप्त करें", "अनुमानित इनिशियलाइज़ेशन", "अनसेफ वैल्यू एक्सट्रैक्शन", "इनिशियलाइज़ेशन अंदाज़ा"],
        "answer_en": "Assume MaybeUninit is initialized and get value",
        "answer_hi": "मान लें कि MaybeUninit इनिशियलाइज्ड है और वैल्यू प्राप्त करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of the `#[cfg(target_os = \"...\")]` attribute?",
        "question_hi": "`#[cfg(target_os = \"...\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation based on target OS", "Target OS configuration", "Operating system compilation", "Platform-specific OS features"],
        "options_hi": ["टारगेट OS के आधार पर कंडीशनल कंपाइलेशन", "टारगेट OS कॉन्फ़िगरेशन", "ऑपरेटिंग सिस्टम कंपाइलेशन", "प्लेटफॉर्म-स्पेसिफिक OS फीचर्स"],
        "answer_en": "Conditional compilation based on target OS",
        "answer_hi": "टारगेट OS के आधार पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What does the `core::hint::must_use` function do?",
        "question_hi": "`core::hint::must_use` फंक्शन क्या करता है?",
        "options_en": ["No-op function with must_use attribute", "Must use hint", "Compiler must_use enforcement", "No-operation must_use"],
        "options_hi": ["must_use एट्रिब्यूट वाला नो-ऑप फंक्शन", "मस्ट यूज हिंट", "कंपाइलर must_use एनफोर्समेंट", "नो-ऑपरेशन must_use"],
        "answer_en": "No-op function with must_use attribute",
        "answer_hi": "must_use एट्रिब्यूट वाला नो-ऑप फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of the `#[cfg(target_arch = \"...\")]` attribute?",
        "question_hi": "`#[cfg(target_arch = \"...\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation based on target architecture", "Target architecture configuration", "CPU architecture compilation", "Platform-specific architecture features"],
        "options_hi": ["टारगेट आर्किटेक्चर के आधार पर कंडीशनल कंपाइलेशन", "टारगेट आर्किटेक्चर कॉन्फ़िगरेशन", "CPU आर्किटेक्चर कंपाइलेशन", "प्लेटफॉर्म-स्पेसिफिक आर्किटेक्चर फीचर्स"],
        "answer_en": "Conditional compilation based on target architecture",
        "answer_hi": "टारगेट आर्किटेक्चर के आधार पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What does the `mem::MaybeUninit::uninit` method create?",
        "question_hi": "`mem::MaybeUninit::uninit` मेथड क्या क्रिएट करता है?",
        "options_en": ["Uninitialized MaybeUninit instance", "Uninitialized instance", "Raw MaybeUninit", "Empty MaybeUninit"],
        "options_hi": ["अनइनिशियलाइज्ड MaybeUninit इंस्टेंस", "अनइनिशियलाइज्ड इंस्टेंस", "रॉ MaybeUninit", "एम्प्टी MaybeUninit"],
        "answer_en": "Uninitialized MaybeUninit instance",
        "answer_hi": "अनइनिशियलाइज्ड MaybeUninit इंस्टेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of the `#[cfg(target_family = \"...\")]` attribute?",
        "question_hi": "`#[cfg(target_family = \"...\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation based on OS family", "Target family configuration", "OS family compilation", "Platform family features"],
        "options_hi": ["OS फैमिली के आधार पर कंडीशनल कंपाइलेशन", "टारगेट फैमिली कॉन्फ़िगरेशन", "OS फैमिली कंपाइलेशन", "प्लेटफॉर्म फैमिली फीचर्स"],
        "answer_en": "Conditional compilation based on OS family",
        "answer_hi": "OS फैमिली के आधार पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What does the `core::ptr::drop_in_place` function do?",
        "question_hi": "`core::ptr::drop_in_place` फंक्शन क्या करता है?",
        "options_en": ["Run destructor for value at pointer location", "In-place destruction", "Pointer drop", "Memory location destruction"],
        "options_hi": ["पॉइंटर लोकेशन पर वैल्यू के लिए डिस्ट्रक्टर रन करना", "इन-प्लेस डिस्ट्रक्शन", "पॉइंटर ड्रॉप", "मेमोरी लोकेशन डिस्ट्रक्शन"],
        "answer_en": "Run destructor for value at pointer location",
        "answer_hi": "पॉइंटर लोकेशन पर वैल्यू के लिए डिस्ट्रक्टर रन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of the `#[cfg(target_endian = \"...\")]` attribute?",
        "question_hi": "`#[cfg(target_endian = \"...\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation based on endianness", "Target endian configuration", "Endianness compilation", "Byte order features"],
        "options_hi": ["एंडियननेस के आधार पर कंडीशनल कंपाइलेशन", "टारगेट एंडियन कॉन्फ़िगरेशन", "एंडियननेस कंपाइलेशन", "बाइट ऑर्डर फीचर्स"],
        "answer_en": "Conditional compilation based on endianness",
        "answer_hi": "एंडियननेस के आधार पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What does the `mem::MaybeUninit::zeroed` method create?",
        "question_hi": "`mem::MaybeUninit::zeroed` मेथड क्या क्रिएट करता है?",
        "options_en": ["Zero-initialized MaybeUninit instance", "Zeroed instance", "Zero MaybeUninit", "Cleared MaybeUninit"],
        "options_hi": ["जीरो-इनिशियलाइज्ड MaybeUninit इंस्टेंस", "जीरोड इंस्टेंस", "जीरो MaybeUninit", "क्लीयर्ड MaybeUninit"],
        "answer_en": "Zero-initialized MaybeUninit instance",
        "answer_hi": "जीरो-इनिशियलाइज्ड MaybeUninit इंस्टेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of the `#[cfg(target_vendor = \"...\")]` attribute?",
        "question_hi": "`#[cfg(target_vendor = \"...\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation based on target vendor", "Target vendor configuration", "Vendor-specific compilation", "Platform vendor features"],
        "options_hi": ["टारगेट वेंडर के आधार पर कंडीशनल कंपाइलेशन", "टारगेट वेंडर कॉन्फ़िगरेशन", "वेंडर-स्पेसिफिक कंपाइलेशन", "प्लेटफॉर्म वेंडर फीचर्स"],
        "answer_en": "Conditional compilation based on target vendor",
        "answer_hi": "टारगेट वेंडर के आधार पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What does the `core::ptr::copy` function do?",
        "question_hi": "`core::ptr::copy` फंक्शन क्या करता है?",
        "options_en": ["Copy bytes from source to destination", "Memory copying", "Byte copy operation", "Pointer-based copy"],
        "options_hi": ["सोर्स से डेस्टिनेशन में बाइट्स कॉपी करना", "मेमोरी कॉपीइंग", "बाइट कॉपी ऑपरेशन", "पॉइंटर-बेस्ड कॉपी"],
        "answer_en": "Copy bytes from source to destination",
        "answer_hi": "सोर्स से डेस्टिनेशन में बाइट्स कॉपी करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of the `#[cfg(target_env = \"...\")]` attribute?",
        "question_hi": "`#[cfg(target_env = \"...\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation based on target environment", "Target environment configuration", "Environment-specific compilation", "Platform environment features"],
        "options_hi": ["टारगेट एनवायरनमेंट के आधार पर कंडीशनल कंपाइलेशन", "टारगेट एनवायरनमेंट कॉन्फ़िगरेशन", "एनवायरनमेंट-स्पेसिफिक कंपाइलेशन", "प्लेटफॉर्म एनवायरनमेंट फीचर्स"],
        "answer_en": "Conditional compilation based on target environment",
        "answer_hi": "टारगेट एनवायरनमेंट के आधार पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What does the `mem::offset_of` macro provide?",
        "question_hi": "`mem::offset_of` मैक्रो क्या प्रदान करता है?",
        "options_en": ["Byte offset of struct field", "Field offset", "Struct field position", "Memory field offset"],
        "options_hi": ["स्ट्रक्चर फील्ड का बाइट ऑफसेट", "फील्ड ऑफसेट", "स्ट्रक्चर फील्ड पोजीशन", "मेमोरी फील्ड ऑफसेट"],
        "answer_en": "Byte offset of struct field",
        "answer_hi": "स्ट्रक्चर फील्ड का बाइट ऑफसेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of the `#[cfg(not(...))]` attribute?",
        "question_hi": "`#[cfg(not(...))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation with negation", "Configuration negation", "Inverse compilation condition", "Negative condition check"],
        "options_hi": ["नेगेशन के साथ कंडीशनल कंपाइलेशन", "कॉन्फ़िगरेशन नेगेशन", "इनवर्स कंपाइलेशन कंडीशन", "नेगेटिव कंडीशन चेक"],
        "answer_en": "Conditional compilation with negation",
        "answer_hi": "नेगेशन के साथ कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What does the `core::ptr::copy_nonoverlapping` function guarantee?",
        "question_hi": "`core::ptr::copy_nonoverlapping` फंक्शन क्या गारंटी देता है?",
        "options_en": ["Source and destination memory don't overlap", "Non-overlapping copy", "Memory safety for non-overlapping regions", "Non-overlapping memory copy"],
        "options_hi": ["सोर्स और डेस्टिनेशन मेमोरी ओवरलैप नहीं करती", "नॉन-ओवरलैपिंग कॉपी", "नॉन-ओवरलैपिंग रीजन्स के लिए मेमोरी सेफ्टी", "नॉन-ओवरलैपिंग मेमोरी कॉपी"],
        "answer_en": "Source and destination memory don't overlap",
        "answer_hi": "सोर्स और डेस्टिनेशन मेमोरी ओवरलैप नहीं करती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of the `#[cfg(all(...))]` attribute?",
        "question_hi": "`#[cfg(all(...))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation with logical AND", "Multiple condition AND", "Combined configuration conditions", "All conditions must be true"],
        "options_hi": ["लॉजिकल AND के साथ कंडीशनल कंपाइलेशन", "मल्टीपल कंडीशन AND", "कंबाइंड कॉन्फ़िगरेशन कंडीशन्स", "सभी कंडीशन्स ट्रू होनी चाहिए"],
        "answer_en": "Conditional compilation with logical AND",
        "answer_hi": "लॉजिकल AND के साथ कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What does the `mem::align_of` return for `u8` type?",
        "question_hi": "`u8` टाइप के लिए `mem::align_of` क्या रिटर्न करता है?",
        "options_en": ["1", "2", "4", "8"],
        "options_hi": ["1", "2", "4", "8"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of the `#[cfg(any(...))]` attribute?",
        "question_hi": "`#[cfg(any(...))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation with logical OR", "Multiple condition OR", "Alternative configuration conditions", "Any condition can be true"],
        "options_hi": ["लॉजिकल OR के साथ कंडीशनल कंपाइलेशन", "मल्टीपल कंडीशन OR", "अल्टरनेटिव कॉन्फ़िगरेशन कंडीशन्स", "कोई भी कंडीशन ट्रू हो सकती है"],
        "answer_en": "Conditional compilation with logical OR",
        "answer_hi": "लॉजिकल OR के साथ कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What does the `core::ptr::eq` function compare?",
        "question_hi": "`core::ptr::eq` फंक्शन क्या तुलना करता है?",
        "options_en": ["Whether two references point to the same allocation", "Reference equality", "Pointer address comparison", "Memory location equality"],
        "options_hi": ["क्या दो रेफरेंसेस एक ही अलोकेशन की ओर इशारा करते हैं", "रेफरेंस इक्वलिटी", "पॉइंटर एड्रेस कम्पेयरिजन", "मेमोरी लोकेशन इक्वलिटी"],
        "answer_en": "Whether two references point to the same allocation",
        "answer_hi": "क्या दो रेफरेंसेस एक ही अलोकेशन की ओर इशारा करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of the `#[cfg(target_feature = \"...\")]` attribute?",
        "question_hi": "`#[cfg(target_feature = \"...\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation based on CPU features", "Target feature configuration", "CPU feature compilation", "Hardware feature support"],
        "options_hi": ["CPU फीचर्स के आधार पर कंडीशनल कंपाइलेशन", "टारगेट फीचर कॉन्फ़िगरेशन", "CPU फीचर कंपाइलेशन", "हार्डवेयर फीचर सपोर्ट"],
        "answer_en": "Conditional compilation based on CPU features",
        "answer_hi": "CPU फीचर्स के आधार पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What does the `mem::size_of` return for `()` unit type?",
        "question_hi": "`()` यूनिट टाइप के लिए `mem::size_of` क्या रिटर्न करता है?",
        "options_en": ["0", "1", "4", "8"],
        "options_hi": ["0", "1", "4", "8"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of the `#[cfg(debug_assertions)]` in release builds?",
        "question_hi": "रिलीज बिल्ड्स में `#[cfg(debug_assertions)]` का उद्देश्य क्या है?",
        "options_en": ["Code is excluded from compilation", "Debug code exclusion", "Release build optimization", "Conditional exclusion"],
        "options_hi": ["कोड को कंपाइलेशन से बाहर रखा जाता है", "डिबग कोड एक्सक्लूजन", "रिलीज बिल्ड ऑप्टिमाइज़ेशन", "कंडीशनल एक्सक्लूजन"],
        "answer_en": "Code is excluded from compilation",
        "answer_hi": "कोड को कंपाइलेशन से बाहर रखा जाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What does the `core::mem::discriminant` function return?",
        "question_hi": "`core::mem::discriminant` फंक्शन क्या रिटर्न करता है?",
        "options_en": ["Value representing enum variant", "Enum discriminant", "Variant identifier", "Enum value tag"],
        "options_hi": ["एनम वेरिएंट को रिप्रेजेंट करने वाला वैल्यू", "एनम डिस्क्रिमिनेंट", "वेरिएंट आइडेंटिफायर", "एनम वैल्यू टैग"],
        "answer_en": "Value representing enum variant",
        "answer_hi": "एनम वेरिएंट को रिप्रेजेंट करने वाला वैल्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of the `#[cfg(miri)]` attribute?",
        "question_hi": "`#[cfg(miri)]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation for Miri interpreter", "Miri configuration", "Interpreter-specific compilation", "Miri test environment"],
        "options_hi": ["Miri इंटरप्रेटर के लिए कंडीशनल कंपाइलेशन", "Miri कॉन्फ़िगरेशन", "इंटरप्रेटर-स्पेसिफिक कंपाइलेशन", "Miri टेस्ट एनवायरनमेंट"],
        "answer_en": "Conditional compilation for Miri interpreter",
        "answer_hi": "Miri इंटरप्रेटर के लिए कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What does the `mem::forget` have in common with `ManuallyDrop`?",
        "question_hi": "`mem::forget` और `ManuallyDrop` में क्या समानता है?",
        "options_en": ["Both prevent destructors from running", "Both manage memory manually", "Both are unsafe", "Both prevent deallocation"],
        "options_hi": ["दोनों डिस्ट्रक्टर्स को रन होने से रोकते हैं", "दोनों मेमोरी को मैन्युअली मैनेज करते हैं", "दोनों अनसेफ हैं", "दोनों डीलोकेशन को रोकते हैं"],
        "answer_en": "Both prevent destructors from running",
        "answer_hi": "दोनों डिस्ट्रक्टर्स को रन होने से रोकते हैं",
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