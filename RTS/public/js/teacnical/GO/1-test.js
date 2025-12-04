const questions = [
    {
        "num": 1,
        "question_en": "What is the default zero value for a pointer in Go?",
        "question_hi": "Go में पॉइंटर का डिफॉल्ट जीरो वैल्यू क्या है?",
        "options_en": ["0", "nil", "null", "undefined"],
        "options_hi": ["0", "nil", "null", "undefined"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which keyword is used to define a constant in Go?",
        "question_hi": "Go में कॉन्स्टेंट डिफाइन करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["const", "var", "let", "constant"],
        "options_hi": ["const", "var", "let", "constant"],
        "answer_en": "const",
        "answer_hi": "const",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the entry point of a Go program?",
        "question_hi": "Go प्रोग्राम का एंट्री पॉइंट क्या है?",
        "options_en": ["main() function", "init() function", "start() function", "package main"],
        "options_hi": ["main() फंक्शन", "init() फंक्शन", "start() फंक्शन", "package main"],
        "answer_en": "main() function",
        "answer_hi": "main() फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which data type is used to represent a UTF-8 character in Go?",
        "question_hi": "Go में UTF-8 करैक्टर रिप्रेजेंट करने के लिए कौन सा डेटा टाइप उपयोग किया जाता है?",
        "options_en": ["char", "byte", "rune", "string"],
        "options_hi": ["char", "byte", "rune", "string"],
        "answer_en": "rune",
        "answer_hi": "rune",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of the 'defer' keyword in Go?",
        "question_hi": "Go में 'defer' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["To delay function execution", "To define a function", "To handle errors", "To create goroutines"],
        "options_hi": ["फंक्शन एक्जीक्यूशन डिले करने के लिए", "फंक्शन डिफाइन करने के लिए", "एरर हैंडलिंग के लिए", "गोरूटीन बनाने के लिए"],
        "answer_en": "To delay function execution",
        "answer_hi": "फंक्शन एक्जीक्यूशन डिले करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you declare a variable in Go without initializing it?",
        "question_hi": "Go में वेरिएबल डिक्लेयर कैसे करें बिना इनिशियलाइज किए?",
        "options_en": ["var x int", "x := 0", "x int", "let x int"],
        "options_hi": ["var x int", "x := 0", "x int", "let x int"],
        "answer_en": "var x int",
        "answer_hi": "var x int",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is a goroutine in Go?",
        "question_hi": "Go में गोरूटीन क्या है?",
        "options_en": ["A lightweight thread", "A function", "A variable", "A package"],
        "options_hi": ["एक लाइटवेट थ्रेड", "एक फंक्शन", "एक वेरिएबल", "एक पैकेज"],
        "answer_en": "A lightweight thread",
        "answer_hi": "एक लाइटवेट थ्रेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which keyword is used to create a goroutine?",
        "question_hi": "गोरूटीन बनाने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["go", "goroutine", "async", "spawn"],
        "options_hi": ["go", "goroutine", "async", "spawn"],
        "answer_en": "go",
        "answer_hi": "go",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the zero value for a boolean in Go?",
        "question_hi": "Go में बूलियन का जीरो वैल्यू क्या है?",
        "options_en": ["true", "false", "0", "nil"],
        "options_hi": ["true", "false", "0", "nil"],
        "answer_en": "false",
        "answer_hi": "false",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you check the type of a variable in Go?",
        "question_hi": "Go में वेरिएबल का टाइप कैसे चेक करें?",
        "options_en": ["typeof", "reflect.TypeOf", "type", "getType"],
        "options_hi": ["typeof", "reflect.TypeOf", "type", "getType"],
        "answer_en": "reflect.TypeOf",
        "answer_hi": "reflect.TypeOf",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of channels in Go?",
        "question_hi": "Go में चैनल का उद्देश्य क्या है?",
        "options_en": ["Communication between goroutines", "File handling", "Network operations", "Data storage"],
        "options_hi": ["गोरूटीन्स के बीच कम्युनिकेशन", "फाइल हैंडलिंग", "नेटवर्क ऑपरेशन्स", "डेटा स्टोरेज"],
        "answer_en": "Communication between goroutines",
        "answer_hi": "गोरूटीन्स के बीच कम्युनिकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you create a buffered channel in Go?",
        "question_hi": "Go में बफर्ड चैनल कैसे बनाएं?",
        "options_en": ["make(chan int)", "make(chan int, 10)", "chan int{}", "new(chan int)"],
        "options_hi": ["make(chan int)", "make(chan int, 10)", "chan int{}", "new(chan int)"],
        "answer_en": "make(chan int, 10)",
        "answer_hi": "make(chan int, 10)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What does the 'range' keyword do when used with channels?",
        "question_hi": "चैनल्स के साथ 'range' कीवर्ड क्या करता है?",
        "options_en": ["Iterates over channel values", "Creates a channel", "Closes a channel", "Checks channel capacity"],
        "options_hi": ["चैनल वैल्यूज पर इटरेट करता है", "चैनल बनाता है", "चैनल क्लोज करता है", "चैनल कैपेसिटी चेक करता है"],
        "answer_en": "Iterates over channel values",
        "answer_hi": "चैनल वैल्यूज पर इटरेट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you handle errors in Go?",
        "question_hi": "Go में एरर हैंडल कैसे करें?",
        "options_en": ["try-catch", "error return values", "panic-recover", "Both error return values and panic-recover"],
        "options_hi": ["try-catch", "एरर रिटर्न वैल्यूज", "panic-recover", "एरर रिटर्न वैल्यूज और panic-recover दोनों"],
        "answer_en": "Both error return values and panic-recover",
        "answer_hi": "एरर रिटर्न वैल्यूज और panic-recover दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of the 'interface' type in Go?",
        "question_hi": "Go में 'interface' टाइप का उद्देश्य क्या है?",
        "options_en": ["To define method signatures", "To create classes", "To handle errors", "To manage memory"],
        "options_hi": ["मेथड सिग्नेचर डिफाइन करने के लिए", "क्लासेज बनाने के लिए", "एरर हैंडलिंग के लिए", "मेमोरी मैनेज करने के लिए"],
        "answer_en": "To define method signatures",
        "answer_hi": "मेथड सिग्नेचर डिफाइन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you implement inheritance in Go?",
        "question_hi": "Go में इनहेरिटेंस कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using 'extends' keyword", "Using struct embedding", "Using interfaces", "Go doesn't support inheritance"],
        "options_hi": ["'extends' कीवर्ड का उपयोग करके", "स्ट्रक्ट एम्बेडिंग का उपयोग करके", "इंटरफेस का उपयोग करके", "Go इनहेरिटेंस सपोर्ट नहीं करता"],
        "answer_en": "Using struct embedding",
        "answer_hi": "स्ट्रक्ट एम्बेडिंग का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the difference between '==' and '=' in Go?",
        "question_hi": "Go में '==' और '=' में क्या अंतर है?",
        "options_en": ["== for comparison, = for assignment", "== for assignment, = for comparison", "Both are same", "No difference"],
        "options_hi": ["== कम्पेरिजन के लिए, = असाइनमेंट के लिए", "== असाइनमेंट के लिए, = कम्पेरिजन के लिए", "दोनों समान हैं", "कोई अंतर नहीं"],
        "answer_en": "== for comparison, = for assignment",
        "answer_hi": "== कम्पेरिजन के लिए, = असाइनमेंट के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you import a package in Go?",
        "question_hi": "Go में पैकेज कैसे इम्पोर्ट करें?",
        "options_en": ["import 'package'", "include 'package'", "using 'package'", "require 'package'"],
        "options_hi": ["import 'package'", "include 'package'", "using 'package'", "require 'package'"],
        "answer_en": "import 'package'",
        "answer_hi": "import 'package'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of the 'init()' function in Go?",
        "question_hi": "Go में 'init()' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Package initialization", "Program entry point", "Error handling", "Memory allocation"],
        "options_hi": ["पैकेज इनिशियलाइजेशन", "प्रोग्राम एंट्री पॉइंट", "एरर हैंडलिंग", "मेमोरी अलोकेशन"],
        "answer_en": "Package initialization",
        "answer_hi": "पैकेज इनिशियलाइजेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you write a unit test in Go?",
        "question_hi": "Go में यूनिट टेस्ट कैसे लिखें?",
        "options_en": ["Create file with _test.go suffix", "Use testing package", "Both A and B", "Use unittest package"],
        "options_hi": ["_test.go सफिक्स वाली फाइल बनाएं", "testing पैकेज उपयोग करें", "A और B दोनों", "unittest पैकेज उपयोग करें"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is a slice in Go?",
        "question_hi": "Go में स्लाइस क्या है?",
        "options_en": ["Dynamic array", "Fixed array", "String type", "Function type"],
        "options_hi": ["डायनामिक ऐरे", "फिक्स्ड ऐरे", "स्ट्रिंग टाइप", "फंक्शन टाइप"],
        "answer_en": "Dynamic array",
        "answer_hi": "डायनामिक ऐरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you create a slice in Go?",
        "question_hi": "Go में स्लाइस कैसे बनाएं?",
        "options_en": ["make([]int, 5)", "[]int{1,2,3}", "Both A and B", "new([]int)"],
        "options_hi": ["make([]int, 5)", "[]int{1,2,3}", "A और B दोनों", "new([]int)"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the difference between array and slice in Go?",
        "question_hi": "Go में ऐरे और स्लाइस में क्या अंतर है?",
        "options_en": ["Array has fixed size, slice is dynamic", "Slice has fixed size, array is dynamic", "No difference", "Both are same"],
        "options_hi": ["ऐरे का साइज फिक्स्ड होता है, स्लाइस डायनामिक होती है", "स्लाइस का साइज फिक्स्ड होता है, ऐरे डायनामिक होता है", "कोई अंतर नहीं", "दोनों समान हैं"],
        "answer_en": "Array has fixed size, slice is dynamic",
        "answer_hi": "ऐरे का साइज फिक्स्ड होता है, स्लाइस डायनामिक होती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How do you iterate over a map in Go?",
        "question_hi": "Go में मैप पर कैसे इटरेट करें?",
        "options_en": ["Using for-range loop", "Using for loop with index", "Using while loop", "Using do-while loop"],
        "options_hi": ["for-range लूप का उपयोग करके", "इंडेक्स के साथ for लूप का उपयोग करके", "while लूप का उपयोग करके", "do-while लूप का उपयोग करके"],
        "answer_en": "Using for-range loop",
        "answer_hi": "for-range लूप का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the zero value for a map in Go?",
        "question_hi": "Go में मैप का जीरो वैल्यू क्या है?",
        "options_en": ["nil", "empty map", "0", "false"],
        "options_hi": ["nil", "एम्प्टी मैप", "0", "false"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How do you check if a key exists in a map?",
        "question_hi": "मैप में की एक्सिस्ट करती है या नहीं कैसे चेक करें?",
        "options_en": ["value, exists := map[key]", "map.hasKey(key)", "map.contains(key)", "map.exists(key)"],
        "options_hi": ["value, exists := map[key]", "map.hasKey(key)", "map.contains(key)", "map.exists(key)"],
        "answer_en": "value, exists := map[key]",
        "answer_hi": "value, exists := map[key]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of the 'select' statement in Go?",
        "question_hi": "Go में 'select' स्टेटमेंट का उद्देश्य क्या है?",
        "options_en": ["To handle multiple channel operations", "To select from arrays", "For switch cases", "For type selection"],
        "options_hi": ["मल्टीपल चैनल ऑपरेशन्स हैंडल करने के लिए", "ऐरे से सेलेक्ट करने के लिए", "स्विच केस के लिए", "टाइप सेलेक्शन के लिए"],
        "answer_en": "To handle multiple channel operations",
        "answer_hi": "मल्टीपल चैनल ऑपरेशन्स हैंडल करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How do you convert a string to a byte slice in Go?",
        "question_hi": "Go में स्ट्रिंग को बाइट स्लाइस में कैसे कन्वर्ट करें?",
        "options_en": ["[]byte(string)", "string.ToBytes()", "bytes.Convert(string)", "byte.Parse(string)"],
        "options_hi": ["[]byte(string)", "string.ToBytes()", "bytes.Convert(string)", "byte.Parse(string)"],
        "answer_en": "[]byte(string)",
        "answer_hi": "[]byte(string)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of the 'context' package in Go?",
        "question_hi": "Go में 'context' पैकेज का उद्देश्य क्या है?",
        "options_en": ["To manage request context", "For text processing", "For file handling", "For database operations"],
        "options_hi": ["रिक्वेस्ट कॉन्टेक्स्ट मैनेज करने के लिए", "टेक्स्ट प्रोसेसिंग के लिए", "फाइल हैंडलिंग के लिए", "डेटाबेस ऑपरेशन्स के लिए"],
        "answer_en": "To manage request context",
        "answer_hi": "रिक्वेस्ट कॉन्टेक्स्ट मैनेज करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you handle JSON in Go?",
        "question_hi": "Go में JSON कैसे हैंडल करें?",
        "options_en": ["Using encoding/json package", "Using json package", "Using marshal/unmarshal", "All of the above"],
        "options_hi": ["encoding/json पैकेज का उपयोग करके", "json पैकेज का उपयोग करके", "marshal/unmarshal का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the difference between 'var' and ':=' in Go?",
        "question_hi": "Go में 'var' और ':=' में क्या अंतर है?",
        "options_en": ["var for explicit type, := for type inference", ":= for explicit type, var for type inference", "No difference", "Both are same"],
        "options_hi": ["var एक्सप्लिसिट टाइप के लिए, := टाइप इन्फेरेंस के लिए", ":= एक्सप्लिसिट टाइप के लिए, var टाइप इन्फेरेंस के लिए", "कोई अंतर नहीं", "दोनों समान हैं"],
        "answer_en": "var for explicit type, := for type inference",
        "answer_hi": "var एक्सप्लिसिट टाइप के लिए, := टाइप इन्फेरेंस के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you create a pointer in Go?",
        "question_hi": "Go में पॉइंटर कैसे बनाएं?",
        "options_en": ["&variable", "*variable", "new(type)", "Both A and C"],
        "options_hi": ["&variable", "*variable", "new(type)", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of the 'make' function in Go?",
        "question_hi": "Go में 'make' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To allocate and initialize slices, maps, and channels", "To create pointers", "To allocate memory", "To create arrays"],
        "options_hi": ["स्लाइस, मैप और चैनल अलोकेट और इनिशियलाइज करने के लिए", "पॉइंटर बनाने के लिए", "मेमोरी अलोकेट करने के लिए", "ऐरे बनाने के लिए"],
        "answer_en": "To allocate and initialize slices, maps, and channels",
        "answer_hi": "स्लाइस, मैप और चैनल अलोकेट और इनिशियलाइज करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the difference between 'make' and 'new' in Go?",
        "question_hi": "Go में 'make' और 'new' में क्या अंतर है?",
        "options_en": ["make initializes, new only allocates", "new initializes, make only allocates", "No difference", "Both are same"],
        "options_hi": ["make इनिशियलाइज करता है, new सिर्फ अलोकेट करता है", "new इनिशियलाइज करता है, make सिर्फ अलोकेट करता है", "कोई अंतर नहीं", "दोनों समान हैं"],
        "answer_en": "make initializes, new only allocates",
        "answer_hi": "make इनिशियलाइज करता है, new सिर्फ अलोकेट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "How do you handle concurrent access to shared data in Go?",
        "question_hi": "Go में शेयर्ड डेटा का कंकरंट एक्सेस कैसे हैंडल करें?",
        "options_en": ["Using mutex", "Using channels", "Using atomic operations", "All of the above"],
        "options_hi": ["म्यूटेक्स का उपयोग करके", "चैनल का उपयोग करके", "एटोमिक ऑपरेशन्स का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is a method receiver in Go?",
        "question_hi": "Go में मेथड रिसीवर क्या है?",
        "options_en": ["A parameter that defines method scope", "A return value", "An error handler", "A type converter"],
        "options_hi": ["एक पैरामीटर जो मेथड स्कोप डिफाइन करता है", "एक रिटर्न वैल्यू", "एक एरर हैंडलर", "एक टाइप कन्वर्टर"],
        "answer_en": "A parameter that defines method scope",
        "answer_hi": "एक पैरामीटर जो मेथड स्कोप डिफाइन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the difference between value and pointer receivers?",
        "question_hi": "वैल्यू और पॉइंटर रिसीवर्स में क्या अंतर है?",
        "options_en": ["Value receiver copies, pointer receiver references", "Pointer receiver copies, value receiver references", "No difference", "Both are same"],
        "options_hi": ["वैल्यू रिसीवर कॉपी करता है, पॉइंटर रिसीवर रेफरेंस करता है", "पॉइंटर रिसीवर कॉपी करता है, वैल्यू रिसीवर रेफरेंस करता है", "कोई अंतर नहीं", "दोनों समान हैं"],
        "answer_en": "Value receiver copies, pointer receiver references",
        "answer_hi": "वैल्यू रिसीवर कॉपी करता है, पॉइंटर रिसीवर रेफरेंस करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How do you implement polymorphism in Go?",
        "question_hi": "Go में पोलीमॉर्फिज्म कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using interfaces", "Using structs", "Using functions", "Using methods"],
        "options_hi": ["इंटरफेस का उपयोग करके", "स्ट्रक्ट का उपयोग करके", "फंक्शन का उपयोग करके", "मेथड का उपयोग करके"],
        "answer_en": "Using interfaces",
        "answer_hi": "इंटरफेस का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of the 'empty interface' in Go?",
        "question_hi": "Go में 'एम्प्टी इंटरफेस' का उद्देश्य क्या है?",
        "options_en": ["To hold values of any type", "To create empty structs", "For error handling", "For memory optimization"],
        "options_hi": ["किसी भी टाइप की वैल्यू होल्ड करने के लिए", "एम्प्टी स्ट्रक्ट बनाने के लिए", "एरर हैंडलिंग के लिए", "मेमोरी ऑप्टिमाइजेशन के लिए"],
        "answer_en": "To hold values of any type",
        "answer_hi": "किसी भी टाइप की वैल्यू होल्ड करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How do you handle timeouts in Go?",
        "question_hi": "Go में टाइमआउट कैसे हैंडल करें?",
        "options_en": ["Using context.WithTimeout", "Using time.After", "Using select with time.After", "All of the above"],
        "options_hi": ["context.WithTimeout का उपयोग करके", "time.After का उपयोग करके", "time.After के साथ select का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of the 'sync' package in Go?",
        "question_hi": "Go में 'sync' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For synchronization primitives", "For string operations", "For file operations", "For network operations"],
        "options_hi": ["सिंक्रोनाइजेशन प्रिमिटिव्स के लिए", "स्ट्रिंग ऑपरेशन्स के लिए", "फाइल ऑपरेशन्स के लिए", "नेटवर्क ऑपरेशन्स के लिए"],
        "answer_en": "For synchronization primitives",
        "answer_hi": "सिंक्रोनाइजेशन प्रिमिटिव्स के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How do you create a custom error in Go?",
        "question_hi": "Go में कस्टम एरर कैसे बनाएं?",
        "options_en": ["errors.New()", "fmt.Errorf()", "Implement error interface", "All of the above"],
        "options_hi": ["errors.New()", "fmt.Errorf()", "एरर इंटरफेस इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of the 'go mod' command?",
        "question_hi": "'go mod' कमांड का उद्देश्य क्या है?",
        "options_en": ["For module management", "For code formatting", "For testing", "For building"],
        "options_hi": ["मॉड्यूल मैनेजमेंट के लिए", "कोड फॉर्मेटिंग के लिए", "टेस्टिंग के लिए", "बिल्डिंग के लिए"],
        "answer_en": "For module management",
        "answer_hi": "मॉड्यूल मैनेजमेंट के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How do you write a benchmark test in Go?",
        "question_hi": "Go में बेंचमार्क टेस्ट कैसे लिखें?",
        "options_en": ["Function starting with Benchmark", "Use testing.B", "Both A and B", "Use benchmark package"],
        "options_hi": ["Benchmark से शुरू होने वाला फंक्शन", "testing.B का उपयोग करें", "A और B दोनों", "benchmark पैकेज का उपयोग करें"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of the 'go fmt' command?",
        "question_hi": "'go fmt' कमांड का उद्देश्य क्या है?",
        "options_en": ["To format Go code", "To fix imports", "To run tests", "To build code"],
        "options_hi": ["Go कोड फॉर्मेट करने के लिए", "इम्पोर्ट्स फिक्स करने के लिए", "टेस्ट रन करने के लिए", "कोड बिल्ड करने के लिए"],
        "answer_en": "To format Go code",
        "answer_hi": "Go कोड फॉर्मेट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How do you handle database operations in Go?",
        "question_hi": "Go में डेटाबेस ऑपरेशन्स कैसे हैंडल करें?",
        "options_en": ["Using database/sql package", "Using ORM libraries", "Using raw SQL", "All of the above"],
        "options_hi": ["database/sql पैकेज का उपयोग करके", "ORM लाइब्रेरीज का उपयोग करके", "रॉ SQL का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of the 'io.Reader' interface?",
        "question_hi": "'io.Reader' इंटरफेस का उद्देश्य क्या है?",
        "options_en": ["To read data", "To write data", "To close resources", "To seek positions"],
        "options_hi": ["डेटा रीड करने के लिए", "डेटा राइट करने के लिए", "रिसोर्सेज क्लोज करने के लिए", "पोजीशन्स सीक करने के लिए"],
        "answer_en": "To read data",
        "answer_hi": "डेटा रीड करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you handle HTTP requests in Go?",
        "question_hi": "Go में HTTP रिक्वेस्ट कैसे हैंडल करें?",
        "options_en": ["Using net/http package", "Creating HTTP server", "Defining handlers", "All of the above"],
        "options_hi": ["net/http पैकेज का उपयोग करके", "HTTP सर्वर बनाकर", "हैंडलर डिफाइन करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of the 'go routine' in web servers?",
        "question_hi": "वेब सर्वर में 'go routine' का उद्देश्य क्या है?",
        "options_en": ["To handle concurrent requests", "To process data", "To manage memory", "To handle errors"],
        "options_hi": ["कंकरंट रिक्वेस्ट हैंडल करने के लिए", "डेटा प्रोसेस करने के लिए", "मेमोरी मैनेज करने के लिए", "एरर हैंडल करने के लिए"],
        "answer_en": "To handle concurrent requests",
        "answer_hi": "कंकरंट रिक्वेस्ट हैंडल करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you implement middleware in Go HTTP handlers?",
        "question_hi": "Go HTTP हैंडलर में मिडलवेयर कैसे इम्प्लीमेंट करें?",
        "options_en": ["Function that takes and returns http.Handler", "Using structs", "Using interfaces", "Using channels"],
        "options_hi": ["ऐसा फंक्शन जो http.Handler लेता है और रिटर्न करता है", "स्ट्रक्ट का उपयोग करके", "इंटरफेस का उपयोग करके", "चैनल का उपयोग करके"],
        "answer_en": "Function that takes and returns http.Handler",
        "answer_hi": "ऐसा फंक्शन जो http.Handler लेता है और रिटर्न करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of the 'go vet' command?",
        "question_hi": "'go vet' कमांड का उद्देश्य क्या है?",
        "options_en": ["To report suspicious constructs", "To format code", "To run tests", "To build code"],
        "options_hi": ["सस्पीशियस कंस्ट्रक्ट रिपोर्ट करने के लिए", "कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "कोड बिल्ड करने के लिए"],
        "answer_en": "To report suspicious constructs",
        "answer_hi": "सस्पीशियस कंस्ट्रक्ट रिपोर्ट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How do you handle configuration in Go applications?",
        "question_hi": "Go एप्लिकेशन में कॉन्फिगरेशन कैसे हैंडल करें?",
        "options_en": ["Environment variables", "Config files", "Command-line flags", "All of the above"],
        "options_hi": ["एनवायरनमेंट वेरिएबल्स", "कॉन्फिग फाइल्स", "कमांड-लाइन फ्लैग्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of the 'strings' package?",
        "question_hi": "'strings' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For string manipulation", "For file operations", "For network operations", "For database operations"],
        "options_hi": ["स्ट्रिंग मैनिपुलेशन के लिए", "फाइल ऑपरेशन्स के लिए", "नेटवर्क ऑपरेशन्स के लिए", "डेटाबेस ऑपरेशन्स के लिए"],
        "answer_en": "For string manipulation",
        "answer_hi": "स्ट्रिंग मैनिपुलेशन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you handle file operations in Go?",
        "question_hi": "Go में फाइल ऑपरेशन्स कैसे हैंडल करें?",
        "options_en": ["Using os package", "Using ioutil package", "Using bufio package", "All of the above"],
        "options_hi": ["os पैकेज का उपयोग करके", "ioutil पैकेज का उपयोग करके", "bufio पैकेज का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of the 'flag' package?",
        "question_hi": "'flag' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For command-line flag parsing", "For string operations", "For file operations", "For network operations"],
        "options_hi": ["कमांड-लाइन फ्लैग पार्सिंग के लिए", "स्ट्रिंग ऑपरेशन्स के लिए", "फाइल ऑपरेशन्स के लिए", "नेटवर्क ऑपरेशन्स के लिए"],
        "answer_en": "For command-line flag parsing",
        "answer_hi": "कमांड-लाइन फ्लैग पार्सिंग के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you implement logging in Go?",
        "question_hi": "Go में लॉगिंग कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using log package", "Using third-party libraries", "Using fmt package", "All of the above"],
        "options_hi": ["log पैकेज का उपयोग करके", "थर्ड-पार्टी लाइब्रेरीज का उपयोग करके", "fmt पैकेज का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of the 'time' package?",
        "question_hi": "'time' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For time-related operations", "For string operations", "For file operations", "For network operations"],
        "options_hi": ["टाइम-रिलेटेड ऑपरेशन्स के लिए", "स्ट्रिंग ऑपरेशन्स के लिए", "फाइल ऑपरेशन्स के लिए", "नेटवर्क ऑपरेशन्स के लिए"],
        "answer_en": "For time-related operations",
        "answer_hi": "टाइम-रिलेटेड ऑपरेशन्स के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How do you handle environment variables in Go?",
        "question_hi": "Go में एनवायरनमेंट वेरिएबल्स कैसे हैंडल करें?",
        "options_en": ["Using os.Getenv", "Using os.LookupEnv", "Using flag package", "Both A and B"],
        "options_hi": ["os.Getenv का उपयोग करके", "os.LookupEnv का उपयोग करके", "flag पैकेज का उपयोग करके", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of the 'reflect' package?",
        "question_hi": "'reflect' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For runtime reflection", "For string operations", "For file operations", "For network operations"],
        "options_hi": ["रनटाइम रिफ्लेक्शन के लिए", "स्ट्रिंग ऑपरेशन्स के लिए", "फाइल ऑपरेशन्स के लिए", "नेटवर्क ऑपरेशन्स के लिए"],
        "answer_en": "For runtime reflection",
        "answer_hi": "रनटाइम रिफ्लेक्शन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you implement dependency injection in Go?",
        "question_hi": "Go में डिपेंडेंसी इंजेक्शन कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using interfaces", "Using struct composition", "Using function parameters", "All of the above"],
        "options_hi": ["इंटरफेस का उपयोग करके", "स्ट्रक्ट कम्पोजिशन का उपयोग करके", "फंक्शन पैरामीटर्स का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of the 'go generate' command?",
        "question_hi": "'go generate' कमांड का उद्देश्य क्या है?",
        "options_en": ["To run code generation tools", "To format code", "To run tests", "To build code"],
        "options_hi": ["कोड जनरेशन टूल्स रन करने के लिए", "कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "कोड बिल्ड करने के लिए"],
        "answer_en": "To run code generation tools",
        "answer_hi": "कोड जनरेशन टूल्स रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How do you handle cross-compilation in Go?",
        "question_hi": "Go में क्रॉस-कम्पाइलेशन कैसे हैंडल करें?",
        "options_en": ["Using GOOS and GOARCH environment variables", "Using build tags", "Using go build command", "All of the above"],
        "options_hi": ["GOOS और GOARCH एनवायरनमेंट वेरिएबल्स का उपयोग करके", "बिल्ड टैग्स का उपयोग करके", "go build कमांड का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of the 'unsafe' package?",
        "question_hi": "'unsafe' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For low-level programming", "For string operations", "For file operations", "For network operations"],
        "options_hi": ["लो-लेवल प्रोग्रामिंग के लिए", "स्ट्रिंग ऑपरेशन्स के लिए", "फाइल ऑपरेशन्स के लिए", "नेटवर्क ऑपरेशन्स के लिए"],
        "answer_en": "For low-level programming",
        "answer_hi": "लो-लेवल प्रोग्रामिंग के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How do you implement caching in Go?",
        "question_hi": "Go में कैशिंग कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using sync.Map", "Using third-party libraries", "Using custom implementation", "All of the above"],
        "options_hi": ["sync.Map का उपयोग करके", "थर्ड-पार्टी लाइब्रेरीज का उपयोग करके", "कस्टम इम्प्लीमेंटेशन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of the 'go doc' command?",
        "question_hi": "'go doc' कमांड का उद्देश्य क्या है?",
        "options_en": ["To view documentation", "To format code", "To run tests", "To build code"],
        "options_hi": ["डॉक्यूमेंटेशन देखने के लिए", "कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "कोड बिल्ड करने के लिए"],
        "answer_en": "To view documentation",
        "answer_hi": "डॉक्यूमेंटेशन देखने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How do you handle graceful shutdown in Go servers?",
        "question_hi": "Go सर्वर में ग्रेसफुल शटडाउन कैसे हैंडल करें?",
        "options_en": ["Using signal handling", "Using context cancellation", "Using shutdown methods", "All of the above"],
        "options_hi": ["सिग्नल हैंडलिंग का उपयोग करके", "कॉन्टेक्स्ट कैंसलेशन का उपयोग करके", "शटडाउन मेथड्स का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of the 'go list' command?",
        "question_hi": "'go list' कमांड का उद्देश्य क्या है?",
        "options_en": ["To list packages", "To format code", "To run tests", "To build code"],
        "options_hi": ["पैकेज लिस्ट करने के लिए", "कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "कोड बिल्ड करने के लिए"],
        "answer_en": "To list packages",
        "answer_hi": "पैकेज लिस्ट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you implement rate limiting in Go?",
        "question_hi": "Go में रेट लिमिटिंग कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using time.Ticker", "Using third-party libraries", "Using custom implementation", "All of the above"],
        "options_hi": ["time.Ticker का उपयोग करके", "थर्ड-पार्टी लाइब्रेरीज का उपयोग करके", "कस्टम इम्प्लीमेंटेशन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of the 'go clean' command?",
        "question_hi": "'go clean' कमांड का उद्देश्य क्या है?",
        "options_en": ["To remove object files", "To format code", "To run tests", "To build code"],
        "options_hi": ["ऑब्जेक्ट फाइल्स रिमूव करने के लिए", "कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "कोड बिल्ड करने के लिए"],
        "answer_en": "To remove object files",
        "answer_hi": "ऑब्जेक्ट फाइल्स रिमूव करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How do you implement circuit breaker pattern in Go?",
        "question_hi": "Go में सर्किट ब्रेकर पैटर्न कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using third-party libraries", "Using custom implementation", "Using channels and goroutines", "All of the above"],
        "options_hi": ["थर्ड-पार्टी लाइब्रेरीज का उपयोग करके", "कस्टम इम्प्लीमेंटेशन का उपयोग करके", "चैनल और गोरूटीन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of the 'go run' command?",
        "question_hi": "'go run' कमांड का उद्देश्य क्या है?",
        "options_en": ["To compile and run Go program", "To format code", "To run tests", "To build code"],
        "options_hi": ["Go प्रोग्राम कम्पाइल और रन करने के लिए", "कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "कोड बिल्ड करने के लिए"],
        "answer_en": "To compile and run Go program",
        "answer_hi": "Go प्रोग्राम कम्पाइल और रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How do you implement retry logic in Go?",
        "question_hi": "Go में रिट्राय लॉजिक कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using for loop with sleep", "Using third-party libraries", "Using custom implementation", "All of the above"],
        "options_hi": ["स्लीप के साथ for लूप का उपयोग करके", "थर्ड-पार्टी लाइब्रेरीज का उपयोग करके", "कस्टम इम्प्लीमेंटेशन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of the 'go test' command?",
        "question_hi": "'go test' कमांड का उद्देश्य क्या है?",
        "options_en": ["To run tests", "To format code", "To build code", "To install packages"],
        "options_hi": ["टेस्ट रन करने के लिए", "कोड फॉर्मेट करने के लिए", "कोड बिल्ड करने के लिए", "पैकेज इंस्टॉल करने के लिए"],
        "answer_en": "To run tests",
        "answer_hi": "टेस्ट रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How do you implement health checks in Go services?",
        "question_hi": "Go सर्विसेज में हेल्थ चेक कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using HTTP endpoints", "Using custom handlers", "Using third-party libraries", "All of the above"],
        "options_hi": ["HTTP एंडपॉइंट्स का उपयोग करके", "कस्टम हैंडलर का उपयोग करके", "थर्ड-पार्टी लाइब्रेरीज का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of the 'go install' command?",
        "question_hi": "'go install' कमांड का उद्देश्य क्या है?",
        "options_en": ["To install packages", "To format code", "To run tests", "To build code"],
        "options_hi": ["पैकेज इंस्टॉल करने के लिए", "कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "कोड बिल्ड करने के लिए"],
        "answer_en": "To install packages",
        "answer_hi": "पैकेज इंस्टॉल करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How do you implement feature flags in Go?",
        "question_hi": "Go में फीचर फ्लैग्स कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using environment variables", "Using configuration files", "Using third-party libraries", "All of the above"],
        "options_hi": ["एनवायरनमेंट वेरिएबल्स का उपयोग करके", "कॉन्फिगरेशन फाइल्स का उपयोग करके", "थर्ड-पार्टी लाइब्रेरीज का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of the 'go get' command?",
        "question_hi": "'go get' कमांड का उद्देश्य क्या है?",
        "options_en": ["To download and install packages", "To format code", "To run tests", "To build code"],
        "options_hi": ["पैकेज डाउनलोड और इंस्टॉल करने के लिए", "कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "कोड बिल्ड करने के लिए"],
        "answer_en": "To download and install packages",
        "answer_hi": "पैकेज डाउनलोड और इंस्टॉल करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How do you implement distributed tracing in Go?",
        "question_hi": "Go में डिस्ट्रीब्यूटेड ट्रेसिंग कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using OpenTelemetry", "Using third-party libraries", "Using custom implementation", "All of the above"],
        "options_hi": ["OpenTelemetry का उपयोग करके", "थर्ड-पार्टी लाइब्रेरीज का उपयोग करके", "कस्टम इम्प्लीमेंटेशन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of the 'go work' command?",
        "question_hi": "'go work' कमांड का उद्देश्य क्या है?",
        "options_en": ["To manage workspace", "To format code", "To run tests", "To build code"],
        "options_hi": ["वर्कस्पेस मैनेज करने के लिए", "कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "कोड बिल्ड करने के लिए"],
        "answer_en": "To manage workspace",
        "answer_hi": "वर्कस्पेस मैनेज करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How do you implement API versioning in Go?",
        "question_hi": "Go में API वर्जनिंग कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using URL paths", "Using headers", "Using query parameters", "All of the above"],
        "options_hi": ["URL पाथ्स का उपयोग करके", "हेडर का उपयोग करके", "क्वेरी पैरामीटर्स का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of the 'go fix' command?",
        "question_hi": "'go fix' कमांड का उद्देश्य क्या है?",
        "options_en": ["To update code to use new APIs", "To format code", "To run tests", "To build code"],
        "options_hi": ["नए APIs उपयोग करने के लिए कोड अपडेट करने के लिए", "कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "कोड बिल्ड करने के लिए"],
        "answer_en": "To update code to use new APIs",
        "answer_hi": "नए APIs उपयोग करने के लिए कोड अपडेट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How do you implement message queues in Go?",
        "question_hi": "Go में मैसेज क्यू कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using channels", "Using third-party libraries", "Using external systems", "All of the above"],
        "options_hi": ["चैनल का उपयोग करके", "थर्ड-पार्टी लाइब्रेरीज का उपयोग करके", "एक्सटर्नल सिस्टम्स का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of the 'go version' command?",
        "question_hi": "'go version' कमांड का उद्देश्य क्या है?",
        "options_en": ["To print Go version", "To format code", "To run tests", "To build code"],
        "options_hi": ["Go वर्जन प्रिंट करने के लिए", "कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "कोड बिल्ड करने के लिए"],
        "answer_en": "To print Go version",
        "answer_hi": "Go वर्जन प्रिंट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How do you implement authentication in Go web applications?",
        "question_hi": "Go वेब एप्लिकेशन में ऑथेंटिकेशन कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using JWT", "Using sessions", "Using OAuth", "All of the above"],
        "options_hi": ["JWT का उपयोग करके", "सेशन का उपयोग करके", "OAuth का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of the 'go env' command?",
        "question_hi": "'go env' कमांड का उद्देश्य क्या है?",
        "options_en": ["To print Go environment information", "To format code", "To run tests", "To build code"],
        "options_hi": ["Go एनवायरनमेंट इनफॉर्मेशन प्रिंट करने के लिए", "कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "कोड बिल्ड करने के लिए"],
        "answer_en": "To print Go environment information",
        "answer_hi": "Go एनवायरनमेंट इनफॉर्मेशन प्रिंट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you implement authorization in Go applications?",
        "question_hi": "Go एप्लिकेशन में ऑथराइजेशन कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using RBAC", "Using ABAC", "Using middleware", "All of the above"],
        "options_hi": ["RBAC का उपयोग करके", "ABAC का उपयोग करके", "मिडलवेयर का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of the 'go build' command?",
        "question_hi": "'go build' कमांड का उद्देश्य क्या है?",
        "options_en": ["To compile Go packages", "To format code", "To run tests", "To install packages"],
        "options_hi": ["Go पैकेज कम्पाइल करने के लिए", "कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "पैकेज इंस्टॉल करने के लिए"],
        "answer_en": "To compile Go packages",
        "answer_hi": "Go पैकेज कम्पाइल करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you implement monitoring in Go applications?",
        "question_hi": "Go एप्लिकेशन में मॉनिटरिंग कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using Prometheus metrics", "Using custom handlers", "Using third-party libraries", "All of the above"],
        "options_hi": ["Prometheus मेट्रिक्स का उपयोग करके", "कस्टम हैंडलर का उपयोग करके", "थर्ड-पार्टी लाइब्रेरीज का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of the 'go tool' command?",
        "question_hi": "'go tool' कमांड का उद्देश्य क्या है?",
        "options_en": ["To run specified Go tool", "To format code", "To run tests", "To build code"],
        "options_hi": ["स्पेसिफाइड Go टूल रन करने के लिए", "कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "कोड बिल्ड करने के लिए"],
        "answer_en": "To run specified Go tool",
        "answer_hi": "स्पेसिफाइड Go टूल रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How do you implement load balancing in Go services?",
        "question_hi": "Go सर्विसेज में लोड बैलेंसिंग कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using reverse proxies", "Using client-side logic", "Using service mesh", "All of the above"],
        "options_hi": ["रिवर्स प्रॉक्सी का उपयोग करके", "क्लाइंट-साइड लॉजिक का उपयोग करके", "सर्विस मेश का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of the 'go mod tidy' command?",
        "question_hi": "'go mod tidy' कमांड का उद्देश्य क्या है?",
        "options_en": ["To add missing and remove unused modules", "To format code", "To run tests", "To build code"],
        "options_hi": ["मिसिंग मॉड्यूल ऐड और अनयूज्ड मॉड्यूल रिमूव करने के लिए", "कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "कोड बिल्ड करने के लिए"],
        "answer_en": "To add missing and remove unused modules",
        "answer_hi": "मिसिंग मॉड्यूल ऐड और अनयूज्ड मॉड्यूल रिमूव करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you implement service discovery in Go?",
        "question_hi": "Go में सर्विस डिस्कवरी कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using Consul", "Using etcd", "Using Kubernetes", "All of the above"],
        "options_hi": ["Consul का उपयोग करके", "etcd का उपयोग करके", "Kubernetes का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of the 'go mod vendor' command?",
        "question_hi": "'go mod vendor' कमांड का उद्देश्य क्या है?",
        "options_en": ["To create vendor directory", "To format code", "To run tests", "To build code"],
        "options_hi": ["वेंडर डायरेक्टरी क्रिएट करने के लिए", "कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "कोड बिल्ड करने के लिए"],
        "answer_en": "To create vendor directory",
        "answer_hi": "वेंडर डायरेक्टरी क्रिएट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you implement gRPC in Go?",
        "question_hi": "Go में gRPC कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using google.golang.org/grpc", "Defining protobuf services", "Generating code from .proto files", "All of the above"],
        "options_hi": ["google.golang.org/grpc का उपयोग करके", "protobuf सर्विसेज डिफाइन करके", ".proto फाइल्स से कोड जनरेट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of the 'go mod download' command?",
        "question_hi": "'go mod download' कमांड का उद्देश्य क्या है?",
        "options_en": ["To download modules to local cache", "To format code", "To run tests", "To build code"],
        "options_hi": ["मॉड्यूल लोकल कैश में डाउनलोड करने के लिए", "कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "कोड बिल्ड करने के लिए"],
        "answer_en": "To download modules to local cache",
        "answer_hi": "मॉड्यूल लोकल कैश में डाउनलोड करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How do you implement WebSocket in Go?",
        "question_hi": "Go में WebSocket कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using gorilla/websocket", "Using net/http", "Using custom implementation", "All of the above"],
        "options_hi": ["gorilla/websocket का उपयोग करके", "net/http का उपयोग करके", "कस्टम इम्प्लीमेंटेशन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of the 'go mod graph' command?",
        "question_hi": "'go mod graph' कमांड का उद्देश्य क्या है?",
        "options_en": ["To print module requirement graph", "To format code", "To run tests", "To build code"],
        "options_hi": ["मॉड्यूल रिक्वायरमेंट ग्राफ प्रिंट करने के लिए", "कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "कोड बिल्ड करने के लिए"],
        "answer_en": "To print module requirement graph",
        "answer_hi": "मॉड्यूल रिक्वायरमेंट ग्राफ प्रिंट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do you implement GraphQL in Go?",
        "question_hi": "Go में GraphQL कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using gqlgen", "Using graphql-go", "Using custom implementation", "All of the above"],
        "options_hi": ["gqlgen का उपयोग करके", "graphql-go का उपयोग करके", "कस्टम इम्प्लीमेंटेशन का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of the 'go mod verify' command?",
        "question_hi": "'go mod verify' कमांड का उद्देश्य क्या है?",
        "options_en": ["To verify dependencies", "To format code", "To run tests", "To build code"],
        "options_hi": ["डिपेंडेंसीज वेरिफाई करने के लिए", "कोड फॉर्मेट करने के लिए", "टेस्ट रन करने के लिए", "कोड बिल्ड करने के लिए"],
        "answer_en": "To verify dependencies",
        "answer_hi": "डिपेंडेंसीज वेरिफाई करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How do you implement microservices in Go?",
        "question_hi": "Go में माइक्रोसर्विसेज कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using gRPC", "Using REST APIs", "Using message queues", "All of the above"],
        "options_hi": ["gRPC का उपयोग करके", "REST APIs का उपयोग करके", "मैसेज क्यू का उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    }
];
// --------------------------- GLOBAL VARS -----------------------------
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