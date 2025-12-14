const questions=[
    {
        "num": 1,
        "question_en": "What is the entry point of a Go program?",
        "question_hi": "Go प्रोग्राम का एंट्री पॉइंट क्या है?",
        "options_en": ["main function in main package", "init function", "start function", "package main"],
        "options_hi": ["main पैकेज में main फंक्शन", "init फंक्शन", "start फंक्शन", "package main"],
        "answer_en": "main function in main package",
        "answer_hi": "main पैकेज में main फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "How do you import multiple packages in Go?",
        "question_hi": "Go में मल्टीपल पैकेज कैसे इम्पोर्ट करते हैं?",
        "options_en": ["Use import block with parentheses", "Multiple import statements", "Comma separated imports", "All of the above"],
        "options_hi": ["पैरेंथेसिस के साथ import ब्लॉक उपयोग करें", "मल्टीपल import स्टेटमेंट", "कॉमा सेपरेटेड इम्पोर्ट", "उपरोक्त सभी"],
        "answer_en": "Use import block with parentheses",
        "answer_hi": "पैरेंथेसिस के साथ import ब्लॉक उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the zero value for numeric types in Go?",
        "question_hi": "Go में न्यूमेरिक टाइप के लिए जीरो वैल्यू क्या है?",
        "options_en": ["0", "nil", "undefined", "null"],
        "options_hi": ["0", "nil", "अनडिफाइंड", "null"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which method is used to convert string to integer?",
        "question_hi": "स्ट्रिंग को इंटीजर में कन्वर्ट करने के लिए कौन सी मेथड उपयोग की जाती है?",
        "options_en": ["strconv.Atoi()", "string.ToInt()", "convert.ToInt()", "strconv.ParseInt()"],
        "options_hi": ["strconv.Atoi()", "string.ToInt()", "convert.ToInt()", "strconv.ParseInt()"],
        "answer_en": "strconv.Atoi()",
        "answer_hi": "strconv.Atoi()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of the 'init' function?",
        "question_hi": "'init' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To initialize package-level variables", "To setup package state", "To run before main function", "All of the above"],
        "options_hi": ["पैकेज-लेवल वेरिएबल इनिशियलाइज़ करने के लिए", "पैकेज स्टेट सेटअप करने के लिए", "main फंक्शन से पहले रन करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "How do you create a slice from an array?",
        "question_hi": "ऐरे से स्लाइस कैसे बनाते हैं?",
        "options_en": ["array[start:end]", "slice(array)", "array.Slice()", "make(slice, array)"],
        "options_hi": ["array[start:end]", "slice(array)", "array.Slice()", "make(slice, array)"],
        "answer_en": "array[start:end]",
        "answer_hi": "array[start:end]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the difference between array and slice?",
        "question_hi": "ऐरे और स्लाइस में क्या अंतर है?",
        "options_en": ["Array has fixed size, slice is dynamic", "No difference", "Slice is faster", "Array is reference type"],
        "options_hi": ["ऐरे का साइज फिक्स्ड होता है, स्लाइस डायनामिक होती है", "कोई अंतर नहीं", "स्लाइस तेज है", "ऐरे रिफरेन्स टाइप है"],
        "answer_en": "Array has fixed size, slice is dynamic",
        "answer_hi": "ऐरे का साइज फिक्स्ड होता है, स्लाइस डायनामिक होती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which package is used for buffered I/O?",
        "question_hi": "बफर्ड I/O के लिए कौन सा पैकेज उपयोग किया जाता है?",
        "options_en": ["bufio", "io", "buffer", "buffered"],
        "options_hi": ["bufio", "io", "buffer", "buffered"],
        "answer_en": "bufio",
        "answer_hi": "bufio",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "How do you declare a function that returns multiple values?",
        "question_hi": "मल्टीपल वैल्यू रिटर्न करने वाला फंक्शन कैसे डिक्लेयर करते हैं?",
        "options_en": ["func name() (type1, type2)", "func name() return type1, type2", "func name() multiple type1, type2", "func name() (type1 and type2)"],
        "options_hi": ["func name() (type1, type2)", "func name() return type1, type2", "func name() multiple type1, type2", "func name() (type1 and type2)"],
        "answer_en": "func name() (type1, type2)",
        "answer_hi": "func name() (type1, type2)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the purpose of the 'fallthrough' keyword?",
        "question_hi": "'fallthrough' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["To continue to next case in switch", "To fall through code", "To break switch", "To skip cases"],
        "options_hi": ["स्विच में अगले केस को कंटिन्यू करने के लिए", "कोड के through फॉल करने के लिए", "स्विच ब्रेक करने के लिए", "केस स्किप करने के लिए"],
        "answer_en": "To continue to next case in switch",
        "answer_hi": "स्विच में अगले केस को कंटिन्यू करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "How do you check the type of an interface variable?",
        "question_hi": "इंटरफेस वेरिएबल का टाइप कैसे चेक करते हैं?",
        "options_en": ["Using type assertion or type switch", "typeof operator", "reflect.TypeOf", "All of the above"],
        "options_hi": ["टाइप असर्शन या टाइप स्विच उपयोग करके", "typeof ऑपरेटर", "reflect.TypeOf", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the purpose of the '...' operator in function parameters?",
        "question_hi": "फंक्शन पैरामीटर में '...' ऑपरेटर का उद्देश्य क्या है?",
        "options_en": ["To create variadic functions", "To spread arguments", "To indicate optional parameters", "To accept multiple types"],
        "options_hi": ["वेरिएडिक फंक्शन बनाने के लिए", "आर्गुमेंट स्प्रेड करने के लिए", "ऑप्शनल पैरामीटर इंडिकेट करने के लिए", "मल्टीपल टाइप एक्सेप्ट करने के लिए"],
        "answer_en": "To create variadic functions",
        "answer_hi": "वेरिएडिक फंक्शन बनाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which package is used for working with environment variables?",
        "question_hi": "एनवायरनमेंट वेरिएबल के साथ काम करने के लिए कौन सा पैकेज उपयोग किया जाता है?",
        "options_en": ["os", "env", "environment", "sys"],
        "options_hi": ["os", "env", "environment", "sys"],
        "answer_en": "os",
        "answer_hi": "os",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "How do you create a constant with computed value?",
        "question_hi": "कंप्यूटेड वैल्यू के साथ कॉन्स्टेंट कैसे बनाते हैं?",
        "options_en": ["Using const with expressions that can be computed at compile time", "Using var instead", "Using runtime computation", "It's not possible"],
        "options_hi": ["कम्पाइल टाइम पर कंप्यूट की जा सकने वाली एक्सप्रेशन के साथ const उपयोग करके", "var का उपयोग करके", "रनटाइम कंप्यूटेशन उपयोग करके", "यह संभव नहीं है"],
        "answer_en": "Using const with expressions that can be computed at compile time",
        "answer_hi": "कम्पाइल टाइम पर कंप्यूट की जा सकने वाली एक्सप्रेशन के साथ const उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of the 'unsafe' package?",
        "question_hi": "'unsafe' पैकेज का उद्देश्य क्या है?",
        "options_en": ["To perform low-level programming operations", "To handle unsafe code", "To bypass type safety", "All of the above"],
        "options_hi": ["लो-लेवल प्रोग्रामिंग ऑपरेशन परफॉर्म करने के लिए", "अनसेफ कोड हैंडल करने के लिए", "टाइप सेफ्टी बायपास करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you implement a worker pool pattern?",
        "question_hi": "वर्कर पूल पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using goroutines and channels", "Using threads", "Using async/await", "Using callbacks"],
        "options_hi": ["गोरूटीन और चैनल उपयोग करके", "थ्रेड उपयोग करके", "async/await उपयोग करके", "कॉलबैक उपयोग करके"],
        "answer_en": "Using goroutines and channels",
        "answer_hi": "गोरूटीन और चैनल उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of the 'sync.WaitGroup'?",
        "question_hi": "'sync.WaitGroup' का उद्देश्य क्या है?",
        "options_en": ["To wait for goroutines to complete", "To group goroutines", "To synchronize access", "To manage goroutine lifecycle"],
        "options_hi": ["गोरूटीन के कम्पलीट होने का इंतज़ार करने के लिए", "गोरूटीन ग्रुप करने के लिए", "एक्सेस सिंक्रोनाइज़ करने के लिए", "गोरूटीन लाइफसाइकल मैनेज करने के लिए"],
        "answer_en": "To wait for goroutines to complete",
        "answer_hi": "गोरूटीन के कम्पलीट होने का इंतज़ार करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you create a custom sort for a slice?",
        "question_hi": "स्लाइस के लिए कस्टम सॉर्ट कैसे बनाते हैं?",
        "options_en": ["Implement sort.Interface", "Use sort.Slice function", "Both A and B", "Create custom sorting algorithm"],
        "options_hi": ["sort.Interface इम्प्लीमेंट करें", "sort.Slice फंक्शन उपयोग करें", "A और B दोनों", "कस्टम सॉर्टिंग एल्गोरिदम बनाएं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the purpose of the 'context' package?",
        "question_hi": "'context' पैकेज का उद्देश्य क्या है?",
        "options_en": ["To manage request-scoped values and cancellation", "To handle application context", "To manage global state", "To store configuration"],
        "options_hi": ["रिक्वेस्ट-स्कोप्ड वैल्यू और कैंसलेशन मैनेज करने के लिए", "एप्लिकेशन कॉन्टेक्स्ट हैंडल करने के लिए", "ग्लोबल स्टेट मैनेज करने के लिए", "कॉन्फिगरेशन स्टोर करने के लिए"],
        "answer_en": "To manage request-scoped values and cancellation",
        "answer_hi": "रिक्वेस्ट-स्कोप्ड वैल्यू और कैंसलेशन मैनेज करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you handle JSON marshaling with custom field names?",
        "question_hi": "कस्टम फील्ड नाम के साथ JSON मार्शलिंग कैसे हैंडल करते हैं?",
        "options_en": ["Using struct tags", "Implementing json.Marshaler", "Both A and B", "Using custom encoding"],
        "options_hi": ["स्ट्रक्ट टैग उपयोग करके", "json.Marshaler इम्प्लीमेंट करके", "A और B दोनों", "कस्टम एन्कोडिंग उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of the 'io.Reader' interface?",
        "question_hi": "'io.Reader' इंटरफेस का उद्देश्य क्या है?",
        "options_en": ["To read data from a source", "To implement input operations", "To handle file reading", "All of the above"],
        "options_hi": ["सोर्स से डेटा रीड करने के लिए", "इनपुट ऑपरेशन इम्प्लीमेंट करने के लिए", "फाइल रीडिंग हैंडल करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you create a HTTP server with custom handlers?",
        "question_hi": "कस्टम हैंडलर के साथ HTTP सर्वर कैसे बनाते हैं?",
        "options_en": ["Use http.HandleFunc or implement http.Handler", "Create custom server", "Use net package directly", "All of the above"],
        "options_hi": ["http.HandleFunc उपयोग करें या http.Handler इम्प्लीमेंट करें", "कस्टम सर्वर बनाएं", "net पैकेज सीधे उपयोग करें", "उपरोक्त सभी"],
        "answer_en": "Use http.HandleFunc or implement http.Handler",
        "answer_hi": "http.HandleFunc उपयोग करें या http.Handler इम्प्लीमेंट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the purpose of the 'sync.Pool'?",
        "question_hi": "'sync.Pool' का उद्देश्य क्या है?",
        "options_en": ["To cache and reuse frequently allocated objects", "To pool resources", "To manage object lifecycle", "To share objects between goroutines"],
        "options_hi": ["फ्रीक्वेंटली अलोकेटेड ऑब्जेक्ट कैश और रीयूज करने के लिए", "रिसोर्स पूल करने के लिए", "ऑब्जेक्ट लाइफसाइकल मैनेज करने के लिए", "गोरूटीन के बीच ऑब्जेक्ट शेयर करने के लिए"],
        "answer_en": "To cache and reuse frequently allocated objects",
        "answer_hi": "फ्रीक्वेंटली अलोकेटेड ऑब्जेक्ट कैश और रीयूज करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How do you implement middleware in HTTP handlers?",
        "question_hi": "HTTP हैंडलर में मिडलवेयर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["By wrapping http.Handler", "Using function composition", "Both A and B", "Using decorator pattern"],
        "options_hi": ["http.Handler रैप करके", "फंक्शन कम्पोजिशन उपयोग करके", "A और B दोनों", "डेकोरेटर पैटर्न उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of the 'go:generate' directive?",
        "question_hi": "'go:generate' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To specify code generation commands", "To generate Go code", "To run build tools", "To automate code creation"],
        "options_hi": ["कोड जनरेशन कमांड स्पेसिफाई करने के लिए", "Go कोड जनरेट करने के लिए", "बिल्ड टूल रन करने के लिए", "कोड क्रिएशन ऑटोमेट करने के लिए"],
        "answer_en": "To specify code generation commands",
        "answer_hi": "कोड जनरेशन कमांड स्पेसिफाई करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How do you handle database transactions in Go?",
        "question_hi": "Go में डेटाबेस ट्रांजैक्शन कैसे हैंडल करते हैं?",
        "options_en": ["Using Begin, Commit, and Rollback methods", "With transaction context", "Using database/sql package", "All of the above"],
        "options_hi": ["Begin, Commit, और Rollback मेथड उपयोग करके", "ट्रांजैक्शन कॉन्टेक्स्ट के साथ", "database/sql पैकेज उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the purpose of the 'reflect' package?",
        "question_hi": "'reflect' पैकेज का उद्देश्य क्या है?",
        "options_en": ["To examine types and values at runtime", "For metaprogramming", "To implement generic operations", "All of the above"],
        "options_hi": ["रनटाइम पर टाइप और वैल्यू एक्जामिन करने के लिए", "मेटाप्रोग्रामिंग के लिए", "जेनरिक ऑपरेशन इम्प्लीमेंट करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How do you create a custom HTTP client?",
        "question_hi": "कस्टम HTTP क्लाइंट कैसे बनाते हैं?",
        "options_en": ["Configure http.Client with custom settings", "Implement custom transport", "Both A and B", "Use third-party libraries"],
        "options_hi": ["कस्टम सेटिंग के साथ http.Client कॉन्फिगर करें", "कस्टम ट्रांसपोर्ट इम्प्लीमेंट करें", "A और B दोनों", "थर्ड-पार्टी लाइब्रेरी उपयोग करें"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of the 'go:embed' directive?",
        "question_hi": "'go:embed' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To embed files into Go binaries", "To include external resources", "To bundle assets", "All of the above"],
        "options_hi": ["फाइल को Go बाइनरी में एम्बेड करने के लिए", "एक्सटर्नल रिसोर्स इन्क्लूड करने के लिए", "एसेट बंडल करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How do you implement graceful shutdown in HTTP server?",
        "question_hi": "HTTP सर्वर में ग्रेसफुल शटडाउन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Shutdown method with context", "Handling OS signals", "Both A and B", "Using custom shutdown handler"],
        "options_hi": ["कॉन्टेक्स्ट के साथ Shutdown मेथड उपयोग करके", "OS सिग्नल हैंडल करके", "A और B दोनों", "कस्टम शटडाउन हैंडलर उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the purpose of the 'sync.Once'?",
        "question_hi": "'sync.Once' का उद्देश्य क्या है?",
        "options_en": ["To ensure a function is called only once", "For one-time initialization", "To implement singleton pattern", "All of the above"],
        "options_hi": ["यह सुनिश्चित करने के लिए कि फंक्शन केवल एक बार कॉल हो", "वन-टाइम इनिशियलाइज़ेशन के लिए", "सिंगलटन पैटर्न इम्प्लीमेंट करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "How do you handle file operations in Go?",
        "question_hi": "Go में फाइल ऑपरेशन कैसे हैंडल करते हैं?",
        "options_en": ["Using os package functions", "With io and bufio packages", "Using filepath for paths", "All of the above"],
        "options_hi": ["os पैकेज फंक्शन उपयोग करके", "io और bufio पैकेज के साथ", "पाथ के लिए filepath उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of the 'go:build' directive?",
        "question_hi": "'go:build' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To specify build constraints", "To control compilation", "To enable conditional compilation", "All of the above"],
        "options_hi": ["बिल्ड कंस्ट्रेंट स्पेसिफाई करने के लिए", "कम्पाइलेशन कंट्रोल करने के लिए", "कंडीशनल कम्पाइलेशन एनेबल करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you implement rate limiting in Go?",
        "question_hi": "Go में रेट लिमिटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using time.Ticker", "With token bucket algorithm", "Using third-party libraries", "All of the above"],
        "options_hi": ["time.Ticker उपयोग करके", "टोकन बकेट एल्गोरिदम के साथ", "थर्ड-पार्टी लाइब्रेरी उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of the 'crypto' package?",
        "question_hi": "'crypto' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For cryptographic operations", "To implement security features", "For hashing and encryption", "All of the above"],
        "options_hi": ["क्रिप्टोग्राफिक ऑपरेशन के लिए", "सिक्योरिटी फीचर इम्प्लीमेंट करने के लिए", "हैशिंग और एन्क्रिप्शन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How do you implement custom logging in Go?",
        "question_hi": "Go में कस्टम लॉगिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement log.Logger interface", "Use third-party logging libraries", "Create custom logger struct", "All of the above"],
        "options_hi": ["log.Logger इंटरफेस इम्प्लीमेंट करें", "थर्ड-पार्टी लॉगिंग लाइब्रेरी उपयोग करें", "कस्टम लॉगर स्ट्रक्ट बनाएं", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of the 'net' package?",
        "question_hi": "'net' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For network I/O operations", "To implement network protocols", "For socket programming", "All of the above"],
        "options_hi": ["नेटवर्क I/O ऑपरेशन के लिए", "नेटवर्क प्रोटोकॉल इम्प्लीमेंट करने के लिए", "सॉकेट प्रोग्रामिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How do you handle configuration in Go applications?",
        "question_hi": "Go एप्लिकेशन में कॉन्फिगरेशन कैसे हैंडल करते हैं?",
        "options_en": ["Using environment variables", "With configuration files", "Using command-line flags", "All of the above"],
        "options_hi": ["एनवायरनमेंट वेरिएबल उपयोग करके", "कॉन्फिगरेशन फाइल के साथ", "कमांड-लाइन फ्लैग उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the purpose of the 'testing' package?",
        "question_hi": "'testing' पैकेज का उद्देश्य क्या है?",
        "options_en": ["To write and run tests", "For benchmarking code", "To generate test coverage", "All of the above"],
        "options_hi": ["टेस्ट लिखने और रन करने के लिए", "कोड बेंचमार्किंग के लिए", "टेस्ट कवरेज जनरेट करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How do you implement health checks in Go services?",
        "question_hi": "Go सर्विस में हेल्थ चेक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Create dedicated health check endpoint", "Use readiness and liveness probes", "Implement custom health check logic", "All of the above"],
        "options_hi": ["डेडिकेटेड हेल्थ चेक एंडपॉइंट बनाएं", "रीडीनेस और लिवनेस प्रोब उपयोग करें", "कस्टम हेल्थ चेक लॉजिक इम्प्लीमेंट करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of the 'expvar' package?",
        "question_hi": "'expvar' पैकेज का उद्देश्य क्या है?",
        "options_en": ["To expose public variables via HTTP", "For application metrics", "To monitor application state", "All of the above"],
        "options_hi": ["HTTP के through पब्लिक वेरिएबल एक्सपोज़ करने के लिए", "एप्लिकेशन मेट्रिक्स के लिए", "एप्लिकेशन स्टेट मॉनिटर करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How do you implement circuit breaker pattern in Go?",
        "question_hi": "Go में सर्किट ब्रेकर पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using state machine with counters", "With third-party libraries", "Implementing custom circuit breaker", "All of the above"],
        "options_hi": ["काउंटर के साथ स्टेट मशीन उपयोग करके", "थर्ड-पार्टी लाइब्रेरी के साथ", "कस्टम सर्किट ब्रेकर इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of the 'runtime' package?",
        "question_hi": "'runtime' पैकेज का उद्देश्य क्या है?",
        "options_en": ["To interact with Go runtime", "For memory statistics", "To control GC behavior", "All of the above"],
        "options_hi": ["Go रनटाइम के साथ इंटरेक्ट करने के लिए", "मेमोरी स्टैटिस्टिक्स के लिए", "GC बिहेवियर कंट्रोल करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How do you implement dependency injection in Go?",
        "question_hi": "Go में डिपेंडेंसी इंजेक्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using constructor injection", "With interface-based design", "Using third-party DI frameworks", "All of the above"],
        "options_hi": ["कंस्ट्रक्टर इंजेक्शन उपयोग करके", "इंटरफेस-बेस्ड डिजाइन के साथ", "थर्ड-पार्टी DI फ्रेमवर्क उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of the 'go:linkname' directive?",
        "question_hi": "'go:linkname' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To access unexported functions", "For low-level programming", "To link with assembly code", "All of the above"],
        "options_hi": ["अनएक्सपोर्टेड फंक्शन एक्सेस करने के लिए", "लो-लेवल प्रोग्रामिंग के लिए", "असेम्बली कोड के साथ लिंक करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "How do you implement retry logic in Go?",
        "question_hi": "Go में रिट्री लॉजिक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using for loop with backoff", "With exponential backoff strategy", "Using third-party libraries", "All of the above"],
        "options_hi": ["बैकऑफ के साथ for लूप उपयोग करके", "एक्सपोनेंशियल बैकऑफ स्ट्रैटेजी के साथ", "थर्ड-पार्टी लाइब्रेरी उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of the 'archive' package?",
        "question_hi": "'archive' पैकेज का उद्देश्य क्या है?",
        "options_en": ["To handle archive formats", "For tar and zip operations", "To compress and decompress files", "All of the above"],
        "options_hi": ["आर्काइव फॉर्मेट हैंडल करने के लिए", "tar और zip ऑपरेशन के लिए", "फाइल कंप्रेस और डिकंप्रेस करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you implement caching in Go applications?",
        "question_hi": "Go एप्लिकेशन में कैशिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using sync.Map for concurrent access", "With LRU cache implementation", "Using third-party caching libraries", "All of the above"],
        "options_hi": ["कंकरंट एक्सेस के लिए sync.Map उपयोग करके", "LRU कैश इम्प्लीमेंटेशन के साथ", "थर्ड-पार्टी कैशिंग लाइब्रेरी उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of the 'go:toolchain' directive?",
        "question_hi": "'go:toolchain' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To specify Go toolchain version", "For version compatibility", "To control toolchain selection", "All of the above"],
        "options_hi": ["Go टूलचेन वर्जन स्पेसिफाई करने के लिए", "वर्जन कंपैटिबिलिटी के लिए", "टूलचेन सिलेक्शन कंट्रोल करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How do you implement pub-sub pattern in Go?",
        "question_hi": "Go में पब-सब पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using channels and goroutines", "With third-party message brokers", "Implementing custom event system", "All of the above"],
        "options_hi": ["चैनल और गोरूटीन उपयोग करके", "थर्ड-पार्टी मैसेज ब्रोकर के साथ", "कस्टम इवेंट सिस्टम इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of the 'mime' package?",
        "question_hi": "'mime' पैकेज का उद्देश्य क्या है?",
        "options_en": ["To handle MIME types", "For content type detection", "To implement multipart forms", "All of the above"],
        "options_hi": ["MIME टाइप हैंडल करने के लिए", "कंटेंट टाइप डिटेक्शन के लिए", "मल्टीपार्ट फॉर्म इम्प्लीमेंट करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How do you implement validation in Go?",
        "question_hi": "Go में वैलिडेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using struct tags with validation libraries", "Implementing custom validation functions", "Using third-party validation packages", "All of the above"],
        "options_hi": ["वैलिडेशन लाइब्रेरी के साथ स्ट्रक्ट टैग उपयोग करके", "कस्टम वैलिडेशन फंक्शन इम्प्लीमेंट करके", "थर्ड-पार्टी वैलिडेशन पैकेज उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of the 'go:debug' directive?",
        "question_hi": "'go:debug' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To control debug information", "For debugging support", "To enable debug features", "All of the above"],
        "options_hi": ["डिबग इनफार्मेशन कंट्रोल करने के लिए", "डिबगिंग सपोर्ट के लिए", "डिबग फीचर एनेबल करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How do you implement feature flags in Go?",
        "question_hi": "Go में फीचर फ्लैग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using configuration management", "With environment variables", "Implementing feature toggle system", "All of the above"],
        "options_hi": ["कॉन्फिगरेशन मैनेजमेंट उपयोग करके", "एनवायरनमेंट वेरिएबल के साथ", "फीचर टॉगल सिस्टम इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of the 'hash' package?",
        "question_hi": "'hash' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For hash function implementations", "To compute checksums", "For cryptographic hashing", "All of the above"],
        "options_hi": ["हैश फंक्शन इम्प्लीमेंटेशन के लिए", "चेकसम कंप्यूट करने के लिए", "क्रिप्टोग्राफिक हैशिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you implement API versioning in Go?",
        "question_hi": "Go में API वर्जनिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using URL path versioning", "With header-based versioning", "Implementing version handlers", "All of the above"],
        "options_hi": ["URL पाथ वर्जनिंग उपयोग करके", "हेडर-बेस्ड वर्जनिंग के साथ", "वर्जन हैंडलर इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of the 'go:noinline' directive?",
        "question_hi": "'go:noinline' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To prevent function inlining", "For performance optimization", "To control compiler behavior", "All of the above"],
        "options_hi": ["फंक्शन इनलाइनिंग प्रिवेंट करने के लिए", "परफॉर्मेंस ऑप्टिमाइज़ेशन के लिए", "कम्पाइलर बिहेवियर कंट्रोल करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How do you implement distributed tracing in Go?",
        "question_hi": "Go में डिस्ट्रीब्यूटेड ट्रेसिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using OpenTelemetry", "With third-party tracing libraries", "Implementing context propagation", "All of the above"],
        "options_hi": ["OpenTelemetry उपयोग करके", "थर्ड-पार्टी ट्रेसिंग लाइब्रेरी के साथ", "कॉन्टेक्स्ट प्रोपगेशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of the 'image' package?",
        "question_hi": "'image' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For image processing", "To handle image formats", "For image manipulation", "All of the above"],
        "options_hi": ["इमेज प्रोसेसिंग के लिए", "इमेज फॉर्मेट हैंडल करने के लिए", "इमेज मैनिपुलेशन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you implement background jobs in Go?",
        "question_hi": "Go में बैकग्राउंड जॉब कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using goroutines with context", "With worker pools", "Using third-party job queues", "All of the above"],
        "options_hi": ["कॉन्टेक्स्ट के साथ गोरूटीन उपयोग करके", "वर्कर पूल के साथ", "थर्ड-पार्टी जॉब क्यू उपयोग करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of the 'go:cgo_unsafe_args' directive?",
        "question_hi": "'go:cgo_unsafe_args' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["For CGO argument handling", "To optimize CGO calls", "For unsafe CGO operations", "All of the above"],
        "options_hi": ["CGO आर्गुमेंट हैंडलिंग के लिए", "CGO कॉल ऑप्टिमाइज़ करने के लिए", "अनसेफ CGO ऑपरेशन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How do you implement API documentation in Go?",
        "question_hi": "Go में API डॉक्युमेंटेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using godoc comments", "With Swagger/OpenAPI", "Implementing custom documentation", "All of the above"],
        "options_hi": ["godoc कमेंट उपयोग करके", "Swagger/OpenAPI के साथ", "कस्टम डॉक्युमेंटेशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of the 'path' package?",
        "question_hi": "'path' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For path manipulation", "To handle URL paths", "For file path operations", "All of the above"],
        "options_hi": ["पाथ मैनिपुलेशन के लिए", "URL पाथ हैंडल करने के लिए", "फाइल पाथ ऑपरेशन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How do you implement configuration reloading in Go?",
        "question_hi": "Go में कॉन्फिगरेशन रीलोडिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using file watchers", "With SIGHUP signal handling", "Implementing hot reload", "All of the above"],
        "options_hi": ["फाइल वॉचर उपयोग करके", "SIGHUP सिग्नल हैंडलिंग के साथ", "हॉट रीलोड इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of the 'go:uintptrescapes' directive?",
        "question_hi": "'go:uintptrescapes' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["For uintptr escape analysis", "To handle pointer conversions", "For unsafe pointer operations", "All of the above"],
        "options_hi": ["uintptr एस्केप एनालिसिस के लिए", "पॉइंटर कन्वर्जन हैंडल करने के लिए", "अनसेफ पॉइंटर ऑपरेशन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How do you implement API authentication in Go?",
        "question_hi": "Go में API ऑथेंटिकेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using JWT tokens", "With OAuth2 implementation", "Implementing API keys", "All of the above"],
        "options_hi": ["JWT टोकन उपयोग करके", "OAuth2 इम्प्लीमेंटेशन के साथ", "API की इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of the 'container' package?",
        "question_hi": "'container' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For container data structures", "To implement lists and rings", "For heap operations", "All of the above"],
        "options_hi": ["कंटेनर डेटा स्ट्रक्चर के लिए", "लिस्ट और रिंग इम्प्लीमेंट करने के लिए", "हीप ऑपरेशन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you implement feature toggles in Go?",
        "question_hi": "Go में फीचर टॉगल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using configuration management", "With feature flag services", "Implementing dynamic toggles", "All of the above"],
        "options_hi": ["कॉन्फिगरेशन मैनेजमेंट उपयोग करके", "फीचर फ्लैग सर्विस के साथ", "डायनामिक टॉगल इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of the 'go:noescape' directive?",
        "question_hi": "'go:noescape' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To prevent pointer escaping", "For performance optimization", "To control escape analysis", "All of the above"],
        "options_hi": ["पॉइंटर एस्केपिंग प्रिवेंट करने के लिए", "परफॉर्मेंस ऑप्टिमाइज़ेशन के लिए", "एस्केप एनालिसिस कंट्रोल करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How do you implement API rate limiting by user?",
        "question_hi": "यूजर के by API रेट लिमिटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using token bucket per user", "With Redis for distributed rate limiting", "Implementing user-based quotas", "All of the above"],
        "options_hi": ["प्रति यूजर टोकन बकेट उपयोग करके", "डिस्ट्रीब्यूटेड रेट लिमिटिंग के लिए Redis के साथ", "यूजर-बेस्ड कोटा इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of the 'index/suffixarray' package?",
        "question_hi": "'index/suffixarray' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For text indexing", "To implement substring search", "For efficient string matching", "All of the above"],
        "options_hi": ["टेक्स्ट इंडेक्सिंग के लिए", "सबस्ट्रिंग सर्च इम्प्लीमेंट करने के लिए", "एफिशिएंट स्ट्रिंग मैचिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How do you implement distributed locks in Go?",
        "question_hi": "Go में डिस्ट्रीब्यूटेड लॉक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Redis with SETNX", "With etcd for coordination", "Implementing consensus algorithms", "All of the above"],
        "options_hi": ["SETNX के साथ Redis उपयोग करके", "कोऑर्डिनेशन के लिए etcd के साथ", "कंसेंसस एल्गोरिदम इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of the 'go:systemstack' directive?",
        "question_hi": "'go:systemstack' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To run on system stack", "For low-level operations", "To avoid stack growth", "All of the above"],
        "options_hi": ["सिस्टम स्टैक पर रन करने के लिए", "लो-लेवल ऑपरेशन के लिए", "स्टैक ग्रोथ एवॉइड करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How do you implement content negotiation in HTTP APIs?",
        "question_hi": "HTTP API में कंटेंट नेगोशिएशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using Accept headers", "With content type negotiation", "Implementing format handlers", "All of the above"],
        "options_hi": ["Accept हेडर उपयोग करके", "कंटेंट टाइप नेगोशिएशन के साथ", "फॉर्मेट हैंडलर इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of the 'debug' package?",
        "question_hi": "'debug' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For debugging support", "To access debug information", "For runtime debugging", "All of the above"],
        "options_hi": ["डिबगिंग सपोर्ट के लिए", "डिबग इनफार्मेशन एक्सेस करने के लिए", "रनटाइम डिबगिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How do you implement API pagination in Go?",
        "question_hi": "Go में API पेजिनेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using limit and offset", "With cursor-based pagination", "Implementing page tokens", "All of the above"],
        "options_hi": ["limit और offset उपयोग करके", "कर्सर-बेस्ड पेजिनेशन के साथ", "पेज टोकन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of the 'go:nowritebarrierrec' directive?",
        "question_hi": "'go:nowritebarrierrec' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To prevent write barriers", "For GC optimization", "To control memory management", "All of the above"],
        "options_hi": ["राइट बैरियर प्रिवेंट करने के लिए", "GC ऑप्टिमाइज़ेशन के लिए", "मेमोरी मैनेजमेंट कंट्रोल करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How do you implement API version deprecation?",
        "question_hi": "API वर्जन डिप्रिकेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using deprecation headers", "With sunset dates", "Implementing migration paths", "All of the above"],
        "options_hi": ["डिप्रिकेशन हेडर उपयोग करके", "सनसेट डेट के साथ", "माइग्रेशन पाथ इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of the 'runtime/pprof' package?",
        "question_hi": "'runtime/pprof' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For performance profiling", "To collect runtime metrics", "For CPU and memory profiling", "All of the above"],
        "options_hi": ["परफॉर्मेंस प्रोफाइलिंग के लिए", "रनटाइम मेट्रिक्स कलेक्ट करने के लिए", "CPU और मेमोरी प्रोफाइलिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How do you implement API response caching?",
        "question_hi": "API रिस्पॉन्स कैशिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using ETag headers", "With Last-Modified headers", "Implementing cache control", "All of the above"],
        "options_hi": ["ETag हेडर उपयोग करके", "Last-Modified हेडर के साथ", "कैश कंट्रोल इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of the 'go:yeswritebarrierrec' directive?",
        "question_hi": "'go:yeswritebarrierrec' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To allow write barriers", "For specific GC scenarios", "To control write barrier behavior", "All of the above"],
        "options_hi": ["राइट बैरियर अलाउ करने के लिए", "स्पेसिफिक GC सीनारियो के लिए", "राइट बैरियर बिहेवियर कंट्रोल करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How do you implement API request validation?",
        "question_hi": "API रिक्वेस्ट वैलिडेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using struct validation", "With custom validation middleware", "Implementing request sanitization", "All of the above"],
        "options_hi": ["स्ट्रक्ट वैलिडेशन उपयोग करके", "कस्टम वैलिडेशन मिडलवेयर के साथ", "रिक्वेस्ट सैनिटाइज़ेशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of the 'runtime/trace' package?",
        "question_hi": "'runtime/trace' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For execution tracing", "To trace goroutine execution", "For performance analysis", "All of the above"],
        "options_hi": ["एक्सेक्यूशन ट्रेसिंग के लिए", "गोरूटीन एक्सेक्यूशन ट्रेस करने के लिए", "परफॉर्मेंस एनालिसिस के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How do you implement API error handling standardization?",
        "question_hi": "API एरर हैंडलिंग स्टैंडर्डाइज़ेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using standardized error responses", "With error code systems", "Implementing error logging", "All of the above"],
        "options_hi": ["स्टैंडर्डाइज्ड एरर रिस्पॉन्स उपयोग करके", "एरर कोड सिस्टम के साथ", "एरर लॉगिंग इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of the 'go:notinheap' directive?",
        "question_hi": "'go:notinheap' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To prevent heap allocation", "For stack-only types", "To control memory allocation", "All of the above"],
        "options_hi": ["हीप अलोकेशन प्रिवेंट करने के लिए", "स्टैक-ओनली टाइप के लिए", "मेमोरी अलोकेशन कंट्रोल करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "How do you implement API request/response logging?",
        "question_hi": "API रिक्वेस्ट/रिस्पॉन्स लॉगिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using middleware for logging", "With structured logging", "Implementing request tracing", "All of the above"],
        "options_hi": ["लॉगिंग के लिए मिडलवेयर उपयोग करके", "स्ट्रक्चर्ड लॉगिंग के साथ", "रिक्वेस्ट ट्रेसिंग इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of the 'runtime/metrics' package?",
        "question_hi": "'runtime/metrics' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For runtime metrics collection", "To monitor Go runtime", "For performance monitoring", "All of the above"],
        "options_hi": ["रनटाइम मेट्रिक्स कलेक्शन के लिए", "Go रनटाइम मॉनिटर करने के लिए", "परफॉर्मेंस मॉनिटरिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you implement API contract testing?",
        "question_hi": "API कॉन्ट्रैक्ट टेस्टिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using OpenAPI specifications", "With contract testing tools", "Implementing schema validation", "All of the above"],
        "options_hi": ["OpenAPI स्पेसिफिकेशन उपयोग करके", "कॉन्ट्रैक्ट टेस्टिंग टूल के साथ", "स्कीमा वैलिडेशन इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of the 'go:yesescape' directive?",
        "question_hi": "'go:yesescape' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To force escape analysis", "For specific allocation scenarios", "To control variable escaping", "All of the above"],
        "options_hi": ["एस्केप एनालिसिस फोर्स करने के लिए", "स्पेसिफिक अलोकेशन सीनारियो के लिए", "वेरिएबल एस्केपिंग कंट्रोल करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "How do you implement API load testing?",
        "question_hi": "API लोड टेस्टिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using load testing tools", "With goroutines for concurrent requests", "Implementing performance benchmarks", "All of the above"],
        "options_hi": ["लोड टेस्टिंग टूल उपयोग करके", "कंकरंट रिक्वेस्ट के लिए गोरूटीन के साथ", "परफॉर्मेंस बेंचमार्क इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of the 'runtime/coverage' package?",
        "question_hi": "'runtime/coverage' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For code coverage analysis", "To collect coverage data", "For test coverage reporting", "All of the above"],
        "options_hi": ["कोड कवरेज एनालिसिस के लिए", "कवरेज डेटा कलेक्ट करने के लिए", "टेस्ट कवरेज रिपोर्टिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you implement API security headers?",
        "question_hi": "API सिक्योरिटी हेडर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using security middleware", "With CSP headers", "Implementing security best practices", "All of the above"],
        "options_hi": ["सिक्योरिटी मिडलवेयर उपयोग करके", "CSP हेडर के साथ", "सिक्योरिटी बेस्ट प्रैक्टिस इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of the 'go:norace' directive?",
        "question_hi": "'go:norace' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To disable race detection", "For specific functions", "To improve performance", "All of the above"],
        "options_hi": ["रेस डिटेक्शन डिसेबल करने के लिए", "स्पेसिफिक फंक्शन के लिए", "परफॉर्मेंस इम्प्रूव करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How do you implement API documentation generation?",
        "question_hi": "API डॉक्युमेंटेशन जनरेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using godoc tool", "With Swagger code generation", "Implementing custom docs", "All of the above"],
        "options_hi": ["godoc टूल उपयोग करके", "Swagger कोड जनरेशन के साथ", "कस्टम डॉक्स इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of the 'runtime/debug' package?",
        "question_hi": "'runtime/debug' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For runtime debugging utilities", "To access debug information", "For garbage collection control", "All of the above"],
        "options_hi": ["रनटाइम डिबगिंग यूटिलिटी के लिए", "डिबग इनफार्मेशन एक्सेस करने के लिए", "गार्बेज कलेक्शन कंट्रोल के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How do you implement API monitoring and alerting?",
        "question_hi": "API मॉनिटरिंग और अलर्टिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using metrics collection", "With alerting rules", "Implementing health checks", "All of the above"],
        "options_hi": ["मेट्रिक्स कलेक्शन उपयोग करके", "अलर्टिंग रूल के साथ", "हेल्थ चेक इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of the 'go:uintptrkeepalive' directive?",
        "question_hi": "'go:uintptrkeepalive' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To keep uintptr references alive", "For CGO interoperability", "To prevent premature GC", "All of the above"],
        "options_hi": ["uintptr रिफरेन्स अलाइव रखने के लिए", "CGO इंटरऑपरेबिलिटी के लिए", "प्रीमेच्योर GC प्रिवेंट करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "How do you implement API performance optimization?",
        "question_hi": "API परफॉर्मेंस ऑप्टिमाइज़ेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using profiling tools", "With database optimization", "Implementing caching strategies", "All of the above"],
        "options_hi": ["प्रोफाइलिंग टूल उपयोग करके", "डेटाबेस ऑप्टिमाइज़ेशन के साथ", "कैशिंग स्ट्रैटेजी इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of the 'go:linkname' directive for runtime?",
        "question_hi": "रनटाइम के लिए 'go:linkname' डायरेक्टिव का उद्देश्य क्या है?",
        "options_en": ["To access runtime internals", "For low-level operations", "To implement system calls", "All of the above"],
        "options_hi": ["रनटाइम इंटर्नल एक्सेस करने के लिए", "लो-लेवल ऑपरेशन के लिए", "सिस्टम कॉल इम्प्लीमेंट करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How do you implement API deployment strategies?",
        "question_hi": "API डिप्लॉयमेंट स्ट्रैटेजी कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using blue-green deployment", "With canary releases", "Implementing rolling updates", "All of the above"],
        "options_hi": ["ब्लू-ग्रीन डिप्लॉयमेंट उपयोग करके", "कैनरी रिलीज के साथ", "रोलिंग अपडेट इम्प्लीमेंट करके", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    }
]
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