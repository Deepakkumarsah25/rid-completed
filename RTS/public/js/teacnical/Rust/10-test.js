const questions = [
    {
        "num": 1,
        "question_en": "What is the primary purpose of Rust's 'std::mem::forget' function?",
        "question_hi": "Rust के 'std::mem::forget' फ़ंक्शन का प्राथमिक उद्देश्य क्या है?",
        "options_en": ["Prevent running destructors", "Clear memory immediately", "Forget variable values", "Free memory manually"],
        "options_hi": ["डिस्ट्रक्टर्स को चलने से रोकना", "मेमोरी को तुरंत साफ करना", "वेरिएबल वैल्यू भूलना", "मेमोरी को मैन्युअल रूप से मुक्त करना"],
        "answer_en": "Prevent running destructors",
        "answer_hi": "डिस्ट्रक्टर्स को चलने से रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "In Rust, what does 'Sized' trait guarantee about a type?",
        "question_hi": "Rust में, 'Sized' ट्रेट किसी प्रकार के बारे में क्या गारंटी देता है?",
        "options_en": ["Compile-time known size", "Runtime size information", "Fixed memory allocation", "Stack allocation only"],
        "options_hi": ["कंपाइल-टाइम ज्ञात आकार", "रनटाइम आकार जानकारी", "फिक्स्ड मेमोरी आवंटन", "केवल स्टैक आवंटन"],
        "answer_en": "Compile-time known size",
        "answer_hi": "कंपाइल-टाइम ज्ञात आकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the role of 'std::marker::PhantomData' in Rust?",
        "question_hi": "Rust में 'std::marker::PhantomData' की क्या भूमिका है?",
        "options_en": ["Mark unused type parameters", "Create ghost data structures", "Optimize memory layout", "Enable zero-sized types"],
        "options_hi": ["अनउपयोगी प्रकार पैरामीटर्स को चिह्नित करना", "भूत डेटा संरचनाएँ बनाना", "मेमोरी लेआउट अनुकूलित करना", "शून्य-आकार प्रकार सक्षम करना"],
        "answer_en": "Mark unused type parameters",
        "answer_hi": "अनउपयोगी प्रकार पैरामीटर्स को चिह्नित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How does 'std::mem::transmute' differ from 'std::mem::transmute_copy'?",
        "question_hi": "'std::mem::transmute' 'std::mem::transmute_copy' से कैसे भिन्न है?",
        "options_en": ["transmute moves, transmute_copy copies", "transmute_copy is safer", "transmute works with references", "No difference"],
        "options_hi": ["transmute मूव करता है, transmute_copy कॉपी करता है", "transmute_copy सुरक्षित है", "transmute संदर्भों के साथ काम करता है", "कोई अंतर नहीं"],
        "answer_en": "transmute moves, transmute_copy copies",
        "answer_hi": "transmute मूव करता है, transmute_copy कॉपी करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of 'std::hint::unreachable_unchecked'?",
        "question_hi": "'std::hint::unreachable_unchecked' का उद्देश्य क्या है?",
        "options_en": ["Tell compiler code is unreachable", "Panic in unreachable code", "Optimize branch prediction", "Disable safety checks"],
        "options_hi": ["कंपाइलर को बताना कि कोड अनपहुंच्य है", "अनपहुंच्य कोड में पैनिक", "ब्रांच प्रेडिक्शन अनुकूलित करना", "सुरक्षा जांच अक्षम करना"],
        "answer_en": "Tell compiler code is unreachable",
        "answer_hi": "कंपाइलर को बताना कि कोड अनपहुंच्य है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "In Rust, what does 'std::ptr::read_volatile' guarantee?",
        "question_hi": "Rust में, 'std::ptr::read_volatile' क्या गारंटी देता है?",
        "options_en": ["No compiler optimization on read", "Atomic read operation", "Memory barrier", "Cache coherence"],
        "options_hi": ["रीड पर कोई कंपाइलर ऑप्टिमाइज़ेशन नहीं", "एटॉमिक रीड ऑपरेशन", "मेमोरी बैरियर", "कैश कोहरेंस"],
        "answer_en": "No compiler optimization on read",
        "answer_hi": "रीड पर कोई कंपाइलर ऑप्टिमाइज़ेशन नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the effect of '#[repr(C)]' on a Rust struct?",
        "question_hi": "Rust स्ट्रक्चर पर '#[repr(C)]' का क्या प्रभाव होता है?",
        "options_en": ["C-compatible memory layout", "Compact memory packing", "Automatic padding removal", "No Rust-specific optimizations"],
        "options_hi": ["C-संगत मेमोरी लेआउट", "कॉम्पैक्ट मेमोरी पैकिंग", "स्वचालित पैडिंग हटाना", "कोई Rust-विशिष्ट अनुकूलन नहीं"],
        "answer_en": "C-compatible memory layout",
        "answer_hi": "C-संगत मेमोरी लेआउट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How does 'std::sync::Once' ensure thread-safe initialization?",
        "question_hi": "'std::sync::Once' थ्रेड-सुरक्षित आरंभीकरण कैसे सुनिश्चित करता है?",
        "options_en": ["Atomic state with compare-and-swap", "Global mutex lock", "Thread-local storage", "Runtime checks"],
        "options_hi": ["तुलना-और-स्वैप के साथ परमाणु स्थिति", "वैश्विक म्यूटेक्स लॉक", "थ्रेड-लोकल स्टोरेज", "रनटाइम जांच"],
        "answer_en": "Atomic state with compare-and-swap",
        "answer_hi": "तुलना-और-स्वैप के साथ परमाणु स्थिति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of 'std::mem::MaybeUninit'?",
        "question_hi": "'std::mem::MaybeUninit' का उद्देश्य क्या है?",
        "options_en": ["Handle uninitialized memory safely", "Optimize memory allocation", "Bypass initialization checks", "Create raw memory buffers"],
        "options_hi": ["अप्रारंभिक मेमोरी को सुरक्षित रूप से संभालना", "मेमोरी आवंटन अनुकूलित करना", "आरंभीकरण जांच को दरकिनार करना", "कच्ची मेमोरी बफ़र बनाना"],
        "answer_en": "Handle uninitialized memory safely",
        "answer_hi": "अप्रारंभिक मेमोरी को सुरक्षित रूप से संभालना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "In Rust, what does 'std::sync::atomic::fence' provide?",
        "question_hi": "Rust में, 'std::sync::atomic::fence' क्या प्रदान करता है?",
        "options_en": ["Memory ordering guarantees", "Thread synchronization barrier", "Atomic operation batching", "Memory access serialization"],
        "options_hi": ["मेमोरी ऑर्डरिंग गारंटी", "थ्रेड सिंक्रनाइज़ेशन बैरियर", "एटॉमिक ऑपरेशन बैचिंग", "मेमोरी एक्सेस सीरियलाइज़ेशन"],
        "answer_en": "Memory ordering guarantees",
        "answer_hi": "मेमोरी ऑर्डरिंग गारंटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the role of 'std::panic::catch_unwind'?",
        "question_hi": "'std::panic::catch_unwind' की क्या भूमिका है?",
        "options_en": ["Recover from panics across FFI boundaries", "Convert panics to errors", "Prevent program termination", "All of the above"],
        "options_hi": ["FFI सीमाओं के पार पैनिक से उबरना", "पैनिक को त्रुटियों में बदलना", "प्रोग्राम समाप्ति रोकना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How does 'std::cell::UnsafeCell' enable interior mutability?",
        "question_hi": "'std::cell::UnsafeCell' आंतरिक परिवर्तनशीलता कैसे सक्षम करता है?",
        "options_en": ["Disables immutable reference guarantees", "Provides raw pointer access", "Bypasses borrow checker", "All of the above"],
        "options_hi": ["अपरिवर्तनीय संदर्भ गारंटी अक्षम करता है", "कच्चा पॉइंटर एक्सेस प्रदान करता है", "उधार जाँचकर्ता को दरकिनार करता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of 'std::mem::needs_drop'?",
        "question_hi": "'std::mem::needs_drop' का उद्देश्य क्या है?",
        "options_en": ["Compile-time check if type needs drop", "Runtime drop requirement check", "Optimize drop elision", "Manual drop triggering"],
        "options_hi": ["कंपाइल-टाइम जांच कि क्या प्रकार को ड्रॉप की आवश्यकता है", "रनटाइम ड्रॉप आवश्यकता जांच", "ड्रॉप एलिजन अनुकूलित करना", "मैन्युअल ड्रॉप ट्रिगर करना"],
        "answer_en": "Compile-time check if type needs drop",
        "answer_hi": "कंपाइल-टाइम जांच कि क्या प्रकार को ड्रॉप की आवश्यकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "In Rust, what does 'std::sync::Arc::get_mut' require?",
        "question_hi": "Rust में, 'std::sync::Arc::get_mut' की क्या आवश्यकता है?",
        "options_en": ["Unique ownership of Arc", "Mutable reference to contained data", "No other Arc clones exist", "All of the above"],
        "options_hi": ["Arc का अद्वितीय स्वामित्व", "निहित डेटा के लिए परिवर्तनशील संदर्भ", "कोई अन्य Arc क्लोन मौजूद नहीं है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the effect of '#[inline]' attribute in Rust?",
        "question_hi": "Rust में '#[inline]' विशेषता का क्या प्रभाव होता है?",
        "options_en": ["Hint compiler to inline function", "Force function inlining", "Prevent function inlining", "Optimize function calls"],
        "options_hi": ["कंपाइलर को फ़ंक्शन इनलाइन करने का संकेत", "फ़ंक्शन इनलाइनिंग बलपूर्वक", "फ़ंक्शन इनलाइनिंग रोकना", "फ़ंक्शन कॉल अनुकूलित करना"],
        "answer_en": "Hint compiler to inline function",
        "answer_hi": "कंपाइलर को फ़ंक्शन इनलाइन करने का संकेत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How does 'std::pin::Pin' prevent moves?",
        "question_hi": "'std::pin::Pin' मूव्स को कैसे रोकता है?",
        "options_en": ["Type system guarantees", "Runtime checks", "Compiler flags", "Memory protection"],
        "options_hi": ["टाइप सिस्टम गारंटी", "रनटाइम जांच", "कंपाइलर फ्लैग", "मेमोरी सुरक्षा"],
        "answer_en": "Type system guarantees",
        "answer_hi": "टाइप सिस्टम गारंटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of 'std::task::Context' in async Rust?",
        "question_hi": "Async Rust में 'std::task::Context' का उद्देश्य क्या है?",
        "options_en": ["Provide waker for task awakening", "Store async state", "Manage task scheduling", "Handle async errors"],
        "options_hi": ["टास्क जागरण के लिए वेकर प्रदान करना", "Async स्थिति संग्रहीत करना", "टास्क शेड्यूलिंग प्रबंधित करना", "Async त्रुटियाँ संभालना"],
        "answer_en": "Provide waker for task awakening",
        "answer_hi": "टास्क जागरण के लिए वेकर प्रदान करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "In Rust, what does 'std::convert::Infallible' represent?",
        "question_hi": "Rust में, 'std::convert::Infallible' क्या दर्शाता है?",
        "options_en": ["Type that can never be instantiated", "Error that can never occur", "Success-only result", "All of the above"],
        "options_hi": ["प्रकार जिसे कभी इंस्टेंटिएट नहीं किया जा सकता", "त्रुटि जो कभी नहीं हो सकती", "केवल-सफलता परिणाम", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the role of 'std::ops::Generator' in Rust?",
        "question_hi": "Rust में 'std::ops::Generator' की क्या भूमिका है?",
        "options_en": ["Define resumable functions", "Create iterator-like types", "Implement async/await", "All of the above"],
        "options_hi": ["पुनः प्रारंभ करने योग्य कार्यों को परिभाषित करना", "इटरेटर-जैसे प्रकार बनाना", "Async/await लागू करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How does 'std::sync::mpsc::sync_channel' differ from 'std::sync::mpsc::channel'?",
        "question_hi": "'std::sync::mpsc::sync_channel' 'std::sync::mpsc::channel' से कैसे भिन्न है?",
        "options_en": ["sync_channel has bounded capacity", "sync_channel is faster", "channel is async", "No difference"],
        "options_hi": ["sync_channel की बाउंडेड क्षमता है", "sync_channel तेज है", "channel async है", "कोई अंतर नहीं"],
        "answer_en": "sync_channel has bounded capacity",
        "answer_hi": "sync_channel की बाउंडेड क्षमता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of 'std::num::Wrapping'?",
        "question_hi": "'std::num::Wrapping' का उद्देश्य क्या है?",
        "options_en": ["Enable wrapping arithmetic", "Prevent integer overflow", "Optimize math operations", "Handle floating-point numbers"],
        "options_hi": ["रैपिंग अंकगणित सक्षम करना", "पूर्णांक ओवरफ्लो रोकना", "गणित संचालन अनुकूलित करना", "फ्लोटिंग-पॉइंट नंबर संभालना"],
        "answer_en": "Enable wrapping arithmetic",
        "answer_hi": "रैपिंग अंकगणित सक्षम करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "In Rust, what does 'std::mem::zeroed' initialize memory to?",
        "question_hi": "Rust में, 'std::mem::zeroed' मेमोरी को क्या इनिशियलाइज़ करता है?",
        "options_en": ["All bits zero", "Type's default value", "Uninitialized state", "Platform-specific pattern"],
        "options_hi": ["सभी बिट शून्य", "प्रकार का डिफ़ॉल्ट मान", "अप्रारंभिक स्थिति", "प्लेटफ़ॉर्म-विशिष्ट पैटर्न"],
        "answer_en": "All bits zero",
        "answer_hi": "सभी बिट शून्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the role of 'std::sync::Barrier'?",
        "question_hi": "'std::sync::Barrier' की क्या भूमिका है?",
        "options_en": ["Synchronize multiple threads at a point", "Create thread barriers", "Coordinate parallel execution", "All of the above"],
        "options_hi": ["एक बिंदु पर कई थ्रेड्स को सिंक्रनाइज़ करना", "थ्रेड बैरियर बनाना", "समानांतर निष्पादन समन्वय", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How does 'std::ptr::NonNull' differ from raw pointers?",
        "question_hi": "'std::ptr::NonNull' कच्चे पॉइंटर्स से कैसे भिन्न है?",
        "options_en": ["Guaranteed non-null", "Auto-dereferencing", "Memory safety", "Automatic cleanup"],
        "options_hi": ["गारंटीकृत गैर-शून्य", "स्वत: डेरिफरेंसिंग", "मेमोरी सुरक्षा", "स्वचालित सफाई"],
        "answer_en": "Guaranteed non-null",
        "answer_hi": "गारंटीकृत गैर-शून्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of 'std::hint::spin_loop'?",
        "question_hi": "'std::hint::spin_loop' का उद्देश्य क्या है?",
        "options_en": ["Optimize busy-waiting loops", "Create infinite loops", "Prevent CPU throttling", "Improve cache performance"],
        "options_hi": ["बिजी-वेटिंग लूप अनुकूलित करना", "अनंत लूप बनाना", "CPU थ्रॉटलिंग रोकना", "कैश प्रदर्शन में सुधार"],
        "answer_en": "Optimize busy-waiting loops",
        "answer_hi": "बिजी-वेटिंग लूप अनुकूलित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "In Rust, what does 'std::sync::atomic::compiler_fence' do?",
        "question_hi": "Rust में, 'std::sync::atomic::compiler_fence' क्या करता है?",
        "options_en": ["Prevents compiler reordering", "Inserts memory barrier", "Synchronizes CPU caches", "Forces atomic operations"],
        "options_hi": ["कंपाइलर पुन: क्रमबद्धता रोकता है", "मेमोरी बैरियर डालता है", "CPU कैश सिंक्रनाइज़ करता है", "एटॉमिक ऑपरेशन बलपूर्वक"],
        "answer_en": "Prevents compiler reordering",
        "answer_hi": "कंपाइलर पुन: क्रमबद्धता रोकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the effect of '#[no_mangle]' attribute?",
        "question_hi": "'#[no_mangle]' विशेषता का क्या प्रभाव होता है?",
        "options_en": ["Prevents name mangling", "Enables C interoperability", "Exports symbol", "All of the above"],
        "options_hi": ["नाम मैंगलिंग रोकता है", "C इंटरऑपरेबिलिटी सक्षम करता है", "प्रतीक निर्यात करता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How does 'std::mem::replace' work?",
        "question_hi": "'std::mem::replace' कैसे काम करता है?",
        "options_en": ["Swaps values and returns old", "Replaces without returning", "Moves and copies", "Only works with Copy types"],
        "options_hi": ["मानों को स्वैप करता है और पुराना लौटाता है", "वापसी के बिना प्रतिस्थापित करता है", "मूव और कॉपी करता है", "केवल Copy प्रकारों के साथ काम करता है"],
        "answer_en": "Swaps values and returns old",
        "answer_hi": "मानों को स्वैप करता है और पुराना लौटाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of 'std::sync::Condvar'?",
        "question_hi": "'std::sync::Condvar' का उद्देश्य क्या है?",
        "options_en": ["Block threads until condition", "Signal between threads", "Coordinate thread execution", "All of the above"],
        "options_hi": ["स्थिति तक थ्रेड्स को ब्लॉक करना", "थ्रेड्स के बीच सिग्नल", "थ्रेड निष्पादन समन्वय", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "In Rust, what does 'std::mem::size_of_val' return?",
        "question_hi": "Rust में, 'std::mem::size_of_val' क्या लौटाता है?",
        "options_en": ["Size of value including padding", "Size of type only", "Stack size", "Heap allocation size"],
        "options_hi": ["पैडिंग सहित मान का आकार", "केवल प्रकार का आकार", "स्टैक आकार", "हीप आवंटन आकार"],
        "answer_en": "Size of value including padding",
        "answer_hi": "पैडिंग सहित मान का आकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the role of 'std::process::abort'?",
        "question_hi": "'std::process::abort' की क्या भूमिका है?",
        "options_en": ["Terminate process immediately", "Run destructors then exit", "Send signal to process", "Graceful shutdown"],
        "options_hi": ["प्रक्रिया को तुरंत समाप्त करना", "डिस्ट्रक्टर्स चलाएं फिर बाहर निकलें", "प्रक्रिया को सिग्नल भेजें", "सुरुचिपूर्ण शटडाउन"],
        "answer_en": "Terminate process immediately",
        "answer_hi": "प्रक्रिया को तुरंत समाप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How does 'std::sync::MutexGuard' implement Drop?",
        "question_hi": "'std::sync::MutexGuard' ड्रॉप कैसे लागू करता है?",
        "options_en": ["Releases lock automatically", "Panics if poisoned", "Checks for data races", "All of the above"],
        "options_hi": ["लॉक स्वचालित रूप से जारी करता है", "यदि जहरीला है तो पैनिक", "डेटा रेस के लिए जांच", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of 'std::mem::align_of'?",
        "question_hi": "'std::mem::align_of' का उद्देश्य क्या है?",
        "options_en": ["Get type's alignment requirement", "Check memory alignment", "Align data structures", "Optimize cache lines"],
        "options_hi": ["प्रकार की अलाइनमेंट आवश्यकता प्राप्त करें", "मेमोरी अलाइनमेंट जांच", "डेटा संरचनाओं को संरेखित करें", "कैश लाइन अनुकूलित करें"],
        "answer_en": "Get type's alignment requirement",
        "answer_hi": "प्रकार की अलाइनमेंट आवश्यकता प्राप्त करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "In Rust, what does 'std::sync::atomic::AtomicPtr' provide?",
        "question_hi": "Rust में, 'std::sync::atomic::AtomicPtr' क्या प्रदान करता है?",
        "options_en": ["Thread-safe pointer operations", "Atomic memory access", "Lock-free data structures", "All of the above"],
        "options_hi": ["थ्रेड-सुरक्षित पॉइंटर ऑपरेशन", "एटॉमिक मेमोरी एक्सेस", "लॉक-फ्री डेटा संरचनाएं", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the effect of '#[repr(transparent)]'?",
        "question_hi": "'#[repr(transparent)]' का क्या प्रभाव होता है?",
        "options_en": ["Single-field struct has same representation as field", "Optimizes memory layout", "Enables type punning", "Removes padding"],
        "options_hi": ["सिंगल-फ़ील्ड स्ट्रक्चर का फ़ील्ड के समान प्रतिनिधित्व", "मेमोरी लेआउट अनुकूलित करता है", "टाइप पनिंग सक्षम करता है", "पैडिंग हटाता है"],
        "answer_en": "Single-field struct has same representation as field",
        "answer_hi": "सिंगल-फ़ील्ड स्ट्रक्चर का फ़ील्ड के समान प्रतिनिधित्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How does 'std::mem::take' work?",
        "question_hi": "'std::mem::take' कैसे काम करता है?",
        "options_en": ["Replaces with default and returns old", "Takes ownership without replace", "Only works with Copy types", "Moves value out of option"],
        "options_hi": ["डिफ़ॉल्ट के साथ प्रतिस्थापित करता है और पुराना लौटाता है", "प्रतिस्थापन के बिना स्वामित्व लेता है", "केवल Copy प्रकारों के साथ काम करता है", "मान को विकल्प से बाहर निकालता है"],
        "answer_en": "Replaces with default and returns old",
        "answer_hi": "डिफ़ॉल्ट के साथ प्रतिस्थापित करता है और पुराना लौटाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of 'std::sync::Weak'?",
        "question_hi": "'std::sync::Weak' का उद्देश्य क्या है?",
        "options_en": ["Non-owning reference to Arc data", "Break reference cycles", "Prevent memory leaks", "All of the above"],
        "options_hi": ["Arc डेटा के लिए गैर-स्वामित्व संदर्भ", "संदर्भ चक्र तोड़ना", "मेमोरी लीक रोकना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "In Rust, what does 'std::ptr::write' do?",
        "question_hi": "Rust में, 'std::ptr::write' क्या करता है?",
        "options_en": ["Writes to memory without dropping old", "Overwrites and drops old value", "Only works with uninitialized memory", "Performs atomic write"],
        "options_hi": ["पुराने को ड्रॉप किए बिना मेमोरी में लिखता है", "पुराने मान को ओवरराइट और ड्रॉप करता है", "केवल अप्रारंभिक मेमोरी के साथ काम करता है", "एटॉमिक राइट करता है"],
        "answer_en": "Writes to memory without dropping old",
        "answer_hi": "पुराने को ड्रॉप किए बिना मेमोरी में लिखता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the role of 'std::task::Poll' in async Rust?",
        "question_hi": "Async Rust में 'std::task::Poll' की क्या भूमिका है?",
        "options_en": ["Represent async task state", "Indicate completion status", "Control async execution", "All of the above"],
        "options_hi": ["Async टास्क स्थिति का प्रतिनिधित्व", "पूर्णता स्थिति इंगित करना", "Async निष्पादन नियंत्रण", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How does 'std::sync::mpsc::Receiver::try_iter' work?",
        "question_hi": "'std::sync::mpsc::Receiver::try_iter' कैसे काम करता है?",
        "options_en": ["Non-blocking iterator over received messages", "Blocks until messages arrive", "Consumes receiver", "Only works with sync channels"],
        "options_hi": ["प्राप्त संदेशों पर गैर-अवरुद्ध पुनरावर्तक", "संदेश आने तक ब्लॉक", "रिसीवर खपत", "केवल सिंक चैनलों के साथ काम करता है"],
        "answer_en": "Non-blocking iterator over received messages",
        "answer_hi": "प्राप्त संदेशों पर गैर-अवरुद्ध पुनरावर्तक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of 'std::mem::ManuallyDrop'?",
        "question_hi": "'std::mem::ManuallyDrop' का उद्देश्य क्या है?",
        "options_en": ["Prevent automatic drop", "Manual memory management", "FFI interoperability", "All of the above"],
        "options_hi": ["स्वचालित ड्रॉप रोकना", "मैन्युअल मेमोरी प्रबंधन", "FFI इंटरऑपरेबिलिटी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "In Rust, what does 'std::sync::atomic::Ordering::SeqCst' guarantee?",
        "question_hi": "Rust में, 'std::sync::atomic::Ordering::SeqCst' क्या गारंटी देता है?",
        "options_en": ["Sequential consistency", "Total order of operations", "Strongest memory ordering", "All of the above"],
        "options_hi": ["अनुक्रमिक स्थिरता", "संचालन का कुल क्रम", "सबसे मजबूत मेमोरी ऑर्डरिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the effect of '#[cold]' attribute?",
        "question_hi": "'#[cold]' विशेषता का क्या प्रभाव होता है?",
        "options_en": ["Hints compiler that function is cold", "Optimizes for size over speed", "Prevents inlining", "All of the above"],
        "options_hi": ["कंपाइलर को संकेत देता है कि फ़ंक्शन कोल्ड है", "गति पर आकार के लिए अनुकूलित", "इनलाइनिंग रोकता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How does 'std::ptr::drop_in_place' work?",
        "question_hi": "'std::ptr::drop_in_place' कैसे काम करता है?",
        "options_en": ["Calls destructor without moving", "Moves then drops value", "Only works with sized types", "Performs atomic drop"],
        "options_hi": ["मूव किए बिना डिस्ट्रक्टर को कॉल करता है", "मूव फिर ड्रॉप वैल्यू", "केवल साइज्ड प्रकारों के साथ काम करता है", "एटॉमिक ड्रॉप करता है"],
        "answer_en": "Calls destructor without moving",
        "answer_hi": "मूव किए बिना डिस्ट्रक्टर को कॉल करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of 'std::sync::OnceLock'?",
        "question_hi": "'std::sync::OnceLock' का उद्देश्य क्या है?",
        "options_en": ["Thread-safe lazy initialization", "One-time value setting", "Static data initialization", "All of the above"],
        "options_hi": ["थ्रेड-सुरक्षित आलसी आरंभीकरण", "एक-बार मान सेटिंग", "स्थैतिक डेटा आरंभीकरण", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "In Rust, what does 'std::mem::forget_unsized' handle?",
        "question_hi": "Rust में, 'std::mem::forget_unsized' क्या संभालता है?",
        "options_en": ["Dynamically sized types", "Only sized types", "Trait objects", "All of the above"],
        "options_hi": ["गतिशील रूप से आकार वाले प्रकार", "केवल आकार वाले प्रकार", "ट्रेट ऑब्जेक्ट", "उपरोक्त सभी"],
        "answer_en": "Dynamically sized types",
        "answer_hi": "गतिशील रूप से आकार वाले प्रकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the role of 'std::sync::atomic::AtomicBool'?",
        "question_hi": "'std::sync::atomic::AtomicBool' की क्या भूमिका है?",
        "options_en": ["Thread-safe boolean operations", "Atomic flags", "Lock-free synchronization", "All of the above"],
        "options_hi": ["थ्रेड-सुरक्षित बूलियन ऑपरेशन", "एटॉमिक फ्लैग", "लॉक-फ्री सिंक्रनाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How does 'std::mem::swap' differ from 'std::mem::replace'?",
        "question_hi": "'std::mem::swap' 'std::mem::replace' से कैसे भिन्न है?",
        "options_en": ["swap exchanges two values, replace swaps with new", "replace is faster", "swap only works with same types", "No difference"],
        "options_hi": ["swap दो मानों का आदान-प्रदान करता है, replace नए के साथ स्वैप करता है", "replace तेज है", "swap केवल समान प्रकारों के साथ काम करता है", "कोई अंतर नहीं"],
        "answer_en": "swap exchanges two values, replace swaps with new",
        "answer_hi": "swap दो मानों का आदान-प्रदान करता है, replace नए के साथ स्वैप करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of 'std::sync::mpsc::Sender::send'?",
        "question_hi": "'std::sync::mpsc::Sender::send' का उद्देश्य क्या है?",
        "options_en": ["Send message to receiver", "Block if channel is full", "Transfer ownership of value", "All of the above"],
        "options_hi": ["रिसीवर को संदेश भेजें", "यदि चैनल भरा है तो ब्लॉक", "मान का स्वामित्व स्थानांतरण", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "In Rust, what does 'std::mem::align_of_val' return?",
        "question_hi": "Rust में, 'std::mem::align_of_val' क्या लौटाता है?",
        "options_en": ["Alignment of value's type", "Actual memory alignment", "Platform-specific alignment", "Requested alignment"],
        "options_hi": ["मान के प्रकार की अलाइनमेंट", "वास्तविक मेमोरी अलाइनमेंट", "प्लेटफ़ॉर्म-विशिष्ट अलाइनमेंट", "अनुरोधित अलाइनमेंट"],
        "answer_en": "Alignment of value's type",
        "answer_hi": "मान के प्रकार की अलाइनमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the role of 'std::sync::RwLockReadGuard'?",
        "question_hi": "'std::sync::RwLockReadGuard' की क्या भूमिका है?",
        "options_en": ["RAII for read lock", "Auto-unlock on drop", "Multiple reader access", "All of the above"],
        "options_hi": ["रीड लॉक के लिए RAII", "ड्रॉप पर ऑटो-अनलॉक", "एकाधिक रीडर एक्सेस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How does 'std::mem::size_of' handle zero-sized types?",
        "question_hi": "'std::mem::size_of' शून्य-आकार प्रकारों को कैसे संभालता है?",
        "options_en": ["Returns 0", "Returns 1", "Panics", "Platform-dependent"],
        "options_hi": ["0 लौटाता है", "1 लौटाता है", "पैनिक", "प्लेटफ़ॉर्म-निर्भर"],
        "answer_en": "Returns 0",
        "answer_hi": "0 लौटाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of 'std::sync::mpsc::RecvError'?",
        "question_hi": "'std::sync::mpsc::RecvError' का उद्देश्य क्या है?",
        "options_en": ["Indicate channel disconnect", "Handle receive failures", "Error type for recv", "All of the above"],
        "options_hi": ["चैनल डिस्कनेक्ट इंगित करें", "रिसीव विफलताएं संभालें", "recv के लिए त्रुटि प्रकार", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "In Rust, what does 'std::ptr::null' create?",
        "question_hi": "Rust में, 'std::ptr::null' क्या बनाता है?",
        "options_en": ["Null raw pointer", "Null reference", "Empty option", "Zero value"],
        "options_hi": ["नल रॉ पॉइंटर", "नल संदर्भ", "खाली विकल्प", "शून्य मान"],
        "answer_en": "Null raw pointer",
        "answer_hi": "नल रॉ पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the effect of '#[repr(packed)]'?",
        "question_hi": "'#[repr(packed)]' का क्या प्रभाव होता है?",
        "options_en": ["Remove padding bytes", "Minimize memory usage", "May cause unaligned access", "All of the above"],
        "options_hi": ["पैडिंग बाइट्स हटाएं", "मेमोरी उपयोग कम से कम करें", "असंरेखित एक्सेस का कारण बन सकता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How does 'std::sync::atomic::AtomicUsize::fetch_add' work?",
        "question_hi": "'std::sync::atomic::AtomicUsize::fetch_add' कैसे काम करता है?",
        "options_en": ["Atomically add and return previous value", "Add without returning", "Only atomic increment", "May have data races"],
        "options_hi": ["परमाणु रूप से जोड़ें और पिछला मान लौटाएं", "वापसी के बिना जोड़ें", "केवल परमाणु वृद्धि", "डेटा रेस हो सकती है"],
        "answer_en": "Atomically add and return previous value",
        "answer_hi": "परमाणु रूप से जोड़ें और पिछला मान लौटाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of 'std::mem::discriminant'?",
        "question_hi": "'std::mem::discriminant' का उद्देश्य क्या है?",
        "options_en": ["Get enum variant identifier", "Compare enum values", "Pattern matching optimization", "All of the above"],
        "options_hi": ["Enum वेरिएंट पहचानकर्ता प्राप्त करें", "Enum मानों की तुलना करें", "पैटर्न मिलान अनुकूलन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "In Rust, what does 'std::sync::mpsc::SyncSender::send' return?",
        "question_hi": "Rust में, 'std::sync::mpsc::SyncSender::send' क्या लौटाता है?",
        "options_en": ["Result indicating success or disconnect", "Always returns unit", "May panic on failure", "Blocks indefinitely"],
        "options_hi": ["सफलता या डिस्कनेक्ट इंगित करने वाला परिणाम", "हमेशा यूनिट लौटाता है", "विफलता पर पैनिक हो सकता है", "अनिश्चित काल तक ब्लॉक"],
        "answer_en": "Result indicating success or disconnect",
        "answer_hi": "सफलता या डिस्कनेक्ट इंगित करने वाला परिणाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the role of 'std::sync::atomic::Ordering::Acquire'?",
        "question_hi": "'std::sync::atomic::Ordering::Acquire' की क्या भूमिका है?",
        "options_en": ["Ensure subsequent reads see current value", "Memory barrier for loads", "Synchronize-with release stores", "All of the above"],
        "options_hi": ["सुनिश्चित करें कि बाद की रीड वर्तमान मान देखें", "लोड के लिए मेमोरी बैरियर", "रिलीज स्टोर के साथ सिंक्रनाइज़", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How does 'std::mem::zeroed' handle invalid bit patterns?",
        "question_hi": "'std::mem::zeroed' अमान्य बिट पैटर्न को कैसे संभालता है?",
        "options_en": ["May cause undefined behavior", "Checks for validity", "Only works with safe types", "Panics on invalid patterns"],
        "options_hi": ["अपरिभाषित व्यवहार का कारण बन सकता है", "वैधता के लिए जांच", "केवल सुरक्षित प्रकारों के साथ काम करता है", "अमान्य पैटर्न पर पैनिक"],
        "answer_en": "May cause undefined behavior",
        "answer_hi": "अपरिभाषित व्यवहार का कारण बन सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of 'std::sync::mpsc::channel'?",
        "question_hi": "'std::sync::mpsc::channel' का उद्देश्य क्या है?",
        "options_en": ["Create unbounded message channel", "Thread communication", "Ownership transfer between threads", "All of the above"],
        "options_hi": ["अनबाउंडेड मैसेज चैनल बनाएं", "थ्रेड संचार", "थ्रेड्स के बीच स्वामित्व स्थानांतरण", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "In Rust, what does 'std::mem::replace' require?",
        "question_hi": "Rust में, 'std::mem::replace' की क्या आवश्यकता है?",
        "options_en": ["Mutable reference to value", "Ownership of new value", "Both mutable reference and ownership", "Only Copy types"],
        "options_hi": ["मान के लिए परिवर्तनशील संदर्भ", "नए मान का स्वामित्व", "दोनों परिवर्तनशील संदर्भ और स्वामित्व", "केवल Copy प्रकार"],
        "answer_en": "Both mutable reference and ownership",
        "answer_hi": "दोनों परिवर्तनशील संदर्भ और स्वामित्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the effect of '#[repr(align(n))]'?",
        "question_hi": "'#[repr(align(n))]' का क्या प्रभाव होता है?",
        "options_en": ["Set minimum alignment to n", "Force specific memory layout", "Override default alignment", "All of the above"],
        "options_hi": ["न्यूनतम अलाइनमेंट n पर सेट करें", "विशिष्ट मेमोरी लेआउट बलपूर्वक", "डिफ़ॉल्ट अलाइनमेंट ओवरराइड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How does 'std::sync::Mutex::lock' handle poisoned mutex?",
        "question_hi": "'std::sync::Mutex::lock' जहरीले म्यूटेक्स को कैसे संभालता है?",
        "options_en": ["Returns Err if poisoned", "Always panics", "Ignores poison", "Automatically recovers"],
        "options_hi": ["यदि जहरीला है तो Err लौटाता है", "हमेशा पैनिक", "जहर को नजरअंदाज", "स्वचालित रूप से ठीक"],
        "answer_en": "Returns Err if poisoned",
        "answer_hi": "यदि जहरीला है तो Err लौटाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of 'std::mem::align_of'?",
        "question_hi": "'std::mem::align_of' का उद्देश्य क्या है?",
        "options_en": ["Get alignment requirement of type", "Check current memory alignment", "Set memory alignment", "All of the above"],
        "options_hi": ["प्रकार की अलाइनमेंट आवश्यकता प्राप्त करें", "वर्तमान मेमोरी अलाइनमेंट जांच", "मेमोरी अलाइनमेंट सेट", "उपरोक्त सभी"],
        "answer_en": "Get alignment requirement of type",
        "answer_hi": "प्रकार की अलाइनमेंट आवश्यकता प्राप्त करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "In Rust, what does 'std::sync::atomic::fence' with Ordering::Release do?",
        "question_hi": "Rust में, Ordering::Release के साथ 'std::sync::atomic::fence' क्या करता है?",
        "options_en": ["Ensure previous writes are visible to acquires", "Memory barrier for stores", "Synchronize-with acquire loads", "All of the above"],
        "options_hi": ["सुनिश्चित करें कि पिछले राइट एक्वायर को दिखाई दे", "स्टोर के लिए मेमोरी बैरियर", "अधिग्रहण लोड के साथ सिंक्रनाइज़", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the role of 'std::mem::transmute_copy'?",
        "question_hi": "'std::mem::transmute_copy' की क्या भूमिका है?",
        "options_en": ["Bitwise copy with type change", "Safer than transmute", "Works with different sizes", "All of the above"],
        "options_hi": ["टाइप चेंज के साथ बिटवाइज कॉपी", "transmute से सुरक्षित", "अलग-अलग आकार के साथ काम करता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How does 'std::sync::mpsc::Receiver::recv' handle disconnection?",
        "question_hi": "'std::sync::mpsc::Receiver::recv' डिस्कनेक्शन को कैसे संभालता है?",
        "options_en": ["Returns Err when all senders are dropped", "Blocks forever", "Panics immediately", "Returns None"],
        "options_hi": ["सभी प्रेषक गिराए जाने पर Err लौटाता है", "हमेशा के लिए ब्लॉक", "तुरंत पैनिक", "None लौटाता है"],
        "answer_en": "Returns Err when all senders are dropped",
        "answer_hi": "सभी प्रेषक गिराए जाने पर Err लौटाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of 'std::mem::needs_drop'?",
        "question_hi": "'std::mem::needs_drop' का उद्देश्य क्या है?",
        "options_en": ["Compile-time check for drop requirement", "Runtime drop check", "Optimize drop elision", "Manual drop control"],
        "options_hi": ["ड्रॉप आवश्यकता के लिए कंपाइल-टाइम जांच", "रनटाइम ड्रॉप जांच", "ड्रॉप एलिजन अनुकूलित करें", "मैन्युअल ड्रॉप कंट्रोल"],
        "answer_en": "Compile-time check for drop requirement",
        "answer_hi": "ड्रॉप आवश्यकता के लिए कंपाइल-टाइम जांच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "In Rust, what does 'std::sync::atomic::AtomicPtr::load' return?",
        "question_hi": "Rust में, 'std::sync::atomic::AtomicPtr::load' क्या लौटाता है?",
        "options_en": ["Current pointer value", "Mutable reference", "Owned pointer", "Option containing pointer"],
        "options_hi": ["वर्तमान पॉइंटर मान", "परिवर्तनशील संदर्भ", "स्वामित्व वाला पॉइंटर", "पॉइंटर युक्त विकल्प"],
        "answer_en": "Current pointer value",
        "answer_hi": "वर्तमान पॉइंटर मान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the effect of '#[repr(Rust)]'?",
        "question_hi": "'#[repr(Rust)]' का क्या प्रभाव होता है?",
        "options_en": ["Default Rust representation", "Optimized memory layout", "Compiler-chosen layout", "All of the above"],
        "options_hi": ["डिफ़ॉल्ट Rust प्रतिनिधित्व", "अनुकूलित मेमोरी लेआउट", "कंपाइलर-चुना लेआउट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How does 'std::mem::size_of_val' handle DSTs?",
        "question_hi": "'std::mem::size_of_val' DSTs को कैसे संभालता है?",
        "options_en": ["Returns runtime size", "Only works with sized types", "Panics with DSTs", "Returns 0 for DSTs"],
        "options_hi": ["रनटाइम आकार लौटाता है", "केवल आकार वाले प्रकारों के साथ काम करता है", "DSTs के साथ पैनिक", "DSTs के लिए 0 लौटाता है"],
        "answer_en": "Returns runtime size",
        "answer_hi": "रनटाइम आकार लौटाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of 'std::sync::mpsc::TryRecvError'?",
        "question_hi": "'std::sync::mpsc::TryRecvError' का उद्देश्य क्या है?",
        "options_en": ["Handle non-blocking receive errors", "Indicate empty channel or disconnect", "Error type for try_recv", "All of the above"],
        "options_hi": ["गैर-अवरुद्ध रिसीव त्रुटियों को संभालें", "खाली चैनल या डिस्कनेक्ट इंगित करें", "try_recv के लिए त्रुटि प्रकार", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "In Rust, what does 'std::ptr::write_volatile' guarantee?",
        "question_hi": "Rust में, 'std::ptr::write_volatile' क्या गारंटी देता है?",
        "options_en": ["No compiler optimization on write", "Atomic write operation", "Memory barrier", "Cache flush"],
        "options_hi": ["राइट पर कोई कंपाइलर ऑप्टिमाइज़ेशन नहीं", "एटॉमिक राइट ऑपरेशन", "मेमोरी बैरियर", "कैश फ्लश"],
        "answer_en": "No compiler optimization on write",
        "answer_hi": "राइट पर कोई कंपाइलर ऑप्टिमाइज़ेशन नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the role of 'std::sync::atomic::Ordering::Relaxed'?",
        "question_hi": "'std::sync::atomic::Ordering::Relaxed' की क्या भूमिका है?",
        "options_en": ["No ordering guarantees", "Only atomicity guarantee", "Fastest but weakest ordering", "All of the above"],
        "options_hi": ["कोई ऑर्डरिंग गारंटी नहीं", "केवल परमाणुता गारंटी", "सबसे तेज़ लेकिन सबसे कमजोर ऑर्डरिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How does 'std::mem::forget' affect resource cleanup?",
        "question_hi": "'std::mem::forget' संसाधन सफाई को कैसे प्रभावित करता है?",
        "options_en": ["Prevents destructors from running", "Causes memory leaks", "Useful for FFI", "All of the above"],
        "options_hi": ["डिस्ट्रक्टर्स को चलने से रोकता है", "मेमोरी लीक का कारण बनता है", "FFI के लिए उपयोगी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of 'std::sync::mpsc::sync_channel'?",
        "question_hi": "'std::sync::mpsc::sync_channel' का उद्देश्य क्या है?",
        "options_en": ["Create bounded message channel", "Backpressure mechanism", "Prevent unbounded memory growth", "All of the above"],
        "options_hi": ["बाउंडेड मैसेज चैनल बनाएं", "बैकप्रेशर मैकेनिज्म", "अनबाउंडेड मेमोरी ग्रोथ रोकें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "In Rust, what does 'std::mem::align_of_val' require?",
        "question_hi": "Rust में, 'std::mem::align_of_val' की क्या आवश्यकता है?",
        "options_en": ["Reference to value", "Ownership of value", "Mutable reference", "Only Sized types"],
        "options_hi": ["मान का संदर्भ", "मान का स्वामित्व", "परिवर्तनशील संदर्भ", "केवल Sized प्रकार"],
        "answer_en": "Reference to value",
        "answer_hi": "मान का संदर्भ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the effect of '#[repr(u8)]' on an enum?",
        "question_hi": "Enum पर '#[repr(u8)]' का क्या प्रभाव होता है?",
        "options_en": ["Use u8 for discriminant", "Limit to 256 variants", "C-compatible enum", "All of the above"],
        "options_hi": ["डिस्क्रिमिनेंट के लिए u8 का उपयोग करें", "256 वेरिएंट तक सीमित", "C-संगत enum", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How does 'std::sync::atomic::AtomicBool::swap' work?",
        "question_hi": "'std::sync::atomic::AtomicBool::swap' कैसे काम करता है?",
        "options_en": ["Atomically swap and return previous value", "Swap without returning", "Only toggles value", "May have data races"],
        "options_hi": ["परमाणु रूप से स्वैप और पिछला मान लौटाएं", "वापसी के बिना स्वैप", "केवल मान टॉगल", "डेटा रेस हो सकती है"],
        "answer_en": "Atomically swap and return previous value",
        "answer_hi": "परमाणु रूप से स्वैप और पिछला मान लौटाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of 'std::mem::MaybeUninit::assume_init'?",
        "question_hi": "'std::mem::MaybeUninit::assume_init' का उद्देश्य क्या है?",
        "options_en": ["Convert to initialized value", "Mark memory as initialized", "Unsafe operation", "All of the above"],
        "options_hi": ["इनिशियलाइज्ड वैल्यू में कन्वर्ट", "मेमोरी को इनिशियलाइज्ड मार्क", "असुरक्षित ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "In Rust, what does 'std::sync::mpsc::Sender::try_send' return?",
        "question_hi": "Rust में, 'std::sync::mpsc::Sender::try_send' क्या लौटाता है?",
        "options_en": ["Result indicating success or full/disconnected", "Always returns unit", "Blocks if full", "Panics on failure"],
        "options_hi": ["सफलता या भरा/डिस्कनेक्ट इंगित करने वाला परिणाम", "हमेशा यूनिट लौटाता है", "यदि भरा है तो ब्लॉक", "विफलता पर पैनिक"],
        "answer_en": "Result indicating success or full/disconnected",
        "answer_hi": "सफलता या भरा/डिस्कनेक्ट इंगित करने वाला परिणाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the role of 'std::sync::atomic::compiler_fence'?",
        "question_hi": "'std::sync::atomic::compiler_fence' की क्या भूमिका है?",
        "options_en": ["Prevent compiler reordering only", "No hardware memory barrier", "Optimization barrier", "All of the above"],
        "options_hi": ["केवल कंपाइलर पुन: क्रमबद्धता रोकें", "कोई हार्डवेयर मेमोरी बैरियर नहीं", "ऑप्टिमाइज़ेशन बैरियर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How does 'std::mem::replace' handle drop?",
        "question_hi": "'std::mem::replace' ड्रॉप को कैसे संभालता है?",
        "options_en": ["Drops old value after replacement", "Never drops values", "Only drops if types differ", "May leak memory"],
        "options_hi": ["प्रतिस्थापन के बाद पुराने मान को ड्रॉप", "कभी मान ड्रॉप नहीं", "केवल तभी ड्रॉप करता है जब प्रकार भिन्न हों", "मेमोरी लीक हो सकती है"],
        "answer_en": "Drops old value after replacement",
        "answer_hi": "प्रतिस्थापन के बाद पुराने मान को ड्रॉप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of 'std::sync::mpsc::RecvTimeoutError'?",
        "question_hi": "'std::sync::mpsc::RecvTimeoutError' का उद्देश्य क्या है?",
        "options_en": ["Handle timed receive errors", "Indicate timeout or disconnect", "Error type for recv_timeout", "All of the above"],
        "options_hi": ["टाइम्ड रिसीव एरर संभालें", "टाइमआउट या डिस्कनेक्ट इंगित करें", "recv_timeout के लिए त्रुटि प्रकार", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "In Rust, what does 'std::ptr::read' do?",
        "question_hi": "Rust में, 'std::ptr::read' क्या करता है?",
        "options_en": ["Reads value without moving", "Copies bits from memory", "Leaves source valid", "All of the above"],
        "options_hi": ["मूव किए बिना मान पढ़ता है", "मेमोरी से बिट्स कॉपी", "स्रोत को वैध छोड़ता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the effect of '#[repr(align(1))]'?",
        "question_hi": "'#[repr(align(1))]' का क्या प्रभाव होता है?",
        "options_en": ["Minimum alignment of 1 byte", "No padding between fields", "May cause unaligned access", "All of the above"],
        "options_hi": ["1 बाइट की न्यूनतम अलाइनमेंट", "फ़ील्ड्स के बीच कोई पैडिंग नहीं", "असंरेखित एक्सेस का कारण बन सकता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How does 'std::sync::atomic::AtomicUsize::compare_exchange' work?",
        "question_hi": "'std::sync::atomic::AtomicUsize::compare_exchange' कैसे काम करता है?",
        "options_en": ["Atomically compare and swap", "CAS operation", "Returns Result with previous value", "All of the above"],
        "options_hi": ["परमाणु रूप से तुलना और स्वैप", "CAS ऑपरेशन", "पिछले मान के साथ परिणाम लौटाता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of 'std::mem::MaybeUninit::write'?",
        "question_hi": "'std::mem::MaybeUninit::write' का उद्देश्य क्या है?",
        "options_en": ["Initialize MaybeUninit with value", "Safe initialization method", "Avoids undefined behavior", "All of the above"],
        "options_hi": ["MaybeUninit को मान के साथ इनिशियलाइज़", "सुरक्षित आरंभीकरण विधि", "अपरिभाषित व्यवहार से बचता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "In Rust, what does 'std::sync::mpsc::SyncSender::send_timeout' do?",
        "question_hi": "Rust में, 'std::sync::mpsc::SyncSender::send_timeout' क्या करता है?",
        "options_en": ["Send with timeout", "Returns Result with success or timeout", "Non-blocking with time limit", "All of the above"],
        "options_hi": ["टाइमआउट के साथ भेजें", "सफलता या टाइमआउट के साथ परिणाम लौटाता है", "समय सीमा के साथ गैर-अवरुद्ध", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the role of 'std::sync::atomic::Ordering::Release'?",
        "question_hi": "'std::sync::atomic::Ordering::Release' की क्या भूमिका है?",
        "options_en": ["Ensure previous writes are visible to acquires", "Memory barrier for stores", "Synchronize-with acquire loads", "All of the above"],
        "options_hi": ["सुनिश्चित करें कि पिछले राइट एक्वायर को दिखाई दे", "स्टोर के लिए मेमोरी बैरियर", "अधिग्रहण लोड के साथ सिंक्रनाइज़", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How does 'std::mem::transmute' handle lifetimes?",
        "question_hi": "'std::mem::transmute' लाइफटाइम को कैसे संभालता है?",
        "options_en": ["Does not change lifetime relationships", "May extend or shorten lifetimes", "Always invalidates lifetimes", "Requires explicit lifetime annotations"],
        "options_hi": ["लाइफटाइम रिलेशनशिप नहीं बदलता", "लाइफटाइम बढ़ा या छोटा कर सकता है", "हमेशा लाइफटाइम अमान्य", "स्पष्ट लाइफटाइम एनोटेशन की आवश्यकता"],
        "answer_en": "Does not change lifetime relationships",
        "answer_hi": "लाइफटाइम रिलेशनशिप नहीं बदलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of 'std::sync::mpsc::TrySendError'?",
        "question_hi": "'std::sync::mpsc::TrySendError' का उद्देश्य क्या है?",
        "options_en": ["Handle non-blocking send errors", "Indicate full channel or disconnect", "Error type for try_send", "All of the above"],
        "options_hi": ["गैर-अवरुद्ध भेजने की त्रुटियों को संभालें", "भरा चैनल या डिस्कनेक्ट इंगित करें", "try_send के लिए त्रुटि प्रकार", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "In Rust, what does 'std::ptr::null_mut' create?",
        "question_hi": "Rust में, 'std::ptr::null_mut' क्या बनाता है?",
        "options_en": ["Null mutable raw pointer", "Null immutable pointer", "Empty mutable reference", "Zero mutable value"],
        "options_hi": ["नल म्यूटेबल रॉ पॉइंटर", "नल इम्यूटेबल पॉइंटर", "खाली परिवर्तनशील संदर्भ", "शून्य परिवर्तनशील मान"],
        "answer_en": "Null mutable raw pointer",
        "answer_hi": "नल म्यूटेबल रॉ पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the effect of '#[repr(transparent)]' on single-field structs?",
        "question_hi": "सिंगल-फ़ील्ड स्ट्रक्चर पर '#[repr(transparent)]' का क्या प्रभाव होता है?",
        "options_en": ["Same representation as single field", "No additional memory overhead", "ABI compatibility with field type", "All of the above"],
        "options_hi": ["सिंगल फ़ील्ड के समान प्रतिनिधित्व", "कोई अतिरिक्त मेमोरी ओवरहेड नहीं", "फ़ील्ड प्रकार के साथ ABI संगतता", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How does 'std::sync::atomic::AtomicIsize::fetch_sub' work?",
        "question_hi": "'std::sync::atomic::AtomicIsize::fetch_sub' कैसे काम करता है?",
        "options_en": ["Atomically subtract and return previous value", "Subtract without returning", "Only atomic decrement", "May have data races"],
        "options_hi": ["परमाणु रूप से घटाएं और पिछला मान लौटाएं", "वापसी के बिना घटाएं", "केवल परमाणु कमी", "डेटा रेस हो सकती है"],
        "answer_en": "Atomically subtract and return previous value",
        "answer_hi": "परमाणु रूप से घटाएं और पिछला मान लौटाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of 'std::mem::MaybeUninit::uninit'?",
        "question_hi": "'std::mem::MaybeUninit::uninit' का उद्देश्य क्या है?",
        "options_en": ["Create uninitialized MaybeUninit", "Safe uninitialized memory", "Avoid undefined behavior", "All of the above"],
        "options_hi": ["अप्रारंभिक MaybeUninit बनाएं", "सुरक्षित अप्रारंभिक मेमोरी", "अपरिभाषित व्यवहार से बचें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "In Rust, what does 'std::sync::mpsc::Receiver::recv_timeout' return?",
        "question_hi": "Rust में, 'std::sync::mpsc::Receiver::recv_timeout' क्या लौटाता है?",
        "options_en": ["Result with message or timeout/disconnect", "Always returns message", "Blocks forever on timeout", "Panics on timeout"],
        "options_hi": ["संदेश या टाइमआउट/डिस्कनेक्ट के साथ परिणाम", "हमेशा संदेश लौटाता है", "टाइमआउट पर हमेशा के लिए ब्लॉक", "टाइमआउट पर पैनिक"],
        "answer_en": "Result with message or timeout/disconnect",
        "answer_hi": "संदेश या टाइमआउट/डिस्कनेक्ट के साथ परिणाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the role of 'std::sync::atomic::Ordering::AcqRel'?",
        "question_hi": "'std::sync::atomic::Ordering::AcqRel' की क्या भूमिका है?",
        "options_en": ["Combines Acquire and Release", "Both load-acquire and store-release", "Stronger than Relaxed, weaker than SeqCst", "All of the above"],
        "options_hi": ["Acquire और Release को जोड़ता है", "दोनों लोड-अधिग्रहण और स्टोर-रिलीज", "Relaxed से मजबूत, SeqCst से कमजोर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How does 'std::mem::size_of' handle generic types?",
        "question_hi": "'std::mem::size_of' जेनेरिक प्रकारों को कैसे संभालता है?",
        "options_en": ["Returns size for concrete type", "Monomorphized at compile time", "Depends on type parameters", "All of the above"],
        "options_hi": ["कंक्रीट टाइप के लिए साइज लौटाता है", "कंपाइल टाइम पर मोनोमोर्फाइज्ड", "टाइप पैरामीटर पर निर्भर", "उपरोक्त सभी"],
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