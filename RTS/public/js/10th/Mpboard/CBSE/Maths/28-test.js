const questions=[
    {
        "num": 1,
        "question_en": "What is the default case sensitivity of Go?",
        "question_hi": "Go की डिफॉल्ट केस सेंसिटिविटी क्या है?",
        "options_en": ["Case-sensitive", "Case-insensitive", "Depends on platform", "Configurable"],
        "options_hi": ["केस-सेंसिटिव", "केस-इनसेंसिटिव", "प्लेटफॉर्म पर निर्भर", "कॉन्फिगरेबल"],
        "answer_en": "Case-sensitive",
        "answer_hi": "केस-सेंसिटिव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which symbol is used for pointer dereferencing in Go?",
        "question_hi": "Go में पॉइंटर डीरिफरेंसिंग के लिए किस सिंबल का उपयोग किया जाता है?",
        "options_en": ["*", "&", "->", "."],
        "options_hi": ["*", "&", "->", "."],
        "answer_en": "*",
        "answer_hi": "*",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the default value of a channel?",
        "question_hi": "चैनल का डिफॉल्ट वैल्यू क्या है?",
        "options_en": ["nil", "0", "empty channel", "undefined"],
        "options_hi": ["nil", "0", "खाली चैनल", "अनडिफाइंड"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which function converts an integer to string in Go?",
        "question_hi": "Go में इंटीजर को स्ट्रिंग में कन्वर्ट करने वाला फंक्शन कौन सा है?",
        "options_en": ["strconv.Itoa()", "string.FromInt()", "convert.ToString()", "fmt.Sprint()"],
        "options_hi": ["strconv.Itoa()", "string.FromInt()", "convert.ToString()", "fmt.Sprint()"],
        "answer_en": "strconv.Itoa()",
        "answer_hi": "strconv.Itoa()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the maximum number of values a function can return in Go?",
        "question_hi": "Go में एक फंक्शन अधिकतम कितनी वैल्यू रिटर्न कर सकता है?",
        "options_en": ["Unlimited", "255", "Depends on system", "No limit specified"],
        "options_hi": ["अनलिमिटेड", "255", "सिस्टम पर निर्भर", "कोई लिमिट नहीं"],
        "answer_en": "No limit specified",
        "answer_hi": "कोई लिमिट नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which keyword is used to define a package in Go?",
        "question_hi": "Go में पैकेज डिफाइन करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["package", "pkg", "module", "namespace"],
        "options_hi": ["package", "pkg", "module", "namespace"],
        "answer_en": "package",
        "answer_hi": "package",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the type of 'nil' in Go?",
        "question_hi": "Go में 'nil' का टाइप क्या है?",
        "options_en": ["It has no type", "interface{}", "Depends on context", "null type"],
        "options_hi": ["इसका कोई टाइप नहीं", "interface{}", "कॉन्टेक्स्ट पर निर्भर", "null टाइप"],
        "answer_en": "It has no type",
        "answer_hi": "इसका कोई टाइप नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which method is used to get the underlying type of an interface?",
        "question_hi": "इंटरफेस के अंडरलाइंग टाइप को प्राप्त करने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["Type assertion", "reflect.TypeOf", "type switch", "All of the above"],
        "options_hi": ["टाइप असर्शन", "reflect.TypeOf", "टाइप स्विच", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of the 'blank identifier' (_) in Go?",
        "question_hi": "Go में 'ब्लैंक आइडेंटिफायर' (_) का उद्देश्य क्या है?",
        "options_en": ["To discard values", "For unused variables", "In import statements", "All of the above"],
        "options_hi": ["वैल्यू डिस्कार्ड करने के लिए", "अनयूज्ड वेरिएबल के लिए", "इम्पोर्ट स्टेटमेंट में", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which package provides functions for string conversions?",
        "question_hi": "स्ट्रिंग कन्वर्जन के लिए फंक्शन कौन सा पैकेज प्रोवाइड करता है?",
        "options_en": ["strconv", "convert", "strings", "fmt"],
        "options_hi": ["strconv", "convert", "strings", "fmt"],
        "answer_en": "strconv",
        "answer_hi": "strconv",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the default concurrency model in Go?",
        "question_hi": "Go में डिफॉल्ट कंकरेंसी मॉडल क्या है?",
        "options_en": ["CSP (Communicating Sequential Processes)", "Actor model", "Thread-based", "Event loop"],
        "options_hi": ["CSP (कम्युनिकेटिंग सीक्वेंशियल प्रोसेसेस)", "एक्टर मॉडल", "थ्रेड-बेस्ड", "इवेंट लूप"],
        "answer_en": "CSP (Communicating Sequential Processes)",
        "answer_hi": "CSP (कम्युनिकेटिंग सीक्वेंशियल प्रोसेसेस)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you create an infinite loop in Go?",
        "question_hi": "Go में इनफिनाइट लूप कैसे बनाते हैं?",
        "options_en": ["for {}", "while true {}", "loop {}", "forever {}"],
        "options_hi": ["for {}", "while true {}", "loop {}", "forever {}"],
        "answer_en": "for {}",
        "answer_hi": "for {}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which function is used to compare two strings in Go?",
        "question_hi": "Go में दो स्ट्रिंग की तुलना करने के लिए किस फंक्शन का उपयोग किया जाता है?",
        "options_en": ["strings.Compare()", "string.Compare()", "strcmp()", "=="],
        "options_hi": ["strings.Compare()", "string.Compare()", "strcmp()", "=="],
        "answer_en": "strings.Compare()",
        "answer_hi": "strings.Compare()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the zero value for a function type?",
        "question_hi": "फंक्शन टाइप के लिए जीरो वैल्यू क्या है?",
        "options_en": ["nil", "undefined", "zero function", "No zero value"],
        "options_hi": ["nil", "अनडिफाइंड", "जीरो फंक्शन", "कोई जीरो वैल्यू नहीं"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which package is used for working with JSON data?",
        "question_hi": "JSON डेटा के साथ काम करने के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["encoding/json", "json", "encoding", "data/json"],
        "options_hi": ["encoding/json", "json", "encoding", "data/json"],
        "answer_en": "encoding/json",
        "answer_hi": "encoding/json",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you declare a variable with explicit type in Go?",
        "question_hi": "Go में एक्सप्लिसिट टाइप के साथ वेरिएबल कैसे डिक्लेयर करते हैं?",
        "options_en": ["var name type", "name := type", "variable name type", "declare name type"],
        "options_hi": ["var name type", "name := type", "variable name type", "declare name type"],
        "answer_en": "var name type",
        "answer_hi": "var name type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the purpose of the 'go mod init' command?",
        "question_hi": "'go mod init' कमांड का उद्देश्य क्या है?",
        "options_en": ["Initialize a new module", "Create new project", "Setup Go environment", "Install dependencies"],
        "options_hi": ["नया मॉड्यूल इनिशियलाइज़ करें", "नया प्रोजेक्ट बनाएं", "Go एनवायरनमेंट सेटअप करें", "डिपेंडेंसी इंस्टॉल करें"],
        "answer_en": "Initialize a new module",
        "answer_hi": "नया मॉड्यूल इनिशियलाइज़ करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which method is used to convert a byte slice to string?",
        "question_hi": "बाइट स्लाइस को स्ट्रिंग में कन्वर्ट करने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["string(bytes)", "bytes.ToString()", "convert.String(bytes)", "fmt.String(bytes)"],
        "options_hi": ["string(bytes)", "bytes.ToString()", "convert.String(bytes)", "fmt.String(bytes)"],
        "answer_en": "string(bytes)",
        "answer_hi": "string(bytes)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the default memory management in Go?",
        "question_hi": "Go में डिफॉल्ट मेमोरी मैनेजमेंट क्या है?",
        "options_en": ["Garbage collection", "Manual memory management", "Reference counting", "Automatic reference counting"],
        "options_hi": ["गार्बेज कलेक्शन", "मैनुअल मेमोरी मैनेजमेंट", "रिफरेन्स काउंटिंग", "ऑटोमैटिक रिफरेन्स काउंटिंग"],
        "answer_en": "Garbage collection",
        "answer_hi": "गार्बेज कलेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you create a slice with specific capacity?",
        "question_hi": "स्पेसिफिक कैपेसिटी के साथ स्लाइस कैसे बनाते हैं?",
        "options_en": ["make([]type, length, capacity)", "make([]type, capacity)", "new([]type, capacity)", "slice(type, capacity)"],
        "options_hi": ["make([]type, length, capacity)", "make([]type, capacity)", "new([]type, capacity)", "slice(type, capacity)"],
        "answer_en": "make([]type, length, capacity)",
        "answer_hi": "make([]type, length, capacity)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which package provides HTTP client and server implementations?",
        "question_hi": "HTTP क्लाइंट और सर्वर इम्प्लीमेंटेशन कौन सा पैकेज प्रोवाइड करता है?",
        "options_en": ["net/http", "http", "net", "web"],
        "options_hi": ["net/http", "http", "net", "web"],
        "answer_en": "net/http",
        "answer_hi": "net/http",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the purpose of the 'go vet' command?",
        "question_hi": "'go vet' कमांड का उद्देश्य क्या है?",
        "options_en": ["Report suspicious constructs", "Check code style", "Validate syntax", "Test code"],
        "options_hi": ["सस्पिशियस कंस्ट्रक्ट रिपोर्ट करें", "कोड स्टाइल चेक करें", "सिंटैक्स वैलिडेट करें", "कोड टेस्ट करें"],
        "answer_en": "Report suspicious constructs",
        "answer_hi": "सस्पिशियस कंस्ट्रक्ट रिपोर्ट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "How do you implement a read-only channel?",
        "question_hi": "रीड-ओनली चैनल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use <-chan type", "Use chan<- type", "Use const channel", "It's not possible"],
        "options_hi": ["<-chan type उपयोग करें", "chan<- type उपयोग करें", "const channel उपयोग करें", "यह संभव नहीं है"],
        "answer_en": "Use <-chan type",
        "answer_hi": "<-chan type उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the purpose of the 'sync/atomic' package?",
        "question_hi": "'sync/atomic' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For atomic operations", "For synchronization", "For memory ordering", "All of the above"],
        "options_hi": ["एटॉमिक ऑपरेशन के लिए", "सिंक्रोनाइज़ेशन के लिए", "मेमोरी ऑर्डरिंग के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which function is used to create a new time instance?",
        "question_hi": "नया टाइम इंस्टेंस बनाने के लिए किस फंक्शन का उपयोग किया जाता है?",
        "options_en": ["time.Now()", "time.New()", "time.Create()", "time.Current()"],
        "options_hi": ["time.Now()", "time.New()", "time.Create()", "time.Current()"],
        "answer_en": "time.Now()",
        "answer_hi": "time.Now()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the default string encoding in Go?",
        "question_hi": "Go में डिफॉल्ट स्ट्रिंग एन्कोडिंग क्या है?",
        "options_en": ["UTF-8", "ASCII", "UTF-16", "Depends on platform"],
        "options_hi": ["UTF-8", "ASCII", "UTF-16", "प्लेटफॉर्म पर निर्भर"],
        "answer_en": "UTF-8",
        "answer_hi": "UTF-8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "How do you implement a write-only channel?",
        "question_hi": "राइट-ओनली चैनल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use chan<- type", "Use <-chan type", "Use var channel", "It's not possible"],
        "options_hi": ["chan<- type उपयोग करें", "<-chan type उपयोग करें", "var channel उपयोग करें", "यह संभव नहीं है"],
        "answer_en": "Use chan<- type",
        "answer_hi": "chan<- type उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the purpose of the 'context' package?",
        "question_hi": "'context' पैकेज का उद्देश्य क्या है?",
        "options_en": ["Manage request context", "Handle cancellation", "Pass deadlines", "All of the above"],
        "options_hi": ["रिक्वेस्ट कॉन्टेक्स्ट मैनेज करें", "कैंसलेशन हैंडल करें", "डेडलाइन पास करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which method is used to check if a channel is closed?",
        "question_hi": "चैनल क्लोज है या नहीं चेक करने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["Use comma ok with receive", "channel.Closed()", "isClosed(channel)", "No direct method"],
        "options_hi": ["रिसीव के साथ कॉमा ok उपयोग करें", "channel.Closed()", "isClosed(channel)", "कोई डायरेक्ट मेथड नहीं"],
        "answer_en": "Use comma ok with receive",
        "answer_hi": "रिसीव के साथ कॉमा ok उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the default behavior of Go's garbage collector?",
        "question_hi": "Go के गार्बेज कलेक्टर का डिफॉल्ट बिहेवियर क्या है?",
        "options_en": ["Concurrent", "Stop-the-world", "Incremental", "Generational"],
        "options_hi": ["कंकरंट", "स्टॉप-द-वर्ल्ड", "इंक्रीमेंटल", "जेनरेशनल"],
        "answer_en": "Concurrent",
        "answer_hi": "कंकरंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "How do you create a custom error with additional information?",
        "question_hi": "एडिशनल इनफार्मेशन के साथ कस्टम एरर कैसे बनाते हैं?",
        "options_en": ["Implement error interface", "Use fmt.Errorf", "Use errors.New", "All of the above"],
        "options_hi": ["error इंटरफेस इम्प्लीमेंट करें", "fmt.Errorf उपयोग करें", "errors.New उपयोग करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which package provides functions for file path manipulation?",
        "question_hi": "फाइल पाथ मैनिपुलेशन के लिए फंक्शन कौन सा पैकेज प्रोवाइड करता है?",
        "options_en": ["path/filepath", "filepath", "os/path", "path"],
        "options_hi": ["path/filepath", "filepath", "os/path", "path"],
        "answer_en": "path/filepath",
        "answer_hi": "path/filepath",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of the 'go fmt' command?",
        "question_hi": "'go fmt' कमांड का उद्देश्य क्या है?",
        "options_en": ["Format Go source code", "Format output", "Format strings", "Format documentation"],
        "options_hi": ["Go सोर्स कोड फॉर्मेट करें", "आउटपुट फॉर्मेट करें", "स्ट्रिंग फॉर्मेट करें", "डॉक्युमेंटेशन फॉर्मेट करें"],
        "answer_en": "Format Go source code",
        "answer_hi": "Go सोर्स कोड फॉर्मेट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How do you implement method overloading in Go?",
        "question_hi": "Go में मेथड ओवरलोडिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["It's not supported", "Use different names", "Use interfaces", "Use variadic functions"],
        "options_hi": ["यह सपोर्टेड नहीं है", "अलग-अलग नाम उपयोग करें", "इंटरफेस उपयोग करें", "वेरिएडिक फंक्शन उपयोग करें"],
        "answer_en": "It's not supported",
        "answer_hi": "यह सपोर्टेड नहीं है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of the 'unsafe.Sizeof' function?",
        "question_hi": "'unsafe.Sizeof' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get size of variable in memory", "Get type size", "Calculate memory usage", "All of the above"],
        "options_hi": ["मेमोरी में वेरिएबल का साइज प्राप्त करें", "टाइप साइज प्राप्त करें", "मेमोरी यूसेज कैलकुलेट करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which package provides functions for mathematical constants?",
        "question_hi": "मैथमेटिकल कॉन्स्टेंट के लिए फंक्शन कौन सा पैकेज प्रोवाइड करता है?",
        "options_en": ["math", "constants", "math/const", "num"],
        "options_hi": ["math", "constants", "math/const", "num"],
        "answer_en": "math",
        "answer_hi": "math",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How do you create a bidirectional channel?",
        "question_hi": "बायडायरेक्शनल चैनल कैसे बनाते हैं?",
        "options_en": ["chan type", "<-chan type", "chan<- type", "bidirectional chan type"],
        "options_hi": ["chan type", "<-chan type", "chan<- type", "bidirectional chan type"],
        "answer_en": "chan type",
        "answer_hi": "chan type",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the purpose of the 'go test' command?",
        "question_hi": "'go test' कमांड का उद्देश्य क्या है?",
        "options_en": ["Run tests", "Generate test coverage", "Benchmark code", "All of the above"],
        "options_hi": ["टेस्ट रन करें", "टेस्ट कवरेज जनरेट करें", "कोड बेंचमार्क करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which function is used to convert a string to float?",
        "question_hi": "स्ट्रिंग को फ्लोट में कन्वर्ट करने के लिए किस फंक्शन का उपयोग किया जाता है?",
        "options_en": ["strconv.ParseFloat()", "string.ToFloat()", "convert.Float()", "fmt.ParseFloat()"],
        "options_hi": ["strconv.ParseFloat()", "string.ToFloat()", "convert.Float()", "fmt.ParseFloat()"],
        "answer_en": "strconv.ParseFloat()",
        "answer_hi": "strconv.ParseFloat()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the default behavior of map iteration?",
        "question_hi": "मैप इटरेशन का डिफॉल्ट बिहेवियर क्या है?",
        "options_en": ["Random order", "Insertion order", "Sorted order", "Key order"],
        "options_hi": ["रैंडम ऑर्डर", "इंसर्शन ऑर्डर", "सॉर्टेड ऑर्डर", "की ऑर्डर"],
        "answer_en": "Random order",
        "answer_hi": "रैंडम ऑर्डर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How do you implement a singleton pattern in Go?",
        "question_hi": "Go में सिंगलटन पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use sync.Once", "Use package-level variable", "Use init function", "All of the above"],
        "options_hi": ["sync.Once उपयोग करें", "पैकेज-लेवल वेरिएबल उपयोग करें", "init फंक्शन उपयोग करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which package provides functions for working with environment variables?",
        "question_hi": "एनवायरनमेंट वेरिएबल के साथ काम करने के लिए फंक्शन कौन सा पैकेज प्रोवाइड करता है?",
        "options_en": ["os", "env", "environment", "sys"],
        "options_hi": ["os", "env", "environment", "sys"],
        "answer_en": "os",
        "answer_hi": "os",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of the 'go clean' command?",
        "question_hi": "'go clean' कमांड का उद्देश्य क्या है?",
        "options_en": ["Remove object files", "Clear cache", "Clean build artifacts", "All of the above"],
        "options_hi": ["ऑब्जेक्ट फाइल रिमूव करें", "कैश क्लियर करें", "बिल्ड आर्टिफैक्ट क्लीन करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How do you implement a timeout for a goroutine?",
        "question_hi": "गोरूटीन के लिए टाइमआउट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use context.WithTimeout", "Use time.After", "Use select with channel", "All of the above"],
        "options_hi": ["context.WithTimeout उपयोग करें", "time.After उपयोग करें", "चैनल के साथ select उपयोग करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of the 'go doc' command?",
        "question_hi": "'go doc' कमांड का उद्देश्य क्या है?",
        "options_en": ["Show documentation", "Generate docs", "Format comments", "All of the above"],
        "options_hi": ["डॉक्युमेंटेशन दिखाएं", "डॉक्स जनरेट करें", "कमेंट फॉर्मेट करें", "उपरोक्त सभी"],
        "answer_en": "Show documentation",
        "answer_hi": "डॉक्युमेंटेशन दिखाएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which method is used to convert a string to bytes?",
        "question_hi": "स्ट्रिंग को बाइट में कन्वर्ट करने के लिए किस मेथड का उपयोग किया जाता है?",
        "options_en": ["[]byte(string)", "string.Bytes()", "bytes.FromString()", "convert.Bytes(string)"],
        "options_hi": ["[]byte(string)", "string.Bytes()", "bytes.FromString()", "convert.Bytes(string)"],
        "answer_en": "[]byte(string)",
        "answer_hi": "[]byte(string)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of the 'go get' command?",
        "question_hi": "'go get' कमांड का उद्देश्य क्या है?",
        "options_en": ["Download packages", "Install dependencies", "Update modules", "All of the above"],
        "options_hi": ["पैकेज डाउनलोड करें", "डिपेंडेंसी इंस्टॉल करें", "मॉड्यूल अपडेट करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "How do you implement a custom sort for a struct?",
        "question_hi": "स्ट्रक्ट के लिए कस्टम सॉर्ट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement sort.Interface", "Use sort.Slice", "Use sort.Sort", "All of the above"],
        "options_hi": ["sort.Interface इम्प्लीमेंट करें", "sort.Slice उपयोग करें", "sort.Sort उपयोग करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the purpose of the 'go list' command?",
        "question_hi": "'go list' कमांड का उद्देश्य क्या है?",
        "options_en": ["List packages", "Show dependencies", "Display module info", "All of the above"],
        "options_hi": ["पैकेज लिस्ट करें", "डिपेंडेंसी दिखाएं", "मॉड्यूल इनफो डिस्प्ले करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which package provides functions for regular expressions?",
        "question_hi": "रेगुलर एक्सप्रेशन के लिए फंक्शन कौन सा पैकेज प्रोवाइड करता है?",
        "options_en": ["regexp", "regex", "re", "pattern"],
        "options_hi": ["regexp", "regex", "re", "pattern"],
        "answer_en": "regexp",
        "answer_hi": "regexp",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of the 'go run' command?",
        "question_hi": "'go run' कमांड का उद्देश्य क्या है?",
        "options_en": ["Compile and run", "Execute Go code", "Test quickly", "All of the above"],
        "options_hi": ["कम्पाइल और रन", "Go कोड एक्सेक्यूट करें", "जल्दी टेस्ट करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How do you implement a worker pool?",
        "question_hi": "वर्कर पूल कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use goroutines and channels", "Use sync.Pool", "Use worker threads", "All of the above"],
        "options_hi": ["गोरूटीन और चैनल उपयोग करें", "sync.Pool उपयोग करें", "वर्कर थ्रेड उपयोग करें", "उपरोक्त सभी"],
        "answer_en": "Use goroutines and channels",
        "answer_hi": "गोरूटीन और चैनल उपयोग करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of the 'go build' command?",
        "question_hi": "'go build' कमांड का उद्देश्य क्या है?",
        "options_en": ["Compile packages", "Create executable", "Build binaries", "All of the above"],
        "options_hi": ["पैकेज कम्पाइल करें", "एक्जीक्यूटेबल बनाएं", "बाइनरी बिल्ड करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which package provides functions for cryptographic operations?",
        "question_hi": "क्रिप्टोग्राफिक ऑपरेशन के लिए फंक्शन कौन सा पैकेज प्रोवाइड करता है?",
        "options_en": ["crypto", "crypt", "security", "encrypt"],
        "options_hi": ["crypto", "crypt", "security", "encrypt"],
        "answer_en": "crypto",
        "answer_hi": "crypto",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of the 'go install' command?",
        "question_hi": "'go install' कमांड का उद्देश्य क्या है?",
        "options_en": ["Install packages", "Compile and install", "Update dependencies", "All of the above"],
        "options_hi": ["पैकेज इंस्टॉल करें", "कम्पाइल और इंस्टॉल", "डिपेंडेंसी अपडेट करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How do you implement a circuit breaker pattern?",
        "question_hi": "सर्किट ब्रेकर पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use state machine", "Track failures", "Use third-party libraries", "All of the above"],
        "options_hi": ["स्टेट मशीन उपयोग करें", "फेल्योर ट्रैक करें", "थर्ड-पार्टी लाइब्रेरी उपयोग करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the purpose of the 'go version' command?",
        "question_hi": "'go version' कमांड का उद्देश्य क्या है?",
        "options_en": ["Show Go version", "Check compatibility", "Display toolchain", "All of the above"],
        "options_hi": ["Go वर्जन दिखाएं", "कंपैटिबिलिटी चेक करें", "टूलचेन डिस्प्ले करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which package provides functions for compression?",
        "question_hi": "कम्प्रेशन के लिए फंक्शन कौन सा पैकेज प्रोवाइड करता है?",
        "options_en": ["compress", "zip", "gzip", "archive"],
        "options_hi": ["compress", "zip", "gzip", "archive"],
        "answer_en": "compress",
        "answer_hi": "compress",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of the 'go env' command?",
        "question_hi": "'go env' कमांड का उद्देश्य क्या है?",
        "options_en": ["Show environment", "Display settings", "Check configuration", "All of the above"],
        "options_hi": ["एनवायरनमेंट दिखाएं", "सेटिंग डिस्प्ले करें", "कॉन्फिगरेशन चेक करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How do you implement a retry mechanism?",
        "question_hi": "रिट्री मैकेनिज्म कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use for loop", "Implement backoff", "Use context", "All of the above"],
        "options_hi": ["for लूप उपयोग करें", "बैकऑफ इम्प्लीमेंट करें", "context उपयोग करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of the 'go fix' command?",
        "question_hi": "'go fix' कमांड का उद्देश्य क्या है?",
        "options_en": ["Update code", "Fix deprecated APIs", "Migrate to new version", "All of the above"],
        "options_hi": ["कोड अपडेट करें", "डिप्रिकेटेड API फिक्स करें", "नए वर्जन में माइग्रेट करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which package provides functions for template processing?",
        "question_hi": "टेम्पलेट प्रोसेसिंग के लिए फंक्शन कौन सा पैकेज प्रोवाइड करता है?",
        "options_en": ["text/template", "template", "html/template", "templates"],
        "options_hi": ["text/template", "template", "html/template", "templates"],
        "answer_en": "text/template",
        "answer_hi": "text/template",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of the 'go generate' command?",
        "question_hi": "'go generate' कमांड का उद्देश्य क्या है?",
        "options_en": ["Run code generators", "Generate code", "Process directives", "All of the above"],
        "options_hi": ["कोड जनरेटर रन करें", "कोड जनरेट करें", "डायरेक्टिव प्रोसेस करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How do you implement a rate limiter?",
        "question_hi": "रेट लिमिटर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use token bucket", "Use sliding window", "Use third-party libraries", "All of the above"],
        "options_hi": ["टोकन बकेट उपयोग करें", "स्लाइडिंग विंडो उपयोग करें", "थर्ड-पार्टी लाइब्रेरी उपयोग करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of the 'go work' command?",
        "question_hi": "'go work' कमांड का उद्देश्य क्या है?",
        "options_en": ["Manage workspace", "Handle multiple modules", "Coordinate projects", "All of the above"],
        "options_hi": ["वर्कस्पेस मैनेज करें", "मल्टीपल मॉड्यूल हैंडल करें", "प्रोजेक्ट कोऑर्डिनेट करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which package provides functions for atomic operations?",
        "question_hi": "एटॉमिक ऑपरेशन के लिए फंक्शन कौन सा पैकेज प्रोवाइड करता है?",
        "options_en": ["sync/atomic", "atomic", "sync", "concurrent"],
        "options_hi": ["sync/atomic", "atomic", "sync", "concurrent"],
        "answer_en": "sync/atomic",
        "answer_hi": "sync/atomic",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of the 'go tool' command?",
        "question_hi": "'go tool' कमांड का उद्देश्य क्या है?",
        "options_en": ["Run Go tools", "Access utilities", "Perform analysis", "All of the above"],
        "options_hi": ["Go टूल रन करें", "यूटिलिटी एक्सेस करें", "एनालिसिस परफॉर्म करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How do you implement a custom marshaler?",
        "question_hi": "कस्टम मार्शलर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement MarshalJSON", "Use struct tags", "Custom encoding", "All of the above"],
        "options_hi": ["MarshalJSON इम्प्लीमेंट करें", "स्ट्रक्ट टैग उपयोग करें", "कस्टम एन्कोडिंग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of the 'go mod init' command?",
        "question_hi": "'go mod init' कमांड का उद्देश्य क्या है?",
        "options_en": ["Create new module", "Initialize project", "Setup dependencies", "All of the above"],
        "options_hi": ["नया मॉड्यूल बनाएं", "प्रोजेक्ट इनिशियलाइज़ करें", "डिपेंडेंसी सेटअप करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which package provides functions for reflection?",
        "question_hi": "रिफ्लेक्शन के लिए फंक्शन कौन सा पैकेज प्रोवाइड करता है?",
        "options_en": ["reflect", "reflection", "meta", "runtime"],
        "options_hi": ["reflect", "reflection", "meta", "runtime"],
        "answer_en": "reflect",
        "answer_hi": "reflect",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of the 'go mod tidy' command?",
        "question_hi": "'go mod tidy' कमांड का उद्देश्य क्या है?",
        "options_en": ["Clean dependencies", "Add missing modules", "Remove unused modules", "All of the above"],
        "options_hi": ["डिपेंडेंसी क्लीन करें", "मिसिंग मॉड्यूल ऐड करें", "अनयूज्ड मॉड्यूल रिमूव करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How do you implement a type switch?",
        "question_hi": "टाइप स्विच कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["switch v := i.(type)", "Use type assertion", "Check interface type", "All of the above"],
        "options_hi": ["switch v := i.(type)", "टाइप असर्शन उपयोग करें", "इंटरफेस टाइप चेक करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the purpose of the 'go mod vendor' command?",
        "question_hi": "'go mod vendor' कमांड का उद्देश्य क्या है?",
        "options_en": ["Create vendor directory", "Copy dependencies", "Enable vendoring", "All of the above"],
        "options_hi": ["वेंडर डायरेक्टरी बनाएं", "डिपेंडेंसी कॉपी करें", "वेंडरिंग एनेबल करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which package provides functions for binary data?",
        "question_hi": "बाइनरी डेटा के लिए फंक्शन कौन सा पैकेज प्रोवाइड करता है?",
        "options_en": ["encoding/binary", "binary", "bytes", "encoding"],
        "options_hi": ["encoding/binary", "binary", "bytes", "encoding"],
        "answer_en": "encoding/binary",
        "answer_hi": "encoding/binary",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the purpose of the 'go mod download' command?",
        "question_hi": "'go mod download' कमांड का उद्देश्य क्या है?",
        "options_en": ["Download modules", "Cache dependencies", "Update packages", "All of the above"],
        "options_hi": ["मॉड्यूल डाउनलोड करें", "डिपेंडेंसी कैश करें", "पैकेज अपडेट करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How do you implement a custom error type?",
        "question_hi": "कस्टम एरर टाइप कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Implement error interface", "Use struct with Error method", "Embed error type", "All of the above"],
        "options_hi": ["error इंटरफेस इम्प्लीमेंट करें", "Error मेथड के साथ स्ट्रक्ट उपयोग करें", "error टाइप एम्बेड करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of the 'go mod verify' command?",
        "question_hi": "'go mod verify' कमांड का उद्देश्य क्या है?",
        "options_en": ["Verify dependencies", "Check integrity", "Validate checksums", "All of the above"],
        "options_hi": ["डिपेंडेंसी वेरिफाई करें", "इंटीग्रिटी चेक करें", "चेकसम वैलिडेट करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which package provides functions for SQL databases?",
        "question_hi": "SQL डेटाबेस के लिए फंक्शन कौन सा पैकेज प्रोवाइड करता है?",
        "options_en": ["database/sql", "sql", "db", "database"],
        "options_hi": ["database/sql", "sql", "db", "database"],
        "answer_en": "database/sql",
        "answer_hi": "database/sql",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of the 'go mod graph' command?",
        "question_hi": "'go mod graph' कमांड का उद्देश्य क्या है?",
        "options_en": ["Show dependency graph", "Display module relationships", "Visualize dependencies", "All of the above"],
        "options_hi": ["डिपेंडेंसी ग्राफ दिखाएं", "मॉड्यूल रिलेशनशिप डिस्प्ले करें", "डिपेंडेंसी विजुअलाइज़ करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How do you implement a method on non-struct type?",
        "question_hi": "नॉन-स्ट्रक्ट टाइप पर मेथड कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use type alias", "Define on custom type", "Use receiver type", "All of the above"],
        "options_hi": ["टाइप एलियास उपयोग करें", "कस्टम टाइप पर डिफाइन करें", "रिसीवर टाइप उपयोग करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of the 'go mod why' command?",
        "question_hi": "'go mod why' कमांड का उद्देश्य क्या है?",
        "options_en": ["Explain dependencies", "Show requirement reasons", "Analyze imports", "All of the above"],
        "options_hi": ["डिपेंडेंसी एक्सप्लेन करें", "रिक्वायरमेंट रीजन दिखाएं", "इम्पोर्ट एनालाइज़ करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which package provides HTTP/2 support?",
        "question_hi": "HTTP/2 सपोर्ट कौन सा पैकेज प्रोवाइड करता है?",
        "options_en": ["golang.org/x/net/http2", "net/http2", "http2", "net/http"],
        "options_hi": ["golang.org/x/net/http2", "net/http2", "http2", "net/http"],
        "answer_en": "golang.org/x/net/http2",
        "answer_hi": "golang.org/x/net/http2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is the purpose of the 'go mod edit' command?",
        "question_hi": "'go mod edit' कमांड का उद्देश्य क्या है?",
        "options_en": ["Edit go.mod", "Modify module", "Update requirements", "All of the above"],
        "options_hi": ["go.mod एडिट करें", "मॉड्यूल मॉडिफाई करें", "रिक्वायरमेंट अपडेट करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "How do you implement a generic function?",
        "question_hi": "जेनरिक फंक्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use type parameters", "Define constraints", "Use interfaces", "All of the above"],
        "options_hi": ["टाइप पैरामीटर उपयोग करें", "कंस्ट्रेंट डिफाइन करें", "इंटरफेस उपयोग करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the purpose of the 'go.sum' file?",
        "question_hi": "'go.sum' फाइल का उद्देश्य क्या है?",
        "options_en": ["Store checksums", "Verify integrity", "Security validation", "All of the above"],
        "options_hi": ["चेकसम स्टोर करें", "इंटीग्रिटी वेरिफाई करें", "सिक्योरिटी वैलिडेशन", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which package provides profiling support?",
        "question_hi": "प्रोफाइलिंग सपोर्ट कौन सा पैकेज प्रोवाइड करता है?",
        "options_en": ["runtime/pprof", "pprof", "profile", "runtime"],
        "options_hi": ["runtime/pprof", "pprof", "profile", "runtime"],
        "answer_en": "runtime/pprof",
        "answer_hi": "runtime/pprof",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of the 'go.mod' file?",
        "question_hi": "'go.mod' फाइल का उद्देश्य क्या है?",
        "options_en": ["Define module", "Specify dependencies", "Set requirements", "All of the above"],
        "options_hi": ["मॉड्यूल डिफाइन करें", "डिपेंडेंसी स्पेसिफाई करें", "रिक्वायरमेंट सेट करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "How do you implement a type constraint?",
        "question_hi": "टाइप कंस्ट्रेंट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use interface", "Define type set", "Specify requirements", "All of the above"],
        "options_hi": ["इंटरफेस उपयोग करें", "टाइप सेट डिफाइन करें", "रिक्वायरमेंट स्पेसिफाई करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of the 'any' type alias?",
        "question_hi": "'any' टाइप एलियास का उद्देश्य क्या है?",
        "options_en": ["Alias for interface{}", "Better readability", "Generic type", "All of the above"],
        "options_hi": ["interface{} के लिए एलियास", "बेहतर रीडेबिलिटी", "जेनरिक टाइप", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which package provides functions for testing?",
        "question_hi": "टेस्टिंग के लिए फंक्शन कौन सा पैकेज प्रोवाइड करता है?",
        "options_en": ["testing", "test", "unit", "check"],
        "options_hi": ["testing", "test", "unit", "check"],
        "answer_en": "testing",
        "answer_hi": "testing",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the purpose of the 'comparable' constraint?",
        "question_hi": "'comparable' कंस्ट्रेंट का उद्देश्य क्या है?",
        "options_en": ["Allow == and !=", "Support comparison", "Generic constraint", "All of the above"],
        "options_hi": ["== और != अलाउ करें", "कम्पेरिजन सपोर्ट करें", "जेनरिक कंस्ट्रेंट", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "How do you implement a benchmark test?",
        "question_hi": "बेंचमार्क टेस्ट कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Use Benchmark function", "Run with -bench", "Measure performance", "All of the above"],
        "options_hi": ["Benchmark फंक्शन उपयोग करें", "-bench के साथ रन करें", "परफॉर्मेंस मापें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of the '~' token in constraints?",
        "question_hi": "कंस्ट्रेंट में '~' टोकन का उद्देश्य क्या है?",
        "options_en": ["Include underlying types", "Allow type approximation", "Support derived types", "All of the above"],
        "options_hi": ["अंडरलाइंग टाइप इन्क्लूड करें", "टाइप एप्रोक्सिमेशन अलाउ करें", "डेराइव्ड टाइप सपोर्ट करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which package provides functions for logging?",
        "question_hi": "लॉगिंग के लिए फंक्शन कौन सा पैकेज प्रोवाइड करता है?",
        "options_en": ["log", "logging", "logger", "fmt"],
        "options_hi": ["log", "logging", "logger", "fmt"],
        "answer_en": "log",
        "answer_hi": "log",
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