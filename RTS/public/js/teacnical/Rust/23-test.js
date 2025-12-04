const questions = [
    {
        "num": 1,
        "question_en": "What is the purpose of the `#[cfg(doctest)]` attribute in documentation tests?",
        "question_hi": "डॉक्यूमेंटेशन टेस्ट्स में `#[cfg(doctest)]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditionally compile code only for doc tests", "Enable documentation generation", "Disable tests in docs", "Configure test behavior"],
        "options_hi": ["केवल डॉक टेस्ट्स के लिए कोड को कंडीशनली कंपाइल करना", "डॉक्यूमेंटेशन जनरेशन एनेबल करना", "डॉक्स में टेस्ट्स डिसेबल करना", "टेस्ट बिहेवियर कॉन्फ़िगर करना"],
        "answer_en": "Conditionally compile code only for doc tests",
        "answer_hi": "केवल डॉक टेस्ट्स के लिए कोड को कंडीशनली कंपाइल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What does the `core::mem::ManuallyDrop::new` function guarantee about the wrapped value?",
        "question_hi": "`core::mem::ManuallyDrop::new` फंक्शन रैप्ड वैल्यू के बारे में क्या गारंटी देता है?",
        "options_en": ["Prevents automatic destruction when ManuallyDrop drops", "Forces immediate destruction", "Copies the value", "Moves the value to heap"],
        "options_hi": ["ManuallyDrop के ड्रॉप होने पर ऑटोमैटिक डिस्ट्रक्शन को रोकता है", "तुरंत डिस्ट्रक्शन फोर्स करता है", "वैल्यू को कॉपी करता है", "वैल्यू को हीप में मूव करता है"],
        "answer_en": "Prevents automatic destruction when ManuallyDrop drops",
        "answer_hi": "ManuallyDrop के ड्रॉप होने पर ऑटोमैटिक डिस्ट्रक्शन को रोकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the difference between `#[inline]` and `#[inline(always)]` in terms of code bloat?",
        "question_hi": "कोड ब्लोट के संदर्भ में `#[inline]` और `#[inline(always)]` में क्या अंतर है?",
        "options_en": ["inline(always) may cause more code bloat", "inline causes more bloat", "Both have same effect", "Neither affects code size"],
        "options_hi": ["inline(always) अधिक कोड ब्लोट का कारण बन सकता है", "inline अधिक ब्लोट का कारण बनता है", "दोनों का समान प्रभाव होता है", "दोनों कोड साइज को प्रभावित नहीं करते"],
        "answer_en": "inline(always) may cause more code bloat",
        "answer_hi": "inline(always) अधिक कोड ब्लोट का कारण बन सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What does the `core::hint::assert_unchecked` function do when assertions are enabled?",
        "question_hi": "असेर्शन्स एनेबल होने पर `core::hint::assert_unchecked` फंक्शन क्या करता है?",
        "options_en": ["Behaves like regular assert, otherwise no-op", "Always panics", "Ignores the condition", "Optimizes the check"],
        "options_hi": ["रेगुलर असेर्ट की तरह बिहेव करता है, अन्यथा नो-ऑप", "हमेशा पैनिक करता है", "कंडीशन को इग्नोर करता है", "चेक को ऑप्टिमाइज़ करता है"],
        "answer_en": "Behaves like regular assert, otherwise no-op",
        "answer_hi": "रेगुलर असेर्ट की तरह बिहेव करता है, अन्यथा नो-ऑप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of the `#[repr(align(N), packed)]` combination on a struct?",
        "question_hi": "स्ट्रक्चर पर `#[repr(align(N), packed)]` कॉम्बिनेशन का उद्देश्य क्या है?",
        "options_en": ["Force alignment while removing padding between fields", "Create packed struct with alignment", "Disable both alignment and padding", "Platform-specific layout"],
        "options_hi": ["फील्ड्स के बीच पैडिंग रिमूव करते हुए अलाइनमेंट फोर्स करना", "अलाइनमेंट के साथ पैक्ड स्ट्रक्चर बनाना", "अलाइनमेंट और पैडिंग दोनों डिसेबल करना", "प्लेटफॉर्म-स्पेसिफिक लेआउट"],
        "answer_en": "Force alignment while removing padding between fields",
        "answer_hi": "फील्ड्स के बीच पैडिंग रिमूव करते हुए अलाइनमेंट फोर्स करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What does the `core::sync::atomic::AtomicBool::fetch_xor` method return?",
        "question_hi": "`core::sync::atomic::AtomicBool::fetch_xor` मेथड क्या रिटर्न करता है?",
        "options_en": ["Previous value before XOR operation", "Result of XOR operation", "Always returns false", "The XOR operand"],
        "options_hi": ["XOR ऑपरेशन से पहले की पिछली वैल्यू", "XOR ऑपरेशन का रिजल्ट", "हमेशा false रिटर्न करता है", "XOR ऑपरेंड"],
        "answer_en": "Previous value before XOR operation",
        "answer_hi": "XOR ऑपरेशन से पहले की पिछली वैल्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of the `#[cfg(not(no_custom_test_frameworks))]` attribute?",
        "question_hi": "`#[cfg(not(no_custom_test_frameworks))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Enable custom test framework support", "Disable default test framework", "Configure test runners", "Custom test compilation"],
        "options_hi": ["कस्टम टेस्ट फ्रेमवर्क सपोर्ट एनेबल करना", "डिफॉल्ट टेस्ट फ्रेमवर्क डिसेबल करना", "टेस्ट रनर्स कॉन्फ़िगर करना", "कस्टम टेस्ट कंपाइलेशन"],
        "answer_en": "Enable custom test framework support",
        "answer_hi": "कस्टम टेस्ट फ्रेमवर्क सपोर्ट एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does the `core::mem::MaybeUninit::slice_assume_init_mut` method provide?",
        "question_hi": "`core::mem::MaybeUninit::slice_assume_init_mut` मेथड क्या प्रदान करता है?",
        "options_en": ["Mutable slice reference to initialized values", "Initialize mutable slice", "Check mutable initialization", "Copy slice data mutably"],
        "options_hi": ["इनिशियलाइज्ड वैल्यूज का म्यूटेबल स्लाइस रेफरेंस", "म्यूटेबल स्लाइस इनिशियलाइज़ करना", "म्यूटेबल इनिशियलाइज़ेशन चेक करना", "म्यूटेबली स्लाइस डेटा कॉपी करना"],
        "answer_en": "Mutable slice reference to initialized values",
        "answer_hi": "इनिशियलाइज्ड वैल्यूज का म्यूटेबल स्लाइस रेफरेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of the `core::sync::atomic::fence` with `Ordering::Acquire` in reader-writer patterns?",
        "question_hi": "रीडर-राइटर पैटर्न्स में `Ordering::Acquire` के साथ `core::sync::atomic::fence` का उद्देश्य क्या है?",
        "options_en": ["Ensure subsequent reads see writes from other threads", "Prevent previous writes", "Synchronize only writes", "Create memory barrier for reads"],
        "options_hi": ["सुनिश्चित करना कि सब्सीक्वेंट रीड्स अन्य थ्रेड्स के राइट्स देखें", "प्रीवियस राइट्स को रोकना", "केवल राइट्स सिंक्रोनाइज़ करना", "रीड्स के लिए मेमोरी बैरियर बनाना"],
        "answer_en": "Ensure subsequent reads see writes from other threads",
        "answer_hi": "सुनिश्चित करना कि सब्सीक्वेंट रीड्स अन्य थ्रेड्स के राइट्स देखें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What does the `#[cfg(not(no_std_atomic))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_std_atomic))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Standard library atomic types", "Disable atomics", "Enable core atomics only", "Platform-specific atomics"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी एटॉमिक टाइप्स", "एटॉमिक्स डिसेबल करना", "केवल कोर एटॉमिक्स एनेबल करना", "प्लेटफॉर्म-स्पेसिफिक एटॉमिक्स"],
        "answer_en": "Standard library atomic types",
        "answer_hi": "स्टैंडर्ड लाइब्रेरी एटॉमिक टाइप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of the `core::intrinsics::atomic_xadd` intrinsic?",
        "question_hi": "`core::intrinsics::atomic_xadd` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Atomic exchange-and-add operation", "Atomic addition", "Exchange values", "Add with carry"],
        "options_hi": ["एटॉमिक एक्सचेंज-एंड-एड ऑपरेशन", "एटॉमिक एडिशन", "वैल्यूज एक्सचेंज करना", "कैरी के साथ एड करना"],
        "answer_en": "Atomic exchange-and-add operation",
        "answer_hi": "एटॉमिक एक्सचेंज-एंड-एड ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What does the `#[repr(transparent)]` attribute ensure about type compatibility?",
        "question_hi": "`#[repr(transparent)]` एट्रिब्यूट टाइप कम्पैटिबिलिटी के बारे में क्या सुनिश्चित करता है?",
        "options_en": ["ABI compatibility with wrapped type", "Source compatibility", "Binary compatibility", "No compatibility guarantees"],
        "options_hi": ["रैप्ड टाइप के साथ ABI कम्पैटिबिलिटी", "सोर्स कम्पैटिबिलिटी", "बाइनरी कम्पैटिबिलिटी", "कोई कम्पैटिबिलिटी गारंटी नहीं"],
        "answer_en": "ABI compatibility with wrapped type",
        "answer_hi": "रैप्ड टाइप के साथ ABI कम्पैटिबिलिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of the `core::mem::replace_with` function?",
        "question_hi": "`core::mem::replace_with` फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Temporarily take ownership and replace with new value", "Permanent replacement", "Swap without return", "Copy and replace"],
        "options_hi": ["अस्थायी रूप से स्वामित्व लेना और नई वैल्यू से रिप्लेस करना", "स्थायी रिप्लेसमेंट", "रिटर्न के बिना स्वैप करना", "कॉपी और रिप्लेस करना"],
        "answer_en": "Temporarily take ownership and replace with new value",
        "answer_hi": "अस्थायी रूप से स्वामित्व लेना और नई वैल्यू से रिप्लेस करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What does the `core::sync::atomic::AtomicPtr::fetch_update` with closure provide?",
        "question_hi": "क्लोजर के साथ `core::sync::atomic::AtomicPtr::fetch_update` क्या प्रदान करता है?",
        "options_en": ["Atomic update with transformation function", "Simple pointer update", "Non-atomic update", "Update without closure"],
        "options_hi": ["ट्रांसफॉर्मेशन फंक्शन के साथ एटॉमिक अपडेट", "सिंपल पॉइंटर अपडेट", "नॉन-एटॉमिक अपडेट", "क्लोजर के बिना अपडेट"],
        "answer_en": "Atomic update with transformation function",
        "answer_hi": "ट्रांसफॉर्मेशन फंक्शन के साथ एटॉमिक अपडेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of the `#[cfg(not(no_std_io))]` attribute?",
        "question_hi": "`#[cfg(not(no_std_io))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Enable standard I/O types and traits", "Disable I/O operations", "Enable core I/O only", "Platform I/O support"],
        "options_hi": ["स्टैंडर्ड I/O टाइप्स और ट्रेट्स एनेबल करना", "I/O ऑपरेशन्स डिसेबल करना", "केवल कोर I/O एनेबल करना", "प्लेटफॉर्म I/O सपोर्ट"],
        "answer_en": "Enable standard I/O types and traits",
        "answer_hi": "स्टैंडर्ड I/O टाइप्स और ट्रेट्स एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does the `core::mem::MaybeUninit::write_slice_cloned` method do?",
        "question_hi": "`core::mem::MaybeUninit::write_slice_cloned` मेथड क्या करता है?",
        "options_en": ["Initialize slice by cloning elements", "Write without cloning", "Copy slice data", "Initialize with references"],
        "options_hi": ["एलिमेंट्स को क्लोन करके स्लाइस इनिशियलाइज़ करना", "क्लोनिंग के बिना राइट करना", "स्लाइस डेटा कॉपी करना", "रेफरेंसेस के साथ इनिशियलाइज़ करना"],
        "answer_en": "Initialize slice by cloning elements",
        "answer_hi": "एलिमेंट्स को क्लोन करके स्लाइस इनिशियलाइज़ करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of the `core::sync::atomic::compiler_fence` in single-threaded code?",
        "question_hi": "सिंगल-थ्रेडेड कोड में `core::sync::atomic::compiler_fence` का उद्देश्य क्या है?",
        "options_en": ["Prevent compiler reordering without CPU barrier", "Create memory barrier", "Synchronize threads", "No purpose in single-threaded"],
        "options_hi": ["CPU बैरियर के बिना कंपाइलर रीऑर्डरिंग को रोकना", "मेमोरी बैरियर बनाना", "थ्रेड्स सिंक्रोनाइज़ करना", "सिंगल-थ्रेडेड में कोई उद्देश्य नहीं"],
        "answer_en": "Prevent compiler reordering without CPU barrier",
        "answer_hi": "CPU बैरियर के बिना कंपाइलर रीऑर्डरिंग को रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does the `#[cfg(not(no_std_net))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_std_net))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Standard library networking types", "Disable networking", "Enable core networking", "Platform networking"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी नेटवर्किंग टाइप्स", "नेटवर्किंग डिसेबल करना", "कोर नेटवर्किंग एनेबल करना", "प्लेटफॉर्म नेटवर्किंग"],
        "answer_en": "Standard library networking types",
        "answer_hi": "स्टैंडर्ड लाइब्रेरी नेटवर्किंग टाइप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of the `core::intrinsics::atomic_umax` intrinsic?",
        "question_hi": "`core::intrinsics::atomic_umax` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Atomic unsigned maximum operation", "Atomic maximum", "Unsigned comparison", "Max operation"],
        "options_hi": ["एटॉमिक अनसाइन्ड मैक्सिमम ऑपरेशन", "एटॉमिक मैक्सिमम", "अनसाइन्ड कम्पेयरिजन", "मैक्स ऑपरेशन"],
        "answer_en": "Atomic unsigned maximum operation",
        "answer_hi": "एटॉमिक अनसाइन्ड मैक्सिमम ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What does the `core::mem::MaybeUninit::array_from_fn` with const generics enable?",
        "question_hi": "कॉन्स्ट जेनेरिक्स के साथ `core::mem::MaybeUninit::array_from_fn` क्या एनेबल करता है?",
        "options_en": ["Compile-time array initialization", "Runtime array creation", "Dynamic arrays", "Variable-sized arrays"],
        "options_hi": ["कंपाइल-टाइम ऐरे इनिशियलाइज़ेशन", "रनटाइम ऐरे क्रिएशन", "डायनामिक ऐरे", "वेरिएबल-साइज्ड ऐरे"],
        "answer_en": "Compile-time array initialization",
        "answer_hi": "कंपाइल-टाइम ऐरे इनिशियलाइज़ेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of the `#[cfg(not(no_std_time))]` attribute?",
        "question_hi": "`#[cfg(not(no_std_time))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Enable standard time types", "Disable time operations", "Enable core time", "Platform time support"],
        "options_hi": ["स्टैंडर्ड टाइम टाइप्स एनेबल करना", "टाइम ऑपरेशन्स डिसेबल करना", "कोर टाइम एनेबल करना", "प्लेटफॉर्म टाइम सपोर्ट"],
        "answer_en": "Enable standard time types",
        "answer_hi": "स्टैंडर्ड टाइम टाइप्स एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does the `core::sync::atomic::AtomicU64::fetch_min` with `Ordering::SeqCst` guarantee?",
        "question_hi": "`Ordering::SeqCst` के साथ `core::sync::atomic::AtomicU64::fetch_min` क्या गारंटी देता है?",
        "options_en": ["Strongest ordering for atomic minimum operation", "Weak consistency", "Acquire-release only", "No ordering guarantees"],
        "options_hi": ["एटॉमिक मिनिमम ऑपरेशन के लिए सबसे मजबूत ऑर्डरिंग", "वीक कंसिस्टेंसी", "केवल एक्वायर-रिलीज", "कोई ऑर्डरिंग गारंटी नहीं"],
        "answer_en": "Strongest ordering for atomic minimum operation",
        "answer_hi": "एटॉमिक मिनिमम ऑपरेशन के लिए सबसे मजबूत ऑर्डरिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of the `core::intrinsics::atomic_fence` intrinsic?",
        "question_hi": "`core::intrinsics::atomic_fence` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Compiler intrinsic for memory fences", "CPU fence instruction", "Memory barrier", "Thread synchronization"],
        "options_hi": ["मेमोरी फेंसेस के लिए कंपाइलर इंट्रिन्सिक", "CPU फेंस इंस्ट्रक्शन", "मेमोरी बैरियर", "थ्रेड सिंक्रोनाइज़ेशन"],
        "answer_en": "Compiler intrinsic for memory fences",
        "answer_hi": "मेमोरी फेंसेस के लिए कंपाइलर इंट्रिन्सिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What does the `#[cfg(not(no_std_alloc))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_std_alloc))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Standard library allocator types", "Disable allocation", "Enable core alloc only", "Platform allocation"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी अलोकेटर टाइप्स", "अलोकेशन डिसेबल करना", "केवल कोर अलोक एनेबल करना", "प्लेटफॉर्म अलोकेशन"],
        "answer_en": "Standard library allocator types",
        "answer_hi": "स्टैंडर्ड लाइब्रेरी अलोकेटर टाइप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of the `core::mem::MaybeUninit::assume_init_read` method?",
        "question_hi": "`core::mem::MaybeUninit::assume_init_read` मेथड का उद्देश्य क्या है?",
        "options_en": ["Assume initialized and read without moving", "Read and move", "Check then read", "Safe read operation"],
        "options_hi": ["इनिशियलाइज्ड मानना और मूव किए बिना रीड करना", "रीड और मूव करना", "चेक करके रीड करना", "सेफ रीड ऑपरेशन"],
        "answer_en": "Assume initialized and read without moving",
        "answer_hi": "इनिशियलाइज्ड मानना और मूव किए बिना रीड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What does the `core::sync::atomic::AtomicBool::as_slice` method provide?",
        "question_hi": "`core::sync::atomic::AtomicBool::as_slice` मेथड क्या प्रदान करता है?",
        "options_en": ["Slice view of AtomicBool array", "Convert to bool slice", "Atomic slice access", "Array view"],
        "options_hi": ["AtomicBool ऐरे का स्लाइस व्यू", "bool स्लाइस में कन्वर्ट करना", "एटॉमिक स्लाइस एक्सेस", "ऐरे व्यू"],
        "answer_en": "Slice view of AtomicBool array",
        "answer_hi": "AtomicBool ऐरे का स्लाइस व्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of the `#[cfg(not(no_std_collections))]` attribute?",
        "question_hi": "`#[cfg(not(no_std_collections))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Enable standard collection types", "Disable collections", "Enable core collections", "Platform collections"],
        "options_hi": ["स्टैंडर्ड कलेक्शन टाइप्स एनेबल करना", "कलेक्शन्स डिसेबल करना", "कोर कलेक्शन्स एनेबल करना", "प्लेटफॉर्म कलेक्शन्स"],
        "answer_en": "Enable standard collection types",
        "answer_hi": "स्टैंडर्ड कलेक्शन टाइप्स एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What does the `core::intrinsics::atomic_load_acquire` intrinsic guarantee?",
        "question_hi": "`core::intrinsics::atomic_load_acquire` इंट्रिन्सिक क्या गारंटी देता है?",
        "options_en": ["Atomic load with acquire semantics", "Relaxed load", "Sequential load", "Release semantics"],
        "options_hi": ["एक्वायर सेमैंटिक्स के साथ एटॉमिक लोड", "रिलैक्स्ड लोड", "सीक्वेंशियल लोड", "रिलीज सेमैंटिक्स"],
        "answer_en": "Atomic load with acquire semantics",
        "answer_hi": "एक्वायर सेमैंटिक्स के साथ एटॉमिक लोड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of the `core::mem::MaybeUninit::write_slice_copied` method?",
        "question_hi": "`core::mem::MaybeUninit::write_slice_copied` मेथड का उद्देश्य क्या है?",
        "options_en": ["Initialize slice by copying elements", "Write without copying", "Clone elements", "Initialize with moves"],
        "options_hi": ["एलिमेंट्स को कॉपी करके स्लाइस इनिशियलाइज़ करना", "कॉपीिंग के बिना राइट करना", "एलिमेंट्स क्लोन करना", "मूव्स के साथ इनिशियलाइज़ करना"],
        "answer_en": "Initialize slice by copying elements",
        "answer_hi": "एलिमेंट्स को कॉपी करके स्लाइस इनिशियलाइज़ करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What does the `#[cfg(not(no_std_ffi))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_std_ffi))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Standard library FFI types", "Disable FFI", "Enable core FFI", "Platform FFI"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी FFI टाइप्स", "FFI डिसेबल करना", "कोर FFI एनेबल करना", "प्लेटफॉर्म FFI"],
        "answer_en": "Standard library FFI types",
        "answer_hi": "स्टैंडर्ड लाइब्रेरी FFI टाइप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicIsize::fetch_update` with fallible closure?",
        "question_hi": "फॉलिबल क्लोजर के साथ `core::sync::atomic::AtomicIsize::fetch_update` का उद्देश्य क्या है?",
        "options_en": ["Atomic update that can fail and retry", "Infallible update", "Simple update", "Update without retry"],
        "options_hi": ["एटॉमिक अपडेट जो फेल हो सकता है और रिट्राई कर सकता है", "इनफॉलिबल अपडेट", "सिंपल अपडेट", "रिट्राई के बिना अपडेट"],
        "answer_en": "Atomic update that can fail and retry",
        "answer_hi": "एटॉमिक अपडेट जो फेल हो सकता है और रिट्राई कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does the `core::intrinsics::atomic_store_release` intrinsic guarantee?",
        "question_hi": "`core::intrinsics::atomic_store_release` इंट्रिन्सिक क्या गारंटी देता है?",
        "options_en": ["Atomic store with release semantics", "Acquire store", "Relaxed store", "Sequential store"],
        "options_hi": ["रिलीज सेमैंटिक्स के साथ एटॉमिक स्टोर", "एक्वायर स्टोर", "रिलैक्स्ड स्टोर", "सीक्वेंशियल स्टोर"],
        "answer_en": "Atomic store with release semantics",
        "answer_hi": "रिलीज सेमैंटिक्स के साथ एटॉमिक स्टोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of the `#[cfg(not(no_std_process))]` attribute?",
        "question_hi": "`#[cfg(not(no_std_process))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Enable standard process types", "Disable process operations", "Enable core process", "Platform process support"],
        "options_hi": ["स्टैंडर्ड प्रोसेस टाइप्स एनेबल करना", "प्रोसेस ऑपरेशन्स डिसेबल करना", "कोर प्रोसेस एनेबल करना", "प्लेटफॉर्म प्रोसेस सपोर्ट"],
        "answer_en": "Enable standard process types",
        "answer_hi": "स्टैंडर्ड प्रोसेस टाइप्स एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What does the `core::mem::MaybeUninit::slice_from_raw_parts` method create?",
        "question_hi": "`core::mem::MaybeUninit::slice_from_raw_parts` मेथड क्या बनाता है?",
        "options_en": ["Slice of MaybeUninit from raw parts", "Initialized slice", "Safe slice", "Raw slice pointer"],
        "options_hi": ["रॉ पार्ट्स से MaybeUninit का स्लाइस", "इनिशियलाइज्ड स्लाइस", "सेफ स्लाइस", "रॉ स्लाइस पॉइंटर"],
        "answer_en": "Slice of MaybeUninit from raw parts",
        "answer_hi": "रॉ पार्ट्स से MaybeUninit का स्लाइस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicU32::as_mut_slice` method?",
        "question_hi": "`core::sync::atomic::AtomicU32::as_mut_slice` मेथड का उद्देश्य क्या है?",
        "options_en": ["Mutable slice view of AtomicU32 array", "Convert to u32 slice", "Atomic slice access", "Array mutation"],
        "options_hi": ["AtomicU32 ऐरे का म्यूटेबल स्लाइस व्यू", "u32 स्लाइस में कन्वर्ट करना", "एटॉमिक स्लाइस एक्सेस", "ऐरे म्यूटेशन"],
        "answer_en": "Mutable slice view of AtomicU32 array",
        "answer_hi": "AtomicU32 ऐरे का म्यूटेबल स्लाइस व्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does the `#[cfg(not(no_std_env))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_std_env))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Standard library environment types", "Disable environment access", "Enable core environment", "Platform environment"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी एनवायरनमेंट टाइप्स", "एनवायरनमेंट एक्सेस डिसेबल करना", "कोर एनवायरनमेंट एनेबल करना", "प्लेटफॉर्म एनवायरनमेंट"],
        "answer_en": "Standard library environment types",
        "answer_hi": "स्टैंडर्ड लाइब्रेरी एनवायरनमेंट टाइप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of the `core::intrinsics::atomic_umin` intrinsic?",
        "question_hi": "`core::intrinsics::atomic_umin` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Atomic unsigned minimum operation", "Atomic minimum", "Unsigned comparison", "Min operation"],
        "options_hi": ["एटॉमिक अनसाइन्ड मिनिमम ऑपरेशन", "एटॉमिक मिनिमम", "अनसाइन्ड कम्पेयरिजन", "मिन ऑपरेशन"],
        "answer_en": "Atomic unsigned minimum operation",
        "answer_hi": "एटॉमिक अनसाइन्ड मिनिमम ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What does the `core::mem::MaybeUninit::slice_assume_init_ref` method return?",
        "question_hi": "`core::mem::MaybeUninit::slice_assume_init_ref` मेथड क्या रिटर्न करता है?",
        "options_en": ["Shared reference to initialized slice", "Mutable reference", "Raw pointer", "Owned slice"],
        "options_hi": ["इनिशियलाइज्ड स्लाइस का शेयर्ड रेफरेंस", "म्यूटेबल रेफरेंस", "रॉ पॉइंटर", "ओन्ड स्लाइस"],
        "answer_en": "Shared reference to initialized slice",
        "answer_hi": "इनिशियलाइज्ड स्लाइस का शेयर्ड रेफरेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicBool::from_mut` method?",
        "question_hi": "`core::sync::atomic::AtomicBool::from_mut` मेथड का उद्देश्य क्या है?",
        "options_en": ["Create AtomicBool from mutable bool reference", "Convert from bool", "Get atomic from mutable", "Mutable atomic creation"],
        "options_hi": ["म्यूटेबल bool रेफरेंस से AtomicBool बनाना", "bool से कन्वर्ट करना", "म्यूटेबल से एटॉमिक प्राप्त करना", "म्यूटेबल एटॉमिक क्रिएशन"],
        "answer_en": "Create AtomicBool from mutable bool reference",
        "answer_hi": "म्यूटेबल bool रेफरेंस से AtomicBool बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What does the `#[cfg(not(no_std_thread))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_std_thread))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Standard library thread types", "Disable threading", "Enable core thread", "Platform threading"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी थ्रेड टाइप्स", "थ्रेडिंग डिसेबल करना", "कोर थ्रेड एनेबल करना", "प्लेटफॉर्म थ्रेडिंग"],
        "answer_en": "Standard library thread types",
        "answer_hi": "स्टैंडर्ड लाइब्रेरी थ्रेड टाइप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of the `core::intrinsics::atomic_cxchg` intrinsic?",
        "question_hi": "`core::intrinsics::atomic_cxchg` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Atomic compare-and-exchange operation", "Atomic exchange", "Compare values", "Exchange with compare"],
        "options_hi": ["एटॉमिक कम्पेयर-एंड-एक्सचेंज ऑपरेशन", "एटॉमिक एक्सचेंज", "वैल्यूज की तुलना करना", "कम्पेयर के साथ एक्सचेंज"],
        "answer_en": "Atomic compare-and-exchange operation",
        "answer_hi": "एटॉमिक कम्पेयर-एंड-एक्सचेंज ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What does the `core::mem::MaybeUninit::slice_assume_init_mut` method provide?",
        "question_hi": "`core::mem::MaybeUninit::slice_assume_init_mut` मेथड क्या प्रदान करता है?",
        "options_en": ["Mutable reference to initialized slice", "Shared reference", "Raw pointer", "Owned mutable slice"],
        "options_hi": ["इनिशियलाइज्ड स्लाइस का म्यूटेबल रेफरेंस", "शेयर्ड रेफरेंस", "रॉ पॉइंटर", "ओन्ड म्यूटेबल स्लाइस"],
        "answer_en": "Mutable reference to initialized slice",
        "answer_hi": "इनिशियलाइज्ड स्लाइस का म्यूटेबल रेफरेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicI16::as_ptr` method?",
        "question_hi": "`core::sync::atomic::AtomicI16::as_ptr` मेथड का उद्देश्य क्या है?",
        "options_en": ["Get raw pointer to underlying i16", "Convert to pointer", "Get atomic address", "Pointer access"],
        "options_hi": ["अंडरलाइंग i16 का रॉ पॉइंटर प्राप्त करना", "पॉइंटर में कन्वर्ट करना", "एटॉमिक एड्रेस प्राप्त करना", "पॉइंटर एक्सेस"],
        "answer_en": "Get raw pointer to underlying i16",
        "answer_hi": "अंडरलाइंग i16 का रॉ पॉइंटर प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What does the `#[cfg(not(no_std_sync))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_std_sync))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Standard library synchronization types", "Disable synchronization", "Enable core sync", "Platform synchronization"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी सिंक्रोनाइज़ेशन टाइप्स", "सिंक्रोनाइज़ेशन डिसेबल करना", "कोर सिंक एनेबल करना", "प्लेटफॉर्म सिंक्रोनाइज़ेशन"],
        "answer_en": "Standard library synchronization types",
        "answer_hi": "स्टैंडर्ड लाइब्रेरी सिंक्रोनाइज़ेशन टाइप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of the `core::intrinsics::atomic_xchg` intrinsic?",
        "question_hi": "`core::intrinsics::atomic_xchg` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Atomic exchange operation", "Atomic swap", "Exchange values", "Swap operation"],
        "options_hi": ["एटॉमिक एक्सचेंज ऑपरेशन", "एटॉमिक स्वैप", "वैल्यूज एक्सचेंज करना", "स्वैप ऑपरेशन"],
        "answer_en": "Atomic exchange operation",
        "answer_hi": "एटॉमिक एक्सचेंज ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What does the `core::mem::MaybeUninit::write_slice` method initialize?",
        "question_hi": "`core::mem::MaybeUninit::write_slice` मेथड क्या इनिशियलाइज़ करता है?",
        "options_en": ["Slice of MaybeUninit from slice of values", "Single value", "Array elements", "Raw memory"],
        "options_hi": ["वैल्यूज के स्लाइस से MaybeUninit का स्लाइस", "सिंगल वैल्यू", "ऐरे एलिमेंट्स", "रॉ मेमोरी"],
        "answer_en": "Slice of MaybeUninit from slice of values",
        "answer_hi": "वैल्यूज के स्लाइस से MaybeUninit का स्लाइस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicU8::from_mut_slice` method?",
        "question_hi": "`core::sync::atomic::AtomicU8::from_mut_slice` मेथड का उद्देश्य क्या है?",
        "options_en": ["Create slice of AtomicU8 from mutable u8 slice", "Convert from slice", "Get atomic slice", "Mutable atomic conversion"],
        "options_hi": ["म्यूटेबल u8 स्लाइस से AtomicU8 का स्लाइस बनाना", "स्लाइस से कन्वर्ट करना", "एटॉमिक स्लाइस प्राप्त करना", "म्यूटेबल एटॉमिक कन्वर्जन"],
        "answer_en": "Create slice of AtomicU8 from mutable u8 slice",
        "answer_hi": "म्यूटेबल u8 स्लाइस से AtomicU8 का स्लाइस बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What does the `#[cfg(not(no_std_path))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_std_path))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Standard library path types", "Disable path operations", "Enable core path", "Platform path support"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी पाथ टाइप्स", "पाथ ऑपरेशन्स डिसेबल करना", "कोर पाथ एनेबल करना", "प्लेटफॉर्म पाथ सपोर्ट"],
        "answer_en": "Standard library path types",
        "answer_hi": "स्टैंडर्ड लाइब्रेरी पाथ टाइप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of the `core::intrinsics::atomic_and` intrinsic?",
        "question_hi": "`core::intrinsics::atomic_and` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Atomic bitwise AND operation", "Atomic AND", "Bitwise operation", "Logical AND"],
        "options_hi": ["एटॉमिक बिटवाइज AND ऑपरेशन", "एटॉमिक AND", "बिटवाइज ऑपरेशन", "लॉजिकल AND"],
        "answer_en": "Atomic bitwise AND operation",
        "answer_hi": "एटॉमिक बिटवाइज AND ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What does the `core::mem::MaybeUninit::array_assume_init` method assume?",
        "question_hi": "`core::mem::MaybeUninit::array_assume_init` मेथड क्या मानता है?",
        "options_en": ["Entire array is fully initialized", "Array is partially initialized", "No initialization", "Safe initialization"],
        "options_hi": ["पूरा ऐरे पूरी तरह से इनिशियलाइज्ड है", "ऐरे आंशिक रूप से इनिशियलाइज्ड है", "कोई इनिशियलाइज़ेशन नहीं", "सेफ इनिशियलाइज़ेशन"],
        "answer_en": "Entire array is fully initialized",
        "answer_hi": "पूरा ऐरे पूरी तरह से इनिशियलाइज्ड है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicI64::as_mut` method?",
        "question_hi": "`core::sync::atomic::AtomicI64::as_mut` मेथड का उद्देश्य क्या है?",
        "options_en": ["Get mutable reference to underlying i64", "Convert to mutable", "Get atomic mutable", "Mutable access"],
        "options_hi": ["अंडरलाइंग i64 का म्यूटेबल रेफरेंस प्राप्त करना", "म्यूटेबल में कन्वर्ट करना", "एटॉमिक म्यूटेबल प्राप्त करना", "म्यूटेबल एक्सेस"],
        "answer_en": "Get mutable reference to underlying i64",
        "answer_hi": "अंडरलाइंग i64 का म्यूटेबल रेफरेंस प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What does the `#[cfg(not(no_std_fs))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_std_fs))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Standard library filesystem types", "Disable filesystem", "Enable core filesystem", "Platform filesystem"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी फाइलसिस्टम टाइप्स", "फाइलसिस्टम डिसेबल करना", "कोर फाइलसिस्टम एनेबल करना", "प्लेटफॉर्म फाइलसिस्टम"],
        "answer_en": "Standard library filesystem types",
        "answer_hi": "स्टैंडर्ड लाइब्रेरी फाइलसिस्टम टाइप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of the `core::intrinsics::atomic_or` intrinsic?",
        "question_hi": "`core::intrinsics::atomic_or` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Atomic bitwise OR operation", "Atomic OR", "Bitwise operation", "Logical OR"],
        "options_hi": ["एटॉमिक बिटवाइज OR ऑपरेशन", "एटॉमिक OR", "बिटवाइज ऑपरेशन", "लॉजिकल OR"],
        "answer_en": "Atomic bitwise OR operation",
        "answer_hi": "एटॉमिक बिटवाइज OR ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What does the `core::mem::MaybeUninit::slice_from_raw_parts_mut` method create?",
        "question_hi": "`core::mem::MaybeUninit::slice_from_raw_parts_mut` मेथड क्या बनाता है?",
        "options_en": ["Mutable slice of MaybeUninit from raw parts", "Immutable slice", "Safe slice", "Raw mutable slice"],
        "options_hi": ["रॉ पार्ट्स से MaybeUninit का म्यूटेबल स्लाइस", "इम्यूटेबल स्लाइस", "सेफ स्लाइस", "रॉ म्यूटेबल स्लाइस"],
        "answer_en": "Mutable slice of MaybeUninit from raw parts",
        "answer_hi": "रॉ पार्ट्स से MaybeUninit का म्यूटेबल स्लाइस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicUsize::as_slice` method?",
        "question_hi": "`core::sync::atomic::AtomicUsize::as_slice` मेथड का उद्देश्य क्या है?",
        "options_en": ["Slice view of AtomicUsize array", "Convert to usize slice", "Atomic slice access", "Array view"],
        "options_hi": ["AtomicUsize ऐरे का स्लाइस व्यू", "usize स्लाइस में कन्वर्ट करना", "एटॉमिक स्लाइस एक्सेस", "ऐरे व्यू"],
        "answer_en": "Slice view of AtomicUsize array",
        "answer_hi": "AtomicUsize ऐरे का स्लाइस व्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What does the `#[cfg(not(no_std_os))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_std_os))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Standard library OS-specific types", "Disable OS features", "Enable core OS", "Platform OS"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी OS-स्पेसिफिक टाइप्स", "OS फीचर्स डिसेबल करना", "कोर OS एनेबल करना", "प्लेटफॉर्म OS"],
        "answer_en": "Standard library OS-specific types",
        "answer_hi": "स्टैंडर्ड लाइब्रेरी OS-स्पेसिफिक टाइप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of the `core::intrinsics::atomic_xor` intrinsic?",
        "question_hi": "`core::intrinsics::atomic_xor` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Atomic bitwise XOR operation", "Atomic XOR", "Bitwise operation", "Logical XOR"],
        "options_hi": ["एटॉमिक बिटवाइज XOR ऑपरेशन", "एटॉमिक XOR", "बिटवाइज ऑपरेशन", "लॉजिकल XOR"],
        "answer_en": "Atomic bitwise XOR operation",
        "answer_hi": "एटॉमिक बिटवाइज XOR ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does the `core::mem::MaybeUninit::assume_init_drop` method do?",
        "question_hi": "`core::mem::MaybeUninit::assume_init_drop` मेथड क्या करता है?",
        "options_en": ["Assume initialized and run destructor", "Drop without assumption", "Safe drop", "No operation"],
        "options_hi": ["इनिशियलाइज्ड मानना और डिस्ट्रक्टर रन करना", "अनुमान के बिना ड्रॉप करना", "सेफ ड्रॉप", "कोई ऑपरेशन नहीं"],
        "answer_en": "Assume initialized and run destructor",
        "answer_hi": "इनिशियलाइज्ड मानना और डिस्ट्रक्टर रन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicBool::as_mut_slice` method?",
        "question_hi": "`core::sync::atomic::AtomicBool::as_mut_slice` मेथड का उद्देश्य क्या है?",
        "options_en": ["Mutable slice view of AtomicBool array", "Convert to bool slice", "Atomic slice mutation", "Array mutation"],
        "options_hi": ["AtomicBool ऐरे का म्यूटेबल स्लाइस व्यू", "bool स्लाइस में कन्वर्ट करना", "एटॉमिक स्लाइस म्यूटेशन", "ऐरे म्यूटेशन"],
        "answer_en": "Mutable slice view of AtomicBool array",
        "answer_hi": "AtomicBool ऐरे का म्यूटेबल स्लाइस व्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What does the `#[cfg(not(no_std_macros))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_std_macros))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Standard library macros", "Disable macros", "Enable core macros", "Platform macros"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी मैक्रोस", "मैक्रोस डिसेबल करना", "कोर मैक्रोस एनेबल करना", "प्लेटफॉर्म मैक्रोस"],
        "answer_en": "Standard library macros",
        "answer_hi": "स्टैंडर्ड लाइब्रेरी मैक्रोस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of the `core::intrinsics::atomic_nand` intrinsic?",
        "question_hi": "`core::intrinsics::atomic_nand` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Atomic bitwise NAND operation", "Atomic NAND", "Bitwise operation", "Logical NAND"],
        "options_hi": ["एटॉमिक बिटवाइज NAND ऑपरेशन", "एटॉमिक NAND", "बिटवाइज ऑपरेशन", "लॉजिकल NAND"],
        "answer_en": "Atomic bitwise NAND operation",
        "answer_hi": "एटॉमिक बिटवाइज NAND ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What does the `core::mem::MaybeUninit::slice_assume_init_mut` method assume?",
        "question_hi": "`core::mem::MaybeUninit::slice_assume_init_mut` मेथड क्या मानता है?",
        "options_en": ["Entire slice is fully initialized", "Slice is partially initialized", "No initialization", "Safe initialization"],
        "options_hi": ["पूरा स्लाइस पूरी तरह से इनिशियलाइज्ड है", "स्लाइस आंशिक रूप से इनिशियलाइज्ड है", "कोई इनिशियलाइज़ेशन नहीं", "सेफ इनिशियलाइज़ेशन"],
        "answer_en": "Entire slice is fully initialized",
        "answer_hi": "पूरा स्लाइस पूरी तरह से इनिशियलाइज्ड है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicI8::as_mut_slice` method?",
        "question_hi": "`core::sync::atomic::AtomicI8::as_mut_slice` मेथड का उद्देश्य क्या है?",
        "options_en": ["Mutable slice view of AtomicI8 array", "Convert to i8 slice", "Atomic slice mutation", "Array mutation"],
        "options_hi": ["AtomicI8 ऐरे का म्यूटेबल स्लाइस व्यू", "i8 स्लाइस में कन्वर्ट करना", "एटॉमिक स्लाइस म्यूटेशन", "ऐरे म्यूटेशन"],
        "answer_en": "Mutable slice view of AtomicI8 array",
        "answer_hi": "AtomicI8 ऐरे का म्यूटेबल स्लाइस व्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What does the `#[cfg(not(no_std_panic))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_std_panic))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Standard library panic handling", "Disable panic", "Enable core panic", "Platform panic"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी पैनिक हैंडलिंग", "पैनिक डिसेबल करना", "कोर पैनिक एनेबल करना", "प्लेटफॉर्म पैनिक"],
        "answer_en": "Standard library panic handling",
        "answer_hi": "स्टैंडर्ड लाइब्रेरी पैनिक हैंडलिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of the `core::intrinsics::atomic_max` intrinsic?",
        "question_hi": "`core::intrinsics::atomic_max` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Atomic signed maximum operation", "Atomic maximum", "Signed comparison", "Max operation"],
        "options_hi": ["एटॉमिक साइन्ड मैक्सिमम ऑपरेशन", "एटॉमिक मैक्सिमम", "साइन्ड कम्पेयरिजन", "मैक्स ऑपरेशन"],
        "answer_en": "Atomic signed maximum operation",
        "answer_hi": "एटॉमिक साइन्ड मैक्सिमम ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What does the `core::mem::MaybeUninit::write_slice_cloned` method require?",
        "question_hi": "`core::mem::MaybeUninit::write_slice_cloned` मेथड को क्या चाहिए?",
        "options_en": ["Elements implement Clone trait", "Elements are Copy", "No requirements", "Elements are Default"],
        "options_hi": ["एलिमेंट्स Clone ट्रेट इम्प्लीमेंट करते हैं", "एलिमेंट्स Copy हैं", "कोई आवश्यकता नहीं", "एलिमेंट्स Default हैं"],
        "answer_en": "Elements implement Clone trait",
        "answer_hi": "एलिमेंट्स Clone ट्रेट इम्प्लीमेंट करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicU16::as_ptr` method?",
        "question_hi": "`core::sync::atomic::AtomicU16::as_ptr` मेथड का उद्देश्य क्या है?",
        "options_en": ["Get raw pointer to underlying u16", "Convert to pointer", "Get atomic address", "Pointer access"],
        "options_hi": ["अंडरलाइंग u16 का रॉ पॉइंटर प्राप्त करना", "पॉइंटर में कन्वर्ट करना", "एटॉमिक एड्रेस प्राप्त करना", "पॉइंटर एक्सेस"],
        "answer_en": "Get raw pointer to underlying u16",
        "answer_hi": "अंडरलाइंग u16 का रॉ पॉइंटर प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What does the `#[cfg(not(no_std_alloc_system))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_std_alloc_system))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Standard library system allocator", "Disable system allocator", "Enable custom allocator", "Platform allocator"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी सिस्टम अलोकेटर", "सिस्टम अलोकेटर डिसेबल करना", "कस्टम अलोकेटर एनेबल करना", "प्लेटफॉर्म अलोकेटर"],
        "answer_en": "Standard library system allocator",
        "answer_hi": "स्टैंडर्ड लाइब्रेरी सिस्टम अलोकेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of the `core::intrinsics::atomic_min` intrinsic?",
        "question_hi": "`core::intrinsics::atomic_min` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Atomic signed minimum operation", "Atomic minimum", "Signed comparison", "Min operation"],
        "options_hi": ["एटॉमिक साइन्ड मिनिमम ऑपरेशन", "एटॉमिक मिनिमम", "साइन्ड कम्पेयरिजन", "मिन ऑपरेशन"],
        "answer_en": "Atomic signed minimum operation",
        "answer_hi": "एटॉमिक साइन्ड मिनिमम ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What does the `core::mem::MaybeUninit::write_slice_copied` method require?",
        "question_hi": "`core::mem::MaybeUninit::write_slice_copied` मेथड को क्या चाहिए?",
        "options_en": ["Elements implement Copy trait", "Elements are Clone", "No requirements", "Elements are Default"],
        "options_hi": ["एलिमेंट्स Copy ट्रेट इम्प्लीमेंट करते हैं", "एलिमेंट्स Clone हैं", "कोई आवश्यकता नहीं", "एलिमेंट्स Default हैं"],
        "answer_en": "Elements implement Copy trait",
        "answer_hi": "एलिमेंट्स Copy ट्रेट इम्प्लीमेंट करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicI32::as_mut_slice` method?",
        "question_hi": "`core::sync::atomic::AtomicI32::as_mut_slice` मेथड का उद्देश्य क्या है?",
        "options_en": ["Mutable slice view of AtomicI32 array", "Convert to i32 slice", "Atomic slice mutation", "Array mutation"],
        "options_hi": ["AtomicI32 ऐरे का म्यूटेबल स्लाइस व्यू", "i32 स्लाइस में कन्वर्ट करना", "एटॉमिक स्लाइस म्यूटेशन", "ऐरे म्यूटेशन"],
        "answer_en": "Mutable slice view of AtomicI32 array",
        "answer_hi": "AtomicI32 ऐरे का म्यूटेबल स्लाइस व्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What does the `#[cfg(not(no_std_alloc_global))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_std_alloc_global))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Standard library global allocator", "Disable global allocator", "Enable custom allocator", "Platform allocator"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी ग्लोबल अलोकेटर", "ग्लोबल अलोकेटर डिसेबल करना", "कस्टम अलोकेटर एनेबल करना", "प्लेटफॉर्म अलोकेटर"],
        "answer_en": "Standard library global allocator",
        "answer_hi": "स्टैंडर्ड लाइब्रेरी ग्लोबल अलोकेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of the `core::intrinsics::atomic_load_relaxed` intrinsic?",
        "question_hi": "`core::intrinsics::atomic_load_relaxed` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Atomic load with relaxed ordering", "Relaxed load", "No ordering guarantees", "Weak load"],
        "options_hi": ["रिलैक्स्ड ऑर्डरिंग के साथ एटॉमिक लोड", "रिलैक्स्ड लोड", "कोई ऑर्डरिंग गारंटी नहीं", "वीक लोड"],
        "answer_en": "Atomic load with relaxed ordering",
        "answer_hi": "रिलैक्स्ड ऑर्डरिंग के साथ एटॉमिक लोड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What does the `core::mem::MaybeUninit::array_from_fn` method create?",
        "question_hi": "`core::mem::MaybeUninit::array_from_fn` मेथड क्या बनाता है?",
        "options_en": ["Array of MaybeUninit using initialization function", "Initialized array", "Dynamic array", "Raw array"],
        "options_hi": ["इनिशियलाइज़ेशन फंक्शन का उपयोग करके MaybeUninit का ऐरे", "इनिशियलाइज्ड ऐरे", "डायनामिक ऐरे", "रॉ ऐरे"],
        "answer_en": "Array of MaybeUninit using initialization function",
        "answer_hi": "इनिशियलाइज़ेशन फंक्शन का उपयोग करके MaybeUninit का ऐरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicU64::as_ptr` method?",
        "question_hi": "`core::sync::atomic::AtomicU64::as_ptr` मेथड का उद्देश्य क्या है?",
        "options_en": ["Get raw pointer to underlying u64", "Convert to pointer", "Get atomic address", "Pointer access"],
        "options_hi": ["अंडरलाइंग u64 का रॉ पॉइंटर प्राप्त करना", "पॉइंटर में कन्वर्ट करना", "एटॉमिक एड्रेस प्राप्त करना", "पॉइंटर एक्सेस"],
        "answer_en": "Get raw pointer to underlying u64",
        "answer_hi": "अंडरलाइंग u64 का रॉ पॉइंटर प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What does the `#[cfg(not(no_std_alloc_default))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_std_alloc_default))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Standard library default allocator", "Disable default allocator", "Enable custom allocator", "Platform allocator"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी डिफॉल्ट अलोकेटर", "डिफॉल्ट अलोकेटर डिसेबल करना", "कस्टम अलोकेटर एनेबल करना", "प्लेटफॉर्म अलोकेटर"],
        "answer_en": "Standard library default allocator",
        "answer_hi": "स्टैंडर्ड लाइब्रेरी डिफॉल्ट अलोकेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of the `core::intrinsics::atomic_store_relaxed` intrinsic?",
        "question_hi": "`core::intrinsics::atomic_store_relaxed` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Atomic store with relaxed ordering", "Relaxed store", "No ordering guarantees", "Weak store"],
        "options_hi": ["रिलैक्स्ड ऑर्डरिंग के साथ एटॉमिक स्टोर", "रिलैक्स्ड स्टोर", "कोई ऑर्डरिंग गारंटी नहीं", "वीक स्टोर"],
        "answer_en": "Atomic store with relaxed ordering",
        "answer_hi": "रिलैक्स्ड ऑर्डरिंग के साथ एटॉमिक स्टोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What does the `core::mem::MaybeUninit::slice_assume_init_ref` method assume?",
        "question_hi": "`core::mem::MaybeUninit::slice_assume_init_ref` मेथड क्या मानता है?",
        "options_en": ["Entire slice is fully initialized", "Slice is partially initialized", "No initialization", "Safe initialization"],
        "options_hi": ["पूरा स्लाइस पूरी तरह से इनिशियलाइज्ड है", "स्लाइस आंशिक रूप से इनिशियलाइज्ड है", "कोई इनिशियलाइज़ेशन नहीं", "सेफ इनिशियलाइज़ेशन"],
        "answer_en": "Entire slice is fully initialized",
        "answer_hi": "पूरा स्लाइस पूरी तरह से इनिशियलाइज्ड है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicIsize::as_slice` method?",
        "question_hi": "`core::sync::atomic::AtomicIsize::as_slice` मेथड का उद्देश्य क्या है?",
        "options_en": ["Slice view of AtomicIsize array", "Convert to isize slice", "Atomic slice access", "Array view"],
        "options_hi": ["AtomicIsize ऐरे का स्लाइस व्यू", "isize स्लाइस में कन्वर्ट करना", "एटॉमिक स्लाइस एक्सेस", "ऐरे व्यू"],
        "answer_en": "Slice view of AtomicIsize array",
        "answer_hi": "AtomicIsize ऐरे का स्लाइस व्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What does the `#[cfg(not(no_std_alloc_boxed))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_std_alloc_boxed))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Standard library Box type", "Disable Box", "Enable custom Box", "Platform Box"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी Box टाइप", "Box डिसेबल करना", "कस्टम Box एनेबल करना", "प्लेटफॉर्म Box"],
        "answer_en": "Standard library Box type",
        "answer_hi": "स्टैंडर्ड लाइब्रेरी Box टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of the `core::intrinsics::atomic_fence_acquire` intrinsic?",
        "question_hi": "`core::intrinsics::atomic_fence_acquire` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Memory fence with acquire semantics", "Acquire fence", "Load ordering", "Read barrier"],
        "options_hi": ["एक्वायर सेमैंटिक्स के साथ मेमोरी फेंस", "एक्वायर फेंस", "लोड ऑर्डरिंग", "रीड बैरियर"],
        "answer_en": "Memory fence with acquire semantics",
        "answer_hi": "एक्वायर सेमैंटिक्स के साथ मेमोरी फेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What does the `core::mem::MaybeUninit::write` method return?",
        "question_hi": "`core::mem::MaybeUninit::write` मेथड क्या रिटर्न करता है?",
        "options_en": ["Mutable reference to initialized value", "Owned value", "Shared reference", "No return value"],
        "options_hi": ["इनिशियलाइज्ड वैल्यू का म्यूटेबल रेफरेंस", "ओन्ड वैल्यू", "शेयर्ड रेफरेंस", "कोई रिटर्न वैल्यू नहीं"],
        "answer_en": "Mutable reference to initialized value",
        "answer_hi": "इनिशियलाइज्ड वैल्यू का म्यूटेबल रेफरेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicPtr::as_mut` method?",
        "question_hi": "`core::sync::atomic::AtomicPtr::as_mut` मेथड का उद्देश्य क्या है?",
        "options_en": ["Get mutable reference to underlying pointer", "Convert to mutable", "Get atomic mutable", "Mutable access"],
        "options_hi": ["अंडरलाइंग पॉइंटर का म्यूटेबल रेफरेंस प्राप्त करना", "म्यूटेबल में कन्वर्ट करना", "एटॉमिक म्यूटेबल प्राप्त करना", "म्यूटेबल एक्सेस"],
        "answer_en": "Get mutable reference to underlying pointer",
        "answer_hi": "अंडरलाइंग पॉइंटर का म्यूटेबल रेफरेंस प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What does the `#[cfg(not(no_std_alloc_rc))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_std_alloc_rc))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Standard library Rc type", "Disable Rc", "Enable custom Rc", "Platform Rc"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी Rc टाइप", "Rc डिसेबल करना", "कस्टम Rc एनेबल करना", "प्लेटफॉर्म Rc"],
        "answer_en": "Standard library Rc type",
        "answer_hi": "स्टैंडर्ड लाइब्रेरी Rc टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of the `core::intrinsics::atomic_fence_release` intrinsic?",
        "question_hi": "`core::intrinsics::atomic_fence_release` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Memory fence with release semantics", "Release fence", "Store ordering", "Write barrier"],
        "options_hi": ["रिलीज सेमैंटिक्स के साथ मेमोरी फेंस", "रिलीज फेंस", "स्टोर ऑर्डरिंग", "राइट बैरियर"],
        "answer_en": "Memory fence with release semantics",
        "answer_hi": "रिलीज सेमैंटिक्स के साथ मेमोरी फेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What does the `core::mem::MaybeUninit::assume_init_read` method do differently from `assume_init`?",
        "question_hi": "`core::mem::MaybeUninit::assume_init_read` मेथड `assume_init` से अलग क्या करता है?",
        "options_en": ["Reads without moving the value", "Moves the value", "Copies the value", "Same as assume_init"],
        "options_hi": ["वैल्यू को मूव किए बिना रीड करता है", "वैल्यू को मूव करता है", "वैल्यू को कॉपी करता है", "assume_init के समान"],
        "answer_en": "Reads without moving the value",
        "answer_hi": "वैल्यू को मूव किए बिना रीड करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicBool::into_inner` method?",
        "question_hi": "`core::sync::atomic::AtomicBool::into_inner` मेथड का उद्देश्य क्या है?",
        "options_en": ["Consume AtomicBool and return the inner bool", "Get inner value", "Convert to regular bool", "Extract atomic value"],
        "options_hi": ["AtomicBool को कंज्यूम करना और इनर bool रिटर्न करना", "इनर वैल्यू प्राप्त करना", "रेगुलर bool में कन्वर्ट करना", "एटॉमिक वैल्यू एक्सट्रैक्ट करना"],
        "answer_en": "Consume AtomicBool and return the inner bool",
        "answer_hi": "AtomicBool को कंज्यूम करना और इनर bool रिटर्न करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What does the `#[cfg(not(no_std_alloc_arc))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_std_alloc_arc))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Standard library Arc type", "Disable Arc", "Enable custom Arc", "Platform Arc"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी Arc टाइप", "Arc डिसेबल करना", "कस्टम Arc एनेबल करना", "प्लेटफॉर्म Arc"],
        "answer_en": "Standard library Arc type",
        "answer_hi": "स्टैंडर्ड लाइब्रेरी Arc टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of the `core::intrinsics::atomic_fence_acqrel` intrinsic?",
        "question_hi": "`core::intrinsics::atomic_fence_acqrel` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Memory fence with acquire-release semantics", "Acquire-release fence", "Full barrier", "Read-write barrier"],
        "options_hi": ["एक्वायर-रिलीज सेमैंटिक्स के साथ मेमोरी फेंस", "एक्वायर-रिलीज फेंस", "फुल बैरियर", "रीड-राइट बैरियर"],
        "answer_en": "Memory fence with acquire-release semantics",
        "answer_hi": "एक्वायर-रिलीज सेमैंटिक्स के साथ मेमोरी फेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What does the `core::mem::MaybeUninit::new` function create?",
        "question_hi": "`core::mem::MaybeUninit::new` फंक्शन क्या बनाता है?",
        "options_en": ["Uninitialized MaybeUninit instance", "Initialized instance", "Zeroed instance", "Default instance"],
        "options_hi": ["अनइनिशियलाइज्ड MaybeUninit इंस्टेंस", "इनिशियलाइज्ड इंस्टेंस", "जीरोड इंस्टेंस", "डिफॉल्ट इंस्टेंस"],
        "answer_en": "Uninitialized MaybeUninit instance",
        "answer_hi": "अनइनिशियलाइज्ड MaybeUninit इंस्टेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicU32::into_inner` method?",
        "question_hi": "`core::sync::atomic::AtomicU32::into_inner` मेथड का उद्देश्य क्या है?",
        "options_en": ["Consume AtomicU32 and return the inner u32", "Get inner value", "Convert to regular u32", "Extract atomic value"],
        "options_hi": ["AtomicU32 को कंज्यूम करना और इनर u32 रिटर्न करना", "इनर वैल्यू प्राप्त करना", "रेगुलर u32 में कन्वर्ट करना", "एटॉमिक वैल्यू एक्सट्रैक्ट करना"],
        "answer_en": "Consume AtomicU32 and return the inner u32",
        "answer_hi": "AtomicU32 को कंज्यूम करना और इनर u32 रिटर्न करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What does the `#[cfg(not(no_std_alloc_crate))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_std_alloc_crate))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Standard library alloc crate", "Disable alloc crate", "Enable custom alloc", "Platform alloc"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी alloc क्रेट", "alloc क्रेट डिसेबल करना", "कस्टम alloc एनेबल करना", "प्लेटफॉर्म alloc"],
        "answer_en": "Standard library alloc crate",
        "answer_hi": "स्टैंडर्ड लाइब्रेरी alloc क्रेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of the `core::intrinsics::atomic_fence_seqcst` intrinsic?",
        "question_hi": "`core::intrinsics::atomic_fence_seqcst` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Memory fence with sequential consistency", "Sequential fence", "Strongest ordering", "Total order barrier"],
        "options_hi": ["सीक्वेंशियल कंसिस्टेंसी के साथ मेमोरी फेंस", "सीक्वेंशियल फेंस", "सबसे मजबूत ऑर्डरिंग", "टोटल ऑर्डर बैरियर"],
        "answer_en": "Memory fence with sequential consistency",
        "answer_hi": "सीक्वेंशियल कंसिस्टेंसी के साथ मेमोरी फेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What does the `core::mem::MaybeUninit::zeroed` function create?",
        "question_hi": "`core::mem::MaybeUninit::zeroed` फंक्शन क्या बनाता है?",
        "options_en": ["Zero-initialized MaybeUninit instance", "Uninitialized instance", "Default instance", "Initialized instance"],
        "options_hi": ["जीरो-इनिशियलाइज्ड MaybeUninit इंस्टेंस", "अनइनिशियलाइज्ड इंस्टेंस", "डिफॉल्ट इंस्टेंस", "इनिशियलाइज्ड इंस्टेंस"],
        "answer_en": "Zero-initialized MaybeUninit instance",
        "answer_hi": "जीरो-इनिशियलाइज्ड MaybeUninit इंस्टेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicI16::into_inner` method?",
        "question_hi": "`core::sync::atomic::AtomicI16::into_inner` मेथड का उद्देश्य क्या है?",
        "options_en": ["Consume AtomicI16 and return the inner i16", "Get inner value", "Convert to regular i16", "Extract atomic value"],
        "options_hi": ["AtomicI16 को कंज्यूम करना और इनर i16 रिटर्न करना", "इनर वैल्यू प्राप्त करना", "रेगुलर i16 में कन्वर्ट करना", "एटॉमिक वैल्यू एक्सट्रैक्ट करना"],
        "answer_en": "Consume AtomicI16 and return the inner i16",
        "answer_hi": "AtomicI16 को कंज्यूम करना और इनर i16 रिटर्न करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What does the `#[cfg(not(no_std_core))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_std_core))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Standard library core types", "Disable core", "Enable custom core", "Platform core"],
        "options_hi": ["स्टैंडर्ड लाइब्रेरी कोर टाइप्स", "कोर डिसेबल करना", "कस्टम कोर एनेबल करना", "प्लेटफॉर्म कोर"],
        "answer_en": "Standard library core types",
        "answer_hi": "स्टैंडर्ड लाइब्रेरी कोर टाइप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of the `core::intrinsics::atomic_cxchg_weak` intrinsic?",
        "question_hi": "`core::intrinsics::atomic_cxchg_weak` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Atomic weak compare-and-exchange", "Weak exchange", "May fail spuriously", "Non-atomic exchange"],
        "options_hi": ["एटॉमिक वीक कम्पेयर-एंड-एक्सचेंज", "वीक एक्सचेंज", "स्प्यूरियसली फेल हो सकता है", "नॉन-एटॉमिक एक्सचेंज"],
        "answer_en": "Atomic weak compare-and-exchange",
        "answer_hi": "एटॉमिक वीक कम्पेयर-एंड-एक्सचेंज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What does the `core::mem::MaybeUninit::assume_init` method do?",
        "question_hi": "`core::mem::MaybeUninit::assume_init` मेथड क्या करता है?",
        "options_en": ["Assume initialized and return the value", "Check initialization", "Safe initialization", "No operation"],
        "options_hi": ["इनिशियलाइज्ड मानना और वैल्यू रिटर्न करना", "इनिशियलाइज़ेशन चेक करना", "सेफ इनिशियलाइज़ेशन", "कोई ऑपरेशन नहीं"],
        "answer_en": "Assume initialized and return the value",
        "answer_hi": "इनिशियलाइज्ड मानना और वैल्यू रिटर्न करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicUsize::into_inner` method?",
        "question_hi": "`core::sync::atomic::AtomicUsize::into_inner` मेथड का उद्देश्य क्या है?",
        "options_en": ["Consume AtomicUsize and return the inner usize", "Get inner value", "Convert to regular usize", "Extract atomic value"],
        "options_hi": ["AtomicUsize को कंज्यूम करना और इनर usize रिटर्न करना", "इनर वैल्यू प्राप्त करना", "रेगुलर usize में कन्वर्ट करना", "एटॉमिक वैल्यू एक्सट्रैक्ट करना"],
        "answer_en": "Consume AtomicUsize and return the inner usize",
        "answer_hi": "AtomicUsize को कंज्यूम करना और इनर usize रिटर्न करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What does the `#[cfg(not(no_std))]` attribute enable by default?",
        "question_hi": "`#[cfg(not(no_std))]` एट्रिब्यूट डिफॉल्ट रूप से क्या एनेबल करता है?",
        "options_en": ["Full standard library support", "Only core library", "Custom standard library", "Platform-specific std"],
        "options_hi": ["फुल स्टैंडर्ड लाइब्रेरी सपोर्ट", "केवल कोर लाइब्रेरी", "कस्टम स्टैंडर्ड लाइब्रेरी", "प्लेटफॉर्म-स्पेसिफिक std"],
        "answer_en": "Full standard library support",
        "answer_hi": "फुल स्टैंडर्ड लाइब्रेरी सपोर्ट",
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