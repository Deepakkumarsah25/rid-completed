const questions = [
    {
        "num": 1,
        "question_en": "What is the main advantage of Rust's zero-cost abstractions?",
        "question_hi": "Rust के जीरो-कॉस्ट एब्स्ट्रक्शन का मुख्य लाभ क्या है?",
        "options_en": ["No runtime overhead", "Faster compilation", "Simpler syntax", "Automatic memory management"],
        "options_hi": ["कोई रनटाइम ओवरहेड नहीं", "तेज कंपाइलेशन", "सरल सिंटैक्स", "स्वचालित मेमोरी प्रबंधन"],
        "answer_en": "No runtime overhead",
        "answer_hi": "कोई रनटाइम ओवरहेड नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What does the 'static lifetime mean in Rust?",
        "question_hi": "Rust में 'static लाइफटाइम का क्या अर्थ है?",
        "options_en": ["Lasts for entire program duration", "Cannot be changed", "Thread-safe", "Compile-time constant"],
        "options_hi": ["पूरे प्रोग्राम अवधि तक रहता है", "बदला नहीं जा सकता", "थ्रेड-सुरक्षित", "कंपाइल-टाइम कॉन्स्टेंट"],
        "answer_en": "Lasts for entire program duration",
        "answer_hi": "पूरे प्रोग्राम अवधि तक रहता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the purpose of the 'as' keyword in Rust?",
        "question_hi": "Rust में 'as' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Type casting between compatible types", "Variable declaration", "Trait implementation", "Module import"],
        "options_hi": ["संगत प्रकारों के बीच टाइप कास्टिंग", "वेरिएबल घोषणा", "ट्रेट इम्प्लीमेंटेशन", "मॉड्यूल आयात"],
        "answer_en": "Type casting between compatible types",
        "answer_hi": "संगत प्रकारों के बीच टाइप कास्टिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What does the 'where' clause provide in generic functions?",
        "question_hi": "जेनेरिक फंक्शन में 'where' क्लॉज क्या प्रदान करता है?",
        "options_en": ["More readable trait bounds", "Faster compilation", "Memory safety", "Automatic type inference"],
        "options_hi": ["अधिक पठनीय ट्रेट बाउंड्स", "तेज कंपाइलेशन", "मेमोरी सुरक्षा", "स्वचालित प्रकार अनुमान"],
        "answer_en": "More readable trait bounds",
        "answer_hi": "अधिक पठनीय ट्रेट बाउंड्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the primary use of the 'loop' keyword in Rust?",
        "question_hi": "Rust में 'loop' कीवर्ड का प्राथमिक उपयोग क्या है?",
        "options_en": ["Infinite looping with manual break", "Definite iteration", "Error handling", "Pattern matching"],
        "options_hi": ["मैनुअल ब्रेक के साथ अनंत लूपिंग", "निश्चित पुनरावृत्ति", "त्रुटि प्रबंधन", "पैटर्न मिलान"],
        "answer_en": "Infinite looping with manual break",
        "answer_hi": "मैनुअल ब्रेक के साथ अनंत लूपिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What does the 'ref' keyword do in pattern matching?",
        "question_hi": "पैटर्न मिलान में 'ref' कीवर्ड क्या करता है?",
        "options_en": ["Borrows the matched value", "Creates a reference", "Deallocates memory", "Changes mutability"],
        "options_hi": ["मिलान किए गए मान को उधार लेता है", "संदर्भ बनाता है", "मेमोरी डीलोकेट करता है", "परिवर्तनशीलता बदलता है"],
        "answer_en": "Borrows the matched value",
        "answer_hi": "मिलान किए गए मान को उधार लेता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the purpose of the 'cfg' attribute in Rust?",
        "question_hi": "Rust में 'cfg' एट्रिब्यूट का उद्देश्य क्या है?",
        "options_en": ["Conditional compilation", "Configuration management", "Code formatting", "Performance optimization"],
        "options_hi": ["सशर्त कंपाइलेशन", "कॉन्फ़िगरेशन प्रबंधन", "कोड फॉर्मेटिंग", "प्रदर्शन अनुकूलन"],
        "answer_en": "Conditional compilation",
        "answer_hi": "सशर्त कंपाइलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does the 'unsafe' keyword allow in Rust?",
        "question_hi": "Rust में 'unsafe' कीवर्ड क्या अनुमति देता है?",
        "options_en": ["Bypass certain compiler checks", "Faster execution", "Automatic optimization", "Memory leaks"],
        "options_hi": ["कुछ कंपाइलर जांचों को बायपास करना", "तेज निष्पादन", "स्वचालित अनुकूलन", "मेमोरी लीक"],
        "answer_en": "Bypass certain compiler checks",
        "answer_hi": "कुछ कंपाइलर जांचों को बायपास करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the main purpose of the 'type' keyword in Rust?",
        "question_hi": "Rust में 'type' कीवर्ड का मुख्य उद्देश्य क्या है?",
        "options_en": ["Create type aliases", "Define new types", "Type checking", "Memory allocation"],
        "options_hi": ["टाइप एलियास बनाना", "नए प्रकार परिभाषित करना", "टाइप चेकिंग", "मेमोरी आवंटन"],
        "answer_en": "Create type aliases",
        "answer_hi": "टाइप एलियास बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What does the 'pub' keyword control in Rust?",
        "question_hi": "Rust में 'pub' कीवर्ड क्या नियंत्रित करता है?",
        "options_en": ["Visibility and accessibility", "Memory safety", "Performance", "Compilation speed"],
        "options_hi": ["दृश्यता और पहुंच", "मेमोरी सुरक्षा", "प्रदर्शन", "कंपाइलेशन गति"],
        "answer_en": "Visibility and accessibility",
        "answer_hi": "दृश्यता और पहुंच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of the 'mod' keyword?",
        "question_hi": "'mod' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Define modules for code organization", "Modify variables", "Model data structures", "Monitor performance"],
        "options_hi": ["कोड संगठन के लिए मॉड्यूल परिभाषित करना", "वेरिएबल्स संशोधित करना", "डेटा संरचनाएं मॉडल करना", "प्रदर्शन मॉनिटर करना"],
        "answer_en": "Define modules for code organization",
        "answer_hi": "कोड संगठन के लिए मॉड्यूल परिभाषित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What does the 'use' keyword do in Rust?",
        "question_hi": "Rust में 'use' कीवर्ड क्या करता है?",
        "options_en": ["Bring items into scope", "Utilize memory", "Use threads", "Apply traits"],
        "options_hi": ["आइटम्स को स्कोप में लाना", "मेमोरी का उपयोग", "थ्रेड्स का उपयोग", "ट्रेट्स लागू करना"],
        "answer_en": "Bring items into scope",
        "answer_hi": "आइटम्स को स्कोप में लाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the primary purpose of 'std::ops::Add' trait?",
        "question_hi": "'std::ops::Add' ट्रेट का प्राथमिक उद्देश्य क्या है?",
        "options_en": ["Overload the + operator", "Add memory", "Increment values", "Append strings"],
        "options_hi": ["+ ऑपरेटर को ओवरलोड करना", "मेमोरी जोड़ना", "मान बढ़ाना", "स्ट्रिंग्स जोड़ना"],
        "answer_en": "Overload the + operator",
        "answer_hi": "+ ऑपरेटर को ओवरलोड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What does 'std::convert::Into' trait provide?",
        "question_hi": "'std::convert::Into' ट्रेट क्या प्रदान करता है?",
        "options_en": ["Generic conversion between types", "Type checking", "Memory conversion", "Value transformation"],
        "options_hi": ["प्रकारों के बीच सामान्य रूपांतरण", "टाइप चेकिंग", "मेमोरी रूपांतरण", "मान परिवर्तन"],
        "answer_en": "Generic conversion between types",
        "answer_hi": "प्रकारों के बीच सामान्य रूपांतरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the main use of 'std::marker::PhantomData'?",
        "question_hi": "'std::marker::PhantomData' का मुख्य उपयोग क्या है?",
        "options_en": ["Mark unused type parameters", "Track memory usage", "Debug types", "Optimize performance"],
        "options_hi": ["अनउपयोगी टाइप पैरामीटर्स को चिह्नित करना", "मेमोरी उपयोग ट्रैक करना", "डिबग प्रकार", "प्रदर्शन अनुकूलित करना"],
        "answer_en": "Mark unused type parameters",
        "answer_hi": "अनउपयोगी टाइप पैरामीटर्स को चिह्नित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does 'std::mem::needs_drop' check?",
        "question_hi": "'std::mem::needs_drop' क्या जांचता है?",
        "options_en": ["Whether a type needs drop glue", "If memory should be freed", "If value should be copied", "Whether type is thread-safe"],
        "options_hi": ["क्या किसी प्रकार को ड्रॉप ग्लू की आवश्यकता है", "यदि मेमोरी मुक्त की जानी चाहिए", "यदि मान की प्रतिलिपि बनाई जानी चाहिए", "क्या प्रकार थ्रेड-सुरक्षित है"],
        "answer_en": "Whether a type needs drop glue",
        "answer_hi": "क्या किसी प्रकार को ड्रॉप ग्लू की आवश्यकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of 'std::iter::FromIterator'?",
        "question_hi": "'std::iter::FromIterator' का उद्देश्य क्या है?",
        "options_en": ["Create collections from iterators", "Convert iterators to strings", "Filter iterator elements", "Sort iterator values"],
        "options_hi": ["इटरेटर्स से संग्रह बनाना", "इटरेटर्स को स्ट्रिंग्स में बदलना", "इटरेटर तत्वों को फिल्टर करना", "इटरेटर मानों को सॉर्ट करना"],
        "answer_en": "Create collections from iterators",
        "answer_hi": "इटरेटर्स से संग्रह बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does 'std::default::Default' trait provide?",
        "question_hi": "'std::default::Default' ट्रेट क्या प्रदान करता है?",
        "options_en": ["Default values for types", "Memory initialization", "Type conversion", "Error handling"],
        "options_hi": ["प्रकारों के लिए डिफ़ॉल्ट मान", "मेमोरी आरंभीकरण", "प्रकार रूपांतरण", "त्रुटि प्रबंधन"],
        "answer_en": "Default values for types",
        "answer_hi": "प्रकारों के लिए डिफ़ॉल्ट मान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the main use of 'std::num::Wrapping'?",
        "question_hi": "'std::num::Wrapping' का मुख्य उपयोग क्या है?",
        "options_en": ["Handle integer overflow with wrapping", "Wrap text output", "Memory wrapping", "Thread wrapping"],
        "options_hi": ["रैपिंग के साथ इंटीजर ओवरफ्लो को संभालना", "टेक्स्ट आउटपुट रैप करना", "मेमोरी रैपिंग", "थ्रेड रैपिंग"],
        "answer_en": "Handle integer overflow with wrapping",
        "answer_hi": "रैपिंग के साथ इंटीजर ओवरफ्लो को संभालना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What does 'std::cmp::Ord' trait require?",
        "question_hi": "'std::cmp::Ord' ट्रेट की क्या आवश्यकता है?",
        "options_en": ["Total ordering implementation", "Partial ordering", "Memory ordering", "Thread ordering"],
        "options_hi": ["कुल ऑर्डरिंग कार्यान्वयन", "आंशिक ऑर्डरिंग", "मेमोरी ऑर्डरिंग", "थ्रेड ऑर्डरिंग"],
        "answer_en": "Total ordering implementation",
        "answer_hi": "कुल ऑर्डरिंग कार्यान्वयन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of 'std::fmt::Formatter'?",
        "question_hi": "'std::fmt::Formatter' का उद्देश्य क्या है?",
        "options_en": ["Control output formatting", "Format memory", "Format files", "Format threads"],
        "options_hi": ["आउटपुट फॉर्मेटिंग नियंत्रित करना", "मेमोरी फॉर्मेट", "फ़ाइलें फॉर्मेट", "थ्रेड्स फॉर्मेट"],
        "answer_en": "Control output formatting",
        "answer_hi": "आउटपुट फॉर्मेटिंग नियंत्रित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does 'std::str::from_utf8' do?",
        "question_hi": "'std::str::from_utf8' क्या करता है?",
        "options_en": ["Convert bytes to UTF-8 string", "Convert string to bytes", "Check UTF-8 validity", "Encode UTF-8"],
        "options_hi": ["बाइट्स को UTF-8 स्ट्रिंग में बदलना", "स्ट्रिंग को बाइट्स में बदलना", "UTF-8 वैधता जांच", "UTF-8 एनकोड"],
        "answer_en": "Convert bytes to UTF-8 string",
        "answer_hi": "बाइट्स को UTF-8 स्ट्रिंग में बदलना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the main use of 'std::ascii::escape_default'?",
        "question_hi": "'std::ascii::escape_default' का मुख्य उपयोग क्या है?",
        "options_en": ["Escape non-printable ASCII characters", "Escape memory", "Escape threads", "Escape files"],
        "options_hi": ["गैर-प्रिंटेबल ASCII वर्णों को एस्केप करना", "मेमोरी एस्केप", "थ्रेड्स एस्केप", "फ़ाइलें एस्केप"],
        "answer_en": "Escape non-printable ASCII characters",
        "answer_hi": "गैर-प्रिंटेबल ASCII वर्णों को एस्केप करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What does 'std::ffi::CString' provide?",
        "question_hi": "'std::ffi::CString' क्या प्रदान करता है?",
        "options_en": ["Rust-compatible C strings", "C-compatible Rust strings", "File strings", "Network strings"],
        "options_hi": ["Rust-संगत C स्ट्रिंग्स", "C-संगत Rust स्ट्रिंग्स", "फ़ाइल स्ट्रिंग्स", "नेटवर्क स्ट्रिंग्स"],
        "answer_en": "Rust-compatible C strings",
        "answer_hi": "Rust-संगत C स्ट्रिंग्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of 'std::sync::atomic::AtomicBool'?",
        "question_hi": "'std::sync::atomic::AtomicBool' का उद्देश्य क्या है?",
        "options_en": ["Thread-safe boolean operations", "Atomic memory allocation", "Boolean conversion", "Thread creation"],
        "options_hi": ["थ्रेड-सुरक्षित बूलियन ऑपरेशन", "परमाणु मेमोरी आवंटन", "बूलियन रूपांतरण", "थ्रेड निर्माण"],
        "answer_en": "Thread-safe boolean operations",
        "answer_hi": "थ्रेड-सुरक्षित बूलियन ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What does 'std::collections::LinkedList' provide?",
        "question_hi": "'std::collections::LinkedList' क्या प्रदान करता है?",
        "options_en": ["Doubly-linked list implementation", "Single-linked list", "Array list", "Hash list"],
        "options_hi": ["डबली-लिंक्ड लिस्ट कार्यान्वयन", "सिंगल-लिंक्ड लिस्ट", "ऐरे लिस्ट", "हैश लिस्ट"],
        "answer_en": "Doubly-linked list implementation",
        "answer_hi": "डबली-लिंक्ड लिस्ट कार्यान्वयन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the main use of 'std::collections::BTreeSet'?",
        "question_hi": "'std::collections::BTreeSet' का मुख्य उपयोग क्या है?",
        "options_en": ["Sorted unique element collection", "Hash-based set", "Unsorted set", "Thread-safe set"],
        "options_hi": ["क्रमबद्ध अद्वितीय तत्व संग्रह", "हैश-आधारित सेट", "अक्रमबद्ध सेट", "थ्रेड-सुरक्षित सेट"],
        "answer_en": "Sorted unique element collection",
        "answer_hi": "क्रमबद्ध अद्वितीय तत्व संग्रह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What does 'std::collections::VecDeque' provide?",
        "question_hi": "'std::collections::VecDeque' क्या प्रदान करता है?",
        "options_en": ["Double-ended queue implementation", "Single-ended queue", "Stack implementation", "Heap implementation"],
        "options_hi": ["डबल-एंडेड कतार कार्यान्वयन", "सिंगल-एंडेड कतार", "स्टैक कार्यान्वयन", "हीप कार्यान्वयन"],
        "answer_en": "Double-ended queue implementation",
        "answer_hi": "डबल-एंडेड कतार कार्यान्वयन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of 'std::collections::BinaryHeap'?",
        "question_hi": "'std::collections::BinaryHeap' का उद्देश्य क्या है?",
        "options_en": ["Priority queue implementation", "Binary tree storage", "Heap allocation", "Memory management"],
        "options_hi": ["प्राथमिकता कतार कार्यान्वयन", "बाइनरी ट्री संग्रहण", "हीप आवंटन", "मेमोरी प्रबंधन"],
        "answer_en": "Priority queue implementation",
        "answer_hi": "प्राथमिकता कतार कार्यान्वयन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What does 'std::collections::BTreeMap' provide?",
        "question_hi": "'std::collections::BTreeMap' क्या प्रदान करता है?",
        "options_en": ["Sorted key-value mapping", "Hash-based mapping", "Unsorted mapping", "Thread-safe mapping"],
        "options_hi": ["क्रमबद्ध कुंजी-मान मैपिंग", "हैश-आधारित मैपिंग", "अक्रमबद्ध मैपिंग", "थ्रेड-सुरक्षित मैपिंग"],
        "answer_en": "Sorted key-value mapping",
        "answer_hi": "क्रमबद्ध कुंजी-मान मैपिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the main use of 'std::rc::Weak'?",
        "question_hi": "'std::rc::Weak' का मुख्य उपयोग क्या है?",
        "options_en": ["Break reference cycles", "Strong referencing", "Memory allocation", "Thread safety"],
        "options_hi": ["संदर्भ चक्रों को तोड़ना", "मजबूत संदर्भ", "मेमोरी आवंटन", "थ्रेड सुरक्षा"],
        "answer_en": "Break reference cycles",
        "answer_hi": "संदर्भ चक्रों को तोड़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does 'std::sync::mpsc::sync_channel' create?",
        "question_hi": "'std::sync::mpsc::sync_channel' क्या बनाता है?",
        "options_en": ["Bounded synchronous channel", "Unbounded channel", "Asynchronous channel", "File channel"],
        "options_hi": ["बाउंडेड सिंक्रोनस चैनल", "अनबाउंडेड चैनल", "एसिंक्रोनस चैनल", "फ़ाइल चैनल"],
        "answer_en": "Bounded synchronous channel",
        "answer_hi": "बाउंडेड सिंक्रोनस चैनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of 'std::thread::yield_now'?",
        "question_hi": "'std::thread::yield_now' का उद्देश्य क्या है?",
        "options_en": ["Hint to scheduler to yield", "Terminate thread", "Start thread", "Pause thread indefinitely"],
        "options_hi": ["शेड्यूलर को यील्ड करने का संकेत", "थ्रेड समाप्त", "थ्रेड शुरू", "थ्रेड को अनिश्चित काल के लिए रोकें"],
        "answer_en": "Hint to scheduler to yield",
        "answer_hi": "शेड्यूलर को यील्ड करने का संकेत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What does 'std::thread::park' do?",
        "question_hi": "'std::thread::park' क्या करता है?",
        "options_en": ["Blocks current thread until unparked", "Parks memory", "Stops thread permanently", "Creates parking space"],
        "options_hi": ["वर्तमान थ्रेड को अनपार्क होने तक ब्लॉक करता है", "मेमोरी पार्क", "थ्रेड को स्थायी रूप से रोकता है", "पार्किंग स्पेस बनाता है"],
        "answer_en": "Blocks current thread until unparked",
        "answer_hi": "वर्तमान थ्रेड को अनपार्क होने तक ब्लॉक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the main use of 'std::time::Instant'?",
        "question_hi": "'std::time::Instant' का मुख्य उपयोग क्या है?",
        "options_en": ["Measure elapsed time", "Get current date", "Format time strings", "Parse time values"],
        "options_hi": ["बीता हुआ समय मापें", "वर्तमान तिथि प्राप्त", "समय स्ट्रिंग्स फॉर्मेट", "समय मान पार्स"],
        "answer_en": "Measure elapsed time",
        "answer_hi": "बीता हुआ समय मापें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does 'std::time::SystemTime' represent?",
        "question_hi": "'std::time::SystemTime' क्या दर्शाता है?",
        "options_en": ["System clock time", "CPU time", "Thread time", "Memory time"],
        "options_hi": ["सिस्टम क्लॉक समय", "CPU समय", "थ्रेड समय", "मेमोरी समय"],
        "answer_en": "System clock time",
        "answer_hi": "सिस्टम क्लॉक समय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of 'std::fs::create_dir_all'?",
        "question_hi": "'std::fs::create_dir_all' का उद्देश्य क्या है?",
        "options_en": ["Create directory and all parents", "Create single directory", "Delete directories", "List directories"],
        "options_hi": ["डायरेक्टरी और सभी पैरेंट बनाएं", "सिंगल डायरेक्टरी बनाएं", "डायरेक्टरीज़ डिलीट", "डायरेक्टरीज़ लिस्ट"],
        "answer_en": "Create directory and all parents",
        "answer_hi": "डायरेक्टरी और सभी पैरेंट बनाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What does 'std::fs::read_dir' return?",
        "question_hi": "'std::fs::read_dir' क्या लौटाता है?",
        "options_en": ["Iterator over directory entries", "Directory contents as string", "File list as vector", "Directory metadata"],
        "options_hi": ["डायरेक्टरी एंट्रीज़ पर इटरेटर", "स्ट्रिंग के रूप में डायरेक्टरी सामग्री", "वेक्टर के रूप में फ़ाइल सूची", "डायरेक्टरी मेटाडेटा"],
        "answer_en": "Iterator over directory entries",
        "answer_hi": "डायरेक्टरी एंट्रीज़ पर इटरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the main use of 'std::io::Cursor'?",
        "question_hi": "'std::io::Cursor' का मुख्य उपयोग क्या है?",
        "options_en": ["In-memory buffer with seeking", "File cursor", "Network cursor", "Thread cursor"],
        "options_hi": ["सीकिंग के साथ इन-मेमोरी बफर", "फ़ाइल कर्सर", "नेटवर्क कर्सर", "थ्रेड कर्सर"],
        "answer_en": "In-memory buffer with seeking",
        "answer_hi": "सीकिंग के साथ इन-मेमोरी बफर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What does 'std::io::Error::last_os_error' provide?",
        "question_hi": "'std::io::Error::last_os_error' क्या प्रदान करता है?",
        "options_en": ["Last OS-level error", "Current IO error", "Memory error", "Thread error"],
        "options_hi": ["अंतिम OS-स्तरीय त्रुटि", "वर्तमान IO त्रुटि", "मेमोरी त्रुटि", "थ्रेड त्रुटि"],
        "answer_en": "Last OS-level error",
        "answer_hi": "अंतिम OS-स्तरीय त्रुटि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of 'std::net::UdpSocket'?",
        "question_hi": "'std::net::UdpSocket' का उद्देश्य क्या है?",
        "options_en": ["UDP network communication", "TCP communication", "File communication", "Thread communication"],
        "options_hi": ["UDP नेटवर्क संचार", "TCP संचार", "फ़ाइल संचार", "थ्रेड संचार"],
        "answer_en": "UDP network communication",
        "answer_hi": "UDP नेटवर्क संचार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What does 'std::net::TcpStream' represent?",
        "question_hi": "'std::net::TcpStream' क्या दर्शाता है?",
        "options_en": ["TCP connection between client and server", "UDP connection", "File stream", "Memory stream"],
        "options_hi": ["क्लाइंट और सर्वर के बीच TCP कनेक्शन", "UDP कनेक्शन", "फ़ाइल स्ट्रीम", "मेमोरी स्ट्रीम"],
        "answer_en": "TCP connection between client and server",
        "answer_hi": "क्लाइंट और सर्वर के बीच TCP कनेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the main use of 'std::process::Output'?",
        "question_hi": "'std::process::Output' का मुख्य उपयोग क्या है?",
        "options_en": ["Capture child process output", "Parent process output", "Thread output", "Memory output"],
        "options_hi": ["चाइल्ड प्रक्रिया आउटपुट कैप्चर", "पैरेंट प्रक्रिया आउटपुट", "थ्रेड आउटपुट", "मेमोरी आउटपुट"],
        "answer_en": "Capture child process output",
        "answer_hi": "चाइल्ड प्रक्रिया आउटपुट कैप्चर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What does 'std::env::current_exe' return?",
        "question_hi": "'std::env::current_exe' क्या लौटाता है?",
        "options_en": ["Path to current executable", "Current directory", "Executable arguments", "Environment variables"],
        "options_hi": ["वर्तमान एक्जीक्यूटेबल का पथ", "वर्तमान निर्देशिका", "एक्जीक्यूटेबल तर्क", "पर्यावरण चर"],
        "answer_en": "Path to current executable",
        "answer_hi": "वर्तमान एक्जीक्यूटेबल का पथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of 'std::panic::set_hook'?",
        "question_hi": "'std::panic::set_hook' का उद्देश्य क्या है?",
        "options_en": ["Customize panic behavior", "Cause panics", "Ignore panics", "Handle memory panics"],
        "options_hi": ["पैनिक व्यवहार कस्टमाइज़", "पैनिक का कारण", "पैनिक्स को अनदेखा", "मेमोरी पैनिक्स संभाल"],
        "answer_en": "Customize panic behavior",
        "answer_hi": "पैनिक व्यवहार कस्टमाइज़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What does 'std::any::TypeId' provide?",
        "question_hi": "'std::any::TypeId' क्या प्रदान करता है?",
        "options_en": ["Unique identifier for types", "Type name as string", "Type size", "Type alignment"],
        "options_hi": ["प्रकारों के लिए अद्वितीय पहचानकर्ता", "स्ट्रिंग के रूप में प्रकार नाम", "प्रकार आकार", "प्रकार अलाइनमेंट"],
        "answer_en": "Unique identifier for types",
        "answer_hi": "प्रकारों के लिए अद्वितीय पहचानकर्ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the main use of 'std::any::Any' trait?",
        "question_hi": "'std::any::Any' ट्रेट का मुख्य उपयोग क्या है?",
        "options_en": ["Runtime type reflection", "Compile-time type checking", "Memory reflection", "Thread reflection"],
        "options_hi": ["रनटाइम टाइप रिफ्लेक्शन", "कंपाइल-टाइम टाइप चेकिंग", "मेमोरी रिफ्लेक्शन", "थ्रेड रिफ्लेक्शन"],
        "answer_en": "Runtime type reflection",
        "answer_hi": "रनटाइम टाइप रिफ्लेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What does 'std::sync::Once::call_once' guarantee?",
        "question_hi": "'std::sync::Once::call_once' क्या गारंटी देता है?",
        "options_en": ["One-time initialization across threads", "Thread creation", "Memory initialization", "File initialization"],
        "options_hi": ["थ्रेड्स के बीच एक-बार आरंभीकरण", "थ्रेड निर्माण", "मेमोरी आरंभीकरण", "फ़ाइल आरंभीकरण"],
        "answer_en": "One-time initialization across threads",
        "answer_hi": "थ्रेड्स के बीच एक-बार आरंभीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of 'std::cell::Cell'?",
        "question_hi": "'std::cell::Cell' का उद्देश्य क्या है?",
        "options_en": ["Interior mutability for Copy types", "Thread-safe mutability", "Memory cells", "File cells"],
        "options_hi": ["Copy प्रकारों के लिए आंतरिक परिवर्तनशीलता", "थ्रेड-सुरक्षित परिवर्तनशीलता", "मेमोरी सेल", "फ़ाइल सेल"],
        "answer_en": "Interior mutability for Copy types",
        "answer_hi": "Copy प्रकारों के लिए आंतरिक परिवर्तनशीलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What does 'std::mem::align_of' return?",
        "question_hi": "'std::mem::align_of' क्या लौटाता है?",
        "options_en": ["Alignment requirement of a type", "Size of type", "Memory address", "Type identifier"],
        "options_hi": ["प्रकार की अलाइनमेंट आवश्यकता", "प्रकार का आकार", "मेमोरी एड्रेस", "प्रकार पहचानकर्ता"],
        "answer_en": "Alignment requirement of a type",
        "answer_hi": "प्रकार की अलाइनमेंट आवश्यकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the main use of 'std::num::NonZeroU32'?",
        "question_hi": "'std::num::NonZeroU32' का मुख्य उपयोग क्या है?",
        "options_en": ["Memory optimization for non-zero values", "Zero value handling", "Negative number storage", "Floating point numbers"],
        "options_hi": ["गैर-शून्य मानों के लिए मेमोरी अनुकूलन", "शून्य मान प्रबंधन", "नकारात्मक संख्या संग्रहण", "फ्लोटिंग पॉइंट नंबर"],
        "answer_en": "Memory optimization for non-zero values",
        "answer_hi": "गैर-शून्य मानों के लिए मेमोरी अनुकूलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What does 'std::convert::identity' function do?",
        "question_hi": "'std::convert::identity' फंक्शन क्या करता है?",
        "options_en": ["Returns the value unchanged", "Converts types", "Checks identity", "Allocates memory"],
        "options_hi": ["मान को अपरिवर्तित लौटाता है", "प्रकारों को परिवर्तित", "पहचान जांच", "मेमोरी आवंटित"],
        "answer_en": "Returns the value unchanged",
        "answer_hi": "मान को अपरिवर्तित लौटाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of 'std::iter::empty'?",
        "question_hi": "'std::iter::empty' का उद्देश्य क्या है?",
        "options_en": ["Create empty iterator", "Clear iterator", "Delete iterator", "Check if iterator is empty"],
        "options_hi": ["खाली इटरेटर बनाएं", "इटरेटर साफ़", "इटरेटर डिलीट", "जांचें कि इटरेटर खाली है"],
        "answer_en": "Create empty iterator",
        "answer_hi": "खाली इटरेटर बनाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What does 'std::iter::once' create?",
        "question_hi": "'std::iter::once' क्या बनाता है?",
        "options_en": ["Iterator with single element", "Infinite iterator", "Empty iterator", "Random iterator"],
        "options_hi": ["एकल तत्व के साथ इटरेटर", "अनंत इटरेटर", "खाली इटरेटर", "यादृच्छिक इटरेटर"],
        "answer_en": "Iterator with single element",
        "answer_hi": "एकल तत्व के साथ इटरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the main use of 'std::iter::repeat'?",
        "question_hi": "'std::iter::repeat' का मुख्य उपयोग क्या है?",
        "options_en": ["Create infinite repeating iterator", "Repeat finite times", "Repeat until condition", "Repeat with modification"],
        "options_hi": ["अनंत दोहराव इटरेटर बनाएं", "सीमित बार दोहराएं", "शर्त तक दोहराएं", "संशोधन के साथ दोहराएं"],
        "answer_en": "Create infinite repeating iterator",
        "answer_hi": "अनंत दोहराव इटरेटर बनाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What does 'std::iter::successors' generate?",
        "question_hi": "'std::iter::successors' क्या उत्पन्न करता है?",
        "options_en": ["Iterator from successive function applications", "Random values", "Constant values", "Decreasing values"],
        "options_hi": ["क्रमिक फ़ंक्शन एप्लिकेशन से इटरेटर", "यादृच्छिक मान", "स्थिर मान", "घटते मान"],
        "answer_en": "Iterator from successive function applications",
        "answer_hi": "क्रमिक फ़ंक्शन एप्लिकेशन से इटरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of 'std::iter::FromIterator' trait?",
        "question_hi": "'std::iter::FromIterator' ट्रेट का उद्देश्य क्या है?",
        "options_en": ["Convert iterators to collections", "Create iterators", "Filter iterators", "Sort iterators"],
        "options_hi": ["इटरेटर्स को संग्रह में बदलें", "इटरेटर्स बनाएं", "इटरेटर्स फिल्टर", "इटरेटर्स सॉर्ट"],
        "answer_en": "Convert iterators to collections",
        "answer_hi": "इटरेटर्स को संग्रह में बदलें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does 'std::iter::Iterator::chain' do?",
        "question_hi": "'std::iter::Iterator::chain' क्या करता है?",
        "options_en": ["Concatenate two iterators", "Create chain reaction", "Lock iterator", "Unlock iterator"],
        "options_hi": ["दो इटरेटर्स को संयोजित करें", "चेन रिएक्शन बनाएं", "इटरेटर लॉक", "इटरेटर अनलॉक"],
        "answer_en": "Concatenate two iterators",
        "answer_hi": "दो इटरेटर्स को संयोजित करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the main use of 'std::iter::Iterator::zip'?",
        "question_hi": "'std::iter::Iterator::zip' का मुख्य उपयोग क्या है?",
        "options_en": ["Combine two iterators into pairs", "Compress data", "Extract values", "Sort values"],
        "options_hi": ["दो इटरेटर्स को जोड़े में संयोजित करें", "डेटा संपीड़ित", "मान निकालें", "मान सॉर्ट"],
        "answer_en": "Combine two iterators into pairs",
        "answer_hi": "दो इटरेटर्स को जोड़े में संयोजित करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What does 'std::iter::Iterator::enumerate' provide?",
        "question_hi": "'std::iter::Iterator::enumerate' क्या प्रदान करता है?",
        "options_en": ["Index-value pairs from iterator", "Only indices", "Only values", "Sorted values"],
        "options_hi": ["इटरेटर से इंडेक्स-वैल्यू जोड़े", "केवल इंडेक्स", "केवल मान", "क्रमबद्ध मान"],
        "answer_en": "Index-value pairs from iterator",
        "answer_hi": "इटरेटर से इंडेक्स-वैल्यू जोड़े",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of 'std::iter::Iterator::filter'?",
        "question_hi": "'std::iter::Iterator::filter' का उद्देश्य क्या है?",
        "options_en": ["Select elements based on predicate", "Remove all elements", "Sort elements", "Transform elements"],
        "options_hi": ["प्रिडिकेट के आधार पर तत्वों का चयन", "सभी तत्व हटाएं", "तत्वों को सॉर्ट", "तत्वों को रूपांतरित"],
        "answer_en": "Select elements based on predicate",
        "answer_hi": "प्रिडिकेट के आधार पर तत्वों का चयन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What does 'std::iter::Iterator::map' do?",
        "question_hi": "'std::iter::Iterator::map' क्या करता है?",
        "options_en": ["Transform each element", "Create map data structure", "Filter elements", "Sort elements"],
        "options_hi": ["प्रत्येक तत्व को रूपांतरित", "मैप डेटा संरचना बनाएं", "तत्वों को फिल्टर", "तत्वों को सॉर्ट"],
        "answer_en": "Transform each element",
        "answer_hi": "प्रत्येक तत्व को रूपांतरित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the main use of 'std::iter::Iterator::fold'?",
        "question_hi": "'std::iter::Iterator::fold' का मुख्य उपयोग क्या है?",
        "options_en": ["Accumulate values with function", "Fold paper", "Reduce memory", "Increase performance"],
        "options_hi": ["फ़ंक्शन के साथ मानों को संचित", "पेपर फोल्ड", "मेमोरी कम", "प्रदर्शन बढ़ाएं"],
        "answer_en": "Accumulate values with function",
        "answer_hi": "फ़ंक्शन के साथ मानों को संचित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What does 'std::iter::Iterator::reduce' do?",
        "question_hi": "'std::iter::Iterator::reduce' क्या करता है?",
        "options_en": ["Combine elements to single value", "Reduce memory usage", "Decrease iterator size", "Simplify elements"],
        "options_hi": ["तत्वों को एकल मान में संयोजित", "मेमोरी उपयोग कम", "इटरेटर आकार घटाएं", "तत्वों को सरल बनाएं"],
        "answer_en": "Combine elements to single value",
        "answer_hi": "तत्वों को एकल मान में संयोजित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of 'std::iter::Iterator::take'?",
        "question_hi": "'std::iter::Iterator::take' का उद्देश्य क्या है?",
        "options_en": ["Take first n elements", "Take all elements", "Take last elements", "Take random elements"],
        "options_hi": ["पहले n तत्व लें", "सभी तत्व लें", "अंतिम तत्व लें", "यादृच्छिक तत्व लें"],
        "answer_en": "Take first n elements",
        "answer_hi": "पहले n तत्व लें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What does 'std::iter::Iterator::skip' do?",
        "question_hi": "'std::iter::Iterator::skip' क्या करता है?",
        "options_en": ["Skip first n elements", "Skip all elements", "Skip last elements", "Skip random elements"],
        "options_hi": ["पहले n तत्व छोड़ें", "सभी तत्व छोड़ें", "अंतिम तत्व छोड़ें", "यादृच्छिक तत्व छोड़ें"],
        "answer_en": "Skip first n elements",
        "answer_hi": "पहले n तत्व छोड़ें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the main use of 'std::iter::Iterator::peekable'?",
        "question_hi": "'std::iter::Iterator::peekable' का मुख्य उपयोग क्या है?",
        "options_en": ["Look at next element without consuming", "Peek at memory", "Check performance", "Inspect values"],
        "options_hi": ["उपभोग किए बिना अगले तत्व को देखें", "मेमोरी पर झांकें", "प्रदर्शन जांच", "मानों का निरीक्षण"],
        "answer_en": "Look at next element without consuming",
        "answer_hi": "उपभोग किए बिना अगले तत्व को देखें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What does 'std::iter::Iterator::fuse' do?",
        "question_hi": "'std::iter::Iterator::fuse' क्या करता है?",
        "options_en": ["Make iterator continue returning None after first None", "Fuse elements together", "Melt iterator", "Combine iterators"],
        "options_hi": ["पहले None के बाद iterator को None लौटाते रहने दें", "तत्वों को एक साथ फ्यूज", "इटरेटर पिघलाएं", "इटरेटर्स संयोजित"],
        "answer_en": "Make iterator continue returning None after first None",
        "answer_hi": "पहले None के बाद iterator को None लौटाते रहने दें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of 'std::iter::Iterator::inspect'?",
        "question_hi": "'std::iter::Iterator::inspect' का उद्देश्य क्या है?",
        "options_en": ["Debug elements without modifying", "Inspect memory", "Check types", "Validate values"],
        "options_hi": ["संशोधित किए बिना तत्वों को डिबग", "मेमोरी निरीक्षण", "प्रकार जांच", "मानों को मान्य"],
        "answer_en": "Debug elements without modifying",
        "answer_hi": "संशोधित किए बिना तत्वों को डिबग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What does 'std::iter::Iterator::partition' do?",
        "question_hi": "'std::iter::Iterator::partition' क्या करता है?",
        "options_en": ["Split iterator into two collections based on predicate", "Divide memory", "Split files", "Separate threads"],
        "options_hi": ["प्रिडिकेट के आधार पर iterator को दो संग्रहों में विभाजित", "मेमोरी विभाजित", "फ़ाइलें विभाजित", "थ्रेड्स अलग"],
        "answer_en": "Split iterator into two collections based on predicate",
        "answer_hi": "प्रिडिकेट के आधार पर iterator को दो संग्रहों में विभाजित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the main use of 'std::iter::Iterator::unzip'?",
        "question_hi": "'std::iter::Iterator::unzip' का मुख्य उपयोग क्या है?",
        "options_en": ["Convert pairs into two separate collections", "Extract compressed data", "Decompress files", "Separate values"],
        "options_hi": ["जोड़ों को दो अलग-अलग संग्रहों में बदलें", "संपीड़ित डेटा निकालें", "फ़ाइलें डीकंप्रेस", "मान अलग"],
        "answer_en": "Convert pairs into two separate collections",
        "answer_hi": "जोड़ों को दो अलग-अलग संग्रहों में बदलें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What does 'std::iter::Iterator::copied' do?",
        "question_hi": "'std::iter::Iterator::copied' क्या करता है?",
        "options_en": ["Copy each element (must be Copy type)", "Create copies in memory", "Duplicate iterator", "Clone elements"],
        "options_hi": ["प्रत्येक तत्व की प्रतिलिपि बनाएं (Copy प्रकार होना चाहिए)", "मेमोरी में प्रतिलिपि बनाएं", "इटरेटर डुप्लिकेट", "तत्वों को क्लोन"],
        "answer_en": "Copy each element (must be Copy type)",
        "answer_hi": "प्रत्येक तत्व की प्रतिलिपि बनाएं (Copy प्रकार होना चाहिए)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of 'std::iter::Iterator::cloned'?",
        "question_hi": "'std::iter::Iterator::cloned' का उद्देश्य क्या है?",
        "options_en": ["Clone each element (must be Clone type)", "Create clones in memory", "Duplicate iterator", "Copy elements"],
        "options_hi": ["प्रत्येक तत्व को क्लोन करें (Clone प्रकार होना चाहिए)", "मेमोरी में क्लोन बनाएं", "इटरेटर डुप्लिकेट", "तत्वों की प्रतिलिपि"],
        "answer_en": "Clone each element (must be Clone type)",
        "answer_hi": "प्रत्येक तत्व को क्लोन करें (Clone प्रकार होना चाहिए)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What does 'std::iter::Iterator::cycle' create?",
        "question_hi": "'std::iter::Iterator::cycle' क्या बनाता है?",
        "options_en": ["Infinite iterator repeating sequence", "Circular buffer", "Looping mechanism", "Cyclic pattern"],
        "options_hi": ["अनंत इटरेटर दोहराता अनुक्रम", "सर्कुलर बफर", "लूपिंग तंत्र", "चक्रीय पैटर्न"],
        "answer_en": "Infinite iterator repeating sequence",
        "answer_hi": "अनंत इटरेटर दोहराता अनुक्रम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the main use of 'std::iter::Iterator::min'?",
        "question_hi": "'std::iter::Iterator::min' का मुख्य उपयोग क्या है?",
        "options_en": ["Find minimum element", "Reduce memory", "Minimize values", "Find smallest type"],
        "options_hi": ["न्यूनतम तत्व खोजें", "मेमोरी कम", "मानों को छोटा", "सबसे छोटा प्रकार खोजें"],
        "answer_en": "Find minimum element",
        "answer_hi": "न्यूनतम तत्व खोजें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What does 'std::iter::Iterator::max' return?",
        "question_hi": "'std::iter::Iterator::max' क्या लौटाता है?",
        "options_en": ["Maximum element", "Largest memory", "Maximum performance", "Biggest type"],
        "options_hi": ["अधिकतम तत्व", "सबसे बड़ी मेमोरी", "अधिकतम प्रदर्शन", "सबसे बड़ा प्रकार"],
        "answer_en": "Maximum element",
        "answer_hi": "अधिकतम तत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of 'std::iter::Iterator::sum'?",
        "question_hi": "'std::iter::Iterator::sum' का उद्देश्य क्या है?",
        "options_en": ["Compute sum of all elements", "Summarize data", "Reduce memory", "Add numbers"],
        "options_hi": ["सभी तत्वों का योग गणना", "डेटा सारांश", "मेमोरी कम", "नंबर जोड़ें"],
        "answer_en": "Compute sum of all elements",
        "answer_hi": "सभी तत्वों का योग गणना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What does 'std::iter::Iterator::product' compute?",
        "question_hi": "'std::iter::Iterator::product' क्या गणना करता है?",
        "options_en": ["Product of all elements", "Production rate", "Memory product", "Performance product"],
        "options_hi": ["सभी तत्वों का गुणनफल", "उत्पादन दर", "मेमोरी उत्पाद", "प्रदर्शन उत्पाद"],
        "answer_en": "Product of all elements",
        "answer_hi": "सभी तत्वों का गुणनफल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the main use of 'std::iter::Iterator::count'?",
        "question_hi": "'std::iter::Iterator::count' का मुख्य उपयोग क्या है?",
        "options_en": ["Count number of elements", "Count memory usage", "Count threads", "Count files"],
        "options_hi": ["तत्वों की संख्या गिनें", "मेमोरी उपयोग गिनें", "थ्रेड्स गिनें", "फ़ाइलें गिनें"],
        "answer_en": "Count number of elements",
        "answer_hi": "तत्वों की संख्या गिनें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What does 'std::iter::Iterator::last' return?",
        "question_hi": "'std::iter::Iterator::last' क्या लौटाता है?",
        "options_en": ["Last element of iterator", "First element", "Random element", "Middle element"],
        "options_hi": ["इटरेटर का अंतिम तत्व", "पहला तत्व", "यादृच्छिक तत्व", "मध्य तत्व"],
        "answer_en": "Last element of iterator",
        "answer_hi": "इटरेटर का अंतिम तत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of 'std::iter::Iterator::nth'?",
        "question_hi": "'std::iter::Iterator::nth' का उद्देश्य क्या है?",
        "options_en": ["Get element at specific index", "Find nth occurrence", "Count to n", "Skip n elements"],
        "options_hi": ["विशिष्ट इंडेक्स पर तत्व प्राप्त", "nवीं घटना खोजें", "n तक गिनें", "n तत्व छोड़ें"],
        "answer_en": "Get element at specific index",
        "answer_hi": "विशिष्ट इंडेक्स पर तत्व प्राप्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What does 'std::iter::Iterator::step_by' create?",
        "question_hi": "'std::iter::Iterator::step_by' क्या बनाता है?",
        "options_en": ["Iterator stepping by given amount", "Stepping stone", "Incremental iterator", "Decremental iterator"],
        "options_hi": ["दी गई मात्रा से स्टेपिंग इटरेटर", "स्टेपिंग स्टोन", "वृद्धिशील इटरेटर", "घटता इटरेटर"],
        "answer_en": "Iterator stepping by given amount",
        "answer_hi": "दी गई मात्रा से स्टेपिंग इटरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the main use of 'std::iter::Iterator::chain'?",
        "question_hi": "'std::iter::Iterator::chain' का मुख्य उपयोग क्या है?",
        "options_en": ["Concatenate multiple iterators", "Create chain reaction", "Link elements", "Connect values"],
        "options_hi": ["एकाधिक इटरेटर्स को संयोजित", "चेन रिएक्शन बनाएं", "तत्वों को लिंक", "मानों को कनेक्ट"],
        "answer_en": "Concatenate multiple iterators",
        "answer_hi": "एकाधिक इटरेटर्स को संयोजित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What does 'std::iter::Iterator::zip' combine?",
        "question_hi": "'std::iter::Iterator::zip' क्या संयोजित करता है?",
        "options_en": ["Two iterators into pairs", "Multiple iterators", "Memory locations", "Thread operations"],
        "options_hi": ["दो इटरेटर्स को जोड़े में", "एकाधिक इटरेटर्स", "मेमोरी लोकेशन", "थ्रेड ऑपरेशन"],
        "answer_en": "Two iterators into pairs",
        "answer_hi": "दो इटरेटर्स को जोड़े में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of 'std::iter::Iterator::map_while'?",
        "question_hi": "'std::iter::Iterator::map_while' का उद्देश्य क्या है?",
        "options_en": ["Map elements until None is returned", "Map while condition true", "Map with while loop", "Map without condition"],
        "options_hi": ["तत्वों को मैप करें जब तक None न लौटे", "मैप जब शर्त सत्य", "व्हाइल लूप के साथ मैप", "बिना शर्त के मैप"],
        "answer_en": "Map elements until None is returned",
        "answer_hi": "तत्वों को मैप करें जब तक None न लौटे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What does 'std::iter::Iterator::scan' provide?",
        "question_hi": "'std::iter::Iterator::scan' क्या प्रदान करता है?",
        "options_en": ["Stateful mapping with early termination", "Scan memory", "Check elements", "Inspect values"],
        "options_hi": ["प्रारंभिक समाप्ति के साथ स्टेटफुल मैपिंग", "मेमोरी स्कैन", "तत्वों की जांच", "मानों का निरीक्षण"],
        "answer_en": "Stateful mapping with early termination",
        "answer_hi": "प्रारंभिक समाप्ति के साथ स्टेटफुल मैपिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the main use of 'std::iter::Iterator::flat_map'?",
        "question_hi": "'std::iter::Iterator::flat_map' का मुख्य उपयोग क्या है?",
        "options_en": ["Map and flatten nested iterators", "Flatten memory", "Map flat structures", "Create flat arrays"],
        "options_hi": ["मैप और नेस्टेड इटरेटर्स को फ्लैटन", "मेमोरी फ्लैटन", "फ्लैट संरचनाओं को मैप", "फ्लैट ऐरे बनाएं"],
        "answer_en": "Map and flatten nested iterators",
        "answer_hi": "मैप और नेस्टेड इटरेटर्स को फ्लैटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What does 'std::iter::Iterator::flatten' do?",
        "question_hi": "'std::iter::Iterator::flatten' क्या करता है?",
        "options_en": ["Flatten nested iterators", "Flatten memory", "Make values flat", "Create flat structures"],
        "options_hi": ["नेस्टेड इटरेटर्स को फ्लैटन", "मेमोरी फ्लैटन", "मानों को फ्लैट बनाएं", "फ्लैट संरचनाएं बनाएं"],
        "answer_en": "Flatten nested iterators",
        "answer_hi": "नेस्टेड इटरेटर्स को फ्लैटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of 'std::iter::Iterator::try_fold'?",
        "question_hi": "'std::iter::Iterator::try_fold' का उद्देश्य क्या है?",
        "options_en": ["Fold that can fail with Result", "Try to fold paper", "Attempt memory fold", "Experimental fold"],
        "options_hi": ["फोल्ड जो Result के साथ विफल हो सकता है", "पेपर फोल्ड करने का प्रयास", "मेमोरी फोल्ड का प्रयास", "प्रायोगिक फोल्ड"],
        "answer_en": "Fold that can fail with Result",
        "answer_hi": "फोल्ड जो Result के साथ विफल हो सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What does 'std::iter::Iterator::try_for_each' do?",
        "question_hi": "'std::iter::Iterator::try_for_each' क्या करता है?",
        "options_en": ["Apply function that can fail to each element", "Try to process elements", "Attempt iteration", "Experimental for_each"],
        "options_hi": ["प्रत्येक तत्व पर फ़ंक्शन लागू करें जो विफल हो सकता है", "तत्वों को संसाधित करने का प्रयास", "पुनरावृत्ति का प्रयास", "प्रायोगिक for_each"],
        "answer_en": "Apply function that can fail to each element",
        "answer_hi": "प्रत्येक तत्व पर फ़ंक्शन लागू करें जो विफल हो सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the main use of 'std::iter::Iterator::position'?",
        "question_hi": "'std::iter::Iterator::position' का मुख्य उपयोग क्या है?",
        "options_en": ["Find position of element matching predicate", "Position memory", "Locate elements", "Find coordinates"],
        "options_hi": ["प्रिडिकेट से मेल खाने वाले तत्व की स्थिति खोजें", "मेमोरी स्थिति", "तत्वों का पता लगाएं", "निर्देशांक खोजें"],
        "answer_en": "Find position of element matching predicate",
        "answer_hi": "प्रिडिकेट से मेल खाने वाले तत्व की स्थिति खोजें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What does 'std::iter::Iterator::rposition' find?",
        "question_hi": "'std::iter::Iterator::rposition' क्या ढूंढता है?",
        "options_en": ["Position from the end matching predicate", "Reverse position", "Random position", "Relative position"],
        "options_hi": ["अंत से प्रिडिकेट से मेल खाने वाली स्थिति", "रिवर्स स्थिति", "यादृच्छिक स्थिति", "सापेक्ष स्थिति"],
        "answer_en": "Position from the end matching predicate",
        "answer_hi": "अंत से प्रिडिकेट से मेल खाने वाली स्थिति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of 'std::iter::Iterator::max_by'?",
        "question_hi": "'std::iter::Iterator::max_by' का उद्देश्य क्या है?",
        "options_en": ["Find maximum using comparison function", "Maximize by criteria", "Find largest with function", "Get max with custom logic"],
        "options_hi": ["तुलना फ़ंक्शन का उपयोग करके अधिकतम खोजें", "मानदंडों द्वारा अधिकतम", "फ़ंक्शन के साथ सबसे बड़ा खोजें", "कस्टम लॉजिक के साथ अधिकतम प्राप्त"],
        "answer_en": "Find maximum using comparison function",
        "answer_hi": "तुलना फ़ंक्शन का उपयोग करके अधिकतम खोजें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What does 'std::iter::Iterator::min_by' return?",
        "question_hi": "'std::iter::Iterator::min_by' क्या लौटाता है?",
        "options_en": ["Minimum element using comparison function", "Smallest with custom logic", "Minimal value by criteria", "Least element with function"],
        "options_hi": ["तुलना फ़ंक्शन का उपयोग करके न्यूनतम तत्व", "कस्टम लॉजिक के साथ सबसे छोटा", "मानदंडों द्वारा न्यूनतम मान", "फ़ंक्शन के साथ कम से कम तत्व"],
        "answer_en": "Minimum element using comparison function",
        "answer_hi": "तुलना फ़ंक्शन का उपयोग करके न्यूनतम तत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the main use of 'std::iter::Iterator::unstable'?",
        "question_hi": "'std::iter::Iterator::unstable' का मुख्य उपयोग क्या है?",
        "options_en": ["This method doesn't exist in std", "Create unstable iterator", "Make iterator unstable", "Generate random order"],
        "options_hi": ["यह विधि std में मौजूद नहीं है", "अस्थिर इटरेटर बनाएं", "इटरेटर को अस्थिर बनाएं", "यादृच्छिक क्रम उत्पन्न"],
        "answer_en": "This method doesn't exist in std",
        "answer_hi": "यह विधि std में मौजूद नहीं है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What does 'std::iter::Iterator::cmp' do?",
        "question_hi": "'std::iter::Iterator::cmp' क्या करता है?",
        "options_en": ["Lexicographically compare two iterators", "Compare memory", "Check equality", "Validate order"],
        "options_hi": ["लेक्सिकोग्राफिकली दो इटरेटर्स की तुलना", "मेमोरी तुलना", "समानता जांच", "क्रम मान्य"],
        "answer_en": "Lexicographically compare two iterators",
        "answer_hi": "लेक्सिकोग्राफिकली दो इटरेटर्स की तुलना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of 'std::iter::Iterator::partial_cmp'?",
        "question_hi": "'std::iter::Iterator::partial_cmp' का उद्देश्य क्या है?",
        "options_en": ["Partial comparison of two iterators", "Compare parts", "Check partial equality", "Validate partial order"],
        "options_hi": ["दो इटरेटर्स की आंशिक तुलना", "भागों की तुलना", "आंशिक समानता जांच", "आंशिक क्रम मान्य"],
        "answer_en": "Partial comparison of two iterators",
        "answer_hi": "दो इटरेटर्स की आंशिक तुलना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What does 'std::iter::Iterator::eq' check?",
        "question_hi": "'std::iter::Iterator::eq' क्या जांचता है?",
        "options_en": ["If two iterators are equal", "If elements are equal", "If memory equal", "If types equal"],
        "options_hi": ["यदि दो इटरेटर्स बराबर हैं", "यदि तत्व बराबर हैं", "यदि मेमोरी बराबर", "यदि प्रकार बराबर"],
        "answer_en": "If two iterators are equal",
        "answer_hi": "यदि दो इटरेटर्स बराबर हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the main use of 'std::iter::Iterator::ne'?",
        "question_hi": "'std::iter::Iterator::ne' का मुख्य उपयोग क्या है?",
        "options_en": ["Check if two iterators are not equal", "Check inequality", "Verify difference", "Confirm non-equality"],
        "options_hi": ["जांचें कि क्या दो इटरेटर्स बराबर नहीं हैं", "असमानता जांच", "अंतर सत्यापित", "गैर-समानता की पुष्टि"],
        "answer_en": "Check if two iterators are not equal",
        "answer_hi": "जांचें कि क्या दो इटरेटर्स बराबर नहीं हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What does 'std::iter::Iterator::lt' determine?",
        "question_hi": "'std::iter::Iterator::lt' क्या निर्धारित करता है?",
        "options_en": ["If first iterator is lexicographically less than second", "If less than memory", "If smaller size", "If lower performance"],
        "options_hi": ["यदि पहला इटरेटर लेक्सिकोग्राफिकली दूसरे से कम है", "यदि मेमोरी से कम", "यदि छोटा आकार", "यदि कम प्रदर्शन"],
        "answer_en": "If first iterator is lexicographically less than second",
        "answer_hi": "यदि पहला इटरेटर लेक्सिकोग्राफिकली दूसरे से कम है",
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