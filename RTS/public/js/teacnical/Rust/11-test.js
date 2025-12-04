const questions = [
    {
        "num": 1,
        "question_en": "What is Rust's primary memory safety guarantee?",
        "question_hi": "Rust की प्राथमिक मेमोरी सुरक्षा गारंटी क्या है?",
        "options_en": ["No null pointer dereferences", "Automatic garbage collection", "No memory leaks", "No stack overflow"],
        "options_hi": ["नल पॉइंटर डेरिफरेंस नहीं", "स्वचालित गार्बेज कलेक्शन", "कोई मेमोरी लीक नहीं", "कोई स्टैक ओवरफ्लो नहीं"],
        "answer_en": "No null pointer dereferences",
        "answer_hi": "नल पॉइंटर डेरिफरेंस नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What does the 'mut' keyword enable in Rust?",
        "question_hi": "Rust में 'mut' कीवर्ड क्या सक्षम करता है?",
        "options_en": ["Variable mutation", "Thread safety", "Memory allocation", "Type conversion"],
        "options_hi": ["वेरिएबल म्यूटेशन", "थ्रेड सुरक्षा", "मेमोरी आवंटन", "प्रकार रूपांतरण"],
        "answer_en": "Variable mutation",
        "answer_hi": "वेरिएबल म्यूटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is a trait in Rust?",
        "question_hi": "Rust में ट्रेट क्या है?",
        "options_en": ["Interface defining shared behavior", "Data structure", "Memory manager", "Error handler"],
        "options_hi": ["साझा व्यवहार परिभाषित करने वाला इंटरफेस", "डेटा संरचना", "मेमोरी प्रबंधक", "त्रुटि हैंडलर"],
        "answer_en": "Interface defining shared behavior",
        "answer_hi": "साझा व्यवहार परिभाषित करने वाला इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the purpose of Result<T, E> type?",
        "question_hi": "Result<T, E> प्रकार का उद्देश्य क्या है?",
        "options_en": ["Error handling with recoverable errors", "Optional values", "Memory management", "Thread communication"],
        "options_hi": ["पुनर्प्राप्त करने योग्य त्रुटियों के साथ त्रुटि प्रबंधन", "वैकल्पिक मान", "मेमोरी प्रबंधन", "थ्रेड संचार"],
        "answer_en": "Error handling with recoverable errors",
        "answer_hi": "पुनर्प्राप्त करने योग्य त्रुटियों के साथ त्रुटि प्रबंधन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What does pattern matching with 'match' provide?",
        "question_hi": "'match' के साथ पैटर्न मिलान क्या प्रदान करता है?",
        "options_en": ["Exhaustive checking of all cases", "Faster execution", "Memory safety", "Automatic type inference"],
        "options_hi": ["सभी मामलों की संपूर्ण जांच", "तेज निष्पादन", "मेमोरी सुरक्षा", "स्वचालित प्रकार अनुमान"],
        "answer_en": "Exhaustive checking of all cases",
        "answer_hi": "सभी मामलों की संपूर्ण जांच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is RAII in Rust?",
        "question_hi": "Rust में RAII क्या है?",
        "options_en": ["Resource management tied to object lifetime", "Automatic memory allocation", "Runtime type checking", "Garbage collection"],
        "options_hi": ["ऑब्जेक्ट लाइफटाइम से जुड़ा संसाधन प्रबंधन", "स्वचालित मेमोरी आवंटन", "रनटाइम प्रकार जांच", "गार्बेज कलेक्शन"],
        "answer_en": "Resource management tied to object lifetime",
        "answer_hi": "ऑब्जेक्ट लाइफटाइम से जुड़ा संसाधन प्रबंधन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What does the borrow checker prevent?",
        "question_hi": "उधार जाँचकर्ता क्या रोकता है?",
        "options_en": ["Data races and memory violations", "Slow compilation", "Syntax errors", "Type mismatches"],
        "options_hi": ["डेटा रेस और मेमोरी उल्लंघन", "धीमी कंपाइलेशन", "सिंटैक्स त्रुटियाँ", "प्रकार बेमेल"],
        "answer_en": "Data races and memory violations",
        "answer_hi": "डेटा रेस और मेमोरी उल्लंघन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the 'impl' block used for?",
        "question_hi": "'impl' ब्लॉक किसके लिए उपयोग किया जाता है?",
        "options_en": ["Implementing methods for types", "Importing modules", "Initializing variables", "Defining traits"],
        "options_hi": ["प्रकारों के लिए विधियों को लागू करना", "मॉड्यूल आयात करना", "वेरिएबल्स आरंभ करना", "ट्रेट्स परिभाषित करना"],
        "answer_en": "Implementing methods for types",
        "answer_hi": "प्रकारों के लिए विधियों को लागू करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Difference between String and &str?",
        "question_hi": "String और &str में क्या अंतर है?",
        "options_en": ["String is owned, &str is borrowed", "String is faster", "&str is mutable", "No practical difference"],
        "options_hi": ["String स्वामित्व वाला है, &str उधार लिया गया है", "String तेज है", "&str परिवर्तनशील है", "कोई व्यावहारिक अंतर नहीं"],
        "answer_en": "String is owned, &str is borrowed",
        "answer_hi": "String स्वामित्व वाला है, &str उधार लिया गया है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What does unwrap() do on Result?",
        "question_hi": "Result पर unwrap() क्या करता है?",
        "options_en": ["Extracts value or panics on error", "Always succeeds", "Returns default value", "Ignores errors"],
        "options_hi": ["मान निकालता है या त्रुटि पर पैनिक करता है", "हमेशा सफल होता है", "डिफ़ॉल्ट मान लौटाता है", "त्रुटियों को अनदेखा करता है"],
        "answer_en": "Extracts value or panics on error",
        "answer_hi": "मान निकालता है या त्रुटि पर पैनिक करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Purpose of the ? operator?",
        "question_hi": "? ऑपरेटर का उद्देश्य क्या है?",
        "options_en": ["Early error propagation", "Optional chaining", "Null coalescing", "Type casting"],
        "options_hi": ["प्रारंभिक त्रुटि प्रसार", "वैकल्पिक चेनिंग", "नल कोलेसिंग", "प्रकार कास्टिंग"],
        "answer_en": "Early error propagation",
        "answer_hi": "प्रारंभिक त्रुटि प्रसार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What does the Send trait indicate?",
        "question_hi": "Send ट्रेट क्या दर्शाता है?",
        "options_en": ["Safe to transfer between threads", "Safe to copy", "Printable type", "Serializable type"],
        "options_hi": ["थ्रेड्स के बीच स्थानांतरित करने के लिए सुरक्षित", "कॉपी करने के लिए सुरक्षित", "प्रिंट करने योग्य प्रकार", "सीरियलाइज़ करने योग्य प्रकार"],
        "answer_en": "Safe to transfer between threads",
        "answer_hi": "थ्रेड्स के बीच स्थानांतरित करने के लिए सुरक्षित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What are Rust macros?",
        "question_hi": "Rust मैक्रो क्या हैं?",
        "options_en": ["Metaprogramming at compile time", "Runtime functions", "Memory allocators", "Type converters"],
        "options_hi": ["कंपाइल समय पर मेटाप्रोग्रामिंग", "रनटाइम फ़ंक्शन", "मेमोरी आवंटक", "प्रकार कनवर्टर"],
        "answer_en": "Metaprogramming at compile time",
        "answer_hi": "कंपाइल समय पर मेटाप्रोग्रामिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What does Clone trait enable?",
        "question_hi": "Clone ट्रेट क्या सक्षम करता है?",
        "options_en": ["Explicit deep copying", "Automatic copying", "Memory deallocation", "Type conversion"],
        "options_hi": ["स्पष्ट डीप कॉपीिंग", "स्वचालित कॉपीिंग", "मेमोरी डीलोकेशन", "प्रकार रूपांतरण"],
        "answer_en": "Explicit deep copying",
        "answer_hi": "स्पष्ट डीप कॉपीिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Purpose of Option<T> type?",
        "question_hi": "Option<T> प्रकार का उद्देश्य क्या है?",
        "options_en": ["Represent optional values", "Handle errors", "Manage memory", "Store collections"],
        "options_hi": ["वैकल्पिक मानों का प्रतिनिधित्व", "त्रुटियों को संभालना", "मेमोरी प्रबंधन", "संग्रह संग्रहीत करना"],
        "answer_en": "Represent optional values",
        "answer_hi": "वैकल्पिक मानों का प्रतिनिधित्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does 'dyn' keyword indicate?",
        "question_hi": "'dyn' कीवर्ड क्या दर्शाता है?",
        "options_en": ["Dynamic dispatch for trait objects", "Dynamic memory", "Dynamic typing", "Dynamic linking"],
        "options_hi": ["ट्रेट ऑब्जेक्ट्स के लिए डायनामिक डिस्पैच", "डायनामिक मेमोरी", "डायनामिक टाइपिंग", "डायनामिक लिंकिंग"],
        "answer_en": "Dynamic dispatch for trait objects",
        "answer_hi": "ट्रेट ऑब्जेक्ट्स के लिए डायनामिक डिस्पैच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Main use of Vec<T>?",
        "question_hi": "Vec<T> का मुख्य उपयोग क्या है?",
        "options_en": ["Dynamic growable array", "Fixed-size array", "Key-value storage", "String buffer"],
        "options_hi": ["डायनामिक बढ़ने योग्य ऐरे", "निश्चित आकार का ऐरे", "कुंजी-मान भंडारण", "स्ट्रिंग बफर"],
        "answer_en": "Dynamic growable array",
        "answer_hi": "डायनामिक बढ़ने योग्य ऐरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does Copy trait indicate?",
        "question_hi": "Copy ट्रेट क्या दर्शाता है?",
        "options_en": ["Types that can be bitwise copied", "Types that are expensive to copy", "Types that cannot be copied", "Types that are mutable"],
        "options_hi": ["प्रकार जिन्हें बिटवाइज कॉपी किया जा सकता है", "प्रकार जिन्हें कॉपी करना महंगा है", "प्रकार जिन्हें कॉपी नहीं किया जा सकता", "प्रकार जो परिवर्तनशील हैं"],
        "answer_en": "Types that can be bitwise copied",
        "answer_hi": "प्रकार जिन्हें बिटवाइज कॉपी किया जा सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Purpose of HashMap<K, V>?",
        "question_hi": "HashMap<K, V> का उद्देश्य क्या है?",
        "options_en": ["Key-value storage with hashing", "Sorted key-value storage", "Thread-safe map", "Immutable map"],
        "options_hi": ["हैशिंग के साथ कुंजी-मान भंडारण", "क्रमबद्ध कुंजी-मान भंडारण", "थ्रेड-सुरक्षित मानचित्र", "अपरिवर्तनीय मानचित्र"],
        "answer_en": "Key-value storage with hashing",
        "answer_hi": "हैशिंग के साथ कुंजी-मान भंडारण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What does Sync trait guarantee?",
        "question_hi": "Sync ट्रेट क्या गारंटी देता है?",
        "options_en": ["Safe to share references between threads", "Safe to send between threads", "Safe to copy", "Safe to print"],
        "options_hi": ["थ्रेड्स के बीच संदर्भ साझा करने के लिए सुरक्षित", "थ्रेड्स के बीच भेजने के लिए सुरक्षित", "कॉपी करने के लिए सुरक्षित", "प्रिंट करने के लिए सुरक्षित"],
        "answer_en": "Safe to share references between threads",
        "answer_hi": "थ्रेड्स के बीच संदर्भ साझा करने के लिए सुरक्षित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Main purpose of Box<T>?",
        "question_hi": "Box<T> का मुख्य उद्देश्य क्या है?",
        "options_en": ["Heap allocation with ownership", "Reference counting", "Thread safety", "Stack allocation"],
        "options_hi": ["स्वामित्व के साथ हीप आवंटन", "संदर्भ गिनती", "थ्रेड सुरक्षा", "स्टैक आवंटन"],
        "answer_en": "Heap allocation with ownership",
        "answer_hi": "स्वामित्व के साथ हीप आवंटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does Drop trait allow?",
        "question_hi": "Drop ट्रेट क्या अनुमति देता है?",
        "options_en": ["Custom cleanup code", "Automatic memory allocation", "Error handling", "Type conversion"],
        "options_hi": ["कस्टम सफाई कोड", "स्वचालित मेमोरी आवंटन", "त्रुटि प्रबंधन", "प्रकार रूपांतरण"],
        "answer_en": "Custom cleanup code",
        "answer_hi": "कस्टम सफाई कोड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is Rc<T> used for?",
        "question_hi": "Rc<T> किसके लिए उपयोग किया जाता है?",
        "options_en": ["Single-threaded reference counting", "Thread-safe reference counting", "Heap allocation", "Stack allocation"],
        "options_hi": ["सिंगल-थ्रेडेड संदर्भ गिनती", "थ्रेड-सुरक्षित संदर्भ गिनती", "हीप आवंटन", "स्टैक आवंटन"],
        "answer_en": "Single-threaded reference counting",
        "answer_hi": "सिंगल-थ्रेडेड संदर्भ गिनती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Difference between Rc<T> and Arc<T>?",
        "question_hi": "Rc<T> और Arc<T> में क्या अंतर है?",
        "options_en": ["Arc is thread-safe, Rc is not", "Rc is faster", "Arc is for single thread", "No difference"],
        "options_hi": ["Arc थ्रेड-सुरक्षित है, Rc नहीं", "Rc तेज है", "Arc सिंगल थ्रेड के लिए है", "कोई अंतर नहीं"],
        "answer_en": "Arc is thread-safe, Rc is not",
        "answer_hi": "Arc थ्रेड-सुरक्षित है, Rc नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Purpose of Mutex<T>?",
        "question_hi": "Mutex<T> का उद्देश्य क्या है?",
        "options_en": ["Thread-safe interior mutability", "Memory allocation", "Error handling", "Type conversion"],
        "options_hi": ["थ्रेड-सुरक्षित आंतरिक परिवर्तनशीलता", "मेमोरी आवंटन", "त्रुटि प्रबंधन", "प्रकार रूपांतरण"],
        "answer_en": "Thread-safe interior mutability",
        "answer_hi": "थ्रेड-सुरक्षित आंतरिक परिवर्तनशीलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What does unwrap_or_default() do?",
        "question_hi": "unwrap_or_default() क्या करता है?",
        "options_en": ["Returns value or default", "Always returns default", "Panics on error", "Converts types"],
        "options_hi": ["मान या डिफ़ॉल्ट लौटाता है", "हमेशा डिफ़ॉल्ट लौटाता है", "त्रुटि पर पैनिक करता है", "प्रकारों को परिवर्तित करता है"],
        "answer_en": "Returns value or default",
        "answer_hi": "मान या डिफ़ॉल्ट लौटाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is a Rust lifetime?",
        "question_hi": "Rust लाइफटाइम क्या है?",
        "options_en": ["Scope of reference validity", "Program execution time", "Memory allocation duration", "Thread lifetime"],
        "options_hi": ["संदर्भ वैधता का दायरा", "प्रोग्राम निष्पादन समय", "मेमोरी आवंटन अवधि", "थ्रेड लाइफटाइम"],
        "answer_en": "Scope of reference validity",
        "answer_hi": "संदर्भ वैधता का दायरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What does '&'a str' mean?",
        "question_hi": "'&'a str' का क्या अर्थ है?",
        "options_en": ["String slice with lifetime 'a'", "Mutable string", "Owned string", "Character array"],
        "options_hi": ["लाइफटाइम 'a' वाली स्ट्रिंग स्लाइस", "परिवर्तनशील स्ट्रिंग", "स्वामित्व वाली स्ट्रिंग", "वर्ण सरणी"],
        "answer_en": "String slice with lifetime 'a'",
        "answer_hi": "लाइफटाइम 'a' वाली स्ट्रिंग स्लाइस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Purpose of 'if let' syntax?",
        "question_hi": "'if let' सिंटैक्स का उद्देश्य क्या है?",
        "options_en": ["Concise pattern matching", "Loop control", "Error handling", "Variable declaration"],
        "options_hi": ["संक्षिप्त पैटर्न मिलान", "लूप नियंत्रण", "त्रुटि प्रबंधन", "वेरिएबल घोषणा"],
        "answer_en": "Concise pattern matching",
        "answer_hi": "संक्षिप्त पैटर्न मिलान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What does 'Cow' stand for?",
        "question_hi": "'Cow' का क्या अर्थ है?",
        "options_en": ["Clone On Write", "Copy On Write", "Check On Write", "Create On Write"],
        "options_hi": ["लिखने पर क्लोन", "लिखने पर कॉपी", "लिखने पर जांच", "लिखने पर बनाएं"],
        "answer_en": "Clone On Write",
        "answer_hi": "लिखने पर क्लोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Main use of Iterator trait?",
        "question_hi": "Iterator ट्रेट का मुख्य उपयोग क्या है?",
        "options_en": ["Sequential element access", "Random access", "Memory management", "Error handling"],
        "options_hi": ["क्रमिक तत्व पहुंच", "यादृच्छिक पहुंच", "मेमोरी प्रबंधन", "त्रुटि प्रबंधन"],
        "answer_en": "Sequential element access",
        "answer_hi": "क्रमिक तत्व पहुंच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does collect() method do?",
        "question_hi": "collect() विधि क्या करती है?",
        "options_en": ["Transforms iterator to collection", "Creates iterator", "Filters elements", "Sorts elements"],
        "options_hi": ["इटरेटर को संग्रह में बदलती है", "इटरेटर बनाती है", "तत्वों को फिल्टर करती है", "तत्वों को सॉर्ट करती है"],
        "answer_en": "Transforms iterator to collection",
        "answer_hi": "इटरेटर को संग्रह में बदलती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is unwrap_or_else() used for?",
        "question_hi": "unwrap_or_else() किसके लिए उपयोग किया जाता है?",
        "options_en": ["Fallback with closure", "Always panic", "Ignore errors", "Convert types"],
        "options_hi": ["क्लोजर के साथ फॉलबैक", "हमेशा पैनिक", "त्रुटियों को अनदेखा", "प्रकारों को परिवर्तित"],
        "answer_en": "Fallback with closure",
        "answer_hi": "क्लोजर के साथ फॉलबैक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What does Box::leak() do?",
        "question_hi": "Box::leak() क्या करता है?",
        "options_en": ["Converts to 'static lifetime", "Causes memory leak", "Deallocates memory", "Checks memory"],
        "options_hi": ["'static लाइफटाइम में परिवर्तित", "मेमोरी लीक का कारण", "मेमोरी डीलोकेट", "मेमोरी जांच"],
        "answer_en": "Converts to 'static lifetime",
        "answer_hi": "'static लाइफटाइम में परिवर्तित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Purpose of std::mem::swap?",
        "question_hi": "std::mem::swap का उद्देश्य क्या है?",
        "options_en": ["Exchange values between variables", "Allocate memory", "Deallocate memory", "Copy values"],
        "options_hi": ["वेरिएबल्स के बीच मानों का आदान-प्रदान", "मेमोरी आवंटित", "मेमोरी डीलोकेट", "मानों की प्रतिलिपि"],
        "answer_en": "Exchange values between variables",
        "answer_hi": "वेरिएबल्स के बीच मानों का आदान-प्रदान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does as_ref() method do?",
        "question_hi": "as_ref() विधि क्या करती है?",
        "options_en": ["Converts to reference", "Converts to owned value", "Checks type", "Allocates memory"],
        "options_hi": ["संदर्भ में परिवर्तित", "स्वामित्व वाले मान में परिवर्तित", "प्रकार जांच", "मेमोरी आवंटित"],
        "answer_en": "Converts to reference",
        "answer_hi": "संदर्भ में परिवर्तित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is std::fs::File used for?",
        "question_hi": "std::fs::File किसके लिए उपयोग किया जाता है?",
        "options_en": ["File I/O operations", "Network operations", "Memory mapping", "Thread management"],
        "options_hi": ["फ़ाइल I/O ऑपरेशन", "नेटवर्क ऑपरेशन", "मेमोरी मैपिंग", "थ्रेड प्रबंधन"],
        "answer_en": "File I/O operations",
        "answer_hi": "फ़ाइल I/O ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What does #[derive(Debug)] do?",
        "question_hi": "#[derive(Debug)] क्या करता है?",
        "options_en": ["Auto-implements Debug trait", "Enables debugging", "Adds print statements", "Checks errors"],
        "options_hi": ["Debug ट्रेट स्वचालित रूप से लागू", "डिबगिंग सक्षम", "प्रिंट स्टेटमेंट जोड़ता है", "त्रुटियों की जांच"],
        "answer_en": "Auto-implements Debug trait",
        "answer_hi": "Debug ट्रेट स्वचालित रूप से लागू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Purpose of std::thread::spawn?",
        "question_hi": "std::thread::spawn का उद्देश्य क्या है?",
        "options_en": ["Create new thread", "Terminate thread", "Synchronize threads", "Allocate thread memory"],
        "options_hi": ["नया थ्रेड बनाएं", "थ्रेड समाप्त", "थ्रेड्स सिंक्रनाइज़", "थ्रेड मेमोरी आवंटित"],
        "answer_en": "Create new thread",
        "answer_hi": "नया थ्रेड बनाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What does join() do on thread handle?",
        "question_hi": "थ्रेड हैंडल पर join() क्या करता है?",
        "options_en": ["Waits for thread completion", "Starts thread", "Terminates thread", "Checks thread status"],
        "options_hi": ["थ्रेड पूर्णता की प्रतीक्षा", "थ्रेड शुरू", "थ्रेड समाप्त", "थ्रेड स्थिति जांच"],
        "answer_en": "Waits for thread completion",
        "answer_hi": "थ्रेड पूर्णता की प्रतीक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is std::sync::mpsc used for?",
        "question_hi": "std::sync::mpsc किसके लिए उपयोग किया जाता है?",
        "options_en": ["Multi-producer, single-consumer channels", "File I/O", "Memory allocation", "Error handling"],
        "options_hi": ["मल्टी-प्रोड्यूसर, सिंगल-कंज्यूमर चैनल", "फ़ाइल I/O", "मेमोरी आवंटन", "त्रुटि प्रबंधन"],
        "answer_en": "Multi-producer, single-consumer channels",
        "answer_hi": "मल्टी-प्रोड्यूसर, सिंगल-कंज्यूमर चैनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What does BinaryHeap provide?",
        "question_hi": "BinaryHeap क्या प्रदान करता है?",
        "options_en": ["Priority queue implementation", "Sorted map", "Hash table", "Linked list"],
        "options_hi": ["प्राथमिकता कतार कार्यान्वयन", "क्रमबद्ध मानचित्र", "हैश तालिका", "लिंक्ड सूची"],
        "answer_en": "Priority queue implementation",
        "answer_hi": "प्राथमिकता कतार कार्यान्वयन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Purpose of TcpListener?",
        "question_hi": "TcpListener का उद्देश्य क्या है?",
        "options_en": ["Listen for TCP connections", "Make TCP connections", "UDP communication", "File operations"],
        "options_hi": ["TCP कनेक्शन के लिए सुनें", "TCP कनेक्शन बनाएं", "UDP संचार", "फ़ाइल ऑपरेशन"],
        "answer_en": "Listen for TCP connections",
        "answer_hi": "TCP कनेक्शन के लिए सुनें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What does Path represent?",
        "question_hi": "Path क्या दर्शाता है?",
        "options_en": ["Cross-platform file path", "Network path", "Memory path", "Thread path"],
        "options_hi": ["क्रॉस-प्लेटफ़ॉर्म फ़ाइल पथ", "नेटवर्क पथ", "मेमोरी पथ", "थ्रेड पथ"],
        "answer_en": "Cross-platform file path",
        "answer_hi": "क्रॉस-प्लेटफ़ॉर्म फ़ाइल पथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is BufReader used for?",
        "question_hi": "BufReader किसके लिए उपयोग किया जाता है?",
        "options_en": ["Efficient buffered reading", "Binary reading", "Text parsing", "Error handling"],
        "options_hi": ["कुशल बफर किया गया पठन", "बाइनरी पठन", "टेक्स्ट पार्सिंग", "त्रुटि प्रबंधन"],
        "answer_en": "Efficient buffered reading",
        "answer_hi": "कुशल बफर किया गया पठन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What does std::env::args provide?",
        "question_hi": "std::env::args क्या प्रदान करता है?",
        "options_en": ["Command-line arguments", "Environment variables", "Current directory", "Program name"],
        "options_hi": ["कमांड-लाइन तर्क", "पर्यावरण चर", "वर्तमान निर्देशिका", "प्रोग्राम नाम"],
        "answer_en": "Command-line arguments",
        "answer_hi": "कमांड-लाइन तर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Purpose of Duration?",
        "question_hi": "Duration का उद्देश्य क्या है?",
        "options_en": ["Represent time span", "Get current time", "Format time", "Parse time strings"],
        "options_hi": ["समय अवधि का प्रतिनिधित्व", "वर्तमान समय प्राप्त", "समय प्रारूप", "समय स्ट्रिंग पार्स"],
        "answer_en": "Represent time span",
        "answer_hi": "समय अवधि का प्रतिनिधित्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What does Command allow?",
        "question_hi": "Command क्या अनुमति देता है?",
        "options_en": ["Spawn and manage child processes", "Thread management", "Memory allocation", "File operations"],
        "options_hi": ["चाइल्ड प्रक्रियाओं को स्पॉन और प्रबंधित", "थ्रेड प्रबंधन", "मेमोरी आवंटन", "फ़ाइल ऑपरेशन"],
        "answer_en": "Spawn and manage child processes",
        "answer_hi": "चाइल्ड प्रक्रियाओं को स्पॉन और प्रबंधित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is RefCell used for?",
        "question_hi": "RefCell किसके लिए उपयोग किया जाता है?",
        "options_en": ["Interior mutability with runtime checks", "Thread-safe mutability", "Compile-time checks", "Memory allocation"],
        "options_hi": ["रनटाइम जांच के साथ आंतरिक परिवर्तनशीलता", "थ्रेड-सुरक्षित परिवर्तनशीलता", "कंपाइल-टाइम जांच", "मेमोरी आवंटन"],
        "answer_en": "Interior mutability with runtime checks",
        "answer_hi": "रनटाइम जांच के साथ आंतरिक परिवर्तनशीलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What does Once guarantee?",
        "question_hi": "Once क्या गारंटी देता है?",
        "options_en": ["One-time initialization across threads", "Thread creation", "Memory safety", "Error handling"],
        "options_hi": ["थ्रेड्स के बीच एक-बार आरंभीकरण", "थ्रेड निर्माण", "मेमोरी सुरक्षा", "त्रुटि प्रबंधन"],
        "answer_en": "One-time initialization across threads",
        "answer_hi": "थ्रेड्स के बीच एक-बार आरंभीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Purpose of std::mem::size_of?",
        "question_hi": "std::mem::size_of का उद्देश्य क्या है?",
        "options_en": ["Get type size in bytes", "Allocate memory", "Deallocate memory", "Check alignment"],
        "options_hi": ["बाइट्स में प्रकार आकार प्राप्त", "मेमोरी आवंटित", "मेमोरी डीलोकेट", "अलाइनमेंट जांच"],
        "answer_en": "Get type size in bytes",
        "answer_hi": "बाइट्स में प्रकार आकार प्राप्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What does From trait allow?",
        "question_hi": "From ट्रेट क्या अनुमति देता है?",
        "options_en": ["Type conversions with from()", "Memory allocation", "Error handling", "Thread safety"],
        "options_hi": ["from() के साथ प्रकार रूपांतरण", "मेमोरी आवंटन", "त्रुटि प्रबंधन", "थ्रेड सुरक्षा"],
        "answer_en": "Type conversions with from()",
        "answer_hi": "from() के साथ प्रकार रूपांतरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is Default trait for?",
        "question_hi": "Default ट्रेट किसके लिए है?",
        "options_en": ["Provide default values", "Memory management", "Error handling", "Type conversion"],
        "options_hi": ["डिफ़ॉल्ट मान प्रदान", "मेमोरी प्रबंधन", "त्रुटि प्रबंधन", "प्रकार रूपांतरण"],
        "answer_en": "Provide default values",
        "answer_hi": "डिफ़ॉल्ट मान प्रदान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What does Deref trait enable?",
        "question_hi": "Deref ट्रेट क्या सक्षम करता है?",
        "options_en": ["Custom dereferencing", "Memory allocation", "Error propagation", "Thread safety"],
        "options_hi": ["कस्टम डेरिफरेंसिंग", "मेमोरी आवंटन", "त्रुटि प्रसार", "थ्रेड सुरक्षा"],
        "answer_en": "Custom dereferencing",
        "answer_hi": "कस्टम डेरिफरेंसिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Purpose of Display trait?",
        "question_hi": "Display ट्रेट का उद्देश्य क्या है?",
        "options_en": ["User-facing output", "Debug output", "File output", "Network output"],
        "options_hi": ["उपयोगकर्ता-सामने आउटपुट", "डिबग आउटपुट", "फ़ाइल आउटपुट", "नेटवर्क आउटपुट"],
        "answer_en": "User-facing output",
        "answer_hi": "उपयोगकर्ता-सामने आउटपुट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What does PartialEq trait provide?",
        "question_hi": "PartialEq ट्रेट क्या प्रदान करता है?",
        "options_en": ["Equality comparison", "Ordering comparison", "Memory comparison", "Type comparison"],
        "options_hi": ["समानता तुलना", "क्रम तुलना", "मेमोरी तुलना", "प्रकार तुलना"],
        "answer_en": "Equality comparison",
        "answer_hi": "समानता तुलना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is Borrow trait used for?",
        "question_hi": "Borrow ट्रेट किसके लिए उपयोग किया जाता है?",
        "options_en": ["Generic borrowing", "Memory allocation", "Error handling", "Type conversion"],
        "options_hi": ["सामान्य उधार", "मेमोरी आवंटन", "त्रुटि प्रबंधन", "प्रकार रूपांतरण"],
        "answer_en": "Generic borrowing",
        "answer_hi": "सामान्य उधार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does Hash trait enable?",
        "question_hi": "Hash ट्रेट क्या सक्षम करता है?",
        "options_en": ["Hashing functionality", "Memory management", "Error handling", "Thread safety"],
        "options_hi": ["हैशिंग कार्यक्षमता", "मेमोरी प्रबंधन", "त्रुटि प्रबंधन", "थ्रेड सुरक्षा"],
        "answer_en": "Hashing functionality",
        "answer_hi": "हैशिंग कार्यक्षमता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Purpose of Error trait?",
        "question_hi": "Error ट्रेट का उद्देश्य क्या है?",
        "options_en": ["Common error interface", "Memory allocation", "Thread management", "File operations"],
        "options_hi": ["सामान्य त्रुटि इंटरफेस", "मेमोरी आवंटन", "थ्रेड प्रबंधन", "फ़ाइल ऑपरेशन"],
        "answer_en": "Common error interface",
        "answer_hi": "सामान्य त्रुटि इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What does FromStr trait allow?",
        "question_hi": "FromStr ट्रेट क्या अनुमति देता है?",
        "options_en": ["Parsing from strings", "String manipulation", "Memory allocation", "Error handling"],
        "options_hi": ["स्ट्रिंग्स से पार्सिंग", "स्ट्रिंग मैनिपुलेशन", "मेमोरी आवंटन", "त्रुटि प्रबंधन"],
        "answer_en": "Parsing from strings",
        "answer_hi": "स्ट्रिंग्स से पार्सिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is ParseIntError used for?",
        "question_hi": "ParseIntError किसके लिए उपयोग किया जाता है?",
        "options_en": ["Integer parsing errors", "Float parsing errors", "String errors", "Memory errors"],
        "options_hi": ["पूर्णांक पार्सिंग त्रुटियाँ", "फ्लोट पार्सिंग त्रुटियाँ", "स्ट्रिंग त्रुटियाँ", "मेमोरी त्रुटियाँ"],
        "answer_en": "Integer parsing errors",
        "answer_hi": "पूर्णांक पार्सिंग त्रुटियाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What does io::Error represent?",
        "question_hi": "io::Error क्या दर्शाता है?",
        "options_en": ["I/O operation errors", "Network errors", "Memory errors", "Thread errors"],
        "options_hi": ["I/O ऑपरेशन त्रुटियाँ", "नेटवर्क त्रुटियाँ", "मेमोरी त्रुटियाँ", "थ्रेड त्रुटियाँ"],
        "answer_en": "I/O operation errors",
        "answer_hi": "I/O ऑपरेशन त्रुटियाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Purpose of catch_unwind?",
        "question_hi": "catch_unwind का उद्देश्य क्या है?",
        "options_en": ["Catch panics as Result", "Cause panics", "Ignore errors", "Handle memory"],
        "options_hi": ["पैनिक को Result के रूप में पकड़ें", "पैनिक का कारण", "त्रुटियों को अनदेखा", "मेमोरी संभाल"],
        "answer_en": "Catch panics as Result",
        "answer_hi": "पैनिक को Result के रूप में पकड़ें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What does Barrier synchronize?",
        "question_hi": "Barrier क्या सिंक्रनाइज़ करता है?",
        "options_en": ["Multiple threads at point", "Memory access", "File operations", "Network calls"],
        "options_hi": ["एक बिंदु पर कई थ्रेड्स", "मेमोरी एक्सेस", "फ़ाइल ऑपरेशन", "नेटवर्क कॉल"],
        "answer_en": "Multiple threads at point",
        "answer_hi": "एक बिंदु पर कई थ्रेड्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is Condvar used for?",
        "question_hi": "Condvar किसके लिए उपयोग किया जाता है?",
        "options_en": ["Thread condition variables", "Memory conditions", "File conditions", "Network conditions"],
        "options_hi": ["थ्रेड कंडीशन वेरिएबल", "मेमोरी कंडीशन", "फ़ाइल कंडीशन", "नेटवर्क कंडीशन"],
        "answer_en": "Thread condition variables",
        "answer_hi": "थ्रेड कंडीशन वेरिएबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What does channel return?",
        "question_hi": "channel क्या लौटाता है?",
        "options_en": ["(Sender, Receiver) tuple", "Single sender", "Single receiver", "Error result"],
        "options_hi": ["(Sender, Receiver) टपल", "सिंगल सेंडर", "सिंगल रिसीवर", "त्रुटि परिणाम"],
        "answer_en": "(Sender, Receiver) tuple",
        "answer_hi": "(Sender, Receiver) टपल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Purpose of RwLock?",
        "question_hi": "RwLock का उद्देश्य क्या है?",
        "options_en": ["Reader-writer lock", "Mutual exclusion", "Memory lock", "File lock"],
        "options_hi": ["रीडर-राइटर लॉक", "आपसी बहिष्कार", "मेमोरी लॉक", "फ़ाइल लॉक"],
        "answer_en": "Reader-writer lock",
        "answer_hi": "रीडर-राइटर लॉक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What does atomic module provide?",
        "question_hi": "atomic मॉड्यूल क्या प्रदान करता है?",
        "options_en": ["Atomic operations", "Thread management", "Memory allocation", "Error handling"],
        "options_hi": ["परमाणु संचालन", "थ्रेड प्रबंधन", "मेमोरी आवंटन", "त्रुटि प्रबंधन"],
        "answer_en": "Atomic operations",
        "answer_hi": "परमाणु संचालन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is Ordering used for?",
        "question_hi": "Ordering किसके लिए उपयोग किया जाता है?",
        "options_en": ["Memory ordering semantics", "Thread ordering", "Memory allocation", "Error ordering"],
        "options_hi": ["मेमोरी ऑर्डरिंग शब्दार्थ", "थ्रेड ऑर्डरिंग", "मेमोरी आवंटन", "त्रुटि ऑर्डरिंग"],
        "answer_en": "Memory ordering semantics",
        "answer_hi": "मेमोरी ऑर्डरिंग शब्दार्थ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What does std::mem::forget do?",
        "question_hi": "std::mem::forget क्या करता है?",
        "options_en": ["Prevent destructor run", "Cause memory leak", "Deallocate memory", "Check memory"],
        "options_hi": ["डिस्ट्रक्टर रन रोकें", "मेमोरी लीक का कारण", "मेमोरी डीलोकेट", "मेमोरी जांच"],
        "answer_en": "Prevent destructor run",
        "answer_hi": "डिस्ट्रक्टर रन रोकें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is transmute used for?",
        "question_hi": "transmute किसके लिए उपयोग किया जाता है?",
        "options_en": ["Unsafe type reinterpretation", "Safe type conversion", "Memory allocation", "Error handling"],
        "options_hi": ["असुरक्षित प्रकार पुनर्व्याख्या", "सुरक्षित प्रकार रूपांतरण", "मेमोरी आवंटन", "त्रुटि प्रबंधन"],
        "answer_en": "Unsafe type reinterpretation",
        "answer_hi": "असुरक्षित प्रकार पुनर्व्याख्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What does std::ptr::null create?",
        "question_hi": "std::ptr::null क्या बनाता है?",
        "options_en": ["Null raw pointer", "Null reference", "Empty value", "Zero value"],
        "options_hi": ["नल रॉ पॉइंटर", "नल संदर्भ", "खाली मान", "शून्य मान"],
        "answer_en": "Null raw pointer",
        "answer_hi": "नल रॉ पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Purpose of spin_loop?",
        "question_hi": "spin_loop का उद्देश्य क्या है?",
        "options_en": ["Optimize busy-waiting", "Create infinite loops", "Terminate loops", "Check loop conditions"],
        "options_hi": ["बिजी-वेटिंग अनुकूलित", "अनंत लूप बनाएं", "लूप समाप्त", "लूप स्थितियाँ जांच"],
        "answer_en": "Optimize busy-waiting",
        "answer_hi": "बिजी-वेटिंग अनुकूलित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What does process::exit do?",
        "question_hi": "process::exit क्या करता है?",
        "options_en": ["Terminate process immediately", "Stop current thread", "Pause execution", "Continue execution"],
        "options_hi": ["प्रक्रिया तुरंत समाप्त", "वर्तमान थ्रेड रोक", "निष्पादन रोक", "निष्पादन जारी"],
        "answer_en": "Terminate process immediately",
        "answer_hi": "प्रक्रिया तुरंत समाप्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is env::var used for?",
        "question_hi": "env::var किसके लिए उपयोग किया जाता है?",
        "options_en": ["Get environment variable", "Set environment variable", "Check variable type", "Allocate variable"],
        "options_hi": ["पर्यावरण चर प्राप्त", "पर्यावरण चर सेट", "वेरिएबल प्रकार जांच", "वेरिएबल आवंटित"],
        "answer_en": "Get environment variable",
        "answer_hi": "पर्यावरण चर प्राप्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What does read_to_string do?",
        "question_hi": "read_to_string क्या करता है?",
        "options_en": ["Read file as string", "Write string to file", "Check file existence", "Delete file"],
        "options_hi": ["फ़ाइल को स्ट्रिंग के रूप में पढ़ें", "स्ट्रिंग फ़ाइल में लिखें", "फ़ाइल अस्तित्व जांच", "फ़ाइल हटाएं"],
        "answer_en": "Read file as string",
        "answer_hi": "फ़ाइल को स्ट्रिंग के रूप में पढ़ें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Purpose of stdin?",
        "question_hi": "stdin का उद्देश्य क्या है?",
        "options_en": ["Standard input stream", "Standard output", "Standard error", "File stream"],
        "options_hi": ["मानक इनपुट स्ट्रीम", "मानक आउटपुट", "मानक त्रुटि", "फ़ाइल स्ट्रीम"],
        "answer_en": "Standard input stream",
        "answer_hi": "मानक इनपुट स्ट्रीम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What does stdout provide?",
        "question_hi": "stdout क्या प्रदान करता है?",
        "options_en": ["Standard output stream", "Standard input", "Standard error", "File stream"],
        "options_hi": ["मानक आउटपुट स्ट्रीम", "मानक इनपुट", "मानक त्रुटि", "फ़ाइल स्ट्रीम"],
        "answer_en": "Standard output stream",
        "answer_hi": "मानक आउटपुट स्ट्रीम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is stderr used for?",
        "question_hi": "stderr किसके लिए उपयोग किया जाता है?",
        "options_en": ["Standard error output", "Standard input", "Standard output", "File output"],
        "options_hi": ["मानक त्रुटि आउटपुट", "मानक इनपुट", "मानक आउटपुट", "फ़ाइल आउटपुट"],
        "answer_en": "Standard error output",
        "answer_hi": "मानक त्रुटि आउटपुट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What does Write trait enable?",
        "question_hi": "Write ट्रेट क्या सक्षम करता है?",
        "options_en": ["Byte-oriented writing", "Byte-oriented reading", "Text parsing", "Error handling"],
        "options_hi": ["बाइट-उन्मुख लेखन", "बाइट-उन्मुख पठन", "टेक्स्ट पार्सिंग", "त्रुटि प्रबंधन"],
        "answer_en": "Byte-oriented writing",
        "answer_hi": "बाइट-उन्मुख लेखन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Purpose of Read trait?",
        "question_hi": "Read ट्रेट का उद्देश्य क्या है?",
        "options_en": ["Byte-oriented reading", "Byte-oriented writing", "Text formatting", "Error propagation"],
        "options_hi": ["बाइट-उन्मुख पठन", "बाइट-उन्मुख लेखन", "टेक्स्ट फॉर्मेटिंग", "त्रुटि प्रसार"],
        "answer_en": "Byte-oriented reading",
        "answer_hi": "बाइट-उन्मुख पठन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What does Seek trait allow?",
        "question_hi": "Seek ट्रेट क्या अनुमति देता है?",
        "options_en": ["Random access in streams", "Sequential access", "Memory allocation", "Error handling"],
        "options_hi": ["स्ट्रीम में यादृच्छिक पहुंच", "क्रमिक पहुंच", "मेमोरी आवंटन", "त्रुटि प्रबंधन"],
        "answer_en": "Random access in streams",
        "answer_hi": "स्ट्रीम में यादृच्छिक पहुंच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is BufWriter used for?",
        "question_hi": "BufWriter किसके लिए उपयोग किया जाता है?",
        "options_en": ["Efficient buffered writing", "Binary writing", "Text parsing", "Error handling"],
        "options_hi": ["कुशल बफर किया गया लेखन", "बाइनरी लेखन", "टेक्स्ट पार्सिंग", "त्रुटि प्रबंधन"],
        "answer_en": "Efficient buffered writing",
        "answer_hi": "कुशल बफर किया गया लेखन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What does ErrorKind provide?",
        "question_hi": "ErrorKind क्या प्रदान करता है?",
        "options_en": ["I/O error classification", "Memory error types", "Thread error types", "Network error types"],
        "options_hi": ["I/O त्रुटि वर्गीकरण", "मेमोरी त्रुटि प्रकार", "थ्रेड त्रुटि प्रकार", "नेटवर्क त्रुटि प्रकार"],
        "answer_en": "I/O error classification",
        "answer_hi": "I/O त्रुटि वर्गीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Purpose of OpenOptions?",
        "question_hi": "OpenOptions का उद्देश्य क्या है?",
        "options_en": ["Configurable file opening", "File deletion", "File copying", "File moving"],
        "options_hi": ["कॉन्फ़िगरेबल फ़ाइल खोलना", "फ़ाइल हटाना", "फ़ाइल कॉपी", "फ़ाइल मूव"],
        "answer_en": "Configurable file opening",
        "answer_hi": "कॉन्फ़िगरेबल फ़ाइल खोलना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What does metadata provide?",
        "question_hi": "metadata क्या प्रदान करता है?",
        "options_en": ["File system metadata", "File contents", "File permissions", "File owner"],
        "options_hi": ["फ़ाइल सिस्टम मेटाडेटा", "फ़ाइल सामग्री", "फ़ाइल अनुमतियाँ", "फ़ाइल मालिक"],
        "answer_en": "File system metadata",
        "answer_hi": "फ़ाइल सिस्टम मेटाडेटा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is PathBuf used for?",
        "question_hi": "PathBuf किसके लिए उपयोग किया जाता है?",
        "options_en": ["Mutable owned path handling", "Immutable path reference", "Network paths", "Memory paths"],
        "options_hi": ["परिवर्तनशील स्वामित्व पथ हैंडलिंग", "अपरिवर्तनीय पथ संदर्भ", "नेटवर्क पथ", "मेमोरी पथ"],
        "answer_en": "Mutable owned path handling",
        "answer_hi": "परिवर्तनशील स्वामित्व पथ हैंडलिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What does current_dir return?",
        "question_hi": "current_dir क्या लौटाता है?",
        "options_en": ["Current working directory", "Home directory", "Root directory", "Temporary directory"],
        "options_hi": ["वर्तमान कार्यशील निर्देशिका", "होम निर्देशिका", "रूट निर्देशिका", "अस्थायी निर्देशिका"],
        "answer_en": "Current working directory",
        "answer_hi": "वर्तमान कार्यशील निर्देशिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Purpose of Stdio?",
        "question_hi": "Stdio का उद्देश्य क्या है?",
        "options_en": ["Configure child process I/O", "Parent process I/O", "Thread I/O", "File I/O"],
        "options_hi": ["चाइल्ड प्रक्रिया I/O कॉन्फ़िगर", "पैरेंट प्रक्रिया I/O", "थ्रेड I/O", "फ़ाइल I/O"],
        "answer_en": "Configure child process I/O",
        "answer_hi": "चाइल्ड प्रक्रिया I/O कॉन्फ़िगर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What does Child represent?",
        "question_hi": "Child क्या दर्शाता है?",
        "options_en": ["Running child process", "Terminated process", "Parent process", "Thread process"],
        "options_hi": ["चल रही चाइल्ड प्रक्रिया", "समाप्त प्रक्रिया", "पैरेंट प्रक्रिया", "थ्रेड प्रक्रिया"],
        "answer_en": "Running child process",
        "answer_hi": "चल रही चाइल्ड प्रक्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is SyncSender used for?",
        "question_hi": "SyncSender किसके लिए उपयोग किया जाता है?",
        "options_en": ["Synchronous bounded sending", "Asynchronous sending", "File sending", "Network sending"],
        "options_hi": ["सिंक्रोनस बाउंडेड भेजना", "एसिंक्रोनस भेजना", "फ़ाइल भेजना", "नेटवर्क भेजना"],
        "answer_en": "Synchronous bounded sending",
        "answer_hi": "सिंक्रोनस बाउंडेड भेजना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What does try_recv do?",
        "question_hi": "try_recv क्या करता है?",
        "options_en": ["Non-blocking receive", "Blocking receive", "Send message", "Check channel status"],
        "options_hi": ["गैर-अवरुद्ध रिसीव", "अवरुद्ध रिसीव", "संदेश भेजें", "चैनल स्थिति जांच"],
        "answer_en": "Non-blocking receive",
        "answer_hi": "गैर-अवरुद्ध रिसीव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Purpose of sync_channel?",
        "question_hi": "sync_channel का उद्देश्य क्या है?",
        "options_en": ["Create bounded synchronous channel", "Create unbounded channel", "Create async channel", "Create file channel"],
        "options_hi": ["बाउंडेड सिंक्रोनस चैनल बनाएं", "अनबाउंडेड चैनल बनाएं", "एसिंक चैनल बनाएं", "फ़ाइल चैनल बनाएं"],
        "answer_en": "Create bounded synchronous channel",
        "answer_hi": "बाउंडेड सिंक्रोनस चैनल बनाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What does Arc stand for?",
        "question_hi": "Arc का क्या अर्थ है?",
        "options_en": ["Atomically Reference Counted", "Automatic Reference Counter", "Atomic Resource Counter", "Automatic Resource Counted"],
        "options_hi": ["परमाणु रूप से संदर्भ गिना", "स्वचालित संदर्भ काउंटर", "परमाणु संसाधन काउंटर", "स्वचालित संसाधन गिना"],
        "answer_en": "Atomically Reference Counted",
        "answer_hi": "परमाणु रूप से संदर्भ गिना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is Weak used for?",
        "question_hi": "Weak किसके लिए उपयोग किया जाता है?",
        "options_en": ["Non-owning Arc reference", "Strong reference", "Owned reference", "Mutable reference"],
        "options_hi": ["गैर-स्वामित्व Arc संदर्भ", "मजबूत संदर्भ", "स्वामित्व संदर्भ", "परिवर्तनशील संदर्भ"],
        "answer_en": "Non-owning Arc reference",
        "answer_hi": "गैर-स्वामित्व Arc संदर्भ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What does RefCell provide?",
        "question_hi": "RefCell क्या प्रदान करता है?",
        "options_en": ["Runtime borrowing checks", "Compile-time borrowing", "Thread-safe borrowing", "Atomic borrowing"],
        "options_hi": ["रनटाइम उधार जांच", "कंपाइल-टाइम उधार", "थ्रेड-सुरक्षित उधार", "परमाणु उधार"],
        "answer_en": "Runtime borrowing checks",
        "answer_hi": "रनटाइम उधार जांच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Purpose of std::mem::replace?",
        "question_hi": "std::mem::replace का उद्देश्य क्या है?",
        "options_en": ["Swap values return old", "Copy values", "Move values", "Delete values"],
        "options_hi": ["मान स्वैप करें पुराना लौटाएं", "मान कॉपी", "मान मूव", "मान डिलीट"],
        "answer_en": "Swap values return old",
        "answer_hi": "मान स्वैप करें पुराना लौटाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What does std::mem::take do?",
        "question_hi": "std::mem::take क्या करता है?",
        "options_en": ["Take value replace with default", "Copy value", "Move value", "Delete value"],
        "options_hi": ["मान लें डिफ़ॉल्ट से बदलें", "मान कॉपी", "मान मूव", "मान डिलीट"],
        "answer_en": "Take value replace with default",
        "answer_hi": "मान लें डिफ़ॉल्ट से बदलें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is MaybeUninit used for?",
        "question_hi": "MaybeUninit किसके लिए उपयोग किया जाता है?",
        "options_en": ["Handle uninitialized memory", "Initialize memory", "Deallocate memory", "Check memory"],
        "options_hi": ["अप्रारंभिक मेमोरी संभालें", "मेमोरी आरंभ", "मेमोरी डीलोकेट", "मेमोरी जांच"],
        "answer_en": "Handle uninitialized memory",
        "answer_hi": "अप्रारंभिक मेमोरी संभालें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What does Pin guarantee?",
        "question_hi": "Pin क्या गारंटी देता है?",
        "options_en": ["Prevent moving pinned data", "Allow moving data", "Copy data", "Delete data"],
        "options_hi": ["पिन किए गए डेटा को स्थानांतरित होने से रोकें", "डेटा स्थानांतरित करने की अनुमति", "डेटा कॉपी", "डेटा डिलीट"],
        "answer_en": "Prevent moving pinned data",
        "answer_hi": "पिन किए गए डेटा को स्थानांतरित होने से रोकें",
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