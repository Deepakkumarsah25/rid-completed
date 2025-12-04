const questions=[
    {
        "num": 1,
        "question_en": "What is the purpose of Rust's 'NonNull' type in pointer safety?",
        "question_hi": "Rust के 'NonNull' टाइप का पॉइंटर सेफ्टी में क्या उद्देश्य है?",
        "options_en": ["Ensure non-null pointers", "Enable variance control", "Support FFI operations", "All of the above"],
        "options_hi": ["नॉन-नल पॉइंटर सुनिश्चित करना", "वेरिएंस कंट्रोल सक्षम करना", "FFI ऑपरेशन सपोर्ट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How does Rust's 'Box::into_raw' method handle memory management?",
        "question_hi": "Rust का 'Box::into_raw' मेथड मेमोरी मैनेजमेंट कैसे हैंडल करता है?",
        "options_en": ["Convert to raw pointer", "Transfer ownership", "Prevent automatic deallocation", "All of the above"],
        "options_hi": ["रॉ पॉइंटर में कन्वर्ट करना", "ओनरशिप ट्रांसफर करना", "ऑटोमैटिक डीलोकेशन रोकना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the role of Rust's 'GlobalAlloc' trait in custom memory allocation?",
        "question_hi": "Rust के 'GlobalAlloc' ट्रेट की कस्टम मेमोरी अलोकेशन में क्या भूमिका है?",
        "options_en": ["Define allocation strategy", "Override default allocator", "Support no_std environments", "All of the above"],
        "options_hi": ["अलोकेशन स्ट्रैटेजी डिफाइन करना", "डिफॉल्ट अलोकेटर ओवरराइड करना", "no_std एनवायरनमेंट सपोर्ट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How does Rust's 'MaybeUninit::assume_init' ensure memory safety?",
        "question_hi": "Rust का 'MaybeUninit::assume_init' मेमोरी सेफ्टी कैसे सुनिश्चित करता है?",
        "options_en": ["Compiler verification", "Programmer responsibility", "Runtime checks", "All of the above"],
        "options_hi": ["कंपाइलर वेरिफिकेशन", "प्रोग्रामर जिम्मेदारी", "रनटाइम चेक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of Rust's 'PhantomData' in type system enforcement?",
        "question_hi": "Rust के 'PhantomData' का टाइप सिस्टम एनफोर्समेंट में क्या उद्देश्य है?",
        "options_en": ["Track type parameters", "Control variance", "Prevent misuse", "All of the above"],
        "options_hi": ["टाइप पैरामीटर ट्रैक करना", "वेरिएंस कंट्रोल करना", "मिसयूज रोकना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How does Rust's 'mem::forget' interact with resource management?",
        "question_hi": "Rust का 'mem::forget' रिसोर्स मैनेजमेंट के साथ कैसे इंटरैक्ट करता है?",
        "options_en": ["Prevent destructor runs", "Enable resource leaks", "Support FFI patterns", "All of the above"],
        "options_hi": ["डिस्ट्रक्टर रन रोकना", "रिसोर्स लीक सक्षम करना", "FFI पैटर्न सपोर्ट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the role of Rust's 'UnsafeCell::get' in interior mutability?",
        "question_hi": "Rust के 'UnsafeCell::get' की इंटीरियर म्यूटेबिलिटी में क्या भूमिका है?",
        "options_en": ["Access raw pointer", "Bypass borrow checker", "Enable mutation", "All of the above"],
        "options_hi": ["रॉ पॉइंटर एक्सेस करना", "बोरो चेकर बायपास करना", "म्यूटेशन सक्षम करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How does Rust's 'Pin::new_unchecked' enable self-referential structs?",
        "question_hi": "Rust का 'Pin::new_unchecked' सेल्फ-रेफरेंशियल स्ट्रक्चर कैसे सक्षम करता है?",
        "options_en": ["Bypass move restrictions", "Guarantee immobility", "Support async patterns", "All of the above"],
        "options_hi": ["मूव रिस्ट्रिक्शन बायपास करना", "इम्मोबिलिटी गारंटी देना", "async पैटर्न सपोर्ट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of Rust's 'ManuallyDrop::into_inner'?",
        "question_hi": "Rust के 'ManuallyDrop::into_inner' का क्या उद्देश्य है?",
        "options_en": ["Extract wrapped value", "Trigger destructor", "Transfer ownership", "All of the above"],
        "options_hi": ["रैप्ड वैल्यू निकालना", "डिस्ट्रक्टर ट्रिगर करना", "ओनरशिप ट्रांसफर करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How does Rust's 'ptr::read' handle memory copying?",
        "question_hi": "Rust का 'ptr::read' मेमोरी कॉपीिंग कैसे हैंडल करता है?",
        "options_en": ["Bitwise copy", "No ownership transfer", "Unsafe operation", "All of the above"],
        "options_hi": ["बिटवाइज कॉपी", "कोई ओनरशिप ट्रांसफर नहीं", "अनसेफ ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the role of Rust's 'slice::from_raw_parts' in FFI?",
        "question_hi": "Rust के 'slice::from_raw_parts' की FFI में क्या भूमिका है?",
        "options_en": ["Create slices from pointers", "Handle C arrays", "Memory safety verification", "All of the above"],
        "options_hi": ["पॉइंटर से स्लाइस बनाना", "C ऐरे हैंडल करना", "मेमोरी सेफ्टी वेरिफिकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How does Rust's 'mem::transmute_copy' differ from 'mem::transmute'?",
        "question_hi": "Rust का 'mem::transmute_copy' 'mem::transmute' से कैसे अलग है?",
        "options_en": ["Copies instead of moves", "Different size handling", "Memory layout preservation", "All of the above"],
        "options_hi": ["मूव के बजाय कॉपी करता है", "अलग साइज हैंडलिंग", "मेमोरी लेआउट प्रिजर्वेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of Rust's 'UnsafeCell::raw_get'?",
        "question_hi": "Rust के 'UnsafeCell::raw_get' का क्या उद्देश्य है?",
        "options_en": ["Direct pointer access", "Const context support", "Bypass runtime checks", "All of the above"],
        "options_hi": ["डायरेक्ट पॉइंटर एक्सेस", "Const कॉन्टेक्स्ट सपोर्ट", "रनटाइम चेक बायपास", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How does Rust's 'Box::from_raw' reconstruct owned values?",
        "question_hi": "Rust का 'Box::from_raw' ओन्ड वैल्यू कैसे रिकंस्ट्रक्ट करता है?",
        "options_en": ["From raw pointers", "Re-establish ownership", "Enable deallocation", "All of the above"],
        "options_hi": ["रॉ पॉइंटर से", "ओनरशिप दोबारा स्थापित करना", "डीलोकेशन सक्षम करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the role of Rust's 'NonNull::new_unchecked'?",
        "question_hi": "Rust के 'NonNull::new_unchecked' की क्या भूमिका है?",
        "options_en": ["Create NonNull without checks", "Performance optimization", "FFI integration", "All of the above"],
        "options_hi": ["बिना चेक के NonNull बनाना", "परफॉर्मेंस ऑप्टिमाइज़ेशन", "FFI इंटीग्रेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How does Rust's 'mem::replace' enable efficient state updates?",
        "question_hi": "Rust का 'mem::replace' एफिशिएंट स्टेट अपडेट कैसे सक्षम करता है?",
        "options_en": ["Swap values in place", "Avoid temporary moves", "Maintain ownership", "All of the above"],
        "options_hi": ["जगह पर वैल्यू स्वैप करना", "टेम्पररी मूव से बचना", "ओनरशिप मेंटेन करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of Rust's 'MaybeUninit::write'?",
        "question_hi": "Rust के 'MaybeUninit::write' का क्या उद्देश्य है?",
        "options_en": ["Initialize uninitialized memory", "Avoid undefined behavior", "Support gradual initialization", "All of the above"],
        "options_hi": ["अनइनिशियलाइज्ड मेमोरी इनिशियलाइज़ करना", "अनडिफाइंड बिहेवियर से बचना", "ग्रेजुअल इनिशियलाइज़ेशन सपोर्ट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How does Rust's 'ptr::addr_of!' macro handle field access?",
        "question_hi": "Rust का 'ptr::addr_of!' मैक्रो फील्ड एक्सेस कैसे हैंडल करता है?",
        "options_en": ["Create raw pointers", "Bypass reference rules", "Support unaligned access", "All of the above"],
        "options_hi": ["रॉ पॉइंटर बनाना", "रिफरेन्स रूल बायपास करना", "अनअलाइंड एक्सेस सपोर्ट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the role of Rust's 'mem::take' in default value replacement?",
        "question_hi": "Rust के 'mem::take' की डिफॉल्ट वैल्यू रिप्लेसमेंट में क्या भूमिका है?",
        "options_en": ["Replace with default", "Take ownership efficiently", "Avoid cloning", "All of the above"],
        "options_hi": ["डिफॉल्ट के साथ रिप्लेस करना", "एफिशिएंटली ओनरशिप लेना", "क्लोनिंग से बचना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How does Rust's 'UnsafeCell::from_mut' enable mutation?",
        "question_hi": "Rust का 'UnsafeCell::from_mut' म्यूटेशन कैसे सक्षम करता है?",
        "options_en": ["Convert &mut to UnsafeCell", "Enable interior mutability", "Bypass borrow checker", "All of the above"],
        "options_hi": ["&mut को UnsafeCell में कन्वर्ट करना", "इंटीरियर म्यूटेबिलिटी सक्षम करना", "बोरो चेकर बायपास करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of Rust's 'MaybeUninit::array_assume_init'?",
        "question_hi": "Rust के 'MaybeUninit::array_assume_init' का क्या उद्देश्य है?",
        "options_en": ["Initialize arrays safely", "Bulk assume_init", "Performance optimization", "All of the above"],
        "options_hi": ["ऐरे सुरक्षित रूप से इनिशियलाइज़ करना", "बल्क assume_init", "परफॉर्मेंस ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How does Rust's 'ptr::copy_nonoverlapping' ensure memory safety?",
        "question_hi": "Rust का 'ptr::copy_nonoverlapping' मेमोरी सेफ्टी कैसे सुनिश्चित करता है?",
        "options_en": ["No overlap guarantee", "Memcpy equivalent", "Unsafe but precise", "All of the above"],
        "options_hi": ["नो ओवरलैप गारंटी", "Memcpy इक्विवेलेंट", "अनसेफ लेकिन प्रिसाइज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the role of Rust's 'ManuallyDrop::new'?",
        "question_hi": "Rust के 'ManuallyDrop::new' की क्या भूमिका है?",
        "options_en": ["Wrap value without drop", "Enable manual management", "FFI resource handling", "All of the above"],
        "options_hi": ["ड्रॉप के बिना वैल्यू रैप करना", "मैन्युअल मैनेजमेंट सक्षम करना", "FFI रिसोर्स हैंडलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How does Rust's 'Box::leak' enable static lifetime extension?",
        "question_hi": "Rust का 'Box::leak' स्टैटिक लाइफटाइम एक्सटेंशन कैसे सक्षम करता है?",
        "options_en": ["Convert to &'static mut", "Prevent deallocation", "Global access enable", "All of the above"],
        "options_hi": ["&'static mut में कन्वर्ट करना", "डीलोकेशन रोकना", "ग्लोबल एक्सेस सक्षम करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of Rust's 'NonNull::cast'?",
        "question_hi": "Rust के 'NonNull::cast' का क्या उद्देश्य है?",
        "options_en": ["Type conversion", "Pointer casting", "Variance adjustment", "All of the above"],
        "options_hi": ["टाइप कन्वर्जन", "पॉइंटर कास्टिंग", "वेरिएंस एडजस्टमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How does Rust's 'mem::size_of_val' handle dynamic sizing?",
        "question_hi": "Rust का 'mem::size_of_val' डायनामिक साइज़िंग कैसे हैंडल करता है?",
        "options_en": ["Runtime size calculation", "Trait object support", "DST handling", "All of the above"],
        "options_hi": ["रनटाइम साइज कैलकुलेशन", "ट्रेट ऑब्जेक्ट सपोर्ट", "DST हैंडलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the role of Rust's 'UnsafeCell::get_mut'?",
        "question_hi": "Rust के 'UnsafeCell::get_mut' की क्या भूमिका है?",
        "options_en": ["Mutable reference access", "Exclusive borrowing", "Interior mutation enable", "All of the above"],
        "options_hi": ["म्यूटेबल रिफरेन्स एक्सेस", "एक्सक्लूसिव बोरोइंग", "इंटीरियर म्यूटेशन सक्षम करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How does Rust's 'MaybeUninit::zeroed' initialize memory?",
        "question_hi": "Rust का 'MaybeUninit::zeroed' मेमोरी कैसे इनिशियलाइज़ करता है?",
        "options_en": ["Set all bits to zero", "Create default state", "Support primitive types", "All of the above"],
        "options_hi": ["सभी बिट जीरो सेट करना", "डिफॉल्ट स्टेट बनाना", "प्रिमिटिव टाइप सपोर्ट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of Rust's 'ptr::write'?",
        "question_hi": "Rust के 'ptr::write' का क्या उद्देश्य है?",
        "options_en": ["Write to memory location", "Avoid drop on overwrite", "Unsafe memory operation", "All of the above"],
        "options_hi": ["मेमोरी लोकेशन पर लिखना", "ओवरराइट पर ड्रॉप से बचना", "अनसेफ मेमोरी ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How does Rust's 'mem::align_of_val' handle alignment requirements?",
        "question_hi": "Rust का 'mem::align_of_val' अलाइनमेंट रिक्वायरमेंट कैसे हैंडल करता है?",
        "options_en": ["Runtime alignment check", "Trait object support", "Platform-specific handling", "All of the above"],
        "options_hi": ["रनटाइम अलाइनमेंट चेक", "ट्रेट ऑब्जेक्ट सपोर्ट", "प्लेटफॉर्म-स्पेसिफिक हैंडलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the role of Rust's 'Box::new' in heap allocation?",
        "question_hi": "Rust के 'Box::new' की हीप अलोकेशन में क्या भूमिका है?",
        "options_en": ["Allocate on heap", "Transfer ownership", "Enable RAII", "All of the above"],
        "options_hi": ["हीप पर अलोकेट करना", "ओनरशिप ट्रांसफर करना", "RAII सक्षम करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How does Rust's 'NonNull::as_ptr' enable safe pointer operations?",
        "question_hi": "Rust का 'NonNull::as_ptr' सेफ पॉइंटर ऑपरेशन कैसे सक्षम करता है?",
        "options_en": ["Extract raw pointer", "Maintain non-null guarantee", "Support FFI calls", "All of the above"],
        "options_hi": ["रॉ पॉइंटर निकालना", "नॉन-नल गारंटी मेंटेन करना", "FFI कॉल सपोर्ट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of Rust's 'MaybeUninit::uninit'?",
        "question_hi": "Rust के 'MaybeUninit::uninit' का क्या उद्देश्य है?",
        "options_en": ["Create uninitialized memory", "Delay initialization", "Support partial init", "All of the above"],
        "options_hi": ["अनइनिशियलाइज्ड मेमोरी बनाना", "इनिशियलाइज़ेशन डिले करना", "पार्शियल इनिशियलाइज़ेशन सपोर्ट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How does Rust's 'ptr::read_volatile' handle memory semantics?",
        "question_hi": "Rust का 'ptr::read_volatile' मेमोरी सेमेंटिक्स कैसे हैंडल करता है?",
        "options_en": ["Volatile memory access", "Compiler optimization prevention", "Hardware interaction", "All of the above"],
        "options_hi": ["वोलेटाइल मेमोरी एक्सेस", "कंपाइलर ऑप्टिमाइज़ेशन प्रिवेंशन", "हार्डवेयर इंटरैक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the role of Rust's 'ManuallyDrop::drop'?",
        "question_hi": "Rust के 'ManuallyDrop::drop' की क्या भूमिका है?",
        "options_en": ["Manual destructor call", "Explicit cleanup", "Resource management", "All of the above"],
        "options_hi": ["मैन्युअल डिस्ट्रक्टर कॉल", "एक्सप्लिसिट क्लीनअप", "रिसोर्स मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How does Rust's 'mem::swap' enable efficient value exchange?",
        "question_hi": "Rust का 'mem::swap' एफिशिएंट वैल्यू एक्सचेंज कैसे सक्षम करता है?",
        "options_en": ["In-place value swap", "No temporary allocation", "Ownership transfer", "All of the above"],
        "options_hi": ["इन-प्लेस वैल्यू स्वैप", "कोई टेम्पररी अलोकेशन नहीं", "ओनरशिप ट्रांसफर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of Rust's 'UnsafeCell::raw_get_mut'?",
        "question_hi": "Rust के 'UnsafeCell::raw_get_mut' का क्या उद्देश्य है?",
        "options_en": ["Mutable raw pointer access", "Const context mutation", "Low-level operations", "All of the above"],
        "options_hi": ["म्यूटेबल रॉ पॉइंटर एक्सेस", "Const कॉन्टेक्स्ट म्यूटेशन", "लो-लेवल ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How does Rust's 'Box::try_new' handle allocation failures?",
        "question_hi": "Rust का 'Box::try_new' अलोकेशन फेल्योर कैसे हैंडल करता है?",
        "options_en": ["Fallible allocation", "Result return", "No_std support", "All of the above"],
        "options_hi": ["फेलिबल अलोकेशन", "रिजल्ट रिटर्न", "No_std सपोर्ट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the role of Rust's 'MaybeUninit::as_mut_ptr'?",
        "question_hi": "Rust के 'MaybeUninit::as_mut_ptr' की क्या भूमिका है?",
        "options_en": ["Mutable pointer access", "Gradual initialization", "Unsafe mutation enable", "All of the above"],
        "options_hi": ["म्यूटेबल पॉइंटर एक्सेस", "ग्रेजुअल इनिशियलाइज़ेशन", "अनसेफ म्यूटेशन सक्षम करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How does Rust's 'ptr::copy' handle overlapping memory?",
        "question_hi": "Rust का 'ptr::copy' ओवरलैपिंग मेमोरी कैसे हैंडल करता है?",
        "options_en": ["Memmove equivalent", "Overlap-safe copying", "Backward compatibility", "All of the above"],
        "options_hi": ["Memmove इक्विवेलेंट", "ओवरलैप-सेफ कॉपीिंग", "बैकवर्ड कंपेटिबिलिटी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of Rust's 'NonNull::as_ref'?",
        "question_hi": "Rust के 'NonNull::as_ref' का क्या उद्देश्य है?",
        "options_en": ["Create reference from NonNull", "Safe dereferencing", "Lifetime management", "All of the above"],
        "options_hi": ["NonNull से रिफरेन्स बनाना", "सेफ डेरिफरेंसिंग", "लाइफटाइम मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How does Rust's 'mem::needs_drop' optimize resource management?",
        "question_hi": "Rust का 'mem::needs_drop' रिसोर्स मैनेजमेंट कैसे ऑप्टिमाइज़ करता है?",
        "options_en": ["Compile-time drop check", "Avoid unnecessary drops", "Performance optimization", "All of the above"],
        "options_hi": ["कंपाइल-टाइम ड्रॉप चेक", "अननसेसरी ड्रॉप से बचना", "परफॉर्मेंस ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the role of Rust's 'UnsafeCell::into_inner'?",
        "question_hi": "Rust के 'UnsafeCell::into_inner' की क्या भूमिका है?",
        "options_en": ["Extract wrapped value", "Consume UnsafeCell", "Ownership transfer", "All of the above"],
        "options_hi": ["रैप्ड वैल्यू निकालना", "UnsafeCell कंज्यूम करना", "ओनरशिप ट्रांसफर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How does Rust's 'MaybeUninit::assume_init_drop' handle destruction?",
        "question_hi": "Rust का 'MaybeUninit::assume_init_drop' डिस्ट्रक्शन कैसे हैंडल करता है?",
        "options_en": ["Drop initialized value", "Memory cleanup", "Resource release", "All of the above"],
        "options_hi": ["इनिशियलाइज्ड वैल्यू ड्रॉप करना", "मेमोरी क्लीनअप", "रिसोर्स रिलीज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of Rust's 'ptr::null_mut'?",
        "question_hi": "Rust के 'ptr::null_mut' का क्या उद्देश्य है?",
        "options_en": ["Create null mutable pointer", "FFI compatibility", "Sentinel values", "All of the above"],
        "options_hi": ["नल म्यूटेबल पॉइंटर बनाना", "FFI कंपेटिबिलिटी", "सेंटिनल वैल्यू", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How does Rust's 'mem::forget_unsized' handle DSTs?",
        "question_hi": "Rust का 'mem::forget_unsized' DSTs कैसे हैंडल करता है?",
        "options_en": ["Forget dynamically sized types", "Prevent drop for DST", "Memory leak for unsized", "All of the above"],
        "options_hi": ["डायनामिकली साइज्ड टाइप भूलना", "DST के लिए ड्रॉप रोकना", "अनसाइज्ड के लिए मेमोरी लीक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the role of Rust's 'Box::into_pin'?",
        "question_hi": "Rust के 'Box::into_pin' की क्या भूमिका है?",
        "options_en": ["Convert Box to Pin", "Enable immobility", "Async foundation", "All of the above"],
        "options_hi": ["Box को Pin में कन्वर्ट करना", "इम्मोबिलिटी सक्षम करना", "Async फाउंडेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How does Rust's 'NonNull::new' handle null pointer checks?",
        "question_hi": "Rust का 'NonNull::new' नल पॉइंटर चेक कैसे हैंडल करता है?",
        "options_en": ["Safe constructor", "Option return", "Null pointer prevention", "All of the above"],
        "options_hi": ["सेफ कंस्ट्रक्टर", "ऑप्शन रिटर्न", "नल पॉइंटर प्रिवेंशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of Rust's 'MaybeUninit::slice_assume_init_ref'?",
        "question_hi": "Rust के 'MaybeUninit::slice_assume_init_ref' का क्या उद्देश्य है?",
        "options_en": ["Create slice from MaybeUninit array", "Bulk initialization", "Performance optimization", "All of the above"],
        "options_hi": ["MaybeUninit ऐरे से स्लाइस बनाना", "बल्क इनिशियलाइज़ेशन", "परफॉर्मेंस ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How does Rust's 'ptr::write_volatile' ensure memory ordering?",
        "question_hi": "Rust का 'ptr::write_volatile' मेमोरी ऑर्डरिंग कैसे सुनिश्चित करता है?",
        "options_en": ["Volatile write semantics", "Compiler barrier", "Hardware interaction", "All of the above"],
        "options_hi": ["वोलेटाइल राइट सेमेंटिक्स", "कंपाइलर बैरियर", "हार्डवेयर इंटरैक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of Rust's 'std::sync::Arc::get_mut'?",
        "question_hi": "Rust के 'std::sync::Arc::get_mut' का क्या उद्देश्य है?",
        "options_en": ["Get mutable reference when unique", "Check for exclusive ownership", "Enable interior mutation", "All of the above"],
        "options_hi": ["यूनिक होने पर म्यूटेबल रिफरेन्स प्राप्त करना", "एक्सक्लूसिव ओनरशिप चेक करना", "इंटीरियर म्यूटेशन सक्षम करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How does Rust's 'std::mem::transmute' handle type size validation?",
        "question_hi": "Rust का 'std::mem::transmute' टाइप साइज वैलिडेशन कैसे हैंडल करता है?",
        "options_en": ["Compile-time size check", "Equal size requirement", "Prevent UB from size mismatch", "All of the above"],
        "options_hi": ["कंपाइल-टाइम साइज चेक", "इक्वल साइज रिक्वायरमेंट", "साइज मिसमैच से UB रोकना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the role of Rust's 'std::sync::Mutex::get_mut'?",
        "question_hi": "Rust के 'std::sync::Mutex::get_mut' की क्या भूमिका है?",
        "options_en": ["Bypass locking when unique", "Performance optimization", "Exclusive access guarantee", "All of the above"],
        "options_hi": ["यूनिक होने पर लॉकिंग बायपास करना", "परफॉर्मेंस ऑप्टिमाइज़ेशन", "एक्सक्लूसिव एक्सेस गारंटी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How does Rust's 'std::ptr::drop_in_place' handle manual destruction?",
        "question_hi": "Rust का 'std::ptr::drop_in_place' मैन्युअल डिस्ट्रक्शन कैसे हैंडल करता है?",
        "options_en": ["Call destructor explicitly", "Memory cleanup", "Resource release", "All of the above"],
        "options_hi": ["एक्सप्लिसिटली डिस्ट्रक्टर कॉल करना", "मेमोरी क्लीनअप", "रिसोर्स रिलीज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of Rust's 'std::sync::Once::call_once'?",
        "question_hi": "Rust के 'std::sync::Once::call_once' का क्या उद्देश्य है?",
        "options_en": ["Thread-safe one-time initialization", "Global state setup", "Lazy initialization", "All of the above"],
        "options_hi": ["थ्रेड-सेफ वन-टाइम इनिशियलाइज़ेशन", "ग्लोबल स्टेट सेटअप", "लेजी इनिशियलाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How does Rust's 'std::mem::replace' enable state machines?",
        "question_hi": "Rust का 'std::mem::replace' स्टेट मशीन कैसे सक्षम करता है?",
        "options_en": ["Efficient state transitions", "Ownership transfer", "Temporary value swapping", "All of the above"],
        "options_hi": ["एफिशिएंट स्टेट ट्रांजिशन", "ओनरशिप ट्रांसफर", "टेम्पररी वैल्यू स्वैपिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the role of Rust's 'std::sync::atomic::fence'?",
        "question_hi": "Rust के 'std::sync::atomic::fence' की क्या भूमिका है?",
        "options_en": ["Memory ordering enforcement", "Compiler barrier", "Hardware memory model control", "All of the above"],
        "options_hi": ["मेमोरी ऑर्डरिंग एनफोर्समेंट", "कंपाइलर बैरियर", "हार्डवेयर मेमोरी मॉडल कंट्रोल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How does Rust's 'std::cell::RefCell::try_borrow_mut' handle contention?",
        "question_hi": "Rust का 'std::cell::RefCell::try_borrow_mut' कॉन्टेंशन कैसे हैंडल करता है?",
        "options_en": ["Fallible mutable borrowing", "Runtime borrow checking", "Error on existing references", "All of the above"],
        "options_hi": ["फेलिबल म्यूटेबल बोरोइंग", "रनटाइम बोरो चेकिंग", "एक्सिस्टिंग रिफरेन्स पर एरर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of Rust's 'std::sync::RwLock::read'?",
        "question_hi": "Rust के 'std::sync::RwLock::read' का क्या उद्देश्य है?",
        "options_en": ["Shared read access", "Multiple concurrent readers", "Write exclusion", "All of the above"],
        "options_hi": ["शेयर्ड रीड एक्सेस", "मल्टीपल कंकरंट रीडर", "राइट एक्सक्लूजन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How does Rust's 'std::mem::forget' interact with leak amplification?",
        "question_hi": "Rust का 'std::mem::forget' लीक एम्प्लिफिकेशन के साथ कैसे इंटरैक्ट करता है?",
        "options_en": ["Prevent resource cleanup", "Intentional memory leaks", "Cyclic reference handling", "All of the above"],
        "options_hi": ["रिसोर्स क्लीनअप रोकना", "इंटेंशनल मेमोरी लीक", "साइक्लिक रिफरेन्स हैंडलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the role of Rust's 'std::sync::Barrier::wait'?",
        "question_hi": "Rust के 'std::sync::Barrier::wait' की क्या भूमिका है?",
        "options_en": ["Thread synchronization point", "Phase coordination", "Collective progress", "All of the above"],
        "options_hi": ["थ्रेड सिंक्रोनाइज़ेशन पॉइंट", "फेज कोऑर्डिनेशन", "कलेक्टिव प्रोग्रेस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How does Rust's 'std::mem::size_of' handle zero-sized types?",
        "question_hi": "Rust का 'std::mem::size_of' जीरो-साइज्ड टाइप कैसे हैंडल करता है?",
        "options_en": ["Return zero for ZST", "No memory allocation", "Compile-time optimization", "All of the above"],
        "options_hi": ["ZST के लिए जीरो रिटर्न करना", "कोई मेमोरी अलोकेशन नहीं", "कंपाइल-टाइम ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of Rust's 'std::sync::mpsc::SyncSender::try_send'?",
        "question_hi": "Rust के 'std::sync::mpsc::SyncSender::try_send' का क्या उद्देश्य है?",
        "options_en": ["Non-blocking send attempt", "Backpressure handling", "Immediate result return", "All of the above"],
        "options_hi": ["नॉन-ब्लॉकिंग सेंड अटेम्प्ट", "बैकप्रेशर हैंडलिंग", "इमीडिएट रिजल्ट रिटर्न", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How does Rust's 'std::cell::Cell::set' enable interior mutability?",
        "question_hi": "Rust का 'std::cell::Cell::set' इंटीरियर म्यूटेबिलिटी कैसे सक्षम करता है?",
        "options_en": ["Value replacement through shared reference", "Copy-based mutation", "No runtime checks", "All of the above"],
        "options_hi": ["शेयर्ड रिफरेन्स के माध्यम से वैल्यू रिप्लेसमेंट", "कॉपी-बेस्ड म्यूटेशन", "कोई रनटाइम चेक नहीं", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the role of Rust's 'std::sync::Arc::strong_count'?",
        "question_hi": "Rust के 'std::sync::Arc::strong_count' की क्या भूमिका है?",
        "options_en": ["Track reference count", "Debug memory leaks", "Resource management", "All of the above"],
        "options_hi": ["रिफरेन्स काउंट ट्रैक करना", "मेमोरी लीक डिबग करना", "रिसोर्स मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How does Rust's 'std::mem::align_of' handle platform-specific requirements?",
        "question_hi": "Rust का 'std::mem::align_of' प्लेटफॉर्म-स्पेसिफिक रिक्वायरमेंट कैसे हैंडल करता है?",
        "options_en": ["Compile-time alignment query", "Architecture-specific values", "ABI compliance", "All of the above"],
        "options_hi": ["कंपाइल-टाइम अलाइनमेंट क्वेरी", "आर्किटेक्चर-स्पेसिफिक वैल्यू", "ABI कंप्लायंस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of Rust's 'std::sync::MutexGuard::map'?",
        "question_hi": "Rust के 'std::sync::MutexGuard::map' का क्या उद्देश्य है?",
        "options_en": ["Project locked data", "Partial access to protected data", "Fine-grained locking", "All of the above"],
        "options_hi": ["लॉक्ड डेटा प्रोजेक्ट करना", "प्रोटेक्टेड डेटा का पार्शियल एक्सेस", "फाइन-ग्रेन्ड लॉकिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How does Rust's 'std::ptr::eq' handle pointer comparison?",
        "question_hi": "Rust का 'std::ptr::eq' पॉइंटर कम्पेयरिजन कैसे हैंडल करता है?",
        "options_en": ["Address-based comparison", "Ignore provenance", "Raw pointer equality", "All of the above"],
        "options_hi": ["एड्रेस-बेस्ड कम्पेयरिजन", "प्रोवेनेंस इग्नोर करना", "रॉ पॉइंटर इक्वलिटी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the role of Rust's 'std::sync::atomic::AtomicPtr'?",
        "question_hi": "Rust के 'std::sync::atomic::AtomicPtr' की क्या भूमिका है?",
        "options_en": ["Thread-safe pointer operations", "Lock-free data structures", "Atomic pointer updates", "All of the above"],
        "options_hi": ["थ्रेड-सेफ पॉइंटर ऑपरेशन", "लॉक-फ्री डेटा स्ट्रक्चर", "एटॉमिक पॉइंटर अपडेट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How does Rust's 'std::mem::MaybeUninit::as_ptr' enable safe initialization?",
        "question_hi": "Rust का 'std::mem::MaybeUninit::as_ptr' सेफ इनिशियलाइज़ेशन कैसे सक्षम करता है?",
        "options_en": ["Get pointer without assuming init", "Gradual initialization support", "Unsafe block containment", "All of the above"],
        "options_hi": ["इनिशियलाइज़ेशन माने बिना पॉइंटर प्राप्त करना", "ग्रेजुअल इनिशियलाइज़ेशन सपोर्ट", "अनसेफ ब्लॉक कंटेनमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of Rust's 'std::sync::Condvar::wait_timeout'?",
        "question_hi": "Rust के 'std::sync::Condvar::wait_timeout' का क्या उद्देश्य है?",
        "options_en": ["Bounded waiting", "Timeout handling", "Deadlock prevention", "All of the above"],
        "options_hi": ["बाउंडेड वेटिंग", "टाइमआउट हैंडलिंग", "डेडलॉक प्रिवेंशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How does Rust's 'std::mem::swap' handle overlapping memory?",
        "question_hi": "Rust का 'std::mem::swap' ओवरलैपिंग मेमोरी कैसे हैंडल करता है?",
        "options_en": ["Temporary storage usage", "No overlap allowed", "Compiler optimization", "All of the above"],
        "options_hi": ["टेम्पररी स्टोरेज यूज", "कोई ओवरलैप अनुमति नहीं", "कंपाइलर ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the role of Rust's 'std::sync::RwLock::try_write'?",
        "question_hi": "Rust के 'std::sync::RwLock::try_write' की क्या भूमिका है?",
        "options_en": ["Non-blocking write attempt", "Immediate exclusive access", "Contention handling", "All of the above"],
        "options_hi": ["नॉन-ब्लॉकिंग राइट अटेम्प्ट", "इमीडिएट एक्सक्लूसिव एक्सेस", "कॉन्टेंशन हैंडलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How does Rust's 'std::ptr::copy' differ from 'std::ptr::copy_nonoverlapping'?",
        "question_hi": "Rust का 'std::ptr::copy' 'std::ptr::copy_nonoverlapping' से कैसे अलग है?",
        "options_en": ["Overlap handling", "Performance characteristics", "Safety guarantees", "All of the above"],
        "options_hi": ["ओवरलैप हैंडलिंग", "परफॉर्मेंस कैरेक्टरिस्टिक्स", "सेफ्टी गारंटी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of Rust's 'std::sync::atomic::compiler_fence'?",
        "question_hi": "Rust के 'std::sync::atomic::compiler_fence' का क्या उद्देश्य है?",
        "options_en": ["Compiler reordering prevention", "Memory model enforcement", "No hardware instructions", "All of the above"],
        "options_hi": ["कंपाइलर रिऑर्डरिंग प्रिवेंशन", "मेमोरी मॉडल एनफोर्समेंट", "कोई हार्डवेयर इंस्ट्रक्शन नहीं", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How does Rust's 'std::mem::zeroed' handle type initialization?",
        "question_hi": "Rust का 'std::mem::zeroed' टाइप इनिशियलाइज़ेशन कैसे हैंडल करता है?",
        "options_en": ["All bits zero", "Valid bit pattern requirement", "Unsafe initialization", "All of the above"],
        "options_hi": ["सभी बिट जीरो", "वैलिड बिट पैटर्न रिक्वायरमेंट", "अनसेफ इनिशियलाइज़ेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the role of Rust's 'std::sync::mpsc::Receiver::try_recv'?",
        "question_hi": "Rust के 'std::sync::mpsc::Receiver::try_recv' की क्या भूमिका है?",
        "options_en": ["Non-blocking receive attempt", "Immediate message check", "No thread blocking", "All of the above"],
        "options_hi": ["नॉन-ब्लॉकिंग रिसीव अटेम्प्ट", "इमीडिएट मैसेज चेक", "कोई थ्रेड ब्लॉकिंग नहीं", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How does Rust's 'std::cell::RefCell::borrow_state' track references?",
        "question_hi": "Rust का 'std::cell::RefCell::borrow_state' रिफरेन्स कैसे ट्रैक करता है?",
        "options_en": ["Runtime borrow tracking", "Mutable/immutable reference count", "Panic on violation", "All of the above"],
        "options_hi": ["रनटाइम बोरो ट्रैकिंग", "म्यूटेबल/इम्म्यूटेबल रिफरेन्स काउंट", "वायलेशन पर पैनिक", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of Rust's 'std::sync::Arc::downgrade'?",
        "question_hi": "Rust के 'std::sync::Arc::downgrade' का क्या उद्देश्य है?",
        "options_en": ["Create Weak reference", "Prevent memory leaks", "Break reference cycles", "All of the above"],
        "options_hi": ["Weak रिफरेन्स बनाना", "मेमोरी लीक रोकना", "रिफरेन्स साइकल तोड़ना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How does Rust's 'std::mem::align_of_val' handle dynamically sized types?",
        "question_hi": "Rust का 'std::mem::align_of_val' डायनामिकली साइज्ड टाइप कैसे हैंडल करता है?",
        "options_en": ["Runtime alignment calculation", "Trait object support", "Platform-specific alignment", "All of the above"],
        "options_hi": ["रनटाइम अलाइनमेंट कैलकुलेशन", "ट्रेट ऑब्जेक्ट सपोर्ट", "प्लेटफॉर्म-स्पेसिफिक अलाइनमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the role of Rust's 'std::sync::Mutex::into_inner'?",
        "question_hi": "Rust के 'std::sync::Mutex::into_inner' की क्या भूमिका है?",
        "options_en": ["Extract protected data", "Consume mutex", "Ownership transfer", "All of the above"],
        "options_hi": ["प्रोटेक्टेड डेटा निकालना", "म्यूटेक्स कंज्यूम करना", "ओनरशिप ट्रांसफर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How does Rust's 'std::ptr::null' handle null pointer creation?",
        "question_hi": "Rust का 'std::ptr::null' नल पॉइंटर क्रिएशन कैसे हैंडल करता है?",
        "options_en": ["Create null raw pointer", "FFI compatibility", "Sentinel value creation", "All of the above"],
        "options_hi": ["नल रॉ पॉइंटर बनाना", "FFI कंपेटिबिलिटी", "सेंटिनल वैल्यू क्रिएशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of Rust's 'std::sync::atomic::AtomicBool'?",
        "question_hi": "Rust के 'std::sync::atomic::AtomicBool' का क्या उद्देश्य है?",
        "options_en": ["Thread-safe boolean operations", "Lock-free flags", "Atomic state management", "All of the above"],
        "options_hi": ["थ्रेड-सेफ बूलियन ऑपरेशन", "लॉक-फ्री फ्लैग", "एटॉमिक स्टेट मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How does Rust's 'std::mem::MaybeUninit::write' prevent double initialization?",
        "question_hi": "Rust का 'std::mem::MaybeUninit::write' डबल इनिशियलाइज़ेशन कैसे रोकता है?",
        "options_en": ["Single initialization guarantee", "Memory safety", "No automatic drop", "All of the above"],
        "options_hi": ["सिंगल इनिशियलाइज़ेशन गारंटी", "मेमोरी सेफ्टी", "कोई ऑटोमैटिक ड्रॉप नहीं", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the role of Rust's 'std::sync::RwLock::is_poisoned'?",
        "question_hi": "Rust के 'std::sync::RwLock::is_poisoned' की क्या भूमिका है?",
        "options_en": ["Check for panic during lock", "Recovery handling", "Error detection", "All of the above"],
        "options_hi": ["लॉक के दौरान पैनिक चेक करना", "रिकवरी हैंडलिंग", "एरर डिटेक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How does Rust's 'std::mem::transmute' handle lifetime changes?",
        "question_hi": "Rust का 'std::mem::transmute' लाइफटाइम चेंज कैसे हैंडल करता है?",
        "options_en": ["Lifetime elision bypass", "Unsafe lifetime extension", "Compiler trust requirement", "All of the above"],
        "options_hi": ["लाइफटाइम एलिजन बायपास", "अनसेफ लाइफटाइम एक्सटेंशन", "कंपाइलर ट्रस्ट रिक्वायरमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of Rust's 'std::sync::atomic::AtomicUsize::fetch_update'?",
        "question_hi": "Rust के 'std::sync::atomic::AtomicUsize::fetch_update' का क्या उद्देश्य है?",
        "options_en": ["Atomic compare-and-swap loop", "Conditional update", "Lock-free algorithms", "All of the above"],
        "options_hi": ["एटॉमिक कम्पेयर-एंड-स्वैप लूप", "कंडीशनल अपडेट", "लॉक-फ्री अल्गोरिदम", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How does Rust's 'std::cell::Cell::as_ptr' enable raw access?",
        "question_hi": "Rust का 'std::cell::Cell::as_ptr' रॉ एक्सेस कैसे सक्षम करता है?",
        "options_en": ["Get raw pointer to content", "FFI integration", "Unsafe operations", "All of the above"],
        "options_hi": ["कंटेंट का रॉ पॉइंटर प्राप्त करना", "FFI इंटीग्रेशन", "अनसेफ ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the role of Rust's 'std::sync::mpsc::channel' capacity?",
        "question_hi": "Rust के 'std::sync::mpsc::channel' कैपेसिटी की क्या भूमिका है?",
        "options_en": ["Bounded message queue", "Backpressure mechanism", "Memory usage control", "All of the above"],
        "options_hi": ["बाउंडेड मैसेज क्यू", "बैकप्रेशर मैकेनिज्म", "मेमोरी यूज कंट्रोल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How does Rust's 'std::mem::drop' interact with move semantics?",
        "question_hi": "Rust का 'std::mem::drop' मूव सेमेंटिक्स के साथ कैसे इंटरैक्ट करता है?",
        "options_en": ["Explicit ownership drop", "Compiler optimization hint", "Resource cleanup trigger", "All of the above"],
        "options_hi": ["एक्सप्लिसिट ओनरशिप ड्रॉप", "कंपाइलर ऑप्टिमाइज़ेशन हिंट", "रिसोर्स क्लीनअप ट्रिगर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of Rust's 'std::sync::OnceState'?",
        "question_hi": "Rust के 'std::sync::OnceState' का क्या उद्देश्य है?",
        "options_en": ["Initialization state tracking", "Poisoning detection", "Thread synchronization status", "All of the above"],
        "options_hi": ["इनिशियलाइज़ेशन स्टेट ट्रैकिंग", "पॉइजनिंग डिटेक्शन", "थ्रेड सिंक्रोनाइज़ेशन स्टेटस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How does Rust's 'std::ptr::slice_from_raw_parts' handle array creation?",
        "question_hi": "Rust का 'std::ptr::slice_from_raw_parts' ऐरे क्रिएशन कैसे हैंडल करता है?",
        "options_en": ["Create slice from pointer and length", "FFI array conversion", "Unsafe slice construction", "All of the above"],
        "options_hi": ["पॉइंटर और लेंथ से स्लाइस बनाना", "FFI ऐरे कन्वर्जन", "अनसेफ स्लाइस कंस्ट्रक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the role of Rust's 'std::sync::atomic::Ordering' in memory models?",
        "question_hi": "Rust के 'std::sync::atomic::Ordering' की मेमोरी मॉडल में क्या भूमिका है?",
        "options_en": ["Memory ordering specification", "Performance vs consistency tradeoff", "Hardware memory model control", "All of the above"],
        "options_hi": ["मेमोरी ऑर्डरिंग स्पेसिफिकेशन", "परफॉर्मेंस vs कंसिस्टेंसी ट्रेडऑफ", "हार्डवेयर मेमोरी मॉडल कंट्रोल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How does Rust's 'std::mem::replace' handle panic safety?",
        "question_hi": "Rust का 'std::mem::replace' पैनिक सेफ्टी कैसे हैंडल करता है?",
        "options_en": ["No intermediate states", "Atomic swap operation", "Exception safety guarantee", "All of the above"],
        "options_hi": ["कोई इंटरमीडिएट स्टेट नहीं", "एटॉमिक स्वैप ऑपरेशन", "एक्सेप्शन सेफ्टी गारंटी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of Rust's 'std::sync::Weak::upgrade'?",
        "question_hi": "Rust के 'std::sync::Weak::upgrade' का क्या उद्देश्य है?",
        "options_en": ["Convert to Arc if alive", "Check object existence", "Temporary strong reference", "All of the above"],
        "options_hi": ["जीवित होने पर Arc में कन्वर्ट करना", "ऑब्जेक्ट एक्सिस्टेंस चेक करना", "टेम्पररी स्ट्रांग रिफरेन्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How does Rust's 'std::ptr::read_unaligned' handle misaligned data?",
        "question_hi": "Rust का 'std::ptr::read_unaligned' मिसअलाइंड डेटा कैसे हैंडल करता है?",
        "options_en": ["Unaligned memory access", "Performance penalty", "Platform-specific behavior", "All of the above"],
        "options_hi": ["अनअलाइंड मेमोरी एक्सेस", "परफॉर्मेंस पेनल्टी", "प्लेटफॉर्म-स्पेसिफिक बिहेवियर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the role of Rust's 'std::sync::Barrier::wait' return value?",
        "question_hi": "Rust के 'std::sync::Barrier::wait' रिटर्न वैल्यू की क्या भूमिका है?",
        "options_en": ["Designate leader thread", "Coordination signaling", "Phase identification", "All of the above"],
        "options_hi": ["लीडर थ्रेड डिज़ाइनेट करना", "कोऑर्डिनेशन सिग्नलिंग", "फेज आइडेंटिफिकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How does Rust's 'std::mem::MaybeUninit::array_assume_init' handle arrays?",
        "question_hi": "Rust का 'std::mem::MaybeUninit::array_assume_init' ऐरे कैसे हैंडल करता है?",
        "options_en": ["Bulk array initialization", "Performance optimization", "Safe array conversion", "All of the above"],
        "options_hi": ["बल्क ऐरे इनिशियलाइज़ेशन", "परफॉर्मेंस ऑप्टिमाइज़ेशन", "सेफ ऐरे कन्वर्जन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of Rust's 'std::sync::atomic::spin_loop_hint'?",
        "question_hi": "Rust के 'std::sync::atomic::spin_loop_hint' का क्या उद्देश्य है?",
        "options_en": ["CPU optimization hint", "Power consumption reduction", "Spin loop efficiency", "All of the above"],
        "options_hi": ["CPU ऑप्टिमाइज़ेशन हिंट", "पावर कंजम्पशन रिडक्शन", "स्पिन लूप एफिशिएंसी", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How does Rust's 'std::mem::needs_drop' optimize compile-time?",
        "question_hi": "Rust का 'std::mem::needs_drop' कंपाइल-टाइम कैसे ऑप्टिमाइज़ करता है?",
        "options_en": ["Avoid unnecessary drop code", "Zero-cost abstraction", "Performance optimization", "All of the above"],
        "options_hi": ["अननसेसरी ड्रॉप कोड से बचना", "जीरो-कॉस्ट एब्स्ट्रैक्शन", "परफॉर्मेंस ऑप्टिमाइज़ेशन", "उपरोक्त सभी"],
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