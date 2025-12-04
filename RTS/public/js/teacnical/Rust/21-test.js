const questions = [
    {
        "num": 1,
        "question_en": "What is the purpose of the `#[repr(align(N))]` attribute on a struct?",
        "question_hi": "स्ट्रक्चर पर `#[repr(align(N))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Forces minimum alignment greater than natural alignment", "Sets maximum alignment", "Disables alignment", "Makes alignment platform-dependent"],
        "options_hi": ["प्राकृतिक अलाइनमेंट से अधिक न्यूनतम अलाइनमेंट फोर्स करता है", "अधिकतम अलाइनमेंट सेट करता है", "अलाइनमेंट डिसेबल करता है", "अलाइनमेंट को प्लेटफॉर्म-डिपेंडेंट बनाता है"],
        "answer_en": "Forces minimum alignment greater than natural alignment",
        "answer_hi": "प्राकृतिक अलाइनमेंट से अधिक न्यूनतम अलाइनमेंट फोर्स करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What does the `Box::from_raw` function require for safety?",
        "question_hi": "सुरक्षा के लिए `Box::from_raw` फंक्शन को क्या चाहिए?",
        "options_en": ["Pointer must come from Box::into_raw and not be used again", "Pointer must be null", "Pointer must be aligned to 16 bytes", "Pointer must be to stack memory"],
        "options_hi": ["पॉइंटर Box::into_raw से आना चाहिए और दोबारा उपयोग नहीं होना चाहिए", "पॉइंटर नल होना चाहिए", "पॉइंटर 16 बाइट्स के लिए अलाइन होना चाहिए", "पॉइंटर स्टैक मेमोरी की ओर होना चाहिए"],
        "answer_en": "Pointer must come from Box::into_raw and not be used again",
        "answer_hi": "पॉइंटर Box::into_raw से आना चाहिए और दोबारा उपयोग नहीं होना चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the difference between `core::mem::size_of` and `core::mem::size_of_val`?",
        "question_hi": "`core::mem::size_of` और `core::mem::size_of_val` में क्या अंतर है?",
        "options_en": ["size_of takes type, size_of_val takes reference", "size_of_val is faster", "size_of works only with Copy types", "size_of_val returns size in bits"],
        "options_hi": ["size_of टाइप लेता है, size_of_val रेफरेंस लेता है", "size_of_val तेज है", "size_of केवल Copy टाइप्स के साथ काम करता है", "size_of_val साइज बिट्स में रिटर्न करता है"],
        "answer_en": "size_of takes type, size_of_val takes reference",
        "answer_hi": "size_of टाइप लेता है, size_of_val रेफरेंस लेता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What does the `#[inline]` attribute without parameters suggest to the compiler?",
        "question_hi": "बिना पैरामीटर्स के `#[inline]` एट्रिब्यूट कंपाइलर को क्या सुझाव देता है?",
        "options_en": ["Function is good candidate for inlining", "Function must be inlined", "Function should never be inlined", "Function has no side effects"],
        "options_hi": ["फंक्शन इनलाइनिंग के लिए अच्छा उम्मीदवार है", "फंक्शन को इनलाइन होना ही चाहिए", "फंक्शन को कभी भी इनलाइन नहीं होना चाहिए", "फंक्शन का कोई साइड इफेक्ट नहीं है"],
        "answer_en": "Function is good candidate for inlining",
        "answer_hi": "फंक्शन इनलाइनिंग के लिए अच्छा उम्मीदवार है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of the `core::hint::unreachable_unchecked` function?",
        "question_hi": "`core::hint::unreachable_unchecked` फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Tell optimizer code path is unreachable", "Cause immediate program termination", "Disable bounds checking", "Enable debug assertions"],
        "options_hi": ["ऑप्टिमाइज़र को बताना कि कोड पाथ अनरीचेबल है", "तुरंत प्रोग्राम टर्मिनेशन करना", "बाउंड्स चेकिंग डिसेबल करना", "डिबग असेर्शन्स एनेबल करना"],
        "answer_en": "Tell optimizer code path is unreachable",
        "answer_hi": "ऑप्टिमाइज़र को बताना कि कोड पाथ अनरीचेबल है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What does the `#[repr(transparent)]` attribute guarantee about memory layout?",
        "question_hi": "`#[repr(transparent)]` एट्रिब्यूट मेमोरी लेआउट के बारे में क्या गारंटी देता है?",
        "options_en": ["Type has exactly same layout as its single non-zero-sized field", "Type has no padding", "Type is always one byte", "Type cannot be optimized"],
        "options_hi": ["टाइप का अपने सिंगल नॉन-जीरो-साइज्ड फील्ड के समान लेआउट है", "टाइप में कोई पैडिंग नहीं है", "टाइप हमेशा एक बाइट होता है", "टाइप को ऑप्टिमाइज़ नहीं किया जा सकता"],
        "answer_en": "Type has exactly same layout as its single non-zero-sized field",
        "answer_hi": "टाइप का अपने सिंगल नॉन-जीरो-साइज्ड फील्ड के समान लेआउट है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the primary use case for `MaybeUninit<T>`?",
        "question_hi": "`MaybeUninit<T>` का प्राथमिक उपयोग मामला क्या है?",
        "options_en": ["Deferred initialization of variables", "Optional types", "Nullable pointers", "Lazy evaluation"],
        "options_hi": ["वेरिएबल्स का डिफर्ड इनिशियलाइज़ेशन", "ऑप्शनल टाइप्स", "नलएबल पॉइंटर्स", "लेजी एवलुएशन"],
        "answer_en": "Deferred initialization of variables",
        "answer_hi": "वेरिएबल्स का डिफर्ड इनिशियलाइज़ेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does the `core::ptr::write_volatile` function prevent?",
        "question_hi": "`core::ptr::write_volatile` फंक्शन क्या रोकता है?",
        "options_en": ["Compiler optimizations that might eliminate the write", "Memory leaks", "Race conditions", "Stack overflow"],
        "options_hi": ["कंपाइलर ऑप्टिमाइज़ेशन जो राइट को एलिमिनेट कर सकते हैं", "मेमोरी लीक्स", "रेस कंडीशन्स", "स्टैक ओवरफ्लो"],
        "answer_en": "Compiler optimizations that might eliminate the write",
        "answer_hi": "कंपाइलर ऑप्टिमाइज़ेशन जो राइट को एलिमिनेट कर सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of the `#[track_caller]` attribute on a function?",
        "question_hi": "फंक्शन पर `#[track_caller]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Improve panic location information", "Track function performance", "Enable call stack tracing", "Count function calls"],
        "options_hi": ["पैनिक लोकेशन इनफॉर्मेशन में सुधार करना", "फंक्शन परफॉर्मेंस ट्रैक करना", "कॉल स्टैक ट्रेसिंग एनेबल करना", "फंक्शन कॉल्स काउंट करना"],
        "answer_en": "Improve panic location information",
        "answer_hi": "पैनिक लोकेशन इनफॉर्मेशन में सुधार करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What does the `core::sync::atomic::fence` function provide?",
        "question_hi": "`core::sync::atomic::fence` फंक्शन क्या प्रदान करता है?",
        "options_en": ["Memory ordering guarantees without an atomic operation", "Memory allocation fencing", "Thread synchronization barrier", "Memory deallocation barrier"],
        "options_hi": ["एटॉमिक ऑपरेशन के बिना मेमोरी ऑर्डरिंग गारंटी", "मेमोरी अलोकेशन फेंसिंग", "थ्रेड सिंक्रोनाइज़ेशन बैरियर", "मेमोरी डीलोकेशन बैरियर"],
        "answer_en": "Memory ordering guarantees without an atomic operation",
        "answer_hi": "एटॉमिक ऑपरेशन के बिना मेमोरी ऑर्डरिंग गारंटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the difference between `core::mem::replace` and `core::mem::swap`?",
        "question_hi": "`core::mem::replace` और `core::mem::swap` में क्या अंतर है?",
        "options_en": ["replace works with one mutable ref and value, swap works with two mutable refs", "replace is faster", "swap returns the old value", "replace only works with Copy types"],
        "options_hi": ["replace एक म्यूटेबल रेफ और वैल्यू के साथ काम करता है, swap दो म्यूटेबल रेफ्स के साथ काम करता है", "replace तेज है", "swap पुरानी वैल्यू रिटर्न करता है", "replace केवल Copy टाइप्स के साथ काम करता है"],
        "answer_en": "replace works with one mutable ref and value, swap works with two mutable refs",
        "answer_hi": "replace एक म्यूटेबल रेफ और वैल्यू के साथ काम करता है, swap दो म्यूटेबल रेफ्स के साथ काम करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What does the `#[global_allocator]` attribute allow you to customize?",
        "question_hi": "`#[global_allocator]` एट्रिब्यूट आपको क्या कस्टमाइज़ करने की अनुमति देता है?",
        "options_en": ["The global heap memory allocator", "Stack allocation strategy", "Thread-local storage", "Global variable initialization"],
        "options_hi": ["ग्लोबल हीप मेमोरी अलोकेटर", "स्टैक अलोकेशन स्ट्रैटेजी", "थ्रेड-लोकल स्टोरेज", "ग्लोबल वेरिएबल इनिशियलाइज़ेशन"],
        "answer_en": "The global heap memory allocator",
        "answer_hi": "ग्लोबल हीप मेमोरी अलोकेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of the `core::intrinsics::caller_location` function?",
        "question_hi": "`core::intrinsics::caller_location` फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get source code location of function caller", "Get current thread location", "Find memory location of caller", "Track CPU register state"],
        "options_hi": ["फंक्शन कॉलर का सोर्स कोड लोकेशन प्राप्त करना", "करंट थ्रेड लोकेशन प्राप्त करना", "कॉलर का मेमोरी लोकेशन ढूंढना", "CPU रजिस्टर स्टेट ट्रैक करना"],
        "answer_en": "Get source code location of function caller",
        "answer_hi": "फंक्शन कॉलर का सोर्स कोड लोकेशन प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What does the `#[repr(C, packed)]` combination do?",
        "question_hi": "`#[repr(C, packed)]` कॉम्बिनेशन क्या करता है?",
        "options_en": ["C layout with no padding between fields", "C layout with maximum padding", "Platform-specific packed layout", "C layout with reordered fields"],
        "options_hi": ["फील्ड्स के बीच कोई पैडिंग नहीं के साथ C लेआउट", "मैक्सिमम पैडिंग के साथ C लेआउट", "प्लेटफॉर्म-स्पेसिफिक पैक्ड लेआउट", "रीऑर्डर्ड फील्ड्स के साथ C लेआउट"],
        "answer_en": "C layout with no padding between fields",
        "answer_hi": "फील्ड्स के बीच कोई पैडिंग नहीं के साथ C लेआउट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the primary safety requirement for using `core::ptr::read`?",
        "question_hi": "`core::ptr::read` का उपयोग करने के लिए प्राथमिक सुरक्षा आवश्यकता क्या है?",
        "options_en": ["Pointer must be valid for reads and properly aligned", "Pointer must be null", "Memory must be zero-initialized", "Pointer must be to stack memory"],
        "options_hi": ["पॉइंटर रीड्स के लिए वैलिड और प्रॉपरली अलाइन्ड होना चाहिए", "पॉइंटर नल होना चाहिए", "मेमोरी जीरो-इनिशियलाइज्ड होनी चाहिए", "पॉइंटर स्टैक मेमोरी की ओर होना चाहिए"],
        "answer_en": "Pointer must be valid for reads and properly aligned",
        "answer_hi": "पॉइंटर रीड्स के लिए वैलिड और प्रॉपरली अलाइन्ड होना चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does the `core::hint::spin_loop` function optimize for?",
        "question_hi": "`core::hint::spin_loop` फंक्शन किसके लिए ऑप्टिमाइज़ करता है?",
        "options_en": ["Power consumption and CPU behavior in busy-wait loops", "Memory usage in loops", "Stack allocation in loops", "Thread priority in loops"],
        "options_hi": ["बिजी-वेट लूप्स में पावर कंजम्पशन और CPU बिहेवियर", "लूप्स में मेमोरी यूसेज", "लूप्स में स्टैक अलोकेशन", "लूप्स में थ्रेड प्रायोरिटी"],
        "answer_en": "Power consumption and CPU behavior in busy-wait loops",
        "answer_hi": "बिजी-वेट लूप्स में पावर कंजम्पशन और CPU बिहेवियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of the `#[cfg(accessible(...))]` attribute?",
        "question_hi": "`#[cfg(accessible(...))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Check if a path is accessible from current scope", "Verify file system access", "Check memory accessibility", "Test network accessibility"],
        "options_hi": ["चेक करना कि करंट स्कोप से पाथ एक्सेसिबल है या नहीं", "फाइल सिस्टम एक्सेस वेरिफाई करना", "मेमोरी एक्सेसिबिलिटी चेक करना", "नेटवर्क एक्सेसिबिलिटी टेस्ट करना"],
        "answer_en": "Check if a path is accessible from current scope",
        "answer_hi": "चेक करना कि करंट स्कोप से पाथ एक्सेसिबल है या नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does the `core::mem::ManuallyDrop::into_inner` method do?",
        "question_hi": "`core::mem::ManuallyDrop::into_inner` मेथड क्या करता है?",
        "options_en": ["Retrieve the wrapped value and allow it to be dropped", "Create new ManuallyDrop instance", "Prevent the value from being dropped", "Convert to raw pointer"],
        "options_hi": ["रैप्ड वैल्यू रिट्रीव करना और उसे ड्रॉप होने की अनुमति देना", "नया ManuallyDrop इंस्टेंस क्रिएट करना", "वैल्यू को ड्रॉप होने से रोकना", "रॉ पॉइंटर में कन्वर्ट करना"],
        "answer_en": "Retrieve the wrapped value and allow it to be dropped",
        "answer_hi": "रैप्ड वैल्यू रिट्रीव करना और उसे ड्रॉप होने की अनुमति देना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the difference between `AtomicBool` and regular `bool` in concurrent code?",
        "question_hi": "कनकरेंट कोड में `AtomicBool` और रेगुलर `bool` में क्या अंतर है?",
        "options_en": ["AtomicBool provides thread-safe operations, bool does not", "AtomicBool is larger", "bool is faster for single-threaded code", "AtomicBool cannot be shared"],
        "options_hi": ["AtomicBool थ्रेड-सेफ ऑपरेशन्स प्रदान करता है, bool नहीं करता", "AtomicBool बड़ा है", "सिंगल-थ्रेडेड कोड के लिए bool तेज है", "AtomicBool शेयर नहीं किया जा सकता"],
        "answer_en": "AtomicBool provides thread-safe operations, bool does not",
        "answer_hi": "AtomicBool थ्रेड-सेफ ऑपरेशन्स प्रदान करता है, bool नहीं करता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What does the `#[linkage = \"external\"]` attribute specify?",
        "question_hi": "`#[linkage = \"external\"]` एट्रिब्यूट क्या निर्दिष्ट करता है?",
        "options_en": ["Symbol should have external linkage", "Symbol should be internal", "Symbol should be weak", "Symbol should be removed"],
        "options_hi": ["सिंबल में एक्सटर्नल लिंकेज होनी चाहिए", "सिंबल इंटरनल होना चाहिए", "सिंबल वीक होना चाहिए", "सिंबल को रिमूव किया जाना चाहिए"],
        "answer_en": "Symbol should have external linkage",
        "answer_hi": "सिंबल में एक्सटर्नल लिंकेज होनी चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of the `core::sync::atomic::compiler_fence`?",
        "question_hi": "`core::sync::atomic::compiler_fence` का उद्देश्य क्या है?",
        "options_en": ["Prevent compiler reordering without CPU instructions", "Create memory barrier", "Synchronize CPU caches", "Flush processor pipelines"],
        "options_hi": ["CPU इंस्ट्रक्शन्स के बिना कंपाइलर रीऑर्डरिंग को रोकना", "मेमोरी बैरियर बनाना", "CPU कैशेस सिंक्रोनाइज़ करना", "प्रोसेसर पाइपलाइन्स फ्लश करना"],
        "answer_en": "Prevent compiler reordering without CPU instructions",
        "answer_hi": "CPU इंस्ट्रक्शन्स के बिना कंपाइलर रीऑर्डरिंग को रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does the `#[cfg(version(...))]` attribute check?",
        "question_hi": "`#[cfg(version(...))]` एट्रिब्यूट क्या चेक करता है?",
        "options_en": ["Rust compiler version", "Cargo package version", "Operating system version", "CPU architecture version"],
        "options_hi": ["Rust कंपाइलर वर्जन", "कार्गो पैकेज वर्जन", "ऑपरेटिंग सिस्टम वर्जन", "CPU आर्किटेक्चर वर्जन"],
        "answer_en": "Rust compiler version",
        "answer_hi": "Rust कंपाइलर वर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the primary use case for `core::num::NonZeroU8`?",
        "question_hi": "`core::num::NonZeroU8` का प्राथमिक उपयोग मामला क्या है?",
        "options_en": ["Memory optimization through niche optimization", "Faster arithmetic operations", "Better error messages", "Smaller binary size"],
        "options_hi": ["निच ऑप्टिमाइज़ेशन के माध्यम से मेमोरी ऑप्टिमाइज़ेशन", "तेज अर्थमैटिक ऑपरेशन्स", "बेहतर एरर मैसेजेस", "छोटा बाइनरी साइज"],
        "answer_en": "Memory optimization through niche optimization",
        "answer_hi": "निच ऑप्टिमाइज़ेशन के माध्यम से मेमोरी ऑप्टिमाइज़ेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What does the `core::ptr::slice_from_raw_parts` function create?",
        "question_hi": "`core::ptr::slice_from_raw_parts` फंक्शन क्या बनाता है?",
        "options_en": ["Raw slice pointer from data pointer and length", "Safe slice from raw parts", "Vector from raw parts", "Array from pointer"],
        "options_hi": ["डेटा पॉइंटर और लेंथ से रॉ स्लाइस पॉइंटर", "रॉ पार्ट्स से सेफ स्लाइस", "रॉ पार्ट्स से वेक्टर", "पॉइंटर से ऐरे"],
        "answer_en": "Raw slice pointer from data pointer and length",
        "answer_hi": "डेटा पॉइंटर और लेंथ से रॉ स्लाइस पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of the `#[cfg(sanitize = \"thread\")]` attribute?",
        "question_hi": "`#[cfg(sanitize = \"thread\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation for thread sanitizer", "Thread safety checking", "Thread pool configuration", "Thread-local storage setup"],
        "options_hi": ["थ्रेड सैनिटाइज़र के लिए कंडीशनल कंपाइलेशन", "थ्रेड सेफ्टी चेकिंग", "थ्रेड पूल कॉन्फ़िगरेशन", "थ्रेड-लोकल स्टोरेज सेटअप"],
        "answer_en": "Conditional compilation for thread sanitizer",
        "answer_hi": "थ्रेड सैनिटाइज़र के लिए कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What does the `core::mem::needs_drop` function tell you about a type?",
        "question_hi": "`core::mem::needs_drop` फंक्शन आपको टाइप के बारे में क्या बताता है?",
        "options_en": ["Whether the type requires drop glue", "If the type can be dropped safely", "If the type has a destructor", "Whether the type is Copy"],
        "options_hi": ["क्या टाइप को ड्रॉप ग्लू की जरूरत है", "क्या टाइप को सेफली ड्रॉप किया जा सकता है", "क्या टाइप में डिस्ट्रक्टर है", "क्या टाइप Copy है"],
        "answer_en": "Whether the type requires drop glue",
        "answer_hi": "क्या टाइप को ड्रॉप ग्लू की जरूरत है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the difference between `core::ptr::addr_of` and `&`?",
        "question_hi": "`core::ptr::addr_of` और `&` में क्या अंतर है?",
        "options_en": ["addr_of creates raw pointer without creating reference", "addr_of is safer", "& only works with mutable data", "addr_of requires unsafe block"],
        "options_hi": ["addr_of रेफरेंस बनाए बिना रॉ पॉइंटर बनाता है", "addr_of ज्यादा सेफ है", "& केवल म्यूटेबल डेटा के साथ काम करता है", "addr_of को अनसेफ ब्लॉक की जरूरत है"],
        "answer_en": "addr_of creates raw pointer without creating reference",
        "answer_hi": "addr_of रेफरेंस बनाए बिना रॉ पॉइंटर बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What does the `#[cfg(not(debug_assertions))]` condition match?",
        "question_hi": "`#[cfg(not(debug_assertions))]` कंडीशन क्या मैच करती है?",
        "options_en": ["Release builds", "Debug builds", "Test builds", "Benchmark builds"],
        "options_hi": ["रिलीज बिल्ड्स", "डिबग बिल्ड्स", "टेस्ट बिल्ड्स", "बेंचमार्क बिल्ड्स"],
        "answer_en": "Release builds",
        "answer_hi": "रिलीज बिल्ड्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of the `core::arch::x86_64::_mm_pause` intrinsic?",
        "question_hi": "`core::arch::x86_64::_mm_pause` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Improve performance of spin-wait loops", "Pause the CPU", "Stop thread execution", "Halt processor core"],
        "options_hi": ["स्पिन-वेट लूप्स की परफॉर्मेंस में सुधार करना", "CPU को पॉज करना", "थ्रेड एक्जिक्यूशन रोकना", "प्रोसेसर कोर हॉल्ट करना"],
        "answer_en": "Improve performance of spin-wait loops",
        "answer_hi": "स्पिन-वेट लूप्स की परफॉर्मेंस में सुधार करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What does the `#[repr(align(16), C)]` combination ensure?",
        "question_hi": "`#[repr(align(16), C)]` कॉम्बिनेशन क्या सुनिश्चित करता है?",
        "options_en": ["16-byte alignment with C-compatible layout", "C layout with 16-byte size", "Platform-specific 16-byte alignment", "C layout and 16-byte packing"],
        "options_hi": ["C-कम्पैटिबल लेआउट के साथ 16-बाइट अलाइनमेंट", "16-बाइट साइज के साथ C लेआउट", "प्लेटफॉर्म-स्पेसिफिक 16-बाइट अलाइनमेंट", "C लेआउट और 16-बाइट पैकिंग"],
        "answer_en": "16-byte alignment with C-compatible layout",
        "answer_hi": "C-कम्पैटिबल लेआउट के साथ 16-बाइट अलाइनमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the primary safety concern with `core::mem::transmute`?",
        "question_hi": "`core::mem::transmute` के साथ प्राथमिक सुरक्षा चिंता क्या है?",
        "options_en": ["Invalid bit patterns and type validity", "Memory leaks", "Performance overhead", "Compiler errors"],
        "options_hi": ["इनवैलिड बिट पैटर्न्स और टाइप वैलिडिटी", "मेमोरी लीक्स", "परफॉर्मेंस ओवरहेड", "कंपाइलर एरर्स"],
        "answer_en": "Invalid bit patterns and type validity",
        "answer_hi": "इनवैलिड बिट पैटर्न्स और टाइप वैलिडिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does the `core::sync::atomic::AtomicPtr` provide over raw pointers?",
        "question_hi": "`core::sync::atomic::AtomicPtr` रॉ पॉइंटर्स पर क्या प्रदान करता है?",
        "options_en": ["Thread-safe atomic operations on pointers", "Automatic memory management", "Null pointer safety", "Bounds checking"],
        "options_hi": ["पॉइंटर्स पर थ्रेड-सेफ एटॉमिक ऑपरेशन्स", "ऑटोमैटिक मेमोरी मैनेजमेंट", "नल पॉइंटर सेफ्टी", "बाउंड्स चेकिंग"],
        "answer_en": "Thread-safe atomic operations on pointers",
        "answer_hi": "पॉइंटर्स पर थ्रेड-सेफ एटॉमिक ऑपरेशन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of the `#[cfg(freebsd)]` attribute?",
        "question_hi": "`#[cfg(freebsd)]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation for FreeBSD systems", "FreeBSD kernel development", "BSD-specific features", "Unix-like system detection"],
        "options_hi": ["FreeBSD सिस्टम्स के लिए कंडीशनल कंपाइलेशन", "FreeBSD करनेल डेवलपमेंट", "BSD-स्पेसिफिक फीचर्स", "यूनिक्स-लाइक सिस्टम डिटेक्शन"],
        "answer_en": "Conditional compilation for FreeBSD systems",
        "answer_hi": "FreeBSD सिस्टम्स के लिए कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What does the `core::mem::size_of` return for a ZST (Zero-Sized Type)?",
        "question_hi": "ZST (जीरो-साइज्ड टाइप) के लिए `core::mem::size_of` क्या रिटर्न करता है?",
        "options_en": ["0", "1", "Platform-dependent", "Compiler-dependent"],
        "options_hi": ["0", "1", "प्लेटफॉर्म-डिपेंडेंट", "कंपाइलर-डिपेंडेंट"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of the `core::task::Poll` type in async Rust?",
        "question_hi": "एसिंक Rust में `core::task::Poll` टाइप का उद्देश्य क्या है?",
        "options_en": ["Represent whether async task is ready or pending", "Poll I/O events", "Manage task scheduling", "Control thread polling"],
        "options_hi": ["रिप्रेजेंट करना कि एसिंक टास्क रेडी है या पेंडिंग", "I/O इवेंट्स पोल करना", "टास्क शेड्यूलिंग मैनेज करना", "थ्रेड पोलिंग कंट्रोल करना"],
        "answer_en": "Represent whether async task is ready or pending",
        "answer_hi": "रिप्रेजेंट करना कि एसिंक टास्क रेडी है या पेंडिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does the `#[cfg(target_has_atomic = \"ptr\")]` condition check?",
        "question_hi": "`#[cfg(target_has_atomic = \"ptr\")]` कंडीशन क्या चेक करती है?",
        "options_en": ["Whether target supports atomic pointer operations", "If pointers are atomic by default", "If target has pointer authentication", "Whether pointers are 64-bit"],
        "options_hi": ["क्या टारगेट एटॉमिक पॉइंटर ऑपरेशन्स सपोर्ट करता है", "क्या पॉइंटर्स डिफॉल्ट रूप से एटॉमिक हैं", "क्या टारगेट में पॉइंटर ऑथेंटिकेशन है", "क्या पॉइंटर्स 64-बिट हैं"],
        "answer_en": "Whether target supports atomic pointer operations",
        "answer_hi": "क्या टारगेट एटॉमिक पॉइंटर ऑपरेशन्स सपोर्ट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the difference between `core::mem::zeroed` and `Default::default`?",
        "question_hi": "`core::mem::zeroed` और `Default::default` में क्या अंतर है?",
        "options_en": ["zeroed creates instance with all bits zero, default uses type's default value", "zeroed is faster", "default only works with Copy types", "zeroed is safe for all types"],
        "options_hi": ["zeroed सभी बिट्स जीरो के साथ इंस्टेंस बनाता है, default टाइप की डिफॉल्ट वैल्यू यूज करता है", "zeroed तेज है", "default केवल Copy टाइप्स के साथ काम करता है", "zeroed सभी टाइप्स के लिए सेफ है"],
        "answer_en": "zeroed creates instance with all bits zero, default uses type's default value",
        "answer_hi": "zeroed सभी बिट्स जीरो के साथ इंस्टेंस बनाता है, default टाइप की डिफॉल्ट वैल्यू यूज करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What does the `core::ptr::slice_from_raw_parts_mut` function return?",
        "question_hi": "`core::ptr::slice_from_raw_parts_mut` फंक्शन क्या रिटर्न करता है?",
        "options_en": ["Mutable raw slice pointer", "Immutable slice", "Safe mutable slice", "Vector from raw parts"],
        "options_hi": ["म्यूटेबल रॉ स्लाइस पॉइंटर", "इम्यूटेबल स्लाइस", "सेफ म्यूटेबल स्लाइस", "रॉ पार्ट्स से वेक्टर"],
        "answer_en": "Mutable raw slice pointer",
        "answer_hi": "म्यूटेबल रॉ स्लाइस पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of the `#[cfg(any(unix, windows))]` attribute?",
        "question_hi": "`#[cfg(any(unix, windows))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation for Unix or Windows systems", "Cross-platform compilation", "OS-specific feature detection", "Platform abstraction"],
        "options_hi": ["यूनिक्स या विंडोज सिस्टम्स के लिए कंडीशनल कंपाइलेशन", "क्रॉस-प्लेटफॉर्म कंपाइलेशन", "OS-स्पेसिफिक फीचर डिटेक्शन", "प्लेटफॉर्म एब्स्ट्रक्शन"],
        "answer_en": "Conditional compilation for Unix or Windows systems",
        "answer_hi": "यूनिक्स या विंडोज सिस्टम्स के लिए कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What does the `core::sync::atomic::Ordering::AcqRel` provide?",
        "question_hi": "`core::sync::atomic::Ordering::AcqRel` क्या प्रदान करता है?",
        "options_en": ["Both acquire and release semantics", "Only acquire semantics", "Only release semantics", "Relaxed ordering"],
        "options_hi": ["एक्वायर और रिलीज दोनों सेमैंटिक्स", "केवल एक्वायर सेमैंटिक्स", "केवल रिलीज सेमैंटिक्स", "रिलैक्स्ड ऑर्डरिंग"],
        "answer_en": "Both acquire and release semantics",
        "answer_hi": "एक्वायर और रिलीज दोनों सेमैंटिक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of the `#[cfg(all(unix, not(target_os = \"macos\")))]` attribute?",
        "question_hi": "`#[cfg(all(unix, not(target_os = \"macos\")))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation for Unix systems excluding macOS", "Only Linux systems", "BSD systems only", "Non-Apple Unix systems"],
        "options_hi": ["macOS को छोड़कर यूनिक्स सिस्टम्स के लिए कंडीशनल कंपाइलेशन", "केवल लिनक्स सिस्टम्स", "केवल BSD सिस्टम्स", "नॉन-एप्पल यूनिक्स सिस्टम्स"],
        "answer_en": "Conditional compilation for Unix systems excluding macOS",
        "answer_hi": "macOS को छोड़कर यूनिक्स सिस्टम्स के लिए कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What does the `core::mem::align_of` return for `u32` on most platforms?",
        "question_hi": "अधिकांश प्लेटफॉर्म्स पर `u32` के लिए `core::mem::align_of` क्या रिटर्न करता है?",
        "options_en": ["4", "2", "8", "1"],
        "options_hi": ["4", "2", "8", "1"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of the `core::hint::black_box` function in benchmarking?",
        "question_hi": "बेंचमार्किंग में `core::hint::black_box` फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Prevent compiler optimizations across function calls", "Measure memory usage", "Track execution time", "Count CPU cycles"],
        "options_hi": ["फंक्शन कॉल्स के बीच कंपाइलर ऑप्टिमाइज़ेशन को रोकना", "मेमोरी यूसेज मापना", "एक्जिक्यूशन टाइम ट्रैक करना", "CPU साइकल्स काउंट करना"],
        "answer_en": "Prevent compiler optimizations across function calls",
        "answer_hi": "फंक्शन कॉल्स के बीच कंपाइलर ऑप्टिमाइज़ेशन को रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What does the `#[repr(u8)]` attribute on an enum ensure?",
        "question_hi": "एनम पर `#[repr(u8)]` एट्रिब्यूट क्या सुनिश्चित करता है?",
        "options_en": ["Enum uses u8 as its representation", "Enum has 8 variants", "Each variant is 8 bytes", "Enum alignment is 8 bytes"],
        "options_hi": ["एनम अपने रिप्रेजेंटेशन के रूप में u8 का उपयोग करता है", "एनम में 8 वेरिएंट हैं", "प्रत्येक वेरिएंट 8 बाइट्स है", "एनम अलाइनमेंट 8 बाइट्स है"],
        "answer_en": "Enum uses u8 as its representation",
        "answer_hi": "एनम अपने रिप्रेजेंटेशन के रूप में u8 का उपयोग करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the difference between `core::ptr::null` and `core::ptr::null_mut`?",
        "question_hi": "`core::ptr::null` और `core::ptr::null_mut` में क्या अंतर है?",
        "options_en": ["null creates *const T, null_mut creates *mut T", "null is safer", "null_mut is faster", "null only works with Copy types"],
        "options_hi": ["null *const T बनाता है, null_mut *mut T बनाता है", "null ज्यादा सेफ है", "null_mut तेज है", "null केवल Copy टाइप्स के साथ काम करता है"],
        "answer_en": "null creates *const T, null_mut creates *mut T",
        "answer_hi": "null *const T बनाता है, null_mut *mut T बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What does the `core::mem::forget` function not deallocate?",
        "question_hi": "`core::mem::forget` फंक्शन क्या डीलोकेट नहीं करता है?",
        "options_en": ["Memory owned by the value", "Stack memory", "Global memory", "Thread-local memory"],
        "options_hi": ["वैल्यू द्वारा स्वामित्व वाली मेमोरी", "स्टैक मेमोरी", "ग्लोबल मेमोरी", "थ्रेड-लोकल मेमोरी"],
        "answer_en": "Memory owned by the value",
        "answer_hi": "वैल्यू द्वारा स्वामित्व वाली मेमोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of the `#[cfg(target_feature = \"sse2\")]` attribute?",
        "question_hi": "`#[cfg(target_feature = \"sse2\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation when SSE2 is available", "SSE2 instruction generation", "Vector math optimization", "SIMD feature detection"],
        "options_hi": ["SSE2 उपलब्ध होने पर कंडीशनल कंपाइलेशन", "SSE2 इंस्ट्रक्शन जनरेशन", "वेक्टर मैथ ऑप्टिमाइज़ेशन", "SIMD फीचर डिटेक्शन"],
        "answer_en": "Conditional compilation when SSE2 is available",
        "answer_hi": "SSE2 उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What does the `core::mem::size_of_val` return for a string slice `&str`?",
        "question_hi": "स्ट्रिंग स्लाइस `&str` के लिए `core::mem::size_of_val` क्या रिटर्न करता है?",
        "options_en": ["Size of fat pointer (16 bytes on 64-bit)", "Length of the string", "Capacity of the string", "Size of string data"],
        "options_hi": ["फैट पॉइंटर का साइज (64-बिट पर 16 बाइट्स)", "स्ट्रिंग की लंबाई", "स्ट्रिंग की कैपेसिटी", "स्ट्रिंग डेटा का साइज"],
        "answer_en": "Size of fat pointer (16 bytes on 64-bit)",
        "answer_hi": "फैट पॉइंटर का साइज (64-बिट पर 16 बाइट्स)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicUsize` type?",
        "question_hi": "`core::sync::atomic::AtomicUsize` टाइप का उद्देश्य क्या है?",
        "options_en": ["Thread-safe atomic operations on usize", "Memory size tracking", "Pointer arithmetic", "Array indexing"],
        "options_hi": ["usize पर थ्रेड-सेफ एटॉमिक ऑपरेशन्स", "मेमोरी साइज ट्रैकिंग", "पॉइंटर अर्थमैटिक", "ऐरे इंडेक्सिंग"],
        "answer_en": "Thread-safe atomic operations on usize",
        "answer_hi": "usize पर थ्रेड-सेफ एटॉमिक ऑपरेशन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What does the `#[cfg(not(test))]` attribute exclude?",
        "question_hi": "`#[cfg(not(test))]` एट्रिब्यूट क्या बाहर करता है?",
        "options_en": ["Code from test builds", "Code from release builds", "Benchmark code", "Documentation code"],
        "options_hi": ["टेस्ट बिल्ड्स से कोड", "रिलीज बिल्ड्स से कोड", "बेंचमार्क कोड", "डॉक्यूमेंटेशन कोड"],
        "answer_en": "Code from test builds",
        "answer_hi": "टेस्ट बिल्ड्स से कोड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of the `core::ptr::read_unaligned` function?",
        "question_hi": "`core::ptr::read_unaligned` फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Read from potentially unaligned memory location", "Read without bounds checking", "Fast unaligned memory access", "Read from network data"],
        "options_hi": ["संभावित रूप से अनअलाइन्ड मेमोरी लोकेशन से रीड करना", "बाउंड्स चेकिंग के बिना रीड करना", "फास्ट अनअलाइन्ड मेमोरी एक्सेस", "नेटवर्क डेटा से रीड करना"],
        "answer_en": "Read from potentially unaligned memory location",
        "answer_hi": "संभावित रूप से अनअलाइन्ड मेमोरी लोकेशन से रीड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What does the `#[cfg(any(target_arch = \"x86\", target_arch = \"x86_64\"))]` condition match?",
        "question_hi": "`#[cfg(any(target_arch = \"x86\", target_arch = \"x86_64\"))]` कंडीशन क्या मैच करती है?",
        "options_en": ["x86 and x86-64 architectures", "Only 32-bit x86", "Only 64-bit x86", "All Intel architectures"],
        "options_hi": ["x86 और x86-64 आर्किटेक्चर्स", "केवल 32-बिट x86", "केवल 64-बिट x86", "सभी इंटेल आर्किटेक्चर्स"],
        "answer_en": "x86 and x86-64 architectures",
        "answer_hi": "x86 और x86-64 आर्किटेक्चर्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the difference between `core::mem::take` and `core::mem::replace`?",
        "question_hi": "`core::mem::take` और `core::mem::replace` में क्या अंतर है?",
        "options_en": ["take uses Default::default, replace uses provided value", "take is faster", "replace only works with Copy types", "take requires mutable reference"],
        "options_hi": ["take Default::default का उपयोग करता है, replace प्रदान की गई वैल्यू का उपयोग करता है", "take तेज है", "replace केवल Copy टाइप्स के साथ काम करता है", "take को म्यूटेबल रेफरेंस की आवश्यकता है"],
        "answer_en": "take uses Default::default, replace uses provided value",
        "answer_hi": "take Default::default का उपयोग करता है, replace प्रदान की गई वैल्यू का उपयोग करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What does the `core::sync::atomic::Ordering::SeqCst` guarantee?",
        "question_hi": "`core::sync::atomic::Ordering::SeqCst` क्या गारंटी देता है?",
        "options_en": ["Sequential consistency across all threads", "Only thread-local consistency", "Relaxed memory ordering", "Acquire-release ordering"],
        "options_hi": ["सभी थ्रेड्स में सीक्वेंशियल कंसिस्टेंसी", "केवल थ्रेड-लोकल कंसिस्टेंसी", "रिलैक्स्ड मेमोरी ऑर्डरिंग", "एक्वायर-रिलीज ऑर्डरिंग"],
        "answer_en": "Sequential consistency across all threads",
        "answer_hi": "सभी थ्रेड्स में सीक्वेंशियल कंसिस्टेंसी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of the `#[cfg(not(feature = \"serde\"))]` attribute?",
        "question_hi": "`#[cfg(not(feature = \"serde\"))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation when serde feature is disabled", "Enable serde support", "Disable all features", "Check for serde dependency"],
        "options_hi": ["serde फीचर डिसेबल होने पर कंडीशनल कंपाइलेशन", "serde सपोर्ट एनेबल करना", "सभी फीचर्स डिसेबल करना", "serde डिपेंडेंसी चेक करना"],
        "answer_en": "Conditional compilation when serde feature is disabled",
        "answer_hi": "serde फीचर डिसेबल होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What does the `core::mem::align_of_val` return for a `[u8; 10]` array?",
        "question_hi": "`[u8; 10]` ऐरे के लिए `core::mem::align_of_val` क्या रिटर्न करता है?",
        "options_en": ["1", "2", "4", "8"],
        "options_hi": ["1", "2", "4", "8"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of the `core::arch::is_x86_feature_detected` macro?",
        "question_hi": "`core::arch::is_x86_feature_detected` मैक्रो का उद्देश्य क्या है?",
        "options_en": ["Runtime detection of x86 CPU features", "Compile-time feature checking", "x86 instruction generation", "CPU vendor detection"],
        "options_hi": ["x86 CPU फीचर्स की रनटाइम डिटेक्शन", "कंपाइल-टाइम फीचर चेकिंग", "x86 इंस्ट्रक्शन जनरेशन", "CPU वेंडर डिटेक्शन"],
        "answer_en": "Runtime detection of x86 CPU features",
        "answer_hi": "x86 CPU फीचर्स की रनटाइम डिटेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does the `#[cfg(target_pointer_width = \"64\")]` condition ensure?",
        "question_hi": "`#[cfg(target_pointer_width = \"64\")]` कंडीशन क्या सुनिश्चित करती है?",
        "options_en": ["64-bit pointer platform", "64-bit integers", "64-byte alignment", "64-bit memory addresses"],
        "options_hi": ["64-बिट पॉइंटर प्लेटफॉर्म", "64-बिट इंटीजर्स", "64-बाइट अलाइनमेंट", "64-बिट मेमोरी एड्रेसेस"],
        "answer_en": "64-bit pointer platform",
        "answer_hi": "64-बिट पॉइंटर प्लेटफॉर्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of the `core::mem::MaybeUninit::write` method?",
        "question_hi": "`core::mem::MaybeUninit::write` मेथड का उद्देश्य क्या है?",
        "options_en": ["Initialize MaybeUninit with a value", "Write to already initialized memory", "Copy bytes to uninitialized memory", "Set memory to zero"],
        "options_hi": ["MaybeUninit को वैल्यू के साथ इनिशियलाइज़ करना", "पहले से इनिशियलाइज्ड मेमोरी में राइट करना", "अनइनिशियलाइज्ड मेमोरी में बाइट्स कॉपी करना", "मेमोरी को जीरो सेट करना"],
        "answer_en": "Initialize MaybeUninit with a value",
        "answer_hi": "MaybeUninit को वैल्यू के साथ इनिशियलाइज़ करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What does the `core::sync::atomic::fence` with `Ordering::Acquire` prevent?",
        "question_hi": "`Ordering::Acquire` के साथ `core::sync::atomic::fence` क्या रोकता है?",
        "options_en": ["Loads from being reordered before the fence", "Stores from being reordered", "All memory operations", "Only atomic operations"],
        "options_hi": ["लोड्स को फेंस से पहले रीऑर्डर होने से रोकता है", "स्टोर्स को रीऑर्डर होने से रोकता है", "सभी मेमोरी ऑपरेशन्स", "केवल एटॉमिक ऑपरेशन्स"],
        "answer_en": "Loads from being reordered before the fence",
        "answer_hi": "लोड्स को फेंस से पहले रीऑर्डर होने से रोकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of the `#[cfg(not(no_global_oom_handling))]` attribute?",
        "question_hi": "`#[cfg(not(no_global_oom_handling))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation when global OOM handling is available", "Disable OOM handling", "Enable custom allocator", "Memory leak detection"],
        "options_hi": ["ग्लोबल OOM हैंडलिंग उपलब्ध होने पर कंडीशनल कंपाइलेशन", "OOM हैंडलिंग डिसेबल करना", "कस्टम अलोकेटर एनेबल करना", "मेमोरी लीक डिटेक्शन"],
        "answer_en": "Conditional compilation when global OOM handling is available",
        "answer_hi": "ग्लोबल OOM हैंडलिंग उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What does the `core::mem::size_of` return for `*const u8` on 64-bit platform?",
        "question_hi": "64-बिट प्लेटफॉर्म पर `*const u8` के लिए `core::mem::size_of` क्या रिटर्न करता है?",
        "options_en": ["8", "4", "1", "16"],
        "options_hi": ["8", "4", "1", "16"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of the `core::ptr::NonNull::new_unchecked` function?",
        "question_hi": "`core::ptr::NonNull::new_unchecked` फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Create NonNull from raw pointer without null check", "Create null pointer", "Check pointer alignment", "Convert reference to pointer"],
        "options_hi": ["नल चेक के बिना रॉ पॉइंटर से NonNull बनाना", "नल पॉइंटर बनाना", "पॉइंटर अलाइनमेंट चेक करना", "रेफरेंस को पॉइंटर में कन्वर्ट करना"],
        "answer_en": "Create NonNull from raw pointer without null check",
        "answer_hi": "नल चेक के बिना रॉ पॉइंटर से NonNull बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What does the `#[cfg(any(target_os = \"linux\", target_os = \"android\"))]` condition match?",
        "question_hi": "`#[cfg(any(target_os = \"linux\", target_os = \"android\"))]` कंडीशन क्या मैच करती है?",
        "options_en": ["Linux and Android operating systems", "Only desktop Linux", "Only mobile Android", "Unix-like systems"],
        "options_hi": ["लिनक्स और एंड्रॉयड ऑपरेटिंग सिस्टम्स", "केवल डेस्कटॉप लिनक्स", "केवल मोबाइल एंड्रॉयड", "यूनिक्स-लाइक सिस्टम्स"],
        "answer_en": "Linux and Android operating systems",
        "answer_hi": "लिनक्स और एंड्रॉयड ऑपरेटिंग सिस्टम्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the difference between `core::mem::drop` and letting a value go out of scope?",
        "question_hi": "`core::mem::drop` और वैल्यू को स्कोप से बाहर जाने देने में क्या अंतर है?",
        "options_en": ["drop allows explicit control of destruction timing", "drop is faster", "Scope drop is unsafe", "drop works only with Copy types"],
        "options_hi": ["drop डिस्ट्रक्शन टाइमिंग के एक्सप्लिसिट कंट्रोल की अनुमति देता है", "drop तेज है", "स्कोप ड्रॉप अनसेफ है", "drop केवल Copy टाइप्स के साथ काम करता है"],
        "answer_en": "drop allows explicit control of destruction timing",
        "answer_hi": "drop डिस्ट्रक्शन टाइमिंग के एक्सप्लिसिट कंट्रोल की अनुमति देता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What does the `core::sync::atomic::AtomicBool::compare_exchange` method do?",
        "question_hi": "`core::sync::atomic::AtomicBool::compare_exchange` मेथड क्या करता है?",
        "options_en": ["Atomically compare and set value if current matches expected", "Compare two atomic values", "Exchange values without comparison", "Set value unconditionally"],
        "options_hi": ["एटॉमिकली कम्पेयर करना और वैल्यू सेट करना यदि करंट एक्सपेक्टेड से मैच करता है", "दो एटॉमिक वैल्यूज की तुलना करना", "तुलना के बिना वैल्यूज एक्सचेंज करना", "बिना शर्त वैल्यू सेट करना"],
        "answer_en": "Atomically compare and set value if current matches expected",
        "answer_hi": "एटॉमिकली कम्पेयर करना और वैल्यू सेट करना यदि करंट एक्सपेक्टेड से मैच करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of the `#[cfg(target_has_atomic_load_store = \"8\")]` attribute?",
        "question_hi": "`#[cfg(target_has_atomic_load_store = \"8\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation when 8-bit atomics are supported", "8-byte atomic operations", "8-bit memory alignment", "8-thread atomic operations"],
        "options_hi": ["8-बिट एटॉमिक्स सपोर्टेड होने पर कंडीशनल कंपाइलेशन", "8-बाइट एटॉमिक ऑपरेशन्स", "8-बिट मेमोरी अलाइनमेंट", "8-थ्रेड एटॉमिक ऑपरेशन्स"],
        "answer_en": "Conditional compilation when 8-bit atomics are supported",
        "answer_hi": "8-बिट एटॉमिक्स सपोर्टेड होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What does the `core::mem::align_of` return for `f64` on most platforms?",
        "question_hi": "अधिकांश प्लेटफॉर्म्स पर `f64` के लिए `core::mem::align_of` क्या रिटर्न करता है?",
        "options_en": ["8", "4", "16", "1"],
        "options_hi": ["8", "4", "16", "1"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of the `core::hint::must_use` function?",
        "question_hi": "`core::hint::must_use` फंक्शन का उद्देश्य क्या है?",
        "options_en": ["No-op function with must_use attribute", "Force value usage", "Prevent compiler optimizations", "Measure function usage"],
        "options_hi": ["must_use एट्रिब्यूट वाला नो-ऑप फंक्शन", "वैल्यू यूसेज फोर्स करना", "कंपाइलर ऑप्टिमाइज़ेशन रोकना", "फंक्शन यूसेज मापना"],
        "answer_en": "No-op function with must_use attribute",
        "answer_hi": "must_use एट्रिब्यूट वाला नो-ऑप फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What does the `#[cfg(all(target_arch = \"wasm32\", not(target_os = \"wasi\")))]` condition match?",
        "question_hi": "`#[cfg(all(target_arch = \"wasm32\", not(target_os = \"wasi\")))]` कंडीशन क्या मैच करती है?",
        "options_en": ["WebAssembly without WASI (browser environment)", "WASI environment", "Native WebAssembly", "WebAssembly with threads"],
        "options_hi": ["WASI के बिना WebAssembly (ब्राउज़र एनवायरनमेंट)", "WASI एनवायरनमेंट", "नेटिव WebAssembly", "थ्रेड्स के साथ WebAssembly"],
        "answer_en": "WebAssembly without WASI (browser environment)",
        "answer_hi": "WASI के बिना WebAssembly (ब्राउज़र एनवायरनमेंट)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of the `core::ptr::copy_nonoverlapping` function?",
        "question_hi": "`core::ptr::copy_nonoverlapping` फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Copy memory between non-overlapping regions", "Fast memory copy", "Safe memory copy", "Copy with bounds checking"],
        "options_hi": ["नॉन-ओवरलैपिंग रीजन्स के बीच मेमोरी कॉपी करना", "फास्ट मेमोरी कॉपी", "सेफ मेमोरी कॉपी", "बाउंड्स चेकिंग के साथ कॉपी"],
        "answer_en": "Copy memory between non-overlapping regions",
        "answer_hi": "नॉन-ओवरलैपिंग रीजन्स के बीच मेमोरी कॉपी करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What does the `core::mem::size_of_val` return for a `Box<i32>`?",
        "question_hi": "`Box<i32>` के लिए `core::mem::size_of_val` क्या रिटर्न करता है?",
        "options_en": ["Size of pointer (8 bytes on 64-bit)", "Size of i32 (4 bytes)", "Size of Box metadata", "Total allocated size"],
        "options_hi": ["पॉइंटर का साइज (64-बिट पर 8 बाइट्स)", "i32 का साइज (4 बाइट्स)", "Box मेटाडेटा का साइज", "टोटल अलोकेटेड साइज"],
        "answer_en": "Size of pointer (8 bytes on 64-bit)",
        "answer_hi": "पॉइंटर का साइज (64-बिट पर 8 बाइट्स)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of the `#[cfg(not(no_rc))]` attribute?",
        "question_hi": "`#[cfg(not(no_rc))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation when Rc is available", "Disable reference counting", "Enable weak references", "Memory leak detection"],
        "options_hi": ["Rc उपलब्ध होने पर कंडीशनल कंपाइलेशन", "रिफरेंस काउंटिंग डिसेबल करना", "वीक रिफरेंसेस एनेबल करना", "मेमोरी लीक डिटेक्शन"],
        "answer_en": "Conditional compilation when Rc is available",
        "answer_hi": "Rc उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What does the `core::sync::atomic::AtomicU32::fetch_add` method return?",
        "question_hi": "`core::sync::atomic::AtomicU32::fetch_add` मेथड क्या रिटर्न करता है?",
        "options_en": ["Previous value before the addition", "New value after addition", "Always returns 0", "The added value"],
        "options_hi": ["एडिशन से पहले की पिछली वैल्यू", "एडिशन के बाद की नई वैल्यू", "हमेशा 0 रिटर्न करता है", "एड की गई वैल्यू"],
        "answer_en": "Previous value before the addition",
        "answer_hi": "एडिशन से पहले की पिछली वैल्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of the `#[cfg(feature = \"nightly\")]` attribute?",
        "question_hi": "`#[cfg(feature = \"nightly\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation for nightly Rust features", "Enable dark mode", "Nightly build detection", "Experimental feature flag"],
        "options_hi": ["नाइटली Rust फीचर्स के लिए कंडीशनल कंपाइलेशन", "डार्क मोड एनेबल करना", "नाइटली बिल्ड डिटेक्शन", "एक्सपेरिमेंटल फीचर फ्लैग"],
        "answer_en": "Conditional compilation for nightly Rust features",
        "answer_hi": "नाइटली Rust फीचर्स के लिए कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What does the `core::mem::align_of` return for `u16` on most platforms?",
        "question_hi": "अधिकांश प्लेटफॉर्म्स पर `u16` के लिए `core::mem::align_of` क्या रिटर्न करता है?",
        "options_en": ["2", "1", "4", "8"],
        "options_hi": ["2", "1", "4", "8"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of the `core::ptr::write_bytes` function?",
        "question_hi": "`core::ptr::write_bytes` फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Set memory region to specific byte value", "Write single byte", "Copy bytes between regions", "Initialize memory with pattern"],
        "options_hi": ["मेमोरी रीजन को स्पेसिफिक बाइट वैल्यू पर सेट करना", "सिंगल बाइट राइट करना", "रीजन्स के बीच बाइट्स कॉपी करना", "पैटर्न के साथ मेमोरी इनिशियलाइज़ करना"],
        "answer_en": "Set memory region to specific byte value",
        "answer_hi": "मेमोरी रीजन को स्पेसिफिक बाइट वैल्यू पर सेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What does the `#[cfg(not(no_collections))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_collections))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Conditional compilation when collections are available", "Disable all collections", "Enable custom collections", "Memory collection features"],
        "options_hi": ["कलेक्शन्स उपलब्ध होने पर कंडीशनल कंपाइलेशन", "सभी कलेक्शन्स डिसेबल करना", "कस्टम कलेक्शन्स एनेबल करना", "मेमोरी कलेक्शन फीचर्स"],
        "answer_en": "Conditional compilation when collections are available",
        "answer_hi": "कलेक्शन्स उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the difference between `core::mem::size_of` and `core::mem::size_of_val` for a `Vec<i32>`?",
        "question_hi": "`Vec<i32>` के लिए `core::mem::size_of` और `core::mem::size_of_val` में क्या अंतर है?",
        "options_en": ["size_of returns size of Vec struct, size_of_val returns size of Vec struct", "size_of_val returns capacity", "size_of returns element size", "size_of_val returns allocated memory size"],
        "options_hi": ["size_of Vec स्ट्रक्चर का साइज रिटर्न करता है, size_of_val Vec स्ट्रक्चर का साइज रिटर्न करता है", "size_of_val कैपेसिटी रिटर्न करता है", "size_of एलिमेंट साइज रिटर्न करता है", "size_of_val अलोकेटेड मेमोरी साइज रिटर्न करता है"],
        "answer_en": "size_of returns size of Vec struct, size_of_val returns size of Vec struct",
        "answer_hi": "size_of Vec स्ट्रक्चर का साइज रिटर्न करता है, size_of_val Vec स्ट्रक्चर का साइज रिटर्न करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What does the `core::sync::atomic::Ordering::Relaxed` guarantee?",
        "question_hi": "`core::sync::atomic::Ordering::Relaxed` क्या गारंटी देता है?",
        "options_en": ["No ordering guarantees, only atomicity", "Sequential consistency", "Acquire-release semantics", "Thread-local ordering"],
        "options_hi": ["कोई ऑर्डरिंग गारंटी नहीं, केवल एटॉमिसिटी", "सीक्वेंशियल कंसिस्टेंसी", "एक्वायर-रिलीज सेमैंटिक्स", "थ्रेड-लोकल ऑर्डरिंग"],
        "answer_en": "No ordering guarantees, only atomicity",
        "answer_hi": "कोई ऑर्डरिंग गारंटी नहीं, केवल एटॉमिसिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of the `#[cfg(not(no_sync))]` attribute?",
        "question_hi": "`#[cfg(not(no_sync))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation when Sync trait is available", "Disable thread synchronization", "Enable async operations", "Memory synchronization features"],
        "options_hi": ["Sync ट्रेट उपलब्ध होने पर कंडीशनल कंपाइलेशन", "थ्रेड सिंक्रोनाइज़ेशन डिसेबल करना", "एसिंक ऑपरेशन्स एनेबल करना", "मेमोरी सिंक्रोनाइज़ेशन फीचर्स"],
        "answer_en": "Conditional compilation when Sync trait is available",
        "answer_hi": "Sync ट्रेट उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What does the `core::mem::size_of` return for `Option<Box<i32>>`?",
        "question_hi": "`Option<Box<i32>>` के लिए `core::mem::size_of` क्या रिटर्न करता है?",
        "options_en": ["Same as Box<i32> due to niche optimization", "Larger than Box<i32>", "Smaller than Box<i32>", "Platform-dependent"],
        "options_hi": ["निच ऑप्टिमाइज़ेशन के कारण Box<i32> के समान", "Box<i32> से बड़ा", "Box<i32> से छोटा", "प्लेटफॉर्म-डिपेंडेंट"],
        "answer_en": "Same as Box<i32> due to niche optimization",
        "answer_hi": "निच ऑप्टिमाइज़ेशन के कारण Box<i32> के समान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of the `core::arch::x86_64::_rdtsc` intrinsic?",
        "question_hi": "`core::arch::x86_64::_rdtsc` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Read CPU timestamp counter", "Read system time", "Get processor frequency", "Measure cache latency"],
        "options_hi": ["CPU टाइमस्टैम्प काउंटर रीड करना", "सिस्टम टाइम रीड करना", "प्रोसेसर फ्रीक्वेंसी प्राप्त करना", "कैश लेटेंसी मापना"],
        "answer_en": "Read CPU timestamp counter",
        "answer_hi": "CPU टाइमस्टैम्प काउंटर रीड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What does the `#[cfg(not(no_fp))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_fp))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Conditional compilation when floating point is available", "Disable floating point", "Enable fixed point arithmetic", "Floating point optimization"],
        "options_hi": ["फ्लोटिंग पॉइंट उपलब्ध होने पर कंडीशनल कंपाइलेशन", "फ्लोटिंग पॉइंट डिसेबल करना", "फिक्स्ड पॉइंट अर्थमैटिक एनेबल करना", "फ्लोटिंग पॉइंट ऑप्टिमाइज़ेशन"],
        "answer_en": "Conditional compilation when floating point is available",
        "answer_hi": "फ्लोटिंग पॉइंट उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicIsize` type?",
        "question_hi": "`core::sync::atomic::AtomicIsize` टाइप का उद्देश्य क्या है?",
        "options_en": ["Thread-safe atomic operations on signed pointer-sized integers", "Memory size tracking", "Signed array indexing", "Negative atomic operations"],
        "options_hi": ["साइन्ड पॉइंटर-साइज्ड इंटीजर्स पर थ्रेड-सेफ एटॉमिक ऑपरेशन्स", "मेमोरी साइज ट्रैकिंग", "साइन्ड ऐरे इंडेक्सिंग", "नेगेटिव एटॉमिक ऑपरेशन्स"],
        "answer_en": "Thread-safe atomic operations on signed pointer-sized integers",
        "answer_hi": "साइन्ड पॉइंटर-साइज्ड इंटीजर्स पर थ्रेड-सेफ एटॉमिक ऑपरेशन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What does the `core::mem::align_of_val` return for a `[u64; 5]` array?",
        "question_hi": "`[u64; 5]` ऐरे के लिए `core::mem::align_of_val` क्या रिटर्न करता है?",
        "options_en": ["8", "4", "16", "1"],
        "options_hi": ["8", "4", "16", "1"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of the `#[cfg(not(no_panic))]` attribute?",
        "question_hi": "`#[cfg(not(no_panic))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation when panic handling is available", "Disable panic handling", "Enable custom panic handler", "Panic recovery features"],
        "options_hi": ["पैनिक हैंडलिंग उपलब्ध होने पर कंडीशनल कंपाइलेशन", "पैनिक हैंडलिंग डिसेबल करना", "कस्टम पैनिक हैंडलर एनेबल करना", "पैनिक रिकवरी फीचर्स"],
        "answer_en": "Conditional compilation when panic handling is available",
        "answer_hi": "पैनिक हैंडलिंग उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What does the `core::ptr::NonNull::as_ptr` method return?",
        "question_hi": "`core::ptr::NonNull::as_ptr` मेथड क्या रिटर्न करता है?",
        "options_en": ["Raw pointer without mutability", "Mutable raw pointer", "Shared reference", "Mutable reference"],
        "options_hi": ["म्यूटेबिलिटी के बिना रॉ पॉइंटर", "म्यूटेबल रॉ पॉइंटर", "शेयर्ड रेफरेंस", "म्यूटेबल रेफरेंस"],
        "answer_en": "Raw pointer without mutability",
        "answer_hi": "म्यूटेबिलिटी के बिना रॉ पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of the `core::sync::atomic::compiler_fence` with `Ordering::Release`?",
        "question_hi": "`Ordering::Release` के साथ `core::sync::atomic::compiler_fence` का उद्देश्य क्या है?",
        "options_en": ["Prevent preceding operations from being reordered after the fence", "Prevent following operations from being reordered before", "Create memory barrier", "Synchronize CPU caches"],
        "options_hi": ["फेंस के बाद प्रीसीडिंग ऑपरेशन्स को रीऑर्डर होने से रोकना", "फेंस से पहले फॉलोइंग ऑपरेशन्स को रीऑर्डर होने से रोकना", "मेमोरी बैरियर बनाना", "CPU कैशेस सिंक्रोनाइज़ करना"],
        "answer_en": "Prevent preceding operations from being reordered after the fence",
        "answer_hi": "फेंस के बाद प्रीसीडिंग ऑपरेशन्स को रीऑर्डर होने से रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What does the `#[cfg(not(no_core))]` attribute ensure?",
        "question_hi": "`#[cfg(not(no_core))]` एट्रिब्यूट क्या सुनिश्चित करता है?",
        "options_en": ["Conditional compilation when core library is available", "Disable core library", "Enable std library", "Core feature detection"],
        "options_hi": ["कोर लाइब्रेरी उपलब्ध होने पर कंडीशनल कंपाइलेशन", "कोर लाइब्रेरी डिसेबल करना", "std लाइब्रेरी एनेबल करना", "कोर फीचर डिटेक्शन"],
        "answer_en": "Conditional compilation when core library is available",
        "answer_hi": "कोर लाइब्रेरी उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of the `core::mem::MaybeUninit::array_assume_init`?",
        "question_hi": "`core::mem::MaybeUninit::array_assume_init` का उद्देश्य क्या है?",
        "options_en": ["Assume entire array of MaybeUninit is initialized", "Initialize array elements", "Check array initialization", "Copy array elements"],
        "options_hi": ["MaybeUninit के पूरे ऐरे को इनिशियलाइज्ड मानना", "ऐरे एलिमेंट्स इनिशियलाइज़ करना", "ऐरे इनिशियलाइज़ेशन चेक करना", "ऐरे एलिमेंट्स कॉपी करना"],
        "answer_en": "Assume entire array of MaybeUninit is initialized",
        "answer_hi": "MaybeUninit के पूरे ऐरे को इनिशियलाइज्ड मानना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What does the `core::sync::atomic::AtomicU8::load` with `Ordering::Acquire` guarantee?",
        "question_hi": "`Ordering::Acquire` के साथ `core::sync::atomic::AtomicU8::load` क्या गारंटी देता है?",
        "options_en": ["Subsequent operations cannot be reordered before this load", "Previous operations cannot be reordered after", "All operations are sequentially consistent", "Only atomicity is guaranteed"],
        "options_hi": ["सब्सीक्वेंट ऑपरेशन्स इस लोड से पहले रीऑर्डर नहीं हो सकते", "प्रीवियस ऑपरेशन्स इसके बाद रीऑर्डर नहीं हो सकते", "सभी ऑपरेशन्स सीक्वेंशियली कंसिस्टेंट हैं", "केवल एटॉमिसिटी गारंटीड है"],
        "answer_en": "Subsequent operations cannot be reordered before this load",
        "answer_hi": "सब्सीक्वेंट ऑपरेशन्स इस लोड से पहले रीऑर्डर नहीं हो सकते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of the `#[cfg(not(no_alloc))]` attribute?",
        "question_hi": "`#[cfg(not(no_alloc))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation when alloc crate is available", "Disable memory allocation", "Enable custom allocator", "Heap allocation features"],
        "options_hi": ["alloc क्रेट उपलब्ध होने पर कंडीशनल कंपाइलेशन", "मेमोरी अलोकेशन डिसेबल करना", "कस्टम अलोकेटर एनेबल करना", "हीप अलोकेशन फीचर्स"],
        "answer_en": "Conditional compilation when alloc crate is available",
        "answer_hi": "alloc क्रेट उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What does the `core::mem::size_of` return for `*mut [u8]` (raw slice pointer)?",
        "question_hi": "`*mut [u8]` (रॉ स्लाइस पॉइंटर) के लिए `core::mem::size_of` क्या रिटर्न करता है?",
        "options_en": ["16 bytes (two pointers)", "8 bytes", "24 bytes", "Platform-dependent"],
        "options_hi": ["16 बाइट्स (दो पॉइंटर्स)", "8 बाइट्स", "24 बाइट्स", "प्लेटफॉर्म-डिपेंडेंट"],
        "answer_en": "16 bytes (two pointers)",
        "answer_hi": "16 बाइट्स (दो पॉइंटर्स)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of the `core::arch::global_asm` macro?",
        "question_hi": "`core::arch::global_asm` मैक्रो का उद्देश्य क्या है?",
        "options_en": ["Include assembly code in global scope", "Inline assembly in functions", "Assembly macro expansion", "Platform-specific assembly"],
        "options_hi": ["ग्लोबल स्कोप में असेंबली कोड इन्क्लूड करना", "फंक्शन्स में इनलाइन असेंबली", "असेंबली मैक्रो एक्सपेंशन", "प्लेटफॉर्म-स्पेसिफिक असेंबली"],
        "answer_en": "Include assembly code in global scope",
        "answer_hi": "ग्लोबल स्कोप में असेंबली कोड इन्क्लूड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What does the `#[cfg(not(no_std))]` attribute enable by default?",
        "question_hi": "`#[cfg(not(no_std))]` एट्रिब्यूट डिफॉल्ट रूप से क्या एनेबल करता है?",
        "options_en": ["std library features", "Core library only", "Custom std implementation", "Platform-specific features"],
        "options_hi": ["std लाइब्रेरी फीचर्स", "केवल कोर लाइब्रेरी", "कस्टम std इम्प्लीमेंटेशन", "प्लेटफॉर्म-स्पेसिफिक फीचर्स"],
        "answer_en": "std library features",
        "answer_hi": "std लाइब्रेरी फीचर्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of the `core::intrinsics::atomic_load` intrinsic?",
        "question_hi": "`core::intrinsics::atomic_load` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Compiler intrinsic for atomic load operation", "Memory load optimization", "Atomic variable declaration", "Load memory barrier"],
        "options_hi": ["एटॉमिक लोड ऑपरेशन के लिए कंपाइलर इंट्रिन्सिक", "मेमोरी लोड ऑप्टिमाइज़ेशन", "एटॉमिक वेरिएबल डिक्लेरेशन", "लोड मेमोरी बैरियर"],
        "answer_en": "Compiler intrinsic for atomic load operation",
        "answer_hi": "एटॉमिक लोड ऑपरेशन के लिए कंपाइलर इंट्रिन्सिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What does the `core::mem::align_of` return for `usize` on 32-bit platform?",
        "question_hi": "32-बिट प्लेटफॉर्म पर `usize` के लिए `core::mem::align_of` क्या रिटर्न करता है?",
        "options_en": ["4", "2", "8", "1"],
        "options_hi": ["4", "2", "8", "1"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicI64` type?",
        "question_hi": "`core::sync::atomic::AtomicI64` टाइप का उद्देश्य क्या है?",
        "options_en": ["Thread-safe atomic operations on 64-bit signed integers", "64-bit memory addresses", "Large atomic counters", "Signed atomic operations"],
        "options_hi": ["64-बिट साइन्ड इंटीजर्स पर थ्रेड-सेफ एटॉमिक ऑपरेशन्स", "64-बिट मेमोरी एड्रेसेस", "लार्ज एटॉमिक काउंटर्स", "साइन्ड एटॉमिक ऑपरेशन्स"],
        "answer_en": "Thread-safe atomic operations on 64-bit signed integers",
        "answer_hi": "64-बिट साइन्ड इंटीजर्स पर थ्रेड-सेफ एटॉमिक ऑपरेशन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What does the `#[cfg(not(no_target_vendor))]` attribute check?",
        "question_hi": "`#[cfg(not(no_target_vendor))]` एट्रिब्यूट क्या चेक करता है?",
        "options_en": ["Whether target vendor information is available", "If vendor-specific features are enabled", "CPU vendor detection", "Platform vendor support"],
        "options_hi": ["क्या टारगेट वेंडर इनफॉर्मेशन उपलब्ध है", "क्या वेंडर-स्पेसिफिक फीचर्स एनेबल हैं", "CPU वेंडर डिटेक्शन", "प्लेटफॉर्म वेंडर सपोर्ट"],
        "answer_en": "Whether target vendor information is available",
        "answer_hi": "क्या टारगेट वेंडर इनफॉर्मेशन उपलब्ध है",
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