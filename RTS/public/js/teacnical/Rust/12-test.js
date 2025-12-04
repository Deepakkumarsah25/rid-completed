const questions = [
   {
        "num": 1,
        "question_en": "What is a Rust trait?",
        "question_hi": "Rust ट्रेट क्या है?",
        "options_en": ["A collection of methods that types can implement", "A type of variable", "A memory management technique", "A error handling mechanism"],
        "options_hi": ["विधियों का एक संग्रह जिसे प्रकार लागू कर सकते हैं", "एक प्रकार का वेरिएबल", "एक मेमोरी प्रबंधन तकनीक", "एक त्रुटि हैंडलिंग तंत्र"],
        "answer_en": "A collection of methods that types can implement",
        "answer_hi": "विधियों का एक संग्रह जिसे प्रकार लागू कर सकते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What does the 'Result<T, E>' type represent in Rust?",
        "question_hi": "Rust में 'Result<T, E>' प्रकार क्या दर्शाता है?",
        "options_en": ["A value that can be success (Ok) or failure (Err)", "A collection of values", "A thread-safe container", "A reference type"],
        "options_hi": ["एक मान जो सफलता (Ok) या विफलता (Err) हो सकता है", "मानों का एक संग्रह", "एक थ्रेड-सुरक्षित कंटेनर", "एक संदर्भ प्रकार"],
        "answer_en": "A value that can be success (Ok) or failure (Err)",
        "answer_hi": "एक मान जो सफलता (Ok) या विफलता (Err) हो सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the purpose of the 'match' keyword in Rust?",
        "question_hi": "Rust में 'match' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Pattern matching and control flow", "String comparison", "Function definition", "Variable declaration"],
        "options_hi": ["पैटर्न मिलान और नियंत्रण प्रवाह", "स्ट्रिंग तुलना", "फ़ंक्शन परिभाषा", "वेरिएबल घोषणा"],
        "answer_en": "Pattern matching and control flow",
        "answer_hi": "पैटर्न मिलान और नियंत्रण प्रवाह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What does 'RAII' stand for in Rust context?",
        "question_hi": "Rust संदर्भ में 'RAII' का क्या अर्थ है?",
        "options_en": ["Resource Acquisition Is Initialization", "Rust Automatic Initialization Interface", "Runtime Allocation and Initialization", "Resource Allocation Interface"],
        "options_hi": ["संसाधन अधिग्रहण आरंभीकरण है", "Rust स्वचालित आरंभीकरण इंटरफेस", "रनटाइम आवंटन और आरंभीकरण", "संसाधन आवंटन इंटरफेस"],
        "answer_en": "Resource Acquisition Is Initialization",
        "answer_hi": "संसाधन अधिग्रहण आरंभीकरण है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the main purpose of Rust's borrow checker?",
        "question_hi": "Rust के उधार जाँचकर्ता का मुख्य उद्देश्य क्या है?",
        "options_en": ["Prevent data races and memory unsafety", "Optimize code performance", "Check syntax errors", "Manage dependencies"],
        "options_hi": ["डेटा रेस और मेमोरी असुरक्षा रोकना", "कोड प्रदर्शन अनुकूलित करना", "सिंटैक्स त्रुटियाँ जांचना", "निर्भरताएँ प्रबंधित करना"],
        "answer_en": "Prevent data races and memory unsafety",
        "answer_hi": "डेटा रेस और मेमोरी असुरक्षा रोकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the primary use of pattern matching in Rust?",
        "question_hi": "Rust में पैटर्न मैचिंग का प्राथमिक उपयोग क्या है?",
        "options_en": ["Deconstructing values and control flow", "String pattern searching", "Memory optimization", "Code analysis"],
        "options_hi": ["वैल्यूज को डीकंस्ट्रक्ट करना और कंट्रोल फ्लो", "स्ट्रिंग पैटर्न सर्चिंग", "मेमोरी ऑप्टिमाइज़ेशन", "कोड एनालिसिस"],
        "answer_en": "Deconstructing values and control flow",
        "answer_hi": "वैल्यूज को डीकंस्ट्रक्ट करना और कंट्रोल फ्लो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is a Rust lifetime?",
        "question_hi": "Rust लाइफटाइम क्या है?",
        "options_en": ["Scope for which a reference is valid", "Time until program ends", "Memory allocation duration", "Thread execution time"],
        "options_hi": ["वह स्कोप जिसके लिए एक संदर्भ वैध है", "प्रोग्राम समाप्त होने तक का समय", "मेमोरी आवंटन अवधि", "थ्रेड निष्पादन समय"],
        "answer_en": "Scope for which a reference is valid",
        "answer_hi": "वह स्कोप जिसके लिए एक संदर्भ वैध है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does the 'impl' keyword do in Rust?",
        "question_hi": "Rust में 'impl' कीवर्ड क्या करता है?",
        "options_en": ["Implement functions for a type", "Import external libraries", "Initialize variables", "Implement inheritance"],
        "options_hi": ["किसी प्रकार के लिए फ़ंक्शन लागू करना", "बाहरी लाइब्रेरी आयात करना", "वेरिएबल आरंभ करना", "विरासत लागू करना"],
        "answer_en": "Implement functions for a type",
        "answer_hi": "किसी प्रकार के लिए फ़ंक्शन लागू करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the difference between 'String' and '&str' in Rust?",
        "question_hi": "Rust में 'String' और '&str' में क्या अंतर है?",
        "options_en": ["String is owned, &str is borrowed", "String is faster", "&str is mutable", "No difference"],
        "options_hi": ["String स्वामित्व वाला है, &str उधार लिया गया है", "String तेज है", "&str परिवर्तनशील है", "कोई अंतर नहीं"],
        "answer_en": "String is owned, &str is borrowed",
        "answer_hi": "String स्वामित्व वाला है, &str उधार लिया गया है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What does the 'unwrap()' method do on a Result type?",
        "question_hi": "Result प्रकार पर 'unwrap()' विधि क्या करती है?",
        "options_en": ["Returns the value if Ok, panics if Err", "Always returns the value", "Converts to Option", "Ignores errors"],
        "options_hi": ["यदि Ok है तो मान लौटाता है, यदि Err है तो पैनिक", "हमेशा मान लौटाता है", "Option में कनवर्ट", "त्रुटियों को अनदेखा"],
        "answer_en": "Returns the value if Ok, panics if Err",
        "answer_hi": "यदि Ok है तो मान लौटाता है, यदि Err है तो पैनिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of the '?' operator in Rust?",
        "question_hi": "Rust में '?' ऑपरेटर का उद्देश्य क्या है?",
        "options_en": ["Propagate errors early from functions", "Optional chaining", "Null coalescing", "Type conversion"],
        "options_hi": ["फ़ंक्शन से त्रुटियाँ जल्दी प्रचारित करना", "वैकल्पिक चेनिंग", "नल कोलेसिंग", "प्रकार रूपांतरण"],
        "answer_en": "Propagate errors early from functions",
        "answer_hi": "फ़ंक्शन से त्रुटियाँ जल्दी प्रचारित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What does 'Send' trait indicate in Rust?",
        "question_hi": "Rust में 'Send' ट्रेट क्या दर्शाता है?",
        "options_en": ["Type can be transferred across thread boundaries", "Type can be printed", "Type is copyable", "Type is comparable"],
        "options_hi": ["प्रकार को थ्रेड सीमाओं के पार स्थानांतरित किया जा सकता है", "प्रकार प्रिंट करने योग्य है", "प्रकार कॉपी करने योग्य है", "प्रकार तुलनीय है"],
        "answer_en": "Type can be transferred across thread boundaries",
        "answer_hi": "प्रकार को थ्रेड सीमाओं के पार स्थानांतरित किया जा सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is a Rust macro?",
        "question_hi": "Rust मैक्रो क्या है?",
        "options_en": ["Code that writes code at compile time", "A large function", "External library", "Memory allocation tool"],
        "options_hi": ["कोड जो कंपाइल टाइम पर कोड लिखता है", "एक बड़ा फ़ंक्शन", "बाहरी लाइब्रेरी", "मेमोरी आवंटन उपकरण"],
        "answer_en": "Code that writes code at compile time",
        "answer_hi": "कोड जो कंपाइल टाइम पर कोड लिखता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What does the 'Clone' trait allow?",
        "question_hi": "'Clone' ट्रेट क्या अनुमति देता है?",
        "options_en": ["Explicit duplication of values", "Automatic copying", "Memory deallocation", "Type conversion"],
        "options_hi": ["मानों की स्पष्ट नकल", "स्वचालित कॉपी", "मेमोरी डीलोकेशन", "प्रकार रूपांतरण"],
        "answer_en": "Explicit duplication of values",
        "answer_hi": "मानों की स्पष्ट नकल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of 'Option<T>' type?",
        "question_hi": "'Option<T>' प्रकार का उद्देश्य क्या है?",
        "options_en": ["Represent an optional value that might be absent", "Handle errors", "Store multiple values", "Manage memory"],
        "options_hi": ["एक वैकल्पिक मान का प्रतिनिधित्व जो अनुपस्थित हो सकता है", "त्रुटियाँ संभालना", "एकाधिक मान संग्रहीत", "मेमोरी प्रबंधन"],
        "answer_en": "Represent an optional value that might be absent",
        "answer_hi": "एक वैकल्पिक मान का प्रतिनिधित्व जो अनुपस्थित हो सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does 'dyn' keyword indicate before a trait?",
        "question_hi": "ट्रेट से पहले 'dyn' कीवर्ड क्या दर्शाता है?",
        "options_en": ["Dynamic dispatch for trait objects", "Dynamic memory allocation", "Dynamic typing", "Dynamic linking"],
        "options_hi": ["ट्रेट ऑब्जेक्ट के लिए डायनामिक डिस्पैच", "डायनामिक मेमोरी आवंटन", "डायनामिक टाइपिंग", "डायनामिक लिंकिंग"],
        "answer_en": "Dynamic dispatch for trait objects",
        "answer_hi": "ट्रेट ऑब्जेक्ट के लिए डायनामिक डिस्पैच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the main use of 'Vec<T>' in Rust?",
        "question_hi": "Rust में 'Vec<T>' का मुख्य उपयोग क्या है?",
        "options_en": ["Dynamic array that can grow or shrink", "Fixed-size array", "Key-value storage", "String buffer"],
        "options_hi": ["डायनामिक ऐरे जो बढ़ या सिकुड़ सकता है", "फिक्स्ड-साइज ऐरे", "की-वैल्यू स्टोरेज", "स्ट्रिंग बफर"],
        "answer_en": "Dynamic array that can grow or shrink",
        "answer_hi": "डायनामिक ऐरे जो बढ़ या सिकुड़ सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does the 'Copy' trait indicate?",
        "question_hi": "'Copy' ट्रेट क्या दर्शाता है?",
        "options_en": ["Type can be cheaply bitwise copied", "Type is expensive to copy", "Type cannot be copied", "Type is mutable"],
        "options_hi": ["प्रकार को सस्ते में बिटवाइज कॉपी किया जा सकता है", "प्रकार को कॉपी करना महंगा है", "प्रकार को कॉपी नहीं किया जा सकता", "प्रकार परिवर्तनशील है"],
        "answer_en": "Type can be cheaply bitwise copied",
        "answer_hi": "प्रकार को सस्ते में बिटवाइज कॉपी किया जा सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of 'HashMap<K, V>'?",
        "question_hi": "'HashMap<K, V>' का उद्देश्य क्या है?",
        "options_en": ["Key-value store with hashing", "Sorted key-value store", "Thread-safe map", "Immutable map"],
        "options_hi": ["हैशिंग के साथ की-वैल्यू स्टोर", "क्रमबद्ध की-वैल्यू स्टोर", "थ्रेड-सुरक्षित मैप", "अपरिवर्तनीय मैप"],
        "answer_en": "Key-value store with hashing",
        "answer_hi": "हैशिंग के साथ की-वैल्यू स्टोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What does 'Sync' trait guarantee?",
        "question_hi": "'Sync' ट्रेट क्या गारंटी देता है?",
        "options_en": ["Type can be shared between threads safely", "Type can be sent between threads", "Type is copyable", "Type is printable"],
        "options_hi": ["प्रकार को थ्रेड्स के बीच सुरक्षित रूप से साझा किया जा सकता है", "प्रकार को थ्रेड्स के बीच भेजा जा सकता है", "प्रकार कॉपी करने योग्य है", "प्रकार प्रिंट करने योग्य है"],
        "answer_en": "Type can be shared between threads safely",
        "answer_hi": "प्रकार को थ्रेड्स के बीच सुरक्षित रूप से साझा किया जा सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the main purpose of 'Box<T>'?",
        "question_hi": "'Box<T>' का मुख्य उद्देश्य क्या है?",
        "options_en": ["Heap allocation with single ownership", "Reference counting", "Thread-safe allocation", "Stack allocation"],
        "options_hi": ["एकल स्वामित्व के साथ हीप आवंटन", "संदर्भ गिनती", "थ्रेड-सुरक्षित आवंटन", "स्टैक आवंटन"],
        "answer_en": "Heap allocation with single ownership",
        "answer_hi": "एकल स्वामित्व के साथ हीप आवंटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does the 'Drop' trait allow?",
        "question_hi": "'Drop' ट्रेट क्या अनुमति देता है?",
        "options_en": ["Custom cleanup when value goes out of scope", "Automatic memory allocation", "Error handling", "Type conversion"],
        "options_hi": ["मान के स्कोप से बाहर जाने पर कस्टम सफाई", "स्वचालित मेमोरी आवंटन", "त्रुटि हैंडलिंग", "प्रकार रूपांतरण"],
        "answer_en": "Custom cleanup when value goes out of scope",
        "answer_hi": "मान के स्कोप से बाहर जाने पर कस्टम सफाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is 'Rc<T>' used for?",
        "question_hi": "'Rc<T>' किसके लिए उपयोग किया जाता है?",
        "options_en": ["Reference counting for single-threaded scenarios", "Thread-safe reference counting", "Heap allocation", "Stack allocation"],
        "options_hi": ["सिंगल-थ्रेडेड परिदृश्यों के लिए संदर्भ गिनती", "थ्रेड-सुरक्षित संदर्भ गिनती", "हीप आवंटन", "स्टैक आवंटन"],
        "answer_en": "Reference counting for single-threaded scenarios",
        "answer_hi": "सिंगल-थ्रेडेड परिदृश्यों के लिए संदर्भ गिनती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the difference between 'Rc<T>' and 'Arc<T>'?",
        "question_hi": "'Rc<T>' और 'Arc<T>' में क्या अंतर है?",
        "options_en": ["Arc is thread-safe, Rc is not", "Rc is faster", "Arc is for single thread", "No difference"],
        "options_hi": ["Arc थ्रेड-सुरक्षित है, Rc नहीं", "Rc तेज है", "Arc सिंगल थ्रेड के लिए है", "कोई अंतर नहीं"],
        "answer_en": "Arc is thread-safe, Rc is not",
        "answer_hi": "Arc थ्रेड-सुरक्षित है, Rc नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of 'Mutex<T>'?",
        "question_hi": "'Mutex<T>' का उद्देश्य क्या है?",
        "options_en": ["Mutual exclusion for thread-safe interior mutability", "Memory allocation", "Error handling", "Type conversion"],
        "options_hi": ["थ्रेड-सुरक्षित आंतरिक परिवर्तनशीलता के लिए आपसी बहिष्कार", "मेमोरी आवंटन", "त्रुटि हैंडलिंग", "प्रकार रूपांतरण"],
        "answer_en": "Mutual exclusion for thread-safe interior mutability",
        "answer_hi": "थ्रेड-सुरक्षित आंतरिक परिवर्तनशीलता के लिए आपसी बहिष्कार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What does 'unwrap_or_default()' do?",
        "question_hi": "'unwrap_or_default()' क्या करता है?",
        "options_en": ["Returns value or default if None/Err", "Always returns default", "Panics on error", "Converts types"],
        "options_hi": ["मान लौटाता है या None/Err होने पर डिफ़ॉल्ट", "हमेशा डिफ़ॉल्ट लौटाता है", "त्रुटि पर पैनिक", "प्रकार कनवर्ट"],
        "answer_en": "Returns value or default if None/Err",
        "answer_hi": "मान लौटाता है या None/Err होने पर डिफ़ॉल्ट",
        "attempted": false,
        "selected": ""
    },
     {
        "num": 27,
        "question_en": "What is the primary purpose of Rust's ownership system?",
        "question_hi": "Rust के स्वामित्व प्रणाली का प्राथमिक उद्देश्य क्या है?",
        "options_en": ["Memory safety without garbage collection", "Faster execution speed", "Automatic memory allocation", "Simpler syntax"],
        "options_hi": ["गार्बेज कलेक्शन के बिना मेमोरी सुरक्षा", "तेज निष्पादन गति", "स्वचालित मेमोरी आवंटन", "सरल सिंटैक्स"],
        "answer_en": "Memory safety without garbage collection",
        "answer_hi": "गार्बेज कलेक्शन के बिना मेमोरी सुरक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What does the 'mut' keyword indicate in Rust?",
        "question_hi": "Rust में 'mut' कीवर्ड क्या दर्शाता है?",
        "options_en": ["Variable is mutable", "Variable is immutable", "Variable is thread-safe", "Variable is constant"],
        "options_hi": ["वेरिएबल परिवर्तनशील है", "वेरिएबल अपरिवर्तनीय है", "वेरिएबल थ्रेड-सुरक्षित है", "वेरिएबल स्थिर है"],
        "answer_en": "Variable is mutable",
        "answer_hi": "वेरिएबल परिवर्तनशील है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of 'if let' syntax?",
        "question_hi": "'if let' सिंटैक्स का उद्देश्य क्या है?",
        "options_en": ["Concise pattern matching for single cases", "Loop control", "Error handling", "Variable declaration"],
        "options_hi": ["एकल मामलों के लिए संक्षिप्त पैटर्न मिलान", "लूप नियंत्रण", "त्रुटि हैंडलिंग", "वेरिएबल घोषणा"],
        "answer_en": "Concise pattern matching for single cases",
        "answer_hi": "एकल मामलों के लिए संक्षिप्त पैटर्न मिलान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What does 'Cow' stand for in Rust?",
        "question_hi": "Rust में 'Cow' का क्या अर्थ है?",
        "options_en": ["Clone On Write", "Copy On Write", "Check On Write", "Create On Write"],
        "options_hi": ["लिखने पर क्लोन", "लिखने पर कॉपी", "लिखने पर जांच", "लिखने पर बनाएं"],
        "answer_en": "Clone On Write",
        "answer_hi": "लिखने पर क्लोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the main use of 'Iterator' trait?",
        "question_hi": "'Iterator' ट्रेट का मुख्य उपयोग क्या है?",
        "options_en": ["Provide sequential access to elements", "Random access to elements", "Memory management", "Error handling"],
        "options_hi": ["तत्वों को क्रमिक पहुंच प्रदान", "तत्वों को यादृच्छिक पहुंच", "मेमोरी प्रबंधन", "त्रुटि हैंडलिंग"],
        "answer_en": "Provide sequential access to elements",
        "answer_hi": "तत्वों को क्रमिक पहुंच प्रदान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What does 'collect()' method do?",
        "question_hi": "'collect()' विधि क्या करती है?",
        "options_en": ["Transform iterator into collection", "Create new iterator", "Filter elements", "Sort elements"],
        "options_hi": ["इटरेटर को संग्रह में बदलें", "नया इटरेटर बनाएं", "तत्व फिल्टर", "तत्व सॉर्ट"],
        "answer_en": "Transform iterator into collection",
        "answer_hi": "इटरेटर को संग्रह में बदलें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is 'unwrap_or_else()' used for?",
        "question_hi": "'unwrap_or_else()' किसके लिए उपयोग किया जाता है?",
        "options_en": ["Provide fallback using closure", "Always panic", "Ignore errors", "Convert types"],
        "options_hi": ["क्लोजर का उपयोग करके फॉलबैक प्रदान", "हमेशा पैनिक", "त्रुटियों को अनदेखा", "प्रकार कनवर्ट"],
        "answer_en": "Provide fallback using closure",
        "answer_hi": "क्लोजर का उपयोग करके फॉलबैक प्रदान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What does 'Box::leak()' do?",
        "question_hi": "'Box::leak()' क्या करता है?",
        "options_en": ["Convert Box to 'static lifetime", "Cause memory leak", "Deallocate memory", "Check memory safety"],
        "options_hi": ["Box को 'static लाइफटाइम में कनवर्ट", "मेमोरी लीक का कारण", "मेमोरी डीलोकेट", "मेमोरी सुरक्षा जांच"],
        "answer_en": "Convert Box to 'static lifetime",
        "answer_hi": "Box को 'static लाइफटाइम में कनवर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of 'std::mem::swap'?",
        "question_hi": "'std::mem::swap' का उद्देश्य क्या है?",
        "options_en": ["Exchange values between two variables", "Allocate new memory", "Deallocate memory", "Copy values"],
        "options_hi": ["दो वेरिएबल्स के बीच मानों का आदान-प्रदान", "नई मेमोरी आवंटित", "मेमोरी डीलोकेट", "मान कॉपी"],
        "answer_en": "Exchange values between two variables",
        "answer_hi": "दो वेरिएबल्स के बीच मानों का आदान-प्रदान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does 'as_ref()' method do?",
        "question_hi": "'as_ref()' विधि क्या करती है?",
        "options_en": ["Convert to reference", "Convert to owned value", "Check type", "Allocate memory"],
        "options_hi": ["संदर्भ में कनवर्ट", "स्वामित्व वाले मान में कनवर्ट", "प्रकार जांच", "मेमोरी आवंटित"],
        "answer_en": "Convert to reference",
        "answer_hi": "संदर्भ में कनवर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is 'std::fs::File' used for?",
        "question_hi": "'std::fs::File' किसके लिए उपयोग किया जाता है?",
        "options_en": ["File I/O operations", "Network operations", "Memory mapping", "Thread management"],
        "options_hi": ["फ़ाइल I/O ऑपरेशन", "नेटवर्क ऑपरेशन", "मेमोरी मैपिंग", "थ्रेड प्रबंधन"],
        "answer_en": "File I/O operations",
        "answer_hi": "फ़ाइल I/O ऑपरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What does '#[derive(Debug)]' do?",
        "question_hi": "'#[derive(Debug)]' क्या करता है?",
        "options_en": ["Automatically implement Debug trait", "Enable debugging", "Add print statements", "Check for errors"],
        "options_hi": ["Debug ट्रेट स्वचालित रूप से लागू", "डिबगिंग सक्षम", "प्रिंट स्टेटमेंट जोड़ें", "त्रुटियों की जांच"],
        "answer_en": "Automatically implement Debug trait",
        "answer_hi": "Debug ट्रेट स्वचालित रूप से लागू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of 'std::thread::spawn'?",
        "question_hi": "'std::thread::spawn' का उद्देश्य क्या है?",
        "options_en": ["Create new thread", "Terminate thread", "Synchronize threads", "Allocate thread memory"],
        "options_hi": ["नया थ्रेड बनाएं", "थ्रेड समाप्त", "थ्रेड्स सिंक्रनाइज़", "थ्रेड मेमोरी आवंटित"],
        "answer_en": "Create new thread",
        "answer_hi": "नया थ्रेड बनाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What does 'join()' method do on a thread handle?",
        "question_hi": "थ्रेड हैंडल पर 'join()' विधि क्या करती है?",
        "options_en": ["Wait for thread to finish", "Start thread", "Terminate thread", "Check thread status"],
        "options_hi": ["थ्रेड के समाप्त होने की प्रतीक्षा", "थ्रेड शुरू", "थ्रेड समाप्त", "थ्रेड स्थिति जांच"],
        "answer_en": "Wait for thread to finish",
        "answer_hi": "थ्रेड के समाप्त होने की प्रतीक्षा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is 'std::sync::mpsc' used for?",
        "question_hi": "'std::sync::mpsc' किसके लिए उपयोग किया जाता है?",
        "options_en": ["Multi-producer, single-consumer channels", "File I/O", "Memory allocation", "Error handling"],
        "options_hi": ["मल्टी-प्रोड्यूसर, सिंगल-कंज्यूमर चैनल", "फ़ाइल I/O", "मेमोरी आवंटन", "त्रुटि हैंडलिंग"],
        "answer_en": "Multi-producer, single-consumer channels",
        "answer_hi": "मल्टी-प्रोड्यूसर, सिंगल-कंज्यूमर चैनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What does 'std::collections::BinaryHeap' provide?",
        "question_hi": "'std::collections::BinaryHeap' क्या प्रदान करता है?",
        "options_en": ["Priority queue implementation", "Sorted map", "Hash table", "Linked list"],
        "options_hi": ["प्राथमिकता कतार कार्यान्वयन", "क्रमबद्ध मानचित्र", "हैश तालिका", "लिंक्ड सूची"],
        "answer_en": "Priority queue implementation",
        "answer_hi": "प्राथमिकता कतार कार्यान्वयन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of 'std::net::TcpListener'?",
        "question_hi": "'std::net::TcpListener' का उद्देश्य क्या है?",
        "options_en": ["Listen for TCP connections", "Make TCP connections", "UDP communication", "File operations"],
        "options_hi": ["TCP कनेक्शन के लिए सुनें", "TCP कनेक्शन बनाएं", "UDP संचार", "फ़ाइल ऑपरेशन"],
        "answer_en": "Listen for TCP connections",
        "answer_hi": "TCP कनेक्शन के लिए सुनें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What does 'std::path::Path' represent?",
        "question_hi": "'std::path::Path' क्या दर्शाता है?",
        "options_en": ["Cross-platform file path", "Network path", "Memory path", "Thread path"],
        "options_hi": ["क्रॉस-प्लेटफ़ॉर्म फ़ाइल पथ", "नेटवर्क पथ", "मेमोरी पथ", "थ्रेड पथ"],
        "answer_en": "Cross-platform file path",
        "answer_hi": "क्रॉस-प्लेटफ़ॉर्म फ़ाइल पथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is 'std::io::BufReader' used for?",
        "question_hi": "'std::io::BufReader' किसके लिए उपयोग किया जाता है?",
        "options_en": ["Buffered reading for efficiency", "Binary reading", "Text parsing", "Error handling"],
        "options_hi": ["दक्षता के लिए बफर किया गया पठन", "बाइनरी पठन", "टेक्स्ट पार्सिंग", "त्रुटि हैंडलिंग"],
        "answer_en": "Buffered reading for efficiency",
        "answer_hi": "दक्षता के लिए बफर किया गया पठन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What does 'std::env::args' provide?",
        "question_hi": "'std::env::args' क्या प्रदान करता है?",
        "options_en": ["Command-line arguments", "Environment variables", "Current directory", "Program name"],
        "options_hi": ["कमांड-लाइन तर्क", "पर्यावरण चर", "वर्तमान निर्देशिका", "प्रोग्राम नाम"],
        "answer_en": "Command-line arguments",
        "answer_hi": "कमांड-लाइन तर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of 'std::time::Duration'?",
        "question_hi": "'std::time::Duration' का उद्देश्य क्या है?",
        "options_en": ["Represent time span", "Get current time", "Format time", "Parse time strings"],
        "options_hi": ["समय अवधि का प्रतिनिधित्व", "वर्तमान समय प्राप्त", "समय प्रारूप", "समय स्ट्रिंग पार्स"],
        "answer_en": "Represent time span",
        "answer_hi": "समय अवधि का प्रतिनिधित्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What does 'std::process::Command' allow?",
        "question_hi": "'std::process::Command' क्या अनुमति देता है?",
        "options_en": ["Spawn and manage child processes", "Thread management", "Memory allocation", "File operations"],
        "options_hi": ["चाइल्ड प्रक्रियाओं को स्पॉन और प्रबंधित", "थ्रेड प्रबंधन", "मेमोरी आवंटन", "फ़ाइल ऑपरेशन"],
        "answer_en": "Spawn and manage child processes",
        "answer_hi": "चाइल्ड प्रक्रियाओं को स्पॉन और प्रबंधित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is 'std::cell::RefCell' used for?",
        "question_hi": "'std::cell::RefCell' किसके लिए उपयोग किया जाता है?",
        "options_en": ["Interior mutability with runtime checks", "Thread-safe mutability", "Compile-time checks", "Memory allocation"],
        "options_hi": ["रनटाइम जांच के साथ आंतरिक परिवर्तनशीलता", "थ्रेड-सुरक्षित परिवर्तनशीलता", "कंपाइल-टाइम जांच", "मेमोरी आवंटन"],
        "answer_en": "Interior mutability with runtime checks",
        "answer_hi": "रनटाइम जांच के साथ आंतरिक परिवर्तनशीलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What does 'std::sync::Once' guarantee?",
        "question_hi": "'std::sync::Once' क्या गारंटी देता है?",
        "options_en": ["One-time initialization across threads", "Thread creation", "Memory safety", "Error handling"],
        "options_hi": ["थ्रेड्स के बीच एक-बार आरंभीकरण", "थ्रेड निर्माण", "मेमोरी सुरक्षा", "त्रुटि हैंडलिंग"],
        "answer_en": "One-time initialization across threads",
        "answer_hi": "थ्रेड्स के बीच एक-बार आरंभीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of 'std::mem::size_of'?",
        "question_hi": "'std::mem::size_of' का उद्देश्य क्या है?",
        "options_en": ["Get size of type in bytes", "Allocate memory", "Deallocate memory", "Check alignment"],
        "options_hi": ["बाइट्स में प्रकार का आकार प्राप्त", "मेमोरी आवंटित", "मेमोरी डीलोकेट", "अलाइनमेंट जांच"],
        "answer_en": "Get size of type in bytes",
        "answer_hi": "बाइट्स में प्रकार का आकार प्राप्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What does 'std::convert::From' trait allow?",
        "question_hi": "'std::convert::From' ट्रेट क्या अनुमति देता है?",
        "options_en": ["Type conversions with 'from()' method", "Memory allocation", "Error handling", "Thread safety"],
        "options_hi": ["'from()' विधि के साथ प्रकार रूपांतरण", "मेमोरी आवंटन", "त्रुटि हैंडलिंग", "थ्रेड सुरक्षा"],
        "answer_en": "Type conversions with 'from()' method",
        "answer_hi": "'from()' विधि के साथ प्रकार रूपांतरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is 'std::default::Default' trait for?",
        "question_hi": "'std::default::Default' ट्रेट किसके लिए है?",
        "options_en": ["Provide default values for types", "Memory management", "Error handling", "Type conversion"],
        "options_hi": ["प्रकारों के लिए डिफ़ॉल्ट मान प्रदान", "मेमोरी प्रबंधन", "त्रुटि हैंडलिंग", "प्रकार रूपांतरण"],
        "answer_en": "Provide default values for types",
        "answer_hi": "प्रकारों के लिए डिफ़ॉल्ट मान प्रदान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What does 'std::ops::Deref' trait enable?",
        "question_hi": "'std::ops::Deref' ट्रेट क्या सक्षम करता है?",
        "options_en": ["Custom dereferencing behavior", "Memory allocation", "Error propagation", "Thread safety"],
        "options_hi": ["कस्टम डेरिफरेंसिंग व्यवहार", "मेमोरी आवंटन", "त्रुटि प्रसार", "थ्रेड सुरक्षा"],
        "answer_en": "Custom dereferencing behavior",
        "answer_hi": "कस्टम डेरिफरेंसिंग व्यवहार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of 'std::fmt::Display' trait?",
        "question_hi": "'std::fmt::Display' ट्रेट का उद्देश्य क्या है?",
        "options_en": ["User-facing output formatting", "Debug formatting", "File formatting", "Network formatting"],
        "options_hi": ["उपयोगकर्ता-सामने आउटपुट फॉर्मेटिंग", "डिबग फॉर्मेटिंग", "फ़ाइल फॉर्मेटिंग", "नेटवर्क फॉर्मेटिंग"],
        "answer_en": "User-facing output formatting",
        "answer_hi": "उपयोगकर्ता-सामने आउटपुट फॉर्मेटिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What does 'std::cmp::PartialEq' trait provide?",
        "question_hi": "'std::cmp::PartialEq' ट्रेट क्या प्रदान करता है?",
        "options_en": ["Equality comparison ('==')", "Ordering comparison", "Memory comparison", "Type comparison"],
        "options_hi": ["समानता तुलना ('==')", "क्रम तुलना", "मेमोरी तुलना", "प्रकार तुलना"],
        "answer_en": "Equality comparison ('==')",
        "answer_hi": "समानता तुलना ('==')",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is 'std::borrow::Borrow' trait used for?",
        "question_hi": "'std::borrow::Borrow' ट्रेट किसके लिए उपयोग किया जाता है?",
        "options_en": ["Generic borrowing of data", "Memory allocation", "Error handling", "Type conversion"],
        "options_hi": ["डेटा का सामान्य उधार", "मेमोरी आवंटन", "त्रुटि हैंडलिंग", "प्रकार रूपांतरण"],
        "answer_en": "Generic borrowing of data",
        "answer_hi": "डेटा का सामान्य उधार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What does 'std::hash::Hash' trait enable?",
        "question_hi": "'std::hash::Hash' ट्रेट क्या सक्षम करता है?",
        "options_en": ["Hashing functionality for types", "Memory management", "Error handling", "Thread safety"],
        "options_hi": ["प्रकारों के लिए हैशिंग कार्यक्षमता", "मेमोरी प्रबंधन", "त्रुटि हैंडलिंग", "थ्रेड सुरक्षा"],
        "answer_en": "Hashing functionality for types",
        "answer_hi": "प्रकारों के लिए हैशिंग कार्यक्षमता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of 'std::error::Error' trait?",
        "question_hi": "'std::error::Error' ट्रेट का उद्देश्य क्या है?",
        "options_en": ["Common interface for errors", "Memory allocation", "Thread management", "File operations"],
        "options_hi": ["त्रुटियों के लिए सामान्य इंटरफेस", "मेमोरी आवंटन", "थ्रेड प्रबंधन", "फ़ाइल ऑपरेशन"],
        "answer_en": "Common interface for errors",
        "answer_hi": "त्रुटियों के लिए सामान्य इंटरफेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What does 'std::str::FromStr' trait allow?",
        "question_hi": "'std::str::FromStr' ट्रेट क्या अनुमति देता है?",
        "options_en": ["Parsing from string slices", "String manipulation", "Memory allocation", "Error handling"],
        "options_hi": ["स्ट्रिंग स्लाइस से पार्सिंग", "स्ट्रिंग मैनिपुलेशन", "मेमोरी आवंटन", "त्रुटि हैंडलिंग"],
        "answer_en": "Parsing from string slices",
        "answer_hi": "स्ट्रिंग स्लाइस से पार्सिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is 'std::num::ParseIntError' used for?",
        "question_hi": "'std::num::ParseIntError' किसके लिए उपयोग किया जाता है?",
        "options_en": ["Integer parsing errors", "Float parsing errors", "String errors", "Memory errors"],
        "options_hi": ["पूर्णांक पार्सिंग त्रुटियाँ", "फ्लोट पार्सिंग त्रुटियाँ", "स्ट्रिंग त्रुटियाँ", "मेमोरी त्रुटियाँ"],
        "answer_en": "Integer parsing errors",
        "answer_hi": "पूर्णांक पार्सिंग त्रुटियाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What does 'std::io::Error' represent?",
        "question_hi": "'std::io::Error' क्या दर्शाता है?",
        "options_en": ["I/O operation errors", "Network errors", "Memory errors", "Thread errors"],
        "options_hi": ["I/O ऑपरेशन त्रुटियाँ", "नेटवर्क त्रुटियाँ", "मेमोरी त्रुटियाँ", "थ्रेड त्रुटियाँ"],
        "answer_en": "I/O operation errors",
        "answer_hi": "I/O ऑपरेशन त्रुटियाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of 'std::panic::catch_unwind'?",
        "question_hi": "'std::panic::catch_unwind' का उद्देश्य क्या है?",
        "options_en": ["Catch panics and convert to Result", "Cause panics", "Ignore errors", "Handle memory"],
        "options_hi": ["पैनिक पकड़ें और Result में कनवर्ट", "पैनिक का कारण", "त्रुटियों को अनदेखा", "मेमोरी संभाल"],
        "answer_en": "Catch panics and convert to Result",
        "answer_hi": "पैनिक पकड़ें और Result में कनवर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What does 'std::sync::Barrier' synchronize?",
        "question_hi": "'std::sync::Barrier' क्या सिंक्रनाइज़ करता है?",
        "options_en": ["Multiple threads at a point", "Memory access", "File operations", "Network calls"],
        "options_hi": ["एक बिंदु पर कई थ्रेड्स", "मेमोरी एक्सेस", "फ़ाइल ऑपरेशन", "नेटवर्क कॉल"],
        "answer_en": "Multiple threads at a point",
        "answer_hi": "एक बिंदु पर कई थ्रेड्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is 'std::sync::Condvar' used for?",
        "question_hi": "'std::sync::Condvar' किसके लिए उपयोग किया जाता है?",
        "options_en": ["Thread condition variables", "Memory conditions", "File conditions", "Network conditions"],
        "options_hi": ["थ्रेड कंडीशन वेरिएबल", "मेमोरी कंडीशन", "फ़ाइल कंडीशन", "नेटवर्क कंडीशन"],
        "answer_en": "Thread condition variables",
        "answer_hi": "थ्रेड कंडीशन वेरिएबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What does 'std::sync::mpsc::channel' return?",
        "question_hi": "'std::sync::mpsc::channel' क्या लौटाता है?",
        "options_en": ["(Sender, Receiver) tuple", "Single sender", "Single receiver", "Error result"],
        "options_hi": ["(Sender, Receiver) टपल", "सिंगल सेंडर", "सिंगल रिसीवर", "त्रुटि परिणाम"],
        "answer_en": "(Sender, Receiver) tuple",
        "answer_hi": "(Sender, Receiver) टपल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of 'std::sync::RwLock'?",
        "question_hi": "'std::sync::RwLock' का उद्देश्य क्या है?",
        "options_en": ["Reader-writer lock", "Mutual exclusion", "Memory lock", "File lock"],
        "options_hi": ["रीडर-राइटर लॉक", "आपसी बहिष्कार", "मेमोरी लॉक", "फ़ाइल लॉक"],
        "answer_en": "Reader-writer lock",
        "answer_hi": "रीडर-राइटर लॉक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What does 'std::sync::atomic' module provide?",
        "question_hi": "'std::sync::atomic' मॉड्यूल क्या प्रदान करता है?",
        "options_en": ["Atomic operations", "Thread management", "Memory allocation", "Error handling"],
        "options_hi": ["परमाणु संचालन", "थ्रेड प्रबंधन", "मेमोरी आवंटन", "त्रुटि हैंडलिंग"],
        "answer_en": "Atomic operations",
        "answer_hi": "परमाणु संचालन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is 'std::sync::atomic::Ordering' used for?",
        "question_hi": "'std::sync::atomic::Ordering' किसके लिए उपयोग किया जाता है?",
        "options_en": ["Memory ordering semantics", "Thread ordering", "Memory allocation", "Error ordering"],
        "options_hi": ["मेमोरी ऑर्डरिंग शब्दार्थ", "थ्रेड ऑर्डरिंग", "मेमोरी आवंटन", "त्रुटि ऑर्डरिंग"],
        "answer_en": "Memory ordering semantics",
        "answer_hi": "मेमोरी ऑर्डरिंग शब्दार्थ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What does 'std::mem::forget' do?",
        "question_hi": "'std::mem::forget' क्या करता है?",
        "options_en": ["Prevent destructor from running", "Cause memory leak", "Deallocate memory", "Check memory"],
        "options_hi": ["डिस्ट्रक्टर को चलने से रोकें", "मेमोरी लीक का कारण", "मेमोरी डीलोकेट", "मेमोरी जांच"],
        "answer_en": "Prevent destructor from running",
        "answer_hi": "डिस्ट्रक्टर को चलने से रोकें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is 'std::mem::transmute' used for?",
        "question_hi": "'std::mem::transmute' किसके लिए उपयोग किया जाता है?",
        "options_en": ["Unsafe type reinterpretation", "Safe type conversion", "Memory allocation", "Error handling"],
        "options_hi": ["असुरक्षित प्रकार पुनर्व्याख्या", "सुरक्षित प्रकार रूपांतरण", "मेमोरी आवंटन", "त्रुटि हैंडलिंग"],
        "answer_en": "Unsafe type reinterpretation",
        "answer_hi": "असुरक्षित प्रकार पुनर्व्याख्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What does 'std::ptr::null' create?",
        "question_hi": "'std::ptr::null' क्या बनाता है?",
        "options_en": ["Null raw pointer", "Null reference", "Empty value", "Zero value"],
        "options_hi": ["नल रॉ पॉइंटर", "नल संदर्भ", "खाली मान", "शून्य मान"],
        "answer_en": "Null raw pointer",
        "answer_hi": "नल रॉ पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of 'std::hint::spin_loop'?",
        "question_hi": "'std::hint::spin_loop' का उद्देश्य क्या है?",
        "options_en": ["Optimize busy-waiting loops", "Create infinite loops", "Terminate loops", "Check loop conditions"],
        "options_hi": ["बिजी-वेटिंग लूप अनुकूलित", "अनंत लूप बनाएं", "लूप समाप्त", "लूप स्थितियाँ जांच"],
        "answer_en": "Optimize busy-waiting loops",
        "answer_hi": "बिजी-वेटिंग लूप अनुकूलित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What does 'std::process::exit' do?",
        "question_hi": "'std::process::exit' क्या करता है?",
        "options_en": ["Terminate process immediately", "Stop current thread", "Pause execution", "Continue execution"],
        "options_hi": ["प्रक्रिया तुरंत समाप्त", "वर्तमान थ्रेड रोक", "निष्पादन रोक", "निष्पादन जारी"],
        "answer_en": "Terminate process immediately",
        "answer_hi": "प्रक्रिया तुरंत समाप्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is 'std::env::var' used for?",
        "question_hi": "'std::env::var' किसके लिए उपयोग किया जाता है?",
        "options_en": ["Get environment variable", "Set environment variable", "Check variable type", "Allocate variable"],
        "options_hi": ["पर्यावरण चर प्राप्त", "पर्यावरण चर सेट", "वेरिएबल प्रकार जांच", "वेरिएबल आवंटित"],
        "answer_en": "Get environment variable",
        "answer_hi": "पर्यावरण चर प्राप्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What does 'std::fs::read_to_string' do?",
        "question_hi": "'std::fs::read_to_string' क्या करता है?",
        "options_en": ["Read file contents as string", "Write string to file", "Check file existence", "Delete file"],
        "options_hi": ["फ़ाइल सामग्री स्ट्रिंग के रूप में पढ़ें", "स्ट्रिंग फ़ाइल में लिखें", "फ़ाइल अस्तित्व जांच", "फ़ाइल हटाएं"],
        "answer_en": "Read file contents as string",
        "answer_hi": "फ़ाइल सामग्री स्ट्रिंग के रूप में पढ़ें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of 'std::io::stdin'?",
        "question_hi": "'std::io::stdin' का उद्देश्य क्या है?",
        "options_en": ["Standard input stream", "Standard output stream", "Standard error stream", "File stream"],
        "options_hi": ["मानक इनपुट स्ट्रीम", "मानक आउटपुट स्ट्रीम", "मानक त्रुटि स्ट्रीम", "फ़ाइल स्ट्रीम"],
        "answer_en": "Standard input stream",
        "answer_hi": "मानक इनपुट स्ट्रीम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What does 'std::io::stdout' provide?",
        "question_hi": "'std::io::stdout' क्या प्रदान करता है?",
        "options_en": ["Standard output stream", "Standard input stream", "Standard error stream", "File stream"],
        "options_hi": ["मानक आउटपुट स्ट्रीम", "मानक इनपुट स्ट्रीम", "मानक त्रुटि स्ट्रीम", "फ़ाइल स्ट्रीम"],
        "answer_en": "Standard output stream",
        "answer_hi": "मानक आउटपुट स्ट्रीम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is 'std::io::stderr' used for?",
        "question_hi": "'std::io::stderr' किसके लिए उपयोग किया जाता है?",
        "options_en": ["Standard error output", "Standard input", "Standard output", "File output"],
        "options_hi": ["मानक त्रुटि आउटपुट", "मानक इनपुट", "मानक आउटपुट", "फ़ाइल आउटपुट"],
        "answer_en": "Standard error output",
        "answer_hi": "मानक त्रुटि आउटपुट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What does 'std::io::Write' trait enable?",
        "question_hi": "'std::io::Write' ट्रेट क्या सक्षम करता है?",
        "options_en": ["Byte-oriented writing", "Byte-oriented reading", "Text parsing", "Error handling"],
        "options_hi": ["बाइट-उन्मुख लेखन", "बाइट-उन्मुख पठन", "टेक्स्ट पार्सिंग", "त्रुटि हैंडलिंग"],
        "answer_en": "Byte-oriented writing",
        "answer_hi": "बाइट-उन्मुख लेखन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of 'std::io::Read' trait?",
        "question_hi": "'std::io::Read' ट्रेट का उद्देश्य क्या है?",
        "options_en": ["Byte-oriented reading", "Byte-oriented writing", "Text formatting", "Error propagation"],
        "options_hi": ["बाइट-उन्मुख पठन", "बाइट-उन्मुख लेखन", "टेक्स्ट फॉर्मेटिंग", "त्रुटि प्रसार"],
        "answer_en": "Byte-oriented reading",
        "answer_hi": "बाइट-उन्मुख पठन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What does 'std::io::Seek' trait allow?",
        "question_hi": "'std::io::Seek' ट्रेट क्या अनुमति देता है?",
        "options_en": ["Random access in streams", "Sequential access", "Memory allocation", "Error handling"],
        "options_hi": ["स्ट्रीम में यादृच्छिक पहुंच", "क्रमिक पहुंच", "मेमोरी आवंटन", "त्रुटि हैंडलिंग"],
        "answer_en": "Random access in streams",
        "answer_hi": "स्ट्रीम में यादृच्छिक पहुंच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is 'std::io::BufWriter' used for?",
        "question_hi": "'std::io::BufWriter' किसके लिए उपयोग किया जाता है?",
        "options_en": ["Buffered writing for efficiency", "Binary writing", "Text parsing", "Error handling"],
        "options_hi": ["दक्षता के लिए बफर किया गया लेखन", "बाइनरी लेखन", "टेक्स्ट पार्सिंग", "त्रुटि हैंडलिंग"],
        "answer_en": "Buffered writing for efficiency",
        "answer_hi": "दक्षता के लिए बफर किया गया लेखन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What does 'std::io::ErrorKind' provide?",
        "question_hi": "'std::io::ErrorKind' क्या प्रदान करता है?",
        "options_en": ["Classification of I/O errors", "Memory error types", "Thread error types", "Network error types"],
        "options_hi": ["I/O त्रुटियों का वर्गीकरण", "मेमोरी त्रुटि प्रकार", "थ्रेड त्रुटि प्रकार", "नेटवर्क त्रुटि प्रकार"],
        "answer_en": "Classification of I/O errors",
        "answer_hi": "I/O त्रुटियों का वर्गीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of 'std::fs::OpenOptions'?",
        "question_hi": "'std::fs::OpenOptions' का उद्देश्य क्या है?",
        "options_en": ["Configurable file opening", "File deletion", "File copying", "File moving"],
        "options_hi": ["कॉन्फ़िगरेबल फ़ाइल खोलना", "फ़ाइल हटाना", "फ़ाइल कॉपी", "फ़ाइल मूव"],
        "answer_en": "Configurable file opening",
        "answer_hi": "कॉन्फ़िगरेबल फ़ाइल खोलना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What does 'std::fs::metadata' provide?",
        "question_hi": "'std::fs::metadata' क्या प्रदान करता है?",
        "options_en": ["File system metadata", "File contents", "File permissions", "File owner"],
        "options_hi": ["फ़ाइल सिस्टम मेटाडेटा", "फ़ाइल सामग्री", "फ़ाइल अनुमतियाँ", "फ़ाइल मालिक"],
        "answer_en": "File system metadata",
        "answer_hi": "फ़ाइल सिस्टम मेटाडेटा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is 'std::path::PathBuf' used for?",
        "question_hi": "'std::path::PathBuf' किसके लिए उपयोग किया जाता है?",
        "options_en": ["Mutable owned path handling", "Immutable path reference", "Network paths", "Memory paths"],
        "options_hi": ["परिवर्तनशील स्वामित्व पथ हैंडलिंग", "अपरिवर्तनीय पथ संदर्भ", "नेटवर्क पथ", "मेमोरी पथ"],
        "answer_en": "Mutable owned path handling",
        "answer_hi": "परिवर्तनशील स्वामित्व पथ हैंडलिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What does 'std::env::current_dir' return?",
        "question_hi": "'std::env::current_dir' क्या लौटाता है?",
        "options_en": ["Current working directory", "Home directory", "Root directory", "Temporary directory"],
        "options_hi": ["वर्तमान कार्यशील निर्देशिका", "होम निर्देशिका", "रूट निर्देशिका", "अस्थायी निर्देशिका"],
        "answer_en": "Current working directory",
        "answer_hi": "वर्तमान कार्यशील निर्देशिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of 'std::process::Stdio'?",
        "question_hi": "'std::process::Stdio' का उद्देश्य क्या है?",
        "options_en": ["Configure child process I/O", "Parent process I/O", "Thread I/O", "File I/O"],
        "options_hi": ["चाइल्ड प्रक्रिया I/O कॉन्फ़िगर", "पैरेंट प्रक्रिया I/O", "थ्रेड I/O", "फ़ाइल I/O"],
        "answer_en": "Configure child process I/O",
        "answer_hi": "चाइल्ड प्रक्रिया I/O कॉन्फ़िगर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What does 'std::process::Child' represent?",
        "question_hi": "'std::process::Child' क्या दर्शाता है?",
        "options_en": ["Running child process", "Terminated process", "Parent process", "Thread process"],
        "options_hi": ["चल रही चाइल्ड प्रक्रिया", "समाप्त प्रक्रिया", "पैरेंट प्रक्रिया", "थ्रेड प्रक्रिया"],
        "answer_en": "Running child process",
        "answer_hi": "चल रही चाइल्ड प्रक्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is 'std::sync::mpsc::SyncSender' used for?",
        "question_hi": "'std::sync::mpsc::SyncSender' किसके लिए उपयोग किया जाता है?",
        "options_en": ["Synchronous bounded channel sending", "Asynchronous sending", "File sending", "Network sending"],
        "options_hi": ["सिंक्रोनस बाउंडेड चैनल भेजना", "एसिंक्रोनस भेजना", "फ़ाइल भेजना", "नेटवर्क भेजना"],
        "answer_en": "Synchronous bounded channel sending",
        "answer_hi": "सिंक्रोनस बाउंडेड चैनल भेजना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What does 'std::sync::mpsc::Receiver::try_recv' do?",
        "question_hi": "'std::sync::mpsc::Receiver::try_recv' क्या करता है?",
        "options_en": ["Non-blocking receive attempt", "Blocking receive", "Send message", "Check channel status"],
        "options_hi": ["गैर-अवरुद्ध रिसीव प्रयास", "अवरुद्ध रिसीव", "संदेश भेजें", "चैनल स्थिति जांच"],
        "answer_en": "Non-blocking receive attempt",
        "answer_hi": "गैर-अवरुद्ध रिसीव प्रयास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of 'std::sync::mpsc::sync_channel'?",
        "question_hi": "'std::sync::mpsc::sync_channel' का उद्देश्य क्या है?",
        "options_en": ["Create bounded synchronous channel", "Create unbounded channel", "Create async channel", "Create file channel"],
        "options_hi": ["बाउंडेड सिंक्रोनस चैनल बनाएं", "अनबाउंडेड चैनल बनाएं", "एसिंक चैनल बनाएं", "फ़ाइल चैनल बनाएं"],
        "answer_en": "Create bounded synchronous channel",
        "answer_hi": "बाउंडेड सिंक्रोनस चैनल बनाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What does 'std::sync::Arc' stand for?",
        "question_hi": "'std::sync::Arc' का क्या अर्थ है?",
        "options_en": ["Atomically Reference Counted", "Automatic Reference Counter", "Atomic Resource Counter", "Automatic Resource Counted"],
        "options_hi": ["परमाणु रूप से संदर्भ गिना", "स्वचालित संदर्भ काउंटर", "परमाणु संसाधन काउंटर", "स्वचालित संसाधन गिना"],
        "answer_en": "Atomically Reference Counted",
        "answer_hi": "परमाणु रूप से संदर्भ गिना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is 'std::sync::Weak' used for?",
        "question_hi": "'std::sync::Weak' किसके लिए उपयोग किया जाता है?",
        "options_en": ["Non-owning reference to Arc data", "Strong reference", "Owned reference", "Mutable reference"],
        "options_hi": ["Arc डेटा के लिए गैर-स्वामित्व संदर्भ", "मजबूत संदर्भ", "स्वामित्व संदर्भ", "परिवर्तनशील संदर्भ"],
        "answer_en": "Non-owning reference to Arc data",
        "answer_hi": "Arc डेटा के लिए गैर-स्वामित्व संदर्भ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What does 'std::cell::RefCell' provide?",
        "question_hi": "'std::cell::RefCell' क्या प्रदान करता है?",
        "options_en": ["Runtime borrowing checks", "Compile-time borrowing", "Thread-safe borrowing", "Atomic borrowing"],
        "options_hi": ["रनटाइम उधार जांच", "कंपाइल-टाइम उधार", "थ्रेड-सुरक्षित उधार", "परमाणु उधार"],
        "answer_en": "Runtime borrowing checks",
        "answer_hi": "रनटाइम उधार जांच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of 'std::mem::replace'?",
        "question_hi": "'std::mem::replace' का उद्देश्य क्या है?",
        "options_en": ["Swap values while returning old", "Copy values", "Move values", "Delete values"],
        "options_hi": ["पुराना लौटाते हुए मानों को स्वैप", "मान कॉपी", "मान मूव", "मान डिलीट"],
        "answer_en": "Swap values while returning old",
        "answer_hi": "पुराना लौटाते हुए मानों को स्वैप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What does 'std::mem::take' do?",
        "question_hi": "'std::mem::take' क्या करता है?",
        "options_en": ["Take value replacing with default", "Copy value", "Move value", "Delete value"],
        "options_hi": ["डिफ़ॉल्ट के साथ प्रतिस्थापित करते हुए मान लें", "मान कॉपी", "मान मूव", "मान डिलीट"],
        "answer_en": "Take value replacing with default",
        "answer_hi": "डिफ़ॉल्ट के साथ प्रतिस्थापित करते हुए मान लें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is 'std::mem::MaybeUninit' used for?",
        "question_hi": "'std::mem::MaybeUninit' किसके लिए उपयोग किया जाता है?",
        "options_en": ["Handle uninitialized memory safely", "Initialize memory", "Deallocate memory", "Check memory"],
        "options_hi": ["अप्रारंभिक मेमोरी को सुरक्षित रूप से संभालें", "मेमोरी आरंभ", "मेमोरी डीलोकेट", "मेमोरी जांच"],
        "answer_en": "Handle uninitialized memory safely",
        "answer_hi": "अप्रारंभिक मेमोरी को सुरक्षित रूप से संभालें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What does 'std::pin::Pin' guarantee?",
        "question_hi": "'std::pin::Pin' क्या गारंटी देता है?",
        "options_en": ["Prevent moving of pinned data", "Allow moving data", "Copy data", "Delete data"],
        "options_hi": ["पिन किए गए डेटा को स्थानांतरित होने से रोकें", "डेटा स्थानांतरित करने की अनुमति", "डेटा कॉपी", "डेटा डिलीट"],
        "answer_en": "Prevent moving of pinned data",
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