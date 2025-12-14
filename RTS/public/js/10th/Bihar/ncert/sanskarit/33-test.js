const questions=[
    {
        "num": 1,
        "question_en": "What is the entry point of a Go program?",
        "question_hi": "Go प्रोग्राम का एंट्री पॉइंट क्या है?",
        "options_en": ["main function in main package", "init function", "start function", "begin function"],
        "options_hi": ["मेन पैकेज में main फंक्शन", "init फंक्शन", "start फंक्शन", "begin फंक्शन"],
        "answer_en": "main function in main package",
        "answer_hi": "मेन पैकेज में main फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which command compiles and installs a Go package?",
        "question_hi": "कौन सा कमांड Go पैकेज को कंपाइल और इंस्टॉल करता है?",
        "options_en": ["go install", "go build", "go compile", "go run"],
        "options_hi": ["go install", "go build", "go compile", "go run"],
        "answer_en": "go install",
        "answer_hi": "go install",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the zero value for a string?",
        "question_hi": "स्ट्रिंग का जीरो वैल्यू क्या है?",
        "options_en": ["Empty string", "nil", "null", "undefined"],
        "options_hi": ["खाली स्ट्रिंग", "nil", "null", "अनडिफाइंड"],
        "answer_en": "Empty string",
        "answer_hi": "खाली स्ट्रिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you import multiple packages in Go?",
        "question_hi": "Go में मल्टीपल पैकेज कैसे इम्पोर्ट करते हैं?",
        "options_en": ["Parenthesized import block", "Multiple import statements", "Comma separated", "Both A and B"],
        "options_hi": ["कोष्ठक वाला इम्पोर्ट ब्लॉक", "मल्टीपल इम्पोर्ट स्टेटमेंट", "कॉमा सेपरेटेड", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the purpose of the blank identifier (_)?",
        "question_hi": "ब्लैंक आइडेंटिफायर (_) का उद्देश्य क्या है?",
        "options_en": ["Ignore return values", "Unused variables", "Placeholder", "All of the above"],
        "options_hi": ["रिटर्न वैल्यू इग्नोर करना", "अनयूज्ड वेरिएबल", "प्लेसहोल्डर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which type is used for Unicode code points in Go?",
        "question_hi": "Go में यूनिकोड कोड पॉइंट के लिए किस टाइप का उपयोग किया जाता है?",
        "options_en": ["rune", "char", "unicode", "utf8"],
        "options_hi": ["rune", "char", "unicode", "utf8"],
        "answer_en": "rune",
        "answer_hi": "rune",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "How do you declare a variable with type inference?",
        "question_hi": "टाइप इनफेरेंस के साथ वेरिएबल कैसे डिक्लेयर करते हैं?",
        "options_en": ["name := value", "var name = value", "Both A and B", "auto name = value"],
        "options_hi": ["name := value", "var name = value", "A और B दोनों", "auto name = value"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the default value of an integer variable?",
        "question_hi": "इंटीजर वेरिएबल का डिफॉल्ट वैल्यू क्या है?",
        "options_en": ["0", "nil", "undefined", "-1"],
        "options_hi": ["0", "nil", "अनडिफाइंड", "-1"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which loop construct does Go support?",
        "question_hi": "Go कौन सा लूप कंस्ट्रक्ट सपोर्ट करता है?",
        "options_en": ["Only for loop", "for and while", "for, while, do-while", "Only while loop"],
        "options_hi": ["केवल for लूप", "for और while", "for, while, do-while", "केवल while लूप"],
        "answer_en": "Only for loop",
        "answer_hi": "केवल for लूप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "How do you create an infinite loop in Go?",
        "question_hi": "Go में इनफिनाइट लूप कैसे बनाते हैं?",
        "options_en": ["for {}", "for true {}", "while true {}", "Both A and B"],
        "options_hi": ["for {}", "for true {}", "while true {}", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the purpose of the 'fallthrough' keyword?",
        "question_hi": "'fallthrough' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Continue to next case in switch", "Fall to default case", "Break out of switch", "Skip case"],
        "options_hi": ["स्विच में अगले केस को कंटिन्यू करना", "डिफॉल्ट केस में फॉल करना", "स्विच से बाहर निकलना", "केस स्किप करना"],
        "answer_en": "Continue to next case in switch",
        "answer_hi": "स्विच में अगले केस को कंटिन्यू करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you declare a function type?",
        "question_hi": "फंक्शन टाइप कैसे डिक्लेयर करते हैं?",
        "options_en": ["type FuncName func(params) returnType", "func type FuncName(params) returnType", "function FuncName type", "typedef func FuncName"],
        "options_hi": ["type FuncName func(params) returnType", "func type FuncName(params) returnType", "function FuncName type", "typedef func FuncName"],
        "answer_en": "type FuncName func(params) returnType",
        "answer_hi": "type FuncName func(params) returnType",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is a variadic function?",
        "question_hi": "वेरिएडिक फंक्शन क्या है?",
        "options_en": ["Function that takes variable number of arguments", "Variable function", "Dynamic function", "Generic function"],
        "options_hi": ["फंक्शन जो वेरिएबल नंबर ऑफ आर्गुमेंट लेता है", "वेरिएबल फंक्शन", "डायनामिक फंक्शन", "जेनरिक फंक्शन"],
        "answer_en": "Function that takes variable number of arguments",
        "answer_hi": "फंक्शन जो वेरिएबल नंबर ऑफ आर्गुमेंट लेता है",
        "attempted": false,
        "selected": ""
    },
    // {
    //     "num": 14,
    //     "question_en": "How do you define a variadic parameter?",
    //     "question_hi": "वेरिएडिक पैरामीटर कैसे डिफाइन करते हैं?",
    //     "options_en": "... before type", "... after type", "params...", "variable params"],
    //     "options_hi": ["टाइप से पहले ...", "टाइप के बाद ...", "params...", "variable params"],
    //     "answer_en": "... before type",
    //     "answer_hi": "टाइप से पहले ...",
    //     "attempted": false,
    //     "selected": ""
    // },
    {
        "num": 15,
        "question_en": "What is method overloading in Go?",
        "question_hi": "Go में मेथड ओवरलोडिंग क्या है?",
        "options_en": ["Not supported in Go", "Multiple methods with same name", "Method with different parameters", "Polymorphism"],
        "options_hi": ["Go में सपोर्टेड नहीं", "समान नाम वाली मल्टीपल मेथड", "अलग-अलग पैरामीटर वाली मेथड", "पॉलीमॉर्फिज्म"],
        "answer_en": "Not supported in Go",
        "answer_hi": "Go में सपोर्टेड नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you make a struct field immutable outside its package?",
        "question_hi": "स्ट्रक्चर फील्ड को उसके पैकेज के बाहर इम्यूटेबल कैसे बनाते हैं?",
        "options_en": ["Make field name lowercase", "Use const keyword", "Make field private", "Both A and C"],
        "options_hi": ["फील्ड नेम को लोअरकेस बनाएं", "const कीवर्ड का उपयोग करें", "फील्ड को प्राइवेट बनाएं", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of embedded fields in structs?",
        "question_hi": "स्ट्रक्चर में एम्बेडेड फील्ड का उद्देश्य क्या है?",
        "options_en": ["Type composition", "Inheritance simulation", "Code reuse", "All of the above"],
        "options_hi": ["टाइप कम्पोजिशन", "इनहेरिटेंस सिमुलेशन", "कोड रीयूज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How do you check interface implementation at compile time?",
        "question_hi": "कंपाइल टाइम पर इंटरफेस इम्प्लीमेंटेशन कैसे चेक करते हैं?",
        "options_en": ["var _ InterfaceType = (*ConcreteType)(nil)", "compile check", "implements keyword", "runtime check"],
        "options_hi": ["var _ InterfaceType = (*ConcreteType)(nil)", "compile check", "implements कीवर्ड", "रनटाइम चेक"],
        "answer_en": "var _ InterfaceType = (*ConcreteType)(nil)",
        "answer_hi": "var _ InterfaceType = (*ConcreteType)(nil)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is type switching in Go?",
        "question_hi": "Go में टाइप स्विचिंग क्या है?",
        "options_en": ["Switch on type of interface value", "Type conversion in switch", "Dynamic typing", "Type assertion in switch"],
        "options_hi": ["इंटरफेस वैल्यू के टाइप पर स्विच करना", "स्विच में टाइप कन्वर्जन", "डायनामिक टाइपिंग", "स्विच में टाइप असर्शन"],
        "answer_en": "Switch on type of interface value",
        "answer_hi": "इंटरफेस वैल्यू के टाइप पर स्विच करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you handle multiple errors in Go?",
        "question_hi": "Go में मल्टीपल एरर कैसे हैंडल करते हैं?",
        "options_en": ["errors.Join()", "Custom error wrapping", "Error collections", "All of the above"],
        "options_hi": ["errors.Join()", "कस्टम एरर रैपिंग", "एरर कलेक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of error wrapping?",
        "question_hi": "एरर रैपिंग का उद्देश्य क्या है?",
        "options_en": ["Add context to errors", "Chain errors", "Preserve original error", "All of the above"],
        "options_hi": ["एरर में कॉन्टेक्स्ट ऐड करना", "एरर चेन करना", "ओरिजिनल एरर प्रिजर्व करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How do you wrap an error with additional context?",
        "question_hi": "एडिशनल कॉन्टेक्स्ट के साथ एरर कैसे रैप करते हैं?",
        "options_en": ["fmt.Errorf with %w", "errors.Wrap()", "WrapError function", "Both A and B"],
        "options_hi": ["%w के साथ fmt.Errorf", "errors.Wrap()", "WrapError फंक्शन", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is a bidirectional channel?",
        "question_hi": "बायडायरेक्शनल चैनल क्या है?",
        "options_en": ["Default channel type", "Can send and receive", "chan keyword without direction", "All of the above"],
        "options_hi": ["डिफॉल्ट चैनल टाइप", "सेंड और रिसीव कर सकता है", "दिशा के बिना chan कीवर्ड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How do you create a send-only channel?",
        "question_hi": "सेंड-ओनली चैनल कैसे बनाते हैं?",
        "options_en": ["chan<- type", "<-chan type", "send chan type", "channel send type"],
        "options_hi": ["chan<- type", "<-chan type", "send chan type", "channel send type"],
        "answer_en": "chan<- type",
        "answer_hi": "chan<- type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is channel direction in function parameters?",
        "question_hi": "फंक्शन पैरामीटर में चैनल डायरेक्शन क्या है?",
        "options_en": ["Restrict channel usage", "Type safety", "Document intent", "All of the above"],
        "options_hi": ["चैनल यूसेज रिस्ट्रिक्ट करना", "टाइप सेफ्टी", "इंटेंट डॉक्युमेंट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the purpose of sync.Once?",
        "question_hi": "sync.Once का उद्देश्य क्या है?",
        "options_en": ["Execute exactly once", "Thread-safe initialization", "Singleton pattern", "All of the above"],
        "options_hi": ["एक्सेक्टली एक बार एक्जिक्यूट करना", "थ्रेड-सेफ इनिशियलाइज़ेशन", "सिंगलटन पैटर्न", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "How do you use sync.Once?",
        "question_hi": "sync.Once का उपयोग कैसे करते हैं?",
        "options_en": ["once.Do(func())", "sync.Once.Do()", "once.Execute()", "Once.run()"],
        "options_hi": ["once.Do(func())", "sync.Once.Do()", "once.Execute()", "Once.run()"],
        "answer_en": "once.Do(func())",
        "answer_hi": "once.Do(func())",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is a read-write mutex?",
        "question_hi": "रीड-राइट म्यूटेक्स क्या है?",
        "options_en": ["sync.RWMutex", "Allows multiple readers", "Single writer", "All of the above"],
        "options_hi": ["sync.RWMutex", "मल्टीपल रीडर की अनुमति देता है", "सिंगल राइटर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "How do you acquire a read lock?",
        "question_hi": "रीड लॉक कैसे एक्वायर करते हैं?",
        "options_en": ["RWMutex.RLock()", "mutex.ReadLock()", "lock.Read()", "acquireRead()"],
        "options_hi": ["RWMutex.RLock()", "mutex.ReadLock()", "lock.Read()", "acquireRead()"],
        "answer_en": "RWMutex.RLock()",
        "answer_hi": "RWMutex.RLock()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is context cancellation?",
        "question_hi": "कॉन्टेक्स्ट कैंसलेशन क्या है?",
        "options_en": ["Signal to stop operations", "Propagate cancellation", "Graceful shutdown", "All of the above"],
        "options_hi": ["ऑपरेशन रोकने का सिग्नल", "कैंसलेशन प्रोपेगेट करना", "ग्रेसफुल शटडाउन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "How do you create a cancellable context?",
        "question_hi": "कैंसलेबल कॉन्टेक्स्ट कैसे बनाते हैं?",
        "options_en": ["context.WithCancel()", "context.WithTimeout()", "context.WithDeadline()", "All of the above"],
        "options_hi": ["context.WithCancel()", "context.WithTimeout()", "context.WithDeadline()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the purpose of HTTP middleware?",
        "question_hi": "HTTP मिडलवेयर का उद्देश्य क्या है?",
        "options_en": ["Intercept HTTP requests", "Add cross-cutting concerns", "Request processing chain", "All of the above"],
        "options_hi": ["HTTP रिक्वेस्ट इंटरसेप्ट करना", "क्रॉस-कटिंग कंसर्न ऐड करना", "रिक्वेस्ट प्रोसेसिंग चेन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "How do you create HTTP middleware in Go?",
        "question_hi": "Go में HTTP मिडलवेयर कैसे बनाते हैं?",
        "options_en": ["func(http.Handler) http.Handler", "Handler wrapper", "Middleware chain", "All of the above"],
        "options_hi": ["func(http.Handler) http.Handler", "हैंडलर रैपर", "मिडलवेयर चेन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is JSON marshaling?",
        "question_hi": "JSON मार्शलिंग क्या है?",
        "options_en": ["Convert Go value to JSON", "Serialization", "Encoding to JSON", "All of the above"],
        "options_hi": ["Go वैल्यू को JSON में कन्वर्ट करना", "सीरियलाइज़ेशन", "JSON में एन्कोडिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "How do you customize JSON field names?",
        "question_hi": "JSON फील्ड नेम कैसे कस्टमाइज़ करते हैं?",
        "options_en": ["Use json struct tags", "Field naming convention", "Marshaler interface", "All of the above"],
        "options_hi": ["json स्ट्रक्चर टैग का उपयोग करें", "फील्ड नेमिंग कन्वेंशन", "Marshaler इंटरफेस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the purpose of time.After?",
        "question_hi": "time.After का उद्देश्य क्या है?",
        "options_en": ["Send time after duration", "Timer channel", "Timeout pattern", "All of the above"],
        "options_hi": ["ड्यूरेशन के बाद टाइम भेजना", "टाइमर चैनल", "टाइमआउट पैटर्न", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How do you format time as string?",
        "question_hi": "टाइम को स्ट्रिंग के रूप में कैसे फॉर्मेट करते हैं?",
        "options_en": ["time.Format()", "fmt.Sprintf with time", "String() method", "All of the above"],
        "options_hi": ["time.Format()", "टाइम के साथ fmt.Sprintf", "String() मेथड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the purpose of exec.CommandContext?",
        "question_hi": "exec.CommandContext का उद्देश्य क्या है?",
        "options_en": ["Run command with context", "Cancellable command execution", "Timeout for commands", "All of the above"],
        "options_hi": ["कॉन्टेक्स्ट के साथ कमांड रन करना", "कैंसलेबल कमांड एक्जिक्यूशन", "कमांड के लिए टाइमआउट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "How do you capture command output?",
        "question_hi": "कमांड आउटपुट कैसे कैप्चर करते हैं?",
        "options_en": ["cmd.Output()", "cmd.CombinedOutput()", "StdoutPipe", "All of the above"],
        "options_hi": ["cmd.Output()", "cmd.CombinedOutput()", "StdoutPipe", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is filepath.Walk?",
        "question_hi": "filepath.Walk क्या है?",
        "options_en": ["Recursive directory traversal", "Visit all files in directory tree", "Directory walking function", "All of the above"],
        "options_hi": ["रिकर्सिव डायरेक्टरी ट्रैवर्सल", "डायरेक्टरी ट्री में सभी फाइल विजिट करना", "डायरेक्टरी वॉकिंग फंक्शन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How do you create a temporary file?",
        "question_hi": "टेम्पररी फाइल कैसे बनाते हैं?",
        "options_en": ["os.CreateTemp()", "ioutil.TempFile()", "Both A and B", "tempfile.Create()"],
        "options_hi": ["os.CreateTemp()", "ioutil.TempFile()", "A और B दोनों", "tempfile.Create()"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the purpose of bufio.Scanner?",
        "question_hi": "bufio.Scanner का उद्देश्य क्या है?",
        "options_en": ["Read input by lines or words", "Buffered reading", "Text parsing", "All of the above"],
        "options_hi": ["लाइन या वर्ड द्वारा इनपुट पढ़ना", "बफर्ड रीडिंग", "टेक्स्ट पार्सिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "How do you read a file with scanner?",
        "question_hi": "स्कैनर के साथ फाइल कैसे पढ़ते हैं?",
        "options_en": ["bufio.NewScanner(file)", "scanner.Scan() in loop", "Read line by line", "All of the above"],
        "options_hi": ["bufio.NewScanner(file)", "लूप में scanner.Scan()", "लाइन बाय लाइन पढ़ें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is cryptographic hashing?",
        "question_hi": "क्रिप्टोग्राफिक हैशिंग क्या है?",
        "options_en": ["One-way data transformation", "Secure hash functions", "Data integrity verification", "All of the above"],
        "options_hi": ["वन-वे डेटा ट्रांसफॉर्मेशन", "सिक्योर हैश फंक्शन", "डेटा इंटिग्रिटी वेरिफिकेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How do you generate secure random numbers?",
        "question_hi": "सिक्योर रैंडम नंबर कैसे जनरेट करते हैं?",
        "options_en": ["crypto/rand package", "rand.Read()", "Cryptographically secure source", "All of the above"],
        "options_hi": ["crypto/rand पैकेज", "rand.Read()", "क्रिप्टोग्राफिकली सिक्योर सोर्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is go.mod file?",
        "question_hi": "go.mod फाइल क्या है?",
        "options_en": ["Go module definition", "Dependency management", "Module versioning", "All of the above"],
        "options_hi": ["Go मॉड्यूल डेफिनिशन", "डिपेंडेंसी मैनेजमेंट", "मॉड्यूल वर्जनिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "How do you update dependencies?",
        "question_hi": "डिपेंडेंसी कैसे अपडेट करते हैं?",
        "options_en": ["go get -u", "go mod tidy", "go mod download", "All of the above"],
        "options_hi": ["go get -u", "go mod tidy", "go mod download", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is table-driven testing?",
        "question_hi": "टेबल-ड्रिवन टेस्टिंग क्या है?",
        "options_en": ["Tests with input-output table", "Parameterized testing", "Multiple test cases in slice", "All of the above"],
        "options_hi": ["इनपुट-आउटपुट टेबल के साथ टेस्ट", "पैरामीटराइज्ड टेस्टिंग", "स्लाइस में मल्टीपल टेस्ट केस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How do you write table-driven tests?",
        "question_hi": "टेबल-ड्रिवन टेस्ट कैसे लिखते हैं?",
        "options_en": ["Slice of test cases", "Loop over test cases", "t.Run for each case", "All of the above"],
        "options_hi": ["टेस्ट केस की स्लाइस", "टेस्ट केस पर लूप", "प्रत्येक केस के लिए t.Run", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is reflection in Go?",
        "question_hi": "Go में रिफ्लेक्शन क्या है?",
        "options_en": ["Runtime type inspection", "Dynamic programming", "Meta-programming", "All of the above"],
        "options_hi": ["रनटाइम टाइप इंस्पेक्शन", "डायनामिक प्रोग्रामिंग", "मेटा-प्रोग्रामिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "How do you get struct field names with reflection?",
        "question_hi": "रिफ्लेक्शन के साथ स्ट्रक्चर फील्ड नेम कैसे प्राप्त करते हैं?",
        "options_en": ["reflect.TypeOf().Field()", "Iterate over NumField()", "FieldByName()", "All of the above"],
        "options_hi": ["reflect.TypeOf().Field()", "NumField() पर इटरेट करें", "FieldByName()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is unsafe.Pointer conversion?",
        "question_hi": "unsafe.Pointer कन्वर्जन क्या है?",
        "options_en": ["Convert between pointer types", "Bypass type system", "Low-level operations", "All of the above"],
        "options_hi": ["पॉइंटर टाइप के बीच कन्वर्ट करना", "टाइप सिस्टम बायपास करना", "लो-लेवल ऑपरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "How do you convert string to bytes without copy?",
        "question_hi": "कॉपी के बिना स्ट्रिंग को बाइट्स में कैसे कन्वर्ट करते हैं?",
        "options_en": ["unsafe conversion", "StringHeader and SliceHeader", "No safe way without copy", "Both A and B"],
        "options_hi": ["अनसेफ कन्वर्जन", "StringHeader और SliceHeader", "कॉपी के बिना कोई सेफ तरीका नहीं", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is strings.Builder for?",
        "question_hi": "strings.Builder किस लिए है?",
        "options_en": ["Efficient string concatenation", "Mutable string building", "Avoid allocations", "All of the above"],
        "options_hi": ["एफिशिएंट स्ट्रिंग कॉन्कैटनेशन", "म्यूटेबल स्ट्रिंग बिल्डिंग", "अलोकेशन से बचना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "How do you efficiently build strings?",
        "question_hi": "स्ट्रिंग एफिशिएंटली कैसे बनाते हैं?",
        "options_en": ["strings.Builder", "bytes.Buffer with String()", "Pre-allocate with make", "All of the above"],
        "options_hi": ["strings.Builder", "String() के साथ bytes.Buffer", "make के साथ प्री-अलोकेट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is sort.SliceStable?",
        "question_hi": "sort.SliceStable क्या है?",
        "options_en": ["Stable sort algorithm", "Preserves equal element order", "Slower but stable", "All of the above"],
        "options_hi": ["स्टेबल सॉर्ट अल्गोरिदम", "इक्वल एलिमेंट ऑर्डर प्रिजर्व करता है", "स्लो लेकिन स्टेबल", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How do you sort in descending order?",
        "question_hi": "डिसेंडिंग ऑर्डर में कैसे सॉर्ट करते हैं?",
        "options_en": ["Reverse the less function", "sort.Reverse()", "Custom comparison", "All of the above"],
        "options_hi": ["लेस फंक्शन रिवर्स करें", "sort.Reverse()", "कस्टम कम्पेयरिजन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is encoding/csv.Reader?",
        "question_hi": "encoding/csv.Reader क्या है?",
        "options_en": ["CSV file reader", "Parse comma-separated values", "Read records", "All of the above"],
        "options_hi": ["CSV फाइल रीडर", "कॉमा-सेपरेटेड वैल्यू पार्स करना", "रिकॉर्ड पढ़ना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "How do you handle CSV headers?",
        "question_hi": "CSV हेडर कैसे हैंडल करते हैं?",
        "options_en": ["Read() first record", "Skip header row", "Use as field names", "All of the above"],
        "options_hi": ["पहला रिकॉर्ड Read() करें", "हेडर रो स्किप करें", "फील्ड नेम के रूप में उपयोग करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is compress/gzip.Writer?",
        "question_hi": "compress/gzip.Writer क्या है?",
        "options_en": ["GZIP compression writer", "Compress data to gzip format", "Write compressed data", "All of the above"],
        "options_hi": ["GZIP कम्प्रेशन राइटर", "डेटा को gzip फॉर्मेट में कम्प्रेस करना", "कम्प्रेस्ड डेटा लिखना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "How do you compress data with gzip?",
        "question_hi": "gzip के साथ डेटा कैसे कम्प्रेस करते हैं?",
        "options_en": ["gzip.NewWriter()", "Write data to writer", "Close writer", "All of the above"],
        "options_hi": ["gzip.NewWriter()", "राइटर में डेटा लिखें", "राइटर क्लोज करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is image decoding?",
        "question_hi": "इमेज डिकोडिंग क्या है?",
        "options_en": ["Read image from format", "Parse image data", "Convert to image.Image", "All of the above"],
        "options_hi": ["फॉर्मेट से इमेज पढ़ना", "इमेज डेटा पार्स करना", "image.Image में कन्वर्ट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "How do you decode JPEG images?",
        "question_hi": "JPEG इमेज कैसे डिकोड करते हैं?",
        "options_en": ["image/jpeg package", "jpeg.Decode()", "Read from io.Reader", "All of the above"],
        "options_hi": ["image/jpeg पैकेज", "jpeg.Decode()", "io.Reader से पढ़ें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is html/template auto-escaping?",
        "question_hi": "html/template ऑटो-एस्केपिंग क्या है?",
        "options_en": ["Automatic HTML escaping", "XSS prevention", "Context-aware escaping", "All of the above"],
        "options_hi": ["ऑटोमैटिक HTML एस्केपिंग", "XSS प्रिवेंशन", "कॉन्टेक्स्ट-अवेयर एस्केपिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "How do you disable auto-escaping?",
        "question_hi": "ऑटो-एस्केपिंग कैसे डिसेबल करते हैं?",
        "options_en": ["template.HTML type", "Mark content as safe", "Use text/template", "All of the above"],
        "options_hi": ["template.HTML टाइप", "कंटेंट को सेफ मार्क करें", "text/template का उपयोग करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is database/sql.DB?",
        "question_hi": "database/sql.DB क्या है?",
        "options_en": ["Database connection pool", "SQL database handle", "Manage connections", "All of the above"],
        "options_hi": ["डेटाबेस कनेक्शन पूल", "SQL डेटाबेस हैंडल", "कनेक्शन मैनेज करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "How do you open database connection?",
        "question_hi": "डेटाबेस कनेक्शन कैसे ओपन करते हैं?",
        "options_en": ["sql.Open()", "Driver-specific DSN", "Returns *sql.DB", "All of the above"],
        "options_hi": ["sql.Open()", "ड्राइवर-स्पेसिफिक DSN", "*sql.DB रिटर्न करता है", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is connection pooling?",
        "question_hi": "कनेक्शन पूलिंग क्या है?",
        "options_en": ["Reuse database connections", "Improve performance", "Manage connection lifecycle", "All of the above"],
        "options_hi": ["डेटाबेस कनेक्शन रीयूज करना", "परफॉर्मेंस इम्प्रूव करना", "कनेक्शन लाइफसाइकल मैनेज करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "How do you set connection pool settings?",
        "question_hi": "कनेक्शन पूल सेटिंग कैसे सेट करते हैं?",
        "options_en": ["SetMaxOpenConns()", "SetMaxIdleConns()", "SetConnMaxLifetime()", "All of the above"],
        "options_hi": ["SetMaxOpenConns()", "SetMaxIdleConns()", "SetConnMaxLifetime()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is sql.NullString?",
        "question_hi": "sql.NullString क्या है?",
        "options_en": ["Nullable string type", "Handle NULL database values", "Valid and String fields", "All of the above"],
        "options_hi": ["नलएबल स्ट्रिंग टाइप", "NULL डेटाबेस वैल्यू हैंडल करना", "Valid और String फील्ड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "How do you handle NULL values?",
        "question_hi": "NULL वैल्यू कैसे हैंडल करते हैं?",
        "options_en": ["sql.Null types", "Pointer types", "Check Valid field", "All of the above"],
        "options_hi": ["sql.Null टाइप", "पॉइंटर टाइप", "Valid फील्ड चेक करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is log package flags?",
        "question_hi": "log पैकेज फ्लैग क्या है?",
        "options_en": ["Control log output format", "Add timestamps, file info", "Customize logging", "All of the above"],
        "options_hi": ["लॉग आउटपुट फॉर्मेट कंट्रोल करना", "टाइमस्टैम्प, फाइल इनफो ऐड करना", "लॉगिंग कस्टमाइज़ करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "How do you add line numbers to logs?",
        "question_hi": "लॉग में लाइन नंबर कैसे ऐड करते हैं?",
        "options_en": ["log.Lshortfile", "log.Llongfile", "File and line number", "All of the above"],
        "options_hi": ["log.Lshortfile", "log.Llongfile", "फाइल और लाइन नंबर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is runtime.GC?",
        "question_hi": "runtime.GC क्या है?",
        "options_en": ["Trigger garbage collection", "Run GC manually", "Memory management", "All of the above"],
        "options_hi": ["गार्बेज कलेक्शन ट्रिगर करना", "मैन्युअली GC रन करना", "मेमोरी मैनेजमेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "How do you get memory statistics?",
        "question_hi": "मेमोरी स्टैटिस्टिक्स कैसे प्राप्त करते हैं?",
        "options_en": ["runtime.ReadMemStats()", "Memory allocation info", "GC statistics", "All of the above"],
        "options_hi": ["runtime.ReadMemStats()", "मेमोरी अलोकेशन इनफो", "GC स्टैटिस्टिक्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is go/ast.Node?",
        "question_hi": "go/ast.Node क्या है?",
        "options_en": ["AST node interface", "Abstract syntax tree element", "Code representation", "All of the above"],
        "options_hi": ["AST नोड इंटरफेस", "एब्स्ट्रैक्ट सिंटैक्स ट्री एलिमेंट", "कोड रिप्रेजेंटेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "How do you traverse AST?",
        "question_hi": "AST कैसे ट्रैवर्स करते हैं?",
        "options_en": ["ast.Inspect()", "ast.Walk()", "Visitor pattern", "All of the above"],
        "options_hi": ["ast.Inspect()", "ast.Walk()", "विजिटर पैटर्न", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is httptest.ResponseRecorder?",
        "question_hi": "httptest.ResponseRecorder क्या है?",
        "options_en": ["Capture HTTP responses", "Test handler output", "Inspect response", "All of the above"],
        "options_hi": ["HTTP रिस्पांस कैप्चर करना", "हैंडलर आउटपुट टेस्ट करना", "रिस्पांस इंस्पेक्ट करना", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "How do you test HTTP handlers?",
        "question_hi": "HTTP हैंडलर कैसे टेस्ट करते हैं?",
        "options_en": ["httptest.NewRecorder()", "Mock request", "Check response", "All of the above"],
        "options_hi": ["httptest.NewRecorder()", "मॉक रिक्वेस्ट", "रिस्पांस चेक करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is io.Reader interface?",
        "question_hi": "io.Reader इंटरफेस क्या है?",
        "options_en": ["Read data from source", "Stream input", "Single Read method", "All of the above"],
        "options_hi": ["सोर्स से डेटा पढ़ना", "स्ट्रीम इनपुट", "सिंगल रीड मेथड", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "How do you implement io.Reader?",
        "question_hi": "io.Reader कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement Read([]byte) method", "Return bytes read", "Return io.EOF at end", "All of the above"],
        "options_hi": ["Read([]byte) मेथड इम्प्लीमेंट करें", "पढ़े गए बाइट रिटर्न करें", "अंत में io.EOF रिटर्न करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is bytes.Buffer?",
        "question_hi": "bytes.Buffer क्या है?",
        "options_en": ["Variable-sized byte buffer", "Implements io.Reader and io.Writer", "In-memory storage", "All of the above"],
        "options_hi": ["वेरिएबल-साइज्ड बाइट बफर", "io.Reader और io.Writer इम्प्लीमेंट करता है", "इन-मेमोरी स्टोरेज", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "How do you use bytes.Buffer?",
        "question_hi": "bytes.Buffer का उपयोग कैसे करते हैं?",
        "options_en": ["Write data with Write()", "Read data with Read()", "Get string with String()", "All of the above"],
        "options_hi": ["Write() के साथ डेटा लिखें", "Read() के साथ डेटा पढ़ें", "String() के साथ स्ट्रिंग प्राप्त करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is unicode/utf8 package?",
        "question_hi": "unicode/utf8 पैकेज क्या है?",
        "options_en": ["UTF-8 encoding utilities", "Rune handling", "UTF-8 validation", "All of the above"],
        "options_hi": ["UTF-8 एन्कोडिंग यूटिलिटी", "Rune हैंडलिंग", "UTF-8 वैलिडेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "How do you count runes in string?",
        "question_hi": "स्ट्रिंग में runes कैसे काउंट करते हैं?",
        "options_en": ["utf8.RuneCountInString()", "Count UTF-8 characters", "Handle multi-byte", "All of the above"],
        "options_hi": ["utf8.RuneCountInString()", "UTF-8 कैरेक्टर काउंट करें", "मल्टी-बाइट हैंडल करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is flag package?",
        "question_hi": "flag पैकेज क्या है?",
        "options_en": ["Command-line flag parsing", "Program arguments", "Option handling", "All of the above"],
        "options_hi": ["कमांड-लाइन फ्लैग पार्सिंग", "प्रोग्राम आर्गुमेंट", "ऑप्शन हैंडलिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "How do you parse command line flags?",
        "question_hi": "कमांड लाइन फ्लैग कैसे पार्स करते हैं?",
        "options_en": ["flag.Parse()", "After defining flags", "Access flag values", "All of the above"],
        "options_hi": ["flag.Parse()", "फ्लैग डिफाइन करने के बाद", "फ्लैग वैल्यू एक्सेस करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is expvar package?",
        "question_hi": "expvar पैकेज क्या है?",
        "options_en": ["Expose public variables", "Runtime metrics", "HTTP JSON endpoint", "All of the above"],
        "options_hi": ["पब्लिक वेरिएबल एक्सपोज करना", "रनटाइम मेट्रिक्स", "HTTP JSON एंडपॉइंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "How do you expose metrics with expvar?",
        "question_hi": "expvar के साथ मेट्रिक्स कैसे एक्सपोज करते हैं?",
        "options_en": ["expvar.Publish()", "Register variables", "HTTP handler", "All of the above"],
        "options_hi": ["expvar.Publish()", "वेरिएबल रजिस्टर करें", "HTTP हैंडलर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is runtime/pprof?",
        "question_hi": "runtime/pprof क्या है?",
        "options_en": ["Profiling support", "CPU and memory profiling", "Performance analysis", "All of the above"],
        "options_hi": ["प्रोफाइलिंग सपोर्ट", "CPU और मेमोरी प्रोफाइलिंग", "परफॉर्मेंस एनालिसिस", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "How do you start CPU profiling?",
        "question_hi": "CPU प्रोफाइलिंग कैसे शुरू करते हैं?",
        "options_en": ["pprof.StartCPUProfile()", "Write to file", "Stop with StopCPUProfile()", "All of the above"],
        "options_hi": ["pprof.StartCPUProfile()", "फाइल में लिखें", "StopCPUProfile() के साथ रोकें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is sync/atomic package?",
        "question_hi": "sync/atomic पैकेज क्या है?",
        "options_en": ["Atomic operations", "Low-level synchronization", "Thread-safe counters", "All of the above"],
        "options_hi": ["एटॉमिक ऑपरेशन", "लो-लेवल सिंक्रोनाइज़ेशन", "थ्रेड-सेफ काउंटर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "How do you use atomic operations?",
        "question_hi": "एटॉमिक ऑपरेशन कैसे उपयोग करते हैं?",
        "options_en": ["atomic.AddInt32()", "atomic.Load()", "atomic.Store()", "All of the above"],
        "options_hi": ["atomic.AddInt32()", "atomic.Load()", "atomic.Store()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is go/token package?",
        "question_hi": "go/token पैकेज क्या है?",
        "options_en": ["Go token constants", "Lexical tokens", "Source code tokens", "All of the above"],
        "options_hi": ["Go टोकन कॉन्स्टेंट", "लेक्सिकल टोकन", "सोर्स कोड टोकन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "How do you get token positions?",
        "question_hi": "टोकन पोजीशन कैसे प्राप्त करते हैं?",
        "options_en": ["token.FileSet", "File and line numbers", "Position information", "All of the above"],
        "options_hi": ["token.FileSet", "फाइल और लाइन नंबर", "पोजीशन इनफार्मेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is text/template?",
        "question_hi": "text/template क्या है?",
        "options_en": ["Text template engine", "Data-driven templates", "String generation", "All of the above"],
        "options_hi": ["टेक्स्ट टेम्पलेट इंजन", "डेटा-ड्रिवन टेम्पलेट", "स्ट्रिंग जनरेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "How do you execute templates?",
        "question_hi": "टेम्पलेट कैसे एक्जिक्यूट करते हैं?",
        "options_en": ["template.Execute()", "template.ExecuteTemplate()", "Write to io.Writer", "All of the above"],
        "options_hi": ["template.Execute()", "template.ExecuteTemplate()", "io.Writer में लिखें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is container package?",
        "question_hi": "container पैकेज क्या है?",
        "options_en": ["Container data structures", "List, heap, ring", "Data containers", "All of the above"],
        "options_hi": ["कंटेनर डेटा स्ट्रक्चर", "लिस्ट, हीप, रिंग", "डेटा कंटेनर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "How do you use container/list?",
        "question_hi": "container/list कैसे उपयोग करते हैं?",
        "options_en": ["list.New()", "PushFront/PushBack", "Iterate with Next()", "All of the above"],
        "options_hi": ["list.New()", "PushFront/PushBack", "Next() के साथ इटरेट करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the latest major version of Go?",
        "question_hi": "Go का लेटेस्ट मेजर वर्जन क्या है?",
        "options_en": ["Go 1.21", "Go 2.0", "Go 1.20", "Go 1.19"],
        "options_hi": ["Go 1.21", "Go 2.0", "Go 1.20", "Go 1.19"],
        "answer_en": "Go 1.21",
        "answer_hi": "Go 1.21",
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