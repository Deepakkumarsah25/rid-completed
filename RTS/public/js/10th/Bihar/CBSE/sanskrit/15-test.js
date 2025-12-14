const questions=[
    {
        "num": 1,
        "question_en": "What is the primary purpose of the 'go' keyword in Go?",
        "question_hi": "Go में 'go' कीवर्ड का प्राथमिक उद्देश्य क्या है?",
        "options_en": ["To start a new goroutine", "To define a function", "To import packages", "To handle errors"],
        "options_hi": ["नई गोरूटीन शुरू करने के लिए", "फ़ंक्शन को परिभाषित करने के लिए", "पैकेज आयात करने के लिए", "त्रुटियों को संभालने के लिए"],
        "answer_en": "To start a new goroutine",
        "answer_hi": "नई गोरूटीन शुरू करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which function is used to create a new slice with specified length and capacity?",
        "question_hi": "निर्दिष्ट लंबाई और क्षमता के साथ नई स्लाइस बनाने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["make()", "new()", "create()", "slice()"],
        "options_hi": ["make()", "new()", "create()", "slice()"],
        "answer_en": "make()",
        "answer_hi": "make()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the zero value of a pointer in Go?",
        "question_hi": "Go में पॉइंटर का शून्य मान क्या है?",
        "options_en": ["nil", "0", "undefined", "null"],
        "options_hi": ["nil", "0", "अपरिभाषित", "null"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which package provides functionality for concurrent programming with goroutines?",
        "question_hi": "कौन सा पैकेज गोरूटीन के साथ समवर्ती प्रोग्रामिंग के लिए कार्यक्षमता प्रदान करता है?",
        "options_en": ["Built-in (no specific package)", "sync", "atomic", "runtime"],
        "options_hi": ["अंतर्निहित (कोई विशिष्ट पैकेज नहीं)", "sync", "atomic", "runtime"],
        "answer_en": "Built-in (no specific package)",
        "answer_hi": "अंतर्निहित (कोई विशिष्ट पैकेज नहीं)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What does the 'defer' keyword do in Go?",
        "question_hi": "Go में 'defer' कीवर्ड क्या करता है?",
        "options_en": ["Postpones function execution until surrounding function returns", "Immediately executes a function", "Defines an anonymous function", "Handles errors"],
        "options_hi": ["आसपास के फ़ंक्शन के वापस आने तक फ़ंक्शन निष्पादन स्थगित करता है", "तुरंत एक फ़ंक्शन निष्पादित करता है", "एक अनाम फ़ंक्शन को परिभाषित करता है", "त्रुटियों को संभालता है"],
        "answer_en": "Postpones function execution until surrounding function returns",
        "answer_hi": "आसपास के फ़ंक्शन के वापस आने तक फ़ंक्शन निष्पादन स्थगित करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you declare a variable without initializing it in Go?",
        "question_hi": "Go में बिना इनिशियलाइज़ किए वेरिएबल कैसे डिक्लेयर करते हैं?",
        "options_en": ["var x int", "x := int", "x int", "let x int"],
        "options_hi": ["var x int", "x := int", "x int", "let x int"],
        "answer_en": "var x int",
        "answer_hi": "var x int",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which of these is NOT a valid loop structure in Go?",
        "question_hi": "इनमें से कौन सा Go में वैध लूप स्ट्रक्चर नहीं है?",
        "options_en": ["while loop", "for loop", "range loop", "infinite for loop"],
        "options_hi": ["while लूप", "for लूप", "range लूप", "अनंत for लूप"],
        "answer_en": "while loop",
        "answer_hi": "while लूप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the purpose of the 'interface{}' type in Go?",
        "question_hi": "Go में 'interface{}' टाइप का उद्देश्य क्या है?",
        "options_en": ["To represent any type", "To define methods", "For error handling", "For type conversion"],
        "options_hi": ["किसी भी प्रकार का प्रतिनिधित्व करने के लिए", "विधियों को परिभाषित करने के लिए", "त्रुटि प्रबंधन के लिए", "प्रकार रूपांतरण के लिए"],
        "answer_en": "To represent any type",
        "answer_hi": "किसी भी प्रकार का प्रतिनिधित्व करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "How do you check if a key exists in a map?",
        "question_hi": "मैप में की मौजूद है या नहीं कैसे चेक करते हैं?",
        "options_en": ["value, ok := map[key]", "map.hasKey(key)", "map.contains(key)", "key in map"],
        "options_hi": ["value, ok := map[key]", "map.hasKey(key)", "map.contains(key)", "key in map"],
        "answer_en": "value, ok := map[key]",
        "answer_hi": "value, ok := map[key]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the default case sensitivity of Go identifiers?",
        "question_hi": "Go आइडेंटिफायर की डिफ़ॉल्ट केस सेंसिटिविटी क्या है?",
        "options_en": ["Case sensitive", "Case insensitive", "Depends on platform", "Configurable"],
        "options_hi": ["केस सेंसिटिव", "केस इनसेंसिटिव", "प्लेटफ़ॉर्म पर निर्भर", "कॉन्फ़िगरेबल"],
        "answer_en": "Case sensitive",
        "answer_hi": "केस सेंसिटिव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which function is used to append elements to a slice?",
        "question_hi": "स्लाइस में एलिमेंट्स जोड़ने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["append()", "add()", "push()", "insert()"],
        "options_hi": ["append()", "add()", "push()", "insert()"],
        "answer_en": "append()",
        "answer_hi": "append()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the purpose of the 'range' keyword?",
        "question_hi": "'range' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["To iterate over arrays, slices, maps, or channels", "To define a range of numbers", "To handle errors", "To import packages"],
        "options_hi": ["ऐरे, स्लाइस, मैप या चैनल पर पुनरावृति करने के लिए", "नंबरों की रेंज को परिभाषित करने के लिए", "त्रुटियों को संभालने के लिए", "पैकेज आयात करने के लिए"],
        "answer_en": "To iterate over arrays, slices, maps, or channels",
        "answer_hi": "ऐरे, स्लाइस, मैप या चैनल पर पुनरावृति करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How do you define a method on a struct in Go?",
        "question_hi": "Go में स्ट्रक्चर पर मेथड कैसे डिफाइन करते हैं?",
        "options_en": ["func (receiver) methodName() returnType", "func methodName(receiver) returnType", "method methodName() on receiver", "receiver.method methodName()"],
        "options_hi": ["func (receiver) methodName() returnType", "func methodName(receiver) returnType", "method methodName() on receiver", "receiver.method methodName()"],
        "answer_en": "func (receiver) methodName() returnType",
        "answer_hi": "func (receiver) methodName() returnType",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the zero value for a boolean in Go?",
        "question_hi": "Go में बूलियन का शून्य मान क्या है?",
        "options_en": ["false", "true", "0", "nil"],
        "options_hi": ["false", "true", "0", "nil"],
        "answer_en": "false",
        "answer_hi": "false",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which package is used for formatted I/O operations?",
        "question_hi": "फॉर्मेटेड I/O ऑपरेशन के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["fmt", "io", "bufio", "os"],
        "options_hi": ["fmt", "io", "bufio", "os"],
        "answer_en": "fmt",
        "answer_hi": "fmt",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does the 'select' statement do?",
        "question_hi": "'select' स्टेटमेंट क्या करता है?",
        "options_en": ["Waits on multiple channel operations", "Selects data from database", "Chooses between different types", "Filters data"],
        "options_hi": ["एकाधिक चैनल ऑपरेशन पर प्रतीक्षा करता है", "डेटाबेस से डेटा चुनता है", "विभिन्न प्रकारों के बीच चयन करता है", "डेटा फ़िल्टर करता है"],
        "answer_en": "Waits on multiple channel operations",
        "answer_hi": "एकाधिक चैनल ऑपरेशन पर प्रतीक्षा करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "How do you create a buffered channel?",
        "question_hi": "बफर्ड चैनल कैसे बनाते हैं?",
        "options_en": ["make(chan int, size)", "new(chan int, size)", "chan int{buffered: size}", "buffered(chan int, size)"],
        "options_hi": ["make(chan int, size)", "new(chan int, size)", "chan int{buffered: size}", "buffered(chan int, size)"],
        "answer_en": "make(chan int, size)",
        "answer_hi": "make(chan int, size)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the purpose of the 'const' keyword?",
        "question_hi": "'const' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["To declare constants", "To construct objects", "To define functions", "To import packages"],
        "options_hi": ["कॉन्स्टेंट घोषित करने के लिए", "ऑब्जेक्ट बनाने के लिए", "फ़ंक्शन परिभाषित करने के लिए", "पैकेज आयात करने के लिए"],
        "answer_en": "To declare constants",
        "answer_hi": "कॉन्स्टेंट घोषित करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which function is used to recover from a panic?",
        "question_hi": "पैनिक से रिकवर करने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["recover()", "catch()", "handle()", "rescue()"],
        "options_hi": ["recover()", "catch()", "handle()", "rescue()"],
        "answer_en": "recover()",
        "answer_hi": "recover()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the default visibility of exported identifiers?",
        "question_hi": "एक्सपोर्टेड आइडेंटिफायर की डिफ़ॉल्ट विजिबिलिटी क्या है?",
        "options_en": ["Capitalized names are exported", "All names are exported", "Names with underscore are exported", "Lowercase names are exported"],
        "options_hi": ["कैपिटलाइज्ड नाम एक्सपोर्ट होते हैं", "सभी नाम एक्सपोर्ट होते हैं", "अंडरस्कोर वाले नाम एक्सपोर्ट होते हैं", "लोवरकेस नाम एक्सपोर्ट होते हैं"],
        "answer_en": "Capitalized names are exported",
        "answer_hi": "कैपिटलाइज्ड नाम एक्सपोर्ट होते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "How do you convert a string to a byte slice?",
        "question_hi": "स्ट्रिंग को बाइट स्लाइस में कैसे कन्वर्ट करते हैं?",
        "options_en": ["[]byte(str)", "byte(str)", "str.Bytes()", "Bytes(str)"],
        "options_hi": ["[]byte(str)", "byte(str)", "str.Bytes()", "Bytes(str)"],
        "answer_en": "[]byte(str)",
        "answer_hi": "[]byte(str)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the purpose of the 'iota' identifier?",
        "question_hi": "'iota' आइडेंटिफायर का उद्देश्य क्या है?",
        "options_en": ["Auto-incrementing constant generator", "Error handling", "Loop counter", "Random number generator"],
        "options_hi": ["ऑटो-इंक्रीमेंटिंग कॉन्स्टेंट जनरेटर", "त्रुटि प्रबंधन", "लूप काउंटर", "रैंडम नंबर जनरेटर"],
        "answer_en": "Auto-incrementing constant generator",
        "answer_hi": "ऑटो-इंक्रीमेंटिंग कॉन्स्टेंट जनरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which package provides HTTP client and server implementations?",
        "question_hi": "कौन सा पैकेज HTTP क्लाइंट और सर्वर इम्प्लीमेंटेशन प्रदान करता है?",
        "options_en": ["net/http", "http", "web", "net"],
        "options_hi": ["net/http", "http", "web", "net"],
        "answer_en": "net/http",
        "answer_hi": "net/http",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the difference between 'var' and ':=' for variable declaration?",
        "question_hi": "वेरिएबल डिक्लेरेशन के लिए 'var' और ':=' में क्या अंतर है?",
        "options_en": [":= infers type, var requires explicit type", "No difference", "var is for constants", ":= is for global variables"],
        "options_hi": [":= टाइप इन्फर करता है, var को एक्सप्लिसिट टाइप चाहिए", "कोई अंतर नहीं", "var कॉन्स्टेंट के लिए है", ":= ग्लोबल वेरिएबल के लिए है"],
        "answer_en": ":= infers type, var requires explicit type",
        "answer_hi": ":= टाइप इन्फर करता है, var को एक्सप्लिसिट टाइप चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "How do you implement composition in Go?",
        "question_hi": "Go में कम्पोज़िशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Through struct embedding", "Using inheritance", "With interfaces only", "Using pointers"],
        "options_hi": ["स्ट्रक्चर एम्बेडिंग के माध्यम से", "इनहेरिटेंस का उपयोग करके", "केवल इंटरफेस के साथ", "पॉइंटर्स का उपयोग करके"],
        "answer_en": "Through struct embedding",
        "answer_hi": "स्ट्रक्चर एम्बेडिंग के माध्यम से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the purpose of the 'context' package?",
        "question_hi": "'context' पैकेज का उद्देश्य क्या है?",
        "options_en": ["To carry deadlines, cancellation signals across API boundaries", "For text processing", "For database context", "For error context"],
        "options_hi": ["API सीमाओं के पार डेडलाइन, कैंसिलेशन सिग्नल ले जाने के लिए", "टेक्स्ट प्रोसेसिंग के लिए", "डेटाबेस कॉन्टेक्स्ट के लिए", "एरर कॉन्टेक्स्ट के लिए"],
        "answer_en": "To carry deadlines, cancellation signals across API boundaries",
        "answer_hi": "API सीमाओं के पार डेडलाइन, कैंसिलेशन सिग्नल ले जाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which function is used to copy elements between slices?",
        "question_hi": "स्लाइस के बीच एलिमेंट्स कॉपी करने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["copy()", "clone()", "duplicate()", "slice()"],
        "options_hi": ["copy()", "clone()", "duplicate()", "slice()"],
        "answer_en": "copy()",
        "answer_hi": "copy()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the zero value for an interface?",
        "question_hi": "इंटरफेस का शून्य मान क्या है?",
        "options_en": ["nil", "0", "empty interface", "undefined"],
        "options_hi": ["nil", "0", "खाली इंटरफेस", "अपरिभाषित"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How do you define a variadic function?",
        "question_hi": "वेरिएडिक फ़ंक्शन कैसे डिफाइन करते हैं?",
        "options_en": ["func foo(args ...int)", "func foo(...int)", "func foo(args []int)", "func foo(variadic int)"],
        "options_hi": ["func foo(args ...int)", "func foo(...int)", "func foo(args []int)", "func foo(variadic int)"],
        "answer_en": "func foo(args ...int)",
        "answer_hi": "func foo(args ...int)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the purpose of the 'sync' package?",
        "question_hi": "'sync' पैकेज का उद्देश्य क्या है?",
        "options_en": ["To provide basic synchronization primitives", "For HTTP synchronization", "For database sync", "For file synchronization"],
        "options_hi": ["बेसिक सिंक्रोनाइज़ेशन प्रिमिटिव्स प्रदान करने के लिए", "HTTP सिंक्रोनाइज़ेशन के लिए", "डेटाबेस सिंक के लिए", "फ़ाइल सिंक्रोनाइज़ेशन के लिए"],
        "answer_en": "To provide basic synchronization primitives",
        "answer_hi": "बेसिक सिंक्रोनाइज़ेशन प्रिमिटिव्स प्रदान करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which method is used to implement string representation for custom types?",
        "question_hi": "कस्टम टाइप के लिए स्ट्रिंग रिप्रेजेंटेशन इम्प्लीमेंट करने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["String() string", "ToString() string", "Format() string", "Text() string"],
        "options_hi": ["String() string", "ToString() string", "Format() string", "Text() string"],
        "answer_en": "String() string",
        "answer_hi": "String() string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the purpose of the 'unsafe' package?",
        "question_hi": "'unsafe' पैकेज का उद्देश्य क्या है?",
        "options_en": ["To bypass Go's type safety for low-level programming", "For error handling", "For safe operations", "For memory safety"],
        "options_hi": ["लो-लेवल प्रोग्रामिंग के लिए Go की टाइप सेफ्टी को बायपास करने के लिए", "त्रुटि प्रबंधन के लिए", "सुरक्षित ऑपरेशन के लिए", "मेमोरी सुरक्षा के लिए"],
        "answer_en": "To bypass Go's type safety for low-level programming",
        "answer_hi": "लो-लेवल प्रोग्रामिंग के लिए Go की टाइप सेफ्टी को बायपास करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "How do you create a custom error type?",
        "question_hi": "कस्टम एरर टाइप कैसे बनाते हैं?",
        "options_en": ["Implement Error() method", "Extend error interface", "Use error.New()", "Create error struct"],
        "options_hi": ["Error() मेथड इम्प्लीमेंट करें", "एरर इंटरफेस एक्सटेंड करें", "error.New() उपयोग करें", "एरर स्ट्रक्चर बनाएं"],
        "answer_en": "Implement Error() method",
        "answer_hi": "Error() मेथड इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the purpose of the 'reflect' package?",
        "question_hi": "'reflect' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For runtime reflection", "For compile-time checks", "For code generation", "For optimization"],
        "options_hi": ["रनटाइम रिफ्लेक्शन के लिए", "कम्पाइल-टाइम चेक के लिए", "कोड जनरेशन के लिए", "ऑप्टिमाइज़ेशन के लिए"],
        "answer_en": "For runtime reflection",
        "answer_hi": "रनटाइम रिफ्लेक्शन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which function is used to parse JSON data?",
        "question_hi": "JSON डेटा पार्स करने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["json.Unmarshal()", "json.Parse()", "json.Decode()", "json.Read()"],
        "options_hi": ["json.Unmarshal()", "json.Parse()", "json.Decode()", "json.Read()"],
        "answer_en": "json.Unmarshal()",
        "answer_hi": "json.Unmarshal()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the purpose of the 'go mod' command?",
        "question_hi": "'go mod' कमांड का उद्देश्य क्या है?",
        "options_en": ["To manage module dependencies", "To modify code", "To run tests", "To build binaries"],
        "options_hi": ["मॉड्यूल निर्भरताएं प्रबंधित करने के लिए", "कोड संशोधित करने के लिए", "टेस्ट चलाने के लिए", "बाइनरी बनाने के लिए"],
        "answer_en": "To manage module dependencies",
        "answer_hi": "मॉड्यूल निर्भरताएं प्रबंधित करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How do you implement method overloading in Go?",
        "question_hi": "Go में मेथड ओवरलोडिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Go doesn't support method overloading", "Using different receiver types", "With variadic functions", "Using interfaces"],
        "options_hi": ["Go मेथड ओवरलोडिंग सपोर्ट नहीं करता", "अलग-अलग रिसीवर टाइप का उपयोग करके", "वेरिएडिक फ़ंक्शन के साथ", "इंटरफेस का उपयोग करके"],
        "answer_en": "Go doesn't support method overloading",
        "answer_hi": "Go मेथड ओवरलोडिंग सपोर्ट नहीं करता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the purpose of the 'time' package?",
        "question_hi": "'time' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For time and date operations", "For timing code execution", "For scheduling", "All of the above"],
        "options_hi": ["समय और तारीख संचालन के लिए", "कोड निष्पादन का समय मापने के लिए", "शेड्यूलिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "How do you create a pointer to a variable?",
        "question_hi": "वेरिएबल का पॉइंटर कैसे बनाते हैं?",
        "options_en": ["&variable", "*variable", "ptr(variable)", "pointer(variable)"],
        "options_hi": ["&variable", "*variable", "ptr(variable)", "pointer(variable)"],
        "answer_en": "&variable",
        "answer_hi": "&variable",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the purpose of the 'os' package?",
        "question_hi": "'os' पैकेज का उद्देश्य क्या है?",
        "options_en": ["To provide platform-independent interface to OS functionality", "For networking", "For file operations only", "For process management only"],
        "options_hi": ["OS कार्यक्षमता के लिए प्लेटफ़ॉर्म-स्वतंत्र इंटरफेस प्रदान करने के लिए", "नेटवर्किंग के लिए", "केवल फ़ाइल ऑपरेशन के लिए", "केवल प्रक्रिया प्रबंधन के लिए"],
        "answer_en": "To provide platform-independent interface to OS functionality",
        "answer_hi": "OS कार्यक्षमता के लिए प्लेटफ़ॉर्म-स्वतंत्र इंटरफेस प्रदान करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which function is used to generate random numbers?",
        "question_hi": "रैंडम नंबर जनरेट करने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["rand.Intn()", "random.Int()", "math.Rand()", "util.Random()"],
        "options_hi": ["rand.Intn()", "random.Int()", "math.Rand()", "util.Random()"],
        "answer_en": "rand.Intn()",
        "answer_hi": "rand.Intn()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the purpose of the 'bufio' package?",
        "question_hi": "'bufio' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For buffered I/O operations", "For buffer management", "For I/O utilities", "All of the above"],
        "options_hi": ["बफर्ड I/O ऑपरेशन के लिए", "बफर प्रबंधन के लिए", "I/O यूटिलिटी के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "How do you implement type assertion?",
        "question_hi": "टाइप असर्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["value := interfaceVar.(Type)", "value := (Type)interfaceVar", "value := interfaceVar.Type()", "value := assert.Type(interfaceVar)"],
        "options_hi": ["value := interfaceVar.(Type)", "value := (Type)interfaceVar", "value := interfaceVar.Type()", "value := assert.Type(interfaceVar)"],
        "answer_en": "value := interfaceVar.(Type)",
        "answer_hi": "value := interfaceVar.(Type)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the purpose of the 'strings' package?",
        "question_hi": "'strings' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For string manipulation functions", "For string creation", "For string conversion", "For string storage"],
        "options_hi": ["स्ट्रिंग मैनिपुलेशन फ़ंक्शन के लिए", "स्ट्रिंग क्रिएशन के लिए", "स्ट्रिंग कन्वर्जन के लिए", "स्ट्रिंग स्टोरेज के लिए"],
        "answer_en": "For string manipulation functions",
        "answer_hi": "स्ट्रिंग मैनिपुलेशन फ़ंक्शन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which function is used to sort a slice?",
        "question_hi": "स्लाइस सॉर्ट करने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["sort.Slice()", "slice.Sort()", "array.Sort()", "util.Sort()"],
        "options_hi": ["sort.Slice()", "slice.Sort()", "array.Sort()", "util.Sort()"],
        "answer_en": "sort.Slice()",
        "answer_hi": "sort.Slice()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the purpose of the 'flag' package?",
        "question_hi": "'flag' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For command-line flag parsing", "For boolean operations", "For signal flags", "For status flags"],
        "options_hi": ["कमांड-लाइन फ्लैग पार्सिंग के लिए", "बूलियन ऑपरेशन के लिए", "सिग्नल फ्लैग के लिए", "स्टेटस फ्लैग के लिए"],
        "answer_en": "For command-line flag parsing",
        "answer_hi": "कमांड-लाइन फ्लैग पार्सिंग के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "How do you implement a read-write lock?",
        "question_hi": "रीड-राइट लॉक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["sync.RWMutex", "sync.Mutex", "sync.Lock", "sync.RWLock"],
        "options_hi": ["sync.RWMutex", "sync.Mutex", "sync.Lock", "sync.RWLock"],
        "answer_en": "sync.RWMutex",
        "answer_hi": "sync.RWMutex",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the purpose of the 'encoding' package?",
        "question_hi": "'encoding' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For data encoding/decoding interfaces", "For text encoding", "For binary encoding", "For all encodings"],
        "options_hi": ["डेटा एन्कोडिंग/डिकोडिंग इंटरफेस के लिए", "टेक्स्ट एन्कोडिंग के लिए", "बाइनरी एन्कोडिंग के लिए", "सभी एन्कोडिंग के लिए"],
        "answer_en": "For data encoding/decoding interfaces",
        "answer_hi": "डेटा एन्कोडिंग/डिकोडिंग इंटरफेस के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which function is used to create a new HTTP request?",
        "question_hi": "नया HTTP रिक्वेस्ट बनाने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["http.NewRequest()", "http.Request()", "http.CreateRequest()", "http.MakeRequest()"],
        "options_hi": ["http.NewRequest()", "http.Request()", "http.CreateRequest()", "http.MakeRequest()"],
        "answer_en": "http.NewRequest()",
        "answer_hi": "http.NewRequest()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the purpose of the 'log' package?",
        "question_hi": "'log' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For simple logging", "For complex logging", "For structured logging", "For all logging needs"],
        "options_hi": ["सरल लॉगिंग के लिए", "कॉम्प्लेक्स लॉगिंग के लिए", "स्ट्रक्चर्ड लॉगिंग के लिए", "सभी लॉगिंग जरूरतों के लिए"],
        "answer_en": "For simple logging",
        "answer_hi": "सरल लॉगिंग के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "How do you implement a worker pool pattern?",
        "question_hi": "वर्कर पूल पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using channels and goroutines", "Using threads", "Using processes", "Using mutexes only"],
        "options_hi": ["चैनल और गोरूटीन का उपयोग करके", "थ्रेड का उपयोग करके", "प्रोसेस का उपयोग करके", "केवल म्यूटेक्स का उपयोग करके"],
        "answer_en": "Using channels and goroutines",
        "answer_hi": "चैनल और गोरूटीन का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the purpose of the 'crypto' package?",
        "question_hi": "'crypto' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For cryptographic operations", "For encryption only", "For decryption only", "For hashing only"],
        "options_hi": ["क्रिप्टोग्राफिक ऑपरेशन के लिए", "केवल एन्क्रिप्शन के लिए", "केवल डिक्रिप्शन के लिए", "केवल हैशिंग के लिए"],
        "answer_en": "For cryptographic operations",
        "answer_hi": "क्रिप्टोग्राफिक ऑपरेशन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Which function is used to convert a string to integer?",
        "question_hi": "स्ट्रिंग को इंटीजर में कन्वर्ट करने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["strconv.Atoi()", "string.ToInt()", "convert.Int()", "parse.Int()"],
        "options_hi": ["strconv.Atoi()", "string.ToInt()", "convert.Int()", "parse.Int()"],
        "answer_en": "strconv.Atoi()",
        "answer_hi": "strconv.Atoi()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the purpose of the 'path' package?",
        "question_hi": "'path' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For manipulating slash-separated paths", "For file paths only", "For URL paths only", "For all path types"],
        "options_hi": ["स्लैश-सेपरेटेड पाथ मैनिपुलेशन के लिए", "केवल फ़ाइल पाथ के लिए", "केवल URL पाथ के लिए", "सभी पाथ टाइप के लिए"],
        "answer_en": "For manipulating slash-separated paths",
        "answer_hi": "स्लैश-सेपरेटेड पाथ मैनिपुलेशन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "How do you implement graceful shutdown in HTTP server?",
        "question_hi": "HTTP सर्वर में ग्रेसफुल शटडाउन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Shutdown() method with context", "Closing server directly", "Using Stop() method", "Killing process"],
        "options_hi": ["कॉन्टेक्स्ट के साथ Shutdown() मेथड का उपयोग करके", "सीधे सर्वर बंद करके", "Stop() मेथड का उपयोग करके", "प्रोसेस किल करके"],
        "answer_en": "Using Shutdown() method with context",
        "answer_hi": "कॉन्टेक्स्ट के साथ Shutdown() मेथड का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the purpose of the 'io' package?",
        "question_hi": "'io' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For basic I/O interfaces", "For file I/O only", "For network I/O only", "For all I/O operations"],
        "options_hi": ["बेसिक I/O इंटरफेस के लिए", "केवल फ़ाइल I/O के लिए", "केवल नेटवर्क I/O के लिए", "सभी I/O ऑपरेशन के लिए"],
        "answer_en": "For basic I/O interfaces",
        "answer_hi": "बेसिक I/O इंटरफेस के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which function is used to create a temporary file?",
        "question_hi": "टेम्पररी फाइल बनाने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["os.CreateTemp()", "tempfile.New()", "io.TempFile()", "file.Temp()"],
        "options_hi": ["os.CreateTemp()", "tempfile.New()", "io.TempFile()", "file.Temp()"],
        "answer_en": "os.CreateTemp()",
        "answer_hi": "os.CreateTemp()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the purpose of the 'compress' package?",
        "question_hi": "'compress' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For compression algorithms", "For file compression", "For data compression", "All of the above"],
        "options_hi": ["कम्प्रेशन एल्गोरिदम के लिए", "फ़ाइल कम्प्रेशन के लिए", "डेटा कम्प्रेशन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "How do you implement custom sorting?",
        "question_hi": "कस्टम सॉर्टिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement sort.Interface", "Use sort.Slice with custom function", "Both A and B", "Use sort.Custom()"],
        "options_hi": ["sort.Interface इम्प्लीमेंट करें", "कस्टम फ़ंक्शन के साथ sort.Slice उपयोग करें", "A और B दोनों", "sort.Custom() उपयोग करें"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the purpose of the 'testing' package?",
        "question_hi": "'testing' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For writing automated tests", "For performance testing", "For benchmark tests", "All of the above"],
        "options_hi": ["ऑटोमेटेड टेस्ट लिखने के लिए", "परफॉर्मेंस टेस्टिंग के लिए", "बेंचमार्क टेस्ट के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which function is used to read from standard input?",
        "question_hi": "स्टैंडर्ड इनपुट से पढ़ने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["fmt.Scan()", "os.Stdin.Read()", "io.ReadAll(os.Stdin)", "All of the above"],
        "options_hi": ["fmt.Scan()", "os.Stdin.Read()", "io.ReadAll(os.Stdin)", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the purpose of the 'archive' package?",
        "question_hi": "'archive' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For handling archive files", "For ZIP files", "For TAR files", "All of the above"],
        "options_hi": ["आर्काइव फाइल हैंडलिंग के लिए", "ZIP फाइल के लिए", "TAR फाइल के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "How do you implement timeouts with context?",
        "question_hi": "कॉन्टेक्स्ट के साथ टाइमआउट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["context.WithTimeout()", "context.WithDeadline()", "Both A and B", "Using time.After()"],
        "options_hi": ["context.WithTimeout()", "context.WithDeadline()", "A और B दोनों", "time.After() उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the purpose of the 'regexp' package?",
        "question_hi": "'regexp' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For regular expression operations", "For pattern matching", "For string searching", "All of the above"],
        "options_hi": ["रेगुलर एक्सप्रेशन ऑपरेशन के लिए", "पैटर्न मैचिंग के लिए", "स्ट्रिंग सर्चिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Which function is used to write to standard output?",
        "question_hi": "स्टैंडर्ड आउटपुट में लिखने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["fmt.Print()", "os.Stdout.Write()", "Both A and B", "io.WriteString(os.Stdout)"],
        "options_hi": ["fmt.Print()", "os.Stdout.Write()", "A और B दोनों", "io.WriteString(os.Stdout)"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the purpose of the 'html' package?",
        "question_hi": "'html' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For HTML escaping and templating", "For parsing HTML", "For generating HTML", "All of the above"],
        "options_hi": ["HTML एस्केपिंग और टेम्प्लेटिंग के लिए", "HTML पार्सिंग के लिए", "HTML जनरेटिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "For HTML escaping and templating",
        "answer_hi": "HTML एस्केपिंग और टेम्प्लेटिंग के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "How do you implement rate limiting?",
        "question_hi": "रेट लिमिटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using time.Ticker", "Using context with timeout", "Using sync.Once", "Using atomic operations"],
        "options_hi": ["time.Ticker उपयोग करके", "टाइमआउट के साथ कॉन्टेक्स्ट उपयोग करके", "sync.Once उपयोग करके", "एटॉमिक ऑपरेशन उपयोग करके"],
        "answer_en": "Using time.Ticker",
        "answer_hi": "time.Ticker उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the purpose of the 'image' package?",
        "question_hi": "'image' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For basic image manipulation", "For image decoding", "For image encoding", "All of the above"],
        "options_hi": ["बेसिक इमेज मैनिपुलेशन के लिए", "इमेज डिकोडिंग के लिए", "इमेज एन्कोडिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which function is used to create a new TLS configuration?",
        "question_hi": "नया TLS कॉन्फ़िगरेशन बनाने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["tls.Config{}", "tls.NewConfig()", "crypto.TLSConfig()", "ssl.NewConfig()"],
        "options_hi": ["tls.Config{}", "tls.NewConfig()", "crypto.TLSConfig()", "ssl.NewConfig()"],
        "answer_en": "tls.Config{}",
        "answer_hi": "tls.Config{}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the purpose of the 'mime' package?",
        "question_hi": "'mime' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For MIME type detection", "For media type handling", "For content type management", "All of the above"],
        "options_hi": ["MIME टाइप डिटेक्शन के लिए", "मीडिया टाइप हैंडलिंग के लिए", "कंटेंट टाइप मैनेजमेंट के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "How do you implement connection pooling?",
        "question_hi": "कनेक्शन पूलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sync.Pool", "Manual implementation with channels", "Using database/sql package", "All of the above"],
        "options_hi": ["sync.Pool उपयोग करके", "चैनल के साथ मैनुअल इम्प्लीमेंटेशन", "database/sql पैकेज उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the purpose of the 'go/ast' package?",
        "question_hi": "'go/ast' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For Go abstract syntax tree operations", "For code generation", "For static analysis", "All of the above"],
        "options_hi": ["Go अब्स्ट्रैक्ट सिंटैक्स ट्री ऑपरेशन के लिए", "कोड जनरेशन के लिए", "स्टैटिक एनालिसिस के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which function is used to parse command line flags?",
        "question_hi": "कमांड लाइन फ्लैग पार्स करने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["flag.Parse()", "flag.Process()", "flag.Read()", "flag.Execute()"],
        "options_hi": ["flag.Parse()", "flag.Process()", "flag.Read()", "flag.Execute()"],
        "answer_en": "flag.Parse()",
        "answer_hi": "flag.Parse()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the purpose of the 'runtime/debug' package?",
        "question_hi": "'runtime/debug' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For debugging utilities", "For stack traces", "For garbage collection control", "All of the above"],
        "options_hi": ["डिबगिंग यूटिलिटी के लिए", "स्टैक ट्रेस के लिए", "गार्बेज कलेक्शन कंट्रोल के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "How do you implement custom marshaling for JSON?",
        "question_hi": "JSON के लिए कस्टम मार्शलिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement json.Marshaler interface", "Use struct tags", "Both A and B", "Use json.CustomMarshal()"],
        "options_hi": ["json.Marshaler इंटरफेस इम्प्लीमेंट करें", "स्ट्रक्चर टैग उपयोग करें", "A और B दोनों", "json.CustomMarshal() उपयोग करें"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the purpose of the 'net' package?",
        "question_hi": "'net' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For network I/O", "For socket programming", "For protocol implementation", "All of the above"],
        "options_hi": ["नेटवर्क I/O के लिए", "सॉकेट प्रोग्रामिंग के लिए", "प्रोटोकॉल इम्प्लीमेंटेशन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which function is used to get environment variables?",
        "question_hi": "एनवायरनमेंट वेरिएबल प्राप्त करने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["os.Getenv()", "env.Get()", "system.GetEnv()", "runtime.Getenv()"],
        "options_hi": ["os.Getenv()", "env.Get()", "system.GetEnv()", "runtime.Getenv()"],
        "answer_en": "os.Getenv()",
        "answer_hi": "os.Getenv()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the purpose of the 'go/doc' package?",
        "question_hi": "'go/doc' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For extracting documentation from Go source", "For generating docs", "For parsing comments", "All of the above"],
        "options_hi": ["Go सोर्स से डॉक्यूमेंटेशन एक्सट्रैक्ट करने के लिए", "डॉक्स जनरेट करने के लिए", "कमेंट पार्सिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "How do you implement atomic operations?",
        "question_hi": "एटॉमिक ऑपरेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sync/atomic package", "Using mutexes", "Using channels", "All of the above"],
        "options_hi": ["sync/atomic पैकेज उपयोग करके", "म्यूटेक्स उपयोग करके", "चैनल उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "Using sync/atomic package",
        "answer_hi": "sync/atomic पैकेज उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the purpose of the 'hash' package?",
        "question_hi": "'hash' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For hash function interfaces", "For checksum calculation", "For cryptographic hashing", "All of the above"],
        "options_hi": ["हैश फ़ंक्शन इंटरफेस के लिए", "चेकसम कैलकुलेशन के लिए", "क्रिप्टोग्राफिक हैशिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "For hash function interfaces",
        "answer_hi": "हैश फ़ंक्शन इंटरफेस के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which function is used to create a new TCP listener?",
        "question_hi": "नया TCP लिस्नर बनाने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["net.Listen()", "tcp.Listen()", "net.TCPListen()", "socket.Listen()"],
        "options_hi": ["net.Listen()", "tcp.Listen()", "net.TCPListen()", "socket.Listen()"],
        "answer_en": "net.Listen()",
        "answer_hi": "net.Listen()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the purpose of the 'go/parser' package?",
        "question_hi": "'go/parser' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For parsing Go source files", "For code analysis", "For AST generation", "All of the above"],
        "options_hi": ["Go सोर्स फाइल पार्सिंग के लिए", "कोड एनालिसिस के लिए", "AST जनरेशन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "How do you implement file watching?",
        "question_hi": "फाइल वॉचिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using fsnotify package", "Manual polling", "Using inotify (Linux)", "All of the above"],
        "options_hi": ["fsnotify पैकेज उपयोग करके", "मैनुअल पोलिंग", "inotify उपयोग करके (Linux)", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the purpose of the 'text/template' package?",
        "question_hi": "'text/template' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For text templating", "For generating text output", "For data-driven templates", "All of the above"],
        "options_hi": ["टेक्स्ट टेम्प्लेटिंग के लिए", "टेक्स्ट आउटपुट जनरेट करने के लिए", "डेटा-ड्रिवेन टेम्प्लेट के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which function is used to walk a directory?",
        "question_hi": "डायरेक्टरी वॉक करने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["filepath.Walk()", "os.Walk()", "dir.Walk()", "fs.Walk()"],
        "options_hi": ["filepath.Walk()", "os.Walk()", "dir.Walk()", "fs.Walk()"],
        "answer_en": "filepath.Walk()",
        "answer_hi": "filepath.Walk()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the purpose of the 'runtime/pprof' package?",
        "question_hi": "'runtime/pprof' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For performance profiling", "For CPU profiling", "For memory profiling", "All of the above"],
        "options_hi": ["परफॉर्मेंस प्रोफाइलिंग के लिए", "CPU प्रोफाइलिंग के लिए", "मेमोरी प्रोफाइलिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "How do you implement custom HTTP handlers?",
        "question_hi": "कस्टम HTTP हैंडलर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement http.Handler interface", "Use http.HandlerFunc", "Both A and B", "Use http.CustomHandler()"],
        "options_hi": ["http.Handler इंटरफेस इम्प्लीमेंट करें", "http.HandlerFunc उपयोग करें", "A और B दोनों", "http.CustomHandler() उपयोग करें"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the purpose of the 'go/build' package?",
        "question_hi": "'go/build' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For building Go packages", "For package information", "For build constraints", "All of the above"],
        "options_hi": ["Go पैकेज बिल्ड करने के लिए", "पैकेज इनफार्मेशन के लिए", "बिल्ड कंस्ट्रेंट के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which function is used to calculate MD5 hash?",
        "question_hi": "MD5 हैश कैलकुलेट करने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["md5.New()", "crypto.MD5()", "hash.MD5()", "checksum.MD5()"],
        "options_hi": ["md5.New()", "crypto.MD5()", "hash.MD5()", "checksum.MD5()"],
        "answer_en": "md5.New()",
        "answer_hi": "md5.New()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the purpose of the 'expvar' package?",
        "question_hi": "'expvar' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For exposing public variables via HTTP", "For experimental variables", "For exported variables", "For external variables"],
        "options_hi": ["HTTP के माध्यम से पब्लिक वेरिएबल एक्सपोज करने के लिए", "एक्सपेरिमेंटल वेरिएबल के लिए", "एक्सपोर्टेड वेरिएबल के लिए", "एक्सटर्नल वेरिएबल के लिए"],
        "answer_en": "For exposing public variables via HTTP",
        "answer_hi": "HTTP के माध्यम से पब्लिक वेरिएबल एक्सपोज करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "How do you implement graceful shutdown with signals?",
        "question_hi": "सिग्नल के साथ ग्रेसफुल शटडाउन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using os/signal package", "Using context with cancel", "Using channel for signals", "All of the above"],
        "options_hi": ["os/signal पैकेज उपयोग करके", "कैंसल के साथ कॉन्टेक्स्ट उपयोग करके", "सिग्नल के लिए चैनल उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the purpose of the 'unicode' package?",
        "question_hi": "'unicode' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For Unicode character classification", "For UTF-8 handling", "For rune operations", "All of the above"],
        "options_hi": ["यूनिकोड करैक्टर क्लासिफिकेशन के लिए", "UTF-8 हैंडलिंग के लिए", "रून ऑपरेशन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which function is used to create a new UUID?",
        "question_hi": "नया UUID बनाने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["github.com/google/uuid.New()", "uuid.Generate()", "util.UUID()", "id.NewUUID()"],
        "options_hi": ["github.com/google/uuid.New()", "uuid.Generate()", "util.UUID()", "id.NewUUID()"],
        "answer_en": "github.com/google/uuid.New()",
        "answer_hi": "github.com/google/uuid.New()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the purpose of the 'sync/atomic' package?",
        "question_hi": "'sync/atomic' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For atomic operations on primitive types", "For thread-safe operations", "For lock-free programming", "All of the above"],
        "options_hi": ["प्रिमिटिव टाइप पर एटॉमिक ऑपरेशन के लिए", "थ्रेड-सेफ ऑपरेशन के लिए", "लॉक-फ्री प्रोग्रामिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "How do you implement middleware in HTTP?",
        "question_hi": "HTTP में मिडलवेयर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Function chaining", "Using http.Handler wrappers", "Both A and B", "Using http.Middleware()"],
        "options_hi": ["फंक्शन चेनिंग", "http.Handler रैपर उपयोग करके", "A और B दोनों", "http.Middleware() उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the purpose of the 'go/format' package?",
        "question_hi": "'go/format' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For formatting Go source code", "For code beautification", "For standard formatting", "All of the above"],
        "options_hi": ["Go सोर्स कोड फॉर्मेटिंग के लिए", "कोड ब्यूटिफिकेशन के लिए", "स्टैंडर्ड फॉर्मेटिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which function is used to create a new SQL DB connection?",
        "question_hi": "नया SQL DB कनेक्शन बनाने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["sql.Open()", "db.Open()", "sql.Connect()", "database.Open()"],
        "options_hi": ["sql.Open()", "db.Open()", "sql.Connect()", "database.Open()"],
        "answer_en": "sql.Open()",
        "answer_hi": "sql.Open()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the purpose of the 'container' package?",
        "question_hi": "'container' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For container data structures", "For heap operations", "For list and ring structures", "All of the above"],
        "options_hi": ["कंटेनर डेटा स्ट्रक्चर के लिए", "हीप ऑपरेशन के लिए", "लिस्ट और रिंग स्ट्रक्चर के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "How do you implement file upload in HTTP?",
        "question_hi": "HTTP में फाइल अपलोड कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using multipart form parsing", "Using io.Copy", "Using file headers", "All of the above"],
        "options_hi": ["मल्टीपार्ट फॉर्म पार्सिंग उपयोग करके", "io.Copy उपयोग करके", "फाइल हेडर उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the purpose of the 'plugin' package?",
        "question_hi": "'plugin' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For loading Go plugins at runtime", "For dynamic linking", "For extension mechanisms", "All of the above"],
        "options_hi": ["रनटाइम पर Go प्लगइन लोड करने के लिए", "डायनामिक लिंकिंग के लिए", "एक्सटेंशन मैकेनिज्म के लिए", "उपरोक्त सभी"],
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