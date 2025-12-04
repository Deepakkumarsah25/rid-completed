const questions = [
    {
        "num": 1,
        "question_en": "What is the purpose of 'std::intrinsics::unreachable' in unsafe Rust?",
        "question_hi": "अनसेफ Rust में 'std::intrinsics::unreachable' का उद्देश्य क्या है?",
        "options_en": ["Hint to optimizer that code is unreachable", "Terminate program immediately", "Cause undefined behavior", "Skip code execution"],
        "options_hi": ["ऑप्टिमाइज़र को संकेत कि कोड अनपहुंचनीय है", "प्रोग्राम तुरंत समाप्त", "अपरिभाषित व्यवहार का कारण", "कोड निष्पादन छोड़ें"],
        "answer_en": "Hint to optimizer that code is unreachable",
        "answer_hi": "ऑप्टिमाइज़र को संकेत कि कोड अनपहुंचनीय है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What does 'std::mem::forget' violate in terms of RAII?",
        "question_hi": "RAII के संदर्भ में 'std::mem::forget' क्या उल्लंघन करता है?",
        "options_en": ["The invariant that destructors always run", "Memory safety", "Thread safety", "Type safety"],
        "options_hi": ["अपरिवर्ती कि डिस्ट्रक्टर हमेशा चलते हैं", "मेमोरी सुरक्षा", "थ्रेड सुरक्षा", "टाइप सुरक्षा"],
        "answer_en": "The invariant that destructors always run",
        "answer_hi": "अपरिवर्ती कि डिस्ट्रक्टर हमेशा चलते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the 'Stacked Borrows' model in Rust?",
        "question_hi": "Rust में 'Stacked Borrows' मॉडल क्या है?",
        "options_en": ["An experimental aliasing model for mutable references", "Memory allocation strategy", "Thread stack management", "Garbage collection approach"],
        "options_hi": ["म्यूटेबल रेफरेंस के लिए एक प्रायोगिक एलियासिंग मॉडल", "मेमोरी आवंटन रणनीति", "थ्रेड स्टैक प्रबंधन", "गार्बेज कलेक्शन दृष्टिकोण"],
        "answer_en": "An experimental aliasing model for mutable references",
        "answer_hi": "म्यूटेबल रेफरेंस के लिए एक प्रायोगिक एलियासिंग मॉडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the purpose of '#[repr(transparent)]' attribute?",
        "question_hi": "'#[repr(transparent)]' एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Ensure single-field struct has same representation as its field", "Make struct transparent to memory", "Enable zero-cost abstractions", "Allow type transmutation"],
        "options_hi": ["सुनिश्चित करें कि सिंगल-फ़ील्ड स्ट्रक्चर का अपने फ़ील्ड के समान प्रतिनिधित्व है", "स्ट्रक्चर को मेमोरी के लिए पारदर्शी बनाएं", "जीरो-कॉस्ट एब्स्ट्रक्शन सक्षम", "टाइप ट्रांसम्यूटेशन अनुमति"],
        "answer_en": "Ensure single-field struct has same representation as its field",
        "answer_hi": "सुनिश्चित करें कि सिंगल-फ़ील्ड स्ट्रक्चर का अपने फ़ील्ड के समान प्रतिनिधित्व है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What does 'std::sync::Arc::<T>::new_cyclic' allow?",
        "question_hi": "'std::sync::Arc::<T>::new_cyclic' क्या अनुमति देता है?",
        "options_en": ["Construct Arc with references to itself in initialization", "Create circular references", "Cycle detection", "Memory cycling"],
        "options_hi": ["आरंभीकरण में स्वयं के संदर्भों के साथ Arc का निर्माण", "सर्कुलर रेफरेंस बनाएं", "साइकिल डिटेक्शन", "मेमोरी साइक्लिंग"],
        "answer_en": "Construct Arc with references to itself in initialization",
        "answer_hi": "आरंभीकरण में स्वयं के संदर्भों के साथ Arc का निर्माण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the 'drop check' in Rust's borrow checker?",
        "question_hi": "Rust के उधार जाँचकर्ता में 'ड्रॉप चेक' क्या है?",
        "options_en": ["Ensures values aren't dropped while still borrowed", "Checks if Drop trait is implemented", "Validates destructor safety", "Monitors memory deallocation"],
        "options_hi": ["सुनिश्चित करता है कि मान उधार लिए जाने पर ड्रॉप नहीं होते", "जांचता है कि क्या Drop ट्रेट लागू है", "डिस्ट्रक्टर सुरक्षा मान्य", "मेमोरी डीलोकेशन मॉनिटर"],
        "answer_en": "Ensures values aren't dropped while still borrowed",
        "answer_hi": "सुनिश्चित करता है कि मान उधार लिए जाने पर ड्रॉप नहीं होते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What does 'std::hint::spin_loop' optimize for?",
        "question_hi": "'std::hint::spin_loop' किसके लिए अनुकूलित करता है?",
        "options_en": ["Power-efficient busy waiting on modern CPUs", "Faster loop execution", "Memory optimization", "Thread synchronization"],
        "options_hi": ["आधुनिक CPU पर पावर-एफिशिएंट बिजी वेटिंग", "तेज लूप निष्पादन", "मेमोरी अनुकूलन", "थ्रेड सिंक्रनाइज़ेशन"],
        "answer_en": "Power-efficient busy waiting on modern CPUs",
        "answer_hi": "आधुनिक CPU पर पावर-एफिशिएंट बिजी वेटिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the purpose of 'std::mem::MaybeUninit::uninit_array'?",
        "question_hi": "'std::mem::MaybeUninit::uninit_array' का उद्देश्य क्या है?",
        "options_en": ["Create array of uninitialized MaybeUninit values", "Initialize array with zeros", "Create unitialized memory", "Allocate array without initialization"],
        "options_hi": ["अप्रारंभिक MaybeUninit मानों की सरणी बनाएं", "शून्य के साथ सरणी आरंभ", "अप्रारंभिक मेमोरी बनाएं", "आरंभीकरण के बिना सरणी आवंटित"],
        "answer_en": "Create array of uninitialized MaybeUninit values",
        "answer_hi": "अप्रारंभिक MaybeUninit मानों की सरणी बनाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What does 'std::ptr::read_volatile' guarantee?",
        "question_hi": "'std::ptr::read_volatile' क्या गारंटी देता है?",
        "options_en": ["Volatile read preventing compiler optimization", "Atomic read operation", "Thread-safe read", "Memory barrier"],
        "options_hi": ["वोलेटाइल रीड कंपाइलर अनुकूलन रोकता है", "एटोमिक रीड ऑपरेशन", "थ्रेड-सुरक्षित रीड", "मेमोरी बैरियर"],
        "answer_en": "Volatile read preventing compiler optimization",
        "answer_hi": "वोलेटाइल रीड कंपाइलर अनुकूलन रोकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the 'Thin Trait Object' pattern in Rust?",
        "question_hi": "Rust में 'थिन ट्रेट ऑब्जेक्ट' पैटर्न क्या है?",
        "options_en": ["Trait object without vtable pointer for sized types", "Minimal trait implementation", "Zero-sized trait objects", "Compressed trait representations"],
        "options_hi": ["साइज्ड टाइप्स के लिए vtable पॉइंटर के बिना ट्रेट ऑब्जेक्ट", "न्यूनतम ट्रेट कार्यान्वयन", "जीरो-साइज्ड ट्रेट ऑब्जेक्ट्स", "संपीड़ित ट्रेट प्रस्तुतियाँ"],
        "answer_en": "Trait object without vtable pointer for sized types",
        "answer_hi": "साइज्ड टाइप्स के लिए vtable पॉइंटर के बिना ट्रेट ऑब्जेक्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What does 'std::sync::atomic::fence' with Ordering::Acquire ensure?",
        "question_hi": "Ordering::Acquire के साथ 'std::sync::atomic::fence' क्या सुनिश्चित करता है?",
        "options_en": ["No loads after the fence can be reordered before it", "All stores complete before fence", "Memory allocation ordering", "Thread execution ordering"],
        "options_hi": ["फेंस के बाद कोई लोड इससे पहले पुन: क्रमबद्ध नहीं हो सकता", "फेंस से पहले सभी स्टोर पूर्ण", "मेमोरी आवंटन ऑर्डरिंग", "थ्रेड निष्पादन ऑर्डरिंग"],
        "answer_en": "No loads after the fence can be reordered before it",
        "answer_hi": "फेंस के बाद कोई लोड इससे पहले पुन: क्रमबद्ध नहीं हो सकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the purpose of '#[cfg(doctest)]' in Rust documentation?",
        "question_hi": "Rust डॉक्यूमेंटेशन में '#[cfg(doctest)]' का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation for doc tests only", "Enable documentation generation", "Configure test behavior", "Set documentation flags"],
        "options_hi": ["केवल डॉक टेस्ट के लिए सशर्त कंपाइलेशन", "डॉक्यूमेंटेशन जनरेशन सक्षम", "टेस्ट व्यवहार कॉन्फ़िगर", "डॉक्यूमेंटेशन फ्लैग्स सेट"],
        "answer_en": "Conditional compilation for doc tests only",
        "answer_hi": "केवल डॉक टेस्ट के लिए सशर्त कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What does 'std::mem::transmute_copy' do differently from 'transmute'?",
        "question_hi": "'std::mem::transmute_copy' 'transmute' से अलग क्या करता है?",
        "options_en": ["Copies bytes without moving the original value", "Moves the value", "Creates deep copy", "Performs type checking"],
        "options_hi": ["मूल मान को स्थानांतरित किए बिना बाइट्स की प्रतिलिपि बनाता है", "मान स्थानांतरित", "डीप कॉपी बनाता", "टाइप चेकिंग करता"],
        "answer_en": "Copies bytes without moving the original value",
        "answer_hi": "मूल मान को स्थानांतरित किए बिना बाइट्स की प्रतिलिपि बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the 'pin-utils' pattern for safe pinned projections?",
        "question_hi": "सुरक्षित पिन किए गए प्रोजेक्शन के लिए 'pin-utils' पैटर्न क्या है?",
        "options_en": ["Macro for safely projecting into pinned structs", "Utility for pinning memory", "Projection trait implementation", "Safe unpinning operations"],
        "options_hi": ["पिन किए गए स्ट्रक्चर में सुरक्षित रूप से प्रोजेक्ट करने के लिए मैक्रो", "मेमोरी पिन करने के लिए उपयोगिता", "प्रोजेक्शन ट्रेट कार्यान्वयन", "सुरक्षित अनपिनिंग ऑपरेशन"],
        "answer_en": "Macro for safely projecting into pinned structs",
        "answer_hi": "पिन किए गए स्ट्रक्चर में सुरक्षित रूप से प्रोजेक्ट करने के लिए मैक्रो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What does 'std::arch::is_x86_feature_detected!' macro detect?",
        "question_hi": "'std::arch::is_x86_feature_detected!' मैक्रो क्या पता लगाता है?",
        "options_en": ["CPU features at runtime on x86 platforms", "Compile-time x86 features", "Operating system features", "Memory architecture"],
        "options_hi": ["x86 प्लेटफ़ॉर्म पर रनटाइम CPU फीचर्स", "कंपाइल-टाइम x86 फीचर्स", "ऑपरेटिंग सिस्टम फीचर्स", "मेमोरी आर्किटेक्चर"],
        "answer_en": "CPU features at runtime on x86 platforms",
        "answer_hi": "x86 प्लेटफ़ॉर्म पर रनटाइम CPU फीचर्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the purpose of 'std::task::RawWaker'?",
        "question_hi": "'std::task::RawWaker' का उद्देश्य क्या है?",
        "options_en": ["Low-level building block for creating Wakers", "Raw thread wakeup", "Memory waker implementation", "Async task raw access"],
        "options_hi": ["Wakers बनाने के लिए लो-लेवल बिल्डिंग ब्लॉक", "रॉ थ्रेड वेकअप", "मेमोरी वेकर कार्यान्वयन", "एसिंक टास्क रॉ एक्सेस"],
        "answer_en": "Low-level building block for creating Wakers",
        "answer_hi": "Wakers बनाने के लिए लो-लेवल बिल्डिंग ब्लॉक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What does '#[inline(never)]' attribute guarantee?",
        "question_hi": "'#[inline(never)]' एट्रिब्यूट क्या गारंटी देता है?",
        "options_en": ["Function will never be inlined by compiler", "Function will always be inlined", "No function calls", "Manual inline requirement"],
        "options_hi": ["फ़ंक्शन को कंपाइलर द्वारा कभी भी इनलाइन नहीं किया जाएगा", "फ़ंक्शन हमेशा इनलाइन किया जाएगा", "कोई फ़ंक्शन कॉल नहीं", "मैनुअल इनलाइन आवश्यकता"],
        "answer_en": "Function will never be inlined by compiler",
        "answer_hi": "फ़ंक्शन को कंपाइलर द्वारा कभी भी इनलाइन नहीं किया जाएगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the 'zero-sized type' optimization in Rust?",
        "question_hi": "Rust में 'जीरो-साइज्ड टाइप' अनुकूलन क्या है?",
        "options_en": ["Types with size 0 don't occupy memory in aggregates", "Types with no data", "Empty struct optimization", "Zero allocation types"],
        "options_hi": ["आकार 0 वाले प्रकार एग्रीगेट्स में मेमोरी पर कब्जा नहीं करते", "बिना डेटा वाले प्रकार", "खाली स्ट्रक्चर अनुकूलन", "जीरो आवंटन प्रकार"],
        "answer_en": "Types with size 0 don't occupy memory in aggregates",
        "answer_hi": "आकार 0 वाले प्रकार एग्रीगेट्स में मेमोरी पर कब्जा नहीं करते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What does 'std::sync::Once::call_once_force' allow?",
        "question_hi": "'std::sync::Once::call_once_force' क्या अनुमति देता है?",
        "options_en": ["Run initialization even if previous call panicked", "Force thread execution", "Override initialization", "Bypass safety checks"],
        "options_hi": ["आरंभीकरण चलाएं भले ही पिछली कॉल पैनिक हुई हो", "थ्रेड निष्पादन फोर्स", "आरंभीकरण ओवरराइड", "सुरक्षा जांच बायपास"],
        "answer_en": "Run initialization even if previous call panicked",
        "answer_hi": "आरंभीकरण चलाएं भले ही पिछली कॉल पैनिक हुई हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the 'niche optimization' for enums in Rust?",
        "question_hi": "Rust में एनम के लिए 'निच ऑप्टिमाइज़ेशन' क्या है?",
        "options_en": ["Using invalid bit patterns to store discriminant", "Memory layout optimization", "Enum size reduction", "Variant selection optimization"],
        "options_hi": ["डिस्क्रिमिनेंट संग्रहीत करने के लिए अमान्य बिट पैटर्न का उपयोग", "मेमोरी लेआउट अनुकूलन", "एनम आकार में कमी", "वेरिएंट चयन अनुकूलन"],
        "answer_en": "Using invalid bit patterns to store discriminant",
        "answer_hi": "डिस्क्रिमिनेंट संग्रहीत करने के लिए अमान्य बिट पैटर्न का उपयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What does 'std::ptr::slice_from_raw_parts' create?",
        "question_hi": "'std::ptr::slice_from_raw_parts' क्या बनाता है?",
        "options_en": ["Raw slice pointer from data pointer and length", "Safe slice from raw parts", "Memory slice", "Array slice"],
        "options_hi": ["डेटा पॉइंटर और लंबाई से रॉ स्लाइस पॉइंटर", "रॉ पार्ट्स से सुरक्षित स्लाइस", "मेमोरी स्लाइस", "ऐरे स्लाइस"],
        "answer_en": "Raw slice pointer from data pointer and length",
        "answer_hi": "डेटा पॉइंटर और लंबाई से रॉ स्लाइस पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the 'async fn' in trait (AFIT) stabilization impact?",
        "question_hi": "ट्रेट में 'async fn' (AFIT) स्थिरीकरण का क्या प्रभाव है?",
        "options_en": ["Allows async methods in trait definitions", "Enables async trait objects", "Automatic async implementation", "Simplified async syntax"],
        "options_hi": ["ट्रेट परिभाषाओं में async विधियों की अनुमति", "async ट्रेट ऑब्जेक्ट्स सक्षम", "स्वचालित async कार्यान्वयन", "सरलीकृत async सिंटैक्स"],
        "answer_en": "Allows async methods in trait definitions",
        "answer_hi": "ट्रेट परिभाषाओं में async विधियों की अनुमति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What does 'std::sync::mpsc::channel::<T>' without bounds create?",
        "question_hi": "बाउंड्स के बिना 'std::sync::mpsc::channel::<T>' क्या बनाता है?",
        "options_en": ["Unbounded asynchronous channel", "Bounded synchronous channel", "Unbounded sync channel", "Single-element channel"],
        "options_hi": ["अनबाउंडेड एसिंक्रोनस चैनल", "बाउंडेड सिंक्रोनस चैनल", "अनबाउंडेड सिंक चैनल", "सिंगल-एलिमेंट चैनल"],
        "answer_en": "Unbounded asynchronous channel",
        "answer_hi": "अनबाउंडेड एसिंक्रोनस चैनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the purpose of 'std::mem::ManuallyDrop::take'?",
        "question_hi": "'std::mem::ManuallyDrop::take' का उद्देश्य क्या है?",
        "options_en": ["Take ownership of the value without running destructor", "Run destructor manually", "Copy the value", "Move the value safely"],
        "options_hi": ["डिस्ट्रक्टर चलाए बिना मान का स्वामित्व लें", "डिस्ट्रक्टर मैन्युअली चलाएं", "मान की प्रतिलिपि", "मान को सुरक्षित रूप से स्थानांतरित"],
        "answer_en": "Take ownership of the value without running destructor",
        "answer_hi": "डिस्ट्रक्टर चलाए बिना मान का स्वामित्व लें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What does 'std::hint::black_box' prevent in benchmarking?",
        "question_hi": "बेंचमार्किंग में 'std::hint::black_box' क्या रोकता है?",
        "options_en": ["Compiler optimizations that could eliminate code", "Memory allocations", "Thread interactions", "I/O operations"],
        "options_hi": ["कंपाइलर अनुकूलन जो कोड को समाप्त कर सकते हैं", "मेमोरी आवंटन", "थ्रेड इंटरैक्शन", "I/O ऑपरेशन"],
        "answer_en": "Compiler optimizations that could eliminate code",
        "answer_hi": "कंपाइलर अनुकूलन जो कोड को समाप्त कर सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the 'generic associated types' (GATs) feature?",
        "question_hi": "'जेनेरिक एसोसिएटेड टाइप्स' (GATs) फीचर क्या है?",
        "options_en": ["Associated types in traits that can be generic", "Generic type parameters", "Associated constants", "Generic trait bounds"],
        "options_hi": ["ट्रेट्स में एसोसिएटेड टाइप्स जो जेनेरिक हो सकते हैं", "जेनेरिक टाइप पैरामीटर्स", "एसोसिएटेड कॉन्स्टेंट्स", "जेनेरिक ट्रेट बाउंड्स"],
        "answer_en": "Associated types in traits that can be generic",
        "answer_hi": "ट्रेट्स में एसोसिएटेड टाइप्स जो जेनेरिक हो सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What does 'std::sync::atomic::AtomicPtr::fetch_update' do?",
        "question_hi": "'std::sync::atomic::AtomicPtr::fetch_update' क्या करता है?",
        "options_en": ["Atomically updates pointer using function and returns previous", "Updates pointer non-atomically", "Fetches without updating", "Updates memory location"],
        "options_hi": ["परमाणु रूप से फ़ंक्शन का उपयोग करके पॉइंटर अपडेट और पिछला लौटाता", "गैर-परमाणु रूप से पॉइंटर अपडेट", "अपडेट किए बिना फ़ेच", "मेमोरी लोकेशन अपडेट"],
        "answer_en": "Atomically updates pointer using function and returns previous",
        "answer_hi": "परमाणु रूप से फ़ंक्शन का उपयोग करके पॉइंटर अपडेट और पिछला लौटाता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the 'const generics' feature in Rust?",
        "question_hi": "Rust में 'कॉन्स्ट जेनेरिक्स' फीचर क्या है?",
        "options_en": ["Generic parameters that are constant values", "Constant type parameters", "Generic constants", "Compile-time generics"],
        "options_hi": ["जेनेरिक पैरामीटर्स जो कॉन्स्टेंट वैल्यू हैं", "कॉन्स्टेंट टाइप पैरामीटर्स", "जेनेरिक कॉन्स्टेंट्स", "कंपाइल-टाइम जेनेरिक्स"],
        "answer_en": "Generic parameters that are constant values",
        "answer_hi": "जेनेरिक पैरामीटर्स जो कॉन्स्टेंट वैल्यू हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What does 'std::mem::offset_of!' macro provide?",
        "question_hi": "'std::mem::offset_of!' मैक्रो क्या प्रदान करता है?",
        "options_en": ["Byte offset of a field in a struct", "Memory address of field", "Field size information", "Struct alignment"],
        "options_hi": ["स्ट्रक्चर में फ़ील्ड का बाइट ऑफसेट", "फ़ील्ड का मेमोरी एड्रेस", "फ़ील्ड आकार जानकारी", "स्ट्रक्चर अलाइनमेंट"],
        "answer_en": "Byte offset of a field in a struct",
        "answer_hi": "स्ट्रक्चर में फ़ील्ड का बाइट ऑफसेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the 'never type' (!) and its special properties?",
        "question_hi": "'नेवर टाइप' (!) और इसके विशेष गुण क्या हैं?",
        "options_en": ["Type that can never be instantiated, coerces to any type", "Empty type with no values", "Type for infinite loops", "Error type"],
        "options_hi": ["प्रकार जिसे कभी भी इंस्टेंटिएट नहीं किया जा सकता, किसी भी प्रकार में बदलता", "बिना मानों का खाली प्रकार", "अनंत लूप के लिए प्रकार", "त्रुटि प्रकार"],
        "answer_en": "Type that can never be instantiated, coerces to any type",
        "answer_hi": "प्रकार जिसे कभी भी इंस्टेंटिएट नहीं किया जा सकता, किसी भी प्रकार में बदलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What does 'std::sync::Arc::increment_strong_count' do?",
        "question_hi": "'std::sync::Arc::increment_strong_count' क्या करता है?",
        "options_en": ["Manually increments strong count without getting Arc", "Creates new Arc", "Increases reference limit", "Allocates more memory"],
        "options_hi": ["Arc प्राप्त किए बिना मैन्युअली स्ट्रांग काउंट बढ़ाता", "नया Arc बनाता", "संदर्भ सीमा बढ़ाता", "अधिक मेमोरी आवंटित"],
        "answer_en": "Manually increments strong count without getting Arc",
        "answer_hi": "Arc प्राप्त किए बिना मैन्युअली स्ट्रांग काउंट बढ़ाता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the 'unsafe trait' pattern for?",
        "question_hi": "'अनसेफ ट्रेट' पैटर्न किसके लिए है?",
        "options_en": ["Traits that require unsafe code to implement", "Traits that are always unsafe", "Unsafe method traits", "Memory unsafe traits"],
        "options_hi": ["ऐसे ट्रेट्स जिन्हें लागू करने के लिए अनसेफ कोड की आवश्यकता होती है", "ट्रेट्स जो हमेशा अनसेफ हैं", "अनसेफ मेथड ट्रेट्स", "मेमोरी अनसेफ ट्रेट्स"],
        "answer_en": "Traits that require unsafe code to implement",
        "answer_hi": "ऐसे ट्रेट्स जिन्हें लागू करने के लिए अनसेफ कोड की आवश्यकता होती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What does 'std::ptr::NonNull::new_unchecked' assume?",
        "question_hi": "'std::ptr::NonNull::new_unchecked' क्या मानता है?",
        "options_en": ["Pointer is already non-null", "Pointer is aligned", "Memory is allocated", "Type is valid"],
        "options_hi": ["पॉइंटर पहले से ही नॉन-नल है", "पॉइंटर अलाइन है", "मेमोरी आवंटित है", "प्रकार मान्य है"],
        "answer_en": "Pointer is already non-null",
        "answer_hi": "पॉइंटर पहले से ही नॉन-नल है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the 'type state' pattern in Rust?",
        "question_hi": "Rust में 'टाइप स्टेट' पैटर्न क्या है?",
        "options_en": ["Encoding state in type system using generics", "State machine implementation", "Type-driven state management", "Generic state patterns"],
        "options_hi": ["जेनेरिक्स का उपयोग करके टाइप सिस्टम में स्टेट एनकोड", "स्टेट मशीन कार्यान्वयन", "टाइप-ड्रिवन स्टेट मैनेजमेंट", "जेनेरिक स्टेट पैटर्न"],
        "answer_en": "Encoding state in type system using generics",
        "answer_hi": "जेनेरिक्स का उपयोग करके टाइप सिस्टम में स्टेट एनकोड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What does 'std::mem::forget' return?",
        "question_hi": "'std::mem::forget' क्या लौटाता है?",
        "options_en": ["Nothing (unit type)", "The forgotten value", "Memory address", "Boolean success"],
        "options_hi": ["कुछ नहीं (यूनिट टाइप)", "भूला हुआ मान", "मेमोरी एड्रेस", "बूलियन सफलता"],
        "answer_en": "Nothing (unit type)",
        "answer_hi": "कुछ नहीं (यूनिट टाइप)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the 'arbitrary self types' feature?",
        "question_hi": "'अर्बिट्रेरी सेल्फ टाइप्स' फीचर क्या है?",
        "options_en": ["Methods can take Self as different pointer types", "Any type as self parameter", "Dynamic self types", "Generic self parameters"],
        "options_hi": ["विधियाँ Self को विभिन्न पॉइंटर प्रकारों के रूप में ले सकती हैं", "सेल्फ पैरामीटर के रूप में कोई भी प्रकार", "डायनामिक सेल्फ टाइप्स", "जेनेरिक सेल्फ पैरामीटर्स"],
        "answer_en": "Methods can take Self as different pointer types",
        "answer_hi": "विधियाँ Self को विभिन्न पॉइंटर प्रकारों के रूप में ले सकती हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What does 'std::sync::OnceLock::get_or_init' guarantee?",
        "question_hi": "'std::sync::OnceLock::get_or_init' क्या गारंटी देता है?",
        "options_en": ["Thread-safe lazy initialization", "Fast initialization", "Memory safety", "No panics"],
        "options_hi": ["थ्रेड-सुरक्षित आलसी आरंभीकरण", "तेज आरंभीकरण", "मेमोरी सुरक्षा", "कोई पैनिक नहीं"],
        "answer_en": "Thread-safe lazy initialization",
        "answer_hi": "थ्रेड-सुरक्षित आलसी आरंभीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the 'trait object lifetime elision' rule?",
        "question_hi": "'ट्रेट ऑब्जेक्ट लाइफटाइम एलिशन' नियम क्या है?",
        "options_en": ["&'a (dyn Trait + 'b) becomes &'a (dyn Trait + 'a) if 'b outlives 'a", "Automatic lifetime deduction", "Trait object lifetime inference", "Default lifetime for traits"],
        "options_hi": ["&'a (dyn Trait + 'b) &'a (dyn Trait + 'a) बन जाता है यदि 'b, 'a से अधिक जीवित रहता है", "स्वचालित लाइफटाइम डिडक्शन", "ट्रेट ऑब्जेक्ट लाइफटाइम इनफेरेंस", "ट्रेट्स के लिए डिफ़ॉल्ट लाइफटाइम"],
        "answer_en": "&'a (dyn Trait + 'b) becomes &'a (dyn Trait + 'a) if 'b outlives 'a",
        "answer_hi": "&'a (dyn Trait + 'b) &'a (dyn Trait + 'a) बन जाता है यदि 'b, 'a से अधिक जीवित रहता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What does 'std::mem::size_of_val_raw' operate on?",
        "question_hi": "'std::mem::size_of_val_raw' किस पर संचालित होता है?",
        "options_en": ["Raw pointer to dynamically-sized type", "Raw memory blocks", "Uninitialized memory", "Any pointer type"],
        "options_hi": ["डायनामिकली-साइज्ड टाइप का रॉ पॉइंटर", "रॉ मेमोरी ब्लॉक्स", "अप्रारंभिक मेमोरी", "कोई भी पॉइंटर प्रकार"],
        "answer_en": "Raw pointer to dynamically-sized type",
        "answer_hi": "डायनामिकली-साइज्ड टाइप का रॉ पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the 'const_eval_limit' setting for?",
        "question_hi": "'const_eval_limit' सेटिंग किसके लिए है?",
        "options_en": ["Limit compile-time evaluation steps to prevent hangs", "Const function optimization", "Memory limit for const eval", "Compilation time limit"],
        "options_hi": ["हैंग्स रोकने के लिए कंपाइल-टाइम मूल्यांकन चरणों को सीमित", "कॉन्स्ट फ़ंक्शन अनुकूलन", "कॉन्स्ट eval के लिए मेमोरी लिमिट", "कंपाइलेशन टाइम लिमिट"],
        "answer_en": "Limit compile-time evaluation steps to prevent hangs",
        "answer_hi": "हैंग्स रोकने के लिए कंपाइल-टाइम मूल्यांकन चरणों को सीमित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What does 'std::sync::mpsc::sync_channel(0)' create?",
        "question_hi": "'std::sync::mpsc::sync_channel(0)' क्या बनाता है?",
        "options_en": ["Rendezvous channel (no buffer)", "Unbounded channel", "Single-element channel", "Blocking channel"],
        "options_hi": ["रेंडेज़वस चैनल (कोई बफर नहीं)", "अनबाउंडेड चैनल", "सिंगल-एलिमेंट चैनल", "ब्लॉकिंग चैनल"],
        "answer_en": "Rendezvous channel (no buffer)",
        "answer_hi": "रेंडेज़वस चैनल (कोई बफर नहीं)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the 'unsafe_op_in_unsafe_fn' lint?",
        "question_hi": "'unsafe_op_in_unsafe_fn' लिंट क्या है?",
        "options_en": ["Requires unsafe blocks in unsafe functions", "Allows unsafe operations anywhere", "Warns about safe code in unsafe functions", "Disables unsafe operations"],
        "options_hi": ["अनसेफ फ़ंक्शन में अनसेफ ब्लॉक्स की आवश्यकता", "कहीं भी अनसेफ ऑपरेशन की अनुमति", "अनसेफ फ़ंक्शन में सेफ कोड के बारे में चेतावनी", "अनसेफ ऑपरेशन अक्षम"],
        "answer_en": "Requires unsafe blocks in unsafe functions",
        "answer_hi": "अनसेफ फ़ंक्शन में अनसेफ ब्लॉक्स की आवश्यकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What does 'std::mem::transmute' require about type sizes?",
        "question_hi": "'std::mem::transmute' को टाइप साइज के बारे में क्या आवश्यकता है?",
        "options_en": ["Source and destination types must have same size", "Types can have different sizes", "Size doesn't matter", "Automatic size conversion"],
        "options_hi": ["स्रोत और गंतव्य प्रकारों का आकार समान होना चाहिए", "प्रकारों का आकार अलग हो सकता है", "आकार मायने नहीं रखता", "स्वचालित आकार रूपांतरण"],
        "answer_en": "Source and destination types must have same size",
        "answer_hi": "स्रोत और गंतव्य प्रकारों का आकार समान होना चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the 'allocator_api' feature for?",
        "question_hi": "'allocator_api' फीचर किसके लिए है?",
        "options_en": ["Custom memory allocators for collections", "Memory allocation tracking", "Automatic allocator selection", "Global allocator configuration"],
        "options_hi": ["संग्रह के लिए कस्टम मेमोरी आवंटक", "मेमोरी आवंटन ट्रैकिंग", "स्वचालित आवंटक चयन", "ग्लोबल आवंटक कॉन्फ़िगरेशन"],
        "answer_en": "Custom memory allocators for collections",
        "answer_hi": "संग्रह के लिए कस्टम मेमोरी आवंटक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What does 'std::sync::atomic::AtomicU64::fetch_max' do?",
        "question_hi": "'std::sync::atomic::AtomicU64::fetch_max' क्या करता है?",
        "options_en": ["Atomically sets to max of current and given, returns old", "Finds maximum value", "Sets maximum limit", "Compares and swaps"],
        "options_hi": ["परमाणु रूप से वर्तमान और दिए गए के अधिकतम पर सेट, पुराना लौटाता", "अधिकतम मान ढूंढता", "अधिकतम सीमा सेट", "तुलना और स्वैप"],
        "answer_en": "Atomically sets to max of current and given, returns old",
        "answer_hi": "परमाणु रूप से वर्तमान और दिए गए के अधिकतम पर सेट, पुराना लौटाता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the 'box_syntax' feature for?",
        "question_hi": "'box_syntax' फीचर किसके लिए है?",
        "options_en": ["Box construction syntax (box value)", "Box pattern matching", "Generic box types", "Automatic boxing"],
        "options_hi": ["बॉक्स निर्माण सिंटैक्स (box value)", "बॉक्स पैटर्न मिलान", "जेनेरिक बॉक्स प्रकार", "स्वचालित बॉक्सिंग"],
        "answer_en": "Box construction syntax (box value)",
        "answer_hi": "बॉक्स निर्माण सिंटैक्स (box value)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What does 'std::mem::replace' require about the types?",
        "question_hi": "'std::mem::replace' को प्रकारों के बारे में क्या आवश्यकता है?",
        "options_en": ["Both values must have same type", "Types can be different", "Automatic type conversion", "No type requirements"],
        "options_hi": ["दोनों मानों का प्रकार समान होना चाहिए", "प्रकार अलग हो सकते हैं", "स्वचालित प्रकार रूपांतरण", "कोई प्रकार आवश्यकता नहीं"],
        "answer_en": "Both values must have same type",
        "answer_hi": "दोनों मानों का प्रकार समान होना चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the 'unsafe_cell' interior mutability primitive?",
        "question_hi": "'unsafe_cell' इंटीरियर म्यूटेबिलिटी प्रिमिटिव क्या है?",
        "options_en": ["Lowest-level interior mutability without checks", "Safe interior mutability", "Thread-safe interior mutability", "Atomic interior mutability"],
        "options_hi": ["बिना जांच के सबसे निचले स्तर की आंतरिक परिवर्तनशीलता", "सुरक्षित आंतरिक परिवर्तनशीलता", "थ्रेड-सुरक्षित आंतरिक परिवर्तनशीलता", "एटोमिक आंतरिक परिवर्तनशीलता"],
        "answer_en": "Lowest-level interior mutability without checks",
        "answer_hi": "बिना जांच के सबसे निचले स्तर की आंतरिक परिवर्तनशीलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What does 'std::ptr::drop_in_place' do?",
        "question_hi": "'std::ptr::drop_in_place' क्या करता है?",
        "options_en": ["Runs destructor on pointed-to value", "Deallocates memory", "Sets pointer to null", "Forgets the value"],
        "options_hi": ["पॉइंट किए गए मान पर डिस्ट्रक्टर चलाता", "मेमोरी डीलोकेट", "पॉइंटर को नल सेट", "मान भूल जाता"],
        "answer_en": "Runs destructor on pointed-to value",
        "answer_hi": "पॉइंट किए गए मान पर डिस्ट्रक्टर चलाता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the 'specialization' feature for?",
        "question_hi": "'स्पेशलाइज़ेशन' फीचर किसके लिए है?",
        "options_en": ["Overlapping trait implementations with more specific ones", "Trait optimization", "Method specialization", "Generic performance"],
        "options_hi": ["अधिक विशिष्ट वाले के साथ ओवरलैपिंग ट्रेट कार्यान्वयन", "ट्रेट अनुकूलन", "विधि विशेषज्ञता", "जेनेरिक प्रदर्शन"],
        "answer_en": "Overlapping trait implementations with more specific ones",
        "answer_hi": "अधिक विशिष्ट वाले के साथ ओवरलैपिंग ट्रेट कार्यान्वयन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What does 'std::sync::Mutex::get_mut' provide?",
        "question_hi": "'std::sync::Mutex::get_mut' क्या प्रदान करता है?",
        "options_en": ["Direct mutable access when no other references exist", "Thread-safe mutable access", "Immutable access", "Atomic access"],
        "options_hi": ["सीधी म्यूटेबल एक्सेस जब कोई अन्य संदर्भ मौजूद नहीं", "थ्रेड-सुरक्षित म्यूटेबल एक्सेस", "इम्यूटेबल एक्सेस", "एटोमिक एक्सेस"],
        "answer_en": "Direct mutable access when no other references exist",
        "answer_hi": "सीधी म्यूटेबल एक्सेस जब कोई अन्य संदर्भ मौजूद नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the 'min_specialization' feature?",
        "question_hi": "'min_specialization' फीचर क्या है?",
        "options_en": ["Limited form of specialization for core and std", "Minimal trait implementation", "Specialization for small types", "Compile-time specialization"],
        "options_hi": ["कोर और std के लिए स्पेशलाइज़ेशन का सीमित रूप", "न्यूनतम ट्रेट कार्यान्वयन", "छोटे प्रकारों के लिए विशेषज्ञता", "कंपाइल-टाइम विशेषज्ञता"],
        "answer_en": "Limited form of specialization for core and std",
        "answer_hi": "कोर और std के लिए स्पेशलाइज़ेशन का सीमित रूप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What does 'std::mem::MaybeUninit::assume_init' assume?",
        "question_hi": "'std::mem::MaybeUninit::assume_init' क्या मानता है?",
        "options_en": ["MaybeUninit is fully initialized", "Memory is allocated", "Type is valid", "No aliasing exists"],
        "options_hi": ["MaybeUninit पूरी तरह से आरंभ है", "मेमोरी आवंटित है", "प्रकार मान्य है", "कोई एलियासिंग मौजूद नहीं"],
        "answer_en": "MaybeUninit is fully initialized",
        "answer_hi": "MaybeUninit पूरी तरह से आरंभ है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the 'unsafe_pin_internals' feature?",
        "question_hi": "'unsafe_pin_internals' फीचर क्या है?",
        "options_en": ["Access to Pin internals for unsafe code", "Safe pinning operations", "Memory pinning internals", "Pin trait implementation"],
        "options_hi": ["अनसेफ कोड के लिए Pin इंटर्नल्स तक पहुंच", "सुरक्षित पिनिंग ऑपरेशन", "मेमोरी पिनिंग इंटर्नल्स", "Pin ट्रेट कार्यान्वयन"],
        "answer_en": "Access to Pin internals for unsafe code",
        "answer_hi": "अनसेफ कोड के लिए Pin इंटर्नल्स तक पहुंच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What does 'std::sync::atomic::AtomicBool::fetch_nand' do?",
        "question_hi": "'std::sync::atomic::AtomicBool::fetch_nand' क्या करता है?",
        "options_en": ["Atomic NAND operation returning previous value", "Logical AND operation", "Bitwise NAND", "Comparison operation"],
        "options_hi": ["परमाणु NAND ऑपरेशन पिछला मान लौटाता", "लॉजिकल AND ऑपरेशन", "बिटवाइज NAND", "तुलना ऑपरेशन"],
        "answer_en": "Atomic NAND operation returning previous value",
        "answer_hi": "परमाणु NAND ऑपरेशन पिछला मान लौटाता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the 'exhaustive_patterns' feature?",
        "question_hi": "'exhaustive_patterns' फीचर क्या है?",
        "options_en": ["Require patterns to be exhaustive in more contexts", "Pattern optimization", "Exhaustive matching", "Pattern completeness"],
        "options_hi": ["अधिक संदर्भों में पैटर्न को संपूर्ण होने की आवश्यकता", "पैटर्न अनुकूलन", "संपूर्ण मिलान", "पैटर्न पूर्णता"],
        "answer_en": "Require patterns to be exhaustive in more contexts",
        "answer_hi": "अधिक संदर्भों में पैटर्न को संपूर्ण होने की आवश्यकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What does 'std::ptr::slice_from_raw_parts_mut' create?",
        "question_hi": "'std::ptr::slice_from_raw_parts_mut' क्या बनाता है?",
        "options_en": ["Mutable raw slice pointer", "Immutable raw slice", "Safe mutable slice", "Memory slice"],
        "options_hi": ["म्यूटेबल रॉ स्लाइस पॉइंटर", "इम्यूटेबल रॉ स्लाइस", "सुरक्षित म्यूटेबल स्लाइस", "मेमोरी स्लाइस"],
        "answer_en": "Mutable raw slice pointer",
        "answer_hi": "म्यूटेबल रॉ स्लाइस पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the 'negative_impls' feature for?",
        "question_hi": "'negative_impls' फीचर किसके लिए है?",
        "options_en": ["Opt-out trait implementations", "Negative trait bounds", "Trait exclusion", "Anti-implementations"],
        "options_hi": ["ऑप्ट-आउट ट्रेट कार्यान्वयन", "नकारात्मक ट्रेट बाउंड्स", "ट्रेट बहिष्कार", "विरोधी कार्यान्वयन"],
        "answer_en": "Opt-out trait implementations",
        "answer_hi": "ऑप्ट-आउट ट्रेट कार्यान्वयन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What does 'std::mem::align_of' return for ZSTs?",
        "question_hi": "ZSTs के लिए 'std::mem::align_of' क्या लौटाता है?",
        "options_en": ["1 (minimum alignment)", "0", "Platform-dependent", "Size of type"],
        "options_hi": ["1 (न्यूनतम अलाइनमेंट)", "0", "प्लेटफ़ॉर्म-निर्भर", "प्रकार का आकार"],
        "answer_en": "1 (minimum alignment)",
        "answer_hi": "1 (न्यूनतम अलाइनमेंट)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the 'unsafe_block_in_unsafe_fn' behavior?",
        "question_hi": "'unsafe_block_in_unsafe_fn' व्यवहार क्या है?",
        "options_en": ["Unsafe operations in unsafe functions require unsafe blocks", "Unsafe functions are always unsafe", "No unsafe blocks needed", "Automatic unsafe scoping"],
        "options_hi": ["अनसेफ फ़ंक्शन में अनसेफ ऑपरेशन को अनसेफ ब्लॉक्स की आवश्यकता", "अनसेफ फ़ंक्शन हमेशा अनसेफ हैं", "कोई अनसेफ ब्लॉक आवश्यक नहीं", "स्वचालित अनसेफ स्कोपिंग"],
        "answer_en": "Unsafe operations in unsafe functions require unsafe blocks",
        "answer_hi": "अनसेफ फ़ंक्शन में अनसेफ ऑपरेशन को अनसेफ ब्लॉक्स की आवश्यकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What does 'std::sync::Arc::ptr_eq' check?",
        "question_hi": "'std::sync::Arc::ptr_eq' क्या जांचता है?",
        "options_en": ["Whether two Arcs point to same allocation", "Whether values are equal", "Whether pointers are null", "Whether counts match"],
        "options_hi": ["क्या दो Arcs एक ही आवंटन की ओर इशारा", "क्या मान बराबर हैं", "क्या पॉइंटर्स नल हैं", "क्या गिनती मेल खाती"],
        "answer_en": "Whether two Arcs point to same allocation",
        "answer_hi": "क्या दो Arcs एक ही आवंटन की ओर इशारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the 'fundamental' attribute for?",
        "question_hi": "'fundamental' एट्रिब्यूट किसके लिए है?",
        "options_en": ["Mark types that can be used in coherence special cases", "Basic type marker", "Core language types", "Primitive type indicator"],
        "options_hi": ["ऐसे प्रकार चिह्नित करें जो coherence विशेष मामलों में उपयोग किए जा सकते हैं", "बेसिक टाइप मार्कर", "कोर भाषा प्रकार", "आदिम प्रकार सूचक"],
        "answer_en": "Mark types that can be used in coherence special cases",
        "answer_hi": "ऐसे प्रकार चिह्नित करें जो coherence विशेष मामलों में उपयोग किए जा सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What does 'std::mem::needs_drop' return for integers?",
        "question_hi": "इंटीजर्स के लिए 'std::mem::needs_drop' क्या लौटाता है?",
        "options_en": ["false (no destructor needed)", "true", "Depends on value", "Always true"],
        "options_hi": ["false (कोई डिस्ट्रक्टर आवश्यक नहीं)", "true", "मान पर निर्भर", "हमेशा true"],
        "answer_en": "false (no destructor needed)",
        "answer_hi": "false (कोई डिस्ट्रक्टर आवश्यक नहीं)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the 'auto_traits' feature for?",
        "question_hi": "'auto_traits' फीचर किसके लिए है?",
        "options_en": ["Automatically derived marker traits", "Automatic trait implementation", "Trait inference", "Default trait derivation"],
        "options_hi": ["स्वचालित रूप से व्युत्पन्न मार्कर ट्रेट्स", "स्वचालित ट्रेट कार्यान्वयन", "ट्रेट अनुमान", "डिफ़ॉल्ट ट्रेट व्युत्पत्ति"],
        "answer_en": "Automatically derived marker traits",
        "answer_hi": "स्वचालित रूप से व्युत्पन्न मार्कर ट्रेट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What does 'std::ptr::write_volatile' guarantee?",
        "question_hi": "'std::ptr::write_volatile' क्या गारंटी देता है?",
        "options_en": ["Volatile write preventing compiler optimization", "Atomic write operation", "Thread-safe write", "Memory barrier"],
        "options_hi": ["वोलेटाइल राइट कंपाइलर अनुकूलन रोकता है", "एटोमिक राइट ऑपरेशन", "थ्रेड-सुरक्षित राइट", "मेमोरी बैरियर"],
        "answer_en": "Volatile write preventing compiler optimization",
        "answer_hi": "वोलेटाइल राइट कंपाइलर अनुकूलन रोकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the 'unsafe_no_drop_flag' feature?",
        "question_hi": "'unsafe_no_drop_flag' फीचर क्या है?",
        "options_en": ["Remove drop flags for better performance", "Disable drop checking", "Manual drop control", "Drop optimization"],
        "options_hi": ["बेहतर प्रदर्शन के लिए ड्रॉप फ्लैग्स हटाएं", "ड्रॉप चेकिंग अक्षम", "मैनुअल ड्रॉप नियंत्रण", "ड्रॉप अनुकूलन"],
        "answer_en": "Remove drop flags for better performance",
        "answer_hi": "बेहतर प्रदर्शन के लिए ड्रॉप फ्लैग्स हटाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What does 'std::sync::atomic::compiler_fence' do?",
        "question_hi": "'std::sync::atomic::compiler_fence' क्या करता है?",
        "options_en": ["Compiler memory barrier without CPU instruction", "CPU memory barrier", "Thread synchronization", "Memory allocation barrier"],
        "options_hi": ["CPU निर्देश के बिना कंपाइलर मेमोरी बैरियर", "CPU मेमोरी बैरियर", "थ्रेड सिंक्रनाइज़ेशन", "मेमोरी आवंटन बैरियर"],
        "answer_en": "Compiler memory barrier without CPU instruction",
        "answer_hi": "CPU निर्देश के बिना कंपाइलर मेमोरी बैरियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the 'trivial_bounds' feature for?",
        "question_hi": "'trivial_bounds' फीचर किसके लिए है?",
        "options_en": ["Allow trivial where clauses that are always true", "Simple trait bounds", "Automatic bound deduction", "Bound optimization"],
        "options_hi": ["तुच्छ where क्लॉज की अनुमति जो हमेशा सत्य होती हैं", "सरल ट्रेट बाउंड्स", "स्वचालित बाउंड डिडक्शन", "बाउंड अनुकूलन"],
        "answer_en": "Allow trivial where clauses that are always true",
        "answer_hi": "तुच्छ where क्लॉज की अनुमति जो हमेशा सत्य होती हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What does 'std::mem::forget' cost in terms of resources?",
        "question_hi": "संसाधनों के संदर्भ में 'std::mem::forget' की क्या लागत है?",
        "options_en": ["Potential resource leaks (memory, file handles, etc.)", "No cost", "Memory corruption", "Performance penalty"],
        "options_hi": ["संभावित संसाधन लीक (मेमोरी, फ़ाइल हैंडल, आदि)", "कोई लागत नहीं", "मेमोरी करप्शन", "प्रदर्शन जुर्माना"],
        "answer_en": "Potential resource leaks (memory, file handles, etc.)",
        "answer_hi": "संभावित संसाधन लीक (मेमोरी, फ़ाइल हैंडल, आदि)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the 'unsafe_destructor_blind_to_params' lint?",
        "question_hi": "'unsafe_destructor_blind_to_params' लिंट क्या है?",
        "options_en": ["Warns about destructors that ignore type parameters", "Safe destructor checking", "Parameter-aware destructors", "Generic destructor safety"],
        "options_hi": ["ऐसे डिस्ट्रक्टर्स के बारे में चेतावनी जो टाइप पैरामीटर्स को अनदेखा करते हैं", "सुरक्षित डिस्ट्रक्टर जांच", "पैरामीटर-अवेयर डिस्ट्रक्टर्स", "जेनेरिक डिस्ट्रक्टर सुरक्षा"],
        "answer_en": "Warns about destructors that ignore type parameters",
        "answer_hi": "ऐसे डिस्ट्रक्टर्स के बारे में चेतावनी जो टाइप पैरामीटर्स को अनदेखा करते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What does 'std::ptr::null_mut' return?",
        "question_hi": "'std::ptr::null_mut' क्या लौटाता है?",
        "options_en": ["Null mutable raw pointer", "Null immutable pointer", "Zero pointer", "Invalid pointer"],
        "options_hi": ["नल म्यूटेबल रॉ पॉइंटर", "नल इम्यूटेबल पॉइंटर", "जीरो पॉइंटर", "अमान्य पॉइंटर"],
        "answer_en": "Null mutable raw pointer",
        "answer_hi": "नल म्यूटेबल रॉ पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the 'abi_thiscall' calling convention?",
        "question_hi": "'abi_thiscall' कॉलिंग कन्वेंशन क्या है?",
        "options_en": ["C++ member function calling convention on x86", "C calling convention", "System calling convention", "Fast calling convention"],
        "options_hi": ["x86 पर C++ मेंबर फ़ंक्शन कॉलिंग कन्वेंशन", "C कॉलिंग कन्वेंशन", "सिस्टम कॉलिंग कन्वेंशन", "फास्ट कॉलिंग कन्वेंशन"],
        "answer_en": "C++ member function calling convention on x86",
        "answer_hi": "x86 पर C++ मेंबर फ़ंक्शन कॉलिंग कन्वेंशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What does 'std::mem::size_of' return for trait objects?",
        "question_hi": "ट्रेट ऑब्जेक्ट्स के लिए 'std::mem::size_of' क्या लौटाता है?",
        "options_en": ["Size of fat pointer (two usize)", "Size of vtable", "Size of data", "Compile error"],
        "options_hi": ["फैट पॉइंटर का आकार (दो usize)", "vtable का आकार", "डेटा का आकार", "कंपाइल त्रुटि"],
        "answer_en": "Size of fat pointer (two usize)",
        "answer_hi": "फैट पॉइंटर का आकार (दो usize)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the 'custom_test_frameworks' feature?",
        "question_hi": "'custom_test_frameworks' फीचर क्या है?",
        "options_en": ["Replace default test harness with custom one", "Custom test cases", "Test framework integration", "Extended testing"],
        "options_hi": ["डिफ़ॉल्ट टेस्ट हार्नेस को कस्टम से बदलें", "कस्टम टेस्ट केस", "टेस्ट फ्रेमवर्क इंटीग्रेशन", "विस्तारित टेस्टिंग"],
        "answer_en": "Replace default test harness with custom one",
        "answer_hi": "डिफ़ॉल्ट टेस्ट हार्नेस को कस्टम से बदलें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What does 'std::sync::atomic::AtomicUsize::as_ptr' return?",
        "question_hi": "'std::sync::atomic::AtomicUsize::as_ptr' क्या लौटाता है?",
        "options_en": ["Raw pointer to the atomic value", "Pointer to atomic structure", "Mutable reference", "Immutable reference"],
        "options_hi": ["एटोमिक मान का रॉ पॉइंटर", "एटोमिक संरचना का पॉइंटर", "म्यूटेबल संदर्भ", "इम्यूटेबल संदर्भ"],
        "answer_en": "Raw pointer to the atomic value",
        "answer_hi": "एटोमिक मान का रॉ पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the 'untagged_unions' feature?",
        "question_hi": "'untagged_unions' फीचर क्या है?",
        "options_en": ["Unions without discriminant (C-style unions)", "Memory unions", "Safe unions", "Generic unions"],
        "options_hi": ["डिस्क्रिमिनेंट के बिना यूनियन (C-स्टाइल यूनियन)", "मेमोरी यूनियन", "सुरक्षित यूनियन", "जेनेरिक यूनियन"],
        "answer_en": "Unions without discriminant (C-style unions)",
        "answer_hi": "डिस्क्रिमिनेंट के बिना यूनियन (C-स्टाइल यूनियन)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What does 'std::mem::zeroed' require about the type?",
        "question_hi": "'std::mem::zeroed' को प्रकार के बारे में क्या आवश्यकता है?",
        "options_en": ["Type must be valid with all bits zero", "Type must be numeric", "Type must be primitive", "No requirements"],
        "options_hi": ["प्रकार सभी बिट्स शून्य के साथ मान्य होना चाहिए", "प्रकार संख्यात्मक होना चाहिए", "प्रकार आदिम होना चाहिए", "कोई आवश्यकता नहीं"],
        "answer_en": "Type must be valid with all bits zero",
        "answer_hi": "प्रकार सभी बिट्स शून्य के साथ मान्य होना चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the 'asm_experimental_arch' feature?",
        "question_hi": "'asm_experimental_arch' फीचर क्या है?",
        "options_en": ["Inline assembly for experimental architectures", "Architecture-specific assembly", "Extended assembly syntax", "Cross-platform assembly"],
        "options_hi": ["प्रायोगिक आर्किटेक्चर के लिए इनलाइन असेंबली", "आर्किटेक्चर-विशिष्ट असेंबली", "विस्तारित असेंबली सिंटैक्स", "क्रॉस-प्लेटफ़ॉर्म असेंबली"],
        "answer_en": "Inline assembly for experimental architectures",
        "answer_hi": "प्रायोगिक आर्किटेक्चर के लिए इनलाइन असेंबली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What does 'std::ptr::read' do with the source?",
        "question_hi": "'std::ptr::read' स्रोत के साथ क्या करता है?",
        "options_en": ["Reads value without invalidating source memory", "Moves value from source", "Copies value leaving source valid", "Deallocates source"],
        "options_hi": ["स्रोत मेमोरी को अमान्य किए बिना मान पढ़ता", "स्रोत से मान स्थानांतरित", "मान की प्रतिलिपि स्रोत को मान्य छोड़", "स्रोत डीलोकेट"],
        "answer_en": "Reads value without invalidating source memory",
        "answer_hi": "स्रोत मेमोरी को अमान्य किए बिना मान पढ़ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the 'abi_vectorcall' calling convention?",
        "question_hi": "'abi_vectorcall' कॉलिंग कन्वेंशन क्या है?",
        "options_en": ["Vector register calling convention on x86/x64", "SIMD calling convention", "Fast vector calls", "Register-based calling"],
        "options_hi": ["x86/x64 पर वेक्टर रजिस्टर कॉलिंग कन्वेंशन", "SIMD कॉलिंग कन्वेंशन", "फास्ट वेक्टर कॉल", "रजिस्टर-आधारित कॉलिंग"],
        "answer_en": "Vector register calling convention on x86/x64",
        "answer_hi": "x86/x64 पर वेक्टर रजिस्टर कॉलिंग कन्वेंशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What does 'std::mem::transmute' do with lifetimes?",
        "question_hi": "'std::mem::transmute' लाइफटाइम्स के साथ क्या करता है?",
        "options_en": ["Does not change or affect lifetimes", "Extends lifetimes", "Shortens lifetimes", "Removes lifetime checks"],
        "options_hi": ["लाइफटाइम्स को नहीं बदलता या प्रभावित", "लाइफटाइम्स बढ़ाता", "लाइफटाइम्स छोटा", "लाइफटाइम जांच हटाता"],
        "answer_en": "Does not change or affect lifetimes",
        "answer_hi": "लाइफटाइम्स को नहीं बदलता या प्रभावित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the 'thiscall' calling convention used for?",
        "question_hi": "'thiscall' कॉलिंग कन्वेंशन किसके लिए उपयोग की जाती है?",
        "options_en": ["C++ member functions with implicit 'this' parameter", "C functions", "System calls", "Fast function calls"],
        "options_hi": ["अंतर्निहित 'this' पैरामीटर के साथ C++ मेंबर फ़ंक्शन", "C फ़ंक्शन", "सिस्टम कॉल", "फास्ट फ़ंक्शन कॉल"],
        "answer_en": "C++ member functions with implicit 'this' parameter",
        "answer_hi": "अंतर्निहित 'this' पैरामीटर के साथ C++ मेंबर फ़ंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What does 'std::mem::size_of' return for unsized types?",
        "question_hi": "अनसाइज्ड टाइप्स के लिए 'std::mem::size_of' क्या लौटाता है?",
        "options_en": ["Compile-time error", "0", "Size of pointer", "Platform-dependent"],
        "options_hi": ["कंपाइल-टाइम त्रुटि", "0", "पॉइंटर का आकार", "प्लेटफ़ॉर्म-निर्भर"],
        "answer_en": "Compile-time error",
        "answer_hi": "कंपाइल-टाइम त्रुटि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the 'abi_amdgpu_kernel' feature?",
        "question_hi": "'abi_amdgpu_kernel' फीचर क्या है?",
        "options_en": ["AMD GPU kernel function calling convention", "GPU computing", "AMD-specific ABI", "Kernel mode calling"],
        "options_hi": ["AMD GPU कर्नेल फ़ंक्शन कॉलिंग कन्वेंशन", "GPU कंप्यूटिंग", "AMD-विशिष्ट ABI", "कर्नेल मोड कॉलिंग"],
        "answer_en": "AMD GPU kernel function calling convention",
        "answer_hi": "AMD GPU कर्नेल फ़ंक्शन कॉलिंग कन्वेंशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What does 'std::ptr::NonNull::cast' do?",
        "question_hi": "'std::ptr::NonNull::cast' क्या करता है?",
        "options_en": ["Casts to different type preserving non-null", "Changes pointer type", "Converts to raw pointer", "Changes memory address"],
        "options_hi": ["नॉन-नल संरक्षित करते हुए विभिन्न प्रकार में कास्ट", "पॉइंटर प्रकार बदलता", "रॉ पॉइंटर में कनवर्ट", "मेमोरी एड्रेस बदलता"],
        "answer_en": "Casts to different type preserving non-null",
        "answer_hi": "नॉन-नल संरक्षित करते हुए विभिन्न प्रकार में कास्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the 'linkage' attribute for?",
        "question_hi": "'linkage' एट्रिब्यूट किसके लिए है?",
        "options_en": ["Control symbol linkage in object files", "Library linking", "Function visibility", "Module linking"],
        "options_hi": ["ऑब्जेक्ट फ़ाइलों में प्रतीक लिंकेज नियंत्रित", "लाइब्रेरी लिंकिंग", "फ़ंक्शन दृश्यता", "मॉड्यूल लिंकिंग"],
        "answer_en": "Control symbol linkage in object files",
        "answer_hi": "ऑब्जेक्ट फ़ाइलों में प्रतीक लिंकेज नियंत्रित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What does 'std::mem::align_of' return for #[repr(packed)] types?",
        "question_hi": "#[repr(packed)] प्रकारों के लिए 'std::mem::align_of' क्या लौटाता है?",
        "options_en": ["1 (minimum alignment)", "Platform alignment", "No alignment", "Field alignment"],
        "options_hi": ["1 (न्यूनतम अलाइनमेंट)", "प्लेटफ़ॉर्म अलाइनमेंट", "कोई अलाइनमेंट नहीं", "फ़ील्ड अलाइनमेंट"],
        "answer_en": "1 (minimum alignment)",
        "answer_hi": "1 (न्यूनतम अलाइनमेंट)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the 'ffi_returns_twice' attribute?",
        "question_hi": "'ffi_returns_twice' एट्रिब्यूट क्या है?",
        "options_en": ["Mark functions that may return multiple times", "Foreign function interface", "Multiple return values", "Exception handling"],
        "options_hi": ["ऐसे फ़ंक्शन चिह्नित करें जो कई बार लौट सकते हैं", "विदेशी फ़ंक्शन इंटरफेस", "एकाधिक रिटर्न मान", "एक्सेप्शन हैंडलिंग"],
        "answer_en": "Mark functions that may return multiple times",
        "answer_hi": "ऐसे फ़ंक्शन चिह्नित करें जो कई बार लौट सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What does 'std::ptr::copy_nonoverlapping' require?",
        "question_hi": "'std::ptr::copy_nonoverlapping' की क्या आवश्यकता है?",
        "options_en": ["Source and destination memory regions don't overlap", "Memory is allocated", "Pointers are aligned", "Types are the same"],
        "options_hi": ["स्रोत और गंतव्य मेमोरी क्षेत्र ओवरलैप नहीं करते", "मेमोरी आवंटित है", "पॉइंटर्स अलाइन हैं", "प्रकार समान हैं"],
        "answer_en": "Source and destination memory regions don't overlap",
        "answer_hi": "स्रोत और गंतव्य मेमोरी क्षेत्र ओवरलैप नहीं करते",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the 'cmse_nonsecure_entry' attribute?",
        "question_hi": "'cmse_nonsecure_entry' एट्रिब्यूट क्या है?",
        "options_en": ["ARM Cortex-M security extension for non-secure entry", "Memory security", "Function entry points", "Secure coding"],
        "options_hi": ["नॉन-सिक्योर एंट्री के लिए ARM Cortex-M सिक्योरिटी एक्सटेंशन", "मेमोरी सुरक्षा", "फ़ंक्शन एंट्री पॉइंट", "सिक्योर कोडिंग"],
        "answer_en": "ARM Cortex-M security extension for non-secure entry",
        "answer_hi": "नॉन-सिक्योर एंट्री के लिए ARM Cortex-M सिक्योरिटी एक्सटेंशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What does 'std::mem::forget' not do?",
        "question_hi": "'std::mem::forget' क्या नहीं करता?",
        "options_en": ["Run destructors", "Prevent memory leaks", "Allow resource reuse", "Deallocate memory"],
        "options_hi": ["डिस्ट्रक्टर्स चलाता", "मेमोरी लीक रोकता", "संसाधन पुन: उपयोग की अनुमति", "मेमोरी डीलोकेट"],
        "answer_en": "Run destructors",
        "answer_hi": "डिस्ट्रक्टर्स चलाता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the 'target_feature' attribute for?",
        "question_hi": "'target_feature' एट्रिब्यूट किसके लिए है?",
        "options_en": ["Enable CPU-specific features for functions", "Target platform specification", "Feature detection", "Cross-compilation"],
        "options_hi": ["फ़ंक्शन के लिए CPU-विशिष्ट सुविधाएँ सक्षम", "टार्गेट प्लेटफ़ॉर्म विशिष्टता", "फीचर डिटेक्शन", "क्रॉस-कंपाइलेशन"],
        "answer_en": "Enable CPU-specific features for functions",
        "answer_hi": "फ़ंक्शन के लिए CPU-विशिष्ट सुविधाएँ सक्षम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What does 'std::ptr::addr_of!' create for packed structs?",
        "question_hi": "पैक्ड स्ट्रक्चर्स के लिए 'std::ptr::addr_of!' क्या बनाता है?",
        "options_en": ["Raw pointer without requiring alignment", "Aligned pointer", "Safe reference", "Memory address"],
        "options_hi": ["अलाइनमेंट की आवश्यकता के बिना रॉ पॉइंटर", "अलाइन पॉइंटर", "सुरक्षित संदर्भ", "मेमोरी एड्रेस"],
        "answer_en": "Raw pointer without requiring alignment",
        "answer_hi": "अलाइनमेंट की आवश्यकता के बिना रॉ पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the 'thread_local' attribute for?",
        "question_hi": "'thread_local' एट्रिब्यूट किसके लिए है?",
        "options_en": ["Per-thread storage duration", "Thread safety", "Local variables", "Stack allocation"],
        "options_hi": ["प्रति-थ्रेड भंडारण अवधि", "थ्रेड सुरक्षा", "लोकल वेरिएबल", "स्टैक आवंटन"],
        "answer_en": "Per-thread storage duration",
        "answer_hi": "प्रति-थ्रेड भंडारण अवधि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What does 'std::mem::transmute' not check?",
        "question_hi": "'std::mem::transmute' क्या जांच नहीं करता?",
        "options_en": ["Validity of bit patterns for destination type", "Type sizes", "Memory alignment", "Lifetime validity"],
        "options_hi": ["गंतव्य प्रकार के लिए बिट पैटर्न की वैधता", "टाइप साइज", "मेमोरी अलाइनमेंट", "लाइफटाइम वैधता"],
        "answer_en": "Validity of bit patterns for destination type",
        "answer_hi": "गंतव्य प्रकार के लिए बिट पैटर्न की वैधता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the 'no_sanitize' attribute for?",
        "question_hi": "'no_sanitize' एट्रिब्यूट किसके लिए है?",
        "options_en": ["Disable specific sanitizer instrumentation", "Memory safety", "Code optimization", "Debugging"],
        "options_hi": ["विशिष्ट सैनिटाइज़र इंस्ट्रुमेंटेशन अक्षम", "मेमोरी सुरक्षा", "कोड अनुकूलन", "डिबगिंग"],
        "answer_en": "Disable specific sanitizer instrumentation",
        "answer_hi": "विशिष्ट सैनिटाइज़र इंस्ट्रुमेंटेशन अक्षम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What does 'std::ptr::write' do with the destination?",
        "question_hi": "'std::ptr::write' गंतव्य के साथ क्या करता है?",
        "options_en": ["Overwrites without reading or dropping old value", "Reads then writes", "Drops old value then writes", "Checks validity then writes"],
        "options_hi": ["पुराने मान को पढ़े या ड्रॉप किए बिना ओवरराइट", "पढ़ता फिर लिखता", "पुराना मान ड्रॉप फिर लिखता", "वैधता जांच फिर लिखता"],
        "answer_en": "Overwrites without reading or dropping old value",
        "answer_hi": "पुराने मान को पढ़े या ड्रॉप किए बिना ओवरराइट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the 'non_exhaustive' attribute for?",
        "question_hi": "'non_exhaustive' एट्रिब्यूट किसके लिए है?",
        "options_en": ["Prevent exhaustive pattern matching on types", "Incomplete types", "Private fields", "Sealed traits"],
        "options_hi": ["प्रकारों पर संपूर्ण पैटर्न मिलान रोकें", "अपूर्ण प्रकार", "निजी फ़ील्ड", "सील ट्रेट्स"],
        "answer_en": "Prevent exhaustive pattern matching on types",
        "answer_hi": "प्रकारों पर संपूर्ण पैटर्न मिलान रोकें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What does 'std::mem::MaybeUninit::uninit' create?",
        "question_hi": "'std::mem::MaybeUninit::uninit' क्या बनाता है?",
        "options_en": ["Uninitialized MaybeUninit value", "Zero-initialized value", "Default value", "Null value"],
        "options_hi": ["अप्रारंभिक MaybeUninit मान", "शून्य-आरंभ मान", "डिफ़ॉल्ट मान", "नल मान"],
        "answer_en": "Uninitialized MaybeUninit value",
        "answer_hi": "अप्रारंभिक MaybeUninit मान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the 'instruction_set' attribute for?",
        "question_hi": "'instruction_set' एट्रिब्यूट किसके लिए है?",
        "options_en": ["Specify CPU instruction set for function", "Assembly instructions", "CPU features", "Optimization hints"],
        "options_hi": ["फ़ंक्शन के लिए CPU इंस्ट्रक्शन सेट निर्दिष्ट", "असेंबली निर्देश", "CPU फीचर्स", "ऑप्टिमाइज़ेशन संकेत"],
        "answer_en": "Specify CPU instruction set for function",
        "answer_hi": "फ़ंक्शन के लिए CPU इंस्ट्रक्शन सेट निर्दिष्ट",
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