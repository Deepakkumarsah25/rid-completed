const questions = [
    // Go Language Questions (1-25)
    {
        "num": 1,
        "question_en": "What is Go (Golang) primarily known for?",
        "question_hi": "Go (Golang) मुख्य रूप से किसके लिए जाना जाता है?",
        "options_en": ["Concurrency and performance", "Dynamic typing", "Browser compatibility", "Mobile development"],
        "options_hi": ["कनकरेंसी और परफॉर्मेंस", "डायनामिक टाइपिंग", "ब्राउज़र कम्पैटिबिलिटी", "मोबाइल डेवलपमेंट"],
        "answer_en": "Concurrency and performance",
        "answer_hi": "कनकरेंसी और परफॉर्मेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which company originally developed Go?",
        "question_hi": "Go को मूल रूप से किस कंपनी ने डेवलप किया?",
        "options_en": ["Microsoft", "Google", "Facebook", "Apple"],
        "options_hi": ["माइक्रोसॉफ्ट", "गूगल", "फेसबुक", "एप्पल"],
        "answer_en": "Google",
        "answer_hi": "गूगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the file extension for Go source files?",
        "question_hi": "Go सोर्स फाइलों का एक्सटेंशन क्या है?",
        "options_en": [".go", ".golang", ".gc", ".g"],
        "options_hi": [".go", ".golang", ".gc", ".g"],
        "answer_en": ".go",
        "answer_hi": ".go",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you declare a variable in Go?",
        "question_hi": "Go में वेरिएबल कैसे डिक्लेयर करते हैं?",
        "options_en": ["var x int", "variable x int", "int x", "x := int"],
        "options_hi": ["var x int", "variable x int", "int x", "x := int"],
        "answer_en": "var x int",
        "answer_hi": "var x int",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is a Goroutine in Go?",
        "question_hi": "Go में Goroutine क्या है?",
        "options_en": ["A lightweight thread", "A database connection", "A type of variable", "A package manager"],
        "options_hi": ["एक लाइटवेट थ्रेड", "एक डेटाबेस कनेक्शन", "एक प्रकार का वेरिएबल", "एक पैकेज मैनेजर"],
        "answer_en": "A lightweight thread",
        "answer_hi": "एक लाइटवेट थ्रेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which keyword is used to create a Goroutine?",
        "question_hi": "Goroutine बनाने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["go", "goroutine", "async", "spawn"],
        "options_hi": ["go", "goroutine", "async", "spawn"],
        "answer_en": "go",
        "answer_hi": "go",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the zero value of a pointer in Go?",
        "question_hi": "Go में पॉइंटर का जीरो वैल्यू क्या है?",
        "options_en": ["nil", "0", "null", "undefined"],
        "options_hi": ["nil", "0", "null", "undefined"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How do you import a package in Go?",
        "question_hi": "Go में पैकेज कैसे इम्पोर्ट करते हैं?",
        "options_en": ["import \"fmt\"", "include \"fmt\"", "require \"fmt\"", "using \"fmt\""],
        "options_hi": ["import \"fmt\"", "include \"fmt\"", "require \"fmt\"", "using \"fmt\""],
        "answer_en": "import \"fmt\"",
        "answer_hi": "import \"fmt\"",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of channels in Go?",
        "question_hi": "Go में चैनल्स का उद्देश्य क्या है?",
        "options_en": ["Communication between Goroutines", "File handling", "Network programming", "Database operations"],
        "options_hi": ["Goroutines के बीच कम्युनिकेशन", "फाइल हैंडलिंग", "नेटवर्क प्रोग्रामिंग", "डेटाबेस ऑपरेशन्स"],
        "answer_en": "Communication between Goroutines",
        "answer_hi": "Goroutines के बीच कम्युनिकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which function is the entry point of a Go program?",
        "question_hi": "Go प्रोग्राम का एंट्री पॉइंट कौन सा फंक्शन है?",
        "options_en": ["main()", "start()", "init()", "run()"],
        "options_hi": ["main()", "start()", "init()", "run()"],
        "answer_en": "main()",
        "answer_hi": "main()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What does GOPATH environment variable specify?",
        "question_hi": "GOPATH एनवायरनमेंट वेरिएबल क्या स्पेसिफाई करता है?",
        "options_en": ["Workspace directory", "Go installation path", "Temporary files location", "Compiler options"],
        "options_hi": ["वर्कस्पेस डायरेक्टरी", "Go इंस्टालेशन पाथ", "टेम्पररी फाइल्स लोकेशन", "कंपाइलर ऑप्शन्स"],
        "answer_en": "Workspace directory",
        "answer_hi": "वर्कस्पेस डायरेक्टरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How do you initialize a slice in Go?",
        "question_hi": "Go में स्लाइस कैसे इनिशियलाइज़ करते हैं?",
        "options_en": ["make([]int, 5)", "new([]int, 5)", "slice([]int, 5)", "create([]int, 5)"],
        "options_hi": ["make([]int, 5)", "new([]int, 5)", "slice([]int, 5)", "create([]int, 5)"],
        "answer_en": "make([]int, 5)",
        "answer_hi": "make([]int, 5)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the difference between array and slice in Go?",
        "question_hi": "Go में ऐरे और स्लाइस में क्या अंतर है?",
        "options_en": ["Slice is dynamic, array has fixed size", "Array is dynamic, slice has fixed size", "No difference", "Slice is faster"],
        "options_hi": ["स्लाइस डायनामिक है, ऐरे का साइज फिक्स्ड है", "ऐरे डायनामिक है, स्लाइस का साइज फिक्स्ड है", "कोई अंतर नहीं", "स्लाइस फास्टर है"],
        "answer_en": "Slice is dynamic, array has fixed size",
        "answer_hi": "स्लाइस डायनामिक है, ऐरे का साइज फिक्स्ड है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which keyword is used for error handling in Go?",
        "question_hi": "Go में एरर हैंडलिंग के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
        "options_en": ["error", "catch", "try", "defer"],
        "options_hi": ["error", "catch", "try", "defer"],
        "answer_en": "error",
        "answer_hi": "error",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of defer keyword in Go?",
        "question_hi": "Go में defer कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Schedule function call for later execution", "Define constants", "Handle errors", "Create Goroutines"],
        "options_hi": ["फंक्शन कॉल को बाद में एक्जीक्यूट करने के लिए शेड्यूल करना", "कॉन्स्टेंट्स डिफाइन करना", "एरर्स हैंडल करना", "Goroutines बनाना"],
        "answer_en": "Schedule function call for later execution",
        "answer_hi": "फंक्शन कॉल को बाद में एक्जीक्यूट करने के लिए शेड्यूल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "How do you check if a key exists in a map?",
        "question_hi": "मैप में की एक्सिस्ट करती है या नहीं, कैसे चेक करते हैं?",
        "options_en": ["value, ok := map[key]", "map.hasKey(key)", "map.contains(key)", "key in map"],
        "options_hi": ["value, ok := map[key]", "map.hasKey(key)", "map.contains(key)", "key in map"],
        "answer_en": "value, ok := map[key]",
        "answer_hi": "value, ok := map[key]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is an interface in Go?",
        "question_hi": "Go में इंटरफेस क्या है?",
        "options_en": ["A set of method signatures", "A type of variable", "A package", "A Goroutine"],
        "options_hi": ["मेथड सिग्नेचर्स का एक सेट", "एक प्रकार का वेरिएबल", "एक पैकेज", "एक Goroutine"],
        "answer_en": "A set of method signatures",
        "answer_hi": "मेथड सिग्नेचर्स का एक सेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which command compiles Go source code?",
        "question_hi": "कौन सा कमांड Go सोर्स कोड को कंपाइल करता है?",
        "options_en": ["go build", "go compile", "go run", "go make"],
        "options_hi": ["go build", "go compile", "go run", "go make"],
        "answer_en": "go build",
        "answer_hi": "go build",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the zero value for numeric types in Go?",
        "question_hi": "Go में न्यूमेरिक टाइप्स का जीरो वैल्यू क्या है?",
        "options_en": ["0", "nil", "null", "undefined"],
        "options_hi": ["0", "nil", "null", "undefined"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "How do you create a buffered channel?",
        "question_hi": "बफर्ड चैनल कैसे बनाते हैं?",
        "options_en": ["make(chan int, 10)", "chan int(10)", "new(chan int, 10)", "buffer(chan int, 10)"],
        "options_hi": ["make(chan int, 10)", "chan int(10)", "new(chan int, 10)", "buffer(chan int, 10)"],
        "answer_en": "make(chan int, 10)",
        "answer_hi": "make(chan int, 10)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the purpose of select statement in Go?",
        "question_hi": "Go में select स्टेटमेंट का उद्देश्य क्या है?",
        "options_en": ["Wait on multiple channel operations", "Choose between different types", "Select data from database", "Filter slices"],
        "options_hi": ["मल्टीपल चैनल ऑपरेशन्स पर वेट करना", "अलग-अलग टाइप्स के बीच चुनना", "डेटाबेस से डेटा सिलेक्ट करना", "स्लाइस फिल्टर करना"],
        "answer_en": "Wait on multiple channel operations",
        "answer_hi": "मल्टीपल चैनल ऑपरेशन्स पर वेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which function is used to format and print in Go?",
        "question_hi": "Go में फॉर्मेट और प्रिंट करने के लिए कौन सा फंक्शन उपयोग किया जाता है?",
        "options_en": ["fmt.Printf()", "console.log()", "print()", "System.out.println()"],
        "options_hi": ["fmt.Printf()", "console.log()", "print()", "System.out.println()"],
        "answer_en": "fmt.Printf()",
        "answer_hi": "fmt.Printf()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is a struct in Go?",
        "question_hi": "Go में struct क्या है?",
        "options_en": ["A collection of fields", "A function", "A package", "A Goroutine"],
        "options_hi": ["फील्ड्स का कलेक्शन", "एक फंक्शन", "एक पैकेज", "एक Goroutine"],
        "answer_en": "A collection of fields",
        "answer_hi": "फील्ड्स का कलेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How do you install third-party packages in Go?",
        "question_hi": "Go में थर्ड-पार्टी पैकेज कैसे इंस्टॉल करते हैं?",
        "options_en": ["go get", "go install", "go add", "go import"],
        "options_hi": ["go get", "go install", "go add", "go import"],
        "answer_en": "go get",
        "answer_hi": "go get",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of context package in Go?",
        "question_hi": "Go में context पैकेज का उद्देश्य क्या है?",
        "options_en": ["Manage request-scoped values and cancellation", "Handle database connections", "Format strings", "Create web servers"],
        "options_hi": ["रिक्वेस्ट-स्कोप्ड वैल्यूज और कैंसलेशन मैनेज करना", "डेटाबेस कनेक्शन्स हैंडल करना", "स्ट्रिंग्स फॉर्मेट करना", "वेब सर्वर्स बनाना"],
        "answer_en": "Manage request-scoped values and cancellation",
        "answer_hi": "रिक्वेस्ट-स्कोप्ड वैल्यूज और कैंसलेशन मैनेज करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the default value for a boolean in Go?",
        "question_hi": "Go में बूलियन का डिफॉल्ट वैल्यू क्या है?",
        "options_en": ["false", "true", "nil", "0"],
        "options_hi": ["false", "true", "nil", "0"],
        "answer_en": "false",
        "answer_hi": "false",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "How do you convert a string to integer in Go?",
        "question_hi": "Go में स्ट्रिंग को इंटीजर में कैसे कन्वर्ट करते हैं?",
        "options_en": ["strconv.Atoi()", "int.parse()", "string.ToInt()", "convert.Int()"],
        "options_hi": ["strconv.Atoi()", "int.parse()", "string.ToInt()", "convert.Int()"],
        "answer_en": "strconv.Atoi()",
        "answer_hi": "strconv.Atoi()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the purpose of range keyword in Go?",
        "question_hi": "Go में range कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Iterate over arrays, slices, maps, or channels", "Define value ranges", "Check value boundaries", "Create number sequences"],
        "options_hi": ["ऐरे, स्लाइस, मैप या चैनल्स पर इटरेट करना", "वैल्यू रेंजेज डिफाइन करना", "वैल्यू बाउंड्रीज चेक करना", "नंबर सीक्वेंस बनाना"],
        "answer_en": "Iterate over arrays, slices, maps, or channels",
        "answer_hi": "ऐरे, स्लाइस, मैप या चैनल्स पर इटरेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which method is used to get length of a slice?",
        "question_hi": "स्लाइस की लेंथ पाने के लिए कौन सी मेथड उपयोग की जाती है?",
        "options_en": ["len()", "length()", "size()", "count()"],
        "options_hi": ["len()", "length()", "size()", "count()"],
        "answer_en": "len()",
        "answer_hi": "len()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the difference between := and = in Go?",
        "question_hi": "Go में := और = में क्या अंतर है?",
        "options_en": [":= declares and assigns, = only assigns", "= declares and assigns, := only assigns", "No difference", ":= for constants, = for variables"],
        "options_hi": [":= डिक्लेयर और असाइन करता है, = सिर्फ असाइन करता है", "= डिक्लेयर और असाइन करता है, := सिर्फ असाइन करता है", "कोई अंतर नहीं", ":= कॉन्स्टेंट्स के लिए, = वेरिएबल्स के लिए"],
        "answer_en": ":= declares and assigns, = only assigns",
        "answer_hi": ":= डिक्लेयर और असाइन करता है, = सिर्फ असाइन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "How do you handle multiple return values in Go?",
        "question_hi": "Go में मल्टीपल रिटर्न वैल्यूज कैसे हैंडल करते हैं?",
        "options_en": ["a, b := function()", "return [a, b]", "function().a, function().b", "tuple := function()"],
        "options_hi": ["a, b := function()", "return [a, b]", "function().a, function().b", "tuple := function()"],
        "answer_en": "a, b := function()",
        "answer_hi": "a, b := function()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the purpose of go.mod file?",
        "question_hi": "go.mod फाइल का उद्देश्य क्या है?",
        "options_en": ["Module dependency management", "Code formatting", "Testing configuration", "Build optimization"],
        "options_hi": ["मॉड्यूल डिपेंडेंसी मैनेजमेंट", "कोड फॉर्मेटिंग", "टेस्टिंग कॉन्फिगरेशन", "बिल्ड ऑप्टिमाइजेशन"],
        "answer_en": "Module dependency management",
        "answer_hi": "मॉड्यूल डिपेंडेंसी मैनेजमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which package is used for HTTP server in Go?",
        "question_hi": "Go में HTTP सर्वर के लिए कौन सा पैकेज उपयोग किया जाता है?",
        "options_en": ["net/http", "http/server", "web/http", "server/http"],
        "options_hi": ["net/http", "http/server", "web/http", "server/http"],
        "answer_en": "net/http",
        "answer_hi": "net/http",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is a method receiver in Go?",
        "question_hi": "Go में मेथड रिसीवर क्या है?",
        "options_en": ["A parameter that binds method to type", "A function that receives data", "A channel receiver", "A HTTP request handler"],
        "options_hi": ["एक पैरामीटर जो मेथड को टाइप से बाइंड करता है", "एक फंक्शन जो डेटा रिसीव करता है", "एक चैनल रिसीवर", "एक HTTP रिक्वेस्ट हैंडलर"],
        "answer_en": "A parameter that binds method to type",
        "answer_hi": "एक पैरामीटर जो मेथड को टाइप से बाइंड करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "How do you write unit tests in Go?",
        "question_hi": "Go में यूनिट टेस्ट कैसे लिखते हैं?",
        "options_en": ["Create _test.go files with Test prefix functions", "Use testing package with test functions", "Both A and B", "Use JUnit style tests"],
        "options_hi": ["_test.go फाइल्स बनाएं जिनमें Test प्रीफिक्स फंक्शन हों", "testing पैकेज का उपयोग test फंक्शन्स के साथ करें", "A और B दोनों", "JUnit स्टाइल टेस्ट्स का उपयोग करें"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the purpose of sync package?",
        "question_hi": "sync पैकेज का उद्देश्य क्या है?",
        "options_en": ["Synchronization primitives", "Database synchronization", "File sync operations", "Network sync"],
        "options_hi": ["सिंक्रोनाइजेशन प्रिमिटिव्स", "डेटाबेस सिंक्रोनाइजेशन", "फाइल सिंक ऑपरेशन्स", "नेटवर्क सिंक"],
        "answer_en": "Synchronization primitives",
        "answer_hi": "सिंक्रोनाइजेशन प्रिमिटिव्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "How do you handle JSON in Go?",
        "question_hi": "Go में JSON कैसे हैंडल करते हैं?",
        "options_en": ["encoding/json package", "json package", "format/json package", "data/json package"],
        "options_hi": ["encoding/json पैकेज", "json पैकेज", "format/json पैकेज", "data/json पैकेज"],
        "answer_en": "encoding/json package",
        "answer_hi": "encoding/json पैकेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the difference between capital and lowercase first letter in Go?",
        "question_hi": "Go में कैपिटल और लोअरकेस फर्स्ट लेटर में क्या अंतर है?",
        "options_en": ["Capital: exported, Lowercase: private", "Capital: constant, Lowercase: variable", "No difference", "Capital: public, Lowercase: protected"],
        "options_hi": ["कैपिटल: एक्सपोर्टेड, लोअरकेस: प्राइवेट", "कैपिटल: कॉन्स्टेंट, लोअरकेस: वेरिएबल", "कोई अंतर नहीं", "कैपिटल: पब्लिक, लोअरकेस: प्रोटेक्टेड"],
        "answer_en": "Capital: exported, Lowercase: private",
        "answer_hi": "कैपिटल: एक्सपोर्टेड, लोअरकेस: प्राइवेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which function is used to recover from panics?",
        "question_hi": "पैनिक्स से रिकवर करने के लिए कौन सा फंक्शन उपयोग किया जाता है?",
        "options_en": ["recover()", "catch()", "handle()", "rescue()"],
        "options_hi": ["recover()", "catch()", "handle()", "rescue()"],
        "answer_en": "recover()",
        "answer_hi": "recover()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the purpose of go fmt command?",
        "question_hi": "go fmt कमांड का उद्देश्य क्या है?",
        "options_en": ["Format Go source code", "Format disk", "Format strings", "Format numbers"],
        "options_hi": ["Go सोर्स कोड फॉर्मेट करना", "डिस्क फॉर्मेट करना", "स्ट्रिंग्स फॉर्मेट करना", "नंबर्स फॉर्मेट करना"],
        "answer_en": "Format Go source code",
        "answer_hi": "Go सोर्स कोड फॉर्मेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "How do you create a custom error in Go?",
        "question_hi": "Go में कस्टम एरर कैसे बनाते हैं?",
        "options_en": ["errors.New() or fmt.Errorf()", "error.Create()", "new Error()", "Error{}"],
        "options_hi": ["errors.New() या fmt.Errorf()", "error.Create()", "new Error()", "Error{}"],
        "answer_en": "errors.New() or fmt.Errorf()",
        "answer_hi": "errors.New() या fmt.Errorf()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the purpose of iota in Go?",
        "question_hi": "Go में iota का उद्देश्य क्या है?",
        "options_en": ["Create enumerated constants", "Iterate over collections", "Create infinite loops", "Handle I/O operations"],
        "options_hi": ["एन्युमरेटेड कॉन्स्टेंट्स बनाना", "कलेक्शन्स पर इटरेट करना", "इनफिनाइट लूप्स बनाना", "I/O ऑपरेशन्स हैंडल करना"],
        "answer_en": "Create enumerated constants",
        "answer_hi": "एन्युमरेटेड कॉन्स्टेंट्स बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which package is used for file operations?",
        "question_hi": "फाइल ऑपरेशन्स के लिए कौन सा पैकेज उपयोग किया जाता है?",
        "options_en": ["os", "file", "io", "filesystem"],
        "options_hi": ["os", "file", "io", "filesystem"],
        "answer_en": "os",
        "answer_hi": "os",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the difference between concurrency and parallelism?",
        "question_hi": "कनकरेंसी और पैरेललिज्म में क्या अंतर है?",
        "options_en": ["Concurrency: dealing with multiple tasks, Parallelism: doing multiple tasks simultaneously", "No difference", "Parallelism: dealing with multiple tasks, Concurrency: doing multiple tasks simultaneously", "Both are same"],
        "options_hi": ["कनकरेंसी: मल्टीपल टास्क्स से डील करना, पैरेललिज्म: मल्टीपल टास्क्स सिमलटेनियसली करना", "कोई अंतर नहीं", "पैरेललिज्म: मल्टीपल टास्क्स से डील करना, कनकरेंसी: मल्टीपल टास्क्स सिमलटेनियसली करना", "दोनों समान हैं"],
        "answer_en": "Concurrency: dealing with multiple tasks, Parallelism: doing multiple tasks simultaneously",
        "answer_hi": "कनकरेंसी: मल्टीपल टास्क्स से डील करना, पैरेललिज्म: मल्टीपल टास्क्स सिमलटेनियसली करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "How do you implement inheritance in Go?",
        "question_hi": "Go में इनहेरिटेंस कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using composition and embedding", "Using extends keyword", "Using inherit keyword", "Go doesn't support inheritance"],
        "options_hi": ["कम्पोजिशन और एम्बेडिंग का उपयोग करके", "extends कीवर्ड का उपयोग करके", "inherit कीवर्ड का उपयोग करके", "Go इनहेरिटेंस सपोर्ट नहीं करता"],
        "answer_en": "Using composition and embedding",
        "answer_hi": "कम्पोजिशन और एम्बेडिंग का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the purpose of go vet command?",
        "question_hi": "go vet कमांड का उद्देश्य क्या है?",
        "options_en": ["Report suspicious constructs", "Veterinary checks for code", "Validate variables", "Verify types"],
        "options_hi": ["सस्पीशियस कंस्ट्रक्ट्स रिपोर्ट करना", "कोड के लिए वेटरनरी चेक्स", "वेरिएबल्स वैलिडेट करना", "टाइप्स वेरिफाई करना"],
        "answer_en": "Report suspicious constructs",
        "answer_hi": "सस्पीशियस कंस्ट्रक्ट्स रिपोर्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "How do you handle timeouts with contexts?",
        "question_hi": "कॉन्टेक्स्ट्स के साथ टाइमआउट्स कैसे हैंडल करते हैं?",
        "options_en": ["context.WithTimeout()", "context.Timeout()", "time.WithContext()", "context.SetTimeout()"],
        "options_hi": ["context.WithTimeout()", "context.Timeout()", "time.WithContext()", "context.SetTimeout()"],
        "answer_en": "context.WithTimeout()",
        "answer_hi": "context.WithTimeout()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the purpose of sync.WaitGroup?",
        "question_hi": "sync.WaitGroup का उद्देश्य क्या है?",
        "options_en": ["Wait for Goroutines to finish", "Group similar variables", "Wait for file operations", "Synchronize database operations"],
        "options_hi": ["Goroutines के खत्म होने का इंतज़ार करना", "समान वेरिएबल्स को ग्रुप करना", "फाइल ऑपरेशन्स का इंतज़ार करना", "डेटाबेस ऑपरेशन्स सिंक्रोनाइज़ करना"],
        "answer_en": "Wait for Goroutines to finish",
        "answer_hi": "Goroutines के खत्म होने का इंतज़ार करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How do you implement polymorphism in Go?",
        "question_hi": "Go में पॉलीमॉर्फिज्म कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using interfaces", "Using inheritance", "Using templates", "Using generics"],
        "options_hi": ["इंटरफेस का उपयोग करके", "इनहेरिटेंस का उपयोग करके", "टेम्पलेट्स का उपयोग करके", "जेनेरिक्स का उपयोग करके"],
        "answer_en": "Using interfaces",
        "answer_hi": "इंटरफेस का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the purpose of go doc command?",
        "question_hi": "go doc कमांड का उद्देश्य क्या है?",
        "options_en": ["Show documentation", "Generate documents", "Format documents", "Validate documentation"],
        "options_hi": ["डॉक्युमेंटेशन दिखाना", "डॉक्युमेंट्स जेनरेट करना", "डॉक्युमेंट्स फॉर्मेट करना", "डॉक्युमेंटेशन वैलिडेट करना"],
        "answer_en": "Show documentation",
        "answer_hi": "डॉक्युमेंटेशन दिखाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "How do you handle database operations in Go?",
        "question_hi": "Go में डेटाबेस ऑपरेशन्स कैसे हैंडल करते हैं?",
        "options_en": ["database/sql package with drivers", "db package", "sql package", "database package"],
        "options_hi": ["database/sql पैकेज ड्राइवर्स के साथ", "db पैकेज", "sql पैकेज", "database पैकेज"],
        "answer_en": "database/sql package with drivers",
        "answer_hi": "database/sql पैकेज ड्राइवर्स के साथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the purpose of sync.Mutex?",
        "question_hi": "sync.Mutex का उद्देश्य क्या है?",
        "options_en": ["Mutual exclusion lock", "Multiple access lock", "Memory management", "Method execution"],
        "options_hi": ["म्यूचुअल एक्सक्लूजन लॉक", "मल्टीपल एक्सेस लॉक", "मेमोरी मैनेजमेंट", "मेथड एक्जीक्यूशन"],
        "answer_en": "Mutual exclusion lock",
        "answer_hi": "म्यूचुअल एक्सक्लूजन लॉक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "How do you implement middleware in Go HTTP handlers?",
        "question_hi": "Go HTTP हैंडलर्स में मिडलवेयर कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Function composition", "Class inheritance", "Interface implementation", "Method overriding"],
        "options_hi": ["फंक्शन कम्पोजिशन", "क्लास इनहेरिटेंस", "इंटरफेस इम्प्लीमेंटेशन", "मेथड ओवरराइडिंग"],
        "answer_en": "Function composition",
        "answer_hi": "फंक्शन कम्पोजिशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is the purpose of go generate command?",
        "question_hi": "go generate कमांड का उद्देश्य क्या है?",
        "options_en": ["Run code generation tools", "Generate random numbers", "Generate test data", "Generate documentation"],
        "options_hi": ["कोड जेनरेशन टूल्स रन करना", "रैंडम नंबर्स जेनरेट करना", "टेस्ट डेटा जेनरेट करना", "डॉक्युमेंटेशन जेनरेट करना"],
        "answer_en": "Run code generation tools",
        "answer_hi": "कोड जेनरेशन टूल्स रन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "How do you handle environment variables in Go?",
        "question_hi": "Go में एनवायरनमेंट वेरिएबल्स कैसे हैंडल करते हैं?",
        "options_en": ["os.Getenv()", "env.Get()", "system.Getenv()", "runtime.Getenv()"],
        "options_hi": ["os.Getenv()", "env.Get()", "system.Getenv()", "runtime.Getenv()"],
        "answer_en": "os.Getenv()",
        "answer_hi": "os.Getenv()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the purpose of reflect package?",
        "question_hi": "reflect पैकेज का उद्देश्य क्या है?",
        "options_en": ["Runtime reflection", "Light reflection", "Code mirroring", "Data reflection"],
        "options_hi": ["रनटाइम रिफ्लेक्शन", "लाइट रिफ्लेक्शन", "कोड मिररिंग", "डेटा रिफ्लेक्शन"],
        "answer_en": "Runtime reflection",
        "answer_hi": "रनटाइम रिफ्लेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How do you implement graceful shutdown in Go servers?",
        "question_hi": "Go सर्वर्स में ग्रेसफुल शटडाउन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using context and signal handling", "Using shutdown command", "Using stop function", "Using exit handler"],
        "options_hi": ["कॉन्टेक्स्ट और सिग्नल हैंडलिंग का उपयोग करके", "shutdown कमांड का उपयोग करके", "stop फंक्शन का उपयोग करके", "exit हैंडलर का उपयोग करके"],
        "answer_en": "Using context and signal handling",
        "answer_hi": "कॉन्टेक्स्ट और सिग्नल हैंडलिंग का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the purpose of go mod tidy command?",
        "question_hi": "go mod tidy कमांड का उद्देश्य क्या है?",
        "options_en": ["Add missing and remove unused modules", "Tidy code formatting", "Organize imports", "Clean build cache"],
        "options_hi": ["मिसिंग मॉड्यूल्स ऐड करना और अनयूज्ड मॉड्यूल्स रिमूव करना", "कोड फॉर्मेटिंग टिडी करना", "इम्पोर्ट्स ऑर्गनाइज़ करना", "बिल्ड कैश क्लीन करना"],
        "answer_en": "Add missing and remove unused modules",
        "answer_hi": "मिसिंग मॉड्यूल्स ऐड करना और अनयूज्ड मॉड्यूल्स रिमूव करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "How do you handle configuration in Go applications?",
        "question_hi": "Go एप्लिकेशन्स में कॉन्फिगरेशन कैसे हैंडल करते हैं?",
        "options_en": ["Environment variables, config files, flags", "Only environment variables", "Only config files", "Hardcoded values"],
        "options_hi": ["एनवायरनमेंट वेरिएबल्स, कॉन्फिग फाइल्स, फ्लैग्स", "सिर्फ एनवायरनमेंट वेरिएबल्स", "सिर्फ कॉन्फिग फाइल्स", "हार्डकोडेड वैल्यूज"],
        "answer_en": "Environment variables, config files, flags",
        "answer_hi": "एनवायरनमेंट वेरिएबल्स, कॉन्फिग फाइल्स, फ्लैग्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the purpose of sync.Once?",
        "question_hi": "sync.Once का उद्देश्य क्या है?",
        "options_en": ["Ensure code runs only once", "Run code once per minute", "Execute code sequentially", "Prevent concurrent access"],
        "options_hi": ["यह सुनिश्चित करना कि कोड सिर्फ एक बार रन हो", "कोड को मिनट में एक बार रन करना", "कोड को सीक्वेंशियली एक्जीक्यूट करना", "कनकरेंट एक्सेस प्रिवेंट करना"],
        "answer_en": "Ensure code runs only once",
        "answer_hi": "यह सुनिश्चित करना कि कोड सिर्फ एक बार रन हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "How do you implement rate limiting in Go?",
        "question_hi": "Go में रेट लिमिटिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using time.Ticker and channels", "Using rate package", "Both A and B", "Using sleep functions"],
        "options_hi": ["time.Ticker और चैनल्स का उपयोग करके", "rate पैकेज का उपयोग करके", "A और B दोनों", "sleep फंक्शन्स का उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the purpose of go test command?",
        "question_hi": "go test कमांड का उद्देश्य क्या है?",
        "options_en": ["Run tests and benchmarks", "Test performance only", "Validate syntax", "Check code coverage"],
        "options_hi": ["टेस्ट्स और बेंचमार्क्स रन करना", "सिर्फ परफॉर्मेंस टेस्ट करना", "सिंटैक्स वैलिडेट करना", "कोड कवरेज चेक करना"],
        "answer_en": "Run tests and benchmarks",
        "answer_hi": "टेस्ट्स और बेंचमार्क्स रन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "How do you handle logging in Go?",
        "question_hi": "Go में लॉगिंग कैसे हैंडल करते हैं?",
        "options_en": ["log package or third-party libraries", "fmt.Println() only", "console.log()", "System.out.println()"],
        "options_hi": ["log पैकेज या थर्ड-पार्टी लाइब्रेरीज", "सिर्फ fmt.Println()", "console.log()", "System.out.println()"],
        "answer_en": "log package or third-party libraries",
        "answer_hi": "log पैकेज या थर्ड-पार्टी लाइब्रेरीज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is the purpose of sync.RWMutex?",
        "question_hi": "sync.RWMutex का उद्देश्य क्या है?",
        "options_en": ["Reader-writer mutual exclusion lock", "Read-write memory lock", "Random write mutex", "Recursive write mutex"],
        "options_hi": ["रीडर-राइटर म्यूचुअल एक्सक्लूजन लॉक", "रीड-राइट मेमोरी लॉक", "रैंडम राइट म्यूटेक्स", "रिकर्सिव राइट म्यूटेक्स"],
        "answer_en": "Reader-writer mutual exclusion lock",
        "answer_hi": "रीडर-राइटर म्यूचुअल एक्सक्लूजन लॉक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "How do you implement dependency injection in Go?",
        "question_hi": "Go में डिपेंडेंसी इंजेक्शन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using interfaces and constructor functions", "Using @Inject annotations", "Using DI frameworks", "Go doesn't support DI"],
        "options_hi": ["इंटरफेस और कंस्ट्रक्टर फंक्शन्स का उपयोग करके", "@Inject एनोटेशन का उपयोग करके", "DI फ्रेमवर्क्स का उपयोग करके", "Go DI सपोर्ट नहीं करता"],
        "answer_en": "Using interfaces and constructor functions",
        "answer_hi": "इंटरफेस और कंस्ट्रक्टर फंक्शन्स का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the purpose of go run command?",
        "question_hi": "go run कमांड का उद्देश्य क्या है?",
        "options_en": ["Compile and run Go program", "Run tests only", "Execute binary", "Run in debug mode"],
        "options_hi": ["Go प्रोग्राम को कंपाइल और रन करना", "सिर्फ टेस्ट्स रन करना", "बाइनरी एक्जीक्यूट करना", "डीबग मोड में रन करना"],
        "answer_en": "Compile and run Go program",
        "answer_hi": "Go प्रोग्राम को कंपाइल और रन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "How do you handle cross-compilation in Go?",
        "question_hi": "Go में क्रॉस-कंपाइलेशन कैसे हैंडल करते हैं?",
        "options_en": ["Set GOOS and GOARCH environment variables", "Use cross-compile command", "Modify compiler flags", "Use special build tool"],
        "options_hi": ["GOOS और GOARCH एनवायरनमेंट वेरिएबल्स सेट करें", "cross-compile कमांड का उपयोग करें", "कंपाइलर फ्लैग्स मॉडिफाई करें", "स्पेशल बिल्ड टूल का उपयोग करें"],
        "answer_en": "Set GOOS and GOARCH environment variables",
        "answer_hi": "GOOS और GOARCH एनवायरनमेंट वेरिएबल्स सेट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the purpose of sync.Cond?",
        "question_hi": "sync.Cond का उद्देश्य क्या है?",
        "options_en": ["Condition variable for synchronization", "Conditional compilation", "Code conditioning", "Variable conditions"],
        "options_hi": ["सिंक्रोनाइजेशन के लिए कंडीशन वेरिएबल", "कंडीशनल कंपाइलेशन", "कोड कंडीशनिंग", "वेरिएबल कंडीशन्स"],
        "answer_en": "Condition variable for synchronization",
        "answer_hi": "सिंक्रोनाइजेशन के लिए कंडीशन वेरिएबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "How do you implement circuit breaker pattern in Go?",
        "question_hi": "Go में सर्किट ब्रेकर पैटर्न कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using third-party libraries like hystrix-go", "Built-in circuit breaker", "Using channels and goroutines", "Go doesn't support circuit breakers"],
        "options_hi": ["hystrix-go जैसी थर्ड-पार्टी लाइब्रेरीज का उपयोग करके", "बिल्ट-इन सर्किट ब्रेकर", "चैनल्स और goroutines का उपयोग करके", "Go सर्किट ब्रेकर्स सपोर्ट नहीं करता"],
        "answer_en": "Using third-party libraries like hystrix-go",
        "answer_hi": "hystrix-go जैसी थर्ड-पार्टी लाइब्रेरीज का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the purpose of go clean command?",
        "question_hi": "go clean कमांड का उद्देश्य क्या है?",
        "options_en": ["Remove object files and cached files", "Clean code formatting", "Remove unused imports", "Clean documentation"],
        "options_hi": ["ऑब्जेक्ट फाइल्स और कैश्ड फाइल्स रिमूव करना", "कोड फॉर्मेटिंग क्लीन करना", "अनयूज्ड इम्पोर्ट्स रिमूव करना", "डॉक्युमेंटेशन क्लीन करना"],
        "answer_en": "Remove object files and cached files",
        "answer_hi": "ऑब्जेक्ट फाइल्स और कैश्ड फाइल्स रिमूव करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "How do you handle versioning in Go modules?",
        "question_hi": "Go मॉड्यूल्स में वर्जनिंग कैसे हैंडल करते हैं?",
        "options_en": ["Semantic versioning in go.mod", "Using git tags", "Both A and B", "Manual version tracking"],
        "options_hi": ["go.mod में सेमेंटिक वर्जनिंग", "git टैग्स का उपयोग करके", "A और B दोनों", "मैनुअल वर्जन ट्रैकिंग"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is the purpose of sync.Pool?",
        "question_hi": "sync.Pool का उद्देश्य क्या है?",
        "options_en": ["Pool of temporary objects for reuse", "Database connection pool", "Goroutine pool", "Memory pool"],
        "options_hi": ["रीयूज के लिए टेम्पररी ऑब्जेक्ट्स का पूल", "डेटाबेस कनेक्शन पूल", "Goroutine पूल", "मेमोरी पूल"],
        "answer_en": "Pool of temporary objects for reuse",
        "answer_hi": "रीयूज के लिए टेम्पररी ऑब्जेक्ट्स का पूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "How do you implement health checks in Go services?",
        "question_hi": "Go सर्विसेज में हेल्थ चेक्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["HTTP endpoint with status checks", "Background health monitor", "Both A and B", "Manual health checks"],
        "options_hi": ["स्टेटस चेक्स के साथ HTTP एंडपॉइंट", "बैकग्राउंड हेल्थ मॉनिटर", "A और B दोनों", "मैनुअल हेल्थ चेक्स"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the purpose of go list command?",
        "question_hi": "go list कमांड का उद्देश्य क्या है?",
        "options_en": ["List packages or modules", "List files in directory", "List variables in package", "List functions in file"],
        "options_hi": ["पैकेज या मॉड्यूल लिस्ट करना", "डायरेक्टरी में फाइल्स लिस्ट करना", "पैकेज में वेरिएबल्स लिस्ट करना", "फाइल में फंक्शन्स लिस्ट करना"],
        "answer_en": "List packages or modules",
        "answer_hi": "पैकेज या मॉड्यूल लिस्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "How do you implement retry logic in Go?",
        "question_hi": "Go में रिट्राय लॉजिक कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["For loop with sleep and backoff", "Using retry package", "Both A and B", "Using goto statements"],
        "options_hi": ["स्लीप और बैकऑफ के साथ for लूप", "retry पैकेज का उपयोग करके", "A और B दोनों", "goto स्टेटमेंट्स का उपयोग करके"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the purpose of go fix command?",
        "question_hi": "go fix कमांड का उद्देश्य क्या है?",
        "options_en": ["Update code to use new APIs", "Fix syntax errors", "Fix runtime errors", "Fix security issues"],
        "options_hi": ["नए APIs का उपयोग करने के लिए कोड अपडेट करना", "सिंटैक्स एरर्स फिक्स करना", "रनटाइम एरर्स फिक्स करना", "सिक्योरिटी इश्यूज फिक्स करना"],
        "answer_en": "Update code to use new APIs",
        "answer_hi": "नए APIs का उपयोग करने के लिए कोड अपडेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "How do you implement feature flags in Go?",
        "question_hi": "Go में फीचर फ्लैग्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Configuration with conditional logic", "Compiler flags", "Build tags", "Environment variables only"],
        "options_hi": ["कंडीशनल लॉजिक के साथ कॉन्फिगरेशन", "कंपाइलर फ्लैग्स", "बिल्ड टैग्स", "सिर्फ एनवायरनमेंट वेरिएबल्स"],
        "answer_en": "Configuration with conditional logic",
        "answer_hi": "कंडीशनल लॉजिक के साथ कॉन्फिगरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is the purpose of go tool pprof?",
        "question_hi": "go tool pprof का उद्देश्य क्या है?",
        "options_en": ["Performance profiling and visualization", "Package profiling", "Process monitoring", "Program tracing"],
        "options_hi": ["परफॉर्मेंस प्रोफाइलिंग और विज़ुअलाइजेशन", "पैकेज प्रोफाइलिंग", "प्रोसेस मॉनिटरिंग", "प्रोग्राम ट्रेसिंग"],
        "answer_en": "Performance profiling and visualization",
        "answer_hi": "परफॉर्मेंस प्रोफाइलिंग और विज़ुअलाइजेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "How do you implement distributed tracing in Go?",
        "question_hi": "Go में डिस्ट्रीब्यूटेड ट्रेसिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using OpenTelemetry or similar libraries", "Built-in tracing", "Custom logging", "Go doesn't support distributed tracing"],
        "options_hi": ["OpenTelemetry या समान लाइब्रेरीज का उपयोग करके", "बिल्ट-इन ट्रेसिंग", "कस्टम लॉगिंग", "Go डिस्ट्रीब्यूटेड ट्रेसिंग सपोर्ट नहीं करता"],
        "answer_en": "Using OpenTelemetry or similar libraries",
        "answer_hi": "OpenTelemetry या समान लाइब्रेरीज का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the purpose of go tool trace?",
        "question_hi": "go tool trace का उद्देश्य क्या है?",
        "options_en": ["Visualize Goroutine execution", "Trace network calls", "Trace file operations", "Trace memory allocation"],
        "options_hi": ["Goroutine एक्जीक्यूशन विज़ुअलाइज़ करना", "नेटवर्क कॉल्स ट्रेस करना", "फाइल ऑपरेशन्स ट्रेस करना", "मेमोरी अलोकेशन ट्रेस करना"],
        "answer_en": "Visualize Goroutine execution",
        "answer_hi": "Goroutine एक्जीक्यूशन विज़ुअलाइज़ करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "How do you implement API versioning in Go?",
        "question_hi": "Go में API वर्जनिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["URL path, query parameters, or headers", "Only URL path", "Only headers", "Only query parameters"],
        "options_hi": ["URL पाथ, क्वेरी पैरामीटर्स, या हेडर्स", "सिर्फ URL पाथ", "सिर्फ हेडर्स", "सिर्फ क्वेरी पैरामीटर्स"],
        "answer_en": "URL path, query parameters, or headers",
        "answer_hi": "URL पाथ, क्वेरी पैरामीटर्स, या हेडर्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the purpose of go tool cover?",
        "question_hi": "go tool cover का उद्देश्य क्या है?",
        "options_en": ["Code coverage analysis", "Cover letter generation", "Documentation coverage", "Test coverage only"],
        "options_hi": ["कोड कवरेज एनालिसिस", "कवर लेटर जेनरेशन", "डॉक्युमेंटेशन कवरेज", "सिर्फ टेस्ट कवरेज"],
        "answer_en": "Code coverage analysis",
        "answer_hi": "कोड कवरेज एनालिसिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "How do you implement caching in Go applications?",
        "question_hi": "Go एप्लिकेशन्स में कैशिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["In-memory maps, Redis, or other solutions", "Only in-memory maps", "Only Redis", "Built-in caching"],
        "options_hi": ["इन-मेमोरी मैप्स, Redis, या अन्य सोल्यूशन्स", "सिर्फ इन-मेमोरी मैप्स", "सिर्फ Redis", "बिल्ट-इन कैशिंग"],
        "answer_en": "In-memory maps, Redis, or other solutions",
        "answer_hi": "इन-मेमोरी मैप्स, Redis, या अन्य सोल्यूशन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the purpose of go tool nm?",
        "question_hi": "go tool nm का उद्देश्य क्या है?",
        "options_en": ["List symbols in object files", "Network monitoring", "Number manipulation", "Namespace management"],
        "options_hi": ["ऑब्जेक्ट फाइल्स में सिंबल्स लिस्ट करना", "नेटवर्क मॉनिटरिंग", "नंबर मैनिपुलेशन", "नेमस्पेस मैनेजमेंट"],
        "answer_en": "List symbols in object files",
        "answer_hi": "ऑब्जेक्ट फाइल्स में सिंबल्स लिस्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "How do you implement message queues in Go?",
        "question_hi": "Go में मैसेज क्यूज़ कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Channels or external systems like RabbitMQ", "Only channels", "Only external systems", "Go doesn't support message queues"],
        "options_hi": ["चैनल्स या RabbitMQ जैसी एक्सटर्नल सिस्टम्स", "सिर्फ चैनल्स", "सिर्फ एक्सटर्नल सिस्टम्स", "Go मैसेज क्यूज़ सपोर्ट नहीं करता"],
        "answer_en": "Channels or external systems like RabbitMQ",
        "answer_hi": "चैनल्स या RabbitMQ जैसी एक्सटर्नल सिस्टम्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the purpose of go tool objdump?",
        "question_hi": "go tool objdump का उद्देश्य क्या है?",
        "options_en": ["Disassemble executable files", "Object file dumping", "Memory dumping", "Binary analysis"],
        "options_hi": ["एक्जीक्यूटेबल फाइल्स डिसअसेंबल करना", "ऑब्जेक्ट फाइल डम्पिंग", "मेमोरी डम्पिंग", "बाइनरी एनालिसिस"],
        "answer_en": "Disassemble executable files",
        "answer_hi": "एक्जीक्यूटेबल फाइल्स डिसअसेंबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "How do you implement authentication in Go web applications?",
        "question_hi": "Go वेब एप्लिकेशन्स में ऑथेंटिकेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["JWT, OAuth, or session-based", "Only JWT", "Only OAuth", "Only session-based"],
        "options_hi": ["JWT, OAuth, या सेशन-बेस्ड", "सिर्फ JWT", "सिर्फ OAuth", "सिर्फ सेशन-बेस्ड"],
        "answer_en": "JWT, OAuth, or session-based",
        "answer_hi": "JWT, OAuth, या सेशन-बेस्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the purpose of go tool compile?",
        "question_hi": "go tool compile का उद्देश्य क्या है?",
        "options_en": ["Compile Go packages", "Compile C code", "Compile assembly", "Compile all languages"],
        "options_hi": ["Go पैकेज कंपाइल करना", "C कोड कंपाइल करना", "असेम्बली कंपाइल करना", "सभी भाषाएं कंपाइल करना"],
        "answer_en": "Compile Go packages",
        "answer_hi": "Go पैकेज कंपाइल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "How do you implement database migrations in Go?",
        "question_hi": "Go में डेटाबेस माइग्रेशन्स कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using migration tools like golang-migrate", "Manual SQL scripts", "Built-in migrations", "Go doesn't support migrations"],
        "options_hi": ["golang-migrate जैसे माइग्रेशन टूल्स का उपयोग करके", "मैनुअल SQL स्क्रिप्ट्स", "बिल्ट-इन माइग्रेशन्स", "Go माइग्रेशन्स सपोर्ट नहीं करता"],
        "answer_en": "Using migration tools like golang-migrate",
        "answer_hi": "golang-migrate जैसे माइग्रेशन टूल्स का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the purpose of go tool link?",
        "question_hi": "go tool link का उद्देश्य क्या है?",
        "options_en": ["Link object files into executable", "Create symbolic links", "Link packages", "Network linking"],
        "options_hi": ["ऑब्जेक्ट फाइल्स को एक्जीक्यूटेबल में लिंक करना", "सिंबोलिक लिंक्स बनाना", "पैकेज लिंक करना", "नेटवर्क लिंकिंग"],
        "answer_en": "Link object files into executable",
        "answer_hi": "ऑब्जेक्ट फाइल्स को एक्जीक्यूटेबल में लिंक करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "How do you implement gRPC in Go?",
        "question_hi": "Go में gRPC कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using google.golang.org/grpc package", "Built-in gRPC support", "Custom implementation", "Go doesn't support gRPC"],
        "options_hi": ["google.golang.org/grpc पैकेज का उपयोग करके", "बिल्ट-इन gRPC सपोर्ट", "कस्टम इम्प्लीमेंटेशन", "Go gRPC सपोर्ट नहीं करता"],
        "answer_en": "Using google.golang.org/grpc package",
        "answer_hi": "google.golang.org/grpc पैकेज का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the purpose of go tool dist?",
        "question_hi": "go tool dist का उद्देश्य क्या है?",
        "options_en": ["Build distribution packages", "Distance calculation", "Distributed computing", "Distribution management"],
        "options_hi": ["डिस्ट्रीब्यूशन पैकेज बिल्ड करना", "डिस्टेंस कैलकुलेशन", "डिस्ट्रीब्यूटेड कंप्यूटिंग", "डिस्ट्रीब्यूशन मैनेजमेंट"],
        "answer_en": "Build distribution packages",
        "answer_hi": "डिस्ट्रीब्यूशन पैकेज बिल्ड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "How do you implement WebSocket in Go?",
        "question_hi": "Go में WebSocket कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using gorilla/websocket or net/http", "Built-in WebSocket", "Custom implementation", "Go doesn't support WebSocket"],
        "options_hi": ["gorilla/websocket या net/http का उपयोग करके", "बिल्ट-इन WebSocket", "कस्टम इम्प्लीमेंटेशन", "Go WebSocket सपोर्ट नहीं करता"],
        "answer_en": "Using gorilla/websocket or net/http",
        "answer_hi": "gorilla/websocket या net/http का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the purpose of go tool api?",
        "question_hi": "go tool api का उद्देश्य क्या है?",
        "options_en": ["Check API compatibility", "Generate API documentation", "Test API endpoints", "Monitor API usage"],
        "options_hi": ["API कम्पैटिबिलिटी चेक करना", "API डॉक्युमेंटेशन जेनरेट करना", "API एंडपॉइंट टेस्ट करना", "API यूसेज मॉनिटर करना"],
        "answer_en": "Check API compatibility",
        "answer_hi": "API कम्पैटिबिलिटी चेक करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "How do you implement containerization for Go applications?",
        "question_hi": "Go एप्लिकेशन्स के लिए कंटेनराइजेशन कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Multi-stage Docker builds", "Simple Dockerfile", "Virtual machines", "Go doesn't support containers"],
        "options_hi": ["मल्टी-स्टेज Docker बिल्ड्स", "सिंपल Dockerfile", "वर्चुअल मशीन्स", "Go कंटेनर्स सपोर्ट नहीं करता"],
        "answer_en": "Multi-stage Docker builds",
        "answer_hi": "मल्टी-स्टेज Docker बिल्ड्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the purpose of go tool asm?",
        "question_hi": "go tool asm का उद्देश्य क्या है?",
        "options_en": ["Assemble Go assembly files", "Assemble any assembly", "Analyze assembly", "Assembly optimization"],
        "options_hi": ["Go असेम्बली फाइल्स असेंबल करना", "कोई भी असेम्बली असेंबल करना", "असेम्बली एनालाइज़ करना", "असेम्बली ऑप्टिमाइजेशन"],
        "answer_en": "Assemble Go assembly files",
        "answer_hi": "Go असेम्बली फाइल्स असेंबल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "How do you implement monitoring in Go applications?",
        "question_hi": "Go एप्लिकेशन्स में मॉनिटरिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Prometheus metrics and Grafana", "Custom monitoring", "Built-in monitoring", "Go doesn't support monitoring"],
        "options_hi": ["Prometheus मेट्रिक्स और Grafana", "कस्टम मॉनिटरिंग", "बिल्ट-इन मॉनिटरिंग", "Go मॉनिटरिंग सपोर्ट नहीं करता"],
        "answer_en": "Prometheus metrics and Grafana",
        "answer_hi": "Prometheus मेट्रिक्स और Grafana",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the purpose of go tool cgo?",
        "question_hi": "go tool cgo का उद्देश्य क्या है?",
        "options_en": ["Call C code from Go", "Convert Go to C", "Compile C code", "C code optimization"],
        "options_hi": ["Go से C कोड कॉल करना", "Go को C में कन्वर्ट करना", "C कोड कंपाइल करना", "C कोड ऑप्टिमाइजेशन"],
        "answer_en": "Call C code from Go",
        "answer_hi": "Go से C कोड कॉल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "How do you implement load testing for Go services?",
        "question_hi": "Go सर्विसेज के लिए लोड टेस्टिंग कैसे इम्प्लीमेंट करते हैं?",
        "options_en": ["Using tools like vegeta or wrk", "Built-in load testing", "Manual testing", "Go doesn't support load testing"],
        "options_hi": ["vegeta या wrk जैसे टूल्स का उपयोग करके", "बिल्ट-इन लोड टेस्टिंग", "मैनुअल टेस्टिंग", "Go लोड टेस्टिंग सपोर्ट नहीं करता"],
        "answer_en": "Using tools like vegeta or wrk",
        "answer_hi": "vegeta या wrk जैसे टूल्स का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the purpose of go tool vet?",
        "question_hi": "go tool vet का उद्देश्य क्या है?",
        "options_en": ["Report suspicious code constructs", "Veterinary checks", "Variable examination", "Code validation"],
        "options_hi": ["सस्पीशियस कोड कंस्ट्रक्ट्स रिपोर्ट करना", "वेटरनरी चेक्स", "वेरिएबल एग्जामिनेशन", "कोड वैलिडेशन"],
        "answer_en": "Report suspicious code constructs",
        "answer_hi": "सस्पीशियस कोड कंस्ट्रक्ट्स रिपोर्ट करना",
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