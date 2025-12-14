const questions=[
    {
        "num": 1,
        "question_en": "What is the zero value for a pointer in Go?",
        "question_hi": "Go में पॉइंटर का जीरो वैल्यू क्या है?",
        "options_en": ["nil", "0", "undefined", "null"],
        "options_hi": ["nil", "0", "अनडिफाइंड", "null"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which keyword is used to create a new goroutine?",
        "question_hi": "नई गोरूटीन बनाने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["go", "goroutine", "async", "spawn"],
        "options_hi": ["go", "goroutine", "async", "spawn"],
        "answer_en": "go",
        "answer_hi": "go",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the purpose of the 'defer' keyword?",
        "question_hi": "'defer' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["To schedule a function call before return", "To stop execution", "To define a function", "To handle errors"],
        "options_hi": ["रिटर्न से पहले फंक्शन कॉल शेड्यूल करने के लिए", "एक्जिक्यूशन रोकने के लिए", "फंक्शन डिफाइन करने के लिए", "एरर हैंडल करने के लिए"],
        "answer_en": "To schedule a function call before return",
        "answer_hi": "रिटर्न से पहले फंक्शन कॉल शेड्यूल करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How do you declare a constant in Go?",
        "question_hi": "Go में कॉन्स्टेंट कैसे डिक्लेयर करते हैं?",
        "options_en": ["const name = value", "var name const = value", "let name = value", "constant name = value"],
        "options_hi": ["const name = value", "var name const = value", "let name = value", "constant name = value"],
        "answer_en": "const name = value",
        "answer_hi": "const name = value",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the default case sensitivity of Go?",
        "question_hi": "Go की डिफॉल्ट केस सेंसिटिविटी क्या है?",
        "options_en": ["Case sensitive", "Case insensitive", "Depends on OS", "Configurable"],
        "options_hi": ["केस सेंसिटिव", "केस इनसेंसिटिव", "OS पर निर्भर", "कॉन्फिगरेबल"],
        "answer_en": "Case sensitive",
        "answer_hi": "केस सेंसिटिव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which package is used for formatted I/O?",
        "question_hi": "फॉर्मेटेड I/O के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["fmt", "io", "os", "bufio"],
        "options_hi": ["fmt", "io", "os", "bufio"],
        "answer_en": "fmt",
        "answer_hi": "fmt",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the type of 'i' in 'for i := 0; i < 10; i++'?",
        "question_hi": "'for i := 0; i < 10; i++' में 'i' का टाइप क्या है?",
        "options_en": ["int", "int32", "int64", "var"],
        "options_hi": ["int", "int32", "int64", "var"],
        "answer_en": "int",
        "answer_hi": "int",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How to check if a map contains a key?",
        "question_hi": "मैप में की है या नहीं कैसे चेक करते हैं?",
        "options_en": ["value, ok := map[key]", "map.hasKey(key)", "map.contains(key)", "map[key] != nil"],
        "options_hi": ["value, ok := map[key]", "map.hasKey(key)", "map.contains(key)", "map[key] != nil"],
        "answer_en": "value, ok := map[key]",
        "answer_hi": "value, ok := map[key]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the purpose of the 'range' keyword?",
        "question_hi": "'range' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["To iterate over arrays, slices, maps etc.", "To define a range", "To create sequences", "For mathematical ranges"],
        "options_hi": ["ऐरे, स्लाइस, मैप आदि पर इटरेट करने के लिए", "रेंज डिफाइन करने के लिए", "सीक्वेंस बनाने के लिए", "मैथमेटिकल रेंज के लिए"],
        "answer_en": "To iterate over arrays, slices, maps etc.",
        "answer_hi": "ऐरे, स्लाइस, मैप आदि पर इटरेट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which function is used to create a new slice?",
        "question_hi": "नई स्लाइस बनाने के लिए किस फंक्शन का उपयोग किया जाता है?",
        "options_en": ["make()", "new()", "slice()", "create()"],
        "options_hi": ["make()", "new()", "slice()", "create()"],
        "answer_en": "make()",
        "answer_hi": "make()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the zero value for a slice?",
        "question_hi": "स्लाइस का जीरो वैल्यू क्या है?",
        "options_en": ["nil", "[]", "empty slice", "undefined"],
        "options_hi": ["nil", "[]", "खाली स्लाइस", "अनडिफाइंड"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "How to get the length of a slice?",
        "question_hi": "स्लाइस की लंबाई कैसे प्राप्त करें?",
        "options_en": ["len(slice)", "slice.length()", "slice.len()", "length(slice)"],
        "options_hi": ["len(slice)", "slice.length()", "slice.len()", "length(slice)"],
        "answer_en": "len(slice)",
        "answer_hi": "len(slice)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the purpose of the 'cap' function?",
        "question_hi": "'cap' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To get capacity of slice or array", "To capitalize strings", "To capture values", "For capacity planning"],
        "options_hi": ["स्लाइस या ऐरे की कैपेसिटी प्राप्त करने के लिए", "स्ट्रिंग को कैपिटलाइज करने के लिए", "वैल्यू कैप्चर करने के लिए", "कैपेसिटी प्लानिंग के लिए"],
        "answer_en": "To get capacity of slice or array",
        "answer_hi": "स्लाइस या ऐरे की कैपेसिटी प्राप्त करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which package is used for HTTP operations?",
        "question_hi": "HTTP ऑपरेशन के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["net/http", "http", "web", "net"],
        "options_hi": ["net/http", "http", "web", "net"],
        "answer_en": "net/http",
        "answer_hi": "net/http",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "How to create a simple HTTP server in Go?",
        "question_hi": "Go में सिंपल HTTP सर्वर कैसे बनाएं?",
        "options_en": ["http.ListenAndServe()", "http.Server()", "net.Listen()", "server.Create()"],
        "options_hi": ["http.ListenAndServe()", "http.Server()", "net.Listen()", "server.Create()"],
        "answer_en": "http.ListenAndServe()",
        "answer_hi": "http.ListenAndServe()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the purpose of the 'interface{}' type?",
        "question_hi": "'interface{}' टाइप का उद्देश्य क्या है?",
        "options_en": ["To represent any type", "To define interfaces", "For empty interfaces", "To implement OOP"],
        "options_hi": ["किसी भी टाइप को रिप्रेजेंट करने के लिए", "इंटरफेस डिफाइन करने के लिए", "खाली इंटरफेस के लिए", "OOP इम्प्लीमेंट करने के लिए"],
        "answer_en": "To represent any type",
        "answer_hi": "किसी भी टाइप को रिप्रेजेंट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "How to handle errors in Go?",
        "question_hi": "Go में एरर कैसे हैंडल करते हैं?",
        "options_en": ["Return error as last return value", "Try-catch blocks", "Panic-recover", "Error events"],
        "options_hi": ["लास्ट रिटर्न वैल्यू के रूप में एरर रिटर्न करें", "ट्राई-कैच ब्लॉक", "पैनिक-रिकवर", "एरर इवेंट"],
        "answer_en": "Return error as last return value",
        "answer_hi": "लास्ट रिटर्न वैल्यू के रूप में एरर रिटर्न करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the purpose of the 'panic' function?",
        "question_hi": "'panic' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To stop normal execution", "To handle errors", "To log errors", "To throw exceptions"],
        "options_hi": ["नॉर्मल एक्जिक्यूशन रोकने के लिए", "एरर हैंडल करने के लिए", "एरर लॉग करने के लिए", "एक्सेप्शन थ्रो करने के लिए"],
        "answer_en": "To stop normal execution",
        "answer_hi": "नॉर्मल एक्जिक्यूशन रोकने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "How to recover from a panic?",
        "question_hi": "पैनिक से कैसे रिकवर करें?",
        "options_en": ["Using recover() in defer", "Using catch()", "Using rescue()", "Automatically"],
        "options_hi": ["defer में recover() का उपयोग करके", "catch() का उपयोग करके", "rescue() का उपयोग करके", "ऑटोमैटिकली"],
        "answer_en": "Using recover() in defer",
        "answer_hi": "defer में recover() का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is a struct in Go?",
        "question_hi": "Go में स्ट्रक्चर क्या है?",
        "options_en": ["A collection of fields", "A class", "An object", "A method collection"],
        "options_hi": ["फील्ड का कलेक्शन", "एक क्लास", "एक ऑब्जेक्ट", "मेथड कलेक्शन"],
        "answer_en": "A collection of fields",
        "answer_hi": "फील्ड का कलेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "How to define a method on a struct?",
        "question_hi": "स्ट्रक्चर पर मेथड कैसे डिफाइन करें?",
        "options_en": ["func (receiver) methodName()", "func methodName(receiver)", "method receiver.methodName()", "def receiver.methodName()"],
        "options_hi": ["func (receiver) methodName()", "func methodName(receiver)", "method receiver.methodName()", "def receiver.methodName()"],
        "answer_en": "func (receiver) methodName()",
        "answer_hi": "func (receiver) methodName()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the difference between := and =?",
        "question_hi": ":= और = में क्या अंतर है?",
        "options_en": [":= declares and assigns, = only assigns", "No difference", "= for constants, := for variables", ":= for global, = for local"],
        "options_hi": [":= डिक्लेयर और असाइन करता है, = केवल असाइन करता है", "कोई अंतर नहीं", "= कॉन्स्टेंट के लिए, := वेरिएबल के लिए", ":= ग्लोबल के लिए, = लोकल के लिए"],
        "answer_en": ":= declares and assigns, = only assigns",
        "answer_hi": ":= डिक्लेयर और असाइन करता है, = केवल असाइन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which package is used for JSON operations?",
        "question_hi": "JSON ऑपरेशन के लिए किस पैकेज का उपयोग किया जाता है?",
        "options_en": ["encoding/json", "json", "encoding", "io/json"],
        "options_hi": ["encoding/json", "json", "encoding", "io/json"],
        "answer_en": "encoding/json",
        "answer_hi": "encoding/json",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How to convert a struct to JSON?",
        "question_hi": "स्ट्रक्चर को JSON में कैसे कन्वर्ट करें?",
        "options_en": ["json.Marshal()", "json.Encode()", "struct.ToJSON()", "json.Convert()"],
        "options_hi": ["json.Marshal()", "json.Encode()", "struct.ToJSON()", "json.Convert()"],
        "answer_en": "json.Marshal()",
        "answer_hi": "json.Marshal()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the purpose of struct tags?",
        "question_hi": "स्ट्रक्चर टैग का उद्देश्य क्या है?",
        "options_en": ["To add metadata to struct fields", "To tag important structs", "For documentation", "For version control"],
        "options_hi": ["स्ट्रक्चर फील्ड में मेटाडेटा ऐड करने के लिए", "इम्पोर्टेंट स्ट्रक्चर को टैग करने के लिए", "डॉक्युमेंटेशन के लिए", "वर्जन कंट्रोल के लिए"],
        "answer_en": "To add metadata to struct fields",
        "answer_hi": "स्ट्रक्चर फील्ड में मेटाडेटा ऐड करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "How to read from standard input?",
        "question_hi": "स्टैंडर्ड इनपुट से कैसे पढ़ें?",
        "options_en": ["fmt.Scan()", "os.Stdin.Read()", "input.Read()", "console.Read()"],
        "options_hi": ["fmt.Scan()", "os.Stdin.Read()", "input.Read()", "console.Read()"],
        "answer_en": "fmt.Scan()",
        "answer_hi": "fmt.Scan()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the zero value for a boolean?",
        "question_hi": "बूलियन का जीरो वैल्यू क्या है?",
        "options_en": ["false", "true", "nil", "0"],
        "options_hi": ["false", "true", "nil", "0"],
        "answer_en": "false",
        "answer_hi": "false",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How to convert string to integer?",
        "question_hi": "स्ट्रिंग को इंटीजर में कैसे कन्वर्ट करें?",
        "options_en": ["strconv.Atoi()", "int.Parse()", "string.ToInt()", "convert.Int()"],
        "options_hi": ["strconv.Atoi()", "int.Parse()", "string.ToInt()", "convert.Int()"],
        "answer_en": "strconv.Atoi()",
        "answer_hi": "strconv.Atoi()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of the 'iota' identifier?",
        "question_hi": "'iota' आइडेंटिफायर का उद्देश्य क्या है?",
        "options_en": ["For auto-incrementing constants", "For iteration", "For input/output", "For async operations"],
        "options_hi": ["ऑटो-इंक्रीमेंटिंग कॉन्स्टेंट के लिए", "इटरेशन के लिए", "इनपुट/आउटपुट के लिए", "एसिंक ऑपरेशन के लिए"],
        "answer_en": "For auto-incrementing constants",
        "answer_hi": "ऑटो-इंक्रीमेंटिंग कॉन्स्टेंट के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "How to write to standard output?",
        "question_hi": "स्टैंडर्ड आउटपुट में कैसे लिखें?",
        "options_en": ["fmt.Print()", "os.Stdout.Write()", "output.Write()", "console.Write()"],
        "options_hi": ["fmt.Print()", "os.Stdout.Write()", "output.Write()", "console.Write()"],
        "answer_en": "fmt.Print()",
        "answer_hi": "fmt.Print()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
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
        "num": 32,
        "question_en": "How to append to a slice?",
        "question_hi": "स्लाइस में कैसे ऐपेंड करें?",
        "options_en": ["append(slice, element)", "slice.append(element)", "slice.add(element)", "add(slice, element)"],
        "options_hi": ["append(slice, element)", "slice.append(element)", "slice.add(element)", "add(slice, element)"],
        "answer_en": "append(slice, element)",
        "answer_hi": "append(slice, element)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the purpose of the 'copy' function?",
        "question_hi": "'copy' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To copy elements between slices", "To duplicate strings", "To clone objects", "For backup"],
        "options_hi": ["स्लाइस के बीच एलिमेंट कॉपी करने के लिए", "स्ट्रिंग डुप्लिकेट करने के लिए", "ऑब्जेक्ट क्लोन करने के लिए", "बैकअप के लिए"],
        "answer_en": "To copy elements between slices",
        "answer_hi": "स्लाइस के बीच एलिमेंट कॉपी करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "How to create a map?",
        "question_hi": "मैप कैसे बनाएं?",
        "options_en": ["make(map[keyType]valueType)", "new(map[keyType]valueType)", "map{key: value}", "create(map)"],
        "options_hi": ["make(map[keyType]valueType)", "new(map[keyType]valueType)", "map{key: value}", "create(map)"],
        "answer_en": "make(map[keyType]valueType)",
        "answer_hi": "make(map[keyType]valueType)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the zero value for a map?",
        "question_hi": "मैप का जीरो वैल्यू क्या है?",
        "options_en": ["nil", "empty map", "{}", "undefined"],
        "options_hi": ["nil", "खाली मैप", "{}", "अनडिफाइंड"],
        "answer_en": "nil",
        "answer_hi": "nil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "How to delete a key from map?",
        "question_hi": "मैप से की कैसे डिलीट करें?",
        "options_en": ["delete(map, key)", "map.delete(key)", "remove(map, key)", "map.remove(key)"],
        "options_hi": ["delete(map, key)", "map.delete(key)", "remove(map, key)", "map.remove(key)"],
        "answer_en": "delete(map, key)",
        "answer_hi": "delete(map, key)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the purpose of the 'close' function?",
        "question_hi": "'close' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["To close a channel", "To close files", "To stop goroutines", "To end programs"],
        "options_hi": ["चैनल बंद करने के लिए", "फाइल बंद करने के लिए", "गोरूटीन रोकने के लिए", "प्रोग्राम समाप्त करने के लिए"],
        "answer_en": "To close a channel",
        "answer_hi": "चैनल बंद करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How to create a buffered channel?",
        "question_hi": "बफर्ड चैनल कैसे बनाएं?",
        "options_en": ["make(chan type, size)", "chan type(size)", "new(chan type, size)", "create(chan type, size)"],
        "options_hi": ["make(chan type, size)", "chan type(size)", "new(chan type, size)", "create(chan type, size)"],
        "answer_en": "make(chan type, size)",
        "answer_hi": "make(chan type, size)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the default direction of a channel?",
        "question_hi": "चैनल की डिफॉल्ट डायरेक्शन क्या है?",
        "options_en": ["Bidirectional", "Send only", "Receive only", "Configurable"],
        "options_hi": ["बायडायरेक्शनल", "केवल भेजने के लिए", "केवल प्राप्त करने के लिए", "कॉन्फिगरेबल"],
        "answer_en": "Bidirectional",
        "answer_hi": "बायडायरेक्शनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "How to select from multiple channels?",
        "question_hi": "मल्टीपल चैनल से कैसे सेलेक्ट करें?",
        "options_en": ["Using select statement", "Using switch", "Using range", "Using for loop"],
        "options_hi": ["select स्टेटमेंट का उपयोग करके", "switch का उपयोग करके", "range का उपयोग करके", "for लूप का उपयोग करके"],
        "answer_en": "Using select statement",
        "answer_hi": "select स्टेटमेंट का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of the 'default' case in select?",
        "question_hi": "select में 'default' केस का उद्देश्य क्या है?",
        "options_en": ["To execute when no channel is ready", "For default values", "For error handling", "To break selection"],
        "options_hi": ["जब कोई चैनल रेडी नहीं हो तो एक्जिक्यूट करने के लिए", "डिफॉल्ट वैल्यू के लिए", "एरर हैंडलिंग के लिए", "सिलेक्शन ब्रेक करने के लिए"],
        "answer_en": "To execute when no channel is ready",
        "answer_hi": "जब कोई चैनल रेडी नहीं हो तो एक्जिक्यूट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How to implement a timeout with select?",
        "question_hi": "select के साथ टाइमआउट कैसे इम्प्लीमेंट करें?",
        "options_en": ["Using time.After()", "Using timer.Tick()", "Using sleep", "Using context"],
        "options_hi": ["time.After() का उपयोग करके", "timer.Tick() का उपयोग करके", "sleep का उपयोग करके", "context का उपयोग करके"],
        "answer_en": "Using time.After()",
        "answer_hi": "time.After() का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the purpose of the 'context' package?",
        "question_hi": "'context' पैकेज का उद्देश्य क्या है?",
        "options_en": ["To manage request-scoped values and cancellation", "For configuration", "For dependency injection", "For logging"],
        "options_hi": ["रिक्वेस्ट-स्कोप्ड वैल्यू और कैंसलेशन मैनेज करने के लिए", "कॉन्फिगरेशन के लिए", "डिपेंडेंसी इंजेक्शन के लिए", "लॉगिंग के लिए"],
        "answer_en": "To manage request-scoped values and cancellation",
        "answer_hi": "रिक्वेस्ट-स्कोप्ड वैल्यू और कैंसलेशन मैनेज करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How to create a context with timeout?",
        "question_hi": "टाइमआउट के साथ कॉन्टेक्स्ट कैसे बनाएं?",
        "options_en": ["context.WithTimeout()", "context.WithDeadline()", "context.WithCancel()", "context.NewTimeout()"],
        "options_hi": ["context.WithTimeout()", "context.WithDeadline()", "context.WithCancel()", "context.NewTimeout()"],
        "answer_en": "context.WithTimeout()",
        "answer_hi": "context.WithTimeout()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the purpose of the 'sync' package?",
        "question_hi": "'sync' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For synchronization primitives", "For system calls", "For file sync", "For data sync"],
        "options_hi": ["सिंक्रोनाइज़ेशन प्रिमिटिव के लिए", "सिस्टम कॉल के लिए", "फाइल सिंक के लिए", "डेटा सिंक के लिए"],
        "answer_en": "For synchronization primitives",
        "answer_hi": "सिंक्रोनाइज़ेशन प्रिमिटिव के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the difference between Mutex and RWMutex?",
        "question_hi": "Mutex और RWMutex में क्या अंतर है?",
        "options_en": ["RWMutex allows multiple readers", "No difference", "Mutex is faster", "RWMutex is for write only"],
        "options_hi": ["RWMutex मल्टीपल रीडर की अनुमति देता है", "कोई अंतर नहीं", "Mutex तेज है", "RWMutex केवल राइट के लिए है"],
        "answer_en": "RWMutex allows multiple readers",
        "answer_hi": "RWMutex मल्टीपल रीडर की अनुमति देता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "How to use WaitGroup?",
        "question_hi": "WaitGroup का उपयोग कैसे करें?",
        "options_en": ["Add() before, Done() after, Wait() to block", "Wait() only", "Add() and Wait()", "Done() and Wait()"],
        "options_hi": ["पहले Add(), बाद में Done(), ब्लॉक करने के लिए Wait()", "केवल Wait()", "Add() और Wait()", "Done() और Wait()"],
        "answer_en": "Add() before, Done() after, Wait() to block",
        "answer_hi": "पहले Add(), बाद में Done(), ब्लॉक करने के लिए Wait()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the purpose of the 'atomic' package?",
        "question_hi": "'atomic' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For atomic operations on integers", "For atomic file operations", "For database transactions", "For memory management"],
        "options_hi": ["इंटीजर पर एटॉमिक ऑपरेशन के लिए", "एटॉमिक फाइल ऑपरेशन के लिए", "डेटाबेस ट्रांजैक्शन के लिए", "मेमोरी मैनेजमेंट के लिए"],
        "answer_en": "For atomic operations on integers",
        "answer_hi": "इंटीजर पर एटॉमिक ऑपरेशन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "How to read a file in Go?",
        "question_hi": "Go में फाइल कैसे पढ़ें?",
        "options_en": ["ioutil.ReadFile() or os.Open()", "file.Read()", "read.File()", "io.Read()"],
        "options_hi": ["ioutil.ReadFile() या os.Open()", "file.Read()", "read.File()", "io.Read()"],
        "answer_en": "ioutil.ReadFile() or os.Open()",
        "answer_hi": "ioutil.ReadFile() या os.Open()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How to write to a file?",
        "question_hi": "फाइल में कैसे लिखें?",
        "options_en": ["ioutil.WriteFile() or os.Create()", "file.Write()", "write.File()", "io.Write()"],
        "options_hi": ["ioutil.WriteFile() या os.Create()", "file.Write()", "write.File()", "io.Write()"],
        "answer_en": "ioutil.WriteFile() or os.Create()",
        "answer_hi": "ioutil.WriteFile() या os.Create()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the purpose of the 'flag' package?",
        "question_hi": "'flag' पैकेज का उद्देश्य क्या है?",
        "options_en": ["To parse command-line flags", "To create flags", "For boolean operations", "For signal handling"],
        "options_hi": ["कमांड-लाइन फ्लैग पार्स करने के लिए", "फ्लैग बनाने के लिए", "बूलियन ऑपरेशन के लिए", "सिग्नल हैंडलिंग के लिए"],
        "answer_en": "To parse command-line flags",
        "answer_hi": "कमांड-लाइन फ्लैग पार्स करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "How to define a command-line flag?",
        "question_hi": "कमांड-लाइन फ्लैग कैसे डिफाइन करें?",
        "options_en": ["flag.String(), flag.Int(), etc.", "flag.Define()", "flag.New()", "flag.Create()"],
        "options_hi": ["flag.String(), flag.Int(), आदि", "flag.Define()", "flag.New()", "flag.Create()"],
        "answer_en": "flag.String(), flag.Int(), etc.",
        "answer_hi": "flag.String(), flag.Int(), आदि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the purpose of the 'log' package?",
        "question_hi": "'log' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For logging messages", "For logical operations", "For login functionality", "For algorithm logging"],
        "options_hi": ["लॉग मैसेज के लिए", "लॉजिकल ऑपरेशन के लिए", "लॉगिन फंक्शनैलिटी के लिए", "अल्गोरिदम लॉगिंग के लिए"],
        "answer_en": "For logging messages",
        "answer_hi": "लॉग मैसेज के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "How to set log output to a file?",
        "question_hi": "लॉग आउटपुट को फाइल में कैसे सेट करें?",
        "options_en": ["log.SetOutput(file)", "log.ToFile()", "log.FileOutput()", "log.SetFile()"],
        "options_hi": ["log.SetOutput(file)", "log.ToFile()", "log.FileOutput()", "log.SetFile()"],
        "answer_en": "log.SetOutput(file)",
        "answer_hi": "log.SetOutput(file)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the purpose of the 'testing' package?",
        "question_hi": "'testing' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For writing unit tests", "For performance testing", "For system testing", "For debug testing"],
        "options_hi": ["यूनिट टेस्ट लिखने के लिए", "परफॉर्मेंस टेस्टिंग के लिए", "सिस्टम टेस्टिंग के लिए", "डिबग टेस्टिंग के लिए"],
        "answer_en": "For writing unit tests",
        "answer_hi": "यूनिट टेस्ट लिखने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "How to run tests in Go?",
        "question_hi": "Go में टेस्ट कैसे रन करें?",
        "options_en": ["go test", "go run test", "go testing", "go unit-test"],
        "options_hi": ["go test", "go run test", "go testing", "go unit-test"],
        "answer_en": "go test",
        "answer_hi": "go test",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is the naming convention for test files?",
        "question_hi": "टेस्ट फाइल के लिए नेमिंग कन्वेंशन क्या है?",
        "options_en": ["_test.go suffix", "_test prefix", ".test.go extension", "_testing.go"],
        "options_hi": ["_test.go सफिक्स", "_test प्रीफिक्स", ".test.go एक्सटेंशन", "_testing.go"],
        "answer_en": "_test.go suffix",
        "answer_hi": "_test.go सफिक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How to write a benchmark test?",
        "question_hi": "बेंचमार्क टेस्ट कैसे लिखें?",
        "options_en": ["Function starting with Benchmark", "Function starting with Test", "Using benchmark package", "Using performance package"],
        "options_hi": ["Benchmark से शुरू होने वाला फंक्शन", "Test से शुरू होने वाला फंक्शन", "benchmark पैकेज का उपयोग करके", "performance पैकेज का उपयोग करके"],
        "answer_en": "Function starting with Benchmark",
        "answer_hi": "Benchmark से शुरू होने वाला फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is the purpose of the 'reflect' package?",
        "question_hi": "'reflect' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For runtime reflection", "For mirroring objects", "For light reflection", "For image processing"],
        "options_hi": ["रनटाइम रिफ्लेक्शन के लिए", "ऑब्जेक्ट मिररिंग के लिए", "लाइट रिफ्लेक्शन के लिए", "इमेज प्रोसेसिंग के लिए"],
        "answer_en": "For runtime reflection",
        "answer_hi": "रनटाइम रिफ्लेक्शन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "How to get type of a variable at runtime?",
        "question_hi": "रनटाइम पर वेरिएबल का टाइप कैसे प्राप्त करें?",
        "options_en": ["reflect.TypeOf()", "typeof()", "type()", "getType()"],
        "options_hi": ["reflect.TypeOf()", "typeof()", "type()", "getType()"],
        "answer_en": "reflect.TypeOf()",
        "answer_hi": "reflect.TypeOf()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the purpose of the 'unsafe' package?",
        "question_hi": "'unsafe' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For operations that bypass type safety", "For security operations", "For unsafe code", "For dangerous operations"],
        "options_hi": ["टाइप सेफ्टी बायपास करने वाले ऑपरेशन के लिए", "सिक्योरिटी ऑपरेशन के लिए", "अनसेफ कोड के लिए", "खतरनाक ऑपरेशन के लिए"],
        "answer_en": "For operations that bypass type safety",
        "answer_hi": "टाइप सेफ्टी बायपास करने वाले ऑपरेशन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How to convert a pointer to uintptr?",
        "question_hi": "पॉइंटर को uintptr में कैसे कन्वर्ट करें?",
        "options_en": ["uintptr(unsafe.Pointer(ptr))", "unsafe.Uintptr(ptr)", "ptr.ToUintptr()", "convert.Uintptr(ptr)"],
        "options_hi": ["uintptr(unsafe.Pointer(ptr))", "unsafe.Uintptr(ptr)", "ptr.ToUintptr()", "convert.Uintptr(ptr)"],
        "answer_en": "uintptr(unsafe.Pointer(ptr))",
        "answer_hi": "uintptr(unsafe.Pointer(ptr))",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the purpose of the 'go mod' command?",
        "question_hi": "'go mod' कमांड का उद्देश्य क्या है?",
        "options_en": ["For module management", "For code modification", "For model generation", "For mode setting"],
        "options_hi": ["मॉड्यूल मैनेजमेंट के लिए", "कोड मॉडिफिकेशन के लिए", "मॉडल जनरेशन के लिए", "मोड सेटिंग के लिए"],
        "answer_en": "For module management",
        "answer_hi": "मॉड्यूल मैनेजमेंट के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "How to initialize a new module?",
        "question_hi": "नया मॉड्यूल कैसे इनिशियलाइज़ करें?",
        "options_en": ["go mod init", "go init mod", "go module init", "go new mod"],
        "options_hi": ["go mod init", "go init mod", "go module init", "go new mod"],
        "answer_en": "go mod init",
        "answer_hi": "go mod init",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of go.sum file?",
        "question_hi": "go.sum फाइल का उद्देश्य क्या है?",
        "options_en": ["To store cryptographic checksums", "To sum dependencies", "For summary", "For module sum"],
        "options_hi": ["क्रिप्टोग्राफिक चेकसम स्टोर करने के लिए", "डिपेंडेंसी सम करने के लिए", "सारांश के लिए", "मॉड्यूल सम के लिए"],
        "answer_en": "To store cryptographic checksums",
        "answer_hi": "क्रिप्टोग्राफिक चेकसम स्टोर करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "How to add a dependency?",
        "question_hi": "डिपेंडेंसी कैसे ऐड करें?",
        "options_en": ["go get package", "go add package", "go import package", "go dependency package"],
        "options_hi": ["go get package", "go add package", "go import package", "go dependency package"],
        "answer_en": "go get package",
        "answer_hi": "go get package",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the purpose of the 'go vet' command?",
        "question_hi": "'go vet' कमांड का उद्देश्य क्या है?",
        "options_en": ["To report suspicious constructs", "To check animal health", "For code validation", "For version control"],
        "options_hi": ["संदिग्ध कंस्ट्रक्ट रिपोर्ट करने के लिए", "जानवरों की सेहत चेक करने के लिए", "कोड वैलिडेशन के लिए", "वर्जन कंट्रोल के लिए"],
        "answer_en": "To report suspicious constructs",
        "answer_hi": "संदिग्ध कंस्ट्रक्ट रिपोर्ट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "How to format Go code?",
        "question_hi": "Go कोड कैसे फॉर्मेट करें?",
        "options_en": ["go fmt", "go format", "go pretty", "go style"],
        "options_hi": ["go fmt", "go format", "go pretty", "go style"],
        "answer_en": "go fmt",
        "answer_hi": "go fmt",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is the purpose of the 'go doc' command?",
        "question_hi": "'go doc' कमांड का उद्देश्य क्या है?",
        "options_en": ["To show documentation", "To create documents", "To edit documentation", "To delete docs"],
        "options_hi": ["डॉक्युमेंटेशन दिखाने के लिए", "डॉक्युमेंट बनाने के लिए", "डॉक्युमेंटेशन एडिट करने के लिए", "डॉक्स डिलीट करने के लिए"],
        "answer_en": "To show documentation",
        "answer_hi": "डॉक्युमेंटेशन दिखाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How to build a Go program?",
        "question_hi": "Go प्रोग्राम कैसे बिल्ड करें?",
        "options_en": ["go build", "go compile", "go make", "go create"],
        "options_hi": ["go build", "go compile", "go make", "go create"],
        "answer_en": "go build",
        "answer_hi": "go build",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the purpose of the 'go run' command?",
        "question_hi": "'go run' कमांड का उद्देश्य क्या है?",
        "options_en": ["To compile and run", "To run only", "To execute binaries", "For running tests"],
        "options_hi": ["कम्पाइल और रन करने के लिए", "केवल रन करने के लिए", "बाइनरी एक्जिक्यूट करने के लिए", "टेस्ट रन करने के लिए"],
        "answer_en": "To compile and run",
        "answer_hi": "कम्पाइल और रन करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "How to cross-compile Go code?",
        "question_hi": "Go कोड क्रॉस-कम्पाइल कैसे करें?",
        "options_en": ["Set GOOS and GOARCH environment variables", "Use cross-compile flag", "Use special compiler", "Cannot cross-compile"],
        "options_hi": ["GOOS और GOARCH एनवायरनमेंट वेरिएबल सेट करें", "cross-compile फ्लैग का उपयोग करें", "स्पेशल कम्पाइलर का उपयोग करें", "क्रॉस-कम्पाइल नहीं कर सकते"],
        "answer_en": "Set GOOS and GOARCH environment variables",
        "answer_hi": "GOOS और GOARCH एनवायरनमेंट वेरिएबल सेट करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the zero value for an integer?",
        "question_hi": "इंटीजर का जीरो वैल्यू क्या है?",
        "options_en": ["0", "1", "-1", "nil"],
        "options_hi": ["0", "1", "-1", "nil"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "How to convert int to string?",
        "question_hi": "इंट को स्ट्रिंग में कैसे कन्वर्ट करें?",
        "options_en": ["strconv.Itoa()", "string(i)", "fmt.Sprint(i)", "convert.String(i)"],
        "options_hi": ["strconv.Itoa()", "string(i)", "fmt.Sprint(i)", "convert.String(i)"],
        "answer_en": "strconv.Itoa()",
        "answer_hi": "strconv.Itoa()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is the difference between string and []byte?",
        "question_hi": "स्ट्रिंग और []byte में क्या अंतर है?",
        "options_en": ["String is immutable, []byte is mutable", "No difference", "[]byte is faster", "String is reference type"],
        "options_hi": ["स्ट्रिंग इम्यूटेबल है, []byte म्यूटेबल है", "कोई अंतर नहीं", "[]byte तेज है", "स्ट्रिंग रिफरेन्स टाइप है"],
        "answer_en": "String is immutable, []byte is mutable",
        "answer_hi": "स्ट्रिंग इम्यूटेबल है, []byte म्यूटेबल है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "How to convert string to []byte?",
        "question_hi": "स्ट्रिंग को []byte में कैसे कन्वर्ट करें?",
        "options_en": ["[]byte(string)", "byte[](string)", "string.ToBytes()", "convert.Bytes(string)"],
        "options_hi": ["[]byte(string)", "byte[](string)", "string.ToBytes()", "convert.Bytes(string)"],
        "answer_en": "[]byte(string)",
        "answer_hi": "[]byte(string)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the purpose of the 'strings' package?",
        "question_hi": "'strings' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For string manipulation", "For string creation", "For string storage", "For string conversion"],
        "options_hi": ["स्ट्रिंग मैनिपुलेशन के लिए", "स्ट्रिंग क्रिएशन के लिए", "स्ट्रिंग स्टोरेज के लिए", "स्ट्रिंग कन्वर्जन के लिए"],
        "answer_en": "For string manipulation",
        "answer_hi": "स्ट्रिंग मैनिपुलेशन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "How to split a string?",
        "question_hi": "स्ट्रिंग को कैसे स्प्लिट करें?",
        "options_en": ["strings.Split()", "string.Split()", "split.String()", "strsplit()"],
        "options_hi": ["strings.Split()", "string.Split()", "split.String()", "strsplit()"],
        "answer_en": "strings.Split()",
        "answer_hi": "strings.Split()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of the 'bytes' package?",
        "question_hi": "'bytes' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For byte slice manipulation", "For byte operations", "For memory bytes", "For file bytes"],
        "options_hi": ["बाइट स्लाइस मैनिपुलेशन के लिए", "बाइट ऑपरेशन के लिए", "मेमोरी बाइट के लिए", "फाइल बाइट के लिए"],
        "answer_en": "For byte slice manipulation",
        "answer_hi": "बाइट स्लाइस मैनिपुलेशन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "How to compare two byte slices?",
        "question_hi": "दो बाइट स्लाइस की तुलना कैसे करें?",
        "options_en": ["bytes.Equal()", "slice1 == slice2", "compare(slice1, slice2)", "byte.Compare()"],
        "options_hi": ["bytes.Equal()", "slice1 == slice2", "compare(slice1, slice2)", "byte.Compare()"],
        "answer_en": "bytes.Equal()",
        "answer_hi": "bytes.Equal()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of the 'time' package?",
        "question_hi": "'time' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For time and date operations", "For timing operations", "For timeout handling", "For clock operations"],
        "options_hi": ["टाइम और डेट ऑपरेशन के लिए", "टाइमिंग ऑपरेशन के लिए", "टाइमआउट हैंडलिंग के लिए", "क्लॉक ऑपरेशन के लिए"],
        "answer_en": "For time and date operations",
        "answer_hi": "टाइम और डेट ऑपरेशन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "How to get current time?",
        "question_hi": "करंट टाइम कैसे प्राप्त करें?",
        "options_en": ["time.Now()", "time.Current()", "time.Today()", "current.Time()"],
        "options_hi": ["time.Now()", "time.Current()", "time.Today()", "current.Time()"],
        "answer_en": "time.Now()",
        "answer_hi": "time.Now()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "How to sleep for a duration?",
        "question_hi": "ड्यूरेशन के लिए स्लीप कैसे करें?",
        "options_en": ["time.Sleep()", "sleep()", "time.Wait()", "delay()"],
        "options_hi": ["time.Sleep()", "sleep()", "time.Wait()", "delay()"],
        "answer_en": "time.Sleep()",
        "answer_hi": "time.Sleep()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the purpose of the 'math' package?",
        "question_hi": "'math' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For mathematical operations", "For math functions", "For calculations", "For arithmetic"],
        "options_hi": ["मैथमेटिकल ऑपरेशन के लिए", "मैथ फंक्शन के लिए", "कैलकुलेशन के लिए", "अर्थमेटिक के लिए"],
        "answer_en": "For mathematical operations",
        "answer_hi": "मैथमेटिकल ऑपरेशन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "How to generate random numbers?",
        "question_hi": "रैंडम नंबर कैसे जनरेट करें?",
        "options_en": ["Using math/rand package", "Using random package", "Using math.Random()", "Using util.Random()"],
        "options_hi": ["math/rand पैकेज का उपयोग करके", "random पैकेज का उपयोग करके", "math.Random() का उपयोग करके", "util.Random() का उपयोग करके"],
        "answer_en": "Using math/rand package",
        "answer_hi": "math/rand पैकेज का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the purpose of the 'crypto' package?",
        "question_hi": "'crypto' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For cryptographic operations", "For encryption", "For security", "For hashing"],
        "options_hi": ["क्रिप्टोग्राफिक ऑपरेशन के लिए", "एन्क्रिप्शन के लिए", "सिक्योरिटी के लिए", "हैशिंग के लिए"],
        "answer_en": "For cryptographic operations",
        "answer_hi": "क्रिप्टोग्राफिक ऑपरेशन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "How to compute MD5 hash?",
        "question_hi": "MD5 हैश कैसे कम्प्यूट करें?",
        "options_en": ["Using crypto/md5", "Using hash/md5", "Using md5 package", "Using crypto.Hash()"],
        "options_hi": ["crypto/md5 का उपयोग करके", "hash/md5 का उपयोग करके", "md5 पैकेज का उपयोग करके", "crypto.Hash() का उपयोग करके"],
        "answer_en": "Using crypto/md5",
        "answer_hi": "crypto/md5 का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the purpose of the 'compress' package?",
        "question_hi": "'compress' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For compression algorithms", "For file compression", "For data compression", "For zip operations"],
        "options_hi": ["कम्प्रेशन अल्गोरिदम के लिए", "फाइल कम्प्रेशन के लिए", "डेटा कम्प्रेशन के लिए", "zip ऑपरेशन के लिए"],
        "answer_en": "For compression algorithms",
        "answer_hi": "कम्प्रेशन अल्गोरिदम के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "How to create a ZIP file?",
        "question_hi": "ZIP फाइल कैसे बनाएं?",
        "options_en": ["Using archive/zip package", "Using compress/zip", "Using zip package", "Using file/zip"],
        "options_hi": ["archive/zip पैकेज का उपयोग करके", "compress/zip का उपयोग करके", "zip पैकेज का उपयोग करके", "file/zip का उपयोग करके"],
        "answer_en": "Using archive/zip package",
        "answer_hi": "archive/zip पैकेज का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the purpose of the 'image' package?",
        "question_hi": "'image' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For image processing", "For image creation", "For image manipulation", "For graphics"],
        "options_hi": ["इमेज प्रोसेसिंग के लिए", "इमेज क्रिएशन के लिए", "इमेज मैनिपुलेशन के लिए", "ग्राफिक्स के लिए"],
        "answer_en": "For image processing",
        "answer_hi": "इमेज प्रोसेसिंग के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "How to decode a JPEG image?",
        "question_hi": "JPEG इमेज कैसे डिकोड करें?",
        "options_en": ["Using image/jpeg package", "Using jpeg package", "Using image.Decode()", "Using decode.JPEG()"],
        "options_hi": ["image/jpeg पैकेज का उपयोग करके", "jpeg पैकेज का उपयोग करके", "image.Decode() का उपयोग करके", "decode.JPEG() का उपयोग करके"],
        "answer_en": "Using image/jpeg package",
        "answer_hi": "image/jpeg पैकेज का उपयोग करके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the purpose of the 'database/sql' package?",
        "question_hi": "'database/sql' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For database operations", "For SQL queries", "For database connections", "For data storage"],
        "options_hi": ["डेटाबेस ऑपरेशन के लिए", "SQL क्वेरी के लिए", "डेटाबेस कनेक्शन के लिए", "डेटा स्टोरेज के लिए"],
        "answer_en": "For database operations",
        "answer_hi": "डेटाबेस ऑपरेशन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "How to open a database connection?",
        "question_hi": "डेटाबेस कनेक्शन कैसे ओपन करें?",
        "options_en": ["sql.Open()", "db.Open()", "database.Open()", "connection.Open()"],
        "options_hi": ["sql.Open()", "db.Open()", "database.Open()", "connection.Open()"],
        "answer_en": "sql.Open()",
        "answer_hi": "sql.Open()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "How to execute a SQL query?",
        "question_hi": "SQL क्वेरी कैसे एक्जिक्यूट करें?",
        "options_en": ["db.Query()", "sql.Execute()", "db.Exec()", "query.Execute()"],
        "options_hi": ["db.Query()", "sql.Execute()", "db.Exec()", "query.Execute()"],
        "answer_en": "db.Query()",
        "answer_hi": "db.Query()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the purpose of the 'os' package?",
        "question_hi": "'os' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For OS functionality", "For file operations", "For system calls", "For environment variables"],
        "options_hi": ["OS फंक्शनैलिटी के लिए", "फाइल ऑपरेशन के लिए", "सिस्टम कॉल के लिए", "एनवायरनमेंट वेरिएबल के लिए"],
        "answer_en": "For OS functionality",
        "answer_hi": "OS फंक्शनैलिटी के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "How to get environment variables?",
        "question_hi": "एनवायरनमेंट वेरिएबल कैसे प्राप्त करें?",
        "options_en": ["os.Getenv()", "env.Get()", "system.Getenv()", "getenv()"],
        "options_hi": ["os.Getenv()", "env.Get()", "system.Getenv()", "getenv()"],
        "answer_en": "os.Getenv()",
        "answer_hi": "os.Getenv()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "How to get command-line arguments?",
        "question_hi": "कमांड-लाइन आर्गुमेंट कैसे प्राप्त करें?",
        "options_en": ["os.Args", "args.Get()", "command.Args", "runtime.Args"],
        "options_hi": ["os.Args", "args.Get()", "command.Args", "runtime.Args"],
        "answer_en": "os.Args",
        "answer_hi": "os.Args",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the purpose of the 'io' package?",
        "question_hi": "'io' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For I/O primitives", "For input/output", "For stream operations", "For file I/O"],
        "options_hi": ["I/O प्रिमिटिव के लिए", "इनपुट/आउटपुट के लिए", "स्ट्रीम ऑपरेशन के लिए", "फाइल I/O के लिए"],
        "answer_en": "For I/O primitives",
        "answer_hi": "I/O प्रिमिटिव के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the purpose of the 'bufio' package?",
        "question_hi": "'bufio' पैकेज का उद्देश्य क्या है?",
        "options_en": ["For buffered I/O", "For buffer operations", "For I/O buffering", "For stream buffering"],
        "options_hi": ["बफर्ड I/O के लिए", "बफर ऑपरेशन के लिए", "I/O बफरिंग के लिए", "स्ट्रीम बफरिंग के लिए"],
        "answer_en": "For buffered I/O",
        "answer_hi": "बफर्ड I/O के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "How to create a buffered reader?",
        "question_hi": "बफर्ड रीडर कैसे बनाएं?",
        "options_en": ["bufio.NewReader()", "bufio.Reader()", "new bufio.Reader()", "bufio.CreateReader()"],
        "options_hi": ["bufio.NewReader()", "bufio.Reader()", "new bufio.Reader()", "bufio.CreateReader()"],
        "answer_en": "bufio.NewReader()",
        "answer_hi": "bufio.NewReader()",
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