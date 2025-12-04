const questions = [
    {
        "num": 1,
        "question_en": "What is the primary benefit of Rust's affine type system?",
        "question_hi": "Rust के affine type system का प्राथमिक लाभ क्या है?",
        "options_en": ["Prevents use-after-move at compile time", "Faster execution", "Smaller binary size", "Simpler syntax"],
        "options_hi": ["कंपाइल समय पर use-after-move रोकता है", "तेज निष्पादन", "छोटा बाइनरी आकार", "सरल सिंटैक्स"],
        "answer_en": "Prevents use-after-move at compile time",
        "answer_hi": "कंपाइल समय पर use-after-move रोकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What does the 'extern' keyword enable in Rust?",
        "question_hi": "Rust में 'extern' कीवर्ड क्या सक्षम करता है?",
        "options_en": ["FFI (Foreign Function Interface)", "External file access", "Network communication", "Database connectivity"],
        "options_hi": ["FFI (विदेशी फ़ंक्शन इंटरफेस)", "बाहरी फ़ाइल एक्सेस", "नेटवर्क संचार", "डेटाबेस कनेक्टिविटी"],
        "answer_en": "FFI (Foreign Function Interface)",
        "answer_hi": "FFI (विदेशी फ़ंक्शन इंटरफेस)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the purpose of the 'std::process::abort' function?",
        "question_hi": "'std::process::abort' फ़ंक्शन का उद्देश्य क्या है?",
        "options_en": ["Terminate process immediately without cleanup", "Graceful shutdown", "Restart process", "Pause process"],
        "options_hi": ["सफाई के बिना प्रक्रिया को तुरंत समाप्त", "सुगम शटडाउन", "प्रक्रिया पुनः आरंभ", "प्रक्रिया रोकें"],
        "answer_en": "Terminate process immediately without cleanup",
        "answer_hi": "सफाई के बिना प्रक्रिया को तुरंत समाप्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What does 'std::mem::forget' prevent from running?",
        "question_hi": "'std::mem::forget' क्या चलने से रोकता है?",
        "options_en": ["Destructors and Drop implementations", "Garbage collector", "Memory allocator", "Thread scheduler"],
        "options_hi": ["डिस्ट्रक्टर्स और Drop इम्प्लीमेंटेशन", "गार्बेज कलेक्टर", "मेमोरी आवंटक", "थ्रेड शेड्यूलर"],
        "answer_en": "Destructors and Drop implementations",
        "answer_hi": "डिस्ट्रक्टर्स और Drop इम्प्लीमेंटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the main use of 'std::sync::mpsc::RecvError'?",
        "question_hi": "'std::sync::mpsc::RecvError' का मुख्य उपयोग क्या है?",
        "options_en": ["Indicate all senders are disconnected", "Network errors", "Memory errors", "File errors"],
        "options_hi": ["संकेत करें कि सभी सेंडर डिस्कनेक्ट हैं", "नेटवर्क त्रुटियाँ", "मेमोरी त्रुटियाँ", "फ़ाइल त्रुटियाँ"],
        "answer_en": "Indicate all senders are disconnected",
        "answer_hi": "संकेत करें कि सभी सेंडर डिस्कनेक्ट हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What does the '#[repr(C)]' attribute ensure?",
        "question_hi": "'#[repr(C)]' एट्रिब्यूट क्या सुनिश्चित करता है?",
        "options_en": ["C-compatible memory layout", "Rust optimization", "Thread safety", "Memory safety"],
        "options_hi": ["C-संगत मेमोरी लेआउट", "Rust अनुकूलन", "थ्रेड सुरक्षा", "मेमोरी सुरक्षा"],
        "answer_en": "C-compatible memory layout",
        "answer_hi": "C-संगत मेमोरी लेआउट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of 'std::num::Saturating'?",
        "question_hi": "'std::num::Saturating' का उद्देश्य क्या है?",
        "options_en": ["Saturating arithmetic operations", "Memory saturation", "Thread saturation", "CPU saturation"],
        "options_hi": ["सैचुरेटिंग अंकगणितीय संचालन", "मेमोरी सैचुरेशन", "थ्रेड सैचुरेशन", "CPU सैचुरेशन"],
        "answer_en": "Saturating arithmetic operations",
        "answer_hi": "सैचुरेटिंग अंकगणितीय संचालन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does 'std::thread::scope' allow?",
        "question_hi": "'std::thread::scope' क्या अनुमति देता है?",
        "options_en": ["Spawn threads that borrow from stack", "Global thread creation", "Thread priority setting", "Thread naming"],
        "options_hi": ["स्टैक से उधार लेने वाले थ्रेड्स स्पॉन", "ग्लोबल थ्रेड निर्माण", "थ्रेड प्राथमिकता सेटिंग", "थ्रेड नामकरण"],
        "answer_en": "Spawn threads that borrow from stack",
        "answer_hi": "स्टैक से उधार लेने वाले थ्रेड्स स्पॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the main use of 'std::sync::LazyLock'?",
        "question_hi": "'std::sync::LazyLock' का मुख्य उपयोग क्या है?",
        "options_en": ["Lazy initialization with thread safety", "Memory lazy loading", "File lazy loading", "Network lazy loading"],
        "options_hi": ["थ्रेड सुरक्षा के साथ आलसी आरंभीकरण", "मेमोरी आलसी लोडिंग", "फ़ाइल आलसी लोडिंग", "नेटवर्क आलसी लोडिंग"],
        "answer_en": "Lazy initialization with thread safety",
        "answer_hi": "थ्रेड सुरक्षा के साथ आलसी आरंभीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What does 'std::mem::discriminant' return?",
        "question_hi": "'std::mem::discriminant' क्या लौटाता है?",
        "options_en": ["Unique identifier for enum variants", "Memory address", "Type size", "Alignment value"],
        "options_hi": ["एनम वेरिएंट्स के लिए अद्वितीय पहचानकर्ता", "मेमोरी एड्रेस", "प्रकार आकार", "अलाइनमेंट मान"],
        "answer_en": "Unique identifier for enum variants",
        "answer_hi": "एनम वेरिएंट्स के लिए अद्वितीय पहचानकर्ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of 'std::hint::black_box'?",
        "question_hi": "'std::hint::black_box' का उद्देश्य क्या है?",
        "options_en": ["Prevent compiler optimizations", "Create black box testing", "Hide implementation", "Encrypt data"],
        "options_hi": ["कंपाइलर अनुकूलन रोकें", "ब्लैक बॉक्स टेस्टिंग बनाएं", "कार्यान्वयन छुपाएं", "डेटा एन्क्रिप्ट"],
        "answer_en": "Prevent compiler optimizations",
        "answer_hi": "कंपाइलर अनुकूलन रोकें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What does 'std::panic::UnwindSafe' guarantee?",
        "question_hi": "'std::panic::UnwindSafe' क्या गारंटी देता है?",
        "options_en": ["Type can safely cross panic boundaries", "No panics will occur", "Memory safety during panic", "Thread safety during panic"],
        "options_hi": ["प्रकार सुरक्षित रूप से पैनिक सीमाओं को पार कर सकता है", "कोई पैनिक नहीं होगा", "पैनिक के दौरान मेमोरी सुरक्षा", "पैनिक के दौरान थ्रेड सुरक्षा"],
        "answer_en": "Type can safely cross panic boundaries",
        "answer_hi": "प्रकार सुरक्षित रूप से पैनिक सीमाओं को पार कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the main use of 'std::sync::Barrier'?",
        "question_hi": "'std::sync::Barrier' का मुख्य उपयोग क्या है?",
        "options_en": ["Synchronize multiple threads at a point", "Create memory barriers", "File synchronization", "Network synchronization"],
        "options_hi": ["एक बिंदु पर कई थ्रेड्स सिंक्रनाइज़", "मेमोरी बैरियर्स बनाएं", "फ़ाइल सिंक्रनाइज़ेशन", "नेटवर्क सिंक्रनाइज़ेशन"],
        "answer_en": "Synchronize multiple threads at a point",
        "answer_hi": "एक बिंदु पर कई थ्रेड्स सिंक्रनाइज़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What does 'std::io::IsTerminal' trait provide?",
        "question_hi": "'std::io::IsTerminal' ट्रेट क्या प्रदान करता है?",
        "options_en": ["Check if stream is a terminal", "Terminal emulation", "Stream redirection", "Output formatting"],
        "options_hi": ["जांचें कि क्या स्ट्रीम टर्मिनल है", "टर्मिनल एमुलेशन", "स्ट्रीम रीडायरेक्शन", "आउटपुट फॉर्मेटिंग"],
        "answer_en": "Check if stream is a terminal",
        "answer_hi": "जांचें कि क्या स्ट्रीम टर्मिनल है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of 'std::backtrace::Backtrace'?",
        "question_hi": "'std::backtrace::Backtrace' का उद्देश्य क्या है?",
        "options_en": ["Capture call stack for debugging", "Memory tracing", "Performance profiling", "Code coverage"],
        "options_hi": ["डिबगिंग के लिए कॉल स्टैक कैप्चर", "मेमोरी ट्रेसिंग", "प्रदर्शन प्रोफाइलिंग", "कोड कवरेज"],
        "answer_en": "Capture call stack for debugging",
        "answer_hi": "डिबगिंग के लिए कॉल स्टैक कैप्चर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does 'std::sync::PoisonError' indicate?",
        "question_hi": "'std::sync::PoisonError' क्या दर्शाता है?",
        "options_en": ["Mutex was poisoned by a panic", "Memory corruption", "Thread poisoning", "File corruption"],
        "options_hi": ["म्यूटेक्स पैनिक द्वारा जहरीला हो गया", "मेमोरी करप्शन", "थ्रेड पॉइजनिंग", "फ़ाइल करप्शन"],
        "answer_en": "Mutex was poisoned by a panic",
        "answer_hi": "म्यूटेक्स पैनिक द्वारा जहरीला हो गया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the main use of 'std::task::Poll'?",
        "question_hi": "'std::task::Poll' का मुख्य उपयोग क्या है?",
        "options_en": ["Async task polling status", "Thread polling", "Memory polling", "File polling"],
        "options_hi": ["एसिंक टास्क पोलिंग स्थिति", "थ्रेड पोलिंग", "मेमोरी पोलिंग", "फ़ाइल पोलिंग"],
        "answer_en": "Async task polling status",
        "answer_hi": "एसिंक टास्क पोलिंग स्थिति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does 'std::future::Future' trait represent?",
        "question_hi": "'std::future::Future' ट्रेट क्या दर्शाता है?",
        "options_en": ["Asynchronous computation", "Future date/time", "Memory future", "Thread future"],
        "options_hi": ["अतुल्यकालिक गणना", "भविष्य की तिथि/समय", "मेमोरी भविष्य", "थ्रेड भविष्य"],
        "answer_en": "Asynchronous computation",
        "answer_hi": "अतुल्यकालिक गणना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of 'std::pin::Pin'?",
        "question_hi": "'std::pin::Pin' का उद्देश्य क्या है?",
        "options_en": ["Prevent moving of self-referential types", "Pin memory locations", "Pin threads", "Pin files"],
        "options_hi": ["स्व-संदर्भित प्रकारों के स्थानांतरण को रोकें", "मेमोरी लोकेशन पिन", "थ्रेड्स पिन", "फ़ाइलें पिन"],
        "answer_en": "Prevent moving of self-referential types",
        "answer_hi": "स्व-संदर्भित प्रकारों के स्थानांतरण को रोकें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What does 'std::mem::ManuallyDrop' prevent?",
        "question_hi": "'std::mem::ManuallyDrop' क्या रोकता है?",
        "options_en": ["Automatic destructor calls", "Manual memory management", "Thread drops", "File closures"],
        "options_hi": ["स्वचालित डिस्ट्रक्टर कॉल", "मैनुअल मेमोरी प्रबंधन", "थ्रेड ड्रॉप", "फ़ाइल क्लोजर"],
        "answer_en": "Automatic destructor calls",
        "answer_hi": "स्वचालित डिस्ट्रक्टर कॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the main use of 'std::sync::mpsc::TryRecvError'?",
        "question_hi": "'std::sync::mpsc::TryRecvError' का मुख्य उपयोग क्या है?",
        "options_en": ["Non-blocking receive failure cases", "Blocking receive errors", "Send errors", "Channel creation errors"],
        "options_hi": ["गैर-अवरुद्ध रिसीव विफलता मामले", "अवरुद्ध रिसीव त्रुटियाँ", "भेजने की त्रुटियाँ", "चैनल निर्माण त्रुटियाँ"],
        "answer_en": "Non-blocking receive failure cases",
        "answer_hi": "गैर-अवरुद्ध रिसीव विफलता मामले",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does 'std::num::TryFromIntError' represent?",
        "question_hi": "'std::num::TryFromIntError' क्या दर्शाता है?",
        "options_en": ["Integer conversion overflow", "Float conversion error", "String conversion error", "Memory conversion error"],
        "options_hi": ["पूर्णांक रूपांतरण ओवरफ्लो", "फ्लोट रूपांतरण त्रुटि", "स्ट्रिंग रूपांतरण त्रुटि", "मेमोरी रूपांतरण त्रुटि"],
        "answer_en": "Integer conversion overflow",
        "answer_hi": "पूर्णांक रूपांतरण ओवरफ्लो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of 'std::sync::WaitTimeoutResult'?",
        "question_hi": "'std::sync::WaitTimeoutResult' का उद्देश्य क्या है?",
        "options_en": ["Result of timed waiting operations", "Thread timeout", "Memory timeout", "File timeout"],
        "options_hi": ["समयबद्ध प्रतीक्षा संचालन का परिणाम", "थ्रेड टाइमआउट", "मेमोरी टाइमआउट", "फ़ाइल टाइमआउट"],
        "answer_en": "Result of timed waiting operations",
        "answer_hi": "समयबद्ध प्रतीक्षा संचालन का परिणाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What does 'std::io::Take' limit?",
        "question_hi": "'std::io::Take' क्या सीमित करता है?",
        "options_en": ["Number of bytes read from a reader", "Memory usage", "Thread count", "File size"],
        "options_hi": ["रीडर से पढ़े गए बाइट्स की संख्या", "मेमोरी उपयोग", "थ्रेड संख्या", "फ़ाइल आकार"],
        "answer_en": "Number of bytes read from a reader",
        "answer_hi": "रीडर से पढ़े गए बाइट्स की संख्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the main use of 'std::collections::TryReserveError'?",
        "question_hi": "'std::collections::TryReserveError' का मुख्य उपयोग क्या है?",
        "options_en": ["Memory allocation failure in collections", "Collection size limit", "Thread reservation", "File reservation"],
        "options_hi": ["संग्रह में मेमोरी आवंटन विफलता", "संग्रह आकार सीमा", "थ्रेड आरक्षण", "फ़ाइल आरक्षण"],
        "answer_en": "Memory allocation failure in collections",
        "answer_hi": "संग्रह में मेमोरी आवंटन विफलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What does 'std::path::MAIN_SEPARATOR' represent?",
        "question_hi": "'std::path::MAIN_SEPARATOR' क्या दर्शाता है?",
        "options_en": ["Platform-specific path separator", "File extension separator", "Directory separator", "Network path separator"],
        "options_hi": ["प्लेटफ़ॉर्म-विशिष्ट पथ विभाजक", "फ़ाइल एक्सटेंशन विभाजक", "निर्देशिका विभाजक", "नेटवर्क पथ विभाजक"],
        "answer_en": "Platform-specific path separator",
        "answer_hi": "प्लेटफ़ॉर्म-विशिष्ट पथ विभाजक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of 'std::sync::atomic::fence'?",
        "question_hi": "'std::sync::atomic::fence' का उद्देश्य क्या है?",
        "options_en": ["Memory ordering barrier", "Thread fencing", "Memory protection", "Atomic operation"],
        "options_hi": ["मेमोरी ऑर्डरिंग बैरियर", "थ्रेड फेंसिंग", "मेमोरी सुरक्षा", "परमाणु संचालन"],
        "answer_en": "Memory ordering barrier",
        "answer_hi": "मेमोरी ऑर्डरिंग बैरियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What does 'std::io::Lines' return from BufRead?",
        "question_hi": "BufRead से 'std::io::Lines' क्या लौटाता है?",
        "options_en": ["Iterator over lines of text", "Single line", "All lines as string", "Line numbers"],
        "options_hi": ["टेक्स्ट की पंक्तियों पर इटरेटर", "एकल पंक्ति", "स्ट्रिंग के रूप में सभी पंक्तियाँ", "पंक्ति संख्याएँ"],
        "answer_en": "Iterator over lines of text",
        "answer_hi": "टेक्स्ट की पंक्तियों पर इटरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the main use of 'std::num::ParseFloatError'?",
        "question_hi": "'std::num::ParseFloatError' का मुख्य उपयोग क्या है?",
        "options_en": ["Float parsing failure", "Integer parsing failure", "String parsing failure", "Memory parsing failure"],
        "options_hi": ["फ्लोट पार्सिंग विफलता", "पूर्णांक पार्सिंग विफलता", "स्ट्रिंग पार्सिंग विफलता", "मेमोरी पार्सिंग विफलता"],
        "answer_en": "Float parsing failure",
        "answer_hi": "फ्लोट पार्सिंग विफलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What does 'std::sync::mpsc::SendError' indicate?",
        "question_hi": "'std::sync::mpsc::SendError' क्या दर्शाता है?",
        "options_en": ["Receiver is disconnected", "Sender is disconnected", "Channel is full", "Memory error"],
        "options_hi": ["रिसीवर डिस्कनेक्ट है", "सेंडर डिस्कनेक्ट है", "चैनल भरा हुआ है", "मेमोरी त्रुटि"],
        "answer_en": "Receiver is disconnected",
        "answer_hi": "रिसीवर डिस्कनेक्ट है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of 'std::io::Repeat'?",
        "question_hi": "'std::io::Repeat' का उद्देश्य क्या है?",
        "options_en": ["Infinitely repeat a single byte", "Repeat file contents", "Repeat string", "Repeat memory"],
        "options_hi": ["एकल बाइट को अनंत रूप से दोहराएं", "फ़ाइल सामग्री दोहराएं", "स्ट्रिंग दोहराएं", "मेमोरी दोहराएं"],
        "answer_en": "Infinitely repeat a single byte",
        "answer_hi": "एकल बाइट को अनंत रूप से दोहराएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does 'std::collections::hash_map::Entry' represent?",
        "question_hi": "'std::collections::hash_map::Entry' क्या दर्शाता है?",
        "options_en": ["Occupied or vacant hash map slot", "Hash map key", "Hash map value", "Hash map iterator"],
        "options_hi": ["कब्जे वाला या खाली हैश मैप स्लॉट", "हैश मैप कुंजी", "हैश मैप मान", "हैश मैप इटरेटर"],
        "answer_en": "Occupied or vacant hash map slot",
        "answer_hi": "कब्जे वाला या खाली हैश मैप स्लॉट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the main use of 'std::sync::Condvar::wait_timeout'?",
        "question_hi": "'std::sync::Condvar::wait_timeout' का मुख्य उपयोग क्या है?",
        "options_en": ["Wait with timeout on condition variable", "Wait indefinitely", "Signal condition", "Broadcast condition"],
        "options_hi": ["कंडीशन वेरिएबल पर टाइमआउट के साथ प्रतीक्षा", "अनिश्चित काल तक प्रतीक्षा", "कंडीशन सिग्नल", "कंडीशन ब्रॉडकास्ट"],
        "answer_en": "Wait with timeout on condition variable",
        "answer_hi": "कंडीशन वेरिएबल पर टाइमआउट के साथ प्रतीक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What does 'std::mem::zeroed' initialize with?",
        "question_hi": "'std::mem::zeroed' किससे आरंभ करता है?",
        "options_en": ["All bits set to zero", "Default values", "Random values", "Uninitialized memory"],
        "options_hi": ["सभी बिट्स शून्य पर सेट", "डिफ़ॉल्ट मान", "यादृच्छिक मान", "अप्रारंभिक मेमोरी"],
        "answer_en": "All bits set to zero",
        "answer_hi": "सभी बिट्स शून्य पर सेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of 'std::io::Empty'?",
        "question_hi": "'std::io::Empty' का उद्देश्य क्या है?",
        "options_en": ["Zero-length Read implementation", "Empty file", "Null stream", "Memory stream"],
        "options_hi": ["शून्य-लंबाई रीड इम्प्लीमेंटेशन", "खाली फ़ाइल", "नल स्ट्रीम", "मेमोरी स्ट्रीम"],
        "answer_en": "Zero-length Read implementation",
        "answer_hi": "शून्य-लंबाई रीड इम्प्लीमेंटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does 'std::sync::Arc::get_mut' require?",
        "question_hi": "'std::sync::Arc::get_mut' की क्या आवश्यकता है?",
        "options_en": ["No other Arc or Weak pointers exist", "Thread safety", "Memory alignment", "Atomic operations"],
        "options_hi": ["कोई अन्य Arc या Weak पॉइंटर्स मौजूद नहीं हैं", "थ्रेड सुरक्षा", "मेमोरी अलाइनमेंट", "परमाणु संचालन"],
        "answer_en": "No other Arc or Weak pointers exist",
        "answer_hi": "कोई अन्य Arc या Weak पॉइंटर्स मौजूद नहीं हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the main use of 'std::num::NonZeroUsize'?",
        "question_hi": "'std::num::NonZeroUsize' का मुख्य उपयोग क्या है?",
        "options_en": ["Memory optimization for non-zero sizes", "Zero size handling", "Negative sizes", "Floating sizes"],
        "options_hi": ["गैर-शून्य आकारों के लिए मेमोरी अनुकूलन", "शून्य आकार प्रबंधन", "नकारात्मक आकार", "फ्लोटिंग आकार"],
        "answer_en": "Memory optimization for non-zero sizes",
        "answer_hi": "गैर-शून्य आकारों के लिए मेमोरी अनुकूलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What does 'std::io::Sink' implement?",
        "question_hi": "'std::io::Sink' क्या लागू करता है?",
        "options_en": ["Write that discards all data", "Read from null", "Memory sink", "File sink"],
        "options_hi": ["लेखन जो सभी डेटा को त्यागता है", "नल से पढ़ें", "मेमोरी सिंक", "फ़ाइल सिंक"],
        "answer_en": "Write that discards all data",
        "answer_hi": "लेखन जो सभी डेटा को त्यागता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of 'std::sync::OnceLock'?",
        "question_hi": "'std::sync::OnceLock' का उद्देश्य क्या है?",
        "options_en": ["Thread-safe one-time initialization", "Memory locking", "File locking", "Network locking"],
        "options_hi": ["थ्रेड-सुरक्षित एक-बार आरंभीकरण", "मेमोरी लॉकिंग", "फ़ाइल लॉकिंग", "नेटवर्क लॉकिंग"],
        "answer_en": "Thread-safe one-time initialization",
        "answer_hi": "थ्रेड-सुरक्षित एक-बार आरंभीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What does 'std::mem::size_of_val' return?",
        "question_hi": "'std::mem::size_of_val' क्या लौटाता है?",
        "options_en": ["Size of referenced value in bytes", "Size of type", "Memory address", "Alignment"],
        "options_hi": ["बाइट्स में संदर्भित मान का आकार", "प्रकार का आकार", "मेमोरी एड्रेस", "अलाइनमेंट"],
        "answer_en": "Size of referenced value in bytes",
        "answer_hi": "बाइट्स में संदर्भित मान का आकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the main use of 'std::sync::mpsc::sync_channel'?",
        "question_hi": "'std::sync::mpsc::sync_channel' का मुख्य उपयोग क्या है?",
        "options_en": ["Bounded synchronous message passing", "Unbounded async messaging", "File messaging", "Network messaging"],
        "options_hi": ["बाउंडेड सिंक्रोनस मैसेज पासिंग", "अनबाउंडेड एसिंक मैसेजिंग", "फ़ाइल मैसेजिंग", "नेटवर्क मैसेजिंग"],
        "answer_en": "Bounded synchronous message passing",
        "answer_hi": "बाउंडेड सिंक्रोनस मैसेज पासिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What does 'std::num::Wrapping' prevent?",
        "question_hi": "'std::num::Wrapping' क्या रोकता है?",
        "options_en": ["Integer overflow panics", "Memory overflow", "Thread overflow", "File overflow"],
        "options_hi": ["पूर्णांक ओवरफ्लो पैनिक", "मेमोरी ओवरफ्लो", "थ्रेड ओवरफ्लो", "फ़ाइल ओवरफ्लो"],
        "answer_en": "Integer overflow panics",
        "answer_hi": "पूर्णांक ओवरफ्लो पैनिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of 'std::io::Bytes'?",
        "question_hi": "'std::io::Bytes' का उद्देश्य क्या है?",
        "options_en": ["Iterator over bytes from a reader", "Single byte reader", "Byte array", "Memory bytes"],
        "options_hi": ["रीडर से बाइट्स पर इटरेटर", "सिंगल बाइट रीडर", "बाइट ऐरे", "मेमोरी बाइट्स"],
        "answer_en": "Iterator over bytes from a reader",
        "answer_hi": "रीडर से बाइट्स पर इटरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What does 'std::sync::MutexGuard' provide?",
        "question_hi": "'std::sync::MutexGuard' क्या प्रदान करता है?",
        "options_en": ["RAII lock management for Mutex", "Memory guard", "Thread guard", "File guard"],
        "options_hi": ["Mutex के लिए RAII लॉक प्रबंधन", "मेमोरी गार्ड", "थ्रेड गार्ड", "फ़ाइल गार्ड"],
        "answer_en": "RAII lock management for Mutex",
        "answer_hi": "Mutex के लिए RAII लॉक प्रबंधन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the main use of 'std::collections::BinaryHeap::peek'?",
        "question_hi": "'std::collections::BinaryHeap::peek' का मुख्य उपयोग क्या है?",
        "options_en": ["View largest element without removing", "Remove largest element", "Check if empty", "Get size"],
        "options_hi": ["हटाए बिना सबसे बड़ा तत्व देखें", "सबसे बड़ा तत्व हटाएं", "जांचें कि खाली है", "आकार प्राप्त"],
        "answer_en": "View largest element without removing",
        "answer_hi": "हटाए बिना सबसे बड़ा तत्व देखें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What does 'std::process::ChildStdin' represent?",
        "question_hi": "'std::process::ChildStdin' क्या दर्शाता है?",
        "options_en": ["Input stream to child process", "Output from child", "Child process errors", "Child process status"],
        "options_hi": ["चाइल्ड प्रक्रिया के लिए इनपुट स्ट्रीम", "चाइल्ड से आउटपुट", "चाइल्ड प्रक्रिया त्रुटियाँ", "चाइल्ड प्रक्रिया स्थिति"],
        "answer_en": "Input stream to child process",
        "answer_hi": "चाइल्ड प्रक्रिया के लिए इनपुट स्ट्रीम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of 'std::sync::RwLockReadGuard'?",
        "question_hi": "'std::sync::RwLockReadGuard' का उद्देश्य क्या है?",
        "options_en": ["RAII for shared read access", "Exclusive write access", "Memory read guard", "File read guard"],
        "options_hi": ["साझा पठन पहुंच के लिए RAII", "विशिष्ट लेखन पहुंच", "मेमोरी रीड गार्ड", "फ़ाइल रीड गार्ड"],
        "answer_en": "RAII for shared read access",
        "answer_hi": "साझा पठन पहुंच के लिए RAII",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What does 'std::io::SeekFrom::End' represent?",
        "question_hi": "'std::io::SeekFrom::End' क्या दर्शाता है?",
        "options_en": ["Offset from end of stream", "Offset from start", "Current position", "Absolute position"],
        "options_hi": ["स्ट्रीम के अंत से ऑफसेट", "शुरुआत से ऑफसेट", "वर्तमान स्थिति", "निरपेक्ष स्थिति"],
        "answer_en": "Offset from end of stream",
        "answer_hi": "स्ट्रीम के अंत से ऑफसेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the main use of 'std::sync::atomic::AtomicPtr'?",
        "question_hi": "'std::sync::atomic::AtomicPtr' का मुख्य उपयोग क्या है?",
        "options_en": ["Thread-safe pointer operations", "Memory pointer", "File pointer", "Network pointer"],
        "options_hi": ["थ्रेड-सुरक्षित पॉइंटर संचालन", "मेमोरी पॉइंटर", "फ़ाइल पॉइंटर", "नेटवर्क पॉइंटर"],
        "answer_en": "Thread-safe pointer operations",
        "answer_hi": "थ्रेड-सुरक्षित पॉइंटर संचालन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What does 'std::collections::VecDeque::push_front' do?",
        "question_hi": "'std::collections::VecDeque::push_front' क्या करता है?",
        "options_en": ["Add element to the front", "Add to the back", "Remove from front", "Remove from back"],
        "options_hi": ["सामने तत्व जोड़ें", "पीछे जोड़ें", "सामने से हटाएं", "पीछे से हटाएं"],
        "answer_en": "Add element to the front",
        "answer_hi": "सामने तत्व जोड़ें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of 'std::sync::mpsc::Receiver::iter'?",
        "question_hi": "'std::sync::mpsc::Receiver::iter' का उद्देश्य क्या है?",
        "options_en": ["Blocking iterator over received messages", "Non-blocking iteration", "Message filtering", "Message transformation"],
        "options_hi": ["प्राप्त संदेशों पर अवरुद्ध इटरेटर", "गैर-अवरुद्ध पुनरावृत्ति", "संदेश फिल्टरिंग", "संदेश परिवर्तन"],
        "answer_en": "Blocking iterator over received messages",
        "answer_hi": "प्राप्त संदेशों पर अवरुद्ध इटरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What does 'std::io::Error::from_raw_os_error' create?",
        "question_hi": "'std::io::Error::from_raw_os_error' क्या बनाता है?",
        "options_en": ["IO error from OS error code", "Custom IO error", "Network error", "File error"],
        "options_hi": ["OS त्रुटि कोड से IO त्रुटि", "कस्टम IO त्रुटि", "नेटवर्क त्रुटि", "फ़ाइल त्रुटि"],
        "answer_en": "IO error from OS error code",
        "answer_hi": "OS त्रुटि कोड से IO त्रुटि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the main use of 'std::sync::Once::is_completed'?",
        "question_hi": "'std::sync::Once::is_completed' का मुख्य उपयोग क्या है?",
        "options_en": ["Check if initialization has run", "Check if running", "Check if failed", "Check if pending"],
        "options_hi": ["जांचें कि आरंभीकरण चल चुका है", "जांचें कि चल रहा है", "जांचें कि विफल", "जांचें कि लंबित"],
        "answer_en": "Check if initialization has run",
        "answer_hi": "जांचें कि आरंभीकरण चल चुका है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What does 'std::mem::replace' return?",
        "question_hi": "'std::mem::replace' क्या लौटाता है?",
        "options_en": ["The old value being replaced", "The new value", "Both values", "Nothing"],
        "options_hi": ["प्रतिस्थापित किया जा रहा पुराना मान", "नया मान", "दोनों मान", "कुछ नहीं"],
        "answer_en": "The old value being replaced",
        "answer_hi": "प्रतिस्थापित किया जा रहा पुराना मान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of 'std::sync::Condvar::notify_one'?",
        "question_hi": "'std::sync::Condvar::notify_one' का उद्देश्य क्या है?",
        "options_en": ["Wake one waiting thread", "Wake all threads", "Stop one thread", "Start one thread"],
        "options_hi": ["एक प्रतीक्षारत थ्रेड जगाएं", "सभी थ्रेड्स जगाएं", "एक थ्रेड रोकें", "एक थ्रेड शुरू"],
        "answer_en": "Wake one waiting thread",
        "answer_hi": "एक प्रतीक्षारत थ्रेड जगाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What does 'std::collections::HashMap::entry' return?",
        "question_hi": "'std::collections::HashMap::entry' क्या लौटाता है?",
        "options_en": ["Entry API for key", "Value for key", "Whether key exists", "Hash of key"],
        "options_hi": ["कुंजी के लिए एंट्री API", "कुंजी के लिए मान", "क्या कुंजी मौजूद है", "कुंजी का हैश"],
        "answer_en": "Entry API for key",
        "answer_hi": "कुंजी के लिए एंट्री API",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the main use of 'std::sync::Arc::try_unwrap'?",
        "question_hi": "'std::sync::Arc::try_unwrap' का मुख्य उपयोग क्या है?",
        "options_en": ["Retrieve value if last Arc", "Always retrieve value", "Clone value", "Drop value"],
        "options_hi": ["मान प्राप्त करें यदि अंतिम Arc", "हमेशा मान प्राप्त", "मान क्लोन", "मान ड्रॉप"],
        "answer_en": "Retrieve value if last Arc",
        "answer_hi": "मान प्राप्त करें यदि अंतिम Arc",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does 'std::io::BufReader::buffer' provide access to?",
        "question_hi": "'std::io::BufReader::buffer' किसे एक्सेस प्रदान करता है?",
        "options_en": ["Internal buffer contents", "File contents", "Memory buffer", "Network buffer"],
        "options_hi": ["आंतरिक बफर सामग्री", "फ़ाइल सामग्री", "मेमोरी बफर", "नेटवर्क बफर"],
        "answer_en": "Internal buffer contents",
        "answer_hi": "आंतरिक बफर सामग्री",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of 'std::sync::mpsc::SyncSender::try_send'?",
        "question_hi": "'std::sync::mpsc::SyncSender::try_send' का उद्देश्य क्या है?",
        "options_en": ["Non-blocking send attempt", "Blocking send", "Async send", "Guaranteed send"],
        "options_hi": ["गैर-अवरुद्ध भेजने का प्रयास", "अवरुद्ध भेजें", "एसिंक भेजें", "गारंटीकृत भेजें"],
        "answer_en": "Non-blocking send attempt",
        "answer_hi": "गैर-अवरुद्ध भेजने का प्रयास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What does 'std::collections::BinaryHeap::into_sorted_vec' return?",
        "question_hi": "'std::collections::BinaryHeap::into_sorted_vec' क्या लौटाता है?",
        "options_en": ["Sorted vector consuming the heap", "Heap as vector", "Unsorted vector", "Empty vector"],
        "options_hi": ["हीप को उपभोग करते हुए क्रमबद्ध वेक्टर", "वेक्टर के रूप में हीप", "अक्रमबद्ध वेक्टर", "खाली वेक्टर"],
        "answer_en": "Sorted vector consuming the heap",
        "answer_hi": "हीप को उपभोग करते हुए क्रमबद्ध वेक्टर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the main use of 'std::sync::atomic::AtomicBool::compare_exchange'?",
        "question_hi": "'std::sync::atomic::AtomicBool::compare_exchange' का मुख्य उपयोग क्या है?",
        "options_en": ["Atomic compare-and-swap operation", "Boolean comparison", "Memory comparison", "Thread comparison"],
        "options_hi": ["परमाणु तुलना-और-स्वैप संचालन", "बूलियन तुलना", "मेमोरी तुलना", "थ्रेड तुलना"],
        "answer_en": "Atomic compare-and-swap operation",
        "answer_hi": "परमाणु तुलना-और-स्वैप संचालन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What does 'std::io::Chain' combine?",
        "question_hi": "'std::io::Chain' क्या संयोजित करता है?",
        "options_en": ["Two readers sequentially", "Multiple readers", "Reader and writer", "File and network"],
        "options_hi": ["दो रीडर क्रमिक रूप से", "एकाधिक रीडर", "रीडर और राइटर", "फ़ाइल और नेटवर्क"],
        "answer_en": "Two readers sequentially",
        "answer_hi": "दो रीडर क्रमिक रूप से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of 'std::sync::RwLock::try_read'?",
        "question_hi": "'std::sync::RwLock::try_read' का उद्देश्य क्या है?",
        "options_en": ["Non-blocking read lock attempt", "Blocking read lock", "Write lock attempt", "Upgrade lock"],
        "options_hi": ["गैर-अवरुद्ध रीड लॉक प्रयास", "अवरुद्ध रीड लॉक", "राइट लॉक प्रयास", "लॉक अपग्रेड"],
        "answer_en": "Non-blocking read lock attempt",
        "answer_hi": "गैर-अवरुद्ध रीड लॉक प्रयास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What does 'std::mem::align_of_val' return?",
        "question_hi": "'std::mem::align_of_val' क्या लौटाता है?",
        "options_en": ["Alignment of referenced value", "Alignment of type", "Size of value", "Memory address"],
        "options_hi": ["संदर्भित मान का अलाइनमेंट", "प्रकार का अलाइनमेंट", "मान का आकार", "मेमोरी एड्रेस"],
        "answer_en": "Alignment of referenced value",
        "answer_hi": "संदर्भित मान का अलाइनमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the main use of 'std::sync::mpsc::Receiver::recv_timeout'?",
        "question_hi": "'std::sync::mpsc::Receiver::recv_timeout' का मुख्य उपयोग क्या है?",
        "options_en": ["Blocking receive with timeout", "Non-blocking receive", "Immediate receive", "Guaranteed receive"],
        "options_hi": ["टाइमआउट के साथ अवरुद्ध रिसीव", "गैर-अवरुद्ध रिसीव", "तत्काल रिसीव", "गारंटीकृत रिसीव"],
        "answer_en": "Blocking receive with timeout",
        "answer_hi": "टाइमआउट के साथ अवरुद्ध रिसीव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What does 'std::collections::VecDeque::make_contiguous' do?",
        "question_hi": "'std::collections::VecDeque::make_contiguous' क्या करता है?",
        "options_en": ["Rearrange elements into contiguous slice", "Make memory contiguous", "Sort elements", "Remove gaps"],
        "options_hi": ["तत्वों को सन्निहित स्लाइस में पुनर्व्यवस्थित", "मेमोरी सन्निहित बनाएं", "तत्वों को सॉर्ट", "अंतराल हटाएं"],
        "answer_en": "Rearrange elements into contiguous slice",
        "answer_hi": "तत्वों को सन्निहित स्लाइस में पुनर्व्यवस्थित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of 'std::sync::atomic::AtomicUsize::fetch_add'?",
        "question_hi": "'std::sync::atomic::AtomicUsize::fetch_add' का उद्देश्य क्या है?",
        "options_en": ["Atomically add and return previous value", "Just add", "Add and return new value", "Check then add"],
        "options_hi": ["परमाणु रूप से जोड़ें और पिछला मान लौटाएं", "बस जोड़ें", "जोड़ें और नया मान लौटाएं", "जांचें फिर जोड़ें"],
        "answer_en": "Atomically add and return previous value",
        "answer_hi": "परमाणु रूप से जोड़ें और पिछला मान लौटाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What does 'std::io::Read::read_to_end' do?",
        "question_hi": "'std::io::Read::read_to_end' क्या करता है?",
        "options_en": ["Read all bytes until EOF", "Read fixed number of bytes", "Read to string", "Read line by line"],
        "options_hi": ["EOF तक सभी बाइट्स पढ़ें", "निश्चित संख्या में बाइट्स पढ़ें", "स्ट्रिंग में पढ़ें", "लाइन दर लाइन पढ़ें"],
        "answer_en": "Read all bytes until EOF",
        "answer_hi": "EOF तक सभी बाइट्स पढ़ें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the main use of 'std::sync::Mutex::try_lock'?",
        "question_hi": "'std::sync::Mutex::try_lock' का मुख्य उपयोग क्या है?",
        "options_en": ["Non-blocking mutex lock attempt", "Blocking lock", "Read lock", "Write lock"],
        "options_hi": ["गैर-अवरुद्ध म्यूटेक्स लॉक प्रयास", "अवरुद्ध लॉक", "रीड लॉक", "राइट लॉक"],
        "answer_en": "Non-blocking mutex lock attempt",
        "answer_hi": "गैर-अवरुद्ध म्यूटेक्स लॉक प्रयास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What does 'std::collections::HashSet::take' do?",
        "question_hi": "'std::collections::HashSet::take' क्या करता है?",
        "options_en": ["Remove and return value if present", "Just remove", "Check if present", "Add value"],
        "options_hi": ["हटाएं और मान लौटाएं यदि मौजूद", "बस हटाएं", "जांचें कि मौजूद है", "मान जोड़ें"],
        "answer_en": "Remove and return value if present",
        "answer_hi": "हटाएं और मान लौटाएं यदि मौजूद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of 'std::sync::Arc::strong_count'?",
        "question_hi": "'std::sync::Arc::strong_count' का उद्देश्य क्या है?",
        "options_en": ["Get number of strong references", "Get weak reference count", "Check if unique", "Get total count"],
        "options_hi": ["मजबूत संदर्भों की संख्या प्राप्त", "कमजोर संदर्भ गिनती प्राप्त", "जांचें कि अद्वितीय है", "कुल गिनती प्राप्त"],
        "answer_en": "Get number of strong references",
        "answer_hi": "मजबूत संदर्भों की संख्या प्राप्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What does 'std::io::StdinLock' provide?",
        "question_hi": "'std::io::StdinLock' क्या प्रदान करता है?",
        "options_en": ["Locked reference to standard input", "Global stdin access", "Thread-safe stdin", "Buffered stdin"],
        "options_hi": ["मानक इनपुट का लॉक किया गया संदर्भ", "ग्लोबल stdin एक्सेस", "थ्रेड-सुरक्षित stdin", "बफर किया गया stdin"],
        "answer_en": "Locked reference to standard input",
        "answer_hi": "मानक इनपुट का लॉक किया गया संदर्भ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the main use of 'std::sync::mpsc::Sender::send'?",
        "question_hi": "'std::sync::mpsc::Sender::send' का मुख्य उपयोग क्या है?",
        "options_en": ["Blocking send operation", "Non-blocking send", "Async send", "Guaranteed send"],
        "options_hi": ["अवरुद्ध भेजने का संचालन", "गैर-अवरुद्ध भेजें", "एसिंक भेजें", "गारंटीकृत भेजें"],
        "answer_en": "Blocking send operation",
        "answer_hi": "अवरुद्ध भेजने का संचालन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What does 'std::collections::BTreeMap::range' return?",
        "question_hi": "'std::collections::BTreeMap::range' क्या लौटाता है?",
        "options_en": ["Iterator over key-range subset", "All keys", "All values", "Random subset"],
        "options_hi": ["कुंजी-रेंज सबसेट पर इटरेटर", "सभी कुंजियाँ", "सभी मान", "यादृच्छिक सबसेट"],
        "answer_en": "Iterator over key-range subset",
        "answer_hi": "कुंजी-रेंज सबसेट पर इटरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of 'std::sync::Condvar::notify_all'?",
        "question_hi": "'std::sync::Condvar::notify_all' का उद्देश्य क्या है?",
        "options_en": ["Wake all waiting threads", "Wake one thread", "Stop all threads", "Start all threads"],
        "options_hi": ["सभी प्रतीक्षारत थ्रेड्स जगाएं", "एक थ्रेड जगाएं", "सभी थ्रेड्स रोकें", "सभी थ्रेड्स शुरू"],
        "answer_en": "Wake all waiting threads",
        "answer_hi": "सभी प्रतीक्षारत थ्रेड्स जगाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What does 'std::mem::transmute_copy' do?",
        "question_hi": "'std::mem::transmute_copy' क्या करता है?",
        "options_en": ["Reinterpret bytes without moving", "Copy and transmute", "Move and transmute", "Safe transmute"],
        "options_hi": ["बाइट्स को स्थानांतरित किए बिना पुनर्व्याख्या", "कॉपी और ट्रांसम्यूट", "मूव और ट्रांसम्यूट", "सुरक्षित ट्रांसम्यूट"],
        "answer_en": "Reinterpret bytes without moving",
        "answer_hi": "बाइट्स को स्थानांतरित किए बिना पुनर्व्याख्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the main use of 'std::sync::RwLock::try_write'?",
        "question_hi": "'std::sync::RwLock::try_write' का मुख्य उपयोग क्या है?",
        "options_en": ["Non-blocking write lock attempt", "Blocking write lock", "Read lock attempt", "Upgrade lock"],
        "options_hi": ["गैर-अवरुद्ध राइट लॉक प्रयास", "अवरुद्ध राइट लॉक", "रीड लॉक प्रयास", "लॉक अपग्रेड"],
        "answer_en": "Non-blocking write lock attempt",
        "answer_hi": "गैर-अवरुद्ध राइट लॉक प्रयास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What does 'std::io::Write::flush' ensure?",
        "question_hi": "'std::io::Write::flush' क्या सुनिश्चित करता है?",
        "options_en": ["All buffered data is written", "File is closed", "Memory is freed", "Stream is ready"],
        "options_hi": ["सभी बफर किया गया डेटा लिखा गया है", "फ़ाइल बंद है", "मेमोरी मुक्त है", "स्ट्रीम तैयार है"],
        "answer_en": "All buffered data is written",
        "answer_hi": "सभी बफर किया गया डेटा लिखा गया है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of 'std::sync::atomic::AtomicIsize'?",
        "question_hi": "'std::sync::atomic::AtomicIsize' का उद्देश्य क्या है?",
        "options_en": ["Thread-safe signed integer operations", "Memory operations", "File operations", "Network operations"],
        "options_hi": ["थ्रेड-सुरक्षित साइन्ड इंटीजर संचालन", "मेमोरी संचालन", "फ़ाइल संचालन", "नेटवर्क संचालन"],
        "answer_en": "Thread-safe signed integer operations",
        "answer_hi": "थ्रेड-सुरक्षित साइन्ड इंटीजर संचालन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What does 'std::collections::Vec::split_off' do?",
        "question_hi": "'std::collections::Vec::split_off' क्या करता है?",
        "options_en": ["Splits vector at index, returns second part", "Splits into equal parts", "Removes elements", "Adds elements"],
        "options_hi": ["इंडेक्स पर वेक्टर विभाजित, दूसरा भाग लौटाता", "बराबर भागों में विभाजित", "तत्व हटाता", "तत्व जोड़ता"],
        "answer_en": "Splits vector at index, returns second part",
        "answer_hi": "इंडेक्स पर वेक्टर विभाजित, दूसरा भाग लौटाता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the main use of 'std::sync::mpsc::SyncSender::send'?",
        "question_hi": "'std::sync::mpsc::SyncSender::send' का मुख्य उपयोग क्या है?",
        "options_en": ["Blocking send that may wait for space", "Non-blocking send", "Async send", "Instant send"],
        "options_hi": ["अवरुद्ध भेजें जो स्थान के लिए प्रतीक्षा कर सकता है", "गैर-अवरुद्ध भेजें", "एसिंक भेजें", "तत्काल भेजें"],
        "answer_en": "Blocking send that may wait for space",
        "answer_hi": "अवरुद्ध भेजें जो स्थान के लिए प्रतीक्षा कर सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What does 'std::io::Seek::stream_position' return?",
        "question_hi": "'std::io::Seek::stream_position' क्या लौटाता है?",
        "options_en": ["Current position in stream", "Stream length", "Stream capacity", "Stream offset"],
        "options_hi": ["स्ट्रीम में वर्तमान स्थिति", "स्ट्रीम लंबाई", "स्ट्रीम क्षमता", "स्ट्रीम ऑफसेट"],
        "answer_en": "Current position in stream",
        "answer_hi": "स्ट्रीम में वर्तमान स्थिति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of 'std::sync::atomic::AtomicU8'?",
        "question_hi": "'std::sync::atomic::AtomicU8' का उद्देश्य क्या है?",
        "options_en": ["Thread-safe 8-bit unsigned integer", "Memory byte", "File byte", "Network byte"],
        "options_hi": ["थ्रेड-सुरक्षित 8-बिट अनसाइन्ड इंटीजर", "मेमोरी बाइट", "फ़ाइल बाइट", "नेटवर्क बाइट"],
        "answer_en": "Thread-safe 8-bit unsigned integer",
        "answer_hi": "थ्रेड-सुरक्षित 8-बिट अनसाइन्ड इंटीजर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What does 'std::collections::BinaryHeap::pop' return?",
        "question_hi": "'std::collections::BinaryHeap::pop' क्या लौटाता है?",
        "options_en": ["Largest element", "Smallest element", "Random element", "First element"],
        "options_hi": ["सबसे बड़ा तत्व", "सबसे छोटा तत्व", "यादृच्छिक तत्व", "पहला तत्व"],
        "answer_en": "Largest element",
        "answer_hi": "सबसे बड़ा तत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the main use of 'std::sync::Arc::weak_count'?",
        "question_hi": "'std::sync::Arc::weak_count' का मुख्य उपयोग क्या है?",
        "options_en": ["Get number of weak references", "Get strong reference count", "Check if unique", "Get total count"],
        "options_hi": ["कमजोर संदर्भों की संख्या प्राप्त", "मजबूत संदर्भ गिनती प्राप्त", "जांचें कि अद्वितीय है", "कुल गिनती प्राप्त"],
        "answer_en": "Get number of weak references",
        "answer_hi": "कमजोर संदर्भों की संख्या प्राप्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What does 'std::io::BufWriter::into_inner' return?",
        "question_hi": "'std::io::BufWriter::into_inner' क्या लौटाता है?",
        "options_en": ["Underlying writer with flushed buffer", "Buffer contents", "Writer without buffer", "Empty writer"],
        "options_hi": ["फ्लश किए गए बफर के साथ अंतर्निहित राइटर", "बफर सामग्री", "बफर के बिना राइटर", "खाली राइटर"],
        "answer_en": "Underlying writer with flushed buffer",
        "answer_hi": "फ्लश किए गए बफर के साथ अंतर्निहित राइटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of 'std::sync::mpsc::channel'?",
        "question_hi": "'std::sync::mpsc::channel' का उद्देश्य क्या है?",
        "options_en": ["Create unbounded asynchronous channel", "Create bounded channel", "Create sync channel", "Create file channel"],
        "options_hi": ["अनबाउंडेड एसिंक्रोनस चैनल बनाएं", "बाउंडेड चैनल बनाएं", "सिंक चैनल बनाएं", "फ़ाइल चैनल बनाएं"],
        "answer_en": "Create unbounded asynchronous channel",
        "answer_hi": "अनबाउंडेड एसिंक्रोनस चैनल बनाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What does 'std::collections::HashMap::retain' do?",
        "question_hi": "'std::collections::HashMap::retain' क्या करता है?",
        "options_en": ["Keep only elements matching predicate", "Remove all elements", "Add elements", "Sort elements"],
        "options_hi": ["केवल प्रिडिकेट से मेल खाने वाले तत्व रखें", "सभी तत्व हटाएं", "तत्व जोड़ें", "तत्वों को सॉर्ट"],
        "answer_en": "Keep only elements matching predicate",
        "answer_hi": "केवल प्रिडिकेट से मेल खाने वाले तत्व रखें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the main use of 'std::sync::atomic::Ordering::SeqCst'?",
        "question_hi": "'std::sync::atomic::Ordering::SeqCst' का मुख्य उपयोग क्या है?",
        "options_en": ["Sequentially consistent memory ordering", "Relaxed ordering", "Release ordering", "Acquire ordering"],
        "options_hi": ["क्रमिक रूप से सुसंगत मेमोरी ऑर्डरिंग", "आराम से ऑर्डरिंग", "रिलीज ऑर्डरिंग", "अधिग्रहण ऑर्डरिंग"],
        "answer_en": "Sequentially consistent memory ordering",
        "answer_hi": "क्रमिक रूप से सुसंगत मेमोरी ऑर्डरिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What does 'std::io::Read::read_exact' ensure?",
        "question_hi": "'std::io::Read::read_exact' क्या सुनिश्चित करता है?",
        "options_en": ["Exactly requested number of bytes are read", "At least some bytes are read", "All available bytes are read", "Bytes are read quickly"],
        "options_hi": ["बिल्कुल अनुरोधित संख्या में बाइट्स पढ़े जाते हैं", "कम से कम कुछ बाइट्स पढ़े जाते हैं", "सभी उपलब्ध बाइट्स पढ़े जाते हैं", "बाइट्स तेजी से पढ़े जाते हैं"],
        "answer_en": "Exactly requested number of bytes are read",
        "answer_hi": "बिल्कुल अनुरोधित संख्या में बाइट्स पढ़े जाते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of 'std::sync::Mutex::into_inner'?",
        "question_hi": "'std::sync::Mutex::into_inner' का उद्देश्य क्या है?",
        "options_en": ["Consume mutex and return guarded data", "Get lock guard", "Check mutex state", "Unlock mutex"],
        "options_hi": ["म्यूटेक्स उपभोग और गार्डेड डेटा लौटाएं", "लॉक गार्ड प्राप्त", "म्यूटेक्स स्थिति जांच", "म्यूटेक्स अनलॉक"],
        "answer_en": "Consume mutex and return guarded data",
        "answer_hi": "म्यूटेक्स उपभोग और गार्डेड डेटा लौटाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What does 'std::collections::VecDeque::get' return?",
        "question_hi": "'std::collections::VecDeque::get' क्या लौटाता है?",
        "options_en": ["Option with reference to element", "Direct reference", "Copied value", "Element index"],
        "options_hi": ["तत्व के संदर्भ के साथ Option", "सीधा संदर्भ", "कॉपी किया गया मान", "तत्व इंडेक्स"],
        "answer_en": "Option with reference to element",
        "answer_hi": "तत्व के संदर्भ के साथ Option",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the main use of 'std::sync::atomic::AtomicI32'?",
        "question_hi": "'std::sync::atomic::AtomicI32' का मुख्य उपयोग क्या है?",
        "options_en": ["Thread-safe 32-bit signed integer", "Memory integer", "File integer", "Network integer"],
        "options_hi": ["थ्रेड-सुरक्षित 32-बिट साइन्ड इंटीजर", "मेमोरी इंटीजर", "फ़ाइल इंटीजर", "नेटवर्क इंटीजर"],
        "answer_en": "Thread-safe 32-bit signed integer",
        "answer_hi": "थ्रेड-सुरक्षित 32-बिट साइन्ड इंटीजर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What does 'std::io::Lines::next' return?",
        "question_hi": "'std::io::Lines::next' क्या लौटाता है?",
        "options_en": ["Option with next line as Result", "Direct next line", "All remaining lines", "Line number"],
        "options_hi": ["अगली पंक्ति के साथ Option जैसे Result", "सीधी अगली पंक्ति", "सभी शेष पंक्तियाँ", "पंक्ति संख्या"],
        "answer_en": "Option with next line as Result",
        "answer_hi": "अगली पंक्ति के साथ Option जैसे Result",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of 'std::sync::RwLockWriteGuard'?",
        "question_hi": "'std::sync::RwLockWriteGuard' का उद्देश्य क्या है?",
        "options_en": ["RAII for exclusive write access", "Shared read access", "Memory write guard", "File write guard"],
        "options_hi": ["विशिष्ट लेखन पहुंच के लिए RAII", "साझा पठन पहुंच", "मेमोरी राइट गार्ड", "फ़ाइल राइट गार्ड"],
        "answer_en": "RAII for exclusive write access",
        "answer_hi": "विशिष्ट लेखन पहुंच के लिए RAII",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What does 'std::collections::BTreeSet::first' return?",
        "question_hi": "'std::collections::BTreeSet::first' क्या लौटाता है?",
        "options_en": ["Smallest element", "Largest element", "Random element", "First inserted element"],
        "options_hi": ["सबसे छोटा तत्व", "सबसे बड़ा तत्व", "यादृच्छिक तत्व", "पहला डाला गया तत्व"],
        "answer_en": "Smallest element",
        "answer_hi": "सबसे छोटा तत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the main use of 'std::sync::mpsc::SyncSender::try_send'?",
        "question_hi": "'std::sync::mpsc::SyncSender::try_send' का मुख्य उपयोग क्या है?",
        "options_en": ["Non-blocking send that fails if full", "Blocking send", "Async send", "Guaranteed send"],
        "options_hi": ["गैर-अवरुद्ध भेजें जो पूर्ण होने पर विफल", "अवरुद्ध भेजें", "एसिंक भेजें", "गारंटीकृत भेजें"],
        "answer_en": "Non-blocking send that fails if full",
        "answer_hi": "गैर-अवरुद्ध भेजें जो पूर्ण होने पर विफल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What does 'std::io::SeekFrom::Start' represent?",
        "question_hi": "'std::io::SeekFrom::Start' क्या दर्शाता है?",
        "options_en": ["Offset from beginning of stream", "Offset from end", "Current position", "Relative position"],
        "options_hi": ["स्ट्रीम की शुरुआत से ऑफसेट", "अंत से ऑफसेट", "वर्तमान स्थिति", "सापेक्ष स्थिति"],
        "answer_en": "Offset from beginning of stream",
        "answer_hi": "स्ट्रीम की शुरुआत से ऑफसेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of 'std::sync::atomic::compiler_fence'?",
        "question_hi": "'std::sync::atomic::compiler_fence' का उद्देश्य क्या है?",
        "options_en": ["Compiler memory ordering without CPU fence", "CPU memory fence", "Thread fence", "Memory allocation"],
        "options_hi": ["CPU फेंस के बिना कंपाइलर मेमोरी ऑर्डरिंग", "CPU मेमोरी फेंस", "थ्रेड फेंस", "मेमोरी आवंटन"],
        "answer_en": "Compiler memory ordering without CPU fence",
        "answer_hi": "CPU फेंस के बिना कंपाइलर मेमोरी ऑर्डरिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What does 'std::collections::LinkedList::append' do?",
        "question_hi": "'std::collections::LinkedList::append' क्या करता है?",
        "options_en": ["Move all elements from another list", "Copy elements", "Add single element", "Remove elements"],
        "options_hi": ["दूसरी सूची से सभी तत्वों को स्थानांतरित", "तत्वों की प्रतिलिपि", "एकल तत्व जोड़ें", "तत्व हटाएं"],
        "answer_en": "Move all elements from another list",
        "answer_hi": "दूसरी सूची से सभी तत्वों को स्थानांतरित",
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