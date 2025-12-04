const questions = [
    {
        "num": 1,
        "question_en": "What is the purpose of the `#[repr(simd)]` attribute on a struct?",
        "question_hi": "स्ट्रक्चर पर `#[repr(simd)]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Enable SIMD vectorization for the type", "Force struct alignment", "Disable padding", "Enable parallel processing"],
        "options_hi": ["टाइप के लिए SIMD वेक्टराइजेशन एनेबल करना", "स्ट्रक्चर अलाइनमेंट फोर्स करना", "पैडिंग डिसेबल करना", "पैरेलल प्रोसेसिंग एनेबल करना"],
        "answer_en": "Enable SIMD vectorization for the type",
        "answer_hi": "टाइप के लिए SIMD वेक्टराइजेशन एनेबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What does the `core::intrinsics::forget` function do differently from `mem::forget`?",
        "question_hi": "`core::intrinsics::forget` फंक्शन `mem::forget` से अलग क्या करता है?",
        "options_en": ["It's a compiler intrinsic with different guarantees", "It's faster", "It works only with Copy types", "It deallocates memory"],
        "options_hi": ["यह अलग गारंटी के साथ एक कंपाइलर इंट्रिन्सिक है", "यह तेज है", "यह केवल Copy टाइप्स के साथ काम करता है", "यह मेमोरी डीलोकेट करता है"],
        "answer_en": "It's a compiler intrinsic with different guarantees",
        "answer_hi": "यह अलग गारंटी के साथ एक कंपाइलर इंट्रिन्सिक है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the purpose of the `#[cfg(panic = \"abort\")]` attribute?",
        "question_hi": "`#[cfg(panic = \"abort\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation when panic strategy is abort", "Enable panic abort", "Disable panic unwinding", "Force immediate termination"],
        "options_hi": ["पैनिक स्ट्रैटेजी abort होने पर कंडीशनल कंपाइलेशन", "पैनिक abort एनेबल करना", "पैनिक अनवाइंडिंग डिसेबल करना", "तुरंत टर्मिनेशन फोर्स करना"],
        "answer_en": "Conditional compilation when panic strategy is abort",
        "answer_hi": "पैनिक स्ट्रैटेजी abort होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What does the `core::arch::x86_64::_mm_prefetch` intrinsic optimize?",
        "question_hi": "`core::arch::x86_64::_mm_prefetch` इंट्रिन्सिक क्या ऑप्टिमाइज़ करता है?",
        "options_en": ["Cache performance by prefetching data", "Memory allocation", "CPU pipeline", "Branch prediction"],
        "options_hi": ["डेटा प्रीफेच करके कैश परफॉर्मेंस", "मेमोरी अलोकेशन", "CPU पाइपलाइन", "ब्रांच प्रेडिक्शन"],
        "answer_en": "Cache performance by prefetching data",
        "answer_hi": "डेटा प्रीफेच करके कैश परफॉर्मेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the difference between `#[inline(always)]` and `#[inline(never)]`?",
        "question_hi": "`#[inline(always)]` और `#[inline(never)]` में क्या अंतर है?",
        "options_en": ["always forces inlining, never prevents it", "always is faster", "never works only in debug mode", "always ignores code size"],
        "options_hi": ["always इनलाइनिंग फोर्स करता है, never उसे रोकता है", "always तेज है", "never केवल डिबग मोड में काम करता है", "always कोड साइज इग्नोर करता है"],
        "answer_en": "always forces inlining, never prevents it",
        "answer_hi": "always इनलाइनिंग फोर्स करता है, never उसे रोकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What does the `core::sync::atomic::AtomicPtr::fetch_update` method provide?",
        "question_hi": "`core::sync::atomic::AtomicPtr::fetch_update` मेथड क्या प्रदान करता है?",
        "options_en": ["Atomic compare-and-swap with transformation", "Pointer arithmetic", "Memory allocation", "Thread synchronization"],
        "options_hi": ["ट्रांसफॉर्मेशन के साथ एटॉमिक कम्पेयर-एंड-स्वैप", "पॉइंटर अर्थमैटिक", "मेमोरी अलोकेशन", "थ्रेड सिंक्रोनाइज़ेशन"],
        "answer_en": "Atomic compare-and-swap with transformation",
        "answer_hi": "ट्रांसफॉर्मेशन के साथ एटॉमिक कम्पेयर-एंड-स्वैप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of the `#[cfg(target_has_atomic = \"128\")]` attribute?",
        "question_hi": "`#[cfg(target_has_atomic = \"128\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation for 128-bit atomic support", "128-bit memory alignment", "Large atomic operations", "SIMD 128-bit support"],
        "options_hi": ["128-बिट एटॉमिक सपोर्ट के लिए कंडीशनल कंपाइलेशन", "128-बिट मेमोरी अलाइनमेंट", "लार्ज एटॉमिक ऑपरेशन्स", "SIMD 128-बिट सपोर्ट"],
        "answer_en": "Conditional compilation for 128-bit atomic support",
        "answer_hi": "128-बिट एटॉमिक सपोर्ट के लिए कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does the `core::mem::MaybeUninit::uninit_array` function create?",
        "question_hi": "`core::mem::MaybeUninit::uninit_array` फंक्शन क्या बनाता है?",
        "options_en": ["Array of uninitialized MaybeUninit elements", "Initialized array", "Zeroed array", "Raw memory array"],
        "options_hi": ["अनइनिशियलाइज्ड MaybeUninit एलिमेंट्स का ऐरे", "इनिशियलाइज्ड ऐरे", "जीरोड ऐरे", "रॉ मेमोरी ऐरे"],
        "answer_en": "Array of uninitialized MaybeUninit elements",
        "answer_hi": "अनइनिशियलाइज्ड MaybeUninit एलिमेंट्स का ऐरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of the `core::hint::unreachable_unchecked` in optimized code?",
        "question_hi": "ऑप्टिमाइज्ड कोड में `core::hint::unreachable_unchecked` का उद्देश्य क्या है?",
        "options_en": ["Allow compiler to optimize based on unreachable paths", "Cause immediate crash", "Disable bounds checking", "Enable debug assertions"],
        "options_hi": ["कंपाइलर को अनरीचेबल पाथ्स के आधार पर ऑप्टिमाइज़ करने देना", "तुरंत क्रैश करना", "बाउंड्स चेकिंग डिसेबल करना", "डिबग असेर्शन्स एनेबल करना"],
        "answer_en": "Allow compiler to optimize based on unreachable paths",
        "answer_hi": "कंपाइलर को अनरीचेबल पाथ्स के आधार पर ऑप्टिमाइज़ करने देना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What does the `#[repr(align(32))]` attribute ensure for a struct?",
        "question_hi": "स्ट्रक्चर के लिए `#[repr(align(32))]` एट्रिब्यूट क्या सुनिश्चित करता है?",
        "options_en": ["32-byte alignment for AVX instructions", "32-bit alignment", "32-element padding", "32-byte size"],
        "options_hi": ["AVX इंस्ट्रक्शन्स के लिए 32-बाइट अलाइनमेंट", "32-बिट अलाइनमेंट", "32-एलिमेंट पैडिंग", "32-बाइट साइज"],
        "answer_en": "32-byte alignment for AVX instructions",
        "answer_hi": "AVX इंस्ट्रक्शन्स के लिए 32-बाइट अलाइनमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of the `core::sync::atomic::fence` with `Ordering::SeqCst`?",
        "question_hi": "`Ordering::SeqCst` के साथ `core::sync::atomic::fence` का उद्देश्य क्या है?",
        "options_en": ["Strongest memory ordering guarantees", "Weak ordering only", "Thread-local ordering", "Compiler-only barrier"],
        "options_hi": ["सबसे मजबूत मेमोरी ऑर्डरिंग गारंटी", "केवल वीक ऑर्डरिंग", "थ्रेड-लोकल ऑर्डरिंग", "केवल कंपाइलर बैरियर"],
        "answer_en": "Strongest memory ordering guarantees",
        "answer_hi": "सबसे मजबूत मेमोरी ऑर्डरिंग गारंटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What does the `#[cfg(target_os = \"emscripten\")]` attribute target?",
        "question_hi": "`#[cfg(target_os = \"emscripten\")]` एट्रिब्यूट किसे टारगेट करता है?",
        "options_en": ["Emscripten WebAssembly platform", "Embedded systems", "Emscripten JavaScript", "Web browsers"],
        "options_hi": ["Emscripten WebAssembly प्लेटफॉर्म", "एम्बेडेड सिस्टम्स", "Emscripten JavaScript", "वेब ब्राउज़र्स"],
        "answer_en": "Emscripten WebAssembly platform",
        "answer_hi": "Emscripten WebAssembly प्लेटफॉर्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the difference between `core::ptr::read` and `core::ptr::read_volatile`?",
        "question_hi": "`core::ptr::read` और `core::ptr::read_volatile` में क्या अंतर है?",
        "options_en": ["read_volatile prevents compiler optimizations", "read is faster", "read_volatile works only with atomics", "read requires alignment"],
        "options_hi": ["read_volatile कंपाइलर ऑप्टिमाइज़ेशन को रोकता है", "read तेज है", "read_volatile केवल एटॉमिक्स के साथ काम करता है", "read को अलाइनमेंट की जरूरत है"],
        "answer_en": "read_volatile prevents compiler optimizations",
        "answer_hi": "read_volatile कंपाइलर ऑप्टिमाइज़ेशन को रोकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What does the `core::arch::global_asm!` macro allow you to do?",
        "question_hi": "`core::arch::global_asm!` मैक्रो आपको क्या करने की अनुमति देता है?",
        "options_en": ["Include assembly in global module scope", "Inline assembly in functions", "Platform-specific code", "Assembly macro generation"],
        "options_hi": ["ग्लोबल मॉड्यूल स्कोप में असेंबली इन्क्लूड करना", "फंक्शन्स में इनलाइन असेंबली", "प्लेटफॉर्म-स्पेसिफिक कोड", "असेंबली मैक्रो जनरेशन"],
        "answer_en": "Include assembly in global module scope",
        "answer_hi": "ग्लोबल मॉड्यूल स्कोप में असेंबली इन्क्लूड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of the `#[cfg(not(no_asm))]` attribute?",
        "question_hi": "`#[cfg(not(no_asm))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation when inline assembly is available", "Disable assembly", "Enable assembly optimization", "Platform assembly support"],
        "options_hi": ["इनलाइन असेंबली उपलब्ध होने पर कंडीशनल कंपाइलेशन", "असेंबली डिसेबल करना", "असेंबली ऑप्टिमाइज़ेशन एनेबल करना", "प्लेटफॉर्म असेंबली सपोर्ट"],
        "answer_en": "Conditional compilation when inline assembly is available",
        "answer_hi": "इनलाइन असेंबली उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does the `core::intrinsics::rotate_left` function optimize?",
        "question_hi": "`core::intrinsics::rotate_left` फंक्शन क्या ऑप्टिमाइज़ करता है?",
        "options_en": ["Bit rotation using CPU instructions", "Memory rotation", "Array rotation", "Pointer rotation"],
        "options_hi": ["CPU इंस्ट्रक्शन्स का उपयोग करके बिट रोटेशन", "मेमोरी रोटेशन", "ऐरे रोटेशन", "पॉइंटर रोटेशन"],
        "answer_en": "Bit rotation using CPU instructions",
        "answer_hi": "CPU इंस्ट्रक्शन्स का उपयोग करके बिट रोटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of the `#[cfg(target_feature = \"avx2\")]` attribute?",
        "question_hi": "`#[cfg(target_feature = \"avx2\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation for AVX2 instruction support", "AVX2 code generation", "Vector math optimization", "SIMD 256-bit support"],
        "options_hi": ["AVX2 इंस्ट्रक्शन सपोर्ट के लिए कंडीशनल कंपाइलेशन", "AVX2 कोड जनरेशन", "वेक्टर मैथ ऑप्टिमाइज़ेशन", "SIMD 256-बिट सपोर्ट"],
        "answer_en": "Conditional compilation for AVX2 instruction support",
        "answer_hi": "AVX2 इंस्ट्रक्शन सपोर्ट के लिए कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does the `core::mem::transmute_copy` function require for safety?",
        "question_hi": "सुरक्षा के लिए `core::mem::transmute_copy` फंक्शन को क्या चाहिए?",
        "options_en": ["Source and destination types must have same size", "Types must be Copy", "Memory must be aligned", "Pointers must be valid"],
        "options_hi": ["सोर्स और डेस्टिनेशन टाइप्स का साइज समान होना चाहिए", "टाइप्स Copy होने चाहिए", "मेमोरी अलाइन्ड होनी चाहिए", "पॉइंटर्स वैलिड होने चाहिए"],
        "answer_en": "Source and destination types must have same size",
        "answer_hi": "सोर्स और डेस्टिनेशन टाइप्स का साइज समान होना चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicU16` type?",
        "question_hi": "`core::sync::atomic::AtomicU16` टाइप का उद्देश्य क्या है?",
        "options_en": ["Thread-safe atomic operations on 16-bit unsigned integers", "16-bit memory addresses", "Small atomic counters", "Hardware register access"],
        "options_hi": ["16-बिट अनसाइन्ड इंटीजर्स पर थ्रेड-सेफ एटॉमिक ऑपरेशन्स", "16-बिट मेमोरी एड्रेसेस", "स्मॉल एटॉमिक काउंटर्स", "हार्डवेयर रजिस्टर एक्सेस"],
        "answer_en": "Thread-safe atomic operations on 16-bit unsigned integers",
        "answer_hi": "16-बिट अनसाइन्ड इंटीजर्स पर थ्रेड-सेफ एटॉमिक ऑपरेशन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What does the `#[cfg(not(no_i128))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_i128))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Conditional compilation for 128-bit integer support", "128-bit floating point", "Large number support", "Big integer arithmetic"],
        "options_hi": ["128-बिट इंटीजर सपोर्ट के लिए कंडीशनल कंपाइलेशन", "128-बिट फ्लोटिंग पॉइंट", "लार्ज नंबर सपोर्ट", "बिग इंटीजर अर्थमैटिक"],
        "answer_en": "Conditional compilation for 128-bit integer support",
        "answer_hi": "128-बिट इंटीजर सपोर्ट के लिए कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of the `core::arch::x86_64::_mm256_load_ps` intrinsic?",
        "question_hi": "`core::arch::x86_64::_mm256_load_ps` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Load 256-bit vector of single-precision floats", "Load 256-bit integer", "Store vector data", "Move aligned data"],
        "options_hi": ["सिंगल-प्रिसिजन फ्लोट्स का 256-बिट वेक्टर लोड करना", "256-बिट इंटीजर लोड करना", "वेक्टर डेटा स्टोर करना", "अलाइन्ड डेटा मूव करना"],
        "answer_en": "Load 256-bit vector of single-precision floats",
        "answer_hi": "सिंगल-प्रिसिजन फ्लोट्स का 256-बि�ट वेक्टर लोड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does the `#[repr(C, u8)]` combination on an enum ensure?",
        "question_hi": "एनम पर `#[repr(C, u8)]` कॉम्बिनेशन क्या सुनिश्चित करता है?",
        "options_en": ["C-compatible layout with u8 discriminant", "u8 size with C alignment", "C layout and u8 packing", "Platform-specific u8 representation"],
        "options_hi": ["u8 डिस्क्रिमिनेंट के साथ C-कम्पैटिबल लेआउट", "C अलाइनमेंट के साथ u8 साइज", "C लेआउट और u8 पैकिंग", "प्लेटफॉर्म-स्पेसिफिक u8 रिप्रेजेंटेशन"],
        "answer_en": "C-compatible layout with u8 discriminant",
        "answer_hi": "u8 डिस्क्रिमिनेंट के साथ C-कम्पैटिबल लेआउट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicBool::fetch_nand` method?",
        "question_hi": "`core::sync::atomic::AtomicBool::fetch_nand` मेथड का उद्देश्य क्या है?",
        "options_en": ["Atomic NAND operation returning previous value", "Logical AND operation", "Bitwise NAND", "Boolean negation"],
        "options_hi": ["पिछली वैल्यू रिटर्न करते हुए एटॉमिक NAND ऑपरेशन", "लॉजिकल AND ऑपरेशन", "बिटवाइज NAND", "बूलियन नेगेशन"],
        "answer_en": "Atomic NAND operation returning previous value",
        "answer_hi": "पिछली वैल्यू रिटर्न करते हुए एटॉमिक NAND ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What does the `#[cfg(target_arch = \"aarch64\")]` attribute target?",
        "question_hi": "`#[cfg(target_arch = \"aarch64\")]` एट्रिब्यूट किसे टारगेट करता है?",
        "options_en": ["ARM 64-bit architecture", "ARM 32-bit", "Android ARM", "Apple Silicon"],
        "options_hi": ["ARM 64-बिट आर्किटेक्चर", "ARM 32-बिट", "एंड्रॉयड ARM", "एप्पल सिलिकॉन"],
        "answer_en": "ARM 64-bit architecture",
        "answer_hi": "ARM 64-बिट आर्किटेक्चर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of the `core::mem::MaybeUninit::slice_assume_init_ref`?",
        "question_hi": "`core::mem::MaybeUninit::slice_assume_init_ref` का उद्देश्य क्या है?",
        "options_en": ["Get reference to slice of initialized values", "Initialize slice elements", "Check slice initialization", "Copy slice data"],
        "options_hi": ["इनिशियलाइज्ड वैल्यूज के स्लाइस का रेफरेंस प्राप्त करना", "स्लाइस एलिमेंट्स इनिशियलाइज़ करना", "स्लाइस इनिशियलाइज़ेशन चेक करना", "स्लाइस डेटा कॉपी करना"],
        "answer_en": "Get reference to slice of initialized values",
        "answer_hi": "इनिशियलाइज्ड वैल्यूज के स्लाइस का रेफरेंस प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What does the `core::sync::atomic::Ordering::Release` prevent?",
        "question_hi": "`core::sync::atomic::Ordering::Release` क्या रोकता है?",
        "options_en": ["Previous operations from being reordered after", "Subsequent operations from being reordered before", "All reordering", "Only compiler reordering"],
        "options_hi": ["प्रीवियस ऑपरेशन्स को इसके बाद रीऑर्डर होने से रोकता है", "सब्सीक्वेंट ऑपरेशन्स को इससे पहले रीऑर्डर होने से रोकता है", "सभी रीऑर्डरिंग", "केवल कंपाइलर रीऑर्डरिंग"],
        "answer_en": "Previous operations from being reordered after",
        "answer_hi": "प्रीवियस ऑपरेशन्स को इसके बाद रीऑर्डर होने से रोकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of the `#[cfg(target_vendor = \"apple\")]` attribute?",
        "question_hi": "`#[cfg(target_vendor = \"apple\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation for Apple platforms", "iOS and macOS only", "Apple hardware features", "Swift interoperability"],
        "options_hi": ["एप्पल प्लेटफॉर्म्स के लिए कंडीशनल कंपाइलेशन", "केवल iOS और macOS", "एप्पल हार्डवेयर फीचर्स", "Swift इंटरऑपरेबिलिटी"],
        "answer_en": "Conditional compilation for Apple platforms",
        "answer_hi": "एप्पल प्लेटफॉर्म्स के लिए कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What does the `core::arch::x86_64::_mm_set1_epi8` intrinsic create?",
        "question_hi": "`core::arch::x86_64::_mm_set1_epi8` इंट्रिन्सिक क्या बनाता है?",
        "options_en": ["SIMD vector with all bytes set to same value", "Single byte vector", "8-bit integer array", "Repeated byte pattern"],
        "options_hi": ["सभी बाइट्स को समान वैल्यू पर सेट करके SIMD वेक्टर", "सिंगल बाइट वेक्टर", "8-बिट इंटीजर ऐरे", "रिपीटेड बाइट पैटर्न"],
        "answer_en": "SIMD vector with all bytes set to same value",
        "answer_hi": "सभी बाइट्स को समान वैल्यू पर सेट करके SIMD वेक्टर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of the `core::ptr::NonNull::cast` method?",
        "question_hi": "`core::ptr::NonNull::cast` मेथड का उद्देश्य क्या है?",
        "options_en": ["Cast NonNull pointer to different type", "Change pointer value", "Convert to raw pointer", "Adjust pointer alignment"],
        "options_hi": ["NonNull पॉइंटर को अलग टाइप में कास्ट करना", "पॉइंटर वैल्यू बदलना", "रॉ पॉइंटर में कन्वर्ट करना", "पॉइंटर अलाइनमेंट एडजस्ट करना"],
        "answer_en": "Cast NonNull pointer to different type",
        "answer_hi": "NonNull पॉइंटर को अलग टाइप में कास्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What does the `#[cfg(not(no_panic_unwind))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_panic_unwind))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Conditional compilation when panic unwinding is available", "Disable panic unwinding", "Enable panic recovery", "Stack unwinding support"],
        "options_hi": ["पैनिक अनवाइंडिंग उपलब्ध होने पर कंडीशनल कंपाइलेशन", "पैनिक अनवाइंडिंग डिसेबल करना", "पैनिक रिकवरी एनेबल करना", "स्टैक अनवाइंडिंग सपोर्ट"],
        "answer_en": "Conditional compilation when panic unwinding is available",
        "answer_hi": "पैनिक अनवाइंडिंग उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicI32::fetch_max` method?",
        "question_hi": "`core::sync::atomic::AtomicI32::fetch_max` मेथड का उद्देश्य क्या है?",
        "options_en": ["Atomic maximum operation returning previous value", "Find maximum value", "Compare and set maximum", "Atomic comparison"],
        "options_hi": ["पिछली वैल्यू रिटर्न करते हुए एटॉमिक मैक्सिमम ऑपरेशन", "मैक्सिमम वैल्यू ढूंढना", "कम्पेयर और मैक्सिमम सेट करना", "एटॉमिक कम्पेयरिजन"],
        "answer_en": "Atomic maximum operation returning previous value",
        "answer_hi": "पिछली वैल्यू रिटर्न करते हुए एटॉमिक मैक्सिमम ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does the `#[cfg(target_abi = \"eabi\")]` attribute target?",
        "question_hi": "`#[cfg(target_abi = \"eabi\")]` एट्रिब्यूट किसे टारगेट करता है?",
        "options_en": ["Embedded ABI for ARM systems", "Linux ABI", "Windows ABI", "Generic EABI"],
        "options_hi": ["ARM सिस्टम्स के लिए एम्बेडेड ABI", "लिनक्स ABI", "विंडोज ABI", "जेनेरिक EABI"],
        "answer_en": "Embedded ABI for ARM systems",
        "answer_hi": "ARM सिस्टम्स के लिए एम्बेडेड ABI",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of the `core::mem::MaybeUninit::write_slice` method?",
        "question_hi": "`core::mem::MaybeUninit::write_slice` मेथड का उद्देश्य क्या है?",
        "options_en": ["Initialize slice of MaybeUninit from slice of values", "Write to initialized slice", "Copy slice data", "Initialize with default values"],
        "options_hi": ["वैल्यूज के स्लाइस से MaybeUninit के स्लाइस को इनिशियलाइज़ करना", "इनिशियलाइज्ड स्लाइस में राइट करना", "स्लाइस डेटा कॉपी करना", "डिफॉल्ट वैल्यूज के साथ इनिशियलाइज़ करना"],
        "answer_en": "Initialize slice of MaybeUninit from slice of values",
        "answer_hi": "वैल्यूज के स्लाइस से MaybeUninit के स्लाइस को इनिशियलाइज़ करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What does the `core::sync::atomic::AtomicUsize::fetch_sub` with `Ordering::AcqRel` provide?",
        "question_hi": "`Ordering::AcqRel` के साथ `core::sync::atomic::AtomicUsize::fetch_sub` क्या प्रदान करता है?",
        "options_en": ["Both acquire and release semantics for subtraction", "Only acquire semantics", "Only release semantics", "Relaxed ordering"],
        "options_hi": ["सबट्रैक्शन के लिए एक्वायर और रिलीज दोनों सेमैंटिक्स", "केवल एक्वायर सेमैंटिक्स", "केवल रिलीज सेमैंटिक्स", "रिलैक्स्ड ऑर्डरिंग"],
        "answer_en": "Both acquire and release semantics for subtraction",
        "answer_hi": "सबट्रैक्शन के लिए एक्वायर और रिलीज दोनों सेमैंटिक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of the `#[cfg(target_has_atomic_equal_alignment = \"ptr\")]` attribute?",
        "question_hi": "`#[cfg(target_has_atomic_equal_alignment = \"ptr\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Check if atomic pointers have same alignment as regular pointers", "Verify pointer alignment", "Check atomic size", "Platform alignment support"],
        "options_hi": ["चेक करना कि एटॉमिक पॉइंटर्स की अलाइनमेंट रेगुलर पॉइंटर्स के समान है", "पॉइंटर अलाइनमेंट वेरिफाई करना", "एटॉमिक साइज चेक करना", "प्लेटफॉर्म अलाइनमेंट सपोर्ट"],
        "answer_en": "Check if atomic pointers have same alignment as regular pointers",
        "answer_hi": "चेक करना कि एटॉमिक पॉइंटर्स की अलाइनमेंट रेगुलर पॉइंटर्स के समान है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does the `core::arch::x86_64::_mm_shuffle_epi8` intrinsic do?",
        "question_hi": "`core::arch::x86_64::_mm_shuffle_epi8` इंट्रिन्सिक क्या करता है?",
        "options_en": ["Shuffle bytes in SIMD vector according to mask", "Shift bytes left", "Rotate bytes", "Reverse byte order"],
        "options_hi": ["मास्क के अनुसार SIMD वेक्टर में बाइट्स शफल करना", "बाइट्स को लेफ्ट शिफ्ट करना", "बाइट्स रोटेट करना", "बाइट ऑर्डर रिवर्स करना"],
        "answer_en": "Shuffle bytes in SIMD vector according to mask",
        "answer_hi": "मास्क के अनुसार SIMD वेक्टर में बाइट्स शफल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of the `#[cfg(not(no_thin_lto))]` attribute?",
        "question_hi": "`#[cfg(not(no_thin_lto))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation when ThinLTO is available", "Disable LTO", "Enable link-time optimization", "Thin binary generation"],
        "options_hi": ["ThinLTO उपलब्ध होने पर कंडीशनल कंपाइलेशन", "LTO डिसेबल करना", "लिंक-टाइम ऑप्टिमाइज़ेशन एनेबल करना", "थिन बाइनरी जनरेशन"],
        "answer_en": "Conditional compilation when ThinLTO is available",
        "answer_hi": "ThinLTO उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What does the `core::sync::atomic::AtomicPtr::into_inner` method do?",
        "question_hi": "`core::sync::atomic::AtomicPtr::into_inner` मेथड क्या करता है?",
        "options_en": ["Consume AtomicPtr and return the raw pointer", "Get inner value", "Convert to shared pointer", "Extract pointer value"],
        "options_hi": ["AtomicPtr को कंज्यूम करना और रॉ पॉइंटर रिटर्न करना", "इनर वैल्यू प्राप्त करना", "शेयर्ड पॉइंटर में कन्वर्ट करना", "पॉइंटर वैल्यू एक्सट्रैक्ट करना"],
        "answer_en": "Consume AtomicPtr and return the raw pointer",
        "answer_hi": "AtomicPtr को कंज्यूम करना और रॉ पॉइंटर रिटर्न करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of the `#[cfg(target_endian = \"big\")]` attribute?",
        "question_hi": "`#[cfg(target_endian = \"big\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation for big-endian systems", "Enable big-endian mode", "Byte order conversion", "Network byte order"],
        "options_hi": ["बिग-एंडियन सिस्टम्स के लिए कंडीशनल कंपाइलेशन", "बिग-एंडियन मोड एनेबल करना", "बाइट ऑर्डर कन्वर्जन", "नेटवर्क बाइट ऑर्डर"],
        "answer_en": "Conditional compilation for big-endian systems",
        "answer_hi": "बिग-एंडियन सिस्टम्स के लिए कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What does the `core::intrinsics::sqrtf32` function provide?",
        "question_hi": "`core::intrinsics::sqrtf32` फंक्शन क्या प्रदान करता है?",
        "options_en": ["Hardware-accelerated square root for f32", "Software square root", "Fast math approximation", "Vector square root"],
        "options_hi": ["f32 के लिए हार्डवेयर-एक्सेलेरेटेड स्क्वायर रूट", "सॉफ्टवेयर स्क्वायर रूट", "फास्ट मैथ अप्रॉक्सिमेशन", "वेक्टर स्क्वायर रूट"],
        "answer_en": "Hardware-accelerated square root for f32",
        "answer_hi": "f32 के लिए हार्डवेयर-एक्सेलेरेटेड स्क्वायर रूट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of the `core::mem::MaybeUninit::array_from_fn` function?",
        "question_hi": "`core::mem::MaybeUninit::array_from_fn` फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Create array of MaybeUninit using initialization function", "Initialize array elements", "Map function over array", "Create array from iterator"],
        "options_hi": ["इनिशियलाइज़ेशन फंक्शन का उपयोग करके MaybeUninit का ऐरे बनाना", "ऐरे एलिमेंट्स इनिशियलाइज़ करना", "ऐरे पर फंक्शन मैप करना", "इटरेटर से ऐरे बनाना"],
        "answer_en": "Create array of MaybeUninit using initialization function",
        "answer_hi": "इनिशियलाइज़ेशन फंक्शन का उपयोग करके MaybeUninit का ऐरे बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What does the `#[cfg(not(no_macro_export))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_macro_export))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Conditional compilation when macro export is available", "Disable macro export", "Enable macro expansion", "Public macro support"],
        "options_hi": ["मैक्रो एक्सपोर्ट उपलब्ध होने पर कंडीशनल कंपाइलेशन", "मैक्रो एक्सपोर्ट डिसेबल करना", "मैक्रो एक्सपेंशन एनेबल करना", "पब्लिक मैक्रो सपोर्ट"],
        "answer_en": "Conditional compilation when macro export is available",
        "answer_hi": "मैक्रो एक्सपोर्ट उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicU64::fetch_min` method?",
        "question_hi": "`core::sync::atomic::AtomicU64::fetch_min` मेथड का उद्देश्य क्या है?",
        "options_en": ["Atomic minimum operation returning previous value", "Find minimum value", "Compare and set minimum", "Atomic comparison"],
        "options_hi": ["पिछली वैल्यू रिटर्न करते हुए एटॉमिक मिनिमम ऑपरेशन", "मिनिमम वैल्यू ढूंढना", "कम्पेयर और मिनिमम सेट करना", "एटॉमिक कम्पेयरिजन"],
        "answer_en": "Atomic minimum operation returning previous value",
        "answer_hi": "पिछली वैल्यू रिटर्न करते हुए एटॉमिक मिनिमम ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What does the `#[cfg(target_pointer_width = \"32\")]` condition ensure?",
        "question_hi": "`#[cfg(target_pointer_width = \"32\")]` कंडीशन क्या सुनिश्चित करती है?",
        "options_en": ["32-bit pointer platform", "32-bit integers", "32-byte alignment", "32-bit memory addresses"],
        "options_hi": ["32-बिट पॉइंटर प्लेटफॉर्म", "32-बिट इंटीजर्स", "32-बाइट अलाइनमेंट", "32-बिट मेमोरी एड्रेसेस"],
        "answer_en": "32-bit pointer platform",
        "answer_hi": "32-बिट पॉइंटर प्लेटफॉर्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of the `core::arch::x86_64::_mm_add_epi16` intrinsic?",
        "question_hi": "`core::arch::x86_64::_mm_add_epi16` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Add packed 16-bit integers in SIMD vectors", "Add 16-bit scalars", "Vector addition", "Integer arithmetic"],
        "options_hi": ["SIMD वेक्टर्स में पैक्ड 16-बिट इंटीजर्स एड करना", "16-बिट स्केलर्स एड करना", "वेक्टर एडिशन", "इंटीजर अर्थमैटिक"],
        "answer_en": "Add packed 16-bit integers in SIMD vectors",
        "answer_hi": "SIMD वेक्टर्स में पैक्ड 16-बिट इंटीजर्स एड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What does the `#[cfg(not(no_ffi))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_ffi))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Conditional compilation when FFI is available", "Disable foreign function interface", "Enable C interoperability", "FFI feature detection"],
        "options_hi": ["FFI उपलब्ध होने पर कंडीशनल कंपाइलेशन", "फॉरेन फंक्शन इंटरफेस डिसेबल करना", "C इंटरऑपरेबिलिटी एनेबल करना", "FFI फीचर डिटेक्शन"],
        "answer_en": "Conditional compilation when FFI is available",
        "answer_hi": "FFI उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicBool::get_mut` method?",
        "question_hi": "`core::sync::atomic::AtomicBool::get_mut` मेथड का उद्देश्य क्या है?",
        "options_en": ["Get mutable reference to underlying bool", "Get atomic value", "Extract boolean value", "Convert to regular bool"],
        "options_hi": ["अंडरलाइंग bool का म्यूटेबल रेफरेंस प्राप्त करना", "एटॉमिक वैल्यू प्राप्त करना", "बूलियन वैल्यू एक्सट्रैक्ट करना", "रेगुलर bool में कन्वर्ट करना"],
        "answer_en": "Get mutable reference to underlying bool",
        "answer_hi": "अंडरलाइंग bool का म्यूटेबल रेफरेंस प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What does the `#[cfg(target_family = \"wasm\")]` attribute target?",
        "question_hi": "`#[cfg(target_family = \"wasm\")]` एट्रिब्यूट किसे टारगेट करता है?",
        "options_en": ["WebAssembly platform family", "WASI systems", "Web browsers", "JavaScript environments"],
        "options_hi": ["WebAssembly प्लेटफॉर्म फैमिली", "WASI सिस्टम्स", "वेब ब्राउज़र्स", "JavaScript एनवायरनमेंट्स"],
        "answer_en": "WebAssembly platform family",
        "answer_hi": "WebAssembly प्लेटफॉर्म फैमिली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of the `core::mem::MaybeUninit::assume_init_drop`?",
        "question_hi": "`core::mem::MaybeUninit::assume_init_drop` का उद्देश्य क्या है?",
        "options_en": ["Assume initialized and run destructor", "Drop uninitialized memory", "Prevent destruction", "Safe drop operation"],
        "options_hi": ["इनिशियलाइज्ड मानना और डिस्ट्रक्टर रन करना", "अनइनिशियलाइज्ड मेमोरी ड्रॉप करना", "डिस्ट्रक्शन रोकना", "सेफ ड्रॉप ऑपरेशन"],
        "answer_en": "Assume initialized and run destructor",
        "answer_hi": "इनिशियलाइज्ड मानना और डिस्ट्रक्टर रन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What does the `core::sync::atomic::AtomicIsize::fetch_add` with `Ordering::Relaxed` guarantee?",
        "question_hi": "`Ordering::Relaxed` के साथ `core::sync::atomic::AtomicIsize::fetch_add` क्या गारंटी देता है?",
        "options_en": ["Only atomicity, no ordering guarantees", "Sequential consistency", "Acquire-release semantics", "Thread-local ordering"],
        "options_hi": ["केवल एटॉमिसिटी, कोई ऑर्डरिंग गारंटी नहीं", "सीक्वेंशियल कंसिस्टेंसी", "एक्वायर-रिलीज सेमैंटिक्स", "थ्रेड-लोकल ऑर्डरिंग"],
        "answer_en": "Only atomicity, no ordering guarantees",
        "answer_hi": "केवल एटॉमिसिटी, कोई ऑर्डरिंग गारंटी नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of the `#[cfg(not(no_builtin_macros))]` attribute?",
        "question_hi": "`#[cfg(not(no_builtin_macros))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation when builtin macros are available", "Disable builtin macros", "Enable macro system", "Compiler macro support"],
        "options_hi": ["बिल्टइन मैक्रोस उपलब्ध होने पर कंडीशनल कंपाइलेशन", "बिल्टइन मैक्रोस डिसेबल करना", "मैक्रो सिस्टम एनेबल करना", "कंपाइलर मैक्रो सपोर्ट"],
        "answer_en": "Conditional compilation when builtin macros are available",
        "answer_hi": "बिल्टइन मैक्रोस उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What does the `core::arch::x86_64::_mm_mul_ps` intrinsic compute?",
        "question_hi": "`core::arch::x86_64::_mm_mul_ps` इंट्रिन्सिक क्या कंप्यूट करता है?",
        "options_en": ["Multiply packed single-precision floats", "Multiply integers", "Vector multiplication", "Float arithmetic"],
        "options_hi": ["पैक्ड सिंगल-प्रिसिजन फ्लोट्स मल्टीप्लाई करना", "इंटीजर्स मल्टीप्लाई करना", "वेक्टर मल्टीप्लिकेशन", "फ्लोट अर्थमैटिक"],
        "answer_en": "Multiply packed single-precision floats",
        "answer_hi": "पैक्ड सिंगल-प्रिसिजन फ्लोट्स मल्टीप्लाई करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicU8::compare_exchange_weak`?",
        "question_hi": "`core::sync::atomic::AtomicU8::compare_exchange_weak` का उद्देश्य क्या है?",
        "options_en": ["Atomic compare-and-swap that may fail spuriously", "Weak comparison", "Non-atomic exchange", "Relaxed ordering only"],
        "options_hi": ["एटॉमिक कम्पेयर-एंड-स्वैप जो स्प्यूरियसली फेल हो सकता है", "वीक कम्पेयरिजन", "नॉन-एटॉमिक एक्सचेंज", "केवल रिलैक्स्ड ऑर्डरिंग"],
        "answer_en": "Atomic compare-and-swap that may fail spuriously",
        "answer_hi": "एटॉमिक कम्पेयर-एंड-स्वैप जो स्प्यूरियसली फेल हो सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What does the `#[cfg(not(no_derive))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_derive))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Conditional compilation when derive macros are available", "Disable derive macros", "Enable trait derivation", "Automatic derivation"],
        "options_hi": ["डेराइव मैक्रोस उपलब्ध होने पर कंडीशनल कंपाइलेशन", "डेराइव मैक्रोस डिसेबल करना", "ट्रेट डेरिवेशन एनेबल करना", "ऑटोमैटिक डेरिवेशन"],
        "answer_en": "Conditional compilation when derive macros are available",
        "answer_hi": "डेराइव मैक्रोस उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of the `core::mem::MaybeUninit::slice_as_mut_ptr` method?",
        "question_hi": "`core::mem::MaybeUninit::slice_as_mut_ptr` मेथड का उद्देश्य क्या है?",
        "options_en": ["Get mutable raw pointer to slice of MaybeUninit", "Convert slice to pointer", "Get slice data pointer", "Mutable slice access"],
        "options_hi": ["MaybeUninit के स्लाइस का म्यूटेबल रॉ पॉइंटर प्राप्त करना", "स्लाइस को पॉइंटर में कन्वर्ट करना", "स्लाइस डेटा पॉइंटर प्राप्त करना", "म्यूटेबल स्लाइस एक्सेस"],
        "answer_en": "Get mutable raw pointer to slice of MaybeUninit",
        "answer_hi": "MaybeUninit के स्लाइस का म्यूटेबल रॉ पॉइंटर प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What does the `core::sync::atomic::AtomicI16::fetch_xor` method provide?",
        "question_hi": "`core::sync::atomic::AtomicI16::fetch_xor` मेथड क्या प्रदान करता है?",
        "options_en": ["Atomic XOR operation returning previous value", "Bitwise XOR", "Logical XOR", "Exclusive OR operation"],
        "options_hi": ["पिछली वैल्यू रिटर्न करते हुए एटॉमिक XOR ऑपरेशन", "बिटवाइज XOR", "लॉजिकल XOR", "एक्सक्लूसिव OR ऑपरेशन"],
        "answer_en": "Atomic XOR operation returning previous value",
        "answer_hi": "पिछली वैल्यू रिटर्न करते हुए एटॉमिक XOR ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of the `#[cfg(target_os = \"none\")]` attribute?",
        "question_hi": "`#[cfg(target_os = \"none\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation for bare-metal systems", "No operating system", "Embedded systems", "Kernel development"],
        "options_hi": ["बेयर-मेटल सिस्टम्स के लिए कंडीशनल कंपाइलेशन", "कोई ऑपरेटिंग सिस्टम नहीं", "एम्बेडेड सिस्टम्स", "करनेल डेवलपमेंट"],
        "answer_en": "Conditional compilation for bare-metal systems",
        "answer_hi": "बेयर-मेटल सिस्टम्स के लिए कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does the `core::arch::x86_64::_mm_testz_si128` intrinsic test?",
        "question_hi": "`core::arch::x86_64::_mm_testz_si128` इंट्रिन्सिक क्या टेस्ट करता है?",
        "options_en": ["Test if all bits in SIMD vector are zero", "Test for zero values", "Check vector equality", "Bitwise zero test"],
        "options_hi": ["टेस्ट करना कि SIMD वेक्टर में सभी बिट्स जीरो हैं", "जीरो वैल्यूज के लिए टेस्ट करना", "वेक्टर इक्वलिटी चेक करना", "बिटवाइज जीरो टेस्ट"],
        "answer_en": "Test if all bits in SIMD vector are zero",
        "answer_hi": "टेस्ट करना कि SIMD वेक्टर में सभी बिट्स जीरो हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicBool::as_mut_ptr` method?",
        "question_hi": "`core::sync::atomic::AtomicBool::as_mut_ptr` मेथड का उद्देश्य क्या है?",
        "options_en": ["Get mutable raw pointer to underlying bool", "Convert to pointer", "Get atomic address", "Mutable atomic access"],
        "options_hi": ["अंडरलाइंग bool का म्यूटेबल रॉ पॉइंटर प्राप्त करना", "पॉइंटर में कन्वर्ट करना", "एटॉमिक एड्रेस प्राप्त करना", "म्यूटेबल एटॉमिक एक्सेस"],
        "answer_en": "Get mutable raw pointer to underlying bool",
        "answer_hi": "अंडरलाइंग bool का म्यूटेबल रॉ पॉइंटर प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What does the `#[cfg(not(no_unsafe_op_in_unsafe_fn))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_unsafe_op_in_unsafe_fn))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Conditional compilation when unsafe ops in unsafe fns are allowed", "Disable unsafe operations", "Enable unsafe blocks", "Safety checking"],
        "options_hi": ["अनसेफ फंक्शन्स में अनसेफ ऑपरेशन्स की अनुमति होने पर कंडीशनल कंपाइलेशन", "अनसेफ ऑपरेशन्स डिसेबल करना", "अनसेफ ब्लॉक्स एनेबल करना", "सेफ्टी चेकिंग"],
        "answer_en": "Conditional compilation when unsafe ops in unsafe fns are allowed",
        "answer_hi": "अनसेफ फंक्शन्स में अनसेफ ऑपरेशन्स की अनुमति होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of the `core::arch::x86_64::_mm256_setzero_si256` intrinsic?",
        "question_hi": "`core::arch::x86_64::_mm256_setzero_si256` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Create 256-bit SIMD vector of zeros", "Zero memory region", "Initialize vector to zero", "Clear SIMD register"],
        "options_hi": ["जीरोस का 256-बिट SIMD वेक्टर बनाना", "मेमोरी रीजन जीरो करना", "वेक्टर को जीरो से इनिशियलाइज़ करना", "SIMD रजिस्टर क्लियर करना"],
        "answer_en": "Create 256-bit SIMD vector of zeros",
        "answer_hi": "जीरोस का 256-बिट SIMD वेक्टर बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What does the `core::sync::atomic::AtomicU32::fetch_and` method return?",
        "question_hi": "`core::sync::atomic::AtomicU32::fetch_and` मेथड क्या रिटर्न करता है?",
        "options_en": ["Previous value before the AND operation", "New value after AND", "Always returns 0", "The AND result"],
        "options_hi": ["AND ऑपरेशन से पहले की पिछली वैल्यू", "AND के बाद की नई वैल्यू", "हमेशा 0 रिटर्न करता है", "AND रिजल्ट"],
        "answer_en": "Previous value before the AND operation",
        "answer_hi": "AND ऑपरेशन से पहले की पिछली वैल्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of the `#[cfg(not(no_global_oom_handling))]` attribute?",
        "question_hi": "`#[cfg(not(no_global_oom_handling))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation when global OOM handling is available", "Disable OOM handling", "Enable custom allocator", "Memory management"],
        "options_hi": ["ग्लोबल OOM हैंडलिंग उपलब्ध होने पर कंडीशनल कंपाइलेशन", "OOM हैंडलिंग डिसेबल करना", "कस्टम अलोकेटर एनेबल करना", "मेमोरी मैनेजमेंट"],
        "answer_en": "Conditional compilation when global OOM handling is available",
        "answer_hi": "ग्लोबल OOM हैंडलिंग उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What does the `core::arch::x86_64::_mm_cmpgt_epi8` intrinsic compare?",
        "question_hi": "`core::arch::x86_64::_mm_cmpgt_epi8` इंट्रिन्सिक क्या तुलना करता है?",
        "options_en": ["Compare packed 8-bit integers for greater than", "Compare floats", "Vector comparison", "Integer greater than"],
        "options_hi": ["पैक्ड 8-बिट इंटीजर्स की ग्रेटर दैन के लिए तुलना करना", "फ्लोट्स की तुलना करना", "वेक्टर कम्पेयरिजन", "इंटीजर ग्रेटर दैन"],
        "answer_en": "Compare packed 8-bit integers for greater than",
        "answer_hi": "पैक्ड 8-बिट इंटीजर्स की ग्रेटर दैन के लिए तुलना करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicPtr::from_mut` method?",
        "question_hi": "`core::sync::atomic::AtomicPtr::from_mut` मेथड का उद्देश्य क्या है?",
        "options_en": ["Create AtomicPtr from mutable reference to pointer", "Convert from mutable pointer", "Get atomic from mutable", "Mutable atomic creation"],
        "options_hi": ["पॉइंटर के म्यूटेबल रेफरेंस से AtomicPtr बनाना", "म्यूटेबल पॉइंटर से कन्वर्ट करना", "म्यूटेबल से एटॉमिक प्राप्त करना", "म्यूटेबल एटॉमिक क्रिएशन"],
        "answer_en": "Create AtomicPtr from mutable reference to pointer",
        "answer_hi": "पॉइंटर के म्यूटेबल रेफरेंस से AtomicPtr बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What does the `#[cfg(not(no_borrow))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_borrow))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Conditional compilation when borrow checker is available", "Disable borrowing", "Enable reference system", "Ownership system"],
        "options_hi": ["बोरो चेकर उपलब्ध होने पर कंडीशनल कंपाइलेशन", "बोरोइंग डिसेबल करना", "रिफरेंस सिस्टम एनेबल करना", "ओनरशिप सिस्टम"],
        "answer_en": "Conditional compilation when borrow checker is available",
        "answer_hi": "बोरो चेकर उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of the `core::arch::x86_64::_mm_store_si128` intrinsic?",
        "question_hi": "`core::arch::x86_64::_mm_store_si128` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Store 128-bit SIMD vector to aligned memory", "Store to unaligned memory", "Save vector data", "Memory store operation"],
        "options_hi": ["अलाइन्ड मेमोरी में 128-बिट SIMD वेक्टर स्टोर करना", "अनअलाइन्ड मेमोरी में स्टोर करना", "वेक्टर डेटा सेव करना", "मेमोरी स्टोर ऑपरेशन"],
        "answer_en": "Store 128-bit SIMD vector to aligned memory",
        "answer_hi": "अलाइन्ड मेमोरी में 128-बिट SIMD वेक्टर स्टोर करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What does the `core::sync::atomic::AtomicI8::fetch_or` method provide?",
        "question_hi": "`core::sync::atomic::AtomicI8::fetch_or` मेथड क्या प्रदान करता है?",
        "options_en": ["Atomic OR operation returning previous value", "Bitwise OR", "Logical OR", "Inclusive OR operation"],
        "options_hi": ["पिछली वैल्यू रिटर्न करते हुए एटॉमिक OR ऑपरेशन", "बिटवाइज OR", "लॉजिकल OR", "इनक्लूसिव OR ऑपरेशन"],
        "answer_en": "Atomic OR operation returning previous value",
        "answer_hi": "पिछली वैल्यू रिटर्न करते हुए एटॉमिक OR ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of the `#[cfg(target_env = \"msvc\")]` attribute?",
        "question_hi": "`#[cfg(target_env = \"msvc\")]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation for MSVC toolchain", "Windows development", "Visual Studio compatibility", "Microsoft ecosystem"],
        "options_hi": ["MSVC टूलचेन के लिए कंडीशनल कंपाइलेशन", "विंडोज डेवलपमेंट", "विजुअल स्टूडियो कम्पैटिबिलिटी", "माइक्रोसॉफ्ट इकोसिस्टम"],
        "answer_en": "Conditional compilation for MSVC toolchain",
        "answer_hi": "MSVC टूलचेन के लिए कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What does the `core::arch::x86_64::_mm_slli_epi16` intrinsic do?",
        "question_hi": "`core::arch::x86_64::_mm_slli_epi16` इंट्रिन्सिक क्या करता है?",
        "options_en": ["Shift packed 16-bit integers left by specified count", "Shift left logical", "Vector shift", "Integer shift"],
        "options_hi": ["पैक्ड 16-बिट इंटीजर्स को स्पेसिफाइड काउंट से लेफ्ट शिफ्ट करना", "लेफ्ट लॉजिकल शिफ्ट", "वेक्टर शिफ्ट", "इंटीजर शिफ्ट"],
        "answer_en": "Shift packed 16-bit integers left by specified count",
        "answer_hi": "पैक्ड 16-बिट इंटीजर्स को स्पेसिफाइड काउंट से लेफ्ट शिफ्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicU128::new` method?",
        "question_hi": "`core::sync::atomic::AtomicU128::new` मेथड का उद्देश्य क्या है?",
        "options_en": ["Create new AtomicU128 with initial value", "Initialize atomic", "Atomic constructor", "128-bit atomic creation"],
        "options_hi": ["इनिशियल वैल्यू के साथ नया AtomicU128 बनाना", "एटॉमिक इनिशियलाइज़ करना", "एटॉमिक कंस्ट्रक्टर", "128-बिट एटॉमिक क्रिएशन"],
        "answer_en": "Create new AtomicU128 with initial value",
        "answer_hi": "इनिशियल वैल्यू के साथ नया AtomicU128 बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What does the `#[cfg(not(no_default_lib_allocator))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_default_lib_allocator))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Conditional compilation when default lib allocator is available", "Disable default allocator", "Enable custom allocator", "Memory allocator system"],
        "options_hi": ["डिफॉल्ट लाइब अलोकेटर उपलब्ध होने पर कंडीशनल कंपाइलेशन", "डिफॉल्ट अलोकेटर डिसेबल करना", "कस्टम अलोकेटर एनेबल करना", "मेमोरी अलोकेटर सिस्टम"],
        "answer_en": "Conditional compilation when default lib allocator is available",
        "answer_hi": "डिफॉल्ट लाइब अलोकेटर उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of the `core::arch::x86_64::_mm256_add_pd` intrinsic?",
        "question_hi": "`core::arch::x86_64::_mm256_add_pd` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Add packed double-precision floats in 256-bit vector", "Add doubles", "Vector float addition", "Double arithmetic"],
        "options_hi": ["256-बिट वेक्टर में पैक्ड डबल-प्रिसिजन फ्लोट्स एड करना", "डबल्स एड करना", "वेक्टर फ्लोट एडिशन", "डबल अर्थमैटिक"],
        "answer_en": "Add packed double-precision floats in 256-bit vector",
        "answer_hi": "256-बिट वेक्टर में पैक्ड डबल-प्रिसिजन फ्लोट्स एड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What does the `core::sync::atomic::AtomicBool::store` with `Ordering::Release` ensure?",
        "question_hi": "`Ordering::Release` के साथ `core::sync::atomic::AtomicBool::store` क्या सुनिश्चित करता है?",
        "options_en": ["Previous operations complete before this store is visible", "Subsequent operations complete after", "All operations are ordered", "Only atomicity"],
        "options_hi": ["प्रीवियस ऑपरेशन्स इस स्टोर के विजिबल होने से पहले कंप्लीट हो जाते हैं", "सब्सीक्वेंट ऑपरेशन्स इसके बाद कंप्लीट होते हैं", "सभी ऑपरेशन्स ऑर्डर्ड हैं", "केवल एटॉमिसिटी"],
        "answer_en": "Previous operations complete before this store is visible",
        "answer_hi": "प्रीवियस ऑपरेशन्स इस स्टोर के विजिबल होने से पहले कंप्लीट हो जाते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of the `#[cfg(not(no_default_lib_allocator_type))]` attribute?",
        "question_hi": "`#[cfg(not(no_default_lib_allocator_type))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation when default allocator type is available", "Disable allocator types", "Enable memory types", "Allocator system"],
        "options_hi": ["डिफॉल्ट अलोकेटर टाइप उपलब्ध होने पर कंडीशनल कंपाइलेशन", "अलोकेटर टाइप्स डिसेबल करना", "मेमोरी टाइप्स एनेबल करना", "अलोकेटर सिस्टम"],
        "answer_en": "Conditional compilation when default allocator type is available",
        "answer_hi": "डिफॉल्ट अलोकेटर टाइप उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What does the `core::arch::x86_64::_mm_extract_epi16` intrinsic extract?",
        "question_hi": "`core::arch::x86_64::_mm_extract_epi16` इंट्रिन्सिक क्या एक्सट्रैक्ट करता है?",
        "options_en": ["Extract specified 16-bit integer from SIMD vector", "Extract element", "Get vector component", "Integer extraction"],
        "options_hi": ["SIMD वेक्टर से स्पेसिफाइड 16-बिट इंटीजर एक्सट्रैक्ट करना", "एलिमेंट एक्सट्रैक्ट करना", "वेक्टर कंपोनेंट प्राप्त करना", "इंटीजर एक्सट्रैक्शन"],
        "answer_en": "Extract specified 16-bit integer from SIMD vector",
        "answer_hi": "SIMD वेक्टर से स्पेसिफाइड 16-बिट इंटीजर एक्सट्रैक्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicIsize::into_inner` method?",
        "question_hi": "`core::sync::atomic::AtomicIsize::into_inner` मेथड का उद्देश्य क्या है?",
        "options_en": ["Consume AtomicIsize and return the inner isize", "Get inner value", "Convert to regular isize", "Extract atomic value"],
        "options_hi": ["AtomicIsize को कंज्यूम करना और इनर isize रिटर्न करना", "इनर वैल्यू प्राप्त करना", "रेगुलर isize में कन्वर्ट करना", "एटॉमिक वैल्यू एक्सट्रैक्ट करना"],
        "answer_en": "Consume AtomicIsize and return the inner isize",
        "answer_hi": "AtomicIsize को कंज्यूम करना और इनर isize रिटर्न करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What does the `#[cfg(not(no_default_lib_allocator_fn))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_default_lib_allocator_fn))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Conditional compilation when default allocator functions are available", "Disable allocator functions", "Enable memory functions", "Allocation system"],
        "options_hi": ["डिफॉल्ट अलोकेटर फंक्शन्स उपलब्ध होने पर कंडीशनल कंपाइलेशन", "अलोकेटर फंक्शन्स डिसेबल करना", "मेमोरी फंक्शन्स एनेबल करना", "अलोकेशन सिस्टम"],
        "answer_en": "Conditional compilation when default allocator functions are available",
        "answer_hi": "डिफॉल्ट अलोकेटर फंक्शन्स उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of the `core::arch::x86_64::_mm256_set1_epi32` intrinsic?",
        "question_hi": "`core::arch::x86_64::_mm256_set1_epi32` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Create 256-bit SIMD vector with all 32-bit integers set to same value", "Set vector elements", "Initialize with pattern", "Broadcast value"],
        "options_hi": ["सभी 32-बिट इंटीजर्स को समान वैल्यू पर सेट करके 256-बिट SIMD वेक्टर बनाना", "वेक्टर एलिमेंट्स सेट करना", "पैटर्न के साथ इनिशियलाइज़ करना", "वैल्यू ब्रॉडकास्ट करना"],
        "answer_en": "Create 256-bit SIMD vector with all 32-bit integers set to same value",
        "answer_hi": "सभी 32-बिट इंटीजर्स को समान वैल्यू पर सेट करके 256-बिट SIMD वेक्टर बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What does the `core::sync::atomic::AtomicU8::from_mut` method create?",
        "question_hi": "`core::sync::atomic::AtomicU8::from_mut` मेथड क्या बनाता है?",
        "options_en": ["AtomicU8 from mutable reference to u8", "Convert from mutable u8", "Get atomic from mutable", "Mutable atomic wrapper"],
        "options_hi": ["u8 के म्यूटेबल रेफरेंस से AtomicU8 बनाना", "म्यूटेबल u8 से कन्वर्ट करना", "म्यूटेबल से एटॉमिक प्राप्त करना", "म्यूटेबल एटॉमिक रैपर"],
        "answer_en": "AtomicU8 from mutable reference to u8",
        "answer_hi": "u8 के म्यूटेबल रेफरेंस से AtomicU8 बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of the `#[cfg(not(no_default_lib_allocator_macro))]` attribute?",
        "question_hi": "`#[cfg(not(no_default_lib_allocator_macro))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation when default allocator macros are available", "Disable allocator macros", "Enable memory macros", "Macro system"],
        "options_hi": ["डिफॉल्ट अलोकेटर मैक्रोस उपलब्ध होने पर कंडीशनल कंपाइलेशन", "अलोकेटर मैक्रोस डिसेबल करना", "मेमोरी मैक्रोस एनेबल करना", "मैक्रो सिस्टम"],
        "answer_en": "Conditional compilation when default allocator macros are available",
        "answer_hi": "डिफॉल्ट अलोकेटर मैक्रोस उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What does the `core::arch::x86_64::_mm_movemask_epi8` intrinsic create?",
        "question_hi": "`core::arch::x86_64::_mm_movemask_epi8` इंट्रिन्सिक क्या बनाता है?",
        "options_en": ["Bitmask from most significant bits of 8-bit elements", "Create mask", "Extract sign bits", "Bitmask generation"],
        "options_hi": ["8-बिट एलिमेंट्स के मोस्ट सिग्निफिकेंट बिट्स से बिटमास्क बनाना", "मास्क बनाना", "साइन बिट्स एक्सट्रैक्ट करना", "बिटमास्क जनरेशन"],
        "answer_en": "Bitmask from most significant bits of 8-bit elements",
        "answer_hi": "8-बिट एलिमेंट्स के मोस्ट सिग्निफिकेंट बिट्स से बिटमास्क बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicI64::as_ptr` method?",
        "question_hi": "`core::sync::atomic::AtomicI64::as_ptr` मेथड का उद्देश्य क्या है?",
        "options_en": ["Get raw pointer to underlying i64", "Convert to pointer", "Get atomic address", "Pointer access"],
        "options_hi": ["अंडरलाइंग i64 का रॉ पॉइंटर प्राप्त करना", "पॉइंटर में कन्वर्ट करना", "एटॉमिक एड्रेस प्राप्त करना", "पॉइंटर एक्सेस"],
        "answer_en": "Get raw pointer to underlying i64",
        "answer_hi": "अंडरलाइंग i64 का रॉ पॉइंटर प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What does the `#[cfg(not(no_default_lib_allocator_const_fn))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_default_lib_allocator_const_fn))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Conditional compilation when const allocator functions are available", "Disable const allocators", "Enable const memory", "Const allocation"],
        "options_hi": ["कॉन्स्ट अलोकेटर फंक्शन्स उपलब्ध होने पर कंडीशनल कंपाइलेशन", "कॉन्स्ट अलोकेटर्स डिसेबल करना", "कॉन्स्ट मेमोरी एनेबल करना", "कॉन्स्ट अलोकेशन"],
        "answer_en": "Conditional compilation when const allocator functions are available",
        "answer_hi": "कॉन्स्ट अलोकेटर फंक्शन्स उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of the `core::arch::x86_64::_mm256_cmp_ps` intrinsic?",
        "question_hi": "`core::arch::x86_64::_mm256_cmp_ps` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Compare packed single-precision floats in 256-bit vector", "Compare floats", "Vector comparison", "Float comparison"],
        "options_hi": ["256-बिट वेक्टर में पैक्ड सिंगल-प्रिसिजन फ्लोट्स की तुलना करना", "फ्लोट्स की तुलना करना", "वेक्टर कम्पेयरिजन", "फ्लोट कम्पेयरिजन"],
        "answer_en": "Compare packed single-precision floats in 256-bit vector",
        "answer_hi": "256-बिट वेक्टर में पैक्ड सिंगल-प्रिसिजन फ्लोट्स की तुलना करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What does the `core::sync::atomic::AtomicUsize::fetch_update` with `Ordering::SeqCst` guarantee?",
        "question_hi": "`Ordering::SeqCst` के साथ `core::sync::atomic::AtomicUsize::fetch_update` क्या गारंटी देता है?",
        "options_en": ["Strongest ordering for atomic update operation", "Weak ordering", "Acquire-release only", "Thread-local consistency"],
        "options_hi": ["एटॉमिक अपडेट ऑपरेशन के लिए सबसे मजबूत ऑर्डरिंग", "वीक ऑर्डरिंग", "केवल एक्वायर-रिलीज", "थ्रेड-लोकल कंसिस्टेंसी"],
        "answer_en": "Strongest ordering for atomic update operation",
        "answer_hi": "एटॉमिक अपडेट ऑपरेशन के लिए सबसे मजबूत ऑर्डरिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of the `#[cfg(not(no_default_lib_allocator_static))]` attribute?",
        "question_hi": "`#[cfg(not(no_default_lib_allocator_static))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation when static allocator is available", "Disable static allocator", "Enable static memory", "Static allocation"],
        "options_hi": ["स्टैटिक अलोकेटर उपलब्ध होने पर कंडीशनल कंपाइलेशन", "स्टैटिक अलोकेटर डिसेबल करना", "स्टैटिक मेमोरी एनेबल करना", "स्टैटिक अलोकेशन"],
        "answer_en": "Conditional compilation when static allocator is available",
        "answer_hi": "स्टैटिक अलोकेटर उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What does the `core::arch::x86_64::_mm256_permutevar8x32_epi32` intrinsic do?",
        "question_hi": "`core::arch::x86_64::_mm256_permutevar8x32_epi32` इंट्रिन्सिक क्या करता है?",
        "options_en": ["Permute 32-bit integers in 256-bit vector using index vector", "Permute elements", "Rearrange vector", "Index-based permutation"],
        "options_hi": ["इंडेक्स वेक्टर का उपयोग करके 256-बिट वेक्टर में 32-बिट इंटीजर्स को परम्यूट करना", "एलिमेंट्स परम्यूट करना", "वेक्टर रीअरेंज करना", "इंडेक्स-बेस्ड परम्यूटेशन"],
        "answer_en": "Permute 32-bit integers in 256-bit vector using index vector",
        "answer_hi": "इंडेक्स वेक्टर का उपयोग करके 256-बिट वेक्टर में 32-बिट इंटीजर्स को परम्यूट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicPtr::compare_exchange`?",
        "question_hi": "`core::sync::atomic::AtomicPtr::compare_exchange` का उद्देश्य क्या है?",
        "options_en": ["Atomic compare-and-swap for pointer values", "Compare pointers", "Exchange pointer values", "Pointer atomic operation"],
        "options_hi": ["पॉइंटर वैल्यूज के लिए एटॉमिक कम्पेयर-एंड-स्वैप", "पॉइंटर्स की तुलना करना", "पॉइंटर वैल्यूज एक्सचेंज करना", "पॉइंटर एटॉमिक ऑपरेशन"],
        "answer_en": "Atomic compare-and-swap for pointer values",
        "answer_hi": "पॉइंटर वैल्यूज के लिए एटॉमिक कम्पेयर-एंड-स्वैप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What does the `#[cfg(not(no_default_lib_allocator_impl))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_default_lib_allocator_impl))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Conditional compilation when default allocator implementation is available", "Disable allocator impl", "Enable memory impl", "Implementation system"],
        "options_hi": ["डिफॉल्ट अलोकेटर इम्प्लीमेंटेशन उपलब्ध होने पर कंडीशनल कंपाइलेशन", "अलोकेटर इम्प्लीमेंटेशन डिसेबल करना", "मेमोरी इम्प्लीमेंटेशन एनेबल करना", "इम्प्लीमेंटेशन सिस्टम"],
        "answer_en": "Conditional compilation when default allocator implementation is available",
        "answer_hi": "डिफॉल्ट अलोकेटर इम्प्लीमेंटेशन उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of the `core::arch::x86_64::_mm256_blendv_ps` intrinsic?",
        "question_hi": "`core::arch::x86_64::_mm256_blendv_ps` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Blend single-precision floats from two vectors using mask", "Blend vectors", "Conditional selection", "Mask-based blending"],
        "options_hi": ["मास्क का उपयोग करके दो वेक्टर्स से सिंगल-प्रिसिजन फ्लोट्स ब्लेंड करना", "वेक्टर्स ब्लेंड करना", "कंडीशनल सिलेक्शन", "मास्क-बेस्ड ब्लेंडिंग"],
        "answer_en": "Blend single-precision floats from two vectors using mask",
        "answer_hi": "मास्क का उपयोग करके दो वेक्टर्स से सिंगल-प्रिसिजन फ्लोट्स ब्लेंड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What does the `core::sync::atomic::AtomicBool::get_mut_slice` method provide?",
        "question_hi": "`core::sync::atomic::AtomicBool::get_mut_slice` मेथड क्या प्रदान करता है?",
        "options_en": ["Mutable slice to slice of AtomicBool", "Get slice of booleans", "Convert to boolean slice", "Slice atomic access"],
        "options_hi": ["AtomicBool के स्लाइस का म्यूटेबल स्लाइस", "बूलियन्स का स्लाइस प्राप्त करना", "बूलियन स्लाइस में कन्वर्ट करना", "स्लाइस एटॉमिक एक्सेस"],
        "answer_en": "Mutable slice to slice of AtomicBool",
        "answer_hi": "AtomicBool के स्लाइस का म्यूटेबल स्लाइस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of the `#[cfg(not(no_default_lib_allocator_trait))]` attribute?",
        "question_hi": "`#[cfg(not(no_default_lib_allocator_trait))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation when default allocator trait is available", "Disable allocator trait", "Enable memory trait", "Trait system"],
        "options_hi": ["डिफॉल्ट अलोकेटर ट्रेट उपलब्ध होने पर कंडीशनल कंपाइलेशन", "अलोकेटर ट्रेट डिसेबल करना", "मेमोरी ट्रेट एनेबल करना", "ट्रेट सिस्टम"],
        "answer_en": "Conditional compilation when default allocator trait is available",
        "answer_hi": "डिफॉल्ट अलोकेटर ट्रेट उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What does the `core::arch::x86_64::_mm256_sqrt_pd` intrinsic compute?",
        "question_hi": "`core::arch::x86_64::_mm256_sqrt_pd` इंट्रिन्सिक क्या कंप्यूट करता है?",
        "options_en": ["Square root of packed double-precision floats", "Square root of doubles", "Vector square root", "Double math"],
        "options_hi": ["पैक्ड डबल-प्रिसिजन फ्लोट्स का स्क्वायर रूट", "डबल्स का स्क्वायर रूट", "वेक्टर स्क्वायर रूट", "डबल मैथ"],
        "answer_en": "Square root of packed double-precision floats",
        "answer_hi": "पैक्ड डबल-प्रिसिजन फ्लोट्स का स्क्वायर रूट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of the `core::sync::atomic::AtomicIsize::from_mut_slice` method?",
        "question_hi": "`core::sync::atomic::AtomicIsize::from_mut_slice` मेथड का उद्देश्य क्या है?",
        "options_en": ["Create slice of AtomicIsize from mutable slice of isize", "Convert from mutable slice", "Get atomic slice", "Mutable atomic conversion"],
        "options_hi": ["isize के म्यूटेबल स्लाइस से AtomicIsize का स्लाइस बनाना", "म्यूटेबल स्लाइस से कन्वर्ट करना", "एटॉमिक स्लाइस प्राप्त करना", "म्यूटेबल एटॉमिक कन्वर्जन"],
        "answer_en": "Create slice of AtomicIsize from mutable slice of isize",
        "answer_hi": "isize के म्यूटेबल स्लाइस से AtomicIsize का स्लाइस बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What does the `#[cfg(not(no_default_lib_allocator_global))]` attribute enable?",
        "question_hi": "`#[cfg(not(no_default_lib_allocator_global))]` एट्रिब्यूट क्या एनेबल करता है?",
        "options_en": ["Conditional compilation when global allocator is available", "Disable global allocator", "Enable global memory", "Global allocation"],
        "options_hi": ["ग्लोबल अलोकेटर उपलब्ध होने पर कंडीशनल कंपाइलेशन", "ग्लोबल अलोकेटर डिसेबल करना", "ग्लोबल मेमोरी एनेबल करना", "ग्लोबल अलोकेशन"],
        "answer_en": "Conditional compilation when global allocator is available",
        "answer_hi": "ग्लोबल अलोकेटर उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of the `core::arch::x86_64::_mm256_fmadd_ps` intrinsic?",
        "question_hi": "`core::arch::x86_64::_mm256_fmadd_ps` इंट्रिन्सिक का उद्देश्य क्या है?",
        "options_en": ["Fused multiply-add of packed single-precision floats", "Fused math operation", "Vector FMA", "Float FMA"],
        "options_hi": ["पैक्ड सिंगल-प्रिसिजन फ्लोट्स का फ्यूज्ड मल्टीप्लाई-एड", "फ्यूज्ड मैथ ऑपरेशन", "वेक्टर FMA", "फ्लोट FMA"],
        "answer_en": "Fused multiply-add of packed single-precision floats",
        "answer_hi": "पैक्ड सिंगल-प्रिसिजन फ्लोट्स का फ्यूज्ड मल्टीप्लाई-एड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What does the `core::sync::atomic::AtomicU16::as_mut_slice` method return?",
        "question_hi": "`core::sync::atomic::AtomicU16::as_mut_slice` मेथड क्या रिटर्न करता है?",
        "options_en": ["Mutable slice to slice of AtomicU16", "Get slice of u16", "Convert to u16 slice", "Slice atomic access"],
        "options_hi": ["AtomicU16 के स्लाइस का म्यूटेबल स्लाइस", "u16 का स्लाइस प्राप्त करना", "u16 स्लाइस में कन्वर्ट करना", "स्लाइस एटॉमिक एक्सेस"],
        "answer_en": "Mutable slice to slice of AtomicU16",
        "answer_hi": "AtomicU16 के स्लाइस का म्यूटेबल स्लाइस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of the `#[cfg(not(no_default_lib_allocator_boxed))]` attribute?",
        "question_hi": "`#[cfg(not(no_default_lib_allocator_boxed))]` एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation when Box allocator is available", "Disable Box allocator", "Enable boxed memory", "Box allocation"],
        "options_hi": ["Box अलोकेटर उपलब्ध होने पर कंडीशनल कंपाइलेशन", "Box अलोकेटर डिसेबल करना", "बॉक्स्ड मेमोरी एनेबल करना", "Box अलोकेशन"],
        "answer_en": "Conditional compilation when Box allocator is available",
        "answer_hi": "Box अलोकेटर उपलब्ध होने पर कंडीशनल कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What does the `core::arch::x86_64::_mm256_round_ps` intrinsic do?",
        "question_hi": "`core::arch::x86_64::_mm256_round_ps` इंट्रिन्सिक क्या करता है?",
        "options_en": ["Round packed single-precision floats to nearest integer", "Round floats", "Vector rounding", "Float rounding"],
        "options_hi": ["पैक्ड सिंगल-प्रिसिजन फ्लोट्स को नियरेस्ट इंटीजर में राउंड करना", "फ्लोट्स राउंड करना", "वेक्टर राउंडिंग", "फ्लोट राउंडिंग"],
        "answer_en": "Round packed single-precision floats to nearest integer",
        "answer_hi": "पैक्ड सिंगल-प्रिसिजन फ्लोट्स को नियरेस्ट इंटीजर में राउंड करना",
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